export const EXPECTED_FILES = Object.freeze([
  '00-introduction.md',
  '01-return-from-neverdeath-graveyard.md',
  '02-the-wizards-three.md',
  '03-the-lambent-zeniths-last-voyage.md',
  '04-the-ruined-colossus.md',
  '05-death-house.md',
  '06-night-of-blue-fire.md',
  '07-tomb-of-wayward-souls.md',
  '08-the-dragon-queens-pride.md',
  '09-the-betrayer-revealed.md',
  '10-the-war-of-pandesmos.md',
  '11-eve-of-ruin.md',
  'appendix-a-bestiary.md',
  'appendix-b-character-dossier.md',
  'appendix-c-secrets-tracker.md'
]);

const MAX_TEXT = 5_000_000;
const MAX_TOTAL_TEXT = 80_000_000;
const MAX_ITEMS = 20_000;
const MAX_STAT = 1_000_000;
const own = (object, key) => Object.hasOwn(object, key);
const record = value => value !== null && typeof value === 'object' &&
  !Array.isArray(value) && [Object.prototype, null].includes(Object.getPrototypeOf(value));
const fail = message => { throw new Error(`Invalid campaign pack: ${message}`); };

function text(value, path, max = MAX_TEXT, empty = true) {
  if (typeof value !== 'string' || value.length > max || (!empty && !value.trim())) {
    fail(`${path} must be ${empty ? 'a' : 'a nonempty'} string of at most ${max} characters.`);
  }
}

function array(value, path, max = MAX_ITEMS) {
  if (!Array.isArray(value) || value.length > max) fail(`${path} must be an array of at most ${max} entries.`);
}

function object(value, path) {
  if (!record(value)) fail(`${path} must be an object.`);
}

function numeric(value, path, min = 0, max = MAX_STAT) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max) {
    fail(`${path} must be a finite number between ${min} and ${max}.`);
  }
}

function filename(value, path) {
  text(value, path, 255, false);
  if (!/^[^/\\\u0000-\u001f]+\.md$/i.test(value) || value === '.md') fail(`${path} must be a top-level Markdown filename.`);
}

// Bound the entire tree, including extension fields, before traversing its schema.
function boundedJSON(value) {
  let characters = 0;
  let nodes = 0;
  const ancestors = new Set();
  function visit(item, depth) {
    if (++nodes > 500_000 || depth > 30) fail('data is too large or too deeply nested.');
    if (typeof item === 'string') {
      characters += item.length;
      if (item.length > MAX_TEXT || characters > MAX_TOTAL_TEXT) fail('text exceeds the import size limit.');
    } else if (typeof item === 'number') {
      if (!Number.isFinite(item)) fail('numbers must be finite.');
    } else if (item !== null && typeof item === 'object') {
      if (ancestors.has(item)) fail('cyclic data is not JSON.');
      ancestors.add(item);
      if (Array.isArray(item)) {
        array(item, 'collection');
        for (const child of item) visit(child, depth + 1);
      } else {
        object(item, 'entry');
        for (const [key, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(item))) {
          if (['__proto__', 'prototype', 'constructor'].includes(key)) fail(`unsafe object key "${key}".`);
          if (!own(descriptor, 'value')) fail('accessor properties are not JSON.');
          characters += key.length;
          visit(descriptor.value, depth + 1);
        }
      }
      ancestors.delete(item);
    } else if (item !== null && typeof item !== 'boolean') {
      fail('data must contain only JSON values.');
    }
  }
  visit(value, 0);
}

export function slug(value) {
  text(value, 'heading');
  return value.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase()
    .replace(/['\u2019]/g, '').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '') || 'section';
}

function headings(markdown) {
  const found = [];
  let fence = null;
  let previous = null;
  for (const match of markdown.matchAll(/[^\r\n]*(?:\r\n|\n|\r|$)/g)) {
    if (!match[0]) continue;
    const line = match[0].replace(/[\r\n]+$/, '');
    const marker = /^ {0,3}(`{3,}|~{3,})(.*)$/.exec(line);
    if (fence) {
      if (marker && marker[1][0] === fence[0] && marker[1].length >= fence.length && !marker[2].trim()) fence = null;
      previous = null;
      continue;
    }
    if (marker && (marker[1][0] !== '`' || !marker[2].includes('`'))) {
      fence = marker[1];
      previous = null;
      continue;
    }
    const heading = /^ {0,3}(#{1,6})(?:[ \t]+(.*?)|[ \t]*)$/.exec(line);
    if (heading) {
      found.push({
        heading: (heading[2] ?? '').replace(/[ \t]+#+[ \t]*$/, '').trim(),
        level: heading[1].length,
        start: match.index
      });
      previous = null;
      continue;
    }
    if (previous && /^ {0,3}(?:=+|-+)[ \t]*$/.test(line)) {
      found.push({ heading: previous.line.trim(), level: line.trim()[0] === '=' ? 1 : 2, start: previous.start });
      previous = null;
      continue;
    }
    previous = line.trim() && !/^(?: {4}|\t| {0,3}>| {0,3}[-*+] )/.test(line) ? { line, start: match.index } : null;
  }
  return found;
}

export function parseDocument(name, markdown) {
  filename(name, 'source filename');
  text(markdown, `${name} source`);
  const entries = headings(markdown);
  if (entries.length > MAX_ITEMS) fail(`${name} has too many headings.`);
  const used = new Set();
  const sections = entries.map((entry, index) => {
    const base = slug(entry.heading);
    let id = base;
    let suffix = 2;
    while (used.has(id)) id = `${base}-${suffix++}`;
    used.add(id);
    let end = index + 1;
    while (end < entries.length && entries[end].level > entry.level) end++;
    return { id, heading: entry.heading, level: entry.level, markdown: markdown.slice(entry.start, entries[end]?.start ?? markdown.length) };
  });
  return {
    id: name.replace(/\.md$/i, ''),
    title: entries.find(entry => entry.level === 1)?.heading || name.replace(/\.md$/i, ''),
    filename: name,
    markdown,
    sections
  };
}

function fieldNumber(markdown, label) {
  const pattern = new RegExp(`^\\s*(?:>\\s*)?(?:[-*]\\s+)?\\*\\*${label}(?::)?\\*\\*\\s*:?[ \\t]*(\\d+(?:,\\d{3})*)(?=[ \\t(\\r\\n]|$)`, 'im');
  const match = pattern.exec(markdown);
  if (!match) return null;
  const value = Number(match[1].replace(/,/g, ''));
  return Number.isFinite(value) && value <= MAX_STAT ? value : null;
}

function dexterity(markdown) {
  const lines = markdown.split(/\r\n|\n|\r/);
  const cells = line => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim().replace(/\*/g, ''));
  for (let index = 0; index < lines.length - 2; index++) {
    const header = cells(lines[index]);
    const dex = header.findIndex(cell => /^DEX$/i.test(cell));
    if (dex < 0 || !cells(lines[index + 1]).every(cell => /^:?-{3,}:?$/.test(cell))) continue;
    const match = /^(\d+)(?:\s|\(|$)/.exec(cells(lines[index + 2])[dex] ?? '');
    if (match && Number(match[1]) <= MAX_STAT) return Number(match[1]);
  }
  return fieldNumber(markdown, '(?:DEX|Dexterity)');
}

export function extractStatblocks(documents) {
  array(documents, 'documents', 100);
  const blocks = [];
  for (const document of documents) {
    for (const section of document.sections) {
      if (section.level !== 4) continue;
      const ac = fieldNumber(section.markdown, 'Armor Class');
      const hp = fieldNumber(section.markdown, 'Hit Points');
      if (ac === null || hp === null) continue;
      blocks.push({
        id: `${document.id}::${section.id}`, name: section.heading,
        ac, hp, dex: dexterity(section.markdown), markdown: section.markdown,
        documentId: document.id, sectionId: section.id
      });
    }
  }
  return blocks;
}

function textList(value, path) {
  array(value, path, 2_000);
  value.forEach((item, index) => text(item, `${path}[${index}]`, 100_000));
}

function requireTextFields(value, fields, path) {
  object(value, path);
  for (const key of fields) text(value[key], `${path}.${key}`, 100_000);
}

function validateGuides(guides, documents) {
  object(guides, 'guides');
  for (const key of ['chapters', 'sanctum', 'gaps']) array(guides[key], `guides.${key}`, 2_000);
  const byFile = new Map(documents.map(document => [document.filename, document]));
  const resolve = (file, heading, path) => {
    const document = byFile.get(file);
    if (!document) fail(`${path} references missing source file "${file}".`);
    if (heading && !document.sections.some(section => section.heading === heading)) fail(`${path} references missing heading "${heading}" in ${file}.`);
  };
  const chapterFiles = new Set();
  guides.chapters.forEach((chapter, i) => {
    const path = `guides.chapters[${i}]`;
    requireTextFields(chapter, ['file', 'summary'], path);
    resolve(chapter.file, '', path);
    if (chapterFiles.has(chapter.file)) fail(`${path} duplicates chapter "${chapter.file}".`);
    chapterFiles.add(chapter.file);
    textList(chapter.startHere, `${path}.startHere`);
    array(chapter.scenes, `${path}.scenes`, 2_000);
    const sceneHeadings = new Set();
    chapter.scenes.forEach((scene, j) => {
      const scenePath = `${path}.scenes[${j}]`;
      requireTextFields(scene, ['heading', 'purpose'], scenePath);
      if (!scene.heading.trim()) fail(`${scenePath}.heading must not be empty.`);
      resolve(chapter.file, scene.heading, scenePath);
      if (sceneHeadings.has(scene.heading)) fail(`${scenePath} duplicates scene heading "${scene.heading}".`);
      sceneHeadings.add(scene.heading);
      for (const key of ['tips', 'watchFor', 'next']) {
        if (key === 'tips' || own(scene, key)) textList(scene[key], `${scenePath}.${key}`);
      }
      if (own(scene, 'encounters')) {
        array(scene.encounters, `${scenePath}.encounters`, 200);
        scene.encounters.forEach((encounter, k) => {
          const encounterPath = `${scenePath}.encounters[${k}]`;
          requireTextFields(encounter, ['name', 'trigger', 'resolution'], encounterPath);
          if (own(encounter, 'tactics')) textList(encounter.tactics, `${encounterPath}.tactics`);
          array(encounter.creatures, `${encounterPath}.creatures`, 200);
          encounter.creatures.forEach((creature, n) => {
            const creaturePath = `${encounterPath}.creatures[${n}]`;
            requireTextFields(creature, ['name'], creaturePath);
            if (own(creature, 'note')) text(creature.note, `${creaturePath}.note`, 100_000);
            if (own(creature, 'count') && creature.count !== null) {
              numeric(creature.count, `${creaturePath}.count`, 0, 100);
              if (!Number.isInteger(creature.count)) fail(`${creaturePath}.count must be an integer or null for a variable count.`);
            }
          });
        });
      }
    });
  });
  const visitIds = new Set();
  guides.sanctum.forEach((visit, i) => {
    const path = `guides.sanctum[${i}]`;
    requireTextFields(visit, ['title', 'when', 'chapterFile', 'heading'], path);
    resolve(visit.chapterFile, visit.heading, path);
    if (own(visit, 'id')) {
      text(visit.id, `${path}.id`, 500, false);
      if (visitIds.has(visit.id)) fail(`${path} has a duplicate visit id.`);
      visitIds.add(visit.id);
    }
    if (own(visit, 'spoilers')) text(visit.spoilers, `${path}.spoilers`, 100_000);
    for (const key of ['briefing', 'departure', 'return']) textList(visit[key], `${path}.${key}`);
    if (own(visit, 'npcs')) {
      array(visit.npcs, `${path}.npcs`, 100);
      visit.npcs.forEach((npc, j) => {
        const npcPath = `${path}.npcs[${j}]`;
        requireTextFields(npc, ['name', 'knows', 'wants', 'portrayal', 'guardrail'], npcPath);
        textList(npc.prompts, `${npcPath}.prompts`);
      });
    }
  });
  guides.gaps.forEach((gap, i) => {
    const path = `guides.gaps[${i}]`;
    if (typeof gap === 'string') text(gap, path, 100_000);
    else {
      requireTextFields(gap, ['kind', 'name', 'detail'], path);
      for (const key of ['file', 'chapterFile', 'heading']) if (own(gap, key)) text(gap[key], `${path}.${key}`, 100_000);
      if (gap.file || gap.chapterFile) resolve(gap.file || gap.chapterFile, gap.heading, path);
    }
  });
}

export function buildPack(sourceFiles, guides = []) {
  boundedJSON(sourceFiles);
  array(sourceFiles, 'sourceFiles', 100);
  const names = new Set();
  for (const source of sourceFiles) {
    object(source, 'sourceFiles entry');
    filename(source.name, 'sourceFiles.name');
    text(source.markdown, `${source.name} source`);
    if (names.has(source.name)) fail(`duplicate source filename "${source.name}".`);
    names.add(source.name);
  }
  const hasChapters = sourceFiles.some(source => /^\d{2}-/.test(source.name));
  const skipped = sourceFiles.filter(source => hasChapters && /(?:^|-)complete\.md$/i.test(source.name));
  const documents = sourceFiles.filter(source => !skipped.includes(source))
    .map(source => parseDocument(source.name, source.markdown))
    .sort((a, b) => a.filename < b.filename ? -1 : a.filename > b.filename ? 1 : 0);
  boundedJSON(guides);
  const bundles = Array.isArray(guides) ? guides : [guides];
  const merged = { chapters: [], sanctum: [], gaps: [] };
  for (const bundle of bundles) {
    object(bundle, 'guide bundle');
    for (const key of Object.keys(merged)) {
      array(bundle[key], `guide bundle.${key}`, 2_000);
      merged[key].push(...bundle[key]);
    }
  }
  const missing = EXPECTED_FILES.filter(name => !documents.some(document => document.filename === name));
  const warnings = skipped.map(source => `Excluded duplicate complete omnibus: ${source.name}.`);
  if (missing.length) warnings.push(`Missing ${missing.length} expected source document(s).`);
  if (!merged.chapters.length) warnings.push('No chapter guidance supplied; this is a source-only pack.');
  const statblocks = extractStatblocks(documents);
  for (const document of documents) {
    for (const section of document.sections.filter(section => section.level === 4)) {
      if (/\*\*(?:Armor Class|Hit Points):?\*\*/i.test(section.markdown) &&
          !statblocks.some(block => block.documentId === document.id && block.sectionId === section.id)) {
        warnings.push(`Incomplete or nonnumeric statblock not imported: ${document.filename} / ${section.heading}. Supply the missing statistics explicitly.`);
      }
    }
  }
  return validatePack({
    format: 'eve-of-ruin-pack', version: 1, createdAt: new Date().toISOString(),
    documents, statblocks, guides: merged,
    coverage: { expected: EXPECTED_FILES.length, imported: documents.length, missing, warnings }
  });
}

export function validatePack(pack) {
  boundedJSON(pack);
  object(pack, 'pack');
  if (pack.format !== 'eve-of-ruin-pack' || pack.version !== 1) fail('unsupported format or version; expected eve-of-ruin-pack version 1.');
  text(pack.createdAt, 'createdAt', 100, false);
  if (!Number.isFinite(Date.parse(pack.createdAt))) fail('createdAt must be a valid timestamp.');
  array(pack.documents, 'documents', 100);
  if (!pack.documents.length) fail('documents must contain at least one source document.');
  const ids = new Set();
  const names = new Set();
  for (const [i, document] of pack.documents.entries()) {
    const path = `documents[${i}]`;
    object(document, path);
    filename(document.filename, `${path}.filename`);
    for (const key of ['id', 'title', 'markdown']) text(document[key], `${path}.${key}`);
    if (ids.has(document.id) || names.has(document.filename)) fail(`${path} duplicates a document id or filename.`);
    ids.add(document.id);
    names.add(document.filename);
    const parsed = parseDocument(document.filename, document.markdown);
    if (document.id !== parsed.id || document.title !== parsed.title) fail(`${path} id/title does not match its source document.`);
    array(document.sections, `${path}.sections`);
    if (document.sections.length !== parsed.sections.length) fail(`${path}.sections does not contain every source heading.`);
    document.sections.forEach((section, j) => {
      object(section, `${path}.sections[${j}]`);
      for (const key of ['id', 'heading', 'level', 'markdown']) {
        if (section[key] !== parsed.sections[j][key]) fail(`${path}.sections[${j}].${key} does not match the source heading/content.`);
      }
    });
  }
  array(pack.statblocks, 'statblocks', 10_000);
  const extracted = new Map(extractStatblocks(pack.documents).map(block => [block.id, block]));
  const blockIds = new Set();
  for (const [i, block] of pack.statblocks.entries()) {
    const path = `statblocks[${i}]`;
    object(block, path);
    for (const key of ['id', 'name', 'documentId', 'sectionId']) text(block[key], `${path}.${key}`, 1_000, false);
    text(block.markdown, `${path}.markdown`);
    numeric(block.ac, `${path}.ac`);
    numeric(block.hp, `${path}.hp`);
    if (block.dex !== null) numeric(block.dex, `${path}.dex`);
    if (blockIds.has(block.id)) fail(`${path} has a duplicate statblock id.`);
    blockIds.add(block.id);
    const original = extracted.get(block.id);
    if (!original) fail(`${path} does not reference an actual source statblock.`);
    for (const key of Object.keys(original)) {
      if (block[key] !== original[key]) fail(`${path}.${key} does not match the complete source statblock.`);
    }
  }
  if (blockIds.size !== extracted.size) fail('statblocks is missing one or more complete source statblocks.');
  validateGuides(pack.guides, pack.documents);
  object(pack.coverage, 'coverage');
  if (pack.coverage.expected !== EXPECTED_FILES.length || pack.coverage.imported !== pack.documents.length) fail('coverage counts do not match the source inventory.');
  textList(pack.coverage.missing, 'coverage.missing');
  textList(pack.coverage.warnings, 'coverage.warnings');
  const missing = EXPECTED_FILES.filter(name => !names.has(name));
  if (JSON.stringify(pack.coverage.missing) !== JSON.stringify(missing)) fail('coverage.missing does not match the expected filenames.');
  if (own(pack.coverage, 'sources')) {
    array(pack.coverage.sources, 'coverage.sources', 100);
    if (pack.coverage.sources.length !== pack.documents.length) fail('coverage.sources must inventory every imported document.');
    const inventoryNames = new Set();
    for (const source of pack.coverage.sources) {
      object(source, 'coverage.sources entry');
      const document = pack.documents.find(item => item.filename === source.filename);
      if (!document || inventoryNames.has(source.filename)) fail('coverage.sources has an unknown or duplicate filename.');
      inventoryNames.add(source.filename);
      if (source.characters !== document.markdown.length) fail(`coverage.sources character count differs for ${source.filename}.`);
      if (typeof source.sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(source.sha256)) fail('coverage.sources requires a SHA-256 hex digest.');
    }
  }
  return pack;
}

function trackerNumber(value, label, min = 0, max = MAX_STAT) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max) {
    throw new Error(`${label} must be a finite number between ${min} and ${max}.`);
  }
}

export function createCombatant(template, { name, initiative = null, maxHp } = {}) {
  if (!record(template)) throw new Error('A supplied statblock or explicit manual statistics are required; no statistics are inferred.');
  const actorName = name ?? template.name;
  if (typeof actorName !== 'string' || !actorName.trim() || actorName.length > 1_000) throw new Error('Combatant name must be a nonempty string of at most 1000 characters.');
  if (template.id !== null && template.id !== undefined && (typeof template.id !== 'string' || !template.id)) throw new Error('Statblock id must be a nonempty string or null.');
  trackerNumber(template.ac, 'Armor Class');
  trackerNumber(maxHp ?? template.hp, 'Maximum HP', 1);
  if (initiative !== null) trackerNumber(initiative, 'Initiative', -1_000, 1_000);
  return {
    id: globalThis.crypto.randomUUID(), name: actorName, statblockId: template.id ?? null,
    ac: template.ac, maxHp: maxHp ?? template.hp, hp: maxHp ?? template.hp,
    tempHp: 0, initiative, conditions: '', notes: '', resourceNotes: ''
  };
}

function validateHP(combatant, amount) {
  if (!record(combatant)) throw new Error('Combatant is required.');
  trackerNumber(combatant.maxHp, 'Maximum HP', 1);
  trackerNumber(combatant.hp, 'Current HP', 0, combatant.maxHp);
  trackerNumber(combatant.tempHp, 'Temporary HP');
  trackerNumber(amount, 'Amount');
}

export function applyDamage(combatant, amount) {
  validateHP(combatant, amount);
  const absorbed = Math.min(combatant.tempHp, amount);
  return { ...combatant, tempHp: combatant.tempHp - absorbed, hp: Math.max(0, combatant.hp - (amount - absorbed)) };
}

export function applyHealing(combatant, amount) {
  validateHP(combatant, amount);
  return { ...combatant, hp: Math.min(combatant.maxHp, combatant.hp + amount) };
}

export function sortCombatants(combatants) {
  if (!Array.isArray(combatants)) throw new Error('Combatants must be an array.');
  for (const combatant of combatants) {
    if (!record(combatant)) throw new Error('Combatant is required.');
    if (combatant.initiative !== null) trackerNumber(combatant.initiative, 'Initiative', -1_000, 1_000);
  }
  return [...combatants].sort((a, b) => a.initiative === b.initiative ? 0
    : a.initiative === null ? 1 : b.initiative === null ? -1 : b.initiative - a.initiative);
}
