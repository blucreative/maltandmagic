import test from 'node:test';
import assert from 'node:assert/strict';
import { buildPack, parseDocument, extractStatblocks, createCombatant, applyDamage, applyHealing } from '../model.mjs';

const chapterMarkdown = `# Chapter 6: Synthetic Blue Lantern

This is synthetic chapter text.

## C6. Synthetic Signal Room

The violet paper lantern marks the test room.

#### Paper Sentry

*Medium Construct, Unaligned*

- **Armor Class** 14
- **Hit Points** 30 (4d8 + 12)
- **Speed** 30 ft.

| STR | DEX | CON | INT | WIS | CHA |
| --- | --- | --- | --- | --- | --- |
| 12 (+1) | 14 (+2) | 16 (+3) | 8 (-1) | 10 (+0) | 6 (-2) |

**Actions**

**Paper Tap.** A synthetic action for testing the complete statblock viewer.

## C7. Synthetic Exit

The synthetic exit remains quiet.
`;

test('parseDocument preserves full section text and headings', () => {
  const document = parseDocument('06-night-of-blue-fire.md', chapterMarkdown);
  assert.equal(document.id, '06-night-of-blue-fire');
  assert.equal(document.title, 'Chapter 6: Synthetic Blue Lantern');
  assert.equal(document.sections.length, 4);
  assert.equal(document.sections[1].heading, 'C6. Synthetic Signal Room');
  assert.match(document.sections[2].markdown, /\*\*Actions\*\*/);
  assert.match(document.sections[2].markdown, /\*\*Paper Tap\.\*\*/);
});

test('extractStatblocks reads AC, HP and dexterity from a full statblock', () => {
  const document = parseDocument('appendix-a-bestiary.md', `# Appendix A: Synthetic Bestiary

#### Paper Sentry

*Medium Construct, Unaligned*

- **Armor Class** 14
- **Hit Points** 30 (4d8 + 12)
- **Speed** 30 ft.

| STR | DEX | CON | INT | WIS | CHA |
| --- | --- | --- | --- | --- | --- |
| 12 (+1) | 14 (+2) | 16 (+3) | 8 (-1) | 10 (+0) | 6 (-2) |

**Actions**

**Paper Tap.** A synthetic action for testing the complete statblock viewer.
`);
  const blocks = extractStatblocks([document]);
  assert.equal(blocks.length, 1);
  assert.deepEqual(blocks[0], {
    id: 'appendix-a-bestiary::paper-sentry',
    name: 'Paper Sentry',
    ac: 14,
    hp: 30,
    dex: 14,
    markdown: document.sections[1].markdown,
    documentId: 'appendix-a-bestiary',
    sectionId: 'paper-sentry'
  });
});

test('createCombatant accepts nullable templates and damage or healing stay bounded', () => {
  const combatant = createCombatant({ id: null, name: 'Manual Sentinel', ac: 16, hp: 30, dex: null }, { initiative: null, maxHp: 40 });
  assert.deepEqual(combatant, {
    id: combatant.id,
    name: 'Manual Sentinel',
    statblockId: null,
    ac: 16,
    maxHp: 40,
    hp: 40,
    tempHp: 0,
    initiative: null,
    conditions: '',
    notes: '',
    resourceNotes: ''
  });

  const damaged = applyDamage({ ...combatant, hp: 40, tempHp: 5 }, 8);
  assert.equal(damaged.tempHp, 0);
  assert.equal(damaged.hp, 37);

  const healed = applyHealing({ ...damaged, hp: 37 }, 50);
  assert.equal(healed.hp, 40);
  assert.equal(healed.maxHp, 40);
});

test('buildPack validates synthetic sources with the expected statblock shape', () => {
  const pack = buildPack([
    { name: '06-night-of-blue-fire.md', markdown: chapterMarkdown },
    { name: 'appendix-a-bestiary.md', markdown: `# Appendix A: Synthetic Bestiary

#### Paper Sentry

*Medium Construct, Unaligned*

- **Armor Class** 14
- **Hit Points** 30 (4d8 + 12)

**Actions**

**Paper Tap.** A synthetic action for testing the complete statblock viewer.
` }
  ], {
    version: 1,
    chapters: [{
      file: '06-night-of-blue-fire.md',
      summary: 'Synthetic chapter coaching.',
      startHere: ['Read the signal room before choosing an encounter.'],
      scenes: [{
        heading: 'C6. Synthetic Signal Room',
        purpose: 'Let the players decide what the lantern means.',
        tips: ['Keep the synthetic clue separate from the table recap.'],
        encounters: [{
          name: 'Synthetic Paper Patrol',
          trigger: 'Only if the synthetic conversation becomes a fight.',
          resolution: 'Record the synthetic outcome.',
          tactics: [],
          creatures: [{ name: 'Paper Sentry', count: 2 }]
        }]
      }]
    }],
    sanctum: [],
    gaps: []
  });
  assert.equal(pack.documents.length, 2);
  assert.equal(pack.statblocks[0].ac, 14);
  assert.equal(pack.statblocks[0].hp, 30);
});
