---
name: dnd-2024-sheet
description: Build and iterate on a standalone interactive Dungeons & Dragons 2024 character sheet with reactive rules logic, local persistence, and GitHub Pages compatibility.
---

# DnD 2024 Character Sheet Skill

Use this skill when creating or refining DnD 2024 character sheet tools in this repository.

## Goals

- Keep the sheet fully static-site compatible for GitHub Pages.
- Use client-side React (UMD + Babel) or vanilla JS only.
- Preserve content ownership: no external API dependency is required.
- Prioritize play-at-table speed, readability, and mobile responsiveness.

## Rules Logic Expectations

- Provide reactive derived stats (ability mods, proficiency bonus, save DC, attack bonus).
- Support 2024 exhaustion handling with visible automated impact on d20 tests.
- Support Rage toggles and level-scaled rage damage bonus.
- Provide condition badges with clear mechanical summaries.

## UX Expectations

- Single-page workflow with clear sections: Identity, Core Stats, Combat, Conditions, Inventory, Spells, Notes.
- Fast add/remove/edit flows for items and spells.
- Import/export character JSON for level-up handoff.
- Persist state to localStorage and recover safely.

## Technical Guardrails

- No build step required.
- Keep logic deterministic and easy to audit.
- Avoid hidden side effects: all rule-derived adjustments should be visible in UI.
- Use clear CSS variables and high contrast for table readability.
