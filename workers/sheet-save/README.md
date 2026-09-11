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

## Advancement Pilot

Col alone has a four-step advancement dialog. The legacy sheet has a level-2
baseline; the player records the missing level-3 choices and HP roll before
recording later milestones. No subclass or new spell is selected on the
player's behalf. This is not a level-1 character-creation wizard.

`POST /sheets/col-agen/advancements` accepts the existing bearer claim key and:

```json
{
	"revision": 4,
	"advancement": {
		"id": "unique-client-generated-id",
		"classId": "sorcerer",
		"hpRoll": 4,
		"milestone": true,
		"choices": {}
	}
}
```

The example's empty choices are intentionally incomplete. The shared engine
defines the required choices for the actual class level. HP uses the selected
class's die, rerolls all 1s, and applies Constitution and Col's recorded Tough
feat. Each confirmed advancement includes a Long Rest. The Worker computes
the new state and appends the history using the GitHub file SHA. A repeated ID
with identical choices is idempotent. A stale revision returns HTTP 409 and
the current save. Ordinary PUTs cannot rewrite confirmed advancement history.

Schema-2 gameplay state contains a versioned baseline and append-only history,
including chosen options, rolled HP, and feature snapshots. Drafts remain
separate from confirmed levels and synchronize with normal gameplay state.
Gold, inventory, conditions, and notes survive advancement. Unrecognized local
save schemas stop loading rather than overwriting stored data with defaults.

### Deployment Order

1. Back up the existing JSON on the `player-saves` branch.
2. Deploy the updated sheet-save Worker using the existing secrets.
3. Publish Col's updated HTML, advancement modules, catalog, stylesheet, and
	 attribution together through the normal Pages workflow.
4. Verify with a designated test save before using real player advancement.

There is no deployment or live-save modification as part of local tests.
The new frontend cannot finalize against the old Worker. The legacy
level-up-request Worker remains unchanged for other character sheets.

### Rules Versions and Coverage

`assets/js/advancement-catalog-v1.mjs` is checked in and loaded locally, not
fetched from a rules website at runtime. Preserve this catalog and the meaning
of `2024-campaign-1` once records are in use. Routine UI updates must never
replace the ledger with new HTML defaults. A rules correction requires an
explicit reviewed migration, a backup, and regression tests against existing
records. A new rules version must retain a compatible reader for old saves.

The catalog currently contains all 12 core classes and 49 subclass entries
from the SRD and local sources. Tests traverse class levels 1 through 20 from
synthetic level-1 baselines; this is smoke coverage, not certification of every
subclass combination. Automatic calculations include proficiency, HP,
Constitution adjustments, class resources, pooled Hit Dice, multiclass slots,
Pact Magic, prepared spell counts, and selected feat/class choices.

This is a test pilot, not complete rules automation. Supplemental choices can
be recorded in Additional Feature Choices, but not every effect is calculated.
Remaining structured coverage includes weapon mastery, tool choices, several
subclass-specific choices, repeatable invocation variants, Wizard subclass
spellbook additions, and Lore Bard bonus spells. Equipment-dependent AC,
conditional attacks, and all rest/feature interactions are not fully modeled.
The selectable feat list is currently SRD-based, with Col's Tough preserved as
a recorded campaign feat. Do not treat a successful save as rules approval.

Col's Cast/Use controls spend the existing `resources` counters through
`colSheet.updatePlay`, preserving the same local-first cloud save contract in
both legacy and advanced saves. Ordinary spells share slots, with upcast and
Pact slot selection; cantrips and rituals spend no slot. Magic Initiate,
Favored Enemy, and chosen Mystic Arcanum have separate free-cast pools where
already represented in the progression. Metamagic spends shared Sorcery Points.
Short Rest recovery includes optional Sorcerous Restoration at Sorcerer 5.
Undo reverses only the most recent use while the gameplay state is unchanged;
manual resource controls remain available for corrections.

This tracks expenditure, not ongoing effects or concentration. It does not
enforce action economy, apply spell effects, or automate every subclass/free-use
exception. Font of Magic conversions and above-cap created slots are not
implemented; the existing save schema still caps each resource at its derived
maximum. Adding active effects or created-slot bookkeeping requires a coordinated
schema migration and Worker deployment, not local-only fields.

Catalog regeneration is an explicit development step:

```sh
node workers/sheet-save/scripts/build-advancement-catalog.mjs
node --test workers/sheet-save/test/*.test.js
```

Review generated changes before publication; upstream markdown is not pinned
to a commit. Attribution is in `assets/advancement-attribution.md`. Pages
assembly excludes `.private`, Worker tooling, and dependency directories.
This exclusion does not remove anything already present in Git history.