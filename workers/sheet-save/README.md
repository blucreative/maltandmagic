# Character Sheet Save Worker

Stores validated Col Agen sheet state at `player-saves/col-agen.json` on the `player-saves` branch. The browser keeps saving to localStorage immediately; this service adds authenticated, optimistic cloud synchronization.

## Provisioning

1. Create the `player-saves` branch in `blucreative/maltandmagic`.
2. Create a fine-grained GitHub token limited to this repository with **Contents: Read and write**.
3. Choose a strong, unique claim key for Col and calculate its SHA-256 digest: `printf %s 'CLAIM_KEY' | sha256sum`.
4. In this directory run `npm install`, then set `GITHUB_TOKEN` and `COL_AGEN_CLAIM_SHA256` with `npx wrangler secret put NAME`.
5. Run `npm test` and `npm run deploy`.

The raw claim key is given to Col's player. Only its digest is configured in the Worker; neither credential is committed to the repository.

## Using Multiple Devices

- On each device, open Col's sheet, select **Cloud Save**, enter the same claim key, and select **Claim & Sync**. Do not share the key in issues or chat.
- Gold and other edits save locally first. After finishing an input edit (for example, leaving the gold field), wait for **Cloud saved** before closing the page. **Saved locally** or **Local only** does not confirm an upload.
- A newly claimed device loads the existing cloud save automatically. Claimed devices also check on page load, when the window regains focus, when connectivity returns, or when **Cloud Save** is selected.
- A device with no pending edits accepts the cloud state. If both the device and cloud have changed, choose **Load Cloud** to discard this device's edits or **Overwrite Cloud** to replace the cloud copy with this device's state.
- Older browser saves have no record of their last synchronized content, so they may show a one-time conflict. Choose the copy you intend to keep. Do not clear browser storage while it contains unsynchronized edits.

Cloud saves update the JSON on the `player-saves` branch, not the HTML or the Pages deployment branch. The sheet reads that JSON through the authenticated Worker; no Pages rebuild is required for a gold change. Client-code fixes still require publishing the updated HTML through the normal Pages deployment.

## Verification

`npm test` runs Worker validation tests and client sync regressions using the actual inline script from Col's sheet. Client tests simulate two devices, gold edits, reloads, offline retries, explicit conflicts, and changes made during an upload without accessing the live save.