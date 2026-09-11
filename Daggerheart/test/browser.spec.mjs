import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const base = process.env.DAGGERHEART_BASE_URL || 'http://127.0.0.1:8766/Daggerheart/';
const output = new URL('../test-output/', import.meta.url);
let browser;

before(async () => {
  browser = await chromium.launch({ headless: true });
  await mkdir(output, { recursive: true });
});
after(async () => { await browser?.close(); });

async function isolatedPage(contextTest) {
  const context = await browser.newContext();
  contextTest.after(() => context.close());
  await context.route('https://fonts.googleapis.com/**', route => route.abort());
  await context.route('https://fonts.gstatic.com/**', route => route.abort());
  const page = await context.newPage();
  return { context, page };
}

test('all reference views render, link correctly, and fit desktop and mobile', async contextTest => {
  const { page } = await isolatedPage(contextTest);
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const destinations = new Set();
  const pages = ['index', 'classes', 'domains', 'campaign-frames', 'void-options', 'character-creation', 'equipment'];
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const name of pages) {
      const response = await page.goto(`${base}${name}.html`);
      assert.equal(response.status(), 200);
      await page.locator('.site-nav').waitFor();
      const metrics = await page.evaluate(() => ({
        width: document.documentElement.clientWidth,
        scroll: document.documentElement.scrollWidth,
        image: document.querySelector('.brand-mark').naturalWidth,
        heading: document.querySelector('h1').textContent,
        links: [...document.querySelectorAll('a[href]')].map(anchor => anchor.href),
        clipped: [...document.querySelectorAll('h1,h2,h3,.command')].filter(element => element.scrollWidth > element.clientWidth + 1).map(element => element.textContent)
      }));
      assert.ok(metrics.scroll <= metrics.width + 1, `${name} overflows at ${width}`);
      assert.ok(metrics.image > 0, `${name}: compatibility mark missing`);
      assert.ok(metrics.heading.length > 0);
      assert.deepEqual(metrics.clipped, [], `${name}: clipped text at ${width}`);
      assert.equal(await page.locator('textarea,#worksheet,#roll-tool,a[href*="character-sheet"]').count(), 0, `${name}: retired controls`);
      assert.equal(await page.locator('input:not([type="search"]):not(#damage-tool input)').count(), 0, `${name}: unexpected data inputs`);
      for (const link of metrics.links) if (link.startsWith(new URL(base).origin)) destinations.add(link.split('#')[0]);
      if (['index', 'classes', 'equipment'].includes(name) && width !== 320) {
        await page.screenshot({ path: new URL(`${name}-${width}.png`, output).pathname, fullPage: true });
      }
    }
  }
  for (const address of destinations) {
    const response = await page.request.get(address);
    assert.equal(response.status(), 200, address);
  }
  assert.deepEqual(errors, []);
});

test('pointer, keyboard, filtering, and deep links work', async contextTest => {
  const { page } = await isolatedPage(contextTest);
  await page.goto(base);
  await page.getByLabel('Mark one available Armor Slot').check();
  assert.match(await page.locator('#damage-result').innerText(), /Mark 1 HP/);
  await page.getByLabel('Direct damage', { exact: true }).check();
  assert.match(await page.locator('#damage-result').innerText(), /Mark 2 HP/);
  await page.getByLabel('Direct damage', { exact: true }).focus();
  await page.keyboard.press('Space');
  assert.match(await page.locator('#damage-result').innerText(), /Mark 1 HP/);
  await page.getByLabel('Major threshold').fill('20');
  assert.match(await page.locator('#damage-result').innerText(), /Severe above Major/);
  await page.goto(`${base}classes.html`);
  await page.getByRole('combobox', { name: 'Book', exact: true }).selectOption('Hope & Fear');
  assert.equal(await page.locator('[data-entry]:visible').count(), 4);
  await page.getByRole('combobox', { name: 'Domain', exact: true }).selectOption('Dread');
  assert.equal(await page.locator('[data-entry]:visible').count(), 2);
  await page.getByRole('searchbox').fill('no-such-character');
  assert.equal(await page.locator('[data-entry]:visible').count(), 0);
  await page.getByRole('button', { name: 'Clear filters' }).click();
  assert.equal(await page.locator('[data-entry]:visible').count(), 13);
  await page.goto(`${base}index.html#reaction-rolls`);
  assert.equal(await page.locator('#reaction-rolls').getAttribute('open'), '');
  await page.goto(`${base}character-sheet.html`);
  await page.waitForURL('**/Daggerheart/index.html');
  await page.locator('#rules-title').waitFor();
});

test('reference pages leave legacy player data untouched and contain no editor', async contextTest => {
  const { context, page } = await isolatedPage(contextTest);
  const saved = { daggerheartPrimerWorksheet: '{broken-existing-data', daggerheartCharacterSheet: '{"characterName":"Existing name","manualHp":"9"}' };
  await context.addInitScript(data => {
    if (!localStorage.getItem('reference-test-seeded')) {
      for (const [key, value] of Object.entries(data)) localStorage.setItem(key, value);
      localStorage.setItem('reference-test-seeded', '1');
    }
    globalThis.storageMutations = 0;
    for (const method of ['setItem', 'removeItem', 'clear']) {
      const original = Storage.prototype[method];
      Storage.prototype[method] = function (...args) {
        globalThis.storageMutations++;
        return original.apply(this, args);
      };
    }
  }, saved);
  for (const name of ['character-creation', 'index', 'classes', 'domains', 'campaign-frames', 'void-options', 'equipment', 'character-sheet']) {
    await page.goto(`${base}${name}.html`);
    if (name === 'character-sheet') await page.waitForURL('**/Daggerheart/index.html');
    await page.locator('.site-nav').waitFor();
    if (name === 'character-creation') assert.equal(await page.locator('input,textarea,form').count(), 0);
    if (await page.locator('#damage-tool').count()) await page.getByLabel('Final damage').fill('8');
    const state = await page.evaluate(() => ({
      mutations: globalThis.storageMutations,
      daggerheartPrimerWorksheet: localStorage.getItem('daggerheartPrimerWorksheet'),
      daggerheartCharacterSheet: localStorage.getItem('daggerheartCharacterSheet')
    }));
    assert.deepEqual(state, { mutations: 0, ...saved }, name);
  }
});

test('equipment filters, pagination, details, and all-tier progression work', async contextTest => {
  const { page } = await isolatedPage(contextTest);
  await page.goto(`${base}equipment.html`);
  assert.equal(await page.locator('[data-entry]').count(), 633);
  assert.equal(await page.locator('[data-entry]:visible').count(), 24);
  const firstName = await page.locator('[data-entry]:visible').first().getAttribute('data-name');
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  assert.equal(await page.locator('#equipment-page').innerText(), 'Page 2 of 27');
  assert.notEqual(await page.locator('[data-entry]:visible').first().getAttribute('data-name'), firstName);
  await page.getByRole('combobox', { name: 'Book', exact: true }).selectOption('Hope & Fear');
  await page.getByRole('combobox', { name: 'Type', exact: true }).selectOption('Armor');
  await page.getByRole('combobox', { name: 'Tier', exact: true }).selectOption('4');
  assert.equal(await page.locator('[data-entry]:visible').count(), 10);
  assert.equal(await page.locator('[data-entry]:visible:not([data-tier="4"][data-book="Hope & Fear"][data-category="Armor"])').count(), 0);
  await page.getByRole('searchbox').fill('Rune-Forged Exosuit');
  const armor = page.locator('[data-entry]:visible');
  await armor.locator('summary').focus();
  await page.keyboard.press('Enter');
  assert.equal(await armor.getAttribute('open'), '');
  assert.match(await armor.innerText(), /12[\s\S]*39[\s\S]*7[\s\S]*Attuned/);
  await page.getByRole('searchbox').fill('not-real-equipment');
  assert.equal(await page.locator('[data-entry]:visible').count(), 0);
  await page.getByRole('button', { name: 'Clear filters' }).click();
  assert.equal(await page.locator('#equipment-page').innerText(), 'Page 1 of 27');
  await page.getByRole('combobox', { name: 'Type', exact: true }).selectOption('Consumable');
  await page.getByRole('combobox', { name: 'Tier', exact: true }).selectOption('untiered');
  assert.equal(await page.locator('#result-count').innerText(), '120 of 633 entries');
  await page.goto(`${base}equipment.html?tier=4&type=Combat%20wheelchair`);
  assert.equal(await page.locator('[data-entry]:visible').count(), 3);
  await page.goto(`${base}equipment.html#equipment-armor-savior-chainmail`);
  assert.equal(await page.locator('#equipment-armor-savior-chainmail').isVisible(), true);
  assert.equal(await page.locator('#equipment-armor-savior-chainmail').getAttribute('open'), '');
  await page.goto(`${base}equipment.html?q=Ghostblade`);
  await page.locator('[data-entry]:visible summary').click();
  assert.match(await page.locator('[data-entry]:visible .source').innerText(), /Core Rulebook.*120/);
  assert.match(await page.locator('[data-entry]:visible .notice').innerText(), /not listed/);
  await page.goto(`${base}character-creation.html#advancement`);
  assert.equal(await page.locator('#advancement tbody tr').count(), 4);
  await page.locator('#advancement').getByRole('link', { name: 'Tier 4', exact: true }).click();
  assert.equal(await page.locator('#tier-filter').inputValue(), '4');
  assert.equal(await page.locator('[data-entry]:visible:not([data-tier="4"])').count(), 0);
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(`${base}equipment.html?book=Hope%20%26%20Fear&type=Armor&tier=4`);
    await page.getByRole('searchbox').fill('Rune-Forged Exosuit');
    await page.locator('[data-entry]:visible summary').click();
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    await page.screenshot({ path: new URL(`equipment-detail-${width}.png`, output).pathname, fullPage: true });
  }
});