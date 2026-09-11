window.initializeSheetRulesHelp = window.initializeArchiboldRulesHelp = function (rules, options) {
  'use strict';
  const headingSelector = options?.headingSelector || '.feature-name,.item-name,.ability-name,.weapon-name';
  document.getElementById('tooltip').hidden = true;
  const panel = document.createElement('aside');
  panel.className = 'archibold-rules-panel';
  panel.id = 'archiboldRulesPanel';
  panel.tabIndex = -1;
  panel.hidden = true;
  panel.setAttribute('aria-labelledby', 'archiboldRulesTitle');
  const content = document.createElement('div');
  content.id = 'archiboldRulesContent';
  const title = document.createElement('h2'); title.id = 'archiboldRulesTitle';
  const source = document.createElement('p'); source.className = 'archibold-rules-source';
  const stats = document.createElement('dl');
  const body = document.createElement('div'); body.className = 'archibold-rules-body';
  content.append(title, source, stats, body);
  const close = document.createElement('button'); close.type = 'button'; close.className = 'archibold-rules-close';
  close.setAttribute('aria-label', 'Close rules help');
  const icon = document.createElement('img'); icon.src = '../assets/icons/col-agen/x.svg'; icon.alt = '';
  close.append(icon); panel.append(content, close); document.body.append(panel);
  let activeButton = null;
  let pinned = false;
  let hideTimer;
  let restoringFocus = false;
  let pointerType = '';

  function hide(restoreFocus = false) {
    clearTimeout(hideTimer);
    const previous = activeButton;
    panel.hidden = true;
    pinned = false;
    activeButton = null;
    previous?.setAttribute('aria-expanded', 'false');
    if (restoreFocus && previous?.isConnected) {
      restoringFocus = true;
      previous.focus({ preventScroll: true });
      restoringFocus = false;
    }
  }
  function position() {
    if (!activeButton) return;
    if (!activeButton.isConnected || !activeButton.getClientRects().length) { hide(); return; }
    const anchor = activeButton.getBoundingClientRect();
    const bounds = panel.getBoundingClientRect();
    const below = anchor.bottom + 8;
    panel.style.left = `${Math.max(12, Math.min(anchor.left, innerWidth - bounds.width - 12))}px`;
    panel.style.top = `${Math.max(12, Math.min(below + bounds.height <= innerHeight - 12 ? below : anchor.top - bounds.height - 8, innerHeight - bounds.height - 12))}px`;
  }
  function show(button, pin = false) {
    const rule = rules[button.dataset.archiboldHelp];
    if (!rule) return;
    clearTimeout(hideTimer);
    activeButton?.setAttribute('aria-expanded', 'false');
    activeButton = button;
    pinned = pin;
    title.textContent = rule.name;
    source.textContent = rule.type || '';
    stats.replaceChildren();
    for (const [name, value] of Object.entries(rule.stats || {})) {
      const pair = document.createElement('div');
      const label = document.createElement('dt'); label.textContent = name;
      const detail = document.createElement('dd'); detail.textContent = value;
      pair.append(label, detail); stats.append(pair);
    }
    stats.hidden = !stats.children.length;
    body.replaceChildren(...(rule.body || '').split(/\n+/).map(text => {
      const paragraph = document.createElement('p'); paragraph.textContent = text; return paragraph;
    }));
    content.setAttribute('role', pin ? 'region' : 'tooltip');
    content.setAttribute('aria-labelledby', title.id);
    close.hidden = !pin;
    panel.hidden = false;
    panel.scrollTop = 0;
    button.setAttribute('aria-expanded', 'true');
    position();
    if (pin) panel.focus({ preventScroll: true });
  }
  function scheduleHide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      if (!pinned && !panel.matches(':hover') && document.activeElement !== activeButton && !panel.contains(document.activeElement)) hide();
    }, 180);
  }
  let descriptionIndex = 0;
  for (const target of document.querySelectorAll('[data-tooltip]')) {
    const rule = rules[target.dataset.tooltip];
    if (!rule) continue;
    const button = document.createElement('button'); button.type = 'button'; button.className = 'archibold-rules-help';
    button.dataset.archiboldHelp = target.dataset.tooltip;
    button.setAttribute('aria-label', `${rule.name}: rules help`);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', panel.id);
    const image = document.createElement('img'); image.src = '../assets/icons/col-agen/info.svg'; image.alt = '';
    button.append(image);
    const description = document.createElement('span');
    description.id = `archibold-rule-description-${descriptionIndex++}`;
    description.hidden = true;
    description.textContent = [rule.name, rule.type, ...Object.entries(rule.stats || {}).map(([key, value]) => `${key}: ${value}`), rule.body].filter(Boolean).join('. ');
    document.body.append(description); button.setAttribute('aria-describedby', description.id);
    const interactive = target.closest('button,a,[onclick],input,select,textarea');
    if (interactive && options?.groupSelector && interactive.matches(options.groupSelector)) {
      const group = document.createElement('span'); group.className = 'rules-control-pair';
      interactive.before(group); group.append(interactive, button);
    } else if (interactive) interactive.after(button);
    else (target.querySelector(headingSelector) || target).append(button);
  }
  document.addEventListener('pointerdown', event => { pointerType = event.pointerType; }, true);
  document.addEventListener('pointerover', event => {
    const button = event.target.closest('[data-archibold-help]');
    if (button && !pinned && event.pointerType !== 'touch') show(button);
    if (panel.contains(event.target)) clearTimeout(hideTimer);
  });
  document.addEventListener('pointerout', event => {
    if (event.target.closest('[data-archibold-help]') || panel.contains(event.target)) scheduleHide();
  });
  document.addEventListener('focusin', event => {
    if (restoringFocus) return;
    const button = event.target.closest('[data-archibold-help]');
    if (button && !pinned && pointerType !== 'touch') show(button);
    else if (!button && !panel.contains(event.target)) hide();
  });
  document.addEventListener('focusout', event => {
    if (!pinned && (event.target.closest('[data-archibold-help]') || panel.contains(event.target))) scheduleHide();
  });
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-archibold-help]');
    if (button) {
      event.preventDefault(); event.stopImmediatePropagation();
      if (activeButton === button && pinned) hide(); else show(button, true);
    } else if (!panel.contains(event.target)) hide();
  }, true);
  close.addEventListener('click', () => hide(true));
  document.addEventListener('keydown', event => {
    pointerType = '';
    if (event.key === 'Escape' && !panel.hidden) { event.preventDefault(); hide(panel.contains(document.activeElement)); }
  });
  window.addEventListener('resize', position);
  document.addEventListener('scroll', position, { capture: true, passive: true });
};