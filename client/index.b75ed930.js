import{S as e,i as t,s as a,a as r,e as s,q as o,d as n,c,b as l,f as i,g as f,t as u,h as p,r as d,l as h,j as g,k as m,m as v,n as j,o as $,p as D,u as b,v as w,w as y,x as T,y as O,z as x,A as G}from"./client.bef884ca.js";import"./Group.892388c3.js";import"./Header.d70e966e.js";import"./JavascriptHeap.5dfd25fe.js";import"./GenericSection.e8869078.js";import R from"./Report.9de3c2e6.js";function k(e){let t,a;return{c(){t=s("h1"),a=D("Drag your report"),this.h()},l(e){t=l(e,"H1",{class:!0});var r=i(t);a=b(r,"Drag your report"),r.forEach(n),this.h()},h(){f(t,"class","svelte-fkfzbu")},m(e,r){p(e,t,r),w(t,a)},p:y,i:y,o:y,d(e){e&&n(t)}}}function z(e){let t;const a=new R({props:{report:e[2]}});return{c(){T(a.$$.fragment)},l(e){O(a.$$.fragment,e)},m(e,r){x(a,e,r),t=!0},p(e,t){const r={};4&t&&(r.report=e[2]),a.$set(r)},i(e){t||(v(a.$$.fragment,e),t=!0)},o(e){g(a.$$.fragment,e),t=!1},d(e){G(a,e)}}}function A(e){let t,a,$,D,b,w;const y=[z,k],T=[];function O(e,t){return e[2]?0:1}return $=O(e),D=T[$]=y[$](e),{c(){t=r(),a=s("div"),D.c(),this.h()},l(e){o('[data-svelte="svelte-9ia2pc"]',document.head).forEach(n),t=c(e),a=l(e,"DIV",{class:!0,ondragover:!0});var r=i(a);D.l(r),r.forEach(n),this.h()},h(){document.title="Report Viewer",f(a,"class","main svelte-fkfzbu"),f(a,"ondragover","return false"),u(a,"over",e[1])},m(r,s,o){p(r,t,s),p(r,a,s),T[$].m(a,null),e[7](a),b=!0,o&&d(w),w=[h(a,"dragenter",e[3]),h(a,"dragleave",e[4]),h(a,"drop",e[5])]},p(e,[t]){let r=$;$=O(e),$===r?T[$].p(e,t):(j(),g(T[r],1,1,()=>{T[r]=null}),m(),D=T[$],D||(D=T[$]=y[$](e),D.c()),v(D,1),D.m(a,null)),2&t&&u(a,"over",e[1])},i(e){b||(v(D),b=!0)},o(e){g(D),b=!1},d(r){r&&n(t),r&&n(a),T[$].d(),e[7](null),d(w)}}}function E(e,t,a){let r,s,o=!1;async function n(){if(!globalThis.fetch)return;const e=await globalThis.fetch("/report.json");try{a(2,s=await e.json())}catch(e){console.log("failed to load report",e)}}return n(),[r,o,s,function(){event.target===r&&(console.log("TODO DRAG enter",event.target),a(1,o=!0))},function(e){e.target===r&&console.log("TODO DRAG Leave",e.target,e.currentTarget)},async function(e){console.log("drop"),e.preventDefault(),a(1,o=!1);const t=await e.dataTransfer.files[0].text();a(2,s=JSON.parse(t))},n,function(e){$[e?"unshift":"push"](()=>{a(0,r=e)})}]}export default class extends e{constructor(e){super(),t(this,e,E,A,a,{})}}
