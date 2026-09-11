import test from 'node:test';
import assert from 'node:assert/strict';
import '../../assets/js/daggerheart-catalog.js';
import '../../assets/js/daggerheart-rules.js';

const catalog = globalThis.DaggerheartCatalog;
const { resolveDamage } = globalThis.DaggerheartRules;

test('SRD 2.0 class and domain catalog is complete and internally consistent', () => {
  assert.equal(catalog.classes.length, 13);
  assert.equal(catalog.domains.length, 10);
  assert.equal(catalog.classes.filter(entry => entry.source === 'Core').length, 9);
  assert.equal(new Set(catalog.classes.map(entry => entry.name)).size, 13);
  for (const entry of catalog.classes) {
    assert.equal(entry.subclasses.length, 2);
    assert.equal(entry.domains.length, 2);
    assert.ok(entry.domains.every(name => catalog.domains.some(domain => domain.name === name)));
    assert.ok(entry.page > 0 && entry.hp > 0 && entry.evasion > 0);
  }
  assert.deepEqual(catalog.classes.find(entry => entry.name === 'Warlock').domains, ['Dread', 'Grace']);
  assert.equal(catalog.classes.find(entry => entry.name === 'Assassin').hp, 5);
  assert.equal(catalog.classes.find(entry => entry.name === 'Witch').evasion, 10);
  assert.equal(catalog.frames.length, 10);
  assert.equal(catalog.ancestry.length, 24);
  assert.equal(catalog.communities.length, 15);
  assert.equal(catalog.transformations.length, 6);
  assert.equal(catalog.armor.length, 8);
  assert.ok(catalog.armor.every(entry => entry.major < entry.severe && entry.score > 0));
});

test('damage respects exact thresholds, armor, direct damage, and optional massive damage', () => {
  for (const [damage, hp] of [[0, 0], [1, 1], [7, 1], [8, 2], [15, 2], [16, 3], [32, 3]]) {
    assert.equal(resolveDamage({ damage, major: 8, severe: 16 }).hp, hp);
  }
  assert.equal(resolveDamage({ damage: 8, major: 8, severe: 16, armor: true }).hp, 1);
  assert.equal(resolveDamage({ damage: 8, major: 8, severe: 16, armor: true, direct: true }).hp, 2);
  assert.equal(resolveDamage({ damage: 0, major: 8, severe: 16, armor: true }).armorUsed, false);
  assert.equal(resolveDamage({ damage: 32, major: 8, severe: 16, massive: true }).hp, 4);
});

test('invalid helper inputs cannot produce misleading results', () => {
  assert.throws(() => resolveDamage({ damage: NaN, major: 8, severe: 16 }), RangeError);
  assert.throws(() => resolveDamage({ damage: 5, major: 8, severe: 8 }), RangeError);
  assert.throws(() => resolveDamage({ damage: -1, major: 8, severe: 16 }), RangeError);
});