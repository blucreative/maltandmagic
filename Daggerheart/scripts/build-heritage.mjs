import { readFileSync, writeFileSync } from 'node:fs';
import { marked } from 'marked';
import { load } from 'cheerio';
import '../../assets/js/daggerheart-catalog.js';

const plain = text => load(marked.parseInline(text)).text().trim();
const summaries = {
  Aetheris: 'Angelic descendants with wings, sacred markings, and a radiant aura.',
  Clank: 'Sentient constructed beings whose bodies can be repaired and customized.',
  Drakona: 'Scaled, wingless dragonlike people with an inherited elemental breath.',
  Dwarf: 'Broad, resilient humanoids known for dense muscle and thick hair.',
  Earthkin: 'Earth-elemental descendants whose bodies combine flesh with stone, soil, or crystal.',
  Elf: 'Long-lived, keen-sensed people with pointed ears and a restorative celestial trance.',
  Emberkin: 'Fire-elemental descendants whose appearance expresses living flame and heat.',
  Faerie: 'Winged people with varied insectlike features and a transformative life cycle.',
  Faun: 'Goatlike people with horns, cloven hooves, and powerful leaping legs.',
  Firbolg: 'Strong bovine people with varied horns, fur, and broad features.',
  Fungril: 'Fungal people whose forms and connections reflect many kinds of mushrooms.',
  Galapa: 'Turtlelike people protected by a natural shell.',
  Giant: 'Large humanoids with great physical reach and endurance.',
  Gnome: 'Small people with an affinity for illusion and a distinctive relationship with danger.',
  Goblin: 'Small, adaptable people with keen senses and a talent for avoiding danger.',
  Halfling: 'Small humanoids whose luck and attentiveness support their companions.',
  Human: 'Adaptable humanoids with varied appearances and a capacity for perseverance.',
  Infernis: 'People with infernal ancestry, often expressed through horns and unusual features.',
  Katari: 'Feline people with agile movement, retractable claws, and varied coats.',
  Orc: 'Sturdy people recognizable by their tusks and powerful builds.',
  Ribbet: 'Amphibious, frog-like people with long grasping tongues.',
  Simiah: 'Primate-like people with dexterous limbs and a natural talent for climbing.',
  Skykin: 'Air-elemental descendants whose bodies express wind, cloud, and changing sky.',
  Tidekin: 'Water-elemental descendants with fluid features and an affinity for aquatic life.',
  Duneborne: 'A desert upbringing shaped by scarce resources, cooperation, and adaptation.',
  Freeborne: 'A community united by liberation from oppression and the preservation of its culture.',
  Frostborne: 'A snow-and-ice upbringing shaped by resourcefulness and collective survival.',
  Hearthborne: 'A rural or village upbringing built around close neighbors and everyday crafts.',
  Highborne: 'An upbringing among wealth, prestige, titles, and influential social networks.',
  Loreborne: 'A community that prizes scholarship, history, knowledge, or political expertise.',
  Orderborne: 'A collective organized around discipline, faith, shared principles, or a common purpose.',
  Reborne: 'Separation from an earlier community, with room to rediscover belonging or build new bonds.',
  Ridgeborne: 'A mountain upbringing shaped by cliffs, difficult terrain, and resilient settlements.',
  Seaborne: 'A life on or beside the water, shaped by tides, crews, and maritime skills.',
  Slyborne: 'An upbringing among people who operate outside the law and live by their own codes.',
  Underborne: 'A subterranean upbringing shaped by darkness, enclosed spaces, and hidden routes.',
  Warborne: 'A community whose people and everyday survival have been shaped by war.',
  Wanderborne: 'A nomadic upbringing sustained by travel, knowledge, and strong social bonds.',
  Wildborne: 'A woodland community built around living with and preserving its environment.',
  Demigod: 'Mortal life touched by divine power, with gifts accompanied by demanding expectations.',
  Ghost: 'A spirit bound to the mortal world by an unfinished purpose.',
  Reanimated: 'An undead body returned to life and sustained through ongoing physical repair.',
  Shapeshifter: 'A person able to adopt another ancestry, but not all of its features at once.',
  Vampire: 'An altered existence with supernatural strengths and a need to feed.',
  Werewolf: 'A person whose bestial transformation brings both power and a loss of control.'
};
const root = new URL('../.private/', import.meta.url);
const srd = readFileSync(new URL('Daggerheart SRD 2.0.md', root), 'utf8');
const expansionOptions = new Set(['Aetheris', 'Earthkin', 'Emberkin', 'Gnome', 'Skykin', 'Tidekin', 'Duneborne', 'Freeborne', 'Frostborne', 'Hearthborne', 'Reborne', 'Warborne', 'Demigod', 'Ghost', 'Reanimated', 'Shapeshifter', 'Vampire', 'Werewolf']);
const catalog = globalThis.DaggerheartCatalog;
const types = new Map([...catalog.ancestry.map(name => [name, 'Ancestry']), ...catalog.communities.map(name => [name, 'Community']), ...catalog.transformations.map(name => [name, 'Transformation'])]);
const entries = [];
let page = 0;
let active = false;
let entry;
let features = false;
for (const token of marked.lexer(srd)) {
  const marker = token.type === 'html' && token.text.match(/<!-- page (\d+) -->/);
  if (marker) page = Number(marker[1]);
  if (token.type === 'heading') {
    const heading = plain(token.text);
    if (heading === 'Ancestries' && token.depth === 2) active = true;
    if (active && token.depth <= 2 && !['Ancestries', 'Communities', 'Transformations'].includes(heading)) break;
    if (!active) continue;
    if (token.depth <= 3) {
      entry = types.has(heading) ? { name: heading, category: types.get(heading), source: expansionOptions.has(heading) ? 'Hope & Fear' : 'Core', page, summary: summaries[heading], features: [] } : null;
      if (entry) entries.push(entry);
      features = false;
    } else features = /Features?$/.test(heading);
  }
  if (entry && features) {
    if (token.type === 'paragraph') entry.features.push(plain(token.text));
    if (token.type === 'list') entry.features.push(...token.items.map(item => plain(item.text)));
    if (['paragraph', 'list'].includes(token.type)) entry.endPage = page;
  }
}
if (entries.length !== 45 || entries.some(entry => !entry.summary || !entry.features.length)) throw new Error('Heritage coverage is incomplete.');
writeFileSync(new URL('../../assets/js/daggerheart-heritage.js', import.meta.url), `globalThis.DaggerheartHeritage = ${JSON.stringify(entries, null, 2)};\n`);
console.log(`Built ${entries.length} heritage options with source features.`);