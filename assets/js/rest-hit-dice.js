(function () {
  'use strict';

  function createElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }

  function ensureDialog() {
    let dialog = document.getElementById('restHitDiceDialog');
    if (dialog) return dialog;

    dialog = createElement('dialog', 'rest-dice-dialog');
    dialog.id = 'restHitDiceDialog';
    dialog.setAttribute('aria-labelledby', 'restHitDiceTitle');

    const form = createElement('form', 'rest-dice-form');
    form.noValidate = true;

    const header = createElement('div', 'rest-dice-header');
    const title = createElement('h2', 'rest-dice-title', 'Spend Hit Dice');
    title.id = 'restHitDiceTitle';
    const description = createElement('p', 'rest-dice-description', 'Choose how many dice to spend. Enter a rolled result for any die, or leave it blank to roll automatically.');
    header.append(title, description);

    const pools = createElement('div', 'rest-dice-pools');
    const error = createElement('div', 'rest-dice-error');
    error.setAttribute('role', 'alert');
    error.setAttribute('aria-live', 'polite');

    const actions = createElement('div', 'rest-dice-actions');
    const skipButton = createElement('button', 'rest-dice-button secondary', 'Skip Hit Dice');
    skipButton.type = 'button';
    skipButton.dataset.action = 'skip';
    const submitButton = createElement('button', 'rest-dice-button primary', 'Apply Hit Dice');
    submitButton.type = 'submit';
    actions.append(skipButton, submitButton);

    form.append(header, pools, error, actions);
    dialog.append(form);
    document.body.append(dialog);
    return dialog;
  }

  function renderRollInputs(container, pool, count) {
    container.replaceChildren();
    for (let index = 1; index <= count; index += 1) {
      const row = createElement('label', 'rest-die-roll-row');
      const label = createElement('span', 'rest-die-roll-label', `${pool.label} roll ${index}`);
      const input = createElement('input', 'rest-die-roll-input');
      input.type = 'number';
      input.min = '1';
      input.max = String(pool.size);
      input.step = '1';
      input.inputMode = 'numeric';
      input.placeholder = 'Auto-roll';
      input.dataset.poolType = pool.type;
      input.setAttribute('aria-label', `${pool.label} roll ${index}; leave blank to auto-roll`);
      row.append(label, input);
      container.append(row);
    }
  }

  window.chooseRestHitDice = function chooseRestHitDice(pools) {
    const availablePools = pools.filter(pool => Number.isInteger(pool.available) && pool.available > 0);
    if (availablePools.length === 0) return Promise.resolve([]);

    const dialog = ensureDialog();
    const form = dialog.querySelector('form');
    const poolsContainer = dialog.querySelector('.rest-dice-pools');
    const error = dialog.querySelector('.rest-dice-error');
    const skipButton = dialog.querySelector('[data-action="skip"]');
    poolsContainer.replaceChildren();
    error.textContent = '';

    availablePools.forEach(pool => {
      const fieldset = createElement('fieldset', 'rest-dice-pool');
      const legend = createElement('legend', 'rest-dice-pool-title', `${pool.label} · ${pool.available} available`);
      const quantityRow = createElement('label', 'rest-dice-quantity-row');
      const quantityLabel = createElement('span', 'rest-dice-quantity-label', 'Dice to spend');
      const quantity = createElement('input', 'rest-dice-quantity');
      quantity.type = 'number';
      quantity.min = '0';
      quantity.max = String(pool.available);
      quantity.step = '1';
      quantity.value = '0';
      quantity.inputMode = 'numeric';
      quantity.dataset.poolType = pool.type;
      quantity.setAttribute('aria-label', `${pool.label} dice to spend, maximum ${pool.available}`);
      const rolls = createElement('div', 'rest-die-rolls');
      quantity.addEventListener('input', () => {
        const count = Math.min(pool.available, Math.max(0, Number.parseInt(quantity.value, 10) || 0));
        renderRollInputs(rolls, pool, count);
        error.textContent = '';
      });
      quantityRow.append(quantityLabel, quantity);
      fieldset.append(legend, quantityRow, rolls);
      poolsContainer.append(fieldset);
    });

    return new Promise(resolve => {
      function finish(result) {
        form.removeEventListener('submit', handleSubmit);
        skipButton.removeEventListener('click', handleSkip);
        dialog.removeEventListener('cancel', handleCancel);
        if (dialog.open) dialog.close();
        resolve(result);
      }

      function handleSubmit(event) {
        event.preventDefault();
        const results = [];

        for (const pool of availablePools) {
          const quantity = form.querySelector(`.rest-dice-quantity[data-pool-type="${pool.type}"]`);
          const count = Number.parseInt(quantity.value, 10);
          if (!Number.isInteger(count) || count < 0 || count > pool.available) {
            error.textContent = `Choose between 0 and ${pool.available} ${pool.label} dice.`;
            quantity.focus();
            return;
          }

          const rollInputs = [...form.querySelectorAll(`.rest-die-roll-input[data-pool-type="${pool.type}"]`)];
          for (const input of rollInputs) {
            const value = input.value.trim();
            if (value === '') {
              results.push({ type: pool.type, size: pool.size, label: pool.label, roll: null });
              continue;
            }
            const roll = Number(value);
            if (!Number.isInteger(roll) || roll < 1 || roll > pool.size) {
              error.textContent = `${pool.label} results must be whole numbers from 1 to ${pool.size}.`;
              input.focus();
              return;
            }
            results.push({ type: pool.type, size: pool.size, label: pool.label, roll });
          }
        }

        finish(results);
      }

      function handleSkip() {
        finish([]);
      }

      function handleCancel(event) {
        event.preventDefault();
        finish([]);
      }

      form.addEventListener('submit', handleSubmit);
      skipButton.addEventListener('click', handleSkip);
      dialog.addEventListener('cancel', handleCancel);
      dialog.showModal();
      form.querySelector('.rest-dice-quantity')?.focus();
    });
  };
}());