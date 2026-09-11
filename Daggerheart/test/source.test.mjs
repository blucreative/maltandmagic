import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { marked } from 'marked';
import { load } from 'cheerio';
import '../../assets/js/daggerheart-catalog.js';

const path = new URL('../.private/Daggerheart SRD 2.0.md', import.meta.url);
const catalog = globalThis.DaggerheartCatalog;

test('public class stats, domain pairs, and subclass names match the supplied SRD', { skip: !existsSync(path) }, () => {
  const document = load(marked.parse(readFileSync(path, 'utf8')));
  for (const entry of catalog.classes) {
    const heading = document('h3').filter((index, element) => document(element).text() === entry.name).first();
    assert.equal(heading.length, 1, entry.name);
    const paragraphs = heading.nextUntil('h3', 'p').toArray().map(element => document(element).text());
    const stat = label => paragraphs.find(text => text.startsWith(label))?.split('\u2013').at(-1).trim();
    assert.equal(Number(stat('STARTING EVASION')), entry.evasion, `${entry.name} Evasion`);
    assert.equal(Number(stat('STARTING HIT POINTS')), entry.hp, `${entry.name} HP`);
    assert.deepEqual(stat('DOMAINS').split(' & ').sort(), [...entry.domains].sort(), `${entry.name} domains`);
    for (const name of entry.subclasses) {
      assert.ok(document('h3,h4').toArray().some(element => document(element).text() === name), `${entry.name}: ${name}`);
    }
  }
  for (const name of [...catalog.ancestry, ...catalog.communities, ...catalog.transformations]) {
    assert.ok(document('h3').toArray().some(element => document(element).text() === name), name);
  }
});

test('public armor thresholds and scores match the SRD Tier 1 table', { skip: !existsSync(path) }, () => {
  const document = load(marked.parse(readFileSync(path, 'utf8')));
  const rows = document('tr').toArray().map(row => document(row).find('td').toArray().map(cell => document(cell).text().trim()));
  for (const armor of catalog.armor) {
    const row = rows.find(cells => cells[0] === armor.name);
    assert.ok(row, armor.name);
    assert.deepEqual(row[1].split(' / ').map(Number), [armor.major, armor.severe], armor.name);
    assert.equal(Number(row[2]), armor.score, armor.name);
  }
});

test('public reference shells use available shared assets and no private paths', () => {
  const root = new URL('../../', import.meta.url);
  for (const name of ['index', 'classes', 'domains', 'campaign-frames', 'void-options', 'character-creation', 'equipment', 'character-sheet']) {
    const file = new URL(`Daggerheart/${name}.html`, root);
    const document = load(readFileSync(file, 'utf8'));
    for (const element of document('script[src],link[href],a[href],img[src]').toArray()) {
      const address = document(element).attr('src') || document(element).attr('href');
      assert.ok(!address.includes('.private'), `${name}: private reference`);
      if (/^(https?:|#)/.test(address)) continue;
      assert.ok(existsSync(new URL(address.split('#')[0].split('?')[0], file)), `${name}: ${address}`);
    }
  }
});