import { marked } from 'marked';
import { load } from 'cheerio';

const plain = value => load(marked.parseInline(value)).text().trim();

export function extractEquipment(markdown) {
  const entries = [];
  let active = false;
  let page = 0;
  let tier = 1;
  let category = 'Primary weapon';
  let source = 'Core';
  let previousHeaders = [];
  let looseLoot = null;
  for (const token of marked.lexer(markdown)) {
    if (token.type === 'html') {
      const marker = token.text.match(/<!-- page (\d+) -->/);
      if (marker) page = Number(marker[1]);
    }
    if (token.type === 'heading') {
      const heading = plain(token.text);
      if ((heading === 'Equipment' && token.depth === 2) || heading === 'Chapter Two: Equipment & Loot') active = true;
      else if (active && token.depth <= 2 && !['Weapons', 'Combat Wheelchair', 'Armor', 'Loot', 'Primary Weapon Tables', 'Secondary Weapon Tables', 'Armor Tables', 'Items', 'Consumables'].includes(heading)) break;
      if (!active) continue;
      const tierMatch = heading.match(/Tier ([1-4])/);
      if (tierMatch) tier = Number(tierMatch[1]);
      if (/Primary Weapon/.test(heading)) category = 'Primary weapon';
      if (/Secondary Weapon/.test(heading)) category = 'Secondary weapon';
      if (/Wheelchair/.test(heading)) category = 'Combat wheelchair';
      if (/^Armor/.test(heading)) category = 'Armor';
      if (/^(Core Set |Additional )?Items$/.test(heading)) category = 'Item';
      if (/^(Core Set |Additional )?Consumables$/.test(heading)) category = 'Consumable';
      if (/Core Set/.test(heading)) source = 'Core';
      if (/Additional/.test(heading)) source = 'Hope & Fear';
    }
    if (active && token.type === 'paragraph' && ['Item', 'Consumable'].includes(category)) {
      const text = plain(token.text);
      if (/^\d{1,2}$/.test(text)) looseLoot = { roll: Number(text) };
      else if (looseLoot && !looseLoot.name) looseLoot.name = text;
      else if (looseLoot) {
        entries.push({ name: looseLoot.name, category, tier: null, source, page, roll: looseLoot.roll, feature: text });
        looseLoot = null;
      }
    }
    if (!active || token.type !== 'table') continue;
    let headers = token.header.map(cell => plain(cell.text));
    if (headers.every(header => !header) && headers.length === previousHeaders.length) headers = previousHeaders;
    else previousHeaders = headers;
    if (!headers.includes('Name') && !headers.includes('Loot')) continue;
    for (const row of token.rows) {
      const cells = Object.fromEntries(headers.map((header, index) => [header, plain(row[index].text)]));
      if (!cells.Damage && !cells['Base Thresholds'] && !cells.Loot) continue;
      const entry = { name: cells.Name || cells.Loot, category, tier: cells.Loot ? null : Number(cells.Tier || tier), source, page };
      if (cells.Damage) Object.assign(entry, { trait: cells.Trait, range: cells.Range, damage: cells.Damage, burden: cells.Burden, feature: cells.Feature });
      if (cells['Base Thresholds']) {
        const [major, severe] = cells['Base Thresholds'].split('/').map(Number);
        Object.assign(entry, { major, severe, score: Number(cells['Base Score']), feature: cells.Feature });
      }
      if (cells.Loot) Object.assign(entry, { roll: Number(cells.Roll), feature: cells.Description });
      entries.push(entry);
    }
  }
  return entries;
}