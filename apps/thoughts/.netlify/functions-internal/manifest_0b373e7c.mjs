import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_0a666047.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"../../node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"../../node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/sites/website/apps/thoughts/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/sites/website/apps/thoughts/src/pages/posts/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/sites/website/node_modules/@astrojs/markdoc/components/Renderer.astro",{"propagation":"in-tree","containsHead":false}],["C:/sites/website/node_modules/@astrojs/markdoc/components/index.ts",{"propagation":"in-tree","containsHead":false}],["C:/sites/website/apps/thoughts/src/content/posts/first-post.mdoc",{"propagation":"in-tree","containsHead":false}],["C:/sites/website/apps/thoughts/src/content/posts/first-post.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/../../node_modules/@keystatic/astro/internal/keystatic-api.js":"chunks/pages/keystatic-api_f2da567e.mjs","/../../node_modules/@keystatic/astro/internal/keystatic-astro-page.astro":"chunks/pages/keystatic-astro-page_5d6d6c05.mjs","\u0000@astrojs-manifest":"manifest_0b373e7c.mjs","C:/sites/website/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3769332a.mjs","\u0000@astro-page:../../node_modules/@keystatic/astro/internal/keystatic-api@_@js":"chunks/keystatic-api_b789cb16.mjs","\u0000@astro-page:../../node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"chunks/keystatic-astro-page_e2944604.mjs","\u0000@astro-page:../../node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_779907a5.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_92c39906.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"chunks/_slug__3a5ccf4f.mjs","C:/sites/website/apps/thoughts/src/content/posts/first-post.mdoc?astroContentCollectionEntry=true":"chunks/first-post_9fc053ea.mjs","C:/sites/website/apps/thoughts/src/content/posts/first-post.mdoc?astroPropagatedAssets":"chunks/first-post_a74fbacd.mjs","C:/sites/website/apps/thoughts/src/content/posts/first-post.mdoc":"chunks/first-post_cf36da73.mjs","@astrojs/react/client.js":"_astro/client.433b9e19.js","C:/sites/website/node_modules/@keystatic/astro/internal/keystatic-page":"_astro/keystatic-page.29267148.js","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg","/_astro/client.433b9e19.js","/_astro/index.e4caf7e0.js","/_astro/keystatic-page.29267148.js","/index.html"]});

export { manifest };
