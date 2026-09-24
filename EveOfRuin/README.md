# Eve of Ruin GM campaign desk

A standalone, preloaded GitHub Pages portal. Open it on any device to read the
adventure, use its maps, prepare scenes, and track encounters. **No campaign
notes, session notes, account, or file import is required.**

This project is separate from Malt & Magic's campaign lore and character sheets.

## Delivery and privacy

The chapter Markdown and original images were supplied in `.private/`. Build
tools transform them into the site's published adventure data and media. The
original `.md` files, `.private/` directory, build tools, and tests are not
included in the Pages artifact.

**The rendered adventure content, GM spoilers, and published images are public.**
Excluding Markdown filenames is not access control for the material displayed
by a public site. Do not put session notes, credentials, or personal information
in the published content.

Optional notes, secrets-ledger entries, and encounter progress remain in the
browser's IndexedDB. They are not uploaded or synchronized between devices.
Every device gets the same adventure reference independently of those notes.
Optional backup export/restore can move personal progress between devices.

## Use the portal

- **Campaign desk:** opens at Chapter 6 without assuming the party's history.
- **Adventure chapters:** full supplied text, chapter/area navigation, preparation
  checklists, scene-specific guidance where authored, and encounter setup.
- **Sigil Sanctum:** source-grounded NPC portrayal and optional original dialogue,
  with plot-stage and knowledge boundaries.
- **Encounter tracker:** create separate individuals from available statblocks;
  track initiative, HP, temporary HP, conditions, and resource notes.
- **Handoff & secrets:** entirely optional records of what happened at your table.
- **Library & coverage:** searchable text and statblocks, image library, and
  explicit missing-reference information.

Preparation checklists generated from source cues are labeled as such. They do
not infer creature quantities or replace the chapter's exact mechanics. Curated
guidance can override those checklists by chapter.

Chapter 6 has bespoke source-linked GM cards covering its keyed areas, rescue
thresholds, alarms and reinforcements, mirror puzzle, ritual disruption, and
return route. Its encounter presets use the quantities explicitly given in the
source and distinguish allies, conditional fights, and reinforcement timing.
Other chapters retain the complete source and generated preparation checklists.

For source-cue encounter suggestions, choose the quantity and verify hostility,
presence, reinforcements, and variants against the displayed passage. Merely
mentioning a creature does not establish a combat encounter.

## Maintainer build

The public generated outputs are committed so GitHub Pages does not need access
to private source files during deployment.

```sh
node EveOfRuin/scripts/build-public.mjs
```

Inputs:

- `.private/00-introduction.md`, chapters 1–11, and appendices A–C.
- `.private/images/` for the supplied maps and artwork.
- `.private/guide-*.json` for authored scene/encounter and Sanctum guidance.
- `scripts/chapter-six-guidance.mjs` for the bespoke Chapter 6 companion cards.

Outputs:

- `data/campaign.json`: validated adventure reference and image index.
- `data/media-coverage.json`: image/reference matching audit.
- `media/`: deduplicated images at original quality.

Images are matched to source URLs by deterministic filename/map identifiers.
Player and GM map variants are never interchanged. Ambiguous or unmatched
references remain visible instead of being guessed. Artwork without a source
link is still accessible in the image library.

For a local preview:

```sh
node EveOfRuin/scripts/preview.mjs
```

Open `http://127.0.0.1:8769/EveOfRuin/`. The loopback preview serves only the
published app/data/media allowlist, not the repository or `.private/` tree.
Set `PORT` if necessary.

The older private-pack build and audit scripts remain available for maintenance:

```sh
node EveOfRuin/scripts/build-pack.mjs
node EveOfRuin/scripts/audit-pack.mjs
```

They are not visitor prerequisites and are not the Pages deployment path.

## Completeness boundaries

All supplied chapter text is retained rather than replaced by summaries. The
source still references some core-book statblocks, spells, and item descriptions
that are not contained in the supplied files. Those gaps are flagged; nothing
is silently invented or taken from another campaign or a different rules edition.

Source statblocks are presented in full. Named variants' altered statistics
must be applied explicitly to each tracked individual. The tracker does not
automatically adjudicate resistances, concentration, recharge, death saves,
conditions, or encounter outcomes.

Generic damage bookkeeping consumes temporary HP before current HP; healing
stops at maximum HP. This arithmetic was checked against SRD 5.2.1, *Playing the
Game*. It does not convert the adventure or its statblocks to the 2024 rules.

## Offline operation and optional progress

- After successful loading, the service worker caches the app and adventure data.
- Images become available offline after viewing; the entire image library is not
  downloaded eagerly to every device.
- Local progress is specific to a device, browser profile, and site address.
- Browser storage can be cleared or evicted. Export optional progress if needed.
- Backups are not encrypted and can contain private notes.
- Published image references in backups still depend on the site's media or its
  browser cache; a backup is not a download of all the published image files.
- Stale tabs cannot silently overwrite another tab's newer save.
- Source data and images are stored separately from frequently edited progress.
- Updating the published reference preserves local notes and encounter state.

## Validation

Uses Node's built-in test runner and the repository's existing Playwright:

```sh
node --test EveOfRuin/test/*.test.mjs EveOfRuin/test/browser.spec.mjs
```

Tests use original synthetic fixtures, not copied adventure text. Deployment
tests verify that raw Markdown and private inputs do not enter the Pages artifact.
Browser tests cover opening the preloaded adventure without importing files.

## Vendor

`vendor/marked.esm.js` is Marked 18.0.12, copied from the repository's existing
installed dependency. Its MIT license is retained as `vendor/LICENSE`. The app
uses no CDN, external fonts, or analytics.
