import { Marked } from './vendor/marked.esm.js';
import { assetMatches } from './storage.mjs';

export function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

export function renderMarkdown(markdown, assets = []) {
  const parser = new Marked({
    gfm: true,
    breaks: false,
    renderer: {
      html({ text }) {
        return escapeHTML(text);
      },
      link({ href, tokens }) {
        const label = this.parser.parseInline(tokens);
        const asset = assets.find(item => assetMatches(item, href));
        if (asset) return `<button type="button" class="inline-link" data-asset="${escapeHTML(asset.id)}">${label} <span class="tag">Local image</span></button>`;
        return `<span class="source-reference" title="${escapeHTML(href)}">${label} <small>[reference not bundled]</small></span>`;
      },
      image({ href, text }) {
        const asset = assets.find(item => assetMatches(item, href));
        if (asset) return `<figure><img src="${escapeHTML(asset.data)}" alt="${escapeHTML(text)}"><figcaption>${escapeHTML(text)}</figcaption></figure>`;
        return `<p class="missing-media">Image not supplied: ${escapeHTML(text || href)}. Import it in Library &amp; coverage.</p>`;
      }
    }
  });
  return parser.parse(markdown);
}
