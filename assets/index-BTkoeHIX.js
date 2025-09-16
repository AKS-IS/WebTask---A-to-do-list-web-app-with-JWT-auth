(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();var a={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l;function p(){if(l)return s;l=1;var d=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function i(n,e,t){var r=null;if(t!==void 0&&(r=""+t),e.key!==void 0&&(r=""+e.key),"key"in e){t={};for(var c in e)c!=="key"&&(t[c]=e[c])}else t=e;return e=t.ref,{$$typeof:d,type:n,key:r,ref:e!==void 0?e:null,props:t}}return s.Fragment=o,s.jsx=i,s.jsxs=i,s}var f;function m(){return f||(f=1,a.exports=p()),a.exports}var u=m();const x=window.location.pathname.startsWith("/WebTask---A-to-do-list-web-app-with-JWT-auth"),h=x?"/WebTask---A-to-do-list-web-app-with-JWT-auth":"/";createRoot(document.getElementById("root")).render(u.jsxs(StrictMode,{children:[u.jsx(BrowserRouter,{basename:h,children:u.jsx(App,{})}),u.jsx(Toaster,{})]}));
