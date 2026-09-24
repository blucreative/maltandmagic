import test from 'node:test';
import assert from 'node:assert/strict';
import { buildPreparationGuides } from '../scripts/prepare-guidance.mjs';
import { buildPack } from '../model.mjs';

test('generated preparation stays source-linked and never guesses creature quantities', () => {
  const sources = [
    { name: '06-night-of-blue-fire.md', markdown: '# Synthetic Chapter\n\n## A1: Watchpost\n\nA **Paper Sentry** guards a locked door. See the Monster Manual.\n\n## A2: Passage\n\nAn empty room.\n' },
    { name: 'appendix-a-bestiary.md', markdown: '# Synthetic Bestiary\n\n#### Paper Sentry\n\n**Armor Class** 12\n\n**Hit Points** 15\n\n**Actions**\n\nA synthetic action.\n' }
  ];
  const pack = buildPack(sources);
  const guides = buildPreparationGuides(pack.documents, pack.statblocks);
  assert.equal(guides.chapters.length, 1);
  assert.equal(guides.chapters[0].scenes.length, 3);
  const watchpost = guides.chapters[0].scenes.find(scene => scene.heading === 'A1: Watchpost');
  assert.ok(watchpost.tips.some(tip => tip.includes('access conditions')));
  assert.equal(watchpost.encounters[0].creatures[0].count, null);
  assert.match(watchpost.next[0], /not a mandatory route/);
  assert.equal(guides.chapters[0].scenes.find(scene => scene.heading === 'A2: Passage').encounters.length, 0);
  assert.equal(guides.gaps[0].heading, 'A1: Watchpost');
  assert.doesNotThrow(() => buildPack(sources, guides));
});
