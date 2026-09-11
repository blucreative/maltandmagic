import { catalog } from './advancement-engine.mjs';

const summaries = {
  Light: 'One Large or smaller object sheds Bright Light for 20 feet and Dim Light for 20 more. Casting again ends the previous light.',
  'Mage Hand': 'Create a spectral hand to manipulate objects and carry up to 10 pounds. It cannot attack or activate magic items.',
  Mending: 'Repair one break or tear no larger than 1 foot in an object. Repairs physical damage, not lost magic.',
  Prestidigitation: 'Create a minor sensory effect, light or snuff a small flame, clean or soil an object, or make a temporary mark or trinket.',
  Grease: 'Cover a 10-foot square in slippery grease and Difficult Terrain. Creatures there make a Dexterity save or fall Prone; entering or ending a turn there also triggers the save.',
  'False Life': 'Gain 2d4 + 4 Temporary Hit Points.',
  'Fog Cloud': 'Create a 20-foot-radius Sphere of fog that heavily obscures the area, blocking sight through it. Strong wind disperses the fog.',
  Shield: 'Gain +5 AC until the start of your next turn, including against the triggering attack, and take no damage from Magic Missile.',
  Web: 'Fill a 20-foot Cube with sticky webs: Difficult Terrain and Lightly Obscured. A creature entering on a turn or starting its turn there makes a Dexterity save or becomes Restrained until it escapes or leaves the webs.',
  'Misty Step': 'Teleport up to 30 feet to an unoccupied space you can see.'
};

const sentences = new Intl.Segmenter('en', { granularity: 'sentence' });
function excerpt(text) {
  const parts = [...sentences.segment(text)].map(part => part.segment.trim());
  let result = parts.slice(0, 2).join(' ');
  if (result.length > 420) result = parts[0];
  if (result.length > 420) result = `${result.slice(0, 417).replace(/\s+\S*$/, '')}...`;
  return result;
}

export function spellPreview(name) {
  const rules = catalog.spellRules[name];
  if (!rules) return null;
  const paragraphs = rules.split(/\n\s*\n/).map(text => text.trim()).filter(Boolean);
  const metadataStart = paragraphs.findIndex(text => text.startsWith('Casting Time:'));
  const durationIndex = paragraphs.findIndex((text, index) => index >= metadataStart && text.includes('Duration:'));
  const metadata = paragraphs.slice(metadataStart, durationIndex + 1).join(' ');
  const fields = metadata.match(/^Casting Time:\s*([\s\S]*?)\s+Range:\s*([\s\S]*?)\s+Components?:\s*([\s\S]*?)\s+Duration:\s*([\s\S]*)$/);
  const body = paragraphs.slice(durationIndex + 1);
  const casting = fields?.[1] || '';
  const reaction = casting.startsWith('Reaction,') ? casting.slice('Reaction, '.length) : '';
  return {
    casting: reaction ? 'Reaction' : casting,
    trigger: reaction,
    range: fields?.[2] || '',
    components: fields?.[3] || '',
    duration: fields?.[4] || '',
    summary: summaries[name] || excerpt(body[0] || ''),
    scaling: body.find(text => /^(Using a Higher-Level Spell Slot|Cantrip Upgrade)\./.test(text)) || '',
    source: 'SRD 5.2.1'
  };
}

export function renderSpellPreview(article, name) {
  if (article.querySelector('.spell-quick-reference')) return;
  const preview = spellPreview(name);
  if (!preview) return;
  const node = (tag, text, className) => {
    const result = document.createElement(tag);
    if (text) result.textContent = text;
    if (className) result.className = className;
    return result;
  };
  article.querySelectorAll(':scope > p,:scope > .meta:not(.spell-origin)').forEach(child => child.remove());
  const reference = node('div', '', 'spell-quick-reference');
  reference.append(node('p', preview.summary, 'spell-effect'));
  const facts = node('dl', '', 'spell-facts');
  for (const [label, value] of [['Casting', preview.casting], ['Range', preview.range], ['Duration', preview.duration]]) {
    const fact = node('div'); fact.append(node('dt', label), node('dd', value)); facts.append(fact);
  }
  reference.append(facts);
  if (preview.trigger) reference.append(node('p', `Trigger: ${preview.trigger}.`, 'spell-trigger'));
  if (preview.scaling) reference.append(node('p', preview.scaling, 'spell-scaling'));
  const rules = node('details', '', 'spell-full-rules');
  rules.append(node('summary', 'Full Rules'), node('p', catalog.spellRules[name], 'advancement-detail'), node('small', preview.source));
  article.append(reference, rules);
}