# SRD Research Sub-Agent Prompt (Explore)

Use this template when invoking the `Explore` sub-agent to gather rule evidence before coding.

## Copy/Paste Prompt Template

```
Research task: Build SRD-accurate requirements for [MECHANIC NAME] in our D&D 2024 interactive sheet.

Source of truth:
- https://github.com/downfallx/dnd-5e-srd-markdown

Requirements for your output:
1. Use only SRD 5.2.1 evidence from the repository.
2. Provide evidence from the most relevant files (typically classes.md, spells.md, rules-glossary.md, feats.md).
3. For each finding include:
   - Mechanic
   - Source file path
   - Section heading
   - Short quote (exact wording)
   - Practical requirement for UI/state logic
4. Produce a final implementation checklist with:
   - Required state fields
   - Required controls/interactions
   - Reset/rest behavior
   - Edge cases and invalid-state prevention
5. Flag anything ambiguous as `Needs DM/Designer Decision`.

Scope details for this run:
- Character class/context: [CLASS + LEVEL]
- Mechanics to cover: [LIST]
- Desired thoroughness: thorough

Do not write code. Return a concise, implementation-ready requirements brief.
```

## Suggested Invocations

- Rage and rest economy
- Spell slots and cast-at-level behavior
- Condition automation and exhaustion handling
- Class feature usage counters and reset cadence
