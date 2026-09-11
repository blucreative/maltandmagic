import { applyAdvancement, deriveCharacter } from '../../../assets/js/advancement-engine.mjs';

const GITHUB_API_VERSION = '2022-11-28';
const MAX_REQUEST_BYTES = 262144;
const CHARACTER = { id: 'col-agen', path: 'player-saves/col-agen.json', hashEnv: 'COL_AGEN_CLAIM_SHA256' };
const NOTE_KEYS = new Set(['Personality Traits', 'Ideals', 'Bonds', 'Flaws', 'Appearance', 'Allies & Organizations', 'Backstory', 'Additional Notes']);
const CONDITIONS = new Set(['Blinded', 'Charmed', 'Deafened', 'Frightened', 'Grappled', 'Incapacitated', 'Invisible', 'Paralyzed', 'Poisoned', 'Prone', 'Restrained', 'Stunned']);

export default { async fetch(request, env) { return handleRequest(request, env); } };

export async function handleRequest(request, env, fetcher = fetch) {
  const origin = request.headers.get('Origin') || '';
  const cors = corsHeaders(origin, env.ALLOWED_ORIGINS);
  const pathMatch = new URL(request.url).pathname.match(/^\/sheets\/([a-z0-9-]+)(\/advancements)?$/);
  if (!pathMatch) return json({ error: 'Not found.' }, 404, cors);
  if (request.method === 'OPTIONS') return originAllowed(origin, env.ALLOWED_ORIGINS) ? new Response(null, { status: 204, headers: cors }) : json({ error: 'Origin not allowed.' }, 403);
  if (!originAllowed(origin, env.ALLOWED_ORIGINS)) return json({ error: 'Origin not allowed.' }, 403);
  if (pathMatch[1] !== CHARACTER.id) return json({ error: 'Unknown character.' }, 404, cors);
  const advancement = Boolean(pathMatch[2]);
  if (!(advancement ? ['POST'] : ['GET', 'PUT']).includes(request.method)) return json({ error: 'Method not allowed.' }, 405, cors);

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
  const checked = advancement ? validateAdvancementRequest(input) : validateSaveRequest(input);
  if (!checked.ok) return json({ error: checked.error }, 400, cors);

  const remote = await readRemote(env, fetcher);
  if (!remote.ok) return json({ error: remote.error }, remote.status, cors);
  const currentRevision = remote.save?.revision || 0;
  if (advancement) {
    const existing = remote.save?.state?.progression?.history.find(entry => entry.id === input.advancement.id);
    if (existing) {
      const same = existing.classId === input.advancement.classId && existing.hpRoll === input.advancement.hpRoll && canonical(existing.choices) === canonical(input.advancement.choices);
      return same ? json(remote.save, 200, cors) : json({ error: 'Advancement ID already used for different choices.' }, 400, cors);
    }
  }
  if (checked.value.revision !== currentRevision) return json({ error: 'Save conflict.', ...remote.save }, 409, cors);

  let nextState;
  if (advancement) {
    if (!remote.save?.state) return json({ error: 'Claim and save the character before advancing.' }, 400, cors);
    try { nextState = applyAdvancement(remote.save.state, input.advancement); }
    catch (error) { return json({ error: error.message }, 400, cors); }
  } else {
    if (canonical(input.state.progression || null) !== canonical(remote.save?.state?.progression || null)) return json({ error: 'Advancement history is protected. Reload the current sheet before saving.', ...remote.save }, 409, cors);
    if (remote.save?.state?.schemaVersion === 2 && input.state.schemaVersion !== 2) return json({ error: 'This client is outdated. Reload the character sheet.', ...remote.save }, 409, cors);
    nextState = checked.value.state;
  }

  const nextRevision = currentRevision + 1;
  const savedAt = new Date().toISOString();
  const state = { ...nextState, revision: nextRevision, updatedAt: savedAt };
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
  const allowed = new Set(['schemaVersion', 'characterLevel', 'revision', 'hp', 'resources', 'currency', 'inventory', 'conditions', 'notes', 'updatedAt', 'progression', 'advancementDraft']);
  if (![1, 2].includes(state.schemaVersion) || state.revision !== input.revision || Object.keys(state).some(key => !allowed.has(key))) return { ok: false, error: 'Unsupported sheet state.' };
  if (state.advancementDraft !== undefined && state.advancementDraft !== null && (!plainObject(state.advancementDraft) || JSON.stringify(state.advancementDraft).length > 16000)) return { ok: false, error: 'Invalid advancement draft.' };
  let caps = { innate: 2, sorcery: 2, slots1: 3, hitDice: 2 };
  if (state.schemaVersion === 1) {
    if (state.characterLevel !== 2 || state.progression) return { ok: false, error: 'Unsupported sheet state.' };
  } else {
    try {
      const character = deriveCharacter(state.progression);
      if (state.characterLevel !== character.totalLevel || state.hp?.max !== character.hpMax || character.totalLevel > 20) throw new Error('Invalid progression');
      caps = character.resources;
    } catch { return { ok: false, error: 'Invalid progression state.' }; }
  }
  if (!numericObject(state.hp, { current: [0, 999], max: [1, 999], temp: [0, 999] })) return { ok: false, error: 'Invalid Hit Point state.' };
  if (!numericObject(state.resources, Object.fromEntries(Object.entries(caps).map(([key, cap]) => [key, [0, cap]]))) || Object.values(state.resources).some(value => !Number.isInteger(value))) return { ok: false, error: 'Invalid resource state.' };
  if (!numericObject(state.currency, { cp: [0, 999999], sp: [0, 999999], ep: [0, 999999], gp: [0, 999999], pp: [0, 999999] })) return { ok: false, error: 'Invalid currency state.' };
  if (!Array.isArray(state.inventory) || state.inventory.length > 100 || state.inventory.some(item => !plainObject(item) || Object.keys(item).length !== 3 || typeof item.name !== 'string' || item.name.length > 100 || !boundedNumber(item.qty, 0, 9999) || !boundedNumber(item.weight, 0, 1000))) return { ok: false, error: 'Invalid inventory state.' };
  if (!Array.isArray(state.conditions) || new Set(state.conditions).size !== state.conditions.length || state.conditions.some(value => !CONDITIONS.has(value))) return { ok: false, error: 'Invalid condition state.' };
  if (!plainObject(state.notes) || Object.keys(state.notes).length !== NOTE_KEYS.size || Object.keys(state.notes).some(key => !NOTE_KEYS.has(key)) || [...NOTE_KEYS].some(key => typeof state.notes[key] !== 'string' || state.notes[key].length > 10000)) return { ok: false, error: 'Invalid notes state.' };
  if (state.updatedAt !== null && (typeof state.updatedAt !== 'string' || state.updatedAt.length > 64)) return { ok: false, error: 'Invalid update timestamp.' };
  return { ok: true, value: { revision: input.revision, state } };
}

function validateAdvancementRequest(input) {
  if (!plainObject(input) || Object.keys(input).length !== 2 || !Number.isInteger(input.revision) || input.revision < 0 || !plainObject(input.advancement)) return { ok: false, error: 'Invalid advancement request.' };
  const request = input.advancement;
  const allowed = new Set(['id', 'classId', 'hpRoll', 'milestone', 'choices']);
  if (Object.keys(request).some(key => !allowed.has(key)) || request.milestone !== true || typeof request.id !== 'string' || !/^[a-zA-Z0-9-]{1,80}$/.test(request.id) || !plainObject(request.choices)) return { ok: false, error: 'Invalid advancement choices.' };
  return { ok: true, value: input };
}

function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (plainObject(value)) return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`;
  return JSON.stringify(value);
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
function corsHeaders(origin, allowed) { return originAllowed(origin, allowed) ? { 'Access-Control-Allow-Headers': 'Authorization, Content-Type', 'Access-Control-Allow-Methods': 'GET, PUT, POST, OPTIONS', 'Access-Control-Allow-Origin': origin, 'Access-Control-Max-Age': '86400', Vary: 'Origin' } : {}; }
function json(body, status, headers = {}) { return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers } }); }