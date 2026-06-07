import React from 'react'

// A single, always-visible strip summarizing every live stat change currently
// in effect (Raging, Reckless Attack, etc.) — so the player never has to dig
// through the Features panel mid-combat to remember what's buffed right now.
export default function ActiveEffectsBar({ activeBonuses, activeToggles, character }) {
  const activeNames = [...new Set(activeBonuses.map((b) => b.effectName))]

  if (activeNames.length === 0) {
    return (
      <div className="active-effects is-empty">
        <span className="active-effects-label">Active Effects:</span>
        <span className="active-effects-empty">None — toggle Rage or Reckless Attack from the Features panel to see live stat changes here.</span>
      </div>
    )
  }

  return (
    <div className="active-effects">
      <span className="active-effects-label">Active Effects:</span>
      <div className="active-effects-list">
        {activeNames.map((name) => {
          const bonusesForEffect = activeBonuses.filter((b) => b.effectName === name)
          return (
            <div className="active-effect-card" key={name}>
              <span className="active-effect-name">⚡ {name}</span>
              <ul>
                {bonusesForEffect.map((b, i) => <li key={i}>{b.text}</li>)}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
