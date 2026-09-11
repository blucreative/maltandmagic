import { catalog, CLASS_TRAITS, SKILL_ABILITIES, SCALAR_CHOICES, createProgression, deriveCharacter, classEligibility, choiceRequirements, advanceCharacter, modifier, rollHitDie } from './advancement-engine.mjs';

const sheet = window.colSheet;
const button = document.getElementById('advancementButton');
const scalarChoices = SCALAR_CHOICES;
const element = (tag, text, className) => {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
};
const signed = value => value >= 0 ? `+${value}` : `${value}`;
const progression = () => sheet.getState().progression || createProgression(sheet.getState());
const labelFor = (key, value) => key === 'subclass' ? catalog.classes[draft.classId].subclasses.find(entry => entry.id === value)?.name || value : value;
let draft;
let base;
let step = 0;
let lastRenderedProgression = '';

const dialog = element('dialog', undefined, 'advancement-dialog');
dialog.setAttribute('aria-labelledby', 'advancementTitle');
const header = element('header', undefined, 'advancement-head');
const heading = element('div');
const title = element('h2', 'Col Agen / Advancement');
title.id = 'advancementTitle';
const subtitle = element('p');
heading.append(title, subtitle);
const close = element('button', undefined, 'command advancement-close');
close.type = 'button';
close.title = 'Close advancement';
close.setAttribute('aria-label', 'Close advancement');
const closeIcon = element('img');
closeIcon.src = '../assets/icons/col-agen/x.svg';
closeIcon.alt = '';
close.append(closeIcon);
header.append(heading, close);
const steps = element('ol', undefined, 'advancement-steps');
const body = element('div', undefined, 'advancement-body');
const error = element('p', '', 'advancement-error');
error.setAttribute('role', 'alert');
const footer = element('footer', undefined, 'advancement-footer');
const status = element('span', '', 'draft-status');
status.setAttribute('aria-live', 'polite');
const back = element('button', 'Back', 'command');
const next = element('button', 'Continue', 'command primary');
back.type = next.type = 'button';
footer.append(status, back, next);
dialog.append(header, steps, body, error, footer);
document.body.append(dialog);

function saveDraft() {
  draft.step = step;
  sheet.saveDraft(draft);
  status.textContent = sheet.claimed() ? 'Draft saved locally; cloud sync pending' : 'Draft saved in this browser';
}

function optionDetail(key, value) {
  if (key === 'subclass') {
    const subclass = catalog.classes[draft.classId].subclasses.find(entry => entry.id === value);
    if (!subclass) return null;
    return { text: subclass.features.map(feature => `Level ${feature.level}: ${feature.name}`).join('\n'), source: subclass.source };
  }
  if (['invocations', 'metamagic'].includes(key)) return catalog.classes[draft.classId].options.find(option => option.name === value);
  if (catalog.spellRules?.[value]) return { text: catalog.spellRules[value], source: 'SRD 5.2.1' };
  return null;
}

function details(text, source) {
  const node = element('details');
  node.append(element('summary', 'Rules'));
  if (text) node.append(element('p', text, 'advancement-detail'));
  node.append(element('small', source || 'SRD 5.2.1', 'advancement-source'));
  return node;
}

function selectClass() {
  body.append(element('h3', 'Class for This Level'));
  const list = element('div', undefined, 'advancement-class-list');
  const character = deriveCharacter(base);
  for (const [classId, traits] of Object.entries(CLASS_TRAITS)) {
    const reason = classEligibility(base, classId);
    const label = element('label', undefined, 'advancement-class');
    const input = element('input');
    input.type = 'radio';
    input.name = 'advancementClass';
    input.value = classId;
    input.checked = draft.classId === classId;
    input.disabled = Boolean(reason);
    const content = element('span');
    content.append(element('strong', traits.name), element('small', reason || `${traits.name} ${(character.classes[classId] || 0) + 1} / d${traits.die}`));
    label.append(input, content);
    input.addEventListener('change', () => {
      draft.classId = classId;
      draft.choices = {};
      draft.hpRoll = null;
      draft.rolls = [];
      initializeChoices();
      saveDraft();
    });
    list.append(label);
  }
  body.append(list);
  const history = element('details');
  history.append(element('summary', `Recorded History (${base.history.length} advancements)`));
  const entries = element('ol', undefined, 'advancement-history');
  entries.append(element('li', `Baseline: ${Object.entries(base.baseline.classes).map(([classId, level]) => `${CLASS_TRAITS[classId].name} ${level}`).join(' / ')}; ${base.baseline.hpMax} maximum HP`));
  for (const entry of base.history) {
    const item = element('li', `Level ${entry.level}: ${CLASS_TRAITS[entry.classId].name} ${entry.classLevel} / HP roll ${entry.hpRoll}`);
    item.append(details(JSON.stringify(entry.choices, null, 2), entry.rulesVersion));
    entries.append(item);
  }
  history.append(entries);
  body.append(history);
}

function initializeChoices() {
  const requirements = choiceRequirements(base, draft.classId, draft.choices);
  const allowed = new Set([...requirements.groups.map(group => group.key), 'abilityIncreases', 'featureNotes', 'supplementReviewed']);
  for (const key of Object.keys(draft.choices)) if (!allowed.has(key)) delete draft.choices[key];
  for (const group of requirements.groups) {
    if (scalarChoices.has(group.key) && draft.choices[group.key] === undefined && requirements.previous[group.key] && group.options.includes(requirements.previous[group.key])) draft.choices[group.key] = requirements.previous[group.key];
    if (draft.choices[group.key] !== undefined || scalarChoices.has(group.key)) continue;
    draft.choices[group.key] = [...group.retained];
  }
}

function choicesView() {
  initializeChoices();
  const requirements = choiceRequirements(base, draft.classId, draft.choices);
  for (const group of requirements.groups) {
    const fieldset = element('fieldset');
    const legend = element('legend', group.label);
    const count = element('span', '', 'advancement-count');
    legend.append(count);
    fieldset.append(legend);
    if (scalarChoices.has(group.key)) {
      const select = element('select');
      select.setAttribute('aria-label', group.label);
      select.name = `choice-${group.key}`;
      const placeholder = element('option', 'Choose...');
      placeholder.value = '';
      select.append(placeholder);
      for (const value of group.options) {
        const option = element('option', labelFor(group.key, value));
        option.value = value;
        select.append(option);
      }
      select.value = draft.choices[group.key] || '';
      fieldset.append(select);
      const info = optionDetail(group.key, select.value);
      if (info) fieldset.append(details(info.text, info.source));
      select.addEventListener('change', () => {
        draft.choices[group.key] = select.value;
        if (group.key === 'feat') { delete draft.choices.abilityIncreases; delete draft.choices.skilled; }
        if (group.key === 'initiateClass') { delete draft.choices.initiateCantrips; delete draft.choices.initiateSpell; }
        saveDraft();
        renderDialog();
        body.querySelector(`[name="choice-${group.key}"]`)?.focus();
      });
    } else {
      const search = element('input');
      search.type = 'search';
      search.placeholder = `Filter ${group.label.toLowerCase()}`;
      search.setAttribute('aria-label', `Filter ${group.label}`);
      const list = element('div', undefined, 'advancement-options');
      const selected = () => draft.choices[group.key] || [];
      const updateCount = () => { count.textContent = `${selected().length} / ${group.count}`; };
      updateCount();
      for (const value of group.options) {
        const row = element('div', undefined, 'advancement-option');
        row.dataset.name = value.toLowerCase();
        const label = element('label');
        const input = element('input');
        input.type = 'checkbox';
        input.name = `choice-${group.key}`;
        input.value = value;
        input.checked = selected().includes(value);
        label.append(input, document.createTextNode(` ${value}`));
        row.append(label);
        const info = optionDetail(group.key, value);
        if (info) row.append(details(info.text, info.source));
        input.addEventListener('change', () => {
          draft.choices[group.key] = input.checked ? [...selected(), value] : selected().filter(entry => entry !== value);
          updateCount();
          saveDraft();
        });
        list.append(row);
      }
      search.addEventListener('input', () => { for (const row of list.children) row.hidden = !row.dataset.name.includes(search.value.trim().toLowerCase()); });
      fieldset.append(search, list);
    }
    body.append(fieldset);
  }
  if (requirements.feat && (draft.choices.feat === 'Ability Score Improvement' || draft.choices.feat === 'Grappler' || draft.choices.feat?.startsWith('Boon of '))) {
    const fieldset = element('fieldset');
    fieldset.append(element('legend', 'Ability Increases'));
    const grid = element('div', undefined, 'advancement-abilities');
    const character = deriveCharacter(base);
    for (const [ability, score] of Object.entries(character.abilities)) {
      const label = element('label', `${ability} (${score})`);
      const input = element('input');
      input.type = 'number'; input.min = '0'; input.max = draft.choices.feat === 'Ability Score Improvement' ? '2' : '1'; input.step = '1';
      input.value = draft.choices.abilityIncreases?.[ability] || 0;
      input.addEventListener('change', () => {
        draft.choices.abilityIncreases ||= {};
        if (Number(input.value)) draft.choices.abilityIncreases[ability] = Number(input.value);
        else delete draft.choices.abilityIncreases[ability];
        saveDraft();
      });
      label.append(input); grid.append(label);
    }
    fieldset.append(grid); body.append(fieldset);
  }
  body.append(element('h3', 'Features Gained'));
  for (const feature of requirements.features) {
    const block = element('section', undefined, 'advancement-feature');
    block.append(element('h3', feature.name));
    if (feature.text) block.append(details(feature.text, feature.source));
    else block.append(element('small', feature.source, 'advancement-source'));
    body.append(block);
  }
  const noteLabel = element('label', 'Additional Feature Choices');
  const notes = element('textarea');
  notes.rows = 3; notes.maxLength = 4000; notes.value = draft.choices.featureNotes || '';
  notes.addEventListener('input', () => { draft.choices.featureNotes = notes.value; saveDraft(); });
  noteLabel.append(notes); body.append(noteLabel);
  const subclass = catalog.classes[draft.classId].subclasses.find(entry => entry.id === (draft.choices.subclass || requirements.previous.subclass));
  if (subclass && subclass.source !== 'SRD 5.2.1') {
    const label = element('label', undefined, 'advancement-option');
    const input = element('input'); input.type = 'checkbox'; input.checked = draft.choices.supplementReviewed === true;
    input.addEventListener('change', () => { draft.choices.supplementReviewed = input.checked; saveDraft(); });
    label.append(input, document.createTextNode('Supplemental rules reviewed; additional choices recorded.'));
    body.append(label, element('p', 'Supplemental feature effects require manual rules review; only listed calculated gains are applied.', 'advancement-source'));
  }
}

function hpView() {
  const die = CLASS_TRAITS[draft.classId].die;
  const character = deriveCharacter(base);
  body.append(element('h3', `Hit Points / d${die}`));
  const container = element('div', undefined, 'advancement-hp');
  const label = element('label', 'Recorded Roll');
  const input = element('input');
  input.type = 'number'; input.min = '2'; input.max = String(die); input.step = '1'; input.value = draft.hpRoll || '';
  input.setAttribute('aria-label', 'Recorded HP roll');
  input.addEventListener('input', () => { draft.hpRoll = Number(input.value); draft.rolls = []; saveDraft(); });
  label.append(input);
  const roll = element('button', `Roll d${die}`, 'command');
  roll.type = 'button';
  const result = element('p', draft.rolls?.length ? `Rolls: ${draft.rolls.join(', ')}; final ${draft.hpRoll}` : 'Reroll every 1.');
  result.setAttribute('aria-live', 'polite');
  roll.addEventListener('click', () => {
    const rolled = rollHitDie(die);
    draft.hpRoll = rolled.result; draft.rolls = rolled.rolls; input.value = rolled.result;
    result.textContent = `Rolls: ${rolled.rolls.join(', ')}; final ${rolled.result}`;
    saveDraft();
  });
  container.append(label, roll);
  body.append(container, result, element('p', `Constitution ${signed(modifier(character.abilities.Constitution + (draft.choices.abilityIncreases?.Constitution || 0)))}${base.baseline.tough ? ' / Tough +2 HP' : ''}`));
  const milestone = element('label', undefined, 'advancement-option');
  const confirmed = element('input'); confirmed.type = 'checkbox'; confirmed.checked = draft.milestone === true;
  confirmed.addEventListener('change', () => { draft.milestone = confirmed.checked; saveDraft(); });
  milestone.append(confirmed, document.createTextNode('Campaign milestone reached; Long Rest completed.'));
  body.append(milestone);
}

function payload() { return { id: draft.id, classId: draft.classId, choices: draft.choices, hpRoll: draft.hpRoll, milestone: draft.milestone }; }

function reviewView() {
  const before = deriveCharacter(base);
  const after = deriveCharacter(advanceCharacter(base, payload()));
  const summary = element('div', undefined, 'advancement-review');
  for (const [name, oldValue, newValue] of [['Level', before.totalLevel, after.totalLevel], ['Maximum HP', before.hpMax, after.hpMax], ['Proficiency', signed(before.proficiency), signed(after.proficiency)]]) {
    const block = element('div'); block.append(element('span', name), element('strong', `${oldValue} > ${newValue}`)); summary.append(block);
  }
  body.append(summary, element('p', `Long Rest: ${after.hpMax} HP, spell slots and class resources restored.`));
  body.append(element('h3', `${CLASS_TRAITS[draft.classId].name} ${after.classes[draft.classId]}`));
  for (const [key, value] of Object.entries(draft.choices)) {
    if (!value || key === 'supplementReviewed') continue;
    const text = Array.isArray(value) ? value.join(', ') : typeof value === 'object' ? Object.entries(value).map(([name, amount]) => `${name} +${amount}`).join(', ') : labelFor(key, value);
    body.append(element('p', `${key.replace(/([A-Z])/g, ' $1')}: ${text}`));
  }
  body.append(element('p', `Spellcasting slots: ${after.slots.map((count, index) => count ? `L${index + 1}: ${count}` : '').filter(Boolean).join(' / ') || 'None'}`));
  if (after.resources.pact) body.append(element('p', `Pact Magic: ${after.resources.pact} level-${after.pactLevel} slots`));
}

function renderDialog() {
  error.textContent = '';
  body.replaceChildren(); steps.replaceChildren();
  ['Class', 'Choices', 'Hit Points', 'Review'].forEach((name, index) => {
    const item = element('li', `${index + 1}. ${name}`);
    if (index === step) item.setAttribute('aria-current', 'step');
    steps.append(item);
  });
  const character = deriveCharacter(base);
  subtitle.textContent = character.totalLevel === 2 ? 'Level 3 record pending' : `Recorded Level ${character.totalLevel} / Next Level ${character.totalLevel + 1}`;
  back.disabled = step === 0;
  next.textContent = step === 3 ? 'Finalize & Save to GitHub' : 'Continue';
  next.disabled = character.totalLevel >= 20;
  if (character.totalLevel >= 20) { selectClass(); return; }
  [selectClass, choicesView, hpView, reviewView][step]();
}

button.addEventListener('click', () => {
  base = progression();
  const level = deriveCharacter(base).totalLevel;
  const savedDraft = sheet.getState().advancementDraft;
  draft = savedDraft?.baseLevel === level ? structuredClone(savedDraft) : { id: crypto.randomUUID(), baseLevel: level, classId: Object.keys(deriveCharacter(base).classes)[0], choices: {}, hpRoll: null, milestone: false, step: 0 };
  step = Math.min(2, Math.max(0, Number(draft.step) || 0));
  initializeChoices(); renderDialog(); dialog.showModal();
});
close.addEventListener('click', () => { if (!sheet.finalizing) dialog.close(); });
dialog.addEventListener('cancel', event => { if (sheet.finalizing) event.preventDefault(); });
dialog.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  event.preventDefault();
  if (!sheet.finalizing) dialog.close();
});
back.addEventListener('click', () => { step = Math.max(0, step - 1); saveDraft(); renderDialog(); });
next.addEventListener('click', async () => {
  error.textContent = '';
  try {
    if (step === 0) { const reason = classEligibility(base, draft.classId); if (reason) throw new Error(reason); }
    if (step === 1) advanceCharacter(base, { ...payload(), hpRoll: 2, milestone: true });
    if (step === 2) advanceCharacter(base, payload());
    if (step < 3) { step += 1; saveDraft(); renderDialog(); body.scrollTop = 0; body.querySelector('select,input,button')?.focus({ preventScroll: true }); return; }
    next.disabled = back.disabled = close.disabled = true;
    status.textContent = 'Saving advancement to GitHub...';
    await sheet.finalize(payload(), draft.baseLevel);
    dialog.close();
  } catch (failure) {
    error.textContent = failure.message;
    status.textContent = 'Draft retained';
  } finally {
    next.disabled = false; back.disabled = step === 0; close.disabled = false;
  }
});

const resourceContainer = document.getElementById('innatePips').closest('.panel-body');
const featureContainer = [...document.querySelectorAll('.panel h2')].find(node => node.textContent === 'Sorcerer Features').nextElementSibling;
const resourceNames = { innate: 'Innate Sorcery', sorcery: 'Sorcery Points', pact: 'Pact Magic Slots', rage: 'Rage', secondWind: 'Second Wind', actionSurge: 'Action Surge', indomitable: 'Indomitable', focus: 'Focus Points', inspiration: 'Bardic Inspiration', clericChannel: 'Cleric Channel Divinity', paladinChannel: 'Paladin Channel Divinity', wildShape: 'Wild Shape', layOnHands: 'Lay On Hands', favoredEnemy: 'Favored Enemy', sorcerousRestoration: 'Sorcerous Restoration', arcaneShot: 'Arcane Shot (UA 2025)' };

function render() {
  const saved = sheet.getState();
  if (!saved.progression) return;
  const character = deriveCharacter(saved.progression);
  document.getElementById('maxHp').readOnly = true;
  resourceContainer.replaceChildren();
  for (const [key, maximum] of Object.entries(character.resources)) {
    if (!maximum || key === 'hitDice') continue;
    const row = element('div', undefined, 'advancement-resource');
    const name = resourceNames[key] || (key.startsWith('initiate-') ? 'Magic Initiate / Free Cast' : key.startsWith('hd') ? `Hit Dice / d${key.slice(2)}` : key.startsWith('slots') ? `Level ${key.slice(5)} Spell Slots` : `Mystic Arcanum ${key.slice(7)}`);
    const label = element('label', name); label.htmlFor = `advanced-resource-${key}`;
    const input = element('input'); input.id = label.htmlFor; input.type = 'number'; input.min = '0'; input.max = String(maximum); input.step = '1'; input.value = saved.resources[key];
    input.addEventListener('change', () => sheet.updatePlay(state => {
      state.resources[key] = Math.min(maximum, Math.max(0, Math.trunc(Number(input.value)) || 0));
      state.resources.hitDice = Object.keys(character.hitDice).reduce((sum, die) => sum + state.resources[`hd${die}`], 0);
    }));
    row.append(label, input, element('small', `/ ${maximum}`)); resourceContainer.append(row);
  }
  const signature = JSON.stringify(saved.progression);
  if (signature === lastRenderedProgression) return;
  lastRenderedProgression = signature;
  const identity = Object.entries(character.classes).map(([classId, level]) => `${CLASS_TRAITS[classId].name} ${level}`).join(' / ');
  document.querySelector('.identity p').textContent = `Halfling Farmer / ${identity} / Neutral`;
  document.title = `Col Agen - ${identity} | Malt & Magic`;
  const abilityContainer = document.getElementById('abilities'); abilityContainer.replaceChildren();
  const saves = document.getElementById('saves'); saves.replaceChildren();
  for (const [ability, score] of Object.entries(character.abilities)) {
    const block = element('div', undefined, 'ability'); block.append(element('small', ability), element('b', String(score)), element('span', signed(modifier(score)))); abilityContainer.append(block);
    const proficient = ['Constitution', 'Charisma'].includes(ability) || character.classes.monk >= 14 || (character.classes.rogue >= 15 && ability === 'Wisdom');
    const row = element('div', undefined, 'row'); row.append(element('i', '', `dot ${proficient ? 'on' : ''}`), element('span', ability), element('span', signed(modifier(score) + (proficient ? character.proficiency : 0)), 'value')); saves.append(row);
  }
  const skills = document.getElementById('skills'); skills.replaceChildren();
  const skillBonuses = {};
  for (const [name, ability] of Object.entries(SKILL_ABILITIES)) {
    const proficient = character.skills.includes(name);
    const bonus = character.expertise.includes(name) ? character.proficiency * 2 : proficient ? character.proficiency : character.classes.bard >= 2 ? Math.floor(character.proficiency / 2) : 0;
    skillBonuses[name] = modifier(character.abilities[ability]) + bonus;
    const row = element('div', undefined, 'row'); row.append(element('i', '', `dot ${proficient ? 'on' : ''}`), element('span', name), element('span', signed(modifier(character.abilities[ability]) + bonus), 'value')); skills.append(row);
  }
  const stats = document.querySelectorAll('.header-stats strong');
  const dexterity = modifier(character.abilities.Dexterity);
  const strength = modifier(character.abilities.Strength);
  const charisma = modifier(character.abilities.Charisma);
  const armorClass = Math.max(10 + dexterity, character.choices.sorcerer?.subclass === 'draconic-sorcery' ? 10 + dexterity + charisma : 0, character.classes.barbarian ? 10 + dexterity + modifier(character.abilities.Constitution) : character.classes.monk ? 10 + dexterity + modifier(character.abilities.Wisdom) : 0);
  stats[0].textContent = String(armorClass);
  stats[0].title = 'Unarmored AC';
  stats[1].textContent = signed(dexterity + (character.feats.includes('Alert') ? character.proficiency : 0));
  stats[3].textContent = String(8 + charisma + character.proficiency); stats[4].textContent = signed(charisma + character.proficiency);
  for (const row of document.querySelectorAll('.panel-body.list .row')) {
    const name = row.querySelector('span')?.textContent;
    if (name?.startsWith('Passive ') && skillBonuses[name.slice(8)] !== undefined) row.querySelector('.value').textContent = String(10 + skillBonuses[name.slice(8)]);
  }
  for (const attack of document.querySelectorAll('#attacks .attack')) {
    const values = attack.querySelectorAll('.attack-top > span');
    const name = values[0].textContent;
    const ability = name === 'Dagger' ? Math.max(strength, dexterity) : strength;
    values[1].textContent = signed(ability + character.proficiency);
    values[2].textContent = name === 'Unarmed Strike' ? `${Math.max(0, 1 + strength)} Bludgeoning` : `${name === 'Spear' ? '1d6' : '1d4'}${signed(ability)} ${name === 'Sickle' ? 'Slashing' : 'Piercing'}`;
    if (name === 'Unarmed Strike') attack.querySelector('.attack-meta').textContent = `Grapple or Shove DC ${8 + character.proficiency + strength}`;
  }
  featureContainer.previousElementSibling.textContent = 'Class Features'; featureContainer.replaceChildren();
  for (const [classId, level] of Object.entries(character.classes)) {
    const classEntry = catalog.classes[classId];
    const subclass = classEntry.subclasses.find(entry => entry.id === character.choices[classId]?.subclass);
    const baselineLevel = saved.progression.baseline.classes[classId] || 0;
    const features = [...classEntry.features, ...(subclass?.features || [])].filter(feature => feature.level <= baselineLevel);
    features.push(...saved.progression.history.filter(entry => entry.classId === classId).flatMap(entry => entry.features));
    for (const feature of features) {
      const article = element('article', undefined, 'advancement-feature');
      article.append(element('h3', feature.name), details(feature.text, `${CLASS_TRAITS[classId].name} ${feature.level} / ${feature.source}`)); featureContainer.append(article);
    }
    for (const name of character.choices[classId]?.metamagic || []) {
      const info = classEntry.options.find(option => option.name === name);
      const article = element('article', undefined, 'advancement-feature'); article.append(element('h3', name), details(info?.text, info?.source)); featureContainer.append(article);
    }
    if (character.choices[classId]?.arcaneShots) {
      const die = level >= 18 ? 12 : level >= 15 ? 10 : level >= 10 ? 8 : 6;
      featureContainer.append(element('p', `Arcane Shots (UA 2025): ${character.choices[classId].arcaneShots.join(', ')} / d${die} / DC ${8 + character.proficiency + modifier(character.abilities.Intelligence)}`));
    }
  }
  if (saved.progression.baseline.tough) {
    const article = element('article', undefined, 'advancement-feature');
    article.append(element('h3', 'Tough'), element('p', `Recorded background feat: +${character.totalLevel * 2} maximum HP (${character.totalLevel} levels).`));
    featureContainer.append(article);
  }
  for (const entry of saved.progression.history) {
    if (!entry.choices.feat && !entry.choices.featureNotes) continue;
    const article = element('article', undefined, 'advancement-feature');
    article.append(element('h3', entry.choices.feat || `Level ${entry.level} Choices`));
    if (entry.choices.featureNotes) article.append(element('p', entry.choices.featureNotes));
    featureContainer.append(article);
  }
  const spellGrid = document.getElementById('spellGrid'); spellGrid.replaceChildren();
  const spellSummary = document.querySelector('.spell-summary'); spellSummary.replaceChildren();
  for (const casting of character.spellcasting) {
    spellSummary.append(element('span', `${casting.label || CLASS_TRAITS[casting.classId].name}: ${casting.ability} / DC ${casting.dc} / ${signed(casting.attack)}`));
    for (const name of [...new Set([...casting.cantrips, ...casting.spells, ...casting.granted])]) {
      const spell = Object.values(catalog.classes).flatMap(entry => entry.spells).find(entry => entry.name === name);
      const article = element('article', undefined, 'spell'); article.append(element('h3', name), element('small', `${CLASS_TRAITS[casting.classId].name} / ${spell ? spell.level ? `Level ${spell.level}` : 'Cantrip' : 'Supplemental'}${casting.granted.includes(name) ? ' / Always prepared' : ''}`, 'meta'));
      if (spell) {
        if (catalog.spellRules?.[name]) article.append(details(catalog.spellRules[name], 'SRD 5.2.1'));
        const link = element('a', 'Spell Rules'); link.href = `https://github.com/downfallx/dnd-5e-srd-markdown/blob/master/spells.md#${name.toLowerCase().replace(/'/g, '').replace(/[^a-z0-9]+/g, '-')}`; link.target = '_blank'; link.rel = 'noopener'; article.append(link);
      }
      spellGrid.append(article);
    }
  }
}

async function rest(long) {
  const saved = sheet.getState();
  const character = deriveCharacter(saved.progression);
  if (long) {
    if (!confirm('Complete a Long Rest and restore HP and class resources?')) return;
    sheet.updatePlay(state => { state.hp = { current: character.hpMax, max: character.hpMax, temp: 0 }; state.resources = { ...character.resources }; });
    return;
  }
  const dice = await window.chooseRestHitDice?.(Object.entries(character.hitDice).map(([die]) => ({ type: `hd${die}`, label: `d${die}`, size: Number(die), available: saved.resources[`hd${die}`] })));
  if (!dice) return;
  sheet.updatePlay(state => {
    for (const die of dice) {
      state.resources[`hd${die.size}`] -= 1;
      const rolled = die.roll ?? Math.floor(Math.random() * die.size) + 1;
      state.hp.current = Math.min(state.hp.max, state.hp.current + Math.max(0, rolled + modifier(character.abilities.Constitution)));
    }
    state.resources.hitDice = Object.keys(character.hitDice).reduce((sum, die) => sum + state.resources[`hd${die}`], 0);
    for (const key of ['focus', 'actionSurge', 'pact', 'arcaneShot']) if (character.resources[key]) state.resources[key] = character.resources[key];
    for (const key of ['rage', 'secondWind', 'clericChannel', 'paladinChannel', 'wildShape']) if (character.resources[key]) state.resources[key] = Math.min(character.resources[key], state.resources[key] + 1);
    if (character.classes.bard >= 5) state.resources.inspiration = character.resources.inspiration;
  });
}

window.colAdvancement = { render, rest };
button.disabled = false;
render();