const GITHUB_API_VERSION = '2022-11-28';
const MAX_REQUEST_BYTES = 32768;
const CHARACTER = { id: 'col-agen', path: 'player-saves/col-agen.json', hashEnv: 'COL_AGEN_CLAIM_SHA256' };
const NOTE_KEYS = new Set(['Personality Traits', 'Ideals', 'Bonds', 'Flaws', 'Appearance', 'Allies & Organizations', 'Backstory', 'Additional Notes']);
const CONDITIONS = new Set(['Blinded', 'Charmed', 'Deafened', 'Frightened', 'Grappled', 'Incapacitated', 'Invisible', 'Paralyzed', 'Poisoned', 'Prone', 'Restrained', 'Stunned']);

export default { async fetch(request, env) { return handleRequest(request, env); } };

export async function handleRequest(request, env, fetcher = fetch) {
  const origin = request.headers.get('Origin') || '';
  const cors = corsHeaders(origin, env.ALLOWED_ORIGINS);
  const pathMatch = new URL(request.url).pathname.match(/^\/sheets\/([a-z0-9-]+)$/);
  if (!pathMatch) return json({ error: 'Not found.' }, 404, cors);
  if (request.method === 'OPTIONS') return originAllowed(origin, env.ALLOWED_ORIGINS) ? new Response(null, { status: 204, headers: cors }) : json({ error: 'Origin not allowed.' }, 403);
  if (!originAllowed(origin, env.ALLOWED_ORIGINS)) return json({ error: 'Origin not allowed.' }, 403);
  if (pathMatch[1] !== CHARACTER.id) return json({ error: 'Unknown character.' }, 404, cors);
  if (!['GET', 'PUT'].includes(request.method)) return json({ error: 'Method not allowed.' }, 405, cors);

  const claimKey = bearerToken(request.headers.get('Authorization'));
  if (!claimKey || !(await validClaim(claimKey, env[CHARACTER.hashEnv]))) return json({ error: 'Invalid claim key.' }, 401, cors);
  const rate = await env.SHEET_SAVE_RATE_LIMITER?.limit({ key: `${pathMatch[1]}:${request.headers.get('CF-Connecting-IP') || 'unknown'}` });
  if (rate && !rate.success) return json({ error: 'Too many save requests. Try again shortly.' }, 429, cors);

  if (request.method === 'GET') {
    const remote = await readRemote(env, fetcher);
    if (!remote.ok) return json({ error: remote.error }, remote.status, cors);
    return json(remote.save || { characterId: CHARACTER.id, revision: 0, state: null }, 200, cors);
  }
  if (!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json')) return json({ error: 'Content-Type must be application/json.' }, 415, cors);
  const contentLength = Number(request.headers.get('Content-Length') || 0);
  if (contentLength > MAX_REQUEST_BYTES) return json({ error: 'Request is too large.' }, 413, cors);

  let input;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).length > MAX_REQUEST_BYTES) return json({ error: 'Request is too large.' }, 413, cors);
    input = JSON.parse(raw);
  } catch {
    return json({ error: 'Request body must be valid JSON.' }, 400, cors);
  }
  const checked = validateSaveRequest(input);
  if (!checked.ok) return json({ error: checked.error }, 400, cors);

  const remote = await readRemote(env, fetcher);
  if (!remote.ok) return json({ error: remote.error }, remote.status, cors);
  const currentRevision = remote.save?.revision || 0;
  if (checked.value.revision !== currentRevision) return json({ error: 'Save conflict.', ...remote.save }, 409, cors);

  const nextRevision = currentRevision + 1;
  const savedAt = new Date().toISOString();
  const state = { ...checked.value.state, revision: nextRevision, updatedAt: savedAt };
  const save = { schemaVersion: 1, characterId: CHARACTER.id, revision: nextRevision, updatedAt: savedAt, state };
  const write = await writeRemote(save, remote.sha, env, fetcher);
  if (!write.ok) {
    if (write.status === 409) {
      const latest = await readRemote(env, fetcher);
      return json({ error: 'Save conflict.', ...(latest.save || {}) }, 409, cors);
    }
    return json({ error: write.error }, write.status, cors);
  }
  return json(save, remote.save ? 200 : 201, cors);
}

export function validateSaveRequest(input) {
  if (!plainObject(input) || !Number.isInteger(input.revision) || input.revision < 0 || !plainObject(input.state)) return { ok: false, error: 'Invalid save request.' };
  const state = input.state;
  const allowed = new Set(['schemaVersion', 'characterLevel', 'revision', 'hp', 'resources', 'currency', 'inventory', 'conditions', 'notes', 'updatedAt']);
  if (state.schemaVersion !== 1 || state.characterLevel !== 2 || state.revision !== input.revision || Object.keys(state).some(key => !allowed.has(key))) return { ok: false, error: 'Unsupported sheet state.' };
  if (!numericObject(state.hp, { current: [0, 999], max: [1, 999], temp: [0, 999] })) return { ok: false, error: 'Invalid Hit Point state.' };
  if (!numericObject(state.resources, { innate: [0, 2], sorcery: [0, 2], slots1: [0, 3], hitDice: [0, 2] })) return { ok: false, error: 'Invalid resource state.' };
  if (!numericObject(state.currency, { cp: [0, 999999], sp: [0, 999999], ep: [0, 999999], gp: [0, 999999], pp: [0, 999999] })) return { ok: false, error: 'Invalid currency state.' };
  if (!Array.isArray(state.inventory) || state.inventory.length > 100 || state.inventory.some(item => !plainObject(item) || Object.keys(item).length !== 3 || typeof item.name !== 'string' || item.name.length > 100 || !boundedNumber(item.qty, 0, 9999) || !boundedNumber(item.weight, 0, 1000))) return { ok: false, error: 'Invalid inventory state.' };
  if (!Array.isArray(state.conditions) || new Set(state.conditions).size !== state.conditions.length || state.conditions.some(value => !CONDITIONS.has(value))) return { ok: false, error: 'Invalid condition state.' };
  if (!plainObject(state.notes) || Object.keys(state.notes).length !== NOTE_KEYS.size || Object.keys(state.notes).some(key => !NOTE_KEYS.has(key)) || [...NOTE_KEYS].some(key => typeof state.notes[key] !== 'string' || state.notes[key].length > 10000)) return { ok: false, error: 'Invalid notes state.' };
  if (state.updatedAt !== null && (typeof state.updatedAt !== 'string' || state.updatedAt.length > 64)) return { ok: false, error: 'Invalid update timestamp.' };
  return { ok: true, value: { revision: input.revision, state } };
}

async function readRemote(env, fetcher) {
  const response = await fetcher(contentsUrl(env, true), { headers: githubHeaders(env) });
  if (response.status === 404) return { ok: true, save: null, sha: null };
  if (!response.ok) return { ok: false, status: 502, error: 'The cloud save could not be loaded.' };
  try {
    const file = await response.json();
    const save = JSON.parse(decodeBase64(file.content));
    if (save.schemaVersion !== 1 || save.characterId !== CHARACTER.id || !Number.isInteger(save.revision)) throw new Error('Invalid remote save');
    return { ok: true, save, sha: file.sha };
  } catch {
    return { ok: false, status: 502, error: 'The cloud save is invalid.' };
  }
}

async function writeRemote(save, sha, env, fetcher) {
  const body = { message: `Save ${CHARACTER.id} revision ${save.revision}`, content: encodeBase64(JSON.stringify(save, null, 2) + '\n'), branch: env.SAVE_BRANCH };
  if (sha) body.sha = sha;
  const response = await fetcher(contentsUrl(env, false), { method: 'PUT', headers: { ...githubHeaders(env), 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  if (response.status === 409 || response.status === 422) return { ok: false, status: 409, error: 'Save conflict.' };
  if (!response.ok) return { ok: false, status: 502, error: 'The cloud save could not be written.' };
  return { ok: true };
}

function contentsUrl(env, includeRef) { const base = `https://api.github.com/repos/${encodeURIComponent(env.GITHUB_OWNER)}/${encodeURIComponent(env.GITHUB_REPO)}/contents/${CHARACTER.path}`; return includeRef ? `${base}?ref=${encodeURIComponent(env.SAVE_BRANCH)}` : base; }
function githubHeaders(env) { return { Accept: 'application/vnd.github+json', Authorization: `Bearer ${env.GITHUB_TOKEN}`, 'User-Agent': 'maltandmagic-sheet-save-worker', 'X-GitHub-Api-Version': GITHUB_API_VERSION }; }
function bearerToken(header) { return header?.startsWith('Bearer ') ? header.slice(7) : ''; }
async function validClaim(value, expected) { if (!expected || !/^[a-f0-9]{64}$/i.test(expected)) return false; const actual = [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value)))].map(byte => byte.toString(16).padStart(2, '0')).join(''); let mismatch = actual.length ^ expected.length; for (let index = 0; index < Math.min(actual.length, expected.length); index += 1) mismatch |= actual.charCodeAt(index) ^ expected.toLowerCase().charCodeAt(index); return mismatch === 0; }
function plainObject(value) { return value && typeof value === 'object' && !Array.isArray(value); }
function boundedNumber(value, min, max) { return Number.isFinite(value) && value >= min && value <= max; }
function numericObject(value, shape) { return plainObject(value) && Object.keys(value).length === Object.keys(shape).length && Object.entries(shape).every(([key, [min, max]]) => boundedNumber(value[key], min, max)); }
function encodeBase64(value) { const bytes = new TextEncoder().encode(value); let binary = ''; bytes.forEach(byte => { binary += String.fromCharCode(byte); }); return btoa(binary); }
function decodeBase64(value) { const binary = atob(value.replace(/\s/g, '')); return new TextDecoder().decode(Uint8Array.from(binary, char => char.charCodeAt(0))); }
function originAllowed(origin, allowed = '') { return allowed.split(',').map(value => value.trim()).filter(Boolean).includes(origin); }
function corsHeaders(origin, allowed) { return originAllowed(origin, allowed) ? { 'Access-Control-Allow-Headers': 'Authorization, Content-Type', 'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS', 'Access-Control-Allow-Origin': origin, 'Access-Control-Max-Age': '86400', Vary: 'Origin' } : {}; }
function json(body, status, headers = {}) { return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers } }); }