import React from 'react'
import { abilityMod, fmtMod, saveBonus } from '../utils/calc.js'

const ORDER = ['str', 'dex', 'con', 'int', 'wis', 'cha']

export default function AbilityScoresPanel({ character, activeBonuses }) {
  const strAdvantage = activeBonuses.some((b) => b.type === 'advantage' && /strength/i.test(b.text))

  return (
    <section className="panel abilities-panel">
      <h2 className="panel-title">Ability Scores &amp; Saves</h2>
      <div className="ability-grid">
        {ORDER.map((key) => {
          const a = character.abilities[key]
          const mod = abilityMod(a.score)
          const sv = saveBonus(character, key)
          const proficient = character.saveProficiencies[key]
          const showAdv = key === 'str' && strAdvantage
          return (
            <div className="ability-card" key={key}>
              <span className="ability-card-label">{a.label.slice(0, 3).toUpperCase()}</span>
              <span className="ability-card-score">{a.score}</span>
              <span className="ability-card-mod">{fmtMod(mod)}</span>
              <div className={`ability-card-save ${proficient ? 'is-proficient' : ''} ${showAdv ? 'has-advantage' : ''}`}>
                <span className="save-dot" aria-hidden="true">{proficient ? '●' : '○'}</span>
                Save {fmtMod(sv)}
                {showAdv && <span className="adv-badge" title="Advantage from Rage">ADV</span>}
              </div>
            </div>
          )
        })}
      </div>
      {character.saveNotes?.length > 0 && (
        <ul className="save-notes">
          {character.saveNotes.map((n, i) => <li key={i}>{n}</li>)}
        </ul>
      )}
    </section>
  )
}
