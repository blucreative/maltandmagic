import test from 'node:test';
import assert from 'node:assert/strict';
import { usageCharacter, spellModes, spendResource, recoverShortRest, recoveryLabel } from '../../../assets/js/col-agen-usage.mjs';

const legacy = () => ({ characterLevel: 2, hp: { max: 21 }, resources: { innate: 2, sorcery: 2, slots1: 3, hitDice: 2 } });

test('legacy spell cards share one slot pool without introducing save fields', () => {
  const state = legacy();
  const character = usageCharacter(state);
  const keys = Object.keys(state);
  for (const name of ['Grease', 'Shield', 'Fog Cloud']) {
    const mode = spellModes(character, name)[0];
    assert.equal(mode.key, 'slots1');
    assert.equal(spendResource(state, character.resources, mode.key), true);
  }
  assert.equal(state.resources.slots1, 0);
  assert.equal(spendResource(state, character.resources, 'slots1'), false);
  assert.deepEqual(Object.keys(state), keys);
  assert.equal(spellModes(character, 'Light')[0].key, '');
});

test('costs reject insufficient points, fractions and unknown pools', () => {
  const state = legacy();
  const caps = usageCharacter(state).resources;
  assert.equal(spendResource(state, caps, 'sorcery', 2), true);
  for (const cost of [1, 0, -1, 0.5, NaN]) assert.equal(spendResource(state, caps, 'sorcery', cost), false);
  assert.equal(spendResource(state, caps, 'unknown'), false);
  assert.equal(state.resources.sorcery, 0);
});

test('upcasting and pact casting select the correct pool and recharge period', () => {
  const character = usageCharacter(legacy());
  character.resources.slots2 = 2;
  character.resources.pact = 2;
  character.pactLevel = 2;
  assert.deepEqual(spellModes(character, 'Shield').map(mode => mode.key), ['slots1', 'slots2', 'pact']);
  assert.deepEqual(spellModes(character, 'Misty Step').map(mode => mode.key), ['slots2', 'pact']);
  assert.equal(recoveryLabel('pact', character), 'Short or Long Rest');
  assert.equal(recoveryLabel('slots2', character), 'Long Rest');
});

test('short rests preserve long-rest pools and restoration is optional once per long rest', () => {
  const character = usageCharacter(legacy());
  character.classes.sorcerer = 5;
  character.resources = { ...character.resources, sorcery: 5, sorcerousRestoration: 1, pact: 2, secondWind: 3 };
  const state = { resources: { innate: 0, sorcery: 0, slots1: 0, hitDice: 1, sorcerousRestoration: 1, pact: 0, secondWind: 0 } };
  recoverShortRest(state, character);
  assert.equal(state.resources.sorcery, 0);
  assert.equal(state.resources.innate, 0);
  assert.equal(state.resources.slots1, 0);
  assert.equal(state.resources.pact, 2);
  assert.equal(state.resources.secondWind, 1);
  recoverShortRest(state, character, true);
  assert.equal(state.resources.sorcery, 2);
  assert.equal(state.resources.sorcerousRestoration, 0);
  recoverShortRest(state, character, true);
  assert.equal(state.resources.sorcery, 2);
});

test('rituals and feat or arcanum free casts have separate casting modes', () => {
  const character = usageCharacter(legacy());
  assert.ok(spellModes(character, 'Detect Magic').some(mode => mode.key === '' && mode.label.startsWith('Ritual')));
  assert.ok(!spellModes(character, 'Shield').some(mode => mode.key === ''));
  character.resources['initiate-test'] = 1;
  const progression = { history: [{ id: 'test', choices: { feat: 'Magic Initiate', initiateSpell: ['Shield'] } }] };
  assert.equal(spellModes(character, 'Shield', progression)[0].key, 'initiate-test');
  character.choices.warlock = { arcanum6: 'Circle of Death' };
  character.resources.arcanum6 = 1;
  assert.equal(spellModes(character, 'Circle of Death')[0].key, 'arcanum6');
  assert.equal(spellModes(character, 'Mending')[0].label, 'At will');
});