(function () {
  function textOf(node) {
    return (node && node.textContent ? node.textContent : '').replace(/\s+/g, ' ').trim();
  }

  function candidateFromNearby(el) {
    const ariaLabel = el.getAttribute('aria-label');
    if (ariaLabel && ariaLabel.trim()) return ariaLabel.trim();

    const placeholder = el.getAttribute('placeholder');
    if (placeholder && placeholder.trim()) return placeholder.trim();

    const title = el.getAttribute('title');
    if (title && title.trim()) return title.trim();

    const id = el.getAttribute('id');
    if (id) {
      const label = document.querySelector('label[for="' + id + '"]');
      const lt = textOf(label);
      if (lt) return lt;
    }

    const wrappingLabel = el.closest('label');
    const wlt = textOf(wrappingLabel);
    if (wlt) return wlt;

    const parent = el.parentElement;
    if (parent) {
      const prev = parent.previousElementSibling;
      const pt = textOf(prev);
      if (pt) return pt;

      const parentText = textOf(parent.querySelector('.label, .meta-label, .panel-title, .skill-name, .item-name'));
      if (parentText) return parentText;
    }

    const named = el.getAttribute('name') || id || el.getAttribute('type') || el.tagName.toLowerCase();
    return named.replace(/[-_]+/g, ' ');
  }

  function applyInputLabels() {
    const controls = document.querySelectorAll('input, textarea, select');
    controls.forEach(function (el) {
      const type = (el.getAttribute('type') || '').toLowerCase();
      if (type === 'hidden' || type === 'submit' || type === 'button' || type === 'reset' || type === 'image') {
        return;
      }

      if (el.hasAttribute('aria-label') || el.hasAttribute('aria-labelledby')) {
        return;
      }

      const label = candidateFromNearby(el);
      if (label) {
        el.setAttribute('aria-label', label);
      }
    });
  }

  function applyIconButtonLabels() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function (btn) {
      if (btn.hasAttribute('aria-label') || btn.hasAttribute('aria-labelledby')) return;
      const txt = textOf(btn);
      if (txt) return;

      const title = btn.getAttribute('title');
      if (title && title.trim()) {
        btn.setAttribute('aria-label', title.trim());
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyInputLabels();
      applyIconButtonLabels();
    });
  } else {
    applyInputLabels();
    applyIconButtonLabels();
  }
})();
