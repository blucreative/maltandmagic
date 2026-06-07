import React from 'react'
import { fmtMod } from '../utils/calc.js'

// Quick-glance row of the numbers a player checks constantly: AC, Initiative,
// Speed, Proficiency, Senses, Heroic Inspiration. `onToggleInspiration` flips
// a boolean in the central character state — small example of the "everything
// is live and editable" philosophy applied even to the simplest fields.
export default function TopStatsBar({ character, onToggleInspiration }) {
  const stat = (label, value, note) => (
    <div className="stat-chip">
      <span className="stat-chip-label">{label}</span>
      <span className="stat-chip-value">{value}</span>
      {note && <span className="stat-chip-note">{note}</span>}
    </div>
  )

  return (
    <div className="top-stats">
      {stat('Armor Class', character.armorClass, character.armorClassNote)}
      {stat('Initiative', fmtMod(character.initiativeBonus))}
      {stat('Speed', `${character.speed.value} ${character.speed.label}`)}
      {stat('Proficiency', fmtMod(character.proficiencyBonus))}
      {stat('Senses', character.senses)}
      <button
        className={`stat-chip stat-chip-toggle ${character.heroicInspiration ? 'is-active' : ''}`}
        onClick={onToggleInspiration}
        title="Click to toggle Heroic Inspiration"
      >
        <span className="stat-chip-label">Heroic Inspiration</span>
        <span className="stat-chip-value">{character.heroicInspiration ? '✦ Active' : '— None'}</span>
      </button>
    </div>
  )
}
