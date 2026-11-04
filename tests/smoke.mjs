// Node.js built-in smoke test; no dependencies to install.
// Parses inline JavaScript and checks release invariants, not WebGL correctness.
import { readFileSync } from 'node:fs';
import { strict as assert } from 'node:assert';
import { resolve } from 'node:path';

const html = readFileSync(resolve(import.meta.dirname, '..', 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)];
assert.ok(scripts.length > 0, 'No inline scripts found');
for (const m of scripts) {
  if (m[1].trim()) new Function(m[1]);
}
for (const id of [
  'earth', 'saturn', 'sun', 'halley', 'voyager1',
  'alnitak', 'alnilam', 'mintaka',
]) {
  assert.ok(html.includes(`id: '${id}'`) || html.includes(`"${id}"`), `Missing body ${id}`);
}
for (const id of ['toggle-physics-btn', 'toggle-free-view-btn', 'toggle-earth-moon-lab-btn']) {
  assert.ok(html.includes(`id="${id}"`), `Missing control ${id}`);
}
assert.ok(html.includes('GALAXY_IMAGE_DETAILS'), 'Missing image registry');
assert.ok(html.includes('NASA_EARTH_BMNG_DATA_URI'), 'Missing Earth surface image');
console.log('Static smoke tests passed. Real WebGL and image availability still need browser testing.');

// Validate astronomical image credits/rights in the release source.
const marker = 'const GALAXY_IMAGE_DETAILS = ';
const start = html.indexOf(marker) + marker.length;
assert.ok(start >= marker.length, 'Image registry missing');
const afterStart = html.slice(start);
const end = afterStart.indexOf(';\n');
const registry = JSON.parse(afterStart.slice(0,end));
assert.equal(Object.keys(registry).length, 23, 'Expected 23 original image cards');
for (const [id, item] of Object.entries(registry)) {
 assert.ok(item.source?.startsWith('https://'), 'Source missing for '+id);
 if(item.image) {
  assert.ok(item.credit, 'Credit missing for '+id);
  assert.ok(item.licenseUrl?.startsWith('https://'), 'License URL missing for '+id);
 }
}
for(const id of ['alnitak','alnilam','mintaka'])assert.ok(html.includes('"'+id+'":{'), 'Orion photo metadata missing: '+id);
assert.ok(html.includes('id="galaxy-card-license"'), 'Photo license UI link missing');
assert.ok(html.includes('pia21740/PIA21740.jpg'), 'Incorrect Voyager 1 photo source');
assert.ok(!html.includes('PIA21736.jpg'), 'Voyager 2 photo mislabeled as Voyager 1');
