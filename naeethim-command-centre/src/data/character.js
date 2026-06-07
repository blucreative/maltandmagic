// ============================================================================
// naeethim — Level 10 Dwarf Barbarian (Path of the Wild Heart) — Wayfarer
// Transcribed from the attached D&D Beyond character sheet (PHB 2024 / SRD 5.2.1).
// This is the SEED data the dashboard boots with. Edit values here to keep
// the sheet in sync as the character levels up — the UI re-derives everything
// downstream (modifiers, passive scores, active-effect bonuses) from this file
// plus whatever the player toggles/spends at runtime.
// ============================================================================

export const initialCharacter = {
  meta: {
    name: 'naeethim',
    charname: 'Dum My Char',
    classLevel: 'Barbarian 10',
    subclass: 'Path of the Wild Heart',
    species: 'Dwarf',
    background: 'Wayfarer',
    xp: 'Milestone',
    alignment: '',
    playerName: 'naeethim',
  },

  proficiencyBonus: 4,

  abilities: {
    str: { label: 'Strength', score: 18 },
    dex: { label: 'Dexterity', score: 15 },
    con: { label: 'Constitution', score: 15 },
    int: { label: 'Intelligence', score: 9 },
    wis: { label: 'Wisdom', score: 9 },
    cha: { label: 'Charisma', score: 5 },
  },

  // Saving throw proficiencies (Barbarian: Strength & Constitution)
  saveProficiencies: { str: true, dex: false, con: true, int: false, wis: false, cha: false },
  saveNotes: [
    'Dwarven Resilience — Advantage on saving throws to avoid or end the Poisoned condition (and Resistance to Poison damage).',
    'Danger Sense — Advantage on Dexterity saving throws unless you have the Incapacitated condition.',
  ],

  // Skill proficiencies. `expertise: true` would double proficiency (not present on this sheet).
  skills: [
    { key: 'acrobatics', label: 'Acrobatics', ability: 'dex', proficient: false },
    { key: 'animalHandling', label: 'Animal Handling', ability: 'wis', proficient: false },
    { key: 'arcana', label: 'Arcana', ability: 'int', proficient: false },
    { key: 'athletics', label: 'Athletics', ability: 'str', proficient: true },
    { key: 'deception', label: 'Deception', ability: 'cha', proficient: false },
    { key: 'history', label: 'History', ability: 'int', proficient: false },
    { key: 'insight', label: 'Insight', ability: 'wis', proficient: true },
    { key: 'intimidation', label: 'Intimidation', ability: 'cha', proficient: false },
    { key: 'investigation', label: 'Investigation', ability: 'int', proficient: false },
    { key: 'medicine', label: 'Medicine', ability: 'wis', proficient: false },
    { key: 'nature', label: 'Nature', ability: 'int', proficient: false },
    { key: 'perception', label: 'Perception', ability: 'wis', proficient: false },
    { key: 'performance', label: 'Performance', ability: 'cha', proficient: false },
    { key: 'persuasion', label: 'Persuasion', ability: 'cha', proficient: false },
    { key: 'religion', label: 'Religion', ability: 'int', proficient: false },
    { key: 'sleightOfHand', label: 'Sleight of Hand', ability: 'dex', proficient: false },
    { key: 'stealth', label: 'Stealth', ability: 'dex', proficient: true },
    { key: 'survival', label: 'Survival', ability: 'wis', proficient: true },
  ],

  // Skills that, while Raging, can be made as Strength checks instead (Primal Knowledge)
  primalKnowledgeSkills: ['acrobatics', 'intimidation', 'perception', 'stealth', 'survival'],

  senses: 'Darkvision 180 ft.',
  initiativeBonus: 2,
  armorClass: 14,
  armorClassNote: 'Unarmored Defense (no armor worn)',
  speed: { value: 40, label: 'ft. (Walking)', base: 30, note: '+10 ft. from Fast Movement while not wearing Heavy armor' },
  defenses: ['Resistance — Poison (Dwarven Resilience)'],

  hp: { max: 42, current: 42, temp: 0 },
  hitDice: { die: 'd12', total: 10, remaining: 10 },
  deathSaves: { successes: 0, failures: 0 },

  heroicInspiration: false,
  abilitySaveDC: null,

  currency: { cp: 0, sp: 0, ep: 0, gp: 65, pp: 0 },
  encumbrance: { carried: 70, encumberedAt: 270, pushDragLift: 540 },

  proficiencies: {
    armor: 'Light Armor, Medium Armor, Shields',
    weapons: 'Martial Weapons, Simple Weapons',
    tools: "Thieves' Tools",
    languages: 'Common, Common Sign Language, Gnomish',
  },

  equipment: [
    { name: 'Greataxe', qty: 1, weight: '7 lb.' },
    { name: 'Handaxe', qty: 4, weight: '2 lb.' },
    { name: 'Backpack', qty: 1, weight: '5 lb.' },
    { name: 'Bedroll', qty: 1, weight: '7 lb.' },
    { name: 'Oil', qty: 2, weight: '2 lb.' },
    { name: 'Rations', qty: 10, weight: '20 lb.' },
    { name: 'Rope', qty: 1, weight: '5 lb.' },
    { name: 'Tinderbox', qty: 1, weight: '1 lb.' },
    { name: 'Torch', qty: 10, weight: '10 lb.' },
    { name: 'Waterskin', qty: 1, weight: '5 lb.' },
  ],

  // ----------------------------------------------------------------------
  // WEAPON ATTACKS
  // `damageBonusAbility` lets the dashboard recompute "to hit"/damage live
  // off the ability score, and `rageEligible` flags Strength-based attacks
  // that benefit from Rage Damage.
  // ----------------------------------------------------------------------
  weapons: [
    {
      id: 'greataxe',
      name: 'Greataxe',
      hitAbility: 'str',
      baseDamageDice: '1d12',
      damageType: 'Slashing',
      rageEligible: true,
      notes: 'Martial, Heavy, Two-Handed, Cleave',
      masteryProperty: 'cleave',
    },
    {
      id: 'handaxe',
      name: 'Handaxe',
      hitAbility: 'str',
      baseDamageDice: '1d6',
      damageType: 'Slashing',
      rageEligible: true,
      notes: 'Simple, Light, Thrown, Vex, Range (20/60)',
      masteryProperty: 'vex',
      qty: 4,
    },
    {
      id: 'unarmed',
      name: 'Unarmed Strike',
      hitAbility: 'str',
      baseDamageDice: null,
      // Base Unarmed Strike damage is 1 + the ability modifier (shown as the
      // sheet's flat "5" = 1 + STR mod of +4). Storing the base (1) here lets
      // the total stay correct and "live" if Strength ever changes.
      flatDamage: 1,
      damageType: 'Bludgeoning',
      rageEligible: true,
      notes: '',
    },
  ],

  // ----------------------------------------------------------------------
  // ACTIONS — reference lists shown in the Actions panel
  // ----------------------------------------------------------------------
  actionsStandard: [
    'Attack', 'Magic', 'Dash', 'Disengage', 'Dodge', 'Help', 'Hide', 'Ready', 'Search',
    'Utilize', 'Opportunity Attack', 'Grapple', 'Shove', 'Improvise', 'Two-Weapon Fighting',
    'Interact with an Object', 'Study', 'Influence',
  ],

  // ----------------------------------------------------------------------
  // FEATURES & TRAITS
  // Each feature can optionally declare:
  //   tracking: { max, per, label }   — a limited-use resource the player can spend/recover
  //   toggle: { onLabel, offLabel, effect }  — an on/off state (e.g. Raging) with live stat effects
  //   effect: { ... }                 — describes the stat changes applied while a toggle/use is active
  // The `effect.bonuses` array is read by the Active Effects bar and the weapon
  // damage calculator to actually change numbers shown elsewhere in the UI.
  // ----------------------------------------------------------------------
  features: [
    {
      id: 'rage',
      name: 'Rage',
      source: 'Barbarian • PHB-2024 p.51',
      category: 'Class Feature',
      activation: 'Bonus Action',
      description:
        "Imbue yourself with primal power. While raging: you have Resistance to Bludgeoning, Piercing, and Slashing damage; you gain a bonus to damage on Strength-based attacks (Rage Damage — currently +3 at level 10); you have Advantage on Strength checks and Strength saving throws; and you can't concentrate or cast spells. Lasts until the end of your next turn, extended by attacking, forcing a save, or spending a Bonus Action — up to 10 minutes total. Ends early if you don Heavy armor or are Incapacitated.",
      tracking: { max: 4, per: 'Long Rest', label: 'Rages' },
      toggle: {
        id: 'raging',
        onLabel: 'Enter Rage',
        offLabel: 'End Rage',
        spendsUse: true,
        effect: {
          name: 'Raging',
          bonuses: [
            { type: 'damage', amount: 3, appliesTo: 'str-attacks', text: '+3 damage on Strength-based attacks (Rage Damage)' },
            { type: 'resistance', text: 'Resistance to Bludgeoning, Piercing, and Slashing damage' },
            { type: 'advantage', text: 'Advantage on Strength checks and Strength saving throws' },
            { type: 'restriction', text: "Can't concentrate or cast spells" },
          ],
        },
      },
    },
    {
      id: 'unarmored-defense',
      name: 'Unarmored Defense',
      source: 'Barbarian • PHB-2024 p.51',
      category: 'Class Feature',
      description: 'While not wearing armor, your base AC equals 14 + any Shield bonus (Path of the Wild Heart Unarmored Defense). You can use a Shield and still gain this benefit.',
    },
    {
      id: 'weapon-mastery',
      name: 'Weapon Mastery',
      source: 'Barbarian • PHB-2024 p.52',
      category: 'Class Feature',
      description:
        'You can use the mastery properties of 4 kinds of Simple or Martial Melee weapons of your choice (you know Cleave on Greataxe, Vex on Handaxe, Push on Warhammer, and Slow on Club). Whenever you finish a Long Rest, you can change one of those weapon choices.',
    },
    {
      id: 'danger-sense',
      name: 'Danger Sense',
      source: 'Barbarian • PHB-2024 p.52',
      category: 'Class Feature',
      description: "You have Advantage on Dexterity saving throws unless you have the Incapacitated condition.",
    },
    {
      id: 'reckless-attack',
      name: 'Reckless Attack',
      source: 'Barbarian • PHB-2024 p.52',
      category: 'Class Feature',
      activation: 'Free (declare on first attack of your turn)',
      description:
        "When you make your first attack roll on your turn, you can decide to attack recklessly, giving yourself Advantage on Strength-based attack rolls until the start of your next turn — but attack rolls against you have Advantage during that time too.",
      toggle: {
        id: 'reckless',
        onLabel: 'Attack Recklessly',
        offLabel: 'Stop Attacking Recklessly',
        spendsUse: false,
        effect: {
          name: 'Attacking Recklessly',
          bonuses: [
            { type: 'advantage', text: 'Advantage on Strength-based attack rolls' },
            { type: 'disadvantage-against', text: 'Attack rolls against you have Advantage until your next turn' },
          ],
        },
      },
    },
    {
      id: 'brutal-strike',
      name: 'Brutal Strike',
      source: 'Barbarian • PHB-2024 p.53',
      category: 'Class Feature',
      activation: '1 Action — once per turn while Reckless Attacking',
      description:
        "If you're using Reckless Attack, you can forgo Advantage on one Strength-based attack of your choice (it must not already have Disadvantage). If that attack hits, the target takes an extra 1d10 damage of the weapon/Unarmed Strike's type, and you cause one Brutal Strike effect of your choice: Forceful Blow (push the target up to 15 ft. away and knock it Prone if it fails a Strength save) or Hamstring Blow (reduce the target's Speed to 0 until the start of your next turn on a failed Strength save).",
      tracking: { max: 1, per: 'Turn', label: 'Brutal Strikes', resetLabel: 'Reset for new turn' },
      effectChoices: ['Forceful Blow', 'Hamstring Blow'],
    },
    {
      id: 'primal-knowledge',
      name: 'Primal Knowledge',
      source: 'Barbarian (Path of the Wild Heart) • PHB-2024 p.52',
      category: 'Subclass Feature',
      description:
        "You gain proficiency in another Barbarian skill of your choice (Stealth, granted here). While Raging, whenever you make an ability check using Acrobatics, Intimidation, Perception, Stealth, or Survival, you can use your Strength modifier instead of the skill's normal ability — handy when your physical stats outclass your mental ones.",
    },
    {
      id: 'animal-speaker',
      name: 'Animal Speaker',
      source: 'Barbarian (Path of the Wild Heart) • PHB-2024 p.55',
      category: 'Subclass Feature',
      description: 'You can cast Beast Sense and Speak with Animals, but only as Rituals, using Wisdom as your spellcasting ability for them.',
    },
    {
      id: 'rage-of-the-wilds',
      name: 'Rage of the Wilds',
      source: 'Barbarian (Path of the Wild Heart) • PHB-2024 p.55',
      category: 'Subclass Feature',
      description: 'Your connection to the wild grants you additional benefits while you Rage, channeling primal aspects of nature into your fury.',
    },
    {
      id: 'extra-attack',
      name: 'Extra Attack',
      source: 'Barbarian • PHB-2024 p.53',
      category: 'Class Feature',
      description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.',
    },
    {
      id: 'fast-movement',
      name: 'Fast Movement',
      source: 'Barbarian • PHB-2024 p.53',
      category: 'Class Feature',
      description: "Your speed increases by 10 feet while you aren't wearing Heavy armor (already folded into the 40 ft. shown on this sheet).",
    },
    {
      id: 'aspect-of-the-wilds',
      name: 'Aspect of the Wilds — Owl',
      source: 'Barbarian (Path of the Wild Heart) • PHB-2024 p.55',
      category: 'Subclass Feature',
      description:
        "You gain a primal aspect of your choice, changeable on a Long Rest. Currently chosen: Owl — you have Darkvision with a range of 60 ft., and since you already have Darkvision, its range increases by 60 ft. instead (reflected in your 180 ft. Darkvision).",
    },
    {
      id: 'feral-instinct',
      name: 'Feral Instinct',
      source: 'Barbarian • PHB-2024 p.53',
      category: 'Class Feature',
      description: 'You have Advantage on Initiative rolls.',
    },
    {
      id: 'instinctive-pounce',
      name: 'Instinctive Pounce',
      source: 'Barbarian • PHB-2024 p.53',
      category: 'Class Feature',
      activation: 'Part of your Rage Bonus Action',
      description: 'As part of the Bonus Action you take to enter your Rage, you can move up to half your Speed.',
    },
    {
      id: 'brutal-strike-effects',
      name: 'Brutal Strike: Forceful Blow / Hamstring Blow',
      source: 'Barbarian • PHB-2024 p.53',
      category: 'Class Feature — Action options',
      description:
        "The two riders you can choose from when a Brutal Strike connects. Forceful Blow: the target makes a Strength save or is pushed up to 15 ft. away and knocked Prone. Hamstring Blow: the target makes a Strength save or has its Speed reduced to 0 until the start of your next turn.",
    },
    {
      id: 'stonecunning',
      name: 'Stonecunning (Tremorsense)',
      source: 'Dwarf Species • PHB-2024 p.188',
      category: 'Species Trait',
      activation: 'Bonus Action',
      description:
        'As a Bonus Action, you gain Tremorsense with a range of 60 ft. for 10 minutes. You must be on or touching a natural or worked stone surface to use this Tremorsense.',
      tracking: { max: 4, per: 'Long Rest', label: 'Uses' },
    },
    {
      id: 'dwarven-resilience',
      name: 'Dwarven Resilience',
      source: 'Dwarf Species • PHB-2024 p.188',
      category: 'Species Trait',
      description: 'You have Resistance to Poison damage, and Advantage on saving throws you make to avoid or end the Poisoned condition.',
    },
    {
      id: 'dwarven-toughness',
      name: 'Dwarven Toughness',
      source: 'Dwarf Species • PHB-2024 p.188',
      category: 'Species Trait',
      description: 'Your Hit Point maximum increases by 10 (already folded into your Max HP of 42).',
    },
    {
      id: 'languages-trait',
      name: 'Languages',
      source: 'Species/Background • PHB-2024 p.37',
      category: 'Trait',
      description: 'Your character knows Common plus two more languages — currently Common Sign Language and Gnomish.',
    },
    {
      id: 'tough',
      name: 'Tough (Feat)',
      source: 'Feat • PHB-2024 p.202',
      category: 'Feat',
      description: 'When you took this feat, your HP maximum increased by 20, and it increases by an additional 2 for every level you gain thereafter (already folded into your Max HP of 42).',
    },
    {
      id: 'weapon-mastery-properties',
      name: 'Weapon Mastery Properties Known',
      source: 'Feat: Weapon Mastery • PHB-2024 p.52',
      category: 'Feat',
      description:
        "Cleave (Greataxe): on a hit, make a free melee attack against a second creature within 5 ft. of the first (no ability modifier added to that extra hit unless it's negative). " +
        "Vex (Handaxe): on a hit, gain Advantage on your next attack roll against that target before the end of your next turn. " +
        "Push (Warhammer): on a hit, push the target up to 10 ft. away if it's Large or smaller. " +
        "Slow (Club): on a hit that deals damage, reduce the target's Speed by 10 ft. until the start of your next turn (doesn't stack below -10 ft. total).",
    },
    {
      id: 'lucky',
      name: 'Lucky (Feat)',
      source: 'Feat • PHB-2024 p.201',
      category: 'Feat',
      description:
        "You have Luck Points you can spend on the fly: spend 1 to give yourself Advantage on a d20 Test you just rolled, or spend 1 to impose Disadvantage on an attack roll a creature just made against you. You regain all expended Luck Points after a Long Rest.",
      tracking: { max: 4, per: 'Long Rest', label: 'Luck Points' },
    },
    {
      id: 'wayfarer-asi',
      name: 'Wayfarer Ability Score Improvements',
      source: 'Background: Wayfarer • PHB-2024 p.185',
      category: 'Background Feature',
      description: 'Your background increased two ability scores by +2/+1 (already reflected in the ability scores on this sheet).',
    },
    {
      id: 'nature-speaker',
      name: 'Nature Speaker',
      source: 'Barbarian (Path of the Wild Heart) • PHB-2024 p.55',
      category: 'Subclass Feature',
      description: 'You can cast Commune with Nature, but only as a Ritual, using Wisdom as your spellcasting ability for it.',
    },
  ],

  // ----------------------------------------------------------------------
  // SPELLCASTING — all three known spells are Wisdom-based Rituals granted
  // by Barbarian subclass features (Animal Speaker / Nature Speaker), so
  // there's no normal spell-save DC / attack bonus on the sheet (Barbarians
  // can't maintain Concentration or cast spells while Raging either).
  // ----------------------------------------------------------------------
  spellcasting: {
    classLabel: 'Path of the Wild Heart (Ritual casting only)',
    ability: 'Wisdom',
    saveDC: null,
    attackBonus: null,
    note: "These spells can only be cast as Rituals (they take longer but don't use a spell slot), and — like all spellcasting — they're unavailable while you're Raging.",
    spells: [
      {
        id: 'speak-with-animals',
        level: 1,
        name: 'Speak with Animals',
        ritual: true,
        source: 'Animal Speaker',
        time: '1 Action + 10 min (Ritual)',
        range: 'Self',
        components: 'V, S',
        duration: '10 minutes',
        pageRef: 'PHB-2024 p.318',
        description:
          'For the duration, you understand the literal meaning of any language spoken by beasts, and beasts that can hear you understand the literal meaning of your words, though you have no special ability to influence their attitudes.',
      },
      {
        id: 'beast-sense',
        level: 2,
        name: 'Beast Sense',
        ritual: true,
        source: 'Animal Speaker',
        time: '1 Action + 10 min (Ritual)',
        range: 'Touch',
        components: 'S',
        duration: 'Concentration, up to 1 hour',
        pageRef: 'PHB-2024 p.245',
        description:
          'You touch a willing beast and, for the duration, can use your action to see through its eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses it has.',
      },
      {
        id: 'commune-with-nature',
        level: 5,
        name: 'Commune with Nature',
        ritual: true,
        source: 'Nature Speaker',
        time: '1 minute (Ritual)',
        range: 'Self',
        components: 'V, S',
        duration: 'Instantaneous',
        pageRef: 'PHB-2024 p.252',
        description:
          'You briefly become one with nature, learning details of the land within 3 miles (or 300 ft. if underground): terrain and bodies of water, the location of settlements, and the locations of notable creatures, structures, or relevant magical phenomena (you choose three of these to learn about).',
      },
    ],
  },
}
