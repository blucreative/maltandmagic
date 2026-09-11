(() => {
  'use strict';

  const rules = {
    'Innate Sorcery': {
      source: 'SRD 5.2.1 / Sorcerer',
      details: [
        'Use a Bonus Action to awaken your magic for 1 minute. Your Sorcerer spell save DC increases by 1 (13 to 14 for Col), and attack rolls for your Sorcerer spells have Advantage.',
        'Two uses, with all expended uses restored after a Long Rest. This does not require Concentration.'
      ]
    },
    'Font of Magic': {
      source: 'SRD 5.2.1 / Sorcerer',
      details: [
        'Col has a maximum of 2 Sorcery Points at Sorcerer level 2. All expended points return after a Long Rest.',
        'Convert a spell slot into Sorcery Points equal to its level, with no action required. You cannot exceed your Sorcery Point maximum.',
        'As a Bonus Action, spend 2 Sorcery Points to create one level 1 spell slot. At Sorcerer level 2 you cannot create higher-level slots. Created slots vanish when you finish a Long Rest.',
        'Metamagic also spends this pool. Normally only one Metamagic option can modify a spell when you cast it, unless an option says otherwise.'
      ]
    },
    'Careful Spell': {
      source: 'SRD 5.2.1 / Sorcerer / Metamagic',
      details: [
        'Cost: 1 Sorcery Point. When you cast a spell that forces other creatures to make a saving throw, choose up to your Charisma modifier of those creatures (minimum one). Col can choose up to 3.',
        'Chosen creatures automatically succeed on the save. If success would normally mean half damage, they take no damage instead. This does not remove other effects that still apply on a successful save.'
      ]
    },
    'Quickened Spell': {
      source: 'SRD 5.2.1 / Sorcerer / Metamagic',
      details: [
        'Cost: 2 Sorcery Points. Change a spell with a casting time of an Action to a Bonus Action for this casting.',
        'You cannot use this option if you have already cast a level 1+ spell this turn. After using it, you cannot cast a level 1+ spell for the rest of this turn. These restrictions also apply when you quicken a cantrip.',
        'This does not grant another Bonus Action or change a Reaction or 1-minute casting time. Col must still provide the spell components and any required spell slot.'
      ]
    },
    'Spellcasting': {
      source: 'SRD 5.2.1 / Sorcerer / Casting Spells',
      details: [
        'Charisma is Col\'s spellcasting ability. Spell save DC = 8 + proficiency bonus 2 + Charisma modifier 3 = 13. Spell attack modifier = 2 + 3 = +5. Innate Sorcery raises his Sorcerer spell DC to 14 and gives Advantage on those spell attack rolls.',
        'At Sorcerer level 2: four cantrips, four prepared level 1 spells, and three level 1 spell slots. Cantrips do not spend spell slots. Expended slots return after a Long Rest.',
        'V means spoken words; S means gestures with a free hand; M means the listed materials. Col can use his crystal Arcane Focus for materials with no listed cost that are not consumed. The hand holding a material component or focus can also perform that spell\'s Somatic component.',
        'On a turn, you can expend only one spell slot to cast a spell. Quickened Spell has additional restrictions.'
      ]
    },
    'Tough': {
      source: 'Character-sheet reference / non-SRD feat',
      details: [
        'Col\'s recorded feat adds 2 to his Hit Point maximum for each character level: +4 at level 2. This is a maximum-HP benefit, not Temporary Hit Points or extra healing on a Short Rest.',
        'Tough is not included in the SRD 5.2.1 corpus used here. This summary reflects the feat recorded on this sheet; consult the campaign\'s 2024 Player\'s Handbook for its full text.'
      ]
    },
    'Luck': {
      source: 'SRD 5.2.1 / Halfling',
      details: [
        'When you roll a 1 on the d20 of a D20 Test, you can reroll that die, but must use the new result.',
        'D20 Tests include ability checks, attack rolls, and saving throws. This trait does not reroll damage dice and does not consume Sorcery Points or Innate Sorcery uses.'
      ]
    },
    'Brave': {
      source: 'SRD 5.2.1 / Halfling',
      details: ['You have Advantage on saving throws to avoid or end the Frightened condition. Roll two d20s and use the higher result when Advantage applies. This is not immunity to Frightened.']
    },
    'Nimble & Stealthy': {
      source: 'SRD 5.2.1 / Halfling',
      details: [
        'Halfling Nimbleness: move through the space of a creature larger than you, but you cannot stop in that space. Col is Small.',
        'Naturally Stealthy: you can take the Hide action when obscured only by a creature at least one size larger than you. This permits the attempt; it does not make the Hide attempt automatically succeed.'
      ]
    },
    'Level 1 Spell Slots': {
      source: 'SRD 5.2.1 / Sorcerer / Casting Spells',
      details: ['Col has three level 1 spell slots at Sorcerer level 2. Casting a prepared level 1 spell normally expends one. Cantrips do not expend slots. All expended slots return after a Long Rest.', 'Font of Magic can create a level 1 slot for 2 Sorcery Points as a Bonus Action. Created slots vanish after a Long Rest.']
    },
    'Hit Dice': {
      source: 'SRD 5.2.1 / Sorcerer / Short Rest / Long Rest',
      details: ['Col has two d6 Hit Dice. During a Short Rest, spend available dice to regain HP: roll each d6 and add his Constitution modifier (+4). Healing cannot exceed maximum HP. Decide whether to spend another die after each roll.', 'A Short Rest takes 1 hour of downtime and requires at least 1 HP to start. A Long Rest normally takes at least 8 hours and restores all spent Hit Dice in the 2024 rules.']
    },
    'Blinded': {
      source: 'SRD 5.2.1 / Rules Glossary / Condition',
      details: ['You cannot see and automatically fail ability checks requiring sight. Attack rolls against you have Advantage; your attack rolls have Disadvantage.']
    },
    'Charmed': {
      source: 'SRD 5.2.1 / Rules Glossary / Condition',
      details: ['You cannot attack the charmer or target them with damaging abilities or magical effects. The charmer has Advantage on ability checks to interact with you socially.', 'Charmed alone does not give the charmer control of your actions. The effect causing it may impose additional rules.']
    },
    'Deafened': {
      source: 'SRD 5.2.1 / Rules Glossary / Condition',
      details: ['You cannot hear and automatically fail ability checks requiring hearing. This condition alone does not prevent speech or Verbal spell components.']
    },
    'Frightened': {
      source: 'SRD 5.2.1 / Rules Glossary / Condition',
      details: ['While the source of your fear is within line of sight, you have Disadvantage on ability checks and attack rolls. You cannot willingly move closer to the source of your fear.', 'Col\'s Brave trait gives Advantage on saves to avoid or end this condition.']
    },
    'Grappled': {
      source: 'SRD 5.2.1 / Rules Glossary / Condition',
      details: ['Your Speed is 0 and cannot increase. You have Disadvantage on attack rolls against targets other than your grappler.', 'The grappler can drag or carry you. Each foot of its movement costs an extra foot unless you are Tiny or at least two sizes smaller than it. The effect imposing the grapple specifies escape details.']
    },
    'Incapacitated': {
      source: 'SRD 5.2.1 / Rules Glossary / Condition',
      details: ['You cannot take actions, Bonus Actions, or Reactions. Your Concentration breaks, and you cannot speak. You have Disadvantage on Initiative rolls.']
    },
    'Invisible': {
      source: 'SRD 5.2.1 / Rules Glossary / Condition',
      details: ['You have Advantage on Initiative rolls. Effects that require their target to be seen cannot affect you unless their creator can see you. Equipment you wear or carry is also concealed.', 'Attack rolls against you have Disadvantage, and your attack rolls have Advantage. If a creature can see you, you do not gain these attack-roll benefits against that creature.', 'Being Invisible does not by itself mean your location is unknown.']
    },
    'Paralyzed': {
      source: 'SRD 5.2.1 / Rules Glossary / Condition',
      details: ['You are Incapacitated: no actions, Bonus Actions, Reactions, or speech; Concentration breaks; Initiative has Disadvantage. Your Speed is 0 and cannot increase.', 'You automatically fail Strength and Dexterity saving throws. Attacks against you have Advantage. Any attack that hits you is a Critical Hit if the attacker is within 5 feet.']
    },
    'Poisoned': {
      source: 'SRD 5.2.1 / Rules Glossary / Condition',
      details: ['You have Disadvantage on attack rolls and ability checks. Poisoned alone does not impose Disadvantage on saving throws or deal damage; the poison or effect may do more.']
    },
    'Prone': {
      source: 'SRD 5.2.1 / Rules Glossary / Condition',
      details: ['Your movement options are to crawl or spend half your Speed (round down) to stand and end Prone. You cannot stand this way if your Speed is 0.', 'Your attack rolls have Disadvantage. Attacks against you have Advantage if the attacker is within 5 feet; otherwise, they have Disadvantage.']
    },
    'Restrained': {
      source: 'SRD 5.2.1 / Rules Glossary / Condition',
      details: ['Your Speed is 0 and cannot increase. Attack rolls against you have Advantage, and your attack rolls have Disadvantage. You also have Disadvantage on Dexterity saving throws.']
    },
    'Stunned': {
      source: 'SRD 5.2.1 / Rules Glossary / Condition',
      details: ['You are Incapacitated: no actions, Bonus Actions, Reactions, or speech; Concentration breaks; Initiative has Disadvantage.', 'You automatically fail Strength and Dexterity saving throws. Attack rolls against you have Advantage. Stunned alone does not set your Speed to 0 in the 2024 rules.']
    },
    'Light': {
      source: 'SRD 5.2.1 / Spells / Evocation cantrip',
      details: ['Casting time: Action. Range: Touch. Components: V, M (a firefly or phosphorescent moss). Duration: 1 hour.', 'Touch one Large or smaller object not worn or carried by someone else. It sheds Bright Light in a 20-foot radius, then Dim Light for another 20 feet. You choose the color.', 'An opaque covering blocks the light. Casting Light again ends the previous casting. No Concentration or spell slot is required.']
    },
    'Mage Hand': {
      source: 'SRD 5.2.1 / Spells / Conjuration cantrip',
      details: ['Casting time: Action. Range: 30 feet. Components: V, S. Duration: 1 minute.', 'Create a spectral hand at a point within range. On casting, use it to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour out a vial.', 'On later turns, take a Magic action to control it again and move it up to 30 feet as part of that action. It cannot attack, activate magic items, or carry more than 10 pounds.', 'The hand vanishes if ever more than 30 feet from you or if you cast the spell again. No Concentration or spell slot is required.']
    },
    'Mending': {
      source: 'SRD 5.2.1 / Spells / Transmutation cantrip',
      details: ['Casting time: 1 minute. Range: Touch. Components: V, S, M (two lodestones). Duration: Instantaneous.', 'Repair one break or tear in an object you touch, leaving no trace of that damage, provided the break is no larger than 1 foot in any dimension. It can physically repair a magic item but cannot restore its magic.', 'The 1-minute casting requires a Magic action each turn and Concentration while casting. The finished repair does not require Concentration. No spell slot is required.']
    },
    'Prestidigitation': {
      source: 'SRD 5.2.1 / Spells / Transmutation cantrip',
      details: ['Casting time: Action. Range: 10 feet. Components: V, S. Duration: Up to 1 hour. No Concentration or spell slot is required. Choose one effect per casting:', 'Create an instantaneous, harmless sensory effect; instantly light or snuff a candle, torch, or small campfire; or instantly clean or soil an object of at most 1 cubic foot.', 'For 1 hour, chill, warm, or flavor up to 1 cubic foot of nonliving material; or place a color, small mark, or symbol on an object or surface.', 'Create a nonmagical trinket or illusory image that fits in your hand until the end of your next turn. The trinket cannot deal damage and has no monetary worth.', 'You can have up to three non-instantaneous effects active at once from repeated castings.']
    },
    'Grease': {
      source: 'SRD 5.2.1 / Spells / Level 1 Conjuration',
      details: ['Casting time: Action. Range: 60 feet. Components: V, S, M (pork rind or butter). Duration: 1 minute. No Concentration.', 'Nonflammable grease covers a 10-foot square of ground centered on a point within range. It becomes Difficult Terrain.', 'Each creature standing there when it appears must succeed on a Dexterity save or fall Prone. Creatures also make that save when entering the area or ending a turn there. Col\'s DC is 13, or 14 during Innate Sorcery.']
    },
    'False Life': {
      source: 'SRD 5.2.1 / Spells / Level 1 Necromancy',
      details: ['Casting time: Action. Range: Self. Components: V, S, M (a drop of alcohol). Duration: Instantaneous.', 'Gain 2d4 + 4 Temporary Hit Points. This is a buffer against damage, not healing to your current Hit Points.', 'Higher-level slot: gain 5 more Temporary Hit Points for each slot level above 1. Col currently has only level 1 slots.']
    },
    'Fog Cloud': {
      source: 'SRD 5.2.1 / Spells / Level 1 Conjuration',
      details: ['Casting time: Action. Range: 120 feet. Components: V, S. Duration: Concentration, up to 1 hour.', 'Create a 20-foot-radius Sphere of fog centered on a point in range. Its area is Heavily Obscured, blocking normal vision. A strong wind, such as Gust of Wind, disperses it.', 'Concentration: taking damage requires a Constitution save, DC 10 or half the damage (rounded down), whichever is higher, capped at DC 30. Col\'s Constitution save is +6. Starting another Concentration effect, becoming Incapacitated, or dying ends Concentration. You can also end it voluntarily with no action.', 'Higher-level slot: the radius increases by 20 feet per slot level above 1. Col currently has only level 1 slots.']
    },
    'Shield': {
      source: 'SRD 5.2.1 / Spells / Level 1 Abjuration',
      details: ['Casting time: Reaction when you are hit by an attack roll or targeted by Magic Missile. Range: Self. Components: V, S. Duration: 1 round.', 'Gain +5 AC until the start of your next turn, including against the triggering attack, and take no damage from Magic Missile during that time. Col\'s base AC of 8 becomes 13.', 'It uses your Reaction and normally one level 1 slot. No Concentration is required.']
    }
  };
  rules['Sorcery Points'] = rules['Font of Magic'];

  const popover = document.createElement('aside');
  popover.className = 'rules-popover';
  popover.tabIndex = -1;
  popover.setAttribute('aria-labelledby', 'colRulesTitle');
  popover.hidden = true;
  popover.innerHTML = '<div id="colRulesTooltip" role="tooltip"><h2 id="colRulesTitle"></h2><p class="rules-source"></p><div class="rules-details"></div></div><button type="button" class="rules-close" aria-label="Close rules help"><img src="../assets/icons/col-agen/x.svg" width="18" height="18" alt=""></button>';
  const credit = document.createElement('p');
  credit.className = 'rules-credit';
  credit.textContent = 'Rules summarized from SRD 5.2.1 by Wizards of the Coast, licensed under Creative Commons Attribution 4.0 (CC BY 4.0).';
  popover.append(credit);
  document.body.append(popover);
  const tooltip = popover.querySelector('[role="tooltip"]');
  const closeButton = popover.querySelector('.rules-close');
  let activeButton = null;
  let pinned = false;
  let hideTimer;

  function hideHelp() {
    clearTimeout(hideTimer);
    if (activeButton) activeButton.setAttribute('aria-expanded', 'false');
    popover.hidden = true;
    activeButton = null;
    pinned = false;
  }

  function positionHelp() {
    if (!activeButton) return;
    if (!activeButton.isConnected || !activeButton.getClientRects().length) {
      hideHelp();
      return;
    }
    const anchor = activeButton.getBoundingClientRect();
    const bounds = popover.getBoundingClientRect();
    const padding = 12;
    const left = Math.max(padding, Math.min(anchor.left, window.innerWidth - bounds.width - padding));
    const below = anchor.bottom + 8;
    const top = below + bounds.height <= window.innerHeight - padding ? below : anchor.top - bounds.height - 8;
    popover.style.left = `${left}px`;
    popover.style.top = `${Math.max(padding, Math.min(top, window.innerHeight - bounds.height - padding))}px`;
  }

  function showHelp(button, pin = false) {
    const rule = rules[button.dataset.rulesHelp];
    if (!rule) return;
    clearTimeout(hideTimer);
    if (activeButton && activeButton !== button) activeButton.setAttribute('aria-expanded', 'false');
    activeButton = button;
    pinned = pin;
    popover.querySelector('h2').textContent = button.dataset.rulesHelp;
    popover.querySelector('.rules-source').textContent = rule.source;
    credit.hidden = !rule.source.startsWith('SRD');
    popover.querySelector('.rules-details').replaceChildren(...rule.details.map(text => {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      return paragraph;
    }));
    tooltip.setAttribute('role', pin ? 'region' : 'tooltip');
    tooltip.setAttribute('aria-labelledby', 'colRulesTitle');
    closeButton.hidden = !pin;
    popover.hidden = false;
    popover.scrollTop = 0;
    button.setAttribute('aria-expanded', 'true');
    positionHelp();
    if (pin) popover.focus({ preventScroll: true });
  }

  function scheduleHide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      if (!pinned && !popover.matches(':hover') && document.activeElement !== activeButton) hideHelp();
    }, 180);
  }

  function addHelp(target, name) {
    if (!rules[name] || target.querySelector('[data-rules-help]')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'rules-help';
    button.dataset.rulesHelp = name;
    button.setAttribute('aria-label', `${name}: rules help`);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', 'colRulesTooltip');
    button.setAttribute('aria-describedby', `col-rule-${Object.keys(rules).indexOf(name)}`);
    button.innerHTML = '<img src="../assets/icons/col-agen/info.svg" width="16" height="16" alt="">';
    target.append(button);
  }

  Object.entries(rules).forEach(([name, rule], index) => {
    const description = document.createElement('div');
    description.id = `col-rule-${index}`;
    description.hidden = true;
    description.textContent = `${name}. ${rule.source}. ${rule.details.join(' ')}`;
    document.body.append(description);
  });
  document.querySelectorAll('.feature h3, .resource strong, .spell h3').forEach(heading => {
    addHelp(heading, heading.firstChild.textContent.trim());
  });

  function enhanceConditions() {
    if (activeButton && !activeButton.isConnected) hideHelp();
    document.querySelectorAll('#conditions > [data-condition]').forEach(button => {
      const wrapper = document.createElement('div');
      wrapper.className = 'condition-control';
      button.before(wrapper);
      wrapper.append(button);
      addHelp(wrapper, button.dataset.condition);
    });
  }
  enhanceConditions();
  new MutationObserver(enhanceConditions).observe(document.getElementById('conditions'), { childList: true });

  document.addEventListener('pointerover', event => {
    const button = event.target.closest('[data-rules-help]');
    if (button && !pinned && event.pointerType !== 'touch') showHelp(button);
    if (popover.contains(event.target)) clearTimeout(hideTimer);
  });
  document.addEventListener('pointerout', event => {
    if (event.target.closest('[data-rules-help]') || popover.contains(event.target)) scheduleHide();
  });
  document.addEventListener('focusin', event => {
    const button = event.target.closest('[data-rules-help]');
    if (button) {
      if (!(activeButton === button && pinned)) showHelp(button);
    } else if (!popover.contains(event.target)) hideHelp();
  });
  document.addEventListener('focusout', event => {
    if (event.target.closest('[data-rules-help]') || popover.contains(event.target)) {
      if (!popover.contains(event.relatedTarget) && !event.relatedTarget?.closest('[data-rules-help]')) hideHelp();
    }
  });
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-rules-help]');
    if (button) {
      if (activeButton === button && pinned) hideHelp();
      else showHelp(button, true);
    } else if (!popover.contains(event.target)) hideHelp();
  });
  closeButton.addEventListener('click', () => {
    const previous = activeButton;
    previous?.focus({ preventScroll: true });
    hideHelp();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !popover.hidden) {
      if (popover.contains(document.activeElement)) activeButton?.focus({ preventScroll: true });
      hideHelp();
      event.preventDefault();
    }
  });
  window.addEventListener('resize', positionHelp);
  document.addEventListener('scroll', positionHelp, { capture: true, passive: true });
})();