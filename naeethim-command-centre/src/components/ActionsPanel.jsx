import React from 'react'
import Tooltip from './Tooltip.jsx'
import { weaponLine } from '../utils/calc.js'

// Weapon attacks recompute their damage string live from `activeBonuses` —
// e.g. toggling Rage on immediately adds "+3 (Rage)" to every Strength-based
// weapon's damage line here, with no page reload or manual recalculation.
// Standard/Bonus actions are reference lists with hover tooltips for the
// less-common ones (Stonecunning, Brutal Strike riders, weapon mastery).
export default function ActionsPanel({ character, activeBonuses }) {
  return (
    <section className="panel actions-panel">
      <h2 className="panel-title">Actions &amp; Attacks</h2>

      <h3 className="panel-subtitle">Weapon Attacks</h3>
      <table className="weapon-table">
        <thead>
          <tr><th>Weapon</th><th>To Hit</th><th>Damage</th><th>Notes</th></tr>
        </thead>
        <tbody>
          {character.weapons.map((w) => {
            const line = weaponLine(character, w, activeBonuses)
            return (
              <tr key={w.id} className={line.rageBonus ? 'is-buffed' : ''}>
                <td>{w.name}{w.qty ? ` (×${w.qty})` : ''}</td>
                <td>{line.toHit}</td>
                <td>
                  {line.damage}
                  {line.rageBonus > 0 && <span className="badge badge-rage" title="Rage Damage active">RAGE</span>}
                </td>
                <td className="weapon-notes">{w.notes}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="actions-columns">
        <div>
          <h3 className="panel-subtitle">Standard Actions</h3>
          <div className="chip-row">
            {character.actionsStandard.map((a) => <span className="chip" key={a}>{a}</span>)}
          </div>
        </div>
        <div>
          <h3 className="panel-subtitle">Bonus Actions</h3>
          <div className="chip-row">
            <Tooltip trigger={<span className="chip chip-feature">Rage</span>} title="Rage" subtitle="Bonus Action · Barbarian">
              Enter your Rage (also moves you up to half Speed via Instinctive Pounce). Toggle it from the Features panel to apply its bonuses live.
            </Tooltip>
            <Tooltip trigger={<span className="chip chip-feature">Stonecunning (Tremorsense)</span>} title="Stonecunning" subtitle="Bonus Action · 4/Long Rest · Dwarf">
              Gain Tremorsense 60 ft. for 10 minutes while on or touching stone. Track uses from the Features panel.
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  )
}
