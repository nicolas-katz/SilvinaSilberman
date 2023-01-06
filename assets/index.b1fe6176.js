function M_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function F_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var b={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),U_=Symbol.for("react.portal"),z_=Symbol.for("react.fragment"),V_=Symbol.for("react.strict_mode"),j_=Symbol.for("react.profiler"),B_=Symbol.for("react.provider"),H_=Symbol.for("react.context"),W_=Symbol.for("react.forward_ref"),q_=Symbol.for("react.suspense"),K_=Symbol.for("react.memo"),G_=Symbol.for("react.lazy"),$m=Symbol.iterator;function Q_(t){return t===null||typeof t!="object"?null:(t=$m&&t[$m]||t["@@iterator"],typeof t=="function"?t:null)}var $v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mv=Object.assign,Fv={};function os(t,e,n){this.props=t,this.context=e,this.refs=Fv,this.updater=n||$v}os.prototype.isReactComponent={};os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Uv(){}Uv.prototype=os.prototype;function ff(t,e,n){this.props=t,this.context=e,this.refs=Fv,this.updater=n||$v}var pf=ff.prototype=new Uv;pf.constructor=ff;Mv(pf,os.prototype);pf.isPureReactComponent=!0;var Mm=Array.isArray,zv=Object.prototype.hasOwnProperty,mf={current:null},Vv={key:!0,ref:!0,__self:!0,__source:!0};function jv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)zv.call(e,r)&&!Vv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ho,type:t,key:s,ref:o,props:i,_owner:mf.current}}function Y_(t,e){return{$$typeof:Ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ho}function X_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fm=/\/+/g;function $c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?X_(""+t.key):e.toString(36)}function Qa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ho:case U_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$c(o,0):r,Mm(i)?(n="",t!=null&&(n=t.replace(Fm,"$&/")+"/"),Qa(i,e,n,"",function(u){return u})):i!=null&&(gf(i)&&(i=Y_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+$c(s,a);o+=Qa(s,e,n,l,i)}else if(l=Q_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+$c(s,a++),o+=Qa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(t,e,n){if(t==null)return t;var r=[],i=0;return Qa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function J_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Et={current:null},Ya={transition:null},Z_={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:mf};ne.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!gf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=os;ne.Fragment=z_;ne.Profiler=j_;ne.PureComponent=ff;ne.StrictMode=V_;ne.Suspense=q_;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)zv.call(e,l)&&!Vv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ho,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:H_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:B_,_context:t},t.Consumer=t};ne.createElement=jv;ne.createFactory=function(t){var e=jv.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:W_,render:t}};ne.isValidElement=gf;ne.lazy=function(t){return{$$typeof:G_,_payload:{_status:-1,_result:t},_init:J_}};ne.memo=function(t,e){return{$$typeof:K_,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return Et.current.useCallback(t,e)};ne.useContext=function(t){return Et.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return Et.current.useDeferredValue(t)};ne.useEffect=function(t,e){return Et.current.useEffect(t,e)};ne.useId=function(){return Et.current.useId()};ne.useImperativeHandle=function(t,e,n){return Et.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return Et.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return Et.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return Et.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return Et.current.useReducer(t,e,n)};ne.useRef=function(t){return Et.current.useRef(t)};ne.useState=function(t){return Et.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return Et.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return Et.current.useTransition()};ne.version="18.2.0";(function(t){t.exports=ne})(b);const Ln=F_(b.exports),Dh=M_({__proto__:null,default:Ln},[b.exports]);var Ph={},Bv={exports:{}},Ut={},Hv={exports:{}},Wv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,H){var q=C.length;C.push(H);e:for(;0<q;){var ge=q-1>>>1,N=C[ge];if(0<i(N,H))C[ge]=H,C[q]=N,q=ge;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var H=C[0],q=C.pop();if(q!==H){C[0]=q;e:for(var ge=0,N=C.length,O=N>>>1;ge<O;){var L=2*(ge+1)-1,K=C[L],E=L+1,re=C[E];if(0>i(K,q))E<N&&0>i(re,K)?(C[ge]=re,C[E]=q,ge=E):(C[ge]=K,C[L]=q,ge=L);else if(E<N&&0>i(re,q))C[ge]=re,C[E]=q,ge=E;else break e}}return H}function i(C,H){var q=C.sortIndex-H.sortIndex;return q!==0?q:C.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,g=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(C){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=C)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function _(C){if(v=!1,y(C),!g)if(n(l)!==null)g=!0,Dt(I);else{var H=n(u);H!==null&&gt(_,H.startTime-C)}}function I(C,H){g=!1,v&&(v=!1,p(P),P=-1),m=!0;var q=d;try{for(y(H),h=n(l);h!==null&&(!(h.expirationTime>H)||C&&!Pe());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,d=h.priorityLevel;var N=ge(h.expirationTime<=H);H=t.unstable_now(),typeof N=="function"?h.callback=N:h===n(l)&&r(l),y(H)}else r(l);h=n(l)}if(h!==null)var O=!0;else{var L=n(u);L!==null&&gt(_,L.startTime-H),O=!1}return O}finally{h=null,d=q,m=!1}}var R=!1,D=null,P=-1,Z=5,B=-1;function Pe(){return!(t.unstable_now()-B<Z)}function me(){if(D!==null){var C=t.unstable_now();B=C;var H=!0;try{H=D(!0,C)}finally{H?W():(R=!1,D=null)}}else R=!1}var W;if(typeof f=="function")W=function(){f(me)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,je=_t.port2;_t.port1.onmessage=me,W=function(){je.postMessage(null)}}else W=function(){S(me,0)};function Dt(C){D=C,R||(R=!0,W())}function gt(C,H){P=S(function(){C(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,Dt(I))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var q=d;d=H;try{return C()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,H){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var q=d;d=C;try{return H()}finally{d=q}},t.unstable_scheduleCallback=function(C,H,q){var ge=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ge+q:ge):q=ge,C){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=q+N,C={id:c++,callback:H,priorityLevel:C,startTime:q,expirationTime:N,sortIndex:-1},q>ge?(C.sortIndex=q,e(u,C),n(l)===null&&C===n(u)&&(v?(p(P),P=-1):v=!0,gt(_,q-ge))):(C.sortIndex=N,e(l,C),g||m||(g=!0,Dt(I))),C},t.unstable_shouldYield=Pe,t.unstable_wrapCallback=function(C){var H=d;return function(){var q=d;d=H;try{return C.apply(this,arguments)}finally{d=q}}}})(Wv);(function(t){t.exports=Wv})(Hv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv=b.exports,Mt=Hv.exports;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kv=new Set,so={};function ai(t,e){Hi(t,e),Hi(t+"Capture",e)}function Hi(t,e){for(so[t]=e,t=0;t<e.length;t++)Kv.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oh=Object.prototype.hasOwnProperty,eI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Um={},zm={};function tI(t){return Oh.call(zm,t)?!0:Oh.call(Um,t)?!1:eI.test(t)?zm[t]=!0:(Um[t]=!0,!1)}function nI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rI(t,e,n,r){if(e===null||typeof e>"u"||nI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var yf=/[\-:]([a-z])/g;function vf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yf,vf);rt[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yf,vf);rt[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yf,vf);rt[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function wf(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rI(e,n,i,r)&&(n=null),r||i===null?tI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wn=qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ka=Symbol.for("react.element"),vi=Symbol.for("react.portal"),wi=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),Lh=Symbol.for("react.profiler"),Gv=Symbol.for("react.provider"),Qv=Symbol.for("react.context"),Sf=Symbol.for("react.forward_ref"),$h=Symbol.for("react.suspense"),Mh=Symbol.for("react.suspense_list"),_f=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),Yv=Symbol.for("react.offscreen"),Vm=Symbol.iterator;function Es(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Mc;function bs(t){if(Mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mc=e&&e[1]||""}return`
`+Mc+t}var Fc=!1;function Uc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bs(t):""}function iI(t){switch(t.tag){case 5:return bs(t.type);case 16:return bs("Lazy");case 13:return bs("Suspense");case 19:return bs("SuspenseList");case 0:case 2:case 15:return t=Uc(t.type,!1),t;case 11:return t=Uc(t.type.render,!1),t;case 1:return t=Uc(t.type,!0),t;default:return""}}function Fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wi:return"Fragment";case vi:return"Portal";case Lh:return"Profiler";case Ef:return"StrictMode";case $h:return"Suspense";case Mh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qv:return(t.displayName||"Context")+".Consumer";case Gv:return(t._context.displayName||"Context")+".Provider";case Sf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _f:return e=t.displayName||null,e!==null?e:Fh(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return Fh(t(e))}catch{}}return null}function sI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fh(e);case 8:return e===Ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oI(t){var e=Xv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ta(t){t._valueTracker||(t._valueTracker=oI(t))}function Jv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uh(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function jm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zv(t,e){e=e.checked,e!=null&&wf(t,"checked",e,!1)}function zh(t,e){Zv(t,e);var n=Sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vh(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vh(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ds=Array.isArray;function Oi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Ds(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function e0(t,e){var n=Sr(e.value),r=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,n0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aI=["Webkit","ms","Moz","O"];Object.keys(js).forEach(function(t){aI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),js[e]=js[t]})});function r0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||js.hasOwnProperty(t)&&js[t]?(""+e).trim():e+"px"}function i0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=r0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var lI=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hh(t,e){if(e){if(lI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Wh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qh=null;function If(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kh=null,Li=null,$i=null;function qm(t){if(t=Ko(t)){if(typeof Kh!="function")throw Error(T(280));var e=t.stateNode;e&&(e=gu(e),Kh(t.stateNode,t.type,e))}}function s0(t){Li?$i?$i.push(t):$i=[t]:Li=t}function o0(){if(Li){var t=Li,e=$i;if($i=Li=null,qm(t),e)for(t=0;t<e.length;t++)qm(e[t])}}function a0(t,e){return t(e)}function l0(){}var zc=!1;function u0(t,e,n){if(zc)return t(e,n);zc=!0;try{return a0(t,e,n)}finally{zc=!1,(Li!==null||$i!==null)&&(l0(),o0())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var r=gu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var Gh=!1;if($n)try{var Ss={};Object.defineProperty(Ss,"passive",{get:function(){Gh=!0}}),window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{Gh=!1}function uI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Bs=!1,yl=null,vl=!1,Qh=null,cI={onError:function(t){Bs=!0,yl=t}};function hI(t,e,n,r,i,s,o,a,l){Bs=!1,yl=null,uI.apply(cI,arguments)}function dI(t,e,n,r,i,s,o,a,l){if(hI.apply(this,arguments),Bs){if(Bs){var u=yl;Bs=!1,yl=null}else throw Error(T(198));vl||(vl=!0,Qh=u)}}function li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Km(t){if(li(t)!==t)throw Error(T(188))}function fI(t){var e=t.alternate;if(!e){if(e=li(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Km(i),t;if(s===r)return Km(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function h0(t){return t=fI(t),t!==null?d0(t):null}function d0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=d0(t);if(e!==null)return e;t=t.sibling}return null}var f0=Mt.unstable_scheduleCallback,Gm=Mt.unstable_cancelCallback,pI=Mt.unstable_shouldYield,mI=Mt.unstable_requestPaint,be=Mt.unstable_now,gI=Mt.unstable_getCurrentPriorityLevel,kf=Mt.unstable_ImmediatePriority,p0=Mt.unstable_UserBlockingPriority,wl=Mt.unstable_NormalPriority,yI=Mt.unstable_LowPriority,m0=Mt.unstable_IdlePriority,du=null,yn=null;function vI(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(du,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:SI,wI=Math.log,EI=Math.LN2;function SI(t){return t>>>=0,t===0?32:31-(wI(t)/EI|0)|0}var Ca=64,Aa=4194304;function Ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function El(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ps(a):(s&=o,s!==0&&(r=Ps(s)))}else o=n&~i,o!==0?r=Ps(o):s!==0&&(r=Ps(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function _I(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function II(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=_I(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g0(){var t=Ca;return Ca<<=1,(Ca&4194240)===0&&(Ca=64),t}function Vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function kI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function y0(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var v0,xf,w0,E0,S0,Xh=!1,Ra=[],ar=null,lr=null,ur=null,lo=new Map,uo=new Map,Jn=[],TI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qm(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function _s(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ko(e),e!==null&&xf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xI(t,e,n,r,i){switch(e){case"focusin":return ar=_s(ar,t,e,n,r,i),!0;case"dragenter":return lr=_s(lr,t,e,n,r,i),!0;case"mouseover":return ur=_s(ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return lo.set(s,_s(lo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,uo.set(s,_s(uo.get(s)||null,t,e,n,r,i)),!0}return!1}function _0(t){var e=Mr(t.target);if(e!==null){var n=li(e);if(n!==null){if(e=n.tag,e===13){if(e=c0(n),e!==null){t.blockedOn=e,S0(t.priority,function(){w0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qh=r,n.target.dispatchEvent(r),qh=null}else return e=Ko(n),e!==null&&xf(e),t.blockedOn=n,!1;e.shift()}return!0}function Ym(t,e,n){Xa(t)&&n.delete(e)}function CI(){Xh=!1,ar!==null&&Xa(ar)&&(ar=null),lr!==null&&Xa(lr)&&(lr=null),ur!==null&&Xa(ur)&&(ur=null),lo.forEach(Ym),uo.forEach(Ym)}function Is(t,e){t.blockedOn===e&&(t.blockedOn=null,Xh||(Xh=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,CI)))}function co(t){function e(i){return Is(i,t)}if(0<Ra.length){Is(Ra[0],t);for(var n=1;n<Ra.length;n++){var r=Ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ar!==null&&Is(ar,t),lr!==null&&Is(lr,t),ur!==null&&Is(ur,t),lo.forEach(e),uo.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)_0(n),n.blockedOn===null&&Jn.shift()}var Mi=Wn.ReactCurrentBatchConfig,Sl=!0;function AI(t,e,n,r){var i=de,s=Mi.transition;Mi.transition=null;try{de=1,Cf(t,e,n,r)}finally{de=i,Mi.transition=s}}function RI(t,e,n,r){var i=de,s=Mi.transition;Mi.transition=null;try{de=4,Cf(t,e,n,r)}finally{de=i,Mi.transition=s}}function Cf(t,e,n,r){if(Sl){var i=Jh(t,e,n,r);if(i===null)Xc(t,e,r,_l,n),Qm(t,r);else if(xI(i,t,e,n,r))r.stopPropagation();else if(Qm(t,r),e&4&&-1<TI.indexOf(t)){for(;i!==null;){var s=Ko(i);if(s!==null&&v0(s),s=Jh(t,e,n,r),s===null&&Xc(t,e,r,_l,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xc(t,e,r,null,n)}}var _l=null;function Jh(t,e,n,r){if(_l=null,t=If(r),t=Mr(t),t!==null)if(e=li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function I0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gI()){case kf:return 1;case p0:return 4;case wl:case yI:return 16;case m0:return 536870912;default:return 16}default:return 16}}var ir=null,Af=null,Ja=null;function k0(){if(Ja)return Ja;var t,e=Af,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ja=i.slice(t,1<r?1-r:void 0)}function Za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Na(){return!0}function Xm(){return!1}function zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Na:Xm,this.isPropagationStopped=Xm,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),e}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rf=zt(as),qo=xe({},as,{view:0,detail:0}),NI=zt(qo),jc,Bc,ks,fu=xe({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ks&&(ks&&t.type==="mousemove"?(jc=t.screenX-ks.screenX,Bc=t.screenY-ks.screenY):Bc=jc=0,ks=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Jm=zt(fu),bI=xe({},fu,{dataTransfer:0}),DI=zt(bI),PI=xe({},qo,{relatedTarget:0}),Hc=zt(PI),OI=xe({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),LI=zt(OI),$I=xe({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MI=zt($I),FI=xe({},as,{data:0}),Zm=zt(FI),UI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VI[t])?!!e[t]:!1}function Nf(){return jI}var BI=xe({},qo,{key:function(t){if(t.key){var e=UI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nf,charCode:function(t){return t.type==="keypress"?Za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),HI=zt(BI),WI=xe({},fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eg=zt(WI),qI=xe({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nf}),KI=zt(qI),GI=xe({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),QI=zt(GI),YI=xe({},fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XI=zt(YI),JI=[9,13,27,32],bf=$n&&"CompositionEvent"in window,Hs=null;$n&&"documentMode"in document&&(Hs=document.documentMode);var ZI=$n&&"TextEvent"in window&&!Hs,T0=$n&&(!bf||Hs&&8<Hs&&11>=Hs),tg=String.fromCharCode(32),ng=!1;function x0(t,e){switch(t){case"keyup":return JI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ei=!1;function ek(t,e){switch(t){case"compositionend":return C0(e);case"keypress":return e.which!==32?null:(ng=!0,tg);case"textInput":return t=e.data,t===tg&&ng?null:t;default:return null}}function tk(t,e){if(Ei)return t==="compositionend"||!bf&&x0(t,e)?(t=k0(),Ja=Af=ir=null,Ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return T0&&e.locale!=="ko"?null:e.data;default:return null}}var nk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nk[t.type]:e==="textarea"}function A0(t,e,n,r){s0(r),e=Il(e,"onChange"),0<e.length&&(n=new Rf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ws=null,ho=null;function rk(t){U0(t,0)}function pu(t){var e=Ii(t);if(Jv(e))return t}function ik(t,e){if(t==="change")return e}var R0=!1;if($n){var Wc;if($n){var qc="oninput"in document;if(!qc){var ig=document.createElement("div");ig.setAttribute("oninput","return;"),qc=typeof ig.oninput=="function"}Wc=qc}else Wc=!1;R0=Wc&&(!document.documentMode||9<document.documentMode)}function sg(){Ws&&(Ws.detachEvent("onpropertychange",N0),ho=Ws=null)}function N0(t){if(t.propertyName==="value"&&pu(ho)){var e=[];A0(e,ho,t,If(t)),u0(rk,e)}}function sk(t,e,n){t==="focusin"?(sg(),Ws=e,ho=n,Ws.attachEvent("onpropertychange",N0)):t==="focusout"&&sg()}function ok(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pu(ho)}function ak(t,e){if(t==="click")return pu(e)}function lk(t,e){if(t==="input"||t==="change")return pu(e)}function uk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:uk;function fo(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oh.call(e,i)||!un(t[i],e[i]))return!1}return!0}function og(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ag(t,e){var n=og(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=og(n)}}function b0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function D0(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function Df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ck(t){var e=D0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b0(n.ownerDocument.documentElement,n)){if(r!==null&&Df(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ag(n,s);var o=ag(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hk=$n&&"documentMode"in document&&11>=document.documentMode,Si=null,Zh=null,qs=null,ed=!1;function lg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ed||Si==null||Si!==gl(r)||(r=Si,"selectionStart"in r&&Df(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qs&&fo(qs,r)||(qs=r,r=Il(Zh,"onSelect"),0<r.length&&(e=new Rf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Si)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _i={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Kc={},P0={};$n&&(P0=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function mu(t){if(Kc[t])return Kc[t];if(!_i[t])return t;var e=_i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in P0)return Kc[t]=e[n];return t}var O0=mu("animationend"),L0=mu("animationiteration"),$0=mu("animationstart"),M0=mu("transitionend"),F0=new Map,ug="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){F0.set(t,e),ai(e,[t])}for(var Gc=0;Gc<ug.length;Gc++){var Qc=ug[Gc],dk=Qc.toLowerCase(),fk=Qc[0].toUpperCase()+Qc.slice(1);Cr(dk,"on"+fk)}Cr(O0,"onAnimationEnd");Cr(L0,"onAnimationIteration");Cr($0,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(M0,"onTransitionEnd");Hi("onMouseEnter",["mouseout","mouseover"]);Hi("onMouseLeave",["mouseout","mouseover"]);Hi("onPointerEnter",["pointerout","pointerover"]);Hi("onPointerLeave",["pointerout","pointerover"]);ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));function cg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dI(r,e,void 0,t),t.currentTarget=null}function U0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;cg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;cg(i,a,u),s=l}}}if(vl)throw t=Qh,vl=!1,Qh=null,t}function we(t,e){var n=e[sd];n===void 0&&(n=e[sd]=new Set);var r=t+"__bubble";n.has(r)||(z0(e,t,2,!1),n.add(r))}function Yc(t,e,n){var r=0;e&&(r|=4),z0(n,t,r,e)}var Da="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[Da]){t[Da]=!0,Kv.forEach(function(n){n!=="selectionchange"&&(pk.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Da]||(e[Da]=!0,Yc("selectionchange",!1,e))}}function z0(t,e,n,r){switch(I0(e)){case 1:var i=AI;break;case 4:i=RI;break;default:i=Cf}n=i.bind(null,e,n,t),i=void 0,!Gh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Xc(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Mr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}u0(function(){var u=s,c=If(n),h=[];e:{var d=F0.get(t);if(d!==void 0){var m=Rf,g=t;switch(t){case"keypress":if(Za(n)===0)break e;case"keydown":case"keyup":m=HI;break;case"focusin":g="focus",m=Hc;break;case"focusout":g="blur",m=Hc;break;case"beforeblur":case"afterblur":m=Hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=DI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=KI;break;case O0:case L0:case $0:m=LI;break;case M0:m=QI;break;case"scroll":m=NI;break;case"wheel":m=XI;break;case"copy":case"cut":case"paste":m=MI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=eg}var v=(e&4)!==0,S=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,y;f!==null;){y=f;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,p!==null&&(_=ao(f,p),_!=null&&v.push(mo(f,_,y)))),S)break;f=f.return}0<v.length&&(d=new m(d,g,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==qh&&(g=n.relatedTarget||n.fromElement)&&(Mr(g)||g[Mn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?Mr(g):null,g!==null&&(S=li(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(v=Jm,_="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=eg,_="onPointerLeave",p="onPointerEnter",f="pointer"),S=m==null?d:Ii(m),y=g==null?d:Ii(g),d=new v(_,f+"leave",m,n,c),d.target=S,d.relatedTarget=y,_=null,Mr(c)===u&&(v=new v(p,f+"enter",g,n,c),v.target=y,v.relatedTarget=S,_=v),S=_,m&&g)t:{for(v=m,p=g,f=0,y=v;y;y=gi(y))f++;for(y=0,_=p;_;_=gi(_))y++;for(;0<f-y;)v=gi(v),f--;for(;0<y-f;)p=gi(p),y--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=gi(v),p=gi(p)}v=null}else v=null;m!==null&&hg(h,d,m,v,!1),g!==null&&S!==null&&hg(h,S,g,v,!0)}}e:{if(d=u?Ii(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var I=ik;else if(rg(d))if(R0)I=lk;else{I=ok;var R=sk}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=ak);if(I&&(I=I(t,u))){A0(h,I,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Vh(d,"number",d.value)}switch(R=u?Ii(u):window,t){case"focusin":(rg(R)||R.contentEditable==="true")&&(Si=R,Zh=u,qs=null);break;case"focusout":qs=Zh=Si=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,lg(h,n,c);break;case"selectionchange":if(hk)break;case"keydown":case"keyup":lg(h,n,c)}var D;if(bf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ei?x0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(T0&&n.locale!=="ko"&&(Ei||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ei&&(D=k0()):(ir=c,Af="value"in ir?ir.value:ir.textContent,Ei=!0)),R=Il(u,P),0<R.length&&(P=new Zm(P,t,null,n,c),h.push({event:P,listeners:R}),D?P.data=D:(D=C0(n),D!==null&&(P.data=D)))),(D=ZI?ek(t,n):tk(t,n))&&(u=Il(u,"onBeforeInput"),0<u.length&&(c=new Zm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=D))}U0(h,e)})}function mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ao(t,n),s!=null&&r.unshift(mo(t,s,i)),s=ao(t,e),s!=null&&r.push(mo(t,s,i))),t=t.return}return r}function gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ao(n,s),l!=null&&o.unshift(mo(n,l,a))):i||(l=ao(n,s),l!=null&&o.push(mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mk=/\r\n?/g,gk=/\u0000|\uFFFD/g;function dg(t){return(typeof t=="string"?t:""+t).replace(mk,`
`).replace(gk,"")}function Pa(t,e,n){if(e=dg(e),dg(t)!==e&&n)throw Error(T(425))}function kl(){}var td=null,nd=null;function rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var id=typeof setTimeout=="function"?setTimeout:void 0,yk=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,vk=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(t){return fg.resolve(null).then(t).catch(wk)}:id;function wk(t){setTimeout(function(){throw t})}function Jc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),co(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);co(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),mn="__reactFiber$"+ls,go="__reactProps$"+ls,Mn="__reactContainer$"+ls,sd="__reactEvents$"+ls,Ek="__reactListeners$"+ls,Sk="__reactHandles$"+ls;function Mr(t){var e=t[mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mn]||n[mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pg(t);t!==null;){if(n=t[mn])return n;t=pg(t)}return e}t=n,n=t.parentNode}return null}function Ko(t){return t=t[mn]||t[Mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function gu(t){return t[go]||null}var od=[],ki=-1;function Ar(t){return{current:t}}function Ee(t){0>ki||(t.current=od[ki],od[ki]=null,ki--)}function ye(t,e){ki++,od[ki]=t.current,t.current=e}var _r={},ft=Ar(_r),At=Ar(!1),Qr=_r;function Wi(t,e){var n=t.type.contextTypes;if(!n)return _r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Rt(t){return t=t.childContextTypes,t!=null}function Tl(){Ee(At),Ee(ft)}function mg(t,e,n){if(ft.current!==_r)throw Error(T(168));ye(ft,e),ye(At,n)}function V0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,sI(t)||"Unknown",i));return xe({},n,r)}function xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Qr=ft.current,ye(ft,t),ye(At,At.current),!0}function gg(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=V0(t,e,Qr),r.__reactInternalMemoizedMergedChildContext=t,Ee(At),Ee(ft),ye(ft,t)):Ee(At),ye(At,n)}var Tn=null,yu=!1,Zc=!1;function j0(t){Tn===null?Tn=[t]:Tn.push(t)}function _k(t){yu=!0,j0(t)}function Rr(){if(!Zc&&Tn!==null){Zc=!0;var t=0,e=de;try{var n=Tn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tn=null,yu=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(t+1)),f0(kf,Rr),i}finally{de=e,Zc=!1}}return null}var Ti=[],xi=0,Cl=null,Al=0,jt=[],Bt=0,Yr=null,xn=1,Cn="";function Pr(t,e){Ti[xi++]=Al,Ti[xi++]=Cl,Cl=t,Al=e}function B0(t,e,n){jt[Bt++]=xn,jt[Bt++]=Cn,jt[Bt++]=Yr,Yr=t;var r=xn;t=Cn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-on(e)+i|n<<i|r,Cn=s+t}else xn=1<<s|n<<i|r,Cn=t}function Pf(t){t.return!==null&&(Pr(t,1),B0(t,1,0))}function Of(t){for(;t===Cl;)Cl=Ti[--xi],Ti[xi]=null,Al=Ti[--xi],Ti[xi]=null;for(;t===Yr;)Yr=jt[--Bt],jt[Bt]=null,Cn=jt[--Bt],jt[Bt]=null,xn=jt[--Bt],jt[Bt]=null}var Lt=null,Ot=null,Se=!1,rn=null;function H0(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Ot=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:xn,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Ot=null,!0):!1;default:return!1}}function ad(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ld(t){if(Se){var e=Ot;if(e){var n=e;if(!yg(t,e)){if(ad(t))throw Error(T(418));e=cr(n.nextSibling);var r=Lt;e&&yg(t,e)?H0(r,n):(t.flags=t.flags&-4097|2,Se=!1,Lt=t)}}else{if(ad(t))throw Error(T(418));t.flags=t.flags&-4097|2,Se=!1,Lt=t}}}function vg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function Oa(t){if(t!==Lt)return!1;if(!Se)return vg(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rd(t.type,t.memoizedProps)),e&&(e=Ot)){if(ad(t))throw W0(),Error(T(418));for(;e;)H0(t,e),e=cr(e.nextSibling)}if(vg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=Lt?cr(t.stateNode.nextSibling):null;return!0}function W0(){for(var t=Ot;t;)t=cr(t.nextSibling)}function qi(){Ot=Lt=null,Se=!1}function Lf(t){rn===null?rn=[t]:rn.push(t)}var Ik=Wn.ReactCurrentBatchConfig;function tn(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Rl=Ar(null),Nl=null,Ci=null,$f=null;function Mf(){$f=Ci=Nl=null}function Ff(t){var e=Rl.current;Ee(Rl),t._currentValue=e}function ud(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fi(t,e){Nl=t,$f=Ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(xt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if($f!==t)if(t={context:t,memoizedValue:e,next:null},Ci===null){if(Nl===null)throw Error(T(308));Ci=t,Nl.dependencies={lanes:0,firstContext:t}}else Ci=Ci.next=t;return e}var Fr=null;function Uf(t){Fr===null?Fr=[t]:Fr.push(t)}function q0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Uf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(se&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fn(t,n)}return i=r.interleaved,i===null?(e.next=e,Uf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fn(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tf(t,n)}}function wg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bl(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,m=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(m,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(m,h,d):g,d==null)break e;h=xe({},h,d);break e;case 2:Xn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=h}}function Eg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var G0=new qv.Component().refs;function cd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=fr(t),s=Dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(an(e,t,i,r),el(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=fr(t),s=Dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,i),e!==null&&(an(e,t,i,r),el(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=fr(t),i=Dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=hr(t,i,r),e!==null&&(an(e,t,r,n),el(e,t,r))}};function Sg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fo(n,r)||!fo(i,s):!0}function Q0(t,e,n){var r=!1,i=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=Rt(e)?Qr:ft.current,r=e.contextTypes,s=(r=r!=null)?Wi(t,i):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _g(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function hd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=G0,zf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=Rt(e)?Qr:ft.current,i.context=Wi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&vu.enqueueReplaceState(i,i.state,null),bl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===G0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function La(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ig(t){var e=t._init;return e(t._payload)}function Y0(t){function e(p,f){if(t){var y=p.deletions;y===null?(p.deletions=[f],p.flags|=16):y.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=pr(p,f),p.index=0,p.sibling=null,p}function s(p,f,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<f?(p.flags|=2,f):y):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,y,_){return f===null||f.tag!==6?(f=oh(y,p.mode,_),f.return=p,f):(f=i(f,y),f.return=p,f)}function l(p,f,y,_){var I=y.type;return I===wi?c(p,f,y.props.children,_,y.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Yn&&Ig(I)===f.type)?(_=i(f,y.props),_.ref=Ts(p,f,y),_.return=p,_):(_=ol(y.type,y.key,y.props,null,p.mode,_),_.ref=Ts(p,f,y),_.return=p,_)}function u(p,f,y,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=ah(y,p.mode,_),f.return=p,f):(f=i(f,y.children||[]),f.return=p,f)}function c(p,f,y,_,I){return f===null||f.tag!==7?(f=Wr(y,p.mode,_,I),f.return=p,f):(f=i(f,y),f.return=p,f)}function h(p,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=oh(""+f,p.mode,y),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ka:return y=ol(f.type,f.key,f.props,null,p.mode,y),y.ref=Ts(p,null,f),y.return=p,y;case vi:return f=ah(f,p.mode,y),f.return=p,f;case Yn:var _=f._init;return h(p,_(f._payload),y)}if(Ds(f)||Es(f))return f=Wr(f,p.mode,y,null),f.return=p,f;La(p,f)}return null}function d(p,f,y,_){var I=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(p,f,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ka:return y.key===I?l(p,f,y,_):null;case vi:return y.key===I?u(p,f,y,_):null;case Yn:return I=y._init,d(p,f,I(y._payload),_)}if(Ds(y)||Es(y))return I!==null?null:c(p,f,y,_,null);La(p,y)}return null}function m(p,f,y,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(y)||null,a(f,p,""+_,I);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ka:return p=p.get(_.key===null?y:_.key)||null,l(f,p,_,I);case vi:return p=p.get(_.key===null?y:_.key)||null,u(f,p,_,I);case Yn:var R=_._init;return m(p,f,y,R(_._payload),I)}if(Ds(_)||Es(_))return p=p.get(y)||null,c(f,p,_,I,null);La(f,_)}return null}function g(p,f,y,_){for(var I=null,R=null,D=f,P=f=0,Z=null;D!==null&&P<y.length;P++){D.index>P?(Z=D,D=null):Z=D.sibling;var B=d(p,D,y[P],_);if(B===null){D===null&&(D=Z);break}t&&D&&B.alternate===null&&e(p,D),f=s(B,f,P),R===null?I=B:R.sibling=B,R=B,D=Z}if(P===y.length)return n(p,D),Se&&Pr(p,P),I;if(D===null){for(;P<y.length;P++)D=h(p,y[P],_),D!==null&&(f=s(D,f,P),R===null?I=D:R.sibling=D,R=D);return Se&&Pr(p,P),I}for(D=r(p,D);P<y.length;P++)Z=m(D,p,P,y[P],_),Z!==null&&(t&&Z.alternate!==null&&D.delete(Z.key===null?P:Z.key),f=s(Z,f,P),R===null?I=Z:R.sibling=Z,R=Z);return t&&D.forEach(function(Pe){return e(p,Pe)}),Se&&Pr(p,P),I}function v(p,f,y,_){var I=Es(y);if(typeof I!="function")throw Error(T(150));if(y=I.call(y),y==null)throw Error(T(151));for(var R=I=null,D=f,P=f=0,Z=null,B=y.next();D!==null&&!B.done;P++,B=y.next()){D.index>P?(Z=D,D=null):Z=D.sibling;var Pe=d(p,D,B.value,_);if(Pe===null){D===null&&(D=Z);break}t&&D&&Pe.alternate===null&&e(p,D),f=s(Pe,f,P),R===null?I=Pe:R.sibling=Pe,R=Pe,D=Z}if(B.done)return n(p,D),Se&&Pr(p,P),I;if(D===null){for(;!B.done;P++,B=y.next())B=h(p,B.value,_),B!==null&&(f=s(B,f,P),R===null?I=B:R.sibling=B,R=B);return Se&&Pr(p,P),I}for(D=r(p,D);!B.done;P++,B=y.next())B=m(D,p,P,B.value,_),B!==null&&(t&&B.alternate!==null&&D.delete(B.key===null?P:B.key),f=s(B,f,P),R===null?I=B:R.sibling=B,R=B);return t&&D.forEach(function(me){return e(p,me)}),Se&&Pr(p,P),I}function S(p,f,y,_){if(typeof y=="object"&&y!==null&&y.type===wi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ka:e:{for(var I=y.key,R=f;R!==null;){if(R.key===I){if(I=y.type,I===wi){if(R.tag===7){n(p,R.sibling),f=i(R,y.props.children),f.return=p,p=f;break e}}else if(R.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Yn&&Ig(I)===R.type){n(p,R.sibling),f=i(R,y.props),f.ref=Ts(p,R,y),f.return=p,p=f;break e}n(p,R);break}else e(p,R);R=R.sibling}y.type===wi?(f=Wr(y.props.children,p.mode,_,y.key),f.return=p,p=f):(_=ol(y.type,y.key,y.props,null,p.mode,_),_.ref=Ts(p,f,y),_.return=p,p=_)}return o(p);case vi:e:{for(R=y.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(p,f.sibling),f=i(f,y.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ah(y,p.mode,_),f.return=p,p=f}return o(p);case Yn:return R=y._init,S(p,f,R(y._payload),_)}if(Ds(y))return g(p,f,y,_);if(Es(y))return v(p,f,y,_);La(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,y),f.return=p,p=f):(n(p,f),f=oh(y,p.mode,_),f.return=p,p=f),o(p)):n(p,f)}return S}var Ki=Y0(!0),X0=Y0(!1),Go={},vn=Ar(Go),yo=Ar(Go),vo=Ar(Go);function Ur(t){if(t===Go)throw Error(T(174));return t}function Vf(t,e){switch(ye(vo,e),ye(yo,t),ye(vn,Go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bh(e,t)}Ee(vn),ye(vn,e)}function Gi(){Ee(vn),Ee(yo),Ee(vo)}function J0(t){Ur(vo.current);var e=Ur(vn.current),n=Bh(e,t.type);e!==n&&(ye(yo,t),ye(vn,n))}function jf(t){yo.current===t&&(Ee(vn),Ee(yo))}var ke=Ar(0);function Dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eh=[];function Bf(){for(var t=0;t<eh.length;t++)eh[t]._workInProgressVersionPrimary=null;eh.length=0}var tl=Wn.ReactCurrentDispatcher,th=Wn.ReactCurrentBatchConfig,Xr=0,Te=null,Me=null,He=null,Pl=!1,Ks=!1,wo=0,kk=0;function ot(){throw Error(T(321))}function Hf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function Wf(t,e,n,r,i,s){if(Xr=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?Ak:Rk,t=n(r,i),Ks){s=0;do{if(Ks=!1,wo=0,25<=s)throw Error(T(301));s+=1,He=Me=null,e.updateQueue=null,tl.current=Nk,t=n(r,i)}while(Ks)}if(tl.current=Ol,e=Me!==null&&Me.next!==null,Xr=0,He=Me=Te=null,Pl=!1,e)throw Error(T(300));return t}function qf(){var t=wo!==0;return wo=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Te.memoizedState=He=t:He=He.next=t,He}function Xt(){if(Me===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=He===null?Te.memoizedState:He.next;if(e!==null)He=e,Me=t;else{if(t===null)throw Error(T(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},He===null?Te.memoizedState=He=t:He=He.next=t}return He}function Eo(t,e){return typeof e=="function"?e(t):e}function nh(t){var e=Xt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Xr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Te.lanes|=c,Jr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,un(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,Jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rh(t){var e=Xt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Z0(){}function e1(t,e){var n=Te,r=Xt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,Kf(r1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,So(9,n1.bind(null,n,r,i,e),void 0,null),We===null)throw Error(T(349));(Xr&30)!==0||t1(n,e,i)}return i}function t1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function n1(t,e,n,r){e.value=n,e.getSnapshot=r,i1(e)&&s1(t)}function r1(t,e,n){return n(function(){i1(e)&&s1(t)})}function i1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function s1(t){var e=Fn(t,1);e!==null&&an(e,t,1,-1)}function kg(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},e.queue=t,t=t.dispatch=Ck.bind(null,Te,t),[e.memoizedState,t]}function So(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function o1(){return Xt().memoizedState}function nl(t,e,n,r){var i=pn();Te.flags|=t,i.memoizedState=So(1|e,n,void 0,r===void 0?null:r)}function wu(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&Hf(r,o.deps)){i.memoizedState=So(e,n,s,r);return}}Te.flags|=t,i.memoizedState=So(1|e,n,s,r)}function Tg(t,e){return nl(8390656,8,t,e)}function Kf(t,e){return wu(2048,8,t,e)}function a1(t,e){return wu(4,2,t,e)}function l1(t,e){return wu(4,4,t,e)}function u1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c1(t,e,n){return n=n!=null?n.concat([t]):null,wu(4,4,u1.bind(null,e,t),n)}function Gf(){}function h1(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function d1(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function f1(t,e,n){return(Xr&21)===0?(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n):(un(n,e)||(n=g0(),Te.lanes|=n,Jr|=n,t.baseState=!0),e)}function Tk(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=th.transition;th.transition={};try{t(!1),e()}finally{de=n,th.transition=r}}function p1(){return Xt().memoizedState}function xk(t,e,n){var r=fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},m1(t))g1(e,n);else if(n=q0(t,e,n,r),n!==null){var i=wt();an(n,t,r,i),y1(n,e,r)}}function Ck(t,e,n){var r=fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(m1(t))g1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,un(a,o)){var l=e.interleaved;l===null?(i.next=i,Uf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=q0(t,e,i,r),n!==null&&(i=wt(),an(n,t,r,i),y1(n,e,r))}}function m1(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function g1(t,e){Ks=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y1(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tf(t,n)}}var Ol={readContext:Yt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},Ak={readContext:Yt,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:Tg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,u1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xk.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:kg,useDebugValue:Gf,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=kg(!1),e=t[0];return t=Tk.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=pn();if(Se){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),We===null)throw Error(T(349));(Xr&30)!==0||t1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Tg(r1.bind(null,r,s,t),[t]),r.flags|=2048,So(9,n1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=We.identifierPrefix;if(Se){var n=Cn,r=xn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Rk={readContext:Yt,useCallback:h1,useContext:Yt,useEffect:Kf,useImperativeHandle:c1,useInsertionEffect:a1,useLayoutEffect:l1,useMemo:d1,useReducer:nh,useRef:o1,useState:function(){return nh(Eo)},useDebugValue:Gf,useDeferredValue:function(t){var e=Xt();return f1(e,Me.memoizedState,t)},useTransition:function(){var t=nh(Eo)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:Z0,useSyncExternalStore:e1,useId:p1,unstable_isNewReconciler:!1},Nk={readContext:Yt,useCallback:h1,useContext:Yt,useEffect:Kf,useImperativeHandle:c1,useInsertionEffect:a1,useLayoutEffect:l1,useMemo:d1,useReducer:rh,useRef:o1,useState:function(){return rh(Eo)},useDebugValue:Gf,useDeferredValue:function(t){var e=Xt();return Me===null?e.memoizedState=t:f1(e,Me.memoizedState,t)},useTransition:function(){var t=rh(Eo)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:Z0,useSyncExternalStore:e1,useId:p1,unstable_isNewReconciler:!1};function Qi(t,e){try{var n="",r=e;do n+=iI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ih(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bk=typeof WeakMap=="function"?WeakMap:Map;function v1(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$l||($l=!0,_d=r),dd(t,e)},n}function w1(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){dd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dd(t,e),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Wk.bind(null,t,e,n),e.then(t,t))}function Cg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ag(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Dk=Wn.ReactCurrentOwner,xt=!1;function yt(t,e,n,r){e.child=t===null?X0(e,null,n,r):Ki(e,t.child,n,r)}function Rg(t,e,n,r,i){n=n.render;var s=e.ref;return Fi(e,i),r=Wf(t,e,n,r,s,i),n=qf(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(Se&&n&&Pf(e),e.flags|=1,yt(t,e,r,i),e.child)}function Ng(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!np(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,E1(t,e,s,r,i)):(t=ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(o,r)&&t.ref===e.ref)return Un(t,e,i)}return e.flags|=1,t=pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function E1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fo(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(xt=!0);else return e.lanes=t.lanes,Un(t,e,i)}return fd(t,e,n,r,i)}function S1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Ri,Pt),Pt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Ri,Pt),Pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(Ri,Pt),Pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(Ri,Pt),Pt|=r;return yt(t,e,i,n),e.child}function _1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fd(t,e,n,r,i){var s=Rt(n)?Qr:ft.current;return s=Wi(e,s),Fi(e,i),n=Wf(t,e,n,r,s,i),r=qf(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(Se&&r&&Pf(e),e.flags|=1,yt(t,e,n,i),e.child)}function bg(t,e,n,r,i){if(Rt(n)){var s=!0;xl(e)}else s=!1;if(Fi(e,i),e.stateNode===null)rl(t,e),Q0(e,n,r),hd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=Rt(n)?Qr:ft.current,u=Wi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&_g(e,o,r,u),Xn=!1;var d=e.memoizedState;o.state=d,bl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||At.current||Xn?(typeof c=="function"&&(cd(e,n,c,r),l=e.memoizedState),(a=Xn||Sg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,K0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:tn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yt(l):(l=Rt(n)?Qr:ft.current,l=Wi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&_g(e,o,r,l),Xn=!1,d=e.memoizedState,o.state=d,bl(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||At.current||Xn?(typeof m=="function"&&(cd(e,n,m,r),g=e.memoizedState),(u=Xn||Sg(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return pd(t,e,n,r,s,i)}function pd(t,e,n,r,i,s){_1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gg(e,n,!1),Un(t,e,s);r=e.stateNode,Dk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ki(e,t.child,null,s),e.child=Ki(e,null,a,s)):yt(t,e,a,s),e.memoizedState=r.state,i&&gg(e,n,!0),e.child}function I1(t){var e=t.stateNode;e.pendingContext?mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mg(t,e.context,!1),Vf(t,e.containerInfo)}function Dg(t,e,n,r,i){return qi(),Lf(i),e.flags|=256,yt(t,e,n,r),e.child}var md={dehydrated:null,treeContext:null,retryLane:0};function gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function k1(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(ke,i&1),t===null)return ld(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_u(o,r,0,null),t=Wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gd(n),e.memoizedState=md,t):Qf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Pk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=pr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=pr(a,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?gd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=md,r}return s=t.child,t=s.sibling,r=pr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qf(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $a(t,e,n,r){return r!==null&&Lf(r),Ki(e,t.child,null,n),t=Qf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Pk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ih(Error(T(422))),$a(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_u({mode:"visible",children:r.children},i,0,null),s=Wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Ki(e,t.child,null,o),e.child.memoizedState=gd(o),e.memoizedState=md,s);if((e.mode&1)===0)return $a(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=ih(s,r,void 0),$a(t,e,o,r)}if(a=(o&t.childLanes)!==0,xt||a){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fn(t,i),an(r,t,i,-1))}return tp(),r=ih(Error(T(421))),$a(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=cr(i.nextSibling),Lt=e,Se=!0,rn=null,t!==null&&(jt[Bt++]=xn,jt[Bt++]=Cn,jt[Bt++]=Yr,xn=t.id,Cn=t.overflow,Yr=e),e=Qf(e,r.children),e.flags|=4096,e)}function Pg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ud(t.return,e,n)}function sh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function T1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=ke.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pg(t,n,e);else if(t.tag===19)Pg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(ke,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),sh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}sh(e,!0,n,null,s);break;case"together":sh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ok(t,e,n){switch(e.tag){case 3:I1(e),qi();break;case 5:J0(e);break;case 1:Rt(e.type)&&xl(e);break;case 4:Vf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Rl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(ke,ke.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?k1(t,e,n):(ye(ke,ke.current&1),t=Un(t,e,n),t!==null?t.sibling:null);ye(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return T1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,S1(t,e,n)}return Un(t,e,n)}var x1,yd,C1,A1;x1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};C1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ur(vn.current);var s=null;switch(n){case"input":i=Uh(t,i),r=Uh(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=jh(t,i),r=jh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=kl)}Hh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(so.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(so.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&we("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};A1=function(t,e,n,r){n!==r&&(e.flags|=4)};function xs(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lk(t,e,n){var r=e.pendingProps;switch(Of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return Rt(e.type)&&Tl(),at(e),null;case 3:return r=e.stateNode,Gi(),Ee(At),Ee(ft),Bf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,rn!==null&&(Td(rn),rn=null))),yd(t,e),at(e),null;case 5:jf(e);var i=Ur(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)C1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return at(e),null}if(t=Ur(vn.current),Oa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mn]=e,r[go]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Os.length;i++)we(Os[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":jm(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Hm(r,s),we("invalid",r)}Hh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pa(r.textContent,a,t),i=["children",""+a]):so.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Ta(r),Bm(r,s,!0);break;case"textarea":Ta(r),Wm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=kl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mn]=e,t[go]=r,x1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wh(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<Os.length;i++)we(Os[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":jm(t,r),i=Uh(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),we("invalid",t);break;case"textarea":Hm(t,r),i=jh(t,r),we("invalid",t);break;default:i=r}Hh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?i0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oo(t,l):typeof l=="number"&&oo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(so.hasOwnProperty(s)?l!=null&&s==="onScroll"&&we("scroll",t):l!=null&&wf(t,s,l,o))}switch(n){case"input":Ta(t),Bm(t,r,!1);break;case"textarea":Ta(t),Wm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Oi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Oi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)A1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=Ur(vo.current),Ur(vn.current),Oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[mn]=e,(s=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:Pa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=e,e.stateNode=r}return at(e),null;case 13:if(Ee(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Ot!==null&&(e.mode&1)!==0&&(e.flags&128)===0)W0(),qi(),e.flags|=98560,s=!1;else if(s=Oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[mn]=e}else qi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else rn!==null&&(Td(rn),rn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ke.current&1)!==0?Fe===0&&(Fe=3):tp())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return Gi(),yd(t,e),t===null&&po(e.stateNode.containerInfo),at(e),null;case 10:return Ff(e.type._context),at(e),null;case 17:return Rt(e.type)&&Tl(),at(e),null;case 19:if(Ee(ke),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xs(s,!1);else{if(Fe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Dl(t),o!==null){for(e.flags|=128,xs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>Yi&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return at(e),null}else 2*be()-s.renderingStartTime>Yi&&n!==1073741824&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=ke.current,ye(ke,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return ep(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Pt&1073741824)!==0&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function $k(t,e){switch(Of(e),e.tag){case 1:return Rt(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gi(),Ee(At),Ee(ft),Bf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return jf(e),null;case 13:if(Ee(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(ke),null;case 4:return Gi(),null;case 10:return Ff(e.type._context),null;case 22:case 23:return ep(),null;case 24:return null;default:return null}}var Ma=!1,ut=!1,Mk=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function vd(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Og=!1;function Fk(t,e){if(td=Sl,t=D0(),Df(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:t,selectionRange:n},Sl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,S=g.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:tn(e.type,v),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(_){Ae(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return g=Og,Og=!1,g}function Gs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vd(e,n,s)}i=i.next}while(i!==r)}}function Eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function R1(t){var e=t.alternate;e!==null&&(t.alternate=null,R1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mn],delete e[go],delete e[sd],delete e[Ek],delete e[Sk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N1(t){return t.tag===5||t.tag===3||t.tag===4}function Lg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(r!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function Sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}var Je=null,nn=!1;function Gn(t,e,n){for(n=n.child;n!==null;)b1(t,e,n),n=n.sibling}function b1(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(du,n)}catch{}switch(n.tag){case 5:ut||Ai(n,e);case 6:var r=Je,i=nn;Je=null,Gn(t,e,n),Je=r,nn=i,Je!==null&&(nn?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(nn?(t=Je,n=n.stateNode,t.nodeType===8?Jc(t.parentNode,n):t.nodeType===1&&Jc(t,n),co(t)):Jc(Je,n.stateNode));break;case 4:r=Je,i=nn,Je=n.stateNode.containerInfo,nn=!0,Gn(t,e,n),Je=r,nn=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&vd(n,e,o),i=i.next}while(i!==r)}Gn(t,e,n);break;case 1:if(!ut&&(Ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ae(n,e,a)}Gn(t,e,n);break;case 21:Gn(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,Gn(t,e,n),ut=r):Gn(t,e,n);break;default:Gn(t,e,n)}}function $g(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Mk),e.forEach(function(r){var i=Kk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Je=a.stateNode,nn=!1;break e;case 3:Je=a.stateNode.containerInfo,nn=!0;break e;case 4:Je=a.stateNode.containerInfo,nn=!0;break e}a=a.return}if(Je===null)throw Error(T(160));b1(s,o,i),Je=null,nn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)D1(e,t),e=e.sibling}function D1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),fn(t),r&4){try{Gs(3,t,t.return),Eu(3,t)}catch(v){Ae(t,t.return,v)}try{Gs(5,t,t.return)}catch(v){Ae(t,t.return,v)}}break;case 1:en(e,t),fn(t),r&512&&n!==null&&Ai(n,n.return);break;case 5:if(en(e,t),fn(t),r&512&&n!==null&&Ai(n,n.return),t.flags&32){var i=t.stateNode;try{oo(i,"")}catch(v){Ae(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zv(i,s),Wh(a,o);var u=Wh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?i0(i,h):c==="dangerouslySetInnerHTML"?n0(i,h):c==="children"?oo(i,h):wf(i,c,h,u)}switch(a){case"input":zh(i,s);break;case"textarea":e0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Oi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Oi(i,!!s.multiple,s.defaultValue,!0):Oi(i,!!s.multiple,s.multiple?[]:"",!1))}i[go]=s}catch(v){Ae(t,t.return,v)}}break;case 6:if(en(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ae(t,t.return,v)}}break;case 3:if(en(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(v){Ae(t,t.return,v)}break;case 4:en(e,t),fn(t);break;case 13:en(e,t),fn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Jf=be())),r&4&&$g(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(u=ut)||c,en(e,t),ut=u):en(e,t),fn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for($=t,c=t.child;c!==null;){for(h=$=c;$!==null;){switch(d=$,m=d.child,d.tag){case 0:case 11:case 14:case 15:Gs(4,d,d.return);break;case 1:Ai(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Ae(r,n,v)}}break;case 5:Ai(d,d.return);break;case 22:if(d.memoizedState!==null){Fg(h);continue}}m!==null?(m.return=d,$=m):Fg(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=r0("display",o))}catch(v){Ae(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Ae(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:en(e,t),fn(t),r&4&&$g(t);break;case 21:break;default:en(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N1(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oo(i,""),r.flags&=-33);var s=Lg(t);Sd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lg(t);Ed(t,a,o);break;default:throw Error(T(161))}}catch(l){Ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Uk(t,e,n){$=t,P1(t)}function P1(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ma;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ut;a=Ma;var u=ut;if(Ma=o,(ut=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?Ug(i):l!==null?(l.return=o,$=l):Ug(i);for(;s!==null;)$=s,P1(s),s=s.sibling;$=i,Ma=a,ut=u}Mg(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,$=s):Mg(t)}}function Mg(t){for(;$!==null;){var e=$;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:ut||Eu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Eg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Eg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&co(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}ut||e.flags&512&&wd(e)}catch(d){Ae(e,e.return,d)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Fg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Ug(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eu(4,e)}catch(l){Ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ae(e,i,l)}}var s=e.return;try{wd(e)}catch(l){Ae(e,s,l)}break;case 5:var o=e.return;try{wd(e)}catch(l){Ae(e,o,l)}}}catch(l){Ae(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var zk=Math.ceil,Ll=Wn.ReactCurrentDispatcher,Yf=Wn.ReactCurrentOwner,Wt=Wn.ReactCurrentBatchConfig,se=0,We=null,$e=null,tt=0,Pt=0,Ri=Ar(0),Fe=0,_o=null,Jr=0,Su=0,Xf=0,Qs=null,kt=null,Jf=0,Yi=1/0,kn=null,$l=!1,_d=null,dr=null,Fa=!1,sr=null,Ml=0,Ys=0,Id=null,il=-1,sl=0;function wt(){return(se&6)!==0?be():il!==-1?il:il=be()}function fr(t){return(t.mode&1)===0?1:(se&2)!==0&&tt!==0?tt&-tt:Ik.transition!==null?(sl===0&&(sl=g0()),sl):(t=de,t!==0||(t=window.event,t=t===void 0?16:I0(t.type)),t)}function an(t,e,n,r){if(50<Ys)throw Ys=0,Id=null,Error(T(185));Wo(t,n,r),((se&2)===0||t!==We)&&(t===We&&((se&2)===0&&(Su|=n),Fe===4&&Zn(t,tt)),Nt(t,r),n===1&&se===0&&(e.mode&1)===0&&(Yi=be()+500,yu&&Rr()))}function Nt(t,e){var n=t.callbackNode;II(t,e);var r=El(t,t===We?tt:0);if(r===0)n!==null&&Gm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gm(n),e===1)t.tag===0?_k(zg.bind(null,t)):j0(zg.bind(null,t)),vk(function(){(se&6)===0&&Rr()}),n=null;else{switch(y0(r)){case 1:n=kf;break;case 4:n=p0;break;case 16:n=wl;break;case 536870912:n=m0;break;default:n=wl}n=V1(n,O1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function O1(t,e){if(il=-1,sl=0,(se&6)!==0)throw Error(T(327));var n=t.callbackNode;if(Ui()&&t.callbackNode!==n)return null;var r=El(t,t===We?tt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Fl(t,r);else{e=r;var i=se;se|=2;var s=$1();(We!==t||tt!==e)&&(kn=null,Yi=be()+500,Hr(t,e));do try{Bk();break}catch(a){L1(t,a)}while(1);Mf(),Ll.current=s,se=i,$e!==null?e=0:(We=null,tt=0,e=Fe)}if(e!==0){if(e===2&&(i=Yh(t),i!==0&&(r=i,e=kd(t,i))),e===1)throw n=_o,Hr(t,0),Zn(t,r),Nt(t,be()),n;if(e===6)Zn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!Vk(i)&&(e=Fl(t,r),e===2&&(s=Yh(t),s!==0&&(r=s,e=kd(t,s))),e===1))throw n=_o,Hr(t,0),Zn(t,r),Nt(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:Or(t,kt,kn);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=Jf+500-be(),10<e)){if(El(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=id(Or.bind(null,t,kt,kn),e);break}Or(t,kt,kn);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zk(r/1960))-r,10<r){t.timeoutHandle=id(Or.bind(null,t,kt,kn),r);break}Or(t,kt,kn);break;case 5:Or(t,kt,kn);break;default:throw Error(T(329))}}}return Nt(t,be()),t.callbackNode===n?O1.bind(null,t):null}function kd(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=kt,kt=n,e!==null&&Td(e)),t}function Td(t){kt===null?kt=t:kt.push.apply(kt,t)}function Vk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~Xf,e&=~Su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function zg(t){if((se&6)!==0)throw Error(T(327));Ui();var e=El(t,0);if((e&1)===0)return Nt(t,be()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var r=Yh(t);r!==0&&(e=r,n=kd(t,r))}if(n===1)throw n=_o,Hr(t,0),Zn(t,e),Nt(t,be()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,kt,kn),Nt(t,be()),null}function Zf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Yi=be()+500,yu&&Rr())}}function Zr(t){sr!==null&&sr.tag===0&&(se&6)===0&&Ui();var e=se;se|=1;var n=Wt.transition,r=de;try{if(Wt.transition=null,de=1,t)return t()}finally{de=r,Wt.transition=n,se=e,(se&6)===0&&Rr()}}function ep(){Pt=Ri.current,Ee(Ri)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yk(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Of(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tl();break;case 3:Gi(),Ee(At),Ee(ft),Bf();break;case 5:jf(r);break;case 4:Gi();break;case 13:Ee(ke);break;case 19:Ee(ke);break;case 10:Ff(r.type._context);break;case 22:case 23:ep()}n=n.return}if(We=t,$e=t=pr(t.current,null),tt=Pt=e,Fe=0,_o=null,Xf=Su=Jr=0,kt=Qs=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fr=null}return t}function L1(t,e){do{var n=$e;try{if(Mf(),tl.current=Ol,Pl){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pl=!1}if(Xr=0,He=Me=Te=null,Ks=!1,wo=0,Yf.current=null,n===null||n.return===null){Fe=1,_o=e,$e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Cg(o);if(m!==null){m.flags&=-257,Ag(m,o,a,s,e),m.mode&1&&xg(s,u,e),e=m,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if((e&1)===0){xg(s,u,e),tp();break e}l=Error(T(426))}}else if(Se&&a.mode&1){var S=Cg(o);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),Ag(S,o,a,s,e),Lf(Qi(l,a));break e}}s=l=Qi(l,a),Fe!==4&&(Fe=2),Qs===null?Qs=[s]:Qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=v1(s,l,e);wg(s,p);break e;case 1:a=l;var f=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(dr===null||!dr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=w1(s,a,e);wg(s,_);break e}}s=s.return}while(s!==null)}F1(n)}catch(I){e=I,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function $1(){var t=Ll.current;return Ll.current=Ol,t===null?Ol:t}function tp(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),We===null||(Jr&268435455)===0&&(Su&268435455)===0||Zn(We,tt)}function Fl(t,e){var n=se;se|=2;var r=$1();(We!==t||tt!==e)&&(kn=null,Hr(t,e));do try{jk();break}catch(i){L1(t,i)}while(1);if(Mf(),se=n,Ll.current=r,$e!==null)throw Error(T(261));return We=null,tt=0,Fe}function jk(){for(;$e!==null;)M1($e)}function Bk(){for(;$e!==null&&!pI();)M1($e)}function M1(t){var e=z1(t.alternate,t,Pt);t.memoizedProps=t.pendingProps,e===null?F1(t):$e=e,Yf.current=null}function F1(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Lk(n,e,Pt),n!==null){$e=n;return}}else{if(n=$k(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,$e=null;return}}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Fe===0&&(Fe=5)}function Or(t,e,n){var r=de,i=Wt.transition;try{Wt.transition=null,de=1,Hk(t,e,n,r)}finally{Wt.transition=i,de=r}return null}function Hk(t,e,n,r){do Ui();while(sr!==null);if((se&6)!==0)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kI(t,s),t===We&&($e=We=null,tt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Fa||(Fa=!0,V1(wl,function(){return Ui(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Wt.transition,Wt.transition=null;var o=de;de=1;var a=se;se|=4,Yf.current=null,Fk(t,n),D1(n,t),ck(nd),Sl=!!td,nd=td=null,t.current=n,Uk(n),mI(),se=a,de=o,Wt.transition=s}else t.current=n;if(Fa&&(Fa=!1,sr=t,Ml=i),s=t.pendingLanes,s===0&&(dr=null),vI(n.stateNode),Nt(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($l)throw $l=!1,t=_d,_d=null,t;return(Ml&1)!==0&&t.tag!==0&&Ui(),s=t.pendingLanes,(s&1)!==0?t===Id?Ys++:(Ys=0,Id=t):Ys=0,Rr(),null}function Ui(){if(sr!==null){var t=y0(Ml),e=Wt.transition,n=de;try{if(Wt.transition=null,de=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,Ml=0,(se&6)!==0)throw Error(T(331));var i=se;for(se|=4,$=t.current;$!==null;){var s=$,o=s.child;if(($.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:Gs(8,c,s)}var h=c.child;if(h!==null)h.return=c,$=h;else for(;$!==null;){c=$;var d=c.sibling,m=c.return;if(R1(c),c===u){$=null;break}if(d!==null){d.return=m,$=d;break}$=m}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}$=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Gs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,$=p;break e}$=s.return}}var f=t.current;for($=f;$!==null;){o=$;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,$=y;else e:for(o=f;$!==null;){if(a=$,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Eu(9,a)}}catch(I){Ae(a,a.return,I)}if(a===o){$=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,$=_;break e}$=a.return}}if(se=i,Rr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(du,t)}catch{}r=!0}return r}finally{de=n,Wt.transition=e}}return!1}function Vg(t,e,n){e=Qi(n,e),e=v1(t,e,1),t=hr(t,e,1),e=wt(),t!==null&&(Wo(t,1,e),Nt(t,e))}function Ae(t,e,n){if(t.tag===3)Vg(t,t,n);else for(;e!==null;){if(e.tag===3){Vg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){t=Qi(n,t),t=w1(e,t,1),e=hr(e,t,1),t=wt(),e!==null&&(Wo(e,1,t),Nt(e,t));break}}e=e.return}}function Wk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(tt&n)===n&&(Fe===4||Fe===3&&(tt&130023424)===tt&&500>be()-Jf?Hr(t,0):Xf|=n),Nt(t,e)}function U1(t,e){e===0&&((t.mode&1)===0?e=1:(e=Aa,Aa<<=1,(Aa&130023424)===0&&(Aa=4194304)));var n=wt();t=Fn(t,e),t!==null&&(Wo(t,e,n),Nt(t,n))}function qk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),U1(t,n)}function Kk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),U1(t,n)}var z1;z1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||At.current)xt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return xt=!1,Ok(t,e,n);xt=(t.flags&131072)!==0}else xt=!1,Se&&(e.flags&1048576)!==0&&B0(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;rl(t,e),t=e.pendingProps;var i=Wi(e,ft.current);Fi(e,n),i=Wf(null,e,r,t,i,n);var s=qf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rt(r)?(s=!0,xl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zf(e),i.updater=vu,e.stateNode=i,i._reactInternals=e,hd(e,r,t,n),e=pd(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Pf(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(rl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Qk(r),t=tn(r,t),i){case 0:e=fd(null,e,r,t,n);break e;case 1:e=bg(null,e,r,t,n);break e;case 11:e=Rg(null,e,r,t,n);break e;case 14:e=Ng(null,e,r,tn(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),fd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),bg(t,e,r,i,n);case 3:e:{if(I1(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,K0(t,e),bl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qi(Error(T(423)),e),e=Dg(t,e,r,n,i);break e}else if(r!==i){i=Qi(Error(T(424)),e),e=Dg(t,e,r,n,i);break e}else for(Ot=cr(e.stateNode.containerInfo.firstChild),Lt=e,Se=!0,rn=null,n=X0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qi(),r===i){e=Un(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return J0(e),t===null&&ld(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,rd(r,i)?o=null:s!==null&&rd(r,s)&&(e.flags|=32),_1(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&ld(e),null;case 13:return k1(t,e,n);case 4:return Vf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ki(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Rg(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Rl,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!At.current){e=Un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Dn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ud(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ud(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fi(e,n),i=Yt(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=tn(r,e.pendingProps),i=tn(r.type,i),Ng(t,e,r,i,n);case 15:return E1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),rl(t,e),e.tag=1,Rt(r)?(t=!0,xl(e)):t=!1,Fi(e,n),Q0(e,r,i),hd(e,r,i,n),pd(null,e,r,!0,t,n);case 19:return T1(t,e,n);case 22:return S1(t,e,n)}throw Error(T(156,e.tag))};function V1(t,e){return f0(t,e)}function Gk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new Gk(t,e,n,r)}function np(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qk(t){if(typeof t=="function")return np(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sf)return 11;if(t===_f)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")np(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wi:return Wr(n.children,i,s,e);case Ef:o=8,i|=8;break;case Lh:return t=Ht(12,n,e,i|2),t.elementType=Lh,t.lanes=s,t;case $h:return t=Ht(13,n,e,i),t.elementType=$h,t.lanes=s,t;case Mh:return t=Ht(19,n,e,i),t.elementType=Mh,t.lanes=s,t;case Yv:return _u(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gv:o=10;break e;case Qv:o=9;break e;case Sf:o=11;break e;case _f:o=14;break e;case Yn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wr(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function _u(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=Yv,t.lanes=n,t.stateNode={isHidden:!1},t}function oh(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function ah(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rp(t,e,n,r,i,s,o,a,l){return t=new Yk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zf(s),t}function Xk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function j1(t){if(!t)return _r;t=t._reactInternals;e:{if(li(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(Rt(n))return V0(t,n,e)}return e}function B1(t,e,n,r,i,s,o,a,l){return t=rp(n,r,!0,t,i,s,o,a,l),t.context=j1(null),n=t.current,r=wt(),i=fr(n),s=Dn(r,i),s.callback=e!=null?e:null,hr(n,s,i),t.current.lanes=i,Wo(t,i,r),Nt(t,r),t}function Iu(t,e,n,r){var i=e.current,s=wt(),o=fr(i);return n=j1(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hr(i,e,o),t!==null&&(an(t,i,o,s),el(t,i,o)),o}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ip(t,e){jg(t,e),(t=t.alternate)&&jg(t,e)}function Jk(){return null}var H1=typeof reportError=="function"?reportError:function(t){console.error(t)};function sp(t){this._internalRoot=t}ku.prototype.render=sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Iu(t,e,null,null)};ku.prototype.unmount=sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){Iu(null,t,null,null)}),e[Mn]=null}};function ku(t){this._internalRoot=t}ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=E0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&_0(t)}};function op(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bg(){}function Zk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ul(o);s.call(u)}}var o=B1(e,r,t,0,null,!1,!1,"",Bg);return t._reactRootContainer=o,t[Mn]=o.current,po(t.nodeType===8?t.parentNode:t),Zr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ul(l);a.call(u)}}var l=rp(t,0,!1,null,null,!1,!1,"",Bg);return t._reactRootContainer=l,t[Mn]=l.current,po(t.nodeType===8?t.parentNode:t),Zr(function(){Iu(e,l,n,r)}),l}function xu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ul(o);a.call(l)}}Iu(e,o,t,i)}else o=Zk(n,e,t,i,r);return Ul(o)}v0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ps(e.pendingLanes);n!==0&&(Tf(e,n|1),Nt(e,be()),(se&6)===0&&(Yi=be()+500,Rr()))}break;case 13:Zr(function(){var r=Fn(t,1);if(r!==null){var i=wt();an(r,t,1,i)}}),ip(t,1)}};xf=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=wt();an(e,t,134217728,n)}ip(t,134217728)}};w0=function(t){if(t.tag===13){var e=fr(t),n=Fn(t,e);if(n!==null){var r=wt();an(n,t,e,r)}ip(t,e)}};E0=function(){return de};S0=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Kh=function(t,e,n){switch(e){case"input":if(zh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gu(r);if(!i)throw Error(T(90));Jv(r),zh(r,i)}}}break;case"textarea":e0(t,n);break;case"select":e=n.value,e!=null&&Oi(t,!!n.multiple,e,!1)}};a0=Zf;l0=Zr;var eT={usingClientEntryPoint:!1,Events:[Ko,Ii,gu,s0,o0,Zf]},Cs={findFiberByHostInstance:Mr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tT={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h0(t),t===null?null:t.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||Jk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{du=Ua.inject(tT),yn=Ua}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eT;Ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!op(e))throw Error(T(200));return Xk(t,e,null,n)};Ut.createRoot=function(t,e){if(!op(t))throw Error(T(299));var n=!1,r="",i=H1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rp(t,1,!1,null,null,n,!1,r,i),t[Mn]=e.current,po(t.nodeType===8?t.parentNode:t),new sp(e)};Ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=h0(e),t=t===null?null:t.stateNode,t};Ut.flushSync=function(t){return Zr(t)};Ut.hydrate=function(t,e,n){if(!Tu(e))throw Error(T(200));return xu(null,t,e,!0,n)};Ut.hydrateRoot=function(t,e,n){if(!op(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=H1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=B1(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Mn]=e.current,po(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ku(e)};Ut.render=function(t,e,n){if(!Tu(e))throw Error(T(200));return xu(null,t,e,!1,n)};Ut.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(T(40));return t._reactRootContainer?(Zr(function(){xu(null,null,t,!1,function(){t._reactRootContainer=null,t[Mn]=null})}),!0):!1};Ut.unstable_batchedUpdates=Zf;Ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tu(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return xu(t,e,n,!1,r)};Ut.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Ut})(Bv);var Hg=Bv.exports;Ph.createRoot=Hg.createRoot,Ph.hydrateRoot=Hg.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Io.apply(this,arguments)}var or;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(or||(or={}));const Wg="popstate";function nT(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=ui(i.location.hash.substr(1));return xd("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:ko(s))}function r(i,s){rT(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return oT(e,n,r,t)}function rT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iT(){return Math.random().toString(36).substr(2,8)}function qg(t){return{usr:t.state,key:t.key}}function xd(t,e,n,r){return n===void 0&&(n=null),Io({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ui(e):e,{state:n,key:e&&e.key||r||iT()})}function ko(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ui(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function sT(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:ko(t);return new URL(n,e)}function oT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=or.Pop,l=null;function u(){a=or.Pop,l&&l({action:a,location:d.location})}function c(m,g){a=or.Push;let v=xd(d.location,m,g);n&&n(v,m);let S=qg(v),p=d.createHref(v);try{o.pushState(S,"",p)}catch{i.location.assign(p)}s&&l&&l({action:a,location:d.location})}function h(m,g){a=or.Replace;let v=xd(d.location,m,g);n&&n(v,m);let S=qg(v),p=d.createHref(v);o.replaceState(S,"",p),s&&l&&l({action:a,location:d.location})}let d={get action(){return a},get location(){return t(i,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Wg,u),l=m,()=>{i.removeEventListener(Wg,u),l=null}},createHref(m){return e(i,m)},encodeLocation(m){let g=sT(ko(m));return Io({},m,{pathname:g.pathname,search:g.search,hash:g.hash})},push:c,replace:h,go(m){return o.go(m)}};return d}var Kg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Kg||(Kg={}));function aT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ui(e):e,i=q1(r.pathname||"/",n);if(i==null)return null;let s=W1(t);lT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=yT(s[a],ET(i));return o}function W1(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(qe(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=mr([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(qe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),W1(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:mT(a,i.index),routesMeta:l})}),e}function lT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uT=/^:\w+$/,cT=3,hT=2,dT=1,fT=10,pT=-2,Gg=t=>t==="*";function mT(t,e){let n=t.split("/"),r=n.length;return n.some(Gg)&&(r+=pT),e&&(r+=hT),n.filter(i=>!Gg(i)).reduce((i,s)=>i+(uT.test(s)?cT:s===""?dT:fT),r)}function gT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function yT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=vT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:mr([i,c.pathname]),pathnameBase:kT(mr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=mr([i,c.pathnameBase]))}return s}function vT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=ST(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function wT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ap(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ET(t){try{return decodeURI(t)}catch(e){return ap(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ST(t,e){try{return decodeURIComponent(t)}catch(n){return ap(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function q1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ap(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _T(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ui(t):t;return{pathname:n?n.startsWith("/")?n:IT(n,e):e,search:TT(r),hash:xT(i)}}function IT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function lh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function K1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function G1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ui(t):(i=Io({},t),qe(!i.pathname||!i.pathname.includes("?"),lh("?","pathname","search",i)),qe(!i.pathname||!i.pathname.includes("#"),lh("#","pathname","hash",i)),qe(!i.search||!i.search.includes("#"),lh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=_T(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const mr=t=>t.join("/").replace(/\/\/+/g,"/"),kT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),TT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class CT{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function AT(t){return t instanceof CT}const RT=new Set(["POST","PUT","PATCH","DELETE"]);[...RT];var Cu={exports:{}},Au={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NT=b.exports,bT=Symbol.for("react.element"),DT=Symbol.for("react.fragment"),PT=Object.prototype.hasOwnProperty,OT=NT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LT={key:!0,ref:!0,__self:!0,__source:!0};function Q1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)PT.call(e,r)&&!LT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bT,type:t,key:s,ref:o,props:i,_owner:OT.current}}Au.Fragment=DT;Au.jsx=Q1;Au.jsxs=Q1;(function(t){t.exports=Au})(Cu);const $T=Cu.exports.Fragment,w=Cu.exports.jsx,M=Cu.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cd(){return Cd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cd.apply(this,arguments)}function MT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const FT=typeof Object.is=="function"?Object.is:MT,{useState:UT,useEffect:zT,useLayoutEffect:VT,useDebugValue:jT}=Dh;function BT(t,e,n){const r=e(),[{inst:i},s]=UT({inst:{value:r,getSnapshot:e}});return VT(()=>{i.value=r,i.getSnapshot=e,uh(i)&&s({inst:i})},[t,r,e]),zT(()=>(uh(i)&&s({inst:i}),t(()=>{uh(i)&&s({inst:i})})),[t]),jT(r),r}function uh(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!FT(n,r)}catch{return!0}}function HT(t,e,n){return e()}const WT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qT=!WT,KT=qT?HT:BT;"useSyncExternalStore"in Dh&&(t=>t.useSyncExternalStore)(Dh);const GT=b.exports.createContext(null),QT=b.exports.createContext(null),lp=b.exports.createContext(null),up=b.exports.createContext(null),Ru=b.exports.createContext(null),us=b.exports.createContext({outlet:null,matches:[]}),Y1=b.exports.createContext(null);function YT(t,e){let{relative:n}=e===void 0?{}:e;Qo()||qe(!1);let{basename:r,navigator:i}=b.exports.useContext(up),{hash:s,pathname:o,search:a}=cp(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:mr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Qo(){return b.exports.useContext(Ru)!=null}function Yo(){return Qo()||qe(!1),b.exports.useContext(Ru).location}function Xo(){Qo()||qe(!1);let{basename:t,navigator:e}=b.exports.useContext(up),{matches:n}=b.exports.useContext(us),{pathname:r}=Yo(),i=JSON.stringify(K1(n).map(a=>a.pathnameBase)),s=b.exports.useRef(!1);return b.exports.useEffect(()=>{s.current=!0}),b.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=G1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:mr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function XT(){let{matches:t}=b.exports.useContext(us),e=t[t.length-1];return e?e.params:{}}function cp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=b.exports.useContext(us),{pathname:i}=Yo(),s=JSON.stringify(K1(r).map(o=>o.pathnameBase));return b.exports.useMemo(()=>G1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function JT(t,e){Qo()||qe(!1);let n=b.exports.useContext(lp),{matches:r}=b.exports.useContext(us),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=Yo(),l;if(e){var u;let g=typeof e=="string"?ui(e):e;o==="/"||((u=g.pathname)==null?void 0:u.startsWith(o))||qe(!1),l=g}else l=a;let c=l.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",d=aT(t,{pathname:h}),m=nx(d&&d.map(g=>Object.assign({},g,{params:Object.assign({},s,g.params),pathname:mr([o,g.pathname]),pathnameBase:g.pathnameBase==="/"?o:mr([o,g.pathnameBase])})),r,n||void 0);return e&&m?w(Ru.Provider,{value:{location:Cd({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:or.Pop},children:m}):m}function ZT(){let t=ix(),e=AT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return M($T,{children:[w("h2",{children:"Unhandled Thrown Error!"}),w("h3",{style:{fontStyle:"italic"},children:e}),n?w("pre",{style:i,children:n}):null,w("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),M("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",w("code",{style:s,children:"errorElement"})," props on\xA0",w("code",{style:s,children:"<Route>"})]})]})}class ex extends b.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?w(Y1.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function tx(t){let{routeContext:e,match:n,children:r}=t,i=b.exports.useContext(GT);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),w(us.Provider,{value:e,children:r})}function nx(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||qe(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||w(ZT,{}):null,c=()=>w(tx,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?w(ex,{location:n.location,component:u,error:l,children:c()}):c()},null)}var Qg;(function(t){t.UseRevalidator="useRevalidator"})(Qg||(Qg={}));var Ad;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Ad||(Ad={}));function rx(t){let e=b.exports.useContext(lp);return e||qe(!1),e}function ix(){var t;let e=b.exports.useContext(Y1),n=rx(Ad.UseRouteError),r=b.exports.useContext(us),i=r.matches[r.matches.length-1];return e||(r||qe(!1),i.route.id||qe(!1),(t=n.errors)==null?void 0:t[i.route.id])}function Lr(t){qe(!1)}function sx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=or.Pop,navigator:s,static:o=!1}=t;Qo()&&qe(!1);let a=e.replace(/^\/*/,"/"),l=b.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ui(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,g=b.exports.useMemo(()=>{let v=q1(u,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:m}},[a,u,c,h,d,m]);return g==null?null:w(up.Provider,{value:l,children:w(Ru.Provider,{children:n,value:{location:g,navigationType:i}})})}function ox(t){let{children:e,location:n}=t,r=b.exports.useContext(QT),i=r&&!e?r.router.routes:Rd(e);return JT(i,n)}var Yg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Yg||(Yg={}));new Promise(()=>{});function Rd(t,e){e===void 0&&(e=[]);let n=[];return b.exports.Children.forEach(t,(r,i)=>{if(!b.exports.isValidElement(r))return;if(r.type===b.exports.Fragment){n.push.apply(n,Rd(r.props.children,e));return}r.type!==Lr&&qe(!1),!r.props.index||!r.props.children||qe(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Rd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function X1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ax(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function lx(t,e){return t.button===0&&(!e||e==="_self")&&!ax(t)}const ux=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],cx=["aria-current","caseSensitive","className","end","style","to","children"];function hx(t){let{basename:e,children:n,window:r}=t,i=b.exports.useRef();i.current==null&&(i.current=nT({window:r,v5Compat:!0}));let s=i.current,[o,a]=b.exports.useState({action:s.action,location:s.location});return b.exports.useLayoutEffect(()=>s.listen(a),[s]),w(sx,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const dx=b.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=X1(e,ux),d=YT(u,{relative:i}),m=fx(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(v){r&&r(v),v.defaultPrevented||m(v)}return w("a",{...h,href:d,onClick:s?r:g,ref:n,target:l})}),sn=b.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=X1(e,cx),h=cp(l,{relative:c.relative}),d=Yo(),m=b.exports.useContext(lp),g=h.pathname,v=d.pathname,S=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(v=v.toLowerCase(),S=S?S.toLowerCase():null,g=g.toLowerCase());let p=v===g||!o&&v.startsWith(g)&&v.charAt(g.length)==="/",f=S!=null&&(S===g||!o&&S.startsWith(g)&&S.charAt(g.length)==="/"),y=p?r:void 0,_;typeof s=="function"?_=s({isActive:p,isPending:f}):_=[s,p?"active":null,f?"pending":null].filter(Boolean).join(" ");let I=typeof a=="function"?a({isActive:p,isPending:f}):a;return w(dx,{...c,"aria-current":y,className:_,ref:n,style:I,to:l,children:typeof u=="function"?u({isActive:p,isPending:f}):u})});var Xg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Xg||(Xg={}));var Jg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Jg||(Jg={}));function fx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Xo(),l=Yo(),u=cp(t,{relative:o});return b.exports.useCallback(c=>{if(lx(c,n)){c.preventDefault();let h=r!==void 0?r:ko(l)===ko(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
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
 */const J1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},px=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Z1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(J1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):px(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},mx=function(t){const e=J1(t);return Z1.encodeByteArray(e,!0)},zl=function(t){return mx(t).replace(/\./g,"")},ew=function(t){try{return Z1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function tw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vx(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nw(){return typeof indexedDB=="object"}function rw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function wx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function Ex(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sx=()=>Ex().__FIREBASE_DEFAULTS__,_x=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ix=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ew(t[1]);return e&&JSON.parse(e)},hp=()=>{try{return Sx()||_x()||Ix()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iw=t=>{var e,n;return(n=(e=hp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kx=t=>{const e=iw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Tx=()=>{var t;return(t=hp())===null||t===void 0?void 0:t.config},sw=t=>{var e;return(e=hp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class xx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Cx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[zl(JSON.stringify(n)),zl(JSON.stringify(o)),a].join(".")}/**
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
 */const Ax="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ax,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ci.prototype.create)}}class ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Rx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dn(i,a,r)}}function Rx(t,e){return t.replace(Nx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Nx=/\{\$([^}]+)}/g;function bx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function To(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zg(s)&&Zg(o)){if(!To(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zg(t){return t!==null&&typeof t=="object"}/**
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
 */function Jo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function $s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dx(t,e){const n=new Px(t,e);return n.subscribe.bind(n)}class Px{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ox(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ch),i.error===void 0&&(i.error=ch),i.complete===void 0&&(i.complete=ch);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ox(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ch(){}/**
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
 */const Lx=1e3,$x=2,Mx=4*60*60*1e3,Fx=.5;function ey(t,e=Lx,n=$x){const r=e*Math.pow(n,t),i=Math.round(Fx*r*(Math.random()-.5)*2);return Math.min(Mx,r+i)}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $r="[DEFAULT]";/**
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
 */class Ux{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vx(e))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$r){return this.instances.has(e)}getOptions(e=$r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$r){return this.component?this.component.multipleInstances?e:$r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zx(t){return t===$r?void 0:t}function Vx(t){return t.instantiationMode==="EAGER"}/**
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
 */class jx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ux(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Bx={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Hx=ae.INFO,Wx={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},qx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Wx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nu{constructor(e){this.name=e,this._logLevel=Hx,this._logHandler=qx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Kx=(t,e)=>e.some(n=>t instanceof n);let ty,ny;function Gx(){return ty||(ty=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qx(){return ny||(ny=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ow=new WeakMap,Nd=new WeakMap,aw=new WeakMap,hh=new WeakMap,dp=new WeakMap;function Yx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ow.set(n,t)}).catch(()=>{}),dp.set(e,t),e}function Xx(t){if(Nd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nd.set(t,e)}let bd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jx(t){bd=t(bd)}function Zx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dh(this),e,...n);return aw.set(r,e.sort?e.sort():[e]),gr(r)}:Qx().includes(t)?function(...e){return t.apply(dh(this),e),gr(ow.get(this))}:function(...e){return gr(t.apply(dh(this),e))}}function eC(t){return typeof t=="function"?Zx(t):(t instanceof IDBTransaction&&Xx(t),Kx(t,Gx())?new Proxy(t,bd):t)}function gr(t){if(t instanceof IDBRequest)return Yx(t);if(hh.has(t))return hh.get(t);const e=eC(t);return e!==t&&(hh.set(t,e),dp.set(e,t)),e}const dh=t=>dp.get(t);function lw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=gr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(gr(o.result),l.oldVersion,l.newVersion,gr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const tC=["get","getKey","getAll","getAllKeys","count"],nC=["put","add","delete","clear"],fh=new Map;function ry(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fh.get(e))return fh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=nC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return fh.set(e,s),s}Jx(t=>({...t,get:(e,n,r)=>ry(e,n)||t.get(e,n,r),has:(e,n)=>!!ry(e,n)||t.has(e,n)}));/**
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
 */class rC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dd="@firebase/app",iy="0.8.4";/**
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
 */const ei=new Nu("@firebase/app"),sC="@firebase/app-compat",oC="@firebase/analytics-compat",aC="@firebase/analytics",lC="@firebase/app-check-compat",uC="@firebase/app-check",cC="@firebase/auth",hC="@firebase/auth-compat",dC="@firebase/database",fC="@firebase/database-compat",pC="@firebase/functions",mC="@firebase/functions-compat",gC="@firebase/installations",yC="@firebase/installations-compat",vC="@firebase/messaging",wC="@firebase/messaging-compat",EC="@firebase/performance",SC="@firebase/performance-compat",_C="@firebase/remote-config",IC="@firebase/remote-config-compat",kC="@firebase/storage",TC="@firebase/storage-compat",xC="@firebase/firestore",CC="@firebase/firestore-compat",AC="firebase",RC="9.14.0";/**
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
 */const Pd="[DEFAULT]",NC={[Dd]:"fire-core",[sC]:"fire-core-compat",[aC]:"fire-analytics",[oC]:"fire-analytics-compat",[uC]:"fire-app-check",[lC]:"fire-app-check-compat",[cC]:"fire-auth",[hC]:"fire-auth-compat",[dC]:"fire-rtdb",[fC]:"fire-rtdb-compat",[pC]:"fire-fn",[mC]:"fire-fn-compat",[gC]:"fire-iid",[yC]:"fire-iid-compat",[vC]:"fire-fcm",[wC]:"fire-fcm-compat",[EC]:"fire-perf",[SC]:"fire-perf-compat",[_C]:"fire-rc",[IC]:"fire-rc-compat",[kC]:"fire-gcs",[TC]:"fire-gcs-compat",[xC]:"fire-fst",[CC]:"fire-fst-compat","fire-js":"fire-js",[AC]:"fire-js-all"};/**
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
 */const Vl=new Map,Od=new Map;function bC(t,e){try{t.container.addComponent(e)}catch(n){ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sn(t){const e=t.name;if(Od.has(e))return ei.debug(`There were multiple attempts to register component ${e}.`),!1;Od.set(e,t);for(const n of Vl.values())bC(n,t);return!0}function hi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const DC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yr=new ci("app","Firebase",DC);/**
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
 */class PC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const Zo=RC;function uw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yr.create("bad-app-name",{appName:String(i)});if(n||(n=Tx()),!n)throw yr.create("no-options");const s=Vl.get(i);if(s){if(To(n,s.options)&&To(r,s.config))return s;throw yr.create("duplicate-app",{appName:i})}const o=new jx(i);for(const l of Od.values())o.addComponent(l);const a=new PC(n,r,o);return Vl.set(i,a),a}function fp(t=Pd){const e=Vl.get(t);if(!e&&t===Pd)return uw();if(!e)throw yr.create("no-app",{appName:t});return e}function qt(t,e,n){var r;let i=(r=NC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ei.warn(a.join(" "));return}Sn(new cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const OC="firebase-heartbeat-database",LC=1,xo="firebase-heartbeat-store";let ph=null;function cw(){return ph||(ph=lw(OC,LC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xo)}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),ph}async function $C(t){var e;try{return(await cw()).transaction(xo).objectStore(xo).get(hw(t))}catch(n){if(n instanceof dn)ei.warn(n.message);else{const r=yr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ei.warn(r.message)}}}async function sy(t,e){var n;try{const i=(await cw()).transaction(xo,"readwrite");return await i.objectStore(xo).put(e,hw(t)),i.done}catch(r){if(r instanceof dn)ei.warn(r.message);else{const i=yr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});ei.warn(i.message)}}}function hw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MC=1024,FC=30*24*60*60*1e3;class UC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=oy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=FC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oy(),{heartbeatsToSend:n,unsentEntries:r}=zC(this._heartbeatsCache.heartbeats),i=zl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function oy(){return new Date().toISOString().substring(0,10)}function zC(t,e=MC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ay(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ay(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nw()?rw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $C(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ay(t){return zl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jC(t){Sn(new cn("platform-logger",e=>new rC(e),"PRIVATE")),Sn(new cn("heartbeat",e=>new UC(e),"PRIVATE")),qt(Dd,iy,t),qt(Dd,iy,"esm2017"),qt("fire-js","")}jC("");var BC="firebase",HC="9.14.0";/**
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
 */qt(BC,HC,"app");const dw="@firebase/installations",pp="0.5.16";/**
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
 */const fw=1e4,pw=`w:${pp}`,mw="FIS_v2",WC="https://firebaseinstallations.googleapis.com/v1",qC=60*60*1e3,KC="installations",GC="Installations";/**
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
 */const QC={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ti=new ci(KC,GC,QC);function gw(t){return t instanceof dn&&t.code.includes("request-failed")}/**
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
 */function yw({projectId:t}){return`${WC}/projects/${t}/installations`}function vw(t){return{token:t.token,requestStatus:2,expiresIn:XC(t.expiresIn),creationTime:Date.now()}}async function ww(t,e){const r=(await e.json()).error;return ti.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ew({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function YC(t,{refreshToken:e}){const n=Ew(t);return n.append("Authorization",JC(e)),n}async function Sw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function XC(t){return Number(t.replace("s","000"))}function JC(t){return`${mw} ${t}`}/**
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
 */async function ZC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=yw(t),i=Ew(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:mw,appId:t.appId,sdkVersion:pw},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Sw(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:vw(u.authToken)}}else throw await ww("Create Installation",l)}/**
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
 */function _w(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function e2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const t2=/^[cdef][\w-]{21}$/,Ld="";function n2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=r2(t);return t2.test(n)?n:Ld}catch{return Ld}}function r2(t){return e2(t).substr(0,22)}/**
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
 */function bu(t){return`${t.appName}!${t.appId}`}/**
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
 */const Iw=new Map;function kw(t,e){const n=bu(t);Tw(n,e),i2(n,e)}function Tw(t,e){const n=Iw.get(t);if(!!n)for(const r of n)r(e)}function i2(t,e){const n=s2();n&&n.postMessage({key:t,fid:e}),o2()}let zr=null;function s2(){return!zr&&"BroadcastChannel"in self&&(zr=new BroadcastChannel("[Firebase] FID Change"),zr.onmessage=t=>{Tw(t.data.key,t.data.fid)}),zr}function o2(){Iw.size===0&&zr&&(zr.close(),zr=null)}/**
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
 */const a2="firebase-installations-database",l2=1,ni="firebase-installations-store";let mh=null;function mp(){return mh||(mh=lw(a2,l2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ni)}}})),mh}async function jl(t,e){const n=bu(t),i=(await mp()).transaction(ni,"readwrite"),s=i.objectStore(ni),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&kw(t,e.fid),e}async function xw(t){const e=bu(t),r=(await mp()).transaction(ni,"readwrite");await r.objectStore(ni).delete(e),await r.done}async function Du(t,e){const n=bu(t),i=(await mp()).transaction(ni,"readwrite"),s=i.objectStore(ni),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&kw(t,a.fid),a}/**
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
 */async function gp(t){let e;const n=await Du(t.appConfig,r=>{const i=u2(r),s=c2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ld?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function u2(t){const e=t||{fid:n2(),registrationStatus:0};return Cw(e)}function c2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ti.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=h2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:d2(t)}:{installationEntry:e}}async function h2(t,e){try{const n=await ZC(t,e);return jl(t.appConfig,n)}catch(n){throw gw(n)&&n.customData.serverCode===409?await xw(t.appConfig):await jl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function d2(t){let e=await ly(t.appConfig);for(;e.registrationStatus===1;)await _w(100),e=await ly(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await gp(t);return r||n}return e}function ly(t){return Du(t,e=>{if(!e)throw ti.create("installation-not-found");return Cw(e)})}function Cw(t){return f2(t)?{fid:t.fid,registrationStatus:0}:t}function f2(t){return t.registrationStatus===1&&t.registrationTime+fw<Date.now()}/**
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
 */async function p2({appConfig:t,heartbeatServiceProvider:e},n){const r=m2(t,n),i=YC(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:pw,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Sw(()=>fetch(r,a));if(l.ok){const u=await l.json();return vw(u)}else throw await ww("Generate Auth Token",l)}function m2(t,{fid:e}){return`${yw(t)}/${e}/authTokens:generate`}/**
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
 */async function yp(t,e=!1){let n;const r=await Du(t.appConfig,s=>{if(!Aw(s))throw ti.create("not-registered");const o=s.authToken;if(!e&&v2(o))return s;if(o.requestStatus===1)return n=g2(t,e),s;{if(!navigator.onLine)throw ti.create("app-offline");const a=E2(s);return n=y2(t,a),a}});return n?await n:r.authToken}async function g2(t,e){let n=await uy(t.appConfig);for(;n.authToken.requestStatus===1;)await _w(100),n=await uy(t.appConfig);const r=n.authToken;return r.requestStatus===0?yp(t,e):r}function uy(t){return Du(t,e=>{if(!Aw(e))throw ti.create("not-registered");const n=e.authToken;return S2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function y2(t,e){try{const n=await p2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await jl(t.appConfig,r),n}catch(n){if(gw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xw(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await jl(t.appConfig,r)}throw n}}function Aw(t){return t!==void 0&&t.registrationStatus===2}function v2(t){return t.requestStatus===2&&!w2(t)}function w2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+qC}function E2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function S2(t){return t.requestStatus===1&&t.requestTime+fw<Date.now()}/**
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
 */async function _2(t){const e=t,{installationEntry:n,registrationPromise:r}=await gp(e);return r?r.catch(console.error):yp(e).catch(console.error),n.fid}/**
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
 */async function I2(t,e=!1){const n=t;return await k2(n),(await yp(n,e)).token}async function k2(t){const{registrationPromise:e}=await gp(t);e&&await e}/**
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
 */function T2(t){if(!t||!t.options)throw gh("App Configuration");if(!t.name)throw gh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw gh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function gh(t){return ti.create("missing-app-config-values",{valueName:t})}/**
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
 */const Rw="installations",x2="installations-internal",C2=t=>{const e=t.getProvider("app").getImmediate(),n=T2(e),r=hi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},A2=t=>{const e=t.getProvider("app").getImmediate(),n=hi(e,Rw).getImmediate();return{getId:()=>_2(n),getToken:i=>I2(n,i)}};function R2(){Sn(new cn(Rw,C2,"PUBLIC")),Sn(new cn(x2,A2,"PRIVATE"))}R2();qt(dw,pp);qt(dw,pp,"esm2017");/**
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
 */const Bl="analytics",N2="firebase_id",b2="origin",D2=60*1e3,P2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nw="https://www.googletagmanager.com/gtag/js";/**
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
 */const $t=new Nu("@firebase/analytics");/**
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
 */function bw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function O2(t,e){const n=document.createElement("script");n.src=`${Nw}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function L2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await bw(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){$t.error(a)}t("config",i,s)}async function M2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await bw(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){$t.error(s)}}function F2(t,e,n,r){async function i(s,o,a){try{s==="event"?await M2(t,e,n,o,a):s==="config"?await $2(t,e,n,r,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(l){$t.error(l)}}return i}function U2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=F2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function z2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Nw)&&n.src.includes(t))return n;return null}/**
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
 */const V2={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Kt=new ci("analytics","Analytics",V2);/**
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
 */const j2=30,B2=1e3;class H2{constructor(e={},n=B2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Dw=new H2;function W2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function q2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:W2(r)},s=P2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Kt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function K2(t,e=Dw,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Kt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Kt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Y2;return setTimeout(async()=>{a.abort()},n!==void 0?n:D2),Pw({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Pw(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Dw){var s,o;const{appId:a,measurementId:l}=t;try{await G2(r,e)}catch(u){if(l)return $t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(s=u)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:l};throw u}try{const u=await q2(t);return i.deleteThrottleMetadata(a),u}catch(u){const c=u;if(!Q2(c)){if(i.deleteThrottleMetadata(a),l)return $t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw u}const h=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?ey(n,i.intervalMillis,j2):ey(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(a,d),$t.debug(`Calling attemptFetch again in ${h} millis`),Pw(t,d,r,i)}}function G2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Q2(t){if(!(t instanceof dn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Y2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function X2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function J2(){var t;if(nw())try{await rw()}catch(e){return $t.warn(Kt.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return $t.warn(Kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Z2(t,e,n,r,i,s,o){var a;const l=K2(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&$t.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>$t.error(m)),e.push(l);const u=J2().then(m=>{if(m)return r.getId()}),[c,h]=await Promise.all([l,u]);z2(s)||O2(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[b2]="firebase",d.update=!0,h!=null&&(d[N2]=h),i("config",c.measurementId,d),c.measurementId}/**
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
 */class eA{constructor(e){this.app=e}_delete(){return delete Xs[this.app.options.appId],Promise.resolve()}}let Xs={},cy=[];const hy={};let yh="dataLayer",tA="gtag",dy,Ow,fy=!1;function nA(){const t=[];if(tw()&&t.push("This is a browser extension environment."),wx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Kt.create("invalid-analytics-context",{errorInfo:e});$t.warn(n.message)}}function rA(t,e,n){nA();const r=t.options.appId;if(!r)throw Kt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)$t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Kt.create("no-api-key");if(Xs[r]!=null)throw Kt.create("already-exists",{id:r});if(!fy){L2(yh);const{wrappedGtag:s,gtagCore:o}=U2(Xs,cy,hy,yh,tA);Ow=s,dy=o,fy=!0}return Xs[r]=Z2(t,cy,hy,e,dy,yh,n),new eA(t)}function iA(t=fp()){t=De(t);const e=hi(t,Bl);return e.isInitialized()?e.getImmediate():sA(t)}function sA(t,e={}){const n=hi(t,Bl);if(n.isInitialized()){const i=n.getImmediate();if(To(e,n.getOptions()))return i;throw Kt.create("already-initialized")}return n.initialize({options:e})}function oA(t,e,n,r){t=De(t),X2(Ow,Xs[t.app.options.appId],e,n,r).catch(i=>$t.error(i))}const py="@firebase/analytics",my="0.8.4";function aA(){Sn(new cn(Bl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return rA(r,i,n)},"PUBLIC")),Sn(new cn("analytics-internal",t,"PRIVATE")),qt(py,my),qt(py,my,"esm2017");function t(e){try{const n=e.getProvider(Bl).getImmediate();return{logEvent:(r,i,s)=>oA(n,r,i,s)}}catch(n){throw Kt.create("interop-component-reg-failed",{reason:n})}}}aA();var lA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,vp=vp||{},G=lA||self;function Hl(){}function Pu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ea(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uA(t){return Object.prototype.hasOwnProperty.call(t,vh)&&t[vh]||(t[vh]=++cA)}var vh="closure_uid_"+(1e9*Math.random()>>>0),cA=0;function hA(t,e,n){return t.call.apply(t.bind,arguments)}function dA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=hA:ht=dA,ht.apply(null,arguments)}function za(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Nr(){this.s=this.s,this.o=this.o}var fA=0;Nr.prototype.s=!1;Nr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),fA!=0)&&uA(this)};Nr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Lw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function wp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function gy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Pu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var pA=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",Hl,e),G.removeEventListener("test",Hl,e)}catch{}return t}();function Wl(t){return/^[\s\xa0]*$/.test(t)}var yy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function wh(t,e){return t<e?-1:t>e?1:0}function Ou(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function gn(t){return Ou().indexOf(t)!=-1}function Ep(t){return Ep[" "](t),t}Ep[" "]=Hl;function mA(t){var e=vA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var gA=gn("Opera"),Xi=gn("Trident")||gn("MSIE"),$w=gn("Edge"),$d=$w||Xi,Mw=gn("Gecko")&&!(Ou().toLowerCase().indexOf("webkit")!=-1&&!gn("Edge"))&&!(gn("Trident")||gn("MSIE"))&&!gn("Edge"),yA=Ou().toLowerCase().indexOf("webkit")!=-1&&!gn("Edge");function Fw(){var t=G.document;return t?t.documentMode:void 0}var ql;e:{var Eh="",Sh=function(){var t=Ou();if(Mw)return/rv:([^\);]+)(\)|;)/.exec(t);if($w)return/Edge\/([\d\.]+)/.exec(t);if(Xi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yA)return/WebKit\/(\S+)/.exec(t);if(gA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Sh&&(Eh=Sh?Sh[1]:""),Xi){var _h=Fw();if(_h!=null&&_h>parseFloat(Eh)){ql=String(_h);break e}}ql=Eh}var vA={};function wA(){return mA(function(){let t=0;const e=yy(String(ql)).split("."),n=yy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=wh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||wh(i[2].length==0,s[2].length==0)||wh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Md;if(G.document&&Xi){var vy=Fw();Md=vy||parseInt(ql,10)||void 0}else Md=void 0;var EA=Md;function Co(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Mw){e:{try{Ep(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:SA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Co.X.h.call(this)}}it(Co,dt);var SA={2:"touch",3:"pen",4:"mouse"};Co.prototype.h=function(){Co.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ta="closure_listenable_"+(1e6*Math.random()|0),_A=0;function IA(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++_A,this.ba=this.ea=!1}function Lu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Sp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Uw(t){const e={};for(const n in t)e[n]=t[n];return e}const wy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<wy.length;s++)n=wy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $u(t){this.src=t,this.g={},this.h=0}$u.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ud(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new IA(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Fd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Lw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Lu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ud(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var _p="closure_lm_"+(1e6*Math.random()|0),Ih={};function Vw(t,e,n,r,i){if(r&&r.once)return Bw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Vw(t,e[s],n,r,i);return null}return n=Tp(n),t&&t[ta]?t.N(e,n,ea(r)?!!r.capture:!!r,i):jw(t,e,n,!1,r,i)}function jw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ea(i)?!!i.capture:!!i,a=kp(t);if(a||(t[_p]=a=new $u(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=kA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)pA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ww(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kA(){function t(n){return e.call(t.src,t.listener,n)}const e=TA;return t}function Bw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Bw(t,e[s],n,r,i);return null}return n=Tp(n),t&&t[ta]?t.O(e,n,ea(r)?!!r.capture:!!r,i):jw(t,e,n,!0,r,i)}function Hw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Hw(t,e[s],n,r,i);else r=ea(r)?!!r.capture:!!r,n=Tp(n),t&&t[ta]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ud(s,n,r,i),-1<n&&(Lu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=kp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ud(e,n,r,i)),(n=-1<t?e[t]:null)&&Ip(n))}function Ip(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ta])Fd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ww(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=kp(e))?(Fd(n,t),n.h==0&&(n.src=null,e[_p]=null)):Lu(t)}}}function Ww(t){return t in Ih?Ih[t]:Ih[t]="on"+t}function TA(t,e){if(t.ba)t=!0;else{e=new Co(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Ip(t),t=n.call(r,e)}return t}function kp(t){return t=t[_p],t instanceof $u?t:null}var kh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tp(t){return typeof t=="function"?t:(t[kh]||(t[kh]=function(e){return t.handleEvent(e)}),t[kh])}function Ke(){Nr.call(this),this.i=new $u(this),this.P=this,this.I=null}it(Ke,Nr);Ke.prototype[ta]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){Hw(this,t,e,n,r)};function nt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var i=e;e=new dt(r,t),zw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Va(o,r,!0,e)&&i}if(o=e.g=t,i=Va(o,r,!0,e)&&i,i=Va(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Va(o,r,!1,e)&&i}Ke.prototype.M=function(){if(Ke.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Lu(n[r]);delete t.g[e],t.h--}}this.I=null};Ke.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Va(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Fd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var xp=G.JSON.stringify;function xA(){var t=Gw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class CA{constructor(){this.h=this.g=null}add(e,n){const r=qw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var qw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new AA,t=>t.reset());class AA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function RA(t){G.setTimeout(()=>{throw t},0)}function Kw(t,e){zd||NA(),Vd||(zd(),Vd=!0),Gw.add(t,e)}var zd;function NA(){var t=G.Promise.resolve(void 0);zd=function(){t.then(bA)}}var Vd=!1,Gw=new CA;function bA(){for(var t;t=xA();){try{t.h.call(t.g)}catch(n){RA(n)}var e=qw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vd=!1}function Mu(t,e){Ke.call(this),this.h=t||1,this.g=e||G,this.j=ht(this.lb,this),this.l=Date.now()}it(Mu,Ke);F=Mu.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),nt(this,"tick"),this.ca&&(Cp(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cp(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){Mu.X.M.call(this),Cp(this),delete this.g};function Ap(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function Qw(t){t.g=Ap(()=>{t.g=null,t.i&&(t.i=!1,Qw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class DA extends Nr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Qw(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ao(t){Nr.call(this),this.h=t,this.g={}}it(Ao,Nr);var Ey=[];function Yw(t,e,n,r){Array.isArray(n)||(n&&(Ey[0]=n.toString()),n=Ey);for(var i=0;i<n.length;i++){var s=Vw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Xw(t){Sp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ip(e)},t),t.g={}}Ao.prototype.M=function(){Ao.X.M.call(this),Xw(this)};Ao.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fu(){this.g=!0}Fu.prototype.Aa=function(){this.g=!1};function PA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function OA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ni(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+$A(t,n)+(r?" "+r:"")})}function LA(t,e){t.info(function(){return"TIMEOUT: "+e})}Fu.prototype.info=function(){};function $A(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return xp(n)}catch{return e}}var di={},Sy=null;function Uu(){return Sy=Sy||new Ke}di.Pa="serverreachability";function Jw(t){dt.call(this,di.Pa,t)}it(Jw,dt);function Ro(t){const e=Uu();nt(e,new Jw(e))}di.STAT_EVENT="statevent";function Zw(t,e){dt.call(this,di.STAT_EVENT,t),this.stat=e}it(Zw,dt);function vt(t){const e=Uu();nt(e,new Zw(e,t))}di.Qa="timingevent";function eE(t,e){dt.call(this,di.Qa,t),this.size=e}it(eE,dt);function na(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var zu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},tE={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Rp(){}Rp.prototype.h=null;function _y(t){return t.h||(t.h=t.i())}function nE(){}var ra={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Np(){dt.call(this,"d")}it(Np,dt);function bp(){dt.call(this,"c")}it(bp,dt);var jd;function Vu(){}it(Vu,Rp);Vu.prototype.g=function(){return new XMLHttpRequest};Vu.prototype.i=function(){return{}};jd=new Vu;function ia(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ao(this),this.O=MA,t=$d?125:void 0,this.T=new Mu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new rE}function rE(){this.i=null,this.g="",this.h=!1}var MA=45e3,Bd={},Kl={};F=ia.prototype;F.setTimeout=function(t){this.O=t};function Hd(t,e,n){t.K=1,t.v=Bu(zn(e)),t.s=n,t.P=!0,iE(t,null)}function iE(t,e){t.F=Date.now(),sa(t),t.A=zn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),dE(n.i,"t",r),t.C=0,n=t.l.H,t.h=new rE,t.g=PE(t.l,n?e:null,!t.s),0<t.N&&(t.L=new DA(ht(t.La,t,t.g),t.N)),Yw(t.S,t.g,"readystatechange",t.ib),e=t.H?Uw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ro(),PA(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&An(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const c=An(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||$d||this.g&&(this.h.h||this.g.fa()||xy(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ro(3):Ro(2)),ju(this);var n=this.g.aa();this.Y=n;t:if(sE(this)){var r=xy(this.g);t="";var i=r.length,s=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vr(this),Js(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,OA(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wl(a)){var u=a;break t}}u=null}if(n=u)Ni(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Wd(this,n);else{this.i=!1,this.o=3,vt(12),Vr(this),Js(this);break e}}this.P?(oE(this,c,o),$d&&this.i&&c==3&&(Yw(this.S,this.T,"tick",this.hb),this.T.start())):(Ni(this.j,this.m,o,null),Wd(this,o)),c==4&&Vr(this),this.i&&!this.I&&(c==4?RE(this.l,this):(this.i=!1,sa(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,vt(12)):(this.o=0,vt(13)),Vr(this),Js(this)}}}catch{}finally{}};function sE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function oE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=FA(t,n),i==Kl){e==4&&(t.o=4,vt(14),r=!1),Ni(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Bd){t.o=4,vt(15),Ni(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ni(t.j,t.m,i,null),Wd(t,i);sE(t)&&i!=Kl&&i!=Bd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,vt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fp(e),e.K=!0,vt(11))):(Ni(t.j,t.m,n,"[Invalid Chunked Response]"),Vr(t),Js(t))}F.hb=function(){if(this.g){var t=An(this.g),e=this.g.fa();this.C<e.length&&(ju(this),oE(this,t,e),this.i&&t!=4&&sa(this))}};function FA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Kl:(n=Number(e.substring(n,r)),isNaN(n)?Bd:(r+=1,r+n>e.length?Kl:(e=e.substr(r,n),t.C=r+n,e)))}F.cancel=function(){this.I=!0,Vr(this)};function sa(t){t.V=Date.now()+t.O,aE(t,t.O)}function aE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=na(ht(t.gb,t),e)}function ju(t){t.B&&(G.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(LA(this.j,this.A),this.K!=2&&(Ro(),vt(17)),Vr(this),this.o=2,Js(this)):aE(this,this.V-t)};function Js(t){t.l.G==0||t.I||RE(t.l,t)}function Vr(t){ju(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Cp(t.T),Xw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Wd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||qd(n.h,t))){if(!t.J&&qd(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Yl(n),qu(n);else break e;Mp(n),vt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=na(ht(n.cb,n),6e3));if(1>=mE(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else jr(n,11)}else if((t.J||n.g==t)&&Yl(n),!Wl(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Dp(s,s.h),s.h=null))}if(r.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,_e(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=DE(r,r.H?r.ka:null,r.V),o.J){gE(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(ju(a),sa(a)),r.g=o}else CE(r);0<n.i.length&&Ku(n)}else u[0]!="stop"&&u[0]!="close"||jr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?jr(n,7):$p(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ro(4)}catch{}}function UA(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Pu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function zA(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Pu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function lE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Pu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=zA(t),r=UA(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var uE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qr){this.h=e!==void 0?e:t.h,Gl(this,t.j),this.s=t.s,this.g=t.g,Ql(this,t.m),this.l=t.l,e=t.i;var n=new No;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Iy(this,n),this.o=t.o}else t&&(n=String(t).match(uE))?(this.h=!!e,Gl(this,n[1]||"",!0),this.s=Ms(n[2]||""),this.g=Ms(n[3]||"",!0),Ql(this,n[4]),this.l=Ms(n[5]||"",!0),Iy(this,n[6]||"",!0),this.o=Ms(n[7]||"")):(this.h=!!e,this.i=new No(null,this.h))}qr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fs(e,ky,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fs(e,ky,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fs(n,n.charAt(0)=="/"?HA:BA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fs(n,qA)),t.join("")};function zn(t){return new qr(t)}function Gl(t,e,n){t.j=n?Ms(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ql(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Iy(t,e,n){e instanceof No?(t.i=e,KA(t.i,t.h)):(n||(e=Fs(e,WA)),t.i=new No(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function Bu(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ms(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,jA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function jA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ky=/[#\/\?@]/g,BA=/[#\?:]/g,HA=/[#\?]/g,WA=/[#\?@]/g,qA=/#/g;function No(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function br(t){t.g||(t.g=new Map,t.h=0,t.i&&VA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=No.prototype;F.add=function(t,e){br(this),this.i=null,t=cs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function cE(t,e){br(t),e=cs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function hE(t,e){return br(t),e=cs(t,e),t.g.has(e)}F.forEach=function(t,e){br(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};F.oa=function(){br(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};F.W=function(t){br(this);let e=[];if(typeof t=="string")hE(this,t)&&(e=e.concat(this.g.get(cs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return br(this),this.i=null,t=cs(this,t),hE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function dE(t,e,n){cE(t,e),0<n.length&&(t.i=null,t.g.set(cs(t,e),wp(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function cs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function KA(t,e){e&&!t.j&&(br(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(cE(this,r),dE(this,i,n))},t)),t.j=e}var GA=class{constructor(t,e){this.h=t,this.g=e}};function fE(t){this.l=t||QA,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ga&&G.g.Ga()&&G.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QA=10;function pE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function mE(t){return t.h?1:t.g?t.g.size:0}function qd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Dp(t,e){t.g?t.g.add(e):t.h=e}function gE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}fE.prototype.cancel=function(){if(this.i=yE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function yE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return wp(t.i)}function Pp(){}Pp.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};Pp.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function YA(){this.g=new Pp}function XA(t,e,n){const r=n||"";try{lE(t,function(i,s){let o=i;ea(i)&&(o=xp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function JA(t,e){const n=new Fu;if(G.Image){const r=new Image;r.onload=za(ja,n,r,"TestLoadImage: loaded",!0,e),r.onerror=za(ja,n,r,"TestLoadImage: error",!1,e),r.onabort=za(ja,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=za(ja,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ja(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function oa(t){this.l=t.ac||null,this.j=t.jb||!1}it(oa,Rp);oa.prototype.g=function(){return new Hu(this.l,this.j)};oa.prototype.i=function(t){return function(){return t}}({});function Hu(t,e){Ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Op,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(Hu,Ke);var Op=0;F=Hu.prototype;F.open=function(t,e){if(this.readyState!=Op)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bo(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,aa(this)),this.readyState=Op};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bo(this)),this.g&&(this.readyState=3,bo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vE(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function vE(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?aa(this):bo(this),this.readyState==3&&vE(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,aa(this))};F.Ua=function(t){this.g&&(this.response=t,aa(this))};F.ga=function(){this.g&&aa(this)};function aa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bo(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Hu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ZA=G.JSON.parse;function Re(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wE,this.K=this.L=!1}it(Re,Ke);var wE="",eR=/^https?$/i,tR=["POST","PUT"];F=Re.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():jd.g(),this.C=this.u?_y(this.u):_y(jd),this.g.onreadystatechange=ht(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Ty(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=G.FormData&&t instanceof G.FormData,!(0<=Lw(tR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{_E(this),0<this.B&&((this.K=nR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.qa,this)):this.A=Ap(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ty(this,s)}};function nR(t){return Xi&&wA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof vp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function Ty(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,EE(t),Wu(t)}function EE(t){t.D||(t.D=!0,nt(t,"complete"),nt(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),Wu(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wu(this,!0)),Re.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?SE(this):this.fb())};F.fb=function(){SE(this)};function SE(t){if(t.h&&typeof vp<"u"&&(!t.C[1]||An(t)!=4||t.aa()!=2)){if(t.v&&An(t)==4)Ap(t.Ha,0,t);else if(nt(t,"readystatechange"),An(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(uE)[1]||null;if(!i&&G.self&&G.self.location){var s=G.self.location.protocol;i=s.substr(0,s.length-1)}r=!eR.test(i?i.toLowerCase():"")}n=r}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var o=2<An(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",EE(t)}}finally{Wu(t)}}}}function Wu(t,e){if(t.g){_E(t);const n=t.g,r=t.C[0]?Hl:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function _E(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function An(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ZA(e)}};function xy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function IE(t){let e="";return Sp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Lp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=IE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function As(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function kE(t){this.Ca=0,this.i=[],this.j=new Fu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=As("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=As("baseRetryDelayMs",5e3,t),this.bb=As("retryDelaySeedMs",1e4,t),this.$a=As("forwardChannelMaxRetries",2,t),this.ta=As("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new fE(t&&t.concurrentRequestLimit),this.Fa=new YA,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=kE.prototype;F.ma=8;F.G=1;function $p(t){if(TE(t),t.G==3){var e=t.U++,n=zn(t.F);_e(n,"SID",t.I),_e(n,"RID",e),_e(n,"TYPE","terminate"),la(t,n),e=new ia(t,t.j,e,void 0),e.K=2,e.v=Bu(zn(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=PE(e.l,null),e.g.da(e.v)),e.F=Date.now(),sa(e)}bE(t)}function qu(t){t.g&&(Fp(t),t.g.cancel(),t.g=null)}function TE(t){qu(t),t.u&&(G.clearTimeout(t.u),t.u=null),Yl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Ku(t){pE(t.h)||t.m||(t.m=!0,Kw(t.Ja,t),t.C=0)}function rR(t,e){return mE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=na(ht(t.Ja,t,e),NE(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ia(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Uw(s),zw(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xE(this,i,e),n=zn(this.F),_e(n,"RID",t),_e(n,"CVER",22),this.D&&_e(n,"X-HTTP-Session-Id",this.D),la(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(IE(s)))+"&"+e:this.o&&Lp(n,this.o,s)),Dp(this.h,i),this.Ya&&_e(n,"TYPE","init"),this.O?(_e(n,"$req",e),_e(n,"SID","null"),i.Z=!0,Hd(i,n,null)):Hd(i,n,e),this.G=2}}else this.G==3&&(t?Cy(this,t):this.i.length==0||pE(this.h)||Cy(this))};function Cy(t,e){var n;e?n=e.m:n=t.U++;const r=zn(t.F);_e(r,"SID",t.I),_e(r,"RID",n),_e(r,"AID",t.T),la(t,r),t.o&&t.s&&Lp(r,t.o,t.s),n=new ia(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=xE(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Dp(t.h,n),Hd(n,r,e)}function la(t,e){t.ia&&Sp(t.ia,function(n,r){_e(e,r,n)}),t.l&&lE({},function(n,r){_e(e,r,n)})}function xE(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ht(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{XA(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function CE(t){t.g||t.u||(t.Z=1,Kw(t.Ia,t),t.A=0)}function Mp(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=na(ht(t.Ia,t),NE(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,AE(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=na(ht(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,vt(10),qu(this),AE(this))};function Fp(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function AE(t){t.g=new ia(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=zn(t.sa);_e(e,"RID","rpc"),_e(e,"SID",t.I),_e(e,"CI",t.L?"0":"1"),_e(e,"AID",t.T),_e(e,"TYPE","xmlhttp"),la(t,e),t.o&&t.s&&Lp(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Bu(zn(e)),n.s=null,n.P=!0,iE(n,t)}F.cb=function(){this.v!=null&&(this.v=null,qu(this),Mp(this),vt(19))};function Yl(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function RE(t,e){var n=null;if(t.g==e){Yl(t),Fp(t),t.g=null;var r=2}else if(qd(t.h,e))n=e.D,gE(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Uu(),nt(r,new eE(r,n)),Ku(t)}else CE(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&rR(t,e)||r==2&&Mp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:jr(t,5);break;case 4:jr(t,10);break;case 3:jr(t,6);break;default:jr(t,2)}}}function NE(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function jr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ht(t.kb,t);n||(n=new qr("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||Gl(n,"https"),Bu(n)),JA(n.toString(),r)}else vt(2);t.G=0,t.l&&t.l.va(e),bE(t),TE(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function bE(t){if(t.G=0,t.la=[],t.l){const e=yE(t.h);(e.length!=0||t.i.length!=0)&&(gy(t.la,e),gy(t.la,t.i),t.h.i.length=0,wp(t.i),t.i.length=0),t.l.ua()}}function DE(t,e,n){var r=n instanceof qr?zn(n):new qr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ql(r,r.m);else{var i=G.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new qr(null,void 0);r&&Gl(s,r),e&&(s.g=e),i&&Ql(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&_e(r,n,e),_e(r,"VER",t.ma),la(t,r),r}function PE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Re(new oa({jb:!0})):new Re(t.ra),e.Ka(t.H),e}function OE(){}F=OE.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function Xl(){if(Xi&&!(10<=Number(EA)))throw Error("Environmental error: no available transport.")}Xl.prototype.g=function(t,e){return new Ft(t,e)};function Ft(t,e){Ke.call(this),this.g=new kE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Wl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Wl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new hs(this)}it(Ft,Ke);Ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;vt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=DE(t,null,t.V),Ku(t)};Ft.prototype.close=function(){$p(this.g)};Ft.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=xp(t),t=n);e.i.push(new GA(e.ab++,t)),e.G==3&&Ku(e)};Ft.prototype.M=function(){this.g.l=null,delete this.j,$p(this.g),delete this.g,Ft.X.M.call(this)};function LE(t){Np.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(LE,Np);function $E(){bp.call(this),this.status=1}it($E,bp);function hs(t){this.g=t}it(hs,OE);hs.prototype.xa=function(){nt(this.g,"a")};hs.prototype.wa=function(t){nt(this.g,new LE(t))};hs.prototype.va=function(t){nt(this.g,new $E)};hs.prototype.ua=function(){nt(this.g,"b")};Xl.prototype.createWebChannel=Xl.prototype.g;Ft.prototype.send=Ft.prototype.u;Ft.prototype.open=Ft.prototype.m;Ft.prototype.close=Ft.prototype.close;zu.NO_ERROR=0;zu.TIMEOUT=8;zu.HTTP_ERROR=6;tE.COMPLETE="complete";nE.EventType=ra;ra.OPEN="a";ra.CLOSE="b";ra.ERROR="c";ra.MESSAGE="d";Ke.prototype.listen=Ke.prototype.N;Re.prototype.listenOnce=Re.prototype.O;Re.prototype.getLastError=Re.prototype.Oa;Re.prototype.getLastErrorCode=Re.prototype.Ea;Re.prototype.getStatus=Re.prototype.aa;Re.prototype.getResponseJson=Re.prototype.Sa;Re.prototype.getResponseText=Re.prototype.fa;Re.prototype.send=Re.prototype.da;Re.prototype.setWithCredentials=Re.prototype.Ka;var iR=function(){return new Xl},sR=function(){return Uu()},Th=zu,oR=tE,aR=di,Ay={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},lR=oa,Ba=nE,uR=Re;const Ry="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */const ri=new Nu("@firebase/firestore");function Ny(){return ri.logLevel}function U(t,...e){if(ri.logLevel<=ae.DEBUG){const n=e.map(Up);ri.debug(`Firestore (${ds}): ${t}`,...n)}}function Vn(t,...e){if(ri.logLevel<=ae.ERROR){const n=e.map(Up);ri.error(`Firestore (${ds}): ${t}`,...n)}}function Kd(t,...e){if(ri.logLevel<=ae.WARN){const n=e.map(Up);ri.warn(`Firestore (${ds}): ${t}`,...n)}}function Up(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function ve(t,e){t||Y()}function X(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ME{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class hR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dR{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new ME(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new lt(e)}}class fR{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ve(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class pR{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new fR(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gR{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.A=n.token,new mR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function yR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class FE{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Ji(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ue(0,0))}static max(){return new ee(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Do{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Do.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Do?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Do{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const vR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Do{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return vR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(Ie.fromString(e))}static fromName(e){return new V(Ie.fromString(e).popFirst(5))}static empty(){return new V(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new Ie(e.slice()))}}function wR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new Ir(i,V.empty(),e)}function ER(t){return new Ir(t.readTime,t.key,-1)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(ee.min(),V.empty(),-1)}static max(){return new Ir(ee.max(),V.empty(),-1)}}function SR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const _R="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ua(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==_R)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ca(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class zp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function by(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function UE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */zp.at=-1;class Ve{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ha(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ha(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ha(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ha(this.root,e,this.comparator,!0)}}class Ha{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ze.RED,this.left=i!=null?i:Ze.EMPTY,this.right=s!=null?s:Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ze(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dy(this.data.getIterator())}getIteratorFrom(e){return new Dy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Dy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new ze(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new mt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const kR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(ve(!!t),typeof t=="string"){let e=0;const n=kR.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zi(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */function zE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function VE(t){const e=t.mapValue.fields.__previous_value__;return zE(e)?VE(e):e}function Po(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class TR{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Oo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oo&&e.projectId===this.projectId&&e.database===this.database}}function Gu(t){return t==null}function Jl(t){return t===0&&1/t==-1/0}function xR(t){return typeof t=="number"&&Number.isInteger(t)&&!Jl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Wa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zE(t)?4:CR(t)?9007199254740991:10:Y()}function _n(t,e){if(t===e)return!0;const n=ii(t);if(n!==ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Po(t).isEqual(Po(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=kr(r.timestampValue),o=kr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Zi(r.bytesValue).isEqual(Zi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Le(r.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Le(r.integerValue)===Le(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Le(r.doubleValue),o=Le(i.doubleValue);return s===o?Jl(s)===Jl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ji(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(by(s)!==by(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!_n(s[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Lo(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=ii(t),r=ii(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Le(i.integerValue||i.doubleValue),a=Le(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Py(t.timestampValue,e.timestampValue);case 4:return Py(Po(t),Po(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Zi(i),a=Zi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ce(o[l],a[l]);if(u!==0)return u}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ce(Le(i.latitude),Le(s.latitude));return o!==0?o:ce(Le(i.longitude),Le(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=es(o[l],a[l]);if(u)return u}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Wa.mapValue&&s===Wa.mapValue)return 0;if(i===Wa.mapValue)return 1;if(s===Wa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ce(a[c],u[c]);if(h!==0)return h;const d=es(o[a[c]],l[u[c]]);if(d!==0)return d}return ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Py(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=kr(t),r=kr(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function zi(t){return Gd(t)}function Gd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=kr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Gd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Gd(r.fields[a])}`;return s+"}"}(t.mapValue):Y();var e,n}function Qd(t){return!!t&&"integerValue"in t}function Vp(t){return!!t&&"arrayValue"in t}function Oy(t){return!!t&&"nullValue"in t}function Ly(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function al(t){return!!t&&"mapValue"in t}function Zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function CR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!al(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(n)}setAll(e){let n=ct.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Zs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());al(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];al(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Tt(Zs(this.value))}}function jE(t){const e=[];return fi(t.fields,(n,r)=>{const i=new ct([n]);if(al(r)){const s=jE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
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
 */class et{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new et(e,0,ee.min(),ee.min(),Tt.empty(),0)}static newFoundDocument(e,n,r){return new et(e,1,n,ee.min(),r,0)}static newNoDocument(e,n){return new et(e,2,n,ee.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,ee.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class AR{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function $y(t,e=null,n=[],r=[],i=null,s=null,o=null){return new AR(t,e,n,r,i,s,o)}function jp(t){const e=X(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+zi(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Gu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zi(r)).join(",")),e.ht=n}return e.ht}function RR(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${zi(r.value)}`;var r}).join(", ")}]`),Gu(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>zi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>zi(n)).join(",")),`Target(${e})`}function Bp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!MR(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!_n(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fy(t.startAt,e.startAt)&&Fy(t.endAt,e.endAt)}function Yd(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ct extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new NR(e,n,r):n==="array-contains"?new PR(e,r):n==="in"?new OR(e,r):n==="not-in"?new LR(e,r):n==="array-contains-any"?new $R(e,r):new Ct(e,n,r)}static lt(e,n,r){return n==="in"?new bR(e,r):new DR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(es(n,this.value)):n!==null&&ii(this.value)===ii(n)&&this.ft(es(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class NR extends Ct{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.ft(n)}}class bR extends Ct{constructor(e,n){super(e,"in",n),this.keys=BE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DR extends Ct{constructor(e,n){super(e,"not-in",n),this.keys=BE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function BE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class PR extends Ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vp(n)&&Lo(n.arrayValue,this.value)}}class OR extends Ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class LR extends Ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lo(this.value.arrayValue,n)}}class $R extends Ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lo(this.value.arrayValue,r))}}class Zl{constructor(e,n){this.position=e,this.inclusive=n}}class eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function MR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function My(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function FR(t,e,n,r,i,s,o,a){return new Qu(t,e,n,r,i,s,o,a)}function Yu(t){return new Qu(t)}function Uy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UR(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zR(t){for(const e of t.filters)if(e.dt())return e.field;return null}function VR(t){return t.collectionGroup!==null}function $o(t){const e=X(t);if(e._t===null){e._t=[];const n=zR(e),r=UR(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new eo(n)),e._t.push(new eo(ct.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new eo(ct.keyField(),s))}}}return e._t}function jn(t){const e=X(t);if(!e.wt)if(e.limitType==="F")e.wt=$y(e.path,e.collectionGroup,$o(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of $o(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new eo(s.field,o))}const r=e.endAt?new Zl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Zl(e.startAt.position,e.startAt.inclusive):null;e.wt=$y(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Xd(t,e,n){return new Qu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xu(t,e){return Bp(jn(t),jn(e))&&t.limitType===e.limitType}function HE(t){return`${jp(jn(t))}|lt:${t.limitType}`}function Jd(t){return`Query(target=${RR(jn(t))}; limitType=${t.limitType})`}function Hp(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):V.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=My(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,$o(n),r)||n.endAt&&!function(i,s,o){const a=My(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,$o(n),r))}(t,e)}function jR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function WE(t){return(e,n)=>{let r=!1;for(const i of $o(t)){const s=BR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function BR(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?es(a,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */function qE(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jl(e)?"-0":e}}function KE(t){return{integerValue:""+t}}function HR(t,e){return xR(e)?KE(e):qE(t,e)}/**
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
 */class Ju{constructor(){this._=void 0}}function WR(t,e,n){return t instanceof eu?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Mo?QE(t,e):t instanceof Fo?YE(t,e):function(r,i){const s=GE(r,i),o=zy(s)+zy(r.yt);return Qd(s)&&Qd(r.yt)?KE(o):qE(r.It,o)}(t,e)}function qR(t,e,n){return t instanceof Mo?QE(t,e):t instanceof Fo?YE(t,e):n}function GE(t,e){return t instanceof tu?Qd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class eu extends Ju{}class Mo extends Ju{constructor(e){super(),this.elements=e}}function QE(t,e){const n=XE(e);for(const r of t.elements)n.some(i=>_n(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fo extends Ju{constructor(e){super(),this.elements=e}}function YE(t,e){let n=XE(e);for(const r of t.elements)n=n.filter(i=>!_n(i,r));return{arrayValue:{values:n}}}class tu extends Ju{constructor(e,n){super(),this.It=e,this.yt=n}}function zy(t){return Le(t.integerValue||t.doubleValue)}function XE(t){return Vp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function KR(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Mo&&r instanceof Mo||n instanceof Fo&&r instanceof Fo?Ji(n.elements,r.elements,_n):n instanceof tu&&r instanceof tu?_n(n.yt,r.yt):n instanceof eu&&r instanceof eu}(t.transform,e.transform)}class GR{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ll(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zu{}function JE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wp(t.key,ln.none()):new ha(t.key,t.data,ln.none());{const n=t.data,r=Tt.empty();let i=new ze(ct.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Dr(t.key,r,new Gt(i.toArray()),ln.none())}}function QR(t,e,n){t instanceof ha?function(r,i,s){const o=r.value.clone(),a=jy(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(r,i,s){if(!ll(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=jy(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(ZE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function to(t,e,n,r){return t instanceof ha?function(i,s,o,a){if(!ll(i.precondition,s))return o;const l=i.value.clone(),u=By(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(i,s,o,a){if(!ll(i.precondition,s))return o;const l=By(i.fieldTransforms,a,s),u=s.data;return u.setAll(ZE(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ll(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function YR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=GE(r.transform,i||null);s!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,s))}return n||null}function Vy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ji(n,r,(i,s)=>KR(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ha extends Zu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dr extends Zu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ZE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jy(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,qR(o,a,n[i]))}return r}function By(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,WR(s,o,e))}return r}class Wp extends Zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XR extends Zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class JR{constructor(e){this.count=e}}/**
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
 */var Oe,ie;function ZR(t){switch(t){default:return Y();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function eS(t){if(t===void 0)return Vn("GRPC error has no .code"),k.UNKNOWN;switch(t){case Oe.OK:return k.OK;case Oe.CANCELLED:return k.CANCELLED;case Oe.UNKNOWN:return k.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return k.INTERNAL;case Oe.UNAVAILABLE:return k.UNAVAILABLE;case Oe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Oe.NOT_FOUND:return k.NOT_FOUND;case Oe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Oe.ABORTED:return k.ABORTED;case Oe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Oe.DATA_LOSS:return k.DATA_LOSS;default:return Y()}}(ie=Oe||(Oe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return UE(this.inner)}size(){return this.innerSize}}/**
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
 */const eN=new Ve(V.comparator);function Bn(){return eN}const tS=new Ve(V.comparator);function Us(...t){let e=tS;for(const n of t)e=e.insert(n.key,n);return e}function nS(t){let e=tS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Br(){return no()}function rS(){return no()}function no(){return new fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const tN=new Ve(V.comparator),nN=new ze(V.comparator);function te(...t){let e=nN;for(const n of t)e=e.add(n);return e}const rN=new ze(ce);function iS(){return rN}/**
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
 */class ec{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ec(ee.min(),i,iS(),Bn(),te())}}class da{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new da(r,n,te(),te(),te())}}/**
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
 */class ul{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class sS{constructor(e,n){this.targetId=e,this.At=n}}class oS{constructor(e,n,r=mt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Hy{constructor(){this.Rt=0,this.bt=qy(),this.Pt=mt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=te(),n=te(),r=te();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new da(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=qy()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class iN{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Bn(),this.qt=Wy(),this.Kt=new ze(ce)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Yd(s))if(r===0){const o=new V(s.path);this.jt(n,o,et.newNoDocument(o,ee.min()))}else ve(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Yd(a.target)){const l=new V(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,et.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=te();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new ec(e,n,this.Kt,this.Ut,r);return this.Ut=Bn(),this.qt=Wy(),this.Kt=new ze(ce),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Hy,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ze(ce),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Hy),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Wy(){return new Ve(V.comparator)}function qy(){return new Ve(V.comparator)}/**
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
 */const sN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),oN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class aN{constructor(e,n){this.databaseId=e,this.gt=n}}function nu(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aS(t,e){return t.gt?e.toBase64():e.toUint8Array()}function lN(t,e){return nu(t,e.toTimestamp())}function On(t){return ve(!!t),ee.fromTimestamp(function(e){const n=kr(e);return new Ue(n.seconds,n.nanos)}(t))}function qp(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function lS(t){const e=Ie.fromString(t);return ve(hS(e)),e}function Zd(t,e){return qp(t.databaseId,e.path)}function xh(t,e){const n=lS(e);if(n.get(1)!==t.databaseId.projectId)throw new z(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(uS(n))}function ef(t,e){return qp(t.databaseId,e)}function uN(t){const e=lS(t);return e.length===4?Ie.emptyPath():uS(e)}function tf(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uS(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ky(t,e,n){return{name:Zd(t,e),fields:n.value.mapValue.fields}}function cN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(ve(u===void 0||typeof u=="string"),mt.fromBase64String(u||"")):(ve(u===void 0||u instanceof Uint8Array),mt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?k.UNKNOWN:eS(l.code);return new z(u,l.message||"")}(o);n=new oS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=xh(t,r.document.name),s=On(r.document.updateTime),o=new Tt({mapValue:{fields:r.document.fields}}),a=et.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ul(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=xh(t,r.document),s=r.readTime?On(r.readTime):ee.min(),o=et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ul([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=xh(t,r.document),s=r.removedTargetIds||[];n=new ul([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new JR(i),o=r.targetId;n=new sS(o,s)}}return n}function hN(t,e){let n;if(e instanceof ha)n={update:Ky(t,e.key,e.value)};else if(e instanceof Wp)n={delete:Zd(t,e.key)};else if(e instanceof Dr)n={update:Ky(t,e.key,e.data),updateMask:SN(e.fieldMask)};else{if(!(e instanceof XR))return Y();n={verify:Zd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof eu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Mo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Fo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof tu)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:lN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function dN(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?On(r.updateTime):On(i);return s.isEqual(ee.min())&&(s=On(i)),new GR(s,r.transformResults||[])}(n,e))):[]}function fN(t,e){return{documents:[ef(t,e.path)]}}function pN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ef(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ef(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Ly(h.value))return{unaryFilter:{field:yi(h.field),op:"IS_NAN"}};if(Oy(h.value))return{unaryFilter:{field:yi(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Ly(h.value))return{unaryFilter:{field:yi(h.field),op:"IS_NOT_NAN"}};if(Oy(h.value))return{unaryFilter:{field:yi(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yi(h.field),op:vN(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:yi(c.field),direction:yN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Gu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function mN(t){let e=uN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=cS(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new eo(bi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Gu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Zl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Zl(d,h)}(n.endAt)),FR(e,i,o,s,a,"F",l,u)}function gN(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function cS(t){return t?t.unaryFilter!==void 0?[EN(t)]:t.fieldFilter!==void 0?[wN(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>cS(e)).reduce((e,n)=>e.concat(n)):Y():[]}function yN(t){return sN[t]}function vN(t){return oN[t]}function yi(t){return{fieldPath:t.canonicalString()}}function bi(t){return ct.fromServerFormat(t.fieldPath)}function wN(t){return Ct.create(bi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}function EN(t){switch(t.unaryFilter.op){case"IS_NAN":const e=bi(t.unaryFilter.field);return Ct.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=bi(t.unaryFilter.field);return Ct.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=bi(t.unaryFilter.field);return Ct.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=bi(t.unaryFilter.field);return Ct.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}function SN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class _N{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&QR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=to(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=to(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=rS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=JE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Ji(this.mutations,e.mutations,(n,r)=>Vy(n,r))&&Ji(this.baseMutations,e.baseMutations,(n,r)=>Vy(n,r))}}class Kp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length);let i=tN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Kp(e,n,r,i)}}/**
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
 */class IN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Kr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=mt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class kN{constructor(e){this.re=e}}function TN(t){const e=mN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xd(e,e.limit,"L"):e}/**
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
 */class xN{constructor(){this.Ye=new CN}addToCollectionParentIndex(e,n){return this.Ye.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Ir.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class CN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(Ie.comparator)).toArray()}}/**
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
 */class ts{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ts(0)}static vn(){return new ts(-1)}}/**
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
 */class AN{constructor(){this.changes=new fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class RN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class NN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&to(r.mutation,i,Gt.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Br();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Us();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Bn();const o=no(),a=no();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Dr)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),to(c.mutation,u,c.mutation.getFieldMask(),Ue.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new RN(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=no();let i=new Ve((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Gt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=rS();c.forEach(d=>{if(!s.has(d)){const m=JE(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return V.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):VR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(Br());let a=-1,l=s;return o.next(u=>x.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?x.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,te())).next(c=>({batchId:a,changes:nS(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=Us();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Us();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(u,c){return new Qu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,et.newInvalidDocument(u)))});let o=Us();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&to(u.mutation,l,Gt.empty(),Ue.now()),Hp(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):x.resolve(et.newInvalidDocument(n))}}/**
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
 */class bN{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return x.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:On(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:TN(r.bundledQuery),readTime:On(r.readTime)}}(n)),x.resolve()}}/**
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
 */class DN{constructor(){this.overlays=new Ve(V.comparator),this.es=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Br();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=Br(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ve((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Br(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Br(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return x.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new IN(n,r));let s=this.es.get(n);s===void 0&&(s=te(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class Gp{constructor(){this.ns=new ze(Be.ss),this.rs=new ze(Be.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Be(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Be(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new V(new Ie([])),r=new Be(n,e),i=new Be(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new V(new Ie([])),r=new Be(n,e),i=new Be(n,e+1);let s=te();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Be(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return V.comparator(e.key,n.key)||ce(e._s,n._s)}static os(e,n){return ce(e._s,n._s)||V.comparator(e.key,n.key)}}/**
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
 */class PN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ze(Be.ss)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _N(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Be(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(ce);return n.forEach(i=>{const s=new Be(i,0),o=new Be(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),x.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Be(new V(s),0);let a=new ze(ce);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),x.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return x.forEach(n.mutations,i=>{const s=new Be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Be(n,0),i=this.gs.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ON{constructor(e){this.Es=e,this.docs=new Ve(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),x.resolve(r)}getAllFromCollection(e,n,r){let i=Bn();const s=new V(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||SR(ER(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,i){Y()}As(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LN(this)}getSize(e){return x.resolve(this.size)}}class LN extends AN{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class $N{constructor(e){this.persistence=e,this.Rs=new fs(n=>jp(n),Bp),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Gp,this.targetCount=0,this.vs=ts.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),x.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Dn(n),x.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Ps.containsKey(n))}}/**
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
 */class MN{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new zp(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new $N(this),this.indexManager=new xN,this.remoteDocumentCache=function(r){return new ON(r)}(r=>this.referenceDelegate.xs(r)),this.It=new kN(n),this.Ns=new bN(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new PN(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new FN(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return x.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class FN extends IR{constructor(e){super(),this.currentSequenceNumber=e}}class Qp{constructor(e){this.persistence=e,this.Fs=new Gp,this.$s=null}static Bs(e){return new Qp(e)}get Ls(){if(this.$s)return this.$s;throw Y()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),x.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ls,r=>{const i=V.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return x.or([()=>x.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Yp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Yp(e,n.fromCache,r,i)}}/**
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
 */class UN{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Uy(n))return x.resolve(null);let r=jn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xd(n,null,"F"),r=jn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Xd(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return Uy(n)||i.isEqual(ee.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(Ny()<=ae.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jd(n)),this.Bi(e,o,n,wR(i,-1)))})}Fi(e,n){let r=new ze(WE(e));return n.forEach((i,s)=>{Hp(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return Ny()<=ae.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Jd(n)),this.Ni.getDocumentsMatchingQuery(e,n,Ir.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class zN{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Ve(ce),this.qi=new fs(s=>jp(s),Bp),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NN(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function VN(t,e,n,r){return new zN(t,e,n,r)}async function dS(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function jN(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=x.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(g=>{const v=l.docVersions.get(m);ve(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=te();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function fS(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function BN(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(mt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(g,v,S){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,m,c)&&a.push(n.Cs.updateTargetData(s,m))});let l=Bn(),u=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(HN(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(ee.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function HN(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function WN(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qN(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Kr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function nf(t,e,n){const r=X(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ca(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Gy(t,e,n){const r=X(t);let i=ee.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=X(a),h=c.qi.get(u);return h!==void 0?x.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,jn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:te())).next(a=>(KN(r,jR(e),a),{documents:a,Hi:s})))}function KN(t,e,n){let r=t.Ki.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class Qy{constructor(){this.activeTargetIds=iS()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GN{constructor(){this.Lr=new Qy,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Qy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QN{qr(e){}shutdown(){}}/**
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
 */class Yy{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const YN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class XN{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class JN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);U("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(U("RestConnection","Received: ",l),l),l=>{throw Kd("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ds,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=YN[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new uR;a.setWithCredentials(!0),a.listenOnce(oR.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case Th.NO_ERROR:const c=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(c)),s(c);break;case Th.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new z(k.DEADLINE_EXCEEDED,"Request time out"));break;case Th.HTTP_ERROR:const h=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=(u=d)===null||u===void 0?void 0:u.error;if(m&&m.status&&m.message){const g=function(v){const S=v.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(S)>=0?S:k.UNKNOWN}(m.status);o(new z(g,m.message))}else o(new z(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new z(k.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=iR(),o=sR(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new lR({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");U("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new XN({Hr:g=>{h?U("Connection","Not sending because WebChannel is closed:",g):(c||(U("Connection","Opening WebChannel transport."),u.open(),c=!0),U("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),m=(g,v,S)=>{g.listen(v,p=>{try{S(p)}catch(f){setTimeout(()=>{throw f},0)}})};return m(u,Ba.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),m(u,Ba.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),d.io())}),m(u,Ba.EventType.ERROR,g=>{h||(h=!0,Kd("Connection","WebChannel transport errored:",g),d.io(new z(k.UNAVAILABLE,"The operation could not be completed")))}),m(u,Ba.EventType.MESSAGE,g=>{var v;if(!h){const S=g.data[0];ve(!!S);const p=S,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){U("Connection","WebChannel received error:",f);const y=f.status;let _=function(R){const D=Oe[R];if(D!==void 0)return eS(D)}(y),I=f.message;_===void 0&&(_=k.INTERNAL,I="Unknown error status: "+y+" with message "+f.message),h=!0,d.io(new z(_,I)),u.close()}else U("Connection","WebChannel received:",S),d.ro(S)}}),m(o,aR.STAT_EVENT,g=>{g.stat===Ay.PROXY?U("Connection","Detected buffering proxy"):g.stat===Ay.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Ch(){return typeof document<"u"?document:null}/**
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
 */function tc(t){return new aN(t,!0)}class pS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class mS{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new pS(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new z(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZN extends mS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=cN(this.It,e),r=function(i){if(!("targetChange"in i))return ee.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ee.min():s.readTime?On(s.readTime):ee.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=tf(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Yd(a)?{documents:fN(i,a)}:{query:pN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=aS(i,s.resumeToken):s.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=nu(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=gN(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=tf(this.It),n.removeTarget=e,this.Bo(n)}}class eb extends mS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=dN(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.Zo(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=tf(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hN(this.It,r))};this.Bo(n)}}/**
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
 */class tb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new z(k.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(k.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(k.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class nb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class rb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{pi(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=X(a);l._u.add(4),await fa(l),l.gu.set("Unknown"),l._u.delete(4),await nc(l)}(this))})}),this.gu=new nb(r,i)}}async function nc(t){if(pi(t))for(const e of t.wu)await e(!0)}async function fa(t){for(const e of t.wu)await e(!1)}function gS(t,e){const n=X(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Zp(n)?Jp(n):ps(n).ko()&&Xp(n,e))}function yS(t,e){const n=X(t),r=ps(n);n.du.delete(e),r.ko()&&vS(n,e),n.du.size===0&&(r.ko()?r.Fo():pi(n)&&n.gu.set("Unknown"))}function Xp(t,e){t.yu.Mt(e.targetId),ps(t).zo(e)}function vS(t,e){t.yu.Mt(e),ps(t).Ho(e)}function Jp(t){t.yu=new iN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),ps(t).start(),t.gu.uu()}function Zp(t){return pi(t)&&!ps(t).No()&&t.du.size>0}function pi(t){return X(t)._u.size===0}function wS(t){t.yu=void 0}async function ib(t){t.du.forEach((e,n)=>{Xp(t,e)})}async function sb(t,e){wS(t),Zp(t)?(t.gu.hu(e),Jp(t)):t.gu.set("Unknown")}async function ob(t,e,n){if(t.gu.set("Online"),e instanceof oS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ru(t,r)}else if(e instanceof ul?t.yu.Gt(e):e instanceof sS?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(ee.min()))try{const r=await fS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(mt.EMPTY_BYTE_STRING,l.snapshotVersion)),vS(i,a);const u=new Kr(l.target,a,1,l.sequenceNumber);Xp(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await ru(t,r)}}async function ru(t,e,n){if(!ca(e))throw e;t._u.add(1),await fa(t),t.gu.set("Offline"),n||(n=()=>fS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await nc(t)})}function ES(t,e){return e().catch(n=>ru(t,n,e))}async function rc(t){const e=X(t),n=Tr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;ab(e);)try{const i=await WN(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,lb(e,i)}catch(i){await ru(e,i)}SS(e)&&_S(e)}function ab(t){return pi(t)&&t.fu.length<10}function lb(t,e){t.fu.push(e);const n=Tr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function SS(t){return pi(t)&&!Tr(t).No()&&t.fu.length>0}function _S(t){Tr(t).start()}async function ub(t){Tr(t).eu()}async function cb(t){const e=Tr(t);for(const n of t.fu)e.Xo(n.mutations)}async function hb(t,e,n){const r=t.fu.shift(),i=Kp.from(r,e,n);await ES(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await rc(t)}async function db(t,e){e&&Tr(t).Yo&&await async function(n,r){if(i=r.code,ZR(i)&&i!==k.ABORTED){const s=n.fu.shift();Tr(n).Mo(),await ES(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await rc(n)}var i}(t,e),SS(t)&&_S(t)}async function Xy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=pi(n);n._u.add(3),await fa(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await nc(n)}async function fb(t,e){const n=X(t);e?(n._u.delete(2),await nc(n)):e||(n._u.add(2),await fa(n),n.gu.set("Unknown"))}function ps(t){return t.pu||(t.pu=function(e,n,r){const i=X(e);return i.su(),new ZN(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:ib.bind(null,t),Zr:sb.bind(null,t),Wo:ob.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Zp(t)?Jp(t):t.gu.set("Unknown")):(await t.pu.stop(),wS(t))})),t.pu}function Tr(t){return t.Iu||(t.Iu=function(e,n,r){const i=X(e);return i.su(),new eb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:ub.bind(null,t),Zr:db.bind(null,t),tu:cb.bind(null,t),Zo:hb.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await rc(t)):(await t.Iu.stop(),t.fu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class em{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new em(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tm(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),ca(t))return new z(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=Us(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Jy{constructor(){this.Tu=new Ve(V.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):Y():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ns{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ns(e,n,Vi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class pb{constructor(){this.Au=void 0,this.listeners=[]}}class mb{constructor(){this.queries=new fs(e=>HE(e),Xu),this.onlineState="Unknown",this.Ru=new Set}}async function nm(t,e){const n=X(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new pb),i)try{s.Au=await n.onListen(r)}catch(o){const a=tm(o,`Initialization of query '${Jd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&im(n)}async function rm(t,e){const n=X(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function gb(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&im(n)}function yb(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function im(t){t.Ru.forEach(e=>{e.next()})}class sm{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class IS{constructor(e){this.key=e}}class kS{constructor(e){this.key=e}}class vb{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=te(),this.mutatedKeys=te(),this.Gu=WE(e),this.Qu=new Vi(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Jy,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=Hp(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;d&&m?d.data.isEqual(m.data)?g!==v&&(r.track({type:3,doc:m}),S=!0):this.Hu(d,m)||(r.track({type:2,doc:m}),S=!0,(l&&this.Gu(m,l)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),S=!0):d&&!m&&(r.track({type:1,doc:d}),S=!0,(l||u)&&(a=!0)),S&&(m?(o=o.add(m),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(h,d){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return m(h)-m(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new ns(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Jy,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=te(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new kS(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new IS(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=te();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ns.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class wb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Eb{constructor(e){this.key=e,this.nc=!1}}class Sb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new fs(a=>HE(a),Xu),this.rc=new Map,this.oc=new Set,this.uc=new Ve(V.comparator),this.cc=new Map,this.ac=new Gp,this.hc={},this.lc=new Map,this.fc=ts.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function _b(t,e){const n=Db(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await qN(n.localStore,jn(e));n.isPrimaryClient&&gS(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Ib(n,e,r,a==="current",o.resumeToken)}return i}async function Ib(t,e,n,r,i){t._c=(h,d,m)=>async function(g,v,S,p){let f=v.view.Wu(S);f.$i&&(f=await Gy(g.localStore,v.query,!1).then(({documents:I})=>v.view.Wu(I,f)));const y=p&&p.targetChanges.get(v.targetId),_=v.view.applyChanges(f,g.isPrimaryClient,y);return ev(g,v.targetId,_.Xu),_.snapshot}(t,h,d,m);const s=await Gy(t.localStore,e,!0),o=new vb(e,s.Hi),a=o.Wu(s.documents),l=da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);ev(t,n,u.Xu);const c=new wb(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function kb(t,e){const n=X(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Xu(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await nf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),yS(n.remoteStore,r.targetId),rf(n,r.targetId)}).catch(ua)):(rf(n,r.targetId),await nf(n.localStore,r.targetId,!0))}async function Tb(t,e,n){const r=Pb(t);try{const i=await function(s,o){const a=X(s),l=Ue.now(),u=o.reduce((d,m)=>d.add(m.key),te());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=Bn(),g=te();return a.Gi.getEntries(d,u).next(v=>{m=v,m.forEach((S,p)=>{p.isValidDocument()||(g=g.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{c=v;const S=[];for(const p of o){const f=YR(p,c.get(p.key).overlayedDocument);f!=null&&S.push(new Dr(p.key,f,jE(f.value.mapValue),ln.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,S,o)}).next(v=>{h=v;const S=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,S)})}).then(()=>({batchId:h.batchId,changes:nS(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Ve(ce)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await pa(r,i.changes),await rc(r.remoteStore)}catch(i){const s=tm(i,"Failed to persist write");n.reject(s)}}async function TS(t,e){const n=X(t);try{const r=await BN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?ve(o.nc):i.removedDocuments.size>0&&(ve(o.nc),o.nc=!1))}),await pa(n,r,e)}catch(r){await ua(r)}}function Zy(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=X(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&im(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xb(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Ve(V.comparator);o=o.insert(s,et.newNoDocument(s,ee.min()));const a=te().add(s),l=new ec(ee.min(),new Map,new ze(ce),o,a);await TS(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),om(r)}else await nf(r.localStore,e,!1).then(()=>rf(r,e,n)).catch(ua)}async function Cb(t,e){const n=X(t),r=e.batch.batchId;try{const i=await jN(n.localStore,e);CS(n,r,null),xS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pa(n,i)}catch(i){await ua(i)}}async function Ab(t,e,n){const r=X(t);try{const i=await function(s,o){const a=X(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ve(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);CS(r,e,n),xS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pa(r,i)}catch(i){await ua(i)}}function xS(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function CS(t,e,n){const r=X(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function rf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||AS(t,r)})}function AS(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(yS(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),om(t))}function ev(t,e,n){for(const r of n)r instanceof IS?(t.ac.addReference(r.key,e),Rb(t,r)):r instanceof kS?(U("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||AS(t,r.key)):Y()}function Rb(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(U("SyncEngine","New document in limbo: "+n),t.oc.add(r),om(t))}function om(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new V(Ie.fromString(e)),r=t.fc.next();t.cc.set(r,new Eb(n)),t.uc=t.uc.insert(n,r),gS(t.remoteStore,new Kr(jn(Yu(n.path)),r,2,zp.at))}}async function pa(t,e,n){const r=X(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Yp.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=X(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>x.forEach(l,h=>x.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>x.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ca(c))throw c;U("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),m=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(m);u.Ui=u.Ui.insert(h,g)}}}(r.localStore,s))}async function Nb(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await dS(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new z(k.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pa(n,r.ji)}}function bb(t,e){const n=X(t),r=n.cc.get(e);if(r&&r.nc)return te().add(r.key);{let i=te();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Db(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=TS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xb.bind(null,e),e.sc.Wo=gb.bind(null,e.eventManager),e.sc.wc=yb.bind(null,e.eventManager),e}function Pb(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Cb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ab.bind(null,e),e}class Ob{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=tc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return VN(this.persistence,new UN,e.initialUser,this.It)}yc(e){return new MN(Qp.Bs,this.It)}gc(e){return new GN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Lb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nb.bind(null,this.syncEngine),await fb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mb}createDatastore(e){const n=tc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new JN(i));var i;return function(s,o,a,l){return new tb(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Zy(this.syncEngine,a,0),o=Yy.C()?new Yy:new QN,new rb(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new Sb(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);U("RemoteStore","RemoteStore shutting down."),n._u.add(5),await fa(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function RS(t,e,n){if(!n)throw new z(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $b(t,e,n,r){if(e===!0&&r===!0)throw new z(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tv(t){if(!V.isDocumentKey(t))throw new z(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function nv(t){if(V.isDocumentKey(t))throw new z(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function am(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=am(t);throw new z(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const rv=new Map;class iv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,$b("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ic{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new cR;switch(n.type){case"gapi":const r=n.client;return new pR(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=rv.get(e);n&&(U("ComponentProvider","Removing Datastore"),rv.delete(e),n.terminate())}(this),Promise.resolve()}}function Mb(t,e,n,r={}){var i;const s=(t=Qt(t,ic))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Kd("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=lt.MOCK_USER;else{o=Cx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new z(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new lt(l)}t._authCredentials=new hR(new ME(o,a))}}/**
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
 */class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class ma{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ma(this.firestore,e,this._query)}}class vr extends ma{constructor(e,n,r){super(e,n,Yu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new V(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function Fb(t,e,...n){if(t=De(t),RS("collection","path",e),t instanceof ic){const r=Ie.fromString(e,...n);return nv(r),new vr(t,null,r)}{if(!(t instanceof bt||t instanceof vr))throw new z(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return nv(r),new vr(t.firestore,null,r)}}function zs(t,e,...n){if(t=De(t),arguments.length===1&&(e=FE.R()),RS("doc","path",e),t instanceof ic){const r=Ie.fromString(e,...n);return tv(r),new bt(t,null,new V(r))}{if(!(t instanceof bt||t instanceof vr))throw new z(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return tv(r),new bt(t.firestore,t instanceof vr?t.converter:null,new V(r))}}/**
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
 */class lm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Ub{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=FE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=tm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zb(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Vb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jb(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Xy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Xy(e.remoteStore,s)),t.onlineComponents=e}async function jb(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await zb(t,new Ob)),t.offlineComponents}async function NS(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await Vb(t,new Lb)),t.onlineComponents}function Bb(t){return NS(t).then(e=>e.syncEngine)}async function iu(t){const e=await NS(t),n=e.eventManager;return n.onListen=_b.bind(null,e.syncEngine),n.onUnlisten=kb.bind(null,e.syncEngine),n}function Hb(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new lm({next:h=>{s.enqueueAndForget(()=>rm(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new z(k.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new z(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new sm(Yu(o.path),u,{includeMetadataChanges:!0,Nu:!0});return nm(i,c)}(await iu(t),t.asyncQueue,e,n,r)),r.promise}function Wb(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new lm({next:h=>{s.enqueueAndForget(()=>rm(i,c)),h.fromCache&&a.source==="server"?l.reject(new z(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new sm(o,u,{includeMetadataChanges:!0,Nu:!0});return nm(i,c)}(await iu(t),t.asyncQueue,e,n,r)),r.promise}class qb{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new pS(this,"async_queue_retry"),this.Wc=()=>{const n=Ch();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Ch();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Pn;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ca(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=em.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&Y()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function sv(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class xr extends ic{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new qb,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bS(this),this._firestoreClient.terminate()}}function Kb(t,e){const n=typeof t=="object"?t:fp(),r=typeof t=="string"?t:e||"(default)",i=hi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=kx("firestore");s&&Mb(i,...s)}return i}function sc(t){return t._firestoreClient||bS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bS(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new TR(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ub(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rs(mt.fromBase64String(e))}catch(n){throw new z(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rs(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class oc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class um{constructor(e){this._methodName=e}}/**
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
 */class cm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const Gb=/^__.*__$/;class Qb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ha(e,this.data,n,this.fieldTransforms)}}class DS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function PS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class hm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new hm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return su(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(PS(this.sa)&&Gb.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Yb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||tc(e)}da(e,n,r,i=!1){return new hm({sa:e,methodName:n,fa:r,path:ct.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function OS(t){const e=t._freezeSettings(),n=tc(t._databaseId);return new Yb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xb(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);dm("Data must be an object, but it was:",o,r);const a=LS(r,o);let l,u;if(s.merge)l=new Gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=sf(e,h,n);if(!o.contains(d))throw new z(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);MS(c,d)||c.push(d)}l=new Gt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Qb(new Tt(a),l,u)}class ac extends um{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ac}}function Jb(t,e,n,r){const i=t.da(1,e,n);dm("Data must be an object, but it was:",i,r);const s=[],o=Tt.empty();fi(r,(l,u)=>{const c=fm(e,l,n);u=De(u);const h=i.ca(c);if(u instanceof ac)s.push(c);else{const d=lc(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Gt(s);return new DS(o,a,i.fieldTransforms)}function Zb(t,e,n,r,i,s){const o=t.da(1,e,n),a=[sf(e,r,n)],l=[i];if(s.length%2!=0)throw new z(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(sf(e,s[d])),l.push(s[d+1]);const u=[],c=Tt.empty();for(let d=a.length-1;d>=0;--d)if(!MS(u,a[d])){const m=a[d];let g=l[d];g=De(g);const v=o.ca(m);if(g instanceof ac)u.push(m);else{const S=lc(g,v);S!=null&&(u.push(m),c.set(m,S))}}const h=new Gt(u);return new DS(c,h,o.fieldTransforms)}function lc(t,e){if($S(t=De(t)))return dm("Unsupported field value:",e,t),LS(t,e);if(t instanceof um)return function(n,r){if(!PS(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=lc(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=De(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return HR(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ue.fromDate(n);return{timestampValue:nu(r.It,i)}}if(n instanceof Ue){const i=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:nu(r.It,i)}}if(n instanceof cm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof rs)return{bytesValue:aS(r.It,n._byteString)};if(n instanceof bt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${am(n)}`)}(t,e)}function LS(t,e){const n={};return UE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fi(t,(r,i)=>{const s=lc(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function $S(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof cm||t instanceof rs||t instanceof bt||t instanceof um)}function dm(t,e,n){if(!$S(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=am(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function sf(t,e,n){if((e=De(e))instanceof oc)return e._internalPath;if(typeof e=="string")return fm(t,e);throw su("Field path arguments must be of type string or ",t,!1,void 0,n)}const eD=new RegExp("[~\\*/\\[\\]]");function fm(t,e,n){if(e.search(eD)>=0)throw su(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oc(...e.split("."))._internalPath}catch{throw su(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function su(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(k.INVALID_ARGUMENT,a+t+l)}function MS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class FS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(US("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tD extends FS{data(){return super.data()}}function US(t,e){return typeof e=="string"?fm(t,e):e instanceof oc?e._internalPath:e._delegate._internalPath}/**
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
 */function zS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class nD{convertValue(e,n="none"){switch(ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const r={};return fi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new cm(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=VE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Po(e));default:return null}}convertTimestamp(e){const n=kr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ve(hS(r));const i=new Oo(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||Vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class VS extends FS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(US("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cl extends VS{data(e={}){return super.data(e)}}class jS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cl(this._firestore,this._userDataWriter,r.key,r,new Vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new cl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Vs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new cl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Vs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:iD(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function sD(t){t=Qt(t,bt);const e=Qt(t.firestore,xr);return Hb(sc(e),t._key).then(n=>BS(e,t,n))}class pm extends nD{constructor(e){super(),this.firestore=e}convertBytes(e){return new rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function oD(t){t=Qt(t,ma);const e=Qt(t.firestore,xr),n=sc(e),r=new pm(e);return zS(t._query),Wb(n,t._query).then(i=>new jS(e,r,t,i))}function aD(t,e,n,...r){t=Qt(t,bt);const i=Qt(t.firestore,xr),s=OS(i);let o;return o=typeof(e=De(e))=="string"||e instanceof oc?Zb(s,"updateDoc",t._key,e,n,r):Jb(s,"updateDoc",t._key,e),mm(i,[o.toMutation(t._key,ln.exists(!0))])}function lD(t){return mm(Qt(t.firestore,xr),[new Wp(t._key,ln.none())])}function uD(t,e){const n=Qt(t.firestore,xr),r=zs(t),i=rD(t.converter,e);return mm(n,[Xb(OS(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ln.exists(!1))]).then(()=>r)}function cD(t,...e){var n,r,i;t=De(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||sv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(sv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof bt)u=Qt(t.firestore,xr),c=Yu(t._key.path),l={next:h=>{e[o]&&e[o](BS(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Qt(t,ma);u=Qt(h.firestore,xr),c=h._query;const d=new pm(u);l={next:m=>{e[o]&&e[o](new jS(u,d,h,m))},error:e[o+1],complete:e[o+2]},zS(t._query)}return function(h,d,m,g){const v=new lm(g),S=new sm(d,v,m);return h.asyncQueue.enqueueAndForget(async()=>nm(await iu(h),S)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>rm(await iu(h),S))}}(sc(u),c,a,l)}function mm(t,e){return function(n,r){const i=new Pn;return n.asyncQueue.enqueueAndForget(async()=>Tb(await Bb(n),r,i)),i.promise}(sc(t),e)}function BS(t,e,n){const r=n.docs.get(e._key),i=new pm(t);return new VS(t,i,e._key,r,new Vs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ds=n})(Zo),Sn(new cn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new xr(new dR(n.getProvider("auth-internal")),new gR(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),qt(Ry,"3.7.3",t),qt(Ry,"3.7.3","esm2017")})();function gm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function HS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hD=HS,WS=new ci("auth","Firebase",HS());/**
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
 */const ov=new Nu("@firebase/auth");function hl(t,...e){ov.logLevel<=ae.ERROR&&ov.error(`Auth (${Zo}): ${t}`,...e)}/**
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
 */function hn(t,...e){throw ym(t,...e)}function wn(t,...e){return ym(t,...e)}function dD(t,e,n){const r=Object.assign(Object.assign({},hD()),{[e]:n});return new ci("auth","Firebase",r).create(e,{appName:t.name})}function ym(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return WS.create(t,...e)}function j(t,e,...n){if(!t)throw ym(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hl(e),new Error(e)}function Hn(t,e){t||Rn(e)}/**
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
 */const av=new Map;function Nn(t){Hn(t instanceof Function,"Expected a class definition");let e=av.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,av.set(t,e),e)}/**
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
 */function fD(t,e){const n=hi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(To(s,e!=null?e:{}))return i;hn(i,"already-initialized")}return n.initialize({options:e})}function pD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mD(){return lv()==="http:"||lv()==="https:"}function lv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mD()||tw()||"connection"in navigator)?navigator.onLine:!0}function yD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ga{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=gx()||yx()}get(){return gD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vm(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class qS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wD=new ga(3e4,6e4);function ms(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gs(t,e,n,r,i={}){return KS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Jo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),qS.fetch()(GS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function KS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vD),e);try{const i=new ED(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw qa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw qa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw qa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dD(t,c,u);hn(t,c)}}catch(i){if(i instanceof dn)throw i;hn(t,"network-request-failed")}}async function ya(t,e,n,r,i={}){const s=await gs(t,e,n,r,i);return"mfaPendingCredential"in s&&hn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function GS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?vm(t.config,i):`${t.config.apiScheme}://${i}`}class ED{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),wD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function SD(t,e){return gs(t,"POST","/v1/accounts:delete",e)}async function _D(t,e){return gs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ro(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ID(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=wm(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ro(Ah(i.auth_time)),issuedAtTime:ro(Ah(i.iat)),expirationTime:ro(Ah(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ah(t){return Number(t)*1e3}function wm(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return hl("JWT malformed, contained fewer than 3 sections"),null;try{const s=ew(r);return s?JSON.parse(s):(hl("Failed to decode base64 JWT payload"),null)}catch(s){return hl("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function kD(t){const e=wm(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Uo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&TD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function TD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class xD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class QS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ro(this.lastLoginAt),this.creationTime=ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ou(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Uo(t,_D(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?RD(s.providerUserInfo):[],a=AD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new QS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function CD(t){const e=De(t);await ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function RD(t){return t.map(e=>{var{providerId:n}=e,r=gm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ND(t,e){const n=await KS(t,{},async()=>{const r=Jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=GS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ND(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zo;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zo,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
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
 */function Qn(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=gm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new QS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ID(this,e)}reload(){return CD(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ou(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Uo(this,SD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:_,isAnonymous:I,providerData:R,stsTokenManager:D}=n;j(y&&D,e,"internal-error");const P=zo.fromJSON(this.name,D);j(typeof y=="string",e,"internal-error"),Qn(h,e.name),Qn(d,e.name),j(typeof _=="boolean",e,"internal-error"),j(typeof I=="boolean",e,"internal-error"),Qn(m,e.name),Qn(g,e.name),Qn(v,e.name),Qn(S,e.name),Qn(p,e.name),Qn(f,e.name);const Z=new Gr({uid:y,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:I,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:f});return R&&Array.isArray(R)&&(Z.providerData=R.map(B=>Object.assign({},B))),S&&(Z._redirectEventId=S),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new zo;i.updateFromServerResponse(n);const s=new Gr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ou(s),s}}/**
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
 */class YS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}YS.type="NONE";const uv=YS;/**
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
 */function dl(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=dl(this.userKey,i.apiKey,s),this.fullPersistenceKey=dl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(Nn(uv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nn(uv);const o=dl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Gr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ji(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ji(s,e,r))}}/**
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
 */function cv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ZS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(t_(e))return"Blackberry";if(n_(e))return"Webos";if(Em(e))return"Safari";if((e.includes("chrome/")||JS(e))&&!e.includes("edge/"))return"Chrome";if(e_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function XS(t=pt()){return/firefox\//i.test(t)}function Em(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function JS(t=pt()){return/crios\//i.test(t)}function ZS(t=pt()){return/iemobile/i.test(t)}function e_(t=pt()){return/android/i.test(t)}function t_(t=pt()){return/blackberry/i.test(t)}function n_(t=pt()){return/webos/i.test(t)}function uc(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bD(t=pt()){var e;return uc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DD(){return vx()&&document.documentMode===10}function r_(t=pt()){return uc(t)||e_(t)||n_(t)||t_(t)||/windows phone/i.test(t)||ZS(t)}function PD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function i_(t,e=[]){let n;switch(t){case"Browser":n=cv(pt());break;case"Worker":n=`${cv(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zo}/${r}`}/**
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
 */class LD{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hv(this),this.idTokenSubscription=new hv(this),this.beforeStateQueue=new OD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=WS,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ou(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?De(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function va(t){return De(t)}class hv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dx(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function $D(t,e,n){const r=va(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=s_(e),{host:o,port:a}=MD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||FD()}function s_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MD(t){const e=s_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:dv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:dv(o)}}}function dv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Sm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function UD(t,e){return gs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function zD(t,e){return ya(t,"POST","/v1/accounts:signInWithPassword",ms(t,e))}async function VD(t,e){return gs(t,"POST","/v1/accounts:sendOobCode",ms(t,e))}async function jD(t,e){return VD(t,e)}/**
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
 */async function BD(t,e){return ya(t,"POST","/v1/accounts:signInWithEmailLink",ms(t,e))}async function HD(t,e){return ya(t,"POST","/v1/accounts:signInWithEmailLink",ms(t,e))}/**
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
 */class Vo extends Sm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Vo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return zD(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return BD(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return UD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return HD(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Bi(t,e){return ya(t,"POST","/v1/accounts:signInWithIdp",ms(t,e))}/**
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
 */const WD="http://localhost";class si extends Sm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=gm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bi(e,n)}buildRequest(){const e={requestUri:WD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jo(n)}return e}}/**
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
 */function qD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KD(t){const e=Ls($s(t)).link,n=e?Ls($s(e)).deep_link_id:null,r=Ls($s(t)).deep_link_id;return(r?Ls($s(r)).link:null)||r||n||e||t}class _m{constructor(e){var n,r,i,s,o,a;const l=Ls($s(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=qD((i=l.mode)!==null&&i!==void 0?i:null);j(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=KD(e);try{return new _m(n)}catch{return null}}}/**
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
 */class ys{constructor(){this.providerId=ys.PROVIDER_ID}static credential(e,n){return Vo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_m.parseLink(n);return j(r,"argument-error"),Vo._fromEmailAndCode(e,r.code,r.tenantId)}}ys.PROVIDER_ID="password";ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class o_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wa extends o_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class er extends wa{constructor(){super("facebook.com")}static credential(e){return si._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
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
 */class tr extends wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return si._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
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
 */class nr extends wa{constructor(){super("github.com")}static credential(e){return si._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
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
 */class rr extends wa{constructor(){super("twitter.com")}static credential(e,n){return si._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */async function GD(t,e){return ya(t,"POST","/v1/accounts:signUp",ms(t,e))}/**
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
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gr._fromIdTokenResponse(e,r,i),o=fv(r);return new oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fv(r);return new oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class au extends dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,au.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new au(e,n,r,i)}}function a_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?au._fromErrorAndOperation(t,s,e,r):s})}async function QD(t,e,n=!1){const r=await Uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oi._forOperation(t,"link",r)}/**
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
 */async function YD(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Uo(t,a_(i,s,e,t),n);j(o.idToken,i,"internal-error");const a=wm(o.idToken);j(a,i,"internal-error");const{sub:l}=a;return j(t.uid===l,i,"user-mismatch"),oi._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&hn(i,"user-mismatch"),o}}/**
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
 */async function l_(t,e,n=!1){const r="signIn",i=await a_(t,r,e),s=await oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function XD(t,e){return l_(va(t),e)}/**
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
 */function JD(t,e,n){var r;j(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),j(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(j(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(j(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function ZD(t,e,n){const r=De(t),i={requestType:"PASSWORD_RESET",email:e};n&&JD(r,i,n),await jD(r,i)}async function eP(t,e,n){const r=va(t),i=await GD(r,{returnSecureToken:!0,email:e,password:n}),s=await oi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function tP(t,e,n){return XD(De(t),ys.credential(e,n))}function nP(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function rP(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function iP(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function sP(t){return De(t).signOut()}const lu="__sak";/**
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
 */class u_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lu,"1"),this.storage.removeItem(lu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function oP(){const t=pt();return Em(t)||uc(t)}const aP=1e3,lP=10;class c_ extends u_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oP()&&PD(),this.fallbackToPolling=r_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);DD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}c_.type="LOCAL";const uP=c_;/**
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
 */class h_ extends u_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}h_.type="SESSION";const d_=h_;/**
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
 */class cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await cP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cc.receivers=[];/**
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
 */function Im(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Im("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function dP(t){En().location.href=t}/**
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
 */function f_(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function fP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mP(){return f_()?self:null}/**
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
 */const p_="firebaseLocalStorageDb",gP=1,uu="firebaseLocalStorage",m_="fbase_key";class Ea{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hc(t,e){return t.transaction([uu],e?"readwrite":"readonly").objectStore(uu)}function yP(){const t=indexedDB.deleteDatabase(p_);return new Ea(t).toPromise()}function af(){const t=indexedDB.open(p_,gP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uu,{keyPath:m_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uu)?e(r):(r.close(),await yP(),e(await af()))})})}async function pv(t,e,n){const r=hc(t,!0).put({[m_]:e,value:n});return new Ea(r).toPromise()}async function vP(t,e){const n=hc(t,!1).get(e),r=await new Ea(n).toPromise();return r===void 0?null:r.value}function mv(t,e){const n=hc(t,!0).delete(e);return new Ea(n).toPromise()}const wP=800,EP=3;class g_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await af(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cc._getInstance(mP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fP(),!this.activeServiceWorker)return;this.sender=new hP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await af();return await pv(e,lu,"1"),await mv(e,lu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hc(i,!1).getAll();return new Ea(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}g_.type="LOCAL";const SP=g_;/**
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
 */function _P(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function IP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_P().appendChild(r)})}function kP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ga(3e4,6e4);/**
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
 */function TP(t,e){return e?Nn(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class km extends Sm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xP(t){return l_(t.auth,new km(t),t.bypassAuthState)}function CP(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),YD(n,new km(t),t.bypassAuthState)}async function AP(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),QD(n,new km(t),t.bypassAuthState)}/**
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
 */class y_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xP;case"linkViaPopup":case"linkViaRedirect":return AP;case"reauthViaPopup":case"reauthViaRedirect":return CP;default:hn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RP=new ga(2e3,1e4);class Di extends y_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Di.currentPopupAction&&Di.currentPopupAction.cancel(),Di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Im();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,RP.get())};e()}}Di.currentPopupAction=null;/**
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
 */const NP="pendingRedirect",fl=new Map;class bP extends y_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fl.get(this.auth._key());if(!e){try{const r=await DP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fl.set(this.auth._key(),e)}return this.bypassAuthState||fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DP(t,e){const n=LP(e),r=OP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function PP(t,e){fl.set(t._key(),e)}function OP(t){return Nn(t._redirectPersistence)}function LP(t){return dl(NP,t.config.apiKey,t.name)}async function $P(t,e,n=!1){const r=va(t),i=TP(r,e),o=await new bP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const MP=10*60*1e3;class FP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!v_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MP&&this.cachedEventUids.clear(),this.cachedEventUids.has(gv(e))}saveEventToCache(e){this.cachedEventUids.add(gv(e)),this.lastProcessedEventTime=Date.now()}}function gv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function v_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return v_(t);default:return!1}}/**
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
 */async function zP(t,e={}){return gs(t,"GET","/v1/projects",e)}/**
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
 */const VP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jP=/^https?/;async function BP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zP(t);for(const n of e)try{if(HP(n))return}catch{}hn(t,"unauthorized-domain")}function HP(t){const e=of(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jP.test(n))return!1;if(VP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const WP=new ga(3e4,6e4);function yv(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qP(t){return new Promise((e,n)=>{var r,i,s;function o(){yv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yv(),n(wn(t,"network-request-failed"))},timeout:WP.get()})}if(!((i=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=En().gapi)===null||s===void 0)&&s.load)o();else{const a=kP("iframefcb");return En()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},IP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw pl=null,e})}let pl=null;function KP(t){return pl=pl||qP(t),pl}/**
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
 */const GP=new ga(5e3,15e3),QP="__/auth/iframe",YP="emulator/auth/iframe",XP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZP(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vm(e,YP):`https://${t.config.authDomain}/${QP}`,r={apiKey:e.apiKey,appName:t.name,v:Zo},i=JP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Jo(r).slice(1)}`}async function eO(t){const e=await KP(t),n=En().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:ZP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=En().setTimeout(()=>{s(o)},GP.get());function l(){En().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const tO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nO=500,rO=600,iO="_blank",sO="http://localhost";class vv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oO(t,e,n,r=nO,i=rO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=pt().toLowerCase();n&&(a=JS(u)?iO:n),XS(u)&&(e=e||sO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,g])=>`${d}${m}=${g},`,"");if(bD(u)&&a!=="_self")return aO(e||"",a),new vv(null);const h=window.open(e||"",a,c);j(h,t,"popup-blocked");try{h.focus()}catch{}return new vv(h)}function aO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lO="__/auth/handler",uO="emulator/auth/handler";function wv(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zo,eventId:i};if(e instanceof o_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof wa){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${cO(t)}?${Jo(a).slice(1)}`}function cO({config:t}){return t.emulator?vm(t,uO):`https://${t.authDomain}/${lO}`}/**
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
 */const Rh="webStorageSupport";class hO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=d_,this._completeRedirectFn=$P,this._overrideRedirectResult=PP}async _openPopup(e,n,r,i){var s;Hn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=wv(e,n,r,of(),i);return oO(e,o,Im())}async _openRedirect(e,n,r,i){return await this._originValidation(e),dP(wv(e,n,r,of(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eO(e),r=new FP(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rh,{type:Rh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rh];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return r_()||Em()||uc()}}const dO=hO;var Ev="@firebase/auth",Sv="0.20.11";/**
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
 */class fO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mO(t){Sn(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{j(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i_(t)},c=new LD(a,l,u);return pD(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sn(new cn("auth-internal",e=>{const n=va(e.getProvider("auth").getImmediate());return(r=>new fO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(Ev,Sv,pO(t)),qt(Ev,Sv,"esm2017")}/**
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
 */const gO=5*60,yO=sw("authIdTokenMaxAge")||gO;let _v=null;const vO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yO)return;const i=n==null?void 0:n.token;_v!==i&&(_v=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wO(t=fp()){const e=hi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fD(t,{popupRedirectResolver:dO,persistence:[SP,uP,d_]}),r=sw("authTokenSyncURL");if(r){const s=vO(r);rP(n,s,()=>s(n.currentUser)),nP(n,o=>s(o))}const i=iw("auth");return i&&$D(n,`http://${i}`),n}mO("Browser");const EO="AIzaSyDJLEoAuOr25kvx4s_kJ_997bqyS6L67pc",SO="silvina-silberman-app.firebaseapp.com",_O="silvina-silberman-app",IO="silvina-silberman-app.appspot.com",kO="966120955897",TO="1:966120955897:web:712fc084e3461a4c3b6728",xO="G-L9SXFZSKDC",CO={apiKey:EO,authDomain:SO,projectId:_O,storageBucket:IO,messagingSenderId:kO,appId:TO,measurementId:xO},Tm=uw(CO);iA(Tm);const Rs=Kb(Tm),Ns=wO(Tm),mi=b.exports.createContext();function AO(t){const e=Fb(Rs,"products"),n=async S=>{const p=await oD(e);S(p.docs.map(f=>({...f.data(),id:f.id})))},r=async(S,p)=>{const f=await sD(zs(Rs,"products",p));S(f.data())},i=async S=>{await uD(e,S)},s=async(S,p)=>{const f=zs(Rs,"products",S);await aD(f,p)},o=async S=>{const p=zs(Rs,"products",S);await lD(p)},a=(S,p)=>{cD(zs(Rs,"products","SF"),f=>{console.log("Current data: ",f.data())})},[l,u]=b.exports.useState(null),[c,h]=b.exports.useState(!0),d=async(S,p)=>{await eP(Ns,S,p)},m=(S,p)=>{tP(Ns,S,p)},g=async S=>ZD(Ns,S),v=()=>{sP(Ns)};return b.exports.useEffect(()=>{const S=iP(Ns,p=>{p&&(p.displayName="Silvi"),u(p),h(!1)});return()=>S()},[]),w(mi.Provider,{value:{getProducts:n,getProductById:r,createProduct:i,updateProduct:s,deleteProduct:o,refreshDatabase:a,createAdminUser:d,loginAdminUser:m,resetPassword:g,logout:v,user:l,loading:c},children:t.children})}var xm={exports:{}},fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=Symbol.for("react.element"),Am=Symbol.for("react.portal"),dc=Symbol.for("react.fragment"),fc=Symbol.for("react.strict_mode"),pc=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),RO=Symbol.for("react.server_context"),yc=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),wc=Symbol.for("react.suspense_list"),Ec=Symbol.for("react.memo"),Sc=Symbol.for("react.lazy"),NO=Symbol.for("react.offscreen"),w_;w_=Symbol.for("react.module.reference");function Jt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Cm:switch(t=t.type,t){case dc:case pc:case fc:case vc:case wc:return t;default:switch(t=t&&t.$$typeof,t){case RO:case gc:case yc:case Sc:case Ec:case mc:return t;default:return e}}case Am:return e}}}fe.ContextConsumer=gc;fe.ContextProvider=mc;fe.Element=Cm;fe.ForwardRef=yc;fe.Fragment=dc;fe.Lazy=Sc;fe.Memo=Ec;fe.Portal=Am;fe.Profiler=pc;fe.StrictMode=fc;fe.Suspense=vc;fe.SuspenseList=wc;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(t){return Jt(t)===gc};fe.isContextProvider=function(t){return Jt(t)===mc};fe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cm};fe.isForwardRef=function(t){return Jt(t)===yc};fe.isFragment=function(t){return Jt(t)===dc};fe.isLazy=function(t){return Jt(t)===Sc};fe.isMemo=function(t){return Jt(t)===Ec};fe.isPortal=function(t){return Jt(t)===Am};fe.isProfiler=function(t){return Jt(t)===pc};fe.isStrictMode=function(t){return Jt(t)===fc};fe.isSuspense=function(t){return Jt(t)===vc};fe.isSuspenseList=function(t){return Jt(t)===wc};fe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===dc||t===pc||t===fc||t===vc||t===wc||t===NO||typeof t=="object"&&t!==null&&(t.$$typeof===Sc||t.$$typeof===Ec||t.$$typeof===mc||t.$$typeof===gc||t.$$typeof===yc||t.$$typeof===w_||t.getModuleId!==void 0)};fe.typeOf=Jt;(function(t){t.exports=fe})(xm);function bO(t){function e(N,O,L,K,E){for(var re=0,A=0,Ce=0,le=0,he,J,Qe=0,It=0,oe,st=oe=he=0,ue=0,Ye=0,vs=0,Xe=0,_a=L.length,ws=_a-1,Zt,Q="",Ne="",Oc="",Lc="",Kn;ue<_a;){if(J=L.charCodeAt(ue),ue===ws&&A+le+Ce+re!==0&&(A!==0&&(J=A===47?10:47),le=Ce=re=0,_a++,ws++),A+le+Ce+re===0){if(ue===ws&&(0<Ye&&(Q=Q.replace(d,"")),0<Q.trim().length)){switch(J){case 32:case 9:case 59:case 13:case 10:break;default:Q+=L.charAt(ue)}J=59}switch(J){case 123:for(Q=Q.trim(),he=Q.charCodeAt(0),oe=1,Xe=++ue;ue<_a;){switch(J=L.charCodeAt(ue)){case 123:oe++;break;case 125:oe--;break;case 47:switch(J=L.charCodeAt(ue+1)){case 42:case 47:e:{for(st=ue+1;st<ws;++st)switch(L.charCodeAt(st)){case 47:if(J===42&&L.charCodeAt(st-1)===42&&ue+2!==st){ue=st+1;break e}break;case 10:if(J===47){ue=st+1;break e}}ue=st}}break;case 91:J++;case 40:J++;case 34:case 39:for(;ue++<ws&&L.charCodeAt(ue)!==J;);}if(oe===0)break;ue++}switch(oe=L.substring(Xe,ue),he===0&&(he=(Q=Q.replace(h,"").trim()).charCodeAt(0)),he){case 64:switch(0<Ye&&(Q=Q.replace(d,"")),J=Q.charCodeAt(1),J){case 100:case 109:case 115:case 45:Ye=O;break;default:Ye=Dt}if(oe=e(O,Ye,oe,J,E+1),Xe=oe.length,0<C&&(Ye=n(Dt,Q,vs),Kn=a(3,oe,Ye,O,W,me,Xe,J,E,K),Q=Ye.join(""),Kn!==void 0&&(Xe=(oe=Kn.trim()).length)===0&&(J=0,oe="")),0<Xe)switch(J){case 115:Q=Q.replace(R,o);case 100:case 109:case 45:oe=Q+"{"+oe+"}";break;case 107:Q=Q.replace(f,"$1 $2"),oe=Q+"{"+oe+"}",oe=je===1||je===2&&s("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=Q+oe,K===112&&(oe=(Ne+=oe,""))}else oe="";break;default:oe=e(O,n(O,Q,vs),oe,K,E+1)}Oc+=oe,oe=vs=Ye=st=he=0,Q="",J=L.charCodeAt(++ue);break;case 125:case 59:if(Q=(0<Ye?Q.replace(d,""):Q).trim(),1<(Xe=Q.length))switch(st===0&&(he=Q.charCodeAt(0),he===45||96<he&&123>he)&&(Xe=(Q=Q.replace(" ",":")).length),0<C&&(Kn=a(1,Q,O,N,W,me,Ne.length,K,E,K))!==void 0&&(Xe=(Q=Kn.trim()).length)===0&&(Q="\0\0"),he=Q.charCodeAt(0),J=Q.charCodeAt(1),he){case 0:break;case 64:if(J===105||J===99){Lc+=Q+L.charAt(ue);break}default:Q.charCodeAt(Xe-1)!==58&&(Ne+=i(Q,he,J,Q.charCodeAt(2)))}vs=Ye=st=he=0,Q="",J=L.charCodeAt(++ue)}}switch(J){case 13:case 10:A===47?A=0:1+he===0&&K!==107&&0<Q.length&&(Ye=1,Q+="\0"),0<C*q&&a(0,Q,O,N,W,me,Ne.length,K,E,K),me=1,W++;break;case 59:case 125:if(A+le+Ce+re===0){me++;break}default:switch(me++,Zt=L.charAt(ue),J){case 9:case 32:if(le+re+A===0)switch(Qe){case 44:case 58:case 9:case 32:Zt="";break;default:J!==32&&(Zt=" ")}break;case 0:Zt="\\0";break;case 12:Zt="\\f";break;case 11:Zt="\\v";break;case 38:le+A+re===0&&(Ye=vs=1,Zt="\f"+Zt);break;case 108:if(le+A+re+_t===0&&0<st)switch(ue-st){case 2:Qe===112&&L.charCodeAt(ue-3)===58&&(_t=Qe);case 8:It===111&&(_t=It)}break;case 58:le+A+re===0&&(st=ue);break;case 44:A+Ce+le+re===0&&(Ye=1,Zt+="\r");break;case 34:case 39:A===0&&(le=le===J?0:le===0?J:le);break;case 91:le+A+Ce===0&&re++;break;case 93:le+A+Ce===0&&re--;break;case 41:le+A+re===0&&Ce--;break;case 40:if(le+A+re===0){if(he===0)switch(2*Qe+3*It){case 533:break;default:he=1}Ce++}break;case 64:A+Ce+le+re+st+oe===0&&(oe=1);break;case 42:case 47:if(!(0<le+re+Ce))switch(A){case 0:switch(2*J+3*L.charCodeAt(ue+1)){case 235:A=47;break;case 220:Xe=ue,A=42}break;case 42:J===47&&Qe===42&&Xe+2!==ue&&(L.charCodeAt(Xe+2)===33&&(Ne+=L.substring(Xe,ue+1)),Zt="",A=0)}}A===0&&(Q+=Zt)}It=Qe,Qe=J,ue++}if(Xe=Ne.length,0<Xe){if(Ye=O,0<C&&(Kn=a(2,Ne,Ye,N,W,me,Xe,K,E,K),Kn!==void 0&&(Ne=Kn).length===0))return Lc+Ne+Oc;if(Ne=Ye.join(",")+"{"+Ne+"}",je*_t!==0){switch(je!==2||s(Ne,2)||(_t=0),_t){case 111:Ne=Ne.replace(_,":-moz-$1")+Ne;break;case 112:Ne=Ne.replace(y,"::-webkit-input-$1")+Ne.replace(y,"::-moz-$1")+Ne.replace(y,":-ms-input-$1")+Ne}_t=0}}return Lc+Ne+Oc}function n(N,O,L){var K=O.trim().split(S);O=K;var E=K.length,re=N.length;switch(re){case 0:case 1:var A=0;for(N=re===0?"":N[0]+" ";A<E;++A)O[A]=r(N,O[A],L).trim();break;default:var Ce=A=0;for(O=[];A<E;++A)for(var le=0;le<re;++le)O[Ce++]=r(N[le]+" ",K[A],L).trim()}return O}function r(N,O,L){var K=O.charCodeAt(0);switch(33>K&&(K=(O=O.trim()).charCodeAt(0)),K){case 38:return O.replace(p,"$1"+N.trim());case 58:return N.trim()+O.replace(p,"$1"+N.trim());default:if(0<1*L&&0<O.indexOf("\f"))return O.replace(p,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+O}function i(N,O,L,K){var E=N+";",re=2*O+3*L+4*K;if(re===944){N=E.indexOf(":",9)+1;var A=E.substring(N,E.length-1).trim();return A=E.substring(0,N).trim()+A+";",je===1||je===2&&s(A,1)?"-webkit-"+A+A:A}if(je===0||je===2&&!s(E,1))return E;switch(re){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(Pe,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return A=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+A+"-webkit-"+E+"-ms-flex-pack"+A+E;case 1005:return g.test(E)?E.replace(m,":-webkit-")+E.replace(m,":-moz-")+E:E;case 1e3:switch(A=E.substring(13).trim(),O=A.indexOf("-")+1,A.charCodeAt(0)+A.charCodeAt(O)){case 226:A=E.replace(I,"tb");break;case 232:A=E.replace(I,"tb-rl");break;case 220:A=E.replace(I,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+A+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(O=(E=N).length-10,A=(E.charCodeAt(O)===33?E.substring(0,O):E).substring(N.indexOf(":",7)+1).trim(),re=A.charCodeAt(0)+(A.charCodeAt(7)|0)){case 203:if(111>A.charCodeAt(8))break;case 115:E=E.replace(A,"-webkit-"+A)+";"+E;break;case 207:case 102:E=E.replace(A,"-webkit-"+(102<re?"inline-":"")+"box")+";"+E.replace(A,"-webkit-"+A)+";"+E.replace(A,"-ms-"+A+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return A=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+A+"-ms-flex-"+A+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(P,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(P,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(B.test(N)===!0)return(A=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),O,L,K).replace(":fill-available",":stretch"):E.replace(A,"-webkit-"+A)+E.replace(A,"-moz-"+A.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,L+K===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+E}return E}function s(N,O){var L=N.indexOf(O===1?":":"{"),K=N.substring(0,O!==3?L:10);return L=N.substring(L+1,N.length-1),H(O!==2?K:K.replace(Z,"$1"),L,O)}function o(N,O){var L=i(O,O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2));return L!==O+";"?L.replace(D," or ($1)").substring(4):"("+O+")"}function a(N,O,L,K,E,re,A,Ce,le,he){for(var J=0,Qe=O,It;J<C;++J)switch(It=gt[J].call(c,N,Qe,L,K,E,re,A,Ce,le,he)){case void 0:case!1:case!0:case null:break;default:Qe=It}if(Qe!==O)return Qe}function l(N){switch(N){case void 0:case null:C=gt.length=0;break;default:if(typeof N=="function")gt[C++]=N;else if(typeof N=="object")for(var O=0,L=N.length;O<L;++O)l(N[O]);else q=!!N|0}return l}function u(N){return N=N.prefix,N!==void 0&&(H=null,N?typeof N!="function"?je=1:(je=2,H=N):je=0),u}function c(N,O){var L=N;if(33>L.charCodeAt(0)&&(L=L.trim()),ge=L,L=[ge],0<C){var K=a(-1,O,L,L,W,me,0,0,0,0);K!==void 0&&typeof K=="string"&&(O=K)}var E=e(Dt,L,O,0,0);return 0<C&&(K=a(-2,E,L,L,W,me,E.length,0,0,0),K!==void 0&&(E=K)),ge="",_t=0,me=W=1,E}var h=/^\0+/g,d=/[\0\r\f]/g,m=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,S=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,_=/:(read-only)/g,I=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,P=/-self|flex-/g,Z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,Pe=/([^-])(image-set\()/,me=1,W=1,_t=0,je=1,Dt=[],gt=[],C=0,H=null,q=0,ge="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var DO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function PO(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var OO=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Iv=PO(function(t){return OO.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),E_={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge=typeof Symbol=="function"&&Symbol.for,Rm=Ge?Symbol.for("react.element"):60103,Nm=Ge?Symbol.for("react.portal"):60106,_c=Ge?Symbol.for("react.fragment"):60107,Ic=Ge?Symbol.for("react.strict_mode"):60108,kc=Ge?Symbol.for("react.profiler"):60114,Tc=Ge?Symbol.for("react.provider"):60109,xc=Ge?Symbol.for("react.context"):60110,bm=Ge?Symbol.for("react.async_mode"):60111,Cc=Ge?Symbol.for("react.concurrent_mode"):60111,Ac=Ge?Symbol.for("react.forward_ref"):60112,Rc=Ge?Symbol.for("react.suspense"):60113,LO=Ge?Symbol.for("react.suspense_list"):60120,Nc=Ge?Symbol.for("react.memo"):60115,bc=Ge?Symbol.for("react.lazy"):60116,$O=Ge?Symbol.for("react.block"):60121,MO=Ge?Symbol.for("react.fundamental"):60117,FO=Ge?Symbol.for("react.responder"):60118,UO=Ge?Symbol.for("react.scope"):60119;function Vt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Rm:switch(t=t.type,t){case bm:case Cc:case _c:case kc:case Ic:case Rc:return t;default:switch(t=t&&t.$$typeof,t){case xc:case Ac:case bc:case Nc:case Tc:return t;default:return e}}case Nm:return e}}}function S_(t){return Vt(t)===Cc}pe.AsyncMode=bm;pe.ConcurrentMode=Cc;pe.ContextConsumer=xc;pe.ContextProvider=Tc;pe.Element=Rm;pe.ForwardRef=Ac;pe.Fragment=_c;pe.Lazy=bc;pe.Memo=Nc;pe.Portal=Nm;pe.Profiler=kc;pe.StrictMode=Ic;pe.Suspense=Rc;pe.isAsyncMode=function(t){return S_(t)||Vt(t)===bm};pe.isConcurrentMode=S_;pe.isContextConsumer=function(t){return Vt(t)===xc};pe.isContextProvider=function(t){return Vt(t)===Tc};pe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rm};pe.isForwardRef=function(t){return Vt(t)===Ac};pe.isFragment=function(t){return Vt(t)===_c};pe.isLazy=function(t){return Vt(t)===bc};pe.isMemo=function(t){return Vt(t)===Nc};pe.isPortal=function(t){return Vt(t)===Nm};pe.isProfiler=function(t){return Vt(t)===kc};pe.isStrictMode=function(t){return Vt(t)===Ic};pe.isSuspense=function(t){return Vt(t)===Rc};pe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===_c||t===Cc||t===kc||t===Ic||t===Rc||t===LO||typeof t=="object"&&t!==null&&(t.$$typeof===bc||t.$$typeof===Nc||t.$$typeof===Tc||t.$$typeof===xc||t.$$typeof===Ac||t.$$typeof===MO||t.$$typeof===FO||t.$$typeof===UO||t.$$typeof===$O)};pe.typeOf=Vt;(function(t){t.exports=pe})(E_);var Dm=E_.exports,zO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},VO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jO={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},__={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pm={};Pm[Dm.ForwardRef]=jO;Pm[Dm.Memo]=__;function kv(t){return Dm.isMemo(t)?__:Pm[t.$$typeof]||zO}var BO=Object.defineProperty,HO=Object.getOwnPropertyNames,Tv=Object.getOwnPropertySymbols,WO=Object.getOwnPropertyDescriptor,qO=Object.getPrototypeOf,xv=Object.prototype;function I_(t,e,n){if(typeof e!="string"){if(xv){var r=qO(e);r&&r!==xv&&I_(t,r,n)}var i=HO(e);Tv&&(i=i.concat(Tv(e)));for(var s=kv(t),o=kv(e),a=0;a<i.length;++a){var l=i[a];if(!VO[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=WO(e,l);try{BO(t,l,u)}catch{}}}}return t}var KO=I_;function bn(){return(bn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Cv=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},lf=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!xm.exports.typeOf(t)},cu=Object.freeze([]),wr=Object.freeze({});function jo(t){return typeof t=="function"}function Av(t){return t.displayName||t.name||"Component"}function Om(t){return t&&typeof t.styledComponentId=="string"}var is=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Lm=typeof window<"u"&&"HTMLElement"in window,GO=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function Sa(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var QO=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Sa(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),ml=new Map,hu=new Map,io=1,Ka=function(t){if(ml.has(t))return ml.get(t);for(;hu.has(io);)io++;var e=io++;return ml.set(t,e),hu.set(e,t),e},YO=function(t){return hu.get(t)},XO=function(t,e){e>=io&&(io=e+1),ml.set(t,e),hu.set(e,t)},JO="style["+is+'][data-styled-version="5.3.6"]',ZO=new RegExp("^"+is+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),eL=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},tL=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(ZO);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(XO(u,l),eL(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},nL=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},k_=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(is))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(is,"active"),r.setAttribute("data-styled-version","5.3.6");var o=nL();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},rL=function(){function t(n){var r=this.element=k_(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Sa(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),iL=function(){function t(n){var r=this.element=k_(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),sL=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Rv=Lm,oL={isServer:!Lm,useCSSOMInjection:!GO},T_=function(){function t(n,r,i){n===void 0&&(n=wr),r===void 0&&(r={}),this.options=bn({},oL,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Lm&&Rv&&(Rv=!1,function(s){for(var o=document.querySelectorAll(JO),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(is)!=="active"&&(tL(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Ka(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(bn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new sL(o):s?new rL(o):new iL(o),new QO(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Ka(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ka(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Ka(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=YO(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=is+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),aL=/(a)(d)/gi,Nv=function(t){return String.fromCharCode(t+(t>25?39:97))};function uf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Nv(e%52)+n;return(Nv(e%52)+n).replace(aL,"$1-$2")}var Pi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},x_=function(t){return Pi(5381,t)};function lL(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(jo(n)&&!Om(n))return!1}return!0}var uL=x_("5.3.6"),cL=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&lL(e),this.componentId=n,this.baseHash=Pi(uL,n),this.baseStyle=r,T_.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=ss(this.rules,e,n,r).join(""),a=uf(Pi(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Pi(this.baseHash,r.hash),h="",d=0;d<u;d++){var m=this.rules[d];if(typeof m=="string")h+=m;else if(m){var g=ss(m,e,n,r),v=Array.isArray(g)?g.join(""):g;c=Pi(c,v+d),h+=v}}if(h){var S=uf(c>>>0);if(!n.hasNameForId(i,S)){var p=r(h,"."+S,void 0,i);n.insertRules(i,S,p)}s.push(S)}}return s.join(" ")},t}(),hL=/^\s*\/\/.*$/gm,dL=[":","[",".","#"];function fL(t){var e,n,r,i,s=t===void 0?wr:t,o=s.options,a=o===void 0?wr:o,l=s.plugins,u=l===void 0?cu:l,c=new bO(a),h=[],d=function(v){function S(p){if(p)try{v(p+"}")}catch{}}return function(p,f,y,_,I,R,D,P,Z,B){switch(p){case 1:if(Z===0&&f.charCodeAt(0)===64)return v(f+";"),"";break;case 2:if(P===0)return f+"/*|*/";break;case 3:switch(P){case 102:case 112:return v(y[0]+f),"";default:return f+(B===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(S)}}}(function(v){h.push(v)}),m=function(v,S,p){return S===0&&dL.indexOf(p[n.length])!==-1||p.match(i)?v:"."+e};function g(v,S,p,f){f===void 0&&(f="&");var y=v.replace(hL,""),_=S&&p?p+" "+S+" { "+y+" }":y;return e=f,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!S?"":S,_)}return c.use([].concat(u,[function(v,S,p){v===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,m))},d,function(v){if(v===-2){var S=h;return h=[],S}}])),g.hash=u.length?u.reduce(function(v,S){return S.name||Sa(15),Pi(v,S.name)},5381).toString():"",g}var C_=Ln.createContext();C_.Consumer;var A_=Ln.createContext(),pL=(A_.Consumer,new T_),cf=fL();function mL(){return b.exports.useContext(C_)||pL}function gL(){return b.exports.useContext(A_)||cf}var yL=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=cf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Sa(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=cf),this.name+e.hash},t}(),vL=/([A-Z])/,wL=/([A-Z])/g,EL=/^ms-/,SL=function(t){return"-"+t.toLowerCase()};function bv(t){return vL.test(t)?t.replace(wL,SL).replace(EL,"-ms-"):t}var Dv=function(t){return t==null||t===!1||t===""};function ss(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=ss(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Dv(t))return"";if(Om(t))return"."+t.styledComponentId;if(jo(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return ss(l,e,n,r)}var u;return t instanceof yL?n?(t.inject(n,r),t.getName(r)):t:lf(t)?function c(h,d){var m,g,v=[];for(var S in h)h.hasOwnProperty(S)&&!Dv(h[S])&&(Array.isArray(h[S])&&h[S].isCss||jo(h[S])?v.push(bv(S)+":",h[S],";"):lf(h[S])?v.push.apply(v,c(h[S],S)):v.push(bv(S)+": "+(m=S,(g=h[S])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||m in DO?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var Pv=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function _L(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return jo(t)||lf(t)?Pv(ss(Cv(cu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Pv(ss(Cv(t,n)))}var IL=function(t,e,n){return n===void 0&&(n=wr),t.theme!==n.theme&&t.theme||e||n.theme},kL=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,TL=/(^-|-$)/g;function Nh(t){return t.replace(kL,"-").replace(TL,"")}var xL=function(t){return uf(x_(t)>>>0)};function Ga(t){return typeof t=="string"&&!0}var hf=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},CL=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function AL(t,e,n){var r=t[n];hf(e)&&hf(r)?R_(r,e):t[n]=e}function R_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(hf(o))for(var a in o)CL(a)&&AL(t,o[a],a)}return t}var N_=Ln.createContext();N_.Consumer;var bh={};function b_(t,e,n){var r=Om(t),i=!Ga(t),s=e.attrs,o=s===void 0?cu:s,a=e.componentId,l=a===void 0?function(f,y){var _=typeof f!="string"?"sc":Nh(f);bh[_]=(bh[_]||0)+1;var I=_+"-"+xL("5.3.6"+_+bh[_]);return y?y+"-"+I:I}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Ga(f)?"styled."+f:"Styled("+Av(f)+")"}(t):u,h=e.displayName&&e.componentId?Nh(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,m=e.shouldForwardProp;r&&t.shouldForwardProp&&(m=e.shouldForwardProp?function(f,y,_){return t.shouldForwardProp(f,y,_)&&e.shouldForwardProp(f,y,_)}:t.shouldForwardProp);var g,v=new cL(n,h,r?t.componentStyle:void 0),S=v.isStatic&&o.length===0,p=function(f,y){return function(_,I,R,D){var P=_.attrs,Z=_.componentStyle,B=_.defaultProps,Pe=_.foldedComponentIds,me=_.shouldForwardProp,W=_.styledComponentId,_t=_.target,je=function(K,E,re){K===void 0&&(K=wr);var A=bn({},E,{theme:K}),Ce={};return re.forEach(function(le){var he,J,Qe,It=le;for(he in jo(It)&&(It=It(A)),It)A[he]=Ce[he]=he==="className"?(J=Ce[he],Qe=It[he],J&&Qe?J+" "+Qe:J||Qe):It[he]}),[A,Ce]}(IL(I,b.exports.useContext(N_),B)||wr,I,P),Dt=je[0],gt=je[1],C=function(K,E,re,A){var Ce=mL(),le=gL(),he=E?K.generateAndInjectStyles(wr,Ce,le):K.generateAndInjectStyles(re,Ce,le);return he}(Z,D,Dt),H=R,q=gt.$as||I.$as||gt.as||I.as||_t,ge=Ga(q),N=gt!==I?bn({},I,{},gt):I,O={};for(var L in N)L[0]!=="$"&&L!=="as"&&(L==="forwardedAs"?O.as=N[L]:(me?me(L,Iv,q):!ge||Iv(L))&&(O[L]=N[L]));return I.style&&gt.style!==I.style&&(O.style=bn({},I.style,{},gt.style)),O.className=Array.prototype.concat(Pe,W,C!==W?C:null,I.className,gt.className).filter(Boolean).join(" "),O.ref=H,b.exports.createElement(q,O)}(g,f,y,S)};return p.displayName=c,(g=Ln.forwardRef(p)).attrs=d,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=m,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):cu,g.styledComponentId=h,g.target=r?t.target:t,g.withComponent=function(f){var y=e.componentId,_=function(R,D){if(R==null)return{};var P,Z,B={},Pe=Object.keys(R);for(Z=0;Z<Pe.length;Z++)P=Pe[Z],D.indexOf(P)>=0||(B[P]=R[P]);return B}(e,["componentId"]),I=y&&y+"-"+(Ga(f)?f:Nh(Av(f)));return b_(f,bn({},_,{attrs:d,componentId:I}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?R_({},t.defaultProps,f):f}}),g.toString=function(){return"."+g.styledComponentId},i&&KO(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var df=function(t){return function e(n,r,i){if(i===void 0&&(i=wr),!xm.exports.isValidElementType(r))return Sa(1,String(r));var s=function(){return n(r,i,_L.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,bn({},i,{},o))},s.attrs=function(o){return e(n,r,bn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(b_,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){df[t]=df(t)});const qn=df,D_="/SilvinaSilberman/assets/logo.cc159ce2.png",RL=qn.header`
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
`;function Dc(){const t=()=>{document.querySelector("header").classList.toggle("open__menu")},e=()=>{document.querySelectorAll("ul li").forEach(()=>{document.querySelector("header").classList.remove("open__menu")})};return w(RL,{children:M("nav",{children:[w(sn,{to:"/",children:w("img",{src:D_,alt:"Silvina Silberman"})}),M("ul",{children:[w("li",{onClick:e,children:w(sn,{to:"/",children:"Inicio"})}),w("li",{onClick:e,children:w(sn,{to:"/about",children:"Sobre Mi"})}),w("li",{onClick:e,children:w(sn,{to:"/personal-designs",children:"Dise\xF1os Personalizados"})}),w("li",{onClick:e,children:w(sn,{to:"/awards",children:"Premios"})}),w("li",{onClick:e,children:w(sn,{to:"/contact",children:"Contacto"})}),M("div",{className:"data__header__mobile",children:[M("div",{children:[w("h5",{children:"Email"}),w("a",{href:"mailto:silvinasilberman@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"silvinasilberman@gmail.com"})]}),M("div",{children:[w("h5",{children:"Instagram"}),w("a",{href:"https://www.instagram.com/silvisilberarte/?hl=es-la",target:"_blank",rel:"noopener noreferrer",children:"@silvisilberarte"})]})]})]}),M("div",{className:"burger__menu",onClick:t,children:[w("h4",{children:"Menu"}),M("div",{children:[w("span",{}),w("span",{})]})]})]})})}var P_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ov=Ln.createContext&&Ln.createContext(P_),Er=globalThis&&globalThis.__assign||function(){return Er=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Er.apply(this,arguments)},NL=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function O_(t){return t&&t.map(function(e,n){return Ln.createElement(e.tag,Er({key:n},e.attr),O_(e.child))})}function In(t){return function(e){return w(bL,{...Er({attr:Er({},t.attr)},e),children:O_(t.child)})}}function bL(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=NL(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),M("svg",{...Er({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Er(Er({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&w("title",{children:s}),t.children]})};return Ov!==void 0?w(Ov.Consumer,{children:function(n){return e(n)}}):e(P_)}function DL(t){return In({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Money_Check_1",dataName:"Money Check 1"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M19.437,18.218H4.563a2.5,2.5,0,0,1-2.5-2.5V8.282a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5v7.436A2.5,2.5,0,0,1,19.437,18.218ZM4.563,6.782a1.5,1.5,0,0,0-1.5,1.5v7.436a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V8.282a1.5,1.5,0,0,0-1.5-1.5Z"}},{tag:"path",attr:{d:"M12,12.786H5.064a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z"}},{tag:"path",attr:{d:"M14,15.714H5.064a.5.5,0,1,1,0-1H14a.5.5,0,0,1,0,1Z"}},{tag:"rect",attr:{x:"15.436",y:"8.283",width:"4",height:"2",rx:"0.5"}}]}]}]})(t)}function PL(t){return In({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(t)}function OL(t){return In({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(t)}function LL(t){return In({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M380 704h264c4.4 0 8-3.6 8-8v-84c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v36H428v-36c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v84c0 4.4 3.6 8 8 8zm340-123a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm239-167.6L935.3 372a8 8 0 0 0-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 0 0-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 0 0-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 0 0 3-10.8zM840 517v237H184V517l15.6-43h624.8l15.6 43zM292.7 218.1l.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220l72.7-199.9zM224 581a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"}}]})(t)}function $L(t){return In({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"}},{tag:"path",attr:{d:"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"}}]})(t)}function ML(t){return In({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]})(t)}function FL(t){return In({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z"}}]})(t)}function UL(t){return In({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}}]})(t)}function zL(t){return In({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"}}]})(t)}function VL(t){return In({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z",fill:"currentColor"}},{tag:"path",attr:{d:"M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z",fill:"currentColor"}}]})(t)}const jL=qn.footer`
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
`;function Pc(){return M(jL,{children:[w("img",{onClick:()=>{window.scroll({top:0,left:0,behavior:"smooth"})},src:D_,alt:"Silvina Silberman"}),M("h4",{children:["\xA9 2023 Silvina Silberman / ",M("span",{children:["Develop by ",w("a",{href:"https://www.linkedin.com/in/nicokatz/",target:"_blank",rel:"noopener noreferrer",children:"Nicolas Katz"})]})]}),M("div",{children:[w("a",{href:"https://www.instagram.com/silvisilberarte/",target:"_blank",rel:"noopener noreferrer",children:w(UL,{})}),w("a",{href:"https://www.facebook.com/silvina.silber",target:"_blank",rel:"noopener noreferrer",children:w(PL,{})})]})]})}const BL=qn.div`
    width: 100%;
    height: max-content;
    margin-top: 60px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    
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
`;function HL(){const{logout:t,user:e,getProducts:n,createProduct:r,deleteProduct:i,refreshDatabase:s}=b.exports.useContext(mi),o=Xo(),[a,l]=b.exports.useState([]);b.exports.useEffect(()=>{n(l)},[]);const[u,c]=b.exports.useState(""),[h,d]=b.exports.useState(""),[m,g]=b.exports.useState(""),[v,S]=b.exports.useState(!1),[p,f]=b.exports.useState(""),[y,_]=b.exports.useState(null),[I,R]=b.exports.useState(null),D=async()=>{try{await t(),o("/")}catch(W){console.error(W.message)}},P=W=>{const je=W.target.files[0],Dt=new FileReader;Dt.onloadend=function(){R(Dt.result.toString())},Dt.readAsDataURL(je)},Z=async W=>{W.preventDefault(),await r({title:u,description:h,category:m,award:v,price:p,status:y,primaryImage:I}),c(""),d(""),g(""),f(""),S(W.target.checked=!1),_(""),R("")},B=async W=>{await i(W)},Pe=()=>{n(l)},me=W=>{switch(W.preventDefault(),W.target.id){case"title":c(W.target.value);break;case"description":d(W.target.value);break;case"category":g(W.target.value);break;case"award":S(W.target.checked);break;case"price":f(W.target.value);break;case"status":_(W.target.value);break}};return M("div",{children:[w(Dc,{}),M(BL,{children:[M("h1",{children:["\xA1Bienvenida, ",e==null?void 0:e.displayName,"!"]}),w("h2",{children:"Publicar nuevo retrato"}),M("form",{onSubmit:Z,children:[M("div",{className:"input__container",children:[w("label",{htmlFor:"title",children:"Titulo"}),w("input",{onChange:me,type:"text",name:"title",id:"title",minLength:"3",maxLength:"20",value:u})]}),M("div",{className:"input__container",children:[w("label",{htmlFor:"description",children:"Descripci\xF3n"}),w("input",{onChange:me,type:"text",name:"description",id:"description",minLength:"8",maxLength:"200",value:h})]}),M("div",{className:"input__container",children:[w("label",{htmlFor:"category",children:"Categor\xEDa"}),w("input",{onChange:me,type:"text",name:"category",id:"category",minLength:"3",maxLength:"20",value:m})]}),M("div",{className:"input__container",children:[w("label",{htmlFor:"award",children:"\xBFTiene Premio?"}),w("input",{onChange:me,type:"checkbox",name:"award",id:"award",value:v})]}),M("div",{className:"input__container",children:[w("label",{htmlFor:"price",children:"Precio (en d\xF3lares)"}),w("input",{onChange:me,type:"number",name:"price",id:"price",min:"1",max:"1000",value:p})]}),M("div",{className:"input__container",children:[w("label",{htmlFor:"status",children:"Estado"}),M("div",{children:[w("input",{type:"radio",onChange:me,name:"status",id:"status",value:"disponible"}),w("label",{htmlFor:"disponible",children:"Disponible"})]}),M("div",{children:[w("input",{type:"radio",onChange:me,name:"status",id:"status",value:"reservado"}),w("label",{htmlFor:"reservado",children:"Reservado"})]}),M("div",{children:[w("input",{type:"radio",onChange:me,name:"status",id:"status",value:"vendido"}),w("label",{htmlFor:"vendido",children:"Vendido"})]})]}),M("div",{className:"input__container",children:[w("label",{htmlFor:"primaryImage",children:"Imagen principal"}),w("input",{onChange:P,type:"file",name:"primaryImage",id:"primaryImage"})]}),w("button",{type:"submit",children:"Crear retrato"})]}),w("h2",{children:"Ver y eliminar retratos"}),w("button",{onClick:Pe,children:"Recargar datos"}),w("section",{children:a&&a.map(W=>M("div",{children:[w("img",{src:W==null?void 0:W.primaryImage,alt:W==null?void 0:W.title}),M("span",{onClick:()=>B(W==null?void 0:W.id),children:[w("h5",{children:"Eliminar"}),w(OL,{})]})]},W.id))}),w("button",{className:"logout",onClick:D,children:"Cerrar sesi\xF3n"})]}),w(Pc,{})]})}const Bo={_origin:"https://api.emailjs.com"},WL=(t,e="https://api.emailjs.com")=>{Bo._userID=t,Bo._origin=e},L_=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Lv{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const $_=(t,e,n={})=>new Promise((r,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new Lv(o);a.status===200||a.text==="OK"?r(a):i(a)}),s.addEventListener("error",({target:o})=>{i(new Lv(o))}),s.open("POST",Bo._origin+t,!0),Object.keys(n).forEach(o=>{s.setRequestHeader(o,n[o])}),s.send(e)}),qL=(t,e,n,r)=>{const i=r||Bo._userID;L_(i,t,e);const s={lib_version:"3.10.0",user_id:i,service_id:t,template_id:e,template_params:n};return $_("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},KL=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},GL=(t,e,n,r)=>{const i=r||Bo._userID,s=KL(n);L_(i,t,e);const o=new FormData(s);return o.append("lib_version","3.10.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",i),$_("/api/v1.0/email/send-form",o)},QL={init:WL,send:qL,sendForm:GL},YL="service_e6bwg0p",XL="template_3z9pvpj",JL="hwH8wj1eN-3bQW7te",ZL="/SilvinaSilberman/assets/contact.d1744b50.jpeg",e$=qn.section`
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
`;function t$(){const t=b.exports.useRef();return M("div",{children:[w(Dc,{}),M(e$,{children:[M("div",{children:[M("div",{className:"form__information",children:[w("h1",{children:"Empezar proyecto"}),M("p",{children:["Contactame en el formulario de aqu\xED abajo para m\xE1s informaci\xF3n o v\xEDa email en ",w("a",{href:"mailto:silvinasilberman@gmail.com",children:"silvinasilberman@gmail.com"}),"."]}),M("p",{children:["Tenes un proyecto? Directamente rellena este ",w("a",{href:"",children:"formulario rapido"})," y pronto estar\xE9 en contacto con vos."]}),M("p",{children:["Tambi\xE9n podes conocer como trabajo ",w("a",{href:"/about",children:"aqu\xED"}),"."]})]}),M("form",{ref:t,onSubmit:n=>{n.preventDefault(),QL.sendForm(YL,XL,t.current,JL).then(()=>{document.querySelector("form button").classList.add("send__mail"),document.querySelector("form button").innerHTML="ENVIADO",setTimeout(()=>{location.reload()},2500)},r=>{console.log(r.text)})},children:[M("div",{className:"row",children:[w("label",{htmlFor:"name",children:"Nombre"}),w("input",{type:"text",name:"name",id:"name",minLength:"3",maxLength:"20",required:!0})]}),M("div",{className:"row",children:[w("label",{htmlFor:"email",children:"Email"}),w("input",{type:"email",name:"email",id:"email",minLength:"6",maxLength:"40",required:!0})]}),M("div",{children:[w("label",{htmlFor:"issue",children:"Asunto"}),w("input",{type:"text",name:"issue",id:"issue",minLength:"4",maxLength:"28",required:!0})]}),M("div",{children:[w("label",{htmlFor:"message",children:"Mensaje"}),w("textarea",{type:"text",name:"message",id:"message",minLength:"4",maxLength:"200",required:!0})]}),w("button",{type:"submit",children:"Enviar"})]})]}),M("div",{children:[w("img",{src:ZL,alt:"Silvina Silberman"}),w("h4",{children:"Actualmente, me encuentro trabajando en CABA pero realizo encargo a todo el pa\xEDs."})]})]}),w(Pc,{})]})}const n$=qn.section`
    width: 100%;
    height: max-content;
    margin-top: 20px;
    padding: 40px 20px;

    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 28px;

        color: black;
        font-size: 42px;
        line-height: 52px;
        font-weight: 500;
        text-align: center;
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
`;function r$(){const{getProducts:t}=b.exports.useContext(mi),[e,n]=b.exports.useState(null);return b.exports.useEffect(()=>{t(n)},[]),M(n$,{children:[w("h1",{children:"Portfolio"}),w("div",{className:"portfolio",id:"portfolio",children:e&&e.map(r=>w(sn,{to:`/coleccion/${r.id}`,children:w("img",{src:r.primaryImage,alt:r.title})},r.id))})]})}const i$=qn.main`
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
`;function s$(){return M("div",{children:[w(Dc,{}),M(i$,{children:[w(sn,{to:"/contact",children:"Cotizar proyecto"}),w(zL,{})]}),w(r$,{}),w(Pc,{})]})}const o$=qn.div`
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
`;function a$(){const{loginAdminUser:t,resetPassword:e}=b.exports.useContext(mi),n=Xo(),[r,i]=b.exports.useState({email:"",password:""}),[s,o]=b.exports.useState(""),a=({target:{name:c,value:h}})=>{i({...r,[c]:h})};return M(o$,{children:[M("h6",{children:["Regresar al home ",w(sn,{to:"/",children:"aqu\xED"}),"."]}),w("h1",{children:"Acceso de administrador"}),M("form",{onSubmit:async c=>{c.preventDefault(),o("");try{await t(r.email,r.password),console.log("Login autorizado."),n("/admin")}catch(h){switch(console.log(h.message),h.message){case"Firebase: Error (auth/user-not-found).":o("Correo inexistente. Por favor revisa los campos.");break;case"Firebase: Error (auth/email-invalid).":o("Correo invalido. Por favor revisa los campos.");break;case"Firebase: Error (auth/wrong-password).":o("Contrase\xF1a erronea. Por favor revisa los campos.");break;default:o("Ocurrio un error. Por favor vuelve a intentarlo.");break}}},children:[w("input",{onChange:a,type:"email",name:"email",id:"email",minLength:"6",maxLength:"40",placeholder:"Ingresa tu correo electronico.",required:!0}),w("input",{onChange:a,type:"password",name:"password",id:"password",minLength:"6",maxLength:"40",placeholder:"Ingresa tu contrase\xF1a.",required:!0}),M("div",{children:[w("button",{type:"submit",children:"Iniciar sesi\xF3n"}),w("h4",{onClick:async()=>{if(!r.email)return o("Escribe tu correo en la casilla para resetear tu contrase\xF1a.");try{await e(r.email),o("Te enviamos un email a tu correo para que puedas resetear tu contrase\xF1a.")}catch{o("Ocurrio un error. No pudimos resetear tu contrase\xF1a. Vuelve a intentarlo.")}},children:"\xBFOlvidaste tu contrase\xF1a?"})]})]}),s&&M("div",{className:"error__message",children:[w("p",{children:s}),w(VL,{})]})]})}const l$=qn.div`
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

        color: #9a0c9d;
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
`;function u$(){const[t,e]=b.exports.useState(null),{productId:n}=XT(),{getProductById:r}=b.exports.useContext(mi);return b.exports.useEffect(()=>{r(e,n)},[n]),M("div",{children:[w(Dc,{}),t&&M(l$,{children:[w("img",{src:t.primaryImage,alt:t.title}),M("div",{className:"product__information",children:[M("span",{children:[w(sn,{to:"/",children:"Inicio "})," / ",w("label",{children:t.title})]}),M("h1",{children:[t.title," ",w("span",{children:t.award&&w($L,{})})]}),M("h2",{children:[t.price," usd ",w("h3",{className:t.status==="disponible"?"disponible":"vendido",children:t.status})]}),w("p",{children:t.description}),M("a",{className:"ask__product",href:`mailto:silvinasilberman@gmail.com?subject=Quiero encargar: ${t.title}`,children:["Comprar ",w(ML,{})]}),M("div",{className:"buyer__information",children:[M("h4",{children:[w(FL,{}),"Marco"]}),w("p",{children:"Al momento de realizar tu pedido, podr\xE1s eligir entre distintas opciones de marcos y/o portarretratos, el cu\xE1l estar\xE1 incluido en su compra."}),M("h4",{children:[w(LL,{}),"Env\xEDos a domicilio"]}),w("p",{children:"Los env\xEDos a domicilio no estar\xE1n incluidos en la compra, al momento de realizar tu pedido deber\xE1s pactar la forma de intercambio con el vendedor."}),M("h4",{children:[w(DL,{}),"Formas de pago"]}),w("p",{children:"La forma de pago principal es efectivo en d\xF3lares. Sin embargo, tambi\xE9n se aceptan transferencias bancarias o mercado pago con tarjeta de credito o debito. En este ultimo caso, preguntar el tipo de cambio."})]})]})]}),w(Pc,{})]})}function c$({children:t}){const{user:e,loading:n}=b.exports.useContext(mi),r=Xo();return n?w("h1",{children:"Cargando..."}):e?w("div",{children:t}):r("/login")}function h$({children:t}){const{user:e,loading:n}=b.exports.useContext(mi),r=Xo();return n?w("h1",{children:"Cargando..."}):e?r("/admin"):w("div",{children:t})}const d$=qn.div`
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
`;function f$(){return M(d$,{children:[w("h1",{children:"404"}),w("h2",{children:"La pagina que estas buscando no existe."}),w(sn,{to:"/",children:"Volver al home"})]})}function p$(){return M(ox,{children:[w(Lr,{path:"/",element:w(s$,{})}),w(Lr,{path:"/coleccion/:productId",element:w(u$,{})}),w(Lr,{path:"/contact",element:w(t$,{})}),w(Lr,{path:"/login",element:w(h$,{children:w(a$,{})})}),w(Lr,{path:"/admin",element:w(c$,{children:w(HL,{})})}),w(Lr,{path:"/*",element:w(f$,{})})]})}Ph.createRoot(document.getElementById("root")).render(w(Ln.StrictMode,{children:w(hx,{children:w(AO,{children:w(p$,{})})})}));
