import { readFileSync, writeFileSync } from 'node:fs';
import { marked } from 'marked';
import { load } from 'cheerio';
import '../../assets/js/daggerheart-catalog.js';

const plain = text => load(marked.parseInline(text)).text().trim();
const tokens = marked.lexer(readFileSync(new URL('../.private/Daggerheart SRD 2.0.md', import.meta.url), 'utf8'));
const classes = globalThis.DaggerheartCatalog.classes.map(entry => ({ name: entry.name, features: [], supplements: [], subclasses: entry.subclasses.map(name => ({ name, stages: [] })) }));
const cards = [];
let page = 0;
let character;
let subclass;
let section;
let card;
let domain;
let inClasses = false;
let inCards = false;
let supplement = false;
const blocks = token => token.type === 'paragraph' ? [plain(token.text)] : token.type === 'list' ? token.items.map(item => plain(item.text)) : token.type === 'table' ? [token.header.map(cell => plain(cell.text)).join(' / '), ...token.rows.map(row => row.map(cell => plain(cell.text)).join(' / '))] : [];
for (const token of tokens) {
  const marker = token.type === 'html' && token.text.match(/<!-- page (\d+) -->/);
  if (marker) page = Number(marker[1]);
  if (token.type === 'heading') {
    const heading = plain(token.text);
    if (heading === 'Classes' && token.depth === 2) inClasses = true;
    if (heading === 'Ancestries' && token.depth === 2) { inClasses = false; section = null; }
    if (heading === 'Domain Card Reference') inCards = true;
    else if (inCards && token.depth <= 2) inCards = false;
    if (inClasses) {
      const nextClass = classes.find(entry => entry.name === heading);
      const nextSubclass = character?.subclasses.find(entry => entry.name === heading);
      if (nextClass) { character = nextClass; subclass = null; section = null; supplement = false; }
      else if (nextSubclass) { subclass = nextSubclass; subclass.page = page; section = null; }
      else if (character && (supplement || ['Martial Stances', 'Beastform Options', 'Ranger Companion'].includes(heading))) {
        supplement = true;
        section = { name: heading, page, paragraphs: [] };
        character.supplements.push(section);
      }
      else if (character && /^(Class Features?|.*Hope Feature)$/.test(heading)) {
        section = { name: heading, page, paragraphs: [] };
        character.features.push(section);
      } else if (subclass && /^(Spellcast Trait|Foundation Features?|Specialization Features?|Mastery Features?)$/.test(heading)) {
        section = { name: heading, page, paragraphs: [] };
        subclass.stages.push(section);
      } else section = null;
    }
    if (inCards && token.depth === 3) { domain = heading.replace(/ Domain$/, ''); card = null; }
    if (inCards && token.depth === 4) {
      if (card && !card.level && !card.paragraphs.length) card.name += ` ${heading}`;
      else { card = { name: heading, domain, page, paragraphs: [] }; cards.push(card); }
    }
  }
  if (inClasses && section) section.paragraphs.push(...blocks(token));
  if (inCards && card) {
    for (const text of blocks(token)) {
      const level = text.match(/^Level (\d+) (\w+) (.+)$/);
      const recall = text.match(/^Recall Cost:\s*(\d+)$/);
      if (level) { card.level = Number(level[1]); card.type = level[3]; }
      else if (recall) card.recall = Number(recall[1]);
      else card.paragraphs.push(text);
    }
  }
}
for (const character of classes) {
  if (character.features.length < 2) throw new Error(`Missing class features: ${character.name}`);
  for (const subclass of character.subclasses) {
    for (const stage of ['Foundation', 'Specialization', 'Mastery']) {
      if (!subclass.stages.some(entry => entry.name.startsWith(stage) && entry.paragraphs.length)) throw new Error(`Missing ${stage}: ${subclass.name}`);
    }
  }
}
const incomplete = cards.filter(card => !card.level || !Number.isInteger(card.recall) || !card.paragraphs.length);
if (!cards.length || incomplete.length) throw new Error(`Incomplete domain cards: ${JSON.stringify(incomplete)}`);
for (const domain of globalThis.DaggerheartCatalog.domains) {
  for (let level = 1; level <= 10; level++) {
    if (!cards.some(card => card.domain === domain.name && card.level === level)) throw new Error(`Missing ${domain.name} level ${level}`);
  }
}
writeFileSync(new URL('../../assets/js/daggerheart-progression.js', import.meta.url), `globalThis.DaggerheartProgression = ${JSON.stringify({ classes, cards }, null, 2)};\n`);
console.log(`Built ${classes.length} classes, ${classes.flatMap(entry => entry.subclasses).length} subclasses, and ${cards.length} domain cards across levels 1-10.`);