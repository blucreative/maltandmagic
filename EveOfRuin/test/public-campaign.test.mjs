import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { EXPECTED_FILES, validatePack } from '../model.mjs';
import { validateAssets } from '../storage.mjs';

const campaign = JSON.parse(await readFile(new URL('../data/campaign.json', import.meta.url), 'utf8'));
const chapter = campaign.pack.guides.chapters.find(item => item.file === '06-night-of-blue-fire.md');
const scene = prefix => chapter.scenes.find(item => item.heading === prefix || item.heading.startsWith(`${prefix} `));

test('published campaign includes every supplied document, valid guidance, and all referenced media', async () => {
  assert.equal(campaign.format, 'eve-of-ruin-site');
  assert.doesNotThrow(() => validatePack(campaign.pack));
  assert.doesNotThrow(() => validateAssets(campaign.assets));
  assert.deepEqual(campaign.pack.documents.map(item => item.filename).sort(), [...EXPECTED_FILES].sort());
  assert.equal(campaign.pack.guides.chapters.length, 12);
  assert.equal(campaign.pack.guides.sanctum.length, 9);
  const coverage = JSON.parse(await readFile(new URL('../data/media-coverage.json', import.meta.url), 'utf8'));
  assert.equal(coverage.counts.missingReferences, 0);
  assert.equal(coverage.counts.publicAssets, campaign.assets.length);
  for (const src of new Set(campaign.assets.map(asset => asset.src))) {
    assert.ok((await stat(new URL(`../${src}`, import.meta.url))).size > 0);
  }
});

test('Chapter 6 has authored guidance for every keyed area and explicit encounter quantities', () => {
  for (const [prefix, count] of [['P', 4], ['V', 37], ['U', 5]]) {
    for (let number = 1; number <= count; number++) {
      const card = scene(`${prefix}${number}:`) ?? scene(`${prefix}${number}.`);
      assert.ok(card, `Missing ${prefix}${number}`);
      assert.ok(card.tips.length > 0);
      for (const preset of card.encounters) {
        assert.ok(preset.creatures.every(creature => Number.isInteger(creature.count) && creature.count > 0));
      }
    }
  }
  assert.deepEqual(scene('V8:').encounters[0].creatures.map(item => item.count), [16, 9, 2]);
  assert.equal(scene('V18:').encounters[0].creatures[0].count, 7);
  assert.equal(scene('V5:').encounters[0].creatures[0].name, 'Death Knight');
  assert.equal(scene('Orinix Arrives').encounters[0].creatures[0].name, 'Adult Lunar Dragon');
  assert.match(scene('V7:').encounters[0].creatures[0].note, /10 HP/);
  assert.match(scene('V29:').tips.join(' '), /red light on the white crystal, white light on the black crystal, black light on the red crystal/);
  assert.match(scene('Ritual Duration').tips.join(' '), /unspecified/);
});

test('Krynn departure keeps the cause of the imprecise rod signal unknown', () => {
  const visit = campaign.pack.guides.sanctum.find(item => item.id === 'krynn-wardens');
  assert.match(visit.briefing.join(' '), /neither the characters nor the Wizards Three knows why/);
  assert.match(visit.npcs.find(npc => npc.name === 'Mordenkainen').knows, /does not know why/);
});
