import React, { useState } from 'react'

// Full HP economy: current/max/temp tracking with quick damage & heal inputs,
// hit dice spending, and death saves. Everything writes back through the
// `onChange(patch)` callback so App.jsx remains the single source of truth.
export default function HPPanel({ character, onChange }) {
  const { hp, hitDice, deathSaves } = character
  const [delta, setDelta] = useState('')

  const pct = Math.max(0, Math.min(100, Math.round((hp.current / hp.max) * 100)))
  const barClass = pct <= 25 ? 'hp-bar-fill is-critical' : pct <= 50 ? 'hp-bar-fill is-hurt' : 'hp-bar-fill'

  const applyDelta = (sign) => {
    const n = parseInt(delta, 10)
    if (Number.isNaN(n) || n <= 0) return
    let { current, temp } = hp
    if (sign < 0) {
      // Damage: temp HP absorbs first
      let remaining = n
      let newTemp = temp
      if (newTemp > 0) {
        const absorbed = Math.min(newTemp, remaining)
        newTemp -= absorbed
        remaining -= absorbed
      }
      const newCurrent = Math.max(0, current - remaining)
      onChange({ hp: { ...hp, current: newCurrent, temp: newTemp } })
    } else {
      const newCurrent = Math.min(hp.max, current + n)
      onChange({ hp: { ...hp, current: newCurrent } })
    }
    setDelta('')
  }

  const setTemp = (val) => {
    const n = Math.max(0, parseInt(val, 10) || 0)
    onChange({ hp: { ...hp, temp: n } })
  }

  const spendHitDie = () => {
    if (hitDice.remaining <= 0) return
    onChange({ hitDice: { ...hitDice, remaining: hitDice.remaining - 1 } })
  }

  const restoreHitDice = () => {
    // Long Rest restores roughly half the total (rounded up), per 5e rules
    const restored = Math.min(hitDice.total, hitDice.remaining + Math.ceil(hitDice.total / 2))
    onChange({ hitDice: { ...hitDice, remaining: restored } })
  }

  const bumpDeathSave = (kind, dir) => {
    const next = Math.max(0, Math.min(3, deathSaves[kind] + dir))
    onChange({ deathSaves: { ...deathSaves, [kind]: next } })
  }

  const pips = (count, kind, label, cls) => (
    <div className="death-save-row">
      <span className="death-save-label">{label}</span>
      <div className="death-save-pips">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            className={`pip ${cls} ${i < count ? 'is-filled' : ''}`}
            onClick={() => bumpDeathSave(kind, i < count ? -1 : 1)}
            aria-label={`${label} ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )

  return (
    <section className="panel hp-panel">
      <h2 className="panel-title">Hit Points &amp; Vitality</h2>

      <div className="hp-bar-track">
        <div className={barClass} style={{ width: `${pct}%` }} />
        <span className="hp-bar-label">{hp.current} / {hp.max}{hp.temp > 0 ? ` (+${hp.temp} temp)` : ''}</span>
      </div>

      <div className="hp-controls">
        <input
          type="number"
          min="1"
          placeholder="Amount"
          value={delta}
          onChange={(e) => setDelta(e.target.value)}
          className="hp-input"
        />
        <button className="btn btn-danger" onClick={() => applyDelta(-1)}>− Damage</button>
        <button className="btn btn-heal" onClick={() => applyDelta(1)}>+ Heal</button>
      </div>

      <div className="hp-row">
        <label className="hp-row-label">Temp HP</label>
        <input
          type="number"
          min="0"
          value={hp.temp}
          onChange={(e) => setTemp(e.target.value)}
          className="hp-input hp-input-small"
        />
        <label className="hp-row-label">Max HP</label>
        <span className="hp-static-value">{hp.max}</span>
        <span className="hp-static-note">(42 base incl. Dwarven Toughness +10 &amp; Tough feat +20)</span>
      </div>

      <div className="hp-divider" />

      <div className="hp-row">
        <span className="hp-row-label">Hit Dice</span>
        <span className="hit-dice-track">
          {Array.from({ length: hitDice.total }).map((_, i) => (
            <span key={i} className={`hit-die ${i < hitDice.remaining ? 'is-available' : 'is-spent'}`}>⬡</span>
          ))}
        </span>
        <span className="hp-static-note">{hitDice.remaining}/{hitDice.total} {hitDice.die} remaining</span>
        <button className="btn btn-ghost btn-sm" onClick={spendHitDie} disabled={hitDice.remaining <= 0}>Spend</button>
        <button className="btn btn-ghost btn-sm" onClick={restoreHitDice}>Long Rest Recovery</button>
      </div>

      <div className="hp-divider" />

      <div className="death-saves">
        <span className="hp-row-label">Death Saves <span className="hp-static-note">(only relevant at 0 HP)</span></span>
        {pips(deathSaves.successes, 'successes', 'Successes', 'pip-success')}
        {pips(deathSaves.failures, 'failures', 'Failures', 'pip-failure')}
      </div>
    </section>
  )
}
