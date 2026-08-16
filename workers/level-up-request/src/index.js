const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const GITHUB_API_VERSION = '2022-11-28';
const MAX_REQUEST_BYTES = 4096;
const CUSTOM_SUBCLASS_PATTERN = /^[A-Za-z][A-Za-z0-9 '&-]{1,79}$/;

export default {
  async fetch(request, env) {
    return handleRequest(request, env);
  },
};

export async function handleRequest(request, env, fetcher = fetch) {
  const origin = request.headers.get('Origin') || '';
  const corsHeaders = getCorsHeaders(origin, env.ALLOWED_ORIGINS);

  if (new URL(request.url).pathname !== '/requests/level-up') {
    return jsonResponse({ error: 'Not found.' }, 404, corsHeaders);
  }

  if (request.method === 'OPTIONS') {
    return originAllowed(origin, env.ALLOWED_ORIGINS)
      ? new Response(null, { status: 204, headers: corsHeaders })
      : jsonResponse({ error: 'Origin not allowed.' }, 403);
  }

  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed.' }, 405, corsHeaders);
  }
  if (!originAllowed(origin, env.ALLOWED_ORIGINS)) {
    return jsonResponse({ error: 'Origin not allowed.' }, 403);
  }
  if (!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json')) {
    return jsonResponse({ error: 'Content-Type must be application/json.' }, 415, corsHeaders);
  }

  const contentLength = Number(request.headers.get('Content-Length') || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return jsonResponse({ error: 'Request is too large.' }, 413, corsHeaders);
  }

  let input;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > MAX_REQUEST_BYTES) {
      return jsonResponse({ error: 'Request is too large.' }, 413, corsHeaders);
    }
    input = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ error: 'Request body must be valid JSON.' }, 400, corsHeaders);
  }

  const levelUp = validateLevelUpRequest(input);
  if (!levelUp.ok) {
    return jsonResponse({ error: levelUp.error }, 400, corsHeaders);
  }

  const turnstile = await verifyTurnstile(input.turnstileToken, request, env, fetcher);
  if (!turnstile.ok) {
    return jsonResponse({ error: turnstile.error }, 403, corsHeaders);
  }

  const issue = buildIssue(levelUp.value, env.ISSUE_LABEL);
  const githubResponse = await fetcher(
    `https://api.github.com/repos/${encodeURIComponent(env.GITHUB_OWNER)}/${encodeURIComponent(env.GITHUB_REPO)}/issues`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'User-Agent': 'maltandmagic-level-up-worker',
        'X-GitHub-Api-Version': GITHUB_API_VERSION,
      },
      body: JSON.stringify(issue),
    },
  );

  if (!githubResponse.ok) {
    console.error('GitHub issue creation failed', githubResponse.status, await githubResponse.text());
    return jsonResponse({ error: 'The request could not be delivered. Please try again later.' }, 502, corsHeaders);
  }

  const createdIssue = await githubResponse.json();
  return jsonResponse(
    {
      ok: true,
      issueNumber: createdIssue.number,
      issueUrl: createdIssue.html_url,
    },
    201,
    corsHeaders,
  );
}

export function validateLevelUpRequest(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return { ok: false, error: 'Invalid level-up request.' };
  }
  if (input.characterId !== 'vellan-darkmere') {
    return { ok: false, error: 'Unknown character.' };
  }
  if (typeof input.turnstileToken !== 'string' || input.turnstileToken.length < 1 || input.turnstileToken.length > 2048) {
    return { ok: false, error: 'Complete the verification challenge.' };
  }

  const subclass = typeof input.subclass === 'string' ? input.subclass.trim() : '';
  if (subclass !== 'Thief' && !CUSTOM_SUBCLASS_PATTERN.test(subclass)) {
    return { ok: false, error: 'Choose a valid approved subclass.' };
  }

  if (!['fixed', 'rolled'].includes(input.hpMethod)) {
    return { ok: false, error: 'Choose a valid Hit Point method.' };
  }
  if (!Number.isInteger(input.hpIncrease) || input.hpIncrease < 1 || input.hpIncrease > 8) {
    return { ok: false, error: 'Hit Point increase must be from 1 to 8.' };
  }
  if (input.hpMethod === 'fixed' && input.hpIncrease !== 5) {
    return { ok: false, error: 'The fixed Hit Point increase must be 5.' };
  }

  return {
    ok: true,
    value: {
      subclass,
      subclassSource: subclass === 'Thief' ? 'SRD 5.2.1' : 'GM-approved external source',
      hpMethod: input.hpMethod,
      hpIncrease: input.hpIncrease,
    },
  };
}

export function buildIssue(levelUp, issueLabel) {
  const newMaxHp = 13 + levelUp.hpIncrease;
  const structuredRequest = {
    schemaVersion: 1,
    characterId: 'vellan-darkmere',
    sourceSheet: 'DnD/vellan_darkmere_sheet.html',
    from: { characterLevel: 2, classes: { rogue: 2 }, maxHp: 13 },
    to: { characterLevel: 3, classes: { rogue: 3 }, maxHp: newMaxHp },
    choices: levelUp,
    automaticGains: ['Steady Aim', 'Sneak Attack 2d6'],
  };
  const body = [
    '## Level-Up Request',
    '',
    '**Character:** Vellan Darkmere',
    '**Progression:** Rogue 2 to Rogue 3',
    `**Subclass:** ${levelUp.subclass}`,
    `**Hit Points:** +${levelUp.hpIncrease} (${levelUp.hpMethod === 'fixed' ? 'fixed value' : 'recorded d8 roll'}), maximum 13 to ${newMaxHp}`,
    '**Automatic gains:** Steady Aim; Sneak Attack increases to 2d6',
    '',
    '<!-- level-up-data',
    JSON.stringify(structuredRequest, null, 2),
    '-->',
  ].join('\n');

  return {
    title: '[Level Up] Vellan Darkmere - Rogue 3',
    body,
    ...(issueLabel ? { labels: [issueLabel] } : {}),
  };
}

async function verifyTurnstile(token, request, env, fetcher) {
  const formData = new FormData();
  formData.set('secret', env.TURNSTILE_SECRET_KEY);
  formData.set('response', token);
  const remoteIp = request.headers.get('CF-Connecting-IP');
  if (remoteIp) formData.set('remoteip', remoteIp);

  let response;
  try {
    response = await fetcher(TURNSTILE_VERIFY_URL, { method: 'POST', body: formData });
  } catch {
    return { ok: false, error: 'Verification is temporarily unavailable.' };
  }
  if (!response.ok) {
    return { ok: false, error: 'Verification is temporarily unavailable.' };
  }

  const result = await response.json();
  if (!result.success || result.action !== 'level-up-request') {
    return { ok: false, error: 'Verification failed. Please try again.' };
  }
  if (env.TURNSTILE_HOSTNAME && result.hostname !== env.TURNSTILE_HOSTNAME) {
    return { ok: false, error: 'Verification failed. Please try again.' };
  }
  return { ok: true };
}

function originAllowed(origin, allowedOrigins = '') {
  return allowedOrigins.split(',').map(value => value.trim()).filter(Boolean).includes(origin);
}

function getCorsHeaders(origin, allowedOrigins) {
  if (!originAllowed(origin, allowedOrigins)) return {};
  return {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function jsonResponse(body, status, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
  });
}