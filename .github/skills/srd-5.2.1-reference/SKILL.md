---
name: srd-5.2.1-reference
description: Use the official D&D 5e (2024) SRD 5.2.1 markdown corpus as the primary rules reference when designing character-sheet behavior and interaction requirements.
---

# SRD 5.2.1 Reference Skill

Use this skill whenever the sheet needs rules-accurate structure for spells, conditions, rests, class features, and resource tracking.

## Authoritative Source

Primary external source:
- `https://github.com/downfallx/dnd-5e-srd-markdown`

Use SRD markdown sections as the truth source for mechanics, and keep any custom UI behavior explicitly labeled as implementation detail.

## Verified Repo Map

Use these files first:
- `README.md`: corpus layout and file map
- `classes.md`: class progression, class features, spell slots by class level, class spell lists
- `spells.md`: casting rules and spell descriptions
- `rules-glossary.md`: condition definitions, exhaustion, core rules terms
- `feats.md`: feat mechanics and constraints
- `equipment.md` and `magic-items.md`: item interactions and spellcasting services edge cases

## Required Workflow

1. Start with rules extraction before implementation.
2. For each mechanic, capture evidence with file + section heading (and line links when available).
3. Convert evidence into UI requirements:
   - state fields
   - triggers
   - effects
   - reset conditions (short rest, long rest, other)
4. Implement only mechanics confirmed by SRD evidence.
5. In final responses, clearly separate:
   - SRD-backed behavior
   - UX-only enhancement behavior

## Query Patterns

When researching SRD content, use these patterns:
- Spell slot lifecycle: search `spells.md` for `Spell Slots`, `Long Rest`, `cast a spell`, `slot of that spell's level or higher`
- Exhaustion and conditions: search `rules-glossary.md` for `Condition`, `Exhaustion`, and specific condition names
- Class feature uses and recovery: search `classes.md` by class heading plus feature name and `Long Rest` / `Short Rest`
- Spell list and cast level UI: search `classes.md` for `Spell List` sections and level tables

## Implementation Guardrails

- Keep the app static-site compatible (no backend required).
- Do not claim non-SRD mechanics as rules-accurate without clear labeling.
- For uncertain wording, quote the SRD excerpt in notes before coding behavior.
- Preserve deterministic state transitions for all one-click actions.

## Output Contract For Rule Research

For each researched mechanic, produce:
- `Mechanic`: short name
- `SRD Evidence`: source file + section + key quote
- `State Model`: fields required in session state
- `UI Controls`: buttons/toggles/counters needed
- `Reset Logic`: when and how values reset
- `Edge Cases`: constraints to prevent invalid states

## Example Mechanics To Validate

- Rage: usage tracking and activation lifecycle
- Spellcasting: slot spend/recover, cast-at-level, long-rest restoration
- Conditions: active/inactive state and cumulative exceptions
- Exhaustion: level accumulation, d20 penalty, speed reduction, long-rest recovery
