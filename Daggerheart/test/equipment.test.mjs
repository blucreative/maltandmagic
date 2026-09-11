import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { marked } from 'marked';
import { load } from 'cheerio';
import '../../assets/js/daggerheart-equipment.js';

const entries = globalThis.DaggerheartEquipment;
const srd = new URL('../.private/Daggerheart SRD 2.0.md', import.meta.url);
const expansion = new URL('../.private/Daggerheart Hope and Fear.md', import.meta.url);
const core = new URL('../.private/Daggerheart Core Rulebook.md', import.meta.url);

test('equipment covers every category and tier with valid, unique entries', () => {
  const counts = { 'Primary weapon': 239, 'Secondary weapon': 73, 'Combat wheelchair': 12, Armor: 69, Item: 120, Consumable: 120 };
  assert.equal(entries.length, 633);
  assert.equal(new Set(entries.map(entry => `${entry.category}:${entry.tier}:${entry.name}`)).size, entries.length);
  for (const [category, count] of Object.entries(counts)) {
    const group = entries.filter(entry => entry.category === category);
    assert.equal(group.length, count, category);
    assert.deepEqual([...new Set(group.map(entry => entry.tier))].sort(), ['Item', 'Consumable'].includes(category) ? [null] : [1, 2, 3, 4]);
  }
  for (const entry of entries) {
    assert.ok(entry.name && entry.feature && (entry.rulesSource === 'SRD 2.0' ? entry.page >= 56 && entry.page <= 84 : entry.page === 120), entry.name);
    assert.ok(['Core', 'Hope & Fear'].includes(entry.source), entry.name);
    if (entry.category === 'Armor') assert.ok(entry.major > 0 && entry.severe > entry.major && entry.score > 0, entry.name);
    if (entry.damage) assert.ok(entry.trait && entry.range && entry.burden, entry.name);
  }
});

test('every equipment row matches the SRD including descriptions and stats', { skip: !existsSync(srd) }, () => {
  const document = load(marked.parse(readFileSync(srd, 'utf8')));
  const start = document('h2').filter((index, element) => document(element).text() === 'Equipment').first();
  const rows = start.nextUntil('h2:contains("Gold")').find('tr').toArray()
    .map(row => document(row).find('td').toArray().map(cell => document(cell).text().trim()))
    .filter(cells => cells.length >= 3);
  const srdEntries = entries.filter(entry => entry.rulesSource === 'SRD 2.0');
  assert.equal(rows.length, srdEntries.length);
  for (const [index, entry] of srdEntries.entries()) {
    const cells = rows[index];
    if (entry.roll) assert.deepEqual(cells, [String(entry.roll).padStart(cells[0].length, '0'), entry.name, entry.feature], entry.name);
    else if (entry.category === 'Armor') assert.deepEqual(cells, [entry.name, `${entry.major} / ${entry.severe}`, String(entry.score), entry.feature], entry.name);
    else assert.deepEqual(cells, [entry.name, ...(entry.category === 'Combat wheelchair' ? [String(entry.tier)] : []), entry.trait, entry.range, entry.damage, entry.burden, entry.feature], entry.name);
  }
});

test('Core equipment names including fragmented consumables remain available', { skip: !existsSync(core) }, () => {
  const document = load(marked.parse(readFileSync(core, 'utf8')));
  const start = document('h2').filter((index, element) => document(element).text() === 'Equipment').first();
  const section = start.nextUntil('h1');
  const names = section.find('tr').toArray().map(row => document(row).find('td').toArray().map(cell => document(cell).text().trim())).filter(cells => cells.length >= 3).map(cells => /^\d+$/.test(cells[0]) ? cells[1] : cells[0]);
  for (const name of names) assert.ok(entries.some(entry => entry.name === name), name);
  for (const name of ['Potion of Stability', 'Channelstone', 'Feast of Xuria']) assert.ok(entries.some(entry => entry.name === name), name);
  const legacy = entries.filter(entry => entry.rulesSource === 'Core Rulebook');
  assert.equal(legacy.length, 9);
  for (const entry of legacy) {
    const row = section.find('tr').toArray().map(element => document(element).find('td').toArray().map(cell => document(cell).text().trim())).find(cells => cells[0] === entry.name);
    assert.deepEqual(row, [entry.name, entry.trait, entry.range, entry.damage, entry.burden, entry.feature], entry.name);
  }
});

test('all Hope and Fear equipment and loot are included and labeled', { skip: !existsSync(expansion) }, () => {
  const document = load(marked.parse(readFileSync(expansion, 'utf8')));
  const chapter = document('h1').filter((index, element) => document(element).text() === 'Chapter Two: Equipment & Loot');
  const names = chapter.nextUntil('h1').find('tr').toArray().map(row => document(row).find('td').toArray().map(cell => document(cell).text().trim())).filter(cells => cells.length).map(cells => /^\d+$/.test(cells[0]) ? cells[1] : cells[0]);
  assert.equal(names.length, 275);
  assert.equal(entries.filter(entry => entry.source === 'Hope & Fear').length, names.length);
  for (const name of names) assert.ok(entries.some(entry => entry.name === name && entry.source === 'Hope & Fear' && entry.bookPage >= 44 && entry.bookPage <= 60), name);
});