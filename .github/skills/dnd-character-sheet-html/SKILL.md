---
name: dnd-character-sheet-html
description: Build consistent, interactive D&D 2024 HTML character sheets for the maltandmagic campaign site. Covers file conventions, CSS theme system, tab structure, JS state management, spell/resource tracking, SRD verification, and GitHub Pages compatibility.
---

# D&D HTML Character Sheet Skill

Use this skill when creating a new character sheet or iterating on an existing one in the `DnD/` directory.

## File Conventions

- **Location:** `DnD/<character-slug>_sheet.html` (e.g. `lygas_cantor_sheet.html`)
- **Private references:** `DnD/.private/` — PDFs, subclass docs, backstory notes (not served by GitHub Pages)
- **Shared assets:** `../assets/css/theme-fantasy.css` and `../assets/css/page-polish.css`
- **Google Fonts:** Cinzel (display), IM Fell English (flavour), Barlow / Barlow Condensed (body/UI)

## SRD Verification Requirement

Before adding any spell or class feature, verify it against the SRD 5.2.1:
- Spells: `https://raw.githubusercontent.com/downfallx/dnd-5e-srd-markdown/refs/heads/master/spells.md`
- Classes: `https://raw.githubusercontent.com/downfallx/dnd-5e-srd-markdown/refs/heads/master/classes.md`

Label verified content with the source (e.g. `SRD 5.2.1`). Label homebrew or non-SRD content explicitly (e.g. `Homebrew`, `Campaign-specific`).

---

## CSS Theme System

Each sheet gets its own character theme via CSS custom properties. Define them in a `:root` block at the top of the `<style>` tag. Use this naming convention:

```css
:root {
  /* Background layers */
  --theme-dark:    #...;   /* body background */
  --theme-mid:     #...;   /* panel background */
  --theme-panel:   #...;   /* card/inner panel */
  --theme-border:  #...;   /* panel border colour */
  --theme-accent:  #...;   /* interactive accent */

  /* Primary accent (replaces --gold in Viktor's sheet) */
  --gold:          #...;   /* main highlight colour */
  --gold-light:    #...;
  --gold-dim:      #...;

  /* Text */
  --parchment:     #e8ddc8;
  --parchment-dark:#c9bfa0;
  --text-primary:  #e8ddc8;
  --text-secondary:#...;
  --text-dim:      #...;

  /* Status colours (keep consistent across sheets) */
  --danger:        #8b2f2f;
  --danger-light:  #c0392b;
  --success:       #3a6b3a;
  --success-light: #5a9b5a;
  --hp-bar:        #6b2020;

  /* Semantic */
  --card-bg:       rgba(...);
  --card-border:   rgba(..., 0.25);
  --section-bg:    rgba(..., 0.85);
  --tooltip-bg:    #...;
  --advantage:     #2e5c2e;
  --disadvantage:  #5c2e2e;
  --steel:         #8fa29a;
  --steel-dim:     #5f716b;
}
```

### Per-Character Theme Examples

| Character | Primary | Accent | Body BG |
|-----------|---------|--------|---------|
| Viktor Rhee (Ranger) | Forest green `#243020` | Gold `#c9a84c` | Dark green `#0e1a0c` |
| Lygas Cantor (Warlock) | Briar purple `#1a1028` | Rose-gold `#c9a07a` | Purple-black `#120a1e` |

---

## Tab Structure

All sheets use a four-tab layout:

```
⚔ Combat  |  ✦ Spells  |  ❧ Features  |  ✎ Notes
```

Tab implementation pattern:
```html
<div class="tab-bar">
  <button class="tab-btn active" onclick="switchTab('combat')">⚔ Combat</button>
  <button class="tab-btn" onclick="switchTab('spells')">✦ Spells</button>
  <button class="tab-btn" onclick="switchTab('features')">❧ Features</button>
  <button class="tab-btn" onclick="switchTab('notes')">✎ Notes</button>
</div>

<div id="tab-combat"  class="tab-panel active"> ... </div>
<div id="tab-spells"  class="tab-panel"> ... </div>
<div id="tab-features"class="tab-panel"> ... </div>
<div id="tab-notes"   class="tab-panel"> ... </div>
```

```js
function switchTab(name) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`tab-${name}`)?.classList.add('active');
  document.querySelector(`[onclick="switchTab('${name}')"]`)?.classList.add('active');
  saveSheetState();
}
```

---

## Combat Tab Layout

Three-column grid on desktop, single-column on mobile:

```
[Ability Scores + Saves + Skills] | [HP / AC / Initiative + Weapons + Conditions] | [Proficiencies + Senses]
```

### Ability Score Block

Display all six scores. For each:
- Score value (large)
- Modifier (derived: `Math.floor((score - 10) / 2)`)
- Saving throw row (proficient marked with `P`, value derived)

### Combat Stats Row (quick reference panel)

Always visible at top of combat tab:
- AC (derived from armor + DEX, affected by active spells)
- Current HP / Max HP (editable input)
- Initiative (DEX mod + bonuses like Alert feat)
- Speed (may be affected by active spells like Longstrider)
- Proficiency Bonus (fixed for current level)
- Spell Save DC / Spell Attack (if caster)

### Weapon Attacks

For each weapon:
- Name, attack bonus (static or derived), damage dice + modifier, damage type
- Mastery property badge where applicable
- Attack roll Advantage/Disadvantage indicator

---

## JS State Management

### sheetState Object

```js
const sheetState = {
  // Spell/effect toggles
  <spellName>: false,      // e.g. hex: false, longstrider: false

  // Resource uses
  <resource>Used: 0,       // e.g. secondWindUsed: 0

  // Concentration tracking
  concentrating: null,     // name of concentration spell, or null

  // Hunter's Mark / Hex target
  markTarget: '',
};
```

### Derived Stats

Always recalculate in `refreshDerivedStats()`:
- AC, Speed, Spell DC, Spell Attack — affected by toggleable effects
- Never hardcode derived values in the HTML

### localStorage Persistence

```js
const SHEET_STORAGE_KEY = 'maltandmagic:dnd:<character-slug>-sheet:v1';
```

Save on every meaningful interaction. Restore on `DOMContentLoaded`.

---

## Spell Slot & Resource Tracking

### Slot Pips

```html
<div class="slot-pip available" id="s-slot-1a" onclick="toggleSlot('s-slot-1a')" title="Slot 1"></div>
```

- Class `available` = unused, `used` = expended
- Click toggles between states
- `toggleSlot(id)` syncs across duplicate displays (combat tab + spells tab)

### Pact Magic (Warlock-specific)

Pact Magic slots recover on **Short OR Long Rest** — not just Long Rest. The rest functions must handle this:

```js
function shortRest() {
  // Recover Pact Magic slots
  document.querySelectorAll('.slot-pip[id^="s-slot-"]').forEach(pip => {
    pip.classList.remove('used');
    pip.classList.add('available');
  });
  // Do NOT recover long-rest-only resources
}
```

### Resource Pips (e.g. Second Wind, Briarstep uses)

```html
<div class="resource-pip available" onclick="toggleResource(this)" title="Use 1"></div>
```

Use `.resource-pip.used` CSS to show expended state. Track counts in `sheetState`.

---

## Spell Cards

Each spell card shows:
- Spell name + level badge
- Active/Inactive status pill (for concentration spells)
- Meta row: cast time, range, duration, components
- Cast button (spends a slot, activates if concentration)
- End button (shown only when active, for concentration spells)

```html
<div class="spell-card prepared" id="spell-hex-card" data-tooltip="spell-hex">
  <div class="spell-header">
    <div class="spell-name">Hex</div>
    <span class="spell-level-badge">1st</span>
    <span class="status-pill off" id="hex-pill">Inactive</span>
  </div>
  <div class="spell-meta">
    <span>⏱ Bonus Action</span>
    <span>📏 90 ft.</span>
    <span>⌛ Conc. 1 hr</span>
    <span>🔮 V,S,M</span>
  </div>
  <div class="spell-actions">
    <button class="cast-btn" onclick="castSpell('hex')">⚡ Cast</button>
    <button class="cast-btn end" onclick="endSpell('hex')" style="display:none;">End</button>
  </div>
</div>
```

---

## Locked / Preview Features

For class features not yet unlocked (e.g. Gloamthorn Court at Warlock level 1):

```html
<div class="feature-card locked" data-unlock="Warlock 3">
  <div class="feature-header">
    <span class="feature-name">Briarstep Blessing</span>
    <span class="feature-source locked-badge">Unlocks at Warlock 3</span>
  </div>
  <div class="feature-summary locked-text">...</div>
</div>
```

```css
.feature-card.locked {
  opacity: 0.45;
  border-left-color: var(--text-dim);
  pointer-events: none;
}
.locked-badge {
  font-size: 9px;
  color: var(--text-dim);
  font-style: italic;
}
```

---

## Tooltip System

All cards support hover tooltips via `data-tooltip="key"`:

```js
const TOOLTIPS = {
  "spell-hex": {
    name: "Hex",
    type: "1st-Level Enchantment (Warlock) — SRD 5.2.1",
    body: "You place a curse on a creature within range...",
    stats: { "Cast Time": "Bonus Action", "Range": "90 ft.", "Duration": "Conc., up to 1 hr", ... }
  },
};
```

Tooltip renders in a fixed `#tooltip` div, positioned near cursor on `mouseenter`, hidden on `mouseleave`.

---

## Mobile Responsiveness

- Breakpoint at 768px: switch from 3-column to 1-column grid
- Tab bar: smaller text, icons may abbreviate
- Weapon table: stack on mobile
- Spell cards: full-width on mobile

---

## Character Sheet Checklist

Before shipping a new sheet:

- [ ] All spells verified against SRD (or labelled homebrew)
- [ ] All derived stats recalculate reactively
- [ ] localStorage save/load tested (incl. tab state)
- [ ] Short Rest and Long Rest functions both implemented
- [ ] Pact Magic vs standard spell slots handled correctly (Warlock = Short+Long, others = Long only)
- [ ] Concentration tracked (only one concentration spell active at a time)
- [ ] Locked features shown but not interactive
- [ ] Mobile layout verified
- [ ] Back-link to `index.html` in nav
- [ ] Sheet title includes character name and class/level
