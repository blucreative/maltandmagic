(function () {
  'use strict';

  const STORAGE_KEY = 'maltandmagic:dnd:color-mode';
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

  function readSavedMode() {
    try {
      const mode = localStorage.getItem(STORAGE_KEY);
      return mode === 'light' || mode === 'dark' ? mode : null;
    } catch (error) {
      console.warn('Unable to read the saved character-sheet theme.', error);
      return null;
    }
  }

  function saveMode(mode) {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (error) {
      console.warn('Unable to save the character-sheet theme.', error);
    }
  }

  function updateButton(mode) {
    const button = document.getElementById('sheetThemeToggle');
    if (!button) return;

    const nextMode = mode === 'dark' ? 'light' : 'dark';
    button.setAttribute('aria-label', `Switch to ${nextMode} mode`);
    button.setAttribute('title', `Switch to ${nextMode} mode`);
    button.setAttribute('aria-pressed', String(mode === 'dark'));
    button.querySelector('.sheet-theme-toggle__icon').textContent = mode === 'dark' ? '☀' : '☾';
    button.querySelector('.sheet-theme-toggle__label').textContent = `${nextMode[0].toUpperCase()}${nextMode.slice(1)} mode`;
  }

  function applyMode(mode, persist) {
    root.dataset.colorMode = mode;
    root.style.colorScheme = mode;
    updateButton(mode);
    if (persist) saveMode(mode);
  }

  const savedMode = readSavedMode();
  applyMode(savedMode || (systemTheme.matches ? 'dark' : 'light'), false);

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.id = 'sheetThemeToggle';
    button.className = 'sheet-theme-toggle';
    button.type = 'button';
    button.innerHTML = '<span class="sheet-theme-toggle__icon" aria-hidden="true"></span><span class="sheet-theme-toggle__label"></span>';
    button.addEventListener('click', () => {
      applyMode(root.dataset.colorMode === 'dark' ? 'light' : 'dark', true);
    });
    document.body.appendChild(button);
    updateButton(root.dataset.colorMode);
  });

  systemTheme.addEventListener('change', event => {
    if (!readSavedMode()) applyMode(event.matches ? 'dark' : 'light', false);
  });
})();
