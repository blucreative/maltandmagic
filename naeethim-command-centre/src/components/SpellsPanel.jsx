import React from 'react'
import Tooltip from './Tooltip.jsx'

// Mirrors the Features panel's hover-popup treatment, per the requirement
// that spells/spellcasting get "the same" floating-description behaviour.
export default function SpellsPanel({ character }) {
  const sc = character.spellcasting
  return (
    <section className="panel spells-panel">
      <h2 className="panel-title">Spellcasting</h2>
      <p className="panel-hint">
        {sc.classLabel} · Spellcasting Ability: {sc.ability}
        {sc.saveDC ? ` · Save DC ${sc.saveDC}` : ' · No spell save DC (Ritual-only casting)'}
      </p>
      <p className="panel-hint panel-hint-warning">{sc.note}</p>
      <ul className="spell-list">
        {sc.spells.map((s) => (
          <li className="spell-row" key={s.id}>
            <Tooltip
              trigger={<span className="spell-name">{s.name}</span>}
              title={s.name}
              subtitle={`Level ${s.level} · ${s.ritual ? 'Ritual' : ''} · ${s.source}`}
            >
              <strong>Casting Time:</strong> {s.time}<br />
              <strong>Range:</strong> {s.range}<br />
              <strong>Components:</strong> {s.components}<br />
              <strong>Duration:</strong> {s.duration}<br /><br />
              {s.description}
              <br /><br />
              <em>{s.pageRef}</em>
            </Tooltip>
            <span className="spell-badge">{s.ritual ? 'Ritual' : 'Spell'}</span>
            <span className="spell-level">Lvl {s.level}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
