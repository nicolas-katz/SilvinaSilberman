function x_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function A_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var x={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=Symbol.for("react.element"),R_=Symbol.for("react.portal"),N_=Symbol.for("react.fragment"),b_=Symbol.for("react.strict_mode"),D_=Symbol.for("react.profiler"),P_=Symbol.for("react.provider"),O_=Symbol.for("react.context"),L_=Symbol.for("react.forward_ref"),$_=Symbol.for("react.suspense"),M_=Symbol.for("react.memo"),F_=Symbol.for("react.lazy"),Am=Symbol.iterator;function U_(t){return t===null||typeof t!="object"?null:(t=Am&&t[Am]||t["@@iterator"],typeof t=="function"?t:null)}var Av={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rv=Object.assign,Nv={};function is(t,e,n){this.props=t,this.context=e,this.refs=Nv,this.updater=n||Av}is.prototype.isReactComponent={};is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bv(){}bv.prototype=is.prototype;function lf(t,e,n){this.props=t,this.context=e,this.refs=Nv,this.updater=n||Av}var uf=lf.prototype=new bv;uf.constructor=lf;Rv(uf,is.prototype);uf.isPureReactComponent=!0;var Rm=Array.isArray,Dv=Object.prototype.hasOwnProperty,cf={current:null},Pv={key:!0,ref:!0,__self:!0,__source:!0};function Ov(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dv.call(e,r)&&!Pv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Uo,type:t,key:s,ref:o,props:i,_owner:cf.current}}function j_(t,e){return{$$typeof:Uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Uo}function V_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nm=/\/+/g;function Rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?V_(""+t.key):e.toString(36)}function Wa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Uo:case R_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Rc(o,0):r,Rm(i)?(n="",t!=null&&(n=t.replace(Nm,"$&/")+"/"),Wa(i,e,n,"",function(u){return u})):i!=null&&(hf(i)&&(i=j_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Rm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Rc(s,a);o+=Wa(s,e,n,l,i)}else if(l=U_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Rc(s,a++),o+=Wa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function va(t,e,n){if(t==null)return t;var r=[],i=0;return Wa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function z_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},qa={transition:null},B_={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:qa,ReactCurrentOwner:cf};ne.Children={map:va,forEach:function(t,e,n){va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return va(t,function(){e++}),e},toArray:function(t){return va(t,function(e){return e})||[]},only:function(t){if(!hf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=is;ne.Fragment=N_;ne.Profiler=D_;ne.PureComponent=lf;ne.StrictMode=b_;ne.Suspense=$_;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B_;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Rv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dv.call(e,l)&&!Pv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Uo,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:O_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:P_,_context:t},t.Consumer=t};ne.createElement=Ov;ne.createFactory=function(t){var e=Ov.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:L_,render:t}};ne.isValidElement=hf;ne.lazy=function(t){return{$$typeof:F_,_payload:{_status:-1,_result:t},_init:z_}};ne.memo=function(t,e){return{$$typeof:M_,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=qa.transition;qa.transition={};try{t()}finally{qa.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return St.current.useCallback(t,e)};ne.useContext=function(t){return St.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return St.current.useDeferredValue(t)};ne.useEffect=function(t,e){return St.current.useEffect(t,e)};ne.useId=function(){return St.current.useId()};ne.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return St.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};ne.useRef=function(t){return St.current.useRef(t)};ne.useState=function(t){return St.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return St.current.useTransition()};ne.version="18.2.0";(function(t){t.exports=ne})(x);const Dn=A_(x.exports),Ch=x_({__proto__:null,default:Dn},[x.exports]);var xh={},Lv={exports:{}},Mt={},$v={exports:{}},Mv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,H){var W=A.length;A.push(H);e:for(;0<W;){var ge=W-1>>>1,N=A[ge];if(0<i(N,H))A[ge]=H,A[W]=N,W=ge;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var H=A[0],W=A.pop();if(W!==H){A[0]=W;e:for(var ge=0,N=A.length,O=N>>>1;ge<O;){var L=2*(ge+1)-1,q=A[L],E=L+1,re=A[E];if(0>i(q,W))E<N&&0>i(re,q)?(A[ge]=re,A[E]=W,ge=E):(A[ge]=q,A[L]=W,ge=L);else if(E<N&&0>i(re,W))A[ge]=re,A[E]=W,ge=E;else break e}}return H}function i(A,H){var W=A.sortIndex-H.sortIndex;return W!==0?W:A.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,g=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=A)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function S(A){if(v=!1,y(A),!g)if(n(l)!==null)g=!0,Xt(I);else{var H=n(u);H!==null&&Fe(S,H.startTime-A)}}function I(A,H){g=!1,v&&(v=!1,p(P),P=-1),m=!0;var W=d;try{for(y(H),h=n(l);h!==null&&(!(h.expirationTime>H)||A&&!Pe());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,d=h.priorityLevel;var N=ge(h.expirationTime<=H);H=t.unstable_now(),typeof N=="function"?h.callback=N:h===n(l)&&r(l),y(H)}else r(l);h=n(l)}if(h!==null)var O=!0;else{var L=n(u);L!==null&&Fe(S,L.startTime-H),O=!1}return O}finally{h=null,d=W,m=!1}}var b=!1,D=null,P=-1,J=5,B=-1;function Pe(){return!(t.unstable_now()-B<J)}function Ne(){if(D!==null){var A=t.unstable_now();B=A;var H=!0;try{H=D(!0,A)}finally{H?me():(b=!1,D=null)}}else b=!1}var me;if(typeof f=="function")me=function(){f(Ne)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,Ye=ee.port2;ee.port1.onmessage=Ne,me=function(){Ye.postMessage(null)}}else me=function(){_(Ne,0)};function Xt(A){D=A,b||(b=!0,me())}function Fe(A,H){P=_(function(){A(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,Xt(I))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var W=d;d=H;try{return A()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,H){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var W=d;d=A;try{return H()}finally{d=W}},t.unstable_scheduleCallback=function(A,H,W){var ge=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ge+W:ge):W=ge,A){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=W+N,A={id:c++,callback:H,priorityLevel:A,startTime:W,expirationTime:N,sortIndex:-1},W>ge?(A.sortIndex=W,e(u,A),n(l)===null&&A===n(u)&&(v?(p(P),P=-1):v=!0,Fe(S,W-ge))):(A.sortIndex=N,e(l,A),g||m||(g=!0,Xt(I))),A},t.unstable_shouldYield=Pe,t.unstable_wrapCallback=function(A){var H=d;return function(){var W=d;d=H;try{return A.apply(this,arguments)}finally{d=W}}}})(Mv);(function(t){t.exports=Mv})($v);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=x.exports,Lt=$v.exports;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uv=new Set,eo={};function si(t,e){zi(t,e),zi(t+"Capture",e)}function zi(t,e){for(eo[t]=e,t=0;t<e.length;t++)Uv.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ah=Object.prototype.hasOwnProperty,H_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bm={},Dm={};function W_(t){return Ah.call(Dm,t)?!0:Ah.call(bm,t)?!1:H_.test(t)?Dm[t]=!0:(bm[t]=!0,!1)}function q_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K_(t,e,n,r){if(e===null||typeof e>"u"||q_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var df=/[\-:]([a-z])/g;function ff(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(df,ff);st[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(df,ff);st[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(df,ff);st[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function pf(t,e,n,r){var i=st.hasOwnProperty(e)?st[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K_(e,n,i,r)&&(n=null),r||i===null?W_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zn=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),gi=Symbol.for("react.portal"),yi=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),Rh=Symbol.for("react.profiler"),jv=Symbol.for("react.provider"),Vv=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),Nh=Symbol.for("react.suspense"),bh=Symbol.for("react.suspense_list"),yf=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),zv=Symbol.for("react.offscreen"),Pm=Symbol.iterator;function vs(t){return t===null||typeof t!="object"?null:(t=Pm&&t[Pm]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,Nc;function As(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var bc=!1;function Dc(t,e){if(!t||bc)return"";bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?As(t):""}function G_(t){switch(t.tag){case 5:return As(t.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return t=Dc(t.type,!1),t;case 11:return t=Dc(t.type.render,!1),t;case 1:return t=Dc(t.type,!0),t;default:return""}}function Dh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yi:return"Fragment";case gi:return"Portal";case Rh:return"Profiler";case mf:return"StrictMode";case Nh:return"Suspense";case bh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vv:return(t.displayName||"Context")+".Consumer";case jv:return(t._context.displayName||"Context")+".Provider";case gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yf:return e=t.displayName||null,e!==null?e:Dh(t.type)||"Memo";case Kn:e=t._payload,t=t._init;try{return Dh(t(e))}catch{}}return null}function Q_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dh(e);case 8:return e===mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Y_(t){var e=Bv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=Y_(t))}function Hv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ph(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Om(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wv(t,e){e=e.checked,e!=null&&pf(t,"checked",e,!1)}function Oh(t,e){Wv(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lh(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lh(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Rs=Array.isArray;function Di(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $h(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Rs(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function qv(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sa,Gv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function to(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X_=["Webkit","ms","Moz","O"];Object.keys(Ms).forEach(function(t){X_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ms[e]=Ms[t]})});function Qv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ms.hasOwnProperty(t)&&Ms[t]?(""+e).trim():e+"px"}function Yv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var J_=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fh(t,e){if(e){if(J_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jh=null;function vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vh=null,Pi=null,Oi=null;function Fm(t){if(t=zo(t)){if(typeof Vh!="function")throw Error(k(280));var e=t.stateNode;e&&(e=hu(e),Vh(t.stateNode,t.type,e))}}function Xv(t){Pi?Oi?Oi.push(t):Oi=[t]:Pi=t}function Jv(){if(Pi){var t=Pi,e=Oi;if(Oi=Pi=null,Fm(t),e)for(t=0;t<e.length;t++)Fm(e[t])}}function Zv(t,e){return t(e)}function e0(){}var Pc=!1;function t0(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return Zv(t,e,n)}finally{Pc=!1,(Pi!==null||Oi!==null)&&(e0(),Jv())}}function no(t,e){var n=t.stateNode;if(n===null)return null;var r=hu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var zh=!1;if(Pn)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){zh=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{zh=!1}function Z_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Fs=!1,fl=null,pl=!1,Bh=null,eI={onError:function(t){Fs=!0,fl=t}};function tI(t,e,n,r,i,s,o,a,l){Fs=!1,fl=null,Z_.apply(eI,arguments)}function nI(t,e,n,r,i,s,o,a,l){if(tI.apply(this,arguments),Fs){if(Fs){var u=fl;Fs=!1,fl=null}else throw Error(k(198));pl||(pl=!0,Bh=u)}}function oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function n0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Um(t){if(oi(t)!==t)throw Error(k(188))}function rI(t){var e=t.alternate;if(!e){if(e=oi(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Um(i),t;if(s===r)return Um(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function r0(t){return t=rI(t),t!==null?i0(t):null}function i0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=i0(t);if(e!==null)return e;t=t.sibling}return null}var s0=Lt.unstable_scheduleCallback,jm=Lt.unstable_cancelCallback,iI=Lt.unstable_shouldYield,sI=Lt.unstable_requestPaint,De=Lt.unstable_now,oI=Lt.unstable_getCurrentPriorityLevel,wf=Lt.unstable_ImmediatePriority,o0=Lt.unstable_UserBlockingPriority,ml=Lt.unstable_NormalPriority,aI=Lt.unstable_LowPriority,a0=Lt.unstable_IdlePriority,au=null,gn=null;function lI(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(au,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:hI,uI=Math.log,cI=Math.LN2;function hI(t){return t>>>=0,t===0?32:31-(uI(t)/cI|0)|0}var _a=64,Ia=4194304;function Ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ns(a):(s&=o,s!==0&&(r=Ns(s)))}else o=n&~i,o!==0?r=Ns(o):s!==0&&(r=Ns(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),i=1<<n,r|=t[n],e&=~i;return r}function dI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=dI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Hh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function l0(){var t=_a;return _a<<=1,(_a&4194240)===0&&(_a=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function pI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function u0(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var c0,Sf,h0,d0,f0,Wh=!1,ka=[],ir=null,sr=null,or=null,ro=new Map,io=new Map,Qn=[],mI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vm(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(e.pointerId)}}function Es(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zo(e),e!==null&&Sf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gI(t,e,n,r,i){switch(e){case"focusin":return ir=Es(ir,t,e,n,r,i),!0;case"dragenter":return sr=Es(sr,t,e,n,r,i),!0;case"mouseover":return or=Es(or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ro.set(s,Es(ro.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,io.set(s,Es(io.get(s)||null,t,e,n,r,i)),!0}return!1}function p0(t){var e=Or(t.target);if(e!==null){var n=oi(e);if(n!==null){if(e=n.tag,e===13){if(e=n0(n),e!==null){t.blockedOn=e,f0(t.priority,function(){h0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jh=r,n.target.dispatchEvent(r),jh=null}else return e=zo(n),e!==null&&Sf(e),t.blockedOn=n,!1;e.shift()}return!0}function zm(t,e,n){Ka(t)&&n.delete(e)}function yI(){Wh=!1,ir!==null&&Ka(ir)&&(ir=null),sr!==null&&Ka(sr)&&(sr=null),or!==null&&Ka(or)&&(or=null),ro.forEach(zm),io.forEach(zm)}function Ss(t,e){t.blockedOn===e&&(t.blockedOn=null,Wh||(Wh=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,yI)))}function so(t){function e(i){return Ss(i,t)}if(0<ka.length){Ss(ka[0],t);for(var n=1;n<ka.length;n++){var r=ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ir!==null&&Ss(ir,t),sr!==null&&Ss(sr,t),or!==null&&Ss(or,t),ro.forEach(e),io.forEach(e),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)p0(n),n.blockedOn===null&&Qn.shift()}var Li=zn.ReactCurrentBatchConfig,yl=!0;function vI(t,e,n,r){var i=de,s=Li.transition;Li.transition=null;try{de=1,_f(t,e,n,r)}finally{de=i,Li.transition=s}}function wI(t,e,n,r){var i=de,s=Li.transition;Li.transition=null;try{de=4,_f(t,e,n,r)}finally{de=i,Li.transition=s}}function _f(t,e,n,r){if(yl){var i=qh(t,e,n,r);if(i===null)Hc(t,e,r,vl,n),Vm(t,r);else if(gI(i,t,e,n,r))r.stopPropagation();else if(Vm(t,r),e&4&&-1<mI.indexOf(t)){for(;i!==null;){var s=zo(i);if(s!==null&&c0(s),s=qh(t,e,n,r),s===null&&Hc(t,e,r,vl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Hc(t,e,r,null,n)}}var vl=null;function qh(t,e,n,r){if(vl=null,t=vf(r),t=Or(t),t!==null)if(e=oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=n0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function m0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oI()){case wf:return 1;case o0:return 4;case ml:case aI:return 16;case a0:return 536870912;default:return 16}default:return 16}}var tr=null,If=null,Ga=null;function g0(){if(Ga)return Ga;var t,e=If,n=e.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ga=i.slice(t,1<r?1-r:void 0)}function Qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ta(){return!0}function Bm(){return!1}function Ft(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ta:Bm,this.isPropagationStopped=Bm,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),e}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kf=Ft(ss),Vo=Ce({},ss,{view:0,detail:0}),EI=Ft(Vo),Lc,$c,_s,lu=Ce({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_s&&(_s&&t.type==="mousemove"?(Lc=t.screenX-_s.screenX,$c=t.screenY-_s.screenY):$c=Lc=0,_s=t),Lc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Hm=Ft(lu),SI=Ce({},lu,{dataTransfer:0}),_I=Ft(SI),II=Ce({},Vo,{relatedTarget:0}),Mc=Ft(II),kI=Ce({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),TI=Ft(kI),CI=Ce({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xI=Ft(CI),AI=Ce({},ss,{data:0}),Wm=Ft(AI),RI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bI[t])?!!e[t]:!1}function Tf(){return DI}var PI=Ce({},Vo,{key:function(t){if(t.key){var e=RI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OI=Ft(PI),LI=Ce({},lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qm=Ft(LI),$I=Ce({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),MI=Ft($I),FI=Ce({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),UI=Ft(FI),jI=Ce({},lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VI=Ft(jI),zI=[9,13,27,32],Cf=Pn&&"CompositionEvent"in window,Us=null;Pn&&"documentMode"in document&&(Us=document.documentMode);var BI=Pn&&"TextEvent"in window&&!Us,y0=Pn&&(!Cf||Us&&8<Us&&11>=Us),Km=String.fromCharCode(32),Gm=!1;function v0(t,e){switch(t){case"keyup":return zI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vi=!1;function HI(t,e){switch(t){case"compositionend":return w0(e);case"keypress":return e.which!==32?null:(Gm=!0,Km);case"textInput":return t=e.data,t===Km&&Gm?null:t;default:return null}}function WI(t,e){if(vi)return t==="compositionend"||!Cf&&v0(t,e)?(t=g0(),Ga=If=tr=null,vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y0&&e.locale!=="ko"?null:e.data;default:return null}}var qI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qI[t.type]:e==="textarea"}function E0(t,e,n,r){Xv(r),e=wl(e,"onChange"),0<e.length&&(n=new kf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var js=null,oo=null;function KI(t){b0(t,0)}function uu(t){var e=Si(t);if(Hv(e))return t}function GI(t,e){if(t==="change")return e}var S0=!1;if(Pn){var Fc;if(Pn){var Uc="oninput"in document;if(!Uc){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),Uc=typeof Ym.oninput=="function"}Fc=Uc}else Fc=!1;S0=Fc&&(!document.documentMode||9<document.documentMode)}function Xm(){js&&(js.detachEvent("onpropertychange",_0),oo=js=null)}function _0(t){if(t.propertyName==="value"&&uu(oo)){var e=[];E0(e,oo,t,vf(t)),t0(KI,e)}}function QI(t,e,n){t==="focusin"?(Xm(),js=e,oo=n,js.attachEvent("onpropertychange",_0)):t==="focusout"&&Xm()}function YI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uu(oo)}function XI(t,e){if(t==="click")return uu(e)}function JI(t,e){if(t==="input"||t==="change")return uu(e)}function ZI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:ZI;function ao(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ah.call(e,i)||!an(t[i],e[i]))return!1}return!0}function Jm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zm(t,e){var n=Jm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jm(n)}}function I0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?I0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k0(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ek(t){var e=k0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&I0(n.ownerDocument.documentElement,n)){if(r!==null&&xf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zm(n,s);var o=Zm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tk=Pn&&"documentMode"in document&&11>=document.documentMode,wi=null,Kh=null,Vs=null,Gh=!1;function eg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gh||wi==null||wi!==dl(r)||(r=wi,"selectionStart"in r&&xf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vs&&ao(Vs,r)||(Vs=r,r=wl(Kh,"onSelect"),0<r.length&&(e=new kf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wi)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ei={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},jc={},T0={};Pn&&(T0=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function cu(t){if(jc[t])return jc[t];if(!Ei[t])return t;var e=Ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in T0)return jc[t]=e[n];return t}var C0=cu("animationend"),x0=cu("animationiteration"),A0=cu("animationstart"),R0=cu("transitionend"),N0=new Map,tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){N0.set(t,e),si(e,[t])}for(var Vc=0;Vc<tg.length;Vc++){var zc=tg[Vc],nk=zc.toLowerCase(),rk=zc[0].toUpperCase()+zc.slice(1);kr(nk,"on"+rk)}kr(C0,"onAnimationEnd");kr(x0,"onAnimationIteration");kr(A0,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(R0,"onTransitionEnd");zi("onMouseEnter",["mouseout","mouseover"]);zi("onMouseLeave",["mouseout","mouseover"]);zi("onPointerEnter",["pointerout","pointerover"]);zi("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ik=new Set("cancel close invalid load scroll toggle".split(" ").concat(bs));function ng(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nI(r,e,void 0,t),t.currentTarget=null}function b0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ng(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ng(i,a,u),s=l}}}if(pl)throw t=Bh,pl=!1,Bh=null,t}function we(t,e){var n=e[Zh];n===void 0&&(n=e[Zh]=new Set);var r=t+"__bubble";n.has(r)||(D0(e,t,2,!1),n.add(r))}function Bc(t,e,n){var r=0;e&&(r|=4),D0(n,t,r,e)}var xa="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[xa]){t[xa]=!0,Uv.forEach(function(n){n!=="selectionchange"&&(ik.has(n)||Bc(n,!1,t),Bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xa]||(e[xa]=!0,Bc("selectionchange",!1,e))}}function D0(t,e,n,r){switch(m0(e)){case 1:var i=vI;break;case 4:i=wI;break;default:i=_f}n=i.bind(null,e,n,t),i=void 0,!zh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Hc(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}t0(function(){var u=s,c=vf(n),h=[];e:{var d=N0.get(t);if(d!==void 0){var m=kf,g=t;switch(t){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":m=OI;break;case"focusin":g="focus",m=Mc;break;case"focusout":g="blur",m=Mc;break;case"beforeblur":case"afterblur":m=Mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=_I;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=MI;break;case C0:case x0:case A0:m=TI;break;case R0:m=UI;break;case"scroll":m=EI;break;case"wheel":m=VI;break;case"copy":case"cut":case"paste":m=xI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=qm}var v=(e&4)!==0,_=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,y;f!==null;){y=f;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,p!==null&&(S=no(f,p),S!=null&&v.push(uo(f,S,y)))),_)break;f=f.return}0<v.length&&(d=new m(d,g,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==jh&&(g=n.relatedTarget||n.fromElement)&&(Or(g)||g[On]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?Or(g):null,g!==null&&(_=oi(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(v=Hm,S="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=qm,S="onPointerLeave",p="onPointerEnter",f="pointer"),_=m==null?d:Si(m),y=g==null?d:Si(g),d=new v(S,f+"leave",m,n,c),d.target=_,d.relatedTarget=y,S=null,Or(c)===u&&(v=new v(p,f+"enter",g,n,c),v.target=y,v.relatedTarget=_,S=v),_=S,m&&g)t:{for(v=m,p=g,f=0,y=v;y;y=pi(y))f++;for(y=0,S=p;S;S=pi(S))y++;for(;0<f-y;)v=pi(v),f--;for(;0<y-f;)p=pi(p),y--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=pi(v),p=pi(p)}v=null}else v=null;m!==null&&rg(h,d,m,v,!1),g!==null&&_!==null&&rg(h,_,g,v,!0)}}e:{if(d=u?Si(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var I=GI;else if(Qm(d))if(S0)I=JI;else{I=YI;var b=QI}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=XI);if(I&&(I=I(t,u))){E0(h,I,n,c);break e}b&&b(t,d,u),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Lh(d,"number",d.value)}switch(b=u?Si(u):window,t){case"focusin":(Qm(b)||b.contentEditable==="true")&&(wi=b,Kh=u,Vs=null);break;case"focusout":Vs=Kh=wi=null;break;case"mousedown":Gh=!0;break;case"contextmenu":case"mouseup":case"dragend":Gh=!1,eg(h,n,c);break;case"selectionchange":if(tk)break;case"keydown":case"keyup":eg(h,n,c)}var D;if(Cf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else vi?v0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(y0&&n.locale!=="ko"&&(vi||P!=="onCompositionStart"?P==="onCompositionEnd"&&vi&&(D=g0()):(tr=c,If="value"in tr?tr.value:tr.textContent,vi=!0)),b=wl(u,P),0<b.length&&(P=new Wm(P,t,null,n,c),h.push({event:P,listeners:b}),D?P.data=D:(D=w0(n),D!==null&&(P.data=D)))),(D=BI?HI(t,n):WI(t,n))&&(u=wl(u,"onBeforeInput"),0<u.length&&(c=new Wm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=D))}b0(h,e)})}function uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=no(t,n),s!=null&&r.unshift(uo(t,s,i)),s=no(t,e),s!=null&&r.push(uo(t,s,i))),t=t.return}return r}function pi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=no(n,s),l!=null&&o.unshift(uo(n,l,a))):i||(l=no(n,s),l!=null&&o.push(uo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sk=/\r\n?/g,ok=/\u0000|\uFFFD/g;function ig(t){return(typeof t=="string"?t:""+t).replace(sk,`
`).replace(ok,"")}function Aa(t,e,n){if(e=ig(e),ig(t)!==e&&n)throw Error(k(425))}function El(){}var Qh=null,Yh=null;function Xh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jh=typeof setTimeout=="function"?setTimeout:void 0,ak=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,lk=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(t){return sg.resolve(null).then(t).catch(uk)}:Jh;function uk(t){setTimeout(function(){throw t})}function Wc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),so(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);so(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function og(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),pn="__reactFiber$"+os,co="__reactProps$"+os,On="__reactContainer$"+os,Zh="__reactEvents$"+os,ck="__reactListeners$"+os,hk="__reactHandles$"+os;function Or(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[On]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=og(t);t!==null;){if(n=t[pn])return n;t=og(t)}return e}t=n,n=t.parentNode}return null}function zo(t){return t=t[pn]||t[On],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Si(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function hu(t){return t[co]||null}var ed=[],_i=-1;function Tr(t){return{current:t}}function Ee(t){0>_i||(t.current=ed[_i],ed[_i]=null,_i--)}function ye(t,e){_i++,ed[_i]=t.current,t.current=e}var Er={},mt=Tr(Er),At=Tr(!1),qr=Er;function Bi(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Rt(t){return t=t.childContextTypes,t!=null}function Sl(){Ee(At),Ee(mt)}function ag(t,e,n){if(mt.current!==Er)throw Error(k(168));ye(mt,e),ye(At,n)}function P0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,Q_(t)||"Unknown",i));return Ce({},n,r)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,qr=mt.current,ye(mt,t),ye(At,At.current),!0}function lg(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=P0(t,e,qr),r.__reactInternalMemoizedMergedChildContext=t,Ee(At),Ee(mt),ye(mt,t)):Ee(At),ye(At,n)}var In=null,du=!1,qc=!1;function O0(t){In===null?In=[t]:In.push(t)}function dk(t){du=!0,O0(t)}function Cr(){if(!qc&&In!==null){qc=!0;var t=0,e=de;try{var n=In;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,du=!1}catch(i){throw In!==null&&(In=In.slice(t+1)),s0(wf,Cr),i}finally{de=e,qc=!1}}return null}var Ii=[],ki=0,Il=null,kl=0,jt=[],Vt=0,Kr=null,kn=1,Tn="";function Nr(t,e){Ii[ki++]=kl,Ii[ki++]=Il,Il=t,kl=e}function L0(t,e,n){jt[Vt++]=kn,jt[Vt++]=Tn,jt[Vt++]=Kr,Kr=t;var r=kn;t=Tn;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kn=1<<32-rn(e)+i|n<<i|r,Tn=s+t}else kn=1<<s|n<<i|r,Tn=t}function Af(t){t.return!==null&&(Nr(t,1),L0(t,1,0))}function Rf(t){for(;t===Il;)Il=Ii[--ki],Ii[ki]=null,kl=Ii[--ki],Ii[ki]=null;for(;t===Kr;)Kr=jt[--Vt],jt[Vt]=null,Tn=jt[--Vt],jt[Vt]=null,kn=jt[--Vt],jt[Vt]=null}var Pt=null,Dt=null,Se=!1,nn=null;function $0(t,e){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ug(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Dt=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kr!==null?{id:kn,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Dt=null,!0):!1;default:return!1}}function td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nd(t){if(Se){var e=Dt;if(e){var n=e;if(!ug(t,e)){if(td(t))throw Error(k(418));e=ar(n.nextSibling);var r=Pt;e&&ug(t,e)?$0(r,n):(t.flags=t.flags&-4097|2,Se=!1,Pt=t)}}else{if(td(t))throw Error(k(418));t.flags=t.flags&-4097|2,Se=!1,Pt=t}}}function cg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function Ra(t){if(t!==Pt)return!1;if(!Se)return cg(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xh(t.type,t.memoizedProps)),e&&(e=Dt)){if(td(t))throw M0(),Error(k(418));for(;e;)$0(t,e),e=ar(e.nextSibling)}if(cg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dt=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dt=null}}else Dt=Pt?ar(t.stateNode.nextSibling):null;return!0}function M0(){for(var t=Dt;t;)t=ar(t.nextSibling)}function Hi(){Dt=Pt=null,Se=!1}function Nf(t){nn===null?nn=[t]:nn.push(t)}var fk=zn.ReactCurrentBatchConfig;function en(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Tl=Tr(null),Cl=null,Ti=null,bf=null;function Df(){bf=Ti=Cl=null}function Pf(t){var e=Tl.current;Ee(Tl),t._currentValue=e}function rd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $i(t,e){Cl=t,bf=Ti=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ct=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(bf!==t)if(t={context:t,memoizedValue:e,next:null},Ti===null){if(Cl===null)throw Error(k(308));Ti=t,Cl.dependencies={lanes:0,firstContext:t}}else Ti=Ti.next=t;return e}var Lr=null;function Of(t){Lr===null?Lr=[t]:Lr.push(t)}function F0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Of(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ln(t,r)}function Ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gn=!1;function Lf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function U0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(se&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ln(t,n)}return i=r.interleaved,i===null?(e.next=e,Of(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ln(t,n)}function Ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ef(t,n)}}function hg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,r){var i=t.updateQueue;Gn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,m=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(m,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(m,h,d):g,d==null)break e;h=Ce({},h,d);break e;case 2:Gn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=h}}function dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var j0=new Fv.Component().refs;function id(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fu={isMounted:function(t){return(t=t._reactInternals)?oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=cr(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,i),e!==null&&(sn(e,t,i,r),Ya(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=cr(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,i),e!==null&&(sn(e,t,i,r),Ya(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=cr(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=lr(t,i,r),e!==null&&(sn(e,t,r,n),Ya(e,t,r))}};function fg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ao(n,r)||!ao(i,s):!0}function V0(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(i=Rt(e)?qr:mt.current,r=e.contextTypes,s=(r=r!=null)?Bi(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fu.enqueueReplaceState(e,e.state,null)}function sd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=j0,Lf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Gt(s):(s=Rt(e)?qr:mt.current,i.context=Bi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(id(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fu.enqueueReplaceState(i,i.state,null),xl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===j0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Na(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mg(t){var e=t._init;return e(t._payload)}function z0(t){function e(p,f){if(t){var y=p.deletions;y===null?(p.deletions=[f],p.flags|=16):y.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=hr(p,f),p.index=0,p.sibling=null,p}function s(p,f,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<f?(p.flags|=2,f):y):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,y,S){return f===null||f.tag!==6?(f=Zc(y,p.mode,S),f.return=p,f):(f=i(f,y),f.return=p,f)}function l(p,f,y,S){var I=y.type;return I===yi?c(p,f,y.props.children,S,y.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Kn&&mg(I)===f.type)?(S=i(f,y.props),S.ref=Is(p,f,y),S.return=p,S):(S=nl(y.type,y.key,y.props,null,p.mode,S),S.ref=Is(p,f,y),S.return=p,S)}function u(p,f,y,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=eh(y,p.mode,S),f.return=p,f):(f=i(f,y.children||[]),f.return=p,f)}function c(p,f,y,S,I){return f===null||f.tag!==7?(f=zr(y,p.mode,S,I),f.return=p,f):(f=i(f,y),f.return=p,f)}function h(p,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Zc(""+f,p.mode,y),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case wa:return y=nl(f.type,f.key,f.props,null,p.mode,y),y.ref=Is(p,null,f),y.return=p,y;case gi:return f=eh(f,p.mode,y),f.return=p,f;case Kn:var S=f._init;return h(p,S(f._payload),y)}if(Rs(f)||vs(f))return f=zr(f,p.mode,y,null),f.return=p,f;Na(p,f)}return null}function d(p,f,y,S){var I=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(p,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case wa:return y.key===I?l(p,f,y,S):null;case gi:return y.key===I?u(p,f,y,S):null;case Kn:return I=y._init,d(p,f,I(y._payload),S)}if(Rs(y)||vs(y))return I!==null?null:c(p,f,y,S,null);Na(p,y)}return null}function m(p,f,y,S,I){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(y)||null,a(f,p,""+S,I);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case wa:return p=p.get(S.key===null?y:S.key)||null,l(f,p,S,I);case gi:return p=p.get(S.key===null?y:S.key)||null,u(f,p,S,I);case Kn:var b=S._init;return m(p,f,y,b(S._payload),I)}if(Rs(S)||vs(S))return p=p.get(y)||null,c(f,p,S,I,null);Na(f,S)}return null}function g(p,f,y,S){for(var I=null,b=null,D=f,P=f=0,J=null;D!==null&&P<y.length;P++){D.index>P?(J=D,D=null):J=D.sibling;var B=d(p,D,y[P],S);if(B===null){D===null&&(D=J);break}t&&D&&B.alternate===null&&e(p,D),f=s(B,f,P),b===null?I=B:b.sibling=B,b=B,D=J}if(P===y.length)return n(p,D),Se&&Nr(p,P),I;if(D===null){for(;P<y.length;P++)D=h(p,y[P],S),D!==null&&(f=s(D,f,P),b===null?I=D:b.sibling=D,b=D);return Se&&Nr(p,P),I}for(D=r(p,D);P<y.length;P++)J=m(D,p,P,y[P],S),J!==null&&(t&&J.alternate!==null&&D.delete(J.key===null?P:J.key),f=s(J,f,P),b===null?I=J:b.sibling=J,b=J);return t&&D.forEach(function(Pe){return e(p,Pe)}),Se&&Nr(p,P),I}function v(p,f,y,S){var I=vs(y);if(typeof I!="function")throw Error(k(150));if(y=I.call(y),y==null)throw Error(k(151));for(var b=I=null,D=f,P=f=0,J=null,B=y.next();D!==null&&!B.done;P++,B=y.next()){D.index>P?(J=D,D=null):J=D.sibling;var Pe=d(p,D,B.value,S);if(Pe===null){D===null&&(D=J);break}t&&D&&Pe.alternate===null&&e(p,D),f=s(Pe,f,P),b===null?I=Pe:b.sibling=Pe,b=Pe,D=J}if(B.done)return n(p,D),Se&&Nr(p,P),I;if(D===null){for(;!B.done;P++,B=y.next())B=h(p,B.value,S),B!==null&&(f=s(B,f,P),b===null?I=B:b.sibling=B,b=B);return Se&&Nr(p,P),I}for(D=r(p,D);!B.done;P++,B=y.next())B=m(D,p,P,B.value,S),B!==null&&(t&&B.alternate!==null&&D.delete(B.key===null?P:B.key),f=s(B,f,P),b===null?I=B:b.sibling=B,b=B);return t&&D.forEach(function(Ne){return e(p,Ne)}),Se&&Nr(p,P),I}function _(p,f,y,S){if(typeof y=="object"&&y!==null&&y.type===yi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case wa:e:{for(var I=y.key,b=f;b!==null;){if(b.key===I){if(I=y.type,I===yi){if(b.tag===7){n(p,b.sibling),f=i(b,y.props.children),f.return=p,p=f;break e}}else if(b.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Kn&&mg(I)===b.type){n(p,b.sibling),f=i(b,y.props),f.ref=Is(p,b,y),f.return=p,p=f;break e}n(p,b);break}else e(p,b);b=b.sibling}y.type===yi?(f=zr(y.props.children,p.mode,S,y.key),f.return=p,p=f):(S=nl(y.type,y.key,y.props,null,p.mode,S),S.ref=Is(p,f,y),S.return=p,p=S)}return o(p);case gi:e:{for(b=y.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(p,f.sibling),f=i(f,y.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=eh(y,p.mode,S),f.return=p,p=f}return o(p);case Kn:return b=y._init,_(p,f,b(y._payload),S)}if(Rs(y))return g(p,f,y,S);if(vs(y))return v(p,f,y,S);Na(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,y),f.return=p,p=f):(n(p,f),f=Zc(y,p.mode,S),f.return=p,p=f),o(p)):n(p,f)}return _}var Wi=z0(!0),B0=z0(!1),Bo={},yn=Tr(Bo),ho=Tr(Bo),fo=Tr(Bo);function $r(t){if(t===Bo)throw Error(k(174));return t}function $f(t,e){switch(ye(fo,e),ye(ho,t),ye(yn,Bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mh(e,t)}Ee(yn),ye(yn,e)}function qi(){Ee(yn),Ee(ho),Ee(fo)}function H0(t){$r(fo.current);var e=$r(yn.current),n=Mh(e,t.type);e!==n&&(ye(ho,t),ye(yn,n))}function Mf(t){ho.current===t&&(Ee(yn),Ee(ho))}var ke=Tr(0);function Al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kc=[];function Ff(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var Xa=zn.ReactCurrentDispatcher,Gc=zn.ReactCurrentBatchConfig,Gr=0,Te=null,Ue=null,We=null,Rl=!1,zs=!1,po=0,pk=0;function lt(){throw Error(k(321))}function Uf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function jf(t,e,n,r,i,s){if(Gr=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xa.current=t===null||t.memoizedState===null?vk:wk,t=n(r,i),zs){s=0;do{if(zs=!1,po=0,25<=s)throw Error(k(301));s+=1,We=Ue=null,e.updateQueue=null,Xa.current=Ek,t=n(r,i)}while(zs)}if(Xa.current=Nl,e=Ue!==null&&Ue.next!==null,Gr=0,We=Ue=Te=null,Rl=!1,e)throw Error(k(300));return t}function Vf(){var t=po!==0;return po=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Te.memoizedState=We=t:We=We.next=t,We}function Qt(){if(Ue===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=We===null?Te.memoizedState:We.next;if(e!==null)We=e,Ue=t;else{if(t===null)throw Error(k(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},We===null?Te.memoizedState=We=t:We=We.next=t}return We}function mo(t,e){return typeof e=="function"?e(t):e}function Qc(t){var e=Qt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Gr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Te.lanes|=c,Qr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,an(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,Qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yc(t){var e=Qt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);an(s,e.memoizedState)||(Ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function W0(){}function q0(t,e){var n=Te,r=Qt(),i=e(),s=!an(r.memoizedState,i);if(s&&(r.memoizedState=i,Ct=!0),r=r.queue,zf(Q0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,go(9,G0.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(k(349));(Gr&30)!==0||K0(n,e,i)}return i}function K0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G0(t,e,n,r){e.value=n,e.getSnapshot=r,Y0(e)&&X0(t)}function Q0(t,e,n){return n(function(){Y0(e)&&X0(t)})}function Y0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!an(t,n)}catch{return!0}}function X0(t){var e=Ln(t,1);e!==null&&sn(e,t,1,-1)}function gg(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},e.queue=t,t=t.dispatch=yk.bind(null,Te,t),[e.memoizedState,t]}function go(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function J0(){return Qt().memoizedState}function Ja(t,e,n,r){var i=dn();Te.flags|=t,i.memoizedState=go(1|e,n,void 0,r===void 0?null:r)}function pu(t,e,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&Uf(r,o.deps)){i.memoizedState=go(e,n,s,r);return}}Te.flags|=t,i.memoizedState=go(1|e,n,s,r)}function yg(t,e){return Ja(8390656,8,t,e)}function zf(t,e){return pu(2048,8,t,e)}function Z0(t,e){return pu(4,2,t,e)}function e1(t,e){return pu(4,4,t,e)}function t1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n1(t,e,n){return n=n!=null?n.concat([t]):null,pu(4,4,t1.bind(null,e,t),n)}function Bf(){}function r1(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Uf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function i1(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Uf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function s1(t,e,n){return(Gr&21)===0?(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n):(an(n,e)||(n=l0(),Te.lanes|=n,Qr|=n,t.baseState=!0),e)}function mk(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Gc.transition;Gc.transition={};try{t(!1),e()}finally{de=n,Gc.transition=r}}function o1(){return Qt().memoizedState}function gk(t,e,n){var r=cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},a1(t))l1(e,n);else if(n=F0(t,e,n,r),n!==null){var i=Et();sn(n,t,r,i),u1(n,e,r)}}function yk(t,e,n){var r=cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(a1(t))l1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,an(a,o)){var l=e.interleaved;l===null?(i.next=i,Of(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=F0(t,e,i,r),n!==null&&(i=Et(),sn(n,t,r,i),u1(n,e,r))}}function a1(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function l1(t,e){zs=Rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u1(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ef(t,n)}}var Nl={readContext:Gt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},vk={readContext:Gt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:yg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ja(4194308,4,t1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ja(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gk.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:gg,useDebugValue:Bf,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=gg(!1),e=t[0];return t=mk.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=dn();if(Se){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),qe===null)throw Error(k(349));(Gr&30)!==0||K0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,yg(Q0.bind(null,r,s,t),[t]),r.flags|=2048,go(9,G0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=qe.identifierPrefix;if(Se){var n=Tn,r=kn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wk={readContext:Gt,useCallback:r1,useContext:Gt,useEffect:zf,useImperativeHandle:n1,useInsertionEffect:Z0,useLayoutEffect:e1,useMemo:i1,useReducer:Qc,useRef:J0,useState:function(){return Qc(mo)},useDebugValue:Bf,useDeferredValue:function(t){var e=Qt();return s1(e,Ue.memoizedState,t)},useTransition:function(){var t=Qc(mo)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:W0,useSyncExternalStore:q0,useId:o1,unstable_isNewReconciler:!1},Ek={readContext:Gt,useCallback:r1,useContext:Gt,useEffect:zf,useImperativeHandle:n1,useInsertionEffect:Z0,useLayoutEffect:e1,useMemo:i1,useReducer:Yc,useRef:J0,useState:function(){return Yc(mo)},useDebugValue:Bf,useDeferredValue:function(t){var e=Qt();return Ue===null?e.memoizedState=t:s1(e,Ue.memoizedState,t)},useTransition:function(){var t=Yc(mo)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:W0,useSyncExternalStore:q0,useId:o1,unstable_isNewReconciler:!1};function Ki(t,e){try{var n="",r=e;do n+=G_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Xc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function od(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Sk=typeof WeakMap=="function"?WeakMap:Map;function c1(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Dl||(Dl=!0,gd=r),od(t,e)},n}function h1(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){od(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){od(t,e),typeof r!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Sk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Lk.bind(null,t,e,n),e.then(t,t))}function wg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Eg(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var _k=zn.ReactCurrentOwner,Ct=!1;function vt(t,e,n,r){e.child=t===null?B0(e,null,n,r):Wi(e,t.child,n,r)}function Sg(t,e,n,r,i){n=n.render;var s=e.ref;return $i(e,i),r=jf(t,e,n,r,s,i),n=Vf(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(Se&&n&&Af(e),e.flags|=1,vt(t,e,r,i),e.child)}function _g(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,d1(t,e,s,r,i)):(t=nl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(o,r)&&t.ref===e.ref)return $n(t,e,i)}return e.flags|=1,t=hr(s,r),t.ref=e.ref,t.return=e,e.child=t}function d1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ao(s,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ct=!0);else return e.lanes=t.lanes,$n(t,e,i)}return ad(t,e,n,r,i)}function f1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(xi,bt),bt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(xi,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(xi,bt),bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(xi,bt),bt|=r;return vt(t,e,i,n),e.child}function p1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ad(t,e,n,r,i){var s=Rt(n)?qr:mt.current;return s=Bi(e,s),$i(e,i),n=jf(t,e,n,r,s,i),r=Vf(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(Se&&r&&Af(e),e.flags|=1,vt(t,e,n,i),e.child)}function Ig(t,e,n,r,i){if(Rt(n)){var s=!0;_l(e)}else s=!1;if($i(e,i),e.stateNode===null)Za(t,e),V0(e,n,r),sd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gt(u):(u=Rt(n)?qr:mt.current,u=Bi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&pg(e,o,r,u),Gn=!1;var d=e.memoizedState;o.state=d,xl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||At.current||Gn?(typeof c=="function"&&(id(e,n,c,r),l=e.memoizedState),(a=Gn||fg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,U0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:en(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gt(l):(l=Rt(n)?qr:mt.current,l=Bi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&pg(e,o,r,l),Gn=!1,d=e.memoizedState,o.state=d,xl(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||At.current||Gn?(typeof m=="function"&&(id(e,n,m,r),g=e.memoizedState),(u=Gn||fg(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return ld(t,e,n,r,s,i)}function ld(t,e,n,r,i,s){p1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&lg(e,n,!1),$n(t,e,s);r=e.stateNode,_k.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wi(e,t.child,null,s),e.child=Wi(e,null,a,s)):vt(t,e,a,s),e.memoizedState=r.state,i&&lg(e,n,!0),e.child}function m1(t){var e=t.stateNode;e.pendingContext?ag(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ag(t,e.context,!1),$f(t,e.containerInfo)}function kg(t,e,n,r,i){return Hi(),Nf(i),e.flags|=256,vt(t,e,n,r),e.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function g1(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(ke,i&1),t===null)return nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yu(o,r,0,null),t=zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cd(n),e.memoizedState=ud,t):Hf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ik(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=hr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=hr(a,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?cd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ud,r}return s=t.child,t=s.sibling,r=hr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hf(t,e){return e=yu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ba(t,e,n,r){return r!==null&&Nf(r),Wi(e,t.child,null,n),t=Hf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ik(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Xc(Error(k(422))),ba(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yu({mode:"visible",children:r.children},i,0,null),s=zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Wi(e,t.child,null,o),e.child.memoizedState=cd(o),e.memoizedState=ud,s);if((e.mode&1)===0)return ba(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Xc(s,r,void 0),ba(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ct||a){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ln(t,i),sn(r,t,i,-1))}return Yf(),r=Xc(Error(k(421))),ba(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$k.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Dt=ar(i.nextSibling),Pt=e,Se=!0,nn=null,t!==null&&(jt[Vt++]=kn,jt[Vt++]=Tn,jt[Vt++]=Kr,kn=t.id,Tn=t.overflow,Kr=e),e=Hf(e,r.children),e.flags|=4096,e)}function Tg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rd(t.return,e,n)}function Jc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function y1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=ke.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,n,e);else if(t.tag===19)Tg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(ke,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Al(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Jc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Al(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Jc(e,!0,n,null,s);break;case"together":Jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kk(t,e,n){switch(e.tag){case 3:m1(e),Hi();break;case 5:H0(e);break;case 1:Rt(e.type)&&_l(e);break;case 4:$f(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Tl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(ke,ke.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?g1(t,e,n):(ye(ke,ke.current&1),t=$n(t,e,n),t!==null?t.sibling:null);ye(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return y1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,f1(t,e,n)}return $n(t,e,n)}var v1,hd,w1,E1;v1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hd=function(){};w1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$r(yn.current);var s=null;switch(n){case"input":i=Ph(t,i),r=Ph(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=$h(t,i),r=$h(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=El)}Fh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(eo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(eo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&we("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};E1=function(t,e,n,r){n!==r&&(e.flags|=4)};function ks(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Tk(t,e,n){var r=e.pendingProps;switch(Rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return Rt(e.type)&&Sl(),ut(e),null;case 3:return r=e.stateNode,qi(),Ee(At),Ee(mt),Ff(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,nn!==null&&(wd(nn),nn=null))),hd(t,e),ut(e),null;case 5:Mf(e);var i=$r(fo.current);if(n=e.type,t!==null&&e.stateNode!=null)w1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return ut(e),null}if(t=$r(yn.current),Ra(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pn]=e,r[co]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<bs.length;i++)we(bs[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Om(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":$m(r,s),we("invalid",r)}Fh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Aa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Aa(r.textContent,a,t),i=["children",""+a]):eo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Ea(r),Lm(r,s,!0);break;case"textarea":Ea(r),Mm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=El)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[co]=r,v1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Uh(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<bs.length;i++)we(bs[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Om(t,r),i=Ph(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),we("invalid",t);break;case"textarea":$m(t,r),i=$h(t,r),we("invalid",t);break;default:i=r}Fh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&to(t,l):typeof l=="number"&&to(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(eo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&we("scroll",t):l!=null&&pf(t,s,l,o))}switch(n){case"input":Ea(t),Lm(t,r,!1);break;case"textarea":Ea(t),Mm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Di(t,!!r.multiple,s,!1):r.defaultValue!=null&&Di(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)E1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=$r(fo.current),$r(yn.current),Ra(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:Aa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Aa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return ut(e),null;case 13:if(Ee(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Dt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)M0(),Hi(),e.flags|=98560,s=!1;else if(s=Ra(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[pn]=e}else Hi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else nn!==null&&(wd(nn),nn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ke.current&1)!==0?je===0&&(je=3):Yf())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return qi(),hd(t,e),t===null&&lo(e.stateNode.containerInfo),ut(e),null;case 10:return Pf(e.type._context),ut(e),null;case 17:return Rt(e.type)&&Sl(),ut(e),null;case 19:if(Ee(ke),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ks(s,!1);else{if(je!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Al(t),o!==null){for(e.flags|=128,ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Gi&&(e.flags|=128,r=!0,ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=Al(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return ut(e),null}else 2*De()-s.renderingStartTime>Gi&&n!==1073741824&&(e.flags|=128,r=!0,ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=ke.current,ye(ke,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return Qf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(bt&1073741824)!==0&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function Ck(t,e){switch(Rf(e),e.tag){case 1:return Rt(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qi(),Ee(At),Ee(mt),Ff(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Mf(e),null;case 13:if(Ee(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Hi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(ke),null;case 4:return qi(),null;case 10:return Pf(e.type._context),null;case 22:case 23:return Qf(),null;case 24:return null;default:return null}}var Da=!1,ht=!1,xk=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ci(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function dd(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Cg=!1;function Ak(t,e){if(Qh=yl,t=k0(),xf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yh={focusedElem:t,selectionRange:n},yl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,_=g.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:en(e.type,v),_);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(S){Ae(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return g=Cg,Cg=!1,g}function Bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&dd(e,n,s)}i=i.next}while(i!==r)}}function mu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function S1(t){var e=t.alternate;e!==null&&(t.alternate=null,S1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[co],delete e[Zh],delete e[ck],delete e[hk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _1(t){return t.tag===5||t.tag===3||t.tag===4}function xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(r!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}function md(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}var et=null,tn=!1;function Wn(t,e,n){for(n=n.child;n!==null;)I1(t,e,n),n=n.sibling}function I1(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(au,n)}catch{}switch(n.tag){case 5:ht||Ci(n,e);case 6:var r=et,i=tn;et=null,Wn(t,e,n),et=r,tn=i,et!==null&&(tn?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(tn?(t=et,n=n.stateNode,t.nodeType===8?Wc(t.parentNode,n):t.nodeType===1&&Wc(t,n),so(t)):Wc(et,n.stateNode));break;case 4:r=et,i=tn,et=n.stateNode.containerInfo,tn=!0,Wn(t,e,n),et=r,tn=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&dd(n,e,o),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!ht&&(Ci(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ae(n,e,a)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,Wn(t,e,n),ht=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function Ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xk),e.forEach(function(r){var i=Mk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,tn=!1;break e;case 3:et=a.stateNode.containerInfo,tn=!0;break e;case 4:et=a.stateNode.containerInfo,tn=!0;break e}a=a.return}if(et===null)throw Error(k(160));I1(s,o,i),et=null,tn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)k1(e,t),e=e.sibling}function k1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zt(e,t),hn(t),r&4){try{Bs(3,t,t.return),mu(3,t)}catch(v){Ae(t,t.return,v)}try{Bs(5,t,t.return)}catch(v){Ae(t,t.return,v)}}break;case 1:Zt(e,t),hn(t),r&512&&n!==null&&Ci(n,n.return);break;case 5:if(Zt(e,t),hn(t),r&512&&n!==null&&Ci(n,n.return),t.flags&32){var i=t.stateNode;try{to(i,"")}catch(v){Ae(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Wv(i,s),Uh(a,o);var u=Uh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Yv(i,h):c==="dangerouslySetInnerHTML"?Gv(i,h):c==="children"?to(i,h):pf(i,c,h,u)}switch(a){case"input":Oh(i,s);break;case"textarea":qv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Di(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Di(i,!!s.multiple,s.defaultValue,!0):Di(i,!!s.multiple,s.multiple?[]:"",!1))}i[co]=s}catch(v){Ae(t,t.return,v)}}break;case 6:if(Zt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ae(t,t.return,v)}}break;case 3:if(Zt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(e.containerInfo)}catch(v){Ae(t,t.return,v)}break;case 4:Zt(e,t),hn(t);break;case 13:Zt(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kf=De())),r&4&&Ag(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ht=(u=ht)||c,Zt(e,t),ht=u):Zt(e,t),hn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for($=t,c=t.child;c!==null;){for(h=$=c;$!==null;){switch(d=$,m=d.child,d.tag){case 0:case 11:case 14:case 15:Bs(4,d,d.return);break;case 1:Ci(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Ae(r,n,v)}}break;case 5:Ci(d,d.return);break;case 22:if(d.memoizedState!==null){Ng(h);continue}}m!==null?(m.return=d,$=m):Ng(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qv("display",o))}catch(v){Ae(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Ae(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Zt(e,t),hn(t),r&4&&Ag(t);break;case 21:break;default:Zt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_1(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(to(i,""),r.flags&=-33);var s=xg(t);md(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=xg(t);pd(t,a,o);break;default:throw Error(k(161))}}catch(l){Ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rk(t,e,n){$=t,T1(t)}function T1(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Da;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ht;a=Da;var u=ht;if(Da=o,(ht=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?bg(i):l!==null?(l.return=o,$=l):bg(i);for(;s!==null;)$=s,T1(s),s=s.sibling;$=i,Da=a,ht=u}Rg(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,$=s):Rg(t)}}function Rg(t){for(;$!==null;){var e=$;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:ht||mu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:en(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&so(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ht||e.flags&512&&fd(e)}catch(d){Ae(e,e.return,d)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Ng(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function bg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mu(4,e)}catch(l){Ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ae(e,i,l)}}var s=e.return;try{fd(e)}catch(l){Ae(e,s,l)}break;case 5:var o=e.return;try{fd(e)}catch(l){Ae(e,o,l)}}}catch(l){Ae(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var Nk=Math.ceil,bl=zn.ReactCurrentDispatcher,Wf=zn.ReactCurrentOwner,Bt=zn.ReactCurrentBatchConfig,se=0,qe=null,$e=null,rt=0,bt=0,xi=Tr(0),je=0,yo=null,Qr=0,gu=0,qf=0,Hs=null,kt=null,Kf=0,Gi=1/0,_n=null,Dl=!1,gd=null,ur=null,Pa=!1,nr=null,Pl=0,Ws=0,yd=null,el=-1,tl=0;function Et(){return(se&6)!==0?De():el!==-1?el:el=De()}function cr(t){return(t.mode&1)===0?1:(se&2)!==0&&rt!==0?rt&-rt:fk.transition!==null?(tl===0&&(tl=l0()),tl):(t=de,t!==0||(t=window.event,t=t===void 0?16:m0(t.type)),t)}function sn(t,e,n,r){if(50<Ws)throw Ws=0,yd=null,Error(k(185));jo(t,n,r),((se&2)===0||t!==qe)&&(t===qe&&((se&2)===0&&(gu|=n),je===4&&Yn(t,rt)),Nt(t,r),n===1&&se===0&&(e.mode&1)===0&&(Gi=De()+500,du&&Cr()))}function Nt(t,e){var n=t.callbackNode;fI(t,e);var r=gl(t,t===qe?rt:0);if(r===0)n!==null&&jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jm(n),e===1)t.tag===0?dk(Dg.bind(null,t)):O0(Dg.bind(null,t)),lk(function(){(se&6)===0&&Cr()}),n=null;else{switch(u0(r)){case 1:n=wf;break;case 4:n=o0;break;case 16:n=ml;break;case 536870912:n=a0;break;default:n=ml}n=P1(n,C1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C1(t,e){if(el=-1,tl=0,(se&6)!==0)throw Error(k(327));var n=t.callbackNode;if(Mi()&&t.callbackNode!==n)return null;var r=gl(t,t===qe?rt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Ol(t,r);else{e=r;var i=se;se|=2;var s=A1();(qe!==t||rt!==e)&&(_n=null,Gi=De()+500,Vr(t,e));do try{Pk();break}catch(a){x1(t,a)}while(1);Df(),bl.current=s,se=i,$e!==null?e=0:(qe=null,rt=0,e=je)}if(e!==0){if(e===2&&(i=Hh(t),i!==0&&(r=i,e=vd(t,i))),e===1)throw n=yo,Vr(t,0),Yn(t,r),Nt(t,De()),n;if(e===6)Yn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!bk(i)&&(e=Ol(t,r),e===2&&(s=Hh(t),s!==0&&(r=s,e=vd(t,s))),e===1))throw n=yo,Vr(t,0),Yn(t,r),Nt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:br(t,kt,_n);break;case 3:if(Yn(t,r),(r&130023424)===r&&(e=Kf+500-De(),10<e)){if(gl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jh(br.bind(null,t,kt,_n),e);break}br(t,kt,_n);break;case 4:if(Yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nk(r/1960))-r,10<r){t.timeoutHandle=Jh(br.bind(null,t,kt,_n),r);break}br(t,kt,_n);break;case 5:br(t,kt,_n);break;default:throw Error(k(329))}}}return Nt(t,De()),t.callbackNode===n?C1.bind(null,t):null}function vd(t,e){var n=Hs;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=Ol(t,e),t!==2&&(e=kt,kt=n,e!==null&&wd(e)),t}function wd(t){kt===null?kt=t:kt.push.apply(kt,t)}function bk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!an(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yn(t,e){for(e&=~qf,e&=~gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function Dg(t){if((se&6)!==0)throw Error(k(327));Mi();var e=gl(t,0);if((e&1)===0)return Nt(t,De()),null;var n=Ol(t,e);if(t.tag!==0&&n===2){var r=Hh(t);r!==0&&(e=r,n=vd(t,r))}if(n===1)throw n=yo,Vr(t,0),Yn(t,e),Nt(t,De()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,kt,_n),Nt(t,De()),null}function Gf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Gi=De()+500,du&&Cr())}}function Yr(t){nr!==null&&nr.tag===0&&(se&6)===0&&Mi();var e=se;se|=1;var n=Bt.transition,r=de;try{if(Bt.transition=null,de=1,t)return t()}finally{de=r,Bt.transition=n,se=e,(se&6)===0&&Cr()}}function Qf(){bt=xi.current,Ee(xi)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ak(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Rf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:qi(),Ee(At),Ee(mt),Ff();break;case 5:Mf(r);break;case 4:qi();break;case 13:Ee(ke);break;case 19:Ee(ke);break;case 10:Pf(r.type._context);break;case 22:case 23:Qf()}n=n.return}if(qe=t,$e=t=hr(t.current,null),rt=bt=e,je=0,yo=null,qf=gu=Qr=0,kt=Hs=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function x1(t,e){do{var n=$e;try{if(Df(),Xa.current=Nl,Rl){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Rl=!1}if(Gr=0,We=Ue=Te=null,zs=!1,po=0,Wf.current=null,n===null||n.return===null){je=1,yo=e,$e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=wg(o);if(m!==null){m.flags&=-257,Eg(m,o,a,s,e),m.mode&1&&vg(s,u,e),e=m,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if((e&1)===0){vg(s,u,e),Yf();break e}l=Error(k(426))}}else if(Se&&a.mode&1){var _=wg(o);if(_!==null){(_.flags&65536)===0&&(_.flags|=256),Eg(_,o,a,s,e),Nf(Ki(l,a));break e}}s=l=Ki(l,a),je!==4&&(je=2),Hs===null?Hs=[s]:Hs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=c1(s,l,e);hg(s,p);break e;case 1:a=l;var f=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ur===null||!ur.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=h1(s,a,e);hg(s,S);break e}}s=s.return}while(s!==null)}N1(n)}catch(I){e=I,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function A1(){var t=bl.current;return bl.current=Nl,t===null?Nl:t}function Yf(){(je===0||je===3||je===2)&&(je=4),qe===null||(Qr&268435455)===0&&(gu&268435455)===0||Yn(qe,rt)}function Ol(t,e){var n=se;se|=2;var r=A1();(qe!==t||rt!==e)&&(_n=null,Vr(t,e));do try{Dk();break}catch(i){x1(t,i)}while(1);if(Df(),se=n,bl.current=r,$e!==null)throw Error(k(261));return qe=null,rt=0,je}function Dk(){for(;$e!==null;)R1($e)}function Pk(){for(;$e!==null&&!iI();)R1($e)}function R1(t){var e=D1(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?N1(t):$e=e,Wf.current=null}function N1(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Tk(n,e,bt),n!==null){$e=n;return}}else{if(n=Ck(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,$e=null;return}}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);je===0&&(je=5)}function br(t,e,n){var r=de,i=Bt.transition;try{Bt.transition=null,de=1,Ok(t,e,n,r)}finally{Bt.transition=i,de=r}return null}function Ok(t,e,n,r){do Mi();while(nr!==null);if((se&6)!==0)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pI(t,s),t===qe&&($e=qe=null,rt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Pa||(Pa=!0,P1(ml,function(){return Mi(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Bt.transition,Bt.transition=null;var o=de;de=1;var a=se;se|=4,Wf.current=null,Ak(t,n),k1(n,t),ek(Yh),yl=!!Qh,Yh=Qh=null,t.current=n,Rk(n),sI(),se=a,de=o,Bt.transition=s}else t.current=n;if(Pa&&(Pa=!1,nr=t,Pl=i),s=t.pendingLanes,s===0&&(ur=null),lI(n.stateNode),Nt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Dl)throw Dl=!1,t=gd,gd=null,t;return(Pl&1)!==0&&t.tag!==0&&Mi(),s=t.pendingLanes,(s&1)!==0?t===yd?Ws++:(Ws=0,yd=t):Ws=0,Cr(),null}function Mi(){if(nr!==null){var t=u0(Pl),e=Bt.transition,n=de;try{if(Bt.transition=null,de=16>t?16:t,nr===null)var r=!1;else{if(t=nr,nr=null,Pl=0,(se&6)!==0)throw Error(k(331));var i=se;for(se|=4,$=t.current;$!==null;){var s=$,o=s.child;if(($.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:Bs(8,c,s)}var h=c.child;if(h!==null)h.return=c,$=h;else for(;$!==null;){c=$;var d=c.sibling,m=c.return;if(S1(c),c===u){$=null;break}if(d!==null){d.return=m,$=d;break}$=m}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}$=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Bs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,$=p;break e}$=s.return}}var f=t.current;for($=f;$!==null;){o=$;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,$=y;else e:for(o=f;$!==null;){if(a=$,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:mu(9,a)}}catch(I){Ae(a,a.return,I)}if(a===o){$=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,$=S;break e}$=a.return}}if(se=i,Cr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(au,t)}catch{}r=!0}return r}finally{de=n,Bt.transition=e}}return!1}function Pg(t,e,n){e=Ki(n,e),e=c1(t,e,1),t=lr(t,e,1),e=Et(),t!==null&&(jo(t,1,e),Nt(t,e))}function Ae(t,e,n){if(t.tag===3)Pg(t,t,n);else for(;e!==null;){if(e.tag===3){Pg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ur===null||!ur.has(r))){t=Ki(n,t),t=h1(e,t,1),e=lr(e,t,1),t=Et(),e!==null&&(jo(e,1,t),Nt(e,t));break}}e=e.return}}function Lk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(rt&n)===n&&(je===4||je===3&&(rt&130023424)===rt&&500>De()-Kf?Vr(t,0):qf|=n),Nt(t,e)}function b1(t,e){e===0&&((t.mode&1)===0?e=1:(e=Ia,Ia<<=1,(Ia&130023424)===0&&(Ia=4194304)));var n=Et();t=Ln(t,e),t!==null&&(jo(t,e,n),Nt(t,n))}function $k(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),b1(t,n)}function Mk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),b1(t,n)}var D1;D1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||At.current)Ct=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ct=!1,kk(t,e,n);Ct=(t.flags&131072)!==0}else Ct=!1,Se&&(e.flags&1048576)!==0&&L0(e,kl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Za(t,e),t=e.pendingProps;var i=Bi(e,mt.current);$i(e,n),i=jf(null,e,r,t,i,n);var s=Vf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rt(r)?(s=!0,_l(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lf(e),i.updater=fu,e.stateNode=i,i._reactInternals=e,sd(e,r,t,n),e=ld(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Af(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Za(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Uk(r),t=en(r,t),i){case 0:e=ad(null,e,r,t,n);break e;case 1:e=Ig(null,e,r,t,n);break e;case 11:e=Sg(null,e,r,t,n);break e;case 14:e=_g(null,e,r,en(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),ad(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),Ig(t,e,r,i,n);case 3:e:{if(m1(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,U0(t,e),xl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ki(Error(k(423)),e),e=kg(t,e,r,n,i);break e}else if(r!==i){i=Ki(Error(k(424)),e),e=kg(t,e,r,n,i);break e}else for(Dt=ar(e.stateNode.containerInfo.firstChild),Pt=e,Se=!0,nn=null,n=B0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hi(),r===i){e=$n(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return H0(e),t===null&&nd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Xh(r,i)?o=null:s!==null&&Xh(r,s)&&(e.flags|=32),p1(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&nd(e),null;case 13:return g1(t,e,n);case 4:return $f(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wi(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),Sg(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Tl,r._currentValue),r._currentValue=o,s!==null)if(an(s.value,o)){if(s.children===i.children&&!At.current){e=$n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Nn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$i(e,n),i=Gt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=en(r,e.pendingProps),i=en(r.type,i),_g(t,e,r,i,n);case 15:return d1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),Za(t,e),e.tag=1,Rt(r)?(t=!0,_l(e)):t=!1,$i(e,n),V0(e,r,i),sd(e,r,i,n),ld(null,e,r,!0,t,n);case 19:return y1(t,e,n);case 22:return f1(t,e,n)}throw Error(k(156,e.tag))};function P1(t,e){return s0(t,e)}function Fk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(t,e,n,r){return new Fk(t,e,n,r)}function Xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Uk(t){if(typeof t=="function")return Xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gf)return 11;if(t===yf)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yi:return zr(n.children,i,s,e);case mf:o=8,i|=8;break;case Rh:return t=zt(12,n,e,i|2),t.elementType=Rh,t.lanes=s,t;case Nh:return t=zt(13,n,e,i),t.elementType=Nh,t.lanes=s,t;case bh:return t=zt(19,n,e,i),t.elementType=bh,t.lanes=s,t;case zv:return yu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jv:o=10;break e;case Vv:o=9;break e;case gf:o=11;break e;case yf:o=14;break e;case Kn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zr(t,e,n,r){return t=zt(7,t,r,e),t.lanes=n,t}function yu(t,e,n,r){return t=zt(22,t,r,e),t.elementType=zv,t.lanes=n,t.stateNode={isHidden:!1},t}function Zc(t,e,n){return t=zt(6,t,null,e),t.lanes=n,t}function eh(t,e,n){return e=zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jf(t,e,n,r,i,s,o,a,l){return t=new jk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lf(s),t}function Vk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function O1(t){if(!t)return Er;t=t._reactInternals;e:{if(oi(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Rt(n))return P0(t,n,e)}return e}function L1(t,e,n,r,i,s,o,a,l){return t=Jf(n,r,!0,t,i,s,o,a,l),t.context=O1(null),n=t.current,r=Et(),i=cr(n),s=Nn(r,i),s.callback=e!=null?e:null,lr(n,s,i),t.current.lanes=i,jo(t,i,r),Nt(t,r),t}function vu(t,e,n,r){var i=e.current,s=Et(),o=cr(i);return n=O1(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=lr(i,e,o),t!==null&&(sn(t,i,o,s),Ya(t,i,o)),o}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Og(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zf(t,e){Og(t,e),(t=t.alternate)&&Og(t,e)}function zk(){return null}var $1=typeof reportError=="function"?reportError:function(t){console.error(t)};function ep(t){this._internalRoot=t}wu.prototype.render=ep.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));vu(t,e,null,null)};wu.prototype.unmount=ep.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){vu(null,t,null,null)}),e[On]=null}};function wu(t){this._internalRoot=t}wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=d0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&p0(t)}};function tp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lg(){}function Bk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ll(o);s.call(u)}}var o=L1(e,r,t,0,null,!1,!1,"",Lg);return t._reactRootContainer=o,t[On]=o.current,lo(t.nodeType===8?t.parentNode:t),Yr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ll(l);a.call(u)}}var l=Jf(t,0,!1,null,null,!1,!1,"",Lg);return t._reactRootContainer=l,t[On]=l.current,lo(t.nodeType===8?t.parentNode:t),Yr(function(){vu(e,l,n,r)}),l}function Su(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ll(o);a.call(l)}}vu(e,o,t,i)}else o=Bk(n,e,t,i,r);return Ll(o)}c0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ns(e.pendingLanes);n!==0&&(Ef(e,n|1),Nt(e,De()),(se&6)===0&&(Gi=De()+500,Cr()))}break;case 13:Yr(function(){var r=Ln(t,1);if(r!==null){var i=Et();sn(r,t,1,i)}}),Zf(t,1)}};Sf=function(t){if(t.tag===13){var e=Ln(t,134217728);if(e!==null){var n=Et();sn(e,t,134217728,n)}Zf(t,134217728)}};h0=function(t){if(t.tag===13){var e=cr(t),n=Ln(t,e);if(n!==null){var r=Et();sn(n,t,e,r)}Zf(t,e)}};d0=function(){return de};f0=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Vh=function(t,e,n){switch(e){case"input":if(Oh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hu(r);if(!i)throw Error(k(90));Hv(r),Oh(r,i)}}}break;case"textarea":qv(t,n);break;case"select":e=n.value,e!=null&&Di(t,!!n.multiple,e,!1)}};Zv=Gf;e0=Yr;var Hk={usingClientEntryPoint:!1,Events:[zo,Si,hu,Xv,Jv,Gf]},Ts={findFiberByHostInstance:Or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Wk={bundleType:Ts.bundleType,version:Ts.version,rendererPackageName:Ts.rendererPackageName,rendererConfig:Ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=r0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ts.findFiberByHostInstance||zk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{au=Oa.inject(Wk),gn=Oa}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hk;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tp(e))throw Error(k(200));return Vk(t,e,null,n)};Mt.createRoot=function(t,e){if(!tp(t))throw Error(k(299));var n=!1,r="",i=$1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Jf(t,1,!1,null,null,n,!1,r,i),t[On]=e.current,lo(t.nodeType===8?t.parentNode:t),new ep(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=r0(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return Yr(t)};Mt.hydrate=function(t,e,n){if(!Eu(e))throw Error(k(200));return Su(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!tp(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=L1(e,null,t,1,n!=null?n:null,i,!1,s,o),t[On]=e.current,lo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wu(e)};Mt.render=function(t,e,n){if(!Eu(e))throw Error(k(200));return Su(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!Eu(t))throw Error(k(40));return t._reactRootContainer?(Yr(function(){Su(null,null,t,!1,function(){t._reactRootContainer=null,t[On]=null})}),!0):!1};Mt.unstable_batchedUpdates=Gf;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Eu(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Su(t,e,n,!1,r)};Mt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Mt})(Lv);var $g=Lv.exports;xh.createRoot=$g.createRoot,xh.hydrateRoot=$g.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vo(){return vo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vo.apply(this,arguments)}var rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rr||(rr={}));const Mg="popstate";function qk(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=ai(i.location.hash.substr(1));return Ed("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:wo(s))}function r(i,s){Kk(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Yk(e,n,r,t)}function Kk(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Gk(){return Math.random().toString(36).substr(2,8)}function Fg(t){return{usr:t.state,key:t.key}}function Ed(t,e,n,r){return n===void 0&&(n=null),vo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ai(e):e,{state:n,key:e&&e.key||r||Gk()})}function wo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ai(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Qk(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:wo(t);return new URL(n,e)}function Yk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=rr.Pop,l=null;function u(){a=rr.Pop,l&&l({action:a,location:d.location})}function c(m,g){a=rr.Push;let v=Ed(d.location,m,g);n&&n(v,m);let _=Fg(v),p=d.createHref(v);try{o.pushState(_,"",p)}catch{i.location.assign(p)}s&&l&&l({action:a,location:d.location})}function h(m,g){a=rr.Replace;let v=Ed(d.location,m,g);n&&n(v,m);let _=Fg(v),p=d.createHref(v);o.replaceState(_,"",p),s&&l&&l({action:a,location:d.location})}let d={get action(){return a},get location(){return t(i,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Mg,u),l=m,()=>{i.removeEventListener(Mg,u),l=null}},createHref(m){return e(i,m)},encodeLocation(m){let g=Qk(wo(m));return vo({},m,{pathname:g.pathname,search:g.search,hash:g.hash})},push:c,replace:h,go(m){return o.go(m)}};return d}var Ug;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ug||(Ug={}));function Xk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ai(e):e,i=F1(r.pathname||"/",n);if(i==null)return null;let s=M1(t);Jk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=aT(s[a],cT(i));return o}function M1(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(Ke(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=dr([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(Ke(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),M1(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:sT(a,i.index),routesMeta:l})}),e}function Jk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:oT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Zk=/^:\w+$/,eT=3,tT=2,nT=1,rT=10,iT=-2,jg=t=>t==="*";function sT(t,e){let n=t.split("/"),r=n.length;return n.some(jg)&&(r+=iT),e&&(r+=tT),n.filter(i=>!jg(i)).reduce((i,s)=>i+(Zk.test(s)?eT:s===""?nT:rT),r)}function oT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function aT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=lT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:dr([i,c.pathname]),pathnameBase:pT(dr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=dr([i,c.pathnameBase]))}return s}function lT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=uT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=hT(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function uT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),np(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function cT(t){try{return decodeURI(t)}catch(e){return np(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function hT(t,e){try{return decodeURIComponent(t)}catch(n){return np(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function F1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function np(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ai(t):t;return{pathname:n?n.startsWith("/")?n:fT(n,e):e,search:mT(r),hash:gT(i)}}function fT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function th(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function U1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function j1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ai(t):(i=vo({},t),Ke(!i.pathname||!i.pathname.includes("?"),th("?","pathname","search",i)),Ke(!i.pathname||!i.pathname.includes("#"),th("#","pathname","hash",i)),Ke(!i.search||!i.search.includes("#"),th("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=dT(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const dr=t=>t.join("/").replace(/\/\/+/g,"/"),pT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),mT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class yT{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function vT(t){return t instanceof yT}const wT=new Set(["POST","PUT","PATCH","DELETE"]);[...wT];var _u={exports:{}},Iu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ET=x.exports,ST=Symbol.for("react.element"),_T=Symbol.for("react.fragment"),IT=Object.prototype.hasOwnProperty,kT=ET.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TT={key:!0,ref:!0,__self:!0,__source:!0};function V1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)IT.call(e,r)&&!TT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ST,type:t,key:s,ref:o,props:i,_owner:kT.current}}Iu.Fragment=_T;Iu.jsx=V1;Iu.jsxs=V1;(function(t){t.exports=Iu})(_u);const CT=_u.exports.Fragment,w=_u.exports.jsx,U=_u.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sd(){return Sd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sd.apply(this,arguments)}function xT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const AT=typeof Object.is=="function"?Object.is:xT,{useState:RT,useEffect:NT,useLayoutEffect:bT,useDebugValue:DT}=Ch;function PT(t,e,n){const r=e(),[{inst:i},s]=RT({inst:{value:r,getSnapshot:e}});return bT(()=>{i.value=r,i.getSnapshot=e,nh(i)&&s({inst:i})},[t,r,e]),NT(()=>(nh(i)&&s({inst:i}),t(()=>{nh(i)&&s({inst:i})})),[t]),DT(r),r}function nh(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!AT(n,r)}catch{return!0}}function OT(t,e,n){return e()}const LT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$T=!LT,MT=$T?OT:PT;"useSyncExternalStore"in Ch&&(t=>t.useSyncExternalStore)(Ch);const FT=x.exports.createContext(null),UT=x.exports.createContext(null),rp=x.exports.createContext(null),ip=x.exports.createContext(null),ku=x.exports.createContext(null),as=x.exports.createContext({outlet:null,matches:[]}),z1=x.exports.createContext(null);function jT(t,e){let{relative:n}=e===void 0?{}:e;Ho()||Ke(!1);let{basename:r,navigator:i}=x.exports.useContext(ip),{hash:s,pathname:o,search:a}=sp(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:dr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ho(){return x.exports.useContext(ku)!=null}function Wo(){return Ho()||Ke(!1),x.exports.useContext(ku).location}function qo(){Ho()||Ke(!1);let{basename:t,navigator:e}=x.exports.useContext(ip),{matches:n}=x.exports.useContext(as),{pathname:r}=Wo(),i=JSON.stringify(U1(n).map(a=>a.pathnameBase)),s=x.exports.useRef(!1);return x.exports.useEffect(()=>{s.current=!0}),x.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=j1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:dr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function VT(){let{matches:t}=x.exports.useContext(as),e=t[t.length-1];return e?e.params:{}}function sp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=x.exports.useContext(as),{pathname:i}=Wo(),s=JSON.stringify(U1(r).map(o=>o.pathnameBase));return x.exports.useMemo(()=>j1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function zT(t,e){Ho()||Ke(!1);let n=x.exports.useContext(rp),{matches:r}=x.exports.useContext(as),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=Wo(),l;if(e){var u;let g=typeof e=="string"?ai(e):e;o==="/"||((u=g.pathname)==null?void 0:u.startsWith(o))||Ke(!1),l=g}else l=a;let c=l.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",d=Xk(t,{pathname:h}),m=qT(d&&d.map(g=>Object.assign({},g,{params:Object.assign({},s,g.params),pathname:dr([o,g.pathname]),pathnameBase:g.pathnameBase==="/"?o:dr([o,g.pathnameBase])})),r,n||void 0);return e&&m?w(ku.Provider,{value:{location:Sd({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:rr.Pop},children:m}):m}function BT(){let t=GT(),e=vT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return U(CT,{children:[w("h2",{children:"Unhandled Thrown Error!"}),w("h3",{style:{fontStyle:"italic"},children:e}),n?w("pre",{style:i,children:n}):null,w("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),U("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",w("code",{style:s,children:"errorElement"})," props on\xA0",w("code",{style:s,children:"<Route>"})]})]})}class HT extends x.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?w(z1.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function WT(t){let{routeContext:e,match:n,children:r}=t,i=x.exports.useContext(FT);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),w(as.Provider,{value:e,children:r})}function qT(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Ke(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||w(BT,{}):null,c=()=>w(WT,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?w(HT,{location:n.location,component:u,error:l,children:c()}):c()},null)}var Vg;(function(t){t.UseRevalidator="useRevalidator"})(Vg||(Vg={}));var _d;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(_d||(_d={}));function KT(t){let e=x.exports.useContext(rp);return e||Ke(!1),e}function GT(){var t;let e=x.exports.useContext(z1),n=KT(_d.UseRouteError),r=x.exports.useContext(as),i=r.matches[r.matches.length-1];return e||(r||Ke(!1),i.route.id||Ke(!1),(t=n.errors)==null?void 0:t[i.route.id])}function Dr(t){Ke(!1)}function QT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=rr.Pop,navigator:s,static:o=!1}=t;Ho()&&Ke(!1);let a=e.replace(/^\/*/,"/"),l=x.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ai(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,g=x.exports.useMemo(()=>{let v=F1(u,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:m}},[a,u,c,h,d,m]);return g==null?null:w(ip.Provider,{value:l,children:w(ku.Provider,{children:n,value:{location:g,navigationType:i}})})}function YT(t){let{children:e,location:n}=t,r=x.exports.useContext(UT),i=r&&!e?r.router.routes:Id(e);return zT(i,n)}var zg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(zg||(zg={}));new Promise(()=>{});function Id(t,e){e===void 0&&(e=[]);let n=[];return x.exports.Children.forEach(t,(r,i)=>{if(!x.exports.isValidElement(r))return;if(r.type===x.exports.Fragment){n.push.apply(n,Id(r.props.children,e));return}r.type!==Dr&&Ke(!1),!r.props.index||!r.props.children||Ke(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Id(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function B1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function XT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function JT(t,e){return t.button===0&&(!e||e==="_self")&&!XT(t)}const ZT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],eC=["aria-current","caseSensitive","className","end","style","to","children"];function tC(t){let{basename:e,children:n,window:r}=t,i=x.exports.useRef();i.current==null&&(i.current=qk({window:r,v5Compat:!0}));let s=i.current,[o,a]=x.exports.useState({action:s.action,location:s.location});return x.exports.useLayoutEffect(()=>s.listen(a),[s]),w(QT,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const nC=x.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=B1(e,ZT),d=jT(u,{relative:i}),m=rC(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(v){r&&r(v),v.defaultPrevented||m(v)}return w("a",{...h,href:d,onClick:s?r:g,ref:n,target:l})}),fn=x.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=B1(e,eC),h=sp(l,{relative:c.relative}),d=Wo(),m=x.exports.useContext(rp),g=h.pathname,v=d.pathname,_=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(v=v.toLowerCase(),_=_?_.toLowerCase():null,g=g.toLowerCase());let p=v===g||!o&&v.startsWith(g)&&v.charAt(g.length)==="/",f=_!=null&&(_===g||!o&&_.startsWith(g)&&_.charAt(g.length)==="/"),y=p?r:void 0,S;typeof s=="function"?S=s({isActive:p,isPending:f}):S=[s,p?"active":null,f?"pending":null].filter(Boolean).join(" ");let I=typeof a=="function"?a({isActive:p,isPending:f}):a;return w(nC,{...c,"aria-current":y,className:S,ref:n,style:I,to:l,children:typeof u=="function"?u({isActive:p,isPending:f}):u})});var Bg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Bg||(Bg={}));var Hg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Hg||(Hg={}));function rC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=qo(),l=Wo(),u=sp(t,{relative:o});return x.exports.useCallback(c=>{if(JT(c,n)){c.preventDefault();let h=r!==void 0?r:wo(l)===wo(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
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
 */const H1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},W1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(H1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},sC=function(t){const e=H1(t);return W1.encodeByteArray(e,!0)},$l=function(t){return sC(t).replace(/\./g,"")},q1=function(t){try{return W1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function K1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lC(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function G1(){return typeof indexedDB=="object"}function Q1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function uC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function cC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hC=()=>cC().__FIREBASE_DEFAULTS__,dC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&q1(t[1]);return e&&JSON.parse(e)},op=()=>{try{return hC()||dC()||fC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Y1=t=>{var e,n;return(n=(e=op())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pC=t=>{const e=Y1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mC=()=>{var t;return(t=op())===null||t===void 0?void 0:t.config},X1=t=>{var e;return(e=op())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class gC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function yC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$l(JSON.stringify(n)),$l(JSON.stringify(o)),a].join(".")}/**
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
 */const vC="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vC,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cn(i,a,r)}}function wC(t,e){return t.replace(EC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const EC=/\{\$([^}]+)}/g;function SC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Eo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wg(s)&&Wg(o)){if(!Eo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wg(t){return t!==null&&typeof t=="object"}/**
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
 */function Ko(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ds(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ps(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _C(t,e){const n=new IC(t,e);return n.subscribe.bind(n)}class IC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=rh),i.error===void 0&&(i.error=rh),i.complete===void 0&&(i.complete=rh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rh(){}/**
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
 */const TC=1e3,CC=2,xC=4*60*60*1e3,AC=.5;function qg(t,e=TC,n=CC){const r=e*Math.pow(n,t),i=Math.round(AC*r*(Math.random()-.5)*2);return Math.min(xC,r+i)}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pr="[DEFAULT]";/**
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
 */class RC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bC(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NC(t){return t===Pr?void 0:t}function bC(t){return t.instantiationMode==="EAGER"}/**
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
 */class DC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const PC={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},OC=ae.INFO,LC={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},$C=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=LC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tu{constructor(e){this.name=e,this._logLevel=OC,this._logHandler=$C,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const MC=(t,e)=>e.some(n=>t instanceof n);let Kg,Gg;function FC(){return Kg||(Kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UC(){return Gg||(Gg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const J1=new WeakMap,kd=new WeakMap,Z1=new WeakMap,ih=new WeakMap,ap=new WeakMap;function jC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&J1.set(n,t)}).catch(()=>{}),ap.set(e,t),e}function VC(t){if(kd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});kd.set(t,e)}let Td={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Z1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zC(t){Td=t(Td)}function BC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sh(this),e,...n);return Z1.set(r,e.sort?e.sort():[e]),fr(r)}:UC().includes(t)?function(...e){return t.apply(sh(this),e),fr(J1.get(this))}:function(...e){return fr(t.apply(sh(this),e))}}function HC(t){return typeof t=="function"?BC(t):(t instanceof IDBTransaction&&VC(t),MC(t,FC())?new Proxy(t,Td):t)}function fr(t){if(t instanceof IDBRequest)return jC(t);if(ih.has(t))return ih.get(t);const e=HC(t);return e!==t&&(ih.set(t,e),ap.set(e,t)),e}const sh=t=>ap.get(t);function ew(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=fr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fr(o.result),l.oldVersion,l.newVersion,fr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const WC=["get","getKey","getAll","getAllKeys","count"],qC=["put","add","delete","clear"],oh=new Map;function Qg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oh.get(e))return oh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return oh.set(e,s),s}zC(t=>({...t,get:(e,n,r)=>Qg(e,n)||t.get(e,n,r),has:(e,n)=>!!Qg(e,n)||t.has(e,n)}));/**
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
 */class KC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cd="@firebase/app",Yg="0.8.4";/**
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
 */const Xr=new Tu("@firebase/app"),QC="@firebase/app-compat",YC="@firebase/analytics-compat",XC="@firebase/analytics",JC="@firebase/app-check-compat",ZC="@firebase/app-check",ex="@firebase/auth",tx="@firebase/auth-compat",nx="@firebase/database",rx="@firebase/database-compat",ix="@firebase/functions",sx="@firebase/functions-compat",ox="@firebase/installations",ax="@firebase/installations-compat",lx="@firebase/messaging",ux="@firebase/messaging-compat",cx="@firebase/performance",hx="@firebase/performance-compat",dx="@firebase/remote-config",fx="@firebase/remote-config-compat",px="@firebase/storage",mx="@firebase/storage-compat",gx="@firebase/firestore",yx="@firebase/firestore-compat",vx="firebase",wx="9.14.0";/**
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
 */const xd="[DEFAULT]",Ex={[Cd]:"fire-core",[QC]:"fire-core-compat",[XC]:"fire-analytics",[YC]:"fire-analytics-compat",[ZC]:"fire-app-check",[JC]:"fire-app-check-compat",[ex]:"fire-auth",[tx]:"fire-auth-compat",[nx]:"fire-rtdb",[rx]:"fire-rtdb-compat",[ix]:"fire-fn",[sx]:"fire-fn-compat",[ox]:"fire-iid",[ax]:"fire-iid-compat",[lx]:"fire-fcm",[ux]:"fire-fcm-compat",[cx]:"fire-perf",[hx]:"fire-perf-compat",[dx]:"fire-rc",[fx]:"fire-rc-compat",[px]:"fire-gcs",[mx]:"fire-gcs-compat",[gx]:"fire-fst",[yx]:"fire-fst-compat","fire-js":"fire-js",[vx]:"fire-js-all"};/**
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
 */const Ml=new Map,Ad=new Map;function Sx(t,e){try{t.container.addComponent(e)}catch(n){Xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(Ad.has(e))return Xr.debug(`There were multiple attempts to register component ${e}.`),!1;Ad.set(e,t);for(const n of Ml.values())Sx(n,t);return!0}function ui(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const _x={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pr=new li("app","Firebase",_x);/**
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
 */class Ix{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
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
 */const Go=wx;function tw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pr.create("bad-app-name",{appName:String(i)});if(n||(n=mC()),!n)throw pr.create("no-options");const s=Ml.get(i);if(s){if(Eo(n,s.options)&&Eo(r,s.config))return s;throw pr.create("duplicate-app",{appName:i})}const o=new DC(i);for(const l of Ad.values())o.addComponent(l);const a=new Ix(n,r,o);return Ml.set(i,a),a}function lp(t=xd){const e=Ml.get(t);if(!e&&t===xd)return tw();if(!e)throw pr.create("no-app",{appName:t});return e}function Ht(t,e,n){var r;let i=(r=Ex[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xr.warn(a.join(" "));return}En(new ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const kx="firebase-heartbeat-database",Tx=1,So="firebase-heartbeat-store";let ah=null;function nw(){return ah||(ah=ew(kx,Tx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(So)}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),ah}async function Cx(t){var e;try{return(await nw()).transaction(So).objectStore(So).get(rw(t))}catch(n){if(n instanceof cn)Xr.warn(n.message);else{const r=pr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Xr.warn(r.message)}}}async function Xg(t,e){var n;try{const i=(await nw()).transaction(So,"readwrite");return await i.objectStore(So).put(e,rw(t)),i.done}catch(r){if(r instanceof cn)Xr.warn(r.message);else{const i=pr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Xr.warn(i.message)}}}function rw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xx=1024,Ax=30*24*60*60*1e3;class Rx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ax}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jg(),{heartbeatsToSend:n,unsentEntries:r}=Nx(this._heartbeatsCache.heartbeats),i=$l(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Jg(){return new Date().toISOString().substring(0,10)}function Nx(t,e=xx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return G1()?Q1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Cx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zg(t){return $l(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Dx(t){En(new ln("platform-logger",e=>new KC(e),"PRIVATE")),En(new ln("heartbeat",e=>new Rx(e),"PRIVATE")),Ht(Cd,Yg,t),Ht(Cd,Yg,"esm2017"),Ht("fire-js","")}Dx("");var Px="firebase",Ox="9.14.0";/**
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
 */Ht(Px,Ox,"app");const iw="@firebase/installations",up="0.5.16";/**
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
 */const sw=1e4,ow=`w:${up}`,aw="FIS_v2",Lx="https://firebaseinstallations.googleapis.com/v1",$x=60*60*1e3,Mx="installations",Fx="Installations";/**
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
 */const Ux={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Jr=new li(Mx,Fx,Ux);function lw(t){return t instanceof cn&&t.code.includes("request-failed")}/**
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
 */function uw({projectId:t}){return`${Lx}/projects/${t}/installations`}function cw(t){return{token:t.token,requestStatus:2,expiresIn:Vx(t.expiresIn),creationTime:Date.now()}}async function hw(t,e){const r=(await e.json()).error;return Jr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function dw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function jx(t,{refreshToken:e}){const n=dw(t);return n.append("Authorization",zx(e)),n}async function fw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Vx(t){return Number(t.replace("s","000"))}function zx(t){return`${aw} ${t}`}/**
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
 */async function Bx({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=uw(t),i=dw(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:aw,appId:t.appId,sdkVersion:ow},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await fw(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:cw(u.authToken)}}else throw await hw("Create Installation",l)}/**
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
 */function pw(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Hx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Wx=/^[cdef][\w-]{21}$/,Rd="";function qx(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Kx(t);return Wx.test(n)?n:Rd}catch{return Rd}}function Kx(t){return Hx(t).substr(0,22)}/**
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
 */function Cu(t){return`${t.appName}!${t.appId}`}/**
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
 */const mw=new Map;function gw(t,e){const n=Cu(t);yw(n,e),Gx(n,e)}function yw(t,e){const n=mw.get(t);if(!!n)for(const r of n)r(e)}function Gx(t,e){const n=Qx();n&&n.postMessage({key:t,fid:e}),Yx()}let Mr=null;function Qx(){return!Mr&&"BroadcastChannel"in self&&(Mr=new BroadcastChannel("[Firebase] FID Change"),Mr.onmessage=t=>{yw(t.data.key,t.data.fid)}),Mr}function Yx(){mw.size===0&&Mr&&(Mr.close(),Mr=null)}/**
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
 */const Xx="firebase-installations-database",Jx=1,Zr="firebase-installations-store";let lh=null;function cp(){return lh||(lh=ew(Xx,Jx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zr)}}})),lh}async function Fl(t,e){const n=Cu(t),i=(await cp()).transaction(Zr,"readwrite"),s=i.objectStore(Zr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&gw(t,e.fid),e}async function vw(t){const e=Cu(t),r=(await cp()).transaction(Zr,"readwrite");await r.objectStore(Zr).delete(e),await r.done}async function xu(t,e){const n=Cu(t),i=(await cp()).transaction(Zr,"readwrite"),s=i.objectStore(Zr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&gw(t,a.fid),a}/**
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
 */async function hp(t){let e;const n=await xu(t.appConfig,r=>{const i=Zx(r),s=eA(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Rd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Zx(t){const e=t||{fid:qx(),registrationStatus:0};return ww(e)}function eA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Jr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:nA(t)}:{installationEntry:e}}async function tA(t,e){try{const n=await Bx(t,e);return Fl(t.appConfig,n)}catch(n){throw lw(n)&&n.customData.serverCode===409?await vw(t.appConfig):await Fl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function nA(t){let e=await ey(t.appConfig);for(;e.registrationStatus===1;)await pw(100),e=await ey(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await hp(t);return r||n}return e}function ey(t){return xu(t,e=>{if(!e)throw Jr.create("installation-not-found");return ww(e)})}function ww(t){return rA(t)?{fid:t.fid,registrationStatus:0}:t}function rA(t){return t.registrationStatus===1&&t.registrationTime+sw<Date.now()}/**
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
 */async function iA({appConfig:t,heartbeatServiceProvider:e},n){const r=sA(t,n),i=jx(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:ow,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await fw(()=>fetch(r,a));if(l.ok){const u=await l.json();return cw(u)}else throw await hw("Generate Auth Token",l)}function sA(t,{fid:e}){return`${uw(t)}/${e}/authTokens:generate`}/**
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
 */async function dp(t,e=!1){let n;const r=await xu(t.appConfig,s=>{if(!Ew(s))throw Jr.create("not-registered");const o=s.authToken;if(!e&&lA(o))return s;if(o.requestStatus===1)return n=oA(t,e),s;{if(!navigator.onLine)throw Jr.create("app-offline");const a=cA(s);return n=aA(t,a),a}});return n?await n:r.authToken}async function oA(t,e){let n=await ty(t.appConfig);for(;n.authToken.requestStatus===1;)await pw(100),n=await ty(t.appConfig);const r=n.authToken;return r.requestStatus===0?dp(t,e):r}function ty(t){return xu(t,e=>{if(!Ew(e))throw Jr.create("not-registered");const n=e.authToken;return hA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aA(t,e){try{const n=await iA(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Fl(t.appConfig,r),n}catch(n){if(lw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await vw(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Fl(t.appConfig,r)}throw n}}function Ew(t){return t!==void 0&&t.registrationStatus===2}function lA(t){return t.requestStatus===2&&!uA(t)}function uA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+$x}function cA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function hA(t){return t.requestStatus===1&&t.requestTime+sw<Date.now()}/**
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
 */async function dA(t){const e=t,{installationEntry:n,registrationPromise:r}=await hp(e);return r?r.catch(console.error):dp(e).catch(console.error),n.fid}/**
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
 */async function fA(t,e=!1){const n=t;return await pA(n),(await dp(n,e)).token}async function pA(t){const{registrationPromise:e}=await hp(t);e&&await e}/**
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
 */function mA(t){if(!t||!t.options)throw uh("App Configuration");if(!t.name)throw uh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw uh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function uh(t){return Jr.create("missing-app-config-values",{valueName:t})}/**
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
 */const Sw="installations",gA="installations-internal",yA=t=>{const e=t.getProvider("app").getImmediate(),n=mA(e),r=ui(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},vA=t=>{const e=t.getProvider("app").getImmediate(),n=ui(e,Sw).getImmediate();return{getId:()=>dA(n),getToken:i=>fA(n,i)}};function wA(){En(new ln(Sw,yA,"PUBLIC")),En(new ln(gA,vA,"PRIVATE"))}wA();Ht(iw,up);Ht(iw,up,"esm2017");/**
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
 */const Ul="analytics",EA="firebase_id",SA="origin",_A=60*1e3,IA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_w="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ot=new Tu("@firebase/analytics");/**
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
 */function Iw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function kA(t,e){const n=document.createElement("script");n.src=`${_w}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function TA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function CA(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Iw(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Ot.error(a)}t("config",i,s)}async function xA(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Iw(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ot.error(s)}}function AA(t,e,n,r){async function i(s,o,a){try{s==="event"?await xA(t,e,n,o,a):s==="config"?await CA(t,e,n,r,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(l){Ot.error(l)}}return i}function RA(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=AA(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function NA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(_w)&&n.src.includes(t))return n;return null}/**
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
 */const bA={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Wt=new li("analytics","Analytics",bA);/**
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
 */const DA=30,PA=1e3;class OA{constructor(e={},n=PA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const kw=new OA;function LA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $A(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:LA(r)},s=IA.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Wt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function MA(t,e=kw,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Wt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Wt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new jA;return setTimeout(async()=>{a.abort()},n!==void 0?n:_A),Tw({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Tw(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=kw){var s,o;const{appId:a,measurementId:l}=t;try{await FA(r,e)}catch(u){if(l)return Ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(s=u)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:l};throw u}try{const u=await $A(t);return i.deleteThrottleMetadata(a),u}catch(u){const c=u;if(!UA(c)){if(i.deleteThrottleMetadata(a),l)return Ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw u}const h=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?qg(n,i.intervalMillis,DA):qg(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(a,d),Ot.debug(`Calling attemptFetch again in ${h} millis`),Tw(t,d,r,i)}}function FA(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Wt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function UA(t){if(!(t instanceof cn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function VA(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function zA(){var t;if(G1())try{await Q1()}catch(e){return Ot.warn(Wt.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Ot.warn(Wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function BA(t,e,n,r,i,s,o){var a;const l=MA(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ot.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ot.error(m)),e.push(l);const u=zA().then(m=>{if(m)return r.getId()}),[c,h]=await Promise.all([l,u]);NA(s)||kA(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[SA]="firebase",d.update=!0,h!=null&&(d[EA]=h),i("config",c.measurementId,d),c.measurementId}/**
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
 */class HA{constructor(e){this.app=e}_delete(){return delete qs[this.app.options.appId],Promise.resolve()}}let qs={},ny=[];const ry={};let ch="dataLayer",WA="gtag",iy,Cw,sy=!1;function qA(){const t=[];if(K1()&&t.push("This is a browser extension environment."),uC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Wt.create("invalid-analytics-context",{errorInfo:e});Ot.warn(n.message)}}function KA(t,e,n){qA();const r=t.options.appId;if(!r)throw Wt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Wt.create("no-api-key");if(qs[r]!=null)throw Wt.create("already-exists",{id:r});if(!sy){TA(ch);const{wrappedGtag:s,gtagCore:o}=RA(qs,ny,ry,ch,WA);Cw=s,iy=o,sy=!0}return qs[r]=BA(t,ny,ry,e,iy,ch,n),new HA(t)}function GA(t=lp()){t=Me(t);const e=ui(t,Ul);return e.isInitialized()?e.getImmediate():QA(t)}function QA(t,e={}){const n=ui(t,Ul);if(n.isInitialized()){const i=n.getImmediate();if(Eo(e,n.getOptions()))return i;throw Wt.create("already-initialized")}return n.initialize({options:e})}function YA(t,e,n,r){t=Me(t),VA(Cw,qs[t.app.options.appId],e,n,r).catch(i=>Ot.error(i))}const oy="@firebase/analytics",ay="0.8.4";function XA(){En(new ln(Ul,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return KA(r,i,n)},"PUBLIC")),En(new ln("analytics-internal",t,"PRIVATE")),Ht(oy,ay),Ht(oy,ay,"esm2017");function t(e){try{const n=e.getProvider(Ul).getImmediate();return{logEvent:(r,i,s)=>YA(n,r,i,s)}}catch(n){throw Wt.create("interop-component-reg-failed",{reason:n})}}}XA();var JA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,fp=fp||{},K=JA||self;function jl(){}function Au(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ZA(t){return Object.prototype.hasOwnProperty.call(t,hh)&&t[hh]||(t[hh]=++eR)}var hh="closure_uid_"+(1e9*Math.random()>>>0),eR=0;function tR(t,e,n){return t.call.apply(t.bind,arguments)}function nR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ft(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ft=tR:ft=nR,ft.apply(null,arguments)}function La(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function xr(){this.s=this.s,this.o=this.o}var rR=0;xr.prototype.s=!1;xr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),rR!=0)&&ZA(this)};xr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function pp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ly(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Au(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var iR=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",jl,e),K.removeEventListener("test",jl,e)}catch{}return t}();function Vl(t){return/^[\s\xa0]*$/.test(t)}var uy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function dh(t,e){return t<e?-1:t>e?1:0}function Ru(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function mn(t){return Ru().indexOf(t)!=-1}function mp(t){return mp[" "](t),t}mp[" "]=jl;function sR(t){var e=lR;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var oR=mn("Opera"),Qi=mn("Trident")||mn("MSIE"),Aw=mn("Edge"),Nd=Aw||Qi,Rw=mn("Gecko")&&!(Ru().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge"))&&!(mn("Trident")||mn("MSIE"))&&!mn("Edge"),aR=Ru().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge");function Nw(){var t=K.document;return t?t.documentMode:void 0}var zl;e:{var fh="",ph=function(){var t=Ru();if(Rw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Aw)return/Edge\/([\d\.]+)/.exec(t);if(Qi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aR)return/WebKit\/(\S+)/.exec(t);if(oR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ph&&(fh=ph?ph[1]:""),Qi){var mh=Nw();if(mh!=null&&mh>parseFloat(fh)){zl=String(mh);break e}}zl=fh}var lR={};function uR(){return sR(function(){let t=0;const e=uy(String(zl)).split("."),n=uy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=dh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||dh(i[2].length==0,s[2].length==0)||dh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var bd;if(K.document&&Qi){var cy=Nw();bd=cy||parseInt(zl,10)||void 0}else bd=void 0;var cR=bd;function _o(t,e){if(pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Rw){e:{try{mp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_o.X.h.call(this)}}ot(_o,pt);var hR={2:"touch",3:"pen",4:"mouse"};_o.prototype.h=function(){_o.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yo="closure_listenable_"+(1e6*Math.random()|0),dR=0;function fR(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++dR,this.ba=this.ea=!1}function Nu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function gp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function bw(t){const e={};for(const n in t)e[n]=t[n];return e}const hy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<hy.length;s++)n=hy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function bu(t){this.src=t,this.g={},this.h=0}bu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Pd(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new fR(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Dd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=xw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Nu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var yp="closure_lm_"+(1e6*Math.random()|0),gh={};function Pw(t,e,n,r,i){if(r&&r.once)return Lw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Pw(t,e[s],n,r,i);return null}return n=Ep(n),t&&t[Yo]?t.N(e,n,Qo(r)?!!r.capture:!!r,i):Ow(t,e,n,!1,r,i)}function Ow(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Qo(i)?!!i.capture:!!i,a=wp(t);if(a||(t[yp]=a=new bu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=pR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)iR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Mw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pR(){function t(n){return e.call(t.src,t.listener,n)}const e=mR;return t}function Lw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Lw(t,e[s],n,r,i);return null}return n=Ep(n),t&&t[Yo]?t.O(e,n,Qo(r)?!!r.capture:!!r,i):Ow(t,e,n,!0,r,i)}function $w(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)$w(t,e[s],n,r,i);else r=Qo(r)?!!r.capture:!!r,n=Ep(n),t&&t[Yo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Pd(s,n,r,i),-1<n&&(Nu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=wp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pd(e,n,r,i)),(n=-1<t?e[t]:null)&&vp(n))}function vp(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Yo])Dd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Mw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=wp(e))?(Dd(n,t),n.h==0&&(n.src=null,e[yp]=null)):Nu(t)}}}function Mw(t){return t in gh?gh[t]:gh[t]="on"+t}function mR(t,e){if(t.ba)t=!0;else{e=new _o(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&vp(t),t=n.call(r,e)}return t}function wp(t){return t=t[yp],t instanceof bu?t:null}var yh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ep(t){return typeof t=="function"?t:(t[yh]||(t[yh]=function(e){return t.handleEvent(e)}),t[yh])}function Ge(){xr.call(this),this.i=new bu(this),this.P=this,this.I=null}ot(Ge,xr);Ge.prototype[Yo]=!0;Ge.prototype.removeEventListener=function(t,e,n,r){$w(this,t,e,n,r)};function it(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new pt(e,t);else if(e instanceof pt)e.target=e.target||t;else{var i=e;e=new pt(r,t),Dw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=$a(o,r,!0,e)&&i}if(o=e.g=t,i=$a(o,r,!0,e)&&i,i=$a(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=$a(o,r,!1,e)&&i}Ge.prototype.M=function(){if(Ge.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Nu(n[r]);delete t.g[e],t.h--}}this.I=null};Ge.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ge.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function $a(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Dd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Sp=K.JSON.stringify;function gR(){var t=jw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yR{constructor(){this.h=this.g=null}add(e,n){const r=Fw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Fw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new vR,t=>t.reset());class vR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wR(t){K.setTimeout(()=>{throw t},0)}function Uw(t,e){Od||ER(),Ld||(Od(),Ld=!0),jw.add(t,e)}var Od;function ER(){var t=K.Promise.resolve(void 0);Od=function(){t.then(SR)}}var Ld=!1,jw=new yR;function SR(){for(var t;t=gR();){try{t.h.call(t.g)}catch(n){wR(n)}var e=Fw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ld=!1}function Du(t,e){Ge.call(this),this.h=t||1,this.g=e||K,this.j=ft(this.lb,this),this.l=Date.now()}ot(Du,Ge);M=Du.prototype;M.ca=!1;M.R=null;M.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),it(this,"tick"),this.ca&&(_p(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _p(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}M.M=function(){Du.X.M.call(this),_p(this),delete this.g};function Ip(t,e,n){if(typeof t=="function")n&&(t=ft(t,n));else if(t&&typeof t.handleEvent=="function")t=ft(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Vw(t){t.g=Ip(()=>{t.g=null,t.i&&(t.i=!1,Vw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _R extends xr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Vw(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Io(t){xr.call(this),this.h=t,this.g={}}ot(Io,xr);var dy=[];function zw(t,e,n,r){Array.isArray(n)||(n&&(dy[0]=n.toString()),n=dy);for(var i=0;i<n.length;i++){var s=Pw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Bw(t){gp(t.g,function(e,n){this.g.hasOwnProperty(n)&&vp(e)},t),t.g={}}Io.prototype.M=function(){Io.X.M.call(this),Bw(this)};Io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pu(){this.g=!0}Pu.prototype.Aa=function(){this.g=!1};function IR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function kR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ai(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+CR(t,n)+(r?" "+r:"")})}function TR(t,e){t.info(function(){return"TIMEOUT: "+e})}Pu.prototype.info=function(){};function CR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Sp(n)}catch{return e}}var ci={},fy=null;function Ou(){return fy=fy||new Ge}ci.Pa="serverreachability";function Hw(t){pt.call(this,ci.Pa,t)}ot(Hw,pt);function ko(t){const e=Ou();it(e,new Hw(e))}ci.STAT_EVENT="statevent";function Ww(t,e){pt.call(this,ci.STAT_EVENT,t),this.stat=e}ot(Ww,pt);function wt(t){const e=Ou();it(e,new Ww(e,t))}ci.Qa="timingevent";function qw(t,e){pt.call(this,ci.Qa,t),this.size=e}ot(qw,pt);function Xo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Lu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Kw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function kp(){}kp.prototype.h=null;function py(t){return t.h||(t.h=t.i())}function Gw(){}var Jo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Tp(){pt.call(this,"d")}ot(Tp,pt);function Cp(){pt.call(this,"c")}ot(Cp,pt);var $d;function $u(){}ot($u,kp);$u.prototype.g=function(){return new XMLHttpRequest};$u.prototype.i=function(){return{}};$d=new $u;function Zo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Io(this),this.O=xR,t=Nd?125:void 0,this.T=new Du(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Qw}function Qw(){this.i=null,this.g="",this.h=!1}var xR=45e3,Md={},Bl={};M=Zo.prototype;M.setTimeout=function(t){this.O=t};function Fd(t,e,n){t.K=1,t.v=Fu(Mn(e)),t.s=n,t.P=!0,Yw(t,null)}function Yw(t,e){t.F=Date.now(),ea(t),t.A=Mn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),iE(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Qw,t.g=TE(t.l,n?e:null,!t.s),0<t.N&&(t.L=new _R(ft(t.La,t,t.g),t.N)),zw(t.S,t.g,"readystatechange",t.ib),e=t.H?bw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ko(),IR(t.j,t.u,t.A,t.m,t.U,t.s)}M.ib=function(t){t=t.target;const e=this.L;e&&Cn(t)==3?e.l():this.La(t)};M.La=function(t){try{if(t==this.g)e:{const c=Cn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Nd||this.g&&(this.h.h||this.g.fa()||vy(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?ko(3):ko(2)),Mu(this);var n=this.g.aa();this.Y=n;t:if(Xw(this)){var r=vy(this.g);t="";var i=r.length,s=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),Ks(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,kR(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vl(a)){var u=a;break t}}u=null}if(n=u)Ai(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ud(this,n);else{this.i=!1,this.o=3,wt(12),Fr(this),Ks(this);break e}}this.P?(Jw(this,c,o),Nd&&this.i&&c==3&&(zw(this.S,this.T,"tick",this.hb),this.T.start())):(Ai(this.j,this.m,o,null),Ud(this,o)),c==4&&Fr(this),this.i&&!this.I&&(c==4?SE(this.l,this):(this.i=!1,ea(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,wt(12)):(this.o=0,wt(13)),Fr(this),Ks(this)}}}catch{}finally{}};function Xw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Jw(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=AR(t,n),i==Bl){e==4&&(t.o=4,wt(14),r=!1),Ai(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Md){t.o=4,wt(15),Ai(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ai(t.j,t.m,i,null),Ud(t,i);Xw(t)&&i!=Bl&&i!=Md&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pp(e),e.K=!0,wt(11))):(Ai(t.j,t.m,n,"[Invalid Chunked Response]"),Fr(t),Ks(t))}M.hb=function(){if(this.g){var t=Cn(this.g),e=this.g.fa();this.C<e.length&&(Mu(this),Jw(this,t,e),this.i&&t!=4&&ea(this))}};function AR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Bl:(n=Number(e.substring(n,r)),isNaN(n)?Md:(r+=1,r+n>e.length?Bl:(e=e.substr(r,n),t.C=r+n,e)))}M.cancel=function(){this.I=!0,Fr(this)};function ea(t){t.V=Date.now()+t.O,Zw(t,t.O)}function Zw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xo(ft(t.gb,t),e)}function Mu(t){t.B&&(K.clearTimeout(t.B),t.B=null)}M.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(TR(this.j,this.A),this.K!=2&&(ko(),wt(17)),Fr(this),this.o=2,Ks(this)):Zw(this,this.V-t)};function Ks(t){t.l.G==0||t.I||SE(t.l,t)}function Fr(t){Mu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,_p(t.T),Bw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ud(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||jd(n.h,t))){if(!t.J&&jd(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ql(n),Vu(n);else break e;Dp(n),wt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Xo(ft(n.cb,n),6e3));if(1>=aE(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ur(n,11)}else if((t.J||n.g==t)&&ql(n),!Vl(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(xp(s,s.h),s.h=null))}if(r.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,_e(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=kE(r,r.H?r.ka:null,r.V),o.J){lE(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Mu(a),ea(a)),r.g=o}else wE(r);0<n.i.length&&zu(n)}else u[0]!="stop"&&u[0]!="close"||Ur(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ur(n,7):bp(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ko(4)}catch{}}function RR(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Au(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function NR(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Au(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function eE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Au(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=NR(t),r=RR(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var tE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Br(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Br){this.h=e!==void 0?e:t.h,Hl(this,t.j),this.s=t.s,this.g=t.g,Wl(this,t.m),this.l=t.l,e=t.i;var n=new To;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),my(this,n),this.o=t.o}else t&&(n=String(t).match(tE))?(this.h=!!e,Hl(this,n[1]||"",!0),this.s=Os(n[2]||""),this.g=Os(n[3]||"",!0),Wl(this,n[4]),this.l=Os(n[5]||"",!0),my(this,n[6]||"",!0),this.o=Os(n[7]||"")):(this.h=!!e,this.i=new To(null,this.h))}Br.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ls(e,gy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ls(e,gy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ls(n,n.charAt(0)=="/"?OR:PR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ls(n,$R)),t.join("")};function Mn(t){return new Br(t)}function Hl(t,e,n){t.j=n?Os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Wl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function my(t,e,n){e instanceof To?(t.i=e,MR(t.i,t.h)):(n||(e=Ls(e,LR)),t.i=new To(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function Fu(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ls(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,DR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function DR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var gy=/[#\/\?@]/g,PR=/[#\?:]/g,OR=/[#\?]/g,LR=/[#\?@]/g,$R=/#/g;function To(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ar(t){t.g||(t.g=new Map,t.h=0,t.i&&bR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=To.prototype;M.add=function(t,e){Ar(this),this.i=null,t=ls(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function nE(t,e){Ar(t),e=ls(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function rE(t,e){return Ar(t),e=ls(t,e),t.g.has(e)}M.forEach=function(t,e){Ar(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};M.oa=function(){Ar(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};M.W=function(t){Ar(this);let e=[];if(typeof t=="string")rE(this,t)&&(e=e.concat(this.g.get(ls(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Ar(this),this.i=null,t=ls(this,t),rE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function iE(t,e,n){nE(t,e),0<n.length&&(t.i=null,t.g.set(ls(t,e),pp(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ls(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function MR(t,e){e&&!t.j&&(Ar(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(nE(this,r),iE(this,i,n))},t)),t.j=e}var FR=class{constructor(t,e){this.h=t,this.g=e}};function sE(t){this.l=t||UR,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ga&&K.g.Ga()&&K.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var UR=10;function oE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function aE(t){return t.h?1:t.g?t.g.size:0}function jd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xp(t,e){t.g?t.g.add(e):t.h=e}function lE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}sE.prototype.cancel=function(){if(this.i=uE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function uE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return pp(t.i)}function Ap(){}Ap.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};Ap.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function jR(){this.g=new Ap}function VR(t,e,n){const r=n||"";try{eE(t,function(i,s){let o=i;Qo(i)&&(o=Sp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function zR(t,e){const n=new Pu;if(K.Image){const r=new Image;r.onload=La(Ma,n,r,"TestLoadImage: loaded",!0,e),r.onerror=La(Ma,n,r,"TestLoadImage: error",!1,e),r.onabort=La(Ma,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=La(Ma,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ma(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ta(t){this.l=t.ac||null,this.j=t.jb||!1}ot(ta,kp);ta.prototype.g=function(){return new Uu(this.l,this.j)};ta.prototype.i=function(t){return function(){return t}}({});function Uu(t,e){Ge.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Rp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(Uu,Ge);var Rp=0;M=Uu.prototype;M.open=function(t,e){if(this.readyState!=Rp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Co(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,na(this)),this.readyState=Rp};M.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Co(this)),this.g&&(this.readyState=3,Co(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cE(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function cE(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}M.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?na(this):Co(this),this.readyState==3&&cE(this)}};M.Va=function(t){this.g&&(this.response=this.responseText=t,na(this))};M.Ua=function(t){this.g&&(this.response=t,na(this))};M.ga=function(){this.g&&na(this)};function na(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Co(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Co(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Uu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var BR=K.JSON.parse;function Re(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hE,this.K=this.L=!1}ot(Re,Ge);var hE="",HR=/^https?$/i,WR=["POST","PUT"];M=Re.prototype;M.Ka=function(t){this.L=t};M.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():$d.g(),this.C=this.u?py(this.u):py($d),this.g.onreadystatechange=ft(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){yy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=xw(WR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pE(this),0<this.B&&((this.K=qR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ft(this.qa,this)):this.A=Ip(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){yy(this,s)}};function qR(t){return Qi&&uR()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.qa=function(){typeof fp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function yy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dE(t),ju(t)}function dE(t){t.D||(t.D=!0,it(t,"complete"),it(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),ju(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ju(this,!0)),Re.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?fE(this):this.fb())};M.fb=function(){fE(this)};function fE(t){if(t.h&&typeof fp<"u"&&(!t.C[1]||Cn(t)!=4||t.aa()!=2)){if(t.v&&Cn(t)==4)Ip(t.Ha,0,t);else if(it(t,"readystatechange"),Cn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(tE)[1]||null;if(!i&&K.self&&K.self.location){var s=K.self.location.protocol;i=s.substr(0,s.length-1)}r=!HR.test(i?i.toLowerCase():"")}n=r}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var o=2<Cn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",dE(t)}}finally{ju(t)}}}}function ju(t,e){if(t.g){pE(t);const n=t.g,r=t.C[0]?jl:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=r}catch{}}}function pE(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function Cn(t){return t.g?t.g.readyState:0}M.aa=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),BR(e)}};function vy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case hE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mE(t){let e="";return gp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Np(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=mE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function Cs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gE(t){this.Ca=0,this.i=[],this.j=new Pu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Cs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Cs("baseRetryDelayMs",5e3,t),this.bb=Cs("retryDelaySeedMs",1e4,t),this.$a=Cs("forwardChannelMaxRetries",2,t),this.ta=Cs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new sE(t&&t.concurrentRequestLimit),this.Fa=new jR,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=gE.prototype;M.ma=8;M.G=1;function bp(t){if(yE(t),t.G==3){var e=t.U++,n=Mn(t.F);_e(n,"SID",t.I),_e(n,"RID",e),_e(n,"TYPE","terminate"),ra(t,n),e=new Zo(t,t.j,e,void 0),e.K=2,e.v=Fu(Mn(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=TE(e.l,null),e.g.da(e.v)),e.F=Date.now(),ea(e)}IE(t)}function Vu(t){t.g&&(Pp(t),t.g.cancel(),t.g=null)}function yE(t){Vu(t),t.u&&(K.clearTimeout(t.u),t.u=null),ql(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function zu(t){oE(t.h)||t.m||(t.m=!0,Uw(t.Ja,t),t.C=0)}function KR(t,e){return aE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Xo(ft(t.Ja,t,e),_E(t,t.C)),t.C++,!0)}M.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Zo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=bw(s),Dw(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vE(this,i,e),n=Mn(this.F),_e(n,"RID",t),_e(n,"CVER",22),this.D&&_e(n,"X-HTTP-Session-Id",this.D),ra(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(mE(s)))+"&"+e:this.o&&Np(n,this.o,s)),xp(this.h,i),this.Ya&&_e(n,"TYPE","init"),this.O?(_e(n,"$req",e),_e(n,"SID","null"),i.Z=!0,Fd(i,n,null)):Fd(i,n,e),this.G=2}}else this.G==3&&(t?wy(this,t):this.i.length==0||oE(this.h)||wy(this))};function wy(t,e){var n;e?n=e.m:n=t.U++;const r=Mn(t.F);_e(r,"SID",t.I),_e(r,"RID",n),_e(r,"AID",t.T),ra(t,r),t.o&&t.s&&Np(r,t.o,t.s),n=new Zo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=vE(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),xp(t.h,n),Fd(n,r,e)}function ra(t,e){t.ia&&gp(t.ia,function(n,r){_e(e,r,n)}),t.l&&eE({},function(n,r){_e(e,r,n)})}function vE(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ft(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{VR(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function wE(t){t.g||t.u||(t.Z=1,Uw(t.Ia,t),t.A=0)}function Dp(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Xo(ft(t.Ia,t),_E(t,t.A)),t.A++,!0)}M.Ia=function(){if(this.u=null,EE(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Xo(ft(this.eb,this),t)}};M.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,wt(10),Vu(this),EE(this))};function Pp(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function EE(t){t.g=new Zo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Mn(t.sa);_e(e,"RID","rpc"),_e(e,"SID",t.I),_e(e,"CI",t.L?"0":"1"),_e(e,"AID",t.T),_e(e,"TYPE","xmlhttp"),ra(t,e),t.o&&t.s&&Np(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Fu(Mn(e)),n.s=null,n.P=!0,Yw(n,t)}M.cb=function(){this.v!=null&&(this.v=null,Vu(this),Dp(this),wt(19))};function ql(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function SE(t,e){var n=null;if(t.g==e){ql(t),Pp(t),t.g=null;var r=2}else if(jd(t.h,e))n=e.D,lE(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ou(),it(r,new qw(r,n)),zu(t)}else wE(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&KR(t,e)||r==2&&Dp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ur(t,5);break;case 4:Ur(t,10);break;case 3:Ur(t,6);break;default:Ur(t,2)}}}function _E(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ur(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ft(t.kb,t);n||(n=new Br("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Hl(n,"https"),Fu(n)),zR(n.toString(),r)}else wt(2);t.G=0,t.l&&t.l.va(e),IE(t),yE(t)}M.kb=function(t){t?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function IE(t){if(t.G=0,t.la=[],t.l){const e=uE(t.h);(e.length!=0||t.i.length!=0)&&(ly(t.la,e),ly(t.la,t.i),t.h.i.length=0,pp(t.i),t.i.length=0),t.l.ua()}}function kE(t,e,n){var r=n instanceof Br?Mn(n):new Br(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Wl(r,r.m);else{var i=K.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Br(null,void 0);r&&Hl(s,r),e&&(s.g=e),i&&Wl(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&_e(r,n,e),_e(r,"VER",t.ma),ra(t,r),r}function TE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Re(new ta({jb:!0})):new Re(t.ra),e.Ka(t.H),e}function CE(){}M=CE.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Ra=function(){};function Kl(){if(Qi&&!(10<=Number(cR)))throw Error("Environmental error: no available transport.")}Kl.prototype.g=function(t,e){return new $t(t,e)};function $t(t,e){Ge.call(this),this.g=new gE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Vl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new us(this)}ot($t,Ge);$t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;wt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=kE(t,null,t.V),zu(t)};$t.prototype.close=function(){bp(this.g)};$t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Sp(t),t=n);e.i.push(new FR(e.ab++,t)),e.G==3&&zu(e)};$t.prototype.M=function(){this.g.l=null,delete this.j,bp(this.g),delete this.g,$t.X.M.call(this)};function xE(t){Tp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(xE,Tp);function AE(){Cp.call(this),this.status=1}ot(AE,Cp);function us(t){this.g=t}ot(us,CE);us.prototype.xa=function(){it(this.g,"a")};us.prototype.wa=function(t){it(this.g,new xE(t))};us.prototype.va=function(t){it(this.g,new AE)};us.prototype.ua=function(){it(this.g,"b")};Kl.prototype.createWebChannel=Kl.prototype.g;$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;Lu.NO_ERROR=0;Lu.TIMEOUT=8;Lu.HTTP_ERROR=6;Kw.COMPLETE="complete";Gw.EventType=Jo;Jo.OPEN="a";Jo.CLOSE="b";Jo.ERROR="c";Jo.MESSAGE="d";Ge.prototype.listen=Ge.prototype.N;Re.prototype.listenOnce=Re.prototype.O;Re.prototype.getLastError=Re.prototype.Oa;Re.prototype.getLastErrorCode=Re.prototype.Ea;Re.prototype.getStatus=Re.prototype.aa;Re.prototype.getResponseJson=Re.prototype.Sa;Re.prototype.getResponseText=Re.prototype.fa;Re.prototype.send=Re.prototype.da;Re.prototype.setWithCredentials=Re.prototype.Ka;var GR=function(){return new Kl},QR=function(){return Ou()},vh=Lu,YR=Kw,XR=ci,Ey={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},JR=ta,Fa=Gw,ZR=Re;const Sy="@firebase/firestore";/**
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
 */let cs="9.14.0";/**
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
 */const ei=new Tu("@firebase/firestore");function _y(){return ei.logLevel}function F(t,...e){if(ei.logLevel<=ae.DEBUG){const n=e.map(Op);ei.debug(`Firestore (${cs}): ${t}`,...n)}}function Fn(t,...e){if(ei.logLevel<=ae.ERROR){const n=e.map(Op);ei.error(`Firestore (${cs}): ${t}`,...n)}}function Vd(t,...e){if(ei.logLevel<=ae.WARN){const n=e.map(Op);ei.warn(`Firestore (${cs}): ${t}`,...n)}}function Op(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function ve(t,e){t||Q()}function Y(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class RE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class tN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nN{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new RE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new ct(e)}}class rN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ve(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class iN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new rN(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.A=n.token,new sN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function aN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class NE{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=aN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Yi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ve(0,0))}static max(){return new Z(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends xo{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const lN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends xo{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return lN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Ie.fromString(e))}static fromName(e){return new j(Ie.fromString(e).popFirst(5))}static empty(){return new j(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Ie(e.slice()))}}function uN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new Sr(i,j.empty(),e)}function cN(t){return new Sr(t.readTime,t.key,-1)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(Z.min(),j.empty(),-1)}static max(){return new Sr(Z.max(),j.empty(),-1)}}function hN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const dN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ia(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==dN)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function sa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Lp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Iy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Lp.at=-1;class Be{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ua(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ua(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ua(this.root,e,this.comparator,!0)}}class Ua{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:tt.RED,this.left=i!=null?i:tt.EMPTY,this.right=s!=null?s:tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new tt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,r,i){return this}insert(t,e,n){return new tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ky(this.data.getIterator())}getIteratorFrom(e){return new ky(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class ky{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new qt([])}unionWith(e){let n=new ze(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new yt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const pN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(ve(!!t),typeof t=="string"){let e=0;const n=pN.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xi(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
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
 */function DE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function PE(t){const e=t.mapValue.fields.__previous_value__;return DE(e)?PE(e):e}function Ao(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class mN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}function Bu(t){return t==null}function Gl(t){return t===0&&1/t==-1/0}function gN(t){return typeof t=="number"&&Number.isInteger(t)&&!Gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const ja={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ti(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?DE(t)?4:yN(t)?9007199254740991:10:Q()}function Sn(t,e){if(t===e)return!0;const n=ti(t);if(n!==ti(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ao(t).isEqual(Ao(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=_r(r.timestampValue),o=_r(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Xi(r.bytesValue).isEqual(Xi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Le(r.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Le(r.integerValue)===Le(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Le(r.doubleValue),o=Le(i.doubleValue);return s===o?Gl(s)===Gl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Yi(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Iy(s)!==Iy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Sn(s[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function No(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function Ji(t,e){if(t===e)return 0;const n=ti(t),r=ti(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Le(i.integerValue||i.doubleValue),a=Le(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ty(t.timestampValue,e.timestampValue);case 4:return Ty(Ao(t),Ao(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Xi(i),a=Xi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ce(o[l],a[l]);if(u!==0)return u}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ce(Le(i.latitude),Le(s.latitude));return o!==0?o:ce(Le(i.longitude),Le(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Ji(o[l],a[l]);if(u)return u}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ja.mapValue&&s===ja.mapValue)return 0;if(i===ja.mapValue)return 1;if(s===ja.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ce(a[c],u[c]);if(h!==0)return h;const d=Ji(o[a[c]],l[u[c]]);if(d!==0)return d}return ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Ty(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=_r(t),r=_r(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function Fi(t){return zd(t)}function zd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=_r(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Xi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=zd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${zd(r.fields[a])}`;return s+"}"}(t.mapValue):Q();var e,n}function Bd(t){return!!t&&"integerValue"in t}function $p(t){return!!t&&"arrayValue"in t}function Cy(t){return!!t&&"nullValue"in t}function xy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rl(t){return!!t&&"mapValue"in t}function Gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Gs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!rl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gs(n)}setAll(e){let n=dt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Gs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());rl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];rl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Tt(Gs(this.value))}}function OE(t){const e=[];return hi(t.fields,(n,r)=>{const i=new dt([n]);if(rl(r)){const s=OE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qt(e)}/**
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
 */class nt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new nt(e,0,Z.min(),Z.min(),Tt.empty(),0)}static newFoundDocument(e,n,r){return new nt(e,1,n,Z.min(),r,0)}static newNoDocument(e,n){return new nt(e,2,n,Z.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,Z.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Ay(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vN(t,e,n,r,i,s,o)}function Mp(t){const e=Y(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Fi(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fi(r)).join(",")),e.ht=n}return e.ht}function wN(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Fi(r.value)}`;var r}).join(", ")}]`),Bu(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Fi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Fi(n)).join(",")),`Target(${e})`}function Fp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!xN(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Sn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ny(t.startAt,e.startAt)&&Ny(t.endAt,e.endAt)}function Hd(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class xt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new EN(e,n,r):n==="array-contains"?new IN(e,r):n==="in"?new kN(e,r):n==="not-in"?new TN(e,r):n==="array-contains-any"?new CN(e,r):new xt(e,n,r)}static lt(e,n,r){return n==="in"?new SN(e,r):new _N(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ji(n,this.value)):n!==null&&ti(this.value)===ti(n)&&this.ft(Ji(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class EN extends xt{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.ft(n)}}class SN extends xt{constructor(e,n){super(e,"in",n),this.keys=LE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _N extends xt{constructor(e,n){super(e,"not-in",n),this.keys=LE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function LE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class IN extends xt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $p(n)&&No(n.arrayValue,this.value)}}class kN extends xt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&No(this.value.arrayValue,n)}}class TN extends xt{constructor(e,n){super(e,"not-in",n)}matches(e){if(No(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!No(this.value.arrayValue,n)}}class CN extends xt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$p(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>No(this.value.arrayValue,r))}}class Ql{constructor(e,n){this.position=e,this.inclusive=n}}class Qs{constructor(e,n="asc"){this.field=e,this.dir=n}}function xN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ry(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Ji(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ny(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Hu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function AN(t,e,n,r,i,s,o,a){return new Hu(t,e,n,r,i,s,o,a)}function $E(t){return new Hu(t)}function by(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function RN(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function NN(t){for(const e of t.filters)if(e.dt())return e.field;return null}function bN(t){return t.collectionGroup!==null}function bo(t){const e=Y(t);if(e._t===null){e._t=[];const n=NN(e),r=RN(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Qs(n)),e._t.push(new Qs(dt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Qs(dt.keyField(),s))}}}return e._t}function Un(t){const e=Y(t);if(!e.wt)if(e.limitType==="F")e.wt=Ay(e.path,e.collectionGroup,bo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of bo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Qs(s.field,o))}const r=e.endAt?new Ql(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ql(e.startAt.position,e.startAt.inclusive):null;e.wt=Ay(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Wd(t,e,n){return new Hu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wu(t,e){return Fp(Un(t),Un(e))&&t.limitType===e.limitType}function ME(t){return`${Mp(Un(t))}|lt:${t.limitType}`}function qd(t){return`Query(target=${wN(Un(t))}; limitType=${t.limitType})`}function Up(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):j.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Ry(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,bo(n),r)||n.endAt&&!function(i,s,o){const a=Ry(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,bo(n),r))}(t,e)}function DN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function FE(t){return(e,n)=>{let r=!1;for(const i of bo(t)){const s=PN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function PN(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ji(a,l):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */function UE(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gl(e)?"-0":e}}function jE(t){return{integerValue:""+t}}function ON(t,e){return gN(e)?jE(e):UE(t,e)}/**
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
 */class qu{constructor(){this._=void 0}}function LN(t,e,n){return t instanceof Yl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Do?zE(t,e):t instanceof Po?BE(t,e):function(r,i){const s=VE(r,i),o=Dy(s)+Dy(r.yt);return Bd(s)&&Bd(r.yt)?jE(o):UE(r.It,o)}(t,e)}function $N(t,e,n){return t instanceof Do?zE(t,e):t instanceof Po?BE(t,e):n}function VE(t,e){return t instanceof Xl?Bd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Yl extends qu{}class Do extends qu{constructor(e){super(),this.elements=e}}function zE(t,e){const n=HE(e);for(const r of t.elements)n.some(i=>Sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Po extends qu{constructor(e){super(),this.elements=e}}function BE(t,e){let n=HE(e);for(const r of t.elements)n=n.filter(i=>!Sn(i,r));return{arrayValue:{values:n}}}class Xl extends qu{constructor(e,n){super(),this.It=e,this.yt=n}}function Dy(t){return Le(t.integerValue||t.doubleValue)}function HE(t){return $p(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function MN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Do&&r instanceof Do||n instanceof Po&&r instanceof Po?Yi(n.elements,r.elements,Sn):n instanceof Xl&&r instanceof Xl?Sn(n.yt,r.yt):n instanceof Yl&&r instanceof Yl}(t.transform,e.transform)}class FN{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function il(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ku{}function WE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jp(t.key,on.none()):new oa(t.key,t.data,on.none());{const n=t.data,r=Tt.empty();let i=new ze(dt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Rr(t.key,r,new qt(i.toArray()),on.none())}}function UN(t,e,n){t instanceof oa?function(r,i,s){const o=r.value.clone(),a=Oy(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(r,i,s){if(!il(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Oy(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(qE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,r){return t instanceof oa?function(i,s,o,a){if(!il(i.precondition,s))return o;const l=i.value.clone(),u=Ly(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(i,s,o,a){if(!il(i.precondition,s))return o;const l=Ly(i.fieldTransforms,a,s),u=s.data;return u.setAll(qE(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return il(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function jN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=VE(r.transform,i||null);s!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,s))}return n||null}function Py(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Yi(n,r,(i,s)=>MN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oa extends Ku{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rr extends Ku{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Oy(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,$N(o,a,n[i]))}return r}function Ly(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,LN(s,o,e))}return r}class jp extends Ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VN extends Ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zN{constructor(e){this.count=e}}/**
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
 */var Oe,ie;function BN(t){switch(t){default:return Q();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function KE(t){if(t===void 0)return Fn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Oe.OK:return T.OK;case Oe.CANCELLED:return T.CANCELLED;case Oe.UNKNOWN:return T.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return T.INTERNAL;case Oe.UNAVAILABLE:return T.UNAVAILABLE;case Oe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Oe.NOT_FOUND:return T.NOT_FOUND;case Oe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Oe.ABORTED:return T.ABORTED;case Oe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Oe.DATA_LOSS:return T.DATA_LOSS;default:return Q()}}(ie=Oe||(Oe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return bE(this.inner)}size(){return this.innerSize}}/**
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
 */const HN=new Be(j.comparator);function jn(){return HN}const GE=new Be(j.comparator);function $s(...t){let e=GE;for(const n of t)e=e.insert(n.key,n);return e}function QE(t){let e=GE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return Xs()}function YE(){return Xs()}function Xs(){return new hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const WN=new Be(j.comparator),qN=new ze(j.comparator);function te(...t){let e=qN;for(const n of t)e=e.add(n);return e}const KN=new ze(ce);function XE(){return KN}/**
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
 */class Gu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,aa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gu(Z.min(),i,XE(),jn(),te())}}class aa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new aa(r,n,te(),te(),te())}}/**
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
 */class sl{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class JE{constructor(e,n){this.targetId=e,this.At=n}}class ZE{constructor(e,n,r=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $y{constructor(){this.Rt=0,this.bt=Fy(),this.Pt=yt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=te(),n=te(),r=te();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new aa(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Fy()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class GN{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=jn(),this.qt=My(),this.Kt=new ze(ce)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Hd(s))if(r===0){const o=new j(s.path);this.jt(n,o,nt.newNoDocument(o,Z.min()))}else ve(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Hd(a.target)){const l=new j(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,nt.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=te();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Gu(e,n,this.Kt,this.Ut,r);return this.Ut=jn(),this.qt=My(),this.Kt=new ze(ce),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new $y,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ze(ce),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new $y),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function My(){return new Be(j.comparator)}function Fy(){return new Be(j.comparator)}/**
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
 */const QN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),YN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class XN{constructor(e,n){this.databaseId=e,this.gt=n}}function Jl(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eS(t,e){return t.gt?e.toBase64():e.toUint8Array()}function JN(t,e){return Jl(t,e.toTimestamp())}function bn(t){return ve(!!t),Z.fromTimestamp(function(e){const n=_r(e);return new Ve(n.seconds,n.nanos)}(t))}function Vp(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function tS(t){const e=Ie.fromString(t);return ve(iS(e)),e}function Kd(t,e){return Vp(t.databaseId,e.path)}function wh(t,e){const n=tS(e);if(n.get(1)!==t.databaseId.projectId)throw new z(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(nS(n))}function Gd(t,e){return Vp(t.databaseId,e)}function ZN(t){const e=tS(t);return e.length===4?Ie.emptyPath():nS(e)}function Qd(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nS(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Uy(t,e,n){return{name:Kd(t,e),fields:n.value.mapValue.fields}}function eb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(ve(u===void 0||typeof u=="string"),yt.fromBase64String(u||"")):(ve(u===void 0||u instanceof Uint8Array),yt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:KE(l.code);return new z(u,l.message||"")}(o);n=new ZE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=wh(t,r.document.name),s=bn(r.document.updateTime),o=new Tt({mapValue:{fields:r.document.fields}}),a=nt.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new sl(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=wh(t,r.document),s=r.readTime?bn(r.readTime):Z.min(),o=nt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new sl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=wh(t,r.document),s=r.removedTargetIds||[];n=new sl([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new zN(i),o=r.targetId;n=new JE(o,s)}}return n}function tb(t,e){let n;if(e instanceof oa)n={update:Uy(t,e.key,e.value)};else if(e instanceof jp)n={delete:Kd(t,e.key)};else if(e instanceof Rr)n={update:Uy(t,e.key,e.data),updateMask:hb(e.fieldMask)};else{if(!(e instanceof VN))return Q();n={verify:Kd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Yl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Do)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Po)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Xl)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:JN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function nb(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?bn(r.updateTime):bn(i);return s.isEqual(Z.min())&&(s=bn(i)),new FN(s,r.transformResults||[])}(n,e))):[]}function rb(t,e){return{documents:[Gd(t,e.path)]}}function ib(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Gd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Gd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(xy(h.value))return{unaryFilter:{field:mi(h.field),op:"IS_NAN"}};if(Cy(h.value))return{unaryFilter:{field:mi(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(xy(h.value))return{unaryFilter:{field:mi(h.field),op:"IS_NOT_NAN"}};if(Cy(h.value))return{unaryFilter:{field:mi(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(h.field),op:lb(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:mi(c.field),direction:ab(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Bu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function sb(t){let e=ZN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=rS(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Qs(Ri(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Bu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Ql(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Ql(d,h)}(n.endAt)),AN(e,i,o,s,a,"F",l,u)}function ob(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function rS(t){return t?t.unaryFilter!==void 0?[cb(t)]:t.fieldFilter!==void 0?[ub(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>rS(e)).reduce((e,n)=>e.concat(n)):Q():[]}function ab(t){return QN[t]}function lb(t){return YN[t]}function mi(t){return{fieldPath:t.canonicalString()}}function Ri(t){return dt.fromServerFormat(t.fieldPath)}function ub(t){return xt.create(Ri(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}function cb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ri(t.unaryFilter.field);return xt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ri(t.unaryFilter.field);return xt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ri(t.unaryFilter.field);return xt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ri(t.unaryFilter.field);return xt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}function hb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function iS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class db{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&UN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=YE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=WE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Yi(this.mutations,e.mutations,(n,r)=>Py(n,r))&&Yi(this.baseMutations,e.baseMutations,(n,r)=>Py(n,r))}}class zp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length);let i=WN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new zp(e,n,r,i)}}/**
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
 */class fb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Hr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=yt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class pb{constructor(e){this.re=e}}function mb(t){const e=sb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wd(e,e.limit,"L"):e}/**
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
 */class gb{constructor(){this.Ye=new yb}addToCollectionParentIndex(e,n){return this.Ye.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Sr.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class yb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(Ie.comparator)).toArray()}}/**
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
 */class Zi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Zi(0)}static vn(){return new Zi(-1)}}/**
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
 */class vb{constructor(){this.changes=new hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Eb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Ys(r.mutation,i,qt.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=jr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=$s();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=jn();const o=Xs(),a=Xs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Rr)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Ys(c.mutation,u,c.mutation.getFieldMask(),Ve.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new wb(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Xs();let i=new Be((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||qt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=YE();c.forEach(d=>{if(!s.has(d)){const m=WE(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve(jr());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?C.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,te())).next(c=>({batchId:a,changes:QE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=$s();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=$s();return this.indexManager.getCollectionParents(e,i).next(o=>C.forEach(o,a=>{const l=function(u,c){return new Hu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,nt.newInvalidDocument(u)))});let o=$s();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Ys(u.mutation,l,qt.empty(),Ve.now()),Up(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):C.resolve(nt.newInvalidDocument(n))}}/**
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
 */class Sb{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return C.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:bn(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:mb(r.bundledQuery),readTime:bn(r.readTime)}}(n)),C.resolve()}}/**
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
 */class _b{constructor(){this.overlays=new Be(j.comparator),this.es=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=jr(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Be((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=jr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=jr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fb(n,r));let s=this.es.get(n);s===void 0&&(s=te(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class Bp{constructor(){this.ns=new ze(He.ss),this.rs=new ze(He.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new He(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new He(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new j(new Ie([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new j(new Ie([])),r=new He(n,e),i=new He(n,e+1);let s=te();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return j.comparator(e.key,n.key)||ce(e._s,n._s)}static os(e,n){return ce(e._s,n._s)||j.comparator(e.key,n.key)}}/**
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
 */class Ib{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ze(He.ss)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new db(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new He(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(ce);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),C.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new He(new j(s),0);let a=new ze(ce);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),C.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return C.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new He(n,0),i=this.gs.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class kb{constructor(e){this.Es=e,this.docs=new Be(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),C.resolve(r)}getAllFromCollection(e,n,r){let i=jn();const s=new j(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||hN(cN(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,r,i){Q()}As(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Tb(this)}getSize(e){return C.resolve(this.size)}}class Tb extends vb{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class Cb{constructor(e){this.persistence=e,this.Rs=new hs(n=>Mp(n),Fp),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Bp,this.targetCount=0,this.vs=Zi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),C.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Zi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Dn(n),C.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Ps.containsKey(n))}}/**
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
 */class xb{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Lp(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Cb(this),this.indexManager=new gb,this.remoteDocumentCache=function(r){return new kb(r)}(r=>this.referenceDelegate.xs(r)),this.It=new pb(n),this.Ns=new Sb(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _b,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new Ib(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new Ab(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return C.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class Ab extends fN{constructor(e){super(),this.currentSequenceNumber=e}}class Hp{constructor(e){this.persistence=e,this.Fs=new Bp,this.$s=null}static Bs(e){return new Hp(e)}get Ls(){if(this.$s)return this.$s;throw Q()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),C.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Ls,r=>{const i=j.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return C.or([()=>C.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Wp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wp(e,n.fromCache,r,i)}}/**
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
 */class Rb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(by(n))return C.resolve(null);let r=Un(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wd(n,null,"F"),r=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Wd(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return by(n)||i.isEqual(Z.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(_y()<=ae.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qd(n)),this.Bi(e,o,n,uN(i,-1)))})}Fi(e,n){let r=new ze(FE(e));return n.forEach((i,s)=>{Up(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return _y()<=ae.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",qd(n)),this.Ni.getDocumentsMatchingQuery(e,n,Sr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Nb{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Be(ce),this.qi=new hs(s=>Mp(s),Fp),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Eb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function bb(t,e,n,r){return new Nb(t,e,n,r)}async function sS(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Db(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=C.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(g=>{const v=l.docVersions.get(m);ve(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=te();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function oS(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Pb(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(yt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(g,v,_){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,m,c)&&a.push(n.Cs.updateTargetData(s,m))});let l=jn(),u=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Ob(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(Z.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function Ob(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=jn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function Lb(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $b(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Hr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Yd(t,e,n){const r=Y(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!sa(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function jy(t,e,n){const r=Y(t);let i=Z.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=Y(a),h=c.qi.get(u);return h!==void 0?C.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,Un(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:te())).next(a=>(Mb(r,DN(e),a),{documents:a,Hi:s})))}function Mb(t,e,n){let r=t.Ki.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class Vy{constructor(){this.activeTargetIds=XE()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fb{constructor(){this.Lr=new Vy,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Vy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ub{qr(e){}shutdown(){}}/**
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
 */class zy{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const jb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Vb{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class zb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);F("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(F("RestConnection","Received: ",l),l),l=>{throw Vd("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+cs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=jb[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new ZR;a.setWithCredentials(!0),a.listenOnce(YR.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case vh.NO_ERROR:const c=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(c)),s(c);break;case vh.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new z(T.DEADLINE_EXCEEDED,"Request time out"));break;case vh.HTTP_ERROR:const h=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=(u=d)===null||u===void 0?void 0:u.error;if(m&&m.status&&m.message){const g=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(_)>=0?_:T.UNKNOWN}(m.status);o(new z(g,m.message))}else o(new z(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new z(T.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=GR(),o=QR(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new JR({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");F("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new Vb({Hr:g=>{h?F("Connection","Not sending because WebChannel is closed:",g):(c||(F("Connection","Opening WebChannel transport."),u.open(),c=!0),F("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),m=(g,v,_)=>{g.listen(v,p=>{try{_(p)}catch(f){setTimeout(()=>{throw f},0)}})};return m(u,Fa.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),m(u,Fa.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),d.io())}),m(u,Fa.EventType.ERROR,g=>{h||(h=!0,Vd("Connection","WebChannel transport errored:",g),d.io(new z(T.UNAVAILABLE,"The operation could not be completed")))}),m(u,Fa.EventType.MESSAGE,g=>{var v;if(!h){const _=g.data[0];ve(!!_);const p=_,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){F("Connection","WebChannel received error:",f);const y=f.status;let S=function(b){const D=Oe[b];if(D!==void 0)return KE(D)}(y),I=f.message;S===void 0&&(S=T.INTERNAL,I="Unknown error status: "+y+" with message "+f.message),h=!0,d.io(new z(S,I)),u.close()}else F("Connection","WebChannel received:",_),d.ro(_)}}),m(o,XR.STAT_EVENT,g=>{g.stat===Ey.PROXY?F("Connection","Detected buffering proxy"):g.stat===Ey.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Eh(){return typeof document<"u"?document:null}/**
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
 */function Qu(t){return new XN(t,!0)}class aS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class lS{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new aS(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new z(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bb extends lS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=eb(this.It,e),r=function(i){if(!("targetChange"in i))return Z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Z.min():s.readTime?bn(s.readTime):Z.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Qd(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Hd(a)?{documents:rb(i,a)}:{query:ib(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=eS(i,s.resumeToken):s.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=Jl(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=ob(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Qd(this.It),n.removeTarget=e,this.Bo(n)}}class Hb extends lS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=nb(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.Zo(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Qd(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>tb(this.It,r))};this.Bo(n)}}/**
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
 */class Wb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new z(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(T.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(T.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class qb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Fn(n),this.ou=!1):F("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class Kb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{di(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Y(a);l._u.add(4),await la(l),l.gu.set("Unknown"),l._u.delete(4),await Yu(l)}(this))})}),this.gu=new qb(r,i)}}async function Yu(t){if(di(t))for(const e of t.wu)await e(!0)}async function la(t){for(const e of t.wu)await e(!1)}function uS(t,e){const n=Y(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Gp(n)?Kp(n):ds(n).ko()&&qp(n,e))}function cS(t,e){const n=Y(t),r=ds(n);n.du.delete(e),r.ko()&&hS(n,e),n.du.size===0&&(r.ko()?r.Fo():di(n)&&n.gu.set("Unknown"))}function qp(t,e){t.yu.Mt(e.targetId),ds(t).zo(e)}function hS(t,e){t.yu.Mt(e),ds(t).Ho(e)}function Kp(t){t.yu=new GN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),ds(t).start(),t.gu.uu()}function Gp(t){return di(t)&&!ds(t).No()&&t.du.size>0}function di(t){return Y(t)._u.size===0}function dS(t){t.yu=void 0}async function Gb(t){t.du.forEach((e,n)=>{qp(t,e)})}async function Qb(t,e){dS(t),Gp(t)?(t.gu.hu(e),Kp(t)):t.gu.set("Unknown")}async function Yb(t,e,n){if(t.gu.set("Online"),e instanceof ZE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zl(t,r)}else if(e instanceof sl?t.yu.Gt(e):e instanceof JE?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(Z.min()))try{const r=await oS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(yt.EMPTY_BYTE_STRING,l.snapshotVersion)),hS(i,a);const u=new Hr(l.target,a,1,l.sequenceNumber);qp(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Zl(t,r)}}async function Zl(t,e,n){if(!sa(e))throw e;t._u.add(1),await la(t),t.gu.set("Offline"),n||(n=()=>oS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Yu(t)})}function fS(t,e){return e().catch(n=>Zl(t,n,e))}async function Xu(t){const e=Y(t),n=Ir(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Xb(e);)try{const i=await Lb(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,Jb(e,i)}catch(i){await Zl(e,i)}pS(e)&&mS(e)}function Xb(t){return di(t)&&t.fu.length<10}function Jb(t,e){t.fu.push(e);const n=Ir(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function pS(t){return di(t)&&!Ir(t).No()&&t.fu.length>0}function mS(t){Ir(t).start()}async function Zb(t){Ir(t).eu()}async function eD(t){const e=Ir(t);for(const n of t.fu)e.Xo(n.mutations)}async function tD(t,e,n){const r=t.fu.shift(),i=zp.from(r,e,n);await fS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xu(t)}async function nD(t,e){e&&Ir(t).Yo&&await async function(n,r){if(i=r.code,BN(i)&&i!==T.ABORTED){const s=n.fu.shift();Ir(n).Mo(),await fS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Xu(n)}var i}(t,e),pS(t)&&mS(t)}async function By(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=di(n);n._u.add(3),await la(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Yu(n)}async function rD(t,e){const n=Y(t);e?(n._u.delete(2),await Yu(n)):e||(n._u.add(2),await la(n),n.gu.set("Unknown"))}function ds(t){return t.pu||(t.pu=function(e,n,r){const i=Y(e);return i.su(),new Bb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:Gb.bind(null,t),Zr:Qb.bind(null,t),Wo:Yb.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Gp(t)?Kp(t):t.gu.set("Unknown")):(await t.pu.stop(),dS(t))})),t.pu}function Ir(t){return t.Iu||(t.Iu=function(e,n,r){const i=Y(e);return i.su(),new Hb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:Zb.bind(null,t),Zr:nD.bind(null,t),tu:eD.bind(null,t),Zo:tD.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Xu(t)):(await t.Iu.stop(),t.fu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Qp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Qp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yp(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),sa(t))return new z(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ui{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Ui(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ui;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Hy{constructor(){this.Tu=new Be(j.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):Q():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class es{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new es(e,n,Ui.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class iD{constructor(){this.Au=void 0,this.listeners=[]}}class sD{constructor(){this.queries=new hs(e=>ME(e),Wu),this.onlineState="Unknown",this.Ru=new Set}}async function oD(t,e){const n=Y(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new iD),i)try{s.Au=await n.onListen(r)}catch(o){const a=Yp(o,`Initialization of query '${qd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Xp(n)}async function aD(t,e){const n=Y(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function lD(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Xp(n)}function uD(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Xp(t){t.Ru.forEach(e=>{e.next()})}class cD{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class gS{constructor(e){this.key=e}}class yS{constructor(e){this.key=e}}class hD{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=te(),this.mutatedKeys=te(),this.Gu=FE(e),this.Qu=new Ui(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Hy,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=Up(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let _=!1;d&&m?d.data.isEqual(m.data)?g!==v&&(r.track({type:3,doc:m}),_=!0):this.Hu(d,m)||(r.track({type:2,doc:m}),_=!0,(l&&this.Gu(m,l)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),_=!0):d&&!m&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(m?(o=o.add(m),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(h,d){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return m(h)-m(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new es(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Hy,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=te(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new yS(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new gS(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=te();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return es.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class dD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class fD{constructor(e){this.key=e,this.nc=!1}}class pD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new hs(a=>ME(a),Wu),this.rc=new Map,this.oc=new Set,this.uc=new Be(j.comparator),this.cc=new Map,this.ac=new Bp,this.hc={},this.lc=new Map,this.fc=Zi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function mD(t,e){const n=TD(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await $b(n.localStore,Un(e));n.isPrimaryClient&&uS(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await gD(n,e,r,a==="current",o.resumeToken)}return i}async function gD(t,e,n,r,i){t._c=(h,d,m)=>async function(g,v,_,p){let f=v.view.Wu(_);f.$i&&(f=await jy(g.localStore,v.query,!1).then(({documents:I})=>v.view.Wu(I,f)));const y=p&&p.targetChanges.get(v.targetId),S=v.view.applyChanges(f,g.isPrimaryClient,y);return qy(g,v.targetId,S.Xu),S.snapshot}(t,h,d,m);const s=await jy(t.localStore,e,!0),o=new hD(e,s.Hi),a=o.Wu(s.documents),l=aa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);qy(t,n,u.Xu);const c=new dD(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function yD(t,e){const n=Y(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Wu(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Yd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),cS(n.remoteStore,r.targetId),Xd(n,r.targetId)}).catch(ia)):(Xd(n,r.targetId),await Yd(n.localStore,r.targetId,!0))}async function vD(t,e,n){const r=CD(t);try{const i=await function(s,o){const a=Y(s),l=Ve.now(),u=o.reduce((d,m)=>d.add(m.key),te());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=jn(),g=te();return a.Gi.getEntries(d,u).next(v=>{m=v,m.forEach((_,p)=>{p.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{c=v;const _=[];for(const p of o){const f=jN(p,c.get(p.key).overlayedDocument);f!=null&&_.push(new Rr(p.key,f,OE(f.value.mapValue),on.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,_,o)}).next(v=>{h=v;const _=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,_)})}).then(()=>({batchId:h.batchId,changes:QE(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Be(ce)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await ua(r,i.changes),await Xu(r.remoteStore)}catch(i){const s=Yp(i,"Failed to persist write");n.reject(s)}}async function vS(t,e){const n=Y(t);try{const r=await Pb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?ve(o.nc):i.removedDocuments.size>0&&(ve(o.nc),o.nc=!1))}),await ua(n,r,e)}catch(r){await ia(r)}}function Wy(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Y(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&Xp(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wD(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Be(j.comparator);o=o.insert(s,nt.newNoDocument(s,Z.min()));const a=te().add(s),l=new Gu(Z.min(),new Map,new ze(ce),o,a);await vS(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),Jp(r)}else await Yd(r.localStore,e,!1).then(()=>Xd(r,e,n)).catch(ia)}async function ED(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await Db(n.localStore,e);ES(n,r,null),wS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ua(n,i)}catch(i){await ia(i)}}async function SD(t,e,n){const r=Y(t);try{const i=await function(s,o){const a=Y(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ve(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);ES(r,e,n),wS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ua(r,i)}catch(i){await ia(i)}}function wS(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function ES(t,e,n){const r=Y(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Xd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||SS(t,r)})}function SS(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(cS(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Jp(t))}function qy(t,e,n){for(const r of n)r instanceof gS?(t.ac.addReference(r.key,e),_D(t,r)):r instanceof yS?(F("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||SS(t,r.key)):Q()}function _D(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.oc.add(r),Jp(t))}function Jp(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new j(Ie.fromString(e)),r=t.fc.next();t.cc.set(r,new fD(n)),t.uc=t.uc.insert(n,r),uS(t.remoteStore,new Hr(Un($E(n.path)),r,2,Lp.at))}}async function ua(t,e,n){const r=Y(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Wp.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=Y(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>C.forEach(l,h=>C.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>C.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!sa(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),m=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(m);u.Ui=u.Ui.insert(h,g)}}}(r.localStore,s))}async function ID(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await sS(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new z(T.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ua(n,r.ji)}}function kD(t,e){const n=Y(t),r=n.cc.get(e);if(r&&r.nc)return te().add(r.key);{let i=te();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function TD(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wD.bind(null,e),e.sc.Wo=lD.bind(null,e.eventManager),e.sc.wc=uD.bind(null,e.eventManager),e}function CD(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ED.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SD.bind(null,e),e}class xD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Qu(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return bb(this.persistence,new Rb,e.initialUser,this.It)}yc(e){return new xb(Hp.Bs,this.It)}gc(e){return new Fb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ID.bind(null,this.syncEngine),await rD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sD}createDatastore(e){const n=Qu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new zb(i));var i;return function(s,o,a,l){return new Wb(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Wy(this.syncEngine,a,0),o=zy.C()?new zy:new Ub,new Kb(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new pD(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);F("RemoteStore","RemoteStore shutting down."),n._u.add(5),await la(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function _S(t,e,n){if(!n)throw new z(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RD(t,e,n,r){if(e===!0&&r===!0)throw new z(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ky(t){if(!j.isDocumentKey(t))throw new z(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gy(t){if(j.isDocumentKey(t))throw new z(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function ni(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zp(t);throw new z(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Qy=new Map;class Yy{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,RD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ju{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new eN;switch(n.type){case"gapi":const r=n.client;return new iN(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Qy.get(e);n&&(F("ComponentProvider","Removing Datastore"),Qy.delete(e),n.terminate())}(this),Promise.resolve()}}function ND(t,e,n,r={}){var i;const s=(t=ni(t,Ju))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Vd("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ct.MOCK_USER;else{o=yC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new z(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ct(l)}t._authCredentials=new tN(new RE(o,a))}}/**
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
 */class Kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kt(this.firestore,e,this._key)}}class Zu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zu(this.firestore,e,this._query)}}class gr extends Zu{constructor(e,n,r){super(e,n,$E(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kt(this.firestore,null,new j(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function bD(t,e,...n){if(t=Me(t),_S("collection","path",e),t instanceof Ju){const r=Ie.fromString(e,...n);return Gy(r),new gr(t,null,r)}{if(!(t instanceof Kt||t instanceof gr))throw new z(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Gy(r),new gr(t.firestore,null,r)}}function Jd(t,e,...n){if(t=Me(t),arguments.length===1&&(e=NE.R()),_S("doc","path",e),t instanceof Ju){const r=Ie.fromString(e,...n);return Ky(r),new Kt(t,null,new j(r))}{if(!(t instanceof Kt||t instanceof gr))throw new z(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Ky(r),new Kt(t.firestore,t instanceof gr?t.converter:null,new j(r))}}/**
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
 */class DD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class PD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=NE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function OD(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function LD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $D(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>By(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>By(e.remoteStore,s)),t.onlineComponents=e}async function $D(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await OD(t,new xD)),t.offlineComponents}async function IS(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await LD(t,new AD)),t.onlineComponents}function MD(t){return IS(t).then(e=>e.syncEngine)}async function FD(t){const e=await IS(t),n=e.eventManager;return n.onListen=mD.bind(null,e.syncEngine),n.onUnlisten=yD.bind(null,e.syncEngine),n}function UD(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new DD({next:h=>{s.enqueueAndForget(()=>aD(i,c)),h.fromCache&&a.source==="server"?l.reject(new z(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new cD(o,u,{includeMetadataChanges:!0,Nu:!0});return oD(i,c)}(await FD(t),t.asyncQueue,e,n,r)),r.promise}class jD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new aS(this,"async_queue_retry"),this.Wc=()=>{const n=Eh();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Eh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Eh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new mr;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!sa(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Qp.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&Q()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class ca extends Ju{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new jD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TS(this),this._firestoreClient.terminate()}}function VD(t,e){const n=typeof t=="object"?t:lp(),r=typeof t=="string"?t:e||"(default)",i=ui(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=pC("firestore");s&&ND(i,...s)}return i}function kS(t){return t._firestoreClient||TS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TS(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new mN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new PD(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ts(yt.fromBase64String(e))}catch(n){throw new z(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ts(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ec{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class em{constructor(e){this._methodName=e}}/**
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
 */class tm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const zD=/^__.*__$/;class BD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new oa(e,this.data,n,this.fieldTransforms)}}class CS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class nm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new nm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return eu(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(xS(this.sa)&&zD.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class HD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Qu(e)}da(e,n,r,i=!1){return new nm({sa:e,methodName:n,fa:r,path:dt.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function AS(t){const e=t._freezeSettings(),n=Qu(t._databaseId);return new HD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function WD(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);rm("Data must be an object, but it was:",o,r);const a=RS(r,o);let l,u;if(s.merge)l=new qt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Zd(e,h,n);if(!o.contains(d))throw new z(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);bS(c,d)||c.push(d)}l=new qt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new BD(new Tt(a),l,u)}class tc extends em{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof tc}}function qD(t,e,n,r){const i=t.da(1,e,n);rm("Data must be an object, but it was:",i,r);const s=[],o=Tt.empty();hi(r,(l,u)=>{const c=im(e,l,n);u=Me(u);const h=i.ca(c);if(u instanceof tc)s.push(c);else{const d=nc(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new qt(s);return new CS(o,a,i.fieldTransforms)}function KD(t,e,n,r,i,s){const o=t.da(1,e,n),a=[Zd(e,r,n)],l=[i];if(s.length%2!=0)throw new z(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Zd(e,s[d])),l.push(s[d+1]);const u=[],c=Tt.empty();for(let d=a.length-1;d>=0;--d)if(!bS(u,a[d])){const m=a[d];let g=l[d];g=Me(g);const v=o.ca(m);if(g instanceof tc)u.push(m);else{const _=nc(g,v);_!=null&&(u.push(m),c.set(m,_))}}const h=new qt(u);return new CS(c,h,o.fieldTransforms)}function nc(t,e){if(NS(t=Me(t)))return rm("Unsupported field value:",e,t),RS(t,e);if(t instanceof em)return function(n,r){if(!xS(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=nc(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ON(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ve.fromDate(n);return{timestampValue:Jl(r.It,i)}}if(n instanceof Ve){const i=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Jl(r.It,i)}}if(n instanceof tm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ts)return{bytesValue:eS(r.It,n._byteString)};if(n instanceof Kt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Zp(n)}`)}(t,e)}function RS(t,e){const n={};return bE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(r,i)=>{const s=nc(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function NS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof tm||t instanceof ts||t instanceof Kt||t instanceof em)}function rm(t,e,n){if(!NS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Zp(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Zd(t,e,n){if((e=Me(e))instanceof ec)return e._internalPath;if(typeof e=="string")return im(t,e);throw eu("Field path arguments must be of type string or ",t,!1,void 0,n)}const GD=new RegExp("[~\\*/\\[\\]]");function im(t,e,n){if(e.search(GD)>=0)throw eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ec(...e.split("."))._internalPath}catch{throw eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(T.INVALID_ARGUMENT,a+t+l)}function bS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class DS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(PS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QD extends DS{data(){return super.data()}}function PS(t,e){return typeof e=="string"?im(t,e):e instanceof ec?e._internalPath:e._delegate._internalPath}/**
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
 */function YD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class XD{convertValue(e,n="none"){switch(ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const r={};return hi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new tm(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=PE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ao(e));default:return null}}convertTimestamp(e){const n=_r(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ve(iS(r));const i=new Ro(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||Fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function JD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Va{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ZD extends DS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(PS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ol extends ZD{data(e={}){return super.data(e)}}class e2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Va(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ol(this._firestore,this._userDataWriter,r.key,r,new Va(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ol(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Va(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ol(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Va(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:t2(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function t2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class n2 extends XD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Kt(this.firestore,null,n)}}function r2(t){t=ni(t,Zu);const e=ni(t.firestore,ca),n=kS(e),r=new n2(e);return YD(t._query),UD(n,t._query).then(i=>new e2(e,r,t,i))}function i2(t,e,n,...r){t=ni(t,Kt);const i=ni(t.firestore,ca),s=AS(i);let o;return o=typeof(e=Me(e))=="string"||e instanceof ec?KD(s,"updateDoc",t._key,e,n,r):qD(s,"updateDoc",t._key,e),sm(i,[o.toMutation(t._key,on.exists(!0))])}function s2(t){return sm(ni(t.firestore,ca),[new jp(t._key,on.none())])}function o2(t,e){const n=ni(t.firestore,ca),r=Jd(t),i=JD(t.converter,e);return sm(n,[WD(AS(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function sm(t,e){return function(n,r){const i=new mr;return n.asyncQueue.enqueueAndForget(async()=>vD(await MD(n),r,i)),i.promise}(kS(t),e)}(function(t,e=!0){(function(n){cs=n})(Go),En(new ln("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ca(new nN(n.getProvider("auth-internal")),new oN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ht(Sy,"3.7.3",t),Ht(Sy,"3.7.3","esm2017")})();function om(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function OS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a2=OS,LS=new li("auth","Firebase",OS());/**
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
 */const Xy=new Tu("@firebase/auth");function al(t,...e){Xy.logLevel<=ae.ERROR&&Xy.error(`Auth (${Go}): ${t}`,...e)}/**
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
 */function un(t,...e){throw am(t,...e)}function vn(t,...e){return am(t,...e)}function l2(t,e,n){const r=Object.assign(Object.assign({},a2()),{[e]:n});return new li("auth","Firebase",r).create(e,{appName:t.name})}function am(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return LS.create(t,...e)}function V(t,e,...n){if(!t)throw am(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw al(e),new Error(e)}function Vn(t,e){t||xn(e)}/**
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
 */const Jy=new Map;function An(t){Vn(t instanceof Function,"Expected a class definition");let e=Jy.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jy.set(t,e),e)}/**
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
 */function u2(t,e){const n=ui(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Eo(s,e!=null?e:{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function c2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ef(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function h2(){return Zy()==="http:"||Zy()==="https:"}function Zy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function d2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h2()||K1()||"connection"in navigator)?navigator.onLine:!0}function f2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=oC()||aC()}get(){return d2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function lm(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $S{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const p2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const m2=new ha(3e4,6e4);function fs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ps(t,e,n,r,i={}){return MS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ko(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),$S.fetch()(FS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function MS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},p2),e);try{const i=new g2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw za(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw za(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw za(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw za(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw l2(t,c,u);un(t,c)}}catch(i){if(i instanceof cn)throw i;un(t,"network-request-failed")}}async function da(t,e,n,r,i={}){const s=await ps(t,e,n,r,i);return"mfaPendingCredential"in s&&un(t,"multi-factor-auth-required",{_serverResponse:s}),s}function FS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?lm(t.config,i):`${t.config.apiScheme}://${i}`}class g2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),m2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function y2(t,e){return ps(t,"POST","/v1/accounts:delete",e)}async function v2(t,e){return ps(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Js(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function w2(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=um(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Js(Sh(i.auth_time)),issuedAtTime:Js(Sh(i.iat)),expirationTime:Js(Sh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sh(t){return Number(t)*1e3}function um(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const s=q1(r);return s?JSON.parse(s):(al("Failed to decode base64 JWT payload"),null)}catch(s){return al("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function E2(t){const e=um(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Oo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&S2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function S2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class US{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Oo(t,v2(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?T2(s.providerUserInfo):[],a=k2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new US(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function I2(t){const e=Me(t);await tu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function k2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function T2(t){return t.map(e=>{var{providerId:n}=e,r=om(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function C2(t,e){const n=await MS(t,{},async()=>{const r=Ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=FS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$S.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):E2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await C2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Lo;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lo,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
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
 */function qn(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=om(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new US(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Oo(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return w2(this,e)}reload(){return I2(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Oo(this,y2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:S,isAnonymous:I,providerData:b,stsTokenManager:D}=n;V(y&&D,e,"internal-error");const P=Lo.fromJSON(this.name,D);V(typeof y=="string",e,"internal-error"),qn(h,e.name),qn(d,e.name),V(typeof S=="boolean",e,"internal-error"),V(typeof I=="boolean",e,"internal-error"),qn(m,e.name),qn(g,e.name),qn(v,e.name),qn(_,e.name),qn(p,e.name),qn(f,e.name);const J=new Wr({uid:y,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:I,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:f});return b&&Array.isArray(b)&&(J.providerData=b.map(B=>Object.assign({},B))),_&&(J._redirectEventId=_),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Lo;i.updateFromServerResponse(n);const s=new Wr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tu(s),s}}/**
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
 */class jS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jS.type="NONE";const ev=jS;/**
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
 */function ll(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ll(this.userKey,i.apiKey,s),this.fullPersistenceKey=ll("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(An(ev),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||An(ev);const o=ll(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Wr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ji(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ji(s,e,r))}}/**
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
 */function tv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(WS(e))return"Blackberry";if(qS(e))return"Webos";if(cm(e))return"Safari";if((e.includes("chrome/")||zS(e))&&!e.includes("edge/"))return"Chrome";if(HS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VS(t=gt()){return/firefox\//i.test(t)}function cm(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zS(t=gt()){return/crios\//i.test(t)}function BS(t=gt()){return/iemobile/i.test(t)}function HS(t=gt()){return/android/i.test(t)}function WS(t=gt()){return/blackberry/i.test(t)}function qS(t=gt()){return/webos/i.test(t)}function rc(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function x2(t=gt()){var e;return rc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function A2(){return lC()&&document.documentMode===10}function KS(t=gt()){return rc(t)||HS(t)||qS(t)||WS(t)||/windows phone/i.test(t)||BS(t)}function R2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function GS(t,e=[]){let n;switch(t){case"Browser":n=tv(gt());break;case"Worker":n=`${tv(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Go}/${r}`}/**
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
 */class N2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class b2{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nv(this),this.idTokenSubscription=new nv(this),this.beforeStateQueue=new N2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=LS,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await tu(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=f2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Me(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=GS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function fa(t){return Me(t)}class nv{constructor(e){this.auth=e,this.observer=null,this.addObserver=_C(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function D2(t,e,n){const r=fa(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=QS(e),{host:o,port:a}=P2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||O2()}function QS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function P2(t){const e=QS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:rv(o)}}}function rv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function O2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class hm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function L2(t,e){return ps(t,"POST","/v1/accounts:update",e)}/**
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
 */async function $2(t,e){return da(t,"POST","/v1/accounts:signInWithPassword",fs(t,e))}async function M2(t,e){return ps(t,"POST","/v1/accounts:sendOobCode",fs(t,e))}async function F2(t,e){return M2(t,e)}/**
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
 */async function U2(t,e){return da(t,"POST","/v1/accounts:signInWithEmailLink",fs(t,e))}async function j2(t,e){return da(t,"POST","/v1/accounts:signInWithEmailLink",fs(t,e))}/**
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
 */class $o extends hm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return $2(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return U2(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return L2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return j2(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vi(t,e){return da(t,"POST","/v1/accounts:signInWithIdp",fs(t,e))}/**
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
 */const V2="http://localhost";class ri extends hm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=om(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ri(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vi(e,n)}buildRequest(){const e={requestUri:V2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ko(n)}return e}}/**
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
 */function z2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function B2(t){const e=Ds(Ps(t)).link,n=e?Ds(Ps(e)).deep_link_id:null,r=Ds(Ps(t)).deep_link_id;return(r?Ds(Ps(r)).link:null)||r||n||e||t}class dm{constructor(e){var n,r,i,s,o,a;const l=Ds(Ps(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=z2((i=l.mode)!==null&&i!==void 0?i:null);V(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=B2(e);try{return new dm(n)}catch{return null}}}/**
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
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,n){return $o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=dm.parseLink(n);return V(r,"argument-error"),$o._fromEmailAndCode(e,r.code,r.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class YS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pa extends YS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xn extends pa{constructor(){super("facebook.com")}static credential(e){return ri._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ri._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Zn extends pa{constructor(){super("github.com")}static credential(e){return ri._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */class er extends pa{constructor(){super("twitter.com")}static credential(e,n){return ri._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
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
 */async function H2(t,e){return da(t,"POST","/v1/accounts:signUp",fs(t,e))}/**
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
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Wr._fromIdTokenResponse(e,r,i),o=iv(r);return new ii({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=iv(r);return new ii({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function iv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class nu extends cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,nu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new nu(e,n,r,i)}}function XS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?nu._fromErrorAndOperation(t,s,e,r):s})}async function W2(t,e,n=!1){const r=await Oo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ii._forOperation(t,"link",r)}/**
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
 */async function q2(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Oo(t,XS(i,s,e,t),n);V(o.idToken,i,"internal-error");const a=um(o.idToken);V(a,i,"internal-error");const{sub:l}=a;return V(t.uid===l,i,"user-mismatch"),ii._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&un(i,"user-mismatch"),o}}/**
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
 */async function JS(t,e,n=!1){const r="signIn",i=await XS(t,r,e),s=await ii._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function K2(t,e){return JS(fa(t),e)}/**
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
 */function G2(t,e,n){var r;V(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),V(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(V(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(V(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Q2(t,e,n){const r=Me(t),i={requestType:"PASSWORD_RESET",email:e};n&&G2(r,i,n),await F2(r,i)}async function Y2(t,e,n){const r=fa(t),i=await H2(r,{returnSecureToken:!0,email:e,password:n}),s=await ii._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function X2(t,e,n){return K2(Me(t),ms.credential(e,n))}function J2(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function Z2(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function eP(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function tP(t){return Me(t).signOut()}const ru="__sak";/**
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
 */class ZS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ru,"1"),this.storage.removeItem(ru),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function nP(){const t=gt();return cm(t)||rc(t)}const rP=1e3,iP=10;class e_ extends ZS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nP()&&R2(),this.fallbackToPolling=KS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);A2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}e_.type="LOCAL";const sP=e_;/**
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
 */class t_ extends ZS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}t_.type="SESSION";const n_=t_;/**
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
 */function oP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ic(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await oP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ic.receivers=[];/**
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
 */function fm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=fm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wn(){return window}function lP(t){wn().location.href=t}/**
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
 */function r_(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function uP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hP(){return r_()?self:null}/**
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
 */const i_="firebaseLocalStorageDb",dP=1,iu="firebaseLocalStorage",s_="fbase_key";class ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sc(t,e){return t.transaction([iu],e?"readwrite":"readonly").objectStore(iu)}function fP(){const t=indexedDB.deleteDatabase(i_);return new ma(t).toPromise()}function tf(){const t=indexedDB.open(i_,dP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(iu,{keyPath:s_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(iu)?e(r):(r.close(),await fP(),e(await tf()))})})}async function sv(t,e,n){const r=sc(t,!0).put({[s_]:e,value:n});return new ma(r).toPromise()}async function pP(t,e){const n=sc(t,!1).get(e),r=await new ma(n).toPromise();return r===void 0?null:r.value}function ov(t,e){const n=sc(t,!0).delete(e);return new ma(n).toPromise()}const mP=800,gP=3;class o_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ic._getInstance(hP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uP(),!this.activeServiceWorker)return;this.sender=new aP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tf();return await sv(e,ru,"1"),await ov(e,ru),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ov(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=sc(i,!1).getAll();return new ma(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o_.type="LOCAL";const yP=o_;/**
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
 */function vP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vP().appendChild(r)})}function EP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ha(3e4,6e4);/**
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
 */function SP(t,e){return e?An(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class pm extends hm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _P(t){return JS(t.auth,new pm(t),t.bypassAuthState)}function IP(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),q2(n,new pm(t),t.bypassAuthState)}async function kP(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),W2(n,new pm(t),t.bypassAuthState)}/**
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
 */class a_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _P;case"linkViaPopup":case"linkViaRedirect":return kP;case"reauthViaPopup":case"reauthViaRedirect":return IP;default:un(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TP=new ha(2e3,1e4);class Ni extends a_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ni.currentPopupAction&&Ni.currentPopupAction.cancel(),Ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=fm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,TP.get())};e()}}Ni.currentPopupAction=null;/**
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
 */const CP="pendingRedirect",ul=new Map;class xP extends a_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const r=await AP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AP(t,e){const n=bP(e),r=NP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function RP(t,e){ul.set(t._key(),e)}function NP(t){return An(t._redirectPersistence)}function bP(t){return ll(CP,t.config.apiKey,t.name)}async function DP(t,e,n=!1){const r=fa(t),i=SP(r,e),o=await new xP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const PP=10*60*1e3;class OP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!l_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PP&&this.cachedEventUids.clear(),this.cachedEventUids.has(av(e))}saveEventToCache(e){this.cachedEventUids.add(av(e)),this.lastProcessedEventTime=Date.now()}}function av(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function l_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return l_(t);default:return!1}}/**
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
 */async function $P(t,e={}){return ps(t,"GET","/v1/projects",e)}/**
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
 */const MP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FP=/^https?/;async function UP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $P(t);for(const n of e)try{if(jP(n))return}catch{}un(t,"unauthorized-domain")}function jP(t){const e=ef(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FP.test(n))return!1;if(MP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const VP=new ha(3e4,6e4);function lv(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zP(t){return new Promise((e,n)=>{var r,i,s;function o(){lv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lv(),n(vn(t,"network-request-failed"))},timeout:VP.get()})}if(!((i=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wn().gapi)===null||s===void 0)&&s.load)o();else{const a=EP("iframefcb");return wn()[a]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},wP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw cl=null,e})}let cl=null;function BP(t){return cl=cl||zP(t),cl}/**
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
 */const HP=new ha(5e3,15e3),WP="__/auth/iframe",qP="emulator/auth/iframe",KP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QP(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?lm(e,qP):`https://${t.config.authDomain}/${WP}`,r={apiKey:e.apiKey,appName:t.name,v:Go},i=GP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ko(r).slice(1)}`}async function YP(t){const e=await BP(t),n=wn().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:QP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),a=wn().setTimeout(()=>{s(o)},HP.get());function l(){wn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const XP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JP=500,ZP=600,eO="_blank",tO="http://localhost";class uv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nO(t,e,n,r=JP,i=ZP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},XP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=gt().toLowerCase();n&&(a=zS(u)?eO:n),VS(u)&&(e=e||tO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,g])=>`${d}${m}=${g},`,"");if(x2(u)&&a!=="_self")return rO(e||"",a),new uv(null);const h=window.open(e||"",a,c);V(h,t,"popup-blocked");try{h.focus()}catch{}return new uv(h)}function rO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const iO="__/auth/handler",sO="emulator/auth/handler";function cv(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Go,eventId:i};if(e instanceof YS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof pa){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${oO(t)}?${Ko(a).slice(1)}`}function oO({config:t}){return t.emulator?lm(t,sO):`https://${t.authDomain}/${iO}`}/**
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
 */const _h="webStorageSupport";class aO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n_,this._completeRedirectFn=DP,this._overrideRedirectResult=RP}async _openPopup(e,n,r,i){var s;Vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=cv(e,n,r,ef(),i);return nO(e,o,fm())}async _openRedirect(e,n,r,i){return await this._originValidation(e),lP(cv(e,n,r,ef(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YP(e),r=new OP(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_h,{type:_h},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_h];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return KS()||cm()||rc()}}const lO=aO;var hv="@firebase/auth",dv="0.20.11";/**
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
 */class uO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hO(t){En(new ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{V(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GS(t)},c=new b2(a,l,u);return c2(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new ln("auth-internal",e=>{const n=fa(e.getProvider("auth").getImmediate());return(r=>new uO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(hv,dv,cO(t)),Ht(hv,dv,"esm2017")}/**
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
 */const dO=5*60,fO=X1("authIdTokenMaxAge")||dO;let fv=null;const pO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fO)return;const i=n==null?void 0:n.token;fv!==i&&(fv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mO(t=lp()){const e=ui(t,"auth");if(e.isInitialized())return e.getImmediate();const n=u2(t,{popupRedirectResolver:lO,persistence:[yP,sP,n_]}),r=X1("authTokenSyncURL");if(r){const s=pO(r);Z2(n,s,()=>s(n.currentUser)),J2(n,o=>s(o))}const i=Y1("auth");return i&&D2(n,`http://${i}`),n}hO("Browser");const gO="AIzaSyDJLEoAuOr25kvx4s_kJ_997bqyS6L67pc",yO="silvina-silberman-app.firebaseapp.com",vO="silvina-silberman-app",wO="silvina-silberman-app.appspot.com",EO="966120955897",SO="1:966120955897:web:712fc084e3461a4c3b6728",_O="G-L9SXFZSKDC",IO={apiKey:gO,authDomain:yO,projectId:vO,storageBucket:wO,messagingSenderId:EO,appId:SO,measurementId:_O},mm=tw(IO);GA(mm);const Ih=VD(mm),xs=mO(mm),Bn=x.exports.createContext();function kO(t){const e=bD(Ih,"products"),[n,r]=x.exports.useState([]);x.exports.useEffect(()=>{(async()=>{const _=await r2(e);r(_.docs.map(p=>({...p.data(),id:p.id})))})()},[]);const i=async v=>{await o2(e,v),console.log("Producto creado.")},s=async(v,_)=>{const p=Jd(Ih,"products",v);await i2(p,_)},o=async v=>{const _=Jd(Ih,"products",v);await s2(_)},[a,l]=x.exports.useState(null),[u,c]=x.exports.useState(!0),h=async(v,_)=>{await Y2(xs,v,_)},d=(v,_)=>{X2(xs,v,_)},m=async v=>Q2(xs,v),g=()=>{tP(xs)};return x.exports.useEffect(()=>{const v=eP(xs,_=>{l(_),c(!1),_!==null?localStorage.setItem("user",JSON.stringify(_)):localStorage.removeItem("user")});return()=>v()},[]),w(Bn.Provider,{value:{products:n,createProduct:i,updateProduct:s,deleteProduct:o,createAdminUser:h,loginAdminUser:d,resetPassword:m,logout:g,user:a,loading:u},children:t.children})}const pv="silvinasilberman@gmail.com",TO="silviadmin";var gm={exports:{}},fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=Symbol.for("react.element"),vm=Symbol.for("react.portal"),oc=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),lc=Symbol.for("react.profiler"),uc=Symbol.for("react.provider"),cc=Symbol.for("react.context"),CO=Symbol.for("react.server_context"),hc=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),fc=Symbol.for("react.suspense_list"),pc=Symbol.for("react.memo"),mc=Symbol.for("react.lazy"),xO=Symbol.for("react.offscreen"),u_;u_=Symbol.for("react.module.reference");function Yt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ym:switch(t=t.type,t){case oc:case lc:case ac:case dc:case fc:return t;default:switch(t=t&&t.$$typeof,t){case CO:case cc:case hc:case mc:case pc:case uc:return t;default:return e}}case vm:return e}}}fe.ContextConsumer=cc;fe.ContextProvider=uc;fe.Element=ym;fe.ForwardRef=hc;fe.Fragment=oc;fe.Lazy=mc;fe.Memo=pc;fe.Portal=vm;fe.Profiler=lc;fe.StrictMode=ac;fe.Suspense=dc;fe.SuspenseList=fc;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(t){return Yt(t)===cc};fe.isContextProvider=function(t){return Yt(t)===uc};fe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ym};fe.isForwardRef=function(t){return Yt(t)===hc};fe.isFragment=function(t){return Yt(t)===oc};fe.isLazy=function(t){return Yt(t)===mc};fe.isMemo=function(t){return Yt(t)===pc};fe.isPortal=function(t){return Yt(t)===vm};fe.isProfiler=function(t){return Yt(t)===lc};fe.isStrictMode=function(t){return Yt(t)===ac};fe.isSuspense=function(t){return Yt(t)===dc};fe.isSuspenseList=function(t){return Yt(t)===fc};fe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===oc||t===lc||t===ac||t===dc||t===fc||t===xO||typeof t=="object"&&t!==null&&(t.$$typeof===mc||t.$$typeof===pc||t.$$typeof===uc||t.$$typeof===cc||t.$$typeof===hc||t.$$typeof===u_||t.getModuleId!==void 0)};fe.typeOf=Yt;(function(t){t.exports=fe})(gm);function AO(t){function e(N,O,L,q,E){for(var re=0,R=0,xe=0,le=0,he,X,Xe=0,It=0,oe,at=oe=he=0,ue=0,Je=0,gs=0,Ze=0,ya=L.length,ys=ya-1,Jt,G="",be="",xc="",Ac="",Hn;ue<ya;){if(X=L.charCodeAt(ue),ue===ys&&R+le+xe+re!==0&&(R!==0&&(X=R===47?10:47),le=xe=re=0,ya++,ys++),R+le+xe+re===0){if(ue===ys&&(0<Je&&(G=G.replace(d,"")),0<G.trim().length)){switch(X){case 32:case 9:case 59:case 13:case 10:break;default:G+=L.charAt(ue)}X=59}switch(X){case 123:for(G=G.trim(),he=G.charCodeAt(0),oe=1,Ze=++ue;ue<ya;){switch(X=L.charCodeAt(ue)){case 123:oe++;break;case 125:oe--;break;case 47:switch(X=L.charCodeAt(ue+1)){case 42:case 47:e:{for(at=ue+1;at<ys;++at)switch(L.charCodeAt(at)){case 47:if(X===42&&L.charCodeAt(at-1)===42&&ue+2!==at){ue=at+1;break e}break;case 10:if(X===47){ue=at+1;break e}}ue=at}}break;case 91:X++;case 40:X++;case 34:case 39:for(;ue++<ys&&L.charCodeAt(ue)!==X;);}if(oe===0)break;ue++}switch(oe=L.substring(Ze,ue),he===0&&(he=(G=G.replace(h,"").trim()).charCodeAt(0)),he){case 64:switch(0<Je&&(G=G.replace(d,"")),X=G.charCodeAt(1),X){case 100:case 109:case 115:case 45:Je=O;break;default:Je=Xt}if(oe=e(O,Je,oe,X,E+1),Ze=oe.length,0<A&&(Je=n(Xt,G,gs),Hn=a(3,oe,Je,O,me,Ne,Ze,X,E,q),G=Je.join(""),Hn!==void 0&&(Ze=(oe=Hn.trim()).length)===0&&(X=0,oe="")),0<Ze)switch(X){case 115:G=G.replace(b,o);case 100:case 109:case 45:oe=G+"{"+oe+"}";break;case 107:G=G.replace(f,"$1 $2"),oe=G+"{"+oe+"}",oe=Ye===1||Ye===2&&s("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=G+oe,q===112&&(oe=(be+=oe,""))}else oe="";break;default:oe=e(O,n(O,G,gs),oe,q,E+1)}xc+=oe,oe=gs=Je=at=he=0,G="",X=L.charCodeAt(++ue);break;case 125:case 59:if(G=(0<Je?G.replace(d,""):G).trim(),1<(Ze=G.length))switch(at===0&&(he=G.charCodeAt(0),he===45||96<he&&123>he)&&(Ze=(G=G.replace(" ",":")).length),0<A&&(Hn=a(1,G,O,N,me,Ne,be.length,q,E,q))!==void 0&&(Ze=(G=Hn.trim()).length)===0&&(G="\0\0"),he=G.charCodeAt(0),X=G.charCodeAt(1),he){case 0:break;case 64:if(X===105||X===99){Ac+=G+L.charAt(ue);break}default:G.charCodeAt(Ze-1)!==58&&(be+=i(G,he,X,G.charCodeAt(2)))}gs=Je=at=he=0,G="",X=L.charCodeAt(++ue)}}switch(X){case 13:case 10:R===47?R=0:1+he===0&&q!==107&&0<G.length&&(Je=1,G+="\0"),0<A*W&&a(0,G,O,N,me,Ne,be.length,q,E,q),Ne=1,me++;break;case 59:case 125:if(R+le+xe+re===0){Ne++;break}default:switch(Ne++,Jt=L.charAt(ue),X){case 9:case 32:if(le+re+R===0)switch(Xe){case 44:case 58:case 9:case 32:Jt="";break;default:X!==32&&(Jt=" ")}break;case 0:Jt="\\0";break;case 12:Jt="\\f";break;case 11:Jt="\\v";break;case 38:le+R+re===0&&(Je=gs=1,Jt="\f"+Jt);break;case 108:if(le+R+re+ee===0&&0<at)switch(ue-at){case 2:Xe===112&&L.charCodeAt(ue-3)===58&&(ee=Xe);case 8:It===111&&(ee=It)}break;case 58:le+R+re===0&&(at=ue);break;case 44:R+xe+le+re===0&&(Je=1,Jt+="\r");break;case 34:case 39:R===0&&(le=le===X?0:le===0?X:le);break;case 91:le+R+xe===0&&re++;break;case 93:le+R+xe===0&&re--;break;case 41:le+R+re===0&&xe--;break;case 40:if(le+R+re===0){if(he===0)switch(2*Xe+3*It){case 533:break;default:he=1}xe++}break;case 64:R+xe+le+re+at+oe===0&&(oe=1);break;case 42:case 47:if(!(0<le+re+xe))switch(R){case 0:switch(2*X+3*L.charCodeAt(ue+1)){case 235:R=47;break;case 220:Ze=ue,R=42}break;case 42:X===47&&Xe===42&&Ze+2!==ue&&(L.charCodeAt(Ze+2)===33&&(be+=L.substring(Ze,ue+1)),Jt="",R=0)}}R===0&&(G+=Jt)}It=Xe,Xe=X,ue++}if(Ze=be.length,0<Ze){if(Je=O,0<A&&(Hn=a(2,be,Je,N,me,Ne,Ze,q,E,q),Hn!==void 0&&(be=Hn).length===0))return Ac+be+xc;if(be=Je.join(",")+"{"+be+"}",Ye*ee!==0){switch(Ye!==2||s(be,2)||(ee=0),ee){case 111:be=be.replace(S,":-moz-$1")+be;break;case 112:be=be.replace(y,"::-webkit-input-$1")+be.replace(y,"::-moz-$1")+be.replace(y,":-ms-input-$1")+be}ee=0}}return Ac+be+xc}function n(N,O,L){var q=O.trim().split(_);O=q;var E=q.length,re=N.length;switch(re){case 0:case 1:var R=0;for(N=re===0?"":N[0]+" ";R<E;++R)O[R]=r(N,O[R],L).trim();break;default:var xe=R=0;for(O=[];R<E;++R)for(var le=0;le<re;++le)O[xe++]=r(N[le]+" ",q[R],L).trim()}return O}function r(N,O,L){var q=O.charCodeAt(0);switch(33>q&&(q=(O=O.trim()).charCodeAt(0)),q){case 38:return O.replace(p,"$1"+N.trim());case 58:return N.trim()+O.replace(p,"$1"+N.trim());default:if(0<1*L&&0<O.indexOf("\f"))return O.replace(p,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+O}function i(N,O,L,q){var E=N+";",re=2*O+3*L+4*q;if(re===944){N=E.indexOf(":",9)+1;var R=E.substring(N,E.length-1).trim();return R=E.substring(0,N).trim()+R+";",Ye===1||Ye===2&&s(R,1)?"-webkit-"+R+R:R}if(Ye===0||Ye===2&&!s(E,1))return E;switch(re){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(Pe,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return R=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+E+"-ms-flex-pack"+R+E;case 1005:return g.test(E)?E.replace(m,":-webkit-")+E.replace(m,":-moz-")+E:E;case 1e3:switch(R=E.substring(13).trim(),O=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(O)){case 226:R=E.replace(I,"tb");break;case 232:R=E.replace(I,"tb-rl");break;case 220:R=E.replace(I,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+R+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(O=(E=N).length-10,R=(E.charCodeAt(O)===33?E.substring(0,O):E).substring(N.indexOf(":",7)+1).trim(),re=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:E=E.replace(R,"-webkit-"+R)+";"+E;break;case 207:case 102:E=E.replace(R,"-webkit-"+(102<re?"inline-":"")+"box")+";"+E.replace(R,"-webkit-"+R)+";"+E.replace(R,"-ms-"+R+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return R=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+R+"-ms-flex-"+R+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(P,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(P,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(B.test(N)===!0)return(R=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),O,L,q).replace(":fill-available",":stretch"):E.replace(R,"-webkit-"+R)+E.replace(R,"-moz-"+R.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,L+q===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+E}return E}function s(N,O){var L=N.indexOf(O===1?":":"{"),q=N.substring(0,O!==3?L:10);return L=N.substring(L+1,N.length-1),H(O!==2?q:q.replace(J,"$1"),L,O)}function o(N,O){var L=i(O,O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2));return L!==O+";"?L.replace(D," or ($1)").substring(4):"("+O+")"}function a(N,O,L,q,E,re,R,xe,le,he){for(var X=0,Xe=O,It;X<A;++X)switch(It=Fe[X].call(c,N,Xe,L,q,E,re,R,xe,le,he)){case void 0:case!1:case!0:case null:break;default:Xe=It}if(Xe!==O)return Xe}function l(N){switch(N){case void 0:case null:A=Fe.length=0;break;default:if(typeof N=="function")Fe[A++]=N;else if(typeof N=="object")for(var O=0,L=N.length;O<L;++O)l(N[O]);else W=!!N|0}return l}function u(N){return N=N.prefix,N!==void 0&&(H=null,N?typeof N!="function"?Ye=1:(Ye=2,H=N):Ye=0),u}function c(N,O){var L=N;if(33>L.charCodeAt(0)&&(L=L.trim()),ge=L,L=[ge],0<A){var q=a(-1,O,L,L,me,Ne,0,0,0,0);q!==void 0&&typeof q=="string"&&(O=q)}var E=e(Xt,L,O,0,0);return 0<A&&(q=a(-2,E,L,L,me,Ne,E.length,0,0,0),q!==void 0&&(E=q)),ge="",ee=0,Ne=me=1,E}var h=/^\0+/g,d=/[\0\r\f]/g,m=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,_=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,I=/[svh]\w+-[tblr]{2}/,b=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,P=/-self|flex-/g,J=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,Pe=/([^-])(image-set\()/,Ne=1,me=1,ee=0,Ye=1,Xt=[],Fe=[],A=0,H=null,W=0,ge="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var RO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function NO(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var bO=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,mv=NO(function(t){return bO.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),c_={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=typeof Symbol=="function"&&Symbol.for,wm=Qe?Symbol.for("react.element"):60103,Em=Qe?Symbol.for("react.portal"):60106,gc=Qe?Symbol.for("react.fragment"):60107,yc=Qe?Symbol.for("react.strict_mode"):60108,vc=Qe?Symbol.for("react.profiler"):60114,wc=Qe?Symbol.for("react.provider"):60109,Ec=Qe?Symbol.for("react.context"):60110,Sm=Qe?Symbol.for("react.async_mode"):60111,Sc=Qe?Symbol.for("react.concurrent_mode"):60111,_c=Qe?Symbol.for("react.forward_ref"):60112,Ic=Qe?Symbol.for("react.suspense"):60113,DO=Qe?Symbol.for("react.suspense_list"):60120,kc=Qe?Symbol.for("react.memo"):60115,Tc=Qe?Symbol.for("react.lazy"):60116,PO=Qe?Symbol.for("react.block"):60121,OO=Qe?Symbol.for("react.fundamental"):60117,LO=Qe?Symbol.for("react.responder"):60118,$O=Qe?Symbol.for("react.scope"):60119;function Ut(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case wm:switch(t=t.type,t){case Sm:case Sc:case gc:case vc:case yc:case Ic:return t;default:switch(t=t&&t.$$typeof,t){case Ec:case _c:case Tc:case kc:case wc:return t;default:return e}}case Em:return e}}}function h_(t){return Ut(t)===Sc}pe.AsyncMode=Sm;pe.ConcurrentMode=Sc;pe.ContextConsumer=Ec;pe.ContextProvider=wc;pe.Element=wm;pe.ForwardRef=_c;pe.Fragment=gc;pe.Lazy=Tc;pe.Memo=kc;pe.Portal=Em;pe.Profiler=vc;pe.StrictMode=yc;pe.Suspense=Ic;pe.isAsyncMode=function(t){return h_(t)||Ut(t)===Sm};pe.isConcurrentMode=h_;pe.isContextConsumer=function(t){return Ut(t)===Ec};pe.isContextProvider=function(t){return Ut(t)===wc};pe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===wm};pe.isForwardRef=function(t){return Ut(t)===_c};pe.isFragment=function(t){return Ut(t)===gc};pe.isLazy=function(t){return Ut(t)===Tc};pe.isMemo=function(t){return Ut(t)===kc};pe.isPortal=function(t){return Ut(t)===Em};pe.isProfiler=function(t){return Ut(t)===vc};pe.isStrictMode=function(t){return Ut(t)===yc};pe.isSuspense=function(t){return Ut(t)===Ic};pe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===gc||t===Sc||t===vc||t===yc||t===Ic||t===DO||typeof t=="object"&&t!==null&&(t.$$typeof===Tc||t.$$typeof===kc||t.$$typeof===wc||t.$$typeof===Ec||t.$$typeof===_c||t.$$typeof===OO||t.$$typeof===LO||t.$$typeof===$O||t.$$typeof===PO)};pe.typeOf=Ut;(function(t){t.exports=pe})(c_);var _m=c_.exports,MO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},FO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},UO={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},d_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Im={};Im[_m.ForwardRef]=UO;Im[_m.Memo]=d_;function gv(t){return _m.isMemo(t)?d_:Im[t.$$typeof]||MO}var jO=Object.defineProperty,VO=Object.getOwnPropertyNames,yv=Object.getOwnPropertySymbols,zO=Object.getOwnPropertyDescriptor,BO=Object.getPrototypeOf,vv=Object.prototype;function f_(t,e,n){if(typeof e!="string"){if(vv){var r=BO(e);r&&r!==vv&&f_(t,r,n)}var i=VO(e);yv&&(i=i.concat(yv(e)));for(var s=gv(t),o=gv(e),a=0;a<i.length;++a){var l=i[a];if(!FO[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=zO(e,l);try{jO(t,l,u)}catch{}}}}return t}var HO=f_;function Rn(){return(Rn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var wv=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},nf=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!gm.exports.typeOf(t)},su=Object.freeze([]),yr=Object.freeze({});function Mo(t){return typeof t=="function"}function Ev(t){return t.displayName||t.name||"Component"}function km(t){return t&&typeof t.styledComponentId=="string"}var ns=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Tm=typeof window<"u"&&"HTMLElement"in window,WO=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function ga(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var qO=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&ga(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),hl=new Map,ou=new Map,Zs=1,Ba=function(t){if(hl.has(t))return hl.get(t);for(;ou.has(Zs);)Zs++;var e=Zs++;return hl.set(t,e),ou.set(e,t),e},KO=function(t){return ou.get(t)},GO=function(t,e){e>=Zs&&(Zs=e+1),hl.set(t,e),ou.set(e,t)},QO="style["+ns+'][data-styled-version="5.3.6"]',YO=new RegExp("^"+ns+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),XO=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},JO=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(YO);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(GO(u,l),XO(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},ZO=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},p_=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(ns))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ns,"active"),r.setAttribute("data-styled-version","5.3.6");var o=ZO();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},eL=function(){function t(n){var r=this.element=p_(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}ga(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),tL=function(){function t(n){var r=this.element=p_(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),nL=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Sv=Tm,rL={isServer:!Tm,useCSSOMInjection:!WO},m_=function(){function t(n,r,i){n===void 0&&(n=yr),r===void 0&&(r={}),this.options=Rn({},rL,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Tm&&Sv&&(Sv=!1,function(s){for(var o=document.querySelectorAll(QO),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(ns)!=="active"&&(JO(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Ba(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Rn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new nL(o):s?new eL(o):new tL(o),new qO(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Ba(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ba(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Ba(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=KO(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=ns+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),iL=/(a)(d)/gi,_v=function(t){return String.fromCharCode(t+(t>25?39:97))};function rf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=_v(e%52)+n;return(_v(e%52)+n).replace(iL,"$1-$2")}var bi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},g_=function(t){return bi(5381,t)};function sL(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Mo(n)&&!km(n))return!1}return!0}var oL=g_("5.3.6"),aL=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&sL(e),this.componentId=n,this.baseHash=bi(oL,n),this.baseStyle=r,m_.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=rs(this.rules,e,n,r).join(""),a=rf(bi(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=bi(this.baseHash,r.hash),h="",d=0;d<u;d++){var m=this.rules[d];if(typeof m=="string")h+=m;else if(m){var g=rs(m,e,n,r),v=Array.isArray(g)?g.join(""):g;c=bi(c,v+d),h+=v}}if(h){var _=rf(c>>>0);if(!n.hasNameForId(i,_)){var p=r(h,"."+_,void 0,i);n.insertRules(i,_,p)}s.push(_)}}return s.join(" ")},t}(),lL=/^\s*\/\/.*$/gm,uL=[":","[",".","#"];function cL(t){var e,n,r,i,s=t===void 0?yr:t,o=s.options,a=o===void 0?yr:o,l=s.plugins,u=l===void 0?su:l,c=new AO(a),h=[],d=function(v){function _(p){if(p)try{v(p+"}")}catch{}}return function(p,f,y,S,I,b,D,P,J,B){switch(p){case 1:if(J===0&&f.charCodeAt(0)===64)return v(f+";"),"";break;case 2:if(P===0)return f+"/*|*/";break;case 3:switch(P){case 102:case 112:return v(y[0]+f),"";default:return f+(B===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(_)}}}(function(v){h.push(v)}),m=function(v,_,p){return _===0&&uL.indexOf(p[n.length])!==-1||p.match(i)?v:"."+e};function g(v,_,p,f){f===void 0&&(f="&");var y=v.replace(lL,""),S=_&&p?p+" "+_+" { "+y+" }":y;return e=f,n=_,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!_?"":_,S)}return c.use([].concat(u,[function(v,_,p){v===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,m))},d,function(v){if(v===-2){var _=h;return h=[],_}}])),g.hash=u.length?u.reduce(function(v,_){return _.name||ga(15),bi(v,_.name)},5381).toString():"",g}var y_=Dn.createContext();y_.Consumer;var v_=Dn.createContext(),hL=(v_.Consumer,new m_),sf=cL();function dL(){return x.exports.useContext(y_)||hL}function fL(){return x.exports.useContext(v_)||sf}var pL=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=sf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return ga(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=sf),this.name+e.hash},t}(),mL=/([A-Z])/,gL=/([A-Z])/g,yL=/^ms-/,vL=function(t){return"-"+t.toLowerCase()};function Iv(t){return mL.test(t)?t.replace(gL,vL).replace(yL,"-ms-"):t}var kv=function(t){return t==null||t===!1||t===""};function rs(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=rs(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(kv(t))return"";if(km(t))return"."+t.styledComponentId;if(Mo(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return rs(l,e,n,r)}var u;return t instanceof pL?n?(t.inject(n,r),t.getName(r)):t:nf(t)?function c(h,d){var m,g,v=[];for(var _ in h)h.hasOwnProperty(_)&&!kv(h[_])&&(Array.isArray(h[_])&&h[_].isCss||Mo(h[_])?v.push(Iv(_)+":",h[_],";"):nf(h[_])?v.push.apply(v,c(h[_],_)):v.push(Iv(_)+": "+(m=_,(g=h[_])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||m in RO?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var Tv=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function wL(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Mo(t)||nf(t)?Tv(rs(wv(su,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Tv(rs(wv(t,n)))}var EL=function(t,e,n){return n===void 0&&(n=yr),t.theme!==n.theme&&t.theme||e||n.theme},SL=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_L=/(^-|-$)/g;function kh(t){return t.replace(SL,"-").replace(_L,"")}var IL=function(t){return rf(g_(t)>>>0)};function Ha(t){return typeof t=="string"&&!0}var of=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},kL=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function TL(t,e,n){var r=t[n];of(e)&&of(r)?w_(r,e):t[n]=e}function w_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(of(o))for(var a in o)kL(a)&&TL(t,o[a],a)}return t}var E_=Dn.createContext();E_.Consumer;var Th={};function S_(t,e,n){var r=km(t),i=!Ha(t),s=e.attrs,o=s===void 0?su:s,a=e.componentId,l=a===void 0?function(f,y){var S=typeof f!="string"?"sc":kh(f);Th[S]=(Th[S]||0)+1;var I=S+"-"+IL("5.3.6"+S+Th[S]);return y?y+"-"+I:I}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Ha(f)?"styled."+f:"Styled("+Ev(f)+")"}(t):u,h=e.displayName&&e.componentId?kh(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,m=e.shouldForwardProp;r&&t.shouldForwardProp&&(m=e.shouldForwardProp?function(f,y,S){return t.shouldForwardProp(f,y,S)&&e.shouldForwardProp(f,y,S)}:t.shouldForwardProp);var g,v=new aL(n,h,r?t.componentStyle:void 0),_=v.isStatic&&o.length===0,p=function(f,y){return function(S,I,b,D){var P=S.attrs,J=S.componentStyle,B=S.defaultProps,Pe=S.foldedComponentIds,Ne=S.shouldForwardProp,me=S.styledComponentId,ee=S.target,Ye=function(q,E,re){q===void 0&&(q=yr);var R=Rn({},E,{theme:q}),xe={};return re.forEach(function(le){var he,X,Xe,It=le;for(he in Mo(It)&&(It=It(R)),It)R[he]=xe[he]=he==="className"?(X=xe[he],Xe=It[he],X&&Xe?X+" "+Xe:X||Xe):It[he]}),[R,xe]}(EL(I,x.exports.useContext(E_),B)||yr,I,P),Xt=Ye[0],Fe=Ye[1],A=function(q,E,re,R){var xe=dL(),le=fL(),he=E?q.generateAndInjectStyles(yr,xe,le):q.generateAndInjectStyles(re,xe,le);return he}(J,D,Xt),H=b,W=Fe.$as||I.$as||Fe.as||I.as||ee,ge=Ha(W),N=Fe!==I?Rn({},I,{},Fe):I,O={};for(var L in N)L[0]!=="$"&&L!=="as"&&(L==="forwardedAs"?O.as=N[L]:(Ne?Ne(L,mv,W):!ge||mv(L))&&(O[L]=N[L]));return I.style&&Fe.style!==I.style&&(O.style=Rn({},I.style,{},Fe.style)),O.className=Array.prototype.concat(Pe,me,A!==me?A:null,I.className,Fe.className).filter(Boolean).join(" "),O.ref=H,x.exports.createElement(W,O)}(g,f,y,_)};return p.displayName=c,(g=Dn.forwardRef(p)).attrs=d,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=m,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):su,g.styledComponentId=h,g.target=r?t.target:t,g.withComponent=function(f){var y=e.componentId,S=function(b,D){if(b==null)return{};var P,J,B={},Pe=Object.keys(b);for(J=0;J<Pe.length;J++)P=Pe[J],D.indexOf(P)>=0||(B[P]=b[P]);return B}(e,["componentId"]),I=y&&y+"-"+(Ha(f)?f:kh(Ev(f)));return S_(f,Rn({},S,{attrs:d,componentId:I}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?w_({},t.defaultProps,f):f}}),g.toString=function(){return"."+g.styledComponentId},i&&HO(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var af=function(t){return function e(n,r,i){if(i===void 0&&(i=yr),!gm.exports.isValidElementType(r))return ga(1,String(r));var s=function(){return n(r,i,wL.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Rn({},i,{},o))},s.attrs=function(o){return e(n,r,Rn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(S_,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){af[t]=af(t)});const fi=af,__="/SilvinaSilberman/assets/logo.cc159ce2.png",CL=fi.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: max-content;
    padding: 10px 20px;

    background-color: transparent;
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
                        font-weight: 500;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                    }

                    & a {
                        width: max-content;

                        transition: all .6s;

                        color: black;
                        font-size: 16px;
                        font-weight: 400;
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
                    font-weight: 400;
                    text-decoration: none;
                }
                
                &:hover a { 
                    color: var(--colorHover);
                }
            }
        }

        & .burger__menu {            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            cursor: pointer;

            & span {
                width: 32px;
                height: 1px;
                margin: 4px 0;

                background-color: black;
            }

            @media only screen and (min-width: 1024px) {
                display: none;
            }
        }
    }

    &.add__scroll__effect:not(.open__menu) {
        background-color: white;

        & nav {
            & ul {
                & li {
                    & a {
                        color: black;
                    }
                }
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

                & span {
                    width: 28px;
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
                        font-weight: 400;
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 60px 100px;

        &.add__scroll__effect {
            padding: 20px 100px;
        }
    }
`;function Cm(){const{user:t}=x.exports.useContext(Bn);x.exports.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>=300||window.scrollY?document.querySelector("header").classList.add("add__scroll__effect"):document.querySelector("header").classList.remove("add__scroll__effect")})},[window.scrollY]);const e=()=>{document.querySelector("header").classList.toggle("open__menu")},n=()=>{document.querySelectorAll("ul li").forEach(()=>{document.querySelector("header").classList.remove("open__menu")})};return w(CL,{children:U("nav",{children:[w(fn,{to:"/",children:w("img",{src:__,alt:"Silvina Silberman"})}),U("ul",{children:[w("li",{onClick:n,children:w(fn,{to:"/",children:"Inicio"})}),w("li",{onClick:n,children:w(fn,{to:"/about",children:"Sobre mi"})}),w("li",{onClick:n,children:w(fn,{to:"/awards",children:"Premios"})}),w("li",{onClick:n,children:w(fn,{to:"/contact",children:"Contacto"})}),w("li",{onClick:n,children:w(fn,{to:t?"/admin":"/login",children:"Acceso"})}),U("div",{className:"data__header__mobile",children:[U("div",{children:[w("h5",{children:"Email"}),w("a",{href:"mailto:silvinasilberman@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"silvinasilberman@gmail.com"})]}),U("div",{children:[w("h5",{children:"Empezar proyecto"}),w(fn,{to:"/contact",children:"Contactame"})]})]})]}),U("div",{className:"burger__menu",onClick:e,children:[w("span",{}),w("span",{})]})]})})}var I_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cv=Dn.createContext&&Dn.createContext(I_),vr=globalThis&&globalThis.__assign||function(){return vr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},vr.apply(this,arguments)},xL=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function k_(t){return t&&t.map(function(e,n){return Dn.createElement(e.tag,vr({key:n},e.attr),k_(e.child))})}function Cc(t){return function(e){return w(AL,{...vr({attr:vr({},t.attr)},e),children:k_(t.child)})}}function AL(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=xL(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),U("svg",{...vr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:vr(vr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&w("title",{children:s}),t.children]})};return Cv!==void 0?w(Cv.Consumer,{children:function(n){return e(n)}}):e(I_)}function RL(t){return Cc({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(t)}function NL(t){return Cc({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(t)}function bL(t){return Cc({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}}]})(t)}function DL(t){return Cc({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z",fill:"currentColor"}},{tag:"path",attr:{d:"M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z",fill:"currentColor"}}]})(t)}const PL=fi.footer`
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
    font-weight: 400;
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
`;function xm(){return U(PL,{children:[w("img",{onClick:()=>{window.scroll({top:0,left:0,behavior:"smooth"})},src:__,alt:"Silvina Silberman"}),U("h4",{children:["\xA9 2022 Silvina Silberman / ",U("span",{children:["Develop by ",w("a",{href:"https://www.linkedin.com/in/nicokatz/",target:"_blank",rel:"noopener noreferrer",children:"Nicolas Katz"})]})]}),U("div",{children:[w("a",{href:"https://www.instagram.com/silvisilberarte/",target:"_blank",rel:"noopener noreferrer",children:w(bL,{})}),w("a",{href:"https://www.facebook.com/silvina.silber",target:"_blank",rel:"noopener noreferrer",children:w(RL,{})})]})]})}const OL=fi.div`
    width: 100%;
    height: max-content;
    margin-top: 60px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    
    & h1 {
        color: black;
        font-size: 28px;
        line-height: 38px;
        font-weight: 400;
    }

    & button {
        width: max-content;
        height: 54px;
        margin-top: 20px;
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

    & h2 {
        margin-top: 40px;

        color: black;
        font-size: 24px;
        line-height: 34px;
        font-weight: 400;
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
            width: 100%;
            height: 54px;
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
        justify-content: space-between;

        background-color: ghostwhite;

        & div {
            position: relative;

            width: 100%;
            height: max-content;
            margin: 10px 0;

            display: flex;
            flex-direction: column;

            & span {
                position: absolute;
                top: 10px;
                right: 10px;
                z-index: 1;

                width: 32px;
                height: 32px;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: #d1000070;
                border-radius: 50%;
                box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.4);
                cursor: pointer;

                & svg {
                    color: #b81e1ee0;
                    font-size: 20px;
                }
            }

            & img {
                width: 100%;
                height: 280px;

                object-fit: cover;

                border-radius: 1px;
            }

            & h4 {
                margin-top: 10px;

                color: black;
                font-size: 18px;
                line-height: 28px;
                font-weight: 400;
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
    }

    @media only screen and (min-width: 1200px) {
        margin-top: 100px;
        padding: 40px 100px;

        & form {
            padding: 60px;
        }
    }
`;function LL(){const{logout:t,products:e,createProduct:n,updateProduct:r,deleteProduct:i}=x.exports.useContext(Bn),s=qo(),[o,a]=x.exports.useState([]);x.exports.useEffect(()=>{setTimeout(()=>{a(e)},2e3)},[]);const[l,u]=x.exports.useState(""),[c,h]=x.exports.useState(""),[d,m]=x.exports.useState(""),[g,v]=x.exports.useState(!1),[_,p]=x.exports.useState(""),[f,y]=x.exports.useState(""),[S,I]=x.exports.useState(null),[b,D]=x.exports.useState(null),P=async()=>{try{await t(),console.log("Se ha cerrado sesi\xF3n correctamente."),s("/")}catch(ee){console.error(ee.message)}},J=ee=>{const Xt=ee.target.files[0],Fe=new FileReader;Fe.onloadend=function(){D(Fe.result.toString())},Fe.readAsDataURL(Xt)},B=async ee=>{ee.preventDefault(),await n({title:l,description:c,category:d,award:g,duration:_,price:f,status:S,primaryImage:b}),u(""),h(""),m(""),y(""),v(!1),p(""),I(null),D(null),window.scroll({top:0,left:0,behavior:"smooth"})},Pe=async ee=>{await i(ee),window.scroll({top:0,left:0,behavior:"smooth"})},Ne=()=>{setTimeout(()=>{a(e)},1500)},me=ee=>{switch(ee.preventDefault(),ee.target.id){case"title":u(ee.target.value);break;case"description":h(ee.target.value);break;case"category":m(ee.target.value);break;case"award":v(ee.target.checked);break;case"duration":p(ee.target.value);break;case"price":y(ee.target.value);break;case"status":I(ee.target.value);break}};return U("div",{children:[w(Cm,{}),U(OL,{children:[w("h1",{children:"Cuenta de administrador"}),w("h2",{children:"Publicar nuevo retrato"}),U("form",{onSubmit:B,children:[U("div",{className:"input__container",children:[w("label",{htmlFor:"title",children:"Titulo"}),w("input",{onChange:me,type:"text",name:"title",id:"title",minLength:"3",maxLength:"20",value:l,required:!0})]}),U("div",{className:"input__container",children:[w("label",{htmlFor:"description",children:"Descripci\xF3n"}),w("input",{onChange:me,type:"text",name:"description",id:"description",minLength:"8",maxLength:"200",value:c,required:!0})]}),U("div",{className:"input__container",children:[w("label",{htmlFor:"category",children:"Categor\xEDa"}),w("input",{onChange:me,type:"text",name:"category",id:"category",minLength:"3",maxLength:"20",value:d,required:!0})]}),U("div",{className:"input__container",children:[w("label",{htmlFor:"price",children:"Precio (en d\xF3lares)"}),w("input",{onChange:me,type:"number",name:"price",id:"price",min:"1",max:"1000",value:f,required:!0})]}),U("div",{className:"input__container",children:[w("label",{htmlFor:"duration",children:"Duraci\xF3n (en d\xEDas)"}),w("input",{onChange:me,type:"number",name:"duration",id:"duration",min:"1",max:"365",value:_,required:!0})]}),U("div",{className:"input__container",children:[w("label",{htmlFor:"status",children:"Estado"}),U("div",{children:[w("input",{type:"radio",onChange:me,name:"status",id:"status",value:"disponible",required:!0}),w("label",{htmlFor:"disponible",children:"Disponible"})]}),U("div",{children:[w("input",{type:"radio",onChange:me,name:"status",id:"status",value:"reservado",required:!0}),w("label",{htmlFor:"reservado",children:"Reservado"})]}),U("div",{children:[w("input",{type:"radio",onChange:me,name:"status",id:"status",value:"vendido",required:!0}),w("label",{htmlFor:"vendido",children:"Vendido"})]})]}),U("div",{className:"input__container",children:[w("label",{htmlFor:"award",children:"\xBFTiene Premio?"}),w("input",{onChange:me,type:"checkbox",name:"award",id:"award",value:g})]}),U("div",{className:"input__container",children:[w("label",{htmlFor:"primaryImage",children:"Imagen principal"}),w("input",{onChange:J,type:"file",name:"primaryImage",id:"primaryImage",required:!0})]}),w("button",{type:"submit",children:"Crear retrato"})]}),w("h2",{children:"Ver y eliminar retratos"}),w("button",{onClick:Ne,children:"Recargar datos"}),w("section",{children:o.length>0?o.map(ee=>U("div",{children:[w("span",{onClick:()=>Pe(ee.id),children:w(NL,{})}),w("img",{src:ee.primaryImage,alt:ee.title}),w("h4",{children:ee.title})]},ee.id)):w("h1",{children:"Cargando productos..."})}),w("button",{className:"logout",onClick:P,children:"Cerrar sesi\xF3n"})]}),w(xm,{})]})}const Fo={_origin:"https://api.emailjs.com"},$L=(t,e="https://api.emailjs.com")=>{Fo._userID=t,Fo._origin=e},T_=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class xv{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const C_=(t,e,n={})=>new Promise((r,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new xv(o);a.status===200||a.text==="OK"?r(a):i(a)}),s.addEventListener("error",({target:o})=>{i(new xv(o))}),s.open("POST",Fo._origin+t,!0),Object.keys(n).forEach(o=>{s.setRequestHeader(o,n[o])}),s.send(e)}),ML=(t,e,n,r)=>{const i=r||Fo._userID;T_(i,t,e);const s={lib_version:"3.10.0",user_id:i,service_id:t,template_id:e,template_params:n};return C_("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},FL=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},UL=(t,e,n,r)=>{const i=r||Fo._userID,s=FL(n);T_(i,t,e);const o=new FormData(s);return o.append("lib_version","3.10.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",i),C_("/api/v1.0/email/send-form",o)},jL={init:$L,send:ML,sendForm:UL},VL="service_e6bwg0p",zL="template_3z9pvpj",BL="hwH8wj1eN-3bQW7te",HL="/SilvinaSilberman/assets/foto__contacto.b4ee2ae8.jpg",WL=fi.section`
    width: 100%;
    height: max-content;
    margin-bottom: 60px;
    padding: 100px 20px;

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
                font-weight: 400;
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
                font-weight: 400;
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
        height: 360px;
        margin-top: 40px;

        & img {
            width: 100%;
            height: 100%;
            margin-bottom: 20px;

            object-fit: cover;

            border: none;
            border-radius: 1px;
        }

        & h4 {
            color: black;
            font-size: 18px;
            line-height: 28px;
            font-weight: 300;
        }
    }

    @media only screen and (min-width: 768px) {
        margin-bottom: 0;
        padding: 100px 20px 40px 20px;

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
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 160px 100px 40px 100px;

        & div:last-child {
            width: 40%;
        }
    }
`;function qL(){const t=x.exports.useRef();return U("div",{children:[w(Cm,{}),U(WL,{children:[U("div",{children:[U("div",{className:"form__information",children:[w("h1",{children:"Empezar proyecto"}),U("p",{children:["Contactame en el formulario de aqu\xED abajo para m\xE1s informaci\xF3n o v\xEDa email en ",w("a",{href:"mailto:silvinasilberman@gmail.com",children:"silvinasilberman@gmail.com"}),"."]}),U("p",{children:["Tenes un proyecto? Directamente rellena este ",w("a",{href:"",children:"formulario rapido"})," y pronto estar\xE9 en contacto con vos."]}),U("p",{children:["Tambi\xE9n podes conocer como trabajo ",w("a",{href:"/about",children:"aqu\xED"}),"."]})]}),U("form",{ref:t,onSubmit:n=>{n.preventDefault(),jL.sendForm(VL,zL,t.current,BL).then(()=>{document.querySelector("form button").classList.add("send__mail"),document.querySelector("form button").innerHTML="ENVIADO",setTimeout(()=>{location.reload()},2500)},r=>{console.log(r.text)})},children:[U("div",{className:"row",children:[w("label",{htmlFor:"name",children:"Nombre"}),w("input",{type:"text",name:"name",id:"name",minLength:"3",maxLength:"20",required:!0})]}),U("div",{className:"row",children:[w("label",{htmlFor:"email",children:"Email"}),w("input",{type:"email",name:"email",id:"email",minLength:"6",maxLength:"40",required:!0})]}),U("div",{children:[w("label",{htmlFor:"issue",children:"Asunto"}),w("input",{type:"text",name:"issue",id:"issue",minLength:"4",maxLength:"28",required:!0})]}),U("div",{children:[w("label",{htmlFor:"message",children:"Mensaje"}),w("textarea",{type:"text",name:"message",id:"message",minLength:"4",maxLength:"200",required:!0})]}),w("button",{type:"submit",children:"Enviar"})]})]}),U("div",{children:[w("img",{src:HL,alt:"Silvina Silberman"}),w("h4",{children:"Actualmente, me encuentro trabajando para CABA (Ciudad Autonoma de Buenos Aires, Argentina) y alrededores."})]})]}),w(xm,{})]})}function KL({product:t}){const{id:e,primaryImage:n,title:r}=t;return w(fn,{to:`/coleccion/${e}`,children:w("img",{src:n,alt:r})})}const GL=fi.section`
    width: 100%;
    height: max-content;
    margin: 40px 0;
    padding: 0 20px;

    display: flex;
    flex-direction: column;

    & div.filters {
        margin-top: 40px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

        & button {
            width: max-content;
            height: max-content;
            margin-right: 14px;
            margin-bottom: 14px;

            background-color: transparent;
            border: none;
            cursor: pointer;
            outline: none;
            transition: all .6s;

            color: black;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;

            &.active {
                color: var(--colorPrincipal);
            }
        }
    }

    & div.portfolio {
        width: 100%;
        height: 100px;
        margin-top: 20px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;

        & a {
            width: 100%;
            height: 360px;

            & img {
                width: 100%;
                height: 100%;

                object-fit: cover;

                border-radius: 1px;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        & div.filters {
            margin-top: 60px;

            justify-content: space-between;
        }

        & div.portfolio {
            & img {
                width: 32%;
                height: 240px;
                margin: 1% 0;
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

        & div.filters {
            margin-top: 140px;
        }

        & div.portfolio {
            & img {
                height: 360px;
            }
        }
    }
`;function QL(){const{products:t}=x.exports.useContext(Bn),[e,n]=x.exports.useState([]);x.exports.useEffect(()=>{setTimeout(()=>{n(t)},1500)},[]);const r=i=>{const s=i.target.name;switch(s){case"all":n(t),document.querySelectorAll("button").forEach(o=>o.classList.remove("active")),i.target.classList.add("active");break;case"birome":n(t.filter(o=>o.category===s)),document.querySelectorAll("button").forEach(o=>o.classList.remove("active")),i.target.classList.add("active");break;case"color":n(t.filter(o=>o.category===s)),document.querySelectorAll("button").forEach(o=>o.classList.remove("active")),i.target.classList.add("active");break}};return U(GL,{children:[U("div",{className:"filters",children:[w("button",{className:"active",name:"all",onClick:r,children:"Todos"}),w("button",{name:"birome",onClick:r,children:"Birome"}),w("button",{name:"color",onClick:r,children:"Color"}),w("button",{name:"black&white",onClick:r,children:"Black & White"}),w("button",{name:"famosos",onClick:r,children:"Famosos"}),w("button",{name:"clasicos",onClick:r,children:"Clasicos"})]}),w("div",{className:"portfolio",children:e.length>0?e.map(i=>w(KL,{product:i},i.id)):w("h1",{children:"Cargando productos..."})})]})}function YL(){return U("div",{children:[w(Cm,{}),w(QL,{}),w(xm,{})]})}const XL=fi.div`
    width: 100%;
    height: 100vh;
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
`;function JL(){const{loginAdminUser:t,resetPassword:e}=x.exports.useContext(Bn),n=qo(),[r,i]=x.exports.useState({email:"",password:""}),[s,o]=x.exports.useState(""),a=({target:{name:c,value:h}})=>{i({...r,[c]:h})};return U(XL,{children:[U("h6",{children:["Regresar al home ",w(fn,{to:"/",children:"aqu\xED"}),"."]}),w("h1",{children:"Acceso de administrador"}),U("form",{onSubmit:async c=>{c.preventDefault(),o("");try{await t(r.email,r.password),console.log("Login autorizado."),n("/admin")}catch(h){switch(console.log(h.message),h.message){case"Firebase: Error (auth/user-not-found).":o("Correo inexistente. Por favor revisa los campos.");break;case"Firebase: Error (auth/email-invalid).":o("Correo invalido. Por favor revisa los campos.");break;case"Firebase: Error (auth/wrong-password).":o("Contrase\xF1a erronea. Por favor revisa los campos.");break;default:o("Ocurrio un error. Por favor vuelve a intentarlo.");break}}},children:[w("input",{onChange:a,type:"email",name:"email",id:"email",minLength:"6",maxLength:"40",placeholder:"Ingresa tu correo electronico.",required:!0}),w("input",{onChange:a,type:"password",name:"password",id:"password",minLength:"6",maxLength:"40",placeholder:"Ingresa tu contrase\xF1a.",required:!0}),U("div",{children:[w("button",{type:"submit",children:"Iniciar sesi\xF3n"}),w("h4",{onClick:async()=>{if(!r.email)return o("Escribe tu correo en la casilla para resetear tu contrase\xF1a.");try{await e(r.email),o("Te enviamos un email a tu correo para que puedas resetear tu contrase\xF1a.")}catch{o("Ocurrio un error. No pudimos resetear tu contrase\xF1a. Vuelve a intentarlo.")}},children:"\xBFOlvidaste tu contrase\xF1a?"})]})]}),s&&U("div",{className:"error__message",children:[w("p",{children:s}),w(DL,{})]})]})}function ZL(){const[t,e]=x.exports.useState({}),{productId:n}=VT(),{products:r}=x.exports.useContext(Bn);return x.exports.useEffect(()=>{e(r.find(i=>i.id===n))},[r]),w("div",{children:w("div",{children:U("h1",{children:[t.title," (",t.description,")"]})})})}function e$({children:t}){const{user:e,loading:n}=x.exports.useContext(Bn),r=qo();return n?w("h1",{children:"Cargando..."}):e?w("div",{children:t}):r("/login")}function t$({children:t}){const{user:e,loading:n}=x.exports.useContext(Bn),r=qo();return n?w("h1",{children:"Cargando..."}):e?r("/admin"):w("div",{children:t})}const n$=fi.div`
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
        font-size: 18px;
        line-height: 28px;
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
        font-size: 18px;
        font-weight: 400;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`;function r$(){return U(n$,{children:[w("h1",{children:"404"}),w("h2",{children:"La pagina que estas buscando no existe."}),w(fn,{to:"/",children:"Volver al home"})]})}function i$(){const{createAdminUser:t,user:e}=x.exports.useContext(Bn);return x.exports.useEffect(()=>{(async()=>{try{if(!(e!=null&&e.email)||(e==null?void 0:e.email)!=pv)return await t(pv,TO)}catch(r){r.message=="Firebase: Error (auth/email-already-in-use)."&&console.error("Administrador ya registrado.")}})()},[]),U(YT,{children:[w(Dr,{path:"/",element:w(YL,{})}),w(Dr,{path:"/coleccion/:productId",element:w(ZL,{})}),w(Dr,{path:"/contact",element:w(qL,{})}),w(Dr,{path:"/login",element:w(t$,{children:w(JL,{})})}),w(Dr,{path:"/admin",element:w(e$,{children:w(LL,{})})}),w(Dr,{path:"/*",element:w(r$,{})})]})}xh.createRoot(document.getElementById("root")).render(w(Dn.StrictMode,{children:w(tC,{children:w(kO,{children:w(i$,{})})})}));
