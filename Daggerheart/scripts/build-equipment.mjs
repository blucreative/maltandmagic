import { readFileSync, writeFileSync } from 'node:fs';
import { extractEquipment } from './equipment-source.mjs';

const readBook = name => readFileSync(new URL(`../.private/Daggerheart ${name}.md`, import.meta.url), 'utf8');
const key = entry => `${entry.category}:${entry.tier}:${entry.name}`;
const expansion = new Map(extractEquipment(readBook('Hope and Fear')).map(entry => [key(entry), entry]));
const equipment = extractEquipment(readBook('SRD 2.0')).map(entry => {
  const expanded = expansion.get(key(entry));
  return { ...entry, rulesSource: 'SRD 2.0', source: expanded ? 'Hope & Fear' : 'Core', ...(expanded ? { bookPage: expanded.page } : {}) };
});
if (equipment.length !== 624 || new Set(equipment.map(key)).size !== equipment.length) throw new Error('Equipment coverage changed; review the source tables before rebuilding.');
for (const entry of expansion.values()) {
  if (!equipment.some(candidate => key(candidate) === key(entry))) throw new Error(`Missing expansion option: ${entry.name}`);
}
const core = extractEquipment(readBook('Core Rulebook'));
const coreOnly = core.filter(entry => !equipment.some(candidate => candidate.name === entry.name));
if (coreOnly.length !== 9) throw new Error('Core-only equipment coverage changed; review source differences.');
equipment.push(...coreOnly.map(entry => ({ ...entry, rulesSource: 'Core Rulebook' })));
const target = new URL('../../assets/js/daggerheart-equipment.js', import.meta.url);
writeFileSync(target, `globalThis.DaggerheartEquipment = ${JSON.stringify(equipment, null, 2)};\n`);
console.log(`Built ${equipment.length} equipment entries (${equipment.filter(entry => entry.source === 'Hope & Fear').length} Hope & Fear).`);