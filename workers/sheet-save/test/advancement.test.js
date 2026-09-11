import test from 'node:test';
import assert from 'node:assert/strict';
import { advanceCharacter, createProgression, rollHitDie, deriveCharacter, choiceRequirements, CLASS_TRAITS, classEligibility } from '../../../assets/js/advancement-engine.mjs';

function testChoices(progression, classId) {
  const choices = {};
  for (let pass = 0; pass < 3; pass += 1) {
    for (const group of choiceRequirements(progression, classId, choices).groups) {
      if (group.key === 'feat') {
        choices.feat = 'Ability Score Improvement';
        const abilities = deriveCharacter(progression).abilities;
        const ability = Object.keys(abilities).find(name => abilities[name] <= 18);
        choices.abilityIncreases = { [ability]: 2 };
      } else if (['subclass', 'order', 'strike', 'fightingStyle', 'element'].includes(group.key) || group.key.startsWith('arcanum')) {
        choices[group.key] = group.options[0];
      } else {
        let options = group.options;
        if (group.key === 'invocations') options = ['Armor of Shadows', 'Eldritch Mind', 'Pact of the Blade', 'Pact of the Chain', 'Pact of the Tome', 'Fiendish Vigor', 'Mask of Many Faces', 'Misty Visions', 'Otherworldly Leap', 'One with Shadows'].filter(name => options.includes(name));
        choices[group.key] = [...new Set([...group.retained, ...options])].slice(0, group.count);
      }
    }
  }
  if (classId === 'wizard') choices.spells = choices.spellbook.slice(0, choiceRequirements(progression, classId, choices).groups.find(group => group.key === 'spells').count);
  return choices;
}

for (const classId of Object.keys(CLASS_TRAITS)) {
  test(`${classId} progression traverses levels 1 through 20`, () => {
    let progression = createProgression();
    progression.baseline = {
      classes: { [classId]: 1 }, hpMax: CLASS_TRAITS[classId].die + 3,
      abilities: { Strength: 16, Dexterity: 16, Constitution: 16, Intelligence: 16, Wisdom: 16, Charisma: 16 },
      skills: ['Arcana', 'History', 'Nature', 'Perception', 'Athletics', 'Insight'], choices: {}
    };
    if (classId === 'wizard') progression.baseline.choices.wizard = { spellbook: ['Alarm', 'Burning Hands', 'Charm Person', 'Color Spray', 'Comprehend Languages', 'Detect Magic'] };
    for (let level = 2; level <= 20; level += 1) {
      progression = advanceCharacter(progression, { id: `${classId}-${level}`, classId, hpRoll: 4, milestone: true, choices: testChoices(progression, classId) });
      const derived = deriveCharacter(progression);
      assert.equal(derived.totalLevel, level);
      assert.equal(derived.classes[classId], level);
      assert.equal(derived.proficiency, 2 + Math.floor((level - 1) / 4));
      assert.ok(Object.values(derived.resources).every(value => Number.isInteger(value) && value >= 0));
      assert.equal(derived.hitDice[CLASS_TRAITS[classId].die], level);
    }
    assert.match(classEligibility(progression, classId), /maximum/);
    assert.ok(JSON.stringify(progression).length < 200000);
  });
}

test('multiclass prerequisites and separate Hit Dice use class levels', () => {
  const baseline = createProgression();
  assert.equal(classEligibility(baseline, 'fighter'), '');
  assert.match(classEligibility(baseline, 'wizard'), /Intelligence 13/);
  assert.match(classEligibility(baseline, 'monk'), /Dexterity 13/);
  const advanced = advanceCharacter(baseline, { id: 'fighter-1', classId: 'fighter', hpRoll: 8, milestone: true, choices: testChoices(baseline, 'fighter') });
  const derived = deriveCharacter(advanced);
  assert.deepEqual(derived.hitDice, { 6: 2, 10: 1 });
  assert.equal(derived.hpMax, 35);
  assert.deepEqual(derived.slots.slice(0, 3), [3, 0, 0]);
});

test('advancement preserves the baseline and records the player roll', () => {
  const baseline = createProgression();
  const advanced = advanceCharacter(baseline, {
    id: 'test-level-3', classId: 'sorcerer', hpRoll: 4,
    milestone: true, choices: {
      subclass: 'draconic-sorcery',
      spells: ['Grease', 'False Life', 'Fog Cloud', 'Shield', 'Web', 'Misty Step'],
      cantrips: ['Light', 'Mage Hand', 'Mending', 'Prestidigitation'],
      metamagic: ['Careful Spell', 'Quickened Spell']
    }
  });
  assert.equal(baseline.history.length, 0);
  assert.equal(advanced.history.length, 1);
  assert.equal(advanced.history[0].hpRoll, 4);
});

test('HP rolls reroll ones and refuse an impossible final result', () => {
  const rolls = [1, 1, 4];
  assert.deepEqual(rollHitDie(6, () => rolls.shift()), { result: 4, rolls: [1, 1, 4] });
  assert.throws(() => advanceCharacter(createProgression(), {
    id: 'bad-roll', classId: 'sorcerer', hpRoll: 1, milestone: true, choices: {}
  }), /roll/i);
});

test('Constitution ASI adjusts previous HP and the new level', () => {
  const baseline = createProgression();
  const third = advanceCharacter(baseline, { id: 'con-3', classId: 'sorcerer', hpRoll: 4, milestone: true, choices: testChoices(baseline, 'sorcerer') });
  const choices = testChoices(third, 'sorcerer');
  choices.abilityIncreases = { Constitution: 2 };
  const fourth = advanceCharacter(third, { id: 'con-4', classId: 'sorcerer', hpRoll: 4, milestone: true, choices });
  assert.equal(deriveCharacter(third).hpMax, 34);
  assert.equal(deriveCharacter(fourth).hpMax, 49);
  assert.equal(deriveCharacter(fourth).abilities.Constitution, 20);
});

for (const [classId, subclass] of [['fighter', 'eldritch-knight'], ['rogue', 'arcane-trickster']]) {
  test(`${subclass} gets individual spell limits and combined slots`, () => {
    const baseline = createProgression();
    baseline.baseline.classes = { [classId]: 2 };
    baseline.baseline.choices = {};
    const choices = {
      subclass, supplementReviewed: true,
      cantrips: ['Light', 'Mending'], spells: ['Alarm', 'Shield', 'Magic Missile']
    };
    const advanced = advanceCharacter(baseline, { id: subclass, classId, hpRoll: 4, milestone: true, choices });
    const derived = deriveCharacter(advanced);
    assert.deepEqual(derived.slots.slice(0, 3), [2, 0, 0]);
    assert.equal(derived.spellcasting[0].ability, 'Intelligence');
    if (classId === 'rogue') assert.ok(derived.spellcasting[0].granted.includes('Mage Hand'));
    advanced.baseline.classes.sorcerer = 2;
    advanced.history[0].level = 5;
    const multiclass = deriveCharacter(advanced);
    assert.deepEqual(multiclass.slots.slice(0, 3), [4, 2, 0]);
    assert.equal(choiceRequirements(advanced, classId).maxSpell, 1);
  });
}

test('Magic Initiate requires its spell list, ability, and spell choices', () => {
  const baseline = createProgression();
  const third = advanceCharacter(baseline, { id: 'initiate-3', classId: 'sorcerer', hpRoll: 4, milestone: true, choices: testChoices(baseline, 'sorcerer') });
  const choices = testChoices(third, 'sorcerer');
  choices.feat = 'Magic Initiate';
  delete choices.abilityIncreases;
  const request = { id: 'initiate-4', classId: 'sorcerer', hpRoll: 4, milestone: true, choices };
  assert.throws(() => advanceCharacter(third, request), /Magic Initiate/);
  Object.assign(choices, { initiateClass: 'druid', initiateAbility: 'Wisdom', initiateCantrips: ['Druidcraft', 'Guidance'], initiateSpell: ['Cure Wounds'] });
  const derived = deriveCharacter(advanceCharacter(third, request));
  const casting = derived.spellcasting.find(entry => entry.label === 'Magic Initiate');
  assert.equal(casting.dc, 12);
  assert.deepEqual(casting.granted, ['Cure Wounds']);
  assert.equal(derived.resources['initiate-initiate-4'], 1);
  choices.feat = ['Magic Initiate'];
  assert.throws(() => advanceCharacter(third, request));
});

test('malformed histories and unsupported rules are rejected without resetting', () => {
  const baseline = createProgression();
  const advanced = advanceCharacter(baseline, { id: 'valid', classId: 'sorcerer', hpRoll: 4, milestone: true, choices: testChoices(baseline, 'sorcerer') });
  for (const mutate of [value => { value.rulesVersion = 'future'; }, value => { value.history[0].level = 10; }, value => { value.history[0].hpRoll = 1; }, value => { value.baseline.classes.unknown = 1; }]) {
    const invalid = structuredClone(advanced);
    mutate(invalid);
    const stored = JSON.stringify(invalid);
    assert.throws(() => deriveCharacter(invalid));
    assert.equal(JSON.stringify(invalid), stored);
  }
  assert.match(classEligibility(baseline, 'constructor'), /not supported/);
});

test('Arcane Archer records playtest choices and Intelligence-based resources', () => {
  const baseline = createProgression();
  baseline.baseline.classes.fighter = 2;
  const choices = { subclass: 'arcane-archer', supplementReviewed: true, archerCantrip: ['Druidcraft'], archerSkills: ['History', 'Insight'], arcaneShots: ['Bursting Shot', 'Shadow Shot'] };
  const advanced = advanceCharacter(baseline, { id: 'archer', classId: 'fighter', hpRoll: 7, milestone: true, choices });
  const derived = deriveCharacter(advanced);
  assert.equal(derived.resources.arcaneShot, 1);
  assert.ok(derived.skills.includes('History'));
  assert.equal(derived.spellcasting.find(entry => entry.classId === 'fighter').dc, 12);
  assert.ok(advanced.history[0].features.every(feature => feature.source === 'Playtest (UA 2025)' || feature.source === 'SRD 5.2.1'));
});