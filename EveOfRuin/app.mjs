import { buildPack, validatePack, createCombatant, applyDamage, applyHealing, sortCombatants } from './model.mjs';
import { openStore, readCampaign, writeCampaign, initialState, validateState, validateAssets, MAX_BACKUP_BYTES, assetMatches, mergeAssets } from './storage.mjs';
import { escapeHTML as e, renderMarkdown } from './markdown.mjs';

const main = document.querySelector('#main');
const modal = document.querySelector('#modal');
const views = new Set(['dashboard', 'reader', 'sanctum', 'combat', 'journal', 'library']);
let db;
let campaign = null;
let view = 'dashboard';
let pendingPreset = null;
let noteTimer;
let unsaved = false;
let importBusy = false;
let saving = 0;
let revision = 0;

const uid = () => crypto.randomUUID();
const list = items => items?.length ? `<ul>${items.map(item => `<li>${e(item)}</li>`).join('')}</ul>` : '';
const state = () => campaign.state;
const allStats = () => [...campaign.pack.statblocks, ...state().customStatblocks];
const selectedDocument = () => campaign.pack.documents.find(doc => doc.id === state().selected.documentId) ?? campaign.pack.documents[0];
const selectedSection = () => selectedDocument().sections.find(section => section.id === state().selected.sectionId);
const chapterGuide = doc => campaign.pack.guides.chapters.find(chapter => chapter.file === doc.filename);
const activeEncounter = () => state().encounters.find(encounter => encounter.id === state().activeEncounterId);
const noteKey = () => `${selectedDocument().id}::${selectedSection()?.id ?? 'whole-chapter'}`;
const option = (value, label, selected = false) => `<option value="${e(value)}"${selected ? ' selected' : ''}>${e(label)}</option>`;
const button = (label, action, extra = '', quiet = true) => `<button type="button" data-action="${action}" ${extra}${quiet ? ' class="quiet"' : ''}>${e(label)}</button>`;

function error(errorValue) {
  const banner = document.querySelector('#error-banner');
  banner.textContent = errorValue instanceof Error ? errorValue.message : String(errorValue);
  banner.hidden = false;
  if (unsaved) document.querySelector('#save-status').textContent = 'Unsaved changes — export a backup';
}

function announce(text) {
  document.querySelector('#notice').textContent = text;
}

async function guarded(action) {
  try {
    await action();
  } catch (failure) {
    error(failure);
  }
}

async function persist() {
  if (!campaign || !db) throw new Error('Local storage is unavailable. Do not close this page before exporting your work.');
  clearTimeout(noteTimer);
  unsaved = true;
  saving += 1;
  const savedRevision = ++revision;
  document.querySelector('#save-status').textContent = 'Saving on this device…';
  try {
    await writeCampaign(db, campaign);
    if (savedRevision === revision) {
      unsaved = false;
      document.querySelector('#save-status').textContent = 'All changes saved locally';
    }
  } finally {
    saving -= 1;
  }
}

function scheduleSave() {
  unsaved = true;
  revision += 1;
  document.querySelector('#save-status').textContent = 'Unsaved changes…';
  clearTimeout(noteTimer);
  noteTimer = setTimeout(() => guarded(persist), 350);
}

function heading(kicker, title, description = '') {
  return `<div class="page-heading"><div><p class="eyebrow">${e(kicker)}</p><h1>${e(title)}</h1>${description ? `<p class="muted">${e(description)}</p>` : ''}</div></div>`;
}

function importPanel() {
  return `<div class="card"><h2>Bring your campaign to the desk</h2>
    <p>Choose your private campaign pack or a full portal backup. Nothing is uploaded. The pack includes the supplied chapters, statblocks, and source-linked GM guidance.</p>
    <label>Private campaign pack or backup (.json)
      <input id="pack-import" type="file" accept=".json,application/json">
    </label>
    <p class="help">Prepared locally with <code>node EveOfRuin/scripts/build-pack.mjs --require-guides</code>. The resulting file is in <code>EveOfRuin/.private/campaign-pack.json</code>, not on this website. Download that file from your workspace, then select it here.</p>
    <details><summary>Import source Markdown instead</summary>
      <p>Choose the introduction, all 11 chapters, and appendices A–C together. This preserves the full text and extracts supplied statblocks, but does not include the separately prepared GM coaching. The combined omnibus is unnecessary.</p>
      <label>Adventure Markdown files<input id="markdown-import" type="file" accept=".md,text/markdown" multiple></label>
    </details>
    <p class="help">Browser data is specific to this device, browser profile, and site address. It is not a backup or access-controlled account. Anyone with access to this browser profile can read it. Export regularly and keep backups private.</p>
  </div>`;
}

function welcome() {
  return `${heading('A PRIVATE TABLE · A SEPARATE STORY', 'Your campaign, within reach.', 'A quiet place to prepare, run, and hand off Eve of Ruin. Built for the GM behind the screen.')}
    <div class="hero-card"><p class="eyebrow">STARTING AT CHAPTER SIX</p><h2>Less page hunting.<br>More time at the table.</h2><p>Keep the full source beside scene guidance. Return to the Sanctum with a clear purpose. Track each adversary independently, and leave the next session a useful handoff.</p><span class="tag">NO ADVENTURE CONTENT HOSTED</span></div>
    <div class="grid">${importPanel()}<div>
      <div class="card"><h2>What stays private</h2><p>Your adventure text, maps, notes, and combat state live only in this browser's local database. This app has no upload endpoint, analytics, external fonts, or remote source requests.</p></div>
      <div class="card"><h2>Nothing quietly invented</h2><p>The portal distinguishes supplied adventure text, optional GM coaching, and your table's actual history. Missing maps, statblocks, and external rule references remain visible gaps until you supply them.</p></div>
      <div class="card"><h2>Ready without a connection</h2><p>After the app confirms offline readiness, the imported campaign works offline at this same address. Export a backup before clearing browser data or changing devices.</p><p id="welcome-offline" class="help">Check offline readiness in Library &amp; coverage after import.</p></div>
    </div></div>`;
}

function renderNavigation() {
  document.querySelectorAll('[data-view]').forEach(link => {
    if (link.dataset.view === view) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.querySelector('#export-button').disabled = !campaign;
  document.querySelector('#chapter-nav').innerHTML = campaign ? `<p class="eyebrow">SOURCE LIBRARY</p>${campaign.pack.documents.map(doc =>
    `<button type="button" data-doc="${e(doc.id)}" class="${doc.id === state().selected.documentId ? 'current' : ''}">${e(doc.title)}</button>`).join('')}` : '';
}

function render() {
  renderNavigation();
  if (!campaign) {
    main.innerHTML = welcome();
    return;
  }
  const renderers = { dashboard, reader, sanctum, combat, journal, library };
  main.innerHTML = renderers[view]();
}

function dashboard() {
  const doc = selectedDocument();
  const guide = chapterGuide(doc);
  const section = selectedSection();
  const encounter = activeEncounter();
  const noGuides = !campaign.pack.guides.chapters.length;
  return `${heading('THE CAMPAIGN DESK', 'Pick up the thread.', 'Your table’s actual history belongs here. Chapter 6 is the starting bookmark—not a claim about what your party has done.')}
    <div class="hero-card"><p class="eyebrow">YOUR READING POSITION</p><h2>${e(doc.title)}</h2><p>${e(section?.heading ?? guide?.summary ?? 'Open the supplied chapter and choose the exact scene where your next session begins.')}</p>
      <div class="actions"><a class="button" href="#reader">Continue preparing</a><a class="button quiet" href="#journal">Update campaign handoff</a></div></div>
    ${noGuides ? '<div class="warning">This source-only import has no prepared GM coaching or encounter presets. Import the locally built campaign pack to add them.</div>' : ''}
    ${campaign.pack.coverage.missing.length ? `<div class="warning">Source set incomplete: ${e(campaign.pack.coverage.missing.join(', '))}. See Library &amp; coverage.</div>` : ''}
    <div class="grid">
      <div class="card"><p class="eyebrow">BEFORE YOU RUN</p><h2>A clear starting point</h2>${list(guide?.startHere)}<p class="help">Source-based preparation, not confirmed events. Read the full scene before resolving a branch.</p><div class="actions"><a class="button quiet" href="#reader">Open chapter &amp; scenes</a></div></div>
      <div class="card"><p class="eyebrow">YOUR TABLE'S LAST SESSION</p><h2>The handoff</h2><p>${e(state().handoff.recap || 'No recap recorded yet. Record the party’s location, what they actually learned, and the decision currently in front of them.')}</p><p><strong>Next session:</strong> ${e(state().handoff.nextSession || 'Not recorded.')}</p><a href="#journal">Write the handoff</a></div>
    </div>
    <div class="grid three">
      <div class="card"><p class="eyebrow">THE PEOPLE BETWEEN ADVENTURES</p><h2>Sigil Sanctum</h2><p>Purpose, knowledge boundaries, and optional original dialogue for the NPCs. Availability is tied to the story, not assumed.</p><a href="#sanctum">Prepare a return</a></div>
      <div class="card"><p class="eyebrow">AT THE TABLE</p><h2>${e(encounter?.title ?? 'Encounter tracker')}</h2><p>${encounter ? `${encounter.combatants.length} individuals · Round ${encounter.round}. Saved between sessions.` : 'Load a source-linked encounter, choose quantities, and track each individual. No dice are rolled automatically.'}</p><a href="#combat">Open encounter desk</a></div>
      <div class="card"><p class="eyebrow">CHECK YOUR MATERIALS</p><h2>Coverage, not guesses</h2><p>${campaign.pack.documents.length} source documents · ${campaign.pack.statblocks.length} supplied statblocks. External references and images need a separate completeness check.</p><a href="#library">Inspect the library</a></div>
    </div>
    <details><summary>Campaign orientation &amp; chapter roadmap — GM spoilers</summary><p>These are the printed adventure’s premise and possible progression, not a retrospective of your group. Check the handoff for actual events.</p>
      ${campaign.pack.guides.chapters.map(chapter => {
        const chapterDoc = campaign.pack.documents.find(item => item.filename === chapter.file);
        return `<div class="card"><h2>${e(chapterDoc?.title ?? chapter.file)}</h2><p>${e(chapter.summary)}</p>${list(chapter.startHere)}${sourceButton(chapter.file, '', 'Open complete chapter')}</div>`;
      }).join('') || '<p>No curated roadmap was imported. Use the introduction and chapter library to review the original adventure.</p>'}
    </details>`;
}

function sceneFor(doc, section) {
  const guide = chapterGuide(doc);
  if (!section || !guide) return null;
  return guide.scenes.find(scene => scene.heading === section.heading) ?? null;
}

function sceneGuidance(doc, section) {
  const guide = chapterGuide(doc);
  const scene = sceneFor(doc, section);
  if (!scene) return `<div class="card"><span class="tag advice">GM COACHING</span><h2>Prepare this passage</h2>
    ${section ? '<p>No dedicated scene card is attached to this heading. Use the complete source alongside the chapter preparation below.</p>' : `<p>${e(guide?.summary ?? 'No prepared chapter guidance was imported.')}</p>`}
    ${list(guide?.startHere)}<h3>At the table</h3><ul><li>Separate what the characters can perceive from GM-only explanations.</li><li>Check the source for triggers, checks, alternatives, and consequences before resolving an action.</li><li>Record what actually happened; do not treat the book’s possible outcomes as your party’s history.</li></ul></div>`;
  return `<div class="card"><span class="tag advice">SOURCE-GROUNDED GM COACHING</span><h2>${e(scene.purpose)}</h2>${list(scene.tips)}
    ${scene.watchFor?.length ? `<h3>Keep in view</h3>${list(scene.watchFor)}` : ''}
    ${scene.next?.length ? `<h3>Where this leads</h3>${list(scene.next)}` : ''}</div>
    ${(scene.encounters ?? []).map((encounter, index) => `<div class="card"><span class="tag">POTENTIAL ENCOUNTER</span><h2>${e(encounter.name)}</h2><p><strong>Trigger:</strong> ${e(encounter.trigger)}</p>
      ${list(encounter.creatures.map(creature => `${creature.count ?? 'Variable / choose count'} × ${creature.name}${creature.note ? ` — ${creature.note}` : ''}`))}
      ${encounter.tactics?.length ? `<h3>Source-based tactics</h3>${list(encounter.tactics)}` : ''}
      <p><strong>Resolution:</strong> ${e(encounter.resolution)}</p>
      ${button('Set up individuals', 'preset', `data-preset="${index}"`, false)}
      <p class="help">Review quantities and variant changes first. A potential encounter is not automatically a fight.</p></div>`).join('')}`;
}

function relatedImages(doc) {
  const chapter = doc.filename.match(/^(\d{2})-/)?.[1];
  if (!chapter) return '';
  const images = campaign.assets.filter(asset => {
    const imageChapter = asset.name.replace(/^map-/i, '').match(/^(\d{1,2})[-.]/)?.[1];
    return imageChapter !== undefined && Number(imageChapter) === Number(chapter);
  });
  if (!images.length) return '';
  return `<details><summary>Chapter image library (${images.length})</summary><p class="help">Grouped by the original filenames. Verify the correct map and GM/player version before showing an image.</p><div class="actions">${images.map(asset => button(asset.name, 'asset', `data-id="${e(asset.id)}"`)).join('')}</div></details>`;
}

function reader() {
  const doc = selectedDocument();
  const section = selectedSection();
  const position = doc.sections.findIndex(item => item.id === section?.id);
  const key = noteKey();
  return `${heading('ADVENTURE CHAPTERS', section?.heading ?? doc.title)}
    <div class="reading-toolbar">
      <label>Chapter or appendix<select id="document-select">${campaign.pack.documents.map(item => option(item.id, item.title, item.id === doc.id)).join('')}</select></label>
      <label>Section / keyed area<select id="section-select">${option('', 'Complete chapter — all source text', !section)}${doc.sections.map(item => option(item.id, `${'· '.repeat(Math.max(0, item.level - 1))}${item.heading}`, item.id === section?.id)).join('')}</select></label>
    </div>
    <div class="actions space"><div class="actions">
      ${button('Previous section', 'previous-section', position < 0 ? 'disabled' : '')}
      ${button('Next section', 'next-section', position >= doc.sections.length - 1 ? 'disabled' : '')}
      ${button('Mark as ' + (state().completed.includes(key) ? 'not prepared' : 'prepared'), 'complete')}
    </div><span class="tag">${state().completed.includes(key) ? 'PREPARED' : 'NOT MARKED PREPARED'}</span></div>
    <div class="actions">${button('Previous document', 'previous-document', campaign.pack.documents.indexOf(doc) === 0 ? 'disabled' : '')}${button('Next document', 'next-document', campaign.pack.documents.indexOf(doc) === campaign.pack.documents.length - 1 ? 'disabled' : '')}</div>
    ${relatedImages(doc)}
    <div class="reading-layout"><article class="source" id="source-text"><div class="source-label"><span>Supplied adventure text · GM only</span><span>${e(doc.filename)}</span></div>${renderMarkdown(section?.markdown ?? doc.markdown, campaign.assets)}</article>
      <aside class="guide" aria-label="Scene preparation">${sceneGuidance(doc, section)}
        <div class="card"><h2>Your scene notes</h2><label>What happened / rulings / next cue<textarea id="section-notes" rows="7" placeholder="Actual table history, not assumed outcomes.">${e(state().notes[key] ?? '')}</textarea></label><p class="help">Saved locally while you type. “Prepared” tracks your reading, not the party’s progress.</p></div>
      </aside></div>`;
}

function sourceButton(file, sectionHeading, label = 'Open source passage') {
  return button(label, 'source', `data-file="${e(file)}" data-heading="${e(sectionHeading ?? '')}"`);
}

function sanctum() {
  return `${heading('SIGIL SANCTUM', 'Make the return matter.', 'Use these as preparation cues, not a script that overrides the party. All secrets and future revelations below are GM-only.')}
    <div class="warning">The current plot stage matters. Choose the applicable visit before using a prompt. Suggested dialogue is original GM coaching, not a quotation from the module or a new canonical event.</div>
    ${campaign.pack.guides.sanctum.length ? campaign.pack.guides.sanctum.map(visit => `<details class="sanctum-visit"><summary>${e(visit.title)}</summary>
      <p><strong>When this applies:</strong> ${e(visit.when)}</p>
      ${visit.spoilers ? `<div class="warning"><strong>GM-only boundary:</strong> ${e(visit.spoilers)}</div>` : ''}
      ${sourceButton(visit.chapterFile, visit.heading)}
      <h3>Briefing and continuity</h3>${list(visit.briefing)}
      ${(visit.npcs ?? []).map(npc => `<section class="npc"><h2>${e(npc.name)}</h2><p><strong>Knows:</strong> ${e(npc.knows)}</p><p><strong>Wants:</strong> ${e(npc.wants)}</p><p><span class="tag advice">OPTIONAL PORTRAYAL</span> ${e(npc.portrayal)}</p><div class="dialogue">${list(npc.prompts)}</div><p><strong>Guardrail:</strong> ${e(npc.guardrail)}</p></section>`).join('')}
      <div class="grid"><div><h3>Before departure</h3>${list(visit.departure)}</div><div><h3>On return</h3>${list(visit.return)}</div></div>
    </details>`).join('') : '<div class="empty">No Sanctum coaching is present in this import. Import the prepared campaign pack. The complete Wizards Three chapter remains in Adventure chapters.</div>'}
    <div class="card"><h2>Keep the conversation grounded</h2><p>Start with what the party reports. Consult the applicable source for what each NPC knows and can do. Do not let a future revelation leak into an earlier portrayal. Finish with a clear next step, and record promises or unresolved questions in the handoff.</p><a href="#journal">Record the conversation’s consequences</a></div>`;
}

function journal() {
  const fields = [
    ['party', 'Party & campaign position', 'Character names, levels, key abilities, exact location, and current scene.'],
    ['recap', 'Last session — what actually happened', 'Decisions, NPC outcomes, discoveries, combat results, and current stakes.'],
    ['decisions', 'Continuity & rulings', 'Rod pieces actually held, promises, house rules, departures from the printed adventure.'],
    ['threads', 'Open questions & NPC relationships', 'Who knows what, loose ends, allies, enemies, and Sanctum conversations.'],
    ['nextSession', 'Next session opening', 'Opening situation, immediate choices, and material to prepare.']
  ];
  return `${heading('CAMPAIGN HANDOFF', 'Leave a usable trail.', 'A different GM should be able to distinguish the printed adventure from your group’s story. Nothing here is filled in as an assumed outcome.')}
    <div class="grid">${fields.map(([key, label, placeholder]) => `<div class="card"><label>${label}<textarea data-handoff="${key}" rows="6" placeholder="${e(placeholder)}">${e(state().handoff[key])}</textarea></label></div>`).join('')}</div>
    <div class="card"><h2>Secrets ledger</h2><p>Record only secrets the party has actually learned. Mark spent only when your table uses one under the adventure’s rules. This ledger does not grant a mechanical benefit automatically.</p>
      ${sourceButton('00-introduction.md', 'Power of Secrets', 'Read the supplied secrets rules')}
      ${sourceButton('appendix-c-secrets-tracker.md', '', 'Open the supplied secrets tracker')}
      <form id="secret-form" class="fields"><label>New discovered secret<textarea name="secret" required maxlength="20000"></textarea></label><div><button type="submit">Record secret</button></div></form>
      ${state().secrets.map(secret => `<div class="card"><label><input type="checkbox" data-secret="${e(secret.id)}"${secret.used ? ' checked' : ''}>Spent at our table</label><p>${e(secret.text)}</p>${button('Remove entry', 'remove-secret', `data-id="${e(secret.id)}"`)}</div>`).join('')}
    </div>`;
}

function statOptions(selected = '') {
  return option('', 'Choose a supplied or custom statblock', !selected) + allStats().map(stat => option(stat.id, `${stat.name} · AC ${stat.ac} · HP ${stat.hp}`, stat.id === selected)).join('');
}

function combatantCard(actor, encounter) {
  const stat = allStats().find(item => item.id === actor.statblockId);
  return `<article class="combatant${actor.id === encounter.turnId ? ' active' : ''}${actor.hp === 0 ? ' defeated' : ''}" data-actor-card="${e(actor.id)}">
    <div class="combatant-top"><div><h3>${e(actor.name)}</h3><span class="tag">${actor.id === encounter.turnId ? 'CURRENT TURN' : 'INDIVIDUAL'}${actor.hp === 0 ? ' · 0 HP' : ''}</span></div><div class="hp">${actor.hp} / ${actor.maxHp} <small>HP</small>${actor.tempHp ? ` + ${actor.tempHp} temp` : ''}</div></div>
    <progress class="health-bar" value="${actor.hp}" max="${actor.maxHp}" aria-label="${e(actor.name)} hit points"></progress>
    <div class="fields three">
      <label>Name<input data-actor="${e(actor.id)}" data-field="name" value="${e(actor.name)}" maxlength="200" required></label>
      <label>Initiative<input type="number" data-actor="${e(actor.id)}" data-field="initiative" value="${actor.initiative ?? ''}" min="-1000" max="1000" step="1"></label>
      <label>Armor Class<input type="number" data-actor="${e(actor.id)}" data-field="ac" value="${actor.ac}" min="0" max="1000000" step="1" required></label>
      <label>Maximum HP<input type="number" data-actor="${e(actor.id)}" data-field="maxHp" value="${actor.maxHp}" min="1" max="1000000" step="1" required></label>
      <label>Current HP<input type="number" data-actor="${e(actor.id)}" data-field="hp" value="${actor.hp}" min="0" max="${actor.maxHp}" step="1" required></label>
      <label>Temporary HP<input type="number" data-actor="${e(actor.id)}" data-field="tempHp" value="${actor.tempHp}" min="0" max="1000000" step="1" required></label>
    </div>
    <form class="damage-form" data-damage="${e(actor.id)}"><label>Amount<input name="amount" type="number" min="0" max="1000000" step="1" required value="1"></label><button type="submit" name="operation" value="damage">Apply damage</button><button type="submit" name="operation" value="heal" class="quiet">Heal</button></form>
    <details><summary>Conditions, limited uses &amp; notes</summary><div class="fields">
      <label>Conditions / duration<input data-actor="${e(actor.id)}" data-field="conditions" value="${e(actor.conditions)}" placeholder="Record conditions and when they end."></label>
      <label>Limited resources / recharge<textarea data-actor="${e(actor.id)}" data-field="resourceNotes" placeholder="Legendary resistances used, spell uses, breath recharge, concentration…">${e(actor.resourceNotes)}</textarea></label>
      <label>Variants / tactics / notes<textarea data-actor="${e(actor.id)}" data-field="notes">${e(actor.notes)}</textarea></label>
    </div></details>
    <p data-condition-summary${actor.conditions ? '' : ' hidden'}><strong>Conditions:</strong> <span>${e(actor.conditions)}</span></p>
    <div class="actions">
      ${stat ? button('View full statblock', 'statblock', `data-id="${e(stat.id)}"`) : '<span class="tag">MANUAL COMBATANT · NO STATBLOCK</span>'}
      ${button('Set current turn', 'set-turn', `data-id="${e(actor.id)}"`)}
      ${button('Remove individual', 'remove-actor', `data-id="${e(actor.id)}"`)}
    </div></article>`;
}

function combat() {
  const encounter = activeEncounter();
  return `${heading('ENCOUNTER DESK', 'Every adversary, individually.', 'Track mechanics from the supplied statblocks. Damage uses temporary HP first; healing stops at maximum HP. Conditions, recharge, resistances, and limited resources are adjudicated and recorded by the GM.')}
    <div class="card"><div class="fields two"><label>Saved encounter<select id="encounter-select">${option('', 'Choose an encounter', !encounter)}${state().encounters.map(item => option(item.id, item.title, item.id === encounter?.id)).join('')}</select></label>
      <form id="new-encounter-form"><label>New encounter name<input name="title" required maxlength="200" placeholder="Name your next encounter"></label><button type="submit">Create encounter</button></form></div>
      <p class="help">Source-linked presets are attached to individual scene cards in Adventure chapters. Preset quantities always require review; reinforcements and optional combat are not spawned automatically.</p></div>
    ${encounter ? `<div class="actions space"><div><h2>${e(encounter.title)}</h2><p>Round ${encounter.round} · ${encounter.combatants.length} individuals</p></div><div class="actions">${button('Next turn', 'next-turn', encounter.combatants.length ? '' : 'disabled', false)}${button('Sort initiative', 'sort-initiative')}${button('Delete encounter', 'delete-encounter')}</div></div>
      <details><summary>Add combatants from a statblock</summary><form id="add-actors-form" class="fields"><label>Statblock<select name="statblock" required>${statOptions()}</select></label><div class="fields three">
      <label>Number of individuals<input name="count" type="number" value="1" min="1" max="100" step="1" required></label><label>Display name (optional)<input name="name" maxlength="200"></label><label>Initiative (optional)<input name="initiative" type="number" min="-1000" max="1000" step="1"></label></div><button type="submit">Add separate individuals</button></form></details>
      <details><summary>Add a PC / manual combatant</summary><form id="manual-actor-form" class="fields"><div class="fields two"><label>Name<input name="name" required maxlength="200"></label><label>Armor Class<input name="ac" type="number" min="0" max="1000000" step="1" required></label><label>Maximum HP<input name="hp" type="number" min="1" max="1000000" step="1" required></label><label>Initiative (optional)<input name="initiative" type="number" min="-1000" max="1000" step="1"></label></div><button type="submit">Add individual</button></form></details>
      ${encounter.combatants.length ? sortCombatants([...encounter.combatants]).map(actor => combatantCard(actor, encounter)).join('') : '<div class="empty">No combatants yet. Add a statblock above or start from an adventure scene.</div>'}
      <p class="help">Enter or roll initiative at your table. Equal initiatives retain their addition order. Use “Set current turn” for a tie ruling. Turns include 0-HP combatants until you remove or skip them; no death or defeat outcome is assumed.</p>` :
    '<div class="empty">Create an encounter, or open an adventure scene and choose “Set up individuals.”</div>'}`;
}

function externalReferences() {
  const refs = new Map();
  for (const doc of campaign.pack.documents) {
    for (const match of doc.markdown.matchAll(/!?\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g)) {
      if (!refs.has(match[2])) refs.set(match[2], { label: match[1], url: match[2], files: new Set() });
      refs.get(match[2]).files.add(doc.filename);
    }
  }
  return [...refs.values()];
}

function missingEncounterReferences() {
  const missing = new Map();
  for (const chapter of campaign.pack.guides.chapters) {
    for (const scene of chapter.scenes) {
      for (const encounter of scene.encounters ?? []) {
        for (const creature of encounter.creatures) {
          if (resolveStat(creature.name)) continue;
          if (!missing.has(creature.name)) missing.set(creature.name, []);
          missing.get(creature.name).push({ file: chapter.file, heading: scene.heading, note: creature.note });
        }
      }
    }
  }
  return [...missing.entries()];
}

function library() {
  const coverage = campaign.pack.coverage;
  const refs = externalReferences();
  const missingStats = missingEncounterReferences();
  return `${heading('LIBRARY & COVERAGE', 'Know what is on the desk.', 'Complete source preservation is not the same as complete external dependencies. The original Markdown is retained in your private pack; every imported heading is navigable.')}
    <div class="grid three">
      <div class="card"><div class="coverage-number">${campaign.pack.documents.length} / ${coverage.expected}</div><p>Expected source documents</p></div>
      <div class="card"><div class="coverage-number">${campaign.pack.statblocks.length}</div><p>Statblocks extracted from supplied text</p></div>
      <div class="card"><div class="coverage-number">${campaign.assets.length}</div><p>Private local images · no remote fetching</p></div>
    </div>
    <div class="warning"><strong>Readiness boundary:</strong> the supplied module references other books and externally hosted maps. Having all chapter files does not supply those rules or images. Missing material is never filled in from another campaign, a different rules edition, or an invented statblock.</div>
    ${coverage.missing.length ? `<div class="warning"><strong>Missing documents:</strong> ${e(coverage.missing.join(', '))}</div>` : ''}
    ${coverage.warnings?.length ? `<details><summary>Import and source warnings (${coverage.warnings.length})</summary>${list(coverage.warnings)}</details>` : ''}
    <div class="card"><h2>Search all supplied text</h2><label>Search chapters, NPC names, area codes, or rules references<input type="search" id="source-search" placeholder="Search all chapters and appendices" maxlength="150"></label><div id="search-results" class="search-results" aria-live="polite"></div></div>
    <details><summary>Document inventory &amp; reading links</summary>${campaign.pack.documents.map(doc => `<p><strong>${e(doc.title)}</strong><br><span class="file-name">${e(doc.filename)}</span> · ${doc.sections.length} sections · ${doc.markdown.length.toLocaleString()} source characters ${sourceButton(doc.filename, '', 'Read')}</p>`).join('')}</details>
    <details><summary>Source-grounded dependency audit (${campaign.pack.guides.gaps.length})</summary>
      ${campaign.pack.guides.gaps.length ? campaign.pack.guides.gaps.map(gap => `<div class="card"><p>${e(gap.detail)}</p>${sourceButton(gap.file, gap.heading)}</div>`).join('') : '<p>No prepared dependency audit was imported. This is not evidence that all referenced material is present.</p>'}
    </details>
    <details><summary>Encounter names without an exact local statblock (${missingStats.length})</summary><p>This is a live check of every creature in the imported encounter presets. Named variants may need an explicitly selected base block plus the source’s changes; do not assume a near-name match is sufficient.</p>
      ${missingStats.length ? missingStats.map(([name, locations]) => `<div class="card"><h3>${e(name)}</h3>${locations.map(location => `<p>${e(location.note || 'Supply the correct full statblock or verify the source-designated base block.')}</p>${sourceButton(location.file, location.heading)}`).join('')}</div>`).join('') : '<p>All preset creature names match a local statblock. This does not verify variants, spells, items, or other external dependencies.</p>'}
    </details>
    <details><summary>External links &amp; missing map assets (${refs.length})</summary><p>These references are preserved but are not fetched. Import your own image file and use its reference URL below to attach it in the source reader.</p>
      ${refs.map(ref => `<div class="card"><strong>${e(ref.label || 'Reference')}</strong><p class="file-name">${e(ref.url)}</p><p class="help">${e([...ref.files].join(', '))}</p><span class="tag">${campaign.assets.some(asset => assetMatches(asset, ref.url)) ? 'LOCAL ASSET ATTACHED' : 'NOT BUNDLED'}</span></div>`).join('')}
    </details>
    <div class="grid">
      <div class="card"><h2>Supplied statblocks</h2><label>Find a statblock<input type="search" id="stat-search" maxlength="150" placeholder="Filter statblock names"></label><div class="stat-list" id="stat-list">${statButtons('')}</div></div>
      <div class="card"><h2>Add a missing statblock</h2><p class="help">Use your own reference. Enter exact AC and HP, and paste the complete block. No version or statistics are inferred. A variant’s changes must be applied explicitly.</p>
        <form id="stat-form" class="fields"><label>Name<input name="name" required maxlength="200"></label><div class="fields two"><label>Armor Class<input name="ac" type="number" min="0" max="1000000" step="1" required></label><label>Hit Points<input name="hp" type="number" min="1" max="1000000" step="1" required></label></div><label>Complete statblock &amp; provenance<textarea name="markdown" required rows="7" maxlength="200000"></textarea></label><button type="submit">Save private statblock</button></form>
      </div>
    </div>
    <div class="card"><h2>Supplemental rules &amp; references</h2><p>Paste missing spell descriptions, item rules, or other reference material from your own files. These are clearly labeled as your additions, searchable locally, and included in backups.</p>
      <details><summary>Add a private reference</summary><form id="reference-form" class="fields"><label>Reference title<input name="title" required maxlength="200"></label><label>Complete text, rules edition &amp; source<textarea name="markdown" required rows="7" maxlength="200000"></textarea></label><button type="submit">Save private reference</button></form></details>
      ${state().references.map(reference => `<div class="actions"><span>${e(reference.title)}</span>${button('Read reference', 'reference', `data-id="${e(reference.id)}"`)}${button('Remove reference', 'remove-reference', `data-id="${e(reference.id)}"`)}</div>`).join('')}
    </div>
    <div class="card"><h2>Private maps &amp; images</h2>
      <p>Import the locally prepared image-pack files together. They attach exact map references automatically while retaining unlinked artwork in the private library. GM and player maps are never substituted for one another.</p>
      <label>Private image packs (.json, multiple files)<input id="image-packs-import" type="file" accept=".json,application/json" multiple></label>
      <p class="help">Build locally with <code>node EveOfRuin/scripts/build-images.mjs</code>, then select the numbered JSON files from <code>EveOfRuin/.private/image-packs/</code>. Do not select the manifest. Importing images merges with your library and preserves notes and encounters.</p>
      <details><summary>Add one image manually</summary><form id="asset-form" class="fields"><div class="fields two"><label>Image label<input name="name" required maxlength="200"></label><label>Exact source reference URL (optional)<input name="reference" type="url" maxlength="4000" placeholder="Paste the preserved reference URL"></label></div><label>Local image (PNG / JPEG / WebP, up to 10 MB)<input type="file" name="image" accept="image/png,image/jpeg,image/webp" required></label><button type="submit">Store image on this device</button></form></details>
      <label>Filter private images<input type="search" id="image-search" placeholder="Map number, name, player, or NPC" maxlength="150"></label>
      <div id="image-list">${imageButtons('')}</div>
    </div>
    <div class="grid">${importPanel()}<div class="card"><h2>Offline &amp; backup</h2><p id="library-offline">${e(document.querySelector('#offline-status').textContent)}</p><p>Offline readiness covers only the app shell. Import the private pack and any needed images before disconnecting. Never clear browser storage without a backup.</p><div class="actions">${button('Export full private backup', 'export', '', false)}${button('Request persistent storage', 'persistent-storage')}</div><p class="help">Backups contain the adventure and your notes. They are not encrypted. Keep them outside the public repository.</p></div></div>`;
}

function imageButtons(query) {
  return campaign.assets.filter(asset => asset.name.toLowerCase().includes(query.toLowerCase())).map(asset =>
    `<div class="image-row"><span>${e(asset.name)}</span><span class="tag">${/player/i.test(asset.name) ? 'PLAYER VERSION' : 'GM LIBRARY · VERIFY BEFORE SHARING'}</span><div class="actions">${button('View image', 'asset', `data-id="${e(asset.id)}"`)}${button('Remove image', 'remove-asset', `data-id="${e(asset.id)}"`)}</div></div>`
  ).join('') || '<p class="help">No matching images.</p>';
}

function statButtons(query) {
  const stats = allStats().filter(stat => stat.name.toLowerCase().includes(query.toLowerCase()));
  return stats.length ? stats.map(stat => button(`${stat.name} · AC ${stat.ac} · HP ${stat.hp}`, 'statblock', `data-id="${e(stat.id)}"`)).join('') : '<p class="help">No matching block is supplied. Add it from your own source; do not substitute a different creature silently.</p>';
}

async function navigateToSource(file, sectionHeading = '') {
  const doc = campaign.pack.documents.find(item => item.filename === file);
  if (!doc) throw new Error(`Source document not imported: ${file}`);
  const section = sectionHeading ? doc.sections.find(item => item.heading === sectionHeading) : null;
  state().selected = { documentId: doc.id, sectionId: section?.id ?? '' };
  await persist();
  view = 'reader';
  location.hash = 'reader';
  render();
  if (sectionHeading && !section) announce(`The exact heading "${sectionHeading}" was not found; the complete source document is shown instead.`);
  main.focus();
}

function showModal(title, html) {
  document.querySelector('#modal-title').textContent = title;
  document.querySelector('#modal-body').innerHTML = html;
  modal.showModal();
}

function resolveStat(name) {
  const normalize = value => value.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  return allStats().find(stat => normalize(stat.name) === normalize(name));
}

function setupPreset(index) {
  const scene = sceneFor(selectedDocument(), selectedSection());
  const preset = scene?.encounters[index];
  if (!preset) throw new Error('The selected scene has no matching encounter preset.');
  pendingPreset = preset;
  showModal(preset.name, `<p><strong>Trigger:</strong> ${e(preset.trigger)}</p><div class="warning">Confirm who is actually present. Select the exact statblock for each group. Review and apply any variant changes after creating individuals. Missing blocks require your own supplied statistics.</div>
    <form id="preset-form">${preset.creatures.map((creature, i) => {
      const stat = resolveStat(creature.name);
      return `<div class="encounter-setup-row"><h3>${e(creature.name)}</h3><p>${e(creature.note || 'No variant note in the companion card. Verify against the source.')}</p><div class="fields two">
        <label>Count for ${e(creature.name)}<input name="count-${i}" type="number" min="0" max="100" step="1" value="${creature.count ?? ''}" required placeholder="Choose from the source"></label>
        <label>Statblock for ${e(creature.name)}<select name="stat-${i}">${statOptions(stat?.id)}</select></label></div>
        ${!stat ? '<p class="error">No exact statblock match. Supply/select the correct block in Library &amp; coverage. This group cannot be created without one unless its count is zero.</p>' : ''}</div>`;
    }).join('')}<button type="submit">Create encounter with separate individuals</button></form>`);
}

function newEncounter(title) {
  if (state().encounters.length >= 100) throw new Error('Encounter limit reached (100). Export a backup and delete unused encounters first.');
  const encounter = { id: uid(), title, combatants: [], round: 1, turnId: null };
  state().encounters.push(encounter);
  state().activeEncounterId = encounter.id;
  return encounter;
}

function addIndividuals(encounter, stat, count, name, initiative = null, notes = '') {
  if (encounter.combatants.length + count > 200) throw new Error('An encounter supports up to 200 individuals.');
  const base = name || stat.name;
  const existing = encounter.combatants.filter(actor => actor.name === base || actor.name.startsWith(`${base} #`)).length;
  for (let i = 0; i < count; i += 1) {
    const actor = createCombatant(stat, { name: `${base} #${existing + i + 1}`, ...(initiative !== null ? { initiative } : {}) });
    actor.notes = notes;
    encounter.combatants.push(actor);
  }
}

function exportBackup() {
  const data = { format: 'eve-of-ruin-backup', version: 1, exportedAt: new Date().toISOString(), ...campaign };
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  if (blob.size > MAX_BACKUP_BYTES) throw new Error('This campaign exceeds the 512 MB import limit. Remove an unused image before exporting a restorable backup.');
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `eve-of-ruin-private-backup-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
  announce('Private backup exported. It contains source material and notes; store it securely.');
}

async function importFiles(files, markdownOnly = false) {
  if (importBusy) throw new Error('An import is already in progress.');
  if (!files.length) return;
  if (!db) throw new Error('Local storage is unavailable. Import is disabled so your campaign cannot be lost on refresh.');
  if (files.reduce((sum, file) => sum + file.size, 0) > MAX_BACKUP_BYTES) throw new Error('Import exceeds the 512 MB safety limit.');
  importBusy = true;
  document.querySelector('.workspace').inert = true;
  try {
    if (campaign && unsaved) await persist();
    let incoming;
    let restoringBackup = false;
    if (markdownOnly) {
      const sources = [];
      for (const file of files) sources.push({ name: file.name, markdown: await file.text() });
      incoming = { pack: validatePack(buildPack(sources)), state: initialState(), assets: [] };
    } else {
      if (files.length !== 1) throw new Error('Choose a single campaign pack or backup JSON file.');
      const parsed = JSON.parse(await files[0].text());
      if (parsed.format === 'eve-of-ruin-backup') {
        if (parsed.version !== 1) throw new Error('Unsupported backup version.');
        incoming = { pack: validatePack(parsed.pack), state: validateState(parsed.state), assets: validateAssets(parsed.assets) };
        restoringBackup = true;
      } else {
        incoming = { pack: validatePack(parsed), state: initialState(), assets: [] };
      }
    }
    if (campaign) {
      const message = restoringBackup
        ? 'Replace this browser’s entire campaign with this backup, including notes and encounters? Export the current campaign first if needed.'
        : 'Update the source library and GM guidance? Your session notes, encounters, custom references, and local images will be preserved. Export a backup first if needed.';
      if (!confirm(message)) return;
      if (!restoringBackup) {
        incoming.state = structuredClone(state());
        incoming.assets = [...campaign.assets];
        const incomingIds = new Set([...incoming.pack.statblocks, ...incoming.state.customStatblocks].map(stat => stat.id));
        const referencedIds = new Set(incoming.state.encounters.flatMap(encounter => encounter.combatants.map(actor => actor.statblockId)));
        for (const stat of campaign.pack.statblocks) {
          if (referencedIds.has(stat.id) && !incomingIds.has(stat.id)) incoming.state.customStatblocks.push(structuredClone(stat));
        }
      }
    }
    if (!incoming.pack.documents.some(doc => doc.id === incoming.state.selected.documentId)) {
      incoming.state.selected = { documentId: incoming.pack.documents[0].id, sectionId: '' };
    }
    clearTimeout(noteTimer);
    revision += 1;
    await writeCampaign(db, incoming);
    campaign = incoming;
    unsaved = false;
    document.querySelector('#error-banner').hidden = true;
    document.querySelector('#save-status').textContent = 'Campaign imported and saved locally';
    view = 'dashboard';
    location.hash = 'dashboard';
    render();
    announce(`Imported ${campaign.pack.documents.length} documents and ${campaign.pack.statblocks.length} statblocks. ${restoringBackup ? 'Backup state restored.' : 'Existing session state, if any, was preserved.'} Review Library & coverage before play.`);
  } finally {
    importBusy = false;
    document.querySelector('.workspace').inert = false;
  }
}

async function importImages(files) {
  if (!files.length) return;
  if (importBusy) throw new Error('An import is already in progress.');
  if (!campaign) throw new Error('Import the adventure campaign pack before importing images.');
  if (files.reduce((sum, file) => sum + file.size, 0) > MAX_BACKUP_BYTES) throw new Error('Selected image packs exceed 512 MB. Import fewer at once.');
  importBusy = true;
  document.querySelector('.workspace').inert = true;
  try {
    if (unsaved) await persist();
    let assets = campaign.assets;
    for (const [index, file] of files.entries()) {
      announce(`Reading private image pack ${index + 1} of ${files.length}. Nothing is uploaded.`);
      const data = JSON.parse(await file.text());
      if (data.format !== 'eve-of-ruin-images' || data.version !== 1) throw new Error(`${file.name} is not a supported image pack. Choose numbered image packs, not the manifest.`);
      assets = mergeAssets(assets, data.assets);
    }
    await writeCampaign(db, { ...campaign, assets });
    campaign.assets = assets;
    document.querySelector('#error-banner').hidden = true;
    announce(`${assets.length} private images saved. Matched references now open locally; unlinked artwork remains in the image library.`);
    render();
  } finally {
    importBusy = false;
    document.querySelector('.workspace').inert = false;
  }
}

async function action(target) {
  const name = target.dataset.action;
  const id = target.dataset.id;
  if (name === 'export') return exportBackup();
  if (name === 'source') return navigateToSource(target.dataset.file, target.dataset.heading);
  if (name === 'statblock') {
    const stat = allStats().find(item => item.id === id);
    if (!stat) throw new Error('This statblock is no longer in the local library.');
    return showModal(stat.name, `<p class="help">${stat.documentId ? 'Complete block from the supplied source. Individual overrides are stored on each combatant.' : 'Privately supplied custom reference. Verify its edition and provenance yourself.'}</p><article class="source">${renderMarkdown(stat.markdown, campaign.assets)}</article>`);
  }
  if (name === 'reference') {
    const reference = state().references.find(item => item.id === id);
    if (!reference) throw new Error('This private reference is no longer in the library.');
    return showModal(reference.title, `<p class="help">Privately supplied supplemental reference. Verify its edition and provenance.</p><article class="source">${renderMarkdown(reference.markdown, campaign.assets)}</article>`);
  }
  if (name === 'asset') {
    const asset = campaign.assets.find(item => item.id === id);
    if (!asset) throw new Error('This image is no longer in the local library.');
    return showModal(asset.name, `<p class="help">Private GM library. Check labels and spoilers before sharing this image with players.</p>
      <div class="actions">${button('Show original resolution', 'zoom-image', 'aria-pressed="false"')}<a class="button quiet" href="${e(asset.data)}" download="${e(asset.name)}">Save original image</a></div>
      <div class="image-stage" tabindex="0" aria-label="Image viewport; scroll to explore at original resolution"><img class="local-map" src="${e(asset.data)}" alt="${e(asset.name)}"></div>`);
  }
  if (name === 'zoom-image') {
    const zoomed = document.querySelector('.image-stage').classList.toggle('zoomed');
    target.setAttribute('aria-pressed', String(zoomed));
    target.textContent = zoomed ? 'Fit image to window' : 'Show original resolution';
    return;
  }
  if (name === 'preset') return setupPreset(Number(target.dataset.preset));
  if (name === 'persistent-storage') {
    const granted = navigator.storage?.persist ? await navigator.storage.persist() : false;
    announce(granted ? 'Persistent storage granted. Continue exporting backups; persistence is not a backup.' : 'Persistent storage was not granted by this browser. Export backups regularly.');
    return;
  }
  if (name === 'previous-document' || name === 'next-document') {
    const index = campaign.pack.documents.indexOf(selectedDocument());
    const next = campaign.pack.documents[index + (name === 'next-document' ? 1 : -1)];
    if (!next) throw new Error('There is no adjacent document.');
    state().selected = { documentId: next.id, sectionId: '' };
  } else if (name === 'previous-section' || name === 'next-section') {
    const doc = selectedDocument();
    const index = doc.sections.findIndex(section => section.id === state().selected.sectionId);
    state().selected.sectionId = doc.sections[index + (name === 'next-section' ? 1 : -1)]?.id ?? '';
  } else if (name === 'complete') {
    const key = noteKey();
    state().completed = state().completed.includes(key) ? state().completed.filter(item => item !== key) : [...state().completed, key];
  } else if (name === 'remove-secret') {
    if (!confirm('Remove this secrets-ledger entry?')) return;
    state().secrets = state().secrets.filter(secret => secret.id !== id);
  } else if (name === 'remove-asset') {
    if (!confirm('Remove this locally stored image? Export a backup first if needed.')) return;
    campaign.assets = campaign.assets.filter(asset => asset.id !== id);
  } else if (name === 'remove-reference') {
    if (!confirm('Remove this supplemental reference?')) return;
    state().references = state().references.filter(reference => reference.id !== id);
  } else if (name === 'sort-initiative') {
    render();
    return;
  } else if (name === 'delete-encounter') {
    if (!confirm('Delete this encounter and its individual combatants?')) return;
    state().encounters = state().encounters.filter(encounter => encounter.id !== state().activeEncounterId);
    state().activeEncounterId = state().encounters[0]?.id ?? null;
  } else if (name === 'remove-actor') {
    if (!confirm('Remove this individual from the encounter?')) return;
    const encounter = activeEncounter();
    encounter.combatants = encounter.combatants.filter(actor => actor.id !== id);
    if (encounter.turnId === id) encounter.turnId = null;
  } else if (name === 'set-turn') {
    activeEncounter().turnId = id;
  } else if (name === 'next-turn') {
    const encounter = activeEncounter();
    const order = sortCombatants([...encounter.combatants]);
    if (!order.length) throw new Error('Add combatants before advancing turns.');
    const index = order.findIndex(actor => actor.id === encounter.turnId);
    if (index === order.length - 1) encounter.round += 1;
    encounter.turnId = order[(index + 1) % order.length].id;
  } else {
    throw new Error(`Unknown action: ${name}`);
  }
  await persist();
  render();
}

function numeric(form, name, optional = false) {
  const value = new FormData(form).get(name);
  if (optional && value === '') return null;
  const parsed = Number(value);
  if (value === null || value === '' || !Number.isFinite(parsed)) throw new Error(`Enter a valid value for ${name}.`);
  return parsed;
}

async function submit(form, submitter) {
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  if (form.id === 'secret-form') {
    const text = String(data.get('secret')).trim();
    if (!text) throw new Error('Enter the secret before recording it.');
    state().secrets.push({ id: uid(), text, used: false });
  } else if (form.id === 'new-encounter-form') {
    const title = String(data.get('title')).trim();
    if (!title) throw new Error('Enter an encounter name.');
    newEncounter(title);
  } else if (form.id === 'add-actors-form') {
    const stat = allStats().find(item => item.id === data.get('statblock'));
    if (!stat) throw new Error('Choose an imported statblock.');
    addIndividuals(activeEncounter(), stat, numeric(form, 'count'), String(data.get('name')).trim(), numeric(form, 'initiative', true));
  } else if (form.id === 'manual-actor-form') {
    const actor = createCombatant({ id: null, name: String(data.get('name')).trim(), ac: numeric(form, 'ac'), hp: numeric(form, 'hp'), dex: null });
    actor.statblockId = null;
    actor.initiative = numeric(form, 'initiative', true);
    if (!actor.name) throw new Error('Enter the combatant name.');
    if (activeEncounter().combatants.length >= 200) throw new Error('This encounter already has 200 individuals.');
    activeEncounter().combatants.push(actor);
  } else if (form.dataset.damage) {
    const encounter = activeEncounter();
    const index = encounter.combatants.findIndex(actor => actor.id === form.dataset.damage);
    if (index < 0) throw new Error('Combatant not found.');
    const update = submitter?.value === 'heal' ? applyHealing : applyDamage;
    encounter.combatants[index] = update(encounter.combatants[index], numeric(form, 'amount'));
  } else if (form.id === 'stat-form') {
    const name = String(data.get('name')).trim();
    const markdown = String(data.get('markdown')).trim();
    if (!name || !markdown) throw new Error('A name and complete statblock are required.');
    state().customStatblocks.push({ id: `custom-${uid()}`, name, markdown, ac: numeric(form, 'ac'), hp: numeric(form, 'hp'), dex: null });
  } else if (form.id === 'reference-form') {
    const title = String(data.get('title')).trim();
    const markdown = String(data.get('markdown')).trim();
    if (!title || !markdown) throw new Error('A title and reference text are required.');
    state().references.push({ id: uid(), title, markdown });
  } else if (form.id === 'preset-form') {
    if (!pendingPreset) throw new Error('Open an encounter preset first.');
    const groups = pendingPreset.creatures.map((creature, index) => {
      const count = numeric(form, `count-${index}`);
      const stat = allStats().find(item => item.id === data.get(`stat-${index}`));
      if (count > 0 && !stat) throw new Error(`Select or supply the correct statblock for ${creature.name}, or set its count to zero.`);
      return { creature, count, stat };
    });
    const total = groups.reduce((sum, group) => sum + group.count, 0);
    if (total < 1 || total > 200) throw new Error('Choose between 1 and 200 total individuals.');
    const encounter = newEncounter(pendingPreset.name);
    for (const group of groups) if (group.count) addIndividuals(encounter, group.stat, group.count, group.creature.name, null, group.creature.note ?? '');
    pendingPreset = null;
    modal.close();
    view = 'combat';
    location.hash = 'combat';
    announce('Encounter created. Review individual AC / maximum HP and apply source variant notes before starting.');
  } else if (form.id === 'asset-form') {
    const file = data.get('image');
    if (!(file instanceof File) || !file.size || file.size > 10 * 1024 * 1024) throw new Error('Choose an image up to 10 MB.');
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) throw new Error('Only PNG, JPEG, and WebP images are supported.');
    const imageData = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error('The selected image could not be read.'));
      reader.readAsDataURL(file);
    });
    const asset = { id: uid(), name: String(data.get('name')).trim(), reference: String(data.get('reference')).trim(), data: imageData };
    if (!asset.name) throw new Error('Enter an image label.');
    if (asset.reference && campaign.assets.some(item => assetMatches(item, asset.reference))) throw new Error('An image is already attached to that reference. Remove it before replacing it.');
    validateAssets([...campaign.assets, asset]);
    campaign.assets.push(asset);
  } else {
    throw new Error('Unrecognized form.');
  }
  await persist();
  render();
}

async function change(target) {
  if (target.id === 'pack-import' || target.id === 'markdown-import') return importFiles([...target.files], target.id === 'markdown-import');
  if (target.id === 'image-packs-import') return importImages([...target.files]);
  if (!campaign) return;
  if (target.id === 'document-select') {
    state().selected = { documentId: target.value, sectionId: '' };
  } else if (target.id === 'section-select') {
    state().selected.sectionId = target.value;
  } else if (target.id === 'encounter-select') {
    state().activeEncounterId = target.value || null;
  } else if (target.dataset.secret) {
    state().secrets.find(secret => secret.id === target.dataset.secret).used = target.checked;
  } else if (target.dataset.actor) {
    if (!target.reportValidity()) return;
    const actor = activeEncounter().combatants.find(item => item.id === target.dataset.actor);
    const field = target.dataset.field;
    const numericFields = ['initiative', 'ac', 'maxHp', 'hp', 'tempHp'];
    if (numericFields.includes(field)) {
      actor[field] = field === 'initiative' && target.value === '' ? null : Number(target.value);
      if (field === 'maxHp') actor.hp = Math.min(actor.hp, actor.maxHp);
    } else {
      const value = target.value.trim();
      if (field === 'name' && !value) throw new Error('A combatant name cannot be empty.');
      actor[field] = value;
    }
    const card = target.closest('[data-actor-card]');
    card.querySelector('h3').textContent = actor.name;
    card.querySelector('.hp').textContent = `${actor.hp} / ${actor.maxHp} HP${actor.tempHp ? ` + ${actor.tempHp} temp` : ''}`;
    card.querySelector('progress').max = actor.maxHp;
    card.querySelector('progress').value = actor.hp;
    card.querySelector('[data-field="hp"]').max = actor.maxHp;
    card.querySelector('[data-field="hp"]').value = actor.hp;
    card.classList.toggle('defeated', actor.hp === 0);
    const conditionSummary = card.querySelector('[data-condition-summary]');
    conditionSummary.hidden = !actor.conditions;
    conditionSummary.querySelector('span').textContent = actor.conditions;
    await persist();
    return;
  } else {
    return;
  }
  await persist();
  render();
}

function input(target) {
  if (!campaign) return;
  if (target.id === 'section-notes') {
    state().notes[noteKey()] = target.value;
    scheduleSave();
  } else if (target.dataset.handoff) {
    state().handoff[target.dataset.handoff] = target.value;
    scheduleSave();
  } else if (target.dataset.actor && ['conditions', 'notes', 'resourceNotes'].includes(target.dataset.field)) {
    const actor = activeEncounter().combatants.find(item => item.id === target.dataset.actor);
    actor[target.dataset.field] = target.value;
    scheduleSave();
  } else if (target.id === 'source-search') {
    const query = target.value.trim().toLowerCase();
    const results = [];
    if (query.length >= 2) {
      for (const doc of campaign.pack.documents) {
        for (const section of doc.sections) {
          const index = section.markdown.toLowerCase().indexOf(query);
          if (index >= 0) results.push({ doc, section, snippet: section.markdown.slice(Math.max(0, index - 70), index + 160) });
        }
      }
    }
    const supplemental = query.length >= 2 ? state().references.filter(reference => `${reference.title} ${reference.markdown}`.toLowerCase().includes(query)) : [];
    document.querySelector('#search-results').innerHTML = query.length < 2 ? '<p class="help">Enter at least two characters.</p>' :
      `<p class="help">${results.length} matching sections${results.length > 100 ? ' · showing first 100; refine your search' : ''}</p>` + results.slice(0, 100).map(result =>
        `<button type="button" class="search-result" data-action="source" data-file="${e(result.doc.filename)}" data-heading="${e(result.section.heading)}"><strong>${e(result.section.heading)}</strong><small>${e(result.doc.title)}</small>${e(result.snippet)}</button>`).join('') +
        supplemental.map(reference => `<button type="button" class="search-result" data-action="reference" data-id="${e(reference.id)}"><strong>${e(reference.title)}</strong><small>Private supplemental reference</small></button>`).join('');
  } else if (target.id === 'stat-search') {
    document.querySelector('#stat-list').innerHTML = statButtons(target.value);
  } else if (target.id === 'image-search') {
    document.querySelector('#image-list').innerHTML = imageButtons(target.value);
  }
}

document.addEventListener('click', event => {
  const target = event.target.closest('[data-action], [data-doc], [data-asset]');
  if (!target || !campaign) return;
  guarded(async () => {
    if (target.dataset.doc) {
      const doc = campaign.pack.documents.find(item => item.id === target.dataset.doc);
      await navigateToSource(doc.filename);
    } else if (target.dataset.asset) {
      await action({ dataset: { action: 'asset', id: target.dataset.asset } });
    } else {
      await action(target);
    }
  });
});
document.addEventListener('submit', event => {
  event.preventDefault();
  guarded(() => submit(event.target, event.submitter));
});
document.addEventListener('change', event => guarded(() => change(event.target)));
document.addEventListener('input', event => guarded(() => input(event.target)));
document.querySelector('#export-button').addEventListener('click', () => guarded(exportBackup));
document.querySelector('#close-modal').addEventListener('click', () => modal.close());
window.addEventListener('hashchange', () => {
  const requested = location.hash.slice(1);
  view = views.has(requested) ? requested : 'dashboard';
  render();
  main.focus();
});
window.addEventListener('beforeunload', event => {
  if (unsaved || saving || importBusy) {
    event.preventDefault();
    event.returnValue = '';
  }
});
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && unsaved) guarded(persist);
});

async function offlineSetup() {
  const status = document.querySelector('#offline-status');
  if (!('serviceWorker' in navigator)) {
    status.textContent = 'Offline caching is unavailable in this browser. Keep a backup.';
    return;
  }
  try {
    await navigator.serviceWorker.register('./sw.js', { scope: './' });
    await navigator.serviceWorker.ready;
    status.textContent = 'App ready offline at this address. Campaign data stays in local storage.';
  } catch (failure) {
    status.textContent = `Offline setup failed: ${failure.message}. Stay online until this is resolved.`;
  }
  const libraryStatus = document.querySelector('#library-offline');
  if (libraryStatus) libraryStatus.textContent = status.textContent;
}

await guarded(async () => {
  db = await openStore();
  const saved = await readCampaign(db);
  if (saved) campaign = { pack: validatePack(saved.pack), state: validateState(saved.state), assets: validateAssets(saved.assets) };
  document.querySelector('#save-status').textContent = saved ? 'Campaign restored from this device' : 'Local storage ready';
});
view = views.has(location.hash.slice(1)) ? location.hash.slice(1) : 'dashboard';
render();
offlineSetup();
