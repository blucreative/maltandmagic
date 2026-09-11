(() => {
  function resolveDamage({ damage, major, severe, armor = false, direct = false, massive = false }) {
    if (![damage, major, severe].every(Number.isInteger) || damage < 0 || major < 1 || severe <= major) {
      throw new RangeError('Use nonnegative damage and positive thresholds with Severe above Major.');
    }
    const base = damage === 0 ? 0 : massive && damage >= severe * 2 ? 4 : damage >= severe ? 3 : damage >= major ? 2 : 1;
    const armorUsed = armor && !direct && base > 0;
    return { hp: Math.max(0, base - Number(armorUsed)), armorUsed, severity: ['None', 'Minor', 'Major', 'Severe', 'Massive'][base] };
  }

  globalThis.DaggerheartRules = { resolveDamage };
})();