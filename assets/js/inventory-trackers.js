(function () {
  'use strict';

  function sanitizeQuantity(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) ? Math.max(0, parsed) : fallback;
  }

  function createQuantityControl(options) {
    const settings = options || {};
    const label = settings.label || 'Item';
    let value = sanitizeQuantity(settings.value, 0);

    const control = document.createElement('div');
    control.className = 'quantity-control';

    const decreaseButton = document.createElement('button');
    decreaseButton.type = 'button';
    decreaseButton.className = 'quantity-btn';
    decreaseButton.textContent = '−';
    decreaseButton.setAttribute('aria-label', `Use one ${label}`);

    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'quantity-input';
    input.min = '0';
    input.step = '1';
    input.inputMode = 'numeric';
    input.value = String(value);
    input.setAttribute('aria-label', `${label} quantity`);

    const increaseButton = document.createElement('button');
    increaseButton.type = 'button';
    increaseButton.className = 'quantity-btn';
    increaseButton.textContent = '+';
    increaseButton.setAttribute('aria-label', `Add one ${label}`);

    function commit(nextValue) {
      value = sanitizeQuantity(nextValue, value);
      input.value = String(value);
      control.classList.toggle('is-empty', value === 0);
      if (typeof settings.onChange === 'function') settings.onChange(value);
    }

    decreaseButton.addEventListener('click', event => {
      event.stopPropagation();
      commit(value - 1);
    });
    increaseButton.addEventListener('click', event => {
      event.stopPropagation();
      commit(value + 1);
    });
    input.addEventListener('click', event => event.stopPropagation());
    input.addEventListener('change', event => {
      event.stopPropagation();
      commit(input.value);
    });

    control.append(decreaseButton, input, increaseButton);
    control.classList.toggle('is-empty', value === 0);
    return control;
  }

  function initializeFixedTrackers(state, save) {
    if (!state.consumables || typeof state.consumables !== 'object') state.consumables = {};

    document.querySelectorAll('[data-consumable-key]').forEach(container => {
      const key = container.dataset.consumableKey;
      const defaultValue = sanitizeQuantity(container.dataset.consumableDefault, 0);
      const currentValue = sanitizeQuantity(state.consumables[key], defaultValue);
      state.consumables[key] = currentValue;
      container.replaceChildren(createQuantityControl({
        label: container.dataset.consumableLabel || key,
        value: currentValue,
        onChange(nextValue) {
          state.consumables[key] = nextValue;
          if (typeof save === 'function') save();
        },
      }));
    });
  }

  window.InventoryTrackers = {
    createQuantityControl,
    initializeFixedTrackers,
    sanitizeQuantity,
  };
}());