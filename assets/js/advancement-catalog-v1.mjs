export default {
  "version": "2024-campaign-1",
  "source": "https://raw.githubusercontent.com/downfallx/dnd-5e-srd-markdown/refs/heads/master/",
  "classes": {
    "barbarian": {
      "name": "Barbarian",
      "levels": [
        {
          "Level": "1",
          "Proficiency Bonus": "+2",
          "Class Features": "Rage, Unarmored Defense, Weapon Mastery",
          "Rages": "2",
          "Rage Damage": "+2",
          "Weapon Mastery": "2"
        },
        {
          "Level": "2",
          "Proficiency Bonus": "+2",
          "Class Features": "Danger Sense, Reckless Attack",
          "Rages": "2",
          "Rage Damage": "+2",
          "Weapon Mastery": "2"
        },
        {
          "Level": "3",
          "Proficiency Bonus": "+2",
          "Class Features": "Barbarian Subclass, Primal Knowledge",
          "Rages": "3",
          "Rage Damage": "+2",
          "Weapon Mastery": "2"
        },
        {
          "Level": "4",
          "Proficiency Bonus": "+2",
          "Class Features": "Ability Score Improvement",
          "Rages": "3",
          "Rage Damage": "+2",
          "Weapon Mastery": "3"
        },
        {
          "Level": "5",
          "Proficiency Bonus": "+3",
          "Class Features": "Extra Attack, Fast Movement",
          "Rages": "3",
          "Rage Damage": "+2",
          "Weapon Mastery": "3"
        },
        {
          "Level": "6",
          "Proficiency Bonus": "+3",
          "Class Features": "Subclass feature",
          "Rages": "4",
          "Rage Damage": "+2",
          "Weapon Mastery": "3"
        },
        {
          "Level": "7",
          "Proficiency Bonus": "+3",
          "Class Features": "Feral Instinct, Instinctive Pounce",
          "Rages": "4",
          "Rage Damage": "+2",
          "Weapon Mastery": "3"
        },
        {
          "Level": "8",
          "Proficiency Bonus": "+3",
          "Class Features": "Ability Score Improvement",
          "Rages": "4",
          "Rage Damage": "+2",
          "Weapon Mastery": "3"
        },
        {
          "Level": "9",
          "Proficiency Bonus": "+4",
          "Class Features": "Brutal Strike",
          "Rages": "4",
          "Rage Damage": "+3",
          "Weapon Mastery": "3"
        },
        {
          "Level": "10",
          "Proficiency Bonus": "+4",
          "Class Features": "Subclass feature",
          "Rages": "4",
          "Rage Damage": "+3",
          "Weapon Mastery": "4"
        },
        {
          "Level": "11",
          "Proficiency Bonus": "+4",
          "Class Features": "Relentless Rage",
          "Rages": "4",
          "Rage Damage": "+3",
          "Weapon Mastery": "4"
        },
        {
          "Level": "12",
          "Proficiency Bonus": "+4",
          "Class Features": "Ability Score Improvement",
          "Rages": "5",
          "Rage Damage": "+3",
          "Weapon Mastery": "4"
        },
        {
          "Level": "13",
          "Proficiency Bonus": "+5",
          "Class Features": "Improved Brutal Strike",
          "Rages": "5",
          "Rage Damage": "+3",
          "Weapon Mastery": "4"
        },
        {
          "Level": "14",
          "Proficiency Bonus": "+5",
          "Class Features": "Subclass feature",
          "Rages": "5",
          "Rage Damage": "+3",
          "Weapon Mastery": "4"
        },
        {
          "Level": "15",
          "Proficiency Bonus": "+5",
          "Class Features": "Persistent Rage",
          "Rages": "5",
          "Rage Damage": "+3",
          "Weapon Mastery": "4"
        },
        {
          "Level": "16",
          "Proficiency Bonus": "+5",
          "Class Features": "Ability Score Improvement",
          "Rages": "5",
          "Rage Damage": "+4",
          "Weapon Mastery": "4"
        },
        {
          "Level": "17",
          "Proficiency Bonus": "+6",
          "Class Features": "Improved Brutal Strike",
          "Rages": "6",
          "Rage Damage": "+4",
          "Weapon Mastery": "4"
        },
        {
          "Level": "18",
          "Proficiency Bonus": "+6",
          "Class Features": "Indomitable Might",
          "Rages": "6",
          "Rage Damage": "+4",
          "Weapon Mastery": "4"
        },
        {
          "Level": "19",
          "Proficiency Bonus": "+6",
          "Class Features": "Epic Boon",
          "Rages": "6",
          "Rage Damage": "+4",
          "Weapon Mastery": "4"
        },
        {
          "Level": "20",
          "Proficiency Bonus": "+6",
          "Class Features": "Primal Champion",
          "Rages": "6",
          "Rage Damage": "+4",
          "Weapon Mastery": "4"
        }
      ],
      "subclasses": [
        {
          "id": "path-of-the-berserker",
          "name": "Path of the Berserker",
          "source": "SRD 5.2.1",
          "features": [
            {
              "level": 3,
              "name": "Frenzy",
              "source": "SRD 5.2.1",
              "text": "If you use Reckless Attack while your Rage is active, you deal extra damage to the first target you hit on your turn with a Strength-based attack. To determine the extra damage, roll a number of d6s equal to your Rage Damage bonus, and add them together. The damage has the same type as the weapon or Unarmed Strike used for the attack."
            },
            {
              "level": 6,
              "name": "Mindless Rage",
              "source": "SRD 5.2.1",
              "text": "You have Immunity to the Charmed and Frightened conditions while your Rage is active. If you're Charmed or Frightened when you enter your Rage, the condition ends on you."
            },
            {
              "level": 10,
              "name": "Retaliation",
              "source": "SRD 5.2.1",
              "text": "When you take damage from a creature that is within 5 feet of you, you can take a Reaction to make one melee attack against that creature, using a weapon or an Unarmed Strike."
            },
            {
              "level": 14,
              "name": "Intimidating Presence",
              "source": "SRD 5.2.1",
              "text": "As a Bonus Action, you can strike terror into others with your menacing presence and primal power. When you do so, each creature of your choice in a 30-foot Emanation originating from you must make a Wisdom saving throw (DC 8 plus your Strength modifier and Proficiency Bonus). On a failed save, a creature has the Frightened condition for 1 minute. At the end of each of the Frightened creature's turns, the creature repeats the save, ending the effect on itself on a success.\n\nOnce you use this feature, you can't use it again until you finish a Long Rest unless you expend a use of your Rage (no action required) to restore your use of it."
            }
          ],
          "spells": []
        },
        {
          "id": "path-of-the-wild-heart",
          "name": "Path of the Wild Heart",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Animal Speaker",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Rage of the Wilds",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 6,
              "name": "Aspect of the Wilds",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 10,
              "name": "Nature Speaker",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 14,
              "name": "Power of the Wilds",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "path-of-the-world-tree",
          "name": "Path of the World Tree",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Vitality of the Tree",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 6,
              "name": "Branches of the Tree",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 10,
              "name": "Battering Roots",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 14,
              "name": "Travel along the Tree",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "path-of-the-zealot",
          "name": "Path of the Zealot",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Divine Fury",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Warrior of the Gods",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 6,
              "name": "Fanatical Focus",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 10,
              "name": "Zealous Presence",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 14,
              "name": "Rage of the Gods",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "path-of-the-glacier",
          "name": "Path of the Glacier",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Permafrost",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Frostbite",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 6,
              "name": "Cold Fortress",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 10,
              "name": "Deep Sleep",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 14,
              "name": "Avalanche Stomp",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "path-of-the-spell-scorned",
          "name": "Path of the Spell Scorned",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Instinctual Divination",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Spell Hammer",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Spell Shield",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 6,
              "name": "Sunder the Weave",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 10,
              "name": "Bolstering Howl",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 14,
              "name": "Dimensional Duel",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        }
      ],
      "spells": [],
      "features": [
        {
          "level": 1,
          "name": "Rage",
          "source": "SRD 5.2.1",
          "text": "You can imbue yourself with a primal power called Rage, a force that grants you extraordinary might and resilience. You can enter it as a Bonus Action if you aren't wearing Heavy armor.\n\nYou can enter your Rage the number of times shown for your Barbarian level in the Rages column of the Barbarian Features table. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.\n\nWhile active, your Rage follows the rules below.\n\nDamage Resistance. You have Resistance to Bludgeoning, Piercing, and Slashing damage.\n\nRage Damage. When you make an attack using Strength—with either a weapon or an Unarmed Strike—and deal damage to the target, you gain a bonus to the damage that increases as you gain levels as a Barbarian, as shown in the Rage Damage column of the Barbarian Features table.\n\nStrength Advantage. You have Advantage on Strength checks and Strength saving throws.\n\nNo Concentration or Spells. You can't maintain Concentration, and you can't cast spells.\n\nDuration. The Rage lasts until the end of your next turn, and it ends early if you don Heavy armor or have the Incapacitated condition. If your Rage is still active on your next turn, you can extend the Rage for another round by doing one of the following:\n\nMake an attack roll against an enemy. Force an enemy to make a saving throw. Take a Bonus Action to extend your Rage.\n\nEach time the Rage is extended, it lasts until the end of your next turn. You can maintain a Rage for up to 10 minutes."
        },
        {
          "level": 1,
          "name": "Unarmored Defense",
          "source": "SRD 5.2.1",
          "text": "While you aren't wearing any armor, your base Armor Class equals 10 plus your Dexterity and Constitution modifiers. You can use a Shield and still gain this benefit."
        },
        {
          "level": 1,
          "name": "Weapon Mastery",
          "source": "SRD 5.2.1",
          "text": "Your training with weapons allows you to use the mastery properties of two kinds of Simple or Martial Melee weapons of your choice, such as Greataxes and Handaxes. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.\n\nWhen you reach certain Barbarian levels, you gain the ability to use the mastery properties of more kinds of weapons, as shown in the Weapon Mastery column of the Barbarian Features table."
        },
        {
          "level": 2,
          "name": "Danger Sense",
          "source": "SRD 5.2.1",
          "text": "You gain an uncanny sense of when things aren't as they should be, giving you an edge when you dodge perils. You have Advantage on Dexterity saving throws unless you have the Incapacitated condition."
        },
        {
          "level": 2,
          "name": "Reckless Attack",
          "source": "SRD 5.2.1",
          "text": "You can throw aside all concern for defense to attack with increased ferocity. When you make your first attack roll on your turn, you can decide to attack recklessly. Doing so gives you Advantage on attack rolls using Strength until the start of your next turn, but attack rolls against you have Advantage during that time."
        },
        {
          "level": 3,
          "name": "Barbarian Subclass",
          "source": "SRD 5.2.1",
          "text": "You gain a Barbarian subclass of your choice. The Path of the Berserker subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Barbarian levels. For the rest of your career, you gain each of your subclass's features that are of your Barbarian level or lower."
        },
        {
          "level": 3,
          "name": "Primal Knowledge",
          "source": "SRD 5.2.1",
          "text": "You gain proficiency in another skill of your choice from the skill list available to Barbarians at level 1.\n\nIn addition, while your Rage is active, you can channel primal power when you attempt certain tasks; whenever you make an ability check using one of the following skills, you can make it as a Strength check even if it normally uses a different ability: Acrobatics, Intimidation, Perception, Stealth, or Survival. When you use this ability, your Strength represents primal power coursing through you, honing your agility, bearing, and senses."
        },
        {
          "level": 4,
          "name": "Ability Score Improvement",
          "source": "SRD 5.2.1",
          "text": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You gain this feature again at Barbarian levels 8, 12, and 16."
        },
        {
          "level": 5,
          "name": "Extra Attack",
          "source": "SRD 5.2.1",
          "text": "You can attack twice instead of once whenever you take the Attack action on your turn."
        },
        {
          "level": 5,
          "name": "Fast Movement",
          "source": "SRD 5.2.1",
          "text": "Your speed increases by 10 feet while you aren't wearing Heavy armor."
        },
        {
          "level": 7,
          "name": "Feral Instinct",
          "source": "SRD 5.2.1",
          "text": "Your instincts are so honed that you have Advantage on Initiative rolls."
        },
        {
          "level": 7,
          "name": "Instinctive Pounce",
          "source": "SRD 5.2.1",
          "text": "As part of the Bonus Action you take to enter your Rage, you can move up to half your Speed."
        },
        {
          "level": 9,
          "name": "Brutal Strike",
          "source": "SRD 5.2.1",
          "text": "If you use Reckless Attack, you can forgo any Advantage on one Strength-based attack roll of your choice on your turn. The chosen attack roll mustn't have Disadvantage. If the chosen attack roll hits, the target takes an extra 1d10 damage of the same type dealt by the weapon or Unarmed Strike, and you can cause one Brutal Strike effect of your choice. You have the following effect options.\n\nForceful Blow. The target is pushed 15 feet straight away from you. You can then move up to half your Speed straight toward the target without provoking Opportunity Attacks. Hamstring Blow. The target's Speed is reduced by 15 feet until the start of your next turn. A target can be affected by only one Hamstring Blow at a time—the most recent one."
        },
        {
          "level": 11,
          "name": "Relentless Rage",
          "source": "SRD 5.2.1",
          "text": "Your Rage can keep you fighting despite grievous wounds. If you drop to 0 Hit Points while your Rage is active and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, your Hit Points instead change to a number equal to twice your Barbarian level.\n\nEach time you use this feature after the first, the DC increases by 5. When you finish a Short or Long Rest, the DC resets to 10."
        },
        {
          "level": 13,
          "name": "Improved Brutal Strike",
          "source": "SRD 5.2.1",
          "text": "You have honed new ways to attack furiously. The following effects are now among your Brutal Strike options.\n\nStaggering Blow. The target has Disadvantage on the next saving throw it makes, and it can't make Opportunity Attacks until the start of your next turn.\n\nSundering Blow. Before the start of your next turn, the next attack roll made by another creature against the target gains a +5 bonus to the roll. An attack roll can gain only one Sundering Blow bonus."
        },
        {
          "level": 15,
          "name": "Persistent Rage",
          "source": "SRD 5.2.1",
          "text": "When you roll Initiative, you can regain all expended uses of Rage. After you regain uses of Rage in this way, you can't do so again until you finish a Long Rest.\n\nIn addition, your Rage is so fierce that it now lasts for 10 minutes without you needing to do anything to extend it from round to round. Your Rage ends early if you have the Unconscious condition (not just the Incapacitated condition) or don Heavy armor."
        },
        {
          "level": 17,
          "name": "Improved Brutal Strike",
          "source": "SRD 5.2.1",
          "text": "The extra damage of your Brutal Strike increases to 2d10. In addition, you can use two different Brutal Strike effects whenever you use your Brutal Strike feature."
        },
        {
          "level": 18,
          "name": "Indomitable Might",
          "source": "SRD 5.2.1",
          "text": "If your total for a Strength check or Strength saving throw is less than your Strength score, you can use that score in place of the total."
        },
        {
          "level": 19,
          "name": "Epic Boon",
          "source": "SRD 5.2.1",
          "text": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Irresistible Offense is recommended."
        },
        {
          "level": 20,
          "name": "Primal Champion",
          "source": "SRD 5.2.1",
          "text": "You embody primal power. Your Strength and Constitution scores increase by 4, to a maximum of 25."
        }
      ],
      "options": []
    },
    "bard": {
      "name": "Bard",
      "levels": [
        {
          "1": "2",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "1",
          "Proficiency Bonus": "+2",
          "Class Features": "Bardic Inspiration, Spellcasting",
          "Bardic Die": "D6",
          "Cantrips": "2",
          "Prepared Spells": "4"
        },
        {
          "1": "3",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "2",
          "Proficiency Bonus": "+2",
          "Class Features": "Expertise, Jack of All Trades",
          "Bardic Die": "D6",
          "Cantrips": "2",
          "Prepared Spells": "5"
        },
        {
          "1": "4",
          "2": "2",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "3",
          "Proficiency Bonus": "+2",
          "Class Features": "Bard Subclass",
          "Bardic Die": "D6",
          "Cantrips": "2",
          "Prepared Spells": "6"
        },
        {
          "1": "4",
          "2": "3",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "4",
          "Proficiency Bonus": "+2",
          "Class Features": "Ability Score Improvement",
          "Bardic Die": "D6",
          "Cantrips": "3",
          "Prepared Spells": "7"
        },
        {
          "1": "4",
          "2": "3",
          "3": "2",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "5",
          "Proficiency Bonus": "+3",
          "Class Features": "Font of Inspiration",
          "Bardic Die": "D8",
          "Cantrips": "3",
          "Prepared Spells": "9"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "6",
          "Proficiency Bonus": "+3",
          "Class Features": "Subclass feature",
          "Bardic Die": "D8",
          "Cantrips": "3",
          "Prepared Spells": "10"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "1",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "7",
          "Proficiency Bonus": "+3",
          "Class Features": "Countercharm",
          "Bardic Die": "D8",
          "Cantrips": "3",
          "Prepared Spells": "11"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "2",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "8",
          "Proficiency Bonus": "+3",
          "Class Features": "Ability Score Improvement",
          "Bardic Die": "D8",
          "Cantrips": "3",
          "Prepared Spells": "12"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "1",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "9",
          "Proficiency Bonus": "+4",
          "Class Features": "Expertise",
          "Bardic Die": "D8",
          "Cantrips": "3",
          "Prepared Spells": "14"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "10",
          "Proficiency Bonus": "+4",
          "Class Features": "Magical Secrets",
          "Bardic Die": "D10",
          "Cantrips": "4",
          "Prepared Spells": "15"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "11",
          "Proficiency Bonus": "+4",
          "Class Features": "—",
          "Bardic Die": "D10",
          "Cantrips": "4",
          "Prepared Spells": "16"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "12",
          "Proficiency Bonus": "+4",
          "Class Features": "Ability Score Improvement",
          "Bardic Die": "D10",
          "Cantrips": "4",
          "Prepared Spells": "16"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "—",
          "9": "—",
          "Level": "13",
          "Proficiency Bonus": "+5",
          "Class Features": "—",
          "Bardic Die": "D10",
          "Cantrips": "4",
          "Prepared Spells": "17"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "—",
          "9": "—",
          "Level": "14",
          "Proficiency Bonus": "+5",
          "Class Features": "Subclass feature",
          "Bardic Die": "D10",
          "Cantrips": "4",
          "Prepared Spells": "17"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "—",
          "Level": "15",
          "Proficiency Bonus": "+5",
          "Class Features": "—",
          "Bardic Die": "D12",
          "Cantrips": "4",
          "Prepared Spells": "18"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "—",
          "Level": "16",
          "Proficiency Bonus": "+5",
          "Class Features": "Ability Score Improvement",
          "Bardic Die": "D12",
          "Cantrips": "4",
          "Prepared Spells": "18"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "17",
          "Proficiency Bonus": "+6",
          "Class Features": "—",
          "Bardic Die": "D12",
          "Cantrips": "4",
          "Prepared Spells": "19"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "18",
          "Proficiency Bonus": "+6",
          "Class Features": "Superior Inspiration",
          "Bardic Die": "D12",
          "Cantrips": "4",
          "Prepared Spells": "20"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "2",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "19",
          "Proficiency Bonus": "+6",
          "Class Features": "Epic Boon",
          "Bardic Die": "D12",
          "Cantrips": "4",
          "Prepared Spells": "21"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "2",
          "7": "2",
          "8": "1",
          "9": "1",
          "Level": "20",
          "Proficiency Bonus": "+6",
          "Class Features": "Words of Creation",
          "Bardic Die": "D12",
          "Cantrips": "4",
          "Prepared Spells": "22"
        }
      ],
      "subclasses": [
        {
          "id": "college-of-lore",
          "name": "College of Lore",
          "source": "SRD 5.2.1",
          "features": [
            {
              "level": 3,
              "name": "Bonus Proficiencies",
              "source": "SRD 5.2.1",
              "text": "You gain proficiency with three skills of your choice."
            },
            {
              "level": 3,
              "name": "Cutting Words",
              "source": "SRD 5.2.1",
              "text": "You learn to use your wit to supernaturally distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of yourself makes a damage roll or succeeds on an ability check or attack roll, you can take a Reaction to expend one use of your Bardic Inspiration; roll your Bardic Inspiration die, and subtract the number rolled from the creature's roll, reducing the damage or potentially turning the success into a failure."
            },
            {
              "level": 6,
              "name": "Magical Discoveries",
              "source": "SRD 5.2.1",
              "text": "You learn two spells of your choice. These spells can come from the Cleric, Druid, or Wizard spell list or any combination thereof (see a class's section for its spell list). A spell you choose must be a cantrip or a spell for which you have spell slots, as shown in the Bard Features table.\n\nYou always have the chosen spells prepared, and whenever you gain a Bard level, you can replace one of the spells with another spell that meets these requirements."
            },
            {
              "level": 14,
              "name": "Peerless Skill",
              "source": "SRD 5.2.1",
              "text": "When you make an ability check or attack roll and fail, you can expend one use of Bardic Inspiration; roll the Bardic Inspiration die, and add the number rolled to the d20, potentially turning a failure into a success. On a failure, the Bardic Inspiration isn't expended."
            }
          ],
          "spells": []
        }
      ],
      "spells": [
        {
          "name": "Dancing Lights",
          "level": 0,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Light",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Mage Hand",
          "level": 0,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Mending",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Message",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Minor Illusion",
          "level": 0,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Prestidigitation",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Starry Wisp",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "True Strike",
          "level": 0,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Vicious Mockery",
          "level": 0,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Animal Friendship",
          "level": 1,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Bane",
          "level": 1,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Charm Person",
          "level": 1,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Color Spray",
          "level": 1,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Command",
          "level": 1,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Comprehend Languages",
          "level": 1,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Cure Wounds",
          "level": 1,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Detect Magic",
          "level": 1,
          "school": "Divination",
          "special": "C, R"
        },
        {
          "name": "Disguise Self",
          "level": 1,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Dissonant Whispers",
          "level": 1,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Faerie Fire",
          "level": 1,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Feather Fall",
          "level": 1,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Healing Word",
          "level": 1,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Heroism",
          "level": 1,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Hideous Laughter",
          "level": 1,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Identify",
          "level": 1,
          "school": "Divination",
          "special": "R, M"
        },
        {
          "name": "Illusory Script",
          "level": 1,
          "school": "Illusion",
          "special": "R, M"
        },
        {
          "name": "Longstrider",
          "level": 1,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Silent Image",
          "level": 1,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Sleep",
          "level": 1,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Speak with Animals",
          "level": 1,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Thunderwave",
          "level": 1,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Unseen Servant",
          "level": 1,
          "school": "Conjuration",
          "special": "R"
        },
        {
          "name": "Aid",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Animal Messenger",
          "level": 2,
          "school": "Enchantment",
          "special": "R"
        },
        {
          "name": "Blindness/Deafness",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Calm Emotions",
          "level": 2,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Detect Thoughts",
          "level": 2,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Enhance Ability",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Enlarge/Reduce",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Enthrall",
          "level": 2,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Heat Metal",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Hold Person",
          "level": 2,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Invisibility",
          "level": 2,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Knock",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Lesser Restoration",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Locate Animals or Plants",
          "level": 2,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Locate Object",
          "level": 2,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Magic Mouth",
          "level": 2,
          "school": "Illusion",
          "special": "R, M"
        },
        {
          "name": "Mirror Image",
          "level": 2,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "See Invisibility",
          "level": 2,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Shatter",
          "level": 2,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Silence",
          "level": 2,
          "school": "Illusion",
          "special": "C, R"
        },
        {
          "name": "Suggestion",
          "level": 2,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Zone of Truth",
          "level": 2,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Bestow Curse",
          "level": 3,
          "school": "Necromancy",
          "special": "C"
        },
        {
          "name": "Clairvoyance",
          "level": 3,
          "school": "Divination",
          "special": "C, M"
        },
        {
          "name": "Dispel Magic",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Fear",
          "level": 3,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Glyph of Warding",
          "level": 3,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Hypnotic Pattern",
          "level": 3,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Major Image",
          "level": 3,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Mass Healing Word",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Nondetection",
          "level": 3,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Plant Growth",
          "level": 3,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Sending",
          "level": 3,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Slow",
          "level": 3,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Speak with Dead",
          "level": 3,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Speak with Plants",
          "level": 3,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Stinking Cloud",
          "level": 3,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Tiny Hut",
          "level": 3,
          "school": "Evocation",
          "special": "R"
        },
        {
          "name": "Tongues",
          "level": 3,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Charm Monster",
          "level": 4,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Compulsion",
          "level": 4,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Confusion",
          "level": 4,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Dimension Door",
          "level": 4,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Freedom of Movement",
          "level": 4,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Greater Invisibility",
          "level": 4,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Hallucinatory Terrain",
          "level": 4,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Locate Creature",
          "level": 4,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Phantasmal Killer",
          "level": 4,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Polymorph",
          "level": 4,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Animate Objects",
          "level": 5,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Awaken",
          "level": 5,
          "school": "Transmutation",
          "special": "M"
        },
        {
          "name": "Dominate Person",
          "level": 5,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Dream",
          "level": 5,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Geas",
          "level": 5,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Greater Restoration",
          "level": 5,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Hold Monster",
          "level": 5,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Legend Lore",
          "level": 5,
          "school": "Divination",
          "special": "M"
        },
        {
          "name": "Mass Cure Wounds",
          "level": 5,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Mislead",
          "level": 5,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Modify Memory",
          "level": 5,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Planar Binding",
          "level": 5,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Raise Dead",
          "level": 5,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Scrying",
          "level": 5,
          "school": "Divination",
          "special": "C, M"
        },
        {
          "name": "Seeming",
          "level": 5,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Telepathic Bond",
          "level": 5,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Teleportation Circle",
          "level": 5,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Eyebite",
          "level": 6,
          "school": "Necromancy",
          "special": "C"
        },
        {
          "name": "Find the Path",
          "level": 6,
          "school": "Divination",
          "special": "C, M"
        },
        {
          "name": "Guards and Wards",
          "level": 6,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Heroes' Feast",
          "level": 6,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Irresistible Dance",
          "level": 6,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Mass Suggestion",
          "level": 6,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Programmed Illusion",
          "level": 6,
          "school": "Illusion",
          "special": "M"
        },
        {
          "name": "True Seeing",
          "level": 6,
          "school": "Divination",
          "special": "M"
        },
        {
          "name": "Arcane Sword",
          "level": 7,
          "school": "Evocation",
          "special": "C, M"
        },
        {
          "name": "Etherealness",
          "level": 7,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Forcecage",
          "level": 7,
          "school": "Evocation",
          "special": "C, M"
        },
        {
          "name": "Magnificent Mansion",
          "level": 7,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Mirage Arcane",
          "level": 7,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Prismatic Spray",
          "level": 7,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Project Image",
          "level": 7,
          "school": "Illusion",
          "special": "C, M"
        },
        {
          "name": "Regenerate",
          "level": 7,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Resurrection",
          "level": 7,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Symbol",
          "level": 7,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Teleport",
          "level": 7,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Antipathy/Sympathy",
          "level": 8,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Befuddlement",
          "level": 8,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Dominate Monster",
          "level": 8,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Glibness",
          "level": 8,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Mind Blank",
          "level": 8,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Power Word Stun",
          "level": 8,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Foresight",
          "level": 9,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Power Word Heal",
          "level": 9,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Power Word Kill",
          "level": 9,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Prismatic Wall",
          "level": 9,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "True Polymorph",
          "level": 9,
          "school": "Transmutation",
          "special": "C"
        }
      ],
      "features": [
        {
          "level": 1,
          "name": "Bardic Inspiration",
          "source": "SRD 5.2.1",
          "text": "You can supernaturally inspire others through words, music, or dance. This inspiration is represented by your Bardic Inspiration die, which is a d6.\n\nUsing Bardic Inspiration. As a Bonus Action, you can inspire another creature within 60 feet of yourself who can see or hear you. That creature gains one of your Bardic Inspiration dice. A creature can have only one Bardic Inspiration die at a time.\n\nOnce within the next hour when the creature fails a D20 Test, the creature can roll the Bardic Inspiration die and add the number rolled to the d20, potentially turning the failure into a success. A Bardic Inspiration die is expended when it's rolled.\n\nNumber of Uses. You can confer a Bardic Inspiration die a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.\n\nAt Higher Levels. Your Bardic Inspiration die changes when you reach certain Bard levels, as shown in the Bardic Die column of the Bard Features table. The die becomes a d8 at level 5, a d10 at level 10, and a d12 at level 15."
        },
        {
          "level": 1,
          "name": "Spellcasting",
          "source": "SRD 5.2.1",
          "text": "You have learned to cast spells through your bardic arts. See \"Spells\" for the rules on spellcasting. The information below details how you use those rules with Bard spells, which appear in the Bard spell list later in the class's description.\n\nCantrips. You know two cantrips of your choice from the Bard spell list. Dancing Lights and Vicious Mockery are recommended.\n\nWhenever you gain a Bard level, you can replace one of your cantrips with another cantrip of your choice from the Bard spell list.\n\nWhen you reach Bard levels 4 and 10, you learn another cantrip of your choice from the Bard spell list, as shown in the Cantrips column of the Bard Features table.\n\nSpell Slots. The Bard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\nPrepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Bard spell list. Charm Person, Color Spray, Dissonant Whispers, and Healing Word are recommended.\n\nThe number of spells on your list increases as you gain Bard levels, as shown in the Prepared Spells column of the Bard Features table. Whenever that number increases, choose additional spells from the Bard spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Bard, your list of prepared spells can include six spells of levels 1 and 2 in any combination.\n\nIf another Bard feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Bard spells for you.\n\nChanging Your Prepared Spells. Whenever you gain a Bard level, you can replace one spell on your list with another Bard spell for which you have spell slots.\n\nSpellcasting Ability. Charisma is your spellcasting ability for your Bard spells.\n\nSpellcasting Focus. You can use a Musical Instrument as a Spellcasting Focus for your Bard spells."
        },
        {
          "level": 2,
          "name": "Expertise",
          "source": "SRD 5.2.1",
          "text": "You gain Expertise (see \"Rules Glossary\") in two of your skill proficiencies of your choice. Performance and Persuasion are recommended if you have proficiency in them.\n\nAt Bard level 9, you gain Expertise in two more of your skill proficiencies of your choice."
        },
        {
          "level": 2,
          "name": "Jack of All Trades",
          "source": "SRD 5.2.1",
          "text": "You can add half your Proficiency Bonus (round down) to any ability check you make that uses a skill proficiency you lack and that doesn't otherwise use your Proficiency Bonus.\n\nFor example, if you make a Strength (Athletics) check and lack Athletics proficiency, you can add half your Proficiency Bonus to the check."
        },
        {
          "level": 3,
          "name": "Bard Subclass",
          "source": "SRD 5.2.1",
          "text": "You gain a Bard subclass of your choice. The College of Lore subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower."
        },
        {
          "level": 4,
          "name": "Ability Score Improvement",
          "source": "SRD 5.2.1",
          "text": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You gain this feature again at Bard levels 8, 12, and 16."
        },
        {
          "level": 5,
          "name": "Font of Inspiration",
          "source": "SRD 5.2.1",
          "text": "You now regain all your expended uses of Bardic Inspiration when you finish a Short or Long Rest.\n\nIn addition, you can expend a spell slot (no action required) to regain one expended use of Bardic Inspiration."
        },
        {
          "level": 7,
          "name": "Countercharm",
          "source": "SRD 5.2.1",
          "text": "You can use musical notes or words of power to disrupt mind-influencing effects. If you or a creature within 30 feet of you fails a saving throw against an effect that applies the Charmed or Frightened condition, you can take a Reaction to cause the save to be rerolled, and the new roll has Advantage."
        },
        {
          "level": 10,
          "name": "Magical Secrets",
          "source": "SRD 5.2.1",
          "text": "You've learned secrets from various magical traditions. Whenever you reach a Bard level (including this level) and the Prepared Spells number in the Bard Features table increases, you can choose any of your new prepared spells from the Bard, Cleric, Druid, and Wizard spell lists, and the chosen spells count as Bard spells for you (see a class's section for its spell list). In addition, whenever you replace a spell prepared for this class, you can replace it with a spell from those lists."
        },
        {
          "level": 18,
          "name": "Superior Inspiration",
          "source": "SRD 5.2.1",
          "text": "When you roll Initiative, you regain expended uses of Bardic Inspiration until you have two if you have fewer than that."
        },
        {
          "level": 19,
          "name": "Epic Boon",
          "source": "SRD 5.2.1",
          "text": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Spell Recall is recommended."
        },
        {
          "level": 20,
          "name": "Words of Creation",
          "source": "SRD 5.2.1",
          "text": "You have mastered two of the Words of Creation: the words of life and death. You therefore always have the Power Word Heal and Power Word Kill spells prepared. When you cast either spell, you can target a second creature with it if that creature is within 10 feet of the first target."
        }
      ],
      "options": []
    },
    "cleric": {
      "name": "Cleric",
      "levels": [
        {
          "1": "2",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "1",
          "Proficiency Bonus": "+2",
          "Class Features": "Spellcasting, Divine Order",
          "Channel Divinity": "—",
          "Cantrips": "3",
          "Prepared Spells": "4"
        },
        {
          "1": "3",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "2",
          "Proficiency Bonus": "+2",
          "Class Features": "Channel Divinity",
          "Channel Divinity": "2",
          "Cantrips": "3",
          "Prepared Spells": "5"
        },
        {
          "1": "4",
          "2": "2",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "3",
          "Proficiency Bonus": "+2",
          "Class Features": "Cleric Subclass",
          "Channel Divinity": "2",
          "Cantrips": "3",
          "Prepared Spells": "6"
        },
        {
          "1": "4",
          "2": "3",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "4",
          "Proficiency Bonus": "+2",
          "Class Features": "Ability Score Improvement",
          "Channel Divinity": "2",
          "Cantrips": "4",
          "Prepared Spells": "7"
        },
        {
          "1": "4",
          "2": "3",
          "3": "2",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "5",
          "Proficiency Bonus": "+3",
          "Class Features": "Sear Undead",
          "Channel Divinity": "2",
          "Cantrips": "4",
          "Prepared Spells": "9"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "6",
          "Proficiency Bonus": "+3",
          "Class Features": "Subclass feature",
          "Channel Divinity": "3",
          "Cantrips": "4",
          "Prepared Spells": "10"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "1",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "7",
          "Proficiency Bonus": "+3",
          "Class Features": "Blessed Strikes",
          "Channel Divinity": "3",
          "Cantrips": "4",
          "Prepared Spells": "11"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "2",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "8",
          "Proficiency Bonus": "+3",
          "Class Features": "Ability Score Improvement",
          "Channel Divinity": "3",
          "Cantrips": "4",
          "Prepared Spells": "12"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "1",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "9",
          "Proficiency Bonus": "+4",
          "Class Features": "—",
          "Channel Divinity": "3",
          "Cantrips": "4",
          "Prepared Spells": "14"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "10",
          "Proficiency Bonus": "+4",
          "Class Features": "Divine Intervention",
          "Channel Divinity": "3",
          "Cantrips": "5",
          "Prepared Spells": "15"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "11",
          "Proficiency Bonus": "+4",
          "Class Features": "—",
          "Channel Divinity": "3",
          "Cantrips": "5",
          "Prepared Spells": "16"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "12",
          "Proficiency Bonus": "+4",
          "Class Features": "Ability Score Improvement",
          "Channel Divinity": "3",
          "Cantrips": "5",
          "Prepared Spells": "16"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "—",
          "9": "—",
          "Level": "13",
          "Proficiency Bonus": "+5",
          "Class Features": "—",
          "Channel Divinity": "3",
          "Cantrips": "5",
          "Prepared Spells": "17"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "—",
          "9": "—",
          "Level": "14",
          "Proficiency Bonus": "+5",
          "Class Features": "Improved Blessed Strikes",
          "Channel Divinity": "3",
          "Cantrips": "5",
          "Prepared Spells": "17"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "—",
          "Level": "15",
          "Proficiency Bonus": "+5",
          "Class Features": "—",
          "Channel Divinity": "3",
          "Cantrips": "5",
          "Prepared Spells": "18"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "—",
          "Level": "16",
          "Proficiency Bonus": "+5",
          "Class Features": "Ability Score Improvement",
          "Channel Divinity": "3",
          "Cantrips": "5",
          "Prepared Spells": "18"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "17",
          "Proficiency Bonus": "+6",
          "Class Features": "Subclass feature",
          "Channel Divinity": "3",
          "Cantrips": "5",
          "Prepared Spells": "19"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "18",
          "Proficiency Bonus": "+6",
          "Class Features": "—",
          "Channel Divinity": "4",
          "Cantrips": "5",
          "Prepared Spells": "20"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "2",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "19",
          "Proficiency Bonus": "+6",
          "Class Features": "Epic Boon",
          "Channel Divinity": "4",
          "Cantrips": "5",
          "Prepared Spells": "21"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "2",
          "7": "2",
          "8": "1",
          "9": "1",
          "Level": "20",
          "Proficiency Bonus": "+6",
          "Class Features": "Greater Divine Intervention",
          "Channel Divinity": "4",
          "Cantrips": "5",
          "Prepared Spells": "22"
        }
      ],
      "subclasses": [
        {
          "id": "life-domain",
          "name": "Life Domain",
          "source": "SRD 5.2.1",
          "features": [
            {
              "level": 3,
              "name": "Disciple of Life",
              "source": "SRD 5.2.1",
              "text": "When a spell you cast with a spell slot restores Hit Points to a creature, that creature regains additional Hit Points on the turn you cast the spell. The additional Hit Points equal 2 plus the spell slot's level."
            },
            {
              "level": 3,
              "name": "Life Domain Spells",
              "source": "SRD 5.2.1",
              "text": "Your connection to this divine domain ensures you always have certain spells ready. When you reach a Cleric level specified in the Life Domain Spells table, you thereafter always have the listed spells prepared.\n\nLife Domain Spells"
            },
            {
              "level": 3,
              "name": "Preserve Life",
              "source": "SRD 5.2.1",
              "text": "As a Magic action, you present your Holy Symbol and expend a use of your Channel Divinity to evoke healing energy that can restore a number of Hit Points equal to five times your Cleric level. Choose Bloodied creatures within 30 feet of yourself (which can include you), and divide those Hit Points among them. This feature can restore a creature to no more than half its Hit Point maximum."
            },
            {
              "level": 6,
              "name": "Blessed Healer",
              "source": "SRD 5.2.1",
              "text": "The healing spells you cast on others heal you as well. Immediately after you cast a spell with a spell slot that restores Hit Points to one or more creatures other than yourself, you regain Hit Points equal to 2 plus the spell slot's level."
            },
            {
              "level": 17,
              "name": "Supreme Healing",
              "source": "SRD 5.2.1",
              "text": "When you would normally roll one or more dice to restore Hit Points to a creature with a spell or Channel Divinity, don't roll those dice for the healing; instead use the highest number possible for each die. For example, instead of restoring 2d6 Hit Points to a creature with a spell, you restore 12."
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Aid",
                "Bless",
                "Cure Wounds",
                "Lesser Restoration"
              ]
            },
            {
              "level": 5,
              "names": [
                "Mass Healing Word",
                "Revivify"
              ]
            },
            {
              "level": 7,
              "names": [
                "Aura of Life",
                "Death Ward"
              ]
            },
            {
              "level": 9,
              "names": [
                "Greater Restoration",
                "Mass Cure Wounds"
              ]
            }
          ]
        }
      ],
      "spells": [
        {
          "name": "Guidance",
          "level": 0,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Light",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Mending",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Resistance",
          "level": 0,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Sacred Flame",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Spare the Dying",
          "level": 0,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Thaumaturgy",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Bane",
          "level": 1,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Bless",
          "level": 1,
          "school": "Enchantment",
          "special": "C, M"
        },
        {
          "name": "Command",
          "level": 1,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Create or Destroy Water",
          "level": 1,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Cure Wounds",
          "level": 1,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Detect Evil and Good",
          "level": 1,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Detect Magic",
          "level": 1,
          "school": "Divination",
          "special": "C, R"
        },
        {
          "name": "Detect Poison and Disease",
          "level": 1,
          "school": "Divination",
          "special": "C, R"
        },
        {
          "name": "Guiding Bolt",
          "level": 1,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Healing Word",
          "level": 1,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Inflict Wounds",
          "level": 1,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Protection from Evil and Good",
          "level": 1,
          "school": "Abjuration",
          "special": "C, M"
        },
        {
          "name": "Purify Food and Drink",
          "level": 1,
          "school": "Transmutation",
          "special": "R"
        },
        {
          "name": "Sanctuary",
          "level": 1,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Shield of Faith",
          "level": 1,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Aid",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Augury",
          "level": 2,
          "school": "Divination",
          "special": "R, M"
        },
        {
          "name": "Blindness/Deafness",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Calm Emotions",
          "level": 2,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Continual Flame",
          "level": 2,
          "school": "Evocation",
          "special": "M"
        },
        {
          "name": "Enhance Ability",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Find Traps",
          "level": 2,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Gentle Repose",
          "level": 2,
          "school": "Necromancy",
          "special": "R, M"
        },
        {
          "name": "Hold Person",
          "level": 2,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Lesser Restoration",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Locate Object",
          "level": 2,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Prayer of Healing",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Protection from Poison",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Silence",
          "level": 2,
          "school": "Illusion",
          "special": "C, R"
        },
        {
          "name": "Spiritual Weapon",
          "level": 2,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Warding Bond",
          "level": 2,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Zone of Truth",
          "level": 2,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Animate Dead",
          "level": 3,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Beacon of Hope",
          "level": 3,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Bestow Curse",
          "level": 3,
          "school": "Necromancy",
          "special": "C"
        },
        {
          "name": "Clairvoyance",
          "level": 3,
          "school": "Divination",
          "special": "C, M"
        },
        {
          "name": "Create Food and Water",
          "level": 3,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Daylight",
          "level": 3,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Dispel Magic",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Glyph of Warding",
          "level": 3,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Magic Circle",
          "level": 3,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Mass Healing Word",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Meld into Stone",
          "level": 3,
          "school": "Transmutation",
          "special": "R"
        },
        {
          "name": "Protection from Energy",
          "level": 3,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Remove Curse",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Revivify",
          "level": 3,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Sending",
          "level": 3,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Speak with Dead",
          "level": 3,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Spirit Guardians",
          "level": 3,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Tongues",
          "level": 3,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Water Walk",
          "level": 3,
          "school": "Transmutation",
          "special": "R"
        },
        {
          "name": "Aura of Life",
          "level": 4,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Banishment",
          "level": 4,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Control Water",
          "level": 4,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Death Ward",
          "level": 4,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Divination",
          "level": 4,
          "school": "Divination",
          "special": "R, M"
        },
        {
          "name": "Freedom of Movement",
          "level": 4,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Guardian of Faith",
          "level": 4,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Locate Creature",
          "level": 4,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Stone Shape",
          "level": 4,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Commune",
          "level": 5,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Contagion",
          "level": 5,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Dispel Evil and Good",
          "level": 5,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Flame Strike",
          "level": 5,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Geas",
          "level": 5,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Greater Restoration",
          "level": 5,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Hallow",
          "level": 5,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Insect Plague",
          "level": 5,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Legend Lore",
          "level": 5,
          "school": "Divination",
          "special": "M"
        },
        {
          "name": "Mass Cure Wounds",
          "level": 5,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Planar Binding",
          "level": 5,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Raise Dead",
          "level": 5,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Scrying",
          "level": 5,
          "school": "Divination",
          "special": "C, M"
        },
        {
          "name": "Blade Barrier",
          "level": 6,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Create Undead",
          "level": 6,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Find the Path",
          "level": 6,
          "school": "Divination",
          "special": "C, M"
        },
        {
          "name": "Forbiddance",
          "level": 6,
          "school": "Abjuration",
          "special": "R, M"
        },
        {
          "name": "Harm",
          "level": 6,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Heal",
          "level": 6,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Heroes' Feast",
          "level": 6,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Planar Ally",
          "level": 6,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Sunbeam",
          "level": 6,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "True Seeing",
          "level": 6,
          "school": "Divination",
          "special": "M"
        },
        {
          "name": "Word of Recall",
          "level": 6,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Conjure Celestial",
          "level": 7,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Divine Word",
          "level": 7,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Etherealness",
          "level": 7,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Fire Storm",
          "level": 7,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Plane Shift",
          "level": 7,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Regenerate",
          "level": 7,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Resurrection",
          "level": 7,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Symbol",
          "level": 7,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Antimagic Field",
          "level": 8,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Control Weather",
          "level": 8,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Earthquake",
          "level": 8,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Holy Aura",
          "level": 8,
          "school": "Abjuration",
          "special": "C, M"
        },
        {
          "name": "Sunburst",
          "level": 8,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Astral Projection",
          "level": 9,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Gate",
          "level": 9,
          "school": "Conjuration",
          "special": "C, M"
        },
        {
          "name": "Mass Heal",
          "level": 9,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Power Word Heal",
          "level": 9,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "True Resurrection",
          "level": 9,
          "school": "Necromancy",
          "special": "M"
        }
      ],
      "features": [
        {
          "level": 1,
          "name": "Spellcasting",
          "source": "SRD 5.2.1",
          "text": "You have learned to cast spells through prayer and meditation. See \"Spells\" for the rules on spellcasting. The information below details how you use those rules with Cleric spells, which appear on the Cleric spell list later in the class's description.\n\nCantrips. You know three cantrips of your choice from the Cleric spell list. Guidance, Sacred Flame, and Thaumaturgy are recommended.\n\nWhenever you gain a Cleric level, you can replace one of your cantrips with another cantrip of your choice from the Cleric spell list.\n\nWhen you reach Cleric levels 4 and 10, you learn another cantrip of your choice from the Cleric spell list, as shown in the Cantrips column of the Cleric Features table.\n\nSpell Slots. The Cleric Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\nPrepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Cleric spell list. Bless, Cure Wounds, Guiding Bolt, and Shield of Faith are recommended.\n\nThe number of spells on your list increases as you gain Cleric levels, as shown in the Prepared Spells column of the Cleric Features table. Whenever that number increases, choose additional spells from the Cleric spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Cleric, your list of prepared spells can include six spells of levels 1 and 2 in any combination.\n\nIf another Cleric feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Cleric spells for you.\n\nChanging Your Prepared Spells. Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Cleric spells for which you have spell slots.\n\nSpellcasting Ability. Wisdom is your spellcasting ability for your Cleric spells.\n\nSpellcasting Focus. You can use a Holy Symbol as a Spellcasting Focus for your Cleric spells."
        },
        {
          "level": 1,
          "name": "Divine Order",
          "source": "SRD 5.2.1",
          "text": "You have dedicated yourself to one of the following sacred roles of your choice.\n\nProtector. Trained for battle, you gain proficiency with Martial weapons and training with Heavy armor.\n\nThaumaturge. You know one extra cantrip from the Cleric spell list. In addition, your mystical connection to the divine gives you a bonus to your Intelligence (Arcana or Religion) checks. The bonus equals your Wisdom modifier (minimum of +1)."
        },
        {
          "level": 2,
          "name": "Channel Divinity",
          "source": "SRD 5.2.1",
          "text": "You can channel divine energy directly from the Outer Planes to fuel magical effects. You start with two such effects: Divine Spark and Turn Undead, each of which is described below. Each time you use this class's Channel Divinity, choose which Channel Divinity effect from this class to create. You gain additional effect options at higher Cleric levels.\n\nYou can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest. You gain additional uses when you reach certain Cleric levels, as shown in the Channel Divinity column of the Cleric Features table.\n\nIf a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class's Spellcasting feature.\n\nDivine Spark. As a Magic action, you point your Holy Symbol at another creature you can see within 30 feet of yourself and focus divine energy at it. Roll 1d8 and add your Wisdom modifier. You either restore Hit Points to the creature equal to that total or force the creature to make a Constitution saving throw. On a failed save, the creature takes Necrotic or Radiant damage (your choice) equal to that total. On a successful save, the creature takes half as much damage (round down).\n\nYou roll an additional d8 when you reach Cleric levels 7 (2d8), 13 (3d8), and 18 (4d8).\n\nTurn Undead. As a Magic action, you present your Holy Symbol and censure Undead creatures. Each Undead of your choice within 30 feet of you must make a Wisdom saving throw. If the creature fails its save, it has the Frightened and Incapacitated conditions for 1 minute. For that duration, it tries to move as far from you as it can on its turns. This effect ends early on the creature if it takes any damage, if you have the Incapacitated condition, or if you die."
        },
        {
          "level": 3,
          "name": "Cleric Subclass",
          "source": "SRD 5.2.1",
          "text": "You gain a Cleric subclass of your choice. The Life Domain subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Cleric levels. For the rest of your career, you gain each of your subclass's features that are of your Cleric level or lower."
        },
        {
          "level": 4,
          "name": "Ability Score Improvement",
          "source": "SRD 5.2.1",
          "text": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You gain this feature again at Cleric levels 8, 12, and 16."
        },
        {
          "level": 5,
          "name": "Sear Undead",
          "source": "SRD 5.2.1",
          "text": "Whenever you use Turn Undead, you can roll a number of d8s equal to your Wisdom modifier (minimum of 1d8) and add the rolls together. Each Undead that fails its saving throw against that use of Turn Undead takes Radiant damage equal to the roll's total. This damage doesn't end the turn effect."
        },
        {
          "level": 7,
          "name": "Blessed Strikes",
          "source": "SRD 5.2.1",
          "text": "Divine power infuses you in battle. You gain one of the following options of your choice (if you get either option from a Cleric subclass in an older book, use only the option you choose for this feature).\n\nDivine Strike. Once on each of your turns when you hit a creature with an attack roll using a weapon, you can cause the target to take an extra 1d8 Necrotic or Radiant damage (your choice).\n\nPotent Spellcasting. Add your Wisdom modifier to the damage you deal with any Cleric cantrip."
        },
        {
          "level": 10,
          "name": "Divine Intervention",
          "source": "SRD 5.2.1",
          "text": "You can call on your deity or pantheon to intervene on your behalf. As a Magic action, choose any Cleric spell of level 5 or lower that doesn't require a Reaction to cast. As part of the same action, you cast that spell without expending a spell slot or needing Material components. You can't use this feature again until you finish a Long Rest."
        },
        {
          "level": 14,
          "name": "Improved Blessed Strikes",
          "source": "SRD 5.2.1",
          "text": "The option you chose for Blessed Strikes grows more powerful.\n\nDivine Strike. The extra damage of your Divine Strike increases to 2d8.\n\nPotent Spellcasting. When you cast a Cleric cantrip and deal damage to a creature with it, you can give vitality to yourself or another creature within 60 feet of yourself, granting a number of Temporary Hit Points equal to twice your Wisdom modifier."
        },
        {
          "level": 19,
          "name": "Epic Boon",
          "source": "SRD 5.2.1",
          "text": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Fate is recommended."
        },
        {
          "level": 20,
          "name": "Greater Divine Intervention",
          "source": "SRD 5.2.1",
          "text": "You can call on even more powerful divine intervention. When you use your Divine Intervention feature, you can choose Wish when you select a spell. If you do so, you can't use Divine Intervention again until you finish 2d4 Long Rests."
        }
      ],
      "options": []
    },
    "druid": {
      "name": "Druid",
      "levels": [
        {
          "1": "2",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "1",
          "Proficiency Bonus": "+2",
          "Class Features": "Spellcasting, Druidic, Primal Order",
          "Wild Shape": "—",
          "Cantrips": "2",
          "Prepared Spells": "4"
        },
        {
          "1": "3",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "2",
          "Proficiency Bonus": "+2",
          "Class Features": "Wild Shape, Wild Companion",
          "Wild Shape": "2",
          "Cantrips": "2",
          "Prepared Spells": "5"
        },
        {
          "1": "4",
          "2": "2",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "3",
          "Proficiency Bonus": "+2",
          "Class Features": "Druid Subclass",
          "Wild Shape": "2",
          "Cantrips": "2",
          "Prepared Spells": "6"
        },
        {
          "1": "4",
          "2": "3",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "4",
          "Proficiency Bonus": "+2",
          "Class Features": "Ability Score Improvement",
          "Wild Shape": "2",
          "Cantrips": "3",
          "Prepared Spells": "7"
        },
        {
          "1": "4",
          "2": "3",
          "3": "2",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "5",
          "Proficiency Bonus": "+3",
          "Class Features": "Wild Resurgence",
          "Wild Shape": "2",
          "Cantrips": "3",
          "Prepared Spells": "9"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "6",
          "Proficiency Bonus": "+3",
          "Class Features": "Subclass feature",
          "Wild Shape": "3",
          "Cantrips": "3",
          "Prepared Spells": "10"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "1",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "7",
          "Proficiency Bonus": "+3",
          "Class Features": "Elemental Fury",
          "Wild Shape": "3",
          "Cantrips": "3",
          "Prepared Spells": "11"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "2",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "8",
          "Proficiency Bonus": "+3",
          "Class Features": "Ability Score Improvement",
          "Wild Shape": "3",
          "Cantrips": "3",
          "Prepared Spells": "12"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "1",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "9",
          "Proficiency Bonus": "+4",
          "Class Features": "—",
          "Wild Shape": "3",
          "Cantrips": "3",
          "Prepared Spells": "14"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "10",
          "Proficiency Bonus": "+4",
          "Class Features": "Subclass feature",
          "Wild Shape": "3",
          "Cantrips": "4",
          "Prepared Spells": "15"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "11",
          "Proficiency Bonus": "+4",
          "Class Features": "—",
          "Wild Shape": "3",
          "Cantrips": "4",
          "Prepared Spells": "16"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "12",
          "Proficiency Bonus": "+4",
          "Class Features": "Ability Score Improvement",
          "Wild Shape": "3",
          "Cantrips": "4",
          "Prepared Spells": "16"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "—",
          "9": "—",
          "Level": "13",
          "Proficiency Bonus": "+5",
          "Class Features": "—",
          "Wild Shape": "3",
          "Cantrips": "4",
          "Prepared Spells": "17"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "—",
          "9": "—",
          "Level": "14",
          "Proficiency Bonus": "+5",
          "Class Features": "Subclass feature",
          "Wild Shape": "3",
          "Cantrips": "4",
          "Prepared Spells": "17"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "—",
          "Level": "15",
          "Proficiency Bonus": "+5",
          "Class Features": "Improved Elemental Fury",
          "Wild Shape": "3",
          "Cantrips": "4",
          "Prepared Spells": "18"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "—",
          "Level": "16",
          "Proficiency Bonus": "+5",
          "Class Features": "Ability Score Improvement",
          "Wild Shape": "3",
          "Cantrips": "4",
          "Prepared Spells": "18"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "17",
          "Proficiency Bonus": "+6",
          "Class Features": "—",
          "Wild Shape": "4",
          "Cantrips": "4",
          "Prepared Spells": "19"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "18",
          "Proficiency Bonus": "+6",
          "Class Features": "Beast Spells",
          "Wild Shape": "4",
          "Cantrips": "4",
          "Prepared Spells": "20"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "2",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "19",
          "Proficiency Bonus": "+6",
          "Class Features": "Epic Boon",
          "Wild Shape": "4",
          "Cantrips": "4",
          "Prepared Spells": "21"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "2",
          "7": "2",
          "8": "1",
          "9": "1",
          "Level": "20",
          "Proficiency Bonus": "+6",
          "Class Features": "Archdruid",
          "Wild Shape": "4",
          "Cantrips": "4",
          "Prepared Spells": "22"
        }
      ],
      "subclasses": [
        {
          "id": "circle-of-the-land",
          "name": "Circle of the Land",
          "source": "SRD 5.2.1",
          "features": [
            {
              "level": 3,
              "name": "Circle of the Land Spells",
              "source": "SRD 5.2.1",
              "text": "Whenever you finish a Long Rest, choose one type of land: arid, polar, temperate, or tropical. Consult the table below that corresponds to the chosen type; you have the spells listed for your Druid level and lower prepared.\n\nArid Land\n\nPolar Land\n\nTemperate Land\n\nTropical Land"
            },
            {
              "level": 3,
              "name": "Land's Aid",
              "source": "SRD 5.2.1",
              "text": "As a Magic action, you can expend a use of your Wild Shape and choose a point within 60 feet of yourself. Vitality-giving flowers and life-draining thorns appear for a moment in a 10-foot-radius Sphere centered on that point. Each creature of your choice in the Sphere must make a Constitution saving throw against your spell save DC, taking 2d6 Necrotic damage on a failed save or half as much damage on a successful one. One creature of your choice in that area regains 2d6 Hit Points.\n\nThe damage and healing increase by 1d6 when you reach Druid levels 10 (3d6) and 14 (4d6)."
            },
            {
              "level": 6,
              "name": "Natural Recovery",
              "source": "SRD 5.2.1",
              "text": "You can cast one of the level 1+ spells that you have prepared from your Circle Spells feature without expending a spell slot, and you must finish a Long Rest before you do so again.\n\nIn addition, when you finish a Short Rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your Druid level (round up), and none of them can be level 6+. For example, if you're a level 6 Druid, you can recover up to three levels' worth of spell slots. You can recover a level 3 spell slot, a level 2 and a level 1 spell slot, or three level 1 spell slots. Once you recover spell slots with this feature, you can't do so again until you finish a Long Rest."
            },
            {
              "level": 10,
              "name": "Nature's Ward",
              "source": "SRD 5.2.1",
              "text": "You are immune to the Poisoned condition, and you have Resistance to a damage type associated with your current land choice in the Circle Spells feature, as shown in the Nature's Ward table.\n\nNature's Ward"
            },
            {
              "level": 14,
              "name": "Nature's Sanctuary",
              "source": "SRD 5.2.1",
              "text": "As a Magic action, you can expend a use of your Wild Shape and cause spectral trees and vines to appear in a 15-foot Cube on the ground within 120 feet of yourself. They last there for 1 minute or until you have the Incapacitated condition or die. You and your allies have Half Cover while in that area, and your allies gain the current Resistance of your Nature's Ward while there.\n\nAs a Bonus Action, you can move the Cube up to 60 feet to ground within 120 feet of yourself."
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Blur",
                "Burning Hands",
                "Fire Bolt"
              ]
            },
            {
              "level": 5,
              "names": [
                "Fireball"
              ]
            },
            {
              "level": 7,
              "names": [
                "Blight"
              ]
            },
            {
              "level": 9,
              "names": [
                "Wall of Stone"
              ]
            },
            {
              "level": 3,
              "names": [
                "Fog Cloud",
                "Hold Person",
                "Ray of Frost"
              ]
            },
            {
              "level": 5,
              "names": [
                "Sleet Storm"
              ]
            },
            {
              "level": 7,
              "names": [
                "Ice Storm"
              ]
            },
            {
              "level": 9,
              "names": [
                "Cone of Cold"
              ]
            },
            {
              "level": 3,
              "names": [
                "Misty Step",
                "Shocking Grasp",
                "Sleep"
              ]
            },
            {
              "level": 5,
              "names": [
                "Lightning Bolt"
              ]
            },
            {
              "level": 7,
              "names": [
                "Freedom of Movement"
              ]
            },
            {
              "level": 9,
              "names": [
                "Tree Stride"
              ]
            },
            {
              "level": 3,
              "names": [
                "Acid Splash",
                "Ray of Sickness",
                "Web"
              ]
            },
            {
              "level": 5,
              "names": [
                "Stinking Cloud"
              ]
            },
            {
              "level": 7,
              "names": [
                "Polymorph"
              ]
            },
            {
              "level": 9,
              "names": [
                "Insect Plague"
              ]
            }
          ]
        }
      ],
      "spells": [
        {
          "name": "Druidcraft",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Elementalism",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Guidance",
          "level": 0,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Mending",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Message",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Poison Spray",
          "level": 0,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Produce Flame",
          "level": 0,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Resistance",
          "level": 0,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Shillelagh",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Spare the Dying",
          "level": 0,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Starry Wisp",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Animal Friendship",
          "level": 1,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Charm Person",
          "level": 1,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Create or Destroy Water",
          "level": 1,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Cure Wounds",
          "level": 1,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Detect Magic",
          "level": 1,
          "school": "Divination",
          "special": "C, R"
        },
        {
          "name": "Detect Poison and Disease",
          "level": 1,
          "school": "Divination",
          "special": "C, R"
        },
        {
          "name": "Entangle",
          "level": 1,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Faerie Fire",
          "level": 1,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Fog Cloud",
          "level": 1,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Goodberry",
          "level": 1,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Healing Word",
          "level": 1,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Ice Knife",
          "level": 1,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Jump",
          "level": 1,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Longstrider",
          "level": 1,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Protection from Evil and Good",
          "level": 1,
          "school": "Abjuration",
          "special": "C, M"
        },
        {
          "name": "Purify Food and Drink",
          "level": 1,
          "school": "Transmutation",
          "special": "R"
        },
        {
          "name": "Speak with Animals",
          "level": 1,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Thunderwave",
          "level": 1,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Aid",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Animal Messenger",
          "level": 2,
          "school": "Enchantment",
          "special": "R"
        },
        {
          "name": "Augury",
          "level": 2,
          "school": "Divination",
          "special": "R, M"
        },
        {
          "name": "Barkskin",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Continual Flame",
          "level": 2,
          "school": "Evocation",
          "special": "M"
        },
        {
          "name": "Darkvision",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Enhance Ability",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Enlarge/Reduce",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Find Traps",
          "level": 2,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Flame Blade",
          "level": 2,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Flaming Sphere",
          "level": 2,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Gust of Wind",
          "level": 2,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Heat Metal",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Hold Person",
          "level": 2,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Lesser Restoration",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Locate Animals or Plants",
          "level": 2,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Locate Object",
          "level": 2,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Moonbeam",
          "level": 2,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Pass without Trace",
          "level": 2,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Protection from Poison",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Spike Growth",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Call Lightning",
          "level": 3,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Conjure Animals",
          "level": 3,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Daylight",
          "level": 3,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Dispel Magic",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Meld into Stone",
          "level": 3,
          "school": "Transmutation",
          "special": "R"
        },
        {
          "name": "Plant Growth",
          "level": 3,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Protection from Energy",
          "level": 3,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Revivify",
          "level": 3,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Sleet Storm",
          "level": 3,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Speak with Plants",
          "level": 3,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Water Breathing",
          "level": 3,
          "school": "Transmutation",
          "special": "R"
        },
        {
          "name": "Water Walk",
          "level": 3,
          "school": "Transmutation",
          "special": "R"
        },
        {
          "name": "Wind Wall",
          "level": 3,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Blight",
          "level": 4,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Charm Monster",
          "level": 4,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Confusion",
          "level": 4,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Conjure Minor Elementals",
          "level": 4,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Conjure Woodland Beings",
          "level": 4,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Control Water",
          "level": 4,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Divination",
          "level": 4,
          "school": "Divination",
          "special": "R, M"
        },
        {
          "name": "Dominate Beast",
          "level": 4,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Fire Shield",
          "level": 4,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Freedom of Movement",
          "level": 4,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Giant Insect",
          "level": 4,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Hallucinatory Terrain",
          "level": 4,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Ice Storm",
          "level": 4,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Locate Creature",
          "level": 4,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Polymorph",
          "level": 4,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Stone Shape",
          "level": 4,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Stoneskin",
          "level": 4,
          "school": "Transmutation",
          "special": "C, M"
        },
        {
          "name": "Wall of Fire",
          "level": 4,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Antilife Shell",
          "level": 5,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Awaken",
          "level": 5,
          "school": "Transmutation",
          "special": "M"
        },
        {
          "name": "Commune with Nature",
          "level": 5,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Cone of Cold",
          "level": 5,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Conjure Elemental",
          "level": 5,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Contagion",
          "level": 5,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Geas",
          "level": 5,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Greater Restoration",
          "level": 5,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Insect Plague",
          "level": 5,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Mass Cure Wounds",
          "level": 5,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Planar Binding",
          "level": 5,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Reincarnate",
          "level": 5,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Scrying",
          "level": 5,
          "school": "Divination",
          "special": "C, M"
        },
        {
          "name": "Tree Stride",
          "level": 5,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Wall of Stone",
          "level": 5,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Conjure Fey",
          "level": 6,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Find the Path",
          "level": 6,
          "school": "Divination",
          "special": "C, M"
        },
        {
          "name": "Flesh to Stone",
          "level": 6,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Heal",
          "level": 6,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Heroes' Feast",
          "level": 6,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Move Earth",
          "level": 6,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Sunbeam",
          "level": 6,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Transport via Plants",
          "level": 6,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Wall of Thorns",
          "level": 6,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Wind Walk",
          "level": 6,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Fire Storm",
          "level": 7,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Mirage Arcane",
          "level": 7,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Plane Shift",
          "level": 7,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Regenerate",
          "level": 7,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Reverse Gravity",
          "level": 7,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Symbol",
          "level": 7,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Animal Shapes",
          "level": 8,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Antipathy/Sympathy",
          "level": 8,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Befuddlement",
          "level": 8,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Control Weather",
          "level": 8,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Earthquake",
          "level": 8,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Incendiary Cloud",
          "level": 8,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Sunburst",
          "level": 8,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Tsunami",
          "level": 8,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Foresight",
          "level": 9,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Shapechange",
          "level": 9,
          "school": "Transmutation",
          "special": "C, M"
        },
        {
          "name": "Storm of Vengeance",
          "level": 9,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "True Resurrection",
          "level": 9,
          "school": "Necromancy",
          "special": "M"
        }
      ],
      "features": [
        {
          "level": 1,
          "name": "Spellcasting",
          "source": "SRD 5.2.1",
          "text": "You have learned to cast spells through studying the mystical forces of nature. See \"Spells\" for the rules on spellcasting. The information below details how you use those rules with Druid spells, which appear on the Druid spell list later in the class's description.\n\nCantrips. You know two cantrips of your choice from the Druid spell list. Druidcraft and Produce Flame are recommended.\n\nWhenever you gain a Druid level, you can replace one of your cantrips with another cantrip of your choice from the Druid spell list.\n\nWhen you reach Druid levels 4 and 10, you learn another cantrip of your choice from the Druid spell list, as shown in the Cantrips column of the Druid Features table.\n\nSpell Slots. The Druid Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\nPrepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Druid spell list. Animal Friendship, Cure Wounds, Faerie Fire, and Thunderwave are recommended.\n\nThe number of spells on your list increases as you gain Druid levels, as shown in the Prepared Spells column of the Druid Features table. Whenever that number increases, choose additional spells from the Druid spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Druid, your list of prepared spells can include six spells of levels 1 and 2 in any combination.\n\nIf another Druid feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Druid spells for you.\n\nChanging Your Prepared Spells. Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells with other Druid spells for which you have spell slots.\n\nSpellcasting Ability. Wisdom is your spellcasting ability for your Druid spells.\n\nSpellcasting Focus. You can use a Druidic Focus as a Spellcasting Focus for your Druid spells."
        },
        {
          "level": 1,
          "name": "Druidic",
          "source": "SRD 5.2.1",
          "text": "You know Druidic, the secret language of Druids. While learning this ancient tongue, you also unlocked the magic of communicating with animals; you always have the Speak with Animals spell prepared.\n\nYou can use Druidic to leave hidden messages. You and others who know Druidic automatically spot such a message. Others spot the message's presence with a successful DC 15 Intelligence (Investigation) check but can't decipher it without magic."
        },
        {
          "level": 1,
          "name": "Primal Order",
          "source": "SRD 5.2.1",
          "text": "You have dedicated yourself to one of the following sacred roles of your choice.\n\nMagician. You know one extra cantrip from the Druid spell list. In addition, your mystical connection to nature gives you a bonus to your Intelligence (Arcana or Nature) checks. The bonus equals your Wisdom modifier (minimum bonus of +1).\n\nWarden. Trained for battle, you gain proficiency with Martial weapons and training with Medium armor."
        },
        {
          "level": 2,
          "name": "Wild Shape",
          "source": "SRD 5.2.1",
          "text": "The power of nature allows you to assume the form of an animal. As a Bonus Action, you shape-shift into a Beast form that you have learned for this feature (see \"Known Forms\" below). You stay in that form for a number of hours equal to half your Druid level or until you use Wild Shape again, have the Incapacitated condition, or die. You can also leave the form early as a Bonus Action.\n\nNumber of Uses. You can use Wild Shape twice. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.\n\nYou gain additional uses when you reach certain Druid levels, as shown in the Wild Shape column of the Druid Features table.\n\nKnown Forms. You know four Beast forms for this feature, chosen from among Beast stat blocks that have a maximum Challenge Rating of 1/4 and that lack a Fly Speed (see \"Animals\" in \"Monsters\" for stat block options). The Rat, Riding Horse, Spider, and Wolf are recommended. Whenever you finish a Long Rest, you can replace one of your known forms with another eligible form.\n\nWhen you reach certain Druid levels, your number of known forms and the maximum Challenge Rating for those forms increases, as shown in the Beast Shapes table. In addition, starting at level 8, you can adopt a form that has a Fly Speed.\n\nWhen choosing known forms, you may look in other sources for eligible Beasts if the Game Master permits you to do so.\n\nBeast Shapes\n\nRules While Shape-Shifted. While in a form, you retain your personality, memories, and ability to speak, and the following rules apply:\n\nTemporary Hit Points. When you assume a Wild Shape form, you gain a number of Temporary Hit Points equal to your Druid level.\n\nGame Statistics. Your game statistics are replaced by the Beast's stat block, but you retain your creature type; Hit Points; Hit Point Dice; Intelligence, Wisdom, and Charisma scores; class features; languages; and feats. You also retain your skill and saving throw proficiencies and use your Proficiency Bonus for them, in addition to gaining the proficiencies of the creature. If a skill or saving throw modifier in the Beast's stat block is higher than yours, use the one in the stat block.\n\nNo Spellcasting. You can't cast spells, but shapeshifting doesn't break your Concentration or otherwise interfere with a spell you've already cast.\n\nObjects. Your ability to handle objects is determined by the form's limbs rather than your own. In addition, you choose whether your equipment falls in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it's practical for the new form to wear a piece of equipment based on the creature's size and shape. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with the form. Equipment that merges with the form has no effect while you're in that form."
        },
        {
          "level": 2,
          "name": "Wild Companion",
          "source": "SRD 5.2.1",
          "text": "You can summon a nature spirit that assumes an animal form to aid you. As a Magic action, you can expend a spell slot or a use of Wild Shape to cast the Find Familiar spell without Material components.\n\nWhen you cast the spell in this way, the familiar is Fey and disappears when you finish a Long Rest."
        },
        {
          "level": 3,
          "name": "Druid Subclass",
          "source": "SRD 5.2.1",
          "text": "You gain a Druid subclass of your choice. The Circle of the Land subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Druid levels. For the rest of your career, you gain each of your subclass's features that are of your Druid level or lower."
        },
        {
          "level": 4,
          "name": "Ability Score Improvement",
          "source": "SRD 5.2.1",
          "text": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You gain this feature again at Druid levels 8, 12, and 16."
        },
        {
          "level": 5,
          "name": "Wild Resurgence",
          "source": "SRD 5.2.1",
          "text": "Once on each of your turns, if you have no uses of Wild Shape left, you can give yourself one use by expending a spell slot (no action required).\n\nIn addition, you can expend one use of Wild Shape (no action required) to give yourself a level 1 spell slot, but you can't do so again until you finish a Long Rest."
        },
        {
          "level": 7,
          "name": "Elemental Fury",
          "source": "SRD 5.2.1",
          "text": "The might of the elements flows through you. You gain one of the following options of your choice.\n\nPotent Spellcasting. Add your Wisdom modifier to the damage you deal with any Druid cantrip.\n\nPrimal Strike. Once on each of your turns when you hit a creature with an attack roll using a weapon or a Beast form's attack in Wild Shape, you can cause the target to take an extra 1d8 Cold, Fire, Lightning, or Thunder damage (choose when you hit)."
        },
        {
          "level": 15,
          "name": "Improved Elemental Fury",
          "source": "SRD 5.2.1",
          "text": "The option you chose for Elemental Fury grows more powerful, as detailed below.\n\nPotent Spellcasting. When you cast a Druid cantrip with a range of 10 feet or greater, the spell's range increases by 300 feet.\n\nPrimal Strike. The extra damage of your Primal Strike increases to 2d8."
        },
        {
          "level": 18,
          "name": "Beast Spells",
          "source": "SRD 5.2.1",
          "text": "While using Wild Shape, you can cast spells in Beast form, except for any spell that has a Material component with a cost specified or that consumes its Material component."
        },
        {
          "level": 19,
          "name": "Epic Boon",
          "source": "SRD 5.2.1",
          "text": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Dimensional Travel is recommended."
        },
        {
          "level": 20,
          "name": "Archdruid",
          "source": "SRD 5.2.1",
          "text": "The vitality of nature constantly blooms within you, granting you the following benefits.\n\nEvergreen Wild Shape. Whenever you roll Initiative and have no uses of Wild Shape left, you regain one expended use of it.\n\nNature Magician. You can convert uses of Wild Shape into a spell slot (no action required). Choose a number of your unexpended uses of Wild Shape and convert them into a single spell slot, with each use contributing 2 spell levels. For example, if you convert two uses of Wild Shape, you produce a level 4 spell slot. Once you use this benefit, you can't do so again until you finish a Long Rest.\n\nLongevity. The primal magic that you wield causes you to age more slowly. For every ten years that pass, your body ages only one year."
        }
      ],
      "options": []
    },
    "fighter": {
      "name": "Fighter",
      "levels": [
        {
          "Level": "1",
          "Proficiency Bonus": "+2",
          "Class Features": "Fighting Style, Second Wind, Weapon Mastery",
          "Second Wind": "2",
          "Weapon Mastery": "3"
        },
        {
          "Level": "2",
          "Proficiency Bonus": "+2",
          "Class Features": "Action Surge (one use), Tactical Mind",
          "Second Wind": "2",
          "Weapon Mastery": "3"
        },
        {
          "Level": "3",
          "Proficiency Bonus": "+2",
          "Class Features": "Fighter Subclass",
          "Second Wind": "2",
          "Weapon Mastery": "3"
        },
        {
          "Level": "4",
          "Proficiency Bonus": "+2",
          "Class Features": "Ability Score Improvement",
          "Second Wind": "3",
          "Weapon Mastery": "4"
        },
        {
          "Level": "5",
          "Proficiency Bonus": "+3",
          "Class Features": "Extra Attack, Tactical Shift",
          "Second Wind": "3",
          "Weapon Mastery": "4"
        },
        {
          "Level": "6",
          "Proficiency Bonus": "+3",
          "Class Features": "Ability Score Improvement",
          "Second Wind": "3",
          "Weapon Mastery": "4"
        },
        {
          "Level": "7",
          "Proficiency Bonus": "+3",
          "Class Features": "Subclass feature",
          "Second Wind": "3",
          "Weapon Mastery": "4"
        },
        {
          "Level": "8",
          "Proficiency Bonus": "+3",
          "Class Features": "Ability Score Improvement",
          "Second Wind": "3",
          "Weapon Mastery": "4"
        },
        {
          "Level": "9",
          "Proficiency Bonus": "+4",
          "Class Features": "Indomitable (one use), Tactical Master",
          "Second Wind": "3",
          "Weapon Mastery": "4"
        },
        {
          "Level": "10",
          "Proficiency Bonus": "+4",
          "Class Features": "Subclass feature",
          "Second Wind": "4",
          "Weapon Mastery": "5"
        },
        {
          "Level": "11",
          "Proficiency Bonus": "+4",
          "Class Features": "Two Extra Attacks",
          "Second Wind": "4",
          "Weapon Mastery": "5"
        },
        {
          "Level": "12",
          "Proficiency Bonus": "+4",
          "Class Features": "Ability Score Improvement",
          "Second Wind": "4",
          "Weapon Mastery": "5"
        },
        {
          "Level": "13",
          "Proficiency Bonus": "+5",
          "Class Features": "Indomitable (two uses), Studied Attacks",
          "Second Wind": "4",
          "Weapon Mastery": "5"
        },
        {
          "Level": "14",
          "Proficiency Bonus": "+5",
          "Class Features": "Ability Score Improvement",
          "Second Wind": "4",
          "Weapon Mastery": "5"
        },
        {
          "Level": "15",
          "Proficiency Bonus": "+5",
          "Class Features": "Subclass feature",
          "Second Wind": "4",
          "Weapon Mastery": "5"
        },
        {
          "Level": "16",
          "Proficiency Bonus": "+5",
          "Class Features": "Ability Score Improvement",
          "Second Wind": "4",
          "Weapon Mastery": "6"
        },
        {
          "Level": "17",
          "Proficiency Bonus": "+6",
          "Class Features": "Action Surge (two uses), Indomitable (three uses)",
          "Second Wind": "4",
          "Weapon Mastery": "6"
        },
        {
          "Level": "18",
          "Proficiency Bonus": "+6",
          "Class Features": "Subclass feature",
          "Second Wind": "4",
          "Weapon Mastery": "6"
        },
        {
          "Level": "19",
          "Proficiency Bonus": "+6",
          "Class Features": "Epic Boon",
          "Second Wind": "4",
          "Weapon Mastery": "6"
        },
        {
          "Level": "20",
          "Proficiency Bonus": "+6",
          "Class Features": "Three Extra Attacks",
          "Second Wind": "4",
          "Weapon Mastery": "6"
        }
      ],
      "subclasses": [
        {
          "id": "champion",
          "name": "Champion",
          "source": "SRD 5.2.1",
          "features": [
            {
              "level": 3,
              "name": "Improved Critical",
              "source": "SRD 5.2.1",
              "text": "Your attack rolls with weapons and Unarmed Strikes can score a Critical Hit on a roll of 19 or 20 on the d20."
            },
            {
              "level": 3,
              "name": "Remarkable Athlete",
              "source": "SRD 5.2.1",
              "text": "Thanks to your athleticism, you have Advantage on Initiative rolls and Strength (Athletics) checks.\n\nIn addition, immediately after you score a Critical Hit, you can move up to half your Speed without provoking Opportunity Attacks."
            },
            {
              "level": 7,
              "name": "Additional Fighting Style",
              "source": "SRD 5.2.1",
              "text": "You gain another Fighting Style feat of your choice."
            },
            {
              "level": 10,
              "name": "Heroic Warrior",
              "source": "SRD 5.2.1",
              "text": "The thrill of battle drives you toward victory. During combat, you can give yourself Heroic Inspiration whenever you start your turn without it."
            },
            {
              "level": 15,
              "name": "Superior Critical",
              "source": "SRD 5.2.1",
              "text": "Your attack rolls with weapons and Unarmed Strikes can now score a Critical Hit on a roll of 18–20 on the d20."
            },
            {
              "level": 18,
              "name": "Survivor",
              "source": "SRD 5.2.1",
              "text": "You attain the pinnacle of resilience in battle, giving you these benefits.\n\nDefy Death. You have Advantage on Death Saving Throws. Moreover, when you roll 18–20 on a Death Saving Throw, you gain the benefit of rolling a 20 on it.\n\nHeroic Rally. At the start of each of your turns, you regain Hit Points equal to 5 plus your Constitution modifier if you are Bloodied and have at least 1 Hit Point."
            }
          ],
          "spells": []
        },
        {
          "id": "banneret",
          "name": "Banneret",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Knightly Envoy",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Group Recovery",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Team Tactics",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 10,
              "name": "Rallying Surge",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Shared Resilience",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 18,
              "name": "Inspiring Commander",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "battle-master",
          "name": "Battle Master",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Combat Superiority",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Student of War",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Maneuver Options",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Know Your Enemy",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 10,
              "name": "Improved Combat Superiority",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Relentless",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 18,
              "name": "Ultimate Combat Superiority",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "eldritch-knight",
          "name": "Eldritch Knight",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Spellcasting",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "War Bond",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "War Magic",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 10,
              "name": "Eldritch Strike",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Arcane Charge",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 18,
              "name": "Improved War Magic",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [],
          "levels": [
            {
              "1": "2",
              "2": "—",
              "3": "—",
              "4": "—",
              "Fighter Level": "3",
              "Prepared Spells": "3"
            },
            {
              "1": "3",
              "2": "—",
              "3": "—",
              "4": "—",
              "Fighter Level": "4",
              "Prepared Spells": "4"
            },
            {
              "1": "3",
              "2": "—",
              "3": "—",
              "4": "—",
              "Fighter Level": "5",
              "Prepared Spells": "4"
            },
            {
              "1": "3",
              "2": "—",
              "3": "—",
              "4": "—",
              "Fighter Level": "6",
              "Prepared Spells": "4"
            },
            {
              "1": "4",
              "2": "2",
              "3": "—",
              "4": "—",
              "Fighter Level": "7",
              "Prepared Spells": "5"
            },
            {
              "1": "4",
              "2": "2",
              "3": "—",
              "4": "—",
              "Fighter Level": "8",
              "Prepared Spells": "6"
            },
            {
              "1": "4",
              "2": "2",
              "3": "—",
              "4": "—",
              "Fighter Level": "9",
              "Prepared Spells": "6"
            },
            {
              "1": "4",
              "2": "3",
              "3": "—",
              "4": "—",
              "Fighter Level": "10",
              "Prepared Spells": "7"
            },
            {
              "1": "4",
              "2": "3",
              "3": "—",
              "4": "—",
              "Fighter Level": "11",
              "Prepared Spells": "8"
            },
            {
              "1": "4",
              "2": "3",
              "3": "—",
              "4": "—",
              "Fighter Level": "12",
              "Prepared Spells": "8"
            },
            {
              "1": "4",
              "2": "3",
              "3": "2",
              "4": "—",
              "Fighter Level": "13",
              "Prepared Spells": "9"
            },
            {
              "1": "4",
              "2": "3",
              "3": "2",
              "4": "—",
              "Fighter Level": "14",
              "Prepared Spells": "10"
            },
            {
              "1": "4",
              "2": "3",
              "3": "2",
              "4": "—",
              "Fighter Level": "15",
              "Prepared Spells": "10"
            },
            {
              "1": "4",
              "2": "3",
              "3": "3",
              "4": "—",
              "Fighter Level": "16",
              "Prepared Spells": "11"
            },
            {
              "1": "4",
              "2": "3",
              "3": "3",
              "4": "—",
              "Fighter Level": "17",
              "Prepared Spells": "11"
            },
            {
              "1": "4",
              "2": "3",
              "3": "3",
              "4": "—",
              "Fighter Level": "18",
              "Prepared Spells": "11"
            },
            {
              "1": "4",
              "2": "3",
              "3": "3",
              "4": "1",
              "Fighter Level": "19",
              "Prepared Spells": "12"
            },
            {
              "1": "4",
              "2": "3",
              "3": "3",
              "4": "1",
              "Fighter Level": "20",
              "Prepared Spells": "13"
            }
          ]
        },
        {
          "id": "psi-warrior",
          "name": "Psi Warrior",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Psionic Power",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Telekinetic Adept",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 10,
              "name": "Guarded Mind",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Bulwark of Force",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 18,
              "name": "Telekinetic Master",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "couatl-herald",
          "name": "Couatl Herald",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Agent of Mercy",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "One of the People",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Peacebringer",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 10,
              "name": "Calm Mind",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Paragon",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 18,
              "name": "Heraldic Enforcer",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "hero",
          "name": "Hero",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Bolstering Presence",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Heroic Effort",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Lead by Example",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 10,
              "name": "Inspiring Presence",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Durable Presence",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 18,
              "name": "Mighty Effort",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "arcane-archer",
          "name": "Arcane Archer",
          "source": "Playtest (UA 2025)",
          "features": [
            {
              "level": 3,
              "name": "Arcane Archer Lore",
              "source": "Playtest (UA 2025)"
            },
            {
              "level": 3,
              "name": "Arcane Shot",
              "source": "Playtest (UA 2025)"
            },
            {
              "level": 7,
              "name": "Curving Shot",
              "source": "Playtest (UA 2025)"
            },
            {
              "level": 7,
              "name": "Ever Ready Shot",
              "source": "Playtest (UA 2025)"
            },
            {
              "level": 10,
              "name": "Improved Shots",
              "source": "Playtest (UA 2025)"
            },
            {
              "level": 15,
              "name": "Powerful Shots",
              "source": "Playtest (UA 2025)"
            },
            {
              "level": 18,
              "name": "Masterful Shots",
              "source": "Playtest (UA 2025)"
            }
          ],
          "spells": []
        }
      ],
      "spells": [],
      "features": [
        {
          "level": 1,
          "name": "Fighting Style",
          "source": "SRD 5.2.1",
          "text": "You have honed your martial prowess and gain a Fighting Style feat of your choice (see \"Feats\"). Defense is recommended.\n\nWhenever you gain a Fighter level, you can replace the feat you chose with a different Fighting Style feat."
        },
        {
          "level": 1,
          "name": "Second Wind",
          "source": "SRD 5.2.1",
          "text": "You have a limited well of physical and mental stamina that you can draw on. As a Bonus Action, you can use it to regain Hit Points equal to 1d10 plus your Fighter level.\n\nYou can use this feature twice. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.\n\nWhen you reach certain Fighter levels, you gain more uses of this feature, as shown in the Second Wind column of the Fighter Features table."
        },
        {
          "level": 1,
          "name": "Weapon Mastery",
          "source": "SRD 5.2.1",
          "text": "Your training with weapons allows you to use the mastery properties of three kinds of Simple or Martial weapons of your choice. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.\n\nWhen you reach certain Fighter levels, you gain the ability to use the mastery properties of more kinds of weapons, as shown in the Weapon Mastery column of the Fighter Features table."
        },
        {
          "level": 2,
          "name": "Action Surge",
          "source": "SRD 5.2.1",
          "text": "You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the Magic action.\n\nOnce you use this feature, you can't do so again until you finish a Short or Long Rest. Starting at level 17, you can use it twice before a rest but only once on a turn."
        },
        {
          "level": 2,
          "name": "Tactical Mind",
          "source": "SRD 5.2.1",
          "text": "You have a mind for tactics on and off the battlefield. When you fail an ability check, you can expend a use of your Second Wind to push yourself toward success. Rather than regaining Hit Points, you roll 1d10 and add the number rolled to the ability check, potentially turning it into a success. If the check still fails, this use of Second Wind isn't expended."
        },
        {
          "level": 3,
          "name": "Fighter Subclass",
          "source": "SRD 5.2.1",
          "text": "You gain a Fighter subclass of your choice. The Champion subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Fighter levels. For the rest of your career, you gain each of your subclass's features that are of your Fighter level or lower."
        },
        {
          "level": 4,
          "name": "Ability Score Improvement",
          "source": "SRD 5.2.1",
          "text": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You gain this feature again at Fighter levels 6, 8, 12, 14, and 16."
        },
        {
          "level": 5,
          "name": "Extra Attack",
          "source": "SRD 5.2.1",
          "text": "You can attack twice instead of once whenever you take the Attack action on your turn."
        },
        {
          "level": 5,
          "name": "Tactical Shift",
          "source": "SRD 5.2.1",
          "text": "Whenever you activate your Second Wind with a Bonus Action, you can move up to half your Speed without provoking Opportunity Attacks."
        },
        {
          "level": 9,
          "name": "Indomitable",
          "source": "SRD 5.2.1",
          "text": "If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a Long Rest.\n\nYou can use this feature twice before a Long Rest starting at level 13 and three times before a Long Rest starting at level 17."
        },
        {
          "level": 9,
          "name": "Tactical Master",
          "source": "SRD 5.2.1",
          "text": "When you attack with a weapon whose mastery property you can use, you can replace that property with the Push, Sap, or Slow property for that attack."
        },
        {
          "level": 11,
          "name": "Two Extra Attacks",
          "source": "SRD 5.2.1",
          "text": "You can attack three times instead of once whenever you take the Attack action on your turn."
        },
        {
          "level": 13,
          "name": "Studied Attacks",
          "source": "SRD 5.2.1",
          "text": "You study your opponents and learn from each attack you make. If you make an attack roll against a creature and miss, you have Advantage on your next attack roll against that creature before the end of your next turn."
        },
        {
          "level": 19,
          "name": "Epic Boon",
          "source": "SRD 5.2.1",
          "text": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Combat Prowess is recommended."
        },
        {
          "level": 20,
          "name": "Three Extra Attacks",
          "source": "SRD 5.2.1",
          "text": "You can attack four times instead of once whenever you take the Attack action on your turn."
        }
      ],
      "options": []
    },
    "monk": {
      "name": "Monk",
      "levels": [
        {
          "Level": "1",
          "Proficiency Bonus": "+2",
          "Class Features": "Martial Arts, Unarmored Defense",
          "Martial Arts": "1d6",
          "Focus Points": "—",
          "Unarmored Movement": "—"
        },
        {
          "Level": "2",
          "Proficiency Bonus": "+2",
          "Class Features": "Monk's Focus, Unarmored Movement, Uncanny Metabolism",
          "Martial Arts": "1d6",
          "Focus Points": "2",
          "Unarmored Movement": "+10 ft."
        },
        {
          "Level": "3",
          "Proficiency Bonus": "+2",
          "Class Features": "Deflect Attacks, Monk Subclass",
          "Martial Arts": "1d6",
          "Focus Points": "3",
          "Unarmored Movement": "+10 ft."
        },
        {
          "Level": "4",
          "Proficiency Bonus": "+2",
          "Class Features": "Ability Score Improvement, Slow Fall",
          "Martial Arts": "1d6",
          "Focus Points": "4",
          "Unarmored Movement": "+10 ft."
        },
        {
          "Level": "5",
          "Proficiency Bonus": "+3",
          "Class Features": "Extra Attack, Stunning Strike",
          "Martial Arts": "1d8",
          "Focus Points": "5",
          "Unarmored Movement": "+10 ft."
        },
        {
          "Level": "6",
          "Proficiency Bonus": "+3",
          "Class Features": "Empowered Strikes, Subclass feature",
          "Martial Arts": "1d8",
          "Focus Points": "6",
          "Unarmored Movement": "+15 ft."
        },
        {
          "Level": "7",
          "Proficiency Bonus": "+3",
          "Class Features": "Evasion",
          "Martial Arts": "1d8",
          "Focus Points": "7",
          "Unarmored Movement": "+15 ft."
        },
        {
          "Level": "8",
          "Proficiency Bonus": "+3",
          "Class Features": "Ability Score Improvement",
          "Martial Arts": "1d8",
          "Focus Points": "8",
          "Unarmored Movement": "+15 ft."
        },
        {
          "Level": "9",
          "Proficiency Bonus": "+4",
          "Class Features": "Acrobatic Movement",
          "Martial Arts": "1d8",
          "Focus Points": "9",
          "Unarmored Movement": "+15 ft."
        },
        {
          "Level": "10",
          "Proficiency Bonus": "+4",
          "Class Features": "Heightened Focus, Self-Restoration",
          "Martial Arts": "1d8",
          "Focus Points": "10",
          "Unarmored Movement": "+20 ft."
        },
        {
          "Level": "11",
          "Proficiency Bonus": "+4",
          "Class Features": "Subclass feature",
          "Martial Arts": "1d10",
          "Focus Points": "11",
          "Unarmored Movement": "+20 ft."
        },
        {
          "Level": "12",
          "Proficiency Bonus": "+4",
          "Class Features": "Ability Score Improvement",
          "Martial Arts": "1d10",
          "Focus Points": "12",
          "Unarmored Movement": "+20 ft."
        },
        {
          "Level": "13",
          "Proficiency Bonus": "+5",
          "Class Features": "Deflect Energy",
          "Martial Arts": "1d10",
          "Focus Points": "13",
          "Unarmored Movement": "+20 ft."
        },
        {
          "Level": "14",
          "Proficiency Bonus": "+5",
          "Class Features": "Disciplined Survivor",
          "Martial Arts": "1d10",
          "Focus Points": "14",
          "Unarmored Movement": "+25 ft."
        },
        {
          "Level": "15",
          "Proficiency Bonus": "+5",
          "Class Features": "Perfect Focus",
          "Martial Arts": "1d10",
          "Focus Points": "15",
          "Unarmored Movement": "+25 ft."
        },
        {
          "Level": "16",
          "Proficiency Bonus": "+5",
          "Class Features": "Ability Score Improvement",
          "Martial Arts": "1d10",
          "Focus Points": "16",
          "Unarmored Movement": "+25 ft."
        },
        {
          "Level": "17",
          "Proficiency Bonus": "+6",
          "Class Features": "Subclass feature",
          "Martial Arts": "1d12",
          "Focus Points": "17",
          "Unarmored Movement": "+25 ft."
        },
        {
          "Level": "18",
          "Proficiency Bonus": "+6",
          "Class Features": "Superior Defense",
          "Martial Arts": "1d12",
          "Focus Points": "18",
          "Unarmored Movement": "+30 ft."
        },
        {
          "Level": "19",
          "Proficiency Bonus": "+6",
          "Class Features": "Epic Boon",
          "Martial Arts": "1d12",
          "Focus Points": "19",
          "Unarmored Movement": "+30 ft."
        },
        {
          "Level": "20",
          "Proficiency Bonus": "+6",
          "Class Features": "Body and Mind",
          "Martial Arts": "1d12",
          "Focus Points": "20",
          "Unarmored Movement": "+30 ft."
        }
      ],
      "subclasses": [
        {
          "id": "warrior-of-the-open-hand",
          "name": "Warrior of the Open Hand",
          "source": "SRD 5.2.1",
          "features": [
            {
              "level": 3,
              "name": "Open Hand Technique",
              "source": "SRD 5.2.1",
              "text": "Whenever you hit a creature with an attack granted by your Flurry of Blows, you can impose one of the following effects on that target.\n\nAddle. The target can't make Opportunity Attacks until the start of its next turn.\n\nPush. The target must succeed on a Strength saving throw or be pushed up to 15 feet away from you.\n\nTopple. The target must succeed on a Dexterity saving throw or have the Prone condition."
            },
            {
              "level": 6,
              "name": "Wholeness of Body",
              "source": "SRD 5.2.1",
              "text": "You gain the ability to heal yourself. As a Bonus Action, you can roll your Martial Arts die. You regain a number of Hit Points equal to the number rolled plus your Wisdom modifier (minimum of 1 Hit Point regained).\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest."
            },
            {
              "level": 11,
              "name": "Fleet Step",
              "source": "SRD 5.2.1",
              "text": "When you take a Bonus Action other than Step of the Wind, you can also use Step of the Wind immediately after that Bonus Action."
            },
            {
              "level": 17,
              "name": "Quivering Palm",
              "source": "SRD 5.2.1",
              "text": "You gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an Unarmed Strike, you can expend 4 Focus Points to start these imperceptible vibrations, which last for a number of days equal to your Monk level. The vibrations are harmless unless you take an action to end them. Alternatively, when you take the Attack action on your turn, you can forgo one of the attacks to end the vibrations. To end them, you and the target must be on the same plane of existence. When you end them, the target must make a Constitution saving throw, taking 10d12 Force damage on a failed save or half as much damage on a successful one.\n\nYou can have only one creature under the effect of this feature at a time. You can end the vibrations harmlessly (no action required)."
            }
          ],
          "spells": []
        }
      ],
      "spells": [],
      "features": [
        {
          "level": 1,
          "name": "Martial Arts",
          "source": "SRD 5.2.1",
          "text": "Your practice of martial arts gives you mastery of combat styles that use your Unarmed Strike and Monk weapons, which are the following:\n\nSimple Melee weapons Martial Melee weapons that have the Light property\n\nYou gain the following benefits while you are unarmed or wielding only Monk weapons and you aren't wearing armor or wielding a Shield.\n\nBonus Unarmed Strike. You can make an Unarmed Strike as a Bonus Action.\n\nMartial Arts Die. You can roll 1d6 in place of the normal damage of your Unarmed Strike or Monk weapons. This die changes as you gain Monk levels, as shown in the Martial Arts column of the Monk Features table.\n\nDexterous Attacks. You can use your Dexterity modifier instead of your Strength modifier for the attack and damage rolls of your Unarmed Strikes and Monk weapons. In addition, when you use the Grapple or Shove option of your Unarmed Strike, you can use your Dexterity modifier instead of your Strength modifier to determine the save DC."
        },
        {
          "level": 1,
          "name": "Unarmored Defense",
          "source": "SRD 5.2.1",
          "text": "While you aren't wearing armor or wielding a Shield, your base Armor Class equals 10 plus your Dexterity and Wisdom modifiers."
        },
        {
          "level": 2,
          "name": "Monk's Focus",
          "source": "SRD 5.2.1",
          "text": "Your focus and martial training allow you to harness a well of extraordinary energy within yourself. This energy is represented by Focus Points. Your Monk level determines the number of points you have, as shown in the Focus Points column of the Monk Features table.\n\nYou can expend these points to enhance or fuel certain Monk features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind, each of which is detailed below.\n\nWhen you expend a Focus Point, it is unavailable until you finish a Short or Long Rest, at the end of which you regain all your expended points.\n\nSome features that use Focus Points require your target to make a saving throw. The save DC equals 8 plus your Wisdom modifier and Proficiency Bonus.\n\nFlurry of Blows. You can expend 1 Focus Point to make two Unarmed Strikes as a Bonus Action.\n\nPatient Defense. You can take the Disengage action as a Bonus Action. Alternatively, you can expend 1 Focus Point to take both the Disengage and the Dodge actions as a Bonus Action.\n\nStep of the Wind. You can take the Dash action as a Bonus Action. Alternatively, you can expend 1 Focus Point to take both the Disengage and Dash actions as a Bonus Action, and your jump distance is doubled for the turn."
        },
        {
          "level": 2,
          "name": "Unarmored Movement",
          "source": "SRD 5.2.1",
          "text": "Your speed increases by 10 feet while you aren't wearing armor or wielding a Shield. This bonus increases when you reach certain Monk levels, as shown on the Monk Features table."
        },
        {
          "level": 2,
          "name": "Uncanny Metabolism",
          "source": "SRD 5.2.1",
          "text": "When you roll Initiative, you can regain all expended Focus Points. When you do so, roll your Martial Arts die, and regain a number of Hit Points equal to your Monk level plus the number rolled.\n\nOnce you use this feature, you can't use it again until you finish a Long Rest."
        },
        {
          "level": 3,
          "name": "Deflect Attacks",
          "source": "SRD 5.2.1",
          "text": "When an attack roll hits you and its damage includes Bludgeoning, Piercing, or Slashing damage, you can take a Reaction to reduce the attack's total damage against you. The reduction equals 1d10 plus your Dexterity modifier and Monk level.\n\nIf you reduce the damage to 0, you can expend 1 Focus Point to redirect some of the attack's force. If you do so, choose a creature you can see within 5 feet of yourself if the attack was a melee attack or a creature you can see within 60 feet of yourself that isn't behind Total Cover if the attack was a ranged attack. That creature must succeed on a Dexterity saving throw or take damage equal to two rolls of your Martial Arts die plus your Dexterity modifier. The damage is the same type dealt by the attack."
        },
        {
          "level": 3,
          "name": "Monk Subclass",
          "source": "SRD 5.2.1",
          "text": "You gain a Monk subclass of your choice. The Warrior of the Open Hand subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Monk levels. For the rest of your career, you gain each of your subclass's features that are of your Monk level or lower."
        },
        {
          "level": 4,
          "name": "Ability Score Improvement",
          "source": "SRD 5.2.1",
          "text": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You gain this feature again at Monk levels 8, 12, and 16."
        },
        {
          "level": 4,
          "name": "Slow Fall",
          "source": "SRD 5.2.1",
          "text": "You can take a Reaction when you fall to reduce any damage you take from the fall by an amount equal to five times your Monk level."
        },
        {
          "level": 5,
          "name": "Extra Attack",
          "source": "SRD 5.2.1",
          "text": "You can attack twice instead of once whenever you take the Attack action on your turn."
        },
        {
          "level": 5,
          "name": "Stunning Strike",
          "source": "SRD 5.2.1",
          "text": "Once per turn when you hit a creature with a Monk weapon or an Unarmed Strike, you can expend 1 Focus Point to attempt a stunning strike. The target must make a Constitution saving throw. On a failed save, the target has the Stunned condition until the start of your next turn. On a successful save, the target's Speed is halved until the start of your next turn, and the next attack roll made against the target before then has Advantage."
        },
        {
          "level": 6,
          "name": "Empowered Strikes",
          "source": "SRD 5.2.1",
          "text": "Whenever you deal damage with your Unarmed Strike, it can deal your choice of Force damage or its normal damage type."
        },
        {
          "level": 7,
          "name": "Evasion",
          "source": "SRD 5.2.1",
          "text": "When you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail.\n\nYou don't benefit from this feature if you have the Incapacitated condition."
        },
        {
          "level": 9,
          "name": "Acrobatic Movement",
          "source": "SRD 5.2.1",
          "text": "While you aren't wearing armor or wielding a Shield, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the movement."
        },
        {
          "level": 10,
          "name": "Heightened Focus",
          "source": "SRD 5.2.1",
          "text": "Your Flurry of Blows, Patient Defense, and Step of the Wind gain the following benefits.\n\nFlurry of Blows. You can expend 1 Focus Point to use Flurry of Blows and make three Unarmed Strikes with it instead of two.\n\nPatient Defense. When you expend a Focus Point to use Patient Defense, you gain a number of Temporary Hit Points equal to two rolls of your Martial Arts die.\n\nStep of the Wind. When you expend a Focus Point to use Step of the Wind, you can choose a willing creature within 5 feet of yourself that is Large or smaller. You move the creature with you until the end of your turn. The creature's movement doesn't provoke Opportunity Attacks."
        },
        {
          "level": 10,
          "name": "Self-Restoration",
          "source": "SRD 5.2.1",
          "text": "Through sheer force of will, you can remove one of the following conditions from yourself at the end of each of your turns: Charmed, Frightened, or Poisoned.\n\nIn addition, forgoing food and drink doesn't give you levels of Exhaustion."
        },
        {
          "level": 13,
          "name": "Deflect Energy",
          "source": "SRD 5.2.1",
          "text": "You can now use your Deflect Attacks feature against attacks that deal any damage type, not just Bludgeoning, Piercing, or Slashing."
        },
        {
          "level": 14,
          "name": "Disciplined Survivor",
          "source": "SRD 5.2.1",
          "text": "Your physical and mental discipline grant you proficiency in all saving throws.\n\nAdditionally, whenever you make a saving throw and fail, you can expend 1 Focus Point to reroll it, and you must use the new roll."
        },
        {
          "level": 15,
          "name": "Perfect Focus",
          "source": "SRD 5.2.1",
          "text": "When you roll Initiative and don't use Uncanny Metabolism, you regain expended Focus Points until you have 4 if you have 3 or fewer."
        },
        {
          "level": 18,
          "name": "Superior Defense",
          "source": "SRD 5.2.1",
          "text": "At the start of your turn, you can expend 3 Focus Points to bolster yourself against harm for 1 minute or until you have the Incapacitated condition. During that time, you have Resistance to all damage except Force damage."
        },
        {
          "level": 19,
          "name": "Epic Boon",
          "source": "SRD 5.2.1",
          "text": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Irresistible Offense is recommended."
        },
        {
          "level": 20,
          "name": "Body and Mind",
          "source": "SRD 5.2.1",
          "text": "You have developed your body and mind to new heights. Your Dexterity and Wisdom scores increase by 4, to a maximum of 25."
        }
      ],
      "options": []
    },
    "paladin": {
      "name": "Paladin",
      "levels": [
        {
          "1": "2",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "1",
          "Proficiency Bonus": "+2",
          "Class Features": "Lay On Hands, Spellcasting, Weapon Mastery",
          "Channel Divinity": "—",
          "Prepared Spells": "2"
        },
        {
          "1": "2",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "2",
          "Proficiency Bonus": "+2",
          "Class Features": "Fighting Style, Paladin's Smite",
          "Channel Divinity": "—",
          "Prepared Spells": "3"
        },
        {
          "1": "3",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "3",
          "Proficiency Bonus": "+2",
          "Class Features": "Channel Divinity, Paladin Subclass",
          "Channel Divinity": "2",
          "Prepared Spells": "4"
        },
        {
          "1": "3",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "4",
          "Proficiency Bonus": "+2",
          "Class Features": "Ability Score Improvement",
          "Channel Divinity": "2",
          "Prepared Spells": "5"
        },
        {
          "1": "4",
          "2": "2",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "5",
          "Proficiency Bonus": "+3",
          "Class Features": "Extra Attack, Faithful Steed",
          "Channel Divinity": "2",
          "Prepared Spells": "6"
        },
        {
          "1": "4",
          "2": "2",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "6",
          "Proficiency Bonus": "+3",
          "Class Features": "Aura of Protection",
          "Channel Divinity": "2",
          "Prepared Spells": "6"
        },
        {
          "1": "4",
          "2": "3",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "7",
          "Proficiency Bonus": "+3",
          "Class Features": "Subclass feature",
          "Channel Divinity": "2",
          "Prepared Spells": "7"
        },
        {
          "1": "4",
          "2": "3",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "8",
          "Proficiency Bonus": "+3",
          "Class Features": "Ability Score Improvement",
          "Channel Divinity": "2",
          "Prepared Spells": "7"
        },
        {
          "1": "4",
          "2": "3",
          "3": "2",
          "4": "—",
          "5": "—",
          "Level": "9",
          "Proficiency Bonus": "+4",
          "Class Features": "Abjure Foes",
          "Channel Divinity": "2",
          "Prepared Spells": "9"
        },
        {
          "1": "4",
          "2": "3",
          "3": "2",
          "4": "—",
          "5": "—",
          "Level": "10",
          "Proficiency Bonus": "+4",
          "Class Features": "Aura of Courage",
          "Channel Divinity": "2",
          "Prepared Spells": "9"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "—",
          "5": "—",
          "Level": "11",
          "Proficiency Bonus": "+4",
          "Class Features": "Radiant Strikes",
          "Channel Divinity": "3",
          "Prepared Spells": "10"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "—",
          "5": "—",
          "Level": "12",
          "Proficiency Bonus": "+4",
          "Class Features": "Ability Score Improvement",
          "Channel Divinity": "3",
          "Prepared Spells": "10"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "1",
          "5": "—",
          "Level": "13",
          "Proficiency Bonus": "+5",
          "Class Features": "—",
          "Channel Divinity": "3",
          "Prepared Spells": "11"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "1",
          "5": "—",
          "Level": "14",
          "Proficiency Bonus": "+5",
          "Class Features": "Restoring Touch",
          "Channel Divinity": "3",
          "Prepared Spells": "11"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "2",
          "5": "—",
          "Level": "15",
          "Proficiency Bonus": "+5",
          "Class Features": "Subclass feature",
          "Channel Divinity": "3",
          "Prepared Spells": "12"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "2",
          "5": "—",
          "Level": "16",
          "Proficiency Bonus": "+5",
          "Class Features": "Ability Score Improvement",
          "Channel Divinity": "3",
          "Prepared Spells": "12"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "1",
          "Level": "17",
          "Proficiency Bonus": "+6",
          "Class Features": "—",
          "Channel Divinity": "3",
          "Prepared Spells": "14"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "1",
          "Level": "18",
          "Proficiency Bonus": "+6",
          "Class Features": "Aura Expansion",
          "Channel Divinity": "3",
          "Prepared Spells": "14"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "Level": "19",
          "Proficiency Bonus": "+6",
          "Class Features": "Epic Boon",
          "Channel Divinity": "3",
          "Prepared Spells": "15"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "Level": "20",
          "Proficiency Bonus": "+6",
          "Class Features": "Subclass feature",
          "Channel Divinity": "3",
          "Prepared Spells": "15"
        }
      ],
      "subclasses": [
        {
          "id": "oath-of-devotion",
          "name": "Oath of Devotion",
          "source": "SRD 5.2.1",
          "features": [
            {
              "level": 3,
              "name": "Oath of Devotion Spells",
              "source": "SRD 5.2.1",
              "text": "The magic of your oath ensures you always have certain spells ready; when you reach a Paladin level specified in the Oath of Devotion Spells table, you thereafter always have the listed spells prepared.\n\nOath of Devotion Spells"
            },
            {
              "level": 3,
              "name": "Sacred Weapon",
              "source": "SRD 5.2.1",
              "text": "When you take the Attack action, you can expend one use of your Channel Divinity to imbue one Melee weapon that you are holding with positive energy. For 10 minutes or until you use this feature again, you add your Charisma modifier to attack rolls you make with that weapon (minimum bonus of +1), and each time you hit with it, you cause it to deal its normal damage type or Radiant damage.\n\nThe weapon also emits Bright Light in a 20-foot radius and Dim Light 20 feet beyond that.\n\nYou can end this effect early (no action required). This effect also ends if you aren't carrying the weapon."
            },
            {
              "level": 7,
              "name": "Aura of Devotion",
              "source": "SRD 5.2.1",
              "text": "You and your allies have Immunity to the Charmed condition while in your Aura of Protection. If a Charmed ally enters the aura, that condition has no effect on that ally while there."
            },
            {
              "level": 15,
              "name": "Smite of Protection",
              "source": "SRD 5.2.1",
              "text": "Your magical smite now radiates protective energy. Whenever you cast Divine Smite, you and your allies have Half Cover while in your Aura of Protection. The aura has this benefit until the start of your next turn."
            },
            {
              "level": 20,
              "name": "Holy Nimbus",
              "source": "SRD 5.2.1",
              "text": "As a Bonus Action, you can imbue your Aura of Protection with holy power, granting the benefits below for 10 minutes or until you end them (no action required). Once you use this feature, you can't use it again until you finish a Long Rest. You can also restore your use of it by expending a level 5 spell slot (no action required).\n\nHoly Ward. You have Advantage on any saving throw you are forced to make by a Fiend or an Undead.\n\nRadiant Damage. Whenever an enemy starts its turn in the aura, that creature takes Radiant damage equal to your Charisma modifier plus your Proficiency Bonus.\n\nSunlight. The aura is filled with Bright Light that is sunlight."
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Protection from Evil and Good",
                "Shield of Faith"
              ]
            },
            {
              "level": 5,
              "names": [
                "Aid",
                "Zone of Truth"
              ]
            },
            {
              "level": 9,
              "names": [
                "Beacon of Hope",
                "Dispel Magic"
              ]
            },
            {
              "level": 13,
              "names": [
                "Freedom of Movement",
                "Guardian of Faith"
              ]
            },
            {
              "level": 17,
              "names": [
                "Commune",
                "Flame Strike"
              ]
            }
          ]
        },
        {
          "id": "oath-of-glory",
          "name": "Oath of Glory",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Inspiring Smite",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Oath of Glory Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Peerless Athlete",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Aura of Alacrity",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Glorious Defense",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 20,
              "name": "Living Legend",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Guiding Bolt",
                "Heroism"
              ]
            },
            {
              "level": 5,
              "names": [
                "Enhance Ability",
                "Magic Weapon"
              ]
            },
            {
              "level": 9,
              "names": [
                "Haste",
                "Protection from Energy"
              ]
            },
            {
              "level": 13,
              "names": [
                "Compulsion",
                "Freedom of Movement"
              ]
            },
            {
              "level": 17,
              "names": [
                "Legend Lore",
                "Yolande's Regal Presence"
              ]
            }
          ]
        },
        {
          "id": "oath-of-the-ancients",
          "name": "Oath of the Ancients",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Nature's Wrath",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Oath of the Ancients Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Aura of Warding",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Undying Sentinel",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 20,
              "name": "Elder Champion",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Ensnaring Strike",
                "Speak with Animals"
              ]
            },
            {
              "level": 5,
              "names": [
                "Misty Step",
                "Moonbeam"
              ]
            },
            {
              "level": 9,
              "names": [
                "Plant Growth",
                "Protection from Energy"
              ]
            },
            {
              "level": 13,
              "names": [
                "Ice Storm",
                "Stoneskin"
              ]
            },
            {
              "level": 17,
              "names": [
                "Commune with Nature",
                "Tree Stride"
              ]
            }
          ]
        },
        {
          "id": "oath-of-the-noble-genies",
          "name": "Oath of the Noble Genies",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Elemental Strike",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Genie Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Genie's Splendor",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Aura of Elemental Shielding",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Elemental Rebuke",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 20,
              "name": "Noble Scion",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Chromatic Orb",
                "Elementalism",
                "Thunderous Smite"
              ]
            },
            {
              "level": 5,
              "names": [
                "Mirror Image",
                "Phantasmal Force"
              ]
            },
            {
              "level": 9,
              "names": [
                "Fly",
                "Gaseous Form"
              ]
            },
            {
              "level": 13,
              "names": [
                "Conjure Minor Elementals",
                "Summon Elemental"
              ]
            },
            {
              "level": 17,
              "names": [
                "Banishing Smite",
                "Contact Other Plane"
              ]
            }
          ]
        },
        {
          "id": "oath-of-vengeance",
          "name": "Oath of Vengeance",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Oath of Vengeance Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Vow of Enmity",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Relentless Avenger",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Soul of Vengeance",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 20,
              "name": "Avenging Angel",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Bane",
                "Hunter's Mark"
              ]
            },
            {
              "level": 5,
              "names": [
                "Hold Person",
                "Misty Step"
              ]
            },
            {
              "level": 9,
              "names": [
                "Haste",
                "Protection from Energy"
              ]
            },
            {
              "level": 13,
              "names": [
                "Banishment",
                "Dimension Door"
              ]
            },
            {
              "level": 17,
              "names": [
                "Hold Monster",
                "Scrying"
              ]
            }
          ]
        },
        {
          "id": "oath-of-the-guardian",
          "name": "Oath of the Guardian",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Oath of the Guardian Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Defensive Intervention",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Marking Strike",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Guarding Presence",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Inspiring Defense",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Ward of the Guardian",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 20,
              "name": "Guardian Angel",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Alarm",
                "Shield of Faith"
              ]
            },
            {
              "level": 5,
              "names": [
                "Lesser Restoration",
                "Warding Bond"
              ]
            },
            {
              "level": 9,
              "names": [
                "Beacon of Hope",
                "Protection from Energy"
              ]
            },
            {
              "level": 13,
              "names": [
                "Death Ward",
                "Guardian of Faith"
              ]
            },
            {
              "level": 17,
              "names": [
                "Greater Restoration",
                "Raise Dead"
              ]
            }
          ]
        },
        {
          "id": "oath-of-the-hearth",
          "name": "Oath of the Hearth",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Oath of the Hearth Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Burning Weapon",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Aura of Warmth",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Insulating Ward",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 20,
              "name": "Burning Spirit",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Burning Hands",
                "Find Familiar"
              ]
            },
            {
              "level": 5,
              "names": [
                "Aid",
                "Continual Flame"
              ]
            },
            {
              "level": 9,
              "names": [
                "Beacon of Hope",
                "Daylight"
              ]
            },
            {
              "level": 13,
              "names": [
                "Fire Shield",
                "Guardian of Faith"
              ]
            },
            {
              "level": 17,
              "names": [
                "Flame Strike",
                "Telepathic Bond"
              ]
            }
          ]
        }
      ],
      "spells": [
        {
          "name": "Bless",
          "level": 1,
          "school": "Enchantment",
          "special": "C, M"
        },
        {
          "name": "Command",
          "level": 1,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Cure Wounds",
          "level": 1,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Detect Evil and Good",
          "level": 1,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Detect Magic",
          "level": 1,
          "school": "Divination",
          "special": "C, R"
        },
        {
          "name": "Detect Poison and Disease",
          "level": 1,
          "school": "Divination",
          "special": "C, R"
        },
        {
          "name": "Divine Favor",
          "level": 1,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Divine Smite",
          "level": 1,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Heroism",
          "level": 1,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Protection from Evil and Good",
          "level": 1,
          "school": "Abjuration",
          "special": "C, M"
        },
        {
          "name": "Purify Food and Drink",
          "level": 1,
          "school": "Transmutation",
          "special": "R"
        },
        {
          "name": "Searing Smite",
          "level": 1,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Shield of Faith",
          "level": 1,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Aid",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Find Steed",
          "level": 2,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Gentle Repose",
          "level": 2,
          "school": "Necromancy",
          "special": "R, M"
        },
        {
          "name": "Lesser Restoration",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Locate Object",
          "level": 2,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Magic Weapon",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Prayer of Healing",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Protection from Poison",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Shining Smite",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Warding Bond",
          "level": 2,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Zone of Truth",
          "level": 2,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Create Food and Water",
          "level": 3,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Daylight",
          "level": 3,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Dispel Magic",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Magic Circle",
          "level": 3,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Remove Curse",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Revivify",
          "level": 3,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Aura of Life",
          "level": 4,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Banishment",
          "level": 4,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Death Ward",
          "level": 4,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Locate Creature",
          "level": 4,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Dispel Evil and Good",
          "level": 5,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Geas",
          "level": 5,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Greater Restoration",
          "level": 5,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Raise Dead",
          "level": 5,
          "school": "Necromancy",
          "special": "M"
        }
      ],
      "features": [
        {
          "level": 1,
          "name": "Lay On Hands",
          "source": "SRD 5.2.1",
          "text": "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you finish a Long Rest. With that pool, you can restore a total number of Hit Points equal to five times your Paladin level.\n\nAs a Bonus Action, you can touch a creature (which could be yourself) and draw power from the pool of healing to restore a number of Hit Points to that creature, up to the maximum amount remaining in the pool.\n\nYou can also expend 5 Hit Points from the pool of healing power to remove the Poisoned condition from the creature; those points don't also restore Hit Points to the creature."
        },
        {
          "level": 1,
          "name": "Spellcasting",
          "source": "SRD 5.2.1",
          "text": "You have learned to cast spells through prayer and meditation. See \"Spells\" for the rules on spellcasting. The information below details how you use those rules with Paladin spells, which appear in the Paladin spell list later in the class's description.\n\nSpell Slots. The Paladin Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\nPrepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Paladin spells. Heroism and Searing Smite are recommended.\n\nThe number of spells on your list increases as you gain Paladin levels, as shown in the Prepared Spells column of the Paladin Features table. Whenever that number increases, choose additional Paladin spells until the number of spells on your list matches the number in the Paladin Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 5 Paladin, your list of prepared spells can include six Paladin spells of level 1 or 2 in any combination.\n\nIf another Paladin feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Paladin spells for you.\n\nChanging Your Prepared Spells. Whenever you finish a Long Rest, you can replace one spell on your list with another Paladin spell for which you have spell slots.\n\nSpellcasting Ability. Charisma is your spellcasting ability for your Paladin spells.\n\nSpellcasting Focus. You can use a Holy Symbol as a Spellcasting Focus for your Paladin spells."
        },
        {
          "level": 1,
          "name": "Weapon Mastery",
          "source": "SRD 5.2.1",
          "text": "Your training with weapons allows you to use the mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Longswords and Javelins.\n\nWhenever you finish a Long Rest, you can change the kinds of weapons you chose. For example, you could switch to using the mastery properties of Halberds and Flails."
        },
        {
          "level": 2,
          "name": "Fighting Style",
          "source": "SRD 5.2.1",
          "text": "You gain a Fighting Style feat of your choice (see \"Feats\" for feats). Instead of choosing one of those feats, you can choose the option below.\n\nBlessed Warrior. You learn two Cleric cantrips of your choice (see the Cleric class's section for a list of Cleric spells). Guidance and Sacred Flame are recommended. The chosen cantrips count as Paladin spells for you, and Charisma is your spellcasting ability for them. Whenever you gain a Paladin level, you can replace one of these cantrips with another Cleric cantrip."
        },
        {
          "level": 2,
          "name": "Paladin's Smite",
          "source": "SRD 5.2.1",
          "text": "You always have the Divine Smite spell prepared. In addition, you can cast it without expending a spell slot, but you must finish a Long Rest before you can cast it in this way again."
        },
        {
          "level": 3,
          "name": "Channel Divinity",
          "source": "SRD 5.2.1",
          "text": "You can channel divine energy directly from the Outer Planes, using it to fuel magical effects. You start with one such effect: Divine Sense, which is described below. Other Paladin features give additional Channel Divinity effect options. Each time you use this class's Channel Divinity, you choose which effect from this class to create.\n\nYou can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest. You gain an additional use when you reach Paladin level 11.\n\nBreaking Your Oath A Paladin tries to hold to the highest standards of conduct, but even the most dedicated are fallible. Sometimes a Paladin transgresses their oath. A Paladin who has broken a vow typically seeks absolution, spending an all-night vigil as a sign of penitence or undertaking a fast. After a rite of forgiveness, the Paladin starts fresh. If your Paladin unrepentantly violates their oath, talk to your GM. Your Paladin should probably take a more appropriate subclass or even abandon the class and adopt another one. If a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class's Spellcasting feature.\n\nDivine Sense. As a Bonus Action, you can open your awareness to detect Celestials, Fiends, and Undead. For the next 10 minutes or until you have the Incapacitated condition, you know the location of any creature of those types within 60 feet of yourself, and you know its creature type. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell."
        },
        {
          "level": 3,
          "name": "Paladin Subclass",
          "source": "SRD 5.2.1",
          "text": "You gain a Paladin subclass of your choice. The Oath of Devotion subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Paladin levels. For the rest of your career, you gain each of your subclass's features that are of your Paladin level or lower."
        },
        {
          "level": 4,
          "name": "Ability Score Improvement",
          "source": "SRD 5.2.1",
          "text": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You gain this feature again at Paladin levels 8, 12, and 16."
        },
        {
          "level": 5,
          "name": "Extra Attack",
          "source": "SRD 5.2.1",
          "text": "You can attack twice instead of once whenever you take the Attack action on your turn."
        },
        {
          "level": 5,
          "name": "Faithful Steed",
          "source": "SRD 5.2.1",
          "text": "You can call on the aid of an otherworldly steed. You always have the Find Steed spell prepared.\n\nYou can also cast the spell once without expending a spell slot, and you regain the ability to do so when you finish a Long Rest."
        },
        {
          "level": 6,
          "name": "Aura of Protection",
          "source": "SRD 5.2.1",
          "text": "You radiate a protective, unseeable aura in a 10-foot Emanation that originates from you. The aura is inactive while you have the Incapacitated condition.\n\nYou and your allies in the aura gain a bonus to saving throws equal to your Charisma modifier (minimum bonus of +1).\n\nIf another Paladin is present, a creature can benefit from only one Aura of Protection at a time; the creature chooses which aura while in them."
        },
        {
          "level": 9,
          "name": "Abjure Foes",
          "source": "SRD 5.2.1",
          "text": "As a Magic action, you can expend one use of this class's Channel Divinity to overwhelm foes with awe. As you present your Holy Symbol or weapon, you can target a number of creatures equal to your Charisma modifier (minimum of one creature) that you can see within 60 feet of yourself. Each target must succeed on a Wisdom saving throw or have the Frightened condition for 1 minute or until it takes any damage. While Frightened in this way, a target can do only one of the following on its turns: move, take an action, or take a Bonus Action."
        },
        {
          "level": 10,
          "name": "Aura of Courage",
          "source": "SRD 5.2.1",
          "text": "You and your allies have Immunity to the Frightened condition while in your Aura of Protection. If a Frightened ally enters the aura, that condition has no effect on that ally while there."
        },
        {
          "level": 11,
          "name": "Radiant Strikes",
          "source": "SRD 5.2.1",
          "text": "Your strikes now carry supernatural power. When you hit a target with an attack roll using a Melee weapon or an Unarmed Strike, the target takes an extra 1d8 Radiant damage."
        },
        {
          "level": 14,
          "name": "Restoring Touch",
          "source": "SRD 5.2.1",
          "text": "When you use Lay On Hands on a creature, you can also remove one or more of the following conditions from the creature: Blinded, Charmed, Deafened, Frightened, Paralyzed, or Stunned. You must expend 5 Hit Points from the healing pool of Lay On Hands for each of these conditions you remove; those points don't also restore Hit Points to the creature."
        },
        {
          "level": 18,
          "name": "Aura Expansion",
          "source": "SRD 5.2.1",
          "text": "Your Aura of Protection is now a 30-foot Emanation."
        },
        {
          "level": 19,
          "name": "Epic Boon",
          "source": "SRD 5.2.1",
          "text": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Truesight is recommended."
        }
      ],
      "options": []
    },
    "ranger": {
      "name": "Ranger",
      "levels": [
        {
          "1": "2",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "1",
          "Proficiency Bonus": "+2",
          "Class Features": "Spellcasting, Favored Enemy, Weapon Mastery",
          "Favored Enemy": "2",
          "Prepared Spells": "2"
        },
        {
          "1": "2",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "2",
          "Proficiency Bonus": "+2",
          "Class Features": "Deft Explorer, Fighting Style",
          "Favored Enemy": "2",
          "Prepared Spells": "3"
        },
        {
          "1": "3",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "3",
          "Proficiency Bonus": "+2",
          "Class Features": "Ranger Subclass",
          "Favored Enemy": "2",
          "Prepared Spells": "4"
        },
        {
          "1": "3",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "4",
          "Proficiency Bonus": "+2",
          "Class Features": "Ability Score Improvement",
          "Favored Enemy": "2",
          "Prepared Spells": "5"
        },
        {
          "1": "4",
          "2": "2",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "5",
          "Proficiency Bonus": "+3",
          "Class Features": "Extra Attack",
          "Favored Enemy": "3",
          "Prepared Spells": "6"
        },
        {
          "1": "4",
          "2": "2",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "6",
          "Proficiency Bonus": "+3",
          "Class Features": "Roving",
          "Favored Enemy": "3",
          "Prepared Spells": "6"
        },
        {
          "1": "4",
          "2": "3",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "7",
          "Proficiency Bonus": "+3",
          "Class Features": "Subclass feature",
          "Favored Enemy": "3",
          "Prepared Spells": "7"
        },
        {
          "1": "4",
          "2": "3",
          "3": "—",
          "4": "—",
          "5": "—",
          "Level": "8",
          "Proficiency Bonus": "+3",
          "Class Features": "Ability Score Improvement",
          "Favored Enemy": "3",
          "Prepared Spells": "7"
        },
        {
          "1": "4",
          "2": "3",
          "3": "2",
          "4": "—",
          "5": "—",
          "Level": "9",
          "Proficiency Bonus": "+4",
          "Class Features": "Expertise",
          "Favored Enemy": "4",
          "Prepared Spells": "9"
        },
        {
          "1": "4",
          "2": "3",
          "3": "2",
          "4": "—",
          "5": "—",
          "Level": "10",
          "Proficiency Bonus": "+4",
          "Class Features": "Tireless",
          "Favored Enemy": "4",
          "Prepared Spells": "9"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "—",
          "5": "—",
          "Level": "11",
          "Proficiency Bonus": "+4",
          "Class Features": "Subclass feature",
          "Favored Enemy": "4",
          "Prepared Spells": "10"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "—",
          "5": "—",
          "Level": "12",
          "Proficiency Bonus": "+4",
          "Class Features": "Ability Score Improvement",
          "Favored Enemy": "4",
          "Prepared Spells": "10"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "1",
          "5": "—",
          "Level": "13",
          "Proficiency Bonus": "+5",
          "Class Features": "Relentless Hunter",
          "Favored Enemy": "5",
          "Prepared Spells": "11"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "1",
          "5": "—",
          "Level": "14",
          "Proficiency Bonus": "+5",
          "Class Features": "Nature’s Veil",
          "Favored Enemy": "5",
          "Prepared Spells": "11"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "2",
          "5": "—",
          "Level": "15",
          "Proficiency Bonus": "+5",
          "Class Features": "Subclass feature",
          "Favored Enemy": "5",
          "Prepared Spells": "12"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "2",
          "5": "—",
          "Level": "16",
          "Proficiency Bonus": "+5",
          "Class Features": "Ability Score Improvement",
          "Favored Enemy": "5",
          "Prepared Spells": "12"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "1",
          "Level": "17",
          "Proficiency Bonus": "+6",
          "Class Features": "Precise Hunter",
          "Favored Enemy": "6",
          "Prepared Spells": "14"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "1",
          "Level": "18",
          "Proficiency Bonus": "+6",
          "Class Features": "Feral Senses",
          "Favored Enemy": "6",
          "Prepared Spells": "14"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "Level": "19",
          "Proficiency Bonus": "+6",
          "Class Features": "Epic Boon",
          "Favored Enemy": "6",
          "Prepared Spells": "15"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "Level": "20",
          "Proficiency Bonus": "+6",
          "Class Features": "Foe Slayer",
          "Favored Enemy": "6",
          "Prepared Spells": "15"
        }
      ],
      "subclasses": [
        {
          "id": "hunter",
          "name": "Hunter",
          "source": "SRD 5.2.1",
          "features": [
            {
              "level": 3,
              "name": "Hunter's Lore",
              "source": "SRD 5.2.1",
              "text": "You can call on the forces of nature to reveal certain strengths and weaknesses of your prey. While a creature is marked by your Hunter's Mark, you know whether that creature has any Immunities, Resistances, or Vulnerabilities, and if the creature has any, you know what they are."
            },
            {
              "level": 3,
              "name": "Hunter's Prey",
              "source": "SRD 5.2.1",
              "text": "You gain one of the following feature options of your choice. Whenever you finish a Short or Long Rest, you can replace the chosen option with the other one.\n\nColossus Slayer. Your tenacity can wear down even the most resilient foes. When you hit a creature with a weapon, the weapon deals an extra 1d8 damage to the target if it's missing any of its Hit Points. You can deal this extra damage only once per turn.\n\nHorde Breaker. Once on each of your turns when you make an attack with a weapon, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target, that is within the weapon's range, and that you haven't attacked this turn."
            },
            {
              "level": 7,
              "name": "Defensive Tactics",
              "source": "SRD 5.2.1",
              "text": "You gain one of the following feature options of your choice. Whenever you finish a Short or Long Rest, you can replace the chosen option with the other one.\n\nEscape the Horde. Opportunity Attacks have Disadvantage against you.\n\nMultiattack Defense. When a creature hits you with an attack roll, that creature has Disadvantage on all other attack rolls against you this turn."
            },
            {
              "level": 11,
              "name": "Superior Hunter's Prey",
              "source": "SRD 5.2.1",
              "text": "Once per turn when you deal damage to a creature marked by your Hunter's Mark, you can also deal that spell's extra damage to a different creature that you can see within 30 feet of the first creature."
            },
            {
              "level": 15,
              "name": "Superior Hunter's Defense",
              "source": "SRD 5.2.1",
              "text": "When you take damage, you can take a Reaction to give yourself Resistance to that damage and any other damage of the same type until the end of the current turn."
            }
          ],
          "spells": []
        },
        {
          "id": "beast-master",
          "name": "Beast Master",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Primal Companion",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Exceptional Training",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 11,
              "name": "Bestial Fury",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Share Spells",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "fey-wanderer",
          "name": "Fey Wanderer",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Dreadful Strikes",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Fey Wanderer Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Otherworldly Glamour",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Beguiling Twist",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 11,
              "name": "Fey Reinforcements",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Misty Wanderer",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "gloom-stalker",
          "name": "Gloom Stalker",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Dread Ambusher",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Gloom Stalker Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Umbral Sight",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Iron Mind",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 11,
              "name": "Stalker's Flurry",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Shadowy Dodge",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Disguise Self"
              ]
            },
            {
              "level": 5,
              "names": [
                "Rope Trick"
              ]
            },
            {
              "level": 9,
              "names": [
                "Fear"
              ]
            },
            {
              "level": 13,
              "names": [
                "Greater Invisibility"
              ]
            },
            {
              "level": 17,
              "names": [
                "Seeming"
              ]
            }
          ]
        },
        {
          "id": "winter-walker",
          "name": "Winter Walker",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Frigid Explorer",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Hunter's Rime",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Winter Walker Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Fortifying Soul",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 11,
              "name": "Chilling Retribution",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Frozen Haunt",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [],
          "levels": [
            {
              "Ranger Level": "3",
              "Prepared Spells": "Ice Knife"
            },
            {
              "Ranger Level": "5",
              "Prepared Spells": "Hold Person"
            },
            {
              "Ranger Level": "9",
              "Prepared Spells": "Remove Curse"
            },
            {
              "Ranger Level": "13",
              "Prepared Spells": "Ice Storm"
            },
            {
              "Ranger Level": "17",
              "Prepared Spells": "Cone of Cold"
            }
          ]
        },
        {
          "id": "trail-warden",
          "name": "Trail Warden",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Trail Warden Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Coordinated Tactics",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Lead the Way",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Tactical Assault",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 11,
              "name": "Coordinated Effort",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Group Assault",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Goodberry"
              ]
            },
            {
              "level": 5,
              "names": [
                "Pass Without Trace"
              ]
            },
            {
              "level": 9,
              "names": [
                "Spirit Guardians"
              ]
            },
            {
              "level": 13,
              "names": [
                "Guardian of Faith"
              ]
            },
            {
              "level": 17,
              "names": [
                "Mass Cure Wounds"
              ]
            }
          ]
        },
        {
          "id": "winter-trapper",
          "name": "Winter Trapper",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Pin Down",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Winter Trapper Magic",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 7,
              "name": "Arctic Predator",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 11,
              "name": "Magic Snare",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 15,
              "name": "Tripped Defenses",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Ice Knife"
              ]
            },
            {
              "level": 5,
              "names": [
                "Mirror Image"
              ]
            },
            {
              "level": 9,
              "names": [
                "Sleet Storm"
              ]
            },
            {
              "level": 13,
              "names": [
                "Hallucinatory Terrain"
              ]
            },
            {
              "level": 17,
              "names": [
                "Hold Monster"
              ]
            }
          ]
        }
      ],
      "spells": [
        {
          "name": "Alarm",
          "level": 1,
          "school": "Abjuration",
          "special": "R"
        },
        {
          "name": "Animal Friendship",
          "level": 1,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Cure Wounds",
          "level": 1,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Detect Magic",
          "level": 1,
          "school": "Divination",
          "special": "C, R"
        },
        {
          "name": "Detect Poison and Disease",
          "level": 1,
          "school": "Divination",
          "special": "C, R"
        },
        {
          "name": "Ensnaring Strike",
          "level": 1,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Entangle",
          "level": 1,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Fog Cloud",
          "level": 1,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Goodberry",
          "level": 1,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Hunter's Mark",
          "level": 1,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Jump",
          "level": 1,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Longstrider",
          "level": 1,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Speak with Animals",
          "level": 1,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Aid",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Animal Messenger",
          "level": 2,
          "school": "Enchantment",
          "special": "R"
        },
        {
          "name": "Barkskin",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Darkvision",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Enhance Ability",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Find Traps",
          "level": 2,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Gust of Wind",
          "level": 2,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Lesser Restoration",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Locate Animals or Plants",
          "level": 2,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Locate Object",
          "level": 2,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Magic Weapon",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Pass without Trace",
          "level": 2,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Protection from Poison",
          "level": 2,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Silence",
          "level": 2,
          "school": "Illusion",
          "special": "C, R"
        },
        {
          "name": "Spike Growth",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Conjure Animals",
          "level": 3,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Daylight",
          "level": 3,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Dispel Magic",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Meld into Stone",
          "level": 3,
          "school": "Transmutation",
          "special": "R"
        },
        {
          "name": "Nondetection",
          "level": 3,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Plant Growth",
          "level": 3,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Protection from Energy",
          "level": 3,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Revivify",
          "level": 3,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Speak with Plants",
          "level": 3,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Water Breathing",
          "level": 3,
          "school": "Transmutation",
          "special": "R"
        },
        {
          "name": "Water Walk",
          "level": 3,
          "school": "Transmutation",
          "special": "R"
        },
        {
          "name": "Wind Wall",
          "level": 3,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Conjure Woodland Beings",
          "level": 4,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Dominate Beast",
          "level": 4,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Freedom of Movement",
          "level": 4,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Locate Creature",
          "level": 4,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Stoneskin",
          "level": 4,
          "school": "Transmutation",
          "special": "C, M"
        },
        {
          "name": "Commune with Nature",
          "level": 5,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Greater Restoration",
          "level": 5,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Tree Stride",
          "level": 5,
          "school": "Conjuration",
          "special": "C"
        }
      ],
      "features": [
        {
          "level": 1,
          "name": "Spellcasting",
          "source": "SRD 5.2.1",
          "text": "You have learned to channel the magical essence of nature to cast spells. See \"Spells\" for the rules on spellcasting. The information below details how you use those rules with Ranger spells, which appear in the Ranger spell list later in the class's description.\n\nSpell Slots. The Ranger Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\nPrepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Ranger spells. Cure Wounds and Ensnaring Strike are recommended.\n\nThe number of spells on your list increases as you gain Ranger levels, as shown in the Prepared Spells column of the Ranger Features table. Whenever that number increases, choose additional Ranger spells until the number of spells on your list matches the number in the Ranger Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 5 Ranger, your list of prepared spells can include six Ranger spells of level 1 or 2 in any combination.\n\nIf another Ranger feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Ranger spells for you.\n\nChanging Your Prepared Spells. Whenever you finish a Long Rest, you can replace one spell on your list with another Ranger spell for which you have spell slots.\n\nSpellcasting Ability. Wisdom is your spellcasting ability for your Ranger spells.\n\nSpellcasting Focus. You can use a Druidic Focus as a Spellcasting Focus for your Ranger spells."
        },
        {
          "level": 1,
          "name": "Favored Enemy",
          "source": "SRD 5.2.1",
          "text": "You always have the Hunter's Mark spell prepared. You can cast it twice without expending a spell slot, and you regain all expended uses of this ability when you finish a Long Rest.\n\nThe number of times you can cast the spell without a spell slot increases when you reach certain Ranger levels, as shown in the Favored Enemy column of the Ranger Features table."
        },
        {
          "level": 1,
          "name": "Weapon Mastery",
          "source": "SRD 5.2.1",
          "text": "Your training with weapons allows you to use the mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Longbows and Shortswords.\n\nWhenever you finish a Long Rest, you can change the kinds of weapons you chose. For example, you could switch to using the mastery properties of Scimitars and Longswords."
        },
        {
          "level": 2,
          "name": "Deft Explorer",
          "source": "SRD 5.2.1",
          "text": "Thanks to your travels, you gain the following benefits.\n\nExpertise. Choose one of your skill proficiencies with which you lack Expertise. You gain Expertise in that skill.\n\nLanguages. You know two languages of your choice from the language tables in \"Character Creation.\""
        },
        {
          "level": 2,
          "name": "Fighting Style",
          "source": "SRD 5.2.1",
          "text": "You gain a Fighting Style feat of your choice (see \"Feats\"). Instead of choosing one of those feats, you can choose the option below.\n\nDruidic Warrior. You learn two Druid cantrips of your choice (see the Druid class's section for a list of Druid spells). Guidance and Starry Wisp are recommended. The chosen cantrips count as Ranger spells for you, and Wisdom is your spellcasting ability for them. Whenever you gain a Ranger level, you can replace one of these cantrips with another Druid cantrip."
        },
        {
          "level": 3,
          "name": "Ranger Subclass",
          "source": "SRD 5.2.1",
          "text": "You gain a Ranger subclass of your choice. The Hunter subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Ranger levels. For the rest of your career, you gain each of your subclass's features that are of your Ranger level or lower."
        },
        {
          "level": 4,
          "name": "Ability Score Improvement",
          "source": "SRD 5.2.1",
          "text": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You gain this feature again at Ranger levels 8, 12, and 16."
        },
        {
          "level": 5,
          "name": "Extra Attack",
          "source": "SRD 5.2.1",
          "text": "You can attack twice instead of once whenever you take the Attack action on your turn."
        },
        {
          "level": 6,
          "name": "Roving",
          "source": "SRD 5.2.1",
          "text": "Your Speed increases by 10 feet while you aren't wearing Heavy armor. You also have a Climb Speed and a Swim Speed equal to your Speed."
        },
        {
          "level": 9,
          "name": "Expertise",
          "source": "SRD 5.2.1",
          "text": "Choose two of your skill proficiencies with which you lack Expertise. You gain Expertise in those skills."
        },
        {
          "level": 10,
          "name": "Tireless",
          "source": "SRD 5.2.1",
          "text": "Primal forces now help fuel you on your journeys, granting you the following benefits.\n\nTemporary Hit Points. As a Magic action, you can give yourself a number of Temporary Hit Points equal to 1d8 plus your Wisdom modifier (minimum of 1). You can use this action a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.\n\nDecrease Exhaustion. Whenever you finish a Short Rest, your Exhaustion level, if any, decreases by 1."
        },
        {
          "level": 13,
          "name": "Relentless Hunter",
          "source": "SRD 5.2.1",
          "text": "Taking damage can't break your Concentration on Hunter's Mark."
        },
        {
          "level": 14,
          "name": "Nature's Veil",
          "source": "SRD 5.2.1",
          "text": "You invoke spirits of nature to magically hide yourself. As a Bonus Action, you can give yourself the Invisible condition until the end of your next turn. You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest."
        },
        {
          "level": 17,
          "name": "Precise Hunter",
          "source": "SRD 5.2.1",
          "text": "You have Advantage on attack rolls against the creature currently marked by your Hunter's Mark."
        },
        {
          "level": 18,
          "name": "Feral Senses",
          "source": "SRD 5.2.1",
          "text": "Your connection to the forces of nature grants you Blindsight with a range of 30 feet."
        },
        {
          "level": 19,
          "name": "Epic Boon",
          "source": "SRD 5.2.1",
          "text": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Dimensional Travel is recommended."
        },
        {
          "level": 20,
          "name": "Foe Slayer",
          "source": "SRD 5.2.1",
          "text": "The damage die of your Hunter's Mark is a d10 rather than a d6."
        }
      ],
      "options": []
    },
    "rogue": {
      "name": "Rogue",
      "levels": [
        {
          "Level": "1",
          "Proficiency Bonus": "+2",
          "Class Features": "Expertise, Sneak Attack, Thieves' Cant, Weapon Mastery",
          "Sneak Attack": "1d6"
        },
        {
          "Level": "2",
          "Proficiency Bonus": "+2",
          "Class Features": "Cunning Action",
          "Sneak Attack": "1d6"
        },
        {
          "Level": "3",
          "Proficiency Bonus": "+2",
          "Class Features": "Rogue Subclass, Steady Aim",
          "Sneak Attack": "2d6"
        },
        {
          "Level": "4",
          "Proficiency Bonus": "+2",
          "Class Features": "Ability Score Improvement",
          "Sneak Attack": "2d6"
        },
        {
          "Level": "5",
          "Proficiency Bonus": "+3",
          "Class Features": "Cunning Strike, Uncanny Dodge",
          "Sneak Attack": "3d6"
        },
        {
          "Level": "6",
          "Proficiency Bonus": "+3",
          "Class Features": "Expertise",
          "Sneak Attack": "3d6"
        },
        {
          "Level": "7",
          "Proficiency Bonus": "+3",
          "Class Features": "Evasion, Reliable Talent",
          "Sneak Attack": "4d6"
        },
        {
          "Level": "8",
          "Proficiency Bonus": "+3",
          "Class Features": "Ability Score Improvement",
          "Sneak Attack": "4d6"
        },
        {
          "Level": "9",
          "Proficiency Bonus": "+4",
          "Class Features": "Subclass feature",
          "Sneak Attack": "5d6"
        },
        {
          "Level": "10",
          "Proficiency Bonus": "+4",
          "Class Features": "Ability Score Improvement",
          "Sneak Attack": "5d6"
        },
        {
          "Level": "11",
          "Proficiency Bonus": "+4",
          "Class Features": "Improved Cunning Strike",
          "Sneak Attack": "6d6"
        },
        {
          "Level": "12",
          "Proficiency Bonus": "+4",
          "Class Features": "Ability Score Improvement",
          "Sneak Attack": "6d6"
        },
        {
          "Level": "13",
          "Proficiency Bonus": "+5",
          "Class Features": "Subclass feature",
          "Sneak Attack": "7d6"
        },
        {
          "Level": "14",
          "Proficiency Bonus": "+5",
          "Class Features": "Devious Strikes",
          "Sneak Attack": "7d6"
        },
        {
          "Level": "15",
          "Proficiency Bonus": "+5",
          "Class Features": "Slippery Mind",
          "Sneak Attack": "8d6"
        },
        {
          "Level": "16",
          "Proficiency Bonus": "+5",
          "Class Features": "Ability Score Improvement",
          "Sneak Attack": "8d6"
        },
        {
          "Level": "17",
          "Proficiency Bonus": "+6",
          "Class Features": "Subclass feature",
          "Sneak Attack": "9d6"
        },
        {
          "Level": "18",
          "Proficiency Bonus": "+6",
          "Class Features": "Elusive",
          "Sneak Attack": "9d6"
        },
        {
          "Level": "19",
          "Proficiency Bonus": "+6",
          "Class Features": "Epic Boon",
          "Sneak Attack": "10d6"
        },
        {
          "Level": "20",
          "Proficiency Bonus": "+6",
          "Class Features": "Stroke of Luck",
          "Sneak Attack": "10d6"
        }
      ],
      "subclasses": [
        {
          "id": "thief",
          "name": "Thief",
          "source": "SRD 5.2.1",
          "features": [
            {
              "level": 3,
              "name": "Fast Hands",
              "source": "SRD 5.2.1",
              "text": "As a Bonus Action, you can do one of the following.\n\nSleight of Hand. Make a Dexterity (Sleight of Hand) check to pick a lock or disarm a trap with Thieves' Tools or to pick a pocket.\n\nUse an Object. Take the Utilize action, or take the Magic action to use a magic item that requires that action."
            },
            {
              "level": 3,
              "name": "Second-Story Work",
              "source": "SRD 5.2.1",
              "text": "You've trained to get into especially hard-to-reach places, granting you these benefits.\n\nClimber. You gain a Climb Speed equal to your Speed.\n\nJumper. You can determine your jump distance using your Dexterity rather than your Strength."
            },
            {
              "level": 9,
              "name": "Supreme Sneak",
              "source": "SRD 5.2.1",
              "text": "You gain the following Cunning Strike option.\n\nStealth Attack (Cost: 1d6). If you have the Hide action's Invisible condition, this attack doesn't end that condition on you if you end the turn behind Three-Quarters Cover or Total Cover."
            },
            {
              "level": 13,
              "name": "Use Magic Device",
              "source": "SRD 5.2.1",
              "text": "You've learned how to maximize use of magic items, granting you the following benefits.\n\nAttunement. You can attune to up to four magic items at once.\n\nCharges. Whenever you use a magic item property that expends charges, roll 1d6. On a roll of 6, you use the property without expending the charges.\n\nScrolls. You can use any Spell Scroll, using Intelligence as your spellcasting ability for the spell. If the spell is a cantrip or a level 1 spell, you can cast it reliably. If the scroll contains a higher-level spell, you must first succeed on an Intelligence (Arcana) check (DC 10 plus the spell's level). On a successful check, you cast the spell from the scroll. On a failed check, the scroll disintegrates."
            },
            {
              "level": 17,
              "name": "Thief's Reflexes",
              "source": "SRD 5.2.1",
              "text": "You are adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal Initiative and your second turn at your Initiative minus 10."
            }
          ],
          "spells": []
        },
        {
          "id": "arcane-trickster",
          "name": "Arcane Trickster",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Spellcasting",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Mage Hand Legerdemain",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 9,
              "name": "Magical Ambush",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 13,
              "name": "Versatile Trickster",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 17,
              "name": "Spell Thief",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [],
          "levels": [
            {
              "1": "2",
              "2": "—",
              "3": "—",
              "4": "—",
              "Rogue Level": "3",
              "Prepared Spells": "3"
            },
            {
              "1": "3",
              "2": "—",
              "3": "—",
              "4": "—",
              "Rogue Level": "4",
              "Prepared Spells": "4"
            },
            {
              "1": "3",
              "2": "—",
              "3": "—",
              "4": "—",
              "Rogue Level": "5",
              "Prepared Spells": "4"
            },
            {
              "1": "3",
              "2": "—",
              "3": "—",
              "4": "—",
              "Rogue Level": "6",
              "Prepared Spells": "4"
            },
            {
              "1": "4",
              "2": "2",
              "3": "—",
              "4": "—",
              "Rogue Level": "7",
              "Prepared Spells": "5"
            },
            {
              "1": "4",
              "2": "2",
              "3": "—",
              "4": "—",
              "Rogue Level": "8",
              "Prepared Spells": "6"
            },
            {
              "1": "4",
              "2": "2",
              "3": "—",
              "4": "—",
              "Rogue Level": "9",
              "Prepared Spells": "6"
            },
            {
              "1": "4",
              "2": "3",
              "3": "—",
              "4": "—",
              "Rogue Level": "10",
              "Prepared Spells": "7"
            },
            {
              "1": "4",
              "2": "3",
              "3": "—",
              "4": "—",
              "Rogue Level": "11",
              "Prepared Spells": "8"
            },
            {
              "1": "4",
              "2": "3",
              "3": "—",
              "4": "—",
              "Rogue Level": "12",
              "Prepared Spells": "8"
            },
            {
              "1": "4",
              "2": "3",
              "3": "2",
              "4": "—",
              "Rogue Level": "13",
              "Prepared Spells": "9"
            },
            {
              "1": "4",
              "2": "3",
              "3": "2",
              "4": "—",
              "Rogue Level": "14",
              "Prepared Spells": "10"
            },
            {
              "1": "4",
              "2": "3",
              "3": "2",
              "4": "—",
              "Rogue Level": "15",
              "Prepared Spells": "10"
            },
            {
              "1": "4",
              "2": "3",
              "3": "3",
              "4": "—",
              "Rogue Level": "16",
              "Prepared Spells": "11"
            },
            {
              "1": "4",
              "2": "3",
              "3": "3",
              "4": "—",
              "Rogue Level": "17",
              "Prepared Spells": "11"
            },
            {
              "1": "4",
              "2": "3",
              "3": "3",
              "4": "—",
              "Rogue Level": "18",
              "Prepared Spells": "11"
            },
            {
              "1": "4",
              "2": "3",
              "3": "3",
              "4": "1",
              "Rogue Level": "19",
              "Prepared Spells": "12"
            },
            {
              "1": "4",
              "2": "3",
              "3": "3",
              "4": "1",
              "Rogue Level": "20",
              "Prepared Spells": "13"
            }
          ]
        },
        {
          "id": "assassin",
          "name": "Assassin",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Assassinate",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Assassin's Tools",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 9,
              "name": "Infiltration Expertise",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 13,
              "name": "Envenom Weapons",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 17,
              "name": "Death Strike",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "scion-of-the-three",
          "name": "Scion of the Three",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Bloodthirst",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Dread Allegiance",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 9,
              "name": "Strike Fear",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 13,
              "name": "Aura of Malevolence",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 17,
              "name": "Dread Incarnate",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "soulknife",
          "name": "Soulknife",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Psionic Power",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Psychic Blades",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 9,
              "name": "Soul Blades",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 13,
              "name": "Psychic Veil",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 17,
              "name": "Rend Mind",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "runetagger",
          "name": "Runetagger",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Impressionist",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Runes",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 9,
              "name": "Escape Artist",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 13,
              "name": "Resourceful",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 17,
              "name": "Lead Paint",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "shadow-stalker",
          "name": "Shadow Stalker",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Shadowy Reflection",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Shadow Motes",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 9,
              "name": "Shadowed Succor",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 13,
              "name": "Shadow Gate",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 17,
              "name": "True Shadow",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "swashbuckler",
          "name": "Swashbuckler",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Fancy Footwork",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Rakish Audacity",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 9,
              "name": "Panache",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 13,
              "name": "Elegant Maneuver",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 17,
              "name": "Master Duelist",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        }
      ],
      "spells": [],
      "features": [
        {
          "level": 1,
          "name": "Expertise",
          "source": "SRD 5.2.1",
          "text": "You gain Expertise in two of your skill proficiencies of your choice. Sleight of Hand and Stealth are recommended if you have proficiency in them.\n\nAt Rogue level 6, you gain Expertise in two more of your skill proficiencies of your choice."
        },
        {
          "level": 1,
          "name": "Sneak Attack",
          "source": "SRD 5.2.1",
          "text": "You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack roll if you have Advantage on the roll and the attack uses a Finesse or a Ranged weapon. The extra damage's type is the same as the weapon's type.\n\nYou don't need Advantage on the attack roll if at least one of your allies is within 5 feet of the target, the ally doesn't have the Incapacitated condition, and you don't have Disadvantage on the attack roll. The extra damage increases as you gain Rogue levels, as shown in the Sneak Attack column of the Rogue Features table."
        },
        {
          "level": 1,
          "name": "Thieves' Cant",
          "source": "SRD 5.2.1",
          "text": "You picked up various languages in the communities where you plied your roguish talents. You know Thieves' Cant and one other language of your choice, which you choose from the language tables in \"Character Creation.\""
        },
        {
          "level": 1,
          "name": "Weapon Mastery",
          "source": "SRD 5.2.1",
          "text": "Your training with weapons allows you to use the mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Daggers and Shortbows.\n\nWhenever you finish a Long Rest, you can change the kinds of weapons you chose. For example, you could switch to using the mastery properties of Scimitars and Shortswords."
        },
        {
          "level": 2,
          "name": "Cunning Action",
          "source": "SRD 5.2.1",
          "text": "Your quick thinking and agility allow you to move and act quickly. On your turn, you can take one of the following actions as a Bonus Action: Dash, Disengage, or Hide."
        },
        {
          "level": 3,
          "name": "Rogue Subclass",
          "source": "SRD 5.2.1",
          "text": "You gain a Rogue subclass of your choice. The Thief subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Rogue levels. For the rest of your career, you gain each of your subclass's features that are of your Rogue level or lower."
        },
        {
          "level": 3,
          "name": "Steady Aim",
          "source": "SRD 5.2.1",
          "text": "As a Bonus Action, you give yourself Advantage on your next attack roll on the current turn. You can use this feature only if you haven't moved during this turn, and after you use it, your Speed is 0 until the end of the current turn."
        },
        {
          "level": 4,
          "name": "Ability Score Improvement",
          "source": "SRD 5.2.1",
          "text": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You gain this feature again at Rogue levels 8, 10, 12, and 16."
        },
        {
          "level": 5,
          "name": "Cunning Strike",
          "source": "SRD 5.2.1",
          "text": "You've developed cunning ways to use your Sneak Attack. When you deal Sneak Attack damage, you can add one of the following Cunning Strike effects. Each effect has a die cost, which is the number of Sneak Attack damage dice you must forgo to add the effect. You remove the die before rolling, and the effect occurs immediately after the attack's damage is dealt. For example, if you add the Poison effect, remove 1d6 from the Sneak Attack's damage before rolling.\n\nIf a Cunning Strike effect requires a saving throw, the DC equals 8 plus your Dexterity modifier and Proficiency Bonus.\n\nPoison (Cost: 1d6). You add a toxin to your strike, forcing the target to make a Constitution saving throw. On a failed save, the target has the Poisoned condition for 1 minute. At the end of each of its turns, the Poisoned target repeats the save, ending the effect on itself on a success.\n\nTo use this effect, you must have a Poisoner's Kit on your person.\n\nTrip (Cost: 1d6). If the target is Large or smaller, it must succeed on a Dexterity saving throw or have the Prone condition.\n\nWithdraw (Cost: 1d6). Immediately after the attack, you move up to half your Speed without provoking Opportunity Attacks."
        },
        {
          "level": 5,
          "name": "Uncanny Dodge",
          "source": "SRD 5.2.1",
          "text": "When an attacker that you can see hits you with an attack roll, you can take a Reaction to halve the attack's damage against you (round down)."
        },
        {
          "level": 7,
          "name": "Evasion",
          "source": "SRD 5.2.1",
          "text": "You can nimbly dodge out of the way of certain dangers. When you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail. You can't use this feature if you have the Incapacitated condition."
        },
        {
          "level": 7,
          "name": "Reliable Talent",
          "source": "SRD 5.2.1",
          "text": "Whenever you make an ability check that uses one of your skill or tool proficiencies, you can treat a d20 roll of 9 or lower as a 10."
        },
        {
          "level": 11,
          "name": "Improved Cunning Strike",
          "source": "SRD 5.2.1",
          "text": "You can use up to two Cunning Strike effects when you deal Sneak Attack damage, paying the die cost for each effect."
        },
        {
          "level": 14,
          "name": "Devious Strikes",
          "source": "SRD 5.2.1",
          "text": "You've practiced new ways to use your Sneak Attack deviously. The following effects are now among your Cunning Strike options.\n\nDaze (Cost: 2d6). The target must succeed on a Constitution saving throw, or on its next turn, it can do only one of the following: move or take an action or a Bonus Action.\n\nKnock Out (Cost: 6d6). The target must succeed on a Constitution saving throw, or it has the Unconscious condition for 1 minute or until it takes any damage. The Unconscious target repeats the save at the end of each of its turns, ending the effect on itself on a success.\n\nObscure (Cost: 3d6). The target must succeed on a Dexterity saving throw, or it has the Blinded condition until the end of its next turn."
        },
        {
          "level": 15,
          "name": "Slippery Mind",
          "source": "SRD 5.2.1",
          "text": "Your cunning mind is exceptionally difficult to control. You gain proficiency in Wisdom and Charisma saving throws."
        },
        {
          "level": 18,
          "name": "Elusive",
          "source": "SRD 5.2.1",
          "text": "You're so evasive that attackers rarely gain the upper hand against you. No attack roll can have Advantage against you unless you have the Incapacitated condition."
        },
        {
          "level": 19,
          "name": "Epic Boon",
          "source": "SRD 5.2.1",
          "text": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of the Night Spirit is recommended."
        },
        {
          "level": 20,
          "name": "Stroke of Luck",
          "source": "SRD 5.2.1",
          "text": "You have a marvelous knack for succeeding when you need to. If you fail a D20 Test, you can turn the roll into a 20.\n\nOnce you use this feature, you can't use it again until you finish a Short or Long Rest."
        }
      ],
      "options": []
    },
    "sorcerer": {
      "name": "Sorcerer",
      "levels": [
        {
          "1": "2",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "1",
          "Proficiency Bonus": "+2",
          "Class Features": "Spellcasting, Innate Sorcery",
          "Sorcery Points": "—",
          "Cantrips": "4",
          "Prepared Spells": "2"
        },
        {
          "1": "3",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "2",
          "Proficiency Bonus": "+2",
          "Class Features": "Font of Magic, Metamagic",
          "Sorcery Points": "2",
          "Cantrips": "4",
          "Prepared Spells": "4"
        },
        {
          "1": "4",
          "2": "2",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "3",
          "Proficiency Bonus": "+2",
          "Class Features": "Sorcerer Subclass",
          "Sorcery Points": "3",
          "Cantrips": "4",
          "Prepared Spells": "6"
        },
        {
          "1": "4",
          "2": "3",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "4",
          "Proficiency Bonus": "+2",
          "Class Features": "Ability Score Improvement",
          "Sorcery Points": "4",
          "Cantrips": "5",
          "Prepared Spells": "7"
        },
        {
          "1": "4",
          "2": "3",
          "3": "2",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "5",
          "Proficiency Bonus": "+3",
          "Class Features": "Sorcerous Restoration",
          "Sorcery Points": "5",
          "Cantrips": "5",
          "Prepared Spells": "9"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "6",
          "Proficiency Bonus": "+3",
          "Class Features": "Subclass feature",
          "Sorcery Points": "6",
          "Cantrips": "5",
          "Prepared Spells": "10"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "1",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "7",
          "Proficiency Bonus": "+3",
          "Class Features": "Sorcery Incarnate",
          "Sorcery Points": "7",
          "Cantrips": "5",
          "Prepared Spells": "11"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "2",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "8",
          "Proficiency Bonus": "+3",
          "Class Features": "Ability Score Improvement",
          "Sorcery Points": "8",
          "Cantrips": "5",
          "Prepared Spells": "12"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "1",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "9",
          "Proficiency Bonus": "+4",
          "Class Features": "—",
          "Sorcery Points": "9",
          "Cantrips": "5",
          "Prepared Spells": "14"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "10",
          "Proficiency Bonus": "+4",
          "Class Features": "Metamagic",
          "Sorcery Points": "10",
          "Cantrips": "6",
          "Prepared Spells": "15"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "11",
          "Proficiency Bonus": "+4",
          "Class Features": "—",
          "Sorcery Points": "11",
          "Cantrips": "6",
          "Prepared Spells": "16"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "12",
          "Proficiency Bonus": "+4",
          "Class Features": "Ability Score Improvement",
          "Sorcery Points": "12",
          "Cantrips": "6",
          "Prepared Spells": "16"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "—",
          "9": "—",
          "Level": "13",
          "Proficiency Bonus": "+5",
          "Class Features": "—",
          "Sorcery Points": "13",
          "Cantrips": "6",
          "Prepared Spells": "17"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "—",
          "9": "—",
          "Level": "14",
          "Proficiency Bonus": "+5",
          "Class Features": "Subclass feature",
          "Sorcery Points": "14",
          "Cantrips": "6",
          "Prepared Spells": "17"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "—",
          "Level": "15",
          "Proficiency Bonus": "+5",
          "Class Features": "—",
          "Sorcery Points": "15",
          "Cantrips": "6",
          "Prepared Spells": "18"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "—",
          "Level": "16",
          "Proficiency Bonus": "+5",
          "Class Features": "Ability Score Improvement",
          "Sorcery Points": "16",
          "Cantrips": "6",
          "Prepared Spells": "18"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "17",
          "Proficiency Bonus": "+6",
          "Class Features": "Metamagic",
          "Sorcery Points": "17",
          "Cantrips": "6",
          "Prepared Spells": "19"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "18",
          "Proficiency Bonus": "+6",
          "Class Features": "Subclass feature",
          "Sorcery Points": "18",
          "Cantrips": "6",
          "Prepared Spells": "20"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "2",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "19",
          "Proficiency Bonus": "+6",
          "Class Features": "Epic Boon",
          "Sorcery Points": "19",
          "Cantrips": "6",
          "Prepared Spells": "21"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "2",
          "7": "2",
          "8": "1",
          "9": "1",
          "Level": "20",
          "Proficiency Bonus": "+6",
          "Class Features": "Arcane Apotheosis",
          "Sorcery Points": "20",
          "Cantrips": "6",
          "Prepared Spells": "22"
        }
      ],
      "subclasses": [
        {
          "id": "draconic-sorcery",
          "name": "Draconic Sorcery",
          "source": "SRD 5.2.1",
          "features": [
            {
              "level": 3,
              "name": "Draconic Resilience",
              "source": "SRD 5.2.1",
              "text": "The magic in your body manifests physical traits of your draconic gift. Your Hit Point maximum increases by 3, and it increases by 1 whenever you gain another Sorcerer level.\n\nParts of you are also covered by dragon-like scales. While you aren't wearing armor, your base Armor Class equals 10 plus your Dexterity and Charisma modifiers."
            },
            {
              "level": 3,
              "name": "Draconic Spells",
              "source": "SRD 5.2.1",
              "text": "When you reach a Sorcerer level specified in the Draconic Spells table, you thereafter always have the listed spells prepared.\n\nDraconic Spells"
            },
            {
              "level": 6,
              "name": "Elemental Affinity",
              "source": "SRD 5.2.1",
              "text": "Your draconic magic has an affinity with a damage type associated with dragons. Choose one of those types: Acid, Cold, Fire, Lightning, or Poison.\n\nYou have Resistance to that damage type, and when you cast a spell that deals damage of that type, you can add your Charisma modifier to one damage roll of that spell."
            },
            {
              "level": 14,
              "name": "Dragon Wings",
              "source": "SRD 5.2.1",
              "text": "As a Bonus Action, you can cause draconic wings to appear on your back. The wings last for 1 hour or until you dismiss them (no action required). For the duration, you have a Fly Speed of 60 feet.\n\nOnce you use this feature, you can't use it again until you finish a Long Rest unless you spend 3 Sorcery Points (no action required) to restore your use of it."
            },
            {
              "level": 18,
              "name": "Dragon Companion",
              "source": "SRD 5.2.1",
              "text": "You can cast Summon Dragon without a Material component. You can also cast it once without a spell slot, and you regain the ability to cast it in this way when you finish a Long Rest.\n\nWhenever you start casting the spell, you can modify it so that it doesn't require Concentration. If you do so, the spell's duration becomes 1 minute for that casting."
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Alter Self",
                "Chromatic Orb",
                "Command",
                "Dragon's Breath"
              ]
            },
            {
              "level": 5,
              "names": [
                "Fear",
                "Fly"
              ]
            },
            {
              "level": 7,
              "names": [
                "Arcane Eye",
                "Charm Monster"
              ]
            },
            {
              "level": 9,
              "names": [
                "Legend Lore",
                "Summon Dragon"
              ]
            }
          ]
        },
        {
          "id": "aberrant-sorcery",
          "name": "Aberrant Sorcery",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Psionic Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Telepathic Speech",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 6,
              "name": "Psionic Sorcery",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 6,
              "name": "Psychic Defenses",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 14,
              "name": "Revelation in Flesh",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 18,
              "name": "Warping Implosion",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Arms of Hadar",
                "Calm Emotions",
                "Detect Thoughts",
                "Dissonant Whispers",
                "Mind Sliver"
              ]
            },
            {
              "level": 5,
              "names": [
                "Hunger of Hadar",
                "Sending"
              ]
            },
            {
              "level": 7,
              "names": [
                "Evard's Black Tentacles",
                "Summon Aberration"
              ]
            },
            {
              "level": 9,
              "names": [
                "Rary's Telepathic Bond",
                "Telekinesis"
              ]
            }
          ]
        },
        {
          "id": "clockwork-sorcery",
          "name": "Clockwork Sorcery",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Clockwork Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Restore Balance",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 6,
              "name": "Bastion of Law",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 14,
              "name": "Trance of Order",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 18,
              "name": "Clockwork Cavalcade",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Aid",
                "Alarm",
                "Lesser Restoration",
                "Protection from Evil and Good"
              ]
            },
            {
              "level": 5,
              "names": [
                "Dispel Magic",
                "Protection from Energy"
              ]
            },
            {
              "level": 7,
              "names": [
                "Freedom of Movement",
                "Summon Construct"
              ]
            },
            {
              "level": 9,
              "names": [
                "Greater Restoration",
                "Wall of Force"
              ]
            }
          ]
        },
        {
          "id": "spellfire-sorcery",
          "name": "Spellfire Sorcery",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Spellfire Burst",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Spellfire Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 6,
              "name": "Absorb Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 14,
              "name": "Honed Spellfire",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 18,
              "name": "Crown of Spellfire",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Cure Wounds",
                "Guiding Bolt",
                "Lesser Restoration",
                "Scorching Ray"
              ]
            },
            {
              "level": 5,
              "names": [
                "Aura of Vitality",
                "Dispel Magic"
              ]
            },
            {
              "level": 7,
              "names": [
                "Fire Shield",
                "Wall of Fire"
              ]
            },
            {
              "level": 9,
              "names": [
                "Greater Restoration",
                "Flame Strike"
              ]
            }
          ]
        },
        {
          "id": "wild-magic-sorcery",
          "name": "Wild Magic Sorcery",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Wild Magic Surge",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Tides of Chaos",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 6,
              "name": "Bend Luck",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 14,
              "name": "Controlled Chaos",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 18,
              "name": "Tamed Surge",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": []
        },
        {
          "id": "frost-sorcery",
          "name": "Frost Sorcery",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Create Ice",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Frost Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Frozen Body",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 6,
              "name": "Cold-Hearted",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 14,
              "name": "Flash Freeze",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 18,
              "name": "Frozen Soul",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Blindness/Deafness",
                "Ice Knife",
                "Misty Step",
                "Sleep"
              ]
            },
            {
              "level": 5,
              "names": [
                "Sleet Storm",
                "Slow"
              ]
            },
            {
              "level": 7,
              "names": [
                "Fire Shield",
                "Ice Storm"
              ]
            },
            {
              "level": 9,
              "names": [
                "Cone of Cold",
                "Conjure Elemental (Cold damage only)"
              ]
            }
          ]
        },
        {
          "id": "hungering-dark",
          "name": "Hungering Dark",
          "source": "Campaign supplement (non-SRD)",
          "features": [
            {
              "level": 3,
              "name": "Innate Darkness Spells",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 3,
              "name": "Shadowed Soul",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 6,
              "name": "Friends to Darkness",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 14,
              "name": "Pure Darkness",
              "source": "Campaign supplement (non-SRD)"
            },
            {
              "level": 18,
              "name": "One with Darkness",
              "source": "Campaign supplement (non-SRD)"
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Confounding Shadows*",
                "Darkness",
                "Tide of Darkness*",
                "Umbral Tendril*"
              ]
            },
            {
              "level": 5,
              "names": [
                "Fear",
                "Shadowy Eruption*"
              ]
            },
            {
              "level": 7,
              "names": [
                "Black Tentacles",
                "Greater Invisibility"
              ]
            },
            {
              "level": 9,
              "names": [
                "Mislead",
                "Summon Shadow*"
              ]
            }
          ]
        }
      ],
      "spells": [
        {
          "name": "Acid Splash",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Chill Touch",
          "level": 0,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Dancing Lights",
          "level": 0,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Elementalism",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Fire Bolt",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Light",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Mage Hand",
          "level": 0,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Mending",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Message",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Minor Illusion",
          "level": 0,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Poison Spray",
          "level": 0,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Prestidigitation",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Ray of Frost",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Shocking Grasp",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Sorcerous Burst",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "True Strike",
          "level": 0,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Burning Hands",
          "level": 1,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Charm Person",
          "level": 1,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Chromatic Orb",
          "level": 1,
          "school": "Evocation",
          "special": "M"
        },
        {
          "name": "Color Spray",
          "level": 1,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Comprehend Languages",
          "level": 1,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Detect Magic",
          "level": 1,
          "school": "Divination",
          "special": "C, R"
        },
        {
          "name": "Disguise Self",
          "level": 1,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Expeditious Retreat",
          "level": 1,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "False Life",
          "level": 1,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Feather Fall",
          "level": 1,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Fog Cloud",
          "level": 1,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Grease",
          "level": 1,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Ice Knife",
          "level": 1,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Jump",
          "level": 1,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Mage Armor",
          "level": 1,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Magic Missile",
          "level": 1,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Ray of Sickness",
          "level": 1,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Shield",
          "level": 1,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Silent Image",
          "level": 1,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Sleep",
          "level": 1,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Thunderwave",
          "level": 1,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Alter Self",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Blindness/Deafness",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Blur",
          "level": 2,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Darkness",
          "level": 2,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Darkvision",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Detect Thoughts",
          "level": 2,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Dragon's Breath",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Enhance Ability",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Enlarge/Reduce",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Flame Blade",
          "level": 2,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Flaming Sphere",
          "level": 2,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Gust of Wind",
          "level": 2,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Hold Person",
          "level": 2,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Invisibility",
          "level": 2,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Knock",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Levitate",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Magic Weapon",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Mirror Image",
          "level": 2,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Misty Step",
          "level": 2,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Scorching Ray",
          "level": 2,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "See Invisibility",
          "level": 2,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Shatter",
          "level": 2,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Spider Climb",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Suggestion",
          "level": 2,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Web",
          "level": 2,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Blink",
          "level": 3,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Clairvoyance",
          "level": 3,
          "school": "Divination",
          "special": "C, M"
        },
        {
          "name": "Counterspell",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Daylight",
          "level": 3,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Dispel Magic",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Fear",
          "level": 3,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Fireball",
          "level": 3,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Fly",
          "level": 3,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Gaseous Form",
          "level": 3,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Haste",
          "level": 3,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Hypnotic Pattern",
          "level": 3,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Lightning Bolt",
          "level": 3,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Major Image",
          "level": 3,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Protection from Energy",
          "level": 3,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Sleet Storm",
          "level": 3,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Slow",
          "level": 3,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Stinking Cloud",
          "level": 3,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Tongues",
          "level": 3,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Vampiric Touch",
          "level": 3,
          "school": "Necromancy",
          "special": "C"
        },
        {
          "name": "Water Breathing",
          "level": 3,
          "school": "Transmutation",
          "special": "R"
        },
        {
          "name": "Water Walk",
          "level": 3,
          "school": "Transmutation",
          "special": "R"
        },
        {
          "name": "Banishment",
          "level": 4,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Blight",
          "level": 4,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Charm Monster",
          "level": 4,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Confusion",
          "level": 4,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Dimension Door",
          "level": 4,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Dominate Beast",
          "level": 4,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Fire Shield",
          "level": 4,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Greater Invisibility",
          "level": 4,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Ice Storm",
          "level": 4,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Polymorph",
          "level": 4,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Stoneskin",
          "level": 4,
          "school": "Transmutation",
          "special": "C, M"
        },
        {
          "name": "Vitriolic Sphere",
          "level": 4,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Wall of Fire",
          "level": 4,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Animate Objects",
          "level": 5,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Arcane Hand",
          "level": 5,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Cloudkill",
          "level": 5,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Cone of Cold",
          "level": 5,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Creation",
          "level": 5,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Dominate Person",
          "level": 5,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Hold Monster",
          "level": 5,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Insect Plague",
          "level": 5,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Seeming",
          "level": 5,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Telekinesis",
          "level": 5,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Teleportation Circle",
          "level": 5,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Wall of Stone",
          "level": 5,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Chain Lightning",
          "level": 6,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Circle of Death",
          "level": 6,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Disintegrate",
          "level": 6,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Eyebite",
          "level": 6,
          "school": "Necromancy",
          "special": "C"
        },
        {
          "name": "Flesh to Stone",
          "level": 6,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Freezing Sphere",
          "level": 6,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Globe of Invulnerability",
          "level": 6,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Mass Suggestion",
          "level": 6,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Move Earth",
          "level": 6,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Sunbeam",
          "level": 6,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "True Seeing",
          "level": 6,
          "school": "Divination",
          "special": "M"
        },
        {
          "name": "Delayed Blast Fireball",
          "level": 7,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Etherealness",
          "level": 7,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Finger of Death",
          "level": 7,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Fire Storm",
          "level": 7,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Plane Shift",
          "level": 7,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Prismatic Spray",
          "level": 7,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Reverse Gravity",
          "level": 7,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Teleport",
          "level": 7,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Demiplane",
          "level": 8,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Dominate Monster",
          "level": 8,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Earthquake",
          "level": 8,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Incendiary Cloud",
          "level": 8,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Power Word Stun",
          "level": 8,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Sunburst",
          "level": 8,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Gate",
          "level": 9,
          "school": "Conjuration",
          "special": "C, M"
        },
        {
          "name": "Meteor Swarm",
          "level": 9,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Power Word Kill",
          "level": 9,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Time Stop",
          "level": 9,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Wish",
          "level": 9,
          "school": "Conjuration",
          "special": "—"
        }
      ],
      "features": [
        {
          "level": 1,
          "name": "Spellcasting",
          "source": "SRD 5.2.1",
          "text": "Drawing from your innate magic, you can cast spells. See \"Spells\" for the rules on spellcasting. The information below details how you use those rules with Sorcerer spells, which appear in the Sorcerer spell list later in the class's description.\n\nCantrips. You know four Sorcerer cantrips of your choice. Light, Prestidigitation, Shocking Grasp, and Sorcerous Burst are recommended. Whenever you gain a Sorcerer level, you can replace one of your cantrips from this feature with another Sorcerer cantrip of your choice.\n\nWhen you reach Sorcerer levels 4 and 10, you learn another Sorcerer cantrip of your choice, as shown in the Cantrips column of the Sorcerer Features table.\n\nSpell Slots. The Sorcerer Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\nPrepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Sorcerer spells. Burning Hands and Detect Magic are recommended.\n\nThe number of spells on your list increases as you gain Sorcerer levels, as shown in the Prepared Spells column of the Sorcerer Features table. Whenever that number increases, choose additional Sorcerer spells until the number of spells on your list matches the number in the Sorcerer Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Sorcerer, your list of prepared spells can include six Sorcerer spells of level 1 or 2 in any combination.\n\nIf another Sorcerer feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Sorcerer spells for you.\n\nChanging Your Prepared Spells. Whenever you gain a Sorcerer level, you can replace one spell on your list with another Sorcerer spell for which you have spell slots.\n\nSpellcasting Ability. Charisma is your spellcasting ability for your Sorcerer spells.\n\nSpellcasting Focus. You can use an Arcane Focus as a Spellcasting Focus for your Sorcerer spells."
        },
        {
          "level": 1,
          "name": "Innate Sorcery",
          "source": "SRD 5.2.1",
          "text": "An event in your past left an indelible mark on you, infusing you with simmering magic. As a Bonus Action, you can unleash that magic for 1 minute, during which you gain the following benefits: • The spell save DC of your Sorcerer spells increases by 1. • You have Advantage on the attack rolls of Sorcerer spells you cast.\n\nYou can use this feature twice, and you regain all expended uses of it when you finish a Long Rest."
        },
        {
          "level": 2,
          "name": "Font of Magic",
          "source": "SRD 5.2.1",
          "text": "You can tap into the wellspring of magic within yourself. This wellspring is represented by Sorcery Points, which allow you to create a variety of magical effects.\n\nYou have 2 Sorcery Points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer Features table. You can't have more Sorcery Points than the number shown in the table for your level. You regain all expended Sorcery Points when you finish a Long Rest.\n\nYou can use your Sorcery Points to fuel the options below, along with other features, such as Metamagic, that use those points.\n\nConverting Spell Slots to Sorcery Points. You can expend a spell slot to gain a number of Sorcery Points equal to the slot's level (no action required).\n\nCreating Spell Slots. As a Bonus Action, you can transform unexpended Sorcery Points into one spell slot. The Creating Spell Slots table shows the cost of creating a spell slot of a given level, and it lists the minimum Sorcerer level you must be to create a slot. You can create a spell slot no higher than level 5.\n\nAny spell slot you create with this feature vanishes when you finish a Long Rest.\n\nCreating Spell Slots"
        },
        {
          "level": 2,
          "name": "Metamagic",
          "source": "SRD 5.2.1",
          "text": "Because your magic flows from within, you can alter your spells to suit your needs; you gain two Metamagic options of your choice from \"Metamagic Options\" later in this class's description. You use the chosen options to temporarily modify spells you cast. To use an option, you must spend the number of Sorcery Points that it costs.\n\nYou can use only one Metamagic option on a spell when you cast it unless otherwise noted in one of those options.\n\nWhenever you gain a Sorcerer level, you can replace one of your Metamagic options with one you don't know. You gain two more options at Sorcerer level 10 and two more at Sorcerer level 17."
        },
        {
          "level": 3,
          "name": "Sorcerer Subclass",
          "source": "SRD 5.2.1",
          "text": "You gain a Sorcerer subclass of your choice. The Draconic Sorcery subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Sorcerer levels. For the rest of your career, you gain each of your subclass's features that are of your Sorcerer level or lower."
        },
        {
          "level": 4,
          "name": "Ability Score Improvement",
          "source": "SRD 5.2.1",
          "text": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You gain this feature again at Sorcerer levels 8, 12, and 16."
        },
        {
          "level": 5,
          "name": "Sorcerous Restoration",
          "source": "SRD 5.2.1",
          "text": "When you finish a Short Rest, you can regain expended Sorcery Points, but no more than a number equal to half your Sorcerer level (round down). Once you use this feature, you can't do so again until you finish a Long Rest."
        },
        {
          "level": 7,
          "name": "Sorcery Incarnate",
          "source": "SRD 5.2.1",
          "text": "If you have no uses of Innate Sorcery left, you can use it if you spend 2 Sorcery Points when you take the Bonus Action to activate it.\n\nIn addition, while your Innate Sorcery feature is active, you can use up to two of your Metamagic options on each spell you cast."
        },
        {
          "level": 19,
          "name": "Epic Boon",
          "source": "SRD 5.2.1",
          "text": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Dimensional Travel is recommended."
        },
        {
          "level": 20,
          "name": "Arcane Apotheosis",
          "source": "SRD 5.2.1",
          "text": "While your Innate Sorcery feature is active, you can use one Metamagic option on each of your turns without spending Sorcery Points on it."
        }
      ],
      "options": [
        {
          "name": "Careful Spell",
          "text": "Cost: 1 Sorcery Point\n\nWhen you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, spend 1 Sorcery Point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell, and it takes no damage if it would normally take half damage on a successful save.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Distant Spell",
          "text": "Cost: 1 Sorcery Point\n\nWhen you cast a spell that has a range of at least 5 feet, you can spend 1 Sorcery Point to double the spell's range. Or when you cast a spell that has a range of Touch, you can spend 1 Sorcery Point to make the spell's range 30 feet.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Empowered Spell",
          "text": "Cost: 1 Sorcery Point\n\nWhen you roll damage for a spell, you can spend 1 Sorcery Point to reroll a number of the damage dice up to your Charisma modifier (minimum of one), and you must use the new rolls.\n\nYou can use Empowered Spell even if you've already used a different Metamagic option during the casting of the spell.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Extended Spell",
          "text": "Cost: 1 Sorcery Point\n\nWhen you cast a spell that has a duration of 1 minute or longer, you can spend 1 Sorcery Point to double its duration to a maximum duration of 24 hours.\n\nIf the affected spell requires Concentration, you have Advantage on any saving throw you make to maintain that Concentration.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Heightened Spell",
          "text": "Cost: 2 Sorcery Points\n\nWhen you cast a spell that forces a creature to make a saving throw, you can spend 2 Sorcery Points to give one target of the spell Disadvantage on saves against the spell.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Quickened Spell",
          "text": "Cost: 2 Sorcery Points\n\nWhen you cast a spell that has a casting time of an action, you can spend 2 Sorcery Points to change the casting time to a Bonus Action for this casting. You can't modify a spell in this way if you've already cast a level 1+ spell on the current turn, nor can you cast a level 1+ spell on this turn after modifying a spell in this way.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Seeking Spell",
          "text": "Cost: 1 Sorcery Point\n\nIf you make an attack roll for a spell and miss, you can spend 1 Sorcery Point to reroll the d20, and you must use the new roll.\n\nYou can use Seeking Spell even if you've already used a different Metamagic option during the casting of the spell.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Subtle Spell",
          "text": "Cost: 1 Sorcery Point\n\nWhen you cast a spell, you can spend 1 Sorcery Point to cast it without any Verbal, Somatic, or Material components, except Material components that are consumed by the spell or that have a cost specified in the spell.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Transmuted Spell",
          "text": "Cost: 1 Sorcery Point\n\nWhen you cast a spell that deals a type of damage from the following list, you can spend 1 Sorcery Point to change that damage type to one of the other listed types: Acid, Cold, Fire, Lightning, Poison, Thunder.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Twinned Spell",
          "text": "Cost: 1 Sorcery Point\n\nWhen you cast a spell, such as Charm Person, that can be cast with a higher-level spell slot to target an additional creature, you can spend 1 Sorcery Point to increase the spell's effective level by 1.",
          "source": "SRD 5.2.1"
        }
      ]
    },
    "warlock": {
      "name": "Warlock",
      "levels": [
        {
          "Level": "1",
          "Proficiency Bonus": "+2",
          "Class Features": "Eldritch Invocations, Pact Magic",
          "Eldritch Invocations": "1",
          "Cantrips": "2",
          "Prepared Spells": "2",
          "Spell Slots": "1",
          "Slot Level": "1"
        },
        {
          "Level": "2",
          "Proficiency Bonus": "+2",
          "Class Features": "Magical Cunning",
          "Eldritch Invocations": "3",
          "Cantrips": "2",
          "Prepared Spells": "3",
          "Spell Slots": "2",
          "Slot Level": "1"
        },
        {
          "Level": "3",
          "Proficiency Bonus": "+2",
          "Class Features": "Warlock Subclass",
          "Eldritch Invocations": "3",
          "Cantrips": "2",
          "Prepared Spells": "4",
          "Spell Slots": "2",
          "Slot Level": "2"
        },
        {
          "Level": "4",
          "Proficiency Bonus": "+2",
          "Class Features": "Ability Score Improvement",
          "Eldritch Invocations": "3",
          "Cantrips": "3",
          "Prepared Spells": "5",
          "Spell Slots": "2",
          "Slot Level": "2"
        },
        {
          "Level": "5",
          "Proficiency Bonus": "+3",
          "Class Features": "—",
          "Eldritch Invocations": "5",
          "Cantrips": "3",
          "Prepared Spells": "6",
          "Spell Slots": "2",
          "Slot Level": "3"
        },
        {
          "Level": "6",
          "Proficiency Bonus": "+3",
          "Class Features": "Subclass feature",
          "Eldritch Invocations": "5",
          "Cantrips": "3",
          "Prepared Spells": "7",
          "Spell Slots": "2",
          "Slot Level": "3"
        },
        {
          "Level": "7",
          "Proficiency Bonus": "+3",
          "Class Features": "—",
          "Eldritch Invocations": "6",
          "Cantrips": "3",
          "Prepared Spells": "8",
          "Spell Slots": "2",
          "Slot Level": "4"
        },
        {
          "Level": "8",
          "Proficiency Bonus": "+3",
          "Class Features": "Ability Score Improvement",
          "Eldritch Invocations": "6",
          "Cantrips": "3",
          "Prepared Spells": "9",
          "Spell Slots": "2",
          "Slot Level": "4"
        },
        {
          "Level": "9",
          "Proficiency Bonus": "+4",
          "Class Features": "Contact Patron",
          "Eldritch Invocations": "7",
          "Cantrips": "3",
          "Prepared Spells": "10",
          "Spell Slots": "2",
          "Slot Level": "5"
        },
        {
          "Level": "10",
          "Proficiency Bonus": "+4",
          "Class Features": "Subclass feature",
          "Eldritch Invocations": "7",
          "Cantrips": "4",
          "Prepared Spells": "10",
          "Spell Slots": "2",
          "Slot Level": "5"
        },
        {
          "Level": "11",
          "Proficiency Bonus": "+4",
          "Class Features": "Mystic Arcanum (level 6 spell)",
          "Eldritch Invocations": "7",
          "Cantrips": "4",
          "Prepared Spells": "11",
          "Spell Slots": "3",
          "Slot Level": "5"
        },
        {
          "Level": "12",
          "Proficiency Bonus": "+4",
          "Class Features": "Ability Score Improvement",
          "Eldritch Invocations": "8",
          "Cantrips": "4",
          "Prepared Spells": "11",
          "Spell Slots": "3",
          "Slot Level": "5"
        },
        {
          "Level": "13",
          "Proficiency Bonus": "+5",
          "Class Features": "Mystic Arcanum (level 7 spell)",
          "Eldritch Invocations": "8",
          "Cantrips": "4",
          "Prepared Spells": "12",
          "Spell Slots": "3",
          "Slot Level": "5"
        },
        {
          "Level": "14",
          "Proficiency Bonus": "+5",
          "Class Features": "Subclass feature",
          "Eldritch Invocations": "8",
          "Cantrips": "4",
          "Prepared Spells": "12",
          "Spell Slots": "3",
          "Slot Level": "5"
        },
        {
          "Level": "15",
          "Proficiency Bonus": "+5",
          "Class Features": "Mystic Arcanum (level 8 spell)",
          "Eldritch Invocations": "9",
          "Cantrips": "4",
          "Prepared Spells": "13",
          "Spell Slots": "3",
          "Slot Level": "5"
        },
        {
          "Level": "16",
          "Proficiency Bonus": "+5",
          "Class Features": "Ability Score Improvement",
          "Eldritch Invocations": "9",
          "Cantrips": "4",
          "Prepared Spells": "13",
          "Spell Slots": "3",
          "Slot Level": "5"
        },
        {
          "Level": "17",
          "Proficiency Bonus": "+6",
          "Class Features": "Mystic Arcanum (level 9 spell)",
          "Eldritch Invocations": "9",
          "Cantrips": "4",
          "Prepared Spells": "14",
          "Spell Slots": "4",
          "Slot Level": "5"
        },
        {
          "Level": "18",
          "Proficiency Bonus": "+6",
          "Class Features": "—",
          "Eldritch Invocations": "10",
          "Cantrips": "4",
          "Prepared Spells": "14",
          "Spell Slots": "4",
          "Slot Level": "5"
        },
        {
          "Level": "19",
          "Proficiency Bonus": "+6",
          "Class Features": "Epic Boon",
          "Eldritch Invocations": "10",
          "Cantrips": "4",
          "Prepared Spells": "15",
          "Spell Slots": "4",
          "Slot Level": "5"
        },
        {
          "Level": "20",
          "Proficiency Bonus": "+6",
          "Class Features": "Eldritch Master",
          "Eldritch Invocations": "10",
          "Cantrips": "4",
          "Prepared Spells": "15",
          "Spell Slots": "4",
          "Slot Level": "5"
        }
      ],
      "subclasses": [
        {
          "id": "fiend-patron",
          "name": "Fiend Patron",
          "source": "SRD 5.2.1",
          "features": [
            {
              "level": 3,
              "name": "Dark One's Blessing",
              "source": "SRD 5.2.1",
              "text": "When you reduce an enemy to 0 Hit Points, you gain Temporary Hit Points equal to your Charisma modifier plus your Warlock level (minimum of 1 Temporary Hit Point). You also gain this benefit if someone else reduces an enemy within 10 feet of you to 0 Hit Points."
            },
            {
              "level": 3,
              "name": "Fiend Spells",
              "source": "SRD 5.2.1",
              "text": "The magic of your patron ensures you always have certain spells ready; when you reach a Warlock level specified in the Fiend Spells table, you thereafter always have the listed spells prepared.\n\nFiend Spells"
            },
            {
              "level": 6,
              "name": "Dark One's Own Luck",
              "source": "SRD 5.2.1",
              "text": "You can call on your fiendish patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add 1d10 to your roll. You can do so after seeing the roll but before any of the roll's effects occur.\n\nYou can use this feature a number of times equal to your Charisma modifier (minimum of once), but you can use it no more than once per roll. You regain all expended uses when you finish a Long Rest."
            },
            {
              "level": 10,
              "name": "Fiendish Resilience",
              "source": "SRD 5.2.1",
              "text": "Choose one damage type, other than Force, whenever you finish a Short or Long Rest. You have Resistance to that damage type until you choose a different one with this feature."
            },
            {
              "level": 14,
              "name": "Hurl Through Hell",
              "source": "SRD 5.2.1",
              "text": "Once per turn when you hit a creature with an attack roll, you can try to instantly transport the target through the Lower Planes. The target must succeed on a Charisma saving throw against your spell save DC, or the target disappears and hurtles through a nightmare landscape. The target takes 8d10 Psychic damage if it isn't a Fiend, and it has the Incapacitated condition until the end of your next turn, when it returns to the space it previously occupied or the nearest unoccupied space.\n\nOnce you use this feature, you can't use it again until you finish a Long Rest unless you expend a Pact Magic spell slot (no action required) to restore your use of it."
            }
          ],
          "spells": [
            {
              "level": 3,
              "names": [
                "Burning Hands",
                "Command",
                "Scorching Ray",
                "Suggestion"
              ]
            },
            {
              "level": 5,
              "names": [
                "Fireball",
                "Stinking Cloud"
              ]
            },
            {
              "level": 7,
              "names": [
                "Fire Shield",
                "Wall of Fire"
              ]
            },
            {
              "level": 9,
              "names": [
                "Geas",
                "Insect Plague"
              ]
            }
          ]
        }
      ],
      "spells": [
        {
          "name": "Chill Touch",
          "level": 0,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Eldritch Blast",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Mage Hand",
          "level": 0,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Minor Illusion",
          "level": 0,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Poison Spray",
          "level": 0,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Prestidigitation",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "True Strike",
          "level": 0,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Bane",
          "level": 1,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Charm Person",
          "level": 1,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Comprehend Languages",
          "level": 1,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Detect Magic",
          "level": 1,
          "school": "Divination",
          "special": "C, R"
        },
        {
          "name": "Expeditious Retreat",
          "level": 1,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Hellish Rebuke",
          "level": 1,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Hex",
          "level": 1,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Hideous Laughter",
          "level": 1,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Illusory Script",
          "level": 1,
          "school": "Illusion",
          "special": "R, M"
        },
        {
          "name": "Protection from Evil and Good",
          "level": 1,
          "school": "Abjuration",
          "special": "C, M"
        },
        {
          "name": "Speak with Animals",
          "level": 1,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Unseen Servant",
          "level": 1,
          "school": "Conjuration",
          "special": "R"
        },
        {
          "name": "Darkness",
          "level": 2,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Enthrall",
          "level": 2,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Hold Person",
          "level": 2,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Invisibility",
          "level": 2,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Mind Spike",
          "level": 2,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Mirror Image",
          "level": 2,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Misty Step",
          "level": 2,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Ray of Enfeeblement",
          "level": 2,
          "school": "Necromancy",
          "special": "C"
        },
        {
          "name": "Spider Climb",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Suggestion",
          "level": 2,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Counterspell",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Dispel Magic",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Fear",
          "level": 3,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Fly",
          "level": 3,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Gaseous Form",
          "level": 3,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Hypnotic Pattern",
          "level": 3,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Magic Circle",
          "level": 3,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Major Image",
          "level": 3,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Remove Curse",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Tongues",
          "level": 3,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Vampiric Touch",
          "level": 3,
          "school": "Necromancy",
          "special": "C"
        },
        {
          "name": "Banishment",
          "level": 4,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Blight",
          "level": 4,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Charm Monster",
          "level": 4,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Dimension Door",
          "level": 4,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Hallucinatory Terrain",
          "level": 4,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Contact Other Plane",
          "level": 5,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Dream",
          "level": 5,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Hold Monster",
          "level": 5,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Mislead",
          "level": 5,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Planar Binding",
          "level": 5,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Scrying",
          "level": 5,
          "school": "Divination",
          "special": "C, M"
        },
        {
          "name": "Teleportation Circle",
          "level": 5,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Circle of Death",
          "level": 6,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Create Undead",
          "level": 6,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Eyebite",
          "level": 6,
          "school": "Necromancy",
          "special": "C"
        },
        {
          "name": "True Seeing",
          "level": 6,
          "school": "Divination",
          "special": "M"
        },
        {
          "name": "Etherealness",
          "level": 7,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Finger of Death",
          "level": 7,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Forcecage",
          "level": 7,
          "school": "Evocation",
          "special": "C, M"
        },
        {
          "name": "Plane Shift",
          "level": 7,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Befuddlement",
          "level": 8,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Demiplane",
          "level": 8,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Dominate Monster",
          "level": 8,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Glibness",
          "level": 8,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Power Word Stun",
          "level": 8,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Astral Projection",
          "level": 9,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Foresight",
          "level": 9,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Gate",
          "level": 9,
          "school": "Conjuration",
          "special": "C, M"
        },
        {
          "name": "Imprisonment",
          "level": 9,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Power Word Kill",
          "level": 9,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "True Polymorph",
          "level": 9,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Weird",
          "level": 9,
          "school": "Illusion",
          "special": "C"
        }
      ],
      "features": [
        {
          "level": 1,
          "name": "Eldritch Invocations",
          "source": "SRD 5.2.1",
          "text": "You have unearthed Eldritch Invocations, pieces of forbidden knowledge that imbue you with an abiding magical ability or other lessons. You gain one invocation of your choice, such as Pact of the Tome. Invocations are described in the \"Eldritch Invocation Options\" section later in this class's description.\n\nPrerequisites. If an invocation has a prerequisite, you must meet it to learn that invocation. For example, if an invocation requires you to be a level 5+ Warlock, you can select the invocation once you reach Warlock level 5.\n\nReplacing and Gaining Invocations. Whenever you gain a Warlock level, you can replace one of your invocations with another one for which you qualify. You can't replace an invocation if it's a prerequisite for another invocation that you have.\n\nWhen you gain certain Warlock levels, you gain more invocations of your choice, as shown in the Invocations column of the Warlock Features table.\n\nYou can't pick the same invocation more than once unless its description says otherwise."
        },
        {
          "level": 1,
          "name": "Pact Magic",
          "source": "SRD 5.2.1",
          "text": "Through occult ceremony, you have formed a pact with a mysterious entity to gain magical powers. The entity is a voice in the shadows—its identity unclear—but its boon to you is concrete: the ability to cast spells. See \"Spells\" for the rules on spellcasting. The information below details how you use those rules with Warlock spells, which appear in the Warlock spell list later in the class's description.\n\nCantrips. You know two Warlock cantrips of your choice. Eldritch Blast and Prestidigitation are recommended. Whenever you gain a Warlock level, you can replace one of your cantrips from this feature with another Warlock cantrip of your choice.\n\nWhen you reach Warlock levels 4 and 10, you learn another Warlock cantrip of your choice, as shown in the Cantrips column of the Warlock Features table.\n\nSpell Slots. The Warlock Features table shows how many spell slots you have to cast your Warlock spells of levels 1–5. The table also shows the level of those slots, all of which are the same level. You regain all expended Pact Magic spell slots when you finish a Short or Long Rest.\n\nFor example, when you're a level 5 Warlock, you have two level 3 spell slots. To cast the level 1 spell Charm Person, you must spend one of those slots, and you cast it as a level 3 spell.\n\nPrepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Warlock spells. Charm Person and Hex are recommended.\n\nThe number of spells on your list increases as you gain Warlock levels, as shown in the Prepared Spells column of the Warlock Features table. Whenever that number increases, choose additional Warlock spells until the number of spells on your list matches the number in the table. The chosen spells must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach level 6, for example, you learn a new Warlock spell, which can be of levels 1–3.\n\nIf another Warlock feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Warlock spells for you.\n\nChanging Your Prepared Spells. Whenever you gain a Warlock level, you can replace one spell on your list with another Warlock spell of an eligible level.\n\nSpellcasting Ability. Charisma is the spellcasting ability for your Warlock spells.\n\nSpellcasting Focus. You can use an Arcane Focus as a Spellcasting Focus for your Warlock spells."
        },
        {
          "level": 2,
          "name": "Magical Cunning",
          "source": "SRD 5.2.1",
          "text": "You can perform an esoteric rite for 1 minute. At the end of it, you regain expended Pact Magic spell slots but no more than a number equal to half your maximum (round up). Once you use this feature, you can't do so again until you finish a Long Rest."
        },
        {
          "level": 3,
          "name": "Warlock Subclass",
          "source": "SRD 5.2.1",
          "text": "You gain a Warlock subclass of your choice. The Fiend Patron subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Warlock levels. For the rest of your career, you gain each of your subclass's features that are of your Warlock level or lower."
        },
        {
          "level": 4,
          "name": "Ability Score Improvement",
          "source": "SRD 5.2.1",
          "text": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You gain this feature again at Warlock levels 8, 12, and 16."
        },
        {
          "level": 9,
          "name": "Contact Patron",
          "source": "SRD 5.2.1",
          "text": "In the past, you usually contacted your patron through intermediaries. Now you can communicate directly; you always have the Contact Other Plane spell prepared. With this feature, you can cast the spell without expending a spell slot to contact your patron, and you automatically succeed on the spell's saving throw.\n\nOnce you cast the spell with this feature, you can't do so in this way again until you finish a Long Rest."
        },
        {
          "level": 11,
          "name": "Mystic Arcanum",
          "source": "SRD 5.2.1",
          "text": "Your patron grants you a magical secret called an arcanum. Choose one level 6 Warlock spell as this arcanum.\n\nYou can cast your arcanum spell once without expending a spell slot, and you must finish a Long Rest before you can cast it in this way again.\n\nAs shown in the Warlock Features table, you gain another Warlock spell of your choice that can be cast in this way when you reach Warlock levels 13 (level 7 spell), 15 (level 8 spell), and 17 (level 9 spell). You regain all uses of your Mystic Arcanum when you finish a Long Rest.\n\nWhenever you gain a Warlock level, you can replace one of your arcanum spells with another Warlock spell of the same level."
        },
        {
          "level": 19,
          "name": "Epic Boon",
          "source": "SRD 5.2.1",
          "text": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Fate is recommended."
        },
        {
          "level": 20,
          "name": "Eldritch Master",
          "source": "SRD 5.2.1",
          "text": "When you use your Magical Cunning feature, you regain all your expended Pact Magic spell slots."
        }
      ],
      "options": [
        {
          "name": "Agonizing Blast",
          "text": "Prerequisite: Level 2+ Warlock, a Warlock Cantrip That Deals Damage\n\nChoose one of your known Warlock cantrips that deals damage. You can add your Charisma modifier to that spell's damage rolls.\n\nRepeatable. You can gain this invocation more than once. Each time you do so, choose a different eligible cantrip.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Armor of Shadows",
          "text": "You can cast Mage Armor on yourself without expending a spell slot.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Ascendant Step",
          "text": "Prerequisite: Level 5+ Warlock\n\nYou can cast Levitate on yourself without expending a spell slot.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Devil's Sight",
          "text": "Prerequisite: Level 2+ Warlock\n\nYou can see normally in Dim Light and Darkness—both magical and nonmagical—within 120 feet of yourself.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Devouring Blade",
          "text": "Prerequisite: Level 12+ Warlock, Thirsting Blade Invocation\n\nThe Extra Attack of your Thirsting Blade invocation confers two extra attacks rather than one.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Eldritch Mind",
          "text": "You have Advantage on Constitution saving throws that you make to maintain Concentration.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Eldritch Smite",
          "text": "Prerequisite: Level 5+ Warlock, Pact of the Blade Invocation\n\nOnce per turn when you hit a creature with your pact weapon, you can expend a Pact Magic spell slot to deal an extra 1d8 Force damage to the target, plus another 1d8 per level of the spell slot, and you can give the target the Prone condition if it is Huge or smaller.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Eldritch Spear",
          "text": "Prerequisite: Level 2+ Warlock, a Warlock Cantrip That Deals Damage\n\nChoose one of your known Warlock cantrips that deals damage and has a range of 10+ feet. When you cast that spell, its range increases by a number of feet equal to 30 times your Warlock level.\n\nRepeatable. You can gain this invocation more than once. Each time you do so, choose a different eligible cantrip.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Fiendish Vigor",
          "text": "Prerequisite: Level 2+ Warlock\n\nYou can cast False Life on yourself without expending a spell slot. When you cast the spell with this feature, you don't roll the die for the Temporary Hit Points; you automatically get the highest number on the die.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Gaze of Two Minds",
          "text": "Prerequisite: Level 5+ Warlock\n\nYou can use a Bonus Action to touch a willing creature and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can take a Bonus Action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. The connection ends if you don't maintain it in this way.\n\nWhile perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you can cast spells as if you were in your space or the other creature's space if the two of you are within 60 feet of each other.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Gift of the Depths",
          "text": "Prerequisite: Level 5+ Warlock\n\nYou can breathe underwater, and you gain a Swim Speed equal to your Speed.\n\nYou can also cast Water Breathing once without expending a spell slot. You regain the ability to cast it in this way again when you finish a Long Rest.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Gift of the Protectors",
          "text": "Prerequisite: Level 9+ Warlock, Pact of the Tome Invocation\n\nA new page appears in your Book of Shadows when you conjure it. With your permission, a creature can take an action to write its name on that page, which can contain a number of names equal to your Charisma modifier (minimum of one name).\n\nWhen any creature whose name is on the page is reduced to 0 Hit Points but not killed outright, the creature magically drops to 1 Hit Point instead. Once this magic is triggered, no creature can benefit from it until you finish a Long Rest.\n\nAs a Magic action, you can erase a name on the page by touching it.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Investment of the Chain Master",
          "text": "Prerequisite: Level 5+ Warlock, Pact of the Chain Invocation\n\nWhen you cast Find Familiar, you infuse the summoned familiar with a measure of your eldritch power, granting the creature the following benefits.\n\nAerial or Aquatic. The familiar gains either a Fly Speed or a Swim Speed (your choice) of 40 feet.\n\nQuick Attack. As a Bonus Action, you can command the familiar to take the Attack action.\n\nNecrotic or Radiant Damage. Whenever the familiar deals Bludgeoning, Piercing, or Slashing damage, you can make it deal Necrotic or Radiant damage instead.\n\nYour Save DC. If the familiar forces a creature to make a saving throw, it uses your spell save DC.\n\nResistance. When the familiar takes damage, you can take a Reaction to grant it Resistance against that damage.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Lessons of the First Ones",
          "text": "Prerequisite: Level 2+ Warlock\n\nYou have received knowledge from an elder entity of the multiverse, allowing you to gain one Origin feat of your choice (see \"Feats\").\n\nRepeatable. You can gain this invocation more than once. Each time you do so, choose a different Origin feat.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Lifedrinker",
          "text": "Prerequisite: Level 9+ Warlock, Pact of the Blade Invocation\n\nOnce per turn when you hit a creature with your pact weapon, you can deal an extra 1d6 Necrotic, Psychic, or Radiant damage (your choice) to the creature, and you can expend one of your Hit Point Dice to roll it and regain a number of Hit Points equal to the roll plus your Constitution modifier (minimum of 1 Hit Point).",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Mask of Many Faces",
          "text": "Prerequisite: Level 2+ Warlock\n\nYou can cast Disguise Self without expending a spell slot.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Master of Myriad Forms",
          "text": "Prerequisite: Level 5+ Warlock\n\nYou can cast Alter Self without expending a spell slot.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Misty Visions",
          "text": "Prerequisite: Level 2+ Warlock\n\nYou can cast Silent Image without expending a spell slot.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "One with Shadows",
          "text": "Prerequisite: Level 5+ Warlock\n\nWhile you're in an area of Dim Light or Darkness, you can cast Invisibility on yourself without expending a spell slot.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Otherworldly Leap",
          "text": "Prerequisite: Level 2+ Warlock\n\nYou can cast Jump on yourself without expending a spell slot.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Pact of the Blade",
          "text": "As a Bonus Action, you can conjure a pact weapon in your hand—a Simple or Martial Melee weapon of your choice with which you bond—or create a bond with a magic weapon you touch; you can't bond with a magic weapon if someone else is attuned to it or another Warlock is bonded with it. Until the bond ends, you have proficiency with the weapon, and you can use it as a Spellcasting Focus.\n\nWhenever you attack with the bonded weapon, you can use your Charisma modifier for the attack and damage rolls instead of using Strength or Dexterity; and you can cause the weapon to deal Necrotic, Psychic, or Radiant damage or its normal damage type.\n\nYour bond with the weapon ends if you use this feature's Bonus Action again, if the weapon is more than 5 feet away from you for 1 minute or more, or if you die. A conjured weapon disappears when the bond ends.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Pact of the Chain",
          "text": "You learn the Find Familiar spell and can cast it as a Magic action without expending a spell slot.\n\nWhen you cast the spell, you choose one of the normal forms for your familiar or one of the following special forms: Imp, Pseudodragon, Quasit, Skeleton, Sphinx of Wonder, Sprite, or Venomous Snake (see \"Monsters\" for the familiar's stat block).\n\nAdditionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own with its Reaction.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Pact of the Tome",
          "text": "Stitching together strands of shadow, you conjure forth a book in your hand at the end of a Short or Long Rest. This Book of Shadows (you determine its appearance) contains eldritch magic that only you can access, granting you the benefits below. The book disappears if you conjure another book with this feature or if you die.\n\nCantrips and Rituals. When the book appears, choose three cantrips, and choose two level 1 spells that have the Ritual tag. The spells can be from any class's spell list, and they must be spells you don't already have prepared. While the book is on your person, you have the chosen spells prepared, and they function as Warlock spells for you.\n\nSpellcasting Focus. You can use the book as a Spellcasting Focus.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Repelling Blast",
          "text": "Prerequisite: Level 2+ Warlock, a Warlock Cantrip That Deals Damage via an Attack Roll\n\nChoose one of your known Warlock cantrips that requires an attack roll. When you hit a Large or smaller creature with that cantrip, you can push the creature up to 10 feet straight away from you.\n\nRepeatable. You can gain this invocation more than once. Each time you do so, choose a different eligible cantrip.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Thirsting Blade",
          "text": "Prerequisite: Level 5+ Warlock, Pact of the Blade Invocation\n\nYou gain the Extra Attack feature for your pact weapon only. With that feature, you can attack twice with the weapon instead of once when you take the Attack action on your turn.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Visions of Distant Realms",
          "text": "Prerequisite: Level 9+ Warlock\n\nYou can cast Arcane Eye without expending a spell slot.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Whispers of the Grave",
          "text": "Prerequisite: Level 7+ Warlock\n\nYou can cast Speak with Dead without expending a spell slot.",
          "source": "SRD 5.2.1"
        },
        {
          "name": "Witch Sight",
          "text": "Prerequisite: Level 15+ Warlock\n\nYou have Truesight with a range of 30 feet.",
          "source": "SRD 5.2.1"
        }
      ]
    },
    "wizard": {
      "name": "Wizard",
      "levels": [
        {
          "1": "2",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "1",
          "Proficiency Bonus": "+2",
          "Class Features": "Spellcasting, Ritual Adept, Arcane Recovery",
          "Cantrips": "3",
          "Prepared Spells": "4"
        },
        {
          "1": "3",
          "2": "—",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "2",
          "Proficiency Bonus": "+2",
          "Class Features": "Scholar",
          "Cantrips": "3",
          "Prepared Spells": "5"
        },
        {
          "1": "4",
          "2": "2",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "3",
          "Proficiency Bonus": "+2",
          "Class Features": "Wizard Subclass",
          "Cantrips": "3",
          "Prepared Spells": "6"
        },
        {
          "1": "4",
          "2": "3",
          "3": "—",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "4",
          "Proficiency Bonus": "+2",
          "Class Features": "Ability Score Improvement",
          "Cantrips": "4",
          "Prepared Spells": "7"
        },
        {
          "1": "4",
          "2": "3",
          "3": "2",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "5",
          "Proficiency Bonus": "+3",
          "Class Features": "Memorize Spell",
          "Cantrips": "4",
          "Prepared Spells": "9"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "—",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "6",
          "Proficiency Bonus": "+3",
          "Class Features": "Subclass feature",
          "Cantrips": "4",
          "Prepared Spells": "10"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "1",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "7",
          "Proficiency Bonus": "+3",
          "Class Features": "—",
          "Cantrips": "4",
          "Prepared Spells": "11"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "2",
          "5": "—",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "8",
          "Proficiency Bonus": "+3",
          "Class Features": "Ability Score Improvement",
          "Cantrips": "4",
          "Prepared Spells": "12"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "1",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "9",
          "Proficiency Bonus": "+4",
          "Class Features": "—",
          "Cantrips": "4",
          "Prepared Spells": "14"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "—",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "10",
          "Proficiency Bonus": "+4",
          "Class Features": "Subclass feature",
          "Cantrips": "5",
          "Prepared Spells": "15"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "11",
          "Proficiency Bonus": "+4",
          "Class Features": "—",
          "Cantrips": "5",
          "Prepared Spells": "16"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "—",
          "8": "—",
          "9": "—",
          "Level": "12",
          "Proficiency Bonus": "+4",
          "Class Features": "Ability Score Improvement",
          "Cantrips": "5",
          "Prepared Spells": "16"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "—",
          "9": "—",
          "Level": "13",
          "Proficiency Bonus": "+5",
          "Class Features": "—",
          "Cantrips": "5",
          "Prepared Spells": "17"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "—",
          "9": "—",
          "Level": "14",
          "Proficiency Bonus": "+5",
          "Class Features": "Subclass feature",
          "Cantrips": "5",
          "Prepared Spells": "18"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "—",
          "Level": "15",
          "Proficiency Bonus": "+5",
          "Class Features": "—",
          "Cantrips": "5",
          "Prepared Spells": "19"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "—",
          "Level": "16",
          "Proficiency Bonus": "+5",
          "Class Features": "Ability Score Improvement",
          "Cantrips": "5",
          "Prepared Spells": "21"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "2",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "17",
          "Proficiency Bonus": "+6",
          "Class Features": "—",
          "Cantrips": "5",
          "Prepared Spells": "22"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "1",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "18",
          "Proficiency Bonus": "+6",
          "Class Features": "Spell Mastery",
          "Cantrips": "5",
          "Prepared Spells": "23"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "2",
          "7": "1",
          "8": "1",
          "9": "1",
          "Level": "19",
          "Proficiency Bonus": "+6",
          "Class Features": "Epic Boon",
          "Cantrips": "5",
          "Prepared Spells": "24"
        },
        {
          "1": "4",
          "2": "3",
          "3": "3",
          "4": "3",
          "5": "3",
          "6": "2",
          "7": "2",
          "8": "1",
          "9": "1",
          "Level": "20",
          "Proficiency Bonus": "+6",
          "Class Features": "Signature Spells",
          "Cantrips": "5",
          "Prepared Spells": "25"
        }
      ],
      "subclasses": [
        {
          "id": "evoker",
          "name": "Evoker",
          "source": "SRD 5.2.1",
          "features": [
            {
              "level": 3,
              "name": "Evocation Savant",
              "source": "SRD 5.2.1",
              "text": "Choose two Wizard spells from the Evocation school, each of which must be no higher than level 2, and add them to your spellbook for free.\n\nIn addition, whenever you gain access to a new level of spell slots in this class, you can add one Wizard spell from the Evocation school to your spellbook for free. The chosen spell must be of a level for which you have spell slots."
            },
            {
              "level": 3,
              "name": "Potent Cantrip",
              "source": "SRD 5.2.1",
              "text": "Your damaging cantrips affect even creatures that avoid the brunt of the effect. When you cast a cantrip at a creature and you miss with the attack roll or the target succeeds on a saving throw against the cantrip, the target takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip."
            },
            {
              "level": 6,
              "name": "Sculpt Spells",
              "source": "SRD 5.2.1",
              "text": "You can create pockets of relative safety within the effects of your evocations. When you cast an Evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 plus the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."
            },
            {
              "level": 10,
              "name": "Empowered Evocation",
              "source": "SRD 5.2.1",
              "text": "Whenever you cast a Wizard spell from the Evocation school, you can add your Intelligence modifier to one damage roll of that spell."
            },
            {
              "level": 14,
              "name": "Overchannel",
              "source": "SRD 5.2.1",
              "text": "You can increase the power of your spells. When you cast a Wizard spell with a spell slot of levels 1–5 that deals damage, you can deal maximum damage with that spell on the turn you cast it.\n\nThe first time you do so, you suffer no adverse effect. If you use this feature again before you finish a Long Rest, you take 2d12 Necrotic damage for each level of the spell slot immediately after you cast it. This damage ignores Resistance and Immunity.\n\nEach time you use this feature again before finishing a Long Rest, the Necrotic damage per spell level increases by 1d12."
            }
          ],
          "spells": []
        }
      ],
      "spells": [
        {
          "name": "Acid Splash",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Chill Touch",
          "level": 0,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Dancing Lights",
          "level": 0,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Elementalism",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Fire Bolt",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Light",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Mage Hand",
          "level": 0,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Mending",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Message",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Minor Illusion",
          "level": 0,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Poison Spray",
          "level": 0,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Prestidigitation",
          "level": 0,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Ray of Frost",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Shocking Grasp",
          "level": 0,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "True Strike",
          "level": 0,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Alarm",
          "level": 1,
          "school": "Abjuration",
          "special": "R"
        },
        {
          "name": "Burning Hands",
          "level": 1,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Charm Person",
          "level": 1,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Chromatic Orb",
          "level": 1,
          "school": "Evocation",
          "special": "M"
        },
        {
          "name": "Color Spray",
          "level": 1,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Comprehend Languages",
          "level": 1,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Detect Magic",
          "level": 1,
          "school": "Divination",
          "special": "C, R"
        },
        {
          "name": "Disguise Self",
          "level": 1,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Expeditious Retreat",
          "level": 1,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "False Life",
          "level": 1,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Feather Fall",
          "level": 1,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Find Familiar",
          "level": 1,
          "school": "Conjuration",
          "special": "R, M"
        },
        {
          "name": "Floating Disk",
          "level": 1,
          "school": "Conjuration",
          "special": "R"
        },
        {
          "name": "Fog Cloud",
          "level": 1,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Grease",
          "level": 1,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Hideous Laughter",
          "level": 1,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Ice Knife",
          "level": 1,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Identify",
          "level": 1,
          "school": "Divination",
          "special": "R, M"
        },
        {
          "name": "Illusory Script",
          "level": 1,
          "school": "Illusion",
          "special": "R, M"
        },
        {
          "name": "Jump",
          "level": 1,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Longstrider",
          "level": 1,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Mage Armor",
          "level": 1,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Magic Missile",
          "level": 1,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Protection from Evil and Good",
          "level": 1,
          "school": "Abjuration",
          "special": "C, M"
        },
        {
          "name": "Ray of Sickness",
          "level": 1,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Shield",
          "level": 1,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Silent Image",
          "level": 1,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Sleep",
          "level": 1,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Thunderwave",
          "level": 1,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Unseen Servant",
          "level": 1,
          "school": "Conjuration",
          "special": "R"
        },
        {
          "name": "Acid Arrow",
          "level": 2,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Alter Self",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Arcane Lock",
          "level": 2,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Arcanist's Magic Aura",
          "level": 2,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Augury",
          "level": 2,
          "school": "Divination",
          "special": "R, M"
        },
        {
          "name": "Blindness/Deafness",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Blur",
          "level": 2,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Continual Flame",
          "level": 2,
          "school": "Evocation",
          "special": "M"
        },
        {
          "name": "Darkness",
          "level": 2,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Darkvision",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Detect Thoughts",
          "level": 2,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Dragon's Breath",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Enhance Ability",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Enlarge/Reduce",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Flaming Sphere",
          "level": 2,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Gentle Repose",
          "level": 2,
          "school": "Necromancy",
          "special": "R, M"
        },
        {
          "name": "Gust of Wind",
          "level": 2,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Hold Person",
          "level": 2,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Invisibility",
          "level": 2,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Knock",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Levitate",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Locate Object",
          "level": 2,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Magic Mouth",
          "level": 2,
          "school": "Illusion",
          "special": "R, M"
        },
        {
          "name": "Magic Weapon",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Mind Spike",
          "level": 2,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Mirror Image",
          "level": 2,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Misty Step",
          "level": 2,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Ray of Enfeeblement",
          "level": 2,
          "school": "Necromancy",
          "special": "C"
        },
        {
          "name": "Rope Trick",
          "level": 2,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Scorching Ray",
          "level": 2,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "See Invisibility",
          "level": 2,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Shatter",
          "level": 2,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Spider Climb",
          "level": 2,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Suggestion",
          "level": 2,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Web",
          "level": 2,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Animate Dead",
          "level": 3,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Bestow Curse",
          "level": 3,
          "school": "Necromancy",
          "special": "C"
        },
        {
          "name": "Blink",
          "level": 3,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Clairvoyance",
          "level": 3,
          "school": "Divination",
          "special": "C, M"
        },
        {
          "name": "Counterspell",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Dispel Magic",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Fear",
          "level": 3,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Fireball",
          "level": 3,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Fly",
          "level": 3,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Gaseous Form",
          "level": 3,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Glyph of Warding",
          "level": 3,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Haste",
          "level": 3,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Hypnotic Pattern",
          "level": 3,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Lightning Bolt",
          "level": 3,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Magic Circle",
          "level": 3,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Major Image",
          "level": 3,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Nondetection",
          "level": 3,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Phantom Steed",
          "level": 3,
          "school": "Illusion",
          "special": "R"
        },
        {
          "name": "Protection from Energy",
          "level": 3,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Remove Curse",
          "level": 3,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Sending",
          "level": 3,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Sleet Storm",
          "level": 3,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Slow",
          "level": 3,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Speak with Dead",
          "level": 3,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Stinking Cloud",
          "level": 3,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Tiny Hut",
          "level": 3,
          "school": "Evocation",
          "special": "R"
        },
        {
          "name": "Tongues",
          "level": 3,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Vampiric Touch",
          "level": 3,
          "school": "Necromancy",
          "special": "C"
        },
        {
          "name": "Water Breathing",
          "level": 3,
          "school": "Transmutation",
          "special": "R"
        },
        {
          "name": "Arcane Eye",
          "level": 4,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Banishment",
          "level": 4,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Black Tentacles",
          "level": 4,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Blight",
          "level": 4,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Charm Monster",
          "level": 4,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Confusion",
          "level": 4,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Conjure Minor Elementals",
          "level": 4,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Control Water",
          "level": 4,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Dimension Door",
          "level": 4,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Divination",
          "level": 4,
          "school": "Divination",
          "special": "R, M"
        },
        {
          "name": "Fabricate",
          "level": 4,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Faithful Hound",
          "level": 4,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Fire Shield",
          "level": 4,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Greater Invisibility",
          "level": 4,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Hallucinatory Terrain",
          "level": 4,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Ice Storm",
          "level": 4,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Locate Creature",
          "level": 4,
          "school": "Divination",
          "special": "C"
        },
        {
          "name": "Phantasmal Killer",
          "level": 4,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Polymorph",
          "level": 4,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Private Sanctum",
          "level": 4,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Resilient Sphere",
          "level": 4,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Secret Chest",
          "level": 4,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Stone Shape",
          "level": 4,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Stoneskin",
          "level": 4,
          "school": "Transmutation",
          "special": "C, M"
        },
        {
          "name": "Vitriolic Sphere",
          "level": 4,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Wall of Fire",
          "level": 4,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Animate Objects",
          "level": 5,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Arcane Hand",
          "level": 5,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Cloudkill",
          "level": 5,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Cone of Cold",
          "level": 5,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Conjure Elemental",
          "level": 5,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Contact Other Plane",
          "level": 5,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Creation",
          "level": 5,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Dominate Person",
          "level": 5,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Dream",
          "level": 5,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Geas",
          "level": 5,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Hold Monster",
          "level": 5,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Legend Lore",
          "level": 5,
          "school": "Divination",
          "special": "M"
        },
        {
          "name": "Mislead",
          "level": 5,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Modify Memory",
          "level": 5,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Passwall",
          "level": 5,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Planar Binding",
          "level": 5,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Scrying",
          "level": 5,
          "school": "Divination",
          "special": "C, M"
        },
        {
          "name": "Seeming",
          "level": 5,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Summon Dragon",
          "level": 5,
          "school": "Conjuration",
          "special": "C, M"
        },
        {
          "name": "Telekinesis",
          "level": 5,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Telepathic Bond",
          "level": 5,
          "school": "Divination",
          "special": "R"
        },
        {
          "name": "Teleportation Circle",
          "level": 5,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Wall of Force",
          "level": 5,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Wall of Stone",
          "level": 5,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Chain Lightning",
          "level": 6,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Circle of Death",
          "level": 6,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Contingency",
          "level": 6,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Create Undead",
          "level": 6,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Disintegrate",
          "level": 6,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "Eyebite",
          "level": 6,
          "school": "Necromancy",
          "special": "C"
        },
        {
          "name": "Flesh to Stone",
          "level": 6,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Freezing Sphere",
          "level": 6,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Globe of Invulnerability",
          "level": 6,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Guards and Wards",
          "level": 6,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Instant Summons",
          "level": 6,
          "school": "Conjuration",
          "special": "R, M"
        },
        {
          "name": "Irresistible Dance",
          "level": 6,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Magic Jar",
          "level": 6,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Mass Suggestion",
          "level": 6,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Move Earth",
          "level": 6,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Programmed Illusion",
          "level": 6,
          "school": "Illusion",
          "special": "M"
        },
        {
          "name": "Sunbeam",
          "level": 6,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "True Seeing",
          "level": 6,
          "school": "Divination",
          "special": "M"
        },
        {
          "name": "Wall of Ice",
          "level": 6,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Arcane Sword",
          "level": 7,
          "school": "Evocation",
          "special": "C, M"
        },
        {
          "name": "Delayed Blast Fireball",
          "level": 7,
          "school": "Evocation",
          "special": "C"
        },
        {
          "name": "Etherealness",
          "level": 7,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Finger of Death",
          "level": 7,
          "school": "Necromancy",
          "special": "—"
        },
        {
          "name": "Forcecage",
          "level": 7,
          "school": "Evocation",
          "special": "C, M"
        },
        {
          "name": "Magnificent Mansion",
          "level": 7,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Mirage Arcane",
          "level": 7,
          "school": "Illusion",
          "special": "—"
        },
        {
          "name": "Plane Shift",
          "level": 7,
          "school": "Conjuration",
          "special": "M"
        },
        {
          "name": "Prismatic Spray",
          "level": 7,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Project Image",
          "level": 7,
          "school": "Illusion",
          "special": "C, M"
        },
        {
          "name": "Reverse Gravity",
          "level": 7,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Sequester",
          "level": 7,
          "school": "Transmutation",
          "special": "M"
        },
        {
          "name": "Simulacrum",
          "level": 7,
          "school": "Illusion",
          "special": "M"
        },
        {
          "name": "Symbol",
          "level": 7,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Teleport",
          "level": 7,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Antimagic Field",
          "level": 8,
          "school": "Abjuration",
          "special": "C"
        },
        {
          "name": "Antipathy/Sympathy",
          "level": 8,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Befuddlement",
          "level": 8,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Clone",
          "level": 8,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Control Weather",
          "level": 8,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Demiplane",
          "level": 8,
          "school": "Conjuration",
          "special": "—"
        },
        {
          "name": "Dominate Monster",
          "level": 8,
          "school": "Enchantment",
          "special": "C"
        },
        {
          "name": "Incendiary Cloud",
          "level": 8,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Maze",
          "level": 8,
          "school": "Conjuration",
          "special": "C"
        },
        {
          "name": "Mind Blank",
          "level": 8,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Power Word Stun",
          "level": 8,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Sunburst",
          "level": 8,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Astral Projection",
          "level": 9,
          "school": "Necromancy",
          "special": "M"
        },
        {
          "name": "Foresight",
          "level": 9,
          "school": "Divination",
          "special": "—"
        },
        {
          "name": "Gate",
          "level": 9,
          "school": "Conjuration",
          "special": "C, M"
        },
        {
          "name": "Imprisonment",
          "level": 9,
          "school": "Abjuration",
          "special": "M"
        },
        {
          "name": "Meteor Swarm",
          "level": 9,
          "school": "Evocation",
          "special": "—"
        },
        {
          "name": "Power Word Kill",
          "level": 9,
          "school": "Enchantment",
          "special": "—"
        },
        {
          "name": "Prismatic Wall",
          "level": 9,
          "school": "Abjuration",
          "special": "—"
        },
        {
          "name": "Shapechange",
          "level": 9,
          "school": "Transmutation",
          "special": "C, M"
        },
        {
          "name": "Time Stop",
          "level": 9,
          "school": "Transmutation",
          "special": "—"
        },
        {
          "name": "True Polymorph",
          "level": 9,
          "school": "Transmutation",
          "special": "C"
        },
        {
          "name": "Weird",
          "level": 9,
          "school": "Illusion",
          "special": "C"
        },
        {
          "name": "Wish",
          "level": 9,
          "school": "Conjuration",
          "special": "—"
        }
      ],
      "features": [
        {
          "level": 1,
          "name": "Spellcasting",
          "source": "SRD 5.2.1",
          "text": "As a student of arcane magic, you have learned to cast spells. See \"Spells\" for the rules on spellcasting. The information below details how you use those rules with Wizard spells, which appear in the Wizard spell list later in the class's description.\n\nCantrips. You know three Wizard cantrips of your choice. Light, Mage Hand, and Ray of Frost are recommended. Whenever you finish a Long Rest, you can replace one of your cantrips from this feature with another Wizard cantrip of your choice.\n\nWhen you reach Wizard levels 4 and 10, you learn another Wizard cantrip of your choice, as shown in the Cantrips column of the Wizard Features table.\n\nSpellbook. Your wizardly apprenticeship culminated in the creation of a unique book: your spellbook. It is a Tiny object that weighs 3 pounds, contains 100 pages, and can be read only by you or someone casting Identify. You determine the book's appearance and materials, such as a gilt-edged tome or a collection of vellum bound with twine.\n\nThe book contains the level 1+ spells you know. It starts with six level 1 Wizard spells of your choice. Detect Magic, Feather Fall, Mage Armor, Magic Missile, Sleep, and Thunderwave are recommended.\n\nWhenever you gain a Wizard level after 1, add two Wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown in the Wizard Features table. The spells are the culmination of arcane research you do regularly.\n\nSpell Slots. The Wizard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.\n\nPrepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To do so, choose four spells from your spellbook. The chosen spells must be of a level for which you have spell slots.\n\nThe number of spells on your list increases as you gain Wizard levels, as shown in the Prepared Spells column of the Wizard Features table. Whenever that number increases, choose additional Wizard spells until the number of spells on your list matches the number in the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Wizard, your list of prepared spells can include six spells of levels 1 and 2 in any combination, chosen from your spellbook.\n\nIf another Wizard feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Wizard spells for you.\n\nChanging Your Prepared Spells. Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with spells from your spellbook.\n\nSpellcasting Ability. Intelligence is your spellcasting ability for your Wizard spells.\n\nSpellcasting Focus. You can use an Arcane Focus or your spellbook as a Spellcasting Focus for your Wizard spells."
        },
        {
          "level": 1,
          "name": "Ritual Adept",
          "source": "SRD 5.2.1",
          "text": "You can cast any spell as a Ritual if that spell has the Ritual tag and the spell is in your spellbook. You needn't have the spell prepared, but you must read from the book to cast a spell in this way."
        },
        {
          "level": 1,
          "name": "Arcane Recovery",
          "source": "SRD 5.2.1",
          "text": "You can regain some of your magical energy by studying your spellbook. When you finish a Short Rest, you can choose expended spell slots to recover. The spell slots can have a combined level equal to no more than half your Wizard level (round up), and none of the slots can be level 6 or higher. For example, if you're a level 4 Wizard, you can recover up to two levels' worth of spell slots, regaining either one level 2 spell slot or two level 1 spell slots.\n\nOnce you use this feature, you can't do so again until you finish a Long Rest."
        },
        {
          "level": 2,
          "name": "Scholar",
          "source": "SRD 5.2.1",
          "text": "While studying magic, you also specialized in another field of study. Choose one of the following skills in which you have proficiency: Arcana, History, Investigation, Medicine, Nature, or Religion. You have Expertise in the chosen skill."
        },
        {
          "level": 3,
          "name": "Wizard Subclass",
          "source": "SRD 5.2.1",
          "text": "You gain a Wizard subclass of your choice. The Evoker subclass is detailed after this class's description. A subclass is a specialization that grants you features at certain Wizard levels. For the rest of your career, you gain each of your subclass's features that are of your Wizard level or lower.\n\nExpanding and Replacing a Spellbook The spells you add to your spellbook as you gain levels reflect your ongoing magical research, but you might find other spells during your adventures that you can add to the book. You could discover a Wizard spell on a Spell Scroll, for example, and then copy it into your spellbook. Copying a Spell into the Book. When you find a level 1+ Wizard spell, you can copy it into your spellbook if it's of a level you can prepare and if you have time to copy it. For each level of the spell, the transcription takes 2 hours and costs 50 GP. Afterward you can prepare the spell like the other spells in your spellbook. Copying the Book. You can copy a spell from your spellbook into another book. This is like copying a new spell into your spellbook but faster, since you already know how to cast the spell. You need spend only 1 hour and 10 GP for each level of the copied spell. If you lose your spellbook, you can use the same procedure to transcribe the Wizard spells that you have prepared into a new spellbook. Filling out the remainder of the new book requires you to find new spells to do so. For this reason, many wizards keep a backup spellbook."
        },
        {
          "level": 4,
          "name": "Ability Score Improvement",
          "source": "SRD 5.2.1",
          "text": "You gain the Ability Score Improvement feat (see \"Feats\") or another feat of your choice for which you qualify. You gain this feature again at Wizard levels 8, 12, and 16."
        },
        {
          "level": 5,
          "name": "Memorize Spell",
          "source": "SRD 5.2.1",
          "text": "Whenever you finish a Short Rest, you can study your spellbook and replace one of the level 1+ Wizard spells you have prepared for your Spellcasting feature with another level 1+ spell from the book."
        },
        {
          "level": 18,
          "name": "Spell Mastery",
          "source": "SRD 5.2.1",
          "text": "You have achieved such mastery over certain spells that you can cast them at will. Choose a level 1 and a level 2 spell in your spellbook that have a casting time of an action. You always have those spells prepared, and you can cast them at their lowest level without expending a spell slot. To cast either spell at a higher level, you must expend a spell slot.\n\nWhenever you finish a Long Rest, you can study your spellbook and replace one of those spells with an eligible spell of the same level from the book."
        },
        {
          "level": 19,
          "name": "Epic Boon",
          "source": "SRD 5.2.1",
          "text": "You gain an Epic Boon feat (see \"Feats\") or another feat of your choice for which you qualify. Boon of Spell Recall is recommended."
        },
        {
          "level": 20,
          "name": "Signature Spells",
          "source": "SRD 5.2.1",
          "text": "Choose two level 3 spells in your spellbook as your signature spells. You always have these spells prepared, and you can cast each of them once at level 3 without expending a spell slot. When you do so, you can't cast them in this way again until you finish a Short or Long Rest. To cast either spell at a higher level, you must expend a spell slot."
        }
      ],
      "options": []
    }
  },
  "spellRules": {
    "Acid Arrow": "Level 2 Evocation (Wizard)\n\nCasting Time: Action Range: 90 feet Components: V, S, M (powdered rhubarb leaf) Duration: Instantaneous\n\nA shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 Acid damage and 2d4 Acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage only.\n\nUsing a Higher-Level Spell Slot. The damage (both initial and later) increases by 1d4 for each spell slot level above 2.",
    "Acid Splash": "Evocation Cantrip (Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Instantaneous\n\nYou create an acidic bubble at a point within range, where it explodes in a 5-foot-radius Sphere. Each creature in that Sphere must succeed on a Dexterity saving throw or take 1d6 Acid damage.\n\nCantrip Upgrade. The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
    "Aid": "Level 2 Abjuration (Bard, Cleric, Druid, Paladin, Ranger)\n\nCasting Time: Action Range: 30 feet Components: V, S, M (a strip of white cloth) Duration: 8 hours\n\nChoose up to three creatures within range. Each target's Hit Point maximum and current Hit Points increase by 5 for the duration.\n\nUsing a Higher-Level Spell Slot. Each target's Hit Points increase by 5 for each spell slot level above 2.",
    "Alarm": "Level 1 Abjuration (Ranger, Wizard)\n\nCasting Time: 1 minute or Ritual Range: 30 feet Components: V, S, M (a bell and silver wire) Duration: 8 hours\n\nYou set an alarm against intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot Cube. Until the spell ends, an alarm alerts you whenever a creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is audible or mental:\n\nAudible Alarm. The alarm produces the sound of a handbell for 10 seconds within 60 feet of the warded area.\n\nMental Alarm. You are alerted by a mental ping if you are within 1 mile of the warded area. This ping awakens you if you're asleep.",
    "Alter Self": "Level 2 Transmutation (Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S Duration: Concentration, up to 1 hour\n\nYou alter your physical form. Choose one of the following options. Its effects last for the duration, during which you can take a Magic action to replace the option you chose with a different one.\n\nAquatic Adaptation. You sprout gills and grow webs between your fingers. You can breathe underwater and gain a Swim Speed equal to your Speed.\n\nChange Appearance. You alter your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and other distinguishing characteristics. You can make yourself appear as a member of another species, though none of your statistics change. You can't appear as a creature of a different size, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. For the duration, you can take a Magic action to change your appearance in this way again.\n\nNatural Weapons. You grow claws (Slashing), fangs (Piercing), horns (Piercing), or hooves (Bludgeoning). When you use your Unarmed Strike to deal damage with that new growth, it deals 1d6 damage of the type in parentheses instead of dealing the normal damage for your Unarmed Strike, and you use your spellcasting ability modifier for the attack and damage rolls rather than using Strength.",
    "Animal Friendship": "Level 1 Enchantment (Bard, Druid, Ranger)\n\nCasting Time: Action Range: 30 feet Components: V, S, M (a morsel of food) Duration: 24 hours\n\nTarget a Beast that you can see within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. If you or one of your allies deals damage to the target, the spells ends.\n\nUsing a Higher-Level Spell Slot. You can target one additional Beast for each spell slot level above 1.",
    "Animal Messenger": "Level 2 Enchantment (Bard, Druid, Ranger)\n\nCasting Time: Action or Ritual Range: 30 feet Components: V, S, M (a morsel of food) Duration: 24 hours\n\nA Tiny Beast of your choice that you can see within range must succeed on a Charisma saving throw, or it attempts to deliver a message for you (if the target's Challenge Rating isn't 0, it automatically succeeds). You specify a location you have visited and a recipient who matches a general description, such as \"a person dressed in the uniform of the town guard\" or \"a red-haired dwarf wearing a pointed hat.\" You also communicate a message of up to twenty-five words. The Beast travels for the duration toward the specified location, covering about 25 miles per 24 hours or 50 miles if the Beast can fly.\n\nWhen the Beast arrives, it delivers your message to the creature that you described, mimicking your communication. If the Beast doesn't reach its destination before the spell ends, the message is lost, and the Beast returns to where you cast the spell.\n\nUsing a Higher-Level Spell Slot. The spell's duration increases by 48 hours for each spell slot level above 2.",
    "Animal Shapes": "Level 8 Transmutation (Druid)\n\nCasting Time: Action Range: 30 feet Components: V, S Duration: 24 hours\n\nChoose any number of willing creatures that you can see within range. Each target shape-shifts into a Large or smaller Beast of your choice that has a Challenge Rating of 4 or lower. You can choose a different form for each target. On later turns, you can take a Magic action to transform the targets again.\n\nA target's game statistics are replaced by the chosen Beast's statistics, but the target retains its creature type; Hit Points; Hit Point Dice; alignment; ability to communicate; and Intelligence, Wisdom, and Charisma scores. The target's actions are limited by the Beast form's anatomy, and it can't cast spells. The target's equipment melds into the new form, and the target can't use any of that equipment while in that form.\n\nThe target gains a number of Temporary Hit Points equal to the Hit Points of the first form into which it shape-shifts. These Temporary Hit Points vanish if any remain when the spell ends. The transformation lasts for the duration or until the target ends it as a Bonus Action.",
    "Animate Dead": "Level 3 Necromancy (Cleric, Wizard)\n\nCasting Time: 1 minute Range: 10 feet Components: V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust) Duration: Instantaneous\n\nChoose a pile of bones or a corpse of a Medium or Small Humanoid within range. The target becomes an Undead creature: a Skeleton if you chose bones or a Zombie if you chose a corpse (see \"Monsters\" for the stat blocks).\n\nOn each of your turns, you can take a Bonus Action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move on its next turn, or you can issue a general command, such as to guard a chamber or corridor. If you issue no commands, the creature takes the Dodge action and moves only to avoid harm. Once given an order, the creature continues to follow it until its task is complete.\n\nThe creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell rather than animating a new creature.\n\nUsing a Higher-Level Spell Slot. You animate or reassert control over two additional Undead creatures for each spell slot level above 3. Each of the creatures must come from a different corpse or pile of bones.",
    "Animate Objects": "Level 5 Transmutation (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S Duration: Concentration, up to 1 minute\n\nObjects animate at your command. Choose a number of nonmagical objects within range that aren't being worn or carried, aren't fixed to a surface, and aren't Gargantuan. The maximum number of objects is equal to your spellcasting ability modifier; for this number, a Medium or smaller target counts as one object, a Large target counts as two, and a Huge target counts as three.\n\nEach target animates, sprouts legs, and becomes a Construct that uses the Animated Object stat block; this creature is under your control until the spell ends or until it is reduced to 0 Hit Points. Each creature you make with this spell is an ally to you and your allies. In combat, it shares your Initiative count and takes its turn immediately after yours.\n\nUntil the spell ends, you can take a Bonus Action to mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any of them at the same time, issuing the same command to each one). If you issue no commands, the creature takes the Dodge action and moves only to avoid harm. When the creature drops to 0 Hit Points, it reverts to its object form, and any remaining damage carries over to that form.\n\nUsing a Higher-Level Spell Slot. The creature's Slam damage increases by 1d4 (Medium or smaller), 1d6 (Large), or 1d12 (Huge) for each spell slot level above 5.\n\nAnimated Object\n\nHuge or Smaller Construct, Unaligned\n\nAC 15 HP 10 (Medium or smaller), 20 (Large), 40 (Huge) Speed 30 ft.\n\nMOD | SAVE |  | MOD | SAVE |  | MOD | SAVE | \nSTR | 16 | +3 | +3 | DEX | 10 | +0 | +0 | CON | 10 | +0 | +0\nINT | 3 | −4 | −4 | WIS | 3 | −4 | −4 | CHA | 1 | −5 | −5\n\nImmunities Poison, Psychic; Charmed, Exhaustion, Frightened, Paralyzed, Poisoned Senses Blindsight 30 ft.; Passive Perception 6 Languages Understands the languages you know CR None (XP 0; PB equals your Proficiency Bonus)\n\nActions\n\nSlam. Melee Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. Hit: Force damage equal to 1d4 + 3 (Medium or smaller), 2d6 + 3 + your spellcasting ability modifier (Large), or 2d12 + 3 + your spellcasting ability modifier (Huge).",
    "Antilife Shell": "Level 5 Abjuration (Druid)\n\nCasting Time: Action Range: Self Components: V, S Duration: Concentration, up to 1 hour\n\nAn aura extends from you in a 10-foot Emanation for the duration. The aura prevents creatures other than Constructs and Undead from passing or reaching through it. An affected creature can cast spells or make attacks with Ranged or Reach weapons through the barrier.\n\nIf you move so that an affected creature is forced to pass through the barrier, the spell ends.",
    "Antimagic Field": "Level 8 Abjuration (Cleric, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (iron filings) Duration: Concentration, up to 1 hour\n\nAn aura of antimagic surrounds you in 10-foot Emanation. No one can cast spells, take Magic actions, or create other magical effects inside the aura, and those things can't target or otherwise affect anything inside it. Magical properties of magic items don't work inside the aura or on anything inside it.\n\nAreas of effect created by spells or other magic can't extend into the aura, and no one can teleport into or out of it or use planar travel there. Portals close temporarily while in the aura.\n\nOngoing spells, except those cast by an Artifact or a deity, are suppressed in the area. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration.\n\nDispel Magic has no effect on the aura, and the auras created by different Antimagic Field spells don't nullify each other.",
    "Antipathy/Sympathy": "Level 8 Enchantment (Bard, Druid, Wizard)\n\nCasting Time: 1 hour Range: 60 feet Components: V, S, M (a mix of vinegar and honey) Duration: 10 days\n\nAs you cast the spell, choose whether it creates antipathy or sympathy, and target one creature or object that is Huge or smaller. Then specify a kind of creature, such as red dragons, goblins, or vampires. A creature of the chosen kind makes a Wisdom saving throw when it comes within 120 feet of the target. Your choice of antipathy or sympathy determines what happens to a creature when it fails that save:\n\nAntipathy. The creature has the Frightened condition. The Frightened creature must use its movement on its turns to get as far away as possible from the target, moving by the safest route.\n\nSympathy. The creature has the Charmed condition. The Charmed creature must use its movement on its turns to get as close as possible to the target, moving by the safest route. If the creature is within 5 feet of the target, the creature can't willingly move away. If the target damages the Charmed creature, that creature can make a Wisdom saving throw to end the effect, as described below.\n\nEnding the Effect. If the Frightened or Charmed creature ends its turn more than 120 feet away from the target, the creature makes a Wisdom saving throw. On a successful save, the creature is no longer affected by the target. A creature that successfully saves against this effect is immune to it for 1 minute, after which it can be affected again.",
    "Arcane Eye": "Level 4 Divination (Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S, M (a bit of bat fur) Duration: Concentration, up to 1 hour\n\nYou create an Invisible, invulnerable eye within range that hovers for the duration. You mentally receive visual information from the eye, which can see in every direction. It also has Darkvision with a range of 30 feet.\n\nAs a Bonus Action, you can move the eye up to 30 feet in any direction. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter.",
    "Arcane Hand": "Level 5 Evocation (Sorcerer, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S, M (an eggshell and a glove) Duration: Concentration, up to 1 minute\n\nYou create a Large hand of shimmering magical energy in an unoccupied space that you can see within range. The hand lasts for the duration, and it moves at your command, mimicking the movements of your own hand.\n\nThe hand is an object that has AC 20 and Hit Points equal to your Hit Point maximum. If it drops to 0 Hit Points, the spell ends. The hand doesn't occupy its space.\n\nWhen you cast the spell and as a Bonus Action on your later turns, you can move the hand up to 60 feet and then cause one of the following effects:\n\nClenched Fist. The hand strikes a target within 5 feet of it. Make a melee spell attack. On a hit, the target takes 5d8 Force damage.\n\nForceful Hand. The hand attempts to push a Huge or smaller creature within 5 feet of it. The target must succeed on a Strength saving throw, or the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target, remaining within 5 feet of it.\n\nGrasping Hand. The hand attempts to grapple a Huge or smaller creature within 5 feet of it. The target must succeed on a Dexterity saving throw, or the target has the Grappled condition, with an escape DC equal to your spell save DC. While the hand grapples the target, you can take a Bonus Action to cause the hand to crush it, dealing Bludgeoning damage to the target equal to 4d6 plus your spellcasting ability modifier.\n\nInterposing Hand. The hand grants you Half Cover against attacks and other effects that originate from its space or that pass through it. In addition, its space counts as Difficult Terrain for your enemies.\n\nUsing a Higher-Level Spell Slot. The damage of the Clenched Fist increases by 2d8 and the damage of the Grasping Hand increases by 2d6 for each spell slot level above 5.",
    "Arcane Lock": "Level 2 Abjuration (Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (gold dust worth 25+ GP, which the spell consumes) Duration: Until dispelled\n\nYou touch a closed door, window, gate, container, or hatch and magically lock it for the duration. This lock can't be unlocked by any nonmagical means. You and any creatures you designate when you cast the spell can open and close the object despite the lock. You can also set a password that, when spoken within 5 feet of the object, unlocks it for 1 minute.",
    "Arcane Sword": "Level 7 Evocation (Bard, Wizard)\n\nCasting Time: Action Range: 90 feet Components: V, S, M (a miniature sword worth 250+ GP) Duration: Concentration, up to 1 minute\n\nYou create a spectral sword that hovers within range. It lasts for the duration.\n\nWhen the sword appears, you make a melee spell attack against a target within 5 feet of the sword. On a hit, the target takes Force damage equal to 4d12 plus your spellcasting ability modifier.\n\nOn your later turns, you can take a Bonus Action to move the sword up to 30 feet to a spot you can see and repeat the attack against the same target or a different one.",
    "Arcanist's Magic Aura": "Level 2 Illusion (Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (a small square of silk) Duration: 24 hours\n\nWith a touch, you place an illusion on a willing creature or an object that isn't being worn or carried. A creature gains the Mask effect below, and an object gains the False Aura effect below. The effect lasts for the duration. If you cast the spell on the same target every day for 30 days, the illusion lasts until dispelled.\n\nMask (Creature). Choose a creature type other than the target's actual type. Spells and other magical effects treat the target as if it were a creature of the chosen type.\n\nFalse Aura (Object). You change the way the target appears to spells and magical effects that detect magical auras, such as Detect Magic. You can make a nonmagical object appear magical, make a magic item appear nonmagical, or change the object's aura so that it appears to belong to a school of magic you choose.",
    "Astral Projection": "Level 9 Necromancy (Cleric, Warlock, Wizard)\n\nCasting Time: 1 hour Range: 10 feet Components: V, S, M (for each of the spell's targets, one jacinth worth 1,000+ GP and one silver bar worth 100+ GP, all of which the spell consumes) Duration: Until dispelled\n\nYou and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell ends instantly if you are already on that plane). Each target's body is left behind in a state of suspended animation; it has the Unconscious condition, doesn't need food or air, and doesn't age.\n\nA target's astral form resembles its body in almost every way, replicating its game statistics and possessions. The principal difference is the addition of a silvery cord that trails from between the shoulder blades of the astral form. The cord fades from view after 1 foot. If the cord is cut—which happens only when an effect states that it does so—the target's body and astral form both die.\n\nA target's astral form can travel through the Astral Plane. The moment an astral form leaves that plane, the target's body and possessions travel along the silver cord, causing the target to re-enter its body on the new plane.\n\nAny damage or other effects that apply to an astral form have no effect on the target's body and vice versa. If a target's body or astral form drops to 0 Hit Points, the spell ends for that target. The spell ends for all the targets if you take a Magic action to dismiss it.\n\nWhen the spell ends for a target who isn't dead, the target reappears in its body and exits the state of suspended animation.",
    "Augury": "Level 2 Divination (Cleric, Druid, Wizard)\n\nCasting Time: 1 minute or Ritual Range: Self Components: V, S, M (specially marked sticks, bones, cards, or other divinatory tokens worth 25+ GP) Duration: Instantaneous\n\nYou receive an omen from an otherworldly entity about the results of a course of action that you plan to take within the next 30 minutes. The GM chooses the omen from the Omens table.\n\nOmens\n\nOmen | For Results That Will Be …\nWeal | Good\nWoe | Bad\nWeal and woe | Good and bad\nIndifference | Neither good nor bad\n\nThe spell doesn't account for circumstances, such as other spells, that might change the results.\n\nIf you cast the spell more than once before finishing a Long Rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer.",
    "Aura of Life": "Level 4 Abjuration (Cleric, Paladin)\n\nCasting Time: Action Range: Self Components: V Duration: Concentration, up to 10 minutes\n\nAn aura radiates from you in a 30-foot Emanation for the duration. While in the aura, you and your allies have Resistance to Necrotic damage, and your Hit Point maximums can't be reduced. If an ally with 0 Hit Points starts its turn in the aura, that ally regains 1 Hit Point.",
    "Awaken": "Level 5 Transmutation (Bard, Druid)\n\nCasting Time: 8 hours Range: Touch Components: V, S, M (an agate worth 1,000+ GP, which the spell consumes) Duration: Instantaneous\n\nYou spend the casting time tracing magical pathways within a precious gemstone, and then touch the target. The target must be either a Beast or Plant creature with an Intelligence of 3 or less or a natural plant that isn't a creature. The target gains an Intelligence of 10 and the ability to speak one language you know. If the target is a natural plant, it becomes a Plant creature and gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's. The GM chooses statistics appropriate for the awakened Plant, such as the statistics for the Awakened Shrub or Awakened Tree in \"Monsters.\"\n\nThe awakened target has the Charmed condition for 30 days or until you or your allies deal damage to it. When that condition ends, the awakened creature chooses its attitude toward you.",
    "Bane": "Level 1 Enchantment (Bard, Cleric, Warlock)\n\nCasting Time: Action Range: 30 feet Components: V, S, M (a drop of blood) Duration: Concentration, up to 1 minute\n\nUp to three creatures of your choice that you can see within range must each make a Charisma saving throw. Whenever a target that fails this save makes an attack roll or a saving throw before the spell ends, the target must subtract 1d4 from the attack roll or save.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "Banishment": "Level 4 Abjuration (Cleric, Paladin, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S, M (a pentacle) Duration: Concentration, up to 1 minute\n\nOne creature that you can see within range must succeed on a Charisma saving throw or be transported to a harmless demiplane for the duration. While there, the target has the Incapacitated condition. When the spell ends, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.\n\nIf the target is an Aberration, a Celestial, an Elemental, a Fey, or a Fiend, the target doesn't return if the spell lasts for 1 minute. The target is instead transported to a random location on a plane (GM's choice) associated with its creature type.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 4.",
    "Barkskin": "Level 2 Transmutation (Druid, Ranger)\n\nCasting Time: Bonus Action Range: Touch\n\nComponent: V, S, M (a handful of bark) Duration: 1 hour\n\nYou touch a willing creature. Until the spell ends, the target's skin assumes a bark-like appearance, and the target has an Armor Class of 17 if its AC is lower than that.",
    "Beacon of Hope": "Level 3 Abjuration (Cleric)\n\nCasting Time: Action Range: 30 feet Components: V, S Duration: Concentration, up to 1 minute\n\nChoose any number of creatures within range. For the duration, each target has Advantage on Wisdom saving throws and Death Saving Throws and regains the maximum number of Hit Points possible from any healing.",
    "Befuddlement": "Level 8 Enchantment (Bard, Druid, Warlock, Wizard)\n\nCasting Time: Action Range: 150 feet Components: V, S, M (a key ring with no keys) Duration: Instantaneous\n\nYou blast the mind of a creature that you can see within range. The target makes an Intelligence saving throw.\n\nOn a failed save, the target takes 10d12 Psychic damage and can't cast spells or take the Magic action. At the end of every 30 days, the target repeats the save, ending the effect on a success. The effect can also be ended by the Greater Restoration, Heal, or Wish spell.\n\nOn a successful save, the target takes half as much damage only.",
    "Bestow Curse": "Level 3 Necromancy (Bard, Cleric, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S Duration: Concentration, up to 1 minute\n\nYou touch a creature, which must succeed on a Wisdom saving throw or become cursed for the duration. Until the curse ends, the target suffers one of the following effects of your choice:\n\nChoose one ability. The target has Disadvantage on ability checks and saving throws made with that ability. The target has Disadvantage on attack rolls against you. In combat, the target must succeed on a Wisdom saving throw at the start of each of its turns or be forced to take the Dodge action on that turn. • If you deal damage to the target with an attack roll or a spell, the target takes an extra 1d8 Necrotic damage.\n\nUsing a Higher-Level Spell Slot. If you cast this spell using a level 4 spell slot, you can maintain Concentration on it for up to 10 minutes. If you use a level 5+ spell slot, the spell doesn't require Concentration, and the duration becomes 8 hours (level 5–6 slot) or 24 hours (level 7–8 slot). If you use a level 9 spell slot, the spell lasts until dispelled.",
    "Black Tentacles": "Level 4 Conjuration (Wizard)\n\nCasting Time: Action Range: 90 feet Components: V, S, M (a tentacle) Duration: Concentration, up to 1 minute\n\nSquirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in that area into Difficult Terrain.\n\nEach creature in that area makes a Strength saving throw. On a failed save, it takes 3d6 Bludgeoning damage, and it has the Restrained condition until the spell ends. A creature also makes that save if it enters the area or ends it turn there. A creature makes that save only once per turn.\n\nA Restrained creature can take an action to make a Strength (Athletics) check against your spell save DC, ending the condition on itself on a success.",
    "Blade Barrier": "Level 6 Evocation (Cleric)\n\nCasting Time: Action Range: 90 feet Components: V, S Duration: Concentration, up to 10 minutes\n\nYou create a wall of whirling blades made of magical energy. The wall appears within range and lasts for the duration. You make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides Three-Quarters Cover, and its space is Difficult Terrain.\n\nAny creature in the wall's space makes a Dexterity saving throw, taking 6d10 Force damage on a failed save or half as much damage on a successful one. A creature also makes that save if it enters the wall's space or ends it turn there. A creature makes that save only once per turn.",
    "Bless": "Level 1 Enchantment (Cleric, Paladin)\n\nCasting Time: Action Range: 30 feet\n\nComponents: V, S, M (a Holy Symbol worth 5+ GP) Duration: Concentration, up to 1 minute\n\nYou bless up to three creatures within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target adds 1d4 to the attack roll or save.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "Blight": "Level 4 Necromancy (Druid, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S Duration: Instantaneous\n\nA creature that you can see within range makes a Constitution saving throw, taking 8d8 Necrotic damage on a failed save or half as much damage on a successful one. A Plant creature automatically fails the save.\n\nAlternatively, target a nonmagical plant that isn't a creature, such as a tree or shrub. It doesn't make a save; it simply withers and dies.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 4.",
    "Blindness/Deafness": "Level 2 Transmutation (Bard, Cleric, Sorcerer, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V Duration: 1 minute\n\nOne creature that you can see within range must succeed on a Constitution saving throw, or it has the Blinded or Deafened condition (your choice) for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 2.",
    "Blink": "Level 3 Transmutation (Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S Duration: 1 minute\n\nRoll 1d6 at the end of each of your turns for the duration. On a roll of 4–6, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell ends instantly if you are already on that plane). While on the Ethereal Plane, you can perceive the plane you left, which is cast in shades of gray, but you can't see anything there more than 60 feet away. You can affect and be affected only by other creatures on the Ethereal Plane, and creatures on the other plane can't perceive you unless they have a special ability that lets them perceive things on the Ethereal Plane.\n\nYou return to the other plane at the start of your next turn and when the spell ends if you are on the Ethereal Plane. You return to an unoccupied space of your choice that you can see within 10 feet of the space you left. If no unoccupied space is available within that range, you appear in the nearest unoccupied space.",
    "Blur": "Level 2 Illusion (Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V Duration: Concentration, up to 1 minute\n\nYour body becomes blurred. For the duration, any creature has Disadvantage on attack rolls against you. An attacker is immune to this effect if it perceives you with Blindsight or Truesight.",
    "Burning Hands": "Level 1 Evocation (Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S Duration: Instantaneous\n\nA thin sheet of flames shoots forth from you. Each creature in a 15-foot Cone makes a Dexterity saving throw, taking 3d6 Fire damage on a failed save or half as much damage on a successful one.\n\nFlammable objects in the Cone that aren't being worn or carried start burning.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 1.",
    "Call Lightning": "Level 3 Conjuration (Druid)\n\nCasting Time: Action Range: 120 feet Components: V, S Duration: Concentration, up to 10 minutes\n\nA storm cloud appears at a point within range that you can see above yourself. It takes the shape of a Cylinder that is 10 feet tall with a 60-foot radius.\n\nWhen you cast the spell, choose a point you can see under the cloud. A lightning bolt shoots from the cloud to that point. Each creature within 5 feet of that point makes a Dexterity saving throw, taking 3d10 Lightning damage on a failed save or half as much damage on a successful one.\n\nUntil the spell ends, you can take a Magic action to call down lightning in that way again, targeting the same point or a different one.\n\nIf you're outdoors in a storm when you cast this spell, the spell gives you control over that storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d10 for each spell slot level above 3.",
    "Calm Emotions": "Level 2 Enchantment (Bard, Cleric)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Concentration, up to 1 minute\n\nEach Humanoid in a 20-foot-radius Sphere centered on a point you choose within range must succeed on a Charisma saving throw or be affected by one of the following effects (choose for each creature):\n\nThe creature has Immunity to the Charmed and Frightened conditions until the spell ends. If the creature was already Charmed or Frightened, those conditions are suppressed for the duration. The creature becomes Indifferent about creatures of your choice that it's Hostile toward. This indifference ends if the target takes damage or witnesses its allies taking damage. When the spell ends, the creature's attitude returns to normal.",
    "Chain Lightning": "Level 6 Evocation (Sorcerer, Wizard)\n\nCasting Time: Action Range: 150 feet Components: V, S, M (three silver pins) Duration: Instantaneous\n\nYou launch a lightning bolt toward a target you can see within range. Three bolts then leap from that target to as many as three other targets of your choice, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts.\n\nEach target makes a Dexterity saving throw, taking 10d8 Lightning damage on a failed save or half as much damage on a successful one.\n\nUsing a Higher-Level Spell Slot. One additional bolt leaps from the first target to another target for each spell slot level above 6.",
    "Charm Monster": "Level 4 Enchantment (Bard, Druid, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S Duration: 1 hour One creature you can see within range makes a Wisdom saving throw. It does so with Advantage if you or your allies are fighting it. On a failed save, the target has the Charmed condition until the spell ends or until you or your allies damage it. The Charmed creature is Friendly to you. When the spell ends, the target knows it was Charmed by you.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 4.",
    "Charm Person": "Level 1 Enchantment (Bard, Druid, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S Duration: 1 hour\n\nOne Humanoid you can see within range makes a Wisdom saving throw. It does so with Advantage if you or your allies are fighting it. On a failed save, the target has the Charmed condition until the spell ends or until you or your allies damage it. The Charmed creature is Friendly to you. When the spell ends, the target knows it was Charmed by you.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "Chill Touch": "Necromancy Cantrip (Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S Duration: Instantaneous\n\nChanneling the chill of the grave, make a melee spell attack against a target within reach. On a hit, the target takes 1d10 Necrotic damage, and it can't regain Hit Points until the end of your next turn.\n\nCantrip Upgrade. The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10).",
    "Chromatic Orb": "Level 1 Evocation (Sorcerer, Wizard)\n\nCasting Time: Action Range: 90 feet Components: V, S, M (a diamond worth 50+ GP) Duration: Instantaneous\n\nYou hurl an orb of energy at a target within range. Choose Acid, Cold, Fire, Lightning, Poison, or Thunder for the type of orb you create, and then make a ranged spell attack against the target. On a hit, the target takes 3d8 damage of the chosen type.\n\nIf you roll the same number on two or more of the d8s, the orb leaps to a different target of your choice within 30 feet of the target. Make an attack roll against the new target, and make a new damage roll. The orb can't leap again unless you cast the spell with a level 2+ spell slot.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 1. The orb can leap a maximum number of times equal to the level of the slot expended, and a creature can be targeted only once by each casting of this spell.",
    "Circle of Death": "Level 6 Necromancy (Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 150 feet Components: V, S, M (the powder of a crushed black pearl worth 500+ GP) Duration: Instantaneous\n\nNegative energy ripples out in a 60-foot-radius Sphere from a point you choose within range. Each creature in that area makes a Constitution saving throw, taking 8d8 Necrotic damage on a failed save or half as much damage on a successful one.\n\nUsing a Higher-Level Spell Slot. The damage increases by 2d8 for each spell slot level above 6.",
    "Clairvoyance": "Level 3 Divination (Bard, Cleric, Sorcerer, Wizard)\n\nCasting Time: 10 minutes Range: 1 mile Components: V, S, M (a focus worth 100+ GP, either a jeweled horn for hearing or a glass eye for seeing) Duration: Concentration, up to 10 minutes\n\nYou create an Invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The intangible, invulnerable sensor remains in place for the duration.\n\nWhen you cast the spell, choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As a Bonus Action, you can switch between seeing and hearing.\n\nA creature that sees the sensor (such as a creature benefiting from See Invisibility or Truesight) sees a luminous orb about the size of your fist.",
    "Clone": "Level 8 Necromancy (Wizard)\n\nCasting Time: 1 hour Range: Touch Components: V, S, M (a diamond worth 1,000+ GP, which the spell consumes, and a sealable vessel worth 2,000+ GP that is large enough to hold the creature being cloned) Duration: Instantaneous You touch a creature or at least 1 cubic inch of its flesh. An inert duplicate of that creature forms inside the vessel used in the spell's casting and finishes growing after 120 days; you choose whether the finished clone is the same age as the creature or younger. The clone remains inert and endures indefinitely while its vessel remains undisturbed.\n\nIf the original creature dies after the clone finishes forming, the creature's soul transfers to the clone if the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original's equipment. The creature's original remains, if any, become inert and can't be revived, since the creature's soul is elsewhere.",
    "Cloudkill": "Level 5 Conjuration (Sorcerer, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S Duration: Concentration, up to 10 minutes\n\nYou create a 20-foot-radius Sphere of yellow-green fog centered on a point within range. The fog lasts for the duration or until strong wind (such as the one created by Gust of Wind) disperses it, ending the spell. Its area is Heavily Obscured.\n\nEach creature in the Sphere makes a Constitution saving throw, taking 5d8 Poison damage on a failed save or half as much damage on a successful one. A creature must also make this save when the Sphere moves into its space and when it enters the Sphere or ends its turn there. A creature makes this save only once per turn.\n\nThe Sphere moves 10 feet away from you at the start of each of your turns.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 5.",
    "Color Spray": "Level 1 Illusion (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (a pinch of colorful sand) Duration: Instantaneous\n\nYou launch a dazzling array of flashing, colorful light. Each creature in a 15-foot Cone originating from you must succeed on a Constitution saving throw or have the Blinded condition until the end of your next turn.",
    "Command": "Level 1 Enchantment (Bard, Cleric, Paladin)\n\nCasting Time: Action Range: 60 feet Components: V Duration: Instantaneous\n\nYou speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. Choose the command from these options:\n\nApproach. The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.\n\nDrop. The target drops whatever it is holding and then ends its turn.\n\nFlee. The target spends its turn moving away from you by the fastest available means.\n\nGrovel. The target has the Prone condition and then ends its turn.\n\nHalt. On its turn, the target doesn't move and takes no action or Bonus Action.\n\nUsing a Higher-Level Spell Slot. You can affect one additional creature for each spell slot level above 1.",
    "Commune": "Level 5 Divination (Cleric)\n\nCasting Time: 1 minute or Ritual Range: Self Components: V, S, M (incense) Duration: 1 minute\n\nYou contact a deity or a divine proxy and ask up to three questions that can be answered with yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.\n\nDivine beings aren't necessarily omniscient, so you might receive \"unclear\" as an answer if a question pertains to information that lies beyond the deity's knowledge. In a case where a one-word answer could be misleading or contrary to the deity's interests, the GM might offer a short phrase as an answer instead.\n\nIf you cast the spell more than once before finishing a Long Rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer.",
    "Commune with Nature": "Level 5 Divination (Druid, Ranger)\n\nCasting Time: 1 minute or Ritual Range: Self Components: V, S Duration: Instantaneous\n\nYou commune with nature spirits and gain knowledge of the surrounding area. In the outdoors, the spell gives you knowledge of the area within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn't function where nature has been replaced by construction, such as in castles and settlements.\n\nChoose three of the following facts; you learn those facts as they pertain to the spell's area:\n\n• Locations of settlements • Locations of portals to other planes of existence • Location of one Challenge Rating 10+ creature (GM's choice) that is a Celestial, an Elemental, a Fey, a Fiend, or an Undead • The most prevalent kind of plant, mineral, or Beast (you choose which to learn) • Locations of bodies of water\n\nFor example, you could determine the location of a powerful monster in the area, the locations of bodies of water, and the locations of any towns.",
    "Comprehend Languages": "Level 1 Divination (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action or Ritual Range: Self Components: V, S, M (a pinch of soot and salt) Duration: 1 hour\n\nFor the duration, you understand the literal meaning of any language that you hear or see signed. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesn't decode symbols or secret messages.",
    "Compulsion": "Level 4 Enchantment (Bard)\n\nCasting Time: Action Range: 30 feet Components: V, S Duration: Concentration, up to 1 minute\n\nEach creature of your choice that you can see within range must succeed on a Wisdom saving throw or have the Charmed condition until the spell ends.\n\nFor the duration, you can take a Bonus Action to designate a direction that is horizontal to you. Each Charmed target must use as much of its movement as possible to move in that direction on its next turn, taking the safest route. After moving in this way, a target repeats the save, ending the spell on itself on a success.",
    "Cone of Cold": "Level 5 Evocation (Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (a small crystal or glass cone) Duration: Instantaneous\n\nYou unleash a blast of cold air. Each creature in a 60-foot Cone originating from you makes a Constitution saving throw, taking 8d8 Cold damage on a failed save or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 5.",
    "Confusion": "Level 4 Enchantment (Bard, Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 90 feet Components: V, S, M (three nut shells) Duration: Concentration, up to 1 minute\n\nEach creature in a 10-foot-radius Sphere centered on a point you choose within range must succeed on a Wisdom saving throw, or that target can't take Bonus Actions or Reactions and must roll 1d10 at the start of each of its turns to determine its behavior for that turn, consulting the table below.\n\n1d10 | Behavior for the Turn\n1 | The target doesn't take an action, and it uses all its movement to move. Roll 1d4 for the direction: 1, north; 2, east; 3, south; or 4, west.\n2–6 | The target doesn't move or take actions.\n7–8 | The target doesn't move, and it takes the Attack action to make one melee attack against a random creature within reach. If none are within reach, the target takes no action.\n9–10 | The target chooses its behavior.\n\nAt the end of each of its turns, an affected target repeats the save, ending the spell on itself on a success.\n\nUsing a Higher-Level Spell Slot. The Sphere's radius increases by 5 feet for each spell slot level above 4.",
    "Conjure Animals": "Level 3 Conjuration (Druid, Ranger)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Concentration, up to 10 minutes\n\nYou conjure nature spirits that appear as a Large pack of spectral, intangible animals in an unoccupied space you can see within range. The pack lasts for the duration, and you choose the spirits' animal form, such as wolves, serpents, or birds.\n\nYou have Advantage on Strength saving throws while you're within 5 feet of the pack, and when you move on your turn, you can also move the pack up to 30 feet to an unoccupied space you can see.\n\nWhenever the pack moves within 10 feet of a creature you can see and whenever a creature you can see enters a space within 10 feet of the pack or ends its turn there, you can force that creature to make a Dexterity saving throw. On a failed save, the creature takes 3d10 Slashing damage. A creature makes this save only once per turn.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d10 for each spell slot level above 3.",
    "Conjure Celestial": "Level 7 Conjuration (Cleric)\n\nCasting Time: Action Range: 90 feet Components: V, S Duration: Concentration, up to 10 minutes\n\nYou conjure a spirit from the Upper Planes, which manifests as a pillar of light in a 10-foot-radius, 40-foot-high Cylinder centered on a point within range. For each creature you can see in the Cylinder, choose which of these lights shines on it:\n\nHealing Light. The target regains Hit Points equal to 4d12 plus your spellcasting ability modifier.\n\nSearing Light. The target makes a Dexterity saving throw, taking 6d12 Radiant damage on a failed save or half as much damage on a successful one.\n\nUntil the spell ends, Bright Light fills the Cylinder, and when you move on your turn, you can also move the Cylinder up to 30 feet.\n\nWhenever the Cylinder moves into the space of a creature you can see and whenever a creature you can see enters the Cylinder or ends its turn there, you can bathe it in one of the lights. A creature can be affected by this spell only once per turn.\n\nUsing a Higher-Level Spell Slot. The healing and damage increase by 1d12 for each spell slot level above 7.",
    "Conjure Elemental": "Level 5 Conjuration (Druid, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Concentration, up to 10 minutes\n\nYou conjure a Large, intangible spirit from the Elemental Planes that appears in an unoccupied space within range. Choose the spirit's element, which determines its damage type: air (Lightning), earth (Thunder), fire (Fire), or water (Cold). The spirit lasts for the duration.\n\nWhenever a creature you can see enters the spirit's space or starts its turn within 5 feet of the spirit, you can force that creature to make a Dexterity saving throw if the spirit has no creature Restrained. On failed save, the target takes 8d8 damage of the spirit's type, and the target has the Restrained condition until the spell ends. At the start of each of its turns, the Restrained target repeats the save.\n\nOn a failed save, the target takes 4d8 damage of the spirit's type. On a successful save, the target isn't Restrained by the spirit.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 5.",
    "Conjure Fey": "Level 6 Conjuration (Druid)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Concentration, up to 10 minutes\n\nYou conjure a Medium spirit from the Feywild in an unoccupied space you can see within range. The spirit lasts for the duration, and it looks like a Fey creature of your choice. When the spirit appears, you can make one melee spell attack against a creature within 5 feet of it. On a hit, the target takes Psychic damage equal to 3d12 plus your spellcasting ability modifier, and the target has the Frightened condition until the start of your next turn, with both you and the spirit as the source of the fear.\n\nAs a Bonus Action on your later turns, you can teleport the spirit to an unoccupied space you can see within 30 feet of the space it left and make the attack against a creature within 5 feet of it.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d12 for each spell slot level above 6.",
    "Conjure Minor Elementals": "Level 4 Conjuration (Druid, Wizard)\n\nCasting Time: Action Range: Self Components: V, S Duration: Concentration, up to 10 minutes\n\nYou conjure spirits from the Elemental Planes that flit around you in a 15-foot Emanation for the duration. Until the spell ends, any attack you make deals an extra 2d8 damage when you hit a creature in the Emanation. This damage is Acid, Cold, Fire, or Lightning (your choice when you make the attack).\n\nIn addition, the ground in the Emanation is Difficult Terrain for your enemies.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 4.",
    "Conjure Woodland Beings": "Level 4 Conjuration (Druid, Ranger)\n\nCasting Time: Action Range: Self Components: V, S Duration: Concentration, up to 10 minutes\n\nYou conjure nature spirits that flit around you in a 10-foot Emanation for the duration. Whenever the Emanation enters the space of a creature you can see and whenever a creature you can see enters the Emanation or ends its turn there, you can force that creature to make a Wisdom saving throw. The creature takes 5d8 Force damage on a failed save or half as much damage on a successful one. A creature makes this save only once per turn.\n\nIn addition, you can take the Disengage action as a Bonus Action for the spell's duration.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 4.",
    "Contact Other Plane": "Level 5 Divination (Warlock, Wizard)\n\nCasting Time: 1 minute or Ritual Range: Self Components: V Duration: 1 minute\n\nYou mentally contact a demigod, the spirit of a long-dead sage, or some other knowledgeable entity from another plane. Contacting this otherworldly intelligence can break your mind. When you cast this spell, make a DC 15 Intelligence saving throw. On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The GM answers each question with one word, such as \"yes,\" \"no,\" \"maybe,\" \"never,\" \"irrelevant,\" or \"unclear\" (if the entity doesn't know the answer to the question). If a one-word answer would be misleading, the GM might instead offer a short phrase as an answer.\n\nOn a failed save, you take 6d6 Psychic damage and have the Incapacitated condition until you finish a Long Rest. A Greater Restoration spell cast on you ends this effect.",
    "Contagion": "Level 5 Necromancy (Cleric, Druid)\n\nCasting Time: Action Range: Touch Component: V, S Duration: 7 days\n\nYour touch inflicts a magical contagion. The target must succeed on a Constitution saving throw or take 11d8 Necrotic damage and have the Poisoned condition. Also, choose one ability when you cast the spell. While Poisoned, the target has Disadvantage on saving throws made with the chosen ability.\n\nThe target must repeat the saving throw at the end of each of its turns until it gets three successes or failures. If the target succeeds on three of these saves, the spell ends on the target. If the target fails three of the saves, the spell lasts for 7 days on it.\n\nWhenever the Poisoned target receives an effect that would end the Poisoned condition, the target must succeed on a Constitution saving throw, or the Poisoned condition doesn't end on it.",
    "Contingency": "Level 6 Abjuration (Wizard)\n\nCasting Time: 10 minutes Range: Self Components: V, S, M (a gem-encrusted statuette of yourself worth 1,500+ GP) Duration: 10 days\n\nChoose a spell of level 5 or lower that you can cast, that has a casting time of an action, and that can target you. You cast that spell—called the contingent spell—as part of casting Contingency, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain trigger occurs. You describe that trigger when you cast the two spells. For example, a Contingency cast with Water Breathing might stipulate that Water Breathing comes into effect when you are engulfed in water or a similar liquid.\n\nThe contingent spell takes effect immediately after the trigger occurs for the first time, whether or not you want it to, and then Contingency ends.\n\nThe contingent spell takes effect only on you, even if it can normally target others. You can use only one Contingency spell at a time. If you cast this spell again, the effect of another Contingency spell on you ends. Also, Contingency ends on you if its material component is ever not on your person.",
    "Continual Flame": "Level 2 Evocation (Cleric, Druid, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (ruby dust worth 50+ GP, which the spell consumes) Duration: Until dispelled\n\nA flame springs from an object that you touch. The effect casts Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. It looks like a regular flame, but it creates no heat and consumes no fuel. The flame can be covered or hidden but not smothered or quenched.",
    "Control Water": "Level 4 Transmutation (Cleric, Druid, Wizard)\n\nCasting Time: Action Range: 300 feet Components: V, S, M (a mixture of water and dust) Duration: Concentration, up to 10 minutes\n\nUntil the spell ends, you control any water inside an area you choose that is a Cube up to 100 feet on a side, using one of the following effects. As a Magic action on your later turns, you can repeat the same effect or choose a different one.\n\nFlood. You cause the water level of all standing water in the area to rise by as much as 20 feet. If you choose an area in a large body of water, you instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes. Any Huge or smaller vehicles in the wave's path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing.\n\nThe water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts.\n\nPart Water. You part water in the area and create a trench. The trench extends across the spell's area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored.\n\nRedirect Flow. You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spell's area, it resumes its flow based on the terrain. The water continues to move in the direction you chose until the spell ends or you choose a different effect.\n\nWhirlpool. You cause a whirlpool to form in the center of the area, which must be at least 50 feet square and 25 feet deep. The whirlpool lasts until you choose a different effect or the spell ends. The whirlpool is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature in the water and within 25 feet of the whirlpool is pulled 10 feet toward it. When a creature enters the whirlpool for the first time on a turn or ends its turn there, it makes a Strength saving throw. On a failed save, the creature takes 2d8 Bludgeoning damage. On a successful save, the creature takes half as much damage. A creature can swim away from the whirlpool only if it first takes an action to pull away and succeeds on a Strength (Athletics) check against your spell save DC.",
    "Control Weather": "Level 8 Transmutation (Cleric, Druid, Wizard)\n\nCasting Time: 10 minutes Range: Self Components: V, S, M (burning incense) Duration: Concentration, up to 8 hours\n\nYou take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell, and it ends early if you go indoors.\n\nWhen you cast the spell, you change the current weather conditions, which are determined by the GM. You can change precipitation, temperature, and wind. It takes 1d4 × 10 minutes for the new\n\nconditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal.\n\nWhen you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. When changing the wind, you can change its direction.\n\nPrecipitation\n\nStage | Condition\n1 | Clear\n2 | Light clouds\n3 | Overcast or ground fog\n4 | Rain, hail, or snow\n5 | Torrential rain, driving hail, or blizzard\n\nTemperature\n\nStage | Condition\n1 | Heat wave\n2 | Hot\n3 | Warm\n4 | Cool\n5 | Cold\n6 | Freezing\n\nWind\n\nStage | Condition\n1 | Calm\n2 | Moderate wind\n3 | Strong wind\n4 | Gale\n5 | Storm",
    "Counterspell": "Level 3 Abjuration (Sorcerer, Warlock, Wizard)\n\nCasting Time: Reaction, which you take when you see a creature within 60 feet of yourself casting a spell with Verbal, Somatic, or Material components Range: 60 feet Components: S Duration: Instantaneous\n\nYou attempt to interrupt a creature in the process of casting a spell. The creature makes a Constitution saving throw. On a failed save, the spell dissipates with no effect, and the action, Bonus Action, or Reaction used to cast it is wasted. If that spell was cast with a spell slot, the slot isn't expended.",
    "Create Food and Water": "Level 3 Conjuration (Cleric, Paladin)\n\nCasting Time: Action Range: 30 feet Components: V, S Duration: Instantaneous\n\nYou create 45 pounds of food and 30 gallons of fresh water on the ground or in containers within range—both useful in fending off the hazards of malnutrition and dehydration. The food is bland but nourishing and looks like a food of your choice, and the water is clean. The food spoils after 24 hours if uneaten.",
    "Create or Destroy Water": "Level 1 Transmutation (Cleric, Druid)\n\nCasting Time: Action Range: 30 feet Components: V, S, M (a mix of water and sand) Duration: Instantaneous\n\nYou do one of the following:\n\nCreate Water. You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot Cube within range, extinguishing exposed flames there.\n\nDestroy Water. You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot Cube within range.\n\nUsing a Higher-Level Spell Slot. You create or destroy 10 additional gallons of water, or the size of the Cube increases by 5 feet, for each spell slot level above 1.",
    "Create Undead": "Level 6 Necromancy (Cleric, Warlock, Wizard)\n\nCasting Time: 1 minute Range: 10 feet Components: V, S, M (one 150+ GP black onyx stone for each corpse) Duration: Instantaneous\n\nYou can cast this spell only at night. Choose up to three corpses of Medium or Small Humanoids within range. Each one becomes a Ghoul under your control (see \"Monsters\" for its stat block).\n\nAs a Bonus Action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any of them at the same time, issuing the same command to them). You decide what action the creature will take and where it will move on its next turn, or you can issue a general command, such as to guard a particular place. If you issue no commands, the creature takes the Dodge action and moves only to avoid harm. Once given an order, the creature continues to follow the order until its task is complete.\n\nThe creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell rather than animating new ones.\n\nUsing a Higher-Level Spell Slot. If you use a level 7 spell slot, you can animate or reassert control over four Ghouls. If you use a level 8 spell slot, you can animate or reassert control over five Ghouls or two Ghasts or Wights. If you use a level 9 spell slot, you can animate or reassert control over six Ghouls, three Ghasts or Wights, or two Mummies. See \"Monsters\" for these stat blocks.",
    "Creation": "Level 5 Illusion (Sorcerer, Wizard)\n\nCasting Time: 1 minute Range: 30 feet Components: V, S, M (a paintbrush) Duration: Special\n\nYou pull wisps of shadow material from the Shadowfell to create an object within range. It is either an object of vegetable matter (soft goods, rope, wood, and the like) or mineral matter (stone, crystal, metal, and the like). The object must be no larger than a 5-foot Cube, and the object must be of a form and material that you have seen.\n\nThe spell's duration depends on the object's material, as shown in the Materials table. If the object is composed of multiple materials, use the shortest duration. Using any object created by this spell as another spell's Material component causes the other spell to fail.\n\nMaterials\n\nMaterial | Duration\nVegetable matter | 24 hours\nStone or crystal | 12 hours\nPrecious metals | 1 hour\nGems | 10 minutes\nAdamantine or mithral | 1 minute\n\nUsing a Higher-Level Spell Slot. The Cube increases by 5 feet for each spell slot level above 5.",
    "Cure Wounds": "Level 1 Abjuration (Bard, Cleric, Druid, Paladin, Ranger)\n\nCasting Time: Action Range: Touch Components: V, S Duration: Instantaneous\n\nA creature you touch regains a number of Hit Points equal to 2d8 plus your spellcasting ability modifier.\n\nUsing a Higher-Level Spell Slot. The healing increases by 2d8 for each spell slot level above 1.",
    "Dancing Lights": "Illusion Cantrip (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S, M (a bit of phosphorus) Duration: Concentration, up to 1 minute You create up to four torch-size lights within range, making them appear as torches, lanterns, or glowing orbs that hover for the duration. Alternatively, you combine the four lights into one glowing Medium form that is vaguely humanlike. Whichever form you choose, each light sheds Dim Light in a 10-foot radius.\n\nAs a Bonus Action, you can move the lights up to 60 feet to a space within range. A light must be within 20 feet of another light created by this spell, and a light vanishes if it exceeds the spell's range.",
    "Darkness": "Level 2 Evocation (Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, M (bat fur and a piece of coal) Duration: Concentration, up to 10 minutes\n\nFor the duration, magical Darkness spreads from a point within range and fills a 15-foot-radius Sphere. Darkvision can't see through it, and nonmagical light can't illuminate it.\n\nAlternatively, you cast the spell on an object that isn't being worn or carried, causing the Darkness to fill a 15-foot Emanation originating from that object. Covering that object with something opaque, such as a bowl or helm, blocks the Darkness.\n\nIf any of this spell's area overlaps with an area of Bright Light or Dim Light created by a spell of level 2 or lower, that other spell is dispelled.",
    "Darkvision": "Level 2 Transmutation (Druid, Ranger, Sorcerer, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (a dried carrot) Duration: 8 hours\n\nFor the duration, a willing creature you touch has Darkvision with a range of 150 feet.",
    "Daylight": "Level 3 Evocation (Cleric, Druid, Paladin, Ranger, Sorcerer)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: 1 hour\n\nFor the duration, sunlight spreads from a point within range and fills a 60-foot-radius Sphere. The sunlight's area is Bright Light and sheds Dim Light for an additional 60 feet.\n\nAlternatively, you cast the spell on an object that isn't being worn or carried, causing the sunlight to fill a 60-foot Emanation originating from that object. Covering that object with something opaque, such as a bowl or helm, blocks the sunlight.\n\nIf any of this spell's area overlaps with an area of Darkness created by a spell of level 3 or lower, that other spell is dispelled.",
    "Death Ward": "Level 4 Abjuration (Cleric, Paladin)\n\nCasting Time: Action Range: Touch Components: V, S Duration: 8 hours\n\nYou touch a creature and grant it a measure of protection from death. The first time the target would drop to 0 Hit Points before the spell ends, the target instead drops to 1 Hit Point, and the spell ends.\n\nIf the spell is still in effect when the target is subjected to an effect that would kill it instantly without dealing damage, that effect is negated against the target, and the spell ends.",
    "Delayed Blast Fireball": "Level 7 Evocation (Sorcerer, Wizard)\n\nCasting Time: Action Range: 150 feet Components: V, S, M (a ball of bat guano and sulfur) Duration: Concentration, up to 1 minute\n\nA beam of yellow light flashes from you, then condenses at a chosen point within range as a glowing bead for the duration. When the spell ends, the bead explodes, and each creature in a 20-foot-radius Sphere centered on that point makes a Dexterity saving throw. A creature takes Fire damage equal to the total accumulated damage on a failed save or half as much damage on a successful one.\n\nThe spell's base damage is 12d6, and the damage increases by 1d6 whenever your turn ends and the spell hasn't ended.\n\nIf a creature touches the glowing bead before the spell ends, that creature makes a Dexterity saving throw. On a failed save, the spell ends, causing the bead to explode. On a successful save, the creature can throw the bead up to 40 feet. If the thrown bead enters a creature's space or collides with a solid object, the spell ends, and the bead explodes.\n\nWhen the bead explodes, flammable objects in the explosion that aren't being worn or carried start burning.\n\nUsing a Higher-Level Spell Slot. The base damage increases by 1d6 for each spell slot level above 7.",
    "Demiplane": "Level 8 Conjuration (Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 60 feet Components: S Duration: 1 hour You create a shadowy Medium door on a flat solid surface that you can see within range. This door can be opened and closed, and it leads to a demiplane that is an empty room 30 feet in each dimension, made of wood or stone (your choice).\n\nWhen the spell ends, the door vanishes, and any objects inside the demiplane remain there. Any creatures inside also remain unless they opt to be shunted through the door as it vanishes, landing with the Prone condition in the unoccupied spaces closest to the door's former space.\n\nEach time you cast this spell, you can create a new demiplane or connect the shadowy door to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can connect the shadowy door to that demiplane instead.",
    "Detect Evil and Good": "Level 1 Divination (Cleric, Paladin)\n\nCasting Time: Action Range: Self Components: V, S Duration: Concentration, up to 10 minutes\n\nFor the duration, you sense the location of any Aberration, Celestial, Elemental, Fey, Fiend, or Undead within 30 feet of yourself. You also sense whether the Hallow spell is active there and, if so, where.\n\nThe spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
    "Detect Magic": "Level 1 Divination (Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action or Ritual Range: Self Components: V, S Duration: Concentration, up to 10 minutes\n\nFor the duration, you sense the presence of magical effects within 30 feet of yourself. If you sense such effects, you can take the Magic action to see a faint aura around any visible creature or object in the area that bears the magic, and if an effect was created by a spell, you learn the spell's school of magic.\n\nThe spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
    "Detect Poison and Disease": "Level 1 Divination (Cleric, Druid, Paladin, Ranger)\n\nCasting Time: Action or Ritual Range: Self Components: V, S, M (a yew leaf) Duration: Concentration, up to 10 minutes\n\nFor the duration, you sense the location of poisons, poisonous or venomous creatures, and magical contagions within 30 feet of yourself. You sense the kind of poison, creature, or contagion in each case.\n\nThe spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
    "Detect Thoughts": "Level 2 Divination (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (1 Copper Piece) Duration: Concentration, up to 1 minute\n\nYou activate one of the effects below. Until the spell ends, you can activate either effect as a Magic action on your later turns.\n\nSense Thoughts. You sense the presence of thoughts within 30 feet of yourself that belong to creatures that know languages or are telepathic. You don't read the thoughts, but you know that a thinking creature is present.\n\nThe spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.\n\nRead Thoughts. Target one creature you can see within 30 feet of yourself or one creature within 30 feet of yourself that you detected with the Sense Thoughts option. You learn what is most on the target's mind right now. If the target doesn't know any languages and isn't telepathic, you learn nothing.\n\nAs a Magic action on your next turn, you can try to probe deeper into the target's mind. If you probe deeper, the target makes a Wisdom saving throw. On a failed save, you discern the target's reasoning, emotions, and something that looms large in its mind (such as a worry, love, or hate). On a successful save, the spell ends. Either way, the target knows that you are probing into its mind, and until you shift your attention away from the target's mind, the target can take an action on its turn to make an Intelligence (Arcana) check against your spell save DC, ending the spell on a success.",
    "Dimension Door": "Level 4 Conjuration (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 500 feet Components: V Duration: Instantaneous\n\nYou teleport to a location within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as \"200 feet straight downward\" or \"300 feet upward to the northwest at a 45-degree angle.\"\n\nYou can also teleport one willing creature. The creature must be within 5 feet of you when you teleport, and it teleports to a space within 5 feet of your destination space. If you, the other creature, or both would arrive in a space occupied by a creature or completely filled by one or more objects, you and any creature traveling with you each take 4d6 Force damage, and the teleportation fails.",
    "Disguise Self": "Level 1 Illusion (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S Duration: 1 hour\n\nYou make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends. You can seem 1 foot shorter or taller and can appear heavier or lighter. You must adopt a form that has the same basic arrangement of limbs as you have. Otherwise, the extent of the illusion is up to you.\n\nThe changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing.\n\nTo discern that you are disguised, a creature must take the Study action to inspect your appearance and succeed on an Intelligence (Investigation) check against your spell save DC.",
    "Disintegrate": "Level 6 Transmutation (Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a lodestone and dust) Duration: Instantaneous\n\nYou launch a green ray at a target you can see within range. The target can be a creature, a nonmagical object, or a creation of magical force, such as the wall created by Wall of Force.\n\nA creature targeted by this spell makes a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 Force damage. If this damage reduces it to 0 Hit Points, it and everything nonmagical it is wearing and carrying are disintegrated into gray dust. The target can be revived only by a True Resurrection or a Wish spell.\n\nThis spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If such a target is Huge or larger, this spell disintegrates a 10-foot-Cube portion of it.\n\nUsing a Higher-Level Spell Slot. The damage increases by 3d6 for each spell slot level above 6.",
    "Dispel Evil and Good": "Level 5 Abjuration (Cleric, Paladin)\n\nCasting Time: Action Range: Self Components: V, S, M (powdered silver and iron) Duration: Concentration, up to 1 minute\n\nFor the duration, Celestials, Elementals, Fey, Fiends, and Undead have Disadvantage on attack rolls against you. You can end the spell early by using either of the following special functions.\n\nBreak Enchantment. As a Magic action, you touch a creature that is possessed by or has the Charmed or Frightened condition from one or more creatures of the types above. The target is no longer possessed, Charmed, or Frightened by such creatures.\n\nDismissal. As a Magic action, you target one creature you can see within 5 feet of you that has one of the creature types above. The target must succeed on a Charisma saving throw or be sent back to its home plane if it isn't there already. If they aren't on their home plane, Undead are sent to the Shadowfell, and Fey are sent to the Feywild.",
    "Dispel Magic": "Level 3 Abjuration (Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S Duration: Instantaneous\n\nChoose one creature, object, or magical effect within range. Any ongoing spell of level 3 or lower on the target ends. For each ongoing spell of level 4 or higher on the target, make an ability check using your spellcasting ability (DC 10 plus that spell's level). On a successful check, the spell ends.\n\nUsing a Higher-Level Spell Slot. You automatically end a spell on the target if the spell's level is equal to or less than the level of the spell slot you use.",
    "Dissonant Whispers": "Level 1 Enchantment (Bard)\n\nCasting Time: Action Range: 60 feet Components: V Duration: Instantaneous\n\nOne creature of your choice that you can see within range hears a discordant melody in its mind. The target makes a Wisdom saving throw. On a failed save, it takes 3d6 Psychic damage and must immediately use its Reaction, if available, to move as far away from you as it can, using the safest route. On a successful save, the target takes half as much damage only.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 1.",
    "Divination": "Level 4 Divination (Cleric, Druid, Wizard)\n\nCasting Time: Action or Ritual Range: Self Components: V, S, M (incense worth 25+ GP, which the spell consumes) Duration: Instantaneous\n\nThis spell puts you in contact with a god or a god's servants. You ask one question about a specific goal, event, or activity to occur within 7 days. The GM offers a truthful reply, which might be a short phrase or cryptic rhyme. The spell doesn't account for circumstances that might change the answer, such as the casting of other spells.\n\nIf you cast the spell more than once before finishing a Long Rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer.",
    "Divine Favor": "Level 1 Transmutation (Paladin)\n\nCasting Time: Bonus Action Range: Self Components: V, S Duration: 1 minute\n\nUntil the spell ends, your attacks with weapons deal an extra 1d4 Radiant damage on a hit.",
    "Divine Smite": "Level 1 Evocation (Paladin)\n\nCasting Time: Bonus Action, which you take immediately after hitting a target with a Melee weapon or an Unarmed Strike Range: Self Component: V Duration: Instantaneous\n\nThe target takes an extra 2d8 Radiant damage from the attack. The damage increases by 1d8 if the target is a Fiend or an Undead.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 1.",
    "Divine Word": "Level 7 Evocation (Cleric)\n\nCasting Time: Bonus Action Range: 30 feet Components: V Duration: Instantaneous\n\nYou utter a word imbued with power from the Upper Planes. Each creature of your choice in range makes a Charisma saving throw. On a failed save, a target that has 50 Hit Points or fewer suffers an effect based on its current Hit Points, as shown in the Divine Word Effects table. Regardless of its Hit Points, a Celestial, an Elemental, a Fey, or a Fiend target that fails its save is forced back to its plane of origin (if it isn't there already) and can't return to the current plane for 24 hours by any means short of a Wish spell.\n\nDivine Word Effects\n\nHit Points | Effect\n0–20 | The target dies.\n21–30 | The target has the Blinded, Deafened, and Stunned conditions for 1 hour.\n31–40 | The target has the Blinded and Deafened conditions for 10 minutes.\n41–50 | The target has the Deafened condition for 1 minute.",
    "Dominate Beast": "Level 4 Enchantment (Druid, Ranger, Sorcerer)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Concentration, up to 1 minute\n\nOne Beast you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success.\n\nYou have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as \"Attack that creature,\" \"Move over there,\" or \"Fetch that object.\" The target does its best to obey on its turn. If it completes an order and doesn't receive further direction from you, it acts and moves as it likes, focusing on protecting itself.\n\nYou can command the target to take a Reaction but must take your own Reaction to do so.\n\nUsing a Higher-Level Spell Slot. Your Concentration can last longer with a spell slot of level 5 (up to 10 minutes), 6 (up to 1 hour), or 7+ (up to 8 hours).",
    "Dominate Monster": "Level 8 Enchantment (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Concentration, up to 1 hour\n\nOne creature you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success. You have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as \"Attack that creature,\" \"Move over there,\" or \"Fetch that object.\" The target does its best to obey on its turn. If it completes an order and doesn't receive further direction from you, it acts and moves as it likes, focusing on protecting itself.\n\nYou can command the target to take a Reaction but must take your own Reaction to do so.\n\nUsing a Higher-Level Spell Slot. Your Concentration can last longer with a level 9 spell slot (up to 8 hours).",
    "Dominate Person": "Level 5 Enchantment (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Concentration, up to 1 minute\n\nOne Humanoid you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success.\n\nYou have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as \"Attack that creature,\" \"Move over there,\" or \"Fetch that object.\" The target does its best to obey on its turn. If it completes an order and doesn't receive further direction from you, it acts and moves as it likes, focusing on protecting itself.\n\nYou can command the target to take a Reaction but must take your own Reaction to do so.\n\nUsing a Higher-Level Spell Slot. Your Concentration can last longer with a spell slot of level 6 (up to 10 minutes), 7 (up to 1 hour), or 8+ (up to 8 hours).",
    "Dragon's Breath": "Level 2 Transmutation (Sorcerer, Wizard)\n\nCasting Time: Bonus Action Range: Touch Components: V, S, M (a hot pepper) Duration: Concentration, up to 1 minute\n\nYou touch one willing creature, and choose Acid, Cold, Fire, Lightning, or Poison. Until the spell ends, the target can take a Magic action to exhale a 15-foot Cone. Each creature in that area makes a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save or half as much damage on a successful one.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 2.",
    "Dream": "Level 5 Illusion (Bard, Warlock, Wizard)\n\nCasting Time: 1 minute Range: Special Components: V, S, M (a handful of sand) Duration: 8 hours\n\nYou target a creature you know on the same plane of existence. You or a willing creature you touch enters a trance state to act as a dream messenger. While in the trance, the messenger is Incapacitated and has a Speed of 0.\n\nIf the target is asleep, the messenger appears in the target's dreams and can converse with the target as long as it remains asleep, through the spell's duration. The messenger can also shape the dream's environment, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the spell. The target recalls the dream perfectly upon waking.\n\nIf the target is awake when you cast the spell, the messenger knows it and can either end the trance (and the spell) or wait for the target to sleep, at which point the messenger enters its dreams.\n\nYou can make the messenger terrifying to the target. If you do so, the messenger can deliver a message of no more than ten words, and then the target makes a Wisdom saving throw. On a failed save, the target gains no benefit from its rest, and it takes 3d6 Psychic damage when it wakes up.",
    "Druidcraft": "Transmutation Cantrip (Druid)\n\nCasting Time: Action Range: 30 feet Components: V, S Duration: Instantaneous\n\nWhispering to the spirits of nature, you create one of the following effects within range.\n\nWeather Sensor. You create a Tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.\n\nBloom. You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.\n\nSensory Effect. You create a harmless sensory effect, such as falling leaves, spectral dancing fairies, a gentle breeze, the sound of an animal, or the faint odor of skunk. The effect must fit in a 5-foot Cube.\n\nFire Play. You light or snuff out a candle, a torch, or a campfire.",
    "Earthquake": "Level 8 Transmutation (Cleric, Druid, Sorcerer)\n\nCasting Time: Action Range: 500 feet Components: V, S, M (a fractured rock) Duration: Concentration, up to 1 minute\n\nChoose a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point. The ground there is Difficult Terrain.\n\nWhen you cast this spell and at the end of each of your turns for the duration, each creature on the ground in the area makes a Dexterity saving throw. On a failed save, a creature has the Prone condition, and its Concentration is broken.\n\nYou can also cause the effects below.\n\nFissures. A total of 1d6 fissures open in the spell's area at the end of the turn you cast it. You choose the fissures' locations, which can't be under structures. Each fissure is 1d10 × 10 feet deep and 10 feet wide, and it extends from one edge of the spell's area to another edge. A creature in the same space as a fissure must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens.\n\nStructures. The tremor deals 50 Bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the end of each of your turns until the spell ends. If a structure drops to 0 Hit Points, it collapses.\n\nA creature within a distance from a collapsing structure equal to half the structure's height makes a Dexterity saving throw. On a failed save, the creature takes 12d6 Bludgeoning damage, has the Prone condition, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. On a successful save, the creature takes half as much damage only.",
    "Eldritch Blast": "Evocation Cantrip (Warlock)\n\nCasting Time: Action Range: 120 feet Components: V, S Duration: Instantaneous\n\nYou hurl a beam of crackling energy. Make a ranged spell attack against one creature or object in range. On a hit, the target takes 1d10 Force damage.\n\nCantrip Upgrade. The spell creates two beams at level 5, three beams at level 11, and four beams at level 17. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.",
    "Elementalism": "Transmutation Cantrip (Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S Duration: Instantaneous\n\nYou exert control over the elements, creating one of the following effects within range.\n\nBeckon Air. You create a breeze strong enough to ripple cloth, stir dust, rustle leaves, and close open doors and shutters, all in a 5-foot Cube. Doors and shutters being held open by someone or something aren't affected.\n\nBeckon Earth. You create a thin shroud of dust or sand that covers surfaces in a 5-foot-square area, or you cause a single word to appear in your handwriting in a patch of dirt or sand.\n\nBeckon Fire. You create a thin cloud of harmless embers and colored, scented smoke in a 5-foot Cube. You choose the color and scent, and the embers can light candles, torches, or lamps in that area. The smoke's scent lingers for 1 minute.\n\nBeckon Water. You create a spray of cool mist that lightly dampens creatures and objects in a 5-foot Cube. Alternatively, you create 1 cup of clean water either in an open container or on a surface, and the water evaporates in 1 minute.\n\nSculpt Element. You cause dirt, sand, fire, smoke, mist, or water that can fit in a 1-foot Cube to assume a crude shape (such as that of a creature) for 1 hour.",
    "Enhance Ability": "Level 2 Transmutation (Bard, Cleric, Druid, Ranger, Sorcerer, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (fur or a feather) Duration: Concentration, up to 1 hour\n\nYou touch a creature and choose Strength, Dexterity, Intelligence, Wisdom, or Charisma. For the duration, the target has Advantage on ability checks using the chosen ability.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 2. You can choose a different ability for each target.",
    "Enlarge/Reduce": "Level 2 Transmutation (Bard, Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S, M (a pinch of powdered iron) Duration: Concentration, up to 1 minute\n\nFor the duration, the spell enlarges or reduces a creature or an object you can see within range (see the chosen effect below). A targeted object must be neither worn nor carried. If the target is an unwilling creature, it can make a Constitution saving throw. On a successful save, the spell has no effect.\n\nEverything that a targeted creature is wearing and carrying changes size with it. Any item it drops returns to normal size at once. A thrown weapon or piece of ammunition returns to normal size immediately after it hits or misses a target.\n\nEnlarge. The target's size increases by one category—from Medium to Large, for example. The target also has Advantage on Strength checks and Strength saving throws. The target's attacks with its enlarged weapons or Unarmed Strikes deal an extra 1d4 damage on a hit.\n\nReduce. The target's size decreases by one category—from Medium to Small, for example. The target also has Disadvantage on Strength checks and Strength saving throws. The target's attacks with its reduced weapons or Unarmed Strikes deal 1d4 less damage on a hit (this can't reduce the damage below 1).",
    "Ensnaring Strike": "Level 1 Conjuration (Ranger)\n\nCasting Time: Bonus Action, which you take immediately after hitting a creature with a weapon Range: Self Components: V Duration: Concentration, up to 1 minute\n\nAs you hit the target, grasping vines appear on it, and it makes a Strength saving throw. A Large or larger creature has Advantage on this save. On a failed save, the target has the Restrained condition until the spell ends. On a successful save, the vines shrivel away, and the spell ends.\n\nWhile Restrained, the target takes 1d6 Piercing damage at the start of each of its turns. The target or a creature within reach of it can take an action to make a Strength (Athletics) check against your spell save DC. On a success, the spell ends.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 1.",
    "Entangle": "Level 1 Conjuration (Druid, Ranger)\n\nCasting Time: Action Range: 90 feet Components: V, S Duration: Concentration, up to 1 minute\n\nGrasping plants sprout from the ground in a 20-foot square within range. For the duration, these plants turn the ground in the area into Difficult Terrain. They disappear when the spell ends.\n\nEach creature (other than you) in the area when you cast the spell must succeed on a Strength saving throw or have the Restrained condition until the spell ends. A Restrained creature can take an action to make a Strength (Athletics) check against your spell save DC. On a success, it frees itself from the grasping plants and is no longer Restrained by them.",
    "Enthrall": "Level 2 Enchantment (Bard, Warlock)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Concentration, up to 1 minute\n\nYou weave a distracting string of words, causing creatures of your choice that you can see within range to make a Wisdom saving throw. Any creature you or your companions are fighting automatically succeeds on this save. On a failed save, a target has a −10 penalty to Wisdom (Perception) checks and Passive Perception until the spell ends.",
    "Etherealness": "Level 7 Conjuration (Bard, Cleric, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: Self Components: V, S Duration: Up to 8 hours\n\nYou step into the border regions of the Ethereal Plane, where it overlaps with your current plane. You remain in the Border Ethereal for the duration. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can perceive the plane you left, which looks gray, and you can't see anything there more than 60 feet away.\n\nWhile on the Ethereal Plane, you can affect and be affected only by creatures, objects, and effects on that plane. Creatures that aren't on the Ethereal Plane can't perceive or interact with you unless a feature gives them the ability to do so.\n\nWhen the spell ends, you return to the plane you left in the spot that corresponds to your space in the Border Ethereal. If you appear in an occupied space, you are shunted to the nearest unoccupied space and take Force damage equal to twice the number of feet you are moved.\n\nThis spell ends instantly if you cast it while you are on the Ethereal Plane or a plane that doesn't border it, such as one of the Outer Planes.\n\nUsing a Higher-Level Spell Slot. You can target up to three willing creatures (including yourself) for each spell slot level above 7. The creatures must be within 10 feet of you when you cast the spell.",
    "Expeditious Retreat": "Level 1 Transmutation (Sorcerer, Warlock, Wizard)\n\nCasting Time: Bonus Action Range: Self Components: V, S Duration: Concentration, up to 10 minutes\n\nYou take the Dash action, and until the spell ends, you can take that action again as a Bonus Action.",
    "Eyebite": "Level 6 Necromancy (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: Self Components: V, S Duration: Concentration, up to 1 minute\n\nFor the duration, your eyes become an inky void. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration.\n\nOn each of your turns until the spell ends, you can take a Magic action to target another creature but can't target a creature again if it has succeeded on a save against this casting of the spell.\n\nAsleep. The target has the Unconscious condition. It wakes up if it takes any damage or if another creature takes an action to shake it awake.\n\nPanicked. The target has the Frightened condition. On each of its turns, the Frightened target must take the Dash action and move away from you by the safest and shortest route available. If the target moves to a space at least 60 feet away from you where it can't see you, this effect ends.\n\nSickened. The target has the Poisoned condition.",
    "Fabricate": "Level 4 Transmutation (Wizard)\n\nCasting Time: 10 minutes Range: 120 feet Components: V, S Duration: Instantaneous\n\nYou convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, or clothes from flax or wool.\n\nChoose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-foot Cube or eight connected 5-foot Cubes) given a sufficient quantity of material. If you're working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium (contained within a 5-foot Cube). The quality of any fabricated objects is based on the quality of the raw materials.\n\nCreatures and magic items can't be created by this spell. You also can't use it to create items that require a high degree of skill—such as weapons and armor—unless you have proficiency with the type of Artisan's Tools used to craft such objects.",
    "Faerie Fire": "Level 1 Evocation (Bard, Druid)\n\nCasting Time: Action Range: 60 feet Components: V Duration: Concentration, up to 1 minute\n\nObjects in a 20-foot Cube within range are outlined in blue, green, or violet light (your choice). Each creature in the Cube is also outlined if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed Dim Light in a 10-foot radius and can't benefit from the Invisible condition.\n\nAttack rolls against an affected creature or object have Advantage if the attacker can see it.",
    "Faithful Hound": "Level 4 Conjuration (Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S, M (a silver whistle) Duration: 8 hours\n\nYou conjure a phantom watchdog in an unoccupied space that you can see within range. The hound remains for the duration or until the two of you are more than 300 feet apart from each other.\n\nNo one but you can see the hound, and it is intangible and invulnerable. When a Small or larger creature comes within 30 feet of it without first speaking the password that you specify when you cast this spell, the hound starts barking loudly. The hound has Truesight with a range of 30 feet.\n\nAt the start of each of your turns, the hound attempts to bite one enemy within 5 feet of it. That enemy must succeed on a Dexterity saving throw or take 4d8 Force damage.\n\nOn your later turns, you can take a Magic action to move the hound up to 30 feet.",
    "False Life": "Level 1 Necromancy (Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (a drop of alcohol) Duration: Instantaneous\n\nYou gain 2d4 + 4 Temporary Hit Points.\n\nUsing a Higher-Level Spell Slot. You gain 5 additional Temporary Hit Points for each spell slot level above 1.",
    "Fear": "Level 3 Illusion (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (a white feather) Duration: Concentration, up to 1 minute\n\nEach creature in a 30-foot Cone must succeed on a Wisdom saving throw or drop whatever it is holding and have the Frightened condition for the duration.\n\nA Frightened creature takes the Dash action and moves away from you by the safest route on each of its turns unless there is nowhere to move. If the creature ends its turn in a space where it doesn't have line of sight to you, the creature makes a Wisdom saving throw. On a successful save, the spell ends on that creature.",
    "Feather Fall": "Level 1 Transmutation (Bard, Sorcerer, Wizard)\n\nCasting Time: Reaction, which you take when you or a creature you can see within 60 feet of you falls Range: 60 feet Components: V, M (a small feather or piece of down) Duration: 1 minute\n\nChoose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If a creature lands before the spell ends, the creature takes no damage from the fall, and the spell ends for that creature.",
    "Find Familiar": "Level 1 Conjuration (Wizard)\n\nCasting Time: 1 hour or Ritual Range: 10 feet Components: V, S, M (burning incense worth 10+ GP, which the spell consumes) Duration: Instantaneous\n\nYou gain the service of a familiar, a spirit that takes an animal form you choose: Bat, Cat, Frog, Hawk, Lizard, Octopus, Owl, Rat, Raven, Spider, Weasel, or another Beast that has a Challenge Rating of 0. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form (see \"Monsters\"), though it is a Celestial, Fey, or Fiend (your choice) instead of a Beast. Your familiar acts independently of you, but it obeys your commands.\n\nTelepathic Connection. While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as a Bonus Action, you can see through the familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses it has.\n\nFinally, when you cast a spell with a range of touch, your familiar can deliver the touch. Your familiar must be within 100 feet of you, and it must take a Reaction to deliver the touch when you cast the spell.\n\nCombat. The familiar is an ally to you and your allies. It rolls its own Initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal.\n\nDisappearance of the Familiar. When the familiar drops to 0 Hit Points, it disappears. It reappears after you cast this spell again. As a Magic action, you can temporarily dismiss the familiar to a pocket dimension. Alternatively, you can dismiss it forever. As a Magic action while it is temporarily dismissed, you can cause it to reappear in an unoccupied space within 30 feet of you. Whenever the familiar drops to 0 Hit Points or disappears into the pocket dimension, it leaves behind in its space anything it was wearing or carrying.\n\nOne Familiar Only. You can't have more than one familiar at a time. If you cast this spell while you have a familiar, you instead cause it to adopt a new eligible form.",
    "Find Steed": "Level 2 Conjuration (Paladin)\n\nCasting Time: Action Range: 30 feet Component: V, S Duration: Instantaneous\n\nYou summon an otherworldly being that appears as a loyal steed in an unoccupied space of your choice within range. This creature uses the Otherworldly Steed stat block. If you already have a steed from this spell, the steed is replaced by the new one.\n\nThe steed resembles a Large, rideable animal of your choice, such as a horse, a camel, a dire wolf, or an elk. Whenever you cast the spell, choose the steed's creature type—Celestial, Fey, or Fiend—which determines certain traits in the stat block.\n\nCombat. The steed is an ally to you and your allies. In combat, it shares your Initiative count, and it functions as a controlled mount while you ride it (as defined in the rules on mounted combat). If you have the Incapacitated condition, the steed takes its turn immediately after yours and acts independently, focusing on protecting you.\n\nDisappearance of the Steed. The steed disappears if it drops to 0 Hit Points or if you die. When it disappears, it leaves behind anything it was wearing or carrying. If you cast this spell again, you decide whether you summon the steed that disappeared or a different one.\n\nUsing a Higher-Level Spell Slot. Use the spell slot's level for the spell's level in the stat block.\n\nOtherworldly Steed\n\nLarge Celestial, Fey, or Fiend (Your Choice), Neutral\n\nAC 10 + 1 per spell level HP 5 + 10 per spell level (the steed has a number of Hit Dice [d10s] equal to the spell's level) Speed 60 ft., Fly 60 ft. (requires level 4+ spell)\n\nMOD | SAVE |  | MOD | SAVE |  | MOD | SAVE | \nSTR | 18 | +4 | +4 | DEX | 12 | +1 | +1 | CON | 14 | +2 | +2\nINT | 6 | −2 | −2 | WIS | 12 | +1 | +1 | CHA | 8 | −1 | −1\n\nSenses Passive Perception 11 Languages Telepathy 1 mile (works only with you) CR None (XP 0; PB equals your Proficiency Bonus)\n\nTraits\n\nLife Bond. When you regain Hit Points from a level 1+ spell, the steed regains the same number of Hit Points if you're within 5 feet of it.\n\nActions\n\nOtherworldly Slam. Melee Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. Hit: 1d8 plus the spell's level of Radiant (Celestial), Psychic (Fey), or Necrotic (Fiend) damage.\n\nBonus Actions\n\nFell Glare (Fiend Only; Recharges after a Long Rest). Wisdom Saving Throw: DC equals your spell save DC, one creature within 60 feet the steed can see. Failure: The target has the Frightened condition until the end of your next turn.\n\nFey Step (Fey Only; Recharges after a Long Rest). The steed teleports, along with its rider, to an unoccupied space of your choice up to 60 feet away from itself.\n\nHealing Touch (Celestial Only; Recharges after a Long Rest). One creature within 5 feet of the steed regains a number of Hit Points equal to 2d8 plus the spell's level.",
    "Find the Path": "Level 6 Divination (Bard, Cleric, Druid)\n\nCasting Time: 1 minute Range: Self Components: V, S, M (a set of divination tools—such as cards or runes—worth 100+ GP) Duration: Concentration, up to 1 day\n\nYou magically sense the most direct physical route to a location you name. You must be familiar with the location, and the spell fails if you name a destination on another plane of existence, a moving destination (such as a mobile fortress), or an unspecific destination (such as \"a green dragon's lair\").\n\nFor the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. Whenever you face a choice of paths along the way there, you know which path is the most direct.",
    "Find Traps": "Level 2 Divination (Cleric, Druid, Ranger)\n\nCasting Time: Action Range: 120 feet Components: V, S Duration: Instantaneous\n\nYou sense any trap within range that is within line of sight. A trap, for the purpose of this spell, includes any object or mechanism that was created to cause damage or other danger. Thus, the spell would sense the Alarm or Glyph of Warding spell or a mechanical pit trap, but it wouldn't reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole.\n\nThis spell reveals that a trap is present but not its location. You do learn the general nature of the danger posed by a trap you sense.",
    "Finger of Death": "Level 7 Necromancy (Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Instantaneous\n\nYou unleash negative energy toward a creature you can see within range. The target makes a Constitution saving throw, taking 7d8 + 30 Necrotic damage on a failed save or half as much damage on a successful one.\n\nA Humanoid killed by this spell rises at the start of your next turn as a Zombie (see \"Monsters\") that follows your verbal orders.",
    "Fireball": "Level 3 Evocation (Sorcerer, Wizard)\n\nCasting Time: Action Range: 150 feet Components: V, S, M (a ball of bat guano and sulfur) Duration: Instantaneous\n\nA bright streak flashes from you to a point you choose within range and then blossoms with a low roar into a fiery explosion. Each creature in a 20-foot-radius Sphere centered on that point makes a Dexterity saving throw, taking 8d6 Fire damage on a failed save or half as much damage on a successful one.\n\nFlammable objects in the area that aren't being worn or carried start burning.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 3.",
    "Fire Bolt": "Evocation Cantrip (Sorcerer, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S Duration: Instantaneous\n\nYou hurl a mote of fire at a creature or an object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Fire damage. A flammable object hit by this spell starts burning if it isn't being worn or carried.\n\nCantrip Upgrade. The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10).",
    "Fire Shield": "Level 4 Evocation (Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (a bit of phosphorus or a firefly) Duration: 10 minutes\n\nWispy flames wreathe your body for the duration, shedding Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.\n\nThe flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you Resistance to Cold damage, and the chill shield grants you Resistance to Fire damage.\n\nIn addition, whenever a creature within 5 feet of you hits you with a melee attack roll, the shield erupts with flame. The attacker takes 2d8 Fire damage from a warm shield or 2d8 Cold damage from a chill shield.",
    "Fire Storm": "Level 7 Evocation (Cleric, Druid, Sorcerer)\n\nCasting Time: Action Range: 150 feet Components: V, S Duration: Instantaneous\n\nA storm of fire appears within range. The area of the storm consists of up to ten 10-foot Cubes, which you arrange as you like. Each Cube must be contiguous with at least one other Cube. Each creature in the area makes a Dexterity saving throw, taking 7d10 Fire damage on a failed save or half as much damage on a successful one.\n\nFlammable objects in the area that aren't being worn or carried start burning.",
    "Flame Blade": "Level 2 Evocation (Druid, Sorcerer)\n\nCasting Time: Bonus Action Range: Self Components: V, S, M (a sumac leaf) Duration: Concentration, up to 10 minutes\n\nYou evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke it again as a Bonus Action.\n\nAs a Magic action, you can make a melee spell attack with the fiery blade. On a hit, the target takes Fire damage equal to 3d6 plus your spellcasting ability modifier.\n\nThe flaming blade sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 2.",
    "Flame Strike": "Level 5 Evocation (Cleric)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a pinch of sulfur) Duration: Instantaneous\n\nA vertical column of brilliant fire roars down from above. Each creature in a 10-foot-radius, 40-foot-high Cylinder centered on a point within range makes a Dexterity saving throw, taking 5d6 Fire damage and 5d6 Radiant damage on a failed save or half as much damage on a successful one.\n\nUsing a Higher-Level Spell Slot. The Fire damage and the Radiant damage increase by 1d6 for each spell slot level above 5.",
    "Flaming Sphere": "Level 2 Conjuration (Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a ball of wax) Duration: Concentration, up to 1 minute\n\nYou create a 5-foot-diameter sphere of fire in an unoccupied space on the ground within range. It lasts for the duration. Any creature that ends its turn within 5 feet of the sphere makes a Dexterity saving throw, taking 2d6 Fire damage on a failed save or half as much damage on a successful one.\n\nAs a Bonus Action, you can move the sphere up to 30 feet, rolling it along the ground. If you move the sphere into a creature's space, that creature makes the save against the sphere, and the sphere stops moving for the turn.\n\nWhen you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. Flammable objects that aren't being worn or carried start burning if touched by the sphere, and it sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 2.",
    "Flesh to Stone": "Level 6 Transmutation (Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a cockatrice feather) Duration: Concentration, up to 1 minute\n\nYou attempt to turn one creature that you can see within range into stone. The target makes a Constitution saving throw. On a failed save, it has the Restrained condition for the duration. On a successful save, its Speed is 0 until the start of your next turn. Constructs automatically succeed on the save.\n\nA Restrained target makes another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its saves three times, it is turned to stone and has the Petrified condition for the duration. The successes and failures needn't be consecutive; keep track of both until the target collects three of a kind.\n\nIf you maintain your Concentration on this spell for the entire possible duration, the target is Petrified until the condition is ended by Greater Restoration or similar magic.",
    "Floating Disk": "Level 1 Conjuration (Wizard)\n\nCasting Time: Action or Ritual Range: 30 feet Components: V, S, M (a drop of mercury) Duration: 1 hour\n\nThis spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.\n\nThe disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can move across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.\n\nIf you move more than 100 feet from the disk (typically because it can't move around an obstacle to follow you), the spell ends.",
    "Fly": "Level 3 Transmutation (Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (a feather) Duration: Concentration, up to 10 minutes\n\nYou touch a willing creature. For the duration, the target gains a Fly Speed of 60 feet and can hover. When the spell ends, the target falls if it is still aloft unless it can stop the fall.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 3.",
    "Fog Cloud": "Level 1 Conjuration (Druid, Ranger, Sorcerer, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S Duration: Concentration, up to 1 hour\n\nYou create a 20-foot-radius Sphere of fog centered on a point within range. The Sphere is Heavily Obscured. It lasts for the duration or until a strong wind (such as one created by Gust of Wind) disperses it.\n\nUsing a Higher-Level Spell Slot. The fog's radius increases by 20 feet for each spell slot level above 1.",
    "Forbiddance": "Level 6 Abjuration (Cleric)\n\nCasting Time: 10 minutes or Ritual Range: Touch Components: V, S, M (ruby dust worth 1,000+ GP) Duration: 1 day\n\nYou create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can't teleport into the area or use portals, such as those created by the Gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, the Ethereal Plane, the Feywild, the Shadowfell, or the Plane Shift spell.\n\nIn addition, the spell damages types of creatures that you choose when you cast it. Choose one or more of the following: Aberrations, Celestials, Elementals, Fey, Fiends, and Undead. When a creature of a chosen type enters the spell's area for the first time on a turn or ends its turn there, the creature takes 5d10 Radiant or Necrotic damage (your choice when you cast this spell).\n\nYou can designate a password when you cast the spell. A creature that speaks the password as it enters the area takes no damage from the spell.\n\nThe spell's area can't overlap with the area of another Forbiddance spell. If you cast Forbiddance every day for 30 days in the same location, the spell lasts until it is dispelled, and the Material components are consumed on the last casting.",
    "Forcecage": "Level 7 Evocation (Bard, Warlock, Wizard)\n\nCasting Time: Action Range: 100 feet Components: V, S, M (ruby dust worth 1,500+ GP, which the spell consumes) Duration: Concentration, up to 1 hour\n\nAn immobile, Invisible, Cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box, as you choose.\n\nA prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart. A prison in the shape of a box can be up to 10 feet on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out from the area.\n\nWhen you cast the spell, any creature that is completely inside the cage's area is trapped. Creatures only partially within the area, or those too large to fit inside it, are pushed away from the center of the area until they are completely outside it.\n\nA creature inside the cage can't leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave, it must first make a Charisma saving throw. On a successful save, the creature can use that magic to exit the cage. On a failed save, the creature doesn't exit the cage and wastes the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel.\n\nThis spell can't be dispelled by Dispel Magic.",
    "Foresight": "Level 9 Divination (Bard, Druid, Warlock, Wizard)\n\nCasting Time: 1 minute Range: Touch Components: V, S, M (a hummingbird feather) Duration: 8 hours\n\nYou touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target has Advantage on D20 Tests, and other creatures have Disadvantage on attack rolls against it. The spell ends early if you cast it again.",
    "Freedom of Movement": "Level 4 Abjuration (Bard, Cleric, Druid, Ranger)\n\nCasting Time: Action Range: Touch Components: V, S, M (a leather strap) Duration: 1 hour\n\nYou touch a willing creature. For the duration, the target's movement is unaffected by Difficult Terrain, and spells and other magical effects can neither reduce the target's Speed nor cause the target to have the Paralyzed or Restrained conditions. The target also has a Swim Speed equal to its Speed.\n\nIn addition, the target can spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature imposing the Grappled condition on it.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 4.",
    "Freezing Sphere": "Level 6 Evocation (Sorcerer, Wizard)\n\nCasting Time: Action Range: 300 feet Components: V, S, M (a miniature crystal sphere) Duration: Instantaneous\n\nA frigid globe streaks from you to a point of your choice within range, where it explodes in a 60-foot-radius Sphere. Each creature in that area makes a Constitution saving throw, taking 10d6 Cold damage on failed save or half as much damage on a successful one.\n\nIf the globe strikes a body of water, it freezes the water to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice and have the Restrained condition. A trapped creature can take an action to make a Strength (Athletics) check against your spell save DC to break free.\n\nYou can refrain from firing the globe after completing the spell's casting. If you do so, a globe about the size of a sling bullet, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling's normal range). It shatters on impact, with the same effect as a normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn't already shattered, it explodes.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 6.",
    "Gaseous Form": "Level 3 Transmutation (Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (a bit of gauze) Duration: Concentration, up to 1 hour\n\nA willing creature you touch shape-shifts, along with everything it's wearing and carrying, into a misty cloud for the duration. The spell ends on the target if it drops to 0 Hit Points or if it takes a Magic action to end the spell on itself.\n\nWhile in this form, the target's only method of movement is a Fly Speed of 10 feet, and it can hover. The target can enter and occupy the space of another creature. The target has Resistance to Bludgeoning, Piercing, and Slashing damage; it has Immunity to the Prone condition; and it has Advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through narrow openings, but it treats liquids as though they were solid surfaces.\n\nThe target can't talk or manipulate objects, and any objects it was carrying or holding can't be dropped, used, or otherwise interacted with. Finally, the target can't attack or cast spells.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 3.",
    "Gate": "Level 9 Conjuration (Cleric, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a diamond worth 5,000+ GP) Duration: Concentration, up to 1 minute\n\nYou conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration, and the portal's destination is visible through it.\n\nThe portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal.\n\nDeities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains.\n\nWhen you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn't work). If that creature is on a plane other than the one you are on, the portal opens next to the named creature and transports it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the GM deems appropriate. It might leave, attack you, or help you.",
    "Geas": "Level 5 Enchantment (Bard, Cleric, Druid, Paladin, Wizard)\n\nCasting Time: 1 minute Range: 60 feet Components: V Duration: 30 days\n\nYou give a verbal command to a creature that you can see within range, ordering it to carry out some service or refrain from an action or a course of activity as you decide. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target automatically succeeds if it can't understand your command.\n\nWhile Charmed, the creature takes 5d10 Psychic damage if it acts in a manner directly counter to your command. It takes this damage no more than once each day.\n\nYou can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends.\n\nA Remove Curse, Greater Restoration, or Wish spell ends this spell.\n\nUsing a Higher-Level Spell Slot. If you use a level 7 or 8 spell slot, the duration is 365 days. If you use a level 9 spell slot, the spell lasts until it is ended by one of the spells mentioned above.",
    "Gentle Repose": "Level 2 Necromancy (Cleric, Paladin, Wizard)\n\nCasting Time: Action or Ritual Range: Touch Components: V, S, M (2 Copper Pieces, which the spell consumes) Duration: 10 days\n\nYou touch a corpse or other remains. For the duration, the target is protected from decay and can't become Undead.\n\nThe spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells such as Raise Dead.",
    "Giant Insect": "Level 4 Conjuration (Druid)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Concentration, up to 10 minutes\n\nYou summon a giant centipede, spider, or wasp (chosen when you cast the spell). It manifests in an unoccupied space you can see within range and uses the Giant Insect stat block. The form you choose determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\nThe creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger. Using a Higher-Level Spell Slot. Use the spell slot's level for the spell's level in the stat block.\n\nGiant Insect\n\nLarge Beast, Unaligned\n\nAC 11 + the spell's level HP 30 + 10 for each spell level above 4 Speed 40 ft., Climb 40 ft., Fly 40 ft. (Wasp only)\n\n | MOD | SAVE |  | MOD | SAVE |  | MOD | SAVE | \nSTR | 17 | +3 | +3 | DEX | 13 | +1 | +1 | CON | 15 | +2 | +2\nINT | 4 | −3 | −3 | WIS | 14 | +2 | +2 | CHA | 3 | −4 | −4\n\nSenses Darkvision 60 ft.; Passive Perception 12 Languages Understands the languages you know CR None (XP 0; PB equals your Proficiency Bonus)\n\nTraits\n\nSpider Climb. The insect can climb difficult surfaces, including along ceilings, without needing to make an ability check.\n\nActions\n\nMultiattack. The insect makes a number of attacks equal to half this spell's level (round down).\n\nPoison Jab. Melee Attack Roll: Bonus equals your spell attack modifier, reach 10 ft. Hit: 1d6 + 3 plus the spell's level Piercing damage plus 1d4 Poison damage.\n\nWeb Bolt (Spider Only). Ranged Attack Roll: Bonus equals your spell attack modifier, range 60 ft. Hit: 1d10 + 3 plus the spell's level Bludgeoning damage, and the target's Speed is reduced to 0 until the start of the insect's next turn.\n\nBonus Actions\n\nVenomous Spew (Centipede Only). Constitution Saving Throw: Your spell save DC, one creature the insect can see within 10 feet. Failure: The target has the Poisoned condition until the start of the insect's next turn.",
    "Glibness": "Level 8 Enchantment (Bard, Warlock)\n\nCasting Time: Action Range: Self Components: V Duration: 1 hour\n\nUntil the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful.",
    "Globe of Invulnerability": "Level 6 Abjuration (Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (a glass bead) Duration: Concentration, up to 1 minute\n\nAn immobile, shimmering barrier appears in a 10-foot Emanation around you and remains for the duration.\n\nAny spell of level 5 or lower cast from outside the barrier can't affect anything within it. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from areas of effect created by such spells.\n\nUsing a Higher-Level Spell Slot. The barrier blocks spells of 1 level higher for each spell slot level above 6.",
    "Glyph of Warding": "Level 3 Abjuration (Bard, Cleric, Wizard)\n\nCasting Time: 1 hour Range: Touch Components: V, S, M (powdered diamond worth 200+ GP, which the spell consumes) Duration: Until dispelled or triggered\n\nYou inscribe a glyph that later unleashes a magical effect. You inscribe it either on a surface (such as a table or a section of floor) or within an object that can be closed (such as a book or chest) to conceal the glyph. The glyph can cover an area no larger than 10 feet in diameter. If the surface or object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.\n\nThe glyph is nearly imperceptible and requires a successful Wisdom (Perception) check against your spell save DC to notice.\n\nWhen you inscribe the glyph, you set its trigger and choose whether it's an explosive rune or a spell glyph, as explained below.\n\nSet the Trigger. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, common triggers include touching or stepping on the glyph, removing another object covering it, or approaching within a certain distance of it. For glyphs inscribed within an object, common triggers include opening that object or seeing the glyph. Once a glyph is triggered, this spell ends.\n\nYou can refine the trigger so that only creatures of certain types activate it (for example, the glyph could be set to affect Aberrations). You can also set conditions for creatures that don't trigger the glyph, such as those who say a certain password.\n\nExplosive Rune. When triggered, the glyph erupts with magical energy in a 20-foot-radius Sphere centered on the glyph. Each creature in the area makes a Dexterity saving throw. A creature takes 5d8 Acid, Cold, Fire, Lightning, or Thunder damage (your choice when you create the glyph) on a failed save or half as much damage on a successful one.\n\nSpell Glyph. You can store a prepared spell of level 3 or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way.\n\nWhen the glyph is triggered, the stored spell takes effect. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons Hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires Concentration, it lasts until the end of its full duration.\n\nUsing a Higher-Level Spell Slot. The damage of an explosive rune increases by 1d8 for each spell slot level above 3. If you create a spell glyph, you can store any spell of up to the same level as the spell slot you use for the Glyph of Warding.",
    "Goodberry": "Level 1 Conjuration (Druid, Ranger)\n\nCasting Time: Action Range: Self Components: V, S, M (a sprig of mistletoe) Duration: 24 hours\n\nTen berries appear in your hand and are infused with magic for the duration. A creature can take a Bonus Action to eat one berry. Eating a berry restores 1 Hit Point, and the berry provides enough nourishment to sustain a creature for one day.\n\nUneaten berries disappear when the spell ends.",
    "Grease": "Level 1 Conjuration (Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a bit of pork rind or butter) Duration: 1 minute\n\nNonflammable grease covers the ground in a 10-foot square centered on a point within range and turns it into Difficult Terrain for the duration.\n\nWhen the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or have the Prone condition. A creature that enters the area or ends its turn there must also succeed on that save or fall Prone.",
    "Greater Invisibility": "Level 4 Illusion (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S Duration: Concentration, up to 1 minute\n\nA creature you touch has the Invisible condition until the spell ends.",
    "Greater Restoration": "Level 5 Abjuration (Bard, Cleric, Druid, Paladin, Ranger)\n\nCasting Time: Action Range: Touch Components: V, S, M (diamond dust worth 100+ GP, which the spell consumes) Duration: Instantaneous\n\nYou touch a creature and magically remove one of the following effects from it:\n\n1 Exhaustion level The Charmed or Petrified condition A curse, including the target's Attunement to a cursed magic item Any reduction to one of the target's ability scores Any reduction to the target's Hit Point maximum",
    "Guardian of Faith": "Level 4 Conjuration (Cleric)\n\nCasting Time: Action Range: 30 feet Components: V Duration: 8 hours\n\nA Large spectral guardian appears and hovers for the duration in an unoccupied space that you can see within range. The guardian occupies that space and is invulnerable, and it appears in a form appropriate for your deity or pantheon.\n\nAny enemy that moves to a space within 10 feet of the guardian for the first time on a turn or starts its turn there makes a Dexterity saving throw, taking 20 Radiant damage on a failed save or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage.",
    "Guards and Wards": "Level 6 Abjuration (Bard, Wizard)\n\nCasting Time: 1 hour Range: Touch Components: V, S, M (a silver rod worth 10+ GP) Duration: 24 hours\n\nYou create a ward that protects up to 2,500 square feet of floor space. The warded area can be up to 20 feet tall, and you shape it as one 50-foot square, one hundred 5-foot squares that are contiguous, or twenty-five 10-foot squares that are contiguous.\n\nWhen you cast this spell, you can specify individuals that are unaffected by the spell's effects. You can also specify a password that, when spoken aloud within 5 feet of the warded area, makes the speaker immune to its effects. The spell creates the effects below within the warded area. Dispel Magic has no effect on Guards and Wards itself, but each of the following effects can be dispelled. If all four are dispelled, Guards and Wards ends. If you cast the spell every day for 365 days on the same area, the spell thereafter lasts until all its effects are dispelled.\n\nCorridors. Fog fills all the warded corridors, making them Heavily Obscured. In addition, at each intersection or branching passage offering a choice of direction, there is a 50 percent chance that a creature other than you believes it is going in the opposite direction from the one it chooses.\n\nDoors. All doors in the warded area are magically locked, as if sealed by the Arcane Lock spell. In addition, you can cover up to ten doors with an illusion to make them appear as plain sections of wall.\n\nStairs. Webs fill all stairs in the warded area from top to bottom, as in the Web spell. These strands regrow in 10 minutes if they are destroyed while Guards and Wards lasts.\n\nOther Spell Effect. Place one of the following magical effects within the warded area:\n\nDancing Lights in four corridors, with a simple program that the lights repeat as long as Guards and Wards lasts Magic Mouth in two locations Stinking Cloud in two locations (the vapors return within 10 minutes if dispersed while Guards and Wards lasts) Gust of Wind in one corridor or room (the wind blows continuously while the spell lasts) Suggestion in one 5-foot square; any creature that enters that square receives the suggestion mentally",
    "Guidance": "Divination Cantrip (Cleric, Druid)\n\nCasting Time: Action Range: Touch Component: V, S Duration: Concentration, up to 1 minute\n\nYou touch a willing creature and choose a skill. Until the spell ends, the creature adds 1d4 to any ability check using the chosen skill.",
    "Guiding Bolt": "Level 1 Evocation (Cleric)\n\nCasting Time: Action Range: 120 feet Components: V, S Duration: 1 round\n\nYou hurl a bolt of light toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 4d6 Radiant damage, and the next attack roll made against it before the end of your next turn has Advantage.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 1.",
    "Gust of Wind": "Level 2 Evocation (Druid, Ranger, Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (a legume seed) Duration: Concentration, up to 1 minute\n\nA Line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the duration. Each creature in the Line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the Line. A creature that ends its turn in the Line must make the same save.\n\nAny creature in the Line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.\n\nThe gust disperses gas or vapor, and it extinguishes candles and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them.\n\nAs a Bonus Action on your later turns, you can change the direction in which the Line blasts from you.",
    "Hallow": "Level 5 Abjuration (Cleric)\n\nCasting Time: 24 hours Range: Touch Components: V, S, M (incense worth 1,000+ GP, which the spell consumes) Duration: Until dispelled\n\nYou touch a point and infuse an area around it with holy or unholy power. The area can have a radius up to 60 feet, and the spell fails if the radius includes an area already under the effect of Hallow. The affected area has the following effects.\n\nHallowed Ward. Choose any of these creature types: Aberration, Celestial, Elemental, Fey, Fiend, or Undead. Creatures of the chosen types can't willingly enter the area, and any creature that is possessed by or that has the Charmed or Frightened condition from such creatures isn't possessed, Charmed, or Frightened by them while in the area.\n\nExtra Effect. You bind an extra effect to the area from the list below:\n\nCourage. Creatures of any types you choose can't gain the Frightened condition while in the area.\n\nDarkness. Darkness fills the area. Normal light, as well as magical light created by spells of a level lower than this spell, can't illuminate the area. Daylight. Bright light fills the area. Magical Darkness created by spells of a level lower than this spell can't extinguish the light.\n\nPeaceful Rest. Dead bodies interred in the area can't be turned into Undead.\n\nExtradimensional Interference. Creatures of any types you choose can't enter or exit the area using teleportation or interplanar travel.\n\nFear. Creatures of any types you choose have the Frightened condition while in the area.\n\nResistance. Creatures of any types you choose have Resistance to one damage type of your choice while in the area.\n\nSilence. No sound can emanate from within the area, and no sound can reach into it.\n\nTongues. Creatures of any types you choose can communicate with any other creature in the area even if they don't share a common language.\n\nVulnerability. Creatures of any types you choose have Vulnerability to one damage type of your choice while in the area.",
    "Hallucinatory Terrain": "Level 4 Illusion (Bard, Druid, Warlock, Wizard)\n\nCasting Time: 10 minutes Range: 300 feet Components: V, S, M (a mushroom) Duration: 24 hours\n\nYou make natural terrain in a 150-foot Cube in range look, sound, and smell like another sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren't changed.\n\nThe tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to notice the illusion. If the difference isn't obvious by touch, a creature examining the illusion can take the Study action to make an Intelligence (Investigation) check against your spell save DC to disbelieve it. If a creature discerns that the terrain is illusory, the creature sees a vague image superimposed on the real terrain.",
    "Harm": "Level 6 Necromancy (Cleric)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Instantaneous\n\nYou unleash virulent magic on a creature you can see within range. The target makes a Constitution saving throw. On a failed save, it takes 14d6 Necrotic damage, and its Hit Point maximum is reduced by an amount equal to the Necrotic damage it took. On a successful save, it takes half as much damage only. This spell can't reduce a target's Hit Point maximum below 1.",
    "Haste": "Level 3 Transmutation (Sorcerer, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S, M (a shaving of licorice root) Duration: Concentration, up to 1 minute\n\nChoose a willing creature that you can see within range. Until the spell ends, the target's Speed is doubled, it gains a +2 bonus to Armor Class, it has Advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used to take only the Attack (one attack only), Dash, Disengage, Hide, or Utilize action.\n\nWhen the spell ends, the target is Incapacitated and has a Speed of 0 until the end of its next turn, as a wave of lethargy washes over it.",
    "Heal": "Level 6 Abjuration (Cleric, Druid)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Instantaneous\n\nChoose a creature that you can see within range. Positive energy washes through the target, restoring 70 Hit Points. This spell also ends the Blinded, Deafened, and Poisoned conditions on the target.\n\nUsing a Higher-Level Spell Slot. The healing increases by 10 for each spell slot level above 6.",
    "Healing Word": "Level 1 Abjuration (Bard, Cleric, Druid)\n\nCasting Time: Bonus Action Range: 60 feet Components: V Duration: Instantaneous\n\nA creature of your choice that you can see within range regains Hit Points equal to 2d4 plus your spellcasting ability modifier.\n\nUsing a Higher-Level Spell Slot. The healing increases by 2d4 for each spell slot level above 1.",
    "Heat Metal": "Level 2 Transmutation (Bard, Druid)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a piece of iron and a flame) Duration: Concentration, up to 1 minute Choose a manufactured metal object, such as a metal weapon or a suit of Heavy or Medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 Fire damage when you cast the spell. Until the spell ends, you can take a Bonus Action on each of your later turns to deal this damage again if the object is within range.\n\nIf a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn't drop the object, it has Disadvantage on attack rolls and ability checks until the start of your next turn.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 2.",
    "Hellish Rebuke": "Level 1 Evocation (Warlock)\n\nCasting Time: Reaction, which you take in response to taking damage from a creature that you can see within 60 feet of yourself Range: 60 feet Components: V, S Duration: Instantaneous\n\nThe creature that damaged you is momentarily surrounded by green flames. It makes a Dexterity saving throw, taking 2d10 Fire damage on a failed save or half as much damage on a successful one.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d10 for each spell slot level above 1.",
    "Heroes' Feast": "Level 6 Conjuration (Bard, Cleric, Druid)\n\nCasting Time: 10 minutes Range: Self Components: V, S, M (a gem-encrusted bowl worth 1,000+ GP, which the spell consumes) Duration: Instantaneous\n\nYou conjure a feast that appears on a surface in an unoccupied 10-foot Cube next to you. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don't set in until this hour is over. Up to twelve creatures can partake of the feast.\n\nA creature that partakes gains several benefits, which last for 24 hours. The creature has Resistance to Poison damage, and it has Immunity to the Frightened and Poisoned conditions. Its Hit Point maximum also increases by 2d10, and it gains the same number of Hit Points.",
    "Heroism": "Level 1 Enchantment (Bard, Paladin)\n\nCasting Time: Action Range: Touch Components: V, S Duration: Concentration, up to 1 minute\n\nA willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to the Frightened condition and gains Temporary Hit Points equal to your spellcasting ability modifier at the start of each of its turns.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "Hex": "Level 1 Enchantment (Warlock)\n\nCasting Time: Bonus Action Range: 90 feet Components: V, S, M (the petrified eye of a newt) Duration: Concentration, up to 1 hour\n\nYou place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 Necrotic damage to the target whenever you hit it with an attack roll. Also, choose one ability when you cast the spell. The target has Disadvantage on ability checks made with the chosen ability.\n\nIf the target drops to 0 Hit Points before this spell ends, you can take a Bonus Action on a later turn to curse a new creature.\n\nUsing a Higher-Level Spell Slot. Your Concentration can last longer with a spell slot of level 2 (up to 4 hours), 3–4 (up to 8 hours), or 5+ (24 hours).",
    "Hideous Laughter": "Level 1 Enchantment (Bard, Warlock, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S, M (a tart and a feather) Duration: Concentration, up to 1 minute\n\nOne creature of your choice that you can see within range makes a Wisdom saving throw. On a failed save, it has the Prone and Incapacitated conditions for the duration. During that time, it laughs uncontrollably if it's capable of laughter, and it can't end the Prone condition on itself.\n\nAt the end of each of its turns and each time it takes damage, it makes another Wisdom saving throw. The target has Advantage on the save if the save is triggered by damage. On a successful save, the spell ends.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "Hold Monster": "Level 5 Enchantment (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 90 feet Components: V, S, M (a straight piece of iron) Duration: Concentration, up to 1 minute\n\nChoose a creature that you can see within range. The target must succeed on a Wisdom saving throw or have the Paralyzed condition for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 5.",
    "Hold Person": "Level 2 Enchantment (Bard, Cleric, Druid, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a straight piece of iron) Duration: Concentration, up to 1 minute\n\nChoose a Humanoid that you can see within range. The target must succeed on a Wisdom saving throw or have the Paralyzed condition for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success.\n\nUsing a Higher-Level Spell Slot. You can target one additional Humanoid for each spell slot level above 2.",
    "Holy Aura": "Level 8 Abjuration (Cleric)\n\nCasting Time: Action Range: Self Components: V, S, M (a reliquary worth 1,000+ GP) Duration: Concentration, up to 1 minute\n\nFor the duration, you emit an aura in a 30-foot Emanation. While in the aura, creatures of your choice have Advantage on all saving throws, and other creatures have Disadvantage on attack rolls against them. In addition, when a Fiend or an Undead hits an affected creature with a melee attack roll, the attacker must succeed on a Constitution saving throw or have the Blinded condition until the end of its next turn.",
    "Hunter's Mark": "Level 1 Divination (Ranger)\n\nCasting Time: Bonus Action Range: 90 feet Components: V Duration: Concentration, up to 1 hour\n\nYou magically mark one creature you can see within range as your quarry. Until the spell ends, you deal an extra 1d6 Force damage to the target whenever you hit it with an attack roll. You also have Advantage on any Wisdom (Perception or Survival) check you make to find it.\n\nIf the target drops to 0 Hit Points before this spell ends, you can take a Bonus Action to move the mark to a new creature you can see within range.\n\nUsing a Higher-Level Spell Slot. Your Concentration can last longer with a spell slot of level 3–4 (up to 8 hours) or 5+ (up to 24 hours).",
    "Hypnotic Pattern": "Level 3 Illusion (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 120 feet Components: S, M (a pinch of confetti) Duration: Concentration, up to 1 minute\n\nYou create a twisting pattern of colors in a 30-foot Cube within range. The pattern appears for a moment and vanishes. Each creature in the area who can see the pattern must succeed on a Wisdom saving throw or have the Charmed condition for the duration. While Charmed, the creature has the Incapacitated condition and a Speed of 0.\n\nThe spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor.",
    "Ice Knife": "Level 1 Conjuration (Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: S, M (a drop of water or a piece of ice) Duration: Instantaneous\n\nYou create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 Cold damage.\n\nUsing a Higher-Level Spell Slot. The Cold damage increases by 1d6 for each spell slot level above 1.",
    "Ice Storm": "Level 4 Evocation (Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 300 feet Components: V, S, M (a mitten) Duration: Instantaneous\n\nHail falls in a 20-foot-radius, 40-foot-high Cylinder centered on a point within range. Each creature in the Cylinder makes a Dexterity saving throw. A creature takes 2d10 Bludgeoning damage and 4d6 Cold damage on a failed save or half as much damage on a successful one.\n\nHailstones turn ground in the Cylinder into Difficult Terrain until the end of your next turn. Using a Higher-Level Spell Slot. The Bludgeoning damage increases by 1d10 for each spell slot level above 4.",
    "Identify": "Level 1 Divination (Bard, Wizard)\n\nCasting Time: 1 minute or Ritual Range: Touch Components: V, S, M (a pearl worth 100+ GP) Duration: Instantaneous\n\nYou touch an object throughout the spell's casting. If the object is a magic item or some other magical object, you learn its properties and how to use them, whether it requires Attunement, and how many charges it has, if any. You learn whether any ongoing spells are affecting the item and what they are. If the item was created by a spell, you learn that spell's name.\n\nIf you instead touch a creature throughout the casting, you learn which ongoing spells, if any, are currently affecting it.",
    "Illusory Script": "Level 1 Illusion (Bard, Warlock, Wizard)\n\nCasting Time: 1 minute or Ritual Range: Touch Components: S, M (ink worth 10+ GP, which the spell consumes) Duration: 10 days\n\nYou write on parchment, paper, or another suitable material and imbue it with an illusion that lasts for the duration. To you and any creatures you designate when you cast the spell, the writing appears normal, seems to be written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, the illusion can alter the meaning, handwriting, and language of the text, though the language must be one you know.\n\nIf the spell is dispelled, the original script and the illusion both disappear.\n\nA creature that has Truesight can read the hidden message.",
    "Imprisonment": "Level 9 Abjuration (Warlock, Wizard)\n\nCasting Time: 1 minute Range: 30 feet Components: V, S, M (a statuette of the target worth 5,000+ GP) Duration: Until dispelled\n\nYou create a magical restraint to hold a creature that you can see within range. The target must make a Wisdom saving throw. On a successful save, the target is unaffected, and it is immune to this spell for the next 24 hours. On a failed save, the target is imprisoned. While imprisoned, the target doesn't need to breathe, eat, or drink, and it doesn't age. Divination spells can't locate or perceive the imprisoned target, and the target can't teleport.\n\nUntil the spell ends, the target is also affected by one of the following effects of your choice:\n\nBurial. The target is entombed beneath the earth in a hollow globe of magical force that is just large enough to contain the target. Nothing can pass into or out of the globe.\n\nChaining. Chains firmly rooted in the ground hold the target in place. The target has the Restrained condition and can't be moved by any means.\n\nHedged Prison. The target is trapped in a demiplane that is warded against teleportation and planar travel. The demiplane is your choice of a labyrinth, a cage, a tower, or the like.\n\nMinimus Containment. The target becomes 1 inch tall and is trapped inside an indestructible gemstone or a similar object. Light can pass through the gemstone (allowing the target to see out and other creatures to see in), but nothing else can pass through by any means.\n\nSlumber. The target has the Unconscious condition and can't be awoken.\n\nEnding the Spell. When you cast the spell, specify a trigger that will end it. The trigger can be as simple or as elaborate as you choose, but the GM must agree that it has a high likelihood of happening within the next decade. The trigger must be an observable action, such as someone making a particular offering at the temple of your god, saving your true love, or defeating a specific monster.\n\nA Dispel Magic spell can end the spell only if it is cast with a level 9 spell slot, targeting either the prison or the component used to create it.",
    "Incendiary Cloud": "Level 8 Conjuration (Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 150 feet Components: V, S Duration: Concentration, up to 1 minute\n\nA swirling cloud of embers and smoke fills a 20-foot-radius Sphere centered on a point within range. The cloud's area is Heavily Obscured. It lasts for the duration or until a strong wind (like that created by Gust of Wind) disperses it.\n\nWhen the cloud appears, each creature in it makes a Dexterity saving throw, taking 10d8 Fire damage on a failed save or half as much damage on a successful one. A creature must also make this save when the Sphere moves into its space and when it enters the Sphere or ends its turn there. A creature makes this save only once per turn. The cloud moves 10 feet away from you in a direction you choose at the start of each of your turns.",
    "Inflict Wounds": "Level 1 Necromancy (Cleric)\n\nCasting Time: Action Range: Touch Components: V, S Duration: Instantaneous\n\nA creature you touch makes a Constitution saving throw, taking 2d10 Necrotic damage on a failed save or half as much damage on a successful one.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d10 for each spell slot level above 1.",
    "Insect Plague": "Level 5 Conjuration (Cleric, Druid, Sorcerer)\n\nCasting Time: Action Range: 300 feet Components: V, S, M (a locust) Duration: Concentration, up to 10 minutes\n\nSwarming locusts fill a 20-foot-radius Sphere centered on a point you choose within range. The Sphere remains for the duration, and its area is Lightly Obscured and Difficult Terrain.\n\nWhen the swarm appears, each creature in it makes a Constitution saving throw, taking 4d10 Piercing damage on a failed save or half as much damage on a successful one. A creature also makes this save when it enters the spell's area for the first time on a turn or ends its turn there. A creature makes this save only once per turn.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d10 for each spell slot level above 5.",
    "Instant Summons": "Level 6 Conjuration (Wizard)\n\nCasting Time: 1 minute or Ritual Range: Touch Components: V, S, M (a sapphire worth 1,000+ GP) Duration: Until dispelled\n\nYou touch the sapphire used in the casting and an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an Invisible mark on that object and invisibly inscribes the object's name on the sapphire. Each time you cast this spell, you must use a different sapphire.\n\nThereafter, you can take a Magic action to speak the object's name and crush the sapphire. The object instantly appears in your hand regardless of physical or planar distances, and the spell ends.\n\nIf another creature is holding or carrying the object, crushing the sapphire doesn't transport it, but instead you learn who that creature is and where that creature is currently located.",
    "Irresistible Dance": "Level 6 Enchantment (Bard, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V Duration: Concentration, up to 1 minute\n\nOne creature that you can see within range must make a Wisdom saving throw. On a successful save, the target dances comically until the end of its next turn, during which it must spend all its movement to dance in place.\n\nOn a failed save, the target has the Charmed condition for the duration. While Charmed, the target dances comically, must use all its movement to dance in place, and has Disadvantage on Dexterity saving throws and attack rolls, and other creatures have Advantage on attack rolls against it. On each of its turns, the target can take an action to collect itself and repeat the save, ending the spell on itself on a success.",
    "Invisibility": "Level 2 Illusion (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (an eyelash in gum arabic) Duration: Concentration, up to 1 hour\n\nA creature you touch has the Invisible condition until the spell ends. The spell ends early immediately after the target makes an attack roll, deals damage, or casts a spell.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 2.",
    "Jump": "Level 1 Transmutation (Druid, Ranger, Sorcerer, Wizard)\n\nCasting Time: Bonus Action Range: Touch Component: V, S, M (a grasshopper's hind leg) Duration: 1 minute\n\nYou touch a willing creature. Once on each of its turns until the spell ends, that creature can jump up to 30 feet by spending 10 feet of movement.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "Knock": "Level 2 Transmutation (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V Duration: Instantaneous Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access.\n\nA target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked.\n\nIf the target is held shut by Arcane Lock, that spell is suppressed for 10 minutes, during which time the target can be opened and closed.\n\nWhen you cast the spell, a loud knock, audible up to 300 feet away, emanates from the target.",
    "Legend Lore": "Level 5 Divination (Bard, Cleric, Wizard)\n\nCasting Time: 10 minutes Range: Self Components: V, S, M (incense worth 250+ GP, which the spell consumes, and four ivory strips worth 50+ GP each) Duration: Instantaneous\n\nName or describe a famous person, place, or object. The spell brings to your mind a brief summary of the significant lore about that famous thing, as described by the GM.\n\nThe lore might consist of important details, amusing revelations, or even secret lore that has never been widely known. The more information you already know about the thing, the more precise and detailed the information you receive is. That information is accurate but might be couched in figurative language or poetry, as determined by the GM.\n\nIf the famous thing you chose isn't actually famous, you hear sad musical notes played on a trombone, and the spell fails.",
    "Lesser Restoration": "Level 2 Abjuration (Bard, Cleric, Druid, Paladin, Ranger)\n\nCasting Time: Bonus Action Range: Touch Components: V, S Duration: Instantaneous\n\nYou touch a creature and end one condition on it: Blinded, Deafened, Paralyzed, or Poisoned.",
    "Levitate": "Level 2 Transmutation (Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a metal spring) Duration: Concentration, up to 10 minutes\n\nOne creature or loose object of your choice that you can see within range rises vertically up to 20 feet and remains suspended there for the duration. The spell can levitate an object that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected.\n\nThe target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target's altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can take a Magic action to move the target, which must remain within the spell's range.\n\nWhen the spell ends, the target floats gently to the ground if it is still aloft.",
    "Light": "Evocation Cantrip (Bard, Cleric, Sorcerer, Wizard)\n\nCasting Time: Action Range: Touch Components: V, M (a firefly or phosphorescent moss) Duration: 1 hour\n\nYou touch one Large or smaller object that isn't being worn or carried by someone else. Until the spell ends, the object sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. The light can be colored as you like.\n\nCovering the object with something opaque blocks the light. The spell ends if you cast it again.",
    "Lightning Bolt": "Level 3 Evocation (Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (a bit of fur and a crystal rod) Duration: Instantaneous\n\nA stroke of lightning forming a 100-foot-long, 5-foot-wide Line blasts out from you in a direction you choose. Each creature in the Line makes a Dexterity saving throw, taking 8d6 Lightning damage on a failed save or half as much damage on a successful one.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 3.",
    "Locate Animals or Plants": "Level 2 Divination (Bard, Druid, Ranger)\n\nCasting Time: Action or Ritual Range: Self Components: V, S, M (fur from a bloodhound) Duration: Instantaneous\n\nDescribe or name a specific kind of Beast, Plant creature, or nonmagical plant. You learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present.",
    "Locate Creature": "Level 4 Divination (Bard, Cleric, Druid, Paladin, Ranger, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (fur from a bloodhound) Duration: Concentration, up to 1 hour\n\nDescribe or name a creature that is familiar to you. You sense the direction to the creature's location if that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement.\n\nThe spell can locate a specific creature known to you or the nearest creature of a specific kind (such as a human or a unicorn) if you have seen such a creature up close—within 30 feet—at least once. If the creature you described or named is in a different form, such as under the effects of a Flesh to Stone or Polymorph spell, this spell doesn't locate the creature.\n\nThis spell can't locate a creature if any thickness of lead blocks a direct path between you and the creature.",
    "Locate Object": "Level 2 Divination (Bard, Cleric, Druid, Paladin, Ranger, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (a forked twig) Duration: Concentration, up to 10 minutes\n\nDescribe or name an object that is familiar to you. You sense the direction to the object's location if that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.\n\nThe spell can locate a specific object known to you if you have seen it up close—within 30 feet—at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon.\n\nThis spell can't locate an object if any thickness of lead blocks a direct path between you and the object.",
    "Longstrider": "Level 1 Transmutation (Bard, Druid, Ranger, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (a pinch of dirt) Duration: 1 hour\n\nYou touch a creature. The target's Speed increases by 10 feet until the spell ends.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "Mage Armor": "Level 1 Abjuration (Sorcerer, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (a piece of cured leather) Duration: 8 hours\n\nYou touch a willing creature who isn't wearing armor. Until the spell ends, the target's base AC becomes 13 plus its Dexterity modifier. The spell ends early if the target dons armor.",
    "Mage Hand": "Conjuration Cantrip (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S Duration: 1 minute\n\nA spectral, floating hand appears at a point you choose within range. The hand lasts for the duration. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.\n\nWhen you cast the spell, you can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial.\n\nAs a Magic action on your later turns, you can control the hand thus again. As part of that action, you can move the hand up to 30 feet.\n\nThe hand can't attack, activate magic items, or carry more than 10 pounds.",
    "Magic Circle": "Level 3 Abjuration (Cleric, Paladin, Warlock, Wizard)\n\nCasting Time: 1 minute Range: 10 feet Components: V, S, M (salt and powdered silver worth 100+ GP, which the spell consumes) Duration: 1 hour\n\nYou create a 10-foot-radius, 20-foot-tall Cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the Cylinder intersects with the floor or other surface.\n\nChoose one or more of the following types of creatures: Celestials, Elementals, Fey, Fiends, or Undead. The circle affects a creature of the chosen type in the following ways:\n\n• The creature can't willingly enter the Cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw. • The creature has Disadvantage on attack rolls against targets within the Cylinder. • Targets within the Cylinder can't be possessed by or gain the Charmed or Frightened condition from the creature.\n\nEach time you cast this spell, you can cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the Cylinder and protecting targets outside it.\n\nUsing a Higher-Level Spell Slot. The duration increases by 1 hour for each spell slot level above 3.",
    "Magic Jar": "Level 6 Necromancy (Wizard)\n\nCasting Time: 1 minute Range: Self Components: V, S, M (a gem, crystal, or reliquary worth 500+ GP) Duration: Until dispelled\n\nYour body falls into a catatonic state as your soul leaves it and enters the container you used for the spell's Material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the container's space. You can't move or take Reactions. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your living body (and ending the spell) or attempting to possess a Humanoid's body.\n\nYou can attempt to possess any Humanoid within 100 feet of you that you can see (creatures warded by a Protection from Evil and Good or Magic Circle spell can't be possessed). The target makes a Charisma saving throw. On a failed save, your soul enters the target's body, and the target's soul becomes trapped in the container. On a successful save, the target resists your efforts to possess it, and you can't attempt to possess it again for 24 hours.\n\nOnce you possess a creature's body, you control it. Your Hit Points, Hit Point Dice, Strength, Dexterity, Constitution, Speed, and senses are replaced by the creature's. You otherwise keep your game statistics.\n\nMeanwhile, the possessed creature's soul can perceive from the container using its own senses, but it can't move and it is Incapacitated.\n\nWhile possessing a body, you can take a Magic action to return from the host body to the container if it is within 100 feet of you, returning the host creature's soul to its body. If the host body dies while you're in it, the creature dies, and you make a Charisma saving throw against your own spellcasting DC. On a success, you return to the container if it is within 100 feet of you. Otherwise, you die.\n\nIf the container is destroyed or the spell ends, your soul returns to your body. If your body is more than 100 feet away from you or if your body is dead, you die. If another creature's soul is in the container when it is destroyed, the creature's soul returns to its body if the body is alive and within 100 feet. Otherwise, that creature dies.\n\nWhen the spell ends, the container is destroyed.",
    "Magic Missile": "Level 1 Evocation (Sorcerer, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S Duration: Instantaneous\n\nYou create three glowing darts of magical force. Each dart strikes a creature of your choice that you can see within range. A dart deals 1d4 + 1 Force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.\n\nUsing a Higher-Level Spell Slot. The spell creates one more dart for each spell slot level above 1.",
    "Magic Mouth": "Level 2 Illusion (Bard, Wizard)\n\nCasting Time: 1 minute or Ritual Range: 30 feet Components: V, S, M (jade dust worth 10+ GP, which the spell consumes) Duration: Until dispelled\n\nYou implant a message within an object in range—a message that is uttered when a trigger condition is met. Choose an object that you can see and that isn't being worn or carried by another creature. Then speak the message, which must be 25 words or fewer, though it can be delivered over as long as 10 minutes. Finally, determine the circumstance that will trigger the spell to deliver your message.\n\nWhen that trigger occurs, a magical mouth appears on the object and recites the message in your voice and at the same volume you spoke. If the object you chose has a mouth or something that looks like a mouth (for example, the mouth of a statue), the magical mouth appears there, so the words appear to come from the object's mouth. When you cast this spell, you can have the spell end after it delivers its message, or it can remain and repeat its message whenever the trigger occurs.\n\nThe trigger can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet of it.",
    "Magic Weapon": "Level 2 Transmutation (Paladin, Ranger, Sorcerer, Wizard)\n\nCasting Time: Bonus Action Range: Touch Components: V, S Duration: 1 hour\n\nYou touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls. The spell ends early if you cast it again.\n\nUsing a Higher-Level Spell Slot. The bonus increases to +2 with a level 3–5 spell slot. The bonus increases to +3 with a level 6+ spell slot.",
    "Magnificent Mansion": "Level 7 Conjuration (Bard, Wizard)\n\nCasting Time: 1 minute Range: 300 feet Components: V, S, M (a miniature door worth 15+ GP) Duration: 24 hours\n\nYou conjure a shimmering door in range that lasts for the duration. The door leads to an extradimensional dwelling and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the door remains open. You can open or close it (no action required) if you are within 30 feet of it. While closed, the door is imperceptible.\n\nBeyond the door is a magnificent foyer with numerous chambers beyond. The dwelling's atmosphere is clean, fresh, and warm.\n\nYou can create any floor plan you like for the dwelling, but it can't exceed 50 contiguous 10-foot Cubes. The place is furnished and decorated as you choose. It contains sufficient food to serve a nine-course banquet for up to 100 people. Furnishings and other objects created by this spell dissipate into smoke if removed from it.\n\nA staff of 100 near-transparent servants attends all who enter. You determine the appearance of these servants and their attire. They are invulnerable and obey your commands. Each servant can perform tasks that a human could perform, but they can't attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can't leave the dwelling.\n\nWhen the spell ends, any creatures or objects left inside the extradimensional space are expelled into the unoccupied spaces nearest to the entrance.",
    "Major Image": "Level 3 Illusion (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S, M (a bit of fleece) Duration: Concentration, up to 10 minutes\n\nYou create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot Cube. The image appears at a spot that you can see within range and lasts for the duration. It seems real, including sounds, smells, and temperature appropriate to the thing depicted, but it can't deal damage or cause conditions.\n\nIf you are within range of the illusion, you can take a Magic action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.\n\nPhysical interaction with the image reveals it to be an illusion, for things can pass through it. A creature that takes a Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature.\n\nUsing a Higher-Level Spell Slot. The spell lasts until dispelled, without requiring Concentration, if cast with a level 4+ spell slot.",
    "Mass Cure Wounds": "Level 5 Abjuration (Bard, Cleric, Druid)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Instantaneous\n\nA wave of healing energy washes out from a point you can see within range. Choose up to six creatures in a 30-foot-radius Sphere centered on that point. Each target regains Hit Points equal to 5d8 plus your spellcasting ability modifier.\n\nUsing a Higher-Level Spell Slot. The healing increases by 1d8 for each spell slot level above 5.",
    "Mass Heal": "Level 9 Abjuration (Cleric)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Instantaneous\n\nA flood of healing energy flows from you into creatures around you. You restore up to 700 Hit Points, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell also have the Blinded, Deafened, and Poisoned conditions removed from them.",
    "Mass Healing Word": "Level 3 Abjuration (Bard, Cleric)\n\nCasting Time: Bonus Action Range: 60 feet Components: V Duration: Instantaneous\n\nUp to six creatures of your choice that you can see within range regain Hit Points equal to 2d4 plus your spellcasting ability modifier.\n\nUsing a Higher-Level Spell Slot. The healing increases by 1d4 for each spell slot level above 3.",
    "Mass Suggestion": "Level 6 Enchantment (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, M (a snake's tongue) Duration: 24 hours\n\nYou suggest a course of activity—described in no more than 25 words—to twelve or fewer creatures you can see within range that can hear and understand you. The suggestion must sound achievable and not involve anything that would obviously deal damage to any of the targets or their allies. For example, you could say, \"Walk to the village down that road, and help the villagers there harvest crops until sunset.\" Or you could say, \"Now is not the time for violence. Drop your weapons, and dance! Stop in an hour.\"\n\nEach target must succeed on a Wisdom saving throw or have the Charmed condition for the duration or until you or your allies deal damage to the target. Each Charmed target pursues the suggestion to the best of its ability. The suggested activity can continue for the entire duration, but if the suggested activity can be completed in a shorter time, the spell ends for a target upon completing it.\n\nUsing a Higher-Level Spell Slot. The duration is longer with a spell slot of level 7 (10 days), 8 (30 days), or 9 (366 days).",
    "Maze": "Level 8 Conjuration (Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Concentration, up to 10 minutes\n\nYou banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze.\n\nThe target can take a Study action to try to escape. When it does so, it makes a DC 20 Intelligence (Investigation) check. If it succeeds, it escapes, and the spell ends.\n\nWhen the spell ends, the target reappears in the space it left or, if that space is occupied, in the nearest unoccupied space.",
    "Meld into Stone": "Level 3 Transmutation (Cleric, Druid, Ranger)\n\nCasting Time: Action or Ritual Range: Touch Components: V, S Duration: 8 hours\n\nYou step into a stone object or surface large enough to fully contain your body, merging yourself and your equipment with the stone for the duration. You must touch the stone to do so. Nothing of your presence remains visible or otherwise detectable by nonmagical senses.\n\nWhile merged with the stone, you can't see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with Disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use 5 feet of movement to leave the stone where you entered it, which ends the spell. You otherwise can't move.\n\nMinor physical damage to the stone doesn't harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 Force damage to you. The stone's complete destruction (or transmutation into a different substance) expels you and deals 50 Force damage to you. If expelled, you move into an unoccupied space closest to where you first entered and have the Prone condition.",
    "Mending": "Transmutation Cantrip (Bard, Cleric, Druid, Sorcerer, Wizard)\n\nCasting Time: 1 minute Range: Touch Components: V, S, M (two lodestones) Duration: Instantaneous\n\nThis spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.\n\nThis spell can physically repair a magic item, but it can't restore magic to such an object.",
    "Message": "Transmutation Cantrip (Bard, Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 120 feet Components: S, M (a copper wire) Duration: 1 round You point toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.\n\nYou can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence; 1 foot of stone, metal, or wood; or a thin sheet of lead blocks the spell.",
    "Meteor Swarm": "Level 9 Evocation (Sorcerer, Wizard)\n\nCasting Time: Action Range: 1 mile Components: V, S Duration: Instantaneous\n\nBlazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius Sphere centered on each of those points makes a Dexterity saving throw. A creature takes 20d6 Fire damage and 20d6 Bludgeoning damage on a failed save or half as much damage on a successful one. A creature in the area of more than one fiery Sphere is affected only once.\n\nA nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area, and the object starts burning if it's flammable.",
    "Mind Blank": "Level 8 Abjuration (Bard, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S Duration: 24 hours\n\nUntil the spell ends, one willing creature you touch has Immunity to Psychic damage and the Charmed condition. The target is also unaffected by anything that would sense its emotions or alignment, read its thoughts, or magically detect its location, and no spell—not even Wish—can gather information about the target, observe it remotely, or control its mind.",
    "Mind Spike": "Level 2 Divination (Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 120 feet Components: S Duration: Concentration, up to 1 hour\n\nYou drive a spike of psionic energy into the mind of one creature you can see within range. The target makes a Wisdom saving throw, taking 3d8 Psychic damage on a failed save or half as much damage on a successful one. On a failed save, you also always know the target's location until the spell ends, but only while the two of you are on the same plane\n\nof existence. While you have this knowledge, the target can't become hidden from you, and if it has the Invisible condition, it gains no benefit from that condition against you.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 2.",
    "Minor Illusion": "Illusion Cantrip (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 30 feet Components: S, M (a bit of fleece) Duration: 1 minute\n\nYou create a sound or an image of an object within range that lasts for the duration. See the descriptions below for the effects of each. The illusion ends if you cast this spell again.\n\nIf a creature takes a Study action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.\n\nSound. If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.\n\nImage. If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot Cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, since things can pass through it.",
    "Mirage Arcane": "Level 7 Illusion (Bard, Druid, Wizard)\n\nCasting Time: 10 minutes Range: Sight Components: V, S Duration: 10 days\n\nYou make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other rough or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.\n\nSimilarly, you can alter the appearance of structures or add them where none are present. The spell doesn't disguise, conceal, or add creatures.\n\nThe illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into Difficult Terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell's area disappears immediately.\n\nCreatures with Truesight can see through the illusion to the terrain's true form; however, all other elements of the illusion remain, so while the creature is aware of the illusion's presence, the creature can still physically interact with the illusion.",
    "Mirror Image": "Level 2 Illusion (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: Self Components: V, S Duration: 1 minute\n\nThree illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which image is real.\n\nEach time a creature hits you with an attack roll during the spell's duration, roll a d6 for each of your remaining duplicates. If any of the d6s rolls a 3 or higher, one of the duplicates is hit instead of you, and the duplicate is destroyed. The duplicates otherwise ignore all other damage and effects. The spell ends when all three duplicates are destroyed.\n\nA creature is unaffected by this spell if it has the Blinded condition, Blindsight, or Truesight.",
    "Mislead": "Level 5 Illusion (Bard, Warlock, Wizard)\n\nCasting Time: Action Range: Self Components: S Duration: Concentration, up to 1 hour\n\nYou gain the Invisible condition at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends immediately after you make an attack roll, deal damage, or cast a spell.\n\nAs a Magic action, you can move the illusory double up to twice your Speed and make it gesture, speak, and behave in whatever way you choose. It is intangible and invulnerable.\n\nYou can see through its eyes and hear through its ears as if you were located where it is.",
    "Misty Step": "Level 2 Conjuration (Sorcerer, Warlock, Wizard)\n\nCasting Time: Bonus Action Range: Self Components: V Duration: Instantaneous\n\nBriefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space you can see.",
    "Modify Memory": "Level 5 Enchantment (Bard, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S Duration: Concentration, up to 1 minute\n\nYou attempt to reshape another creature's memories. One creature that you can see within range makes a Wisdom saving throw. If you are fighting the creature, it has Advantage on the save. On a failed save, the target has the Charmed condition for the duration. While Charmed in this way, the target also has the Incapacitated condition and is unaware of its surroundings, though it can hear you. If it takes any damage or is targeted by another spell, this spell ends, and no memories are modified.\n\nWhile this charm lasts, you can affect the target's memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity, change its memory of the event's details, or create a memory of some other event.\n\nYou must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you finish describing the modified memories, the creature's memory isn't altered. Otherwise, the modified memories take hold when the spell ends.\n\nA modified memory doesn't necessarily affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical modified memory, such as a false memory of how much the creature enjoyed swimming in acid, is dismissed as a bad dream. The GM might deem a modified memory too nonsensical to affect a creature.\n\nA Remove Curse or Greater Restoration spell cast on the target restores the creature's true memory.\n\nUsing a Higher-Level Spell Slot. You can alter the target's memories of an event that took place up to 7 days ago (level 6 spell slot), 30 days ago (level 7 spell slot), 365 days ago (level 8 spell slot), or any time in the creature's past (level 9 spell slot).",
    "Moonbeam": "Level 2 Evocation (Druid)\n\nCasting Time: Action Range: 120 feet Components: V, S, M (a moonseed leaf) Duration: Concentration, up to 1 minute A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high Cylinder centered on a point within range. Until the spell ends, Dim Light fills the Cylinder, and you can take a Magic action on later turns to move the Cylinder up to 60 feet.\n\nWhen the Cylinder appears, each creature in it makes a Constitution saving throw. On a failed save, a creature takes 2d10 Radiant damage, and if the creature is shape-shifted (as a result of the Polymorph spell, for example), it reverts to its true form and can't shape-shift until it leaves the Cylinder. On a successful save, a creature takes half as much damage only. A creature also makes this save when the spell's area moves into its space and when it enters the spell's area or ends its turn there. A creature makes this save only once per turn.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d10 for each spell slot level above 2.",
    "Move Earth": "Level 6 Transmutation (Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S, M (a miniature shovel) Duration: Concentration, up to 2 hours\n\nChoose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. For example, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square's elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete. Because the terrain's transformation occurs slowly, creatures in the area can't usually be trapped or injured by the ground's movement.\n\nAt the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect within range.\n\nThis spell can't manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse.\n\nSimilarly, this spell doesn't directly affect plant growth. The moved earth carries any plants along with it.",
    "Nondetection": "Level 3 Abjuration (Bard, Ranger, Wizard)\n\nCasting Time: Action Range: Touch\n\nComponents: V, S, M (a pinch of diamond dust worth 25+ GP, which the spell consumes) Duration: 8 hours\n\nFor the duration, you hide a target that you touch from Divination spells. The target can be a willing creature, or it can be a place or an object no larger than 10 feet in any dimension. The target can't be targeted by any Divination spell or perceived through magical scrying sensors.",
    "Passwall": "Level 5 Transmutation (Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S, M (a pinch of sesame seeds) Duration: 1 hour\n\nA passage appears at a point that you can see on a wooden, plaster, or stone surface (such as a wall, ceiling, or floor) within range and lasts for the duration. You choose the opening's dimensions: up to 5 feet wide, 8 feet tall, and 20 feet deep. The passage creates no instability in a structure surrounding it.\n\nWhen the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell.",
    "Pass without Trace": "Level 2 Abjuration (Druid, Ranger)\n\nCasting Time: Action Range: Self Components: V, S, M (ashes from burned mistletoe) Duration: Concentration, up to 1 hour\n\nYou radiate a concealing aura in a 30-foot Emanation for the duration. While in the aura, you and each creature you choose have a +10 bonus to Dexterity (Stealth) checks and leave no tracks.",
    "Phantasmal Force": "Level 2 Illusion (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a bit of fleece) Duration: Concentration, up to 1 minute\n\nYou attempt to craft an illusion in the mind of a creature you can see within range. The target makes an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other phenomenon that is no larger than a 10-foot Cube and that is perceivable only to the target for the duration. The phantasm includes sound, temperature, and other stimuli.\n\nThe target can take a Study action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends.\n\nWhile affected by the spell, the target treats the phantasm as if it were real and rationalizes any illogical outcomes from interacting with it. For example, if the target steps through a phantasmal bridge and survives the fall, it believes the bridge exists and something else caused it to fall.\n\nAn affected target can even take damage from the illusion if the phantasm represents a dangerous creature or hazard. On each of your turns, such a phantasm can deal 2d8 Psychic damage to the target if it is in the phantasm's area or within 5 feet of the phantasm. The target perceives the damage as a type appropriate to the illusion.",
    "Phantasmal Killer": "Level 4 Illusion (Bard, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S Duration: Concentration, up to 1 minute\n\nYou tap into the nightmares of a creature you can see within range and create an illusion of its deepest fears, visible only to that creature. The target makes a Wisdom saving throw. On a failed save, the target takes 4d10 Psychic damage and has Disadvantage on ability checks and attack rolls for the duration. On a successful save, the target takes half as much damage, and the spell ends.\n\nFor the duration, the target makes a Wisdom saving throw at the end of each of its turns. On a failed save, it takes the Psychic damage again. On a successful save, the spell ends.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d10 for each spell slot level above 4.",
    "Phantom Steed": "Level 3 Illusion (Wizard)\n\nCasting Time: 1 minute or Ritual Range: 30 feet Components: V, S Duration: 1 hour\n\nA Large, quasi-real, horselike creature appears on the ground in an unoccupied space of your choice within range. You decide the creature's appearance, and it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed.\n\nFor the duration, you or a creature you choose can ride the steed. The steed uses the Riding Horse stat block (see \"Monsters\"), except it has a Speed of 100 feet and can travel 13 miles in an hour. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends early if the steed takes any damage.",
    "Planar Ally": "Level 6 Conjuration (Cleric)\n\nCasting Time: 10 minutes Range: 60 feet Components: V, S Duration: Instantaneous\n\nYou beseech an otherworldly entity for aid. The being must be known to you: a god, a demon prince, or some other being of cosmic power. That entity sends a Celestial, an Elemental, or a Fiend loyal to it to aid you, making the creature appear in an unoccupied space within range. If you know a specific creature's name, you can speak that name when you cast this spell to request that creature, though you might get a different creature anyway (GM's choice).\n\nWhen the creature appears, it is under no compulsion to behave a particular way. You can ask it to perform a service in exchange for payment, but it isn't obliged to do so. The requested task could range from simple (fly us across the chasm, or help us fight a battle) to complex (spy on our enemies, or protect us during our foray into the dungeon). You must be able to communicate with the creature to bargain for its services.\n\nPayment can take a variety of forms. A Celestial might require a sizable donation of gold or magic items to an allied temple, while a Fiend might demand a living sacrifice or a gift of treasure. Some creatures might exchange their service for a quest undertaken by you.\n\nA task that can be measured in minutes requires a payment worth 100 GP per minute. A task measured in hours requires 1,000 GP per hour. And a task measured in days (up to 10 days) requires 10,000 GP per day. The GM can adjust these payments based on the circumstances under which you cast the spell. If the task is aligned with the creature's ethos, the payment might be halved or even waived. Nonhazardous tasks typically require only half the suggested payment, while especially dangerous tasks might require a greater gift. Creatures rarely accept tasks that seem suicidal.\n\nAfter the creature completes the task, or when the agreed-upon duration of service expires, the creature returns to its home plane after reporting back to you if possible. If you are unable to agree on a price for the creature's service, the creature immediately returns to its home plane.",
    "Planar Binding": "Level 5 Abjuration (Bard, Cleric, Druid, Warlock, Wizard)\n\nCasting Time: 1 hour Range: 60 feet Components: V, S, M (a jewel worth 1,000+ GP, which the spell consumes) Duration: 24 hours You attempt to bind a Celestial, an Elemental, a Fey, or a Fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of the inverted version of the Magic Circle spell to trap it while this spell is cast.) At the completion of the casting, the target must succeed on a Charisma saving throw or be bound to serve you for the duration. If the creature was summoned or created by another spell, that spell's duration is extended to match the duration of this spell.\n\nA bound creature must follow your commands to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. If the creature is Hostile, it strives to twist your commands to achieve its own objectives. If the creature carries out your commands completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane, it returns to the place where you bound it and remains there until the spell ends.\n\nUsing a Higher-Level Spell Slot. The duration increases with a spell slot of level 6 (10 days), 7 (30 days), 8 (180 days), and 9 (366 days).",
    "Plane Shift": "Level 7 Conjuration (Cleric, Druid, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (a forked, metal rod worth 250+ GP and attuned to a plane of existence) Duration: Instantaneous\n\nYou and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as a specific city on the Elemental Plane of Fire or palace on the second level of the Nine Hells, and you appear in or near that destination, as determined by the GM.\n\nAlternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle.",
    "Plant Growth": "Level 3 Transmutation (Bard, Druid, Ranger)\n\nCasting Time: Action (Overgrowth) or 8 hours (Enrichment) Range: 150 feet Components: V, S Duration: Instantaneous\n\nThis spell channels vitality into plants. The casting time you use determines whether the spell has the Overgrowth or the Enrichment effect below.\n\nOvergrowth. Choose a point within range. All normal plants in a 100-foot-radius Sphere centered on that point become thick and overgrown. A creature moving through that area must spend 4 feet of movement for every 1 foot it moves. You can exclude one or more areas of any size within the spell's area from being affected.\n\nEnrichment. All plants in a half-mile radius centered on a point within range become enriched for 365 days. The plants yield twice the normal amount of food when harvested. They can benefit from only one Plant Growth per year.",
    "Poison Spray": "Necromancy Cantrip (Druid, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S Duration: Instantaneous\n\nYou spray toxic mist at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d12 Poison damage.\n\nCantrip Upgrade. The damage increases by 1d12 when you reach levels 5 (2d12), 11 (3d12), and 17 (4d12).",
    "Polymorph": "Level 4 Transmutation (Bard, Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a caterpillar cocoon) Duration: Concentration, up to 1 hour\n\nYou attempt to transform a creature that you can see within range into a Beast. The target must succeed on a Wisdom saving throw or shape-shift into a Beast form for the duration. That form can be any Beast you choose that has a Challenge Rating equal to or less than the target's (or the target's level if it doesn't have a Challenge Rating). The target's game statistics are replaced by the stat block of the chosen Beast, but the target retains its alignment, personality, creature type, Hit Points, and Hit Point Dice. See the \"Animals\" section of \"Monsters\" for a sample of Beast stat blocks.\n\nThe target gains a number of Temporary Hit Points equal to the Hit Points of the Beast form. These Temporary Hit Points vanish if any remain when the spell ends. The spell ends early on the target if it has no Temporary Hit Points left.\n\nThe target is limited in the actions it can perform by the anatomy of its new form, and it can't speak or cast spells. The target's gear melds into the new form. The creature can't use or otherwise benefit from any of that equipment.",
    "Power Word Heal": "Level 9 Enchantment (Bard, Cleric)\n\nCasting Time: Action Range: 60 feet Component: V Duration: Instantaneous\n\nA wave of healing energy washes over one creature you can see within range. The target regains all its Hit Points. If the creature has the Charmed, Frightened, Paralyzed, Poisoned, or Stunned condition, the condition ends. If the creature has the Prone condition, it can use its Reaction to stand up.",
    "Power Word Kill": "Level 9 Enchantment (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 60 feet Component: V Duration: Instantaneous\n\nYou compel one creature you can see within range to die. If the target has 100 Hit Points or fewer, it dies. Otherwise, it takes 12d12 Psychic damage.",
    "Power Word Stun": "Level 8 Enchantment (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V Duration: Instantaneous\n\nYou overwhelm the mind of one creature you can see within range. If the target has 150 Hit Points or fewer, it has the Stunned condition. Otherwise, its Speed is 0 until the start of your next turn.\n\nThe Stunned target makes a Constitution saving throw at the end of each of its turns, ending the condition on itself on a success.",
    "Prayer of Healing": "Level 2 Abjuration (Cleric, Paladin)\n\nCasting Time: 10 minutes Range: 30 feet Components: V Duration: Instantaneous\n\nUp to five creatures of your choice who remain within range for the spell's entire casting gain the benefits of a Short Rest and also regain 2d8 Hit Points. A creature can't be affected by this spell again until that creature finishes a Long Rest.\n\nUsing a Higher-Level Spell Slot. The healing increases by 1d8 for each spell slot level above 2.",
    "Prestidigitation": "Transmutation Cantrip (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 10 feet Components: V, S Duration: Up to 1 hour\n\nYou create a magical effect within range. Choose the effect from the options below. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time.\n\nSensory Effect. You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.\n\nFire Play. You instantaneously light or snuff out a candle, a torch, or a small campfire.\n\nClean or Soil. You instantaneously clean or soil an object no larger than 1 cubic foot.\n\nMinor Sensation. You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.\n\nMagic Mark. You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.\n\nMinor Creation. You create a nonmagical trinket or an illusory image that can fit in your hand. It lasts until the end of your next turn. A trinket can deal no damage and has no monetary worth.",
    "Prismatic Spray": "Level 7 Evocation (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S Duration: Instantaneous\n\nEight rays of light flash from you in a 60-foot Cone. Each creature in the Cone makes a Dexterity saving throw. For each target, roll 1d8 to determine which color ray affects it, consulting the Prismatic Rays table.\n\nPrismatic Rays\n\n1d8 | Ray\n1 | **Red.** *Failed Save:* 12d6 Fire damage. *Successful Save:* Half as much damage.\n2 | **Orange.** *Failed Save:* 12d6 Acid damage. *Successful Save:* Half as much damage.\n3 | **Yellow.** *Failed Save:* 12d6 Lightning damage. *Successful Save:* Half as much damage.\n4 | **Green.** *Failed Save:* 12d6 Poison damage. *Successful Save:* Half as much damage.\n5 | **Blue.** *Failed Save:* 12d6 Cold damage. *Successful Save:* Half as much damage.\n6 | **Indigo.** *Failed Save:* The target has the Restrained condition and makes a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the condition ends. If it fails three times, it has the Petrified condition until it is freed by an effect like the *Greater Restoration* spell. The successes and failures needn't be consecutive; keep track of both until the target collects three of a kind.\n7 | **Violet.** *Failed Save:* The target has the Blinded condition and makes a Wisdom saving throw at the start of your next turn. On a successful save, the condition ends. On a failed save, the condition ends, and the creature teleports to another plane of existence (GM's choice).\n8 | **Special.** The target is struck by two rays. Roll twice, rerolling any 8.",
    "Prismatic Wall": "Level 9 Abjuration (Bard, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: 10 minutes\n\nA shimmering, multicolored plane of light forms a vertical opaque wall—up to 90 feet long, 30 feet high, and 1 inch thick—centered on a point within range. Alternatively, you shape the wall into a globe up to 30 feet in diameter centered on a point within range. The wall lasts for the duration. If you position the wall in a space occupied by a creature, the spell ends instantly without effect.\n\nThe wall sheds Bright Light within 100 feet and Dim Light for an additional 100 feet. You and creatures you designate when you cast the spell can pass through and be near the wall without harm. If another creature that can see the wall moves within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or have the Blinded condition for 1 minute.\n\nThe wall consists of seven layers, each with a different color. When a creature reaches into or passes through the wall, it does so one layer at a time through all the layers. Each layer forces the creature to make a Dexterity saving throw or be affected by that layer's properties as described in the Prismatic Layers table.\n\nThe wall, which has AC 10, can be destroyed one layer at a time, in order from red to violet, by means specific to each layer. If a layer is destroyed, it is gone for the duration. Antimagic Field has no effect on the wall, and Dispel Magic can affect only the violet layer.\n\nPrismatic Layers\n\nOrder | Effects\n1 | **Red.** *Failed Save:* 12d6 Fire damage. *Successful Save:* Half as much damage. *Additional Effects:* Nonmagical ranged attacks can't pass through this layer, which is destroyed if it takes at least 25 Cold damage.\n2 | **Orange.** *Failed Save:* 12d6 Acid damage. *Successful Save:* Half as much damage. *Additional Effects:* Magical ranged attacks can't pass through this layer, which is destroyed by a strong wind (such as the one created by *Gust of Wind*).\n3 | **Yellow.** *Failed Save:* 12d6 Lightning damage. *Successful Save:* Half as much damage. *Additional Effects:* The layer is destroyed if it takes at least 60 Force damage.\n4 | **Green.** *Failed Save:* 12d6 Poison damage. *Successful Save:* Half as much damage. *Additional Effects:* A *Passwall* spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer.\n5 | **Blue.** *Failed Save:* 12d6 Cold damage. *Successful Save:* Half as much damage. *Additional Effects:* The layer is destroyed if it takes at least 25 Fire damage.\n6 | **Indigo.** *Failed Save:* The target has the Restrained condition and makes a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the condition ends. If it fails three times, it has the Petrified condition until it is freed by an effect like the *Greater Restoration* spell. The successes and failures needn't be consecutive; keep track of both until the target collects three of a kind. *Additional Effects:* Spells can't be cast through this layer, which is destroyed by Bright Light shed by the *Daylight* spell.\n7 | **Violet.** *Failed Save:* The target has the Blinded condition and makes a Wisdom saving throw at the start of your next turn. On a successful save, the condition ends. On a failed save, the condition ends, and the creature teleports to another plane of existence (GM's choice). *Additional Effects:* This layer is destroyed by *Dispel Magic*.",
    "Private Sanctum": "Level 4 Abjuration (Wizard)\n\nCasting Time: 10 minutes Range: 120 feet Components: V, S, M (a thin sheet of lead) Duration: 24 hours\n\nYou make an area within range magically secure. The area is a Cube that can be as small as 5 feet to as large as 100 feet on each side. The spell lasts for the duration.\n\nWhen you cast the spell, you decide what sort of security the spell provides, choosing any of the following properties:\n\nSound can't pass through the barrier at the edge of the warded area. The barrier of the warded area appears dark and foggy, preventing vision (including Darkvision) through it. Sensors created by Divination spells can't appear inside the protected area or pass through the barrier at its perimeter. Creatures in the area can't be targeted by Divination spells. Nothing can teleport into or out of the warded area. Planar travel is blocked within the warded area.\n\nCasting this spell on the same spot every day for 365 days makes the spell last until dispelled.\n\nUsing a Higher-Level Spell Slot. You can increase the size of the Cube by 100 feet for each spell slot level above 4.",
    "Produce Flame": "Conjuration Cantrip (Druid)\n\nCasting Time: Bonus Action Range: Self Components: V, S Duration: 10 minutes\n\nA flickering flame appears in your hand and remains there for the duration. While there, the flame emits no heat and ignites nothing, and it sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. The spell ends if you cast it again.\n\nUntil the spell ends, you can take a Magic action to hurl fire at a creature or an object within 60 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 Fire damage.\n\nCantrip Upgrade. The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
    "Programmed Illusion": "Level 6 Illusion (Bard, Wizard)\n\nCasting Time: Action Range: 120 feet\n\nComponents: V, S, M (jade dust worth 25+ GP) Duration: Until dispelled\n\nYou create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific trigger occurs. The illusion is imperceptible until then. It must be no larger than a 30-foot Cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes.\n\nWhen the trigger you specify occurs, the illusion springs into existence and performs in the manner you described. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes, after which the illusion can be activated again.\n\nThe trigger can be as general or as detailed as you like, though it must be based on visual or audible phenomena that occur within 30 feet of the area. For example, you could create an illusion of yourself to appear and warn off others who attempt to open a trapped door.\n\nPhysical interaction with the image reveals it to be illusory, since things can pass through it. A creature that takes the Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.",
    "Project Image": "Level 7 Illusion (Bard, Wizard)\n\nCasting Time: Action Range: 500 miles Components: V, S, M (a statuette of yourself worth 5+ GP) Duration: Concentration, up to 1 day\n\nYou create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you, but it is intangible. If the illusion takes any damage, it disappears, and the spell ends.\n\nYou can see through the illusion's eyes and hear through its ears as if you were in its space. As a Magic action, you can move it up to 60 feet and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly.\n\nPhysical interaction with the image reveals it to be illusory, since things can pass through it. A creature that takes the Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.",
    "Protection from Energy": "Level 3 Abjuration (Cleric, Druid, Ranger, Sorcerer, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S Duration: Concentration, up to 1 hour\n\nFor the duration, the willing creature you touch has Resistance to one damage type of your choice: Acid, Cold, Fire, Lightning, or Thunder.",
    "Protection from Evil and Good": "Level 1 Abjuration (Cleric, Druid, Paladin, Warlock, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (a flask of Holy Water worth 25+ GP, which the spell consumes) Duration: Concentration, up to 10 minutes\n\nUntil the spell ends, one willing creature you touch is protected against creatures that are Aberrations, Celestials, Elementals, Fey, Fiends, or Undead.\n\nThe protection grants several benefits. Creatures of those types have Disadvantage on attack rolls against the target. The target also can't be possessed by or gain the Charmed or Frightened conditions from them. If the target is already possessed, Charmed, or Frightened by such a creature, the target has Advantage on any new saving throw against the relevant effect.",
    "Protection from Poison": "Level 2 Abjuration (Cleric, Druid, Paladin, Ranger)\n\nCasting Time: Action Range: Touch Components: V, S Duration: 1 hour\n\nYou touch a creature and end the Poisoned condition on it. For the duration, the target has Advantage on saving throws to avoid or end the Poisoned condition, and it has Resistance to Poison damage.",
    "Purify Food and Drink": "Level 1 Transmutation (Cleric, Druid, Paladin)\n\nCasting Time: Action or Ritual Range: 10 feet Components: V, S Duration: Instantaneous\n\nYou remove poison and rot from nonmagical food and drink in a 5-foot-radius Sphere centered on a point within range.",
    "Raise Dead": "Level 5 Necromancy (Bard, Cleric, Paladin)\n\nCasting Time: 1 hour Range: Touch Components: V, S, M (a diamond worth 500+ GP, which the spell consumes) Duration: Instantaneous\n\nWith a touch, you revive a dead creature if it has been dead no longer than 10 days and it wasn't Undead when it died.\n\nThe creature returns to life with 1 Hit Point. This spell also neutralizes any poisons that affected the creature at the time of death.\n\nThis spell closes all mortal wounds, but it doesn't restore missing body parts. If the creature is lacking body parts or organs integral for its survival—its head, for instance—the spell automatically fails.\n\nComing back from the dead is an ordeal. The target takes a −4 penalty to D20 Tests. Every time the target finishes a Long Rest, the penalty is reduced by 1 until it becomes 0.",
    "Ray of Enfeeblement": "Level 2 Necromancy (Warlock, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Concentration, up to 1 minute\n\nA beam of enervating energy shoots from you toward a creature within range. The target must make a Constitution saving throw. On a successful save, the target has Disadvantage on the next attack roll it makes until the start of your next turn.\n\nOn a failed save, the target has Disadvantage on Strength-based D20 Tests for the duration. During that time, it also subtracts 1d8 from all its damage rolls. The target repeats the save at the end of each of its turns, ending the spell on a success.",
    "Ray of Frost": "Evocation Cantrip (Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Instantaneous\n\nA frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 Cold damage, and its Speed is reduced by 10 feet until the start of your next turn.\n\nCantrip Upgrade. The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
    "Regenerate": "Level 7 Transmutation (Bard, Cleric, Druid)\n\nCasting Time: 1 minute Range: Touch Components: V, S, M (a prayer wheel) Duration: 1 hour\n\nA creature you touch regains 4d8 + 15 Hit Points. For the duration, the target regains 1 Hit Point at the start of each of its turns, and any severed body parts regrow after 2 minutes.",
    "Ray of Sickness": "Level 1 Necromancy (Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Instantaneous\n\nYou shoot a greenish ray at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 Poison damage and has the Poisoned condition until the end of your next turn.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 1.",
    "Reincarnate": "Level 5 Necromancy (Druid)\n\nCasting Time: 1 hour Range: Touch Components: V, S, M (rare oils worth 1,000+ GP, which the spell consumes) Duration: Instantaneous\n\nYou touch a dead Humanoid or a piece of one. If the creature has been dead no longer than 10 days, the spell forms a new body for it and calls the soul to enter that body. Roll 1d10 and consult the table below to determine the body's species, or the GM chooses another playable species.\n\n1d10 | Species | 1d10 | Species\n1 | Roll again. | 6 | Goliath\n2 | Dragonborn | 7 | Halfling\n3 | Dwarf | 8 | Human\n4 | Elf | 9 | Orc\n5 | Gnome | 10 | Tiefling\n\nThe reincarnated creature makes any choices that a species' description offers, and the creature recalls its former life. It retains the capabilities it had in its original form, except it loses the traits of its previous species and gains the traits of its new one.",
    "Remove Curse": "Level 3 Abjuration (Cleric, Paladin, Warlock, Wizard)\n\nCasting Time: Action Range: Touch\n\nComponents: V, S Duration: Instantaneous\n\nAt your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner's Attunement to the object so it can be removed or discarded.",
    "Resilient Sphere": "Level 4 Abjuration (Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S, M (a glass sphere) Duration: Concentration, up to 1 minute\n\nA shimmering sphere encloses a Large or smaller creature or object within range. An unwilling creature must succeed on a Dexterity saving throw or be enclosed for the duration.\n\nNothing—not physical objects, energy, or other spell effects—can pass through the barrier, in or out, though a creature in the sphere can breathe there. The sphere is immune to all damage, and a creature or object inside can't be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it.\n\nThe sphere is weightless and just large enough to contain the creature or object inside. An enclosed creature can take an action to push against the sphere's walls and thus roll the sphere at up to half the creature's Speed. Similarly, the globe can be picked up and moved by other creatures.\n\nA Disintegrate spell targeting the globe destroys it without harming anything inside.",
    "Resistance": "Abjuration Cantrip (Cleric, Druid)\n\nCasting Time: Action Range: Touch Component: V, S Duration: Concentration, up to 1 minute\n\nYou touch a willing creature and choose a damage type: Acid, Bludgeoning, Cold, Fire, Lightning, Necrotic, Piercing, Poison, Radiant, Slashing, or Thunder. When the creature takes damage of the chosen type before the spell ends, the creature reduces the total damage taken by 1d4. A creature can benefit from this spell only once per turn.",
    "Resurrection": "Level 7 Necromancy (Bard, Cleric)\n\nCasting Time: 1 hour Range: Touch Components: V, S, M (a diamond worth 1,000+ GP, which the spell consumes) Duration: Instantaneous With a touch, you revive a dead creature that has been dead for no more than a century, didn't die of old age, and wasn't Undead when it died.\n\nThe creature returns to life with all its Hit Points. This spell also neutralizes any poisons that affected the creature at the time of death. This spell closes all mortal wounds and restores any missing body parts.\n\nComing back from the dead is an ordeal. The target takes a −4 penalty to D20 Tests. Every time the target finishes a Long Rest, the penalty is reduced by 1 until it becomes 0.\n\nCasting this spell to revive a creature that has been dead for 365 days or longer taxes you. Until you finish a Long Rest, you can't cast spells again, and you have Disadvantage on D20 Tests.",
    "Reverse Gravity": "Level 7 Transmutation (Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 100 feet Components: V, S, M (a lodestone and iron filings) Duration: Concentration, up to 1 minute\n\nThis spell reverses gravity in a 50-foot-radius, 100-foot high Cylinder centered on a point within range. All creatures and objects in that area that aren't anchored to the ground fall upward and reach the top of the Cylinder. A creature can make a Dexterity saving throw to grab a fixed object it can reach, thus avoiding the fall upward.\n\nIf a ceiling or an anchored object is encountered in this upward fall, creatures and objects strike it just as they would during a downward fall. If an affected creature or object reaches the Cylinder's top without striking anything, it hovers there for the duration. When the spell ends, affected objects and creatures fall downward.",
    "Revivify": "Level 3 Necromancy (Cleric, Druid, Paladin, Ranger)\n\nCasting Time: Action Range: Touch Components: V, S, M (a diamond worth 300+ GP, which the spell consumes) Duration: Instantaneous\n\nYou touch a creature that has died within the last minute. That creature revives with 1 Hit Point. This spell can't revive a creature that has died of old age, nor does it restore any missing body parts.",
    "Rope Trick": "Level 2 Transmutation (Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (a segment of rope) Duration: 1 hour\n\nYou touch a rope. One end of it hovers upward until the rope hangs perpendicular to the ground or the rope reaches a ceiling. At the rope's upper end, an Invisible 3-foot-by-5-foot portal opens to an extradimensional space that lasts until the spell ends. That space can be reached by climbing the rope, which can be pulled into or dropped out of it.\n\nThe space can hold up to eight Medium or smaller creatures. Attacks, spells, and other effects can't pass into or out of the space, but creatures inside it can see through the portal. Anything inside the space drops out when the spell ends.",
    "Sacred Flame": "Evocation Cantrip (Cleric)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Instantaneous\n\nFlame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 Radiant damage. The target gains no benefit from Half Cover or Three-Quarters Cover for this save.\n\nCantrip Upgrade. The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
    "Sanctuary": "Level 1 Abjuration (Cleric)\n\nCasting Time: Bonus Action Range: 30 feet Components: V, S, M (a shard of glass from a mirror) Duration: 1 minute\n\nYou ward a creature within range. Until the spell ends, any creature who targets the warded creature with an attack roll or a damaging spell must succeed on a Wisdom saving throw or either choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from areas of effect. The spell ends if the warded creature makes an attack roll, casts a spell, or deals damage.",
    "Scorching Ray": "Level 2 Evocation (Sorcerer, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S Duration: Instantaneous\n\nYou hurl three fiery rays. You can hurl them at one target within range or at several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 Fire damage.\n\nUsing a Higher-Level Spell Slot. You create one additional ray for each spell slot level above 2.",
    "Scrying": "Level 5 Divination (Bard, Cleric, Druid, Warlock, Wizard)\n\nCasting Time: 10 minutes Range: Self Components: V, S, M (a focus worth 1,000+ GP, such as a crystal ball, mirror, or water-filled font) Duration: Concentration, up to 10 minutes\n\nYou can see and hear a creature you choose that is on the same plane of existence as you. The target makes a Wisdom saving throw, which is modified (see the tables below) by how well you know the target and the sort of physical connection you have to it. The target doesn't know what it is making the save against, only that it feels uneasy.\n\nYour Knowledge of the Target Is … | Save Modifier\nSecondhand (heard of the target) | +5\nFirsthand (met the target) | +0\nExtensive (know the target well) | −5\n\nYou Have the Target's … | Save Modifier\nPicture or other likeness | −2\nGarment or other possession | −4\nBody part, lock of hair, or bit of nail | −10\n\nOn a successful save, the target isn't affected, and you can't use this spell on it again for 24 hours.\n\nOn a failed save, the spell creates an Invisible, intangible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. If something can see the sensor, it appears as a luminous orb about the size of your fist.\n\nInstead of targeting a creature, you can target a location you have seen. When you do so, the sensor appears at that location and doesn't move.",
    "Searing Smite": "Level 1 Evocation (Paladin)\n\nCasting Time: Bonus Action, which you take immediately after hitting a target with a Melee weapon or an Unarmed Strike Range: Self Component: V Duration: 1 minute\n\nAs you hit the target, it takes an extra 1d6 Fire damage from the attack. At the start of each of its turns until the spell ends, the target takes 1d6 Fire damage and then makes a Constitution saving throw. On a failed save, the spell continues. On a successful save, the spell ends.\n\nUsing a Higher-Level Spell Slot. All the damage increases by 1d6 for each spell slot level above 1.",
    "Secret Chest": "Level 4 Conjuration (Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (a chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth 5,000+ GP, and a Tiny replica of the chest made from the same materials worth 50+ GP) Duration: Until dispelled\n\nYou hide a chest and all its contents on the Ethereal Plane. You must touch the chest and the miniature replica that serve as Material components for the spell. The chest can contain up to 12 cubic feet of nonliving material (3 feet by 2 feet by 2 feet).\n\nWhile the chest remains on the Ethereal Plane, you can take a Magic action and touch the replica to recall the chest. It appears in an unoccupied space on the ground within 5 feet of you. You can send the chest back to the Ethereal Plane by taking a Magic action to touch the chest and the replica.\n\nAfter 60 days, there is a cumulative 5 percent chance at the end of each day that the spell ends. The spell also ends if you cast this spell again or if the Tiny replica chest is destroyed. If the spell ends and the larger chest is on the Ethereal Plane, the chest remains there for you or someone else to find.",
    "See Invisibility": "Level 2 Divination (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (a pinch of talc) Duration: 1 hour\n\nFor the duration, you see creatures and objects that have the Invisible condition as if they were visible, and you can see into the Ethereal Plane. Creatures and objects there appear ghostly.",
    "Seeming": "Level 5 Illusion (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S Duration: 8 hours\n\nYou give an illusory appearance to each creature of your choice that you can see within range. An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell.\n\nYou can give the same appearance or different ones to the targets. The spell can change the appearance of the targets' bodies and equipment. You can make each creature seem 1 foot shorter or taller and appear heavier or lighter. A target's new appearance must have the same basic arrangement of limbs as the target, but the extent of the illusion is otherwise up to you. The spell lasts for the duration.\n\nThe changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creature's outfit, objects pass through the hat.\n\nA creature that takes the Study action to examine a target can make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised.",
    "Sending": "Level 3 Divination (Bard, Cleric, Wizard)\n\nCasting Time: Action Range: Unlimited Components: V, S, M (a copper wire) Duration: Instantaneous\n\nYou send a short message of 25 words or fewer to a creature you have met or a creature described to you by someone who has met it. The target hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables targets to understand the meaning of your message.\n\nYou can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn't arrive. You know if the delivery fails.\n\nUpon receiving your message, a creature can block your ability to reach it again with this spell for 8 hours. If you try to send another message during that time, you learn that you are blocked, and the spell fails.",
    "Sequester": "Level 7 Transmutation (Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (gem dust worth 5,000+ GP, which the spell consumes) Duration: Until dispelled\n\nWith a touch, you magically sequester an object or a willing creature. For the duration, the target has the Invisible condition and can't be targeted by Divination spells, detected by magic, or viewed remotely with magic.\n\nIf the target is a creature, it enters a state of suspended animation; it has the Unconscious condition, doesn't age, and doesn't need food, water, or air.\n\nYou can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include \"after 1,000 years\" or \"when the tarrasque awakens.\" This spell also ends if the target takes any damage.",
    "Shapechange": "Level 9 Transmutation (Druid, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (a jade circlet worth 1,500+ GP) Duration: Concentration, up to 1 hour\n\nYou shape-shift into another creature for the duration or until you take a Magic action to shape-shift into a different eligible form. The new form must be of a creature that has a Challenge Rating no higher than your level or Challenge Rating. You must have seen the sort of creature before, and it can't be a Construct or an Undead.\n\nWhen you cast the spell, you gain a number of Temporary Hit Points equal to the Hit Points of the first form into which you shape-shift. These Temporary Hit Points vanish if any remain when the spell ends.\n\nYour game statistics are replaced by the stat block of the chosen form, but you retain your creature type; alignment; personality; Intelligence, Wisdom, and Charisma scores; Hit Points; Hit Point Dice; proficiencies; and ability to communicate. If you have the Spellcasting feature, you retain it too.\n\nUpon shape-shifting, you determine whether your equipment drops to the ground or changes in size and shape to fit the new form while you're in it.",
    "Shatter": "Level 2 Evocation (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a chip of mica) Duration: Instantaneous\n\nA loud noise erupts from a point of your choice within range. Each creature in a 10-foot-radius Sphere centered there makes a Constitution saving throw, taking 3d8 Thunder damage on a failed save or half as much damage on a successful one. A Construct has Disadvantage on the save.\n\nA nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 2.",
    "Shield": "Level 1 Abjuration (Sorcerer, Wizard)\n\nCasting Time: Reaction, which you take when you are hit by an attack roll or targeted by the Magic Missile spell Range: Self Components: V, S Duration: 1 round\n\nAn imperceptible barrier of magical force protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from Magic Missile.",
    "Shield of Faith": "Level 1 Abjuration (Cleric, Paladin)\n\nCasting Time: Bonus Action Range: 60 feet Components: V, S, M (a prayer scroll) Duration: Concentration, up to 10 minutes\n\nA shimmering field surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.",
    "Shillelagh": "Transmutation Cantrip (Druid)\n\nCasting Time: Bonus Action Range: Self Components: V, S, M (mistletoe) Duration: 1 minute\n\nA Club or Quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. If the attack deals damage, it can be Force damage or the weapon's normal damage type (your choice).\n\nThe spell ends early if you cast it again or if you let go of the weapon.\n\nCantrip Upgrade. The damage die changes when you reach levels 5 (d10), 11 (d12), and 17 (2d6).",
    "Shining Smite": "Level 2 Transmutation (Paladin)\n\nCasting Time: Bonus Action, which you take immediately after hitting a creature with a Melee weapon or an Unarmed Strike Range: Self Component: V Duration: Concentration, up to 1 minute\n\nThe target hit by the strike takes an extra 2d6 Radiant damage from the attack. Until the spell ends, the target sheds Bright Light in a 5-foot radius, attack rolls against it have Advantage, and it can't benefit from the Invisible condition.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 2.",
    "Shocking Grasp": "Evocation Cantrip (Sorcerer, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S Duration: Instantaneous\n\nLightning springs from you to a creature that you try to touch. Make a melee spell attack against the target. On a hit, the target takes 1d8 Lightning damage, and it can't make Opportunity Attacks until the start of its next turn.\n\nCantrip Upgrade. The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
    "Silence": "Level 2 Illusion (Bard, Cleric, Ranger)\n\nCasting Time: Action or Ritual Range: 120 feet Components: V, S Duration: Concentration, up to 10 minutes\n\nFor the duration, no sound can be created within or pass through a 20-foot-radius Sphere centered on a point you choose within range. Any creature or object entirely inside the Sphere has Immunity to Thunder damage, and creatures have the Deafened condition while entirely inside it. Casting a spell that includes a Verbal component is impossible there.",
    "Silent Image": "Level 1 Illusion (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a bit of fleece) Duration: Concentration, up to 10 minutes\n\nYou create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot Cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.\n\nAs a Magic action, you can cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.\n\nPhysical interaction with the image reveals it to be an illusion, since things can pass through it. A creature that takes a Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.",
    "Simulacrum": "Level 7 Illusion (Wizard)\n\nCasting Time: 12 hours Range: Touch Components: V, S, M (powdered ruby worth 1,500+ GP, which the spell consumes) Duration: Until dispelled You create a simulacrum of one Beast or Humanoid that is within 10 feet of you for the entire casting of the spell. You finish the casting by touching both the creature and a pile of ice or snow that is the same size as that creature, and the pile turns into the simulacrum, which is a creature. It uses the game statistics of the original creature at the time of casting, except it is a Construct, its Hit Point maximum is half as much, and it can't cast this spell.\n\nThe simulacrum is Friendly to you and creatures you designate. It obeys your commands and acts on your turn in combat. The simulacrum can't gain levels, and it can't take Short or Long Rests.\n\nIf the simulacrum takes damage, the only way to restore its Hit Points is to repair it as you take a Long Rest, during which you expend components worth 100 GP per Hit Point restored. The simulacrum must stay within 5 feet of you for the repair.\n\nThe simulacrum lasts until it drops to 0 Hit Points, at which point it reverts to snow and melts away. If you cast this spell again, any simulacrum you created with this spell is instantly destroyed.",
    "Sleep": "Level 1 Enchantment (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a pinch of sand or rose petals) Duration: Concentration, up to 1 minute\n\nEach creature of your choice in a 5-foot-radius Sphere centered on a point within range must succeed on a Wisdom saving throw or have the Incapacitated condition until the end of its next turn, at which point it must repeat the save. If the target fails the second save, the target has the Unconscious condition for the duration. The spell ends on a target if it takes damage or someone within 5 feet of it takes an action to shake it out of the spell's effect.\n\nCreatures that don't sleep, such as elves, or that have Immunity to the Exhaustion condition automatically succeed on saves against this spell.",
    "Sleet Storm": "Level 3 Conjuration (Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 150 feet Components: V, S, M (a miniature umbrella) Duration: Concentration, up to 1 minute\n\nUntil the spell ends, sleet falls in a 40-foot-tall, 20-foot-radius Cylinder centered on a point you choose within range. The area is Heavily Obscured, and exposed flames in the area are doused.\n\nGround in the Cylinder is Difficult Terrain. When a creature enters the Cylinder for the first time on a turn or starts its turn there, it must succeed on a Dexterity saving throw or have the Prone condition and lose Concentration.",
    "Slow": "Level 3 Transmutation (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S, M (a drop of molasses) Duration: Concentration, up to 1 minute\n\nYou alter time around up to six creatures of your choice in a 40-foot Cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration.\n\nAn affected target's Speed is halved, it takes a −2 penalty to AC and Dexterity saving throws, and it can't take Reactions. On its turns, it can take either an action or a Bonus Action, not both, and it can make only one attack if it takes the Attack action. If it casts a spell with a Somatic component, there is a 25 percent chance the spell fails as a result of the target making the spell's gestures too slowly.\n\nAn affected target repeats the save at the end of each of its turns, ending the spell on itself on a success.",
    "Sorcerous Burst": "Evocation Cantrip (Sorcerer)\n\nCasting Time: Action Range: 120 feet Component: V, S Duration: Instantaneous\n\nYou cast sorcerous energy at one creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 damage of a type you choose: Acid, Cold, Fire, Lightning, Poison, Psychic, or Thunder.\n\nIf you roll an 8 on a d8 for this spell, you can roll another d8, and add it to the damage. When you cast this spell, the maximum number of these d8s you can add to the spell's damage equals your spellcasting ability modifier.\n\nCantrip Upgrade. The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
    "Spare the Dying": "Necromancy Cantrip (Cleric, Druid)\n\nCasting Time: Action Range: 15 feet Components: V, S Duration: Instantaneous\n\nChoose a creature within range that has 0 Hit Points and isn't dead. The creature becomes Stable.\n\nCantrip Upgrade. The range doubles when you reach levels 5 (30 feet), 11 (60 feet), and 17 (120 feet).",
    "Speak with Animals": "Level 1 Divination (Bard, Druid, Ranger, Warlock)\n\nCasting Time: Action or Ritual Range: Self Components: V, S Duration: 10 minutes\n\nFor the duration, you can comprehend and verbally communicate with Beasts, and you can use any of the Influence action's skill options with them.\n\nMost Beasts have little to say about topics that don't pertain to survival or companionship, but at minimum, a Beast can give you information about nearby locations and monsters, including whatever it has perceived within the past day.",
    "Speak with Dead": "Level 3 Necromancy (Bard, Cleric, Wizard)\n\nCasting Time: Action Range: 10 feet Components: V, S, M (burning incense) Duration: 10 minutes\n\nYou grant the semblance of life to a corpse of your choice within range, allowing it to answer questions you pose. The corpse must have a mouth, and this spell fails if the deceased creature was Undead when it died. The spell also fails if the corpse was the target of this spell within the past 10 days.\n\nUntil the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are antagonistic toward it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events.",
    "Speak with Plants": "Level 3 Transmutation (Bard, Druid, Ranger)\n\nCasting Time: Action Range: Self Components: V, S Duration: 10 minutes\n\nYou imbue plants in an immobile 30-foot Emanation with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell's area within the past day, gaining information about creatures that have passed, weather, and other circumstances.\n\nYou can also turn Difficult Terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into Difficult Terrain that lasts for the duration.\n\nThe spell doesn't enable plants to uproot themselves and move about, but they can move their branches, tendrils, and stalks for you.\n\nIf a Plant creature is in the area, you can communicate with it as if you shared a common language.",
    "Spider Climb": "Level 2 Transmutation (Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (a drop of bitumen and a spider) Duration: Concentration, up to 1 hour\n\nUntil the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and along ceilings, while leaving its hands free. The target also gains a Climb Speed equal to its Speed.\n\nUsing a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 2.",
    "Spike Growth": "Level 2 Transmutation (Druid, Ranger)\n\nCasting Time: Action Range: 150 feet Components: V, S, M (seven thorns) Duration: Concentration, up to 10 minutes\n\nThe ground in a 20-foot-radius Sphere centered on a point within range sprouts hard spikes and thorns. The area becomes Difficult Terrain for the duration. When a creature moves into or within the area, it takes 2d4 Piercing damage for every 5 feet it travels.\n\nThe transformation of the ground is camouflaged to look natural. Any creature that can't see the area when the spell is cast must take a Search action and succeed on a Wisdom (Perception or Survival) check against your spell save DC to recognize the terrain as hazardous before entering it.",
    "Spirit Guardians": "Level 3 Conjuration (Cleric)\n\nCasting Time: Action Range: Self Components: V, S, M (a prayer scroll) Duration: Concentration, up to 10 minutes\n\nProtective spirits flit around you in a 15-foot Emanation for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.\n\nWhen you cast this spell, you can designate creatures to be unaffected by it. Any other creature's Speed is halved in the Emanation, and whenever the Emanation enters a creature's space and whenever a creature enters the Emanation or ends its turn there, the creature must make a Wisdom saving throw. On a failed save, the creature takes 3d8 Radiant damage (if you are good or neutral) or 3d8 Necrotic damage (if you are evil). On a successful save, the creature takes half as much damage. A creature makes this save only once per turn.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 3.",
    "Spiritual Weapon": "Level 2 Evocation (Cleric)\n\nCasting Time: Bonus Action Range: 60 feet Components: V, S Duration: Concentration, up to 1 minute\n\nYou create a floating, spectral force that resembles a weapon of your choice and lasts for the duration. The force appears within range in a space of your choice, and you can immediately make one melee spell attack against one creature within 5 feet of the force. On a hit, the target takes Force damage equal to 1d8 plus your spellcasting ability modifier.\n\nAs a Bonus Action on your later turns, you can move the force up to 20 feet and repeat the attack against a creature within 5 feet of it.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for every slot level above 2.",
    "Starry Wisp": "Evocation Cantrip (Bard, Druid)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Instantaneous\n\nYou launch a mote of light at one creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 Radiant damage, and until the end of your next turn, it emits Dim Light in a 10-foot radius and can't benefit from the Invisible condition.\n\nCantrip Upgrade. The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
    "Stinking Cloud": "Level 3 Conjuration (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: 90 feet Components: V, S, M (a rotten egg) Duration: Concentration, up to 1 minute\n\nYou create a 20-foot-radius Sphere of yellow, nauseating gas centered on a point within range. The cloud is Heavily Obscured. The cloud lingers in the air for the duration or until a strong wind (such as the one created by Gust of Wind) disperses it.\n\nEach creature that starts its turn in the Sphere must succeed on a Constitution saving throw or have the Poisoned condition until the end of the current turn. While Poisoned in this way, the creature can't take an action or a Bonus Action.",
    "Stone Shape": "Level 4 Transmutation (Cleric, Druid, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (soft clay) Duration: Instantaneous\n\nYou touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape you like. For example, you could shape a large rock into a weapon, statue, or coffer, or you could make a small passage through a wall that is 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn't possible.",
    "Stoneskin": "Level 4 Transmutation (Druid, Ranger, Sorcerer, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (diamond dust worth 100+ GP, which the spell consumes) Duration: Concentration, up to 1 hour\n\nUntil the spell ends, one willing creature you touch has Resistance to Bludgeoning, Piercing, and Slashing damage.",
    "Storm of Vengeance": "Level 9 Conjuration (Druid)\n\nCasting Time: Action Range: 1 mile Components: V, S Duration: Concentration, up to 1 minute\n\nA churning storm cloud forms for the duration, centered on a point within range and spreading to a radius of 300 feet. Each creature under the cloud when it appears must succeed on a Constitution saving throw or take 2d6 Thunder damage and have the Deafened condition for the duration.\n\nAt the start of each of your later turns, the storm produces different effects, as detailed below.\n\nTurn 2. Acidic rain falls. Each creature and object under the cloud takes 4d6 Acid damage.\n\nTurn 3. You call six bolts of lightning from the cloud to strike six different creatures or objects beneath it. Each target makes a Dexterity saving throw, taking 10d6 Lightning damage on a failed save or half as much damage on a successful one. Turn 4. Hailstones rain down. Each creature under the cloud takes 2d6 Bludgeoning damage.\n\nTurns 5–10. Gusts and freezing rain assail the area under the cloud. Each creature there takes 1d6 Cold damage. Until the spell ends, the area is Difficult Terrain and Heavily Obscured, ranged attacks with weapons are impossible there, and strong wind blows through the area.",
    "Suggestion": "Level 2 Enchantment (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, M (a drop of honey) Duration: Concentration, up to 8 hours\n\nYou suggest a course of activity—described in no more than 25 words—to one creature you can see within range that can hear and understand you. The suggestion must sound achievable and not involve anything that would obviously deal damage to the target or its allies. For example, you could say, \"Fetch the key to the cult's treasure vault, and give the key to me.\" Or you could say, \"Stop fighting, leave this library peacefully, and don't return.\"\n\nThe target must succeed on a Wisdom saving throw or have the Charmed condition for the duration or until you or your allies deal damage to the target. The Charmed target pursues the suggestion to the best of its ability. The suggested activity can continue for the entire duration, but if the suggested activity can be completed in a shorter time, the spell ends for the target upon completing it.",
    "Summon Dragon": "Level 5 Conjuration (Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (an object with the image of a dragon engraved on it worth 500+ GP) Duration: Concentration, up to 1 hour\n\nYou call forth a Dragon spirit. It manifests in an unoccupied space that you can see within range and uses the Draconic Spirit stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\nThe creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.\n\nUsing a Higher-Level Spell Slot. Use the spell slot's level for the spell's level in the stat block.\n\nDraconic Spirit\n\nLarge Dragon, Neutral\n\nAC 14 + the spell's level HP 50 + 10 for each spell level above 5 Speed 30 ft., Fly 60 ft., Swim 30 ft.\n\nMOD | SAVE |  | MOD | SAVE |  | MOD | SAVE | \nSTR | 19 | +4 | +4 | DEX | 14 | +2 | +2 | CON | 17 | +3 | +3\nINT | 10 | +0 | +0 | WIS | 14 | +2 | +2 | CHA | 14 | +2 | +2\n\nResistances Acid, Cold, Fire, Lightning, Poison Immunities Charmed, Frightened, Poisoned Senses Blindsight 30 ft., Darkvision 60 ft.; Passive Perception 12 Languages Draconic, understands the languages you know CR None (XP 0; PB equals your Proficiency Bonus)\n\nTraits\n\nShared Resistances. When you summon the spirit, choose one of its Resistances. You have Resistance to the chosen damage type until the spell ends.\n\nActions\n\nMultiattack. The spirit makes a number of Rend attacks equal to half the spell's level (round down), and it uses Breath Weapon.\n\nRend. Melee Attack Roll: Bonus equals your spell attack modifier, reach 10 feet. Hit: 1d6 + 4 + the spell's level Piercing damage.\n\nBreath Weapon. Dexterity Saving Throw: DC equals your spell save DC, each creature in a 30-foot Cone. Failure: 2d6 damage of a type this spirit has Resistance to (your choice when you cast the spell). Success: Half damage.",
    "Sunbeam": "Level 6 Evocation (Cleric, Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S, M (a magnifying glass) Duration: Concentration, up to 1 minute\n\nYou launch a sunbeam in a 5-foot-wide, 60-foot-long Line. Each creature in the Line makes a Constitution saving throw. On a failed save, a creature takes 6d8 Radiant damage and has the Blinded condition until the start of your next turn. On a successful save, it takes half as much damage only.\n\nUntil the spell ends, you can take a Magic action to create a new Line of radiance.\n\nFor the duration, a mote of brilliant radiance shines above you. It sheds Bright Light in a 30-foot radius and Dim Light for an additional 30 feet. This light is sunlight.",
    "Sunburst": "Level 8 Evocation (Cleric, Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 150 feet Components: V, S, M (a piece of sunstone) Duration: Instantaneous\n\nBrilliant sunlight flashes in a 60-foot-radius Sphere centered on a point you choose within range. Each creature in the Sphere makes a Constitution saving throw. On a failed save, a creature takes 12d6 Radiant damage and has the Blinded condition for 1 minute. On a successful save, it takes half as much damage only.\n\nA creature Blinded by this spell makes another Constitution saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nThis spell dispels Darkness in its area that was created by any spell.",
    "Symbol": "Level 7 Abjuration (Bard, Cleric, Druid, Wizard)\n\nCasting Time: 1 minute Range: Touch Components: V, S, M (powdered diamond worth 1,000+ GP, which the spell consumes) Duration: Until dispelled or triggered\n\nYou inscribe a harmful glyph either on a surface (such as a section of floor or wall) or within an object that can be closed (such as a book or chest). The glyph can cover an area no larger than 10 feet in diameter. If you choose an object, it must remain in place; if it is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.\n\nThe glyph is nearly imperceptible and requires a successful Wisdom (Perception) check against your spell save DC to notice.\n\nWhen you inscribe the glyph, you set its trigger and choose which effect the symbol bears: Death, Discord, Fear, Pain, Sleep, or Stunning. Each one is explained below.\n\nSet the Trigger. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, common triggers include touching or stepping on the glyph, removing another object covering it, or approaching within a certain distance of it. For glyphs inscribed within an object, common triggers include opening that object or seeing the glyph.\n\nYou can refine the trigger so that only creatures of certain types activate it (for example, the glyph could be set to affect Aberrations). You can also set conditions for creatures that don't trigger the glyph, such as those who say a certain password.\n\nOnce triggered, the glyph glows, filling a 60-foot-radius Sphere with Dim Light for 10 minutes, after which time the spell ends. Each creature in the Sphere when the glyph activates is targeted by its effect, as is a creature that enters the Sphere for the first time on a turn or ends its turn there. A creature is targeted only once per turn.\n\nDeath. Each target makes a Constitution saving throw, taking 10d10 Necrotic damage on a failed save or half as much damage on a successful save.\n\nDiscord. Each target makes a Wisdom saving throw. On a failed save, a target argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has Disadvantage on attack rolls and ability checks.\n\nFear. Each target must succeed on a Wisdom saving throw or have the Frightened condition for 1 minute. While Frightened, the target must move at least 30 feet away from the glyph on each of its turns, if able.\n\nPain. Each target must succeed on a Constitution saving throw or have the Incapacitated condition for 1 minute.\n\nSleep. Each target must succeed on a Wisdom saving throw or have the Unconscious condition for 10 minutes. A creature awakens if it takes damage or if someone takes an action to shake it awake.\n\nStunning. Each target must succeed on a Wisdom saving throw or have the Stunned condition for 1 minute.",
    "Telekinesis": "Level 5 Transmutation (Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: Concentration, up to 10 minutes\n\nYou gain the ability to move or manipulate creatures or objects by thought. When you cast the spell and as a Magic action on your later turns before the spell ends, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell.\n\nCreature. You can try to move a Huge or smaller creature. The target must succeed on a Strength saving throw, or you move it up to 30 feet in any direction within the spell's range. Until the end of your next turn, the creature has the Restrained condition, and if you lift it into the air, it is suspended there. It falls at the end of your next turn unless you use this option on it again and it fails the save.\n\nObject. You can try to move a Huge or smaller object. If the object isn't being worn or carried, you automatically move it up to 30 feet in any direction within the spell's range. If the object is worn or carried by a creature, that creature must succeed on a Strength saving throw, or you pull the object away and move it up to 30 feet in any direction within the spell's range.\n\nYou can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial.",
    "Telepathic Bond": "Level 5 Divination (Bard, Wizard)\n\nCasting Time: Action or Ritual Range: 30 feet Components: V, S, M (two eggs) Duration: 1 hour\n\nYou forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures that can't communicate in any languages aren't affected by this spell.\n\nUntil the spell ends, the targets can communicate telepathically through the bond whether or not they share a language. The communication is possible over any distance, though it can't extend to other planes of existence.",
    "Teleport": "Level 7 Conjuration (Bard, Sorcerer, Wizard)\n\nCasting Time: Action Range: 10 feet Components: V Duration: Instantaneous\n\nThis spell instantly transports you and up to eight willing creatures that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be Large or smaller, and it can't be held or carried by an unwilling creature.\n\nThe destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The GM rolls 1d100 and consults the Teleportation Outcome table and the explanations after it.\n\nTeleportation Outcome\n\nFamiliarity | Mishap | Similar Area | Off Target | On Target\nPermanent circle | — | — | — | 01–00\nLinked object | — | — | — | 01–00\nVery familiar | 01–05 | 06–13 | 14–24 | 25–00\nSeen casually | 01–33 | 34–43 | 44–53 | 54–00\nViewed once or described | 01–43 | 44–53 | 54–73 | 74–00\nFalse destination | 01–50 | 51–00 | — | —\n\nFamiliarity. Here are the meanings of the terms in the table's Familiarity column:\n\n\"Permanent circle\" means a permanent teleportation circle whose sigil sequence you know. \"Linked object\" means you possess an object taken from the desired destination within the last six months, such as a book from a wizard's library. \"Very familiar\" is a place you have visited often, a place you have carefully studied, or a place you can see when you cast the spell. \"Seen casually\" is a place you have seen more than once but with which you aren't very familiar. \"Viewed once or described\" is a place you have seen once, possibly using magic, or a place you know through someone else's description, perhaps from a map. \"False destination\" is a place that doesn't exist. Perhaps you tried to scry an enemy's sanctum but instead viewed an illusion, or you are attempting to teleport to a location that no longer exists.\n\nMishap. The spell's unpredictable magic results in a difficult journey. Each teleporting creature (or the target object) takes 3d10 Force damage, and the GM rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time).\n\nSimilar Area. You and your group (or the target object) appear in a different area that's visually or thematically similar to the target area. You appear in the closest similar place. If you are heading for your home laboratory, for example, you might appear in another person's laboratory in the same city.\n\nOff Target. You and your group (or the target object) appear 2d12 miles away from the destination in a random direction. Roll 1d8 for the direction: 1, east; 2, southeast; 3, south; 4, southwest; 5, west; 6, northwest; 7, north; or 8, northeast.\n\nOn Target. You and your group (or the target object) appear where you intended.",
    "Teleportation Circle": "Level 5 Conjuration (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: 1 minute Range: 10 feet Components: V, M (rare inks worth 50+ GP, which the spell consumes) Duration: 1 round\n\nAs you cast the spell, you draw a 5-foot-radius circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied.\n\nMany major temples, guildhalls, and other important places have permanent teleportation circles. Each circle includes a unique sigil sequence—a string of runes arranged in a particular pattern.\n\nWhen you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the GM. You might learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute.\n\nYou can create a permanent teleportation circle by casting this spell in the same location every day for 365 days.",
    "Thaumaturgy": "Transmutation Cantrip (Cleric)\n\nCasting Time: Action Range: 30 feet Components: V Duration: Up to 1 minute\n\nYou manifest a minor wonder within range. You create one of the effects below within range. If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time.\n\nAltered Eyes. You alter the appearance of your eyes for 1 minute.\n\nBooming Voice. Your voice booms up to three times as loud as normal for 1 minute. For the duration, you have Advantage on Charisma (Intimidation) checks.\n\nFire Play. You cause flames to flicker, brighten, dim, or change color for 1 minute.\n\nInvisible Hand. You instantaneously cause an unlocked door or window to fly open or slam shut.\n\nPhantom Sound. You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.\n\nTremors. You cause harmless tremors in the ground for 1 minute.",
    "Thunderwave": "Level 1 Evocation (Bard, Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V, S Duration: Instantaneous\n\nYou unleash a wave of thunderous energy. Each creature in a 15-foot Cube originating from you makes a Constitution saving throw. On a failed save, a creature takes 2d8 Thunder damage and is pushed 10 feet away from you. On a successful save, a creature takes half as much damage only.\n\nIn addition, unsecured objects that are entirely within the Cube are pushed 10 feet away from you, and a thunderous boom is audible within 300 feet.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 1.",
    "Time Stop": "Level 9 Transmutation (Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V Duration: Instantaneous\n\nYou briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal.\n\nThis spell ends if one of the actions you use during this period, or any effects that you create during it, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it.",
    "Tiny Hut": "Level 3 Evocation (Bard, Wizard)\n\nCasting Time: 1 minute or Ritual Range: Self Components: V, S, M (a crystal bead) Duration: 8 hours\n\nA 10-foot Emanation springs into existence around you and remains stationary for the duration. The spell fails when you cast it if the Emanation isn't big enough to fully encapsulate all creatures in its area.\n\nCreatures and objects within the Emanation when you cast the spell can move through it freely. All other creatures and objects are barred from passing through it. Spells of level 3 or lower can't be cast through it, and the effects of such spells can't extend into it.\n\nThe atmosphere inside the Emanation is comfortable and dry, regardless of the weather outside. Until the spell ends, you can command the interior to have Dim Light or Darkness (no action required). The Emanation is opaque from the outside and of any color you choose, but it's transparent from the inside.\n\nThe spell ends early if you leave the Emanation or if you cast it again.",
    "Tongues": "Level 3 Divination (Bard, Cleric, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: Touch Components: V, M (a miniature ziggurat) Duration: 1 hour\n\nThis spell grants the creature you touch the ability to understand any spoken or signed language that it hears or sees. Moreover, when the target communicates by speaking or signing, any creature that knows at least one language can understand it if that creature can hear the speech or see the signing.",
    "Transport via Plants": "Level 6 Conjuration (Druid)\n\nCasting Time: Action Range: 10 feet Components: V, S Duration: 1 minute\n\nThis spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement.",
    "Tree Stride": "Level 5 Conjuration (Druid, Ranger)\n\nCasting Time: Action Range: Self Components: V, S Duration: Concentration, up to 1 minute\n\nYou gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered.\n\nYou can use this transportation ability only once on each of your turns. You must end each turn outside a tree.",
    "True Polymorph": "Level 9 Transmutation (Bard, Warlock, Wizard)\n\nCasting Time: Action Range: 30 feet Components: V, S, M (a drop of mercury, a dollop of gum arabic, and a wisp of smoke) Duration: Concentration, up to 1 hour\n\nChoose one creature or nonmagical object that you can see within range. The creature shape-shifts into a different creature or a nonmagical object, or the object shape-shifts into a creature (the object must be neither worn nor carried). The transformation lasts for the duration or until the target dies or is destroyed, but if you maintain Concentration on this spell for the full duration, the spell lasts until dispelled.\n\nAn unwilling creature can make a Wisdom saving throw, and if it succeeds, it isn't affected by this spell.\n\nCreature into Creature. If you turn a creature into another kind of creature, the new form can be any kind you choose that has a Challenge Rating equal to or less than the target's Challenge Rating or level. The target's game statistics are replaced by the stat block of the new form, but it retains its Hit Points, Hit Point Dice, alignment, and personality.\n\nThe target gains a number of Temporary Hit Points equal to the Hit Points of the new form. These Temporary Hit Points vanish if any remain when the spell ends.\n\nThe target is limited in the actions it can perform by the anatomy of its new form, and it can't speak or cast spells.\n\nThe target's gear melds into the new form. The creature can't use or otherwise benefit from any of that equipment.\n\nObject into Creature. You can turn an object into any kind of creature, as long as the creature's size is no larger than the object's size and the creature has a Challenge Rating of 9 or lower. The creature is Friendly to you and your allies. In combat, it takes its turns immediately after yours, and it obeys your commands.\n\nIf the spell lasts more than an hour, you no longer control the creature. It might remain Friendly to you, depending on how you have treated it.\n\nCreature into Object. If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form, as long as the object's size is no larger than the creature's size. The creature's statistics become those of the object, and the creature has no memory of time spent in this form after the spell ends and it returns to normal.",
    "True Resurrection": "Level 9 Necromancy (Cleric, Druid)\n\nCasting Time: 1 hour Range: Touch Components: V, S, M (diamonds worth 25,000+ GP, which the spell consumes) Duration: Instantaneous\n\nYou touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. The creature is revived with all its Hit Points.\n\nThis spell closes all wounds, neutralizes any poison, cures all magical contagions, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs. If the creature was Undead, it is restored to its non-Undead form.\n\nThe spell can provide a new body if the original no longer exists, in which case you must speak the creature's name. The creature then appears in an unoccupied space you choose within 10 feet of you.",
    "True Seeing": "Level 6 Divination (Bard, Cleric, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: Touch Components: V, S, M (mushroom powder worth 25+ GP, which the spell consumes) Duration: 1 hour\n\nFor the duration, the willing creature you touch has Truesight with a range of 120 feet.",
    "True Strike": "Divination Cantrip (Bard, Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: Self Components: S, M (a weapon with which you have proficiency and that is worth 1+ CP) Duration: Instantaneous\n\nGuided by a flash of magical insight, you make one attack with the weapon used in the spell's casting. The attack uses your spellcasting ability for the attack and damage rolls instead of using Strength or Dexterity. If the attack deals damage, it can be Radiant damage or the weapon's normal damage type (your choice).\n\nCantrip Upgrade. Whether you deal Radiant damage or the weapon's normal damage type, the attack deals extra Radiant damage when you reach levels 5 (1d6), 11 (2d6), and 17 (3d6).",
    "Tsunami": "Level 8 Conjuration (Druid)\n\nCasting Time: 1 minute Range: 1 mile Components: V, S Duration: Concentration, up to 6 rounds\n\nA wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration.\n\nWhen the wall appears, each creature in its area makes a Strength saving throw, taking 6d10 Bludgeoning damage on a failed save or half as much damage on a successful one.\n\nAt the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 Bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall's height is reduced by 50 feet, and the damage the wall deals on later rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends.\n\nA creature caught in the wall can move by swimming. Because of the wave's force, though, the creature must succeed on a Strength (Athletics) check against your spell save DC to move at all. If it fails the check, it can't move. A creature that moves out of the wall falls to the ground.",
    "Unseen Servant": "Level 1 Conjuration (Bard, Warlock, Wizard)\n\nCasting Time: Action or Ritual Range: 60 feet Components: V, S, M (a bit of string and of wood) Duration: 1 hour\n\nThis spell creates an Invisible, mindless, shapeless, Medium force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 Hit Point, and a Strength of 2, and it can't attack. If it drops to 0 Hit Points, the spell ends.\n\nOnce on each of your turns as a Bonus Action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring drinks. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.\n\nIf you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.",
    "Vampiric Touch": "Level 3 Necromancy (Sorcerer, Warlock, Wizard)\n\nCasting Time: Action Range: Self Components: V, S Duration: Concentration, up to 1 minute\n\nThe touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against one creature within reach. On a hit, the target takes 3d6 Necrotic damage, and you regain Hit Points equal to half the amount of Necrotic damage dealt.\n\nUntil the spell ends, you can make the attack again on each of your turns as a Magic action, targeting the same creature or a different one.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 3.",
    "Vicious Mockery": "Enchantment Cantrip (Bard)\n\nCasting Time: Action Range: 60 feet Components: V Duration: Instantaneous\n\nYou unleash a string of insults laced with subtle enchantments at one creature you can see or hear within range. The target must succeed on a Wisdom saving throw or take 1d6 Psychic damage and have Disadvantage on the next attack roll it makes before the end of its next turn.\n\nCantrip Upgrade. The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
    "Vitriolic Sphere": "Level 4 Evocation (Sorcerer, Wizard)\n\nCasting Time: Action Range: 150 feet Components: V, S, M (a drop of bile) Duration: Instantaneous\n\nYou point at a location within range, and a glowing, 1-foot-diameter ball of acid streaks there and explodes in a 20-foot-radius Sphere. Each creature in that area makes a Dexterity saving throw. On a failed save, a creature takes 10d4 Acid damage and another 5d4 Acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage only.\n\nUsing a Higher-Level Spell Slot. The initial damage increases by 2d4 for each spell slot level above 4.",
    "Wall of Fire": "Level 4 Evocation (Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S, M (a piece of charcoal) Duration: Concentration, up to 1 minute\n\nYou create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.\n\nWhen the wall appears, each creature in its area makes a Dexterity saving throw, taking 5d8 Fire damage on a failed save or half as much damage on a successful one.\n\nOne side of the wall, selected by you when you cast this spell, deals 5d8 Fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.\n\nUsing a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 4.",
    "Wall of Force": "Level 5 Evocation (Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S, M (a shard of glass) Duration: Concentration, up to 10 minutes\n\nAn Invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a globe with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick and lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (you choose which side).\n\nNothing can physically pass through the wall. It is immune to all damage and can't be dispelled by Dispel Magic. A Disintegrate spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane and blocks ethereal travel through the wall.",
    "Wall of Ice": "Level 6 Evocation (Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S, M (a piece of quartz) Duration: Concentration, up to 10 minutes\n\nYou create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a globe with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration.\n\nIf the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (you choose which side) and makes a Dexterity saving throw, taking 10d6 Cold damage on a failed save or half as much damage on a successful one.\n\nThe wall is an object that can be damaged and thus breached. It has AC 12 and 30 Hit Points per 10-foot section, and it has Immunity to Cold, Poison, and Psychic damage and Vulnerability to Fire damage. Reducing a 10-foot section of wall to 0 Hit Points destroys it and leaves behind a sheet of frigid air in the space the wall occupied.\n\nA creature moving through the sheet of frigid air for the first time on a turn makes a Constitution saving throw, taking 5d6 Cold damage on a failed save or half as much damage on a successful one. Using a Higher-Level Spell Slot. The damage the wall deals when it appears increases by 2d6 and the damage from passing through the sheet of frigid air increases by 1d6 for each spell slot level above 6.",
    "Wall of Stone": "Level 5 Evocation (Druid, Sorcerer, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S, M (a cube of granite) Duration: Concentration, up to 10 minutes\n\nA nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick.\n\nIf the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (you choose which side). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its Reaction to move up to its Speed so that it is no longer enclosed by the wall.\n\nThe wall can have any shape you desire, though it can't occupy the same space as a creature or object. The wall doesn't need to be vertical or rest on a firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp.\n\nIf you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create battlements and the like.\n\nThe wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 Hit Points per inch of thickness, and it has Immunity to Poison and Psychic damage. Reducing a panel to 0 Hit Points destroys it and might cause connected panels to collapse at the GM's discretion.\n\nIf you maintain your Concentration on this spell for its full duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends.",
    "Wall of Thorns": "Level 6 Conjuration (Druid)\n\nCasting Time: Action Range: 120 feet Components: V, S, M (a handful of thorns) Duration: Concentration, up to 10 minutes\n\nYou create a wall of tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight.\n\nWhen the wall appears, each creature in its area makes a Dexterity saving throw, taking 7d8 Piercing damage on a failed save or half as much damage on a successful one.\n\nA creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters a space in the wall on a turn or ends its turn there, the creature makes a Dexterity saving throw, taking 7d8 Slashing damage on a failed save or half as much damage on a successful one. A creature makes this save only once per turn.\n\nUsing a Higher-Level Spell Slot. Both types of damage increase by 1d8 for each spell slot level above 6.",
    "Warding Bond": "Level 2 Abjuration (Cleric, Paladin)\n\nCasting Time: Action Range: Touch Components: V, S, M (a pair of platinum rings worth 50+ GP each, which you and the target must wear for the duration) Duration: 1 hour\n\nYou touch another creature that is willing and create a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has Resistance to all damage. Also, each time it takes damage, you take the same amount of damage.\n\nThe spell ends if you drop to 0 Hit Points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures.",
    "Water Breathing": "Level 3 Transmutation (Druid, Ranger, Sorcerer, Wizard)\n\nCasting Time: Action or Ritual Range: 30 feet Components: V, S, M (a short reed) Duration: 24 hours\n\nThis spell grants up to ten willing creatures of your choice within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration.",
    "Water Walk": "Level 3 Transmutation (Cleric, Druid, Ranger, Sorcerer)\n\nCasting Time: Action or Ritual Range: 30 feet Components: V, S, M (a piece of cork) Duration: 1 hour\n\nThis spell grants the ability to move across any liquid surface—such as water, acid, mud, snow, quicksand, or lava—as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures of your choice within range gain this ability for the duration.\n\nAn affected target must take a Bonus Action to pass from the liquid's surface into the liquid itself and vice versa, but if the target falls into the liquid, the target passes through the surface into the liquid below.",
    "Web": "Level 2 Conjuration (Sorcerer, Wizard)\n\nCasting Time: Action Range: 60 feet Components: V, S, M (a bit of spiderweb) Duration: Concentration, up to 1 hour\n\nYou conjure a mass of sticky webbing at a point within range. The webs fill a 20-foot Cube there for the duration. The webs are Difficult Terrain, and the area within them is Lightly Obscured.\n\nIf the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.\n\nThe first time a creature enters the webs on a turn or starts its turn there, it must succeed on a Dexterity saving throw or have the Restrained condition while in the webs or until it breaks free.\n\nA creature Restrained by the webs can take an action to make a Strength (Athletics) check against your spell save DC. If it succeeds, it is no longer Restrained.\n\nThe webs are flammable. Any 5-foot Cube of webs exposed to fire burns away in 1 round, dealing 2d4 Fire damage to any creature that starts its turn in the fire.",
    "Weird": "Level 9 Illusion (Warlock, Wizard)\n\nCasting Time: Action Range: 120 feet Components: V, S Duration: Concentration, up to 1 minute\n\nYou try to create illusory terrors in others' minds. Each creature of your choice in a 30-foot-radius Sphere centered on a point within range makes a Wisdom saving throw. On a failed save, a target takes 10d10 Psychic damage and has the Frightened condition for the duration. On a successful save, a target takes half as much damage only.\n\nA Frightened target makes a Wisdom saving throw at the end of each of its turns. On a failed save, it takes 5d10 Psychic damage. On a successful save, the spell ends on that target.",
    "Wind Walk": "Level 6 Transmutation (Druid)\n\nCasting Time: 1 minute Range: 30 feet Components: V, S, M (a candle) Duration: 8 hours\n\nYou and up to ten willing creatures of your choice within range assume gaseous forms for the duration, appearing as wisps of cloud. While in this cloud form, a target has a Fly Speed of 300 feet and can hover; it has Immunity to the Prone condition; and it has Resistance to Bludgeoning, Piercing, and Slashing damage. The only actions a target can take in this form are the Dash action or a Magic action to begin reverting to its normal form. Reverting takes 1 minute, during which the target has the Stunned condition. Until the spell ends, the target can revert to cloud form, which also requires a Magic action followed by a 1-minute transformation.\n\nIf a target is in cloud form and flying when the effect ends, the target descends 60 feet per round for 1 minute until it lands, which it does safely. If it can't land after 1 minute, it falls the remaining distance.",
    "Wind Wall": "Level 3 Evocation (Druid, Ranger)\n\nCasting Time: Action Range: 120 feet Components: V, S, M (a fan and a feather) Duration: Concentration, up to 1 minute\n\nA wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration.\n\nWhen the wall appears, each creature in its area makes a Strength saving throw, taking 4d8 Bludgeoning damage on a failed save or half as much damage on a successful one.\n\nThe strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and miss automatically. Boulders hurled by Giants or siege engines, and similar projectiles, are unaffected. Creatures in gaseous form can't pass through it.",
    "Wish": "Level 9 Conjuration (Sorcerer, Wizard)\n\nCasting Time: Action Range: Self Components: V Duration: Instantaneous\n\nWish is the mightiest spell a mortal can cast. By simply speaking aloud, you can alter reality itself.\n\nThe basic use of this spell is to duplicate any other spell of level 8 or lower. If you use it this way, you don't need to meet any requirements to cast that spell, including costly components. The spell simply takes effect.\n\nAlternatively, you can create one of the following effects of your choice:\n\nObject Creation. You create one object of up to 25,000 GP in value that isn't a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space that you can see on the ground.\n\nInstant Health. You allow yourself and up to twenty creatures that you can see to regain all Hit Points, and you end all effects on them listed in the Greater Restoration spell.\n\nResistance. You grant up to ten creatures that you can see Resistance to one damage type that you choose. This Resistance is permanent.\n\nSpell Immunity. You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours.\n\nSudden Learning. You replace one of your feats with another feat for which you are eligible. You lose all the benefits of the old feat and gain the benefits of the new one. You can't replace a feat that is a prerequisite for any of your other feats or features.\n\nRoll Redo. You undo a single recent event by forcing a reroll of any die roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a Wish spell could undo an ally's failed saving throw or a foe's Critical Hit. You can force the reroll to be made with Advantage or Disadvantage, and you choose whether to use the reroll or the original roll.\n\nReshape Reality. You may wish for something not included in any of the other effects. To do so, state your wish to the GM as precisely as possible. The GM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might be achieved only in part, or you might suffer an unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game.\n\nSimilarly, wishing for a Legendary magic item or an Artifact might instantly transport you to the presence of the item's current owner. If your wish is granted and its effects have consequences for a whole community, region, or world, you are likely to attract powerful foes. If your wish would affect a god, the god's divine servants might instantly intervene to prevent it or to encourage you to craft the wish in a particular way. If your wish would undo the multiverse itself, your wish fails.\n\nThe stress of casting Wish to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a Long Rest, you take 1d10 Necrotic damage per level of that spell. This damage can't be reduced or prevented in any way. In addition, your Strength score becomes 3 for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast Wish ever again if you suffer this stress.",
    "Word of Recall": "Level 6 Conjuration (Cleric)\n\nCasting Time: Action Range: 5 feet Components: V Duration: Instantaneous\n\nYou and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect.\n\nYou must designate a location, such as a temple, as a sanctuary by casting this spell there.",
    "Zone of Truth": "Level 2 Enchantment (Bard, Cleric, Paladin)\n\nCasting Time: Action Range: 60 feet Components: V, S Duration: 10 minutes\n\nYou create a magical zone that guards against deception in a 15-foot-radius Sphere centered on a point within range. Until the spell ends, a creature that enters the spell's area for the first time on a turn or starts its turn there makes a Charisma saving throw. On a failed save, a creature can't speak a deliberate lie while in the radius. You know whether a creature succeeds or fails on this save.\n\nAn affected creature is aware of the spell and can avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive yet must be truthful."
  }
};
