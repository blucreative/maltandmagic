import test from 'node:test';
import assert from 'node:assert/strict';
import { initialState, validateState, validateAssets, mergeAssets, assetMatches } from '../storage.mjs';

test('new campaign does not invent party history or mark previous chapters complete', () => {
  const state = initialState();
  assert.equal(state.selected.documentId, '06-night-of-blue-fire');
  assert.equal(state.selected.sectionId, '');
  assert.deepEqual(state.completed, []);
  assert.deepEqual(state.encounters, []);
  assert.ok(Object.values(state.handoff).every(value => value === ''));
  assert.equal(validateState(state), state);
});

test('malformed and unsupported state imports are rejected', () => {
  for (const malformed of [null, {}, [], { ...initialState(), version: 99 }, { ...initialState(), notes: { x: {} } }, { ...initialState(), secrets: [{ id: 's', text: 'A secret', used: 'false' }] }]) {
    assert.throws(() => validateState(malformed), /Invalid campaign state/);
  }
  const duplicate = { id: 'reference-1', title: 'A rule', markdown: 'Synthetic reference.' };
  assert.throws(() => validateState({ ...initialState(), references: [duplicate, duplicate] }), /duplicate entry identifiers/);
});

function sampleState() {
  return {
    ...initialState(),
    encounters: [{
      id: 'encounter-1', title: 'Synthetic encounter', round: 1, turnId: 'actor-1',
      combatants: [{
        id: 'actor-1', name: 'Training dummy', statblockId: null,
        ac: 10, maxHp: 20, hp: 12, tempHp: 3, initiative: 8,
        conditions: '', notes: '', resourceNotes: ''
      }]
    }],
    activeEncounterId: 'encounter-1'
  };
}

test('individual combatants and turns survive valid backup state', () => {
  const state = sampleState();
  assert.equal(validateState(state), state);
});

test('invalid HP, repeated IDs, and dangling turn references cannot be imported', () => {
  const modifications = [
    state => { state.encounters[0].combatants[0].hp = 21; },
    state => { state.encounters[0].combatants[0].maxHp = 0; },
    state => { state.encounters[0].combatants[0].initiative = Infinity; },
    state => { state.encounters[0].combatants.push({ ...state.encounters[0].combatants[0] }); },
    state => { state.encounters[0].turnId = 'not-present'; },
    state => { state.activeEncounterId = 'missing'; },
    state => { state.encounters[0].round = 0; }
  ];
  for (const modify of modifications) {
    const state = sampleState();
    modify(state);
    assert.throws(() => validateState(state), /Invalid campaign state/);
  }
});

test('private assets accept only inert raster data, never remote requests or SVG', () => {
  const asset = { id: 'a', name: 'Synthetic map', reference: 'https://example.invalid/map.png', data: 'data:image/png;base64,aGVsbG8=' };
  assert.deepEqual(validateAssets([asset]), [asset]);
  for (const data of ['https://example.invalid/map.png', 'data:image/svg+xml;base64,aGVsbG8=', 'javascript:alert(1)', 'data:image/png;base64,"><script>']) {
    assert.throws(() => validateAssets([{ ...asset, data }]), /Invalid local image/);
  }
  assert.throws(() => validateAssets([asset, asset]), /Invalid local image/);
});

test('image packs merge repeat imports and exact URL aliases without confusing player maps', () => {
  const asset = { id: 'a', name: '6.01-tree.jpg', reference: 'https://example.invalid/06.01-tree.jpg', data: 'data:image/png;base64,aGVsbG8=' };
  const alias = { ...asset, reference: 'https://example.invalid/6.01-tree.jpg' };
  const merged = mergeAssets([asset], [alias]);
  assert.equal(merged.length, 1);
  assert.ok(assetMatches(merged[0], asset.reference));
  assert.ok(assetMatches(merged[0], alias.reference));
  assert.equal(assetMatches(merged[0], 'https://example.invalid/6.01-tree-player.jpg'), false);
  assert.equal(assetMatches({ reference: '' }, ''), false);
  assert.throws(() => mergeAssets([asset], [{ ...alias, data: 'data:image/png;base64,YWJj' }]), /identifier conflict/);
  assert.throws(() => mergeAssets([asset], [{ ...asset, id: 'b', data: 'data:image/png;base64,YWJj' }]), /same source reference/);
  assert.throws(() => validateAssets([{ ...asset, references: [{ invalid: true }] }]), /Invalid local image/);
});
