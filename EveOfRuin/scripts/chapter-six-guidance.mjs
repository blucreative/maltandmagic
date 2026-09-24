const creature = (name, count, note = '') => ({ name, count, note });
const encounter = (name, trigger, creatures, tactics, resolution) => ({ name, trigger, creatures, tactics, resolution });

export function chapterSixGuidance(document, fallback) {
  const scenes = new Map(fallback.scenes.map(scene => [scene.heading, scene]));
  function scene(prefix, purpose, tips, watchFor = [], next = [], encounters = []) {
    const section = document.sections.find(item => item.heading === prefix || item.heading.startsWith(`${prefix} `));
    if (!section) throw new Error(`Chapter 6 guidance cannot find source heading: ${prefix}`);
    scenes.set(section.heading, { heading: section.heading, purpose, tips, watchFor, next, encounters });
  }

  scene('Running This Chapter', 'Run a chain of earned leads, not a hunt for an invisible objective.', [
    'The fourth rod piece leads to the dying peylon tree because of residual magic. The fifth piece has already been moved to Three Moons Vault, and the red moonlight interferes with the rod.',
    'The players and the Wizards Three do not initially know why the indication is imprecise. Let investigation and the wardens reveal the answer instead of having a wizard explain the hidden cause.',
    'Keep the sequence clear: investigate the tree, help Riffel rescue the wardens, reach the secret vault entrance, rescue Valendar, use the mirrors and orrery, disrupt the ritual, recover the rod, and return to the original portal.'
  ], ['The party begins at level 15. Retrieving the fifth piece is the advancement milestone; do not grant it merely for reaching the vault.'], ['Start at Arriving on Krynn unless your table is already further into the chapter.']);
  scene('Power of Secrets', 'Reward the two specific disclosures, not every piece of useful information.', [
    'Gazaia admits she hid instead of defending the tree when someone comforts her.',
    'Valendar admits he failed to scout the vault when the characters ask about his sheepish response.',
    'Either disclosure counts regardless of how the characters react. Record only disclosures actually heard at the table.'
  ]);
  scene('Knowledge of Krynn', 'Give a short, usable departure briefing without solving the chapter.', [
    'Use the three research topics the source supplies: dragons, the Cataclysm, and the current war.',
    'The rod indicates the Northern Dargaard Mountains and a huge tree, but its signal is uncertain. Neither the party nor the wizards knows the reason yet.',
    'Use the Krynn visit in Sigil Sanctum for optional NPC portrayal; keep future information out of the briefing.'
  ]);
  scene('Arriving on Krynn', 'Establish the return route and distinguish the two trees.', [
    'The portal is in a living fruit tree. The rod points toward a different, enormous dying tree nearby.',
    'Make that distinction clear in your description so the party can later find the correct doorway back to Sigil.',
    'The stale magical trace is an intentional lead, not a malfunction that the characters must diagnose with an invented check.'
  ], [], ['P1: Rotted Roots begins the peylon-tree exploration.']);
  scene('P1:', 'Offer two physical approaches to the hollow.', [
    'Examining the ground can reveal tracks into P2 with DC 14 Perception or Survival.',
    'Climbing the eastern roots reaches P3 at a height of 60 feet. Explain the visible route without assuming which approach the party chooses.'
  ], [], ['P2 below or the alternative entrance at P3.']);
  scene('P2:', 'Point toward the grotto while the ledge creates a separate danger.', [
    'The rod points toward the boulder. Inspection reveals the hole under it; a Small creature can already fit.',
    'Widening the hole for Medium creatures takes 1 minute. Moving the boulder requires combined Strength 30, not a Strength check invented on top.',
    'Entering from P1 alerts the occupants of P3. Run their approach and detection thresholds from that passage.'
  ], ['The grotto floor is 50 feet below its entrance.'], ['P3 may interrupt the investigation; P4 holds the next social lead.']);
  scene('P3:', 'Use the ambush and surrender to introduce the grotto occupants.', [
    'An active lookout can notice the spiders with DC 17 Perception; passive Perception 15 notices them preparing to attack. These are different conditions.',
    'Rosintar is indistinguishable from the tree while motionless. Do not announce him as a hostile creature before the source conditions reveal him.',
    'At 30 HP or fewer, Rosintar surrenders. If spared, he can identify Gazaia and the blue-cloaked intruder; his certainty that the intruder is dead is wrong.'
  ], ['The alternative P1 climb provokes an immediate attack if Rosintar notices the arrivals.'], ['Use the boulder opening in P2 to reach P4.'], [
    encounter('Rosintar and the spiders', 'The spiders attack entrants in P2, or Rosintar notices intruders arriving directly on the ledge.', [
      creature('Treant', 1, 'Rosintar is neutral evil and surrenders at 30 HP or fewer.'),
      creature('Giant Spider', 2, 'These two follow Rosintar and begin the ambush.')
    ], ['Rosintar throws a rock when the spiders attack; follow the source ambush procedure.'], 'Accepting surrender can produce the grotto lead; killing the defenders does not remove the physical entrance.')
  ]);
  scene('P4:', 'Let a frightened ally turn the rod hunt into a concrete rescue.', [
    'Riffel is a Small, neutral good kender werewolf. His drawn spear is caution, not an automatic initiative trigger; he fights only if attacked.',
    'Mentioning the rod relaxes him, as does befriending him with DC 13 Persuasion.',
    'His offer is specific: help obtain fruit and rescue the wardens, and he will provide a hidden route into the vault. The fruit is for the borthak, not a healing item.'
  ], ['The dark grotto is 50 feet below the opening.'], ['The Deadbark Dryad interrupts this conversation.'], [
    encounter('Riffel, only if attacked', 'Riffel defends himself if the party attacks him.', [
      creature('Werewolf', 1, 'Riffel: Small size, neutral good. He is an ally unless attacked.')
    ], ['Do not treat lycanthropy as evidence of hostility.'], 'Keep the rescue offer available if the party resolves the misunderstanding.')
  ]);
  scene('The Deadbark Dryad', 'Present a hard bargain with a grief-driven NPC.', [
    'Gazaia has the last ripe fruit and demands any magic item. The text allows no other payment; do not quietly turn the price into a gold or Persuasion check.',
    'The party can pay, leave, attempt theft, or escalate. Explain the offer before applying her refusal-to-leave or theft triggers.',
    'Her bitterness is rooted in the theft of the rod and the dying tree, but her confession requires a character to try to comfort her.'
  ], [], ['Bargaining with Gazaia describes the secret and hostility triggers.']);
  scene('Bargaining with Gazaia', 'Separate the price, the secret, and the fight.', [
    'Comfort can elicit Gazaia’s confession that she hid from the soldiers; learning this is a qualifying secret.',
    'She attacks if the party refuses and fails to leave promptly, or if she catches someone taking the fruit by stealth or force.',
    'If killed before she explains anything, the fruit is still on her body. Do not grant her unrevealed secret automatically.'
  ], [], ['Once the party has fruit, Riffel leads them toward Bittergrass Fen.'], [
    encounter('Gazaia', 'Refusing to leave after rejecting her price, or being caught stealing or taking the fruit, triggers her attack.', [
      creature('Deadbark Dryad', 1, 'Gazaia fights until destroyed.')
    ], ['Run the published deadbark dryad block; no additional summoned allies are specified.'], 'The fruit remains obtainable from her body, but an unspoken confession is not learned.')
  ]);
  scene('Journey to Bittergrass Fen', 'Use the hour-long walk to connect the rescue to the campaign objective.', [
    'Riffel explains that Teremini serves Soth, her soldiers stole the shard, and the failed warden assault left Valendar captured.',
    'The party can identify the stolen shard as the fifth rod piece. Valendar is the next source of detailed vault information.'
  ]);
  scene('Approaching the Fen', 'Run a rescue under pressure rather than a mandatory kill.', [
    'Put the temple door on your scratchpad: AC 20, 225 HP, immunity to poison and psychic damage.',
    'Left alone, the borthak attacks the door each turn. An attack on the borthak draws its attention away from the door.',
    'The seven wardens inside are rescue targets. Argentia later speaks for this group; do not add her as an eighth trapped warden.'
  ], ['The underground temple is not drawn on map 6.2. Use its textual description rather than inventing mapped rooms.'], ['Distracting the Borthak supplies the rescue timing.'], [
    encounter('Bittergrass Fen rescue', 'The borthak is attacking the temple door when the party arrives.', [
      creature('Borthak', 1, 'Initially attacks the temple door unless diverted.'),
      creature('Werewolf', 7, 'Allies trapped inside: change alignments to neutral good. These are not seven hostile enemies.')
    ], ['Track the door separately as an object.', 'Add Riffel only if you want his allied actions in initiative; he is separate from the seven trapped wardens.'], 'End the encounter when the borthak is defeated or the party and all wardens have escaped.')
  ]);
  scene('Distracting the Borthak', 'Make the distraction and evacuation happen on visible turns.', [
    'Throwing the fruit takes an action: on its next turn the borthak moves to it and spends its action eating.',
    'Holding the fruit within 20 feet instead draws pursuit and attacks. It is not a safe charm effect.',
    'Riffel squeezes under the door while the borthak is occupied. On his next turn, he and the wardens open the door and begin escaping north along the bluff.'
  ], ['Do not continue a fight to the death after everyone has escaped merely because the borthak is alive.']);
  scene('Bittergrass Fen Features', 'Make the terrain useful without adding new mechanics.', [
    'A creature within reach can push a floating boulder with an action and DC 15 Athletics; Dispel Magic can also make one fall.',
    'A creature in a falling boulder’s path makes DC 15 Dexterity or takes 2d10 bludgeoning damage.',
    'The bank within 20 feet of the creek’s eastern shore is difficult terrain.'
  ]);
  scene('The Blue Fire Wardens', 'Use Argentia’s debrief to give the party a plan.', [
    'Explain that red moonlight turned the wardens’ own transformations against them during the Night of Blue Fire.',
    'Teremini learned the magic and ritual from Orinix; barriers protect her and the components while she concentrates.',
    'Argentia points the party toward rescuing Valendar for a way to stop the ritual, not straight into an unwinnable barrier assault.'
  ]);
  scene('Wardens’ Aid', 'State the help and its limits clearly.', [
    'The wardens give the party a Moonbeam scroll. Argentia also explains that Valendar may need to be brought close to death to regain his true form.',
    'For 12 hours, Riffel and allies within 10 feet of him are immune to Forced Transformation. This is not universal immunity to every harmful red mirror effect.',
    'The ward can be cast only once. Riffel needs to bring Valendar back promptly; he is not automatically a permanent dungeon companion.'
  ], [], ['The walk to the vault takes about an hour; Riffel waits outside the secret entrance.']);
  scene('The Characters’ Goals', 'Keep all three objectives visible.', [
    'Rescue and restore Valendar, disrupt Teremini’s ritual, and recover the fifth rod piece.',
    'Valendar and Casivus can explain the mirror plan; V29 supplies the actual color combination.',
    'Do not treat securing a mirror as automatically completing the corresponding crystal objective.'
  ]);
  scene('Environmental Effects', 'Separate the exterior aura from local room effects.', [
    'The red moonlight affects the 1-mile area around the vault; the general environmental effects are suppressed in the vault’s locations.',
    'A werewolf exposed to the aura is forced into wolf or hybrid form and poisoned. At 10 HP or fewer it can change shape; Remove Curse suppresses Forced Transformation for 1 hour.',
    'Reduced Gravity halves falling damage and doubles jump distance while that effect applies. Check Moonlight Shifts when the ritual ends rather than assuming the old protections remain.'
  ]);
  scene('Moonlight Mirrors', 'Treat mirrors as fragile tools with specific acquisition conditions.', [
    'Each mirror is a Medium object: AC 13, 5 HP, immune to poison, psychic, and radiant damage.',
    'An uncovered reflective face illuminates a 20-foot hemisphere in its moon’s color. Covering it matters, particularly in Valendar’s cell.',
    'There are two mirrors of each color. V31’s logbook lists all six locations; V29 provides the matching solution.'
  ]);
  scene('V1:', 'Run the sentries and the one-use doorway trap as separate threats.', [
    'Two moonlight guardians attack intruders on sight.',
    'Pulling either crescent handle triggers a 30-foot cone for 1 minute. Check entry/start-of-turn saves, not just the initial touch.',
    'The trap’s DC 17 Constitution save deals 5d10 radiant, half on success. A creature outside its true form has disadvantage and reverts on failure; the trap cannot be retriggered.'
  ], [], [], [
    encounter('Secret entrance sentries', 'Intruders are seen at the secret entrance.', [creature('Moonlight Guardian', 2)], ['The guardians fight until destroyed; track the doorway trap separately.'], 'Defeating the guards does not disarm an untriggered doorway trap.')
  ]);
  scene('V2:', 'Offer equipment and a theme of retreat without imposing a new obstacle.', [
    'The inscription is Elvish and endorses living to fight another day.',
    'The treasure includes a +1 longsword, shield, breastplate, and Potion of Vitality. The chest is unlocked.'
  ]);
  scene('V3:', 'Make the escape passage understandable from each side.', [
    'From the north, the glowing runes and their operation are obvious on examination; tracing them briefly removes the wall.',
    'From the south, finding their faint light requires DC 20 Investigation. Both sides can activate the route once the runes are found.'
  ]);
  scene('V4:', 'Use a local alarm, not instantaneous awareness throughout the keep.', [
    'Four wraiths patrol here. Guerthel carries the key for V7 and V10.',
    'A wraith uses its action to sound its horn when it sees an intruder or is attacked. Allies in V8 can hear within 100 feet.',
    'A dungeon horn is not audible in the keep above, and vice versa. Add V8 reinforcements only if the alarm actually reaches them.'
  ], [], [], [
    encounter('Dungeon patrol', 'A wraith sees or is attacked by an intruder.', [creature('Wraith', 4, 'Guerthel carries the V7/V10 key.')], ['Spend an action on the alarm before applying its reinforcement consequences.'], 'Track V8 troops as the same individuals if they join; do not spawn a second garrison.')
  ]);
  scene('V5:', 'Make Soth’s remote presence dangerous without placing Soth himself here.', [
    'Touching the silver liquid alerts Lord Soth with a ping. He can answer through the sphere.',
    'Anything other than deference to his manifested face can bring out a weaker death-knight facsimile.',
    'Use a death knight, not Lord Soth’s appendix block, for the projection. Destroying it also destroys the sphere.'
  ], [], [], [
    encounter('Soth’s silver facsimile', 'The party responds to the manifested face with something other than deference.', [creature('Death Knight', 1, 'A projection made from the sphere; not Lord Soth himself.')], ['It follows Soth’s directives without requiring his action.'], 'If the facsimile is destroyed, the sphere disappears too.')
  ]);
  scene('V6:', 'Use the howling as a lead to the rescue target.', [
    'The empty cells are not an additional encounter. Valendar’s howls come through the locked western door.',
    'Guerthel’s key opens V7; thieves’ tools and an action allow a DC 16 Sleight of Hand attempt.'
  ]);
  scene('V7:', 'Rescue a terrified prisoner rather than present a disposable monster.', [
    'The red mirror keeps Valendar in hybrid form; he mistakes the party for his tormentors and attacks.',
    'The mirror can be removed without special effort. Do not assume detaching an uncovered mirror stops it emitting moonlight.',
    'At 10 HP or fewer, Valendar reverts to his true form. Track this threshold explicitly instead of reducing him to 0 by default.',
    'Once restored, he explains the crystals and mirrors, then leaves through the escape tunnel to meet Riffel. Asking about his shame reveals his qualifying secret.'
  ], ['Valendar suggests the mirror strategy but does not give the exact color solution; the orrery supplies it.'], ['V15 can provide another helpful explanation; V29 reveals the combination.'], [
    encounter('Rescuing Valendar', 'The party opens his cell and he mistakes them for tormentors.', [creature('Werewolf', 1, 'Valendar: chaotic good; rescue target; reverts at 10 HP or fewer.')], ['Track the mirror’s illuminated area and the 10-HP threshold.'], 'Once restored, let the explanation and escape proceed rather than forcing combat to continue.')
  ]);
  scene('V8:', 'Track the actual garrison, including any troops already moved.', [
    'The full roster is sixteen skeletons, nine zombies, and two ogre zombies unless already called away.',
    'If V4’s horn brings these troops into another room, deduct them here. The source does not create replacement soldiers.'
  ], [], [], [
    encounter('Underground garrison', 'The party confronts the troops here or a local alarm calls them into the fight.', [
      creature('Skeleton', 16, 'Reduce the count if these individuals have already left.'),
      creature('Zombie', 9, 'Reduce the count if already deployed.'),
      creature('Ogre Zombie', 2, 'Reduce the count if already deployed.')
    ], ['Keep reinforcement locations and individual damage consistent across rooms.'], 'Update the surviving roster rather than resetting the room.')
  ]);
  scene('V9:', 'Keep the vertical route legible.', ['The spiral stair rises 50 feet to V32. This is a connection between levels, not an additional encounter.']);
  scene('V10:', 'Release a contained danger only when the locked room is opened.', [
    'Guerthel’s key opens this room; an action with thieves’ tools permits DC 10 Sleight of Hand.',
    'Akaazi locked the raging bearer here. It attacks entrants and fights until destroyed.',
    'The north doorway leads up to V35. The supplied Markdown has a malformed V10 heading; the full room text remains preserved.'
  ], [], [], [
    encounter('Confined black rose bearer', 'Someone enters the locked chamber.', [creature('Black Rose Bearer', 1)], ['No additional occupants are specified.'], 'The stair connection to V35 remains available.')
  ]);
  scene('V11:', 'Guard the vault approach without pre-opening every vault.', [
    'Two minotaur skeletons attack intruders on sight and fight until destroyed.',
    'The brown stain by the northern doorway leads toward the mold hazard; keep it separate from the sealed vaults.'
  ], [], [], [
    encounter('Vault access guards', 'Intruders enter the curved hall.', [creature('Minotaur Skeleton', 2)], ['Use the hall and closed vault doors as described.'], 'The V12 doors remain locked after the guards are defeated.')
  ]);
  scene('V12:', 'Treat the sub-vaults as distinct discoveries.', [
    'Each locked iron door can be picked with DC 18 Sleight of Hand or forced with DC 18 Athletics as an action.',
    'V12a has the one-use fire glyph: DC 17 Investigation to find it, DC 20 Arcana to disable it. Opening it as anyone except Teremini triggers the printed 20-foot-radius blast.',
    'V12b holds a beholder zombie; V12c is empty; V12d holds Valendar’s equipment. Do not put every reward in the first room.',
    'V12a contains 1,900 gp, ten 100-gp gems, and six 250-gp paintings. V12d includes the greater healing potion, Stoneskin scroll, armor, and blue cloak.'
  ], [], [], [
    encounter('V12b guardian', 'The beholder zombie encounters non-Undead other than Akaazi or Teremini.', [creature('Beholder Zombie', 1)], ['Apply its stated recognition exceptions.'], 'The other vaults have separate contents and opening conditions.')
  ]);
  scene('V13:', 'Flag an external hazard reference instead of inventing its mechanics.', [
    'Brown mold covers the chamber and is also difficult terrain. The chapter invokes its usual effects without supplying the complete hazard rule.',
    'The rubble slopes 20 feet up to V14. Do not replace the absent mold rules with a guessed save or damage amount.'
  ]);
  scene('V14:', 'Use the flooded basement as a route choice.', ['Standing water makes the floor difficult terrain. The collapsed rooms and downward rubble connection to V13 are described in the source.']);
  scene('V15:', 'Give an indifferent guardian a reason to cooperate.', [
    'Casivus is not an automatic enemy. Opposition to Teremini, or polite conversation with DC 14 Persuasion, makes the naga friendly.',
    'A friendly Casivus permits taking the white mirror, points toward the orrery, and gives the V16 passphrase: buried is best.',
    'Casivus does not wish to leave the shrine or accompany the party.'
  ], [], ['The orrery is in V29; V16 leads up the white tower.'], [
    encounter('Casivus, only if a fight develops', 'The source establishes an indifferent guardian and a friendly route, not mandatory combat. Use this only if your table’s actions produce a fight.', [creature('Guardian Naga', 1, 'Casivus; initially indifferent, potentially friendly.')], ['Do not invent hostility simply because a statblock is available.'], 'Cooperation can provide the mirror and essential leads without combat.')
  ]);
  scene('V16:', 'Use the known passphrase before asking for brute force.', ['The Arcane Lock passphrase is buried is best. Teremini, Akaazi, and Casivus know it.', 'Forcing the door requires an action and DC 24 Athletics. The stairs rise 30 feet to V17.']);
  scene('V17:', 'Show the upward route and the lookout’s possible response.', ['A ladder reaches V19. If the lookout expects attackers, she can pull that ladder up; check V19 before treating it as permanently available.']);
  scene('V18:', 'Distinguish the six guards from the seventh who joins.', [
    'Six veterans patrol the rubble slope; a seventh rests in the northern tent and joins a fight.',
    'They defend the keep with their lives. Track anyone who has already left to answer V22’s horn rather than duplicating them.'
  ], [], [], [
    encounter('Veteran camp', 'The camp’s guards defend the keep against the party.', [creature('Veteran', 7, 'Six initially on the slope; the seventh rushes from the tent when combat starts. All lawful evil humans.')], ['Position the seventh in the tent initially; do not place all seven on the slope without explanation.'], 'Reuse this same roster if the turret calls them elsewhere.')
  ]);
  scene('V19:', 'Use the lookout’s alarm and ladder rather than adding reinforcements by fiat.', [
    'One veteran watches here. Expecting attackers, she pulls up the V17 ladder and sounds her horn.',
    'The spiral stairs continue to V20. Apply the source’s limits on which level can hear an alarm.'
  ], [], [], [
    encounter('White tower lookout', 'The lookout detects or expects attackers.', [creature('Veteran', 1, 'Lawful evil human; carries a hollow goat horn.')], ['She can deny the ladder and raise the alarm.'], 'Track where the horn can actually be heard.')
  ]);
  scene('V20:', 'Provide a second white mirror without assuming discovery.', ['The mirror is under floor tiles in oilcloth: DC 12 Investigation to find it. Removal then needs no special effort.', 'The southern stairs reach U1.']);
  scene('V21:', 'Make gate control a coordinated action, not a single switch.', ['Both levers must be pulled at the same time; raising or lowering takes 1 minute.', 'The moat is 50 feet deep and filled with cold snowmelt. Do not invent additional saving throws absent a rule you explicitly supply.']);
  scene('V22:', 'Start the stated reinforcement clock when the alarm is sounded.', [
    'Two veterans watch the turret. If they see or hear an approach, they sound their horns.',
    'Allies from V18 arrive in 5 minutes, not immediately. Record that time and use the surviving V18 roster.'
  ], [], [], [
    encounter('Turret lookouts', 'The guards see or hear the party approaching.', [creature('Veteran', 2, 'Lawful evil humans with horns; V18 allies can arrive after 5 minutes.')], ['Sound the alarm and track its actual delay.'], 'Do not spawn a second set of the V18 veterans.')
  ]);
  scene('V23:', 'Make the wall walk useful for navigation.', ['The walkway connects the second floors of the moon towers. Courtyard staircases provide access.']);
  scene('V24:', 'Do not turn transport creatures into automatic attackers.', [
    'The two bone rocs are trained to ferry passengers to a lower rookery.',
    'They attack only if threatened or harmed. The source does not provide a guaranteed taming or commandeering procedure.'
  ], [], [], [
    encounter('Rookery, if provoked', 'A bone roc is threatened or harmed.', [creature('Bone Roc', 2)], ['Apply the stated provocation condition.'], 'If unprovoked, the scene need not become a fight.')
  ]);
  scene('V25:', 'Orient the party and foreshadow the height of the ending.', ['The courtyard connects the towers, other buildings, and wall stairs.', 'The moondisk is 100 feet above this space. That height matters when the ritual’s solid surfaces disappear.']);
  scene('V26:', 'Allow an empty service room to remain empty.', ['These are quarters for non-Undead visitors. No occupants, encounter, or treasure are specified here.']);
  scene('V27:', 'Keep equipment finds distinct from plot components.', ['The listed weapons, armor, shields, bolts, and Oil of Sharpness are supplies, not extra moonlight mirrors or ritual clues.']);
  scene('V28:', 'Make the black mirror accessible without inventing Soth’s presence.', ['This room is reserved for Soth’s rare visits; it does not say he is here now.', 'The black mirror on the throne can be removed without special effort.']);
  scene('V29:', 'Deliver the puzzle’s source-backed solution when the orrery is studied.', [
    'The current relation is red over white, white over black, and black over red.',
    'Translate this explicitly into the actionable solution: red light on the white crystal, white light on the black crystal, black light on the red crystal.',
    'No ability check is specified for studying the model. Removing the V30 mirror stops the orrery moving.'
  ], [], ['V31 lists mirror locations; the crystals are at U1, U2, and U3.']);
  scene('V30:', 'Offer the second red mirror and keep its consequence clear.', ['The red mirror comes off without special effort. Removing it stops the V29 orrery.', 'The stair continues upward through the red tower.']);
  scene('V31:', 'Use the logbook as a practical recovery clue.', [
    'The log lists white mirrors in V15/V20, red in V7/V30, and black in V28/V36.',
    'It records the stolen rod piece and dragon-supplied crystals, but not their present storage locations. Do not make the log disclose more.',
    'The footlocker is a trained mimic that attacks snoopers. The northern stairs reach U2.'
  ], [], [], [
    encounter('Teremini’s footlocker', 'Someone snoops around Teremini’s room.', [creature('Mimic', 1)], ['Use the published mimic block; the logbook is a separate clue.'], 'The log remains readable after the threat is resolved.')
  ]);
  scene('V32:', 'Connect the levels without inventing a new scene.', ['This stairwell links to V9 below.']);
  scene('V33:', 'Let tremorsense, not ordinary visual camouflage, reveal the ambush.', [
    'Two earth elementals are beneath the mud. They rise and attack when their tremorsense detects intruders.',
    'Mud is difficult terrain. The yard is also the keep’s rally point when an alarm is raised.'
  ], [], [], [
    encounter('Muster-yard elementals', 'Their tremorsense detects intruders.', [creature('Earth Elemental', 2)], ['Use the muddy terrain and the printed detection condition.'], 'Track any other defenders rallied here separately.')
  ]);
  scene('V34.', 'Present Akaazi’s workshop and its overhead mirror connection.', [
    'Akaazi is a neutral evil human necromancer wizard accompanied by one black rose bearer.',
    'Once aware of intruders, she orders the bearer to attack and fights to the death.',
    'Looking upward reveals the black mirror hanging in V36; this is a clue to a reachable component, not an extra mirror.'
  ], [], [], [
    encounter('Akaazi’s ritual chamber', 'Akaazi becomes aware of intruders.', [creature('Necromancer Wizard', 1, 'Akaazi: neutral evil human.'), creature('Black Rose Bearer', 1)], ['She commands the bearer and fights to the death for Soth.'], 'The V36 mirror remains a separate acquisition problem.')
  ]);
  scene('V35:', 'Keep the quiet temple’s routes and concealed reward available.', [
    'The north stairs descend 30 feet to V10; DC 13 Perception can reveal the secret western door to the courtyard.',
    'The altar’s hollow back shelf holds a Wand of Enemy Detection.'
  ]);
  scene('V36:', 'Make this black mirror riskier to obtain than the throne’s.', [
    'The mirror hangs over a 20-foot drop on three iron chains. DC 15 Sleight of Hand safely detaches it from one chain.',
    'Failure by 5 or more releases it to fall. Do not silently declare all chains detached after one successful check.',
    'V28 offers the other black mirror if this one is lost.'
  ]);
  scene('V37:', 'Treat the aviary as occupied but not automatically hostile.', [
    'Twenty ravens are caged here as messengers. No attack order or reinforcement effect is specified for their squawking.',
    'The eastern stairs rise to U3.'
  ], [], [], [
    encounter('Aviary, only if needed', 'Use individual tracking only if the party’s actions put the captive birds into an encounter; no automatic fight is specified.', [creature('Raven', 20, 'Caged messenger birds, not assigned hostile guards.')], ['Do not invent an alarm beyond the described noise.'], 'Continue toward U3 if the birds are left alone.')
  ]);
  scene('Upper-Level Features', 'Supply the written fallback if the party has missed the puzzle leads.', [
    'If the characters still do not know how to stop the ritual, the source allows one to realize that the answer concerns the moons and that V29’s orrery should be examined.',
    'Use that fallback instead of inventing a new NPC, clue, or required skill check.'
  ]);
  scene('Solid Moonlight', 'Apply the barriers consistently and retain the stated exceptions.', [
    'Nothing physical or teleporting can pass through solid moonlight; it also blocks ethereal travel, resists all damage, and cannot be dispelled with Dispel Magic.',
    'Sunburst suppresses affected solid moonlight for 10 minutes. The rod-powered ritual is unaffected by Antimagic Field.',
    'A creature outside its true form that starts a turn on solid moonlight makes DC 15 Constitution or is poisoned until its next turn.'
  ]);
  scene('U1:', 'Flag the white barrier’s touch trap before resolving repeated interaction.', ['Touching the barrier emits a flash in a 30-foot radius: DC 17 Constitution or blinded for 24 hours.', 'This is distinct from simply shining the correct colored mirror light onto the crystal.']);
  scene('U2:', 'Use the dead warden’s fate to reinforce the stakes.', ['One deathwolf made from a slain warden guards the red lunarium and attacks intruders relentlessly.'], [], [], [
    encounter('Red lunarium deathwolf', 'The deathwolf sees intruders.', [creature('Deathwolf', 1)], ['It attacks viciously and does not retreat.'], 'The crystal remains protected while Teremini concentrates.')
  ]);
  scene('U3:', 'Run the black lunarium’s two guards as separate individuals.', ['Two black rose bearers have orders to defend the room against intruders.'], [], [], [
    encounter('Black lunarium guards', 'Intruders enter the guarded lunarium.', [creature('Black Rose Bearer', 2)], ['Track each bearer independently.'], 'Guard defeat alone does not end the crystal barrier.')
  ]);
  scene('U4:', 'Keep each character’s position clear before the collapse.', ['The bridges are solid moonlight. Track who is standing on them and what escape or flight options they have before resolving ritual disruption.']);
  scene('U5:', 'Treat Teremini’s ritual state and combat state separately.', [
    'The fifth rod piece floats between Teremini’s hands while she performs the ritual.',
    'Once disrupted, she pockets the rod and attacks, fighting to the death. Recovering it is not automatic just because the barriers vanish.',
    'Use an archmage with Teremini’s stated lawful evil elf identity; do not invent an extra boss phase.'
  ], [], [], [
    encounter('Teremini Nightsedge', 'The ritual is disrupted; she pockets the rod and attacks.', [creature('Archmage', 1, 'Teremini: lawful evil elf; carries the fifth rod piece after disruption.')], ['Resolve the simultaneous collapse and Orinix’s arrival before assuming everyone remains on the disk.'], 'The party must actually recover the fifth rod piece.')
  ]);
  scene('Disrupting the Ritual', 'Make the solution, alternative, and ensuing danger explicit.', [
    'The color solution is red light on white, white light on black, and black light on red.',
    'Removing a lunar crystal from its pillar is also a disruption condition, but it still requires overcoming the stated protection; it is not a free reach-through.',
    'Resolve Moonlight Shifts immediately, then Orinix’s arrival. The chaos creates an opportunity to seize the rod while Teremini responds to the dragon.',
    'If the ritual is not thwarted, the source still directs a confrontation with Teremini elsewhere to recover the piece. Do not end the campaign for missing the puzzle.'
  ]);
  scene('Ritual Duration', 'Create urgency without adding a countdown the adventure does not give.', ['The completion time is deliberately unspecified. The party can retreat and take a long rest if truly necessary.', 'Do not invent a fixed round limit and present it as a rule from the book.']);
  scene('Moonlight Shifts', 'Resolve the disappearance of the arena, not just the protective bubbles.', [
    'The exterior crimson curtain, crystal barriers, bridges, and moondisk all disappear.',
    'Characters standing on those surfaces fall 100 feet to the courtyard. Check actual locations and abilities before resolving the fall.',
    'The old moonlight environment is gone; do not automatically carry its reduced-gravity protection into the aftermath.'
  ]);
  scene('Orinix Arrives', 'Let the dragon’s priority create an opportunity, not guaranteed safety.', [
    'Orinix emerges from the new portal where the disk was and attacks everyone in sight, prioritizing Teremini.',
    'This is an adult lunar dragon, not a red dragon or a homebrew equivalent.',
    'The party may exploit the fight to recover the rod and leave. The source does not require killing Orinix as the victory condition.'
  ], [], [], [
    encounter('Orinix’s arrival', 'Disrupting the ritual opens the portal and brings the dragon into the courtyard battle.', [creature('Adult Lunar Dragon', 1, 'Orinix attacks everyone, foremost Teremini.')], ['Retain Teremini’s existing tracked individual if she is still present; do not add a fresh copy.'], 'The chapter objective is the fifth rod piece, not necessarily the dragon’s death.')
  ]);
  scene('Next Steps', 'Close the chapter at the correct return doorway.', [
    'Once the party has the fifth piece, they can return to Sigil through the doorway in the living tree where they first arrived.',
    'Apply the chapter’s advancement to level 16 after retrieving the fifth piece.',
    'Use the next applicable Sanctum visit to debrief what actually happened and orient the next rod search. Do not assume Valendar, Riffel, or Teremini’s fate.'
  ]);

  return {
    file: document.filename,
    summary: 'Follow an imprecise rod signal from a dying tree to a rescue in Bittergrass Fen, then infiltrate Three Moons Vault. Restore Valendar, solve the moonlight-mirror arrangement, disrupt Teremini’s ritual, survive the collapsing arena and Orinix’s arrival, and recover the fifth rod piece.',
    startHere: [
      'At the chapter’s start the party should be level 15 and have the fourth rod piece. Do not reset an already ongoing table to the beginning.',
      'Choose the actual current scene. The five operational stages are the peylon tree, fen rescue, vault infiltration and Valendar, the mirror/crystal puzzle, then rod recovery and return.',
      'Keep four facts beside the map: Valendar reverts at 10 HP; red goes to white, white to black, black to red; the ritual has no fixed printed deadline; the bridges and disk vanish when it is disrupted.',
      'The full source text remains alongside these GM cards. Missing core-book statblocks remain flagged rather than fabricated.'
    ],
    scenes: [...scenes.values()]
  };
}
