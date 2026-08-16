import assert from 'node:assert/strict';
import test from 'node:test';

import { buildIssue, handleRequest, validateLevelUpRequest } from '../src/index.js';

const env = {
  ALLOWED_ORIGINS: 'https://blucreative.github.io',
  GITHUB_OWNER: 'blucreative',
  GITHUB_REPO: 'maltandmagic',
  GITHUB_TOKEN: 'test-token',
  ISSUE_LABEL: 'level-up',
  TURNSTILE_HOSTNAME: 'blucreative.github.io',
  TURNSTILE_SECRET_KEY: 'test-secret',
};

function validInput(overrides = {}) {
  return {
    characterId: 'vellan-darkmere',
    subclass: 'Thief',
    hpMethod: 'fixed',
    hpIncrease: 5,
    turnstileToken: 'verified-token',
    ...overrides,
  };
}

test('validates only bounded Vellan Rogue 3 choices', () => {
  assert.equal(validateLevelUpRequest(validInput()).ok, true);
  assert.equal(validateLevelUpRequest(validInput({ hpMethod: 'rolled', hpIncrease: 8 })).ok, true);
  assert.equal(validateLevelUpRequest(validInput({ subclass: 'Swashbuckler' })).ok, true);
  assert.equal(validateLevelUpRequest(validInput({ characterId: 'someone-else' })).ok, false);
  assert.equal(validateLevelUpRequest(validInput({ hpIncrease: 9 })).ok, false);
  assert.equal(validateLevelUpRequest(validInput({ hpIncrease: 6 })).ok, false);
  assert.equal(validateLevelUpRequest(validInput({ subclass: '**Injected heading**' })).ok, false);
});

test('builds the GitHub issue entirely on the server', () => {
  const issue = buildIssue(validateLevelUpRequest(validInput()).value, 'level-up');
  assert.equal(issue.title, '[Level Up] Vellan Darkmere - Rogue 3');
  assert.deepEqual(issue.labels, ['level-up']);
  assert.match(issue.body, /maximum 13 to 18/);
  assert.match(issue.body, /"characterId": "vellan-darkmere"/);
});

test('verifies Turnstile and creates an issue', async () => {
  const calls = [];
  const fetcher = async (url, options) => {
    calls.push({ url: String(url), options });
    if (String(url).includes('siteverify')) {
      return Response.json({ success: true, action: 'level-up-request', hostname: 'blucreative.github.io' });
    }
    return Response.json({ number: 42, html_url: 'https://github.com/blucreative/maltandmagic/issues/42' }, { status: 201 });
  };
  const request = new Request('https://worker.example/requests/level-up', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://blucreative.github.io' },
    body: JSON.stringify(validInput()),
  });

  const response = await handleRequest(request, env, fetcher);
  const body = await response.json();

  assert.equal(response.status, 201);
  assert.equal(body.issueNumber, 42);
  assert.equal(calls.length, 2);
  assert.match(calls[1].url, /repos\/blucreative\/maltandmagic\/issues$/);
  assert.equal(JSON.parse(calls[1].options.body).title, '[Level Up] Vellan Darkmere - Rogue 3');
});

test('rejects requests from other origins before external calls', async () => {
  let externalCallMade = false;
  const request = new Request('https://worker.example/requests/level-up', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://example.com' },
    body: JSON.stringify(validInput()),
  });
  const response = await handleRequest(request, env, async () => {
    externalCallMade = true;
    throw new Error('Unexpected external call');
  });

  assert.equal(response.status, 403);
  assert.equal(externalCallMade, false);
});

test('rejects failed Turnstile verification before GitHub', async () => {
  let callCount = 0;
  const request = new Request('https://worker.example/requests/level-up', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://blucreative.github.io' },
    body: JSON.stringify(validInput()),
  });
  const response = await handleRequest(request, env, async () => {
    callCount += 1;
    return Response.json({ success: false, 'error-codes': ['invalid-input-response'] });
  });

  assert.equal(response.status, 403);
  assert.equal(callCount, 1);
});