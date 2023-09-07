import{a as x}from"/build/_shared/chunk-GDLBX7ER.js";import{b as y,c as O}from"/build/_shared/chunk-Q3IECNXJ.js";var q=y(j=>{"use strict";var d=x();function L(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var P=typeof Object.is=="function"?Object.is:L,R=d.useState,z=d.useEffect,A=d.useLayoutEffect,C=d.useDebugValue;function F(e,t){var r=t(),o=R({inst:{value:r,getSnapshot:t}}),n=o[0].inst,u=o[1];return A(function(){n.value=r,n.getSnapshot=t,E(n)&&u({inst:n})},[e,r,t]),z(function(){return E(n)&&u({inst:n}),e(function(){E(n)&&u({inst:n})})},[e]),C(r),r}function E(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!P(e,r)}catch{return!0}}function G(e,t){return t()}var H=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?G:F;j.useSyncExternalStore=d.useSyncExternalStore!==void 0?d.useSyncExternalStore:H});var N=y((ue,V)=>{"use strict";V.exports=q()});var b=y(D=>{"use strict";var m=x(),J=N();function K(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Q=typeof Object.is=="function"?Object.is:K,T=J.useSyncExternalStore,U=m.useRef,X=m.useEffect,Y=m.useMemo,Z=m.useDebugValue;D.useSyncExternalStoreWithSelector=function(e,t,r,o,n){var u=U(null);if(u.current===null){var f={hasValue:!1,value:null};u.current=f}else f=u.current;u=Y(function(){function s(i){if(!v){if(v=!0,c=i,i=o(i),n!==void 0&&f.hasValue){var p=f.value;if(n(p,i))return a=p}return a=i}if(p=a,Q(c,i))return p;var h=o(i);return n!==void 0&&n(p,h)?p:(c=i,a=h)}var v=!1,c,a,S=r===void 0?null:r;return[function(){return s(t())},S===null?void 0:function(){return s(S())}]},[t,r,o,n]);var l=T(e,u[0],u[1]);return X(function(){f.hasValue=!0,f.value=l},[l]),Z(l),l}});var I=y((ce,_)=>{"use strict";_.exports=b()});var w=e=>{let t,r=new Set,o=(s,v)=>{let c=typeof s=="function"?s(t):s;if(!Object.is(c,t)){let a=t;t=v??typeof c!="object"?c:Object.assign({},t,c),r.forEach(S=>S(t,a))}},n=()=>t,l={setState:o,getState:n,subscribe:s=>(r.add(s),()=>r.delete(s)),destroy:()=>r.clear()};return t=e(o,n,l),l},g=e=>e?w(e):w;var M=O(x(),1),W=O(I(),1),{useSyncExternalStoreWithSelector:$}=W.default;function ee(e,t=e.getState,r){let o=$(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return(0,M.useDebugValue)(o),o}var k=e=>{let t=typeof e=="function"?g(e):e,r=(o,n)=>ee(t,o,n);return Object.assign(r,t),r},B=e=>e?k(e):k;var te=B(e=>({isOpen:!1,open:()=>e(t=>({isOpen:!0})),close:()=>e(t=>({isOpen:!1})),toggle:()=>e(t=>({isOpen:!t.isOpen}))})),pe=te;export{B as a,pe as b};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
