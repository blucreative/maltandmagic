import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { chromium } from '../../Daggerheart/node_modules/playwright/index.mjs';
import { buildPack } from '../model.mjs';

// Serve only the public shell, never the repository or private source directory.
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
].map(([name, type]) => [`/EveOfRuin/${name}`, {
  file: new URL(`../${name}`, import.meta.url), type
}]));
publicFiles.set('/EveOfRuin/', publicFiles.get('/EveOfRuin/index.html'));

const chapterFile = '06-night-of-blue-fire.md';
const sceneHeading = 'C6. Synthetic Signal Room';
const nextHeading = 'C7. Synthetic Exit';
const passage = 'A violet paper lantern marks the test room. Nothing here is campaign history.';
const secret = 'Synthetic secret: the paper lantern contains a spare key.';
const sceneNote = 'Synthetic ruling: the party inspected the lantern without opening it.';
const handoff = {
  party: 'Synthetic party: Ada and Bea, waiting beside the test lantern.',
  recap: 'Synthetic recap: the party chose to question the sentries.',
  decisions: 'Synthetic continuity: no promise has been made.',
  threads: 'Synthetic question: who folded the paper lantern?',
  nextSession: 'Synthetic opening: ask whether the party takes the spare key.'
};
const sources = [
  {
    name: '00-introduction.md',
    markdown: '# Synthetic Introduction\n\nOriginal browser-test material only.\n\n## Power of Secrets\n\nRecord a synthetic discovery without assuming a benefit.\n'
  },
  {
    name: chapterFile,
    markdown: `# Chapter 6: Synthetic Blue Lantern

This is original test prose, not adventure text.

## ${sceneHeading}

${passage}

> The paper lantern rustles in a breeze.

| Signal | Observation | Decision | Consequence |
| --- | --- | --- | --- |
| Violet | A deliberately wide synthetic observation for narrow displays | Inspect carefully | Record the actual choice |
| Amber | A second entirely synthetic observation | Wait outside | Keep the decision open |

Two **Paper Sentries** wait here for an optional conversation.

[Remote reference](https://example.invalid/reference)

![Remote diagram](https://example.invalid/diagram.png)

<img src="https://example.invalid/raw-image.png" onerror="globalThis.sourceExecuted = true">

<script src="https://example.invalid/source.js"></script>

<iframe src="https://example.invalid/frame"></iframe>

[Executable reference](javascript:alert%281%29)

## ${nextHeading}

The synthetic exit remains quiet. This is a different passage.
`
  },
  {
    name: 'appendix-a-bestiary.md',
    markdown: `# Appendix A: Synthetic Bestiary

## Paper Sentry

*Medium Construct, Unaligned*

- **Armor Class** 14
- **Hit Points** 30 (4d8 + 12)
- **Speed** 30 ft.

| STR | DEX | CON | INT | WIS | CHA |
| --- | --- | --- | --- | --- | --- |
| 12 (+1) | 14 (+2) | 16 (+3) | 8 (-1) | 10 (+0) | 6 (-2) |

### Actions

**Paper Tap.** A synthetic action for testing the complete statblock viewer.
`
  }
];
const guides = {
  version: 1,
  chapters: [{
    file: chapterFile,
    summary: 'Synthetic chapter coaching, not confirmed table history.',
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

let browser;
let server;
let base;
let pack;

before(async () => {
  pack = buildPack(sources, guides);
  assert.equal(pack.documents.length, 3);
  assert.ok(pack.coverage.missing.length > 0, 'The deliberately partial source set must report gaps');
  assert.equal(pack.statblocks.length, 1, 'The synthetic source must produce one real parsed statblock');
  assert.equal(pack.statblocks[0].name, 'Paper Sentry');
  assert.equal(pack.statblocks[0].hp, 30);
  server = createServer(async (request, response) => {
    const asset = publicFiles.get(request.url);
    if (request.method !== 'GET' || !asset) {
      response.writeHead(404).end('Not found');
      return;
    }
    try {
      const content = await readFile(asset.file);
      response.writeHead(200, { 'content-type': asset.type, 'cache-control': 'no-store' }).end(content);
    } catch (error) {
      response.writeHead(500).end(`Public asset unavailable: ${error.code}`);
    }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  base = `http://127.0.0.1:${server.address().port}/EveOfRuin/`;
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

async function isolatedPage(t, width = 1440) {
  const context = await browser.newContext({ viewport: { width, height: 1000 }, acceptDownloads: true });
  const remoteRequests = [];
  const pageErrors = [];
  t.after(async () => {
    await context.close();
    assert.deepEqual(remoteRequests, [], 'Imported source must never request remote resources');
    assert.deepEqual(pageErrors, [], 'No unhandled browser errors');
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
  await page.locator('#pack-import').waitFor();
  await page.waitForFunction(() => document.querySelector('#save-status').textContent === 'Local storage ready');
  return { context, page };
}

async function importJSON(page, value, name = 'synthetic-pack.json') {
  await page.locator('#pack-import').setInputFiles({
    name, mimeType: 'application/json', buffer: Buffer.from(typeof value === 'string' ? value : JSON.stringify(value))
  });
}

async function importPack(page) {
  await importJSON(page, pack);
  await page.getByRole('heading', { name: 'Pick up the thread.', exact: true }).waitFor();
  assert.match(await page.locator('#notice').innerText(), /Imported 3 documents and 1 statblocks/);
  assert.equal(await page.locator('#error-banner').isVisible(), false);
}

async function navigate(page, view) {
  await page.locator(`#workspace-nav [data-view="${view}"]`).click();
  await page.locator(`#workspace-nav [data-view="${view}"][aria-current="page"]`).waitFor();
}

async function saved(page) {
  await page.waitForFunction(() => document.querySelector('#save-status').textContent === 'All changes saved locally');
  assert.equal(await page.locator('#error-banner').isVisible(), false);
}

async function selectScene(page) {
  await navigate(page, 'reader');
  const chapter = pack.documents.find(doc => doc.filename === chapterFile);
  if (await page.locator('#document-select').inputValue() !== chapter.id) {
    await page.locator('#document-select').selectOption(chapter.id);
    await saved(page);
  }
  const section = chapter.sections.find(item => item.heading === sceneHeading);
  assert.ok(section, 'Fixture guidance must point to a real parsed heading');
  await page.locator('#section-select').selectOption(section.id);
  await page.getByRole('heading', { name: sceneHeading, level: 1, exact: true }).waitFor();
  await saved(page);
}

async function createPreset(page) {
  await selectScene(page);
  await page.getByRole('button', { name: 'Set up individuals', exact: true }).click();
  const dialog = page.getByRole('dialog');
  assert.equal(await dialog.getByLabel('Count for Paper Sentry', { exact: true }).inputValue(), '2');
  assert.equal(await dialog.getByLabel('Statblock for Paper Sentry', { exact: true }).inputValue(), pack.statblocks[0].id);
  await dialog.getByRole('button', { name: 'Create encounter with separate individuals' }).click();
  await page.locator('[data-actor-card]').nth(1).waitFor();
  await saved(page);
  assert.equal(await page.locator('[data-actor-card]').count(), 2);
  const ids = await page.locator('[data-actor-card]').evaluateAll(cards => cards.map(card => card.dataset.actorCard));
  assert.notEqual(ids[0], ids[1]);
  return ids.map(id => page.locator(`[data-actor-card="${id}"]`));
}

async function setActorField(page, card, field, value) {
  const input = card.locator(`[data-field="${field}"]`);
  await input.fill(String(value));
  await input.press('Tab');
  await saved(page);
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
  await saved(page);
}

async function exportBackup(page) {
  const downloading = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export backup', exact: true }).click();
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

test('loopback fixture server exposes only explicit public portal assets', async () => {
  for (const path of publicFiles.keys()) {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 200, path);
    await response.arrayBuffer();
  }
  for (const path of [
    '/', '/index.html', '/Daggerheart/index.html',
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

test('pack import bookmarks chapter six, preserves source passages and shows matching GM coaching', async t => {
  const { page } = await isolatedPage(t);
  await importPack(page);
  assert.match(await page.locator('.hero-card').innerText(), /Chapter 6: Synthetic Blue Lantern/);
  assert.match(await page.locator('#main').innerText(), /Source set incomplete/);
  await navigate(page, 'reader');
  assert.match(await page.locator('#source-text').innerText(), new RegExp(passage.replaceAll('.', '\\.')));
  assert.match(await page.locator('#source-text').innerText(), /The synthetic exit remains quiet/);
  await selectScene(page);
  assert.match(await page.locator('#source-text').innerText(), /A violet paper lantern/);
  assert.doesNotMatch(await page.locator('#source-text').innerText(), /The synthetic exit remains quiet/);
  await page.getByRole('heading', { name: 'Let the players decide what the lantern means.' }).waitFor();
  assert.equal(await page.locator('#source-text table tbody tr').count(), 2);
  await page.getByRole('button', { name: 'Mark as prepared', exact: true }).click();
  await page.getByRole('button', { name: 'Mark as not prepared', exact: true }).waitFor();
  await page.getByRole('button', { name: 'Next section', exact: true }).click();
  await page.getByRole('heading', { name: nextHeading, level: 1, exact: true }).waitFor();
  assert.doesNotMatch(await page.locator('#source-text').innerText(), /A violet paper lantern/);
  await page.getByRole('button', { name: 'Previous section', exact: true }).click();
  await page.getByRole('heading', { name: sceneHeading, level: 1, exact: true }).waitFor();
  await saved(page);
  await page.reload();
  await page.getByRole('heading', { name: sceneHeading, level: 1, exact: true }).waitFor();
  await page.getByRole('button', { name: 'Mark as not prepared', exact: true }).waitFor();
});

test('preset individuals independently track temporary HP, damage, healing, initiative and reloads', async t => {
  const { page } = await isolatedPage(t);
  await importPack(page);
  const [first, second] = await createPreset(page);
  await hitPoints(first, 30);
  await hitPoints(second, 30);
  await setActorField(page, first, 'tempHp', 5);
  await damageOrHeal(page, first, 8, 'Apply damage');
  await hitPoints(first, 27);
  await hitPoints(second, 30);
  await damageOrHeal(page, second, 7, 'Apply damage');
  await damageOrHeal(page, first, 2, 'Heal');
  await hitPoints(first, 29);
  await hitPoints(second, 23);
  await damageOrHeal(page, first, 99, 'Heal');
  await hitPoints(first, 30);
  await setActorField(page, first, 'tempHp', 4);
  await setActorField(page, first, 'initiative', 9);
  await setActorField(page, second, 'initiative', 17);
  await page.getByRole('button', { name: 'Sort initiative', exact: true }).click();
  assert.equal(await page.locator('[data-actor-card]').first().getAttribute('data-actor-card'), await second.getAttribute('data-actor-card'));
  await page.getByRole('button', { name: 'Next turn', exact: true }).click();
  await saved(page);
  assert.match(await second.getAttribute('class'), /\bactive\b/);
  await page.getByRole('button', { name: 'Next turn', exact: true }).click();
  await saved(page);
  assert.match(await first.getAttribute('class'), /\bactive\b/);
  await page.getByRole('button', { name: 'Next turn', exact: true }).click();
  await saved(page);
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
  await importPack(page);
  await createPreset(page);
  await selectScene(page);
  await page.locator('#section-notes').fill(sceneNote);
  await saved(page);
  await navigate(page, 'journal');
  for (const [key, value] of Object.entries(handoff)) await page.locator(`[data-handoff="${key}"]`).fill(value);
  await saved(page);
  await page.getByLabel('New discovered secret', { exact: true }).fill(secret);
  await page.getByRole('button', { name: 'Record secret', exact: true }).click();
  await page.getByText(secret, { exact: true }).waitFor();
  await page.getByLabel('Spent at our table', { exact: true }).check();
  await saved(page);
  const backup = await exportBackup(page);
  assert.deepEqual(backup.state.handoff, handoff);
  assert.equal(backup.state.secrets[0].used, true);
  assert.ok(Object.values(backup.state.notes).includes(sceneNote));
  assert.equal(backup.state.encounters[0].combatants.length, 2);

  await page.locator('[data-handoff="recap"]').fill('Synthetic change to be replaced by the backup.');
  await saved(page);
  await navigate(page, 'library');
  page.once('dialog', dialog => dialog.accept());
  await importJSON(page, backup, 'synthetic-backup.json');
  await page.getByRole('heading', { name: 'Pick up the thread.', exact: true }).waitFor();
  assert.match(await page.locator('#notice').innerText(), /Backup state restored/);
  const restored = await exportBackup(page);
  assert.deepEqual(restored.state, backup.state);
  assert.deepEqual(restored.pack, backup.pack);
  assert.deepEqual(restored.assets, backup.assets);
  await page.reload();
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
    await importJSON(page, malformed, `malformed-${index}.json`);
    await page.locator('#error-banner').waitFor({ state: 'visible' });
    const retained = await exportBackup(page);
    assert.deepEqual(retained.state, beforeMalformed.state);
    assert.deepEqual(retained.pack, beforeMalformed.pack);
    await page.reload();
    await page.locator('#pack-import').waitFor();
    assert.equal(await page.locator('#error-banner').isVisible(), false);
  }
});

test('source HTML, image references and links stay inert without remote requests', async t => {
  const { page, context } = await isolatedPage(t);
  await importPack(page);
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
  await page.getByText(/External links & missing map assets/, { exact: false }).click();
  assert.match(await page.locator('#main').innerText(), /https:\/\/example\.invalid\/diagram\.png/);
});

test('fully imported synthetic pack and saved encounter work offline through the service worker', async t => {
  const { page, context } = await isolatedPage(t);
  await importPack(page);
  await createPreset(page);
  await selectScene(page);
  await page.locator('#section-notes').fill(sceneNote);
  await saved(page);
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);
  await page.waitForFunction(() => document.querySelector('#offline-status').textContent.includes('App ready offline'));
  await context.setOffline(true);
  const response = await page.reload();
  assert.equal(response.status(), 200);
  assert.equal(response.fromServiceWorker(), true, 'Offline reload must use the cached app shell');
  await page.getByRole('heading', { name: sceneHeading, level: 1, exact: true }).waitFor();
  assert.equal(await page.locator('#section-notes').inputValue(), sceneNote);
  assert.match(await page.locator('#source-text').innerText(), /A violet paper lantern/);
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
    await importPack(page);
    await fitsViewport(page, width, 'dashboard');
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
    await hitPoints(first, 27);
    await hitPoints(second, 30);
    for (const view of ['journal', 'library', 'sanctum', 'dashboard']) {
      await navigate(page, view);
      await fitsViewport(page, width, view);
    }
  });
}
