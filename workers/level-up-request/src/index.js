const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const GITHUB_API_VERSION = '2022-11-28';
const MAX_REQUEST_BYTES = 4096;
const SUBCLASS_OPTIONS = {
  'Arcane Trickster': {
    source: "Player's Handbook",
    features: ['Spellcasting', 'Mage Hand Legerdemain'],
  },
  Assassin: {
    source: "Player's Handbook",
    features: ['Assassinate', "Assassin's Tools"],
  },
  'Scion of the Three': {
    source: 'Forgotten Realms: Heroes of Faerun',
    features: ['Bloodthirst', 'Dread Allegiance'],
  },
  Soulknife: {
    source: "Player's Handbook",
    features: ['Psionic Power (4d6 Energy Dice)', 'Psychic Blades'],
  },
  Thief: {
    source: 'SRD 5.2.1',
    features: ['Fast Hands', 'Second-Story Work'],
  },
  Runetagger: {
    source: "The Griffon's Saddlebag: Book One",
    features: ['Impressionist', 'Runes (4 Rune Points)'],
  },
  'Shadow Stalker': {
    source: 'Cthulhu by Torchlight',
    features: ['Shadowy Reflection', 'Shadow Motes (3)'],
  },
};
const WIZARD_CANTRIPS = new Set([
  'Acid Splash', 'Chill Touch', 'Dancing Lights', 'Elementalism', 'Fire Bolt', 'Light',
  'Mending', 'Message', 'Minor Illusion', 'Poison Spray', 'Prestidigitation',
  'Ray of Frost', 'Shocking Grasp', 'True Strike',
]);
const LEVEL_ONE_WIZARD_SPELLS = new Set([
  'Alarm', 'Burning Hands', 'Charm Person', 'Chromatic Orb', 'Color Spray',
  'Comprehend Languages', 'Detect Magic', 'Disguise Self', 'Expeditious Retreat',
  'False Life', 'Feather Fall', 'Find Familiar', 'Floating Disk', 'Fog Cloud', 'Grease',
  'Hideous Laughter', 'Ice Knife', 'Identify', 'Illusory Script', 'Jump', 'Longstrider',
  'Mage Armor', 'Magic Missile', 'Protection from Evil and Good', 'Ray of Sickness',
  'Shield', 'Silent Image', 'Sleep', 'Thunderwave', 'Unseen Servant', 'Witch Bolt',
]);
const DEAD_THREE = new Set(['Bane', 'Bhaal', 'Myrkul']);
const METAMAGIC_OPTIONS = new Set([
  'Careful Spell', 'Distant Spell', 'Empowered Spell', 'Extended Spell', 'Heightened Spell',
  'Quickened Spell', 'Seeking Spell', 'Subtle Spell', 'Transmuted Spell', 'Twinned Spell',
]);
const LEVEL_ONE_SORCERER_SPELLS = new Set([
  'Burning Hands', 'Charm Person', 'Chromatic Orb', 'Color Spray', 'Comprehend Languages',
  'Detect Magic', 'Disguise Self', 'Expeditious Retreat', 'False Life', 'Feather Fall',
  'Fog Cloud', 'Grease', 'Ice Knife', 'Jump', 'Mage Armor', 'Magic Missile',
  'Ray of Sickness', 'Shield', 'Silent Image', 'Sleep', 'Thunderwave', 'Witch Bolt',
]);
const COL_CURRENT_SPELLS = new Set(['False Life', 'Grease']);

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
  if (typeof input.turnstileToken !== 'string' || input.turnstileToken.length < 1 || input.turnstileToken.length > 2048) {
    return { ok: false, error: 'Complete the verification challenge.' };
  }

  if (input.characterId === 'col-agen') return validateColLevelUp(input);
  if (input.characterId !== 'vellan-darkmere') return { ok: false, error: 'Unknown character.' };

  const subclass = typeof input.subclass === 'string' ? input.subclass.trim() : '';
  if (!SUBCLASS_OPTIONS[subclass]) return { ok: false, error: 'Choose an available Rogue subclass.' };

  const subclassDetails = validateSubclassDetails(subclass, input.subclassDetails);
  if (!subclassDetails.ok) return subclassDetails;

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
      subclassSource: SUBCLASS_OPTIONS[subclass].source,
      subclassFeatures: SUBCLASS_OPTIONS[subclass].features,
      subclassDetails: subclassDetails.value,
      hpMethod: input.hpMethod,
      hpIncrease: input.hpIncrease,
    },
  };
}

function validateColLevelUp(input) {
  const metamagic = validateUniqueSelections(input.metamagic, 2, METAMAGIC_OPTIONS);
  if (!metamagic) return { ok: false, error: 'Choose two different Metamagic options.' };
  const preparedSpells = validateUniqueSelections(input.preparedSpells, 2, LEVEL_ONE_SORCERER_SPELLS);
  if (!preparedSpells || preparedSpells.some(spell => COL_CURRENT_SPELLS.has(spell))) {
    return { ok: false, error: 'Choose two different new level 1 Sorcerer spells.' };
  }

  let spellReplacement = null;
  if (input.spellReplacement !== null && input.spellReplacement !== undefined) {
    const from = typeof input.spellReplacement?.from === 'string' ? input.spellReplacement.from.trim() : '';
    const to = typeof input.spellReplacement?.to === 'string' ? input.spellReplacement.to.trim() : '';
    if (!COL_CURRENT_SPELLS.has(from) || !LEVEL_ONE_SORCERER_SPELLS.has(to) || COL_CURRENT_SPELLS.has(to) || preparedSpells.includes(to)) {
      return { ok: false, error: 'Choose a valid, distinct prepared-spell replacement.' };
    }
    spellReplacement = { from, to };
  }

  if (!['fixed', 'rolled'].includes(input.hpMethod)) return { ok: false, error: 'Choose a valid Hit Point method.' };
  const hpRoll = input.hpMethod === 'rolled' ? input.hpRoll : null;
  const expectedIncrease = input.hpMethod === 'fixed' ? 10 : hpRoll + 6;
  if (input.hpMethod === 'rolled' && (!Number.isInteger(hpRoll) || hpRoll < 1 || hpRoll > 6)) {
    return { ok: false, error: 'The recorded Hit Die roll must be from 1 to 6.' };
  }
  if (!Number.isInteger(input.hpIncrease) || input.hpIncrease !== expectedIncrease) {
    return { ok: false, error: 'The Hit Point increase does not match the selected method.' };
  }

  return { ok: true, value: { characterId: 'col-agen', metamagic, preparedSpells, spellReplacement, hpMethod: input.hpMethod, hpRoll, hpIncrease: input.hpIncrease } };
}

function validateSubclassDetails(subclass, details) {
  const value = details && typeof details === 'object' && !Array.isArray(details) ? details : {};
  if (subclass === 'Arcane Trickster') {
    const cantrips = validateUniqueSelections(value.cantrips, 2, WIZARD_CANTRIPS);
    if (!cantrips) return { ok: false, error: 'Choose two different Wizard cantrips in addition to Mage Hand.' };
    const preparedSpells = validateUniqueSelections(value.preparedSpells, 3, LEVEL_ONE_WIZARD_SPELLS);
    if (!preparedSpells) return { ok: false, error: 'Choose three different level 1 Wizard spells.' };
    return { ok: true, value: { cantrips, preparedSpells } };
  }
  if (subclass === 'Scion of the Three') {
    const dreadAllegiance = typeof value.dreadAllegiance === 'string' ? value.dreadAllegiance.trim() : '';
    if (!DEAD_THREE.has(dreadAllegiance)) {
      return { ok: false, error: 'Choose Bane, Bhaal, or Myrkul for Dread Allegiance.' };
    }
    return { ok: true, value: { dreadAllegiance } };
  }
  return { ok: true, value: {} };
}

function validateUniqueSelections(value, count, allowed) {
  if (!Array.isArray(value) || value.length !== count) return null;
  const selections = value.map(item => typeof item === 'string' ? item.trim() : '');
  if (new Set(selections).size !== count || selections.some(item => !allowed.has(item))) return null;
  return selections;
}

export function buildIssue(levelUp, issueLabel) {
  if (levelUp.characterId === 'col-agen') return buildColIssue(levelUp, issueLabel);
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
  const subclassChoiceLines = buildSubclassChoiceLines(levelUp);
  const body = [
    '## Level-Up Request',
    '',
    '**Character:** Vellan Darkmere',
    '**Progression:** Rogue 2 to Rogue 3',
    `**Subclass:** ${levelUp.subclass}`,
    `**Source:** ${levelUp.subclassSource}`,
    `**Subclass features:** ${levelUp.subclassFeatures.join('; ')}`,
    ...subclassChoiceLines,
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

function buildColIssue(levelUp, issueLabel) {
  const newMaxHp = 10 + levelUp.hpIncrease;
  const structuredRequest = {
    schemaVersion: 1,
    characterId: 'col-agen',
    sourceSheet: 'DnD/col_agen_sheet.html',
    from: { characterLevel: 1, classes: { sorcerer: 1 }, maxHp: 10 },
    to: { characterLevel: 2, classes: { sorcerer: 2 }, maxHp: newMaxHp },
    choices: levelUp,
    automaticGains: ['Font of Magic', '2 Sorcery Points', '3 level 1 spell slots', '4 prepared spells'],
  };
  const body = [
    '## Level-Up Request', '', '**Character:** Col Agen', '**Progression:** Sorcerer 1 to Sorcerer 2',
    `**Metamagic:** ${levelUp.metamagic.join('; ')}`,
    `**New prepared spells:** ${levelUp.preparedSpells.join('; ')}`,
    `**Spell replacement:** ${levelUp.spellReplacement ? `${levelUp.spellReplacement.from} to ${levelUp.spellReplacement.to}` : 'None'}`,
    `**Hit Points:** +${levelUp.hpIncrease} (${levelUp.hpMethod === 'fixed' ? 'fixed 4 + Constitution 4 + Tough 2' : `d6 roll ${levelUp.hpRoll} + Constitution 4 + Tough 2`}), maximum 10 to ${newMaxHp}`,
    '**Automatic gains:** Font of Magic; 2 Sorcery Points; 3 level 1 spell slots; 4 prepared spells',
    '', '<!-- level-up-data', JSON.stringify(structuredRequest, null, 2), '-->',
  ].join('\n');
  return { title: '[Level Up] Col Agen - Sorcerer 2', body, ...(issueLabel ? { labels: [issueLabel] } : {}) };
}

function buildSubclassChoiceLines(levelUp) {
  if (levelUp.subclass === 'Arcane Trickster') {
    return [
      `**Cantrips:** Mage Hand; ${levelUp.subclassDetails.cantrips.join('; ')}`,
      `**Prepared level 1 spells:** ${levelUp.subclassDetails.preparedSpells.join('; ')}`,
    ];
  }
  if (levelUp.subclass === 'Scion of the Three') {
    return [`**Dread Allegiance:** ${levelUp.subclassDetails.dreadAllegiance}`];
  }
  return [];
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