import React, { useEffect, useMemo, useState } from 'react'
import { initialCharacter } from './data/character.js'
import { collectActiveBonuses } from './utils/calc.js'

import Header from './components/Header.jsx'
import TopStatsBar from './components/TopStatsBar.jsx'
import ActiveEffectsBar from './components/ActiveEffectsBar.jsx'
import HPPanel from './components/HPPanel.jsx'
import AbilityScoresPanel from './components/AbilityScoresPanel.jsx'
import SkillsPanel from './components/SkillsPanel.jsx'
import FeaturesPanel from './components/FeaturesPanel.jsx'
import ActionsPanel from './components/ActionsPanel.jsx'
import SpellsPanel from './components/SpellsPanel.jsx'

const STORAGE_KEY = 'naeethim-command-centre-v1'

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

// ============================================================================
// App owns ALL mutable state for the dashboard:
//   - character    : the full sheet (HP, abilities, etc.) — patched via setCharacter
//   - featureUses  : { [featureId]: numberSpent }           — tracked-resource counters
//   - activeToggles: { [toggleId]: boolean }                — on/off feature states (Rage, Reckless)
// `activeBonuses` is DERIVED each render from character + activeToggles, and
// is what flows down to AbilityScores/Skills/Actions/EffectsBar so every
// panel reflects live stat changes from a single source of truth.
// Everything is persisted to localStorage so refreshing the page (or the
// player closing their laptop mid-session) doesn't lose progress.
// ============================================================================
export default function App() {
  const [character, setCharacter] = useState(() => loadSaved()?.character ?? initialCharacter)
  const [featureUses, setFeatureUses] = useState(() => loadSaved()?.featureUses ?? {})
  const [activeToggles, setActiveToggles] = useState(() => loadSaved()?.activeToggles ?? {})

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ character, featureUses, activeToggles }))
  }, [character, featureUses, activeToggles])

  const patchCharacter = (patch) => setCharacter((c) => ({ ...c, ...patch }))

  const handleUseChange = (featureId, nextUsed) => {
    setFeatureUses((u) => ({ ...u, [featureId]: nextUsed }))
  }

  const handleToggle = (feature) => {
    const id = feature.toggle.id
    const turningOn = !activeToggles[id]

    if (feature.toggle.spendsUse && turningOn) {
      const used = featureUses[feature.id] ?? 0
      const remaining = feature.tracking.max - used
      if (remaining <= 0) return
      setFeatureUses((u) => ({ ...u, [feature.id]: used + 1 }))
    }

    setActiveToggles((t) => ({ ...t, [id]: turningOn }))
  }

  const activeBonuses = useMemo(
    () => collectActiveBonuses(character, activeToggles),
    [character, activeToggles],
  )

  const isRaging = !!activeToggles['raging']

  const resetAll = () => {
    if (!window.confirm('Reset the Command Centre to naeethim\'s starting state? This clears HP changes, spent uses, and active effects.')) return
    setCharacter(initialCharacter)
    setFeatureUses({})
    setActiveToggles({})
  }

  return (
    <div className="cc-shell">
      <Header character={character} />
      <TopStatsBar
        character={character}
        onToggleInspiration={() => patchCharacter({ heroicInspiration: !character.heroicInspiration })}
      />
      <ActiveEffectsBar activeBonuses={activeBonuses} activeToggles={activeToggles} character={character} />

      <main className="cc-grid">
        <div className="cc-col cc-col-left">
          <HPPanel character={character} onChange={patchCharacter} />
          <AbilityScoresPanel character={character} activeBonuses={activeBonuses} />
          <SpellsPanel character={character} />
        </div>

        <div className="cc-col cc-col-mid">
          <SkillsPanel character={character} isRaging={isRaging} />
          <ActionsPanel character={character} activeBonuses={activeBonuses} />
        </div>

        <div className="cc-col cc-col-right">
          <FeaturesPanel
            character={character}
            uses={featureUses}
            onUseChange={handleUseChange}
            activeToggles={activeToggles}
            onToggle={handleToggle}
          />
        </div>
      </main>

      <footer className="cc-footer">
        <span>Saved automatically to this browser. </span>
        <button className="btn btn-ghost btn-sm" onClick={resetAll}>Reset to starting state</button>
      </footer>
    </div>
  )
}
