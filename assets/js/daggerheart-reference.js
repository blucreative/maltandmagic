(() => {
  'use strict';
  const catalog = globalThis.DaggerheartCatalog;
  const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  const slug = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const view = document.body.dataset.view || 'rules';
  const views = {
    rules: ['Daggerheart', 'At the table', 'Hope, Fear, and the rules that keep a session moving. SRD 2.0 mechanics, with core and expansion choices clearly separated.'],
    classes: ['Classes', 'Character reference', 'Thirteen classes, their base values, domains, and subclass paths. Advancement and subclass choices carry each path through levels 1-10.'],
    domains: ['Domains', 'Character reference', 'Ten domains define the cards available to your character. Your class grants two; your loadout decides which abilities are active.'],
    frames: ['Campaign frames', 'Before the campaign', 'Ten starting worlds from the Core Rulebook and Hope & Fear. No campaign frame has been selected for this table yet.'],
    options: ['Heritage & expansion', 'Character reference', 'Ancestry, community, and transformation choices from SRD 2.0, alongside the published Hope & Fear classes.'],
    creation: ['Characters', 'Creation & advancement / Levels 1-10', 'Character creation, tier achievements, domain growth, subclass upgrades, and multiclassing.'],
    equipment: ['Equipment', 'Tiers 1-4 / Levels 1-10', 'Weapons, armor, items, and consumables from the Core Rulebook and Hope & Fear. SRD 2.0 values take precedence; Core-only entries are labeled.']
  };
  const navigation = [
    ['rules', 'index.html', 'Rules'], ['creation', 'character-creation.html', 'Characters'],
    ['classes', 'classes.html', 'Classes'], ['domains', 'domains.html', 'Domains'],
    ['options', 'void-options.html', 'Heritage & expansion'], ['equipment', 'equipment.html', 'Equipment'],
    ['frames', 'campaign-frames.html', 'Campaigns']
  ];
  const [title, eyebrow, description] = views[view];
  document.getElementById('reference-header').innerHTML = `
    <div class="site-bar"><a href="../index.html">Malt &amp; Magic <span>/ Lore vault</span></a><span class="campaign-status">Daggerheart · Imminent</span></div>
    <header class="page-header"><img class="brand-mark" src="../assets/daggerheart-mark.png" width="66" height="84" alt="Daggerheart compatibility mark">
      <div><p class="eyebrow">Daggerheart / ${escape(eyebrow)}</p><h1>${escape(title)}</h1><p class="lede">${escape(description)}</p></div>
    </header><div class="nav-band"><nav class="site-nav" aria-label="Daggerheart">${navigation.map(([key, href, label]) => `<a href="${href}"${view === key ? ' aria-current="page"' : ''}>${escape(label)}</a>`).join('')}</nav></div>`;
  const source = (page, section, book = 'SRD 2.0') => `<small class="source">${escape(book)} · PDF p. ${page} · ${escape(section)}</small>`;
  const bookLabel = entry => `<span class="book-label${entry.source === 'Core' ? '' : ' expansion'}">${escape(entry.source)}</span>`;
  const domainLinks = names => `<div class="domain-links">${names.map(name => `<a href="domains.html#${slug(name)}">${escape(name)}</a>`).join('')}</div>`;
  const options = values => values.map(value => `<option>${escape(value)}</option>`).join('');
  const main = document.getElementById('main');
  const footer = document.getElementById('reference-footer');
  footer.innerHTML = `<p>Unofficial Malt &amp; Magic campaign reference. Daggerheart is a game by Darrington Press. These are concise table summaries, not the complete rules or cards.</p><p>Mechanics: SRD 2.0 (2026). Context: Core Rulebook (August 2025, errata included) and Hope &amp; Fear (2026). PDF page labels follow the supplied conversions; printed numbering may differ.</p><p><a href="https://www.daggerheart.com/">Official Daggerheart</a> · <a href="https://darringtonpress.com/license/">Darrington Press licensing</a></p>`;

  function filters({ domain = false, categories = [], equipment = false } = {}) {
    return `<div class="toolbar"><label>Search<input id="reference-search" type="search" placeholder="Name, topic, or keyword" autocomplete="off"></label>
      ${categories.length ? `<label>Topic<select id="category-filter"><option value="">All topics</option>${options(categories)}</select></label>` : `<label>Book<select id="book-filter"><option value="">All books</option><option>Core</option><option>Hope &amp; Fear</option></select></label>`}
      ${domain ? `<label>Domain<select id="domain-filter"><option value="">All domains</option>${options(catalog.domains.map(entry => entry.name))}</select></label>` : ''}
      ${equipment ? `<label>Type<select id="type-filter"><option value="">All equipment</option>${options(['Primary weapon', 'Secondary weapon', 'Combat wheelchair', 'Armor', 'Item', 'Consumable'])}</select></label><label>Tier<select id="tier-filter"><option value="">All tiers &amp; untiered</option><option value="1">Tier 1 / Level 1</option><option value="2">Tier 2 / Levels 2-4</option><option value="3">Tier 3 / Levels 5-7</option><option value="4">Tier 4 / Levels 8-10</option><option value="untiered">Untiered loot</option></select></label>` : ''}</div>
      <p id="result-count" class="result-count" role="status"></p><p id="no-results" class="empty" hidden>No matching entries. <button type="button" class="command" id="reset-filters">Clear filters</button></p>`;
  }

  function bindFilters() {
    const search = document.getElementById('reference-search');
    if (!search) return;
    const book = document.getElementById('book-filter');
    const domain = document.getElementById('domain-filter');
    const category = document.getElementById('category-filter');
    const type = document.getElementById('type-filter');
    const tier = document.getElementById('tier-filter');
    const controls = [search, book, domain, category, type, tier].filter(Boolean);
    const pagination = document.getElementById('equipment-pagination');
    let currentPage = 1;
    const pageSize = pagination ? 24 : Infinity;
    const entries = [...main.querySelectorAll('[data-entry]')];
    const params = new URLSearchParams(location.search);
    for (const [control, key] of [[search, 'q'], [book, 'book'], [domain, 'domain'], [category, 'topic'], [type, 'type'], [tier, 'tier']]) {
      if (control && params.has(key)) control.value = params.get(key);
    }
    function filterEntries() {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      for (const entry of entries) {
        const matches = entry.textContent.toLowerCase().includes(query)
          && (!book?.value || entry.dataset.book === book.value)
          && (!domain?.value || entry.dataset.domains?.split(',').includes(domain.value))
          && (!category?.value || entry.dataset.category === category.value)
          && (!type?.value || entry.dataset.category === type.value)
          && (!tier?.value || entry.dataset.tier === tier.value);
        if (matches) visible++;
        entry.hidden = !matches || (pagination && (visible <= (currentPage - 1) * pageSize || visible > currentPage * pageSize));
      }
      document.getElementById('result-count').textContent = `${visible} of ${entries.length} entries`;
      document.getElementById('no-results').hidden = visible > 0;
      if (pagination) {
        const pages = Math.max(1, Math.ceil(visible / pageSize));
        pagination.hidden = pages === 1;
        document.getElementById('equipment-page').textContent = `Page ${currentPage} of ${pages}`;
        document.getElementById('equipment-previous').disabled = currentPage === 1;
        document.getElementById('equipment-next').disabled = currentPage === pages;
      }
    }
    controls.forEach(control => control.addEventListener('input', () => { currentPage = 1; filterEntries(); }));
    document.getElementById('reset-filters').addEventListener('click', () => {
      controls.forEach(control => { control.value = ''; });
      currentPage = 1;
      filterEntries();
      search.focus();
    });
    if (pagination) {
      for (const [id, direction] of [['equipment-previous', -1], ['equipment-next', 1]]) {
        document.getElementById(id).addEventListener('click', () => {
          currentPage += direction;
          filterEntries();
          document.getElementById('equipment-list').scrollIntoView({ block: 'start' });
        });
      }
    }
    filterEntries();
  }

  function classEntry(entry) {
    return `<article class="entry" id="${slug(entry.name)}" data-entry data-book="${escape(entry.source)}" data-domains="${entry.domains.join(',')}">
      ${bookLabel(entry)}<h2>${escape(entry.name)}</h2>${domainLinks(entry.domains)}<p>${escape(entry.summary)}</p>
      <dl class="stats"><div><dt>Base Evasion</dt><dd>${entry.evasion}</dd></div><div><dt>Base HP</dt><dd>${entry.hp}</dd></div></dl>
      <h3>Subclasses</h3><ul class="subclasses">${entry.subclasses.map(name => `<li>${escape(name)}</li>`).join('')}</ul>
      <p><a href="character-creation.html#subclass-progression">Foundation, Specialization &amp; Mastery</a></p>${source(entry.page, entry.name)}</article>`;
  }

  function rulesPage() {
    main.innerHTML = `<div class="reference-layout"><section class="section rules-section" aria-labelledby="rules-title"><div class="section-heading"><h2 id="rules-title">Rules reference</h2><span class="edition-label">SRD 2.0</span></div>${filters({ categories: [...new Set(catalog.rules.map(entry => entry.category))] })}
      <div class="rules-list">${catalog.rules.map(entry => `<details class="rule" id="${entry.id}" data-entry data-category="${entry.category}"><summary>${escape(entry.name)}<span>${entry.category}</span></summary><div class="rule-body">${entry.paragraphs.map(text => `<p>${escape(text)}</p>`).join('')}${source(entry.page, entry.name)}</div></details>`).join('')}</div></section>
      <aside class="reference-aside" aria-label="Damage reference"><form class="tool" id="damage-tool"><p class="eyebrow">Combat reference</p><h2>Damage to HP</h2><div class="field-grid">
        <label>Final damage<input name="damage" type="number" min="0" value="12" required></label><label>Major threshold<input name="major" type="number" min="1" value="8" required></label>
        <label>Severe threshold<input name="severe" type="number" min="2" value="16" required></label></div>
        <label class="check"><input type="checkbox" name="armor">Mark one available Armor Slot</label><label class="check"><input type="checkbox" name="direct">Direct damage</label><label class="check"><input type="checkbox" name="massive">Optional Massive Damage</label>
        <output id="damage-result" aria-live="polite"></output>${source(50, 'Damage Thresholds; Armor (p. 72)')}<a class="tool-link" href="#armor">Armor rules</a></form>
      <div class="aside-note"><h3>Before applying damage</h3><p>Add your level to armor base thresholds. Resolve resistance and other damage modifiers before comparing the final damage.</p><a href="equipment.html">Equipment reference</a></div><div class="aside-note"><h3>Levels 1-10</h3><p>Tier 1: level 1. Tier 2: levels 2-4. Tier 3: levels 5-7. Tier 4: levels 8-10.</p><a href="character-creation.html#advancement">Advancement reference</a></div></aside></div>`;
    const form = document.getElementById('damage-tool');
    const output = form.querySelector('output');
    function update() {
      const values = Object.fromEntries([...form.elements].filter(field => field.name).map(field => [field.name, field.type === 'checkbox' ? field.checked : field.value === '' ? NaN : Number(field.value)]));
      try {
        const result = globalThis.DaggerheartRules.resolveDamage(values);
        output.innerHTML = `<strong>Mark ${result.hp} HP</strong><span>${result.severity} incoming severity</span><p>${result.armorUsed ? 'Mark 1 Armor Slot.' : values.direct ? 'Direct damage: no Armor Slot reduction.' : 'No Armor Slot marked.'}</p>`;
      } catch (error) { output.textContent = error.message; }
    }
    form.addEventListener('input', update);
    form.addEventListener('submit', event => event.preventDefault());
    update();
  }

  function creationPage() {
    main.innerHTML = `<section class="section"><h2>From concept to level 1</h2><ol class="steps">
      <li><strong>Agree on the campaign.</strong> Establish tone, boundaries, permitted books, and party connections with the group. A listed option is not automatically approved for this campaign.</li>
      <li><strong>Choose a class and subclass.</strong> Record class features, base HP and Evasion, and take the subclass Foundation card. Apply any features that alter those starting values.</li>
      <li><strong>Choose heritage.</strong> Take an ancestry and a community. Mixed ancestry uses the first feature from one ancestry and the second from another.</li>
      <li><strong>Assign traits.</strong> Distribute +2, +1, +1, 0, 0, -1 among Agility, Strength, Finesse, Instinct, Presence, and Knowledge.</li>
      <li><strong>Record resources and gear.</strong> Begin at level 1 with Proficiency 1, 6 Stress slots, and 2 Hope. Choose <a href="equipment.html">starting equipment</a> and apply its features; add level to armor base thresholds.</li>
      <li><strong>Write a background and two Experiences.</strong> Each Experience begins at +2. Make them specific enough to describe learned capabilities without granting new powers.</li>
      <li><strong>Choose two level-1 domain cards.</strong> Both can come from the same class domain, or one from each. Finish by agreeing on connections with the other characters.</li>
      </ol>${source(4, 'Character Creation, pp. 4-6')}</section>
      <section class="section" id="advancement"><h2>Progression through all four tiers</h2><div class="table-wrap" role="region" aria-label="Tier progression" tabindex="0"><table><caption>Levels 1-10 / SRD 2.0</caption><thead><tr><th scope="col">Tier</th><th scope="col">Levels</th><th scope="col">Entering this tier</th><th scope="col">Equipment</th></tr></thead><tbody>
      <tr><th scope="row">1</th><td>1</td><td>Starting character; Proficiency 1, two +2 Experiences, subclass Foundation.</td><td><a href="equipment.html?tier=1">Tier 1</a></td></tr>
      <tr><th scope="row">2</th><td>2-4</td><td>At level 2: a new +2 Experience and +1 Proficiency.</td><td><a href="equipment.html?tier=2">Tier 2</a> or lower</td></tr>
      <tr><th scope="row">3</th><td>5-7</td><td>At level 5: a new +2 Experience, +1 Proficiency, and clear marked traits. Multiclassing becomes available.</td><td><a href="equipment.html?tier=3">Tier 3</a> or lower</td></tr>
      <tr><th scope="row">4</th><td>8-10</td><td>At level 8: a new +2 Experience, +1 Proficiency, and clear marked traits.</td><td><a href="equipment.html?tier=4">Tier 4</a> or lower</td></tr>
      </tbody></table></div>${source(53, 'Leveling Up & Tier Achievements')}<h3>At every level-up</h3><ol class="steps"><li>Apply any tier achievement. The party levels together at GM-set narrative milestones.</li><li>Choose two available advancements from your tier or below, marking their slots. Use your class advancement chart for availability and limits; some choices cost both advancements.</li><li>Increase both damage thresholds by 1 for the new level. When recalculating from armor, add your new level once, not again on top of the accumulated increases.</li><li>Gain one domain card at your level or lower from a class domain. You may also exchange a previously acquired domain card for another of the same level or lower. Keep at most five active cards; the rest go in your vault.</li></ol>${source(54, 'Advancements, Damage Thresholds & Domain Cards')}</section>
      <section class="section" id="subclass-progression"><h2>Advancement choices &amp; subclasses</h2><p>Your class chart controls which slots you can choose. Options include increases to traits, HP, Stress, Experiences, Evasion, and Proficiency; an extra domain card; subclass upgrades; and multiclassing. Increasing Proficiency and multiclassing each cost both advancements.</p><p>A trait increase raises two unmarked traits by +1 and marks them until the next applicable tier reset. An Experience increase raises two Experiences by +1. Do not assume every option is available at every level.</p><p>Subclass cards progress from <strong>Foundation</strong> to <strong>Specialization</strong> to <strong>Mastery</strong>. An upgrade is an advancement choice, not an automatic reward at a fixed level. Taking an upgrade crosses out that tier's multiclass option. Consult the selected subclass card for its abilities and any scaling by level, tier, or Proficiency.</p>${source(54, 'Advancements')}<a href="classes.html">Class and subclass reference</a></section>
      <section class="section" id="multiclassing"><h2>Multiclassing from level 5</h2><p>Spend both advancements on an available multiclass option. Choose another class, gain its class feature, choose one of its domains, and take a Foundation card from one of its subclasses. Use that class's multiclass module. Cross out the subclass upgrade option in this tier and all remaining multiclass options.</p><p>Cards from your multiclass domain are limited to half your level, rounded up: level 3 cards at character levels 5-6, level 4 cards at levels 7-8, and level 5 cards at levels 9-10. If your Foundation cards offer different Spellcast traits, choose which to use for a Spellcast roll.</p>${source(54, 'Multiclassing')}<a href="domains.html#domain-growth">Domain growth and loadouts</a></section>`;
  }

  function equipmentPage() {
    const entries = [...globalThis.DaggerheartEquipment].sort((first, second) => first.name.localeCompare(second.name));
    const stats = values => `<dl class="equipment-stats">${values.map(([label, value]) => `<div><dt>${escape(label)}</dt><dd>${escape(value)}</dd></div>`).join('')}</dl>`;
    main.innerHTML = `<section class="section" aria-labelledby="equipment-title"><div class="section-heading"><h2 id="equipment-title">Equipment catalog</h2><span class="edition-label">Core + Hope &amp; Fear / SRD 2.0</span></div>
      <p class="notice">Weapons and armor must be your tier or lower to equip. Availability is decided by the GM. Items and consumables have no equipment tier; their loot rolls are not level requirements.</p>
      ${filters({ equipment: true })}<div id="equipment-list" class="equipment-list">${entries.map(entry => {
        const tierLabel = entry.tier ? `Tier ${entry.tier}` : 'Untiered';
        const preview = entry.damage ? `${entry.trait} / ${entry.range} / ${entry.damage}` : entry.category === 'Armor' ? `Base ${entry.major} / ${entry.severe} / Score ${entry.score}` : `Loot roll ${entry.roll}`;
        const values = entry.damage ? [['Trait', entry.trait], ['Range', entry.range], ['Damage', entry.damage], ['Burden', entry.burden]] : entry.category === 'Armor' ? [['Base Major', entry.major], ['Base Severe', entry.severe], ['Base Armor Score', entry.score]] : [['Loot table', entry.source], ['Roll', entry.roll], ['Usage', entry.category === 'Consumable' ? 'Single use' : 'Reusable']];
        return `<details class="equipment-entry" id="equipment-${slug(entry.category)}-${slug(entry.name)}" data-entry data-name="${escape(entry.name)}" data-book="${escape(entry.source)}" data-category="${entry.category}" data-tier="${entry.tier || 'untiered'}"><summary><span class="equipment-overview"><span class="equipment-name">${escape(entry.name)}<span class="equipment-preview">${escape(preview)}</span></span><span class="equipment-kind">${entry.category}<span>${tierLabel}</span></span>${bookLabel(entry)}</span></summary><div class="equipment-body">${stats(values)}${entry.rulesSource === 'Core Rulebook' ? '<p class="notice">Core Rulebook (2025) entry; not listed in the supplied SRD 2.0 equipment tables. Confirm use with your GM.</p>' : ''}<h3>${entry.damage || entry.category === 'Armor' ? 'Feature' : 'Effect'}</h3><p>${entry.feature === '—' ? 'No additional feature.' : escape(entry.feature)}</p>${entry.category === 'Combat wheelchair' ? '<p>Equipped as a primary weapon. Combat wheelchair rules by Mark Thompson.</p>' : ''}${source(entry.page, entry.name, entry.rulesSource)}${entry.bookPage ? source(entry.bookPage, entry.name, 'Hope & Fear') : ''}</div></details>`;
      }).join('')}</div><nav id="equipment-pagination" class="pagination" aria-label="Equipment results"><button class="command" id="equipment-previous" type="button">Previous</button><span id="equipment-page" role="status"></span><button class="command" id="equipment-next" type="button">Next</button></nav></section>
      <section class="section" id="equipment-rules"><h2>Equipment at every tier</h2><div class="equipment-guidance"><div><h3>Weapons &amp; Proficiency</h3><p>Equip at most one primary and one secondary weapon, with a total burden of no more than two hands. Combat wheelchairs count as primary weapons. Magic weapons require a Spellcast trait.</p><p>Roll weapon damage dice equal to your Proficiency, then add the flat bonus once: d8+6 becomes 3d8+6 at Proficiency 3. Proficiency is not automatically equal to tier; advancement choices can increase it.</p><p>You can carry two inventory weapons. Switching an inventory weapon into use costs no Stress during a rest or calm moment; otherwise mark a Stress.</p>${source(55, 'Equipment & Weapons; Combat Wheelchair, pp. 70-71')}</div><div><h3>Armor &amp; thresholds</h3><p>Add your character level to both base armor thresholds, then apply feature modifiers. Your total Armor Score cannot exceed 12. Normally, marking one Armor Slot reduces incoming damage by one severity step; individual features can change this.</p><p>Only one armor can be active. Armor cannot be changed under pressure or carried as inventory armor; marked slots remain associated with that armor. Without armor, your Major threshold equals your level, Severe equals twice your level, and Armor Score is 0.</p>${source(72, 'Armor; Equipment, p. 55')}<a href="index.html#damage">Damage rules</a></div><div><h3>Loot &amp; availability</h3><p>Items are reusable unless their effect says otherwise; consumables are expended when used. The GM chooses rewards and availability. Neither book assigns a universal shop price to every entry.</p><p>For either book's loot table: common rolls use 1d12 or 2d12; uncommon 2d12 or 3d12; rare 3d12 or 4d12; legendary 4d12 or 5d12. These overlapping roll bands are not equipment tiers.</p>${source(75, 'Loot; Consumables, p. 80')}</div></div><p><a href="character-creation.html#advancement">Level and tier progression</a> · <a href="index.html#armor">Armor rules</a></p></section>
      <section class="section"><h2>Starting supplies</h2><p>At level 1, choose a Tier 1 two-handed primary weapon or a one-handed primary and one-handed secondary, plus Tier 1 armor. Begin with a torch, 50 feet of rope, basic supplies, one handful of gold, and a Minor Health Potion or Minor Stamina Potion. Add your class-specific starting item and any required spellcasting item, plus any supplies agreed with the GM.</p>${source(5, 'Choose Your Starting Equipment')}</section>`;
  }

  if (view === 'rules') rulesPage();
  if (view === 'creation') creationPage();
  if (view === 'classes') main.innerHTML = `<section class="section"><h2>Class comparison</h2><p class="notice">These are base class values. Subclass, ancestry, equipment, and advancement features may change them.</p>${filters({ domain: true })}<div class="entry-grid">${catalog.classes.map(classEntry).join('')}</div></section>`;
  if (view === 'domains') main.innerHTML = `<section class="section"><h2>Domain atlas</h2>${filters()}<div class="entry-grid">${catalog.domains.map(entry => `<article class="entry" id="${slug(entry.name)}" data-entry data-book="${escape(entry.source)}">${bookLabel(entry)}<h2>${entry.name}</h2><h3>${escape(entry.theme)}</h3><p>${escape(entry.summary)}</p><div class="domain-links">${catalog.classes.filter(character => character.domains.includes(entry.name)).map(character => `<a href="classes.html#${slug(character.name)}">${character.name}</a>`).join('')}</div>${source(7, entry.name)}</article>`).join('')}</div></section><section class="section" id="domain-growth"><h2>Domain cards from levels 1-10</h2><p>Begin with two level-1 cards from your class domains. At each level-up, gain a card at your level or lower from those domains. An advancement can grant another card. You may also exchange a previously acquired card at level-up for one of the same level or lower.</p><p>Only five domain cards can be active at once, even at higher tiers; the others remain in your vault. Swapping during downtime is free. Recalling a card during play costs that card's Recall Cost in Stress. Subclass, ancestry, and community cards do not use domain loadout slots.</p><p>Multiclass domain cards are capped at half your character level, rounded up. Individual card text governs level requirements, scaling, and any loadout exceptions.</p>${source(8, 'Domain Cards; Leveling Up & Multiclassing, p. 54')}<div class="actions"><a href="index.html#loadout">Card rules</a><a href="character-creation.html#advancement">Advancement</a><a href="character-creation.html#multiclassing">Multiclassing</a></div></section>`;
  if (view === 'frames') main.innerHTML = `<section class="section"><h2>Choose a shared premise</h2><p class="notice">The questions below are original session-zero prompts, not additional campaign rules. Detailed secrets and GM-only material remain in the books.</p>${filters()}<div class="entry-grid">${catalog.frames.map(entry => `<article class="entry" id="${slug(entry.name)}" data-entry data-book="${escape(entry.source)}">${bookLabel(entry)}<h2>${escape(entry.name)}</h2><h3>${escape(entry.theme)}</h3><p>${escape(entry.summary)}</p><p><strong>At session zero:</strong> ${escape(entry.question)}</p>${source(entry.page, 'Campaign Frames overview', entry.source === 'Core' ? 'Core Rulebook' : 'Hope & Fear')}</article>`).join('')}</div></section>`;
  if (view === 'options') main.innerHTML = `<section class="section"><h2>Hope &amp; Fear is published expansion material</h2><p>Assassin and Witch are no longer placeholder Void options in this reference. SRD 2.0 includes their published rules alongside Brawler, Warlock, and the Dread domain. Confirm which books your table is using before choosing an expansion option.</p><div class="entry-grid">${catalog.classes.filter(entry => entry.source !== 'Core').map(classEntry).join('')}</div></section>
    <section class="section"><h2>Ancestry</h2><p>Ancestry grants two features. For mixed ancestry, use the first feature from one ancestry and the second feature from another, with a shared fictional identity.</p><ul class="name-list">${catalog.ancestry.map(name => `<li>${name}</li>`).join('')}</ul>${source(4, 'Character Creation, Step 2; Ancestries, pp. 32-37')}</section>
    <section class="section"><h2>Community</h2><p>Community describes your upbringing or culture and grants a community feature. It is a separate choice from ancestry.</p><ul class="name-list">${catalog.communities.map(name => `<li>${name}</li>`).join('')}</ul>${source(4, 'Character Creation, Step 2; Communities, pp. 38-41')}</section>
    <section class="section"><h2>Transformations</h2><p>Transformations are an additional character layer, not a replacement for ancestry or community. Discuss their story consequences, benefits, and costs with the GM before introducing one.</p><ul class="name-list">${catalog.transformations.map(name => `<li>${name}</li>`).join('')}</ul>${source(42, 'Transformations, pp. 42-45')}<p><a href="character-creation.html">Return to character creation</a></p></section>`;

  if (view === 'equipment') equipmentPage();

  bindFilters();
  function revealHash() {
    if (!location.hash) return;
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    const target = document.getElementById(id);
    if (!target) return;
    if (view === 'equipment' && target.hidden && target.dataset.entry !== undefined) {
      document.getElementById('reset-filters').click();
      const search = document.getElementById('reference-search');
      search.value = target.dataset.name;
      search.dispatchEvent(new Event('input'));
    }
    if (target.tagName === 'DETAILS') target.open = true;
    requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  }
  addEventListener('hashchange', revealHash);
  revealHash();
})();