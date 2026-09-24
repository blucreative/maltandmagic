import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { validatePack, EXPECTED_FILES } from '../model.mjs';

const privateRoot = new URL('../.private/', import.meta.url);
const pack = validatePack(JSON.parse(await readFile(new URL('campaign-pack.json', privateRoot), 'utf8')));
const normalize = value => value.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const statNames = new Set(pack.statblocks.map(stat => normalize(stat.name)));
const sourceChecks = [];
const unmatchedCreatures = new Map();
const expectedGuides = EXPECTED_FILES.filter(filename => /^\d{2}-/.test(filename));
const missingGuides = expectedGuides.filter(filename => !pack.guides.chapters.some(chapter => chapter.file === filename));
if (missingGuides.length) throw new Error(`Prepared chapter guidance is missing: ${missingGuides.join(', ')}`);
for (const filename of EXPECTED_FILES) {
  const source = await readFile(new URL(filename, privateRoot), 'utf8');
  const document = pack.documents.find(item => item.filename === filename);
  if (!document || source !== document.markdown) throw new Error(`Source preservation check failed: ${filename}`);
  sourceChecks.push({
    filename,
    characters: source.length,
    sha256: createHash('sha256').update(source).digest('hex'),
    sections: document.sections.length,
    preservedExactly: true
  });
}
const chapters = pack.guides.chapters.map(chapter => {
  for (const scene of chapter.scenes) {
    for (const encounter of scene.encounters) {
      for (const creature of encounter.creatures) {
        if (statNames.has(normalize(creature.name))) continue;
        if (!unmatchedCreatures.has(creature.name)) unmatchedCreatures.set(creature.name, []);
        unmatchedCreatures.get(creature.name).push({ file: chapter.file, heading: scene.heading, encounter: encounter.name, note: creature.note });
      }
    }
  }
  return {
    file: chapter.file,
    scenes: chapter.scenes.length,
    encounters: chapter.scenes.reduce((count, scene) => count + scene.encounters.length, 0),
    sourceOnlyKeyedAreas: pack.documents.find(document => document.filename === chapter.file).sections
      .filter(section => /^[A-Z]{1,3}\d{1,3}[.:]/.test(section.heading) && !chapter.scenes.some(scene => scene.heading === section.heading))
      .map(section => section.heading)
  };
});
const report = {
  format: 'eve-of-ruin-readiness-report',
  version: 1,
  createdAt: new Date().toISOString(),
  sourceChecks,
  chapters,
  statblocks: pack.statblocks.length,
  sanctumVisits: pack.guides.sanctum.length,
  unmatchedCreatureReferences: [...unmatchedCreatures].map(([name, locations]) => ({ name, locations })),
  dependencyChecklist: pack.guides.gaps,
  warnings: pack.coverage.warnings,
  boundaries: [
    'All original source text is preserved exactly; guidance is supplementary.',
    'Unmatched names can include named variants. Verify the source-designated base block and modifications; do not substitute silently.',
    'Map attachment coverage is reported separately in image-packs/manifest.json.',
    'Source completeness does not imply all referenced core-book mechanics are available.'
  ]
};
await writeFile(new URL('readiness-report.json', privateRoot), `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 });
console.log(JSON.stringify({
  preservedDocuments: sourceChecks.length,
  sourceCharacters: sourceChecks.reduce((sum, check) => sum + check.characters, 0),
  guidedChapters: chapters.length,
  scenes: chapters.reduce((sum, chapter) => sum + chapter.scenes, 0),
  encounterPresets: chapters.reduce((sum, chapter) => sum + chapter.encounters, 0),
  statblocks: report.statblocks,
  sanctumVisits: report.sanctumVisits,
  unmatchedCreatureNames: unmatchedCreatures.size,
  sourceOnlyKeyedAreas: chapters.reduce((sum, chapter) => sum + chapter.sourceOnlyKeyedAreas.length, 0),
  dependencyChecklistEntries: report.dependencyChecklist.length
}, null, 2));
