import assert from 'node:assert/strict';
import test from 'node:test';
import { handleRequest, validateSaveRequest } from '../src/index.js';

const claimKey = 'col-test-claim';
const claimHash = '3bc3caf05f6b32f6fccf96ffaa3348644dc2983d8dabb27228602dc1bef8c691';
const env = { ALLOWED_ORIGINS: 'https://blucreative.github.io', GITHUB_OWNER: 'blucreative', GITHUB_REPO: 'maltandmagic', GITHUB_TOKEN: 'token', SAVE_BRANCH: 'player-saves', COL_AGEN_CLAIM_SHA256: claimHash };
const state = { schemaVersion: 1, characterLevel: 2, revision: 0, hp: { current: 21, max: 21, temp: 0 }, resources: { innate: 2, sorcery: 2, slots1: 3, hitDice: 2 }, currency: { cp: 0, sp: 0, ep: 0, gp: 58, pp: 0 }, inventory: [{ name: 'Shovel', qty: 1, weight: 5 }], conditions: [], notes: { 'Personality Traits': '', Ideals: '', Bonds: '', Flaws: '', Appearance: '', 'Allies & Organizations': '', Backstory: '', 'Additional Notes': '' }, updatedAt: null };
function request(method, body, key = claimKey) { return new Request('https://worker.example/sheets/col-agen', { method, headers: { Origin: 'https://blucreative.github.io', Authorization: `Bearer ${key}`, ...(body ? { 'Content-Type': 'application/json' } : {}) }, ...(body ? { body: JSON.stringify(body) } : {}) }); }

test('validates the strict Col sheet schema', () => {
  assert.equal(validateSaveRequest({ revision: 0, state }).ok, true);
  assert.equal(validateSaveRequest({ revision: 0, state: { ...state, resources: { ...state.resources, slots1: 4 } } }).ok, false);
  assert.equal(validateSaveRequest({ revision: 0, state: { ...state, characterLevel: 1 } }).ok, false);
  assert.equal(validateSaveRequest({ revision: 0, state: { ...state, unexpected: true } }).ok, false);
  assert.equal(validateSaveRequest({ revision: 0, state: { ...state, notes: { ...state.notes, Backstory: 'x'.repeat(10001) } } }).ok, false);
});

test('rejects invalid claim keys before GitHub', async () => {
  let called = false;
  const response = await handleRequest(request('GET', null, 'wrong'), env, async () => { called = true; });
  assert.equal(response.status, 401);
  assert.equal(called, false);
});

test('creates and reads a versioned save', async () => {
  let stored = null;
  const fetcher = async (_url, options = {}) => {
    if (!options.method) return stored ? Response.json({ sha: 'abc', content: btoa(JSON.stringify(stored)) }) : new Response('', { status: 404 });
    stored = JSON.parse(atob(JSON.parse(options.body).content));
    return Response.json({ content: { sha: 'abc' } }, { status: 201 });
  };
  const put = await handleRequest(request('PUT', { revision: 0, state }), env, fetcher);
  assert.equal(put.status, 201);
  assert.equal((await put.json()).revision, 1);
  const get = await handleRequest(request('GET'), env, fetcher);
  const loaded = await get.json();
  assert.equal(get.status, 200);
  assert.equal(loaded.state.currency.gp, 58);
  assert.equal(loaded.revision, 1);
});

test('returns current remote data for stale revisions', async () => {
  const remote = { schemaVersion: 1, characterId: 'col-agen', revision: 3, state: { ...state, revision: 3 } };
  const response = await handleRequest(request('PUT', { revision: 2, state: { ...state, revision: 2 } }), env, async () => Response.json({ sha: 'abc', content: btoa(JSON.stringify(remote)) }));
  const body = await response.json();
  assert.equal(response.status, 409);
  assert.equal(body.revision, 3);
  assert.equal(body.state.revision, 3);
});

test('rejects disallowed origins', async () => {
  const bad = new Request('https://worker.example/sheets/col-agen', { method: 'GET', headers: { Origin: 'https://example.com', Authorization: `Bearer ${claimKey}` } });
  assert.equal((await handleRequest(bad, env)).status, 403);
});

test('advancement is atomic, idempotent, and protected from older clients', async () => {
  let stored = { schemaVersion: 1, characterId: 'col-agen', revision: 4, state: { ...structuredClone(state), revision: 4, currency: { ...state.currency, gp: 123 } } };
  let writes = 0;
  const fetcher = async (_url, options = {}) => {
    if (!options.method) return Response.json({ sha: 'abc', content: btoa(JSON.stringify(stored)) });
    stored = JSON.parse(atob(JSON.parse(options.body).content));
    writes += 1;
    return Response.json({ content: { sha: 'abc' } });
  };
  const advancement = {
    id: 'player-level-three', classId: 'sorcerer', hpRoll: 4, milestone: true,
    choices: { subclass: 'draconic-sorcery', spells: ['Grease', 'False Life', 'Fog Cloud', 'Shield', 'Web', 'Misty Step'], cantrips: ['Light', 'Mage Hand', 'Mending', 'Prestidigitation'], metamagic: ['Careful Spell', 'Quickened Spell'] }
  };
  const advance = revision => new Request('https://worker.example/sheets/col-agen/advancements', { method: 'POST', headers: { Origin: env.ALLOWED_ORIGINS, Authorization: `Bearer ${claimKey}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ revision, advancement }) });
  assert.equal((await handleRequest(advance(3), env, fetcher)).status, 409);
  assert.equal((await handleRequest(advance(4), env, fetcher)).status, 200);
  assert.equal(stored.state.characterLevel, 3);
  assert.equal(stored.state.hp.max, 34);
  assert.equal(stored.state.hp.current, 34);
  assert.equal(stored.state.currency.gp, 123);
  assert.deepEqual(stored.state.inventory, state.inventory);
  assert.equal(stored.state.resources.slots2, 2);
  assert.equal(validateSaveRequest({ revision: 5, state: stored.state }).ok, true);
  assert.equal((await handleRequest(advance(4), env, fetcher)).status, 200);
  assert.equal(writes, 1);
  assert.equal((await handleRequest(request('PUT', { revision: 5, state: { ...state, revision: 5 } }), env, fetcher)).status, 409);
  const edited = structuredClone(stored.state);
  edited.currency.gp = 150;
  assert.equal((await handleRequest(request('PUT', { revision: 5, state: edited }), env, fetcher)).status, 200);
  assert.equal(stored.state.currency.gp, 150);
  assert.equal(stored.state.progression.history.length, 1);
});