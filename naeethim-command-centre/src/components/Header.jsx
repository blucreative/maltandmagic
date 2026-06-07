import React from 'react'

export default function Header({ character }) {
  const { meta } = character
  return (
    <header className="cc-header">
      <div className="cc-header-emblem" aria-hidden="true">🪓</div>
      <div className="cc-header-text">
        <h1>{meta.name} <span className="cc-header-sub">— Command Centre</span></h1>
        <p className="cc-header-meta">
          {meta.charname} · {meta.species} {meta.classLevel} · {meta.subclass} · {meta.background} · {meta.xp} XP
        </p>
      </div>
    </header>
  )
}
