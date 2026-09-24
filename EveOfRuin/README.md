# Eve of Ruin: private GM campaign desk

An isolated, local-first adventure portal. It does not use Malt & Magic campaign
lore, character data, or cloud-save services. The public application contains no
adventure text, encounter presets, NPC dialogue, or monster statistics.

## Prepare the private campaign

The supplied Markdown and source-grounded companion guides remain in `.private/`.
That directory is ignored by Git and excluded from deployment.

```sh
node EveOfRuin/scripts/build-pack.mjs --require-guides
node EveOfRuin/scripts/audit-pack.mjs
```

The output is `.private/campaign-pack.json`. Download that file from your
development workspace and select it using **Private campaign pack or backup** in
the portal. Do not move it into a public directory or commit it.
The audit writes `.private/readiness-report.json`, checks all 15 documents against
the original files byte-for-byte as UTF-8 text, and lists scene/preset coverage
and unresolved statblock names with their source locations.

Bundle the supplied images separately:

```sh
node EveOfRuin/scripts/build-images.mjs
```

This preserves original image quality and creates numbered private image packs
in `.private/image-packs/`. Import those numbered JSON files together using
**Private image packs** in **Library & coverage**. The manifest is an audit
report, not an import file. Exact/normalized filename matches attach images to
their original source URLs; GM and player versions are kept distinct. Ambiguous
or absent matches remain explicitly reported. Artwork without a source-text link
is still available in the private image library.

The private guide files are:

- `.private/guide-early.json`: introduction, chapters 1–5, and early Sanctum visits.
- `.private/guide-late.json`: chapters 6–11 and later Sanctum continuity.

They are local preparation artifacts, not downloadable parts of the public app.
Keep a private backup of them with your source files. A fresh repository checkout
does **not** contain licensed material or these guides. If they are unavailable,
the app can import the 15 individual source Markdown documents directly, but that
source-only import does not contain curated coaching or encounter presets.

## At the table

1. **Library & coverage:** check the source inventory, warnings, statblocks, and
   missing references. Supply any necessary external material you own.
2. **Handoff & secrets:** record the actual party, location, decisions, rod
   inventory, and previous events. The initial Chapter 6 bookmark does not mark
   earlier chapters as played or assume a particular Chapter 6 scene.
3. **Adventure chapters:** choose a chapter and a section/keyed area. “Complete
   chapter” always displays all imported source text. Source text and optional
   GM coaching are visibly separated. Marking a passage prepared is a reading
   checklist, not campaign progression.
4. **Sigil Sanctum:** select the visit appropriate to the current plot stage.
   Suggested dialogue is original, optional portrayal advice, not a module
   quotation or a newly established event. All future-story information is
   GM-only.
5. **Encounter tracker:** launch a scene preset or create an encounter. Confirm
   counts, select the exact statblocks, and apply variants explicitly. Every
   individual has independent HP, temporary HP, AC, initiative, conditions,
   limited-use notes, and source-statblock access. PCs can be entered manually.
6. Export a full private backup after each session.

For a safe local preview:

```sh
node EveOfRuin/scripts/preview.mjs
```

Open `http://127.0.0.1:8769/EveOfRuin/`. This server binds to loopback and serves
only the public app allowlist. Set `PORT` if that port is already in use.

## Completeness boundaries

The source Markdown is preserved in full, rather than replaced by summaries.
The module can still depend on material absent from those files: core-book
statblocks, spell descriptions, item rules, and externally linked map images.
The portal never silently fetches, invents, or substitutes that material.

Use **Library & coverage** to add complete statblocks from your own references.
Its live encounter-reference check lists every preset creature without an exact
local statblock match, with links to the source scenes. Add missing spell/item
text using **Supplemental rules & references**; these additions remain private,
are searchable, and are included in backups.
For a map, import your local PNG/JPEG/WebP file and attach the exact reference URL
listed in the library; the reader then opens the local image instead of an
unavailable external reference. Imported images are included in backups.

Monster variants are not automatically applied to a base statblock. Their source
notes are copied to each combatant; edit AC, maximum HP, and other notes before
play. Damage does not auto-apply resistances, immunities, concentration checks,
death saves, or conditions. The GM adjudicates these using the displayed source.
The generic HP arithmetic was checked against SRD 5.2.1, *Playing the Game*,
[Healing and Temporary Hit Points](https://github.com/downfallx/dnd-5e-srd-markdown/blob/master/playing-the-game.md).
This does not convert the adventure, its statblocks, or its spells to the 2024
rules. No other rules automation or replacement material is imported.

## Privacy, persistence, and offline use

- The public deployment uses an explicit app-file allowlist. No Markdown,
  campaign JSON, private source tree, tests, or build tools are published under
  `EveOfRuin/`.
- Imports are parsed locally; there is no source upload, analytics, third-party
  font, external image load, or adventure fetch.
- Text is rendered with a locally vendored MIT-licensed Marked parser. Raw HTML
  is escaped, and source links do not navigate or execute URLs.
- IndexedDB stores the private pack, notes, images, and encounter state.
- Images and source data are stored separately from frequently edited state;
  changing a combatant or note does not rewrite the entire image collection.
  Full private backups support up to 512 MB.
- A portal-scoped service worker caches only the application shell. Wait for
  offline readiness before disconnecting; then revisit the same address.
- Browser profiles and site origins do not share data. Localhost imports do not
  appear automatically on GitHub Pages, another device, or another profile.
- Concurrent portal tabs use revision checks: a stale tab cannot overwrite a
  newer save. If warned, export that tab's unsaved work and reload before editing.
- Browser storage can be cleared or evicted. Request persistent storage where
  supported, but still export backups.
- Backups are not encrypted. Anyone with the file or access to the browser
  profile can read campaign spoilers and the imported source.
- Importing an updated pack replaces the source library and guidance while
  preserving session notes, encounters, custom references, and images. Existing
  encounters retain their recorded statistics, and any removed source block they
  still use is preserved as a private custom reference.
  Importing a backup replaces the entire campaign with its saved state.
  Both operations request confirmation when a campaign is already loaded.
- A local development server serving the entire repository may expose ignored
  files. Preview only an allowlisted staging directory, never the source root.

## Validation

The project uses Node's built-in test runner and the repository's existing
Playwright installation.

```sh
node --test EveOfRuin/test/*.test.mjs
node --test EveOfRuin/test/browser.spec.mjs
```

Browser tests create their own loopback-only allowlisted server and synthetic
campaign fixtures. They do not publish or embed the supplied module.

## Vendor

`vendor/marked.esm.js` is Marked 18.0.12, copied from the repository's existing
installed dependency. Its MIT license is retained as `vendor/LICENSE`. No CDN
or package installation is required to run the portal.
