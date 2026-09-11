import catalog from './advancement-catalog-v1.mjs';
export { catalog };
export const RULES_VERSION = '2024-campaign-1';
export const CLASS_TRAITS = {
  barbarian: { name: 'Barbarian', die: 12, prerequisites: [['Strength']], casting: null },
  bard: { name: 'Bard', die: 8, prerequisites: [['Charisma']], casting: 'Charisma' },
  cleric: { name: 'Cleric', die: 8, prerequisites: [['Wisdom']], casting: 'Wisdom' },
  druid: { name: 'Druid', die: 8, prerequisites: [['Wisdom']], casting: 'Wisdom' },
  fighter: { name: 'Fighter', die: 10, prerequisites: [['Strength', 'Dexterity']], casting: null },
  monk: { name: 'Monk', die: 8, prerequisites: [['Dexterity'], ['Wisdom']], casting: null },
  paladin: { name: 'Paladin', die: 10, prerequisites: [['Strength'], ['Charisma']], casting: 'Charisma' },
  ranger: { name: 'Ranger', die: 10, prerequisites: [['Dexterity'], ['Wisdom']], casting: 'Wisdom' },
  rogue: { name: 'Rogue', die: 8, prerequisites: [['Dexterity']], casting: null },
  sorcerer: { name: 'Sorcerer', die: 6, prerequisites: [['Charisma']], casting: 'Charisma' },
  warlock: { name: 'Warlock', die: 8, prerequisites: [['Charisma']], casting: 'Charisma' },
  wizard: { name: 'Wizard', die: 6, prerequisites: [['Intelligence']], casting: 'Intelligence' }
};
export const modifier = score => Math.floor((score - 10) / 2);
const copy = value => JSON.parse(JSON.stringify(value));
export const SKILL_ABILITIES = {
  Acrobatics: 'Dexterity', 'Animal Handling': 'Wisdom', Arcana: 'Intelligence', Athletics: 'Strength',
  Deception: 'Charisma', History: 'Intelligence', Insight: 'Wisdom', Intimidation: 'Charisma',
  Investigation: 'Intelligence', Medicine: 'Wisdom', Nature: 'Intelligence', Perception: 'Wisdom',
  Performance: 'Charisma', Persuasion: 'Charisma', Religion: 'Intelligence', 'Sleight of Hand': 'Dexterity',
  Stealth: 'Dexterity', Survival: 'Wisdom'
};
export const FEATS = ['Ability Score Improvement', 'Alert', 'Grappler', 'Savage Attacker', 'Skilled', 'Magic Initiate', 'Boon of Combat Prowess', 'Boon of Dimensional Travel', 'Boon of Fate', 'Boon of Irresistible Offense', 'Boon of Spell Recall', 'Boon of the Night Spirit', 'Boon of Truesight'];
export const SCALAR_CHOICES = new Set(['subclass', 'feat', 'order', 'strike', 'fightingStyle', 'element', 'arcanum6', 'arcanum7', 'arcanum8', 'arcanum9', 'initiateClass', 'initiateAbility']);
export const ARCANE_SHOTS = ['Banishing Shot', 'Beguiling Shot', 'Bursting Shot', 'Enfeebling Shot', 'Grasping Shot', 'Piercing Shot', 'Seeking Shot', 'Shadow Shot'];
const numeric = value => Number.parseInt(value, 10) || 0;
export const classRow = (classId, level) => catalog.classes[classId]?.levels[level - 1] || {};
const featAt = (classId, level) => /Ability Score Improvement|Epic Boon/.test(classRow(classId, level)['Class Features'] || '');
const unique = values => [...new Set(values)];
const thirdCaster = subclass => ['eldritch-knight', 'arcane-trickster'].includes(subclass);
const subclassRow = (classId, level, subclass) => catalog.classes[classId].subclasses.find(entry => entry.id === subclass)?.levels?.find(row => numeric(row[`${CLASS_TRAITS[classId].name} Level`]) === level) || {};

export function createProgression(sheet = {}) {
  return {
    schemaVersion: 1,
    rulesVersion: RULES_VERSION,
    baseline: {
      classes: { sorcerer: sheet.characterLevel || 2 },
      hpMax: sheet.hp?.max || 21,
      abilities: { Strength: 15, Dexterity: 6, Constitution: 18, Intelligence: 12, Wisdom: 14, Charisma: 17 },
      tough: true,
      skills: ['Animal Handling', 'Arcana', 'Deception', 'Nature'],
      choices: {
        sorcerer: {
          cantrips: ['Light', 'Mage Hand', 'Mending', 'Prestidigitation'],
          spells: ['Grease', 'False Life', 'Fog Cloud', 'Shield'],
          metamagic: ['Careful Spell', 'Quickened Spell']
        }
      }
    },
    history: []
  };
}

export function deriveCharacter(progression) {
  if (progression?.schemaVersion !== 1 || progression.rulesVersion !== RULES_VERSION) throw new Error('This character requires a compatible rules version. No saved choices were changed.');
  const baseline = progression.baseline;
  const validClasses = baseline?.classes && Object.entries(baseline.classes);
  if (!validClasses?.length || validClasses.some(([classId, level]) => !Object.hasOwn(CLASS_TRAITS, classId) || !Number.isInteger(level) || level < 1 || level > 20) || !Number.isInteger(baseline.hpMax) || baseline.hpMax < 1 || !Array.isArray(progression.history)) throw new Error('Invalid saved progression baseline. Stored data must be repaired, not reset.');
  const abilityNames = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
  if (abilityNames.some(name => !Number.isInteger(baseline.abilities?.[name]) || baseline.abilities[name] < 1 || baseline.abilities[name] > 30)) throw new Error('Invalid saved ability scores.');
  const expectedClasses = { ...baseline.classes };
  let expectedLevel = validClasses.reduce((sum, [, level]) => sum + level, 0);
  const identifiers = new Set();
  for (const entry of progression.history) {
    if (!entry || !Object.hasOwn(CLASS_TRAITS, entry.classId) || typeof entry.id !== 'string' || identifiers.has(entry.id) || entry.rulesVersion !== RULES_VERSION || entry.longRest !== true || !entry.choices || Array.isArray(entry.choices) || typeof entry.choices !== 'object' || !Array.isArray(entry.features)) throw new Error('Invalid saved advancement record.');
    expectedClasses[entry.classId] = (expectedClasses[entry.classId] || 0) + 1;
    expectedLevel += 1;
    if (entry.level !== expectedLevel || entry.classLevel !== expectedClasses[entry.classId] || !Number.isInteger(entry.hpRoll) || entry.hpRoll < 2 || entry.hpRoll > CLASS_TRAITS[entry.classId].die) throw new Error('Invalid saved advancement sequence or HP roll.');
    identifiers.add(entry.id);
  }
  if (expectedLevel > 20) throw new Error('Character level 20 is the maximum.');
  const classes = { ...baseline.classes };
  const abilities = { ...baseline.abilities };
  const choices = copy(baseline.choices || {});
  const skills = [...(baseline.skills || [])];
  const expertise = [];
  const feats = [];
  let hpMax = baseline.hpMax;
  let totalLevel = Object.values(classes).reduce((sum, level) => sum + level, 0);
  for (const entry of progression.history) {
    const oldConstitution = modifier(abilities.Constitution);
    for (const [ability, increase] of Object.entries(entry.choices.abilityIncreases || {})) abilities[ability] += increase;
    if (entry.classLevel === 20 && ['barbarian', 'monk'].includes(entry.classId)) {
      for (const ability of entry.classId === 'barbarian' ? ['Strength', 'Constitution'] : ['Dexterity', 'Wisdom']) abilities[ability] = Math.min(25, abilities[ability] + 4);
    }
    hpMax += (modifier(abilities.Constitution) - oldConstitution) * totalLevel;
    hpMax += Math.max(1, entry.hpRoll + modifier(abilities.Constitution)) + (baseline.tough ? 2 : 0);
    totalLevel += 1;
    classes[entry.classId] = (classes[entry.classId] || 0) + 1;
    choices[entry.classId] = { ...choices[entry.classId], ...copy(entry.choices) };
    skills.push(...(entry.choices.skills || []), ...(entry.choices.skilled || []), ...(entry.choices.archerSkills || []));
    expertise.push(...(entry.choices.expertise || []));
    if (entry.choices.feat) feats.push(entry.choices.feat);
  }
  if (choices.sorcerer?.subclass === 'draconic-sorcery') hpMax += classes.sorcerer - (baseline.choices?.sorcerer?.subclass === 'draconic-sorcery' ? baseline.classes.sorcerer : 0);
  const proficiency = 2 + Math.floor((totalLevel - 1) / 4);
  const hitDice = {};
  for (const [classId, level] of Object.entries(classes)) {
    const die = CLASS_TRAITS[classId].die;
    hitDice[die] = (hitDice[die] || 0) + level;
  }
  const casters = Object.entries(classes).filter(([classId]) => CLASS_TRAITS[classId].casting && classId !== 'warlock');
  let casterLevel = casters.reduce((sum, [classId, level]) => sum + (['paladin', 'ranger'].includes(classId) ? Math.ceil(level / 2) : level), 0);
  for (const classId of ['fighter', 'rogue']) if (['eldritch-knight', 'arcane-trickster'].includes(choices[classId]?.subclass)) casterLevel += Math.floor(classes[classId] / 3);
  const thirdCasters = Object.entries(classes).filter(([classId]) => thirdCaster(choices[classId]?.subclass));
  const slotRow = casters.length + thirdCasters.length === 1
    ? casters.length ? classRow(...casters[0]) : subclassRow(...thirdCasters[0], choices[thirdCasters[0][0]].subclass)
    : classRow('sorcerer', casterLevel);
  const slots = Array.from({ length: 9 }, (_, index) => numeric(slotRow[index + 1]));
  const resources = { innate: classes.sorcerer ? 2 : 0, sorcery: classes.sorcerer >= 2 ? classes.sorcerer : 0, slots1: slots[0], hitDice: totalLevel };
  slots.slice(1).forEach((count, index) => { resources[`slots${index + 2}`] = count; });
  for (const [die, count] of Object.entries(hitDice)) resources[`hd${die}`] = count;
  const add = (key, amount) => { if (amount > 0) resources[key] = amount; };
  add('pact', numeric(classRow('warlock', classes.warlock)['Spell Slots']));
  add('rage', numeric(classRow('barbarian', classes.barbarian).Rages));
  add('secondWind', numeric(classRow('fighter', classes.fighter)['Second Wind']));
  add('actionSurge', classes.fighter >= 17 ? 2 : classes.fighter >= 2 ? 1 : 0);
  add('indomitable', classes.fighter >= 17 ? 3 : classes.fighter >= 13 ? 2 : classes.fighter >= 9 ? 1 : 0);
  add('focus', classes.monk >= 2 ? classes.monk : 0);
  add('inspiration', classes.bard ? Math.max(1, modifier(abilities.Charisma)) : 0);
  add('clericChannel', numeric(classRow('cleric', classes.cleric)['Channel Divinity']));
  add('paladinChannel', numeric(classRow('paladin', classes.paladin)['Channel Divinity']));
  add('wildShape', numeric(classRow('druid', classes.druid)['Wild Shape']));
  add('layOnHands', (classes.paladin || 0) * 5);
  add('favoredEnemy', numeric(classRow('ranger', classes.ranger)['Favored Enemy']));
  add('sorcerousRestoration', classes.sorcerer >= 5 ? 1 : 0);
  if (choices.fighter?.subclass === 'arcane-archer') add('arcaneShot', Math.max(1, modifier(abilities.Intelligence)));
  for (const level of [6, 7, 8, 9]) add(`arcanum${level}`, classes.warlock >= level * 2 - 1 ? 1 : 0);
  const spellcasting = Object.entries(classes).filter(([classId]) => CLASS_TRAITS[classId].casting || thirdCaster(choices[classId]?.subclass)).map(([classId, level]) => {
    const ability = CLASS_TRAITS[classId].casting || 'Intelligence';
    const selected = choices[classId] || {};
    const subclass = catalog.classes[classId].subclasses.find(entry => entry.id === selected.subclass);
    const granted = (subclass?.spells || []).filter(entry => entry.level <= level).flatMap(entry => entry.names);
    if (classId === 'paladin' && level >= 2) granted.push('Divine Smite');
    if (classId === 'paladin' && level >= 5) granted.push('Find Steed');
    if (classId === 'ranger') granted.push("Hunter's Mark");
    if (classId === 'druid') granted.push('Speak with Animals');
    if (classId === 'warlock' && level >= 9) granted.push('Contact Other Plane');
    if (selected.subclass === 'arcane-trickster') granted.push('Mage Hand');
    return { classId, ability, dc: 8 + proficiency + modifier(abilities[ability]), attack: proficiency + modifier(abilities[ability]), spells: selected.spells || [], cantrips: selected.cantrips || [], granted: unique(granted) };
  });
  for (const entry of progression.history.filter(entry => entry.choices.feat === 'Magic Initiate')) {
    const selected = entry.choices;
    const ability = selected.initiateAbility;
    spellcasting.push({ classId: selected.initiateClass, label: 'Magic Initiate', ability, dc: 8 + proficiency + modifier(abilities[ability]), attack: proficiency + modifier(abilities[ability]), cantrips: selected.initiateCantrips, spells: [], granted: selected.initiateSpell });
    add(`initiate-${entry.id}`, 1);
  }
  if (choices.fighter?.subclass === 'arcane-archer') spellcasting.push({ classId: 'fighter', label: 'Arcane Archer (UA 2025)', ability: 'Intelligence', dc: 8 + proficiency + modifier(abilities.Intelligence), attack: proficiency + modifier(abilities.Intelligence), cantrips: choices.fighter.archerCantrip || [], spells: [], granted: [] });
  return { classes, abilities, choices, hpMax, totalLevel, proficiency, skills: unique(skills), expertise: unique(expertise), feats, hitDice, slots, resources, spellcasting, pactLevel: numeric(classRow('warlock', classes.warlock)['Slot Level']) };
}

export function classEligibility(progression, classId) {
  const character = deriveCharacter(progression);
  if (!Object.hasOwn(CLASS_TRAITS, classId)) return 'Class is not supported by this rules version.';
  if (character.totalLevel >= 20) return 'Character level 20 is the maximum.';
  if (character.classes[classId]) return '';
  const requiredClasses = [...Object.keys(character.classes), classId];
  for (const requiredClass of requiredClasses) {
    const traits = CLASS_TRAITS[requiredClass];
    for (const alternatives of traits.prerequisites) {
      if (!alternatives.some(ability => character.abilities[ability] >= 13)) return `${traits.name} multiclassing requires ${alternatives.join(' or ')} 13.`;
    }
  }
  return '';
}

export function advanceCharacter(progression, request) {
  const error = classEligibility(progression, request.classId);
  if (error) throw new Error(error);
  if (request.milestone !== true) throw new Error('Confirm that the campaign milestone has been reached.');
  if (typeof request.id !== 'string' || !/^[a-zA-Z0-9-]{1,80}$/.test(request.id)) throw new Error('Invalid advancement ID.');
  if (progression.history.some(entry => entry.id === request.id)) throw new Error('This advancement has already been applied.');
  const die = CLASS_TRAITS[request.classId].die;
  if (!Number.isInteger(request.hpRoll) || request.hpRoll < 2 || request.hpRoll > die) throw new Error(`Record a d${die} roll from 2 to ${die}; reroll all 1s.`);
  if (!request.choices || typeof request.choices !== 'object' || Array.isArray(request.choices)) throw new Error('Level-up choices are required.');
  const character = deriveCharacter(progression);
  const classLevel = (character.classes[request.classId] || 0) + 1;
  validateChoices(progression, request.classId, request.choices);
  const increases = request.choices.abilityIncreases || {};
  if (Object.keys(increases).length && !featAt(request.classId, classLevel)) throw new Error('An ability increase is not available at this class level.');
  let totalIncrease = 0;
  const isBoon = request.choices.feat?.startsWith('Boon of ');
  for (const [ability, increase] of Object.entries(increases)) {
    if (!Object.hasOwn(character.abilities, ability) || !Number.isInteger(increase) || increase < 1 || increase > 2 || character.abilities[ability] + increase > (isBoon ? 30 : 20)) throw new Error('Invalid ability increase.');
    if (['Grappler', 'Boon of Irresistible Offense'].includes(request.choices.feat) && !['Strength', 'Dexterity'].includes(ability)) throw new Error('This feat increases Strength or Dexterity.');
    if (request.choices.feat === 'Boon of Spell Recall' && !['Intelligence', 'Wisdom', 'Charisma'].includes(ability)) throw new Error('This feat increases Intelligence, Wisdom, or Charisma.');
    totalIncrease += increase;
  }
  const expectedIncrease = request.choices.feat === 'Ability Score Improvement' ? 2 : request.choices.feat === 'Grappler' || isBoon ? 1 : 0;
  if (totalIncrease !== expectedIncrease) throw new Error(`This feat requires ${expectedIncrease} ability increase points.`);
  const next = copy(progression);
  next.history.push({ id: request.id, level: character.totalLevel + 1, classId: request.classId, classLevel, hpRoll: request.hpRoll, choices: copy(request.choices), longRest: true, rulesVersion: RULES_VERSION, features: gainedFeatures(request.classId, classLevel, request.choices.subclass || character.choices[request.classId]?.subclass) });
  return next;
}

export function gainedFeatures(classId, level, subclassId) {
  const entry = catalog.classes[classId];
  const subclass = entry.subclasses.find(value => value.id === subclassId);
  return [...entry.features, ...(subclass?.features || [])].filter(feature => feature.level === level).map(copy);
}

export function choiceRequirements(progression, classId, choices = {}) {
  const character = deriveCharacter(progression);
  const level = (character.classes[classId] || 0) + 1;
  const previous = character.choices[classId] || {};
  const merged = { ...previous, ...choices };
  const row = thirdCaster(merged.subclass) ? subclassRow(classId, level, merged.subclass) : classRow(classId, level);
  const entry = catalog.classes[classId];
  const groups = [];
  const group = (key, label, count, options, retained = [], replacement = 0) => groups.push({ key, label, count, options, retained, replacement });
  if (level === 3) group('subclass', 'Subclass', 1, entry.subclasses.map(subclass => subclass.id));
  if (featAt(classId, level)) group('feat', level === 19 ? 'Epic Boon or Feat' : 'Feat', 1, FEATS.filter(feat => (!feat.startsWith('Boon of ') || character.totalLevel + 1 >= 19) && (['Ability Score Improvement', 'Skilled', 'Magic Initiate'].includes(feat) || !character.feats.includes(feat))));
  let spellLists = thirdCaster(merged.subclass) ? ['wizard'] : [classId];
  if (classId === 'bard' && level >= 10) spellLists = ['bard', 'cleric', 'druid', 'wizard'];
  const maxSpell = classId === 'warlock' ? numeric(row['Slot Level']) : Math.max(0, ...Array.from({ length: 9 }, (_, index) => numeric(row[index + 1]) ? index + 1 : 0));
  const spells = unique(spellLists.flatMap(list => catalog.classes[list].spells.filter(spell => spell.level > 0 && spell.level <= maxSpell).map(spell => spell.name)));
  if (classId === 'wizard') group('spellbook', 'Spellbook', (previous.spellbook?.length || 0) + (level === 1 ? 6 : 2), spells, previous.spellbook || [], 0);
  if (numeric(row['Prepared Spells'])) group('spells', 'Prepared Spells', numeric(row['Prepared Spells']), spells, previous.spells || [], ['cleric', 'druid', 'wizard'].includes(classId) ? 100 : 1);
  const extraCantrip = (classId === 'cleric' && merged.order === 'Thaumaturge') || (classId === 'druid' && merged.order === 'Magician');
  const cantripCount = thirdCaster(merged.subclass) ? level >= 10 ? 3 : 2 : numeric(row.Cantrips) + (extraCantrip ? 1 : 0);
  if (cantripCount) group('cantrips', 'Cantrips', cantripCount, catalog.classes[thirdCaster(merged.subclass) ? 'wizard' : classId].spells.filter(spell => spell.level === 0 && !(merged.subclass === 'arcane-trickster' && spell.name === 'Mage Hand')).map(spell => spell.name), previous.cantrips || [], 1);
  if (classId === 'sorcerer' && level >= 2) group('metamagic', 'Metamagic', level >= 17 ? 6 : level >= 10 ? 4 : 2, entry.options.map(option => option.name), previous.metamagic || [], 1);
  if (classId === 'warlock') {
    group('invocations', 'Eldritch Invocations', numeric(row['Eldritch Invocations']), entry.options.filter(option => numeric(option.text.match(/Level (\d+)\+ Warlock/)?.[1]) <= level).map(option => option.name), previous.invocations || [], 1);
    for (const arcanum of [6, 7, 8, 9]) if (level >= arcanum * 2 - 1) group(`arcanum${arcanum}`, `Mystic Arcanum ${arcanum}`, 1, entry.spells.filter(spell => spell.level === arcanum).map(spell => spell.name));
  }
  if (level === 1 && ['cleric', 'druid'].includes(classId)) group('order', classId === 'cleric' ? 'Divine Order' : 'Primal Order', 1, classId === 'cleric' ? ['Protector', 'Thaumaturge'] : ['Warden', 'Magician']);
  if (level === 7 && ['cleric', 'druid'].includes(classId)) group('strike', classId === 'cleric' ? 'Blessed Strikes' : 'Elemental Fury', 1, ['Potent Spellcasting', classId === 'cleric' ? 'Divine Strike' : 'Primal Strike']);
  if ((classId === 'fighter' && level === 1) || (['paladin', 'ranger'].includes(classId) && level === 2)) group('fightingStyle', 'Fighting Style', 1, ['Archery', 'Defense', 'Great Weapon Fighting', 'Two-Weapon Fighting']);
  if (classId === 'sorcerer' && level === 6 && merged.subclass === 'draconic-sorcery') group('element', 'Elemental Affinity', 1, ['Acid', 'Cold', 'Fire', 'Lightning', 'Poison']);
  if ((classId === 'rogue' && [1, 6].includes(level)) || (classId === 'bard' && [2, 9].includes(level)) || (classId === 'ranger' && [2, 9].includes(level)) || (classId === 'wizard' && level === 2)) {
    const count = (classId === 'ranger' && level === 2) || classId === 'wizard' ? 1 : 2;
    group('expertise', 'New Expertise', count, unique([...character.skills, ...(choices.skills || [])]).filter(skill => !character.expertise.includes(skill)));
  }
  if (level === 1 && ['bard', 'ranger', 'rogue'].includes(classId)) group('skills', 'Multiclass Skill', 1, Object.keys(SKILL_ABILITIES).filter(skill => !character.skills.includes(skill)));
  if (choices.feat === 'Skilled') group('skilled', 'New Skills', 3, Object.keys(SKILL_ABILITIES).filter(skill => !character.skills.includes(skill)));
  if (choices.feat === 'Magic Initiate') {
    const taken = progression.history.filter(entry => entry.choices.feat === 'Magic Initiate').map(entry => entry.choices.initiateClass);
    group('initiateClass', 'Magic Initiate Spell List', 1, ['cleric', 'druid', 'wizard'].filter(value => !taken.includes(value)));
    group('initiateAbility', 'Magic Initiate Ability', 1, ['Intelligence', 'Wisdom', 'Charisma']);
    if (['cleric', 'druid', 'wizard'].includes(choices.initiateClass)) {
      group('initiateCantrips', 'Magic Initiate Cantrips', 2, catalog.classes[choices.initiateClass].spells.filter(spell => spell.level === 0).map(spell => spell.name));
      group('initiateSpell', 'Magic Initiate Level 1 Spell', 1, catalog.classes[choices.initiateClass].spells.filter(spell => spell.level === 1).map(spell => spell.name));
    }
  }
  if (classId === 'fighter' && merged.subclass === 'arcane-archer') {
    if (level === 3) {
      group('archerCantrip', 'Arcane Archer Lore Cantrip', 1, ['Druidcraft', 'Prestidigitation']);
      group('archerSkills', 'Arcane Archer Lore Skills', 2, Object.keys(SKILL_ABILITIES).filter(skill => !character.skills.includes(skill)));
    }
    if ([3, 7, 10, 15, 18].includes(level)) group('arcaneShots', 'Arcane Shot Options (UA 2025)', [3, 7, 10, 15, 18].indexOf(level) + 2, ARCANE_SHOTS, previous.arcaneShots || [], 1);
  }
  return { level, row, groups, previous, maxSpell, feat: featAt(classId, level), features: gainedFeatures(classId, level, merged.subclass) };
}

function validateChoices(progression, classId, choices) {
  const character = deriveCharacter(progression);
  const requirements = choiceRequirements(progression, classId, choices);
  const { previous, level, groups } = requirements;
  const allowed = new Set([...groups.map(group => group.key), 'abilityIncreases', 'featureNotes', 'supplementReviewed']);
  if (Object.keys(choices).some(key => !allowed.has(key))) throw new Error('Unexpected level-up choice.');
  for (const group of groups) {
    const selection = choices[group.key];
    if (SCALAR_CHOICES.has(group.key) ? typeof selection !== 'string' : !Array.isArray(selection)) throw new Error(`${group.label}: invalid choice format.`);
    const values = Array.isArray(selection) ? selection : selection ? [selection] : [];
    if (values.length !== group.count || unique(values).length !== values.length || values.some(value => !group.options.includes(value))) throw new Error(`${group.label}: choose ${group.count} different eligible options.`);
    if (group.retained.filter(value => !values.includes(value)).length > group.replacement) throw new Error(`${group.label}: too many replacements.`);
  }
  if (classId === 'wizard' && choices.spells.some(spell => !choices.spellbook.includes(spell))) throw new Error('Prepared Wizard spells must be in the spellbook.');
  if (choices.feat === 'Grappler' && Math.max(character.abilities.Strength, character.abilities.Dexterity) < 13) throw new Error('Grappler requires Strength or Dexterity 13.');
  if (choices.feat === 'Boon of Spell Recall' && !Object.keys(character.classes).some(value => CLASS_TRAITS[value].casting && value !== 'warlock')) throw new Error('Boon of Spell Recall requires Spellcasting.');
  if (choices.featureNotes !== undefined && (typeof choices.featureNotes !== 'string' || choices.featureNotes.length > 4000)) throw new Error('Feature notes must be at most 4000 characters.');
  if (choices.archerSkills && ['Arcana', 'Nature'].some(skill => !character.skills.includes(skill) && !choices.archerSkills.includes(skill))) throw new Error('Arcane Archer Lore grants Arcana and Nature; choose replacements only for skills already known.');
  const subclass = catalog.classes[classId].subclasses.find(entry => entry.id === (choices.subclass || previous.subclass));
  if (subclass?.source !== 'SRD 5.2.1' && subclass && choices.supplementReviewed !== true) throw new Error('Confirm the supplemental feature rules and record any additional choices.');
  if (classId === 'warlock') {
    for (const name of choices.invocations) {
      const option = catalog.classes.warlock.options.find(entry => entry.name === name);
      const dependency = option.text.match(/(Pact of the (?:Blade|Chain|Tome)|Thirsting Blade) Invocation/);
      if (dependency && !choices.invocations.includes(dependency[1])) throw new Error(`${name} requires ${dependency[1]}.`);
    }
  }
  if (level > 20) throw new Error('Class level 20 is the maximum.');
}

export function applyAdvancement(sheet, request) {
  const progression = advanceCharacter(sheet.progression || createProgression(sheet), request);
  const character = deriveCharacter(progression);
  return { ...copy(sheet), schemaVersion: 2, progression, advancementDraft: null, characterLevel: character.totalLevel, hp: { current: character.hpMax, max: character.hpMax, temp: 0 }, resources: character.resources };
}

export function rollHitDie(size, roll = die => Math.floor(Math.random() * die) + 1) {
  if (![6, 8, 10, 12].includes(size)) throw new Error('Unsupported Hit Die.');
  const rolls = [];
  do {
    const result = roll(size);
    if (!Number.isInteger(result) || result < 1 || result > size) throw new Error('Invalid die roll.');
    rolls.push(result);
    if (result !== 1) return { result, rolls };
  } while (rolls.length < 1000);
  throw new Error('Too many rerolls. Record a physical die result instead.');
}