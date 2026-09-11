import { readFile, writeFile } from 'node:fs/promises';
import { marked } from 'marked';
import { load } from 'cheerio';

const root = new URL('../../../', import.meta.url);
const source = 'https://raw.githubusercontent.com/downfallx/dnd-5e-srd-markdown/refs/heads/master/';
const response = await fetch(`${source}classes.md`);
if (!response.ok) throw new Error('SRD class download failed');
const markdown = await response.text();
const document = load(marked.parse(markdown));
const clean = text => text.replace(/\s+/g, ' ').trim();
const id = text => clean(text).toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const cells = (page, row, selector = 'td') => page(row).find(selector).map((index, cell) => clean(page(cell).text())).get();
const catalog = { version: '2024-campaign-1', source, classes: {} };
let currentClass;
let subsection = '';
let currentSubclass;
let spellLevel = null;
document('body').children().each((index, element) => {
  const node = document(element);
  const name = clean(node.text());
  if (element.tagName === 'h2') {
    currentClass = catalog.classes[id(name)] = { name, levels: [], subclasses: [], spells: [], features: [], options: [] };
    return;
  }
  if (!currentClass) return;
  if (element.tagName === 'h3') {
    subsection = name;
    currentSubclass = null;
    if (name.includes('Subclass:')) {
      const subclassName = name.split('Subclass:')[1].trim();
      currentSubclass = { id: id(subclassName), name: subclassName, source: 'SRD 5.2.1', features: [], spells: [] };
      currentClass.subclasses.push(currentSubclass);
    }
  }
  if (element.tagName === 'h4') {
    const levelMatch = name.match(/^Level (\d+): (.+)/);
    if (levelMatch) {
      const feature = { level: Number(levelMatch[1]), name: levelMatch[2], source: 'SRD 5.2.1' };
      const paragraphs = [];
      for (let next = node.next(); next.length && !/^h[234]$/.test(next[0].tagName); next = next.next()) {
        if (next[0].tagName !== 'table') paragraphs.push(clean(next.text()));
      }
      feature.text = paragraphs.filter(Boolean).join('\n\n');
      (currentSubclass || currentClass).features.push(feature);
    } else if (subsection.includes('Options')) {
      const paragraphs = [];
      for (let next = node.next(); next.length && !/^h[234]$/.test(next[0].tagName); next = next.next()) paragraphs.push(clean(next.text()));
      currentClass.options.push({ name, text: paragraphs.join('\n\n'), source: 'SRD 5.2.1' });
    }
    if (subsection.includes('Spell List')) spellLevel = Number(name.match(/Level (\d)/)?.[1]);
  }
  if (element.tagName !== 'table') return;
  const headers = cells(document, node.find('tr').first(), 'th');
  const rows = node.find('tbody tr').toArray().map(row => cells(document, row));
  if (headers.includes('Class Features')) {
    const columns = headers.filter(header => !header.includes('Spell Slots per Spell'));
    if (headers.some(header => header.includes('Spell Slots per Spell'))) {
      columns.push(...cells(document, node.find('thead tr').last(), 'th').filter(Boolean));
    }
    currentClass.levels = rows.map(row => Object.fromEntries(columns.map((header, column) => [header, row[column]])));
  } else if (subsection.includes('Spell List') && headers[0] === 'Spell') {
    currentClass.spells.push(...rows.map(row => ({ name: row[0], level: spellLevel, school: row[1], special: row[2] })));
  } else if (currentSubclass && headers.some(header => /Spells/.test(header))) {
    currentSubclass.spells.push(...rows.filter(row => /^\d+$/.test(row[0])).map(row => ({ level: Number(row[0]), names: row[1].split(',').map(clean) })));
  }
});

for (const classId of ['barbarian', 'fighter', 'paladin', 'ranger', 'rogue', 'sorcerer']) {
  const privateText = await readFile(new URL(`DnD/.private/${classId}-class.md`, root), 'utf8');
  const page = load(marked.parse(privateText));
  let inSubclasses = false;
  let subclass;
  page('body').children().each((index, element) => {
    const node = page(element);
    const name = clean(node.text());
    if (element.tagName === 'h1' && name.endsWith('Subclasses')) inSubclasses = true;
    if (!inSubclasses) return;
    if (element.tagName === 'h2') {
      subclass = { id: id(name), name, source: 'Campaign supplement (non-SRD)', features: [], spells: [] };
      if (!catalog.classes[classId].subclasses.some(existing => existing.id === subclass.id)) catalog.classes[classId].subclasses.push(subclass);
    }
    if (!subclass) return;
    if (element.tagName === 'h3') {
      const level = name.match(/^Level (\d+): (.+)/);
      if (level) subclass.features.push({ level: Number(level[1]), name: level[2], source: subclass.source });
    }
    if (element.tagName === 'table') {
      const headers = cells(page, node.find('tr').first(), 'th').map(header => header === 'Spells Prepared' ? 'Prepared Spells' : header);
      if (headers.includes('Prepared Spells')) {
        subclass.levels = node.find('tbody tr').toArray().map(row => Object.fromEntries(headers.map((header, column) => [header, cells(page, row)[column]])));
      }
      if (!headers.includes('Prepared Spells') && headers.some(header => /Spells/.test(header)) && headers[0]?.includes('Level')) {
        subclass.spells.push(...node.find('tbody tr').toArray().map(row => cells(page, row)).filter(row => /^\d+$/.test(row[0])).map(row => ({ level: Number(row[0]), names: row[1].split(',').map(clean) })));
      }
    }
  });
}
for (const [classId, filename, name] of [['rogue', 'swashbuckler-subclass.md', 'Swashbuckler'], ['fighter', 'arcane-archer-reference.md', 'Arcane Archer']]) {
  const page = load(marked.parse(await readFile(new URL(`DnD/.private/${filename}`, root), 'utf8')));
  const features = page('h2,h3').toArray().map(element => clean(page(element).text())).map(text => text.match(/Level (\d+): (.+)/)).filter(Boolean).map(match => ({ level: Number(match[1]), name: match[2], source: 'Campaign supplement (non-SRD)' }));
  const status = name === 'Arcane Archer' ? 'Playtest (UA 2025)' : 'Campaign supplement (non-SRD)';
  if (name === 'Arcane Archer') features.push(...[[3, 'Arcane Archer Lore'], [3, 'Arcane Shot'], [7, 'Curving Shot'], [7, 'Ever Ready Shot'], [10, 'Improved Shots'], [15, 'Powerful Shots'], [18, 'Masterful Shots']].map(([level, name]) => ({ level, name, source: status })));
  catalog.classes[classId].subclasses.push({ id: id(name), name, source: status, features, spells: [] });
}
if (Object.keys(catalog.classes).length !== 12) throw new Error('Expected twelve core classes');
const spellResponse = await fetch(`${source}spells.md`);
if (!spellResponse.ok) throw new Error('SRD spell download failed');
const spellPage = load(marked.parse(await spellResponse.text()));
catalog.spellRules = {};
const isSpell = node => node[0]?.tagName === 'h4' && /Level [1-9]|Cantrip/.test(node.next().text());
spellPage('h4').each((index, heading) => {
  const node = spellPage(heading);
  if (!isSpell(node)) return;
  const paragraphs = [];
  for (let next = node.next(); next.length && !isSpell(next); next = next.next()) {
    if (next[0].tagName === 'table') {
      paragraphs.push(next.find('tr').toArray().map(row => cells(spellPage, row, 'th,td').join(' | ')).join('\n'));
    } else paragraphs.push(clean(next.text()));
  }
  catalog.spellRules[clean(node.text())] = paragraphs.filter(Boolean).join('\n\n');
});
if (!catalog.spellRules['Misty Step']?.includes('30 feet')) throw new Error('Spell rules extraction failed');
for (const entry of Object.values(catalog.classes)) {
  if (entry.levels.length !== 20) throw new Error(`Incomplete progression: ${entry.name}`);
  if (entry.spells.some(spell => !Number.isInteger(spell.level))) throw new Error(`Invalid spell list: ${entry.name}`);
}
await writeFile(new URL('assets/js/advancement-catalog-v1.mjs', root), `export default ${JSON.stringify(catalog, null, 2)};\n`);
console.log(`Compiled ${Object.keys(catalog.classes).length} classes, ${Object.values(catalog.classes).reduce((sum, entry) => sum + entry.subclasses.length, 0)} subclasses.`);