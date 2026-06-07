import React from 'react'

// Pure CSS hover popup. The trigger is whatever children are passed in;
// the floating card is positioned via CSS (.tt-popup) and only shown on
// :hover/:focus of the wrapping .tt element — no JS mouse-tracking needed,
// which keeps it cheap and reliable across the whole dashboard (features,
// spells, weapon mastery properties, etc. all reuse this).
export default function Tooltip({ trigger, title, subtitle, children, side = 'right' }) {
  return (
    <span className={`tt tt-${side}`} tabIndex={0}>
      {trigger}
      <span className="tt-popup" role="tooltip">
        <span className="tt-popup-title">{title}</span>
        {subtitle && <span className="tt-popup-subtitle">{subtitle}</span>}
        <span className="tt-popup-body">{children}</span>
      </span>
    </span>
  )
}
