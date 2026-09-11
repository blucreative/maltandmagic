# Daggerheart lore workspace

The public pages in this directory are player-facing derivatives. Authoritative
source Markdown belongs in `Daggerheart/.private/`, which is excluded from both
the parent Git repository and the GitHub Pages deployment.

## Source boundary

- Treat Markdown in `.private/` as the primary source for rules and option text.
- Keep PDFs, conversion artifacts, rulebook artwork, and intermediate notes private.
  The supplied compatibility mark is the only image copied into public assets.
- Do not copy source chapters wholesale into public pages. Publish concise table
  references, campaign guidance, and original tools derived from verified facts.
- Label campaign rulings, third-party options, and playtest material separately
  from core rules.
- Preserve a source filename and heading for every mechanical claim during the
  rebuild so it can be checked without exposing the private text.

## Received sources

| Private file | Edition | Use |
| --- | --- | --- |
| `Daggerheart SRD 2.0.md` | SRD 2.0, 2026 | Primary mechanical reference: 13 classes and 10 domains |
| `Daggerheart Core Rulebook.md` | August 2025, first edition with errata | Core campaign frames and supporting context |
| `Daggerheart Hope and Fear.md` | First printing, 2026 | Expansion context and campaign frames |

The conversions preserve `<!-- page N -->` markers. Public source references use
document title, section, and PDF page rather than links into the private directory.
Conversion errors must be checked against neighboring headings or the other source;
for example, the SRD class-pairing list spells Assassin as "Assassion", while its
class heading uses the correct name. Do not silently rewrite the private originals.

## Rebuild order

1. Inventory the Markdown corpus and record edition, product, and conversion status.
2. Normalize headings, tables, lists, and cross-references without changing meaning.
3. Build a source map for core mechanics, character creation, classes, domains,
   equipment, adversaries, campaign frames, and optional material.
4. Audit the existing public pages against that map and remove unsupported claims.
5. Maintain a read-only lore and rules reference with verified source labels.
6. Validate links, keyboard access, responsive layout, storage isolation, and the
   GitHub Pages artifact before publication.

## Current public surface

- `index.html`: 18 searchable rules summaries and a secondary damage-to-HP
  calculator with direct damage and optional Massive Damage
- `character-creation.html`: Characters tab, with creation and level 1-10 advancement,
  tier achievements, subclass progression, and multiclassing
- `classes.html`: 13 classes, 26 subclass names, starting stats, and domain pairs
- `domains.html`: all 10 domains with class cross-links, level 1-10 card acquisition,
  multiclass limits, and loadout guidance
- `campaign-frames.html`: 6 core and 4 Hope & Fear premises, without GM secrets
- `void-options.html`: retained URL for published expansion classes, 24 ancestry
  names, 15 community names, and 6 transformation names
- `equipment.html`: 633 searchable equipment entries, all four tiers, Core and
  Hope & Fear; filter by book, equipment type, and tier, with expandable stats,
  rules text, citations, and paginated results
- `character-sheet.html`: compatibility redirect to the rules homepage, not a sheet

The shared public catalog is `../assets/js/daggerheart-catalog.js`. It contains
curated summaries and verified facts, not exported chapters. SRD 2.0 takes
precedence for the mechanics presented here. Campaign overview citations refer
to PDF page markers, not the books' printed page numbers.

The equipment catalog is `../assets/js/daggerheart-equipment.js`: 239 primary
weapons, 73 secondary weapons, 12 combat wheelchairs, 69 armor entries, 120 items,
and 120 consumables. It includes all 624 SRD equipment-table entries and nine
Core-only weapon names with explicit 2025 rules labels. All 275 Hope & Fear
entries are labeled. Shared names use current SRD values. Items and consumables
are untiered; loot-roll rarity is not an equipment-level restriction. No shop
prices are invented. This covers the supplied books' equipment and loot tables,
not every possible homebrew or campaign-specific object.

Rebuild from all three private sources with:

```sh
node Daggerheart/scripts/build-equipment.mjs
```

The build uses structured Markdown tables and handles fragmented Core loot rows.
It stops if expected coverage changes. The public data is a static asset; browsers
never load private Markdown or run the build script.

Scope: this is a player reference, not a complete digital rulebook. Full domain
card text, individual subclass ability text, ancestry/community feature text, adversary
stat blocks, and campaign secrets are not reproduced. The site does not offer
character editing, a concept worksheet, a Duality evaluator, or a character sheet.
Search and book/domain/topic filters remain for reference navigation. The damage
calculator is session-only and does not save anything.
The supplied compatibility mark is not an endorsement. Current licensing terms
should be reviewed before publication; the licensing website could not be fetched
from the development environment during this update.

## Retired editing tools

The former worksheet and character sheet are removed from the interface and
navigation. The old sheet URL redirects to `index.html` so bookmarks do not fail.
No reference page reads, modifies, or deletes browser saves. Existing values under
`daggerheartPrimerWorksheet` and `daggerheartCharacterSheet` are left untouched.
Browser tests verify this even with malformed legacy data.

## Verification

```sh
npm ci --prefix Daggerheart
npm test --prefix Daggerheart
Daggerheart/node_modules/.bin/playwright install chromium
npm run test:browser --prefix Daggerheart
```

Browser tests require Chromium's Linux runtime libraries and an existing static
server. The default URL is `http://127.0.0.1:8766/Daggerheart/`; override it with
`DAGGERHEART_BASE_URL`. Tests use fresh browser contexts, never player storage.
Screenshots go to ignored `test-output/`. The source tests compare class stats,
domain pairs, option names, every equipment row, and Core/expansion completeness
against the supplied Markdown. Source-dependent tests explicitly skip when their
private source is absent. Browser coverage includes tier and book filtering,
pagination, deep links, keyboard expansion, and progression links.

The Pages workflow excludes `.private`, dependencies, build scripts, test code, screenshots, and
the Daggerheart package manifests. Public pages load only public static assets.