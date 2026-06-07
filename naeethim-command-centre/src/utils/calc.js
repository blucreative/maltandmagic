// ============================================================================
// Pure derivation helpers. Nothing here mutates state — App.jsx owns the
// character object, and these functions compute display values (modifiers,
// skill totals, live damage bonuses) from that object plus the active-effects
// list, so the UI always reflects the current truth in one place.
// ============================================================================

export const abilityMod = (score) => Math.floor((score - 10) / 2)

export const fmtMod = (n) => (n >= 0 ? `+${n}` : `${n}`)

export const abilityModFromChar = (character, abilityKey) =>
  abilityMod(character.abilities[abilityKey].score)

// Collects every active "bonus" entry from any feature whose toggle is
// currently switched on, or whose tracked-use is "active" for the moment.
export function collectActiveBonuses(character, activeToggles) {
  const bonuses = []
  for (const feature of character.features) {
    if (feature.toggle && activeToggles[feature.toggle.id]) {
      for (const b of feature.toggle.effect.bonuses) {
        bonuses.push({ ...b, featureId: feature.id, featureName: feature.name, effectName: feature.toggle.effect.name })
      }
    }
  }
  return bonuses
}

// Sum of flat damage bonuses that apply to Strength-based weapon attacks
// (e.g. Rage Damage) — used to recompute weapon damage live.
export function strAttackDamageBonus(activeBonuses) {
  return activeBonuses
    .filter((b) => b.type === 'damage' && b.appliesTo === 'str-attacks')
    .reduce((sum, b) => sum + b.amount, 0)
}

export function hasAdvantageOn(activeBonuses, matchFn) {
  return activeBonuses.some((b) => b.type === 'advantage' && matchFn(b))
}

// Computes a skill's total bonus, honoring Primal Knowledge's "use STR while
// Raging" swap for the listed skills.
export function skillBonus(character, skill, { isRaging }) {
  const useStrInstead =
    isRaging &&
    character.primalKnowledgeSkills?.includes(skill.key) &&
    abilityModFromChar(character, 'str') > abilityModFromChar(character, skill.ability)

  const ability = useStrInstead ? 'str' : skill.ability
  const mod = abilityModFromChar(character, ability)
  const total = mod + (skill.proficient ? character.proficiencyBonus : 0)
  return { total, ability, swapped: useStrInstead }
}

export function saveBonus(character, abilityKey) {
  const mod = abilityModFromChar(character, abilityKey)
  return mod + (character.saveProficiencies[abilityKey] ? character.proficiencyBonus : 0)
}

// Weapon "to hit" and damage string, recomputed with any active Rage Damage
// (or other Strength-attack bonuses) folded in live.
export function weaponLine(character, weapon, activeBonuses) {
  const mod = abilityModFromChar(character, weapon.hitAbility)
  const toHit = mod + character.proficiencyBonus
  const rageBonus = weapon.rageEligible ? strAttackDamageBonus(activeBonuses) : 0

  let dmgBase
  if (weapon.baseDamageDice) {
    dmgBase = `${weapon.baseDamageDice}${fmtMod(mod)}`
  } else {
    dmgBase = `${weapon.flatDamage + mod}`
  }

  const totalRider = rageBonus ? ` ${fmtMod(rageBonus)} (Rage)` : ''
  return {
    toHit: fmtMod(toHit),
    damage: `${dmgBase}${totalRider} ${weapon.damageType}`,
    rageBonus,
  }
}

export function passiveScore(character, skillKey) {
  const skill = character.skills.find((s) => s.key === skillKey)
  if (!skill) return 10
  const { total } = skillBonus(character, skill, { isRaging: false })
  return 10 + total
}
