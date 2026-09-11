import { catalog, createProgression, deriveCharacter } from './advancement-engine.mjs';
import { renderSpellPreview } from './col-agen-spell-preview.mjs?v=spell-preview-1';

export function usageCharacter(state) {
  const character = deriveCharacter(state.progression || createProgression(state));
  if (!state.progression) character.resources = { innate: 2, sorcery: 2, slots1: 3, hitDice: 2 };
  return character;
}

export function recoveryLabel(key, character) {
  if (['focus', 'actionSurge', 'pact', 'arcaneShot'].includes(key) || (key === 'inspiration' && character.classes.bard >= 5)) return 'Short or Long Rest';
  if (['rage', 'secondWind', 'clericChannel', 'paladinChannel', 'wildShape'].includes(key)) return '+1 on Short Rest / All on Long Rest';
  return 'Long Rest';
}

export function spellModes(character, name, progression) {
  const spell = Object.values(catalog.classes).flatMap(entry => entry.spells).find(entry => entry.name === name);
  if (!spell) return [];
  if (spell.level === 0) return [{ key: '', label: 'At will', level: 0 }];
  const modes = Object.entries(character.resources)
    .filter(([key, maximum]) => /^slots[1-9]$/.test(key) && maximum > 0 && Number(key.slice(5)) >= spell.level)
    .map(([key]) => ({ key, label: `Level ${key.slice(5)} slot`, level: Number(key.slice(5)) }));
  if (character.resources.pact && character.pactLevel >= spell.level) modes.push({ key: 'pact', label: `Pact slot / Level ${character.pactLevel}`, level: character.pactLevel });
  for (const entry of progression?.history || []) {
    if (entry.choices.feat === 'Magic Initiate' && entry.choices.initiateSpell?.includes(name)) modes.unshift({ key: `initiate-${entry.id}`, label: 'Magic Initiate / Free cast', level: 1 });
  }
  if (character.choices.warlock?.[`arcanum${spell.level}`] === name) modes.unshift({ key: `arcanum${spell.level}`, label: 'Mystic Arcanum', level: spell.level });
  if (name === "Hunter's Mark" && character.resources.favoredEnemy) modes.unshift({ key: 'favoredEnemy', label: 'Favored Enemy / Free cast', level: 1 });
  if (/Casting Time:[^\n]*Ritual/.test(catalog.spellRules[name] || '')) modes.push({ key: '', label: 'Ritual / +10 minutes', level: spell.level });
  return modes;
}

export function spendResource(state, maximums, key, cost = 1) {
  if (!Number.isInteger(cost) || cost < 1 || !Object.hasOwn(maximums, key) || !Number.isInteger(state.resources[key]) || state.resources[key] < cost) return false;
  state.resources[key] -= cost;
  return true;
}

export function recoverShortRest(state, character, restoreSorcery = false) {
  for (const key of ['focus', 'actionSurge', 'pact', 'arcaneShot']) if (character.resources[key]) state.resources[key] = character.resources[key];
  for (const key of ['rage', 'secondWind', 'clericChannel', 'paladinChannel', 'wildShape']) if (character.resources[key]) state.resources[key] = Math.min(character.resources[key], state.resources[key] + 1);
  if (character.classes.bard >= 5) state.resources.inspiration = character.resources.inspiration;
  if (restoreSorcery && state.resources.sorcerousRestoration > 0 && state.resources.sorcery < character.resources.sorcery) {
    state.resources.sorcery = Math.min(character.resources.sorcery, state.resources.sorcery + Math.floor(character.classes.sorcerer / 2));
    state.resources.sorcerousRestoration -= 1;
  }
}

export function mountUsage(sheet, resourceContainer, featureContainer, resourceNames) {
  const controls = new Map();
  let undo = null;
  const fingerprint = state => JSON.stringify([state.resources, state.hp, state.progression, state.updatedAt]);
  const node = (tag, text, className) => {
    const result = document.createElement(tag);
    if (text !== undefined) result.textContent = text;
    if (className) result.className = className;
    return result;
  };
  const command = (label, icon) => {
    const button = node('button', undefined, 'command usage-command');
    button.type = 'button';
    const image = node('img'); image.src = `../assets/icons/col-agen/${icon}.svg`; image.alt = '';
    button.append(image, node('span', label));
    return button;
  };
  const feedback = node('div', undefined, 'usage-feedback');
  const message = node('span', ''); message.setAttribute('role', 'status');
  const undoButton = command('', 'arrow-left'); undoButton.title = 'Undo last use'; undoButton.setAttribute('aria-label', 'Undo last use'); undoButton.hidden = true;
  const dismiss = command('', 'x'); dismiss.title = 'Dismiss usage notification'; dismiss.setAttribute('aria-label', 'Dismiss usage notification');
  dismiss.addEventListener('click', () => { message.textContent = ''; undo = null; undoButton.hidden = true; });
  feedback.append(message, undoButton, dismiss); document.querySelector('.tab-panel').before(feedback);
  undoButton.addEventListener('click', () => {
    if (!undo || sheet.busy || sheet.finalizing || fingerprint(sheet.getState()) !== undo.after) return;
    const previous = undo; undo = null;
    sheet.updatePlay(state => { state.resources[previous.key] += previous.cost; });
    message.textContent = `${previous.name}: use undone.`;
    undoButton.hidden = true;
  });
  const add = (host, name, modes, verb = 'Use', cost = 1) => {
    const wrapper = node('div', undefined, 'usage-controls');
    const select = node('select'); select.setAttribute('aria-label', `${name} casting resource`);
    modes.forEach((mode, index) => { const option = node('option', mode.label); option.value = String(index); select.append(option); });
    select.hidden = modes.length < 2;
    const use = command(cost > 1 ? `${verb} ${cost} SP` : verb, verb === 'Cast' ? 'book-open' : 'swords');
    use.setAttribute('aria-label', `${verb} ${name}`);
    const count = node('small', '', 'usage-count');
    wrapper.append(select, use, count);
    const rules = host.querySelector('.spell-full-rules');
    if (rules) rules.before(wrapper); else host.append(wrapper);
    controls.set(wrapper, { modes, select, use, count, name, cost });
    select.addEventListener('change', refresh);
    use.addEventListener('click', () => {
      if (sheet.busy || sheet.finalizing) return;
      const mode = modes[Number(select.value)];
      if (!mode.key) { message.textContent = `${name}: ${mode.label}. No resource spent.`; return; }
      const caps = usageCharacter(sheet.getState()).resources;
      let spent = false;
      undo = null;
      sheet.updatePlay(state => { spent = spendResource(state, caps, mode.key, cost); });
      if (spent) {
        undo = { key: mode.key, cost, name, after: fingerprint(sheet.getState()) };
        message.textContent = `${name}: ${cost} spent / ${sheet.getState().resources[mode.key]} remaining.`;
      }
      refresh();
    });
  };
  function refresh() {
    const saved = sheet.getState();
    const character = usageCharacter(saved);
    if (undo && fingerprint(saved) !== undo.after) undo = null;
    undoButton.hidden = !undo;
    for (const [wrapper, control] of controls) {
      if (!wrapper.isConnected) { controls.delete(wrapper); continue; }
      const { modes, select, use, count, cost } = control;
      modes.forEach((mode, index) => {
        select.options[index].textContent = mode.key ? `${mode.label} (${saved.resources[mode.key] ?? 0}/${character.resources[mode.key] ?? 0})` : mode.label;
      });
      const mode = modes[Number(select.value)];
      const remaining = saved.resources[mode.key] ?? 0;
      use.disabled = Boolean(sheet.busy || sheet.finalizing || (mode.key && remaining < cost));
      count.textContent = mode.key ? `${mode.label}: ${remaining} / ${character.resources[mode.key]} remaining / ${recoveryLabel(mode.key, character)}` : mode.label;
      use.title = mode.key ? `${control.name}: spend ${cost} ${mode.label}; ${count.textContent}` : `${control.name}: ${mode.label}`;
      wrapper.classList.toggle('is-exhausted', Boolean(mode.key && remaining < cost));
    }
  }
  function render() {
    const saved = sheet.getState();
    const character = usageCharacter(saved);
    for (const article of document.querySelectorAll('#spellGrid .spell')) {
      if (article.querySelector('.usage-controls')) continue;
      const heading = article.querySelector('h3').cloneNode(true);
      heading.querySelectorAll('.tag,button').forEach(child => child.remove());
      const name = heading.textContent.trim();
      renderSpellPreview(article, name);
      const modes = spellModes(character, name, saved.progression);
      if (modes.length) add(article, name, modes, 'Cast');
    }
    const featureKeys = { 'Innate Sorcery': 'innate', 'Rage': 'rage', 'Second Wind': 'secondWind', 'Action Surge': 'actionSurge', 'Indomitable': 'indomitable', 'Bardic Inspiration': 'inspiration', 'Wild Shape': 'wildShape', 'Arcane Shot': 'arcaneShot' };
    for (const article of featureContainer.querySelectorAll('article')) {
      if (article.querySelector('.usage-controls')) continue;
      const heading = article.querySelector('h3').cloneNode(true);
      heading.querySelectorAll('button').forEach(child => child.remove());
      const name = heading.textContent.trim();
      const metamagic = catalog.classes.sorcerer.options.find(option => option.name === name && /^Cost: \d+ Sorcery Point/.test(option.text));
      const key = metamagic ? 'sorcery' : featureKeys[name];
      if (key && character.resources[key]) {
        const cost = metamagic ? Number(metamagic.text.match(/^Cost: (\d+)/)[1]) : 1;
        add(article, name, [{ key, label: resourceNames[key] }], 'Use', cost);
      }
    }
    for (const row of resourceContainer.querySelectorAll('.resource,.advancement-resource')) {
      if (row.querySelector('.usage-controls')) continue;
      const key = row.querySelector('[data-resource]')?.dataset.resource || row.querySelector('input')?.id.replace('advanced-resource-', '');
      if (!key || key === 'hitDice' || key.startsWith('hd') || key === 'sorcerousRestoration') continue;
      const name = resourceNames[key] || row.querySelector('label,strong').textContent;
      add(row, name, [{ key, label: name }]);
    }
    refresh();
  }
  return { render };
}