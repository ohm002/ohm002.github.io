var GE=Object.defineProperty;var jE=(t,e,r)=>e in t?GE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var HE=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var He=(t,e,r)=>(jE(t,typeof e!="symbol"?e+"":e,r),r);var MD=HE((ND,Ve)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var yp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function $E(t){var e=t.default;if(typeof e=="function"){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:function(){return t[n]}})}),r}var ye={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gu=Symbol.for("react.element"),VE=Symbol.for("react.portal"),WE=Symbol.for("react.fragment"),XE=Symbol.for("react.strict_mode"),YE=Symbol.for("react.profiler"),KE=Symbol.for("react.provider"),QE=Symbol.for("react.context"),ZE=Symbol.for("react.forward_ref"),qE=Symbol.for("react.suspense"),JE=Symbol.for("react.memo"),eC=Symbol.for("react.lazy"),c1=Symbol.iterator;function tC(t){return t===null||typeof t!="object"?null:(t=c1&&t[c1]||t["@@iterator"],typeof t=="function"?t:null)}var pT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mT=Object.assign,gT={};function Ia(t,e,r){this.props=t,this.context=e,this.refs=gT,this.updater=r||pT}Ia.prototype.isReactComponent={};Ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yT(){}yT.prototype=Ia.prototype;function h0(t,e,r){this.props=t,this.context=e,this.refs=gT,this.updater=r||pT}var d0=h0.prototype=new yT;d0.constructor=h0;mT(d0,Ia.prototype);d0.isPureReactComponent=!0;var h1=Array.isArray,vT=Object.prototype.hasOwnProperty,f0={current:null},xT={key:!0,ref:!0,__self:!0,__source:!0};function _T(t,e,r){var n,i={},s=null,o=null;if(e!=null)for(n in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vT.call(e,n)&&!xT.hasOwnProperty(n)&&(i[n]=e[n]);var u=arguments.length-2;if(u===1)i.children=r;else if(1<u){for(var c=Array(u),h=0;h<u;h++)c[h]=arguments[h+2];i.children=c}if(t&&t.defaultProps)for(n in u=t.defaultProps,u)i[n]===void 0&&(i[n]=u[n]);return{$$typeof:gu,type:t,key:s,ref:o,props:i,_owner:f0.current}}function rC(t,e){return{$$typeof:gu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function p0(t){return typeof t=="object"&&t!==null&&t.$$typeof===gu}function nC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var d1=/\/+/g;function vp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nC(""+t.key):e.toString(36)}function oh(t,e,r,n,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case gu:case VE:o=!0}}if(o)return o=t,i=i(o),t=n===""?"."+vp(o,0):n,h1(i)?(r="",t!=null&&(r=t.replace(d1,"$&/")+"/"),oh(i,e,r,"",function(h){return h})):i!=null&&(p0(i)&&(i=rC(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(d1,"$&/")+"/")+t)),e.push(i)),1;if(o=0,n=n===""?".":n+":",h1(t))for(var u=0;u<t.length;u++){s=t[u];var c=n+vp(s,u);o+=oh(s,e,r,c,i)}else if(c=tC(t),typeof c=="function")for(t=c.call(t),u=0;!(s=t.next()).done;)s=s.value,c=n+vp(s,u++),o+=oh(s,e,r,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pc(t,e,r){if(t==null)return t;var n=[],i=0;return oh(t,n,"","",function(s){return e.call(r,s,i++)}),n}function iC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hr={current:null},ah={transition:null},sC={ReactCurrentDispatcher:hr,ReactCurrentBatchConfig:ah,ReactCurrentOwner:f0};ke.Children={map:pc,forEach:function(t,e,r){pc(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return pc(t,function(){e++}),e},toArray:function(t){return pc(t,function(e){return e})||[]},only:function(t){if(!p0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Ia;ke.Fragment=WE;ke.Profiler=YE;ke.PureComponent=h0;ke.StrictMode=XE;ke.Suspense=qE;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sC;ke.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=mT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=f0.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(c in e)vT.call(e,c)&&!xT.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&u!==void 0?u[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){u=Array(c);for(var h=0;h<c;h++)u[h]=arguments[h+2];n.children=u}return{$$typeof:gu,type:t.type,key:i,ref:s,props:n,_owner:o}};ke.createContext=function(t){return t={$$typeof:QE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KE,_context:t},t.Consumer=t};ke.createElement=_T;ke.createFactory=function(t){var e=_T.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:ZE,render:t}};ke.isValidElement=p0;ke.lazy=function(t){return{$$typeof:eC,_payload:{_status:-1,_result:t},_init:iC}};ke.memo=function(t,e){return{$$typeof:JE,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=ah.transition;ah.transition={};try{t()}finally{ah.transition=e}};ke.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ke.useCallback=function(t,e){return hr.current.useCallback(t,e)};ke.useContext=function(t){return hr.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return hr.current.useDeferredValue(t)};ke.useEffect=function(t,e){return hr.current.useEffect(t,e)};ke.useId=function(){return hr.current.useId()};ke.useImperativeHandle=function(t,e,r){return hr.current.useImperativeHandle(t,e,r)};ke.useInsertionEffect=function(t,e){return hr.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return hr.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return hr.current.useMemo(t,e)};ke.useReducer=function(t,e,r){return hr.current.useReducer(t,e,r)};ke.useRef=function(t){return hr.current.useRef(t)};ke.useState=function(t){return hr.current.useState(t)};ke.useSyncExternalStore=function(t,e,r){return hr.current.useSyncExternalStore(t,e,r)};ke.useTransition=function(){return hr.current.useTransition()};ke.version="18.2.0";(function(t){t.exports=ke})(ye);const An=fT(ye.exports);var m0={exports:{}},Fr={},TT={exports:{}},bT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,L){var k=R.length;R.push(L);e:for(;0<k;){var Q=k-1>>>1,ne=R[Q];if(0<i(ne,L))R[Q]=L,R[k]=ne,k=Q;else break e}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var L=R[0],k=R.pop();if(k!==L){R[0]=k;e:for(var Q=0,ne=R.length,Se=ne>>>1;Q<Se;){var Te=2*(Q+1)-1,Be=R[Te],Pe=Te+1,Le=R[Pe];if(0>i(Be,k))Pe<ne&&0>i(Le,Be)?(R[Q]=Le,R[Pe]=k,Q=Pe):(R[Q]=Be,R[Te]=k,Q=Te);else if(Pe<ne&&0>i(Le,k))R[Q]=Le,R[Pe]=k,Q=Pe;else break e}}return L}function i(R,L){var k=R.sortIndex-L.sortIndex;return k!==0?k:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,u=o.now();t.unstable_now=function(){return o.now()-u}}var c=[],h=[],f=1,p=null,g=3,v=!1,x=!1,S=!1,E=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(R){for(var L=r(h);L!==null;){if(L.callback===null)n(h);else if(L.startTime<=R)n(h),L.sortIndex=L.expirationTime,e(c,L);else break;L=r(h)}}function A(R){if(S=!1,T(R),!x)if(r(c)!==null)x=!0,xe(P);else{var L=r(h);L!==null&&z(A,L.startTime-R)}}function P(R,L){x=!1,S&&(S=!1,w(M),M=-1),v=!0;var k=g;try{for(T(L),p=r(c);p!==null&&(!(p.expirationTime>L)||R&&!Y());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,g=p.priorityLevel;var ne=Q(p.expirationTime<=L);L=t.unstable_now(),typeof ne=="function"?p.callback=ne:p===r(c)&&n(c),T(L)}else n(c);p=r(c)}if(p!==null)var Se=!0;else{var Te=r(h);Te!==null&&z(A,Te.startTime-L),Se=!1}return Se}finally{p=null,g=k,v=!1}}var O=!1,D=null,M=-1,H=5,X=-1;function Y(){return!(t.unstable_now()-X<H)}function ie(){if(D!==null){var R=t.unstable_now();X=R;var L=!0;try{L=D(!0,R)}finally{L?W():(O=!1,D=null)}}else O=!1}var W;if(typeof b=="function")W=function(){b(ie)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,fe=U.port2;U.port1.onmessage=ie,W=function(){fe.postMessage(null)}}else W=function(){E(ie,0)};function xe(R){D=R,O||(O=!0,W())}function z(R,L){M=E(function(){R(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){x||v||(x=!0,xe(P))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(R){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var k=g;g=L;try{return R()}finally{g=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var k=g;g=R;try{return L()}finally{g=k}},t.unstable_scheduleCallback=function(R,L,k){var Q=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?Q+k:Q):k=Q,R){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=k+ne,R={id:f++,callback:L,priorityLevel:R,startTime:k,expirationTime:ne,sortIndex:-1},k>Q?(R.sortIndex=k,e(h,R),r(c)===null&&R===r(h)&&(S?(w(M),M=-1):S=!0,z(A,k-Q))):(R.sortIndex=ne,e(c,R),x||v||(x=!0,xe(P))),R},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(R){var L=g;return function(){var k=g;g=L;try{return R.apply(this,arguments)}finally{g=k}}}})(bT);(function(t){t.exports=bT})(TT);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wT=ye.exports,Or=TT.exports;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ST=new Set,zl={};function ho(t,e){xa(t,e),xa(t+"Capture",e)}function xa(t,e){for(zl[t]=e,t=0;t<e.length;t++)ST.add(e[t])}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Am=Object.prototype.hasOwnProperty,oC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f1={},p1={};function aC(t){return Am.call(p1,t)?!0:Am.call(f1,t)?!1:oC.test(t)?p1[t]=!0:(f1[t]=!0,!1)}function lC(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uC(t,e,r,n){if(e===null||typeof e>"u"||lC(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dr(t,e,r,n,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new dr(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new dr(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new dr(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new dr(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new dr(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new dr(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new dr(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new dr(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new dr(t,5,!1,t.toLowerCase(),null,!1,!1)});var g0=/[\-:]([a-z])/g;function y0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(g0,y0);Xt[e]=new dr(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(g0,y0);Xt[e]=new dr(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(g0,y0);Xt[e]=new dr(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new dr(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new dr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new dr(t,1,!1,t.toLowerCase(),null,!0,!0)});function v0(t,e,r,n){var i=Xt.hasOwnProperty(e)?Xt[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uC(e,r,i,n)&&(r=null),n||i===null?aC(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var Li=wT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mc=Symbol.for("react.element"),Wo=Symbol.for("react.portal"),Xo=Symbol.for("react.fragment"),x0=Symbol.for("react.strict_mode"),Pm=Symbol.for("react.profiler"),ET=Symbol.for("react.provider"),CT=Symbol.for("react.context"),_0=Symbol.for("react.forward_ref"),Im=Symbol.for("react.suspense"),Rm=Symbol.for("react.suspense_list"),T0=Symbol.for("react.memo"),es=Symbol.for("react.lazy"),AT=Symbol.for("react.offscreen"),m1=Symbol.iterator;function tl(t){return t===null||typeof t!="object"?null:(t=m1&&t[m1]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,xp;function yl(t){if(xp===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);xp=e&&e[1]||""}return`
`+xp+t}var _p=!1;function Tp(t,e){if(!t||_p)return"";_p=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var n=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){n=h}t.call(e.prototype)}else{try{throw Error()}catch(h){n=h}t()}}catch(h){if(h&&n&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=n.stack.split(`
`),o=i.length-1,u=s.length-1;1<=o&&0<=u&&i[o]!==s[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==s[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==s[u]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=u);break}}}finally{_p=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?yl(t):""}function cC(t){switch(t.tag){case 5:return yl(t.type);case 16:return yl("Lazy");case 13:return yl("Suspense");case 19:return yl("SuspenseList");case 0:case 2:case 15:return t=Tp(t.type,!1),t;case 11:return t=Tp(t.type.render,!1),t;case 1:return t=Tp(t.type,!0),t;default:return""}}function km(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xo:return"Fragment";case Wo:return"Portal";case Pm:return"Profiler";case x0:return"StrictMode";case Im:return"Suspense";case Rm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case CT:return(t.displayName||"Context")+".Consumer";case ET:return(t._context.displayName||"Context")+".Provider";case _0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case T0:return e=t.displayName||null,e!==null?e:km(t.type)||"Memo";case es:e=t._payload,t=t._init;try{return km(t(e))}catch{}}return null}function hC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return km(e);case 8:return e===x0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function PT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dC(t){var e=PT(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gc(t){t._valueTracker||(t._valueTracker=dC(t))}function IT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=PT(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function Ih(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mm(t,e){var r=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:t._wrapperState.initialChecked})}function g1(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=vs(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function RT(t,e){e=e.checked,e!=null&&v0(t,"checked",e,!1)}function Dm(t,e){RT(t,e);var r=vs(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nm(t,e.type,r):e.hasOwnProperty("defaultValue")&&Nm(t,e.type,vs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function y1(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Nm(t,e,r){(e!=="number"||Ih(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var vl=Array.isArray;function aa(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+vs(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Om(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function v1(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(Z(92));if(vl(r)){if(1<r.length)throw Error(Z(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:vs(r)}}function kT(t,e){var r=vs(e.value),n=vs(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function x1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function MT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?MT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var yc,DT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(yc=yc||document.createElement("div"),yc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Gl(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Il={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fC=["Webkit","ms","Moz","O"];Object.keys(Il).forEach(function(t){fC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Il[e]=Il[t]})});function NT(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Il.hasOwnProperty(t)&&Il[t]?(""+e).trim():e+"px"}function OT(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=NT(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var pC=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lm(t,e){if(e){if(pC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function Bm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Um=null;function b0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zm=null,la=null,ua=null;function _1(t){if(t=xu(t)){if(typeof zm!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=bd(e),zm(t.stateNode,t.type,e))}}function FT(t){la?ua?ua.push(t):ua=[t]:la=t}function LT(){if(la){var t=la,e=ua;if(ua=la=null,_1(t),e)for(t=0;t<e.length;t++)_1(e[t])}}function BT(t,e){return t(e)}function UT(){}var bp=!1;function zT(t,e,r){if(bp)return t(e,r);bp=!0;try{return BT(t,e,r)}finally{bp=!1,(la!==null||ua!==null)&&(UT(),LT())}}function jl(t,e){var r=t.stateNode;if(r===null)return null;var n=bd(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(Z(231,e,typeof r));return r}var Gm=!1;if(ki)try{var rl={};Object.defineProperty(rl,"passive",{get:function(){Gm=!0}}),window.addEventListener("test",rl,rl),window.removeEventListener("test",rl,rl)}catch{Gm=!1}function mC(t,e,r,n,i,s,o,u,c){var h=Array.prototype.slice.call(arguments,3);try{e.apply(r,h)}catch(f){this.onError(f)}}var Rl=!1,Rh=null,kh=!1,jm=null,gC={onError:function(t){Rl=!0,Rh=t}};function yC(t,e,r,n,i,s,o,u,c){Rl=!1,Rh=null,mC.apply(gC,arguments)}function vC(t,e,r,n,i,s,o,u,c){if(yC.apply(this,arguments),Rl){if(Rl){var h=Rh;Rl=!1,Rh=null}else throw Error(Z(198));kh||(kh=!0,jm=h)}}function fo(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function GT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function T1(t){if(fo(t)!==t)throw Error(Z(188))}function xC(t){var e=t.alternate;if(!e){if(e=fo(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return T1(i),t;if(s===n)return T1(i),e;s=s.sibling}throw Error(Z(188))}if(r.return!==n.return)r=i,n=s;else{for(var o=!1,u=i.child;u;){if(u===r){o=!0,r=i,n=s;break}if(u===n){o=!0,n=i,r=s;break}u=u.sibling}if(!o){for(u=s.child;u;){if(u===r){o=!0,r=s,n=i;break}if(u===n){o=!0,n=s,r=i;break}u=u.sibling}if(!o)throw Error(Z(189))}}if(r.alternate!==n)throw Error(Z(190))}if(r.tag!==3)throw Error(Z(188));return r.stateNode.current===r?t:e}function jT(t){return t=xC(t),t!==null?HT(t):null}function HT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=HT(t);if(e!==null)return e;t=t.sibling}return null}var $T=Or.unstable_scheduleCallback,b1=Or.unstable_cancelCallback,_C=Or.unstable_shouldYield,TC=Or.unstable_requestPaint,_t=Or.unstable_now,bC=Or.unstable_getCurrentPriorityLevel,w0=Or.unstable_ImmediatePriority,VT=Or.unstable_UserBlockingPriority,Mh=Or.unstable_NormalPriority,wC=Or.unstable_LowPriority,WT=Or.unstable_IdlePriority,vd=null,ei=null;function SC(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(vd,t,void 0,(t.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:AC,EC=Math.log,CC=Math.LN2;function AC(t){return t>>>=0,t===0?32:31-(EC(t)/CC|0)|0}var vc=64,xc=4194304;function xl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dh(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,s=t.pingedLanes,o=r&268435455;if(o!==0){var u=o&~i;u!==0?n=xl(u):(s&=o,s!==0&&(n=xl(s)))}else o=r&~i,o!==0?n=xl(o):s!==0&&(n=xl(s));if(n===0)return 0;if(e!==0&&e!==n&&(e&i)===0&&(i=n&-n,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((n&4)!==0&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-Pn(e),i=1<<r,n|=t[r],e&=~i;return n}function PC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IC(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Pn(s),u=1<<o,c=i[o];c===-1?((u&r)===0||(u&n)!==0)&&(i[o]=PC(u,e)):c<=e&&(t.expiredLanes|=u),s&=~u}}function Hm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function XT(){var t=vc;return vc<<=1,(vc&4194240)===0&&(vc=64),t}function wp(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function yu(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pn(e),t[e]=r}function RC(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-Pn(r),s=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~s}}function S0(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-Pn(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var $e=0;function YT(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var KT,E0,QT,ZT,qT,$m=!1,_c=[],us=null,cs=null,hs=null,Hl=new Map,$l=new Map,ns=[],kC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function w1(t,e){switch(t){case"focusin":case"focusout":us=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":hs=null;break;case"pointerover":case"pointerout":Hl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$l.delete(e.pointerId)}}function nl(t,e,r,n,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xu(e),e!==null&&E0(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function MC(t,e,r,n,i){switch(e){case"focusin":return us=nl(us,t,e,r,n,i),!0;case"dragenter":return cs=nl(cs,t,e,r,n,i),!0;case"mouseover":return hs=nl(hs,t,e,r,n,i),!0;case"pointerover":var s=i.pointerId;return Hl.set(s,nl(Hl.get(s)||null,t,e,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,$l.set(s,nl($l.get(s)||null,t,e,r,n,i)),!0}return!1}function JT(t){var e=Ks(t.target);if(e!==null){var r=fo(e);if(r!==null){if(e=r.tag,e===13){if(e=GT(r),e!==null){t.blockedOn=e,qT(t.priority,function(){QT(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lh(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Vm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Um=n,r.target.dispatchEvent(n),Um=null}else return e=xu(r),e!==null&&E0(e),t.blockedOn=r,!1;e.shift()}return!0}function S1(t,e,r){lh(t)&&r.delete(e)}function DC(){$m=!1,us!==null&&lh(us)&&(us=null),cs!==null&&lh(cs)&&(cs=null),hs!==null&&lh(hs)&&(hs=null),Hl.forEach(S1),$l.forEach(S1)}function il(t,e){t.blockedOn===e&&(t.blockedOn=null,$m||($m=!0,Or.unstable_scheduleCallback(Or.unstable_NormalPriority,DC)))}function Vl(t){function e(i){return il(i,t)}if(0<_c.length){il(_c[0],t);for(var r=1;r<_c.length;r++){var n=_c[r];n.blockedOn===t&&(n.blockedOn=null)}}for(us!==null&&il(us,t),cs!==null&&il(cs,t),hs!==null&&il(hs,t),Hl.forEach(e),$l.forEach(e),r=0;r<ns.length;r++)n=ns[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<ns.length&&(r=ns[0],r.blockedOn===null);)JT(r),r.blockedOn===null&&ns.shift()}var ca=Li.ReactCurrentBatchConfig,Nh=!0;function NC(t,e,r,n){var i=$e,s=ca.transition;ca.transition=null;try{$e=1,C0(t,e,r,n)}finally{$e=i,ca.transition=s}}function OC(t,e,r,n){var i=$e,s=ca.transition;ca.transition=null;try{$e=4,C0(t,e,r,n)}finally{$e=i,ca.transition=s}}function C0(t,e,r,n){if(Nh){var i=Vm(t,e,r,n);if(i===null)Dp(t,e,n,Oh,r),w1(t,n);else if(MC(i,t,e,r,n))n.stopPropagation();else if(w1(t,n),e&4&&-1<kC.indexOf(t)){for(;i!==null;){var s=xu(i);if(s!==null&&KT(s),s=Vm(t,e,r,n),s===null&&Dp(t,e,n,Oh,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else Dp(t,e,n,null,r)}}var Oh=null;function Vm(t,e,r,n){if(Oh=null,t=b0(n),t=Ks(t),t!==null)if(e=fo(t),e===null)t=null;else if(r=e.tag,r===13){if(t=GT(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Oh=t,null}function e2(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bC()){case w0:return 1;case VT:return 4;case Mh:case wC:return 16;case WT:return 536870912;default:return 16}default:return 16}}var os=null,A0=null,uh=null;function t2(){if(uh)return uh;var t,e=A0,r=e.length,n,i="value"in os?os.value:os.textContent,s=i.length;for(t=0;t<r&&e[t]===i[t];t++);var o=r-t;for(n=1;n<=o&&e[r-n]===i[s-n];n++);return uh=i.slice(t,1<n?1-n:void 0)}function ch(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Tc(){return!0}function E1(){return!1}function Lr(t){function e(r,n,i,s,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(r=t[u],this[u]=r?r(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Tc:E1,this.isPropagationStopped=E1,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Tc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Tc)},persist:function(){},isPersistent:Tc}),e}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},P0=Lr(Ra),vu=ct({},Ra,{view:0,detail:0}),FC=Lr(vu),Sp,Ep,sl,xd=ct({},vu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:I0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sl&&(sl&&t.type==="mousemove"?(Sp=t.screenX-sl.screenX,Ep=t.screenY-sl.screenY):Ep=Sp=0,sl=t),Sp)},movementY:function(t){return"movementY"in t?t.movementY:Ep}}),C1=Lr(xd),LC=ct({},xd,{dataTransfer:0}),BC=Lr(LC),UC=ct({},vu,{relatedTarget:0}),Cp=Lr(UC),zC=ct({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),GC=Lr(zC),jC=ct({},Ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HC=Lr(jC),$C=ct({},Ra,{data:0}),A1=Lr($C),VC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XC[t])?!!e[t]:!1}function I0(){return YC}var KC=ct({},vu,{key:function(t){if(t.key){var e=VC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ch(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?WC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:I0,charCode:function(t){return t.type==="keypress"?ch(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ch(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),QC=Lr(KC),ZC=ct({},xd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),P1=Lr(ZC),qC=ct({},vu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:I0}),JC=Lr(qC),e3=ct({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),t3=Lr(e3),r3=ct({},xd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),n3=Lr(r3),i3=[9,13,27,32],R0=ki&&"CompositionEvent"in window,kl=null;ki&&"documentMode"in document&&(kl=document.documentMode);var s3=ki&&"TextEvent"in window&&!kl,r2=ki&&(!R0||kl&&8<kl&&11>=kl),I1=String.fromCharCode(32),R1=!1;function n2(t,e){switch(t){case"keyup":return i3.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function i2(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yo=!1;function o3(t,e){switch(t){case"compositionend":return i2(e);case"keypress":return e.which!==32?null:(R1=!0,I1);case"textInput":return t=e.data,t===I1&&R1?null:t;default:return null}}function a3(t,e){if(Yo)return t==="compositionend"||!R0&&n2(t,e)?(t=t2(),uh=A0=os=null,Yo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return r2&&e.locale!=="ko"?null:e.data;default:return null}}var l3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function k1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!l3[t.type]:e==="textarea"}function s2(t,e,r,n){FT(n),e=Fh(e,"onChange"),0<e.length&&(r=new P0("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var Ml=null,Wl=null;function u3(t){g2(t,0)}function _d(t){var e=Zo(t);if(IT(e))return t}function c3(t,e){if(t==="change")return e}var o2=!1;if(ki){var Ap;if(ki){var Pp="oninput"in document;if(!Pp){var M1=document.createElement("div");M1.setAttribute("oninput","return;"),Pp=typeof M1.oninput=="function"}Ap=Pp}else Ap=!1;o2=Ap&&(!document.documentMode||9<document.documentMode)}function D1(){Ml&&(Ml.detachEvent("onpropertychange",a2),Wl=Ml=null)}function a2(t){if(t.propertyName==="value"&&_d(Wl)){var e=[];s2(e,Wl,t,b0(t)),zT(u3,e)}}function h3(t,e,r){t==="focusin"?(D1(),Ml=e,Wl=r,Ml.attachEvent("onpropertychange",a2)):t==="focusout"&&D1()}function d3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _d(Wl)}function f3(t,e){if(t==="click")return _d(e)}function p3(t,e){if(t==="input"||t==="change")return _d(e)}function m3(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dn=typeof Object.is=="function"?Object.is:m3;function Xl(t,e){if(Dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Am.call(e,i)||!Dn(t[i],e[i]))return!1}return!0}function N1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function O1(t,e){var r=N1(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=N1(r)}}function l2(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?l2(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function u2(){for(var t=window,e=Ih();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Ih(t.document)}return e}function k0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function g3(t){var e=u2(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&l2(r.ownerDocument.documentElement,r)){if(n!==null&&k0(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!t.extend&&s>n&&(i=n,n=s,s=i),i=O1(r,s);var o=O1(r,n);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>n?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var y3=ki&&"documentMode"in document&&11>=document.documentMode,Ko=null,Wm=null,Dl=null,Xm=!1;function F1(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xm||Ko==null||Ko!==Ih(n)||(n=Ko,"selectionStart"in n&&k0(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Dl&&Xl(Dl,n)||(Dl=n,n=Fh(Wm,"onSelect"),0<n.length&&(e=new P0("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=Ko)))}function bc(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Qo={animationend:bc("Animation","AnimationEnd"),animationiteration:bc("Animation","AnimationIteration"),animationstart:bc("Animation","AnimationStart"),transitionend:bc("Transition","TransitionEnd")},Ip={},c2={};ki&&(c2=document.createElement("div").style,"AnimationEvent"in window||(delete Qo.animationend.animation,delete Qo.animationiteration.animation,delete Qo.animationstart.animation),"TransitionEvent"in window||delete Qo.transitionend.transition);function Td(t){if(Ip[t])return Ip[t];if(!Qo[t])return t;var e=Qo[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in c2)return Ip[t]=e[r];return t}var h2=Td("animationend"),d2=Td("animationiteration"),f2=Td("animationstart"),p2=Td("transitionend"),m2=new Map,L1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ss(t,e){m2.set(t,e),ho(e,[t])}for(var Rp=0;Rp<L1.length;Rp++){var kp=L1[Rp],v3=kp.toLowerCase(),x3=kp[0].toUpperCase()+kp.slice(1);Ss(v3,"on"+x3)}Ss(h2,"onAnimationEnd");Ss(d2,"onAnimationIteration");Ss(f2,"onAnimationStart");Ss("dblclick","onDoubleClick");Ss("focusin","onFocus");Ss("focusout","onBlur");Ss(p2,"onTransitionEnd");xa("onMouseEnter",["mouseout","mouseover"]);xa("onMouseLeave",["mouseout","mouseover"]);xa("onPointerEnter",["pointerout","pointerover"]);xa("onPointerLeave",["pointerout","pointerover"]);ho("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ho("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ho("onBeforeInput",["compositionend","keypress","textInput","paste"]);ho("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ho("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ho("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_3=new Set("cancel close invalid load scroll toggle".split(" ").concat(_l));function B1(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,vC(n,e,void 0,t),t.currentTarget=null}function g2(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var o=n.length-1;0<=o;o--){var u=n[o],c=u.instance,h=u.currentTarget;if(u=u.listener,c!==s&&i.isPropagationStopped())break e;B1(i,u,h),s=c}else for(o=0;o<n.length;o++){if(u=n[o],c=u.instance,h=u.currentTarget,u=u.listener,c!==s&&i.isPropagationStopped())break e;B1(i,u,h),s=c}}}if(kh)throw t=jm,kh=!1,jm=null,t}function Ze(t,e){var r=e[qm];r===void 0&&(r=e[qm]=new Set);var n=t+"__bubble";r.has(n)||(y2(e,t,2,!1),r.add(n))}function Mp(t,e,r){var n=0;e&&(n|=4),y2(r,t,n,e)}var wc="_reactListening"+Math.random().toString(36).slice(2);function Yl(t){if(!t[wc]){t[wc]=!0,ST.forEach(function(r){r!=="selectionchange"&&(_3.has(r)||Mp(r,!1,t),Mp(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wc]||(e[wc]=!0,Mp("selectionchange",!1,e))}}function y2(t,e,r,n){switch(e2(e)){case 1:var i=NC;break;case 4:i=OC;break;default:i=C0}r=i.bind(null,e,r,t),i=void 0,!Gm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Dp(t,e,r,n,i){var s=n;if((e&1)===0&&(e&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var u=n.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;u!==null;){if(o=Ks(u),o===null)return;if(c=o.tag,c===5||c===6){n=s=o;continue e}u=u.parentNode}}n=n.return}zT(function(){var h=s,f=b0(r),p=[];e:{var g=m2.get(t);if(g!==void 0){var v=P0,x=t;switch(t){case"keypress":if(ch(r)===0)break e;case"keydown":case"keyup":v=QC;break;case"focusin":x="focus",v=Cp;break;case"focusout":x="blur",v=Cp;break;case"beforeblur":case"afterblur":v=Cp;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=C1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=BC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=JC;break;case h2:case d2:case f2:v=GC;break;case p2:v=t3;break;case"scroll":v=FC;break;case"wheel":v=n3;break;case"copy":case"cut":case"paste":v=HC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=P1}var S=(e&4)!==0,E=!S&&t==="scroll",w=S?g!==null?g+"Capture":null:g;S=[];for(var b=h,T;b!==null;){T=b;var A=T.stateNode;if(T.tag===5&&A!==null&&(T=A,w!==null&&(A=jl(b,w),A!=null&&S.push(Kl(b,A,T)))),E)break;b=b.return}0<S.length&&(g=new v(g,x,null,r,f),p.push({event:g,listeners:S}))}}if((e&7)===0){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&r!==Um&&(x=r.relatedTarget||r.fromElement)&&(Ks(x)||x[Mi]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(x=r.relatedTarget||r.toElement,v=h,x=x?Ks(x):null,x!==null&&(E=fo(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=h),v!==x)){if(S=C1,A="onMouseLeave",w="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(S=P1,A="onPointerLeave",w="onPointerEnter",b="pointer"),E=v==null?g:Zo(v),T=x==null?g:Zo(x),g=new S(A,b+"leave",v,r,f),g.target=E,g.relatedTarget=T,A=null,Ks(f)===h&&(S=new S(w,b+"enter",x,r,f),S.target=T,S.relatedTarget=E,A=S),E=A,v&&x)t:{for(S=v,w=x,b=0,T=S;T;T=No(T))b++;for(T=0,A=w;A;A=No(A))T++;for(;0<b-T;)S=No(S),b--;for(;0<T-b;)w=No(w),T--;for(;b--;){if(S===w||w!==null&&S===w.alternate)break t;S=No(S),w=No(w)}S=null}else S=null;v!==null&&U1(p,g,v,S,!1),x!==null&&E!==null&&U1(p,E,x,S,!0)}}e:{if(g=h?Zo(h):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var P=c3;else if(k1(g))if(o2)P=p3;else{P=d3;var O=h3}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=f3);if(P&&(P=P(t,h))){s2(p,P,r,f);break e}O&&O(t,g,h),t==="focusout"&&(O=g._wrapperState)&&O.controlled&&g.type==="number"&&Nm(g,"number",g.value)}switch(O=h?Zo(h):window,t){case"focusin":(k1(O)||O.contentEditable==="true")&&(Ko=O,Wm=h,Dl=null);break;case"focusout":Dl=Wm=Ko=null;break;case"mousedown":Xm=!0;break;case"contextmenu":case"mouseup":case"dragend":Xm=!1,F1(p,r,f);break;case"selectionchange":if(y3)break;case"keydown":case"keyup":F1(p,r,f)}var D;if(R0)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Yo?n2(t,r)&&(M="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(M="onCompositionStart");M&&(r2&&r.locale!=="ko"&&(Yo||M!=="onCompositionStart"?M==="onCompositionEnd"&&Yo&&(D=t2()):(os=f,A0="value"in os?os.value:os.textContent,Yo=!0)),O=Fh(h,M),0<O.length&&(M=new A1(M,t,null,r,f),p.push({event:M,listeners:O}),D?M.data=D:(D=i2(r),D!==null&&(M.data=D)))),(D=s3?o3(t,r):a3(t,r))&&(h=Fh(h,"onBeforeInput"),0<h.length&&(f=new A1("onBeforeInput","beforeinput",null,r,f),p.push({event:f,listeners:h}),f.data=D))}g2(p,e)})}function Kl(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Fh(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=jl(t,r),s!=null&&n.unshift(Kl(t,s,i)),s=jl(t,e),s!=null&&n.push(Kl(t,s,i))),t=t.return}return n}function No(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function U1(t,e,r,n,i){for(var s=e._reactName,o=[];r!==null&&r!==n;){var u=r,c=u.alternate,h=u.stateNode;if(c!==null&&c===n)break;u.tag===5&&h!==null&&(u=h,i?(c=jl(r,s),c!=null&&o.unshift(Kl(r,c,u))):i||(c=jl(r,s),c!=null&&o.push(Kl(r,c,u)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var T3=/\r\n?/g,b3=/\u0000|\uFFFD/g;function z1(t){return(typeof t=="string"?t:""+t).replace(T3,`
`).replace(b3,"")}function Sc(t,e,r){if(e=z1(e),z1(t)!==e&&r)throw Error(Z(425))}function Lh(){}var Ym=null,Km=null;function Qm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zm=typeof setTimeout=="function"?setTimeout:void 0,w3=typeof clearTimeout=="function"?clearTimeout:void 0,G1=typeof Promise=="function"?Promise:void 0,S3=typeof queueMicrotask=="function"?queueMicrotask:typeof G1<"u"?function(t){return G1.resolve(null).then(t).catch(E3)}:Zm;function E3(t){setTimeout(function(){throw t})}function Np(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),Vl(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Vl(e)}function ds(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function j1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var ka=Math.random().toString(36).slice(2),Zn="__reactFiber$"+ka,Ql="__reactProps$"+ka,Mi="__reactContainer$"+ka,qm="__reactEvents$"+ka,C3="__reactListeners$"+ka,A3="__reactHandles$"+ka;function Ks(t){var e=t[Zn];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Mi]||r[Zn]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=j1(t);t!==null;){if(r=t[Zn])return r;t=j1(t)}return e}t=r,r=t.parentNode}return null}function xu(t){return t=t[Zn]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function bd(t){return t[Ql]||null}var Jm=[],qo=-1;function Es(t){return{current:t}}function qe(t){0>qo||(t.current=Jm[qo],Jm[qo]=null,qo--)}function Ye(t,e){qo++,Jm[qo]=t.current,t.current=e}var xs={},ir=Es(xs),_r=Es(!1),no=xs;function _a(t,e){var r=t.type.contextTypes;if(!r)return xs;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=e[s];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Tr(t){return t=t.childContextTypes,t!=null}function Bh(){qe(_r),qe(ir)}function H1(t,e,r){if(ir.current!==xs)throw Error(Z(168));Ye(ir,e),Ye(_r,r)}function v2(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(Z(108,hC(t)||"Unknown",i));return ct({},r,n)}function Uh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xs,no=ir.current,Ye(ir,t),Ye(_r,_r.current),!0}function $1(t,e,r){var n=t.stateNode;if(!n)throw Error(Z(169));r?(t=v2(t,e,no),n.__reactInternalMemoizedMergedChildContext=t,qe(_r),qe(ir),Ye(ir,t)):qe(_r),Ye(_r,r)}var xi=null,wd=!1,Op=!1;function x2(t){xi===null?xi=[t]:xi.push(t)}function P3(t){wd=!0,x2(t)}function Cs(){if(!Op&&xi!==null){Op=!0;var t=0,e=$e;try{var r=xi;for($e=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}xi=null,wd=!1}catch(i){throw xi!==null&&(xi=xi.slice(t+1)),$T(w0,Cs),i}finally{$e=e,Op=!1}}return null}var Jo=[],ea=0,zh=null,Gh=0,Qr=[],Zr=0,io=null,wi=1,Si="";function js(t,e){Jo[ea++]=Gh,Jo[ea++]=zh,zh=t,Gh=e}function _2(t,e,r){Qr[Zr++]=wi,Qr[Zr++]=Si,Qr[Zr++]=io,io=t;var n=wi;t=Si;var i=32-Pn(n)-1;n&=~(1<<i),r+=1;var s=32-Pn(e)+i;if(30<s){var o=i-i%5;s=(n&(1<<o)-1).toString(32),n>>=o,i-=o,wi=1<<32-Pn(e)+i|r<<i|n,Si=s+t}else wi=1<<s|r<<i|n,Si=t}function M0(t){t.return!==null&&(js(t,1),_2(t,1,0))}function D0(t){for(;t===zh;)zh=Jo[--ea],Jo[ea]=null,Gh=Jo[--ea],Jo[ea]=null;for(;t===io;)io=Qr[--Zr],Qr[Zr]=null,Si=Qr[--Zr],Qr[Zr]=null,wi=Qr[--Zr],Qr[Zr]=null}var Dr=null,Mr=null,nt=!1,Tn=null;function T2(t,e){var r=qr(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function V1(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dr=t,Mr=ds(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dr=t,Mr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=io!==null?{id:wi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=qr(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Dr=t,Mr=null,!0):!1;default:return!1}}function eg(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tg(t){if(nt){var e=Mr;if(e){var r=e;if(!V1(t,e)){if(eg(t))throw Error(Z(418));e=ds(r.nextSibling);var n=Dr;e&&V1(t,e)?T2(n,r):(t.flags=t.flags&-4097|2,nt=!1,Dr=t)}}else{if(eg(t))throw Error(Z(418));t.flags=t.flags&-4097|2,nt=!1,Dr=t}}}function W1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dr=t}function Ec(t){if(t!==Dr)return!1;if(!nt)return W1(t),nt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qm(t.type,t.memoizedProps)),e&&(e=Mr)){if(eg(t))throw b2(),Error(Z(418));for(;e;)T2(t,e),e=ds(e.nextSibling)}if(W1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Mr=ds(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Mr=null}}else Mr=Dr?ds(t.stateNode.nextSibling):null;return!0}function b2(){for(var t=Mr;t;)t=ds(t.nextSibling)}function Ta(){Mr=Dr=null,nt=!1}function N0(t){Tn===null?Tn=[t]:Tn.push(t)}var I3=Li.ReactCurrentBatchConfig;function vn(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var jh=Es(null),Hh=null,ta=null,O0=null;function F0(){O0=ta=Hh=null}function L0(t){var e=jh.current;qe(jh),t._currentValue=e}function rg(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function ha(t,e){Hh=t,O0=ta=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(xr=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(O0!==t)if(t={context:t,memoizedValue:e,next:null},ta===null){if(Hh===null)throw Error(Z(308));ta=t,Hh.dependencies={lanes:0,firstContext:t}}else ta=ta.next=t;return e}var Qs=null;function B0(t){Qs===null?Qs=[t]:Qs.push(t)}function w2(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,B0(e)):(r.next=i.next,i.next=r),e.interleaved=r,Di(t,n)}function Di(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var ts=!1;function U0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S2(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fs(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(De&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,Di(t,r)}return i=n.interleaved,i===null?(e.next=e,B0(n)):(e.next=i.next,i.next=e),n.interleaved=e,Di(t,r)}function hh(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,S0(t,r)}}function X1(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?i=s=e:s=s.next=e}else i=s=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function $h(t,e,r,n){var i=t.updateQueue;ts=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var c=u,h=c.next;c.next=null,o===null?s=h:o.next=h,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,u=f.lastBaseUpdate,u!==o&&(u===null?f.firstBaseUpdate=h:u.next=h,f.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;o=0,f=h=c=null,u=s;do{var g=u.lane,v=u.eventTime;if((n&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=t,S=u;switch(g=e,v=r,S.tag){case 1:if(x=S.payload,typeof x=="function"){p=x.call(v,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,g=typeof x=="function"?x.call(v,p,g):x,g==null)break e;p=ct({},p,g);break e;case 2:ts=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[u]:g.push(u))}else v={eventTime:v,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},f===null?(h=f=v,c=p):f=f.next=v,o|=g;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;g=u,u=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(c=p),i.baseState=c,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);oo|=o,t.lanes=o,t.memoizedState=p}}function Y1(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(Z(191,i));i.call(n)}}}var E2=new wT.Component().refs;function ng(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:ct({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Sd={isMounted:function(t){return(t=t._reactInternals)?fo(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=cr(),i=ms(t),s=Ci(n,i);s.payload=e,r!=null&&(s.callback=r),e=fs(t,s,i),e!==null&&(In(e,t,i,n),hh(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=cr(),i=ms(t),s=Ci(n,i);s.tag=1,s.payload=e,r!=null&&(s.callback=r),e=fs(t,s,i),e!==null&&(In(e,t,i,n),hh(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=cr(),n=ms(t),i=Ci(r,n);i.tag=2,e!=null&&(i.callback=e),e=fs(t,i,n),e!==null&&(In(e,t,n,r),hh(e,t,n))}};function K1(t,e,r,n,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xl(r,n)||!Xl(i,s):!0}function C2(t,e,r){var n=!1,i=xs,s=e.contextType;return typeof s=="object"&&s!==null?s=sn(s):(i=Tr(e)?no:ir.current,n=e.contextTypes,s=(n=n!=null)?_a(t,i):xs),e=new e(r,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sd,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Q1(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&Sd.enqueueReplaceState(e,e.state,null)}function ig(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs=E2,U0(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=sn(s):(s=Tr(e)?no:ir.current,i.context=_a(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ng(t,e,s,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sd.enqueueReplaceState(i,i.state,null),$h(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ol(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(Z(309));var n=r.stateNode}if(!n)throw Error(Z(147,t));var i=n,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var u=i.refs;u===E2&&(u=i.refs={}),o===null?delete u[s]:u[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Z(284));if(!r._owner)throw Error(Z(290,t))}return t}function Cc(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Z1(t){var e=t._init;return e(t._payload)}function A2(t){function e(w,b){if(t){var T=w.deletions;T===null?(w.deletions=[b],w.flags|=16):T.push(b)}}function r(w,b){if(!t)return null;for(;b!==null;)e(w,b),b=b.sibling;return null}function n(w,b){for(w=new Map;b!==null;)b.key!==null?w.set(b.key,b):w.set(b.index,b),b=b.sibling;return w}function i(w,b){return w=gs(w,b),w.index=0,w.sibling=null,w}function s(w,b,T){return w.index=T,t?(T=w.alternate,T!==null?(T=T.index,T<b?(w.flags|=2,b):T):(w.flags|=2,b)):(w.flags|=1048576,b)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function u(w,b,T,A){return b===null||b.tag!==6?(b=jp(T,w.mode,A),b.return=w,b):(b=i(b,T),b.return=w,b)}function c(w,b,T,A){var P=T.type;return P===Xo?f(w,b,T.props.children,A,T.key):b!==null&&(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===es&&Z1(P)===b.type)?(A=i(b,T.props),A.ref=ol(w,b,T),A.return=w,A):(A=yh(T.type,T.key,T.props,null,w.mode,A),A.ref=ol(w,b,T),A.return=w,A)}function h(w,b,T,A){return b===null||b.tag!==4||b.stateNode.containerInfo!==T.containerInfo||b.stateNode.implementation!==T.implementation?(b=Hp(T,w.mode,A),b.return=w,b):(b=i(b,T.children||[]),b.return=w,b)}function f(w,b,T,A,P){return b===null||b.tag!==7?(b=to(T,w.mode,A,P),b.return=w,b):(b=i(b,T),b.return=w,b)}function p(w,b,T){if(typeof b=="string"&&b!==""||typeof b=="number")return b=jp(""+b,w.mode,T),b.return=w,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case mc:return T=yh(b.type,b.key,b.props,null,w.mode,T),T.ref=ol(w,null,b),T.return=w,T;case Wo:return b=Hp(b,w.mode,T),b.return=w,b;case es:var A=b._init;return p(w,A(b._payload),T)}if(vl(b)||tl(b))return b=to(b,w.mode,T,null),b.return=w,b;Cc(w,b)}return null}function g(w,b,T,A){var P=b!==null?b.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return P!==null?null:u(w,b,""+T,A);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case mc:return T.key===P?c(w,b,T,A):null;case Wo:return T.key===P?h(w,b,T,A):null;case es:return P=T._init,g(w,b,P(T._payload),A)}if(vl(T)||tl(T))return P!==null?null:f(w,b,T,A,null);Cc(w,T)}return null}function v(w,b,T,A,P){if(typeof A=="string"&&A!==""||typeof A=="number")return w=w.get(T)||null,u(b,w,""+A,P);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case mc:return w=w.get(A.key===null?T:A.key)||null,c(b,w,A,P);case Wo:return w=w.get(A.key===null?T:A.key)||null,h(b,w,A,P);case es:var O=A._init;return v(w,b,T,O(A._payload),P)}if(vl(A)||tl(A))return w=w.get(T)||null,f(b,w,A,P,null);Cc(b,A)}return null}function x(w,b,T,A){for(var P=null,O=null,D=b,M=b=0,H=null;D!==null&&M<T.length;M++){D.index>M?(H=D,D=null):H=D.sibling;var X=g(w,D,T[M],A);if(X===null){D===null&&(D=H);break}t&&D&&X.alternate===null&&e(w,D),b=s(X,b,M),O===null?P=X:O.sibling=X,O=X,D=H}if(M===T.length)return r(w,D),nt&&js(w,M),P;if(D===null){for(;M<T.length;M++)D=p(w,T[M],A),D!==null&&(b=s(D,b,M),O===null?P=D:O.sibling=D,O=D);return nt&&js(w,M),P}for(D=n(w,D);M<T.length;M++)H=v(D,w,M,T[M],A),H!==null&&(t&&H.alternate!==null&&D.delete(H.key===null?M:H.key),b=s(H,b,M),O===null?P=H:O.sibling=H,O=H);return t&&D.forEach(function(Y){return e(w,Y)}),nt&&js(w,M),P}function S(w,b,T,A){var P=tl(T);if(typeof P!="function")throw Error(Z(150));if(T=P.call(T),T==null)throw Error(Z(151));for(var O=P=null,D=b,M=b=0,H=null,X=T.next();D!==null&&!X.done;M++,X=T.next()){D.index>M?(H=D,D=null):H=D.sibling;var Y=g(w,D,X.value,A);if(Y===null){D===null&&(D=H);break}t&&D&&Y.alternate===null&&e(w,D),b=s(Y,b,M),O===null?P=Y:O.sibling=Y,O=Y,D=H}if(X.done)return r(w,D),nt&&js(w,M),P;if(D===null){for(;!X.done;M++,X=T.next())X=p(w,X.value,A),X!==null&&(b=s(X,b,M),O===null?P=X:O.sibling=X,O=X);return nt&&js(w,M),P}for(D=n(w,D);!X.done;M++,X=T.next())X=v(D,w,M,X.value,A),X!==null&&(t&&X.alternate!==null&&D.delete(X.key===null?M:X.key),b=s(X,b,M),O===null?P=X:O.sibling=X,O=X);return t&&D.forEach(function(ie){return e(w,ie)}),nt&&js(w,M),P}function E(w,b,T,A){if(typeof T=="object"&&T!==null&&T.type===Xo&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case mc:e:{for(var P=T.key,O=b;O!==null;){if(O.key===P){if(P=T.type,P===Xo){if(O.tag===7){r(w,O.sibling),b=i(O,T.props.children),b.return=w,w=b;break e}}else if(O.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===es&&Z1(P)===O.type){r(w,O.sibling),b=i(O,T.props),b.ref=ol(w,O,T),b.return=w,w=b;break e}r(w,O);break}else e(w,O);O=O.sibling}T.type===Xo?(b=to(T.props.children,w.mode,A,T.key),b.return=w,w=b):(A=yh(T.type,T.key,T.props,null,w.mode,A),A.ref=ol(w,b,T),A.return=w,w=A)}return o(w);case Wo:e:{for(O=T.key;b!==null;){if(b.key===O)if(b.tag===4&&b.stateNode.containerInfo===T.containerInfo&&b.stateNode.implementation===T.implementation){r(w,b.sibling),b=i(b,T.children||[]),b.return=w,w=b;break e}else{r(w,b);break}else e(w,b);b=b.sibling}b=Hp(T,w.mode,A),b.return=w,w=b}return o(w);case es:return O=T._init,E(w,b,O(T._payload),A)}if(vl(T))return x(w,b,T,A);if(tl(T))return S(w,b,T,A);Cc(w,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,b!==null&&b.tag===6?(r(w,b.sibling),b=i(b,T),b.return=w,w=b):(r(w,b),b=jp(T,w.mode,A),b.return=w,w=b),o(w)):r(w,b)}return E}var ba=A2(!0),P2=A2(!1),_u={},ti=Es(_u),Zl=Es(_u),ql=Es(_u);function Zs(t){if(t===_u)throw Error(Z(174));return t}function z0(t,e){switch(Ye(ql,e),Ye(Zl,t),Ye(ti,_u),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fm(e,t)}qe(ti),Ye(ti,e)}function wa(){qe(ti),qe(Zl),qe(ql)}function I2(t){Zs(ql.current);var e=Zs(ti.current),r=Fm(e,t.type);e!==r&&(Ye(Zl,t),Ye(ti,r))}function G0(t){Zl.current===t&&(qe(ti),qe(Zl))}var at=Es(0);function Vh(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fp=[];function j0(){for(var t=0;t<Fp.length;t++)Fp[t]._workInProgressVersionPrimary=null;Fp.length=0}var dh=Li.ReactCurrentDispatcher,Lp=Li.ReactCurrentBatchConfig,so=0,ut=null,Pt=null,Ft=null,Wh=!1,Nl=!1,Jl=0,R3=0;function qt(){throw Error(Z(321))}function H0(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Dn(t[r],e[r]))return!1;return!0}function $0(t,e,r,n,i,s){if(so=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dh.current=t===null||t.memoizedState===null?N3:O3,t=r(n,i),Nl){s=0;do{if(Nl=!1,Jl=0,25<=s)throw Error(Z(301));s+=1,Ft=Pt=null,e.updateQueue=null,dh.current=F3,t=r(n,i)}while(Nl)}if(dh.current=Xh,e=Pt!==null&&Pt.next!==null,so=0,Ft=Pt=ut=null,Wh=!1,e)throw Error(Z(300));return t}function V0(){var t=Jl!==0;return Jl=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?ut.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function on(){if(Pt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ft===null?ut.memoizedState:Ft.next;if(e!==null)Ft=e,Pt=t;else{if(t===null)throw Error(Z(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ft===null?ut.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function eu(t,e){return typeof e=="function"?e(t):e}function Bp(t){var e=on(),r=e.queue;if(r===null)throw Error(Z(311));r.lastRenderedReducer=t;var n=Pt,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var u=o=null,c=null,h=s;do{var f=h.lane;if((so&f)===f)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),n=h.hasEagerState?h.eagerState:t(n,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(u=c=p,o=n):c=c.next=p,ut.lanes|=f,oo|=f}h=h.next}while(h!==null&&h!==s);c===null?o=n:c.next=u,Dn(n,e.memoizedState)||(xr=!0),e.memoizedState=n,e.baseState=o,e.baseQueue=c,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do s=i.lane,ut.lanes|=s,oo|=s,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Up(t){var e=on(),r=e.queue;if(r===null)throw Error(Z(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,s=e.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Dn(s,e.memoizedState)||(xr=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),r.lastRenderedState=s}return[s,n]}function R2(){}function k2(t,e){var r=ut,n=on(),i=e(),s=!Dn(n.memoizedState,i);if(s&&(n.memoizedState=i,xr=!0),n=n.queue,W0(N2.bind(null,r,n,t),[t]),n.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(r.flags|=2048,tu(9,D2.bind(null,r,n,i,e),void 0,null),Bt===null)throw Error(Z(349));(so&30)!==0||M2(r,e,i)}return i}function M2(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function D2(t,e,r,n){e.value=r,e.getSnapshot=n,O2(e)&&F2(t)}function N2(t,e,r){return r(function(){O2(e)&&F2(t)})}function O2(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Dn(t,r)}catch{return!0}}function F2(t){var e=Di(t,1);e!==null&&In(e,t,1,-1)}function q1(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eu,lastRenderedState:t},e.queue=t,t=t.dispatch=D3.bind(null,ut,t),[e.memoizedState,t]}function tu(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function L2(){return on().memoizedState}function fh(t,e,r,n){var i=Yn();ut.flags|=t,i.memoizedState=tu(1|e,r,void 0,n===void 0?null:n)}function Ed(t,e,r,n){var i=on();n=n===void 0?null:n;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,n!==null&&H0(n,o.deps)){i.memoizedState=tu(e,r,s,n);return}}ut.flags|=t,i.memoizedState=tu(1|e,r,s,n)}function J1(t,e){return fh(8390656,8,t,e)}function W0(t,e){return Ed(2048,8,t,e)}function B2(t,e){return Ed(4,2,t,e)}function U2(t,e){return Ed(4,4,t,e)}function z2(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function G2(t,e,r){return r=r!=null?r.concat([t]):null,Ed(4,4,z2.bind(null,e,t),r)}function X0(){}function j2(t,e){var r=on();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&H0(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function H2(t,e){var r=on();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&H0(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function $2(t,e,r){return(so&21)===0?(t.baseState&&(t.baseState=!1,xr=!0),t.memoizedState=r):(Dn(r,e)||(r=XT(),ut.lanes|=r,oo|=r,t.baseState=!0),e)}function k3(t,e){var r=$e;$e=r!==0&&4>r?r:4,t(!0);var n=Lp.transition;Lp.transition={};try{t(!1),e()}finally{$e=r,Lp.transition=n}}function V2(){return on().memoizedState}function M3(t,e,r){var n=ms(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},W2(t))X2(e,r);else if(r=w2(t,e,r,n),r!==null){var i=cr();In(r,t,n,i),Y2(r,e,n)}}function D3(t,e,r){var n=ms(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(W2(t))X2(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,u=s(o,r);if(i.hasEagerState=!0,i.eagerState=u,Dn(u,o)){var c=e.interleaved;c===null?(i.next=i,B0(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}r=w2(t,e,i,n),r!==null&&(i=cr(),In(r,t,n,i),Y2(r,e,n))}}function W2(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function X2(t,e){Nl=Wh=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Y2(t,e,r){if((r&4194240)!==0){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,S0(t,r)}}var Xh={readContext:sn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},N3={readContext:sn,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:J1,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,fh(4194308,4,z2.bind(null,e,t),r)},useLayoutEffect:function(t,e){return fh(4194308,4,t,e)},useInsertionEffect:function(t,e){return fh(4,2,t,e)},useMemo:function(t,e){var r=Yn();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=Yn();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=M3.bind(null,ut,t),[n.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:q1,useDebugValue:X0,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=q1(!1),e=t[0];return t=k3.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=ut,i=Yn();if(nt){if(r===void 0)throw Error(Z(407));r=r()}else{if(r=e(),Bt===null)throw Error(Z(349));(so&30)!==0||M2(n,e,r)}i.memoizedState=r;var s={value:r,getSnapshot:e};return i.queue=s,J1(N2.bind(null,n,s,t),[t]),n.flags|=2048,tu(9,D2.bind(null,n,s,r,e),void 0,null),r},useId:function(){var t=Yn(),e=Bt.identifierPrefix;if(nt){var r=Si,n=wi;r=(n&~(1<<32-Pn(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=Jl++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=R3++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},O3={readContext:sn,useCallback:j2,useContext:sn,useEffect:W0,useImperativeHandle:G2,useInsertionEffect:B2,useLayoutEffect:U2,useMemo:H2,useReducer:Bp,useRef:L2,useState:function(){return Bp(eu)},useDebugValue:X0,useDeferredValue:function(t){var e=on();return $2(e,Pt.memoizedState,t)},useTransition:function(){var t=Bp(eu)[0],e=on().memoizedState;return[t,e]},useMutableSource:R2,useSyncExternalStore:k2,useId:V2,unstable_isNewReconciler:!1},F3={readContext:sn,useCallback:j2,useContext:sn,useEffect:W0,useImperativeHandle:G2,useInsertionEffect:B2,useLayoutEffect:U2,useMemo:H2,useReducer:Up,useRef:L2,useState:function(){return Up(eu)},useDebugValue:X0,useDeferredValue:function(t){var e=on();return Pt===null?e.memoizedState=t:$2(e,Pt.memoizedState,t)},useTransition:function(){var t=Up(eu)[0],e=on().memoizedState;return[t,e]},useMutableSource:R2,useSyncExternalStore:k2,useId:V2,unstable_isNewReconciler:!1};function Sa(t,e){try{var r="",n=e;do r+=cC(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zp(t,e,r){return{value:t,source:null,stack:r!=null?r:null,digest:e!=null?e:null}}function sg(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var L3=typeof WeakMap=="function"?WeakMap:Map;function K2(t,e,r){r=Ci(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Kh||(Kh=!0,mg=n),sg(t,e)},r}function Q2(t,e,r){r=Ci(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){sg(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){sg(t,e),typeof n!="function"&&(ps===null?ps=new Set([this]):ps.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function ex(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new L3;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=Z3.bind(null,t,e,r),e.then(t,t))}function tx(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rx(t,e,r,n,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Ci(-1,1),e.tag=2,fs(r,e,1))),r.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var B3=Li.ReactCurrentOwner,xr=!1;function ar(t,e,r,n){e.child=t===null?P2(e,null,r,n):ba(e,t.child,r,n)}function nx(t,e,r,n,i){r=r.render;var s=e.ref;return ha(e,i),n=$0(t,e,r,n,s,i),r=V0(),t!==null&&!xr?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ni(t,e,i)):(nt&&r&&M0(e),e.flags|=1,ar(t,e,n,i),e.child)}function ix(t,e,r,n,i){if(t===null){var s=r.type;return typeof s=="function"&&!ty(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=s,Z2(t,e,s,n,i)):(t=yh(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:Xl,r(o,n)&&t.ref===e.ref)return Ni(t,e,i)}return e.flags|=1,t=gs(s,n),t.ref=e.ref,t.return=e,e.child=t}function Z2(t,e,r,n,i){if(t!==null){var s=t.memoizedProps;if(Xl(s,n)&&t.ref===e.ref)if(xr=!1,e.pendingProps=n=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(xr=!0);else return e.lanes=t.lanes,Ni(t,e,i)}return og(t,e,r,n,i)}function q2(t,e,r){var n=e.pendingProps,i=n.children,s=t!==null?t.memoizedState:null;if(n.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(na,kr),kr|=r;else{if((r&1073741824)===0)return t=s!==null?s.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ye(na,kr),kr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,Ye(na,kr),kr|=n}else s!==null?(n=s.baseLanes|r,e.memoizedState=null):n=r,Ye(na,kr),kr|=n;return ar(t,e,i,r),e.child}function J2(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function og(t,e,r,n,i){var s=Tr(r)?no:ir.current;return s=_a(e,s),ha(e,i),r=$0(t,e,r,n,s,i),n=V0(),t!==null&&!xr?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ni(t,e,i)):(nt&&n&&M0(e),e.flags|=1,ar(t,e,r,i),e.child)}function sx(t,e,r,n,i){if(Tr(r)){var s=!0;Uh(e)}else s=!1;if(ha(e,i),e.stateNode===null)ph(t,e),C2(e,r,n),ig(e,r,n,i),n=!0;else if(t===null){var o=e.stateNode,u=e.memoizedProps;o.props=u;var c=o.context,h=r.contextType;typeof h=="object"&&h!==null?h=sn(h):(h=Tr(r)?no:ir.current,h=_a(e,h));var f=r.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==n||c!==h)&&Q1(e,o,n,h),ts=!1;var g=e.memoizedState;o.state=g,$h(e,n,o,i),c=e.memoizedState,u!==n||g!==c||_r.current||ts?(typeof f=="function"&&(ng(e,r,f,n),c=e.memoizedState),(u=ts||K1(e,r,u,n,g,c,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=c),o.props=n,o.state=c,o.context=h,n=u):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{o=e.stateNode,S2(t,e),u=e.memoizedProps,h=e.type===e.elementType?u:vn(e.type,u),o.props=h,p=e.pendingProps,g=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=sn(c):(c=Tr(r)?no:ir.current,c=_a(e,c));var v=r.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==p||g!==c)&&Q1(e,o,n,c),ts=!1,g=e.memoizedState,o.state=g,$h(e,n,o,i);var x=e.memoizedState;u!==p||g!==x||_r.current||ts?(typeof v=="function"&&(ng(e,r,v,n),x=e.memoizedState),(h=ts||K1(e,r,h,n,g,x,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,x,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=x),o.props=n,o.state=x,o.context=c,n=h):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),n=!1)}return ag(t,e,r,n,s,i)}function ag(t,e,r,n,i,s){J2(t,e);var o=(e.flags&128)!==0;if(!n&&!o)return i&&$1(e,r,!1),Ni(t,e,s);n=e.stateNode,B3.current=e;var u=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&o?(e.child=ba(e,t.child,null,s),e.child=ba(e,null,u,s)):ar(t,e,u,s),e.memoizedState=n.state,i&&$1(e,r,!0),e.child}function eb(t){var e=t.stateNode;e.pendingContext?H1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&H1(t,e.context,!1),z0(t,e.containerInfo)}function ox(t,e,r,n,i){return Ta(),N0(i),e.flags|=256,ar(t,e,r,n),e.child}var lg={dehydrated:null,treeContext:null,retryLane:0};function ug(t){return{baseLanes:t,cachePool:null,transitions:null}}function tb(t,e,r){var n=e.pendingProps,i=at.current,s=!1,o=(e.flags&128)!==0,u;if((u=o)||(u=t!==null&&t.memoizedState===null?!1:(i&2)!==0),u?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ye(at,i&1),t===null)return tg(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=n.children,t=n.fallback,s?(n=e.mode,s=e.child,o={mode:"hidden",children:o},(n&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pd(o,n,0,null),t=to(t,n,r,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ug(r),e.memoizedState=lg,t):Y0(e,o));if(i=t.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return U3(t,e,o,n,u,i,r);if(s){s=n.fallback,o=e.mode,i=t.child,u=i.sibling;var c={mode:"hidden",children:n.children};return(o&1)===0&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=c,e.deletions=null):(n=gs(i,c),n.subtreeFlags=i.subtreeFlags&14680064),u!==null?s=gs(u,s):(s=to(s,o,r,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,n=s,s=e.child,o=t.child.memoizedState,o=o===null?ug(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~r,e.memoizedState=lg,n}return s=t.child,t=s.sibling,n=gs(s,{mode:"visible",children:n.children}),(e.mode&1)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function Y0(t,e){return e=Pd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ac(t,e,r,n){return n!==null&&N0(n),ba(e,t.child,null,r),t=Y0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function U3(t,e,r,n,i,s,o){if(r)return e.flags&256?(e.flags&=-257,n=zp(Error(Z(422))),Ac(t,e,o,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=n.fallback,i=e.mode,n=Pd({mode:"visible",children:n.children},i,0,null),s=to(s,i,o,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,(e.mode&1)!==0&&ba(e,t.child,null,o),e.child.memoizedState=ug(o),e.memoizedState=lg,s);if((e.mode&1)===0)return Ac(t,e,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var u=n.dgst;return n=u,s=Error(Z(419)),n=zp(s,n,void 0),Ac(t,e,o,n)}if(u=(o&t.childLanes)!==0,xr||u){if(n=Bt,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Di(t,i),In(n,t,i,-1))}return ey(),n=zp(Error(Z(421))),Ac(t,e,o,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=q3.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mr=ds(i.nextSibling),Dr=e,nt=!0,Tn=null,t!==null&&(Qr[Zr++]=wi,Qr[Zr++]=Si,Qr[Zr++]=io,wi=t.id,Si=t.overflow,io=e),e=Y0(e,n.children),e.flags|=4096,e)}function ax(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),rg(t.return,e,r)}function Gp(t,e,r,n,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function rb(t,e,r){var n=e.pendingProps,i=n.revealOrder,s=n.tail;if(ar(t,e,n.children,r),n=at.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ax(t,r,e);else if(t.tag===19)ax(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(Ye(at,n),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Vh(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),Gp(e,!1,i,r,s);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vh(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Gp(e,!0,r,null,s);break;case"together":Gp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ph(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),oo|=e.lanes,(r&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,r=gs(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=gs(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function z3(t,e,r){switch(e.tag){case 3:eb(e),Ta();break;case 5:I2(e);break;case 1:Tr(e.type)&&Uh(e);break;case 4:z0(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;Ye(jh,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(Ye(at,at.current&1),e.flags|=128,null):(r&e.child.childLanes)!==0?tb(t,e,r):(Ye(at,at.current&1),t=Ni(t,e,r),t!==null?t.sibling:null);Ye(at,at.current&1);break;case 19:if(n=(r&e.childLanes)!==0,(t.flags&128)!==0){if(n)return rb(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ye(at,at.current),n)break;return null;case 22:case 23:return e.lanes=0,q2(t,e,r)}return Ni(t,e,r)}var nb,cg,ib,sb;nb=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};cg=function(){};ib=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,Zs(ti.current);var s=null;switch(r){case"input":i=Mm(t,i),n=Mm(t,n),s=[];break;case"select":i=ct({},i,{value:void 0}),n=ct({},n,{value:void 0}),s=[];break;case"textarea":i=Om(t,i),n=Om(t,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Lh)}Lm(r,n);var o;r=null;for(h in i)if(!n.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var u=i[h];for(o in u)u.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(zl.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in n){var c=n[h];if(u=i!=null?i[h]:void 0,n.hasOwnProperty(h)&&c!==u&&(c!=null||u!=null))if(h==="style")if(u){for(o in u)!u.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&u[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(s||(s=[]),s.push(h,r)),r=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(s=s||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(zl.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&Ze("scroll",t),s||u===c||(s=[])):(s=s||[]).push(h,c))}r&&(s=s||[]).push("style",r);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};sb=function(t,e,r,n){r!==n&&(e.flags|=4)};function al(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function G3(t,e,r){var n=e.pendingProps;switch(D0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return Tr(e.type)&&Bh(),Jt(e),null;case 3:return n=e.stateNode,wa(),qe(_r),qe(ir),j0(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Ec(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Tn!==null&&(vg(Tn),Tn=null))),cg(t,e),Jt(e),null;case 5:G0(e);var i=Zs(ql.current);if(r=e.type,t!==null&&e.stateNode!=null)ib(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(Z(166));return Jt(e),null}if(t=Zs(ti.current),Ec(e)){n=e.stateNode,r=e.type;var s=e.memoizedProps;switch(n[Zn]=e,n[Ql]=s,t=(e.mode&1)!==0,r){case"dialog":Ze("cancel",n),Ze("close",n);break;case"iframe":case"object":case"embed":Ze("load",n);break;case"video":case"audio":for(i=0;i<_l.length;i++)Ze(_l[i],n);break;case"source":Ze("error",n);break;case"img":case"image":case"link":Ze("error",n),Ze("load",n);break;case"details":Ze("toggle",n);break;case"input":g1(n,s),Ze("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},Ze("invalid",n);break;case"textarea":v1(n,s),Ze("invalid",n)}Lm(r,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="children"?typeof u=="string"?n.textContent!==u&&(s.suppressHydrationWarning!==!0&&Sc(n.textContent,u,t),i=["children",u]):typeof u=="number"&&n.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&Sc(n.textContent,u,t),i=["children",""+u]):zl.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&Ze("scroll",n)}switch(r){case"input":gc(n),y1(n,s,!0);break;case"textarea":gc(n),x1(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Lh)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=MT(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=o.createElement(r,{is:n.is}):(t=o.createElement(r),r==="select"&&(o=t,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):t=o.createElementNS(t,r),t[Zn]=e,t[Ql]=n,nb(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bm(r,n),r){case"dialog":Ze("cancel",t),Ze("close",t),i=n;break;case"iframe":case"object":case"embed":Ze("load",t),i=n;break;case"video":case"audio":for(i=0;i<_l.length;i++)Ze(_l[i],t);i=n;break;case"source":Ze("error",t),i=n;break;case"img":case"image":case"link":Ze("error",t),Ze("load",t),i=n;break;case"details":Ze("toggle",t),i=n;break;case"input":g1(t,n),i=Mm(t,n),Ze("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=ct({},n,{value:void 0}),Ze("invalid",t);break;case"textarea":v1(t,n),i=Om(t,n),Ze("invalid",t);break;default:i=n}Lm(r,i),u=i;for(s in u)if(u.hasOwnProperty(s)){var c=u[s];s==="style"?OT(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&DT(t,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Gl(t,c):typeof c=="number"&&Gl(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zl.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ze("scroll",t):c!=null&&v0(t,s,c,o))}switch(r){case"input":gc(t),y1(t,n,!1);break;case"textarea":gc(t),x1(t);break;case"option":n.value!=null&&t.setAttribute("value",""+vs(n.value));break;case"select":t.multiple=!!n.multiple,s=n.value,s!=null?aa(t,!!n.multiple,s,!1):n.defaultValue!=null&&aa(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Lh)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)sb(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(Z(166));if(r=Zs(ql.current),Zs(ti.current),Ec(e)){if(n=e.stateNode,r=e.memoizedProps,n[Zn]=e,(s=n.nodeValue!==r)&&(t=Dr,t!==null))switch(t.tag){case 3:Sc(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sc(n.nodeValue,r,(t.mode&1)!==0)}s&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Zn]=e,e.stateNode=n}return Jt(e),null;case 13:if(qe(at),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nt&&Mr!==null&&(e.mode&1)!==0&&(e.flags&128)===0)b2(),Ta(),e.flags|=98560,s=!1;else if(s=Ec(e),n!==null&&n.dehydrated!==null){if(t===null){if(!s)throw Error(Z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[Zn]=e}else Ta(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else Tn!==null&&(vg(Tn),Tn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(at.current&1)!==0?Rt===0&&(Rt=3):ey())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return wa(),cg(t,e),t===null&&Yl(e.stateNode.containerInfo),Jt(e),null;case 10:return L0(e.type._context),Jt(e),null;case 17:return Tr(e.type)&&Bh(),Jt(e),null;case 19:if(qe(at),s=e.memoizedState,s===null)return Jt(e),null;if(n=(e.flags&128)!==0,o=s.rendering,o===null)if(n)al(s,!1);else{if(Rt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Vh(t),o!==null){for(e.flags|=128,al(s,!1),n=o.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)s=r,t=n,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Ye(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Ea&&(e.flags|=128,n=!0,al(s,!1),e.lanes=4194304)}else{if(!n)if(t=Vh(o),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),al(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!nt)return Jt(e),null}else 2*_t()-s.renderingStartTime>Ea&&r!==1073741824&&(e.flags|=128,n=!0,al(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(r=s.last,r!==null?r.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,r=at.current,Ye(at,n?r&1|2:r&1),e):(Jt(e),null);case 22:case 23:return J0(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&(e.mode&1)!==0?(kr&1073741824)!==0&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function j3(t,e){switch(D0(e),e.tag){case 1:return Tr(e.type)&&Bh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wa(),qe(_r),qe(ir),j0(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return G0(e),null;case 13:if(qe(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));Ta()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return qe(at),null;case 4:return wa(),null;case 10:return L0(e.type._context),null;case 22:case 23:return J0(),null;case 24:return null;default:return null}}var Pc=!1,tr=!1,H3=typeof WeakSet=="function"?WeakSet:Set,le=null;function ra(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ft(t,e,n)}else r.current=null}function hg(t,e,r){try{r()}catch(n){ft(t,e,n)}}var lx=!1;function $3(t,e){if(Ym=Nh,t=u2(),k0(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,u=-1,c=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var v;p!==r||i!==0&&p.nodeType!==3||(u=o+i),p!==s||n!==0&&p.nodeType!==3||(c=o+n),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===t)break t;if(g===r&&++h===i&&(u=o),g===s&&++f===n&&(c=o),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}r=u===-1||c===-1?null:{start:u,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Km={focusedElem:t,selectionRange:r},Nh=!1,le=e;le!==null;)if(e=le,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,le=t;else for(;le!==null;){e=le;try{var x=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,E=x.memoizedState,w=e.stateNode,b=w.getSnapshotBeforeUpdate(e.elementType===e.type?S:vn(e.type,S),E);w.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(A){ft(e,e.return,A)}if(t=e.sibling,t!==null){t.return=e.return,le=t;break}le=e.return}return x=lx,lx=!1,x}function Ol(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&hg(e,r,s)}i=i.next}while(i!==n)}}function Cd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function dg(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function ob(t){var e=t.alternate;e!==null&&(t.alternate=null,ob(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[Ql],delete e[qm],delete e[C3],delete e[A3])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ab(t){return t.tag===5||t.tag===3||t.tag===4}function ux(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ab(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fg(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Lh));else if(n!==4&&(t=t.child,t!==null))for(fg(t,e,r),t=t.sibling;t!==null;)fg(t,e,r),t=t.sibling}function pg(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(pg(t,e,r),t=t.sibling;t!==null;)pg(t,e,r),t=t.sibling}var Ht=null,_n=!1;function Qi(t,e,r){for(r=r.child;r!==null;)lb(t,e,r),r=r.sibling}function lb(t,e,r){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(vd,r)}catch{}switch(r.tag){case 5:tr||ra(r,e);case 6:var n=Ht,i=_n;Ht=null,Qi(t,e,r),Ht=n,_n=i,Ht!==null&&(_n?(t=Ht,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Ht.removeChild(r.stateNode));break;case 18:Ht!==null&&(_n?(t=Ht,r=r.stateNode,t.nodeType===8?Np(t.parentNode,r):t.nodeType===1&&Np(t,r),Vl(t)):Np(Ht,r.stateNode));break;case 4:n=Ht,i=_n,Ht=r.stateNode.containerInfo,_n=!0,Qi(t,e,r),Ht=n,_n=i;break;case 0:case 11:case 14:case 15:if(!tr&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&hg(r,e,o),i=i.next}while(i!==n)}Qi(t,e,r);break;case 1:if(!tr&&(ra(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(u){ft(r,e,u)}Qi(t,e,r);break;case 21:Qi(t,e,r);break;case 22:r.mode&1?(tr=(n=tr)||r.memoizedState!==null,Qi(t,e,r),tr=n):Qi(t,e,r);break;default:Qi(t,e,r)}}function cx(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new H3),e.forEach(function(n){var i=J3.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function dn(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=t,o=e,u=o;e:for(;u!==null;){switch(u.tag){case 5:Ht=u.stateNode,_n=!1;break e;case 3:Ht=u.stateNode.containerInfo,_n=!0;break e;case 4:Ht=u.stateNode.containerInfo,_n=!0;break e}u=u.return}if(Ht===null)throw Error(Z(160));lb(s,o,i),Ht=null,_n=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(h){ft(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ub(e,t),e=e.sibling}function ub(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dn(e,t),Vn(t),n&4){try{Ol(3,t,t.return),Cd(3,t)}catch(S){ft(t,t.return,S)}try{Ol(5,t,t.return)}catch(S){ft(t,t.return,S)}}break;case 1:dn(e,t),Vn(t),n&512&&r!==null&&ra(r,r.return);break;case 5:if(dn(e,t),Vn(t),n&512&&r!==null&&ra(r,r.return),t.flags&32){var i=t.stateNode;try{Gl(i,"")}catch(S){ft(t,t.return,S)}}if(n&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=r!==null?r.memoizedProps:s,u=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&RT(i,s),Bm(u,o);var h=Bm(u,s);for(o=0;o<c.length;o+=2){var f=c[o],p=c[o+1];f==="style"?OT(i,p):f==="dangerouslySetInnerHTML"?DT(i,p):f==="children"?Gl(i,p):v0(i,f,p,h)}switch(u){case"input":Dm(i,s);break;case"textarea":kT(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?aa(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?aa(i,!!s.multiple,s.defaultValue,!0):aa(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ql]=s}catch(S){ft(t,t.return,S)}}break;case 6:if(dn(e,t),Vn(t),n&4){if(t.stateNode===null)throw Error(Z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){ft(t,t.return,S)}}break;case 3:if(dn(e,t),Vn(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Vl(e.containerInfo)}catch(S){ft(t,t.return,S)}break;case 4:dn(e,t),Vn(t);break;case 13:dn(e,t),Vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Z0=_t())),n&4&&cx(t);break;case 22:if(f=r!==null&&r.memoizedState!==null,t.mode&1?(tr=(h=tr)||f,dn(e,t),tr=h):dn(e,t),Vn(t),n&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&(t.mode&1)!==0)for(le=t,f=t.child;f!==null;){for(p=le=f;le!==null;){switch(g=le,v=g.child,g.tag){case 0:case 11:case 14:case 15:Ol(4,g,g.return);break;case 1:ra(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){n=g,r=g.return;try{e=n,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){ft(n,r,S)}}break;case 5:ra(g,g.return);break;case 22:if(g.memoizedState!==null){dx(p);continue}}v!==null?(v.return=g,le=v):dx(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=NT("display",o))}catch(S){ft(t,t.return,S)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(S){ft(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dn(e,t),Vn(t),n&4&&cx(t);break;case 21:break;default:dn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(ab(r)){var n=r;break e}r=r.return}throw Error(Z(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Gl(i,""),n.flags&=-33);var s=ux(t);pg(t,s,i);break;case 3:case 4:var o=n.stateNode.containerInfo,u=ux(t);fg(t,u,o);break;default:throw Error(Z(161))}}catch(c){ft(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function V3(t,e,r){le=t,cb(t)}function cb(t,e,r){for(var n=(t.mode&1)!==0;le!==null;){var i=le,s=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||Pc;if(!o){var u=i.alternate,c=u!==null&&u.memoizedState!==null||tr;u=Pc;var h=tr;if(Pc=o,(tr=c)&&!h)for(le=i;le!==null;)o=le,c=o.child,o.tag===22&&o.memoizedState!==null?fx(i):c!==null?(c.return=o,le=c):fx(i);for(;s!==null;)le=s,cb(s),s=s.sibling;le=i,Pc=u,tr=h}hx(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,le=s):hx(t)}}function hx(t){for(;le!==null;){var e=le;if((e.flags&8772)!==0){var r=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:tr||Cd(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!tr)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:vn(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Y1(e,s,n);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Y1(e,o,r)}break;case 5:var u=e.stateNode;if(r===null&&e.flags&4){r=u;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Vl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}tr||e.flags&512&&dg(e)}catch(g){ft(e,e.return,g)}}if(e===t){le=null;break}if(r=e.sibling,r!==null){r.return=e.return,le=r;break}le=e.return}}function dx(t){for(;le!==null;){var e=le;if(e===t){le=null;break}var r=e.sibling;if(r!==null){r.return=e.return,le=r;break}le=e.return}}function fx(t){for(;le!==null;){var e=le;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Cd(4,e)}catch(c){ft(e,r,c)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(c){ft(e,i,c)}}var s=e.return;try{dg(e)}catch(c){ft(e,s,c)}break;case 5:var o=e.return;try{dg(e)}catch(c){ft(e,o,c)}}}catch(c){ft(e,e.return,c)}if(e===t){le=null;break}var u=e.sibling;if(u!==null){u.return=e.return,le=u;break}le=e.return}}var W3=Math.ceil,Yh=Li.ReactCurrentDispatcher,K0=Li.ReactCurrentOwner,rn=Li.ReactCurrentBatchConfig,De=0,Bt=null,St=null,Wt=0,kr=0,na=Es(0),Rt=0,ru=null,oo=0,Ad=0,Q0=0,Fl=null,vr=null,Z0=0,Ea=1/0,vi=null,Kh=!1,mg=null,ps=null,Ic=!1,as=null,Qh=0,Ll=0,gg=null,mh=-1,gh=0;function cr(){return(De&6)!==0?_t():mh!==-1?mh:mh=_t()}function ms(t){return(t.mode&1)===0?1:(De&2)!==0&&Wt!==0?Wt&-Wt:I3.transition!==null?(gh===0&&(gh=XT()),gh):(t=$e,t!==0||(t=window.event,t=t===void 0?16:e2(t.type)),t)}function In(t,e,r,n){if(50<Ll)throw Ll=0,gg=null,Error(Z(185));yu(t,r,n),((De&2)===0||t!==Bt)&&(t===Bt&&((De&2)===0&&(Ad|=r),Rt===4&&is(t,Wt)),br(t,n),r===1&&De===0&&(e.mode&1)===0&&(Ea=_t()+500,wd&&Cs()))}function br(t,e){var r=t.callbackNode;IC(t,e);var n=Dh(t,t===Bt?Wt:0);if(n===0)r!==null&&b1(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&b1(r),e===1)t.tag===0?P3(px.bind(null,t)):x2(px.bind(null,t)),S3(function(){(De&6)===0&&Cs()}),r=null;else{switch(YT(n)){case 1:r=w0;break;case 4:r=VT;break;case 16:r=Mh;break;case 536870912:r=WT;break;default:r=Mh}r=vb(r,hb.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function hb(t,e){if(mh=-1,gh=0,(De&6)!==0)throw Error(Z(327));var r=t.callbackNode;if(da()&&t.callbackNode!==r)return null;var n=Dh(t,t===Bt?Wt:0);if(n===0)return null;if((n&30)!==0||(n&t.expiredLanes)!==0||e)e=Zh(t,n);else{e=n;var i=De;De|=2;var s=fb();(Bt!==t||Wt!==e)&&(vi=null,Ea=_t()+500,eo(t,e));do try{K3();break}catch(u){db(t,u)}while(1);F0(),Yh.current=s,De=i,St!==null?e=0:(Bt=null,Wt=0,e=Rt)}if(e!==0){if(e===2&&(i=Hm(t),i!==0&&(n=i,e=yg(t,i))),e===1)throw r=ru,eo(t,0),is(t,n),br(t,_t()),r;if(e===6)is(t,n);else{if(i=t.current.alternate,(n&30)===0&&!X3(i)&&(e=Zh(t,n),e===2&&(s=Hm(t),s!==0&&(n=s,e=yg(t,s))),e===1))throw r=ru,eo(t,0),is(t,n),br(t,_t()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(Z(345));case 2:Hs(t,vr,vi);break;case 3:if(is(t,n),(n&130023424)===n&&(e=Z0+500-_t(),10<e)){if(Dh(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){cr(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Zm(Hs.bind(null,t,vr,vi),e);break}Hs(t,vr,vi);break;case 4:if(is(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var o=31-Pn(n);s=1<<o,o=e[o],o>i&&(i=o),n&=~s}if(n=i,n=_t()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*W3(n/1960))-n,10<n){t.timeoutHandle=Zm(Hs.bind(null,t,vr,vi),n);break}Hs(t,vr,vi);break;case 5:Hs(t,vr,vi);break;default:throw Error(Z(329))}}}return br(t,_t()),t.callbackNode===r?hb.bind(null,t):null}function yg(t,e){var r=Fl;return t.current.memoizedState.isDehydrated&&(eo(t,e).flags|=256),t=Zh(t,e),t!==2&&(e=vr,vr=r,e!==null&&vg(e)),t}function vg(t){vr===null?vr=t:vr.push.apply(vr,t)}function X3(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!Dn(s(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function is(t,e){for(e&=~Q0,e&=~Ad,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Pn(e),n=1<<r;t[r]=-1,e&=~n}}function px(t){if((De&6)!==0)throw Error(Z(327));da();var e=Dh(t,0);if((e&1)===0)return br(t,_t()),null;var r=Zh(t,e);if(t.tag!==0&&r===2){var n=Hm(t);n!==0&&(e=n,r=yg(t,n))}if(r===1)throw r=ru,eo(t,0),is(t,e),br(t,_t()),r;if(r===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hs(t,vr,vi),br(t,_t()),null}function q0(t,e){var r=De;De|=1;try{return t(e)}finally{De=r,De===0&&(Ea=_t()+500,wd&&Cs())}}function ao(t){as!==null&&as.tag===0&&(De&6)===0&&da();var e=De;De|=1;var r=rn.transition,n=$e;try{if(rn.transition=null,$e=1,t)return t()}finally{$e=n,rn.transition=r,De=e,(De&6)===0&&Cs()}}function J0(){kr=na.current,qe(na)}function eo(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,w3(r)),St!==null)for(r=St.return;r!==null;){var n=r;switch(D0(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Bh();break;case 3:wa(),qe(_r),qe(ir),j0();break;case 5:G0(n);break;case 4:wa();break;case 13:qe(at);break;case 19:qe(at);break;case 10:L0(n.type._context);break;case 22:case 23:J0()}r=r.return}if(Bt=t,St=t=gs(t.current,null),Wt=kr=e,Rt=0,ru=null,Q0=Ad=oo=0,vr=Fl=null,Qs!==null){for(e=0;e<Qs.length;e++)if(r=Qs[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var o=s.next;s.next=i,n.next=o}r.pending=n}Qs=null}return t}function db(t,e){do{var r=St;try{if(F0(),dh.current=Xh,Wh){for(var n=ut.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Wh=!1}if(so=0,Ft=Pt=ut=null,Nl=!1,Jl=0,K0.current=null,r===null||r.return===null){Rt=1,ru=e,St=null;break}e:{var s=t,o=r.return,u=r,c=e;if(e=Wt,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,f=u,p=f.tag;if((f.mode&1)===0&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=tx(o);if(v!==null){v.flags&=-257,rx(v,o,u,s,e),v.mode&1&&ex(s,h,e),e=v,c=h;var x=e.updateQueue;if(x===null){var S=new Set;S.add(c),e.updateQueue=S}else x.add(c);break e}else{if((e&1)===0){ex(s,h,e),ey();break e}c=Error(Z(426))}}else if(nt&&u.mode&1){var E=tx(o);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),rx(E,o,u,s,e),N0(Sa(c,u));break e}}s=c=Sa(c,u),Rt!==4&&(Rt=2),Fl===null?Fl=[s]:Fl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=K2(s,c,e);X1(s,w);break e;case 1:u=c;var b=s.type,T=s.stateNode;if((s.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(ps===null||!ps.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var A=Q2(s,u,e);X1(s,A);break e}}s=s.return}while(s!==null)}mb(r)}catch(P){e=P,St===r&&r!==null&&(St=r=r.return);continue}break}while(1)}function fb(){var t=Yh.current;return Yh.current=Xh,t===null?Xh:t}function ey(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Bt===null||(oo&268435455)===0&&(Ad&268435455)===0||is(Bt,Wt)}function Zh(t,e){var r=De;De|=2;var n=fb();(Bt!==t||Wt!==e)&&(vi=null,eo(t,e));do try{Y3();break}catch(i){db(t,i)}while(1);if(F0(),De=r,Yh.current=n,St!==null)throw Error(Z(261));return Bt=null,Wt=0,Rt}function Y3(){for(;St!==null;)pb(St)}function K3(){for(;St!==null&&!_C();)pb(St)}function pb(t){var e=yb(t.alternate,t,kr);t.memoizedProps=t.pendingProps,e===null?mb(t):St=e,K0.current=null}function mb(t){var e=t;do{var r=e.alternate;if(t=e.return,(e.flags&32768)===0){if(r=G3(r,e,kr),r!==null){St=r;return}}else{if(r=j3(r,e),r!==null){r.flags&=32767,St=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,St=null;return}}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Rt===0&&(Rt=5)}function Hs(t,e,r){var n=$e,i=rn.transition;try{rn.transition=null,$e=1,Q3(t,e,r,n)}finally{rn.transition=i,$e=n}return null}function Q3(t,e,r,n){do da();while(as!==null);if((De&6)!==0)throw Error(Z(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(RC(t,s),t===Bt&&(St=Bt=null,Wt=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Ic||(Ic=!0,vb(Mh,function(){return da(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=rn.transition,rn.transition=null;var o=$e;$e=1;var u=De;De|=4,K0.current=null,$3(t,r),ub(r,t),g3(Km),Nh=!!Ym,Km=Ym=null,t.current=r,V3(r),TC(),De=u,$e=o,rn.transition=s}else t.current=r;if(Ic&&(Ic=!1,as=t,Qh=i),s=t.pendingLanes,s===0&&(ps=null),SC(r.stateNode),br(t,_t()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Kh)throw Kh=!1,t=mg,mg=null,t;return(Qh&1)!==0&&t.tag!==0&&da(),s=t.pendingLanes,(s&1)!==0?t===gg?Ll++:(Ll=0,gg=t):Ll=0,Cs(),null}function da(){if(as!==null){var t=YT(Qh),e=rn.transition,r=$e;try{if(rn.transition=null,$e=16>t?16:t,as===null)var n=!1;else{if(t=as,as=null,Qh=0,(De&6)!==0)throw Error(Z(331));var i=De;for(De|=4,le=t.current;le!==null;){var s=le,o=s.child;if((le.flags&16)!==0){var u=s.deletions;if(u!==null){for(var c=0;c<u.length;c++){var h=u[c];for(le=h;le!==null;){var f=le;switch(f.tag){case 0:case 11:case 15:Ol(8,f,s)}var p=f.child;if(p!==null)p.return=f,le=p;else for(;le!==null;){f=le;var g=f.sibling,v=f.return;if(ob(f),f===h){le=null;break}if(g!==null){g.return=v,le=g;break}le=v}}}var x=s.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var E=S.sibling;S.sibling=null,S=E}while(S!==null)}}le=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,le=o;else e:for(;le!==null;){if(s=le,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ol(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,le=w;break e}le=s.return}}var b=t.current;for(le=b;le!==null;){o=le;var T=o.child;if((o.subtreeFlags&2064)!==0&&T!==null)T.return=o,le=T;else e:for(o=b;le!==null;){if(u=le,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Cd(9,u)}}catch(P){ft(u,u.return,P)}if(u===o){le=null;break e}var A=u.sibling;if(A!==null){A.return=u.return,le=A;break e}le=u.return}}if(De=i,Cs(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(vd,t)}catch{}n=!0}return n}finally{$e=r,rn.transition=e}}return!1}function mx(t,e,r){e=Sa(r,e),e=K2(t,e,1),t=fs(t,e,1),e=cr(),t!==null&&(yu(t,1,e),br(t,e))}function ft(t,e,r){if(t.tag===3)mx(t,t,r);else for(;e!==null;){if(e.tag===3){mx(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ps===null||!ps.has(n))){t=Sa(r,t),t=Q2(e,t,1),e=fs(e,t,1),t=cr(),e!==null&&(yu(e,1,t),br(e,t));break}}e=e.return}}function Z3(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=cr(),t.pingedLanes|=t.suspendedLanes&r,Bt===t&&(Wt&r)===r&&(Rt===4||Rt===3&&(Wt&130023424)===Wt&&500>_t()-Z0?eo(t,0):Q0|=r),br(t,e)}function gb(t,e){e===0&&((t.mode&1)===0?e=1:(e=xc,xc<<=1,(xc&130023424)===0&&(xc=4194304)));var r=cr();t=Di(t,e),t!==null&&(yu(t,e,r),br(t,r))}function q3(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),gb(t,r)}function J3(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(Z(314))}n!==null&&n.delete(e),gb(t,r)}var yb;yb=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||_r.current)xr=!0;else{if((t.lanes&r)===0&&(e.flags&128)===0)return xr=!1,z3(t,e,r);xr=(t.flags&131072)!==0}else xr=!1,nt&&(e.flags&1048576)!==0&&_2(e,Gh,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;ph(t,e),t=e.pendingProps;var i=_a(e,ir.current);ha(e,r),i=$0(null,e,n,t,i,r);var s=V0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tr(n)?(s=!0,Uh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,U0(e),i.updater=Sd,e.stateNode=i,i._reactInternals=e,ig(e,n,t,r),e=ag(null,e,n,!0,s,r)):(e.tag=0,nt&&s&&M0(e),ar(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(ph(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=tA(n),t=vn(n,t),i){case 0:e=og(null,e,n,t,r);break e;case 1:e=sx(null,e,n,t,r);break e;case 11:e=nx(null,e,n,t,r);break e;case 14:e=ix(null,e,n,vn(n.type,t),r);break e}throw Error(Z(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:vn(n,i),og(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:vn(n,i),sx(t,e,n,i,r);case 3:e:{if(eb(e),t===null)throw Error(Z(387));n=e.pendingProps,s=e.memoizedState,i=s.element,S2(t,e),$h(e,n,null,r);var o=e.memoizedState;if(n=o.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Sa(Error(Z(423)),e),e=ox(t,e,n,r,i);break e}else if(n!==i){i=Sa(Error(Z(424)),e),e=ox(t,e,n,r,i);break e}else for(Mr=ds(e.stateNode.containerInfo.firstChild),Dr=e,nt=!0,Tn=null,r=P2(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ta(),n===i){e=Ni(t,e,r);break e}ar(t,e,n,r)}e=e.child}return e;case 5:return I2(e),t===null&&tg(e),n=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qm(n,i)?o=null:s!==null&&Qm(n,s)&&(e.flags|=32),J2(t,e),ar(t,e,o,r),e.child;case 6:return t===null&&tg(e),null;case 13:return tb(t,e,r);case 4:return z0(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=ba(e,null,n,r):ar(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:vn(n,i),nx(t,e,n,i,r);case 7:return ar(t,e,e.pendingProps,r),e.child;case 8:return ar(t,e,e.pendingProps.children,r),e.child;case 12:return ar(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ye(jh,n._currentValue),n._currentValue=o,s!==null)if(Dn(s.value,o)){if(s.children===i.children&&!_r.current){e=Ni(t,e,r);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){o=s.child;for(var c=u.firstContext;c!==null;){if(c.context===n){if(s.tag===1){c=Ci(-1,r&-r),c.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?c.next=c:(c.next=f.next,f.next=c),h.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),rg(s.return,r,e),u.lanes|=r;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Z(341));o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),rg(o,r,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ar(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,ha(e,r),i=sn(i),n=n(i),e.flags|=1,ar(t,e,n,r),e.child;case 14:return n=e.type,i=vn(n,e.pendingProps),i=vn(n.type,i),ix(t,e,n,i,r);case 15:return Z2(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:vn(n,i),ph(t,e),e.tag=1,Tr(n)?(t=!0,Uh(e)):t=!1,ha(e,r),C2(e,n,i),ig(e,n,i,r),ag(null,e,n,!0,t,r);case 19:return rb(t,e,r);case 22:return q2(t,e,r)}throw Error(Z(156,e.tag))};function vb(t,e){return $T(t,e)}function eA(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qr(t,e,r,n){return new eA(t,e,r,n)}function ty(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tA(t){if(typeof t=="function")return ty(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_0)return 11;if(t===T0)return 14}return 2}function gs(t,e){var r=t.alternate;return r===null?(r=qr(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function yh(t,e,r,n,i,s){var o=2;if(n=t,typeof t=="function")ty(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xo:return to(r.children,i,s,e);case x0:o=8,i|=8;break;case Pm:return t=qr(12,r,e,i|2),t.elementType=Pm,t.lanes=s,t;case Im:return t=qr(13,r,e,i),t.elementType=Im,t.lanes=s,t;case Rm:return t=qr(19,r,e,i),t.elementType=Rm,t.lanes=s,t;case AT:return Pd(r,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ET:o=10;break e;case CT:o=9;break e;case _0:o=11;break e;case T0:o=14;break e;case es:o=16,n=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=qr(o,r,e,i),e.elementType=t,e.type=n,e.lanes=s,e}function to(t,e,r,n){return t=qr(7,t,n,e),t.lanes=r,t}function Pd(t,e,r,n){return t=qr(22,t,n,e),t.elementType=AT,t.lanes=r,t.stateNode={isHidden:!1},t}function jp(t,e,r){return t=qr(6,t,null,e),t.lanes=r,t}function Hp(t,e,r){return e=qr(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rA(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wp(0),this.expirationTimes=wp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wp(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ry(t,e,r,n,i,s,o,u,c){return t=new rA(t,e,r,u,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qr(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},U0(s),t}function nA(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wo,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function xb(t){if(!t)return xs;t=t._reactInternals;e:{if(fo(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tr(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var r=t.type;if(Tr(r))return v2(t,r,e)}return e}function _b(t,e,r,n,i,s,o,u,c){return t=ry(r,n,!0,t,i,s,o,u,c),t.context=xb(null),r=t.current,n=cr(),i=ms(r),s=Ci(n,i),s.callback=e!=null?e:null,fs(r,s,i),t.current.lanes=i,yu(t,i,n),br(t,n),t}function Id(t,e,r,n){var i=e.current,s=cr(),o=ms(i);return r=xb(r),e.context===null?e.context=r:e.pendingContext=r,e=Ci(s,o),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=fs(i,e,o),t!==null&&(In(t,i,o,s),hh(t,i,o)),o}function qh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gx(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function ny(t,e){gx(t,e),(t=t.alternate)&&gx(t,e)}function iA(){return null}var Tb=typeof reportError=="function"?reportError:function(t){console.error(t)};function iy(t){this._internalRoot=t}Rd.prototype.render=iy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));Id(t,e,null,null)};Rd.prototype.unmount=iy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ao(function(){Id(null,t,null,null)}),e[Mi]=null}};function Rd(t){this._internalRoot=t}Rd.prototype.unstable_scheduleHydration=function(t){if(t){var e=ZT();t={blockedOn:null,target:t,priority:e};for(var r=0;r<ns.length&&e!==0&&e<ns[r].priority;r++);ns.splice(r,0,t),r===0&&JT(t)}};function sy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yx(){}function sA(t,e,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var h=qh(o);s.call(h)}}var o=_b(e,n,t,0,null,!1,!1,"",yx);return t._reactRootContainer=o,t[Mi]=o.current,Yl(t.nodeType===8?t.parentNode:t),ao(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var u=n;n=function(){var h=qh(c);u.call(h)}}var c=ry(t,0,!1,null,null,!1,!1,"",yx);return t._reactRootContainer=c,t[Mi]=c.current,Yl(t.nodeType===8?t.parentNode:t),ao(function(){Id(e,c,r,n)}),c}function Md(t,e,r,n,i){var s=r._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var u=i;i=function(){var c=qh(o);u.call(c)}}Id(e,o,t,i)}else o=sA(r,e,t,i,n);return qh(o)}KT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=xl(e.pendingLanes);r!==0&&(S0(e,r|1),br(e,_t()),(De&6)===0&&(Ea=_t()+500,Cs()))}break;case 13:ao(function(){var n=Di(t,1);if(n!==null){var i=cr();In(n,t,1,i)}}),ny(t,1)}};E0=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var r=cr();In(e,t,134217728,r)}ny(t,134217728)}};QT=function(t){if(t.tag===13){var e=ms(t),r=Di(t,e);if(r!==null){var n=cr();In(r,t,e,n)}ny(t,e)}};ZT=function(){return $e};qT=function(t,e){var r=$e;try{return $e=t,e()}finally{$e=r}};zm=function(t,e,r){switch(e){case"input":if(Dm(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=bd(n);if(!i)throw Error(Z(90));IT(n),Dm(n,i)}}}break;case"textarea":kT(t,r);break;case"select":e=r.value,e!=null&&aa(t,!!r.multiple,e,!1)}};BT=q0;UT=ao;var oA={usingClientEntryPoint:!1,Events:[xu,Zo,bd,FT,LT,q0]},ll={findFiberByHostInstance:Ks,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},aA={bundleType:ll.bundleType,version:ll.version,rendererPackageName:ll.rendererPackageName,rendererConfig:ll.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jT(t),t===null?null:t.stateNode},findFiberByHostInstance:ll.findFiberByHostInstance||iA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{vd=Rc.inject(aA),ei=Rc}catch{}}Fr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oA;Fr.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sy(e))throw Error(Z(200));return nA(t,e,null,r)};Fr.createRoot=function(t,e){if(!sy(t))throw Error(Z(299));var r=!1,n="",i=Tb;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ry(t,1,!1,null,null,r,!1,n,i),t[Mi]=e.current,Yl(t.nodeType===8?t.parentNode:t),new iy(e)};Fr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=jT(e),t=t===null?null:t.stateNode,t};Fr.flushSync=function(t){return ao(t)};Fr.hydrate=function(t,e,r){if(!kd(e))throw Error(Z(200));return Md(null,t,e,!0,r)};Fr.hydrateRoot=function(t,e,r){if(!sy(t))throw Error(Z(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",o=Tb;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=_b(e,null,t,1,r!=null?r:null,i,!1,s,o),t[Mi]=e.current,Yl(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new Rd(e)};Fr.render=function(t,e,r){if(!kd(e))throw Error(Z(200));return Md(null,t,e,!1,r)};Fr.unmountComponentAtNode=function(t){if(!kd(t))throw Error(Z(40));return t._reactRootContainer?(ao(function(){Md(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};Fr.unstable_batchedUpdates=q0;Fr.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!kd(r))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return Md(t,e,r,!1,n)};Fr.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}e(),t.exports=Fr})(m0);const lA=fT(m0.exports);var bb,vx=m0.exports;bb=vx.createRoot,vx.hydrateRoot;var Ve={exports:{}},po=(t=>(t[t.WEBGL_LEGACY=0]="WEBGL_LEGACY",t[t.WEBGL=1]="WEBGL",t[t.WEBGL2=2]="WEBGL2",t))(po||{}),wb=(t=>(t[t.UNKNOWN=0]="UNKNOWN",t[t.WEBGL=1]="WEBGL",t[t.CANVAS=2]="CANVAS",t))(wb||{}),xg=(t=>(t[t.COLOR=16384]="COLOR",t[t.DEPTH=256]="DEPTH",t[t.STENCIL=1024]="STENCIL",t))(xg||{}),pe=(t=>(t[t.NORMAL=0]="NORMAL",t[t.ADD=1]="ADD",t[t.MULTIPLY=2]="MULTIPLY",t[t.SCREEN=3]="SCREEN",t[t.OVERLAY=4]="OVERLAY",t[t.DARKEN=5]="DARKEN",t[t.LIGHTEN=6]="LIGHTEN",t[t.COLOR_DODGE=7]="COLOR_DODGE",t[t.COLOR_BURN=8]="COLOR_BURN",t[t.HARD_LIGHT=9]="HARD_LIGHT",t[t.SOFT_LIGHT=10]="SOFT_LIGHT",t[t.DIFFERENCE=11]="DIFFERENCE",t[t.EXCLUSION=12]="EXCLUSION",t[t.HUE=13]="HUE",t[t.SATURATION=14]="SATURATION",t[t.COLOR=15]="COLOR",t[t.LUMINOSITY=16]="LUMINOSITY",t[t.NORMAL_NPM=17]="NORMAL_NPM",t[t.ADD_NPM=18]="ADD_NPM",t[t.SCREEN_NPM=19]="SCREEN_NPM",t[t.NONE=20]="NONE",t[t.SRC_OVER=0]="SRC_OVER",t[t.SRC_IN=21]="SRC_IN",t[t.SRC_OUT=22]="SRC_OUT",t[t.SRC_ATOP=23]="SRC_ATOP",t[t.DST_OVER=24]="DST_OVER",t[t.DST_IN=25]="DST_IN",t[t.DST_OUT=26]="DST_OUT",t[t.DST_ATOP=27]="DST_ATOP",t[t.ERASE=26]="ERASE",t[t.SUBTRACT=28]="SUBTRACT",t[t.XOR=29]="XOR",t))(pe||{}),Sn=(t=>(t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN",t))(Sn||{}),J=(t=>(t[t.RGBA=6408]="RGBA",t[t.RGB=6407]="RGB",t[t.RG=33319]="RG",t[t.RED=6403]="RED",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.ALPHA=6406]="ALPHA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t))(J||{}),fa=(t=>(t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t))(fa||{}),ve=(t=>(t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.BYTE=5120]="BYTE",t[t.SHORT=5122]="SHORT",t[t.INT=5124]="INT",t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",t[t.HALF_FLOAT=36193]="HALF_FLOAT",t))(ve||{}),_g=(t=>(t[t.FLOAT=0]="FLOAT",t[t.INT=1]="INT",t[t.UINT=2]="UINT",t))(_g||{}),qn=(t=>(t[t.NEAREST=0]="NEAREST",t[t.LINEAR=1]="LINEAR",t))(qn||{}),Ai=(t=>(t[t.CLAMP=33071]="CLAMP",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",t))(Ai||{}),si=(t=>(t[t.OFF=0]="OFF",t[t.POW2=1]="POW2",t[t.ON=2]="ON",t[t.ON_MANUAL=3]="ON_MANUAL",t))(si||{}),Nn=(t=>(t[t.NPM=0]="NPM",t[t.UNPACK=1]="UNPACK",t[t.PMA=2]="PMA",t[t.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",t[t.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",t[t.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA",t))(Nn||{}),Kn=(t=>(t[t.NO=0]="NO",t[t.YES=1]="YES",t[t.AUTO=2]="AUTO",t[t.BLEND=0]="BLEND",t[t.CLEAR=1]="CLEAR",t[t.BLIT=2]="BLIT",t))(Kn||{}),oy=(t=>(t[t.AUTO=0]="AUTO",t[t.MANUAL=1]="MANUAL",t))(oy||{}),Jr=(t=>(t.LOW="lowp",t.MEDIUM="mediump",t.HIGH="highp",t))(Jr||{}),At=(t=>(t[t.NONE=0]="NONE",t[t.SCISSOR=1]="SCISSOR",t[t.STENCIL=2]="STENCIL",t[t.SPRITE=3]="SPRITE",t[t.COLOR=4]="COLOR",t))(At||{}),wt=(t=>(t[t.NONE=0]="NONE",t[t.LOW=2]="LOW",t[t.MEDIUM=4]="MEDIUM",t[t.HIGH=8]="HIGH",t))(wt||{}),ri=(t=>(t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t))(ri||{});const uA={createCanvas:(t,e)=>{const r=document.createElement("canvas");return r.width=t,r.height=e,r},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>{var t;return(t=document.baseURI)!=null?t:window.location.href},getFontFaceSet:()=>document.fonts,fetch:(t,e)=>fetch(t,e),parseXML:t=>new DOMParser().parseFromString(t,"text/xml")},ee={ADAPTER:uA,RESOLUTION:1,CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1};var $p=/iPhone/i,xx=/iPod/i,_x=/iPad/i,Tx=/\biOS-universal(?:.+)Mac\b/i,Vp=/\bAndroid(?:.+)Mobile\b/i,bx=/Android/i,Oo=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,kc=/Silk/i,fi=/Windows Phone/i,wx=/\bWindows(?:.+)ARM\b/i,Sx=/BlackBerry/i,Ex=/BB10/i,Cx=/Opera Mini/i,Ax=/\b(CriOS|Chrome)(?:.+)Mobile/i,Px=/Mobile(?:.+)Firefox\b/i,Ix=function(t){return typeof t<"u"&&t.platform==="MacIntel"&&typeof t.maxTouchPoints=="number"&&t.maxTouchPoints>1&&typeof MSStream>"u"};function cA(t){return function(e){return e.test(t)}}function Rx(t){var e={userAgent:"",platform:"",maxTouchPoints:0};!t&&typeof navigator<"u"?e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof t=="string"?e.userAgent=t:t&&t.userAgent&&(e={userAgent:t.userAgent,platform:t.platform,maxTouchPoints:t.maxTouchPoints||0});var r=e.userAgent,n=r.split("[FBAN");typeof n[1]<"u"&&(r=n[0]),n=r.split("Twitter"),typeof n[1]<"u"&&(r=n[0]);var i=cA(r),s={apple:{phone:i($p)&&!i(fi),ipod:i(xx),tablet:!i($p)&&(i(_x)||Ix(e))&&!i(fi),universal:i(Tx),device:(i($p)||i(xx)||i(_x)||i(Tx)||Ix(e))&&!i(fi)},amazon:{phone:i(Oo),tablet:!i(Oo)&&i(kc),device:i(Oo)||i(kc)},android:{phone:!i(fi)&&i(Oo)||!i(fi)&&i(Vp),tablet:!i(fi)&&!i(Oo)&&!i(Vp)&&(i(kc)||i(bx)),device:!i(fi)&&(i(Oo)||i(kc)||i(Vp)||i(bx))||i(/\bokhttp\b/i)},windows:{phone:i(fi),tablet:i(wx),device:i(fi)||i(wx)},other:{blackberry:i(Sx),blackberry10:i(Ex),opera:i(Cx),firefox:i(Px),chrome:i(Ax),device:i(Sx)||i(Ex)||i(Cx)||i(Px)||i(Ax)},any:!1,phone:!1,tablet:!1};return s.any=s.apple.device||s.android.device||s.windows.device||s.other.device,s.phone=s.apple.phone||s.android.phone||s.windows.phone,s.tablet=s.apple.tablet||s.android.tablet||s.windows.tablet,s}var hT;const hA=(hT=Rx.default)!=null?hT:Rx,Ei=hA(globalThis.navigator);ee.RETINA_PREFIX=/@([0-9\.]+)x/;ee.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;var Sb={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function i(c,h,f){this.fn=c,this.context=h,this.once=f||!1}function s(c,h,f,p,g){if(typeof f!="function")throw new TypeError("The listener must be a function");var v=new i(f,p||c,g),x=r?r+h:h;return c._events[x]?c._events[x].fn?c._events[x]=[c._events[x],v]:c._events[x].push(v):(c._events[x]=v,c._eventsCount++),c}function o(c,h){--c._eventsCount===0?c._events=new n:delete c._events[h]}function u(){this._events=new n,this._eventsCount=0}u.prototype.eventNames=function(){var h=[],f,p;if(this._eventsCount===0)return h;for(p in f=this._events)e.call(f,p)&&h.push(r?p.slice(1):p);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(f)):h},u.prototype.listeners=function(h){var f=r?r+h:h,p=this._events[f];if(!p)return[];if(p.fn)return[p.fn];for(var g=0,v=p.length,x=new Array(v);g<v;g++)x[g]=p[g].fn;return x},u.prototype.listenerCount=function(h){var f=r?r+h:h,p=this._events[f];return p?p.fn?1:p.length:0},u.prototype.emit=function(h,f,p,g,v,x){var S=r?r+h:h;if(!this._events[S])return!1;var E=this._events[S],w=arguments.length,b,T;if(E.fn){switch(E.once&&this.removeListener(h,E.fn,void 0,!0),w){case 1:return E.fn.call(E.context),!0;case 2:return E.fn.call(E.context,f),!0;case 3:return E.fn.call(E.context,f,p),!0;case 4:return E.fn.call(E.context,f,p,g),!0;case 5:return E.fn.call(E.context,f,p,g,v),!0;case 6:return E.fn.call(E.context,f,p,g,v,x),!0}for(T=1,b=new Array(w-1);T<w;T++)b[T-1]=arguments[T];E.fn.apply(E.context,b)}else{var A=E.length,P;for(T=0;T<A;T++)switch(E[T].once&&this.removeListener(h,E[T].fn,void 0,!0),w){case 1:E[T].fn.call(E[T].context);break;case 2:E[T].fn.call(E[T].context,f);break;case 3:E[T].fn.call(E[T].context,f,p);break;case 4:E[T].fn.call(E[T].context,f,p,g);break;default:if(!b)for(P=1,b=new Array(w-1);P<w;P++)b[P-1]=arguments[P];E[T].fn.apply(E[T].context,b)}}return!0},u.prototype.on=function(h,f,p){return s(this,h,f,p,!1)},u.prototype.once=function(h,f,p){return s(this,h,f,p,!0)},u.prototype.removeListener=function(h,f,p,g){var v=r?r+h:h;if(!this._events[v])return this;if(!f)return o(this,v),this;var x=this._events[v];if(x.fn)x.fn===f&&(!g||x.once)&&(!p||x.context===p)&&o(this,v);else{for(var S=0,E=[],w=x.length;S<w;S++)(x[S].fn!==f||g&&!x[S].once||p&&x[S].context!==p)&&E.push(x[S]);E.length?this._events[v]=E.length===1?E[0]:E:o(this,v)}return this},u.prototype.removeAllListeners=function(h){var f;return h?(f=r?r+h:h,this._events[f]&&o(this,f)):(this._events=new n,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=r,u.EventEmitter=u,t.exports=u})(Sb);const Ma=Sb.exports;var ay={exports:{}};ay.exports=Dd;ay.exports.default=Dd;function Dd(t,e,r){r=r||2;var n=e&&e.length,i=n?e[0]*r:t.length,s=Eb(t,0,i,r,!0),o=[];if(!s||s.next===s.prev)return o;var u,c,h,f,p,g,v;if(n&&(s=gA(t,e,s,r)),t.length>80*r){u=h=t[0],c=f=t[1];for(var x=r;x<i;x+=r)p=t[x],g=t[x+1],p<u&&(u=p),g<c&&(c=g),p>h&&(h=p),g>f&&(f=g);v=Math.max(h-u,f-c),v=v!==0?32767/v:0}return nu(s,o,r,u,c,v,0),o}function Eb(t,e,r,n,i){var s,o;if(i===wg(t,e,r,n)>0)for(s=e;s<r;s+=n)o=kx(s,t[s],t[s+1],o);else for(s=r-n;s>=e;s-=n)o=kx(s,t[s],t[s+1],o);return o&&Nd(o,o.next)&&(su(o),o=o.next),o}function lo(t,e){if(!t)return t;e||(e=t);var r=t,n;do if(n=!1,!r.steiner&&(Nd(r,r.next)||lt(r.prev,r,r.next)===0)){if(su(r),r=e=r.prev,r===r.next)break;n=!0}else r=r.next;while(n||r!==e);return e}function nu(t,e,r,n,i,s,o){if(!!t){!o&&s&&TA(t,n,i,s);for(var u=t,c,h;t.prev!==t.next;){if(c=t.prev,h=t.next,s?fA(t,n,i,s):dA(t)){e.push(c.i/r|0),e.push(t.i/r|0),e.push(h.i/r|0),su(t),t=h.next,u=h.next;continue}if(t=h,t===u){o?o===1?(t=pA(lo(t),e,r),nu(t,e,r,n,i,s,2)):o===2&&mA(t,e,r,n,i,s):nu(lo(t),e,r,n,i,s,1);break}}}}function dA(t){var e=t.prev,r=t,n=t.next;if(lt(e,r,n)>=0)return!1;for(var i=e.x,s=r.x,o=n.x,u=e.y,c=r.y,h=n.y,f=i<s?i<o?i:o:s<o?s:o,p=u<c?u<h?u:h:c<h?c:h,g=i>s?i>o?i:o:s>o?s:o,v=u>c?u>h?u:h:c>h?c:h,x=n.next;x!==e;){if(x.x>=f&&x.x<=g&&x.y>=p&&x.y<=v&&ia(i,u,s,c,o,h,x.x,x.y)&&lt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function fA(t,e,r,n){var i=t.prev,s=t,o=t.next;if(lt(i,s,o)>=0)return!1;for(var u=i.x,c=s.x,h=o.x,f=i.y,p=s.y,g=o.y,v=u<c?u<h?u:h:c<h?c:h,x=f<p?f<g?f:g:p<g?p:g,S=u>c?u>h?u:h:c>h?c:h,E=f>p?f>g?f:g:p>g?p:g,w=Tg(v,x,e,r,n),b=Tg(S,E,e,r,n),T=t.prevZ,A=t.nextZ;T&&T.z>=w&&A&&A.z<=b;){if(T.x>=v&&T.x<=S&&T.y>=x&&T.y<=E&&T!==i&&T!==o&&ia(u,f,c,p,h,g,T.x,T.y)&&lt(T.prev,T,T.next)>=0||(T=T.prevZ,A.x>=v&&A.x<=S&&A.y>=x&&A.y<=E&&A!==i&&A!==o&&ia(u,f,c,p,h,g,A.x,A.y)&&lt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;T&&T.z>=w;){if(T.x>=v&&T.x<=S&&T.y>=x&&T.y<=E&&T!==i&&T!==o&&ia(u,f,c,p,h,g,T.x,T.y)&&lt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;A&&A.z<=b;){if(A.x>=v&&A.x<=S&&A.y>=x&&A.y<=E&&A!==i&&A!==o&&ia(u,f,c,p,h,g,A.x,A.y)&&lt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function pA(t,e,r){var n=t;do{var i=n.prev,s=n.next.next;!Nd(i,s)&&Cb(i,n,n.next,s)&&iu(i,s)&&iu(s,i)&&(e.push(i.i/r|0),e.push(n.i/r|0),e.push(s.i/r|0),su(n),su(n.next),n=t=s),n=n.next}while(n!==t);return lo(n)}function mA(t,e,r,n,i,s){var o=t;do{for(var u=o.next.next;u!==o.prev;){if(o.i!==u.i&&SA(o,u)){var c=Ab(o,u);o=lo(o,o.next),c=lo(c,c.next),nu(o,e,r,n,i,s,0),nu(c,e,r,n,i,s,0);return}u=u.next}o=o.next}while(o!==t)}function gA(t,e,r,n){var i=[],s,o,u,c,h;for(s=0,o=e.length;s<o;s++)u=e[s]*n,c=s<o-1?e[s+1]*n:t.length,h=Eb(t,u,c,n,!1),h===h.next&&(h.steiner=!0),i.push(wA(h));for(i.sort(yA),s=0;s<i.length;s++)r=vA(i[s],r);return r}function yA(t,e){return t.x-e.x}function vA(t,e){var r=xA(t,e);if(!r)return e;var n=Ab(r,t);return lo(n,n.next),lo(r,r.next)}function xA(t,e){var r=e,n=t.x,i=t.y,s=-1/0,o;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var u=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(u<=n&&u>s&&(s=u,o=r.x<r.next.x?r:r.next,u===n))return o}r=r.next}while(r!==e);if(!o)return null;var c=o,h=o.x,f=o.y,p=1/0,g;r=o;do n>=r.x&&r.x>=h&&n!==r.x&&ia(i<f?n:s,i,h,f,i<f?s:n,i,r.x,r.y)&&(g=Math.abs(i-r.y)/(n-r.x),iu(r,t)&&(g<p||g===p&&(r.x>o.x||r.x===o.x&&_A(o,r)))&&(o=r,p=g)),r=r.next;while(r!==c);return o}function _A(t,e){return lt(t.prev,t,e.prev)<0&&lt(e.next,t,t.next)<0}function TA(t,e,r,n){var i=t;do i.z===0&&(i.z=Tg(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,bA(i)}function bA(t){var e,r,n,i,s,o,u,c,h=1;do{for(r=t,t=null,s=null,o=0;r;){for(o++,n=r,u=0,e=0;e<h&&(u++,n=n.nextZ,!!n);e++);for(c=h;u>0||c>0&&n;)u!==0&&(c===0||!n||r.z<=n.z)?(i=r,r=r.nextZ,u--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:t=i,i.prevZ=s,s=i;r=n}s.nextZ=null,h*=2}while(o>1);return t}function Tg(t,e,r,n,i){return t=(t-r)*i|0,e=(e-n)*i|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function wA(t){var e=t,r=t;do(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next;while(e!==t);return r}function ia(t,e,r,n,i,s,o,u){return(i-o)*(e-u)>=(t-o)*(s-u)&&(t-o)*(n-u)>=(r-o)*(e-u)&&(r-o)*(s-u)>=(i-o)*(n-u)}function SA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!EA(t,e)&&(iu(t,e)&&iu(e,t)&&CA(t,e)&&(lt(t.prev,t,e.prev)||lt(t,e.prev,e))||Nd(t,e)&&lt(t.prev,t,t.next)>0&&lt(e.prev,e,e.next)>0)}function lt(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function Nd(t,e){return t.x===e.x&&t.y===e.y}function Cb(t,e,r,n){var i=Dc(lt(t,e,r)),s=Dc(lt(t,e,n)),o=Dc(lt(r,n,t)),u=Dc(lt(r,n,e));return!!(i!==s&&o!==u||i===0&&Mc(t,r,e)||s===0&&Mc(t,n,e)||o===0&&Mc(r,t,n)||u===0&&Mc(r,e,n))}function Mc(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function Dc(t){return t>0?1:t<0?-1:0}function EA(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&Cb(r,r.next,t,e))return!0;r=r.next}while(r!==t);return!1}function iu(t,e){return lt(t.prev,t,t.next)<0?lt(t,e,t.next)>=0&&lt(t,t.prev,e)>=0:lt(t,e,t.prev)<0||lt(t,t.next,e)<0}function CA(t,e){var r=t,n=!1,i=(t.x+e.x)/2,s=(t.y+e.y)/2;do r.y>s!=r.next.y>s&&r.next.y!==r.y&&i<(r.next.x-r.x)*(s-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;while(r!==t);return n}function Ab(t,e){var r=new bg(t.i,t.x,t.y),n=new bg(e.i,e.x,e.y),i=t.next,s=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,s.next=n,n.prev=s,n}function kx(t,e,r,n){var i=new bg(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function su(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function bg(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Dd.deviation=function(t,e,r,n){var i=e&&e.length,s=i?e[0]*r:t.length,o=Math.abs(wg(t,0,s,r));if(i)for(var u=0,c=e.length;u<c;u++){var h=e[u]*r,f=u<c-1?e[u+1]*r:t.length;o-=Math.abs(wg(t,h,f,r))}var p=0;for(u=0;u<n.length;u+=3){var g=n[u]*r,v=n[u+1]*r,x=n[u+2]*r;p+=Math.abs((t[g]-t[x])*(t[v+1]-t[g+1])-(t[g]-t[v])*(t[x+1]-t[g+1]))}return o===0&&p===0?0:Math.abs((p-o)/o)};function wg(t,e,r,n){for(var i=0,s=e,o=r-n;s<r;s+=n)i+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return i}Dd.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var s=0;s<t[i].length;s++)for(var o=0;o<e;o++)r.vertices.push(t[i][s][o]);i>0&&(n+=t[i-1].length,r.holes.push(n))}return r};var Sg={exports:{}};/*! https://mths.be/punycode v1.3.2 by @mathias */(function(t,e){(function(r){var n=e&&!e.nodeType&&e,i=t&&!t.nodeType&&t,s=typeof yp=="object"&&yp;(s.global===s||s.window===s||s.self===s)&&(r=s);var o,u=2147483647,c=36,h=1,f=26,p=38,g=700,v=72,x=128,S="-",E=/^xn--/,w=/[^\x20-\x7E]/,b=/[\x2E\u3002\uFF0E\uFF61]/g,T={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},A=c-h,P=Math.floor,O=String.fromCharCode,D;function M(k){throw RangeError(T[k])}function H(k,Q){for(var ne=k.length,Se=[];ne--;)Se[ne]=Q(k[ne]);return Se}function X(k,Q){var ne=k.split("@"),Se="";ne.length>1&&(Se=ne[0]+"@",k=ne[1]),k=k.replace(b,".");var Te=k.split("."),Be=H(Te,Q).join(".");return Se+Be}function Y(k){for(var Q=[],ne=0,Se=k.length,Te,Be;ne<Se;)Te=k.charCodeAt(ne++),Te>=55296&&Te<=56319&&ne<Se?(Be=k.charCodeAt(ne++),(Be&64512)==56320?Q.push(((Te&1023)<<10)+(Be&1023)+65536):(Q.push(Te),ne--)):Q.push(Te);return Q}function ie(k){return H(k,function(Q){var ne="";return Q>65535&&(Q-=65536,ne+=O(Q>>>10&1023|55296),Q=56320|Q&1023),ne+=O(Q),ne}).join("")}function W(k){return k-48<10?k-22:k-65<26?k-65:k-97<26?k-97:c}function U(k,Q){return k+22+75*(k<26)-((Q!=0)<<5)}function fe(k,Q,ne){var Se=0;for(k=ne?P(k/g):k>>1,k+=P(k/Q);k>A*f>>1;Se+=c)k=P(k/A);return P(Se+(A+1)*k/(k+p))}function xe(k){var Q=[],ne=k.length,Se,Te=0,Be=x,Pe=v,Le,kt,Ut,ht,Re,Qe,Ne,Br,Ur;for(Le=k.lastIndexOf(S),Le<0&&(Le=0),kt=0;kt<Le;++kt)k.charCodeAt(kt)>=128&&M("not-basic"),Q.push(k.charCodeAt(kt));for(Ut=Le>0?Le+1:0;Ut<ne;){for(ht=Te,Re=1,Qe=c;Ut>=ne&&M("invalid-input"),Ne=W(k.charCodeAt(Ut++)),(Ne>=c||Ne>P((u-Te)/Re))&&M("overflow"),Te+=Ne*Re,Br=Qe<=Pe?h:Qe>=Pe+f?f:Qe-Pe,!(Ne<Br);Qe+=c)Ur=c-Br,Re>P(u/Ur)&&M("overflow"),Re*=Ur;Se=Q.length+1,Pe=fe(Te-ht,Se,ht==0),P(Te/Se)>u-Be&&M("overflow"),Be+=P(Te/Se),Te%=Se,Q.splice(Te++,0,Be)}return ie(Q)}function z(k){var Q,ne,Se,Te,Be,Pe,Le,kt,Ut,ht,Re,Qe=[],Ne,Br,Ur,Is;for(k=Y(k),Ne=k.length,Q=x,ne=0,Be=v,Pe=0;Pe<Ne;++Pe)Re=k[Pe],Re<128&&Qe.push(O(Re));for(Se=Te=Qe.length,Te&&Qe.push(S);Se<Ne;){for(Le=u,Pe=0;Pe<Ne;++Pe)Re=k[Pe],Re>=Q&&Re<Le&&(Le=Re);for(Br=Se+1,Le-Q>P((u-ne)/Br)&&M("overflow"),ne+=(Le-Q)*Br,Q=Le,Pe=0;Pe<Ne;++Pe)if(Re=k[Pe],Re<Q&&++ne>u&&M("overflow"),Re==Q){for(kt=ne,Ut=c;ht=Ut<=Be?h:Ut>=Be+f?f:Ut-Be,!(kt<ht);Ut+=c)Is=kt-ht,Ur=c-ht,Qe.push(O(U(ht+Is%Ur,0))),kt=P(Is/Ur);Qe.push(O(U(kt,0))),Be=fe(ne,Br,Se==Te),ne=0,++Se}++ne,++Q}return Qe.join("")}function R(k){return X(k,function(Q){return E.test(Q)?xe(Q.slice(4).toLowerCase()):Q})}function L(k){return X(k,function(Q){return w.test(Q)?"xn--"+z(Q):Q})}if(o={version:"1.3.2",ucs2:{decode:Y,encode:ie},decode:xe,encode:z,toASCII:L,toUnicode:R},n&&i)if(t.exports==n)i.exports=o;else for(D in o)o.hasOwnProperty(D)&&(n[D]=o[D]);else r.punycode=o})(yp)})(Sg,Sg.exports);var AA={isString:function(t){return typeof t=="string"},isObject:function(t){return typeof t=="object"&&t!==null},isNull:function(t){return t===null},isNullOrUndefined:function(t){return t==null}},ou={};function PA(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var IA=function(t,e,r,n){e=e||"&",r=r||"=";var i={};if(typeof t!="string"||t.length===0)return i;var s=/\+/g;t=t.split(e);var o=1e3;n&&typeof n.maxKeys=="number"&&(o=n.maxKeys);var u=t.length;o>0&&u>o&&(u=o);for(var c=0;c<u;++c){var h=t[c].replace(s,"%20"),f=h.indexOf(r),p,g,v,x;f>=0?(p=h.substr(0,f),g=h.substr(f+1)):(p=h,g=""),v=decodeURIComponent(p),x=decodeURIComponent(g),PA(i,v)?Array.isArray(i[v])?i[v].push(x):i[v]=[i[v],x]:i[v]=x}return i},ul=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}},RA=function(t,e,r,n){return e=e||"&",r=r||"=",t===null&&(t=void 0),typeof t=="object"?Object.keys(t).map(function(i){var s=encodeURIComponent(ul(i))+r;return Array.isArray(t[i])?t[i].map(function(o){return s+encodeURIComponent(ul(o))}).join(e):s+encodeURIComponent(ul(t[i]))}).join(e):n?encodeURIComponent(ul(n))+r+encodeURIComponent(ul(t)):""};ou.decode=ou.parse=IA;ou.encode=ou.stringify=RA;var kA=Sg.exports,Qn=AA,MA=Od,DA=$A,NA=HA;function Rn(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var OA=/^([a-z0-9.+-]+:)/i,FA=/:[0-9]*$/,LA=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,BA=["<",">",'"',"`"," ","\r",`
`,"	"],UA=["{","}","|","\\","^","`"].concat(BA),Eg=["'"].concat(UA),Mx=["%","/","?",";","#"].concat(Eg),Dx=["/","?","#"],zA=255,Nx=/^[+a-z0-9A-Z_-]{0,63}$/,GA=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,jA={javascript:!0,"javascript:":!0},Cg={javascript:!0,"javascript:":!0},pa={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},Ag=ou;function Od(t,e,r){if(t&&Qn.isObject(t)&&t instanceof Rn)return t;var n=new Rn;return n.parse(t,e,r),n}Rn.prototype.parse=function(t,e,r){if(!Qn.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var n=t.indexOf("?"),i=n!==-1&&n<t.indexOf("#")?"?":"#",s=t.split(i),o=/\\/g;s[0]=s[0].replace(o,"/"),t=s.join(i);var u=t;if(u=u.trim(),!r&&t.split("#").length===1){var c=LA.exec(u);if(c)return this.path=u,this.href=u,this.pathname=c[1],c[2]?(this.search=c[2],e?this.query=Ag.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var h=OA.exec(u);if(h){h=h[0];var f=h.toLowerCase();this.protocol=f,u=u.substr(h.length)}if(r||h||u.match(/^\/\/[^@\/]+@[^@\/]+/)){var p=u.substr(0,2)==="//";p&&!(h&&Cg[h])&&(u=u.substr(2),this.slashes=!0)}if(!Cg[h]&&(p||h&&!pa[h])){for(var g=-1,v=0;v<Dx.length;v++){var x=u.indexOf(Dx[v]);x!==-1&&(g===-1||x<g)&&(g=x)}var S,E;g===-1?E=u.lastIndexOf("@"):E=u.lastIndexOf("@",g),E!==-1&&(S=u.slice(0,E),u=u.slice(E+1),this.auth=decodeURIComponent(S)),g=-1;for(var v=0;v<Mx.length;v++){var x=u.indexOf(Mx[v]);x!==-1&&(g===-1||x<g)&&(g=x)}g===-1&&(g=u.length),this.host=u.slice(0,g),u=u.slice(g),this.parseHost(),this.hostname=this.hostname||"";var w=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!w)for(var b=this.hostname.split(/\./),v=0,T=b.length;v<T;v++){var A=b[v];if(!!A&&!A.match(Nx)){for(var P="",O=0,D=A.length;O<D;O++)A.charCodeAt(O)>127?P+="x":P+=A[O];if(!P.match(Nx)){var M=b.slice(0,v),H=b.slice(v+1),X=A.match(GA);X&&(M.push(X[1]),H.unshift(X[2])),H.length&&(u="/"+H.join(".")+u),this.hostname=M.join(".");break}}}this.hostname.length>zA?this.hostname="":this.hostname=this.hostname.toLowerCase(),w||(this.hostname=kA.toASCII(this.hostname));var Y=this.port?":"+this.port:"",ie=this.hostname||"";this.host=ie+Y,this.href+=this.host,w&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),u[0]!=="/"&&(u="/"+u))}if(!jA[f])for(var v=0,T=Eg.length;v<T;v++){var W=Eg[v];if(u.indexOf(W)!==-1){var U=encodeURIComponent(W);U===W&&(U=escape(W)),u=u.split(W).join(U)}}var fe=u.indexOf("#");fe!==-1&&(this.hash=u.substr(fe),u=u.slice(0,fe));var xe=u.indexOf("?");if(xe!==-1?(this.search=u.substr(xe),this.query=u.substr(xe+1),e&&(this.query=Ag.parse(this.query)),u=u.slice(0,xe)):e&&(this.search="",this.query={}),u&&(this.pathname=u),pa[f]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var Y=this.pathname||"",z=this.search||"";this.path=Y+z}return this.href=this.format(),this};function HA(t){return Qn.isString(t)&&(t=Od(t)),t instanceof Rn?t.format():Rn.prototype.format.call(t)}Rn.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",i=!1,s="";this.host?i=t+this.host:this.hostname&&(i=t+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&Qn.isObject(this.query)&&Object.keys(this.query).length&&(s=Ag.stringify(this.query));var o=this.search||s&&"?"+s||"";return e&&e.substr(-1)!==":"&&(e+=":"),this.slashes||(!e||pa[e])&&i!==!1?(i="//"+(i||""),r&&r.charAt(0)!=="/"&&(r="/"+r)):i||(i=""),n&&n.charAt(0)!=="#"&&(n="#"+n),o&&o.charAt(0)!=="?"&&(o="?"+o),r=r.replace(/[?#]/g,function(u){return encodeURIComponent(u)}),o=o.replace("#","%23"),e+i+r+o+n};function $A(t,e){return Od(t,!1,!0).resolve(e)}Rn.prototype.resolve=function(t){return this.resolveObject(Od(t,!1,!0)).format()};Rn.prototype.resolveObject=function(t){if(Qn.isString(t)){var e=new Rn;e.parse(t,!1,!0),t=e}for(var r=new Rn,n=Object.keys(this),i=0;i<n.length;i++){var s=n[i];r[s]=this[s]}if(r.hash=t.hash,t.href==="")return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var o=Object.keys(t),u=0;u<o.length;u++){var c=o[u];c!=="protocol"&&(r[c]=t[c])}return pa[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!pa[t.protocol]){for(var h=Object.keys(t),f=0;f<h.length;f++){var p=h[f];r[p]=t[p]}return r.href=r.format(),r}if(r.protocol=t.protocol,!t.host&&!Cg[t.protocol]){for(var T=(t.pathname||"").split("/");T.length&&!(t.host=T.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),T[0]!==""&&T.unshift(""),T.length<2&&T.unshift(""),r.pathname=T.join("/")}else r.pathname=t.pathname;if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var g=r.pathname||"",v=r.search||"";r.path=g+v}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var x=r.pathname&&r.pathname.charAt(0)==="/",S=t.host||t.pathname&&t.pathname.charAt(0)==="/",E=S||x||r.host&&t.pathname,w=E,b=r.pathname&&r.pathname.split("/")||[],T=t.pathname&&t.pathname.split("/")||[],A=r.protocol&&!pa[r.protocol];if(A&&(r.hostname="",r.port=null,r.host&&(b[0]===""?b[0]=r.host:b.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(T[0]===""?T[0]=t.host:T.unshift(t.host)),t.host=null),E=E&&(T[0]===""||b[0]==="")),S)r.host=t.host||t.host===""?t.host:r.host,r.hostname=t.hostname||t.hostname===""?t.hostname:r.hostname,r.search=t.search,r.query=t.query,b=T;else if(T.length)b||(b=[]),b.pop(),b=b.concat(T),r.search=t.search,r.query=t.query;else if(!Qn.isNullOrUndefined(t.search)){if(A){r.hostname=r.host=b.shift();var P=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;P&&(r.auth=P.shift(),r.host=r.hostname=P.shift())}return r.search=t.search,r.query=t.query,(!Qn.isNull(r.pathname)||!Qn.isNull(r.search))&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!b.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var O=b.slice(-1)[0],D=(r.host||t.host||b.length>1)&&(O==="."||O==="..")||O==="",M=0,H=b.length;H>=0;H--)O=b[H],O==="."?b.splice(H,1):O===".."?(b.splice(H,1),M++):M&&(b.splice(H,1),M--);if(!E&&!w)for(;M--;M)b.unshift("..");E&&b[0]!==""&&(!b[0]||b[0].charAt(0)!=="/")&&b.unshift(""),D&&b.join("/").substr(-1)!=="/"&&b.push("");var X=b[0]===""||b[0]&&b[0].charAt(0)==="/";if(A){r.hostname=r.host=X?"":b.length?b.shift():"";var P=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;P&&(r.auth=P.shift(),r.host=r.hostname=P.shift())}return E=E||r.host&&b.length,E&&!X&&b.unshift(""),b.length?r.pathname=b.join("/"):(r.pathname=null,r.path=null),(!Qn.isNull(r.pathname)||!Qn.isNull(r.search))&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r};Rn.prototype.parseHost=function(){var t=this.host,e=FA.exec(t);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};const VA={parse:MA,format:NA,resolve:DA};function fn(t){if(typeof t!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(t)}`)}function cl(t){return t.split("?")[0].split("#")[0]}function WA(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function XA(t,e,r){return t.replace(new RegExp(WA(e),"g"),r)}function YA(t,e){let r="",n=0,i=-1,s=0,o=-1;for(let u=0;u<=t.length;++u){if(u<t.length)o=t.charCodeAt(u);else{if(o===47)break;o=47}if(o===47){if(!(i===u-1||s===1))if(i!==u-1&&s===2){if(r.length<2||n!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){const c=r.lastIndexOf("/");if(c!==r.length-1){c===-1?(r="",n=0):(r=r.slice(0,c),n=r.length-1-r.lastIndexOf("/")),i=u,s=0;continue}}else if(r.length===2||r.length===1){r="",n=0,i=u,s=0;continue}}e&&(r.length>0?r+="/..":r="..",n=2)}else r.length>0?r+=`/${t.slice(i+1,u)}`:r=t.slice(i+1,u),n=u-i-1;i=u,s=0}else o===46&&s!==-1?++s:s=-1}return r}const nr={toPosix(t){return XA(t,"\\","/")},isUrl(t){return/^https?:/.test(this.toPosix(t))},isDataUrl(t){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(t)},hasProtocol(t){return/^[^/:]+:\//.test(this.toPosix(t))},getProtocol(t){fn(t),t=this.toPosix(t);let e="";const r=/^file:\/\/\//.exec(t),n=/^[^/:]+:\/\//.exec(t),i=/^[^/:]+:\//.exec(t);if(r||n||i){const s=(r==null?void 0:r[0])||(n==null?void 0:n[0])||(i==null?void 0:i[0]);e=s,t=t.slice(s.length)}return e},toAbsolute(t,e,r){if(this.isDataUrl(t))return t;const n=cl(this.toPosix(e!=null?e:ee.ADAPTER.getBaseUrl())),i=cl(this.toPosix(r!=null?r:this.rootname(n)));return fn(t),t=this.toPosix(t),t.startsWith("/")?nr.join(i,t.slice(1)):this.isAbsolute(t)?t:this.join(n,t)},normalize(t){if(t=this.toPosix(t),fn(t),t.length===0)return".";let e="";const r=t.startsWith("/");this.hasProtocol(t)&&(e=this.rootname(t),t=t.slice(e.length));const n=t.endsWith("/");return t=YA(t,!1),t.length>0&&n&&(t+="/"),r?`/${t}`:e+t},isAbsolute(t){return fn(t),t=this.toPosix(t),this.hasProtocol(t)?!0:t.startsWith("/")},join(...t){var r;if(t.length===0)return".";let e;for(let n=0;n<t.length;++n){const i=t[n];if(fn(i),i.length>0)if(e===void 0)e=i;else{const s=(r=t[n-1])!=null?r:"";this.extname(s)?e+=`/../${i}`:e+=`/${i}`}}return e===void 0?".":this.normalize(e)},dirname(t){if(fn(t),t.length===0)return".";t=this.toPosix(t);let e=t.charCodeAt(0);const r=e===47;let n=-1,i=!0;const s=this.getProtocol(t),o=t;t=t.slice(s.length);for(let u=t.length-1;u>=1;--u)if(e=t.charCodeAt(u),e===47){if(!i){n=u;break}}else i=!1;return n===-1?r?"/":this.isUrl(o)?s+t:s:r&&n===1?"//":s+t.slice(0,n)},rootname(t){fn(t),t=this.toPosix(t);let e="";if(t.startsWith("/")?e="/":e=this.getProtocol(t),this.isUrl(t)){const r=t.indexOf("/",e.length);r!==-1?e=t.slice(0,r):e=t,e.endsWith("/")||(e+="/")}return e},basename(t,e){fn(t),e&&fn(e),t=cl(this.toPosix(t));let r=0,n=-1,i=!0,s;if(e!==void 0&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";let o=e.length-1,u=-1;for(s=t.length-1;s>=0;--s){const c=t.charCodeAt(s);if(c===47){if(!i){r=s+1;break}}else u===-1&&(i=!1,u=s+1),o>=0&&(c===e.charCodeAt(o)?--o===-1&&(n=s):(o=-1,n=u))}return r===n?n=u:n===-1&&(n=t.length),t.slice(r,n)}for(s=t.length-1;s>=0;--s)if(t.charCodeAt(s)===47){if(!i){r=s+1;break}}else n===-1&&(i=!1,n=s+1);return n===-1?"":t.slice(r,n)},extname(t){fn(t),t=cl(this.toPosix(t));let e=-1,r=0,n=-1,i=!0,s=0;for(let o=t.length-1;o>=0;--o){const u=t.charCodeAt(o);if(u===47){if(!i){r=o+1;break}continue}n===-1&&(i=!1,n=o+1),u===46?e===-1?e=o:s!==1&&(s=1):e!==-1&&(s=-1)}return e===-1||n===-1||s===0||s===1&&e===n-1&&e===r+1?"":t.slice(e,n)},parse(t){fn(t);const e={root:"",dir:"",base:"",ext:"",name:""};if(t.length===0)return e;t=cl(this.toPosix(t));let r=t.charCodeAt(0);const n=this.isAbsolute(t);let i;e.root=this.rootname(t),n||this.hasProtocol(t)?i=1:i=0;let s=-1,o=0,u=-1,c=!0,h=t.length-1,f=0;for(;h>=i;--h){if(r=t.charCodeAt(h),r===47){if(!c){o=h+1;break}continue}u===-1&&(c=!1,u=h+1),r===46?s===-1?s=h:f!==1&&(f=1):s!==-1&&(f=-1)}return s===-1||u===-1||f===0||f===1&&s===u-1&&s===o+1?u!==-1&&(o===0&&n?e.base=e.name=t.slice(1,u):e.base=e.name=t.slice(o,u)):(o===0&&n?(e.name=t.slice(1,s),e.base=t.slice(1,u)):(e.name=t.slice(o,s),e.base=t.slice(o,u)),e.ext=t.slice(s,u)),e.dir=this.dirname(t),e},sep:"/",delimiter:":"},Ox={};function Ae(t,e,r=3){if(Ox[e])return;let n=new Error().stack;typeof n>"u"?console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${t}`):(n=n.split(`
`).splice(r).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${e}
Deprecated since v${t}`),console.warn(n),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${t}`),console.warn(n))),Ox[e]=!0}let Wp;function KA(){return typeof Wp>"u"&&(Wp=function(){var r;const e={stencil:!0,failIfMajorPerformanceCaveat:ee.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!ee.ADAPTER.getWebGLRenderingContext())return!1;const n=ee.ADAPTER.createCanvas();let i=n.getContext("webgl",e)||n.getContext("experimental-webgl",e);const s=!!((r=i==null?void 0:i.getContextAttributes())!=null&&r.stencil);if(i){const o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,s}catch{return!1}}()),Wp}var QA={grad:.9,turn:360,rad:360/(2*Math.PI)},pi=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},Lt=function(t,e,r){return e===void 0&&(e=0),r===void 0&&(r=Math.pow(10,e)),Math.round(r*t)/r+0},en=function(t,e,r){return e===void 0&&(e=0),r===void 0&&(r=1),t>r?r:t>e?t:e},Pb=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},Fx=function(t){return{r:en(t.r,0,255),g:en(t.g,0,255),b:en(t.b,0,255),a:en(t.a)}},Xp=function(t){return{r:Lt(t.r),g:Lt(t.g),b:Lt(t.b),a:Lt(t.a,3)}},ZA=/^#([0-9a-f]{3,8})$/i,Nc=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},Ib=function(t){var e=t.r,r=t.g,n=t.b,i=t.a,s=Math.max(e,r,n),o=s-Math.min(e,r,n),u=o?s===e?(r-n)/o:s===r?2+(n-e)/o:4+(e-r)/o:0;return{h:60*(u<0?u+6:u),s:s?o/s*100:0,v:s/255*100,a:i}},Rb=function(t){var e=t.h,r=t.s,n=t.v,i=t.a;e=e/360*6,r/=100,n/=100;var s=Math.floor(e),o=n*(1-r),u=n*(1-(e-s)*r),c=n*(1-(1-e+s)*r),h=s%6;return{r:255*[n,u,o,o,c,n][h],g:255*[c,n,n,u,o,o][h],b:255*[o,o,c,n,n,u][h],a:i}},Lx=function(t){return{h:Pb(t.h),s:en(t.s,0,100),l:en(t.l,0,100),a:en(t.a)}},Bx=function(t){return{h:Lt(t.h),s:Lt(t.s),l:Lt(t.l),a:Lt(t.a,3)}},Ux=function(t){return Rb((r=(e=t).s,{h:e.h,s:(r*=((n=e.l)<50?n:100-n)/100)>0?2*r/(n+r)*100:0,v:n+r,a:e.a}));var e,r,n},Bl=function(t){return{h:(e=Ib(t)).h,s:(i=(200-(r=e.s))*(n=e.v)/100)>0&&i<200?r*n/100/(i<=100?i:200-i)*100:0,l:i/2,a:e.a};var e,r,n,i},qA=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,JA=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,eP=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,tP=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Pg={string:[[function(t){var e=ZA.exec(t);return e?(t=e[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?Lt(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?Lt(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var e=eP.exec(t)||tP.exec(t);return e?e[2]!==e[4]||e[4]!==e[6]?null:Fx({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(t){var e=qA.exec(t)||JA.exec(t);if(!e)return null;var r,n,i=Lx({h:(r=e[1],n=e[2],n===void 0&&(n="deg"),Number(r)*(QA[n]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return Ux(i)},"hsl"]],object:[[function(t){var e=t.r,r=t.g,n=t.b,i=t.a,s=i===void 0?1:i;return pi(e)&&pi(r)&&pi(n)?Fx({r:Number(e),g:Number(r),b:Number(n),a:Number(s)}):null},"rgb"],[function(t){var e=t.h,r=t.s,n=t.l,i=t.a,s=i===void 0?1:i;if(!pi(e)||!pi(r)||!pi(n))return null;var o=Lx({h:Number(e),s:Number(r),l:Number(n),a:Number(s)});return Ux(o)},"hsl"],[function(t){var e=t.h,r=t.s,n=t.v,i=t.a,s=i===void 0?1:i;if(!pi(e)||!pi(r)||!pi(n))return null;var o=function(u){return{h:Pb(u.h),s:en(u.s,0,100),v:en(u.v,0,100),a:en(u.a)}}({h:Number(e),s:Number(r),v:Number(n),a:Number(s)});return Rb(o)},"hsv"]]},zx=function(t,e){for(var r=0;r<e.length;r++){var n=e[r][0](t);if(n)return[n,e[r][1]]}return[null,void 0]},rP=function(t){return typeof t=="string"?zx(t.trim(),Pg.string):typeof t=="object"&&t!==null?zx(t,Pg.object):[null,void 0]},Yp=function(t,e){var r=Bl(t);return{h:r.h,s:en(r.s+100*e,0,100),l:r.l,a:r.a}},Kp=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},Gx=function(t,e){var r=Bl(t);return{h:r.h,s:r.s,l:en(r.l+100*e,0,100),a:r.a}},Ig=function(){function t(e){this.parsed=rP(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return Lt(Kp(this.rgba),2)},t.prototype.isDark=function(){return Kp(this.rgba)<.5},t.prototype.isLight=function(){return Kp(this.rgba)>=.5},t.prototype.toHex=function(){return e=Xp(this.rgba),r=e.r,n=e.g,i=e.b,o=(s=e.a)<1?Nc(Lt(255*s)):"","#"+Nc(r)+Nc(n)+Nc(i)+o;var e,r,n,i,s,o},t.prototype.toRgb=function(){return Xp(this.rgba)},t.prototype.toRgbString=function(){return e=Xp(this.rgba),r=e.r,n=e.g,i=e.b,(s=e.a)<1?"rgba("+r+", "+n+", "+i+", "+s+")":"rgb("+r+", "+n+", "+i+")";var e,r,n,i,s},t.prototype.toHsl=function(){return Bx(Bl(this.rgba))},t.prototype.toHslString=function(){return e=Bx(Bl(this.rgba)),r=e.h,n=e.s,i=e.l,(s=e.a)<1?"hsla("+r+", "+n+"%, "+i+"%, "+s+")":"hsl("+r+", "+n+"%, "+i+"%)";var e,r,n,i,s},t.prototype.toHsv=function(){return e=Ib(this.rgba),{h:Lt(e.h),s:Lt(e.s),v:Lt(e.v),a:Lt(e.a,3)};var e},t.prototype.invert=function(){return Wn({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},t.prototype.saturate=function(e){return e===void 0&&(e=.1),Wn(Yp(this.rgba,e))},t.prototype.desaturate=function(e){return e===void 0&&(e=.1),Wn(Yp(this.rgba,-e))},t.prototype.grayscale=function(){return Wn(Yp(this.rgba,-1))},t.prototype.lighten=function(e){return e===void 0&&(e=.1),Wn(Gx(this.rgba,e))},t.prototype.darken=function(e){return e===void 0&&(e=.1),Wn(Gx(this.rgba,-e))},t.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},t.prototype.alpha=function(e){return typeof e=="number"?Wn({r:(r=this.rgba).r,g:r.g,b:r.b,a:e}):Lt(this.rgba.a,3);var r},t.prototype.hue=function(e){var r=Bl(this.rgba);return typeof e=="number"?Wn({h:e,s:r.s,l:r.l,a:r.a}):Lt(r.h)},t.prototype.isEqual=function(e){return this.toHex()===Wn(e).toHex()},t}(),Wn=function(t){return t instanceof Ig?t:new Ig(t)},jx=[],nP=function(t){t.forEach(function(e){jx.indexOf(e)<0&&(e(Ig,Pg),jx.push(e))})};function iP(t,e){var r={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},n={};for(var i in r)n[r[i]]=i;var s={};t.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var u,c,h=n[this.toHex()];if(h)return h;if(o!=null&&o.closest){var f=this.toRgb(),p=1/0,g="black";if(!s.length)for(var v in r)s[v]=new t(r[v]).toRgb();for(var x in r){var S=(u=f,c=s[x],Math.pow(u.r-c.r,2)+Math.pow(u.g-c.g,2)+Math.pow(u.b-c.b,2));S<p&&(p=S,g=x)}return g}},e.string.push([function(o){var u=o.toLowerCase(),c=u==="transparent"?"#0000":r[u];return c?new t(c).toRgb():null},"name"])}nP([iP]);const ma=class{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof ma)this._value=this.cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set PIXI.Color#value to null");(this._value===null||!this.isSourceEqual(this._value,t))&&(this.normalize(t),this._value=this.cloneSource(t))}}get value(){return this._value}cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}isSourceEqual(t,e){const r=typeof t;if(r!==typeof e)return!1;if(r==="number"||r==="string"||t instanceof Number)return t===e;if(Array.isArray(t)&&Array.isArray(e)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(e))return t.length!==e.length?!1:t.every((i,s)=>i===e[s]);if(t!==null&&e!==null){const i=Object.keys(t),s=Object.keys(e);return i.length!==s.length?!1:i.every(o=>t[o]===e[o])}return t===e}toRgba(){const[t,e,r,n]=this._components;return{r:t,g:e,b:r,a:n}}toRgb(){const[t,e,r]=this._components;return{r:t,g:e,b:r}}toRgbaString(){const[t,e,r]=this.toUint8RgbArray();return`rgba(${t},${e},${r},${this.alpha})`}toUint8RgbArray(t){const[e,r,n]=this._components;return t=t!=null?t:[],t[0]=Math.round(e*255),t[1]=Math.round(r*255),t[2]=Math.round(n*255),t}toRgbArray(t){t=t!=null?t:[];const[e,r,n]=this._components;return t[0]=e,t[1]=r,t[2]=n,t}toNumber(){return this._int}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[e,r,n,i]=ma.temp.setValue(t)._components;return this._components[0]*=e,this._components[1]*=r,this._components[2]*=n,this._components[3]*=i,this.refreshInt(),this._value=null,this}premultiply(t,e=!0){return e&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this.refreshInt(),this._value=null,this}toPremultiplied(t,e=!0){if(t===1)return(255<<24)+this._int;if(t===0)return e?0:this._int;let r=this._int>>16&255,n=this._int>>8&255,i=this._int&255;return e&&(r=r*t+.5|0,n=n*t+.5|0,i=i*t+.5|0),(t*255<<24)+(r<<16)+(n<<8)+i}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const e=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-e.length)+e}setAlpha(t){return this._components[3]=this._clamp(t),this}round(t){const[e,r,n]=this._components;return this._components[0]=Math.round(e*t)/t,this._components[1]=Math.round(r*t)/t,this._components[2]=Math.round(n*t)/t,this.refreshInt(),this._value=null,this}toArray(t){t=t!=null?t:[];const[e,r,n,i]=this._components;return t[0]=e,t[1]=r,t[2]=n,t[3]=i,t}normalize(t){let e,r,n,i;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const s=t;e=(s>>16&255)/255,r=(s>>8&255)/255,n=(s&255)/255,i=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[e,r,n,i=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[e,r,n,i=255]=t,e/=255,r/=255,n/=255,i/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const o=ma.HEX_PATTERN.exec(t);o&&(t=`#${o[2]}`)}const s=Wn(t);s.isValid()&&({r:e,g:r,b:n,a:i}=s.rgba,e/=255,r/=255,n/=255)}if(e!==void 0)this._components[0]=e,this._components[1]=r,this._components[2]=n,this._components[3]=i,this.refreshInt();else throw new Error(`Unable to convert color ${t}`)}refreshInt(){this._clamp(this._components);const[t,e,r]=this._components;this._int=(t*255<<16)+(e*255<<8)+(r*255|0)}_clamp(t,e=0,r=1){return typeof t=="number"?Math.min(Math.max(t,e),r):(t.forEach((n,i)=>{t[i]=Math.min(Math.max(n,e),r)}),t)}};let Ge=ma;Ge.shared=new ma;Ge.temp=new ma;Ge.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;function Fd(t,e=[]){return Ae("7.2.0","utils.hex2rgb is deprecated, use Color#toRgbArray instead"),Ge.shared.setValue(t).toRgbArray(e)}function sP(t){return Ae("7.2.0","utils.hex2string is deprecated, use Color#toHex instead"),Ge.shared.setValue(t).toHex()}function Ld(t){return Ae("7.2.0","utils.rgb2hex is deprecated, use Color#toNumber instead"),Ge.shared.setValue(t).toNumber()}function oP(){const t=[],e=[];for(let n=0;n<32;n++)t[n]=n,e[n]=n;t[pe.NORMAL_NPM]=pe.NORMAL,t[pe.ADD_NPM]=pe.ADD,t[pe.SCREEN_NPM]=pe.SCREEN,e[pe.NORMAL]=pe.NORMAL_NPM,e[pe.ADD]=pe.ADD_NPM,e[pe.SCREEN]=pe.SCREEN_NPM;const r=[];return r.push(e),r.push(t),r}const kb=oP();function Mb(t,e){return kb[e?1:0][t]}function aP(t,e=null){const r=t*6;if(e=e||new Uint16Array(r),e.length!==r)throw new Error(`Out buffer length is incorrect, got ${e.length} and expected ${r}`);for(let n=0,i=0;n<r;n+=6,i+=4)e[n+0]=i+0,e[n+1]=i+1,e[n+2]=i+2,e[n+3]=i+0,e[n+4]=i+2,e[n+5]=i+3;return e}function Db(t){if(t.BYTES_PER_ELEMENT===4)return t instanceof Float32Array?"Float32Array":t instanceof Uint32Array?"Uint32Array":"Int32Array";if(t.BYTES_PER_ELEMENT===2){if(t instanceof Uint16Array)return"Uint16Array"}else if(t.BYTES_PER_ELEMENT===1&&t instanceof Uint8Array)return"Uint8Array";return null}function Jh(t){return t+=t===0?1:0,--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t+1}function Hx(t){return!(t&t-1)&&!!t}function $x(t){let e=(t>65535?1:0)<<4;t>>>=e;let r=(t>255?1:0)<<3;return t>>>=r,e|=r,r=(t>15?1:0)<<2,t>>>=r,e|=r,r=(t>3?1:0)<<1,t>>>=r,e|=r,e|t>>1}function ga(t,e,r){const n=t.length;let i;if(e>=n||r===0)return;r=e+r>n?n-e:r;const s=n-r;for(i=e;i<s;++i)t[i]=t[i+r];t.length=s}function ls(t){return t===0?0:t<0?-1:1}let lP=0;function uo(){return++lP}const Nb=class{constructor(t,e,r,n){this.left=t,this.top=e,this.right=r,this.bottom=n}get width(){return this.right-this.left}get height(){return this.bottom-this.top}isEmpty(){return this.left===this.right||this.top===this.bottom}};let Rg=Nb;Rg.EMPTY=new Nb(0,0,0,0);const Vx={},Xn=Object.create(null),Zi=Object.create(null);class uP{constructor(e,r,n){this._canvas=ee.ADAPTER.createCanvas(),this._context=this._canvas.getContext("2d"),this.resolution=n||ee.RESOLUTION,this.resize(e,r)}clear(){this._checkDestroyed(),this._context.setTransform(1,0,0,1,0,0),this._context.clearRect(0,0,this._canvas.width,this._canvas.height)}resize(e,r){this._checkDestroyed(),this._canvas.width=Math.round(e*this.resolution),this._canvas.height=Math.round(r*this.resolution)}destroy(){this._context=null,this._canvas=null}get width(){return this._checkDestroyed(),this._canvas.width}set width(e){this._checkDestroyed(),this._canvas.width=Math.round(e)}get height(){return this._checkDestroyed(),this._canvas.height}set height(e){this._checkDestroyed(),this._canvas.height=Math.round(e)}get canvas(){return this._checkDestroyed(),this._canvas}get context(){return this._checkDestroyed(),this._context}_checkDestroyed(){if(this._canvas===null)throw new TypeError("The CanvasRenderTarget has already been destroyed")}}function Wx(t,e,r){for(let n=0,i=4*r*e;n<e;++n,i+=4)if(t[i+3]!==0)return!1;return!0}function Xx(t,e,r,n,i){const s=4*e;for(let o=n,u=n*s+4*r;o<=i;++o,u+=s)if(t[u+3]!==0)return!1;return!0}function cP(t){const{width:e,height:r}=t,n=t.getContext("2d",{willReadFrequently:!0});if(n===null)throw new TypeError("Failed to get canvas 2D context");const s=n.getImageData(0,0,e,r).data;let o=0,u=0,c=e-1,h=r-1;for(;u<r&&Wx(s,e,u);)++u;if(u===r)return Rg.EMPTY;for(;Wx(s,e,h);)--h;for(;Xx(s,e,o,u,h);)++o;for(;Xx(s,e,c,u,h);)--c;return++c,++h,new Rg(o,u,c,h)}function hP(t){const e=cP(t),{width:r,height:n}=e;let i=null;if(!e.isEmpty()){const s=t.getContext("2d");if(s===null)throw new TypeError("Failed to get canvas 2D context");i=s.getImageData(e.left,e.top,r,n)}return{width:r,height:n,data:i}}let Oc;function dP(t,e=globalThis.location){if(t.startsWith("data:"))return"";e=e||globalThis.location,Oc||(Oc=document.createElement("a")),Oc.href=t;const r=VA.parse(Oc.href),n=!r.port&&e.port===""||r.port===e.port;return r.hostname!==e.hostname||!n||r.protocol!==e.protocol?"anonymous":""}function _s(t,e=1){var n;const r=(n=ee.RETINA_PREFIX)==null?void 0:n.exec(t);return r?parseFloat(r[1]):e}var oe=(t=>(t.Renderer="renderer",t.Application="application",t.RendererSystem="renderer-webgl-system",t.RendererPlugin="renderer-webgl-plugin",t.CanvasRendererSystem="renderer-canvas-system",t.CanvasRendererPlugin="renderer-canvas-plugin",t.Asset="asset",t.LoadParser="load-parser",t.ResolveParser="resolve-parser",t.CacheParser="cache-parser",t.DetectionParser="detection-parser",t))(oe||{});const kg=t=>{if(typeof t=="function"||typeof t=="object"&&t.extension){if(!t.extension)throw new Error("Extension class must have an extension object");t={...typeof t.extension!="object"?{type:t.extension}:t.extension,ref:t}}if(typeof t=="object")t={...t};else throw new Error("Invalid extension type");return typeof t.type=="string"&&(t.type=[t.type]),t},Yx=(t,e)=>{var r;return(r=kg(t).priority)!=null?r:e},me={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...t){return t.map(kg).forEach(e=>{e.type.forEach(r=>{var n,i;return(i=(n=this._removeHandlers)[r])==null?void 0:i.call(n,e)})}),this},add(...t){return t.map(kg).forEach(e=>{e.type.forEach(r=>{const n=this._addHandlers,i=this._queue;n[r]?n[r](e):(i[r]=i[r]||[],i[r].push(e))})}),this},handle(t,e,r){const n=this._addHandlers,i=this._removeHandlers;if(n[t]||i[t])throw new Error(`Extension type ${t} already has a handler`);n[t]=e,i[t]=r;const s=this._queue;return s[t]&&(s[t].forEach(o=>e(o)),delete s[t]),this},handleByMap(t,e){return this.handle(t,r=>{e[r.name]=r.ref},r=>{delete e[r.name]})},handleByList(t,e,r=-1){return this.handle(t,n=>{e.includes(n.ref)||(e.push(n.ref),e.sort((i,s)=>Yx(s,r)-Yx(i,r)))},n=>{const i=e.indexOf(n.ref);i!==-1&&e.splice(i,1)})}};class Mg{constructor(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get uint16View(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}}const fP=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function pP(t){let e="";for(let r=0;r<t;++r)r>0&&(e+=`
else `),r<t-1&&(e+=`if(test == ${r}.0){}`);return e}function mP(t,e){if(t===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const r=e.createShader(e.FRAGMENT_SHADER);for(;;){const n=fP.replace(/%forloop%/gi,pP(t));if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))t=t/2|0;else break}return t}const Qp=0,Zp=1,qp=2,Jp=3,em=4,tm=5;class Bi{constructor(){this.data=0,this.blendMode=pe.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<Qp)}set blend(e){!!(this.data&1<<Qp)!==e&&(this.data^=1<<Qp)}get offsets(){return!!(this.data&1<<Zp)}set offsets(e){!!(this.data&1<<Zp)!==e&&(this.data^=1<<Zp)}get culling(){return!!(this.data&1<<qp)}set culling(e){!!(this.data&1<<qp)!==e&&(this.data^=1<<qp)}get depthTest(){return!!(this.data&1<<Jp)}set depthTest(e){!!(this.data&1<<Jp)!==e&&(this.data^=1<<Jp)}get depthMask(){return!!(this.data&1<<tm)}set depthMask(e){!!(this.data&1<<tm)!==e&&(this.data^=1<<tm)}get clockwiseFrontFace(){return!!(this.data&1<<em)}set clockwiseFrontFace(e){!!(this.data&1<<em)!==e&&(this.data^=1<<em)}get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!==pe.NONE,this._blendMode=e}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const e=new Bi;return e.depthTest=!1,e.blend=!0,e}}const Dg=[];function Ob(t,e){if(!t)return null;let r="";if(typeof t=="string"){const n=/\.(\w{3,4})(?:$|\?|#)/i.exec(t);n&&(r=n[1].toLowerCase())}for(let n=Dg.length-1;n>=0;--n){const i=Dg[n];if(i.test&&i.test(t,r))return new i(t,e)}throw new Error("Unrecognized source type to auto-detect Resource")}class kn{constructor(e){this.items=[],this._name=e,this._aliasCount=0}emit(e,r,n,i,s,o,u,c){if(arguments.length>8)throw new Error("max arguments reached");const{name:h,items:f}=this;this._aliasCount++;for(let p=0,g=f.length;p<g;p++)f[p][h](e,r,n,i,s,o,u,c);return f===this.items&&this._aliasCount--,this}ensureNonAliasedItems(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))}add(e){return e[this._name]&&(this.ensureNonAliasedItems(),this.remove(e),this.items.push(e)),this}remove(e){const r=this.items.indexOf(e);return r!==-1&&(this.ensureNonAliasedItems(),this.items.splice(r,1)),this}contains(e){return this.items.includes(e)}removeAll(){return this.ensureNonAliasedItems(),this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}Object.defineProperties(kn.prototype,{dispatch:{value:kn.prototype.emit},run:{value:kn.prototype.emit}});class au{constructor(e=0,r=0){this._width=e,this._height=r,this.destroyed=!1,this.internal=!1,this.onResize=new kn("setRealSize"),this.onUpdate=new kn("update"),this.onError=new kn("onError")}bind(e){this.onResize.add(e),this.onUpdate.add(e),this.onError.add(e),(this._width||this._height)&&this.onResize.emit(this._width,this._height)}unbind(e){this.onResize.remove(e),this.onUpdate.remove(e),this.onError.remove(e)}resize(e,r){(e!==this._width||r!==this._height)&&(this._width=e,this._height=r,this.onResize.emit(e,r))}get valid(){return!!this._width&&!!this._height}update(){this.destroyed||this.onUpdate.emit()}load(){return Promise.resolve(this)}get width(){return this._width}get height(){return this._height}style(e,r,n){return!1}dispose(){}destroy(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)}static test(e,r){return!1}}class Tu extends au{constructor(e,r){const{width:n,height:i}=r||{};if(!n||!i)throw new Error("BufferResource width or height invalid");super(n,i),this.data=e}upload(e,r,n){const i=e.gl;i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.alphaMode===Nn.UNPACK);const s=r.realWidth,o=r.realHeight;return n.width===s&&n.height===o?i.texSubImage2D(r.target,0,0,0,s,o,r.format,n.type,this.data):(n.width=s,n.height=o,i.texImage2D(r.target,0,n.internalFormat,s,o,0,r.format,n.type,this.data)),!0}dispose(){this.data=null}static test(e){return e instanceof Float32Array||e instanceof Uint8Array||e instanceof Uint32Array}}const gP={scaleMode:qn.NEAREST,format:J.RGBA,alphaMode:Nn.NPM},zo=class extends Ma{constructor(t=null,e=null){super(),e=Object.assign({},zo.defaultOptions,e);const{alphaMode:r,mipmap:n,anisotropicLevel:i,scaleMode:s,width:o,height:u,wrapMode:c,format:h,type:f,target:p,resolution:g,resourceOptions:v}=e;t&&!(t instanceof au)&&(t=Ob(t,v),t.internal=!0),this.resolution=g||ee.RESOLUTION,this.width=Math.round((o||0)*this.resolution)/this.resolution,this.height=Math.round((u||0)*this.resolution)/this.resolution,this._mipmap=n,this.anisotropicLevel=i,this._wrapMode=c,this._scaleMode=s,this.format=h,this.type=f,this.target=p,this.alphaMode=r,this.uid=uo(),this.touched=0,this.isPowerOfTwo=!1,this._refreshPOT(),this._glTextures={},this.dirtyId=0,this.dirtyStyleId=0,this.cacheId=null,this.valid=o>0&&u>0,this.textureCacheIds=[],this.destroyed=!1,this.resource=null,this._batchEnabled=0,this._batchLocation=0,this.parentTextureArray=null,this.setResource(t)}get realWidth(){return Math.round(this.width*this.resolution)}get realHeight(){return Math.round(this.height*this.resolution)}get mipmap(){return this._mipmap}set mipmap(t){this._mipmap!==t&&(this._mipmap=t,this.dirtyStyleId++)}get scaleMode(){return this._scaleMode}set scaleMode(t){this._scaleMode!==t&&(this._scaleMode=t,this.dirtyStyleId++)}get wrapMode(){return this._wrapMode}set wrapMode(t){this._wrapMode!==t&&(this._wrapMode=t,this.dirtyStyleId++)}setStyle(t,e){let r;return t!==void 0&&t!==this.scaleMode&&(this.scaleMode=t,r=!0),e!==void 0&&e!==this.mipmap&&(this.mipmap=e,r=!0),r&&this.dirtyStyleId++,this}setSize(t,e,r){return r=r||this.resolution,this.setRealSize(t*r,e*r,r)}setRealSize(t,e,r){return this.resolution=r||this.resolution,this.width=Math.round(t)/this.resolution,this.height=Math.round(e)/this.resolution,this._refreshPOT(),this.update(),this}_refreshPOT(){this.isPowerOfTwo=Hx(this.realWidth)&&Hx(this.realHeight)}setResolution(t){const e=this.resolution;return e===t?this:(this.resolution=t,this.valid&&(this.width=Math.round(this.width*e)/t,this.height=Math.round(this.height*e)/t,this.emit("update",this)),this._refreshPOT(),this)}setResource(t){if(this.resource===t)return this;if(this.resource)throw new Error("Resource can be set only once");return t.bind(this),this.resource=t,this}update(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))}onError(t){this.emit("error",this,t)}destroy(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete Zi[this.cacheId],delete Xn[this.cacheId],this.cacheId=null),this.dispose(),zo.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0}dispose(){this.emit("dispose",this)}castToBaseTexture(){return this}static from(t,e,r=ee.STRICT_TEXTURE_CACHE){const n=typeof t=="string";let i=null;if(n)i=t;else{if(!t._pixiId){const o=(e==null?void 0:e.pixiIdPrefix)||"pixiid";t._pixiId=`${o}_${uo()}`}i=t._pixiId}let s=Zi[i];if(n&&r&&!s)throw new Error(`The cacheId "${i}" does not exist in BaseTextureCache.`);return s||(s=new zo(t,e),s.cacheId=i,zo.addToCache(s,i)),s}static fromBuffer(t,e,r,n){t=t||new Float32Array(e*r*4);const i=new Tu(t,{width:e,height:r}),s=t instanceof Float32Array?ve.FLOAT:ve.UNSIGNED_BYTE;return new zo(i,Object.assign({},gP,{type:s},n))}static addToCache(t,e){e&&(t.textureCacheIds.includes(e)||t.textureCacheIds.push(e),Zi[e]&&Zi[e]!==t&&console.warn(`BaseTexture added to the cache with an id [${e}] that already had an entry`),Zi[e]=t)}static removeFromCache(t){if(typeof t=="string"){const e=Zi[t];if(e){const r=e.textureCacheIds.indexOf(t);return r>-1&&e.textureCacheIds.splice(r,1),delete Zi[t],e}}else if(t!=null&&t.textureCacheIds){for(let e=0;e<t.textureCacheIds.length;++e)delete Zi[t.textureCacheIds[e]];return t.textureCacheIds.length=0,t}return null}};let be=zo;be.defaultOptions={mipmap:si.POW2,anisotropicLevel:0,scaleMode:qn.LINEAR,wrapMode:Ai.CLAMP,alphaMode:Nn.UNPACK,target:fa.TEXTURE_2D,format:J.RGBA,type:ve.UNSIGNED_BYTE};be._globalBatch=0;class Ng{constructor(){this.texArray=null,this.blend=0,this.type=Sn.TRIANGLES,this.start=0,this.size=0,this.data=null}}let yP=0;class xt{constructor(e,r=!0,n=!1){this.data=e||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=n,this.static=r,this.id=yP++,this.disposeRunner=new kn("disposeBuffer")}update(e){e instanceof Array&&(e=new Float32Array(e)),this.data=e||this.data,this._updateID++}dispose(){this.disposeRunner.emit(this,!1)}destroy(){this.dispose(),this.data=null}set index(e){this.type=e?ri.ELEMENT_ARRAY_BUFFER:ri.ARRAY_BUFFER}get index(){return this.type===ri.ELEMENT_ARRAY_BUFFER}static from(e){return e instanceof Array&&(e=new Float32Array(e)),new xt(e)}}class ed{constructor(e,r=0,n=!1,i=ve.FLOAT,s,o,u,c=1){this.buffer=e,this.size=r,this.normalized=n,this.type=i,this.stride=s,this.start=o,this.instance=u,this.divisor=c}destroy(){this.buffer=null}static from(e,r,n,i,s){return new ed(e,r,n,i,s)}}const vP={Float32Array,Uint32Array,Int32Array,Uint8Array};function xP(t,e){let r=0,n=0;const i={};for(let c=0;c<t.length;c++)n+=e[c],r+=t[c].length;const s=new ArrayBuffer(r*4);let o=null,u=0;for(let c=0;c<t.length;c++){const h=e[c],f=t[c],p=Db(f);i[p]||(i[p]=new vP[p](s)),o=i[p];for(let g=0;g<f.length;g++){const v=(g/h|0)*n+u,x=g%h;o[v+x]=f[g]}u+=h}return new Float32Array(s)}const Kx={5126:4,5123:2,5121:1};let _P=0;const TP={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array};class Ts{constructor(e=[],r={}){this.buffers=e,this.indexBuffer=null,this.attributes=r,this.glVertexArrayObjects={},this.id=_P++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new kn("disposeGeometry"),this.refCount=0}addAttribute(e,r,n=0,i=!1,s,o,u,c=!1){if(!r)throw new Error("You must pass a buffer when creating an attribute");r instanceof xt||(r instanceof Array&&(r=new Float32Array(r)),r=new xt(r));const h=e.split("|");if(h.length>1){for(let p=0;p<h.length;p++)this.addAttribute(h[p],r,n,i,s);return this}let f=this.buffers.indexOf(r);return f===-1&&(this.buffers.push(r),f=this.buffers.length-1),this.attributes[e]=new ed(f,n,i,s,o,u,c),this.instanced=this.instanced||c,this}getAttribute(e){return this.attributes[e]}getBuffer(e){return this.buffers[this.getAttribute(e).buffer]}addIndex(e){return e instanceof xt||(e instanceof Array&&(e=new Uint16Array(e)),e=new xt(e)),e.type=ri.ELEMENT_ARRAY_BUFFER,this.indexBuffer=e,this.buffers.includes(e)||this.buffers.push(e),this}getIndex(){return this.indexBuffer}interleave(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;const e=[],r=[],n=new xt;let i;for(i in this.attributes){const s=this.attributes[i],o=this.buffers[s.buffer];e.push(o.data),r.push(s.size*Kx[s.type]/4),s.buffer=0}for(n.data=xP(e,r),i=0;i<this.buffers.length;i++)this.buffers[i]!==this.indexBuffer&&this.buffers[i].destroy();return this.buffers=[n],this.indexBuffer&&this.buffers.push(this.indexBuffer),this}getSize(){for(const e in this.attributes){const r=this.attributes[e];return this.buffers[r.buffer].data.length/(r.stride/4||r.size)}return 0}dispose(){this.disposeRunner.emit(this,!1)}destroy(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null}clone(){const e=new Ts;for(let r=0;r<this.buffers.length;r++)e.buffers[r]=new xt(this.buffers[r].data.slice(0));for(const r in this.attributes){const n=this.attributes[r];e.attributes[r]=new ed(n.buffer,n.size,n.normalized,n.type,n.stride,n.start,n.instance)}return this.indexBuffer&&(e.indexBuffer=e.buffers[this.buffers.indexOf(this.indexBuffer)],e.indexBuffer.type=ri.ELEMENT_ARRAY_BUFFER),e}static merge(e){const r=new Ts,n=[],i=[],s=[];let o;for(let u=0;u<e.length;u++){o=e[u];for(let c=0;c<o.buffers.length;c++)i[c]=i[c]||0,i[c]+=o.buffers[c].data.length,s[c]=0}for(let u=0;u<o.buffers.length;u++)n[u]=new TP[Db(o.buffers[u].data)](i[u]),r.buffers[u]=new xt(n[u]);for(let u=0;u<e.length;u++){o=e[u];for(let c=0;c<o.buffers.length;c++)n[c].set(o.buffers[c].data,s[c]),s[c]+=o.buffers[c].data.length}if(r.attributes=o.attributes,o.indexBuffer){r.indexBuffer=r.buffers[o.buffers.indexOf(o.indexBuffer)],r.indexBuffer.type=ri.ELEMENT_ARRAY_BUFFER;let u=0,c=0,h=0,f=0;for(let p=0;p<o.buffers.length;p++)if(o.buffers[p]!==o.indexBuffer){f=p;break}for(const p in o.attributes){const g=o.attributes[p];(g.buffer|0)===f&&(c+=g.size*Kx[g.type]/4)}for(let p=0;p<e.length;p++){const g=e[p].indexBuffer.data;for(let v=0;v<g.length;v++)r.indexBuffer.data[v+h]+=u;u+=e[p].buffers[f].data.length/c,h+=g.length}}return r}}class Fb extends Ts{constructor(e=!1){super(),this._buffer=new xt(null,e,!1),this._indexBuffer=new xt(null,e,!0),this.addAttribute("aVertexPosition",this._buffer,2,!1,ve.FLOAT).addAttribute("aTextureCoord",this._buffer,2,!1,ve.FLOAT).addAttribute("aColor",this._buffer,4,!0,ve.UNSIGNED_BYTE).addAttribute("aTextureId",this._buffer,1,!0,ve.FLOAT).addIndex(this._indexBuffer)}}const td=Math.PI*2,bP=180/Math.PI,lu=Math.PI/180;var Vt=(t=>(t[t.POLY=0]="POLY",t[t.RECT=1]="RECT",t[t.CIRC=2]="CIRC",t[t.ELIP=3]="ELIP",t[t.RREC=4]="RREC",t))(Vt||{});class we{constructor(e=0,r=0){this.x=0,this.y=0,this.x=e,this.y=r}clone(){return new we(this.x,this.y)}copyFrom(e){return this.set(e.x,e.y),this}copyTo(e){return e.set(this.x,this.y),e}equals(e){return e.x===this.x&&e.y===this.y}set(e=0,r=e){return this.x=e,this.y=r,this}toString(){return`[@pixi/math:Point x=${this.x} y=${this.y}]`}}const Fc=[new we,new we,new we,new we];class Ee{constructor(e=0,r=0,n=0,i=0){this.x=Number(e),this.y=Number(r),this.width=Number(n),this.height=Number(i),this.type=Vt.RECT}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}static get EMPTY(){return new Ee(0,0,0,0)}clone(){return new Ee(this.x,this.y,this.width,this.height)}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e}contains(e,r){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&r>=this.y&&r<this.y+this.height}intersects(e,r){if(!r){const M=this.x<e.x?e.x:this.x;if((this.right>e.right?e.right:this.right)<=M)return!1;const X=this.y<e.y?e.y:this.y;return(this.bottom>e.bottom?e.bottom:this.bottom)>X}const n=this.left,i=this.right,s=this.top,o=this.bottom;if(i<=n||o<=s)return!1;const u=Fc[0].set(e.left,e.top),c=Fc[1].set(e.left,e.bottom),h=Fc[2].set(e.right,e.top),f=Fc[3].set(e.right,e.bottom);if(h.x<=u.x||c.y<=u.y)return!1;const p=Math.sign(r.a*r.d-r.b*r.c);if(p===0||(r.apply(u,u),r.apply(c,c),r.apply(h,h),r.apply(f,f),Math.max(u.x,c.x,h.x,f.x)<=n||Math.min(u.x,c.x,h.x,f.x)>=i||Math.max(u.y,c.y,h.y,f.y)<=s||Math.min(u.y,c.y,h.y,f.y)>=o))return!1;const g=p*(c.y-u.y),v=p*(u.x-c.x),x=g*n+v*s,S=g*i+v*s,E=g*n+v*o,w=g*i+v*o;if(Math.max(x,S,E,w)<=g*u.x+v*u.y||Math.min(x,S,E,w)>=g*f.x+v*f.y)return!1;const b=p*(u.y-h.y),T=p*(h.x-u.x),A=b*n+T*s,P=b*i+T*s,O=b*n+T*o,D=b*i+T*o;return!(Math.max(A,P,O,D)<=b*u.x+T*u.y||Math.min(A,P,O,D)>=b*f.x+T*f.y)}pad(e=0,r=e){return this.x-=e,this.y-=r,this.width+=e*2,this.height+=r*2,this}fit(e){const r=Math.max(this.x,e.x),n=Math.min(this.x+this.width,e.x+e.width),i=Math.max(this.y,e.y),s=Math.min(this.y+this.height,e.y+e.height);return this.x=r,this.width=Math.max(n-r,0),this.y=i,this.height=Math.max(s-i,0),this}ceil(e=1,r=.001){const n=Math.ceil((this.x+this.width-r)*e)/e,i=Math.ceil((this.y+this.height-r)*e)/e;return this.x=Math.floor((this.x+r)*e)/e,this.y=Math.floor((this.y+r)*e)/e,this.width=n-this.x,this.height=i-this.y,this}enlarge(e){const r=Math.min(this.x,e.x),n=Math.max(this.x+this.width,e.x+e.width),i=Math.min(this.y,e.y),s=Math.max(this.y+this.height,e.y+e.height);return this.x=r,this.width=n-r,this.y=i,this.height=s-i,this}toString(){return`[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}class ly{constructor(e=0,r=0,n=0){this.x=e,this.y=r,this.radius=n,this.type=Vt.CIRC}clone(){return new ly(this.x,this.y,this.radius)}contains(e,r){if(this.radius<=0)return!1;const n=this.radius*this.radius;let i=this.x-e,s=this.y-r;return i*=i,s*=s,i+s<=n}getBounds(){return new Ee(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)}toString(){return`[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class uy{constructor(e=0,r=0,n=0,i=0){this.x=e,this.y=r,this.width=n,this.height=i,this.type=Vt.ELIP}clone(){return new uy(this.x,this.y,this.width,this.height)}contains(e,r){if(this.width<=0||this.height<=0)return!1;let n=(e-this.x)/this.width,i=(r-this.y)/this.height;return n*=n,i*=i,n+i<=1}getBounds(){return new Ee(this.x-this.width,this.y-this.height,this.width,this.height)}toString(){return`[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}class ya{constructor(...e){let r=Array.isArray(e[0])?e[0]:e;if(typeof r[0]!="number"){const n=[];for(let i=0,s=r.length;i<s;i++)n.push(r[i].x,r[i].y);r=n}this.points=r,this.type=Vt.POLY,this.closeStroke=!0}clone(){const e=this.points.slice(),r=new ya(e);return r.closeStroke=this.closeStroke,r}contains(e,r){let n=!1;const i=this.points.length/2;for(let s=0,o=i-1;s<i;o=s++){const u=this.points[s*2],c=this.points[s*2+1],h=this.points[o*2],f=this.points[o*2+1];c>r!=f>r&&e<(h-u)*((r-c)/(f-c))+u&&(n=!n)}return n}toString(){return`[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce((e,r)=>`${e}, ${r}`,"")}]`}}class cy{constructor(e=0,r=0,n=0,i=0,s=20){this.x=e,this.y=r,this.width=n,this.height=i,this.radius=s,this.type=Vt.RREC}clone(){return new cy(this.x,this.y,this.width,this.height,this.radius)}contains(e,r){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&r>=this.y&&r<=this.y+this.height){const n=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(r>=this.y+n&&r<=this.y+this.height-n||e>=this.x+n&&e<=this.x+this.width-n)return!0;let i=e-(this.x+n),s=r-(this.y+n);const o=n*n;if(i*i+s*s<=o||(i=e-(this.x+this.width-n),i*i+s*s<=o)||(s=r-(this.y+this.height-n),i*i+s*s<=o)||(i=e-(this.x+n),i*i+s*s<=o))return!0}return!1}toString(){return`[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}class it{constructor(e=1,r=0,n=0,i=1,s=0,o=0){this.array=null,this.a=e,this.b=r,this.c=n,this.d=i,this.tx=s,this.ty=o}fromArray(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]}set(e,r,n,i,s,o){return this.a=e,this.b=r,this.c=n,this.d=i,this.tx=s,this.ty=o,this}toArray(e,r){this.array||(this.array=new Float32Array(9));const n=r||this.array;return e?(n[0]=this.a,n[1]=this.b,n[2]=0,n[3]=this.c,n[4]=this.d,n[5]=0,n[6]=this.tx,n[7]=this.ty,n[8]=1):(n[0]=this.a,n[1]=this.c,n[2]=this.tx,n[3]=this.b,n[4]=this.d,n[5]=this.ty,n[6]=0,n[7]=0,n[8]=1),n}apply(e,r){r=r||new we;const n=e.x,i=e.y;return r.x=this.a*n+this.c*i+this.tx,r.y=this.b*n+this.d*i+this.ty,r}applyInverse(e,r){r=r||new we;const n=1/(this.a*this.d+this.c*-this.b),i=e.x,s=e.y;return r.x=this.d*n*i+-this.c*n*s+(this.ty*this.c-this.tx*this.d)*n,r.y=this.a*n*s+-this.b*n*i+(-this.ty*this.a+this.tx*this.b)*n,r}translate(e,r){return this.tx+=e,this.ty+=r,this}scale(e,r){return this.a*=e,this.d*=r,this.c*=e,this.b*=r,this.tx*=e,this.ty*=r,this}rotate(e){const r=Math.cos(e),n=Math.sin(e),i=this.a,s=this.c,o=this.tx;return this.a=i*r-this.b*n,this.b=i*n+this.b*r,this.c=s*r-this.d*n,this.d=s*n+this.d*r,this.tx=o*r-this.ty*n,this.ty=o*n+this.ty*r,this}append(e){const r=this.a,n=this.b,i=this.c,s=this.d;return this.a=e.a*r+e.b*i,this.b=e.a*n+e.b*s,this.c=e.c*r+e.d*i,this.d=e.c*n+e.d*s,this.tx=e.tx*r+e.ty*i+this.tx,this.ty=e.tx*n+e.ty*s+this.ty,this}setTransform(e,r,n,i,s,o,u,c,h){return this.a=Math.cos(u+h)*s,this.b=Math.sin(u+h)*s,this.c=-Math.sin(u-c)*o,this.d=Math.cos(u-c)*o,this.tx=e-(n*this.a+i*this.c),this.ty=r-(n*this.b+i*this.d),this}prepend(e){const r=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){const n=this.a,i=this.c;this.a=n*e.a+this.b*e.c,this.b=n*e.b+this.b*e.d,this.c=i*e.a+this.d*e.c,this.d=i*e.b+this.d*e.d}return this.tx=r*e.a+this.ty*e.c+e.tx,this.ty=r*e.b+this.ty*e.d+e.ty,this}decompose(e){const r=this.a,n=this.b,i=this.c,s=this.d,o=e.pivot,u=-Math.atan2(-i,s),c=Math.atan2(n,r),h=Math.abs(u+c);return h<1e-5||Math.abs(td-h)<1e-5?(e.rotation=c,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=u,e.skew.y=c),e.scale.x=Math.sqrt(r*r+n*n),e.scale.y=Math.sqrt(i*i+s*s),e.position.x=this.tx+(o.x*r+o.y*i),e.position.y=this.ty+(o.x*n+o.y*s),e}invert(){const e=this.a,r=this.b,n=this.c,i=this.d,s=this.tx,o=e*i-r*n;return this.a=i/o,this.b=-r/o,this.c=-n/o,this.d=e/o,this.tx=(n*this.ty-i*s)/o,this.ty=-(e*this.ty-r*s)/o,this}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const e=new it;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyTo(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyFrom(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this}toString(){return`[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return new it}static get TEMP_MATRIX(){return new it}}const $s=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],Vs=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Ws=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Xs=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Og=[],Lb=[],Lc=Math.sign;function wP(){for(let t=0;t<16;t++){const e=[];Og.push(e);for(let r=0;r<16;r++){const n=Lc($s[t]*$s[r]+Ws[t]*Vs[r]),i=Lc(Vs[t]*$s[r]+Xs[t]*Vs[r]),s=Lc($s[t]*Ws[r]+Ws[t]*Xs[r]),o=Lc(Vs[t]*Ws[r]+Xs[t]*Xs[r]);for(let u=0;u<16;u++)if($s[u]===n&&Vs[u]===i&&Ws[u]===s&&Xs[u]===o){e.push(u);break}}}for(let t=0;t<16;t++){const e=new it;e.set($s[t],Vs[t],Ws[t],Xs[t],0,0),Lb.push(e)}}wP();const ot={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:t=>$s[t],uY:t=>Vs[t],vX:t=>Ws[t],vY:t=>Xs[t],inv:t=>t&8?t&15:-t&7,add:(t,e)=>Og[t][e],sub:(t,e)=>Og[t][ot.inv(e)],rotate180:t=>t^4,isVertical:t=>(t&3)===2,byDirection:(t,e)=>Math.abs(t)*2<=Math.abs(e)?e>=0?ot.S:ot.N:Math.abs(e)*2<=Math.abs(t)?t>0?ot.E:ot.W:e>0?t>0?ot.SE:ot.SW:t>0?ot.NE:ot.NW,matrixAppendRotationInv:(t,e,r=0,n=0)=>{const i=Lb[ot.inv(e)];i.tx=r,i.ty=n,t.append(i)}};class Jn{constructor(e,r,n=0,i=0){this._x=n,this._y=i,this.cb=e,this.scope=r}clone(e=this.cb,r=this.scope){return new Jn(e,r,this._x,this._y)}set(e=0,r=e){return(this._x!==e||this._y!==r)&&(this._x=e,this._y=r,this.cb.call(this.scope)),this}copyFrom(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this.cb.call(this.scope)),this}copyTo(e){return e.set(this._x,this._y),e}equals(e){return e.x===this._x&&e.y===this._y}toString(){return`[@pixi/math:ObservablePoint x=${0} y=${0} scope=${this.scope}]`}get x(){return this._x}set x(e){this._x!==e&&(this._x=e,this.cb.call(this.scope))}get y(){return this._y}set y(e){this._y!==e&&(this._y=e,this.cb.call(this.scope))}}const Bb=class{constructor(){this.worldTransform=new it,this.localTransform=new it,this.position=new Jn(this.onChange,this,0,0),this.scale=new Jn(this.onChange,this,1,1),this.pivot=new Jn(this.onChange,this,0,0),this.skew=new Jn(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}onChange(){this._localID++}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++}toString(){return`[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}updateLocalTransform(){const t=this.localTransform;this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1)}updateTransform(t){const e=this.localTransform;if(this._localID!==this._currentLocalID&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==t._worldID){const r=t.worldTransform,n=this.worldTransform;n.a=e.a*r.a+e.b*r.c,n.b=e.a*r.b+e.b*r.d,n.c=e.c*r.a+e.d*r.c,n.d=e.c*r.b+e.d*r.d,n.tx=e.tx*r.a+e.ty*r.c+r.tx,n.ty=e.tx*r.b+e.ty*r.d+r.ty,this._parentID=t._worldID,this._worldID++}}setFromMatrix(t){t.decompose(this),this._localID++}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this.updateSkew())}};let Bd=Bb;Bd.IDENTITY=new Bb;var SP=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,EP=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;function Qx(t,e,r){const n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),n}function rm(t){const e=new Array(t);for(let r=0;r<e.length;r++)e[r]=!1;return e}function Ub(t,e){switch(t){case"float":return 0;case"vec2":return new Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new Float32Array(4*e);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new Int32Array(4*e);case"uvec2":return new Uint32Array(2*e);case"uvec3":return new Uint32Array(3*e);case"uvec4":return new Uint32Array(4*e);case"bool":return!1;case"bvec2":return rm(2*e);case"bvec3":return rm(3*e);case"bvec4":return rm(4*e);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const va=[{test:t=>t.type==="float"&&t.size===1&&!t.isArray,code:t=>`
            if(uv["${t}"] !== ud["${t}"].value)
            {
                ud["${t}"].value = uv["${t}"]
                gl.uniform1f(ud["${t}"].location, uv["${t}"])
            }
            `},{test:(t,e)=>(t.type==="sampler2D"||t.type==="samplerCube"||t.type==="sampler2DArray")&&t.size===1&&!t.isArray&&(e==null||e.castToBaseTexture!==void 0),code:t=>`t = syncData.textureCount++;

            renderer.texture.bind(uv["${t}"], t);

            if(ud["${t}"].value !== t)
            {
                ud["${t}"].value = t;
                gl.uniform1i(ud["${t}"].location, t);
; // eslint-disable-line max-len
            }`},{test:(t,e)=>t.type==="mat3"&&t.size===1&&!t.isArray&&e.a!==void 0,code:t=>`
            gl.uniformMatrix3fv(ud["${t}"].location, false, uv["${t}"].toArray(true));
            `,codeUbo:t=>`
                var ${t}_matrix = uv.${t}.toArray(true);

                data[offset] = ${t}_matrix[0];
                data[offset+1] = ${t}_matrix[1];
                data[offset+2] = ${t}_matrix[2];
        
                data[offset + 4] = ${t}_matrix[3];
                data[offset + 5] = ${t}_matrix[4];
                data[offset + 6] = ${t}_matrix[5];
        
                data[offset + 8] = ${t}_matrix[6];
                data[offset + 9] = ${t}_matrix[7];
                data[offset + 10] = ${t}_matrix[8];
            `},{test:(t,e)=>t.type==="vec2"&&t.size===1&&!t.isArray&&e.x!==void 0,code:t=>`
                cv = ud["${t}"].value;
                v = uv["${t}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${t}"].location, v.x, v.y);
                }`,codeUbo:t=>`
                v = uv.${t};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `},{test:t=>t.type==="vec2"&&t.size===1&&!t.isArray,code:t=>`
                cv = ud["${t}"].value;
                v = uv["${t}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${t}"].location, v[0], v[1]);
                }
            `},{test:(t,e)=>t.type==="vec4"&&t.size===1&&!t.isArray&&e.width!==void 0,code:t=>`
                cv = ud["${t}"].value;
                v = uv["${t}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${t}"].location, v.x, v.y, v.width, v.height)
                }`,codeUbo:t=>`
                    v = uv.${t};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `},{test:(t,e)=>t.type==="vec4"&&t.size===1&&!t.isArray&&e.red!==void 0,code:t=>`
                cv = ud["${t}"].value;
                v = uv["${t}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${t}"].location, v.red, v.green, v.blue, v.alpha)
                }`,codeUbo:t=>`
                    v = uv.${t};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `},{test:(t,e)=>t.type==="vec3"&&t.size===1&&!t.isArray&&e.red!==void 0,code:t=>`
                cv = ud["${t}"].value;
                v = uv["${t}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${t}"].location, v.red, v.green, v.blue)
                }`,codeUbo:t=>`
                    v = uv.${t};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `},{test:t=>t.type==="vec4"&&t.size===1&&!t.isArray,code:t=>`
                cv = ud["${t}"].value;
                v = uv["${t}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${t}"].location, v[0], v[1], v[2], v[3])
                }`}],CP={float:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,vec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,vec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,vec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,int:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,ivec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,ivec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,ivec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,uint:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,uvec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,uvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,uvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,bool:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,bvec2:`
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,bvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,bvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,samplerCube:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,sampler2DArray:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`},AP={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function PP(t,e){var n;const r=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];for(const i in t.uniforms){const s=e[i];if(!s){(n=t.uniforms[i])!=null&&n.group&&(t.uniforms[i].ubo?r.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${i}, '${i}');
                    `):r.push(`
                        renderer.shader.syncUniformGroup(uv.${i}, syncData);
                    `));continue}const o=t.uniforms[i];let u=!1;for(let c=0;c<va.length;c++)if(va[c].test(s,o)){r.push(va[c].code(i,o)),u=!0;break}if(!u){const h=(s.size===1&&!s.isArray?CP:AP)[s.type].replace("location",`ud["${i}"].location`);r.push(`
            cu = ud["${i}"];
            cv = cu.value;
            v = uv["${i}"];
            ${h};`)}}return new Function("ud","uv","renderer","syncData",r.join(`
`))}const zb={};let Fo=zb;function IP(){if(Fo===zb||(Fo==null?void 0:Fo.isContextLost())){const t=ee.ADAPTER.createCanvas();let e;ee.PREFER_ENV>=po.WEBGL2&&(e=t.getContext("webgl2",{})),e||(e=t.getContext("webgl",{})||t.getContext("experimental-webgl",{}),e?e.getExtension("WEBGL_draw_buffers"):e=null),Fo=e}return Fo}let Bc;function RP(){if(!Bc){Bc=Jr.MEDIUM;const t=IP();t&&t.getShaderPrecisionFormat&&(Bc=t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision?Jr.HIGH:Jr.MEDIUM)}return Bc}function Zx(t,e){const r=t.getShaderSource(e).split(`
`).map((h,f)=>`${f}: ${h}`),n=t.getShaderInfoLog(e),i=n.split(`
`),s={},o=i.map(h=>parseFloat(h.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))).filter(h=>h&&!s[h]?(s[h]=!0,!0):!1),u=[""];o.forEach(h=>{r[h-1]=`%c${r[h-1]}%c`,u.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});const c=r.join(`
`);u[0]=c,console.error(n),console.groupCollapsed("click to view full shader code"),console.warn(...u),console.groupEnd()}function kP(t,e,r,n){t.getProgramParameter(e,t.LINK_STATUS)||(t.getShaderParameter(r,t.COMPILE_STATUS)||Zx(t,r),t.getShaderParameter(n,t.COMPILE_STATUS)||Zx(t,n),console.error("PixiJS Error: Could not initialize shader."),t.getProgramInfoLog(e)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",t.getProgramInfoLog(e)))}const MP={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function Gb(t){return MP[t]}let Uc=null;const qx={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function jb(t,e){if(!Uc){const r=Object.keys(qx);Uc={};for(let n=0;n<r.length;++n){const i=r[n];Uc[t[i]]=qx[i]}}return Uc[e]}function Jx(t,e,r){if(t.substring(0,9)!=="precision"){let n=e;return e===Jr.HIGH&&r!==Jr.HIGH&&(n=Jr.MEDIUM),`precision ${n} float;
${t}`}else if(r!==Jr.HIGH&&t.substring(0,15)==="precision highp")return t.replace("precision highp","precision mediump");return t}let hl;function DP(){if(typeof hl=="boolean")return hl;try{hl=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{hl=!1}return hl}let NP=0;const zc={},Go=class{constructor(t,e,r="pixi-shader",n={}){this.extra={},this.id=NP++,this.vertexSrc=t||Go.defaultVertexSrc,this.fragmentSrc=e||Go.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.extra=n,this.vertexSrc.substring(0,8)!=="#version"&&(r=r.replace(/\s+/g,"-"),zc[r]?(zc[r]++,r+=`-${zc[r]}`):zc[r]=1,this.vertexSrc=`#define SHADER_NAME ${r}
${this.vertexSrc}`,this.fragmentSrc=`#define SHADER_NAME ${r}
${this.fragmentSrc}`,this.vertexSrc=Jx(this.vertexSrc,Go.defaultVertexPrecision,Jr.HIGH),this.fragmentSrc=Jx(this.fragmentSrc,Go.defaultFragmentPrecision,RP())),this.glPrograms={},this.syncUniforms=null}static get defaultVertexSrc(){return EP}static get defaultFragmentSrc(){return SP}static from(t,e,r){const n=t+e;let i=Vx[n];return i||(Vx[n]=i=new Go(t,e,r)),i}};let En=Go;En.defaultVertexPrecision=Jr.HIGH;En.defaultFragmentPrecision=Ei.apple.device?Jr.HIGH:Jr.MEDIUM;let OP=0;class Mn{constructor(e,r,n){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=OP++,this.static=!!r,this.ubo=!!n,e instanceof xt?(this.buffer=e,this.buffer.type=ri.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=e,this.ubo&&(this.buffer=new xt(new Float32Array(1)),this.buffer.type=ri.UNIFORM_BUFFER,this.autoManage=!0))}update(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()}add(e,r,n){if(!this.ubo)this.uniforms[e]=new Mn(r,n);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")}static from(e,r,n){return new Mn(e,r,n)}static uboFrom(e,r){return new Mn(e,r!=null?r:!0,!0)}}class ni{constructor(e,r){this.uniformBindCount=0,this.program=e,r?r instanceof Mn?this.uniformGroup=r:this.uniformGroup=new Mn(r):this.uniformGroup=new Mn({}),this.disposeRunner=new kn("disposeShader")}checkUniformExists(e,r){if(r.uniforms[e])return!0;for(const n in r.uniforms){const i=r.uniforms[n];if(i.group&&this.checkUniformExists(e,i))return!0}return!1}destroy(){this.uniformGroup=null,this.disposeRunner.emit(this),this.disposeRunner.destroy()}get uniforms(){return this.uniformGroup.uniforms}static from(e,r,n){const i=En.from(e,r);return new ni(i,n)}}class FP{constructor(e,r){if(this.vertexSrc=e,this.fragTemplate=r,this.programCache={},this.defaultGroupCache={},!r.includes("%count%"))throw new Error('Fragment template must contain "%count%".');if(!r.includes("%forloop%"))throw new Error('Fragment template must contain "%forloop%".')}generateShader(e){if(!this.programCache[e]){const n=new Int32Array(e);for(let s=0;s<e;s++)n[s]=s;this.defaultGroupCache[e]=Mn.from({uSamplers:n},!0);let i=this.fragTemplate;i=i.replace(/%count%/gi,`${e}`),i=i.replace(/%forloop%/gi,this.generateSampleSrc(e)),this.programCache[e]=new En(this.vertexSrc,i)}const r={tint:new Float32Array([1,1,1,1]),translationMatrix:new it,default:this.defaultGroupCache[e]};return new ni(this.programCache[e],r)}generateSampleSrc(e){let r="";r+=`
`,r+=`
`;for(let n=0;n<e;n++)n>0&&(r+=`
else `),n<e-1&&(r+=`if(vTextureId < ${n}.5)`),r+=`
{`,r+=`
	color = texture2D(uSamplers[${n}], vTextureCoord);`,r+=`
}`;return r+=`
`,r+=`
`,r}}class Fg{constructor(){this.elements=[],this.ids=[],this.count=0}clear(){for(let e=0;e<this.count;e++)this.elements[e]=null;this.count=0}}function LP(){return!Ei.apple.device}function BP(t){let e=!0;const r=ee.ADAPTER.getNavigator();if(Ei.tablet||Ei.phone){if(Ei.apple.device){const n=r.userAgent.match(/OS (\d+)_(\d+)?/);n&&parseInt(n[1],10)<11&&(e=!1)}if(Ei.android.device){const n=r.userAgent.match(/Android\s([0-9.]*)/);n&&parseInt(n[1],10)<7&&(e=!1)}}return e?t:4}class Ud{constructor(e){this.renderer=e}flush(){}destroy(){this.renderer=null}start(){}stop(){this.flush()}render(e){}}var UP=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,zP=`precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;const mn=class extends Ud{constructor(t){super(t),this.setShaderGenerator(),this.geometryClass=Fb,this.vertexSize=6,this.state=Bi.for2d(),this.size=mn.defaultBatchSize*4,this._vertexCount=0,this._indexCount=0,this._bufferedElements=[],this._bufferedTextures=[],this._bufferSize=0,this._shader=null,this._packedGeometries=[],this._packedGeometryPoolSize=2,this._flushId=0,this._aBuffers={},this._iBuffers={},this.maxTextures=1,this.renderer.on("prerender",this.onPrerender,this),t.runners.contextChange.add(this),this._dcIndex=0,this._aIndex=0,this._iIndex=0,this._attributeBuffer=null,this._indexBuffer=null,this._tempBoundTextures=[]}static get defaultMaxTextures(){var t;return this._defaultMaxTextures=(t=this._defaultMaxTextures)!=null?t:BP(32),this._defaultMaxTextures}static set defaultMaxTextures(t){this._defaultMaxTextures=t}static get canUploadSameBuffer(){var t;return this._canUploadSameBuffer=(t=this._canUploadSameBuffer)!=null?t:LP(),this._canUploadSameBuffer}static set canUploadSameBuffer(t){this._canUploadSameBuffer=t}get MAX_TEXTURES(){return Ae("7.1.0","BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"),this.maxTextures}static get defaultVertexSrc(){return zP}static get defaultFragmentTemplate(){return UP}setShaderGenerator({vertex:t=mn.defaultVertexSrc,fragment:e=mn.defaultFragmentTemplate}={}){this.shaderGenerator=new FP(t,e)}contextChange(){const t=this.renderer.gl;ee.PREFER_ENV===po.WEBGL_LEGACY?this.maxTextures=1:(this.maxTextures=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),mn.defaultMaxTextures),this.maxTextures=mP(this.maxTextures,t)),this._shader=this.shaderGenerator.generateShader(this.maxTextures);for(let e=0;e<this._packedGeometryPoolSize;e++)this._packedGeometries[e]=new this.geometryClass;this.initFlushBuffers()}initFlushBuffers(){const{_drawCallPool:t,_textureArrayPool:e}=mn,r=this.size/4,n=Math.floor(r/this.maxTextures)+1;for(;t.length<r;)t.push(new Ng);for(;e.length<n;)e.push(new Fg);for(let i=0;i<this.maxTextures;i++)this._tempBoundTextures[i]=null}onPrerender(){this._flushId=0}render(t){!t._texture.valid||(this._vertexCount+t.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=t.vertexData.length/2,this._indexCount+=t.indices.length,this._bufferedTextures[this._bufferSize]=t._texture.baseTexture,this._bufferedElements[this._bufferSize++]=t)}buildTexturesAndDrawCalls(){const{_bufferedTextures:t,maxTextures:e}=this,r=mn._textureArrayPool,n=this.renderer.batch,i=this._tempBoundTextures,s=this.renderer.textureGC.count;let o=++be._globalBatch,u=0,c=r[0],h=0;n.copyBoundTextures(i,e);for(let f=0;f<this._bufferSize;++f){const p=t[f];t[f]=null,p._batchEnabled!==o&&(c.count>=e&&(n.boundArray(c,i,o,e),this.buildDrawCalls(c,h,f),h=f,c=r[++u],++o),p._batchEnabled=o,p.touched=s,c.elements[c.count++]=p)}c.count>0&&(n.boundArray(c,i,o,e),this.buildDrawCalls(c,h,this._bufferSize),++u,++o);for(let f=0;f<i.length;f++)i[f]=null;be._globalBatch=o}buildDrawCalls(t,e,r){const{_bufferedElements:n,_attributeBuffer:i,_indexBuffer:s,vertexSize:o}=this,u=mn._drawCallPool;let c=this._dcIndex,h=this._aIndex,f=this._iIndex,p=u[c];p.start=this._iIndex,p.texArray=t;for(let g=e;g<r;++g){const v=n[g],x=v._texture.baseTexture,S=kb[x.alphaMode?1:0][v.blendMode];n[g]=null,e<g&&p.blend!==S&&(p.size=f-p.start,e=g,p=u[++c],p.texArray=t,p.start=f),this.packInterleavedGeometry(v,i,s,h,f),h+=v.vertexData.length/2*o,f+=v.indices.length,p.blend=S}e<r&&(p.size=f-p.start,++c),this._dcIndex=c,this._aIndex=h,this._iIndex=f}bindAndClearTexArray(t){const e=this.renderer.texture;for(let r=0;r<t.count;r++)e.bind(t.elements[r],t.ids[r]),t.elements[r]=null;t.count=0}updateGeometry(){const{_packedGeometries:t,_attributeBuffer:e,_indexBuffer:r}=this;mn.canUploadSameBuffer?(t[this._flushId]._buffer.update(e.rawBinaryData),t[this._flushId]._indexBuffer.update(r),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,t[this._flushId]=new this.geometryClass),t[this._flushId]._buffer.update(e.rawBinaryData),t[this._flushId]._indexBuffer.update(r),this.renderer.geometry.bind(t[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)}drawBatches(){const t=this._dcIndex,{gl:e,state:r}=this.renderer,n=mn._drawCallPool;let i=null;for(let s=0;s<t;s++){const{texArray:o,type:u,size:c,start:h,blend:f}=n[s];i!==o&&(i=o,this.bindAndClearTexArray(o)),this.state.blendMode=f,r.set(this.state),e.drawElements(u,c,e.UNSIGNED_SHORT,h*2)}}flush(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)}start(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.maxTextures),this.renderer.shader.bind(this._shader),mn.canUploadSameBuffer&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])}stop(){this.flush()}destroy(){for(let t=0;t<this._packedGeometryPoolSize;t++)this._packedGeometries[t]&&this._packedGeometries[t].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),super.destroy()}getAttributeBuffer(t){const e=Jh(Math.ceil(t/8)),r=$x(e),n=e*8;this._aBuffers.length<=r&&(this._iBuffers.length=r+1);let i=this._aBuffers[n];return i||(this._aBuffers[n]=i=new Mg(n*this.vertexSize*4)),i}getIndexBuffer(t){const e=Jh(Math.ceil(t/12)),r=$x(e),n=e*12;this._iBuffers.length<=r&&(this._iBuffers.length=r+1);let i=this._iBuffers[r];return i||(this._iBuffers[r]=i=new Uint16Array(n)),i}packInterleavedGeometry(t,e,r,n,i){const{uint32View:s,float32View:o}=e,u=n/this.vertexSize,c=t.uvs,h=t.indices,f=t.vertexData,p=t._texture.baseTexture._batchLocation,g=Math.min(t.worldAlpha,1),v=Ge.shared.setValue(t._tintRGB).toPremultiplied(g,t._texture.baseTexture.alphaMode>0);for(let x=0;x<f.length;x+=2)o[n++]=f[x],o[n++]=f[x+1],o[n++]=c[x],o[n++]=c[x+1],s[n++]=v,o[n++]=p;for(let x=0;x<h.length;x++)r[i++]=u+h[x]}};let bn=mn;bn.defaultBatchSize=4096;bn.extension={name:"batch",type:oe.RendererPlugin};bn._drawCallPool=[];bn._textureArrayPool=[];me.add(bn);var GP=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,jP=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;const Tl=class extends ni{constructor(t,e,r){const n=En.from(t||Tl.defaultVertexSrc,e||Tl.defaultFragmentSrc);super(n,r),this.padding=0,this.resolution=Tl.defaultResolution,this.multisample=Tl.defaultMultisample,this.enabled=!0,this.autoFit=!0,this.state=new Bi}apply(t,e,r,n,i){t.applyFilter(this,e,r,n)}get blendMode(){return this.state.blendMode}set blendMode(t){this.state.blendMode=t}get resolution(){return this._resolution}set resolution(t){this._resolution=t}static get defaultVertexSrc(){return jP}static get defaultFragmentSrc(){return GP}};let Ie=Tl;Ie.defaultResolution=1;Ie.defaultMultisample=wt.NONE;class zd{constructor(){this.clearBeforeRender=!0,this._backgroundColor=new Ge(0),this.alpha=1}init(e){this.clearBeforeRender=e.clearBeforeRender;const{backgroundColor:r,background:n,backgroundAlpha:i}=e,s=n!=null?n:r;s!==void 0&&(this.color=s),this.alpha=i}get color(){return this._backgroundColor.value}set color(e){this._backgroundColor.setValue(e)}get alpha(){return this._backgroundColor.alpha}set alpha(e){this._backgroundColor.setAlpha(e)}get backgroundColor(){return this._backgroundColor}destroy(){}}zd.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};zd.extension={type:[oe.RendererSystem,oe.CanvasRendererSystem],name:"background"};me.add(zd);class Hb{constructor(e){this.renderer=e,this.emptyRenderer=new Ud(e),this.currentRenderer=this.emptyRenderer}setObjectRenderer(e){this.currentRenderer!==e&&(this.currentRenderer.stop(),this.currentRenderer=e,this.currentRenderer.start())}flush(){this.setObjectRenderer(this.emptyRenderer)}reset(){this.setObjectRenderer(this.emptyRenderer)}copyBoundTextures(e,r){const{boundTextures:n}=this.renderer.texture;for(let i=r-1;i>=0;--i)e[i]=n[i]||null,e[i]&&(e[i]._batchLocation=i)}boundArray(e,r,n,i){const{elements:s,ids:o,count:u}=e;let c=0;for(let h=0;h<u;h++){const f=s[h],p=f._batchLocation;if(p>=0&&p<i&&r[p]===f){o[h]=p;continue}for(;c<i;){const g=r[c];if(g&&g._batchEnabled===n&&g._batchLocation===c){c++;continue}o[h]=c,f._batchLocation=c,r[c]=f;break}}}destroy(){this.renderer=null}}Hb.extension={type:oe.RendererSystem,name:"batch"};me.add(Hb);let e_=0;class Gd{constructor(e){this.renderer=e,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this)}get isLost(){return!this.gl||this.gl.isContextLost()}contextChange(e){this.gl=e,this.renderer.gl=e,this.renderer.CONTEXT_UID=e_++}init(e){if(e.context)this.initFromContext(e.context);else{const r=this.renderer.background.alpha<1,n=e.premultipliedAlpha;this.preserveDrawingBuffer=e.preserveDrawingBuffer,this.useContextAlpha=e.useContextAlpha,this.powerPreference=e.powerPreference,this.initFromOptions({alpha:r,premultipliedAlpha:n,antialias:e.antialias,stencil:!0,preserveDrawingBuffer:e.preserveDrawingBuffer,powerPreference:e.powerPreference})}}initFromContext(e){this.gl=e,this.validateContext(e),this.renderer.gl=e,this.renderer.CONTEXT_UID=e_++,this.renderer.runners.contextChange.emit(e);const r=this.renderer.view;r.addEventListener!==void 0&&(r.addEventListener("webglcontextlost",this.handleContextLost,!1),r.addEventListener("webglcontextrestored",this.handleContextRestored,!1))}initFromOptions(e){const r=this.createContext(this.renderer.view,e);this.initFromContext(r)}createContext(e,r){let n;if(ee.PREFER_ENV>=po.WEBGL2&&(n=e.getContext("webgl2",r)),n)this.webGLVersion=2;else if(this.webGLVersion=1,n=e.getContext("webgl",r)||e.getContext("experimental-webgl",r),!n)throw new Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=n,this.getExtensions(),this.gl}getExtensions(){const{gl:e}=this,r={loseContext:e.getExtension("WEBGL_lose_context"),anisotropicFiltering:e.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc")};this.webGLVersion===1?Object.assign(this.extensions,r,{drawBuffers:e.getExtension("WEBGL_draw_buffers"),depthTexture:e.getExtension("WEBGL_depth_texture"),vertexArrayObject:e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:e.getExtension("OES_element_index_uint"),floatTexture:e.getExtension("OES_texture_float"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),textureHalfFloat:e.getExtension("OES_texture_half_float"),textureHalfFloatLinear:e.getExtension("OES_texture_half_float_linear")}):this.webGLVersion===2&&Object.assign(this.extensions,r,{colorBufferFloat:e.getExtension("EXT_color_buffer_float")})}handleContextLost(e){e.preventDefault(),setTimeout(()=>{this.gl.isContextLost()&&this.extensions.loseContext&&this.extensions.loseContext.restoreContext()},0)}handleContextRestored(){this.renderer.runners.contextChange.emit(this.gl)}destroy(){const e=this.renderer.view;this.renderer=null,e.removeEventListener!==void 0&&(e.removeEventListener("webglcontextlost",this.handleContextLost),e.removeEventListener("webglcontextrestored",this.handleContextRestored)),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()}postrender(){this.renderer.objectRenderer.renderingToScreen&&this.gl.flush()}validateContext(e){const r=e.getContextAttributes(),n="WebGL2RenderingContext"in globalThis&&e instanceof globalThis.WebGL2RenderingContext;n&&(this.webGLVersion=2),r&&!r.stencil&&console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");const i=n||!!e.getExtension("OES_element_index_uint");this.supports.uint32Indices=i,i||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")}}Gd.defaultOptions={context:null,antialias:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"default"};Gd.extension={type:oe.RendererSystem,name:"context"};me.add(Gd);class HP extends Tu{upload(e,r,n){const i=e.gl;i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.alphaMode===Nn.UNPACK);const s=r.realWidth,o=r.realHeight;return n.width===s&&n.height===o?i.texSubImage2D(r.target,0,0,0,s,o,r.format,n.type,this.data):(n.width=s,n.height=o,i.texImage2D(r.target,0,n.internalFormat,s,o,0,r.format,n.type,this.data)),!0}}class Lg{constructor(e,r){this.width=Math.round(e||100),this.height=Math.round(r||100),this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new kn("disposeFramebuffer"),this.multisample=wt.NONE}get colorTexture(){return this.colorTextures[0]}addColorTexture(e=0,r){return this.colorTextures[e]=r||new be(null,{scaleMode:qn.NEAREST,resolution:1,mipmap:si.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this}addDepthTexture(e){return this.depthTexture=e||new be(new HP(null,{width:this.width,height:this.height}),{scaleMode:qn.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:si.OFF,format:J.DEPTH_COMPONENT,type:ve.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this}enableDepth(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this}enableStencil(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this}resize(e,r){if(e=Math.round(e),r=Math.round(r),!(e===this.width&&r===this.height)){this.width=e,this.height=r,this.dirtyId++,this.dirtySize++;for(let n=0;n<this.colorTextures.length;n++){const i=this.colorTextures[n],s=i.resolution;i.setSize(e/s,r/s)}if(this.depthTexture){const n=this.depthTexture.resolution;this.depthTexture.setSize(e/n,r/n)}}}dispose(){this.disposeRunner.emit(this,!1)}destroyDepthTexture(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)}}class $b extends be{constructor(e={}){var r;if(typeof e=="number"){const n=arguments[0],i=arguments[1],s=arguments[2],o=arguments[3];e={width:n,height:i,scaleMode:s,resolution:o}}e.width=e.width||100,e.height=e.height||100,(r=e.multisample)!=null||(e.multisample=wt.NONE),super(null,e),this.mipmap=si.OFF,this.valid=!0,this._clear=new Ge([0,0,0,0]),this.framebuffer=new Lg(this.realWidth,this.realHeight).addColorTexture(0,this),this.framebuffer.multisample=e.multisample,this.maskStack=[],this.filterStack=[{}]}set clearColor(e){this._clear.setValue(e)}get clearColor(){return this._clear.value}get clear(){return this._clear}resize(e,r){this.framebuffer.resize(e*this.resolution,r*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)}dispose(){this.framebuffer.dispose(),super.dispose()}destroy(){super.destroy(),this.framebuffer.destroyDepthTexture(),this.framebuffer=null}}class bs extends au{constructor(e){const r=e,n=r.naturalWidth||r.videoWidth||r.width,i=r.naturalHeight||r.videoHeight||r.height;super(n,i),this.source=e,this.noSubImage=!1}static crossOrigin(e,r,n){n===void 0&&!r.startsWith("data:")?e.crossOrigin=dP(r):n!==!1&&(e.crossOrigin=typeof n=="string"?n:"anonymous")}upload(e,r,n,i){const s=e.gl,o=r.realWidth,u=r.realHeight;if(i=i||this.source,typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement){if(!i.complete||i.naturalWidth===0)return!1}else if(typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement&&i.readyState<=1&&i.buffered.length===0)return!1;return s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.alphaMode===Nn.UNPACK),!this.noSubImage&&r.target===s.TEXTURE_2D&&n.width===o&&n.height===u?s.texSubImage2D(s.TEXTURE_2D,0,0,0,r.format,n.type,i):(n.width=o,n.height=u,s.texImage2D(r.target,0,n.internalFormat,r.format,n.type,i)),!0}update(){if(this.destroyed)return;const e=this.source,r=e.naturalWidth||e.videoWidth||e.width,n=e.naturalHeight||e.videoHeight||e.height;this.resize(r,n),super.update()}dispose(){this.source=null}}class Vb extends bs{constructor(e,r){var n;if(r=r||{},typeof e=="string"){const i=new Image;bs.crossOrigin(i,e,r.crossorigin),i.src=e,e=i}super(e),!e.complete&&!!this._width&&!!this._height&&(this._width=0,this._height=0),this.url=e.src,this._process=null,this.preserveBitmap=!1,this.createBitmap=((n=r.createBitmap)!=null?n:ee.CREATE_IMAGE_BITMAP)&&!!globalThis.createImageBitmap,this.alphaMode=typeof r.alphaMode=="number"?r.alphaMode:null,this.bitmap=null,this._load=null,r.autoLoad!==!1&&this.load()}load(e){return this._load?this._load:(e!==void 0&&(this.createBitmap=e),this._load=new Promise((r,n)=>{const i=this.source;this.url=i.src;const s=()=>{this.destroyed||(i.onload=null,i.onerror=null,this.resize(i.width,i.height),this._load=null,this.createBitmap?r(this.process()):r(this))};i.complete&&i.src?s():(i.onload=s,i.onerror=o=>{n(o),this.onError.emit(o)})}),this._load)}process(){const e=this.source;if(this._process!==null)return this._process;if(this.bitmap!==null||!globalThis.createImageBitmap)return Promise.resolve(this);const r=globalThis.createImageBitmap,n=!e.crossOrigin||e.crossOrigin==="anonymous";return this._process=fetch(e.src,{mode:n?"cors":"no-cors"}).then(i=>i.blob()).then(i=>r(i,0,0,e.width,e.height,{premultiplyAlpha:this.alphaMode===null||this.alphaMode===Nn.UNPACK?"premultiply":"none"})).then(i=>this.destroyed?Promise.reject():(this.bitmap=i,this.update(),this._process=null,Promise.resolve(this))),this._process}upload(e,r,n){if(typeof this.alphaMode=="number"&&(r.alphaMode=this.alphaMode),!this.createBitmap)return super.upload(e,r,n);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(super.upload(e,r,n,this.bitmap),!this.preserveBitmap){let i=!0;const s=r._glTextures;for(const o in s){const u=s[o];if(u!==n&&u.dirtyId!==r.dirtyId){i=!1;break}}i&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0}dispose(){this.source.onload=null,this.source.onerror=null,super.dispose(),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null}static test(e){return typeof HTMLImageElement<"u"&&(typeof e=="string"||e instanceof HTMLImageElement)}}class Wb{constructor(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}set(e,r,n){const i=r.width,s=r.height;if(n){const o=e.width/2/i,u=e.height/2/s,c=e.x/i+o,h=e.y/s+u;n=ot.add(n,ot.NW),this.x0=c+o*ot.uX(n),this.y0=h+u*ot.uY(n),n=ot.add(n,2),this.x1=c+o*ot.uX(n),this.y1=h+u*ot.uY(n),n=ot.add(n,2),this.x2=c+o*ot.uX(n),this.y2=h+u*ot.uY(n),n=ot.add(n,2),this.x3=c+o*ot.uX(n),this.y3=h+u*ot.uY(n)}else this.x0=e.x/i,this.y0=e.y/s,this.x1=(e.x+e.width)/i,this.y1=e.y/s,this.x2=(e.x+e.width)/i,this.y2=(e.y+e.height)/s,this.x3=e.x/i,this.y3=(e.y+e.height)/s;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3}toString(){return`[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`}}const t_=new Wb;function Gc(t){t.destroy=function(){},t.on=function(){},t.once=function(){},t.emit=function(){}}class te extends Ma{constructor(e,r,n,i,s,o,u){if(super(),this.noFrame=!1,r||(this.noFrame=!0,r=new Ee(0,0,1,1)),e instanceof te&&(e=e.baseTexture),this.baseTexture=e,this._frame=r,this.trim=i,this.valid=!1,this._uvs=t_,this.uvMatrix=null,this.orig=n||r,this._rotate=Number(s||0),s===!0)this._rotate=2;else if(this._rotate%2!==0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");this.defaultAnchor=o?new we(o.x,o.y):new we(0,0),this.defaultBorders=u,this._updateID=0,this.textureCacheIds=[],e.valid?this.noFrame?e.valid&&this.onBaseTextureUpdated(e):this.frame=r:e.once("loaded",this.onBaseTextureUpdated,this),this.noFrame&&e.on("update",this.onBaseTextureUpdated,this)}update(){this.baseTexture.resource&&this.baseTexture.resource.update()}onBaseTextureUpdated(e){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=e.width,this._frame.height=e.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)}destroy(e){if(this.baseTexture){if(e){const{resource:r}=this.baseTexture;(r==null?void 0:r.url)&&Xn[r.url]&&te.removeFromCache(r.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,te.removeFromCache(this),this.textureCacheIds=null}clone(){var i;const e=this._frame.clone(),r=this._frame===this.orig?e:this.orig.clone(),n=new te(this.baseTexture,!this.noFrame&&e,r,(i=this.trim)==null?void 0:i.clone(),this.rotate,this.defaultAnchor,this.defaultBorders);return this.noFrame&&(n._frame=e),n}updateUvs(){this._uvs===t_&&(this._uvs=new Wb),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++}static from(e,r={},n=ee.STRICT_TEXTURE_CACHE){const i=typeof e=="string";let s=null;if(i)s=e;else if(e instanceof be){if(!e.cacheId){const u=(r==null?void 0:r.pixiIdPrefix)||"pixiid";e.cacheId=`${u}-${uo()}`,be.addToCache(e,e.cacheId)}s=e.cacheId}else{if(!e._pixiId){const u=(r==null?void 0:r.pixiIdPrefix)||"pixiid";e._pixiId=`${u}_${uo()}`}s=e._pixiId}let o=Xn[s];if(i&&n&&!o)throw new Error(`The cacheId "${s}" does not exist in TextureCache.`);return!o&&!(e instanceof be)?(r.resolution||(r.resolution=_s(e)),o=new te(new be(e,r)),o.baseTexture.cacheId=s,be.addToCache(o.baseTexture,s),te.addToCache(o,s)):!o&&e instanceof be&&(o=new te(e),te.addToCache(o,s)),o}static fromURL(e,r){const n=Object.assign({autoLoad:!1},r==null?void 0:r.resourceOptions),i=te.from(e,Object.assign({resourceOptions:n},r),!1),s=i.baseTexture.resource;return i.baseTexture.valid?Promise.resolve(i):s.load().then(()=>Promise.resolve(i))}static fromBuffer(e,r,n,i){return new te(be.fromBuffer(e,r,n,i))}static fromLoader(e,r,n,i){const s=new be(e,Object.assign({scaleMode:be.defaultOptions.scaleMode,resolution:_s(r)},i)),{resource:o}=s;o instanceof Vb&&(o.url=r);const u=new te(s);return n||(n=r),be.addToCache(u.baseTexture,n),te.addToCache(u,n),n!==r&&(be.addToCache(u.baseTexture,r),te.addToCache(u,r)),u.baseTexture.valid?Promise.resolve(u):new Promise(c=>{u.baseTexture.once("loaded",()=>c(u))})}static addToCache(e,r){r&&(e.textureCacheIds.includes(r)||e.textureCacheIds.push(r),Xn[r]&&Xn[r]!==e&&console.warn(`Texture added to the cache with an id [${r}] that already had an entry`),Xn[r]=e)}static removeFromCache(e){if(typeof e=="string"){const r=Xn[e];if(r){const n=r.textureCacheIds.indexOf(e);return n>-1&&r.textureCacheIds.splice(n,1),delete Xn[e],r}}else if(e!=null&&e.textureCacheIds){for(let r=0;r<e.textureCacheIds.length;++r)Xn[e.textureCacheIds[r]]===e&&delete Xn[e.textureCacheIds[r]];return e.textureCacheIds.length=0,e}return null}get resolution(){return this.baseTexture.resolution}get frame(){return this._frame}set frame(e){this._frame=e,this.noFrame=!1;const{x:r,y:n,width:i,height:s}=e,o=r+i>this.baseTexture.width,u=n+s>this.baseTexture.height;if(o||u){const c=o&&u?"and":"or",h=`X: ${r} + ${i} = ${r+i} > ${this.baseTexture.width}`,f=`Y: ${n} + ${s} = ${n+s} > ${this.baseTexture.height}`;throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${h} ${c} ${f}`)}this.valid=i&&s&&this.baseTexture.valid,!this.trim&&!this.rotate&&(this.orig=e),this.valid&&this.updateUvs()}get rotate(){return this._rotate}set rotate(e){this._rotate=e,this.valid&&this.updateUvs()}get width(){return this.orig.width}get height(){return this.orig.height}castToBaseTexture(){return this.baseTexture}static get EMPTY(){return te._EMPTY||(te._EMPTY=new te(new be),Gc(te._EMPTY),Gc(te._EMPTY.baseTexture)),te._EMPTY}static get WHITE(){if(!te._WHITE){const e=ee.ADAPTER.createCanvas(16,16),r=e.getContext("2d");e.width=16,e.height=16,r.fillStyle="white",r.fillRect(0,0,16,16),te._WHITE=new te(be.from(e)),Gc(te._WHITE),Gc(te._WHITE.baseTexture)}return te._WHITE}}class ii extends te{constructor(e,r){super(e,r),this.valid=!0,this.filterFrame=null,this.filterPoolKey=null,this.updateUvs()}get framebuffer(){return this.baseTexture.framebuffer}get multisample(){return this.framebuffer.multisample}set multisample(e){this.framebuffer.multisample=e}resize(e,r,n=!0){const i=this.baseTexture.resolution,s=Math.round(e*i)/i,o=Math.round(r*i)/i;this.valid=s>0&&o>0,this._frame.width=this.orig.width=s,this._frame.height=this.orig.height=o,n&&this.baseTexture.resize(s,o),this.updateUvs()}setResolution(e){const{baseTexture:r}=this;r.resolution!==e&&(r.setResolution(e),this.resize(r.width,r.height,!1))}static create(e){return new ii(new $b(e))}}class Xb{constructor(e){this.texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}createTexture(e,r,n=wt.NONE){const i=new $b(Object.assign({width:e,height:r,resolution:1,multisample:n},this.textureOptions));return new ii(i)}getOptimalTexture(e,r,n=1,i=wt.NONE){let s;e=Math.ceil(e*n-1e-6),r=Math.ceil(r*n-1e-6),!this.enableFullScreen||e!==this._pixelsWidth||r!==this._pixelsHeight?(e=Jh(e),r=Jh(r),s=((e&65535)<<16|r&65535)>>>0,i>1&&(s+=i*4294967296)):s=i>1?-i:-1,this.texturePool[s]||(this.texturePool[s]=[]);let o=this.texturePool[s].pop();return o||(o=this.createTexture(e,r,i)),o.filterPoolKey=s,o.setResolution(n),o}getFilterTexture(e,r,n){const i=this.getOptimalTexture(e.width,e.height,r||e.resolution,n||wt.NONE);return i.filterFrame=e.filterFrame,i}returnTexture(e){const r=e.filterPoolKey;e.filterFrame=null,this.texturePool[r].push(e)}returnFilterTexture(e){this.returnTexture(e)}clear(e){if(e=e!==!1,e)for(const r in this.texturePool){const n=this.texturePool[r];if(n)for(let i=0;i<n.length;i++)n[i].destroy(!0)}this.texturePool={}}setScreenSize(e){if(!(e.width===this._pixelsWidth&&e.height===this._pixelsHeight)){this.enableFullScreen=e.width>0&&e.height>0;for(const r in this.texturePool){if(!(Number(r)<0))continue;const n=this.texturePool[r];if(n)for(let i=0;i<n.length;i++)n[i].destroy(!0);this.texturePool[r]=[]}this._pixelsWidth=e.width,this._pixelsHeight=e.height}}}Xb.SCREEN_KEY=-1;class $P extends Ts{constructor(){super(),this.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2])}}class Yb extends Ts{constructor(){super(),this.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),this.uvs=new Float32Array([0,0,1,0,1,1,0,1]),this.vertexBuffer=new xt(this.vertices),this.uvBuffer=new xt(this.uvs),this.addAttribute("aVertexPosition",this.vertexBuffer).addAttribute("aTextureCoord",this.uvBuffer).addIndex([0,1,2,0,2,3])}map(e,r){let n=0,i=0;return this.uvs[0]=n,this.uvs[1]=i,this.uvs[2]=n+r.width/e.width,this.uvs[3]=i,this.uvs[4]=n+r.width/e.width,this.uvs[5]=i+r.height/e.height,this.uvs[6]=n,this.uvs[7]=i+r.height/e.height,n=r.x,i=r.y,this.vertices[0]=n,this.vertices[1]=i,this.vertices[2]=n+r.width,this.vertices[3]=i,this.vertices[4]=n+r.width,this.vertices[5]=i+r.height,this.vertices[6]=n,this.vertices[7]=i+r.height,this.invalidate(),this}invalidate(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this}}class VP{constructor(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=wt.NONE,this.sourceFrame=new Ee,this.destinationFrame=new Ee,this.bindingSourceFrame=new Ee,this.bindingDestinationFrame=new Ee,this.filters=[],this.transform=null}clear(){this.target=null,this.filters=null,this.renderTexture=null}}const jc=[new we,new we,new we,new we],nm=new it;class Kb{constructor(e){this.renderer=e,this.defaultFilterStack=[{}],this.texturePool=new Xb,this.statePool=[],this.quad=new $P,this.quadUv=new Yb,this.tempRect=new Ee,this.activeState={},this.globalUniforms=new Mn({outputFrame:new Ee,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}init(){this.texturePool.setScreenSize(this.renderer.view)}push(e,r){var x,S;const n=this.renderer,i=this.defaultFilterStack,s=this.statePool.pop()||new VP,o=this.renderer.renderTexture;let u=r[0].resolution,c=r[0].multisample,h=r[0].padding,f=r[0].autoFit,p=(x=r[0].legacy)!=null?x:!0;for(let E=1;E<r.length;E++){const w=r[E];u=Math.min(u,w.resolution),c=Math.min(c,w.multisample),h=this.useMaxPadding?Math.max(h,w.padding):h+w.padding,f=f&&w.autoFit,p=p||((S=w.legacy)!=null?S:!0)}i.length===1&&(this.defaultFilterStack[0].renderTexture=o.current),i.push(s),s.resolution=u,s.multisample=c,s.legacy=p,s.target=e,s.sourceFrame.copyFrom(e.filterArea||e.getBounds(!0)),s.sourceFrame.pad(h);const g=this.tempRect.copyFrom(o.sourceFrame);n.projection.transform&&this.transformAABB(nm.copyFrom(n.projection.transform).invert(),g),f?(s.sourceFrame.fit(g),(s.sourceFrame.width<=0||s.sourceFrame.height<=0)&&(s.sourceFrame.width=0,s.sourceFrame.height=0)):s.sourceFrame.intersects(g)||(s.sourceFrame.width=0,s.sourceFrame.height=0),this.roundFrame(s.sourceFrame,o.current?o.current.resolution:n.resolution,o.sourceFrame,o.destinationFrame,n.projection.transform),s.renderTexture=this.getOptimalFilterTexture(s.sourceFrame.width,s.sourceFrame.height,u,c),s.filters=r,s.destinationFrame.width=s.renderTexture.width,s.destinationFrame.height=s.renderTexture.height;const v=this.tempRect;v.x=0,v.y=0,v.width=s.sourceFrame.width,v.height=s.sourceFrame.height,s.renderTexture.filterFrame=s.sourceFrame,s.bindingSourceFrame.copyFrom(o.sourceFrame),s.bindingDestinationFrame.copyFrom(o.destinationFrame),s.transform=n.projection.transform,n.projection.transform=null,o.bind(s.renderTexture,s.sourceFrame,v),n.framebuffer.clear(0,0,0,0)}pop(){const e=this.defaultFilterStack,r=e.pop(),n=r.filters;this.activeState=r;const i=this.globalUniforms.uniforms;i.outputFrame=r.sourceFrame,i.resolution=r.resolution;const s=i.inputSize,o=i.inputPixel,u=i.inputClamp;if(s[0]=r.destinationFrame.width,s[1]=r.destinationFrame.height,s[2]=1/s[0],s[3]=1/s[1],o[0]=Math.round(s[0]*r.resolution),o[1]=Math.round(s[1]*r.resolution),o[2]=1/o[0],o[3]=1/o[1],u[0]=.5*o[2],u[1]=.5*o[3],u[2]=r.sourceFrame.width*s[2]-.5*o[2],u[3]=r.sourceFrame.height*s[3]-.5*o[3],r.legacy){const h=i.filterArea;h[0]=r.destinationFrame.width,h[1]=r.destinationFrame.height,h[2]=r.sourceFrame.x,h[3]=r.sourceFrame.y,i.filterClamp=i.inputClamp}this.globalUniforms.update();const c=e[e.length-1];if(this.renderer.framebuffer.blit(),n.length===1)n[0].apply(this,r.renderTexture,c.renderTexture,Kn.BLEND,r),this.returnFilterTexture(r.renderTexture);else{let h=r.renderTexture,f=this.getOptimalFilterTexture(h.width,h.height,r.resolution);f.filterFrame=h.filterFrame;let p=0;for(p=0;p<n.length-1;++p){p===1&&r.multisample>1&&(f=this.getOptimalFilterTexture(h.width,h.height,r.resolution),f.filterFrame=h.filterFrame),n[p].apply(this,h,f,Kn.CLEAR,r);const g=h;h=f,f=g}n[p].apply(this,h,c.renderTexture,Kn.BLEND,r),p>1&&r.multisample>1&&this.returnFilterTexture(r.renderTexture),this.returnFilterTexture(h),this.returnFilterTexture(f)}r.clear(),this.statePool.push(r)}bindAndClear(e,r=Kn.CLEAR){const{renderTexture:n,state:i}=this.renderer;if(e===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,e!=null&&e.filterFrame){const o=this.tempRect;o.x=0,o.y=0,o.width=e.filterFrame.width,o.height=e.filterFrame.height,n.bind(e,e.filterFrame,o)}else e!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?n.bind(e):this.renderer.renderTexture.bind(e,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);const s=i.stateId&1||this.forceClear;(r===Kn.CLEAR||r===Kn.BLIT&&s)&&this.renderer.framebuffer.clear(0,0,0,0)}applyFilter(e,r,n,i){const s=this.renderer;s.state.set(e.state),this.bindAndClear(n,i),e.uniforms.uSampler=r,e.uniforms.filterGlobals=this.globalUniforms,s.shader.bind(e),e.legacy=!!e.program.attributeData.aTextureCoord,e.legacy?(this.quadUv.map(r._frame,r.filterFrame),s.geometry.bind(this.quadUv),s.geometry.draw(Sn.TRIANGLES)):(s.geometry.bind(this.quad),s.geometry.draw(Sn.TRIANGLE_STRIP))}calculateSpriteMatrix(e,r){const{sourceFrame:n,destinationFrame:i}=this.activeState,{orig:s}=r._texture,o=e.set(i.width,0,0,i.height,n.x,n.y),u=r.worldTransform.copyTo(it.TEMP_MATRIX);return u.invert(),o.prepend(u),o.scale(1/s.width,1/s.height),o.translate(r.anchor.x,r.anchor.y),o}destroy(){this.renderer=null,this.texturePool.clear(!1)}getOptimalFilterTexture(e,r,n=1,i=wt.NONE){return this.texturePool.getOptimalTexture(e,r,n,i)}getFilterTexture(e,r,n){if(typeof e=="number"){const s=e;e=r,r=s}e=e||this.activeState.renderTexture;const i=this.texturePool.getOptimalTexture(e.width,e.height,r||e.resolution,n||wt.NONE);return i.filterFrame=e.filterFrame,i}returnFilterTexture(e){this.texturePool.returnTexture(e)}emptyPool(){this.texturePool.clear(!0)}resize(){this.texturePool.setScreenSize(this.renderer.view)}transformAABB(e,r){const n=jc[0],i=jc[1],s=jc[2],o=jc[3];n.set(r.left,r.top),i.set(r.left,r.bottom),s.set(r.right,r.top),o.set(r.right,r.bottom),e.apply(n,n),e.apply(i,i),e.apply(s,s),e.apply(o,o);const u=Math.min(n.x,i.x,s.x,o.x),c=Math.min(n.y,i.y,s.y,o.y),h=Math.max(n.x,i.x,s.x,o.x),f=Math.max(n.y,i.y,s.y,o.y);r.x=u,r.y=c,r.width=h-u,r.height=f-c}roundFrame(e,r,n,i,s){if(!(e.width<=0||e.height<=0||n.width<=0||n.height<=0)){if(s){const{a:o,b:u,c,d:h}=s;if((Math.abs(u)>1e-4||Math.abs(c)>1e-4)&&(Math.abs(o)>1e-4||Math.abs(h)>1e-4))return}s=s?nm.copyFrom(s):nm.identity(),s.translate(-n.x,-n.y).scale(i.width/n.width,i.height/n.height).translate(i.x,i.y),this.transformAABB(s,e),e.ceil(r),this.transformAABB(s.invert(),e)}}}Kb.extension={type:oe.RendererSystem,name:"filter"};me.add(Kb);class WP{constructor(e){this.framebuffer=e,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=wt.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}}const XP=new Ee;class Qb{constructor(e){this.renderer=e,this.managedFramebuffers=[],this.unknownFramebuffer=new Lg(10,10),this.msaaSamples=null}contextChange(){this.disposeAll(!0);const e=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new Ee,this.hasMRT=!0,this.writeDepthTexture=!0,this.renderer.context.webGLVersion===1){let r=this.renderer.context.extensions.drawBuffers,n=this.renderer.context.extensions.depthTexture;ee.PREFER_ENV===po.WEBGL_LEGACY&&(r=null,n=null),r?e.drawBuffers=i=>r.drawBuffersWEBGL(i):(this.hasMRT=!1,e.drawBuffers=()=>{}),n||(this.writeDepthTexture=!1)}else this.msaaSamples=e.getInternalformatParameter(e.RENDERBUFFER,e.RGBA8,e.SAMPLES)}bind(e,r,n=0){const{gl:i}=this;if(e){const s=e.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(e);this.current!==e&&(this.current=e,i.bindFramebuffer(i.FRAMEBUFFER,s.framebuffer)),s.mipLevel!==n&&(e.dirtyId++,e.dirtyFormat++,s.mipLevel=n),s.dirtyId!==e.dirtyId&&(s.dirtyId=e.dirtyId,s.dirtyFormat!==e.dirtyFormat?(s.dirtyFormat=e.dirtyFormat,s.dirtySize=e.dirtySize,this.updateFramebuffer(e,n)):s.dirtySize!==e.dirtySize&&(s.dirtySize=e.dirtySize,this.resizeFramebuffer(e)));for(let o=0;o<e.colorTextures.length;o++){const u=e.colorTextures[o];this.renderer.texture.unbind(u.parentTextureArray||u)}if(e.depthTexture&&this.renderer.texture.unbind(e.depthTexture),r){const o=r.width>>n,u=r.height>>n,c=o/r.width;this.setViewport(r.x*c,r.y*c,o,u)}else{const o=e.width>>n,u=e.height>>n;this.setViewport(0,0,o,u)}}else this.current&&(this.current=null,i.bindFramebuffer(i.FRAMEBUFFER,null)),r?this.setViewport(r.x,r.y,r.width,r.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)}setViewport(e,r,n,i){const s=this.viewport;e=Math.round(e),r=Math.round(r),n=Math.round(n),i=Math.round(i),(s.width!==n||s.height!==i||s.x!==e||s.y!==r)&&(s.x=e,s.y=r,s.width=n,s.height=i,this.gl.viewport(e,r,n,i))}get size(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}}clear(e,r,n,i,s=xg.COLOR|xg.DEPTH){const{gl:o}=this;o.clearColor(e,r,n,i),o.clear(s)}initFramebuffer(e){const{gl:r}=this,n=new WP(r.createFramebuffer());return n.multisample=this.detectSamples(e.multisample),e.glFramebuffers[this.CONTEXT_UID]=n,this.managedFramebuffers.push(e),e.disposeRunner.add(this),n}resizeFramebuffer(e){const{gl:r}=this,n=e.glFramebuffers[this.CONTEXT_UID];n.stencil&&(r.bindRenderbuffer(r.RENDERBUFFER,n.stencil),n.msaaBuffer?r.renderbufferStorageMultisample(r.RENDERBUFFER,n.multisample,r.DEPTH24_STENCIL8,e.width,e.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,e.width,e.height));const i=e.colorTextures;let s=i.length;r.drawBuffers||(s=Math.min(s,1));for(let o=0;o<s;o++){const u=i[o],c=u.parentTextureArray||u;this.renderer.texture.bind(c,0),o===0&&n.msaaBuffer&&(r.bindRenderbuffer(r.RENDERBUFFER,n.msaaBuffer),r.renderbufferStorageMultisample(r.RENDERBUFFER,n.multisample,c._glTextures[this.CONTEXT_UID].internalFormat,e.width,e.height))}e.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(e.depthTexture,0)}updateFramebuffer(e,r){const{gl:n}=this,i=e.glFramebuffers[this.CONTEXT_UID],s=e.colorTextures;let o=s.length;n.drawBuffers||(o=Math.min(o,1)),i.multisample>1&&this.canMultisampleFramebuffer(e)?i.msaaBuffer=i.msaaBuffer||n.createRenderbuffer():i.msaaBuffer&&(n.deleteRenderbuffer(i.msaaBuffer),i.msaaBuffer=null,i.blitFramebuffer&&(i.blitFramebuffer.dispose(),i.blitFramebuffer=null));const u=[];for(let c=0;c<o;c++){const h=s[c],f=h.parentTextureArray||h;this.renderer.texture.bind(f,0),c===0&&i.msaaBuffer?(n.bindRenderbuffer(n.RENDERBUFFER,i.msaaBuffer),n.renderbufferStorageMultisample(n.RENDERBUFFER,i.multisample,f._glTextures[this.CONTEXT_UID].internalFormat,e.width,e.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,i.msaaBuffer)):(n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+c,h.target,f._glTextures[this.CONTEXT_UID].texture,r),u.push(n.COLOR_ATTACHMENT0+c))}if(u.length>1&&n.drawBuffers(u),e.depthTexture&&this.writeDepthTexture){const h=e.depthTexture;this.renderer.texture.bind(h,0),n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,h._glTextures[this.CONTEXT_UID].texture,r)}(e.stencil||e.depth)&&!(e.depthTexture&&this.writeDepthTexture)?(i.stencil=i.stencil||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,i.stencil),i.msaaBuffer?n.renderbufferStorageMultisample(n.RENDERBUFFER,i.multisample,n.DEPTH24_STENCIL8,e.width,e.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,e.width,e.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,i.stencil)):i.stencil&&(n.deleteRenderbuffer(i.stencil),i.stencil=null)}canMultisampleFramebuffer(e){return this.renderer.context.webGLVersion!==1&&e.colorTextures.length<=1&&!e.depthTexture}detectSamples(e){const{msaaSamples:r}=this;let n=wt.NONE;if(e<=1||r===null)return n;for(let i=0;i<r.length;i++)if(r[i]<=e){n=r[i];break}return n===1&&(n=wt.NONE),n}blit(e,r,n){const{current:i,renderer:s,gl:o,CONTEXT_UID:u}=this;if(s.context.webGLVersion!==2||!i)return;const c=i.glFramebuffers[u];if(!c)return;if(!e){if(!c.msaaBuffer)return;const f=i.colorTextures[0];if(!f)return;c.blitFramebuffer||(c.blitFramebuffer=new Lg(i.width,i.height),c.blitFramebuffer.addColorTexture(0,f)),e=c.blitFramebuffer,e.colorTextures[0]!==f&&(e.colorTextures[0]=f,e.dirtyId++,e.dirtyFormat++),(e.width!==i.width||e.height!==i.height)&&(e.width=i.width,e.height=i.height,e.dirtyId++,e.dirtySize++)}r||(r=XP,r.width=i.width,r.height=i.height),n||(n=r);const h=r.width===n.width&&r.height===n.height;this.bind(e),o.bindFramebuffer(o.READ_FRAMEBUFFER,c.framebuffer),o.blitFramebuffer(r.left,r.top,r.right,r.bottom,n.left,n.top,n.right,n.bottom,o.COLOR_BUFFER_BIT,h?o.NEAREST:o.LINEAR),o.bindFramebuffer(o.READ_FRAMEBUFFER,e.glFramebuffers[this.CONTEXT_UID].framebuffer)}disposeFramebuffer(e,r){const n=e.glFramebuffers[this.CONTEXT_UID],i=this.gl;if(!n)return;delete e.glFramebuffers[this.CONTEXT_UID];const s=this.managedFramebuffers.indexOf(e);s>=0&&this.managedFramebuffers.splice(s,1),e.disposeRunner.remove(this),r||(i.deleteFramebuffer(n.framebuffer),n.msaaBuffer&&i.deleteRenderbuffer(n.msaaBuffer),n.stencil&&i.deleteRenderbuffer(n.stencil)),n.blitFramebuffer&&this.disposeFramebuffer(n.blitFramebuffer,r)}disposeAll(e){const r=this.managedFramebuffers;this.managedFramebuffers=[];for(let n=0;n<r.length;n++)this.disposeFramebuffer(r[n],e)}forceStencil(){const e=this.current;if(!e)return;const r=e.glFramebuffers[this.CONTEXT_UID];if(!r||r.stencil)return;e.stencil=!0;const n=e.width,i=e.height,s=this.gl,o=s.createRenderbuffer();s.bindRenderbuffer(s.RENDERBUFFER,o),r.msaaBuffer?s.renderbufferStorageMultisample(s.RENDERBUFFER,r.multisample,s.DEPTH24_STENCIL8,n,i):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,n,i),r.stencil=o,s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,o)}reset(){this.current=this.unknownFramebuffer,this.viewport=new Ee}destroy(){this.renderer=null}}Qb.extension={type:oe.RendererSystem,name:"framebuffer"};me.add(Qb);const im={5126:4,5123:2,5121:1};class Zb{constructor(e){this.renderer=e,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}contextChange(){this.disposeAll(!0);const e=this.gl=this.renderer.gl,r=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,r.webGLVersion!==2){let n=this.renderer.context.extensions.vertexArrayObject;ee.PREFER_ENV===po.WEBGL_LEGACY&&(n=null),n?(e.createVertexArray=()=>n.createVertexArrayOES(),e.bindVertexArray=i=>n.bindVertexArrayOES(i),e.deleteVertexArray=i=>n.deleteVertexArrayOES(i)):(this.hasVao=!1,e.createVertexArray=()=>null,e.bindVertexArray=()=>null,e.deleteVertexArray=()=>null)}if(r.webGLVersion!==2){const n=e.getExtension("ANGLE_instanced_arrays");n?(e.vertexAttribDivisor=(i,s)=>n.vertexAttribDivisorANGLE(i,s),e.drawElementsInstanced=(i,s,o,u,c)=>n.drawElementsInstancedANGLE(i,s,o,u,c),e.drawArraysInstanced=(i,s,o,u)=>n.drawArraysInstancedANGLE(i,s,o,u)):this.hasInstance=!1}this.canUseUInt32ElementIndex=r.webGLVersion===2||!!r.extensions.uint32ElementIndex}bind(e,r){r=r||this.renderer.shader.shader;const{gl:n}=this;let i=e.glVertexArrayObjects[this.CONTEXT_UID],s=!1;i||(this.managedGeometries[e.id]=e,e.disposeRunner.add(this),e.glVertexArrayObjects[this.CONTEXT_UID]=i={},s=!0);const o=i[r.program.id]||this.initGeometryVao(e,r,s);this._activeGeometry=e,this._activeVao!==o&&(this._activeVao=o,this.hasVao?n.bindVertexArray(o):this.activateVao(e,r.program)),this.updateBuffers()}reset(){this.unbind()}updateBuffers(){const e=this._activeGeometry,r=this.renderer.buffer;for(let n=0;n<e.buffers.length;n++){const i=e.buffers[n];r.update(i)}}checkCompatibility(e,r){const n=e.attributes,i=r.attributeData;for(const s in i)if(!n[s])throw new Error(`shader and geometry incompatible, geometry missing the "${s}" attribute`)}getSignature(e,r){const n=e.attributes,i=r.attributeData,s=["g",e.id];for(const o in n)i[o]&&s.push(o,i[o].location);return s.join("-")}initGeometryVao(e,r,n=!0){const i=this.gl,s=this.CONTEXT_UID,o=this.renderer.buffer,u=r.program;u.glPrograms[s]||this.renderer.shader.generateProgram(r),this.checkCompatibility(e,u);const c=this.getSignature(e,u),h=e.glVertexArrayObjects[this.CONTEXT_UID];let f=h[c];if(f)return h[u.id]=f,f;const p=e.buffers,g=e.attributes,v={},x={};for(const S in p)v[S]=0,x[S]=0;for(const S in g)!g[S].size&&u.attributeData[S]?g[S].size=u.attributeData[S].size:g[S].size||console.warn(`PIXI Geometry attribute '${S}' size cannot be determined (likely the bound shader does not have the attribute)`),v[g[S].buffer]+=g[S].size*im[g[S].type];for(const S in g){const E=g[S],w=E.size;E.stride===void 0&&(v[E.buffer]===w*im[E.type]?E.stride=0:E.stride=v[E.buffer]),E.start===void 0&&(E.start=x[E.buffer],x[E.buffer]+=w*im[E.type])}f=i.createVertexArray(),i.bindVertexArray(f);for(let S=0;S<p.length;S++){const E=p[S];o.bind(E),n&&E._glBuffers[s].refCount++}return this.activateVao(e,u),h[u.id]=f,h[c]=f,i.bindVertexArray(null),o.unbind(ri.ARRAY_BUFFER),f}disposeGeometry(e,r){var u;if(!this.managedGeometries[e.id])return;delete this.managedGeometries[e.id];const n=e.glVertexArrayObjects[this.CONTEXT_UID],i=this.gl,s=e.buffers,o=(u=this.renderer)==null?void 0:u.buffer;if(e.disposeRunner.remove(this),!!n){if(o)for(let c=0;c<s.length;c++){const h=s[c]._glBuffers[this.CONTEXT_UID];h&&(h.refCount--,h.refCount===0&&!r&&o.dispose(s[c],r))}if(!r){for(const c in n)if(c[0]==="g"){const h=n[c];this._activeVao===h&&this.unbind(),i.deleteVertexArray(h)}}delete e.glVertexArrayObjects[this.CONTEXT_UID]}}disposeAll(e){const r=Object.keys(this.managedGeometries);for(let n=0;n<r.length;n++)this.disposeGeometry(this.managedGeometries[r[n]],e)}activateVao(e,r){const n=this.gl,i=this.CONTEXT_UID,s=this.renderer.buffer,o=e.buffers,u=e.attributes;e.indexBuffer&&s.bind(e.indexBuffer);let c=null;for(const h in u){const f=u[h],p=o[f.buffer],g=p._glBuffers[i];if(r.attributeData[h]){c!==g&&(s.bind(p),c=g);const v=r.attributeData[h].location;if(n.enableVertexAttribArray(v),n.vertexAttribPointer(v,f.size,f.type||n.FLOAT,f.normalized,f.stride,f.start),f.instance)if(this.hasInstance)n.vertexAttribDivisor(v,f.divisor);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}}draw(e,r,n,i){const{gl:s}=this,o=this._activeGeometry;if(o.indexBuffer){const u=o.indexBuffer.data.BYTES_PER_ELEMENT,c=u===2?s.UNSIGNED_SHORT:s.UNSIGNED_INT;u===2||u===4&&this.canUseUInt32ElementIndex?o.instanced?s.drawElementsInstanced(e,r||o.indexBuffer.data.length,c,(n||0)*u,i||1):s.drawElements(e,r||o.indexBuffer.data.length,c,(n||0)*u):console.warn("unsupported index buffer type: uint32")}else o.instanced?s.drawArraysInstanced(e,n,r||o.getSize(),i||1):s.drawArrays(e,n,r||o.getSize());return this}unbind(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null}destroy(){this.renderer=null}}Zb.extension={type:oe.RendererSystem,name:"geometry"};me.add(Zb);const r_=new it;class hy{constructor(e,r){this._texture=e,this.mapCoord=new it,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof r>"u"?.5:r,this.isSimple=!1}get texture(){return this._texture}set texture(e){this._texture=e,this._textureID=-1}multiplyUvs(e,r){r===void 0&&(r=e);const n=this.mapCoord;for(let i=0;i<e.length;i+=2){const s=e[i],o=e[i+1];r[i]=s*n.a+o*n.c+n.tx,r[i+1]=s*n.b+o*n.d+n.ty}return r}update(e){const r=this._texture;if(!r||!r.valid||!e&&this._textureID===r._updateID)return!1;this._textureID=r._updateID,this._updateID++;const n=r._uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const i=r.orig,s=r.trim;s&&(r_.set(i.width/s.width,0,0,i.height/s.height,-s.x/s.width,-s.y/s.height),this.mapCoord.append(r_));const o=r.baseTexture,u=this.uClampFrame,c=this.clampMargin/o.resolution,h=this.clampOffset;return u[0]=(r._frame.x+c+h)/o.width,u[1]=(r._frame.y+c+h)/o.height,u[2]=(r._frame.x+r._frame.width-c+h)/o.width,u[3]=(r._frame.y+r._frame.height-c+h)/o.height,this.uClampOffset[0]=h/o.realWidth,this.uClampOffset[1]=h/o.realHeight,this.isSimple=r._frame.width===o.width&&r._frame.height===o.height&&r.rotate===0,!0}}var YP=`varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,KP=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;class QP extends Ie{constructor(e,r,n){let i=null;typeof e!="string"&&r===void 0&&n===void 0&&(i=e,e=void 0,r=void 0,n=void 0),super(e||KP,r||YP,n),this.maskSprite=i,this.maskMatrix=new it}get maskSprite(){return this._maskSprite}set maskSprite(e){this._maskSprite=e,this._maskSprite&&(this._maskSprite.renderable=!1)}apply(e,r,n,i){const s=this._maskSprite,o=s._texture;!o.valid||(o.uvMatrix||(o.uvMatrix=new hy(o,0)),o.uvMatrix.update(),this.uniforms.npmAlpha=o.baseTexture.alphaMode?0:1,this.uniforms.mask=o,this.uniforms.otherMatrix=e.calculateSpriteMatrix(this.maskMatrix,s).prepend(o.uvMatrix.mapCoord),this.uniforms.alpha=s.worldAlpha,this.uniforms.maskClamp=o.uvMatrix.uClampFrame,e.applyFilter(this,r,n,i))}}class ZP{constructor(e=null){this.type=At.NONE,this.autoDetect=!0,this.maskObject=e||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=Ie.defaultMultisample,this.enabled=!0,this.colorMask=15,this._filters=null,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._scissorRectLocal=null,this._colorMask=15,this._target=null}get filter(){return this._filters?this._filters[0]:null}set filter(e){e?this._filters?this._filters[0]=e:this._filters=[e]:this._filters=null}reset(){this.pooled&&(this.maskObject=null,this.type=At.NONE,this.autoDetect=!0),this._target=null,this._scissorRectLocal=null}copyCountersOrReset(e){e?(this._stencilCounter=e._stencilCounter,this._scissorCounter=e._scissorCounter,this._scissorRect=e._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)}}class qb{constructor(e){this.renderer=e,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}setMaskStack(e){this.maskStack=e,this.renderer.scissor.setMaskStack(e),this.renderer.stencil.setMaskStack(e)}push(e,r){let n=r;if(!n.isMaskData){const s=this.maskDataPool.pop()||new ZP;s.pooled=!0,s.maskObject=r,n=s}const i=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null;if(n.copyCountersOrReset(i),n._colorMask=i?i._colorMask:15,n.autoDetect&&this.detect(n),n._target=e,n.type!==At.SPRITE&&this.maskStack.push(n),n.enabled)switch(n.type){case At.SCISSOR:this.renderer.scissor.push(n);break;case At.STENCIL:this.renderer.stencil.push(n);break;case At.SPRITE:n.copyCountersOrReset(null),this.pushSpriteMask(n);break;case At.COLOR:this.pushColorMask(n);break}n.type===At.SPRITE&&this.maskStack.push(n)}pop(e){const r=this.maskStack.pop();if(!(!r||r._target!==e)){if(r.enabled)switch(r.type){case At.SCISSOR:this.renderer.scissor.pop(r);break;case At.STENCIL:this.renderer.stencil.pop(r.maskObject);break;case At.SPRITE:this.popSpriteMask(r);break;case At.COLOR:this.popColorMask(r);break}if(r.reset(),r.pooled&&this.maskDataPool.push(r),this.maskStack.length!==0){const n=this.maskStack[this.maskStack.length-1];n.type===At.SPRITE&&n._filters&&(n._filters[0].maskSprite=n.maskObject)}}}detect(e){const r=e.maskObject;r?r.isSprite?e.type=At.SPRITE:this.enableScissor&&this.renderer.scissor.testScissor(e)?e.type=At.SCISSOR:e.type=At.STENCIL:e.type=At.COLOR}pushSpriteMask(e){var f,p;const{maskObject:r}=e,n=e._target;let i=e._filters;i||(i=this.alphaMaskPool[this.alphaMaskIndex],i||(i=this.alphaMaskPool[this.alphaMaskIndex]=[new QP]));const s=this.renderer,o=s.renderTexture;let u,c;if(o.current){const g=o.current;u=e.resolution||g.resolution,c=(f=e.multisample)!=null?f:g.multisample}else u=e.resolution||s.resolution,c=(p=e.multisample)!=null?p:s.multisample;i[0].resolution=u,i[0].multisample=c,i[0].maskSprite=r;const h=n.filterArea;n.filterArea=r.getBounds(!0),s.filter.push(n,i),n.filterArea=h,e._filters||this.alphaMaskIndex++}popSpriteMask(e){this.renderer.filter.pop(),e._filters?e._filters[0].maskSprite=null:(this.alphaMaskIndex--,this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite=null)}pushColorMask(e){const r=e._colorMask,n=e._colorMask=r&e.colorMask;n!==r&&this.renderer.gl.colorMask((n&1)!==0,(n&2)!==0,(n&4)!==0,(n&8)!==0)}popColorMask(e){const r=e._colorMask,n=this.maskStack.length>0?this.maskStack[this.maskStack.length-1]._colorMask:15;n!==r&&this.renderer.gl.colorMask((n&1)!==0,(n&2)!==0,(n&4)!==0,(n&8)!==0)}destroy(){this.renderer=null}}qb.extension={type:oe.RendererSystem,name:"mask"};me.add(qb);class Jb{constructor(e){this.renderer=e,this.maskStack=[],this.glConst=0}getStackLength(){return this.maskStack.length}setMaskStack(e){const{gl:r}=this.renderer,n=this.getStackLength();this.maskStack=e;const i=this.getStackLength();i!==n&&(i===0?r.disable(this.glConst):(r.enable(this.glConst),this._useCurrent()))}_useCurrent(){}destroy(){this.renderer=null,this.maskStack=null}}const n_=new it,i_=[],vh=class extends Jb{constructor(t){super(t),this.glConst=ee.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST}getStackLength(){const t=this.maskStack[this.maskStack.length-1];return t?t._scissorCounter:0}calcScissorRect(t){var o;if(t._scissorRectLocal)return;const e=t._scissorRect,{maskObject:r}=t,{renderer:n}=this,i=n.renderTexture,s=r.getBounds(!0,(o=i_.pop())!=null?o:new Ee);this.roundFrameToPixels(s,i.current?i.current.resolution:n.resolution,i.sourceFrame,i.destinationFrame,n.projection.transform),e&&s.fit(e),t._scissorRectLocal=s}static isMatrixRotated(t){if(!t)return!1;const{a:e,b:r,c:n,d:i}=t;return(Math.abs(r)>1e-4||Math.abs(n)>1e-4)&&(Math.abs(e)>1e-4||Math.abs(i)>1e-4)}testScissor(t){const{maskObject:e}=t;if(!e.isFastRect||!e.isFastRect()||vh.isMatrixRotated(e.worldTransform)||vh.isMatrixRotated(this.renderer.projection.transform))return!1;this.calcScissorRect(t);const r=t._scissorRectLocal;return r.width>0&&r.height>0}roundFrameToPixels(t,e,r,n,i){vh.isMatrixRotated(i)||(i=i?n_.copyFrom(i):n_.identity(),i.translate(-r.x,-r.y).scale(n.width/r.width,n.height/r.height).translate(n.x,n.y),this.renderer.filter.transformAABB(i,t),t.fit(n),t.x=Math.round(t.x*e),t.y=Math.round(t.y*e),t.width=Math.round(t.width*e),t.height=Math.round(t.height*e))}push(t){t._scissorRectLocal||this.calcScissorRect(t);const{gl:e}=this.renderer;t._scissorRect||e.enable(e.SCISSOR_TEST),t._scissorCounter++,t._scissorRect=t._scissorRectLocal,this._useCurrent()}pop(t){const{gl:e}=this.renderer;t&&i_.push(t._scissorRectLocal),this.getStackLength()>0?this._useCurrent():e.disable(e.SCISSOR_TEST)}_useCurrent(){const t=this.maskStack[this.maskStack.length-1]._scissorRect;let e;this.renderer.renderTexture.current?e=t.y:e=this.renderer.height-t.height-t.y,this.renderer.gl.scissor(t.x,e,t.width,t.height)}};let ew=vh;ew.extension={type:oe.RendererSystem,name:"scissor"};me.add(ew);class tw extends Jb{constructor(e){super(e),this.glConst=ee.ADAPTER.getWebGLRenderingContext().STENCIL_TEST}getStackLength(){const e=this.maskStack[this.maskStack.length-1];return e?e._stencilCounter:0}push(e){const r=e.maskObject,{gl:n}=this.renderer,i=e._stencilCounter;i===0&&(this.renderer.framebuffer.forceStencil(),n.clearStencil(0),n.clear(n.STENCIL_BUFFER_BIT),n.enable(n.STENCIL_TEST)),e._stencilCounter++;const s=e._colorMask;s!==0&&(e._colorMask=0,n.colorMask(!1,!1,!1,!1)),n.stencilFunc(n.EQUAL,i,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.INCR),r.renderable=!0,r.render(this.renderer),this.renderer.batch.flush(),r.renderable=!1,s!==0&&(e._colorMask=s,n.colorMask((s&1)!==0,(s&2)!==0,(s&4)!==0,(s&8)!==0)),this._useCurrent()}pop(e){const r=this.renderer.gl;if(this.getStackLength()===0)r.disable(r.STENCIL_TEST);else{const n=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null,i=n?n._colorMask:15;i!==0&&(n._colorMask=0,r.colorMask(!1,!1,!1,!1)),r.stencilOp(r.KEEP,r.KEEP,r.DECR),e.renderable=!0,e.render(this.renderer),this.renderer.batch.flush(),e.renderable=!1,i!==0&&(n._colorMask=i,r.colorMask((i&1)!==0,(i&2)!==0,(i&4)!==0,(i&8)!==0)),this._useCurrent()}}_useCurrent(){const e=this.renderer.gl;e.stencilFunc(e.EQUAL,this.getStackLength(),4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP)}}tw.extension={type:oe.RendererSystem,name:"stencil"};me.add(tw);class rw{constructor(e){this.renderer=e,this.plugins={},Object.defineProperties(this.plugins,{extract:{enumerable:!1,get(){return Ae("7.0.0","renderer.plugins.extract has moved to renderer.extract"),e.extract}},prepare:{enumerable:!1,get(){return Ae("7.0.0","renderer.plugins.prepare has moved to renderer.prepare"),e.prepare}},interaction:{enumerable:!1,get(){return Ae("7.0.0","renderer.plugins.interaction has been deprecated, use renderer.events"),e.events}}})}init(){const e=this.rendererPlugins;for(const r in e)this.plugins[r]=new e[r](this.renderer)}destroy(){for(const e in this.plugins)this.plugins[e].destroy(),this.plugins[e]=null}}rw.extension={type:[oe.RendererSystem,oe.CanvasRendererSystem],name:"_plugin"};me.add(rw);class nw{constructor(e){this.renderer=e,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new it,this.transform=null}update(e,r,n,i){this.destinationFrame=e||this.destinationFrame||this.defaultFrame,this.sourceFrame=r||this.sourceFrame||e,this.calculateProjection(this.destinationFrame,this.sourceFrame,n,i),this.transform&&this.projectionMatrix.append(this.transform);const s=this.renderer;s.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,s.globalUniforms.update(),s.shader.shader&&s.shader.syncUniformGroup(s.shader.shader.uniforms.globals)}calculateProjection(e,r,n,i){const s=this.projectionMatrix,o=i?-1:1;s.identity(),s.a=1/r.width*2,s.d=o*(1/r.height*2),s.tx=-1-r.x*s.a,s.ty=-o-r.y*s.d}setTransform(e){}destroy(){this.renderer=null}}nw.extension={type:oe.RendererSystem,name:"projection"};me.add(nw);const qP=new Bd;class iw{constructor(e){this.renderer=e,this._tempMatrix=new it}generateTexture(e,r){const{region:n,...i}=r||{},s=n||e.getLocalBounds(null,!0);s.width===0&&(s.width=1),s.height===0&&(s.height=1);const o=ii.create({width:s.width,height:s.height,...i});this._tempMatrix.tx=-s.x,this._tempMatrix.ty=-s.y;const u=e.transform;return e.transform=qP,this.renderer.render(e,{renderTexture:o,transform:this._tempMatrix,skipUpdateTransform:!!e.parent,blit:!0}),e.transform=u,o}destroy(){}}iw.extension={type:[oe.RendererSystem,oe.CanvasRendererSystem],name:"textureGenerator"};me.add(iw);const Us=new Ee,dl=new Ee;class sw{constructor(e){this.renderer=e,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new Ee,this.destinationFrame=new Ee,this.viewportFrame=new Ee}contextChange(){var r;const e=(r=this.renderer)==null?void 0:r.gl.getContextAttributes();this._rendererPremultipliedAlpha=!!(e&&e.alpha&&e.premultipliedAlpha)}bind(e=null,r,n){const i=this.renderer;this.current=e;let s,o,u;e?(s=e.baseTexture,u=s.resolution,r||(Us.width=e.frame.width,Us.height=e.frame.height,r=Us),n||(dl.x=e.frame.x,dl.y=e.frame.y,dl.width=r.width,dl.height=r.height,n=dl),o=s.framebuffer):(u=i.resolution,r||(Us.width=i._view.screen.width,Us.height=i._view.screen.height,r=Us),n||(n=Us,n.width=r.width,n.height=r.height));const c=this.viewportFrame;c.x=n.x*u,c.y=n.y*u,c.width=n.width*u,c.height=n.height*u,e||(c.y=i.view.height-(c.y+c.height)),c.ceil(),this.renderer.framebuffer.bind(o,c),this.renderer.projection.update(n,r,u,!o),e?this.renderer.mask.setMaskStack(s.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(r),this.destinationFrame.copyFrom(n)}clear(e,r){const n=this.current?this.current.baseTexture.clear:this.renderer.background.backgroundColor,i=Ge.shared.setValue(e||n);(this.current&&this.current.baseTexture.alphaMode>0||!this.current&&this._rendererPremultipliedAlpha)&&i.premultiply(i.alpha);const s=this.destinationFrame,o=this.current?this.current.baseTexture:this.renderer._view.screen,u=s.width!==o.width||s.height!==o.height;if(u){let{x:c,y:h,width:f,height:p}=this.viewportFrame;c=Math.round(c),h=Math.round(h),f=Math.round(f),p=Math.round(p),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(c,h,f,p)}this.renderer.framebuffer.clear(i.red,i.green,i.blue,i.alpha,r),u&&this.renderer.scissor.pop()}resize(){this.bind(null)}reset(){this.bind(null)}destroy(){this.renderer=null}}sw.extension={type:oe.RendererSystem,name:"renderTexture"};me.add(sw);class JP{constructor(e,r){this.program=e,this.uniformData=r,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}destroy(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null}}function e5(t,e){const r={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=e.getActiveAttrib(t,i);if(s.name.startsWith("gl_"))continue;const o=jb(e,s.type),u={type:o,name:s.name,size:Gb(o),location:e.getAttribLocation(t,s.name)};r[s.name]=u}return r}function t5(t,e){const r={},n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;i++){const s=e.getActiveUniform(t,i),o=s.name.replace(/\[.*?\]$/,""),u=!!s.name.match(/\[.*?\]$/),c=jb(e,s.type);r[o]={name:o,index:i,type:c,size:s.size,isArray:u,value:Ub(c,s.size)}}return r}function r5(t,e){var c;const r=Qx(t,t.VERTEX_SHADER,e.vertexSrc),n=Qx(t,t.FRAGMENT_SHADER,e.fragmentSrc),i=t.createProgram();t.attachShader(i,r),t.attachShader(i,n);const s=(c=e.extra)==null?void 0:c.transformFeedbackVaryings;if(s&&(typeof t.transformFeedbackVaryings!="function"?console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given."):t.transformFeedbackVaryings(i,s.names,s.bufferMode==="separate"?t.SEPARATE_ATTRIBS:t.INTERLEAVED_ATTRIBS)),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)||kP(t,i,r,n),e.attributeData=e5(i,t),e.uniformData=t5(i,t),!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertexSrc)){const h=Object.keys(e.attributeData);h.sort((f,p)=>f>p?1:-1);for(let f=0;f<h.length;f++)e.attributeData[h[f]].location=f,t.bindAttribLocation(i,f,h[f]);t.linkProgram(i)}t.deleteShader(r),t.deleteShader(n);const o={};for(const h in e.uniformData){const f=e.uniformData[h];o[h]={location:t.getUniformLocation(i,h),value:Ub(f.type,f.size)}}return new JP(i,o)}function n5(t,e,r,n,i){r.buffer.update(i)}const i5={float:`
        data[offset] = v;
    `,vec2:`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,vec3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,vec4:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,mat2:`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,mat3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,mat4:`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `},ow={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:16*2,mat3:16*3,mat4:16*4};function s5(t){const e=t.map(s=>({data:s,offset:0,dataLen:0,dirty:0}));let r=0,n=0,i=0;for(let s=0;s<e.length;s++){const o=e[s];if(r=ow[o.data.type],o.data.size>1&&(r=Math.max(r,16)*o.data.size),o.dataLen=r,n%r!==0&&n<16){const u=n%r%16;n+=u,i+=u}n+r>16?(i=Math.ceil(i/16)*16,o.offset=i,i+=r,n=r):(o.offset=i,n+=r,i+=r)}return i=Math.ceil(i/16)*16,{uboElements:e,size:i}}function o5(t,e){const r=[];for(const n in t)e[n]&&r.push(e[n]);return r.sort((n,i)=>n.index-i.index),r}function a5(t,e){if(!t.autoManage)return{size:0,syncFunc:n5};const r=o5(t.uniforms,e),{uboElements:n,size:i}=s5(r),s=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];for(let o=0;o<n.length;o++){const u=n[o],c=t.uniforms[u.data.name],h=u.data.name;let f=!1;for(let p=0;p<va.length;p++){const g=va[p];if(g.codeUbo&&g.test(u.data,c)){s.push(`offset = ${u.offset/4};`,va[p].codeUbo(u.data.name,c)),f=!0;break}}if(!f)if(u.data.size>1){const p=Gb(u.data.type),g=Math.max(ow[u.data.type]/16,1),v=p/g,x=(4-v%4)%4;s.push(`
                cv = ud.${h}.value;
                v = uv.${h};
                offset = ${u.offset/4};

                t = 0;

                for(var i=0; i < ${u.data.size*g}; i++)
                {
                    for(var j = 0; j < ${v}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${x};
                }

                `)}else{const p=i5[u.data.type];s.push(`
                cv = ud.${h}.value;
                v = uv.${h};
                offset = ${u.offset/4};
                ${p};
                `)}}return s.push(`
       renderer.buffer.update(buffer);
    `),{size:i,syncFunc:new Function("ud","uv","renderer","syncData","buffer",s.join(`
`))}}let l5=0;const Hc={textureCount:0,uboCount:0};class aw{constructor(e){this.destroyed=!1,this.renderer=e,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=l5++}systemCheck(){if(!DP())throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")}contextChange(e){this.gl=e,this.reset()}bind(e,r){e.disposeRunner.add(this),e.uniforms.globals=this.renderer.globalUniforms;const n=e.program,i=n.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(e);return this.shader=e,this.program!==n&&(this.program=n,this.gl.useProgram(i.program)),r||(Hc.textureCount=0,Hc.uboCount=0,this.syncUniformGroup(e.uniformGroup,Hc)),i}setUniforms(e){const r=this.shader.program,n=r.glPrograms[this.renderer.CONTEXT_UID];r.syncUniforms(n.uniformData,e,this.renderer)}syncUniformGroup(e,r){const n=this.getGlProgram();(!e.static||e.dirtyId!==n.uniformDirtyGroups[e.id])&&(n.uniformDirtyGroups[e.id]=e.dirtyId,this.syncUniforms(e,n,r))}syncUniforms(e,r,n){(e.syncUniforms[this.shader.program.id]||this.createSyncGroups(e))(r.uniformData,e.uniforms,this.renderer,n)}createSyncGroups(e){const r=this.getSignature(e,this.shader.program.uniformData,"u");return this.cache[r]||(this.cache[r]=PP(e,this.shader.program.uniformData)),e.syncUniforms[this.shader.program.id]=this.cache[r],e.syncUniforms[this.shader.program.id]}syncUniformBufferGroup(e,r){const n=this.getGlProgram();if(!e.static||e.dirtyId!==0||!n.uniformGroups[e.id]){e.dirtyId=0;const i=n.uniformGroups[e.id]||this.createSyncBufferGroup(e,n,r);e.buffer.update(),i(n.uniformData,e.uniforms,this.renderer,Hc,e.buffer)}this.renderer.buffer.bindBufferBase(e.buffer,n.uniformBufferBindings[r])}createSyncBufferGroup(e,r,n){const{gl:i}=this.renderer;this.renderer.buffer.bind(e.buffer);const s=this.gl.getUniformBlockIndex(r.program,n);r.uniformBufferBindings[n]=this.shader.uniformBindCount,i.uniformBlockBinding(r.program,s,this.shader.uniformBindCount),this.shader.uniformBindCount++;const o=this.getSignature(e,this.shader.program.uniformData,"ubo");let u=this._uboCache[o];if(u||(u=this._uboCache[o]=a5(e,this.shader.program.uniformData)),e.autoManage){const c=new Float32Array(u.size/4);e.buffer.update(c)}return r.uniformGroups[e.id]=u.syncFunc,r.uniformGroups[e.id]}getSignature(e,r,n){const i=e.uniforms,s=[`${n}-`];for(const o in i)s.push(o),r[o]&&s.push(r[o].type);return s.join("-")}getGlProgram(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null}generateProgram(e){const r=this.gl,n=e.program,i=r5(r,n);return n.glPrograms[this.renderer.CONTEXT_UID]=i,i}reset(){this.program=null,this.shader=null}disposeShader(e){this.shader===e&&(this.shader=null)}destroy(){this.renderer=null,this.destroyed=!0}}aw.extension={type:oe.RendererSystem,name:"shader"};me.add(aw);class jd{constructor(e){this.renderer=e}run(e){const{renderer:r}=this;r.runners.init.emit(r.options),e.hello&&console.log(`PixiJS 7.2.4 - ${r.rendererLogId} - https://pixijs.com`),r.resize(r.screen.width,r.screen.height)}destroy(){}}jd.defaultOptions={hello:!1};jd.extension={type:[oe.RendererSystem,oe.CanvasRendererSystem],name:"startup"};me.add(jd);function u5(t,e=[]){return e[pe.NORMAL]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.ADD]=[t.ONE,t.ONE],e[pe.MULTIPLY]=[t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.SCREEN]=[t.ONE,t.ONE_MINUS_SRC_COLOR,t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.OVERLAY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.DARKEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.LIGHTEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.COLOR_DODGE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.COLOR_BURN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.HARD_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.SOFT_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.DIFFERENCE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.EXCLUSION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.HUE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.SATURATION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.COLOR]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.LUMINOSITY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.NONE]=[0,0],e[pe.NORMAL_NPM]=[t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.ADD_NPM]=[t.SRC_ALPHA,t.ONE,t.ONE,t.ONE],e[pe.SCREEN_NPM]=[t.SRC_ALPHA,t.ONE_MINUS_SRC_COLOR,t.ONE,t.ONE_MINUS_SRC_ALPHA],e[pe.SRC_IN]=[t.DST_ALPHA,t.ZERO],e[pe.SRC_OUT]=[t.ONE_MINUS_DST_ALPHA,t.ZERO],e[pe.SRC_ATOP]=[t.DST_ALPHA,t.ONE_MINUS_SRC_ALPHA],e[pe.DST_OVER]=[t.ONE_MINUS_DST_ALPHA,t.ONE],e[pe.DST_IN]=[t.ZERO,t.SRC_ALPHA],e[pe.DST_OUT]=[t.ZERO,t.ONE_MINUS_SRC_ALPHA],e[pe.DST_ATOP]=[t.ONE_MINUS_DST_ALPHA,t.SRC_ALPHA],e[pe.XOR]=[t.ONE_MINUS_DST_ALPHA,t.ONE_MINUS_SRC_ALPHA],e[pe.SUBTRACT]=[t.ONE,t.ONE,t.ONE,t.ONE,t.FUNC_REVERSE_SUBTRACT,t.FUNC_ADD],e}const c5=0,h5=1,d5=2,f5=3,p5=4,m5=5,Bg=class{constructor(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=pe.NONE,this._blendEq=!1,this.map=[],this.map[c5]=this.setBlend,this.map[h5]=this.setOffset,this.map[d5]=this.setCullFace,this.map[f5]=this.setDepthTest,this.map[p5]=this.setFrontFace,this.map[m5]=this.setDepthMask,this.checks=[],this.defaultState=new Bi,this.defaultState.blend=!0}contextChange(t){this.gl=t,this.blendModes=u5(t),this.set(this.defaultState),this.reset()}set(t){if(t=t||this.defaultState,this.stateId!==t.data){let e=this.stateId^t.data,r=0;for(;e;)e&1&&this.map[r].call(this,!!(t.data&1<<r)),e=e>>1,r++;this.stateId=t.data}for(let e=0;e<this.checks.length;e++)this.checks[e](this,t)}forceState(t){t=t||this.defaultState;for(let e=0;e<this.map.length;e++)this.map[e].call(this,!!(t.data&1<<e));for(let e=0;e<this.checks.length;e++)this.checks[e](this,t);this.stateId=t.data}setBlend(t){this.updateCheck(Bg.checkBlendMode,t),this.gl[t?"enable":"disable"](this.gl.BLEND)}setOffset(t){this.updateCheck(Bg.checkPolygonOffset,t),this.gl[t?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)}setDepthTest(t){this.gl[t?"enable":"disable"](this.gl.DEPTH_TEST)}setDepthMask(t){this.gl.depthMask(t)}setCullFace(t){this.gl[t?"enable":"disable"](this.gl.CULL_FACE)}setFrontFace(t){this.gl.frontFace(this.gl[t?"CW":"CCW"])}setBlendMode(t){if(t===this.blendMode)return;this.blendMode=t;const e=this.blendModes[t],r=this.gl;e.length===2?r.blendFunc(e[0],e[1]):r.blendFuncSeparate(e[0],e[1],e[2],e[3]),e.length===6?(this._blendEq=!0,r.blendEquationSeparate(e[4],e[5])):this._blendEq&&(this._blendEq=!1,r.blendEquationSeparate(r.FUNC_ADD,r.FUNC_ADD))}setPolygonOffset(t,e){this.gl.polygonOffset(t,e)}reset(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)}updateCheck(t,e){const r=this.checks.indexOf(t);e&&r===-1?this.checks.push(t):!e&&r!==-1&&this.checks.splice(r,1)}static checkBlendMode(t,e){t.setBlendMode(e.blendMode)}static checkPolygonOffset(t,e){t.setPolygonOffset(1,e.polygonOffset)}destroy(){this.gl=null}};let lw=Bg;lw.extension={type:oe.RendererSystem,name:"state"};me.add(lw);class g5 extends Ma{constructor(){super(...arguments),this.runners={},this._systemsHash={}}setup(e){var i;this.addRunners(...e.runners);const r=((i=e.priority)!=null?i:[]).filter(s=>e.systems[s]),n=[...r,...Object.keys(e.systems).filter(s=>!r.includes(s))];for(const s of n)this.addSystem(e.systems[s],s)}addRunners(...e){e.forEach(r=>{this.runners[r]=new kn(r)})}addSystem(e,r){const n=new e(this);if(this[r])throw new Error(`Whoops! The name "${r}" is already in use`);this[r]=n,this._systemsHash[r]=n;for(const i in this.runners)this.runners[i].add(n);return this}emitWithCustomOptions(e,r){const n=Object.keys(this._systemsHash);e.items.forEach(i=>{const s=n.find(o=>this._systemsHash[o]===i);i[e.name](r[s])})}destroy(){Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash={}}}const xh=class{constructor(t){this.renderer=t,this.count=0,this.checkCount=0,this.maxIdle=xh.defaultMaxIdle,this.checkCountMax=xh.defaultCheckCountMax,this.mode=xh.defaultMode}postrender(){!this.renderer.objectRenderer.renderingToScreen||(this.count++,this.mode!==oy.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))}run(){const t=this.renderer.texture,e=t.managedTextures;let r=!1;for(let n=0;n<e.length;n++){const i=e[n];!i.framebuffer&&this.count-i.touched>this.maxIdle&&(t.destroyTexture(i,!0),e[n]=null,r=!0)}if(r){let n=0;for(let i=0;i<e.length;i++)e[i]!==null&&(e[n++]=e[i]);e.length=n}}unload(t){const e=this.renderer.texture,r=t._texture;r&&!r.framebuffer&&e.destroyTexture(r);for(let n=t.children.length-1;n>=0;n--)this.unload(t.children[n])}destroy(){this.renderer=null}};let wn=xh;wn.defaultMode=oy.AUTO;wn.defaultMaxIdle=60*60;wn.defaultCheckCountMax=60*10;wn.extension={type:oe.RendererSystem,name:"textureGC"};me.add(wn);class sm{constructor(e){this.texture=e,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=ve.UNSIGNED_BYTE,this.internalFormat=J.RGBA,this.samplerType=0}}function y5(t){let e;return"WebGL2RenderingContext"in globalThis&&t instanceof globalThis.WebGL2RenderingContext?e={[ve.UNSIGNED_BYTE]:{[J.RGBA]:t.RGBA8,[J.RGB]:t.RGB8,[J.RG]:t.RG8,[J.RED]:t.R8,[J.RGBA_INTEGER]:t.RGBA8UI,[J.RGB_INTEGER]:t.RGB8UI,[J.RG_INTEGER]:t.RG8UI,[J.RED_INTEGER]:t.R8UI,[J.ALPHA]:t.ALPHA,[J.LUMINANCE]:t.LUMINANCE,[J.LUMINANCE_ALPHA]:t.LUMINANCE_ALPHA},[ve.BYTE]:{[J.RGBA]:t.RGBA8_SNORM,[J.RGB]:t.RGB8_SNORM,[J.RG]:t.RG8_SNORM,[J.RED]:t.R8_SNORM,[J.RGBA_INTEGER]:t.RGBA8I,[J.RGB_INTEGER]:t.RGB8I,[J.RG_INTEGER]:t.RG8I,[J.RED_INTEGER]:t.R8I},[ve.UNSIGNED_SHORT]:{[J.RGBA_INTEGER]:t.RGBA16UI,[J.RGB_INTEGER]:t.RGB16UI,[J.RG_INTEGER]:t.RG16UI,[J.RED_INTEGER]:t.R16UI,[J.DEPTH_COMPONENT]:t.DEPTH_COMPONENT16},[ve.SHORT]:{[J.RGBA_INTEGER]:t.RGBA16I,[J.RGB_INTEGER]:t.RGB16I,[J.RG_INTEGER]:t.RG16I,[J.RED_INTEGER]:t.R16I},[ve.UNSIGNED_INT]:{[J.RGBA_INTEGER]:t.RGBA32UI,[J.RGB_INTEGER]:t.RGB32UI,[J.RG_INTEGER]:t.RG32UI,[J.RED_INTEGER]:t.R32UI,[J.DEPTH_COMPONENT]:t.DEPTH_COMPONENT24},[ve.INT]:{[J.RGBA_INTEGER]:t.RGBA32I,[J.RGB_INTEGER]:t.RGB32I,[J.RG_INTEGER]:t.RG32I,[J.RED_INTEGER]:t.R32I},[ve.FLOAT]:{[J.RGBA]:t.RGBA32F,[J.RGB]:t.RGB32F,[J.RG]:t.RG32F,[J.RED]:t.R32F,[J.DEPTH_COMPONENT]:t.DEPTH_COMPONENT32F},[ve.HALF_FLOAT]:{[J.RGBA]:t.RGBA16F,[J.RGB]:t.RGB16F,[J.RG]:t.RG16F,[J.RED]:t.R16F},[ve.UNSIGNED_SHORT_5_6_5]:{[J.RGB]:t.RGB565},[ve.UNSIGNED_SHORT_4_4_4_4]:{[J.RGBA]:t.RGBA4},[ve.UNSIGNED_SHORT_5_5_5_1]:{[J.RGBA]:t.RGB5_A1},[ve.UNSIGNED_INT_2_10_10_10_REV]:{[J.RGBA]:t.RGB10_A2,[J.RGBA_INTEGER]:t.RGB10_A2UI},[ve.UNSIGNED_INT_10F_11F_11F_REV]:{[J.RGB]:t.R11F_G11F_B10F},[ve.UNSIGNED_INT_5_9_9_9_REV]:{[J.RGB]:t.RGB9_E5},[ve.UNSIGNED_INT_24_8]:{[J.DEPTH_STENCIL]:t.DEPTH24_STENCIL8},[ve.FLOAT_32_UNSIGNED_INT_24_8_REV]:{[J.DEPTH_STENCIL]:t.DEPTH32F_STENCIL8}}:e={[ve.UNSIGNED_BYTE]:{[J.RGBA]:t.RGBA,[J.RGB]:t.RGB,[J.ALPHA]:t.ALPHA,[J.LUMINANCE]:t.LUMINANCE,[J.LUMINANCE_ALPHA]:t.LUMINANCE_ALPHA},[ve.UNSIGNED_SHORT_5_6_5]:{[J.RGB]:t.RGB},[ve.UNSIGNED_SHORT_4_4_4_4]:{[J.RGBA]:t.RGBA},[ve.UNSIGNED_SHORT_5_5_5_1]:{[J.RGBA]:t.RGBA}},e}class uw{constructor(e){this.renderer=e,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new be,this.hasIntegerTextures=!1}contextChange(){const e=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=y5(e);const r=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=r;for(let i=0;i<r;i++)this.boundTextures[i]=null;this.emptyTextures={};const n=new sm(e.createTexture());e.bindTexture(e.TEXTURE_2D,n.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[e.TEXTURE_2D]=n,this.emptyTextures[e.TEXTURE_CUBE_MAP]=new sm(e.createTexture()),e.bindTexture(e.TEXTURE_CUBE_MAP,this.emptyTextures[e.TEXTURE_CUBE_MAP].texture);for(let i=0;i<6;i++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null);e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MIN_FILTER,e.LINEAR);for(let i=0;i<this.boundTextures.length;i++)this.bind(null,i)}bind(e,r=0){const{gl:n}=this;if(e=e==null?void 0:e.castToBaseTexture(),(e==null?void 0:e.valid)&&!e.parentTextureArray){e.touched=this.renderer.textureGC.count;const i=e._glTextures[this.CONTEXT_UID]||this.initTexture(e);this.boundTextures[r]!==e&&(this.currentLocation!==r&&(this.currentLocation=r,n.activeTexture(n.TEXTURE0+r)),n.bindTexture(e.target,i.texture)),i.dirtyId!==e.dirtyId?(this.currentLocation!==r&&(this.currentLocation=r,n.activeTexture(n.TEXTURE0+r)),this.updateTexture(e)):i.dirtyStyleId!==e.dirtyStyleId&&this.updateTextureStyle(e),this.boundTextures[r]=e}else this.currentLocation!==r&&(this.currentLocation=r,n.activeTexture(n.TEXTURE0+r)),n.bindTexture(n.TEXTURE_2D,this.emptyTextures[n.TEXTURE_2D].texture),this.boundTextures[r]=null}reset(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(let e=0;e<this.boundTextures.length;e++)this.boundTextures[e]=this.unknownTexture}unbind(e){const{gl:r,boundTextures:n}=this;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(let i=0;i<n.length;i++)n[i]===this.unknownTexture&&this.bind(null,i)}for(let i=0;i<n.length;i++)n[i]===e&&(this.currentLocation!==i&&(r.activeTexture(r.TEXTURE0+i),this.currentLocation=i),r.bindTexture(e.target,this.emptyTextures[e.target].texture),n[i]=null)}ensureSamplerType(e){const{boundTextures:r,hasIntegerTextures:n,CONTEXT_UID:i}=this;if(!!n)for(let s=e-1;s>=0;--s){const o=r[s];o&&o._glTextures[i].samplerType!==_g.FLOAT&&this.renderer.texture.unbind(o)}}initTexture(e){const r=new sm(this.gl.createTexture());return r.dirtyId=-1,e._glTextures[this.CONTEXT_UID]=r,this.managedTextures.push(e),e.on("dispose",this.destroyTexture,this),r}initTextureType(e,r){var n,i;r.internalFormat=(i=(n=this.internalFormats[e.type])==null?void 0:n[e.format])!=null?i:e.format,this.webGLVersion===2&&e.type===ve.HALF_FLOAT?r.type=this.gl.HALF_FLOAT:r.type=e.type}updateTexture(e){var i;const r=e._glTextures[this.CONTEXT_UID];if(!r)return;const n=this.renderer;if(this.initTextureType(e,r),(i=e.resource)!=null&&i.upload(n,e,r))r.samplerType!==_g.FLOAT&&(this.hasIntegerTextures=!0);else{const s=e.realWidth,o=e.realHeight,u=n.gl;(r.width!==s||r.height!==o||r.dirtyId<0)&&(r.width=s,r.height=o,u.texImage2D(e.target,0,r.internalFormat,s,o,0,e.format,r.type,null))}e.dirtyStyleId!==r.dirtyStyleId&&this.updateTextureStyle(e),r.dirtyId=e.dirtyId}destroyTexture(e,r){const{gl:n}=this;if(e=e.castToBaseTexture(),e._glTextures[this.CONTEXT_UID]&&(this.unbind(e),n.deleteTexture(e._glTextures[this.CONTEXT_UID].texture),e.off("dispose",this.destroyTexture,this),delete e._glTextures[this.CONTEXT_UID],!r)){const i=this.managedTextures.indexOf(e);i!==-1&&ga(this.managedTextures,i,1)}}updateTextureStyle(e){var n;const r=e._glTextures[this.CONTEXT_UID];!r||((e.mipmap===si.POW2||this.webGLVersion!==2)&&!e.isPowerOfTwo?r.mipmap=!1:r.mipmap=e.mipmap>=1,this.webGLVersion!==2&&!e.isPowerOfTwo?r.wrapMode=Ai.CLAMP:r.wrapMode=e.wrapMode,(n=e.resource)!=null&&n.style(this.renderer,e,r)||this.setStyle(e,r),r.dirtyStyleId=e.dirtyStyleId)}setStyle(e,r){const n=this.gl;if(r.mipmap&&e.mipmap!==si.ON_MANUAL&&n.generateMipmap(e.target),n.texParameteri(e.target,n.TEXTURE_WRAP_S,r.wrapMode),n.texParameteri(e.target,n.TEXTURE_WRAP_T,r.wrapMode),r.mipmap){n.texParameteri(e.target,n.TEXTURE_MIN_FILTER,e.scaleMode===qn.LINEAR?n.LINEAR_MIPMAP_LINEAR:n.NEAREST_MIPMAP_NEAREST);const i=this.renderer.context.extensions.anisotropicFiltering;if(i&&e.anisotropicLevel>0&&e.scaleMode===qn.LINEAR){const s=Math.min(e.anisotropicLevel,n.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));n.texParameterf(e.target,i.TEXTURE_MAX_ANISOTROPY_EXT,s)}}else n.texParameteri(e.target,n.TEXTURE_MIN_FILTER,e.scaleMode===qn.LINEAR?n.LINEAR:n.NEAREST);n.texParameteri(e.target,n.TEXTURE_MAG_FILTER,e.scaleMode===qn.LINEAR?n.LINEAR:n.NEAREST)}destroy(){this.renderer=null}}uw.extension={type:oe.RendererSystem,name:"texture"};me.add(uw);class cw{constructor(e){this.renderer=e}contextChange(){this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID}bind(e){const{gl:r,CONTEXT_UID:n}=this,i=e._glTransformFeedbacks[n]||this.createGLTransformFeedback(e);r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,i)}unbind(){const{gl:e}=this;e.bindTransformFeedback(e.TRANSFORM_FEEDBACK,null)}beginTransformFeedback(e,r){const{gl:n,renderer:i}=this;r&&i.shader.bind(r),n.beginTransformFeedback(e)}endTransformFeedback(){const{gl:e}=this;e.endTransformFeedback()}createGLTransformFeedback(e){const{gl:r,renderer:n,CONTEXT_UID:i}=this,s=r.createTransformFeedback();e._glTransformFeedbacks[i]=s,r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,s);for(let o=0;o<e.buffers.length;o++){const u=e.buffers[o];!u||(n.buffer.update(u),u._glBuffers[i].refCount++,r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,o,u._glBuffers[i].buffer||null))}return r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,null),e.disposeRunner.add(this),s}disposeTransformFeedback(e,r){const n=e._glTransformFeedbacks[this.CONTEXT_UID],i=this.gl;e.disposeRunner.remove(this);const s=this.renderer.buffer;if(s)for(let o=0;o<e.buffers.length;o++){const u=e.buffers[o];if(!u)continue;const c=u._glBuffers[this.CONTEXT_UID];c&&(c.refCount--,c.refCount===0&&!r&&s.dispose(u,r))}!n||(r||i.deleteTransformFeedback(n),delete e._glTransformFeedbacks[this.CONTEXT_UID])}destroy(){this.renderer=null}}cw.extension={type:oe.RendererSystem,name:"transformFeedback"};me.add(cw);class Hd{constructor(e){this.renderer=e}init(e){this.screen=new Ee(0,0,e.width,e.height),this.element=e.view||ee.ADAPTER.createCanvas(),this.resolution=e.resolution||ee.RESOLUTION,this.autoDensity=!!e.autoDensity}resizeView(e,r){this.element.width=Math.round(e*this.resolution),this.element.height=Math.round(r*this.resolution);const n=this.element.width/this.resolution,i=this.element.height/this.resolution;this.screen.width=n,this.screen.height=i,this.autoDensity&&(this.element.style.width=`${n}px`,this.element.style.height=`${i}px`),this.renderer.emit("resize",n,i),this.renderer.runners.resize.emit(this.screen.width,this.screen.height)}destroy(e){var r;e&&((r=this.element.parentNode)==null||r.removeChild(this.element)),this.renderer=null,this.element=null,this.screen=null}}Hd.defaultOptions={width:800,height:600,resolution:ee.RESOLUTION,autoDensity:!1};Hd.extension={type:[oe.RendererSystem,oe.CanvasRendererSystem],name:"_view"};me.add(Hd);ee.PREFER_ENV=po.WEBGL2;ee.STRICT_TEXTURE_CACHE=!1;ee.RENDER_OPTIONS={...Gd.defaultOptions,...zd.defaultOptions,...Hd.defaultOptions,...jd.defaultOptions};Object.defineProperties(ee,{WRAP_MODE:{get(){return be.defaultOptions.wrapMode},set(t){Ae("7.1.0","settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"),be.defaultOptions.wrapMode=t}},SCALE_MODE:{get(){return be.defaultOptions.scaleMode},set(t){Ae("7.1.0","settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"),be.defaultOptions.scaleMode=t}},MIPMAP_TEXTURES:{get(){return be.defaultOptions.mipmap},set(t){Ae("7.1.0","settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"),be.defaultOptions.mipmap=t}},ANISOTROPIC_LEVEL:{get(){return be.defaultOptions.anisotropicLevel},set(t){Ae("7.1.0","settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"),be.defaultOptions.anisotropicLevel=t}},FILTER_RESOLUTION:{get(){return Ae("7.1.0","settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"),Ie.defaultResolution},set(t){Ie.defaultResolution=t}},FILTER_MULTISAMPLE:{get(){return Ae("7.1.0","settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"),Ie.defaultMultisample},set(t){Ie.defaultMultisample=t}},SPRITE_MAX_TEXTURES:{get(){return bn.defaultMaxTextures},set(t){Ae("7.1.0","settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"),bn.defaultMaxTextures=t}},SPRITE_BATCH_SIZE:{get(){return bn.defaultBatchSize},set(t){Ae("7.1.0","settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"),bn.defaultBatchSize=t}},CAN_UPLOAD_SAME_BUFFER:{get(){return bn.canUploadSameBuffer},set(t){Ae("7.1.0","settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"),bn.canUploadSameBuffer=t}},GC_MODE:{get(){return wn.defaultMode},set(t){Ae("7.1.0","settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"),wn.defaultMode=t}},GC_MAX_IDLE:{get(){return wn.defaultMaxIdle},set(t){Ae("7.1.0","settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"),wn.defaultMaxIdle=t}},GC_MAX_CHECK_COUNT:{get(){return wn.defaultCheckCountMax},set(t){Ae("7.1.0","settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"),wn.defaultCheckCountMax=t}},PRECISION_VERTEX:{get(){return En.defaultVertexPrecision},set(t){Ae("7.1.0","settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"),En.defaultVertexPrecision=t}},PRECISION_FRAGMENT:{get(){return En.defaultFragmentPrecision},set(t){Ae("7.1.0","settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"),En.defaultFragmentPrecision=t}}});var ws=(t=>(t[t.INTERACTION=50]="INTERACTION",t[t.HIGH=25]="HIGH",t[t.NORMAL=0]="NORMAL",t[t.LOW=-25]="LOW",t[t.UTILITY=-50]="UTILITY",t))(ws||{});class om{constructor(e,r=null,n=0,i=!1){this.next=null,this.previous=null,this._destroyed=!1,this.fn=e,this.context=r,this.priority=n,this.once=i}match(e,r=null){return this.fn===e&&this.context===r}emit(e){this.fn&&(this.context?this.fn.call(this.context,e):this.fn(e));const r=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),r}connect(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this}destroy(e=!1){this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const r=this.next;return this.next=e?null:r,this.previous=null,r}}const Ir=class{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new om(null,null,1/0),this.deltaMS=1/Ir.targetFPMS,this.elapsedMS=1/Ir.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,e,r=ws.NORMAL){return this._addListener(new om(t,e,r))}addOnce(t,e,r=ws.NORMAL){return this._addListener(new om(t,e,r,!0))}_addListener(t){let e=this._head.next,r=this._head;if(!e)t.connect(r);else{for(;e;){if(t.priority>e.priority){t.connect(r);break}r=e,e=e.next}t.previous||t.connect(r)}return this._startIfPossible(),this}remove(t,e){let r=this._head.next;for(;r;)r.match(t,e)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,e=this._head;for(;e=e.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){const i=t-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=t-i%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*Ir.targetFPMS;const r=this._head;let n=r.next;for(;n;)n=n.emit(this.deltaTime);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const e=Math.min(this.maxFPS,t),r=Math.min(Math.max(0,e)/1e3,Ir.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}}static get shared(){if(!Ir._shared){const t=Ir._shared=new Ir;t.autoStart=!0,t._protected=!0}return Ir._shared}static get system(){if(!Ir._system){const t=Ir._system=new Ir;t.autoStart=!0,t._protected=!0}return Ir._system}};let Tt=Ir;Tt.targetFPMS=.06;Object.defineProperties(ee,{TARGET_FPMS:{get(){return Tt.targetFPMS},set(t){Ae("7.1.0","settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"),Tt.targetFPMS=t}}});class hw{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{set(r){this._ticker&&this._ticker.remove(this.render,this),this._ticker=r,r&&r.add(this.render,this,ws.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?Tt.shared:new Tt,e.autoStart&&this.start()}static destroy(){if(this._ticker){const e=this._ticker;this.ticker=null,e.destroy()}}}hw.extension=oe.Application;me.add(hw);const dw=[];me.handleByList(oe.Renderer,dw);function v5(t){for(const e of dw)if(e.test(t))return new e(t);throw new Error("Unable to auto-detect a suitable renderer.")}var x5=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,_5=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;const T5=x5,fw=_5;class pw{constructor(e){this.renderer=e}contextChange(e){let r;if(this.renderer.context.webGLVersion===1){const n=e.getParameter(e.FRAMEBUFFER_BINDING);e.bindFramebuffer(e.FRAMEBUFFER,null),r=e.getParameter(e.SAMPLES),e.bindFramebuffer(e.FRAMEBUFFER,n)}else{const n=e.getParameter(e.DRAW_FRAMEBUFFER_BINDING);e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),r=e.getParameter(e.SAMPLES),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,n)}r>=wt.HIGH?this.multisample=wt.HIGH:r>=wt.MEDIUM?this.multisample=wt.MEDIUM:r>=wt.LOW?this.multisample=wt.LOW:this.multisample=wt.NONE}destroy(){}}pw.extension={type:oe.RendererSystem,name:"_multisample"};me.add(pw);class b5{constructor(e){this.buffer=e||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}}class mw{constructor(e){this.renderer=e,this.managedBuffers={},this.boundBufferBases={}}destroy(){this.renderer=null}contextChange(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID}bind(e){const{gl:r,CONTEXT_UID:n}=this,i=e._glBuffers[n]||this.createGLBuffer(e);r.bindBuffer(e.type,i.buffer)}unbind(e){const{gl:r}=this;r.bindBuffer(e,null)}bindBufferBase(e,r){const{gl:n,CONTEXT_UID:i}=this;if(this.boundBufferBases[r]!==e){const s=e._glBuffers[i]||this.createGLBuffer(e);this.boundBufferBases[r]=e,n.bindBufferBase(n.UNIFORM_BUFFER,r,s.buffer)}}bindBufferRange(e,r,n){const{gl:i,CONTEXT_UID:s}=this;n=n||0;const o=e._glBuffers[s]||this.createGLBuffer(e);i.bindBufferRange(i.UNIFORM_BUFFER,r||0,o.buffer,n*256,256)}update(e){const{gl:r,CONTEXT_UID:n}=this,i=e._glBuffers[n]||this.createGLBuffer(e);if(e._updateID!==i.updateID)if(i.updateID=e._updateID,r.bindBuffer(e.type,i.buffer),i.byteLength>=e.data.byteLength)r.bufferSubData(e.type,0,e.data);else{const s=e.static?r.STATIC_DRAW:r.DYNAMIC_DRAW;i.byteLength=e.data.byteLength,r.bufferData(e.type,e.data,s)}}dispose(e,r){if(!this.managedBuffers[e.id])return;delete this.managedBuffers[e.id];const n=e._glBuffers[this.CONTEXT_UID],i=this.gl;e.disposeRunner.remove(this),n&&(r||i.deleteBuffer(n.buffer),delete e._glBuffers[this.CONTEXT_UID])}disposeAll(e){const r=Object.keys(this.managedBuffers);for(let n=0;n<r.length;n++)this.dispose(this.managedBuffers[r[n]],e)}createGLBuffer(e){const{CONTEXT_UID:r,gl:n}=this;return e._glBuffers[r]=new b5(n.createBuffer()),this.managedBuffers[e.id]=e,e.disposeRunner.add(this),e._glBuffers[r]}}mw.extension={type:oe.RendererSystem,name:"buffer"};me.add(mw);class gw{constructor(e){this.renderer=e}render(e,r){const n=this.renderer;let i,s,o,u;if(r&&(i=r.renderTexture,s=r.clear,o=r.transform,u=r.skipUpdateTransform),this.renderingToScreen=!i,n.runners.prerender.emit(),n.emit("prerender"),n.projection.transform=o,!n.context.isLost){if(i||(this.lastObjectRendered=e),!u){const c=e.enableTempParent();e.updateTransform(),e.disableTempParent(c)}n.renderTexture.bind(i),n.batch.currentRenderer.start(),(s!=null?s:n.background.clearBeforeRender)&&n.renderTexture.clear(),e.render(n),n.batch.currentRenderer.flush(),i&&(r.blit&&n.framebuffer.blit(),i.baseTexture.update()),n.runners.postrender.emit(),n.projection.transform=null,n.emit("postrender")}}destroy(){this.renderer=null,this.lastObjectRendered=null}}gw.extension={type:oe.RendererSystem,name:"objectRenderer"};me.add(gw);const Ug=class extends g5{constructor(t){super(),this.type=wb.WEBGL,t=Object.assign({},ee.RENDER_OPTIONS,t),this.gl=null,this.CONTEXT_UID=0,this.globalUniforms=new Mn({projectionMatrix:new it},!0);const e={runners:["init","destroy","contextChange","resolutionChange","reset","update","postrender","prerender","resize"],systems:Ug.__systems,priority:["_view","textureGenerator","background","_plugin","startup","context","state","texture","buffer","geometry","framebuffer","transformFeedback","mask","scissor","stencil","projection","textureGC","filter","renderTexture","batch","objectRenderer","_multisample"]};this.setup(e),"useContextAlpha"in t&&(Ae("7.0.0","options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"),t.premultipliedAlpha=t.useContextAlpha&&t.useContextAlpha!=="notMultiplied",t.backgroundAlpha=t.useContextAlpha===!1?1:t.backgroundAlpha),this._plugin.rendererPlugins=Ug.__plugins,this.options=t,this.startup.run(this.options)}static test(t){return t!=null&&t.forceCanvas?!1:KA()}render(t,e){this.objectRenderer.render(t,e)}resize(t,e){this._view.resizeView(t,e)}reset(){return this.runners.reset.emit(),this}clear(){this.renderTexture.bind(),this.renderTexture.clear()}destroy(t=!1){this.runners.destroy.items.reverse(),this.emitWithCustomOptions(this.runners.destroy,{_view:t}),super.destroy()}get plugins(){return this._plugin.plugins}get multisample(){return this._multisample.multisample}get width(){return this._view.element.width}get height(){return this._view.element.height}get resolution(){return this._view.resolution}set resolution(t){this._view.resolution=t,this.runners.resolutionChange.emit(t)}get autoDensity(){return this._view.autoDensity}get view(){return this._view.element}get screen(){return this._view.screen}get lastObjectRendered(){return this.objectRenderer.lastObjectRendered}get renderingToScreen(){return this.objectRenderer.renderingToScreen}get rendererLogId(){return`WebGL ${this.context.webGLVersion}`}get clearBeforeRender(){return Ae("7.0.0","renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."),this.background.clearBeforeRender}get useContextAlpha(){return Ae("7.0.0","renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."),this.context.useContextAlpha}get preserveDrawingBuffer(){return Ae("7.0.0","renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"),this.context.preserveDrawingBuffer}get backgroundColor(){return Ae("7.0.0","renderer.backgroundColor has been deprecated, use renderer.background.color instead."),this.background.color}set backgroundColor(t){Ae("7.0.0","renderer.backgroundColor has been deprecated, use renderer.background.color instead."),this.background.color=t}get backgroundAlpha(){return Ae("7.0.0","renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."),this.background.alpha}set backgroundAlpha(t){Ae("7.0.0","renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."),this.background.alpha=t}get powerPreference(){return Ae("7.0.0","renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"),this.context.powerPreference}generateTexture(t,e){return this.textureGenerator.generateTexture(t,e)}};let As=Ug;As.extension={type:oe.Renderer,priority:1};As.__plugins={};As.__systems={};me.handleByMap(oe.RendererPlugin,As.__plugins);me.handleByMap(oe.RendererSystem,As.__systems);me.add(As);class yw extends au{constructor(e,r){const{width:n,height:i}=r||{};super(n,i),this.items=[],this.itemDirtyIds=[];for(let s=0;s<e;s++){const o=new be;this.items.push(o),this.itemDirtyIds.push(-2)}this.length=e,this._load=null,this.baseTexture=null}initFromArray(e,r){for(let n=0;n<this.length;n++)!e[n]||(e[n].castToBaseTexture?this.addBaseTextureAt(e[n].castToBaseTexture(),n):e[n]instanceof au?this.addResourceAt(e[n],n):this.addResourceAt(Ob(e[n],r),n))}dispose(){for(let e=0,r=this.length;e<r;e++)this.items[e].destroy();this.items=null,this.itemDirtyIds=null,this._load=null}addResourceAt(e,r){if(!this.items[r])throw new Error(`Index ${r} is out of bounds`);return e.valid&&!this.valid&&this.resize(e.width,e.height),this.items[r].setResource(e),this}bind(e){if(this.baseTexture!==null)throw new Error("Only one base texture per TextureArray is allowed");super.bind(e);for(let r=0;r<this.length;r++)this.items[r].parentTextureArray=e,this.items[r].on("update",e.update,e)}unbind(e){super.unbind(e);for(let r=0;r<this.length;r++)this.items[r].parentTextureArray=null,this.items[r].off("update",e.update,e)}load(){if(this._load)return this._load;const r=this.items.map(n=>n.resource).filter(n=>n).map(n=>n.load());return this._load=Promise.all(r).then(()=>{const{realWidth:n,realHeight:i}=this.items[0];return this.resize(n,i),Promise.resolve(this)}),this._load}}class w5 extends yw{constructor(e,r){const{width:n,height:i}=r||{};let s,o;Array.isArray(e)?(s=e,o=e.length):o=e,super(o,{width:n,height:i}),s&&this.initFromArray(s,r)}addBaseTextureAt(e,r){if(e.resource)this.addResourceAt(e.resource,r);else throw new Error("ArrayResource does not support RenderTexture");return this}bind(e){super.bind(e),e.target=fa.TEXTURE_2D_ARRAY}upload(e,r,n){const{length:i,itemDirtyIds:s,items:o}=this,{gl:u}=e;n.dirtyId<0&&u.texImage3D(u.TEXTURE_2D_ARRAY,0,n.internalFormat,this._width,this._height,i,0,r.format,n.type,null);for(let c=0;c<i;c++){const h=o[c];s[c]<h.dirtyId&&(s[c]=h.dirtyId,h.valid&&u.texSubImage3D(u.TEXTURE_2D_ARRAY,0,0,0,c,h.resource.width,h.resource.height,1,r.format,n.type,h.resource.source))}return!0}}class S5 extends bs{constructor(e){super(e)}static test(e){const{OffscreenCanvas:r}=globalThis;return r&&e instanceof r?!0:globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement}}const bl=class extends yw{constructor(t,e){const{width:r,height:n,autoLoad:i,linkBaseTexture:s}=e||{};if(t&&t.length!==bl.SIDES)throw new Error(`Invalid length. Got ${t.length}, expected 6`);super(6,{width:r,height:n});for(let o=0;o<bl.SIDES;o++)this.items[o].target=fa.TEXTURE_CUBE_MAP_POSITIVE_X+o;this.linkBaseTexture=s!==!1,t&&this.initFromArray(t,e),i!==!1&&this.load()}bind(t){super.bind(t),t.target=fa.TEXTURE_CUBE_MAP}addBaseTextureAt(t,e,r){if(r===void 0&&(r=this.linkBaseTexture),!this.items[e])throw new Error(`Index ${e} is out of bounds`);if(!this.linkBaseTexture||t.parentTextureArray||Object.keys(t._glTextures).length>0)if(t.resource)this.addResourceAt(t.resource,e);else throw new Error("CubeResource does not support copying of renderTexture.");else t.target=fa.TEXTURE_CUBE_MAP_POSITIVE_X+e,t.parentTextureArray=this.baseTexture,this.items[e]=t;return t.valid&&!this.valid&&this.resize(t.realWidth,t.realHeight),this.items[e]=t,this}upload(t,e,r){const n=this.itemDirtyIds;for(let i=0;i<bl.SIDES;i++){const s=this.items[i];(n[i]<s.dirtyId||r.dirtyId<e.dirtyId)&&(s.valid&&s.resource?(s.resource.upload(t,s,r),n[i]=s.dirtyId):n[i]<-1&&(t.gl.texImage2D(s.target,0,r.internalFormat,e.realWidth,e.realHeight,0,e.format,r.type,null),n[i]=-1))}return!0}static test(t){return Array.isArray(t)&&t.length===bl.SIDES}};let vw=bl;vw.SIDES=6;class sa extends bs{constructor(e,r){var s;r=r||{};let n,i;typeof e=="string"?(n=sa.EMPTY,i=e):(n=e,i=null),super(n),this.url=i,this.crossOrigin=(s=r.crossOrigin)!=null?s:!0,this.alphaMode=typeof r.alphaMode=="number"?r.alphaMode:null,this._load=null,r.autoLoad!==!1&&this.load()}load(){return this._load?this._load:(this._load=new Promise(async(e,r)=>{if(this.url===null){e(this);return}try{const n=await ee.ADAPTER.fetch(this.url,{mode:this.crossOrigin?"cors":"no-cors"});if(this.destroyed)return;const i=await n.blob();if(this.destroyed)return;const s=await createImageBitmap(i,{premultiplyAlpha:this.alphaMode===null||this.alphaMode===Nn.UNPACK?"premultiply":"none"});if(this.destroyed)return;this.source=s,this.update(),e(this)}catch(n){if(this.destroyed)return;r(n),this.onError.emit(n)}}),this._load)}upload(e,r,n){return this.source instanceof ImageBitmap?(typeof this.alphaMode=="number"&&(r.alphaMode=this.alphaMode),super.upload(e,r,n)):(this.load(),!1)}dispose(){this.source instanceof ImageBitmap&&this.source.close(),super.dispose(),this._load=null}static test(e){return!!globalThis.createImageBitmap&&typeof ImageBitmap<"u"&&(typeof e=="string"||e instanceof ImageBitmap)}static get EMPTY(){var e;return sa._EMPTY=(e=sa._EMPTY)!=null?e:ee.ADAPTER.createCanvas(0,0),sa._EMPTY}}const _h=class extends bs{constructor(t,e){e=e||{},super(ee.ADAPTER.createCanvas()),this._width=0,this._height=0,this.svg=t,this.scale=e.scale||1,this._overrideWidth=e.width,this._overrideHeight=e.height,this._resolve=null,this._crossorigin=e.crossorigin,this._load=null,e.autoLoad!==!1&&this.load()}load(){return this._load?this._load:(this._load=new Promise(t=>{if(this._resolve=()=>{this.resize(this.source.width,this.source.height),t(this)},_h.SVG_XML.test(this.svg.trim())){if(!btoa)throw new Error("Your browser doesn't support base64 conversions.");this.svg=`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`}this._loadSvg()}),this._load)}_loadSvg(){const t=new Image;bs.crossOrigin(t,this.svg,this._crossorigin),t.src=this.svg,t.onerror=e=>{!this._resolve||(t.onerror=null,this.onError.emit(e))},t.onload=()=>{if(!this._resolve)return;const e=t.width,r=t.height;if(!e||!r)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");let n=e*this.scale,i=r*this.scale;(this._overrideWidth||this._overrideHeight)&&(n=this._overrideWidth||this._overrideHeight/r*e,i=this._overrideHeight||this._overrideWidth/e*r),n=Math.round(n),i=Math.round(i);const s=this.source;s.width=n,s.height=i,s._pixiId=`canvas_${uo()}`,s.getContext("2d").drawImage(t,0,0,e,r,0,0,n,i),this._resolve(),this._resolve=null}}static getSize(t){const e=_h.SVG_SIZE.exec(t),r={};return e&&(r[e[1]]=Math.round(parseFloat(e[3])),r[e[5]]=Math.round(parseFloat(e[7]))),r}dispose(){super.dispose(),this._resolve=null,this._crossorigin=null}static test(t,e){return e==="svg"||typeof t=="string"&&t.startsWith("data:image/svg+xml")||typeof t=="string"&&_h.SVG_XML.test(t)}};let uu=_h;uu.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m;uu.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;const zg=class extends bs{constructor(t,e){if(e=e||{},!(t instanceof HTMLVideoElement)){const r=document.createElement("video");r.setAttribute("preload","auto"),r.setAttribute("webkit-playsinline",""),r.setAttribute("playsinline",""),typeof t=="string"&&(t=[t]);const n=t[0].src||t[0];bs.crossOrigin(r,n,e.crossorigin);for(let i=0;i<t.length;++i){const s=document.createElement("source");let{src:o,mime:u}=t[i];o=o||t[i];const c=o.split("?").shift().toLowerCase(),h=c.slice(c.lastIndexOf(".")+1);u=u||zg.MIME_TYPES[h]||`video/${h}`,s.src=o,s.type=u,r.appendChild(s)}t=r}super(t),this.noSubImage=!0,this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=e.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=e.autoPlay!==!1,this._load=null,this._resolve=null,this._onCanPlay=this._onCanPlay.bind(this),this._onError=this._onError.bind(this),e.autoLoad!==!1&&this.load()}update(t=0){if(!this.destroyed){const e=Tt.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-e),(!this._updateFPS||this._msToNextUpdate<=0)&&(super.update(),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}}load(){if(this._load)return this._load;const t=this.source;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart.bind(this)),t.addEventListener("pause",this._onPlayStop.bind(this)),this._isSourceReady()?this._onCanPlay():(t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlay),t.addEventListener("error",this._onError,!0)),this._load=new Promise(e=>{this.valid?e(this):(this._resolve=e,t.load())}),this._load}_onError(t){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(t)}_isSourcePlaying(){const t=this.source;return!t.paused&&!t.ended&&this._isSourceReady()}_isSourceReady(){return this.source.readyState>2}_onPlayStart(){this.valid||this._onCanPlay(),this.autoUpdate&&!this._isConnectedToTicker&&(Tt.shared.add(this.update,this),this._isConnectedToTicker=!0)}_onPlayStop(){this._isConnectedToTicker&&(Tt.shared.remove(this.update,this),this._isConnectedToTicker=!1)}_onCanPlay(){const t=this.source;t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlay);const e=this.valid;this.resize(t.videoWidth,t.videoHeight),!e&&this._resolve&&(this._resolve(this),this._resolve=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&t.play()}dispose(){this._isConnectedToTicker&&(Tt.shared.remove(this.update,this),this._isConnectedToTicker=!1);const t=this.source;t&&(t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.dispose()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(Tt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._isSourcePlaying()&&(Tt.shared.add(this.update,this),this._isConnectedToTicker=!0))}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t)}static test(t,e){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||zg.TYPES.includes(e)}};let dy=zg;dy.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"];dy.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};Dg.push(sa,Vb,S5,dy,uu,Tu,vw,w5);class rd{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}clear(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}getRectangle(e){return this.minX>this.maxX||this.minY>this.maxY?Ee.EMPTY:(e=e||new Ee(0,0,1,1),e.x=this.minX,e.y=this.minY,e.width=this.maxX-this.minX,e.height=this.maxY-this.minY,e)}addPoint(e){this.minX=Math.min(this.minX,e.x),this.maxX=Math.max(this.maxX,e.x),this.minY=Math.min(this.minY,e.y),this.maxY=Math.max(this.maxY,e.y)}addPointMatrix(e,r){const{a:n,b:i,c:s,d:o,tx:u,ty:c}=e,h=n*r.x+s*r.y+u,f=i*r.x+o*r.y+c;this.minX=Math.min(this.minX,h),this.maxX=Math.max(this.maxX,h),this.minY=Math.min(this.minY,f),this.maxY=Math.max(this.maxY,f)}addQuad(e){let r=this.minX,n=this.minY,i=this.maxX,s=this.maxY,o=e[0],u=e[1];r=o<r?o:r,n=u<n?u:n,i=o>i?o:i,s=u>s?u:s,o=e[2],u=e[3],r=o<r?o:r,n=u<n?u:n,i=o>i?o:i,s=u>s?u:s,o=e[4],u=e[5],r=o<r?o:r,n=u<n?u:n,i=o>i?o:i,s=u>s?u:s,o=e[6],u=e[7],r=o<r?o:r,n=u<n?u:n,i=o>i?o:i,s=u>s?u:s,this.minX=r,this.minY=n,this.maxX=i,this.maxY=s}addFrame(e,r,n,i,s){this.addFrameMatrix(e.worldTransform,r,n,i,s)}addFrameMatrix(e,r,n,i,s){const o=e.a,u=e.b,c=e.c,h=e.d,f=e.tx,p=e.ty;let g=this.minX,v=this.minY,x=this.maxX,S=this.maxY,E=o*r+c*n+f,w=u*r+h*n+p;g=E<g?E:g,v=w<v?w:v,x=E>x?E:x,S=w>S?w:S,E=o*i+c*n+f,w=u*i+h*n+p,g=E<g?E:g,v=w<v?w:v,x=E>x?E:x,S=w>S?w:S,E=o*r+c*s+f,w=u*r+h*s+p,g=E<g?E:g,v=w<v?w:v,x=E>x?E:x,S=w>S?w:S,E=o*i+c*s+f,w=u*i+h*s+p,g=E<g?E:g,v=w<v?w:v,x=E>x?E:x,S=w>S?w:S,this.minX=g,this.minY=v,this.maxX=x,this.maxY=S}addVertexData(e,r,n){let i=this.minX,s=this.minY,o=this.maxX,u=this.maxY;for(let c=r;c<n;c+=2){const h=e[c],f=e[c+1];i=h<i?h:i,s=f<s?f:s,o=h>o?h:o,u=f>u?f:u}this.minX=i,this.minY=s,this.maxX=o,this.maxY=u}addVertices(e,r,n,i){this.addVerticesMatrix(e.worldTransform,r,n,i)}addVerticesMatrix(e,r,n,i,s=0,o=s){const u=e.a,c=e.b,h=e.c,f=e.d,p=e.tx,g=e.ty;let v=this.minX,x=this.minY,S=this.maxX,E=this.maxY;for(let w=n;w<i;w+=2){const b=r[w],T=r[w+1],A=u*b+h*T+p,P=f*T+c*b+g;v=Math.min(v,A-s),S=Math.max(S,A+s),x=Math.min(x,P-o),E=Math.max(E,P+o)}this.minX=v,this.minY=x,this.maxX=S,this.maxY=E}addBounds(e){const r=this.minX,n=this.minY,i=this.maxX,s=this.maxY;this.minX=e.minX<r?e.minX:r,this.minY=e.minY<n?e.minY:n,this.maxX=e.maxX>i?e.maxX:i,this.maxY=e.maxY>s?e.maxY:s}addBoundsMask(e,r){const n=e.minX>r.minX?e.minX:r.minX,i=e.minY>r.minY?e.minY:r.minY,s=e.maxX<r.maxX?e.maxX:r.maxX,o=e.maxY<r.maxY?e.maxY:r.maxY;if(n<=s&&i<=o){const u=this.minX,c=this.minY,h=this.maxX,f=this.maxY;this.minX=n<u?n:u,this.minY=i<c?i:c,this.maxX=s>h?s:h,this.maxY=o>f?o:f}}addBoundsMatrix(e,r){this.addFrameMatrix(r,e.minX,e.minY,e.maxX,e.maxY)}addBoundsArea(e,r){const n=e.minX>r.x?e.minX:r.x,i=e.minY>r.y?e.minY:r.y,s=e.maxX<r.x+r.width?e.maxX:r.x+r.width,o=e.maxY<r.y+r.height?e.maxY:r.y+r.height;if(n<=s&&i<=o){const u=this.minX,c=this.minY,h=this.maxX,f=this.maxY;this.minX=n<u?n:u,this.minY=i<c?i:c,this.maxX=s>h?s:h,this.maxY=o>f?o:f}}pad(e=0,r=e){this.isEmpty()||(this.minX-=e,this.maxX+=e,this.minY-=r,this.maxY+=r)}addFramePad(e,r,n,i,s,o){e-=s,r-=o,n+=s,i+=o,this.minX=this.minX<e?this.minX:e,this.maxX=this.maxX>n?this.maxX:n,this.minY=this.minY<r?this.minY:r,this.maxY=this.maxY>i?this.maxY:i}}class Ke extends Ma{constructor(){super(),this.tempDisplayObjectParent=null,this.transform=new Bd,this.alpha=1,this.visible=!0,this.renderable=!0,this.cullable=!1,this.cullArea=null,this.parent=null,this.worldAlpha=1,this._lastSortedIndex=0,this._zIndex=0,this.filterArea=null,this.filters=null,this._enabledFilters=null,this._bounds=new rd,this._localBounds=null,this._boundsID=0,this._boundsRect=null,this._localBoundsRect=null,this._mask=null,this._maskRefCount=0,this._destroyed=!1,this.isSprite=!1,this.isMask=!1}static mixin(e){const r=Object.keys(e);for(let n=0;n<r.length;++n){const i=r[n];Object.defineProperty(Ke.prototype,i,Object.getOwnPropertyDescriptor(e,i))}}get destroyed(){return this._destroyed}_recursivePostUpdateTransform(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)}updateTransform(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha}getBounds(e,r){return e||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),r||(this._boundsRect||(this._boundsRect=new Ee),r=this._boundsRect),this._bounds.getRectangle(r)}getLocalBounds(e){e||(this._localBoundsRect||(this._localBoundsRect=new Ee),e=this._localBoundsRect),this._localBounds||(this._localBounds=new rd);const r=this.transform,n=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform;const i=this._bounds,s=this._boundsID;this._bounds=this._localBounds;const o=this.getBounds(!1,e);return this.parent=n,this.transform=r,this._bounds=i,this._bounds.updateID+=this._boundsID-s,o}toGlobal(e,r,n=!1){return n||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(e,r)}toLocal(e,r,n,i){return r&&(e=r.toGlobal(e,n,i)),i||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(e,n)}setParent(e){if(!e||!e.addChild)throw new Error("setParent: Argument must be a Container");return e.addChild(this),e}removeFromParent(){var e;(e=this.parent)==null||e.removeChild(this)}setTransform(e=0,r=0,n=1,i=1,s=0,o=0,u=0,c=0,h=0){return this.position.x=e,this.position.y=r,this.scale.x=n||1,this.scale.y=i||1,this.rotation=s,this.skew.x=o,this.skew.y=u,this.pivot.x=c,this.pivot.y=h,this}destroy(e){this.removeFromParent(),this._destroyed=!0,this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.cullArea=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.eventMode="auto",this.interactiveChildren=!1,this.emit("destroyed"),this.removeAllListeners()}get _tempDisplayObjectParent(){return this.tempDisplayObjectParent===null&&(this.tempDisplayObjectParent=new E5),this.tempDisplayObjectParent}enableTempParent(){const e=this.parent;return this.parent=this._tempDisplayObjectParent,e}disableTempParent(e){this.parent=e}get x(){return this.position.x}set x(e){this.transform.position.x=e}get y(){return this.position.y}set y(e){this.transform.position.y=e}get worldTransform(){return this.transform.worldTransform}get localTransform(){return this.transform.localTransform}get position(){return this.transform.position}set position(e){this.transform.position.copyFrom(e)}get scale(){return this.transform.scale}set scale(e){this.transform.scale.copyFrom(e)}get pivot(){return this.transform.pivot}set pivot(e){this.transform.pivot.copyFrom(e)}get skew(){return this.transform.skew}set skew(e){this.transform.skew.copyFrom(e)}get rotation(){return this.transform.rotation}set rotation(e){this.transform.rotation=e}get angle(){return this.transform.rotation*bP}set angle(e){this.transform.rotation=e*lu}get zIndex(){return this._zIndex}set zIndex(e){this._zIndex=e,this.parent&&(this.parent.sortDirty=!0)}get worldVisible(){let e=this;do{if(!e.visible)return!1;e=e.parent}while(e);return!0}get mask(){return this._mask}set mask(e){if(this._mask!==e){if(this._mask){const r=this._mask.isMaskData?this._mask.maskObject:this._mask;r&&(r._maskRefCount--,r._maskRefCount===0&&(r.renderable=!0,r.isMask=!1))}if(this._mask=e,this._mask){const r=this._mask.isMaskData?this._mask.maskObject:this._mask;r&&(r._maskRefCount===0&&(r.renderable=!1,r.isMask=!0),r._maskRefCount++)}}}}class E5 extends Ke{constructor(){super(...arguments),this.sortDirty=null}}Ke.prototype.displayObjectUpdateTransform=Ke.prototype.updateTransform;const C5=new it;function A5(t,e){return t.zIndex===e.zIndex?t._lastSortedIndex-e._lastSortedIndex:t.zIndex-e.zIndex}const Gg=class extends Ke{constructor(){super(),this.children=[],this.sortableChildren=Gg.defaultSortableChildren,this.sortDirty=!1}onChildrenChange(t){}addChild(...t){if(t.length>1)for(let e=0;e<t.length;e++)this.addChild(t[e]);else{const e=t[0];e.parent&&e.parent.removeChild(e),e.parent=this,this.sortDirty=!0,e.transform._parentID=-1,this.children.push(e),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",e,this,this.children.length-1),e.emit("added",this)}return t[0]}addChildAt(t,e){if(e<0||e>this.children.length)throw new Error(`${t}addChildAt: The index ${e} supplied is out of bounds ${this.children.length}`);return t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1,this.children.splice(e,0,t),this._boundsID++,this.onChildrenChange(e),t.emit("added",this),this.emit("childAdded",t,this,e),t}swapChildren(t,e){if(t===e)return;const r=this.getChildIndex(t),n=this.getChildIndex(e);this.children[r]=e,this.children[n]=t,this.onChildrenChange(r<n?r:n)}getChildIndex(t){const e=this.children.indexOf(t);if(e===-1)throw new Error("The supplied DisplayObject must be a child of the caller");return e}setChildIndex(t,e){if(e<0||e>=this.children.length)throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);const r=this.getChildIndex(t);ga(this.children,r,1),this.children.splice(e,0,t),this.onChildrenChange(e)}getChildAt(t){if(t<0||t>=this.children.length)throw new Error(`getChildAt: Index (${t}) does not exist.`);return this.children[t]}removeChild(...t){if(t.length>1)for(let e=0;e<t.length;e++)this.removeChild(t[e]);else{const e=t[0],r=this.children.indexOf(e);if(r===-1)return null;e.parent=null,e.transform._parentID=-1,ga(this.children,r,1),this._boundsID++,this.onChildrenChange(r),e.emit("removed",this),this.emit("childRemoved",e,this,r)}return t[0]}removeChildAt(t){const e=this.getChildAt(t);return e.parent=null,e.transform._parentID=-1,ga(this.children,t,1),this._boundsID++,this.onChildrenChange(t),e.emit("removed",this),this.emit("childRemoved",e,this,t),e}removeChildren(t=0,e=this.children.length){const r=t,n=e,i=n-r;let s;if(i>0&&i<=n){s=this.children.splice(r,i);for(let o=0;o<s.length;++o)s[o].parent=null,s[o].transform&&(s[o].transform._parentID=-1);this._boundsID++,this.onChildrenChange(t);for(let o=0;o<s.length;++o)s[o].emit("removed",this),this.emit("childRemoved",s[o],this,o);return s}else if(i===0&&this.children.length===0)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")}sortChildren(){let t=!1;for(let e=0,r=this.children.length;e<r;++e){const n=this.children[e];n._lastSortedIndex=e,!t&&n.zIndex!==0&&(t=!0)}t&&this.children.length>1&&this.children.sort(A5),this.sortDirty=!1}updateTransform(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(let t=0,e=this.children.length;t<e;++t){const r=this.children[t];r.visible&&r.updateTransform()}}calculateBounds(){this._bounds.clear(),this._calculateBounds();for(let t=0;t<this.children.length;t++){const e=this.children[t];if(!(!e.visible||!e.renderable))if(e.calculateBounds(),e._mask){const r=e._mask.isMaskData?e._mask.maskObject:e._mask;r?(r.calculateBounds(),this._bounds.addBoundsMask(e._bounds,r._bounds)):this._bounds.addBounds(e._bounds)}else e.filterArea?this._bounds.addBoundsArea(e._bounds,e.filterArea):this._bounds.addBounds(e._bounds)}this._bounds.updateID=this._boundsID}getLocalBounds(t,e=!1){const r=super.getLocalBounds(t);if(!e)for(let n=0,i=this.children.length;n<i;++n){const s=this.children[n];s.visible&&s.updateTransform()}return r}_calculateBounds(){}_renderWithCulling(t){const e=t.renderTexture.sourceFrame;if(!(e.width>0&&e.height>0))return;let r,n;this.cullArea?(r=this.cullArea,n=this.worldTransform):this._render!==Gg.prototype._render&&(r=this.getBounds(!0));const i=t.projection.transform;if(i&&(n?(n=C5.copyFrom(n),n.prepend(i)):n=i),r&&e.intersects(r,n))this._render(t);else if(this.cullArea)return;for(let s=0,o=this.children.length;s<o;++s){const u=this.children[s],c=u.cullable;u.cullable=c||!this.cullArea,u.render(t),u.cullable=c}}render(t){var e;if(!(!this.visible||this.worldAlpha<=0||!this.renderable))if(this._mask||((e=this.filters)==null?void 0:e.length))this.renderAdvanced(t);else if(this.cullable)this._renderWithCulling(t);else{this._render(t);for(let r=0,n=this.children.length;r<n;++r)this.children[r].render(t)}}renderAdvanced(t){var i,s,o;const e=this.filters,r=this._mask;if(e){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(let u=0;u<e.length;u++)e[u].enabled&&this._enabledFilters.push(e[u])}const n=e&&((i=this._enabledFilters)==null?void 0:i.length)||r&&(!r.isMaskData||r.enabled&&(r.autoDetect||r.type!==At.NONE));if(n&&t.batch.flush(),e&&((s=this._enabledFilters)==null?void 0:s.length)&&t.filter.push(this,this._enabledFilters),r&&t.mask.push(this,this._mask),this.cullable)this._renderWithCulling(t);else{this._render(t);for(let u=0,c=this.children.length;u<c;++u)this.children[u].render(t)}n&&t.batch.flush(),r&&t.mask.pop(this),e&&((o=this._enabledFilters)==null?void 0:o.length)&&t.filter.pop()}_render(t){}destroy(t){super.destroy(),this.sortDirty=!1;const e=typeof t=="boolean"?t:t==null?void 0:t.children,r=this.removeChildren(0,this.children.length);if(e)for(let n=0;n<r.length;++n)r[n].destroy(t)}get width(){return this.scale.x*this.getLocalBounds().width}set width(t){const e=this.getLocalBounds().width;e!==0?this.scale.x=t/e:this.scale.x=1,this._width=t}get height(){return this.scale.y*this.getLocalBounds().height}set height(t){const e=this.getLocalBounds().height;e!==0?this.scale.y=t/e:this.scale.y=1,this._height=t}};let je=Gg;je.defaultSortableChildren=!1;je.prototype.containerUpdateTransform=je.prototype.updateTransform;Object.defineProperties(ee,{SORTABLE_CHILDREN:{get(){return je.defaultSortableChildren},set(t){Ae("7.1.0","settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"),je.defaultSortableChildren=t}}});var $d=(t=>(t[t.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",t[t.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL",t))($d||{});const fl=new we,P5=new Uint16Array([0,1,2,0,2,3]);class Je extends je{constructor(e){super(),this._anchor=new Jn(this._onAnchorUpdate,this,e?e.defaultAnchor.x:0,e?e.defaultAnchor.y:0),this._texture=null,this._width=0,this._height=0,this._tintColor=new Ge(16777215),this._tintRGB=null,this.tint=16777215,this.blendMode=pe.NORMAL,this._cachedTint=16777215,this.uvs=null,this.texture=e||te.EMPTY,this.vertexData=new Float32Array(8),this.vertexTrimmedData=null,this._transformID=-1,this._textureID=-1,this._transformTrimmedID=-1,this._textureTrimmedID=-1,this.indices=P5,this.pluginName="batch",this.isSprite=!0,this._roundPixels=ee.ROUND_PIXELS}_onTextureUpdate(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=ls(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=ls(this.scale.y)*this._height/this._texture.orig.height)}_onAnchorUpdate(){this._transformID=-1,this._transformTrimmedID=-1}calculateVertices(){const e=this._texture;if(this._transformID===this.transform._worldID&&this._textureID===e._updateID)return;this._textureID!==e._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=e._updateID;const r=this.transform.worldTransform,n=r.a,i=r.b,s=r.c,o=r.d,u=r.tx,c=r.ty,h=this.vertexData,f=e.trim,p=e.orig,g=this._anchor;let v=0,x=0,S=0,E=0;if(f?(x=f.x-g._x*p.width,v=x+f.width,E=f.y-g._y*p.height,S=E+f.height):(x=-g._x*p.width,v=x+p.width,E=-g._y*p.height,S=E+p.height),h[0]=n*x+s*E+u,h[1]=o*E+i*x+c,h[2]=n*v+s*E+u,h[3]=o*E+i*v+c,h[4]=n*v+s*S+u,h[5]=o*S+i*v+c,h[6]=n*x+s*S+u,h[7]=o*S+i*x+c,this._roundPixels){const w=ee.RESOLUTION;for(let b=0;b<h.length;++b)h[b]=Math.round(h[b]*w)/w}}calculateTrimmedVertices(){if(!this.vertexTrimmedData)this.vertexTrimmedData=new Float32Array(8);else if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return;this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;const e=this._texture,r=this.vertexTrimmedData,n=e.orig,i=this._anchor,s=this.transform.worldTransform,o=s.a,u=s.b,c=s.c,h=s.d,f=s.tx,p=s.ty,g=-i._x*n.width,v=g+n.width,x=-i._y*n.height,S=x+n.height;r[0]=o*g+c*x+f,r[1]=h*x+u*g+p,r[2]=o*v+c*x+f,r[3]=h*x+u*v+p,r[4]=o*v+c*S+f,r[5]=h*S+u*v+p,r[6]=o*g+c*S+f,r[7]=h*S+u*g+p}_render(e){this.calculateVertices(),e.batch.setObjectRenderer(e.plugins[this.pluginName]),e.plugins[this.pluginName].render(this)}_calculateBounds(){const e=this._texture.trim,r=this._texture.orig;!e||e.width===r.width&&e.height===r.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))}getLocalBounds(e){return this.children.length===0?(this._localBounds||(this._localBounds=new rd),this._localBounds.minX=this._texture.orig.width*-this._anchor._x,this._localBounds.minY=this._texture.orig.height*-this._anchor._y,this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),e||(this._localBoundsRect||(this._localBoundsRect=new Ee),e=this._localBoundsRect),this._localBounds.getRectangle(e)):super.getLocalBounds.call(this,e)}containsPoint(e){this.worldTransform.applyInverse(e,fl);const r=this._texture.orig.width,n=this._texture.orig.height,i=-r*this.anchor.x;let s=0;return fl.x>=i&&fl.x<i+r&&(s=-n*this.anchor.y,fl.y>=s&&fl.y<s+n)}destroy(e){if(super.destroy(e),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null,typeof e=="boolean"?e:e==null?void 0:e.texture){const n=typeof e=="boolean"?e:e==null?void 0:e.baseTexture;this._texture.destroy(!!n)}this._texture=null}static from(e,r){const n=e instanceof te?e:te.from(e,r);return new Je(n)}set roundPixels(e){this._roundPixels!==e&&(this._transformID=-1),this._roundPixels=e}get roundPixels(){return this._roundPixels}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(e){const r=ls(this.scale.x)||1;this.scale.x=r*e/this._texture.orig.width,this._width=e}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(e){const r=ls(this.scale.y)||1;this.scale.y=r*e/this._texture.orig.height,this._height=e}get anchor(){return this._anchor}set anchor(e){this._anchor.copyFrom(e)}get tint(){return this._tintColor.value}set tint(e){this._tintColor.setValue(e),this._tintRGB=this._tintColor.toLittleEndianNumber()}get tintValue(){return this._tintColor.toNumber()}get texture(){return this._texture}set texture(e){this._texture!==e&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=e||te.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,e&&(e.baseTexture.valid?this._onTextureUpdate():e.once("update",this._onTextureUpdate,this)))}}const $c={willReadFrequently:!0},he=class{static get experimentalLetterSpacingSupported(){let t=he._experimentalLetterSpacingSupported;if(t!==void 0){const e=ee.ADAPTER.getCanvasRenderingContext2D().prototype;t=he._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e}return t}constructor(t,e,r,n,i,s,o,u,c){this.text=t,this.style=e,this.width=r,this.height=n,this.lines=i,this.lineWidths=s,this.lineHeight=o,this.maxLineWidth=u,this.fontProperties=c}static measureText(t,e,r,n=he._canvas){r=r==null?e.wordWrap:r;const i=e.toFontString(),s=he.measureFont(i);s.fontSize===0&&(s.fontSize=e.fontSize,s.ascent=e.fontSize);const o=n.getContext("2d",$c);o.font=i;const c=(r?he.wordWrap(t,e,n):t).split(/(?:\r\n|\r|\n)/),h=new Array(c.length);let f=0;for(let x=0;x<c.length;x++){const S=he._measureText(c[x],e.letterSpacing,o);h[x]=S,f=Math.max(f,S)}let p=f+e.strokeThickness;e.dropShadow&&(p+=e.dropShadowDistance);const g=e.lineHeight||s.fontSize+e.strokeThickness;let v=Math.max(g,s.fontSize+e.strokeThickness*2)+(c.length-1)*(g+e.leading);return e.dropShadow&&(v+=e.dropShadowDistance),new he(t,e,p,v,c,h,g+e.leading,f,s)}static _measureText(t,e,r){let n=!1;he.experimentalLetterSpacingSupported&&(he.experimentalLetterSpacing?(r.letterSpacing=`${e}px`,r.textLetterSpacing=`${e}px`,n=!0):(r.letterSpacing="0px",r.textLetterSpacing="0px"));let i=r.measureText(t).width;return i>0&&(n?i-=e:i+=(he.graphemeSegmenter(t).length-1)*e),i}static wordWrap(t,e,r=he._canvas){const n=r.getContext("2d",$c);let i=0,s="",o="";const u=Object.create(null),{letterSpacing:c,whiteSpace:h}=e,f=he.collapseSpaces(h),p=he.collapseNewlines(h);let g=!f;const v=e.wordWrapWidth+c,x=he.tokenize(t);for(let S=0;S<x.length;S++){let E=x[S];if(he.isNewline(E)){if(!p){o+=he.addLine(s),g=!f,s="",i=0;continue}E=" "}if(f){const b=he.isBreakingSpace(E),T=he.isBreakingSpace(s[s.length-1]);if(b&&T)continue}const w=he.getFromCache(E,c,u,n);if(w>v)if(s!==""&&(o+=he.addLine(s),s="",i=0),he.canBreakWords(E,e.breakWords)){const b=he.wordWrapSplit(E);for(let T=0;T<b.length;T++){let A=b[T],P=A,O=1;for(;b[T+O];){const M=b[T+O];if(!he.canBreakChars(P,M,E,T,e.breakWords))A+=M;else break;P=M,O++}T+=O-1;const D=he.getFromCache(A,c,u,n);D+i>v&&(o+=he.addLine(s),g=!1,s="",i=0),s+=A,i+=D}}else{s.length>0&&(o+=he.addLine(s),s="",i=0);const b=S===x.length-1;o+=he.addLine(E,!b),g=!1,s="",i=0}else w+i>v&&(g=!1,o+=he.addLine(s),s="",i=0),(s.length>0||!he.isBreakingSpace(E)||g)&&(s+=E,i+=w)}return o+=he.addLine(s,!1),o}static addLine(t,e=!0){return t=he.trimRight(t),t=e?`${t}
`:t,t}static getFromCache(t,e,r,n){let i=r[t];return typeof i!="number"&&(i=he._measureText(t,e,n)+e,r[t]=i),i}static collapseSpaces(t){return t==="normal"||t==="pre-line"}static collapseNewlines(t){return t==="normal"}static trimRight(t){if(typeof t!="string")return"";for(let e=t.length-1;e>=0;e--){const r=t[e];if(!he.isBreakingSpace(r))break;t=t.slice(0,-1)}return t}static isNewline(t){return typeof t!="string"?!1:he._newlines.includes(t.charCodeAt(0))}static isBreakingSpace(t,e){return typeof t!="string"?!1:he._breakingSpaces.includes(t.charCodeAt(0))}static tokenize(t){const e=[];let r="";if(typeof t!="string")return e;for(let n=0;n<t.length;n++){const i=t[n],s=t[n+1];if(he.isBreakingSpace(i,s)||he.isNewline(i)){r!==""&&(e.push(r),r=""),e.push(i);continue}r+=i}return r!==""&&e.push(r),e}static canBreakWords(t,e){return e}static canBreakChars(t,e,r,n,i){return!0}static wordWrapSplit(t){return he.graphemeSegmenter(t)}static measureFont(t){if(he._fonts[t])return he._fonts[t];const e={ascent:0,descent:0,fontSize:0},r=he._canvas,n=he._context;n.font=t;const i=he.METRICS_STRING+he.BASELINE_SYMBOL,s=Math.ceil(n.measureText(i).width);let o=Math.ceil(n.measureText(he.BASELINE_SYMBOL).width);const u=Math.ceil(he.HEIGHT_MULTIPLIER*o);if(o=o*he.BASELINE_MULTIPLIER|0,s===0||u===0)return he._fonts[t]=e,e;r.width=s,r.height=u,n.fillStyle="#f00",n.fillRect(0,0,s,u),n.font=t,n.textBaseline="alphabetic",n.fillStyle="#000",n.fillText(i,0,o);const c=n.getImageData(0,0,s,u).data,h=c.length,f=s*4;let p=0,g=0,v=!1;for(p=0;p<o;++p){for(let x=0;x<f;x+=4)if(c[g+x]!==255){v=!0;break}if(!v)g+=f;else break}for(e.ascent=o-p,g=h-f,v=!1,p=u;p>o;--p){for(let x=0;x<f;x+=4)if(c[g+x]!==255){v=!0;break}if(!v)g-=f;else break}return e.descent=p-o,e.fontSize=e.ascent+e.descent,he._fonts[t]=e,e}static clearMetrics(t=""){t?delete he._fonts[t]:he._fonts={}}static get _canvas(){if(!he.__canvas){let t;try{const e=new OffscreenCanvas(0,0),r=e.getContext("2d",$c);if(r!=null&&r.measureText)return he.__canvas=e,e;t=ee.ADAPTER.createCanvas()}catch{t=ee.ADAPTER.createCanvas()}t.width=t.height=10,he.__canvas=t}return he.__canvas}static get _context(){return he.__context||(he.__context=he._canvas.getContext("2d",$c)),he.__context}};let $t=he;$t.METRICS_STRING="|\xC9q\xC5";$t.BASELINE_SYMBOL="M";$t.BASELINE_MULTIPLIER=1.4;$t.HEIGHT_MULTIPLIER=2;$t.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const t=new Intl.Segmenter;return e=>[...t.segment(e)].map(r=>r.segment)}return t=>[...t]})();$t.experimentalLetterSpacing=!1;$t._fonts={};$t._newlines=[10,13];$t._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];const I5=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],wl=class{constructor(t){this.styleID=0,this.reset(),lm(this,t,t)}clone(){const t={};return lm(t,this,wl.defaultStyle),new wl(t)}reset(){lm(this,wl.defaultStyle,wl.defaultStyle)}get align(){return this._align}set align(t){this._align!==t&&(this._align=t,this.styleID++)}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords!==t&&(this._breakWords=t,this.styleID++)}get dropShadow(){return this._dropShadow}set dropShadow(t){this._dropShadow!==t&&(this._dropShadow=t,this.styleID++)}get dropShadowAlpha(){return this._dropShadowAlpha}set dropShadowAlpha(t){this._dropShadowAlpha!==t&&(this._dropShadowAlpha=t,this.styleID++)}get dropShadowAngle(){return this._dropShadowAngle}set dropShadowAngle(t){this._dropShadowAngle!==t&&(this._dropShadowAngle=t,this.styleID++)}get dropShadowBlur(){return this._dropShadowBlur}set dropShadowBlur(t){this._dropShadowBlur!==t&&(this._dropShadowBlur=t,this.styleID++)}get dropShadowColor(){return this._dropShadowColor}set dropShadowColor(t){const e=am(t);this._dropShadowColor!==e&&(this._dropShadowColor=e,this.styleID++)}get dropShadowDistance(){return this._dropShadowDistance}set dropShadowDistance(t){this._dropShadowDistance!==t&&(this._dropShadowDistance=t,this.styleID++)}get fill(){return this._fill}set fill(t){const e=am(t);this._fill!==e&&(this._fill=e,this.styleID++)}get fillGradientType(){return this._fillGradientType}set fillGradientType(t){this._fillGradientType!==t&&(this._fillGradientType=t,this.styleID++)}get fillGradientStops(){return this._fillGradientStops}set fillGradientStops(t){R5(this._fillGradientStops,t)||(this._fillGradientStops=t,this.styleID++)}get fontFamily(){return this._fontFamily}set fontFamily(t){this.fontFamily!==t&&(this._fontFamily=t,this.styleID++)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize!==t&&(this._fontSize=t,this.styleID++)}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle!==t&&(this._fontStyle=t,this.styleID++)}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant!==t&&(this._fontVariant=t,this.styleID++)}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight!==t&&(this._fontWeight=t,this.styleID++)}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.styleID++)}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight!==t&&(this._lineHeight=t,this.styleID++)}get leading(){return this._leading}set leading(t){this._leading!==t&&(this._leading=t,this.styleID++)}get lineJoin(){return this._lineJoin}set lineJoin(t){this._lineJoin!==t&&(this._lineJoin=t,this.styleID++)}get miterLimit(){return this._miterLimit}set miterLimit(t){this._miterLimit!==t&&(this._miterLimit=t,this.styleID++)}get padding(){return this._padding}set padding(t){this._padding!==t&&(this._padding=t,this.styleID++)}get stroke(){return this._stroke}set stroke(t){const e=am(t);this._stroke!==e&&(this._stroke=e,this.styleID++)}get strokeThickness(){return this._strokeThickness}set strokeThickness(t){this._strokeThickness!==t&&(this._strokeThickness=t,this.styleID++)}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline!==t&&(this._textBaseline=t,this.styleID++)}get trim(){return this._trim}set trim(t){this._trim!==t&&(this._trim=t,this.styleID++)}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace!==t&&(this._whiteSpace=t,this.styleID++)}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap!==t&&(this._wordWrap=t,this.styleID++)}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth!==t&&(this._wordWrapWidth=t,this.styleID++)}toFontString(){const t=typeof this.fontSize=="number"?`${this.fontSize}px`:this.fontSize;let e=this.fontFamily;Array.isArray(this.fontFamily)||(e=this.fontFamily.split(","));for(let r=e.length-1;r>=0;r--){let n=e[r].trim();!/([\"\'])[^\'\"]+\1/.test(n)&&!I5.includes(n)&&(n=`"${n}"`),e[r]=n}return`${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${t} ${e.join(",")}`}};let pt=wl;pt.defaultStyle={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:$d.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};function am(t){const e=Ge.shared;return Array.isArray(t)?t.map(r=>e.setValue(r).toHex()):e.setValue(t).toHex()}function R5(t,e){if(!Array.isArray(t)||!Array.isArray(e)||t.length!==e.length)return!1;for(let r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0}function lm(t,e,r){for(const n in r)Array.isArray(e[n])?t[n]=e[n].slice():t[n]=e[n]}const k5={texture:!0,children:!1,baseTexture:!0},jg=class extends Je{constructor(t,e,r){var s;let n=!1;r||(r=ee.ADAPTER.createCanvas(),n=!0),r.width=3,r.height=3;const i=te.from(r);i.orig=new Ee,i.trim=new Ee,super(i),this._ownCanvas=n,this.canvas=r,this.context=r.getContext("2d",{willReadFrequently:!0}),this._resolution=(s=jg.defaultResolution)!=null?s:ee.RESOLUTION,this._autoResolution=jg.defaultAutoResolution,this._text=null,this._style=null,this._styleListener=null,this._font="",this.text=t,this.style=e,this.localStyleID=-1}static get experimentalLetterSpacing(){return $t.experimentalLetterSpacing}static set experimentalLetterSpacing(t){Ae("7.1.0","Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"),$t.experimentalLetterSpacing=t}updateText(t){const e=this._style;if(this.localStyleID!==e.styleID&&(this.dirty=!0,this.localStyleID=e.styleID),!this.dirty&&t)return;this._font=this._style.toFontString();const r=this.context,n=$t.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),i=n.width,s=n.height,o=n.lines,u=n.lineHeight,c=n.lineWidths,h=n.maxLineWidth,f=n.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,i)+e.padding*2)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,s)+e.padding*2)*this._resolution),r.scale(this._resolution,this._resolution),r.clearRect(0,0,this.canvas.width,this.canvas.height),r.font=this._font,r.lineWidth=e.strokeThickness,r.textBaseline=e.textBaseline,r.lineJoin=e.lineJoin,r.miterLimit=e.miterLimit;let p,g;const v=e.dropShadow?2:1;for(let x=0;x<v;++x){const S=e.dropShadow&&x===0,E=S?Math.ceil(Math.max(1,s)+e.padding*2):0,w=E*this._resolution;if(S){r.fillStyle="black",r.strokeStyle="black";const T=e.dropShadowColor,A=e.dropShadowBlur*this._resolution,P=e.dropShadowDistance*this._resolution;r.shadowColor=Ge.shared.setValue(T).setAlpha(e.dropShadowAlpha).toRgbaString(),r.shadowBlur=A,r.shadowOffsetX=Math.cos(e.dropShadowAngle)*P,r.shadowOffsetY=Math.sin(e.dropShadowAngle)*P+w}else r.fillStyle=this._generateFillStyle(e,o,n),r.strokeStyle=e.stroke,r.shadowColor="black",r.shadowBlur=0,r.shadowOffsetX=0,r.shadowOffsetY=0;let b=(u-f.fontSize)/2;u-f.fontSize<0&&(b=0);for(let T=0;T<o.length;T++)p=e.strokeThickness/2,g=e.strokeThickness/2+T*u+f.ascent+b,e.align==="right"?p+=h-c[T]:e.align==="center"&&(p+=(h-c[T])/2),e.stroke&&e.strokeThickness&&this.drawLetterSpacing(o[T],p+e.padding,g+e.padding-E,!0),e.fill&&this.drawLetterSpacing(o[T],p+e.padding,g+e.padding-E)}this.updateTexture()}drawLetterSpacing(t,e,r,n=!1){const s=this._style.letterSpacing;let o=!1;if($t.experimentalLetterSpacingSupported&&($t.experimentalLetterSpacing?(this.context.letterSpacing=`${s}px`,this.context.textLetterSpacing=`${s}px`,o=!0):(this.context.letterSpacing="0px",this.context.textLetterSpacing="0px")),s===0||o){n?this.context.strokeText(t,e,r):this.context.fillText(t,e,r);return}let u=e;const c=$t.graphemeSegmenter(t);let h=this.context.measureText(t).width,f=0;for(let p=0;p<c.length;++p){const g=c[p];n?this.context.strokeText(g,u,r):this.context.fillText(g,u,r);let v="";for(let x=p+1;x<c.length;++x)v+=c[x];f=this.context.measureText(v).width,u+=h-f+s,h=f}}updateTexture(){const t=this.canvas;if(this._style.trim){const s=hP(t);s.data&&(t.width=s.width,t.height=s.height,this.context.putImageData(s.data,0,0))}const e=this._texture,r=this._style,n=r.trim?0:r.padding,i=e.baseTexture;e.trim.width=e._frame.width=t.width/this._resolution,e.trim.height=e._frame.height=t.height/this._resolution,e.trim.x=-n,e.trim.y=-n,e.orig.width=e._frame.width-n*2,e.orig.height=e._frame.height-n*2,this._onTextureUpdate(),i.setRealSize(t.width,t.height,this._resolution),e.updateUvs(),this.dirty=!1}_render(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0),this.updateText(!0),super._render(t)}updateTransform(){this.updateText(!0),super.updateTransform()}getBounds(t,e){return this.updateText(!0),this._textureID===-1&&(t=!1),super.getBounds(t,e)}getLocalBounds(t){return this.updateText(!0),super.getLocalBounds.call(this,t)}_calculateBounds(){this.calculateVertices(),this._bounds.addQuad(this.vertexData)}_generateFillStyle(t,e,r){const n=t.fill;if(Array.isArray(n)){if(n.length===1)return n[0]}else return n;let i;const s=t.dropShadow?t.dropShadowDistance:0,o=t.padding||0,u=this.canvas.width/this._resolution-s-o*2,c=this.canvas.height/this._resolution-s-o*2,h=n.slice(),f=t.fillGradientStops.slice();if(!f.length){const p=h.length+1;for(let g=1;g<p;++g)f.push(g/p)}if(h.unshift(n[0]),f.unshift(0),h.push(n[n.length-1]),f.push(1),t.fillGradientType===$d.LINEAR_VERTICAL){i=this.context.createLinearGradient(u/2,o,u/2,c+o);const p=r.fontProperties.fontSize+t.strokeThickness;for(let g=0;g<e.length;g++){const v=r.lineHeight*(g-1)+p,x=r.lineHeight*g;let S=x;g>0&&v>x&&(S=(x+v)/2);const E=x+p,w=r.lineHeight*(g+1);let b=E;g+1<e.length&&w<E&&(b=(E+w)/2);const T=(b-S)/c;for(let A=0;A<h.length;A++){let P=0;typeof f[A]=="number"?P=f[A]:P=A/h.length;let O=Math.min(1,Math.max(0,S/c+P*T));O=Number(O.toFixed(5)),i.addColorStop(O,h[A])}}}else{i=this.context.createLinearGradient(o,c/2,u+o,c/2);const p=h.length+1;let g=1;for(let v=0;v<h.length;v++){let x;typeof f[v]=="number"?x=f[v]:x=g/p,i.addColorStop(x,h[v]),g++}}return i}destroy(t){typeof t=="boolean"&&(t={children:t}),t=Object.assign({},k5,t),super.destroy(t),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null}get width(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this.updateText(!0);const e=ls(this.scale.x)||1;this.scale.x=e*t/this._texture.orig.width,this._width=t}get height(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this.updateText(!0);const e=ls(this.scale.y)||1;this.scale.y=e*t/this._texture.orig.height,this._height=t}get style(){return this._style}set style(t){t=t||{},t instanceof pt?this._style=t:this._style=new pt(t),this.localStyleID=-1,this.dirty=!0}get text(){return this._text}set text(t){t=String(t==null?"":t),this._text!==t&&(this._text=t,this.dirty=!0)}get resolution(){return this._resolution}set resolution(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)}};let Da=jg;Da.defaultAutoResolution=!0;class nd{constructor(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[],this.distanceField=[]}}class Th{static test(e){return typeof e=="string"&&e.startsWith("info face=")}static parse(e){const r=e.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const s in r){const o=r[s].match(/^[a-z]+/gm)[0],u=r[s].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),c={};for(const h in u){const f=u[h].split("="),p=f[0],g=f[1].replace(/"/gm,""),v=parseFloat(g),x=isNaN(v)?g:v;c[p]=x}n[o].push(c)}const i=new nd;return n.info.forEach(s=>i.info.push({face:s.face,size:parseInt(s.size,10)})),n.common.forEach(s=>i.common.push({lineHeight:parseInt(s.lineHeight,10)})),n.page.forEach(s=>i.page.push({id:parseInt(s.id,10),file:s.file})),n.char.forEach(s=>i.char.push({id:parseInt(s.id,10),page:parseInt(s.page,10),x:parseInt(s.x,10),y:parseInt(s.y,10),width:parseInt(s.width,10),height:parseInt(s.height,10),xoffset:parseInt(s.xoffset,10),yoffset:parseInt(s.yoffset,10),xadvance:parseInt(s.xadvance,10)})),n.kerning.forEach(s=>i.kerning.push({first:parseInt(s.first,10),second:parseInt(s.second,10),amount:parseInt(s.amount,10)})),n.distanceField.forEach(s=>i.distanceField.push({distanceRange:parseInt(s.distanceRange,10),fieldType:s.fieldType})),i}}class Hg{static test(e){const r=e;return"getElementsByTagName"in r&&r.getElementsByTagName("page").length&&r.getElementsByTagName("info")[0].getAttribute("face")!==null}static parse(e){const r=new nd,n=e.getElementsByTagName("info"),i=e.getElementsByTagName("common"),s=e.getElementsByTagName("page"),o=e.getElementsByTagName("char"),u=e.getElementsByTagName("kerning"),c=e.getElementsByTagName("distanceField");for(let h=0;h<n.length;h++)r.info.push({face:n[h].getAttribute("face"),size:parseInt(n[h].getAttribute("size"),10)});for(let h=0;h<i.length;h++)r.common.push({lineHeight:parseInt(i[h].getAttribute("lineHeight"),10)});for(let h=0;h<s.length;h++)r.page.push({id:parseInt(s[h].getAttribute("id"),10)||0,file:s[h].getAttribute("file")});for(let h=0;h<o.length;h++){const f=o[h];r.char.push({id:parseInt(f.getAttribute("id"),10),page:parseInt(f.getAttribute("page"),10)||0,x:parseInt(f.getAttribute("x"),10),y:parseInt(f.getAttribute("y"),10),width:parseInt(f.getAttribute("width"),10),height:parseInt(f.getAttribute("height"),10),xoffset:parseInt(f.getAttribute("xoffset"),10),yoffset:parseInt(f.getAttribute("yoffset"),10),xadvance:parseInt(f.getAttribute("xadvance"),10)})}for(let h=0;h<u.length;h++)r.kerning.push({first:parseInt(u[h].getAttribute("first"),10),second:parseInt(u[h].getAttribute("second"),10),amount:parseInt(u[h].getAttribute("amount"),10)});for(let h=0;h<c.length;h++)r.distanceField.push({fieldType:c[h].getAttribute("fieldType"),distanceRange:parseInt(c[h].getAttribute("distanceRange"),10)});return r}}class $g{static test(e){return typeof e=="string"&&e.includes("<font>")?Hg.test(ee.ADAPTER.parseXML(e)):!1}static parse(e){return Hg.parse(ee.ADAPTER.parseXML(e))}}const um=[Th,Hg,$g];function M5(t){for(let e=0;e<um.length;e++)if(um[e].test(t))return um[e];return null}function D5(t,e,r,n,i,s){const o=r.fill;if(Array.isArray(o)){if(o.length===1)return o[0]}else return o;let u;const c=r.dropShadow?r.dropShadowDistance:0,h=r.padding||0,f=t.width/n-c-h*2,p=t.height/n-c-h*2,g=o.slice(),v=r.fillGradientStops.slice();if(!v.length){const x=g.length+1;for(let S=1;S<x;++S)v.push(S/x)}if(g.unshift(o[0]),v.unshift(0),g.push(o[o.length-1]),v.push(1),r.fillGradientType===$d.LINEAR_VERTICAL){u=e.createLinearGradient(f/2,h,f/2,p+h);let x=0;const E=(s.fontProperties.fontSize+r.strokeThickness)/p;for(let w=0;w<i.length;w++){const b=s.lineHeight*w;for(let T=0;T<g.length;T++){let A=0;typeof v[T]=="number"?A=v[T]:A=T/g.length;const P=b/p+A*E;let O=Math.max(x,P);O=Math.min(O,1),u.addColorStop(O,g[T]),x=O}}}else{u=e.createLinearGradient(h,p/2,f+h,p/2);const x=g.length+1;let S=1;for(let E=0;E<g.length;E++){let w;typeof v[E]=="number"?w=v[E]:w=S/x,u.addColorStop(w,g[E]),S++}}return u}function N5(t,e,r,n,i,s,o){const u=r.text,c=r.fontProperties;e.translate(n,i),e.scale(s,s);const h=o.strokeThickness/2,f=-(o.strokeThickness/2);if(e.font=o.toFontString(),e.lineWidth=o.strokeThickness,e.textBaseline=o.textBaseline,e.lineJoin=o.lineJoin,e.miterLimit=o.miterLimit,e.fillStyle=D5(t,e,o,s,[u],r),e.strokeStyle=o.stroke,o.dropShadow){const p=o.dropShadowColor,g=o.dropShadowBlur*s,v=o.dropShadowDistance*s;e.shadowColor=Ge.shared.setValue(p).setAlpha(o.dropShadowAlpha).toRgbaString(),e.shadowBlur=g,e.shadowOffsetX=Math.cos(o.dropShadowAngle)*v,e.shadowOffsetY=Math.sin(o.dropShadowAngle)*v}else e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0;o.stroke&&o.strokeThickness&&e.strokeText(u,h,f+r.lineHeight-c.descent),o.fill&&e.fillText(u,h,f+r.lineHeight-c.descent),e.setTransform(1,0,0,1,0,0),e.fillStyle="rgba(0, 0, 0, 0)"}function bh(t){return t.codePointAt?t.codePointAt(0):t.charCodeAt(0)}function xw(t){return Array.from?Array.from(t):t.split("")}function O5(t){typeof t=="string"&&(t=[t]);const e=[];for(let r=0,n=t.length;r<n;r++){const i=t[r];if(Array.isArray(i)){if(i.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`);const s=i[0].charCodeAt(0),o=i[1].charCodeAt(0);if(o<s)throw new Error("[BitmapFont]: Invalid character range.");for(let u=s,c=o;u<=c;u++)e.push(String.fromCharCode(u))}else e.push(...xw(i))}if(e.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}const yn=class{constructor(t,e,r){var h,f;const[n]=t.info,[i]=t.common,[s]=t.page,[o]=t.distanceField,u=_s(s.file),c={};this._ownsTextures=r,this.font=n.face,this.size=n.size,this.lineHeight=i.lineHeight/u,this.chars={},this.pageTextures=c;for(let p=0;p<t.page.length;p++){const{id:g,file:v}=t.page[p];c[g]=e instanceof Array?e[p]:e[v],(o==null?void 0:o.fieldType)&&o.fieldType!=="none"&&(c[g].baseTexture.alphaMode=Nn.NO_PREMULTIPLIED_ALPHA,c[g].baseTexture.mipmap=si.OFF)}for(let p=0;p<t.char.length;p++){const{id:g,page:v}=t.char[p];let{x,y:S,width:E,height:w,xoffset:b,yoffset:T,xadvance:A}=t.char[p];x/=u,S/=u,E/=u,w/=u,b/=u,T/=u,A/=u;const P=new Ee(x+c[v].frame.x/u,S+c[v].frame.y/u,E,w);this.chars[g]={xOffset:b,yOffset:T,xAdvance:A,kerning:{},texture:new te(c[v].baseTexture,P),page:v}}for(let p=0;p<t.kerning.length;p++){let{first:g,second:v,amount:x}=t.kerning[p];g/=u,v/=u,x/=u,this.chars[v]&&(this.chars[v].kerning[g]=x)}this.distanceFieldRange=o==null?void 0:o.distanceRange,this.distanceFieldType=(f=(h=o==null?void 0:o.fieldType)==null?void 0:h.toLowerCase())!=null?f:"none"}destroy(){for(const t in this.chars)this.chars[t].texture.destroy(),this.chars[t].texture=null;for(const t in this.pageTextures)this._ownsTextures&&this.pageTextures[t].destroy(!0),this.pageTextures[t]=null;this.chars=null,this.pageTextures=null}static install(t,e,r){let n;if(t instanceof nd)n=t;else{const s=M5(t);if(!s)throw new Error("Unrecognized data format for font.");n=s.parse(t)}e instanceof te&&(e=[e]);const i=new yn(n,e,r);return yn.available[i.font]=i,i}static uninstall(t){const e=yn.available[t];if(!e)throw new Error(`No font found named '${t}'`);e.destroy(),delete yn.available[t]}static from(t,e,r){if(!t)throw new Error("[BitmapFont] Property `name` is required.");const{chars:n,padding:i,resolution:s,textureWidth:o,textureHeight:u,...c}=Object.assign({},yn.defaultOptions,r),h=O5(n),f=e instanceof pt?e:new pt(e),p=o,g=new nd;g.info[0]={face:f.fontFamily,size:f.fontSize},g.common[0]={lineHeight:f.fontSize};let v=0,x=0,S,E,w,b=0;const T=[];for(let P=0;P<h.length;P++){S||(S=ee.ADAPTER.createCanvas(),S.width=o,S.height=u,E=S.getContext("2d"),w=new be(S,{resolution:s,...c}),T.push(new te(w)),g.page.push({id:T.length-1,file:""}));const O=h[P],D=$t.measureText(O,f,!1,S),M=D.width,H=Math.ceil(D.height),X=Math.ceil((f.fontStyle==="italic"?2:1)*M);if(x>=u-H*s){if(x===0)throw new Error(`[BitmapFont] textureHeight ${u}px is too small (fontFamily: '${f.fontFamily}', fontSize: ${f.fontSize}px, char: '${O}')`);--P,S=null,E=null,w=null,x=0,v=0,b=0;continue}if(b=Math.max(H+D.fontProperties.descent,b),X*s+v>=p){if(v===0)throw new Error(`[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${f.fontFamily}', fontSize: ${f.fontSize}px, char: '${O}')`);--P,x+=b*s,x=Math.ceil(x),v=0,b=0;continue}N5(S,E,D,v,x,s,f);const Y=bh(D.text);g.char.push({id:Y,page:T.length-1,x:v/s,y:x/s,width:X,height:H,xoffset:0,yoffset:0,xadvance:M-(f.dropShadow?f.dropShadowDistance:0)-(f.stroke?f.strokeThickness:0)}),v+=(X+2*i)*s,v=Math.ceil(v)}for(let P=0,O=h.length;P<O;P++){const D=h[P];for(let M=0;M<O;M++){const H=h[M],X=E.measureText(D).width,Y=E.measureText(H).width,W=E.measureText(D+H).width-(X+Y);W&&g.kerning.push({first:bh(D),second:bh(H),amount:W})}}const A=new yn(g,T,!0);return yn.available[t]!==void 0&&yn.uninstall(t),yn.available[t]=A,A}};let yr=yn;yr.ALPHA=[["a","z"],["A","Z"]," "];yr.NUMERIC=[["0","9"]];yr.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "];yr.ASCII=[[" ","~"]];yr.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:yn.ALPHANUMERIC};yr.available={};class F5{constructor(e,r){this.uvBuffer=e,this.uvMatrix=r,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}update(e){if(!e&&this._bufferUpdateId===this.uvBuffer._updateID&&this._textureUpdateId===this.uvMatrix._updateID)return;this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;const r=this.uvBuffer.data;(!this.data||this.data.length!==r.length)&&(this.data=new Float32Array(r.length)),this.uvMatrix.multiplyUvs(r,this.data),this._updateID++}}const cm=new we,s_=new ya,_w=class extends je{constructor(t,e,r,n=Sn.TRIANGLES){super(),this.geometry=t,this.shader=e,this.state=r||Bi.for2d(),this.drawMode=n,this.start=0,this.size=0,this.uvs=null,this.indices=null,this.vertexData=new Float32Array(1),this.vertexDirty=-1,this._transformID=-1,this._roundPixels=ee.ROUND_PIXELS,this.batchUvs=null}get geometry(){return this._geometry}set geometry(t){this._geometry!==t&&(this._geometry&&(this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose()),this._geometry=t,this._geometry&&this._geometry.refCount++,this.vertexDirty=-1)}get uvBuffer(){return this.geometry.buffers[1]}get verticesBuffer(){return this.geometry.buffers[0]}set material(t){this.shader=t}get material(){return this.shader}set blendMode(t){this.state.blendMode=t}get blendMode(){return this.state.blendMode}set roundPixels(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t}get roundPixels(){return this._roundPixels}get tint(){return"tint"in this.shader?this.shader.tint:null}set tint(t){this.shader.tint=t}get tintValue(){return this.shader.tintValue}get texture(){return"texture"in this.shader?this.shader.texture:null}set texture(t){this.shader.texture=t}_render(t){const e=this.geometry.buffers[0].data;this.shader.batchable&&this.drawMode===Sn.TRIANGLES&&e.length<_w.BATCHABLE_SIZE*2?this._renderToBatch(t):this._renderDefault(t)}_renderDefault(t){const e=this.shader;e.alpha=this.worldAlpha,e.update&&e.update(),t.batch.flush(),e.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),t.shader.bind(e),t.state.set(this.state),t.geometry.bind(this.geometry,e),t.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)}_renderToBatch(t){const e=this.geometry,r=this.shader;r.uvMatrix&&(r.uvMatrix.update(),this.calculateUvs()),this.calculateVertices(),this.indices=e.indexBuffer.data,this._tintRGB=r._tintRGB,this._texture=r.texture;const n=this.material.pluginName;t.batch.setObjectRenderer(t.plugins[n]),t.plugins[n].render(this)}calculateVertices(){const e=this.geometry.buffers[0],r=e.data,n=e._updateID;if(n===this.vertexDirty&&this._transformID===this.transform._worldID)return;this._transformID=this.transform._worldID,this.vertexData.length!==r.length&&(this.vertexData=new Float32Array(r.length));const i=this.transform.worldTransform,s=i.a,o=i.b,u=i.c,c=i.d,h=i.tx,f=i.ty,p=this.vertexData;for(let g=0;g<p.length/2;g++){const v=r[g*2],x=r[g*2+1];p[g*2]=s*v+u*x+h,p[g*2+1]=o*v+c*x+f}if(this._roundPixels){const g=ee.RESOLUTION;for(let v=0;v<p.length;++v)p[v]=Math.round(p[v]*g)/g}this.vertexDirty=n}calculateUvs(){const t=this.geometry.buffers[1],e=this.shader;e.uvMatrix.isSimple?this.uvs=t.data:(this.batchUvs||(this.batchUvs=new F5(t,e.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)}_calculateBounds(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)}containsPoint(t){if(!this.getBounds().contains(t.x,t.y))return!1;this.worldTransform.applyInverse(t,cm);const e=this.geometry.getBuffer("aVertexPosition").data,r=s_.points,n=this.geometry.getIndex().data,i=n.length,s=this.drawMode===4?3:1;for(let o=0;o+2<i;o+=s){const u=n[o]*2,c=n[o+1]*2,h=n[o+2]*2;if(r[0]=e[u],r[1]=e[u+1],r[2]=e[c],r[3]=e[c+1],r[4]=e[h],r[5]=e[h+1],s_.contains(cm.x,cm.y))return!0}return!1}destroy(t){super.destroy(t),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null}};let Ca=_w;Ca.BATCHABLE_SIZE=100;class Vd extends Ts{constructor(e,r,n){super();const i=new xt(e),s=new xt(r,!0),o=new xt(n,!0,!0);this.addAttribute("aVertexPosition",i,2,!1,ve.FLOAT).addAttribute("aTextureCoord",s,2,!1,ve.FLOAT).addIndex(o),this._updateId=-1}get vertexDirtyId(){return this.buffers[0]._updateID}}var L5=`varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,B5=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;class cu extends ni{constructor(e,r){const n={uSampler:e,alpha:1,uTextureMatrix:it.IDENTITY,uColor:new Float32Array([1,1,1,1])};r=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},r),r.uniforms&&Object.assign(n,r.uniforms),super(r.program||En.from(B5,L5),n),this._colorDirty=!1,this.uvMatrix=new hy(e),this.batchable=r.program===void 0,this.pluginName=r.pluginName,this._tintColor=new Ge(r.tint),this._tintRGB=this._tintColor.toLittleEndianNumber(),this._colorDirty=!0,this.alpha=r.alpha}get texture(){return this.uniforms.uSampler}set texture(e){this.uniforms.uSampler!==e&&(!this.uniforms.uSampler.baseTexture.alphaMode!=!e.baseTexture.alphaMode&&(this._colorDirty=!0),this.uniforms.uSampler=e,this.uvMatrix.texture=e)}set alpha(e){e!==this._alpha&&(this._alpha=e,this._colorDirty=!0)}get alpha(){return this._alpha}set tint(e){e!==this.tint&&(this._tintColor.setValue(e),this._tintRGB=this._tintColor.toLittleEndianNumber(),this._colorDirty=!0)}get tint(){return this._tintColor.value}get tintValue(){return this._tintColor.toNumber()}update(){if(this._colorDirty){this._colorDirty=!1;const r=this.texture.baseTexture.alphaMode;Ge.shared.setValue(this._tintColor).premultiply(this._alpha,r).toArray(this.uniforms.uColor)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)}}var U5=`// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`,z5=`// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;const o_=[],a_=[],l_=[],Tw=class extends je{constructor(t,e={}){super();const{align:r,tint:n,maxWidth:i,letterSpacing:s,fontName:o,fontSize:u}=Object.assign({},Tw.styleDefaults,e);if(!yr.available[o])throw new Error(`Missing BitmapFont "${o}"`);this._activePagesMeshData=[],this._textWidth=0,this._textHeight=0,this._align=r,this._tintColor=new Ge(n),this._font=void 0,this._fontName=o,this._fontSize=u,this.text=t,this._maxWidth=i,this._maxLineHeight=0,this._letterSpacing=s,this._anchor=new Jn(()=>{this.dirty=!0},this,0,0),this._roundPixels=ee.ROUND_PIXELS,this.dirty=!0,this._resolution=ee.RESOLUTION,this._autoResolution=!0,this._textureCache={}}updateText(){var X;const t=yr.available[this._fontName],e=this.fontSize,r=e/t.size,n=new we,i=[],s=[],o=[],u=this._text.replace(/(?:\r\n|\r)/g,`
`)||" ",c=xw(u),h=this._maxWidth*t.size/e,f=t.distanceFieldType==="none"?o_:a_;let p=null,g=0,v=0,x=0,S=-1,E=0,w=0,b=0,T=0;for(let Y=0;Y<c.length;Y++){const ie=c[Y],W=bh(ie);if(/(?:\s)/.test(ie)&&(S=Y,E=g,T++),ie==="\r"||ie===`
`){s.push(g),o.push(-1),v=Math.max(v,g),++x,++w,n.x=0,n.y+=t.lineHeight,p=null,T=0;continue}const U=t.chars[W];if(!U)continue;p&&U.kerning[p]&&(n.x+=U.kerning[p]);const fe=l_.pop()||{texture:te.EMPTY,line:0,charCode:0,prevSpaces:0,position:new we};fe.texture=U.texture,fe.line=x,fe.charCode=W,fe.position.x=Math.round(n.x+U.xOffset+this._letterSpacing/2),fe.position.y=Math.round(n.y+U.yOffset),fe.prevSpaces=T,i.push(fe),g=fe.position.x+Math.max(U.xAdvance-U.xOffset,U.texture.orig.width),n.x+=U.xAdvance+this._letterSpacing,b=Math.max(b,U.yOffset+U.texture.height),p=W,S!==-1&&h>0&&n.x>h&&(++w,ga(i,1+S-w,1+Y-S),Y=S,S=-1,s.push(E),o.push(i.length>0?i[i.length-1].prevSpaces:0),v=Math.max(v,E),x++,n.x=0,n.y+=t.lineHeight,p=null,T=0)}const A=c[c.length-1];A!=="\r"&&A!==`
`&&(/(?:\s)/.test(A)&&(g=E),s.push(g),v=Math.max(v,g),o.push(-1));const P=[];for(let Y=0;Y<=x;Y++){let ie=0;this._align==="right"?ie=v-s[Y]:this._align==="center"?ie=(v-s[Y])/2:this._align==="justify"&&(ie=o[Y]<0?0:(v-s[Y])/o[Y]),P.push(ie)}const O=i.length,D={},M=[],H=this._activePagesMeshData;f.push(...H);for(let Y=0;Y<O;Y++){const ie=i[Y].texture,W=ie.baseTexture.uid;if(!D[W]){let U=f.pop();if(!U){const xe=new Vd;let z,R;t.distanceFieldType==="none"?(z=new cu(te.EMPTY),R=pe.NORMAL):(z=new cu(te.EMPTY,{program:En.from(z5,U5),uniforms:{uFWidth:0}}),R=pe.NORMAL_NPM);const L=new Ca(xe,z);L.blendMode=R,U={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:L,vertices:null,uvs:null,indices:null}}U.index=0,U.indexCount=0,U.vertexCount=0,U.uvsCount=0,U.total=0;const{_textureCache:fe}=this;fe[W]=fe[W]||new te(ie.baseTexture),U.mesh.texture=fe[W],U.mesh.tint=this._tintColor.value,M.push(U),D[W]=U}D[W].total++}for(let Y=0;Y<H.length;Y++)M.includes(H[Y])||this.removeChild(H[Y].mesh);for(let Y=0;Y<M.length;Y++)M[Y].mesh.parent!==this&&this.addChild(M[Y].mesh);this._activePagesMeshData=M;for(const Y in D){const ie=D[Y],W=ie.total;if(!(((X=ie.indices)==null?void 0:X.length)>6*W)||ie.vertices.length<Ca.BATCHABLE_SIZE*2)ie.vertices=new Float32Array(4*2*W),ie.uvs=new Float32Array(4*2*W),ie.indices=new Uint16Array(6*W);else{const U=ie.total,fe=ie.vertices;for(let xe=U*4*2;xe<fe.length;xe++)fe[xe]=0}ie.mesh.size=6*W}for(let Y=0;Y<O;Y++){const ie=i[Y];let W=ie.position.x+P[ie.line]*(this._align==="justify"?ie.prevSpaces:1);this._roundPixels&&(W=Math.round(W));const U=W*r,fe=ie.position.y*r,xe=ie.texture,z=D[xe.baseTexture.uid],R=xe.frame,L=xe._uvs,k=z.index++;z.indices[k*6+0]=0+k*4,z.indices[k*6+1]=1+k*4,z.indices[k*6+2]=2+k*4,z.indices[k*6+3]=0+k*4,z.indices[k*6+4]=2+k*4,z.indices[k*6+5]=3+k*4,z.vertices[k*8+0]=U,z.vertices[k*8+1]=fe,z.vertices[k*8+2]=U+R.width*r,z.vertices[k*8+3]=fe,z.vertices[k*8+4]=U+R.width*r,z.vertices[k*8+5]=fe+R.height*r,z.vertices[k*8+6]=U,z.vertices[k*8+7]=fe+R.height*r,z.uvs[k*8+0]=L.x0,z.uvs[k*8+1]=L.y0,z.uvs[k*8+2]=L.x1,z.uvs[k*8+3]=L.y1,z.uvs[k*8+4]=L.x2,z.uvs[k*8+5]=L.y2,z.uvs[k*8+6]=L.x3,z.uvs[k*8+7]=L.y3}this._textWidth=v*r,this._textHeight=(n.y+t.lineHeight)*r;for(const Y in D){const ie=D[Y];if(this.anchor.x!==0||this.anchor.y!==0){let xe=0;const z=this._textWidth*this.anchor.x,R=this._textHeight*this.anchor.y;for(let L=0;L<ie.total;L++)ie.vertices[xe++]-=z,ie.vertices[xe++]-=R,ie.vertices[xe++]-=z,ie.vertices[xe++]-=R,ie.vertices[xe++]-=z,ie.vertices[xe++]-=R,ie.vertices[xe++]-=z,ie.vertices[xe++]-=R}this._maxLineHeight=b*r;const W=ie.mesh.geometry.getBuffer("aVertexPosition"),U=ie.mesh.geometry.getBuffer("aTextureCoord"),fe=ie.mesh.geometry.getIndex();W.data=ie.vertices,U.data=ie.uvs,fe.data=ie.indices,W.update(),U.update(),fe.update()}for(let Y=0;Y<i.length;Y++)l_.push(i[Y]);this._font=t,this.dirty=!1}updateTransform(){this.validate(),this.containerUpdateTransform()}_render(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0);const{distanceFieldRange:e,distanceFieldType:r,size:n}=yr.available[this._fontName];if(r!=="none"){const{a:i,b:s,c:o,d:u}=this.worldTransform,c=Math.sqrt(i*i+s*s),h=Math.sqrt(o*o+u*u),f=(Math.abs(c)+Math.abs(h))/2,p=this.fontSize/n,g=t._view.resolution;for(const v of this._activePagesMeshData)v.mesh.shader.uniforms.uFWidth=f*e*p*g}super._render(t)}getLocalBounds(){return this.validate(),super.getLocalBounds()}validate(){const t=yr.available[this._fontName];if(!t)throw new Error(`Missing BitmapFont "${this._fontName}"`);this._font!==t&&(this.dirty=!0),this.dirty&&this.updateText()}get tint(){return this._tintColor.value}set tint(t){if(this.tint!==t){this._tintColor.setValue(t);for(let e=0;e<this._activePagesMeshData.length;e++)this._activePagesMeshData[e].mesh.tint=t}}get align(){return this._align}set align(t){this._align!==t&&(this._align=t,this.dirty=!0)}get fontName(){return this._fontName}set fontName(t){if(!yr.available[t])throw new Error(`Missing BitmapFont "${t}"`);this._fontName!==t&&(this._fontName=t,this.dirty=!0)}get fontSize(){var t;return(t=this._fontSize)!=null?t:yr.available[this._fontName].size}set fontSize(t){this._fontSize!==t&&(this._fontSize=t,this.dirty=!0)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get text(){return this._text}set text(t){t=String(t==null?"":t),this._text!==t&&(this._text=t,this.dirty=!0)}get maxWidth(){return this._maxWidth}set maxWidth(t){this._maxWidth!==t&&(this._maxWidth=t,this.dirty=!0)}get maxLineHeight(){return this.validate(),this._maxLineHeight}get textWidth(){return this.validate(),this._textWidth}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.dirty=!0)}get roundPixels(){return this._roundPixels}set roundPixels(t){t!==this._roundPixels&&(this._roundPixels=t,this.dirty=!0)}get textHeight(){return this.validate(),this._textHeight}get resolution(){return this._resolution}set resolution(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)}destroy(t){const{_textureCache:e}=this,n=yr.available[this._fontName].distanceFieldType==="none"?o_:a_;n.push(...this._activePagesMeshData);for(const i of this._activePagesMeshData)this.removeChild(i.mesh);this._activePagesMeshData=[],n.filter(i=>e[i.mesh.texture.baseTexture.uid]).forEach(i=>{i.mesh.texture=te.EMPTY});for(const i in e)e[i].destroy(),delete e[i];this._font=null,this._tintColor=null,this._textureCache=null,super.destroy(t)}};let bw=Tw;bw.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0};const u_={loader:oe.LoadParser,resolver:oe.ResolveParser,cache:oe.CacheParser,detection:oe.DetectionParser};me.handle(oe.Asset,t=>{const e=t.ref;Object.entries(u_).filter(([r])=>!!e[r]).forEach(([r,n])=>{var i;return me.add(Object.assign(e[r],{extension:(i=e[r].extension)!=null?i:n}))})},t=>{const e=t.ref;Object.keys(u_).filter(r=>!!e[r]).forEach(r=>me.remove(e[r]))});class G5{constructor(e,r=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=r}add(e){e.forEach(r=>{this._assetList.push(r)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],r=Math.min(this._assetList.length,this._maxConcurrent);for(let n=0;n<r;n++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}function bu(t,e){if(Array.isArray(e)){for(const r of e)if(t.startsWith(`data:${r}`))return!0;return!1}return t.startsWith(`data:${e}`)}function mo(t,e){const r=t.split("?")[0],n=nr.extname(r).toLowerCase();return Array.isArray(e)?e.includes(n):n===e}const Pi=(t,e)=>(Array.isArray(t)||(t=[t]),e?t.map(r=>typeof r=="string"?e(r):r):t),Vg=(t,e)=>{const r=e.split("?")[1];return r&&(t+=`?${r}`),t};function ww(t,e,r,n,i){const s=e[r];for(let o=0;o<s.length;o++){const u=s[o];r<e.length-1?ww(t.replace(n[r],u),e,r+1,n,i):i.push(t.replace(n[r],u))}}function j5(t){const e=/\{(.*?)\}/g,r=t.match(e),n=[];if(r){const i=[];r.forEach(s=>{const o=s.substring(1,s.length-1).split(",");i.push(o)}),ww(t,i,0,r,n)}else n.push(t);return n}const id=t=>!Array.isArray(t);class H5{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(e){return this._cache.has(e)}get(e){const r=this._cache.get(e);return r||console.warn(`[Assets] Asset id ${e} was not found in the Cache`),r}set(e,r){const n=Pi(e);let i;for(let u=0;u<this.parsers.length;u++){const c=this.parsers[u];if(c.test(r)){i=c.getCacheableAssets(n,r);break}}i||(i={},n.forEach(u=>{i[u]=r}));const s=Object.keys(i),o={cacheKeys:s,keys:n};if(n.forEach(u=>{this._cacheMap.set(u,o)}),s.forEach(u=>{this._cache.has(u)&&this._cache.get(u)!==r&&console.warn("[Cache] already has key:",u),this._cache.set(u,i[u])}),r instanceof te){const u=r;n.forEach(c=>{u.baseTexture!==te.EMPTY.baseTexture&&be.addToCache(u.baseTexture,c),te.addToCache(u,c)})}}remove(e){if(this._cacheMap.get(e),!this._cacheMap.has(e)){console.warn(`[Assets] Asset id ${e} was not found in the Cache`);return}const r=this._cacheMap.get(e);r.cacheKeys.forEach(i=>{this._cache.delete(i)}),r.keys.forEach(i=>{this._cacheMap.delete(i)})}get parsers(){return this._parsers}}const pl=new H5;class $5{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,r,n)=>(this._parsersValidated=!1,e[r]=n,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,r){const n={promise:null,parser:null};return n.promise=(async()=>{var o,u;let i=null,s=null;if(r.loadParser&&(s=this._parserHash[r.loadParser],s||console.warn(`[Assets] specified load parser "${r.loadParser}" not found while loading ${e}`)),!s){for(let c=0;c<this.parsers.length;c++){const h=this.parsers[c];if(h.load&&((o=h.test)==null?void 0:o.call(h,e,r,this))){s=h;break}}if(!s)return console.warn(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await s.load(e,r,this),n.parser=s;for(let c=0;c<this.parsers.length;c++){const h=this.parsers[c];h.parse&&h.parse&&await((u=h.testParse)==null?void 0:u.call(h,i,r,this))&&(i=await h.parse(i,r,this)||i,n.parser=h)}return i})(),n}async load(e,r){this._parsersValidated||this._validateParsers();let n=0;const i={},s=id(e),o=Pi(e,h=>({src:h})),u=o.length,c=o.map(async h=>{const f=nr.toAbsolute(h.src);if(!i[h.src])try{this.promiseCache[f]||(this.promiseCache[f]=this._getLoadPromiseAndParser(f,h)),i[h.src]=await this.promiseCache[f].promise,r&&r(++n/u)}catch(p){throw delete this.promiseCache[f],delete i[h.src],new Error(`[Loader.load] Failed to load ${f}.
${p}`)}});return await Promise.all(c),s?i[o[0].src]:i}async unload(e){const n=Pi(e,i=>({src:i})).map(async i=>{var u,c;const s=nr.toAbsolute(i.src),o=this.promiseCache[s];if(o){const h=await o.promise;(c=(u=o.parser)==null?void 0:u.unload)==null||c.call(u,h,i,this),delete this.promiseCache[s]}});await Promise.all(n)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,r)=>(e[r.name]&&console.warn(`[Assets] loadParser name conflict "${r.name}"`),{...e,[r.name]:r}),{})}}var li=(t=>(t[t.Low=0]="Low",t[t.Normal=1]="Normal",t[t.High=2]="High",t))(li||{});const V5=".json",W5="application/json",X5={extension:{type:oe.LoadParser,priority:li.Low},name:"loadJson",test(t){return bu(t,W5)||mo(t,V5)},async load(t){return await(await ee.ADAPTER.fetch(t)).json()}};me.add(X5);const Y5=".txt",K5="text/plain",Q5={name:"loadTxt",extension:{type:oe.LoadParser,priority:li.Low},test(t){return bu(t,K5)||mo(t,Y5)},async load(t){return await(await ee.ADAPTER.fetch(t)).text()}};me.add(Q5);const Z5=["normal","bold","100","200","300","400","500","600","700","800","900"],q5=[".ttf",".otf",".woff",".woff2"],J5=["font/ttf","font/otf","font/woff","font/woff2"],eI=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function tI(t){const e=nr.extname(t),i=nr.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(u=>u.charAt(0).toUpperCase()+u.slice(1));let s=i.length>0;for(const u of i)if(!u.match(eI)){s=!1;break}let o=i.join(" ");return s||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const rI={extension:{type:oe.LoadParser,priority:li.Low},name:"loadWebFont",test(t){return bu(t,J5)||mo(t,q5)},async load(t,e){var n,i,s,o,u,c;const r=ee.ADAPTER.getFontFaceSet();if(r){const h=[],f=(i=(n=e.data)==null?void 0:n.family)!=null?i:tI(t),p=(u=(o=(s=e.data)==null?void 0:s.weights)==null?void 0:o.filter(v=>Z5.includes(v)))!=null?u:["normal"],g=(c=e.data)!=null?c:{};for(let v=0;v<p.length;v++){const x=p[v],S=new FontFace(f,`url(${encodeURI(t)})`,{...g,weight:x});await S.load(),r.add(S),h.push(S)}return h.length===1?h[0]:h}return console.warn("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>ee.ADAPTER.getFontFaceSet().delete(e))}};me.add(rI);let c_=0,hm;const nI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=",iI={id:"checkImageBitmap",code:`
    async function checkImageBitmap()
    {
        try
        {
            if (typeof createImageBitmap !== 'function') return false;

            const response = await fetch('${nI}');
            const imageBlob =  await response.blob();
            const imageBitmap = await createImageBitmap(imageBlob);

            return imageBitmap.width === 1 && imageBitmap.height === 1;
        }
        catch (e)
        {
            return false;
        }
    }
    checkImageBitmap().then((result) => { self.postMessage(result); });
    `},sI={id:"loadImageBitmap",code:`
    async function loadImageBitmap(url)
    {
        const response = await fetch(url);

        if (!response.ok)
        {
            throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \`
                + \`\${response.status} \${response.statusText}\`);
        }

        const imageBlob =  await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);

        return imageBitmap;
    }
    self.onmessage = async (event) =>
    {
        try
        {
            const imageBitmap = await loadImageBitmap(event.data.data[0]);

            self.postMessage({
                data: imageBitmap,
                uuid: event.data.uuid,
                id: event.data.id,
            }, [imageBitmap]);
        }
        catch(e)
        {
            self.postMessage({
                error: e,
                uuid: event.data.uuid,
                id: event.data.id,
            });
        }
    };`};let dm;class oI{constructor(){this._initialized=!1,this._createdWorkers=0,this.workerPool=[],this.queue=[],this.resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const r=URL.createObjectURL(new Blob([iI.code],{type:"application/javascript"})),n=new Worker(r);n.addEventListener("message",i=>{n.terminate(),URL.revokeObjectURL(r),e(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e){return this._run("loadImageBitmap",[e])}async _initWorkers(){this._initialized||(this._initialized=!0)}getWorker(){hm===void 0&&(hm=navigator.hardwareConcurrency||4);let e=this.workerPool.pop();return!e&&this._createdWorkers<hm&&(dm||(dm=URL.createObjectURL(new Blob([sI.code],{type:"application/javascript"}))),this._createdWorkers++,e=new Worker(dm),e.addEventListener("message",r=>{this.complete(r.data),this.returnWorker(r.target),this.next()})),e}returnWorker(e){this.workerPool.push(e)}complete(e){e.error!==void 0?this.resolveHash[e.uuid].reject(e.error):this.resolveHash[e.uuid].resolve(e.data),this.resolveHash[e.uuid]=null}async _run(e,r){await this._initWorkers();const n=new Promise((i,s)=>{this.queue.push({id:e,arguments:r,resolve:i,reject:s})});return this.next(),n}next(){if(!this.queue.length)return;const e=this.getWorker();if(!e)return;const r=this.queue.pop(),n=r.id;this.resolveHash[c_]={resolve:r.resolve,reject:r.reject},e.postMessage({data:r.arguments,uuid:c_++,id:n})}}const h_=new oI;function Wd(t,e,r){const n=new te(t);return n.baseTexture.on("dispose",()=>{delete e.promiseCache[r]}),n}const aI=[".jpeg",".jpg",".png",".webp",".avif"],lI=["image/jpeg","image/png","image/webp","image/avif"];async function uI(t){const e=await ee.ADAPTER.fetch(t);if(!e.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${e.status} ${e.statusText}`);const r=await e.blob();return await createImageBitmap(r)}const Xd={name:"loadTextures",extension:{type:oe.LoadParser,priority:li.High},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return bu(t,lI)||mo(t,aI)},async load(t,e,r){let n=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await h_.isImageBitmapSupported()?n=await h_.loadImageBitmap(t):n=await uI(t):n=await new Promise(s=>{n=new Image,n.crossOrigin=this.config.crossOrigin,n.src=t,n.complete?s(n):n.onload=()=>{s(n)}});const i=new be(n,{resolution:_s(t),...e.data});return i.resource.src=t,Wd(i,r,t)},unload(t){t.destroy(!0)}};me.add(Xd);const cI=".svg",hI="image/svg+xml",dI={extension:{type:oe.LoadParser,priority:li.High},name:"loadSVG",test(t){return bu(t,hI)||mo(t,cI)},async testParse(t){return uu.test(t)},async parse(t,e,r){var o;const n=new uu(t,(o=e==null?void 0:e.data)==null?void 0:o.resourceOptions);await n.load();const i=new be(n,{resolution:_s(t),...e==null?void 0:e.data});return i.resource.src=t,Wd(i,r,t)},async load(t,e){return(await ee.ADAPTER.fetch(t)).text()},unload:Xd.unload};me.add(dI);class fI{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(e,r)=>`${e}${this._bundleIdConnector}${r}`,extractAssetIdFromBundle:(e,r)=>r.replace(`${e}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(e){var r,n,i;if(this._bundleIdConnector=(r=e.connector)!=null?r:this._bundleIdConnector,this._createBundleAssetId=(n=e.createBundleAssetId)!=null?n:this._createBundleAssetId,this._extractAssetIdFromBundle=(i=e.extractAssetIdFromBundle)!=null?i:this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...e){e.forEach(r=>{this._preferredOrder.push(r),r.priority||(r.priority=Object.keys(r.params))}),this._resolverHash={}}set basePath(e){this._basePath=e}get basePath(){return this._basePath}set rootPath(e){this._rootPath=e}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(e){if(typeof e=="string")this._defaultSearchParams=e;else{const r=e;this._defaultSearchParams=Object.keys(r).map(n=>`${encodeURIComponent(n)}=${encodeURIComponent(r[n])}`).join("&")}}addManifest(e){this._manifest&&console.warn("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=e,e.bundles.forEach(r=>{this.addBundle(r.name,r.assets)})}addBundle(e,r){const n=[];Array.isArray(r)?r.forEach(i=>{if(typeof i.name=="string"){const s=this._createBundleAssetId(e,i.name);n.push(s),this.add([i.name,s],i.srcs,i.data)}else{const s=i.name.map(o=>this._createBundleAssetId(e,o));s.forEach(o=>{n.push(o)}),this.add([...i.name,...s],i.srcs)}}):Object.keys(r).forEach(i=>{n.push(this._createBundleAssetId(e,i)),this.add([i,this._createBundleAssetId(e,i)],r[i])}),this._bundles[e]=n}add(e,r,n){const i=Pi(e);i.forEach(o=>{this.hasKey(o)&&console.warn(`[Resolver] already has key: ${o} overwriting`)}),Array.isArray(r)||(typeof r=="string"?r=j5(r):r=[r]);const s=r.map(o=>{var c;let u=o;if(typeof o=="string"){let h=!1;for(let f=0;f<this._parsers.length;f++){const p=this._parsers[f];if(p.test(o)){u=p.parse(o),h=!0;break}}h||(u={src:o})}return u.format||(u.format=u.src.split(".").pop()),u.alias||(u.alias=i),(this._basePath||this._rootPath)&&(u.src=nr.toAbsolute(u.src,this._basePath,this._rootPath)),u.src=this._appendDefaultSearchParams(u.src),u.data=(c=u.data)!=null?c:n,u});i.forEach(o=>{this._assetMap[o]=s})}resolveBundle(e){const r=id(e);e=Pi(e);const n={};return e.forEach(i=>{const s=this._bundles[i];if(s){const o=this.resolve(s),u={};for(const c in o){const h=o[c];u[this._extractAssetIdFromBundle(i,c)]=h}n[i]=u}}),r?n[e[0]]:n}resolveUrl(e){const r=this.resolve(e);if(typeof e!="string"){const n={};for(const i in r)n[i]=r[i].src;return n}return r.src}resolve(e){const r=id(e);e=Pi(e);const n={};return e.forEach(i=>{var s;if(!this._resolverHash[i])if(this._assetMap[i]){let o=this._assetMap[i];const u=this._getPreferredOrder(o),c=o[0];u==null||u.priority.forEach(h=>{u.params[h].forEach(f=>{const p=o.filter(g=>g[h]?g[h]===f:!1);p.length&&(o=p)})}),this._resolverHash[i]=(s=o[0])!=null?s:c}else{let o=i;(this._basePath||this._rootPath)&&(o=nr.toAbsolute(o,this._basePath,this._rootPath)),o=this._appendDefaultSearchParams(o),this._resolverHash[i]={src:o}}n[i]=this._resolverHash[i]}),r?n[e[0]]:n}hasKey(e){return!!this._assetMap[e]}hasBundle(e){return!!this._bundles[e]}_getPreferredOrder(e){for(let r=0;r<e.length;r++){const n=e[0],i=this._preferredOrder.find(s=>s.params.format.includes(n.format));if(i)return i}return this._preferredOrder[0]}_appendDefaultSearchParams(e){if(!this._defaultSearchParams)return e;const r=/\?/.test(e)?"&":"?";return`${e}${r}${this._defaultSearchParams}`}}class pI{constructor(){this._detections=[],this._initialized=!1,this.resolver=new fI,this.loader=new $5,this.cache=pl,this._backgroundLoader=new G5(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var s,o,u,c;if(this._initialized){console.warn("[Assets]AssetManager already initialized, did you load before calling this Asset.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let h=e.manifest;typeof h=="string"&&(h=await this.load(h)),this.resolver.addManifest(h)}const r=(o=(s=e.texturePreference)==null?void 0:s.resolution)!=null?o:1,n=typeof r=="number"?[r]:r;let i=[];if((u=e.texturePreference)!=null&&u.format){const h=(c=e.texturePreference)==null?void 0:c.format;i=typeof h=="string"?[h]:h;for(const f of this._detections)await f.test()||(i=await f.remove(i))}else for(const h of this._detections)await h.test()&&(i=await h.add(i));this.resolver.prefer({params:{format:i,resolution:n}}),e.preferences&&this.setPreferences(e.preferences)}add(e,r,n){this.resolver.add(e,r,n)}async load(e,r){this._initialized||await this.init();const n=id(e),i=Pi(e).map(u=>typeof u!="string"?(this.resolver.add(u.src,u),u.src):(this.resolver.hasKey(u)||this.resolver.add(u,u),u)),s=this.resolver.resolve(i),o=await this._mapLoadToResolve(s,r);return n?o[i[0]]:o}addBundle(e,r){this.resolver.addBundle(e,r)}async loadBundle(e,r){this._initialized||await this.init();let n=!1;typeof e=="string"&&(n=!0,e=[e]);const i=this.resolver.resolveBundle(e),s={},o=Object.keys(i);let u=0,c=0;const h=()=>{r==null||r(++u/c)},f=o.map(p=>{const g=i[p];return c+=Object.keys(g).length,this._mapLoadToResolve(g,h).then(v=>{s[p]=v})});return await Promise.all(f),n?s[e[0]]:s}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const r=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(r))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const r=this.resolver.resolveBundle(e);Object.values(r).forEach(n=>{this._backgroundLoader.add(Object.values(n))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return pl.get(e);const r={};for(let n=0;n<e.length;n++)r[n]=pl.get(e[n]);return r}async _mapLoadToResolve(e,r){const n=Object.values(e),i=Object.keys(e);this._backgroundLoader.active=!1;const s=await this.loader.load(n,r);this._backgroundLoader.active=!0;const o={};return n.forEach((u,c)=>{const h=s[u.src],f=[u.src];u.alias&&f.push(...u.alias),o[i[c]]=h,pl.set(f,h)}),o}async unload(e){this._initialized||await this.init();const r=Pi(e).map(i=>typeof i!="string"?i.src:i),n=this.resolver.resolve(r);await this._unloadFromResolved(n)}async unloadBundle(e){this._initialized||await this.init(),e=Pi(e);const r=this.resolver.resolveBundle(e),n=Object.keys(r).map(i=>this._unloadFromResolved(r[i]));await Promise.all(n)}async _unloadFromResolved(e){const r=Object.values(e);r.forEach(n=>{pl.remove(n.src)}),await this.loader.unload(r)}get detections(){return this._detections}get preferWorkers(){return Xd.config.preferWorkers}set preferWorkers(e){Ae("7.2.0","Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."),this.setPreferences({preferWorkers:e})}setPreferences(e){this.loader.parsers.forEach(r=>{!r.config||Object.keys(r.config).filter(n=>n in e).forEach(n=>{r.config[n]=e[n]})})}}const Vc=new pI;me.handleByList(oe.LoadParser,Vc.loader.parsers).handleByList(oe.ResolveParser,Vc.resolver.parsers).handleByList(oe.CacheParser,Vc.cache.parsers).handleByList(oe.DetectionParser,Vc.detections);const mI={extension:oe.CacheParser,test:t=>Array.isArray(t)&&t.every(e=>e instanceof te),getCacheableAssets:(t,e)=>{const r={};return t.forEach(n=>{e.forEach((i,s)=>{r[n+(s===0?"":s+1)]=i})}),r}};me.add(mI);const gI={extension:{type:oe.DetectionParser,priority:1},test:async()=>{if(!globalThis.createImageBitmap)return!1;const t="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=",e=await ee.ADAPTER.fetch(t).then(r=>r.blob());return createImageBitmap(e).then(()=>!0,()=>!1)},add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")};me.add(gI);const yI={extension:{type:oe.DetectionParser,priority:0},test:async()=>{if(!globalThis.createImageBitmap)return!1;const t="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",e=await ee.ADAPTER.fetch(t).then(r=>r.blob());return createImageBitmap(e).then(()=>!0,()=>!1)},add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};me.add(yI);const d_=["png","jpg","jpeg"],vI={extension:{type:oe.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...d_],remove:async t=>t.filter(e=>!d_.includes(e))};me.add(vI);const xI={extension:oe.ResolveParser,test:Xd.test,parse:t=>{var e,r;return{resolution:parseFloat((r=(e=ee.RETINA_PREFIX.exec(t))==null?void 0:e[1])!=null?r:"1"),format:t.split(".").pop(),src:t}}};me.add(xI);const _I=[".xml",".fnt"],TI={extension:{type:oe.LoadParser,priority:li.Normal},name:"loadBitmapFont",test(t){return _I.includes(nr.extname(t).toLowerCase())},async testParse(t){return Th.test(t)||$g.test(t)},async parse(t,e,r){const n=Th.test(t)?Th.parse(t):$g.parse(t),{src:i}=e,{page:s}=n,o=[];for(let h=0;h<s.length;++h){const f=s[h].file;let p=nr.join(nr.dirname(i),f);p=Vg(p,i),o.push(p)}const u=await r.load(o),c=o.map(h=>u[h]);return yr.install(n,c,!0)},async load(t,e){return(await ee.ADAPTER.fetch(t)).text()},unload(t){t.destroy()}};me.add(TI);const sd={build(t){const e=t.points;let r,n,i,s,o,u;if(t.type===Vt.CIRC){const x=t.shape;r=x.x,n=x.y,o=u=x.radius,i=s=0}else if(t.type===Vt.ELIP){const x=t.shape;r=x.x,n=x.y,o=x.width,u=x.height,i=s=0}else{const x=t.shape,S=x.width/2,E=x.height/2;r=x.x+S,n=x.y+E,o=u=Math.max(0,Math.min(x.radius,Math.min(S,E))),i=S-o,s=E-u}if(!(o>=0&&u>=0&&i>=0&&s>=0)){e.length=0;return}const c=Math.ceil(2.3*Math.sqrt(o+u)),h=c*8+(i?4:0)+(s?4:0);if(e.length=h,h===0)return;if(c===0){e.length=8,e[0]=e[6]=r+i,e[1]=e[3]=n+s,e[2]=e[4]=r-i,e[5]=e[7]=n-s;return}let f=0,p=c*4+(i?2:0)+2,g=p,v=h;{const x=i+o,S=s,E=r+x,w=r-x,b=n+S;if(e[f++]=E,e[f++]=b,e[--p]=b,e[--p]=w,s){const T=n-S;e[g++]=w,e[g++]=T,e[--v]=T,e[--v]=E}}for(let x=1;x<c;x++){const S=Math.PI/2*(x/c),E=i+Math.cos(S)*o,w=s+Math.sin(S)*u,b=r+E,T=r-E,A=n+w,P=n-w;e[f++]=b,e[f++]=A,e[--p]=A,e[--p]=T,e[g++]=T,e[g++]=P,e[--v]=P,e[--v]=b}{const x=i,S=s+u,E=r+x,w=r-x,b=n+S,T=n-S;e[f++]=E,e[f++]=b,e[--v]=T,e[--v]=E,i&&(e[f++]=w,e[f++]=b,e[--v]=T,e[--v]=w)}},triangulate(t,e){const r=t.points,n=e.points,i=e.indices;if(r.length===0)return;let s=n.length/2;const o=s;let u,c;if(t.type!==Vt.RREC){const f=t.shape;u=f.x,c=f.y}else{const f=t.shape;u=f.x+f.width/2,c=f.y+f.height/2}const h=t.matrix;n.push(t.matrix?h.a*u+h.c*c+h.tx:u,t.matrix?h.b*u+h.d*c+h.ty:c),s++,n.push(r[0],r[1]);for(let f=2;f<r.length;f+=2)n.push(r[f],r[f+1]),i.push(s++,o,s);i.push(o+1,o,s)}};function f_(t,e=!1){const r=t.length;if(r<6)return;let n=0;for(let i=0,s=t[r-2],o=t[r-1];i<r;i+=2){const u=t[i],c=t[i+1];n+=(u-s)*(c+o),s=u,o=c}if(!e&&n>0||e&&n<=0){const i=r/2;for(let s=i+i%2;s<r;s+=2){const o=r-s-2,u=r-s-1,c=s,h=s+1;[t[o],t[c]]=[t[c],t[o]],[t[u],t[h]]=[t[h],t[u]]}}}const Sw={build(t){t.points=t.shape.points.slice()},triangulate(t,e){let r=t.points;const n=t.holes,i=e.points,s=e.indices;if(r.length>=6){f_(r,!1);const o=[];for(let h=0;h<n.length;h++){const f=n[h];f_(f.points,!0),o.push(r.length/2),r=r.concat(f.points)}const u=ay.exports(r,o,2);if(!u)return;const c=i.length/2;for(let h=0;h<u.length;h+=3)s.push(u[h]+c),s.push(u[h+1]+c),s.push(u[h+2]+c);for(let h=0;h<r.length;h++)i.push(r[h])}}},bI={build(t){const e=t.shape,r=e.x,n=e.y,i=e.width,s=e.height,o=t.points;o.length=0,i>=0&&s>=0&&o.push(r,n,r+i,n,r+i,n+s,r,n+s)},triangulate(t,e){const r=t.points,n=e.points;if(r.length===0)return;const i=n.length/2;n.push(r[0],r[1],r[2],r[3],r[6],r[7],r[4],r[5]),e.indices.push(i,i+1,i+2,i+1,i+2,i+3)}},wI={build(t){sd.build(t)},triangulate(t,e){sd.triangulate(t,e)}};var xn=(t=>(t.MITER="miter",t.BEVEL="bevel",t.ROUND="round",t))(xn||{}),qs=(t=>(t.BUTT="butt",t.ROUND="round",t.SQUARE="square",t))(qs||{});const Aa={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount(t,e=20){if(!this.adaptive||!t||isNaN(t))return e;let r=Math.ceil(t/this.maxLength);return r<this.minSegments?r=this.minSegments:r>this.maxSegments&&(r=this.maxSegments),r}};class p_{static curveTo(e,r,n,i,s,o){const u=o[o.length-2],h=o[o.length-1]-r,f=u-e,p=i-r,g=n-e,v=Math.abs(h*g-f*p);if(v<1e-8||s===0)return(o[o.length-2]!==e||o[o.length-1]!==r)&&o.push(e,r),null;const x=h*h+f*f,S=p*p+g*g,E=h*p+f*g,w=s*Math.sqrt(x)/v,b=s*Math.sqrt(S)/v,T=w*E/x,A=b*E/S,P=w*g+b*f,O=w*p+b*h,D=f*(b+T),M=h*(b+T),H=g*(w+A),X=p*(w+A),Y=Math.atan2(M-O,D-P),ie=Math.atan2(X-O,H-P);return{cx:P+e,cy:O+r,radius:s,startAngle:Y,endAngle:ie,anticlockwise:f*p>g*h}}static arc(e,r,n,i,s,o,u,c,h){const f=u-o,p=Aa._segmentsCount(Math.abs(f)*s,Math.ceil(Math.abs(f)/td)*40),g=f/(p*2),v=g*2,x=Math.cos(g),S=Math.sin(g),E=p-1,w=E%1/E;for(let b=0;b<=E;++b){const T=b+w*b,A=g+o+v*T,P=Math.cos(A),O=-Math.sin(A);h.push((x*P+S*O)*s+n,(x*-O+S*P)*s+i)}}}class SI{constructor(){this.reset()}begin(e,r,n){this.reset(),this.style=e,this.start=r,this.attribStart=n}end(e,r){this.attribSize=r-this.attribStart,this.size=e-this.start}reset(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0}}class fy{static curveLength(e,r,n,i,s,o,u,c){let f=0,p=0,g=0,v=0,x=0,S=0,E=0,w=0,b=0,T=0,A=0,P=e,O=r;for(let D=1;D<=10;++D)p=D/10,g=p*p,v=g*p,x=1-p,S=x*x,E=S*x,w=E*e+3*S*p*n+3*x*g*s+v*u,b=E*r+3*S*p*i+3*x*g*o+v*c,T=P-w,A=O-b,P=w,O=b,f+=Math.sqrt(T*T+A*A);return f}static curveTo(e,r,n,i,s,o,u){const c=u[u.length-2],h=u[u.length-1];u.length-=2;const f=Aa._segmentsCount(fy.curveLength(c,h,e,r,n,i,s,o));let p=0,g=0,v=0,x=0,S=0;u.push(c,h);for(let E=1,w=0;E<=f;++E)w=E/f,p=1-w,g=p*p,v=g*p,x=w*w,S=x*w,u.push(v*c+3*g*w*e+3*p*x*n+S*s,v*h+3*g*w*r+3*p*x*i+S*o)}}function m_(t,e,r,n,i,s,o,u){const c=t-r*i,h=e-n*i,f=t+r*s,p=e+n*s;let g,v;o?(g=n,v=-r):(g=-n,v=r);const x=c+g,S=h+v,E=f+g,w=p+v;return u.push(x,S,E,w),2}function zs(t,e,r,n,i,s,o,u){const c=r-t,h=n-e;let f=Math.atan2(c,h),p=Math.atan2(i-t,s-e);u&&f<p?f+=Math.PI*2:!u&&f>p&&(p+=Math.PI*2);let g=f;const v=p-f,x=Math.abs(v),S=Math.sqrt(c*c+h*h),E=(15*x*Math.sqrt(S)/Math.PI>>0)+1,w=v/E;if(g+=w,u){o.push(t,e,r,n);for(let b=1,T=g;b<E;b++,T+=w)o.push(t,e,t+Math.sin(T)*S,e+Math.cos(T)*S);o.push(t,e,i,s)}else{o.push(r,n,t,e);for(let b=1,T=g;b<E;b++,T+=w)o.push(t+Math.sin(T)*S,e+Math.cos(T)*S,t,e);o.push(i,s,t,e)}return E*2}function EI(t,e){const r=t.shape;let n=t.points||r.points.slice();const i=e.closePointEps;if(n.length===0)return;const s=t.lineStyle,o=new we(n[0],n[1]),u=new we(n[n.length-2],n[n.length-1]),c=r.type!==Vt.POLY||r.closeStroke,h=Math.abs(o.x-u.x)<i&&Math.abs(o.y-u.y)<i;if(c){n=n.slice(),h&&(n.pop(),n.pop(),u.set(n[n.length-2],n[n.length-1]));const z=(o.x+u.x)*.5,R=(u.y+o.y)*.5;n.unshift(z,R),n.push(z,R)}const f=e.points,p=n.length/2;let g=n.length;const v=f.length/2,x=s.width/2,S=x*x,E=s.miterLimit*s.miterLimit;let w=n[0],b=n[1],T=n[2],A=n[3],P=0,O=0,D=-(b-A),M=w-T,H=0,X=0,Y=Math.sqrt(D*D+M*M);D/=Y,M/=Y,D*=x,M*=x;const ie=s.alignment,W=(1-ie)*2,U=ie*2;c||(s.cap===qs.ROUND?g+=zs(w-D*(W-U)*.5,b-M*(W-U)*.5,w-D*W,b-M*W,w+D*U,b+M*U,f,!0)+2:s.cap===qs.SQUARE&&(g+=m_(w,b,D,M,W,U,!0,f))),f.push(w-D*W,b-M*W,w+D*U,b+M*U);for(let z=1;z<p-1;++z){w=n[(z-1)*2],b=n[(z-1)*2+1],T=n[z*2],A=n[z*2+1],P=n[(z+1)*2],O=n[(z+1)*2+1],D=-(b-A),M=w-T,Y=Math.sqrt(D*D+M*M),D/=Y,M/=Y,D*=x,M*=x,H=-(A-O),X=T-P,Y=Math.sqrt(H*H+X*X),H/=Y,X/=Y,H*=x,X*=x;const R=T-w,L=b-A,k=T-P,Q=O-A,ne=R*k+L*Q,Se=L*k-Q*R,Te=Se<0;if(Math.abs(Se)<.001*Math.abs(ne)){f.push(T-D*W,A-M*W,T+D*U,A+M*U),ne>=0&&(s.join===xn.ROUND?g+=zs(T,A,T-D*W,A-M*W,T-H*W,A-X*W,f,!1)+4:g+=2,f.push(T-H*U,A-X*U,T+H*W,A+X*W));continue}const Be=(-D+w)*(-M+A)-(-D+T)*(-M+b),Pe=(-H+P)*(-X+A)-(-H+T)*(-X+O),Le=(R*Pe-k*Be)/Se,kt=(Q*Be-L*Pe)/Se,Ut=(Le-T)*(Le-T)+(kt-A)*(kt-A),ht=T+(Le-T)*W,Re=A+(kt-A)*W,Qe=T-(Le-T)*U,Ne=A-(kt-A)*U,Br=Math.min(R*R+L*L,k*k+Q*Q),Ur=Te?W:U,Is=Br+Ur*Ur*S,tf=Ut<=Is;let vo=s.join;if(vo===xn.MITER&&Ut/S>E&&(vo=xn.BEVEL),tf)switch(vo){case xn.MITER:{f.push(ht,Re,Qe,Ne);break}case xn.BEVEL:{Te?f.push(ht,Re,T+D*U,A+M*U,ht,Re,T+H*U,A+X*U):f.push(T-D*W,A-M*W,Qe,Ne,T-H*W,A-X*W,Qe,Ne),g+=2;break}case xn.ROUND:{Te?(f.push(ht,Re,T+D*U,A+M*U),g+=zs(T,A,T+D*U,A+M*U,T+H*U,A+X*U,f,!0)+4,f.push(ht,Re,T+H*U,A+X*U)):(f.push(T-D*W,A-M*W,Qe,Ne),g+=zs(T,A,T-D*W,A-M*W,T-H*W,A-X*W,f,!1)+4,f.push(T-H*W,A-X*W,Qe,Ne));break}}else{switch(f.push(T-D*W,A-M*W,T+D*U,A+M*U),vo){case xn.MITER:{Te?f.push(Qe,Ne,Qe,Ne):f.push(ht,Re,ht,Re),g+=2;break}case xn.ROUND:{Te?g+=zs(T,A,T+D*U,A+M*U,T+H*U,A+X*U,f,!0)+2:g+=zs(T,A,T-D*W,A-M*W,T-H*W,A-X*W,f,!1)+2;break}}f.push(T-H*W,A-X*W,T+H*U,A+X*U),g+=2}}w=n[(p-2)*2],b=n[(p-2)*2+1],T=n[(p-1)*2],A=n[(p-1)*2+1],D=-(b-A),M=w-T,Y=Math.sqrt(D*D+M*M),D/=Y,M/=Y,D*=x,M*=x,f.push(T-D*W,A-M*W,T+D*U,A+M*U),c||(s.cap===qs.ROUND?g+=zs(T-D*(W-U)*.5,A-M*(W-U)*.5,T-D*W,A-M*W,T+D*U,A+M*U,f,!1)+2:s.cap===qs.SQUARE&&(g+=m_(T,A,D,M,W,U,!1,f)));const fe=e.indices,xe=Aa.epsilon*Aa.epsilon;for(let z=v;z<g+v-2;++z)w=f[z*2],b=f[z*2+1],T=f[(z+1)*2],A=f[(z+1)*2+1],P=f[(z+2)*2],O=f[(z+2)*2+1],!(Math.abs(w*(A-O)+T*(O-b)+P*(b-A))<xe)&&fe.push(z,z+1,z+2)}function CI(t,e){let r=0;const n=t.shape,i=t.points||n.points,s=n.type!==Vt.POLY||n.closeStroke;if(i.length===0)return;const o=e.points,u=e.indices,c=i.length/2,h=o.length/2;let f=h;for(o.push(i[0],i[1]),r=1;r<c;r++)o.push(i[r*2],i[r*2+1]),u.push(f,f+1),f++;s&&u.push(f,h)}function g_(t,e){t.lineStyle.native?CI(t,e):EI(t,e)}class py{static curveLength(e,r,n,i,s,o){const u=e-2*n+s,c=r-2*i+o,h=2*n-2*e,f=2*i-2*r,p=4*(u*u+c*c),g=4*(u*h+c*f),v=h*h+f*f,x=2*Math.sqrt(p+g+v),S=Math.sqrt(p),E=2*p*S,w=2*Math.sqrt(v),b=g/S;return(E*x+S*g*(x-w)+(4*v*p-g*g)*Math.log((2*S+b+x)/(b+w)))/(4*E)}static curveTo(e,r,n,i,s){const o=s[s.length-2],u=s[s.length-1],c=Aa._segmentsCount(py.curveLength(o,u,e,r,n,i));let h=0,f=0;for(let p=1;p<=c;++p){const g=p/c;h=o+(e-o)*g,f=u+(r-u)*g,s.push(h+(e+(n-e)*g-h)*g,f+(r+(i-r)*g-f)*g)}}}const fm={[Vt.POLY]:Sw,[Vt.CIRC]:sd,[Vt.ELIP]:sd,[Vt.RECT]:bI,[Vt.RREC]:wI},y_=[],Wc=[];class od{constructor(e,r=null,n=null,i=null){this.points=[],this.holes=[],this.shape=e,this.lineStyle=n,this.fillStyle=r,this.matrix=i,this.type=e.type}clone(){return new od(this.shape,this.fillStyle,this.lineStyle,this.matrix)}destroy(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null}}const Lo=new we,Ew=class extends Fb{constructor(){super(),this.closePointEps=1e-4,this.boundsPadding=0,this.uvsFloat32=null,this.indicesUint16=null,this.batchable=!1,this.points=[],this.colors=[],this.uvs=[],this.indices=[],this.textureIds=[],this.graphicsData=[],this.drawCalls=[],this.batchDirty=-1,this.batches=[],this.dirty=0,this.cacheDirty=-1,this.clearDirty=0,this.shapeIndex=0,this._bounds=new rd,this.boundsDirty=-1}get bounds(){return this.updateBatches(),this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds}invalidate(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(let t=0;t<this.drawCalls.length;t++)this.drawCalls[t].texArray.clear(),Wc.push(this.drawCalls[t]);this.drawCalls.length=0;for(let t=0;t<this.batches.length;t++){const e=this.batches[t];e.reset(),y_.push(e)}this.batches.length=0}clear(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this}drawShape(t,e=null,r=null,n=null){const i=new od(t,e,r,n);return this.graphicsData.push(i),this.dirty++,this}drawHole(t,e=null){if(!this.graphicsData.length)return null;const r=new od(t,null,null,e),n=this.graphicsData[this.graphicsData.length-1];return r.lineStyle=n.lineStyle,n.holes.push(r),this.dirty++,this}destroy(){super.destroy();for(let t=0;t<this.graphicsData.length;++t)this.graphicsData[t].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null}containsPoint(t){const e=this.graphicsData;for(let r=0;r<e.length;++r){const n=e[r];if(!!n.fillStyle.visible&&n.shape&&(n.matrix?n.matrix.applyInverse(t,Lo):Lo.copyFrom(t),n.shape.contains(Lo.x,Lo.y))){let i=!1;if(n.holes){for(let s=0;s<n.holes.length;s++)if(n.holes[s].shape.contains(Lo.x,Lo.y)){i=!0;break}}if(!i)return!0}}return!1}updateBatches(){if(!this.graphicsData.length){this.batchable=!0;return}if(!this.validateBatching())return;this.cacheDirty=this.dirty;const t=this.uvs,e=this.graphicsData;let r=null,n=null;this.batches.length>0&&(r=this.batches[this.batches.length-1],n=r.style);for(let u=this.shapeIndex;u<e.length;u++){this.shapeIndex++;const c=e[u],h=c.fillStyle,f=c.lineStyle;fm[c.type].build(c),c.matrix&&this.transformPoints(c.points,c.matrix),(h.visible||f.visible)&&this.processHoles(c.holes);for(let g=0;g<2;g++){const v=g===0?h:f;if(!v.visible)continue;const x=v.texture.baseTexture,S=this.indices.length,E=this.points.length/2;x.wrapMode=Ai.REPEAT,g===0?this.processFill(c):this.processLine(c);const w=this.points.length/2-E;w!==0&&(r&&!this._compareStyles(n,v)&&(r.end(S,E),r=null),r||(r=y_.pop()||new SI,r.begin(v,S,E),this.batches.push(r),n=v),this.addUvs(this.points,t,v.texture,E,w,v.matrix))}}const i=this.indices.length,s=this.points.length/2;if(r&&r.end(i,s),this.batches.length===0){this.batchable=!0;return}const o=s>65535;this.indicesUint16&&this.indices.length===this.indicesUint16.length&&o===this.indicesUint16.BYTES_PER_ELEMENT>2?this.indicesUint16.set(this.indices):this.indicesUint16=o?new Uint32Array(this.indices):new Uint16Array(this.indices),this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}_compareStyles(t,e){return!(!t||!e||t.texture.baseTexture!==e.texture.baseTexture||t.color+t.alpha!==e.color+e.alpha||!!t.native!=!!e.native)}validateBatching(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(let t=0,e=this.graphicsData.length;t<e;t++){const r=this.graphicsData[t],n=r.fillStyle,i=r.lineStyle;if(n&&!n.texture.baseTexture.valid||i&&!i.texture.baseTexture.valid)return!1}return!0}packBatches(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);const t=this.batches;for(let e=0,r=t.length;e<r;e++){const n=t[e];for(let i=0;i<n.size;i++){const s=n.start+i;this.indicesUint16[s]=this.indicesUint16[s]-n.attribStart}}}isBatchable(){if(this.points.length>65535*2)return!1;const t=this.batches;for(let e=0;e<t.length;e++)if(t[e].style.native)return!1;return this.points.length<Ew.BATCHABLE_SIZE*2}buildDrawCalls(){let t=++be._globalBatch;for(let f=0;f<this.drawCalls.length;f++)this.drawCalls[f].texArray.clear(),Wc.push(this.drawCalls[f]);this.drawCalls.length=0;const e=this.colors,r=this.textureIds;let n=Wc.pop();n||(n=new Ng,n.texArray=new Fg),n.texArray.count=0,n.start=0,n.size=0,n.type=Sn.TRIANGLES;let i=0,s=null,o=0,u=!1,c=Sn.TRIANGLES,h=0;this.drawCalls.push(n);for(let f=0;f<this.batches.length;f++){const p=this.batches[f],g=8,v=p.style,x=v.texture.baseTexture;u!==!!v.native&&(u=!!v.native,c=u?Sn.LINES:Sn.TRIANGLES,s=null,i=g,t++),s!==x&&(s=x,x._batchEnabled!==t&&(i===g&&(t++,i=0,n.size>0&&(n=Wc.pop(),n||(n=new Ng,n.texArray=new Fg),this.drawCalls.push(n)),n.start=h,n.size=0,n.texArray.count=0,n.type=c),x.touched=1,x._batchEnabled=t,x._batchLocation=i,x.wrapMode=Ai.REPEAT,n.texArray.elements[n.texArray.count++]=x,i++)),n.size+=p.size,h+=p.size,o=x._batchLocation,this.addColors(e,v.color,v.alpha,p.attribSize,p.attribStart),this.addTextureIds(r,o,p.attribSize,p.attribStart)}be._globalBatch=t,this.packAttributes()}packAttributes(){const t=this.points,e=this.uvs,r=this.colors,n=this.textureIds,i=new ArrayBuffer(t.length*3*4),s=new Float32Array(i),o=new Uint32Array(i);let u=0;for(let c=0;c<t.length/2;c++)s[u++]=t[c*2],s[u++]=t[c*2+1],s[u++]=e[c*2],s[u++]=e[c*2+1],o[u++]=r[c],s[u++]=n[c];this._buffer.update(i),this._indexBuffer.update(this.indicesUint16)}processFill(t){t.holes.length?Sw.triangulate(t,this):fm[t.type].triangulate(t,this)}processLine(t){g_(t,this);for(let e=0;e<t.holes.length;e++)g_(t.holes[e],this)}processHoles(t){for(let e=0;e<t.length;e++){const r=t[e];fm[r.type].build(r),r.matrix&&this.transformPoints(r.points,r.matrix)}}calculateBounds(){const t=this._bounds;t.clear(),t.addVertexData(this.points,0,this.points.length),t.pad(this.boundsPadding,this.boundsPadding)}transformPoints(t,e){for(let r=0;r<t.length/2;r++){const n=t[r*2],i=t[r*2+1];t[r*2]=e.a*n+e.c*i+e.tx,t[r*2+1]=e.b*n+e.d*i+e.ty}}addColors(t,e,r,n,i=0){const s=Ge.shared.setValue(e).toLittleEndianNumber(),o=Ge.shared.setValue(s).toPremultiplied(r);t.length=Math.max(t.length,i+n);for(let u=0;u<n;u++)t[i+u]=o}addTextureIds(t,e,r,n=0){t.length=Math.max(t.length,n+r);for(let i=0;i<r;i++)t[n+i]=e}addUvs(t,e,r,n,i,s=null){let o=0;const u=e.length,c=r.frame;for(;o<i;){let f=t[(n+o)*2],p=t[(n+o)*2+1];if(s){const g=s.a*f+s.c*p+s.tx;p=s.b*f+s.d*p+s.ty,f=g}o++,e.push(f/c.width,p/c.height)}const h=r.baseTexture;(c.width<h.width||c.height<h.height)&&this.adjustUvs(e,r,u,i)}adjustUvs(t,e,r,n){const i=e.baseTexture,s=1e-6,o=r+n*2,u=e.frame,c=u.width/i.width,h=u.height/i.height;let f=u.x/u.width,p=u.y/u.height,g=Math.floor(t[r]+s),v=Math.floor(t[r+1]+s);for(let x=r+2;x<o;x+=2)g=Math.min(g,Math.floor(t[x]+s)),v=Math.min(v,Math.floor(t[x+1]+s));f-=g,p-=v;for(let x=r;x<o;x+=2)t[x]=(t[x]+f)*c,t[x+1]=(t[x+1]+p)*h}};let Cw=Ew;Cw.BATCHABLE_SIZE=100;class Yd{constructor(){this.color=16777215,this.alpha=1,this.texture=te.WHITE,this.matrix=null,this.visible=!1,this.reset()}clone(){const e=new Yd;return e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.matrix=this.matrix,e.visible=this.visible,e}reset(){this.color=16777215,this.alpha=1,this.texture=te.WHITE,this.matrix=null,this.visible=!1}destroy(){this.texture=null,this.matrix=null}}class my extends Yd{constructor(){super(...arguments),this.width=0,this.alignment=.5,this.native=!1,this.cap=qs.BUTT,this.join=xn.MITER,this.miterLimit=10}clone(){const e=new my;return e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.matrix=this.matrix,e.visible=this.visible,e.width=this.width,e.alignment=this.alignment,e.native=this.native,e.cap=this.cap,e.join=this.join,e.miterLimit=this.miterLimit,e}reset(){super.reset(),this.color=0,this.alignment=.5,this.width=0,this.native=!1}}const pm={},wh=class extends je{constructor(t=null){super(),this.shader=null,this.pluginName="batch",this.currentPath=null,this.batches=[],this.batchTint=-1,this.batchDirty=-1,this.vertexData=null,this._fillStyle=new Yd,this._lineStyle=new my,this._matrix=null,this._holeMode=!1,this.state=Bi.for2d(),this._geometry=t||new Cw,this._geometry.refCount++,this._transformID=-1,this._tintColor=new Ge(16777215),this.blendMode=pe.NORMAL}get geometry(){return this._geometry}clone(){return this.finishPoly(),new wh(this._geometry)}set blendMode(t){this.state.blendMode=t}get blendMode(){return this.state.blendMode}get tint(){return this._tintColor.value}set tint(t){this._tintColor.setValue(t)}get fill(){return this._fillStyle}get line(){return this._lineStyle}lineStyle(t=null,e=0,r,n=.5,i=!1){return typeof t=="number"&&(t={width:t,color:e,alpha:r,alignment:n,native:i}),this.lineTextureStyle(t)}lineTextureStyle(t){const e={width:0,texture:te.WHITE,color:t!=null&&t.texture?16777215:0,matrix:null,alignment:.5,native:!1,cap:qs.BUTT,join:xn.MITER,miterLimit:10};t=Object.assign(e,t),this.normalizeColor(t),this.currentPath&&this.startPoly();const r=t.width>0&&t.alpha>0;return r?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._lineStyle,{visible:r},t)):this._lineStyle.reset(),this}startPoly(){if(this.currentPath){const t=this.currentPath.points,e=this.currentPath.points.length;e>2&&(this.drawShape(this.currentPath),this.currentPath=new ya,this.currentPath.closeStroke=!1,this.currentPath.points.push(t[e-2],t[e-1]))}else this.currentPath=new ya,this.currentPath.closeStroke=!1}finishPoly(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)}moveTo(t,e){return this.startPoly(),this.currentPath.points[0]=t,this.currentPath.points[1]=e,this}lineTo(t,e){this.currentPath||this.moveTo(0,0);const r=this.currentPath.points,n=r[r.length-2],i=r[r.length-1];return(n!==t||i!==e)&&r.push(t,e),this}_initCurve(t=0,e=0){this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[t,e]):this.moveTo(t,e)}quadraticCurveTo(t,e,r,n){this._initCurve();const i=this.currentPath.points;return i.length===0&&this.moveTo(0,0),py.curveTo(t,e,r,n,i),this}bezierCurveTo(t,e,r,n,i,s){return this._initCurve(),fy.curveTo(t,e,r,n,i,s,this.currentPath.points),this}arcTo(t,e,r,n,i){this._initCurve(t,e);const s=this.currentPath.points,o=p_.curveTo(t,e,r,n,i,s);if(o){const{cx:u,cy:c,radius:h,startAngle:f,endAngle:p,anticlockwise:g}=o;this.arc(u,c,h,f,p,g)}return this}arc(t,e,r,n,i,s=!1){if(n===i)return this;if(!s&&i<=n?i+=td:s&&n<=i&&(n+=td),i-n===0)return this;const u=t+Math.cos(n)*r,c=e+Math.sin(n)*r,h=this._geometry.closePointEps;let f=this.currentPath?this.currentPath.points:null;if(f){const p=Math.abs(f[f.length-2]-u),g=Math.abs(f[f.length-1]-c);p<h&&g<h||f.push(u,c)}else this.moveTo(u,c),f=this.currentPath.points;return p_.arc(u,c,t,e,r,n,i,s,f),this}beginFill(t=0,e){return this.beginTextureFill({texture:te.WHITE,color:t,alpha:e})}normalizeColor(t){var r,n;const e=Ge.shared.setValue((r=t.color)!=null?r:0);t.color=e.toNumber(),(n=t.alpha)!=null||(t.alpha=e.alpha)}beginTextureFill(t){const e={texture:te.WHITE,color:16777215,matrix:null};t=Object.assign(e,t),this.normalizeColor(t),this.currentPath&&this.startPoly();const r=t.alpha>0;return r?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._fillStyle,{visible:r},t)):this._fillStyle.reset(),this}endFill(){return this.finishPoly(),this._fillStyle.reset(),this}drawRect(t,e,r,n){return this.drawShape(new Ee(t,e,r,n))}drawRoundedRect(t,e,r,n,i){return this.drawShape(new cy(t,e,r,n,i))}drawCircle(t,e,r){return this.drawShape(new ly(t,e,r))}drawEllipse(t,e,r,n){return this.drawShape(new uy(t,e,r,n))}drawPolygon(...t){let e,r=!0;const n=t[0];n.points?(r=n.closeStroke,e=n.points):Array.isArray(t[0])?e=t[0]:e=t;const i=new ya(e);return i.closeStroke=r,this.drawShape(i),this}drawShape(t){return this._holeMode?this._geometry.drawHole(t,this._matrix):this._geometry.drawShape(t,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this}clear(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this}isFastRect(){const t=this._geometry.graphicsData;return t.length===1&&t[0].shape.type===Vt.RECT&&!t[0].matrix&&!t[0].holes.length&&!(t[0].lineStyle.visible&&t[0].lineStyle.width)}_render(t){this.finishPoly();const e=this._geometry;e.updateBatches(),e.batchable?(this.batchDirty!==e.batchDirty&&this._populateBatches(),this._renderBatched(t)):(t.batch.flush(),this._renderDirect(t))}_populateBatches(){const t=this._geometry,e=this.blendMode,r=t.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=t.batchDirty,this.batches.length=r,this.vertexData=new Float32Array(t.points);for(let n=0;n<r;n++){const i=t.batches[n],s=i.style.color,o=new Float32Array(this.vertexData.buffer,i.attribStart*4*2,i.attribSize*2),u=new Float32Array(t.uvsFloat32.buffer,i.attribStart*4*2,i.attribSize*2),c=new Uint16Array(t.indicesUint16.buffer,i.start*2,i.size),h={vertexData:o,blendMode:e,indices:c,uvs:u,_batchRGB:Ge.shared.setValue(s).toRgbArray(),_tintRGB:s,_texture:i.style.texture,alpha:i.style.alpha,worldAlpha:1};this.batches[n]=h}}_renderBatched(t){if(!!this.batches.length){t.batch.setObjectRenderer(t.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(let e=0,r=this.batches.length;e<r;e++){const n=this.batches[e];n.worldAlpha=this.worldAlpha*n.alpha,t.plugins[this.pluginName].render(n)}}}_renderDirect(t){const e=this._resolveDirectShader(t),r=this._geometry,n=this.worldAlpha,i=e.uniforms,s=r.drawCalls;i.translationMatrix=this.transform.worldTransform,Ge.shared.setValue(this._tintColor).premultiply(n).toArray(i.tint),t.shader.bind(e),t.geometry.bind(r,e),t.state.set(this.state);for(let o=0,u=s.length;o<u;o++)this._renderDrawCallDirect(t,r.drawCalls[o])}_renderDrawCallDirect(t,e){const{texArray:r,type:n,size:i,start:s}=e,o=r.count;for(let u=0;u<o;u++)t.texture.bind(r.elements[u],u);t.geometry.draw(n,i,s)}_resolveDirectShader(t){let e=this.shader;const r=this.pluginName;if(!e){if(!pm[r]){const{maxTextures:n}=t.plugins[r],i=new Int32Array(n);for(let u=0;u<n;u++)i[u]=u;const s={tint:new Float32Array([1,1,1,1]),translationMatrix:new it,default:Mn.from({uSamplers:i},!0)},o=t.plugins[r]._shader.program;pm[r]=new ni(o,s)}e=pm[r]}return e}_calculateBounds(){this.finishPoly();const t=this._geometry;if(!t.graphicsData.length)return;const{minX:e,minY:r,maxX:n,maxY:i}=t.bounds;this._bounds.addFrame(this.transform,e,r,n,i)}containsPoint(t){return this.worldTransform.applyInverse(t,wh._TEMP_POINT),this._geometry.containsPoint(wh._TEMP_POINT)}calculateTints(){if(this.batchTint!==this.tint){this.batchTint=this._tintColor.toNumber();for(let t=0;t<this.batches.length;t++){const e=this.batches[t];e._tintRGB=Ge.shared.setValue(this._tintColor).multiply(e._batchRGB).toLittleEndianNumber()}}}calculateVertices(){const t=this.transform._worldID;if(this._transformID===t)return;this._transformID=t;const e=this.transform.worldTransform,r=e.a,n=e.b,i=e.c,s=e.d,o=e.tx,u=e.ty,c=this._geometry.points,h=this.vertexData;let f=0;for(let p=0;p<c.length;p+=2){const g=c[p],v=c[p+1];h[f++]=r*g+i*v+o,h[f++]=s*v+n*g+u}}closePath(){const t=this.currentPath;return t&&(t.closeStroke=!0,this.finishPoly()),this}setMatrix(t){return this._matrix=t,this}beginHole(){return this.finishPoly(),this._holeMode=!0,this}endHole(){return this.finishPoly(),this._holeMode=!1,this}destroy(t){this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,super.destroy(t)}};let nn=wh;nn.curves=Aa;nn._TEMP_POINT=new we;class AI extends Vd{constructor(e=100,r=100,n=10,i=10){super(),this.segWidth=n,this.segHeight=i,this.width=e,this.height=r,this.build()}build(){const e=this.segWidth*this.segHeight,r=[],n=[],i=[],s=this.segWidth-1,o=this.segHeight-1,u=this.width/s,c=this.height/o;for(let f=0;f<e;f++){const p=f%this.segWidth,g=f/this.segWidth|0;r.push(p*u,g*c),n.push(p/s,g/o)}const h=s*o;for(let f=0;f<h;f++){const p=f%s,g=f/s|0,v=g*this.segWidth+p,x=g*this.segWidth+p+1,S=(g+1)*this.segWidth+p,E=(g+1)*this.segWidth+p+1;i.push(v,x,S,x,E,S)}this.buffers[0].data=new Float32Array(r),this.buffers[1].data=new Float32Array(n),this.indexBuffer.data=new Uint16Array(i),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}}class PI extends Vd{constructor(e=200,r,n=0){super(new Float32Array(r.length*4),new Float32Array(r.length*4),new Uint16Array((r.length-1)*6)),this.points=r,this._width=e,this.textureScale=n,this.build()}get width(){return this._width}build(){const e=this.points;if(!e)return;const r=this.getBuffer("aVertexPosition"),n=this.getBuffer("aTextureCoord"),i=this.getIndex();if(e.length<1)return;r.data.length/4!==e.length&&(r.data=new Float32Array(e.length*4),n.data=new Float32Array(e.length*4),i.data=new Uint16Array((e.length-1)*6));const s=n.data,o=i.data;s[0]=0,s[1]=0,s[2]=0,s[3]=1;let u=0,c=e[0];const h=this._width*this.textureScale,f=e.length;for(let g=0;g<f;g++){const v=g*4;if(this.textureScale>0){const x=c.x-e[g].x,S=c.y-e[g].y,E=Math.sqrt(x*x+S*S);c=e[g],u+=E/h}else u=g/(f-1);s[v]=u,s[v+1]=0,s[v+2]=u,s[v+3]=1}let p=0;for(let g=0;g<f-1;g++){const v=g*2;o[p++]=v,o[p++]=v+1,o[p++]=v+2,o[p++]=v+2,o[p++]=v+1,o[p++]=v+3}n.update(),i.update(),this.updateVertices()}updateVertices(){const e=this.points;if(e.length<1)return;let r=e[0],n,i=0,s=0;const o=this.buffers[0].data,u=e.length,c=this.textureScale>0?this.textureScale*this._width/2:this._width/2;for(let h=0;h<u;h++){const f=e[h],p=h*4;h<e.length-1?n=e[h+1]:n=f,s=-(n.x-r.x),i=n.y-r.y;const g=Math.sqrt(i*i+s*s);g<1e-6?(i=0,s=0):(i/=g,s/=g,i*=c,s*=c),o[p]=f.x+i,o[p+1]=f.y+s,o[p+2]=f.x-i,o[p+3]=f.y-s,r=f}this.buffers[0].update()}update(){this.textureScale>0?this.build():this.updateVertices()}}class II extends Ca{constructor(e,r,n){const i=new AI(e.width,e.height,r,n),s=new cu(te.WHITE);super(i,s),this.texture=e,this.autoResize=!0}textureUpdated(){this._textureID=this.shader.texture._updateID;const e=this.geometry,{width:r,height:n}=this.shader.texture;this.autoResize&&(e.width!==r||e.height!==n)&&(e.width=this.shader.texture.width,e.height=this.shader.texture.height,e.build())}set texture(e){this.shader.texture!==e&&(this.shader.texture=e,this._textureID=-1,e.baseTexture.valid?this.textureUpdated():e.once("update",this.textureUpdated,this))}get texture(){return this.shader.texture}_render(e){this._textureID!==this.shader.texture._updateID&&this.textureUpdated(),super._render(e)}destroy(e){this.shader.texture.off("update",this.textureUpdated,this),super.destroy(e)}}const Xc=10;class RI extends II{constructor(e,r,n,i,s){var o,u,c,h,f,p,g,v;super(te.WHITE,4,4),this._origWidth=e.orig.width,this._origHeight=e.orig.height,this._width=this._origWidth,this._height=this._origHeight,this._leftWidth=(u=r!=null?r:(o=e.defaultBorders)==null?void 0:o.left)!=null?u:Xc,this._rightWidth=(h=i!=null?i:(c=e.defaultBorders)==null?void 0:c.right)!=null?h:Xc,this._topHeight=(p=n!=null?n:(f=e.defaultBorders)==null?void 0:f.top)!=null?p:Xc,this._bottomHeight=(v=s!=null?s:(g=e.defaultBorders)==null?void 0:g.bottom)!=null?v:Xc,this.texture=e}textureUpdated(){this._textureID=this.shader.texture._updateID,this._refresh()}get vertices(){return this.geometry.getBuffer("aVertexPosition").data}set vertices(e){this.geometry.getBuffer("aVertexPosition").data=e}updateHorizontalVertices(){const e=this.vertices,r=this._getMinScale();e[9]=e[11]=e[13]=e[15]=this._topHeight*r,e[17]=e[19]=e[21]=e[23]=this._height-this._bottomHeight*r,e[25]=e[27]=e[29]=e[31]=this._height}updateVerticalVertices(){const e=this.vertices,r=this._getMinScale();e[2]=e[10]=e[18]=e[26]=this._leftWidth*r,e[4]=e[12]=e[20]=e[28]=this._width-this._rightWidth*r,e[6]=e[14]=e[22]=e[30]=this._width}_getMinScale(){const e=this._leftWidth+this._rightWidth,r=this._width>e?1:this._width/e,n=this._topHeight+this._bottomHeight,i=this._height>n?1:this._height/n;return Math.min(r,i)}get width(){return this._width}set width(e){this._width=e,this._refresh()}get height(){return this._height}set height(e){this._height=e,this._refresh()}get leftWidth(){return this._leftWidth}set leftWidth(e){this._leftWidth=e,this._refresh()}get rightWidth(){return this._rightWidth}set rightWidth(e){this._rightWidth=e,this._refresh()}get topHeight(){return this._topHeight}set topHeight(e){this._topHeight=e,this._refresh()}get bottomHeight(){return this._bottomHeight}set bottomHeight(e){this._bottomHeight=e,this._refresh()}_refresh(){const e=this.texture,r=this.geometry.buffers[1].data;this._origWidth=e.orig.width,this._origHeight=e.orig.height;const n=1/this._origWidth,i=1/this._origHeight;r[0]=r[8]=r[16]=r[24]=0,r[1]=r[3]=r[5]=r[7]=0,r[6]=r[14]=r[22]=r[30]=1,r[25]=r[27]=r[29]=r[31]=1,r[2]=r[10]=r[18]=r[26]=n*this._leftWidth,r[4]=r[12]=r[20]=r[28]=1-n*this._rightWidth,r[9]=r[11]=r[13]=r[15]=i*this._topHeight,r[17]=r[19]=r[21]=r[23]=1-i*this._bottomHeight,this.updateHorizontalVertices(),this.updateVerticalVertices(),this.geometry.buffers[0].update(),this.geometry.buffers[1].update()}}class kI extends Ca{constructor(e=te.EMPTY,r,n,i,s){const o=new Vd(r,n,i);o.getBuffer("aVertexPosition").static=!1;const u=new cu(e);super(o,u,null,s),this.autoUpdate=!0}get vertices(){return this.geometry.getBuffer("aVertexPosition").data}set vertices(e){this.geometry.getBuffer("aVertexPosition").data=e}_render(e){this.autoUpdate&&this.geometry.getBuffer("aVertexPosition").update(),super._render(e)}}class MI extends Ca{constructor(e,r,n=0){const i=new PI(e.height,r,n),s=new cu(e);n>0&&(e.baseTexture.wrapMode=Ai.REPEAT),super(i,s),this.autoUpdate=!0}_render(e){const r=this.geometry;(this.autoUpdate||r._width!==this.shader.texture.height)&&(r._width=this.shader.texture.height,r.update()),super._render(e)}}class DI extends je{constructor(e=1500,r,n=16384,i=!1){super();const s=16384;n>s&&(n=s),this._properties=[!1,!0,!1,!1,!1],this._maxSize=e,this._batchSize=n,this._buffers=null,this._bufferUpdateIDs=[],this._updateID=0,this.interactiveChildren=!1,this.blendMode=pe.NORMAL,this.autoResize=i,this.roundPixels=!0,this.baseTexture=null,this.setProperties(r),this._tintColor=new Ge(0),this.tintRgb=new Float32Array(3),this.tint=16777215}setProperties(e){e&&(this._properties[0]="vertices"in e||"scale"in e?!!e.vertices||!!e.scale:this._properties[0],this._properties[1]="position"in e?!!e.position:this._properties[1],this._properties[2]="rotation"in e?!!e.rotation:this._properties[2],this._properties[3]="uvs"in e?!!e.uvs:this._properties[3],this._properties[4]="tint"in e||"alpha"in e?!!e.tint||!!e.alpha:this._properties[4])}updateTransform(){this.displayObjectUpdateTransform()}get tint(){return this._tintColor.value}set tint(e){this._tintColor.setValue(e),this._tintColor.toRgbArray(this.tintRgb)}render(e){!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable||(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.valid||this.baseTexture.once("update",()=>this.onChildrenChange(0))),e.batch.setObjectRenderer(e.plugins.particle),e.plugins.particle.render(this))}onChildrenChange(e){const r=Math.floor(e/this._batchSize);for(;this._bufferUpdateIDs.length<r;)this._bufferUpdateIDs.push(0);this._bufferUpdateIDs[r]=++this._updateID}dispose(){if(this._buffers){for(let e=0;e<this._buffers.length;++e)this._buffers[e].destroy();this._buffers=null}}destroy(e){super.destroy(e),this.dispose(),this._properties=null,this._buffers=null,this._bufferUpdateIDs=null}}class v_{constructor(e,r,n){this.geometry=new Ts,this.indexBuffer=null,this.size=n,this.dynamicProperties=[],this.staticProperties=[];for(let i=0;i<e.length;++i){let s=e[i];s={attributeName:s.attributeName,size:s.size,uploadFunction:s.uploadFunction,type:s.type||ve.FLOAT,offset:s.offset},r[i]?this.dynamicProperties.push(s):this.staticProperties.push(s)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}initBuffers(){const e=this.geometry;let r=0;this.indexBuffer=new xt(aP(this.size),!0,!0),e.addIndex(this.indexBuffer),this.dynamicStride=0;for(let o=0;o<this.dynamicProperties.length;++o){const u=this.dynamicProperties[o];u.offset=r,r+=u.size,this.dynamicStride+=u.size}const n=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(n),this.dynamicDataUint32=new Uint32Array(n),this.dynamicBuffer=new xt(this.dynamicData,!1,!1);let i=0;this.staticStride=0;for(let o=0;o<this.staticProperties.length;++o){const u=this.staticProperties[o];u.offset=i,i+=u.size,this.staticStride+=u.size}const s=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(s),this.staticDataUint32=new Uint32Array(s),this.staticBuffer=new xt(this.staticData,!0,!1);for(let o=0;o<this.dynamicProperties.length;++o){const u=this.dynamicProperties[o];e.addAttribute(u.attributeName,this.dynamicBuffer,0,u.type===ve.UNSIGNED_BYTE,u.type,this.dynamicStride*4,u.offset*4)}for(let o=0;o<this.staticProperties.length;++o){const u=this.staticProperties[o];e.addAttribute(u.attributeName,this.staticBuffer,0,u.type===ve.UNSIGNED_BYTE,u.type,this.staticStride*4,u.offset*4)}}uploadDynamic(e,r,n){for(let i=0;i<this.dynamicProperties.length;i++){const s=this.dynamicProperties[i];s.uploadFunction(e,r,n,s.type===ve.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,s.offset)}this.dynamicBuffer._updateID++}uploadStatic(e,r,n){for(let i=0;i<this.staticProperties.length;i++){const s=this.staticProperties[i];s.uploadFunction(e,r,n,s.type===ve.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,s.offset)}this.staticBuffer._updateID++}destroy(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()}}var NI=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,OI=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;class Aw extends Ud{constructor(e){super(e),this.shader=null,this.properties=null,this.tempMatrix=new it,this.properties=[{attributeName:"aVertexPosition",size:2,uploadFunction:this.uploadVertices,offset:0},{attributeName:"aPositionCoord",size:2,uploadFunction:this.uploadPosition,offset:0},{attributeName:"aRotation",size:1,uploadFunction:this.uploadRotation,offset:0},{attributeName:"aTextureCoord",size:2,uploadFunction:this.uploadUvs,offset:0},{attributeName:"aColor",size:1,type:ve.UNSIGNED_BYTE,uploadFunction:this.uploadTint,offset:0}],this.shader=ni.from(OI,NI,{}),this.state=Bi.for2d()}render(e){const r=e.children,n=e._maxSize,i=e._batchSize,s=this.renderer;let o=r.length;if(o===0)return;o>n&&!e.autoResize&&(o=n);let u=e._buffers;u||(u=e._buffers=this.generateBuffers(e));const c=r[0]._texture.baseTexture,h=c.alphaMode>0;this.state.blendMode=Mb(e.blendMode,h),s.state.set(this.state);const f=s.gl,p=e.worldTransform.copyTo(this.tempMatrix);p.prepend(s.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=p.toArray(!0),this.shader.uniforms.uColor=Ge.shared.setValue(e.tintRgb).premultiply(e.worldAlpha,h).toArray(this.shader.uniforms.uColor),this.shader.uniforms.uSampler=c,this.renderer.shader.bind(this.shader);let g=!1;for(let v=0,x=0;v<o;v+=i,x+=1){let S=o-v;S>i&&(S=i),x>=u.length&&u.push(this._generateOneMoreBuffer(e));const E=u[x];E.uploadDynamic(r,v,S);const w=e._bufferUpdateIDs[x]||0;g=g||E._updateID<w,g&&(E._updateID=e._updateID,E.uploadStatic(r,v,S)),s.geometry.bind(E.geometry),f.drawElements(f.TRIANGLES,S*6,f.UNSIGNED_SHORT,0)}}generateBuffers(e){const r=[],n=e._maxSize,i=e._batchSize,s=e._properties;for(let o=0;o<n;o+=i)r.push(new v_(this.properties,s,i));return r}_generateOneMoreBuffer(e){const r=e._batchSize,n=e._properties;return new v_(this.properties,n,r)}uploadVertices(e,r,n,i,s,o){let u=0,c=0,h=0,f=0;for(let p=0;p<n;++p){const g=e[r+p],v=g._texture,x=g.scale.x,S=g.scale.y,E=v.trim,w=v.orig;E?(c=E.x-g.anchor.x*w.width,u=c+E.width,f=E.y-g.anchor.y*w.height,h=f+E.height):(u=w.width*(1-g.anchor.x),c=w.width*-g.anchor.x,h=w.height*(1-g.anchor.y),f=w.height*-g.anchor.y),i[o]=c*x,i[o+1]=f*S,i[o+s]=u*x,i[o+s+1]=f*S,i[o+s*2]=u*x,i[o+s*2+1]=h*S,i[o+s*3]=c*x,i[o+s*3+1]=h*S,o+=s*4}}uploadPosition(e,r,n,i,s,o){for(let u=0;u<n;u++){const c=e[r+u].position;i[o]=c.x,i[o+1]=c.y,i[o+s]=c.x,i[o+s+1]=c.y,i[o+s*2]=c.x,i[o+s*2+1]=c.y,i[o+s*3]=c.x,i[o+s*3+1]=c.y,o+=s*4}}uploadRotation(e,r,n,i,s,o){for(let u=0;u<n;u++){const c=e[r+u].rotation;i[o]=c,i[o+s]=c,i[o+s*2]=c,i[o+s*3]=c,o+=s*4}}uploadUvs(e,r,n,i,s,o){for(let u=0;u<n;++u){const c=e[r+u]._texture._uvs;c?(i[o]=c.x0,i[o+1]=c.y0,i[o+s]=c.x1,i[o+s+1]=c.y1,i[o+s*2]=c.x2,i[o+s*2+1]=c.y2,i[o+s*3]=c.x3,i[o+s*3+1]=c.y3,o+=s*4):(i[o]=0,i[o+1]=0,i[o+s]=0,i[o+s+1]=0,i[o+s*2]=0,i[o+s*2+1]=0,i[o+s*3]=0,i[o+s*3+1]=0,o+=s*4)}}uploadTint(e,r,n,i,s,o){for(let u=0;u<n;++u){const c=e[r+u],h=Ge.shared.setValue(c._tintRGB).toPremultiplied(c.alpha,c.texture.baseTexture.alphaMode>0);i[o]=h,i[o+s]=h,i[o+s*2]=h,i[o+s*3]=h,o+=s*4}}destroy(){super.destroy(),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null}}Aw.extension={name:"particle",type:oe.RendererPlugin};me.add(Aw);class hu extends Je{constructor(e,r=!0){super(e[0]instanceof te?e[0]:e[0].texture),this._textures=null,this._durations=null,this._autoUpdate=r,this._isConnectedToTicker=!1,this.animationSpeed=1,this.loop=!0,this.updateAnchor=!1,this.onComplete=null,this.onFrameChange=null,this.onLoop=null,this._currentTime=0,this._playing=!1,this._previousFrame=null,this.textures=e}stop(){!this._playing||(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Tt.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Tt.shared.add(this.update,this,ws.HIGH),this._isConnectedToTicker=!0))}gotoAndStop(e){this.stop(),this.currentFrame=e}gotoAndPlay(e){this.currentFrame=e,this.play()}update(e){if(!this._playing)return;const r=this.animationSpeed*e,n=this.currentFrame;if(this._durations!==null){let i=this._currentTime%1*this._durations[this.currentFrame];for(i+=r/60*1e3;i<0;)this._currentTime--,i+=this._durations[this.currentFrame];const s=Math.sign(this.animationSpeed*e);for(this._currentTime=Math.floor(this._currentTime);i>=this._durations[this.currentFrame];)i-=this._durations[this.currentFrame]*s,this._currentTime+=s;this._currentTime+=i/this._durations[this.currentFrame]}else this._currentTime+=r;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):n!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<n||this.animationSpeed<0&&this.currentFrame>n)&&this.onLoop(),this.updateTexture())}updateTexture(){const e=this.currentFrame;this._previousFrame!==e&&(this._previousFrame=e,this._texture=this._textures[e],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))}destroy(e){this.stop(),super.destroy(e),this.onComplete=null,this.onFrameChange=null,this.onLoop=null}static fromFrames(e){const r=[];for(let n=0;n<e.length;++n)r.push(te.from(e[n]));return new hu(r)}static fromImages(e){const r=[];for(let n=0;n<e.length;++n)r.push(te.from(e[n]));return new hu(r)}get totalFrames(){return this._textures.length}get textures(){return this._textures}set textures(e){if(e[0]instanceof te)this._textures=e,this._durations=null;else{this._textures=[],this._durations=[];for(let r=0;r<e.length;r++)this._textures.push(e[r].texture),this._durations.push(e[r].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()}get currentFrame(){let e=Math.floor(this._currentTime)%this._textures.length;return e<0&&(e+=this._textures.length),e}set currentFrame(e){if(e<0||e>this.totalFrames-1)throw new Error(`[AnimatedSprite]: Invalid frame index value ${e}, expected to be between 0 and totalFrames ${this.totalFrames}.`);const r=this.currentFrame;this._currentTime=e,r!==this.currentFrame&&this.updateTexture()}get playing(){return this._playing}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Tt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Tt.shared.add(this.update,this),this._isConnectedToTicker=!0))}}const ml=new we;class gy extends Je{constructor(e,r=100,n=100){super(e),this.tileTransform=new Bd,this._width=r,this._height=n,this.uvMatrix=this.texture.uvMatrix||new hy(e),this.pluginName="tilingSprite",this.uvRespectAnchor=!1}get clampMargin(){return this.uvMatrix.clampMargin}set clampMargin(e){this.uvMatrix.clampMargin=e,this.uvMatrix.update(!0)}get tileScale(){return this.tileTransform.scale}set tileScale(e){this.tileTransform.scale.copyFrom(e)}get tilePosition(){return this.tileTransform.position}set tilePosition(e){this.tileTransform.position.copyFrom(e)}_onTextureUpdate(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215}_render(e){const r=this._texture;!r||!r.valid||(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),e.batch.setObjectRenderer(e.plugins[this.pluginName]),e.plugins[this.pluginName].render(this))}_calculateBounds(){const e=this._width*-this._anchor._x,r=this._height*-this._anchor._y,n=this._width*(1-this._anchor._x),i=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,e,r,n,i)}getLocalBounds(e){return this.children.length===0?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),e||(this._localBoundsRect||(this._localBoundsRect=new Ee),e=this._localBoundsRect),this._bounds.getRectangle(e)):super.getLocalBounds.call(this,e)}containsPoint(e){this.worldTransform.applyInverse(e,ml);const r=this._width,n=this._height,i=-r*this.anchor._x;if(ml.x>=i&&ml.x<i+r){const s=-n*this.anchor._y;if(ml.y>=s&&ml.y<s+n)return!0}return!1}destroy(e){super.destroy(e),this.tileTransform=null,this.uvMatrix=null}static from(e,r){const n=e instanceof te?e:te.from(e,r);return new gy(n,r.width,r.height)}get width(){return this._width}set width(e){this._width=e}get height(){return this._height}set height(e){this._height=e}}var FI=`#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,LI=`#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,BI=`#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,x_=`#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,UI=`#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;const Yc=new it;class Pw extends Ud{constructor(e){super(e),e.runners.contextChange.add(this),this.quad=new Yb,this.state=Bi.for2d()}contextChange(){const e=this.renderer,r={globals:e.globalUniforms};this.simpleShader=ni.from(x_,UI,r),this.shader=e.context.webGLVersion>1?ni.from(LI,FI,r):ni.from(x_,BI,r)}render(e){const r=this.renderer,n=this.quad;let i=n.vertices;i[0]=i[6]=e._width*-e.anchor.x,i[1]=i[3]=e._height*-e.anchor.y,i[2]=i[4]=e._width*(1-e.anchor.x),i[5]=i[7]=e._height*(1-e.anchor.y);const s=e.uvRespectAnchor?e.anchor.x:0,o=e.uvRespectAnchor?e.anchor.y:0;i=n.uvs,i[0]=i[6]=-s,i[1]=i[3]=-o,i[2]=i[4]=1-s,i[5]=i[7]=1-o,n.invalidate();const u=e._texture,c=u.baseTexture,h=c.alphaMode>0,f=e.tileTransform.localTransform,p=e.uvMatrix;let g=c.isPowerOfTwo&&u.frame.width===c.width&&u.frame.height===c.height;g&&(c._glTextures[r.CONTEXT_UID]?g=c.wrapMode!==Ai.CLAMP:c.wrapMode===Ai.CLAMP&&(c.wrapMode=Ai.REPEAT));const v=g?this.simpleShader:this.shader,x=u.width,S=u.height,E=e._width,w=e._height;Yc.set(f.a*x/E,f.b*x/w,f.c*S/E,f.d*S/w,f.tx/E,f.ty/w),Yc.invert(),g?Yc.prepend(p.mapCoord):(v.uniforms.uMapCoord=p.mapCoord.toArray(!0),v.uniforms.uClampFrame=p.uClampFrame,v.uniforms.uClampOffset=p.uClampOffset),v.uniforms.uTransform=Yc.toArray(!0),v.uniforms.uColor=Ge.shared.setValue(e.tint).premultiply(e.worldAlpha,h).toArray(v.uniforms.uColor),v.uniforms.translationMatrix=e.transform.worldTransform.toArray(!0),v.uniforms.uSampler=u,r.shader.bind(v),r.geometry.bind(n),this.state.blendMode=Mb(e.blendMode,h),r.state.set(this.state),r.geometry.draw(this.renderer.gl.TRIANGLES,6,0)}}Pw.extension={name:"tilingSprite",type:oe.RendererPlugin};me.add(Pw);const Wg=class{constructor(t){this.stage=new je,t=Object.assign({forceCanvas:!1},t),this.renderer=v5(t),Wg._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render(this.stage)}get view(){return this.renderer.view}get screen(){return this.renderer.screen}destroy(t,e){const r=Wg._plugins.slice(0);r.reverse(),r.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null}};let wu=Wg;wu._plugins=[];me.handleByList(oe.Application,wu._plugins);class Iw{static init(e){Object.defineProperty(this,"resizeTo",{set(r){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=r,r&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{!this._resizeTo||(this.cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this.cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this.cancelResize();let r,n;if(this._resizeTo===globalThis.window)r=globalThis.innerWidth,n=globalThis.innerHeight;else{const{clientWidth:i,clientHeight:s}=this._resizeTo;r=i,n=s}this.renderer.resize(r,n),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}}Iw.extension=oe.Application;me.add(Iw);var Xe={exports:{}},zI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",GI=zI,jI=GI;function Rw(){}function kw(){}kw.resetWarningCache=Rw;var HI=function(){function t(n,i,s,o,u,c){if(c!==jI){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:kw,resetWarningCache:Rw};return r.PropTypes=r,r};Xe.exports=HI();function Nr(t){return Nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nr(t)}function Mw(t){var e=function(r,n){if(Nr(r)!=="object"||r===null)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,n||"default");if(Nr(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}(t,"string");return Nr(e)==="symbol"?e:String(e)}function vt(t,e,r){return(e=Mw(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function mm(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Oi(t){return function(e){if(Array.isArray(e))return mm(e)}(t)||function(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}(t)||function(e,r){if(e){if(typeof e=="string")return mm(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?mm(e,r):void 0}}(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function mt(t,e){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i]}var $I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function VI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var WI=function(t){return t==null};function Sl(t){var e=[];if(t===void 0)return e;if(typeof t=="string")e=t.split(",");else if(typeof t=="number")e=[t];else if(Array.isArray(t))e=Oi(t);else{if(t===null||Nr(t)!=="object")return e;e=[t&&(t==null?void 0:t.x)||0,t&&(t==null?void 0:t.y)||0]}return e.filter(function(r){return!WI(r)&&!isNaN(r)}).map(Number)}function __(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}function gm(t){return t instanceof we||t instanceof Jn}var ad=["click","mousedown","mousemove","mouseout","mouseover","mouseup","mouseupoutside","tap","touchstart","touchmove","touchend","touchendoutside","pointercancel","pointerout","pointerover","pointertap","pointerdown","pointerup","pointerupoutside","pointermove","rightclick","rightdown","rightup","rightupoutside","touchcancel","touchendoutside","touchmove","touchstart"];function ym(t,e,r){if(gm(t[e])&&gm(r))t[e].copyFrom(r);else if(gm(t[e])){var n=Sl(r);mt(n!==void 0&&n.length>0&&n.length<3,"The property `%s` is a `PIXI.Point` or `PIXI.ObservablePoint` and must be set to a comma-separated string of either 1 or 2 coordinates, a 1 or 2 element array containing coordinates, or a PIXI Point/ObservablePoint. If only one coordinate is given then X and Y will be set to the provided value. Received: `%s` of type `%s`.",e,JSON.stringify(r),Nr(r)),t[e].set(n.shift(),n.shift())}else t[e]=r}var Bo,Dw=function(t){var e,r=t;if(!Array.isArray(r)){if(e=t,Object.prototype.toString.call(e)!=="[object Object]")throw new Error("collection needs to be an Array or Object");r=Object.keys(t)}var n={};return r.forEach(function(i){n[i]=!0}),function(i){return n[i]!==void 0}},Nw=function(t){return function(){return!t.apply(void 0,arguments)}},Xg="children",XI=(vt(Bo={},Xg,!0),vt(Bo,"parent",!0),vt(Bo,"worldAlpha",!0),vt(Bo,"worldTransform",!0),vt(Bo,"worldVisible",!0),Bo),Yg={alpha:1,buttonMode:!1,cacheAsBitmap:!1,cursor:null,filterArea:null,filters:null,hitArea:null,interactive:!1,mask:null,pivot:0,position:0,renderable:!0,rotation:0,scale:1,skew:0,transform:null,visible:!0,x:0,y:0},oi=function(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=function(u){return requestAnimationFrame(function(){var c,h;u==null||(c=u.__reactpixi)===null||c===void 0||(h=c.root)===null||h===void 0||h.emit("__REACT_PIXI_REQUEST_RENDER__")})},i=function(u,c){if(r.hasOwnProperty(u))return mt(c.typeofs.some(function(h){return Nr(r[u])===h})||c.instanceofs.some(function(h){return r[u]instanceof h}),"".concat(t," ").concat(u," prop is invalid")),r[u]};if(r.texture)return mt(r.texture instanceof te,"".concat(t," texture needs to be typeof `Texture`")),r.texture;var s=i("image",{typeofs:["string"],instanceofs:[HTMLImageElement]})||i("video",{typeofs:["string"],instanceofs:[HTMLVideoElement]})||i("source",{typeofs:["string","number"],instanceofs:[HTMLImageElement,HTMLVideoElement,HTMLCanvasElement,te]});mt(!!s,"".concat(t," could not get texture from props"));var o=te.from(s);return o.__reactpixi={root:e},o.once("update",n),o.once("loaded",n),o.valid&&n(o),o},YI=Nw(Dw([].concat(Oi(Object.keys(XI)),Oi(ad))));function ai(t,e,r){var n=!1;if(mt(Ke.prototype.isPrototypeOf(t),"instance needs to be typeof `DisplayObject`, got `%s`",Nr(t)),!r.ignoreEvents)for(var i=typeof t.removeListener=="function",s=typeof t.on=="function",o=0;o<ad.length;o++){var u=ad[o];e[u]!==r[u]&&(n=!0,typeof e[u]=="function"&&i&&t.removeListener(u,e[u]),typeof r[u]=="function"&&s&&t.on(u,r[u]))}var c=Object.keys(r||{});if(r.overwriteProps){for(var h=0;h<c.length;h++){var f=c[h];e[f]!==r[f]&&(n=!0,ym(t,f,r[f]))}return n}for(var p=c.filter(YI),g=0;g<p.length;g++){var v=p[g],x=r[v];r[v]!==e[v]&&(n=!0),x!==void 0?ym(t,v,x):v in Yg?(console.warn("setting default value: ".concat(v,", from: ").concat(t[v]," to: ").concat(x," for"),t),n=!0,ym(t,v,Yg[v])):console.warn("ignoring prop: ".concat(v,", from ").concat(t[v]," to ").concat(x," for"),t)}return n}var KI=function(t,e){var r=e.text,n=e.style;return new bw(r,n)},QI=function(){return new je};function Ps(t,e){if(t==null)return{};var r,n,i=function(o,u){if(o==null)return{};var c,h,f={},p=Object.keys(o);for(h=0;h<p.length;h++)c=p[h],u.indexOf(c)>=0||(f[c]=o[c]);return f}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var ZI=["draw","geometry"],qI=function(t,e){var r=e.geometry;mt(!r||r instanceof nn,"Graphics geometry needs to be a `PIXI.Graphics`");var n=r?new nn(r.geometry):new nn;return n.applyProps=function(i,s,o){var u=o.draw;o.geometry;var c=ai(i,s,Ps(o,ZI));return s.draw!==u&&typeof u=="function"&&(c=!0,u.call(n,n)),c},n},JI=["image","texture"],eR=function(t,e){var r=e.leftWidth,n=r===void 0?10:r,i=e.topHeight,s=i===void 0?10:i,o=e.rightWidth,u=o===void 0?10:o,c=e.bottomHeight,h=c===void 0?10:c,f=oi("NineSlicePlane",t,e),p=new RI(f,n,s,u,h);return p.applyProps=function(g,v,x){var S=x.image,E=x.texture,w=ai(g,v,Ps(x,JI));return(S||E)&&(E!==v.texture&&(w=!0),g.texture=oi("NineSlicePlane",t,x)),w},p};function T_(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function Kc(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?T_(Object(r),!0).forEach(function(n){vt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T_(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var tR=function(t,e){var r=e.maxSize,n=r===void 0?1500:r,i=e.batchSize,s=i===void 0?16384:i,o=e.autoResize,u=o!==void 0&&o,c=Kc(Kc({},{vertices:!1,scale:!0,position:!0,rotation:!0,uvs:!0,tint:!0}),e.properties||{}),h=Kc(Kc({},{children:!1,texture:!1,baseTexture:!1}),e.destroyOptions||{}),f=new DI(n,c,s,u);return f.willUnmount=function(p,g,v){p.destroy(h)},f},rR=["image","texture"],nR=function(t,e){var r=new Je(oi("Sprite",t,e));return r.applyProps=function(n,i,s){var o=s.image,u=s.texture,c=ai(n,i,Ps(s,rR));return(u&&i.texture!==s.texture||o&&i.image!==s.image)&&(i.texture!==s.texture&&(c=!0),n.texture=oi("Sprite",t,s)),c},r},iR=["textures","isPlaying","initialFrame"],sR=function(t,e){var r=e.textures,n=e.images,i=e.isPlaying,s=i===void 0||i,o=e.initialFrame,u=function(h){return h.map(function(f){return mt(f instanceof te||(f==null?void 0:f.texture),"AnimationSprite texture needs to be an array of `PIXI.Texture` or `{ texture: PIXI.Texture, time:\n                number }`"),f})},c=n?hu.fromImages(n):new hu(u(r));return c[s?"gotoAndPlay":"gotoAndStop"](o||0),c.applyProps=function(h,f,p){var g=p.textures,v=p.isPlaying,x=p.initialFrame,S=ai(h,f,Ps(p,iR));if(g&&f.textures!==g&&(h.textures=u(g),S=!0),v!==f.isPlaying||x!==f.initialFrame){var E=typeof x=="number"?x:c.currentFrame||0;c[v?"gotoAndPlay":"gotoAndStop"](E),S=!0}return S},c},oR=function(t,e){var r=e.text,n=r===void 0?"":r,i=e.style,s=i===void 0?{}:i,o=e.isSprite,u=new Da(n,s);return o?(u.updateText(),new Je(u.texture)):u},aR=["tileScale","tilePosition","image","texture"],lR=function(t,e){var r=e.width,n=r===void 0?100:r,i=e.height,s=i===void 0?100:i,o=oi("TilingSprite",t,e),u=new gy(o,n,s);return u.applyProps=function(c,h,f){var p=f.tileScale,g=f.tilePosition,v=f.image,x=f.texture,S=ai(c,h,Ps(f,aR));if(g){var E,w=Sl(g);(E=c.tilePosition).set.apply(E,Oi(w)),S=!__(Sl(h.tilePosition),w)||S}if(p){var b,T=Sl(p);(b=c.tileScale).set.apply(b,Oi(T)),S=!__(Sl(h.tileScale),T)||S}return(v||x)&&(x!==h.texture&&(S=!0),c.texture=oi("Sprite",t,f)),S},u},uR=["image","texture"],cR=function(t,e){var r=oi("Mesh",t,e),n=e.vertices,i=e.uvs,s=e.indices,o=e.drawMode,u=o===void 0?Sn.TRIANGLES:o,c=new kI(r,n,i,s,u);return c.applyProps=function(h,f,p){var g=p.image,v=p.texture,x=ai(h,f,Ps(p,uR));return(g||v)&&(v!==f.texture&&(x=!0),h.texture=oi("Mesh",t,p)),x},c},hR=["image","texture"],dR=function(t,e){var r=oi("SimpleRope",t,e),n=e.points,i=new MI(r,n);return i.applyProps=function(s,o,u){var c=u.image,h=u.texture,f=Ps(u,hR);mt(Array.isArray(u.points),"SimpleRope points needs to be %s","Array<PIXI.Point>");var p=ai(s,o,f);return(c||h)&&(h!==o.texture&&(p=!0),s.texture=oi("SimpleRope",t,u)),p},i},fR=Object.freeze({__proto__:null,BitmapText:KI,Container:QI,Graphics:qI,NineSlicePlane:eR,ParticleContainer:tR,Sprite:nR,Text:oR,TilingSprite:lR,SimpleMesh:cR,SimpleRope:dR,AnimatedSprite:sR});function b_(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function w_(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?b_(Object(r),!0).forEach(function(n){vt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b_(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var wr={BitmapText:"BitmapText",Container:"Container",Graphics:"Graphics",NineSlicePlane:"NineSlicePlane",ParticleContainer:"ParticleContainer",Sprite:"Sprite",AnimatedSprite:"AnimatedSprite",Text:"Text",TilingSprite:"TilingSprite",SimpleMesh:"SimpleMesh",SimpleRope:"SimpleRope"},pR=Object.keys(wr).reduce(function(t,e){return w_(w_({},t),{},vt({},e,fR[e]))},{}),Ow={};function mR(t,e){return mt(!!t,"Expect type to be defined, got `%s`",t),mt(!wr[t],"Component `%s` could not be created, already exists in default components.",t),Ow[t]=e,t}var S_,E_,C_,A_,Kg={},Qg={},gR={get exports(){return Qg},set exports(t){Qg=t}},P_={};function yR(){return E_||(E_=1,gR.exports=(S_||(S_=1,function(t){function e(R,L){var k=R.length;R.push(L);e:for(;0<k;){var Q=k-1>>>1,ne=R[Q];if(!(0<i(ne,L)))break e;R[Q]=L,R[k]=ne,k=Q}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var L=R[0],k=R.pop();if(k!==L){R[0]=k;e:for(var Q=0,ne=R.length,Se=ne>>>1;Q<Se;){var Te=2*(Q+1)-1,Be=R[Te],Pe=Te+1,Le=R[Pe];if(0>i(Be,k))Pe<ne&&0>i(Le,Be)?(R[Q]=Le,R[Pe]=k,Q=Pe):(R[Q]=Be,R[Te]=k,Q=Te);else{if(!(Pe<ne&&0>i(Le,k)))break e;R[Q]=Le,R[Pe]=k,Q=Pe}}}return L}function i(R,L){var k=R.sortIndex-L.sortIndex;return k!==0?k:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,u=o.now();t.unstable_now=function(){return o.now()-u}}var c=[],h=[],f=1,p=null,g=3,v=!1,x=!1,S=!1,E=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;function T(R){for(var L=r(h);L!==null;){if(L.callback===null)n(h);else{if(!(L.startTime<=R))break;n(h),L.sortIndex=L.expirationTime,e(c,L)}L=r(h)}}function A(R){if(S=!1,T(R),!x)if(r(c)!==null)x=!0,xe(P);else{var L=r(h);L!==null&&z(A,L.startTime-R)}}function P(R,L){x=!1,S&&(S=!1,w(H),H=-1),v=!0;var k=g;try{for(T(L),p=r(c);p!==null&&(!(p.expirationTime>L)||R&&!ie());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,g=p.priorityLevel;var ne=Q(p.expirationTime<=L);L=t.unstable_now(),typeof ne=="function"?p.callback=ne:p===r(c)&&n(c),T(L)}else n(c);p=r(c)}if(p!==null)var Se=!0;else{var Te=r(h);Te!==null&&z(A,Te.startTime-L),Se=!1}return Se}finally{p=null,g=k,v=!1}}typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var O,D=!1,M=null,H=-1,X=5,Y=-1;function ie(){return!(t.unstable_now()-Y<X)}function W(){if(M!==null){var R=t.unstable_now();Y=R;var L=!0;try{L=M(!0,R)}finally{L?O():(D=!1,M=null)}}else D=!1}if(typeof b=="function")O=function(){b(W)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,fe=U.port2;U.port1.onmessage=W,O=function(){fe.postMessage(null)}}else O=function(){E(W,0)};function xe(R){M=R,D||(D=!0,O())}function z(R,L){H=E(function(){R(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){x||v||(x=!0,xe(P))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(R){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var k=g;g=L;try{return R()}finally{g=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var k=g;g=R;try{return L()}finally{g=k}},t.unstable_scheduleCallback=function(R,L,k){var Q=t.unstable_now();switch(k=typeof k=="object"&&k!==null&&typeof(k=k.delay)=="number"&&0<k?Q+k:Q,R){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return R={id:f++,callback:L,priorityLevel:R,startTime:k,expirationTime:ne=k+ne,sortIndex:-1},k>Q?(R.sortIndex=k,e(h,R),r(c)===null&&R===r(h)&&(S?(w(H),H=-1):S=!0,z(A,k-Q))):(R.sortIndex=ne,e(c,R),x||v||(x=!0,xe(P))),R},t.unstable_shouldYield=ie,t.unstable_wrapCallback=function(R){var L=g;return function(){var k=g;g=L;try{return R.apply(this,arguments)}finally{g=k}}}}(P_)),P_)),Qg}/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function vR(){return A_||(A_=1,C_=function(t){var e={},r=An,n=yR(),i=Object.assign;function s(a){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=1;d<arguments.length;d++)l+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+a+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),c=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),v=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),T=Symbol.for("react.offscreen"),A=Symbol.iterator;function P(a){return a===null||typeof a!="object"?null:typeof(a=A&&a[A]||a["@@iterator"])=="function"?a:null}function O(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case h:return"Fragment";case c:return"Portal";case p:return"Profiler";case f:return"StrictMode";case S:return"Suspense";case E:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case v:return(a.displayName||"Context")+".Consumer";case g:return(a._context.displayName||"Context")+".Provider";case x:var l=a.render;return(a=a.displayName)||(a=(a=l.displayName||l.name||"")!==""?"ForwardRef("+a+")":"ForwardRef"),a;case w:return(l=a.displayName||null)!==null?l:O(a.type)||"Memo";case b:l=a._payload,a=a._init;try{return O(a(l))}catch{}}return null}function D(a){var l=a.type;switch(a.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=(a=l.render).displayName||a.name||"",l.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return O(l);case 8:return l===f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function M(a){var l=a,d=a;if(a.alternate)for(;l.return;)l=l.return;else{a=l;do(4098&(l=a).flags)!=0&&(d=l.return),a=l.return;while(a)}return l.tag===3?d:null}function H(a){if(M(a)!==a)throw Error(s(188))}function X(a){var l=a.alternate;if(!l){if((l=M(a))===null)throw Error(s(188));return l!==a?null:a}for(var d=a,m=l;;){var y=d.return;if(y===null)break;var _=y.alternate;if(_===null){if((m=y.return)!==null){d=m;continue}break}if(y.child===_.child){for(_=y.child;_;){if(_===d)return H(y),a;if(_===m)return H(y),l;_=_.sibling}throw Error(s(188))}if(d.return!==m.return)d=y,m=_;else{for(var C=!1,I=y.child;I;){if(I===d){C=!0,d=y,m=_;break}if(I===m){C=!0,m=y,d=_;break}I=I.sibling}if(!C){for(I=_.child;I;){if(I===d){C=!0,d=_,m=y;break}if(I===m){C=!0,m=_,d=y;break}I=I.sibling}if(!C)throw Error(s(189))}}if(d.alternate!==m)throw Error(s(190))}if(d.tag!==3)throw Error(s(188));return d.stateNode.current===d?a:l}function Y(a){return(a=X(a))!==null?ie(a):null}function ie(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var l=ie(a);if(l!==null)return l;a=a.sibling}return null}function W(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){if(a.tag!==4){var l=W(a);if(l!==null)return l}a=a.sibling}return null}var U,fe=Array.isArray,xe=t.getPublicInstance,z=t.getRootHostContext,R=t.getChildHostContext,L=t.prepareForCommit,k=t.resetAfterCommit,Q=t.createInstance,ne=t.appendInitialChild,Se=t.finalizeInitialChildren,Te=t.prepareUpdate,Be=t.shouldSetTextContent,Pe=t.createTextInstance,Le=t.scheduleTimeout,kt=t.cancelTimeout,Ut=t.noTimeout,ht=t.isPrimaryRenderer,Re=t.supportsMutation,Qe=t.supportsPersistence,Ne=t.supportsHydration,Br=t.getInstanceFromNode,Ur=t.preparePortalMount,Is=t.getCurrentEventPriority,tf=t.detachDeletedInstance,vo=t.supportsMicrotasks,xS=t.scheduleMicrotask,Na=t.supportsTestSelectors,_S=t.findFiberRoot,TS=t.getBoundingRect,bS=t.getTextContent,Oa=t.isHiddenSubtree,wS=t.matchAccessibilityRole,SS=t.setFocusIfFocusable,ES=t.setupIntersectionObserver,CS=t.appendChild,AS=t.appendChildToContainer,PS=t.commitTextUpdate,IS=t.commitMount,RS=t.commitUpdate,kS=t.insertBefore,MS=t.insertInContainerBefore,DS=t.removeChild,NS=t.removeChildFromContainer,_y=t.resetTextContent,OS=t.hideInstance,FS=t.hideTextInstance,LS=t.unhideInstance,BS=t.unhideTextInstance,US=t.clearContainer,zS=t.cloneInstance,Ty=t.createContainerChildSet,by=t.appendChildToContainerChildSet,GS=t.finalizeContainerChildren,rf=t.replaceContainerChildren,wy=t.cloneHiddenInstance,Sy=t.cloneHiddenTextInstance,jS=t.canHydrateInstance,HS=t.canHydrateTextInstance,$S=t.canHydrateSuspenseInstance,Ey=t.isSuspenseInstancePending,nf=t.isSuspenseInstanceFallback,VS=t.getSuspenseInstanceFallbackErrorDetails,WS=t.registerSuspenseInstanceRetry,Eu=t.getNextHydratableSibling,XS=t.getFirstHydratableChild,YS=t.getFirstHydratableChildWithinContainer,KS=t.getFirstHydratableChildWithinSuspenseInstance,QS=t.hydrateInstance,ZS=t.hydrateTextInstance,qS=t.hydrateSuspenseInstance,JS=t.getNextHydratableInstanceAfterSuspenseInstance,eE=t.commitHydratedContainer,tE=t.commitHydratedSuspenseInstance,rE=t.clearSuspenseBoundary,nE=t.clearSuspenseBoundaryFromContainer,iE=t.shouldDeleteUnhydratedTailInstances,sE=t.didNotMatchHydratedContainerTextInstance,oE=t.didNotMatchHydratedTextInstance;function Fa(a){if(U===void 0)try{throw Error()}catch(d){var l=d.stack.trim().match(/\n( *(at )?)/);U=l&&l[1]||""}return`
`+U+a}var sf=!1;function of(a,l){if(!a||sf)return"";sf=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(G){var m=G}Reflect.construct(a,[],l)}else{try{l.call()}catch(G){m=G}a.call(l.prototype)}else{try{throw Error()}catch(G){m=G}a()}}catch(G){if(G&&m&&typeof G.stack=="string"){for(var y=G.stack.split(`
`),_=m.stack.split(`
`),C=y.length-1,I=_.length-1;1<=C&&0<=I&&y[C]!==_[I];)I--;for(;1<=C&&0<=I;C--,I--)if(y[C]!==_[I]){if(C!==1||I!==1)do if(C--,0>--I||y[C]!==_[I]){var F=`
`+y[C].replace(" at new "," at ");return a.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",a.displayName)),F}while(1<=C&&0<=I);break}}}finally{sf=!1,Error.prepareStackTrace=d}return(a=a?a.displayName||a.name:"")?Fa(a):""}var aE=Object.prototype.hasOwnProperty,af=[],xo=-1;function Ui(a){return{current:a}}function et(a){0>xo||(a.current=af[xo],af[xo]=null,xo--)}function We(a,l){xo++,af[xo]=a.current,a.current=l}var zi={},Yt=Ui(zi),fr=Ui(!1),Rs=zi;function _o(a,l){var d=a.type.contextTypes;if(!d)return zi;var m=a.stateNode;if(m&&m.__reactInternalMemoizedUnmaskedChildContext===l)return m.__reactInternalMemoizedMaskedChildContext;var y,_={};for(y in d)_[y]=l[y];return m&&((a=a.stateNode).__reactInternalMemoizedUnmaskedChildContext=l,a.__reactInternalMemoizedMaskedChildContext=_),_}function Sr(a){return(a=a.childContextTypes)!=null}function lf(){et(fr),et(Yt)}function Cy(a,l,d){if(Yt.current!==zi)throw Error(s(168));We(Yt,l),We(fr,d)}function Ay(a,l,d){var m=a.stateNode;if(l=l.childContextTypes,typeof m.getChildContext!="function")return d;for(var y in m=m.getChildContext())if(!(y in l))throw Error(s(108,D(a)||"Unknown",y));return i({},d,m)}function Cu(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||zi,Rs=Yt.current,We(Yt,a),We(fr,fr.current),!0}function Py(a,l,d){var m=a.stateNode;if(!m)throw Error(s(169));d?(a=Ay(a,l,Rs),m.__reactInternalMemoizedMergedChildContext=a,et(fr),et(Yt),We(Yt,a)):et(fr),We(fr,d)}var an=Math.clz32?Math.clz32:function(a){return(a>>>=0)===0?32:31-(lE(a)/uE|0)|0},lE=Math.log,uE=Math.LN2,uf=64,cf=4194304;function La(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&a;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&a;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function Au(a,l){var d=a.pendingLanes;if(d===0)return 0;var m=0,y=a.suspendedLanes,_=a.pingedLanes,C=268435455&d;if(C!==0){var I=C&~y;I!==0?m=La(I):(_&=C)!==0&&(m=La(_))}else(C=d&~y)!==0?m=La(C):_!==0&&(m=La(_));if(m===0)return 0;if(l!==0&&l!==m&&(l&y)==0&&((y=m&-m)>=(_=l&-l)||y===16&&(4194240&_)!=0))return l;if((4&m)!=0&&(m|=16&d),(l=a.entangledLanes)!==0)for(a=a.entanglements,l&=m;0<l;)y=1<<(d=31-an(l)),m|=a[d],l&=~y;return m}function cE(a,l){switch(a){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;default:return-1}}function hf(a){return(a=-1073741825&a.pendingLanes)!==0?a:1073741824&a?1073741824:0}function Iy(){var a=uf;return(4194240&(uf<<=1))==0&&(uf=64),a}function df(a){for(var l=[],d=0;31>d;d++)l.push(a);return l}function Ba(a,l,d){a.pendingLanes|=l,l!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),(a=a.eventTimes)[l=31-an(l)]=d}function ff(a,l){var d=a.entangledLanes|=l;for(a=a.entanglements;d;){var m=31-an(d),y=1<<m;y&l|a[m]&l&&(a[m]|=l),d&=~y}}var Oe=0;function Ry(a){return 1<(a&=-a)?4<a?(268435455&a)!=0?16:536870912:4:1}var pf=n.unstable_scheduleCallback,ky=n.unstable_cancelCallback,hE=n.unstable_shouldYield,dE=n.unstable_requestPaint,Mt=n.unstable_now,mf=n.unstable_ImmediatePriority,fE=n.unstable_UserBlockingPriority,My=n.unstable_NormalPriority,pE=n.unstable_IdlePriority,Pu=null,On=null,ln=typeof Object.is=="function"?Object.is:function(a,l){return a===l&&(a!==0||1/a==1/l)||a!=a&&l!=l},ui=null,Iu=!1,gf=!1;function Dy(a){ui===null?ui=[a]:ui.push(a)}function Fn(){if(!gf&&ui!==null){gf=!0;var a=0,l=Oe;try{var d=ui;for(Oe=1;a<d.length;a++){var m=d[a];do m=m(!0);while(m!==null)}ui=null,Iu=!1}catch(y){throw ui!==null&&(ui=ui.slice(a+1)),pf(mf,Fn),y}finally{Oe=l,gf=!1}}return null}var To=[],bo=0,Ru=null,ku=0,zr=[],Gr=0,ks=null,Ln=1,ci="";function Ms(a,l){To[bo++]=ku,To[bo++]=Ru,Ru=a,ku=l}function Ny(a,l,d){zr[Gr++]=Ln,zr[Gr++]=ci,zr[Gr++]=ks,ks=a;var m=Ln;a=ci;var y=32-an(m)-1;m&=~(1<<y),d+=1;var _=32-an(l)+y;if(30<_){var C=y-y%5;_=(m&(1<<C)-1).toString(32),m>>=C,y-=C,Ln=1<<32-an(l)+y|d<<y|m,ci=_+a}else Ln=1<<_|d<<y|m,ci=a}function yf(a){a.return!==null&&(Ms(a,1),Ny(a,1,0))}function vf(a){for(;a===Ru;)Ru=To[--bo],To[bo]=null,ku=To[--bo],To[bo]=null;for(;a===ks;)ks=zr[--Gr],zr[Gr]=null,ci=zr[--Gr],zr[Gr]=null,Ln=zr[--Gr],zr[Gr]=null}var Er=null,jr=null,tt=!1,Ua=!1,un=null;function Oy(a,l){var d=Xr(5,null,null,0);d.elementType="DELETED",d.stateNode=l,d.return=a,(l=a.deletions)===null?(a.deletions=[d],a.flags|=16):l.push(d)}function Fy(a,l){switch(a.tag){case 5:return(l=jS(l,a.type,a.pendingProps))!==null&&(a.stateNode=l,Er=a,jr=XS(l),!0);case 6:return(l=HS(l,a.pendingProps))!==null&&(a.stateNode=l,Er=a,jr=null,!0);case 13:if((l=$S(l))!==null){var d=ks!==null?{id:Ln,overflow:ci}:null;return a.memoizedState={dehydrated:l,treeContext:d,retryLane:1073741824},(d=Xr(18,null,null,0)).stateNode=l,d.return=a,a.child=d,Er=a,jr=null,!0}return!1;default:return!1}}function xf(a){return(1&a.mode)!=0&&(128&a.flags)==0}function _f(a){if(tt){var l=jr;if(l){var d=l;if(!Fy(a,l)){if(xf(a))throw Error(s(418));l=Eu(d);var m=Er;l&&Fy(a,l)?Oy(m,d):(a.flags=-4097&a.flags|2,tt=!1,Er=a)}}else{if(xf(a))throw Error(s(418));a.flags=-4097&a.flags|2,tt=!1,Er=a}}}function Ly(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;Er=a}function Mu(a){if(!Ne||a!==Er)return!1;if(!tt)return Ly(a),tt=!0,!1;if(a.tag!==3&&(a.tag!==5||iE(a.type)&&!Be(a.type,a.memoizedProps))){var l=jr;if(l){if(xf(a))throw By(),Error(s(418));for(;l;)Oy(a,l),l=Eu(l)}}if(Ly(a),a.tag===13){if(!Ne)throw Error(s(316));if(!(a=(a=a.memoizedState)!==null?a.dehydrated:null))throw Error(s(317));jr=JS(a)}else jr=Er?Eu(a.stateNode):null;return!0}function By(){for(var a=jr;a;)a=Eu(a)}function wo(){Ne&&(jr=Er=null,Ua=tt=!1)}function Tf(a){un===null?un=[a]:un.push(a)}var mE=o.ReactCurrentBatchConfig;function Du(a,l){if(ln(a,l))return!0;if(typeof a!="object"||a===null||typeof l!="object"||l===null)return!1;var d=Object.keys(a),m=Object.keys(l);if(d.length!==m.length)return!1;for(m=0;m<d.length;m++){var y=d[m];if(!aE.call(l,y)||!ln(a[y],l[y]))return!1}return!0}function gE(a){switch(a.tag){case 5:return Fa(a.type);case 16:return Fa("Lazy");case 13:return Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 2:case 15:return a=of(a.type,!1);case 11:return a=of(a.type.render,!1);case 1:return a=of(a.type,!0);default:return""}}function cn(a,l){if(a&&a.defaultProps){for(var d in l=i({},l),a=a.defaultProps)l[d]===void 0&&(l[d]=a[d]);return l}return l}var Nu=Ui(null),Ou=null,So=null,bf=null;function wf(){bf=So=Ou=null}function Uy(a,l,d){ht?(We(Nu,l._currentValue),l._currentValue=d):(We(Nu,l._currentValue2),l._currentValue2=d)}function Sf(a){var l=Nu.current;et(Nu),ht?a._currentValue=l:a._currentValue2=l}function Ef(a,l,d){for(;a!==null;){var m=a.alternate;if((a.childLanes&l)!==l?(a.childLanes|=l,m!==null&&(m.childLanes|=l)):m!==null&&(m.childLanes&l)!==l&&(m.childLanes|=l),a===d)break;a=a.return}}function Eo(a,l){Ou=a,bf=So=null,(a=a.dependencies)!==null&&a.firstContext!==null&&((a.lanes&l)!=0&&(pr=!0),a.firstContext=null)}function Hr(a){var l=ht?a._currentValue:a._currentValue2;if(bf!==a)if(a={context:a,memoizedValue:l,next:null},So===null){if(Ou===null)throw Error(s(308));So=a,Ou.dependencies={lanes:0,firstContext:a}}else So=So.next=a;return l}var Ds=null;function Cf(a){Ds===null?Ds=[a]:Ds.push(a)}function zy(a,l,d,m){var y=l.interleaved;return y===null?(d.next=d,Cf(l)):(d.next=y.next,y.next=d),l.interleaved=d,Bn(a,m)}function Bn(a,l){a.lanes|=l;var d=a.alternate;for(d!==null&&(d.lanes|=l),d=a,a=a.return;a!==null;)a.childLanes|=l,(d=a.alternate)!==null&&(d.childLanes|=l),d=a,a=a.return;return d.tag===3?d.stateNode:null}var Gi=!1;function Af(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gy(a,l){a=a.updateQueue,l.updateQueue===a&&(l.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function hi(a,l){return{eventTime:a,lane:l,tag:0,payload:null,callback:null,next:null}}function ji(a,l,d){var m=a.updateQueue;if(m===null)return null;if(m=m.shared,(2&Me)!=0){var y=m.pending;return y===null?l.next=l:(l.next=y.next,y.next=l),m.pending=l,Bn(a,d)}return(y=m.interleaved)===null?(l.next=l,Cf(m)):(l.next=y.next,y.next=l),m.interleaved=l,Bn(a,d)}function Fu(a,l,d){if((l=l.updateQueue)!==null&&(l=l.shared,(4194240&d)!=0)){var m=l.lanes;d|=m&=a.pendingLanes,l.lanes=d,ff(a,d)}}function jy(a,l){var d=a.updateQueue,m=a.alternate;if(m!==null&&d===(m=m.updateQueue)){var y=null,_=null;if((d=d.firstBaseUpdate)!==null){do{var C={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};_===null?y=_=C:_=_.next=C,d=d.next}while(d!==null);_===null?y=_=l:_=_.next=l}else y=_=l;return d={baseState:m.baseState,firstBaseUpdate:y,lastBaseUpdate:_,shared:m.shared,effects:m.effects},void(a.updateQueue=d)}(a=d.lastBaseUpdate)===null?d.firstBaseUpdate=l:a.next=l,d.lastBaseUpdate=l}function Lu(a,l,d,m){var y=a.updateQueue;Gi=!1;var _=y.firstBaseUpdate,C=y.lastBaseUpdate,I=y.shared.pending;if(I!==null){y.shared.pending=null;var F=I,G=F.next;F.next=null,C===null?_=G:C.next=G,C=F;var $=a.alternate;$!==null&&(I=($=$.updateQueue).lastBaseUpdate)!==C&&(I===null?$.firstBaseUpdate=G:I.next=G,$.lastBaseUpdate=F)}if(_!==null){var re=y.baseState;for(C=0,$=G=F=null,I=_;;){var j=I.lane,q=I.eventTime;if((m&j)===j){$!==null&&($=$.next={eventTime:q,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ue=a,Ce=I;switch(j=l,q=d,Ce.tag){case 1:if(typeof(ue=Ce.payload)=="function"){re=ue.call(q,re,j);break e}re=ue;break e;case 3:ue.flags=-65537&ue.flags|128;case 0:if((j=typeof(ue=Ce.payload)=="function"?ue.call(q,re,j):ue)==null)break e;re=i({},re,j);break e;case 2:Gi=!0}}I.callback!==null&&I.lane!==0&&(a.flags|=64,(j=y.effects)===null?y.effects=[I]:j.push(I))}else q={eventTime:q,lane:j,tag:I.tag,payload:I.payload,callback:I.callback,next:null},$===null?(G=$=q,F=re):$=$.next=q,C|=j;if((I=I.next)===null){if((I=y.shared.pending)===null)break;I=(j=I).next,j.next=null,y.lastBaseUpdate=j,y.shared.pending=null}}if($===null&&(F=re),y.baseState=F,y.firstBaseUpdate=G,y.lastBaseUpdate=$,(l=y.shared.interleaved)!==null){y=l;do C|=y.lane,y=y.next;while(y!==l)}else _===null&&(y.shared.lanes=0);Os|=C,a.lanes=C,a.memoizedState=re}}function Hy(a,l,d){if(a=l.effects,l.effects=null,a!==null)for(l=0;l<a.length;l++){var m=a[l],y=m.callback;if(y!==null){if(m.callback=null,m=d,typeof y!="function")throw Error(s(191,y));y.call(m)}}}var $y=new r.Component().refs;function Pf(a,l,d,m){d=(d=d(m,l=a.memoizedState))==null?l:i({},l,d),a.memoizedState=d,a.lanes===0&&(a.updateQueue.baseState=d)}var Bu={isMounted:function(a){return!!(a=a._reactInternals)&&M(a)===a},enqueueSetState:function(a,l,d){a=a._reactInternals;var m=Zt(),y=Wi(a),_=hi(m,y);_.payload=l,d!=null&&(_.callback=d),(l=ji(a,_,y))!==null&&(Wr(l,a,y,m),Fu(l,a,y))},enqueueReplaceState:function(a,l,d){a=a._reactInternals;var m=Zt(),y=Wi(a),_=hi(m,y);_.tag=1,_.payload=l,d!=null&&(_.callback=d),(l=ji(a,_,y))!==null&&(Wr(l,a,y,m),Fu(l,a,y))},enqueueForceUpdate:function(a,l){a=a._reactInternals;var d=Zt(),m=Wi(a),y=hi(d,m);y.tag=2,l!=null&&(y.callback=l),(l=ji(a,y,m))!==null&&(Wr(l,a,m,d),Fu(l,a,m))}};function Vy(a,l,d,m,y,_,C){return typeof(a=a.stateNode).shouldComponentUpdate=="function"?a.shouldComponentUpdate(m,_,C):!l.prototype||!l.prototype.isPureReactComponent||!Du(d,m)||!Du(y,_)}function Wy(a,l,d){var m=!1,y=zi,_=l.contextType;return typeof _=="object"&&_!==null?_=Hr(_):(y=Sr(l)?Rs:Yt.current,_=(m=(m=l.contextTypes)!=null)?_o(a,y):zi),l=new l(d,_),a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Bu,a.stateNode=l,l._reactInternals=a,m&&((a=a.stateNode).__reactInternalMemoizedUnmaskedChildContext=y,a.__reactInternalMemoizedMaskedChildContext=_),l}function Xy(a,l,d,m){a=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(d,m),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(d,m),l.state!==a&&Bu.enqueueReplaceState(l,l.state,null)}function If(a,l,d,m){var y=a.stateNode;y.props=d,y.state=a.memoizedState,y.refs=$y,Af(a);var _=l.contextType;typeof _=="object"&&_!==null?y.context=Hr(_):(_=Sr(l)?Rs:Yt.current,y.context=_o(a,_)),y.state=a.memoizedState,typeof(_=l.getDerivedStateFromProps)=="function"&&(Pf(a,l,_,d),y.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof y.getSnapshotBeforeUpdate=="function"||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(l=y.state,typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount(),l!==y.state&&Bu.enqueueReplaceState(y,y.state,null),Lu(a,d,y,m),y.state=a.memoizedState),typeof y.componentDidMount=="function"&&(a.flags|=4194308)}function za(a,l,d){if((a=d.ref)!==null&&typeof a!="function"&&typeof a!="object"){if(d._owner){if(d=d._owner){if(d.tag!==1)throw Error(s(309));var m=d.stateNode}if(!m)throw Error(s(147,a));var y=m,_=""+a;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===_?l.ref:(l=function(C){var I=y.refs;I===$y&&(I=y.refs={}),C===null?delete I[_]:I[_]=C},l._stringRef=_,l)}if(typeof a!="string")throw Error(s(284));if(!d._owner)throw Error(s(290,a))}return a}function Uu(a,l){throw a=Object.prototype.toString.call(l),Error(s(31,a==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":a))}function Yy(a){return(0,a._init)(a._payload)}function Ky(a){function l(V,N){if(a){var B=V.deletions;B===null?(V.deletions=[N],V.flags|=16):B.push(N)}}function d(V,N){if(!a)return null;for(;N!==null;)l(V,N),N=N.sibling;return null}function m(V,N){for(V=new Map;N!==null;)N.key!==null?V.set(N.key,N):V.set(N.index,N),N=N.sibling;return V}function y(V,N){return(V=Yi(V,N)).index=0,V.sibling=null,V}function _(V,N,B){return V.index=B,a?(B=V.alternate)!==null?(B=B.index)<N?(V.flags|=2,N):B:(V.flags|=2,N):(V.flags|=1048576,N)}function C(V){return a&&V.alternate===null&&(V.flags|=2),V}function I(V,N,B,K){return N===null||N.tag!==6?((N=mp(B,V.mode,K)).return=V,N):((N=y(N,B)).return=V,N)}function F(V,N,B,K){var ge=B.type;return ge===h?$(V,N,B.props.children,K,B.key):N!==null&&(N.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===b&&Yy(ge)===N.type)?((K=y(N,B.props)).ref=za(V,N,B),K.return=V,K):((K=hc(B.type,B.key,B.props,null,V.mode,K)).ref=za(V,N,B),K.return=V,K)}function G(V,N,B,K){return N===null||N.tag!==4||N.stateNode.containerInfo!==B.containerInfo||N.stateNode.implementation!==B.implementation?((N=gp(B,V.mode,K)).return=V,N):((N=y(N,B.children||[])).return=V,N)}function $(V,N,B,K,ge){return N===null||N.tag!==7?((N=Bs(B,V.mode,K,ge)).return=V,N):((N=y(N,B)).return=V,N)}function re(V,N,B){if(typeof N=="string"&&N!==""||typeof N=="number")return(N=mp(""+N,V.mode,B)).return=V,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case u:return(B=hc(N.type,N.key,N.props,null,V.mode,B)).ref=za(V,null,N),B.return=V,B;case c:return(N=gp(N,V.mode,B)).return=V,N;case b:return re(V,(0,N._init)(N._payload),B)}if(fe(N)||P(N))return(N=Bs(N,V.mode,B,null)).return=V,N;Uu(V,N)}return null}function j(V,N,B,K){var ge=N!==null?N.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return ge!==null?null:I(V,N,""+B,K);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case u:return B.key===ge?F(V,N,B,K):null;case c:return B.key===ge?G(V,N,B,K):null;case b:return j(V,N,(ge=B._init)(B._payload),K)}if(fe(B)||P(B))return ge!==null?null:$(V,N,B,K,null);Uu(V,B)}return null}function q(V,N,B,K,ge){if(typeof K=="string"&&K!==""||typeof K=="number")return I(N,V=V.get(B)||null,""+K,ge);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case u:return F(N,V=V.get(K.key===null?B:K.key)||null,K,ge);case c:return G(N,V=V.get(K.key===null?B:K.key)||null,K,ge);case b:return q(V,N,B,(0,K._init)(K._payload),ge)}if(fe(K)||P(K))return $(N,V=V.get(B)||null,K,ge,null);Uu(N,K)}return null}function ue(V,N,B,K){for(var ge=null,Ue=null,ce=N,Fe=N=0,Gt=null;ce!==null&&Fe<B.length;Fe++){ce.index>Fe?(Gt=ce,ce=null):Gt=ce.sibling;var ze=j(V,ce,B[Fe],K);if(ze===null){ce===null&&(ce=Gt);break}a&&ce&&ze.alternate===null&&l(V,ce),N=_(ze,N,Fe),Ue===null?ge=ze:Ue.sibling=ze,Ue=ze,ce=Gt}if(Fe===B.length)return d(V,ce),tt&&Ms(V,Fe),ge;if(ce===null){for(;Fe<B.length;Fe++)(ce=re(V,B[Fe],K))!==null&&(N=_(ce,N,Fe),Ue===null?ge=ce:Ue.sibling=ce,Ue=ce);return tt&&Ms(V,Fe),ge}for(ce=m(V,ce);Fe<B.length;Fe++)(Gt=q(ce,V,Fe,B[Fe],K))!==null&&(a&&Gt.alternate!==null&&ce.delete(Gt.key===null?Fe:Gt.key),N=_(Gt,N,Fe),Ue===null?ge=Gt:Ue.sibling=Gt,Ue=Gt);return a&&ce.forEach(function(Ki){return l(V,Ki)}),tt&&Ms(V,Fe),ge}function Ce(V,N,B,K){var ge=P(B);if(typeof ge!="function")throw Error(s(150));if((B=ge.call(B))==null)throw Error(s(151));for(var Ue=ge=null,ce=N,Fe=N=0,Gt=null,ze=B.next();ce!==null&&!ze.done;Fe++,ze=B.next()){ce.index>Fe?(Gt=ce,ce=null):Gt=ce.sibling;var Ki=j(V,ce,ze.value,K);if(Ki===null){ce===null&&(ce=Gt);break}a&&ce&&Ki.alternate===null&&l(V,ce),N=_(Ki,N,Fe),Ue===null?ge=Ki:Ue.sibling=Ki,Ue=Ki,ce=Gt}if(ze.done)return d(V,ce),tt&&Ms(V,Fe),ge;if(ce===null){for(;!ze.done;Fe++,ze=B.next())(ze=re(V,ze.value,K))!==null&&(N=_(ze,N,Fe),Ue===null?ge=ze:Ue.sibling=ze,Ue=ze);return tt&&Ms(V,Fe),ge}for(ce=m(V,ce);!ze.done;Fe++,ze=B.next())(ze=q(ce,V,Fe,ze.value,K))!==null&&(a&&ze.alternate!==null&&ce.delete(ze.key===null?Fe:ze.key),N=_(ze,N,Fe),Ue===null?ge=ze:Ue.sibling=ze,Ue=ze);return a&&ce.forEach(function(zE){return l(V,zE)}),tt&&Ms(V,Fe),ge}return function V(N,B,K,ge){if(typeof K=="object"&&K!==null&&K.type===h&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case u:e:{for(var Ue=K.key,ce=B;ce!==null;){if(ce.key===Ue){if((Ue=K.type)===h){if(ce.tag===7){d(N,ce.sibling),(B=y(ce,K.props.children)).return=N,N=B;break e}}else if(ce.elementType===Ue||typeof Ue=="object"&&Ue!==null&&Ue.$$typeof===b&&Yy(Ue)===ce.type){d(N,ce.sibling),(B=y(ce,K.props)).ref=za(N,ce,K),B.return=N,N=B;break e}d(N,ce);break}l(N,ce),ce=ce.sibling}K.type===h?((B=Bs(K.props.children,N.mode,ge,K.key)).return=N,N=B):((ge=hc(K.type,K.key,K.props,null,N.mode,ge)).ref=za(N,B,K),ge.return=N,N=ge)}return C(N);case c:e:{for(ce=K.key;B!==null;){if(B.key===ce){if(B.tag===4&&B.stateNode.containerInfo===K.containerInfo&&B.stateNode.implementation===K.implementation){d(N,B.sibling),(B=y(B,K.children||[])).return=N,N=B;break e}d(N,B);break}l(N,B),B=B.sibling}(B=gp(K,N.mode,ge)).return=N,N=B}return C(N);case b:return V(N,B,(ce=K._init)(K._payload),ge)}if(fe(K))return ue(N,B,K,ge);if(P(K))return Ce(N,B,K,ge);Uu(N,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,B!==null&&B.tag===6?(d(N,B.sibling),(B=y(B,K)).return=N,N=B):(d(N,B),(B=mp(K,N.mode,ge)).return=N,N=B),C(N)):d(N,B)}}var Co=Ky(!0),Qy=Ky(!1),Ga={},$r=Ui(Ga),ja=Ui(Ga),Ao=Ui(Ga);function Un(a){if(a===Ga)throw Error(s(174));return a}function Rf(a,l){We(Ao,l),We(ja,a),We($r,Ga),a=z(l),et($r),We($r,a)}function Po(){et($r),et(ja),et(Ao)}function Zy(a){var l=Un(Ao.current),d=Un($r.current);d!==(l=R(d,a.type,l))&&(We(ja,a),We($r,l))}function kf(a){ja.current===a&&(et($r),et(ja))}var dt=Ui(0);function zu(a){for(var l=a;l!==null;){if(l.tag===13){var d=l.memoizedState;if(d!==null&&((d=d.dehydrated)===null||Ey(d)||nf(d)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if((128&l.flags)!=0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Mf=[];function Df(){for(var a=0;a<Mf.length;a++){var l=Mf[a];ht?l._workInProgressVersionPrimary=null:l._workInProgressVersionSecondary=null}Mf.length=0}var Gu=o.ReactCurrentDispatcher,Nf=o.ReactCurrentBatchConfig,Ns=0,st=null,Dt=null,Nt=null,ju=!1,Ha=!1,$a=0,yE=0;function Kt(){throw Error(s(321))}function Of(a,l){if(l===null)return!1;for(var d=0;d<l.length&&d<a.length;d++)if(!ln(a[d],l[d]))return!1;return!0}function Ff(a,l,d,m,y,_){if(Ns=_,st=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Gu.current=a===null||a.memoizedState===null?TE:bE,a=d(m,y),Ha){_=0;do{if(Ha=!1,$a=0,25<=_)throw Error(s(301));_+=1,Nt=Dt=null,l.updateQueue=null,Gu.current=wE,a=d(m,y)}while(Ha)}if(Gu.current=Vu,l=Dt!==null&&Dt.next!==null,Ns=0,Nt=Dt=st=null,ju=!1,l)throw Error(s(300));return a}function Lf(){var a=$a!==0;return $a=0,a}function zn(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?st.memoizedState=Nt=a:Nt=Nt.next=a,Nt}function Vr(){if(Dt===null){var a=st.alternate;a=a!==null?a.memoizedState:null}else a=Dt.next;var l=Nt===null?st.memoizedState:Nt.next;if(l!==null)Nt=l,Dt=a;else{if(a===null)throw Error(s(310));a={memoizedState:(Dt=a).memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Nt===null?st.memoizedState=Nt=a:Nt=Nt.next=a}return Nt}function Va(a,l){return typeof l=="function"?l(a):l}function Bf(a){var l=Vr(),d=l.queue;if(d===null)throw Error(s(311));d.lastRenderedReducer=a;var m=Dt,y=m.baseQueue,_=d.pending;if(_!==null){if(y!==null){var C=y.next;y.next=_.next,_.next=C}m.baseQueue=y=_,d.pending=null}if(y!==null){_=y.next,m=m.baseState;var I=C=null,F=null,G=_;do{var $=G.lane;if((Ns&$)===$)F!==null&&(F=F.next={lane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),m=G.hasEagerState?G.eagerState:a(m,G.action);else{var re={lane:$,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null};F===null?(I=F=re,C=m):F=F.next=re,st.lanes|=$,Os|=$}G=G.next}while(G!==null&&G!==_);F===null?C=m:F.next=I,ln(m,l.memoizedState)||(pr=!0),l.memoizedState=m,l.baseState=C,l.baseQueue=F,d.lastRenderedState=m}if((a=d.interleaved)!==null){y=a;do _=y.lane,st.lanes|=_,Os|=_,y=y.next;while(y!==a)}else y===null&&(d.lanes=0);return[l.memoizedState,d.dispatch]}function Uf(a){var l=Vr(),d=l.queue;if(d===null)throw Error(s(311));d.lastRenderedReducer=a;var m=d.dispatch,y=d.pending,_=l.memoizedState;if(y!==null){d.pending=null;var C=y=y.next;do _=a(_,C.action),C=C.next;while(C!==y);ln(_,l.memoizedState)||(pr=!0),l.memoizedState=_,l.baseQueue===null&&(l.baseState=_),d.lastRenderedState=_}return[_,m]}function qy(){}function Jy(a,l){var d=st,m=Vr(),y=l(),_=!ln(m.memoizedState,y);if(_&&(m.memoizedState=y,pr=!0),m=m.queue,zf(rv.bind(null,d,m,a),[a]),m.getSnapshot!==l||_||Nt!==null&&1&Nt.memoizedState.tag){if(d.flags|=2048,Wa(9,tv.bind(null,d,m,y,l),void 0,null),Ot===null)throw Error(s(349));(30&Ns)!=0||ev(d,l,y)}return y}function ev(a,l,d){a.flags|=16384,a={getSnapshot:l,value:d},(l=st.updateQueue)===null?(l={lastEffect:null,stores:null},st.updateQueue=l,l.stores=[a]):(d=l.stores)===null?l.stores=[a]:d.push(a)}function tv(a,l,d,m){l.value=d,l.getSnapshot=m,nv(l)&&iv(a)}function rv(a,l,d){return d(function(){nv(l)&&iv(a)})}function nv(a){var l=a.getSnapshot;a=a.value;try{var d=l();return!ln(a,d)}catch{return!0}}function iv(a){var l=Bn(a,1);l!==null&&Wr(l,a,1,-1)}function sv(a){var l=zn();return typeof a=="function"&&(a=a()),l.memoizedState=l.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:a},l.queue=a,a=a.dispatch=_E.bind(null,st,a),[l.memoizedState,a]}function Wa(a,l,d,m){return a={tag:a,create:l,destroy:d,deps:m,next:null},(l=st.updateQueue)===null?(l={lastEffect:null,stores:null},st.updateQueue=l,l.lastEffect=a.next=a):(d=l.lastEffect)===null?l.lastEffect=a.next=a:(m=d.next,d.next=a,a.next=m,l.lastEffect=a),a}function ov(){return Vr().memoizedState}function Hu(a,l,d,m){var y=zn();st.flags|=a,y.memoizedState=Wa(1|l,d,void 0,m===void 0?null:m)}function $u(a,l,d,m){var y=Vr();m=m===void 0?null:m;var _=void 0;if(Dt!==null){var C=Dt.memoizedState;if(_=C.destroy,m!==null&&Of(m,C.deps))return void(y.memoizedState=Wa(l,d,_,m))}st.flags|=a,y.memoizedState=Wa(1|l,d,_,m)}function av(a,l){return Hu(8390656,8,a,l)}function zf(a,l){return $u(2048,8,a,l)}function lv(a,l){return $u(4,2,a,l)}function uv(a,l){return $u(4,4,a,l)}function cv(a,l){return typeof l=="function"?(a=a(),l(a),function(){l(null)}):l!=null?(a=a(),l.current=a,function(){l.current=null}):void 0}function hv(a,l,d){return d=d!=null?d.concat([a]):null,$u(4,4,cv.bind(null,l,a),d)}function Gf(){}function dv(a,l){var d=Vr();l=l===void 0?null:l;var m=d.memoizedState;return m!==null&&l!==null&&Of(l,m[1])?m[0]:(d.memoizedState=[a,l],a)}function fv(a,l){var d=Vr();l=l===void 0?null:l;var m=d.memoizedState;return m!==null&&l!==null&&Of(l,m[1])?m[0]:(a=a(),d.memoizedState=[a,l],a)}function pv(a,l,d){return(21&Ns)==0?(a.baseState&&(a.baseState=!1,pr=!0),a.memoizedState=d):(ln(d,l)||(d=Iy(),st.lanes|=d,Os|=d,a.baseState=!0),l)}function vE(a,l){var d=Oe;Oe=d!==0&&4>d?d:4,a(!0);var m=Nf.transition;Nf.transition={};try{a(!1),l()}finally{Oe=d,Nf.transition=m}}function mv(){return Vr().memoizedState}function xE(a,l,d){var m=Wi(a);d={lane:m,action:d,hasEagerState:!1,eagerState:null,next:null},gv(a)?yv(l,d):(d=zy(a,l,d,m))!==null&&(Wr(d,a,m,Zt()),vv(d,l,m))}function _E(a,l,d){var m=Wi(a),y={lane:m,action:d,hasEagerState:!1,eagerState:null,next:null};if(gv(a))yv(l,y);else{var _=a.alternate;if(a.lanes===0&&(_===null||_.lanes===0)&&(_=l.lastRenderedReducer)!==null)try{var C=l.lastRenderedState,I=_(C,d);if(y.hasEagerState=!0,y.eagerState=I,ln(I,C)){var F=l.interleaved;return F===null?(y.next=y,Cf(l)):(y.next=F.next,F.next=y),void(l.interleaved=y)}}catch{}(d=zy(a,l,y,m))!==null&&(Wr(d,a,m,y=Zt()),vv(d,l,m))}}function gv(a){var l=a.alternate;return a===st||l!==null&&l===st}function yv(a,l){Ha=ju=!0;var d=a.pending;d===null?l.next=l:(l.next=d.next,d.next=l),a.pending=l}function vv(a,l,d){if((4194240&d)!=0){var m=l.lanes;d|=m&=a.pendingLanes,l.lanes=d,ff(a,d)}}var Vu={readContext:Hr,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},TE={readContext:Hr,useCallback:function(a,l){return zn().memoizedState=[a,l===void 0?null:l],a},useContext:Hr,useEffect:av,useImperativeHandle:function(a,l,d){return d=d!=null?d.concat([a]):null,Hu(4194308,4,cv.bind(null,l,a),d)},useLayoutEffect:function(a,l){return Hu(4194308,4,a,l)},useInsertionEffect:function(a,l){return Hu(4,2,a,l)},useMemo:function(a,l){var d=zn();return l=l===void 0?null:l,a=a(),d.memoizedState=[a,l],a},useReducer:function(a,l,d){var m=zn();return l=d!==void 0?d(l):l,m.memoizedState=m.baseState=l,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:l},m.queue=a,a=a.dispatch=xE.bind(null,st,a),[m.memoizedState,a]},useRef:function(a){return a={current:a},zn().memoizedState=a},useState:sv,useDebugValue:Gf,useDeferredValue:function(a){return zn().memoizedState=a},useTransition:function(){var a=sv(!1),l=a[0];return a=vE.bind(null,a[1]),zn().memoizedState=a,[l,a]},useMutableSource:function(){},useSyncExternalStore:function(a,l,d){var m=st,y=zn();if(tt){if(d===void 0)throw Error(s(407));d=d()}else{if(d=l(),Ot===null)throw Error(s(349));(30&Ns)!=0||ev(m,l,d)}y.memoizedState=d;var _={value:d,getSnapshot:l};return y.queue=_,av(rv.bind(null,m,_,a),[a]),m.flags|=2048,Wa(9,tv.bind(null,m,_,d,l),void 0,null),d},useId:function(){var a=zn(),l=Ot.identifierPrefix;if(tt){var d=ci;l=":"+l+"R"+(d=(Ln&~(1<<32-an(Ln)-1)).toString(32)+d),0<(d=$a++)&&(l+="H"+d.toString(32)),l+=":"}else l=":"+l+"r"+(d=yE++).toString(32)+":";return a.memoizedState=l},unstable_isNewReconciler:!1},bE={readContext:Hr,useCallback:dv,useContext:Hr,useEffect:zf,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:fv,useReducer:Bf,useRef:ov,useState:function(){return Bf(Va)},useDebugValue:Gf,useDeferredValue:function(a){return pv(Vr(),Dt.memoizedState,a)},useTransition:function(){return[Bf(Va)[0],Vr().memoizedState]},useMutableSource:qy,useSyncExternalStore:Jy,useId:mv,unstable_isNewReconciler:!1},wE={readContext:Hr,useCallback:dv,useContext:Hr,useEffect:zf,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:fv,useReducer:Uf,useRef:ov,useState:function(){return Uf(Va)},useDebugValue:Gf,useDeferredValue:function(a){var l=Vr();return Dt===null?l.memoizedState=a:pv(l,Dt.memoizedState,a)},useTransition:function(){return[Uf(Va)[0],Vr().memoizedState]},useMutableSource:qy,useSyncExternalStore:Jy,useId:mv,unstable_isNewReconciler:!1};function Io(a,l){try{var d="",m=l;do d+=gE(m),m=m.return;while(m);var y=d}catch(_){y=`
Error generating stack: `+_.message+`
`+_.stack}return{value:a,source:l,stack:y,digest:null}}function jf(a,l,d){return{value:a,source:null,stack:d!=null?d:null,digest:l!=null?l:null}}function Hf(a,l){try{console.error(l.value)}catch(d){setTimeout(function(){throw d})}}var SE=typeof WeakMap=="function"?WeakMap:Map;function xv(a,l,d){(d=hi(-1,d)).tag=3,d.payload={element:null};var m=l.value;return d.callback=function(){sc||(sc=!0,lp=m),Hf(0,l)},d}function _v(a,l,d){(d=hi(-1,d)).tag=3;var m=a.type.getDerivedStateFromError;if(typeof m=="function"){var y=l.value;d.payload=function(){return m(y)},d.callback=function(){Hf(0,l)}}var _=a.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(d.callback=function(){Hf(0,l),typeof m!="function"&&($i===null?$i=new Set([this]):$i.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})}),d}function Tv(a,l,d){var m=a.pingCache;if(m===null){m=a.pingCache=new SE;var y=new Set;m.set(l,y)}else(y=m.get(l))===void 0&&(y=new Set,m.set(l,y));y.has(d)||(y.add(d),a=DE.bind(null,a,l,d),l.then(a,a))}function bv(a){do{var l;if((l=a.tag===13)&&(l=(l=a.memoizedState)===null||l.dehydrated!==null),l)return a;a=a.return}while(a!==null);return null}function wv(a,l,d,m,y){return(1&a.mode)==0?(a===l?a.flags|=65536:(a.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:((l=hi(-1,1)).tag=2,ji(d,l,1))),d.lanes|=1),a):(a.flags|=65536,a.lanes=y,a)}var EE=o.ReactCurrentOwner,pr=!1;function mr(a,l,d,m){l.child=a===null?Qy(l,null,d,m):Co(l,a.child,d,m)}function Sv(a,l,d,m,y){d=d.render;var _=l.ref;return Eo(l,y),m=Ff(a,l,d,m,_,y),d=Lf(),a===null||pr?(tt&&d&&yf(l),l.flags|=1,mr(a,l,m,y),l.child):(l.updateQueue=a.updateQueue,l.flags&=-2053,a.lanes&=~y,di(a,l,y))}function Ev(a,l,d,m,y){if(a===null){var _=d.type;return typeof _!="function"||pp(_)||_.defaultProps!==void 0||d.compare!==null||d.defaultProps!==void 0?((a=hc(d.type,null,m,l,l.mode,y)).ref=l.ref,a.return=l,l.child=a):(l.tag=15,l.type=_,Cv(a,l,_,m,y))}if(_=a.child,(a.lanes&y)==0){var C=_.memoizedProps;if((d=(d=d.compare)!==null?d:Du)(C,m)&&a.ref===l.ref)return di(a,l,y)}return l.flags|=1,(a=Yi(_,m)).ref=l.ref,a.return=l,l.child=a}function Cv(a,l,d,m,y){if(a!==null){var _=a.memoizedProps;if(Du(_,m)&&a.ref===l.ref){if(pr=!1,l.pendingProps=m=_,(a.lanes&y)==0)return l.lanes=a.lanes,di(a,l,y);(131072&a.flags)!=0&&(pr=!0)}}return $f(a,l,d,m,y)}function Av(a,l,d){var m=l.pendingProps,y=m.children,_=a!==null?a.memoizedState:null;if(m.mode==="hidden")if((1&l.mode)==0)l.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(ko,Cr),Cr|=d;else{if((1073741824&d)==0)return a=_!==null?_.baseLanes|d:d,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:a,cachePool:null,transitions:null},l.updateQueue=null,We(ko,Cr),Cr|=a,null;l.memoizedState={baseLanes:0,cachePool:null,transitions:null},m=_!==null?_.baseLanes:d,We(ko,Cr),Cr|=m}else _!==null?(m=_.baseLanes|d,l.memoizedState=null):m=d,We(ko,Cr),Cr|=m;return mr(a,l,y,d),l.child}function Pv(a,l){var d=l.ref;(a===null&&d!==null||a!==null&&a.ref!==d)&&(l.flags|=512,l.flags|=2097152)}function $f(a,l,d,m,y){var _=Sr(d)?Rs:Yt.current;return _=_o(l,_),Eo(l,y),d=Ff(a,l,d,m,_,y),m=Lf(),a===null||pr?(tt&&m&&yf(l),l.flags|=1,mr(a,l,d,y),l.child):(l.updateQueue=a.updateQueue,l.flags&=-2053,a.lanes&=~y,di(a,l,y))}function Iv(a,l,d,m,y){if(Sr(d)){var _=!0;Cu(l)}else _=!1;if(Eo(l,y),l.stateNode===null)Ku(a,l),Wy(l,d,m),If(l,d,m,y),m=!0;else if(a===null){var C=l.stateNode,I=l.memoizedProps;C.props=I;var F=C.context,G=d.contextType;typeof G=="object"&&G!==null?G=Hr(G):G=_o(l,G=Sr(d)?Rs:Yt.current);var $=d.getDerivedStateFromProps,re=typeof $=="function"||typeof C.getSnapshotBeforeUpdate=="function";re||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(I!==m||F!==G)&&Xy(l,C,m,G),Gi=!1;var j=l.memoizedState;C.state=j,Lu(l,m,C,y),F=l.memoizedState,I!==m||j!==F||fr.current||Gi?(typeof $=="function"&&(Pf(l,d,$,m),F=l.memoizedState),(I=Gi||Vy(l,d,I,m,j,F,G))?(re||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(l.flags|=4194308)):(typeof C.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=m,l.memoizedState=F),C.props=m,C.state=F,C.context=G,m=I):(typeof C.componentDidMount=="function"&&(l.flags|=4194308),m=!1)}else{C=l.stateNode,Gy(a,l),I=l.memoizedProps,G=l.type===l.elementType?I:cn(l.type,I),C.props=G,re=l.pendingProps,j=C.context,typeof(F=d.contextType)=="object"&&F!==null?F=Hr(F):F=_o(l,F=Sr(d)?Rs:Yt.current);var q=d.getDerivedStateFromProps;($=typeof q=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(I!==re||j!==F)&&Xy(l,C,m,F),Gi=!1,j=l.memoizedState,C.state=j,Lu(l,m,C,y);var ue=l.memoizedState;I!==re||j!==ue||fr.current||Gi?(typeof q=="function"&&(Pf(l,d,q,m),ue=l.memoizedState),(G=Gi||Vy(l,d,G,m,j,ue,F)||!1)?($||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(m,ue,F),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(m,ue,F)),typeof C.componentDidUpdate=="function"&&(l.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof C.componentDidUpdate!="function"||I===a.memoizedProps&&j===a.memoizedState||(l.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||I===a.memoizedProps&&j===a.memoizedState||(l.flags|=1024),l.memoizedProps=m,l.memoizedState=ue),C.props=m,C.state=ue,C.context=F,m=G):(typeof C.componentDidUpdate!="function"||I===a.memoizedProps&&j===a.memoizedState||(l.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||I===a.memoizedProps&&j===a.memoizedState||(l.flags|=1024),m=!1)}return Vf(a,l,d,m,_,y)}function Vf(a,l,d,m,y,_){Pv(a,l);var C=(128&l.flags)!=0;if(!m&&!C)return y&&Py(l,d,!1),di(a,l,_);m=l.stateNode,EE.current=l;var I=C&&typeof d.getDerivedStateFromError!="function"?null:m.render();return l.flags|=1,a!==null&&C?(l.child=Co(l,a.child,null,_),l.child=Co(l,null,I,_)):mr(a,l,I,_),l.memoizedState=m.state,y&&Py(l,d,!0),l.child}function Rv(a){var l=a.stateNode;l.pendingContext?Cy(0,l.pendingContext,l.pendingContext!==l.context):l.context&&Cy(0,l.context,!1),Rf(a,l.containerInfo)}function kv(a,l,d,m,y){return wo(),Tf(y),l.flags|=256,mr(a,l,d,m),l.child}var Xa,Ya,Wu,Xu,Wf={dehydrated:null,treeContext:null,retryLane:0};function Xf(a){return{baseLanes:a,cachePool:null,transitions:null}}function Mv(a,l,d){var m,y=l.pendingProps,_=dt.current,C=!1,I=(128&l.flags)!=0;if((m=I)||(m=(a===null||a.memoizedState!==null)&&(2&_)!=0),m?(C=!0,l.flags&=-129):a!==null&&a.memoizedState===null||(_|=1),We(dt,1&_),a===null)return _f(l),(a=l.memoizedState)!==null&&(a=a.dehydrated)!==null?((1&l.mode)==0?l.lanes=1:nf(a)?l.lanes=8:l.lanes=1073741824,null):(I=y.children,a=y.fallback,C?(y=l.mode,C=l.child,I={mode:"hidden",children:I},(1&y)==0&&C!==null?(C.childLanes=0,C.pendingProps=I):C=dc(I,y,0,null),a=Bs(a,y,d,null),C.return=l,a.return=l,C.sibling=a,l.child=C,l.child.memoizedState=Xf(d),l.memoizedState=Wf,a):Yf(l,I));if((_=a.memoizedState)!==null&&(m=_.dehydrated)!==null)return function(G,$,re,j,q,ue,Ce){if(re)return 256&$.flags?($.flags&=-257,Yu(G,$,Ce,j=jf(Error(s(422))))):$.memoizedState!==null?($.child=G.child,$.flags|=128,null):(ue=j.fallback,q=$.mode,j=dc({mode:"visible",children:j.children},q,0,null),(ue=Bs(ue,q,Ce,null)).flags|=2,j.return=$,ue.return=$,j.sibling=ue,$.child=j,(1&$.mode)!=0&&Co($,G.child,null,Ce),$.child.memoizedState=Xf(Ce),$.memoizedState=Wf,ue);if((1&$.mode)==0)return Yu(G,$,Ce,null);if(nf(q))return j=VS(q).digest,ue=Error(s(419)),j=jf(ue,j,void 0),Yu(G,$,Ce,j);if(re=(Ce&G.childLanes)!=0,pr||re){if((j=Ot)!==null){switch(Ce&-Ce){case 4:q=2;break;case 16:q=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:q=32;break;case 536870912:q=268435456;break;default:q=0}(q=(q&(j.suspendedLanes|Ce))!=0?0:q)!==0&&q!==ue.retryLane&&(ue.retryLane=q,Bn(G,q),Wr(j,G,q,-1))}return fp(),Yu(G,$,Ce,j=jf(Error(s(421))))}return Ey(q)?($.flags|=128,$.child=G.child,$=NE.bind(null,G),WS(q,$),null):(G=ue.treeContext,Ne&&(jr=KS(q),Er=$,tt=!0,un=null,Ua=!1,G!==null&&(zr[Gr++]=Ln,zr[Gr++]=ci,zr[Gr++]=ks,Ln=G.id,ci=G.overflow,ks=$)),$=Yf($,j.children),$.flags|=4096,$)}(a,l,I,y,m,_,d);if(C){C=y.fallback,I=l.mode,m=(_=a.child).sibling;var F={mode:"hidden",children:y.children};return(1&I)==0&&l.child!==_?((y=l.child).childLanes=0,y.pendingProps=F,l.deletions=null):(y=Yi(_,F)).subtreeFlags=14680064&_.subtreeFlags,m!==null?C=Yi(m,C):(C=Bs(C,I,d,null)).flags|=2,C.return=l,y.return=l,y.sibling=C,l.child=y,y=C,C=l.child,I=(I=a.child.memoizedState)===null?Xf(d):{baseLanes:I.baseLanes|d,cachePool:null,transitions:I.transitions},C.memoizedState=I,C.childLanes=a.childLanes&~d,l.memoizedState=Wf,y}return a=(C=a.child).sibling,y=Yi(C,{mode:"visible",children:y.children}),(1&l.mode)==0&&(y.lanes=d),y.return=l,y.sibling=null,a!==null&&((d=l.deletions)===null?(l.deletions=[a],l.flags|=16):d.push(a)),l.child=y,l.memoizedState=null,y}function Yf(a,l){return(l=dc({mode:"visible",children:l},a.mode,0,null)).return=a,a.child=l}function Yu(a,l,d,m){return m!==null&&Tf(m),Co(l,a.child,null,d),(a=Yf(l,l.pendingProps.children)).flags|=2,l.memoizedState=null,a}function Dv(a,l,d){a.lanes|=l;var m=a.alternate;m!==null&&(m.lanes|=l),Ef(a.return,l,d)}function Kf(a,l,d,m,y){var _=a.memoizedState;_===null?a.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:m,tail:d,tailMode:y}:(_.isBackwards=l,_.rendering=null,_.renderingStartTime=0,_.last=m,_.tail=d,_.tailMode=y)}function Nv(a,l,d){var m=l.pendingProps,y=m.revealOrder,_=m.tail;if(mr(a,l,m.children,d),(2&(m=dt.current))!=0)m=1&m|2,l.flags|=128;else{if(a!==null&&(128&a.flags)!=0)e:for(a=l.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Dv(a,d,l);else if(a.tag===19)Dv(a,d,l);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===l)break e;for(;a.sibling===null;){if(a.return===null||a.return===l)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}m&=1}if(We(dt,m),(1&l.mode)==0)l.memoizedState=null;else switch(y){case"forwards":for(d=l.child,y=null;d!==null;)(a=d.alternate)!==null&&zu(a)===null&&(y=d),d=d.sibling;(d=y)===null?(y=l.child,l.child=null):(y=d.sibling,d.sibling=null),Kf(l,!1,y,d,_);break;case"backwards":for(d=null,y=l.child,l.child=null;y!==null;){if((a=y.alternate)!==null&&zu(a)===null){l.child=y;break}a=y.sibling,y.sibling=d,d=y,y=a}Kf(l,!0,d,null,_);break;case"together":Kf(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function Ku(a,l){(1&l.mode)==0&&a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2)}function di(a,l,d){if(a!==null&&(l.dependencies=a.dependencies),Os|=l.lanes,(d&l.childLanes)==0)return null;if(a!==null&&l.child!==a.child)throw Error(s(153));if(l.child!==null){for(d=Yi(a=l.child,a.pendingProps),l.child=d,d.return=l;a.sibling!==null;)a=a.sibling,(d=d.sibling=Yi(a,a.pendingProps)).return=l;d.sibling=null}return l.child}function Gn(a){a.flags|=4}function Ov(a,l){if(a!==null&&a.child===l.child)return!0;if((16&l.flags)!=0)return!1;for(a=l.child;a!==null;){if((12854&a.flags)!=0||(12854&a.subtreeFlags)!=0)return!1;a=a.sibling}return!0}if(Re)Xa=function(a,l){for(var d=l.child;d!==null;){if(d.tag===5||d.tag===6)ne(a,d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===l)break;for(;d.sibling===null;){if(d.return===null||d.return===l)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},Ya=function(){},Wu=function(a,l,d,m,y){if((a=a.memoizedProps)!==m){var _=l.stateNode,C=Un($r.current);d=Te(_,d,a,m,y,C),(l.updateQueue=d)&&Gn(l)}},Xu=function(a,l,d,m){d!==m&&Gn(l)};else if(Qe){Xa=function(a,l,d,m){for(var y=l.child;y!==null;){if(y.tag===5){var _=y.stateNode;d&&m&&(_=wy(_,y.type,y.memoizedProps,y)),ne(a,_)}else if(y.tag===6)_=y.stateNode,d&&m&&(_=Sy(_,y.memoizedProps,y)),ne(a,_);else if(y.tag!==4){if(y.tag===22&&y.memoizedState!==null)(_=y.child)!==null&&(_.return=y),Xa(a,y,!0,!0);else if(y.child!==null){y.child.return=y,y=y.child;continue}}if(y===l)break;for(;y.sibling===null;){if(y.return===null||y.return===l)return;y=y.return}y.sibling.return=y.return,y=y.sibling}};var Fv=function(a,l,d,m){for(var y=l.child;y!==null;){if(y.tag===5){var _=y.stateNode;d&&m&&(_=wy(_,y.type,y.memoizedProps,y)),by(a,_)}else if(y.tag===6)_=y.stateNode,d&&m&&(_=Sy(_,y.memoizedProps,y)),by(a,_);else if(y.tag!==4){if(y.tag===22&&y.memoizedState!==null)(_=y.child)!==null&&(_.return=y),Fv(a,y,!0,!0);else if(y.child!==null){y.child.return=y,y=y.child;continue}}if(y===l)break;for(;y.sibling===null;){if(y.return===null||y.return===l)return;y=y.return}y.sibling.return=y.return,y=y.sibling}};Ya=function(a,l){var d=l.stateNode;if(!Ov(a,l)){a=d.containerInfo;var m=Ty(a);Fv(m,l,!1,!1),d.pendingChildren=m,Gn(l),GS(a,m)}},Wu=function(a,l,d,m,y){var _=a.stateNode,C=a.memoizedProps;if((a=Ov(a,l))&&C===m)l.stateNode=_;else{var I=l.stateNode,F=Un($r.current),G=null;C!==m&&(G=Te(I,d,C,m,y,F)),a&&G===null?l.stateNode=_:(_=zS(_,G,d,C,m,l,a,I),Se(_,d,m,y,F)&&Gn(l),l.stateNode=_,a?Gn(l):Xa(_,l,!1,!1))}},Xu=function(a,l,d,m){d!==m?(a=Un(Ao.current),d=Un($r.current),l.stateNode=Pe(m,a,d,l),Gn(l)):l.stateNode=a.stateNode}}else Ya=function(){},Wu=function(){},Xu=function(){};function Ka(a,l){if(!tt)switch(a.tailMode){case"hidden":l=a.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?a.tail=null:d.sibling=null;break;case"collapsed":d=a.tail;for(var m=null;d!==null;)d.alternate!==null&&(m=d),d=d.sibling;m===null?l||a.tail===null?a.tail=null:a.tail.sibling=null:m.sibling=null}}function sr(a){var l=a.alternate!==null&&a.alternate.child===a.child,d=0,m=0;if(l)for(var y=a.child;y!==null;)d|=y.lanes|y.childLanes,m|=14680064&y.subtreeFlags,m|=14680064&y.flags,y.return=a,y=y.sibling;else for(y=a.child;y!==null;)d|=y.lanes|y.childLanes,m|=y.subtreeFlags,m|=y.flags,y.return=a,y=y.sibling;return a.subtreeFlags|=m,a.childLanes=d,l}function CE(a,l,d){var m=l.pendingProps;switch(vf(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sr(l),null;case 1:case 17:return Sr(l.type)&&lf(),sr(l),null;case 3:return d=l.stateNode,Po(),et(fr),et(Yt),Df(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),a!==null&&a.child!==null||(Mu(l)?Gn(l):a===null||a.memoizedState.isDehydrated&&(256&l.flags)==0||(l.flags|=1024,un!==null&&(hp(un),un=null))),Ya(a,l),sr(l),null;case 5:kf(l),d=Un(Ao.current);var y=l.type;if(a!==null&&l.stateNode!=null)Wu(a,l,y,m,d),a.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!m){if(l.stateNode===null)throw Error(s(166));return sr(l),null}if(a=Un($r.current),Mu(l)){if(!Ne)throw Error(s(175));a=QS(l.stateNode,l.type,l.memoizedProps,d,a,l,!Ua),l.updateQueue=a,a!==null&&Gn(l)}else{var _=Q(y,m,d,a,l);Xa(_,l,!1,!1),l.stateNode=_,Se(_,y,m,d,a)&&Gn(l)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return sr(l),null;case 6:if(a&&l.stateNode!=null)Xu(a,l,a.memoizedProps,m);else{if(typeof m!="string"&&l.stateNode===null)throw Error(s(166));if(a=Un(Ao.current),d=Un($r.current),Mu(l)){if(!Ne)throw Error(s(176));if(a=l.stateNode,d=l.memoizedProps,(m=ZS(a,d,l,!Ua))&&(y=Er)!==null)switch(y.tag){case 3:sE(y.stateNode.containerInfo,a,d,(1&y.mode)!=0);break;case 5:oE(y.type,y.memoizedProps,y.stateNode,a,d,(1&y.mode)!=0)}m&&Gn(l)}else l.stateNode=Pe(m,a,d,l)}return sr(l),null;case 13:if(et(dt),m=l.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(tt&&jr!==null&&(1&l.mode)!=0&&(128&l.flags)==0)By(),wo(),l.flags|=98560,y=!1;else if(y=Mu(l),m!==null&&m.dehydrated!==null){if(a===null){if(!y)throw Error(s(318));if(!Ne)throw Error(s(344));if(!(y=(y=l.memoizedState)!==null?y.dehydrated:null))throw Error(s(317));qS(y,l)}else wo(),(128&l.flags)==0&&(l.memoizedState=null),l.flags|=4;sr(l),y=!1}else un!==null&&(hp(un),un=null),y=!0;if(!y)return 65536&l.flags?l:null}return(128&l.flags)!=0?(l.lanes=d,l):((d=m!==null)!=(a!==null&&a.memoizedState!==null)&&d&&(l.child.flags|=8192,(1&l.mode)!=0&&(a===null||(1&dt.current)!=0?Ct===0&&(Ct=3):fp())),l.updateQueue!==null&&(l.flags|=4),sr(l),null);case 4:return Po(),Ya(a,l),a===null&&Ur(l.stateNode.containerInfo),sr(l),null;case 10:return Sf(l.type._context),sr(l),null;case 19:if(et(dt),(y=l.memoizedState)===null)return sr(l),null;if(m=(128&l.flags)!=0,(_=y.rendering)===null)if(m)Ka(y,!1);else{if(Ct!==0||a!==null&&(128&a.flags)!=0)for(a=l.child;a!==null;){if((_=zu(a))!==null){for(l.flags|=128,Ka(y,!1),(a=_.updateQueue)!==null&&(l.updateQueue=a,l.flags|=4),l.subtreeFlags=0,a=d,d=l.child;d!==null;)y=a,(m=d).flags&=14680066,(_=m.alternate)===null?(m.childLanes=0,m.lanes=y,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=_.childLanes,m.lanes=_.lanes,m.child=_.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=_.memoizedProps,m.memoizedState=_.memoizedState,m.updateQueue=_.updateQueue,m.type=_.type,y=_.dependencies,m.dependencies=y===null?null:{lanes:y.lanes,firstContext:y.firstContext}),d=d.sibling;return We(dt,1&dt.current|2),l.child}a=a.sibling}y.tail!==null&&Mt()>ap&&(l.flags|=128,m=!0,Ka(y,!1),l.lanes=4194304)}else{if(!m)if((a=zu(_))!==null){if(l.flags|=128,m=!0,(a=a.updateQueue)!==null&&(l.updateQueue=a,l.flags|=4),Ka(y,!0),y.tail===null&&y.tailMode==="hidden"&&!_.alternate&&!tt)return sr(l),null}else 2*Mt()-y.renderingStartTime>ap&&d!==1073741824&&(l.flags|=128,m=!0,Ka(y,!1),l.lanes=4194304);y.isBackwards?(_.sibling=l.child,l.child=_):((a=y.last)!==null?a.sibling=_:l.child=_,y.last=_)}return y.tail!==null?(l=y.tail,y.rendering=l,y.tail=l.sibling,y.renderingStartTime=Mt(),l.sibling=null,a=dt.current,We(dt,m?1&a|2:1&a),l):(sr(l),null);case 22:case 23:return dp(),d=l.memoizedState!==null,a!==null&&a.memoizedState!==null!==d&&(l.flags|=8192),d&&(1&l.mode)!=0?(1073741824&Cr)!=0&&(sr(l),Re&&6&l.subtreeFlags&&(l.flags|=8192)):sr(l),null;case 24:case 25:return null}throw Error(s(156,l.tag))}function AE(a,l){switch(vf(l),l.tag){case 1:return Sr(l.type)&&lf(),65536&(a=l.flags)?(l.flags=-65537&a|128,l):null;case 3:return Po(),et(fr),et(Yt),Df(),(65536&(a=l.flags))!=0&&(128&a)==0?(l.flags=-65537&a|128,l):null;case 5:return kf(l),null;case 13:if(et(dt),(a=l.memoizedState)!==null&&a.dehydrated!==null){if(l.alternate===null)throw Error(s(340));wo()}return 65536&(a=l.flags)?(l.flags=-65537&a|128,l):null;case 19:return et(dt),null;case 4:return Po(),null;case 10:return Sf(l.type._context),null;case 22:case 23:return dp(),null;default:return null}}var Qu=!1,Qt=!1,PE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Ro(a,l){var d=a.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(m){rt(a,l,m)}else d.current=null}function Lv(a,l,d){try{d()}catch(m){rt(a,l,m)}}var Bv=!1;function Qa(a,l,d){var m=l.updateQueue;if((m=m!==null?m.lastEffect:null)!==null){var y=m=m.next;do{if((y.tag&a)===a){var _=y.destroy;y.destroy=void 0,_!==void 0&&Lv(l,d,_)}y=y.next}while(y!==m)}}function Zu(a,l){if((l=(l=l.updateQueue)!==null?l.lastEffect:null)!==null){var d=l=l.next;do{if((d.tag&a)===a){var m=d.create;d.destroy=m()}d=d.next}while(d!==l)}}function Qf(a){var l=a.ref;if(l!==null){var d=a.stateNode;a.tag===5?a=xe(d):a=d,typeof l=="function"?l(a):l.current=a}}function Uv(a){var l=a.alternate;l!==null&&(a.alternate=null,Uv(l)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(l=a.stateNode)!==null&&tf(l),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function zv(a){return a.tag===5||a.tag===3||a.tag===4}function Gv(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||zv(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(2&a.flags||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(2&a.flags))return a.stateNode}}function Zf(a,l,d){var m=a.tag;if(m===5||m===6)a=a.stateNode,l?MS(d,a,l):AS(d,a);else if(m!==4&&(a=a.child)!==null)for(Zf(a,l,d),a=a.sibling;a!==null;)Zf(a,l,d),a=a.sibling}function qf(a,l,d){var m=a.tag;if(m===5||m===6)a=a.stateNode,l?kS(d,a,l):CS(d,a);else if(m!==4&&(a=a.child)!==null)for(qf(a,l,d),a=a.sibling;a!==null;)qf(a,l,d),a=a.sibling}var or=null,jn=!1;function Hn(a,l,d){for(d=d.child;d!==null;)Jf(a,l,d),d=d.sibling}function Jf(a,l,d){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Pu,d)}catch{}switch(d.tag){case 5:Qt||Ro(d,l);case 6:if(Re){var m=or,y=jn;or=null,Hn(a,l,d),jn=y,(or=m)!==null&&(jn?NS(or,d.stateNode):DS(or,d.stateNode))}else Hn(a,l,d);break;case 18:Re&&or!==null&&(jn?nE(or,d.stateNode):rE(or,d.stateNode));break;case 4:Re?(m=or,y=jn,or=d.stateNode.containerInfo,jn=!0,Hn(a,l,d),or=m,jn=y):(Qe&&(m=d.stateNode.containerInfo,y=Ty(m),rf(m,y)),Hn(a,l,d));break;case 0:case 11:case 14:case 15:if(!Qt&&(m=d.updateQueue)!==null&&(m=m.lastEffect)!==null){y=m=m.next;do{var _=y,C=_.destroy;_=_.tag,C!==void 0&&((2&_)!=0||(4&_)!=0)&&Lv(d,l,C),y=y.next}while(y!==m)}Hn(a,l,d);break;case 1:if(!Qt&&(Ro(d,l),typeof(m=d.stateNode).componentWillUnmount=="function"))try{m.props=d.memoizedProps,m.state=d.memoizedState,m.componentWillUnmount()}catch(I){rt(d,l,I)}Hn(a,l,d);break;case 21:Hn(a,l,d);break;case 22:1&d.mode?(Qt=(m=Qt)||d.memoizedState!==null,Hn(a,l,d),Qt=m):Hn(a,l,d);break;default:Hn(a,l,d)}}function jv(a){var l=a.updateQueue;if(l!==null){a.updateQueue=null;var d=a.stateNode;d===null&&(d=a.stateNode=new PE),l.forEach(function(m){var y=OE.bind(null,a,m);d.has(m)||(d.add(m),m.then(y,y))})}}function hn(a,l){var d=l.deletions;if(d!==null)for(var m=0;m<d.length;m++){var y=d[m];try{var _=a,C=l;if(Re){var I=C;e:for(;I!==null;){switch(I.tag){case 5:or=I.stateNode,jn=!1;break e;case 3:case 4:or=I.stateNode.containerInfo,jn=!0;break e}I=I.return}if(or===null)throw Error(s(160));Jf(_,C,y),or=null,jn=!1}else Jf(_,C,y);var F=y.alternate;F!==null&&(F.return=null),y.return=null}catch(G){rt(y,l,G)}}if(12854&l.subtreeFlags)for(l=l.child;l!==null;)Hv(l,a),l=l.sibling}function Hv(a,l){var d=a.alternate,m=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:if(hn(l,a),$n(a),4&m){try{Qa(3,a,a.return),Zu(3,a)}catch(j){rt(a,a.return,j)}try{Qa(5,a,a.return)}catch(j){rt(a,a.return,j)}}break;case 1:hn(l,a),$n(a),512&m&&d!==null&&Ro(d,d.return);break;case 5:if(hn(l,a),$n(a),512&m&&d!==null&&Ro(d,d.return),Re){if(32&a.flags){var y=a.stateNode;try{_y(y)}catch(j){rt(a,a.return,j)}}if(4&m&&(y=a.stateNode)!=null){var _=a.memoizedProps;if(d=d!==null?d.memoizedProps:_,m=a.type,l=a.updateQueue,a.updateQueue=null,l!==null)try{RS(y,l,m,d,_,a)}catch(j){rt(a,a.return,j)}}}break;case 6:if(hn(l,a),$n(a),4&m&&Re){if(a.stateNode===null)throw Error(s(162));y=a.stateNode,_=a.memoizedProps,d=d!==null?d.memoizedProps:_;try{PS(y,d,_)}catch(j){rt(a,a.return,j)}}break;case 3:if(hn(l,a),$n(a),4&m){if(Re&&Ne&&d!==null&&d.memoizedState.isDehydrated)try{eE(l.containerInfo)}catch(j){rt(a,a.return,j)}if(Qe){y=l.containerInfo,_=l.pendingChildren;try{rf(y,_)}catch(j){rt(a,a.return,j)}}}break;case 4:if(hn(l,a),$n(a),4&m&&Qe){y=(_=a.stateNode).containerInfo,_=_.pendingChildren;try{rf(y,_)}catch(j){rt(a,a.return,j)}}break;case 13:hn(l,a),$n(a),8192&(y=a.child).flags&&(_=y.memoizedState!==null,y.stateNode.isHidden=_,!_||y.alternate!==null&&y.alternate.memoizedState!==null||(op=Mt())),4&m&&jv(a);break;case 22:var C=d!==null&&d.memoizedState!==null;if(1&a.mode?(Qt=(d=Qt)||C,hn(l,a),Qt=d):hn(l,a),$n(a),8192&m){if(d=a.memoizedState!==null,(a.stateNode.isHidden=d)&&!C&&(1&a.mode)!=0)for(ae=a,m=a.child;m!==null;){for(l=ae=m;ae!==null;){var I=(C=ae).child;switch(C.tag){case 0:case 11:case 14:case 15:Qa(4,C,C.return);break;case 1:Ro(C,C.return);var F=C.stateNode;if(typeof F.componentWillUnmount=="function"){var G=C,$=C.return;try{var re=G;F.props=re.memoizedProps,F.state=re.memoizedState,F.componentWillUnmount()}catch(j){rt(G,$,j)}}break;case 5:Ro(C,C.return);break;case 22:if(C.memoizedState!==null){Wv(l);continue}}I!==null?(I.return=C,ae=I):Wv(l)}m=m.sibling}if(Re){e:if(m=null,Re)for(l=a;;){if(l.tag===5){if(m===null){m=l;try{y=l.stateNode,d?OS(y):LS(l.stateNode,l.memoizedProps)}catch(j){rt(a,a.return,j)}}}else if(l.tag===6){if(m===null)try{_=l.stateNode,d?FS(_):BS(_,l.memoizedProps)}catch(j){rt(a,a.return,j)}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===a)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;m===l&&(m=null),l=l.return}m===l&&(m=null),l.sibling.return=l.return,l=l.sibling}}}break;case 19:hn(l,a),$n(a),4&m&&jv(a);break;case 21:break;default:hn(l,a),$n(a)}}function $n(a){var l=a.flags;if(2&l){try{if(Re){e:{for(var d=a.return;d!==null;){if(zv(d)){var m=d;break e}d=d.return}throw Error(s(160))}switch(m.tag){case 5:var y=m.stateNode;32&m.flags&&(_y(y),m.flags&=-33),qf(a,Gv(a),y);break;case 3:case 4:var _=m.stateNode.containerInfo;Zf(a,Gv(a),_);break;default:throw Error(s(161))}}}catch(C){rt(a,a.return,C)}a.flags&=-3}4096&l&&(a.flags&=-4097)}function IE(a,l,d){ae=a,$v(a)}function $v(a,l,d){for(var m=(1&a.mode)!=0;ae!==null;){var y=ae,_=y.child;if(y.tag===22&&m){var C=y.memoizedState!==null||Qu;if(!C){var I=y.alternate,F=I!==null&&I.memoizedState!==null||Qt;I=Qu;var G=Qt;if(Qu=C,(Qt=F)&&!G)for(ae=y;ae!==null;)F=(C=ae).child,C.tag===22&&C.memoizedState!==null?Xv(y):F!==null?(F.return=C,ae=F):Xv(y);for(;_!==null;)ae=_,$v(_),_=_.sibling;ae=y,Qu=I,Qt=G}Vv(a)}else(8772&y.subtreeFlags)!=0&&_!==null?(_.return=y,ae=_):Vv(a)}}function Vv(a){for(;ae!==null;){var l=ae;if((8772&l.flags)!=0){var d=l.alternate;try{if((8772&l.flags)!=0)switch(l.tag){case 0:case 11:case 15:Qt||Zu(5,l);break;case 1:var m=l.stateNode;if(4&l.flags&&!Qt)if(d===null)m.componentDidMount();else{var y=l.elementType===l.type?d.memoizedProps:cn(l.type,d.memoizedProps);m.componentDidUpdate(y,d.memoizedState,m.__reactInternalSnapshotBeforeUpdate)}var _=l.updateQueue;_!==null&&Hy(l,_,m);break;case 3:var C=l.updateQueue;if(C!==null){if(d=null,l.child!==null)switch(l.child.tag){case 5:d=xe(l.child.stateNode);break;case 1:d=l.child.stateNode}Hy(l,C,d)}break;case 5:var I=l.stateNode;d===null&&4&l.flags&&IS(I,l.type,l.memoizedProps,l);break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(Ne&&l.memoizedState===null){var F=l.alternate;if(F!==null){var G=F.memoizedState;if(G!==null){var $=G.dehydrated;$!==null&&tE($)}}}break;default:throw Error(s(163))}Qt||512&l.flags&&Qf(l)}catch(re){rt(l,l.return,re)}}if(l===a){ae=null;break}if((d=l.sibling)!==null){d.return=l.return,ae=d;break}ae=l.return}}function Wv(a){for(;ae!==null;){var l=ae;if(l===a){ae=null;break}var d=l.sibling;if(d!==null){d.return=l.return,ae=d;break}ae=l.return}}function Xv(a){for(;ae!==null;){var l=ae;try{switch(l.tag){case 0:case 11:case 15:var d=l.return;try{Zu(4,l)}catch(F){rt(l,d,F)}break;case 1:var m=l.stateNode;if(typeof m.componentDidMount=="function"){var y=l.return;try{m.componentDidMount()}catch(F){rt(l,y,F)}}var _=l.return;try{Qf(l)}catch(F){rt(l,_,F)}break;case 5:var C=l.return;try{Qf(l)}catch(F){rt(l,C,F)}}}catch(F){rt(l,l.return,F)}if(l===a){ae=null;break}var I=l.sibling;if(I!==null){I.return=l.return,ae=I;break}ae=l.return}}var qu=0,Ju=1,ec=2,tc=3,rc=4;if(typeof Symbol=="function"&&Symbol.for){var Za=Symbol.for;qu=Za("selector.component"),Ju=Za("selector.has_pseudo_class"),ec=Za("selector.role"),tc=Za("selector.test_id"),rc=Za("selector.text")}function ep(a){var l=Br(a);if(l!=null){if(typeof l.memoizedProps["data-testname"]!="string")throw Error(s(364));return l}if((a=_S(a))===null)throw Error(s(362));return a.stateNode.current}function tp(a,l){switch(l.$$typeof){case qu:if(a.type===l.value)return!0;break;case Ju:e:{l=l.value,a=[a,0];for(var d=0;d<a.length;){var m=a[d++],y=a[d++],_=l[y];if(m.tag!==5||!Oa(m)){for(;_!=null&&tp(m,_);)_=l[++y];if(y===l.length){l=!0;break e}for(m=m.child;m!==null;)a.push(m,y),m=m.sibling}}l=!1}return l;case ec:if(a.tag===5&&wS(a.stateNode,l.value))return!0;break;case rc:if((a.tag===5||a.tag===6)&&(a=bS(a))!==null&&0<=a.indexOf(l.value))return!0;break;case tc:if(a.tag===5&&typeof(a=a.memoizedProps["data-testname"])=="string"&&a.toLowerCase()===l.value.toLowerCase())return!0;break;default:throw Error(s(365))}return!1}function rp(a){switch(a.$$typeof){case qu:return"<"+(O(a.value)||"Unknown")+">";case Ju:return":has("+(rp(a)||"")+")";case ec:return'[role="'+a.value+'"]';case rc:return'"'+a.value+'"';case tc:return'[data-testname="'+a.value+'"]';default:throw Error(s(365))}}function Yv(a,l){var d=[];a=[a,0];for(var m=0;m<a.length;){var y=a[m++],_=a[m++],C=l[_];if(y.tag!==5||!Oa(y)){for(;C!=null&&tp(y,C);)C=l[++_];if(_===l.length)d.push(y);else for(y=y.child;y!==null;)a.push(y,_),y=y.sibling}}return d}function np(a,l){if(!Na)throw Error(s(363));a=Yv(a=ep(a),l),l=[],a=Array.from(a);for(var d=0;d<a.length;){var m=a[d++];if(m.tag===5)Oa(m)||l.push(m.stateNode);else for(m=m.child;m!==null;)a.push(m),m=m.sibling}return l}var RE=Math.ceil,nc=o.ReactCurrentDispatcher,ip=o.ReactCurrentOwner,gt=o.ReactCurrentBatchConfig,Me=0,Ot=null,bt=null,zt=0,Cr=0,ko=Ui(0),Ct=0,qa=null,Os=0,ic=0,sp=0,Ja=null,Ar=null,op=0,ap=1/0,Hi=null;function Mo(){ap=Mt()+500}var Kv,sc=!1,lp=null,$i=null,oc=!1,Vi=null,ac=0,el=0,up=null,lc=-1,uc=0;function Zt(){return(6&Me)!=0?Mt():lc!==-1?lc:lc=Mt()}function Wi(a){return(1&a.mode)==0?1:(2&Me)!=0&&zt!==0?zt&-zt:mE.transition!==null?(uc===0&&(uc=Iy()),uc):(a=Oe)!==0?a:Is()}function Wr(a,l,d,m){if(50<el)throw el=0,up=null,Error(s(185));Ba(a,d,m),(2&Me)!=0&&a===Ot||(a===Ot&&((2&Me)==0&&(ic|=d),Ct===4&&Xi(a,zt)),gr(a,m),d===1&&Me===0&&(1&l.mode)==0&&(Mo(),Iu&&Fn()))}function gr(a,l){var d=a.callbackNode;(function(y,_){for(var C=y.suspendedLanes,I=y.pingedLanes,F=y.expirationTimes,G=y.pendingLanes;0<G;){var $=31-an(G),re=1<<$,j=F[$];j===-1?(re&C)!=0&&(re&I)==0||(F[$]=cE(re,_)):j<=_&&(y.expiredLanes|=re),G&=~re}})(a,l);var m=Au(a,a===Ot?zt:0);if(m===0)d!==null&&ky(d),a.callbackNode=null,a.callbackPriority=0;else if(l=m&-m,a.callbackPriority!==l){if(d!=null&&ky(d),l===1)a.tag===0?function(y){Iu=!0,Dy(y)}(Zv.bind(null,a)):Dy(Zv.bind(null,a)),vo?xS(function(){(6&Me)==0&&Fn()}):pf(mf,Fn),d=null;else{switch(Ry(m)){case 1:d=mf;break;case 4:d=fE;break;case 16:default:d=My;break;case 536870912:d=pE}d=s1(d,Qv.bind(null,a))}a.callbackPriority=l,a.callbackNode=d}}function Qv(a,l){if(lc=-1,uc=0,(6&Me)!=0)throw Error(s(327));var d=a.callbackNode;if(Ls()&&a.callbackNode!==d)return null;var m=Au(a,a===Ot?zt:0);if(m===0)return null;if((30&m)!=0||(m&a.expiredLanes)!=0||l)l=cc(a,m);else{l=m;var y=Me;Me|=2;var _=e1();for(Ot===a&&zt===l||(Hi=null,Mo(),Fs(a,l));;)try{ME();break}catch(I){Jv(a,I)}wf(),nc.current=_,Me=y,bt!==null?l=0:(Ot=null,zt=0,l=Ct)}if(l!==0){if(l===2&&(y=hf(a))!==0&&(m=y,l=cp(a,y)),l===1)throw d=qa,Fs(a,0),Xi(a,m),gr(a,Mt()),d;if(l===6)Xi(a,m);else{if(y=a.current.alternate,(30&m)==0&&!function(I){for(var F=I;;){if(16384&F.flags){var G=F.updateQueue;if(G!==null&&(G=G.stores)!==null)for(var $=0;$<G.length;$++){var re=G[$],j=re.getSnapshot;re=re.value;try{if(!ln(j(),re))return!1}catch{return!1}}}if(G=F.child,16384&F.subtreeFlags&&G!==null)G.return=F,F=G;else{if(F===I)break;for(;F.sibling===null;){if(F.return===null||F.return===I)return!0;F=F.return}F.sibling.return=F.return,F=F.sibling}}return!0}(y)&&((l=cc(a,m))===2&&(_=hf(a))!==0&&(m=_,l=cp(a,_)),l===1))throw d=qa,Fs(a,0),Xi(a,m),gr(a,Mt()),d;switch(a.finishedWork=y,a.finishedLanes=m,l){case 0:case 1:throw Error(s(345));case 2:case 5:Do(a,Ar,Hi);break;case 3:if(Xi(a,m),(130023424&m)===m&&10<(l=op+500-Mt())){if(Au(a,0)!==0)break;if(((y=a.suspendedLanes)&m)!==m){Zt(),a.pingedLanes|=a.suspendedLanes&y;break}a.timeoutHandle=Le(Do.bind(null,a,Ar,Hi),l);break}Do(a,Ar,Hi);break;case 4:if(Xi(a,m),(4194240&m)===m)break;for(l=a.eventTimes,y=-1;0<m;){var C=31-an(m);_=1<<C,(C=l[C])>y&&(y=C),m&=~_}if(m=y,10<(m=(120>(m=Mt()-m)?120:480>m?480:1080>m?1080:1920>m?1920:3e3>m?3e3:4320>m?4320:1960*RE(m/1960))-m)){a.timeoutHandle=Le(Do.bind(null,a,Ar,Hi),m);break}Do(a,Ar,Hi);break;default:throw Error(s(329))}}}return gr(a,Mt()),a.callbackNode===d?Qv.bind(null,a):null}function cp(a,l){var d=Ja;return a.current.memoizedState.isDehydrated&&(Fs(a,l).flags|=256),(a=cc(a,l))!==2&&(l=Ar,Ar=d,l!==null&&hp(l)),a}function hp(a){Ar===null?Ar=a:Ar.push.apply(Ar,a)}function Xi(a,l){for(l&=~sp,l&=~ic,a.suspendedLanes|=l,a.pingedLanes&=~l,a=a.expirationTimes;0<l;){var d=31-an(l),m=1<<d;a[d]=-1,l&=~m}}function Zv(a){if((6&Me)!=0)throw Error(s(327));Ls();var l=Au(a,0);if((1&l)==0)return gr(a,Mt()),null;var d=cc(a,l);if(a.tag!==0&&d===2){var m=hf(a);m!==0&&(l=m,d=cp(a,m))}if(d===1)throw d=qa,Fs(a,0),Xi(a,l),gr(a,Mt()),d;if(d===6)throw Error(s(345));return a.finishedWork=a.current.alternate,a.finishedLanes=l,Do(a,Ar,Hi),gr(a,Mt()),null}function qv(a){Vi!==null&&Vi.tag===0&&(6&Me)==0&&Ls();var l=Me;Me|=1;var d=gt.transition,m=Oe;try{if(gt.transition=null,Oe=1,a)return a()}finally{Oe=m,gt.transition=d,(6&(Me=l))==0&&Fn()}}function dp(){Cr=ko.current,et(ko)}function Fs(a,l){a.finishedWork=null,a.finishedLanes=0;var d=a.timeoutHandle;if(d!==Ut&&(a.timeoutHandle=Ut,kt(d)),bt!==null)for(d=bt.return;d!==null;){var m=d;switch(vf(m),m.tag){case 1:(m=m.type.childContextTypes)!=null&&lf();break;case 3:Po(),et(fr),et(Yt),Df();break;case 5:kf(m);break;case 4:Po();break;case 13:case 19:et(dt);break;case 10:Sf(m.type._context);break;case 22:case 23:dp()}d=d.return}if(Ot=a,bt=a=Yi(a.current,null),zt=Cr=l,Ct=0,qa=null,sp=ic=Os=0,Ar=Ja=null,Ds!==null){for(l=0;l<Ds.length;l++)if((m=(d=Ds[l]).interleaved)!==null){d.interleaved=null;var y=m.next,_=d.pending;if(_!==null){var C=_.next;_.next=y,m.next=C}d.pending=m}Ds=null}return a}function Jv(a,l){for(;;){var d=bt;try{if(wf(),Gu.current=Vu,ju){for(var m=st.memoizedState;m!==null;){var y=m.queue;y!==null&&(y.pending=null),m=m.next}ju=!1}if(Ns=0,Nt=Dt=st=null,Ha=!1,$a=0,ip.current=null,d===null||d.return===null){Ct=1,qa=l,bt=null;break}e:{var _=a,C=d.return,I=d,F=l;if(l=zt,I.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var G=F,$=I,re=$.tag;if((1&$.mode)==0&&(re===0||re===11||re===15)){var j=$.alternate;j?($.updateQueue=j.updateQueue,$.memoizedState=j.memoizedState,$.lanes=j.lanes):($.updateQueue=null,$.memoizedState=null)}var q=bv(C);if(q!==null){q.flags&=-257,wv(q,C,I,0,l),1&q.mode&&Tv(_,G,l),F=G;var ue=(l=q).updateQueue;if(ue===null){var Ce=new Set;Ce.add(F),l.updateQueue=Ce}else ue.add(F);break e}if((1&l)==0){Tv(_,G,l),fp();break e}F=Error(s(426))}else if(tt&&1&I.mode){var V=bv(C);if(V!==null){(65536&V.flags)==0&&(V.flags|=256),wv(V,C,I,0,l),Tf(Io(F,I));break e}}_=F=Io(F,I),Ct!==4&&(Ct=2),Ja===null?Ja=[_]:Ja.push(_),_=C;do{switch(_.tag){case 3:_.flags|=65536,l&=-l,_.lanes|=l,jy(_,xv(0,F,l));break e;case 1:I=F;var N=_.type,B=_.stateNode;if((128&_.flags)==0&&(typeof N.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&($i===null||!$i.has(B)))){_.flags|=65536,l&=-l,_.lanes|=l,jy(_,_v(_,I,l));break e}}_=_.return}while(_!==null)}r1(d)}catch(K){l=K,bt===d&&d!==null&&(bt=d=d.return);continue}break}}function e1(){var a=nc.current;return nc.current=Vu,a===null?Vu:a}function fp(){Ct!==0&&Ct!==3&&Ct!==2||(Ct=4),Ot===null||(268435455&Os)==0&&(268435455&ic)==0||Xi(Ot,zt)}function cc(a,l){var d=Me;Me|=2;var m=e1();for(Ot===a&&zt===l||(Hi=null,Fs(a,l));;)try{kE();break}catch(y){Jv(a,y)}if(wf(),Me=d,nc.current=m,bt!==null)throw Error(s(261));return Ot=null,zt=0,Ct}function kE(){for(;bt!==null;)t1(bt)}function ME(){for(;bt!==null&&!hE();)t1(bt)}function t1(a){var l=Kv(a.alternate,a,Cr);a.memoizedProps=a.pendingProps,l===null?r1(a):bt=l,ip.current=null}function r1(a){var l=a;do{var d=l.alternate;if(a=l.return,(32768&l.flags)==0){if((d=CE(d,l,Cr))!==null)return void(bt=d)}else{if((d=AE(d,l))!==null)return d.flags&=32767,void(bt=d);if(a===null)return Ct=6,void(bt=null);a.flags|=32768,a.subtreeFlags=0,a.deletions=null}if((l=l.sibling)!==null)return void(bt=l);bt=l=a}while(l!==null);Ct===0&&(Ct=5)}function Do(a,l,d){var m=Oe,y=gt.transition;try{gt.transition=null,Oe=1,function(_,C,I,F){do Ls();while(Vi!==null);if((6&Me)!=0)throw Error(s(327));I=_.finishedWork;var G=_.finishedLanes;if(I===null)return null;if(_.finishedWork=null,_.finishedLanes=0,I===_.current)throw Error(s(177));_.callbackNode=null,_.callbackPriority=0;var $=I.lanes|I.childLanes;if(function(q,ue){var Ce=q.pendingLanes&~ue;q.pendingLanes=ue,q.suspendedLanes=0,q.pingedLanes=0,q.expiredLanes&=ue,q.mutableReadLanes&=ue,q.entangledLanes&=ue,ue=q.entanglements;var V=q.eventTimes;for(q=q.expirationTimes;0<Ce;){var N=31-an(Ce),B=1<<N;ue[N]=0,V[N]=-1,q[N]=-1,Ce&=~B}}(_,$),_===Ot&&(bt=Ot=null,zt=0),(2064&I.subtreeFlags)==0&&(2064&I.flags)==0||oc||(oc=!0,s1(My,function(){return Ls(),null})),$=(15990&I.flags)!=0,(15990&I.subtreeFlags)!=0||$){$=gt.transition,gt.transition=null;var re=Oe;Oe=1;var j=Me;Me|=4,ip.current=null,function(q,ue){for(L(q.containerInfo),ae=ue;ae!==null;)if(ue=(q=ae).child,(1028&q.subtreeFlags)!=0&&ue!==null)ue.return=q,ae=ue;else for(;ae!==null;){q=ae;try{var Ce=q.alternate;if((1024&q.flags)!=0)switch(q.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(Ce!==null){var V=Ce.memoizedProps,N=Ce.memoizedState,B=q.stateNode,K=B.getSnapshotBeforeUpdate(q.elementType===q.type?V:cn(q.type,V),N);B.__reactInternalSnapshotBeforeUpdate=K}break;case 3:Re&&US(q.stateNode.containerInfo);break;default:throw Error(s(163))}}catch(ge){rt(q,q.return,ge)}if((ue=q.sibling)!==null){ue.return=q.return,ae=ue;break}ae=q.return}Ce=Bv,Bv=!1}(_,I),Hv(I,_),k(_.containerInfo),_.current=I,IE(I),dE(),Me=j,Oe=re,gt.transition=$}else _.current=I;if(oc&&(oc=!1,Vi=_,ac=G),$=_.pendingLanes,$===0&&($i=null),function(q){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Pu,q,void 0,(128&q.current.flags)==128)}catch{}}(I.stateNode),gr(_,Mt()),C!==null)for(F=_.onRecoverableError,I=0;I<C.length;I++)G=C[I],F(G.value,{componentStack:G.stack,digest:G.digest});if(sc)throw sc=!1,_=lp,lp=null,_;(1&ac)!=0&&_.tag!==0&&Ls(),$=_.pendingLanes,(1&$)!=0?_===up?el++:(el=0,up=_):el=0,Fn()}(a,l,d,m)}finally{gt.transition=y,Oe=m}return null}function Ls(){if(Vi!==null){var a=Ry(ac),l=gt.transition,d=Oe;try{if(gt.transition=null,Oe=16>a?16:a,Vi===null)var m=!1;else{if(a=Vi,Vi=null,ac=0,(6&Me)!=0)throw Error(s(331));var y=Me;for(Me|=4,ae=a.current;ae!==null;){var _=ae,C=_.child;if((16&ae.flags)!=0){var I=_.deletions;if(I!==null){for(var F=0;F<I.length;F++){var G=I[F];for(ae=G;ae!==null;){var $=ae;switch($.tag){case 0:case 11:case 15:Qa(8,$,_)}var re=$.child;if(re!==null)re.return=$,ae=re;else for(;ae!==null;){var j=($=ae).sibling,q=$.return;if(Uv($),$===G){ae=null;break}if(j!==null){j.return=q,ae=j;break}ae=q}}}var ue=_.alternate;if(ue!==null){var Ce=ue.child;if(Ce!==null){ue.child=null;do{var V=Ce.sibling;Ce.sibling=null,Ce=V}while(Ce!==null)}}ae=_}}if((2064&_.subtreeFlags)!=0&&C!==null)C.return=_,ae=C;else e:for(;ae!==null;){if((2048&(_=ae).flags)!=0)switch(_.tag){case 0:case 11:case 15:Qa(9,_,_.return)}var N=_.sibling;if(N!==null){N.return=_.return,ae=N;break e}ae=_.return}}var B=a.current;for(ae=B;ae!==null;){var K=(C=ae).child;if((2064&C.subtreeFlags)!=0&&K!==null)K.return=C,ae=K;else e:for(C=B;ae!==null;){if((2048&(I=ae).flags)!=0)try{switch(I.tag){case 0:case 11:case 15:Zu(9,I)}}catch(Ue){rt(I,I.return,Ue)}if(I===C){ae=null;break e}var ge=I.sibling;if(ge!==null){ge.return=I.return,ae=ge;break e}ae=I.return}}if(Me=y,Fn(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Pu,a)}catch{}m=!0}return m}finally{Oe=d,gt.transition=l}}return!1}function n1(a,l,d){a=ji(a,l=xv(0,l=Io(d,l),1),1),l=Zt(),a!==null&&(Ba(a,1,l),gr(a,l))}function rt(a,l,d){if(a.tag===3)n1(a,a,d);else for(;l!==null;){if(l.tag===3){n1(l,a,d);break}if(l.tag===1){var m=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof m.componentDidCatch=="function"&&($i===null||!$i.has(m))){l=ji(l,a=_v(l,a=Io(d,a),1),1),a=Zt(),l!==null&&(Ba(l,1,a),gr(l,a));break}}l=l.return}}function DE(a,l,d){var m=a.pingCache;m!==null&&m.delete(l),l=Zt(),a.pingedLanes|=a.suspendedLanes&d,Ot===a&&(zt&d)===d&&(Ct===4||Ct===3&&(130023424&zt)===zt&&500>Mt()-op?Fs(a,0):sp|=d),gr(a,l)}function i1(a,l){l===0&&((1&a.mode)==0?l=1:(l=cf,(130023424&(cf<<=1))==0&&(cf=4194304)));var d=Zt();(a=Bn(a,l))!==null&&(Ba(a,l,d),gr(a,d))}function NE(a){var l=a.memoizedState,d=0;l!==null&&(d=l.retryLane),i1(a,d)}function OE(a,l){var d=0;switch(a.tag){case 13:var m=a.stateNode,y=a.memoizedState;y!==null&&(d=y.retryLane);break;case 19:m=a.stateNode;break;default:throw Error(s(314))}m!==null&&m.delete(l),i1(a,d)}function s1(a,l){return pf(a,l)}function FE(a,l,d,m){this.tag=a,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=m,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xr(a,l,d,m){return new FE(a,l,d,m)}function pp(a){return!(!(a=a.prototype)||!a.isReactComponent)}function Yi(a,l){var d=a.alternate;return d===null?((d=Xr(a.tag,l,a.key,a.mode)).elementType=a.elementType,d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=l,d.type=a.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=14680064&a.flags,d.childLanes=a.childLanes,d.lanes=a.lanes,d.child=a.child,d.memoizedProps=a.memoizedProps,d.memoizedState=a.memoizedState,d.updateQueue=a.updateQueue,l=a.dependencies,d.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},d.sibling=a.sibling,d.index=a.index,d.ref=a.ref,d}function hc(a,l,d,m,y,_){var C=2;if(m=a,typeof a=="function")pp(a)&&(C=1);else if(typeof a=="string")C=5;else e:switch(a){case h:return Bs(d.children,y,_,l);case f:C=8,y|=8;break;case p:return(a=Xr(12,d,l,2|y)).elementType=p,a.lanes=_,a;case S:return(a=Xr(13,d,l,y)).elementType=S,a.lanes=_,a;case E:return(a=Xr(19,d,l,y)).elementType=E,a.lanes=_,a;case T:return dc(d,y,_,l);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case g:C=10;break e;case v:C=9;break e;case x:C=11;break e;case w:C=14;break e;case b:C=16,m=null;break e}throw Error(s(130,a==null?a:typeof a,""))}return(l=Xr(C,d,l,y)).elementType=a,l.type=m,l.lanes=_,l}function Bs(a,l,d,m){return(a=Xr(7,a,m,l)).lanes=d,a}function dc(a,l,d,m){return(a=Xr(22,a,m,l)).elementType=T,a.lanes=d,a.stateNode={isHidden:!1},a}function mp(a,l,d){return(a=Xr(6,a,null,l)).lanes=d,a}function gp(a,l,d){return(l=Xr(4,a.children!==null?a.children:[],a.key,l)).lanes=d,l.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},l}function LE(a,l,d,m,y){this.tag=l,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Ut,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=df(0),this.expirationTimes=df(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=df(0),this.identifierPrefix=m,this.onRecoverableError=y,Ne&&(this.mutableSourceEagerHydrationData=null)}function o1(a,l,d,m,y,_,C,I,F){return a=new LE(a,l,d,I,F),l===1?(l=1,_===!0&&(l|=8)):l=0,_=Xr(3,null,null,l),a.current=_,_.stateNode=a,_.memoizedState={element:m,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},Af(_),a}function a1(a){if(!a)return zi;e:{if(M(a=a._reactInternals)!==a||a.tag!==1)throw Error(s(170));var l=a;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(Sr(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(s(171))}if(a.tag===1){var d=a.type;if(Sr(d))return Ay(a,d,l)}return l}function l1(a){var l=a._reactInternals;if(l===void 0)throw typeof a.render=="function"?Error(s(188)):(a=Object.keys(a).join(","),Error(s(268,a)));return(a=Y(l))===null?null:a.stateNode}function u1(a,l){if((a=a.memoizedState)!==null&&a.dehydrated!==null){var d=a.retryLane;a.retryLane=d!==0&&d<l?d:l}}function fc(a,l){u1(a,l),(a=a.alternate)&&u1(a,l)}function BE(a){return(a=Y(a))===null?null:a.stateNode}function UE(){return null}return Kv=function(a,l,d){if(a!==null)if(a.memoizedProps!==l.pendingProps||fr.current)pr=!0;else{if((a.lanes&d)==0&&(128&l.flags)==0)return pr=!1,function(re,j,q){switch(j.tag){case 3:Rv(j),wo();break;case 5:Zy(j);break;case 1:Sr(j.type)&&Cu(j);break;case 4:Rf(j,j.stateNode.containerInfo);break;case 10:Uy(0,j.type._context,j.memoizedProps.value);break;case 13:var ue=j.memoizedState;if(ue!==null)return ue.dehydrated!==null?(We(dt,1&dt.current),j.flags|=128,null):(q&j.child.childLanes)!=0?Mv(re,j,q):(We(dt,1&dt.current),(re=di(re,j,q))!==null?re.sibling:null);We(dt,1&dt.current);break;case 19:if(ue=(q&j.childLanes)!=0,(128&re.flags)!=0){if(ue)return Nv(re,j,q);j.flags|=128}var Ce=j.memoizedState;if(Ce!==null&&(Ce.rendering=null,Ce.tail=null,Ce.lastEffect=null),We(dt,dt.current),ue)break;return null;case 22:case 23:return j.lanes=0,Av(re,j,q)}return di(re,j,q)}(a,l,d);pr=(131072&a.flags)!=0}else pr=!1,tt&&(1048576&l.flags)!=0&&Ny(l,ku,l.index);switch(l.lanes=0,l.tag){case 2:var m=l.type;Ku(a,l),a=l.pendingProps;var y=_o(l,Yt.current);Eo(l,d),y=Ff(null,l,m,a,y,d);var _=Lf();return l.flags|=1,typeof y=="object"&&y!==null&&typeof y.render=="function"&&y.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,Sr(m)?(_=!0,Cu(l)):_=!1,l.memoizedState=y.state!==null&&y.state!==void 0?y.state:null,Af(l),y.updater=Bu,l.stateNode=y,y._reactInternals=l,If(l,m,a,d),l=Vf(null,l,m,!0,_,d)):(l.tag=0,tt&&_&&yf(l),mr(null,l,y,d),l=l.child),l;case 16:m=l.elementType;e:{switch(Ku(a,l),a=l.pendingProps,m=(y=m._init)(m._payload),l.type=m,y=l.tag=function(re){if(typeof re=="function")return pp(re)?1:0;if(re!=null){if((re=re.$$typeof)===x)return 11;if(re===w)return 14}return 2}(m),a=cn(m,a),y){case 0:l=$f(null,l,m,a,d);break e;case 1:l=Iv(null,l,m,a,d);break e;case 11:l=Sv(null,l,m,a,d);break e;case 14:l=Ev(null,l,m,cn(m.type,a),d);break e}throw Error(s(306,m,""))}return l;case 0:return m=l.type,y=l.pendingProps,$f(a,l,m,y=l.elementType===m?y:cn(m,y),d);case 1:return m=l.type,y=l.pendingProps,Iv(a,l,m,y=l.elementType===m?y:cn(m,y),d);case 3:e:{if(Rv(l),a===null)throw Error(s(387));m=l.pendingProps,y=(_=l.memoizedState).element,Gy(a,l),Lu(l,m,null,d);var C=l.memoizedState;if(m=C.element,Ne&&_.isDehydrated){if(_={element:m,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},l.updateQueue.baseState=_,l.memoizedState=_,256&l.flags){l=kv(a,l,m,d,y=Io(Error(s(423)),l));break e}if(m!==y){l=kv(a,l,m,d,y=Io(Error(s(424)),l));break e}for(Ne&&(jr=YS(l.stateNode.containerInfo),Er=l,tt=!0,un=null,Ua=!1),d=Qy(l,null,m,d),l.child=d;d;)d.flags=-3&d.flags|4096,d=d.sibling}else{if(wo(),m===y){l=di(a,l,d);break e}mr(a,l,m,d)}l=l.child}return l;case 5:return Zy(l),a===null&&_f(l),m=l.type,y=l.pendingProps,_=a!==null?a.memoizedProps:null,C=y.children,Be(m,y)?C=null:_!==null&&Be(m,_)&&(l.flags|=32),Pv(a,l),mr(a,l,C,d),l.child;case 6:return a===null&&_f(l),null;case 13:return Mv(a,l,d);case 4:return Rf(l,l.stateNode.containerInfo),m=l.pendingProps,a===null?l.child=Co(l,null,m,d):mr(a,l,m,d),l.child;case 11:return m=l.type,y=l.pendingProps,Sv(a,l,m,y=l.elementType===m?y:cn(m,y),d);case 7:return mr(a,l,l.pendingProps,d),l.child;case 8:case 12:return mr(a,l,l.pendingProps.children,d),l.child;case 10:e:{if(m=l.type._context,y=l.pendingProps,_=l.memoizedProps,Uy(0,m,C=y.value),_!==null)if(ln(_.value,C)){if(_.children===y.children&&!fr.current){l=di(a,l,d);break e}}else for((_=l.child)!==null&&(_.return=l);_!==null;){var I=_.dependencies;if(I!==null){C=_.child;for(var F=I.firstContext;F!==null;){if(F.context===m){if(_.tag===1){(F=hi(-1,d&-d)).tag=2;var G=_.updateQueue;if(G!==null){var $=(G=G.shared).pending;$===null?F.next=F:(F.next=$.next,$.next=F),G.pending=F}}_.lanes|=d,(F=_.alternate)!==null&&(F.lanes|=d),Ef(_.return,d,l),I.lanes|=d;break}F=F.next}}else if(_.tag===10)C=_.type===l.type?null:_.child;else if(_.tag===18){if((C=_.return)===null)throw Error(s(341));C.lanes|=d,(I=C.alternate)!==null&&(I.lanes|=d),Ef(C,d,l),C=_.sibling}else C=_.child;if(C!==null)C.return=_;else for(C=_;C!==null;){if(C===l){C=null;break}if((_=C.sibling)!==null){_.return=C.return,C=_;break}C=C.return}_=C}mr(a,l,y.children,d),l=l.child}return l;case 9:return y=l.type,m=l.pendingProps.children,Eo(l,d),m=m(y=Hr(y)),l.flags|=1,mr(a,l,m,d),l.child;case 14:return y=cn(m=l.type,l.pendingProps),Ev(a,l,m,y=cn(m.type,y),d);case 15:return Cv(a,l,l.type,l.pendingProps,d);case 17:return m=l.type,y=l.pendingProps,y=l.elementType===m?y:cn(m,y),Ku(a,l),l.tag=1,Sr(m)?(a=!0,Cu(l)):a=!1,Eo(l,d),Wy(l,m,y),If(l,m,y,d),Vf(null,l,m,!0,a,d);case 19:return Nv(a,l,d);case 22:return Av(a,l,d)}throw Error(s(156,l.tag))},e.attemptContinuousHydration=function(a){if(a.tag===13){var l=Bn(a,134217728);l!==null&&Wr(l,a,134217728,Zt()),fc(a,134217728)}},e.attemptDiscreteHydration=function(a){if(a.tag===13){var l=Bn(a,1);l!==null&&Wr(l,a,1,Zt()),fc(a,1)}},e.attemptHydrationAtCurrentPriority=function(a){if(a.tag===13){var l=Wi(a),d=Bn(a,l);d!==null&&Wr(d,a,l,Zt()),fc(a,l)}},e.attemptSynchronousHydration=function(a){switch(a.tag){case 3:var l=a.stateNode;if(l.current.memoizedState.isDehydrated){var d=La(l.pendingLanes);d!==0&&(ff(l,1|d),gr(l,Mt()),(6&Me)==0&&(Mo(),Fn()))}break;case 13:qv(function(){var m=Bn(a,1);if(m!==null){var y=Zt();Wr(m,a,1,y)}}),fc(a,1)}},e.batchedUpdates=function(a,l){var d=Me;Me|=1;try{return a(l)}finally{(Me=d)===0&&(Mo(),Iu&&Fn())}},e.createComponentSelector=function(a){return{$$typeof:qu,value:a}},e.createContainer=function(a,l,d,m,y,_,C){return o1(a,l,!1,null,0,m,0,_,C)},e.createHasPseudoClassSelector=function(a){return{$$typeof:Ju,value:a}},e.createHydrationContainer=function(a,l,d,m,y,_,C,I,F){return(a=o1(d,m,!0,a,0,_,0,I,F)).context=a1(null),d=a.current,(_=hi(m=Zt(),y=Wi(d))).callback=l!=null?l:null,ji(d,_,y),a.current.lanes=y,Ba(a,y,m),gr(a,m),a},e.createPortal=function(a,l,d){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:m==null?null:""+m,children:a,containerInfo:l,implementation:d}},e.createRoleSelector=function(a){return{$$typeof:ec,value:a}},e.createTestNameSelector=function(a){return{$$typeof:tc,value:a}},e.createTextSelector=function(a){return{$$typeof:rc,value:a}},e.deferredUpdates=function(a){var l=Oe,d=gt.transition;try{return gt.transition=null,Oe=16,a()}finally{Oe=l,gt.transition=d}},e.discreteUpdates=function(a,l,d,m,y){var _=Oe,C=gt.transition;try{return gt.transition=null,Oe=1,a(l,d,m,y)}finally{Oe=_,gt.transition=C,Me===0&&Mo()}},e.findAllNodes=np,e.findBoundingRects=function(a,l){if(!Na)throw Error(s(363));l=np(a,l),a=[];for(var d=0;d<l.length;d++)a.push(TS(l[d]));for(l=a.length-1;0<l;l--)for(var m=(d=a[l]).x,y=m+d.width,_=d.y,C=_+d.height,I=l-1;0<=I;I--)if(l!==I){var F=a[I],G=F.x,$=G+F.width,re=F.y,j=re+F.height;if(m>=G&&_>=re&&y<=$&&C<=j){a.splice(l,1);break}if(!(m!==G||d.width!==F.width||j<_||re>C)){re>_&&(F.height+=re-_,F.y=_),j<C&&(F.height=C-re),a.splice(l,1);break}if(!(_!==re||d.height!==F.height||$<m||G>y)){G>m&&(F.width+=G-m,F.x=m),$<y&&(F.width=y-G),a.splice(l,1);break}}return a},e.findHostInstance=l1,e.findHostInstanceWithNoPortals=function(a){return(a=(a=X(a))!==null?W(a):null)===null?null:a.stateNode},e.findHostInstanceWithWarning=function(a){return l1(a)},e.flushControlled=function(a){var l=Me;Me|=1;var d=gt.transition,m=Oe;try{gt.transition=null,Oe=1,a()}finally{Oe=m,gt.transition=d,(Me=l)===0&&(Mo(),Fn())}},e.flushPassiveEffects=Ls,e.flushSync=qv,e.focusWithin=function(a,l){if(!Na)throw Error(s(363));for(l=Yv(a=ep(a),l),l=Array.from(l),a=0;a<l.length;){var d=l[a++];if(!Oa(d)){if(d.tag===5&&SS(d.stateNode))return!0;for(d=d.child;d!==null;)l.push(d),d=d.sibling}}return!1},e.getCurrentUpdatePriority=function(){return Oe},e.getFindAllNodesFailureDescription=function(a,l){if(!Na)throw Error(s(363));var d=0,m=[];a=[ep(a),0];for(var y=0;y<a.length;){var _=a[y++],C=a[y++],I=l[C];if((_.tag!==5||!Oa(_))&&(tp(_,I)&&(m.push(rp(I)),++C>d&&(d=C)),C<l.length))for(_=_.child;_!==null;)a.push(_,C),_=_.sibling}if(d<l.length){for(a=[];d<l.length;d++)a.push(rp(l[d]));return`findAllNodes was able to match part of the selector:
  `+m.join(" > ")+`

No matching component was found for:
  `+a.join(" > ")}return null},e.getPublicRootInstance=function(a){return(a=a.current).child?a.child.tag===5?xe(a.child.stateNode):a.child.stateNode:null},e.injectIntoDevTools=function(a){if(a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:o.ReactCurrentDispatcher,findHostInstanceByFiber:BE,findFiberByHostInstance:a.findFiberByHostInstance||UE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")a=!1;else{var l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(l.isDisabled||!l.supportsFiber)a=!0;else{try{Pu=l.inject(a),On=l}catch{}a=!!l.checkDCE}}return a},e.isAlreadyRendering=function(){return!1},e.observeVisibleRects=function(a,l,d,m){if(!Na)throw Error(s(363));a=np(a,l);var y=ES(a,d,m).disconnect;return{disconnect:function(){y()}}},e.registerMutableSourceForHydration=function(a,l){var d=l._getVersion;d=d(l._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[l,d]:a.mutableSourceEagerHydrationData.push(l,d)},e.runWithPriority=function(a,l){var d=Oe;try{return Oe=a,l()}finally{Oe=d}},e.shouldError=function(){return null},e.shouldSuspend=function(){return!1},e.updateContainer=function(a,l,d,m){var y=l.current,_=Zt(),C=Wi(y);return d=a1(d),l.context===null?l.context=d:l.pendingContext=d,(l=hi(_,C)).payload={element:a},(m=m===void 0?null:m)!==null&&(l.callback=m),(a=ji(y,l,C))!==null&&(Wr(a,y,C,_),Fu(a,y,C)),C},e}),C_}({get exports(){return Kg},set exports(t){Kg=t}}).exports=vR();var xR=VI(Kg),Fw={name:"root",private:!0,workspaces:["packages/*"],scripts:{build:"nx run-many --target=build --all --parallel","build:force":"nx run-many --target=build --all --parallel --skip-nx-cache","build:docs":"nx run @pixi/react-docs:deploy",clean:"rimraf packages/*/dist packages/*/build",lint:"eslint .",prepare:"husky install",prerelease:"./scripts/checkReleaseBranch.mjs && npm run lint && npm run test:force && npm run build:force",release:"lerna publish --no-private",test:"nx run-many --target=test --all --parallel","test:force":"nx run-many --target=test --all --parallel --skip-nx-cache","test:types":"nx run-many --target=test:types --all --parallel","test:types:force":"nx run-many --target=test:types --all --parallel --skip-nx-cache"},husky:{hooks:{"pre-commit":"lint-staged"}},"lint-staged":{"*.{ts,js,mjs}":["eslint --cache --fix"]},resolutions:{"get-pkg-repo":"4.1.1","hosted-git-info":"^2.1.4"},dependencies:{"@babel/runtime":"^7.14.8","@pixi/app":"^7.1.1","@pixi/constants":"^7.1.1","@pixi/core":"^7.1.1","@pixi/display":"^7.1.1","@pixi/extensions":"^7.1.1","@pixi/graphics":"^7.1.1","@pixi/math":"^7.1.1","@pixi/mesh":"^7.1.1","@pixi/mesh-extras":"^7.1.1","@pixi/particle-container":"^7.1.1","@pixi/sprite":"^7.1.1","@pixi/sprite-animated":"^7.1.1","@pixi/sprite-tiling":"^7.1.1","@pixi/text":"^7.1.1","@pixi/text-bitmap":"^7.1.1","@pixi/ticker":"^7.1.1","@react-spring/animated":"^9.6.1","@react-spring/types":"^9.6.1",react:"^18.0.0","react-dom":"^18.0.0","react-reconciler":"0.29.0","react-spring":"^9.6.1"},devDependencies:{"@babel/cli":"^7.20.7","@babel/core":"^7.20.7","@babel/eslint-parser":"^7.19.1","@babel/plugin-transform-runtime":"^7.19.6","@babel/preset-env":"^7.20.2","@babel/preset-react":"^7.18.6","@nrwl/nx-cloud":"latest","@pixi/eslint-config":"^4.0.1","@rollup/plugin-alias":"^4.0.2","@rollup/plugin-babel":"^6.0.3","@rollup/plugin-commonjs":"^24.0.0","@rollup/plugin-json":"^6.0.0","@rollup/plugin-node-resolve":"^15.0.1","@rollup/plugin-replace":"^5.0.2","@rollup/plugin-terser":"^0.2.1","@rollup/plugin-typescript":"^10.0.1","@types/jest":"^29.2.4","@types/react":"17.0.15","@types/react-dom":"17.0.9","@types/react-reconciler":"0.28.2","babel-jest":"^29.3.1","babel-plugin-module-resolver":"4.1.0","cross-env":"^7.0.3",eslint:"^8.29.0","eslint-plugin-react":"^7.31.11",husky:"^8.0.2",jest:"^29.3.1","jest-environment-jsdom":"^29.3.1","jest-extended":"^3.2.0","jest-watch-typeahead":"^2.2.1",lerna:"^6.0.3","lint-staged":"^13.1.0",nx:"15.3.0",rimraf:"^3.0.2",rollup:"^3.7.0","rollup-plugin-filesize":"^9.1.2","rollup-plugin-visualizer":"^5.9.0","ts-jest":"^29.0.3","ts-node":"^10.9.1",typescript:"^4.9.4"}},Zg={},Qc={get exports(){return Zg},set exports(t){Zg=t}};(function(){var t,e,r,n,i,s;typeof performance<"u"&&performance!==null&&performance.now?Qc.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(Qc.exports=function(){return(t()-i)/1e6},e=process.hrtime,n=(t=function(){var o;return 1e9*(o=e())[0]+o[1]})(),s=1e9*process.uptime(),i=n-s):Date.now?(Qc.exports=function(){return Date.now()-r},r=Date.now()):(Qc.exports=function(){return new Date().getTime()-r},r=new Date().getTime())}).call($I);var I_,oa={},Gs={};({get exports(){return oa},set exports(t){oa=t}}).exports=(I_||(I_=1,Gs.ConcurrentRoot=1,Gs.ContinuousEventPriority=4,Gs.DefaultEventPriority=16,Gs.DiscreteEventPriority=1,Gs.IdleEventPriority=536870912,Gs.LegacyRoot=0),Gs);var _R={};function vm(t,e){t.addChild&&(t.addChild(e),typeof e.didMount=="function"&&e.didMount(e,t))}function Lw(t,e){var r,n,i;(r=t.willUnmount)===null||r===void 0||r.call(t,t,e),((n=t.config)===null||n===void 0?void 0:n.destroyChildren)!==!1&&(i=t.children)!==null&&i!==void 0&&i.length&&Oi(t.children).forEach(function(s){Lw(s,t)})}function R_(t,e){var r;Lw(e,t),t.removeChild(e);var n=(r=e.config)!==null&&r!==void 0?r:{},i=n.destroy,s=i===void 0||i,o=n.destroyChildren,u=o===void 0||o,c=n.destroyTexture,h=c!==void 0&&c,f=n.destroyBaseTexture,p=f!==void 0&&f;s&&e.destroy({children:u,texture:h,baseTexture:p})}function k_(t,e,r){mt(e!==r,"pixi-react: PixiFiber cannot insert node before itself"),t.children.indexOf(e)!==-1&&t.removeChild(e);var n=t.getChildIndex(r);t.addChildAt(e,n)}var M_=null,Cn=xR({getRootHostContext:function(){return _R},getChildHostContext:function(t){return t},getChildHostContextForEventComponent:function(t){return t},getPublicInstance:function(t){return t},getCurrentEventPriority:function(){return function(){var t,e;if(typeof window>"u")return oa.DefaultEventPriority;switch((t=window)===null||t===void 0||(e=t.event)===null||e===void 0?void 0:e.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return oa.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return oa.ContinuousEventPriority;default:return oa.DefaultEventPriority}}()},prepareForCommit:function(){return null},resetAfterCommit:function(){},createInstance:function(t){var e,r,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,s=pR[t];if(typeof s=="function"&&(e=s(i,n)),!e){var o=Ow[t];o&&((e=o.create(n)).didMount=o.didMount?o.didMount.bind(e):void 0,e.willUnmount=o.willUnmount?o.willUnmount.bind(e):void 0,e.applyProps=o.applyProps?o.applyProps.bind(e):void 0,e.config=o.config)}return e&&((typeof((r=e)===null||r===void 0?void 0:r.applyProps)=="function"?e.applyProps:ai)(e,{},n),e.__reactpixi={root:i}),e},hideInstance:function(t){t.visible=!1},unhideInstance:function(t,e){var r=e==null||!e.hasOwnProperty("visible")||e.visible;t.visible=r},finalizeInitialChildren:function(t,e,r){return!1},prepareUpdate:function(t,e,r,n,i,s){return M_=function(o,u,c,h){var f=null;for(var p in c)!h.hasOwnProperty(p)&&c.hasOwnProperty(p)&&c[p]!==null&&(p===Xg||(f||(f=[]),f.push(p,null)));for(var g in h){var v=h[g],x=c!==null?c[g]:void 0;!h.hasOwnProperty(g)||v===x||v===null&&x===null||g===Xg||(f||(f=[]),f.push(g,v))}return f}(0,0,r,n)},shouldSetTextContent:function(t,e){return!1},shouldDeprioritizeSubtree:function(t,e){var r=e.alpha===void 0||e.alpha>0,n=e.renderable===void 0||e.renderable===!0,i=e.visible===void 0||e.visible===!0;return!(r&&n&&i)},createTextInstance:function(t,e,r){mt(!1,'pixi-react: Error trying to add text node "'.concat(t,'"'),"PixiFiber does not support text nodes as children of a Pixi component. To pass a string value to your component, use a property other than children. If you wish to display some text, you can use &lt;Text text={string} /&gt; instead.")},unhideTextInstance:function(t,e){},mountEventComponent:function(){},updateEventComponent:function(){},handleEventTarget:function(){},scheduleTimeout:setTimeout,cancelTimeout:clearTimeout,noTimeout:-1,warnsIfNotActing:!1,now:Zg,isPrimaryRenderer:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,supportsMicrotasks:!0,scheduleMicrotask:queueMicrotask,appendInitialChild:function(){for(var t,e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var s=vm.apply(null,n);return(t=n[0].__reactpixi)===null||t===void 0||(e=t.root)===null||e===void 0||e.emit("__REACT_PIXI_REQUEST_RENDER__",{detail:"appendInitialChild"}),s},appendChild:function(){for(var t,e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var s=vm.apply(null,n);return(t=n[0].__reactpixi)===null||t===void 0||(e=t.root)===null||e===void 0||e.emit("__REACT_PIXI_REQUEST_RENDER__",{detail:"appendChild"}),s},appendChildToContainer:function(){for(var t,e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var s=vm.apply(null,n);return(t=n[0].__reactpixi)===null||t===void 0||(e=t.root)===null||e===void 0||e.emit("__REACT_PIXI_REQUEST_RENDER__",{detail:"appendChildToContainer"}),s},removeChild:function(){for(var t,e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var s=R_.apply(null,n);return(t=n[0].__reactpixi)===null||t===void 0||(e=t.root)===null||e===void 0||e.emit("__REACT_PIXI_REQUEST_RENDER__",{detail:"removeChild"}),s},removeChildFromContainer:function(){for(var t,e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var s=R_.apply(null,n);return(t=n[0].__reactpixi)===null||t===void 0||(e=t.root)===null||e===void 0||e.emit("__REACT_PIXI_REQUEST_RENDER__",{detail:"removeChildFromContainer"}),s},insertBefore:k_,insertInContainerBefore:function(){for(var t,e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var s=k_.apply(null,n);return(t=n[0].__reactpixi)===null||t===void 0||(e=t.root)===null||e===void 0||e.emit("__REACT_PIXI_REQUEST_RENDER__",{detail:"insertInContainerBefore"}),s},commitUpdate:function(t,e,r,n,i){var s,o,u=t&&t.applyProps;typeof u!="function"&&(u=ai),(u(t,n,i)||M_)&&((s=t.__reactpixi)===null||s===void 0||(o=s.root)===null||o===void 0||o.emit("__REACT_PIXI_REQUEST_RENDER__",{detail:"commitUpdate"}))},commitMount:function(t,e,r,n,i){},commitTextUpdate:function(t,e,r){},resetTextContent:function(t){},clearContainer:function(t){},getFundamentalComponentInstance:function(t){throw new Error("Not yet implemented.")},mountFundamentalComponent:function(t){throw new Error("Not yet implemented.")},shouldUpdateFundamentalComponent:function(t){throw new Error("Not yet implemented.")},unmountFundamentalComponent:function(t){throw new Error("Not yet implemented.")},getInstanceFromNode:function(t){throw new Error("Not yet implemented.")},isOpaqueHydratingObject:function(t){throw new Error("Not yet implemented")},makeOpaqueHydratingObject:function(t){throw new Error("Not yet implemented.")},makeClientIdInDEV:function(t){throw new Error("Not yet implemented")},beforeActiveInstanceBlur:function(t){},afterActiveInstanceBlur:function(){},detachDeletedInstance:function(){},preparePortalMount:function(t){}}),TR=Fw.dependencies["react-dom"].replace(/[^0-9.]/g,""),bR=Fw.name;Cn.injectIntoDevTools({bundleType:0,version:TR,rendererPackageName:bR,findHostInstanceByFiber:Cn.findHostInstance});var ys=new Map;function Bw(t){if(mt(je.prototype.isPrototypeOf(t),"Invalid argument `container`, expected instance of `PIXI.Container`."),ys.has(t)){var e=ys.get(t).pixiFiberContainer;Cn.updateContainer(null,e,void 0,function(){ys.delete(t)})}}function Uw(t){mt(je.prototype.isPrototypeOf(t),"Invalid argument `container`, expected instance of `PIXI.Container`.");var e=ys.get(t);if(mt(!e,"Pixi React: createRoot should only be called once"),!e){var r=Cn.createContainer(t);e={pixiFiberContainer:r,reactRoot:{render:function(n){return Cn.updateContainer(n,r,void 0),Cn.getPublicRootInstance(r)},unmount:function(){Bw(t),ys.delete(t)}}},ys.set(t,e)}return e.reactRoot}function wR(t,e,r){var n;return console.warn("Pixi React Deprecation Warning: render is deprecated, use createRoot instead"),r!==void 0&&console.warn("Pixi React Deprecation Warning: render callback no longer exists in React 18"),ys.has(e)?n=ys.get(e).reactRoot:n=Uw(e),n.render(t)}function SR(t){Bw(t)}function du(){return du=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},du.apply(this,arguments)}function ER(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function CR(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Mw(n.key),n)}}function gi(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ld(t,e){return ld=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},ld(t,e)}function AR(t,e){if(e&&(Nr(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return gi(t)}function ud(t){return ud=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ud(t)}var Kd=An.createContext(null),zw=Kd.Provider,Gw=Kd.Consumer,PR=function(t){var e=An.forwardRef(function(r,n){return An.createElement(Gw,null,function(i){return An.createElement(t,du({},r,{ref:n,app:i}))})});return e.displayName="withPIXIApp(".concat(t.displayName||t.name,")"),e};function IR(t){var e=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var r,n=ud(t);if(e){var i=ud(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return AR(this,r)}}function D_(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function Zc(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?D_(Object(r),!0).forEach(function(n){vt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D_(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var N_=function(){},jw={width:Xe.exports.number,height:Xe.exports.number,onMount:Xe.exports.func,onUnmount:Xe.exports.func,raf:Xe.exports.bool,renderOnComponentChange:Xe.exports.bool,children:Xe.exports.node,options:Xe.exports.shape({autoStart:Xe.exports.bool,width:Xe.exports.number,height:Xe.exports.number,useContextAlpha:Xe.exports.bool,backgroundAlpha:Xe.exports.number,autoDensity:Xe.exports.bool,antialias:Xe.exports.bool,preserveDrawingBuffer:Xe.exports.bool,resolution:Xe.exports.number,forceCanvas:Xe.exports.bool,backgroundColor:Xe.exports.number,clearBeforeRender:Xe.exports.bool,powerPreference:Xe.exports.string,sharedTicker:Xe.exports.bool,sharedLoader:Xe.exports.bool,resizeTo:function(t,e){var r=t[e];r&&mt(r===window||r instanceof HTMLElement,"Invalid prop `resizeTo` of type ".concat(Nr(r),", expect `window` or an `HTMLElement`."))},view:function(t,e,r){var n=t[e];n&&mt(n instanceof HTMLCanvasElement,"Invalid prop `view` of type ".concat(Nr(n),", supplied to ").concat(r,", expected `<canvas> Element`"))}})},RR={width:800,height:600,onMount:N_,onUnmount:N_,raf:!0,renderOnComponentChange:!0},qg=function(t){(function(s,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(o&&o.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),o&&ld(s,o)})(i,An.Component);var e,r,n=IR(i);function i(){var s;ER(this,i);for(var o=arguments.length,u=new Array(o),c=0;c<o;c++)u[c]=arguments[c];return vt(gi(s=n.call.apply(n,[this].concat(u))),"_canvas",null),vt(gi(s),"_mediaQuery",null),vt(gi(s),"_ticker",null),vt(gi(s),"_needsUpdate",!0),vt(gi(s),"app",null),vt(gi(s),"updateSize",function(){var h=s.props,f=h.width,p=h.height,g=h.options;g!=null&&g.resolution||(s.app.renderer.resolution=window.devicePixelRatio,s.resetInteractionManager()),s.app.renderer.resize(f,p)}),vt(gi(s),"needsRenderUpdate",function(){s._needsUpdate=!0}),vt(gi(s),"renderStage",function(){var h=s.props,f=h.renderOnComponentChange;!h.raf&&f&&s._needsUpdate&&(s._needsUpdate=!1,s.app.renderer.render(s.app.stage))}),s}return e=i,(r=[{key:"componentDidMount",value:function(){var s=this.props,o=s.onMount,u=s.width,c=s.height,h=s.options,f=s.raf,p=s.renderOnComponentChange;this.app=new wu(Zc(Zc({width:u,height:c,view:this._canvas},h),{},{autoDensity:(h==null?void 0:h.autoDensity)!==!1})),this.app.ticker.autoStart=!1,this.app.ticker[f?"start":"stop"](),this.app.stage.__reactpixi={root:this.app.stage},this.mountNode=Cn.createContainer(this.app.stage),Cn.updateContainer(this.getChildren(),this.mountNode,this),o(this.app),h!=null&&h.autoDensity&&window.matchMedia&&(h==null?void 0:h.resolution)===void 0&&(this._mediaQuery=window.matchMedia("(-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 120dpi)"),this._mediaQuery.addListener(this.updateSize)),p&&!f&&(this._ticker=new Tt,this._ticker.autoStart=!0,this._ticker.add(this.renderStage),this.app.stage.on("__REACT_PIXI_REQUEST_RENDER__",this.needsRenderUpdate)),this.updateSize(),this.renderStage()}},{key:"componentDidUpdate",value:function(s,o,u){var c,h=this.props,f=h.width,p=h.height,g=h.raf,v=h.renderOnComponentChange,x=h.options;(x==null?void 0:x.resolution)!==void 0&&(s==null?void 0:s.options.resolution)!==(x==null?void 0:x.resolution)&&(this.app.renderer.resolution=x.resolution,this.resetInteractionManager()),s.height===p&&s.width===f&&((c=s.options)===null||c===void 0?void 0:c.resolution)===(x==null?void 0:x.resolution)||this.updateSize(),s.raf!==g&&this.app.ticker[g?"start":"stop"](),Cn.updateContainer(this.getChildren(),this.mountNode,this),s.width===f&&s.height===p&&s.raf===g&&s.renderOnComponentChange===v&&s.options===x||(this._needsUpdate=!0,this.renderStage())}},{key:"resetInteractionManager",value:function(){var s=this.app.renderer.plugins.interaction;s!=null&&s.resolution&&(s.resolution=this.app.renderer.resolution)}},{key:"getChildren",value:function(){var s=this.props.children;return An.createElement(zw,{value:this.app},s)}},{key:"componentDidCatch",value:function(s,o){console.error("Error occurred in `Stage`."),console.error(s),console.error(o)}},{key:"componentWillUnmount",value:function(){this.props.onUnmount(this.app),this._ticker&&(this._ticker.remove(this.renderStage),this._ticker.destroy()),this.app.stage.off("__REACT_PIXI_REQUEST_RENDER__",this.needsRenderUpdate),Cn.updateContainer(null,this.mountNode,this),this._mediaQuery&&(this._mediaQuery.removeListener(this.updateSize),this._mediaQuery=null),this.app.destroy()}},{key:"render",value:function(){var s,o,u=this,c=this.props.options;return c&&c.view?(mt(c.view instanceof HTMLCanvasElement,"options.view needs to be a `HTMLCanvasElement`"),null):An.createElement("canvas",du({},(s=this.props,o=[].concat(Oi(Object.keys(jw)),Oi(Object.keys(Yg))),Object.keys(s).filter(function(h){return!o.includes(h)}).reduce(function(h,f){return Zc(Zc({},h),{},vt({},f,s[f]))},{})),{ref:function(h){return u._canvas=h}}))}}])&&CR(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),i}();qg.propTypes=jw,qg.defaultProps=RR;var kR=qg;function Hw(){var t=ye.exports.useContext(Kd);return mt(t instanceof wu,"No Context found with `%s`. Make sure to wrap component with `%s`","PIXI.Application","AppProvider"),t}function MR(t){var e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=Hw();mt(typeof t=="function","`useTick` needs a callback function."),mt(r instanceof wu,"No Context found with `%s`. Make sure to wrap component with `%s`","PIXI.Application","AppProvider");var n=ye.exports.useRef(null);ye.exports.useEffect(function(){n.current=t},[t]),ye.exports.useEffect(function(){if(e){var i=function(s){return n.current.apply(r.ticker,[s,r.ticker])};return r.ticker.add(i),function(){r.ticker&&r.ticker.remove(i)}}},[e])}function DR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Jg(t,e,r){return Jg=DR()?Reflect.construct.bind():function(n,i,s){var o=[null];o.push.apply(o,i);var u=new(Function.bind.apply(n,o));return s&&ld(u,s.prototype),u},Jg.apply(null,arguments)}var NR=["children","apply"];function O_(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function qc(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?O_(Object(r),!0).forEach(function(n){vt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O_(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var OR=function(t,e){mt(Nr(e)==="object","Second argument needs to be an indexed object with { prop: Filter }");var r=Object.keys(e),n=function(i){var s=i.children,o=i.apply,u=Ps(i,NR),c=ye.exports.useRef(ye.exports.useMemo(function(){return r.map(function(p){var g,v=(u==null||(g=u[p])===null||g===void 0?void 0:g.construct)||[];return Jg(e[p],Oi(v))})},[r])),h=ye.exports.useMemo(function(){return r.reduce(function(p,g,v){return qc(qc({},p),{},vt({},g,c.current[v]))},{})},[r]),f=ye.exports.useMemo(function(){return Object.keys(u).filter(Nw(Dw(r))).reduce(function(p,g){return qc(qc({},p),{},vt({},g,u[g]))},{})},[u,r]);return r.forEach(function(p,g){return Object.assign(c.current[g],u[p])}),o&&function(){for(var p=arguments.length,g=new Array(p),v=0;v<p;v++)g[v]=arguments[v];return g.every(function(x){return typeof x=="function"})}(o)&&o.call(t,h),An.createElement(t,du({},f,{filters:c.current}),s)};return n.displayName="FilterWrapper",n.propTypes={children:Xe.exports.node,apply:Xe.exports.func},n},FR=wr.BitmapText,LR=wr.Container,BR=wr.Graphics,UR=wr.NineSlicePlane,zR=wr.ParticleContainer,GR=wr.Sprite,jR=wr.AnimatedSprite,HR=wr.Text,$R=wr.TilingSprite,VR=wr.SimpleMesh,WR=wr.SimpleRope;const XR=Object.freeze(Object.defineProperty({__proto__:null,AnimatedSprite:jR,AppConsumer:Gw,AppContext:Kd,AppProvider:zw,BitmapText:FR,Container:LR,Graphics:BR,NineSlicePlane:UR,ParticleContainer:zR,PixiComponent:mR,PixiFiber:Cn,SimpleMesh:VR,SimpleRope:WR,Sprite:GR,Stage:kR,TYPES:wr,Text:HR,TilingSprite:$R,applyDefaultProps:ai,createRoot:Uw,eventHandlers:ad,render:wR,unmountComponentAtNode:SR,useApp:Hw,useTick:MR,withFilters:OR,withPixiApp:PR},Symbol.toStringTag,{value:"Module"})),YR=$E(XR);(function(t){t.exports=YR})(Ve);const $w=new it;Ke.prototype._cacheAsBitmap=!1;Ke.prototype._cacheData=null;Ke.prototype._cacheAsBitmapResolution=null;Ke.prototype._cacheAsBitmapMultisample=null;class KR{constructor(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null}}Object.defineProperties(Ke.prototype,{cacheAsBitmapResolution:{get(){return this._cacheAsBitmapResolution},set(t){t!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=t,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmapMultisample:{get(){return this._cacheAsBitmapMultisample},set(t){t!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=t,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmap:{get(){return this._cacheAsBitmap},set(t){if(this._cacheAsBitmap===t)return;this._cacheAsBitmap=t;let e;t?(this._cacheData||(this._cacheData=new KR),e=this._cacheData,e.originalRender=this.render,e.originalRenderCanvas=this.renderCanvas,e.originalUpdateTransform=this.updateTransform,e.originalCalculateBounds=this.calculateBounds,e.originalGetLocalBounds=this.getLocalBounds,e.originalDestroy=this.destroy,e.originalContainsPoint=this.containsPoint,e.originalMask=this._mask,e.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(e=this._cacheData,e.sprite&&this._destroyCachedDisplayObject(),this.render=e.originalRender,this.renderCanvas=e.originalRenderCanvas,this.calculateBounds=e.originalCalculateBounds,this.getLocalBounds=e.originalGetLocalBounds,this.destroy=e.originalDestroy,this.updateTransform=e.originalUpdateTransform,this.containsPoint=e.originalContainsPoint,this._mask=e.originalMask,this.filterArea=e.originalFilterArea)}}});Ke.prototype._renderCached=function(e){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(e),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(e))};Ke.prototype._initCachedDisplayObject=function(e){var g,v,x;if((g=this._cacheData)!=null&&g.sprite)return;const r=this.alpha;this.alpha=1,e.batch.flush();const n=this.getLocalBounds(null,!0).clone();if((v=this.filters)!=null&&v.length){const S=this.filters[0].padding;n.pad(S)}n.ceil(ee.RESOLUTION);const i=e.renderTexture.current,s=e.renderTexture.sourceFrame.clone(),o=e.renderTexture.destinationFrame.clone(),u=e.projection.transform,c=ii.create({width:n.width,height:n.height,resolution:this.cacheAsBitmapResolution||e.resolution,multisample:(x=this.cacheAsBitmapMultisample)!=null?x:e.multisample}),h=`cacheAsBitmap_${uo()}`;this._cacheData.textureCacheId=h,be.addToCache(c.baseTexture,h),te.addToCache(c,h);const f=this.transform.localTransform.copyTo($w).invert().translate(-n.x,-n.y);this.render=this._cacheData.originalRender,e.render(this,{renderTexture:c,clear:!0,transform:f,skipUpdateTransform:!1}),e.framebuffer.blit(),e.projection.transform=u,e.renderTexture.bind(i,s,o),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=r;const p=new Je(c);p.transform.worldTransform=this.transform.worldTransform,p.anchor.x=-(n.x/n.width),p.anchor.y=-(n.y/n.height),p.alpha=r,p._bounds=this._bounds,this._cacheData.sprite=p,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=p.containsPoint.bind(p)};Ke.prototype._renderCachedCanvas=function(e){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(e),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(e))};Ke.prototype._initCachedDisplayObjectCanvas=function(e){var f;if((f=this._cacheData)!=null&&f.sprite)return;const r=this.getLocalBounds(null,!0),n=this.alpha;this.alpha=1;const i=e.canvasContext.activeContext,s=e._projTransform;r.ceil(ee.RESOLUTION);const o=ii.create({width:r.width,height:r.height}),u=`cacheAsBitmap_${uo()}`;this._cacheData.textureCacheId=u,be.addToCache(o.baseTexture,u),te.addToCache(o,u);const c=$w;this.transform.localTransform.copyTo(c),c.invert(),c.tx-=r.x,c.ty-=r.y,this.renderCanvas=this._cacheData.originalRenderCanvas,e.render(this,{renderTexture:o,clear:!0,transform:c,skipUpdateTransform:!1}),e.canvasContext.activeContext=i,e._projTransform=s,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=n;const h=new Je(o);h.transform.worldTransform=this.transform.worldTransform,h.anchor.x=-(r.x/r.width),h.anchor.y=-(r.y/r.height),h.alpha=n,h._bounds=this._bounds,this._cacheData.sprite=h,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=e._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=h.containsPoint.bind(h)};Ke.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID};Ke.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)};Ke.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,be.removeFromCache(this._cacheData.textureCacheId),te.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null};Ke.prototype._cacheAsBitmapDestroy=function(e){this.cacheAsBitmap=!1,this.destroy(e)};Ke.prototype.name=null;je.prototype.getChildByName=function(e,r){for(let n=0,i=this.children.length;n<i;n++)if(this.children[n].name===e)return this.children[n];if(r)for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n];if(!s.getChildByName)continue;const o=s.getChildByName(e,!0);if(o)return o}return null};Ke.prototype.getGlobalPosition=function(e=new we,r=!1){return this.parent?this.parent.toGlobal(this.position,e,r):(e.x=this.position.x,e.y=this.position.y),e};var QR=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;class Vw extends Ie{constructor(e=1){super(T5,QR,{uAlpha:1}),this.alpha=e}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}}const ZR={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},qR=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function JR(t){const e=ZR[t],r=e.length;let n=qR,i="";const s="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";let o;for(let u=0;u<t;u++){let c=s.replace("%index%",u.toString());o=u,u>=r&&(o=t-u-1),c=c.replace("%value%",e[o].toString()),i+=c,i+=`
`}return n=n.replace("%blur%",i),n=n.replace("%size%",t.toString()),n}const ek=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function tk(t,e){const r=Math.ceil(t/2);let n=ek,i="",s;e?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(let o=0;o<t;o++){let u=s.replace("%index%",o.toString());u=u.replace("%sampleIndex%",`${o-(r-1)}.0`),i+=u,i+=`
`}return n=n.replace("%blur%",i),n=n.replace("%size%",t.toString()),n}class fu extends Ie{constructor(e,r=8,n=4,i=Ie.defaultResolution,s=5){const o=tk(s,e),u=JR(s);super(o,u),this.horizontal=e,this.resolution=i,this._quality=0,this.quality=n,this.blur=r}apply(e,r,n,i){if(n?this.horizontal?this.uniforms.strength=1/n.width*(n.width/r.width):this.uniforms.strength=1/n.height*(n.height/r.height):this.horizontal?this.uniforms.strength=1/e.renderer.width*(e.renderer.width/r.width):this.uniforms.strength=1/e.renderer.height*(e.renderer.height/r.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)e.applyFilter(this,r,n,i);else{const s=e.getFilterTexture(),o=e.renderer;let u=r,c=s;this.state.blend=!1,e.applyFilter(this,u,c,Kn.CLEAR);for(let h=1;h<this.passes-1;h++){e.bindAndClear(u,Kn.BLIT),this.uniforms.uSampler=c;const f=c;c=u,u=f,o.shader.bind(this),o.geometry.draw(5)}this.state.blend=!0,e.applyFilter(this,c,n,i),e.returnFilterTexture(s)}}get blur(){return this.strength}set blur(e){this.padding=1+Math.abs(e)*2,this.strength=e}get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}}class yy extends Ie{constructor(e=8,r=4,n=Ie.defaultResolution,i=5){super(),this._repeatEdgePixels=!1,this.blurXFilter=new fu(!0,e,r,n,i),this.blurYFilter=new fu(!1,e,r,n,i),this.resolution=n,this.quality=r,this.blur=e,this.repeatEdgePixels=!1}apply(e,r,n,i){const s=Math.abs(this.blurXFilter.strength),o=Math.abs(this.blurYFilter.strength);if(s&&o){const u=e.getFilterTexture();this.blurXFilter.apply(e,r,u,Kn.CLEAR),this.blurYFilter.apply(e,u,n,i),e.returnFilterTexture(u)}else o?this.blurYFilter.apply(e,r,n,i):this.blurXFilter.apply(e,r,n,i)}updatePadding(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2}get blur(){return this.blurXFilter.blur}set blur(e){this.blurXFilter.blur=this.blurYFilter.blur=e,this.updatePadding()}get quality(){return this.blurXFilter.quality}set quality(e){this.blurXFilter.quality=this.blurYFilter.quality=e}get blurX(){return this.blurXFilter.blur}set blurX(e){this.blurXFilter.blur=e,this.updatePadding()}get blurY(){return this.blurYFilter.blur}set blurY(e){this.blurYFilter.blur=e,this.updatePadding()}get blendMode(){return this.blurYFilter.blendMode}set blendMode(e){this.blurYFilter.blendMode=e}get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(e){this._repeatEdgePixels=e,this.updatePadding()}}var rk=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;class e0 extends Ie{constructor(){const e={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};super(fw,rk,e),this.alpha=1}_loadMatrix(e,r=!1){let n=e;r&&(this._multiply(n,this.uniforms.m,e),n=this._colorMatrix(n)),this.uniforms.m=n}_multiply(e,r,n){return e[0]=r[0]*n[0]+r[1]*n[5]+r[2]*n[10]+r[3]*n[15],e[1]=r[0]*n[1]+r[1]*n[6]+r[2]*n[11]+r[3]*n[16],e[2]=r[0]*n[2]+r[1]*n[7]+r[2]*n[12]+r[3]*n[17],e[3]=r[0]*n[3]+r[1]*n[8]+r[2]*n[13]+r[3]*n[18],e[4]=r[0]*n[4]+r[1]*n[9]+r[2]*n[14]+r[3]*n[19]+r[4],e[5]=r[5]*n[0]+r[6]*n[5]+r[7]*n[10]+r[8]*n[15],e[6]=r[5]*n[1]+r[6]*n[6]+r[7]*n[11]+r[8]*n[16],e[7]=r[5]*n[2]+r[6]*n[7]+r[7]*n[12]+r[8]*n[17],e[8]=r[5]*n[3]+r[6]*n[8]+r[7]*n[13]+r[8]*n[18],e[9]=r[5]*n[4]+r[6]*n[9]+r[7]*n[14]+r[8]*n[19]+r[9],e[10]=r[10]*n[0]+r[11]*n[5]+r[12]*n[10]+r[13]*n[15],e[11]=r[10]*n[1]+r[11]*n[6]+r[12]*n[11]+r[13]*n[16],e[12]=r[10]*n[2]+r[11]*n[7]+r[12]*n[12]+r[13]*n[17],e[13]=r[10]*n[3]+r[11]*n[8]+r[12]*n[13]+r[13]*n[18],e[14]=r[10]*n[4]+r[11]*n[9]+r[12]*n[14]+r[13]*n[19]+r[14],e[15]=r[15]*n[0]+r[16]*n[5]+r[17]*n[10]+r[18]*n[15],e[16]=r[15]*n[1]+r[16]*n[6]+r[17]*n[11]+r[18]*n[16],e[17]=r[15]*n[2]+r[16]*n[7]+r[17]*n[12]+r[18]*n[17],e[18]=r[15]*n[3]+r[16]*n[8]+r[17]*n[13]+r[18]*n[18],e[19]=r[15]*n[4]+r[16]*n[9]+r[17]*n[14]+r[18]*n[19]+r[19],e}_colorMatrix(e){const r=new Float32Array(e);return r[4]/=255,r[9]/=255,r[14]/=255,r[19]/=255,r}brightness(e,r){const n=[e,0,0,0,0,0,e,0,0,0,0,0,e,0,0,0,0,0,1,0];this._loadMatrix(n,r)}tint(e,r){const[n,i,s]=Ge.shared.setValue(e).toArray(),o=[n,0,0,0,0,0,i,0,0,0,0,0,s,0,0,0,0,0,1,0];this._loadMatrix(o,r)}greyscale(e,r){const n=[e,e,e,0,0,e,e,e,0,0,e,e,e,0,0,0,0,0,1,0];this._loadMatrix(n,r)}blackAndWhite(e){const r=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(r,e)}hue(e,r){e=(e||0)/180*Math.PI;const n=Math.cos(e),i=Math.sin(e),s=Math.sqrt,o=1/3,u=s(o),c=n+(1-n)*o,h=o*(1-n)-u*i,f=o*(1-n)+u*i,p=o*(1-n)+u*i,g=n+o*(1-n),v=o*(1-n)-u*i,x=o*(1-n)-u*i,S=o*(1-n)+u*i,E=n+o*(1-n),w=[c,h,f,0,0,p,g,v,0,0,x,S,E,0,0,0,0,0,1,0];this._loadMatrix(w,r)}contrast(e,r){const n=(e||0)+1,i=-.5*(n-1),s=[n,0,0,0,i,0,n,0,0,i,0,0,n,0,i,0,0,0,1,0];this._loadMatrix(s,r)}saturate(e=0,r){const n=e*2/3+1,i=(n-1)*-.5,s=[n,i,i,0,0,i,n,i,0,0,i,i,n,0,0,0,0,0,1,0];this._loadMatrix(s,r)}desaturate(){this.saturate(-1)}negative(e){const r=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(r,e)}sepia(e){const r=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(r,e)}technicolor(e){const r=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(r,e)}polaroid(e){const r=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(r,e)}toBGR(e){const r=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(r,e)}kodachrome(e){const r=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(r,e)}browni(e){const r=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(r,e)}vintage(e){const r=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(r,e)}colorTone(e,r,n,i,s){e=e||.2,r=r||.15,n=n||16770432,i=i||3375104;const o=Ge.shared,[u,c,h]=o.setValue(n).toArray(),[f,p,g]=o.setValue(i).toArray(),v=[.3,.59,.11,0,0,u,c,h,e,0,f,p,g,r,0,u-f,c-p,h-g,0,0];this._loadMatrix(v,s)}night(e,r){e=e||.1;const n=[e*-2,-e,0,0,0,-e,0,e,0,0,0,e,e*2,0,0,0,0,0,1,0];this._loadMatrix(n,r)}predator(e,r){const n=[11.224130630493164*e,-4.794486999511719*e,-2.8746118545532227*e,0*e,.40342438220977783*e,-3.6330697536468506*e,9.193157196044922*e,-2.951810836791992*e,0*e,-1.316135048866272*e,-3.2184197902679443*e,-4.2375030517578125*e,7.476448059082031*e,0*e,.8044459223747253*e,0,0,0,1,0];this._loadMatrix(n,r)}lsd(e){const r=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(r,e)}reset(){const e=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(e,!1)}get matrix(){return this.uniforms.m}set matrix(e){this.uniforms.m=e}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}}e0.prototype.grayscale=e0.prototype.greyscale;var nk=`varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,ik=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;class sk extends Ie{constructor(e,r){const n=new it;e.renderable=!1,super(ik,nk,{mapSampler:e._texture,filterMatrix:n,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])}),this.maskSprite=e,this.maskMatrix=n,r==null&&(r=20),this.scale=new we(r,r)}apply(e,r,n,i){this.uniforms.filterMatrix=e.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;const s=this.maskSprite.worldTransform,o=Math.sqrt(s.a*s.a+s.b*s.b),u=Math.sqrt(s.c*s.c+s.d*s.d);o!==0&&u!==0&&(this.uniforms.rotation[0]=s.a/o,this.uniforms.rotation[1]=s.b/o,this.uniforms.rotation[2]=s.c/u,this.uniforms.rotation[3]=s.d/u),e.applyFilter(this,r,n,i)}get map(){return this.uniforms.mapSampler}set map(e){this.uniforms.mapSampler=e}}var ok=`varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`,ak=`
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;class lk extends Ie{constructor(){super(ak,ok)}}var uk=`precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;class ck extends Ie{constructor(e=.5,r=Math.random()){super(fw,uk,{uNoise:0,uSeed:0}),this.noise=e,this.seed=r}get noise(){return this.uniforms.uNoise}set noise(e){this.uniforms.uNoise=e}get seed(){return this.uniforms.uSeed}set seed(e){this.uniforms.uSeed=e}}const F_={AlphaFilter:Vw,BlurFilter:yy,BlurFilterPass:fu,ColorMatrixFilter:e0,DisplacementFilter:sk,FXAAFilter:lk,NoiseFilter:ck};Object.entries(F_).forEach(([t,e])=>{Object.defineProperty(F_,t,{get(){return Ae("7.1.0",`filters.${t} has moved to ${t}`),e}})});class hk{constructor(){this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this.tickerAdded=!1,this._pauseUpdate=!0}init(e){this.removeTickerListener(),this.events=e,this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this.tickerAdded=!1,this._pauseUpdate=!0}get pauseUpdate(){return this._pauseUpdate}set pauseUpdate(e){this._pauseUpdate=e}addTickerListener(){this.tickerAdded||!this.domElement||(Tt.system.add(this.tickerUpdate,this,ws.INTERACTION),this.tickerAdded=!0)}removeTickerListener(){!this.tickerAdded||(Tt.system.remove(this.tickerUpdate,this),this.tickerAdded=!1)}pointerMoved(){this._didMove=!0}update(){if(!this.domElement||this._pauseUpdate)return;if(this._didMove){this._didMove=!1;return}const e=this.events.rootPointerEvent;this.events.supportsTouchEvents&&e.pointerType==="touch"||globalThis.document.dispatchEvent(new PointerEvent("pointermove",{clientX:e.clientX,clientY:e.clientY}))}tickerUpdate(e){this._deltaTime+=e,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.update())}}const ss=new hk;class Su{constructor(e){this.bubbles=!0,this.cancelBubble=!0,this.cancelable=!1,this.composed=!1,this.defaultPrevented=!1,this.eventPhase=Su.prototype.NONE,this.propagationStopped=!1,this.propagationImmediatelyStopped=!1,this.layer=new we,this.page=new we,this.NONE=0,this.CAPTURING_PHASE=1,this.AT_TARGET=2,this.BUBBLING_PHASE=3,this.manager=e}get layerX(){return this.layer.x}get layerY(){return this.layer.y}get pageX(){return this.page.x}get pageY(){return this.page.y}get data(){return this}composedPath(){return this.manager&&(!this.path||this.path[this.path.length-1]!==this.target)&&(this.path=this.target?this.manager.propagationPath(this.target):[]),this.path}initEvent(e,r,n){throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}initUIEvent(e,r,n,i,s){throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}preventDefault(){this.nativeEvent instanceof Event&&this.nativeEvent.cancelable&&this.nativeEvent.preventDefault(),this.defaultPrevented=!0}stopImmediatePropagation(){this.propagationImmediatelyStopped=!0}stopPropagation(){this.propagationStopped=!0}}class cd extends Su{constructor(){super(...arguments),this.client=new we,this.movement=new we,this.offset=new we,this.global=new we,this.screen=new we}get clientX(){return this.client.x}get clientY(){return this.client.y}get x(){return this.clientX}get y(){return this.clientY}get movementX(){return this.movement.x}get movementY(){return this.movement.y}get offsetX(){return this.offset.x}get offsetY(){return this.offset.y}get globalX(){return this.global.x}get globalY(){return this.global.y}get screenX(){return this.screen.x}get screenY(){return this.screen.y}getLocalPosition(e,r,n){return e.worldTransform.applyInverse(n||this.global,r)}getModifierState(e){return"getModifierState"in this.nativeEvent&&this.nativeEvent.getModifierState(e)}initMouseEvent(e,r,n,i,s,o,u,c,h,f,p,g,v,x,S){throw new Error("Method not implemented.")}}class gn extends cd{constructor(){super(...arguments),this.width=0,this.height=0,this.isPrimary=!1}getCoalescedEvents(){return this.type==="pointermove"||this.type==="mousemove"||this.type==="touchmove"?[this]:[]}getPredictedEvents(){throw new Error("getPredictedEvents is not supported!")}}class Pa extends cd{constructor(){super(...arguments),this.DOM_DELTA_PIXEL=0,this.DOM_DELTA_LINE=1,this.DOM_DELTA_PAGE=2}}Pa.DOM_DELTA_PIXEL=0;Pa.DOM_DELTA_LINE=1;Pa.DOM_DELTA_PAGE=2;const dk=2048,fk=new we,xm=new we;class pk{constructor(e){this.dispatch=new Ma,this.moveOnAll=!1,this.enableGlobalMoveEvents=!0,this.mappingState={trackingData:{}},this.eventPool=new Map,this._allInteractiveElements=[],this._hitElements=[],this._isPointerMoveEvent=!1,this.rootTarget=e,this.hitPruneFn=this.hitPruneFn.bind(this),this.hitTestFn=this.hitTestFn.bind(this),this.mapPointerDown=this.mapPointerDown.bind(this),this.mapPointerMove=this.mapPointerMove.bind(this),this.mapPointerOut=this.mapPointerOut.bind(this),this.mapPointerOver=this.mapPointerOver.bind(this),this.mapPointerUp=this.mapPointerUp.bind(this),this.mapPointerUpOutside=this.mapPointerUpOutside.bind(this),this.mapWheel=this.mapWheel.bind(this),this.mappingTable={},this.addEventMapping("pointerdown",this.mapPointerDown),this.addEventMapping("pointermove",this.mapPointerMove),this.addEventMapping("pointerout",this.mapPointerOut),this.addEventMapping("pointerleave",this.mapPointerOut),this.addEventMapping("pointerover",this.mapPointerOver),this.addEventMapping("pointerup",this.mapPointerUp),this.addEventMapping("pointerupoutside",this.mapPointerUpOutside),this.addEventMapping("wheel",this.mapWheel)}addEventMapping(e,r){this.mappingTable[e]||(this.mappingTable[e]=[]),this.mappingTable[e].push({fn:r,priority:0}),this.mappingTable[e].sort((n,i)=>n.priority-i.priority)}dispatchEvent(e,r){e.propagationStopped=!1,e.propagationImmediatelyStopped=!1,this.propagate(e,r),this.dispatch.emit(r||e.type,e)}mapEvent(e){if(!this.rootTarget)return;const r=this.mappingTable[e.type];if(r)for(let n=0,i=r.length;n<i;n++)r[n].fn(e);else console.warn(`[EventBoundary]: Event mapping not defined for ${e.type}`)}hitTest(e,r){ss.pauseUpdate=!0;const i=this._isPointerMoveEvent&&this.enableGlobalMoveEvents?"hitTestMoveRecursive":"hitTestRecursive",s=this[i](this.rootTarget,this.rootTarget.eventMode,fk.set(e,r),this.hitTestFn,this.hitPruneFn);return s&&s[0]}propagate(e,r){if(!e.target)return;const n=e.composedPath();e.eventPhase=e.CAPTURING_PHASE;for(let i=0,s=n.length-1;i<s;i++)if(e.currentTarget=n[i],this.notifyTarget(e,r),e.propagationStopped||e.propagationImmediatelyStopped)return;if(e.eventPhase=e.AT_TARGET,e.currentTarget=e.target,this.notifyTarget(e,r),!(e.propagationStopped||e.propagationImmediatelyStopped)){e.eventPhase=e.BUBBLING_PHASE;for(let i=n.length-2;i>=0;i--)if(e.currentTarget=n[i],this.notifyTarget(e,r),e.propagationStopped||e.propagationImmediatelyStopped)return}}all(e,r,n=this._allInteractiveElements){if(n.length===0)return;e.eventPhase=e.BUBBLING_PHASE;const i=Array.isArray(r)?r:[r];for(let s=n.length-1;s>=0;s--)i.forEach(o=>{e.currentTarget=n[s],this.notifyTarget(e,o)})}propagationPath(e){const r=[e];for(let n=0;n<dk&&e!==this.rootTarget;n++){if(!e.parent)throw new Error("Cannot find propagation path to disconnected target");r.push(e.parent),e=e.parent}return r.reverse(),r}hitTestMoveRecursive(e,r,n,i,s,o=!1){let u=!1;if(this._interactivePrune(e))return null;if((e.eventMode==="dynamic"||r==="dynamic")&&(ss.pauseUpdate=!1),e.interactiveChildren&&e.children){const f=e.children;for(let p=f.length-1;p>=0;p--){const g=f[p],v=this.hitTestMoveRecursive(g,this._isInteractive(r)?r:g.eventMode,n,i,s,o||s(e,n));if(v){if(v.length>0&&!v[v.length-1].parent)continue;const x=e.isInteractive();(v.length>0||x)&&(x&&this._allInteractiveElements.push(e),v.push(e)),this._hitElements.length===0&&(this._hitElements=v),u=!0}}}const c=this._isInteractive(r),h=e.isInteractive();return h&&h&&this._allInteractiveElements.push(e),o||this._hitElements.length>0?null:u?this._hitElements:c&&!s(e,n)&&i(e,n)?h?[e]:[]:null}hitTestRecursive(e,r,n,i,s){if(this._interactivePrune(e)||s(e,n))return null;if((e.eventMode==="dynamic"||r==="dynamic")&&(ss.pauseUpdate=!1),e.interactiveChildren&&e.children){const c=e.children;for(let h=c.length-1;h>=0;h--){const f=c[h],p=this.hitTestRecursive(f,this._isInteractive(r)?r:f.eventMode,n,i,s);if(p){if(p.length>0&&!p[p.length-1].parent)continue;const g=e.isInteractive();return(p.length>0||g)&&p.push(e),p}}}const o=this._isInteractive(r),u=e.isInteractive();return o&&i(e,n)?u?[e]:[]:null}_isInteractive(e){return e==="static"||e==="dynamic"}_interactivePrune(e){return!!(!e||e.isMask||!e.visible||!e.renderable||e.eventMode==="none"||e.eventMode==="passive"&&!e.interactiveChildren||e.isMask)}hitPruneFn(e,r){var n;if(e.hitArea&&(e.worldTransform.applyInverse(r,xm),!e.hitArea.contains(xm.x,xm.y)))return!0;if(e._mask){const i=e._mask.isMaskData?e._mask.maskObject:e._mask;if(i&&!((n=i.containsPoint)!=null&&n.call(i,r)))return!0}return!1}hitTestFn(e,r){return e.eventMode==="passive"?!1:e.hitArea?!0:e.containsPoint?e.containsPoint(r):!1}notifyTarget(e,r){var s,o;r=r!=null?r:e.type;const n=`on${r}`;(o=(s=e.currentTarget)[n])==null||o.call(s,e);const i=e.eventPhase===e.CAPTURING_PHASE||e.eventPhase===e.AT_TARGET?`${r}capture`:r;this.notifyListeners(e,i),e.eventPhase===e.AT_TARGET&&this.notifyListeners(e,r)}mapPointerDown(e){if(!(e instanceof gn)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const r=this.createPointerEvent(e);if(this.dispatchEvent(r,"pointerdown"),r.pointerType==="touch")this.dispatchEvent(r,"touchstart");else if(r.pointerType==="mouse"||r.pointerType==="pen"){const i=r.button===2;this.dispatchEvent(r,i?"rightdown":"mousedown")}const n=this.trackingData(e.pointerId);n.pressTargetsByButton[e.button]=r.composedPath(),this.freeEvent(r)}mapPointerMove(e){var c,h,f;if(!(e instanceof gn)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}this._allInteractiveElements.length=0,this._hitElements.length=0,this._isPointerMoveEvent=!0;const r=this.createPointerEvent(e);this._isPointerMoveEvent=!1;const n=r.pointerType==="mouse"||r.pointerType==="pen",i=this.trackingData(e.pointerId),s=this.findMountedTarget(i.overTargets);if(((c=i.overTargets)==null?void 0:c.length)>0&&s!==r.target){const p=e.type==="mousemove"?"mouseout":"pointerout",g=this.createPointerEvent(e,p,s);if(this.dispatchEvent(g,"pointerout"),n&&this.dispatchEvent(g,"mouseout"),!r.composedPath().includes(s)){const v=this.createPointerEvent(e,"pointerleave",s);for(v.eventPhase=v.AT_TARGET;v.target&&!r.composedPath().includes(v.target);)v.currentTarget=v.target,this.notifyTarget(v),n&&this.notifyTarget(v,"mouseleave"),v.target=v.target.parent;this.freeEvent(v)}this.freeEvent(g)}if(s!==r.target){const p=e.type==="mousemove"?"mouseover":"pointerover",g=this.clonePointerEvent(r,p);this.dispatchEvent(g,"pointerover"),n&&this.dispatchEvent(g,"mouseover");let v=s==null?void 0:s.parent;for(;v&&v!==this.rootTarget.parent&&v!==r.target;)v=v.parent;if(!v||v===this.rootTarget.parent){const S=this.clonePointerEvent(r,"pointerenter");for(S.eventPhase=S.AT_TARGET;S.target&&S.target!==s&&S.target!==this.rootTarget.parent;)S.currentTarget=S.target,this.notifyTarget(S),n&&this.notifyTarget(S,"mouseenter"),S.target=S.target.parent;this.freeEvent(S)}this.freeEvent(g)}const o=[],u=(h=this.enableGlobalMoveEvents)!=null?h:!0;this.moveOnAll?o.push("pointermove"):this.dispatchEvent(r,"pointermove"),u&&o.push("globalpointermove"),r.pointerType==="touch"&&(this.moveOnAll?o.splice(1,0,"touchmove"):this.dispatchEvent(r,"touchmove"),u&&o.push("globaltouchmove")),n&&(this.moveOnAll?o.splice(1,0,"mousemove"):this.dispatchEvent(r,"mousemove"),u&&o.push("globalmousemove"),this.cursor=(f=r.target)==null?void 0:f.cursor),o.length>0&&this.all(r,o),this._allInteractiveElements.length=0,this._hitElements.length=0,i.overTargets=r.composedPath(),this.freeEvent(r)}mapPointerOver(e){var o;if(!(e instanceof gn)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const r=this.trackingData(e.pointerId),n=this.createPointerEvent(e),i=n.pointerType==="mouse"||n.pointerType==="pen";this.dispatchEvent(n,"pointerover"),i&&this.dispatchEvent(n,"mouseover"),n.pointerType==="mouse"&&(this.cursor=(o=n.target)==null?void 0:o.cursor);const s=this.clonePointerEvent(n,"pointerenter");for(s.eventPhase=s.AT_TARGET;s.target&&s.target!==this.rootTarget.parent;)s.currentTarget=s.target,this.notifyTarget(s),i&&this.notifyTarget(s,"mouseenter"),s.target=s.target.parent;r.overTargets=n.composedPath(),this.freeEvent(n),this.freeEvent(s)}mapPointerOut(e){if(!(e instanceof gn)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const r=this.trackingData(e.pointerId);if(r.overTargets){const n=e.pointerType==="mouse"||e.pointerType==="pen",i=this.findMountedTarget(r.overTargets),s=this.createPointerEvent(e,"pointerout",i);this.dispatchEvent(s),n&&this.dispatchEvent(s,"mouseout");const o=this.createPointerEvent(e,"pointerleave",i);for(o.eventPhase=o.AT_TARGET;o.target&&o.target!==this.rootTarget.parent;)o.currentTarget=o.target,this.notifyTarget(o),n&&this.notifyTarget(o,"mouseleave"),o.target=o.target.parent;r.overTargets=null,this.freeEvent(s),this.freeEvent(o)}this.cursor=null}mapPointerUp(e){if(!(e instanceof gn)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const r=performance.now(),n=this.createPointerEvent(e);if(this.dispatchEvent(n,"pointerup"),n.pointerType==="touch")this.dispatchEvent(n,"touchend");else if(n.pointerType==="mouse"||n.pointerType==="pen"){const u=n.button===2;this.dispatchEvent(n,u?"rightup":"mouseup")}const i=this.trackingData(e.pointerId),s=this.findMountedTarget(i.pressTargetsByButton[e.button]);let o=s;if(s&&!n.composedPath().includes(s)){let u=s;for(;u&&!n.composedPath().includes(u);){if(n.currentTarget=u,this.notifyTarget(n,"pointerupoutside"),n.pointerType==="touch")this.notifyTarget(n,"touchendoutside");else if(n.pointerType==="mouse"||n.pointerType==="pen"){const c=n.button===2;this.notifyTarget(n,c?"rightupoutside":"mouseupoutside")}u=u.parent}delete i.pressTargetsByButton[e.button],o=u}if(o){const u=this.clonePointerEvent(n,"click");u.target=o,u.path=null,i.clicksByButton[e.button]||(i.clicksByButton[e.button]={clickCount:0,target:u.target,timeStamp:r});const c=i.clicksByButton[e.button];if(c.target===u.target&&r-c.timeStamp<200?++c.clickCount:c.clickCount=1,c.target=u.target,c.timeStamp=r,u.detail=c.clickCount,u.pointerType==="mouse"){const h=u.button===2;this.dispatchEvent(u,h?"rightclick":"click")}else u.pointerType==="touch"&&this.dispatchEvent(u,"tap");this.dispatchEvent(u,"pointertap"),this.freeEvent(u)}this.freeEvent(n)}mapPointerUpOutside(e){if(!(e instanceof gn)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const r=this.trackingData(e.pointerId),n=this.findMountedTarget(r.pressTargetsByButton[e.button]),i=this.createPointerEvent(e);if(n){let s=n;for(;s;)i.currentTarget=s,this.notifyTarget(i,"pointerupoutside"),i.pointerType==="touch"?this.notifyTarget(i,"touchendoutside"):(i.pointerType==="mouse"||i.pointerType==="pen")&&this.notifyTarget(i,i.button===2?"rightupoutside":"mouseupoutside"),s=s.parent;delete r.pressTargetsByButton[e.button]}this.freeEvent(i)}mapWheel(e){if(!(e instanceof Pa)){console.warn("EventBoundary cannot map a non-wheel event as a wheel event");return}const r=this.createWheelEvent(e);this.dispatchEvent(r),this.freeEvent(r)}findMountedTarget(e){if(!e)return null;let r=e[0];for(let n=1;n<e.length&&e[n].parent===r;n++)r=e[n];return r}createPointerEvent(e,r,n){var s;const i=this.allocateEvent(gn);return this.copyPointerData(e,i),this.copyMouseData(e,i),this.copyData(e,i),i.nativeEvent=e.nativeEvent,i.originalEvent=e,i.target=(s=n!=null?n:this.hitTest(i.global.x,i.global.y))!=null?s:this._hitElements[0],typeof r=="string"&&(i.type=r),i}createWheelEvent(e){const r=this.allocateEvent(Pa);return this.copyWheelData(e,r),this.copyMouseData(e,r),this.copyData(e,r),r.nativeEvent=e.nativeEvent,r.originalEvent=e,r.target=this.hitTest(r.global.x,r.global.y),r}clonePointerEvent(e,r){const n=this.allocateEvent(gn);return n.nativeEvent=e.nativeEvent,n.originalEvent=e.originalEvent,this.copyPointerData(e,n),this.copyMouseData(e,n),this.copyData(e,n),n.target=e.target,n.path=e.composedPath().slice(),n.type=r!=null?r:n.type,n}copyWheelData(e,r){r.deltaMode=e.deltaMode,r.deltaX=e.deltaX,r.deltaY=e.deltaY,r.deltaZ=e.deltaZ}copyPointerData(e,r){e instanceof gn&&r instanceof gn&&(r.pointerId=e.pointerId,r.width=e.width,r.height=e.height,r.isPrimary=e.isPrimary,r.pointerType=e.pointerType,r.pressure=e.pressure,r.tangentialPressure=e.tangentialPressure,r.tiltX=e.tiltX,r.tiltY=e.tiltY,r.twist=e.twist)}copyMouseData(e,r){e instanceof cd&&r instanceof cd&&(r.altKey=e.altKey,r.button=e.button,r.buttons=e.buttons,r.client.copyFrom(e.client),r.ctrlKey=e.ctrlKey,r.metaKey=e.metaKey,r.movement.copyFrom(e.movement),r.screen.copyFrom(e.screen),r.shiftKey=e.shiftKey,r.global.copyFrom(e.global))}copyData(e,r){r.isTrusted=e.isTrusted,r.srcElement=e.srcElement,r.timeStamp=performance.now(),r.type=e.type,r.detail=e.detail,r.view=e.view,r.which=e.which,r.layer.copyFrom(e.layer),r.page.copyFrom(e.page)}trackingData(e){return this.mappingState.trackingData[e]||(this.mappingState.trackingData[e]={pressTargetsByButton:{},clicksByButton:{},overTarget:null}),this.mappingState.trackingData[e]}allocateEvent(e){this.eventPool.has(e)||this.eventPool.set(e,[]);const r=this.eventPool.get(e).pop()||new e(this);return r.eventPhase=r.NONE,r.currentTarget=null,r.path=null,r.target=null,r}freeEvent(e){if(e.manager!==this)throw new Error("It is illegal to free an event not managed by this EventBoundary!");const r=e.constructor;this.eventPool.has(r)||this.eventPool.set(r,[]),this.eventPool.get(r).push(e)}notifyListeners(e,r){const n=e.currentTarget._events[r];if(!!n&&!!e.currentTarget.isInteractive())if("fn"in n)n.once&&e.currentTarget.removeListener(r,n.fn,void 0,!0),n.fn.call(n.context,e);else for(let i=0,s=n.length;i<s&&!e.propagationImmediatelyStopped;i++)n[i].once&&e.currentTarget.removeListener(r,n[i].fn,void 0,!0),n[i].fn.call(n[i].context,e)}}const mk=1,gk={touchstart:"pointerdown",touchend:"pointerup",touchendoutside:"pointerupoutside",touchmove:"pointermove",touchcancel:"pointercancel"},t0=class{constructor(t){this.supportsTouchEvents="ontouchstart"in globalThis,this.supportsPointerEvents=!!globalThis.PointerEvent,this.domElement=null,this.resolution=1,this.renderer=t,this.rootBoundary=new pk(null),ss.init(this),this.autoPreventDefault=!0,this.eventsAdded=!1,this.rootPointerEvent=new gn(null),this.rootWheelEvent=new Pa(null),this.cursorStyles={default:"inherit",pointer:"pointer"},this.features=new Proxy({...t0.defaultEventFeatures},{set:(e,r,n)=>(r==="globalMove"&&(this.rootBoundary.enableGlobalMoveEvents=n),e[r]=n,!0)}),this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onPointerOverOut=this.onPointerOverOut.bind(this),this.onWheel=this.onWheel.bind(this)}static get defaultEventMode(){return this._defaultEventMode}init(t){var n,i;const{view:e,resolution:r}=this.renderer;this.setTargetElement(e),this.resolution=r,t0._defaultEventMode=(n=t.eventMode)!=null?n:"auto",Object.assign(this.features,(i=t.eventFeatures)!=null?i:{}),this.rootBoundary.enableGlobalMoveEvents=this.features.globalMove}resolutionChange(t){this.resolution=t}destroy(){this.setTargetElement(null),this.renderer=null}setCursor(t){t=t||"default";let e=!0;if(globalThis.OffscreenCanvas&&this.domElement instanceof OffscreenCanvas&&(e=!1),this.currentCursor===t)return;this.currentCursor=t;const r=this.cursorStyles[t];if(r)switch(typeof r){case"string":e&&(this.domElement.style.cursor=r);break;case"function":r(t);break;case"object":e&&Object.assign(this.domElement.style,r);break}else e&&typeof t=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,t)&&(this.domElement.style.cursor=t)}get pointer(){return this.rootPointerEvent}onPointerDown(t){if(!this.features.click||(this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.supportsTouchEvents&&t.pointerType==="touch"))return;const e=this.normalizeToPointerData(t);this.autoPreventDefault&&e[0].isNormalized&&(t.cancelable||!("cancelable"in t))&&t.preventDefault();for(let r=0,n=e.length;r<n;r++){const i=e[r],s=this.bootstrapEvent(this.rootPointerEvent,i);this.rootBoundary.mapEvent(s)}this.setCursor(this.rootBoundary.cursor)}onPointerMove(t){if(!this.features.move||(this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.supportsTouchEvents&&t.pointerType==="touch"))return;ss.pointerMoved();const e=this.normalizeToPointerData(t);for(let r=0,n=e.length;r<n;r++){const i=this.bootstrapEvent(this.rootPointerEvent,e[r]);this.rootBoundary.mapEvent(i)}this.setCursor(this.rootBoundary.cursor)}onPointerUp(t){if(!this.features.click||(this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.supportsTouchEvents&&t.pointerType==="touch"))return;let e=t.target;t.composedPath&&t.composedPath().length>0&&(e=t.composedPath()[0]);const r=e!==this.domElement?"outside":"",n=this.normalizeToPointerData(t);for(let i=0,s=n.length;i<s;i++){const o=this.bootstrapEvent(this.rootPointerEvent,n[i]);o.type+=r,this.rootBoundary.mapEvent(o)}this.setCursor(this.rootBoundary.cursor)}onPointerOverOut(t){if(!this.features.click||(this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.supportsTouchEvents&&t.pointerType==="touch"))return;const e=this.normalizeToPointerData(t);for(let r=0,n=e.length;r<n;r++){const i=this.bootstrapEvent(this.rootPointerEvent,e[r]);this.rootBoundary.mapEvent(i)}this.setCursor(this.rootBoundary.cursor)}onWheel(t){if(!this.features.wheel)return;const e=this.normalizeWheelEvent(t);this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.rootBoundary.mapEvent(e)}setTargetElement(t){this.removeEvents(),this.domElement=t,ss.domElement=t,this.addEvents()}addEvents(){if(this.eventsAdded||!this.domElement)return;ss.addTickerListener();const t=this.domElement.style;t&&(globalThis.navigator.msPointerEnabled?(t.msContentZooming="none",t.msTouchAction="none"):this.supportsPointerEvents&&(t.touchAction="none")),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this.onPointerMove,!0),this.domElement.addEventListener("pointerdown",this.onPointerDown,!0),this.domElement.addEventListener("pointerleave",this.onPointerOverOut,!0),this.domElement.addEventListener("pointerover",this.onPointerOverOut,!0),globalThis.addEventListener("pointerup",this.onPointerUp,!0)):(globalThis.document.addEventListener("mousemove",this.onPointerMove,!0),this.domElement.addEventListener("mousedown",this.onPointerDown,!0),this.domElement.addEventListener("mouseout",this.onPointerOverOut,!0),this.domElement.addEventListener("mouseover",this.onPointerOverOut,!0),globalThis.addEventListener("mouseup",this.onPointerUp,!0)),this.supportsTouchEvents&&(this.domElement.addEventListener("touchstart",this.onPointerDown,!0),this.domElement.addEventListener("touchend",this.onPointerUp,!0),this.domElement.addEventListener("touchmove",this.onPointerMove,!0)),this.domElement.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0}),this.eventsAdded=!0}removeEvents(){if(!this.eventsAdded||!this.domElement)return;ss.removeTickerListener();const t=this.domElement.style;globalThis.navigator.msPointerEnabled?(t.msContentZooming="",t.msTouchAction=""):this.supportsPointerEvents&&(t.touchAction=""),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this.onPointerMove,!0),this.domElement.removeEventListener("pointerdown",this.onPointerDown,!0),this.domElement.removeEventListener("pointerleave",this.onPointerOverOut,!0),this.domElement.removeEventListener("pointerover",this.onPointerOverOut,!0),globalThis.removeEventListener("pointerup",this.onPointerUp,!0)):(globalThis.document.removeEventListener("mousemove",this.onPointerMove,!0),this.domElement.removeEventListener("mousedown",this.onPointerDown,!0),this.domElement.removeEventListener("mouseout",this.onPointerOverOut,!0),this.domElement.removeEventListener("mouseover",this.onPointerOverOut,!0),globalThis.removeEventListener("mouseup",this.onPointerUp,!0)),this.supportsTouchEvents&&(this.domElement.removeEventListener("touchstart",this.onPointerDown,!0),this.domElement.removeEventListener("touchend",this.onPointerUp,!0),this.domElement.removeEventListener("touchmove",this.onPointerMove,!0)),this.domElement.removeEventListener("wheel",this.onWheel,!0),this.domElement=null,this.eventsAdded=!1}mapPositionToPoint(t,e,r){let n;this.domElement.parentElement?n=this.domElement.getBoundingClientRect():n={x:0,y:0,width:this.domElement.width,height:this.domElement.height,left:0,top:0};const i=1/this.resolution;t.x=(e-n.left)*(this.domElement.width/n.width)*i,t.y=(r-n.top)*(this.domElement.height/n.height)*i}normalizeToPointerData(t){const e=[];if(this.supportsTouchEvents&&t instanceof TouchEvent)for(let r=0,n=t.changedTouches.length;r<n;r++){const i=t.changedTouches[r];typeof i.button>"u"&&(i.button=0),typeof i.buttons>"u"&&(i.buttons=1),typeof i.isPrimary>"u"&&(i.isPrimary=t.touches.length===1&&t.type==="touchstart"),typeof i.width>"u"&&(i.width=i.radiusX||1),typeof i.height>"u"&&(i.height=i.radiusY||1),typeof i.tiltX>"u"&&(i.tiltX=0),typeof i.tiltY>"u"&&(i.tiltY=0),typeof i.pointerType>"u"&&(i.pointerType="touch"),typeof i.pointerId>"u"&&(i.pointerId=i.identifier||0),typeof i.pressure>"u"&&(i.pressure=i.force||.5),typeof i.twist>"u"&&(i.twist=0),typeof i.tangentialPressure>"u"&&(i.tangentialPressure=0),typeof i.layerX>"u"&&(i.layerX=i.offsetX=i.clientX),typeof i.layerY>"u"&&(i.layerY=i.offsetY=i.clientY),i.isNormalized=!0,i.type=t.type,e.push(i)}else if(!globalThis.MouseEvent||t instanceof MouseEvent&&(!this.supportsPointerEvents||!(t instanceof globalThis.PointerEvent))){const r=t;typeof r.isPrimary>"u"&&(r.isPrimary=!0),typeof r.width>"u"&&(r.width=1),typeof r.height>"u"&&(r.height=1),typeof r.tiltX>"u"&&(r.tiltX=0),typeof r.tiltY>"u"&&(r.tiltY=0),typeof r.pointerType>"u"&&(r.pointerType="mouse"),typeof r.pointerId>"u"&&(r.pointerId=mk),typeof r.pressure>"u"&&(r.pressure=.5),typeof r.twist>"u"&&(r.twist=0),typeof r.tangentialPressure>"u"&&(r.tangentialPressure=0),r.isNormalized=!0,e.push(r)}else e.push(t);return e}normalizeWheelEvent(t){const e=this.rootWheelEvent;return this.transferMouseData(e,t),e.deltaX=t.deltaX,e.deltaY=t.deltaY,e.deltaZ=t.deltaZ,e.deltaMode=t.deltaMode,this.mapPositionToPoint(e.screen,t.clientX,t.clientY),e.global.copyFrom(e.screen),e.offset.copyFrom(e.screen),e.nativeEvent=t,e.type=t.type,e}bootstrapEvent(t,e){return t.originalEvent=null,t.nativeEvent=e,t.pointerId=e.pointerId,t.width=e.width,t.height=e.height,t.isPrimary=e.isPrimary,t.pointerType=e.pointerType,t.pressure=e.pressure,t.tangentialPressure=e.tangentialPressure,t.tiltX=e.tiltX,t.tiltY=e.tiltY,t.twist=e.twist,this.transferMouseData(t,e),this.mapPositionToPoint(t.screen,e.clientX,e.clientY),t.global.copyFrom(t.screen),t.offset.copyFrom(t.screen),t.isTrusted=e.isTrusted,t.type==="pointerleave"&&(t.type="pointerout"),t.type.startsWith("mouse")&&(t.type=t.type.replace("mouse","pointer")),t.type.startsWith("touch")&&(t.type=gk[t.type]||t.type),t}transferMouseData(t,e){t.isTrusted=e.isTrusted,t.srcElement=e.srcElement,t.timeStamp=performance.now(),t.type=e.type,t.altKey=e.altKey,t.button=e.button,t.buttons=e.buttons,t.client.x=e.clientX,t.client.y=e.clientY,t.ctrlKey=e.ctrlKey,t.metaKey=e.metaKey,t.movement.x=e.movementX,t.movement.y=e.movementY,t.page.x=e.pageX,t.page.y=e.pageY,t.relatedTarget=null,t.shiftKey=e.shiftKey}};let pu=t0;pu.extension={name:"events",type:[oe.RendererSystem,oe.CanvasRendererSystem]};pu.defaultEventFeatures={move:!0,globalMove:!0,click:!0,wheel:!0};me.add(pu);function L_(t){return t==="dynamic"||t==="static"}const yk={onclick:null,onmousedown:null,onmouseenter:null,onmouseleave:null,onmousemove:null,onglobalmousemove:null,onmouseout:null,onmouseover:null,onmouseup:null,onmouseupoutside:null,onpointercancel:null,onpointerdown:null,onpointerenter:null,onpointerleave:null,onpointermove:null,onglobalpointermove:null,onpointerout:null,onpointerover:null,onpointertap:null,onpointerup:null,onpointerupoutside:null,onrightclick:null,onrightdown:null,onrightup:null,onrightupoutside:null,ontap:null,ontouchcancel:null,ontouchend:null,ontouchendoutside:null,ontouchmove:null,onglobaltouchmove:null,ontouchstart:null,onwheel:null,_internalInteractive:void 0,get interactive(){var t;return(t=this._internalInteractive)!=null?t:L_(pu.defaultEventMode)},set interactive(t){Ae("7.2.0","Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."),this._internalInteractive=t,this.eventMode=t?"static":"auto"},_internalEventMode:void 0,get eventMode(){var t;return(t=this._internalEventMode)!=null?t:pu.defaultEventMode},set eventMode(t){this._internalInteractive=L_(t),this._internalEventMode=t},isInteractive(){return this.eventMode==="static"||this.eventMode==="dynamic"},interactiveChildren:!0,hitArea:null,addEventListener(t,e,r){const n=typeof r=="boolean"&&r||typeof r=="object"&&r.capture,i=typeof e=="function"?void 0:e;t=n?`${t}capture`:t,e=typeof e=="function"?e:e.handleEvent,this.on(t,e,i)},removeEventListener(t,e,r){const n=typeof r=="boolean"&&r||typeof r=="object"&&r.capture,i=typeof e=="function"?void 0:e;t=n?`${t}capture`:t,e=typeof e=="function"?e:e.handleEvent,this.off(t,e,i)},dispatchEvent(t){if(!(t instanceof Su))throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");return t.defaultPrevented=!1,t.path=null,t.target=this,t.manager.dispatchEvent(t),!t.defaultPrevented}};Ke.mixin(yk);const vk={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,renderId:-1};Ke.mixin(vk);const xk=9,Jc=100,_k=0,Tk=0,B_=2,U_=1,bk=-1e3,wk=-1e3,Sk=2;class Ww{constructor(e){this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this.pool=[],this.renderId=0,this.children=[],this.androidUpdateCount=0,this.androidUpdateFrequency=500,this._hookDiv=null,(Ei.tablet||Ei.phone)&&this.createTouchHook();const r=document.createElement("div");r.style.width=`${Jc}px`,r.style.height=`${Jc}px`,r.style.position="absolute",r.style.top=`${_k}px`,r.style.left=`${Tk}px`,r.style.zIndex=B_.toString(),this.div=r,this.renderer=e,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)}get isActive(){return this._isActive}get isMobileAccessibility(){return this._isMobileAccessibility}createTouchHook(){const e=document.createElement("button");e.style.width=`${U_}px`,e.style.height=`${U_}px`,e.style.position="absolute",e.style.top=`${bk}px`,e.style.left=`${wk}px`,e.style.zIndex=Sk.toString(),e.style.backgroundColor="#FF0000",e.title="select to enable accessibility for this content",e.addEventListener("focus",()=>{this._isMobileAccessibility=!0,this.activate(),this.destroyTouchHook()}),document.body.appendChild(e),this._hookDiv=e}destroyTouchHook(){!this._hookDiv||(document.body.removeChild(this._hookDiv),this._hookDiv=null)}activate(){var e;this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),(e=this.renderer.view.parentNode)==null||e.appendChild(this.div))}deactivate(){var e;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),(e=this.div.parentNode)==null||e.removeChild(this.div))}updateAccessibleObjects(e){if(!e.visible||!e.accessibleChildren)return;e.accessible&&e.isInteractive()&&(e._accessibleActive||this.addChild(e),e.renderId=this.renderId);const r=e.children;if(r)for(let n=0;n<r.length;n++)this.updateAccessibleObjects(r[n])}update(){const e=performance.now();if(Ei.android.device&&e<this.androidUpdateCount||(this.androidUpdateCount=e+this.androidUpdateFrequency,!this.renderer.renderingToScreen))return;this.renderer.lastObjectRendered&&this.updateAccessibleObjects(this.renderer.lastObjectRendered);const{x:r,y:n,width:i,height:s}=this.renderer.view.getBoundingClientRect(),{width:o,height:u,resolution:c}=this.renderer,h=i/o*c,f=s/u*c;let p=this.div;p.style.left=`${r}px`,p.style.top=`${n}px`,p.style.width=`${o}px`,p.style.height=`${u}px`;for(let g=0;g<this.children.length;g++){const v=this.children[g];if(v.renderId!==this.renderId)v._accessibleActive=!1,ga(this.children,g,1),this.div.removeChild(v._accessibleDiv),this.pool.push(v._accessibleDiv),v._accessibleDiv=null,g--;else{p=v._accessibleDiv;let x=v.hitArea;const S=v.worldTransform;v.hitArea?(p.style.left=`${(S.tx+x.x*S.a)*h}px`,p.style.top=`${(S.ty+x.y*S.d)*f}px`,p.style.width=`${x.width*S.a*h}px`,p.style.height=`${x.height*S.d*f}px`):(x=v.getBounds(),this.capHitArea(x),p.style.left=`${x.x*h}px`,p.style.top=`${x.y*f}px`,p.style.width=`${x.width*h}px`,p.style.height=`${x.height*f}px`,p.title!==v.accessibleTitle&&v.accessibleTitle!==null&&(p.title=v.accessibleTitle),p.getAttribute("aria-label")!==v.accessibleHint&&v.accessibleHint!==null&&p.setAttribute("aria-label",v.accessibleHint)),(v.accessibleTitle!==p.title||v.tabIndex!==p.tabIndex)&&(p.title=v.accessibleTitle,p.tabIndex=v.tabIndex,this.debug&&this.updateDebugHTML(p))}}this.renderId++}updateDebugHTML(e){e.innerHTML=`type: ${e.type}</br> title : ${e.title}</br> tabIndex: ${e.tabIndex}`}capHitArea(e){e.x<0&&(e.width+=e.x,e.x=0),e.y<0&&(e.height+=e.y,e.y=0);const{width:r,height:n}=this.renderer;e.x+e.width>r&&(e.width=r-e.x),e.y+e.height>n&&(e.height=n-e.y)}addChild(e){let r=this.pool.pop();r||(r=document.createElement("button"),r.style.width=`${Jc}px`,r.style.height=`${Jc}px`,r.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",r.style.position="absolute",r.style.zIndex=B_.toString(),r.style.borderStyle="none",navigator.userAgent.toLowerCase().includes("chrome")?r.setAttribute("aria-live","off"):r.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?r.setAttribute("aria-relevant","additions"):r.setAttribute("aria-relevant","text"),r.addEventListener("click",this._onClick.bind(this)),r.addEventListener("focus",this._onFocus.bind(this)),r.addEventListener("focusout",this._onFocusOut.bind(this))),r.style.pointerEvents=e.accessiblePointerEvents,r.type=e.accessibleType,e.accessibleTitle&&e.accessibleTitle!==null?r.title=e.accessibleTitle:(!e.accessibleHint||e.accessibleHint===null)&&(r.title=`displayObject ${e.tabIndex}`),e.accessibleHint&&e.accessibleHint!==null&&r.setAttribute("aria-label",e.accessibleHint),this.debug&&this.updateDebugHTML(r),e._accessibleActive=!0,e._accessibleDiv=r,r.displayObject=e,this.children.push(e),this.div.appendChild(e._accessibleDiv),e._accessibleDiv.tabIndex=e.tabIndex}_dispatchEvent(e,r){const{displayObject:n}=e.target,i=this.renderer.events.rootBoundary,s=Object.assign(new Su(i),{target:n});i.rootTarget=this.renderer.lastObjectRendered,r.forEach(o=>i.dispatchEvent(s,o))}_onClick(e){this._dispatchEvent(e,["click","pointertap","tap"])}_onFocus(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","assertive"),this._dispatchEvent(e,["mouseover"])}_onFocusOut(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","polite"),this._dispatchEvent(e,["mouseout"])}_onKeyDown(e){e.keyCode===xk&&this.activate()}_onMouseMove(e){e.movementX===0&&e.movementY===0||this.deactivate()}destroy(){this.destroyTouchHook(),this.div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null}}Ww.extension={name:"accessibility",type:[oe.RendererPlugin,oe.CanvasRendererPlugin]};me.add(Ww);var Rr=(t=>(t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",t[t.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",t[t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",t[t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",t[t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",t[t.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",t[t.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",t[t.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",t[t.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",t[t.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR",t))(Rr||{});const hd={[33776]:.5,[33777]:.5,[33778]:1,[33779]:1,[35916]:.5,[35917]:.5,[35918]:1,[35919]:1,[37488]:.5,[37489]:.5,[37490]:1,[37491]:1,[37492]:.5,[37496]:1,[37493]:.5,[37497]:1,[37494]:.5,[37495]:.5,[35840]:.5,[35842]:.5,[35841]:.25,[35843]:.25,[36196]:.5,[35986]:.5,[35986]:1,[34798]:1,[37808]:1};let yi,jo;function z_(){jo={s3tc:yi.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:yi.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:yi.getExtension("WEBGL_compressed_texture_etc"),etc1:yi.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:yi.getExtension("WEBGL_compressed_texture_pvrtc")||yi.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:yi.getExtension("WEBGL_compressed_texture_atc"),astc:yi.getExtension("WEBGL_compressed_texture_astc")}}const Ek={extension:{type:oe.DetectionParser,priority:2},test:async()=>{const e=ee.ADAPTER.createCanvas().getContext("webgl");return e?(yi=e,!0):(console.warn("WebGL not available for compressed textures."),!1)},add:async t=>{jo||z_();const e=[];for(const r in jo)!jo[r]||e.push(r);return[...e,...t]},remove:async t=>(jo||z_(),t.filter(e=>!(e in jo)))};me.add(Ek);class Ck extends Tu{constructor(e,r={width:1,height:1,autoLoad:!0}){let n,i;typeof e=="string"?(n=e,i=new Uint8Array):(n=null,i=e),super(i,r),this.origin=n,this.buffer=i?new Mg(i):null,this._load=null,this.loaded=!1,this.origin!==null&&r.autoLoad!==!1&&this.load(),this.origin===null&&this.buffer&&(this._load=Promise.resolve(this),this.loaded=!0,this.onBlobLoaded(this.buffer.rawBinaryData))}onBlobLoaded(e){}load(){return this._load?this._load:(this._load=fetch(this.origin).then(e=>e.blob()).then(e=>e.arrayBuffer()).then(e=>(this.data=new Uint32Array(e),this.buffer=new Mg(e),this.loaded=!0,this.onBlobLoaded(e),this.update(),this)),this._load)}}class ro extends Ck{constructor(e,r){super(e,r),this.format=r.format,this.levels=r.levels||1,this._width=r.width,this._height=r.height,this._extension=ro._formatToExtension(this.format),(r.levelBuffers||this.buffer)&&(this._levelBuffers=r.levelBuffers||ro._createLevelBuffers(e instanceof Uint8Array?e:this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height))}upload(e,r,n){const i=e.gl;if(!e.context.extensions[this._extension])throw new Error(`${this._extension} textures are not supported on the current machine`);if(!this._levelBuffers)return!1;for(let o=0,u=this.levels;o<u;o++){const{levelID:c,levelWidth:h,levelHeight:f,levelBuffer:p}=this._levelBuffers[o];i.compressedTexImage2D(i.TEXTURE_2D,c,this.format,h,f,0,p)}return!0}onBlobLoaded(){this._levelBuffers=ro._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height)}static _formatToExtension(e){if(e>=33776&&e<=33779)return"s3tc";if(e>=37488&&e<=37497)return"etc";if(e>=35840&&e<=35843)return"pvrtc";if(e>=36196)return"etc1";if(e>=35986&&e<=34798)return"atc";throw new Error("Invalid (compressed) texture format given!")}static _createLevelBuffers(e,r,n,i,s,o,u){const c=new Array(n);let h=e.byteOffset,f=o,p=u,g=f+i-1&~(i-1),v=p+s-1&~(s-1),x=g*v*hd[r];for(let S=0;S<n;S++)c[S]={levelID:S,levelWidth:n>1?f:g,levelHeight:n>1?p:v,levelBuffer:new Uint8Array(e.buffer,h,x)},h+=x,f=f>>1||1,p=p>>1||1,g=f+i-1&~(i-1),v=p+s-1&~(s-1),x=g*v*hd[r];return c}}const _m=4,eh=124,Ak=32,G_=20,Pk=542327876,th={SIZE:1,FLAGS:2,HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19},Ik={SIZE:0,FLAGS:1,FOURCC:2,RGB_BITCOUNT:3,R_BIT_MASK:4,G_BIT_MASK:5,B_BIT_MASK:6,A_BIT_MASK:7},rh={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3,MISC_FLAGS2:4},Rk=1,kk=2,Mk=4,Dk=64,Nk=512,Ok=131072,Fk=827611204,Lk=861165636,Bk=894720068,Uk=808540228,zk=4,Gk={[Fk]:Rr.COMPRESSED_RGBA_S3TC_DXT1_EXT,[Lk]:Rr.COMPRESSED_RGBA_S3TC_DXT3_EXT,[Bk]:Rr.COMPRESSED_RGBA_S3TC_DXT5_EXT},jk={[70]:Rr.COMPRESSED_RGBA_S3TC_DXT1_EXT,[71]:Rr.COMPRESSED_RGBA_S3TC_DXT1_EXT,[73]:Rr.COMPRESSED_RGBA_S3TC_DXT3_EXT,[74]:Rr.COMPRESSED_RGBA_S3TC_DXT3_EXT,[76]:Rr.COMPRESSED_RGBA_S3TC_DXT5_EXT,[77]:Rr.COMPRESSED_RGBA_S3TC_DXT5_EXT,[72]:Rr.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,[75]:Rr.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,[78]:Rr.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT};function Hk(t){const e=new Uint32Array(t);if(e[0]!==Pk)throw new Error("Invalid DDS file magic word");const n=new Uint32Array(t,0,eh/Uint32Array.BYTES_PER_ELEMENT),i=n[th.HEIGHT],s=n[th.WIDTH],o=n[th.MIPMAP_COUNT],u=new Uint32Array(t,th.PIXEL_FORMAT*Uint32Array.BYTES_PER_ELEMENT,Ak/Uint32Array.BYTES_PER_ELEMENT),c=u[Rk];if(c&Mk){const h=u[Ik.FOURCC];if(h!==Uk){const T=Gk[h],A=_m+eh,P=new Uint8Array(t,A);return[new ro(P,{format:T,width:s,height:i,levels:o})]}const f=_m+eh,p=new Uint32Array(e.buffer,f,G_/Uint32Array.BYTES_PER_ELEMENT),g=p[rh.DXGI_FORMAT],v=p[rh.RESOURCE_DIMENSION],x=p[rh.MISC_FLAG],S=p[rh.ARRAY_SIZE],E=jk[g];if(E===void 0)throw new Error(`DDSParser cannot parse texture data with DXGI format ${g}`);if(x===zk)throw new Error("DDSParser does not support cubemap textures");if(v===6)throw new Error("DDSParser does not supported 3D texture data");const w=new Array,b=_m+eh+G_;if(S===1)w.push(new Uint8Array(t,b));else{const T=hd[E];let A=0,P=s,O=i;for(let M=0;M<o;M++){const H=Math.max(1,P+3&-4),X=Math.max(1,O+3&-4),Y=H*X*T;A+=Y,P=P>>>1,O=O>>>1}let D=b;for(let M=0;M<S;M++)w.push(new Uint8Array(t,D,A)),D+=A}return w.map(T=>new ro(T,{format:E,width:s,height:i,levels:o}))}throw c&Dk?new Error("DDSParser does not support uncompressed texture data."):c&Nk?new Error("DDSParser does not supported YUV uncompressed texture data."):c&Ok?new Error("DDSParser does not support single-channel (lumninance) texture data!"):c&kk?new Error("DDSParser does not support single-channel (alpha) texture data!"):new Error("DDSParser failed to load a texture file due to an unknown reason!")}const j_=[171,75,84,88,32,49,49,187,13,10,26,10],$k=67305985,pn={FILE_IDENTIFIER:0,ENDIANNESS:12,GL_TYPE:16,GL_TYPE_SIZE:20,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,GL_BASE_INTERNAL_FORMAT:32,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},r0=64,H_={[ve.UNSIGNED_BYTE]:1,[ve.UNSIGNED_SHORT]:2,[ve.INT]:4,[ve.UNSIGNED_INT]:4,[ve.FLOAT]:4,[ve.HALF_FLOAT]:8},Vk={[J.RGBA]:4,[J.RGB]:3,[J.RG]:2,[J.RED]:1,[J.LUMINANCE]:1,[J.LUMINANCE_ALPHA]:2,[J.ALPHA]:1},Wk={[ve.UNSIGNED_SHORT_4_4_4_4]:2,[ve.UNSIGNED_SHORT_5_5_5_1]:2,[ve.UNSIGNED_SHORT_5_6_5]:2};function Xk(t,e,r=!1){const n=new DataView(e);if(!Yk(t,n))return null;const i=n.getUint32(pn.ENDIANNESS,!0)===$k,s=n.getUint32(pn.GL_TYPE,i),o=n.getUint32(pn.GL_FORMAT,i),u=n.getUint32(pn.GL_INTERNAL_FORMAT,i),c=n.getUint32(pn.PIXEL_WIDTH,i),h=n.getUint32(pn.PIXEL_HEIGHT,i)||1,f=n.getUint32(pn.PIXEL_DEPTH,i)||1,p=n.getUint32(pn.NUMBER_OF_ARRAY_ELEMENTS,i)||1,g=n.getUint32(pn.NUMBER_OF_FACES,i),v=n.getUint32(pn.NUMBER_OF_MIPMAP_LEVELS,i),x=n.getUint32(pn.BYTES_OF_KEY_VALUE_DATA,i);if(h===0||f!==1)throw new Error("Only 2D textures are supported");if(g!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(p!==1)throw new Error("WebGL does not support array textures");const S=4,E=4,w=c+3&-4,b=h+3&-4,T=new Array(p);let A=c*h;s===0&&(A=w*b);let P;if(s!==0?H_[s]?P=H_[s]*Vk[o]:P=Wk[s]:P=hd[u],P===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");const O=r?Qk(n,x,i):null;let M=A*P,H=c,X=h,Y=w,ie=b,W=r0+x;for(let U=0;U<v;U++){const fe=n.getUint32(W,i);let xe=W+4;for(let z=0;z<p;z++){let R=T[z];R||(R=T[z]=new Array(v)),R[U]={levelID:U,levelWidth:v>1||s!==0?H:Y,levelHeight:v>1||s!==0?X:ie,levelBuffer:new Uint8Array(e,xe,M)},xe+=M}W+=fe+4,W=W%4!==0?W+4-W%4:W,H=H>>1||1,X=X>>1||1,Y=H+S-1&~(S-1),ie=X+E-1&~(E-1),M=Y*ie*P}return s!==0?{uncompressed:T.map(U=>{let fe=U[0].levelBuffer,xe=!1;return s===ve.FLOAT?fe=new Float32Array(U[0].levelBuffer.buffer,U[0].levelBuffer.byteOffset,U[0].levelBuffer.byteLength/4):s===ve.UNSIGNED_INT?(xe=!0,fe=new Uint32Array(U[0].levelBuffer.buffer,U[0].levelBuffer.byteOffset,U[0].levelBuffer.byteLength/4)):s===ve.INT&&(xe=!0,fe=new Int32Array(U[0].levelBuffer.buffer,U[0].levelBuffer.byteOffset,U[0].levelBuffer.byteLength/4)),{resource:new Tu(fe,{width:U[0].levelWidth,height:U[0].levelHeight}),type:s,format:xe?Kk(o):o}}),kvData:O}:{compressed:T.map(U=>new ro(null,{format:u,width:c,height:h,levels:v,levelBuffers:U})),kvData:O}}function Yk(t,e){for(let r=0;r<j_.length;r++)if(e.getUint8(r)!==j_[r])return console.error(`${t} is not a valid *.ktx file!`),!1;return!0}function Kk(t){switch(t){case J.RGBA:return J.RGBA_INTEGER;case J.RGB:return J.RGB_INTEGER;case J.RG:return J.RG_INTEGER;case J.RED:return J.RED_INTEGER;default:return t}}function Qk(t,e,r){const n=new Map;let i=0;for(;i<e;){const s=t.getUint32(r0+i,r),o=r0+i+4,u=3-(s+3)%4;if(s===0||s>e-i){console.error("KTXLoader: keyAndValueByteSize out of bounds");break}let c=0;for(;c<s&&t.getUint8(o+c)!==0;c++);if(c===-1){console.error("KTXLoader: Failed to find null byte terminating kvData key");break}const h=new TextDecoder().decode(new Uint8Array(t.buffer,o,c)),f=new DataView(t.buffer,o+c+1,s-c-1);n.set(h,f),i+=4+s+u}return n}const Zk={extension:{type:oe.LoadParser,priority:li.High},name:"loadDDS",test(t){return mo(t,".dds")},async load(t,e,r){const i=await(await ee.ADAPTER.fetch(t)).arrayBuffer(),o=Hk(i).map(u=>{const c=new be(u,{mipmap:si.OFF,alphaMode:Nn.NO_PREMULTIPLIED_ALPHA,resolution:_s(t),...e.data});return Wd(c,r,t)});return o.length===1?o[0]:o},unload(t){Array.isArray(t)?t.forEach(e=>e.destroy(!0)):t.destroy(!0)}};me.add(Zk);const qk={extension:{type:oe.LoadParser,priority:li.High},name:"loadKTX",test(t){return mo(t,".ktx")},async load(t,e,r){const i=await(await ee.ADAPTER.fetch(t)).arrayBuffer(),{compressed:s,uncompressed:o,kvData:u}=Xk(t,i),c=s!=null?s:o,h={mipmap:si.OFF,alphaMode:Nn.NO_PREMULTIPLIED_ALPHA,resolution:_s(t),...e.data},f=c.map(p=>{c===o&&Object.assign(h,{type:p.type,format:p.format});const g=new be(p,h);return g.ktxKeyValueData=u,Wd(g,r,t)});return f.length===1?f[0]:f},unload(t){Array.isArray(t)?t.forEach(e=>e.destroy(!0)):t.destroy(!0)}};me.add(qk);const Jk={extension:oe.ResolveParser,test:t=>{const r=t.split("?")[0].split(".").pop();return["basis","ktx","dds"].includes(r)},parse:t=>{var n,i,s,o;if(t.split("?")[0].split(".").pop()==="ktx"){const u=[".s3tc.ktx",".s3tc_sRGB.ktx",".etc.ktx",".etc1.ktx",".pvrt.ktx",".atc.ktx",".astc.ktx"];if(u.some(c=>t.endsWith(c)))return{resolution:parseFloat((i=(n=ee.RETINA_PREFIX.exec(t))==null?void 0:n[1])!=null?i:"1"),format:u.find(c=>t.endsWith(c)),src:t}}return{resolution:parseFloat((o=(s=ee.RETINA_PREFIX.exec(t))==null?void 0:s[1])!=null?o:"1"),format:t.split(".").pop(),src:t}}};me.add(Jk);const e4=new Ee,t4=4,El=class{constructor(t){this.renderer=t}async image(t,e,r){const n=new Image;return n.src=await this.base64(t,e,r),n}async base64(t,e,r){const n=this.canvas(t);if(n.toBlob!==void 0)return new Promise((i,s)=>{n.toBlob(o=>{if(!o){s(new Error("ICanvas.toBlob failed!"));return}const u=new FileReader;u.onload=()=>i(u.result),u.onerror=s,u.readAsDataURL(o)},e,r)});if(n.toDataURL!==void 0)return n.toDataURL(e,r);if(n.convertToBlob!==void 0){const i=await n.convertToBlob({type:e,quality:r});return new Promise((s,o)=>{const u=new FileReader;u.onload=()=>s(u.result),u.onerror=o,u.readAsDataURL(i)})}throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")}canvas(t,e){const{pixels:r,width:n,height:i,flipY:s}=this._rawPixels(t,e);s&&El._flipY(r,n,i),El._unpremultiplyAlpha(r);const o=new uP(n,i,1),u=new ImageData(new Uint8ClampedArray(r.buffer),n,i);return o.context.putImageData(u,0,0),o.canvas}pixels(t,e){const{pixels:r,width:n,height:i,flipY:s}=this._rawPixels(t,e);return s&&El._flipY(r,n,i),El._unpremultiplyAlpha(r),r}_rawPixels(t,e){const r=this.renderer;if(!r)throw new Error("The Extract has already been destroyed");let n,i=!1,s,o=!1;if(t&&(t instanceof ii?s=t:(s=r.generateTexture(t,{resolution:r.resolution,multisample:r.multisample}),o=!0)),s){if(n=s.baseTexture.resolution,e=e!=null?e:s.frame,i=!1,!o){r.renderTexture.bind(s);const p=s.framebuffer.glFramebuffers[r.CONTEXT_UID];p.blitFramebuffer&&r.framebuffer.bind(p.blitFramebuffer)}}else n=r.resolution,e||(e=e4,e.width=r.width/n,e.height=r.height/n),i=!0,r.renderTexture.bind();const u=Math.round(e.width*n),c=Math.round(e.height*n),h=new Uint8Array(t4*u*c),f=r.gl;return f.readPixels(Math.round(e.x*n),Math.round(e.y*n),u,c,f.RGBA,f.UNSIGNED_BYTE,h),o&&(s==null||s.destroy(!0)),{pixels:h,width:u,height:c,flipY:i}}destroy(){this.renderer=null}static _flipY(t,e,r){const n=e<<2,i=r>>1,s=new Uint8Array(n);for(let o=0;o<i;o++){const u=o*n,c=(r-o-1)*n;s.set(t.subarray(u,u+n)),t.copyWithin(u,c,c+n),t.set(s,c)}}static _unpremultiplyAlpha(t){t instanceof Uint8ClampedArray&&(t=new Uint8Array(t.buffer));const e=t.length;for(let r=0;r<e;r+=4){const n=t[r+3];if(n!==0){const i=255.001/n;t[r]=t[r]*i+.5,t[r+1]=t[r+1]*i+.5,t[r+2]=t[r+2]*i+.5}}}};let Xw=El;Xw.extension={name:"extract",type:oe.RendererSystem};me.add(Xw);class r4{constructor(e){this.maxItemsPerFrame=e,this.itemsLeft=0}beginFrame(){this.itemsLeft=this.maxItemsPerFrame}allowedToUpload(){return this.itemsLeft-- >0}}function n4(t,e){var n;let r=!1;if((n=t==null?void 0:t._textures)!=null&&n.length){for(let i=0;i<t._textures.length;i++)if(t._textures[i]instanceof te){const s=t._textures[i].baseTexture;e.includes(s)||(e.push(s),r=!0)}}return r}function i4(t,e){if(t.baseTexture instanceof be){const r=t.baseTexture;return e.includes(r)||e.push(r),!0}return!1}function s4(t,e){if(t._texture&&t._texture instanceof te){const r=t._texture.baseTexture;return e.includes(r)||e.push(r),!0}return!1}function o4(t,e){return e instanceof Da?(e.updateText(!0),!0):!1}function a4(t,e){if(e instanceof pt){const r=e.toFontString();return $t.measureFont(r),!0}return!1}function l4(t,e){if(t instanceof Da){e.includes(t.style)||e.push(t.style),e.includes(t)||e.push(t);const r=t._texture.baseTexture;return e.includes(r)||e.push(r),!0}return!1}function u4(t,e){return t instanceof pt?(e.includes(t)||e.push(t),!0):!1}const Yw=class{constructor(t){this.limiter=new r4(Yw.uploadsPerFrame),this.renderer=t,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=()=>{!this.queue||this.prepareItems()},this.registerFindHook(l4),this.registerFindHook(u4),this.registerFindHook(n4),this.registerFindHook(i4),this.registerFindHook(s4),this.registerUploadHook(o4),this.registerUploadHook(a4)}upload(t){return new Promise(e=>{t&&this.add(t),this.queue.length?(this.completes.push(e),this.ticking||(this.ticking=!0,Tt.system.addOnce(this.tick,this,ws.UTILITY))):e()})}tick(){setTimeout(this.delayedTick,0)}prepareItems(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){const t=this.queue[0];let e=!1;if(t&&!t._destroyed){for(let r=0,n=this.uploadHooks.length;r<n;r++)if(this.uploadHooks[r](this.uploadHookHelper,t)){this.queue.shift(),e=!0;break}}e||this.queue.shift()}if(this.queue.length)Tt.system.addOnce(this.tick,this,ws.UTILITY);else{this.ticking=!1;const t=this.completes.slice(0);this.completes.length=0;for(let e=0,r=t.length;e<r;e++)t[e]()}}registerFindHook(t){return t&&this.addHooks.push(t),this}registerUploadHook(t){return t&&this.uploadHooks.push(t),this}add(t){for(let e=0,r=this.addHooks.length;e<r&&!this.addHooks[e](t,this.queue);e++);if(t instanceof je)for(let e=t.children.length-1;e>=0;e--)this.add(t.children[e]);return this}destroy(){this.ticking&&Tt.system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null}};let dd=Yw;dd.uploadsPerFrame=4;Object.defineProperties(ee,{UPLOADS_PER_FRAME:{get(){return dd.uploadsPerFrame},set(t){Ae("7.1.0","settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"),dd.uploadsPerFrame=t}}});function Kw(t,e){return e instanceof be?(e._glTextures[t.CONTEXT_UID]||t.texture.bind(e),!0):!1}function c4(t,e){if(!(e instanceof nn))return!1;const{geometry:r}=e;e.finishPoly(),r.updateBatches();const{batches:n}=r;for(let i=0;i<n.length;i++){const{texture:s}=n[i].style;s&&Kw(t,s.baseTexture)}return r.batchable||t.geometry.bind(r,e._resolveDirectShader(t)),!0}function h4(t,e){return t instanceof nn?(e.push(t),!0):!1}class Qw extends dd{constructor(e){super(e),this.uploadHookHelper=this.renderer,this.registerFindHook(h4),this.registerUploadHook(Kw),this.registerUploadHook(c4)}}Qw.extension={name:"prepare",type:oe.RendererSystem};me.add(Qw);const Cl=class{constructor(t,e,r=null){this.linkedSheets=[],this._texture=t instanceof te?t:null,this.baseTexture=t instanceof be?t:this._texture.baseTexture,this.textures={},this.animations={},this.data=e;const n=this.baseTexture.resource;this.resolution=this._updateResolution(r||(n?n.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}_updateResolution(t=null){const{scale:e}=this.data.meta;let r=_s(t,null);return r===null&&(r=parseFloat(e!=null?e:"1")),r!==1&&this.baseTexture.setResolution(r),r}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Cl.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let e=t;const r=Cl.BATCH_SIZE;for(;e-t<r&&e<this._frameKeys.length;){const n=this._frameKeys[e],i=this._frames[n],s=i.frame;if(s){let o=null,u=null;const c=i.trimmed!==!1&&i.sourceSize?i.sourceSize:i.frame,h=new Ee(0,0,Math.floor(c.w)/this.resolution,Math.floor(c.h)/this.resolution);i.rotated?o=new Ee(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.h)/this.resolution,Math.floor(s.w)/this.resolution):o=new Ee(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution),i.trimmed!==!1&&i.spriteSourceSize&&(u=new Ee(Math.floor(i.spriteSourceSize.x)/this.resolution,Math.floor(i.spriteSourceSize.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution)),this.textures[n]=new te(this.baseTexture,o,h,u,i.rotated?2:0,i.anchor,i.borders),te.addToCache(this.textures[n],n)}e++}}_processAnimations(){const t=this.data.animations||{};for(const e in t){this.animations[e]=[];for(let r=0;r<t[e].length;r++){const n=t[e][r];this.animations[e].push(this.textures[n])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Cl.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Cl.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){var e;for(const r in this.textures)this.textures[r].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((e=this._texture)==null||e.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null,this.linkedSheets=[]}};let n0=Cl;n0.BATCH_SIZE=1e3;const d4=["jpg","png","jpeg","avif","webp"];function Zw(t,e,r){const n={};if(t.forEach(i=>{n[i]=e}),Object.keys(e.textures).forEach(i=>{n[i]=e.textures[i]}),!r){const i=nr.dirname(t[0]);e.linkedSheets.forEach((s,o)=>{const u=Zw([`${i}/${e.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(n,u)})}return n}const f4={extension:oe.Asset,cache:{test:t=>t instanceof n0,getCacheableAssets:(t,e)=>Zw(t,e,!1)},resolver:{test:t=>{const r=t.split("?")[0].split("."),n=r.pop(),i=r.pop();return n==="json"&&d4.includes(i)},parse:t=>{var r,n;const e=t.split(".");return{resolution:parseFloat((n=(r=ee.RETINA_PREFIX.exec(t))==null?void 0:r[1])!=null?n:"1"),format:e[e.length-2],src:t}}},loader:{name:"spritesheetLoader",extension:{type:oe.LoadParser,priority:li.Normal},async testParse(t,e){return nr.extname(e.src).toLowerCase()===".json"&&!!t.frames},async parse(t,e,r){var h,f;let n=nr.dirname(e.src);n&&n.lastIndexOf("/")!==n.length-1&&(n+="/");let i=n+t.meta.image;i=Vg(i,e.src);const o=(await r.load([i]))[i],u=new n0(o.baseTexture,t,e.src);await u.parse();const c=(h=t==null?void 0:t.meta)==null?void 0:h.related_multi_packs;if(Array.isArray(c)){const p=[];for(const v of c){if(typeof v!="string")continue;let x=n+v;(f=e.data)!=null&&f.ignoreMultiPack||(x=Vg(x,e.src),p.push(r.load({src:x,data:{ignoreMultiPack:!0}})))}const g=await Promise.all(p);u.linkedSheets=g,g.forEach(v=>{v.linkedSheets=[u].concat(u.linkedSheets.filter(x=>x!==v))})}return u},unload(t){t.destroy(!0)}}};me.add(f4);const Ho=class extends pt{constructor(){super(...arguments),this._fonts=[],this._overrides=[],this._stylesheet="",this.fontsDirty=!1}static from(t){return new Ho(Object.keys(Ho.defaultOptions).reduce((e,r)=>({...e,[r]:t[r]}),{}))}cleanFonts(){this._fonts.length>0&&(this._fonts.forEach(t=>{URL.revokeObjectURL(t.src),t.refs--,t.refs===0&&(t.fontFace&&document.fonts.delete(t.fontFace),delete Ho.availableFonts[t.originalUrl])}),this.fontFamily="Arial",this._fonts.length=0,this.styleID++,this.fontsDirty=!0)}loadFont(t,e={}){const{availableFonts:r}=Ho;if(r[t]){const n=r[t];return this._fonts.push(n),n.refs++,this.styleID++,this.fontsDirty=!0,Promise.resolve()}return ee.ADAPTER.fetch(t).then(n=>n.blob()).then(async n=>new Promise((i,s)=>{const o=URL.createObjectURL(n),u=new FileReader;u.onload=()=>i([o,u.result]),u.onerror=s,u.readAsDataURL(n)})).then(async([n,i])=>{const s=Object.assign({family:nr.basename(t,nr.extname(t)),weight:"normal",style:"normal",src:n,dataSrc:i,refs:1,originalUrl:t,fontFace:null},e);r[t]=s,this._fonts.push(s),this.styleID++;const o=new FontFace(s.family,`url(${s.src})`,{weight:s.weight,style:s.style});s.fontFace=o,await o.load(),document.fonts.add(o),await document.fonts.ready,this.styleID++,this.fontsDirty=!0})}addOverride(...t){const e=t.filter(r=>!this._overrides.includes(r));e.length>0&&(this._overrides.push(...e),this.styleID++)}removeOverride(...t){const e=t.filter(r=>this._overrides.includes(r));e.length>0&&(this._overrides=this._overrides.filter(r=>!e.includes(r)),this.styleID++)}toCSS(t){return[`transform: scale(${t})`,"transform-origin: top left","display: inline-block",`color: ${this.normalizeColor(this.fill)}`,`font-size: ${this.fontSize}px`,`font-family: ${this.fontFamily}`,`font-weight: ${this.fontWeight}`,`font-style: ${this.fontStyle}`,`font-variant: ${this.fontVariant}`,`letter-spacing: ${this.letterSpacing}px`,`text-align: ${this.align}`,`padding: ${this.padding}px`,`white-space: ${this.whiteSpace}`,...this.lineHeight?[`line-height: ${this.lineHeight}px`]:[],...this.wordWrap?[`word-wrap: ${this.breakWords?"break-all":"break-word"}`,`max-width: ${this.wordWrapWidth}px`]:[],...this.strokeThickness?[`-webkit-text-stroke-width: ${this.strokeThickness}px`,`-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`,`text-stroke-width: ${this.strokeThickness}px`,`text-stroke-color: ${this.normalizeColor(this.stroke)}`,"paint-order: stroke"]:[],...this.dropShadow?[this.dropShadowToCSS()]:[],...this._overrides].join(";")}toGlobalCSS(){return this._fonts.reduce((t,e)=>`${t}
            @font-face {
                font-family: "${e.family}";
                src: url('${e.dataSrc}');
                font-weight: ${e.weight};
                font-style: ${e.style}; 
            }`,this._stylesheet)}get stylesheet(){return this._stylesheet}set stylesheet(t){this._stylesheet!==t&&(this._stylesheet=t,this.styleID++)}normalizeColor(t){return Array.isArray(t)&&(t=Ld(t)),typeof t=="number"?sP(t):t}dropShadowToCSS(){let t=this.normalizeColor(this.dropShadowColor);const e=this.dropShadowAlpha,r=Math.round(Math.cos(this.dropShadowAngle)*this.dropShadowDistance),n=Math.round(Math.sin(this.dropShadowAngle)*this.dropShadowDistance);t.startsWith("#")&&e<1&&(t+=(e*255|0).toString(16).padStart(2,"0"));const i=`${r}px ${n}px`;return this.dropShadowBlur>0?`text-shadow: ${i} ${this.dropShadowBlur}px ${t}`:`text-shadow: ${i} ${t}`}reset(){Object.assign(this,Ho.defaultOptions)}onBeforeDraw(){const{fontsDirty:t}=this;return this.fontsDirty=!1,this.isSafari&&this._fonts.length>0&&t?new Promise(e=>setTimeout(e,100)):Promise.resolve()}get isSafari(){const{userAgent:t}=ee.ADAPTER.getNavigator();return/^((?!chrome|android).)*safari/i.test(t)}set fillGradientStops(t){console.warn("[HTMLTextStyle] fillGradientStops is not supported by HTMLText")}get fillGradientStops(){return super.fillGradientStops}set fillGradientType(t){console.warn("[HTMLTextStyle] fillGradientType is not supported by HTMLText")}get fillGradientType(){return super.fillGradientType}set miterLimit(t){console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText")}get miterLimit(){return super.miterLimit}set trim(t){console.warn("[HTMLTextStyle] trim is not supported by HTMLText")}get trim(){return super.trim}set textBaseline(t){console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText")}get textBaseline(){return super.textBaseline}set leading(t){console.warn("[HTMLTextStyle] leading is not supported by HTMLText")}get leading(){return super.leading}set lineJoin(t){console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText")}get lineJoin(){return super.lineJoin}};let Ul=Ho;Ul.availableFonts={};Ul.defaultOptions={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,padding:0,stroke:"black",strokeThickness:0,whiteSpace:"normal",wordWrap:!1,wordWrapWidth:100};const $o=class extends Je{constructor(t="",e={}){var f;super(te.EMPTY),this._text=null,this._style=null,this._autoResolution=!0,this._loading=!1,this.localStyleID=-1,this.dirty=!1,this.ownsStyle=!1;const r=new Image,n=te.from(r,{scaleMode:ee.SCALE_MODE,resourceOptions:{autoLoad:!1}});n.orig=new Ee,n.trim=new Ee,this.texture=n;const i="http://www.w3.org/2000/svg",s="http://www.w3.org/1999/xhtml",o=document.createElementNS(i,"svg"),u=document.createElementNS(i,"foreignObject"),c=document.createElementNS(s,"div"),h=document.createElementNS(s,"style");u.setAttribute("width","10000"),u.setAttribute("height","10000"),u.style.overflow="hidden",o.appendChild(u),this.maxWidth=$o.defaultMaxWidth,this.maxHeight=$o.defaultMaxHeight,this._domElement=c,this._styleElement=h,this._svgRoot=o,this._foreignObject=u,this._foreignObject.appendChild(h),this._foreignObject.appendChild(c),this._image=r,this._loadImage=new Image,this._autoResolution=$o.defaultAutoResolution,this._resolution=(f=$o.defaultResolution)!=null?f:ee.RESOLUTION,this.text=t,this.style=e}measureText(t){var u,c;const{text:e,style:r,resolution:n}=Object.assign({text:this._text,style:this._style,resolution:this._resolution},t);Object.assign(this._domElement,{innerHTML:e,style:r.toCSS(n)}),this._styleElement.textContent=r.toGlobalCSS(),document.body.appendChild(this._svgRoot);const i=this._domElement.getBoundingClientRect();this._svgRoot.remove();const s=Math.min(this.maxWidth,Math.ceil(i.width)),o=Math.min(this.maxHeight,Math.ceil(i.height));return this._svgRoot.setAttribute("width",s.toString()),this._svgRoot.setAttribute("height",o.toString()),e!==this._text&&(this._domElement.innerHTML=this._text),r!==this._style&&(Object.assign(this._domElement,{style:(u=this._style)==null?void 0:u.toCSS(n)}),this._styleElement.textContent=(c=this._style)==null?void 0:c.toGlobalCSS()),{width:s+r.padding*2,height:o+r.padding*2}}async updateText(t=!0){const{style:e,_image:r,_loadImage:n}=this;if(this.localStyleID!==e.styleID&&(this.dirty=!0,this.localStyleID=e.styleID),!this.dirty&&t)return;const{width:i,height:s}=this.measureText();r.width=n.width=Math.ceil(Math.max(1,i)),r.height=n.height=Math.ceil(Math.max(1,s)),this._loading||(this._loading=!0,await new Promise(o=>{n.onload=async()=>{await e.onBeforeDraw(),this._loading=!1,r.src=n.src,n.onload=null,n.src="",this.updateTexture(),o()};const u=new XMLSerializer().serializeToString(this._svgRoot);n.src=`data:image/svg+xml;charset=utf8,${encodeURIComponent(u)}`}))}get source(){return this._image}updateTexture(){const{style:t,texture:e,_image:r,resolution:n}=this,{padding:i}=t,{baseTexture:s}=e;e.trim.width=e._frame.width=r.width/n,e.trim.height=e._frame.height=r.height/n,e.trim.x=-i,e.trim.y=-i,e.orig.width=e._frame.width-i*2,e.orig.height=e._frame.height-i*2,this._onTextureUpdate(),s.setRealSize(r.width,r.height,n),this.dirty=!1}_render(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0),this.updateText(!0),super._render(t)}_renderCanvas(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0),this.updateText(!0),super._renderCanvas(t)}getLocalBounds(t){return this.updateText(!0),super.getLocalBounds(t)}_calculateBounds(){this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)}_onStyleChange(){this.dirty=!0}destroy(t){var r,n,i,s,o;typeof t=="boolean"&&(t={children:t}),t=Object.assign({},$o.defaultDestroyOptions,t),super.destroy(t);const e=null;this.ownsStyle&&((r=this._style)==null||r.cleanFonts()),this._style=e,(n=this._svgRoot)==null||n.remove(),this._svgRoot=e,(i=this._domElement)==null||i.remove(),this._domElement=e,(s=this._foreignObject)==null||s.remove(),this._foreignObject=e,(o=this._styleElement)==null||o.remove(),this._styleElement=e,this._loadImage.src="",this._loadImage.onload=null,this._loadImage=e,this._image.src="",this._image=e}get width(){return this.updateText(!0),Math.abs(this.scale.x)*this._image.width/this.resolution}set width(t){this.updateText(!0);const e=ls(this.scale.x)||1;this.scale.x=e*t/this._image.width/this.resolution,this._width=t}get height(){return this.updateText(!0),Math.abs(this.scale.y)*this._image.height/this.resolution}set height(t){this.updateText(!0);const e=ls(this.scale.y)||1;this.scale.y=e*t/this._image.height/this.resolution,this._height=t}get style(){return this._style}set style(t){this._style!==t&&(t=t||{},t instanceof Ul?(this.ownsStyle=!1,this._style=t):t instanceof pt?(console.warn("[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"),this.ownsStyle=!0,this._style=Ul.from(t)):(this.ownsStyle=!0,this._style=new Ul(t)),this.localStyleID=-1,this.dirty=!0)}get text(){return this._text}set text(t){t=String(t===""||t===null||t===void 0?" ":t),t=this.sanitiseText(t),this._text!==t&&(this._text=t,this.dirty=!0)}get resolution(){return this._resolution}set resolution(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)}sanitiseText(t){return t.replace(/<br>/gi,"<br/>").replace(/<hr>/gi,"<hr/>").replace(/&nbsp;/gi,"&#160;")}};let Qd=$o;Qd.defaultDestroyOptions={texture:!0,children:!1,baseTexture:!0};Qd.defaultMaxWidth=2024;Qd.defaultMaxHeight=2024;Qd.defaultAutoResolution=!0;function p4(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)}function qw(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight)}const Jw=[16777215,7130603,15759548,16777215],$_=[2883570,16722807];let se=qw()*16/9,_e=qw();const V_="4",W_="5",X_="6",Y_="+",rr=se*.15,er=rr/4,_i=30,ur=rr*3,vy=1.8*_e,mu=_e*.1,bi=0,m4=0,nh=0,i0="/assets/hit.b45e2a6a.png";function Et(t,e,r,n){const[i,s]=e,[o,u]=r;return t<i&&!n?o:t>s&&!n?u:o===u&&!n?o:(t-i)/(s-i)*(u-o)+o}function tn(t,e,r){const[n,i]=e,[s,o]=r;let u=(t-n)/(i-n);return u=1-Math.pow(1-u,5),t<n?s:t>i?o:s===o?s:u*(o-s)+s}function Js(t,e,r,n,i,s){const o=new Da;return o.text=t,i&&(o.eventMode="static"),o.name="playbutton",o.x=e,o.y=r,o.anchor.set(n[0],n[1]),o.style=s||new pt({fill:"white",fontFamily:"Courier New",fontSize:30,fontWeight:"900",fontVariant:"small-caps"}),o}function Vo(t,e,r,n,i,s,o,u,c,h){const f=Je.from(c!=""&&c!=null?c:te.WHITE);return f.name=t,f.x=e,f.y=r,f.tint=c!=""&&c?1048575:o,f.width=n,f.height=i,h&&(f.interactive=h),f.anchor.set(s[0],s[1]),u&&f.on("mousedown",()=>{u.mousedown=t}),f}function rs(t,e,r,n,i,s,o,u,c){let h=new nn;return h.lineStyle(i,s,1),h.beginFill(c!=null?c:16777215,o),h.drawRect(0,0,r-i,n-i),h.endFill(),u||(h.blendMode=pe.ADD),h.x=t-h.width/2,h.y=e-h.height/2,h}function g4(t,e,r,n,i,s,o,u,c,h){let f=new nn;f.lineStyle(s,o,1),f.beginFill(16777215,u),f.drawRect(0,0,n-s,i-s),f.endFill(),f.x=e-f.width/2,f.y=r-f.height/2;let p=new nn;return p.lineStyle(s,o,1),p.beginFill(16777215,u),p.drawRect(0,0,n-s+c,i-s+c),p.endFill(),p.x=e-f.width/2,p.y=r-f.height/2,p.alpha=0,p.interactive=!0,[f,p]}let mi=new je;function y4(t){const e=Ve.exports.useApp();let r=t.endTime-t.startTime;const[n,i]=ye.exports.useState(Math.round(r*t.game.notespeed/1e3)-_i),[s,o]=ye.exports.useState(-n),[u,c]=ye.exports.useState(1),[h,f]=ye.exports.useState(.5),[p,g]=ye.exports.useState(-1),[v,x]=ye.exports.useState(0),[S,E]=ye.exports.useState(""),[w,b]=ye.exports.useState(se/2-ur/2+.5*ur);let T=Jw[t.keys-1],A=rs(0,0,er,_i,1,16777215,1,!0,T),P=Je.from(i0),O=Je.from(te.WHITE);return mi.getChildByName("note"+t.i+t.keys)==null?(O.name="hold"+t.i+t.keys,O.anchor.set(0,1),O.width=er*.8,O.tint=T,P=Je.from(i0),P.tint=T,P.anchor.set(.5,.5),P.width=P.height=er*3,P.y=_e-mu,P.blendMode=pe.ADD,P.alpha=0,P.name="hits"+t.i+t.keys,A.name="note"+t.i+t.keys,A.height=_i,mi.addChild(O),mi.addChild(A),mi.addChild(P)):(A=mi.getChildByName("note"+t.i+t.keys),O=mi.getChildByName("hold"+t.i+t.keys),P=mi.getChildByName("hits"+t.i+t.keys)),Ve.exports.useTick(()=>{if(t.game.isPlaying){i(Math.round(r*t.game.notespeed/1e3));const M=t.game.currenttime;if(t.game.beatmap.cursor.length>0){let H=-1;for(let X=0;X<t.game.beatmap.cursor.length;X++){const Y=t.game.beatmap.cursor[X];if(t.startTime<Y.startTime)break;H++}H>-1&&b(se/2-ur/2+t.game.beatmap.cursor[H].x*ur)}t.game.hitlist.length>0&&(P.alpha=v,A.y=s+n,O.alpha=h,t.game.mode=="play"&&(P.alpha=v),A.alpha=u,A.x=w-rr/2+er*(t.keys-1),P.x=t.keys==1?w-rr/2+er/2:t.keys==2?w-rr/2+er:t.keys==3?w+er:w+er*1.5,O.x=w-rr/2+er*(t.keys-1),t.game.hitlist.forEach(H=>{H.startsWith(t.startTime.toString()+t.keys.toString())&&(!H.endsWith("miss")&&p==-1&&S==""?(E("true"),g(M)):H.endsWith("miss")&&E("false"))})),S!=""&&x(Et(M,[p,p+1e3],[.2,0])),c(Et(M,[t.startTime,t.startTime+t.game.NOTE_TRAVEL_FROM_LINE_TO_BOTTOM_DURATION()],[1,0])),S=="true"?(c(0),f(1),O.y=_e-mu,O.height=Et(M,[t.startTime,t.endTime],[n,0])):(S=="false"&&f(.2),o(Et(M,[t.startTime-t.game.NOTE_TRAVEL_DURATION()+t.game.NOTE_TRAVEL_FROM_LINE_TO_BOTTOM_DURATION(),t.startTime+t.game.NOTE_TRAVEL_FROM_LINE_TO_BOTTOM_DURATION()+n/t.game.notespeed*1e3],[-n-_i,_e-_i])),O.y=s+n+_i,O.height=n)}}),mi.getChildByName("container"+t.i)==null&&e.stage.addChild(mi),null}let qi=new je;function v4(t){const e=t.game.beatmap.hitObjects.filter(A=>A.column==t.keys)[t.i].startTime,r=Ve.exports.useApp();qi.name="container"+t.i;let[n,i]=ye.exports.useState(!1);const[s,o]=ye.exports.useState(0),[u,c]=ye.exports.useState(1),[h,f]=ye.exports.useState(-1),[p,g]=ye.exports.useState(0),[v,x]=ye.exports.useState(0);let S=Jw[t.keys-1];const[E,w]=ye.exports.useState(se/2-ur/2+.5*ur);t.game.beatmap.cursor.sort((A,P)=>A.startTime-P.startTime);let b=rs(0,0,er,_i,1,16777215,1,!0,S),T=Je.from(te.WHITE);return qi.getChildByName("note"+t.i+t.keys)==null?(T=Je.from(i0),T.tint=S,T.anchor.set(.5,.5),T.width=T.height=er*3,T.y=_e-mu,T.blendMode=pe.ADD,T.alpha=0,T.name="hits"+t.i+t.keys,b.name="note"+t.i+t.keys,b.height=_i,qi.addChild(b),qi.addChild(T)):(b=qi.getChildByName("note"+t.i+t.keys),t.game.mode=="play"&&(T=qi.getChildByName("hits"+t.i+t.keys))),Ve.exports.useTick(()=>{let A=t.game.isPlaying;const P=t.game.currenttime;if(A&&P>=e-t.game.NOTE_TRAVEL_DURATION()+t.game.NOTE_TRAVEL_FROM_LINE_TO_BOTTOM_DURATION()){if(T.alpha=p,T.scale.x=T.scale.y=v,b.alpha=u,b.y=s-_i,t.game.mode=="play"&&(T.alpha=p),b.alpha=u,b.x=E-rr/2+er*(t.keys-1),T.x=t.keys==1?E-rr/2+er/2:t.keys==2?E-rr/2+er:t.keys==3?E+er:E+er*1.5,t.game.beatmap.cursor.length>0){let O=-1;for(let D=0;D<t.game.beatmap.cursor.length;D++){const M=t.game.beatmap.cursor[D];if(e<M.startTime)break;O++}O>-1&&w(se/2-ur/2+t.game.beatmap.cursor[O].x*ur)}t.game.hitlist.length>0&&t.game.hitlist.forEach(O=>{O.startsWith(e.toString()+t.keys.toString())&&!O.endsWith("miss")&&h==-1&&(i(!0),f(P))}),!n||h==-1?(o(Et(P,[e-t.game.NOTE_TRAVEL_DURATION()+t.game.NOTE_TRAVEL_FROM_LINE_TO_BOTTOM_DURATION(),e+t.game.NOTE_TRAVEL_FROM_LINE_TO_BOTTOM_DURATION()],[0,_e])),c(Et(P,[e,e+t.game.NOTE_TRAVEL_FROM_LINE_TO_BOTTOM_DURATION()],[1,0]))):c(0),g(tn(P,[h,h+1e3],[1,0])),x(tn(P,[h,h+1e3],[.5,1]))}}),qi.getChildByName("container"+t.i)==null&&r.stage.addChild(qi),null}var Zd={exports:{}},qd={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x4=ye.exports,_4=Symbol.for("react.element"),T4=Symbol.for("react.fragment"),b4=Object.prototype.hasOwnProperty,w4=x4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S4={key:!0,ref:!0,__self:!0,__source:!0};function eS(t,e,r){var n,i={},s=null,o=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)b4.call(e,n)&&!S4.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:_4,type:t,key:s,ref:o,props:i,_owner:w4.current}}qd.Fragment=T4;qd.jsx=eS;qd.jsxs=eS;(function(t){t.exports=qd})(Zd);const Jd=Zd.exports.Fragment,de=Zd.exports.jsx,jt=Zd.exports.jsxs,Tm=200-10*8,K_=80-6*8,E4=140-8*8;function ih(t){if(t.hitObjects.length==0)return null;t.game.playStartTime;let e=t.game.isPlaying;t.game.effectvolume;const[r,n]=ye.exports.useState(0),i=ye.exports.useMemo(()=>t.hitObjects[r],[r]);ye.exports.useState(-1);const s=new Audio;s.src="../",t.hitObjects.filter(c=>c.type=="hold"&&c.column==t.i).sort((c,h)=>c.startTime-h.startTime),Ve.exports.useTick(()=>{if(e=t.game.isPlaying,e){t.game.effectvolume,t.game.playStartTime;const c=t.game.currenttime;if(t.game.mode=="play"&&i!=null){if(t.game.key[t.i-1][0]=="1"){const h=c+m4,f=i.startTime>=h-Tm&&i.startTime<=h+Tm?i:void 0;if(f){const p=Math.abs(f.startTime-h);n(r+1),(async()=>{await t.game.hit(p<=K_?"perfect":K_<p&&p<=E4?"great":"ok",f.startTime,t.i,p)})()}}c>i.startTime+Tm&&((async()=>t.game.miss(c,t.i))(),n(r+1))}}});var o=t.game.mode=="edit"?se/4:se/2;let u=t.i==1?o-rr/2:t.i==2||t.i==3?o:o+rr/2;return de(Jd,{children:de(Ve.exports.Container,{position:[0,0],children:t.hitObjects.map((c,h)=>c.type=="note"?de(v4,{x:u,startTime:c.startTime,keys:t.i,i:h,game:t.game,container:t.container},h):de(y4,{x:u,startTime:c.startTime,endTime:c.endTime,timingPoint:t.timingPoints.filter(f=>f.time<=c.startTime).sort((f,p)=>p.time-f.time)[0],keys:t.i,container:t.container,i:h,game:t.game},h))})})}const C4={XXXXX:16745142,STASIS:10485654,"X-PHASED":7929835,PHASED:16743931,"":16777215};let Al=-1,Kr=new je;function fd(t,e){switch(Kr.getChildByName("scoretext")==null?Kr.addChild(It):Kr.getChildByName("scoretext"),Al=t,console.log(e),e){case"miss":It.text="XXXXX";break;case"ok":It.text="STASIS";break;case"great":It.text="PHASED";break;case"perfect":It.text="X-PHASED";break;default:It.text="";break}}function Sh(t){return new Da(t,new pt({fill:"white",dropShadow:!0,dropShadowBlur:0,dropShadowDistance:0,dropShadowColor:16777215,fontFamily:"Courier New",fontSize:25,fontVariant:"small-caps",trim:!1}))}let It=Sh("");It.anchor.set(.5,.5);It.name="scoretext";It.x=se/2;It.y=_e/2+50;It.alpha=0;It.style=new pt({fill:"white",fontFamily:"Courier New",fontSize:20,fontWeight:"900",align:"center"});function A4(t){Kr=t.container;const e=Ve.exports.useApp();e.stage.addChild(Kr);const[r,n]=ye.exports.useState("0"),[i,s]=ye.exports.useState(0),[o,u]=ye.exports.useState("0");let c=Sh(`INITIALIZING PROGRAM:
    OPERATION : ${t.game.beatmap.metadata.title}
    PERFORMER : ${t.game.beatmap.metadata.artist}
    SUPERVISER : ${t.game.beatmap.metadata.creator}
    TYPE : ${t.game.beatmap.metadata.difficult}
////////////
APPRECIATE THE REALITY
APPRECIATE THE REALITY
APPRECIATE THE REALITY
APPRECIATE THE REALITY
APPRECIATE THE REALITY
APPRECIATE THE REALITY
APPRECIATE THE REALITY
APPRECIATE THE REALITY
APPRECIATE THE REALITY
APPRECIATE THE REALITY
APPRECIATE THE REALITY
JOIN THE AWAKENING
/////////////`),h=Sh(""),f=Sh("");return Kr.getChildByName("scoretext")==null?(c.x=20+50,c.y=_e-(mu+20),c.name="title",c.alpha=h.alpha=0,c.anchor.set(0,1),c.blendMode=h.blendMode=pe.EXCLUSION,c.style=new pt({fontFamily:"Courier New",align:"left",fill:"#ffffff",fontSize:_e*.01}),f.style=new pt({fill:"white",fontFamily:"Courier New",fontSize:30,fontWeight:"900",align:"center"}),h.style=new pt({fill:"white",fontFamily:"Courier New",fontSize:20,align:"left"}),f.x=se/2,f.y=_e/2,f.name="combotext2",f.anchor.set(.5,.5),f.alpha=1,h.x=13,h.y=13,h.anchor.set(0,0),h.name="combotext",Kr.addChild(h),Kr.addChild(f),Kr.addChild(It)):(It=Kr.getChildByName("scoretext"),f=Kr.getChildByName("combotext2"),h=Kr.getChildByName("combotext")),ye.exports.useEffect(()=>{setInterval(()=>{u(Math.round(e.ticker.FPS).toString())},1e3)}),Ve.exports.useTick(()=>{if(t.game.mode=="play"){const p=t.game.currenttime;h.text=`${Math.round(t.game.score/t.game.maxscore*1e7+t.game.hitbonus)}`,f.text=`${t.game.combo}`,It.scale.x=It.scale.y=f.scale.x=f.scale.y=tn(p,[Al,Al+500],[2,1]),It.alpha=tn(p,[Al,Al+1e3],[1,0]),It.tint=C4[It.text],n(t.game.combo.toString())}}),Ve.exports.useTick(()=>{t.game.mode=="play"&&(s(1),c.alpha=.5,h.alpha=1)}),null}const bm=50;function P4(t){const[e,r]=ye.exports.useState(.5);ye.exports.useState(-1);const[n,i]=ye.exports.useState(0);Ve.exports.useApp(),t.game.playStartTime;const s=ye.exports.useMemo(()=>t.cursors[n],[n]);return Ve.exports.useTick(()=>{if(t.game.playStartTime,t.game.isPlaying){const c=t.game.currenttime;for(let h=0;h<t.cursors.length;h++){const f=t.cursors[h],p=t.cursors[h+1]!=null?t.cursors[h+1].startTime:t.game.audio.duration*1e3;c>=f.startTime&&p>=c&&f.type=="normal"&&r(f.x)}if(t.game.mode=="play"&&s!=null){if(c>s.startTime+bm){var u=async()=>{t.game.combo=0,i(n+1),fd(c,"miss")};u()}if(e>s.x&&t.game.key[4][0]=="1"||e<s.x&&t.game.key[4][1]=="1"){c>=s.startTime-bm;for(let h=0;h<t.cursors.length;h++){const f=t.cursors[h];if(c>=f.startTime-bm){var u=async()=>{i(h+1),t.game.score+=t.game.idtoscore("perfect"),t.game.combo+=1,t.game.combo>t.game.highestcombo&&(t.game.highestcombo=t.game.combo),t.game.key[4]="00",t.game.hitbonus+=10,t.game.hitlist.push(f.startTime.toString()+"5,perfect"),fd(c,"perfect")};t.game.hitlist.find(g=>g.startsWith(f.startTime.toString()+"5,"))==null&&u()}}}}}}),null}const I4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAAAyCAYAAAAJFI0UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAKJkAACiZAbqDAN8AAAJFaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPg0KICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4NCiAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjI2NDwvdGlmZjpZUmVzb2x1dGlvbj4NCiAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjI2NDwvdGlmZjpYUmVzb2x1dGlvbj4NCiAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPg0KICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4NCiAgICA8L3JkZjpEZXNjcmlwdGlvbj4NCiAgPC9yZGY6UkRGPg0KPC94OnhtcG1ldGE+DQo8P3hwYWNrZXQgZW5kPSJyIj8+Q7eE2wAADDJJREFUeF7t3euOI8txAOGztmVZtn75/d/QgCHJlu+2zA+agHLrNDnXhYSZDKBQWVlZ3RxiOrbYJGe//eHGT8tbefTczbni2c+G/7u1Of+/tyZX/n+e+tp/31pz/3Vr6v/t1qC2tf9xa/95a+arK/fvt6ZWHr+7Ncc1rofaxr996sOxrJvIwfEn5/inb9++/Sy3LI9Yab2de8/bmSeOMDcb9NUQSP2cT0Igj9YkIiSWahOPPIzJxJpZS3R6Y3HrIK72X24tGXVOAkPnCHXPCgsrreW1rLRez73n68yfsqrXzOm/jbg+YZHLnEskYi3RaMlLHqTRrmvKyhq9NWJNXbXySSth/f6px5SWuPyUVjUrreWHsNJ6HVfP1ZkzLjdjiEmjfFICgSSkWUcgs0ZeTSISk4hYU08ijadcxMkKdkrqNRBUspriQjJ6Tlj3JLTSWj6EldbLuPcclT97kMnsIa6pbY5ciKT18jNnTA52ZsZiTZ5c1Hbx640TkVhtY8fsJaE+OdXjX5/6U1rPCSumiO5KaYW1vIWV1mPuPTfl9WdNudmSkzgZwRinoIyrJQp90tGrVWcuoampHiSiTg4EYWxe/0hYxY+EhTkfVyL6WW6FtbyVldY1956TmRc3rk9OQRizJvmIq5UTawnGvItan3imWCDuwherqS6Jmf+bW3MMnDssWNux5w4LjjOFhVNaj4R1V0wrreWtrLS+595zMfPixrM/41rCqC+fvBLEWWeeyMzLaeLkRjyYstKDTIxbB/XnxxWSlXr3s5CUkpH5U1j1aO5KQpdiWmEt72Gl9SfuPQ8z3+4I8s3pm9OXJ5EkA725+kSEJAZ5MrC2Zo2mjoDECUMM6+yWEpVjT2khOSWs+XIQhHQKa0rqXcLCSmt5DyutP3L1HMyceI5JBOWNm9cnpeI5Vpug9FrSMUcUerLRt15MGOIrmUAuSekT1RRWsoL1jTvWFBbmec6aOCX0UEorreU9/NVT/5Uhj5OZSzaYMYmIE8qUSxS3LknJJ5cr7s25P4XOFfLGU1hJx/lm/4unPmGd/N1TP/nl6DU1V3Uv4vbv5K+0p+GyvIqvLq0ENJm5ZDMxnsKaVH/ONfZ8JzJx0pATz52SHPFY99dPvU+l91WbkP/Nrdm9WHtPePjbWztFldwSUqg9d1T3OAX0rJB2t7W8ld1pfQ+5xIxPfF5qksQgJhL9GROKOr38fP7JJKm1jqzIQ2xnZPwPt2aXI7bD0icJYxLSnMMxa+jDo2HX5XjOofXyD+qe2009mt+d1PJD+Or3tM6f/d5Yf8Y1gsHc4RSbJ5xkhQQil0DMGc+dFjo22UyhOGZr5xp5tOua8rIbix5Dx5gvFeU6VzuteS6Yn49n7sjmDurubmp3WstbWWl9z9W43OxnTBSNk0Y7JZgjDr18gjFuPSk0DxIo7rNTHbP1LvrOkXDmvGNobsI3r9eSUHkvOzHnMMXUX3JwzPKn3HAlo0tBrbiWt7DS+p6r50Ku/NkTiTjBwHgK64xJRW/NXD8F0ctPMiCSRCTueNZ0vERjrCUW9QlFzTxOrbXzc1ryMGc8jzEFZW4+7jl3CmnFtXwIK62fc+aMZ26Ok5XxvRjJItGUJwc5YzXlE1NCMC5Wn3Bi1pNA0opqnUObu68+DkFIiQvWq5niSnDJaZ6j+J64Hspp5bW8lL0R/zbaCc0b8p5LY008x26QN3bj/Ap5rRoi6jhumP/61hxHM3YTXN88rOk4f39r3g0UVxuO4Ua5nLrmuiF/0sccmhdr893GkL9ib8wvH8J+uHS5Yv5OFOs1O712hyTZ7s0uTLM7s2uyg2vX556ZXZz7c+6NNS/XXF8xapfY7g7twr7bje3u7GviX+lleS12g8lMPPuJXd7sJ73UXJZXsdJanuOU0SNJ+X1KZs/9bnmZueJaXs1Ka/lornZVk3nPbMb37oUty3estJaXcrWzCnOae124+r16TmbL8iJWWssVjwQViWriXcmTKavepZzvZKId19x5LcslK63lLVxJbebEZHX1+3Ultth7XMuzrLSWl9IN9kdc7b5AYHZX914iJqvdaS3PstJaXsuVlM7fI+N2Wvd+x0hsfqj1ir05v/yMldbyUq5khfL9Lhm3oypnPHdZ8yXi1afql+UuK63ltcyXiVNk4jn2u+XdxHuyOm/GR18PupLZfhVoWWktr+IUE/wOlbsSF8gqeU1xzZeFu+NaXsRKa3krCWqKavZ+t7T50rB+ykp8b9cVlzusP+zfmf+SfLYvTF/9LDPXF32hn1/81YxnjS//Gjcv37q+DDzxLpi5evSlYjlxa3whuD/wN1FrN9IXjrugPRbNl4td6I7Xn5Lpz8KYn1grp3b+6RjjmD9DNbP2ivOLyi/64vJ+wXn5CD7jX3mYP88Z1xJTcUJCF76+OTsGF3r1xOLC7uJPBImqix7VOI7muOYJi5ymGKp1fHVJJ4hMTbnqr+TX3Hws6HzNn9LSrmT1UuHcrVtpLR/BZ99pNdbXQC6a8YzJgDDKl4O8RjzmXNjG/RE9qD0l4U+xWNPaLlzjSCAw75hTWHMeM+98xsVxyinKz9rzMVfzSDKvEtAKa/koPrO0ivVnrE1ZJRVx/ZXIupjtbFpvrYZTWvKkoX7+xxJIdtZMQZW3rrmTak9Rzb9LhR5vPBIVzvoPkdYKa/lIvoK0kIBQrBWTSwIyJiljcqiOCMy72LsIW6MuCSQMeY1EzJ9CIKf5Tppjqus+FaacJp2reVRjrnPJzfNOUc34ZK65J5xXi2jltXwEn+ndQ3K5onzvbJ1c5T0vvQOW1DSiIQr5+dyJvZPlbXvvkCWLefET1Gz+zDEI8vwPWMVz7MZ777jZtc1559JI6BTW5JGk4nzMy/IXx7zwvgJTbKfkSCqBmSOTZEVEUxyeN7ssePkmr0Zt9BUUeXFvzzuuRip68nGMmv88tZeEMw/n+cenNvPoc06dt8caL/kclLWzwePejxYsfzF8ppeH58/RWF+caIzF9SAccfnuLckbJxjjdjoz12eQjK2V+2eJJ84dTP+P4BWOi3+6NceLdlST5ttZzd0Wyp/nb2f2Elo7X97ty8Plz8JXuxGfoBKTNkWlJSky0Luw9e2OUJxc9NZpjpW01DiOY3hJWL05uIjncaO6BDjvc521iWfWhPtpYd2jl36PJHau87hXWsufha9yI15cS1A4x2RCGMZJyIVcrl1N61zMCca4HBIX5q6qenMdrxzE1jan1xLgJIElm+quUNNjq+aU0ZTWjM86TAG9WEYrruW9fDVpkQrm+IxJQ5zA4CI37mKvforFuOYiJ56wVjt3Qx0/KSQ396PmejhHzePo3KekyKY5zPlE5HwzP6VUzZQWTnGd8nmRjFZay3v5zNJCY30xqZzj2eTJhGSMoScC+aSmrnlzSU5OSyxyXahqkFQSQ3lUax0cp9i6GjrHFNBkflJ+1nTeJHkKKdRNec26K/k8K6SV1vJePpu0MH+eM26sTzzFiQFieTJJKNUYt7Z54ymiOdarsTZxdMx2Xh0X3dBPOPNxJTDHnMefQio/c441x5gymi9fT4FVp78nt0S00lp+OJ9dWmisnzGxQF8MUihXa62YFBpPEVWbyOS7yOW7+JuDOMlE8nJs669E0UvH1jbuuFfi6vzzfP5353CeWd95p9xmfPW4CGnFtfxQvpK0kGwwZYRkYSxOQnMM4yR0zs+eHEhAmx+HMAeiKUYS6LNXaqfokHAILWHqy+u1KR/M3JTXmcPVS8Y5P+NTXFNGd8W00lrew2eUFs6fqbF+xlNEmBJqvhzKJ41zLmn0oV3zXprpowtdjYs3Iem1PqTa8Zp3vpiykE806qPHguRkLD7FdYqo+s4z50PulBZWXMsP5atLazbUJ4qklDCqbZxYoDbZQK+usbopr+bmPKYgksdZY6zOuMeiV98Y5ltzvnMp7+Vh88krEXVu3JNX4ymvKxmtvJYP47NKC+fPNcdTHvLJKeZYnzQSQrnWusBbI9/XgRKTsbnG0He8+o5TzczPdUTTOHnFlE7rzVczJSXWdwwxpozK4UpeM27+VeLCymt5KZ9ZWjh/tjkWNy6+Gs98ojAW12sJiXQmLvp5T8saNcmpNVMw5fTR8WdLQFMc8gTQ8eAxGKuvJaMZO87ckRlPcb1HWlhxLe/kp5/+H9JUwpIefAH5AAAAAElFTkSuQmCC",R4="/assets/cursorhitleft.0797ffa9.png";let Uo=new je;function Q_(t){Ve.exports.useApp(),Uo=t.container,t.game.effectvolume,t.beatmap.cursor=t.beatmap.cursor.sort((H,X)=>H.startTime-X.startTime),t.x;let e=t.beatmap.cursor[t.i]?t.beatmap.cursor[t.i].startTime:0,r=t.beatmap.cursor[t.i]!=null?t.beatmap.cursor[t.i].x:.5,n=.5;const i=t.type=="normal"?t.x:n;let s=t.beatmap.cursor[t.i+1]?t.beatmap.cursor[t.i+1].startTime:t.game.duration,o=s-e,u=vy;const[c,h]=ye.exports.useState(Math.round(o*u/1e3)),[f,p]=ye.exports.useState(-c);let g=0;for(let H=1;H<t.i+1;H++)if(t.beatmap.cursor[t.i-H].type=="normal"||t.beatmap.cursor[t.i-H]!=null){n=t.beatmap.cursor[t.i-H].x;break}const v=n>r?$_[0]:$_[1],[x,S]=ye.exports.useState(!0);ye.exports.useState(-1),ye.exports.useState(0);const[E,w]=ye.exports.useState(0);ye.exports.useState(!1),ye.exports.useState("");const b=n>r?-(rr/2+rr*.3/2):rr/2+rr*.3/2;let T=Et(t.x,[0,1],[se/2-ur/2,se/2+ur/2]);T+=t.type=="normal"?b:0;let A=Je.from(n>r?R4:I4),P=new nn,O=new nn;O.lineStyle(2,16777215,1),O.beginFill(0,.5),O.drawRect(0,0,rr*1.1,c),O.endFill();let D=O;P.lineStyle(1,16777215,1),P.beginFill(v,1),P.drawRect(0,0,Math.abs(n-r)*ur,10),P.endFill();let M=P;if(Uo.getChildByName("switchline"+t.i)==null){M.y=-M.height,D.y=-D.height,A.alpha=0,A.x=T,A.name=t.i+"cursorf",D.name=t.i+"rowbg",D.x=Et(i,[0,1],[se/2-ur/2-D.width/2,se/2+ur/2-D.width/2]),D.alpha=1,M.name="switchline"+t.i;const H=n>r?0:-M.width;M.x=Et(t.x,[0,1],[se/2-ur/2+H,se/2+ur/2+H]),Uo.addChild(D),Uo.addChild(M)}else M=Uo.getChildByName("switchline"+t.i),D=Uo.getChildByName(t.i+"rowbg");return Ve.exports.useTick(()=>{g=t.game.currenttime;let H=t.game.isPlaying&&s!=-1;g>=e-t.game.NOTE_TRAVEL_DURATION()+t.game.NOTE_TRAVEL_FROM_LINE_TO_BOTTOM_DURATION()&&g<=s+t.game.NOTE_TRAVEL_FROM_LINE_TO_BOTTOM_DURATION()?S(!0):S(!1),H&&x&&(M.y=f+c-M.height,D.y=f+c-D.height,p(Et(g,[e-t.game.NOTE_TRAVEL_DURATION()+t.game.NOTE_TRAVEL_FROM_LINE_TO_BOTTOM_DURATION(),s+t.game.NOTE_TRAVEL_FROM_LINE_TO_BOTTOM_DURATION()],[-c,_e])),w(Et(g,[s,s+t.game.NOTE_TRAVEL_FROM_LINE_TO_BOTTOM_DURATION()],[1,0])),M.alpha=1,D.alpha=E)}),null}const k4="/assets/judgement.ec0ed8c3.png";var M4=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,D4=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,N4=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;
uniform vec4 filterClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample top right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}
`;class pd extends Ie{constructor(e=4,r=3,n=!1){super(M4,n?N4:D4),this._kernels=[],this._blur=4,this._quality=3,this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new we,this.pixelSize=1,this._clamp=n,Array.isArray(e)?this.kernels=e:(this._blur=e,this.quality=r)}apply(e,r,n,i){const s=this._pixelSize.x/r._frame.width,o=this._pixelSize.y/r._frame.height;let u;if(this._quality===1||this._blur===0)u=this._kernels[0]+.5,this.uniforms.uOffset[0]=u*s,this.uniforms.uOffset[1]=u*o,e.applyFilter(this,r,n,i);else{const c=e.getFilterTexture();let h=r,f=c,p;const g=this._quality-1;for(let v=0;v<g;v++)u=this._kernels[v]+.5,this.uniforms.uOffset[0]=u*s,this.uniforms.uOffset[1]=u*o,e.applyFilter(this,h,f,1),p=h,h=f,f=p;u=this._kernels[g]+.5,this.uniforms.uOffset[0]=u*s,this.uniforms.uOffset[1]=u*o,e.applyFilter(this,h,n,i),e.returnFilterTexture(c)}}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((e,r)=>e+r+.5,0))}_generateKernels(){const e=this._blur,r=this._quality,n=[e];if(e>0){let i=e;const s=e/r;for(let o=1;o<r;o++)i-=s,n.push(i)}this._kernels=n,this._updatePadding()}get kernels(){return this._kernels}set kernels(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max(...e)):(this._kernels=[0],this._quality=1)}get clamp(){return this._clamp}set pixelSize(e){typeof e=="number"?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof we?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)}get pixelSize(){return this._pixelSize}get quality(){return this._quality}set quality(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()}get blur(){return this._blur}set blur(e){this._blur=e,this._generateKernels()}}var tS=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,O4=`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`;class F4 extends Ie{constructor(e=.5){super(tS,O4),this.threshold=e}get threshold(){return this.uniforms.threshold}set threshold(e){this.uniforms.threshold=e}}var L4=`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`;const rS=class extends Ie{constructor(t){super(tS,L4),this.bloomScale=1,this.brightness=1,this._resolution=ee.FILTER_RESOLUTION,typeof t=="number"&&(t={threshold:t});const e=Object.assign(rS.defaults,t);this.bloomScale=e.bloomScale,this.brightness=e.brightness;const{kernels:r,blur:n,quality:i,pixelSize:s,resolution:o}=e;this._extractFilter=new F4(e.threshold),this._extractFilter.resolution=o,this._blurFilter=r?new pd(r):new pd(n,i),this.pixelSize=s,this.resolution=o}apply(t,e,r,n,i){const s=t.getFilterTexture();this._extractFilter.apply(t,e,s,1,i);const o=t.getFilterTexture();this._blurFilter.apply(t,s,o,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=o,t.applyFilter(this,e,r,n),t.returnFilterTexture(o),t.returnFilterTexture(s)}get resolution(){return this._resolution}set resolution(t){this._resolution=t,this._extractFilter&&(this._extractFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.blur}set blur(t){this._blurFilter.blur=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){this._blurFilter.pixelSize=t}};let B4=rS;B4.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:ee.FILTER_RESOLUTION};class U4 extends Ie{constructor(e=2,r=4,n=ee.FILTER_RESOLUTION,i=5){super();let s,o;typeof e=="number"?(s=e,o=e):e instanceof we?(s=e.x,o=e.y):Array.isArray(e)&&(s=e[0],o=e[1]),this.blurXFilter=new fu(!0,s,r,n,i),this.blurYFilter=new fu(!1,o,r,n,i),this.blurYFilter.blendMode=pe.SCREEN,this.defaultFilter=new Vw}apply(e,r,n,i){const s=e.getFilterTexture();this.defaultFilter.apply(e,r,n,i),this.blurXFilter.apply(e,r,s,1),this.blurYFilter.apply(e,s,n,0),e.returnFilterTexture(s)}get blur(){return this.blurXFilter.blur}set blur(e){this.blurXFilter.blur=this.blurYFilter.blur=e}get blurX(){return this.blurXFilter.blur}set blurX(e){this.blurXFilter.blur=e}get blurY(){return this.blurYFilter.blur}set blurY(e){this.blurYFilter.blur=e}}var z4=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,G4=`uniform float radius;
uniform float strength;
uniform vec2 center;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main()
{
    vec2 coord = vTextureCoord * filterArea.xy;
    coord -= center * dimensions.xy;
    float distance = length(coord);
    if (distance < radius) {
        float percent = distance / radius;
        if (strength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
        }
    }
    coord += center * dimensions.xy;
    coord /= filterArea.xy;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    gl_FragColor = color;
}
`;const nS=class extends Ie{constructor(t){super(z4,G4),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,nS.defaults,t)}apply(t,e,r,n){const{width:i,height:s}=e.filterFrame;this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=s,t.applyFilter(this,e,r,n)}get radius(){return this.uniforms.radius}set radius(t){this.uniforms.radius=t}get strength(){return this.uniforms.strength}set strength(t){this.uniforms.strength=t}get center(){return this.uniforms.center}set center(t){this.uniforms.center=t}};let j4=nS;j4.defaults={center:[.5,.5],radius:100,strength:1};var H4=`const float PI = 3.1415926538;
const float PI_2 = PI*2.;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;
uniform sampler2D uSampler;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform int uNumStops;
uniform float uAlphas[3*MAX_STOPS];
uniform vec3 uColors[MAX_STOPS];
uniform float uOffsets[MAX_STOPS];
uniform int uType;
uniform float uAngle;
uniform float uAlpha;
uniform int uMaxColors;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(vFilterCoord, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    // current/original color
    vec4 currentColor = texture2D(uSampler, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        gl_FragColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, uType, radians(uAngle));

    // check gradient bounds
    float offsetMin = uOffsets[0];
    float offsetMax = 0.0;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == uNumStops-1){ // last index
            offsetMax = uOffsets[i];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        gl_FragColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0) {
        float stepSize = 1./float(uMaxColors);
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uOffsets[i]) {
            from = ColorStop(uOffsets[i], uColors[i], uAlphas[i]);
            to = ColorStop(uOffsets[i+1], uColors[i+1], uAlphas[i+1]);
        }

        if (i == uNumStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    // mix resulting color with current color
    gl_FragColor = gradientColor + currentColor*(1.-gradientColor.a);
}
`,$4=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform vec4 inputSize;
uniform vec4 outputFrame;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
    vFilterCoord = vTextureCoord * inputSize.xy / outputFrame.zw;
}
`,go=go||{};go.stringify=function(){var t={"visit_linear-gradient":function(e){return t.visit_gradient(e)},"visit_repeating-linear-gradient":function(e){return t.visit_gradient(e)},"visit_radial-gradient":function(e){return t.visit_gradient(e)},"visit_repeating-radial-gradient":function(e){return t.visit_gradient(e)},visit_gradient:function(e){var r=t.visit(e.orientation);return r&&(r+=", "),e.type+"("+r+t.visit(e.colorStops)+")"},visit_shape:function(e){var r=e.value,n=t.visit(e.at),i=t.visit(e.style);return i&&(r+=" "+i),n&&(r+=" at "+n),r},"visit_default-radial":function(e){var r="",n=t.visit(e.at);return n&&(r+=n),r},"visit_extent-keyword":function(e){var r=e.value,n=t.visit(e.at);return n&&(r+=" at "+n),r},"visit_position-keyword":function(e){return e.value},visit_position:function(e){return t.visit(e.value.x)+" "+t.visit(e.value.y)},"visit_%":function(e){return e.value+"%"},visit_em:function(e){return e.value+"em"},visit_px:function(e){return e.value+"px"},visit_literal:function(e){return t.visit_color(e.value,e)},visit_hex:function(e){return t.visit_color("#"+e.value,e)},visit_rgb:function(e){return t.visit_color("rgb("+e.value.join(", ")+")",e)},visit_rgba:function(e){return t.visit_color("rgba("+e.value.join(", ")+")",e)},visit_color:function(e,r){var n=e,i=t.visit(r.length);return i&&(n+=" "+i),n},visit_angular:function(e){return e.value+"deg"},visit_directional:function(e){return"to "+e.value},visit_array:function(e){var r="",n=e.length;return e.forEach(function(i,s){r+=t.visit(i),s<n-1&&(r+=", ")}),r},visit:function(e){if(!e)return"";var r="";if(e instanceof Array)return t.visit_array(e,r);if(e.type){var n=t["visit_"+e.type];if(n)return n(e);throw Error("Missing visitor visit_"+e.type)}else throw Error("Invalid node.")}};return function(e){return t.visit(e)}}();var go=go||{};go.parse=function(){var t={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},e="";function r(z){var R=new Error(e+": "+z);throw R.source=e,R}function n(){var z=i();return e.length>0&&r("Invalid input not EOF"),z}function i(){return T(s)}function s(){return o("linear-gradient",t.linearGradient,c)||o("repeating-linear-gradient",t.repeatingLinearGradient,c)||o("radial-gradient",t.radialGradient,p)||o("repeating-radial-gradient",t.repeatingRadialGradient,p)}function o(z,R,L){return u(R,function(k){var Q=L();return Q&&(fe(t.comma)||r("Missing comma before color stops")),{type:z,orientation:Q,colorStops:T(A)}})}function u(z,R){var L=fe(z);if(L){fe(t.startCall)||r("Missing (");var k=R(L);return fe(t.endCall)||r("Missing )"),k}}function c(){return h()||f()}function h(){return U("directional",t.sideOrCorner,1)}function f(){return U("angular",t.angleValue,1)}function p(){var z,R=g(),L;return R&&(z=[],z.push(R),L=e,fe(t.comma)&&(R=g(),R?z.push(R):e=L)),z}function g(){var z=v()||x();if(z)z.at=E();else{var R=S();if(R){z=R;var L=E();L&&(z.at=L)}else{var k=w();k&&(z={type:"default-radial",at:k})}}return z}function v(){var z=U("shape",/^(circle)/i,0);return z&&(z.style=W()||S()),z}function x(){var z=U("shape",/^(ellipse)/i,0);return z&&(z.style=Y()||S()),z}function S(){return U("extent-keyword",t.extentKeywords,1)}function E(){if(U("position",/^at/,0)){var z=w();return z||r("Missing positioning value"),z}}function w(){var z=b();if(z.x||z.y)return{type:"position",value:z}}function b(){return{x:Y(),y:Y()}}function T(z){var R=z(),L=[];if(R)for(L.push(R);fe(t.comma);)R=z(),R?L.push(R):r("One extra comma");return L}function A(){var z=P();return z||r("Expected color definition"),z.length=Y(),z}function P(){return D()||H()||M()||O()}function O(){return U("literal",t.literalColor,0)}function D(){return U("hex",t.hexColor,1)}function M(){return u(t.rgbColor,function(){return{type:"rgb",value:T(X)}})}function H(){return u(t.rgbaColor,function(){return{type:"rgba",value:T(X)}})}function X(){return fe(t.number)[1]}function Y(){return U("%",t.percentageValue,1)||ie()||W()}function ie(){return U("position-keyword",t.positionKeywords,1)}function W(){return U("px",t.pixelValue,1)||U("em",t.emValue,1)}function U(z,R,L){var k=fe(R);if(k)return{type:z,value:k[L]}}function fe(z){var R,L;return L=/^[\n\r\t\s]+/.exec(e),L&&xe(L[0].length),R=z.exec(e),R&&xe(R[0].length),R}function xe(z){e=e.substr(z)}return function(z){return e=z.toString(),n()}}();var V4=go.parse;go.stringify;var Z_={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},q_={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function W4(t){var e,r=[],n=1,i;if(typeof t=="string")if(Z_[t])r=Z_[t].slice(),i="rgb";else if(t==="transparent")n=0,i="rgb",r=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(t)){var s=t.slice(1),o=s.length,u=o<=4;n=1,u?(r=[parseInt(s[0]+s[0],16),parseInt(s[1]+s[1],16),parseInt(s[2]+s[2],16)],o===4&&(n=parseInt(s[3]+s[3],16)/255)):(r=[parseInt(s[0]+s[1],16),parseInt(s[2]+s[3],16),parseInt(s[4]+s[5],16)],o===8&&(n=parseInt(s[6]+s[7],16)/255)),r[0]||(r[0]=0),r[1]||(r[1]=0),r[2]||(r[2]=0),i="rgb"}else if(e=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(t)){var c=e[1],h=c==="rgb",s=c.replace(/a$/,"");i=s;var o=s==="cmyk"?4:s==="gray"?1:3;r=e[2].trim().split(/\s*[,\/]\s*|\s+/).map(function(g,v){if(/%$/.test(g))return v===o?parseFloat(g)/100:s==="rgb"?parseFloat(g)*255/100:parseFloat(g);if(s[v]==="h"){if(/deg$/.test(g))return parseFloat(g);if(q_[g]!==void 0)return q_[g]}return parseFloat(g)}),c===s&&r.push(1),n=h||r[o]===void 0?1:r[o],r=r.slice(0,o)}else t.length>10&&/[0-9](?:\s|\/)/.test(t)&&(r=t.match(/([0-9]+)/g).map(function(f){return parseFloat(f)}),i=t.match(/([a-z])/ig).join("").toLowerCase());else isNaN(t)?Array.isArray(t)||t.length?(r=[t[0],t[1],t[2]],i="rgb",n=t.length===4?t[3]:1):t instanceof Object&&(t.r!=null||t.red!=null||t.R!=null?(i="rgb",r=[t.r||t.red||t.R||0,t.g||t.green||t.G||0,t.b||t.blue||t.B||0]):(i="hsl",r=[t.h||t.hue||t.H||0,t.s||t.saturation||t.S||0,t.l||t.lightness||t.L||t.b||t.brightness]),n=t.a||t.alpha||t.opacity||1,t.opacity!=null&&(n/=100)):(i="rgb",r=[t>>>16,(t&65280)>>>8,t&255]);return{space:i,values:r,alpha:n}}var s0={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]},wm={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(t){var e=t[0]/360,r=t[1]/100,n=t[2]/100,i,s,o,u,c;if(r===0)return c=n*255,[c,c,c];n<.5?s=n*(1+r):s=n+r-n*r,i=2*n-s,u=[0,0,0];for(var h=0;h<3;h++)o=e+1/3*-(h-1),o<0?o++:o>1&&o--,6*o<1?c=i+(s-i)*6*o:2*o<1?c=s:3*o<2?c=i+(s-i)*(2/3-o)*6:c=i,u[h]=c*255;return u}};s0.hsl=function(t){var e=t[0]/255,r=t[1]/255,n=t[2]/255,i=Math.min(e,r,n),s=Math.max(e,r,n),o=s-i,u,c,h;return s===i?u=0:e===s?u=(r-n)/o:r===s?u=2+(n-e)/o:n===s&&(u=4+(e-r)/o),u=Math.min(u*60,360),u<0&&(u+=360),h=(i+s)/2,s===i?c=0:h<=.5?c=o/(s+i):c=o/(2-s-i),[u,c*100,h*100]};function X4(t){Array.isArray(t)&&t.raw&&(t=String.raw(...arguments));var e,r=W4(t);if(!r.space)return[];const n=r.space[0]==="h"?wm.min:s0.min,i=r.space[0]==="h"?wm.max:s0.max;return e=Array(3),e[0]=Math.min(Math.max(r.values[0],n[0]),i[0]),e[1]=Math.min(Math.max(r.values[1],n[1]),i[1]),e[2]=Math.min(Math.max(r.values[2],n[2]),i[2]),r.space[0]==="h"&&(e=wm.rgb(e)),e.push(Math.min(Math.max(r.alpha,0),1)),e}function iS(t){switch(typeof t){case"string":return Y4(t);case"number":return Fd(t);default:return t}}function Y4(t){const e=X4(t);if(!e)throw new Error(`Unable to parse color "${t}" as RGBA.`);return[e[0]/255,e[1]/255,e[2]/255,e[3]]}function K4(t){const e=V4(iM(t));if(e.length===0)throw new Error("Invalid CSS gradient.");if(e.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const r=e[0],n=Q4(r.type),i=Z4(r.colorStops),s=rM(r.orientation);return{type:n,stops:i,angle:s}}function Q4(t){const e={"linear-gradient":0,"radial-gradient":1};if(!(t in e))throw new Error(`Unsupported gradient type "${t}"`);return e[t]}function Z4(t){const e=eM(t),r=[];for(let n=0;n<t.length;n++){const i=q4(t[n]);r.push({offset:e[n],color:i.slice(0,3),alpha:i[3]})}return r}function q4(t){return iS(J4(t))}function J4(t){switch(t.type){case"hex":return`#${t.value}`;case"literal":return t.value;default:return`${t.type}(${t.value.join(",")})`}}function eM(t){const e=[];for(let i=0;i<t.length;i++){const s=t[i];let o=-1;s.type==="literal"&&s.length&&"type"in s.length&&s.length.type==="%"&&"value"in s.length&&(o=parseFloat(s.length.value)/100),e.push(o)}const r=i=>{for(let s=i;s<e.length;s++)if(e[s]!==-1)return{indexDelta:s-i,offset:e[s]};return{indexDelta:e.length-1-i,offset:1}};let n=0;for(let i=0;i<e.length;i++){const s=e[i];if(s!==-1)n=s;else if(i===0)e[i]=0;else if(i+1===e.length)e[i]=1;else{const o=r(i),u=(o.offset-n)/(1+o.indexDelta);for(let c=0;c<=o.indexDelta;c++)e[i+c]=n+(c+1)*u;i+=o.indexDelta,n=e[i]}}return e.map(tM)}function tM(t){return t.toString().length>6?parseFloat(t.toString().substring(0,6)):t}function rM(t){if(typeof t>"u")return 0;if("type"in t&&"value"in t)switch(t.type){case"angular":return parseFloat(t.value);case"directional":return nM(t.value)}return 0}function nM(t){const e={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(t in e))throw new Error(`Unsupported directional value "${t}"`);return e[t]}function iM(t){let e=t.replace(/\s{2,}/gu," ");return e=e.replace(/;/g,""),e=e.replace(/ ,/g,","),e=e.replace(/\( /g,"("),e=e.replace(/ \)/g,")"),e.trim()}var sM=Object.defineProperty,oM=Object.defineProperties,aM=Object.getOwnPropertyDescriptors,J_=Object.getOwnPropertySymbols,lM=Object.prototype.hasOwnProperty,uM=Object.prototype.propertyIsEnumerable,eT=(t,e,r)=>e in t?sM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Sm=(t,e)=>{for(var r in e||(e={}))lM.call(e,r)&&eT(t,r,e[r]);if(J_)for(var r of J_(e))uM.call(e,r)&&eT(t,r,e[r]);return t},cM=(t,e)=>oM(t,aM(e));const tT=90;function hM(t){return[...t].sort((e,r)=>e.offset-r.offset)}const xy=class extends Ie{constructor(t){t&&"css"in t&&(t=cM(Sm({},K4(t.css||"")),{alpha:t.alpha,maxColors:t.maxColors}));const e=Sm(Sm({},xy.defaults),t);if(!e.stops||e.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");super($4,H4),this._stops=[],this.autoFit=!1,Object.assign(this,e)}get stops(){return this._stops}set stops(t){const e=hM(t),r=new Float32Array(e.length*3),n=0,i=1,s=2;for(let o=0;o<e.length;o++){const u=iS(e[o].color),c=o*3;r[c+n]=u[n],r[c+i]=u[i],r[c+s]=u[s]}this.uniforms.uColors=r,this.uniforms.uOffsets=e.map(o=>o.offset),this.uniforms.uAlphas=e.map(o=>o.alpha),this.uniforms.uNumStops=e.length,this._stops=e}set type(t){this.uniforms.uType=t}get type(){return this.uniforms.uType}set angle(t){this.uniforms.uAngle=t-tT}get angle(){return this.uniforms.uAngle+tT}set alpha(t){this.uniforms.uAlpha=t}get alpha(){return this.uniforms.uAlpha}set maxColors(t){this.uniforms.uMaxColors=t}get maxColors(){return this.uniforms.uMaxColors}};let sh=xy;sh.LINEAR=0,sh.RADIAL=1,sh.CONIC=2,sh.defaults={type:xy.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0};var dM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,fM=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));
    
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;const sS=class extends Ie{constructor(t){super(dM,fM),this.time=0,this.seed=0,this.uniforms.dimensions=new Float32Array(2),Object.assign(this,sS.defaults,t)}apply(t,e,r,n){const{width:i,height:s}=e.filterFrame;this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=s,this.uniforms.seed=this.seed,this.uniforms.time=this.time,t.applyFilter(this,e,r,n)}set curvature(t){this.uniforms.curvature=t}get curvature(){return this.uniforms.curvature}set lineWidth(t){this.uniforms.lineWidth=t}get lineWidth(){return this.uniforms.lineWidth}set lineContrast(t){this.uniforms.lineContrast=t}get lineContrast(){return this.uniforms.lineContrast}set verticalLine(t){this.uniforms.verticalLine=t}get verticalLine(){return this.uniforms.verticalLine}set noise(t){this.uniforms.noise=t}get noise(){return this.uniforms.noise}set noiseSize(t){this.uniforms.noiseSize=t}get noiseSize(){return this.uniforms.noiseSize}set vignetting(t){this.uniforms.vignetting=t}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(t){this.uniforms.vignettingAlpha=t}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(t){this.uniforms.vignettingBlur=t}get vignettingBlur(){return this.uniforms.vignettingBlur}};let pM=sS;pM.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0};var mM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,gM=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float alpha;
uniform vec3 color;

uniform vec2 shift;
uniform vec4 inputSize;

void main(void){
    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);

    // Premultiply alpha
    sample.rgb = color.rgb * sample.a;

    // alpha user alpha
    sample *= alpha;

    gl_FragColor = sample;
}`,yM=Object.defineProperty,rT=Object.getOwnPropertySymbols,vM=Object.prototype.hasOwnProperty,xM=Object.prototype.propertyIsEnumerable,nT=(t,e,r)=>e in t?yM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,iT=(t,e)=>{for(var r in e||(e={}))vM.call(e,r)&&nT(t,r,e[r]);if(rT)for(var r of rT(e))xM.call(e,r)&&nT(t,r,e[r]);return t};const o0=class extends Ie{constructor(t){super(),this.angle=45,this._distance=5,this._resolution=ee.FILTER_RESOLUTION;const e=t?iT(iT({},o0.defaults),t):o0.defaults,{kernels:r,blur:n,quality:i,pixelSize:s,resolution:o}=e;this._offset=new Jn(this._updatePadding,this),this._tintFilter=new Ie(mM,gM),this._tintFilter.uniforms.color=new Float32Array(4),this._tintFilter.uniforms.shift=this._offset,this._tintFilter.resolution=o,this._blurFilter=r?new pd(r):new pd(n,i),this.pixelSize=s,this.resolution=o;const{shadowOnly:u,rotation:c,distance:h,offset:f,alpha:p,color:g}=e;this.shadowOnly=u,c!==void 0&&h!==void 0?(this.rotation=c,this.distance=h):this.offset=f,this.alpha=p,this.color=g}apply(t,e,r,n){const i=t.getFilterTexture();this._tintFilter.apply(t,e,i,1),this._blurFilter.apply(t,i,r,n),this.shadowOnly!==!0&&t.applyFilter(this,e,r,0),t.returnFilterTexture(i)}_updatePadding(){const t=Math.max(Math.abs(this._offset.x),Math.abs(this._offset.y));this.padding=t+this.blur*2}_updateShift(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))}set offset(t){this._offset.copyFrom(t),this._updatePadding()}get offset(){return this._offset}get resolution(){return this._resolution}set resolution(t){this._resolution=t,this._tintFilter&&(this._tintFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)}get distance(){return this._distance}set distance(t){Ae("5.3.0","DropShadowFilter distance is deprecated, use offset"),this._distance=t,this._updatePadding(),this._updateShift()}get rotation(){return this.angle/lu}set rotation(t){Ae("5.3.0","DropShadowFilter rotation is deprecated, use offset"),this.angle=t*lu,this._updateShift()}get alpha(){return this._tintFilter.uniforms.alpha}set alpha(t){this._tintFilter.uniforms.alpha=t}get color(){return Ld(this._tintFilter.uniforms.color)}set color(t){Fd(t,this._tintFilter.uniforms.color)}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.blur}set blur(t){this._blurFilter.blur=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){this._blurFilter.pixelSize=t}};let _M=o0;_M.defaults={offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:ee.FILTER_RESOLUTION};var TM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,bM=`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`;const a0=class extends Ie{constructor(t){super(TM,bM),this.offset=100,this.fillMode=a0.TRANSPARENT,this.average=!1,this.seed=0,this.minSize=8,this.sampleSize=512,this._slices=0,this._offsets=new Float32Array(1),this._sizes=new Float32Array(1),this._direction=-1,this.uniforms.dimensions=new Float32Array(2),this._canvas=document.createElement("canvas"),this._canvas.width=4,this._canvas.height=this.sampleSize,this.texture=te.from(this._canvas,{scaleMode:qn.NEAREST}),Object.assign(this,a0.defaults,t)}apply(t,e,r,n){const{width:i,height:s}=e.filterFrame;this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=s,this.uniforms.aspect=s/i,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,t.applyFilter(this,e,r,n)}_randomizeSizes(){const t=this._sizes,e=this._slices-1,r=this.sampleSize,n=Math.min(this.minSize/r,.9/this._slices);if(this.average){const i=this._slices;let s=1;for(let o=0;o<e;o++){const u=s/(i-o),c=Math.max(u*(1-Math.random()*.6),n);t[o]=c,s-=c}t[e]=s}else{let i=1;const s=Math.sqrt(1/this._slices);for(let o=0;o<e;o++){const u=Math.max(s*i*Math.random(),n);t[o]=u,i-=u}t[e]=i}this.shuffle()}shuffle(){const t=this._sizes,e=this._slices-1;for(let r=e;r>0;r--){const n=Math.random()*r>>0,i=t[r];t[r]=t[n],t[n]=i}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,e=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);let n,i=0;for(let s=0;s<this._slices;s++){n=Math.floor(this._offsets[s]*256);const o=this._sizes[s]*t,u=n>0?n:0,c=n<0?-n:0;r.fillStyle=`rgba(${u}, ${c}, 0, 1)`,r.fillRect(0,i>>0,t,o+1>>0),i+=o}e.baseTexture.update(),this.uniforms.displacementMap=e}set sizes(t){const e=Math.min(this._slices,t.length);for(let r=0;r<e;r++)this._sizes[r]=t[r]}get sizes(){return this._sizes}set offsets(t){const e=Math.min(this._slices,t.length);for(let r=0;r<e;r++)this._offsets[r]=t[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this.uniforms.slices=t,this._sizes=this.uniforms.slicesWidth=new Float32Array(t),this._offsets=this.uniforms.slicesOffset=new Float32Array(t),this.refresh())}get direction(){return this._direction}set direction(t){if(this._direction===t)return;this._direction=t;const e=t*lu;this.uniforms.sinDir=Math.sin(e),this.uniforms.cosDir=Math.cos(e)}get red(){return this.uniforms.red}set red(t){this.uniforms.red=t}get green(){return this.uniforms.green}set green(t){this.uniforms.green=t}get blue(){return this.uniforms.blue}set blue(t){this.uniforms.blue=t}destroy(){var t;(t=this.texture)==null||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};let Ti=a0;Ti.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},Ti.TRANSPARENT=0,Ti.ORIGINAL=1,Ti.LOOP=2,Ti.CLAMP=3,Ti.MIRROR=4;var wM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,SM=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;
uniform float alpha;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction * 
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }
    
    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    if (knockout) {
      float resultAlpha = (outerGlowAlpha + innerGlowAlpha) * alpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      vec4 outerGlowColor = outerGlowStrength * glowColor.rgba * alpha;
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`;const oS=class extends Ie{constructor(t){const e=Object.assign({},oS.defaults,t),{outerStrength:r,innerStrength:n,color:i,knockout:s,quality:o,alpha:u}=e,c=Math.round(e.distance);super(wM,SM.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/o/c).toFixed(7)}`).replace(/__DIST__/gi,`${c.toFixed(0)}.0`)),this.uniforms.glowColor=new Float32Array([0,0,0,1]),this.uniforms.alpha=1,Object.assign(this,{color:i,outerStrength:r,innerStrength:n,padding:c,knockout:s,alpha:u})}get color(){return Ld(this.uniforms.glowColor)}set color(t){Fd(t,this.uniforms.glowColor)}get outerStrength(){return this.uniforms.outerStrength}set outerStrength(t){this.uniforms.outerStrength=t}get innerStrength(){return this.uniforms.innerStrength}set innerStrength(t){this.uniforms.innerStrength=t}get knockout(){return this.uniforms.knockout}set knockout(t){this.uniforms.knockout=t}get alpha(){return this.uniforms.alpha}set alpha(t){this.uniforms.alpha=t}};let EM=oS;EM.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1,alpha:1};var CM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,AM=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,PM=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`;const aS=class extends Ie{constructor(t){super(CM,PM.replace("${perlin}",AM)),this.parallel=!0,this.time=0,this._angle=0,this.uniforms.dimensions=new Float32Array(2);const e=Object.assign(aS.defaults,t);this._angleLight=new we,this.angle=e.angle,this.gain=e.gain,this.lacunarity=e.lacunarity,this.alpha=e.alpha,this.parallel=e.parallel,this.center=e.center,this.time=e.time}apply(t,e,r,n){const{width:i,height:s}=e.filterFrame;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=s,this.uniforms.aspect=s/i,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,t.applyFilter(this,e,r,n)}get angle(){return this._angle}set angle(t){this._angle=t;const e=t*lu;this._angleLight.x=Math.cos(e),this._angleLight.y=Math.sin(e)}get gain(){return this.uniforms.gain}set gain(t){this.uniforms.gain=t}get lacunarity(){return this.uniforms.lacunarity}set lacunarity(t){this.uniforms.lacunarity=t}get alpha(){return this.uniforms.alpha}set alpha(t){this.uniforms.alpha=t}};let lS=aS;lS.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1};var IM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,RM=`precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float uHue;
uniform float uAlpha;
uniform bool uColorize;
uniform float uSaturation;
uniform float uLightness;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    vec4 result = color;

    // colorize
    if (uColorize) {
        result.rgb = vec3(getWeightedAverage(result.rgb), 0., 0.);
    }

    // hue
    result.rgb = hueShift(result.rgb, uHue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (result.r + result.g + result.b) / 3.0;

    if (uSaturation > 0.) {
        result.rgb += (average - result.rgb) * (1. - 1. / (1.001 - uSaturation));
    } else {
        result.rgb -= (average - result.rgb) * uSaturation;
    }

    // lightness
    result.rgb = mix(result.rgb, vec3(ceil(uLightness)) * color.a, abs(uLightness));

    // alpha
    gl_FragColor = mix(color, result, uAlpha);
}
`;const uS=class extends Ie{constructor(t){super(IM,RM),this._hue=0;const e=Object.assign({},uS.defaults,t);Object.assign(this,e)}get hue(){return this._hue}set hue(t){this._hue=t,this.uniforms.uHue=this._hue*(Math.PI/180)}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get colorize(){return this.uniforms.uColorize}set colorize(t){this.uniforms.uColorize=t}get lightness(){return this.uniforms.uLightness}set lightness(t){this.uniforms.uLightness=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}};let kM=uS;kM.defaults={hue:0,saturation:0,lightness:0,colorize:!1,alpha:1};var MM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,DM=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`;const cS=class extends Ie{constructor(t,e=0){super(MM,DM),this.seed=0,this.uniforms.dimensions=new Float32Array(2),typeof t=="number"?(this.seed=t,t=void 0):this.seed=e,Object.assign(this,cS.defaults,t)}apply(t,e,r,n){var i,s;this.uniforms.dimensions[0]=(i=e.filterFrame)==null?void 0:i.width,this.uniforms.dimensions[1]=(s=e.filterFrame)==null?void 0:s.height,this.uniforms.seed=this.seed,t.applyFilter(this,e,r,n)}set sepia(t){this.uniforms.sepia=t}get sepia(){return this.uniforms.sepia}set noise(t){this.uniforms.noise=t}get noise(){return this.uniforms.noise}set noiseSize(t){this.uniforms.noiseSize=t}get noiseSize(){return this.uniforms.noiseSize}set scratch(t){this.uniforms.scratch=t}get scratch(){return this.uniforms.scratch}set scratchDensity(t){this.uniforms.scratchDensity=t}get scratchDensity(){return this.uniforms.scratchDensity}set scratchWidth(t){this.uniforms.scratchWidth=t}get scratchWidth(){return this.uniforms.scratchWidth}set vignetting(t){this.uniforms.vignetting=t}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(t){this.uniforms.vignettingAlpha=t}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(t){this.uniforms.vignettingBlur=t}get vignettingBlur(){return this.uniforms.vignettingBlur}};let NM=cS;NM.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3};var OM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,FM=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterClamp;

uniform float uAlpha;
uniform vec2 uThickness;
uniform vec4 uColor;
uniform bool uKnockout;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${angleStep};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture2D(uSampler, clamp(displacedPos, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture2D(uSampler, vTextureCoord);
    vec4 contentColor = sourceColor * float(!uKnockout);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    gl_FragColor = contentColor + outlineColor;
}
`;const Eh=class extends Ie{constructor(t=1,e=0,r=.1,n=1,i=!1){super(OM,FM.replace(/\$\{angleStep\}/,Eh.getAngleStep(r))),this._thickness=1,this._alpha=1,this._knockout=!1,this.uniforms.uThickness=new Float32Array([0,0]),this.uniforms.uColor=new Float32Array([0,0,0,1]),this.uniforms.uAlpha=n,this.uniforms.uKnockout=i,Object.assign(this,{thickness:t,color:e,quality:r,alpha:n,knockout:i})}static getAngleStep(t){const e=Math.max(t*Eh.MAX_SAMPLES,Eh.MIN_SAMPLES);return(Math.PI*2/e).toFixed(7)}apply(t,e,r,n){this.uniforms.uThickness[0]=this._thickness/e._frame.width,this.uniforms.uThickness[1]=this._thickness/e._frame.height,this.uniforms.uAlpha=this._alpha,this.uniforms.uKnockout=this._knockout,t.applyFilter(this,e,r,n)}get alpha(){return this._alpha}set alpha(t){this._alpha=t}get color(){return Ld(this.uniforms.uColor)}set color(t){Fd(t,this.uniforms.uColor)}get knockout(){return this._knockout}set knockout(t){this._knockout=t}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this.padding=t}};let sT=Eh;sT.MIN_SAMPLES=1,sT.MAX_SAMPLES=100;var LM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,BM=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`;const hS=class extends Ie{constructor(t){super(LM,BM),this.time=0,this.uniforms.amplitude=new Float32Array(2),this.uniforms.waveLength=new Float32Array(2),this.uniforms.alpha=new Float32Array(2),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,hS.defaults,t)}apply(t,e,r,n){var i,s;this.uniforms.dimensions[0]=(i=e.filterFrame)==null?void 0:i.width,this.uniforms.dimensions[1]=(s=e.filterFrame)==null?void 0:s.height,this.uniforms.time=this.time,t.applyFilter(this,e,r,n)}set mirror(t){this.uniforms.mirror=t}get mirror(){return this.uniforms.mirror}set boundary(t){this.uniforms.boundary=t}get boundary(){return this.uniforms.boundary}set amplitude(t){this.uniforms.amplitude[0]=t[0],this.uniforms.amplitude[1]=t[1]}get amplitude(){return this.uniforms.amplitude}set waveLength(t){this.uniforms.waveLength[0]=t[0],this.uniforms.waveLength[1]=t[1]}get waveLength(){return this.uniforms.waveLength}set alpha(t){this.uniforms.alpha[0]=t[0],this.uniforms.alpha[1]=t[1]}get alpha(){return this.uniforms.alpha}};let UM=hS;UM.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0};var zM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,GM=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

void main(void)
{
   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;
   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;
   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;
   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;
}
`;class l0 extends Ie{constructor(e=[-10,0],r=[0,10],n=[0,0]){super(zM,GM),this.red=e,this.green=r,this.blue=n}get red(){return this.uniforms.red}set red(e){this.uniforms.red=e}get green(){return this.uniforms.green}set green(e){this.uniforms.green=e}get blue(){return this.uniforms.blue}set blue(e){this.uniforms.blue=e}}var jM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,HM=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`;const dS=class extends Ie{constructor(t=[0,0],e,r=0){super(jM,HM),this.center=t,Object.assign(this,dS.defaults,e),this.time=r}apply(t,e,r,n){this.uniforms.time=this.time,t.applyFilter(this,e,r,n)}get center(){return this.uniforms.center}set center(t){this.uniforms.center=t}get amplitude(){return this.uniforms.amplitude}set amplitude(t){this.uniforms.amplitude=t}get wavelength(){return this.uniforms.wavelength}set wavelength(t){this.uniforms.wavelength=t}get brightness(){return this.uniforms.brightness}set brightness(t){this.uniforms.brightness=t}get speed(){return this.uniforms.speed}set speed(t){this.uniforms.speed=t}get radius(){return this.uniforms.radius}set radius(t){this.uniforms.radius=t}};let $M=dS;$M.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1};var VM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,WM=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float blur;
uniform float gradientBlur;
uniform vec2 start;
uniform vec2 end;
uniform vec2 delta;
uniform vec2 texSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`;class fS extends Ie{constructor(e){var r,n;super(VM,WM),this.uniforms.blur=e.blur,this.uniforms.gradientBlur=e.gradientBlur,this.uniforms.start=(r=e.start)!=null?r:new we(0,window.innerHeight/2),this.uniforms.end=(n=e.end)!=null?n:new we(600,window.innerHeight/2),this.uniforms.delta=new we(30,30),this.uniforms.texSize=new we(window.innerWidth,window.innerHeight),this.updateDelta()}updateDelta(){this.uniforms.delta.x=0,this.uniforms.delta.y=0}get blur(){return this.uniforms.blur}set blur(e){this.uniforms.blur=e}get gradientBlur(){return this.uniforms.gradientBlur}set gradientBlur(e){this.uniforms.gradientBlur=e}get start(){return this.uniforms.start}set start(e){this.uniforms.start=e,this.updateDelta()}get end(){return this.uniforms.end}set end(e){this.uniforms.end=e,this.updateDelta()}}class XM extends fS{updateDelta(){const e=this.uniforms.end.x-this.uniforms.start.x,r=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+r*r);this.uniforms.delta.x=e/n,this.uniforms.delta.y=r/n}}class YM extends fS{updateDelta(){const e=this.uniforms.end.x-this.uniforms.start.x,r=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+r*r);this.uniforms.delta.x=-r/n,this.uniforms.delta.y=e/n}}const pS=class extends Ie{constructor(t,e,r,n){super(),typeof t=="number"&&(Ae("5.3.0","TiltShiftFilter constructor arguments is deprecated, use options."),t={blur:t,gradientBlur:e,start:r,end:n}),t=Object.assign({},pS.defaults,t),this.tiltShiftXFilter=new XM(t),this.tiltShiftYFilter=new YM(t)}apply(t,e,r,n){const i=t.getFilterTexture();this.tiltShiftXFilter.apply(t,e,i,1),this.tiltShiftYFilter.apply(t,i,r,n),t.returnFilterTexture(i)}get blur(){return this.tiltShiftXFilter.blur}set blur(t){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=t}get gradientBlur(){return this.tiltShiftXFilter.gradientBlur}set gradientBlur(t){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=t}get start(){return this.tiltShiftXFilter.start}set start(t){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=t}get end(){return this.tiltShiftXFilter.end}set end(t){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=t}};let KM=pS;KM.defaults={blur:100,gradientBlur:600,start:void 0,end:void 0};var QM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ZM=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= offset;

    float dist = length(coord);

    if (dist < radius)
    {
        float ratioDist = (radius - dist) / radius;
        float angleMod = ratioDist * ratioDist * angle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += offset;

    return coord;
}

void main(void)
{

    vec2 coord = mapCoord(vTextureCoord);

    coord = twist(coord);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord );

}
`;const mS=class extends Ie{constructor(t){super(QM,ZM),Object.assign(this,mS.defaults,t)}get offset(){return this.uniforms.offset}set offset(t){this.uniforms.offset=t}get radius(){return this.uniforms.radius}set radius(t){this.uniforms.radius=t}get angle(){return this.uniforms.angle}set angle(t){this.uniforms.angle=t}};let qM=mS;qM.defaults={radius:200,angle:4,padding:20,offset:new we};var JM=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,eD=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uCenter;
uniform float uStrength;
uniform float uInnerRadius;
uniform float uRadius;

const float MAX_KERNEL_SIZE = \${maxKernelSize};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {

    float minGradient = uInnerRadius * 0.3;
    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;

    float gradient = uRadius * 0.3;
    float radius = (uRadius - gradient * 0.5) / filterArea.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / filterArea.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture2D(uSampler, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,oT=Object.getOwnPropertySymbols,tD=Object.prototype.hasOwnProperty,rD=Object.prototype.propertyIsEnumerable,nD=(t,e)=>{var r={};for(var n in t)tD.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&oT)for(var n of oT(t))e.indexOf(n)<0&&rD.call(t,n)&&(r[n]=t[n]);return r};const gS=class extends Ie{constructor(t){const e=Object.assign(gS.defaults,t),{maxKernelSize:r}=e,n=nD(e,["maxKernelSize"]);super(JM,eD.replace("${maxKernelSize}",r.toFixed(1))),Object.assign(this,n)}get center(){return this.uniforms.uCenter}set center(t){this.uniforms.uCenter=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get innerRadius(){return this.uniforms.uInnerRadius}set innerRadius(t){this.uniforms.uInnerRadius=t}get radius(){return this.uniforms.uRadius}set radius(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t}};let iD=gS;iD.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32};const sD="/assets/vignette.0166eb2d.png",oD="/assets/dark.4741d0a7.jpg",aD="/assets/light.e7e9318d.jpg",lD="/assets/operation_end.2b448b1e.jpg",uD="/assets/operation_error.61f653dc.jpg",aT="/assets/operation_start.b77b71a5.jpg",cD="/assets/underthrone_turmoil.c6edd0db.jpg",hD="/assets/overthrone_turmoil.cecaffb4.jpg";function dD(t){var e=aT;switch(t){case"dark":e=oD;break;case"light":e=aD;break;case"operation_end":e=lD;break;case"operation_error":e=uD;break;case"operation_start":e=aT;break;case"underthrone_turmoil":e=cD;break;case"overthrone_turmoil":e=hD;break}return e}/*!
 * @pixi/layers - v2.0.1
 * Compiled Wed, 21 Dec 2022 21:17:52 UTC
 *
 * @pixi/layers is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * 
 * Copyright 2017-2021, Ivan Popelyshev, All Rights Reserved
 */function fD(t){if(!(this._activeParentLayer&&this._activeParentLayer!==t._activeLayer)){if(!this.visible){this.displayOrder=0;return}this.displayOrder=t.incDisplayOrder(),!(this.worldAlpha<=0||!this.renderable)&&(t._activeLayer=null,this.containerRenderWebGL(t),t._activeLayer=this._activeParentLayer)}}function pD(){if(Ke.prototype.displayOrder!==void 0)return;Object.assign(Ke.prototype,{parentLayer:null,_activeParentLayer:null,parentGroup:null,zOrder:0,zIndex:0,updateOrder:0,displayOrder:0,layerableChildren:!0,isLayer:!1});const t=je.prototype;t.containerRenderWebGL=t.render,t.render=fD}/*!
 * @pixi/layers - v2.0.1
 * Compiled Wed, 21 Dec 2022 21:17:52 UTC
 *
 * @pixi/layers is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * 
 * Copyright 2017-2021, Ivan Popelyshev, All Rights Reserved
 */function mD(t){return function(r,n,i,s,o){(!n||!n.renderTexture&&!n.baseTexture)&&(this._lastDisplayOrder=0),this._activeLayer=null,r.isStage&&r.updateStage(),t.call(this,r,n,i,s,o)}}function gD(t){const e=t.prototype;e._oldRender||(Object.assign(e,{_lastDisplayOrder:0,_activeLayer:null,incDisplayOrder(){return++this._lastDisplayOrder},_oldRender:As.prototype.render}),e._oldRender=e.render,e.render=mD(e.render))}/*!
 * @pixi/layers - v2.0.1
 * Compiled Wed, 21 Dec 2022 21:17:52 UTC
 *
 * @pixi/layers is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * 
 * Copyright 2017-2021, Ivan Popelyshev, All Rights Reserved
 */const Ys=class extends Ma{constructor(t=0,e=!1){super(),this.useRenderTexture=!1,this.useDoubleBuffer=!1,this.sortPriority=0,this.clearColor=new Float32Array([0,0,0,0]),this.canDrawWithoutLayer=!1,this.canDrawInParentStage=!0,this._activeLayer=null,this._activeStage=null,this._activeChildren=[],this._lastUpdateId=-1,this.zIndex=t||0,this.enableSort=!!e,typeof e=="function"&&this.on("sort",e)}doSort(t,e){if(this.listeners("sort",!0))for(let r=0;r<e.length;r++)this.emit("sort",e[r]);e.sort(Ys.compareZIndex)}static compareZIndex(t,e){return t.zOrder<e.zOrder?-1:t.zOrder>e.zOrder?1:t.updateOrder-e.updateOrder}clear(){this._activeLayer=null,this._activeStage=null,this._activeChildren.length=0}_resolveChildDisplayObject(t,e){this.check(t),e._activeParentLayer=this._activeLayer,this._activeLayer?this._activeLayer._activeChildren.push(e):this._activeChildren.push(e)}_resolveLayer(t,e){this.check(t),this._activeLayer&&Ys.conflict(),this._activeLayer=e,this._activeStage=t}check(t){if(this._lastUpdateId<Ys._layerUpdateId)this._lastUpdateId=Ys._layerUpdateId,this.clear(),this._activeStage=t;else if(this.canDrawInParentStage){let e=this._activeStage;for(;e&&e!==t;)e=e._activeParentStage;this._activeStage=e,e===null&&this.clear()}}static conflict(){Ys._lastLayerConflict+5e3<Date.now()&&(Ys._lastLayerConflict=Date.now(),console.log("@pixi/layers found two layers with the same group in one stage - that's not healthy. Please place a breakpoint here and debug it"))}};let ef=Ys;ef._layerUpdateId=0;ef._lastLayerConflict=0;/*!
 * @pixi/layers - v2.0.1
 * Compiled Wed, 21 Dec 2022 21:17:52 UTC
 *
 * @pixi/layers is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * 
 * Copyright 2017-2021, Ivan Popelyshev, All Rights Reserved
 */class lT{constructor(e){this.layer=e,this.renderTexture=null,this.doubleBuffer=null,this.currentBufferIndex=0,this._tempRenderTarget=null,this._tempRenderTargetSource=new Ee,this._tempRenderTargetDestination=new Ee}init(e){const r=e?e.screen.width:100,n=e?e.screen.height:100,i=e?e.resolution:ee.RESOLUTION;this.renderTexture=ii.create({width:r,height:n,resolution:i}),this.layer.group.useDoubleBuffer&&(this.doubleBuffer=[ii.create({width:r,height:n,resolution:i}),ii.create({width:r,height:n,resolution:i})])}getRenderTexture(){return this.renderTexture||this.init(),this.renderTexture}pushTexture(e){const r=e.screen;this.renderTexture||this.init(e);const n=this.renderTexture,i=this.layer.group,s=this.doubleBuffer;if((n.width!==r.width||n.height!==r.height||n.baseTexture.resolution!==e.resolution)&&(n.baseTexture.resolution=e.resolution,n.resize(r.width,r.height),s&&(s[0].baseTexture.resolution=e.resolution,s[0].resize(r.width,r.height),s[1].baseTexture.resolution=e.resolution,s[1].resize(r.width,r.height))),s&&(s[0].framebuffer.multisample=n.framebuffer.multisample,s[1].framebuffer.multisample=n.framebuffer.multisample),this._tempRenderTarget=e.renderTexture.current,this._tempRenderTargetSource.copyFrom(e.renderTexture.sourceFrame),this._tempRenderTargetDestination.copyFrom(e.renderTexture.destinationFrame),e.batch.flush(),i.useDoubleBuffer){let u=s[this.currentBufferIndex];u.baseTexture._glTextures[e.CONTEXT_UID]||(e.renderTexture.bind(u,void 0,void 0),e.texture.bind(u),i.clearColor&&e.renderTexture.clear(i.clearColor)),e.texture.unbind(n.baseTexture),n.baseTexture._glTextures=u.baseTexture._glTextures,n.baseTexture.framebuffer=u.baseTexture.framebuffer,u=s[1-this.currentBufferIndex],e.renderTexture.bind(u,void 0,void 0)}else e.renderTexture.bind(n,void 0,void 0);i.clearColor&&e.renderTexture.clear(i.clearColor);const o=e.filter.defaultFilterStack;o.length>1&&(o[o.length-1].renderTexture=e.renderTexture.current)}popTexture(e){e.batch.flush(),e.framebuffer.blit();const r=e.filter.defaultFilterStack;r.length>1&&(r[r.length-1].renderTexture=this._tempRenderTarget),e.renderTexture.bind(this._tempRenderTarget,this._tempRenderTargetSource,this._tempRenderTargetDestination),this._tempRenderTarget=null;const n=this.renderTexture,i=this.layer.group,s=this.doubleBuffer;if(i.useDoubleBuffer){e.texture.unbind(n.baseTexture),this.currentBufferIndex=1-this.currentBufferIndex;const o=s[this.currentBufferIndex];n.baseTexture._glTextures=o.baseTexture._glTextures,n.baseTexture.framebuffer=o.baseTexture.framebuffer}}destroy(){this.renderTexture&&(this.renderTexture.destroy(),this.doubleBuffer&&(this.doubleBuffer[0].destroy(!0),this.doubleBuffer[1].destroy(!0)))}}class md extends je{constructor(e=null){super(),this.isLayer=!0,this.group=null,this._activeChildren=[],this._tempChildren=null,this._activeStageParent=null,this._sortedChildren=[],this._tempLayerParent=null,this.insertChildrenBeforeActive=!0,this.insertChildrenAfterActive=!0,e?(this.group=e,this.zIndex=e.zIndex):this.group=new ef(0,!1),this._tempChildren=this.children}get useRenderTexture(){return this.group.useRenderTexture}set useRenderTexture(e){this.group.useRenderTexture=e}get useDoubleBuffer(){return this.group.useDoubleBuffer}set useDoubleBuffer(e){this.group.useDoubleBuffer=e}get clearColor(){return this.group.clearColor}set clearColor(e){this.group.clearColor=e}get sortPriority(){return this.group.sortPriority}set sortPriority(e){this.group.sortPriority=e}getRenderTexture(){return this.textureCache||(this.textureCache=new lT(this)),this.textureCache.getRenderTexture()}doSort(){this.group.doSort(this,this._sortedChildren)}destroy(e){this.textureCache&&(this.textureCache.destroy(),this.textureCache=null),super.destroy(e)}render(e){!this.prerender(e)||(this.group.useRenderTexture&&(this.textureCache||(this.textureCache=new lT(this)),this.textureCache.pushTexture(e)),this.containerRenderWebGL(e),this.postrender(e),this.group.useRenderTexture&&this.textureCache.popTexture(e))}layerRenderCanvas(e){this.prerender(e)&&(this.containerRenderCanvas(e),this.postrender(e))}_onBeginLayerSubtreeTraversal(e){const r=this._activeChildren;this._activeStageParent=e,this.group._resolveLayer(e,this);const n=this.group._activeChildren;r.length=0;for(let i=0;i<n.length;i++)n[i]._activeParentLayer=this,r.push(n[i]);n.length=0}_onEndLayerSubtreeTraversal(){const e=this.children,r=this._activeChildren,n=this._sortedChildren;for(let i=0;i<r.length;i++)this.emit("display",r[i]);if(n.length=0,this.insertChildrenBeforeActive)for(let i=0;i<e.length;i++)n.push(e[i]);for(let i=0;i<r.length;i++)n.push(r[i]);if(!this.insertChildrenBeforeActive&&this.insertChildrenAfterActive)for(let i=0;i<e.length;i++)n.push(e[i]);this.group.enableSort&&this.doSort()}prerender(e){return this._activeParentLayer&&this._activeParentLayer!=e._activeLayer?!1:this.visible?(this.displayOrder=e.incDisplayOrder(),this.worldAlpha<=0||!this.renderable?!1:(this.children!==this._sortedChildren&&this._tempChildren!==this.children&&(this._tempChildren=this.children),this._boundsID++,this.children=this._sortedChildren,this._tempLayerParent=e._activeLayer,e._activeLayer=this,!0)):(this.displayOrder=0,!1)}postrender(e){this.children=this._tempChildren,e._activeLayer=this._tempLayerParent,this._tempLayerParent=null}}md.prototype.renderCanvas=md.prototype.layerRenderCanvas;/*!
 * @pixi/layers - v2.0.1
 * Compiled Wed, 21 Dec 2022 21:17:52 UTC
 *
 * @pixi/layers is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * 
 * Copyright 2017-2021, Ivan Popelyshev, All Rights Reserved
 */const u0=class extends md{constructor(){super(...arguments),this.isStage=!0,this._tempGroups=[],this._activeLayers=[],this._activeParentStage=null}clear(){this._activeLayers.length=0,this._tempGroups.length=0}destroy(t){this.clear(),super.destroy(t)}updateStage(){this._activeParentStage=null,ef._layerUpdateId++,this._updateStageInner()}updateAsChildStage(t){this._activeParentStage=t,u0._updateOrderCounter=0,this._updateStageInner()}_updateStageInner(){this.clear(),this._addRecursive(this);const t=this._activeLayers;for(let e=0;e<t.length;e++){const r=t[e];if(r.group.sortPriority){r._onEndLayerSubtreeTraversal();const n=r._sortedChildren;for(let i=0;i<n.length;i++)this._addRecursiveChildren(n[i])}}for(let e=0;e<t.length;e++){const r=t[e];r.group.sortPriority||r._onEndLayerSubtreeTraversal()}}_addRecursive(t){if(!t.visible)return;if(t.isLayer){const i=t;this._activeLayers.push(i),i._onBeginLayerSubtreeTraversal(this)}if(t!==this&&t.isStage){t.updateAsChildStage(this);return}t._activeParentLayer=null;let e=t.parentGroup;e&&e._resolveChildDisplayObject(this,t);const r=t.parentLayer;if(r&&(e=r.group,e._resolveChildDisplayObject(this,t)),t.updateOrder=++u0._updateOrderCounter,t.alpha<=0||!t.renderable||!t.layerableChildren||e&&e.sortPriority)return;const n=t.children;if(n&&n.length)for(let i=0;i<n.length;i++)this._addRecursive(n[i])}_addRecursiveChildren(t){if(t.alpha<=0||!t.renderable||!t.layerableChildren)return;const e=t.children;if(e&&e.length)for(let r=0;r<e.length;r++)this._addRecursive(e[r])}};let yD=u0;yD._updateOrderCounter=0;/*!
 * @pixi/layers - v2.0.1
 * Compiled Wed, 21 Dec 2022 21:17:52 UTC
 *
 * @pixi/layers is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * 
 * Copyright 2017-2021, Ivan Popelyshev, All Rights Reserved
 */pD();gD(As);const Em=new l0,vD=new U4(10);new yy(0);new lS({angle:22,gain:1,lacunarity:3,alpha:.2});new Ti({red:[-50,-50],blue:[-50,-50],green:[-50,-50],slices:4,direction:-45,fillMode:1});vD.blendMode=pe.ADD;const Fi=Je.from(k4);Fi.width=se;Fi.y=_e/2;Fi.tint=16777215;Fi.alpha=0;Fi.x=se/2;Fi.anchor.set(.5,.5);Fi.height=_e;const yo=Je.from(sD);yo.width=se;yo.height=_e;yo.anchor.set(.5,.5);yo.x=se/2;yo.alpha=1;yo.y=_e/2;const co=Je.from(te.WHITE);co.width=0;co.y=_e;co.x=0;co.anchor.set(0,0);co.height=3;const Cm=new je,c0=new je;c0.name="bgcontainer";const Ch=new je;Ch.name="widenotecontainer";const Ah=new je;Ah.name="notwidenotecontainer";function xD(t){ye.exports.useState(t.beatmap);const e=Je.from(dD(t.beatmap.bgPath));new md;const r=Ve.exports.useApp();t.container.addChild(Fi),r.stage.addChild(Cm,yo,Ch,c0,Ah,t.overlay,co,t.container);let n=!1;n==!1&&(Em.blue=[1,0],Em.green=[0,0],Em.red=[-1,0],r.stage.filters=[],n=!0);const i=c0,[s,o]=ye.exports.useState(0);e.alpha=0,e.name="bgimage",t.game;const u=t.game.beatmap.timingPoints.sort((c,h)=>c.time-h.time);return u[0],Ve.exports.useTick(()=>{var p;if(e.height>1&&Cm.getChildByName("bgimage")==null){const g=e.height*(se/e.width);e.height=g,e.width=se,e.x=se/2,e.y=_e/2,e.anchor.set(.5,.5),Cm.addChild(e)}if(t.game.isPlaying){if(t.game.mode=="play"){e.alpha==0&&(Fi.alpha=1,e.alpha=1);var c=t.game.audio.currentTime*1e3;u.filter(g=>g.time<=c)[0],t.game.currenttime=c}var h=t.game.beatmap.speedChanges,f=h!=null?((p=h.filter(g=>g.startTime<=t.game.currenttime).sort((g,v)=>g.startTime-v.startTime).reverse()[0])==null?void 0:p.speed)*_e:t.game.notespeed;f>=0&&(t.game.notespeed=vy)}}),Ve.exports.useTick(()=>{(t.game.mode=="play"||t.game.mode=="edit")&&o(1),co.width=Et(t.game.currenttime,[0,t.game.beatmap.hitObjects[t.game.beatmap.hitObjects.length-1].startTime],[0,se])}),de(Jd,{children:jt(Ve.exports.Container,{alpha:s,children:[de(Q_,{x:.5,beatmap:t.beatmap,i:-1,type:"normal",container:i,game:t.game},-1),t.beatmap.cursor.map((c,h)=>de(Q_,{x:c.x,beatmap:t.beatmap,i:h,container:i,type:c.type,game:t.game},h)),de(ih,{i:1+1,hitObjects:t.beatmap.hitObjects.filter(c=>c.column==1+1),timingPoints:t.beatmap.timingPoints,game:t.game,container:Ch}),de(ih,{i:2+1,hitObjects:t.beatmap.hitObjects.filter(c=>c.column==2+1),timingPoints:t.beatmap.timingPoints,game:t.game,container:Ch}),de(ih,{i:0+1,hitObjects:t.beatmap.hitObjects.filter(c=>c.column==0+1),timingPoints:t.beatmap.timingPoints,game:t.game,container:Ah}),de(ih,{i:3+1,hitObjects:t.beatmap.hitObjects.filter(c=>c.column==3+1),timingPoints:t.beatmap.timingPoints,game:t.game,container:Ah}),de(P4,{game:t.game,cursors:t.beatmap.cursor})]})})}const _D="/assets/rightbackdrop.f91e1109.png",TD="/assets/leftbackdrop.d4900be8.png",bD="/assets/loading.eb79aa82.jpg";let yt=-1;const gl=Je.from(bD),Ii=Je.from(TD),Ph=Vo("shadow",0,_e/2,se,_e*.5,[0,.5],0);Ph.alpha=0;const Ri=Je.from(_D);Ii.width=Ri.width=se;Ii.height=Ri.height=_e;Ii.alpha=Ri.alpha=1;Ii.anchor.set(.5,.5);Ri.anchor.set(.5,.5);Ii.x=0;Ri.x=se;Ii.y=Ri.y=_e/2;function wD(t){const e=Je.from(t.game.beatmap.jacketPath);var r=Js(`TITLE : ${t.game.beatmap.metadata.title}
COMPOSER : ${t.game.beatmap.metadata.artist}`,se*.25+_e*.2+50,_e/2-_e*.2,[0,0],void 0,new pt({fontSize:25,fontFamily:"Courier New",align:"left",fill:"#ffffff"})),n=Js(`////////////////
CHARTER : ${t.game.beatmap.metadata.creator}
DIFFICULTY : ${t.game.beatmap.metadata.difficult}
`,se*.25+_e*.2+50,_e/2-_e*.2+55,[0,0],void 0,new pt({fontSize:15,fontFamily:"Courier New",align:"left",fill:"#ffffff"}));return n.alpha=r.alpha=0,Ve.exports.useApp().stage,document.getElementById("play").style.display="none",t.game.mode!="play"&&(setTimeout(()=>{yt=Date.now()},1500),setTimeout(()=>{t.game.setVolume(10/100),t.game.play("play")},1500+4e3+200)),e.width=e.height=_e*.4,e.alpha=0,e.x=se/4,e.y=_e/2,e.anchor.set(.5,.5),Ve.exports.useTick(()=>{yt!=-1&&(Date.now()>=yt+2e3?(Ii.x=tn(Date.now(),[yt+4e3,yt+4e3+500],[se/2,0]),Ri.x=tn(Date.now(),[yt+4e3,yt+4e3+500],[se/2,se]),e.alpha=n.alpha=r.alpha=Et(Date.now(),[yt+2e3,yt+2e3+200],[1,0]),gl.alpha=Et(Date.now(),[yt+4e3+200,yt+4e3+1200],[1,0]),Ph.alpha=Et(Date.now(),[yt+4e3+200,yt+4e3+1e3],[.5,0])):(Ii.x=tn(Date.now(),[yt,yt+500],[0,se/2]),Ri.x=tn(Date.now(),[yt,yt+500],[se,se/2]),e.alpha=n.alpha=r.alpha=Et(Date.now(),[yt,yt+200],[0,1]),Ph.alpha=Et(Date.now(),[yt,yt+100],[0,.5])))}),gl.width=se,gl.height=_e,gl.tint=0,t.container.addChild(gl,Ii,Ri,Ph,e,r,n),null}const uT="/assets/overlay.9fbc01eb.png";function SD(t){const e=g4("test",se/2,_e/2,100,100,2,16777215,.5,50,t.game),r=t.game.beatmap.hitObjects;return e[1].on("click",()=>{r[0].startTime=200,t.game.beatmap.hitObjects=r}),null}function ED(t){const e=Vo("timesq",se/2,_e,se,100,[.5,0],0,t.game,uT),r=Vo("timesq2",se/2,0,se,100,[.5,0],0,t.game,uT);e.angle=180;const n=Vo("timestampcursor",se*.25-150,50,5,5,[.5,.5],16777215,t.game);n.angle=45;const i=Vo("tslined",se-50,50,se*.25,1,[1,.5],16777215,t.game,"",!0),s=Vo("tsline",se,50,.25*se+100,100,[1,.5],16777215,t.game,"",!0);s.alpha=0;const o=new je;var u=1;const c=Js(t.game.currenttime.toString(),se-50,60,[1,0],void 0,new pt({fontFamily:"Audiowide",fontVariant:"small-caps",align:"right",fill:"#ffffff",fontSize:10})),h=g=>{t.game.currenttime=t.time+u*(6e4/(t.bpm*4)),(u-t.time)%1==0?u+=g.deltaY<0?-1:1:u=Math.round(u)},f=p4()/2+se/2-50-se*.25/2;function p(){document.addEventListener("mousemove",g=>{t.game.mousedown=="tsline"&&(t.game.currenttime=Et(g.x,[f-se*.25/2,f+se*.25/2],[0,t.game.duration]),u=Et(g.x,[f-se*.25/2,f+se*.25/2],[0,Math.round((t.game.duration-t.time)/(6e4/(t.bpm*4)))]))}),document.addEventListener("mouseup",()=>{t.game.mousedown=""}),document.addEventListener("wheel",h),o.addChild(e),o.addChild(r),o.addChild(c),o.addChild(n),o.addChild(i),o.addChild(s)}return Ve.exports.useApp().stage.addChild(o),Ve.exports.useTick(()=>{t.game.mode=="edit"&&p();const g=Math.round(t.game.currenttime);c.text=g,n.x=Et(t.game.currenttime,[t.time,t.game.duration],[se-50-se*.25/2-se*.25/2,se-50-se*.25/2+se*.25/2])}),de(SD,{game:t.game,beatmap:t.beatmap})}const Yr=new je;Yr.name="alert";function CD(t){let e=Js("",se/2,_e/2,[.5,.5],!0,new pt({fill:"white",fontFamily:"Roboto Condensed",fontSize:25,fontWeight:"900"})),r=Js("Alert!",se/2,_e/2-100,[.5,.5],!0,new pt({fill:"white",fontFamily:"Roboto Condensed",fontSize:30,fontWeight:"900",dropShadow:!0,dropShadowBlur:10,dropShadowColor:0,dropShadowAlpha:1})),n=rs(se/2,_e/2+40,e.width*1.1,e.height*1.1+100,0,0,1,!0,0),i=rs(se/2,_e/2+40,e.width*1.1,e.height*1.1+100,3,16777215,.3);var s=Js("OK!",se/2,_e/2+e.height+10,[.5,.5],!0,new pt({fill:"white",fontFamily:"Roboto Condensed",fontSize:20,fontWeight:"900"})),o=rs(se/2,_e/2+e.height+10,s.width*1.5+50,s.height*1.5,2,16777215,1);return Ve.exports.useApp().stage.addChild(Yr),Ve.exports.useTick(()=>{e.text!=t.game.alert[0]&&(e.text=t.game.alert[0],i=rs(se/2,_e/2+40,e.width*1.1,e.height*1.1+100,3,16777215,.3),n=rs(se/2,_e/2+40,e.width*1.1,e.height*1.1+100,0,0,1,!0,0),s=Js("OK!",se/2,_e/2+e.height+10,[.5,.5],!0,new pt({fill:"white",fontFamily:"Roboto Condensed",fontSize:20,fontWeight:"900"})),o=rs(se/2,_e/2+e.height+10,s.width*1.5+50,s.height*1.5,2,16777215,1),n.filters=[new yy(10)],Yr.on("pointerdown",()=>{Yr.alpha!=0&&(t.game.alert[2]=Date.now())}),Yr.addChild(n,e,i,o,s)),Yr.alpha!=0?(i.filters=o.filters=[new Ti({offset:10}),new l0],e.filters=r.filters=s.filters=[new Ti({offset:1}),new l0([3,3],[-2,0],[0,0])],Yr.interactive=!0):Yr.interactive=!1;let c=t.game.alert[1],h=t.game.alert[2];Yr.y=tn(Date.now(),[c,c+1e3],[-10,0]),Yr.alpha=tn(Date.now(),[c,c+1e3],[0,1]),h>-1&&(Yr.y=tn(Date.now(),[h,h+1e3],[0,-10]),Yr.alpha=tn(Date.now(),[h,h+1e3],[1,0]))}),null}function yS(t){const[e,r]=ye.exports.useState(t.chart),{audioPath:n}=e;e.timingPoints.forEach(g=>{g.time=g.time+bi+nh}),e.hitObjects.forEach(g=>{g.startTime=g.startTime+bi+nh,g.endTime&&(g.endTime=g.endTime+bi+nh)}),e.cursor.forEach(g=>{g.startTime=g.startTime+bi+nh});let i=0,s=0;e.hitObjects.forEach(g=>{i+=100,s+=1}),e.cursor.forEach((g,v)=>{i+=100,s+=1});const o=t.game.init(10,10,400,n,i,e,vy,s);o.setAudioPath(n),o.audiovolume,o.effectvolume;function u(g){return g==V_||g==W_||g==X_||g==Y_}function c(g){switch(g){case V_:return 0;case W_:return 1;case X_:return 2;case Y_:return 3;default:return NaN}}let h=setTimeout(function(){o.key[4]="00"},10);ye.exports.useEffect(()=>{document.addEventListener("mousemove",v=>{v.movementX>5&&(o.key[4]=o.key[4][0]+"1"),v.movementX<5&&(o.key[4]="1"+o.key[4][1]),Math.abs(v.movementX)>0&&(clearTimeout(h),h=setTimeout(function(){o.key[4]="00"},1))}),document.addEventListener("keyup",v=>{u(v.key)&&(o.key[c(v.key)]="00")}),document.addEventListener("keydown",v=>{v.repeat?o.key[c(v.key)]="01":o.key[c(v.key)]="11"});const g=v=>{switch(v.key){case"`":o.retry();break}};return document.addEventListener("keydown",g),()=>{document.removeEventListener("keydown",g)}},[]);const f=new je,p=new je;return jt(Jd,{children:[de("button",{id:"play",children:"PLAY"}),de("div",{id:"display"}),jt(Ve.exports.Stage,{width:se,height:_e,children:[jt(Ve.exports.Container,{width:(t.game.mode=="edit"?.8:1)*se,height:(t.game.mode=="edit"?.8:1)*_e,children:[de(A4,{game:o,container:p}),de(xD,{beatmap:e,game:o,container:f,overlay:p})]}),de(ED,{time:e.timingPoints[0].time,bpm:e.timingPoints[0].bpm,game:t.game,beatmap:r}),de(CD,{game:o}),de(wD,{game:o,time:t.menutime,beatmap:e,container:p,pcontainer:f})]}),de("div",{id:"log"})]})}function gd(t){const e=JSON.parse(t),{audioPath:r,metadata:n,hitObjects:i,timingPoints:s,cursor:o,speedChanges:u}=e,c=typeof r=="string",h=typeof n.title=="string"&&typeof n.titleUnicode=="string"&&typeof n.artist=="string"&&typeof n.artistUnicode=="string"&&typeof n.creator=="string"&&typeof n.difficult=="string",f=Array.isArray(s)&&s.length>0&&s.every(({time:x,bpm:S,meter:E,defaultSampleSet:w,volume:b})=>typeof x=="number"&&typeof S=="number"&&typeof E=="number"&&typeof b=="number"&&["soft","normal","drum"].includes(w)),p=x=>x!=null?Array.isArray(x)&&x.length<=2&&x.every(({type:S,sampleSet:E,addition:w})=>(S!=null?["whistle","finish","clap"].includes(S):!0)&&(E!=null?["soft","normal","drum"].includes(E):!0)&&(w!=null?["soft","normal","drum"].includes(w):!0)):!0,g=Array.isArray(i)&&i.length>0&&i.every(({type:x,column:S,startTime:E,endTime:w,hitsound:b})=>["note","hold"].includes(x)&&typeof S=="number"&&typeof E=="number"&&(w!=null?typeof w=="number":!0)&&p(b));if(!(c&&h&&f&&g))throw new Error("Invalid beatmap");return e.timingPoints.forEach(x=>{x.time=x.time+bi}),e.hitObjects.forEach(x=>{x.startTime=x.startTime+bi,x.endTime&&(x.endTime=x.endTime+bi)}),e.speedChanges!=null&&(e.speedChanges=e.speedChanges.sort((x,S)=>x.startTime-S.startTime)),e.cursor=e.cursor.sort((x,S)=>x.startTime-S.startTime),e.cursor.forEach((x,S)=>{x.startTime=x.startTime+bi}),e.timingPoints.forEach((x,S)=>{x.time=x.time+bi}),e}function AD(){return Math.max(document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)}function PD(){return Math.max(document.documentElement.clientHeight)}const Ji=new Audio;class ID{constructor(){He(this,"audiovolume");He(this,"audio");He(this,"hitlist");He(this,"effectvolume");He(this,"score");He(this,"hitbonus");He(this,"maxscore");He(this,"hitwaitlist");He(this,"combo");He(this,"playStartTime");He(this,"cursor");He(this,"audiopath");He(this,"editoractive");He(this,"mode");He(this,"isPlaying");He(this,"key");He(this,"currenttime");He(this,"highestcombo");He(this,"beatmap");He(this,"maxcombo");He(this,"notespeed");He(this,"WIDTH");He(this,"duration");He(this,"HEIGHT");He(this,"chartoffset");He(this,"inputoffset");He(this,"mousedown");He(this,"alert");this.beatmap=null,this.key=["00","00","00","00","00"],this.audio=Ji,this.audiopath="",this.chartoffset=0,this.inputoffset=0,this.audiovolume=NaN,this.effectvolume=NaN,this.highestcombo=0,this.hitwaitlist=[],this.maxcombo=NaN,this.score=0,this.hitbonus=0,this.notespeed=0,this.maxscore=NaN,this.combo=0,this.duration=0,this.playStartTime=0,this.isPlaying=!1,this.cursor=.5,this.mode="",this.currenttime=0,this.HEIGHT=PD(),this.WIDTH=AD(),this.hitlist=[],this.mousedown="",this.alert=["",0,0],this.editoractive=""}init(e,r,n,i,s,o,u,c){return this.audiovolume=e,this.effectvolume=r,this.audiopath=i,this.notespeed=u,this.maxscore=s,this.maxcombo=c,this.beatmap=o,Ji.src=i,this}NOTE_TRAVEL_DURATION(){return _e/this.notespeed*1e3}NOTE_TRAVEL_FROM_LINE_TO_BOTTOM_DURATION(){return mu/this.notespeed*1e3}async miss(e,r){this.combo=0,this.hitlist.push(e.toString()+r.toString()+",miss"),fd(this.currenttime,"miss")}async hit(e,r,n,i){this.score+=this.idtoscore(e),this.combo+=1,this.combo>this.highestcombo&&(this.highestcombo=this.combo),n==5?this.key[n-1]="00":this.key[n-1]="01",this.hitbonus+=i>=1?1/i*10:10,fd(r,e),this.hitlist.find(s=>s.startsWith(r.toString()+n.toString()))==null&&this.hitlist.push(r.toString()+n.toString()+","+e)}async play(e){this.score=0,this.combo=0,this.hitlist=[],this.mode=e,this.isPlaying=!0,this.mode=="play"?(this.audio=Ji,this.audio.play(),this.playStartTime=Date.now()):this.playStartTime=Date.now()}retry(){this.isPlaying=!0,this.score=0,this.combo=0,this.playStartTime=Date.now(),this.hitlist=[],Ji.currentTime=0,Ji.play()}quit(){this.isPlaying=!1,this.score=0,this.combo=0,this.playStartTime=0,this.hitlist=[],Ji.pause(),Ji.currentTime=0}idtoscore(e){switch(e){case"perfect":return 100;case"great":return 90;case"ok":return 30;default:return 0}}setAudioPath(e){this.audiopath=e}setVolume(e){Ji.volume=e}setEffectVolume(e){this.effectvolume=e}}const Pl=`{
  "bgPath": "underthrone_turmoil",
  "audioPath": "https://cdn.discordapp.com/attachments/1021719285766295593/1124272412578545724/audio.ogg",
  "jacketPath": "https://media.discordapp.net/attachments/1021719285766295593/1124272587569103018/Camellia_-_Tera_I-O_-_Jacket.png",
  "metadata": 
    {
      "title": "M1LL10N PP",
      "titleUnicode": "M1LL10N PP",
      "artist": "Camellia",
      "artistUnicode": "camellia",
      "creator": "ohm002",
      "difficult": "4k"
    }
  ,
  "hitObjects": [
    {
      "type": "note",
      "column": 3,
      "startTime": 4118
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 4503
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 4887
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 5272
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 5657,
      "endTime": 8092
    },
    {
      "type": "hold",
      "column": 4,
      "startTime": 5657,
      "endTime": 8092
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 8221
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 8605
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 8990
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 9374
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 9759,
      "endTime": 12195
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 9759,
      "endTime": 12195
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 12323
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 12323
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 12580
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 12580
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 12964
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 12964
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 13221
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 13221
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 14374
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 14374
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 14631
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 14631
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 15015
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 15015
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 15272
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 15272
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 15528
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 15528
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 16426
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 16426
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 16682
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 16682
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 16939
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 17067
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 17067
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 17323
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 17323
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 17451,
      "endTime": 18349
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 17451
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 17580
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 17708
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 17836
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 17964
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 18092
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 18221
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 18477
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 18477
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 18733
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 18733
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 18990
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 19118
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 19118
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 19374
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 19374
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 19631,
      "endTime": 20272
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 19631
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 19759
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 19887
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 20015
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 20144
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 20272
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 20528
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 20528
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 20913
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 20913
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 21298
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 21298
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 21682
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 21682
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 22067
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 22067
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 22323
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 22323
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 22580,
      "endTime": 23605
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 22580,
      "endTime": 23605
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 28733
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 28733
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 28990
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 28990
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 29246
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 29246
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 29503
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 29503
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 29759
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 29759
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 30015
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 30015
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 30272
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 30272
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 30528
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 30528
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 30785
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 30785
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 30913
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 30913
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 31041
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 31041
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 31298
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 31298
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 31554
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 31554
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 31810
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 31810
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 32067
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 32067
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 32323
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 32323
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 32451
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 32451
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 36939
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 36939
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 37067
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 37067
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 37195
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 37195
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 37323
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 37323
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 37580
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 37580
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 37708
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 37836
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 37836
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 37964
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 37964
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 38092
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 38221
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 38221
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 38349
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 38477
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 38477
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 38605
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 38733
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 38733
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 38862
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 38990
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 38990
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 39118
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 39246
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 39246
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 39374
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 39374
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 39631
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 39631
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 39759
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 39759
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 39887
    },
    {
      "type": "hold",
      "column": 4,
      "startTime": 40015,
      "endTime": 40528
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 40015
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 40144
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 40272
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 40400
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 40528
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 41041,
      "endTime": 41554
    },
    {
      "type": "hold",
      "column": 1,
      "startTime": 41041,
      "endTime": 41554
    },
    {
      "type": "hold",
      "column": 1,
      "startTime": 41810,
      "endTime": 42323
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 41810,
      "endTime": 42323
    },
    {
      "type": "hold",
      "column": 4,
      "startTime": 53349,
      "endTime": 55400
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 53349
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 53605
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 53862
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 54631
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 54759
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 54887
    },
    {
      "type": "hold",
      "column": 1,
      "startTime": 55400,
      "endTime": 57195
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 55657
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 55785
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 55913
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 56169
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 56298
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 56554
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 56682
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 56810
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 56939
    },
    {
      "type": "hold",
      "column": 1,
      "startTime": 57451,
      "endTime": 57931
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 57451,
      "endTime": 57931
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 58411
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 58411
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 58531
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 58771
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 58771
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 58891
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 59131
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 59131
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 59371,
      "endTime": 59851
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 59371,
      "endTime": 59851
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 60091
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 60091
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 60331
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 60331
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 60451
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 60511
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 60571
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 60811
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 60811
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 61051
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 61051
    },
    {
      "type": "hold",
      "column": 4,
      "startTime": 61291,
      "endTime": 61771
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 61291,
      "endTime": 61771
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 62011
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 62011
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 62251
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 62251
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 62371
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 62611
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 62611
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 62731
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 62971
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 62971
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 63211,
      "endTime": 63691
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 63211,
      "endTime": 63691
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 63931
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 63931
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 64171
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 64231
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 64291
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 64351
    },
    {
      "type": "note",
      "column": 4,
      "startTime": 64411
    },
    {
      "type": "note",
      "column": 2,
      "startTime": 64531
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 64651
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 64771
    },
    {
      "type": "note",
      "column": 3,
      "startTime": 64891
    },
    {
      "type": "note",
      "column": 1,
      "startTime": 65011
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 65131,
      "endTime": 65477
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 65131,
      "endTime": 65477
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 65592,
      "endTime": 65938
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 65592,
      "endTime": 65938
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 66054,
      "endTime": 66400
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 66054,
      "endTime": 66400
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 66515,
      "endTime": 66861
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 66515,
      "endTime": 66861
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 66977,
      "endTime": 67323
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 66977,
      "endTime": 67323
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 67438,
      "endTime": 67784
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 67438,
      "endTime": 67784
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 67900,
      "endTime": 68246
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 67900,
      "endTime": 68246
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 68361,
      "endTime": 68707
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 68361,
      "endTime": 68707
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 68823,
      "endTime": 69169
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 68823,
      "endTime": 69169
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 69284,
      "endTime": 69631
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 69284,
      "endTime": 69631
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 69746,
      "endTime": 70092
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 69746,
      "endTime": 70092
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 70207,
      "endTime": 70554
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 70207,
      "endTime": 70554
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 70669,
      "endTime": 71015
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 70669,
      "endTime": 71015
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 71131,
      "endTime": 71477
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 71131,
      "endTime": 71477
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 71592,
      "endTime": 71938
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 71592,
      "endTime": 71938
    },
    {
      "type": "hold",
      "column": 2,
      "startTime": 72054,
      "endTime": 72400
    },
    {
      "type": "hold",
      "column": 3,
      "startTime": 72054,
      "endTime": 72400
    }
  ],
  "cursor": [
    {
      "type": "normal",
      "x": 0.3125,
      "startTime": 4118
    },
    {
      "type": "normal",
      "x": 0.6875,
      "startTime": 4503
    },
    {
      "type": "normal",
      "x": 0.4375,
      "startTime": 4887
    },
    {
      "type": "normal",
      "x": 0.8125,
      "startTime": 5272
    },
    {
      "type": "normal",
      "x": 0.4375,
      "startTime": 5657
    },
    {
      "type": "normal",
      "x": 0.40234375,
      "startTime": 5721
    },
    {
      "type": "normal",
      "x": 0.369140625,
      "startTime": 5785
    },
    {
      "type": "normal",
      "x": 0.3359375,
      "startTime": 5849
    },
    {
      "type": "normal",
      "x": 0.3046875,
      "startTime": 5913
    },
    {
      "type": "normal",
      "x": 0.2734375,
      "startTime": 5977
    },
    {
      "type": "normal",
      "x": 0.248046875,
      "startTime": 6041
    },
    {
      "type": "normal",
      "x": 0.22265625,
      "startTime": 6105
    },
    {
      "type": "normal",
      "x": 0.201171875,
      "startTime": 6169
    },
    {
      "type": "normal",
      "x": 0.18359375,
      "startTime": 6233
    },
    {
      "type": "normal",
      "x": 0.16796875,
      "startTime": 6298
    },
    {
      "type": "normal",
      "x": 0.154296875,
      "startTime": 6362
    },
    {
      "type": "normal",
      "x": 0.14453125,
      "startTime": 6426
    },
    {
      "type": "normal",
      "x": 0.13671875,
      "startTime": 6490
    },
    {
      "type": "normal",
      "x": 0.130859375,
      "startTime": 6554
    },
    {
      "type": "normal",
      "x": 0.126953125,
      "startTime": 6618
    },
    {
      "type": "normal",
      "x": 0.123046875,
      "startTime": 6682
    },
    {
      "type": "normal",
      "x": 0.6875,
      "startTime": 8221
    },
    {
      "type": "normal",
      "x": 0.3125,
      "startTime": 8605
    },
    {
      "type": "normal",
      "x": 0.5625,
      "startTime": 8990
    },
    {
      "type": "normal",
      "x": 0.1875,
      "startTime": 9374
    },
    {
      "type": "normal",
      "x": 0.5625,
      "startTime": 9759
    },
    {
      "type": "normal",
      "x": 0.595703125,
      "startTime": 9823
    },
    {
      "type": "normal",
      "x": 0.62890625,
      "startTime": 9887
    },
    {
      "type": "normal",
      "x": 0.662109375,
      "startTime": 9951
    },
    {
      "type": "normal",
      "x": 0.693359375,
      "startTime": 10015
    },
    {
      "type": "normal",
      "x": 0.724609375,
      "startTime": 10080
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 10144
    },
    {
      "type": "normal",
      "x": 0.775390625,
      "startTime": 10208
    },
    {
      "type": "normal",
      "x": 0.796875,
      "startTime": 10272
    },
    {
      "type": "normal",
      "x": 0.814453125,
      "startTime": 10336
    },
    {
      "type": "normal",
      "x": 0.830078125,
      "startTime": 10400
    },
    {
      "type": "normal",
      "x": 0.84375,
      "startTime": 10464
    },
    {
      "type": "normal",
      "x": 0.853515625,
      "startTime": 10528
    },
    {
      "type": "normal",
      "x": 0.861328125,
      "startTime": 10592
    },
    {
      "type": "normal",
      "x": 0.8671875,
      "startTime": 10657
    },
    {
      "type": "normal",
      "x": 0.87109375,
      "startTime": 10721
    },
    {
      "type": "normal",
      "x": 0.875,
      "startTime": 10785
    },
    {
      "type": "normal",
      "x": 0.125,
      "startTime": 12323
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 12580
    },
    {
      "type": "normal",
      "x": 0.875,
      "startTime": 12964
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 13221
    },
    {
      "type": "normal",
      "x": 0.125,
      "startTime": 14374
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 14631
    },
    {
      "type": "normal",
      "x": 0.875,
      "startTime": 15015
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 15272
    },
    {
      "type": "normal",
      "x": 0.875,
      "startTime": 15528
    },
    {
      "type": "normal",
      "x": 0.0,
      "startTime": 16426
    },
    {
      "type": "normal",
      "x": 0.125,
      "startTime": 18477
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 20528
    },
    {
      "type": "normal",
      "x": 0.625,
      "startTime": 20913
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 21298
    },
    {
      "type": "normal",
      "x": 0.875,
      "startTime": 21682
    },
    {
      "type": "normal",
      "x": 0.5625,
      "startTime": 22067
    },
    {
      "type": "normal",
      "x": 0.1875,
      "startTime": 22323
    },
    {
      "type": "normal",
      "x": 0.0,
      "startTime": 22580
    },
    {
      "type": "normal",
      "x": 0.044921875,
      "startTime": 22622
    },
    {
      "type": "normal",
      "x": 0.08984375,
      "startTime": 22665
    },
    {
      "type": "normal",
      "x": 0.134765625,
      "startTime": 22708
    },
    {
      "type": "normal",
      "x": 0.181640625,
      "startTime": 22751
    },
    {
      "type": "normal",
      "x": 0.2265625,
      "startTime": 22793
    },
    {
      "type": "normal",
      "x": 0.271484375,
      "startTime": 22836
    },
    {
      "type": "normal",
      "x": 0.31640625,
      "startTime": 22879
    },
    {
      "type": "normal",
      "x": 0.361328125,
      "startTime": 22921
    },
    {
      "type": "normal",
      "x": 0.404296875,
      "startTime": 22964
    },
    {
      "type": "normal",
      "x": 0.447265625,
      "startTime": 23007
    },
    {
      "type": "normal",
      "x": 0.48828125,
      "startTime": 23050
    },
    {
      "type": "normal",
      "x": 0.52734375,
      "startTime": 23092
    },
    {
      "type": "normal",
      "x": 0.56640625,
      "startTime": 23135
    },
    {
      "type": "normal",
      "x": 0.603515625,
      "startTime": 23178
    },
    {
      "type": "normal",
      "x": 0.638671875,
      "startTime": 23221
    },
    {
      "type": "normal",
      "x": 0.673828125,
      "startTime": 23263
    },
    {
      "type": "normal",
      "x": 0.705078125,
      "startTime": 23306
    },
    {
      "type": "normal",
      "x": 0.734375,
      "startTime": 23349
    },
    {
      "type": "normal",
      "x": 0.759765625,
      "startTime": 23392
    },
    {
      "type": "normal",
      "x": 0.78515625,
      "startTime": 23434
    },
    {
      "type": "normal",
      "x": 0.80859375,
      "startTime": 23477
    },
    {
      "type": "normal",
      "x": 0.828125,
      "startTime": 23520
    },
    {
      "type": "normal",
      "x": 0.845703125,
      "startTime": 23563
    },
    {
      "type": "normal",
      "x": 0.861328125,
      "startTime": 23605
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 24631
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 24759
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 24887
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 25015
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 25144
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 25208
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 25272
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 25336
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 25400
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 25528
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 25657
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 25785
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 25913
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 26041
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 26169
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 26298
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 26426
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 26554
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 26618
    },
    {
      "type": "normal",
      "x": 0.1875,
      "startTime": 26682
    },
    {
      "type": "normal",
      "x": 0.125,
      "startTime": 26725
    },
    {
      "type": "normal",
      "x": 0.0625,
      "startTime": 26768
    },
    {
      "type": "normal",
      "x": 0.0,
      "startTime": 26810
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 26939
    },
    {
      "type": "normal",
      "x": 0.3125,
      "startTime": 27003
    },
    {
      "type": "normal",
      "x": 0.125,
      "startTime": 27067
    },
    {
      "type": "normal",
      "x": 0.3125,
      "startTime": 27131
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 27195
    },
    {
      "type": "normal",
      "x": 0.6875,
      "startTime": 27323
    },
    {
      "type": "normal",
      "x": 0.3125,
      "startTime": 27451
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 27580
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 27708
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 27836
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 27964
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 28092
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 28221
    },
    {
      "type": "normal",
      "x": 0.953125,
      "startTime": 28263
    },
    {
      "type": "normal",
      "x": 0.908203125,
      "startTime": 28306
    },
    {
      "type": "normal",
      "x": 0.86328125,
      "startTime": 28349
    },
    {
      "type": "normal",
      "x": 0.8203125,
      "startTime": 28392
    },
    {
      "type": "normal",
      "x": 0.77734375,
      "startTime": 28434
    },
    {
      "type": "normal",
      "x": 0.73828125,
      "startTime": 28477
    },
    {
      "type": "normal",
      "x": 0.701171875,
      "startTime": 28520
    },
    {
      "type": "normal",
      "x": 0.669921875,
      "startTime": 28563
    },
    {
      "type": "normal",
      "x": 0.64453125,
      "startTime": 28605
    },
    {
      "type": "normal",
      "x": 0.625,
      "startTime": 28648
    },
    {
      "type": "normal",
      "x": 0.61328125,
      "startTime": 28691
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 28733
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 28990
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 29246
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 29503
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 29759
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 30016
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 30272
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 30529
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 30785
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 30913
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 31041
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 31298
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 31554
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 31810
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 32067
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 32323
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 32451
    },
    {
      "type": "normal",
      "x": 0.3125,
      "startTime": 32708
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 32751
    },
    {
      "type": "normal",
      "x": 0.1875,
      "startTime": 32793
    },
    {
      "type": "normal",
      "x": 0.125,
      "startTime": 32836
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 32964
    },
    {
      "type": "normal",
      "x": 0.8125,
      "startTime": 33092
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 33221
    },
    {
      "type": "normal",
      "x": 0.6875,
      "startTime": 33285
    },
    {
      "type": "normal",
      "x": 0.875,
      "startTime": 33349
    },
    {
      "type": "normal",
      "x": 0.4375,
      "startTime": 33477
    },
    {
      "type": "normal",
      "x": 0.8125,
      "startTime": 33605
    },
    {
      "type": "normal",
      "x": 0.375,
      "startTime": 33733
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 33862
    },
    {
      "type": "normal",
      "x": 0.3125,
      "startTime": 33990
    },
    {
      "type": "normal",
      "x": 0.6875,
      "startTime": 34118
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 34246
    },
    {
      "type": "normal",
      "x": 0.625,
      "startTime": 34374
    },
    {
      "type": "normal",
      "x": 0.1875,
      "startTime": 34503
    },
    {
      "type": "normal",
      "x": 0.5625,
      "startTime": 34631
    },
    {
      "type": "normal",
      "x": 0.0,
      "startTime": 34759
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 34887
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 35144
    },
    {
      "type": "normal",
      "x": 0.875,
      "startTime": 35400
    },
    {
      "type": "normal",
      "x": 0.4375,
      "startTime": 35528
    },
    {
      "type": "normal",
      "x": 0.8125,
      "startTime": 35656
    },
    {
      "type": "normal",
      "x": 0.375,
      "startTime": 35784
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 35913
    },
    {
      "type": "normal",
      "x": 0.3125,
      "startTime": 36041
    },
    {
      "type": "normal",
      "x": 0.6875,
      "startTime": 36169
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 36297
    },
    {
      "type": "normal",
      "x": 0.625,
      "startTime": 36426
    },
    {
      "type": "normal",
      "x": 0.708984375,
      "startTime": 36511
    },
    {
      "type": "normal",
      "x": 0.791015625,
      "startTime": 36596
    },
    {
      "type": "normal",
      "x": 0.86328125,
      "startTime": 36682
    },
    {
      "type": "normal",
      "x": 0.921875,
      "startTime": 36767
    },
    {
      "type": "normal",
      "x": 0.962890625,
      "startTime": 36853
    },
    {
      "type": "normal",
      "x": 0.98828125,
      "startTime": 36938
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 41041
    },
    {
      "type": "normal",
      "x": 0.599609375,
      "startTime": 41105
    },
    {
      "type": "normal",
      "x": 0.677734375,
      "startTime": 41169
    },
    {
      "type": "normal",
      "x": 0.724609375,
      "startTime": 41233
    },
    {
      "type": "normal",
      "x": 0.74609375,
      "startTime": 41297
    },
    {
      "type": "normal",
      "x": 0.724609375,
      "startTime": 41362
    },
    {
      "type": "normal",
      "x": 0.677734375,
      "startTime": 41426
    },
    {
      "type": "normal",
      "x": 0.599609375,
      "startTime": 41490
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 41554
    },
    {
      "type": "normal",
      "x": 0.9375,
      "startTime": 41682
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 41810
    },
    {
      "type": "normal",
      "x": 0.400390625,
      "startTime": 41875
    },
    {
      "type": "normal",
      "x": 0.322265625,
      "startTime": 41939
    },
    {
      "type": "normal",
      "x": 0.275390625,
      "startTime": 42003
    },
    {
      "type": "normal",
      "x": 0.25390625,
      "startTime": 42067
    },
    {
      "type": "normal",
      "x": 0.275390625,
      "startTime": 42131
    },
    {
      "type": "normal",
      "x": 0.322265625,
      "startTime": 42195
    },
    {
      "type": "normal",
      "x": 0.400390625,
      "startTime": 42259
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 42323
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 43092
    },
    {
      "type": "normal",
      "x": 0.298828125,
      "startTime": 43157
    },
    {
      "type": "normal",
      "x": 0.142578125,
      "startTime": 43221
    },
    {
      "type": "normal",
      "x": 0.048828125,
      "startTime": 43285
    },
    {
      "type": "normal",
      "x": 0.0078125,
      "startTime": 43349
    },
    {
      "type": "normal",
      "x": 0.048828125,
      "startTime": 43413
    },
    {
      "type": "normal",
      "x": 0.142578125,
      "startTime": 43477
    },
    {
      "type": "normal",
      "x": 0.298828125,
      "startTime": 43541
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 43605
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 43733
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 43862
    },
    {
      "type": "normal",
      "x": 0.701171875,
      "startTime": 43926
    },
    {
      "type": "normal",
      "x": 0.857421875,
      "startTime": 43990
    },
    {
      "type": "normal",
      "x": 0.951171875,
      "startTime": 44054
    },
    {
      "type": "normal",
      "x": 0.9921875,
      "startTime": 44118
    },
    {
      "type": "normal",
      "x": 0.951171875,
      "startTime": 44182
    },
    {
      "type": "normal",
      "x": 0.857421875,
      "startTime": 44246
    },
    {
      "type": "normal",
      "x": 0.701171875,
      "startTime": 44310
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 44374
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 44631
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 45144
    },
    {
      "type": "normal",
      "x": 0.625,
      "startTime": 45785
    },
    {
      "type": "normal",
      "x": 0.375,
      "startTime": 45913
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 46041
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 49246
    },
    {
      "type": "normal",
      "x": 0.298828125,
      "startTime": 49310
    },
    {
      "type": "normal",
      "x": 0.142578125,
      "startTime": 49374
    },
    {
      "type": "normal",
      "x": 0.048828125,
      "startTime": 49438
    },
    {
      "type": "normal",
      "x": 0.0078125,
      "startTime": 49502
    },
    {
      "type": "normal",
      "x": 0.048828125,
      "startTime": 49566
    },
    {
      "type": "normal",
      "x": 0.142578125,
      "startTime": 49630
    },
    {
      "type": "normal",
      "x": 0.298828125,
      "startTime": 49694
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 49758
    },
    {
      "type": "normal",
      "x": 0.0,
      "startTime": 49887
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 50015
    },
    {
      "type": "normal",
      "x": 0.0,
      "startTime": 50143
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 50272
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 50400
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 50528
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 50656
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 50785
    },
    {
      "type": "normal",
      "x": 0.701171875,
      "startTime": 50849
    },
    {
      "type": "normal",
      "x": 0.857421875,
      "startTime": 50913
    },
    {
      "type": "normal",
      "x": 0.951171875,
      "startTime": 50977
    },
    {
      "type": "normal",
      "x": 0.9921875,
      "startTime": 51041
    },
    {
      "type": "normal",
      "x": 0.951171875,
      "startTime": 51105
    },
    {
      "type": "normal",
      "x": 0.857421875,
      "startTime": 51169
    },
    {
      "type": "normal",
      "x": 0.701171875,
      "startTime": 51233
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 51297
    },
    {
      "type": "normal",
      "x": 0.431640625,
      "startTime": 51340
    },
    {
      "type": "normal",
      "x": 0.36328125,
      "startTime": 51383
    },
    {
      "type": "normal",
      "x": 0.294921875,
      "startTime": 51426
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 51555
    },
    {
      "type": "normal",
      "x": 0.681640625,
      "startTime": 51597
    },
    {
      "type": "normal",
      "x": 0.61328125,
      "startTime": 51640
    },
    {
      "type": "normal",
      "x": 0.544921875,
      "startTime": 51683
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 51810
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 51939
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 52067
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 52195
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 52324
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 52452
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 52580
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 52708
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 52836
    },
    {
      "type": "normal",
      "x": 0.298828125,
      "startTime": 52900
    },
    {
      "type": "normal",
      "x": 0.142578125,
      "startTime": 52964
    },
    {
      "type": "normal",
      "x": 0.048828125,
      "startTime": 53028
    },
    {
      "type": "normal",
      "x": 0.0078125,
      "startTime": 53092
    },
    {
      "type": "normal",
      "x": 0.048828125,
      "startTime": 53156
    },
    {
      "type": "normal",
      "x": 0.142578125,
      "startTime": 53220
    },
    {
      "type": "normal",
      "x": 0.298828125,
      "startTime": 53284
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 53348
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 57451
    },
    {
      "type": "normal",
      "x": 0.373046875,
      "startTime": 57511
    },
    {
      "type": "normal",
      "x": 0.498046875,
      "startTime": 57571
    },
    {
      "type": "normal",
      "x": 0.623046875,
      "startTime": 57631
    },
    {
      "type": "normal",
      "x": 0.748046875,
      "startTime": 57691
    },
    {
      "type": "normal",
      "x": 0.623046875,
      "startTime": 57751
    },
    {
      "type": "normal",
      "x": 0.498046875,
      "startTime": 57811
    },
    {
      "type": "normal",
      "x": 0.373046875,
      "startTime": 57871
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 57931
    },
    {
      "type": "normal",
      "x": 1.0,
      "startTime": 58111
    },
    {
      "type": "normal",
      "x": 0.0,
      "startTime": 58411
    },
    {
      "type": "normal",
      "x": 0.0,
      "startTime": 59371
    },
    {
      "type": "normal",
      "x": 0.125,
      "startTime": 59411
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 59451
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 59611
    },
    {
      "type": "normal",
      "x": 0.125,
      "startTime": 59651
    },
    {
      "type": "normal",
      "x": 0.0,
      "startTime": 59691
    },
    {
      "type": "normal",
      "x": 0.5,
      "startTime": 59851
    },
    {
      "type": "normal",
      "x": 0.25,
      "startTime": 59971
    },
    {
      "type": "normal",
      "x": 0.75,
      "startTime": 60091
    },
    {
      "type": "normal",
      "x": 0.904296875,
      "startTime": 61291
    },
    {
      "type": "normal",
      "x": 0.89453125,
      "startTime": 61331
    },
    {
      "type": "normal",
      "x": 0.8671875,
      "startTime": 61371
    },
    {
      "type": "normal",
      "x": 0.830078125,
      "startTime": 61411
    },
    {
      "type": "normal",
      "x": 0.771484375,
      "startTime": 61451
    },
    {
      "type": "normal",
      "x": 0.703125,
      "startTime": 61491
    },
    {
      "type": "normal",
      "x": 0.625,
      "startTime": 61531
    },
    {
      "type": "normal",
      "x": 0.548828125,
      "startTime": 61571
    },
    {
      "type": "normal",
      "x": 0.48046875,
      "startTime": 61611
    },
    {
      "type": "normal",
      "x": 0.421875,
      "startTime": 61651
    },
    {
      "type": "normal",
      "x": 0.37890625,
      "startTime": 61691
    },
    {
      "type": "normal",
      "x": 0.357421875,
      "startTime": 61731
    },
    {
      "type": "normal",
      "x": 0.3515625,
      "startTime": 61771
    },
    {
      "type": "normal",
      "x": 0.095703125,
      "startTime": 63211
    },
    {
      "type": "normal",
      "x": 0.10546875,
      "startTime": 63251
    },
    {
      "type": "normal",
      "x": 0.1328125,
      "startTime": 63291
    },
    {
      "type": "normal",
      "x": 0.169921875,
      "startTime": 63331
    },
    {
      "type": "normal",
      "x": 0.228515625,
      "startTime": 63371
    },
    {
      "type": "normal",
      "x": 0.296875,
      "startTime": 63411
    },
    {
      "type": "normal",
      "x": 0.375,
      "startTime": 63451
    },
    {
      "type": "normal",
      "x": 0.451171875,
      "startTime": 63491
    },
    {
      "type": "normal",
      "x": 0.51953125,
      "startTime": 63531
    },
    {
      "type": "normal",
      "x": 0.578125,
      "startTime": 63571
    },
    {
      "type": "normal",
      "x": 0.62109375,
      "startTime": 63611
    },
    {
      "type": "normal",
      "x": 0.642578125,
      "startTime": 63651
    },
    {
      "type": "normal",
      "x": 0.6484375,
      "startTime": 63691
    }
  ],
  "timingPoints": [
    {
      "time": 1376,
      "bpm": 175.89,
      "meter": 4,
      "defaultSampleSet": "soft",
      "volume": 100
    }
  ]
}
`,cT={"song.teraio.millionpp":{charts:{Lite:{chart:Pl},Neon:{chart:Pl},Enigma:{chart:Pl},"EX-Enigma":{chart:Pl}}}},Pr=new Audio;function RD(){const[t,e]=ye.exports.useState(""),[r,n]=ye.exports.useState(""),[i,s]=ye.exports.useState(""),[o,u]=ye.exports.useState("songtitle"),c=f=>{e(f.currentTarget.innerHTML),u("songtitleanimation"),n(cT[f.currentTarget.id].charts.Lite.chart);const p=gd(cT[f.currentTarget.id].charts.Lite.chart);Pr.src=p.audioPath;const g=20,v=20;Pr.currentTime=g,Pr.play(),Pr.volume=0,setInterval(function(){Pr.currentTime>=g+.1&&Pr.currentTime<=g+v&&Pr.volume<.1&&(Pr.volume+=.005),Pr.currentTime>=g+v&&Pr.volume!=0&&(Pr.volume-=.005)},200),f.currentTarget.id!=null&&s(p.jacketPath),setTimeout(()=>{u("songtitle")},500)};return de(Jd,{children:jt("div",{className:"display",children:[jt("div",{className:"songs split left",children:[jt("div",{className:"songpack",children:[de("h1",{className:"songpack-header",children:"SINGLES"}),de("div",{className:"song",id:"song.singles.starrys",onClick:c,children:"Starry Sky"}),de("div",{className:"song",id:"song.singles.starryd",onClick:c,children:"Starry Dream"})]}),jt("div",{className:"songpack",children:[de("h1",{className:"songpack-header",children:"TERA/IO"}),de("div",{className:"song",id:"song.teraio.fly",onClick:c,children:"Fly Wit Me"}),de("div",{className:"song",id:"song.teraio.dance",onClick:c,children:"Dance With Silence"}),de("div",{className:"song",id:"song.teraio.connect",onClick:c,children:"+ERABY+E CONNEC+10N"}),de("div",{className:"song",id:"song.teraio.float",onClick:c,children:"Body F10ating in the Zero Gravity Space"}),de("div",{className:"song",id:"song.teraio.millionpp",onClick:c,children:"M1LLI0N PP"})]}),jt("div",{className:"songpack",children:[de("h1",{className:"songpack-header",children:"BLACK/WHITE"}),de("div",{className:"song",id:"song.bw.deathphobia",onClick:c,children:"DESGLYXHLOPHOBIA"}),de("div",{className:"song",id:"song.bw.kris",onClick:c,children:"KRISXTOFLARXRISM"}),de("div",{className:"song",id:"song.bw.knew",onClick:c,children:"AKNEWRISM"}),de("div",{className:"song",id:"song.bw.hitori",onClick:c,children:"\u4E00\u4EBA\u306E\u4E16\u754C"})]})]}),jt("div",{className:"songpreview split right",children:[de("div",{className:"songjacketbg centered",children:de("img",{src:i,className:" centered"})}),jt("div",{className:"centered ",children:[jt("div",{className:"songtitlewrapper",children:[de("div",{children:de("h1",{children:t})}),de("div",{className:"songtitleblurwrapper",children:de("h1",{className:o,children:t})})]}),de("hr",{}),de("br",{}),jt("center",{children:[de("i",{children:"Difficulties :"}),jt("div",{className:"songtitlediff",children:[de("h2",{children:"Lite"})," ",de("small",{children:"\xA0LV. 5"})]}),jt("div",{className:"songtitlediff",children:[de("h2",{children:"Neuron"})," ",de("small",{children:"\xA0LV. 6"})]}),jt("div",{className:"songtitlediff",children:[de("h2",{children:"Enigma"})," ",de("small",{children:"\xA0LV. 10"})]}),jt("div",{className:"songtitlediff",children:[de("h2",{children:"EX-Enigma"})," ",de("small",{children:"\xA0LV. 15"})]}),de("div",{className:"songtitlediff songplay",onClick:f=>{Pr.volume=0,Pr.pause(),kD(gd(r))},children:de("h2",{children:"Play"})})]})]})]})]})})}const lr=new ID;var yd=!1;const vS=bb(document.getElementById("root"));function kD(t){lr.mode="menu";var e=Pl;let r=gd(e);lr.beatmap=r,lr.audio=new Audio(r.audioPath),setInterval(()=>{!isNaN(lr.audio.duration)&&!yd&&(lr.duration=lr.audio.duration*1e3,vS.render(de(An.StrictMode,{children:de(yS,{game:lr,chart:r,menutime:Date.now()})})),yd=!0)},10)}vS.render(de(RD,{}));var dT;(dT=document.getElementById("chartfile"))==null||dT.addEventListener("change",()=>{var t=new FileReader;lr.mode="menu",t.onload=function(){var e=t.result;let r=gd(e);lr.beatmap=r,lr.audio=new Audio(r.audioPath),setInterval(()=>{!isNaN(lr.audio.duration)&&!yd&&(lr.duration=lr.audio.duration*1e3,console.log(lr.duration),lA.render(de(An.StrictMode,{children:de(yS,{game:lr,chart:r,menutime:Date.now()})}),document.getElementById("root")),yd=!0)},10)},t.readAsText(document.getElementById("chartfile").files[0])})});export default MD();
