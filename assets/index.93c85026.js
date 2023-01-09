function L_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function M_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var A={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),$_=Symbol.for("react.portal"),F_=Symbol.for("react.fragment"),U_=Symbol.for("react.strict_mode"),z_=Symbol.for("react.profiler"),j_=Symbol.for("react.provider"),V_=Symbol.for("react.context"),B_=Symbol.for("react.forward_ref"),H_=Symbol.for("react.suspense"),W_=Symbol.for("react.memo"),q_=Symbol.for("react.lazy"),Rm=Symbol.iterator;function K_(t){return t===null||typeof t!="object"?null:(t=Rm&&t[Rm]||t["@@iterator"],typeof t=="function"?t:null)}var b0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R0=Object.assign,N0={};function ss(t,e,n){this.props=t,this.context=e,this.refs=N0,this.updater=n||b0}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function D0(){}D0.prototype=ss.prototype;function hf(t,e,n){this.props=t,this.context=e,this.refs=N0,this.updater=n||b0}var df=hf.prototype=new D0;df.constructor=hf;R0(df,ss.prototype);df.isPureReactComponent=!0;var Nm=Array.isArray,P0=Object.prototype.hasOwnProperty,ff={current:null},O0={key:!0,ref:!0,__self:!0,__source:!0};function L0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)P0.call(e,r)&&!O0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Bo,type:t,key:s,ref:o,props:i,_owner:ff.current}}function G_(t,e){return{$$typeof:Bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bo}function Q_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dm=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Q_(""+t.key):e.toString(36)}function qa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bo:case $_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Oc(o,0):r,Nm(i)?(n="",t!=null&&(n=t.replace(Dm,"$&/")+"/"),qa(i,e,n,"",function(u){return u})):i!=null&&(pf(i)&&(i=G_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Nm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Oc(s,a);o+=qa(s,e,n,l,i)}else if(l=K_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Oc(s,a++),o+=qa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wa(t,e,n){if(t==null)return t;var r=[],i=0;return qa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Y_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},Ka={transition:null},X_={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:ff};ne.Children={map:wa,forEach:function(t,e,n){wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wa(t,function(){e++}),e},toArray:function(t){return wa(t,function(e){return e})||[]},only:function(t){if(!pf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=ss;ne.Fragment=F_;ne.Profiler=z_;ne.PureComponent=hf;ne.StrictMode=U_;ne.Suspense=H_;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X_;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=R0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ff.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)P0.call(e,l)&&!O0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Bo,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:V_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:j_,_context:t},t.Consumer=t};ne.createElement=L0;ne.createFactory=function(t){var e=L0.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:B_,render:t}};ne.isValidElement=pf;ne.lazy=function(t){return{$$typeof:q_,_payload:{_status:-1,_result:t},_init:Y_}};ne.memo=function(t,e){return{$$typeof:W_,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return St.current.useCallback(t,e)};ne.useContext=function(t){return St.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return St.current.useDeferredValue(t)};ne.useEffect=function(t,e){return St.current.useEffect(t,e)};ne.useId=function(){return St.current.useId()};ne.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return St.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};ne.useRef=function(t){return St.current.useRef(t)};ne.useState=function(t){return St.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return St.current.useTransition()};ne.version="18.2.0";(function(t){t.exports=ne})(A);const Ln=M_(A.exports),Rh=L_({__proto__:null,default:Ln},[A.exports]);var Nh={},M0={exports:{}},Ft={},$0={exports:{}},F0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,H){var q=C.length;C.push(H);e:for(;0<q;){var me=q-1>>>1,R=C[me];if(0<i(R,H))C[me]=H,C[q]=R,q=me;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var H=C[0],q=C.pop();if(q!==H){C[0]=q;e:for(var me=0,R=C.length,O=R>>>1;me<O;){var L=2*(me+1)-1,K=C[L],E=L+1,re=C[E];if(0>i(K,q))E<R&&0>i(re,K)?(C[me]=re,C[E]=q,me=E):(C[me]=K,C[L]=q,me=L);else if(E<R&&0>i(re,q))C[me]=re,C[E]=q,me=E;else break e}}return H}function i(C,H){var q=C.sortIndex-H.sortIndex;return q!==0?q:C.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,g=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(C){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=C)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function S(C){if(v=!1,y(C),!g)if(n(l)!==null)g=!0,fn(k);else{var H=n(u);H!==null&&Qe(S,H.startTime-C)}}function k(C,H){g=!1,v&&(v=!1,p(P),P=-1),m=!0;var q=d;try{for(y(H),h=n(l);h!==null&&(!(h.expirationTime>H)||C&&!Pe());){var me=h.callback;if(typeof me=="function"){h.callback=null,d=h.priorityLevel;var R=me(h.expirationTime<=H);H=t.unstable_now(),typeof R=="function"?h.callback=R:h===n(l)&&r(l),y(H)}else r(l);h=n(l)}if(h!==null)var O=!0;else{var L=n(u);L!==null&&Qe(S,L.startTime-H),O=!1}return O}finally{h=null,d=q,m=!1}}var N=!1,D=null,P=-1,Z=5,B=-1;function Pe(){return!(t.unstable_now()-B<Z)}function Re(){if(D!==null){var C=t.unstable_now();B=C;var H=!0;try{H=D(!0,C)}finally{H?ve():(N=!1,D=null)}}else N=!1}var ve;if(typeof f=="function")ve=function(){f(Re)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,W=yt.port2;yt.port1.onmessage=Re,ve=function(){W.postMessage(null)}}else ve=function(){_(Re,0)};function fn(C){D=C,N||(N=!0,ve())}function Qe(C,H){P=_(function(){C(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,fn(k))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var q=d;d=H;try{return C()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,H){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var q=d;d=C;try{return H()}finally{d=q}},t.unstable_scheduleCallback=function(C,H,q){var me=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?me+q:me):q=me,C){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=q+R,C={id:c++,callback:H,priorityLevel:C,startTime:q,expirationTime:R,sortIndex:-1},q>me?(C.sortIndex=q,e(u,C),n(l)===null&&C===n(u)&&(v?(p(P),P=-1):v=!0,Qe(S,q-me))):(C.sortIndex=R,e(l,C),g||m||(g=!0,fn(k))),C},t.unstable_shouldYield=Pe,t.unstable_wrapCallback=function(C){var H=d;return function(){var q=d;d=H;try{return C.apply(this,arguments)}finally{d=q}}}})(F0);(function(t){t.exports=F0})($0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=A.exports,Mt=$0.exports;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z0=new Set,io={};function oi(t,e){Bi(t,e),Bi(t+"Capture",e)}function Bi(t,e){for(io[t]=e,t=0;t<e.length;t++)z0.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dh=Object.prototype.hasOwnProperty,J_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pm={},Om={};function Z_(t){return Dh.call(Om,t)?!0:Dh.call(Pm,t)?!1:J_.test(t)?Om[t]=!0:(Pm[t]=!0,!1)}function ek(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tk(t,e,n,r){if(e===null||typeof e>"u"||ek(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var mf=/[\-:]([a-z])/g;function gf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mf,gf);it[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mf,gf);it[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mf,gf);it[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function yf(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tk(e,n,i,r)&&(n=null),r||i===null?Z_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qn=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ea=Symbol.for("react.element"),yi=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),Ph=Symbol.for("react.profiler"),j0=Symbol.for("react.provider"),V0=Symbol.for("react.context"),wf=Symbol.for("react.forward_ref"),Oh=Symbol.for("react.suspense"),Lh=Symbol.for("react.suspense_list"),Ef=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),B0=Symbol.for("react.offscreen"),Lm=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=Lm&&t[Lm]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Lc;function Ns(t){if(Lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lc=e&&e[1]||""}return`
`+Lc+t}var Mc=!1;function $c(t,e){if(!t||Mc)return"";Mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ns(t):""}function nk(t){switch(t.tag){case 5:return Ns(t.type);case 16:return Ns("Lazy");case 13:return Ns("Suspense");case 19:return Ns("SuspenseList");case 0:case 2:case 15:return t=$c(t.type,!1),t;case 11:return t=$c(t.type.render,!1),t;case 1:return t=$c(t.type,!0),t;default:return""}}function Mh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vi:return"Fragment";case yi:return"Portal";case Ph:return"Profiler";case vf:return"StrictMode";case Oh:return"Suspense";case Lh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V0:return(t.displayName||"Context")+".Consumer";case j0:return(t._context.displayName||"Context")+".Provider";case wf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ef:return e=t.displayName||null,e!==null?e:Mh(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return Mh(t(e))}catch{}}return null}function rk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mh(e);case 8:return e===vf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function H0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ik(t){var e=H0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sa(t){t._valueTracker||(t._valueTracker=ik(t))}function W0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=H0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $h(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Mm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function q0(t,e){e=e.checked,e!=null&&yf(t,"checked",e,!1)}function Fh(t,e){q0(t,e);var n=Sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uh(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uh(t,e,n){(e!=="number"||pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ds=Array.isArray;function Pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Ds(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function K0(t,e){var n=Sr(e.value),r=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function G0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?G0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _a,Q0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_a=_a||document.createElement("div"),_a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function so(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sk=["Webkit","ms","Moz","O"];Object.keys(js).forEach(function(t){sk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),js[e]=js[t]})});function Y0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||js.hasOwnProperty(t)&&js[t]?(""+e).trim():e+"px"}function X0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Y0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ok=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vh(t,e){if(e){if(ok[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Bh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hh=null;function Sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wh=null,Oi=null,Li=null;function zm(t){if(t=qo(t)){if(typeof Wh!="function")throw Error(x(280));var e=t.stateNode;e&&(e=fu(e),Wh(t.stateNode,t.type,e))}}function J0(t){Oi?Li?Li.push(t):Li=[t]:Oi=t}function Z0(){if(Oi){var t=Oi,e=Li;if(Li=Oi=null,zm(t),e)for(t=0;t<e.length;t++)zm(e[t])}}function ev(t,e){return t(e)}function tv(){}var Fc=!1;function nv(t,e,n){if(Fc)return t(e,n);Fc=!0;try{return ev(t,e,n)}finally{Fc=!1,(Oi!==null||Li!==null)&&(tv(),Z0())}}function oo(t,e){var n=t.stateNode;if(n===null)return null;var r=fu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var qh=!1;if(Mn)try{var _s={};Object.defineProperty(_s,"passive",{get:function(){qh=!0}}),window.addEventListener("test",_s,_s),window.removeEventListener("test",_s,_s)}catch{qh=!1}function ak(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Vs=!1,ml=null,gl=!1,Kh=null,lk={onError:function(t){Vs=!0,ml=t}};function uk(t,e,n,r,i,s,o,a,l){Vs=!1,ml=null,ak.apply(lk,arguments)}function ck(t,e,n,r,i,s,o,a,l){if(uk.apply(this,arguments),Vs){if(Vs){var u=ml;Vs=!1,ml=null}else throw Error(x(198));gl||(gl=!0,Kh=u)}}function ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jm(t){if(ai(t)!==t)throw Error(x(188))}function hk(t){var e=t.alternate;if(!e){if(e=ai(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jm(i),t;if(s===r)return jm(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function iv(t){return t=hk(t),t!==null?sv(t):null}function sv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sv(t);if(e!==null)return e;t=t.sibling}return null}var ov=Mt.unstable_scheduleCallback,Vm=Mt.unstable_cancelCallback,dk=Mt.unstable_shouldYield,fk=Mt.unstable_requestPaint,De=Mt.unstable_now,pk=Mt.unstable_getCurrentPriorityLevel,_f=Mt.unstable_ImmediatePriority,av=Mt.unstable_UserBlockingPriority,yl=Mt.unstable_NormalPriority,mk=Mt.unstable_LowPriority,lv=Mt.unstable_IdlePriority,uu=null,vn=null;function gk(t){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:wk,yk=Math.log,vk=Math.LN2;function wk(t){return t>>>=0,t===0?32:31-(yk(t)/vk|0)|0}var ka=64,Ia=4194304;function Ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ps(a):(s&=o,s!==0&&(r=Ps(s)))}else o=n&~i,o!==0?r=Ps(o):s!==0&&(r=Ps(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function Ek(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-sn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=Ek(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uv(){var t=ka;return ka<<=1,(ka&4194240)===0&&(ka=64),t}function Uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function _k(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function kf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function cv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var hv,If,dv,fv,pv,Qh=!1,xa=[],ar=null,lr=null,ur=null,ao=new Map,lo=new Map,Jn=[],kk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bm(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function ks(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=qo(e),e!==null&&If(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ik(t,e,n,r,i){switch(e){case"focusin":return ar=ks(ar,t,e,n,r,i),!0;case"dragenter":return lr=ks(lr,t,e,n,r,i),!0;case"mouseover":return ur=ks(ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ao.set(s,ks(ao.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,lo.set(s,ks(lo.get(s)||null,t,e,n,r,i)),!0}return!1}function mv(t){var e=Mr(t.target);if(e!==null){var n=ai(e);if(n!==null){if(e=n.tag,e===13){if(e=rv(n),e!==null){t.blockedOn=e,pv(t.priority,function(){dv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ga(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hh=r,n.target.dispatchEvent(r),Hh=null}else return e=qo(n),e!==null&&If(e),t.blockedOn=n,!1;e.shift()}return!0}function Hm(t,e,n){Ga(t)&&n.delete(e)}function xk(){Qh=!1,ar!==null&&Ga(ar)&&(ar=null),lr!==null&&Ga(lr)&&(lr=null),ur!==null&&Ga(ur)&&(ur=null),ao.forEach(Hm),lo.forEach(Hm)}function Is(t,e){t.blockedOn===e&&(t.blockedOn=null,Qh||(Qh=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,xk)))}function uo(t){function e(i){return Is(i,t)}if(0<xa.length){Is(xa[0],t);for(var n=1;n<xa.length;n++){var r=xa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ar!==null&&Is(ar,t),lr!==null&&Is(lr,t),ur!==null&&Is(ur,t),ao.forEach(e),lo.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)mv(n),n.blockedOn===null&&Jn.shift()}var Mi=qn.ReactCurrentBatchConfig,wl=!0;function Tk(t,e,n,r){var i=de,s=Mi.transition;Mi.transition=null;try{de=1,xf(t,e,n,r)}finally{de=i,Mi.transition=s}}function Ck(t,e,n,r){var i=de,s=Mi.transition;Mi.transition=null;try{de=4,xf(t,e,n,r)}finally{de=i,Mi.transition=s}}function xf(t,e,n,r){if(wl){var i=Yh(t,e,n,r);if(i===null)Qc(t,e,r,El,n),Bm(t,r);else if(Ik(i,t,e,n,r))r.stopPropagation();else if(Bm(t,r),e&4&&-1<kk.indexOf(t)){for(;i!==null;){var s=qo(i);if(s!==null&&hv(s),s=Yh(t,e,n,r),s===null&&Qc(t,e,r,El,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qc(t,e,r,null,n)}}var El=null;function Yh(t,e,n,r){if(El=null,t=Sf(r),t=Mr(t),t!==null)if(e=ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function gv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pk()){case _f:return 1;case av:return 4;case yl:case mk:return 16;case lv:return 536870912;default:return 16}default:return 16}}var ir=null,Tf=null,Qa=null;function yv(){if(Qa)return Qa;var t,e=Tf,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Qa=i.slice(t,1<r?1-r:void 0)}function Ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ta(){return!0}function Wm(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ta:Wm,this.isPropagationStopped=Wm,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),e}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cf=Ut(os),Wo=Te({},os,{view:0,detail:0}),Ak=Ut(Wo),zc,jc,xs,cu=Te({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xs&&(xs&&t.type==="mousemove"?(zc=t.screenX-xs.screenX,jc=t.screenY-xs.screenY):jc=zc=0,xs=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),qm=Ut(cu),bk=Te({},cu,{dataTransfer:0}),Rk=Ut(bk),Nk=Te({},Wo,{relatedTarget:0}),Vc=Ut(Nk),Dk=Te({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),Pk=Ut(Dk),Ok=Te({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lk=Ut(Ok),Mk=Te({},os,{data:0}),Km=Ut(Mk),$k={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Uk[t])?!!e[t]:!1}function Af(){return zk}var jk=Te({},Wo,{key:function(t){if(t.key){var e=$k[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Af,charCode:function(t){return t.type==="keypress"?Ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vk=Ut(jk),Bk=Te({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gm=Ut(Bk),Hk=Te({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Af}),Wk=Ut(Hk),qk=Te({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kk=Ut(qk),Gk=Te({},cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qk=Ut(Gk),Yk=[9,13,27,32],bf=Mn&&"CompositionEvent"in window,Bs=null;Mn&&"documentMode"in document&&(Bs=document.documentMode);var Xk=Mn&&"TextEvent"in window&&!Bs,vv=Mn&&(!bf||Bs&&8<Bs&&11>=Bs),Qm=String.fromCharCode(32),Ym=!1;function wv(t,e){switch(t){case"keyup":return Yk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ev(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wi=!1;function Jk(t,e){switch(t){case"compositionend":return Ev(e);case"keypress":return e.which!==32?null:(Ym=!0,Qm);case"textInput":return t=e.data,t===Qm&&Ym?null:t;default:return null}}function Zk(t,e){if(wi)return t==="compositionend"||!bf&&wv(t,e)?(t=yv(),Qa=Tf=ir=null,wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vv&&e.locale!=="ko"?null:e.data;default:return null}}var eI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eI[t.type]:e==="textarea"}function Sv(t,e,n,r){J0(r),e=Sl(e,"onChange"),0<e.length&&(n=new Cf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hs=null,co=null;function tI(t){Dv(t,0)}function hu(t){var e=_i(t);if(W0(e))return t}function nI(t,e){if(t==="change")return e}var _v=!1;if(Mn){var Bc;if(Mn){var Hc="oninput"in document;if(!Hc){var Jm=document.createElement("div");Jm.setAttribute("oninput","return;"),Hc=typeof Jm.oninput=="function"}Bc=Hc}else Bc=!1;_v=Bc&&(!document.documentMode||9<document.documentMode)}function Zm(){Hs&&(Hs.detachEvent("onpropertychange",kv),co=Hs=null)}function kv(t){if(t.propertyName==="value"&&hu(co)){var e=[];Sv(e,co,t,Sf(t)),nv(tI,e)}}function rI(t,e,n){t==="focusin"?(Zm(),Hs=e,co=n,Hs.attachEvent("onpropertychange",kv)):t==="focusout"&&Zm()}function iI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(co)}function sI(t,e){if(t==="click")return hu(e)}function oI(t,e){if(t==="input"||t==="change")return hu(e)}function aI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:aI;function ho(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dh.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function eg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tg(t,e){var n=eg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eg(n)}}function Iv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Iv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xv(){for(var t=window,e=pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pl(t.document)}return e}function Rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lI(t){var e=xv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Iv(n.ownerDocument.documentElement,n)){if(r!==null&&Rf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=tg(n,s);var o=tg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uI=Mn&&"documentMode"in document&&11>=document.documentMode,Ei=null,Xh=null,Ws=null,Jh=!1;function ng(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jh||Ei==null||Ei!==pl(r)||(r=Ei,"selectionStart"in r&&Rf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ws&&ho(Ws,r)||(Ws=r,r=Sl(Xh,"onSelect"),0<r.length&&(e=new Cf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ei)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Si={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Wc={},Tv={};Mn&&(Tv=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function du(t){if(Wc[t])return Wc[t];if(!Si[t])return t;var e=Si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Tv)return Wc[t]=e[n];return t}var Cv=du("animationend"),Av=du("animationiteration"),bv=du("animationstart"),Rv=du("transitionend"),Nv=new Map,rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){Nv.set(t,e),oi(e,[t])}for(var qc=0;qc<rg.length;qc++){var Kc=rg[qc],cI=Kc.toLowerCase(),hI=Kc[0].toUpperCase()+Kc.slice(1);Tr(cI,"on"+hI)}Tr(Cv,"onAnimationEnd");Tr(Av,"onAnimationIteration");Tr(bv,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(Rv,"onTransitionEnd");Bi("onMouseEnter",["mouseout","mouseover"]);Bi("onMouseLeave",["mouseout","mouseover"]);Bi("onPointerEnter",["pointerout","pointerover"]);Bi("onPointerLeave",["pointerout","pointerover"]);oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));function ig(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ck(r,e,void 0,t),t.currentTarget=null}function Dv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ig(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ig(i,a,u),s=l}}}if(gl)throw t=Kh,gl=!1,Kh=null,t}function we(t,e){var n=e[rd];n===void 0&&(n=e[rd]=new Set);var r=t+"__bubble";n.has(r)||(Pv(e,t,2,!1),n.add(r))}function Gc(t,e,n){var r=0;e&&(r|=4),Pv(n,t,r,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[Aa]){t[Aa]=!0,z0.forEach(function(n){n!=="selectionchange"&&(dI.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,Gc("selectionchange",!1,e))}}function Pv(t,e,n,r){switch(gv(e)){case 1:var i=Tk;break;case 4:i=Ck;break;default:i=xf}n=i.bind(null,e,n,t),i=void 0,!qh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qc(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Mr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}nv(function(){var u=s,c=Sf(n),h=[];e:{var d=Nv.get(t);if(d!==void 0){var m=Cf,g=t;switch(t){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":m=Vk;break;case"focusin":g="focus",m=Vc;break;case"focusout":g="blur",m=Vc;break;case"beforeblur":case"afterblur":m=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Rk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Wk;break;case Cv:case Av:case bv:m=Pk;break;case Rv:m=Kk;break;case"scroll":m=Ak;break;case"wheel":m=Qk;break;case"copy":case"cut":case"paste":m=Lk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Gm}var v=(e&4)!==0,_=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,y;f!==null;){y=f;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,p!==null&&(S=oo(f,p),S!=null&&v.push(po(f,S,y)))),_)break;f=f.return}0<v.length&&(d=new m(d,g,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Hh&&(g=n.relatedTarget||n.fromElement)&&(Mr(g)||g[$n]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?Mr(g):null,g!==null&&(_=ai(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(v=qm,S="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Gm,S="onPointerLeave",p="onPointerEnter",f="pointer"),_=m==null?d:_i(m),y=g==null?d:_i(g),d=new v(S,f+"leave",m,n,c),d.target=_,d.relatedTarget=y,S=null,Mr(c)===u&&(v=new v(p,f+"enter",g,n,c),v.target=y,v.relatedTarget=_,S=v),_=S,m&&g)t:{for(v=m,p=g,f=0,y=v;y;y=mi(y))f++;for(y=0,S=p;S;S=mi(S))y++;for(;0<f-y;)v=mi(v),f--;for(;0<y-f;)p=mi(p),y--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=mi(v),p=mi(p)}v=null}else v=null;m!==null&&sg(h,d,m,v,!1),g!==null&&_!==null&&sg(h,_,g,v,!0)}}e:{if(d=u?_i(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var k=nI;else if(Xm(d))if(_v)k=oI;else{k=iI;var N=rI}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=sI);if(k&&(k=k(t,u))){Sv(h,k,n,c);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&Uh(d,"number",d.value)}switch(N=u?_i(u):window,t){case"focusin":(Xm(N)||N.contentEditable==="true")&&(Ei=N,Xh=u,Ws=null);break;case"focusout":Ws=Xh=Ei=null;break;case"mousedown":Jh=!0;break;case"contextmenu":case"mouseup":case"dragend":Jh=!1,ng(h,n,c);break;case"selectionchange":if(uI)break;case"keydown":case"keyup":ng(h,n,c)}var D;if(bf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else wi?wv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(vv&&n.locale!=="ko"&&(wi||P!=="onCompositionStart"?P==="onCompositionEnd"&&wi&&(D=yv()):(ir=c,Tf="value"in ir?ir.value:ir.textContent,wi=!0)),N=Sl(u,P),0<N.length&&(P=new Km(P,t,null,n,c),h.push({event:P,listeners:N}),D?P.data=D:(D=Ev(n),D!==null&&(P.data=D)))),(D=Xk?Jk(t,n):Zk(t,n))&&(u=Sl(u,"onBeforeInput"),0<u.length&&(c=new Km("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=D))}Dv(h,e)})}function po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=oo(t,n),s!=null&&r.unshift(po(t,s,i)),s=oo(t,e),s!=null&&r.push(po(t,s,i))),t=t.return}return r}function mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=oo(n,s),l!=null&&o.unshift(po(n,l,a))):i||(l=oo(n,s),l!=null&&o.push(po(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fI=/\r\n?/g,pI=/\u0000|\uFFFD/g;function og(t){return(typeof t=="string"?t:""+t).replace(fI,`
`).replace(pI,"")}function ba(t,e,n){if(e=og(e),og(t)!==e&&n)throw Error(x(425))}function _l(){}var Zh=null,ed=null;function td(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nd=typeof setTimeout=="function"?setTimeout:void 0,mI=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,gI=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(t){return ag.resolve(null).then(t).catch(yI)}:nd;function yI(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);uo(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),gn="__reactFiber$"+as,mo="__reactProps$"+as,$n="__reactContainer$"+as,rd="__reactEvents$"+as,vI="__reactListeners$"+as,wI="__reactHandles$"+as;function Mr(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lg(t);t!==null;){if(n=t[gn])return n;t=lg(t)}return e}t=n,n=t.parentNode}return null}function qo(t){return t=t[gn]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function fu(t){return t[mo]||null}var id=[],ki=-1;function Cr(t){return{current:t}}function Ee(t){0>ki||(t.current=id[ki],id[ki]=null,ki--)}function ge(t,e){ki++,id[ki]=t.current,t.current=e}var _r={},pt=Cr(_r),At=Cr(!1),Gr=_r;function Hi(t,e){var n=t.type.contextTypes;if(!n)return _r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function bt(t){return t=t.childContextTypes,t!=null}function kl(){Ee(At),Ee(pt)}function ug(t,e,n){if(pt.current!==_r)throw Error(x(168));ge(pt,e),ge(At,n)}function Ov(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,rk(t)||"Unknown",i));return Te({},n,r)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Gr=pt.current,ge(pt,t),ge(At,At.current),!0}function cg(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Ov(t,e,Gr),r.__reactInternalMemoizedMergedChildContext=t,Ee(At),Ee(pt),ge(pt,t)):Ee(At),ge(At,n)}var xn=null,pu=!1,Xc=!1;function Lv(t){xn===null?xn=[t]:xn.push(t)}function EI(t){pu=!0,Lv(t)}function Ar(){if(!Xc&&xn!==null){Xc=!0;var t=0,e=de;try{var n=xn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,pu=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),ov(_f,Ar),i}finally{de=e,Xc=!1}}return null}var Ii=[],xi=0,xl=null,Tl=0,jt=[],Vt=0,Qr=null,Tn=1,Cn="";function Dr(t,e){Ii[xi++]=Tl,Ii[xi++]=xl,xl=t,Tl=e}function Mv(t,e,n){jt[Vt++]=Tn,jt[Vt++]=Cn,jt[Vt++]=Qr,Qr=t;var r=Tn;t=Cn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tn=1<<32-sn(e)+i|n<<i|r,Cn=s+t}else Tn=1<<s|n<<i|r,Cn=t}function Nf(t){t.return!==null&&(Dr(t,1),Mv(t,1,0))}function Df(t){for(;t===xl;)xl=Ii[--xi],Ii[xi]=null,Tl=Ii[--xi],Ii[xi]=null;for(;t===Qr;)Qr=jt[--Vt],jt[Vt]=null,Cn=jt[--Vt],jt[Vt]=null,Tn=jt[--Vt],jt[Vt]=null}var Pt=null,Dt=null,Se=!1,nn=null;function $v(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Dt=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:Tn,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Dt=null,!0):!1;default:return!1}}function sd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function od(t){if(Se){var e=Dt;if(e){var n=e;if(!hg(t,e)){if(sd(t))throw Error(x(418));e=cr(n.nextSibling);var r=Pt;e&&hg(t,e)?$v(r,n):(t.flags=t.flags&-4097|2,Se=!1,Pt=t)}}else{if(sd(t))throw Error(x(418));t.flags=t.flags&-4097|2,Se=!1,Pt=t}}}function dg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function Ra(t){if(t!==Pt)return!1;if(!Se)return dg(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!td(t.type,t.memoizedProps)),e&&(e=Dt)){if(sd(t))throw Fv(),Error(x(418));for(;e;)$v(t,e),e=cr(e.nextSibling)}if(dg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dt=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dt=null}}else Dt=Pt?cr(t.stateNode.nextSibling):null;return!0}function Fv(){for(var t=Dt;t;)t=cr(t.nextSibling)}function Wi(){Dt=Pt=null,Se=!1}function Pf(t){nn===null?nn=[t]:nn.push(t)}var SI=qn.ReactCurrentBatchConfig;function en(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Cl=Cr(null),Al=null,Ti=null,Of=null;function Lf(){Of=Ti=Al=null}function Mf(t){var e=Cl.current;Ee(Cl),t._currentValue=e}function ad(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $i(t,e){Al=t,Of=Ti=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Tt=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(Of!==t)if(t={context:t,memoizedValue:e,next:null},Ti===null){if(Al===null)throw Error(x(308));Ti=t,Al.dependencies={lanes:0,firstContext:t}}else Ti=Ti.next=t;return e}var $r=null;function $f(t){$r===null?$r=[t]:$r.push(t)}function Uv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$f(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function Ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(se&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fn(t,n)}return i=r.interleaved,i===null?(e.next=e,$f(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fn(t,n)}function Xa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kf(t,n)}}function fg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bl(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,m=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(m,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(m,h,d):g,d==null)break e;h=Te({},h,d);break e;case 2:Xn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=h}}function pg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var jv=new U0.Component().refs;function ld(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mu={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=fr(t),s=Dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(on(e,t,i,r),Xa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=fr(t),s=Dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(on(e,t,i,r),Xa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=fr(t),i=Dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=hr(t,i,r),e!==null&&(on(e,t,r,n),Xa(e,t,r))}};function mg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ho(n,r)||!ho(i,s):!0}function Vv(t,e,n){var r=!1,i=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(i=bt(e)?Gr:pt.current,r=e.contextTypes,s=(r=r!=null)?Hi(t,i):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&mu.enqueueReplaceState(e,e.state,null)}function ud(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=jv,Ff(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Gt(s):(s=bt(e)?Gr:pt.current,i.context=Hi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ld(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&mu.enqueueReplaceState(i,i.state,null),bl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===jv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Na(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yg(t){var e=t._init;return e(t._payload)}function Bv(t){function e(p,f){if(t){var y=p.deletions;y===null?(p.deletions=[f],p.flags|=16):y.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=pr(p,f),p.index=0,p.sibling=null,p}function s(p,f,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<f?(p.flags|=2,f):y):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,y,S){return f===null||f.tag!==6?(f=ih(y,p.mode,S),f.return=p,f):(f=i(f,y),f.return=p,f)}function l(p,f,y,S){var k=y.type;return k===vi?c(p,f,y.props.children,S,y.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Yn&&yg(k)===f.type)?(S=i(f,y.props),S.ref=Ts(p,f,y),S.return=p,S):(S=rl(y.type,y.key,y.props,null,p.mode,S),S.ref=Ts(p,f,y),S.return=p,S)}function u(p,f,y,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=sh(y,p.mode,S),f.return=p,f):(f=i(f,y.children||[]),f.return=p,f)}function c(p,f,y,S,k){return f===null||f.tag!==7?(f=Hr(y,p.mode,S,k),f.return=p,f):(f=i(f,y),f.return=p,f)}function h(p,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ih(""+f,p.mode,y),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ea:return y=rl(f.type,f.key,f.props,null,p.mode,y),y.ref=Ts(p,null,f),y.return=p,y;case yi:return f=sh(f,p.mode,y),f.return=p,f;case Yn:var S=f._init;return h(p,S(f._payload),y)}if(Ds(f)||Ss(f))return f=Hr(f,p.mode,y,null),f.return=p,f;Na(p,f)}return null}function d(p,f,y,S){var k=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:a(p,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ea:return y.key===k?l(p,f,y,S):null;case yi:return y.key===k?u(p,f,y,S):null;case Yn:return k=y._init,d(p,f,k(y._payload),S)}if(Ds(y)||Ss(y))return k!==null?null:c(p,f,y,S,null);Na(p,y)}return null}function m(p,f,y,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(y)||null,a(f,p,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ea:return p=p.get(S.key===null?y:S.key)||null,l(f,p,S,k);case yi:return p=p.get(S.key===null?y:S.key)||null,u(f,p,S,k);case Yn:var N=S._init;return m(p,f,y,N(S._payload),k)}if(Ds(S)||Ss(S))return p=p.get(y)||null,c(f,p,S,k,null);Na(f,S)}return null}function g(p,f,y,S){for(var k=null,N=null,D=f,P=f=0,Z=null;D!==null&&P<y.length;P++){D.index>P?(Z=D,D=null):Z=D.sibling;var B=d(p,D,y[P],S);if(B===null){D===null&&(D=Z);break}t&&D&&B.alternate===null&&e(p,D),f=s(B,f,P),N===null?k=B:N.sibling=B,N=B,D=Z}if(P===y.length)return n(p,D),Se&&Dr(p,P),k;if(D===null){for(;P<y.length;P++)D=h(p,y[P],S),D!==null&&(f=s(D,f,P),N===null?k=D:N.sibling=D,N=D);return Se&&Dr(p,P),k}for(D=r(p,D);P<y.length;P++)Z=m(D,p,P,y[P],S),Z!==null&&(t&&Z.alternate!==null&&D.delete(Z.key===null?P:Z.key),f=s(Z,f,P),N===null?k=Z:N.sibling=Z,N=Z);return t&&D.forEach(function(Pe){return e(p,Pe)}),Se&&Dr(p,P),k}function v(p,f,y,S){var k=Ss(y);if(typeof k!="function")throw Error(x(150));if(y=k.call(y),y==null)throw Error(x(151));for(var N=k=null,D=f,P=f=0,Z=null,B=y.next();D!==null&&!B.done;P++,B=y.next()){D.index>P?(Z=D,D=null):Z=D.sibling;var Pe=d(p,D,B.value,S);if(Pe===null){D===null&&(D=Z);break}t&&D&&Pe.alternate===null&&e(p,D),f=s(Pe,f,P),N===null?k=Pe:N.sibling=Pe,N=Pe,D=Z}if(B.done)return n(p,D),Se&&Dr(p,P),k;if(D===null){for(;!B.done;P++,B=y.next())B=h(p,B.value,S),B!==null&&(f=s(B,f,P),N===null?k=B:N.sibling=B,N=B);return Se&&Dr(p,P),k}for(D=r(p,D);!B.done;P++,B=y.next())B=m(D,p,P,B.value,S),B!==null&&(t&&B.alternate!==null&&D.delete(B.key===null?P:B.key),f=s(B,f,P),N===null?k=B:N.sibling=B,N=B);return t&&D.forEach(function(Re){return e(p,Re)}),Se&&Dr(p,P),k}function _(p,f,y,S){if(typeof y=="object"&&y!==null&&y.type===vi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ea:e:{for(var k=y.key,N=f;N!==null;){if(N.key===k){if(k=y.type,k===vi){if(N.tag===7){n(p,N.sibling),f=i(N,y.props.children),f.return=p,p=f;break e}}else if(N.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Yn&&yg(k)===N.type){n(p,N.sibling),f=i(N,y.props),f.ref=Ts(p,N,y),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}y.type===vi?(f=Hr(y.props.children,p.mode,S,y.key),f.return=p,p=f):(S=rl(y.type,y.key,y.props,null,p.mode,S),S.ref=Ts(p,f,y),S.return=p,p=S)}return o(p);case yi:e:{for(N=y.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(p,f.sibling),f=i(f,y.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=sh(y,p.mode,S),f.return=p,p=f}return o(p);case Yn:return N=y._init,_(p,f,N(y._payload),S)}if(Ds(y))return g(p,f,y,S);if(Ss(y))return v(p,f,y,S);Na(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,y),f.return=p,p=f):(n(p,f),f=ih(y,p.mode,S),f.return=p,p=f),o(p)):n(p,f)}return _}var qi=Bv(!0),Hv=Bv(!1),Ko={},wn=Cr(Ko),go=Cr(Ko),yo=Cr(Ko);function Fr(t){if(t===Ko)throw Error(x(174));return t}function Uf(t,e){switch(ge(yo,e),ge(go,t),ge(wn,Ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jh(e,t)}Ee(wn),ge(wn,e)}function Ki(){Ee(wn),Ee(go),Ee(yo)}function Wv(t){Fr(yo.current);var e=Fr(wn.current),n=jh(e,t.type);e!==n&&(ge(go,t),ge(wn,n))}function zf(t){go.current===t&&(Ee(wn),Ee(go))}var Ie=Cr(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function jf(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var Ja=qn.ReactCurrentDispatcher,Zc=qn.ReactCurrentBatchConfig,Yr=0,xe=null,Fe=null,We=null,Nl=!1,qs=!1,vo=0,_I=0;function at(){throw Error(x(321))}function Vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function Bf(t,e,n,r,i,s){if(Yr=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ja.current=t===null||t.memoizedState===null?TI:CI,t=n(r,i),qs){s=0;do{if(qs=!1,vo=0,25<=s)throw Error(x(301));s+=1,We=Fe=null,e.updateQueue=null,Ja.current=AI,t=n(r,i)}while(qs)}if(Ja.current=Dl,e=Fe!==null&&Fe.next!==null,Yr=0,We=Fe=xe=null,Nl=!1,e)throw Error(x(300));return t}function Hf(){var t=vo!==0;return vo=0,t}function mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?xe.memoizedState=We=t:We=We.next=t,We}function Qt(){if(Fe===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=We===null?xe.memoizedState:We.next;if(e!==null)We=e,Fe=t;else{if(t===null)throw Error(x(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?xe.memoizedState=We=t:We=We.next=t}return We}function wo(t,e){return typeof e=="function"?e(t):e}function eh(t){var e=Qt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,xe.lanes|=c,Xr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ln(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,Xr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function th(t){var e=Qt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qv(){}function Kv(t,e){var n=xe,r=Qt(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,Wf(Yv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Eo(9,Qv.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(x(349));(Yr&30)!==0||Gv(n,e,i)}return i}function Gv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qv(t,e,n,r){e.value=n,e.getSnapshot=r,Xv(e)&&Jv(t)}function Yv(t,e,n){return n(function(){Xv(e)&&Jv(t)})}function Xv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function Jv(t){var e=Fn(t,1);e!==null&&on(e,t,1,-1)}function vg(t){var e=mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},e.queue=t,t=t.dispatch=xI.bind(null,xe,t),[e.memoizedState,t]}function Eo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Zv(){return Qt().memoizedState}function Za(t,e,n,r){var i=mn();xe.flags|=t,i.memoizedState=Eo(1|e,n,void 0,r===void 0?null:r)}function gu(t,e,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Vf(r,o.deps)){i.memoizedState=Eo(e,n,s,r);return}}xe.flags|=t,i.memoizedState=Eo(1|e,n,s,r)}function wg(t,e){return Za(8390656,8,t,e)}function Wf(t,e){return gu(2048,8,t,e)}function e1(t,e){return gu(4,2,t,e)}function t1(t,e){return gu(4,4,t,e)}function n1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r1(t,e,n){return n=n!=null?n.concat([t]):null,gu(4,4,n1.bind(null,e,t),n)}function qf(){}function i1(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function s1(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function o1(t,e,n){return(Yr&21)===0?(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n):(ln(n,e)||(n=uv(),xe.lanes|=n,Xr|=n,t.baseState=!0),e)}function kI(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Zc.transition;Zc.transition={};try{t(!1),e()}finally{de=n,Zc.transition=r}}function a1(){return Qt().memoizedState}function II(t,e,n){var r=fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},l1(t))u1(e,n);else if(n=Uv(t,e,n,r),n!==null){var i=Et();on(n,t,r,i),c1(n,e,r)}}function xI(t,e,n){var r=fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(l1(t))u1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ln(a,o)){var l=e.interleaved;l===null?(i.next=i,$f(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Uv(t,e,i,r),n!==null&&(i=Et(),on(n,t,r,i),c1(n,e,r))}}function l1(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function u1(t,e){qs=Nl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function c1(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kf(t,n)}}var Dl={readContext:Gt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},TI={readContext:Gt,useCallback:function(t,e){return mn().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:wg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Za(4194308,4,n1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Za(4194308,4,t,e)},useInsertionEffect:function(t,e){return Za(4,2,t,e)},useMemo:function(t,e){var n=mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=II.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=mn();return t={current:t},e.memoizedState=t},useState:vg,useDebugValue:qf,useDeferredValue:function(t){return mn().memoizedState=t},useTransition:function(){var t=vg(!1),e=t[0];return t=kI.bind(null,t[1]),mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=mn();if(Se){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),qe===null)throw Error(x(349));(Yr&30)!==0||Gv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wg(Yv.bind(null,r,s,t),[t]),r.flags|=2048,Eo(9,Qv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=mn(),e=qe.identifierPrefix;if(Se){var n=Cn,r=Tn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_I++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},CI={readContext:Gt,useCallback:i1,useContext:Gt,useEffect:Wf,useImperativeHandle:r1,useInsertionEffect:e1,useLayoutEffect:t1,useMemo:s1,useReducer:eh,useRef:Zv,useState:function(){return eh(wo)},useDebugValue:qf,useDeferredValue:function(t){var e=Qt();return o1(e,Fe.memoizedState,t)},useTransition:function(){var t=eh(wo)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:qv,useSyncExternalStore:Kv,useId:a1,unstable_isNewReconciler:!1},AI={readContext:Gt,useCallback:i1,useContext:Gt,useEffect:Wf,useImperativeHandle:r1,useInsertionEffect:e1,useLayoutEffect:t1,useMemo:s1,useReducer:th,useRef:Zv,useState:function(){return th(wo)},useDebugValue:qf,useDeferredValue:function(t){var e=Qt();return Fe===null?e.memoizedState=t:o1(e,Fe.memoizedState,t)},useTransition:function(){var t=th(wo)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:qv,useSyncExternalStore:Kv,useId:a1,unstable_isNewReconciler:!1};function Gi(t,e){try{var n="",r=e;do n+=nk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function nh(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bI=typeof WeakMap=="function"?WeakMap:Map;function h1(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ol||(Ol=!0,Ed=r),cd(t,e)},n}function d1(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){cd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cd(t,e),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Eg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=BI.bind(null,t,e,n),e.then(t,t))}function Sg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _g(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var RI=qn.ReactCurrentOwner,Tt=!1;function vt(t,e,n,r){e.child=t===null?Hv(e,null,n,r):qi(e,t.child,n,r)}function kg(t,e,n,r,i){n=n.render;var s=e.ref;return $i(e,i),r=Bf(t,e,n,r,s,i),n=Hf(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(Se&&n&&Nf(e),e.flags|=1,vt(t,e,r,i),e.child)}function Ig(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ep(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,f1(t,e,s,r,i)):(t=rl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ho,n(o,r)&&t.ref===e.ref)return Un(t,e,i)}return e.flags|=1,t=pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function f1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ho(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Tt=!0);else return e.lanes=t.lanes,Un(t,e,i)}return hd(t,e,n,r,i)}function p1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ai,Nt),Nt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Ai,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Ai,Nt),Nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Ai,Nt),Nt|=r;return vt(t,e,i,n),e.child}function m1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hd(t,e,n,r,i){var s=bt(n)?Gr:pt.current;return s=Hi(e,s),$i(e,i),n=Bf(t,e,n,r,s,i),r=Hf(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(Se&&r&&Nf(e),e.flags|=1,vt(t,e,n,i),e.child)}function xg(t,e,n,r,i){if(bt(n)){var s=!0;Il(e)}else s=!1;if($i(e,i),e.stateNode===null)el(t,e),Vv(e,n,r),ud(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gt(u):(u=bt(n)?Gr:pt.current,u=Hi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&gg(e,o,r,u),Xn=!1;var d=e.memoizedState;o.state=d,bl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||At.current||Xn?(typeof c=="function"&&(ld(e,n,c,r),l=e.memoizedState),(a=Xn||mg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,zv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:en(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gt(l):(l=bt(n)?Gr:pt.current,l=Hi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&gg(e,o,r,l),Xn=!1,d=e.memoizedState,o.state=d,bl(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||At.current||Xn?(typeof m=="function"&&(ld(e,n,m,r),g=e.memoizedState),(u=Xn||mg(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return dd(t,e,n,r,s,i)}function dd(t,e,n,r,i,s){m1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&cg(e,n,!1),Un(t,e,s);r=e.stateNode,RI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qi(e,t.child,null,s),e.child=qi(e,null,a,s)):vt(t,e,a,s),e.memoizedState=r.state,i&&cg(e,n,!0),e.child}function g1(t){var e=t.stateNode;e.pendingContext?ug(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ug(t,e.context,!1),Uf(t,e.containerInfo)}function Tg(t,e,n,r,i){return Wi(),Pf(i),e.flags|=256,vt(t,e,n,r),e.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function pd(t){return{baseLanes:t,cachePool:null,transitions:null}}function y1(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Ie,i&1),t===null)return od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wu(o,r,0,null),t=Hr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pd(n),e.memoizedState=fd,t):Kf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return NI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=pr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=pr(a,s):(s=Hr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?pd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=fd,r}return s=t.child,t=s.sibling,r=pr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Kf(t,e){return e=wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Da(t,e,n,r){return r!==null&&Pf(r),qi(e,t.child,null,n),t=Kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=nh(Error(x(422))),Da(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wu({mode:"visible",children:r.children},i,0,null),s=Hr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&qi(e,t.child,null,o),e.child.memoizedState=pd(o),e.memoizedState=fd,s);if((e.mode&1)===0)return Da(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=nh(s,r,void 0),Da(t,e,o,r)}if(a=(o&t.childLanes)!==0,Tt||a){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fn(t,i),on(r,t,i,-1))}return Zf(),r=nh(Error(x(421))),Da(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=HI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Dt=cr(i.nextSibling),Pt=e,Se=!0,nn=null,t!==null&&(jt[Vt++]=Tn,jt[Vt++]=Cn,jt[Vt++]=Qr,Tn=t.id,Cn=t.overflow,Qr=e),e=Kf(e,r.children),e.flags|=4096,e)}function Cg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ad(t.return,e,n)}function rh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function v1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=Ie.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cg(t,n,e);else if(t.tag===19)Cg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ie,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),rh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}rh(e,!0,n,null,s);break;case"together":rh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DI(t,e,n){switch(e.tag){case 3:g1(e),Wi();break;case 5:Wv(e);break;case 1:bt(e.type)&&Il(e);break;case 4:Uf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Cl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ie,Ie.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?y1(t,e,n):(ge(Ie,Ie.current&1),t=Un(t,e,n),t!==null?t.sibling:null);ge(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return v1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,p1(t,e,n)}return Un(t,e,n)}var w1,md,E1,S1;w1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};md=function(){};E1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fr(wn.current);var s=null;switch(n){case"input":i=$h(t,i),r=$h(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=zh(t,i),r=zh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_l)}Vh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(io.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(io.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&we("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};S1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Cs(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function PI(t,e,n){var r=e.pendingProps;switch(Df(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return bt(e.type)&&kl(),lt(e),null;case 3:return r=e.stateNode,Ki(),Ee(At),Ee(pt),jf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,nn!==null&&(kd(nn),nn=null))),md(t,e),lt(e),null;case 5:zf(e);var i=Fr(yo.current);if(n=e.type,t!==null&&e.stateNode!=null)E1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return lt(e),null}if(t=Fr(wn.current),Ra(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gn]=e,r[mo]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Os.length;i++)we(Os[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Mm(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Fm(r,s),we("invalid",r)}Vh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,a,t),i=["children",""+a]):io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Sa(r),$m(r,s,!0);break;case"textarea":Sa(r),Um(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=G0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gn]=e,t[mo]=r,w1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bh(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<Os.length;i++)we(Os[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Mm(t,r),i=$h(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),we("invalid",t);break;case"textarea":Fm(t,r),i=zh(t,r),we("invalid",t);break;default:i=r}Vh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?X0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Q0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&so(t,l):typeof l=="number"&&so(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&we("scroll",t):l!=null&&yf(t,s,l,o))}switch(n){case"input":Sa(t),$m(t,r,!1);break;case"textarea":Sa(t),Um(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)S1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Fr(yo.current),Fr(wn.current),Ra(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return lt(e),null;case 13:if(Ee(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Dt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Fv(),Wi(),e.flags|=98560,s=!1;else if(s=Ra(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[gn]=e}else Wi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;lt(e),s=!1}else nn!==null&&(kd(nn),nn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Ie.current&1)!==0?Ue===0&&(Ue=3):Zf())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return Ki(),md(t,e),t===null&&fo(e.stateNode.containerInfo),lt(e),null;case 10:return Mf(e.type._context),lt(e),null;case 17:return bt(e.type)&&kl(),lt(e),null;case 19:if(Ee(Ie),s=e.memoizedState,s===null)return lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Cs(s,!1);else{if(Ue!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Rl(t),o!==null){for(e.flags|=128,Cs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Qi&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Rl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Cs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return lt(e),null}else 2*De()-s.renderingStartTime>Qi&&n!==1073741824&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Ie.current,ge(Ie,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return Jf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Nt&1073741824)!==0&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function OI(t,e){switch(Df(e),e.tag){case 1:return bt(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ki(),Ee(At),Ee(pt),jf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return zf(e),null;case 13:if(Ee(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Ie),null;case 4:return Ki(),null;case 10:return Mf(e.type._context),null;case 22:case 23:return Jf(),null;case 24:return null;default:return null}}var Pa=!1,ct=!1,LI=typeof WeakSet=="function"?WeakSet:Set,M=null;function Ci(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function gd(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Ag=!1;function MI(t,e){if(Zh=wl,t=xv(),Rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ed={focusedElem:t,selectionRange:n},wl=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,_=g.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:en(e.type,v),_);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(S){Ae(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return g=Ag,Ag=!1,g}function Ks(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&gd(e,n,s)}i=i.next}while(i!==r)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _1(t){var e=t.alternate;e!==null&&(t.alternate=null,_1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[mo],delete e[rd],delete e[vI],delete e[wI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k1(t){return t.tag===5||t.tag===3||t.tag===4}function bg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(r!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}function wd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}var Ze=null,tn=!1;function Gn(t,e,n){for(n=n.child;n!==null;)I1(t,e,n),n=n.sibling}function I1(t,e,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(uu,n)}catch{}switch(n.tag){case 5:ct||Ci(n,e);case 6:var r=Ze,i=tn;Ze=null,Gn(t,e,n),Ze=r,tn=i,Ze!==null&&(tn?(t=Ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(tn?(t=Ze,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),uo(t)):Yc(Ze,n.stateNode));break;case 4:r=Ze,i=tn,Ze=n.stateNode.containerInfo,tn=!0,Gn(t,e,n),Ze=r,tn=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&gd(n,e,o),i=i.next}while(i!==r)}Gn(t,e,n);break;case 1:if(!ct&&(Ci(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ae(n,e,a)}Gn(t,e,n);break;case 21:Gn(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,Gn(t,e,n),ct=r):Gn(t,e,n);break;default:Gn(t,e,n)}}function Rg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LI),e.forEach(function(r){var i=WI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ze=a.stateNode,tn=!1;break e;case 3:Ze=a.stateNode.containerInfo,tn=!0;break e;case 4:Ze=a.stateNode.containerInfo,tn=!0;break e}a=a.return}if(Ze===null)throw Error(x(160));I1(s,o,i),Ze=null,tn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)x1(e,t),e=e.sibling}function x1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zt(e,t),pn(t),r&4){try{Ks(3,t,t.return),yu(3,t)}catch(v){Ae(t,t.return,v)}try{Ks(5,t,t.return)}catch(v){Ae(t,t.return,v)}}break;case 1:Zt(e,t),pn(t),r&512&&n!==null&&Ci(n,n.return);break;case 5:if(Zt(e,t),pn(t),r&512&&n!==null&&Ci(n,n.return),t.flags&32){var i=t.stateNode;try{so(i,"")}catch(v){Ae(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&q0(i,s),Bh(a,o);var u=Bh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?X0(i,h):c==="dangerouslySetInnerHTML"?Q0(i,h):c==="children"?so(i,h):yf(i,c,h,u)}switch(a){case"input":Fh(i,s);break;case"textarea":K0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Pi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Pi(i,!!s.multiple,s.defaultValue,!0):Pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[mo]=s}catch(v){Ae(t,t.return,v)}}break;case 6:if(Zt(e,t),pn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ae(t,t.return,v)}}break;case 3:if(Zt(e,t),pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{uo(e.containerInfo)}catch(v){Ae(t,t.return,v)}break;case 4:Zt(e,t),pn(t);break;case 13:Zt(e,t),pn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Yf=De())),r&4&&Rg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(u=ct)||c,Zt(e,t),ct=u):Zt(e,t),pn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(M=t,c=t.child;c!==null;){for(h=M=c;M!==null;){switch(d=M,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ks(4,d,d.return);break;case 1:Ci(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Ae(r,n,v)}}break;case 5:Ci(d,d.return);break;case 22:if(d.memoizedState!==null){Dg(h);continue}}m!==null?(m.return=d,M=m):Dg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Y0("display",o))}catch(v){Ae(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Ae(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Zt(e,t),pn(t),r&4&&Rg(t);break;case 21:break;default:Zt(e,t),pn(t)}}function pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(k1(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(so(i,""),r.flags&=-33);var s=bg(t);wd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=bg(t);vd(t,a,o);break;default:throw Error(x(161))}}catch(l){Ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $I(t,e,n){M=t,T1(t)}function T1(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ct;a=Pa;var u=ct;if(Pa=o,(ct=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Pg(i):l!==null?(l.return=o,M=l):Pg(i);for(;s!==null;)M=s,T1(s),s=s.sibling;M=i,Pa=a,ct=u}Ng(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,M=s):Ng(t)}}function Ng(t){for(;M!==null;){var e=M;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:ct||yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:en(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&uo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ct||e.flags&512&&yd(e)}catch(d){Ae(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Dg(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function Pg(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(l){Ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ae(e,i,l)}}var s=e.return;try{yd(e)}catch(l){Ae(e,s,l)}break;case 5:var o=e.return;try{yd(e)}catch(l){Ae(e,o,l)}}}catch(l){Ae(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var FI=Math.ceil,Pl=qn.ReactCurrentDispatcher,Gf=qn.ReactCurrentOwner,Ht=qn.ReactCurrentBatchConfig,se=0,qe=null,Me=null,nt=0,Nt=0,Ai=Cr(0),Ue=0,So=null,Xr=0,vu=0,Qf=0,Gs=null,It=null,Yf=0,Qi=1/0,In=null,Ol=!1,Ed=null,dr=null,Oa=!1,sr=null,Ll=0,Qs=0,Sd=null,tl=-1,nl=0;function Et(){return(se&6)!==0?De():tl!==-1?tl:tl=De()}function fr(t){return(t.mode&1)===0?1:(se&2)!==0&&nt!==0?nt&-nt:SI.transition!==null?(nl===0&&(nl=uv()),nl):(t=de,t!==0||(t=window.event,t=t===void 0?16:gv(t.type)),t)}function on(t,e,n,r){if(50<Qs)throw Qs=0,Sd=null,Error(x(185));Ho(t,n,r),((se&2)===0||t!==qe)&&(t===qe&&((se&2)===0&&(vu|=n),Ue===4&&Zn(t,nt)),Rt(t,r),n===1&&se===0&&(e.mode&1)===0&&(Qi=De()+500,pu&&Ar()))}function Rt(t,e){var n=t.callbackNode;Sk(t,e);var r=vl(t,t===qe?nt:0);if(r===0)n!==null&&Vm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vm(n),e===1)t.tag===0?EI(Og.bind(null,t)):Lv(Og.bind(null,t)),gI(function(){(se&6)===0&&Ar()}),n=null;else{switch(cv(r)){case 1:n=_f;break;case 4:n=av;break;case 16:n=yl;break;case 536870912:n=lv;break;default:n=yl}n=O1(n,C1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C1(t,e){if(tl=-1,nl=0,(se&6)!==0)throw Error(x(327));var n=t.callbackNode;if(Fi()&&t.callbackNode!==n)return null;var r=vl(t,t===qe?nt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Ml(t,r);else{e=r;var i=se;se|=2;var s=b1();(qe!==t||nt!==e)&&(In=null,Qi=De()+500,Br(t,e));do try{jI();break}catch(a){A1(t,a)}while(1);Lf(),Pl.current=s,se=i,Me!==null?e=0:(qe=null,nt=0,e=Ue)}if(e!==0){if(e===2&&(i=Gh(t),i!==0&&(r=i,e=_d(t,i))),e===1)throw n=So,Br(t,0),Zn(t,r),Rt(t,De()),n;if(e===6)Zn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!UI(i)&&(e=Ml(t,r),e===2&&(s=Gh(t),s!==0&&(r=s,e=_d(t,s))),e===1))throw n=So,Br(t,0),Zn(t,r),Rt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Pr(t,It,In);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=Yf+500-De(),10<e)){if(vl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=nd(Pr.bind(null,t,It,In),e);break}Pr(t,It,In);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FI(r/1960))-r,10<r){t.timeoutHandle=nd(Pr.bind(null,t,It,In),r);break}Pr(t,It,In);break;case 5:Pr(t,It,In);break;default:throw Error(x(329))}}}return Rt(t,De()),t.callbackNode===n?C1.bind(null,t):null}function _d(t,e){var n=Gs;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=It,It=n,e!==null&&kd(e)),t}function kd(t){It===null?It=t:It.push.apply(It,t)}function UI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~Qf,e&=~vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function Og(t){if((se&6)!==0)throw Error(x(327));Fi();var e=vl(t,0);if((e&1)===0)return Rt(t,De()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var r=Gh(t);r!==0&&(e=r,n=_d(t,r))}if(n===1)throw n=So,Br(t,0),Zn(t,e),Rt(t,De()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,It,In),Rt(t,De()),null}function Xf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Qi=De()+500,pu&&Ar())}}function Jr(t){sr!==null&&sr.tag===0&&(se&6)===0&&Fi();var e=se;se|=1;var n=Ht.transition,r=de;try{if(Ht.transition=null,de=1,t)return t()}finally{de=r,Ht.transition=n,se=e,(se&6)===0&&Ar()}}function Jf(){Nt=Ai.current,Ee(Ai)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mI(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Df(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kl();break;case 3:Ki(),Ee(At),Ee(pt),jf();break;case 5:zf(r);break;case 4:Ki();break;case 13:Ee(Ie);break;case 19:Ee(Ie);break;case 10:Mf(r.type._context);break;case 22:case 23:Jf()}n=n.return}if(qe=t,Me=t=pr(t.current,null),nt=Nt=e,Ue=0,So=null,Qf=vu=Xr=0,It=Gs=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$r=null}return t}function A1(t,e){do{var n=Me;try{if(Lf(),Ja.current=Dl,Nl){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nl=!1}if(Yr=0,We=Fe=xe=null,qs=!1,vo=0,Gf.current=null,n===null||n.return===null){Ue=1,So=e,Me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Sg(o);if(m!==null){m.flags&=-257,_g(m,o,a,s,e),m.mode&1&&Eg(s,u,e),e=m,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if((e&1)===0){Eg(s,u,e),Zf();break e}l=Error(x(426))}}else if(Se&&a.mode&1){var _=Sg(o);if(_!==null){(_.flags&65536)===0&&(_.flags|=256),_g(_,o,a,s,e),Pf(Gi(l,a));break e}}s=l=Gi(l,a),Ue!==4&&(Ue=2),Gs===null?Gs=[s]:Gs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=h1(s,l,e);fg(s,p);break e;case 1:a=l;var f=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(dr===null||!dr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=d1(s,a,e);fg(s,S);break e}}s=s.return}while(s!==null)}N1(n)}catch(k){e=k,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(1)}function b1(){var t=Pl.current;return Pl.current=Dl,t===null?Dl:t}function Zf(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),qe===null||(Xr&268435455)===0&&(vu&268435455)===0||Zn(qe,nt)}function Ml(t,e){var n=se;se|=2;var r=b1();(qe!==t||nt!==e)&&(In=null,Br(t,e));do try{zI();break}catch(i){A1(t,i)}while(1);if(Lf(),se=n,Pl.current=r,Me!==null)throw Error(x(261));return qe=null,nt=0,Ue}function zI(){for(;Me!==null;)R1(Me)}function jI(){for(;Me!==null&&!dk();)R1(Me)}function R1(t){var e=P1(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?N1(t):Me=e,Gf.current=null}function N1(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=PI(n,e,Nt),n!==null){Me=n;return}}else{if(n=OI(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Me=null;return}}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Ue===0&&(Ue=5)}function Pr(t,e,n){var r=de,i=Ht.transition;try{Ht.transition=null,de=1,VI(t,e,n,r)}finally{Ht.transition=i,de=r}return null}function VI(t,e,n,r){do Fi();while(sr!==null);if((se&6)!==0)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_k(t,s),t===qe&&(Me=qe=null,nt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Oa||(Oa=!0,O1(yl,function(){return Fi(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Ht.transition,Ht.transition=null;var o=de;de=1;var a=se;se|=4,Gf.current=null,MI(t,n),x1(n,t),lI(ed),wl=!!Zh,ed=Zh=null,t.current=n,$I(n),fk(),se=a,de=o,Ht.transition=s}else t.current=n;if(Oa&&(Oa=!1,sr=t,Ll=i),s=t.pendingLanes,s===0&&(dr=null),gk(n.stateNode),Rt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ol)throw Ol=!1,t=Ed,Ed=null,t;return(Ll&1)!==0&&t.tag!==0&&Fi(),s=t.pendingLanes,(s&1)!==0?t===Sd?Qs++:(Qs=0,Sd=t):Qs=0,Ar(),null}function Fi(){if(sr!==null){var t=cv(Ll),e=Ht.transition,n=de;try{if(Ht.transition=null,de=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,Ll=0,(se&6)!==0)throw Error(x(331));var i=se;for(se|=4,M=t.current;M!==null;){var s=M,o=s.child;if((M.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Ks(8,c,s)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var d=c.sibling,m=c.return;if(_1(c),c===u){M=null;break}if(d!==null){d.return=m,M=d;break}M=m}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}M=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ks(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,M=p;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,M=y;else e:for(o=f;M!==null;){if(a=M,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:yu(9,a)}}catch(k){Ae(a,a.return,k)}if(a===o){M=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,M=S;break e}M=a.return}}if(se=i,Ar(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(uu,t)}catch{}r=!0}return r}finally{de=n,Ht.transition=e}}return!1}function Lg(t,e,n){e=Gi(n,e),e=h1(t,e,1),t=hr(t,e,1),e=Et(),t!==null&&(Ho(t,1,e),Rt(t,e))}function Ae(t,e,n){if(t.tag===3)Lg(t,t,n);else for(;e!==null;){if(e.tag===3){Lg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){t=Gi(n,t),t=d1(e,t,1),e=hr(e,t,1),t=Et(),e!==null&&(Ho(e,1,t),Rt(e,t));break}}e=e.return}}function BI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(nt&n)===n&&(Ue===4||Ue===3&&(nt&130023424)===nt&&500>De()-Yf?Br(t,0):Qf|=n),Rt(t,e)}function D1(t,e){e===0&&((t.mode&1)===0?e=1:(e=Ia,Ia<<=1,(Ia&130023424)===0&&(Ia=4194304)));var n=Et();t=Fn(t,e),t!==null&&(Ho(t,e,n),Rt(t,n))}function HI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D1(t,n)}function WI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),D1(t,n)}var P1;P1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||At.current)Tt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Tt=!1,DI(t,e,n);Tt=(t.flags&131072)!==0}else Tt=!1,Se&&(e.flags&1048576)!==0&&Mv(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;el(t,e),t=e.pendingProps;var i=Hi(e,pt.current);$i(e,n),i=Bf(null,e,r,t,i,n);var s=Hf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(s=!0,Il(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ff(e),i.updater=mu,e.stateNode=i,i._reactInternals=e,ud(e,r,t,n),e=dd(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Nf(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(el(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=KI(r),t=en(r,t),i){case 0:e=hd(null,e,r,t,n);break e;case 1:e=xg(null,e,r,t,n);break e;case 11:e=kg(null,e,r,t,n);break e;case 14:e=Ig(null,e,r,en(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),hd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),xg(t,e,r,i,n);case 3:e:{if(g1(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,zv(t,e),bl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Gi(Error(x(423)),e),e=Tg(t,e,r,n,i);break e}else if(r!==i){i=Gi(Error(x(424)),e),e=Tg(t,e,r,n,i);break e}else for(Dt=cr(e.stateNode.containerInfo.firstChild),Pt=e,Se=!0,nn=null,n=Hv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wi(),r===i){e=Un(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return Wv(e),t===null&&od(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,td(r,i)?o=null:s!==null&&td(r,s)&&(e.flags|=32),m1(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&od(e),null;case 13:return y1(t,e,n);case 4:return Uf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qi(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),kg(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Cl,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!At.current){e=Un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Dn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ad(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ad(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$i(e,n),i=Gt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=en(r,e.pendingProps),i=en(r.type,i),Ig(t,e,r,i,n);case 15:return f1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),el(t,e),e.tag=1,bt(r)?(t=!0,Il(e)):t=!1,$i(e,n),Vv(e,r,i),ud(e,r,i,n),dd(null,e,r,!0,t,n);case 19:return v1(t,e,n);case 22:return p1(t,e,n)}throw Error(x(156,e.tag))};function O1(t,e){return ov(t,e)}function qI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new qI(t,e,n,r)}function ep(t){return t=t.prototype,!(!t||!t.isReactComponent)}function KI(t){if(typeof t=="function")return ep(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wf)return 11;if(t===Ef)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ep(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vi:return Hr(n.children,i,s,e);case vf:o=8,i|=8;break;case Ph:return t=Bt(12,n,e,i|2),t.elementType=Ph,t.lanes=s,t;case Oh:return t=Bt(13,n,e,i),t.elementType=Oh,t.lanes=s,t;case Lh:return t=Bt(19,n,e,i),t.elementType=Lh,t.lanes=s,t;case B0:return wu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case j0:o=10;break e;case V0:o=9;break e;case wf:o=11;break e;case Ef:o=14;break e;case Yn:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hr(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function wu(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=B0,t.lanes=n,t.stateNode={isHidden:!1},t}function ih(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function sh(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tp(t,e,n,r,i,s,o,a,l){return t=new GI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ff(s),t}function QI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function L1(t){if(!t)return _r;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(bt(n))return Ov(t,n,e)}return e}function M1(t,e,n,r,i,s,o,a,l){return t=tp(n,r,!0,t,i,s,o,a,l),t.context=L1(null),n=t.current,r=Et(),i=fr(n),s=Dn(r,i),s.callback=e!=null?e:null,hr(n,s,i),t.current.lanes=i,Ho(t,i,r),Rt(t,r),t}function Eu(t,e,n,r){var i=e.current,s=Et(),o=fr(i);return n=L1(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hr(i,e,o),t!==null&&(on(t,i,o,s),Xa(t,i,o)),o}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function np(t,e){Mg(t,e),(t=t.alternate)&&Mg(t,e)}function YI(){return null}var $1=typeof reportError=="function"?reportError:function(t){console.error(t)};function rp(t){this._internalRoot=t}Su.prototype.render=rp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Eu(t,e,null,null)};Su.prototype.unmount=rp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){Eu(null,t,null,null)}),e[$n]=null}};function Su(t){this._internalRoot=t}Su.prototype.unstable_scheduleHydration=function(t){if(t){var e=fv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&mv(t)}};function ip(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $g(){}function XI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=$l(o);s.call(u)}}var o=M1(e,r,t,0,null,!1,!1,"",$g);return t._reactRootContainer=o,t[$n]=o.current,fo(t.nodeType===8?t.parentNode:t),Jr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=$l(l);a.call(u)}}var l=tp(t,0,!1,null,null,!1,!1,"",$g);return t._reactRootContainer=l,t[$n]=l.current,fo(t.nodeType===8?t.parentNode:t),Jr(function(){Eu(e,l,n,r)}),l}function ku(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=$l(o);a.call(l)}}Eu(e,o,t,i)}else o=XI(n,e,t,i,r);return $l(o)}hv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ps(e.pendingLanes);n!==0&&(kf(e,n|1),Rt(e,De()),(se&6)===0&&(Qi=De()+500,Ar()))}break;case 13:Jr(function(){var r=Fn(t,1);if(r!==null){var i=Et();on(r,t,1,i)}}),np(t,1)}};If=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=Et();on(e,t,134217728,n)}np(t,134217728)}};dv=function(t){if(t.tag===13){var e=fr(t),n=Fn(t,e);if(n!==null){var r=Et();on(n,t,e,r)}np(t,e)}};fv=function(){return de};pv=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Wh=function(t,e,n){switch(e){case"input":if(Fh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fu(r);if(!i)throw Error(x(90));W0(r),Fh(r,i)}}}break;case"textarea":K0(t,n);break;case"select":e=n.value,e!=null&&Pi(t,!!n.multiple,e,!1)}};ev=Xf;tv=Jr;var JI={usingClientEntryPoint:!1,Events:[qo,_i,fu,J0,Z0,Xf]},As={findFiberByHostInstance:Mr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ZI={bundleType:As.bundleType,version:As.version,rendererPackageName:As.rendererPackageName,rendererConfig:As.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iv(t),t===null?null:t.stateNode},findFiberByHostInstance:As.findFiberByHostInstance||YI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{uu=La.inject(ZI),vn=La}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JI;Ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ip(e))throw Error(x(200));return QI(t,e,null,n)};Ft.createRoot=function(t,e){if(!ip(t))throw Error(x(299));var n=!1,r="",i=$1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=tp(t,1,!1,null,null,n,!1,r,i),t[$n]=e.current,fo(t.nodeType===8?t.parentNode:t),new rp(e)};Ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=iv(e),t=t===null?null:t.stateNode,t};Ft.flushSync=function(t){return Jr(t)};Ft.hydrate=function(t,e,n){if(!_u(e))throw Error(x(200));return ku(null,t,e,!0,n)};Ft.hydrateRoot=function(t,e,n){if(!ip(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=M1(e,null,t,1,n!=null?n:null,i,!1,s,o),t[$n]=e.current,fo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Su(e)};Ft.render=function(t,e,n){if(!_u(e))throw Error(x(200));return ku(null,t,e,!1,n)};Ft.unmountComponentAtNode=function(t){if(!_u(t))throw Error(x(40));return t._reactRootContainer?(Jr(function(){ku(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};Ft.unstable_batchedUpdates=Xf;Ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_u(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return ku(t,e,n,!1,r)};Ft.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Ft})(M0);var Fg=M0.exports;Nh.createRoot=Fg.createRoot,Nh.hydrateRoot=Fg.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_o.apply(this,arguments)}var or;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(or||(or={}));const Ug="popstate";function ex(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=li(i.location.hash.substr(1));return Id("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:ko(s))}function r(i,s){tx(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return ix(e,n,r,t)}function tx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nx(){return Math.random().toString(36).substr(2,8)}function zg(t){return{usr:t.state,key:t.key}}function Id(t,e,n,r){return n===void 0&&(n=null),_o({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?li(e):e,{state:n,key:e&&e.key||r||nx()})}function ko(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function li(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function rx(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:ko(t);return new URL(n,e)}function ix(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=or.Pop,l=null;function u(){a=or.Pop,l&&l({action:a,location:d.location})}function c(m,g){a=or.Push;let v=Id(d.location,m,g);n&&n(v,m);let _=zg(v),p=d.createHref(v);try{o.pushState(_,"",p)}catch{i.location.assign(p)}s&&l&&l({action:a,location:d.location})}function h(m,g){a=or.Replace;let v=Id(d.location,m,g);n&&n(v,m);let _=zg(v),p=d.createHref(v);o.replaceState(_,"",p),s&&l&&l({action:a,location:d.location})}let d={get action(){return a},get location(){return t(i,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ug,u),l=m,()=>{i.removeEventListener(Ug,u),l=null}},createHref(m){return e(i,m)},encodeLocation(m){let g=rx(ko(m));return _o({},m,{pathname:g.pathname,search:g.search,hash:g.hash})},push:c,replace:h,go(m){return o.go(m)}};return d}var jg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(jg||(jg={}));function sx(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?li(e):e,i=U1(r.pathname||"/",n);if(i==null)return null;let s=F1(t);ox(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=mx(s[a],vx(i));return o}function F1(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(ze(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=mr([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(ze(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),F1(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:fx(a,i.index),routesMeta:l})}),e}function ox(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:px(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ax=/^:\w+$/,lx=3,ux=2,cx=1,hx=10,dx=-2,Vg=t=>t==="*";function fx(t,e){let n=t.split("/"),r=n.length;return n.some(Vg)&&(r+=dx),e&&(r+=ux),n.filter(i=>!Vg(i)).reduce((i,s)=>i+(ax.test(s)?lx:s===""?cx:hx),r)}function px(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function mx(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=gx({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:mr([i,c.pathname]),pathnameBase:_x(mr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=mr([i,c.pathnameBase]))}return s}function gx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=yx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=wx(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function yx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),sp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function vx(t){try{return decodeURI(t)}catch(e){return sp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function wx(t,e){try{return decodeURIComponent(t)}catch(n){return sp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function U1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function sp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ex(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?li(t):t;return{pathname:n?n.startsWith("/")?n:Sx(n,e):e,search:kx(r),hash:Ix(i)}}function Sx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function oh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function z1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function j1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=li(t):(i=_o({},t),ze(!i.pathname||!i.pathname.includes("?"),oh("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),oh("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),oh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=Ex(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const mr=t=>t.join("/").replace(/\/\/+/g,"/"),_x=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ix=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class xx{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function Tx(t){return t instanceof xx}const Cx=new Set(["POST","PUT","PATCH","DELETE"]);[...Cx];var Iu={exports:{}},xu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax=A.exports,bx=Symbol.for("react.element"),Rx=Symbol.for("react.fragment"),Nx=Object.prototype.hasOwnProperty,Dx=Ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Px={key:!0,ref:!0,__self:!0,__source:!0};function V1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Nx.call(e,r)&&!Px.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bx,type:t,key:s,ref:o,props:i,_owner:Dx.current}}xu.Fragment=Rx;xu.jsx=V1;xu.jsxs=V1;(function(t){t.exports=xu})(Iu);const Ox=Iu.exports.Fragment,w=Iu.exports.jsx,$=Iu.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xd(){return xd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xd.apply(this,arguments)}function Lx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const Mx=typeof Object.is=="function"?Object.is:Lx,{useState:$x,useEffect:Fx,useLayoutEffect:Ux,useDebugValue:zx}=Rh;function jx(t,e,n){const r=e(),[{inst:i},s]=$x({inst:{value:r,getSnapshot:e}});return Ux(()=>{i.value=r,i.getSnapshot=e,ah(i)&&s({inst:i})},[t,r,e]),Fx(()=>(ah(i)&&s({inst:i}),t(()=>{ah(i)&&s({inst:i})})),[t]),zx(r),r}function ah(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!Mx(n,r)}catch{return!0}}function Vx(t,e,n){return e()}const Bx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hx=!Bx,Wx=Hx?Vx:jx;"useSyncExternalStore"in Rh&&(t=>t.useSyncExternalStore)(Rh);const qx=A.exports.createContext(null),Kx=A.exports.createContext(null),Tu=A.exports.createContext(null),op=A.exports.createContext(null),Cu=A.exports.createContext(null),ls=A.exports.createContext({outlet:null,matches:[]}),B1=A.exports.createContext(null);function Gx(t,e){let{relative:n}=e===void 0?{}:e;us()||ze(!1);let{basename:r,navigator:i}=A.exports.useContext(op),{hash:s,pathname:o,search:a}=ap(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:mr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function us(){return A.exports.useContext(Cu)!=null}function Go(){return us()||ze(!1),A.exports.useContext(Cu).location}function Au(){us()||ze(!1);let{basename:t,navigator:e}=A.exports.useContext(op),{matches:n}=A.exports.useContext(ls),{pathname:r}=Go(),i=JSON.stringify(z1(n).map(a=>a.pathnameBase)),s=A.exports.useRef(!1);return A.exports.useEffect(()=>{s.current=!0}),A.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=j1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:mr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function Qx(){let{matches:t}=A.exports.useContext(ls),e=t[t.length-1];return e?e.params:{}}function ap(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=A.exports.useContext(ls),{pathname:i}=Go(),s=JSON.stringify(z1(r).map(o=>o.pathnameBase));return A.exports.useMemo(()=>j1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Yx(t,e){us()||ze(!1);let n=A.exports.useContext(Tu),{matches:r}=A.exports.useContext(ls),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=Go(),l;if(e){var u;let g=typeof e=="string"?li(e):e;o==="/"||((u=g.pathname)==null?void 0:u.startsWith(o))||ze(!1),l=g}else l=a;let c=l.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",d=sx(t,{pathname:h}),m=eT(d&&d.map(g=>Object.assign({},g,{params:Object.assign({},s,g.params),pathname:mr([o,g.pathname]),pathnameBase:g.pathnameBase==="/"?o:mr([o,g.pathnameBase])})),r,n||void 0);return e&&m?w(Cu.Provider,{value:{location:xd({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:or.Pop},children:m}):m}function Xx(){let t=nT(),e=Tx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return $(Ox,{children:[w("h2",{children:"Unhandled Thrown Error!"}),w("h3",{style:{fontStyle:"italic"},children:e}),n?w("pre",{style:i,children:n}):null,w("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),$("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",w("code",{style:s,children:"errorElement"})," props on\xA0",w("code",{style:s,children:"<Route>"})]})]})}class Jx extends A.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?w(B1.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function Zx(t){let{routeContext:e,match:n,children:r}=t,i=A.exports.useContext(qx);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),w(ls.Provider,{value:e,children:r})}function eT(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ze(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||w(Xx,{}):null,c=()=>w(Zx,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?w(Jx,{location:n.location,component:u,error:l,children:c()}):c()},null)}var Bg;(function(t){t.UseRevalidator="useRevalidator"})(Bg||(Bg={}));var Td;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Td||(Td={}));function tT(t){let e=A.exports.useContext(Tu);return e||ze(!1),e}function nT(){var t;let e=A.exports.useContext(B1),n=tT(Td.UseRouteError),r=A.exports.useContext(ls),i=r.matches[r.matches.length-1];return e||(r||ze(!1),i.route.id||ze(!1),(t=n.errors)==null?void 0:t[i.route.id])}function H1(t){let{to:e,replace:n,state:r,relative:i}=t;us()||ze(!1);let s=A.exports.useContext(Tu),o=Au();return A.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function Or(t){ze(!1)}function rT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=or.Pop,navigator:s,static:o=!1}=t;us()&&ze(!1);let a=e.replace(/^\/*/,"/"),l=A.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=li(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,g=A.exports.useMemo(()=>{let v=U1(u,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:m}},[a,u,c,h,d,m]);return g==null?null:w(op.Provider,{value:l,children:w(Cu.Provider,{children:n,value:{location:g,navigationType:i}})})}function iT(t){let{children:e,location:n}=t,r=A.exports.useContext(Kx),i=r&&!e?r.router.routes:Cd(e);return Yx(i,n)}var Hg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Hg||(Hg={}));new Promise(()=>{});function Cd(t,e){e===void 0&&(e=[]);let n=[];return A.exports.Children.forEach(t,(r,i)=>{if(!A.exports.isValidElement(r))return;if(r.type===A.exports.Fragment){n.push.apply(n,Cd(r.props.children,e));return}r.type!==Or&&ze(!1),!r.props.index||!r.props.children||ze(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Cd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function W1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function sT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function oT(t,e){return t.button===0&&(!e||e==="_self")&&!sT(t)}const aT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],lT=["aria-current","caseSensitive","className","end","style","to","children"];function uT(t){let{basename:e,children:n,window:r}=t,i=A.exports.useRef();i.current==null&&(i.current=ex({window:r,v5Compat:!0}));let s=i.current,[o,a]=A.exports.useState({action:s.action,location:s.location});return A.exports.useLayoutEffect(()=>s.listen(a),[s]),w(rT,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const cT=A.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=W1(e,aT),d=Gx(u,{relative:i}),m=hT(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(v){r&&r(v),v.defaultPrevented||m(v)}return w("a",{...h,href:d,onClick:s?r:g,ref:n,target:l})}),rn=A.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=W1(e,lT),h=ap(l,{relative:c.relative}),d=Go(),m=A.exports.useContext(Tu),g=h.pathname,v=d.pathname,_=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(v=v.toLowerCase(),_=_?_.toLowerCase():null,g=g.toLowerCase());let p=v===g||!o&&v.startsWith(g)&&v.charAt(g.length)==="/",f=_!=null&&(_===g||!o&&_.startsWith(g)&&_.charAt(g.length)==="/"),y=p?r:void 0,S;typeof s=="function"?S=s({isActive:p,isPending:f}):S=[s,p?"active":null,f?"pending":null].filter(Boolean).join(" ");let k=typeof a=="function"?a({isActive:p,isPending:f}):a;return w(cT,{...c,"aria-current":y,className:S,ref:n,style:k,to:l,children:typeof u=="function"?u({isActive:p,isPending:f}):u})});var Wg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Wg||(Wg={}));var qg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(qg||(qg={}));function hT(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Au(),l=Go(),u=ap(t,{relative:o});return A.exports.useCallback(c=>{if(oT(c,n)){c.preventDefault();let h=r!==void 0?r:ko(l)===ko(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
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
 */const q1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},K1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(q1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},fT=function(t){const e=q1(t);return K1.encodeByteArray(e,!0)},Fl=function(t){return fT(t).replace(/\./g,"")},G1=function(t){try{return K1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function Q1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gT(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Y1(){return typeof indexedDB=="object"}function X1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function yT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function vT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wT=()=>vT().__FIREBASE_DEFAULTS__,ET=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ST=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&G1(t[1]);return e&&JSON.parse(e)},lp=()=>{try{return wT()||ET()||ST()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},J1=t=>{var e,n;return(n=(e=lp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_T=t=>{const e=J1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kT=()=>{var t;return(t=lp())===null||t===void 0?void 0:t.config},Z1=t=>{var e;return(e=lp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function xT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Fl(JSON.stringify(n)),Fl(JSON.stringify(o)),a].join(".")}/**
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
 */const TT="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=TT,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?CT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hn(i,a,r)}}function CT(t,e){return t.replace(AT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const AT=/\{\$([^}]+)}/g;function bT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Io(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Kg(s)&&Kg(o)){if(!Io(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kg(t){return t!==null&&typeof t=="object"}/**
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
 */function Qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function RT(t,e){const n=new NT(t,e);return n.subscribe.bind(n)}class NT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");DT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=lh),i.error===void 0&&(i.error=lh),i.complete===void 0&&(i.complete=lh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lh(){}/**
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
 */const PT=1e3,OT=2,LT=4*60*60*1e3,MT=.5;function Gg(t,e=PT,n=OT){const r=e*Math.pow(n,t),i=Math.round(MT*r*(Math.random()-.5)*2);return Math.min(LT,r+i)}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lr="[DEFAULT]";/**
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
 */class $T{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new IT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UT(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FT(t){return t===Lr?void 0:t}function UT(t){return t.instantiationMode==="EAGER"}/**
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
 */class zT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $T(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const jT={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},VT=ae.INFO,BT={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},HT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=BT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bu{constructor(e){this.name=e,this._logLevel=VT,this._logHandler=HT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const WT=(t,e)=>e.some(n=>t instanceof n);let Qg,Yg;function qT(){return Qg||(Qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KT(){return Yg||(Yg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ew=new WeakMap,Ad=new WeakMap,tw=new WeakMap,uh=new WeakMap,up=new WeakMap;function GT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ew.set(n,t)}).catch(()=>{}),up.set(e,t),e}function QT(t){if(Ad.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ad.set(t,e)}let bd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ad.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YT(t){bd=t(bd)}function XT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ch(this),e,...n);return tw.set(r,e.sort?e.sort():[e]),gr(r)}:KT().includes(t)?function(...e){return t.apply(ch(this),e),gr(ew.get(this))}:function(...e){return gr(t.apply(ch(this),e))}}function JT(t){return typeof t=="function"?XT(t):(t instanceof IDBTransaction&&QT(t),WT(t,qT())?new Proxy(t,bd):t)}function gr(t){if(t instanceof IDBRequest)return GT(t);if(uh.has(t))return uh.get(t);const e=JT(t);return e!==t&&(uh.set(t,e),up.set(e,t)),e}const ch=t=>up.get(t);function nw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=gr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(gr(o.result),l.oldVersion,l.newVersion,gr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ZT=["get","getKey","getAll","getAllKeys","count"],eC=["put","add","delete","clear"],hh=new Map;function Xg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hh.get(e))return hh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return hh.set(e,s),s}YT(t=>({...t,get:(e,n,r)=>Xg(e,n)||t.get(e,n,r),has:(e,n)=>!!Xg(e,n)||t.has(e,n)}));/**
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
 */class tC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rd="@firebase/app",Jg="0.8.4";/**
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
 */const Zr=new bu("@firebase/app"),rC="@firebase/app-compat",iC="@firebase/analytics-compat",sC="@firebase/analytics",oC="@firebase/app-check-compat",aC="@firebase/app-check",lC="@firebase/auth",uC="@firebase/auth-compat",cC="@firebase/database",hC="@firebase/database-compat",dC="@firebase/functions",fC="@firebase/functions-compat",pC="@firebase/installations",mC="@firebase/installations-compat",gC="@firebase/messaging",yC="@firebase/messaging-compat",vC="@firebase/performance",wC="@firebase/performance-compat",EC="@firebase/remote-config",SC="@firebase/remote-config-compat",_C="@firebase/storage",kC="@firebase/storage-compat",IC="@firebase/firestore",xC="@firebase/firestore-compat",TC="firebase",CC="9.14.0";/**
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
 */const Nd="[DEFAULT]",AC={[Rd]:"fire-core",[rC]:"fire-core-compat",[sC]:"fire-analytics",[iC]:"fire-analytics-compat",[aC]:"fire-app-check",[oC]:"fire-app-check-compat",[lC]:"fire-auth",[uC]:"fire-auth-compat",[cC]:"fire-rtdb",[hC]:"fire-rtdb-compat",[dC]:"fire-fn",[fC]:"fire-fn-compat",[pC]:"fire-iid",[mC]:"fire-iid-compat",[gC]:"fire-fcm",[yC]:"fire-fcm-compat",[vC]:"fire-perf",[wC]:"fire-perf-compat",[EC]:"fire-rc",[SC]:"fire-rc-compat",[_C]:"fire-gcs",[kC]:"fire-gcs-compat",[IC]:"fire-fst",[xC]:"fire-fst-compat","fire-js":"fire-js",[TC]:"fire-js-all"};/**
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
 */const Ul=new Map,Dd=new Map;function bC(t,e){try{t.container.addComponent(e)}catch(n){Zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(Dd.has(e))return Zr.debug(`There were multiple attempts to register component ${e}.`),!1;Dd.set(e,t);for(const n of Ul.values())bC(n,t);return!0}function ci(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const RC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yr=new ui("app","Firebase",RC);/**
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
 */class NC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const Yo=CC;function rw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yr.create("bad-app-name",{appName:String(i)});if(n||(n=kT()),!n)throw yr.create("no-options");const s=Ul.get(i);if(s){if(Io(n,s.options)&&Io(r,s.config))return s;throw yr.create("duplicate-app",{appName:i})}const o=new zT(i);for(const l of Dd.values())o.addComponent(l);const a=new NC(n,r,o);return Ul.set(i,a),a}function cp(t=Nd){const e=Ul.get(t);if(!e&&t===Nd)return rw();if(!e)throw yr.create("no-app",{appName:t});return e}function Wt(t,e,n){var r;let i=(r=AC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zr.warn(a.join(" "));return}_n(new un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const DC="firebase-heartbeat-database",PC=1,xo="firebase-heartbeat-store";let dh=null;function iw(){return dh||(dh=nw(DC,PC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xo)}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),dh}async function OC(t){var e;try{return(await iw()).transaction(xo).objectStore(xo).get(sw(t))}catch(n){if(n instanceof hn)Zr.warn(n.message);else{const r=yr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Zr.warn(r.message)}}}async function Zg(t,e){var n;try{const i=(await iw()).transaction(xo,"readwrite");return await i.objectStore(xo).put(e,sw(t)),i.done}catch(r){if(r instanceof hn)Zr.warn(r.message);else{const i=yr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Zr.warn(i.message)}}}function sw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const LC=1024,MC=30*24*60*60*1e3;class $C{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new UC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ey();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=MC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ey(),{heartbeatsToSend:n,unsentEntries:r}=FC(this._heartbeatsCache.heartbeats),i=Fl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ey(){return new Date().toISOString().substring(0,10)}function FC(t,e=LC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ty(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ty(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class UC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y1()?X1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await OC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ty(t){return Fl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function zC(t){_n(new un("platform-logger",e=>new tC(e),"PRIVATE")),_n(new un("heartbeat",e=>new $C(e),"PRIVATE")),Wt(Rd,Jg,t),Wt(Rd,Jg,"esm2017"),Wt("fire-js","")}zC("");var jC="firebase",VC="9.14.0";/**
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
 */Wt(jC,VC,"app");const ow="@firebase/installations",hp="0.5.16";/**
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
 */const aw=1e4,lw=`w:${hp}`,uw="FIS_v2",BC="https://firebaseinstallations.googleapis.com/v1",HC=60*60*1e3,WC="installations",qC="Installations";/**
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
 */const KC={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ei=new ui(WC,qC,KC);function cw(t){return t instanceof hn&&t.code.includes("request-failed")}/**
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
 */function hw({projectId:t}){return`${BC}/projects/${t}/installations`}function dw(t){return{token:t.token,requestStatus:2,expiresIn:QC(t.expiresIn),creationTime:Date.now()}}async function fw(t,e){const r=(await e.json()).error;return ei.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function pw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function GC(t,{refreshToken:e}){const n=pw(t);return n.append("Authorization",YC(e)),n}async function mw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function QC(t){return Number(t.replace("s","000"))}function YC(t){return`${uw} ${t}`}/**
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
 */async function XC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=hw(t),i=pw(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:uw,appId:t.appId,sdkVersion:lw},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await mw(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:dw(u.authToken)}}else throw await fw("Create Installation",l)}/**
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
 */function gw(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function JC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ZC=/^[cdef][\w-]{21}$/,Pd="";function e2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=t2(t);return ZC.test(n)?n:Pd}catch{return Pd}}function t2(t){return JC(t).substr(0,22)}/**
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
 */function Ru(t){return`${t.appName}!${t.appId}`}/**
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
 */const yw=new Map;function vw(t,e){const n=Ru(t);ww(n,e),n2(n,e)}function ww(t,e){const n=yw.get(t);if(!!n)for(const r of n)r(e)}function n2(t,e){const n=r2();n&&n.postMessage({key:t,fid:e}),i2()}let Ur=null;function r2(){return!Ur&&"BroadcastChannel"in self&&(Ur=new BroadcastChannel("[Firebase] FID Change"),Ur.onmessage=t=>{ww(t.data.key,t.data.fid)}),Ur}function i2(){yw.size===0&&Ur&&(Ur.close(),Ur=null)}/**
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
 */const s2="firebase-installations-database",o2=1,ti="firebase-installations-store";let fh=null;function dp(){return fh||(fh=nw(s2,o2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ti)}}})),fh}async function zl(t,e){const n=Ru(t),i=(await dp()).transaction(ti,"readwrite"),s=i.objectStore(ti),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&vw(t,e.fid),e}async function Ew(t){const e=Ru(t),r=(await dp()).transaction(ti,"readwrite");await r.objectStore(ti).delete(e),await r.done}async function Nu(t,e){const n=Ru(t),i=(await dp()).transaction(ti,"readwrite"),s=i.objectStore(ti),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&vw(t,a.fid),a}/**
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
 */async function fp(t){let e;const n=await Nu(t.appConfig,r=>{const i=a2(r),s=l2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Pd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function a2(t){const e=t||{fid:e2(),registrationStatus:0};return Sw(e)}function l2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ei.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=u2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:c2(t)}:{installationEntry:e}}async function u2(t,e){try{const n=await XC(t,e);return zl(t.appConfig,n)}catch(n){throw cw(n)&&n.customData.serverCode===409?await Ew(t.appConfig):await zl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function c2(t){let e=await ny(t.appConfig);for(;e.registrationStatus===1;)await gw(100),e=await ny(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await fp(t);return r||n}return e}function ny(t){return Nu(t,e=>{if(!e)throw ei.create("installation-not-found");return Sw(e)})}function Sw(t){return h2(t)?{fid:t.fid,registrationStatus:0}:t}function h2(t){return t.registrationStatus===1&&t.registrationTime+aw<Date.now()}/**
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
 */async function d2({appConfig:t,heartbeatServiceProvider:e},n){const r=f2(t,n),i=GC(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:lw,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await mw(()=>fetch(r,a));if(l.ok){const u=await l.json();return dw(u)}else throw await fw("Generate Auth Token",l)}function f2(t,{fid:e}){return`${hw(t)}/${e}/authTokens:generate`}/**
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
 */async function pp(t,e=!1){let n;const r=await Nu(t.appConfig,s=>{if(!_w(s))throw ei.create("not-registered");const o=s.authToken;if(!e&&g2(o))return s;if(o.requestStatus===1)return n=p2(t,e),s;{if(!navigator.onLine)throw ei.create("app-offline");const a=v2(s);return n=m2(t,a),a}});return n?await n:r.authToken}async function p2(t,e){let n=await ry(t.appConfig);for(;n.authToken.requestStatus===1;)await gw(100),n=await ry(t.appConfig);const r=n.authToken;return r.requestStatus===0?pp(t,e):r}function ry(t){return Nu(t,e=>{if(!_w(e))throw ei.create("not-registered");const n=e.authToken;return w2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function m2(t,e){try{const n=await d2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await zl(t.appConfig,r),n}catch(n){if(cw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ew(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await zl(t.appConfig,r)}throw n}}function _w(t){return t!==void 0&&t.registrationStatus===2}function g2(t){return t.requestStatus===2&&!y2(t)}function y2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+HC}function v2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function w2(t){return t.requestStatus===1&&t.requestTime+aw<Date.now()}/**
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
 */async function E2(t){const e=t,{installationEntry:n,registrationPromise:r}=await fp(e);return r?r.catch(console.error):pp(e).catch(console.error),n.fid}/**
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
 */async function S2(t,e=!1){const n=t;return await _2(n),(await pp(n,e)).token}async function _2(t){const{registrationPromise:e}=await fp(t);e&&await e}/**
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
 */function k2(t){if(!t||!t.options)throw ph("App Configuration");if(!t.name)throw ph("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ph(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ph(t){return ei.create("missing-app-config-values",{valueName:t})}/**
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
 */const kw="installations",I2="installations-internal",x2=t=>{const e=t.getProvider("app").getImmediate(),n=k2(e),r=ci(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},T2=t=>{const e=t.getProvider("app").getImmediate(),n=ci(e,kw).getImmediate();return{getId:()=>E2(n),getToken:i=>S2(n,i)}};function C2(){_n(new un(kw,x2,"PUBLIC")),_n(new un(I2,T2,"PRIVATE"))}C2();Wt(ow,hp);Wt(ow,hp,"esm2017");/**
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
 */const jl="analytics",A2="firebase_id",b2="origin",R2=60*1e3,N2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Iw="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ot=new bu("@firebase/analytics");/**
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
 */function xw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function D2(t,e){const n=document.createElement("script");n.src=`${Iw}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function P2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function O2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await xw(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Ot.error(a)}t("config",i,s)}async function L2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await xw(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ot.error(s)}}function M2(t,e,n,r){async function i(s,o,a){try{s==="event"?await L2(t,e,n,o,a):s==="config"?await O2(t,e,n,r,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(l){Ot.error(l)}}return i}function $2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=M2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function F2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Iw)&&n.src.includes(t))return n;return null}/**
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
 */const U2={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},qt=new ui("analytics","Analytics",U2);/**
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
 */const z2=30,j2=1e3;class V2{constructor(e={},n=j2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Tw=new V2;function B2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function H2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:B2(r)},s=N2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw qt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function W2(t,e=Tw,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw qt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw qt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new G2;return setTimeout(async()=>{a.abort()},n!==void 0?n:R2),Cw({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Cw(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Tw){var s,o;const{appId:a,measurementId:l}=t;try{await q2(r,e)}catch(u){if(l)return Ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(s=u)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:l};throw u}try{const u=await H2(t);return i.deleteThrottleMetadata(a),u}catch(u){const c=u;if(!K2(c)){if(i.deleteThrottleMetadata(a),l)return Ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw u}const h=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?Gg(n,i.intervalMillis,z2):Gg(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(a,d),Ot.debug(`Calling attemptFetch again in ${h} millis`),Cw(t,d,r,i)}}function q2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function K2(t){if(!(t instanceof hn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class G2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Q2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function Y2(){var t;if(Y1())try{await X1()}catch(e){return Ot.warn(qt.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Ot.warn(qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function X2(t,e,n,r,i,s,o){var a;const l=W2(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ot.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ot.error(m)),e.push(l);const u=Y2().then(m=>{if(m)return r.getId()}),[c,h]=await Promise.all([l,u]);F2(s)||D2(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[b2]="firebase",d.update=!0,h!=null&&(d[A2]=h),i("config",c.measurementId,d),c.measurementId}/**
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
 */class J2{constructor(e){this.app=e}_delete(){return delete Ys[this.app.options.appId],Promise.resolve()}}let Ys={},iy=[];const sy={};let mh="dataLayer",Z2="gtag",oy,Aw,ay=!1;function eA(){const t=[];if(Q1()&&t.push("This is a browser extension environment."),yT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=qt.create("invalid-analytics-context",{errorInfo:e});Ot.warn(n.message)}}function tA(t,e,n){eA();const r=t.options.appId;if(!r)throw qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qt.create("no-api-key");if(Ys[r]!=null)throw qt.create("already-exists",{id:r});if(!ay){P2(mh);const{wrappedGtag:s,gtagCore:o}=$2(Ys,iy,sy,mh,Z2);Aw=s,oy=o,ay=!0}return Ys[r]=X2(t,iy,sy,e,oy,mh,n),new J2(t)}function nA(t=cp()){t=$e(t);const e=ci(t,jl);return e.isInitialized()?e.getImmediate():rA(t)}function rA(t,e={}){const n=ci(t,jl);if(n.isInitialized()){const i=n.getImmediate();if(Io(e,n.getOptions()))return i;throw qt.create("already-initialized")}return n.initialize({options:e})}function iA(t,e,n,r){t=$e(t),Q2(Aw,Ys[t.app.options.appId],e,n,r).catch(i=>Ot.error(i))}const ly="@firebase/analytics",uy="0.8.4";function sA(){_n(new un(jl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return tA(r,i,n)},"PUBLIC")),_n(new un("analytics-internal",t,"PRIVATE")),Wt(ly,uy),Wt(ly,uy,"esm2017");function t(e){try{const n=e.getProvider(jl).getImmediate();return{logEvent:(r,i,s)=>iA(n,r,i,s)}}catch(n){throw qt.create("interop-component-reg-failed",{reason:n})}}}sA();var oA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,mp=mp||{},G=oA||self;function Vl(){}function Du(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Xo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function aA(t){return Object.prototype.hasOwnProperty.call(t,gh)&&t[gh]||(t[gh]=++lA)}var gh="closure_uid_"+(1e9*Math.random()>>>0),lA=0;function uA(t,e,n){return t.call.apply(t.bind,arguments)}function cA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=uA:dt=cA,dt.apply(null,arguments)}function Ma(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function st(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function br(){this.s=this.s,this.o=this.o}var hA=0;br.prototype.s=!1;br.prototype.na=function(){!this.s&&(this.s=!0,this.M(),hA!=0)&&aA(this)};br.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function cy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Du(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var dA=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",Vl,e),G.removeEventListener("test",Vl,e)}catch{}return t}();function Bl(t){return/^[\s\xa0]*$/.test(t)}var hy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function yh(t,e){return t<e?-1:t>e?1:0}function Pu(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function yn(t){return Pu().indexOf(t)!=-1}function yp(t){return yp[" "](t),t}yp[" "]=Vl;function fA(t){var e=gA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var pA=yn("Opera"),Yi=yn("Trident")||yn("MSIE"),Rw=yn("Edge"),Od=Rw||Yi,Nw=yn("Gecko")&&!(Pu().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge"))&&!(yn("Trident")||yn("MSIE"))&&!yn("Edge"),mA=Pu().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge");function Dw(){var t=G.document;return t?t.documentMode:void 0}var Hl;e:{var vh="",wh=function(){var t=Pu();if(Nw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Rw)return/Edge\/([\d\.]+)/.exec(t);if(Yi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mA)return/WebKit\/(\S+)/.exec(t);if(pA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(wh&&(vh=wh?wh[1]:""),Yi){var Eh=Dw();if(Eh!=null&&Eh>parseFloat(vh)){Hl=String(Eh);break e}}Hl=vh}var gA={};function yA(){return fA(function(){let t=0;const e=hy(String(Hl)).split("."),n=hy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=yh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||yh(i[2].length==0,s[2].length==0)||yh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Ld;if(G.document&&Yi){var dy=Dw();Ld=dy||parseInt(Hl,10)||void 0}else Ld=void 0;var vA=Ld;function To(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Nw){e:{try{yp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:wA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&To.X.h.call(this)}}st(To,ft);var wA={2:"touch",3:"pen",4:"mouse"};To.prototype.h=function(){To.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Jo="closure_listenable_"+(1e6*Math.random()|0),EA=0;function SA(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++EA,this.ba=this.ea=!1}function Ou(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function vp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Pw(t){const e={};for(const n in t)e[n]=t[n];return e}const fy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ow(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<fy.length;s++)n=fy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Lu(t){this.src=t,this.g={},this.h=0}Lu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=$d(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new SA(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Md(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=bw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ou(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function $d(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var wp="closure_lm_"+(1e6*Math.random()|0),Sh={};function Lw(t,e,n,r,i){if(r&&r.once)return $w(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Lw(t,e[s],n,r,i);return null}return n=_p(n),t&&t[Jo]?t.N(e,n,Xo(r)?!!r.capture:!!r,i):Mw(t,e,n,!1,r,i)}function Mw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Xo(i)?!!i.capture:!!i,a=Sp(t);if(a||(t[wp]=a=new Lu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=_A(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)dA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Uw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _A(){function t(n){return e.call(t.src,t.listener,n)}const e=kA;return t}function $w(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)$w(t,e[s],n,r,i);return null}return n=_p(n),t&&t[Jo]?t.O(e,n,Xo(r)?!!r.capture:!!r,i):Mw(t,e,n,!0,r,i)}function Fw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Fw(t,e[s],n,r,i);else r=Xo(r)?!!r.capture:!!r,n=_p(n),t&&t[Jo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=$d(s,n,r,i),-1<n&&(Ou(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Sp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$d(e,n,r,i)),(n=-1<t?e[t]:null)&&Ep(n))}function Ep(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Jo])Md(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Uw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Sp(e))?(Md(n,t),n.h==0&&(n.src=null,e[wp]=null)):Ou(t)}}}function Uw(t){return t in Sh?Sh[t]:Sh[t]="on"+t}function kA(t,e){if(t.ba)t=!0;else{e=new To(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Ep(t),t=n.call(r,e)}return t}function Sp(t){return t=t[wp],t instanceof Lu?t:null}var _h="__closure_events_fn_"+(1e9*Math.random()>>>0);function _p(t){return typeof t=="function"?t:(t[_h]||(t[_h]=function(e){return t.handleEvent(e)}),t[_h])}function Ke(){br.call(this),this.i=new Lu(this),this.P=this,this.I=null}st(Ke,br);Ke.prototype[Jo]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){Fw(this,t,e,n,r)};function rt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var i=e;e=new ft(r,t),Ow(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=$a(o,r,!0,e)&&i}if(o=e.g=t,i=$a(o,r,!0,e)&&i,i=$a(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=$a(o,r,!1,e)&&i}Ke.prototype.M=function(){if(Ke.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ou(n[r]);delete t.g[e],t.h--}}this.I=null};Ke.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function $a(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Md(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var kp=G.JSON.stringify;function IA(){var t=Vw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xA{constructor(){this.h=this.g=null}add(e,n){const r=zw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var zw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new TA,t=>t.reset());class TA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function CA(t){G.setTimeout(()=>{throw t},0)}function jw(t,e){Fd||AA(),Ud||(Fd(),Ud=!0),Vw.add(t,e)}var Fd;function AA(){var t=G.Promise.resolve(void 0);Fd=function(){t.then(bA)}}var Ud=!1,Vw=new xA;function bA(){for(var t;t=IA();){try{t.h.call(t.g)}catch(n){CA(n)}var e=zw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ud=!1}function Mu(t,e){Ke.call(this),this.h=t||1,this.g=e||G,this.j=dt(this.lb,this),this.l=Date.now()}st(Mu,Ke);F=Mu.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),rt(this,"tick"),this.ca&&(Ip(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ip(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){Mu.X.M.call(this),Ip(this),delete this.g};function xp(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function Bw(t){t.g=xp(()=>{t.g=null,t.i&&(t.i=!1,Bw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class RA extends br{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bw(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Co(t){br.call(this),this.h=t,this.g={}}st(Co,br);var py=[];function Hw(t,e,n,r){Array.isArray(n)||(n&&(py[0]=n.toString()),n=py);for(var i=0;i<n.length;i++){var s=Lw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ww(t){vp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ep(e)},t),t.g={}}Co.prototype.M=function(){Co.X.M.call(this),Ww(this)};Co.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $u(){this.g=!0}$u.prototype.Aa=function(){this.g=!1};function NA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function DA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function bi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+OA(t,n)+(r?" "+r:"")})}function PA(t,e){t.info(function(){return"TIMEOUT: "+e})}$u.prototype.info=function(){};function OA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return kp(n)}catch{return e}}var hi={},my=null;function Fu(){return my=my||new Ke}hi.Pa="serverreachability";function qw(t){ft.call(this,hi.Pa,t)}st(qw,ft);function Ao(t){const e=Fu();rt(e,new qw(e))}hi.STAT_EVENT="statevent";function Kw(t,e){ft.call(this,hi.STAT_EVENT,t),this.stat=e}st(Kw,ft);function wt(t){const e=Fu();rt(e,new Kw(e,t))}hi.Qa="timingevent";function Gw(t,e){ft.call(this,hi.Qa,t),this.size=e}st(Gw,ft);function Zo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var Uu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Qw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Tp(){}Tp.prototype.h=null;function gy(t){return t.h||(t.h=t.i())}function Yw(){}var ea={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Cp(){ft.call(this,"d")}st(Cp,ft);function Ap(){ft.call(this,"c")}st(Ap,ft);var zd;function zu(){}st(zu,Tp);zu.prototype.g=function(){return new XMLHttpRequest};zu.prototype.i=function(){return{}};zd=new zu;function ta(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Co(this),this.O=LA,t=Od?125:void 0,this.T=new Mu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Xw}function Xw(){this.i=null,this.g="",this.h=!1}var LA=45e3,jd={},Wl={};F=ta.prototype;F.setTimeout=function(t){this.O=t};function Vd(t,e,n){t.K=1,t.v=Vu(zn(e)),t.s=n,t.P=!0,Jw(t,null)}function Jw(t,e){t.F=Date.now(),na(t),t.A=zn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),oE(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Xw,t.g=CE(t.l,n?e:null,!t.s),0<t.N&&(t.L=new RA(dt(t.La,t,t.g),t.N)),Hw(t.S,t.g,"readystatechange",t.ib),e=t.H?Pw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ao(),NA(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&An(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const c=An(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Od||this.g&&(this.h.h||this.g.fa()||Ey(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ao(3):Ao(2)),ju(this);var n=this.g.aa();this.Y=n;t:if(Zw(this)){var r=Ey(this.g);t="";var i=r.length,s=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zr(this),Xs(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,DA(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bl(a)){var u=a;break t}}u=null}if(n=u)bi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Bd(this,n);else{this.i=!1,this.o=3,wt(12),zr(this),Xs(this);break e}}this.P?(eE(this,c,o),Od&&this.i&&c==3&&(Hw(this.S,this.T,"tick",this.hb),this.T.start())):(bi(this.j,this.m,o,null),Bd(this,o)),c==4&&zr(this),this.i&&!this.I&&(c==4?kE(this.l,this):(this.i=!1,na(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,wt(12)):(this.o=0,wt(13)),zr(this),Xs(this)}}}catch{}finally{}};function Zw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function eE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=MA(t,n),i==Wl){e==4&&(t.o=4,wt(14),r=!1),bi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==jd){t.o=4,wt(15),bi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else bi(t.j,t.m,i,null),Bd(t,i);Zw(t)&&i!=Wl&&i!=jd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Lp(e),e.K=!0,wt(11))):(bi(t.j,t.m,n,"[Invalid Chunked Response]"),zr(t),Xs(t))}F.hb=function(){if(this.g){var t=An(this.g),e=this.g.fa();this.C<e.length&&(ju(this),eE(this,t,e),this.i&&t!=4&&na(this))}};function MA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Wl:(n=Number(e.substring(n,r)),isNaN(n)?jd:(r+=1,r+n>e.length?Wl:(e=e.substr(r,n),t.C=r+n,e)))}F.cancel=function(){this.I=!0,zr(this)};function na(t){t.V=Date.now()+t.O,tE(t,t.O)}function tE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Zo(dt(t.gb,t),e)}function ju(t){t.B&&(G.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(PA(this.j,this.A),this.K!=2&&(Ao(),wt(17)),zr(this),this.o=2,Xs(this)):tE(this,this.V-t)};function Xs(t){t.l.G==0||t.I||kE(t.l,t)}function zr(t){ju(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ip(t.T),Ww(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Bd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Hd(n.h,t))){if(!t.J&&Hd(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Gl(n),Wu(n);else break e;Op(n),wt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Zo(dt(n.cb,n),6e3));if(1>=uE(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else jr(n,11)}else if((t.J||n.g==t)&&Gl(n),!Bl(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(bp(s,s.h),s.h=null))}if(r.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,_e(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=TE(r,r.H?r.ka:null,r.V),o.J){cE(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(ju(a),na(a)),r.g=o}else SE(r);0<n.i.length&&qu(n)}else u[0]!="stop"&&u[0]!="close"||jr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?jr(n,7):Pp(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ao(4)}catch{}}function $A(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Du(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function FA(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Du(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function nE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Du(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=FA(t),r=$A(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var rE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wr){this.h=e!==void 0?e:t.h,ql(this,t.j),this.s=t.s,this.g=t.g,Kl(this,t.m),this.l=t.l,e=t.i;var n=new bo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),yy(this,n),this.o=t.o}else t&&(n=String(t).match(rE))?(this.h=!!e,ql(this,n[1]||"",!0),this.s=$s(n[2]||""),this.g=$s(n[3]||"",!0),Kl(this,n[4]),this.l=$s(n[5]||"",!0),yy(this,n[6]||"",!0),this.o=$s(n[7]||"")):(this.h=!!e,this.i=new bo(null,this.h))}Wr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fs(e,vy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fs(e,vy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fs(n,n.charAt(0)=="/"?VA:jA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fs(n,HA)),t.join("")};function zn(t){return new Wr(t)}function ql(t,e,n){t.j=n?$s(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Kl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yy(t,e,n){e instanceof bo?(t.i=e,WA(t.i,t.h)):(n||(e=Fs(e,BA)),t.i=new bo(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function Vu(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $s(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vy=/[#\/\?@]/g,jA=/[#\?:]/g,VA=/[#\?]/g,BA=/[#\?@]/g,HA=/#/g;function bo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rr(t){t.g||(t.g=new Map,t.h=0,t.i&&UA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=bo.prototype;F.add=function(t,e){Rr(this),this.i=null,t=cs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function iE(t,e){Rr(t),e=cs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sE(t,e){return Rr(t),e=cs(t,e),t.g.has(e)}F.forEach=function(t,e){Rr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};F.oa=function(){Rr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};F.W=function(t){Rr(this);let e=[];if(typeof t=="string")sE(this,t)&&(e=e.concat(this.g.get(cs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Rr(this),this.i=null,t=cs(this,t),sE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function oE(t,e,n){iE(t,e),0<n.length&&(t.i=null,t.g.set(cs(t,e),gp(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function cs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function WA(t,e){e&&!t.j&&(Rr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(iE(this,r),oE(this,i,n))},t)),t.j=e}var qA=class{constructor(t,e){this.h=t,this.g=e}};function aE(t){this.l=t||KA,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ga&&G.g.Ga()&&G.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var KA=10;function lE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function uE(t){return t.h?1:t.g?t.g.size:0}function Hd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bp(t,e){t.g?t.g.add(e):t.h=e}function cE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}aE.prototype.cancel=function(){if(this.i=hE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function hE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return gp(t.i)}function Rp(){}Rp.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};Rp.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function GA(){this.g=new Rp}function QA(t,e,n){const r=n||"";try{nE(t,function(i,s){let o=i;Xo(i)&&(o=kp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function YA(t,e){const n=new $u;if(G.Image){const r=new Image;r.onload=Ma(Fa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ma(Fa,n,r,"TestLoadImage: error",!1,e),r.onabort=Ma(Fa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ma(Fa,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Fa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ra(t){this.l=t.ac||null,this.j=t.jb||!1}st(ra,Tp);ra.prototype.g=function(){return new Bu(this.l,this.j)};ra.prototype.i=function(t){return function(){return t}}({});function Bu(t,e){Ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Np,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}st(Bu,Ke);var Np=0;F=Bu.prototype;F.open=function(t,e){if(this.readyState!=Np)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ro(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ia(this)),this.readyState=Np};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ro(this)),this.g&&(this.readyState=3,Ro(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dE(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function dE(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ia(this):Ro(this),this.readyState==3&&dE(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,ia(this))};F.Ua=function(t){this.g&&(this.response=t,ia(this))};F.ga=function(){this.g&&ia(this)};function ia(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ro(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ro(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Bu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var XA=G.JSON.parse;function be(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fE,this.K=this.L=!1}st(be,Ke);var fE="",JA=/^https?$/i,ZA=["POST","PUT"];F=be.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():zd.g(),this.C=this.u?gy(this.u):gy(zd),this.g.onreadystatechange=dt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){wy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=G.FormData&&t instanceof G.FormData,!(0<=bw(ZA,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{gE(this),0<this.B&&((this.K=eb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.qa,this)):this.A=xp(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){wy(this,s)}};function eb(t){return Yi&&yA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof mp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function wy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,pE(t),Hu(t)}function pE(t){t.D||(t.D=!0,rt(t,"complete"),rt(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,rt(this,"complete"),rt(this,"abort"),Hu(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hu(this,!0)),be.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?mE(this):this.fb())};F.fb=function(){mE(this)};function mE(t){if(t.h&&typeof mp<"u"&&(!t.C[1]||An(t)!=4||t.aa()!=2)){if(t.v&&An(t)==4)xp(t.Ha,0,t);else if(rt(t,"readystatechange"),An(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(rE)[1]||null;if(!i&&G.self&&G.self.location){var s=G.self.location.protocol;i=s.substr(0,s.length-1)}r=!JA.test(i?i.toLowerCase():"")}n=r}if(n)rt(t,"complete"),rt(t,"success");else{t.m=6;try{var o=2<An(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",pE(t)}}finally{Hu(t)}}}}function Hu(t,e){if(t.g){gE(t);const n=t.g,r=t.C[0]?Vl:null;t.g=null,t.C=null,e||rt(t,"ready");try{n.onreadystatechange=r}catch{}}}function gE(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function An(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),XA(e)}};function Ey(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case fE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function yE(t){let e="";return vp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Dp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=yE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function bs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function vE(t){this.Ca=0,this.i=[],this.j=new $u,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=bs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=bs("baseRetryDelayMs",5e3,t),this.bb=bs("retryDelaySeedMs",1e4,t),this.$a=bs("forwardChannelMaxRetries",2,t),this.ta=bs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new aE(t&&t.concurrentRequestLimit),this.Fa=new GA,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=vE.prototype;F.ma=8;F.G=1;function Pp(t){if(wE(t),t.G==3){var e=t.U++,n=zn(t.F);_e(n,"SID",t.I),_e(n,"RID",e),_e(n,"TYPE","terminate"),sa(t,n),e=new ta(t,t.j,e,void 0),e.K=2,e.v=Vu(zn(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=CE(e.l,null),e.g.da(e.v)),e.F=Date.now(),na(e)}xE(t)}function Wu(t){t.g&&(Lp(t),t.g.cancel(),t.g=null)}function wE(t){Wu(t),t.u&&(G.clearTimeout(t.u),t.u=null),Gl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function qu(t){lE(t.h)||t.m||(t.m=!0,jw(t.Ja,t),t.C=0)}function tb(t,e){return uE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Zo(dt(t.Ja,t,e),IE(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ta(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Pw(s),Ow(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=EE(this,i,e),n=zn(this.F),_e(n,"RID",t),_e(n,"CVER",22),this.D&&_e(n,"X-HTTP-Session-Id",this.D),sa(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(yE(s)))+"&"+e:this.o&&Dp(n,this.o,s)),bp(this.h,i),this.Ya&&_e(n,"TYPE","init"),this.O?(_e(n,"$req",e),_e(n,"SID","null"),i.Z=!0,Vd(i,n,null)):Vd(i,n,e),this.G=2}}else this.G==3&&(t?Sy(this,t):this.i.length==0||lE(this.h)||Sy(this))};function Sy(t,e){var n;e?n=e.m:n=t.U++;const r=zn(t.F);_e(r,"SID",t.I),_e(r,"RID",n),_e(r,"AID",t.T),sa(t,r),t.o&&t.s&&Dp(r,t.o,t.s),n=new ta(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=EE(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),bp(t.h,n),Vd(n,r,e)}function sa(t,e){t.ia&&vp(t.ia,function(n,r){_e(e,r,n)}),t.l&&nE({},function(n,r){_e(e,r,n)})}function EE(t,e,n){n=Math.min(t.i.length,n);var r=t.l?dt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{QA(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function SE(t){t.g||t.u||(t.Z=1,jw(t.Ia,t),t.A=0)}function Op(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Zo(dt(t.Ia,t),IE(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,_E(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Zo(dt(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,wt(10),Wu(this),_E(this))};function Lp(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function _E(t){t.g=new ta(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=zn(t.sa);_e(e,"RID","rpc"),_e(e,"SID",t.I),_e(e,"CI",t.L?"0":"1"),_e(e,"AID",t.T),_e(e,"TYPE","xmlhttp"),sa(t,e),t.o&&t.s&&Dp(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Vu(zn(e)),n.s=null,n.P=!0,Jw(n,t)}F.cb=function(){this.v!=null&&(this.v=null,Wu(this),Op(this),wt(19))};function Gl(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function kE(t,e){var n=null;if(t.g==e){Gl(t),Lp(t),t.g=null;var r=2}else if(Hd(t.h,e))n=e.D,cE(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Fu(),rt(r,new Gw(r,n)),qu(t)}else SE(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&tb(t,e)||r==2&&Op(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:jr(t,5);break;case 4:jr(t,10);break;case 3:jr(t,6);break;default:jr(t,2)}}}function IE(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function jr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=dt(t.kb,t);n||(n=new Wr("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||ql(n,"https"),Vu(n)),YA(n.toString(),r)}else wt(2);t.G=0,t.l&&t.l.va(e),xE(t),wE(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function xE(t){if(t.G=0,t.la=[],t.l){const e=hE(t.h);(e.length!=0||t.i.length!=0)&&(cy(t.la,e),cy(t.la,t.i),t.h.i.length=0,gp(t.i),t.i.length=0),t.l.ua()}}function TE(t,e,n){var r=n instanceof Wr?zn(n):new Wr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Kl(r,r.m);else{var i=G.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Wr(null,void 0);r&&ql(s,r),e&&(s.g=e),i&&Kl(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&_e(r,n,e),_e(r,"VER",t.ma),sa(t,r),r}function CE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new be(new ra({jb:!0})):new be(t.ra),e.Ka(t.H),e}function AE(){}F=AE.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function Ql(){if(Yi&&!(10<=Number(vA)))throw Error("Environmental error: no available transport.")}Ql.prototype.g=function(t,e){return new $t(t,e)};function $t(t,e){Ke.call(this),this.g=new vE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Bl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new hs(this)}st($t,Ke);$t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;wt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=TE(t,null,t.V),qu(t)};$t.prototype.close=function(){Pp(this.g)};$t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=kp(t),t=n);e.i.push(new qA(e.ab++,t)),e.G==3&&qu(e)};$t.prototype.M=function(){this.g.l=null,delete this.j,Pp(this.g),delete this.g,$t.X.M.call(this)};function bE(t){Cp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}st(bE,Cp);function RE(){Ap.call(this),this.status=1}st(RE,Ap);function hs(t){this.g=t}st(hs,AE);hs.prototype.xa=function(){rt(this.g,"a")};hs.prototype.wa=function(t){rt(this.g,new bE(t))};hs.prototype.va=function(t){rt(this.g,new RE)};hs.prototype.ua=function(){rt(this.g,"b")};Ql.prototype.createWebChannel=Ql.prototype.g;$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;Uu.NO_ERROR=0;Uu.TIMEOUT=8;Uu.HTTP_ERROR=6;Qw.COMPLETE="complete";Yw.EventType=ea;ea.OPEN="a";ea.CLOSE="b";ea.ERROR="c";ea.MESSAGE="d";Ke.prototype.listen=Ke.prototype.N;be.prototype.listenOnce=be.prototype.O;be.prototype.getLastError=be.prototype.Oa;be.prototype.getLastErrorCode=be.prototype.Ea;be.prototype.getStatus=be.prototype.aa;be.prototype.getResponseJson=be.prototype.Sa;be.prototype.getResponseText=be.prototype.fa;be.prototype.send=be.prototype.da;be.prototype.setWithCredentials=be.prototype.Ka;var nb=function(){return new Ql},rb=function(){return Fu()},kh=Uu,ib=Qw,sb=hi,_y={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ob=ra,Ua=Yw,ab=be;const ky="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let ds="9.14.0";/**
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
 */const ni=new bu("@firebase/firestore");function Iy(){return ni.logLevel}function U(t,...e){if(ni.logLevel<=ae.DEBUG){const n=e.map(Mp);ni.debug(`Firestore (${ds}): ${t}`,...n)}}function jn(t,...e){if(ni.logLevel<=ae.ERROR){const n=e.map(Mp);ni.error(`Firestore (${ds}): ${t}`,...n)}}function Wd(t,...e){if(ni.logLevel<=ae.WARN){const n=e.map(Mp);ni.warn(`Firestore (${ds}): ${t}`,...n)}}function Mp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function ye(t,e){t||Y()}function X(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class NE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class ub{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cb{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new NE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new ut(e)}}class hb{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ye(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class db{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new hb(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pb{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.A=n.token,new fb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function mb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class DE{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=mb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Xi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new je(0,0))}static max(){return new ee(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class No{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return No.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof No?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends No{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const gb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends No{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return gb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ke.fromString(e))}static fromName(e){return new j(ke.fromString(e).popFirst(5))}static empty(){return new j(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ke(e.slice()))}}function yb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new kr(i,j.empty(),e)}function vb(t){return new kr(t.readTime,t.key,-1)}class kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new kr(ee.min(),j.empty(),-1)}static max(){return new kr(ee.max(),j.empty(),-1)}}function wb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */async function oa(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==Eb)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function aa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class $p{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function xy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function PE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */$p.at=-1;class Be{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new za(this.root,e,this.comparator,!1)}getReverseIterator(){return new za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new za(this.root,e,this.comparator,!0)}}class za{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:et.RED,this.left=i!=null?i:et.EMPTY,this.right=s!=null?s:et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new et(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,r,i){return this}insert(t,e,n){return new et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ty(this.data.getIterator())}getIteratorFrom(e){return new Ty(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class Ty{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kt{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new Ve(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new gt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const _b=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(ye(!!t),typeof t=="string"){let e=0;const n=_b.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ji(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */function OE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function LE(t){const e=t.mapValue.fields.__previous_value__;return OE(e)?LE(e):e}function Do(t){const e=Ir(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class kb{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Po{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Po&&e.projectId===this.projectId&&e.database===this.database}}function Ku(t){return t==null}function Yl(t){return t===0&&1/t==-1/0}function Ib(t){return typeof t=="number"&&Number.isInteger(t)&&!Yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const ja={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?OE(t)?4:xb(t)?9007199254740991:10:Y()}function kn(t,e){if(t===e)return!0;const n=ri(t);if(n!==ri(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Do(t).isEqual(Do(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ir(r.timestampValue),o=Ir(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ji(r.bytesValue).isEqual(Ji(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Le(r.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Le(r.integerValue)===Le(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Le(r.doubleValue),o=Le(i.doubleValue);return s===o?Yl(s)===Yl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Xi(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(xy(s)!==xy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!kn(s[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Oo(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function Zi(t,e){if(t===e)return 0;const n=ri(t),r=ri(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Le(i.integerValue||i.doubleValue),a=Le(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Cy(t.timestampValue,e.timestampValue);case 4:return Cy(Do(t),Do(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ji(i),a=Ji(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ce(o[l],a[l]);if(u!==0)return u}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ce(Le(i.latitude),Le(s.latitude));return o!==0?o:ce(Le(i.longitude),Le(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Zi(o[l],a[l]);if(u)return u}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ja.mapValue&&s===ja.mapValue)return 0;if(i===ja.mapValue)return 1;if(s===ja.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ce(a[c],u[c]);if(h!==0)return h;const d=Zi(o[a[c]],l[u[c]]);if(d!==0)return d}return ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Cy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Ir(t),r=Ir(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function Ui(t){return qd(t)}function qd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ir(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ji(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=qd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${qd(r.fields[a])}`;return s+"}"}(t.mapValue):Y();var e,n}function Kd(t){return!!t&&"integerValue"in t}function Fp(t){return!!t&&"arrayValue"in t}function Ay(t){return!!t&&"nullValue"in t}function by(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function il(t){return!!t&&"mapValue"in t}function Js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!il(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=ht.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Js(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());il(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];il(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new xt(Js(this.value))}}function ME(t){const e=[];return di(t.fields,(n,r)=>{const i=new ht([n]);if(il(r)){const s=ME(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Kt(e)}/**
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
 */class tt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new tt(e,0,ee.min(),ee.min(),xt.empty(),0)}static newFoundDocument(e,n,r){return new tt(e,1,n,ee.min(),r,0)}static newNoDocument(e,n){return new tt(e,2,n,ee.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,ee.min(),xt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tb{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Ry(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Tb(t,e,n,r,i,s,o)}function Up(t){const e=X(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ui(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ku(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ui(r)).join(",")),e.ht=n}return e.ht}function Cb(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ui(r.value)}`;var r}).join(", ")}]`),Ku(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ui(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ui(n)).join(",")),`Target(${e})`}function zp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Lb(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!kn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dy(t.startAt,e.startAt)&&Dy(t.endAt,e.endAt)}function Gd(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ct extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new Ab(e,n,r):n==="array-contains"?new Nb(e,r):n==="in"?new Db(e,r):n==="not-in"?new Pb(e,r):n==="array-contains-any"?new Ob(e,r):new Ct(e,n,r)}static lt(e,n,r){return n==="in"?new bb(e,r):new Rb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Zi(n,this.value)):n!==null&&ri(this.value)===ri(n)&&this.ft(Zi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ab extends Ct{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.ft(n)}}class bb extends Ct{constructor(e,n){super(e,"in",n),this.keys=$E("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Rb extends Ct{constructor(e,n){super(e,"not-in",n),this.keys=$E("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $E(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class Nb extends Ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fp(n)&&Oo(n.arrayValue,this.value)}}class Db extends Ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oo(this.value.arrayValue,n)}}class Pb extends Ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Oo(this.value.arrayValue,n)}}class Ob extends Ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Oo(this.value.arrayValue,r))}}class Xl{constructor(e,n){this.position=e,this.inclusive=n}}class Zs{constructor(e,n="asc"){this.field=e,this.dir=n}}function Lb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ny(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Zi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function Mb(t,e,n,r,i,s,o,a){return new Gu(t,e,n,r,i,s,o,a)}function jp(t){return new Gu(t)}function Py(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $b(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Fb(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Ub(t){return t.collectionGroup!==null}function Lo(t){const e=X(t);if(e._t===null){e._t=[];const n=Fb(e),r=$b(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Zs(n)),e._t.push(new Zs(ht.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Zs(ht.keyField(),s))}}}return e._t}function Vn(t){const e=X(t);if(!e.wt)if(e.limitType==="F")e.wt=Ry(e.path,e.collectionGroup,Lo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Lo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Zs(s.field,o))}const r=e.endAt?new Xl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Xl(e.startAt.position,e.startAt.inclusive):null;e.wt=Ry(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Qd(t,e,n){return new Gu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qu(t,e){return zp(Vn(t),Vn(e))&&t.limitType===e.limitType}function FE(t){return`${Up(Vn(t))}|lt:${t.limitType}`}function Yd(t){return`Query(target=${Cb(Vn(t))}; limitType=${t.limitType})`}function Vp(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):j.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Ny(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Lo(n),r)||n.endAt&&!function(i,s,o){const a=Ny(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Lo(n),r))}(t,e)}function zb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function UE(t){return(e,n)=>{let r=!1;for(const i of Lo(t)){const s=jb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function jb(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Zi(a,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */function zE(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yl(e)?"-0":e}}function jE(t){return{integerValue:""+t}}function Vb(t,e){return Ib(e)?jE(e):zE(t,e)}/**
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
 */class Yu{constructor(){this._=void 0}}function Bb(t,e,n){return t instanceof Jl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Mo?BE(t,e):t instanceof $o?HE(t,e):function(r,i){const s=VE(r,i),o=Oy(s)+Oy(r.yt);return Kd(s)&&Kd(r.yt)?jE(o):zE(r.It,o)}(t,e)}function Hb(t,e,n){return t instanceof Mo?BE(t,e):t instanceof $o?HE(t,e):n}function VE(t,e){return t instanceof Zl?Kd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Jl extends Yu{}class Mo extends Yu{constructor(e){super(),this.elements=e}}function BE(t,e){const n=WE(e);for(const r of t.elements)n.some(i=>kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class $o extends Yu{constructor(e){super(),this.elements=e}}function HE(t,e){let n=WE(e);for(const r of t.elements)n=n.filter(i=>!kn(i,r));return{arrayValue:{values:n}}}class Zl extends Yu{constructor(e,n){super(),this.It=e,this.yt=n}}function Oy(t){return Le(t.integerValue||t.doubleValue)}function WE(t){return Fp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Wb(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Mo&&r instanceof Mo||n instanceof $o&&r instanceof $o?Xi(n.elements,r.elements,kn):n instanceof Zl&&r instanceof Zl?kn(n.yt,r.yt):n instanceof Jl&&r instanceof Jl}(t.transform,e.transform)}class qb{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xu{}function qE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bp(t.key,an.none()):new la(t.key,t.data,an.none());{const n=t.data,r=xt.empty();let i=new Ve(ht.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nr(t.key,r,new Kt(i.toArray()),an.none())}}function Kb(t,e,n){t instanceof la?function(r,i,s){const o=r.value.clone(),a=My(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(r,i,s){if(!sl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=My(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(KE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function eo(t,e,n,r){return t instanceof la?function(i,s,o,a){if(!sl(i.precondition,s))return o;const l=i.value.clone(),u=$y(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(i,s,o,a){if(!sl(i.precondition,s))return o;const l=$y(i.fieldTransforms,a,s),u=s.data;return u.setAll(KE(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return sl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Gb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=VE(r.transform,i||null);s!=null&&(n===null&&(n=xt.empty()),n.set(r.field,s))}return n||null}function Ly(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Xi(n,r,(i,s)=>Wb(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class la extends Xu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nr extends Xu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function KE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function My(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Hb(o,a,n[i]))}return r}function $y(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Bb(s,o,e))}return r}class Bp extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qb extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Yb{constructor(e){this.count=e}}/**
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
 */var Oe,ie;function Xb(t){switch(t){default:return Y();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function GE(t){if(t===void 0)return jn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Oe.OK:return I.OK;case Oe.CANCELLED:return I.CANCELLED;case Oe.UNKNOWN:return I.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return I.INTERNAL;case Oe.UNAVAILABLE:return I.UNAVAILABLE;case Oe.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Oe.NOT_FOUND:return I.NOT_FOUND;case Oe.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Oe.ABORTED:return I.ABORTED;case Oe.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Oe.DATA_LOSS:return I.DATA_LOSS;default:return Y()}}(ie=Oe||(Oe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return PE(this.inner)}size(){return this.innerSize}}/**
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
 */const Jb=new Be(j.comparator);function Bn(){return Jb}const QE=new Be(j.comparator);function Us(...t){let e=QE;for(const n of t)e=e.insert(n.key,n);return e}function YE(t){let e=QE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vr(){return to()}function XE(){return to()}function to(){return new fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Zb=new Be(j.comparator),eR=new Ve(j.comparator);function te(...t){let e=eR;for(const n of t)e=e.add(n);return e}const tR=new Ve(ce);function JE(){return tR}/**
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
 */class Ju{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ju(ee.min(),i,JE(),Bn(),te())}}class ua{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ua(r,n,te(),te(),te())}}/**
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
 */class ol{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class ZE{constructor(e,n){this.targetId=e,this.At=n}}class eS{constructor(e,n,r=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Fy{constructor(){this.Rt=0,this.bt=zy(),this.Pt=gt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=te(),n=te(),r=te();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new ua(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=zy()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class nR{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Bn(),this.qt=Uy(),this.Kt=new Ve(ce)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Gd(s))if(r===0){const o=new j(s.path);this.jt(n,o,tt.newNoDocument(o,ee.min()))}else ye(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Gd(a.target)){const l=new j(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,tt.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=te();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Ju(e,n,this.Kt,this.Ut,r);return this.Ut=Bn(),this.qt=Uy(),this.Kt=new Ve(ce),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Fy,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ve(ce),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Fy),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Uy(){return new Be(j.comparator)}function zy(){return new Be(j.comparator)}/**
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
 */const rR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),iR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class sR{constructor(e,n){this.databaseId=e,this.gt=n}}function eu(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tS(t,e){return t.gt?e.toBase64():e.toUint8Array()}function oR(t,e){return eu(t,e.toTimestamp())}function On(t){return ye(!!t),ee.fromTimestamp(function(e){const n=Ir(e);return new je(n.seconds,n.nanos)}(t))}function Hp(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function nS(t){const e=ke.fromString(t);return ye(sS(e)),e}function Xd(t,e){return Hp(t.databaseId,e.path)}function Ih(t,e){const n=nS(e);if(n.get(1)!==t.databaseId.projectId)throw new z(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(rS(n))}function Jd(t,e){return Hp(t.databaseId,e)}function aR(t){const e=nS(t);return e.length===4?ke.emptyPath():rS(e)}function Zd(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rS(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jy(t,e,n){return{name:Xd(t,e),fields:n.value.mapValue.fields}}function lR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(ye(u===void 0||typeof u=="string"),gt.fromBase64String(u||"")):(ye(u===void 0||u instanceof Uint8Array),gt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:GE(l.code);return new z(u,l.message||"")}(o);n=new eS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ih(t,r.document.name),s=On(r.document.updateTime),o=new xt({mapValue:{fields:r.document.fields}}),a=tt.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ol(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ih(t,r.document),s=r.readTime?On(r.readTime):ee.min(),o=tt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ol([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ih(t,r.document),s=r.removedTargetIds||[];n=new ol([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new Yb(i),o=r.targetId;n=new ZE(o,s)}}return n}function uR(t,e){let n;if(e instanceof la)n={update:jy(t,e.key,e.value)};else if(e instanceof Bp)n={delete:Xd(t,e.key)};else if(e instanceof Nr)n={update:jy(t,e.key,e.data),updateMask:wR(e.fieldMask)};else{if(!(e instanceof Qb))return Y();n={verify:Xd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Jl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Mo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $o)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Zl)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:oR(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function cR(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?On(r.updateTime):On(i);return s.isEqual(ee.min())&&(s=On(i)),new qb(s,r.transformResults||[])}(n,e))):[]}function hR(t,e){return{documents:[Jd(t,e.path)]}}function dR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Jd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(by(h.value))return{unaryFilter:{field:gi(h.field),op:"IS_NAN"}};if(Ay(h.value))return{unaryFilter:{field:gi(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(by(h.value))return{unaryFilter:{field:gi(h.field),op:"IS_NOT_NAN"}};if(Ay(h.value))return{unaryFilter:{field:gi(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gi(h.field),op:gR(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:gi(c.field),direction:mR(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Ku(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function fR(t){let e=aR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=iS(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Zs(Ri(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ku(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Xl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Xl(d,h)}(n.endAt)),Mb(e,i,o,s,a,"F",l,u)}function pR(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function iS(t){return t?t.unaryFilter!==void 0?[vR(t)]:t.fieldFilter!==void 0?[yR(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>iS(e)).reduce((e,n)=>e.concat(n)):Y():[]}function mR(t){return rR[t]}function gR(t){return iR[t]}function gi(t){return{fieldPath:t.canonicalString()}}function Ri(t){return ht.fromServerFormat(t.fieldPath)}function yR(t){return Ct.create(Ri(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}function vR(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ri(t.unaryFilter.field);return Ct.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ri(t.unaryFilter.field);return Ct.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ri(t.unaryFilter.field);return Ct.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ri(t.unaryFilter.field);return Ct.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}function wR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ER{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Kb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=eo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=eo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=XE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=qE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Xi(this.mutations,e.mutations,(n,r)=>Ly(n,r))&&Xi(this.baseMutations,e.baseMutations,(n,r)=>Ly(n,r))}}class Wp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=Zb;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wp(e,n,r,i)}}/**
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
 */class qr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=gt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class _R{constructor(e){this.re=e}}function kR(t){const e=fR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qd(e,e.limit,"L"):e}/**
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
 */class IR{constructor(){this.Ye=new xR}addToCollectionParentIndex(e,n){return this.Ye.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(kr.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(kr.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class xR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ve(ke.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(ke.comparator)).toArray()}}/**
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
 */class es{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new es(0)}static vn(){return new es(-1)}}/**
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
 */class TR{constructor(){this.changes=new fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class CR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class AR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&eo(r.mutation,i,Kt.empty(),je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Vr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Us();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Bn();const o=to(),a=to();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Nr)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),eo(c.mutation,u,c.mutation.getFieldMask(),je.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new CR(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=to();let i=new Be((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Kt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=XE();c.forEach(d=>{if(!s.has(d)){const m=qE(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ub(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(Vr());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,te())).next(c=>({batchId:a,changes:YE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=Us();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Us();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(u,c){return new Gu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,tt.newInvalidDocument(u)))});let o=Us();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&eo(u.mutation,l,Kt.empty(),je.now()),Vp(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):T.resolve(tt.newInvalidDocument(n))}}/**
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
 */class bR{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:On(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:kR(r.bundledQuery),readTime:On(r.readTime)}}(n)),T.resolve()}}/**
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
 */class RR{constructor(){this.overlays=new Be(j.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=Vr(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Be((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Vr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Vr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SR(n,r));let s=this.es.get(n);s===void 0&&(s=te(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class qp{constructor(){this.ns=new Ve(He.ss),this.rs=new Ve(He.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new He(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new He(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new j(new ke([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new j(new ke([])),r=new He(n,e),i=new He(n,e+1);let s=te();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return j.comparator(e.key,n.key)||ce(e._s,n._s)}static os(e,n){return ce(e._s,n._s)||j.comparator(e.key,n.key)}}/**
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
 */class NR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ve(He.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ER(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new He(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ve(ce);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),T.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new He(new j(s),0);let a=new Ve(ce);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return T.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new He(n,0),i=this.gs.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class DR{constructor(e){this.Es=e,this.docs=new Be(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),T.resolve(r)}getAllFromCollection(e,n,r){let i=Bn();const s=new j(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||wb(vb(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,r,i){Y()}As(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new PR(this)}getSize(e){return T.resolve(this.size)}}class PR extends TR{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class OR{constructor(e){this.persistence=e,this.Rs=new fs(n=>Up(n),zp),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.bs=0,this.Ps=new qp,this.targetCount=0,this.vs=es.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new es(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
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
 */class LR{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new $p(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new OR(this),this.indexManager=new IR,this.remoteDocumentCache=function(r){return new DR(r)}(r=>this.referenceDelegate.xs(r)),this.It=new _R(n),this.Ns=new bR(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new NR(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new MR(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return T.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class MR extends Sb{constructor(e){super(),this.currentSequenceNumber=e}}class Kp{constructor(e){this.persistence=e,this.Fs=new qp,this.$s=null}static Bs(e){return new Kp(e)}get Ls(){if(this.$s)return this.$s;throw Y()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,r=>{const i=j.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Gp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gp(e,n.fromCache,r,i)}}/**
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
 */class $R{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Py(n))return T.resolve(null);let r=Vn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qd(n,null,"F"),r=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Qd(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return Py(n)||i.isEqual(ee.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(Iy()<=ae.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yd(n)),this.Bi(e,o,n,yb(i,-1)))})}Fi(e,n){let r=new Ve(UE(e));return n.forEach((i,s)=>{Vp(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return Iy()<=ae.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Yd(n)),this.Ni.getDocumentsMatchingQuery(e,n,kr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class FR{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Be(ce),this.qi=new fs(s=>Up(s),zp),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AR(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function UR(t,e,n,r){return new FR(t,e,n,r)}async function oS(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function zR(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=T.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(g=>{const v=l.docVersions.get(m);ye(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=te();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function aS(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function jR(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(gt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(g,v,_){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,m,c)&&a.push(n.Cs.updateTargetData(s,m))});let l=Bn(),u=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(VR(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(ee.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function VR(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function BR(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function HR(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new qr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function ef(t,e,n){const r=X(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!aa(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Vy(t,e,n){const r=X(t);let i=ee.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=X(a),h=c.qi.get(u);return h!==void 0?T.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,Vn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:te())).next(a=>(WR(r,zb(e),a),{documents:a,Hi:s})))}function WR(t,e,n){let r=t.Ki.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class By{constructor(){this.activeTargetIds=JE()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qR{constructor(){this.Lr=new By,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new By,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class KR{qr(e){}shutdown(){}}/**
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
 */class Hy{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const GR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class QR{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class YR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);U("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(U("RestConnection","Received: ",l),l),l=>{throw Wd("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ds,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=GR[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new ab;a.setWithCredentials(!0),a.listenOnce(ib.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case kh.NO_ERROR:const c=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(c)),s(c);break;case kh.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new z(I.DEADLINE_EXCEEDED,"Request time out"));break;case kh.HTTP_ERROR:const h=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=(u=d)===null||u===void 0?void 0:u.error;if(m&&m.status&&m.message){const g=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(_)>=0?_:I.UNKNOWN}(m.status);o(new z(g,m.message))}else o(new z(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new z(I.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=nb(),o=rb(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ob({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");U("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new QR({Hr:g=>{h?U("Connection","Not sending because WebChannel is closed:",g):(c||(U("Connection","Opening WebChannel transport."),u.open(),c=!0),U("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),m=(g,v,_)=>{g.listen(v,p=>{try{_(p)}catch(f){setTimeout(()=>{throw f},0)}})};return m(u,Ua.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),m(u,Ua.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),d.io())}),m(u,Ua.EventType.ERROR,g=>{h||(h=!0,Wd("Connection","WebChannel transport errored:",g),d.io(new z(I.UNAVAILABLE,"The operation could not be completed")))}),m(u,Ua.EventType.MESSAGE,g=>{var v;if(!h){const _=g.data[0];ye(!!_);const p=_,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){U("Connection","WebChannel received error:",f);const y=f.status;let S=function(N){const D=Oe[N];if(D!==void 0)return GE(D)}(y),k=f.message;S===void 0&&(S=I.INTERNAL,k="Unknown error status: "+y+" with message "+f.message),h=!0,d.io(new z(S,k)),u.close()}else U("Connection","WebChannel received:",_),d.ro(_)}}),m(o,sb.STAT_EVENT,g=>{g.stat===_y.PROXY?U("Connection","Detected buffering proxy"):g.stat===_y.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function xh(){return typeof document<"u"?document:null}/**
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
 */function Zu(t){return new sR(t,!0)}class lS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class uS{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new lS(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new z(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XR extends uS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=lR(this.It,e),r=function(i){if(!("targetChange"in i))return ee.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ee.min():s.readTime?On(s.readTime):ee.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Zd(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Gd(a)?{documents:hR(i,a)}:{query:dR(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=tS(i,s.resumeToken):s.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=eu(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=pR(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Zd(this.It),n.removeTarget=e,this.Bo(n)}}class JR extends uS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=cR(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.Zo(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Zd(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uR(this.It,r))};this.Bo(n)}}/**
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
 */class ZR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new z(I.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(I.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(I.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class eN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(jn(n),this.ou=!1):U("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class tN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{fi(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=X(a);l._u.add(4),await ca(l),l.gu.set("Unknown"),l._u.delete(4),await ec(l)}(this))})}),this.gu=new eN(r,i)}}async function ec(t){if(fi(t))for(const e of t.wu)await e(!0)}async function ca(t){for(const e of t.wu)await e(!1)}function cS(t,e){const n=X(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Xp(n)?Yp(n):ps(n).ko()&&Qp(n,e))}function hS(t,e){const n=X(t),r=ps(n);n.du.delete(e),r.ko()&&dS(n,e),n.du.size===0&&(r.ko()?r.Fo():fi(n)&&n.gu.set("Unknown"))}function Qp(t,e){t.yu.Mt(e.targetId),ps(t).zo(e)}function dS(t,e){t.yu.Mt(e),ps(t).Ho(e)}function Yp(t){t.yu=new nR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),ps(t).start(),t.gu.uu()}function Xp(t){return fi(t)&&!ps(t).No()&&t.du.size>0}function fi(t){return X(t)._u.size===0}function fS(t){t.yu=void 0}async function nN(t){t.du.forEach((e,n)=>{Qp(t,e)})}async function rN(t,e){fS(t),Xp(t)?(t.gu.hu(e),Yp(t)):t.gu.set("Unknown")}async function iN(t,e,n){if(t.gu.set("Online"),e instanceof eS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await tu(t,r)}else if(e instanceof ol?t.yu.Gt(e):e instanceof ZE?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(ee.min()))try{const r=await aS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(gt.EMPTY_BYTE_STRING,l.snapshotVersion)),dS(i,a);const u=new qr(l.target,a,1,l.sequenceNumber);Qp(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await tu(t,r)}}async function tu(t,e,n){if(!aa(e))throw e;t._u.add(1),await ca(t),t.gu.set("Offline"),n||(n=()=>aS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ec(t)})}function pS(t,e){return e().catch(n=>tu(t,n,e))}async function tc(t){const e=X(t),n=xr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;sN(e);)try{const i=await BR(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,oN(e,i)}catch(i){await tu(e,i)}mS(e)&&gS(e)}function sN(t){return fi(t)&&t.fu.length<10}function oN(t,e){t.fu.push(e);const n=xr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function mS(t){return fi(t)&&!xr(t).No()&&t.fu.length>0}function gS(t){xr(t).start()}async function aN(t){xr(t).eu()}async function lN(t){const e=xr(t);for(const n of t.fu)e.Xo(n.mutations)}async function uN(t,e,n){const r=t.fu.shift(),i=Wp.from(r,e,n);await pS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await tc(t)}async function cN(t,e){e&&xr(t).Yo&&await async function(n,r){if(i=r.code,Xb(i)&&i!==I.ABORTED){const s=n.fu.shift();xr(n).Mo(),await pS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await tc(n)}var i}(t,e),mS(t)&&gS(t)}async function Wy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=fi(n);n._u.add(3),await ca(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ec(n)}async function hN(t,e){const n=X(t);e?(n._u.delete(2),await ec(n)):e||(n._u.add(2),await ca(n),n.gu.set("Unknown"))}function ps(t){return t.pu||(t.pu=function(e,n,r){const i=X(e);return i.su(),new XR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:nN.bind(null,t),Zr:rN.bind(null,t),Wo:iN.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Xp(t)?Yp(t):t.gu.set("Unknown")):(await t.pu.stop(),fS(t))})),t.pu}function xr(t){return t.Iu||(t.Iu=function(e,n,r){const i=X(e);return i.su(),new JR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:aN.bind(null,t),Zr:cN.bind(null,t),tu:lN.bind(null,t),Zo:uN.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await tc(t)):(await t.Iu.stop(),t.fu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Jp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Jp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zp(t,e){if(jn("AsyncQueue",`${e}: ${t}`),aa(t))return new z(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class zi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Us(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class qy{constructor(){this.Tu=new Be(j.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):Y():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ts{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ts(e,n,zi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class dN{constructor(){this.Au=void 0,this.listeners=[]}}class fN{constructor(){this.queries=new fs(e=>FE(e),Qu),this.onlineState="Unknown",this.Ru=new Set}}async function yS(t,e){const n=X(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new dN),i)try{s.Au=await n.onListen(r)}catch(o){const a=Zp(o,`Initialization of query '${Yd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&em(n)}async function vS(t,e){const n=X(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function pN(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&em(n)}function mN(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function em(t){t.Ru.forEach(e=>{e.next()})}class wS{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class ES{constructor(e){this.key=e}}class SS{constructor(e){this.key=e}}class gN{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=te(),this.mutatedKeys=te(),this.Gu=UE(e),this.Qu=new zi(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new qy,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=Vp(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let _=!1;d&&m?d.data.isEqual(m.data)?g!==v&&(r.track({type:3,doc:m}),_=!0):this.Hu(d,m)||(r.track({type:2,doc:m}),_=!0,(l&&this.Gu(m,l)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),_=!0):d&&!m&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(m?(o=o.add(m),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(h,d){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return m(h)-m(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new ts(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new qy,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=te(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new SS(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new ES(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=te();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ts.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class yN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vN{constructor(e){this.key=e,this.nc=!1}}class wN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new fs(a=>FE(a),Qu),this.rc=new Map,this.oc=new Set,this.uc=new Be(j.comparator),this.cc=new Map,this.ac=new qp,this.hc={},this.lc=new Map,this.fc=es.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function EN(t,e){const n=RN(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await HR(n.localStore,Vn(e));n.isPrimaryClient&&cS(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await SN(n,e,r,a==="current",o.resumeToken)}return i}async function SN(t,e,n,r,i){t._c=(h,d,m)=>async function(g,v,_,p){let f=v.view.Wu(_);f.$i&&(f=await Vy(g.localStore,v.query,!1).then(({documents:k})=>v.view.Wu(k,f)));const y=p&&p.targetChanges.get(v.targetId),S=v.view.applyChanges(f,g.isPrimaryClient,y);return Gy(g,v.targetId,S.Xu),S.snapshot}(t,h,d,m);const s=await Vy(t.localStore,e,!0),o=new gN(e,s.Hi),a=o.Wu(s.documents),l=ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Gy(t,n,u.Xu);const c=new yN(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function _N(t,e){const n=X(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Qu(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ef(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),hS(n.remoteStore,r.targetId),tf(n,r.targetId)}).catch(oa)):(tf(n,r.targetId),await ef(n.localStore,r.targetId,!0))}async function kN(t,e,n){const r=NN(t);try{const i=await function(s,o){const a=X(s),l=je.now(),u=o.reduce((d,m)=>d.add(m.key),te());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=Bn(),g=te();return a.Gi.getEntries(d,u).next(v=>{m=v,m.forEach((_,p)=>{p.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{c=v;const _=[];for(const p of o){const f=Gb(p,c.get(p.key).overlayedDocument);f!=null&&_.push(new Nr(p.key,f,ME(f.value.mapValue),an.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,_,o)}).next(v=>{h=v;const _=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,_)})}).then(()=>({batchId:h.batchId,changes:YE(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Be(ce)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await ha(r,i.changes),await tc(r.remoteStore)}catch(i){const s=Zp(i,"Failed to persist write");n.reject(s)}}async function _S(t,e){const n=X(t);try{const r=await jR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?ye(o.nc):i.removedDocuments.size>0&&(ye(o.nc),o.nc=!1))}),await ha(n,r,e)}catch(r){await oa(r)}}function Ky(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=X(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&em(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IN(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Be(j.comparator);o=o.insert(s,tt.newNoDocument(s,ee.min()));const a=te().add(s),l=new Ju(ee.min(),new Map,new Ve(ce),o,a);await _S(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),tm(r)}else await ef(r.localStore,e,!1).then(()=>tf(r,e,n)).catch(oa)}async function xN(t,e){const n=X(t),r=e.batch.batchId;try{const i=await zR(n.localStore,e);IS(n,r,null),kS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ha(n,i)}catch(i){await oa(i)}}async function TN(t,e,n){const r=X(t);try{const i=await function(s,o){const a=X(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ye(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);IS(r,e,n),kS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ha(r,i)}catch(i){await oa(i)}}function kS(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function IS(t,e,n){const r=X(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function tf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||xS(t,r)})}function xS(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(hS(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),tm(t))}function Gy(t,e,n){for(const r of n)r instanceof ES?(t.ac.addReference(r.key,e),CN(t,r)):r instanceof SS?(U("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||xS(t,r.key)):Y()}function CN(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(U("SyncEngine","New document in limbo: "+n),t.oc.add(r),tm(t))}function tm(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new j(ke.fromString(e)),r=t.fc.next();t.cc.set(r,new vN(n)),t.uc=t.uc.insert(n,r),cS(t.remoteStore,new qr(Vn(jp(n.path)),r,2,$p.at))}}async function ha(t,e,n){const r=X(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Gp.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=X(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(l,h=>T.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>T.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!aa(c))throw c;U("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),m=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(m);u.Ui=u.Ui.insert(h,g)}}}(r.localStore,s))}async function AN(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await oS(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new z(I.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ha(n,r.ji)}}function bN(t,e){const n=X(t),r=n.cc.get(e);if(r&&r.nc)return te().add(r.key);{let i=te();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function RN(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_S.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IN.bind(null,e),e.sc.Wo=pN.bind(null,e.eventManager),e.sc.wc=mN.bind(null,e.eventManager),e}function NN(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TN.bind(null,e),e}class DN{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Zu(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return UR(this.persistence,new $R,e.initialUser,this.It)}yc(e){return new LR(Kp.Bs,this.It)}gc(e){return new qR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class PN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ky(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AN.bind(null,this.syncEngine),await hN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new fN}createDatastore(e){const n=Zu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new YR(i));var i;return function(s,o,a,l){return new ZR(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Ky(this.syncEngine,a,0),o=Hy.C()?new Hy:new KR,new tN(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new wN(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);U("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ca(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function TS(t,e,n){if(!n)throw new z(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ON(t,e,n,r){if(e===!0&&r===!0)throw new z(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qy(t){if(!j.isDocumentKey(t))throw new z(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yy(t){if(j.isDocumentKey(t))throw new z(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function nm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nm(t);throw new z(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Xy=new Map;class Jy{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ON("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class nc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new lb;switch(n.type){case"gapi":const r=n.client;return new db(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xy.get(e);n&&(U("ComponentProvider","Removing Datastore"),Xy.delete(e),n.terminate())}(this),Promise.resolve()}}function LN(t,e,n,r={}){var i;const s=(t=Hn(t,nc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Wd("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ut.MOCK_USER;else{o=xT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new z(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ut(l)}t._authCredentials=new ub(new NE(o,a))}}/**
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
 */class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class rc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rc(this.firestore,e,this._query)}}class vr extends rc{constructor(e,n,r){super(e,n,jp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new j(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function MN(t,e,...n){if(t=$e(t),TS("collection","path",e),t instanceof nc){const r=ke.fromString(e,...n);return Yy(r),new vr(t,null,r)}{if(!(t instanceof Lt||t instanceof vr))throw new z(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Yy(r),new vr(t.firestore,null,r)}}function al(t,e,...n){if(t=$e(t),arguments.length===1&&(e=DE.R()),TS("doc","path",e),t instanceof nc){const r=ke.fromString(e,...n);return Qy(r),new Lt(t,null,new j(r))}{if(!(t instanceof Lt||t instanceof vr))throw new z(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Qy(r),new Lt(t.firestore,t instanceof vr?t.converter:null,new j(r))}}/**
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
 */class CS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class $N{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=DE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function FN(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await oS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function UN(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zN(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Wy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Wy(e.remoteStore,s)),t.onlineComponents=e}async function zN(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await FN(t,new DN)),t.offlineComponents}async function AS(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await UN(t,new PN)),t.onlineComponents}function jN(t){return AS(t).then(e=>e.syncEngine)}async function bS(t){const e=await AS(t),n=e.eventManager;return n.onListen=EN.bind(null,e.syncEngine),n.onUnlisten=_N.bind(null,e.syncEngine),n}function VN(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new CS({next:h=>{s.enqueueAndForget(()=>vS(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new z(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new z(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new wS(jp(o.path),u,{includeMetadataChanges:!0,Nu:!0});return yS(i,c)}(await bS(t),t.asyncQueue,e,n,r)),r.promise}function BN(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new CS({next:h=>{s.enqueueAndForget(()=>vS(i,c)),h.fromCache&&a.source==="server"?l.reject(new z(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new wS(o,u,{includeMetadataChanges:!0,Nu:!0});return yS(i,c)}(await bS(t),t.asyncQueue,e,n,r)),r.promise}class HN{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new lS(this,"async_queue_retry"),this.Wc=()=>{const n=xh();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=xh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=xh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Pn;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!aa(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw jn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Jp.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&Y()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class ms extends nc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new HN,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||RS(this),this._firestoreClient.terminate()}}function WN(t,e){const n=typeof t=="object"?t:cp(),r=typeof t=="string"?t:e||"(default)",i=ci(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_T("firestore");s&&LN(i,...s)}return i}function rm(t){return t._firestoreClient||RS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function RS(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new kb(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new $N(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ns(gt.fromBase64String(e))}catch(n){throw new z(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ns(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ic{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class im{constructor(e){this._methodName=e}}/**
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
 */class sm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const qN=/^__.*__$/;class KN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new la(e,this.data,n,this.fieldTransforms)}}class NS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function DS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class om{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new om(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return nu(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(DS(this.sa)&&qN.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class GN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Zu(e)}da(e,n,r,i=!1){return new om({sa:e,methodName:n,fa:r,path:ht.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function PS(t){const e=t._freezeSettings(),n=Zu(t._databaseId);return new GN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function QN(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);am("Data must be an object, but it was:",o,r);const a=OS(r,o);let l,u;if(s.merge)l=new Kt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=nf(e,h,n);if(!o.contains(d))throw new z(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);MS(c,d)||c.push(d)}l=new Kt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new KN(new xt(a),l,u)}class sc extends im{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sc}}function YN(t,e,n,r){const i=t.da(1,e,n);am("Data must be an object, but it was:",i,r);const s=[],o=xt.empty();di(r,(l,u)=>{const c=lm(e,l,n);u=$e(u);const h=i.ca(c);if(u instanceof sc)s.push(c);else{const d=oc(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Kt(s);return new NS(o,a,i.fieldTransforms)}function XN(t,e,n,r,i,s){const o=t.da(1,e,n),a=[nf(e,r,n)],l=[i];if(s.length%2!=0)throw new z(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(nf(e,s[d])),l.push(s[d+1]);const u=[],c=xt.empty();for(let d=a.length-1;d>=0;--d)if(!MS(u,a[d])){const m=a[d];let g=l[d];g=$e(g);const v=o.ca(m);if(g instanceof sc)u.push(m);else{const _=oc(g,v);_!=null&&(u.push(m),c.set(m,_))}}const h=new Kt(u);return new NS(c,h,o.fieldTransforms)}function oc(t,e){if(LS(t=$e(t)))return am("Unsupported field value:",e,t),OS(t,e);if(t instanceof im)return function(n,r){if(!DS(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=oc(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=$e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Vb(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=je.fromDate(n);return{timestampValue:eu(r.It,i)}}if(n instanceof je){const i=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:eu(r.It,i)}}if(n instanceof sm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ns)return{bytesValue:tS(r.It,n._byteString)};if(n instanceof Lt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${nm(n)}`)}(t,e)}function OS(t,e){const n={};return PE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(t,(r,i)=>{const s=oc(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function LS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof sm||t instanceof ns||t instanceof Lt||t instanceof im)}function am(t,e,n){if(!LS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=nm(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function nf(t,e,n){if((e=$e(e))instanceof ic)return e._internalPath;if(typeof e=="string")return lm(t,e);throw nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const JN=new RegExp("[~\\*/\\[\\]]");function lm(t,e,n){if(e.search(JN)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ic(...e.split("."))._internalPath}catch{throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(I.INVALID_ARGUMENT,a+t+l)}function MS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class $S{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(FS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ZN extends $S{data(){return super.data()}}function FS(t,e){return typeof e=="string"?lm(t,e):e instanceof ic?e._internalPath:e._delegate._internalPath}/**
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
 */function eD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class tD{convertValue(e,n="none"){switch(ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const r={};return di(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new sm(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=LE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Do(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);ye(sS(r));const i=new Po(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||jn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function nD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class US extends $S{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ll(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(FS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ll extends US{data(e={}){return super.data(e)}}class rD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new zs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ll(this._firestore,this._userDataWriter,r.key,r,new zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ll(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ll(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:iD(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function sD(t){t=Hn(t,Lt);const e=Hn(t.firestore,ms);return VN(rm(e),t._key).then(n=>cD(e,t,n))}class zS extends tD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function oD(t){t=Hn(t,rc);const e=Hn(t.firestore,ms),n=rm(e),r=new zS(e);return eD(t._query),BN(n,t._query).then(i=>new rD(e,r,t,i))}function aD(t,e,n,...r){t=Hn(t,Lt);const i=Hn(t.firestore,ms),s=PS(i);let o;return o=typeof(e=$e(e))=="string"||e instanceof ic?XN(s,"updateDoc",t._key,e,n,r):YN(s,"updateDoc",t._key,e),um(i,[o.toMutation(t._key,an.exists(!0))])}function lD(t){return um(Hn(t.firestore,ms),[new Bp(t._key,an.none())])}function uD(t,e){const n=Hn(t.firestore,ms),r=al(t),i=nD(t.converter,e);return um(n,[QN(PS(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,an.exists(!1))]).then(()=>r)}function um(t,e){return function(n,r){const i=new Pn;return n.asyncQueue.enqueueAndForget(async()=>kN(await jN(n),r,i)),i.promise}(rm(t),e)}function cD(t,e,n){const r=n.docs.get(e._key),i=new zS(t);return new US(t,i,e._key,r,new zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ds=n})(Yo),_n(new un("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ms(new cb(n.getProvider("auth-internal")),new pb(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Po(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Wt(ky,"3.7.3",t),Wt(ky,"3.7.3","esm2017")})();function cm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function jS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hD=jS,VS=new ui("auth","Firebase",jS());/**
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
 */const Zy=new bu("@firebase/auth");function ul(t,...e){Zy.logLevel<=ae.ERROR&&Zy.error(`Auth (${Yo}): ${t}`,...e)}/**
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
 */function cn(t,...e){throw hm(t,...e)}function En(t,...e){return hm(t,...e)}function dD(t,e,n){const r=Object.assign(Object.assign({},hD()),{[e]:n});return new ui("auth","Firebase",r).create(e,{appName:t.name})}function hm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return VS.create(t,...e)}function V(t,e,...n){if(!t)throw hm(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ul(e),new Error(e)}function Wn(t,e){t||bn(e)}/**
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
 */const e0=new Map;function Rn(t){Wn(t instanceof Function,"Expected a class definition");let e=e0.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,e0.set(t,e),e)}/**
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
 */function fD(t,e){const n=ci(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Io(s,e!=null?e:{}))return i;cn(i,"already-initialized")}return n.initialize({options:e})}function pD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function rf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mD(){return t0()==="http:"||t0()==="https:"}function t0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mD()||Q1()||"connection"in navigator)?navigator.onLine:!0}function yD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class da{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=pT()||mT()}get(){return gD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dm(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class BS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const wD=new da(3e4,6e4);function gs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ys(t,e,n,r,i={}){return HS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),BS.fetch()(WS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function HS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vD),e);try{const i=new ED(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Va(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Va(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Va(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Va(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dD(t,c,u);cn(t,c)}}catch(i){if(i instanceof hn)throw i;cn(t,"network-request-failed")}}async function fa(t,e,n,r,i={}){const s=await ys(t,e,n,r,i);return"mfaPendingCredential"in s&&cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function WS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?dm(t.config,i):`${t.config.apiScheme}://${i}`}class ED{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),wD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=En(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function SD(t,e){return ys(t,"POST","/v1/accounts:delete",e)}async function _D(t,e){return ys(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function no(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kD(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=fm(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:no(Th(i.auth_time)),issuedAtTime:no(Th(i.iat)),expirationTime:no(Th(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Th(t){return Number(t)*1e3}function fm(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return ul("JWT malformed, contained fewer than 3 sections"),null;try{const s=G1(r);return s?JSON.parse(s):(ul("Failed to decode base64 JWT payload"),null)}catch(s){return ul("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function ID(t){const e=fm(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&xD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class TD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ru(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fo(t,_D(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bD(s.providerUserInfo):[],a=AD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function CD(t){const e=$e(t);await ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bD(t){return t.map(e=>{var{providerId:n}=e,r=cm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function RD(t,e){const n=await HS(t,{},async()=>{const r=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=WS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",BS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ID(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await RD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Uo;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Uo,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
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
 */function Qn(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=cm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fo(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kD(this,e)}reload(){return CD(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ru(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fo(this,SD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:S,isAnonymous:k,providerData:N,stsTokenManager:D}=n;V(y&&D,e,"internal-error");const P=Uo.fromJSON(this.name,D);V(typeof y=="string",e,"internal-error"),Qn(h,e.name),Qn(d,e.name),V(typeof S=="boolean",e,"internal-error"),V(typeof k=="boolean",e,"internal-error"),Qn(m,e.name),Qn(g,e.name),Qn(v,e.name),Qn(_,e.name),Qn(p,e.name),Qn(f,e.name);const Z=new Kr({uid:y,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:k,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(Z.providerData=N.map(B=>Object.assign({},B))),_&&(Z._redirectEventId=_),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Uo;i.updateFromServerResponse(n);const s=new Kr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ru(s),s}}/**
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
 */class KS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}KS.type="NONE";const n0=KS;/**
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
 */function cl(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cl(this.userKey,i.apiKey,s),this.fullPersistenceKey=cl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(Rn(n0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rn(n0);const o=cl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Kr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ji(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ji(s,e,r))}}/**
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
 */function r0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JS(e))return"Blackberry";if(ZS(e))return"Webos";if(pm(e))return"Safari";if((e.includes("chrome/")||QS(e))&&!e.includes("edge/"))return"Chrome";if(XS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GS(t=mt()){return/firefox\//i.test(t)}function pm(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QS(t=mt()){return/crios\//i.test(t)}function YS(t=mt()){return/iemobile/i.test(t)}function XS(t=mt()){return/android/i.test(t)}function JS(t=mt()){return/blackberry/i.test(t)}function ZS(t=mt()){return/webos/i.test(t)}function ac(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ND(t=mt()){var e;return ac(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DD(){return gT()&&document.documentMode===10}function e_(t=mt()){return ac(t)||XS(t)||ZS(t)||JS(t)||/windows phone/i.test(t)||YS(t)}function PD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function t_(t,e=[]){let n;switch(t){case"Browser":n=r0(mt());break;case"Worker":n=`${r0(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yo}/${r}`}/**
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
 */class OD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class LD{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new i0(this),this.idTokenSubscription=new i0(this),this.beforeStateQueue=new OD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VS,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ru(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function pa(t){return $e(t)}class i0{constructor(e){this.auth=e,this.observer=null,this.addObserver=RT(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function MD(t,e,n){const r=pa(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=n_(e),{host:o,port:a}=$D(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||FD()}function n_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $D(t){const e=n_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:s0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:s0(o)}}}function s0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class mm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function UD(t,e){return ys(t,"POST","/v1/accounts:update",e)}/**
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
 */async function zD(t,e){return fa(t,"POST","/v1/accounts:signInWithPassword",gs(t,e))}async function jD(t,e){return ys(t,"POST","/v1/accounts:sendOobCode",gs(t,e))}async function VD(t,e){return jD(t,e)}/**
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
 */async function BD(t,e){return fa(t,"POST","/v1/accounts:signInWithEmailLink",gs(t,e))}async function HD(t,e){return fa(t,"POST","/v1/accounts:signInWithEmailLink",gs(t,e))}/**
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
 */class zo extends mm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new zo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return zD(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return BD(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return UD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return HD(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vi(t,e){return fa(t,"POST","/v1/accounts:signInWithIdp",gs(t,e))}/**
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
 */const WD="http://localhost";class ii extends mm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=cm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ii(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vi(e,n)}buildRequest(){const e={requestUri:WD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
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
 */function qD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KD(t){const e=Ls(Ms(t)).link,n=e?Ls(Ms(e)).deep_link_id:null,r=Ls(Ms(t)).deep_link_id;return(r?Ls(Ms(r)).link:null)||r||n||e||t}class gm{constructor(e){var n,r,i,s,o,a;const l=Ls(Ms(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=qD((i=l.mode)!==null&&i!==void 0?i:null);V(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=KD(e);try{return new gm(n)}catch{return null}}}/**
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
 */class vs{constructor(){this.providerId=vs.PROVIDER_ID}static credential(e,n){return zo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gm.parseLink(n);return V(r,"argument-error"),zo._fromEmailAndCode(e,r.code,r.tenantId)}}vs.PROVIDER_ID="password";vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class r_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ma extends r_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class er extends ma{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
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
 */class tr extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ii._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
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
 */class nr extends ma{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
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
 */class rr extends ma{constructor(){super("twitter.com")}static credential(e,n){return ii._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */async function GD(t,e){return fa(t,"POST","/v1/accounts:signUp",gs(t,e))}/**
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
 */class si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kr._fromIdTokenResponse(e,r,i),o=o0(r);return new si({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=o0(r);return new si({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function o0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class iu extends hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,iu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new iu(e,n,r,i)}}function i_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?iu._fromErrorAndOperation(t,s,e,r):s})}async function QD(t,e,n=!1){const r=await Fo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return si._forOperation(t,"link",r)}/**
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
 */async function YD(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Fo(t,i_(i,s,e,t),n);V(o.idToken,i,"internal-error");const a=fm(o.idToken);V(a,i,"internal-error");const{sub:l}=a;return V(t.uid===l,i,"user-mismatch"),si._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&cn(i,"user-mismatch"),o}}/**
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
 */async function s_(t,e,n=!1){const r="signIn",i=await i_(t,r,e),s=await si._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function XD(t,e){return s_(pa(t),e)}/**
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
 */function JD(t,e,n){var r;V(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),V(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(V(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(V(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function ZD(t,e,n){const r=$e(t),i={requestType:"PASSWORD_RESET",email:e};n&&JD(r,i,n),await VD(r,i)}async function eP(t,e,n){const r=pa(t),i=await GD(r,{returnSecureToken:!0,email:e,password:n}),s=await si._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function tP(t,e,n){return XD($e(t),vs.credential(e,n))}function nP(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function rP(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function iP(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function sP(t){return $e(t).signOut()}const su="__sak";/**
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
 */class o_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(su,"1"),this.storage.removeItem(su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function oP(){const t=mt();return pm(t)||ac(t)}const aP=1e3,lP=10;class a_ extends o_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oP()&&PD(),this.fallbackToPolling=e_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);DD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}a_.type="LOCAL";const uP=a_;/**
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
 */class l_ extends o_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}l_.type="SESSION";const u_=l_;/**
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
 */function cP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await cP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
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
 */function ym(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ym("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Sn(){return window}function dP(t){Sn().location.href=t}/**
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
 */function c_(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function fP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mP(){return c_()?self:null}/**
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
 */const h_="firebaseLocalStorageDb",gP=1,ou="firebaseLocalStorage",d_="fbase_key";class ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uc(t,e){return t.transaction([ou],e?"readwrite":"readonly").objectStore(ou)}function yP(){const t=indexedDB.deleteDatabase(h_);return new ga(t).toPromise()}function sf(){const t=indexedDB.open(h_,gP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ou,{keyPath:d_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ou)?e(r):(r.close(),await yP(),e(await sf()))})})}async function a0(t,e,n){const r=uc(t,!0).put({[d_]:e,value:n});return new ga(r).toPromise()}async function vP(t,e){const n=uc(t,!1).get(e),r=await new ga(n).toPromise();return r===void 0?null:r.value}function l0(t,e){const n=uc(t,!0).delete(e);return new ga(n).toPromise()}const wP=800,EP=3;class f_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return c_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(mP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fP(),!this.activeServiceWorker)return;this.sender=new hP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sf();return await a0(e,su,"1"),await l0(e,su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>a0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>l0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uc(i,!1).getAll();return new ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}f_.type="LOCAL";const SP=f_;/**
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
 */function _P(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=En("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_P().appendChild(r)})}function IP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new da(3e4,6e4);/**
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
 */function xP(t,e){return e?Rn(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vm extends mm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TP(t){return s_(t.auth,new vm(t),t.bypassAuthState)}function CP(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),YD(n,new vm(t),t.bypassAuthState)}async function AP(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),QD(n,new vm(t),t.bypassAuthState)}/**
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
 */class p_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TP;case"linkViaPopup":case"linkViaRedirect":return AP;case"reauthViaPopup":case"reauthViaRedirect":return CP;default:cn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bP=new da(2e3,1e4);class Ni extends p_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ni.currentPopupAction&&Ni.currentPopupAction.cancel(),Ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=ym();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,bP.get())};e()}}Ni.currentPopupAction=null;/**
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
 */const RP="pendingRedirect",hl=new Map;class NP extends p_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hl.get(this.auth._key());if(!e){try{const r=await DP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hl.set(this.auth._key(),e)}return this.bypassAuthState||hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DP(t,e){const n=LP(e),r=OP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function PP(t,e){hl.set(t._key(),e)}function OP(t){return Rn(t._redirectPersistence)}function LP(t){return cl(RP,t.config.apiKey,t.name)}async function MP(t,e,n=!1){const r=pa(t),i=xP(r,e),o=await new NP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $P=10*60*1e3;class FP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!m_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$P&&this.cachedEventUids.clear(),this.cachedEventUids.has(u0(e))}saveEventToCache(e){this.cachedEventUids.add(u0(e)),this.lastProcessedEventTime=Date.now()}}function u0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function m_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return m_(t);default:return!1}}/**
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
 */async function zP(t,e={}){return ys(t,"GET","/v1/projects",e)}/**
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
 */const jP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VP=/^https?/;async function BP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zP(t);for(const n of e)try{if(HP(n))return}catch{}cn(t,"unauthorized-domain")}function HP(t){const e=rf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VP.test(n))return!1;if(jP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const WP=new da(3e4,6e4);function c0(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qP(t){return new Promise((e,n)=>{var r,i,s;function o(){c0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{c0(),n(En(t,"network-request-failed"))},timeout:WP.get()})}if(!((i=(r=Sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Sn().gapi)===null||s===void 0)&&s.load)o();else{const a=IP("iframefcb");return Sn()[a]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},kP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw dl=null,e})}let dl=null;function KP(t){return dl=dl||qP(t),dl}/**
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
 */const GP=new da(5e3,15e3),QP="__/auth/iframe",YP="emulator/auth/iframe",XP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZP(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dm(e,YP):`https://${t.config.authDomain}/${QP}`,r={apiKey:e.apiKey,appName:t.name,v:Yo},i=JP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qo(r).slice(1)}`}async function eO(t){const e=await KP(t),n=Sn().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:ZP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),a=Sn().setTimeout(()=>{s(o)},GP.get());function l(){Sn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const tO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nO=500,rO=600,iO="_blank",sO="http://localhost";class h0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oO(t,e,n,r=nO,i=rO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=mt().toLowerCase();n&&(a=QS(u)?iO:n),GS(u)&&(e=e||sO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,g])=>`${d}${m}=${g},`,"");if(ND(u)&&a!=="_self")return aO(e||"",a),new h0(null);const h=window.open(e||"",a,c);V(h,t,"popup-blocked");try{h.focus()}catch{}return new h0(h)}function aO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lO="__/auth/handler",uO="emulator/auth/handler";function d0(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yo,eventId:i};if(e instanceof r_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof ma){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${cO(t)}?${Qo(a).slice(1)}`}function cO({config:t}){return t.emulator?dm(t,uO):`https://${t.authDomain}/${lO}`}/**
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
 */const Ch="webStorageSupport";class hO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=u_,this._completeRedirectFn=MP,this._overrideRedirectResult=PP}async _openPopup(e,n,r,i){var s;Wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=d0(e,n,r,rf(),i);return oO(e,o,ym())}async _openRedirect(e,n,r,i){return await this._originValidation(e),dP(d0(e,n,r,rf(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eO(e),r=new FP(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ch,{type:Ch},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ch];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e_()||pm()||ac()}}const dO=hO;var f0="@firebase/auth",p0="0.20.11";/**
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
 */class fO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mO(t){_n(new un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{V(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t_(t)},c=new LD(a,l,u);return pD(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_n(new un("auth-internal",e=>{const n=pa(e.getProvider("auth").getImmediate());return(r=>new fO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(f0,p0,pO(t)),Wt(f0,p0,"esm2017")}/**
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
 */const gO=5*60,yO=Z1("authIdTokenMaxAge")||gO;let m0=null;const vO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yO)return;const i=n==null?void 0:n.token;m0!==i&&(m0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wO(t=cp()){const e=ci(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fD(t,{popupRedirectResolver:dO,persistence:[SP,uP,u_]}),r=Z1("authTokenSyncURL");if(r){const s=vO(r);rP(n,s,()=>s(n.currentUser)),nP(n,o=>s(o))}const i=J1("auth");return i&&MD(n,`http://${i}`),n}mO("Browser");const EO="AIzaSyDJLEoAuOr25kvx4s_kJ_997bqyS6L67pc",SO="silvina-silberman-app.firebaseapp.com",_O="silvina-silberman-app",kO="silvina-silberman-app.appspot.com",IO="966120955897",xO="1:966120955897:web:712fc084e3461a4c3b6728",TO="G-L9SXFZSKDC",CO={apiKey:EO,authDomain:SO,projectId:_O,storageBucket:kO,messagingSenderId:IO,appId:xO,measurementId:TO},wm=rw(CO);nA(wm);const Ba=WN(wm),Rs=wO(wm),pi=A.exports.createContext();function AO(t){const e=MN(Ba,"products"),n=async v=>{const _=await oD(e);v(_.docs.map(p=>({...p.data(),id:p.id})))},r=async(v,_)=>{const p=await sD(al(Ba,"products",_));v(p.data())},i=async v=>{await uD(e,v)},s=async(v,_)=>{const p=al(Ba,"products",v);await aD(p,_)},o=async v=>{const _=al(Ba,"products",v);await lD(_)},[a,l]=A.exports.useState(null),[u,c]=A.exports.useState(!0),h=async(v,_)=>{await eP(Rs,v,_)},d=(v,_)=>{tP(Rs,v,_)},m=async v=>ZD(Rs,v),g=()=>{sP(Rs)};return A.exports.useEffect(()=>{const v=iP(Rs,_=>{_&&(_.displayName="Silvi"),l(_),c(!1)});return()=>v()},[]),w(pi.Provider,{value:{getProducts:n,getProductById:r,createProduct:i,updateProduct:s,deleteProduct:o,createAdminUser:h,loginAdminUser:d,resetPassword:m,logout:g,user:a,loadingUser:u},children:t.children})}var Em={exports:{}},fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm=Symbol.for("react.element"),_m=Symbol.for("react.portal"),cc=Symbol.for("react.fragment"),hc=Symbol.for("react.strict_mode"),dc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),bO=Symbol.for("react.server_context"),mc=Symbol.for("react.forward_ref"),gc=Symbol.for("react.suspense"),yc=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),wc=Symbol.for("react.lazy"),RO=Symbol.for("react.offscreen"),g_;g_=Symbol.for("react.module.reference");function Yt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Sm:switch(t=t.type,t){case cc:case dc:case hc:case gc:case yc:return t;default:switch(t=t&&t.$$typeof,t){case bO:case pc:case mc:case wc:case vc:case fc:return t;default:return e}}case _m:return e}}}fe.ContextConsumer=pc;fe.ContextProvider=fc;fe.Element=Sm;fe.ForwardRef=mc;fe.Fragment=cc;fe.Lazy=wc;fe.Memo=vc;fe.Portal=_m;fe.Profiler=dc;fe.StrictMode=hc;fe.Suspense=gc;fe.SuspenseList=yc;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(t){return Yt(t)===pc};fe.isContextProvider=function(t){return Yt(t)===fc};fe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sm};fe.isForwardRef=function(t){return Yt(t)===mc};fe.isFragment=function(t){return Yt(t)===cc};fe.isLazy=function(t){return Yt(t)===wc};fe.isMemo=function(t){return Yt(t)===vc};fe.isPortal=function(t){return Yt(t)===_m};fe.isProfiler=function(t){return Yt(t)===dc};fe.isStrictMode=function(t){return Yt(t)===hc};fe.isSuspense=function(t){return Yt(t)===gc};fe.isSuspenseList=function(t){return Yt(t)===yc};fe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===cc||t===dc||t===hc||t===gc||t===yc||t===RO||typeof t=="object"&&t!==null&&(t.$$typeof===wc||t.$$typeof===vc||t.$$typeof===fc||t.$$typeof===pc||t.$$typeof===mc||t.$$typeof===g_||t.getModuleId!==void 0)};fe.typeOf=Yt;(function(t){t.exports=fe})(Em);function NO(t){function e(R,O,L,K,E){for(var re=0,b=0,Ce=0,le=0,he,J,Ye=0,kt=0,oe,ot=oe=he=0,ue=0,Xe=0,ws=0,Je=0,va=L.length,Es=va-1,Jt,Q="",Ne="",Dc="",Pc="",Kn;ue<va;){if(J=L.charCodeAt(ue),ue===Es&&b+le+Ce+re!==0&&(b!==0&&(J=b===47?10:47),le=Ce=re=0,va++,Es++),b+le+Ce+re===0){if(ue===Es&&(0<Xe&&(Q=Q.replace(d,"")),0<Q.trim().length)){switch(J){case 32:case 9:case 59:case 13:case 10:break;default:Q+=L.charAt(ue)}J=59}switch(J){case 123:for(Q=Q.trim(),he=Q.charCodeAt(0),oe=1,Je=++ue;ue<va;){switch(J=L.charCodeAt(ue)){case 123:oe++;break;case 125:oe--;break;case 47:switch(J=L.charCodeAt(ue+1)){case 42:case 47:e:{for(ot=ue+1;ot<Es;++ot)switch(L.charCodeAt(ot)){case 47:if(J===42&&L.charCodeAt(ot-1)===42&&ue+2!==ot){ue=ot+1;break e}break;case 10:if(J===47){ue=ot+1;break e}}ue=ot}}break;case 91:J++;case 40:J++;case 34:case 39:for(;ue++<Es&&L.charCodeAt(ue)!==J;);}if(oe===0)break;ue++}switch(oe=L.substring(Je,ue),he===0&&(he=(Q=Q.replace(h,"").trim()).charCodeAt(0)),he){case 64:switch(0<Xe&&(Q=Q.replace(d,"")),J=Q.charCodeAt(1),J){case 100:case 109:case 115:case 45:Xe=O;break;default:Xe=fn}if(oe=e(O,Xe,oe,J,E+1),Je=oe.length,0<C&&(Xe=n(fn,Q,ws),Kn=a(3,oe,Xe,O,ve,Re,Je,J,E,K),Q=Xe.join(""),Kn!==void 0&&(Je=(oe=Kn.trim()).length)===0&&(J=0,oe="")),0<Je)switch(J){case 115:Q=Q.replace(N,o);case 100:case 109:case 45:oe=Q+"{"+oe+"}";break;case 107:Q=Q.replace(f,"$1 $2"),oe=Q+"{"+oe+"}",oe=W===1||W===2&&s("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=Q+oe,K===112&&(oe=(Ne+=oe,""))}else oe="";break;default:oe=e(O,n(O,Q,ws),oe,K,E+1)}Dc+=oe,oe=ws=Xe=ot=he=0,Q="",J=L.charCodeAt(++ue);break;case 125:case 59:if(Q=(0<Xe?Q.replace(d,""):Q).trim(),1<(Je=Q.length))switch(ot===0&&(he=Q.charCodeAt(0),he===45||96<he&&123>he)&&(Je=(Q=Q.replace(" ",":")).length),0<C&&(Kn=a(1,Q,O,R,ve,Re,Ne.length,K,E,K))!==void 0&&(Je=(Q=Kn.trim()).length)===0&&(Q="\0\0"),he=Q.charCodeAt(0),J=Q.charCodeAt(1),he){case 0:break;case 64:if(J===105||J===99){Pc+=Q+L.charAt(ue);break}default:Q.charCodeAt(Je-1)!==58&&(Ne+=i(Q,he,J,Q.charCodeAt(2)))}ws=Xe=ot=he=0,Q="",J=L.charCodeAt(++ue)}}switch(J){case 13:case 10:b===47?b=0:1+he===0&&K!==107&&0<Q.length&&(Xe=1,Q+="\0"),0<C*q&&a(0,Q,O,R,ve,Re,Ne.length,K,E,K),Re=1,ve++;break;case 59:case 125:if(b+le+Ce+re===0){Re++;break}default:switch(Re++,Jt=L.charAt(ue),J){case 9:case 32:if(le+re+b===0)switch(Ye){case 44:case 58:case 9:case 32:Jt="";break;default:J!==32&&(Jt=" ")}break;case 0:Jt="\\0";break;case 12:Jt="\\f";break;case 11:Jt="\\v";break;case 38:le+b+re===0&&(Xe=ws=1,Jt="\f"+Jt);break;case 108:if(le+b+re+yt===0&&0<ot)switch(ue-ot){case 2:Ye===112&&L.charCodeAt(ue-3)===58&&(yt=Ye);case 8:kt===111&&(yt=kt)}break;case 58:le+b+re===0&&(ot=ue);break;case 44:b+Ce+le+re===0&&(Xe=1,Jt+="\r");break;case 34:case 39:b===0&&(le=le===J?0:le===0?J:le);break;case 91:le+b+Ce===0&&re++;break;case 93:le+b+Ce===0&&re--;break;case 41:le+b+re===0&&Ce--;break;case 40:if(le+b+re===0){if(he===0)switch(2*Ye+3*kt){case 533:break;default:he=1}Ce++}break;case 64:b+Ce+le+re+ot+oe===0&&(oe=1);break;case 42:case 47:if(!(0<le+re+Ce))switch(b){case 0:switch(2*J+3*L.charCodeAt(ue+1)){case 235:b=47;break;case 220:Je=ue,b=42}break;case 42:J===47&&Ye===42&&Je+2!==ue&&(L.charCodeAt(Je+2)===33&&(Ne+=L.substring(Je,ue+1)),Jt="",b=0)}}b===0&&(Q+=Jt)}kt=Ye,Ye=J,ue++}if(Je=Ne.length,0<Je){if(Xe=O,0<C&&(Kn=a(2,Ne,Xe,R,ve,Re,Je,K,E,K),Kn!==void 0&&(Ne=Kn).length===0))return Pc+Ne+Dc;if(Ne=Xe.join(",")+"{"+Ne+"}",W*yt!==0){switch(W!==2||s(Ne,2)||(yt=0),yt){case 111:Ne=Ne.replace(S,":-moz-$1")+Ne;break;case 112:Ne=Ne.replace(y,"::-webkit-input-$1")+Ne.replace(y,"::-moz-$1")+Ne.replace(y,":-ms-input-$1")+Ne}yt=0}}return Pc+Ne+Dc}function n(R,O,L){var K=O.trim().split(_);O=K;var E=K.length,re=R.length;switch(re){case 0:case 1:var b=0;for(R=re===0?"":R[0]+" ";b<E;++b)O[b]=r(R,O[b],L).trim();break;default:var Ce=b=0;for(O=[];b<E;++b)for(var le=0;le<re;++le)O[Ce++]=r(R[le]+" ",K[b],L).trim()}return O}function r(R,O,L){var K=O.charCodeAt(0);switch(33>K&&(K=(O=O.trim()).charCodeAt(0)),K){case 38:return O.replace(p,"$1"+R.trim());case 58:return R.trim()+O.replace(p,"$1"+R.trim());default:if(0<1*L&&0<O.indexOf("\f"))return O.replace(p,(R.charCodeAt(0)===58?"":"$1")+R.trim())}return R+O}function i(R,O,L,K){var E=R+";",re=2*O+3*L+4*K;if(re===944){R=E.indexOf(":",9)+1;var b=E.substring(R,E.length-1).trim();return b=E.substring(0,R).trim()+b+";",W===1||W===2&&s(b,1)?"-webkit-"+b+b:b}if(W===0||W===2&&!s(E,1))return E;switch(re){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(Pe,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return b=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+b+"-webkit-"+E+"-ms-flex-pack"+b+E;case 1005:return g.test(E)?E.replace(m,":-webkit-")+E.replace(m,":-moz-")+E:E;case 1e3:switch(b=E.substring(13).trim(),O=b.indexOf("-")+1,b.charCodeAt(0)+b.charCodeAt(O)){case 226:b=E.replace(k,"tb");break;case 232:b=E.replace(k,"tb-rl");break;case 220:b=E.replace(k,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+b+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(O=(E=R).length-10,b=(E.charCodeAt(O)===33?E.substring(0,O):E).substring(R.indexOf(":",7)+1).trim(),re=b.charCodeAt(0)+(b.charCodeAt(7)|0)){case 203:if(111>b.charCodeAt(8))break;case 115:E=E.replace(b,"-webkit-"+b)+";"+E;break;case 207:case 102:E=E.replace(b,"-webkit-"+(102<re?"inline-":"")+"box")+";"+E.replace(b,"-webkit-"+b)+";"+E.replace(b,"-ms-"+b+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return b=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+b+"-ms-flex-"+b+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(P,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(P,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(B.test(R)===!0)return(b=R.substring(R.indexOf(":")+1)).charCodeAt(0)===115?i(R.replace("stretch","fill-available"),O,L,K).replace(":fill-available",":stretch"):E.replace(b,"-webkit-"+b)+E.replace(b,"-moz-"+b.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,L+K===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+E}return E}function s(R,O){var L=R.indexOf(O===1?":":"{"),K=R.substring(0,O!==3?L:10);return L=R.substring(L+1,R.length-1),H(O!==2?K:K.replace(Z,"$1"),L,O)}function o(R,O){var L=i(O,O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2));return L!==O+";"?L.replace(D," or ($1)").substring(4):"("+O+")"}function a(R,O,L,K,E,re,b,Ce,le,he){for(var J=0,Ye=O,kt;J<C;++J)switch(kt=Qe[J].call(c,R,Ye,L,K,E,re,b,Ce,le,he)){case void 0:case!1:case!0:case null:break;default:Ye=kt}if(Ye!==O)return Ye}function l(R){switch(R){case void 0:case null:C=Qe.length=0;break;default:if(typeof R=="function")Qe[C++]=R;else if(typeof R=="object")for(var O=0,L=R.length;O<L;++O)l(R[O]);else q=!!R|0}return l}function u(R){return R=R.prefix,R!==void 0&&(H=null,R?typeof R!="function"?W=1:(W=2,H=R):W=0),u}function c(R,O){var L=R;if(33>L.charCodeAt(0)&&(L=L.trim()),me=L,L=[me],0<C){var K=a(-1,O,L,L,ve,Re,0,0,0,0);K!==void 0&&typeof K=="string"&&(O=K)}var E=e(fn,L,O,0,0);return 0<C&&(K=a(-2,E,L,L,ve,Re,E.length,0,0,0),K!==void 0&&(E=K)),me="",yt=0,Re=ve=1,E}var h=/^\0+/g,d=/[\0\r\f]/g,m=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,_=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,N=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,P=/-self|flex-/g,Z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,Pe=/([^-])(image-set\()/,Re=1,ve=1,yt=0,W=1,fn=[],Qe=[],C=0,H=null,q=0,me="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var DO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function PO(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var OO=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,g0=PO(function(t){return OO.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),y_={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge=typeof Symbol=="function"&&Symbol.for,km=Ge?Symbol.for("react.element"):60103,Im=Ge?Symbol.for("react.portal"):60106,Ec=Ge?Symbol.for("react.fragment"):60107,Sc=Ge?Symbol.for("react.strict_mode"):60108,_c=Ge?Symbol.for("react.profiler"):60114,kc=Ge?Symbol.for("react.provider"):60109,Ic=Ge?Symbol.for("react.context"):60110,xm=Ge?Symbol.for("react.async_mode"):60111,xc=Ge?Symbol.for("react.concurrent_mode"):60111,Tc=Ge?Symbol.for("react.forward_ref"):60112,Cc=Ge?Symbol.for("react.suspense"):60113,LO=Ge?Symbol.for("react.suspense_list"):60120,Ac=Ge?Symbol.for("react.memo"):60115,bc=Ge?Symbol.for("react.lazy"):60116,MO=Ge?Symbol.for("react.block"):60121,$O=Ge?Symbol.for("react.fundamental"):60117,FO=Ge?Symbol.for("react.responder"):60118,UO=Ge?Symbol.for("react.scope"):60119;function zt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case km:switch(t=t.type,t){case xm:case xc:case Ec:case _c:case Sc:case Cc:return t;default:switch(t=t&&t.$$typeof,t){case Ic:case Tc:case bc:case Ac:case kc:return t;default:return e}}case Im:return e}}}function v_(t){return zt(t)===xc}pe.AsyncMode=xm;pe.ConcurrentMode=xc;pe.ContextConsumer=Ic;pe.ContextProvider=kc;pe.Element=km;pe.ForwardRef=Tc;pe.Fragment=Ec;pe.Lazy=bc;pe.Memo=Ac;pe.Portal=Im;pe.Profiler=_c;pe.StrictMode=Sc;pe.Suspense=Cc;pe.isAsyncMode=function(t){return v_(t)||zt(t)===xm};pe.isConcurrentMode=v_;pe.isContextConsumer=function(t){return zt(t)===Ic};pe.isContextProvider=function(t){return zt(t)===kc};pe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===km};pe.isForwardRef=function(t){return zt(t)===Tc};pe.isFragment=function(t){return zt(t)===Ec};pe.isLazy=function(t){return zt(t)===bc};pe.isMemo=function(t){return zt(t)===Ac};pe.isPortal=function(t){return zt(t)===Im};pe.isProfiler=function(t){return zt(t)===_c};pe.isStrictMode=function(t){return zt(t)===Sc};pe.isSuspense=function(t){return zt(t)===Cc};pe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ec||t===xc||t===_c||t===Sc||t===Cc||t===LO||typeof t=="object"&&t!==null&&(t.$$typeof===bc||t.$$typeof===Ac||t.$$typeof===kc||t.$$typeof===Ic||t.$$typeof===Tc||t.$$typeof===$O||t.$$typeof===FO||t.$$typeof===UO||t.$$typeof===MO)};pe.typeOf=zt;(function(t){t.exports=pe})(y_);var Tm=y_.exports,zO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},VO={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},w_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cm={};Cm[Tm.ForwardRef]=VO;Cm[Tm.Memo]=w_;function y0(t){return Tm.isMemo(t)?w_:Cm[t.$$typeof]||zO}var BO=Object.defineProperty,HO=Object.getOwnPropertyNames,v0=Object.getOwnPropertySymbols,WO=Object.getOwnPropertyDescriptor,qO=Object.getPrototypeOf,w0=Object.prototype;function E_(t,e,n){if(typeof e!="string"){if(w0){var r=qO(e);r&&r!==w0&&E_(t,r,n)}var i=HO(e);v0&&(i=i.concat(v0(e)));for(var s=y0(t),o=y0(e),a=0;a<i.length;++a){var l=i[a];if(!jO[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=WO(e,l);try{BO(t,l,u)}catch{}}}}return t}var KO=E_;function Nn(){return(Nn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var E0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},of=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Em.exports.typeOf(t)},au=Object.freeze([]),wr=Object.freeze({});function jo(t){return typeof t=="function"}function S0(t){return t.displayName||t.name||"Component"}function Am(t){return t&&typeof t.styledComponentId=="string"}var rs=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",bm=typeof window<"u"&&"HTMLElement"in window,GO=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function ya(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var QO=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&ya(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),fl=new Map,lu=new Map,ro=1,Ha=function(t){if(fl.has(t))return fl.get(t);for(;lu.has(ro);)ro++;var e=ro++;return fl.set(t,e),lu.set(e,t),e},YO=function(t){return lu.get(t)},XO=function(t,e){e>=ro&&(ro=e+1),fl.set(t,e),lu.set(e,t)},JO="style["+rs+'][data-styled-version="5.3.6"]',ZO=new RegExp("^"+rs+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),eL=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},tL=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(ZO);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(XO(u,l),eL(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},nL=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},S_=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(rs))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(rs,"active"),r.setAttribute("data-styled-version","5.3.6");var o=nL();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},rL=function(){function t(n){var r=this.element=S_(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}ya(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),iL=function(){function t(n){var r=this.element=S_(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),sL=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),_0=bm,oL={isServer:!bm,useCSSOMInjection:!GO},__=function(){function t(n,r,i){n===void 0&&(n=wr),r===void 0&&(r={}),this.options=Nn({},oL,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&bm&&_0&&(_0=!1,function(s){for(var o=document.querySelectorAll(JO),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(rs)!=="active"&&(tL(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Ha(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Nn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new sL(o):s?new rL(o):new iL(o),new QO(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Ha(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ha(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Ha(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=YO(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=rs+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),aL=/(a)(d)/gi,k0=function(t){return String.fromCharCode(t+(t>25?39:97))};function af(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=k0(e%52)+n;return(k0(e%52)+n).replace(aL,"$1-$2")}var Di=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},k_=function(t){return Di(5381,t)};function lL(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(jo(n)&&!Am(n))return!1}return!0}var uL=k_("5.3.6"),cL=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&lL(e),this.componentId=n,this.baseHash=Di(uL,n),this.baseStyle=r,__.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=is(this.rules,e,n,r).join(""),a=af(Di(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Di(this.baseHash,r.hash),h="",d=0;d<u;d++){var m=this.rules[d];if(typeof m=="string")h+=m;else if(m){var g=is(m,e,n,r),v=Array.isArray(g)?g.join(""):g;c=Di(c,v+d),h+=v}}if(h){var _=af(c>>>0);if(!n.hasNameForId(i,_)){var p=r(h,"."+_,void 0,i);n.insertRules(i,_,p)}s.push(_)}}return s.join(" ")},t}(),hL=/^\s*\/\/.*$/gm,dL=[":","[",".","#"];function fL(t){var e,n,r,i,s=t===void 0?wr:t,o=s.options,a=o===void 0?wr:o,l=s.plugins,u=l===void 0?au:l,c=new NO(a),h=[],d=function(v){function _(p){if(p)try{v(p+"}")}catch{}}return function(p,f,y,S,k,N,D,P,Z,B){switch(p){case 1:if(Z===0&&f.charCodeAt(0)===64)return v(f+";"),"";break;case 2:if(P===0)return f+"/*|*/";break;case 3:switch(P){case 102:case 112:return v(y[0]+f),"";default:return f+(B===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(_)}}}(function(v){h.push(v)}),m=function(v,_,p){return _===0&&dL.indexOf(p[n.length])!==-1||p.match(i)?v:"."+e};function g(v,_,p,f){f===void 0&&(f="&");var y=v.replace(hL,""),S=_&&p?p+" "+_+" { "+y+" }":y;return e=f,n=_,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!_?"":_,S)}return c.use([].concat(u,[function(v,_,p){v===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,m))},d,function(v){if(v===-2){var _=h;return h=[],_}}])),g.hash=u.length?u.reduce(function(v,_){return _.name||ya(15),Di(v,_.name)},5381).toString():"",g}var I_=Ln.createContext();I_.Consumer;var x_=Ln.createContext(),pL=(x_.Consumer,new __),lf=fL();function mL(){return A.exports.useContext(I_)||pL}function gL(){return A.exports.useContext(x_)||lf}var yL=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=lf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return ya(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=lf),this.name+e.hash},t}(),vL=/([A-Z])/,wL=/([A-Z])/g,EL=/^ms-/,SL=function(t){return"-"+t.toLowerCase()};function I0(t){return vL.test(t)?t.replace(wL,SL).replace(EL,"-ms-"):t}var x0=function(t){return t==null||t===!1||t===""};function is(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=is(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(x0(t))return"";if(Am(t))return"."+t.styledComponentId;if(jo(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return is(l,e,n,r)}var u;return t instanceof yL?n?(t.inject(n,r),t.getName(r)):t:of(t)?function c(h,d){var m,g,v=[];for(var _ in h)h.hasOwnProperty(_)&&!x0(h[_])&&(Array.isArray(h[_])&&h[_].isCss||jo(h[_])?v.push(I0(_)+":",h[_],";"):of(h[_])?v.push.apply(v,c(h[_],_)):v.push(I0(_)+": "+(m=_,(g=h[_])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||m in DO?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var T0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function _L(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return jo(t)||of(t)?T0(is(E0(au,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:T0(is(E0(t,n)))}var kL=function(t,e,n){return n===void 0&&(n=wr),t.theme!==n.theme&&t.theme||e||n.theme},IL=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xL=/(^-|-$)/g;function Ah(t){return t.replace(IL,"-").replace(xL,"")}var TL=function(t){return af(k_(t)>>>0)};function Wa(t){return typeof t=="string"&&!0}var uf=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},CL=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function AL(t,e,n){var r=t[n];uf(e)&&uf(r)?T_(r,e):t[n]=e}function T_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(uf(o))for(var a in o)CL(a)&&AL(t,o[a],a)}return t}var C_=Ln.createContext();C_.Consumer;var bh={};function A_(t,e,n){var r=Am(t),i=!Wa(t),s=e.attrs,o=s===void 0?au:s,a=e.componentId,l=a===void 0?function(f,y){var S=typeof f!="string"?"sc":Ah(f);bh[S]=(bh[S]||0)+1;var k=S+"-"+TL("5.3.6"+S+bh[S]);return y?y+"-"+k:k}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Wa(f)?"styled."+f:"Styled("+S0(f)+")"}(t):u,h=e.displayName&&e.componentId?Ah(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,m=e.shouldForwardProp;r&&t.shouldForwardProp&&(m=e.shouldForwardProp?function(f,y,S){return t.shouldForwardProp(f,y,S)&&e.shouldForwardProp(f,y,S)}:t.shouldForwardProp);var g,v=new cL(n,h,r?t.componentStyle:void 0),_=v.isStatic&&o.length===0,p=function(f,y){return function(S,k,N,D){var P=S.attrs,Z=S.componentStyle,B=S.defaultProps,Pe=S.foldedComponentIds,Re=S.shouldForwardProp,ve=S.styledComponentId,yt=S.target,W=function(K,E,re){K===void 0&&(K=wr);var b=Nn({},E,{theme:K}),Ce={};return re.forEach(function(le){var he,J,Ye,kt=le;for(he in jo(kt)&&(kt=kt(b)),kt)b[he]=Ce[he]=he==="className"?(J=Ce[he],Ye=kt[he],J&&Ye?J+" "+Ye:J||Ye):kt[he]}),[b,Ce]}(kL(k,A.exports.useContext(C_),B)||wr,k,P),fn=W[0],Qe=W[1],C=function(K,E,re,b){var Ce=mL(),le=gL(),he=E?K.generateAndInjectStyles(wr,Ce,le):K.generateAndInjectStyles(re,Ce,le);return he}(Z,D,fn),H=N,q=Qe.$as||k.$as||Qe.as||k.as||yt,me=Wa(q),R=Qe!==k?Nn({},k,{},Qe):k,O={};for(var L in R)L[0]!=="$"&&L!=="as"&&(L==="forwardedAs"?O.as=R[L]:(Re?Re(L,g0,q):!me||g0(L))&&(O[L]=R[L]));return k.style&&Qe.style!==k.style&&(O.style=Nn({},k.style,{},Qe.style)),O.className=Array.prototype.concat(Pe,ve,C!==ve?C:null,k.className,Qe.className).filter(Boolean).join(" "),O.ref=H,A.exports.createElement(q,O)}(g,f,y,_)};return p.displayName=c,(g=Ln.forwardRef(p)).attrs=d,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=m,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):au,g.styledComponentId=h,g.target=r?t.target:t,g.withComponent=function(f){var y=e.componentId,S=function(N,D){if(N==null)return{};var P,Z,B={},Pe=Object.keys(N);for(Z=0;Z<Pe.length;Z++)P=Pe[Z],D.indexOf(P)>=0||(B[P]=N[P]);return B}(e,["componentId"]),k=y&&y+"-"+(Wa(f)?f:Ah(S0(f)));return A_(f,Nn({},S,{attrs:d,componentId:k}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?T_({},t.defaultProps,f):f}}),g.toString=function(){return"."+g.styledComponentId},i&&KO(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var cf=function(t){return function e(n,r,i){if(i===void 0&&(i=wr),!Em.exports.isValidElementType(r))return ya(1,String(r));var s=function(){return n(r,i,_L.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Nn({},i,{},o))},s.attrs=function(o){return e(n,r,Nn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(A_,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){cf[t]=cf(t)});const dn=cf,b_="/SilvinaSilberman/assets/logo.cc159ce2.png",bL=dn.header`
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
                width: 120px;
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
                    margin-left: 64px;
                    
                    & a {
                        color: black;
                        font-size: 16px;
                        font-weight: 500;
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 20px 100px;
    }
`;function Rc(){const t=()=>{document.querySelector("header").classList.toggle("open__menu")},e=()=>{document.querySelectorAll("ul li").forEach(()=>{document.querySelector("header").classList.remove("open__menu")})};return w(bL,{children:$("nav",{children:[w(rn,{to:"/",children:w("img",{src:b_,alt:"Silvina Silberman"})}),$("ul",{children:[w("li",{onClick:e,children:w(rn,{to:"/",children:"Inicio"})}),w("li",{onClick:e,children:w(rn,{to:"/about",children:"Sobre Mi"})}),w("li",{onClick:e,children:w(rn,{to:"/personal-designs",children:"Dise\xF1os Personalizados"})}),w("li",{onClick:e,children:w(rn,{to:"/awards",children:"Premios"})}),w("li",{onClick:e,children:w(rn,{to:"/contact",children:"Contacto"})}),$("div",{className:"data__header__mobile",children:[$("div",{children:[w("h5",{children:"Email"}),w("a",{href:"mailto:silvinasilberman@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"silvinasilberman@gmail.com"})]}),$("div",{children:[w("h5",{children:"Instagram"}),w("a",{href:"https://www.instagram.com/silvisilberarte/?hl=es-la",target:"_blank",rel:"noopener noreferrer",children:"@silvisilberarte"})]})]})]}),$("div",{className:"burger__menu",onClick:t,children:[w("h4",{children:"Menu"}),$("div",{children:[w("span",{}),w("span",{})]})]})]})})}var R_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},C0=Ln.createContext&&Ln.createContext(R_),Er=globalThis&&globalThis.__assign||function(){return Er=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Er.apply(this,arguments)},RL=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function N_(t){return t&&t.map(function(e,n){return Ln.createElement(e.tag,Er({key:n},e.attr),N_(e.child))})}function Xt(t){return function(e){return w(NL,{...Er({attr:Er({},t.attr)},e),children:N_(t.child)})}}function NL(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=RL(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),$("svg",{...Er({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Er(Er({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&w("title",{children:s}),t.children]})};return C0!==void 0?w(C0.Consumer,{children:function(n){return e(n)}}):e(R_)}function DL(t){return Xt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Money_Check_1",dataName:"Money Check 1"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M19.437,18.218H4.563a2.5,2.5,0,0,1-2.5-2.5V8.282a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5v7.436A2.5,2.5,0,0,1,19.437,18.218ZM4.563,6.782a1.5,1.5,0,0,0-1.5,1.5v7.436a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V8.282a1.5,1.5,0,0,0-1.5-1.5Z"}},{tag:"path",attr:{d:"M12,12.786H5.064a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z"}},{tag:"path",attr:{d:"M14,15.714H5.064a.5.5,0,1,1,0-1H14a.5.5,0,0,1,0,1Z"}},{tag:"rect",attr:{x:"15.436",y:"8.283",width:"4",height:"2",rx:"0.5"}}]}]}]})(t)}function PL(t){return Xt({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(t)}function OL(t){return Xt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(t)}function LL(t){return Xt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M320 320L192 192m0 128l128-128"}}]})(t)}function D_(t){return Xt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z"}},{tag:"path",attr:{d:"M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"}}]})(t)}function ML(t){return Xt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M380 704h264c4.4 0 8-3.6 8-8v-84c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v36H428v-36c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v84c0 4.4 3.6 8 8 8zm340-123a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm239-167.6L935.3 372a8 8 0 0 0-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 0 0-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 0 0-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 0 0 3-10.8zM840 517v237H184V517l15.6-43h624.8l15.6 43zM292.7 218.1l.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220l72.7-199.9zM224 581a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"}}]})(t)}function $L(t){return Xt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"}},{tag:"path",attr:{d:"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"}}]})(t)}function FL(t){return Xt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]})(t)}function UL(t){return Xt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z"}}]})(t)}function zL(t){return Xt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}}]})(t)}function jL(t){return Xt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"}}]})(t)}function VL(t){return Xt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z",fill:"currentColor"}},{tag:"path",attr:{d:"M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z",fill:"currentColor"}}]})(t)}const BL=dn.footer`
  width: 100%;
  height: max-content;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;
  border-top: 1px solid gainsboro;

  & img {
    width: 100px;

    object-fit: contain;

    cursor: pointer;
  }

  & h4 {
    margin: 28px 0;
    color: black;
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
    text-align: center;

    & a {
      transition: all .6s;

      color: black;
      text-decoration: none;

      &:hover {
        color: var(--colorHover);
      }
    }

    & span {
      display: block;
    }
  }

  & div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      & a { 
        width: max-content;
        margin: 0 10px;

        transition: all .6s;

        color: black;
        
        & svg {
          font-size: 16px;
        }

        &:hover {
          color: var(--colorHover);
        }
      }
    }
      
    @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;

      & h4 {
        margin: 0;

        & span {
          display: inline;
        }
      }
    }

    @media only screen and (min-width: 1024px) {
      & img {
        width: 120px;
      }
    }

    @media only screen and (min-width: 1200px) {
      padding: 20px 100px;
    }
`;function Nc(){return $(BL,{children:[w("img",{onClick:()=>{window.scroll({top:0,left:0,behavior:"smooth"})},src:b_,alt:"Silvina Silberman"}),$("h4",{children:["\xA9 2023 Silvina Silberman / ",$("span",{children:["Develop by ",w("a",{href:"https://www.linkedin.com/in/nicokatz/",target:"_blank",rel:"noopener noreferrer",children:"Nicolas Katz"})]})]}),$("div",{children:[w("a",{href:"https://www.instagram.com/silvisilberarte/",target:"_blank",rel:"noopener noreferrer",children:w(zL,{})}),w("a",{href:"https://www.facebook.com/silvina.silber",target:"_blank",rel:"noopener noreferrer",children:w(PL,{})})]})]})}const HL=dn.div`
    width: 100%;
    height: max-content;
    margin-top: 60px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    
    & div.messages__container {
        width: 100%;
        height: max-content;
        margin: 20px 0 0 0;
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
`;function WL(){const{logout:t,user:e,getProducts:n,createProduct:r,deleteProduct:i}=A.exports.useContext(pi),s=Au(),[o,a]=A.exports.useState([]),[l,u]=A.exports.useState(null);A.exports.useEffect(()=>{n(a)},[]);const[c,h]=A.exports.useState(""),[d,m]=A.exports.useState(""),[g,v]=A.exports.useState(""),[_,p]=A.exports.useState(!1),[f,y]=A.exports.useState(""),[S,k]=A.exports.useState(null),[N,D]=A.exports.useState(null),P=async()=>{try{await t(),s("/")}catch(W){console.error(W.message)}},Z=W=>{const Qe=W.target.files[0],C=new FileReader;C.onloadend=function(){D(C.result.toString())},C.readAsDataURL(Qe)},B=async W=>{W.preventDefault(),await r({title:c,description:d,category:g,award:_,price:f,status:S,primaryImage:N}),h(""),m(""),v(""),y(""),p(W.target.checked=!1),k(""),D(""),u("El retrato ha sido creado con exito.")},Pe=async W=>{await i(W),u("El retrato ha sido eliminado con exito.")},Re=()=>{n(a)},ve=W=>{switch(W.preventDefault(),W.target.id){case"title":h(W.target.value);break;case"description":m(W.target.value);break;case"category":v(W.target.value);break;case"award":p(W.target.checked);break;case"price":y(W.target.value);break;case"status":k(W.target.value);break}},yt=()=>{u(null)};return $("div",{children:[w(Rc,{}),$(HL,{children:[$("h1",{children:["\xA1Bienvenida, ",e==null?void 0:e.displayName,"!"]}),l&&$("div",{className:"messages__container",children:[l," ",w(LL,{onClick:yt})]}),w("h2",{children:"Publicar nuevo retrato"}),$("form",{onSubmit:B,children:[$("div",{className:"input__container",children:[w("label",{htmlFor:"title",children:"Titulo"}),w("input",{onChange:ve,type:"text",name:"title",id:"title",minLength:"3",maxLength:"20",value:c})]}),$("div",{className:"input__container",children:[w("label",{htmlFor:"description",children:"Descripci\xF3n"}),w("input",{onChange:ve,type:"text",name:"description",id:"description",minLength:"8",maxLength:"200",value:d})]}),$("div",{className:"input__container",children:[w("label",{htmlFor:"category",children:"Categor\xEDa"}),w("input",{onChange:ve,type:"text",name:"category",id:"category",minLength:"3",maxLength:"20",value:g})]}),$("div",{className:"input__container",children:[w("label",{htmlFor:"award",children:"\xBFTiene Premio?"}),w("input",{onChange:ve,type:"checkbox",name:"award",id:"award",value:_})]}),$("div",{className:"input__container",children:[w("label",{htmlFor:"price",children:"Precio (en d\xF3lares)"}),w("input",{onChange:ve,type:"number",name:"price",id:"price",min:"1",max:"1000",value:f})]}),$("div",{className:"input__container",children:[w("label",{htmlFor:"status",children:"Estado"}),$("div",{children:[w("input",{type:"radio",onChange:ve,name:"status",id:"status",value:"disponible"}),w("label",{htmlFor:"disponible",children:"Disponible"})]}),$("div",{children:[w("input",{type:"radio",onChange:ve,name:"status",id:"status",value:"vendido"}),w("label",{htmlFor:"vendido",children:"Vendido"})]})]}),$("div",{className:"input__container",children:[w("label",{htmlFor:"primaryImage",children:"Imagenes"}),w("input",{onChange:Z,type:"file",name:"primaryImage",id:"primaryImage"})]}),w("button",{type:"submit",children:"Crear retrato"})]}),w("h2",{children:"Ver, editar y/o eliminar retratos"}),w("button",{onClick:Re,children:"Recargar datos"}),w("section",{children:o&&o.map(W=>$("div",{children:[w("img",{src:W==null?void 0:W.primaryImage,alt:W==null?void 0:W.title}),$("span",{onClick:()=>Pe(W==null?void 0:W.id),children:[w("h5",{children:"Eliminar"}),w(OL,{})]})]},W.id))}),w("button",{className:"logout",onClick:P,children:"Cerrar sesi\xF3n"})]}),w(Nc,{})]})}const Vo={_origin:"https://api.emailjs.com"},qL=(t,e="https://api.emailjs.com")=>{Vo._userID=t,Vo._origin=e},P_=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class A0{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const O_=(t,e,n={})=>new Promise((r,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new A0(o);a.status===200||a.text==="OK"?r(a):i(a)}),s.addEventListener("error",({target:o})=>{i(new A0(o))}),s.open("POST",Vo._origin+t,!0),Object.keys(n).forEach(o=>{s.setRequestHeader(o,n[o])}),s.send(e)}),KL=(t,e,n,r)=>{const i=r||Vo._userID;P_(i,t,e);const s={lib_version:"3.10.0",user_id:i,service_id:t,template_id:e,template_params:n};return O_("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},GL=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},QL=(t,e,n,r)=>{const i=r||Vo._userID,s=GL(n);P_(i,t,e);const o=new FormData(s);return o.append("lib_version","3.10.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",i),O_("/api/v1.0/email/send-form",o)},YL={init:qL,send:KL,sendForm:QL},XL="service_e6bwg0p",JL="template_3z9pvpj",ZL="hwH8wj1eN-3bQW7te",eM="/SilvinaSilberman/assets/contact.d1744b50.jpeg",tM=dn.section`
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
                font-size: 26px;
                line-height: 36px;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            & p {
                margin-bottom: 10px;

                color: black;
                font-size: 18px;
                line-height: 28px;
                font-weight: 300;

                &:last-child {
                    margin-bottom: 0;
                }

                & a {
                    padding-bottom: 2px;

                    border-bottom: 1px solid gainsboro;
                    transition: all .6s;

                    color: black;
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
            height: 380px;
            margin-bottom: 20px;

            object-fit: cover;
            image-rendering: optimizeQuality;

            border: none;
            border-radius: 2px;
        }

        & h4 {
            color: black;
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
        & div:last-child {
            img {
                height: 520px;
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 40px 100px;

        & div:last-child {
            width: 40%;
        }
    }
`;function nM(){const t=A.exports.useRef();return $("div",{children:[w(Rc,{}),$(tM,{children:[$("div",{children:[$("div",{className:"form__information",children:[w("h1",{children:"Empezar proyecto"}),$("p",{children:["Contactame en el formulario de aqu\xED abajo para m\xE1s informaci\xF3n o v\xEDa email en ",w("a",{href:"mailto:silvinasilberman@gmail.com",children:"silvinasilberman@gmail.com"}),"."]}),$("p",{children:["Tenes un proyecto? Directamente rellena este ",w("a",{href:"",children:"formulario rapido"})," y pronto estar\xE9 en contacto con vos."]}),$("p",{children:["Tambi\xE9n podes conocer como trabajo ",w("a",{href:"/about",children:"aqu\xED"}),"."]})]}),$("form",{ref:t,onSubmit:n=>{n.preventDefault(),YL.sendForm(XL,JL,t.current,ZL).then(()=>{document.querySelector("form button").classList.add("send__mail"),document.querySelector("form button").innerHTML="ENVIADO",setTimeout(()=>{location.reload()},2500)},r=>{console.log(r.text)})},children:[$("div",{className:"row",children:[w("label",{htmlFor:"name",children:"Nombre"}),w("input",{type:"text",name:"name",id:"name",minLength:"3",maxLength:"20",required:!0})]}),$("div",{className:"row",children:[w("label",{htmlFor:"email",children:"Email"}),w("input",{type:"email",name:"email",id:"email",minLength:"6",maxLength:"40",required:!0})]}),$("div",{children:[w("label",{htmlFor:"issue",children:"Asunto"}),w("input",{type:"text",name:"issue",id:"issue",minLength:"4",maxLength:"28",required:!0})]}),$("div",{children:[w("label",{htmlFor:"message",children:"Mensaje"}),w("textarea",{type:"text",name:"message",id:"message",minLength:"4",maxLength:"200",required:!0})]}),w("button",{type:"submit",children:"Enviar"})]})]}),$("div",{children:[w("img",{src:eM,alt:"Silvina Silberman"}),w("h4",{children:"Actualmente, me encuentro trabajando en CABA pero realizo encargo a todo el pa\xEDs."})]})]}),w(Nc,{})]})}const rM=dn.section`
    width: 100%;
    height: max-content;
    margin-top: 20px;
    padding: 40px 20px;

    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 36px;

        color: black;
        font-size: 42px;
        line-height: 52px;
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
    }

    @media only screen and (min-width: 540px) {
        & div.error__messages {
            flex-direction: row;
            justify-content: space-between;

            text-align: left;

            svg {
                min-width: max-content;
                margin-bottom: 0;
                margin-right: 20px;
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
            margin: 1% 0;
            padding: 10px;

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
                border: 1px solid gainsboro;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        & div.portfolio {
            justify-content: space-between;
            
            & a {
                width: 48%;
                margin: 1%;

                img {
                    height: 420px;

                    object-fit: cover;
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        & div.portfolio {
            & img {
                height: 320px;
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 40px 100px;

        & div.portfolio {
            & img {
                height: 360px;
            }
        }
    }
`;function iM(){const{getProducts:t}=A.exports.useContext(pi),[e,n]=A.exports.useState(null),[r,i]=A.exports.useState(null);return A.exports.useEffect(()=>{t(n),e?(e==null?void 0:e.length)===0?i("Lo siento no hay productos disponibles en este momento."):i(null):i("Los productos estan siendo cargados a la web, espere un momento.")},[]),$(rM,{children:[w("h1",{children:"Portfolio"}),w("div",{className:"portfolio",id:"portfolio",children:e?e.map(s=>w(rn,{to:`/coleccion/${s.id}`,children:w("img",{src:s.primaryImage,alt:s.title})},s.id)):$("div",{className:"error__messages",children:[w(D_,{}),r]})})]})}const sM=dn.main`
  position: relative;

  width: 100%;
  height: 700px;
  padding: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #ffffff85;
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
  background-repeat: no-repeat;

  a {
    width: max-content;
    height: 54px;
    margin-right: 20px;
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
    bottom: 40px;
    left: calc(50% - 20px);

    cursor: pointer;

    color: white;
    font-size: 32px;

    animation: mouse 1s alternate infinite ease-in-out;
  }

  @keyframes mouse {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(20px);
    }
  }
`;function oM(){return $("div",{children:[w(Rc,{}),$(sM,{children:[w(rn,{to:"/contact",children:"Cotizar proyecto"}),w(jL,{})]}),w(iM,{}),w(Nc,{})]})}const aM=dn.div`
    width: 100%;
    height: 100vh;
    min-height: max-content;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & div.error__message {
        width: 100%;
        max-width: 600px;
        height: max-content;
        margin-top: 36px;
        padding: 20px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        background-color: #c0212173;

        & p {
            color: #e53e3e;
            font-size: 16px;
            line-height: 26px;
            font-weight: 400;
        }

        & svg {
            min-width: max-content;
            margin-left: 10px;

            color: #e53e3e;
            font-size: 20px;
        }
    }

    & h6 {
        margin-bottom: 20px;

        color: black;
        font-size: 16px;
        font-weight: 300;

        & a {
            width: max-content;
            padding-bottom: 2px;

            border-bottom: 1px solid gainsboro;
            
            color: gray;
            text-decoration: none;
        }
    }

    & h1 {
        margin-bottom: 36px;

        color: black;
        font-size: 24px;
        line-height: 34px;
        font-weight: 400;
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
`;function lM(){const{loginAdminUser:t,resetPassword:e,user:n}=A.exports.useContext(pi),r=Au(),[i,s]=A.exports.useState({email:"",password:""}),[o,a]=A.exports.useState(""),l=({target:{name:h,value:d}})=>{s({...i,[h]:d})};return $(aM,{children:[$("h6",{children:["Regresar al home ",w(rn,{to:"/",children:"aqu\xED"}),"."]}),w("h1",{children:"Acceso de administrador"}),$("form",{onSubmit:async h=>{h.preventDefault(),a("");try{await t(i.email,i.password),n.email===i.email&&n.password===i.password&&r("/admin")}catch(d){switch(d.message){case"Firebase: Error (auth/user-not-found).":a("Correo inexistente. Por favor revisa los campos."),console.error(o);break;case"Firebase: Error (auth/email-invalid).":a("Correo invalido. Por favor revisa los campos."),console.error(o);break;case"Firebase: Error (auth/wrong-password).":a("Contrase\xF1a erronea. Por favor revisa los campos."),console.error(o);break;case"FirebaseError: Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).":a("Demasiados intentos fallidos. Por favor vuelve a intentarlo m\xE1s tarde."),console.error(o);break;default:a("Ocurrio un error. Por favor vuelve a intentarlo."),console.error(o);break}}},children:[w("input",{onChange:l,type:"email",name:"email",id:"email",minLength:"6",maxLength:"40",placeholder:"Ingresa tu correo electronico.",required:!0}),w("input",{onChange:l,type:"password",name:"password",id:"password",minLength:"6",maxLength:"40",placeholder:"Ingresa tu contrase\xF1a.",required:!0}),$("div",{children:[w("button",{type:"submit",children:"Iniciar sesi\xF3n"}),w("h4",{onClick:async()=>{if(!i.email)return a("Escribe tu correo en la casilla para resetear tu contrase\xF1a.");try{await e(i.email),a("Te enviamos un email a tu correo para que puedas resetear tu contrase\xF1a.")}catch{a("Ocurrio un error. No pudimos resetear tu contrase\xF1a. Vuelve a intentarlo.")}},children:"\xBFOlvidaste tu contrase\xF1a?"})]})]}),o&&$("div",{className:"error__message",children:[w("p",{children:o}),w(VL,{})]})]})}const uM=dn.div`
  width: 100%;
  height: max-content;
  margin-top: 40px;
  padding: 40px 20px;

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

        color: gray;
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
`,cM=dn.div`
        width: 100%;
        height: 100vh;
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
`;function hM(){const[t,e]=A.exports.useState(null),[n,r]=A.exports.useState(null),{productId:i}=Qx(),{getProductById:s}=A.exports.useContext(pi);return A.exports.useEffect(()=>{s(e,i),r(t?null:"Los productos estan siendo cargados a la web, espere un momento.")},[i]),$("div",{children:[w(Rc,{}),t?$(uM,{children:[w("img",{src:t.primaryImage,alt:t.title}),$("div",{className:"product__information",children:[$("span",{children:[w(rn,{to:"/",children:"Inicio "})," / ",w("label",{children:t.title})]}),$("h1",{children:[t.title," ",w("span",{children:t.award&&w($L,{})})]}),$("h2",{children:[t.price," ",w("span",{children:"usd"})," ",w("h3",{className:t.status==="disponible"?"disponible":"vendido",children:t.status})]}),w("p",{children:t.description}),$("a",{className:"ask__product",href:`mailto:silvinasilberman@gmail.com?subject=Quiero encargar: ${t.title}`,children:["Comprar ",w(FL,{})]}),$("div",{className:"buyer__information",children:[$("h4",{children:[w(UL,{}),"Marco"]}),w("p",{children:"Al momento de realizar tu pedido, podr\xE1s eligir entre distintas opciones de marcos y/o portarretratos, el cu\xE1l estar\xE1 incluido en su compra."}),$("h4",{children:[w(ML,{}),"Env\xEDos a domicilio"]}),w("p",{children:"Los env\xEDos a domicilio no estar\xE1n incluidos en la compra, al momento de realizar tu pedido deber\xE1s pactar la forma de intercambio con el vendedor."}),$("h4",{children:[w(DL,{}),"Formas de pago"]}),w("p",{children:"La forma de pago principal es efectivo en d\xF3lares. Sin embargo, tambi\xE9n se aceptan transferencias bancarias o mercado pago con tarjeta de credito o debito. En este ultimo caso, preguntar el tipo de cambio."})]})]})]}):$(cM,{children:[w(D_,{}),n]}),w(Nc,{})]})}const dM=dn.div`
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
`;function fM({children:t}){const{user:e,loadingUser:n}=A.exports.useContext(pi);return n?w(dM,{children:w("h1",{children:"Ingresando a la cuenta de administrador..."})}):e?w("div",{children:t}):w(H1,{to:"/login"})}function pM({children:t}){const{user:e}=A.exports.useContext(pi);return e?w(H1,{to:"/admin"}):w("div",{children:t})}const mM=dn.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ghostwhite;

    text-align: center;

    & h1 {
        color: black;
        font-size: 32px;
        font-weight: 500;
    }

    & h2 {
        margin: 20px 0;

        color: black;
        font-size: 20px;
        line-height: 30px;
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
`;function gM(){return $(mM,{children:[w("h1",{children:"404"}),w("h2",{children:"La pagina que estas buscando no existe."}),w(rn,{to:"/",children:"Volver al home"})]})}function yM(){return $(iT,{children:[w(Or,{path:"/",element:w(oM,{})}),w(Or,{path:"/coleccion/:productId",element:w(hM,{})}),w(Or,{path:"/contact",element:w(nM,{})}),w(Or,{path:"/login",element:w(pM,{children:w(lM,{})})}),w(Or,{path:"/admin",element:w(fM,{children:w(WL,{})})}),w(Or,{path:"/*",element:w(gM,{})})]})}Nh.createRoot(document.getElementById("root")).render(w(Ln.StrictMode,{children:w(uT,{children:w(AO,{children:w(yM,{})})})}));
