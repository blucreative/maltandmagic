---
name: srd-5.2.1-reference
description: Use the official D&D 5e (2024) SRD 5.2.1 markdown corpus as the primary rules reference when designing character-sheet behavior and interaction requirements.
---

# SRD 5.2.1 Reference Skill

Use this skill whenever the sheet needs rules-accurate structure for spells, conditions, rests, class features, and resource tracking. **Accuracy is mandatory — never invent spells, class features, or mechanics. If a spell or feature cannot be found in the SRD, it must not appear as rules-accurate content.**

## Authoritative Source

Repository: `https://github.com/downfallx/dnd-5e-srd-markdown`

This is the official D&D 5e (2024) SRD 5.2.1 converted to markdown. Licensed under CC BY 4.0 by Wizards of the Coast. Use the raw content URLs below to fetch data directly.

## Raw Content URLs (fetch these directly)

| File | Raw URL | Contents |
|------|---------|----------|
| `classes.md` | `https://raw.githubusercontent.com/downfallx/dnd-5e-srd-markdown/refs/heads/master/classes.md` | All 12 classes, subclasses, spell lists by class |
| `spells.md` | `https://raw.githubusercontent.com/downfallx/dnd-5e-srd-markdown/refs/heads/master/spells.md` | 500+ spell descriptions, full entries A-Z |
| `rules-glossary.md` | `https://raw.githubusercontent.com/downfallx/dnd-5e-srd-markdown/refs/heads/master/rules-glossary.md` | Conditions, actions, exhaustion, core rules terms |
| `feats.md` | `https://raw.githubusercontent.com/downfallx/dnd-5e-srd-markdown/refs/heads/master/feats.md` | All feat mechanics and prerequisites |
| `equipment.md` | `https://raw.githubusercontent.com/downfallx/dnd-5e-srd-markdown/refs/heads/master/equipment.md` | Weapons, armor, gear, tools |
| `playing-the-game.md` | `https://raw.githubusercontent.com/downfallx/dnd-5e-srd-markdown/refs/heads/master/playing-the-game.md` | Core combat and gameplay rules |

## Required Workflow — Spell or Feature Validation

When asked to verify or implement a spell or class feature:

1. **Fetch the SRD source.** Use `fetch_webpage` with the appropriate raw URL above.
2. **Search for the spell/feature by exact name.** If it is not found in the SRD, it does not exist in the official rules.
3. **Extract the exact entry.** Capture: casting time, range, components, duration, and effect text.
4. **Cross-check against class spell list.** Confirm the spell appears under the correct class's spell list section in `classes.md`.
5. **Flag any content not in the SRD.** Label it explicitly as homebrew or custom content — never present it as rules-accurate.
6. **Implement only SRD-confirmed mechanics.** Convert evidence into:
   - State fields (what the sheet tracks)
   - Triggers (how the effect activates/deactivates)
   - Effects on derived stats (AC, speed, damage, etc.)
   - Reset conditions (short rest, long rest, end of turn, etc.)

## Class Spell List Lookup Pattern

To find which spells a class can prepare at a given level:
1. Fetch `classes.md` from the raw URL above.
2. Search for `### <ClassName> Spell List` (e.g., `### Ranger Spell List`).
3. Find the `#### Level 1 <ClassName> Spells` (or relevant level) table.
4. Verify the spell name appears in that table.

Any spell not listed in the class's spell list section is **not available to that class** and must not appear on the sheet.

## Spell Entry Lookup Pattern

To verify a spell's exact rules text:
1. Fetch `spells.md` from the raw URL above.
2. Search for `#### <SpellName>` (e.g., `#### Ensnaring Strike`).
3. Extract the full entry including Casting Time, Range, Components, Duration, and effect description.
4. Use this as the ground truth for sheet tooltips and mechanical behavior.

## Verified Ranger Level 1 Spell List (SRD 5.2.1)

Confirmed from `classes.md` → `### Ranger Spell List` → `#### Level 1 Ranger Spells`:

| Spell | School | Notes |
|-------|--------|-------|
| Alarm | Abjuration | Ritual |
| Animal Friendship | Enchantment | — |
| Cure Wounds | Abjuration | — |
| Detect Magic | Divination | Concentration, Ritual |
| Detect Poison and Disease | Divination | Concentration, Ritual |
| Ensnaring Strike | Conjuration | Concentration |
| Entangle | Conjuration | Concentration |
| Fog Cloud | Conjuration | Concentration |
| Goodberry | Conjuration | — |
| Hunter's Mark | Divination | Concentration (Always Prepared via Favoured Enemy) |
| Jump | Transmutation | — |
| Longstrider | Transmutation | — |
| Speak with Animals | Divination | Ritual |

**Ranger Level 2 Prepared Spells:** 3 prepared + Hunter's Mark (always prepared, not counted)

## Implementation Guardrails

- Do not invent spells. If a spell name cannot be found in `spells.md`, it must not appear on a character sheet.
- Do not invent class features. All features must be verifiable in `classes.md`.
- For uncertain wording, quote the SRD excerpt directly before implementing any behavior.
- Keep the app static-site compatible (no backend required).
- Label any homebrew or custom content explicitly as non-SRD.

## Output Contract For Rule Research

For each researched mechanic, produce:
- `Mechanic`: short name
- `SRD Evidence`: raw URL + section heading + key quote
- `State Model`: fields required in session state
- `UI Controls`: buttons/toggles/counters needed
- `Reset Logic`: when and how values reset
- `Edge Cases`: constraints to prevent invalid states
