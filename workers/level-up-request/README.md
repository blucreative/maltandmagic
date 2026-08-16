# Anonymous Level-Up Requests

This Cloudflare Worker accepts the bounded Vellan Rogue 3 form, verifies a Cloudflare Turnstile token, and creates a GitHub issue. Players do not need a GitHub account. The GitHub credential remains in Cloudflare and is never sent to the character sheet.

## Current Deployment

The Worker is deployed at:

`https://maltandmagic-level-up.maltandmagic-level-up-request.workers.dev`

Its Turnstile and GitHub secrets are stored in Cloudflare. The public site key and Worker endpoint are configured in Vellan's sheet.

## Maintenance

Install dependencies before using Wrangler in a fresh checkout:

```bash
cd workers/level-up-request
npm install
```

Deploy Worker changes with:

```bash
npm run deploy
```

When the fine-grained GitHub token expires, create a replacement limited to `blucreative/maltandmagic` with **Issues: Read and write**, then enter it directly at Wrangler's prompt:

```bash
npx wrangler secret put GITHUB_TOKEN
```

Rotate the Turnstile secret the same way with `TURNSTILE_SECRET_KEY`. Never place either secret in this repository.

## Local Validation

```bash
npm test
```

The test suite mocks both Turnstile and GitHub. It does not create a real issue.