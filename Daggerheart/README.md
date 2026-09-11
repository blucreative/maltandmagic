# Daggerheart lore workspace

The public pages in this directory are player-facing derivatives. Authoritative
source Markdown belongs in `Daggerheart/.private/`, which is excluded from both
the parent Git repository and the GitHub Pages deployment.

## Source boundary

- Treat Markdown in `.private/` as the primary source for rules and option text.
- Keep PDFs, conversion artifacts, licensed images, and intermediate notes private.
- Do not copy source chapters wholesale into public pages. Publish concise table
  references, campaign guidance, and original tools derived from verified facts.
- Label campaign rulings, third-party options, and playtest material separately
  from core rules.
- Preserve a source filename and heading for every mechanical claim during the
  rebuild so it can be checked without exposing the private text.

## Rebuild order

1. Inventory the Markdown corpus and record edition, product, and conversion status.
2. Normalize headings, tables, lists, and cross-references without changing meaning.
3. Build a source map for core mechanics, character creation, classes, domains,
   equipment, adversaries, campaign frames, and optional material.
4. Audit the existing public pages against that map and remove unsupported claims.
5. Rebuild the primer and reference pages around player workflows, then update the
   character sheet only after its mechanics have verified sources.
6. Validate links, keyboard access, responsive layout, local persistence, and the
   GitHub Pages artifact before publication.

## Current public surface

- `index.html`: player primer and navigation hub
- `classes.html`: class comparison
- `domains.html`: domain comparison
- `campaign-frames.html`: campaign frame guide
- `void-options.html`: supplemental character options
- `character-sheet.html`: local-first character worksheet

These pages predate the Markdown corpus and should be treated as provisional until
the source audit is complete.