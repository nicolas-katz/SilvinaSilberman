function $S(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function FS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var I={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),US=Symbol.for("react.portal"),zS=Symbol.for("react.fragment"),jS=Symbol.for("react.strict_mode"),VS=Symbol.for("react.profiler"),BS=Symbol.for("react.provider"),HS=Symbol.for("react.context"),WS=Symbol.for("react.forward_ref"),qS=Symbol.for("react.suspense"),KS=Symbol.for("react.memo"),GS=Symbol.for("react.lazy"),Nm=Symbol.iterator;function QS(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var R0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N0=Object.assign,D0={};function as(t,e,n){this.props=t,this.context=e,this.refs=D0,this.updater=n||R0}as.prototype.isReactComponent={};as.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};as.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function P0(){}P0.prototype=as.prototype;function df(t,e,n){this.props=t,this.context=e,this.refs=D0,this.updater=n||R0}var ff=df.prototype=new P0;ff.constructor=df;N0(ff,as.prototype);ff.isPureReactComponent=!0;var Dm=Array.isArray,O0=Object.prototype.hasOwnProperty,pf={current:null},L0={key:!0,ref:!0,__self:!0,__source:!0};function M0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)O0.call(e,r)&&!L0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Wo,type:t,key:s,ref:o,props:i,_owner:pf.current}}function YS(t,e){return{$$typeof:Wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wo}function XS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pm=/\/+/g;function Lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XS(""+t.key):e.toString(36)}function Ga(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wo:case US:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Lc(o,0):r,Dm(i)?(n="",t!=null&&(n=t.replace(Pm,"$&/")+"/"),Ga(i,e,n,"",function(u){return u})):i!=null&&(mf(i)&&(i=YS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Lc(s,a);o+=Ga(s,e,n,l,i)}else if(l=QS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Lc(s,a++),o+=Ga(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ea(t,e,n){if(t==null)return t;var r=[],i=0;return Ga(t,r,"","",function(s){return e.call(n,s,i++)}),r}function JS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},Qa={transition:null},ZS={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:pf};ne.Children={map:Ea,forEach:function(t,e,n){Ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ea(t,function(){e++}),e},toArray:function(t){return Ea(t,function(e){return e})||[]},only:function(t){if(!mf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=as;ne.Fragment=zS;ne.Profiler=VS;ne.PureComponent=df;ne.StrictMode=jS;ne.Suspense=qS;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=N0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)O0.call(e,l)&&!L0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Wo,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:HS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:BS,_context:t},t.Consumer=t};ne.createElement=M0;ne.createFactory=function(t){var e=M0.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:WS,render:t}};ne.isValidElement=mf;ne.lazy=function(t){return{$$typeof:GS,_payload:{_status:-1,_result:t},_init:JS}};ne.memo=function(t,e){return{$$typeof:KS,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Qa.transition;Qa.transition={};try{t()}finally{Qa.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return _t.current.useCallback(t,e)};ne.useContext=function(t){return _t.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};ne.useEffect=function(t,e){return _t.current.useEffect(t,e)};ne.useId=function(){return _t.current.useId()};ne.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return _t.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};ne.useRef=function(t){return _t.current.useRef(t)};ne.useState=function(t){return _t.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return _t.current.useTransition()};ne.version="18.2.0";(function(t){t.exports=ne})(I);const Mn=FS(I.exports),Nh=$S({__proto__:null,default:Mn},[I.exports]);var Dh={},$0={exports:{}},zt={},F0={exports:{}},U0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,H){var W=b.length;b.push(H);e:for(;0<W;){var ce=W-1>>>1,N=b[ce];if(0<i(N,H))b[ce]=H,b[W]=N,W=ce;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var H=b[0],W=b.pop();if(W!==H){b[0]=W;e:for(var ce=0,N=b.length,M=N>>>1;ce<M;){var P=2*(ce+1)-1,q=b[P],w=P+1,ee=b[w];if(0>i(q,W))w<N&&0>i(ee,q)?(b[ce]=ee,b[w]=W,ce=w):(b[ce]=q,b[P]=W,ce=P);else if(w<N&&0>i(ee,W))b[ce]=ee,b[w]=W,ce=w;else break e}}return H}function i(b,H){var W=b.sortIndex-H.sortIndex;return W!==0?W:b.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(b){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=b)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function E(b){if(x=!1,v(b),!y)if(n(l)!==null)y=!0,en(_);else{var H=n(u);H!==null&&He(E,H.startTime-b)}}function _(b,H){y=!1,x&&(x=!1,p(L),L=-1),g=!0;var W=d;try{for(v(H),h=n(l);h!==null&&(!(h.expirationTime>H)||b&&!be());){var ce=h.callback;if(typeof ce=="function"){h.callback=null,d=h.priorityLevel;var N=ce(h.expirationTime<=H);H=t.unstable_now(),typeof N=="function"?h.callback=N:h===n(l)&&r(l),v(H)}else r(l);h=n(l)}if(h!==null)var M=!0;else{var P=n(u);P!==null&&He(E,P.startTime-H),M=!1}return M}finally{h=null,d=W,g=!1}}var D=!1,O=null,L=-1,J=5,B=-1;function be(){return!(t.unstable_now()-B<J)}function Te(){if(O!==null){var b=t.unstable_now();B=b;var H=!0;try{H=O(!0,b)}finally{H?De():(D=!1,O=null)}}else D=!1}var De;if(typeof f=="function")De=function(){f(Te)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,Be=wt.port2;wt.port1.onmessage=Te,De=function(){Be.postMessage(null)}}else De=function(){S(Te,0)};function en(b){O=b,D||(D=!0,De())}function He(b,H){L=S(function(){b(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,en(_))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var W=d;d=H;try{return b()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,H){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var W=d;d=b;try{return H()}finally{d=W}},t.unstable_scheduleCallback=function(b,H,W){var ce=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ce+W:ce):W=ce,b){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=W+N,b={id:c++,callback:H,priorityLevel:b,startTime:W,expirationTime:N,sortIndex:-1},W>ce?(b.sortIndex=W,e(u,b),n(l)===null&&b===n(u)&&(x?(p(L),L=-1):x=!0,He(E,W-ce))):(b.sortIndex=N,e(l,b),y||g||(y=!0,en(_))),b},t.unstable_shouldYield=be,t.unstable_wrapCallback=function(b){var H=d;return function(){var W=d;d=H;try{return b.apply(this,arguments)}finally{d=W}}}})(U0);(function(t){t.exports=U0})(F0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0=I.exports,Ft=F0.exports;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j0=new Set,oo={};function ui(t,e){Wi(t,e),Wi(t+"Capture",e)}function Wi(t,e){for(oo[t]=e,t=0;t<e.length;t++)j0.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ph=Object.prototype.hasOwnProperty,e_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Om={},Lm={};function t_(t){return Ph.call(Lm,t)?!0:Ph.call(Om,t)?!1:e_.test(t)?Lm[t]=!0:(Om[t]=!0,!1)}function n_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function r_(t,e,n,r){if(e===null||typeof e>"u"||n_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var gf=/[\-:]([a-z])/g;function yf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gf,yf);st[e]=new kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gf,yf);st[e]=new kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gf,yf);st[e]=new kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new kt(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function vf(t,e,n,r){var i=st.hasOwnProperty(e)?st[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(r_(e,n,i,r)&&(n=null),r||i===null?t_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),wi=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),wf=Symbol.for("react.strict_mode"),Oh=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),B0=Symbol.for("react.context"),xf=Symbol.for("react.forward_ref"),Lh=Symbol.for("react.suspense"),Mh=Symbol.for("react.suspense_list"),Ef=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),H0=Symbol.for("react.offscreen"),Mm=Symbol.iterator;function _s(t){return t===null||typeof t!="object"?null:(t=Mm&&t[Mm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Mc;function Ps(t){if(Mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mc=e&&e[1]||""}return`
`+Mc+t}var $c=!1;function Fc(t,e){if(!t||$c)return"";$c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ps(t):""}function i_(t){switch(t.tag){case 5:return Ps(t.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function $h(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xi:return"Fragment";case wi:return"Portal";case Oh:return"Profiler";case wf:return"StrictMode";case Lh:return"Suspense";case Mh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B0:return(t.displayName||"Context")+".Consumer";case V0:return(t._context.displayName||"Context")+".Provider";case xf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ef:return e=t.displayName||null,e!==null?e:$h(t.type)||"Memo";case Zn:e=t._payload,t=t._init;try{return $h(t(e))}catch{}}return null}function s_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $h(e);case 8:return e===wf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function o_(t){var e=W0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _a(t){t._valueTracker||(t._valueTracker=o_(t))}function q0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=W0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function $m(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function K0(t,e){e=e.checked,e!=null&&vf(t,"checked",e,!1)}function Uh(t,e){K0(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zh(t,e.type,n):e.hasOwnProperty("defaultValue")&&zh(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zh(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Os=Array.isArray;function Li(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Um(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Os(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function G0(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Q0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Q0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ka,Y0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ka=ka||document.createElement("div"),ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},a_=["Webkit","ms","Moz","O"];Object.keys(Bs).forEach(function(t){a_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bs[e]=Bs[t]})});function X0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bs.hasOwnProperty(t)&&Bs[t]?(""+e).trim():e+"px"}function J0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=X0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var l_=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bh(t,e){if(e){if(l_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Hh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wh=null;function Sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qh=null,Mi=null,$i=null;function jm(t){if(t=Go(t)){if(typeof qh!="function")throw Error(C(280));var e=t.stateNode;e&&(e=gu(e),qh(t.stateNode,t.type,e))}}function Z0(t){Mi?$i?$i.push(t):$i=[t]:Mi=t}function ev(){if(Mi){var t=Mi,e=$i;if($i=Mi=null,jm(t),e)for(t=0;t<e.length;t++)jm(e[t])}}function tv(t,e){return t(e)}function nv(){}var Uc=!1;function rv(t,e,n){if(Uc)return t(e,n);Uc=!0;try{return tv(t,e,n)}finally{Uc=!1,(Mi!==null||$i!==null)&&(nv(),ev())}}function lo(t,e){var n=t.stateNode;if(n===null)return null;var r=gu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Kh=!1;if($n)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){Kh=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Kh=!1}function u_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Hs=!1,vl=null,wl=!1,Gh=null,c_={onError:function(t){Hs=!0,vl=t}};function h_(t,e,n,r,i,s,o,a,l){Hs=!1,vl=null,u_.apply(c_,arguments)}function d_(t,e,n,r,i,s,o,a,l){if(h_.apply(this,arguments),Hs){if(Hs){var u=vl;Hs=!1,vl=null}else throw Error(C(198));wl||(wl=!0,Gh=u)}}function ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function iv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vm(t){if(ci(t)!==t)throw Error(C(188))}function f_(t){var e=t.alternate;if(!e){if(e=ci(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vm(i),t;if(s===r)return Vm(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function sv(t){return t=f_(t),t!==null?ov(t):null}function ov(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ov(t);if(e!==null)return e;t=t.sibling}return null}var av=Ft.unstable_scheduleCallback,Bm=Ft.unstable_cancelCallback,p_=Ft.unstable_shouldYield,m_=Ft.unstable_requestPaint,Ne=Ft.unstable_now,g_=Ft.unstable_getCurrentPriorityLevel,_f=Ft.unstable_ImmediatePriority,lv=Ft.unstable_UserBlockingPriority,xl=Ft.unstable_NormalPriority,y_=Ft.unstable_LowPriority,uv=Ft.unstable_IdlePriority,du=null,wn=null;function v_(t){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(du,t,void 0,(t.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:E_,w_=Math.log,x_=Math.LN2;function E_(t){return t>>>=0,t===0?32:31-(w_(t)/x_|0)|0}var Ia=64,Ta=4194304;function Ls(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function El(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ls(a):(s&=o,s!==0&&(r=Ls(s)))}else o=n&~i,o!==0?r=Ls(o):s!==0&&(r=Ls(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ln(e),i=1<<n,r|=t[n],e&=~i;return r}function S_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function __(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ln(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=S_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Qh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cv(){var t=Ia;return Ia<<=1,(Ia&4194240)===0&&(Ia=64),t}function zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ln(e),t[e]=n}function k_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ln(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function kf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function hv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var dv,If,fv,pv,mv,Yh=!1,Ca=[],cr=null,hr=null,dr=null,uo=new Map,co=new Map,tr=[],I_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function Is(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Go(e),e!==null&&If(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function T_(t,e,n,r,i){switch(e){case"focusin":return cr=Is(cr,t,e,n,r,i),!0;case"dragenter":return hr=Is(hr,t,e,n,r,i),!0;case"mouseover":return dr=Is(dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return uo.set(s,Is(uo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,co.set(s,Is(co.get(s)||null,t,e,n,r,i)),!0}return!1}function gv(t){var e=Ur(t.target);if(e!==null){var n=ci(e);if(n!==null){if(e=n.tag,e===13){if(e=iv(n),e!==null){t.blockedOn=e,mv(t.priority,function(){fv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wh=r,n.target.dispatchEvent(r),Wh=null}else return e=Go(n),e!==null&&If(e),t.blockedOn=n,!1;e.shift()}return!0}function Wm(t,e,n){Ya(t)&&n.delete(e)}function C_(){Yh=!1,cr!==null&&Ya(cr)&&(cr=null),hr!==null&&Ya(hr)&&(hr=null),dr!==null&&Ya(dr)&&(dr=null),uo.forEach(Wm),co.forEach(Wm)}function Ts(t,e){t.blockedOn===e&&(t.blockedOn=null,Yh||(Yh=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,C_)))}function ho(t){function e(i){return Ts(i,t)}if(0<Ca.length){Ts(Ca[0],t);for(var n=1;n<Ca.length;n++){var r=Ca[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cr!==null&&Ts(cr,t),hr!==null&&Ts(hr,t),dr!==null&&Ts(dr,t),uo.forEach(e),co.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)gv(n),n.blockedOn===null&&tr.shift()}var Fi=Kn.ReactCurrentBatchConfig,Sl=!0;function A_(t,e,n,r){var i=fe,s=Fi.transition;Fi.transition=null;try{fe=1,Tf(t,e,n,r)}finally{fe=i,Fi.transition=s}}function b_(t,e,n,r){var i=fe,s=Fi.transition;Fi.transition=null;try{fe=4,Tf(t,e,n,r)}finally{fe=i,Fi.transition=s}}function Tf(t,e,n,r){if(Sl){var i=Xh(t,e,n,r);if(i===null)Yc(t,e,r,_l,n),Hm(t,r);else if(T_(i,t,e,n,r))r.stopPropagation();else if(Hm(t,r),e&4&&-1<I_.indexOf(t)){for(;i!==null;){var s=Go(i);if(s!==null&&dv(s),s=Xh(t,e,n,r),s===null&&Yc(t,e,r,_l,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yc(t,e,r,null,n)}}var _l=null;function Xh(t,e,n,r){if(_l=null,t=Sf(r),t=Ur(t),t!==null)if(e=ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=iv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function yv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(g_()){case _f:return 1;case lv:return 4;case xl:case y_:return 16;case uv:return 536870912;default:return 16}default:return 16}}var ar=null,Cf=null,Xa=null;function vv(){if(Xa)return Xa;var t,e=Cf,n=e.length,r,i="value"in ar?ar.value:ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Xa=i.slice(t,1<r?1-r:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Aa(){return!0}function qm(){return!1}function jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Aa:qm,this.isPropagationStopped=qm,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),e}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Af=jt(ls),Ko=Ie({},ls,{view:0,detail:0}),R_=jt(Ko),jc,Vc,Cs,fu=Ie({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cs&&(Cs&&t.type==="mousemove"?(jc=t.screenX-Cs.screenX,Vc=t.screenY-Cs.screenY):Vc=jc=0,Cs=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),Km=jt(fu),N_=Ie({},fu,{dataTransfer:0}),D_=jt(N_),P_=Ie({},Ko,{relatedTarget:0}),Bc=jt(P_),O_=Ie({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),L_=jt(O_),M_=Ie({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$_=jt(M_),F_=Ie({},ls,{data:0}),Gm=jt(F_),U_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=j_[t])?!!e[t]:!1}function bf(){return V_}var B_=Ie({},Ko,{key:function(t){if(t.key){var e=U_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H_=jt(B_),W_=Ie({},fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=jt(W_),q_=Ie({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),K_=jt(q_),G_=Ie({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q_=jt(G_),Y_=Ie({},fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X_=jt(Y_),J_=[9,13,27,32],Rf=$n&&"CompositionEvent"in window,Ws=null;$n&&"documentMode"in document&&(Ws=document.documentMode);var Z_=$n&&"TextEvent"in window&&!Ws,wv=$n&&(!Rf||Ws&&8<Ws&&11>=Ws),Ym=String.fromCharCode(32),Xm=!1;function xv(t,e){switch(t){case"keyup":return J_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ev(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ei=!1;function ek(t,e){switch(t){case"compositionend":return Ev(e);case"keypress":return e.which!==32?null:(Xm=!0,Ym);case"textInput":return t=e.data,t===Ym&&Xm?null:t;default:return null}}function tk(t,e){if(Ei)return t==="compositionend"||!Rf&&xv(t,e)?(t=vv(),Xa=Cf=ar=null,Ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wv&&e.locale!=="ko"?null:e.data;default:return null}}var nk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nk[t.type]:e==="textarea"}function Sv(t,e,n,r){Z0(r),e=kl(e,"onChange"),0<e.length&&(n=new Af("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qs=null,fo=null;function rk(t){Pv(t,0)}function pu(t){var e=ki(t);if(q0(e))return t}function ik(t,e){if(t==="change")return e}var _v=!1;if($n){var Hc;if($n){var Wc="oninput"in document;if(!Wc){var Zm=document.createElement("div");Zm.setAttribute("oninput","return;"),Wc=typeof Zm.oninput=="function"}Hc=Wc}else Hc=!1;_v=Hc&&(!document.documentMode||9<document.documentMode)}function eg(){qs&&(qs.detachEvent("onpropertychange",kv),fo=qs=null)}function kv(t){if(t.propertyName==="value"&&pu(fo)){var e=[];Sv(e,fo,t,Sf(t)),rv(rk,e)}}function sk(t,e,n){t==="focusin"?(eg(),qs=e,fo=n,qs.attachEvent("onpropertychange",kv)):t==="focusout"&&eg()}function ok(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pu(fo)}function ak(t,e){if(t==="click")return pu(e)}function lk(t,e){if(t==="input"||t==="change")return pu(e)}function uk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:uk;function po(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ph.call(e,i)||!hn(t[i],e[i]))return!1}return!0}function tg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ng(t,e){var n=tg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tg(n)}}function Iv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Iv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tv(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ck(t){var e=Tv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Iv(n.ownerDocument.documentElement,n)){if(r!==null&&Nf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ng(n,s);var o=ng(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hk=$n&&"documentMode"in document&&11>=document.documentMode,Si=null,Jh=null,Ks=null,Zh=!1;function rg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zh||Si==null||Si!==yl(r)||(r=Si,"selectionStart"in r&&Nf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ks&&po(Ks,r)||(Ks=r,r=kl(Jh,"onSelect"),0<r.length&&(e=new Af("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Si)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _i={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},qc={},Cv={};$n&&(Cv=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function mu(t){if(qc[t])return qc[t];if(!_i[t])return t;var e=_i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cv)return qc[t]=e[n];return t}var Av=mu("animationend"),bv=mu("animationiteration"),Rv=mu("animationstart"),Nv=mu("transitionend"),Dv=new Map,ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){Dv.set(t,e),ui(e,[t])}for(var Kc=0;Kc<ig.length;Kc++){var Gc=ig[Kc],dk=Gc.toLowerCase(),fk=Gc[0].toUpperCase()+Gc.slice(1);br(dk,"on"+fk)}br(Av,"onAnimationEnd");br(bv,"onAnimationIteration");br(Rv,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(Nv,"onTransitionEnd");Wi("onMouseEnter",["mouseout","mouseover"]);Wi("onMouseLeave",["mouseout","mouseover"]);Wi("onPointerEnter",["pointerout","pointerover"]);Wi("onPointerLeave",["pointerout","pointerover"]);ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ms));function sg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,d_(r,e,void 0,t),t.currentTarget=null}function Pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;sg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;sg(i,a,u),s=l}}}if(wl)throw t=Gh,wl=!1,Gh=null,t}function ve(t,e){var n=e[id];n===void 0&&(n=e[id]=new Set);var r=t+"__bubble";n.has(r)||(Ov(e,t,2,!1),n.add(r))}function Qc(t,e,n){var r=0;e&&(r|=4),Ov(n,t,r,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[Ra]){t[Ra]=!0,j0.forEach(function(n){n!=="selectionchange"&&(pk.has(n)||Qc(n,!1,t),Qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,Qc("selectionchange",!1,e))}}function Ov(t,e,n,r){switch(yv(e)){case 1:var i=A_;break;case 4:i=b_;break;default:i=Tf}n=i.bind(null,e,n,t),i=void 0,!Kh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Yc(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}rv(function(){var u=s,c=Sf(n),h=[];e:{var d=Dv.get(t);if(d!==void 0){var g=Af,y=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":g=H_;break;case"focusin":y="focus",g=Bc;break;case"focusout":y="blur",g=Bc;break;case"beforeblur":case"afterblur":g=Bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=D_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=K_;break;case Av:case bv:case Rv:g=L_;break;case Nv:g=Q_;break;case"scroll":g=R_;break;case"wheel":g=X_;break;case"copy":case"cut":case"paste":g=$_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qm}var x=(e&4)!==0,S=!x&&t==="scroll",p=x?d!==null?d+"Capture":null:d;x=[];for(var f=u,v;f!==null;){v=f;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,p!==null&&(E=lo(f,p),E!=null&&x.push(go(f,E,v)))),S)break;f=f.return}0<x.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:x}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Wh&&(y=n.relatedTarget||n.fromElement)&&(Ur(y)||y[Fn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Ur(y):null,y!==null&&(S=ci(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(x=Km,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(x=Qm,E="onPointerLeave",p="onPointerEnter",f="pointer"),S=g==null?d:ki(g),v=y==null?d:ki(y),d=new x(E,f+"leave",g,n,c),d.target=S,d.relatedTarget=v,E=null,Ur(c)===u&&(x=new x(p,f+"enter",y,n,c),x.target=v,x.relatedTarget=S,E=x),S=E,g&&y)t:{for(x=g,p=y,f=0,v=x;v;v=yi(v))f++;for(v=0,E=p;E;E=yi(E))v++;for(;0<f-v;)x=yi(x),f--;for(;0<v-f;)p=yi(p),v--;for(;f--;){if(x===p||p!==null&&x===p.alternate)break t;x=yi(x),p=yi(p)}x=null}else x=null;g!==null&&og(h,d,g,x,!1),y!==null&&S!==null&&og(h,S,y,x,!0)}}e:{if(d=u?ki(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var _=ik;else if(Jm(d))if(_v)_=lk;else{_=ok;var D=sk}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(_=ak);if(_&&(_=_(t,u))){Sv(h,_,n,c);break e}D&&D(t,d,u),t==="focusout"&&(D=d._wrapperState)&&D.controlled&&d.type==="number"&&zh(d,"number",d.value)}switch(D=u?ki(u):window,t){case"focusin":(Jm(D)||D.contentEditable==="true")&&(Si=D,Jh=u,Ks=null);break;case"focusout":Ks=Jh=Si=null;break;case"mousedown":Zh=!0;break;case"contextmenu":case"mouseup":case"dragend":Zh=!1,rg(h,n,c);break;case"selectionchange":if(hk)break;case"keydown":case"keyup":rg(h,n,c)}var O;if(Rf)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ei?xv(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(wv&&n.locale!=="ko"&&(Ei||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ei&&(O=vv()):(ar=c,Cf="value"in ar?ar.value:ar.textContent,Ei=!0)),D=kl(u,L),0<D.length&&(L=new Gm(L,t,null,n,c),h.push({event:L,listeners:D}),O?L.data=O:(O=Ev(n),O!==null&&(L.data=O)))),(O=Z_?ek(t,n):tk(t,n))&&(u=kl(u,"onBeforeInput"),0<u.length&&(c=new Gm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=O))}Pv(h,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=lo(t,n),s!=null&&r.unshift(go(t,s,i)),s=lo(t,e),s!=null&&r.push(go(t,s,i))),t=t.return}return r}function yi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function og(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=lo(n,s),l!=null&&o.unshift(go(n,l,a))):i||(l=lo(n,s),l!=null&&o.push(go(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mk=/\r\n?/g,gk=/\u0000|\uFFFD/g;function ag(t){return(typeof t=="string"?t:""+t).replace(mk,`
`).replace(gk,"")}function Na(t,e,n){if(e=ag(e),ag(t)!==e&&n)throw Error(C(425))}function Il(){}var ed=null,td=null;function nd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rd=typeof setTimeout=="function"?setTimeout:void 0,yk=typeof clearTimeout=="function"?clearTimeout:void 0,lg=typeof Promise=="function"?Promise:void 0,vk=typeof queueMicrotask=="function"?queueMicrotask:typeof lg<"u"?function(t){return lg.resolve(null).then(t).catch(wk)}:rd;function wk(t){setTimeout(function(){throw t})}function Xc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ho(e)}function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ug(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),yn="__reactFiber$"+us,yo="__reactProps$"+us,Fn="__reactContainer$"+us,id="__reactEvents$"+us,xk="__reactListeners$"+us,Ek="__reactHandles$"+us;function Ur(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fn]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ug(t);t!==null;){if(n=t[yn])return n;t=ug(t)}return e}t=n,n=t.parentNode}return null}function Go(t){return t=t[yn]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function gu(t){return t[yo]||null}var sd=[],Ii=-1;function Rr(t){return{current:t}}function we(t){0>Ii||(t.current=sd[Ii],sd[Ii]=null,Ii--)}function ge(t,e){Ii++,sd[Ii]=t.current,t.current=e}var Ir={},mt=Rr(Ir),Rt=Rr(!1),Xr=Ir;function qi(t,e){var n=t.type.contextTypes;if(!n)return Ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function Tl(){we(Rt),we(mt)}function cg(t,e,n){if(mt.current!==Ir)throw Error(C(168));ge(mt,e),ge(Rt,n)}function Lv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,s_(t)||"Unknown",i));return Ie({},n,r)}function Cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,Xr=mt.current,ge(mt,t),ge(Rt,Rt.current),!0}function hg(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Lv(t,e,Xr),r.__reactInternalMemoizedMergedChildContext=t,we(Rt),we(mt),ge(mt,t)):we(Rt),ge(Rt,n)}var Tn=null,yu=!1,Jc=!1;function Mv(t){Tn===null?Tn=[t]:Tn.push(t)}function Sk(t){yu=!0,Mv(t)}function Nr(){if(!Jc&&Tn!==null){Jc=!0;var t=0,e=fe;try{var n=Tn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tn=null,yu=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(t+1)),av(_f,Nr),i}finally{fe=e,Jc=!1}}return null}var Ti=[],Ci=0,Al=null,bl=0,Ht=[],Wt=0,Jr=null,Cn=1,An="";function Mr(t,e){Ti[Ci++]=bl,Ti[Ci++]=Al,Al=t,bl=e}function $v(t,e,n){Ht[Wt++]=Cn,Ht[Wt++]=An,Ht[Wt++]=Jr,Jr=t;var r=Cn;t=An;var i=32-ln(r)-1;r&=~(1<<i),n+=1;var s=32-ln(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cn=1<<32-ln(e)+i|n<<i|r,An=s+t}else Cn=1<<s|n<<i|r,An=t}function Df(t){t.return!==null&&(Mr(t,1),$v(t,1,0))}function Pf(t){for(;t===Al;)Al=Ti[--Ci],Ti[Ci]=null,bl=Ti[--Ci],Ti[Ci]=null;for(;t===Jr;)Jr=Ht[--Wt],Ht[Wt]=null,An=Ht[--Wt],Ht[Wt]=null,Cn=Ht[--Wt],Ht[Wt]=null}var Lt=null,Ot=null,xe=!1,an=null;function Fv(t,e){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Ot=fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Cn,overflow:An}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Ot=null,!0):!1;default:return!1}}function od(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ad(t){if(xe){var e=Ot;if(e){var n=e;if(!dg(t,e)){if(od(t))throw Error(C(418));e=fr(n.nextSibling);var r=Lt;e&&dg(t,e)?Fv(r,n):(t.flags=t.flags&-4097|2,xe=!1,Lt=t)}}else{if(od(t))throw Error(C(418));t.flags=t.flags&-4097|2,xe=!1,Lt=t}}}function fg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function Da(t){if(t!==Lt)return!1;if(!xe)return fg(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nd(t.type,t.memoizedProps)),e&&(e=Ot)){if(od(t))throw Uv(),Error(C(418));for(;e;)Fv(t,e),e=fr(e.nextSibling)}if(fg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=Lt?fr(t.stateNode.nextSibling):null;return!0}function Uv(){for(var t=Ot;t;)t=fr(t.nextSibling)}function Ki(){Ot=Lt=null,xe=!1}function Of(t){an===null?an=[t]:an.push(t)}var _k=Kn.ReactCurrentBatchConfig;function sn(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Rl=Rr(null),Nl=null,Ai=null,Lf=null;function Mf(){Lf=Ai=Nl=null}function $f(t){var e=Rl.current;we(Rl),t._currentValue=e}function ld(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ui(t,e){Nl=t,Lf=Ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(At=!0),t.firstContext=null)}function Xt(t){var e=t._currentValue;if(Lf!==t)if(t={context:t,memoizedValue:e,next:null},Ai===null){if(Nl===null)throw Error(C(308));Ai=t,Nl.dependencies={lanes:0,firstContext:t}}else Ai=Ai.next=t;return e}var zr=null;function Ff(t){zr===null?zr=[t]:zr.push(t)}function zv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ff(e)):(n.next=i.next,i.next=n),e.interleaved=n,Un(t,r)}function Un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ie&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Un(t,n)}return i=r.interleaved,i===null?(e.next=e,Ff(r)):(e.next=i.next,i.next=e),r.interleaved=e,Un(t,n)}function Za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kf(t,n)}}function pg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dl(t,e,n,r){var i=t.updateQueue;er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,x=a;switch(d=e,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=Ie({},h,d);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ei|=o,t.lanes=o,t.memoizedState=h}}function mg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Vv=new z0.Component().refs;function ud(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),i=gr(t),s=Pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(un(e,t,i,r),Za(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),i=gr(t),s=Pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(un(e,t,i,r),Za(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=gr(t),i=Pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=pr(t,i,r),e!==null&&(un(e,t,r,n),Za(e,t,r))}};function gg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,r)||!po(i,s):!0}function Bv(t,e,n){var r=!1,i=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Xt(s):(i=Nt(e)?Xr:mt.current,r=e.contextTypes,s=(r=r!=null)?qi(t,i):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function yg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function cd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Vv,Uf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xt(s):(s=Nt(e)?Xr:mt.current,i.context=qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ud(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&vu.enqueueReplaceState(i,i.state,null),Dl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Vv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Pa(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vg(t){var e=t._init;return e(t._payload)}function Hv(t){function e(p,f){if(t){var v=p.deletions;v===null?(p.deletions=[f],p.flags|=16):v.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=yr(p,f),p.index=0,p.sibling=null,p}function s(p,f,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<f?(p.flags|=2,f):v):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,v,E){return f===null||f.tag!==6?(f=sh(v,p.mode,E),f.return=p,f):(f=i(f,v),f.return=p,f)}function l(p,f,v,E){var _=v.type;return _===xi?c(p,f,v.props.children,E,v.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Zn&&vg(_)===f.type)?(E=i(f,v.props),E.ref=As(p,f,v),E.return=p,E):(E=sl(v.type,v.key,v.props,null,p.mode,E),E.ref=As(p,f,v),E.return=p,E)}function u(p,f,v,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=oh(v,p.mode,E),f.return=p,f):(f=i(f,v.children||[]),f.return=p,f)}function c(p,f,v,E,_){return f===null||f.tag!==7?(f=Kr(v,p.mode,E,_),f.return=p,f):(f=i(f,v),f.return=p,f)}function h(p,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=sh(""+f,p.mode,v),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Sa:return v=sl(f.type,f.key,f.props,null,p.mode,v),v.ref=As(p,null,f),v.return=p,v;case wi:return f=oh(f,p.mode,v),f.return=p,f;case Zn:var E=f._init;return h(p,E(f._payload),v)}if(Os(f)||_s(f))return f=Kr(f,p.mode,v,null),f.return=p,f;Pa(p,f)}return null}function d(p,f,v,E){var _=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:a(p,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sa:return v.key===_?l(p,f,v,E):null;case wi:return v.key===_?u(p,f,v,E):null;case Zn:return _=v._init,d(p,f,_(v._payload),E)}if(Os(v)||_s(v))return _!==null?null:c(p,f,v,E,null);Pa(p,v)}return null}function g(p,f,v,E,_){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(v)||null,a(f,p,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Sa:return p=p.get(E.key===null?v:E.key)||null,l(f,p,E,_);case wi:return p=p.get(E.key===null?v:E.key)||null,u(f,p,E,_);case Zn:var D=E._init;return g(p,f,v,D(E._payload),_)}if(Os(E)||_s(E))return p=p.get(v)||null,c(f,p,E,_,null);Pa(f,E)}return null}function y(p,f,v,E){for(var _=null,D=null,O=f,L=f=0,J=null;O!==null&&L<v.length;L++){O.index>L?(J=O,O=null):J=O.sibling;var B=d(p,O,v[L],E);if(B===null){O===null&&(O=J);break}t&&O&&B.alternate===null&&e(p,O),f=s(B,f,L),D===null?_=B:D.sibling=B,D=B,O=J}if(L===v.length)return n(p,O),xe&&Mr(p,L),_;if(O===null){for(;L<v.length;L++)O=h(p,v[L],E),O!==null&&(f=s(O,f,L),D===null?_=O:D.sibling=O,D=O);return xe&&Mr(p,L),_}for(O=r(p,O);L<v.length;L++)J=g(O,p,L,v[L],E),J!==null&&(t&&J.alternate!==null&&O.delete(J.key===null?L:J.key),f=s(J,f,L),D===null?_=J:D.sibling=J,D=J);return t&&O.forEach(function(be){return e(p,be)}),xe&&Mr(p,L),_}function x(p,f,v,E){var _=_s(v);if(typeof _!="function")throw Error(C(150));if(v=_.call(v),v==null)throw Error(C(151));for(var D=_=null,O=f,L=f=0,J=null,B=v.next();O!==null&&!B.done;L++,B=v.next()){O.index>L?(J=O,O=null):J=O.sibling;var be=d(p,O,B.value,E);if(be===null){O===null&&(O=J);break}t&&O&&be.alternate===null&&e(p,O),f=s(be,f,L),D===null?_=be:D.sibling=be,D=be,O=J}if(B.done)return n(p,O),xe&&Mr(p,L),_;if(O===null){for(;!B.done;L++,B=v.next())B=h(p,B.value,E),B!==null&&(f=s(B,f,L),D===null?_=B:D.sibling=B,D=B);return xe&&Mr(p,L),_}for(O=r(p,O);!B.done;L++,B=v.next())B=g(O,p,L,B.value,E),B!==null&&(t&&B.alternate!==null&&O.delete(B.key===null?L:B.key),f=s(B,f,L),D===null?_=B:D.sibling=B,D=B);return t&&O.forEach(function(Te){return e(p,Te)}),xe&&Mr(p,L),_}function S(p,f,v,E){if(typeof v=="object"&&v!==null&&v.type===xi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Sa:e:{for(var _=v.key,D=f;D!==null;){if(D.key===_){if(_=v.type,_===xi){if(D.tag===7){n(p,D.sibling),f=i(D,v.props.children),f.return=p,p=f;break e}}else if(D.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Zn&&vg(_)===D.type){n(p,D.sibling),f=i(D,v.props),f.ref=As(p,D,v),f.return=p,p=f;break e}n(p,D);break}else e(p,D);D=D.sibling}v.type===xi?(f=Kr(v.props.children,p.mode,E,v.key),f.return=p,p=f):(E=sl(v.type,v.key,v.props,null,p.mode,E),E.ref=As(p,f,v),E.return=p,p=E)}return o(p);case wi:e:{for(D=v.key;f!==null;){if(f.key===D)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(p,f.sibling),f=i(f,v.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=oh(v,p.mode,E),f.return=p,p=f}return o(p);case Zn:return D=v._init,S(p,f,D(v._payload),E)}if(Os(v))return y(p,f,v,E);if(_s(v))return x(p,f,v,E);Pa(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,v),f.return=p,p=f):(n(p,f),f=sh(v,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return S}var Gi=Hv(!0),Wv=Hv(!1),Qo={},xn=Rr(Qo),vo=Rr(Qo),wo=Rr(Qo);function jr(t){if(t===Qo)throw Error(C(174));return t}function zf(t,e){switch(ge(wo,e),ge(vo,t),ge(xn,Qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vh(e,t)}we(xn),ge(xn,e)}function Qi(){we(xn),we(vo),we(wo)}function qv(t){jr(wo.current);var e=jr(xn.current),n=Vh(e,t.type);e!==n&&(ge(vo,t),ge(xn,n))}function jf(t){vo.current===t&&(we(xn),we(vo))}var _e=Rr(0);function Pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function Vf(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var el=Kn.ReactCurrentDispatcher,eh=Kn.ReactCurrentBatchConfig,Zr=0,ke=null,$e=null,qe=null,Ol=!1,Gs=!1,xo=0,kk=0;function lt(){throw Error(C(321))}function Bf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function Hf(t,e,n,r,i,s){if(Zr=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?Ak:bk,t=n(r,i),Gs){s=0;do{if(Gs=!1,xo=0,25<=s)throw Error(C(301));s+=1,qe=$e=null,e.updateQueue=null,el.current=Rk,t=n(r,i)}while(Gs)}if(el.current=Ll,e=$e!==null&&$e.next!==null,Zr=0,qe=$e=ke=null,Ol=!1,e)throw Error(C(300));return t}function Wf(){var t=xo!==0;return xo=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ke.memoizedState=qe=t:qe=qe.next=t,qe}function Jt(){if($e===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=qe===null?ke.memoizedState:qe.next;if(e!==null)qe=e,$e=t;else{if(t===null)throw Error(C(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},qe===null?ke.memoizedState=qe=t:qe=qe.next=t}return qe}function Eo(t,e){return typeof e=="function"?e(t):e}function th(t){var e=Jt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Zr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ke.lanes|=c,ei|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,hn(r,e.memoizedState)||(At=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nh(t){var e=Jt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);hn(s,e.memoizedState)||(At=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Kv(){}function Gv(t,e){var n=ke,r=Jt(),i=e(),s=!hn(r.memoizedState,i);if(s&&(r.memoizedState=i,At=!0),r=r.queue,qf(Xv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,So(9,Yv.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(C(349));(Zr&30)!==0||Qv(n,e,i)}return i}function Qv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yv(t,e,n,r){e.value=n,e.getSnapshot=r,Jv(e)&&Zv(t)}function Xv(t,e,n){return n(function(){Jv(e)&&Zv(t)})}function Jv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function Zv(t){var e=Un(t,1);e!==null&&un(e,t,1,-1)}function wg(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},e.queue=t,t=t.dispatch=Ck.bind(null,ke,t),[e.memoizedState,t]}function So(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function e1(){return Jt().memoizedState}function tl(t,e,n,r){var i=gn();ke.flags|=t,i.memoizedState=So(1|e,n,void 0,r===void 0?null:r)}function wu(t,e,n,r){var i=Jt();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&Bf(r,o.deps)){i.memoizedState=So(e,n,s,r);return}}ke.flags|=t,i.memoizedState=So(1|e,n,s,r)}function xg(t,e){return tl(8390656,8,t,e)}function qf(t,e){return wu(2048,8,t,e)}function t1(t,e){return wu(4,2,t,e)}function n1(t,e){return wu(4,4,t,e)}function r1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function i1(t,e,n){return n=n!=null?n.concat([t]):null,wu(4,4,r1.bind(null,e,t),n)}function Kf(){}function s1(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function o1(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function a1(t,e,n){return(Zr&21)===0?(t.baseState&&(t.baseState=!1,At=!0),t.memoizedState=n):(hn(n,e)||(n=cv(),ke.lanes|=n,ei|=n,t.baseState=!0),e)}function Ik(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=eh.transition;eh.transition={};try{t(!1),e()}finally{fe=n,eh.transition=r}}function l1(){return Jt().memoizedState}function Tk(t,e,n){var r=gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},u1(t))c1(e,n);else if(n=zv(t,e,n,r),n!==null){var i=St();un(n,t,r,i),h1(n,e,r)}}function Ck(t,e,n){var r=gr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(u1(t))c1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,hn(a,o)){var l=e.interleaved;l===null?(i.next=i,Ff(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=zv(t,e,i,r),n!==null&&(i=St(),un(n,t,r,i),h1(n,e,r))}}function u1(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function c1(t,e){Gs=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function h1(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kf(t,n)}}var Ll={readContext:Xt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},Ak={readContext:Xt,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:Xt,useEffect:xg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,r1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Tk.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:wg,useDebugValue:Kf,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=wg(!1),e=t[0];return t=Ik.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=gn();if(xe){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Ge===null)throw Error(C(349));(Zr&30)!==0||Qv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xg(Xv.bind(null,r,s,t),[t]),r.flags|=2048,So(9,Yv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gn(),e=Ge.identifierPrefix;if(xe){var n=An,r=Cn;n=(r&~(1<<32-ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bk={readContext:Xt,useCallback:s1,useContext:Xt,useEffect:qf,useImperativeHandle:i1,useInsertionEffect:t1,useLayoutEffect:n1,useMemo:o1,useReducer:th,useRef:e1,useState:function(){return th(Eo)},useDebugValue:Kf,useDeferredValue:function(t){var e=Jt();return a1(e,$e.memoizedState,t)},useTransition:function(){var t=th(Eo)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:Kv,useSyncExternalStore:Gv,useId:l1,unstable_isNewReconciler:!1},Rk={readContext:Xt,useCallback:s1,useContext:Xt,useEffect:qf,useImperativeHandle:i1,useInsertionEffect:t1,useLayoutEffect:n1,useMemo:o1,useReducer:nh,useRef:e1,useState:function(){return nh(Eo)},useDebugValue:Kf,useDeferredValue:function(t){var e=Jt();return $e===null?e.memoizedState=t:a1(e,$e.memoizedState,t)},useTransition:function(){var t=nh(Eo)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:Kv,useSyncExternalStore:Gv,useId:l1,unstable_isNewReconciler:!1};function Yi(t,e){try{var n="",r=e;do n+=i_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function rh(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Nk=typeof WeakMap=="function"?WeakMap:Map;function d1(t,e,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$l||($l=!0,Ed=r),hd(t,e)},n}function f1(t,e,n){n=Pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hd(t,e),typeof r!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Eg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Nk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Wk.bind(null,t,e,n),e.then(t,t))}function Sg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _g(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pn(-1,1),e.tag=2,pr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Dk=Kn.ReactCurrentOwner,At=!1;function xt(t,e,n,r){e.child=t===null?Wv(e,null,n,r):Gi(e,t.child,n,r)}function kg(t,e,n,r,i){n=n.render;var s=e.ref;return Ui(e,i),r=Hf(t,e,n,r,s,i),n=Wf(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(xe&&n&&Df(e),e.flags|=1,xt(t,e,r,i),e.child)}function Ig(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!tp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,p1(t,e,s,r,i)):(t=sl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,r)&&t.ref===e.ref)return zn(t,e,i)}return e.flags|=1,t=yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function p1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(po(s,r)&&t.ref===e.ref)if(At=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(At=!0);else return e.lanes=t.lanes,zn(t,e,i)}return dd(t,e,n,r,i)}function m1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ri,Pt),Pt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Ri,Pt),Pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Ri,Pt),Pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Ri,Pt),Pt|=r;return xt(t,e,i,n),e.child}function g1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dd(t,e,n,r,i){var s=Nt(n)?Xr:mt.current;return s=qi(e,s),Ui(e,i),n=Hf(t,e,n,r,s,i),r=Wf(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(xe&&r&&Df(e),e.flags|=1,xt(t,e,n,i),e.child)}function Tg(t,e,n,r,i){if(Nt(n)){var s=!0;Cl(e)}else s=!1;if(Ui(e,i),e.stateNode===null)nl(t,e),Bv(e,n,r),cd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xt(u):(u=Nt(n)?Xr:mt.current,u=qi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&yg(e,o,r,u),er=!1;var d=e.memoizedState;o.state=d,Dl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Rt.current||er?(typeof c=="function"&&(ud(e,n,c,r),l=e.memoizedState),(a=er||gg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,jv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:sn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xt(l):(l=Nt(n)?Xr:mt.current,l=qi(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&yg(e,o,r,l),er=!1,d=e.memoizedState,o.state=d,Dl(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Rt.current||er?(typeof g=="function"&&(ud(e,n,g,r),y=e.memoizedState),(u=er||gg(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return fd(t,e,n,r,s,i)}function fd(t,e,n,r,i,s){g1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hg(e,n,!1),zn(t,e,s);r=e.stateNode,Dk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gi(e,t.child,null,s),e.child=Gi(e,null,a,s)):xt(t,e,a,s),e.memoizedState=r.state,i&&hg(e,n,!0),e.child}function y1(t){var e=t.stateNode;e.pendingContext?cg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cg(t,e.context,!1),zf(t,e.containerInfo)}function Cg(t,e,n,r,i){return Ki(),Of(i),e.flags|=256,xt(t,e,n,r),e.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function md(t){return{baseLanes:t,cachePool:null,transitions:null}}function v1(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(_e,i&1),t===null)return ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Su(o,r,0,null),t=Kr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=md(n),e.memoizedState=pd,t):Gf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Pk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=yr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=yr(a,s):(s=Kr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?md(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pd,r}return s=t.child,t=s.sibling,r=yr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Gf(t,e){return e=Su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oa(t,e,n,r){return r!==null&&Of(r),Gi(e,t.child,null,n),t=Gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Pk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=rh(Error(C(422))),Oa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Su({mode:"visible",children:r.children},i,0,null),s=Kr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Gi(e,t.child,null,o),e.child.memoizedState=md(o),e.memoizedState=pd,s);if((e.mode&1)===0)return Oa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=rh(s,r,void 0),Oa(t,e,o,r)}if(a=(o&t.childLanes)!==0,At||a){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(t,i),un(r,t,i,-1))}return ep(),r=rh(Error(C(421))),Oa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=fr(i.nextSibling),Lt=e,xe=!0,an=null,t!==null&&(Ht[Wt++]=Cn,Ht[Wt++]=An,Ht[Wt++]=Jr,Cn=t.id,An=t.overflow,Jr=e),e=Gf(e,r.children),e.flags|=4096,e)}function Ag(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ld(t.return,e,n)}function ih(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function w1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(xt(t,e,r.children,n),r=_e.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ag(t,n,e);else if(t.tag===19)Ag(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(_e,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ih(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ih(e,!0,n,null,s);break;case"together":ih(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ei|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ok(t,e,n){switch(e.tag){case 3:y1(e),Ki();break;case 5:qv(e);break;case 1:Nt(e.type)&&Cl(e);break;case 4:zf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Rl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(_e,_e.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?v1(t,e,n):(ge(_e,_e.current&1),t=zn(t,e,n),t!==null?t.sibling:null);ge(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return w1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,m1(t,e,n)}return zn(t,e,n)}var x1,gd,E1,S1;x1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gd=function(){};E1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,jr(xn.current);var s=null;switch(n){case"input":i=Fh(t,i),r=Fh(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=jh(t,i),r=jh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Il)}Bh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};S1=function(t,e,n,r){n!==r&&(e.flags|=4)};function bs(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lk(t,e,n){var r=e.pendingProps;switch(Pf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return Nt(e.type)&&Tl(),ut(e),null;case 3:return r=e.stateNode,Qi(),we(Rt),we(mt),Vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,an!==null&&(kd(an),an=null))),gd(t,e),ut(e),null;case 5:jf(e);var i=jr(wo.current);if(n=e.type,t!==null&&e.stateNode!=null)E1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return ut(e),null}if(t=jr(xn.current),Da(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yn]=e,r[yo]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Ms.length;i++)ve(Ms[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":$m(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":Um(r,s),ve("invalid",r)}Bh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Na(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Na(r.textContent,a,t),i=["children",""+a]):oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":_a(r),Fm(r,s,!0);break;case"textarea":_a(r),zm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Il)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Q0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[yo]=r,x1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Hh(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ms.length;i++)ve(Ms[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":$m(t,r),i=Fh(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Um(t,r),i=jh(t,r),ve("invalid",t);break;default:i=r}Bh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?J0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Y0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ao(t,l):typeof l=="number"&&ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ve("scroll",t):l!=null&&vf(t,s,l,o))}switch(n){case"input":_a(t),Fm(t,r,!1);break;case"textarea":_a(t),zm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Li(t,!!r.multiple,s,!1):r.defaultValue!=null&&Li(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)S1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=jr(wo.current),jr(xn.current),Da(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(s=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:Na(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Na(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return ut(e),null;case 13:if(we(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Ot!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Uv(),Ki(),e.flags|=98560,s=!1;else if(s=Da(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[yn]=e}else Ki(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else an!==null&&(kd(an),an=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(_e.current&1)!==0?Fe===0&&(Fe=3):ep())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return Qi(),gd(t,e),t===null&&mo(e.stateNode.containerInfo),ut(e),null;case 10:return $f(e.type._context),ut(e),null;case 17:return Nt(e.type)&&Tl(),ut(e),null;case 19:if(we(_e),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bs(s,!1);else{if(Fe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Pl(t),o!==null){for(e.flags|=128,bs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>Xi&&(e.flags|=128,r=!0,bs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return ut(e),null}else 2*Ne()-s.renderingStartTime>Xi&&n!==1073741824&&(e.flags|=128,r=!0,bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=_e.current,ge(_e,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return Zf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Pt&1073741824)!==0&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function Mk(t,e){switch(Pf(e),e.tag){case 1:return Nt(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qi(),we(Rt),we(mt),Vf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return jf(e),null;case 13:if(we(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(_e),null;case 4:return Qi(),null;case 10:return $f(e.type._context),null;case 22:case 23:return Zf(),null;case 24:return null;default:return null}}var La=!1,ht=!1,$k=typeof WeakSet=="function"?WeakSet:Set,$=null;function bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function yd(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var bg=!1;function Fk(t,e){if(ed=Sl,t=Tv(),Nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(td={focusedElem:t,selectionRange:n},Sl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,S=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?x:sn(e.type,x),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){Ce(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return y=bg,bg=!1,y}function Qs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yd(e,n,s)}i=i.next}while(i!==r)}}function xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _1(t){var e=t.alternate;e!==null&&(t.alternate=null,_1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[yo],delete e[id],delete e[xk],delete e[Ek])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k1(t){return t.tag===5||t.tag===3||t.tag===4}function Rg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(r!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}function xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}var et=null,on=!1;function Xn(t,e,n){for(n=n.child;n!==null;)I1(t,e,n),n=n.sibling}function I1(t,e,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(du,n)}catch{}switch(n.tag){case 5:ht||bi(n,e);case 6:var r=et,i=on;et=null,Xn(t,e,n),et=r,on=i,et!==null&&(on?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(on?(t=et,n=n.stateNode,t.nodeType===8?Xc(t.parentNode,n):t.nodeType===1&&Xc(t,n),ho(t)):Xc(et,n.stateNode));break;case 4:r=et,i=on,et=n.stateNode.containerInfo,on=!0,Xn(t,e,n),et=r,on=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&yd(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!ht&&(bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ce(n,e,a)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,Xn(t,e,n),ht=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function Ng(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $k),e.forEach(function(r){var i=Kk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,on=!1;break e;case 3:et=a.stateNode.containerInfo,on=!0;break e;case 4:et=a.stateNode.containerInfo,on=!0;break e}a=a.return}if(et===null)throw Error(C(160));I1(s,o,i),et=null,on=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T1(e,t),e=e.sibling}function T1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),mn(t),r&4){try{Qs(3,t,t.return),xu(3,t)}catch(x){Ce(t,t.return,x)}try{Qs(5,t,t.return)}catch(x){Ce(t,t.return,x)}}break;case 1:nn(e,t),mn(t),r&512&&n!==null&&bi(n,n.return);break;case 5:if(nn(e,t),mn(t),r&512&&n!==null&&bi(n,n.return),t.flags&32){var i=t.stateNode;try{ao(i,"")}catch(x){Ce(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&K0(i,s),Hh(a,o);var u=Hh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?J0(i,h):c==="dangerouslySetInnerHTML"?Y0(i,h):c==="children"?ao(i,h):vf(i,c,h,u)}switch(a){case"input":Uh(i,s);break;case"textarea":G0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Li(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Li(i,!!s.multiple,s.defaultValue,!0):Li(i,!!s.multiple,s.multiple?[]:"",!1))}i[yo]=s}catch(x){Ce(t,t.return,x)}}break;case 6:if(nn(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Ce(t,t.return,x)}}break;case 3:if(nn(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(x){Ce(t,t.return,x)}break;case 4:nn(e,t),mn(t);break;case 13:nn(e,t),mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xf=Ne())),r&4&&Ng(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ht=(u=ht)||c,nn(e,t),ht=u):nn(e,t),mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for($=t,c=t.child;c!==null;){for(h=$=c;$!==null;){switch(d=$,g=d.child,d.tag){case 0:case 11:case 14:case 15:Qs(4,d,d.return);break;case 1:bi(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){Ce(r,n,x)}}break;case 5:bi(d,d.return);break;case 22:if(d.memoizedState!==null){Pg(h);continue}}g!==null?(g.return=d,$=g):Pg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=X0("display",o))}catch(x){Ce(t,t.return,x)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){Ce(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:nn(e,t),mn(t),r&4&&Ng(t);break;case 21:break;default:nn(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(k1(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ao(i,""),r.flags&=-33);var s=Rg(t);xd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Rg(t);wd(t,a,o);break;default:throw Error(C(161))}}catch(l){Ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Uk(t,e,n){$=t,C1(t)}function C1(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||La;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ht;a=La;var u=ht;if(La=o,(ht=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?Og(i):l!==null?(l.return=o,$=l):Og(i);for(;s!==null;)$=s,C1(s),s=s.sibling;$=i,La=a,ht=u}Dg(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,$=s):Dg(t)}}function Dg(t){for(;$!==null;){var e=$;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:ht||xu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ho(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ht||e.flags&512&&vd(e)}catch(d){Ce(e,e.return,d)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Pg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Og(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xu(4,e)}catch(l){Ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ce(e,i,l)}}var s=e.return;try{vd(e)}catch(l){Ce(e,s,l)}break;case 5:var o=e.return;try{vd(e)}catch(l){Ce(e,o,l)}}}catch(l){Ce(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var zk=Math.ceil,Ml=Kn.ReactCurrentDispatcher,Qf=Kn.ReactCurrentOwner,Kt=Kn.ReactCurrentBatchConfig,ie=0,Ge=null,Le=null,rt=0,Pt=0,Ri=Rr(0),Fe=0,_o=null,ei=0,Eu=0,Yf=0,Ys=null,Tt=null,Xf=0,Xi=1/0,In=null,$l=!1,Ed=null,mr=null,Ma=!1,lr=null,Fl=0,Xs=0,Sd=null,rl=-1,il=0;function St(){return(ie&6)!==0?Ne():rl!==-1?rl:rl=Ne()}function gr(t){return(t.mode&1)===0?1:(ie&2)!==0&&rt!==0?rt&-rt:_k.transition!==null?(il===0&&(il=cv()),il):(t=fe,t!==0||(t=window.event,t=t===void 0?16:yv(t.type)),t)}function un(t,e,n,r){if(50<Xs)throw Xs=0,Sd=null,Error(C(185));qo(t,n,r),((ie&2)===0||t!==Ge)&&(t===Ge&&((ie&2)===0&&(Eu|=n),Fe===4&&nr(t,rt)),Dt(t,r),n===1&&ie===0&&(e.mode&1)===0&&(Xi=Ne()+500,yu&&Nr()))}function Dt(t,e){var n=t.callbackNode;__(t,e);var r=El(t,t===Ge?rt:0);if(r===0)n!==null&&Bm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bm(n),e===1)t.tag===0?Sk(Lg.bind(null,t)):Mv(Lg.bind(null,t)),vk(function(){(ie&6)===0&&Nr()}),n=null;else{switch(hv(r)){case 1:n=_f;break;case 4:n=lv;break;case 16:n=xl;break;case 536870912:n=uv;break;default:n=xl}n=L1(n,A1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function A1(t,e){if(rl=-1,il=0,(ie&6)!==0)throw Error(C(327));var n=t.callbackNode;if(zi()&&t.callbackNode!==n)return null;var r=El(t,t===Ge?rt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Ul(t,r);else{e=r;var i=ie;ie|=2;var s=R1();(Ge!==t||rt!==e)&&(In=null,Xi=Ne()+500,qr(t,e));do try{Bk();break}catch(a){b1(t,a)}while(1);Mf(),Ml.current=s,ie=i,Le!==null?e=0:(Ge=null,rt=0,e=Fe)}if(e!==0){if(e===2&&(i=Qh(t),i!==0&&(r=i,e=_d(t,i))),e===1)throw n=_o,qr(t,0),nr(t,r),Dt(t,Ne()),n;if(e===6)nr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!jk(i)&&(e=Ul(t,r),e===2&&(s=Qh(t),s!==0&&(r=s,e=_d(t,s))),e===1))throw n=_o,qr(t,0),nr(t,r),Dt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:$r(t,Tt,In);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=Xf+500-Ne(),10<e)){if(El(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rd($r.bind(null,t,Tt,In),e);break}$r(t,Tt,In);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ln(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zk(r/1960))-r,10<r){t.timeoutHandle=rd($r.bind(null,t,Tt,In),r);break}$r(t,Tt,In);break;case 5:$r(t,Tt,In);break;default:throw Error(C(329))}}}return Dt(t,Ne()),t.callbackNode===n?A1.bind(null,t):null}function _d(t,e){var n=Ys;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=Tt,Tt=n,e!==null&&kd(e)),t}function kd(t){Tt===null?Tt=t:Tt.push.apply(Tt,t)}function jk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~Yf,e&=~Eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ln(e),r=1<<n;t[n]=-1,e&=~r}}function Lg(t){if((ie&6)!==0)throw Error(C(327));zi();var e=El(t,0);if((e&1)===0)return Dt(t,Ne()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var r=Qh(t);r!==0&&(e=r,n=_d(t,r))}if(n===1)throw n=_o,qr(t,0),nr(t,e),Dt(t,Ne()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$r(t,Tt,In),Dt(t,Ne()),null}function Jf(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Xi=Ne()+500,yu&&Nr())}}function ti(t){lr!==null&&lr.tag===0&&(ie&6)===0&&zi();var e=ie;ie|=1;var n=Kt.transition,r=fe;try{if(Kt.transition=null,fe=1,t)return t()}finally{fe=r,Kt.transition=n,ie=e,(ie&6)===0&&Nr()}}function Zf(){Pt=Ri.current,we(Ri)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yk(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Pf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tl();break;case 3:Qi(),we(Rt),we(mt),Vf();break;case 5:jf(r);break;case 4:Qi();break;case 13:we(_e);break;case 19:we(_e);break;case 10:$f(r.type._context);break;case 22:case 23:Zf()}n=n.return}if(Ge=t,Le=t=yr(t.current,null),rt=Pt=e,Fe=0,_o=null,Yf=Eu=ei=0,Tt=Ys=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zr=null}return t}function b1(t,e){do{var n=Le;try{if(Mf(),el.current=Ll,Ol){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ol=!1}if(Zr=0,qe=$e=ke=null,Gs=!1,xo=0,Qf.current=null,n===null||n.return===null){Fe=1,_o=e,Le=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Sg(o);if(g!==null){g.flags&=-257,_g(g,o,a,s,e),g.mode&1&&Eg(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var x=new Set;x.add(l),e.updateQueue=x}else y.add(l);break e}else{if((e&1)===0){Eg(s,u,e),ep();break e}l=Error(C(426))}}else if(xe&&a.mode&1){var S=Sg(o);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),_g(S,o,a,s,e),Of(Yi(l,a));break e}}s=l=Yi(l,a),Fe!==4&&(Fe=2),Ys===null?Ys=[s]:Ys.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=d1(s,l,e);pg(s,p);break e;case 1:a=l;var f=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(mr===null||!mr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=f1(s,a,e);pg(s,E);break e}}s=s.return}while(s!==null)}D1(n)}catch(_){e=_,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function R1(){var t=Ml.current;return Ml.current=Ll,t===null?Ll:t}function ep(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ge===null||(ei&268435455)===0&&(Eu&268435455)===0||nr(Ge,rt)}function Ul(t,e){var n=ie;ie|=2;var r=R1();(Ge!==t||rt!==e)&&(In=null,qr(t,e));do try{Vk();break}catch(i){b1(t,i)}while(1);if(Mf(),ie=n,Ml.current=r,Le!==null)throw Error(C(261));return Ge=null,rt=0,Fe}function Vk(){for(;Le!==null;)N1(Le)}function Bk(){for(;Le!==null&&!p_();)N1(Le)}function N1(t){var e=O1(t.alternate,t,Pt);t.memoizedProps=t.pendingProps,e===null?D1(t):Le=e,Qf.current=null}function D1(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Lk(n,e,Pt),n!==null){Le=n;return}}else{if(n=Mk(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Le=null;return}}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Fe===0&&(Fe=5)}function $r(t,e,n){var r=fe,i=Kt.transition;try{Kt.transition=null,fe=1,Hk(t,e,n,r)}finally{Kt.transition=i,fe=r}return null}function Hk(t,e,n,r){do zi();while(lr!==null);if((ie&6)!==0)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(k_(t,s),t===Ge&&(Le=Ge=null,rt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ma||(Ma=!0,L1(xl,function(){return zi(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Kt.transition,Kt.transition=null;var o=fe;fe=1;var a=ie;ie|=4,Qf.current=null,Fk(t,n),T1(n,t),ck(td),Sl=!!ed,td=ed=null,t.current=n,Uk(n),m_(),ie=a,fe=o,Kt.transition=s}else t.current=n;if(Ma&&(Ma=!1,lr=t,Fl=i),s=t.pendingLanes,s===0&&(mr=null),v_(n.stateNode),Dt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($l)throw $l=!1,t=Ed,Ed=null,t;return(Fl&1)!==0&&t.tag!==0&&zi(),s=t.pendingLanes,(s&1)!==0?t===Sd?Xs++:(Xs=0,Sd=t):Xs=0,Nr(),null}function zi(){if(lr!==null){var t=hv(Fl),e=Kt.transition,n=fe;try{if(Kt.transition=null,fe=16>t?16:t,lr===null)var r=!1;else{if(t=lr,lr=null,Fl=0,(ie&6)!==0)throw Error(C(331));var i=ie;for(ie|=4,$=t.current;$!==null;){var s=$,o=s.child;if(($.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:Qs(8,c,s)}var h=c.child;if(h!==null)h.return=c,$=h;else for(;$!==null;){c=$;var d=c.sibling,g=c.return;if(_1(c),c===u){$=null;break}if(d!==null){d.return=g,$=d;break}$=g}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}$=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Qs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,$=p;break e}$=s.return}}var f=t.current;for($=f;$!==null;){o=$;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,$=v;else e:for(o=f;$!==null;){if(a=$,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:xu(9,a)}}catch(_){Ce(a,a.return,_)}if(a===o){$=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,$=E;break e}$=a.return}}if(ie=i,Nr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(du,t)}catch{}r=!0}return r}finally{fe=n,Kt.transition=e}}return!1}function Mg(t,e,n){e=Yi(n,e),e=d1(t,e,1),t=pr(t,e,1),e=St(),t!==null&&(qo(t,1,e),Dt(t,e))}function Ce(t,e,n){if(t.tag===3)Mg(t,t,n);else for(;e!==null;){if(e.tag===3){Mg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mr===null||!mr.has(r))){t=Yi(n,t),t=f1(e,t,1),e=pr(e,t,1),t=St(),e!==null&&(qo(e,1,t),Dt(e,t));break}}e=e.return}}function Wk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(rt&n)===n&&(Fe===4||Fe===3&&(rt&130023424)===rt&&500>Ne()-Xf?qr(t,0):Yf|=n),Dt(t,e)}function P1(t,e){e===0&&((t.mode&1)===0?e=1:(e=Ta,Ta<<=1,(Ta&130023424)===0&&(Ta=4194304)));var n=St();t=Un(t,e),t!==null&&(qo(t,e,n),Dt(t,n))}function qk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),P1(t,n)}function Kk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),P1(t,n)}var O1;O1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)At=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return At=!1,Ok(t,e,n);At=(t.flags&131072)!==0}else At=!1,xe&&(e.flags&1048576)!==0&&$v(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;nl(t,e),t=e.pendingProps;var i=qi(e,mt.current);Ui(e,n),i=Hf(null,e,r,t,i,n);var s=Wf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,Cl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Uf(e),i.updater=vu,e.stateNode=i,i._reactInternals=e,cd(e,r,t,n),e=fd(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&Df(e),xt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Qk(r),t=sn(r,t),i){case 0:e=dd(null,e,r,t,n);break e;case 1:e=Tg(null,e,r,t,n);break e;case 11:e=kg(null,e,r,t,n);break e;case 14:e=Ig(null,e,r,sn(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),dd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Tg(t,e,r,i,n);case 3:e:{if(y1(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,jv(t,e),Dl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yi(Error(C(423)),e),e=Cg(t,e,r,n,i);break e}else if(r!==i){i=Yi(Error(C(424)),e),e=Cg(t,e,r,n,i);break e}else for(Ot=fr(e.stateNode.containerInfo.firstChild),Lt=e,xe=!0,an=null,n=Wv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===i){e=zn(t,e,n);break e}xt(t,e,r,n)}e=e.child}return e;case 5:return qv(e),t===null&&ad(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,nd(r,i)?o=null:s!==null&&nd(r,s)&&(e.flags|=32),g1(t,e),xt(t,e,o,n),e.child;case 6:return t===null&&ad(e),null;case 13:return v1(t,e,n);case 4:return zf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gi(e,null,r,n):xt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),kg(t,e,r,i,n);case 7:return xt(t,e,e.pendingProps,n),e.child;case 8:return xt(t,e,e.pendingProps.children,n),e.child;case 12:return xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Rl,r._currentValue),r._currentValue=o,s!==null)if(hn(s.value,o)){if(s.children===i.children&&!Rt.current){e=zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Pn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ld(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ld(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ui(e,n),i=Xt(i),r=r(i),e.flags|=1,xt(t,e,r,n),e.child;case 14:return r=e.type,i=sn(r,e.pendingProps),i=sn(r.type,i),Ig(t,e,r,i,n);case 15:return p1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),nl(t,e),e.tag=1,Nt(r)?(t=!0,Cl(e)):t=!1,Ui(e,n),Bv(e,r,i),cd(e,r,i,n),fd(null,e,r,!0,t,n);case 19:return w1(t,e,n);case 22:return m1(t,e,n)}throw Error(C(156,e.tag))};function L1(t,e){return av(t,e)}function Gk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(t,e,n,r){return new Gk(t,e,n,r)}function tp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qk(t){if(typeof t=="function")return tp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xf)return 11;if(t===Ef)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")tp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xi:return Kr(n.children,i,s,e);case wf:o=8,i|=8;break;case Oh:return t=qt(12,n,e,i|2),t.elementType=Oh,t.lanes=s,t;case Lh:return t=qt(13,n,e,i),t.elementType=Lh,t.lanes=s,t;case Mh:return t=qt(19,n,e,i),t.elementType=Mh,t.lanes=s,t;case H0:return Su(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V0:o=10;break e;case B0:o=9;break e;case xf:o=11;break e;case Ef:o=14;break e;case Zn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Kr(t,e,n,r){return t=qt(7,t,r,e),t.lanes=n,t}function Su(t,e,n,r){return t=qt(22,t,r,e),t.elementType=H0,t.lanes=n,t.stateNode={isHidden:!1},t}function sh(t,e,n){return t=qt(6,t,null,e),t.lanes=n,t}function oh(t,e,n){return e=qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function np(t,e,n,r,i,s,o,a,l){return t=new Yk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uf(s),t}function Xk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function M1(t){if(!t)return Ir;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Nt(n))return Lv(t,n,e)}return e}function $1(t,e,n,r,i,s,o,a,l){return t=np(n,r,!0,t,i,s,o,a,l),t.context=M1(null),n=t.current,r=St(),i=gr(n),s=Pn(r,i),s.callback=e!=null?e:null,pr(n,s,i),t.current.lanes=i,qo(t,i,r),Dt(t,r),t}function _u(t,e,n,r){var i=e.current,s=St(),o=gr(i);return n=M1(n),e.context===null?e.context=n:e.pendingContext=n,e=Pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pr(i,e,o),t!==null&&(un(t,i,o,s),Za(t,i,o)),o}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $g(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rp(t,e){$g(t,e),(t=t.alternate)&&$g(t,e)}function Jk(){return null}var F1=typeof reportError=="function"?reportError:function(t){console.error(t)};function ip(t){this._internalRoot=t}ku.prototype.render=ip.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));_u(t,e,null,null)};ku.prototype.unmount=ip.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ti(function(){_u(null,t,null,null)}),e[Fn]=null}};function ku(t){this._internalRoot=t}ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=pv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&gv(t)}};function sp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fg(){}function Zk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=zl(o);s.call(u)}}var o=$1(e,r,t,0,null,!1,!1,"",Fg);return t._reactRootContainer=o,t[Fn]=o.current,mo(t.nodeType===8?t.parentNode:t),ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=zl(l);a.call(u)}}var l=np(t,0,!1,null,null,!1,!1,"",Fg);return t._reactRootContainer=l,t[Fn]=l.current,mo(t.nodeType===8?t.parentNode:t),ti(function(){_u(e,l,n,r)}),l}function Tu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=zl(o);a.call(l)}}_u(e,o,t,i)}else o=Zk(n,e,t,i,r);return zl(o)}dv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ls(e.pendingLanes);n!==0&&(kf(e,n|1),Dt(e,Ne()),(ie&6)===0&&(Xi=Ne()+500,Nr()))}break;case 13:ti(function(){var r=Un(t,1);if(r!==null){var i=St();un(r,t,1,i)}}),rp(t,1)}};If=function(t){if(t.tag===13){var e=Un(t,134217728);if(e!==null){var n=St();un(e,t,134217728,n)}rp(t,134217728)}};fv=function(t){if(t.tag===13){var e=gr(t),n=Un(t,e);if(n!==null){var r=St();un(n,t,e,r)}rp(t,e)}};pv=function(){return fe};mv=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};qh=function(t,e,n){switch(e){case"input":if(Uh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gu(r);if(!i)throw Error(C(90));q0(r),Uh(r,i)}}}break;case"textarea":G0(t,n);break;case"select":e=n.value,e!=null&&Li(t,!!n.multiple,e,!1)}};tv=Jf;nv=ti;var eI={usingClientEntryPoint:!1,Events:[Go,ki,gu,Z0,ev,Jf]},Rs={findFiberByHostInstance:Ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tI={bundleType:Rs.bundleType,version:Rs.version,rendererPackageName:Rs.rendererPackageName,rendererConfig:Rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sv(t),t===null?null:t.stateNode},findFiberByHostInstance:Rs.findFiberByHostInstance||Jk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{du=$a.inject(tI),wn=$a}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eI;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sp(e))throw Error(C(200));return Xk(t,e,null,n)};zt.createRoot=function(t,e){if(!sp(t))throw Error(C(299));var n=!1,r="",i=F1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=np(t,1,!1,null,null,n,!1,r,i),t[Fn]=e.current,mo(t.nodeType===8?t.parentNode:t),new ip(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=sv(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return ti(t)};zt.hydrate=function(t,e,n){if(!Iu(e))throw Error(C(200));return Tu(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!sp(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=F1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$1(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Fn]=e.current,mo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ku(e)};zt.render=function(t,e,n){if(!Iu(e))throw Error(C(200));return Tu(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!Iu(t))throw Error(C(40));return t._reactRootContainer?(ti(function(){Tu(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1};zt.unstable_batchedUpdates=Jf;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Iu(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Tu(t,e,n,!1,r)};zt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=zt})($0);var Ug=$0.exports;Dh.createRoot=Ug.createRoot,Dh.hydrateRoot=Ug.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ko.apply(this,arguments)}var ur;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ur||(ur={}));const zg="popstate";function nI(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=hi(i.location.hash.substr(1));return Id("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Io(s))}function r(i,s){rI(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return oI(e,n,r,t)}function rI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iI(){return Math.random().toString(36).substr(2,8)}function jg(t){return{usr:t.state,key:t.key}}function Id(t,e,n,r){return n===void 0&&(n=null),ko({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?hi(e):e,{state:n,key:e&&e.key||r||iI()})}function Io(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function hi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function sI(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:Io(t);return new URL(n,e)}function oI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ur.Pop,l=null;function u(){a=ur.Pop,l&&l({action:a,location:d.location})}function c(g,y){a=ur.Push;let x=Id(d.location,g,y);n&&n(x,g);let S=jg(x),p=d.createHref(x);try{o.pushState(S,"",p)}catch{i.location.assign(p)}s&&l&&l({action:a,location:d.location})}function h(g,y){a=ur.Replace;let x=Id(d.location,g,y);n&&n(x,g);let S=jg(x),p=d.createHref(x);o.replaceState(S,"",p),s&&l&&l({action:a,location:d.location})}let d={get action(){return a},get location(){return t(i,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(zg,u),l=g,()=>{i.removeEventListener(zg,u),l=null}},createHref(g){return e(i,g)},encodeLocation(g){let y=sI(Io(g));return ko({},g,{pathname:y.pathname,search:y.search,hash:y.hash})},push:c,replace:h,go(g){return o.go(g)}};return d}var Vg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vg||(Vg={}));function aI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?hi(e):e,i=z1(r.pathname||"/",n);if(i==null)return null;let s=U1(t);lI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=yI(s[a],xI(i));return o}function U1(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(Ue(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=vr([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(Ue(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),U1(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:mI(a,i.index),routesMeta:l})}),e}function lI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uI=/^:\w+$/,cI=3,hI=2,dI=1,fI=10,pI=-2,Bg=t=>t==="*";function mI(t,e){let n=t.split("/"),r=n.length;return n.some(Bg)&&(r+=pI),e&&(r+=hI),n.filter(i=>!Bg(i)).reduce((i,s)=>i+(uI.test(s)?cI:s===""?dI:fI),r)}function gI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function yI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=vI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:vr([i,c.pathname]),pathnameBase:kI(vr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=vr([i,c.pathnameBase]))}return s}function vI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=EI(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function wI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),op(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function xI(t){try{return decodeURI(t)}catch(e){return op(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function EI(t,e){try{return decodeURIComponent(t)}catch(n){return op(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function z1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function op(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function SI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?hi(t):t;return{pathname:n?n.startsWith("/")?n:_I(n,e):e,search:II(r),hash:TI(i)}}function _I(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ah(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function V1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=hi(t):(i=ko({},t),Ue(!i.pathname||!i.pathname.includes("?"),ah("?","pathname","search",i)),Ue(!i.pathname||!i.pathname.includes("#"),ah("#","pathname","hash",i)),Ue(!i.search||!i.search.includes("#"),ah("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=SI(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const vr=t=>t.join("/").replace(/\/\/+/g,"/"),kI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),II=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,TI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class CI{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function AI(t){return t instanceof CI}const bI=new Set(["POST","PUT","PATCH","DELETE"]);[...bI];var Cu={exports:{}},Au={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RI=I.exports,NI=Symbol.for("react.element"),DI=Symbol.for("react.fragment"),PI=Object.prototype.hasOwnProperty,OI=RI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LI={key:!0,ref:!0,__self:!0,__source:!0};function B1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)PI.call(e,r)&&!LI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:NI,type:t,key:s,ref:o,props:i,_owner:OI.current}}Au.Fragment=DI;Au.jsx=B1;Au.jsxs=B1;(function(t){t.exports=Au})(Cu);const ol=Cu.exports.Fragment,m=Cu.exports.jsx,k=Cu.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Td(){return Td=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Td.apply(this,arguments)}function MI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const $I=typeof Object.is=="function"?Object.is:MI,{useState:FI,useEffect:UI,useLayoutEffect:zI,useDebugValue:jI}=Nh;function VI(t,e,n){const r=e(),[{inst:i},s]=FI({inst:{value:r,getSnapshot:e}});return zI(()=>{i.value=r,i.getSnapshot=e,lh(i)&&s({inst:i})},[t,r,e]),UI(()=>(lh(i)&&s({inst:i}),t(()=>{lh(i)&&s({inst:i})})),[t]),jI(r),r}function lh(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!$I(n,r)}catch{return!0}}function BI(t,e,n){return e()}const HI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",WI=!HI,qI=WI?BI:VI;"useSyncExternalStore"in Nh&&(t=>t.useSyncExternalStore)(Nh);const KI=I.exports.createContext(null),GI=I.exports.createContext(null),bu=I.exports.createContext(null),ap=I.exports.createContext(null),Ru=I.exports.createContext(null),cs=I.exports.createContext({outlet:null,matches:[]}),H1=I.exports.createContext(null);function QI(t,e){let{relative:n}=e===void 0?{}:e;hs()||Ue(!1);let{basename:r,navigator:i}=I.exports.useContext(ap),{hash:s,pathname:o,search:a}=lp(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:vr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function hs(){return I.exports.useContext(Ru)!=null}function Yo(){return hs()||Ue(!1),I.exports.useContext(Ru).location}function Nu(){hs()||Ue(!1);let{basename:t,navigator:e}=I.exports.useContext(ap),{matches:n}=I.exports.useContext(cs),{pathname:r}=Yo(),i=JSON.stringify(j1(n).map(a=>a.pathnameBase)),s=I.exports.useRef(!1);return I.exports.useEffect(()=>{s.current=!0}),I.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=V1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:vr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function YI(){let{matches:t}=I.exports.useContext(cs),e=t[t.length-1];return e?e.params:{}}function lp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.exports.useContext(cs),{pathname:i}=Yo(),s=JSON.stringify(j1(r).map(o=>o.pathnameBase));return I.exports.useMemo(()=>V1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function XI(t,e){hs()||Ue(!1);let n=I.exports.useContext(bu),{matches:r}=I.exports.useContext(cs),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=Yo(),l;if(e){var u;let y=typeof e=="string"?hi(e):e;o==="/"||((u=y.pathname)==null?void 0:u.startsWith(o))||Ue(!1),l=y}else l=a;let c=l.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",d=aI(t,{pathname:h}),g=tT(d&&d.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:vr([o,y.pathname]),pathnameBase:y.pathnameBase==="/"?o:vr([o,y.pathnameBase])})),r,n||void 0);return e&&g?m(Ru.Provider,{value:{location:Td({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:ur.Pop},children:g}):g}function JI(){let t=rT(),e=AI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return k(ol,{children:[m("h2",{children:"Unhandled Thrown Error!"}),m("h3",{style:{fontStyle:"italic"},children:e}),n?m("pre",{style:i,children:n}):null,m("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),k("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",m("code",{style:s,children:"errorElement"})," props on\xA0",m("code",{style:s,children:"<Route>"})]})]})}class ZI extends I.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?m(H1.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function eT(t){let{routeContext:e,match:n,children:r}=t,i=I.exports.useContext(KI);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),m(cs.Provider,{value:e,children:r})}function tT(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Ue(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||m(JI,{}):null,c=()=>m(eT,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?m(ZI,{location:n.location,component:u,error:l,children:c()}):c()},null)}var Hg;(function(t){t.UseRevalidator="useRevalidator"})(Hg||(Hg={}));var Cd;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Cd||(Cd={}));function nT(t){let e=I.exports.useContext(bu);return e||Ue(!1),e}function rT(){var t;let e=I.exports.useContext(H1),n=nT(Cd.UseRouteError),r=I.exports.useContext(cs),i=r.matches[r.matches.length-1];return e||(r||Ue(!1),i.route.id||Ue(!1),(t=n.errors)==null?void 0:t[i.route.id])}function W1(t){let{to:e,replace:n,state:r,relative:i}=t;hs()||Ue(!1);let s=I.exports.useContext(bu),o=Nu();return I.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function rn(t){Ue(!1)}function iT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ur.Pop,navigator:s,static:o=!1}=t;hs()&&Ue(!1);let a=e.replace(/^\/*/,"/"),l=I.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=hi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,y=I.exports.useMemo(()=>{let x=z1(u,a);return x==null?null:{pathname:x,search:c,hash:h,state:d,key:g}},[a,u,c,h,d,g]);return y==null?null:m(ap.Provider,{value:l,children:m(Ru.Provider,{children:n,value:{location:y,navigationType:i}})})}function sT(t){let{children:e,location:n}=t,r=I.exports.useContext(GI),i=r&&!e?r.router.routes:Ad(e);return XI(i,n)}var Wg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Wg||(Wg={}));new Promise(()=>{});function Ad(t,e){e===void 0&&(e=[]);let n=[];return I.exports.Children.forEach(t,(r,i)=>{if(!I.exports.isValidElement(r))return;if(r.type===I.exports.Fragment){n.push.apply(n,Ad(r.props.children,e));return}r.type!==rn&&Ue(!1),!r.props.index||!r.props.children||Ue(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Ad(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function q1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function oT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function aT(t,e){return t.button===0&&(!e||e==="_self")&&!oT(t)}const lT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],uT=["aria-current","caseSensitive","className","end","style","to","children"];function cT(t){let{basename:e,children:n,window:r}=t,i=I.exports.useRef();i.current==null&&(i.current=nI({window:r,v5Compat:!0}));let s=i.current,[o,a]=I.exports.useState({action:s.action,location:s.location});return I.exports.useLayoutEffect(()=>s.listen(a),[s]),m(iT,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const hT=I.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=q1(e,lT),d=QI(u,{relative:i}),g=dT(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function y(x){r&&r(x),x.defaultPrevented||g(x)}return m("a",{...h,href:d,onClick:s?r:y,ref:n,target:l})}),Ke=I.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=q1(e,uT),h=lp(l,{relative:c.relative}),d=Yo(),g=I.exports.useContext(bu),y=h.pathname,x=d.pathname,S=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(x=x.toLowerCase(),S=S?S.toLowerCase():null,y=y.toLowerCase());let p=x===y||!o&&x.startsWith(y)&&x.charAt(y.length)==="/",f=S!=null&&(S===y||!o&&S.startsWith(y)&&S.charAt(y.length)==="/"),v=p?r:void 0,E;typeof s=="function"?E=s({isActive:p,isPending:f}):E=[s,p?"active":null,f?"pending":null].filter(Boolean).join(" ");let _=typeof a=="function"?a({isActive:p,isPending:f}):a;return m(hT,{...c,"aria-current":v,className:E,ref:n,style:_,to:l,children:typeof u=="function"?u({isActive:p,isPending:f}):u})});var qg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(qg||(qg={}));var Kg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Kg||(Kg={}));function dT(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Nu(),l=Yo(),u=lp(t,{relative:o});return I.exports.useCallback(c=>{if(aT(c,n)){c.preventDefault();let h=r!==void 0?r:Io(l)===Io(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},G1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},pT=function(t){const e=K1(t);return G1.encodeByteArray(e,!0)},jl=function(t){return pT(t).replace(/\./g,"")},Q1=function(t){try{return G1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function Y1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yT(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function X1(){return typeof indexedDB=="object"}function J1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function vT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function wT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=()=>wT().__FIREBASE_DEFAULTS__,ET=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ST=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Q1(t[1]);return e&&JSON.parse(e)},up=()=>{try{return xT()||ET()||ST()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Z1=t=>{var e,n;return(n=(e=up())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_T=t=>{const e=Z1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kT=()=>{var t;return(t=up())===null||t===void 0?void 0:t.config},ew=t=>{var e;return(e=up())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[jl(JSON.stringify(n)),jl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CT,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,di.prototype.create)}}class di{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,r)}}function AT(t,e){return t.replace(bT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bT=/\{\$([^}]+)}/g;function RT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function To(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Gg(s)&&Gg(o)){if(!To(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NT(t,e){const n=new DT(t,e);return n.subscribe.bind(n)}class DT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=uh),i.error===void 0&&(i.error=uh),i.complete===void 0&&(i.complete=uh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=1e3,LT=2,MT=4*60*60*1e3,$T=.5;function Qg(t,e=OT,n=LT){const r=e*Math.pow(n,t),i=Math.round($T*r*(Math.random()-.5)*2);return Math.min(MT,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new IT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zT(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UT(t){return t===Fr?void 0:t}function zT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const VT={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},BT=oe.INFO,HT={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},WT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=HT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Du{constructor(e){this.name=e,this._logLevel=BT,this._logHandler=WT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const qT=(t,e)=>e.some(n=>t instanceof n);let Yg,Xg;function KT(){return Yg||(Yg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GT(){return Xg||(Xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tw=new WeakMap,bd=new WeakMap,nw=new WeakMap,ch=new WeakMap,cp=new WeakMap;function QT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(wr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tw.set(n,t)}).catch(()=>{}),cp.set(e,t),e}function YT(t){if(bd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bd.set(t,e)}let Rd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XT(t){Rd=t(Rd)}function JT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hh(this),e,...n);return nw.set(r,e.sort?e.sort():[e]),wr(r)}:GT().includes(t)?function(...e){return t.apply(hh(this),e),wr(tw.get(this))}:function(...e){return wr(t.apply(hh(this),e))}}function ZT(t){return typeof t=="function"?JT(t):(t instanceof IDBTransaction&&YT(t),qT(t,KT())?new Proxy(t,Rd):t)}function wr(t){if(t instanceof IDBRequest)return QT(t);if(ch.has(t))return ch.get(t);const e=ZT(t);return e!==t&&(ch.set(t,e),cp.set(e,t)),e}const hh=t=>cp.get(t);function rw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(wr(o.result),l.oldVersion,l.newVersion,wr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const eC=["get","getKey","getAll","getAllKeys","count"],tC=["put","add","delete","clear"],dh=new Map;function Jg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dh.get(e))return dh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return dh.set(e,s),s}XT(t=>({...t,get:(e,n,r)=>Jg(e,n)||t.get(e,n,r),has:(e,n)=>!!Jg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nd="@firebase/app",Zg="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Du("@firebase/app"),iC="@firebase/app-compat",sC="@firebase/analytics-compat",oC="@firebase/analytics",aC="@firebase/app-check-compat",lC="@firebase/app-check",uC="@firebase/auth",cC="@firebase/auth-compat",hC="@firebase/database",dC="@firebase/database-compat",fC="@firebase/functions",pC="@firebase/functions-compat",mC="@firebase/installations",gC="@firebase/installations-compat",yC="@firebase/messaging",vC="@firebase/messaging-compat",wC="@firebase/performance",xC="@firebase/performance-compat",EC="@firebase/remote-config",SC="@firebase/remote-config-compat",_C="@firebase/storage",kC="@firebase/storage-compat",IC="@firebase/firestore",TC="@firebase/firestore-compat",CC="firebase",AC="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="[DEFAULT]",bC={[Nd]:"fire-core",[iC]:"fire-core-compat",[oC]:"fire-analytics",[sC]:"fire-analytics-compat",[lC]:"fire-app-check",[aC]:"fire-app-check-compat",[uC]:"fire-auth",[cC]:"fire-auth-compat",[hC]:"fire-rtdb",[dC]:"fire-rtdb-compat",[fC]:"fire-fn",[pC]:"fire-fn-compat",[mC]:"fire-iid",[gC]:"fire-iid-compat",[yC]:"fire-fcm",[vC]:"fire-fcm-compat",[wC]:"fire-perf",[xC]:"fire-perf-compat",[EC]:"fire-rc",[SC]:"fire-rc-compat",[_C]:"fire-gcs",[kC]:"fire-gcs-compat",[IC]:"fire-fst",[TC]:"fire-fst-compat","fire-js":"fire-js",[CC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=new Map,Pd=new Map;function RC(t,e){try{t.container.addComponent(e)}catch(n){ni.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(Pd.has(e))return ni.debug(`There were multiple attempts to register component ${e}.`),!1;Pd.set(e,t);for(const n of Vl.values())RC(n,t);return!0}function fi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xr=new di("app","Firebase",NC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=AC;function iw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xr.create("bad-app-name",{appName:String(i)});if(n||(n=kT()),!n)throw xr.create("no-options");const s=Vl.get(i);if(s){if(To(n,s.options)&&To(r,s.config))return s;throw xr.create("duplicate-app",{appName:i})}const o=new jT(i);for(const l of Pd.values())o.addComponent(l);const a=new DC(n,r,o);return Vl.set(i,a),a}function hp(t=Dd){const e=Vl.get(t);if(!e&&t===Dd)return iw();if(!e)throw xr.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let i=(r=bC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ni.warn(a.join(" "));return}_n(new dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC="firebase-heartbeat-database",OC=1,Co="firebase-heartbeat-store";let fh=null;function sw(){return fh||(fh=rw(PC,OC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Co)}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),fh}async function LC(t){var e;try{return(await sw()).transaction(Co).objectStore(Co).get(ow(t))}catch(n){if(n instanceof pn)ni.warn(n.message);else{const r=xr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ni.warn(r.message)}}}async function ey(t,e){var n;try{const i=(await sw()).transaction(Co,"readwrite");return await i.objectStore(Co).put(e,ow(t)),i.done}catch(r){if(r instanceof pn)ni.warn(r.message);else{const i=xr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});ni.warn(i.message)}}}function ow(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=1024,$C=30*24*60*60*1e3;class FC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ty();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=$C}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ty(),{heartbeatsToSend:n,unsentEntries:r}=UC(this._heartbeatsCache.heartbeats),i=jl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ty(){return new Date().toISOString().substring(0,10)}function UC(t,e=MC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ny(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ny(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return X1()?J1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ey(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ey(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ny(t){return jl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t){_n(new dn("platform-logger",e=>new nC(e),"PRIVATE")),_n(new dn("heartbeat",e=>new FC(e),"PRIVATE")),Gt(Nd,Zg,t),Gt(Nd,Zg,"esm2017"),Gt("fire-js","")}jC("");var VC="firebase",BC="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(VC,BC,"app");const aw="@firebase/installations",dp="0.5.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=1e4,uw=`w:${dp}`,cw="FIS_v2",HC="https://firebaseinstallations.googleapis.com/v1",WC=60*60*1e3,qC="installations",KC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ri=new di(qC,KC,GC);function hw(t){return t instanceof pn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw({projectId:t}){return`${HC}/projects/${t}/installations`}function fw(t){return{token:t.token,requestStatus:2,expiresIn:YC(t.expiresIn),creationTime:Date.now()}}async function pw(t,e){const r=(await e.json()).error;return ri.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function mw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function QC(t,{refreshToken:e}){const n=mw(t);return n.append("Authorization",XC(e)),n}async function gw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function YC(t){return Number(t.replace("s","000"))}function XC(t){return`${cw} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=dw(t),i=mw(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:cw,appId:t.appId,sdkVersion:uw},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await gw(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:fw(u.authToken)}}else throw await pw("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=/^[cdef][\w-]{21}$/,Od="";function t2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=n2(t);return e2.test(n)?n:Od}catch{return Od}}function n2(t){return ZC(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=new Map;function ww(t,e){const n=Pu(t);xw(n,e),r2(n,e)}function xw(t,e){const n=vw.get(t);if(!!n)for(const r of n)r(e)}function r2(t,e){const n=i2();n&&n.postMessage({key:t,fid:e}),s2()}let Vr=null;function i2(){return!Vr&&"BroadcastChannel"in self&&(Vr=new BroadcastChannel("[Firebase] FID Change"),Vr.onmessage=t=>{xw(t.data.key,t.data.fid)}),Vr}function s2(){vw.size===0&&Vr&&(Vr.close(),Vr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2="firebase-installations-database",a2=1,ii="firebase-installations-store";let ph=null;function fp(){return ph||(ph=rw(o2,a2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ii)}}})),ph}async function Bl(t,e){const n=Pu(t),i=(await fp()).transaction(ii,"readwrite"),s=i.objectStore(ii),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&ww(t,e.fid),e}async function Ew(t){const e=Pu(t),r=(await fp()).transaction(ii,"readwrite");await r.objectStore(ii).delete(e),await r.done}async function Ou(t,e){const n=Pu(t),i=(await fp()).transaction(ii,"readwrite"),s=i.objectStore(ii),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&ww(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(t){let e;const n=await Ou(t.appConfig,r=>{const i=l2(r),s=u2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Od?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function l2(t){const e=t||{fid:t2(),registrationStatus:0};return Sw(e)}function u2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ri.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=c2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:h2(t)}:{installationEntry:e}}async function c2(t,e){try{const n=await JC(t,e);return Bl(t.appConfig,n)}catch(n){throw hw(n)&&n.customData.serverCode===409?await Ew(t.appConfig):await Bl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function h2(t){let e=await ry(t.appConfig);for(;e.registrationStatus===1;)await yw(100),e=await ry(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await pp(t);return r||n}return e}function ry(t){return Ou(t,e=>{if(!e)throw ri.create("installation-not-found");return Sw(e)})}function Sw(t){return d2(t)?{fid:t.fid,registrationStatus:0}:t}function d2(t){return t.registrationStatus===1&&t.registrationTime+lw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f2({appConfig:t,heartbeatServiceProvider:e},n){const r=p2(t,n),i=QC(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:uw,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await gw(()=>fetch(r,a));if(l.ok){const u=await l.json();return fw(u)}else throw await pw("Generate Auth Token",l)}function p2(t,{fid:e}){return`${dw(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mp(t,e=!1){let n;const r=await Ou(t.appConfig,s=>{if(!_w(s))throw ri.create("not-registered");const o=s.authToken;if(!e&&y2(o))return s;if(o.requestStatus===1)return n=m2(t,e),s;{if(!navigator.onLine)throw ri.create("app-offline");const a=w2(s);return n=g2(t,a),a}});return n?await n:r.authToken}async function m2(t,e){let n=await iy(t.appConfig);for(;n.authToken.requestStatus===1;)await yw(100),n=await iy(t.appConfig);const r=n.authToken;return r.requestStatus===0?mp(t,e):r}function iy(t){return Ou(t,e=>{if(!_w(e))throw ri.create("not-registered");const n=e.authToken;return x2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function g2(t,e){try{const n=await f2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Bl(t.appConfig,r),n}catch(n){if(hw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ew(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bl(t.appConfig,r)}throw n}}function _w(t){return t!==void 0&&t.registrationStatus===2}function y2(t){return t.requestStatus===2&&!v2(t)}function v2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+WC}function w2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function x2(t){return t.requestStatus===1&&t.requestTime+lw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E2(t){const e=t,{installationEntry:n,registrationPromise:r}=await pp(e);return r?r.catch(console.error):mp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S2(t,e=!1){const n=t;return await _2(n),(await mp(n,e)).token}async function _2(t){const{registrationPromise:e}=await pp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t){if(!t||!t.options)throw mh("App Configuration");if(!t.name)throw mh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw mh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function mh(t){return ri.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="installations",I2="installations-internal",T2=t=>{const e=t.getProvider("app").getImmediate(),n=k2(e),r=fi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},C2=t=>{const e=t.getProvider("app").getImmediate(),n=fi(e,kw).getImmediate();return{getId:()=>E2(n),getToken:i=>S2(n,i)}};function A2(){_n(new dn(kw,T2,"PUBLIC")),_n(new dn(I2,C2,"PRIVATE"))}A2();Gt(aw,dp);Gt(aw,dp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="analytics",b2="firebase_id",R2="origin",N2=60*1e3,D2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Iw="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Du("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function P2(t,e){const n=document.createElement("script");n.src=`${Iw}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function O2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function L2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Tw(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Mt.error(a)}t("config",i,s)}async function M2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Tw(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Mt.error(s)}}function $2(t,e,n,r){async function i(s,o,a){try{s==="event"?await M2(t,e,n,o,a):s==="config"?await L2(t,e,n,r,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(l){Mt.error(l)}}return i}function F2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=$2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function U2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Iw)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Qt=new di("analytics","Analytics",z2);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2=30,V2=1e3;class B2{constructor(e={},n=V2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Cw=new B2;function H2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function W2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:H2(r)},s=D2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Qt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function q2(t,e=Cw,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Qt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Qt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Q2;return setTimeout(async()=>{a.abort()},n!==void 0?n:N2),Aw({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Aw(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Cw){var s,o;const{appId:a,measurementId:l}=t;try{await K2(r,e)}catch(u){if(l)return Mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(s=u)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:l};throw u}try{const u=await W2(t);return i.deleteThrottleMetadata(a),u}catch(u){const c=u;if(!G2(c)){if(i.deleteThrottleMetadata(a),l)return Mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw u}const h=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?Qg(n,i.intervalMillis,j2):Qg(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(a,d),Mt.debug(`Calling attemptFetch again in ${h} millis`),Aw(t,d,r,i)}}function K2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function G2(t){if(!(t instanceof pn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Q2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Y2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X2(){var t;if(X1())try{await J1()}catch(e){return Mt.warn(Qt.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Mt.warn(Qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function J2(t,e,n,r,i,s,o){var a;const l=q2(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Mt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Mt.error(g)),e.push(l);const u=X2().then(g=>{if(g)return r.getId()}),[c,h]=await Promise.all([l,u]);U2(s)||P2(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[R2]="firebase",d.update=!0,h!=null&&(d[b2]=h),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e){this.app=e}_delete(){return delete Js[this.app.options.appId],Promise.resolve()}}let Js={},sy=[];const oy={};let gh="dataLayer",eA="gtag",ay,bw,ly=!1;function tA(){const t=[];if(Y1()&&t.push("This is a browser extension environment."),vT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Qt.create("invalid-analytics-context",{errorInfo:e});Mt.warn(n.message)}}function nA(t,e,n){tA();const r=t.options.appId;if(!r)throw Qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qt.create("no-api-key");if(Js[r]!=null)throw Qt.create("already-exists",{id:r});if(!ly){O2(gh);const{wrappedGtag:s,gtagCore:o}=F2(Js,sy,oy,gh,eA);bw=s,ay=o,ly=!0}return Js[r]=J2(t,sy,oy,e,ay,gh,n),new Z2(t)}function rA(t=hp()){t=Me(t);const e=fi(t,Hl);return e.isInitialized()?e.getImmediate():iA(t)}function iA(t,e={}){const n=fi(t,Hl);if(n.isInitialized()){const i=n.getImmediate();if(To(e,n.getOptions()))return i;throw Qt.create("already-initialized")}return n.initialize({options:e})}function sA(t,e,n,r){t=Me(t),Y2(bw,Js[t.app.options.appId],e,n,r).catch(i=>Mt.error(i))}const uy="@firebase/analytics",cy="0.8.4";function oA(){_n(new dn(Hl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return nA(r,i,n)},"PUBLIC")),_n(new dn("analytics-internal",t,"PRIVATE")),Gt(uy,cy),Gt(uy,cy,"esm2017");function t(e){try{const n=e.getProvider(Hl).getImmediate();return{logEvent:(r,i,s)=>sA(n,r,i,s)}}catch(n){throw Qt.create("interop-component-reg-failed",{reason:n})}}}oA();var aA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,gp=gp||{},K=aA||self;function Wl(){}function Lu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function lA(t){return Object.prototype.hasOwnProperty.call(t,yh)&&t[yh]||(t[yh]=++uA)}var yh="closure_uid_"+(1e9*Math.random()>>>0),uA=0;function cA(t,e,n){return t.call.apply(t.bind,arguments)}function hA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ft(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ft=cA:ft=hA,ft.apply(null,arguments)}function Fa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Dr(){this.s=this.s,this.o=this.o}var dA=0;Dr.prototype.s=!1;Dr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),dA!=0)&&lA(this)};Dr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function yp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function hy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Lu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var fA=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Wl,e),K.removeEventListener("test",Wl,e)}catch{}return t}();function ql(t){return/^[\s\xa0]*$/.test(t)}var dy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function vh(t,e){return t<e?-1:t>e?1:0}function Mu(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function vn(t){return Mu().indexOf(t)!=-1}function vp(t){return vp[" "](t),t}vp[" "]=Wl;function pA(t){var e=yA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var mA=vn("Opera"),Ji=vn("Trident")||vn("MSIE"),Nw=vn("Edge"),Ld=Nw||Ji,Dw=vn("Gecko")&&!(Mu().toLowerCase().indexOf("webkit")!=-1&&!vn("Edge"))&&!(vn("Trident")||vn("MSIE"))&&!vn("Edge"),gA=Mu().toLowerCase().indexOf("webkit")!=-1&&!vn("Edge");function Pw(){var t=K.document;return t?t.documentMode:void 0}var Kl;e:{var wh="",xh=function(){var t=Mu();if(Dw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Nw)return/Edge\/([\d\.]+)/.exec(t);if(Ji)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(gA)return/WebKit\/(\S+)/.exec(t);if(mA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xh&&(wh=xh?xh[1]:""),Ji){var Eh=Pw();if(Eh!=null&&Eh>parseFloat(wh)){Kl=String(Eh);break e}}Kl=wh}var yA={};function vA(){return pA(function(){let t=0;const e=dy(String(Kl)).split("."),n=dy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=vh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||vh(i[2].length==0,s[2].length==0)||vh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Md;if(K.document&&Ji){var fy=Pw();Md=fy||parseInt(Kl,10)||void 0}else Md=void 0;var wA=Md;function Ao(t,e){if(pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Dw){e:{try{vp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ao.X.h.call(this)}}ot(Ao,pt);var xA={2:"touch",3:"pen",4:"mouse"};Ao.prototype.h=function(){Ao.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ea="closure_listenable_"+(1e6*Math.random()|0),EA=0;function SA(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++EA,this.ba=this.ea=!1}function $u(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function wp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ow(t){const e={};for(const n in t)e[n]=t[n];return e}const py="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<py.length;s++)n=py[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Fu(t){this.src=t,this.g={},this.h=0}Fu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Fd(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new SA(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function $d(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Rw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&($u(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Fd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var xp="closure_lm_"+(1e6*Math.random()|0),Sh={};function Mw(t,e,n,r,i){if(r&&r.once)return Fw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Mw(t,e[s],n,r,i);return null}return n=_p(n),t&&t[ea]?t.N(e,n,Zo(r)?!!r.capture:!!r,i):$w(t,e,n,!1,r,i)}function $w(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Zo(i)?!!i.capture:!!i,a=Sp(t);if(a||(t[xp]=a=new Fu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=_A(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)fA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(zw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _A(){function t(n){return e.call(t.src,t.listener,n)}const e=kA;return t}function Fw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Fw(t,e[s],n,r,i);return null}return n=_p(n),t&&t[ea]?t.O(e,n,Zo(r)?!!r.capture:!!r,i):$w(t,e,n,!0,r,i)}function Uw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Uw(t,e[s],n,r,i);else r=Zo(r)?!!r.capture:!!r,n=_p(n),t&&t[ea]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Fd(s,n,r,i),-1<n&&($u(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Sp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Fd(e,n,r,i)),(n=-1<t?e[t]:null)&&Ep(n))}function Ep(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ea])$d(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(zw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Sp(e))?($d(n,t),n.h==0&&(n.src=null,e[xp]=null)):$u(t)}}}function zw(t){return t in Sh?Sh[t]:Sh[t]="on"+t}function kA(t,e){if(t.ba)t=!0;else{e=new Ao(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Ep(t),t=n.call(r,e)}return t}function Sp(t){return t=t[xp],t instanceof Fu?t:null}var _h="__closure_events_fn_"+(1e9*Math.random()>>>0);function _p(t){return typeof t=="function"?t:(t[_h]||(t[_h]=function(e){return t.handleEvent(e)}),t[_h])}function Qe(){Dr.call(this),this.i=new Fu(this),this.P=this,this.I=null}ot(Qe,Dr);Qe.prototype[ea]=!0;Qe.prototype.removeEventListener=function(t,e,n,r){Uw(this,t,e,n,r)};function it(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new pt(e,t);else if(e instanceof pt)e.target=e.target||t;else{var i=e;e=new pt(r,t),Lw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ua(o,r,!0,e)&&i}if(o=e.g=t,i=Ua(o,r,!0,e)&&i,i=Ua(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ua(o,r,!1,e)&&i}Qe.prototype.M=function(){if(Qe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)$u(n[r]);delete t.g[e],t.h--}}this.I=null};Qe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ua(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&$d(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var kp=K.JSON.stringify;function IA(){var t=Bw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class TA{constructor(){this.h=this.g=null}add(e,n){const r=jw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var jw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new CA,t=>t.reset());class CA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function AA(t){K.setTimeout(()=>{throw t},0)}function Vw(t,e){Ud||bA(),zd||(Ud(),zd=!0),Bw.add(t,e)}var Ud;function bA(){var t=K.Promise.resolve(void 0);Ud=function(){t.then(RA)}}var zd=!1,Bw=new TA;function RA(){for(var t;t=IA();){try{t.h.call(t.g)}catch(n){AA(n)}var e=jw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}zd=!1}function Uu(t,e){Qe.call(this),this.h=t||1,this.g=e||K,this.j=ft(this.lb,this),this.l=Date.now()}ot(Uu,Qe);F=Uu.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),it(this,"tick"),this.ca&&(Ip(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ip(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){Uu.X.M.call(this),Ip(this),delete this.g};function Tp(t,e,n){if(typeof t=="function")n&&(t=ft(t,n));else if(t&&typeof t.handleEvent=="function")t=ft(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Hw(t){t.g=Tp(()=>{t.g=null,t.i&&(t.i=!1,Hw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class NA extends Dr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hw(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bo(t){Dr.call(this),this.h=t,this.g={}}ot(bo,Dr);var my=[];function Ww(t,e,n,r){Array.isArray(n)||(n&&(my[0]=n.toString()),n=my);for(var i=0;i<n.length;i++){var s=Mw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function qw(t){wp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ep(e)},t),t.g={}}bo.prototype.M=function(){bo.X.M.call(this),qw(this)};bo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function zu(){this.g=!0}zu.prototype.Aa=function(){this.g=!1};function DA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function PA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ni(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+LA(t,n)+(r?" "+r:"")})}function OA(t,e){t.info(function(){return"TIMEOUT: "+e})}zu.prototype.info=function(){};function LA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return kp(n)}catch{return e}}var pi={},gy=null;function ju(){return gy=gy||new Qe}pi.Pa="serverreachability";function Kw(t){pt.call(this,pi.Pa,t)}ot(Kw,pt);function Ro(t){const e=ju();it(e,new Kw(e))}pi.STAT_EVENT="statevent";function Gw(t,e){pt.call(this,pi.STAT_EVENT,t),this.stat=e}ot(Gw,pt);function Et(t){const e=ju();it(e,new Gw(e,t))}pi.Qa="timingevent";function Qw(t,e){pt.call(this,pi.Qa,t),this.size=e}ot(Qw,pt);function ta(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Vu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Yw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Cp(){}Cp.prototype.h=null;function yy(t){return t.h||(t.h=t.i())}function Xw(){}var na={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ap(){pt.call(this,"d")}ot(Ap,pt);function bp(){pt.call(this,"c")}ot(bp,pt);var jd;function Bu(){}ot(Bu,Cp);Bu.prototype.g=function(){return new XMLHttpRequest};Bu.prototype.i=function(){return{}};jd=new Bu;function ra(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new bo(this),this.O=MA,t=Ld?125:void 0,this.T=new Uu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Jw}function Jw(){this.i=null,this.g="",this.h=!1}var MA=45e3,Vd={},Gl={};F=ra.prototype;F.setTimeout=function(t){this.O=t};function Bd(t,e,n){t.K=1,t.v=Wu(jn(e)),t.s=n,t.P=!0,Zw(t,null)}function Zw(t,e){t.F=Date.now(),ia(t),t.A=jn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),ax(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Jw,t.g=Ax(t.l,n?e:null,!t.s),0<t.N&&(t.L=new NA(ft(t.La,t,t.g),t.N)),Ww(t.S,t.g,"readystatechange",t.ib),e=t.H?Ow(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ro(),DA(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&bn(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const c=bn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Ld||this.g&&(this.h.h||this.g.fa()||Ey(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ro(3):Ro(2)),Hu(this);var n=this.g.aa();this.Y=n;t:if(ex(this)){var r=Ey(this.g);t="";var i=r.length,s=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Br(this),Zs(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,PA(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ql(a)){var u=a;break t}}u=null}if(n=u)Ni(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Hd(this,n);else{this.i=!1,this.o=3,Et(12),Br(this),Zs(this);break e}}this.P?(tx(this,c,o),Ld&&this.i&&c==3&&(Ww(this.S,this.T,"tick",this.hb),this.T.start())):(Ni(this.j,this.m,o,null),Hd(this,o)),c==4&&Br(this),this.i&&!this.I&&(c==4?kx(this.l,this):(this.i=!1,ia(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Et(12)):(this.o=0,Et(13)),Br(this),Zs(this)}}}catch{}finally{}};function ex(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function tx(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=$A(t,n),i==Gl){e==4&&(t.o=4,Et(14),r=!1),Ni(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Vd){t.o=4,Et(15),Ni(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ni(t.j,t.m,i,null),Hd(t,i);ex(t)&&i!=Gl&&i!=Vd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Et(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mp(e),e.K=!0,Et(11))):(Ni(t.j,t.m,n,"[Invalid Chunked Response]"),Br(t),Zs(t))}F.hb=function(){if(this.g){var t=bn(this.g),e=this.g.fa();this.C<e.length&&(Hu(this),tx(this,t,e),this.i&&t!=4&&ia(this))}};function $A(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Gl:(n=Number(e.substring(n,r)),isNaN(n)?Vd:(r+=1,r+n>e.length?Gl:(e=e.substr(r,n),t.C=r+n,e)))}F.cancel=function(){this.I=!0,Br(this)};function ia(t){t.V=Date.now()+t.O,nx(t,t.O)}function nx(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ta(ft(t.gb,t),e)}function Hu(t){t.B&&(K.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(OA(this.j,this.A),this.K!=2&&(Ro(),Et(17)),Br(this),this.o=2,Zs(this)):nx(this,this.V-t)};function Zs(t){t.l.G==0||t.I||kx(t.l,t)}function Br(t){Hu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ip(t.T),qw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Hd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Wd(n.h,t))){if(!t.J&&Wd(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Xl(n),Gu(n);else break e;Lp(n),Et(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ta(ft(n.cb,n),6e3));if(1>=cx(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Hr(n,11)}else if((t.J||n.g==t)&&Xl(n),!ql(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Rp(s,s.h),s.h=null))}if(r.D){const x=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;x&&(r.za=x,Ee(r.F,r.D,x))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Cx(r,r.H?r.ka:null,r.V),o.J){hx(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Hu(a),ia(a)),r.g=o}else Sx(r);0<n.i.length&&Qu(n)}else u[0]!="stop"&&u[0]!="close"||Hr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Hr(n,7):Op(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ro(4)}catch{}}function FA(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Lu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function UA(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Lu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function rx(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Lu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=UA(t),r=FA(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var ix=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gr){this.h=e!==void 0?e:t.h,Ql(this,t.j),this.s=t.s,this.g=t.g,Yl(this,t.m),this.l=t.l,e=t.i;var n=new No;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vy(this,n),this.o=t.o}else t&&(n=String(t).match(ix))?(this.h=!!e,Ql(this,n[1]||"",!0),this.s=Us(n[2]||""),this.g=Us(n[3]||"",!0),Yl(this,n[4]),this.l=Us(n[5]||"",!0),vy(this,n[6]||"",!0),this.o=Us(n[7]||"")):(this.h=!!e,this.i=new No(null,this.h))}Gr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(zs(e,wy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(zs(e,wy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(zs(n,n.charAt(0)=="/"?BA:VA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",zs(n,WA)),t.join("")};function jn(t){return new Gr(t)}function Ql(t,e,n){t.j=n?Us(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vy(t,e,n){e instanceof No?(t.i=e,qA(t.i,t.h)):(n||(e=zs(e,HA)),t.i=new No(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function Wu(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Us(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function zs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,jA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function jA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var wy=/[#\/\?@]/g,VA=/[#\?:]/g,BA=/[#\?]/g,HA=/[#\?@]/g,WA=/#/g;function No(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Pr(t){t.g||(t.g=new Map,t.h=0,t.i&&zA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=No.prototype;F.add=function(t,e){Pr(this),this.i=null,t=ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function sx(t,e){Pr(t),e=ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ox(t,e){return Pr(t),e=ds(t,e),t.g.has(e)}F.forEach=function(t,e){Pr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};F.oa=function(){Pr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};F.W=function(t){Pr(this);let e=[];if(typeof t=="string")ox(this,t)&&(e=e.concat(this.g.get(ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Pr(this),this.i=null,t=ds(this,t),ox(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ax(t,e,n){sx(t,e),0<n.length&&(t.i=null,t.g.set(ds(t,e),yp(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qA(t,e){e&&!t.j&&(Pr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(sx(this,r),ax(this,i,n))},t)),t.j=e}var KA=class{constructor(t,e){this.h=t,this.g=e}};function lx(t){this.l=t||GA,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ga&&K.g.Ga()&&K.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var GA=10;function ux(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cx(t){return t.h?1:t.g?t.g.size:0}function Wd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rp(t,e){t.g?t.g.add(e):t.h=e}function hx(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}lx.prototype.cancel=function(){if(this.i=dx(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function dx(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return yp(t.i)}function Np(){}Np.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};Np.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function QA(){this.g=new Np}function YA(t,e,n){const r=n||"";try{rx(t,function(i,s){let o=i;Zo(i)&&(o=kp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function XA(t,e){const n=new zu;if(K.Image){const r=new Image;r.onload=Fa(za,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Fa(za,n,r,"TestLoadImage: error",!1,e),r.onabort=Fa(za,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Fa(za,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function za(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function sa(t){this.l=t.ac||null,this.j=t.jb||!1}ot(sa,Cp);sa.prototype.g=function(){return new qu(this.l,this.j)};sa.prototype.i=function(t){return function(){return t}}({});function qu(t,e){Qe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Dp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(qu,Qe);var Dp=0;F=qu.prototype;F.open=function(t,e){if(this.readyState!=Dp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Do(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oa(this)),this.readyState=Dp};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Do(this)),this.g&&(this.readyState=3,Do(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fx(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function fx(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?oa(this):Do(this),this.readyState==3&&fx(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,oa(this))};F.Ua=function(t){this.g&&(this.response=t,oa(this))};F.ga=function(){this.g&&oa(this)};function oa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Do(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Do(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var JA=K.JSON.parse;function Ae(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=px,this.K=this.L=!1}ot(Ae,Qe);var px="",ZA=/^https?$/i,eb=["POST","PUT"];F=Ae.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():jd.g(),this.C=this.u?yy(this.u):yy(jd),this.g.onreadystatechange=ft(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){xy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=Rw(eb,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yx(this),0<this.B&&((this.K=tb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ft(this.qa,this)):this.A=Tp(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){xy(this,s)}};function tb(t){return Ji&&vA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof gp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function xy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,mx(t),Ku(t)}function mx(t){t.D||(t.D=!0,it(t,"complete"),it(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),Ku(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ku(this,!0)),Ae.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?gx(this):this.fb())};F.fb=function(){gx(this)};function gx(t){if(t.h&&typeof gp<"u"&&(!t.C[1]||bn(t)!=4||t.aa()!=2)){if(t.v&&bn(t)==4)Tp(t.Ha,0,t);else if(it(t,"readystatechange"),bn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(ix)[1]||null;if(!i&&K.self&&K.self.location){var s=K.self.location.protocol;i=s.substr(0,s.length-1)}r=!ZA.test(i?i.toLowerCase():"")}n=r}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var o=2<bn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",mx(t)}}finally{Ku(t)}}}}function Ku(t,e){if(t.g){yx(t);const n=t.g,r=t.C[0]?Wl:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=r}catch{}}}function yx(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function bn(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),JA(e)}};function Ey(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case px:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vx(t){let e="";return wp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Pp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vx(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Ns(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wx(t){this.Ca=0,this.i=[],this.j=new zu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ns("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ns("baseRetryDelayMs",5e3,t),this.bb=Ns("retryDelaySeedMs",1e4,t),this.$a=Ns("forwardChannelMaxRetries",2,t),this.ta=Ns("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new lx(t&&t.concurrentRequestLimit),this.Fa=new QA,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=wx.prototype;F.ma=8;F.G=1;function Op(t){if(xx(t),t.G==3){var e=t.U++,n=jn(t.F);Ee(n,"SID",t.I),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),aa(t,n),e=new ra(t,t.j,e,void 0),e.K=2,e.v=Wu(jn(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ax(e.l,null),e.g.da(e.v)),e.F=Date.now(),ia(e)}Tx(t)}function Gu(t){t.g&&(Mp(t),t.g.cancel(),t.g=null)}function xx(t){Gu(t),t.u&&(K.clearTimeout(t.u),t.u=null),Xl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Qu(t){ux(t.h)||t.m||(t.m=!0,Vw(t.Ja,t),t.C=0)}function nb(t,e){return cx(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ta(ft(t.Ja,t,e),Ix(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ra(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Ow(s),Lw(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ex(this,i,e),n=jn(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),aa(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(vx(s)))+"&"+e:this.o&&Pp(n,this.o,s)),Rp(this.h,i),this.Ya&&Ee(n,"TYPE","init"),this.O?(Ee(n,"$req",e),Ee(n,"SID","null"),i.Z=!0,Bd(i,n,null)):Bd(i,n,e),this.G=2}}else this.G==3&&(t?Sy(this,t):this.i.length==0||ux(this.h)||Sy(this))};function Sy(t,e){var n;e?n=e.m:n=t.U++;const r=jn(t.F);Ee(r,"SID",t.I),Ee(r,"RID",n),Ee(r,"AID",t.T),aa(t,r),t.o&&t.s&&Pp(r,t.o,t.s),n=new ra(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ex(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Rp(t.h,n),Bd(n,r,e)}function aa(t,e){t.ia&&wp(t.ia,function(n,r){Ee(e,r,n)}),t.l&&rx({},function(n,r){Ee(e,r,n)})}function Ex(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ft(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{YA(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function Sx(t){t.g||t.u||(t.Z=1,Vw(t.Ia,t),t.A=0)}function Lp(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ta(ft(t.Ia,t),Ix(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,_x(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ta(ft(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Et(10),Gu(this),_x(this))};function Mp(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function _x(t){t.g=new ra(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=jn(t.sa);Ee(e,"RID","rpc"),Ee(e,"SID",t.I),Ee(e,"CI",t.L?"0":"1"),Ee(e,"AID",t.T),Ee(e,"TYPE","xmlhttp"),aa(t,e),t.o&&t.s&&Pp(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Wu(jn(e)),n.s=null,n.P=!0,Zw(n,t)}F.cb=function(){this.v!=null&&(this.v=null,Gu(this),Lp(this),Et(19))};function Xl(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function kx(t,e){var n=null;if(t.g==e){Xl(t),Mp(t),t.g=null;var r=2}else if(Wd(t.h,e))n=e.D,hx(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ju(),it(r,new Qw(r,n)),Qu(t)}else Sx(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&nb(t,e)||r==2&&Lp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Hr(t,5);break;case 4:Hr(t,10);break;case 3:Hr(t,6);break;default:Hr(t,2)}}}function Ix(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Hr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ft(t.kb,t);n||(n=new Gr("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Ql(n,"https"),Wu(n)),XA(n.toString(),r)}else Et(2);t.G=0,t.l&&t.l.va(e),Tx(t),xx(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Tx(t){if(t.G=0,t.la=[],t.l){const e=dx(t.h);(e.length!=0||t.i.length!=0)&&(hy(t.la,e),hy(t.la,t.i),t.h.i.length=0,yp(t.i),t.i.length=0),t.l.ua()}}function Cx(t,e,n){var r=n instanceof Gr?jn(n):new Gr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Yl(r,r.m);else{var i=K.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Gr(null,void 0);r&&Ql(s,r),e&&(s.g=e),i&&Yl(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ma),aa(t,r),r}function Ax(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ae(new sa({jb:!0})):new Ae(t.ra),e.Ka(t.H),e}function bx(){}F=bx.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function Jl(){if(Ji&&!(10<=Number(wA)))throw Error("Environmental error: no available transport.")}Jl.prototype.g=function(t,e){return new Ut(t,e)};function Ut(t,e){Qe.call(this),this.g=new wx(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ql(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ql(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fs(this)}ot(Ut,Qe);Ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Et(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Cx(t,null,t.V),Qu(t)};Ut.prototype.close=function(){Op(this.g)};Ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=kp(t),t=n);e.i.push(new KA(e.ab++,t)),e.G==3&&Qu(e)};Ut.prototype.M=function(){this.g.l=null,delete this.j,Op(this.g),delete this.g,Ut.X.M.call(this)};function Rx(t){Ap.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(Rx,Ap);function Nx(){bp.call(this),this.status=1}ot(Nx,bp);function fs(t){this.g=t}ot(fs,bx);fs.prototype.xa=function(){it(this.g,"a")};fs.prototype.wa=function(t){it(this.g,new Rx(t))};fs.prototype.va=function(t){it(this.g,new Nx)};fs.prototype.ua=function(){it(this.g,"b")};Jl.prototype.createWebChannel=Jl.prototype.g;Ut.prototype.send=Ut.prototype.u;Ut.prototype.open=Ut.prototype.m;Ut.prototype.close=Ut.prototype.close;Vu.NO_ERROR=0;Vu.TIMEOUT=8;Vu.HTTP_ERROR=6;Yw.COMPLETE="complete";Xw.EventType=na;na.OPEN="a";na.CLOSE="b";na.ERROR="c";na.MESSAGE="d";Qe.prototype.listen=Qe.prototype.N;Ae.prototype.listenOnce=Ae.prototype.O;Ae.prototype.getLastError=Ae.prototype.Oa;Ae.prototype.getLastErrorCode=Ae.prototype.Ea;Ae.prototype.getStatus=Ae.prototype.aa;Ae.prototype.getResponseJson=Ae.prototype.Sa;Ae.prototype.getResponseText=Ae.prototype.fa;Ae.prototype.send=Ae.prototype.da;Ae.prototype.setWithCredentials=Ae.prototype.Ka;var rb=function(){return new Jl},ib=function(){return ju()},kh=Vu,sb=Yw,ob=pi,_y={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ab=sa,ja=Xw,lb=Ae;const ky="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new Du("@firebase/firestore");function Iy(){return si.logLevel}function U(t,...e){if(si.logLevel<=oe.DEBUG){const n=e.map($p);si.debug(`Firestore (${ps}): ${t}`,...n)}}function Vn(t,...e){if(si.logLevel<=oe.ERROR){const n=e.map($p);si.error(`Firestore (${ps}): ${t}`,...n)}}function qd(t,...e){if(si.logLevel<=oe.WARN){const n=e.map($p);si.warn(`Firestore (${ps}): ${t}`,...n)}}function $p(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function ye(t,e){t||Q()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ub{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class cb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hb{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new On;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new On,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new Dx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new ct(e)}}class db{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ye(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class fb{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new db(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mb{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.A=n.token,new pb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=gb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Zi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new ze(0,0))}static max(){return new Z(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Po.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Po?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Po{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const yb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Po{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return yb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Se.fromString(e))}static fromName(e){return new j(Se.fromString(e).popFirst(5))}static empty(){return new j(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Se(e.slice()))}}function vb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new ze(n+1,0):new ze(n,r));return new Tr(i,j.empty(),e)}function wb(t){return new Tr(t.readTime,t.key,-1)}class Tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tr(Z.min(),j.empty(),-1)}static max(){return new Tr(Z.max(),j.empty(),-1)}}function xb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function la(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==Eb)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ua(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ox(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fp.at=-1;class Ve{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Va(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Va(this.root,e,this.comparator,!1)}getReverseIterator(){return new Va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Va(this.root,e,this.comparator,!0)}}class Va{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:tt.RED,this.left=i!=null?i:tt.EMPTY,this.right=s!=null?s:tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new tt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,r,i){return this}insert(t,e,n){return new tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cy(this.data.getIterator())}getIteratorFrom(e){return new Cy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class Cy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new je(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new yt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const _b=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(ye(!!t),typeof t=="string"){let e=0;const n=_b.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function es(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mx(t){const e=t.mapValue.fields.__previous_value__;return Lx(e)?Mx(e):e}function Oo(t){const e=Cr(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}function Yu(t){return t==null}function Zl(t){return t===0&&1/t==-1/0}function Ib(t){return typeof t=="number"&&Number.isInteger(t)&&!Zl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function oi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lx(t)?4:Tb(t)?9007199254740991:10:Q()}function kn(t,e){if(t===e)return!0;const n=oi(t);if(n!==oi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oo(t).isEqual(Oo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Cr(r.timestampValue),o=Cr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return es(r.bytesValue).isEqual(es(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Oe(r.geoPointValue.latitude)===Oe(i.geoPointValue.latitude)&&Oe(r.geoPointValue.longitude)===Oe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Oe(r.integerValue)===Oe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Oe(r.doubleValue),o=Oe(i.doubleValue);return s===o?Zl(s)===Zl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Zi(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Ty(s)!==Ty(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!kn(s[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function Mo(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function ts(t,e){if(t===e)return 0;const n=oi(t),r=oi(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Oe(i.integerValue||i.doubleValue),a=Oe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ay(t.timestampValue,e.timestampValue);case 4:return Ay(Oo(t),Oo(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,s){const o=es(i),a=es(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ue(o[l],a[l]);if(u!==0)return u}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ue(Oe(i.latitude),Oe(s.latitude));return o!==0?o:ue(Oe(i.longitude),Oe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ts(o[l],a[l]);if(u)return u}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ba.mapValue&&s===Ba.mapValue)return 0;if(i===Ba.mapValue)return 1;if(s===Ba.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ue(a[c],u[c]);if(h!==0)return h;const d=ts(o[a[c]],l[u[c]]);if(d!==0)return d}return ue(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Ay(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Cr(t),r=Cr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function ji(t){return Kd(t)}function Kd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Cr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?es(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Kd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Kd(r.fields[a])}`;return s+"}"}(t.mapValue):Q();var e,n}function Gd(t){return!!t&&"integerValue"in t}function Up(t){return!!t&&"arrayValue"in t}function by(t){return!!t&&"nullValue"in t}function Ry(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function al(t){return!!t&&"mapValue"in t}function eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Tb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!al(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=eo(n)}setAll(e){let n=dt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=eo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());al(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];al(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){mi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ct(eo(this.value))}}function $x(t){const e=[];return mi(t.fields,(n,r)=>{const i=new dt([n]);if(al(r)){const s=$x(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new nt(e,0,Z.min(),Z.min(),Ct.empty(),0)}static newFoundDocument(e,n,r){return new nt(e,1,n,Z.min(),r,0)}static newNoDocument(e,n){return new nt(e,2,n,Z.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,Z.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Ny(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Cb(t,e,n,r,i,s,o)}function zp(t){const e=Y(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ji(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Yu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ji(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ji(r)).join(",")),e.ht=n}return e.ht}function Ab(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ji(r.value)}`;var r}).join(", ")}]`),Yu(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ji(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ji(n)).join(",")),`Target(${e})`}function jp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Mb(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!kn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Py(t.startAt,e.startAt)&&Py(t.endAt,e.endAt)}function Qd(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class bt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new bb(e,n,r):n==="array-contains"?new Db(e,r):n==="in"?new Pb(e,r):n==="not-in"?new Ob(e,r):n==="array-contains-any"?new Lb(e,r):new bt(e,n,r)}static lt(e,n,r){return n==="in"?new Rb(e,r):new Nb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ts(n,this.value)):n!==null&&oi(this.value)===oi(n)&&this.ft(ts(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class bb extends bt{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.ft(n)}}class Rb extends bt{constructor(e,n){super(e,"in",n),this.keys=Fx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Nb extends bt{constructor(e,n){super(e,"not-in",n),this.keys=Fx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Fx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class Db extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Up(n)&&Mo(n.arrayValue,this.value)}}class Pb extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mo(this.value.arrayValue,n)}}class Ob extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Mo(this.value.arrayValue,n)}}class Lb extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Up(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mo(this.value.arrayValue,r))}}class eu{constructor(e,n){this.position=e,this.inclusive=n}}class to{constructor(e,n="asc"){this.field=e,this.dir=n}}function Mb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Dy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=ts(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Py(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function $b(t,e,n,r,i,s,o,a){return new Xu(t,e,n,r,i,s,o,a)}function Vp(t){return new Xu(t)}function Oy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ub(t){for(const e of t.filters)if(e.dt())return e.field;return null}function zb(t){return t.collectionGroup!==null}function $o(t){const e=Y(t);if(e._t===null){e._t=[];const n=Ub(e),r=Fb(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new to(n)),e._t.push(new to(dt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new to(dt.keyField(),s))}}}return e._t}function Bn(t){const e=Y(t);if(!e.wt)if(e.limitType==="F")e.wt=Ny(e.path,e.collectionGroup,$o(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of $o(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new to(s.field,o))}const r=e.endAt?new eu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new eu(e.startAt.position,e.startAt.inclusive):null;e.wt=Ny(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Yd(t,e,n){return new Xu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ju(t,e){return jp(Bn(t),Bn(e))&&t.limitType===e.limitType}function Ux(t){return`${zp(Bn(t))}|lt:${t.limitType}`}function Xd(t){return`Query(target=${Ab(Bn(t))}; limitType=${t.limitType})`}function Bp(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):j.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Dy(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,$o(n),r)||n.endAt&&!function(i,s,o){const a=Dy(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,$o(n),r))}(t,e)}function jb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zx(t){return(e,n)=>{let r=!1;for(const i of $o(t)){const s=Vb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Vb(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ts(a,l):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zl(e)?"-0":e}}function Vx(t){return{integerValue:""+t}}function Bb(t,e){return Ib(e)?Vx(e):jx(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this._=void 0}}function Hb(t,e,n){return t instanceof tu?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Fo?Hx(t,e):t instanceof Uo?Wx(t,e):function(r,i){const s=Bx(r,i),o=Ly(s)+Ly(r.yt);return Gd(s)&&Gd(r.yt)?Vx(o):jx(r.It,o)}(t,e)}function Wb(t,e,n){return t instanceof Fo?Hx(t,e):t instanceof Uo?Wx(t,e):n}function Bx(t,e){return t instanceof nu?Gd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class tu extends Zu{}class Fo extends Zu{constructor(e){super(),this.elements=e}}function Hx(t,e){const n=qx(e);for(const r of t.elements)n.some(i=>kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Uo extends Zu{constructor(e){super(),this.elements=e}}function Wx(t,e){let n=qx(e);for(const r of t.elements)n=n.filter(i=>!kn(i,r));return{arrayValue:{values:n}}}class nu extends Zu{constructor(e,n){super(),this.It=e,this.yt=n}}function Ly(t){return Oe(t.integerValue||t.doubleValue)}function qx(t){return Up(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qb(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Fo&&r instanceof Fo||n instanceof Uo&&r instanceof Uo?Zi(n.elements,r.elements,kn):n instanceof nu&&r instanceof nu?kn(n.yt,r.yt):n instanceof tu&&r instanceof tu}(t.transform,e.transform)}class Kb{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ll(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ec{}function Kx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hp(t.key,cn.none()):new ca(t.key,t.data,cn.none());{const n=t.data,r=Ct.empty();let i=new je(dt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Or(t.key,r,new Yt(i.toArray()),cn.none())}}function Gb(t,e,n){t instanceof ca?function(r,i,s){const o=r.value.clone(),a=$y(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(r,i,s){if(!ll(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=$y(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Gx(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function no(t,e,n,r){return t instanceof ca?function(i,s,o,a){if(!ll(i.precondition,s))return o;const l=i.value.clone(),u=Fy(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(i,s,o,a){if(!ll(i.precondition,s))return o;const l=Fy(i.fieldTransforms,a,s),u=s.data;return u.setAll(Gx(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ll(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Qb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Bx(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function My(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Zi(n,r,(i,s)=>qb(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends ec{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Or extends ec{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Gx(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $y(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Wb(o,a,n[i]))}return r}function Fy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Hb(s,o,e))}return r}class Hp extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yb extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,re;function Jb(t){switch(t){default:return Q();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Qx(t){if(t===void 0)return Vn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Pe.OK:return T.OK;case Pe.CANCELLED:return T.CANCELLED;case Pe.UNKNOWN:return T.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return T.INTERNAL;case Pe.UNAVAILABLE:return T.UNAVAILABLE;case Pe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Pe.NOT_FOUND:return T.NOT_FOUND;case Pe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Pe.ABORTED:return T.ABORTED;case Pe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Pe.DATA_LOSS:return T.DATA_LOSS;default:return Q()}}(re=Pe||(Pe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ox(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=new Ve(j.comparator);function Hn(){return Zb}const Yx=new Ve(j.comparator);function js(...t){let e=Yx;for(const n of t)e=e.insert(n.key,n);return e}function Xx(t){let e=Yx;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return ro()}function Jx(){return ro()}function ro(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const eR=new Ve(j.comparator),tR=new je(j.comparator);function te(...t){let e=tR;for(const n of t)e=e.add(n);return e}const nR=new je(ue);function Zx(){return nR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ha.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tc(Z.min(),i,Zx(),Hn(),te())}}class ha{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ha(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class eE{constructor(e,n){this.targetId=e,this.At=n}}class tE{constructor(e,n,r=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Uy{constructor(){this.Rt=0,this.bt=jy(),this.Pt=yt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=te(),n=te(),r=te();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new ha(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=jy()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class rR{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Hn(),this.qt=zy(),this.Kt=new je(ue)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Qd(s))if(r===0){const o=new j(s.path);this.jt(n,o,nt.newNoDocument(o,Z.min()))}else ye(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Qd(a.target)){const l=new j(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,nt.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=te();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new tc(e,n,this.Kt,this.Ut,r);return this.Ut=Hn(),this.qt=zy(),this.Kt=new je(ue),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Uy,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new je(ue),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Uy),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function zy(){return new Ve(j.comparator)}function jy(){return new Ve(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class oR{constructor(e,n){this.databaseId=e,this.gt=n}}function ru(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nE(t,e){return t.gt?e.toBase64():e.toUint8Array()}function aR(t,e){return ru(t,e.toTimestamp())}function Ln(t){return ye(!!t),Z.fromTimestamp(function(e){const n=Cr(e);return new ze(n.seconds,n.nanos)}(t))}function Wp(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function rE(t){const e=Se.fromString(t);return ye(oE(e)),e}function Jd(t,e){return Wp(t.databaseId,e.path)}function Ih(t,e){const n=rE(e);if(n.get(1)!==t.databaseId.projectId)throw new z(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(iE(n))}function Zd(t,e){return Wp(t.databaseId,e)}function lR(t){const e=rE(t);return e.length===4?Se.emptyPath():iE(e)}function ef(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iE(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vy(t,e,n){return{name:Jd(t,e),fields:n.value.mapValue.fields}}function uR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(ye(u===void 0||typeof u=="string"),yt.fromBase64String(u||"")):(ye(u===void 0||u instanceof Uint8Array),yt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:Qx(l.code);return new z(u,l.message||"")}(o);n=new tE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ih(t,r.document.name),s=Ln(r.document.updateTime),o=new Ct({mapValue:{fields:r.document.fields}}),a=nt.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ul(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ih(t,r.document),s=r.readTime?Ln(r.readTime):Z.min(),o=nt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ul([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ih(t,r.document),s=r.removedTargetIds||[];n=new ul([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new Xb(i),o=r.targetId;n=new eE(o,s)}}return n}function cR(t,e){let n;if(e instanceof ca)n={update:Vy(t,e.key,e.value)};else if(e instanceof Hp)n={delete:Jd(t,e.key)};else if(e instanceof Or)n={update:Vy(t,e.key,e.data),updateMask:xR(e.fieldMask)};else{if(!(e instanceof Yb))return Q();n={verify:Jd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof tu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Fo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Uo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof nu)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:aR(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function hR(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ln(r.updateTime):Ln(i);return s.isEqual(Z.min())&&(s=Ln(i)),new Kb(s,r.transformResults||[])}(n,e))):[]}function dR(t,e){return{documents:[Zd(t,e.path)]}}function fR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Zd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Ry(h.value))return{unaryFilter:{field:vi(h.field),op:"IS_NAN"}};if(by(h.value))return{unaryFilter:{field:vi(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Ry(h.value))return{unaryFilter:{field:vi(h.field),op:"IS_NOT_NAN"}};if(by(h.value))return{unaryFilter:{field:vi(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vi(h.field),op:yR(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:vi(c.field),direction:gR(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Yu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function pR(t){let e=lR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=sE(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new to(Di(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Yu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new eu(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new eu(d,h)}(n.endAt)),$b(e,i,o,s,a,"F",l,u)}function mR(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function sE(t){return t?t.unaryFilter!==void 0?[wR(t)]:t.fieldFilter!==void 0?[vR(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>sE(e)).reduce((e,n)=>e.concat(n)):Q():[]}function gR(t){return iR[t]}function yR(t){return sR[t]}function vi(t){return{fieldPath:t.canonicalString()}}function Di(t){return dt.fromServerFormat(t.fieldPath)}function vR(t){return bt.create(Di(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}function wR(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Di(t.unaryFilter.field);return bt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Di(t.unaryFilter.field);return bt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Di(t.unaryFilter.field);return bt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Di(t.unaryFilter.field);return bt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}function xR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function oE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Gb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=no(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=no(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jx();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Kx(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Zi(this.mutations,e.mutations,(n,r)=>My(n,r))&&Zi(this.baseMutations,e.baseMutations,(n,r)=>My(n,r))}}class qp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=eR;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=yt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.re=e}}function kR(t){const e=pR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.Ye=new TR}addToCollectionParentIndex(e,n){return this.Ye.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Tr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class TR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ns(0)}static vn(){return new ns(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&no(r.mutation,i,Yt.empty(),ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Wr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=js();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Hn();const o=ro(),a=ro();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Or)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),no(c.mutation,u,c.mutation.getFieldMask(),ze.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new AR(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ro();let i=new Ve((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Yt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Jx();c.forEach(d=>{if(!s.has(d)){const g=Kx(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(Wr());let a=-1,l=s;return o.next(u=>A.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?A.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,te())).next(c=>({batchId:a,changes:Xx(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=js();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=js();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const l=function(u,c){return new Xu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,nt.newInvalidDocument(u)))});let o=js();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&no(u.mutation,l,Yt.empty(),ze.now()),Bp(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):A.resolve(nt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return A.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ln(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:kR(r.bundledQuery),readTime:Ln(r.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this.overlays=new Ve(j.comparator),this.es=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=Wr(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ve((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Wr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Wr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return A.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SR(n,r));let s=this.es.get(n);s===void 0&&(s=te(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.ns=new je(We.ss),this.rs=new je(We.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new We(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new We(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new j(new Se([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new j(new Se([])),r=new We(n,e),i=new We(n,e+1);let s=te();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return j.comparator(e.key,n.key)||ue(e._s,n._s)}static os(e,n){return ue(e._s,n._s)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new je(We.ss)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ER(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new We(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(ue);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),A.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new We(new j(s),0);let a=new je(ue);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),A.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return A.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new We(n,0),i=this.gs.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.Es=e,this.docs=new Ve(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Hn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),A.resolve(r)}getAllFromCollection(e,n,r){let i=Hn();const s=new j(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||xb(wb(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,i){Q()}As(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new OR(this)}getSize(e){return A.resolve(this.size)}}class OR extends CR{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.persistence=e,this.Rs=new ms(n=>zp(n),jp),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Kp,this.targetCount=0,this.vs=ns.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),A.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ns(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Dn(n),A.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Fp(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new LR(this),this.indexManager=new IR,this.remoteDocumentCache=function(r){return new PR(r)}(r=>this.referenceDelegate.xs(r)),this.It=new _R(n),this.Ns=new RR(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new DR(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new $R(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return A.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class $R extends Sb{constructor(e){super(),this.currentSequenceNumber=e}}class Gp{constructor(e){this.persistence=e,this.Fs=new Kp,this.$s=null}static Bs(e){return new Gp(e)}get Ls(){if(this.$s)return this.$s;throw Q()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),A.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ls,r=>{const i=j.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return A.or([()=>A.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Oy(n))return A.resolve(null);let r=Bn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yd(n,null,"F"),r=Bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Yd(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return Oy(n)||i.isEqual(Z.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(Iy()<=oe.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xd(n)),this.Bi(e,o,n,vb(i,-1)))})}Fi(e,n){let r=new je(zx(e));return n.forEach((i,s)=>{Bp(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return Iy()<=oe.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Xd(n)),this.Ni.getDocumentsMatchingQuery(e,n,Tr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Ve(ue),this.qi=new ms(s=>zp(s),jp),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bR(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function zR(t,e,n,r){return new UR(t,e,n,r)}async function aE(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function jR(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=A.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const x=l.docVersions.get(g);ye(x!==null),y.version.compareTo(x)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=te();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function lE(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function VR(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(yt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,x,S){return y.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=Hn(),u=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(BR(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(Z.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function BR(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Hn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function HR(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function WR(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Qr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function tf(t,e,n){const r=Y(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ua(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function By(t,e,n){const r=Y(t);let i=Z.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=Y(a),h=c.qi.get(u);return h!==void 0?A.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,Bn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:te())).next(a=>(qR(r,jb(e),a),{documents:a,Hi:s})))}function qR(t,e,n){let r=t.Ki.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class Hy{constructor(){this.activeTargetIds=Zx()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KR{constructor(){this.Lr=new Hy,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Hy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);U("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(U("RestConnection","Received: ",l),l),l=>{throw qd("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ps,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=QR[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new lb;a.setWithCredentials(!0),a.listenOnce(sb.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case kh.NO_ERROR:const c=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(c)),s(c);break;case kh.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new z(T.DEADLINE_EXCEEDED,"Request time out"));break;case kh.HTTP_ERROR:const h=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=(u=d)===null||u===void 0?void 0:u.error;if(g&&g.status&&g.message){const y=function(x){const S=x.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(S)>=0?S:T.UNKNOWN}(g.status);o(new z(y,g.message))}else o(new z(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new z(T.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=rb(),o=ib(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ab({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");U("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new YR({Hr:y=>{h?U("Connection","Not sending because WebChannel is closed:",y):(c||(U("Connection","Opening WebChannel transport."),u.open(),c=!0),U("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,x,S)=>{y.listen(x,p=>{try{S(p)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,ja.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),g(u,ja.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),d.io())}),g(u,ja.EventType.ERROR,y=>{h||(h=!0,qd("Connection","WebChannel transport errored:",y),d.io(new z(T.UNAVAILABLE,"The operation could not be completed")))}),g(u,ja.EventType.MESSAGE,y=>{var x;if(!h){const S=y.data[0];ye(!!S);const p=S,f=p.error||((x=p[0])===null||x===void 0?void 0:x.error);if(f){U("Connection","WebChannel received error:",f);const v=f.status;let E=function(D){const O=Pe[D];if(O!==void 0)return Qx(O)}(v),_=f.message;E===void 0&&(E=T.INTERNAL,_="Unknown error status: "+v+" with message "+f.message),h=!0,d.io(new z(E,_)),u.close()}else U("Connection","WebChannel received:",S),d.ro(S)}}),g(o,ob.STAT_EVENT,y=>{y.stat===_y.PROXY?U("Connection","Detected buffering proxy"):y.stat===_y.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Th(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t){return new oR(t,!0)}class uE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new uE(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new z(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JR extends cE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=uR(this.It,e),r=function(i){if(!("targetChange"in i))return Z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Z.min():s.readTime?Ln(s.readTime):Z.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=ef(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Qd(a)?{documents:dR(i,a)}:{query:fR(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=nE(i,s.resumeToken):s.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=ru(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=mR(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=ef(this.It),n.removeTarget=e,this.Bo(n)}}class ZR extends cE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=hR(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.Zo(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ef(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cR(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new z(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(T.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(T.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class tN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Vn(n),this.ou=!1):U("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{gi(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Y(a);l._u.add(4),await da(l),l.gu.set("Unknown"),l._u.delete(4),await rc(l)}(this))})}),this.gu=new tN(r,i)}}async function rc(t){if(gi(t))for(const e of t.wu)await e(!0)}async function da(t){for(const e of t.wu)await e(!1)}function hE(t,e){const n=Y(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Jp(n)?Xp(n):gs(n).ko()&&Yp(n,e))}function dE(t,e){const n=Y(t),r=gs(n);n.du.delete(e),r.ko()&&fE(n,e),n.du.size===0&&(r.ko()?r.Fo():gi(n)&&n.gu.set("Unknown"))}function Yp(t,e){t.yu.Mt(e.targetId),gs(t).zo(e)}function fE(t,e){t.yu.Mt(e),gs(t).Ho(e)}function Xp(t){t.yu=new rR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),gs(t).start(),t.gu.uu()}function Jp(t){return gi(t)&&!gs(t).No()&&t.du.size>0}function gi(t){return Y(t)._u.size===0}function pE(t){t.yu=void 0}async function rN(t){t.du.forEach((e,n)=>{Yp(t,e)})}async function iN(t,e){pE(t),Jp(t)?(t.gu.hu(e),Xp(t)):t.gu.set("Unknown")}async function sN(t,e,n){if(t.gu.set("Online"),e instanceof tE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await iu(t,r)}else if(e instanceof ul?t.yu.Gt(e):e instanceof eE?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(Z.min()))try{const r=await lE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(yt.EMPTY_BYTE_STRING,l.snapshotVersion)),fE(i,a);const u=new Qr(l.target,a,1,l.sequenceNumber);Yp(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await iu(t,r)}}async function iu(t,e,n){if(!ua(e))throw e;t._u.add(1),await da(t),t.gu.set("Offline"),n||(n=()=>lE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await rc(t)})}function mE(t,e){return e().catch(n=>iu(t,n,e))}async function ic(t){const e=Y(t),n=Ar(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;oN(e);)try{const i=await HR(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,aN(e,i)}catch(i){await iu(e,i)}gE(e)&&yE(e)}function oN(t){return gi(t)&&t.fu.length<10}function aN(t,e){t.fu.push(e);const n=Ar(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function gE(t){return gi(t)&&!Ar(t).No()&&t.fu.length>0}function yE(t){Ar(t).start()}async function lN(t){Ar(t).eu()}async function uN(t){const e=Ar(t);for(const n of t.fu)e.Xo(n.mutations)}async function cN(t,e,n){const r=t.fu.shift(),i=qp.from(r,e,n);await mE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ic(t)}async function hN(t,e){e&&Ar(t).Yo&&await async function(n,r){if(i=r.code,Jb(i)&&i!==T.ABORTED){const s=n.fu.shift();Ar(n).Mo(),await mE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ic(n)}var i}(t,e),gE(t)&&yE(t)}async function qy(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=gi(n);n._u.add(3),await da(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await rc(n)}async function dN(t,e){const n=Y(t);e?(n._u.delete(2),await rc(n)):e||(n._u.add(2),await da(n),n.gu.set("Unknown"))}function gs(t){return t.pu||(t.pu=function(e,n,r){const i=Y(e);return i.su(),new JR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:rN.bind(null,t),Zr:iN.bind(null,t),Wo:sN.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Jp(t)?Xp(t):t.gu.set("Unknown")):(await t.pu.stop(),pE(t))})),t.pu}function Ar(t){return t.Iu||(t.Iu=function(e,n,r){const i=Y(e);return i.su(),new ZR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:lN.bind(null,t),Zr:hN.bind(null,t),tu:uN.bind(null,t),Zo:cN.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await ic(t)):(await t.Iu.stop(),t.fu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Zp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function em(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),ua(t))return new z(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=js(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.Tu=new Ve(j.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):Q():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class rs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new rs(e,n,Vi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(){this.Au=void 0,this.listeners=[]}}class pN{constructor(){this.queries=new ms(e=>Ux(e),Ju),this.onlineState="Unknown",this.Ru=new Set}}async function vE(t,e){const n=Y(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new fN),i)try{s.Au=await n.onListen(r)}catch(o){const a=em(o,`Initialization of query '${Xd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&tm(n)}async function wE(t,e){const n=Y(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function mN(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&tm(n)}function gN(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function tm(t){t.Ru.forEach(e=>{e.next()})}class xE{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.key=e}}class SE{constructor(e){this.key=e}}class yN{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=te(),this.mutatedKeys=te(),this.Gu=zx(e),this.Qu=new Vi(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Ky,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Bp(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),x=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;d&&g?d.data.isEqual(g.data)?y!==x&&(r.track({type:3,doc:g}),S=!0):this.Hu(d,g)||(r.track({type:2,doc:g}),S=!0,(l&&this.Gu(g,l)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),S=!0):d&&!g&&(r.track({type:1,doc:d}),S=!0,(l||u)&&(a=!0)),S&&(g?(o=o.add(g),s=x?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return g(h)-g(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new rs(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Ky,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=te(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new SE(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new EE(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=te();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return rs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class vN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wN{constructor(e){this.key=e,this.nc=!1}}class xN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ms(a=>Ux(a),Ju),this.rc=new Map,this.oc=new Set,this.uc=new Ve(j.comparator),this.cc=new Map,this.ac=new Kp,this.hc={},this.lc=new Map,this.fc=ns.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function EN(t,e){const n=NN(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await WR(n.localStore,Bn(e));n.isPrimaryClient&&hE(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await SN(n,e,r,a==="current",o.resumeToken)}return i}async function SN(t,e,n,r,i){t._c=(h,d,g)=>async function(y,x,S,p){let f=x.view.Wu(S);f.$i&&(f=await By(y.localStore,x.query,!1).then(({documents:_})=>x.view.Wu(_,f)));const v=p&&p.targetChanges.get(x.targetId),E=x.view.applyChanges(f,y.isPrimaryClient,v);return Qy(y,x.targetId,E.Xu),E.snapshot}(t,h,d,g);const s=await By(t.localStore,e,!0),o=new yN(e,s.Hi),a=o.Wu(s.documents),l=ha.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Qy(t,n,u.Xu);const c=new vN(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function _N(t,e){const n=Y(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Ju(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await tf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),dE(n.remoteStore,r.targetId),nf(n,r.targetId)}).catch(la)):(nf(n,r.targetId),await tf(n.localStore,r.targetId,!0))}async function kN(t,e,n){const r=DN(t);try{const i=await function(s,o){const a=Y(s),l=ze.now(),u=o.reduce((d,g)=>d.add(g.key),te());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Hn(),y=te();return a.Gi.getEntries(d,u).next(x=>{g=x,g.forEach((S,p)=>{p.isValidDocument()||(y=y.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(x=>{c=x;const S=[];for(const p of o){const f=Qb(p,c.get(p.key).overlayedDocument);f!=null&&S.push(new Or(p.key,f,$x(f.value.mapValue),cn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,S,o)}).next(x=>{h=x;const S=x.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,x.batchId,S)})}).then(()=>({batchId:h.batchId,changes:Xx(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Ve(ue)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await fa(r,i.changes),await ic(r.remoteStore)}catch(i){const s=em(i,"Failed to persist write");n.reject(s)}}async function _E(t,e){const n=Y(t);try{const r=await VR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?ye(o.nc):i.removedDocuments.size>0&&(ye(o.nc),o.nc=!1))}),await fa(n,r,e)}catch(r){await la(r)}}function Gy(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Y(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&tm(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IN(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Ve(j.comparator);o=o.insert(s,nt.newNoDocument(s,Z.min()));const a=te().add(s),l=new tc(Z.min(),new Map,new je(ue),o,a);await _E(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),nm(r)}else await tf(r.localStore,e,!1).then(()=>nf(r,e,n)).catch(la)}async function TN(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await jR(n.localStore,e);IE(n,r,null),kE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fa(n,i)}catch(i){await la(i)}}async function CN(t,e,n){const r=Y(t);try{const i=await function(s,o){const a=Y(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ye(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);IE(r,e,n),kE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fa(r,i)}catch(i){await la(i)}}function kE(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function IE(t,e,n){const r=Y(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function nf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||TE(t,r)})}function TE(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(dE(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),nm(t))}function Qy(t,e,n){for(const r of n)r instanceof EE?(t.ac.addReference(r.key,e),AN(t,r)):r instanceof SE?(U("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||TE(t,r.key)):Q()}function AN(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(U("SyncEngine","New document in limbo: "+n),t.oc.add(r),nm(t))}function nm(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new j(Se.fromString(e)),r=t.fc.next();t.cc.set(r,new wN(n)),t.uc=t.uc.insert(n,r),hE(t.remoteStore,new Qr(Bn(Vp(n.path)),r,2,Fp.at))}}async function fa(t,e,n){const r=Y(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Qp.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=Y(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>A.forEach(l,h=>A.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>A.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ua(c))throw c;U("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(h,y)}}}(r.localStore,s))}async function bN(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await aE(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new z(T.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fa(n,r.ji)}}function RN(t,e){const n=Y(t),r=n.cc.get(e);if(r&&r.nc)return te().add(r.key);{let i=te();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function NN(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_E.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IN.bind(null,e),e.sc.Wo=mN.bind(null,e.eventManager),e.sc.wc=gN.bind(null,e.eventManager),e}function DN(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CN.bind(null,e),e}class PN{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=nc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return zR(this.persistence,new FR,e.initialUser,this.It)}yc(e){return new MR(Gp.Bs,this.It)}gc(e){return new KR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ON{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bN.bind(null,this.syncEngine),await dN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new pN}createDatastore(e){const n=nc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new XR(i));var i;return function(s,o,a,l){return new eN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Gy(this.syncEngine,a,0),o=Wy.C()?new Wy:new GR,new nN(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new xN(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);U("RemoteStore","RemoteStore shutting down."),n._u.add(5),await da(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t,e,n){if(!n)throw new z(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LN(t,e,n,r){if(e===!0&&r===!0)throw new z(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yy(t){if(!j.isDocumentKey(t))throw new z(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xy(t){if(j.isDocumentKey(t))throw new z(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rm(t);throw new z(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=new Map;class Zy{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,LN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ub;switch(n.type){case"gapi":const r=n.client;return new fb(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Jy.get(e);n&&(U("ComponentProvider","Removing Datastore"),Jy.delete(e),n.terminate())}(this),Promise.resolve()}}function MN(t,e,n,r={}){var i;const s=(t=Wn(t,sc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&qd("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ct.MOCK_USER;else{o=TT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new z(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ct(l)}t._authCredentials=new cb(new Dx(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class oc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oc(this.firestore,e,this._query)}}class Er extends oc{constructor(e,n,r){super(e,n,Vp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new j(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function $N(t,e,...n){if(t=Me(t),CE("collection","path",e),t instanceof sc){const r=Se.fromString(e,...n);return Xy(r),new Er(t,null,r)}{if(!(t instanceof $t||t instanceof Er))throw new z(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Xy(r),new Er(t.firestore,null,r)}}function cl(t,e,...n){if(t=Me(t),arguments.length===1&&(e=Px.R()),CE("doc","path",e),t instanceof sc){const r=Se.fromString(e,...n);return Yy(r),new $t(t,null,new j(r))}{if(!(t instanceof $t||t instanceof Er))throw new z(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Yy(r),new $t(t.firestore,t instanceof Er?t.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=Px.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=em(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function UN(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await aE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function zN(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jN(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>qy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>qy(e.remoteStore,s)),t.onlineComponents=e}async function jN(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await UN(t,new PN)),t.offlineComponents}async function bE(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await zN(t,new ON)),t.onlineComponents}function VN(t){return bE(t).then(e=>e.syncEngine)}async function RE(t){const e=await bE(t),n=e.eventManager;return n.onListen=EN.bind(null,e.syncEngine),n.onUnlisten=_N.bind(null,e.syncEngine),n}function BN(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new AE({next:h=>{s.enqueueAndForget(()=>wE(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new z(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new z(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new xE(Vp(o.path),u,{includeMetadataChanges:!0,Nu:!0});return vE(i,c)}(await RE(t),t.asyncQueue,e,n,r)),r.promise}function HN(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new AE({next:h=>{s.enqueueAndForget(()=>wE(i,c)),h.fromCache&&a.source==="server"?l.reject(new z(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new xE(o,u,{includeMetadataChanges:!0,Nu:!0});return vE(i,c)}(await RE(t),t.asyncQueue,e,n,r)),r.promise}class WN{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new uE(this,"async_queue_retry"),this.Wc=()=>{const n=Th();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Th();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Th();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new On;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ua(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Zp.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&Q()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class ys extends sc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new WN,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||NE(this),this._firestoreClient.terminate()}}function qN(t,e){const n=typeof t=="object"?t:hp(),r=typeof t=="string"?t:e||"(default)",i=fi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_T("firestore");s&&MN(i,...s)}return i}function im(t){return t._firestoreClient||NE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function NE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new kb(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new FN(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new is(yt.fromBase64String(e))}catch(n){throw new z(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new is(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=/^__.*__$/;class GN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new ca(e,this.data,n,this.fieldTransforms)}}class DE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function PE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class am{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new am(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return su(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(PE(this.sa)&&KN.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class QN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||nc(e)}da(e,n,r,i=!1){return new am({sa:e,methodName:n,fa:r,path:dt.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function OE(t){const e=t._freezeSettings(),n=nc(t._databaseId);return new QN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function YN(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);lm("Data must be an object, but it was:",o,r);const a=LE(r,o);let l,u;if(s.merge)l=new Yt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=rf(e,h,n);if(!o.contains(d))throw new z(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);$E(c,d)||c.push(d)}l=new Yt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new GN(new Ct(a),l,u)}class lc extends sm{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lc}}function XN(t,e,n,r){const i=t.da(1,e,n);lm("Data must be an object, but it was:",i,r);const s=[],o=Ct.empty();mi(r,(l,u)=>{const c=um(e,l,n);u=Me(u);const h=i.ca(c);if(u instanceof lc)s.push(c);else{const d=uc(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Yt(s);return new DE(o,a,i.fieldTransforms)}function JN(t,e,n,r,i,s){const o=t.da(1,e,n),a=[rf(e,r,n)],l=[i];if(s.length%2!=0)throw new z(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(rf(e,s[d])),l.push(s[d+1]);const u=[],c=Ct.empty();for(let d=a.length-1;d>=0;--d)if(!$E(u,a[d])){const g=a[d];let y=l[d];y=Me(y);const x=o.ca(g);if(y instanceof lc)u.push(g);else{const S=uc(y,x);S!=null&&(u.push(g),c.set(g,S))}}const h=new Yt(u);return new DE(c,h,o.fieldTransforms)}function uc(t,e){if(ME(t=Me(t)))return lm("Unsupported field value:",e,t),LE(t,e);if(t instanceof sm)return function(n,r){if(!PE(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=uc(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Bb(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ze.fromDate(n);return{timestampValue:ru(r.It,i)}}if(n instanceof ze){const i=new ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ru(r.It,i)}}if(n instanceof om)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof is)return{bytesValue:nE(r.It,n._byteString)};if(n instanceof $t){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${rm(n)}`)}(t,e)}function LE(t,e){const n={};return Ox(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mi(t,(r,i)=>{const s=uc(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ME(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof om||t instanceof is||t instanceof $t||t instanceof sm)}function lm(t,e,n){if(!ME(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=rm(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function rf(t,e,n){if((e=Me(e))instanceof ac)return e._internalPath;if(typeof e=="string")return um(t,e);throw su("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZN=new RegExp("[~\\*/\\[\\]]");function um(t,e,n){if(e.search(ZN)>=0)throw su(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ac(...e.split("."))._internalPath}catch{throw su(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function su(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(T.INVALID_ARGUMENT,a+t+l)}function $E(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(UE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eD extends FE{data(){return super.data()}}function UE(t,e){return typeof e=="string"?um(t,e):e instanceof ac?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{convertValue(e,n="none"){switch(oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const r={};return mi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new om(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mx(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oo(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);ye(oE(r));const i=new Lo(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||Vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zE extends FE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(UE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class hl extends zE{data(e={}){return super.data(e)}}class iD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new hl(this._firestore,this._userDataWriter,r.key,r,new Vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new hl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Vs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new hl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Vs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:sD(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(t){t=Wn(t,$t);const e=Wn(t.firestore,ys);return BN(im(e),t._key).then(n=>hD(e,t,n))}class jE extends nD{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function aD(t){t=Wn(t,oc);const e=Wn(t.firestore,ys),n=im(e),r=new jE(e);return tD(t._query),HN(n,t._query).then(i=>new iD(e,r,t,i))}function lD(t,e,n,...r){t=Wn(t,$t);const i=Wn(t.firestore,ys),s=OE(i);let o;return o=typeof(e=Me(e))=="string"||e instanceof ac?JN(s,"updateDoc",t._key,e,n,r):XN(s,"updateDoc",t._key,e),cm(i,[o.toMutation(t._key,cn.exists(!0))])}function uD(t){return cm(Wn(t.firestore,ys),[new Hp(t._key,cn.none())])}function cD(t,e){const n=Wn(t.firestore,ys),r=cl(t),i=rD(t.converter,e);return cm(n,[YN(OE(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,cn.exists(!1))]).then(()=>r)}function cm(t,e){return function(n,r){const i=new On;return n.asyncQueue.enqueueAndForget(async()=>kN(await VN(n),r,i)),i.promise}(im(t),e)}function hD(t,e,n){const r=n.docs.get(e._key),i=new jE(t);return new zE(t,i,e._key,r,new Vs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ps=n})(Jo),_n(new dn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ys(new hb(n.getProvider("auth-internal")),new mb(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Gt(ky,"3.7.3",t),Gt(ky,"3.7.3","esm2017")})();function hm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function VE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dD=VE,BE=new di("auth","Firebase",VE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=new Du("@firebase/auth");function dl(t,...e){e0.logLevel<=oe.ERROR&&e0.error(`Auth (${Jo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw dm(t,...e)}function En(t,...e){return dm(t,...e)}function fD(t,e,n){const r=Object.assign(Object.assign({},dD()),{[e]:n});return new di("auth","Firebase",r).create(e,{appName:t.name})}function dm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return BE.create(t,...e)}function V(t,e,...n){if(!t)throw dm(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dl(e),new Error(e)}function qn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=new Map;function Nn(t){qn(t instanceof Function,"Expected a class definition");let e=t0.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,t0.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t,e){const n=fi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(To(s,e!=null?e:{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function mD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gD(){return n0()==="http:"||n0()==="https:"}function n0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gD()||Y1()||"connection"in navigator)?navigator.onLine:!0}function vD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=mT()||gT()}get(){return yD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=new pa(3e4,6e4);function vs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ws(t,e,n,r,i={}){return WE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Xo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),HE.fetch()(qE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function WE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wD),e);try{const i=new ED(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ha(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ha(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ha(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ha(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fD(t,c,u);fn(t,c)}}catch(i){if(i instanceof pn)throw i;fn(t,"network-request-failed")}}async function ma(t,e,n,r,i={}){const s=await ws(t,e,n,r,i);return"mfaPendingCredential"in s&&fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?fm(t.config,i):`${t.config.apiScheme}://${i}`}class ED{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),xD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ha(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=En(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SD(t,e){return ws(t,"POST","/v1/accounts:delete",e)}async function _D(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kD(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=pm(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:io(Ch(i.auth_time)),issuedAtTime:io(Ch(i.iat)),expirationTime:io(Ch(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ch(t){return Number(t)*1e3}function pm(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return dl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Q1(r);return s?JSON.parse(s):(dl("Failed to decode base64 JWT payload"),null)}catch(s){return dl("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function ID(t){const e=pm(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&TD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function TD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ou(t){var e;const n=t.auth,r=await t.getIdToken(),i=await zo(t,_D(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?RD(s.providerUserInfo):[],a=bD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new KE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function AD(t){const e=Me(t);await ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function RD(t){return t.map(e=>{var{providerId:n}=e,r=hm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ND(t,e){const n=await WE(t,{},async()=>{const r=Xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=qE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",HE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ID(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ND(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new jo;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jo,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=hm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new KE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await zo(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kD(this,e)}reload(){return AD(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ou(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zo(this,SD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:_,providerData:D,stsTokenManager:O}=n;V(v&&O,e,"internal-error");const L=jo.fromJSON(this.name,O);V(typeof v=="string",e,"internal-error"),Jn(h,e.name),Jn(d,e.name),V(typeof E=="boolean",e,"internal-error"),V(typeof _=="boolean",e,"internal-error"),Jn(g,e.name),Jn(y,e.name),Jn(x,e.name),Jn(S,e.name),Jn(p,e.name),Jn(f,e.name);const J=new Yr({uid:v,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:_,photoURL:y,phoneNumber:g,tenantId:x,stsTokenManager:L,createdAt:p,lastLoginAt:f});return D&&Array.isArray(D)&&(J.providerData=D.map(B=>Object.assign({},B))),S&&(J._redirectEventId=S),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new jo;i.updateFromServerResponse(n);const s=new Yr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ou(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GE.type="NONE";const r0=GE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t,e,n){return`firebase:${t}:${e}:${n}`}class Bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=fl(this.userKey,i.apiKey,s),this.fullPersistenceKey=fl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bi(Nn(r0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nn(r0);const o=fl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Yr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Bi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Bi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(QE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZE(e))return"Blackberry";if(eS(e))return"Webos";if(mm(e))return"Safari";if((e.includes("chrome/")||YE(e))&&!e.includes("edge/"))return"Chrome";if(JE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function QE(t=gt()){return/firefox\//i.test(t)}function mm(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function YE(t=gt()){return/crios\//i.test(t)}function XE(t=gt()){return/iemobile/i.test(t)}function JE(t=gt()){return/android/i.test(t)}function ZE(t=gt()){return/blackberry/i.test(t)}function eS(t=gt()){return/webos/i.test(t)}function cc(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DD(t=gt()){var e;return cc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PD(){return yT()&&document.documentMode===10}function tS(t=gt()){return cc(t)||JE(t)||eS(t)||ZE(t)||/windows phone/i.test(t)||XE(t)}function OD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t,e=[]){let n;switch(t){case"Browser":n=i0(gt());break;case"Worker":n=`${i0(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new s0(this),this.idTokenSubscription=new s0(this),this.beforeStateQueue=new LD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ou(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Me(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new di("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ga(t){return Me(t)}class s0{constructor(e){this.auth=e,this.observer=null,this.addObserver=NT(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function $D(t,e,n){const r=ga(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=rS(e),{host:o,port:a}=FD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||UD()}function rS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FD(t){const e=rS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:o0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:o0(o)}}}function o0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function zD(t,e){return ws(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD(t,e){return ma(t,"POST","/v1/accounts:signInWithPassword",vs(t,e))}async function VD(t,e){return ws(t,"POST","/v1/accounts:sendOobCode",vs(t,e))}async function BD(t,e){return VD(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HD(t,e){return ma(t,"POST","/v1/accounts:signInWithEmailLink",vs(t,e))}async function WD(t,e){return ma(t,"POST","/v1/accounts:signInWithEmailLink",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends gm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Vo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return jD(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return HD(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return zD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return WD(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e){return ma(t,"POST","/v1/accounts:signInWithIdp",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD="http://localhost";class ai extends gm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=hm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hi(e,n)}buildRequest(){const e={requestUri:qD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GD(t){const e=$s(Fs(t)).link,n=e?$s(Fs(e)).deep_link_id:null,r=$s(Fs(t)).deep_link_id;return(r?$s(Fs(r)).link:null)||r||n||e||t}class ym{constructor(e){var n,r,i,s,o,a;const l=$s(Fs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=KD((i=l.mode)!==null&&i!==void 0?i:null);V(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=GD(e);try{return new ym(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.providerId=xs.PROVIDER_ID}static credential(e,n){return Vo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ym.parseLink(n);return V(r,"argument-error"),Vo._fromEmailAndCode(e,r.code,r.tenantId)}}xs.PROVIDER_ID="password";xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends iS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ya{constructor(){super("facebook.com")}static credential(e){return ai._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ai._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends ya{constructor(){super("github.com")}static credential(e){return ai._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends ya{constructor(){super("twitter.com")}static credential(e,n){return ai._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(t,e){return ma(t,"POST","/v1/accounts:signUp",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yr._fromIdTokenResponse(e,r,i),o=a0(r);return new li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=a0(r);return new li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function a0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,au.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new au(e,n,r,i)}}function sS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?au._fromErrorAndOperation(t,s,e,r):s})}async function YD(t,e,n=!1){const r=await zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XD(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await zo(t,sS(i,s,e,t),n);V(o.idToken,i,"internal-error");const a=pm(o.idToken);V(a,i,"internal-error");const{sub:l}=a;return V(t.uid===l,i,"user-mismatch"),li._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&fn(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(t,e,n=!1){const r="signIn",i=await sS(t,r,e),s=await li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function JD(t,e){return oS(ga(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(t,e,n){var r;V(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),V(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(V(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(V(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e,n){const r=Me(t),i={requestType:"PASSWORD_RESET",email:e};n&&ZD(r,i,n),await BD(r,i)}async function tP(t,e,n){const r=ga(t),i=await QD(r,{returnSecureToken:!0,email:e,password:n}),s=await li._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function nP(t,e,n){return JD(Me(t),xs.credential(e,n))}function rP(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function iP(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function sP(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function oP(t){return Me(t).signOut()}const lu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lu,"1"),this.storage.removeItem(lu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(){const t=gt();return mm(t)||cc(t)}const lP=1e3,uP=10;class lS extends aS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aP()&&OD(),this.fallbackToPolling=tS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);PD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lS.type="LOCAL";const cP=lS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS extends aS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uS.type="SESSION";const cS=uS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await hP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=vm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function fP(t){Sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function pP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gP(){return hS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="firebaseLocalStorageDb",yP=1,uu="firebaseLocalStorage",fS="fbase_key";class va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dc(t,e){return t.transaction([uu],e?"readwrite":"readonly").objectStore(uu)}function vP(){const t=indexedDB.deleteDatabase(dS);return new va(t).toPromise()}function of(){const t=indexedDB.open(dS,yP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uu,{keyPath:fS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uu)?e(r):(r.close(),await vP(),e(await of()))})})}async function l0(t,e,n){const r=dc(t,!0).put({[fS]:e,value:n});return new va(r).toPromise()}async function wP(t,e){const n=dc(t,!1).get(e),r=await new va(n).toPromise();return r===void 0?null:r.value}function u0(t,e){const n=dc(t,!0).delete(e);return new va(n).toPromise()}const xP=800,EP=3;class pS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await of(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(gP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pP(),!this.activeServiceWorker)return;this.sender=new dP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await of();return await l0(e,lu,"1"),await u0(e,lu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>l0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>u0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=dc(i,!1).getAll();return new va(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pS.type="LOCAL";const SP=pS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=En("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_P().appendChild(r)})}function IP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new pa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t,e){return e?Nn(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm extends gm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CP(t){return oS(t.auth,new wm(t),t.bypassAuthState)}function AP(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),XD(n,new wm(t),t.bypassAuthState)}async function bP(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),YD(n,new wm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CP;case"linkViaPopup":case"linkViaRedirect":return bP;case"reauthViaPopup":case"reauthViaRedirect":return AP;default:fn(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=new pa(2e3,1e4);class Pi extends mS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pi.currentPopupAction&&Pi.currentPopupAction.cancel(),Pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=vm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,RP.get())};e()}}Pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP="pendingRedirect",pl=new Map;class DP extends mS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pl.get(this.auth._key());if(!e){try{const r=await PP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pl.set(this.auth._key(),e)}return this.bypassAuthState||pl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PP(t,e){const n=MP(e),r=LP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function OP(t,e){pl.set(t._key(),e)}function LP(t){return Nn(t._redirectPersistence)}function MP(t){return fl(NP,t.config.apiKey,t.name)}async function $P(t,e,n=!1){const r=ga(t),i=TP(r,e),o=await new DP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=10*60*1e3;class UP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FP&&this.cachedEventUids.clear(),this.cachedEventUids.has(c0(e))}saveEventToCache(e){this.cachedEventUids.add(c0(e)),this.lastProcessedEventTime=Date.now()}}function c0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(t,e={}){return ws(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BP=/^https?/;async function HP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jP(t);for(const n of e)try{if(WP(n))return}catch{}fn(t,"unauthorized-domain")}function WP(t){const e=sf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BP.test(n))return!1;if(VP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=new pa(3e4,6e4);function h0(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KP(t){return new Promise((e,n)=>{var r,i,s;function o(){h0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{h0(),n(En(t,"network-request-failed"))},timeout:qP.get()})}if(!((i=(r=Sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Sn().gapi)===null||s===void 0)&&s.load)o();else{const a=IP("iframefcb");return Sn()[a]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},kP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ml=null,e})}let ml=null;function GP(t){return ml=ml||KP(t),ml}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=new pa(5e3,15e3),YP="__/auth/iframe",XP="emulator/auth/iframe",JP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eO(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fm(e,XP):`https://${t.config.authDomain}/${YP}`,r={apiKey:e.apiKey,appName:t.name,v:Jo},i=ZP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xo(r).slice(1)}`}async function tO(t){const e=await GP(t),n=Sn().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:eO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),a=Sn().setTimeout(()=>{s(o)},QP.get());function l(){Sn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rO=500,iO=600,sO="_blank",oO="http://localhost";class d0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aO(t,e,n,r=rO,i=iO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},nO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=gt().toLowerCase();n&&(a=YE(u)?sO:n),QE(u)&&(e=e||oO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(DD(u)&&a!=="_self")return lO(e||"",a),new d0(null);const h=window.open(e||"",a,c);V(h,t,"popup-blocked");try{h.focus()}catch{}return new d0(h)}function lO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO="__/auth/handler",cO="emulator/auth/handler";function f0(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jo,eventId:i};if(e instanceof iS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof ya){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${hO(t)}?${Xo(a).slice(1)}`}function hO({config:t}){return t.emulator?fm(t,cO):`https://${t.authDomain}/${uO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="webStorageSupport";class dO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cS,this._completeRedirectFn=$P,this._overrideRedirectResult=OP}async _openPopup(e,n,r,i){var s;qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=f0(e,n,r,sf(),i);return aO(e,o,vm())}async _openRedirect(e,n,r,i){return await this._originValidation(e),fP(f0(e,n,r,sf(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tO(e),r=new UP(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ah,{type:Ah},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ah];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tS()||mm()||cc()}}const fO=dO;var p0="@firebase/auth",m0="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gO(t){_n(new dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{V(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nS(t)},c=new MD(a,l,u);return mD(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_n(new dn("auth-internal",e=>{const n=ga(e.getProvider("auth").getImmediate());return(r=>new pO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(p0,m0,mO(t)),Gt(p0,m0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=5*60,vO=ew("authIdTokenMaxAge")||yO;let g0=null;const wO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vO)return;const i=n==null?void 0:n.token;g0!==i&&(g0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xO(t=hp()){const e=fi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pD(t,{popupRedirectResolver:fO,persistence:[SP,cP,cS]}),r=ew("authTokenSyncURL");if(r){const s=wO(r);iP(n,s,()=>s(n.currentUser)),rP(n,o=>s(o))}const i=Z1("auth");return i&&$D(n,`http://${i}`),n}gO("Browser");const EO="AIzaSyDJLEoAuOr25kvx4s_kJ_997bqyS6L67pc",SO="silvina-silberman-app.firebaseapp.com",_O="silvina-silberman-app",kO="silvina-silberman-app.appspot.com",IO="966120955897",TO="1:966120955897:web:712fc084e3461a4c3b6728",CO="G-L9SXFZSKDC",AO={apiKey:EO,authDomain:SO,projectId:_O,storageBucket:kO,messagingSenderId:IO,appId:TO,measurementId:CO},xm=iw(AO);rA(xm);const Wa=qN(xm),Ds=xO(xm),Lr=I.exports.createContext();function bO(t){const e=$N(Wa,"products"),n=async x=>{const S=await aD(e);x(S.docs.map(p=>({...p.data(),id:p.id})))},r=async(x,S)=>{const p=await oD(cl(Wa,"products",S));x(p.data())},i=async x=>{await cD(e,x)},s=async(x,S)=>{const p=cl(Wa,"products",x);await lD(p,S)},o=async x=>{const S=cl(Wa,"products",x);await uD(S)},[a,l]=I.exports.useState(null),[u,c]=I.exports.useState(!0),h=async(x,S)=>{await tP(Ds,x,S)},d=(x,S)=>{nP(Ds,x,S)},g=async x=>eP(Ds,x),y=()=>{oP(Ds)};return I.exports.useEffect(()=>{const x=sP(Ds,S=>{l(S),c(!1)});return()=>x()},[]),m(Lr.Provider,{value:{getProducts:n,getProductById:r,createProduct:i,updateProduct:s,deleteProduct:o,createAdminUser:h,loginAdminUser:d,resetPassword:g,logout:y,user:a,loadingUser:u},children:t.children})}var Em={exports:{}},pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm=Symbol.for("react.element"),_m=Symbol.for("react.portal"),fc=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),gc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),RO=Symbol.for("react.server_context"),vc=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),xc=Symbol.for("react.suspense_list"),Ec=Symbol.for("react.memo"),Sc=Symbol.for("react.lazy"),NO=Symbol.for("react.offscreen"),yS;yS=Symbol.for("react.module.reference");function Zt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Sm:switch(t=t.type,t){case fc:case mc:case pc:case wc:case xc:return t;default:switch(t=t&&t.$$typeof,t){case RO:case yc:case vc:case Sc:case Ec:case gc:return t;default:return e}}case _m:return e}}}pe.ContextConsumer=yc;pe.ContextProvider=gc;pe.Element=Sm;pe.ForwardRef=vc;pe.Fragment=fc;pe.Lazy=Sc;pe.Memo=Ec;pe.Portal=_m;pe.Profiler=mc;pe.StrictMode=pc;pe.Suspense=wc;pe.SuspenseList=xc;pe.isAsyncMode=function(){return!1};pe.isConcurrentMode=function(){return!1};pe.isContextConsumer=function(t){return Zt(t)===yc};pe.isContextProvider=function(t){return Zt(t)===gc};pe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sm};pe.isForwardRef=function(t){return Zt(t)===vc};pe.isFragment=function(t){return Zt(t)===fc};pe.isLazy=function(t){return Zt(t)===Sc};pe.isMemo=function(t){return Zt(t)===Ec};pe.isPortal=function(t){return Zt(t)===_m};pe.isProfiler=function(t){return Zt(t)===mc};pe.isStrictMode=function(t){return Zt(t)===pc};pe.isSuspense=function(t){return Zt(t)===wc};pe.isSuspenseList=function(t){return Zt(t)===xc};pe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===fc||t===mc||t===pc||t===wc||t===xc||t===NO||typeof t=="object"&&t!==null&&(t.$$typeof===Sc||t.$$typeof===Ec||t.$$typeof===gc||t.$$typeof===yc||t.$$typeof===vc||t.$$typeof===yS||t.getModuleId!==void 0)};pe.typeOf=Zt;(function(t){t.exports=pe})(Em);function DO(t){function e(N,M,P,q,w){for(var ee=0,R=0,he=0,ae=0,de,X,Xe=0,It=0,se,at=se=de=0,le=0,Je=0,Es=0,Ze=0,xa=P.length,Ss=xa-1,tn,G="",Re="",Pc="",Oc="",Yn;le<xa;){if(X=P.charCodeAt(le),le===Ss&&R+ae+he+ee!==0&&(R!==0&&(X=R===47?10:47),ae=he=ee=0,xa++,Ss++),R+ae+he+ee===0){if(le===Ss&&(0<Je&&(G=G.replace(d,"")),0<G.trim().length)){switch(X){case 32:case 9:case 59:case 13:case 10:break;default:G+=P.charAt(le)}X=59}switch(X){case 123:for(G=G.trim(),de=G.charCodeAt(0),se=1,Ze=++le;le<xa;){switch(X=P.charCodeAt(le)){case 123:se++;break;case 125:se--;break;case 47:switch(X=P.charCodeAt(le+1)){case 42:case 47:e:{for(at=le+1;at<Ss;++at)switch(P.charCodeAt(at)){case 47:if(X===42&&P.charCodeAt(at-1)===42&&le+2!==at){le=at+1;break e}break;case 10:if(X===47){le=at+1;break e}}le=at}}break;case 91:X++;case 40:X++;case 34:case 39:for(;le++<Ss&&P.charCodeAt(le)!==X;);}if(se===0)break;le++}switch(se=P.substring(Ze,le),de===0&&(de=(G=G.replace(h,"").trim()).charCodeAt(0)),de){case 64:switch(0<Je&&(G=G.replace(d,"")),X=G.charCodeAt(1),X){case 100:case 109:case 115:case 45:Je=M;break;default:Je=en}if(se=e(M,Je,se,X,w+1),Ze=se.length,0<b&&(Je=n(en,G,Es),Yn=a(3,se,Je,M,De,Te,Ze,X,w,q),G=Je.join(""),Yn!==void 0&&(Ze=(se=Yn.trim()).length)===0&&(X=0,se="")),0<Ze)switch(X){case 115:G=G.replace(D,o);case 100:case 109:case 45:se=G+"{"+se+"}";break;case 107:G=G.replace(f,"$1 $2"),se=G+"{"+se+"}",se=Be===1||Be===2&&s("@"+se,3)?"@-webkit-"+se+"@"+se:"@"+se;break;default:se=G+se,q===112&&(se=(Re+=se,""))}else se="";break;default:se=e(M,n(M,G,Es),se,q,w+1)}Pc+=se,se=Es=Je=at=de=0,G="",X=P.charCodeAt(++le);break;case 125:case 59:if(G=(0<Je?G.replace(d,""):G).trim(),1<(Ze=G.length))switch(at===0&&(de=G.charCodeAt(0),de===45||96<de&&123>de)&&(Ze=(G=G.replace(" ",":")).length),0<b&&(Yn=a(1,G,M,N,De,Te,Re.length,q,w,q))!==void 0&&(Ze=(G=Yn.trim()).length)===0&&(G="\0\0"),de=G.charCodeAt(0),X=G.charCodeAt(1),de){case 0:break;case 64:if(X===105||X===99){Oc+=G+P.charAt(le);break}default:G.charCodeAt(Ze-1)!==58&&(Re+=i(G,de,X,G.charCodeAt(2)))}Es=Je=at=de=0,G="",X=P.charCodeAt(++le)}}switch(X){case 13:case 10:R===47?R=0:1+de===0&&q!==107&&0<G.length&&(Je=1,G+="\0"),0<b*W&&a(0,G,M,N,De,Te,Re.length,q,w,q),Te=1,De++;break;case 59:case 125:if(R+ae+he+ee===0){Te++;break}default:switch(Te++,tn=P.charAt(le),X){case 9:case 32:if(ae+ee+R===0)switch(Xe){case 44:case 58:case 9:case 32:tn="";break;default:X!==32&&(tn=" ")}break;case 0:tn="\\0";break;case 12:tn="\\f";break;case 11:tn="\\v";break;case 38:ae+R+ee===0&&(Je=Es=1,tn="\f"+tn);break;case 108:if(ae+R+ee+wt===0&&0<at)switch(le-at){case 2:Xe===112&&P.charCodeAt(le-3)===58&&(wt=Xe);case 8:It===111&&(wt=It)}break;case 58:ae+R+ee===0&&(at=le);break;case 44:R+he+ae+ee===0&&(Je=1,tn+="\r");break;case 34:case 39:R===0&&(ae=ae===X?0:ae===0?X:ae);break;case 91:ae+R+he===0&&ee++;break;case 93:ae+R+he===0&&ee--;break;case 41:ae+R+ee===0&&he--;break;case 40:if(ae+R+ee===0){if(de===0)switch(2*Xe+3*It){case 533:break;default:de=1}he++}break;case 64:R+he+ae+ee+at+se===0&&(se=1);break;case 42:case 47:if(!(0<ae+ee+he))switch(R){case 0:switch(2*X+3*P.charCodeAt(le+1)){case 235:R=47;break;case 220:Ze=le,R=42}break;case 42:X===47&&Xe===42&&Ze+2!==le&&(P.charCodeAt(Ze+2)===33&&(Re+=P.substring(Ze,le+1)),tn="",R=0)}}R===0&&(G+=tn)}It=Xe,Xe=X,le++}if(Ze=Re.length,0<Ze){if(Je=M,0<b&&(Yn=a(2,Re,Je,N,De,Te,Ze,q,w,q),Yn!==void 0&&(Re=Yn).length===0))return Oc+Re+Pc;if(Re=Je.join(",")+"{"+Re+"}",Be*wt!==0){switch(Be!==2||s(Re,2)||(wt=0),wt){case 111:Re=Re.replace(E,":-moz-$1")+Re;break;case 112:Re=Re.replace(v,"::-webkit-input-$1")+Re.replace(v,"::-moz-$1")+Re.replace(v,":-ms-input-$1")+Re}wt=0}}return Oc+Re+Pc}function n(N,M,P){var q=M.trim().split(S);M=q;var w=q.length,ee=N.length;switch(ee){case 0:case 1:var R=0;for(N=ee===0?"":N[0]+" ";R<w;++R)M[R]=r(N,M[R],P).trim();break;default:var he=R=0;for(M=[];R<w;++R)for(var ae=0;ae<ee;++ae)M[he++]=r(N[ae]+" ",q[R],P).trim()}return M}function r(N,M,P){var q=M.charCodeAt(0);switch(33>q&&(q=(M=M.trim()).charCodeAt(0)),q){case 38:return M.replace(p,"$1"+N.trim());case 58:return N.trim()+M.replace(p,"$1"+N.trim());default:if(0<1*P&&0<M.indexOf("\f"))return M.replace(p,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+M}function i(N,M,P,q){var w=N+";",ee=2*M+3*P+4*q;if(ee===944){N=w.indexOf(":",9)+1;var R=w.substring(N,w.length-1).trim();return R=w.substring(0,N).trim()+R+";",Be===1||Be===2&&s(R,1)?"-webkit-"+R+R:R}if(Be===0||Be===2&&!s(w,1))return w;switch(ee){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(be,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return R=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+w+"-ms-flex-pack"+R+w;case 1005:return y.test(w)?w.replace(g,":-webkit-")+w.replace(g,":-moz-")+w:w;case 1e3:switch(R=w.substring(13).trim(),M=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(M)){case 226:R=w.replace(_,"tb");break;case 232:R=w.replace(_,"tb-rl");break;case 220:R=w.replace(_,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+R+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(M=(w=N).length-10,R=(w.charCodeAt(M)===33?w.substring(0,M):w).substring(N.indexOf(":",7)+1).trim(),ee=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:w=w.replace(R,"-webkit-"+R)+";"+w;break;case 207:case 102:w=w.replace(R,"-webkit-"+(102<ee?"inline-":"")+"box")+";"+w.replace(R,"-webkit-"+R)+";"+w.replace(R,"-ms-"+R+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return R=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+R+"-ms-flex-"+R+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(L,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(L,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(B.test(N)===!0)return(R=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),M,P,q).replace(":fill-available",":stretch"):w.replace(R,"-webkit-"+R)+w.replace(R,"-moz-"+R.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,P+q===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+w}return w}function s(N,M){var P=N.indexOf(M===1?":":"{"),q=N.substring(0,M!==3?P:10);return P=N.substring(P+1,N.length-1),H(M!==2?q:q.replace(J,"$1"),P,M)}function o(N,M){var P=i(M,M.charCodeAt(0),M.charCodeAt(1),M.charCodeAt(2));return P!==M+";"?P.replace(O," or ($1)").substring(4):"("+M+")"}function a(N,M,P,q,w,ee,R,he,ae,de){for(var X=0,Xe=M,It;X<b;++X)switch(It=He[X].call(c,N,Xe,P,q,w,ee,R,he,ae,de)){case void 0:case!1:case!0:case null:break;default:Xe=It}if(Xe!==M)return Xe}function l(N){switch(N){case void 0:case null:b=He.length=0;break;default:if(typeof N=="function")He[b++]=N;else if(typeof N=="object")for(var M=0,P=N.length;M<P;++M)l(N[M]);else W=!!N|0}return l}function u(N){return N=N.prefix,N!==void 0&&(H=null,N?typeof N!="function"?Be=1:(Be=2,H=N):Be=0),u}function c(N,M){var P=N;if(33>P.charCodeAt(0)&&(P=P.trim()),ce=P,P=[ce],0<b){var q=a(-1,M,P,P,De,Te,0,0,0,0);q!==void 0&&typeof q=="string"&&(M=q)}var w=e(en,P,M,0,0);return 0<b&&(q=a(-2,w,P,P,De,Te,w.length,0,0,0),q!==void 0&&(w=q)),ce="",wt=0,Te=De=1,w}var h=/^\0+/g,d=/[\0\r\f]/g,g=/: */g,y=/zoo|gra/,x=/([,: ])(transform)/g,S=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,E=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,D=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,L=/-self|flex-/g,J=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,be=/([^-])(image-set\()/,Te=1,De=1,wt=0,Be=1,en=[],He=[],b=0,H=null,W=0,ce="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var PO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function OO(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var LO=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,y0=OO(function(t){return LO.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),vS={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,km=Ye?Symbol.for("react.element"):60103,Im=Ye?Symbol.for("react.portal"):60106,_c=Ye?Symbol.for("react.fragment"):60107,kc=Ye?Symbol.for("react.strict_mode"):60108,Ic=Ye?Symbol.for("react.profiler"):60114,Tc=Ye?Symbol.for("react.provider"):60109,Cc=Ye?Symbol.for("react.context"):60110,Tm=Ye?Symbol.for("react.async_mode"):60111,Ac=Ye?Symbol.for("react.concurrent_mode"):60111,bc=Ye?Symbol.for("react.forward_ref"):60112,Rc=Ye?Symbol.for("react.suspense"):60113,MO=Ye?Symbol.for("react.suspense_list"):60120,Nc=Ye?Symbol.for("react.memo"):60115,Dc=Ye?Symbol.for("react.lazy"):60116,$O=Ye?Symbol.for("react.block"):60121,FO=Ye?Symbol.for("react.fundamental"):60117,UO=Ye?Symbol.for("react.responder"):60118,zO=Ye?Symbol.for("react.scope"):60119;function Vt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case km:switch(t=t.type,t){case Tm:case Ac:case _c:case Ic:case kc:case Rc:return t;default:switch(t=t&&t.$$typeof,t){case Cc:case bc:case Dc:case Nc:case Tc:return t;default:return e}}case Im:return e}}}function wS(t){return Vt(t)===Ac}me.AsyncMode=Tm;me.ConcurrentMode=Ac;me.ContextConsumer=Cc;me.ContextProvider=Tc;me.Element=km;me.ForwardRef=bc;me.Fragment=_c;me.Lazy=Dc;me.Memo=Nc;me.Portal=Im;me.Profiler=Ic;me.StrictMode=kc;me.Suspense=Rc;me.isAsyncMode=function(t){return wS(t)||Vt(t)===Tm};me.isConcurrentMode=wS;me.isContextConsumer=function(t){return Vt(t)===Cc};me.isContextProvider=function(t){return Vt(t)===Tc};me.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===km};me.isForwardRef=function(t){return Vt(t)===bc};me.isFragment=function(t){return Vt(t)===_c};me.isLazy=function(t){return Vt(t)===Dc};me.isMemo=function(t){return Vt(t)===Nc};me.isPortal=function(t){return Vt(t)===Im};me.isProfiler=function(t){return Vt(t)===Ic};me.isStrictMode=function(t){return Vt(t)===kc};me.isSuspense=function(t){return Vt(t)===Rc};me.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===_c||t===Ac||t===Ic||t===kc||t===Rc||t===MO||typeof t=="object"&&t!==null&&(t.$$typeof===Dc||t.$$typeof===Nc||t.$$typeof===Tc||t.$$typeof===Cc||t.$$typeof===bc||t.$$typeof===FO||t.$$typeof===UO||t.$$typeof===zO||t.$$typeof===$O)};me.typeOf=Vt;(function(t){t.exports=me})(vS);var Cm=vS.exports,jO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},VO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},BO={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Am={};Am[Cm.ForwardRef]=BO;Am[Cm.Memo]=xS;function v0(t){return Cm.isMemo(t)?xS:Am[t.$$typeof]||jO}var HO=Object.defineProperty,WO=Object.getOwnPropertyNames,w0=Object.getOwnPropertySymbols,qO=Object.getOwnPropertyDescriptor,KO=Object.getPrototypeOf,x0=Object.prototype;function ES(t,e,n){if(typeof e!="string"){if(x0){var r=KO(e);r&&r!==x0&&ES(t,r,n)}var i=WO(e);w0&&(i=i.concat(w0(e)));for(var s=v0(t),o=v0(e),a=0;a<i.length;++a){var l=i[a];if(!VO[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=qO(e,l);try{HO(t,l,u)}catch{}}}}return t}var GO=ES;function Dn(){return(Dn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var E0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},af=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Em.exports.typeOf(t)},cu=Object.freeze([]),Sr=Object.freeze({});function Bo(t){return typeof t=="function"}function S0(t){return t.displayName||t.name||"Component"}function bm(t){return t&&typeof t.styledComponentId=="string"}var ss=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Rm=typeof window<"u"&&"HTMLElement"in window,QO=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function wa(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var YO=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&wa(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),gl=new Map,hu=new Map,so=1,qa=function(t){if(gl.has(t))return gl.get(t);for(;hu.has(so);)so++;var e=so++;return gl.set(t,e),hu.set(e,t),e},XO=function(t){return hu.get(t)},JO=function(t,e){e>=so&&(so=e+1),gl.set(t,e),hu.set(e,t)},ZO="style["+ss+'][data-styled-version="5.3.6"]',eL=new RegExp("^"+ss+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),tL=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},nL=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(eL);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(JO(u,l),tL(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},rL=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},SS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(ss))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ss,"active"),r.setAttribute("data-styled-version","5.3.6");var o=rL();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},iL=function(){function t(n){var r=this.element=SS(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}wa(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),sL=function(){function t(n){var r=this.element=SS(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),oL=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),_0=Rm,aL={isServer:!Rm,useCSSOMInjection:!QO},_S=function(){function t(n,r,i){n===void 0&&(n=Sr),r===void 0&&(r={}),this.options=Dn({},aL,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Rm&&_0&&(_0=!1,function(s){for(var o=document.querySelectorAll(ZO),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(ss)!=="active"&&(nL(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return qa(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Dn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new oL(o):s?new iL(o):new sL(o),new YO(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(qa(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(qa(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(qa(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=XO(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=ss+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),lL=/(a)(d)/gi,k0=function(t){return String.fromCharCode(t+(t>25?39:97))};function lf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=k0(e%52)+n;return(k0(e%52)+n).replace(lL,"$1-$2")}var Oi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},kS=function(t){return Oi(5381,t)};function uL(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Bo(n)&&!bm(n))return!1}return!0}var cL=kS("5.3.6"),hL=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&uL(e),this.componentId=n,this.baseHash=Oi(cL,n),this.baseStyle=r,_S.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=os(this.rules,e,n,r).join(""),a=lf(Oi(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Oi(this.baseHash,r.hash),h="",d=0;d<u;d++){var g=this.rules[d];if(typeof g=="string")h+=g;else if(g){var y=os(g,e,n,r),x=Array.isArray(y)?y.join(""):y;c=Oi(c,x+d),h+=x}}if(h){var S=lf(c>>>0);if(!n.hasNameForId(i,S)){var p=r(h,"."+S,void 0,i);n.insertRules(i,S,p)}s.push(S)}}return s.join(" ")},t}(),dL=/^\s*\/\/.*$/gm,fL=[":","[",".","#"];function pL(t){var e,n,r,i,s=t===void 0?Sr:t,o=s.options,a=o===void 0?Sr:o,l=s.plugins,u=l===void 0?cu:l,c=new DO(a),h=[],d=function(x){function S(p){if(p)try{x(p+"}")}catch{}}return function(p,f,v,E,_,D,O,L,J,B){switch(p){case 1:if(J===0&&f.charCodeAt(0)===64)return x(f+";"),"";break;case 2:if(L===0)return f+"/*|*/";break;case 3:switch(L){case 102:case 112:return x(v[0]+f),"";default:return f+(B===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(S)}}}(function(x){h.push(x)}),g=function(x,S,p){return S===0&&fL.indexOf(p[n.length])!==-1||p.match(i)?x:"."+e};function y(x,S,p,f){f===void 0&&(f="&");var v=x.replace(dL,""),E=S&&p?p+" "+S+" { "+v+" }":v;return e=f,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!S?"":S,E)}return c.use([].concat(u,[function(x,S,p){x===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,g))},d,function(x){if(x===-2){var S=h;return h=[],S}}])),y.hash=u.length?u.reduce(function(x,S){return S.name||wa(15),Oi(x,S.name)},5381).toString():"",y}var IS=Mn.createContext();IS.Consumer;var TS=Mn.createContext(),mL=(TS.Consumer,new _S),uf=pL();function gL(){return I.exports.useContext(IS)||mL}function yL(){return I.exports.useContext(TS)||uf}var vL=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=uf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return wa(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=uf),this.name+e.hash},t}(),wL=/([A-Z])/,xL=/([A-Z])/g,EL=/^ms-/,SL=function(t){return"-"+t.toLowerCase()};function I0(t){return wL.test(t)?t.replace(xL,SL).replace(EL,"-ms-"):t}var T0=function(t){return t==null||t===!1||t===""};function os(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=os(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(T0(t))return"";if(bm(t))return"."+t.styledComponentId;if(Bo(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return os(l,e,n,r)}var u;return t instanceof vL?n?(t.inject(n,r),t.getName(r)):t:af(t)?function c(h,d){var g,y,x=[];for(var S in h)h.hasOwnProperty(S)&&!T0(h[S])&&(Array.isArray(h[S])&&h[S].isCss||Bo(h[S])?x.push(I0(S)+":",h[S],";"):af(h[S])?x.push.apply(x,c(h[S],S)):x.push(I0(S)+": "+(g=S,(y=h[S])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||g in PO?String(y).trim():y+"px")+";"));return d?[d+" {"].concat(x,["}"]):x}(t):t.toString()}var C0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function _L(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Bo(t)||af(t)?C0(os(E0(cu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:C0(os(E0(t,n)))}var kL=function(t,e,n){return n===void 0&&(n=Sr),t.theme!==n.theme&&t.theme||e||n.theme},IL=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,TL=/(^-|-$)/g;function bh(t){return t.replace(IL,"-").replace(TL,"")}var CL=function(t){return lf(kS(t)>>>0)};function Ka(t){return typeof t=="string"&&!0}var cf=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},AL=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function bL(t,e,n){var r=t[n];cf(e)&&cf(r)?CS(r,e):t[n]=e}function CS(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(cf(o))for(var a in o)AL(a)&&bL(t,o[a],a)}return t}var AS=Mn.createContext();AS.Consumer;var Rh={};function bS(t,e,n){var r=bm(t),i=!Ka(t),s=e.attrs,o=s===void 0?cu:s,a=e.componentId,l=a===void 0?function(f,v){var E=typeof f!="string"?"sc":bh(f);Rh[E]=(Rh[E]||0)+1;var _=E+"-"+CL("5.3.6"+E+Rh[E]);return v?v+"-"+_:_}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Ka(f)?"styled."+f:"Styled("+S0(f)+")"}(t):u,h=e.displayName&&e.componentId?bh(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=e.shouldForwardProp;r&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(f,v,E){return t.shouldForwardProp(f,v,E)&&e.shouldForwardProp(f,v,E)}:t.shouldForwardProp);var y,x=new hL(n,h,r?t.componentStyle:void 0),S=x.isStatic&&o.length===0,p=function(f,v){return function(E,_,D,O){var L=E.attrs,J=E.componentStyle,B=E.defaultProps,be=E.foldedComponentIds,Te=E.shouldForwardProp,De=E.styledComponentId,wt=E.target,Be=function(q,w,ee){q===void 0&&(q=Sr);var R=Dn({},w,{theme:q}),he={};return ee.forEach(function(ae){var de,X,Xe,It=ae;for(de in Bo(It)&&(It=It(R)),It)R[de]=he[de]=de==="className"?(X=he[de],Xe=It[de],X&&Xe?X+" "+Xe:X||Xe):It[de]}),[R,he]}(kL(_,I.exports.useContext(AS),B)||Sr,_,L),en=Be[0],He=Be[1],b=function(q,w,ee,R){var he=gL(),ae=yL(),de=w?q.generateAndInjectStyles(Sr,he,ae):q.generateAndInjectStyles(ee,he,ae);return de}(J,O,en),H=D,W=He.$as||_.$as||He.as||_.as||wt,ce=Ka(W),N=He!==_?Dn({},_,{},He):_,M={};for(var P in N)P[0]!=="$"&&P!=="as"&&(P==="forwardedAs"?M.as=N[P]:(Te?Te(P,y0,W):!ce||y0(P))&&(M[P]=N[P]));return _.style&&He.style!==_.style&&(M.style=Dn({},_.style,{},He.style)),M.className=Array.prototype.concat(be,De,b!==De?b:null,_.className,He.className).filter(Boolean).join(" "),M.ref=H,I.exports.createElement(W,M)}(y,f,v,S)};return p.displayName=c,(y=Mn.forwardRef(p)).attrs=d,y.componentStyle=x,y.displayName=c,y.shouldForwardProp=g,y.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):cu,y.styledComponentId=h,y.target=r?t.target:t,y.withComponent=function(f){var v=e.componentId,E=function(D,O){if(D==null)return{};var L,J,B={},be=Object.keys(D);for(J=0;J<be.length;J++)L=be[J],O.indexOf(L)>=0||(B[L]=D[L]);return B}(e,["componentId"]),_=v&&v+"-"+(Ka(f)?f:bh(S0(f)));return bS(f,Dn({},E,{attrs:d,componentId:_}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?CS({},t.defaultProps,f):f}}),y.toString=function(){return"."+y.styledComponentId},i&&GO(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var hf=function(t){return function e(n,r,i){if(i===void 0&&(i=Sr),!Em.exports.isValidElementType(r))return wa(1,String(r));var s=function(){return n(r,i,_L.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Dn({},i,{},o))},s.attrs=function(o){return e(n,r,Dn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(bS,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){hf[t]=hf(t)});const vt=hf,RS="/SilvinaSilberman/assets/logo.cc159ce2.png",RL=vt.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: max-content;
    padding: 10px 20px;

    background-color: white;
    transition: all .6s;

    & nav {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & a img {
            width: 100px;

            object-fit: contain;
        }

        & ul {
            position: fixed;
            top: 0;
            right: -2000px;

            width: 100%;
            height: 100vh;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-color: white;

            text-align: center;

            & .data__header__mobile {
                width: 100%;
                margin-top: 40px;
                padding-top: 40px;

                border-top: 1px solid gainsboro;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;

                & div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    & h5 {
                        margin-bottom: 10px;
                        
                        color: grey;
                        font-size: 12px;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                    }

                    & a {
                        width: max-content;

                        transition: all .6s;

                        color: black;
                        font-size: 16px;
                        font-weight: 500;
                        text-decoration: none;

                        &:hover {
                            color: var(--colorHover);
                        }
                    }
                }
            }

            & li {
                margin: 14px 0;
                
                list-style: none;

                & a {
                    width: max-content;

                    transition: all .6s;
                    cursor: pointer;

                    color: black;
                    font-size: 18px;
                    font-weight: 500;
                    text-decoration: none;

                    &.active {
                        color: var(--colorHover) !important;
                    }
                }
                
                &:hover a { 
                    color: var(--colorHover);
                }
            }
        }

        & .burger__menu {            
            display: flex;
            flex-direction: row;
            align-items: center;

            cursor: pointer;

            & h4 {
                margin-right: 10px;

                color: black;
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            & div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                & span {
                    width: 24px;
                    height: 1px;
                    margin: 4px 0;

                    background-color: black;
                }
            }

            @media only screen and (min-width: 1024px) {
                display: none;
            }
        }
    }

    &.open__menu {
        & nav {
            & ul {
                right: 0;
            }

            & .burger__menu {
                position: fixed;
                top: 40px;
                right: 20px;
                z-index: 10;

                & h4 {
                    display: none;
                }

                & span {
                    width: 24px;
                    margin: 0;

                    background-color: black;

                    transform: rotate(120deg);

                    &:last-child {
                        transform: rotate(-120deg);
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        & nav {
            & a img {
                width: 140px;
            }
            
            & ul {
                position: unset;

                width: 100%;
                height: max-content;

                flex-direction: row;
                align-items: center;
                justify-content: flex-end;

                background-color: transparent;

                text-align: left;

                & .data__header__mobile {
                    display: none;
                }

                & li {
                    margin: 0;
                    margin-left: 38px;
                    
                    & a {
                        color: black;
                        font-size: 12px;
                        line-height: 22px;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 20px 40px;
    }
`;function Gn(){const t=()=>{document.querySelector("header").classList.toggle("open__menu")},e=()=>{document.querySelectorAll("ul li").forEach(()=>{document.querySelector("header").classList.remove("open__menu")})};return m(RL,{children:k("nav",{children:[m(Ke,{to:"/",children:m("img",{src:RS,alt:"Silvina Silberman"})}),k("ul",{children:[m("li",{onClick:e,children:m(Ke,{to:"/",children:"Inicio"})}),m("li",{onClick:e,children:m(Ke,{to:"/about",children:"Sobre Mi"})}),m("li",{onClick:e,children:m(Ke,{to:"/designs",children:"Tu Dise\xF1o"})}),m("li",{onClick:e,children:m(Ke,{to:"/awards",children:"Premios"})}),m("li",{onClick:e,children:m(Ke,{to:"/contact",children:"Contacto"})}),k("div",{className:"data__header__mobile",children:[k("div",{children:[m("h5",{children:"Email"}),m("a",{href:"mailto:silvinasilberman@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"silvinasilberman@gmail.com"})]}),k("div",{children:[m("h5",{children:"Instagram"}),m("a",{href:"https://www.instagram.com/silvisilberarte/?hl=es-la",target:"_blank",rel:"noopener noreferrer",children:"@silvisilberarte"})]})]})]}),k("div",{className:"burger__menu",onClick:t,children:[m("h4",{children:"Menu"}),k("div",{children:[m("span",{}),m("span",{})]})]})]})})}const NL=vt.footer`
  width: 100%;
  height: max-content;
  padding: 60px 20px;

  display: flex;
  flex-direction: column;

  background-color: white;
  border-top: 1px solid gainsboro;

  div.footer__header {
    margin-bottom: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;

      object-fit: contain;

      cursor: pointer;
    }
  }

  div.footer__body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;

      h4 {
        margin-bottom: 8px;

        color: black;
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      a {
        color: gray;
        font-size: 18px;
        line-height: 28px;
        font-weight: 400;
        text-decoration: none;
      }
    }
  }

  div.footer__copyright {
    margin-top: 60px;
    padding: 60px 20px 0 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top: 1px solid gainsboro;

    h6 {
      color: black;
      font-size: 12px;
      line-height: 22px;
      font-weight: 500;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;

      a {
        width: max-content;
        padding-bottom: 4px;

        border-bottom: 1px solid gray;
        
        color: gray;
        text-decoration: none;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    div.footer__header {
      img {
        width: 140px;
      }
    }

    div.footer__body {
      justify-content: space-evenly;
    }
  }

  @media only screen and (min-width: 900px) {
    div.footer__body {
      justify-content: center;

      div {
        margin: 0 80px;

        h4 {
          font-size: 16px;
          line-height: 26px;
        }

        a {
          font-size: 20px;
          line-height: 30px;
        }
      }
    }

    div.footer__copyright {
      h6 {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
`;function Qn(){return k(NL,{children:[m("div",{className:"footer__header",children:m("img",{src:RS,alt:"Silvina Silberman",onClick:()=>{window.scroll({top:0,left:0,behavior:"smooth"})}})}),k("div",{className:"footer__body",children:[k("div",{children:[m("h4",{children:"Productos"}),m(Ke,{to:"/",children:"Portfolio"}),m(Ke,{to:"/designs",children:"Tu Dise\xF1o"}),m(Ke,{to:"/faqs",children:"FAQ's"})]}),k("div",{children:[m("h4",{children:"Quien Soy"}),m(Ke,{to:"/about",children:"Sobre Mi"}),m(Ke,{to:"/awards",children:"Premios"})]}),k("div",{children:[m("h4",{children:"Contacto"}),m(Ke,{to:"/contact",children:"Contacto"}),m("a",{href:"mailto:silvinasilberman@gmail.com?subject=Consulta desde la Web",target:"_blank",children:"Email"}),m("a",{href:"",target:"_blank",children:"Instagram"})]})]}),m("div",{className:"footer__copyright",children:k("h6",{children:["\xA9 2023 Silvina Silberman / Desarrollado por ",m("a",{href:"",target:"_blank",children:"Nicolas Katz"})]})})]})}var NS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},A0=Mn.createContext&&Mn.createContext(NS),_r=globalThis&&globalThis.__assign||function(){return _r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},_r.apply(this,arguments)},DL=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function DS(t){return t&&t.map(function(e,n){return Mn.createElement(e.tag,_r({key:n},e.attr),DS(e.child))})}function Bt(t){return function(e){return m(PL,{..._r({attr:_r({},t.attr)},e),children:DS(t.child)})}}function PL(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=DL(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),k("svg",{..._r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:_r(_r({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&m("title",{children:s}),t.children]})};return A0!==void 0?m(A0.Consumer,{children:function(n){return e(n)}}):e(NS)}function OL(t){return Bt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Mail"},child:[{tag:"path",attr:{d:"M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"}}]}]})(t)}function LL(t){return Bt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Money_Check_1",dataName:"Money Check 1"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M19.437,18.218H4.563a2.5,2.5,0,0,1-2.5-2.5V8.282a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5v7.436A2.5,2.5,0,0,1,19.437,18.218ZM4.563,6.782a1.5,1.5,0,0,0-1.5,1.5v7.436a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V8.282a1.5,1.5,0,0,0-1.5-1.5Z"}},{tag:"path",attr:{d:"M12,12.786H5.064a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z"}},{tag:"path",attr:{d:"M14,15.714H5.064a.5.5,0,1,1,0-1H14a.5.5,0,0,1,0,1Z"}},{tag:"rect",attr:{x:"15.436",y:"8.283",width:"4",height:"2",rx:"0.5"}}]}]}]})(t)}function ML(t){return Bt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(t)}function $L(t){return Bt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M320 320L192 192m0 128l128-128"}}]})(t)}function PS(t){return Bt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z"}},{tag:"path",attr:{d:"M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"}}]})(t)}function FL(t){return Bt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}}]})(t)}function UL(t){return Bt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M380 704h264c4.4 0 8-3.6 8-8v-84c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v36H428v-36c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v84c0 4.4 3.6 8 8 8zm340-123a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm239-167.6L935.3 372a8 8 0 0 0-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 0 0-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 0 0-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 0 0 3-10.8zM840 517v237H184V517l15.6-43h624.8l15.6 43zM292.7 218.1l.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220l72.7-199.9zM224 581a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"}}]})(t)}function zL(t){return Bt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"}}]})(t)}function jL(t){return Bt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"}},{tag:"path",attr:{d:"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"}}]})(t)}function VL(t){return Bt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]})(t)}function BL(t){return Bt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z"}}]})(t)}function HL(t){return Bt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"}}]})(t)}function WL(t){return Bt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z",fill:"currentColor"}},{tag:"path",attr:{d:"M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z",fill:"currentColor"}}]})(t)}const qL=vt.div`
    width: 100%;
    height: max-content;
    margin-top: 60px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    
    & div.messages__container {
        width: 100%;
        height: max-content;
        padding: 20px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        background-color: #e8b717;

        color: white;
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;

        svg {
            min-width: max-content;

            cursor: pointer;

            color: white;
            font-size: 24px;
        }
    }

    & h1 {
        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 400;
    }

    & button {
        width: max-content;
        height: 54px;
        margin-top: 20px;
        padding: 0 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: grey;
        border: none;
        border-radius: 1px;
        outline: none;
        cursor: pointer;
        transition: all .6s;

        color: white;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;

        &.logout {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 2;
        }
    }

    & h2 {
        margin-top: 40px;

        color: black;
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    & form {
        width: 100%;
        height: max-content;
        margin-top: 20px;
        padding: 20px;

        display: flex;
        flex-direction: column;

        background-color: ghostwhite;

        & div.input__container {
            width: 100%;
            height: max-content;
            margin-bottom: 16px;

            & label {
                color: black;
                font-size: 14px;
                font-weight: 400;
            }

            & input {
                width: 100%;
                height: 54px;
                margin-top: 8px;
                padding: 0 20px;

                background-color: white;
                border: 1px solid gainsboro;
                border-radius: 1px;
                outline: none;
                cursor: pointer;
                transition: all .6s;

                color: black;
                font-size: 16px;
                font-weight: 400;
            }

            & img {
                width: 100%;
                height: 200px;
                margin-top: 16px;

                border-radius: 1px;

                object-fit: cover;
            }

            & input[type="checkbox"], & input[type="radio"] {
                width: 16px;
                height: 16px;

                display: block;
            }

            & div {
                margin: 10px 0;

                display: flex;
                flex-direction: row;
                align-items: center;

                & input {
                    margin-top: 0;
                    margin-right: 10px;
                }
            }
        }

        & button {
            width: max-content;
            height: 54px;
            margin-top: 0;
            padding: 0 20px;

            display: flex;
            align-items: center;
            justify-content: center;

            background-color: grey;
            border: none;
            border-radius: 1px;
            outline: none;
            cursor: pointer;
            transition: all .6s;

            color: white;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
    }

    & section {
        width: 100%;
        height: max-content;
        margin-top: 20px;
        padding: 20px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

        background-color: ghostwhite;

        & div {
            position: relative;

            width: 100%;
            height: max-content;
            margin: 10px 0;

            display: flex;
            flex-direction: column;

            & img {
                width: 100%;
                height: max-content;

                object-fit: contain;
                image-rendering: optimizeQuality;

                border-radius: 1px;
            }

            & span {
                margin-top: 10px;

                display: flex;
                flex-direction: row;
                align-items: center;

                color: black;
                font-size: 14px;
                line-height: 24px;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 2px;

                h5 {
                    margin-right: 10px;
                }

                svg {
                    color: black;
                    font-size: 14px;
                }
            }
        }
    }

    @media only screen and (min-width: 768px) {
       & form {
            padding: 40px;
            
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;

            & div.input__container {
                width: 48%;
            }
       } 

       & section {
            padding: 40px;

            & div {
                width: 32%;
                margin: 10px;
            }
       }
    }

    @media only screen and (min-width: 1200px) {
        margin-top: 100px;
        padding: 40px 100px;

        & form,
        & section {
            padding: 60px;
        }
    }
`;function KL(){const{logout:t,getProducts:e,createProduct:n,updateProduct:r,deleteProduct:i}=I.exports.useContext(Lr),s=Nu(),[o,a]=I.exports.useState([]),[l,u]=I.exports.useState(null);I.exports.useEffect(()=>{window.scroll({top:0,left:0,behavior:"smooth"})},[]),I.exports.useEffect(()=>{e(a)},[]);const[c,h]=I.exports.useState(""),[d,g]=I.exports.useState(""),[y,x]=I.exports.useState(""),[S,p]=I.exports.useState(!1),[f,v]=I.exports.useState(null),[E,_]=I.exports.useState(""),[D,O]=I.exports.useState(""),[L,J]=I.exports.useState(null),[B,be]=I.exports.useState(null),[Te,De]=I.exports.useState(!1),[wt,Be]=I.exports.useState(""),en=async()=>{try{await t(),s("/login")}catch(w){console.error(w.message)}},He=w=>{const R=w.target.files[0],he=new FileReader;w.target.id==="images"?(he.onloadend=function(){be(he.result.toString())},he.readAsDataURL(R)):(he.onloadend=function(){v(he.result.toString())},he.readAsDataURL(R))},b=async w=>{w.preventDefault(),await n({title:c,description:d,category:y,award:S,awardPhoto:f,awardURL:E,price:D,status:L,images:B}),u("El retrato ha sido creado con exito.")},H=()=>{h(""),g(""),x(""),O("")},W=w=>{window.scroll({top:100,left:0,behavior:"smooth"}),h(w.title),g(w.description),x(w.category),O(w.price),p(w.award),v(w.awardPhoto),_(w.awardURL),J(w.status),be(w.images),De(!0),Be(w.id)},ce=async w=>{w.preventDefault(),await r(wt,{title:c,description:d,category:y,award:S,awardPhoto:f,awardURL:E,price:D,status:L,images:B}),u("El retrato ha sido modificado con exito."),De(!1)},N=async w=>{await i(w),u("El retrato ha sido eliminado con exito.")},M=()=>{e(a)},P=w=>{switch(w.preventDefault(),w.target.id){case"title":h(w.target.value);break;case"description":g(w.target.value);break;case"category":x(w.target.value);break;case"award":p(w.target.checked);break;case"awardURL":_(w.target.value);break;case"price":O(w.target.value);break;case"status":J(w.target.value);break}};return k("div",{children:[m(Gn,{}),k(qL,{children:[l&&k("div",{className:"messages__container",children:[l," ",m($L,{onClick:()=>{u(null)}})]}),m("h2",{children:"Publicar nuevo retrato"}),k("form",{onSubmit:Te?ce:b,children:[k("div",{className:"input__container",children:[m("label",{htmlFor:"title",children:"Titulo"}),m("input",{onChange:P,type:"text",name:"title",id:"title",minLength:"3",maxLength:"20",value:c,required:!0})]}),k("div",{className:"input__container",children:[m("label",{htmlFor:"description",children:"Descripci\xF3n"}),m("input",{onChange:P,type:"text",name:"description",id:"description",minLength:"8",maxLength:"200",value:d,required:!0})]}),k("div",{className:"input__container",children:[m("label",{htmlFor:"category",children:"Categor\xEDa"}),m("input",{onChange:P,type:"text",name:"category",id:"category",minLength:"3",maxLength:"20",value:y,required:!0})]}),k("div",{className:"input__container",children:[m("label",{htmlFor:"award",children:"\xBFTiene Premio?"}),m("input",{onChange:P,type:"checkbox",name:"award",id:"award",value:S})]}),S===!0&&k(ol,{children:[k("div",{className:"input__container",children:[m("label",{htmlFor:"awardPhoto",children:"Imagen del Premio"}),m("input",{onChange:He,type:"file",name:"awardPhoto",id:"awardPhoto",required:!0})]}),k("div",{className:"input__container",children:[m("label",{htmlFor:"awardURL",children:"URL de la Publicaci\xF3n"}),m("input",{onChange:P,type:"text",name:"awardURL",id:"awardURL",minLength:"2",maxLength:"200",value:E,required:!0})]})]}),k("div",{className:"input__container",children:[m("label",{htmlFor:"price",children:"Precio (en d\xF3lares)"}),m("input",{onChange:P,type:"number",name:"price",id:"price",min:"1",max:"5000",value:D,required:!0})]}),k("div",{className:"input__container",children:[m("label",{htmlFor:"status",children:"Estado"}),k("div",{children:[m("input",{type:"radio",onChange:P,name:"status",id:"status",value:"disponible",required:!0}),m("label",{htmlFor:"disponible",children:"Disponible"})]}),k("div",{children:[m("input",{type:"radio",onChange:P,name:"status",id:"status",value:"vendido",required:!0}),m("label",{htmlFor:"vendido",children:"Vendido"})]})]}),k("div",{className:"input__container",children:[m("label",{htmlFor:"images",children:"Imagenes"}),m("input",{onChange:He,type:"file",name:"images",id:"images",required:!0})]}),Te?m(ol,{children:m("button",{type:"submit",children:"Editar retrato"})}):k(ol,{children:[m("button",{type:"submit",children:"Crear retrato"}),m("button",{type:"reset",onClick:H,children:"Vaciar Campos"})]})]}),m("h2",{children:"Ver, editar y/o eliminar retratos"}),m("button",{onClick:M,children:"Recargar datos"}),m("section",{children:o&&o.map(w=>k("div",{children:[m("img",{src:w==null?void 0:w.images,alt:w==null?void 0:w.title}),k("span",{onClick:()=>N(w==null?void 0:w.id),children:[m("h5",{children:"Eliminar"}),m(ML,{})]}),k("span",{onClick:()=>W(w),children:[m("h5",{children:"Editar"}),m(FL,{})]})]},w.id))}),m("button",{className:"logout",onClick:en,children:"Cerrar sesi\xF3n"})]}),m(Qn,{})]})}const Ho={_origin:"https://api.emailjs.com"},GL=(t,e="https://api.emailjs.com")=>{Ho._userID=t,Ho._origin=e},OS=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class b0{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const LS=(t,e,n={})=>new Promise((r,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new b0(o);a.status===200||a.text==="OK"?r(a):i(a)}),s.addEventListener("error",({target:o})=>{i(new b0(o))}),s.open("POST",Ho._origin+t,!0),Object.keys(n).forEach(o=>{s.setRequestHeader(o,n[o])}),s.send(e)}),QL=(t,e,n,r)=>{const i=r||Ho._userID;OS(i,t,e);const s={lib_version:"3.10.0",user_id:i,service_id:t,template_id:e,template_params:n};return LS("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},YL=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},XL=(t,e,n,r)=>{const i=r||Ho._userID,s=YL(n);OS(i,t,e);const o=new FormData(s);return o.append("lib_version","3.10.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",i),LS("/api/v1.0/email/send-form",o)},JL={init:GL,send:QL,sendForm:XL},ZL="service_e6bwg0p",eM="template_3z9pvpj",tM="hwH8wj1eN-3bQW7te",nM="/SilvinaSilberman/assets/contact.d1744b50.jpeg",rM=vt.section`
    width: 100%;
    height: max-content;
    margin-top: 40px;
    padding: 40px 20px;

    display: flex;
    flex-direction: column;

    & div {
        & div.form__information {
            width: 100%;
            height: max-content;
            margin-bottom: 40px;

            display: flex;
            flex-direction: column;

            & h1 {
                margin-bottom: 20px;

                color: black;
                font-size: 28px;
                line-height: 38px;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            & p {
                margin-bottom: 10px;

                color: gray;
                font-size: 18px;
                line-height: 28px;
                font-weight: 300;

                &:last-child {
                    margin-bottom: 0;
                }

                & a {
                    padding-bottom: 2px;

                    border-bottom: 1px solid black;
                    transition: all .6s;

                    color: black;
                    font-weight: 400;
                    text-decoration: none;

                    &:hover {
                        color: black;
                    }
                }
            }
        }
        
        & form {
            & div {
                position: relative;
                width: 100%;
                margin-bottom: 20px;

                display: flex;
                flex-direction: column;

                & label {
                    margin-bottom: 10px;

                    color: black;
                    font-size: 14px;
                    font-weight: 300;
                }

                & input,
                & textarea {
                    width: 100%;
                    height: 48px;
                    padding: 0 20px;

                    background-color: ghostwhite;
                    border: 1px solid gainsboro;
                    border-radius: 1px;
                    outline: none;
                    cursor: pointer;
                    transition: all .6s;

                    color: black;
                    font-size: 16px;
                    font-weight: 400;
                }

                & textarea {
                    height: 120px;
                    padding-top: 20px;
                }
            }

            & button {
                width: max-content;
                height: 48px;
                margin-top: 10px;
                padding: 0 28px;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: grey;
                border: none;
                border-radius: 1px;
                outline: none;
                cursor: pointer;
                transition: all .6s;

                color: white;
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 4px;

                &:hover {
                    background-color: var(--colorPrincipal);
                }

                &.send__mail {
                    background-color: rgb(129, 218, 94);
                }
            }
        }
    }

    & div:last-child {
        width: 100%;
        height: max-content;
        margin-top: 40px;

        & img {
            width: 100%;
            height: 460px;
            margin-bottom: 20px;

            object-fit: cover;
            image-rendering: optimizeQuality;

            border: none;
            border-radius: 2px;
        }

        & h4 {
            color: gray;
            font-size: 18px;
            line-height: 28px;
            font-weight: 300;
        }
    }

    @media only screen and (min-width: 768px) {
        padding: 40px 20px;

        flex-direction: row;
        justify-content: space-between;

        & div {
            width: 45%;

            & div.form__information {
                & h1 {
                    font-size: 28px;
                    line-height: 38px;
                }
            }

            & form {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;

                & div {
                    width: 100%;

                    &.row {
                        width: 49%;
                    }
                }
            }
        }

        & div:last-child {
            width: 45%;
            margin-top: 0;

            img {
                height: 420px;
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        padding: 80px;

        & div:last-child {
            img {
                height: 520px;
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 80px 160px;

        & div:last-child {
            width: 40%;
        }
    }
`;function iM(){I.exports.useEffect(()=>{window.scroll({top:0,left:0,behavior:"smooth"})},[]);const t=I.exports.useRef();return k("div",{children:[m(Gn,{}),k(rM,{children:[k("div",{children:[k("div",{className:"form__information",children:[m("h1",{children:"Empezar proyecto"}),k("p",{children:["Contactame en el formulario de aqu\xED abajo para m\xE1s informaci\xF3n o v\xEDa email en ",m("a",{href:"mailto:silvinasilberman@gmail.com",children:"silvinasilberman@gmail.com"}),"."]}),k("p",{children:["Tenes un proyecto? Directamente rellena este ",m("a",{href:"",children:"formulario rapido"})," y pronto estar\xE9 en contacto con vos."]}),k("p",{children:["Tambi\xE9n podes conocer como trabajo ",m("a",{href:"/about",children:"aqu\xED"}),"."]})]}),k("form",{ref:t,onSubmit:n=>{n.preventDefault(),JL.sendForm(ZL,eM,t.current,tM).then(()=>{document.querySelector("form button").classList.add("send__mail"),document.querySelector("form button").innerHTML="ENVIADO",setTimeout(()=>{location.reload()},2500)},r=>{console.log(r.text)})},children:[k("div",{className:"row",children:[m("label",{htmlFor:"name",children:"Nombre"}),m("input",{type:"text",name:"name",id:"name",minLength:"3",maxLength:"20",required:!0})]}),k("div",{className:"row",children:[m("label",{htmlFor:"email",children:"Email"}),m("input",{type:"email",name:"email",id:"email",minLength:"6",maxLength:"40",required:!0})]}),k("div",{children:[m("label",{htmlFor:"issue",children:"Asunto"}),m("input",{type:"text",name:"issue",id:"issue",minLength:"4",maxLength:"28",required:!0})]}),k("div",{children:[m("label",{htmlFor:"message",children:"Mensaje"}),m("textarea",{type:"text",name:"message",id:"message",minLength:"4",maxLength:"200",required:!0})]}),m("button",{type:"submit",children:"Enviar"})]})]}),k("div",{children:[m("img",{src:nM,alt:"Silvina Silberman"}),m("h4",{children:"Actualmente, me encuentro trabajando en CABA pero realizo encargo a todo el pa\xEDs."})]})]}),m(Qn,{})]})}const sM=vt.section`
    width: 100%;
    height: max-content;
    margin-top: 20px;
    padding: 60px 20px;

    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 40px;

        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 500;
        text-align: center;
    }

    & div.error__messages {
        width: 100%;
        height: max-content;
        padding: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div {
            width: 100%;
            height: max-content;
            padding: 20px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-color: black;
            border-radius: 2px;

            color: white;
            font-size: 12px;
            line-height: 22px;
            font-weight: 500;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;

            svg {
                margin-bottom: 20px;

                color: white;
                font-size: 28px;
            }
        }
    }

    & div.portfolio {
        width: 100%;
        height: max-content;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        & a {
            width: 100%;
            height: max-content;
            margin: 2% 0;

            border: 1px solid transparent;
            transition: all .6s;

            & img {
                width: 100%;
                height: 100%;

                object-fit: contain;
                image-rendering: optimizeQuality;

                border-radius: 2px;
            }

            &:hover {
                padding: 10px;

                border: 1px solid gainsboro;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        h1 {
            font-size: 42px;
            line-height: 52px;
        }

        & div.error__messages {
           div {
                width: 80%;
                padding: 40px;

                font-size: 14px;
                line-height: 24px;

                svg {
                    margin-bottom: 28px;

                    font-size: 32px;
                }
           }
        }
        
        & div.portfolio {
            justify-content: space-between;
            
            & a {
                width: 48%;

                img {
                    height: 480px;

                    object-fit: cover;
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        & div.error__messages {
           div {
                width: 80%;
                padding: 40px 80px;

                font-size: 18px;
                line-height: 28px;

                svg {
                    margin-bottom: 32px;

                    font-size: 40px;
                }
           }
        }

        & div.portfolio {
            & a {
                width: 32%;
                margin: 1% 0;

                img {
                    height: 420px;
                }
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 80px 120px;

        h1 {
            margin-bottom: 60px;

            font-size: 52px;
            line-height: 62px;
        }

        & div.error__messages {
           div {
                width: 70%;
                padding: 40px 100px;

                font-size: 20px;
                line-height: 30px;
            }
        }

        & div.portfolio {
            & a {
                img {
                    height: 520px;
                }
            }
        }
    }
`;function oM(){const{getProducts:t}=I.exports.useContext(Lr),[e,n]=I.exports.useState(null),[r,i]=I.exports.useState(null);return I.exports.useEffect(()=>{t(n),!e||(e==null?void 0:e.length)<0?i("Los productos estan siendo cargados a la web, espere un momento o vuelva a intentarlo m\xE1s tarde."):i(null)},[]),k(sM,{children:[m("h1",{children:"Portfolio"}),m("div",{className:"portfolio",id:"portfolio",children:(e==null?void 0:e.length)>0&&e?e.map(s=>m(Ke,{to:`/colection/${s.id}`,children:m("img",{src:s.images,alt:s.title})},s.id)):m("div",{className:"error__messages",children:k("div",{children:[m(PS,{}),r]})})})]})}const aM=vt.main`
  position: relative;

  width: 100%;
  height: 640px;
  padding: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #00000073;
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
  background-repeat: no-repeat;

  a {
    width: max-content;
    height: 54px;
    margin-top: 40px;
    padding: 0 28px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: 2px solid white;
    border-radius: 1px;
    outline: none;
    transition: all .6s;
    cursor: pointer;

    color: white;
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;

    &:hover {
      background-color: white;

      color: black;
    }
  }

  svg {
    position: absolute;
    bottom: 60px;
    left: calc(50% - 20px);

    cursor: pointer;

    color: white;
    font-size: 32px;

    animation: mouse 0.8s alternate infinite ease-in-out;
  }

  @keyframes mouse {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(40px);
    }
  }

  @media only screen and (min-width: 768px) {
    height: 680px;

    a {
      font-size: 16px;
      line-height: 26px;
    }

    svg {
      font-size: 34px;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 780px;

    svg {
      font-size: 36px;
    }
  }
`;function lM(){return I.exports.useEffect(()=>{window.scroll({top:0,left:0,behavior:"smooth"})},[]),k("div",{children:[m(Gn,{}),k(aM,{children:[m(Ke,{to:"/contact",children:"Cotizar proyecto"}),m(HL,{})]}),m(oM,{}),m(Qn,{})]})}const uM=vt.div`
    width: 100%;
    min-height: max-content;
    padding: 120px 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & div.error__message {
        width: 100%;
        max-width: 600px;
        height: max-content;
        margin-top: 30px;
        padding: 20px;

        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;

        background-color: #c0212173;

        & p {
            color: #e53e3e;
            font-size: 12px;
            line-height: 22px;
            font-weight: 600;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        & svg {
            margin-bottom: 20px;

            color: #e53e3e;
            font-size: 24px;
        }
    }

    & h1 {
        margin-bottom: 40px;

        color: black;
        font-size: 24px;
        line-height: 34px;
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    & form {
        width: 100%;
        max-width: 600px;
        height: max-content;
        padding: 20px;

        display: flex;
        flex-direction: column;

        background-color: ghostwhite;

        & input {
            width: 100%;
            height: 54px;
            margin-bottom: 20px;
            padding: 0 20px;

            background-color: white;
            border: 1px solid gainsboro;
            border-radius: 1px;
            outline: none;
            cursor: pointer;
            transition: all .6s;

            color: black;
            font-size: 16px;
            font-weight: 400;
        }

        & div {
            display: flex;
            flex-direction: column;

            & button {
                width: 100%;
                height: 54px;
                margin-bottom: 20px;
                padding: 0 24px;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: grey;
                border: none;
                border-radius: 1px;
                outline: none;
                cursor: pointer;
                transition: all .6s;

                color: white;
                font-size: 16px;
                font-weight: 400;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            & h4 {
                width: max-content;
                padding-bottom: 4px;

                border-bottom: 1px solid gainsboro;
                cursor: pointer;

                color: grey;
                font-size: 16px;
                font-weight: 300;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        & h1 {
            font-size: 28px;
            line-height: 38px;
        }   

        & div.error__message {
            padding: 40px;

            flex-direction: row;
            justify-content: space-between;

            & p {
                max-width: 80%;

                font-size: 14px;
                line-height: 24px;
                text-align: left;
            }

            & svg {
                margin-bottom: 0;

                font-size: 28px;
            }
        }

        & form {
            padding: 48px;

            & div {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                & button {
                    width: max-content;
                    margin-bottom: 0;
                    padding: 0 36px;
                }
            }            
        }
    }
`;function cM(){I.exports.useEffect(()=>{window.scroll({top:0,left:0,behavior:"smooth"})},[]);const{loginAdminUser:t,resetPassword:e,user:n}=I.exports.useContext(Lr),r=Nu(),[i,s]=I.exports.useState({email:"",password:""}),[o,a]=I.exports.useState(""),l=({target:{name:h,value:d}})=>{s({...i,[h]:d})};return k("div",{children:[m(Gn,{}),k(uM,{children:[m("h1",{children:"Acceso de administrador"}),k("form",{onSubmit:async h=>{h.preventDefault(),a("");try{await t(i.email,i.password),n&&r("/admin")}catch(d){console.error(d),a("Ocurrio un error. Revisa si has escrito bien tanto tu correo como tu contrase\xF1a o vuelve a intentarlo m\xE1s tarde.")}},children:[m("input",{onChange:l,type:"email",name:"email",id:"email",minLength:"6",maxLength:"40",placeholder:"Ingresa tu correo electronico.",required:!0}),m("input",{onChange:l,type:"password",name:"password",id:"password",minLength:"6",maxLength:"40",placeholder:"Ingresa tu contrase\xF1a.",required:!0}),k("div",{children:[m("button",{type:"submit",children:"Iniciar sesi\xF3n"}),m("h4",{onClick:async()=>{if(!i.email)return a("Escribe tu correo en la casilla para resetear tu contrase\xF1a.");try{await e(i.email),a("Te enviamos un email a tu correo para que puedas resetear tu contrase\xF1a.")}catch{a("Ocurrio un error. No pudimos resetear tu contrase\xF1a. Revisa si has escrito bien tu correo o vuelve a intentarnos m\xE1s tarde.")}},children:"\xBFOlvidaste tu contrase\xF1a?"})]})]}),o&&k("div",{className:"error__message",children:[m("p",{children:o}),m(WL,{})]})]}),m(Qn,{})]})}const hM=vt.div`
  width: 100%;
  height: max-content;
  margin-top: 40px;
  padding: 60px 20px;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: max-content;
    margin-bottom: 20px;

    object-fit: contain;
    image-rendering: optimizeQuality;
  }

  div.product__information {
    span {
      display: flex;
      flex-direction: row;
      align-items: center;

      color: black;
      font-size: 12px;
      line-height: 22px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;

      a {
        margin-right: 10px;

        color: gray;
        text-decoration: none;
      }

      label {
        margin-left: 10px;
      }
    }

    h1 {
      margin-top: 10px;

      display: flex;
      flex-direction: row;
      align-items: center;

      color: black;
      font-size: 36px;
      line-height: 46px;
      font-weight: 500;

      span {
        margin-top: 6px;
        margin-left: 10px;

        color: black;
        font-size: 20px;
      }
    }

    h2 {
      margin-top: 20px;

      display: flex;
      flex-direction: row;
      align-items: center;

      color: black;
      font-size: 28px;
      line-height: 38px;
      font-weight: 400;

      span {
        margin-left: 4px;
        
        font-size: 14px;
        line-height: 24px;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      h3 {
        width: max-content;
        height: max-content;
        margin-left: 20px;
        padding: 6px 10px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 2px;

        color: white;
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;

        &.disponible {
          background-color: #4ea522;
        }

        &.vendido {
          background-color: #be2727;
        }
      }
    }

    p {
      margin-top: 20px;

      color: gray;
      font-size: 18px;
      line-height: 28px;
      font-weight: 300;
    }

    a.ask__product {
      width: max-content;
      height: 48px;
      margin-top: 20px;
      padding: 0 28px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      background-color: transparent;
      border: 2px solid black;
      border-radius: 2px;

      color: black;
      font-size: 14px;
      line-height: 24px;
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 2px;

      svg {
        margin-left: 14px;

        color: black;
        font-size: 16px;
      }
    }

    div.buyer__information {
      margin-top: 40px;
      padding-top: 40px;

      border-top: 1px solid gainsboro;

      display: flex;
      flex-direction: column;

      h4 {
        margin-top: 20px;

        display: flex;
        flex-direction: row;
        align-items: center;

        color: black;
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;

        svg {
          margin-right: 10px;

          color: black;
          font-size: 18px;
        }

        &:first-child {
          margin-top: 0;
        }
      }

      p {
        margin-top: 10px;

        color: gray;
        font-size: 18px;
        line-height: 28px;
        font-weight: 300;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    img {
      width: 48%;
      height: 100%;
      margin-bottom: 0;

      object-fit: cover;
    }

    div.product__information {
      width: 48%;

      span {
        font-size: 14px;
        line-height: 24px;
      }

      h1 {
        font-size: 42px;
        line-height: 52px;
      }
  }

  @media only screen and (min-width: 1024px) {
    padding: 80px 40px;

    img,
    div.product__information {
      width: 45%;
    }
  }

  @media only screen and (min-width: 1200px) {
    padding: 80px 100px;
  }
`,dM=vt.div`
        width: 100%;
        height: max-content;
        margin: 60px 0;
        padding: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: #e8b717;
        border-radius: 2px;

        color: white;
        font-size: 24px;
        line-height: 34px;
        font-weight: 400;
        text-align: center;

        svg {
            margin-bottom: 12px;

            color: white;
            font-size: 36px;
        }

    @media only screen and (min-width: 540px) {
            flex-direction: row;
            justify-content: space-between;

            text-align: left;

            svg {
                min-width: max-content;
                margin-bottom: 0;
                margin-right: 20px;
            }
        }
`;function fM(){const[t,e]=I.exports.useState(null),[n,r]=I.exports.useState(null),{productId:i}=YI(),{getProductById:s}=I.exports.useContext(Lr);return I.exports.useEffect(()=>{window.scroll({top:0,left:0,behavior:"smooth"})},[]),I.exports.useEffect(()=>{s(e,i),r(t?null:"Los productos estan siendo cargados a la web, espere un momento.")},[i]),k("div",{children:[m(Gn,{}),t?k(hM,{children:[m("img",{src:t.images,alt:t.title}),k("div",{className:"product__information",children:[k("span",{children:[m(Ke,{to:"/",children:"Inicio "})," / ",m("label",{children:t.title})]}),k("h1",{children:[t.title," ",m("span",{children:t.award&&m(jL,{})})]}),k("h2",{children:[t.price," ",m("span",{children:"usd"})," ",m("h3",{className:t.status==="disponible"?"disponible":"vendido",children:t.status})]}),m("p",{children:t.description}),t.status==="disponible"?k("a",{className:"ask__product",href:`mailto:silvinasilberman@gmail.com?subject=Quiero encargar: ${t.title}`,children:["Comprar ",m(VL,{})]}):k(Ke,{className:"ask__product",to:"/contact",children:["Realizar consulta ",m(OL,{})]}),k("div",{className:"buyer__information",children:[k("h4",{children:[m(BL,{}),"Marco"]}),m("p",{children:"Al momento de realizar tu pedido, podr\xE1s eligir entre distintas opciones de marcos y/o portarretratos, el cu\xE1l estar\xE1 incluido en su compra."}),k("h4",{children:[m(UL,{}),"Env\xEDos a domicilio"]}),m("p",{children:"Los env\xEDos a domicilio no estar\xE1n incluidos en la compra, al momento de realizar tu pedido deber\xE1s pactar la forma de intercambio con el vendedor."}),k("h4",{children:[m(LL,{}),"Formas de pago"]}),m("p",{children:"La forma de pago principal es efectivo en d\xF3lares. Sin embargo, tambi\xE9n se aceptan transferencias bancarias o mercado pago con tarjeta de credito o debito. En este ultimo caso, preguntar el tipo de cambio."})]})]})]}):k(dM,{children:[m(PS,{}),n]}),m(Qn,{})]})}const pM=vt.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ghostwhite;

    h1 {
        color: black;
        font-size: 16px;
        line-height: 26px;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`;function mM({children:t}){const{user:e,loadingUser:n}=I.exports.useContext(Lr);return n?m(pM,{children:m("h1",{children:"Ingresando a la cuenta de administrador..."})}):e?m("div",{children:t}):m(W1,{to:"/login"})}function gM({children:t}){const{user:e}=I.exports.useContext(Lr);return e?m(W1,{to:"/admin"}):m("div",{children:t})}const yM=vt.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-image: radial-gradient(circle at 13% 47%, rgba(140, 140, 140,0.03) 0%, rgba(140, 140, 140,0.03) 25%,transparent 25%, transparent 100%),radial-gradient(circle at 28% 63%, rgba(143, 143, 143,0.03) 0%, rgba(143, 143, 143,0.03) 16%,transparent 16%, transparent 100%),radial-gradient(circle at 81% 56%, rgba(65, 65, 65,0.03) 0%, rgba(65, 65, 65,0.03) 12%,transparent 12%, transparent 100%),radial-gradient(circle at 26% 48%, rgba(60, 60, 60,0.03) 0%, rgba(60, 60, 60,0.03) 6%,transparent 6%, transparent 100%),radial-gradient(circle at 97% 17%, rgba(150, 150, 150,0.03) 0%, rgba(150, 150, 150,0.03) 56%,transparent 56%, transparent 100%),radial-gradient(circle at 50% 100%, rgba(25, 25, 25,0.03) 0%, rgba(25, 25, 25,0.03) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 55% 52%, rgba(69, 69, 69,0.03) 0%, rgba(69, 69, 69,0.03) 6%,transparent 6%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));

    text-align: center;

    & h1 {
        color: black;
        font-size: 42px;
        line-height: 52px;
        font-weight: 600;
    }

    & h2 {
        margin: 24px 0 34px 0;

        color: black;
        font-size: 24px;
        line-height: 34px;
        font-weight: 400;
    }

    & a {
        width: max-content;
        height: 54px;
        padding: 0 28px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: grey;
        border: none;
        border-radius: 1px;
        transition: all .6s;

        color: white;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`;function vM(){return k(yM,{children:[m("h1",{children:"404"}),m("h2",{children:"La pagina que estas buscando no existe."}),m(Ke,{to:"/",children:"Volver al home"})]})}const wM=vt.div`
    width: 100%;

    h4 {
            margin: 40px 0 20px 0;

            color: black;
            font-size: 18px;
            line-height: 28px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
    }
        
    h5 {
            margin-bottom: 10px;

            &:last-child {
                margin-bottom: 0;
            }

            display: flex;
            flex-direction: row;
            align-items: center;

            color: gray;
            font-size: 14px;
            line-height: 24px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;

            a {
                width: max-content;
                margin-left: 10px;
                padding-bottom: 4px;

                border-bottom: 1px solid black;
                
                color: black;
                font-size: 16px;
                line-height: 26px;
                font-weight: 500;
                text-transform: lowercase;
                text-decoration: none;
                letter-spacing: 0;
            }
    }

    a.contact__navlink {
            width: max-content;
            margin-top: 10px;
            padding-bottom: 4px;

            display: flex;
            flex-direction: row;
            align-items: center;

            border-bottom: 1px solid black;
            transition: all .6s;

            color: black;
            font-size: 14px;
            line-height: 24px;
            font-weight: 600;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 2px;

            svg {
                margin-left: 10px;

                transition: all .6s;

                color: black;
                font-size: 18px;
            }

            &:hover {
                border-color: gray;

                color: gray;

                svg {
                    color: gray;
                }
            }
    }
    
    @media only screen and (min-width: 1024px) {
        h4 {
            font-size: 20px;
            line-height: 30px;
        }

        h5 {
            font-size: 16px;
            line-height: 26px;

            a {
                font-size: 18px;
                line-height: 28px;
            }
        }

        a.contact__navlink {
            font-size: 16px;
            line-height: 26px;
        }
    }
`;function MS(){return k(wM,{children:[m("h4",{children:"Contacto"}),k("h5",{children:["Email: ",m("a",{href:"",target:"_blank",children:"silvinasilberman@gmail.com"})]}),k("h5",{children:["Instagram: ",m("a",{href:"",target:"_blank",children:"@silvisilberarte"})]}),k(Ke,{className:"contact__navlink",to:"/contact",children:["Empecemos Un Proyecto ",m(zL,{})]})]})}const xM=vt.div`
    width: 100%;
    height: max-content;
    padding: 80px 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 60px;

        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 500;
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: column;

        text-align: left;

        p {
            color: gray;
            font-size: 18px;
            line-height: 28px;
            font-weight: 400;
        }
    }

    @media only screen and (min-width: 768px) {
        padding: 80px 60px 60px 60px;

        div {
            p {
                font-size: 20px;
                line-height: 30px;
            }
        }   
    }

    @media only screen and (min-width: 1024px) {
        padding: 80px 160px 60px 160px;

        h1 {
            font-size: 42px;
            line-height: 52px;
        }  
    }

    @media only screen and (min-width: 1200px) {
        padding: 100px 320px 80px 320px;

        h1 {
            font-size: 48px;
            line-height: 58px;
        }  
    }
`;function EM(){return I.exports.useEffect(()=>{window.scroll({top:0,left:0,behavior:"smooth"})},[]),k("div",{children:[m(Gn,{}),k(xM,{children:[m("h1",{children:"Sobre Mi"}),k("div",{children:[k("p",{children:["Barrio Chino Est. 2017 ",m("br",{})," ",m("br",{}),"Nacido en la Cordillera de los Andes ",m("br",{})," ",m("br",{}),"Hecho en Buenos Aires ",m("br",{})," ",m("br",{}),"Cada prenda es confeccionada con materia prima de primera calidad, de manera responsable y \xE9tica en cada una de las etapas de su producci\xF3n y su impresi\xF3n. ",m("br",{})," ",m("br",{}),"Cada ser que forma parte del proceso lo hace con amor y dedicaci\xF3n."]}),m(MS,{})]})]}),m(Qn,{})]})}const SM=vt.div`
    width: 100%;
    height: max-content;
    padding: 80px 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 28px;

        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 500;
        text-align: center;
    }

    div.faqs__container {
        width: 100%;

        display: flex;
        flex-direction: column;

        div {
            margin-top: 32px;
            padding-top: 32px;

            display: flex;
            flex-direction: column;

            border-top: 1px solid gainsboro;

            &:first-child {
                margin-top: 20px;
                padding-top: 0;

                border-top: none;
            }

            h3 {
                margin-bottom: 20px;

                color: black;
                font-size: 24px;
                line-height: 34px;
                font-weight: 400;
            }

            p {
                color: gray;
                font-size: 18px;
                line-height: 28px;
                font-weight: 300;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        div.faqs__container {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;

            div {
                width: 45%;
                padding-top: 0;

                border-top: none;

                &:first-child {
                    margin-top: 32px;
                }

                h3 {
                    font-size: 28px;
                    line-height: 38px;
                }
            }
        }
    }
    
    @media only screen and (min-width: 1024px) {
        padding: 100px 60px 80px 60px;

        h1 {
            font-size: 42px;
            line-height: 52px;
        }

        div.faqs__container {
            div {
                h3 {
                    font-size: 32px;
                    line-height: 42px;
                }

                p {
                    font-size: 20px;
                    line-height: 30px;
                }
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 100px 160px 80px 160px;

        h1 {
            font-size: 48px;
            line-height: 58px;
        }  
    
        div.faqs__container {
            div {
                margin-top: 48px !important;
            }
        }
    }
`;function _M(){return I.exports.useEffect(()=>{window.scroll({top:0,left:0,behavior:"smooth"})},[]),k("div",{children:[m(Gn,{}),k(SM,{children:[m("h1",{children:"Preguntas Frecuentes"}),k("div",{className:"faqs__container",children:[k("div",{children:[m("h3",{children:"\xBFCu\xE1nto se tarda en producir un retrato personalizado?"}),m("p",{children:"Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today."})]}),k("div",{children:[m("h3",{children:"\xBFCu\xE1nto se tarda en producir un retrato personalizado?"}),m("p",{children:"Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today."})]}),k("div",{children:[m("h3",{children:"\xBFCu\xE1nto se tarda en producir un retrato personalizado?"}),m("p",{children:"Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today."})]}),k("div",{children:[m("h3",{children:"\xBFCu\xE1nto se tarda en producir un retrato personalizado?"}),m("p",{children:"Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today."})]}),k("div",{children:[m("h3",{children:"\xBFCu\xE1nto se tarda en producir un retrato personalizado?"}),m("p",{children:"Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today."})]}),k("div",{children:[m("h3",{children:"\xBFCu\xE1nto se tarda en producir un retrato personalizado?"}),m("p",{children:"Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today."})]})]}),m(MS,{})]}),m(Qn,{})]})}const kM="/SilvinaSilberman/assets/award__1.ee23d64b.jpeg",IM="/SilvinaSilberman/assets/award__2.c080648f.jpeg",TM="/SilvinaSilberman/assets/award__3.d05a376e.jpeg",CM=vt.div`
    width: 100%;
    height: max-content;
    padding: 80px 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 60px;

        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 500;
        text-align: center;
    }

    div.awards__container {
        width: 100%;
        
        display: flex;
        flex-direction: column;

        div.awards__box {
            margin-bottom: 40px;

            &:last-child {
                margin-bottom: 0;
            }

            display: flex;
            flex-direction: column;

            img {
                width: 100%;
                height: max-content;

                object-fit: contain;
                image-rendering: optimizeQuality;

                border-radius: 2px;
            }

            a {
                width: max-content;
                margin-top: 20px;
                padding-bottom: 4px;

                border-bottom: 1px solid gray;

                color: gray;
                font-size: 14px;
                line-height: 24px;
                font-weight: 500;
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
        }
    }
`;function AM(){return I.exports.useEffect(()=>{window.scroll({top:0,left:0,behavior:"smooth"})},[]),k("div",{children:[m(Gn,{}),k(CM,{children:[m("h1",{children:"Premios"}),k("div",{className:"awards__container",children:[k("div",{className:"awards__box",children:[m("img",{src:kM,alt:"Silvina Silberman"}),m("a",{children:"Ver Publicaci\xF3n"})]}),k("div",{className:"awards__box",children:[m("img",{src:IM,alt:"Silvina Silberman"}),m("a",{children:"Ver Publicaci\xF3n"})]}),k("div",{className:"awards__box",children:[m("img",{src:TM,alt:"Silvina Silberman"}),m("a",{children:"Ver Publicaci\xF3n"})]})]})]}),m(Qn,{})]})}const bM=vt.div`
    width: 100%;
    height: max-content;
    padding: 80px 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 60px;

        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 500;
        text-align: center;
    }
`;function RM(){I.exports.useEffect(()=>{window.scroll({top:0,left:0,behavior:"smooth"})},[]);const{getProducts:t}=I.exports.useContext(Lr),[e,n]=I.exports.useState(null),[r,i]=I.exports.useState(null);return I.exports.useEffect(()=>{t(n),e&&e.forEach((s,o)=>{o<=7&&i(...r,s.title)}),r&&console.log(r)},[]),k("div",{children:[m(Gn,{}),m(bM,{children:m("h1",{children:"Eleg\xED Tu Pr\xF3ximo Retrato"})}),m(Qn,{})]})}function NM(){return k(sT,{children:[m(rn,{path:"/",element:m(lM,{})}),m(rn,{path:"/about",element:m(EM,{})}),m(rn,{path:"/designs",element:m(RM,{})}),m(rn,{path:"/awards",element:m(AM,{})}),m(rn,{path:"/colection/:productId",element:m(fM,{})}),m(rn,{path:"/faqs",element:m(_M,{})}),m(rn,{path:"/contact",element:m(iM,{})}),m(rn,{path:"/login",element:m(gM,{children:m(cM,{})})}),m(rn,{path:"/admin",element:m(mM,{children:m(KL,{})})}),m(rn,{path:"/*",element:m(vM,{})})]})}Dh.createRoot(document.getElementById("root")).render(m(Mn.StrictMode,{children:m(cT,{children:m(bO,{children:m(NM,{})})})}));
