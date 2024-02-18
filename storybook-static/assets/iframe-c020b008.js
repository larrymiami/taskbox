import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",d=function(_,i){return new URL(_,i).href},m={},r=function(i,s,c){if(!s||s.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=d(e,c),e in m)return;m[e]=!0;const o=e.endsWith(".css"),O=o?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!o||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${O}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":E,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((l,a)=>{n.addEventListener("load",l),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const f={"./src/components/InboxScreen.stories.jsx":async()=>r(()=>import("./InboxScreen.stories-f49abdb7.js"),["./InboxScreen.stories-f49abdb7.js","./Task.stories-cd71f1f7.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-8d47fad6.js","./TaskList.stories-0a656b25.js","./index-11538ead.js"],import.meta.url),"./src/components/Task.stories.jsx":async()=>r(()=>import("./Task.stories-cd71f1f7.js").then(_=>_.b),["./Task.stories-cd71f1f7.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-8d47fad6.js"],import.meta.url),"./src/components/TaskList.stories.jsx":async()=>r(()=>import("./TaskList.stories-0a656b25.js").then(_=>_.b),["./TaskList.stories-0a656b25.js","./Task.stories-cd71f1f7.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-8d47fad6.js"],import.meta.url)};async function T(_){return f[_]()}const{composeConfigs:P,PreviewWeb:w,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([r(()=>import("./entry-preview-fb6629d6.js"),["./entry-preview-fb6629d6.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./react-18-236157c6.js"],import.meta.url),r(()=>import("./entry-preview-docs-24dc1f7d.js"),["./entry-preview-docs-24dc1f7d.js","./_getPrototype-1e53b583.js","./_commonjsHelpers-de833af9.js","./index-8d47fad6.js","./index-356e4a49.js","./index-76fb7be0.js"],import.meta.url),r(()=>import("./preview-73104b77.js"),["./preview-73104b77.js","./index-11d98b33.js"],import.meta.url),r(()=>import("./preview-30cf9611.js"),[],import.meta.url),r(()=>import("./preview-d01b88e8.js"),["./preview-d01b88e8.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-30b54f76.js"),["./preview-30b54f76.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-c56bf6ac.js"),[],import.meta.url),r(()=>import("./preview-da31036b.js"),["./preview-da31036b.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-0ef86afd.js"),[],import.meta.url),r(()=>import("./preview-24993a6f.js"),["./preview-24993a6f.js","./_commonjsHelpers-de833af9.js"],import.meta.url),r(()=>import("./preview-303ac93f.js"),[],import.meta.url),r(()=>import("./preview-7103ba5d.js"),["./preview-7103ba5d.js","./_commonjsHelpers-de833af9.js","./_commonjs-dynamic-modules-302442b1.js","./index-11538ead.js","./index-03bbf7d1.js","./preview-4f244d89.css"],import.meta.url)]);return P(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:T,getProjectAnnotations:I});export{r as _};
