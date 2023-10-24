import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_0b373e7c.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_0a666047.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/keystatic-api_b789cb16.mjs');
const _page1  = () => import('./chunks/keystatic-astro-page_e2944604.mjs');
const _page2  = () => import('./chunks/generic_779907a5.mjs');
const _page3  = () => import('./chunks/index_92c39906.mjs');
const _page4  = () => import('./chunks/_slug__3a5ccf4f.mjs');const pageMap = new Map([["../../node_modules/@keystatic/astro/internal/keystatic-api.js", _page0],["../../node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page1],["../../node_modules/astro/dist/assets/endpoint/generic.js", _page2],["src/pages/index.astro", _page3],["src/pages/posts/[slug].astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
