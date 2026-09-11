import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const html = readFileSync(new URL('../../../DnD/col_agen_sheet.html', import.meta.url), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const storageKey = 'maltandmagic:col-agen:v1';

function browser(fetcher, saved = {}) {
  const storage = new Map(Object.entries(saved));
  storage.set('maltandmagic:col-agen:claim', 'test-claim');
  const nodes = new Map();
  const documentEvents = new Map();
  const windowEvents = new Map();
  const node = id => {
    if (!nodes.has(id)) nodes.set(id, {
      value: '', style: {}, dataset: {}, hidden: false, open: false,
      events: new Map(),
      addEventListener(type, handler) { this.events.set(type, handler); }, setAttribute() {},
      showModal() { this.open = true; }, close() { this.open = false; }
    });
    return nodes.get(id);
  };
  const context = vm.createContext({
    localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) },
    document: { getElementById: node, querySelectorAll: () => [], addEventListener: (type, handler) => documentEvents.set(type, handler), createElement: () => ({ set textContent(value) { this.innerHTML = value; } }) },
    window: { addEventListener: (type, handler) => windowEvents.set(type, handler) },
    fetch: fetcher, setTimeout: () => 1, clearTimeout() {}, console
  });
  vm.runInContext(script.replace('renderStatic();renderState();if(getClaimKey())connectCloud();', ''), context);
  return { run: expression => vm.runInContext(expression, context), storage, node, documentEvents, windowEvents };
}

function cloudSave(client, revision, gold) {
  const state = JSON.parse(client.run('JSON.stringify(state)'));
  state.currency.gp = gold;
  state.revision = revision;
  state.updatedAt = '2026-09-11T12:00:00.000Z';
  return { schemaVersion: 1, characterId: 'col-agen', revision, state };
}

test('a fresh claimed device loads cloud gold without uploading defaults', async () => {
  const requests = [];
  let remote;
  const client = browser(async (url, options) => {
    requests.push(options.method || 'GET');
    return Response.json(remote);
  });
  remote = cloudSave(client, 4, 123);
  await client.run('connectCloud()');
  assert.equal(client.run('state.currency.gp'), 123);
  assert.equal(client.node('cloudDialog').open, false);
  assert.equal(client.node('syncStatus').textContent, 'Cloud loaded');
  assert.deepEqual(requests, ['GET']);
  assert.equal(JSON.parse(client.storage.get(storageKey)).currency.gp, 123);
});

function cloud() {
  const server = { save: null, requests: [], beforeWrite: null };
  server.fetch = async (url, options) => {
    const method = options.method || 'GET';
    server.requests.push(method);
    if (method === 'GET') return Response.json(server.save || { revision: 0, state: null });
    const input = JSON.parse(options.body);
    if (server.beforeWrite) await server.beforeWrite();
    if (input.revision !== (server.save?.revision || 0)) return Response.json(server.save, { status: 409 });
    const revision = input.revision + 1;
    server.save = { revision, state: { ...input.state, revision, updatedAt: '2026-09-11T13:00:00.000Z' } };
    return Response.json(server.save);
  };
  return server;
}

test('gold edited on one device appears on a second device and on return to the first', async () => {
  const server = cloud();
  const first = browser(server.fetch);
  await first.run('connectCloud()');
  first.documentEvents.get('change')({ target: { id: '', dataset: { currency: 'gp' }, value: '87' } });
  await first.run('syncCloud()');
  assert.equal(server.save.state.currency.gp, 87);
  const second = browser(server.fetch);
  await second.run('connectCloud()');
  assert.equal(second.run('state.currency.gp'), 87);
  second.run('state.currency.gp=99;persist()');
  await second.run('syncCloud()');
  first.windowEvents.get('focus')();
  await first.run('cloudTask');
  assert.equal(first.run('state.currency.gp'), 99);
  const reloaded = browser(server.fetch, Object.fromEntries(first.storage));
  const uploads = server.requests.filter(method => method === 'PUT').length;
  await reloaded.run('connectCloud()');
  assert.equal(reloaded.run('state.currency.gp'), 99);
  assert.equal(server.requests.filter(method => method === 'PUT').length, uploads);
});

test('offline local edits conflict with newer cloud data and loading cloud cancels local changes', async () => {
  const server = cloud();
  const client = browser(server.fetch);
  await client.run('connectCloud()');
  client.run('state.currency.gp=72;persist()');
  server.save = cloudSave(client, 2, 101);
  await client.run('connectCloud()');
  assert.equal(client.run('state.currency.gp'), 72);
  assert.equal(client.node('syncStatus').textContent, 'Sync conflict');
  const uploads = server.requests.filter(method => method === 'PUT').length;
  await client.run('syncCloud()');
  assert.equal(server.requests.filter(method => method === 'PUT').length, uploads);
  client.node('loadCloudButton').events.get('click')();
  assert.equal(client.run('state.currency.gp'), 101);
  assert.equal(client.run('hasLocalCloudChanges()'), false);
});

test('explicit overwrite preserves local gold using the current cloud revision', async () => {
  const server = cloud();
  const client = browser(server.fetch);
  await client.run('connectCloud()');
  client.run('state.currency.gp=72;persist()');
  server.save = cloudSave(client, 2, 101);
  await client.run('connectCloud()');
  client.node('overwriteCloudButton').events.get('click')();
  await client.run('cloudTask');
  assert.equal(server.save.state.currency.gp, 72);
  assert.equal(server.save.revision, 3);
});

test('edits during an upload survive and are sent in a serialized follow-up', async () => {
  const server = cloud();
  const client = browser(server.fetch);
  await client.run('connectCloud()');
  client.run('state.currency.gp=80;persist()');
  let release;
  let started;
  const uploading = new Promise(resolve => { started = resolve; });
  server.beforeWrite = () => new Promise(resolve => { release = resolve; started(); });
  const task = client.run('syncCloud()');
  await uploading;
  client.run('state.currency.gp=90;persist();syncCloud()');
  server.beforeWrite = null;
  release();
  await task;
  assert.equal(client.run('state.currency.gp'), 90);
  assert.equal(server.save.state.currency.gp, 90);
  assert.equal(server.save.revision, 3);
  assert.equal(client.run('hasLocalCloudChanges()'), false);
});

test('network failure retains local edits and reconnect retries them', async () => {
  const server = cloud();
  let offline = false;
  const client = browser((...args) => {
    if (offline) throw new Error('Offline');
    return server.fetch(...args);
  });
  await client.run('connectCloud()');
  offline = true;
  client.run('state.currency.gp=77;persist()');
  await client.run('syncCloud()');
  assert.equal(client.run('state.currency.gp'), 77);
  assert.equal(client.run('hasLocalCloudChanges()'), true);
  assert.equal(client.node('syncStatus').textContent, 'Local only');
  offline = false;
  client.windowEvents.get('online')();
  await client.run('cloudTask');
  assert.equal(server.save.state.currency.gp, 77);
});

test('an unclaimed browser never uploads or downloads and keeps local data', async () => {
  const server = cloud();
  const client = browser(server.fetch);
  client.storage.delete('maltandmagic:col-agen:claim');
  client.run('state.currency.gp=65;persist()');
  await client.run('connectCloud()');
  assert.deepEqual(server.requests, []);
  assert.equal(client.run('state.currency.gp'), 65);
});

test('legacy browser saves without a baseline are not silently discarded', async () => {
  const server = cloud();
  const seed = browser(server.fetch);
  const saved = cloudSave(seed, 1, 64);
  server.save = cloudSave(seed, 2, 95);
  const client = browser(server.fetch, { [storageKey]: JSON.stringify(saved.state) });
  await client.run('connectCloud()');
  assert.equal(client.run('state.currency.gp'), 64);
  assert.equal(client.node('syncStatus').textContent, 'Sync conflict');
});