import test from 'node:test';
import assert from 'node:assert/strict';
import { renderMarkdown } from '../markdown.mjs';

test('renders source tables, blockquotes, headings, and emphasis', () => {
  const html = renderMarkdown('# Source\n\n> A scene.\n\n| Name | Value |\n| --- | --- |\n| **HP** | 20 |\n\n*Italic*');
  assert.match(html, /<h1>Source<\/h1>/);
  assert.match(html, /<blockquote>/);
  assert.match(html, /<table>/);
  assert.match(html, /<strong>HP<\/strong>/);
  assert.match(html, /<em>Italic<\/em>/);
});

test('raw HTML and executable links cannot become active markup', () => {
  const html = renderMarkdown('<script>alert(1)</script>\n\n[Bad](javascript:alert%281%29)\n\n<img src=x onerror=alert(2)>\n\n![Remote](https://example.invalid/track.png)');
  assert.doesNotMatch(html, /<script|<img|href=|onclick=|<iframe/);
  assert.match(html, /&lt;script&gt;/);
  assert.match(html, /reference not bundled/);
  assert.match(html, /Image not supplied/);
});

test('source assets render only after explicitly attaching an imported local raster', () => {
  const assets = [{ id: 'map-1', reference: 'https://example.invalid/map.png', references: ['https://example.invalid/renamed-map.png'], data: 'data:image/png;base64,aGVsbG8=' }];
  const html = renderMarkdown('[Map](https://example.invalid/map.png)\n\n![Map](https://example.invalid/map.png)', assets);
  assert.match(html, /data-asset="map-1"/);
  assert.match(html, /src="data:image\/png;base64,aGVsbG8="/);
  assert.doesNotMatch(html, /src="https:|href=/);
  assert.match(renderMarkdown('[Map alias](https://example.invalid/renamed-map.png)', assets), /data-asset="map-1"/);
});
