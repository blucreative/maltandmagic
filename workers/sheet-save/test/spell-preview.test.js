import test from 'node:test';
import assert from 'node:assert/strict';
import { catalog } from '../../../assets/js/advancement-engine.mjs';
import { spellPreview } from '../../../assets/js/col-agen-spell-preview.mjs';

test('spell previews expose reaction triggers, concentration, and upcasting', () => {
  const shield = spellPreview('Shield');
  assert.equal(shield.casting, 'Reaction');
  assert.match(shield.trigger, /hit by an attack roll/);
  assert.match(shield.summary, /\+5 AC/);
  assert.equal(shield.range, 'Self');
  assert.equal(shield.duration, '1 round');
  assert.match(spellPreview('Web').summary, /Dexterity save.*Restrained/);
  assert.match(spellPreview('Web').duration, /Concentration/);
  assert.match(spellPreview('False Life').scaling, /5 additional Temporary Hit Points/);
  assert.equal(spellPreview('Misty Step').casting, 'Bonus Action');
  assert.match(spellPreview('Misty Step').summary, /30 feet/);
  assert.equal(spellPreview('Unknown supplemental spell'), null);
});

test('every catalog spell has readable metadata and a visible effect preview', () => {
  for (const name of Object.keys(catalog.spellRules)) {
    const preview = spellPreview(name);
    for (const field of ['casting', 'range', 'components', 'duration', 'summary']) assert.ok(preview[field], `${name}: ${field}`);
    assert.ok(!preview.summary.startsWith('Casting Time:'), name);
    assert.ok(preview.summary.length <= 420, `${name}: concise summary`);
  }
});