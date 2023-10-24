import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_0a666047.mjs';
import 'clsx';
import 'html-escaper';

const $$Astro = createAstro();
const prerender = false;
const $$KeystaticAstroPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$KeystaticAstroPage;
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/sites/website/node_modules/@keystatic/astro/internal/keystatic-page", "client:component-export": "Keystatic" })}`;
}, "C:/sites/website/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);

const $$file = "C:/sites/website/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
const $$url = undefined;

export { $$KeystaticAstroPage as default, $$file as file, prerender, $$url as url };
