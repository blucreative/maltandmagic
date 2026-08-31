# Character Sheet Save Worker

Stores validated Col Agen sheet state at `player-saves/col-agen.json` on the `player-saves` branch. The browser keeps saving to localStorage immediately; this service adds authenticated, optimistic cloud synchronization.

## Provisioning

1. Create the `player-saves` branch in `blucreative/maltandmagic`.
2. Create a fine-grained GitHub token limited to this repository with **Contents: Read and write**.
3. Choose a strong, unique claim key for Col and calculate its SHA-256 digest: `printf %s 'CLAIM_KEY' | sha256sum`.
4. In this directory run `npm install`, then set `GITHUB_TOKEN` and `COL_AGEN_CLAIM_SHA256` with `npx wrangler secret put NAME`.
5. Run `npm test` and `npm run deploy`.

The raw claim key is given to Col's player. Only its digest is configured in the Worker; neither credential is committed to the repository.