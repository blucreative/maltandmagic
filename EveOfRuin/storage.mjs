const DATABASE = 'eve-of-ruin-gm-v1';
const STORE = 'campaign';
export const MAX_BACKUP_BYTES = 512 * 1024 * 1024;
let knownRevision = null;
let knownPack = null;
let knownPackSize = 0;
let knownAssets = new Map();
let legacyLayout = false;
let writeQueue = Promise.resolve();

export async function openStore() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(new Error(`Cannot open local storage: ${request.error.message}`));
    request.onblocked = () => reject(new Error('Close other portal tabs so local storage can open.'));
  });
}

export async function readCampaign(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE);
    const store = transaction.objectStore(STORE);
    const request = store.get('active');
    let active;
    let pack;
    let assets = [];
    let malformed = false;
    request.onsuccess = () => {
      active = request.result;
      if (active?.layout === 2) {
        if (!Array.isArray(active.assetIds) || !active.assetIds.every(id => typeof id === 'string') || new Set(active.assetIds).size !== active.assetIds.length) {
          malformed = true;
          return;
        }
        const packRequest = store.get('pack');
        packRequest.onsuccess = () => { pack = packRequest.result; };
        assets = new Array(active.assetIds.length);
        active.assetIds.forEach((id, index) => {
          const assetRequest = store.get(`asset:${id}`);
          assetRequest.onsuccess = () => { assets[index] = assetRequest.result; };
        });
      }
    };
    transaction.oncomplete = () => {
      knownRevision = active?.storageRevision ?? null;
      if (malformed || (active?.layout === 2 && (!pack || assets.some(asset => !asset)))) {
        reject(new Error('Local campaign data is incomplete. Restore a private backup; existing data has not been overwritten.'));
        return;
      }
      const result = active?.layout === 2 ? { pack, assets, state: active.state } : active ?? null;
      knownPack = result?.pack ?? null;
      knownPackSize = knownPack ? new Blob([JSON.stringify(knownPack)]).size : 0;
      knownAssets = new Map((result?.assets ?? []).map(asset => [asset.id, asset]));
      legacyLayout = Boolean(active && active.layout !== 2);
      resolve(result);
    };
    transaction.onerror = () => reject(new Error(`Cannot read your campaign: ${transaction.error?.message ?? 'storage read failed'}`));
    transaction.onabort = () => reject(new Error('Reading your local campaign was interrupted. Reload before editing.'));
  });
}

export async function writeCampaign(db, value) {
  const snapshot = { state: structuredClone(value.state), pack: value.pack, assets: [...value.assets] };
  const operation = writeQueue.then(() => new Promise((resolve, reject) => {
    const packSize = snapshot.pack === knownPack ? knownPackSize : new Blob([JSON.stringify(snapshot.pack)]).size;
    const assetsSize = snapshot.assets.reduce((sum, asset) => sum + (asset.data?.length ?? 0) + new Blob([JSON.stringify({ ...asset, data: '' })]).size, 0);
    const stateSize = new Blob([JSON.stringify(snapshot.state)]).size;
    if (packSize + assetsSize + stateSize > MAX_BACKUP_BYTES - 16384) {
      reject(new Error('Campaign storage exceeds the 512 MB backup limit. Remove an unused local image or reduce supplemental material before saving.'));
      return;
    }
    const transaction = db.transaction(STORE, 'readwrite');
    const store = transaction.objectStore(STORE);
    const request = store.get('active');
    const revision = crypto.randomUUID();
    let conflict = false;
    request.onsuccess = () => {
      if ((request.result?.storageRevision ?? null) !== knownRevision) {
        conflict = true;
        transaction.abort();
        return;
      }
      store.put({ layout: 2, state: snapshot.state, assetIds: snapshot.assets.map(asset => asset.id), storageRevision: revision }, 'active');
      if (legacyLayout || snapshot.pack !== knownPack) store.put(snapshot.pack, 'pack');
      for (const asset of snapshot.assets) {
        if (legacyLayout || knownAssets.get(asset.id) !== asset) store.put(asset, `asset:${asset.id}`);
      }
      const keptIds = new Set(snapshot.assets.map(asset => asset.id));
      for (const id of knownAssets.keys()) if (!keptIds.has(id)) store.delete(`asset:${id}`);
    };
    transaction.oncomplete = () => {
      knownRevision = revision;
      knownPack = snapshot.pack;
      knownPackSize = packSize;
      knownAssets = new Map(snapshot.assets.map(asset => [asset.id, asset]));
      legacyLayout = false;
      resolve();
    };
    transaction.onabort = () => reject(new Error(conflict
      ? 'Another portal tab changed this campaign. Your changes were NOT saved. Export this tab’s work, then reload before editing again.'
      : `Your changes were NOT saved: ${transaction.error?.message ?? 'storage transaction aborted'}. Export a backup now.`));
    transaction.onerror = () => reject(new Error(`Your changes were NOT saved: ${transaction.error?.message ?? 'storage error'}. Export a backup now.`));
  }));
  // Keep later save attempts usable; every caller still receives its own failure.
  writeQueue = operation.then(() => undefined, () => undefined);
  return operation;
}

export function initialState() {
  return {
    version: 1,
    selected: { documentId: '06-night-of-blue-fire', sectionId: '' },
    completed: [],
    notes: {},
    handoff: { party: '', recap: '', decisions: '', threads: '', nextSession: '' },
    secrets: [],
    encounters: [],
    activeEncounterId: null,
    customStatblocks: [],
    references: []
  };
}

function record(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export function validateState(state) {
  const fail = detail => { throw new Error(`Invalid campaign state: ${detail}. Nothing was imported.`); };
  const text = value => typeof value === 'string' && value.length <= 200000;
  const number = value => Number.isFinite(value) && value >= 0 && value <= 1000000;
  if (!record(state) || state.version !== 1) fail('unsupported format');
  if (!record(state.selected) || !text(state.selected.documentId) || !text(state.selected.sectionId)) fail('reading position');
  if (!Array.isArray(state.completed) || !state.completed.every(text)) fail('completed sections');
  if (!record(state.notes) || !Object.values(state.notes).every(text)) fail('section notes');
  if (!record(state.handoff) || !['party', 'recap', 'decisions', 'threads', 'nextSession'].every(key => text(state.handoff[key]))) fail('handoff notes');
  if (!Array.isArray(state.secrets) || !state.secrets.every(item => record(item) && text(item.id) && text(item.text) && typeof item.used === 'boolean')) fail('secrets');
  if (!Array.isArray(state.customStatblocks) || !state.customStatblocks.every(item => record(item) && text(item.id) && text(item.name) && text(item.markdown) && number(item.ac) && number(item.hp) && item.hp > 0)) fail('custom statblocks');
  if (!Array.isArray(state.references) || !state.references.every(item => record(item) && text(item.id) && text(item.title) && text(item.markdown))) fail('supplemental references');
  for (const collection of [state.secrets, state.customStatblocks, state.references]) {
    if (new Set(collection.map(item => item.id)).size !== collection.length) fail('duplicate entry identifiers');
  }
  if (!Array.isArray(state.encounters) || state.encounters.length > 100) fail('encounters');
  const ids = new Set();
  for (const encounter of state.encounters) {
    if (!record(encounter) || !text(encounter.id) || ids.has(encounter.id) || !text(encounter.title) ||
        !Number.isInteger(encounter.round) || encounter.round < 1 || !Array.isArray(encounter.combatants) || encounter.combatants.length > 200) fail('encounter data');
    ids.add(encounter.id);
    const actorIds = new Set();
    for (const actor of encounter.combatants) {
      if (!record(actor) || !text(actor.id) || actorIds.has(actor.id) || !text(actor.name) ||
          !(actor.statblockId === null || text(actor.statblockId)) ||
          !number(actor.ac) || !number(actor.maxHp) || actor.maxHp < 1 || !number(actor.hp) || actor.hp > actor.maxHp ||
          !number(actor.tempHp) || !(actor.initiative === null || (Number.isFinite(actor.initiative) && Math.abs(actor.initiative) <= 1000)) ||
          !['conditions', 'notes', 'resourceNotes'].every(key => text(actor[key]))) fail('combatant data');
      actorIds.add(actor.id);
    }
    if (encounter.turnId !== null && !actorIds.has(encounter.turnId)) fail('active turn');
  }
  if (state.activeEncounterId !== null && !ids.has(state.activeEncounterId)) fail('selected encounter');
  return state;
}

export function validateAssets(assets) {
  if (!Array.isArray(assets) || assets.length > 1000) throw new Error('Invalid local assets list (maximum 1,000 images).');
  const ids = new Set();
  for (const asset of assets) {
    if (!record(asset) || typeof asset.id !== 'string' || ids.has(asset.id) ||
        typeof asset.name !== 'string' || asset.name.length > 500 ||
        typeof asset.reference !== 'string' || asset.reference.length > 4000 ||
        (asset.references !== undefined && (!Array.isArray(asset.references) || asset.references.length > 100 || !asset.references.every(reference => typeof reference === 'string' && reference.length <= 4000))) ||
        !((typeof asset.data === 'string' && asset.data.length <= 16000000 && /^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=\r\n]+$/.test(asset.data)) ||
          (asset.data === undefined && typeof asset.src === 'string' && /^\.\/media\/[a-zA-Z0-9_-]+\.(?:png|jpg|jpeg|webp)$/.test(asset.src)))) {
      throw new Error('Invalid local image. Only bundled media paths or PNG, JPEG, and WebP image data are accepted.');
    }
    ids.add(asset.id);
  }
  return assets;
}

export function assetMatches(asset, reference) {
  return Boolean(reference) && (asset.reference === reference || (asset.references ?? []).includes(reference));
}

export function assetSource(asset) {
  return asset.data ?? asset.src;
}

export function mergeAssets(current, incoming) {
  validateAssets(incoming);
  const merged = new Map(current.map(asset => [asset.id, asset]));
  for (const asset of incoming) {
    const previous = merged.get(asset.id);
    if (previous && assetSource(previous) !== assetSource(asset)) throw new Error(`Image identifier conflict: ${asset.name}. Existing images were not replaced.`);
    merged.set(asset.id, previous ? {
      ...previous,
      references: [...new Set([previous.reference, asset.reference, ...(previous.references ?? []), ...(asset.references ?? [])].filter(Boolean))]
    } : asset);
  }
  const references = new Map();
  for (const asset of merged.values()) {
    for (const reference of [asset.reference, ...(asset.references ?? [])].filter(Boolean)) {
      const previous = references.get(reference);
      if (previous && assetSource(previous) !== assetSource(asset)) throw new Error(`Two different images claim the same source reference: ${reference}. Remove or correct the existing attachment first.`);
      references.set(reference, asset);
    }
  }
  return validateAssets([...merged.values()]);
}
