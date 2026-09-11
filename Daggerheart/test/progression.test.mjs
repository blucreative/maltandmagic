import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { marked } from 'marked';
import { load } from 'cheerio';
import '../../assets/js/daggerheart-catalog.js';
import '../../assets/js/daggerheart-heritage.js';
import '../../assets/js/daggerheart-progression.js';

const catalog = globalThis.DaggerheartCatalog;
const heritage = globalThis.DaggerheartHeritage;
const progression = globalThis.DaggerheartProgression;
const srdPath = new URL('../.private/Daggerheart SRD 2.0.md', import.meta.url);
const normalize = text => text.replace(/\s+/g, ' ').trim();
const sourceDocument = () => load(marked.parse(readFileSync(srdPath, 'utf8')));
const findHeading = (document, name) => document('h3,h4,h5').filter((index, element) => document(element).text() === name).first();
const sectionBlocks = (document, elements) => {
  const result = [];
  elements.each((index, element) => {
    const node = document(element);
    if (element.tagName === 'p') result.push(node.text());
    if (['ul', 'ol'].includes(element.tagName)) result.push(...node.children('li').toArray().map(item => document(item).text()));
    if (element.tagName === 'table') result.push(...node.find('tr').toArray().map(row => document(row).find('th,td').toArray().map(cell => document(cell).text().trim()).join(' / ')));
  });
  return result.map(normalize);
};

test('all heritage options, subclasses, and domain levels have usable reference content', () => {
  assert.equal(heritage.length, 45);
  for (const [category, names] of [['Ancestry', catalog.ancestry], ['Community', catalog.communities], ['Transformation', catalog.transformations]]) {
    assert.deepEqual(heritage.filter(entry => entry.category === category).map(entry => entry.name).sort(), [...names].sort());
  }
  assert.equal(heritage.filter(entry => entry.source === 'Hope & Fear').length, 18);
  for (const entry of heritage) {
    assert.ok(entry.summary.length > 30 && entry.features.length && entry.page >= 32 && entry.endPage <= 45, entry.name);
    if (entry.category !== 'Community') assert.equal(entry.features.length, 2, entry.name);
  }
  assert.equal(progression.classes.length, 13);
  for (const character of progression.classes) {
    assert.deepEqual(character.subclasses.map(entry => entry.name), catalog.classes.find(entry => entry.name === character.name).subclasses);
    for (const subclass of character.subclasses) {
      for (const stage of ['Foundation', 'Specialization', 'Mastery']) assert.ok(subclass.stages.some(entry => entry.name.startsWith(stage) && entry.paragraphs.length), `${subclass.name}: ${stage}`);
    }
  }
  assert.equal(progression.cards.length, 210);
  assert.equal(new Set(progression.cards.map(card => `${card.domain}:${card.name}`)).size, 210);
  for (const domain of catalog.domains) {
    for (let level = 1; level <= 10; level++) assert.ok(progression.cards.some(card => card.domain === domain.name && card.level === level), `${domain.name} level ${level}`);
  }
  assert.ok(progression.cards.every(card => ['Spell', 'Ability', 'Grimoire'].includes(card.type) && Number.isInteger(card.recall) && card.paragraphs.length));
  assert.ok(progression.cards.some(card => card.name === 'Summon Horror' && card.level === 4 && card.domain === 'Dread'));
});

test('heritage features preserve complete source text and ancestry order', { skip: !existsSync(srdPath) }, () => {
  const document = sourceDocument();
  for (const entry of heritage) {
    const heading = findHeading(document, entry.name);
    const featureHeading = heading.nextUntil('h3').filter('h4').filter((index, element) => /Features?$/.test(document(element).text())).first();
    const blocks = sectionBlocks(document, featureHeading.nextUntil('h2,h3,h4'));
    assert.deepEqual(entry.features.map(normalize), blocks, entry.name);
  }
});

test('class features and every subclass stage match the supplied SRD', { skip: !existsSync(srdPath) }, () => {
  const document = sourceDocument();
  for (const character of progression.classes) {
    for (const owner of [{ name: character.name, stages: character.features }, ...character.subclasses]) {
      const heading = findHeading(document, owner.name);
      for (const stage of owner.stages) {
        const stageHeading = heading.nextAll('h4').filter((index, element) => document(element).text() === stage.name).first();
        assert.deepEqual(stage.paragraphs.map(normalize), sectionBlocks(document, stageHeading.nextUntil('h2,h3,h4')), `${owner.name}: ${stage.name}`);
      }
    }
  }
  for (const name of ['Brawler', 'Druid']) {
    const sections = progression.classes.find(entry => entry.name === name).supplements;
    for (let tier = 1; tier <= 4; tier++) assert.ok(sections.some(entry => entry.name === `Tier ${tier}`), `${name} tier ${tier}`);
  }
  assert.ok(progression.classes.find(entry => entry.name === 'Ranger').supplements.some(entry => entry.name === 'Companion' && entry.paragraphs.length));
});

test('domain cards match source level, type, Recall Cost, and complete effects', { skip: !existsSync(srdPath) }, () => {
  const document = sourceDocument();
  const start = document('h2').filter((index, element) => document(element).text() === 'Domain Card Reference');
  const headings = start.nextUntil('h2').filter('h4');
  assert.equal(headings.length, 211);
  for (const card of progression.cards) {
    const heading = headings.filter((index, element) => document(element).text() === (card.name === 'Summon Horror' ? 'Horror' : card.name)).first();
    assert.equal(heading.length, 1, card.name);
    const blocks = sectionBlocks(document, heading.nextUntil('h2,h3,h4'));
    assert.equal(blocks[0], `Level ${card.level} ${card.domain} ${card.type}`, card.name);
    assert.equal(blocks[1], `Recall Cost: ${card.recall}`, card.name);
    assert.deepEqual(card.paragraphs.map(normalize), blocks.slice(2), card.name);
  }
});

test('campaign citations and complexity match actual frame title pages', () => {
  for (const [source, filename] of [['Core', 'Core Rulebook'], ['Hope & Fear', 'Hope and Fear']]) {
    const path = new URL(`../.private/Daggerheart ${filename}.md`, import.meta.url);
    if (!existsSync(path)) continue;
    const tokens = marked.lexer(readFileSync(path, 'utf8'));
    let page = 0;
    let frame;
    let checked = 0;
    for (const token of tokens) {
      const marker = token.type === 'html' && token.text.match(/<!-- page (\d+) -->/);
      if (marker) page = Number(marker[1]);
      if (token.type !== 'heading') continue;
      if (token.depth === 1) {
        frame = catalog.frames.find(entry => entry.source === source && entry.name === token.text);
        if (frame) { assert.equal(frame.page, page, frame.name); checked++; }
      }
      if (frame && token.text.startsWith('Complexity Rating:')) {
        assert.equal(frame.complexity, token.text.match(/•/g).length, frame.name);
        frame = null;
      }
    }
    assert.equal(checked, source === 'Core' ? 6 : 4);
  }
});