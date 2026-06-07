import React from 'react'
import Tooltip from './Tooltip.jsx'

// Every feature card is wrapped in a Tooltip — hovering (or focusing, for
// keyboard users) reveals the full rules text in a floating popup, exactly
// as requested. Cards that have a `tracking` resource get a use-counter with
// +/- controls; cards with a `toggle` (Rage, Reckless Attack) get an on/off
// switch that feeds back into App.jsx's `activeToggles` state, which is what
// actually changes numbers elsewhere on the dashboard (see ActiveEffectsBar
// and the live weapon-damage math in ActionsPanel).
export default function FeaturesPanel({ character, uses, onUseChange, activeToggles, onToggle }) {
  return (
    <section className="panel features-panel">
      <h2 className="panel-title">Features &amp; Traits</h2>
      <p className="panel-hint">Hover any feature for its full description. Trackable features show use-counters or on/off switches that live-update your stats.</p>
      <div className="feature-grid">
        {character.features.map((f) => {
          const trackKey = f.id
          const used = uses[trackKey] ?? 0
          const remaining = f.tracking ? Math.max(0, f.tracking.max - used) : null
          const toggleOn = f.toggle ? !!activeToggles[f.toggle.id] : false

          return (
            <div className={`feature-card ${toggleOn ? 'is-active-toggle' : ''}`} key={f.id}>
              <Tooltip
                trigger={<span className="feature-name">{f.name}</span>}
                title={f.name}
                subtitle={`${f.source}${f.activation ? ` · ${f.activation}` : ''}`}
              >
                {f.description}
              </Tooltip>
              <span className="feature-meta">{f.category}</span>

              {f.tracking && (
                <div className="feature-tracker">
                  <span className="feature-tracker-label">{f.tracking.label}</span>
                  <div className="feature-pips">
                    {Array.from({ length: f.tracking.max }).map((_, i) => (
                      <button
                        key={i}
                        className={`pip pip-resource ${i < remaining ? 'is-filled' : ''}`}
                        onClick={() => {
                          // Clicking a filled pip spends it (left -> right consumes from the right);
                          // clicking an empty pip restores it. Simple, tactile use-tracking.
                          const next = i < remaining ? used + 1 : used - 1
                          onUseChange(trackKey, Math.max(0, Math.min(f.tracking.max, next)))
                        }}
                        title={i < remaining ? 'Spend a use' : 'Restore a use'}
                      />
                    ))}
                  </div>
                  <span className="feature-tracker-note">
                    {remaining}/{f.tracking.max} · regains on {f.tracking.per}
                    {f.tracking.resetLabel ? ` (${f.tracking.resetLabel})` : ''}
                  </span>
                </div>
              )}

              {f.toggle && (
                <button
                  className={`btn btn-toggle ${toggleOn ? 'is-on' : ''}`}
                  onClick={() => onToggle(f)}
                  disabled={f.toggle.spendsUse && !toggleOn && remaining <= 0}
                >
                  {toggleOn ? f.toggle.offLabel : f.toggle.onLabel}
                  {f.toggle.spendsUse && !toggleOn && (
                    <span className="btn-toggle-note"> ({remaining} left)</span>
                  )}
                </button>
              )}

              {f.effectChoices && (
                <div className="feature-choices">
                  {f.effectChoices.map((c) => <span className="chip chip-choice" key={c}>{c}</span>)}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
