function ownPassage(section) {
  const lines = section.markdown.split('\n');
  const nextHeading = lines.findIndex((line, index) => index > 0 && /^#{1,6}\s/.test(line));
  return (nextHeading < 0 ? lines : lines.slice(0, nextHeading)).join('\n');
}

function preparationTips(text) {
  const tips = ['Separate player-visible description from GM-only information. Use the complete passage for exact checks, timing, and consequences.'];
  if (/\b(trap|trapped|trigger)\b/i.test(text)) tips.push('Before resolving movement or interaction, identify the stated trigger and its discovery/disarming conditions. Do not add an automatic trigger or a free clue.');
  if (/\b(secret|conceal|hidden)\b/i.test(text)) tips.push('Keep concealed information behind the discovery conditions in the source. Record only what the characters actually learn.');
  if (/\b(persuasion|deception|intimidation|bargain|negotiate|friendly)\b/i.test(text)) tips.push('Identify what this NPC wants and what they can offer from the passage. Let the players state their approach before deciding whether a check is called for.');
  if (/\b(attack|combat|hostile|fight|initiative)\b/i.test(text)) tips.push('Confirm the trigger for hostility, which creatures are present, and any noncombat resolution before starting initiative. Track individuals rather than pooling their hit points.');
  if (/\b(ritual|round|minute|hour)\b/i.test(text)) tips.push('Put any stated timing or changing environmental effect beside your encounter notes. Advance it only when the source says it advances.');
  if (/\b(door|locked|key)\b/i.test(text)) tips.push('Check the stated access conditions and alternate routes before asking for a roll. Do not treat an unlocked route as an obstacle.');
  if (/\b(treasure|reward|rod piece)\b/i.test(text)) tips.push('Distinguish what is available from what the party actually finds, receives, or takes. Confirm the source conditions before granting the reward.');
  if (/\b(Sanctum|Alustriel|Tasha|Mordenkainen)\b/.test(text)) tips.push('Consult the Sanctum visit appropriate to the current plot stage. Future revelations are GM knowledge, not automatically NPC or character knowledge.');
  return tips;
}

function mentionedBlocks(text, statblocks) {
  const plain = text.replace(/\*/g, '').toLowerCase();
  return statblocks.filter(block => {
    const name = block.name.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`\\b${name}(?:s|es)?\\b`).test(plain);
  });
}

export function buildPreparationGuides(documents, statblocks) {
  const gaps = [];
  const chapters = documents.filter(document => /^\d{2}-/.test(document.filename)).map(document => {
    const seen = new Set();
    const sections = document.sections.filter(section => {
      if (seen.has(section.heading)) return false;
      seen.add(section.heading);
      return true;
    });
    const scenes = sections.map((section, index) => {
      const text = ownPassage(section);
      const blocks = mentionedBlocks(text, statblocks);
      const possibleCombat = /\b(attack|combat|fight|hostile|guard|defend|monster|creature)\b/i.test(text);
      if (/\bMonster Manual\b|\bPlayer.s Handbook\b|\bDungeon Master.s Guide\b/.test(text)) {
        gaps.push({
          file: document.filename,
          heading: section.heading,
          detail: 'This passage references a core rulebook. Verify the named statblocks, spells, or item rules in the complete source passage; those external descriptions are not supplied merely by including this chapter.'
        });
      }
      return {
        heading: section.heading,
        purpose: `Prepare ${section.heading}.`,
        tips: preparationTips(text),
        watchFor: ['This is a source-cue preparation checklist, not a substitute for the adventure text or a record of your party’s actions.'],
        next: sections[index + 1] ? [`Next indexed passage: ${sections[index + 1].heading}. This is reading order, not a mandatory route for the party.`] : ['Check the chapter conclusion for the stated transition; record the actual outcome separately.'],
        encounters: possibleCombat && blocks.length ? [{
          name: `Referenced creatures: ${section.heading}`,
          trigger: 'Use only if the conditions in the accompanying source passage result in an encounter. A creature mention does not establish hostility or its presence in every branch.',
          creatures: blocks.map(block => ({
            name: block.name,
            count: null,
            note: 'Quantity is deliberately not inferred from a name match. Check the source for how many are actually present, named variants, reinforcements, and exceptions before creating individuals.'
          })),
          tactics: ['Use the tactics, motives, terrain, and escape conditions actually stated in the passage. No additional tactics are assumed by this checklist.'],
          resolution: 'Consult the passage for negotiation, retreat, defeat, rewards, and continuation conditions. Record the result your table reaches.'
        }] : []
      };
    });
    return {
      file: document.filename,
      summary: `Complete source and section-by-section preparation for ${document.title}. The checklists flag source cues without assuming the party’s decisions or replacing the printed mechanics.`,
      startHere: [
        'Read the chapter opening and its Running This Chapter section, where present, before selecting a keyed area.',
        'Choose the party’s actual starting passage. Chapter order alone does not establish completed objectives, collected items, or learned secrets.',
        'Review the applicable encounter triggers, external references, and the maps already included in the image library.'
      ],
      scenes
    };
  });
  return { chapters, sanctum: [], gaps };
}
