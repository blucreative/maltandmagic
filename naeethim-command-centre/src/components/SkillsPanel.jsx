import React from 'react'
import { fmtMod, skillBonus, passiveScore } from '../utils/calc.js'

// Skill list with live-recomputed bonuses. While Raging, Primal Knowledge
// lets several skills swap to the (higher) Strength modifier — the panel
// shows a small "STR" badge whenever that swap is actually in effect, so
// the player can see exactly why a number changed.
export default function SkillsPanel({ character, isRaging }) {
  return (
    <section className="panel skills-panel">
      <h2 className="panel-title">Skills</h2>
      {isRaging && (
        <p className="panel-hint">
          Raging — Primal Knowledge lets Acrobatics, Intimidation, Perception, Stealth &amp; Survival use your
          (higher) Strength modifier. Swapped skills are marked <span className="badge badge-str">STR</span>.
        </p>
      )}
      <ul className="skill-list">
        {character.skills.map((skill) => {
          const { total, swapped } = skillBonus(character, skill, { isRaging })
          return (
            <li key={skill.key} className={`skill-row ${skill.proficient ? 'is-proficient' : ''}`}>
              <span className="skill-dot" aria-hidden="true">{skill.proficient ? '●' : '○'}</span>
              <span className="skill-name">{skill.label}</span>
              <span className="skill-ability">({swapped ? 'Str*' : skill.ability.toUpperCase()})</span>
              {swapped && <span className="badge badge-str" title="Swapped to Strength via Primal Knowledge">STR</span>}
              <span className="skill-bonus">{fmtMod(total)}</span>
            </li>
          )
        })}
      </ul>
      <div className="passive-scores">
        <span>Passive Perception <strong>{passiveScore(character, 'perception') }</strong></span>
        <span>Passive Insight <strong>{passiveScore(character, 'insight')}</strong></span>
        <span>Passive Investigation <strong>{passiveScore(character, 'investigation')}</strong></span>
      </div>
    </section>
  )
}
