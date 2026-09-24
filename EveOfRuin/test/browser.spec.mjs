import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { chromium } from '../../Daggerheart/node_modules/playwright/index.mjs';
import { buildPack, EXPECTED_FILES } from '../model.mjs';

const BASE_PATH = '/EveOfRuin/';
const chapterFile = '06-night-of-blue-fire.md';
const sceneHeading = 'C6. Synthetic Signal Room';
const nextHeading = 'C7. Synthetic Exit';
const chapterId = chapterFile.replace(/\.md$/i, '');
const secret = 'Synthetic secret: the paper lantern contains a spare key.';
const sceneNote = 'Synthetic ruling: the party inspected the lantern without opening it.';
const handoff = {
  party: 'Synthetic party: Ada and Bea, waiting beside the test lantern.',
  recap: 'Synthetic recap: the party chose to question the sentries.',
  decisions: 'Synthetic continuity: no promise has been made.',
  threads: 'Synthetic question: who folded the paper lantern?',
  nextSession: 'Synthetic opening: ask whether the party takes the spare key.'
};

const tinyPng = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO9V4qQAAAAASUVORK5CYII=',
  'base64'
);

const expectedPathTitles = new Map(EXPECTED_FILES.map(name => [name, name.replace(/\.md$/i, '').replace(/-/g, ' ')]));
expectedPathTitles.set('00-introduction.md', 'Introduction');
expectedPathTitles.set(chapterFile, 'Chapter 6: Synthetic Blue Lantern');
expectedPathTitles.set('appendix-a-bestiary.md', 'Appendix A: Synthetic Bestiary');
expectedPathTitles.set('appendix-c-secrets-tracker.md', 'Appendix C: Synthetic Secrets Tracker');

const syntheticSources = EXPECTED_FILES.map(name => {
  if (name === '00-introduction.md') {
    return {
      name,
      markdown: `# Introduction

Original browser-test material only.

## Power of Secrets

Record a synthetic discovery without assuming a benefit.
`
    };
  }
  if (name === chapterFile) {
    return {
      name,
      markdown: `# Chapter 6: Synthetic Blue Lantern

This is original test prose, not adventure text.

## ${sceneHeading}

The violet paper lantern marks the test room. Nothing here is campaign history.

> The paper lantern rustles in a breeze.

| Signal | Observation | Decision | Consequence |
| --- | --- | --- | --- |
| Violet | A deliberately wide synthetic observation for narrow displays | Inspect carefully | Record the actual choice |
| Amber | A second entirely synthetic observation | Wait outside | Keep the decision open |

Two **Paper Sentries** wait here for an optional conversation.

[Paper Sentry Battle Map](./media/map-test.png)

[Remote reference](https://example.invalid/reference)

![Remote diagram](https://example.invalid/diagram.png)

<img src="https://example.invalid/raw-image.png" onerror="globalThis.sourceExecuted = true">

<script src="https://example.invalid/source.js"></script>

<iframe src="https://example.invalid/frame"></iframe>

[Executable reference](javascript:alert%281%29)

## ${nextHeading}

The synthetic exit remains quiet. This is a different passage.
`
    };
  }
  if (name === 'appendix-a-bestiary.md') {
    return {
      name,
      markdown: `# Appendix A: Synthetic Bestiary

#### Paper Sentry

*Medium Construct, Unaligned*

- **Armor Class** 14
- **Hit Points** 30 (4d8 + 12)
- **Speed** 30 ft.

| STR | DEX | CON | INT | WIS | CHA |
| --- | --- | --- | --- | --- | --- |
| 12 (+1) | 14 (+2) | 16 (+3) | 8 (-1) | 10 (+0) | 6 (-2) |

**Actions**

**Paper Tap.** A synthetic action for testing the complete statblock viewer.
`
    };
  }
  if (name === 'appendix-c-secrets-tracker.md') {
    return {
      name,
      markdown: `# Appendix C: Synthetic Secrets Tracker

This placeholder keeps the journal link available without real module text.
`
    };
  }
  return {
    name,
    markdown: `# ${expectedPathTitles.get(name)}

Synthetic placeholder text.
`
  };
});

const guides = {
  version: 1,
  chapters: [{
    file: chapterFile,
    summary: 'Synthetic chapter coaching for the chapter 6 test room.',
    startHere: ['Read the signal room before choosing an encounter.'],
    scenes: [{
      heading: sceneHeading,
      purpose: 'Let the players decide what the lantern means.',
      tips: ['Keep the synthetic clue separate from the table recap.'],
      watchFor: ['Conversation does not automatically start combat.'],
      next: ['The synthetic exit is available.'],
      encounters: [{
        name: 'Synthetic Paper Patrol',
        trigger: 'Only if the synthetic conversation becomes a fight.',
        creatures: [{ name: 'Paper Sentry', count: 2, note: 'Synthetic variant note: no overrides.' }],
        tactics: ['Keep the two test individuals distinct.'],
        resolution: 'Record the actual result rather than assuming victory.'
      }]
    }]
  }],
  sanctum: [],
  gaps: []
};

const pack = buildPack(syntheticSources, guides);
assert.equal(pack.documents.length, EXPECTED_FILES.length);
assert.equal(pack.coverage.missing.length, 0);
assert.equal(pack.statblocks.length, 1);
assert.equal(pack.statblocks[0].name, 'Paper Sentry');
assert.equal(pack.statblocks[0].hp, 30);
assert.equal(pack.statblocks[0].ac, 14);

const published = {
  format: 'eve-of-ruin-site',
  version: 1,
  pack,
  assets: [{
    id: 'map-test',
    name: 'map-06-synthetic-battle.png',
    reference: './media/map-test.png',
    src: './media/map-test.png'
  }]
};

const publicFiles = new Map([
  ['index.html', 'text/html; charset=utf-8'],
  ['portal.css', 'text/css; charset=utf-8'],
  ['app.mjs', 'text/javascript; charset=utf-8'],
  ['model.mjs', 'text/javascript; charset=utf-8'],
  ['storage.mjs', 'text/javascript; charset=utf-8'],
  ['markdown.mjs', 'text/javascript; charset=utf-8'],
  ['sw.js', 'text/javascript; charset=utf-8'],
  ['vendor/marked.esm.js', 'text/javascript; charset=utf-8'],
  ['vendor/LICENSE', 'text/plain; charset=utf-8']
].map(([name, type]) => [`${BASE_PATH}${name}`, {
  file: new URL(`../${name}`, import.meta.url), type
}]));
publicFiles.set(`${BASE_PATH}`, publicFiles.get(`${BASE_PATH}index.html`));
publicFiles.set(`${BASE_PATH}data/campaign.json`, {
  type: 'application/json; charset=utf-8',
  body: Buffer.from(JSON.stringify(published))
});
publicFiles.set(`${BASE_PATH}media/map-test.png`, {
  type: 'image/png',
  body: tinyPng
});

let browser;
let server;
let base;

before(async () => {
  server = createServer(async (request, response) => {
    const asset = publicFiles.get(request.url);
    if (request.method !== 'GET' || !asset) {
      response.writeHead(404).end('Not found');
      return;
    }
    try {
      if (asset.file) {
        const content = await readFile(asset.file);
        response.writeHead(200, { 'content-type': asset.type, 'cache-control': 'no-store' }).end(content);
      } else {
        response.writeHead(200, { 'content-type': asset.type, 'cache-control': 'no-store' }).end(asset.body);
      }
    } catch (error) {
      response.writeHead(500).end(`Public asset unavailable: ${error.code ?? error.message}`);
    }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  base = `http://127.0.0.1:${server.address().port}${BASE_PATH}`;
  browser = await chromium.launch({ headless: true });
});

after(async () => {
  try {
    await browser?.close();
  } finally {
    if (server?.listening) {
      const closed = new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
      server.closeAllConnections();
      await closed;
    }
  }
});

async function isolatedPage(t, width = 1440, initScript = null) {
  const context = await browser.newContext({ viewport: { width, height: 1000 }, acceptDownloads: true });
  if (initScript) await context.addInitScript(initScript);
  const remoteRequests = [];
  const pageErrors = [];
  t.after(async () => {
    await context.close();
    assert.deepEqual(remoteRequests, [], 'Imported source must never request remote resources.');
    assert.deepEqual(pageErrors, [], 'No unhandled browser errors.');
  });
  context.on('request', request => {
    if (/^https?:/.test(request.url()) && new URL(request.url()).origin !== new URL(base).origin) {
      remoteRequests.push(request.url());
    }
  });
  await context.route('**/*', route => {
    const url = route.request().url();
    return /^https?:/.test(url) && new URL(url).origin !== new URL(base).origin
      ? route.abort()
      : route.continue();
  });
  const page = await context.newPage();
  page.setDefaultTimeout(10000);
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.goto(base);
  await page.waitForFunction(() => document.querySelector('#save-status')?.textContent.includes('Adventure ready'));
  await page.locator('#chapter-nav button[data-doc]').first().waitFor({ state: 'attached' });
  return { context, page };
}

async function navigate(page, view) {
  await page.locator(`#workspace-nav [data-view="${view}"]`).click();
  await page.locator(`#workspace-nav [data-view="${view}"][aria-current="page"]`).waitFor();
}

async function waitSaved(page) {
  await page.waitForFunction(() => document.querySelector('#save-status')?.textContent === 'All changes saved locally');
  assert.equal(await page.locator('#error-banner').isVisible(), false);
}

async function selectScene(page) {
  await navigate(page, 'reader');
  const chapter = pack.documents.find(doc => doc.filename === chapterFile);
  assert.ok(chapter, 'Synthetic chapter 6 must be part of the imported pack.');
  if (await page.locator('#document-select').inputValue() !== chapter.id) {
    await page.locator('#document-select').selectOption(chapter.id);
    await waitSaved(page);
  }
  const section = chapter.sections.find(item => item.heading === sceneHeading);
  assert.ok(section, 'Fixture guidance must point to a real parsed heading.');
  await page.locator('#section-select').selectOption(section.id);
  await page.getByRole('heading', { name: sceneHeading, level: 1, exact: true }).waitFor();
  await waitSaved(page);
}

async function createPreset(page) {
  await selectScene(page);
  await page.getByRole('button', { name: 'Set up individuals', exact: true }).click();
  const dialog = page.getByRole('dialog');
  assert.equal(await dialog.getByLabel('Count for Paper Sentry', { exact: true }).inputValue(), '2');
  assert.equal(await dialog.getByLabel('Statblock for Paper Sentry', { exact: true }).inputValue(), pack.statblocks[0].id);
  await dialog.getByRole('button', { name: 'Create encounter with separate individuals' }).click();
  await page.locator('[data-actor-card]').nth(1).waitFor();
  await waitSaved(page);
  assert.equal(await page.locator('[data-actor-card]').count(), 2);
  const ids = await page.locator('[data-actor-card]').evaluateAll(cards => cards.map(card => card.dataset.actorCard));
  assert.notEqual(ids[0], ids[1]);
  return ids.map(id => page.locator(`[data-actor-card="${id}"]`));
}

async function setActorField(page, card, field, value) {
  const input = card.locator(`[data-field="${field}"]`);
  await input.fill(String(value));
  await input.press('Tab');
  await waitSaved(page);
  assert.equal(await card.locator(`[data-field="${field}"]`).inputValue(), String(value));
}

async function hitPoints(card, hp, tempHp = 0) {
  assert.equal(await card.locator('[data-field="hp"]').inputValue(), String(hp));
  assert.equal(await card.locator('[data-field="tempHp"]').inputValue(), String(tempHp));
  assert.equal(await card.locator('progress').getAttribute('value'), String(hp));
}

async function damageOrHeal(page, card, amount, operation) {
  await card.getByLabel('Amount', { exact: true }).fill(String(amount));
  await card.getByRole('button', { name: operation, exact: true }).click();
  await waitSaved(page);
}

async function exportBackup(page) {
  const downloading = page.waitForEvent('download');
  await page.locator('#export-button').click();
  const download = await downloading;
  assert.equal(await download.failure(), null);
  const stream = await download.createReadStream();
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  const backup = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  await download.delete();
  assert.equal(backup.format, 'eve-of-ruin-backup');
  return backup;
}

async function importBackup(page, backup, name = 'synthetic-backup.json') {
  page.once('dialog', dialog => dialog.accept());
  await page.locator('#pack-import').setInputFiles({
    name,
    mimeType: 'application/json',
    buffer: Buffer.from(JSON.stringify(backup))
  });
  await page.getByText('Backup state restored.', { exact: false }).waitFor();
  assert.equal(await page.locator('#error-banner').isVisible(), false);
}

test('chapter and scene reading remain usable when local storage is denied', async t => {
  const { page } = await isolatedPage(t, 1440, () => {
    Object.defineProperty(globalThis, 'indexedDB', { get() { throw new Error('Synthetic storage denial'); } });
  });
  assert.match(await page.locator('#save-status').textContent(), /local saving unavailable/);
  await navigate(page, 'reader');
  const chapter = pack.documents.find(doc => doc.filename === chapterFile);
  const section = chapter.sections.find(item => item.heading === sceneHeading);
  await page.locator('#section-select').selectOption(section.id);
  await page.getByRole('heading', { name: sceneHeading, level: 1, exact: true }).waitFor();
  await page.getByRole('button', { name: 'Next section', exact: true }).click();
  await page.getByRole('heading', { name: nextHeading, level: 1, exact: true }).waitFor();
  const introduction = pack.documents.find(doc => doc.filename === '00-introduction.md');
  await page.locator('#document-select').selectOption(introduction.id);
  await page.locator('.page-heading').getByRole('heading', { name: 'Introduction', level: 1, exact: true }).waitFor();
  await page.locator(`#chapter-nav [data-doc="${chapter.id}"]`).click();
  await page.locator('.page-heading').getByRole('heading', { name: chapter.title, level: 1, exact: true }).waitFor();
  assert.match(await page.locator('#error-banner').textContent(), /Local storage is unavailable/);
});

test('loopback fixture server exposes only explicit public portal assets', async () => {
  for (const path of publicFiles.keys()) {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 200, path);
    await response.arrayBuffer();
  }
  for (const path of [
    '/',
    '/index.html',
    '/Daggerheart/index.html',
    '/EveOfRuin/.private/campaign-pack.json',
    '/EveOfRuin/00-introduction.md',
    '/EveOfRuin/scripts/build-pack.mjs',
    '/EveOfRuin/test/browser.spec.mjs',
    '/EveOfRuin/%2eprivate/campaign-pack.json',
    '/EveOfRuin/%2e%2e%2findex.html'
  ]) {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 404, path);
    await response.arrayBuffer();
  }
});

test('fresh browser loads chapter six immediately without file import', async t => {
  const { page } = await isolatedPage(t);
  assert.match(await page.locator('.hero-card').innerText(), /Chapter 6: Synthetic Blue Lantern/);
  await navigate(page, 'reader');
  assert.equal(await page.locator('#document-select').inputValue(), chapterId);
  await navigate(page, 'library');
  assert.match(await page.locator('#main').innerText(), /Optional backup restore \/ advanced import/);
  await page.getByText('Optional backup restore / advanced import', { exact: true }).click();
  assert.match(await page.locator('#main').innerText(), /Campaign backup \(\.json\)/);
});

test('chapter six scene, preset encounter and image mapping stay usable without import', async t => {
  const { page } = await isolatedPage(t);
  await selectScene(page);
  assert.match(await page.locator('#source-text').innerText(), /A deliberately wide synthetic observation/);
  assert.doesNotMatch(await page.locator('#source-text').innerText(), /The synthetic exit remains quiet/);
  assert.equal(await page.locator('#source-text table tbody tr').count(), 2);
  await page.getByRole('button', { name: /Paper Sentry Battle Map View image/, exact: false }).click();
  await page.locator('#modal-body img.local-map').waitFor();
  assert.equal(await page.locator('#modal-body img.local-map').getAttribute('src'), './media/map-test.png');
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByRole('button', { name: 'Set up individuals', exact: true }).click();
  const dialog = page.getByRole('dialog');
  await dialog.getByRole('button', { name: 'Create encounter with separate individuals' }).click();
  await page.locator('[data-actor-card]').nth(1).waitFor();
  const ids = await page.locator('[data-actor-card]').evaluateAll(cards => cards.map(card => card.dataset.actorCard));
  const [first, second] = ids.map(id => page.locator(`[data-actor-card="${id}"]`));
  await hitPoints(first, 30);
  await hitPoints(second, 30);
  await setActorField(page, first, 'tempHp', 5);
  await damageOrHeal(page, first, 8, 'Apply damage');
  await hitPoints(first, 27, 0);
  await damageOrHeal(page, second, 7, 'Apply damage');
  await hitPoints(second, 23);
  await damageOrHeal(page, first, 2, 'Heal');
  await hitPoints(first, 29, 0);
  await damageOrHeal(page, first, 99, 'Heal');
  await hitPoints(first, 30, 0);
  await setActorField(page, first, 'tempHp', 4);
  await setActorField(page, first, 'initiative', 9);
  await setActorField(page, second, 'initiative', 17);
  await page.getByRole('button', { name: 'Sort initiative', exact: true }).click();
  assert.equal(await page.locator('[data-actor-card]').first().getAttribute('data-actor-card'), await second.getAttribute('data-actor-card'));
  await page.getByRole('button', { name: 'Next turn', exact: true }).click();
  await waitSaved(page);
  assert.match(await second.getAttribute('class'), /\bactive\b/);
  await page.getByRole('button', { name: 'Next turn', exact: true }).click();
  await waitSaved(page);
  assert.match(await first.getAttribute('class'), /\bactive\b/);
  await page.getByRole('button', { name: 'Next turn', exact: true }).click();
  await waitSaved(page);
  assert.match(await page.locator('#main').innerText(), /Round 2/);
  await first.getByRole('button', { name: 'View full statblock', exact: true }).click();
  assert.match(await page.locator('#modal-body').innerText(), /Paper Tap/);
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.reload();
  await page.locator('[data-actor-card]').nth(1).waitFor();
  await hitPoints(first, 30, 4);
  await hitPoints(second, 23);
  assert.equal(await first.locator('[data-field="initiative"]').inputValue(), '9');
  assert.equal(await second.locator('[data-field="initiative"]').inputValue(), '17');
  assert.match(await second.getAttribute('class'), /\bactive\b/);
  assert.match(await page.locator('#main').innerText(), /Round 2/);
});

test('handoff, scene notes and secrets survive backup restore; malformed imports preserve existing data', async t => {
  const { page } = await isolatedPage(t);
  await selectScene(page);
  await createPreset(page);
  await selectScene(page);
  await page.locator('#section-notes').fill(sceneNote);
  await waitSaved(page);
  await navigate(page, 'journal');
  for (const [key, value] of Object.entries(handoff)) await page.locator(`[data-handoff="${key}"]`).fill(value);
  await waitSaved(page);
  await page.getByLabel('New discovered secret', { exact: true }).fill(secret);
  await page.getByRole('button', { name: 'Record secret', exact: true }).click();
  await page.getByText(secret, { exact: true }).waitFor();
  await page.getByLabel('Spent at our table', { exact: true }).check();
  await waitSaved(page);
  const backup = await exportBackup(page);
  assert.deepEqual(backup.state.handoff, handoff);
  assert.equal(backup.state.secrets[0].used, true);
  assert.ok(Object.values(backup.state.notes).includes(sceneNote));
  assert.equal(backup.state.encounters[0].combatants.length, 2);

  await page.locator('[data-handoff="recap"]').fill('Synthetic change to be replaced by the backup.');
  await waitSaved(page);
  await navigate(page, 'library');
  await importBackup(page, backup, 'synthetic-backup.json');
  const restored = await exportBackup(page);
  assert.deepEqual(restored.state, backup.state);
  assert.deepEqual(restored.pack, backup.pack);
  assert.deepEqual(restored.assets, backup.assets);
  await page.reload();
  await page.locator('#save-status').waitFor();
  await navigate(page, 'journal');
  for (const [key, value] of Object.entries(handoff)) assert.equal(await page.locator(`[data-handoff="${key}"]`).inputValue(), value);
  assert.equal(await page.getByLabel('Spent at our table', { exact: true }).isChecked(), true);
  await selectScene(page);
  assert.equal(await page.locator('#section-notes').inputValue(), sceneNote);
  const beforeMalformed = await exportBackup(page);
  await navigate(page, 'library');
  const invalidState = structuredClone(backup);
  invalidState.state.handoff.recap = 123;
  for (const [index, malformed] of ['{ invalid JSON', { format: 'not-a-pack' }, invalidState].entries()) {
    await page.locator('#pack-import').setInputFiles({
      name: `malformed-${index}.json`,
      mimeType: 'application/json',
      buffer: Buffer.from(typeof malformed === 'string' ? malformed : JSON.stringify(malformed))
    });
    await page.locator('#error-banner').waitFor({ state: 'visible' });
    const retained = await exportBackup(page);
    assert.deepEqual(retained.state, beforeMalformed.state);
    assert.deepEqual(retained.pack, beforeMalformed.pack);
    await page.reload();
    await page.locator('#pack-import').waitFor({ state: 'attached' });
    assert.equal(await page.locator('#error-banner').isVisible(), false);
  }
});

test('source HTML, image references and links stay inert without remote requests', async t => {
  const { page, context } = await isolatedPage(t);
  await selectScene(page);
  const source = page.locator('#source-text');
  assert.match(await source.innerText(), /Image not supplied: Remote diagram/);
  assert.match(await source.innerText(), /<script src=/);
  assert.equal(await source.locator('script,img,iframe,object,embed,a[href],[onerror],[onclick]').count(), 0);
  assert.equal(await page.evaluate(() => globalThis.sourceExecuted), undefined);
  await source.getByText('Remote reference', { exact: false }).click();
  await source.getByText('Executable reference', { exact: false }).click();
  assert.equal(context.pages().length, 1);
  assert.equal(page.url(), `${base}#reader`);
  await navigate(page, 'library');
  await page.getByRole('button', { name: 'View image', exact: true }).click();
  await page.locator('#modal-body img.local-map').waitFor();
  assert.equal(await page.locator('#modal-body img.local-map').getAttribute('src'), './media/map-test.png');
});

test('fully imported synthetic pack and saved encounter work offline through the service worker', async t => {
  const { page, context } = await isolatedPage(t);
  await selectScene(page);
  await createPreset(page);
  await selectScene(page);
  await page.locator('#section-notes').fill(sceneNote);
  await waitSaved(page);
  await page.getByRole('button', { name: /Paper Sentry Battle Map View image/, exact: false }).click();
  await page.locator('#modal-body img.local-map').waitFor();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  await page.waitForFunction(() => document.querySelector('#offline-status').textContent.includes('Adventure cached for offline use'));
  await context.setOffline(true);
  const response = await page.reload();
  assert.equal(response.status(), 200);
  assert.equal(response.fromServiceWorker(), true, 'Offline reload must use the cached app shell.');
  await page.getByRole('heading', { name: sceneHeading, level: 1, exact: true }).waitFor();
  assert.equal(await page.locator('#section-notes').inputValue(), sceneNote);
  assert.match(await page.locator('#source-text').innerText(), /A deliberately wide synthetic observation/);
  await page.getByRole('button', { name: /Paper Sentry Battle Map View image/, exact: false }).click();
  await page.locator('#modal-body img.local-map').waitFor();
  assert.equal(await page.locator('#modal-body img.local-map').getAttribute('src'), './media/map-test.png');
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await navigate(page, 'combat');
  const first = page.locator('[data-actor-card]').first();
  await damageOrHeal(page, first, 6, 'Apply damage');
  await hitPoints(first, 24);
  await page.reload();
  await page.locator('[data-actor-card]').nth(1).waitFor();
  await hitPoints(first, 24);
  await hitPoints(page.locator('[data-actor-card]').nth(1), 30);
});

async function fitsViewport(page, width, view) {
  const metrics = await page.evaluate(() => ({
    width: document.documentElement.clientWidth,
    scroll: document.documentElement.scrollWidth,
    clippedControls: [...document.querySelectorAll('#main input, #main select, #main textarea, #main button, #workspace-nav a')]
      .filter(element => {
        const bounds = element.getBoundingClientRect();
        return bounds.width && bounds.height && (bounds.left < -1 || bounds.right > innerWidth + 1);
      }).map(element => element.outerHTML.slice(0, 160))
  }));
  assert.ok(metrics.scroll <= metrics.width + 1, `${view} overflows at ${width}px: ${JSON.stringify(metrics)}`);
  assert.deepEqual(metrics.clippedControls, [], `${view} controls extend outside ${width}px viewport`);
}

for (const width of [1440, 390, 320]) {
  test(`navigation, source tables and individual tracker remain usable at ${width}px`, async t => {
    const { page } = await isolatedPage(t, width);
    await fitsViewport(page, width, 'welcome');
    await selectScene(page);
    await fitsViewport(page, width, 'reader');
    const table = page.locator('#source-text table');
    assert.equal(await table.locator('tbody tr').count(), 2);
    const tableMetrics = await table.evaluate(element => {
      const rect = element.getBoundingClientRect();
      element.scrollLeft = element.scrollWidth;
      return { left: rect.left, right: rect.right, width: element.clientWidth, scroll: element.scrollWidth, offset: element.scrollLeft };
    });
    assert.ok(tableMetrics.left >= 0 && tableMetrics.right <= width + 1);
    if (tableMetrics.scroll > tableMetrics.width) assert.ok(tableMetrics.offset > 0, 'Wide table must scroll within the reader');
    const [first, second] = await createPreset(page);
    await fitsViewport(page, width, 'tracker');
    await damageOrHeal(page, first, 3, 'Apply damage');
    await hitPoints(first, 27, 0);
    await hitPoints(second, 30);
    for (const view of ['journal', 'library', 'sanctum', 'dashboard']) {
      await navigate(page, view);
      await fitsViewport(page, width, view);
    }
  });
}
