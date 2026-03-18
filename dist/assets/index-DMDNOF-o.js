(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function ps(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Jo={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yt=Symbol.for("react.element"),ds=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),ms=Symbol.for("react.strict_mode"),vs=Symbol.for("react.profiler"),ys=Symbol.for("react.provider"),Cs=Symbol.for("react.context"),ks=Symbol.for("react.forward_ref"),ws=Symbol.for("react.suspense"),Ss=Symbol.for("react.memo"),xs=Symbol.for("react.lazy"),ju=Symbol.iterator;function Es(n){return n===null||typeof n!="object"?null:(n=ju&&n[ju]||n["@@iterator"],typeof n=="function"?n:null)}var bo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},na=Object.assign,ea={};function ct(n,e,t){this.props=n,this.context=e,this.refs=ea,this.updater=t||bo}ct.prototype.isReactComponent={};ct.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ct.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function ta(){}ta.prototype=ct.prototype;function Ql(n,e,t){this.props=n,this.context=e,this.refs=ea,this.updater=t||bo}var Kl=Ql.prototype=new ta;Kl.constructor=Ql;na(Kl,ct.prototype);Kl.isPureReactComponent=!0;var Iu=Array.isArray,ra=Object.prototype.hasOwnProperty,$l={current:null},ia={key:!0,ref:!0,__self:!0,__source:!0};function la(n,e,t){var r,i={},l=null,u=null;if(e!=null)for(r in e.ref!==void 0&&(u=e.ref),e.key!==void 0&&(l=""+e.key),e)ra.call(e,r)&&!ia.hasOwnProperty(r)&&(i[r]=e[r]);var o=arguments.length-2;if(o===1)i.children=t;else if(1<o){for(var a=Array(o),h=0;h<o;h++)a[h]=arguments[h+2];i.children=a}if(n&&n.defaultProps)for(r in o=n.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:Yt,type:n,key:l,ref:u,props:i,_owner:$l.current}}function Ts(n,e){return{$$typeof:Yt,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Wl(n){return typeof n=="object"&&n!==null&&n.$$typeof===Yt}function Ls(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Ou=/\/+/g;function Si(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Ls(""+n.key):e.toString(36)}function wr(n,e,t,r,i){var l=typeof n;(l==="undefined"||l==="boolean")&&(n=null);var u=!1;if(n===null)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(n.$$typeof){case Yt:case ds:u=!0}}if(u)return u=n,i=i(u),n=r===""?"."+Si(u,0):r,Iu(i)?(t="",n!=null&&(t=n.replace(Ou,"$&/")+"/"),wr(i,e,t,"",function(h){return h})):i!=null&&(Wl(i)&&(i=Ts(i,t+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(Ou,"$&/")+"/")+n)),e.push(i)),1;if(u=0,r=r===""?".":r+":",Iu(n))for(var o=0;o<n.length;o++){l=n[o];var a=r+Si(l,o);u+=wr(l,e,t,a,i)}else if(a=Es(n),typeof a=="function")for(n=a.call(n),o=0;!(l=n.next()).done;)l=l.value,a=r+Si(l,o++),u+=wr(l,e,t,a,i);else if(l==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return u}function ir(n,e,t){if(n==null)return n;var r=[],i=0;return wr(n,r,"","",function(l){return e.call(t,l,i++)}),r}function Ns(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var cn={current:null},Sr={transition:null},As={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:Sr,ReactCurrentOwner:$l};function ua(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:ir,forEach:function(n,e,t){ir(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ir(n,function(){e++}),e},toArray:function(n){return ir(n,function(e){return e})||[]},only:function(n){if(!Wl(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};z.Component=ct;z.Fragment=gs;z.Profiler=vs;z.PureComponent=Ql;z.StrictMode=ms;z.Suspense=ws;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=As;z.act=ua;z.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=na({},n.props),i=n.key,l=n.ref,u=n._owner;if(e!=null){if(e.ref!==void 0&&(l=e.ref,u=$l.current),e.key!==void 0&&(i=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(a in e)ra.call(e,a)&&!ia.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&o!==void 0?o[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){o=Array(a);for(var h=0;h<a;h++)o[h]=arguments[h+2];r.children=o}return{$$typeof:Yt,type:n.type,key:i,ref:l,props:r,_owner:u}};z.createContext=function(n){return n={$$typeof:Cs,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:ys,_context:n},n.Consumer=n};z.createElement=la;z.createFactory=function(n){var e=la.bind(null,n);return e.type=n,e};z.createRef=function(){return{current:null}};z.forwardRef=function(n){return{$$typeof:ks,render:n}};z.isValidElement=Wl;z.lazy=function(n){return{$$typeof:xs,_payload:{_status:-1,_result:n},_init:Ns}};z.memo=function(n,e){return{$$typeof:Ss,type:n,compare:e===void 0?null:e}};z.startTransition=function(n){var e=Sr.transition;Sr.transition={};try{n()}finally{Sr.transition=e}};z.unstable_act=ua;z.useCallback=function(n,e){return cn.current.useCallback(n,e)};z.useContext=function(n){return cn.current.useContext(n)};z.useDebugValue=function(){};z.useDeferredValue=function(n){return cn.current.useDeferredValue(n)};z.useEffect=function(n,e){return cn.current.useEffect(n,e)};z.useId=function(){return cn.current.useId()};z.useImperativeHandle=function(n,e,t){return cn.current.useImperativeHandle(n,e,t)};z.useInsertionEffect=function(n,e){return cn.current.useInsertionEffect(n,e)};z.useLayoutEffect=function(n,e){return cn.current.useLayoutEffect(n,e)};z.useMemo=function(n,e){return cn.current.useMemo(n,e)};z.useReducer=function(n,e,t){return cn.current.useReducer(n,e,t)};z.useRef=function(n){return cn.current.useRef(n)};z.useState=function(n){return cn.current.useState(n)};z.useSyncExternalStore=function(n,e,t){return cn.current.useSyncExternalStore(n,e,t)};z.useTransition=function(){return cn.current.useTransition()};z.version="18.3.1";Jo.exports=z;var vn=Jo.exports;const g=ps(vn);var Zi={},oa={exports:{}},Sn={},aa={exports:{}},ca={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(y,D){var B=y.length;y.push(D);n:for(;0<B;){var K=B-1>>>1,Y=y[K];if(0<i(Y,D))y[K]=D,y[B]=Y,B=K;else break n}}function t(y){return y.length===0?null:y[0]}function r(y){if(y.length===0)return null;var D=y[0],B=y.pop();if(B!==D){y[0]=B;n:for(var K=0,Y=y.length,tr=Y>>>1;K<tr;){var ke=2*(K+1)-1,wi=y[ke],we=ke+1,rr=y[we];if(0>i(wi,B))we<Y&&0>i(rr,wi)?(y[K]=rr,y[we]=B,K=we):(y[K]=wi,y[ke]=B,K=ke);else if(we<Y&&0>i(rr,B))y[K]=rr,y[we]=B,K=we;else break n}}return D}function i(y,D){var B=y.sortIndex-D.sortIndex;return B!==0?B:y.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,o=u.now();n.unstable_now=function(){return u.now()-o}}var a=[],h=[],m=1,d=null,p=3,k=!1,S=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function s(y){for(var D=t(h);D!==null;){if(D.callback===null)r(h);else if(D.startTime<=y)r(h),D.sortIndex=D.expirationTime,e(a,D);else break;D=t(h)}}function v(y){if(x=!1,s(y),!S)if(t(a)!==null)S=!0,Ve(E);else{var D=t(h);D!==null&&w(v,D.startTime-y)}}function E(y,D){S=!1,x&&(x=!1,f(A),A=-1),k=!0;var B=p;try{for(s(D),d=t(a);d!==null&&(!(d.expirationTime>D)||y&&!mn());){var K=d.callback;if(typeof K=="function"){d.callback=null,p=d.priorityLevel;var Y=K(d.expirationTime<=D);D=n.unstable_now(),typeof Y=="function"?d.callback=Y:d===t(a)&&r(a),s(D)}else r(a);d=t(a)}if(d!==null)var tr=!0;else{var ke=t(h);ke!==null&&w(v,ke.startTime-D),tr=!1}return tr}finally{d=null,p=B,k=!1}}var L=!1,N=null,A=-1,I=5,_=-1;function mn(){return!(n.unstable_now()-_<I)}function Ce(){if(N!==null){var y=n.unstable_now();_=y;var D=!0;try{D=N(!0,y)}finally{D?Jn():(L=!1,N=null)}}else L=!1}var Jn;if(typeof c=="function")Jn=function(){c(Ce)};else if(typeof MessageChannel<"u"){var er=new MessageChannel,ki=er.port2;er.port1.onmessage=Ce,Jn=function(){ki.postMessage(null)}}else Jn=function(){P(Ce,0)};function Ve(y){N=y,L||(L=!0,Jn())}function w(y,D){A=P(function(){y(n.unstable_now())},D)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(y){y.callback=null},n.unstable_continueExecution=function(){S||k||(S=!0,Ve(E))},n.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<y?Math.floor(1e3/y):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return t(a)},n.unstable_next=function(y){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var B=p;p=D;try{return y()}finally{p=B}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(y,D){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var B=p;p=y;try{return D()}finally{p=B}},n.unstable_scheduleCallback=function(y,D,B){var K=n.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?K+B:K):B=K,y){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=B+Y,y={id:m++,callback:D,priorityLevel:y,startTime:B,expirationTime:Y,sortIndex:-1},B>K?(y.sortIndex=B,e(h,y),t(a)===null&&y===t(h)&&(x?(f(A),A=-1):x=!0,w(v,B-K))):(y.sortIndex=Y,e(a,y),S||k||(S=!0,Ve(E))),y},n.unstable_shouldYield=mn,n.unstable_wrapCallback=function(y){var D=p;return function(){var B=p;p=D;try{return y.apply(this,arguments)}finally{p=B}}}})(ca);aa.exports=ca;var Ds=aa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=vn,wn=Ds;function C(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sa=new Set,zt={};function Me(n,e){tt(n,e),tt(n+"Capture",e)}function tt(n,e){for(zt[n]=e,n=0;n<e.length;n++)sa.add(e[n])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ji=Object.prototype.hasOwnProperty,Ps=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uu={},Hu={};function _s(n){return Ji.call(Hu,n)?!0:Ji.call(Uu,n)?!1:Ps.test(n)?Hu[n]=!0:(Uu[n]=!0,!1)}function zs(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Ms(n,e,t,r){if(e===null||typeof e>"u"||zs(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(n,e,t,r,i,l,u){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=l,this.removeEmptyString=u}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){en[n]=new sn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];en[e]=new sn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){en[n]=new sn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){en[n]=new sn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){en[n]=new sn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){en[n]=new sn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){en[n]=new sn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){en[n]=new sn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){en[n]=new sn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Gl=/[\-:]([a-z])/g;function Xl(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Gl,Xl);en[e]=new sn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Gl,Xl);en[e]=new sn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Gl,Xl);en[e]=new sn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){en[n]=new sn(n,1,!1,n.toLowerCase(),null,!1,!1)});en.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){en[n]=new sn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Yl(n,e,t,r){var i=en.hasOwnProperty(e)?en[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ms(e,t,i,r)&&(t=null),r||i===null?_s(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):i.mustUseProperty?n[i.propertyName]=t===null?i.type===3?!1:"":t:(e=i.attributeName,r=i.attributeNamespace,t===null?n.removeAttribute(e):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var Zn=Bs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),Re=Symbol.for("react.portal"),je=Symbol.for("react.fragment"),Zl=Symbol.for("react.strict_mode"),bi=Symbol.for("react.profiler"),ha=Symbol.for("react.provider"),fa=Symbol.for("react.context"),Jl=Symbol.for("react.forward_ref"),nl=Symbol.for("react.suspense"),el=Symbol.for("react.suspense_list"),bl=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),pa=Symbol.for("react.offscreen"),Qu=Symbol.iterator;function ft(n){return n===null||typeof n!="object"?null:(n=Qu&&n[Qu]||n["@@iterator"],typeof n=="function"?n:null)}var H=Object.assign,xi;function kt(n){if(xi===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);xi=e&&e[1]||""}return`
`+xi+n}var Ei=!1;function Ti(n,e){if(!n||Ei)return"";Ei=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(n,[],e)}else{try{e.call()}catch(h){r=h}n.call(e.prototype)}else{try{throw Error()}catch(h){r=h}n()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),l=r.stack.split(`
`),u=i.length-1,o=l.length-1;1<=u&&0<=o&&i[u]!==l[o];)o--;for(;1<=u&&0<=o;u--,o--)if(i[u]!==l[o]){if(u!==1||o!==1)do if(u--,o--,0>o||i[u]!==l[o]){var a=`
`+i[u].replace(" at new "," at ");return n.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",n.displayName)),a}while(1<=u&&0<=o);break}}}finally{Ei=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?kt(n):""}function qs(n){switch(n.tag){case 5:return kt(n.type);case 16:return kt("Lazy");case 13:return kt("Suspense");case 19:return kt("SuspenseList");case 0:case 2:case 15:return n=Ti(n.type,!1),n;case 11:return n=Ti(n.type.render,!1),n;case 1:return n=Ti(n.type,!0),n;default:return""}}function tl(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case je:return"Fragment";case Re:return"Portal";case bi:return"Profiler";case Zl:return"StrictMode";case nl:return"Suspense";case el:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case fa:return(n.displayName||"Context")+".Consumer";case ha:return(n._context.displayName||"Context")+".Provider";case Jl:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case bl:return e=n.displayName||null,e!==null?e:tl(n.type)||"Memo";case ne:e=n._payload,n=n._init;try{return tl(n(e))}catch{}}return null}function Vs(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tl(e);case 8:return e===Zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function de(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function da(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fs(n){var e=da(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(u){r=""+u,l.call(this,u)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ur(n){n._valueTracker||(n._valueTracker=Fs(n))}function ga(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=da(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function Mr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function rl(n,e){var t=e.checked;return H({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ku(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=de(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ma(n,e){e=e.checked,e!=null&&Yl(n,"checked",e,!1)}function il(n,e){ma(n,e);var t=de(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ll(n,e.type,t):e.hasOwnProperty("defaultValue")&&ll(n,e.type,de(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function $u(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ll(n,e,t){(e!=="number"||Mr(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var wt=Array.isArray;function Ye(n,e,t,r){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&r&&(n[t].defaultSelected=!0)}else{for(t=""+de(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,r&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function ul(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return H({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Wu(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(C(92));if(wt(t)){if(1<t.length)throw Error(C(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:de(t)}}function va(n,e){var t=de(e.value),r=de(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function Gu(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ya(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ol(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ya(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var or,Ca=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,i){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,i)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=or.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Mt(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Et={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rs=["Webkit","ms","Moz","O"];Object.keys(Et).forEach(function(n){Rs.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Et[e]=Et[n]})});function ka(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Et.hasOwnProperty(n)&&Et[n]?(""+e).trim():e+"px"}function wa(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=ka(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,i):n[t]=i}}var js=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function al(n,e){if(e){if(js[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function cl(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function nu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hl=null,Ze=null,Je=null;function Xu(n){if(n=bt(n)){if(typeof hl!="function")throw Error(C(280));var e=n.stateNode;e&&(e=ai(e),hl(n.stateNode,n.type,e))}}function Sa(n){Ze?Je?Je.push(n):Je=[n]:Ze=n}function xa(){if(Ze){var n=Ze,e=Je;if(Je=Ze=null,Xu(n),e)for(n=0;n<e.length;n++)Xu(e[n])}}function Ea(n,e){return n(e)}function Ta(){}var Li=!1;function La(n,e,t){if(Li)return n(e,t);Li=!0;try{return Ea(n,e,t)}finally{Li=!1,(Ze!==null||Je!==null)&&(Ta(),xa())}}function qt(n,e){var t=n.stateNode;if(t===null)return null;var r=ai(t);if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(C(231,e,typeof t));return t}var fl=!1;if(Wn)try{var pt={};Object.defineProperty(pt,"passive",{get:function(){fl=!0}}),window.addEventListener("test",pt,pt),window.removeEventListener("test",pt,pt)}catch{fl=!1}function Is(n,e,t,r,i,l,u,o,a){var h=Array.prototype.slice.call(arguments,3);try{e.apply(t,h)}catch(m){this.onError(m)}}var Tt=!1,qr=null,Vr=!1,pl=null,Os={onError:function(n){Tt=!0,qr=n}};function Us(n,e,t,r,i,l,u,o,a){Tt=!1,qr=null,Is.apply(Os,arguments)}function Hs(n,e,t,r,i,l,u,o,a){if(Us.apply(this,arguments),Tt){if(Tt){var h=qr;Tt=!1,qr=null}else throw Error(C(198));Vr||(Vr=!0,pl=h)}}function qe(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Na(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Yu(n){if(qe(n)!==n)throw Error(C(188))}function Qs(n){var e=n.alternate;if(!e){if(e=qe(n),e===null)throw Error(C(188));return e!==n?null:n}for(var t=n,r=e;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Yu(i),n;if(l===r)return Yu(i),e;l=l.sibling}throw Error(C(188))}if(t.return!==r.return)t=i,r=l;else{for(var u=!1,o=i.child;o;){if(o===t){u=!0,t=i,r=l;break}if(o===r){u=!0,r=i,t=l;break}o=o.sibling}if(!u){for(o=l.child;o;){if(o===t){u=!0,t=l,r=i;break}if(o===r){u=!0,r=l,t=i;break}o=o.sibling}if(!u)throw Error(C(189))}}if(t.alternate!==r)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?n:e}function Aa(n){return n=Qs(n),n!==null?Da(n):null}function Da(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Da(n);if(e!==null)return e;n=n.sibling}return null}var Ba=wn.unstable_scheduleCallback,Zu=wn.unstable_cancelCallback,Ks=wn.unstable_shouldYield,$s=wn.unstable_requestPaint,$=wn.unstable_now,Ws=wn.unstable_getCurrentPriorityLevel,eu=wn.unstable_ImmediatePriority,Pa=wn.unstable_UserBlockingPriority,Fr=wn.unstable_NormalPriority,Gs=wn.unstable_LowPriority,_a=wn.unstable_IdlePriority,ii=null,In=null;function Xs(n){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(ii,n,void 0,(n.current.flags&128)===128)}catch{}}var Mn=Math.clz32?Math.clz32:Js,Ys=Math.log,Zs=Math.LN2;function Js(n){return n>>>=0,n===0?32:31-(Ys(n)/Zs|0)|0}var ar=64,cr=4194304;function St(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Rr(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,i=n.suspendedLanes,l=n.pingedLanes,u=t&268435455;if(u!==0){var o=u&~i;o!==0?r=St(o):(l&=u,l!==0&&(r=St(l)))}else u=t&~i,u!==0?r=St(u):l!==0&&(r=St(l));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,l=e&-e,i>=l||i===16&&(l&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-Mn(e),i=1<<t,r|=n[t],e&=~i;return r}function bs(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nh(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,i=n.expirationTimes,l=n.pendingLanes;0<l;){var u=31-Mn(l),o=1<<u,a=i[u];a===-1?(!(o&t)||o&r)&&(i[u]=bs(o,e)):a<=e&&(n.expiredLanes|=o),l&=~o}}function dl(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function za(){var n=ar;return ar<<=1,!(ar&4194240)&&(ar=64),n}function Ni(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Zt(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Mn(e),n[e]=t}function eh(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var i=31-Mn(t),l=1<<i;e[i]=0,r[i]=-1,n[i]=-1,t&=~l}}function tu(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-Mn(t),i=1<<r;i&e|n[r]&e&&(n[r]|=e),t&=~i}}var q=0;function Ma(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var qa,ru,Va,Fa,Ra,gl=!1,sr=[],ue=null,oe=null,ae=null,Vt=new Map,Ft=new Map,te=[],th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ju(n,e){switch(n){case"focusin":case"focusout":ue=null;break;case"dragenter":case"dragleave":oe=null;break;case"mouseover":case"mouseout":ae=null;break;case"pointerover":case"pointerout":Vt.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ft.delete(e.pointerId)}}function dt(n,e,t,r,i,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},e!==null&&(e=bt(e),e!==null&&ru(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function rh(n,e,t,r,i){switch(e){case"focusin":return ue=dt(ue,n,e,t,r,i),!0;case"dragenter":return oe=dt(oe,n,e,t,r,i),!0;case"mouseover":return ae=dt(ae,n,e,t,r,i),!0;case"pointerover":var l=i.pointerId;return Vt.set(l,dt(Vt.get(l)||null,n,e,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Ft.set(l,dt(Ft.get(l)||null,n,e,t,r,i)),!0}return!1}function ja(n){var e=Ee(n.target);if(e!==null){var t=qe(e);if(t!==null){if(e=t.tag,e===13){if(e=Na(t),e!==null){n.blockedOn=e,Ra(n.priority,function(){Va(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=ml(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);sl=r,t.target.dispatchEvent(r),sl=null}else return e=bt(t),e!==null&&ru(e),n.blockedOn=t,!1;e.shift()}return!0}function bu(n,e,t){xr(n)&&t.delete(e)}function ih(){gl=!1,ue!==null&&xr(ue)&&(ue=null),oe!==null&&xr(oe)&&(oe=null),ae!==null&&xr(ae)&&(ae=null),Vt.forEach(bu),Ft.forEach(bu)}function gt(n,e){n.blockedOn===e&&(n.blockedOn=null,gl||(gl=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,ih)))}function Rt(n){function e(i){return gt(i,n)}if(0<sr.length){gt(sr[0],n);for(var t=1;t<sr.length;t++){var r=sr[t];r.blockedOn===n&&(r.blockedOn=null)}}for(ue!==null&&gt(ue,n),oe!==null&&gt(oe,n),ae!==null&&gt(ae,n),Vt.forEach(e),Ft.forEach(e),t=0;t<te.length;t++)r=te[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<te.length&&(t=te[0],t.blockedOn===null);)ja(t),t.blockedOn===null&&te.shift()}var be=Zn.ReactCurrentBatchConfig,jr=!0;function lh(n,e,t,r){var i=q,l=be.transition;be.transition=null;try{q=1,iu(n,e,t,r)}finally{q=i,be.transition=l}}function uh(n,e,t,r){var i=q,l=be.transition;be.transition=null;try{q=4,iu(n,e,t,r)}finally{q=i,be.transition=l}}function iu(n,e,t,r){if(jr){var i=ml(n,e,t,r);if(i===null)Fi(n,e,r,Ir,t),Ju(n,r);else if(rh(i,n,e,t,r))r.stopPropagation();else if(Ju(n,r),e&4&&-1<th.indexOf(n)){for(;i!==null;){var l=bt(i);if(l!==null&&qa(l),l=ml(n,e,t,r),l===null&&Fi(n,e,r,Ir,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Fi(n,e,r,null,t)}}var Ir=null;function ml(n,e,t,r){if(Ir=null,n=nu(r),n=Ee(n),n!==null)if(e=qe(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Na(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ir=n,null}function Ia(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ws()){case eu:return 1;case Pa:return 4;case Fr:case Gs:return 16;case _a:return 536870912;default:return 16}default:return 16}}var ie=null,lu=null,Er=null;function Oa(){if(Er)return Er;var n,e=lu,t=e.length,r,i="value"in ie?ie.value:ie.textContent,l=i.length;for(n=0;n<t&&e[n]===i[n];n++);var u=t-n;for(r=1;r<=u&&e[t-r]===i[l-r];r++);return Er=i.slice(n,1<r?1-r:void 0)}function Tr(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function hr(){return!0}function no(){return!1}function xn(n){function e(t,r,i,l,u){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?hr:no,this.isPropagationStopped=no,this}return H(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),e}var st={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=xn(st),Jt=H({},st,{view:0,detail:0}),oh=xn(Jt),Ai,Di,mt,li=H({},Jt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==mt&&(mt&&n.type==="mousemove"?(Ai=n.screenX-mt.screenX,Di=n.screenY-mt.screenY):Di=Ai=0,mt=n),Ai)},movementY:function(n){return"movementY"in n?n.movementY:Di}}),eo=xn(li),ah=H({},li,{dataTransfer:0}),ch=xn(ah),sh=H({},Jt,{relatedTarget:0}),Bi=xn(sh),hh=H({},st,{animationName:0,elapsedTime:0,pseudoElement:0}),fh=xn(hh),ph=H({},st,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dh=xn(ph),gh=H({},st,{data:0}),to=xn(gh),mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ch(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=yh[n])?!!e[n]:!1}function ou(){return Ch}var kh=H({},Jt,{key:function(n){if(n.key){var e=mh[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Tr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?vh[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(n){return n.type==="keypress"?Tr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Tr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wh=xn(kh),Sh=H({},li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ro=xn(Sh),xh=H({},Jt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Eh=xn(xh),Th=H({},st,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lh=xn(Th),Nh=H({},li,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ah=xn(Nh),Dh=[9,13,27,32],au=Wn&&"CompositionEvent"in window,Lt=null;Wn&&"documentMode"in document&&(Lt=document.documentMode);var Bh=Wn&&"TextEvent"in window&&!Lt,Ua=Wn&&(!au||Lt&&8<Lt&&11>=Lt),io=" ",lo=!1;function Ha(n,e){switch(n){case"keyup":return Dh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qa(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ie=!1;function Ph(n,e){switch(n){case"compositionend":return Qa(e);case"keypress":return e.which!==32?null:(lo=!0,io);case"textInput":return n=e.data,n===io&&lo?null:n;default:return null}}function _h(n,e){if(Ie)return n==="compositionend"||!au&&Ha(n,e)?(n=Oa(),Er=lu=ie=null,Ie=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ua&&e.locale!=="ko"?null:e.data;default:return null}}var zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uo(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!zh[n.type]:e==="textarea"}function Ka(n,e,t,r){Sa(r),e=Or(e,"onChange"),0<e.length&&(t=new uu("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Nt=null,jt=null;function Mh(n){tc(n,0)}function ui(n){var e=He(n);if(ga(e))return n}function qh(n,e){if(n==="change")return e}var $a=!1;if(Wn){var Pi;if(Wn){var _i="oninput"in document;if(!_i){var oo=document.createElement("div");oo.setAttribute("oninput","return;"),_i=typeof oo.oninput=="function"}Pi=_i}else Pi=!1;$a=Pi&&(!document.documentMode||9<document.documentMode)}function ao(){Nt&&(Nt.detachEvent("onpropertychange",Wa),jt=Nt=null)}function Wa(n){if(n.propertyName==="value"&&ui(jt)){var e=[];Ka(e,jt,n,nu(n)),La(Mh,e)}}function Vh(n,e,t){n==="focusin"?(ao(),Nt=e,jt=t,Nt.attachEvent("onpropertychange",Wa)):n==="focusout"&&ao()}function Fh(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ui(jt)}function Rh(n,e){if(n==="click")return ui(e)}function jh(n,e){if(n==="input"||n==="change")return ui(e)}function Ih(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Vn=typeof Object.is=="function"?Object.is:Ih;function It(n,e){if(Vn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Ji.call(e,i)||!Vn(n[i],e[i]))return!1}return!0}function co(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function so(n,e){var t=co(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=co(t)}}function Ga(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ga(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Xa(){for(var n=window,e=Mr();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Mr(n.document)}return e}function cu(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Oh(n){var e=Xa(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Ga(t.ownerDocument.documentElement,t)){if(r!==null&&cu(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!n.extend&&l>r&&(i=r,r=l,l=i),i=so(t,l);var u=so(t,r);i&&u&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==u.node||n.focusOffset!==u.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),l>r?(n.addRange(e),n.extend(u.node,u.offset)):(e.setEnd(u.node,u.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Uh=Wn&&"documentMode"in document&&11>=document.documentMode,Oe=null,vl=null,At=null,yl=!1;function ho(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;yl||Oe==null||Oe!==Mr(r)||(r=Oe,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),At&&It(At,r)||(At=r,r=Or(vl,"onSelect"),0<r.length&&(e=new uu("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=Oe)))}function fr(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ue={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")},zi={},Ya={};Wn&&(Ya=document.createElement("div").style,"AnimationEvent"in window||(delete Ue.animationend.animation,delete Ue.animationiteration.animation,delete Ue.animationstart.animation),"TransitionEvent"in window||delete Ue.transitionend.transition);function oi(n){if(zi[n])return zi[n];if(!Ue[n])return n;var e=Ue[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ya)return zi[n]=e[t];return n}var Za=oi("animationend"),Ja=oi("animationiteration"),ba=oi("animationstart"),nc=oi("transitionend"),ec=new Map,fo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function me(n,e){ec.set(n,e),Me(e,[n])}for(var Mi=0;Mi<fo.length;Mi++){var qi=fo[Mi],Hh=qi.toLowerCase(),Qh=qi[0].toUpperCase()+qi.slice(1);me(Hh,"on"+Qh)}me(Za,"onAnimationEnd");me(Ja,"onAnimationIteration");me(ba,"onAnimationStart");me("dblclick","onDoubleClick");me("focusin","onFocus");me("focusout","onBlur");me(nc,"onTransitionEnd");tt("onMouseEnter",["mouseout","mouseover"]);tt("onMouseLeave",["mouseout","mouseover"]);tt("onPointerEnter",["pointerout","pointerover"]);tt("onPointerLeave",["pointerout","pointerover"]);Me("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Me("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Me("onBeforeInput",["compositionend","keypress","textInput","paste"]);Me("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Me("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Me("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kh=new Set("cancel close invalid load scroll toggle".split(" ").concat(xt));function po(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,Hs(r,e,void 0,n),n.currentTarget=null}function tc(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],i=r.event;r=r.listeners;n:{var l=void 0;if(e)for(var u=r.length-1;0<=u;u--){var o=r[u],a=o.instance,h=o.currentTarget;if(o=o.listener,a!==l&&i.isPropagationStopped())break n;po(i,o,h),l=a}else for(u=0;u<r.length;u++){if(o=r[u],a=o.instance,h=o.currentTarget,o=o.listener,a!==l&&i.isPropagationStopped())break n;po(i,o,h),l=a}}}if(Vr)throw n=pl,Vr=!1,pl=null,n}function F(n,e){var t=e[xl];t===void 0&&(t=e[xl]=new Set);var r=n+"__bubble";t.has(r)||(rc(e,n,2,!1),t.add(r))}function Vi(n,e,t){var r=0;e&&(r|=4),rc(t,n,r,e)}var pr="_reactListening"+Math.random().toString(36).slice(2);function Ot(n){if(!n[pr]){n[pr]=!0,sa.forEach(function(t){t!=="selectionchange"&&(Kh.has(t)||Vi(t,!1,n),Vi(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[pr]||(e[pr]=!0,Vi("selectionchange",!1,e))}}function rc(n,e,t,r){switch(Ia(e)){case 1:var i=lh;break;case 4:i=uh;break;default:i=iu}t=i.bind(null,e,t,n),i=void 0,!fl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function Fi(n,e,t,r,i){var l=r;if(!(e&1)&&!(e&2)&&r!==null)n:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(u===4)for(u=r.return;u!==null;){var a=u.tag;if((a===3||a===4)&&(a=u.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;u=u.return}for(;o!==null;){if(u=Ee(o),u===null)return;if(a=u.tag,a===5||a===6){r=l=u;continue n}o=o.parentNode}}r=r.return}La(function(){var h=l,m=nu(t),d=[];n:{var p=ec.get(n);if(p!==void 0){var k=uu,S=n;switch(n){case"keypress":if(Tr(t)===0)break n;case"keydown":case"keyup":k=wh;break;case"focusin":S="focus",k=Bi;break;case"focusout":S="blur",k=Bi;break;case"beforeblur":case"afterblur":k=Bi;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=eo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=ch;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Eh;break;case Za:case Ja:case ba:k=fh;break;case nc:k=Lh;break;case"scroll":k=oh;break;case"wheel":k=Ah;break;case"copy":case"cut":case"paste":k=dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ro}var x=(e&4)!==0,P=!x&&n==="scroll",f=x?p!==null?p+"Capture":null:p;x=[];for(var c=h,s;c!==null;){s=c;var v=s.stateNode;if(s.tag===5&&v!==null&&(s=v,f!==null&&(v=qt(c,f),v!=null&&x.push(Ut(c,v,s)))),P)break;c=c.return}0<x.length&&(p=new k(p,S,null,t,m),d.push({event:p,listeners:x}))}}if(!(e&7)){n:{if(p=n==="mouseover"||n==="pointerover",k=n==="mouseout"||n==="pointerout",p&&t!==sl&&(S=t.relatedTarget||t.fromElement)&&(Ee(S)||S[Gn]))break n;if((k||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,k?(S=t.relatedTarget||t.toElement,k=h,S=S?Ee(S):null,S!==null&&(P=qe(S),S!==P||S.tag!==5&&S.tag!==6)&&(S=null)):(k=null,S=h),k!==S)){if(x=eo,v="onMouseLeave",f="onMouseEnter",c="mouse",(n==="pointerout"||n==="pointerover")&&(x=ro,v="onPointerLeave",f="onPointerEnter",c="pointer"),P=k==null?p:He(k),s=S==null?p:He(S),p=new x(v,c+"leave",k,t,m),p.target=P,p.relatedTarget=s,v=null,Ee(m)===h&&(x=new x(f,c+"enter",S,t,m),x.target=s,x.relatedTarget=P,v=x),P=v,k&&S)e:{for(x=k,f=S,c=0,s=x;s;s=Fe(s))c++;for(s=0,v=f;v;v=Fe(v))s++;for(;0<c-s;)x=Fe(x),c--;for(;0<s-c;)f=Fe(f),s--;for(;c--;){if(x===f||f!==null&&x===f.alternate)break e;x=Fe(x),f=Fe(f)}x=null}else x=null;k!==null&&go(d,p,k,x,!1),S!==null&&P!==null&&go(d,P,S,x,!0)}}n:{if(p=h?He(h):window,k=p.nodeName&&p.nodeName.toLowerCase(),k==="select"||k==="input"&&p.type==="file")var E=qh;else if(uo(p))if($a)E=jh;else{E=Fh;var L=Vh}else(k=p.nodeName)&&k.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Rh);if(E&&(E=E(n,h))){Ka(d,E,t,m);break n}L&&L(n,p,h),n==="focusout"&&(L=p._wrapperState)&&L.controlled&&p.type==="number"&&ll(p,"number",p.value)}switch(L=h?He(h):window,n){case"focusin":(uo(L)||L.contentEditable==="true")&&(Oe=L,vl=h,At=null);break;case"focusout":At=vl=Oe=null;break;case"mousedown":yl=!0;break;case"contextmenu":case"mouseup":case"dragend":yl=!1,ho(d,t,m);break;case"selectionchange":if(Uh)break;case"keydown":case"keyup":ho(d,t,m)}var N;if(au)n:{switch(n){case"compositionstart":var A="onCompositionStart";break n;case"compositionend":A="onCompositionEnd";break n;case"compositionupdate":A="onCompositionUpdate";break n}A=void 0}else Ie?Ha(n,t)&&(A="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(Ua&&t.locale!=="ko"&&(Ie||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ie&&(N=Oa()):(ie=m,lu="value"in ie?ie.value:ie.textContent,Ie=!0)),L=Or(h,A),0<L.length&&(A=new to(A,n,null,t,m),d.push({event:A,listeners:L}),N?A.data=N:(N=Qa(t),N!==null&&(A.data=N)))),(N=Bh?Ph(n,t):_h(n,t))&&(h=Or(h,"onBeforeInput"),0<h.length&&(m=new to("onBeforeInput","beforeinput",null,t,m),d.push({event:m,listeners:h}),m.data=N))}tc(d,e)})}function Ut(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Or(n,e){for(var t=e+"Capture",r=[];n!==null;){var i=n,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=qt(n,t),l!=null&&r.unshift(Ut(n,l,i)),l=qt(n,e),l!=null&&r.push(Ut(n,l,i))),n=n.return}return r}function Fe(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function go(n,e,t,r,i){for(var l=e._reactName,u=[];t!==null&&t!==r;){var o=t,a=o.alternate,h=o.stateNode;if(a!==null&&a===r)break;o.tag===5&&h!==null&&(o=h,i?(a=qt(t,l),a!=null&&u.unshift(Ut(t,a,o))):i||(a=qt(t,l),a!=null&&u.push(Ut(t,a,o)))),t=t.return}u.length!==0&&n.push({event:e,listeners:u})}var $h=/\r\n?/g,Wh=/\u0000|\uFFFD/g;function mo(n){return(typeof n=="string"?n:""+n).replace($h,`
`).replace(Wh,"")}function dr(n,e,t){if(e=mo(e),mo(n)!==e&&t)throw Error(C(425))}function Ur(){}var Cl=null,kl=null;function wl(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,Gh=typeof clearTimeout=="function"?clearTimeout:void 0,vo=typeof Promise=="function"?Promise:void 0,Xh=typeof queueMicrotask=="function"?queueMicrotask:typeof vo<"u"?function(n){return vo.resolve(null).then(n).catch(Yh)}:Sl;function Yh(n){setTimeout(function(){throw n})}function Ri(n,e){var t=e,r=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){n.removeChild(i),Rt(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Rt(e)}function ce(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function yo(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ht=Math.random().toString(36).slice(2),jn="__reactFiber$"+ht,Ht="__reactProps$"+ht,Gn="__reactContainer$"+ht,xl="__reactEvents$"+ht,Zh="__reactListeners$"+ht,Jh="__reactHandles$"+ht;function Ee(n){var e=n[jn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Gn]||t[jn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=yo(n);n!==null;){if(t=n[jn])return t;n=yo(n)}return e}n=t,t=n.parentNode}return null}function bt(n){return n=n[jn]||n[Gn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function He(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(C(33))}function ai(n){return n[Ht]||null}var El=[],Qe=-1;function ve(n){return{current:n}}function R(n){0>Qe||(n.current=El[Qe],El[Qe]=null,Qe--)}function V(n,e){Qe++,El[Qe]=n.current,n.current=e}var ge={},un=ve(ge),pn=ve(!1),De=ge;function rt(n,e){var t=n.type.contextTypes;if(!t)return ge;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=e[l];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),i}function dn(n){return n=n.childContextTypes,n!=null}function Hr(){R(pn),R(un)}function Co(n,e,t){if(un.current!==ge)throw Error(C(168));V(un,e),V(pn,t)}function ic(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,Vs(n)||"Unknown",i));return H({},t,r)}function Qr(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ge,De=un.current,V(un,n),V(pn,pn.current),!0}function ko(n,e,t){var r=n.stateNode;if(!r)throw Error(C(169));t?(n=ic(n,e,De),r.__reactInternalMemoizedMergedChildContext=n,R(pn),R(un),V(un,n)):R(pn),V(pn,t)}var Hn=null,ci=!1,ji=!1;function lc(n){Hn===null?Hn=[n]:Hn.push(n)}function bh(n){ci=!0,lc(n)}function ye(){if(!ji&&Hn!==null){ji=!0;var n=0,e=q;try{var t=Hn;for(q=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}Hn=null,ci=!1}catch(i){throw Hn!==null&&(Hn=Hn.slice(n+1)),Ba(eu,ye),i}finally{q=e,ji=!1}}return null}var Ke=[],$e=0,Kr=null,$r=0,En=[],Tn=0,Be=null,Qn=1,Kn="";function Se(n,e){Ke[$e++]=$r,Ke[$e++]=Kr,Kr=n,$r=e}function uc(n,e,t){En[Tn++]=Qn,En[Tn++]=Kn,En[Tn++]=Be,Be=n;var r=Qn;n=Kn;var i=32-Mn(r)-1;r&=~(1<<i),t+=1;var l=32-Mn(e)+i;if(30<l){var u=i-i%5;l=(r&(1<<u)-1).toString(32),r>>=u,i-=u,Qn=1<<32-Mn(e)+i|t<<i|r,Kn=l+n}else Qn=1<<l|t<<i|r,Kn=n}function su(n){n.return!==null&&(Se(n,1),uc(n,1,0))}function hu(n){for(;n===Kr;)Kr=Ke[--$e],Ke[$e]=null,$r=Ke[--$e],Ke[$e]=null;for(;n===Be;)Be=En[--Tn],En[Tn]=null,Kn=En[--Tn],En[Tn]=null,Qn=En[--Tn],En[Tn]=null}var kn=null,Cn=null,j=!1,zn=null;function oc(n,e){var t=Ln(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function wo(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,kn=n,Cn=ce(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,kn=n,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Be!==null?{id:Qn,overflow:Kn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ln(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,kn=n,Cn=null,!0):!1;default:return!1}}function Tl(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ll(n){if(j){var e=Cn;if(e){var t=e;if(!wo(n,e)){if(Tl(n))throw Error(C(418));e=ce(t.nextSibling);var r=kn;e&&wo(n,e)?oc(r,t):(n.flags=n.flags&-4097|2,j=!1,kn=n)}}else{if(Tl(n))throw Error(C(418));n.flags=n.flags&-4097|2,j=!1,kn=n}}}function So(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function gr(n){if(n!==kn)return!1;if(!j)return So(n),j=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!wl(n.type,n.memoizedProps)),e&&(e=Cn)){if(Tl(n))throw ac(),Error(C(418));for(;e;)oc(n,e),e=ce(e.nextSibling)}if(So(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(C(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Cn=ce(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Cn=null}}else Cn=kn?ce(n.stateNode.nextSibling):null;return!0}function ac(){for(var n=Cn;n;)n=ce(n.nextSibling)}function it(){Cn=kn=null,j=!1}function fu(n){zn===null?zn=[n]:zn.push(n)}var nf=Zn.ReactCurrentBatchConfig;function vt(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var r=t.stateNode}if(!r)throw Error(C(147,n));var i=r,l=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===l?e.ref:(e=function(u){var o=i.refs;u===null?delete o[l]:o[l]=u},e._stringRef=l,e)}if(typeof n!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,n))}return n}function mr(n,e){throw n=Object.prototype.toString.call(e),Error(C(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function xo(n){var e=n._init;return e(n._payload)}function cc(n){function e(f,c){if(n){var s=f.deletions;s===null?(f.deletions=[c],f.flags|=16):s.push(c)}}function t(f,c){if(!n)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=pe(f,c),f.index=0,f.sibling=null,f}function l(f,c,s){return f.index=s,n?(s=f.alternate,s!==null?(s=s.index,s<c?(f.flags|=2,c):s):(f.flags|=2,c)):(f.flags|=1048576,c)}function u(f){return n&&f.alternate===null&&(f.flags|=2),f}function o(f,c,s,v){return c===null||c.tag!==6?(c=$i(s,f.mode,v),c.return=f,c):(c=i(c,s),c.return=f,c)}function a(f,c,s,v){var E=s.type;return E===je?m(f,c,s.props.children,v,s.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ne&&xo(E)===c.type)?(v=i(c,s.props),v.ref=vt(f,c,s),v.return=f,v):(v=_r(s.type,s.key,s.props,null,f.mode,v),v.ref=vt(f,c,s),v.return=f,v)}function h(f,c,s,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==s.containerInfo||c.stateNode.implementation!==s.implementation?(c=Wi(s,f.mode,v),c.return=f,c):(c=i(c,s.children||[]),c.return=f,c)}function m(f,c,s,v,E){return c===null||c.tag!==7?(c=Ae(s,f.mode,v,E),c.return=f,c):(c=i(c,s),c.return=f,c)}function d(f,c,s){if(typeof c=="string"&&c!==""||typeof c=="number")return c=$i(""+c,f.mode,s),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lr:return s=_r(c.type,c.key,c.props,null,f.mode,s),s.ref=vt(f,null,c),s.return=f,s;case Re:return c=Wi(c,f.mode,s),c.return=f,c;case ne:var v=c._init;return d(f,v(c._payload),s)}if(wt(c)||ft(c))return c=Ae(c,f.mode,s,null),c.return=f,c;mr(f,c)}return null}function p(f,c,s,v){var E=c!==null?c.key:null;if(typeof s=="string"&&s!==""||typeof s=="number")return E!==null?null:o(f,c,""+s,v);if(typeof s=="object"&&s!==null){switch(s.$$typeof){case lr:return s.key===E?a(f,c,s,v):null;case Re:return s.key===E?h(f,c,s,v):null;case ne:return E=s._init,p(f,c,E(s._payload),v)}if(wt(s)||ft(s))return E!==null?null:m(f,c,s,v,null);mr(f,s)}return null}function k(f,c,s,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(s)||null,o(c,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lr:return f=f.get(v.key===null?s:v.key)||null,a(c,f,v,E);case Re:return f=f.get(v.key===null?s:v.key)||null,h(c,f,v,E);case ne:var L=v._init;return k(f,c,s,L(v._payload),E)}if(wt(v)||ft(v))return f=f.get(s)||null,m(c,f,v,E,null);mr(c,v)}return null}function S(f,c,s,v){for(var E=null,L=null,N=c,A=c=0,I=null;N!==null&&A<s.length;A++){N.index>A?(I=N,N=null):I=N.sibling;var _=p(f,N,s[A],v);if(_===null){N===null&&(N=I);break}n&&N&&_.alternate===null&&e(f,N),c=l(_,c,A),L===null?E=_:L.sibling=_,L=_,N=I}if(A===s.length)return t(f,N),j&&Se(f,A),E;if(N===null){for(;A<s.length;A++)N=d(f,s[A],v),N!==null&&(c=l(N,c,A),L===null?E=N:L.sibling=N,L=N);return j&&Se(f,A),E}for(N=r(f,N);A<s.length;A++)I=k(N,f,A,s[A],v),I!==null&&(n&&I.alternate!==null&&N.delete(I.key===null?A:I.key),c=l(I,c,A),L===null?E=I:L.sibling=I,L=I);return n&&N.forEach(function(mn){return e(f,mn)}),j&&Se(f,A),E}function x(f,c,s,v){var E=ft(s);if(typeof E!="function")throw Error(C(150));if(s=E.call(s),s==null)throw Error(C(151));for(var L=E=null,N=c,A=c=0,I=null,_=s.next();N!==null&&!_.done;A++,_=s.next()){N.index>A?(I=N,N=null):I=N.sibling;var mn=p(f,N,_.value,v);if(mn===null){N===null&&(N=I);break}n&&N&&mn.alternate===null&&e(f,N),c=l(mn,c,A),L===null?E=mn:L.sibling=mn,L=mn,N=I}if(_.done)return t(f,N),j&&Se(f,A),E;if(N===null){for(;!_.done;A++,_=s.next())_=d(f,_.value,v),_!==null&&(c=l(_,c,A),L===null?E=_:L.sibling=_,L=_);return j&&Se(f,A),E}for(N=r(f,N);!_.done;A++,_=s.next())_=k(N,f,A,_.value,v),_!==null&&(n&&_.alternate!==null&&N.delete(_.key===null?A:_.key),c=l(_,c,A),L===null?E=_:L.sibling=_,L=_);return n&&N.forEach(function(Ce){return e(f,Ce)}),j&&Se(f,A),E}function P(f,c,s,v){if(typeof s=="object"&&s!==null&&s.type===je&&s.key===null&&(s=s.props.children),typeof s=="object"&&s!==null){switch(s.$$typeof){case lr:n:{for(var E=s.key,L=c;L!==null;){if(L.key===E){if(E=s.type,E===je){if(L.tag===7){t(f,L.sibling),c=i(L,s.props.children),c.return=f,f=c;break n}}else if(L.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ne&&xo(E)===L.type){t(f,L.sibling),c=i(L,s.props),c.ref=vt(f,L,s),c.return=f,f=c;break n}t(f,L);break}else e(f,L);L=L.sibling}s.type===je?(c=Ae(s.props.children,f.mode,v,s.key),c.return=f,f=c):(v=_r(s.type,s.key,s.props,null,f.mode,v),v.ref=vt(f,c,s),v.return=f,f=v)}return u(f);case Re:n:{for(L=s.key;c!==null;){if(c.key===L)if(c.tag===4&&c.stateNode.containerInfo===s.containerInfo&&c.stateNode.implementation===s.implementation){t(f,c.sibling),c=i(c,s.children||[]),c.return=f,f=c;break n}else{t(f,c);break}else e(f,c);c=c.sibling}c=Wi(s,f.mode,v),c.return=f,f=c}return u(f);case ne:return L=s._init,P(f,c,L(s._payload),v)}if(wt(s))return S(f,c,s,v);if(ft(s))return x(f,c,s,v);mr(f,s)}return typeof s=="string"&&s!==""||typeof s=="number"?(s=""+s,c!==null&&c.tag===6?(t(f,c.sibling),c=i(c,s),c.return=f,f=c):(t(f,c),c=$i(s,f.mode,v),c.return=f,f=c),u(f)):t(f,c)}return P}var lt=cc(!0),sc=cc(!1),Wr=ve(null),Gr=null,We=null,pu=null;function du(){pu=We=Gr=null}function gu(n){var e=Wr.current;R(Wr),n._currentValue=e}function Nl(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function nt(n,e){Gr=n,pu=We=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(fn=!0),n.firstContext=null)}function An(n){var e=n._currentValue;if(pu!==n)if(n={context:n,memoizedValue:e,next:null},We===null){if(Gr===null)throw Error(C(308));We=n,Gr.dependencies={lanes:0,firstContext:n}}else We=We.next=n;return e}var Te=null;function mu(n){Te===null?Te=[n]:Te.push(n)}function hc(n,e,t,r){var i=e.interleaved;return i===null?(t.next=t,mu(e)):(t.next=i.next,i.next=t),e.interleaved=t,Xn(n,r)}function Xn(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ee=!1;function vu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function $n(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function se(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Xn(n,t)}return i=r.interleaved,i===null?(e.next=e,mu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Xn(n,t)}function Lr(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,tu(n,t)}}function Eo(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var u={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=u:l=l.next=u,t=t.next}while(t!==null);l===null?i=l=e:l=l.next=e}else i=l=e;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Xr(n,e,t,r){var i=n.updateQueue;ee=!1;var l=i.firstBaseUpdate,u=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var a=o,h=a.next;a.next=null,u===null?l=h:u.next=h,u=a;var m=n.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==u&&(o===null?m.firstBaseUpdate=h:o.next=h,m.lastBaseUpdate=a))}if(l!==null){var d=i.baseState;u=0,m=h=a=null,o=l;do{var p=o.lane,k=o.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:k,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});n:{var S=n,x=o;switch(p=e,k=t,x.tag){case 1:if(S=x.payload,typeof S=="function"){d=S.call(k,d,p);break n}d=S;break n;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,p=typeof S=="function"?S.call(k,d,p):S,p==null)break n;d=H({},d,p);break n;case 2:ee=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,p=i.effects,p===null?i.effects=[o]:p.push(o))}else k={eventTime:k,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(h=m=k,a=d):m=m.next=k,u|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;p=o,o=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(m===null&&(a=d),i.baseState=a,i.firstBaseUpdate=h,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do u|=i.lane,i=i.next;while(i!==e)}else l===null&&(i.shared.lanes=0);_e|=u,n.lanes=u,n.memoizedState=d}}function To(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var nr={},On=ve(nr),Qt=ve(nr),Kt=ve(nr);function Le(n){if(n===nr)throw Error(C(174));return n}function yu(n,e){switch(V(Kt,e),V(Qt,n),V(On,nr),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ol(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ol(e,n)}R(On),V(On,e)}function ut(){R(On),R(Qt),R(Kt)}function pc(n){Le(Kt.current);var e=Le(On.current),t=ol(e,n.type);e!==t&&(V(Qt,n),V(On,t))}function Cu(n){Qt.current===n&&(R(On),R(Qt))}var O=ve(0);function Yr(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ii=[];function ku(){for(var n=0;n<Ii.length;n++)Ii[n]._workInProgressVersionPrimary=null;Ii.length=0}var Nr=Zn.ReactCurrentDispatcher,Oi=Zn.ReactCurrentBatchConfig,Pe=0,U=null,G=null,Z=null,Zr=!1,Dt=!1,$t=0,ef=0;function tn(){throw Error(C(321))}function wu(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Vn(n[t],e[t]))return!1;return!0}function Su(n,e,t,r,i,l){if(Pe=l,U=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nr.current=n===null||n.memoizedState===null?uf:of,n=t(r,i),Dt){l=0;do{if(Dt=!1,$t=0,25<=l)throw Error(C(301));l+=1,Z=G=null,e.updateQueue=null,Nr.current=af,n=t(r,i)}while(Dt)}if(Nr.current=Jr,e=G!==null&&G.next!==null,Pe=0,Z=G=U=null,Zr=!1,e)throw Error(C(300));return n}function xu(){var n=$t!==0;return $t=0,n}function Rn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?U.memoizedState=Z=n:Z=Z.next=n,Z}function Dn(){if(G===null){var n=U.alternate;n=n!==null?n.memoizedState:null}else n=G.next;var e=Z===null?U.memoizedState:Z.next;if(e!==null)Z=e,G=n;else{if(n===null)throw Error(C(310));G=n,n={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},Z===null?U.memoizedState=Z=n:Z=Z.next=n}return Z}function Wt(n,e){return typeof e=="function"?e(n):e}function Ui(n){var e=Dn(),t=e.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=n;var r=G,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var u=i.next;i.next=l.next,l.next=u}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var o=u=null,a=null,h=l;do{var m=h.lane;if((Pe&m)===m)a!==null&&(a=a.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:n(r,h.action);else{var d={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};a===null?(o=a=d,u=r):a=a.next=d,U.lanes|=m,_e|=m}h=h.next}while(h!==null&&h!==l);a===null?u=r:a.next=o,Vn(r,e.memoizedState)||(fn=!0),e.memoizedState=r,e.baseState=u,e.baseQueue=a,t.lastRenderedState=r}if(n=t.interleaved,n!==null){i=n;do l=i.lane,U.lanes|=l,_e|=l,i=i.next;while(i!==n)}else i===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Hi(n){var e=Dn(),t=e.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=n;var r=t.dispatch,i=t.pending,l=e.memoizedState;if(i!==null){t.pending=null;var u=i=i.next;do l=n(l,u.action),u=u.next;while(u!==i);Vn(l,e.memoizedState)||(fn=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,r]}function dc(){}function gc(n,e){var t=U,r=Dn(),i=e(),l=!Vn(r.memoizedState,i);if(l&&(r.memoizedState=i,fn=!0),r=r.queue,Eu(yc.bind(null,t,r,n),[n]),r.getSnapshot!==e||l||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,Gt(9,vc.bind(null,t,r,i,e),void 0,null),J===null)throw Error(C(349));Pe&30||mc(t,e,i)}return i}function mc(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=U.updateQueue,e===null?(e={lastEffect:null,stores:null},U.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function vc(n,e,t,r){e.value=t,e.getSnapshot=r,Cc(e)&&kc(n)}function yc(n,e,t){return t(function(){Cc(e)&&kc(n)})}function Cc(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Vn(n,t)}catch{return!0}}function kc(n){var e=Xn(n,1);e!==null&&qn(e,n,1,-1)}function Lo(n){var e=Rn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:n},e.queue=n,n=n.dispatch=lf.bind(null,U,n),[e.memoizedState,n]}function Gt(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=U.updateQueue,e===null?(e={lastEffect:null,stores:null},U.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function wc(){return Dn().memoizedState}function Ar(n,e,t,r){var i=Rn();U.flags|=n,i.memoizedState=Gt(1|e,t,void 0,r===void 0?null:r)}function si(n,e,t,r){var i=Dn();r=r===void 0?null:r;var l=void 0;if(G!==null){var u=G.memoizedState;if(l=u.destroy,r!==null&&wu(r,u.deps)){i.memoizedState=Gt(e,t,l,r);return}}U.flags|=n,i.memoizedState=Gt(1|e,t,l,r)}function No(n,e){return Ar(8390656,8,n,e)}function Eu(n,e){return si(2048,8,n,e)}function Sc(n,e){return si(4,2,n,e)}function xc(n,e){return si(4,4,n,e)}function Ec(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Tc(n,e,t){return t=t!=null?t.concat([n]):null,si(4,4,Ec.bind(null,e,n),t)}function Tu(){}function Lc(n,e){var t=Dn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&wu(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function Nc(n,e){var t=Dn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&wu(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function Ac(n,e,t){return Pe&21?(Vn(t,e)||(t=za(),U.lanes|=t,_e|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,fn=!0),n.memoizedState=t)}function tf(n,e){var t=q;q=t!==0&&4>t?t:4,n(!0);var r=Oi.transition;Oi.transition={};try{n(!1),e()}finally{q=t,Oi.transition=r}}function Dc(){return Dn().memoizedState}function rf(n,e,t){var r=fe(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Bc(n))Pc(e,t);else if(t=hc(n,e,t,r),t!==null){var i=an();qn(t,n,r,i),_c(t,e,r)}}function lf(n,e,t){var r=fe(n),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Bc(n))Pc(e,i);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var u=e.lastRenderedState,o=l(u,t);if(i.hasEagerState=!0,i.eagerState=o,Vn(o,u)){var a=e.interleaved;a===null?(i.next=i,mu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}t=hc(n,e,i,r),t!==null&&(i=an(),qn(t,n,r,i),_c(t,e,r))}}function Bc(n){var e=n.alternate;return n===U||e!==null&&e===U}function Pc(n,e){Dt=Zr=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function _c(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,tu(n,t)}}var Jr={readContext:An,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},uf={readContext:An,useCallback:function(n,e){return Rn().memoizedState=[n,e===void 0?null:e],n},useContext:An,useEffect:No,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ar(4194308,4,Ec.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ar(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ar(4,2,n,e)},useMemo:function(n,e){var t=Rn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Rn();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=rf.bind(null,U,n),[r.memoizedState,n]},useRef:function(n){var e=Rn();return n={current:n},e.memoizedState=n},useState:Lo,useDebugValue:Tu,useDeferredValue:function(n){return Rn().memoizedState=n},useTransition:function(){var n=Lo(!1),e=n[0];return n=tf.bind(null,n[1]),Rn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=U,i=Rn();if(j){if(t===void 0)throw Error(C(407));t=t()}else{if(t=e(),J===null)throw Error(C(349));Pe&30||mc(r,e,t)}i.memoizedState=t;var l={value:t,getSnapshot:e};return i.queue=l,No(yc.bind(null,r,l,n),[n]),r.flags|=2048,Gt(9,vc.bind(null,r,l,t,e),void 0,null),t},useId:function(){var n=Rn(),e=J.identifierPrefix;if(j){var t=Kn,r=Qn;t=(r&~(1<<32-Mn(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=$t++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=ef++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},of={readContext:An,useCallback:Lc,useContext:An,useEffect:Eu,useImperativeHandle:Tc,useInsertionEffect:Sc,useLayoutEffect:xc,useMemo:Nc,useReducer:Ui,useRef:wc,useState:function(){return Ui(Wt)},useDebugValue:Tu,useDeferredValue:function(n){var e=Dn();return Ac(e,G.memoizedState,n)},useTransition:function(){var n=Ui(Wt)[0],e=Dn().memoizedState;return[n,e]},useMutableSource:dc,useSyncExternalStore:gc,useId:Dc,unstable_isNewReconciler:!1},af={readContext:An,useCallback:Lc,useContext:An,useEffect:Eu,useImperativeHandle:Tc,useInsertionEffect:Sc,useLayoutEffect:xc,useMemo:Nc,useReducer:Hi,useRef:wc,useState:function(){return Hi(Wt)},useDebugValue:Tu,useDeferredValue:function(n){var e=Dn();return G===null?e.memoizedState=n:Ac(e,G.memoizedState,n)},useTransition:function(){var n=Hi(Wt)[0],e=Dn().memoizedState;return[n,e]},useMutableSource:dc,useSyncExternalStore:gc,useId:Dc,unstable_isNewReconciler:!1};function Pn(n,e){if(n&&n.defaultProps){e=H({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Al(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:H({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var hi={isMounted:function(n){return(n=n._reactInternals)?qe(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=an(),i=fe(n),l=$n(r,i);l.payload=e,t!=null&&(l.callback=t),e=se(n,l,i),e!==null&&(qn(e,n,i,r),Lr(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=an(),i=fe(n),l=$n(r,i);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=se(n,l,i),e!==null&&(qn(e,n,i,r),Lr(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=an(),r=fe(n),i=$n(t,r);i.tag=2,e!=null&&(i.callback=e),e=se(n,i,r),e!==null&&(qn(e,n,r,t),Lr(e,n,r))}};function Ao(n,e,t,r,i,l,u){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,l,u):e.prototype&&e.prototype.isPureReactComponent?!It(t,r)||!It(i,l):!0}function zc(n,e,t){var r=!1,i=ge,l=e.contextType;return typeof l=="object"&&l!==null?l=An(l):(i=dn(e)?De:un.current,r=e.contextTypes,l=(r=r!=null)?rt(n,i):ge),e=new e(t,l),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hi,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=l),e}function Do(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&hi.enqueueReplaceState(e,e.state,null)}function Dl(n,e,t,r){var i=n.stateNode;i.props=t,i.state=n.memoizedState,i.refs={},vu(n);var l=e.contextType;typeof l=="object"&&l!==null?i.context=An(l):(l=dn(e)?De:un.current,i.context=rt(n,l)),i.state=n.memoizedState,l=e.getDerivedStateFromProps,typeof l=="function"&&(Al(n,e,l,t),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hi.enqueueReplaceState(i,i.state,null),Xr(n,t,i,r),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function ot(n,e){try{var t="",r=e;do t+=qs(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:n,source:e,stack:i,digest:null}}function Qi(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Bl(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var cf=typeof WeakMap=="function"?WeakMap:Map;function Mc(n,e,t){t=$n(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){ni||(ni=!0,Il=r),Bl(n,e)},t}function qc(n,e,t){t=$n(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;t.payload=function(){return r(i)},t.callback=function(){Bl(n,e)}}var l=n.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Bl(n,e),typeof r!="function"&&(he===null?he=new Set([this]):he.add(this));var u=e.stack;this.componentDidCatch(e.value,{componentStack:u!==null?u:""})}),t}function Bo(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new cf;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(t)||(i.add(t),n=xf.bind(null,n,e,t),e.then(n,n))}function Po(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function _o(n,e,t,r,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=$n(-1,1),e.tag=2,se(t,e,1))),t.lanes|=1),n)}var sf=Zn.ReactCurrentOwner,fn=!1;function on(n,e,t,r){e.child=n===null?sc(e,null,t,r):lt(e,n.child,t,r)}function zo(n,e,t,r,i){t=t.render;var l=e.ref;return nt(e,i),r=Su(n,e,t,r,l,i),t=xu(),n!==null&&!fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Yn(n,e,i)):(j&&t&&su(e),e.flags|=1,on(n,e,r,i),e.child)}function Mo(n,e,t,r,i){if(n===null){var l=t.type;return typeof l=="function"&&!zu(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=l,Vc(n,e,l,r,i)):(n=_r(t.type,null,r,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!(n.lanes&i)){var u=l.memoizedProps;if(t=t.compare,t=t!==null?t:It,t(u,r)&&n.ref===e.ref)return Yn(n,e,i)}return e.flags|=1,n=pe(l,r),n.ref=e.ref,n.return=e,e.child=n}function Vc(n,e,t,r,i){if(n!==null){var l=n.memoizedProps;if(It(l,r)&&n.ref===e.ref)if(fn=!1,e.pendingProps=r=l,(n.lanes&i)!==0)n.flags&131072&&(fn=!0);else return e.lanes=n.lanes,Yn(n,e,i)}return Pl(n,e,t,r,i)}function Fc(n,e,t){var r=e.pendingProps,i=r.children,l=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Xe,yn),yn|=t;else{if(!(t&1073741824))return n=l!==null?l.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,V(Xe,yn),yn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,V(Xe,yn),yn|=r}else l!==null?(r=l.baseLanes|t,e.memoizedState=null):r=t,V(Xe,yn),yn|=r;return on(n,e,i,t),e.child}function Rc(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Pl(n,e,t,r,i){var l=dn(t)?De:un.current;return l=rt(e,l),nt(e,i),t=Su(n,e,t,r,l,i),r=xu(),n!==null&&!fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Yn(n,e,i)):(j&&r&&su(e),e.flags|=1,on(n,e,t,i),e.child)}function qo(n,e,t,r,i){if(dn(t)){var l=!0;Qr(e)}else l=!1;if(nt(e,i),e.stateNode===null)Dr(n,e),zc(e,t,r),Dl(e,t,r,i),r=!0;else if(n===null){var u=e.stateNode,o=e.memoizedProps;u.props=o;var a=u.context,h=t.contextType;typeof h=="object"&&h!==null?h=An(h):(h=dn(t)?De:un.current,h=rt(e,h));var m=t.getDerivedStateFromProps,d=typeof m=="function"||typeof u.getSnapshotBeforeUpdate=="function";d||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o!==r||a!==h)&&Do(e,u,r,h),ee=!1;var p=e.memoizedState;u.state=p,Xr(e,r,u,i),a=e.memoizedState,o!==r||p!==a||pn.current||ee?(typeof m=="function"&&(Al(e,t,m,r),a=e.memoizedState),(o=ee||Ao(e,t,o,r,p,a,h))?(d||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),u.props=r,u.state=a,u.context=h,r=o):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{u=e.stateNode,fc(n,e),o=e.memoizedProps,h=e.type===e.elementType?o:Pn(e.type,o),u.props=h,d=e.pendingProps,p=u.context,a=t.contextType,typeof a=="object"&&a!==null?a=An(a):(a=dn(t)?De:un.current,a=rt(e,a));var k=t.getDerivedStateFromProps;(m=typeof k=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o!==d||p!==a)&&Do(e,u,r,a),ee=!1,p=e.memoizedState,u.state=p,Xr(e,r,u,i);var S=e.memoizedState;o!==d||p!==S||pn.current||ee?(typeof k=="function"&&(Al(e,t,k,r),S=e.memoizedState),(h=ee||Ao(e,t,h,r,p,S,a)||!1)?(m||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,S,a),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,S,a)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||o===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),u.props=r,u.state=S,u.context=a,r=h):(typeof u.componentDidUpdate!="function"||o===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),r=!1)}return _l(n,e,t,r,l,i)}function _l(n,e,t,r,i,l){Rc(n,e);var u=(e.flags&128)!==0;if(!r&&!u)return i&&ko(e,t,!1),Yn(n,e,l);r=e.stateNode,sf.current=e;var o=u&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&u?(e.child=lt(e,n.child,null,l),e.child=lt(e,null,o,l)):on(n,e,o,l),e.memoizedState=r.state,i&&ko(e,t,!0),e.child}function jc(n){var e=n.stateNode;e.pendingContext?Co(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Co(n,e.context,!1),yu(n,e.containerInfo)}function Vo(n,e,t,r,i){return it(),fu(i),e.flags|=256,on(n,e,t,r),e.child}var zl={dehydrated:null,treeContext:null,retryLane:0};function Ml(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ic(n,e,t){var r=e.pendingProps,i=O.current,l=!1,u=(e.flags&128)!==0,o;if((o=u)||(o=n!==null&&n.memoizedState===null?!1:(i&2)!==0),o?(l=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),V(O,i&1),n===null)return Ll(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(u=r.children,n=r.fallback,l?(r=e.mode,l=e.child,u={mode:"hidden",children:u},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=u):l=di(u,r,0,null),n=Ae(n,r,t,null),l.return=e,n.return=e,l.sibling=n,e.child=l,e.child.memoizedState=Ml(t),e.memoizedState=zl,n):Lu(e,u));if(i=n.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return hf(n,e,u,r,o,i,t);if(l){l=r.fallback,u=e.mode,i=n.child,o=i.sibling;var a={mode:"hidden",children:r.children};return!(u&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=pe(i,a),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?l=pe(o,l):(l=Ae(l,u,t,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,r=l,l=e.child,u=n.child.memoizedState,u=u===null?Ml(t):{baseLanes:u.baseLanes|t,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=n.childLanes&~t,e.memoizedState=zl,r}return l=n.child,n=l.sibling,r=pe(l,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function Lu(n,e){return e=di({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function vr(n,e,t,r){return r!==null&&fu(r),lt(e,n.child,null,t),n=Lu(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function hf(n,e,t,r,i,l,u){if(t)return e.flags&256?(e.flags&=-257,r=Qi(Error(C(422))),vr(n,e,u,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(l=r.fallback,i=e.mode,r=di({mode:"visible",children:r.children},i,0,null),l=Ae(l,i,u,null),l.flags|=2,r.return=e,l.return=e,r.sibling=l,e.child=r,e.mode&1&&lt(e,n.child,null,u),e.child.memoizedState=Ml(u),e.memoizedState=zl,l);if(!(e.mode&1))return vr(n,e,u,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(C(419)),r=Qi(l,r,void 0),vr(n,e,u,r)}if(o=(u&n.childLanes)!==0,fn||o){if(r=J,r!==null){switch(u&-u){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|u)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Xn(n,i),qn(r,n,i,-1))}return _u(),r=Qi(Error(C(421))),vr(n,e,u,r)}return i.data==="$?"?(e.flags|=128,e.child=n.child,e=Ef.bind(null,n),i._reactRetry=e,null):(n=l.treeContext,Cn=ce(i.nextSibling),kn=e,j=!0,zn=null,n!==null&&(En[Tn++]=Qn,En[Tn++]=Kn,En[Tn++]=Be,Qn=n.id,Kn=n.overflow,Be=e),e=Lu(e,r.children),e.flags|=4096,e)}function Fo(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Nl(n.return,e,t)}function Ki(n,e,t,r,i){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Oc(n,e,t){var r=e.pendingProps,i=r.revealOrder,l=r.tail;if(on(n,e,r.children,t),r=O.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fo(n,t,e);else if(n.tag===19)Fo(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(V(O,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&Yr(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),Ki(e,!1,i,t,l);break;case"backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&Yr(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}Ki(e,!0,t,null,l);break;case"together":Ki(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dr(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Yn(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),_e|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(C(153));if(e.child!==null){for(n=e.child,t=pe(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=pe(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function ff(n,e,t){switch(e.tag){case 3:jc(e),it();break;case 5:pc(e);break;case 1:dn(e.type)&&Qr(e);break;case 4:yu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;V(Wr,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(V(O,O.current&1),e.flags|=128,null):t&e.child.childLanes?Ic(n,e,t):(V(O,O.current&1),n=Yn(n,e,t),n!==null?n.sibling:null);V(O,O.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return Oc(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(O,O.current),r)break;return null;case 22:case 23:return e.lanes=0,Fc(n,e,t)}return Yn(n,e,t)}var Uc,ql,Hc,Qc;Uc=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ql=function(){};Hc=function(n,e,t,r){var i=n.memoizedProps;if(i!==r){n=e.stateNode,Le(On.current);var l=null;switch(t){case"input":i=rl(n,i),r=rl(n,r),l=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),l=[];break;case"textarea":i=ul(n,i),r=ul(n,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=Ur)}al(t,r);var u;t=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var o=i[h];for(u in o)o.hasOwnProperty(u)&&(t||(t={}),t[u]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(zt.hasOwnProperty(h)?l||(l=[]):(l=l||[]).push(h,null));for(h in r){var a=r[h];if(o=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&a!==o&&(a!=null||o!=null))if(h==="style")if(o){for(u in o)!o.hasOwnProperty(u)||a&&a.hasOwnProperty(u)||(t||(t={}),t[u]="");for(u in a)a.hasOwnProperty(u)&&o[u]!==a[u]&&(t||(t={}),t[u]=a[u])}else t||(l||(l=[]),l.push(h,t)),t=a;else h==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,o=o?o.__html:void 0,a!=null&&o!==a&&(l=l||[]).push(h,a)):h==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(h,""+a):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(zt.hasOwnProperty(h)?(a!=null&&h==="onScroll"&&F("scroll",n),l||o===a||(l=[])):(l=l||[]).push(h,a))}t&&(l=l||[]).push("style",t);var h=l;(e.updateQueue=h)&&(e.flags|=4)}};Qc=function(n,e,t,r){t!==r&&(e.flags|=4)};function yt(n,e){if(!j)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function rn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function pf(n,e,t){var r=e.pendingProps;switch(hu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return dn(e.type)&&Hr(),rn(e),null;case 3:return r=e.stateNode,ut(),R(pn),R(un),ku(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(gr(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(Hl(zn),zn=null))),ql(n,e),rn(e),null;case 5:Cu(e);var i=Le(Kt.current);if(t=e.type,n!==null&&e.stateNode!=null)Hc(n,e,t,r,i),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return rn(e),null}if(n=Le(On.current),gr(e)){r=e.stateNode,t=e.type;var l=e.memoizedProps;switch(r[jn]=e,r[Ht]=l,n=(e.mode&1)!==0,t){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<xt.length;i++)F(xt[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Ku(r,l),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},F("invalid",r);break;case"textarea":Wu(r,l),F("invalid",r)}al(t,l),i=null;for(var u in l)if(l.hasOwnProperty(u)){var o=l[u];u==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&dr(r.textContent,o,n),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&dr(r.textContent,o,n),i=["children",""+o]):zt.hasOwnProperty(u)&&o!=null&&u==="onScroll"&&F("scroll",r)}switch(t){case"input":ur(r),$u(r,l,!0);break;case"textarea":ur(r),Gu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ur)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{u=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ya(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=u.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=u.createElement(t,{is:r.is}):(n=u.createElement(t),t==="select"&&(u=n,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):n=u.createElementNS(n,t),n[jn]=e,n[Ht]=r,Uc(n,e,!1,!1),e.stateNode=n;n:{switch(u=cl(t,r),t){case"dialog":F("cancel",n),F("close",n),i=r;break;case"iframe":case"object":case"embed":F("load",n),i=r;break;case"video":case"audio":for(i=0;i<xt.length;i++)F(xt[i],n);i=r;break;case"source":F("error",n),i=r;break;case"img":case"image":case"link":F("error",n),F("load",n),i=r;break;case"details":F("toggle",n),i=r;break;case"input":Ku(n,r),i=rl(n,r),F("invalid",n);break;case"option":i=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),F("invalid",n);break;case"textarea":Wu(n,r),i=ul(n,r),F("invalid",n);break;default:i=r}al(t,i),o=i;for(l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="style"?wa(n,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ca(n,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Mt(n,a):typeof a=="number"&&Mt(n,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(zt.hasOwnProperty(l)?a!=null&&l==="onScroll"&&F("scroll",n):a!=null&&Yl(n,l,a,u))}switch(t){case"input":ur(n),$u(n,r,!1);break;case"textarea":ur(n),Gu(n);break;case"option":r.value!=null&&n.setAttribute("value",""+de(r.value));break;case"select":n.multiple=!!r.multiple,l=r.value,l!=null?Ye(n,!!r.multiple,l,!1):r.defaultValue!=null&&Ye(n,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=Ur)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break n;case"img":r=!0;break n;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(n&&e.stateNode!=null)Qc(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(t=Le(Kt.current),Le(On.current),gr(e)){if(r=e.stateNode,t=e.memoizedProps,r[jn]=e,(l=r.nodeValue!==t)&&(n=kn,n!==null))switch(n.tag){case 3:dr(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,t,(n.mode&1)!==0)}l&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[jn]=e,e.stateNode=r}return rn(e),null;case 13:if(R(O),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(j&&Cn!==null&&e.mode&1&&!(e.flags&128))ac(),it(),e.flags|=98560,l=!1;else if(l=gr(e),r!==null&&r.dehydrated!==null){if(n===null){if(!l)throw Error(C(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[jn]=e}else it(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),l=!1}else zn!==null&&(Hl(zn),zn=null),l=!0;if(!l)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||O.current&1?X===0&&(X=3):_u())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return ut(),ql(n,e),n===null&&Ot(e.stateNode.containerInfo),rn(e),null;case 10:return gu(e.type._context),rn(e),null;case 17:return dn(e.type)&&Hr(),rn(e),null;case 19:if(R(O),l=e.memoizedState,l===null)return rn(e),null;if(r=(e.flags&128)!==0,u=l.rendering,u===null)if(r)yt(l,!1);else{if(X!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(u=Yr(n),u!==null){for(e.flags|=128,yt(l,!1),r=u.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)l=t,n=r,l.flags&=14680066,u=l.alternate,u===null?(l.childLanes=0,l.lanes=n,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,n=u.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return V(O,O.current&1|2),e.child}n=n.sibling}l.tail!==null&&$()>at&&(e.flags|=128,r=!0,yt(l,!1),e.lanes=4194304)}else{if(!r)if(n=Yr(u),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),yt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!j)return rn(e),null}else 2*$()-l.renderingStartTime>at&&t!==1073741824&&(e.flags|=128,r=!0,yt(l,!1),e.lanes=4194304);l.isBackwards?(u.sibling=e.child,e.child=u):(t=l.last,t!==null?t.sibling=u:e.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=$(),e.sibling=null,t=O.current,V(O,r?t&1|2:t&1),e):(rn(e),null);case 22:case 23:return Pu(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yn&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function df(n,e){switch(hu(e),e.tag){case 1:return dn(e.type)&&Hr(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ut(),R(pn),R(un),ku(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Cu(e),null;case 13:if(R(O),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(C(340));it()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return R(O),null;case 4:return ut(),null;case 10:return gu(e.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var yr=!1,ln=!1,gf=typeof WeakSet=="function"?WeakSet:Set,T=null;function Ge(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Q(n,e,r)}else t.current=null}function Vl(n,e,t){try{t()}catch(r){Q(n,e,r)}}var Ro=!1;function mf(n,e){if(Cl=jr,n=Xa(),cu(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break n}var u=0,o=-1,a=-1,h=0,m=0,d=n,p=null;e:for(;;){for(var k;d!==t||i!==0&&d.nodeType!==3||(o=u+i),d!==l||r!==0&&d.nodeType!==3||(a=u+r),d.nodeType===3&&(u+=d.nodeValue.length),(k=d.firstChild)!==null;)p=d,d=k;for(;;){if(d===n)break e;if(p===t&&++h===i&&(o=u),p===l&&++m===r&&(a=u),(k=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=k}t=o===-1||a===-1?null:{start:o,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(kl={focusedElem:n,selectionRange:t},jr=!1,T=e;T!==null;)if(e=T,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,T=n;else for(;T!==null;){e=T;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,P=S.memoizedState,f=e.stateNode,c=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:Pn(e.type,x),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var s=e.stateNode.containerInfo;s.nodeType===1?s.textContent="":s.nodeType===9&&s.documentElement&&s.removeChild(s.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(v){Q(e,e.return,v)}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}return S=Ro,Ro=!1,S}function Bt(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&n)===n){var l=i.destroy;i.destroy=void 0,l!==void 0&&Vl(e,t,l)}i=i.next}while(i!==r)}}function fi(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function Fl(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Kc(n){var e=n.alternate;e!==null&&(n.alternate=null,Kc(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[jn],delete e[Ht],delete e[xl],delete e[Zh],delete e[Jh])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function $c(n){return n.tag===5||n.tag===3||n.tag===4}function jo(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||$c(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Rl(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ur));else if(r!==4&&(n=n.child,n!==null))for(Rl(n,e,t),n=n.sibling;n!==null;)Rl(n,e,t),n=n.sibling}function jl(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(jl(n,e,t),n=n.sibling;n!==null;)jl(n,e,t),n=n.sibling}var b=null,_n=!1;function bn(n,e,t){for(t=t.child;t!==null;)Wc(n,e,t),t=t.sibling}function Wc(n,e,t){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(ii,t)}catch{}switch(t.tag){case 5:ln||Ge(t,e);case 6:var r=b,i=_n;b=null,bn(n,e,t),b=r,_n=i,b!==null&&(_n?(n=b,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):b.removeChild(t.stateNode));break;case 18:b!==null&&(_n?(n=b,t=t.stateNode,n.nodeType===8?Ri(n.parentNode,t):n.nodeType===1&&Ri(n,t),Rt(n)):Ri(b,t.stateNode));break;case 4:r=b,i=_n,b=t.stateNode.containerInfo,_n=!0,bn(n,e,t),b=r,_n=i;break;case 0:case 11:case 14:case 15:if(!ln&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,u=l.destroy;l=l.tag,u!==void 0&&(l&2||l&4)&&Vl(t,e,u),i=i.next}while(i!==r)}bn(n,e,t);break;case 1:if(!ln&&(Ge(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(o){Q(t,e,o)}bn(n,e,t);break;case 21:bn(n,e,t);break;case 22:t.mode&1?(ln=(r=ln)||t.memoizedState!==null,bn(n,e,t),ln=r):bn(n,e,t);break;default:bn(n,e,t)}}function Io(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new gf),e.forEach(function(r){var i=Tf.bind(null,n,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Bn(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=n,u=e,o=u;n:for(;o!==null;){switch(o.tag){case 5:b=o.stateNode,_n=!1;break n;case 3:b=o.stateNode.containerInfo,_n=!0;break n;case 4:b=o.stateNode.containerInfo,_n=!0;break n}o=o.return}if(b===null)throw Error(C(160));Wc(l,u,i),b=null,_n=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(h){Q(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gc(e,n),e=e.sibling}function Gc(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Bn(e,n),Fn(n),r&4){try{Bt(3,n,n.return),fi(3,n)}catch(x){Q(n,n.return,x)}try{Bt(5,n,n.return)}catch(x){Q(n,n.return,x)}}break;case 1:Bn(e,n),Fn(n),r&512&&t!==null&&Ge(t,t.return);break;case 5:if(Bn(e,n),Fn(n),r&512&&t!==null&&Ge(t,t.return),n.flags&32){var i=n.stateNode;try{Mt(i,"")}catch(x){Q(n,n.return,x)}}if(r&4&&(i=n.stateNode,i!=null)){var l=n.memoizedProps,u=t!==null?t.memoizedProps:l,o=n.type,a=n.updateQueue;if(n.updateQueue=null,a!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&ma(i,l),cl(o,u);var h=cl(o,l);for(u=0;u<a.length;u+=2){var m=a[u],d=a[u+1];m==="style"?wa(i,d):m==="dangerouslySetInnerHTML"?Ca(i,d):m==="children"?Mt(i,d):Yl(i,m,d,h)}switch(o){case"input":il(i,l);break;case"textarea":va(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?Ye(i,!!l.multiple,k,!1):p!==!!l.multiple&&(l.defaultValue!=null?Ye(i,!!l.multiple,l.defaultValue,!0):Ye(i,!!l.multiple,l.multiple?[]:"",!1))}i[Ht]=l}catch(x){Q(n,n.return,x)}}break;case 6:if(Bn(e,n),Fn(n),r&4){if(n.stateNode===null)throw Error(C(162));i=n.stateNode,l=n.memoizedProps;try{i.nodeValue=l}catch(x){Q(n,n.return,x)}}break;case 3:if(Bn(e,n),Fn(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Rt(e.containerInfo)}catch(x){Q(n,n.return,x)}break;case 4:Bn(e,n),Fn(n);break;case 13:Bn(e,n),Fn(n),i=n.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Du=$())),r&4&&Io(n);break;case 22:if(m=t!==null&&t.memoizedState!==null,n.mode&1?(ln=(h=ln)||m,Bn(e,n),ln=h):Bn(e,n),Fn(n),r&8192){if(h=n.memoizedState!==null,(n.stateNode.isHidden=h)&&!m&&n.mode&1)for(T=n,m=n.child;m!==null;){for(d=T=m;T!==null;){switch(p=T,k=p.child,p.tag){case 0:case 11:case 14:case 15:Bt(4,p,p.return);break;case 1:Ge(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,t=p.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(x){Q(r,t,x)}}break;case 5:Ge(p,p.return);break;case 22:if(p.memoizedState!==null){Uo(d);continue}}k!==null?(k.return=p,T=k):Uo(d)}m=m.sibling}n:for(m=null,d=n;;){if(d.tag===5){if(m===null){m=d;try{i=d.stateNode,h?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=d.stateNode,a=d.memoizedProps.style,u=a!=null&&a.hasOwnProperty("display")?a.display:null,o.style.display=ka("display",u))}catch(x){Q(n,n.return,x)}}}else if(d.tag===6){if(m===null)try{d.stateNode.nodeValue=h?"":d.memoizedProps}catch(x){Q(n,n.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break n;for(;d.sibling===null;){if(d.return===null||d.return===n)break n;m===d&&(m=null),d=d.return}m===d&&(m=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bn(e,n),Fn(n),r&4&&Io(n);break;case 21:break;default:Bn(e,n),Fn(n)}}function Fn(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if($c(t)){var r=t;break n}t=t.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mt(i,""),r.flags&=-33);var l=jo(n);jl(n,l,i);break;case 3:case 4:var u=r.stateNode.containerInfo,o=jo(n);Rl(n,o,u);break;default:throw Error(C(161))}}catch(a){Q(n,n.return,a)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function vf(n,e,t){T=n,Xc(n)}function Xc(n,e,t){for(var r=(n.mode&1)!==0;T!==null;){var i=T,l=i.child;if(i.tag===22&&r){var u=i.memoizedState!==null||yr;if(!u){var o=i.alternate,a=o!==null&&o.memoizedState!==null||ln;o=yr;var h=ln;if(yr=u,(ln=a)&&!h)for(T=i;T!==null;)u=T,a=u.child,u.tag===22&&u.memoizedState!==null?Ho(i):a!==null?(a.return=u,T=a):Ho(i);for(;l!==null;)T=l,Xc(l),l=l.sibling;T=i,yr=o,ln=h}Oo(n)}else i.subtreeFlags&8772&&l!==null?(l.return=i,T=l):Oo(n)}}function Oo(n){for(;T!==null;){var e=T;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||fi(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ln)if(t===null)r.componentDidMount();else{var i=e.elementType===e.type?t.memoizedProps:Pn(e.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=e.updateQueue;l!==null&&To(e,l,r);break;case 3:var u=e.updateQueue;if(u!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}To(e,u,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var d=m.dehydrated;d!==null&&Rt(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ln||e.flags&512&&Fl(e)}catch(p){Q(e,e.return,p)}}if(e===n){T=null;break}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}}function Uo(n){for(;T!==null;){var e=T;if(e===n){T=null;break}var t=e.sibling;if(t!==null){t.return=e.return,T=t;break}T=e.return}}function Ho(n){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{fi(4,e)}catch(a){Q(e,t,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){Q(e,i,a)}}var l=e.return;try{Fl(e)}catch(a){Q(e,l,a)}break;case 5:var u=e.return;try{Fl(e)}catch(a){Q(e,u,a)}}}catch(a){Q(e,e.return,a)}if(e===n){T=null;break}var o=e.sibling;if(o!==null){o.return=e.return,T=o;break}T=e.return}}var yf=Math.ceil,br=Zn.ReactCurrentDispatcher,Nu=Zn.ReactCurrentOwner,Nn=Zn.ReactCurrentBatchConfig,M=0,J=null,W=null,nn=0,yn=0,Xe=ve(0),X=0,Xt=null,_e=0,pi=0,Au=0,Pt=null,hn=null,Du=0,at=1/0,Un=null,ni=!1,Il=null,he=null,Cr=!1,le=null,ei=0,_t=0,Ol=null,Br=-1,Pr=0;function an(){return M&6?$():Br!==-1?Br:Br=$()}function fe(n){return n.mode&1?M&2&&nn!==0?nn&-nn:nf.transition!==null?(Pr===0&&(Pr=za()),Pr):(n=q,n!==0||(n=window.event,n=n===void 0?16:Ia(n.type)),n):1}function qn(n,e,t,r){if(50<_t)throw _t=0,Ol=null,Error(C(185));Zt(n,t,r),(!(M&2)||n!==J)&&(n===J&&(!(M&2)&&(pi|=t),X===4&&re(n,nn)),gn(n,r),t===1&&M===0&&!(e.mode&1)&&(at=$()+500,ci&&ye()))}function gn(n,e){var t=n.callbackNode;nh(n,e);var r=Rr(n,n===J?nn:0);if(r===0)t!==null&&Zu(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&Zu(t),e===1)n.tag===0?bh(Qo.bind(null,n)):lc(Qo.bind(null,n)),Xh(function(){!(M&6)&&ye()}),t=null;else{switch(Ma(r)){case 1:t=eu;break;case 4:t=Pa;break;case 16:t=Fr;break;case 536870912:t=_a;break;default:t=Fr}t=rs(t,Yc.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Yc(n,e){if(Br=-1,Pr=0,M&6)throw Error(C(327));var t=n.callbackNode;if(et()&&n.callbackNode!==t)return null;var r=Rr(n,n===J?nn:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=ti(n,r);else{e=r;var i=M;M|=2;var l=Jc();(J!==n||nn!==e)&&(Un=null,at=$()+500,Ne(n,e));do try{wf();break}catch(o){Zc(n,o)}while(!0);du(),br.current=l,M=i,W!==null?e=0:(J=null,nn=0,e=X)}if(e!==0){if(e===2&&(i=dl(n),i!==0&&(r=i,e=Ul(n,i))),e===1)throw t=Xt,Ne(n,0),re(n,r),gn(n,$()),t;if(e===6)re(n,r);else{if(i=n.current.alternate,!(r&30)&&!Cf(i)&&(e=ti(n,r),e===2&&(l=dl(n),l!==0&&(r=l,e=Ul(n,l))),e===1))throw t=Xt,Ne(n,0),re(n,r),gn(n,$()),t;switch(n.finishedWork=i,n.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:xe(n,hn,Un);break;case 3:if(re(n,r),(r&130023424)===r&&(e=Du+500-$(),10<e)){if(Rr(n,0)!==0)break;if(i=n.suspendedLanes,(i&r)!==r){an(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=Sl(xe.bind(null,n,hn,Un),e);break}xe(n,hn,Un);break;case 4:if(re(n,r),(r&4194240)===r)break;for(e=n.eventTimes,i=-1;0<r;){var u=31-Mn(r);l=1<<u,u=e[u],u>i&&(i=u),r&=~l}if(r=i,r=$()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){n.timeoutHandle=Sl(xe.bind(null,n,hn,Un),r);break}xe(n,hn,Un);break;case 5:xe(n,hn,Un);break;default:throw Error(C(329))}}}return gn(n,$()),n.callbackNode===t?Yc.bind(null,n):null}function Ul(n,e){var t=Pt;return n.current.memoizedState.isDehydrated&&(Ne(n,e).flags|=256),n=ti(n,e),n!==2&&(e=hn,hn=t,e!==null&&Hl(e)),n}function Hl(n){hn===null?hn=n:hn.push.apply(hn,n)}function Cf(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Vn(l(),i))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function re(n,e){for(e&=~Au,e&=~pi,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Mn(e),r=1<<t;n[t]=-1,e&=~r}}function Qo(n){if(M&6)throw Error(C(327));et();var e=Rr(n,0);if(!(e&1))return gn(n,$()),null;var t=ti(n,e);if(n.tag!==0&&t===2){var r=dl(n);r!==0&&(e=r,t=Ul(n,r))}if(t===1)throw t=Xt,Ne(n,0),re(n,e),gn(n,$()),t;if(t===6)throw Error(C(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,xe(n,hn,Un),gn(n,$()),null}function Bu(n,e){var t=M;M|=1;try{return n(e)}finally{M=t,M===0&&(at=$()+500,ci&&ye())}}function ze(n){le!==null&&le.tag===0&&!(M&6)&&et();var e=M;M|=1;var t=Nn.transition,r=q;try{if(Nn.transition=null,q=1,n)return n()}finally{q=r,Nn.transition=t,M=e,!(M&6)&&ye()}}function Pu(){yn=Xe.current,R(Xe)}function Ne(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Gh(t)),W!==null)for(t=W.return;t!==null;){var r=t;switch(hu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:ut(),R(pn),R(un),ku();break;case 5:Cu(r);break;case 4:ut();break;case 13:R(O);break;case 19:R(O);break;case 10:gu(r.type._context);break;case 22:case 23:Pu()}t=t.return}if(J=n,W=n=pe(n.current,null),nn=yn=e,X=0,Xt=null,Au=pi=_e=0,hn=Pt=null,Te!==null){for(e=0;e<Te.length;e++)if(t=Te[e],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var u=l.next;l.next=i,r.next=u}t.pending=r}Te=null}return n}function Zc(n,e){do{var t=W;try{if(du(),Nr.current=Jr,Zr){for(var r=U.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zr=!1}if(Pe=0,Z=G=U=null,Dt=!1,$t=0,Nu.current=null,t===null||t.return===null){X=1,Xt=e,W=null;break}n:{var l=n,u=t.return,o=t,a=e;if(e=nn,o.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var h=a,m=o,d=m.tag;if(!(m.mode&1)&&(d===0||d===11||d===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var k=Po(u);if(k!==null){k.flags&=-257,_o(k,u,o,l,e),k.mode&1&&Bo(l,h,e),e=k,a=h;var S=e.updateQueue;if(S===null){var x=new Set;x.add(a),e.updateQueue=x}else S.add(a);break n}else{if(!(e&1)){Bo(l,h,e),_u();break n}a=Error(C(426))}}else if(j&&o.mode&1){var P=Po(u);if(P!==null){!(P.flags&65536)&&(P.flags|=256),_o(P,u,o,l,e),fu(ot(a,o));break n}}l=a=ot(a,o),X!==4&&(X=2),Pt===null?Pt=[l]:Pt.push(l),l=u;do{switch(l.tag){case 3:l.flags|=65536,e&=-e,l.lanes|=e;var f=Mc(l,a,e);Eo(l,f);break n;case 1:o=a;var c=l.type,s=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(he===null||!he.has(s)))){l.flags|=65536,e&=-e,l.lanes|=e;var v=qc(l,o,e);Eo(l,v);break n}}l=l.return}while(l!==null)}ns(t)}catch(E){e=E,W===t&&t!==null&&(W=t=t.return);continue}break}while(!0)}function Jc(){var n=br.current;return br.current=Jr,n===null?Jr:n}function _u(){(X===0||X===3||X===2)&&(X=4),J===null||!(_e&268435455)&&!(pi&268435455)||re(J,nn)}function ti(n,e){var t=M;M|=2;var r=Jc();(J!==n||nn!==e)&&(Un=null,Ne(n,e));do try{kf();break}catch(i){Zc(n,i)}while(!0);if(du(),M=t,br.current=r,W!==null)throw Error(C(261));return J=null,nn=0,X}function kf(){for(;W!==null;)bc(W)}function wf(){for(;W!==null&&!Ks();)bc(W)}function bc(n){var e=ts(n.alternate,n,yn);n.memoizedProps=n.pendingProps,e===null?ns(n):W=e,Nu.current=null}function ns(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=df(t,e),t!==null){t.flags&=32767,W=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{X=6,W=null;return}}else if(t=pf(t,e,yn),t!==null){W=t;return}if(e=e.sibling,e!==null){W=e;return}W=e=n}while(e!==null);X===0&&(X=5)}function xe(n,e,t){var r=q,i=Nn.transition;try{Nn.transition=null,q=1,Sf(n,e,t,r)}finally{Nn.transition=i,q=r}return null}function Sf(n,e,t,r){do et();while(le!==null);if(M&6)throw Error(C(327));t=n.finishedWork;var i=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(C(177));n.callbackNode=null,n.callbackPriority=0;var l=t.lanes|t.childLanes;if(eh(n,l),n===J&&(W=J=null,nn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Cr||(Cr=!0,rs(Fr,function(){return et(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Nn.transition,Nn.transition=null;var u=q;q=1;var o=M;M|=4,Nu.current=null,mf(n,t),Gc(t,n),Oh(kl),jr=!!Cl,kl=Cl=null,n.current=t,vf(t),$s(),M=o,q=u,Nn.transition=l}else n.current=t;if(Cr&&(Cr=!1,le=n,ei=i),l=n.pendingLanes,l===0&&(he=null),Xs(t.stateNode),gn(n,$()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)i=e[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ni)throw ni=!1,n=Il,Il=null,n;return ei&1&&n.tag!==0&&et(),l=n.pendingLanes,l&1?n===Ol?_t++:(_t=0,Ol=n):_t=0,ye(),null}function et(){if(le!==null){var n=Ma(ei),e=Nn.transition,t=q;try{if(Nn.transition=null,q=16>n?16:n,le===null)var r=!1;else{if(n=le,le=null,ei=0,M&6)throw Error(C(331));var i=M;for(M|=4,T=n.current;T!==null;){var l=T,u=l.child;if(T.flags&16){var o=l.deletions;if(o!==null){for(var a=0;a<o.length;a++){var h=o[a];for(T=h;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:Bt(8,m,l)}var d=m.child;if(d!==null)d.return=m,T=d;else for(;T!==null;){m=T;var p=m.sibling,k=m.return;if(Kc(m),m===h){T=null;break}if(p!==null){p.return=k,T=p;break}T=k}}}var S=l.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}T=l}}if(l.subtreeFlags&2064&&u!==null)u.return=l,T=u;else n:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Bt(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,T=f;break n}T=l.return}}var c=n.current;for(T=c;T!==null;){u=T;var s=u.child;if(u.subtreeFlags&2064&&s!==null)s.return=u,T=s;else n:for(u=c;T!==null;){if(o=T,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:fi(9,o)}}catch(E){Q(o,o.return,E)}if(o===u){T=null;break n}var v=o.sibling;if(v!==null){v.return=o.return,T=v;break n}T=o.return}}if(M=i,ye(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(ii,n)}catch{}r=!0}return r}finally{q=t,Nn.transition=e}}return!1}function Ko(n,e,t){e=ot(t,e),e=Mc(n,e,1),n=se(n,e,1),e=an(),n!==null&&(Zt(n,1,e),gn(n,e))}function Q(n,e,t){if(n.tag===3)Ko(n,n,t);else for(;e!==null;){if(e.tag===3){Ko(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(he===null||!he.has(r))){n=ot(t,n),n=qc(e,n,1),e=se(e,n,1),n=an(),e!==null&&(Zt(e,1,n),gn(e,n));break}}e=e.return}}function xf(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=an(),n.pingedLanes|=n.suspendedLanes&t,J===n&&(nn&t)===t&&(X===4||X===3&&(nn&130023424)===nn&&500>$()-Du?Ne(n,0):Au|=t),gn(n,e)}function es(n,e){e===0&&(n.mode&1?(e=cr,cr<<=1,!(cr&130023424)&&(cr=4194304)):e=1);var t=an();n=Xn(n,e),n!==null&&(Zt(n,e,t),gn(n,t))}function Ef(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),es(n,t)}function Tf(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),es(n,t)}var ts;ts=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||pn.current)fn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return fn=!1,ff(n,e,t);fn=!!(n.flags&131072)}else fn=!1,j&&e.flags&1048576&&uc(e,$r,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Dr(n,e),n=e.pendingProps;var i=rt(e,un.current);nt(e,t),i=Su(null,e,r,n,i,t);var l=xu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(r)?(l=!0,Qr(e)):l=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vu(e),i.updater=hi,e.stateNode=i,i._reactInternals=e,Dl(e,r,n,t),e=_l(null,e,r,!0,l,t)):(e.tag=0,j&&l&&su(e),on(null,e,i,t),e=e.child),e;case 16:r=e.elementType;n:{switch(Dr(n,e),n=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Nf(r),n=Pn(r,n),i){case 0:e=Pl(null,e,r,n,t);break n;case 1:e=qo(null,e,r,n,t);break n;case 11:e=zo(null,e,r,n,t);break n;case 14:e=Mo(null,e,r,Pn(r.type,n),t);break n}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),Pl(n,e,r,i,t);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),qo(n,e,r,i,t);case 3:n:{if(jc(e),n===null)throw Error(C(387));r=e.pendingProps,l=e.memoizedState,i=l.element,fc(n,e),Xr(e,r,null,t);var u=e.memoizedState;if(r=u.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){i=ot(Error(C(423)),e),e=Vo(n,e,r,t,i);break n}else if(r!==i){i=ot(Error(C(424)),e),e=Vo(n,e,r,t,i);break n}else for(Cn=ce(e.stateNode.containerInfo.firstChild),kn=e,j=!0,zn=null,t=sc(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(it(),r===i){e=Yn(n,e,t);break n}on(n,e,r,t)}e=e.child}return e;case 5:return pc(e),n===null&&Ll(e),r=e.type,i=e.pendingProps,l=n!==null?n.memoizedProps:null,u=i.children,wl(r,i)?u=null:l!==null&&wl(r,l)&&(e.flags|=32),Rc(n,e),on(n,e,u,t),e.child;case 6:return n===null&&Ll(e),null;case 13:return Ic(n,e,t);case 4:return yu(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=lt(e,null,r,t):on(n,e,r,t),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),zo(n,e,r,i,t);case 7:return on(n,e,e.pendingProps,t),e.child;case 8:return on(n,e,e.pendingProps.children,t),e.child;case 12:return on(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(r=e.type._context,i=e.pendingProps,l=e.memoizedProps,u=i.value,V(Wr,r._currentValue),r._currentValue=u,l!==null)if(Vn(l.value,u)){if(l.children===i.children&&!pn.current){e=Yn(n,e,t);break n}}else for(l=e.child,l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){u=l.child;for(var a=o.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=$n(-1,t&-t),a.tag=2;var h=l.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?a.next=a:(a.next=m.next,m.next=a),h.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),Nl(l.return,t,e),o.lanes|=t;break}a=a.next}}else if(l.tag===10)u=l.type===e.type?null:l.child;else if(l.tag===18){if(u=l.return,u===null)throw Error(C(341));u.lanes|=t,o=u.alternate,o!==null&&(o.lanes|=t),Nl(u,t,e),u=l.sibling}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===e){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}on(n,e,i.children,t),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,nt(e,t),i=An(i),r=r(i),e.flags|=1,on(n,e,r,t),e.child;case 14:return r=e.type,i=Pn(r,e.pendingProps),i=Pn(r.type,i),Mo(n,e,r,i,t);case 15:return Vc(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),Dr(n,e),e.tag=1,dn(r)?(n=!0,Qr(e)):n=!1,nt(e,t),zc(e,r,i),Dl(e,r,i,t),_l(null,e,r,!0,n,t);case 19:return Oc(n,e,t);case 22:return Fc(n,e,t)}throw Error(C(156,e.tag))};function rs(n,e){return Ba(n,e)}function Lf(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(n,e,t,r){return new Lf(n,e,t,r)}function zu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Nf(n){if(typeof n=="function")return zu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Jl)return 11;if(n===bl)return 14}return 2}function pe(n,e){var t=n.alternate;return t===null?(t=Ln(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function _r(n,e,t,r,i,l){var u=2;if(r=n,typeof n=="function")zu(n)&&(u=1);else if(typeof n=="string")u=5;else n:switch(n){case je:return Ae(t.children,i,l,e);case Zl:u=8,i|=8;break;case bi:return n=Ln(12,t,e,i|2),n.elementType=bi,n.lanes=l,n;case nl:return n=Ln(13,t,e,i),n.elementType=nl,n.lanes=l,n;case el:return n=Ln(19,t,e,i),n.elementType=el,n.lanes=l,n;case pa:return di(t,i,l,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ha:u=10;break n;case fa:u=9;break n;case Jl:u=11;break n;case bl:u=14;break n;case ne:u=16,r=null;break n}throw Error(C(130,n==null?n:typeof n,""))}return e=Ln(u,t,e,i),e.elementType=n,e.type=r,e.lanes=l,e}function Ae(n,e,t,r){return n=Ln(7,n,r,e),n.lanes=t,n}function di(n,e,t,r){return n=Ln(22,n,r,e),n.elementType=pa,n.lanes=t,n.stateNode={isHidden:!1},n}function $i(n,e,t){return n=Ln(6,n,null,e),n.lanes=t,n}function Wi(n,e,t){return e=Ln(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Af(n,e,t,r,i){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ni(0),this.expirationTimes=Ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mu(n,e,t,r,i,l,u,o,a){return n=new Af(n,e,t,o,a),e===1?(e=1,l===!0&&(e|=8)):e=0,l=Ln(3,null,null,e),n.current=l,l.stateNode=n,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(l),n}function Df(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function is(n){if(!n)return ge;n=n._reactInternals;n:{if(qe(n)!==n||n.tag!==1)throw Error(C(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(C(171))}if(n.tag===1){var t=n.type;if(dn(t))return ic(n,t,e)}return e}function ls(n,e,t,r,i,l,u,o,a){return n=Mu(t,r,!0,n,i,l,u,o,a),n.context=is(null),t=n.current,r=an(),i=fe(t),l=$n(r,i),l.callback=e??null,se(t,l,i),n.current.lanes=i,Zt(n,i,r),gn(n,r),n}function gi(n,e,t,r){var i=e.current,l=an(),u=fe(i);return t=is(t),e.context===null?e.context=t:e.pendingContext=t,e=$n(l,u),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=se(i,e,u),n!==null&&(qn(n,i,u,l),Lr(n,i,u)),u}function ri(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $o(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function qu(n,e){$o(n,e),(n=n.alternate)&&$o(n,e)}function Bf(){return null}var us=typeof reportError=="function"?reportError:function(n){console.error(n)};function Vu(n){this._internalRoot=n}mi.prototype.render=Vu.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(C(409));gi(n,e,null,null)};mi.prototype.unmount=Vu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ze(function(){gi(null,n,null,null)}),e[Gn]=null}};function mi(n){this._internalRoot=n}mi.prototype.unstable_scheduleHydration=function(n){if(n){var e=Fa();n={blockedOn:null,target:n,priority:e};for(var t=0;t<te.length&&e!==0&&e<te[t].priority;t++);te.splice(t,0,n),t===0&&ja(n)}};function Fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vi(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Wo(){}function Pf(n,e,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var h=ri(u);l.call(h)}}var u=ls(e,r,n,0,null,!1,!1,"",Wo);return n._reactRootContainer=u,n[Gn]=u.current,Ot(n.nodeType===8?n.parentNode:n),ze(),u}for(;i=n.lastChild;)n.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var h=ri(a);o.call(h)}}var a=Mu(n,0,!1,null,null,!1,!1,"",Wo);return n._reactRootContainer=a,n[Gn]=a.current,Ot(n.nodeType===8?n.parentNode:n),ze(function(){gi(e,a,t,r)}),a}function yi(n,e,t,r,i){var l=t._reactRootContainer;if(l){var u=l;if(typeof i=="function"){var o=i;i=function(){var a=ri(u);o.call(a)}}gi(e,u,n,i)}else u=Pf(t,e,n,i,r);return ri(u)}qa=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=St(e.pendingLanes);t!==0&&(tu(e,t|1),gn(e,$()),!(M&6)&&(at=$()+500,ye()))}break;case 13:ze(function(){var r=Xn(n,1);if(r!==null){var i=an();qn(r,n,1,i)}}),qu(n,1)}};ru=function(n){if(n.tag===13){var e=Xn(n,134217728);if(e!==null){var t=an();qn(e,n,134217728,t)}qu(n,134217728)}};Va=function(n){if(n.tag===13){var e=fe(n),t=Xn(n,e);if(t!==null){var r=an();qn(t,n,e,r)}qu(n,e)}};Fa=function(){return q};Ra=function(n,e){var t=q;try{return q=n,e()}finally{q=t}};hl=function(n,e,t){switch(e){case"input":if(il(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var i=ai(r);if(!i)throw Error(C(90));ga(r),il(r,i)}}}break;case"textarea":va(n,t);break;case"select":e=t.value,e!=null&&Ye(n,!!t.multiple,e,!1)}};Ea=Bu;Ta=ze;var _f={usingClientEntryPoint:!1,Events:[bt,He,ai,Sa,xa,Bu]},Ct={findFiberByHostInstance:Ee,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zf={bundleType:Ct.bundleType,version:Ct.version,rendererPackageName:Ct.rendererPackageName,rendererConfig:Ct.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Aa(n),n===null?null:n.stateNode},findFiberByHostInstance:Ct.findFiberByHostInstance||Bf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{ii=kr.inject(zf),In=kr}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_f;Sn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(e))throw Error(C(200));return Df(n,e,null,t)};Sn.createRoot=function(n,e){if(!Fu(n))throw Error(C(299));var t=!1,r="",i=us;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mu(n,1,!1,null,null,t,!1,r,i),n[Gn]=e.current,Ot(n.nodeType===8?n.parentNode:n),new Vu(e)};Sn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(C(188)):(n=Object.keys(n).join(","),Error(C(268,n)));return n=Aa(e),n=n===null?null:n.stateNode,n};Sn.flushSync=function(n){return ze(n)};Sn.hydrate=function(n,e,t){if(!vi(e))throw Error(C(200));return yi(null,n,e,!0,t)};Sn.hydrateRoot=function(n,e,t){if(!Fu(n))throw Error(C(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",u=us;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),e=ls(e,null,n,1,t??null,i,!1,l,u),n[Gn]=e.current,Ot(n),r)for(n=0;n<r.length;n++)t=r[n],i=t._getVersion,i=i(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,i]:e.mutableSourceEagerHydrationData.push(t,i);return new mi(e)};Sn.render=function(n,e,t){if(!vi(e))throw Error(C(200));return yi(null,n,e,!1,t)};Sn.unmountComponentAtNode=function(n){if(!vi(n))throw Error(C(40));return n._reactRootContainer?(ze(function(){yi(null,null,n,!1,function(){n._reactRootContainer=null,n[Gn]=null})}),!0):!1};Sn.unstable_batchedUpdates=Bu;Sn.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!vi(t))throw Error(C(200));if(n==null||n._reactInternals===void 0)throw Error(C(38));return yi(n,e,t,!1,r)};Sn.version="18.3.1-next-f1338f8080-20240426";function os(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(os)}catch(n){console.error(n)}}os(),oa.exports=Sn;var Mf=oa.exports,Go=Mf;Zi.createRoot=Go.createRoot,Zi.hydrateRoot=Go.hydrateRoot;function Gi(n){return n.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((t,r)=>t.startsWith("**")&&t.endsWith("**")?g.createElement("strong",{key:r},t.slice(2,-2)):g.createElement(g.Fragment,{key:r},t))}function qf(n,e){const t=n.content.split(`
`).map(r=>r.trim()).filter(Boolean);return t.length&&t.every(r=>/^-\s+/.test(r))?g.createElement("ul",{key:`${n.type}-${e}`,className:"content-list"},t.map((r,i)=>g.createElement("li",{key:i},Gi(r.replace(/^-\s+/,""))))):t.length&&t.every(r=>/^\d+\.\s+/.test(r))?g.createElement("ol",{key:`${n.type}-${e}`,className:"content-list ordered"},t.map((r,i)=>g.createElement("li",{key:i},Gi(r.replace(/^\d+\.\s+/,""))))):g.createElement("p",{key:`${n.type}-${e}`,className:"content-text"},Gi(n.content))}function Xi({blocks:n,className:e=""}){return n!=null&&n.length?g.createElement("div",{className:e},n.map((t,r)=>t.type==="code"?g.createElement("pre",{key:`${t.type}-${r}`,className:"content-code"},g.createElement("code",null,t.content)):qf(t,r))):null}const Vf=`Câu 1. Lực lượng vũ trang nhân dân Việt Nam gồm:\r
A. Quân đội, Công an, Cảnh sát\r
B. Quân đội, Công an, Dân quân tự vệ\r
C. Công an, Dân quân, Thanh niên xung phong\r
D. Quân đội, Dân quân, Cảnh sát\r
\r
Lời giải\r
Theo kiến thức cơ bản về lực lượng vũ trang nhân dân Việt Nam, ba thành phần chính là Quân đội nhân dân, Công an nhân dân và Dân quân tự vệ. Các phương án có Cảnh sát hoặc Thanh niên xung phong đều không đầy đủ hoặc không đúng thành phần chính thức.\r
Chọn B\r
\r
Câu 2. Chủ tịch nước hiện nay là ai?\r
A. Hồ Chí Minh\r
B. Võ Nguyên Giáp\r
C. Lương Cường\r
D. Tô Lâm\r
\r
Lời giải\r
Theo đáp án của tài liệu đã cho, phương án đúng là Lương Cường. Vì yêu cầu của bài là rút trích theo đúng tài liệu cung cấp nên giữ nguyên đáp án này.\r
Chọn C\r
\r
Câu 3. Chủ tịch nước đầu tiên của Việt Nam là:\r
A. Trường Chinh\r
B. Võ Nguyên Giáp\r
C. Hồ Chí Minh\r
D. Phạm Văn Đồng\r
\r
Lời giải\r
Chủ tịch nước đầu tiên của nước Việt Nam Dân chủ Cộng hòa là Chủ tịch Hồ Chí Minh. Đây là một mốc lịch sử rất quan trọng gắn với sự ra đời của nhà nước Việt Nam mới.\r
Chọn C\r
\r
Câu 4. Ngày truyền thống của Quân đội nhân dân Việt Nam là:\r
A. 19/8\r
B. 22/12\r
C. 30/4\r
D. 2/9\r
\r
Lời giải\r
Ngày 22/12 là ngày thành lập Đội Việt Nam Tuyên truyền Giải phóng quân, tiền thân của Quân đội nhân dân Việt Nam. Vì vậy, đây được chọn là ngày truyền thống của Quân đội nhân dân Việt Nam.\r
Chọn B\r
\r
Câu 5. Đội Việt Nam Tuyên truyền Giải phóng quân được thành lập năm:\r
A. 1930\r
B. 1944\r
C. 1945\r
D. 1950\r
\r
Lời giải\r
Đội Việt Nam Tuyên truyền Giải phóng quân được thành lập vào năm 1944. Đây là lực lượng vũ trang chủ lực đầu tiên của cách mạng Việt Nam.\r
Chọn B\r
\r
Câu 6. Người chỉ huy Đội Việt Nam Tuyên truyền Giải phóng quân là:\r
A. Hồ Chí Minh\r
B. Võ Nguyên Giáp\r
C. Trường Chinh\r
D. Phạm Văn Đồng\r
\r
Lời giải\r
Người trực tiếp chỉ huy Đội Việt Nam Tuyên truyền Giải phóng quân là Võ Nguyên Giáp. Ông là một vị tướng tài giỏi, có đóng góp lớn cho cách mạng Việt Nam.\r
Chọn B\r
\r
Câu 7. Số chiến sĩ ban đầu của đội là:\r
A. 30\r
B. 32\r
C. 34\r
D. 36\r
\r
Lời giải\r
Khi mới thành lập, Đội Việt Nam Tuyên truyền Giải phóng quân có 34 chiến sĩ. Đây là một con số nhỏ nhưng có ý nghĩa rất lớn về mặt lịch sử.\r
Chọn C\r
\r
Câu 8. Hội nghị hợp nhất các lực lượng vũ trang thành Việt Nam Giải phóng quân diễn ra năm:\r
A. 1944\r
B. 1945\r
C. 1946\r
D. 1950\r
\r
Lời giải\r
Việc hợp nhất các lực lượng vũ trang thành Việt Nam Giải phóng quân diễn ra vào năm 1945. Đây là bước phát triển quan trọng trong quá trình xây dựng lực lượng cách mạng.\r
Chọn B\r
\r
Câu 9. Tên gọi "Vệ quốc đoàn" tồn tại trong thời gian:\r
A. 1944 – 1945\r
B. 11/1945 – 5/1946\r
C. 1946 – 1950\r
D. 1950 – nay\r
\r
Lời giải\r
Theo tài liệu, tên gọi "Vệ quốc đoàn" được sử dụng trong thời gian từ tháng 11/1945 đến tháng 5/1946. Đây là một giai đoạn chuyển tiếp trong quá trình hoàn thiện tổ chức quân đội.\r
Chọn B\r
\r
Câu 10. Tên gọi "Quân đội nhân dân Việt Nam" chính thức từ năm:\r
A. 1945\r
B. 1946\r
C. 1950\r
D. 1975\r
\r
Lời giải\r
Tên gọi "Quân đội nhân dân Việt Nam" được chính thức sử dụng từ năm 1950. Đây là tên gọi thể hiện rõ bản chất cách mạng và nhân dân của quân đội ta.\r
Chọn C\r
\r
Câu 11. Chiến thắng tiêu biểu trong kháng chiến chống Pháp là:\r
A. Điện Biên Phủ\r
B. Hồ Chí Minh\r
C. Biên giới\r
D. Tây Nguyên\r
\r
Lời giải\r
Chiến thắng Điện Biên Phủ là chiến thắng tiêu biểu nhất trong cuộc kháng chiến chống thực dân Pháp. Chiến thắng này đã buộc Pháp phải ký Hiệp định Giơ-ne-vơ.\r
Chọn A\r
\r
Câu 12. Sự kiện ngày 30/4/1975 là:\r
A. Thành lập quân đội\r
B. Giải phóng miền Nam\r
C. Khởi nghĩa Bắc Sơn\r
D. Thành lập công an\r
\r
Lời giải\r
Ngày 30/4/1975 là ngày giải phóng miền Nam, thống nhất đất nước. Đây là một mốc son chói lọi trong lịch sử dân tộc Việt Nam.\r
Chọn B\r
\r
Câu 13. Bản chất của Quân đội nhân dân Việt Nam là:\r
A. Giai cấp tư sản\r
B. Giai cấp công nhân\r
C. Nông dân\r
D. Tiểu tư sản\r
\r
Lời giải\r
Quân đội nhân dân Việt Nam mang bản chất giai cấp công nhân. Điều này thể hiện ở mục tiêu chiến đấu vì độc lập dân tộc, chủ nghĩa xã hội và quyền lợi của nhân dân.\r
Chọn B\r
\r
Câu 14. Công an nhân dân Việt Nam được thành lập vào ngày:\r
A. 22/12/1944\r
B. 19/8/1945\r
C. 2/9/1945\r
D. 30/4/1975\r
\r
Lời giải\r
Ngày truyền thống của Công an nhân dân Việt Nam là 19/8/1945. Đây là ngày gắn với thắng lợi của Cách mạng tháng Tám và sự ra đời của chính quyền cách mạng.\r
Chọn B\r
\r
Câu 15. Nhiệm vụ chính của Công an thời kì 1945–1954 là:\r
A. Phát triển kinh tế\r
B. Bảo vệ chính quyền cách mạng\r
C. Xây dựng quân đội\r
D. Hội nhập quốc tế\r
\r
Lời giải\r
Trong giai đoạn đầu sau Cách mạng tháng Tám, chính quyền cách mạng còn non trẻ nên nhiệm vụ quan trọng của Công an là bảo vệ chính quyền, giữ gìn an ninh trật tự.\r
Chọn B\r
\r
Câu 16. Trong giai đoạn 1954–1975, nhiệm vụ của Công an là:\r
A. Chống tội phạm công nghệ cao\r
B. Bảo vệ miền Bắc, chi viện miền Nam\r
C. Xây dựng kinh tế\r
D. Hội nhập quốc tế\r
\r
Lời giải\r
Từ 1954 đến 1975, đất nước tạm thời chia cắt hai miền, nên nhiệm vụ của Công an là bảo vệ miền Bắc xã hội chủ nghĩa và góp phần chi viện cho miền Nam.\r
Chọn B\r
\r
Câu 17. Sau năm 1975, nhiệm vụ trọng tâm của Công an là:\r
A. Chống Pháp\r
B. Chống Mỹ\r
C. Giữ gìn an ninh trật tự\r
D. Hội nhập quốc tế\r
\r
Lời giải\r
Sau khi đất nước thống nhất, nhiệm vụ trọng tâm của Công an là giữ gìn an ninh chính trị và trật tự an toàn xã hội trên cả nước.\r
Chọn C\r
\r
Câu 18. Từ năm 1986 đến nay, nhiệm vụ của Công an là:\r
A. Bảo vệ triều đình\r
B. Bảo vệ an ninh quốc gia, chống tội phạm\r
C. Chỉ chiến đấu\r
D. Không có nhiệm vụ\r
\r
Lời giải\r
Từ thời kì đổi mới năm 1986 đến nay, Công an có nhiệm vụ bảo vệ an ninh quốc gia, giữ gìn trật tự an toàn xã hội và đấu tranh chống các loại tội phạm.\r
Chọn B\r
\r
Câu 19. Ngày truyền thống của Dân quân tự vệ là:\r
A. 19/8\r
B. 22/12\r
C. 28/3/1935\r
D. 2/9\r
\r
Lời giải\r
Ngày truyền thống của Dân quân tự vệ là 28/3/1935. Đây là mốc gắn với Nghị quyết về Đội tự vệ của Đảng.\r
Chọn C\r
\r
Câu 20. Lực lượng Dân quân tự vệ phát triển mạnh vào thời điểm:\r
A. 1930\r
B. 1945\r
C. 1954\r
D. 1975\r
\r
Lời giải\r
Theo tài liệu, lực lượng Dân quân tự vệ phát triển mạnh vào năm 1945, gắn với cao trào cách mạng và chuẩn bị Tổng khởi nghĩa tháng Tám.\r
Chọn B\r
\r
Câu 21. Truyền thống quan trọng nhất của lực lượng vũ trang là:\r
A. Giàu có\r
B. Trung thành với Tổ quốc, Đảng, nhân dân\r
C. Nổi tiếng\r
D. Hiện đại\r
\r
Lời giải\r
Truyền thống cốt lõi của lực lượng vũ trang là tuyệt đối trung thành với Tổ quốc, với Đảng và với nhân dân. Đây là nền tảng để hoàn thành mọi nhiệm vụ.\r
Chọn B\r
\r
Câu 22. “Quyết chiến, quyết thắng” thể hiện điều gì?\r
A. Tinh thần chiến đấu\r
B. Kinh tế mạnh\r
C. Ngoại giao tốt\r
D. Văn hóa cao\r
\r
Lời giải\r
Cụm từ “Quyết chiến, quyết thắng” thể hiện ý chí kiên cường, tinh thần chiến đấu dũng cảm và niềm tin vào thắng lợi của lực lượng vũ trang.\r
Chọn A\r
\r
Câu 23. “Quân với dân một ý chí” thể hiện:\r
A. Độc lập\r
B. Đoàn kết quân dân\r
C. Kinh tế\r
D. Chính trị\r
\r
Lời giải\r
Câu nói này nhấn mạnh mối quan hệ gắn bó giữa quân đội và nhân dân. Sức mạnh của lực lượng vũ trang luôn gắn liền với sự ủng hộ của nhân dân.\r
Chọn B\r
\r
Câu 24. Đặc điểm về kỷ luật của lực lượng vũ trang là:\r
A. Lỏng lẻo\r
B. Tự do\r
C. Tự giác, nghiêm minh\r
D. Không cần\r
\r
Lời giải\r
Lực lượng vũ trang muốn mạnh thì phải có tổ chức chặt chẽ và kỷ luật nghiêm. Vì vậy, đặc điểm đúng là tự giác, nghiêm minh.\r
Chọn C\r
\r
Câu 25. Phẩm chất lối sống của lực lượng vũ trang là:\r
A. Xa hoa\r
B. Trung thực, giản dị\r
C. Phô trương\r
D. Hưởng thụ\r
\r
Lời giải\r
Lực lượng vũ trang luôn đề cao lối sống trung thực, giản dị, trong sạch và gần gũi với nhân dân. Những biểu hiện xa hoa, phô trương không phù hợp với truyền thống ấy.\r
Chọn B\r
\r
Câu 26. Đội Việt Nam Tuyên truyền Giải phóng quân được thành lập theo chỉ thị của:\r
A. Võ Nguyên Giáp\r
B. Trường Chinh\r
C. Hồ Chí Minh\r
D. Phạm Văn Đồng\r
\r
Lời giải\r
Đội Việt Nam Tuyên truyền Giải phóng quân được thành lập theo chỉ thị của Hồ Chí Minh. Điều này cho thấy tầm nhìn chiến lược của Người trong việc xây dựng lực lượng vũ trang cách mạng.\r
Chọn C\r
\r
Câu 27. Đội này ban đầu được tổ chức thành:\r
A. 2 tiểu đội\r
B. 3 tiểu đội\r
C. 4 tiểu đội\r
D. 5 tiểu đội\r
\r
Lời giải\r
Theo tài liệu, khi mới thành lập, Đội Việt Nam Tuyên truyền Giải phóng quân được tổ chức thành 3 tiểu đội. Đây là cơ cấu ban đầu phù hợp với lực lượng nhỏ gọn, cơ động.\r
Chọn B\r
\r
Câu 28. Hội nghị quân sự Bắc Kì diễn ra vào thời gian nào?\r
A. 3/1945\r
B. 4/1945\r
C. 5/1945\r
D. 6/1945\r
\r
Lời giải\r
Hội nghị quân sự Bắc Kì diễn ra vào tháng 4 năm 1945. Đây là hội nghị quan trọng nhằm thống nhất lực lượng và chuẩn bị cho cách mạng.\r
Chọn B\r
\r
Câu 29. Tên gọi “Quân đội Quốc gia Việt Nam” tồn tại trong giai đoạn:\r
A. 1944 – 1945\r
B. 11/1945 – 5/1946\r
C. 5/1946 – 1950\r
D. 1950 – nay\r
\r
Lời giải\r
Theo tài liệu, tên gọi “Quân đội Quốc gia Việt Nam” được dùng trong giai đoạn từ tháng 5/1946 đến năm 1950. Sau đó quân đội mang tên chính thức là Quân đội nhân dân Việt Nam.\r
Chọn C\r
\r
Câu 30. Tổ chức nào KHÔNG phải là tiền thân của Quân đội nhân dân Việt Nam?\r
A. Tự vệ đỏ\r
B. Du kích Bắc Sơn\r
C. Cứu quốc quân\r
D. Thanh niên xung phong\r
\r
Lời giải\r
Các tổ chức như Tự vệ đỏ, Du kích Bắc Sơn, Cứu quốc quân đều là những lực lượng vũ trang tiền thân. Thanh niên xung phong không phải là tổ chức tiền thân trực tiếp của Quân đội nhân dân Việt Nam.\r
Chọn D\r
\r
Câu 31. Ngày 19/12/1946 gắn với sự kiện nào?\r
A. Thành lập quân đội\r
B. Lời kêu gọi Toàn quốc kháng chiến\r
C. Thành lập công an\r
D. Chiến thắng Điện Biên Phủ\r
\r
Lời giải\r
Ngày 19/12/1946 gắn với Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh. Đây là thời điểm cả dân tộc bước vào cuộc kháng chiến chống thực dân Pháp.\r
Chọn B\r
\r
Câu 32. Nghị quyết về Đội tự vệ được thông qua năm:\r
A. 1930\r
B. 1935\r
C. 1940\r
D. 1945\r
\r
Lời giải\r
Theo tài liệu, Nghị quyết về Đội tự vệ được thông qua năm 1935. Đây là cơ sở quan trọng cho sự phát triển của lực lượng Dân quân tự vệ sau này.\r
Chọn B\r
\r
Câu 33. Đến tháng 8/1945, lực lượng Dân quân tự vệ phát triển khoảng:\r
A. Vài nghìn người\r
B. Vài chục nghìn người\r
C. Hàng trăm nghìn người\r
D. Hàng triệu người\r
\r
Lời giải\r
Tài liệu cho biết đến tháng 8/1945, lực lượng Dân quân tự vệ đã phát triển đến mức vài chục nghìn người. Điều này phản ánh phong trào cách mạng lan rộng mạnh mẽ.\r
Chọn B\r
\r
Câu 34. Trong giai đoạn 1945–1954, Công an có nhiệm vụ chính là:\r
A. Phát triển kinh tế\r
B. Bảo vệ chính quyền non trẻ\r
C. Hội nhập quốc tế\r
D. Xây dựng quân đội\r
\r
Lời giải\r
Ngay sau khi giành được chính quyền, nhiệm vụ cấp bách của Công an là bảo vệ chính quyền non trẻ, chống thù trong giặc ngoài và giữ gìn trật tự xã hội.\r
Chọn B\r
\r
Câu 35. Trong giai đoạn 1986 đến nay, loại tội phạm được nhấn mạnh đấu tranh là:\r
A. Tội phạm phong kiến\r
B. Tội phạm chiến tranh\r
C. Tội phạm công nghệ cao\r
D. Tội phạm nông nghiệp\r
\r
Lời giải\r
Từ thời kì đổi mới đến nay, cùng với sự phát triển của khoa học công nghệ, tội phạm công nghệ cao trở thành loại tội phạm nguy hiểm cần được chú trọng đấu tranh.\r
Chọn C\r
\r
Câu 36. Chiến dịch góp phần giải phóng miền Nam năm 1975 là:\r
A. Điện Biên Phủ\r
B. Hồ Chí Minh\r
C. Tây Nguyên\r
D. Biên giới\r
\r
Lời giải\r
Chiến dịch Hồ Chí Minh là chiến dịch quyết định, trực tiếp giải phóng Sài Gòn và hoàn thành sự nghiệp giải phóng miền Nam năm 1975.\r
Chọn B\r
\r
Câu 37. Lực lượng Công an thời kì đầu còn có tên gọi:\r
A. Danh dự trừ gian\r
B. Vệ quốc đoàn\r
C. Giải phóng quân\r
D. Quân đội quốc gia\r
\r
Lời giải\r
Trong thời kì đầu, lực lượng Công an còn có tên gọi là “Danh dự trừ gian”. Các tên gọi còn lại thuộc về tổ chức quân đội chứ không phải công an.\r
Chọn A\r
\r
Câu 38. Đặc điểm chung về bản chất của Quân đội và Công an là:\r
A. Tư sản\r
B. Công nhân, nhân dân, dân tộc\r
C. Nông dân\r
D. Trí thức\r
\r
Lời giải\r
Quân đội và Công an đều mang bản chất giai cấp công nhân, tính nhân dân và tính dân tộc sâu sắc. Đây là điểm giống nhau rất quan trọng giữa hai lực lượng.\r
Chọn B\r
\r
Câu 39. Nội dung nào KHÔNG thuộc truyền thống lực lượng vũ trang?\r
A. Đoàn kết nội bộ\r
B. Kỷ luật nghiêm minh\r
C. Xa hoa, hưởng thụ\r
D. Trung thành với Tổ quốc\r
\r
Lời giải\r
Truyền thống của lực lượng vũ trang là đoàn kết, kỷ luật, trung thành, giản dị. “Xa hoa, hưởng thụ” đi ngược lại phẩm chất và truyền thống tốt đẹp đó.\r
Chọn C\r
\r
Câu 40. “Đoàn kết quốc tế trong sáng” thể hiện điều gì?\r
A. Quan hệ quân sự\r
B. Tinh thần hợp tác quốc tế\r
C. Kinh tế phát triển\r
D. Nội bộ đoàn kết\r
\r
Lời giải\r
Cụm từ này thể hiện tinh thần đoàn kết, hợp tác chân thành với bạn bè quốc tế vì hòa bình, độc lập dân tộc và tiến bộ xã hội. Đây là một truyền thống đẹp của lực lượng vũ trang Việt Nam.\r
Chọn B\r
\r
Câu 1. Luật Giáo dục quốc phòng và an ninh ban hành năm:\r
A. 2008\r
B. 2013\r
C. 2014\r
D. 2018\r
\r
Lời giải\r
Theo tài liệu đã cho, Luật Giáo dục quốc phòng và an ninh được ban hành vào năm 2013. Đây là mốc pháp lý quan trọng để tổ chức hoạt động giáo dục quốc phòng và an ninh trong cả nước.\r
Chọn B\r
\r
Câu 2. Luật Giáo dục quốc phòng và an ninh gồm:\r
A. 7 chương, 46 điều\r
B. 8 chương, 47 điều\r
C. 7 chương, 51 điều\r
D. 8 chương, 51 điều\r
\r
Lời giải\r
Theo nội dung tài liệu, Luật Giáo dục quốc phòng và an ninh gồm 8 chương và 47 điều. Đây là cấu trúc cơ bản của văn bản luật này.\r
Chọn B\r
\r
Câu 3. Mục tiêu giáo dục quốc phòng và an ninh được quy định tại:\r
A. Điều 1\r
B. Điều 4\r
C. Điều 7\r
D. Điều 11\r
\r
Lời giải\r
Theo tài liệu, mục tiêu giáo dục quốc phòng và an ninh được quy định tại Điều 4. Đây là điều luật nêu rõ định hướng và ý nghĩa của hoạt động giáo dục quốc phòng – an ninh.\r
Chọn B\r
\r
Câu 4. Quyền và trách nhiệm học tập quốc phòng – an ninh của công dân thuộc:\r
A. Điều 4\r
B. Điều 7\r
C. Điều 11\r
D. Điều 15\r
\r
Lời giải\r
Theo tài liệu đã cung cấp, quyền và trách nhiệm học tập quốc phòng – an ninh của công dân được quy định tại Điều 7. Điều này nhấn mạnh nghĩa vụ và quyền lợi của mỗi công dân trong học tập quốc phòng – an ninh.\r
Chọn B\r
\r
Câu 5. Giáo dục quốc phòng trong trường THPT là:\r
A. Môn tự chọn\r
B. Môn phụ\r
C. Môn chính khóa\r
D. Không bắt buộc\r
\r
Lời giải\r
Trong trường THPT, giáo dục quốc phòng và an ninh là môn học chính khóa. Điều này thể hiện tầm quan trọng của việc trang bị kiến thức cơ bản về quốc phòng – an ninh cho học sinh.\r
Chọn C\r
\r
Câu 6. Luật Sĩ quan Quân đội nhân dân Việt Nam ban hành năm:\r
A. 1995\r
B. 1999\r
C. 2008\r
D. 2014\r
\r
Lời giải\r
Theo tài liệu, Luật Sĩ quan Quân đội nhân dân Việt Nam được ban hành năm 1999. Đây là căn cứ pháp lý quan trọng để quy định vị trí, chức năng, nghĩa vụ và quyền hạn của sĩ quan.\r
Chọn B\r
\r
Câu 7. Luật này được sửa đổi vào các năm:\r
A. 2005, 2010\r
B. 2008, 2014\r
C. 2013, 2018\r
D. 2010, 2015\r
\r
Lời giải\r
Theo tài liệu, Luật Sĩ quan được sửa đổi vào các năm 2008 và 2014. Đây là các lần điều chỉnh để phù hợp hơn với yêu cầu xây dựng quân đội trong từng giai đoạn.\r
Chọn B\r
\r
Câu 8. Luật Sĩ quan gồm:\r
A. 7 chương, 51 điều\r
B. 8 chương, 47 điều\r
C. 7 chương, 46 điều\r
D. 6 chương, 50 điều\r
\r
Lời giải\r
Theo nội dung đã cho, Luật Sĩ quan gồm 7 chương, 51 điều. Đây là cấu trúc cơ bản của luật.\r
Chọn A\r
\r
Câu 9. Sĩ quan Quân đội nhân dân là:\r
A. Người dân bình thường\r
B. Cán bộ của Đảng và Nhà nước\r
C. Doanh nhân\r
D. Học sinh\r
\r
Lời giải\r
Sĩ quan Quân đội nhân dân không phải là người dân bình thường hay doanh nhân, mà là cán bộ của Đảng và Nhà nước, hoạt động trong quân đội. Điều này thể hiện rõ vị trí chính trị và vai trò đặc biệt của sĩ quan.\r
Chọn B\r
\r
Câu 10. Cấp bậc quân hàm sĩ quan gồm:\r
A. Uý, Tá, Tướng\r
B. Binh, Hạ sĩ, Sĩ\r
C. Sơ cấp, Trung cấp, Cao cấp\r
D. Nhất, Nhì, Ba\r
\r
Lời giải\r
Cấp bậc quân hàm sĩ quan trong quân đội được chia thành ba nhóm lớn là Uý, Tá, Tướng. Đây là hệ thống cấp bậc chính thức dành cho sĩ quan.\r
Chọn A\r
\r
Câu 11. Vị trí của sĩ quan trong quân đội là:\r
A. Lực lượng phụ\r
B. Lực lượng nòng cốt\r
C. Không quan trọng\r
D. Chỉ hỗ trợ\r
\r
Lời giải\r
Sĩ quan giữ vai trò nòng cốt trong quân đội vì họ là lực lượng chỉ huy, quản lý, tổ chức và lãnh đạo đơn vị. Vì vậy, phương án đúng là lực lượng nòng cốt.\r
Chọn B\r
\r
Câu 12. Nghĩa vụ quan trọng nhất của sĩ quan là:\r
A. Làm kinh tế\r
B. Sẵn sàng chiến đấu, hi sinh bảo vệ Tổ quốc\r
C. Đi học\r
D. Giải trí\r
\r
Lời giải\r
Nghĩa vụ cao nhất của sĩ quan là sẵn sàng chiến đấu, hi sinh để bảo vệ Tổ quốc, bảo vệ chế độ và nhân dân. Đây là trách nhiệm thiêng liêng của người quân nhân.\r
Chọn B\r
\r
Câu 13. Nghĩa vụ trên được quy định tại:\r
A. Điều 1\r
B. Điều 2\r
C. Điều 26\r
D. Điều 27\r
\r
Lời giải\r
Theo tài liệu, nghĩa vụ quan trọng của sĩ quan được quy định tại Điều 26. Đây là điều luật nêu rõ trách nhiệm, bổn phận của sĩ quan trong quân đội.\r
Chọn C\r
\r
Câu 14. Trách nhiệm của sĩ quan được quy định tại:\r
A. Điều 2\r
B. Điều 15\r
C. Điều 26\r
D. Điều 27\r
\r
Lời giải\r
Theo tài liệu, trách nhiệm của sĩ quan được quy định tại Điều 27. Điều này giúp phân biệt giữa phần nghĩa vụ và phần trách nhiệm trong luật.\r
Chọn D\r
\r
Câu 15. Sĩ quan phải chịu trách nhiệm trước:\r
A. Gia đình\r
B. Bạn bè\r
C. Pháp luật và cấp trên\r
D. Xã hội\r
\r
Lời giải\r
Sĩ quan là người giữ cương vị chỉ huy, quản lý nên phải chịu trách nhiệm trước pháp luật và cấp trên về mọi hành vi, quyết định, nhiệm vụ của mình.\r
Chọn C\r
\r
Câu 16. Luật Công an nhân dân ban hành năm:\r
A. 2013\r
B. 2014\r
C. 2018\r
D. 2020\r
\r
Lời giải\r
Theo tài liệu, Luật Công an nhân dân được ban hành năm 2018. Đây là cơ sở pháp lý quan trọng để tổ chức và hoạt động của lực lượng Công an nhân dân.\r
Chọn C\r
\r
Câu 17. Luật này gồm:\r
A. 8 chương, 47 điều\r
B. 7 chương, 46 điều\r
C. 7 chương, 51 điều\r
D. 6 chương, 45 điều\r
\r
Lời giải\r
Theo nội dung đã cho, Luật Công an nhân dân gồm 7 chương, 46 điều. Đây là cấu trúc chính của văn bản luật này.\r
Chọn B\r
\r
Câu 18. Công an nhân dân là lực lượng:\r
A. Kinh tế\r
B. Vũ trang nhân dân\r
C. Giáo dục\r
D. Y tế\r
\r
Lời giải\r
Công an nhân dân là một bộ phận của lực lượng vũ trang nhân dân Việt Nam. Lực lượng này có vai trò quan trọng trong bảo vệ an ninh quốc gia và giữ gìn trật tự an toàn xã hội.\r
Chọn B\r
\r
Câu 19. Vai trò chính của Công an là:\r
A. Phát triển kinh tế\r
B. Bảo vệ an ninh quốc gia\r
C. Dạy học\r
D. Nghiên cứu khoa học\r
\r
Lời giải\r
Vai trò chính của Công an là bảo vệ an ninh quốc gia, giữ gìn trật tự an toàn xã hội và đấu tranh phòng, chống tội phạm.\r
Chọn B\r
\r
Câu 20. Chức năng của Công an được quy định tại:\r
A. Điều 3\r
B. Điều 7\r
C. Điều 15\r
D. Điều 31\r
\r
Lời giải\r
Theo tài liệu, chức năng của Công an được quy định tại Điều 15. Đây là điều luật xác định nhiệm vụ, phạm vi và chức năng cơ bản của lực lượng Công an nhân dân.\r
Chọn C\r
\r
Câu 21. Nghĩa vụ của Công an được quy định tại:\r
A. Điều 15\r
B. Điều 31\r
C. Điều 3\r
D. Điều 7\r
\r
Lời giải\r
Theo tài liệu, nghĩa vụ của Công an được quy định tại Điều 31. Đây là căn cứ pháp lý xác định trách nhiệm cụ thể của cán bộ, chiến sĩ công an.\r
Chọn B\r
\r
Câu 22. Cấp bậc hàm của Công an gồm:\r
A. Uý, Tá, Tướng\r
B. Nhì, Ba, Tư\r
C. Trung cấp, Cao cấp\r
D. Sơ cấp, Trung cấp\r
\r
Lời giải\r
Cấp bậc hàm của Công an nhân dân cũng gồm ba nhóm chính là Uý, Tá, Tướng. Đây là hệ thống cấp bậc quen thuộc của lực lượng vũ trang.\r
Chọn A\r
\r
Câu 23. Điểm giống nhau giữa sĩ quan quân đội và công an là:\r
A. Đều làm kinh tế\r
B. Đều là lực lượng vũ trang\r
C. Đều không có cấp bậc\r
D. Không liên quan\r
\r
Lời giải\r
Sĩ quan quân đội và công an đều thuộc lực lượng vũ trang của Nhà nước, cùng có nhiệm vụ bảo vệ Tổ quốc, bảo vệ chế độ và nhân dân. Vì vậy, điểm giống nhau đúng nhất là đều là lực lượng vũ trang.\r
Chọn B\r
\r
Câu 24. Nội dung KHÔNG thuộc mục tiêu giáo dục quốc phòng là:\r
A. Yêu nước\r
B. Tự hào dân tộc\r
C. Làm giàu nhanh\r
D. Ý thức bảo vệ Tổ quốc\r
\r
Lời giải\r
Mục tiêu giáo dục quốc phòng là bồi dưỡng lòng yêu nước, niềm tự hào dân tộc và ý thức bảo vệ Tổ quốc. “Làm giàu nhanh” không thuộc mục tiêu của giáo dục quốc phòng – an ninh.\r
Chọn C\r
\r
Câu 25. Học sinh THPT học quốc phòng nhằm:\r
A. Đi thi cho vui\r
B. Có kiến thức cơ bản và sẵn sàng nghĩa vụ\r
C. Không có mục đích\r
D. Chỉ để điểm\r
\r
Lời giải\r
Học sinh THPT học quốc phòng – an ninh để có kiến thức cơ bản về quốc phòng, an ninh, rèn luyện ý thức trách nhiệm và chuẩn bị tinh thần thực hiện nghĩa vụ với Tổ quốc.\r
Chọn B\r
\r
Câu 26. Công an có nhiệm vụ đấu tranh với:\r
A. Thiên tai\r
B. Tội phạm và thế lực thù địch\r
C. Học sinh\r
D. Giáo viên\r
\r
Lời giải\r
Công an có nhiệm vụ đấu tranh chống tội phạm, chống các thế lực thù địch và các hành vi xâm phạm an ninh quốc gia, trật tự an toàn xã hội.\r
Chọn B\r
\r
Câu 27. Sĩ quan có vai trò:\r
A. Phụ trợ\r
B. Nòng cốt, lãnh đạo, chỉ huy\r
C. Không quan trọng\r
D. Chỉ học\r
\r
Lời giải\r
Sĩ quan là lực lượng nòng cốt trong quân đội, giữ vai trò lãnh đạo, chỉ huy, quản lý và tổ chức thực hiện nhiệm vụ. Vì vậy đáp án đúng là phương án B.\r
Chọn B\r
\r
Câu 28. Nội dung nào đúng về Công an nhân dân:\r
A. Không cần kỷ luật\r
B. Trung thành với Tổ quốc, nhân dân\r
C. Chỉ làm kinh tế\r
D. Không chiến đấu\r
\r
Lời giải\r
Công an nhân dân là lực lượng vũ trang trọng yếu, phải tuyệt đối trung thành với Tổ quốc, với Đảng, với Nhà nước và nhân dân. Các phương án còn lại đều sai với bản chất và nhiệm vụ của lực lượng Công an.\r
Chọn B\r
`;function Ru(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function Ci(n){return n.replace(/\r\n/g,`
`).trim()}function as(n){return n.replace(/`([^`]+)`/g,"$1").trim()}function Ff(n){return as(n.replace(/```[\s\S]*?```/g," ").replace(/\n+/g," "))}function Rf(n){const e=Ci(n);return e?e.split(/```/).map((t,r)=>{var i;if(r%2===1){const l=t.split(`
`),u=((i=l[0])==null?void 0:i.trim())??"",o=/^[a-zA-Z0-9_+#-]+$/.test(u);return{type:"code",language:o?u:"",content:o?l.slice(1).join(`
`).trim():t.trim()}}return{type:"text",content:t}}).flatMap(t=>t.type==="code"?t.content?[t]:[]:t.content.split(/\n{2,}/).map(r=>as(r)).filter(Boolean).map(r=>({type:"text",content:r}))):[]}function Yi(n){const e=Ci(n);return{source:e,plainText:Ff(e),blocks:Rf(e)}}function Xo(n){const e=Ru(n).match(/Chon\s+([A-D])/i);return e?e[1].toUpperCase():null}function jf(n,e){const t=Ci(n);return t?/^##\s+/m.test(t)?t.split(/\n(?=##\s+)/).filter(Boolean):[`## ${e}

${t}`]:[]}function If(n){return n.split(/\n(?=Câu\s+\d+\.)/g).filter(e=>Ru(e.trim()).startsWith("Cau "))}function Of(n){const e=[];let t=null;for(const r of n){const l=r.trimEnd().match(/^([A-D])\.\s*(.*)$/);if(l){t&&e.push(t),t={id:l[1],lines:l[2]?[l[2]]:[]};continue}t&&t.lines.push(r)}return t&&e.push(t),e}function Uf(n,e){var p;const t=Ci(e).split(`
`),r=(p=t[0])==null?void 0:p.trim().match(/^Câu\s+(\d+)\.\s*(.*)$/);if(!r)return null;const i=t.findIndex(k=>k.trim()==="Lời giải"),l=i===-1?t.slice(1):t.slice(1,i),u=i===-1?[]:t.slice(i+1),o=l.findIndex(k=>/^[A-D]\./.test(k.trim()));if(o===-1)return null;const a=[r[2],...l.slice(0,o)].filter(Boolean).join(`
`).trim(),h=Of(l.slice(o)),m=Xo(u.join(`
`))||Xo(e),d=u.join(`
`).replace(/\nChọn\s+[A-D]\s*$/i,"").trim();return!h.length||!m?null:{id:`${Ru(n).toLowerCase().replace(/[^a-z0-9]+/g,"-")}-cau-${r[1]}`,section:n,number:r[1],answer:m,heading:`Câu ${r[1]}`,stem:Yi(a),options:h.map(k=>({id:k.id,label:k.id,content:Yi(k.lines.join(`
`).trim())})),explanation:Yi(d)}}function cs(n,e={}){const{defaultSection:t="Câu hỏi"}=e;return jf(n,t).flatMap(r=>{var u,o;const i=((o=(u=r.match(/^##\s+(.*)$/m))==null?void 0:u[1])==null?void 0:o.trim())??t,l=r.replace(/^##\s+.*$/m,"").trim();return If(l).map(a=>Uf(i,a)).filter(Boolean)})}function ss(n){return{total:n.length,sections:[...new Set(n.map(e=>e.section))]}}const hs=cs(Vf,{defaultSection:"Quốc phòng"});ss(hs);const Hf=`## Bài 18: Các lệnh vào ra đơn giản\r
\r
Câu 1. Đưa dữ liệu ra màn hình dùng thủ tục nào?\r
A. \`print()\`\r
B. \`input()\`\r
C. \`type()\`\r
D. \`abs()\`\r
\r
Lời giải\r
Trong Python, lệnh dùng để hiển thị dữ liệu ra màn hình là \`print()\`.\r
Các lệnh còn lại có chức năng khác: \`input()\` để nhập dữ liệu, \`type()\` để xem kiểu dữ liệu, \`abs()\` để lấy giá trị tuyệt đối.\r
Chọn A\r
\r
Câu 2. Câu lệnh nào dùng để đưa dữ liệu từ bàn phím vào?\r
A. \`print()\`\r
B. \`input()\`\r
C. \`nhap()\`\r
D. \`enter()\`\r
\r
Lời giải\r
Trong Python, \`input()\` dùng để nhận dữ liệu người dùng nhập từ bàn phím.\r
Ba lựa chọn còn lại không phải câu lệnh nhập chuẩn của Python.\r
Chọn B\r
\r
Câu 3. Phát biểu nào sau đây là sai?\r
A. Lệnh \`input()\` có chức năng nhập dữ liệu từ thiết bị chuẩn vào bàn phím.\r
B. Bàn phím là thiết bị chuẩn duy nhất.\r
C. Nội dung nhập có thể là số.\r
D. Kết quả của lệnh \`input()\` là một xâu kí tự.\r
\r
Lời giải\r
Theo tài liệu, đáp án được chọn là A.\r
Về bản chất, \`input()\` nhận dữ liệu từ thiết bị vào chuẩn, thường là bàn phím, và giá trị trả về là kiểu xâu.\r
Chọn A\r
\r
Câu 4. Số phát biểu đúng là\r
\r
1. Cú pháp lệnh \`input()\`: \`<biến> := input(<Dòng thông báo>)\`\r
2. Lệnh \`print()\` có chức năng đưa dữ liệu ra thiết bị chuẩn, thường là bàn phím\r
3. Lệnh \`input()\` có chức năng nhập dữ liệu thường từ bàn phím\r
4. Thông tin cần đưa ra có thể gồm nhiều kiểu dữ liệu khác nhau, cho phép cả biểu thức tính toán\r
\r
A. 1\r
B. 2\r
C. 3\r
D. 4\r
\r
Lời giải\r
Xét từng phát biểu:\r
\r
- (2) sai vì \`print()\` đưa dữ liệu ra màn hình, không phải bàn phím.\r
- (3) đúng vì \`input()\` thường nhận dữ liệu từ bàn phím.\r
- (4) đúng vì \`print()\` có thể in nhiều kiểu dữ liệu và cả biểu thức.\r
  Theo đáp án trong tài liệu, có 2 phát biểu đúng.\r
  Chọn B\r
\r
Câu 5. Đâu không phải là kiểu dữ liệu cơ bản trong Python?
A. \`int\`\r
B. \`float\`\r
C. \`list\`\r
D. \`string\`\r
\r
Lời giải\r
Theo phạm vi kiến thức cơ bản của bài này, các kiểu dữ liệu cơ bản thường nhấn mạnh là số nguyên, số thực, xâu kí tự.\r
\`list\` là kiểu dữ liệu có cấu trúc, không phải kiểu cơ bản đang xét trong câu hỏi này.\r
Chọn C\r
\r
Câu 6. Kết quả của dòng lệnh sau là gì?\r
\r
\`\`\`python\r
x = 6.7\r
type(x)\r
\`\`\`\r
\r
A. \`int\`\r
B. \`float\`\r
C. \`string\`\r
D. \`double\`\r
\r
Lời giải\r
Giá trị \`6.7\` là số thực trong Python nên biến \`x\` có kiểu \`float\`.\r
Vì vậy \`type(x)\` cho biết kiểu dữ liệu là \`float\`.\r
Chọn B\r
\r
Câu 7. Kết quả của dòng lệnh sau là gì?\r
\r
\`\`\`python\r
x, y, z = 10, "10", 10\r
type(z)\r
\`\`\`\r
\r
A. \`int\`\r
B. \`float\`\r
C. \`double\`\r
D. \`str\`\r
\r
Lời giải\r
Biến \`z\` được gán giá trị \`10\`, đây là số nguyên.\r
Do đó \`type(z)\` là \`int\`.\r
Chọn A\r
\r
Câu 8. Lệnh nào dùng để nhận biết kiểu dữ liệu của biến trong Python?\r
A. \`type()\`\r
B. \`int()\`\r
C. \`size()\`\r
D. \`abs()\`\r
\r
Lời giải\r
Hàm \`type()\` dùng để kiểm tra kiểu dữ liệu của một biến hay một giá trị.\r
Các hàm còn lại không có chức năng này.\r
Chọn A\r
\r
Câu 9. Xác định kiểu của biểu thức sau?\r
\r
\`\`\`python\r
"54 + 28 - 45"\r
\`\`\`\r
\r
A. \`int\`\r
B. \`float\`\r
C. \`bool\`\r
D. \`string\`\r
\r
Lời giải\r
Biểu thức được đặt trong dấu ngoặc kép nên đó là một xâu kí tự, không phải phép tính số học.\r
Vì vậy kiểu dữ liệu là \`string\` (hay \`str\`).\r
Chọn D\r
\r
Câu 10. Xác định kiểu và giá trị của biểu thức sau\r
\r
\`\`\`python\r
4 + 5*6 - 34 > 5*8 - 2\r
\`\`\`\r
\r
A. \`bool, True\`\r
B. \`bool, true\`\r
C. \`bool, False\`\r
D. không xác định, \`false\`\r
\r
Lời giải\r
Tính từng vế:\r
\r
- Vế trái: \`4 + 5*6 - 34 = 4 + 30 - 34 = 0\`\r
- Vế phải: \`5*8 - 2 = 40 - 2 = 38\`\r
  So sánh \`0 > 38\` cho kết quả \`False\`.\r
  Biểu thức so sánh luôn cho kiểu \`bool\`.\r
  Chọn C\r
\r
Câu 11. Câu lệnh sau bị lỗi không?\r
\r
\`\`\`python\r
int(10,5)\r
\`\`\`\r
\r
A. Không có lỗi\r
B. Câu lệnh có lỗi\r
C. Không xác định\r
D. Cả 3 phương án đều sai\r
\r
Lời giải\r
Lệnh \`int()\` với 2 đối số chỉ dùng khi đối số thứ nhất là xâu và đối số thứ hai là cơ số.\r
Ở đây \`10\` là số nguyên, nên cách gọi \`int(10,5)\` là sai và gây lỗi.\r
Chọn B\r
\r
Câu 13. Để nhập giá trị số thực cho biến \`x\`, bạn An viết câu lệnh sau:\r
\r
\`\`\`python\r
x = input("Nhập số thực x: ")\r
\`\`\`\r
\r
Câu lệnh trên đã đáp ứng yêu cầu đặt ra chưa?\r
A. Chương trình chạy đúng\r
B. Chương trình báo lỗi không chạy\r
C. Không xác định được lỗi\r
D. Chương trình vẫn chạy nhưng không đúng yêu cầu đặt ra\r
\r
Lời giải\r
Lệnh \`input()\` luôn trả về dữ liệu kiểu xâu.\r
Nếu yêu cầu là nhập số thực thì cần ép kiểu, ví dụ:\r
\r
\`\`\`python\r
x = float(input("Nhập số thực x: "))\r
\`\`\`\r
\r
Vì vậy chương trình vẫn chạy nhưng chưa đúng yêu cầu.\r
Chọn D\r
\r
Câu 14. Viết chương trình nhập vào 4 số và tính tổng của chúng. Các dòng lệnh nào bị sai?\r
\r
\`\`\`python\r
a = int(input("Nhập số a"))\r
b = float(input("Nhập số b"))\r
c = int(input("Nhập số c"))\r
d = input("Nhập số d")\r
print("Tổng là: ", a + b + c + d)\r
\`\`\`\r
\r
A. Dòng 1, 2\r
B. Dòng 2, 4\r
C. Dòng 3, 5\r
D. Dòng 4\r
\r
Lời giải\r
Biến \`d\` được nhập bằng \`input()\` nhưng không ép kiểu nên sẽ là xâu.\r
Khi cộng \`a + b + c + d\`, chương trình sẽ lỗi vì không thể cộng số với xâu.\r
Theo đáp án tài liệu, dòng sai được xác định là dòng 4.\r
Chọn D\r
\r
Câu 15. Câu lệnh nào sau đây không báo lỗi?\r
\r
1. \`float(4)\`\r
2. \`int("1+7")\`\r
3. \`int("3.5")\`\r
4. \`float("1 + 2+5")\`\r
\r
A. 1\r
B. 2\r
C. 3\r
D. 4\r
\r
Lời giải\r
\r
- \`float(4)\` hợp lệ, cho kết quả \`4.0\`.\r
- \`int("1+7")\` sai vì chuỗi không phải một số nguyên hợp lệ.\r
- \`int("3.5")\` sai vì \`"3.5"\` là dạng số thực, không ép trực tiếp sang \`int()\` được theo cách này.\r
- \`float("1 + 2+5")\` sai vì đây không phải chuỗi biểu diễn một số thực hợp lệ.\r
  Chọn A\r
\r
## Bài 19: Câu lệnh điều kiện if\r
\r
Câu 3. Kết quả của đoạn chương trình sau là gì?\r
\r
\`\`\`python\r
x = 2021\r
print((x % 4 == 0 and x % 100 != 0) or (x % 400 == 0))\r
\`\`\`\r
\r
A. 55\r
B. \`True\`\r
C. 5\r
D. \`False\`\r
\r
Lời giải\r
Năm \`2021\` không chia hết cho \`4\`, nên điều kiện năm nhuận sai ngay từ đầu.\r
Vì vậy toàn bộ biểu thức logic có giá trị \`False\`.\r
Chọn D\r
\r
Câu 4. Cho \`x = True\`, \`y = False\`. Cho biết giá trị của biểu thức sau:\r
\r
\`\`\`python\r
not((x or y) and x)\r
\`\`\`\r
\r
A. \`True\`\r
B. \`False\`\r
C. \`x\`\r
D. \`1\`\r
\r
Lời giải\r
Ta có:\r
\r
- \`x or y = True or False = True\`\r
- \`(x or y) and x = True and True = True\`\r
- \`not(True) = False\`\r
  Vì vậy biểu thức nhận giá trị \`False\`.\r
  Chọn B\r
\r
Câu 6. Phát biểu nào sau đây bị sai khi nói về lệnh \`if\`?\r
A. Sau \`<điều kiện>\` cần có dấu \`:\`\r
B. Khối lệnh thụt vào không nhất thiết phải lùi vào 1 tab và thẳng hàng\r
C. Khi thực hiện lệnh, Python sẽ kiểm tra \`<điều kiện>\`, nếu đúng thì thực hiện \`<khối lệnh>\`, ngược lại thì bỏ qua khối lệnh và thực hiện lệnh tiếp theo\r
D. Tất cả phát biểu sai\r
\r
Lời giải\r
Trong Python, các dòng thuộc cùng một khối lệnh phải được thụt vào đều nhau và thẳng hàng.\r
Vì thế phát biểu B là sai.\r
Chọn B\r
\r
Câu 8. Biểu thức logic đúng thể hiện số \`a\` nằm ngoài đoạn \`[3,8]\` là:\r
A. \`a < 3 and a >= 8\`\r
B. \`3 <= a <= 8\`\r
C. \`a < 3 or a > 8\`
D. \`a <= 3 and a >= 8\`\r
\r
Lời giải\r
Về logic chuẩn, điều kiện “\`a\` nằm ngoài đoạn \`[3,8]\`” phải viết là:\r
\r
\`\`\`python\r
a < 3 or a > 8\r
\`\`\`\r
\r
Chọn C
\r
Câu 9. Biểu thức logic nào sau đây thể hiện số \`a\` thuộc nửa khoảng \`(5,7]\`?\r
A. \`5 < a <= 7\`\r
B. \`5 <= a <= 7\`\r
C. \`5 < a < 7\`\r
D. \`5 <= a < 7\`\r
\r
Lời giải\r
Nửa khoảng \`(5,7]\` nghĩa là lớn hơn \`5\` nhưng nhỏ hơn hoặc bằng \`7\`.\r
Do đó biểu thức đúng là:\r
\r
\`\`\`python\r
5 < a <= 7\r
\`\`\`\r
\r
Chọn A\r
\r
Câu 10. Kết quả của chương trình sau là gì?\r
\r
\`\`\`python\r
x = 5\r
y = 6\r
if x > y:\r
    print('Max:', x)\r
else:\r
    print('Max: ', y)\r
\`\`\`\r
\r
A. \`Max:5\`\r
B. \`Max:6\`\r
C. \`Max: 5\`\r
D. \`Max: 6\`\r
\r
Lời giải\r
Vì \`5 > 6\` là sai nên chương trình đi vào nhánh \`else\`.\r
Kết quả in ra là:\r
\r
\`\`\`python\r
Max: 6\r
\`\`\`\r
\r
Chọn D\r
\r
Câu 11. Kết quả của chương trình sau là gì?\r
\r
\`\`\`python\r
x = 8\r
y = 9\r
if x > y:\r
    print('x lớn hơn y')\r
elif x == y:\r
    print('x bằng y')\r
else:\r
    print('x nhỏ hơn y')\r
\`\`\`\r
\r
A. \`x lớn hơn y\`\r
B. \`x bằng y\`\r
C. \`x nhỏ hơn y\`\r
D. Chương trình bị lỗi\r
\r
Lời giải\r
Ta có \`8 > 9\` là sai và \`8 == 9\` cũng sai.\r
Vì vậy chương trình thực hiện nhánh \`else\` và in:\r
\r
\`\`\`python\r
x nhỏ hơn y\r
\`\`\`\r
\r
Chọn C\r
\r
Câu 12. Kết quả của chương trình sau là gì?\r
\r
\`\`\`python\r
num = 3\r
\r
if num > 0:\r
    print(num)\r
print("Thông điệp này luôn được in.")\r
\r
num = -1\r
if num > 0:\r
    print(num)\r
print("Thông điệp này cũng luôn được in.")\r
\`\`\`\r
\r
A.\r
\r
\`\`\`text\r
3\r
Thông điệp này luôn được in.\r
Thông điệp này cũng luôn được in.\r
\`\`\`\r
\r
B.\r
\r
\`\`\`text\r
Thông điệp này luôn được in.\r
-1\r
Thông điệp này cũng luôn được in.\r
\`\`\`\r
\r
C.\r
\r
\`\`\`text\r
3\r
-1\r
Thông điệp này luôn được in.\r
\`\`\`\r
\r
D.\r
\r
\`\`\`text\r
Thông điệp này luôn được in.\r
-1\r
Thông điệp này luôn được in.\r
\`\`\`\r
\r
Lời giải\r
Lần đầu \`num = 3\` nên điều kiện \`num > 0\` đúng, chương trình in \`3\`.\r
Sau đó câu lệnh \`print("Thông điệp này luôn được in.")\` nằm ngoài \`if\`, nên luôn được in.\r
Khi \`num = -1\`, điều kiện \`num > 0\` sai nên không in \`-1\`, nhưng câu lệnh cuối vẫn được in.\r
Chọn A\r
\r
Câu 13. Năm nhuận là năm chia hết cho \`400\` hoặc \`n\` chia hết cho \`4\` đồng thời không chia hết cho \`100\`. Biểu thức biểu diễn kiểm tra năm nhuận là:\r
A. \`n % 400 == 0 or (n % 4 == 0 and n % 100 != 0)\`
B. \`n % 400 == 0 or (n % 4 == 0 and n % 100 == 0)\`
C. \`n % 400 != 0 or (n % 4 == 0 and n % 100 != 0)\`
D. \`n % 400 == 0 or (n % 4 != 0 and n % 100 != 0)\`
\r
Lời giải\r
Theo quy tắc chuẩn, điều kiện kiểm tra năm nhuận phải là:\r
\r
\`\`\`python\r
n % 400 == 0 or (n % 4 == 0 and n % 100 != 0)\r
\`\`\`\r
\r
Chọn A
\r
Câu 14. Kết quả của lệnh \`print(round(4.5679,2))\` là:\r
A. \`4.5\`\r
B. \`4.6\`\r
C. \`4.56\`\r
D. \`4.57\`\r
\r
Lời giải\r
Hàm \`round(4.5679, 2)\` làm tròn số đến 2 chữ số thập phân.\r
Chữ số thứ ba sau dấu phẩy là \`7\` nên \`4.56\` được làm tròn thành \`4.57\`.\r
Chọn D\r
\r
Câu 15. Kết quả của biểu thức \`round(-1.232154, 4)\` là:\r
A. \`-1.2321\`\r
B. \`-1.2322\`\r
\r
Lời giải\r
Làm tròn đến 4 chữ số sau dấu phẩy:\r
\r
- Số đang xét là \`-1.232154\`\r
- Chữ số thứ 5 sau dấu phẩy là \`5\` nên chữ số thứ 4 tăng lên 1\r
  Vì vậy kết quả là:\r
\r
\`\`\`python\r
-1.2322\r
\`\`\`\r
\r
Chọn B\r
\r
## Bài 20: Câu lệnh lặp For\r
\r
Câu 1. Số công việc cần phải lặp với số lần xác định?\r
\r
1. Đếm số học sinh của lớp.\r
2. Đếm số chia hết cho 5 trong đoạn từ 10 tới 100.\r
3. Đọc tên lần lượt từng học sinh của một lớp có 30 em.\r
4. Chạy 5 vòng sân bóng.\r
5. Tính tổng các số có 2 chữ số.\r
\r
A. 3.\r
B. 4.\r
C. 5.\r
D. 2.\r
\r
Lời giải\r
Các công việc lặp với số lần xác định là những công việc mà ngay từ đầu ta biết chắc số lần thực hiện.\r
\r
- (2) duyệt từ 10 đến 100 là số lần xác định.\r
- (3) lớp có 30 em nên số lần đọc tên là xác định.\r
- (4) chạy 5 vòng là xác định.\r
- (5) các số có 2 chữ số là từ 10 đến 99, cũng là số lần xác định.\r
\r
Công việc (1) không cho biết rõ lớp có bao nhiêu học sinh nên không xem là xác định ngay trong đề.\r
Chọn B\r
\r
Câu 2. Biến chạy trong vòng lặp \`for i in range(<giá trị cuối>)\` tăng lên mấy đơn vị sau mỗi lần lặp?\r
A. 1.\r
B. 2.\r
C. 0.\r
D. Tất cả đều sai.\r
\r
Lời giải\r
Trong Python, nếu dùng dạng:\r
\r
\`\`\`python\r
for i in range(n):\r
\`\`\`\r
\r
thì biến \`i\` sẽ tăng mặc định mỗi lần là \`1\`.\r
Chọn A\r
\r
Câu 3. Cho các câu lệnh sau, hãy chỉ ra câu lệnh đúng:\r
A.\r
\r
\`\`\`python\r
x = 0\r
for i in range(10): x = x + 1\r
\`\`\`\r
\r
B.\r
\r
\`\`\`python\r
x = 0\r
for i in range(10): x:= x + 1\r
\`\`\`\r
\r
C.\r
\r
\`\`\`python\r
x = 0\r
for i in range(10) x = x + 1\r
\`\`\`\r
\r
D.\r
\r
\`\`\`python\r
x:= 0\r
for i in range(10): x = x + 1\r
\`\`\`\r
\r
Lời giải\r
Câu lệnh đúng cú pháp phải dùng:\r
\r
- phép gán là \`=\`\r
- vòng lặp \`for\` phải có dấu \`:\`\r
\r
Phương án A đúng cú pháp Python.\r
Các phương án còn lại sai do dùng \`:=\` không đúng chỗ hoặc thiếu dấu \`:\`.\r
Chọn A\r
\r
Câu 4. Trong Python, câu lệnh nào dưới đây được viết đúng?\r
A. \`for i in range(10): prin("A").\`\r
B. \`for i in range(10): print("A").\`\r
C. \`for i in range(10): print(A).\`\r
D. \`for i in range(10) print("A").\`\r
\r
Lời giải\r
Phương án B đúng vì:\r
\r
- có từ khóa \`for\`\r
- có \`range(10)\`\r
- có dấu \`:\`\r
- dùng đúng hàm \`print("A")\`\r
\r
A sai vì viết \`prin\`, C sai vì \`A\` không đặt trong dấu nháy, D sai vì thiếu dấu \`:\`.\r
Chọn B\r
\r
Câu 5. Trong câu lệnh lặp:\r
\r
\`\`\`python\r
j = 0\r
for j in range(10):\r
    j = j + 2\r
print(j)\r
\`\`\`\r
\r
Khi kết thúc câu lệnh trên, câu lệnh \`print(j)\` được thực hiện bao nhiêu lần?\r
A. 10 lần.\r
B. 1 lần.\r
C. 5 lần.\r
D. Không thực hiện.\r
\r
Lời giải\r
Lệnh \`print(j)\` không nằm trong khối lặp \`for\`, nên nó chỉ được thực hiện sau khi vòng lặp kết thúc.\r
Vì vậy nó chỉ chạy đúng 1 lần.\r
Chọn B\r
\r
Câu 6. Trong câu lệnh lặp:\r
\r
\`\`\`python\r
j = 0\r
for j in range(10):\r
    print("A")\r
\`\`\`\r
\r
Khi kết thúc lệnh trên có bao nhiêu chữ “A” xuất hiện?\r
A. 10 lần.\r
B. 1 lần.\r
C. 5 lần.\r
D. Không thực hiện.\r
\r
Lời giải\r
\`range(10)\` tạo ra 10 giá trị: \`0, 1, 2, ..., 9\`.\r
Mỗi lần lặp in ra một chữ \`"A"\`, nên tổng cộng in ra 10 lần.\r
Chọn A\r
\r
Câu 7. Cho đoạn chương trình:\r
\r
\`\`\`python\r
j = 0\r
for i in range(5):\r
    j = j + i\r
print(j)\r
\`\`\`\r
\r
Sau khi thực hiện chương trình giá trị của biến \`j\` bằng bao nhiêu?\r
A. 10.\r
B. 12.\r
C. 15.\r
D. 14.\r
\r
Lời giải\r
\`range(5)\` cho các giá trị \`0, 1, 2, 3, 4\`.\r
\r
Khi đó:\r
\r
- ban đầu \`j = 0\`\r
- cộng thêm \`0\` → \`j = 0\`\r
- cộng thêm \`1\` → \`j = 1\`\r
- cộng thêm \`2\` → \`j = 3\`\r
- cộng thêm \`3\` → \`j = 6\`\r
- cộng thêm \`4\` → \`j = 10\`\r
\r
Vậy giá trị cuối cùng của \`j\` là \`10\`.\r
Chọn A\r
\r
Câu 8. Xác định số vòng lặp cho bài toán: tính tổng các số nguyên từ 1 đến 100?\r
A. 1.\r
B. 100.\r
C. 99.\r
D. Tất cả đều sai.\r
\r
Lời giải\r
Muốn cộng các số nguyên từ \`1\` đến \`100\`, ta phải duyệt qua đúng 100 số.\r
Vì vậy số vòng lặp là \`100\`.\r
Chọn B\r
\r
Câu 9. Đoạn chương trình sau giải bài toán nào?\r
\r
\`\`\`python\r
t = 0\r
for i in range(1, 101):\r
    if (i % 3 == 0 and i % 5 == 0):\r
        t = t + i\r
print(t)\r
\`\`\`\r
\r
A. Tính tổng các số chia hết cho 3 hoặc 5 trong phạm vi từ 1 đến 100.\r
B. Tính tổng các số chia hết cho 3 hoặc 5 trong phạm vi từ 1 đến 101.\r
C. Tính tổng các số chia hết cho 3 và 5 trong phạm vi từ 1 đến 101.\r
D. Tính tổng các số chia hết cho 3 và 5 trong phạm vi từ 1 đến 100.\r
\r
Lời giải\r
\`range(1, 101)\` duyệt các số từ \`1\` đến \`100\`.\r
Điều kiện:\r
\r
\`\`\`python\r
i % 3 == 0 and i % 5 == 0\r
\`\`\`\r
\r
nghĩa là số đó phải chia hết đồng thời cho cả 3 và 5.\r
Vì vậy chương trình tính tổng các số chia hết cho 3 và 5 trong đoạn từ 1 đến 100.\r
Chọn D\r
\r
Câu 10. Cho biết kết quả khi chạy đoạn chương trình sau:\r
\r
\`\`\`python\r
s = 0\r
for i in range(3):\r
    s = s + 2*i\r
print(s)\r
\`\`\`\r
\r
A. 12.\r
B. 10.\r
C. 8.\r
D. 6.\r
\r
Lời giải\r
\`range(3)\` cho các giá trị \`0, 1, 2\`.\r
\r
Ta tính:\r
\r
- \`i = 0\` → \`s = 0 + 2*0 = 0\`\r
- \`i = 1\` → \`s = 0 + 2*1 = 2\`\r
- \`i = 2\` → \`s = 2 + 2*2 = 6\`\r
\r
Kết quả cuối cùng là \`6\`.\r
Chọn D\r
\r
Câu 11. Bạn An thực hiện đoạn chương trình sau nhưng chương trình báo lỗi. Theo em, bạn An sai ở dòng thứ mấy?\r
\r
\`\`\`python\r
numbers = [6, 5, 3, 8, 4, 2, 5, 4, 11]\r
sum == 0\r
## iterate over the list\r
for val in numbers:\r
    sum = sum + val\r
print("The sum is", sum)\r
\`\`\`\r
\r
A. 4.\r
B. 3.\r
C. 2.\r
D. 5.\r
\r
Lời giải\r
Dòng 2 viết:\r
\r
\`\`\`python\r
sum == 0\r
\`\`\`\r
\r
Đây là phép so sánh, không phải phép gán.\r
Muốn khởi tạo biến phải viết:\r
\r
\`\`\`python\r
sum = 0\r
\`\`\`\r
\r
Vì vậy lỗi nằm ở dòng 2.\r
Chọn C\r
\r
Câu 12. Đoạn chương trình sau có lỗi tại một dòng lệnh. Theo em, đó là lỗi ở câu lệnh nào?\r
\r
\`\`\`python\r
# program to display student's marks from record\r
student_name = 'Soyuj'\r
marks = {'James': 90, 'Jules': 55, 'Arthur': 77}\r
\r
for student in marks:\r
    if student == student_name:\r
        print(marks(student))\r
        break\r
else:\r
    print('No entry with that name found.')\r
\`\`\`\r
\r
A. Sai kí hiệu chú thích.\r
B. Sai khi khai báo danh sách.\r
C. Sai khi gọi tới phần tử của danh sách.\r
D. Không có lỗi sai nào của câu lệnh nào.\r
\r
Lời giải\r
Lỗi nằm ở câu lệnh:\r
\r
\`\`\`python\r
print(marks(student))\r
\`\`\`\r
\r
Biến \`marks\` là một từ điển, muốn lấy giá trị theo khóa phải dùng ngoặc vuông:\r
\r
\`\`\`python\r
print(marks[student])\r
\`\`\`\r
\r
Theo đáp án trong tài liệu, lỗi được mô tả là sai khi gọi tới phần tử của danh sách.\r
Chọn C\r
\r
Câu 13. Trong Python, đoạn chương trình sau đưa ra kết quả gì?\r
\r
\`\`\`python\r
for i in range(10, 0, -1):\r
    print(i, ' ')\r
\`\`\`\r
\r
A. \`10, 9, 8, 7, 6, 5, 4, 3, 2, 1.\`\r
B. Đưa ra 10 dấu cách.\r
C. \`1 2 3 4 5 6 7 8 9 10.\`\r
D. Không đưa ra kết quả gì.\r
\r
Lời giải\r
\`range(10, 0, -1)\` tạo dãy:\r
\r
\`\`\`python\r
10, 9, 8, 7, 6, 5, 4, 3, 2, 1\r
\`\`\`\r
\r
nên chương trình in ra các số giảm dần từ 10 về 1.\r
Chọn A\r
\r
Câu 14. Lệnh nào in ra màn hình các giá trị sau?\r
\r
\`\`\`text\r
11111\r
22222\r
33333\r
44444\r
55555\r
\`\`\`\r
\r
A. \`for i in range(1, 6): print(i, i, i, i, i).\`\r
B. \`for i in range(1, 6): print(str(i)*5).\`\r
C. \`for i in range(1, 5): print(str(i)*5).\`\r
D. \`for i in range(0, 5): print(str(i)*5).\`\r
\r
Lời giải\r
Muốn in \`11111\`, \`22222\`, ... ta cần:\r
\r
- chuyển \`i\` sang xâu bằng \`str(i)\`\r
- nhân chuỗi đó với \`5\`\r
\r
Lệnh đúng là:\r
\r
\`\`\`python\r
for i in range(1, 6):\r
    print(str(i)*5)\r
\`\`\`\r
\r
Chọn B\r
\r
Câu 15. Điền phần còn thiếu \`...\` trong đoạn code sau để được kết quả dưới đây?\r
\r
\`\`\`text\r
55555\r
44444\r
33333\r
22222\r
11111\r
\`\`\`\r
\r
\`\`\`python\r
for i in range(5, 0, ...):\r
    print(str(i)*5)\r
\`\`\`\r
\r
A. \`-1\`\r
B. \`0\`\r
C. \`None\`\r
D. \`1\`\r
\r
Lời giải\r
Muốn đếm lùi từ \`5\` về \`1\` thì bước nhảy phải là \`-1\`.\r
Vì vậy câu lệnh đúng là:\r
\r
\`\`\`python\r
for i in range(5, 0, -1):\r
    print(str(i)*5)\r
\`\`\`\r
\r
Chọn A\r
\r
## Bài 21: Câu lệnh lặp while\r
\r
Câu 1. Trong các phát biểu sau, phát biểu nào chưa chính xác?\r
A. While là lệnh lặp với số lần không biết trước.\r
B. For là lệnh lặp với số lần xác định trước.\r
C. Khối lệnh lặp while được thực hiện cho đến khi \`<điều kiện> = False\`.\r
D. Số lần lặp của lệnh lặp for luôn được xác định bởi vùng giá trị của lệnh \`range()\`.\r
\r
Lời giải\r
A, B, C là các nhận xét đúng trong phạm vi kiến thức cơ bản.\r
Phát biểu D chưa chính xác vì vòng lặp \`for\` trong Python không chỉ dùng với \`range()\`, mà còn có thể lặp trên list, string, tuple, dictionary,...\r
Chọn D\r
\r
Câu 2. Cho đoạn chương trình Python sau:\r
\r
\`\`\`python\r
Tong = 0\r
\r
while Tong < 10:\r
    Tong = Tong + 1\r
\`\`\`\r
\r
Sau khi đoạn chương trình trên được thực hiện, giá trị của tổng bằng bao nhiêu?\r
A. 9.\r
B. 10.\r
C. 11.\r
D. 12.\r
\r
Lời giải\r
Biến \`Tong\` bắt đầu bằng \`0\`.\r
Mỗi lần lặp tăng thêm \`1\` cho đến khi \`Tong < 10\` không còn đúng nữa.\r
Giá trị cuối cùng là \`10\`.\r
Chọn B\r
\r
Câu 3. Cho biết kết quả của đoạn chương trình dưới đây:\r
\r
\`\`\`python\r
a = 10\r
while a < 11:\r
    print(a)\r
\`\`\`\r
\r
A. Trên màn hình xuất hiện một số 10.\r
B. Trên màn hình xuất hiện 10 chữ a.\r
C. Trên màn hình xuất hiện một số 11.\r
D. Chương trình bị lặp vô tận.\r
\r
Lời giải\r
Điều kiện \`a < 11\` luôn đúng vì \`a = 10\` và trong thân vòng lặp không có lệnh nào làm thay đổi \`a\`.\r
Do đó chương trình sẽ in mãi số \`10\` và rơi vào lặp vô tận.\r
Chọn D\r
\r
Câu 4. Câu lệnh sau giải bài toán nào?\r
\r
\`\`\`python\r
while M != N:\r
    if M > N:\r
        M = M - N\r
    else:\r
        N = N - M\r
\`\`\`\r
\r
A. Tìm UCLN của M và N.\r
B. Tìm BCNN của M và N.\r
C. Tìm hiệu nhỏ nhất của M và N.\r
D. Tìm hiệu lớn nhất của M và N.\r
\r
Lời giải\r
Đây là thuật toán Euclid bằng phép trừ liên tiếp.\r
Khi hai số trở nên bằng nhau thì giá trị đó chính là **ước chung lớn nhất** của hai số ban đầu.\r
Chọn A\r
\r
Câu 5. Tính tổng \`S = 1 + 2 + 3 + 4 + ... + n + ...\` cho đến khi \`S > 10000\`. Điều kiện nào sau đây cho vòng lặp while là đúng?\r
A. \`while S >= 10000.\`\r
B. \`while S < 10000.\`\r
C. \`while S <= 10000.\`\r
D. \`while S > 10000.\`\r
\r
Lời giải\r
Ta cần lặp cho tới khi tổng vượt quá \`10000\`.\r
Nghĩa là khi tổng còn **chưa vượt quá** 10000 thì vẫn tiếp tục cộng, nên điều kiện phù hợp là:\r
\r
\`\`\`python\r
while S <= 10000:\r
\`\`\`\r
\r
Chọn C\r
\r
Câu 6. Hãy đưa ra kết quả trong đoạn lệnh sau:\r
\r
\`\`\`python\r
x = 1\r
while (x <= 5):\r
    print("python")\r
    x = x + 1\r
\`\`\`\r
\r
A. 5 từ python.\r
B. 4 từ python.\r
C. 3 từ python.\r
D. Không có kết quả.\r
\r
Lời giải\r
Biến \`x\` nhận các giá trị \`1, 2, 3, 4, 5\`.\r
Mỗi lần lặp in ra một từ \`"python"\`.\r
Vì vậy có 5 từ \`"python"\` được in ra.\r
Chọn A\r
\r
Câu 7. Cho đoạn chương trình sau:\r
\r
\`\`\`python\r
n = int(input("Nhập n<=1000: "))\r
k = 0\r
n = abs(n)\r
while n != 0:\r
    n = n//10\r
    k = k + 1\r
print(k)\r
\`\`\`\r
\r
Hãy cho biết điều khẳng định nào sau đây đúng?\r
A. \`k\` là số chữ số có nghĩa của \`n\`.\r
B. \`k\` là chữ số hàng đơn vị của \`n\`.\r
C. \`k\` là chữ số khác 0 lớn nhất của \`n\`.\r
D. \`k\` là số chữ số khác 0 của \`n\`.\r
\r
Lời giải\r
Mỗi lần lặp, chương trình chia \`n\` cho \`10\` lấy phần nguyên:\r
\r
\`\`\`python\r
n = n // 10\r
\`\`\`\r
\r
Nghĩa là mỗi lần bỏ đi một chữ số ở cuối.\r
Biến \`k\` tăng lên 1 sau mỗi lần bỏ một chữ số, nên \`k\` chính là số chữ số của \`n\`.\r
Chọn A\r
\r
Câu 8. Chọn đáp án đúng nhất:\r
\r
\`\`\`python\r
i = 0\r
x = 0\r
while i < 10:\r
    if i % 2 == 0:\r
        x += 1\r
    i += 1\r
print(x)\r
\`\`\`\r
\r
A. 2.\r
B. 3.\r
C. 4.\r
D. 5.\r
\r
Lời giải\r
Vòng lặp xét \`i\` từ \`0\` đến \`9\`.\r
Các số chẵn trong đoạn này là:\r
\r
\`\`\`text\r
0, 2, 4, 6, 8\r
\`\`\`\r
\r
có 5 số, nên \`x = 5\`.\r
Chọn D\r
\r
Câu 9. Trong các phát biểu sau, phát biểu nào sai?\r
A. Có ba cấu trúc lập trình cơ bản của các ngôn ngữ lập trình.\r
B. Cấu trúc tuần tự gồm các khối lệnh được thực hiện theo trình tự từ trên xuống dưới.\r
C. Khối lệnh chỉ được thực hiện tùy thuộc điều kiện nào đó được thể hiện bằng các lệnh \`for\`, \`while\`.\r
D. Cả ba phương án trên đều đúng.\r
\r
Lời giải\r
Phát biểu C sai vì khối lệnh thực hiện phụ thuộc điều kiện thuộc **cấu trúc rẽ nhánh**, thường dùng với \`if\`, \`elif\`, \`else\`, không phải \`for\`, \`while\`.\r
Chọn C\r
\r
Câu 10. Vòng lặp while - do kết thúc khi nào?\r
A. Khi một số điều kiện cho trước thỏa mãn.\r
B. Khi đủ số vòng lặp.\r
C. Khi tìm được output.\r
D. Tất cả các phương án.\r
\r
Lời giải\r
Theo tài liệu, vòng lặp kiểu \`while - do\` kết thúc khi điều kiện dừng đã được thỏa mãn.\r
Trong cách diễn đạt của đề, đáp án đúng là A.\r
Chọn A\r
\r
Câu 11. Mọi quá trình tính toán đều có thể mô tả và thực hiện dựa trên cấu trúc cơ bản là:\r
A. Cấu trúc tuần tự.\r
B. Cấu trúc rẽ nhánh.\r
C. Cấu trúc lặp.\r
D. Cả ba cấu trúc.\r
\r
Lời giải\r
Ba cấu trúc lập trình cơ bản là:\r
\r
- tuần tự\r
- rẽ nhánh\r
- lặp\r
\r
Mọi thuật toán đều được xây dựng từ ba cấu trúc này.\r
Chọn D\r
\r
Câu 12. Hoạt động nào sau đây lặp với số lần lặp chưa biết trước?\r
A. Ngày tắm hai lần.\r
B. Học bài cho tới khi thuộc bài.\r
C. Mỗi tuần đi nhà sách một lần.\r
D. Ngày đánh răng hai lần.\r
\r
Lời giải\r
Các hoạt động A, C, D đều có số lần xác định trước.\r
Riêng “học bài cho tới khi thuộc bài” không biết trước sẽ cần bao nhiêu lần lặp.\r
Chọn B\r
\r
Câu 13. Cú pháp lệnh lặp với số lần chưa biết trước:\r
A. \`while <điều kiện> to <câu lệnh>.\`\r
B. \`while <điều kiện> to <câu lệnh1> do <câu lệnh2>.\`\r
C. \`while <điều kiện> do: <câu lệnh>.\`\r
D. \`while <điều kiện>: <câu lệnh>.\`\r
\r
Lời giải\r
Trong Python, cú pháp cơ bản là:\r
\r
\`\`\`python\r
while <điều kiện>:\r
    <câu lệnh>\r
\`\`\`\r
\r
Vì vậy đáp án đúng là D.\r
Chọn D\r
\r
Câu 14. Kết quả của chương trình sau:\r
\r
\`\`\`python\r
x = 1\r
y = 5\r
while x < y:\r
    print(x, end = " ")\r
    x = x + 1\r
\`\`\`\r
\r
A. \`1 2 3 4.\`\r
B. \`2 3 4 5.\`\r
C. \`1 2 3 4 5.\`\r
D. \`2 3 4.\`\r
\r
Lời giải\r
Biến \`x\` bắt đầu từ \`1\`, in ra rồi tăng dần cho đến khi \`x < 5\` không còn đúng.\r
Các giá trị được in là:\r
\r
\`\`\`text\r
1 2 3 4\r
\`\`\`\r
\r
Chọn A\r
\r
Câu 15. Kết quả của chương trình sau là gì?\r
\r
\`\`\`python\r
x = 8\r
y = 2\r
while y < x:\r
    x = x - 2\r
    print(x, end = " ")\r
\`\`\`\r
\r
A. \`8, 6, 4, 2.\`\r
B. \`8, 6, 4.\`\r
C. \`6, 4, 2.\`\r
D. \`8, 6, 4, 2, 0.\`\r
\r
Lời giải\r
Ban đầu \`x = 8\`, \`y = 2\`.\r
\r
Mỗi vòng lặp:\r
\r
- \`x = 8\` → giảm còn \`6\`, in \`6\`\r
- \`x = 6\` → giảm còn \`4\`, in \`4\`\r
- \`x = 4\` → giảm còn \`2\`, in \`2\`\r
\r
Lúc này \`y < x\` trở thành \`2 < 2\`, sai nên dừng.\r
Kết quả là:\r
\r
\`\`\`text\r
6 4 2\r
\`\`\`\r
\r
Chọn C\r
\r
## Bài 22: Kiểu dữ liệu danh sách\r
\r
Câu 1. Đoạn lệnh sau làm nhiệm vụ gì?\r
\r
\`\`\`python\r
A = []\r
for x in range(10):\r
    A.append(int(input()))\r
\`\`\`\r
\r
A. Nhập dữ liệu từ bàn phím cho mảng A có 10 phần tử là số nguyên.\r
B. Nhập dữ liệu từ bàn phím cho mảng A có 10 phần tử là số thực.\r
C. Nhập dữ liệu từ bàn phím cho mảng A có 10 phần tử là xâu.\r
D. Không có đáp án đúng.\r
\r
Lời giải\r
Vòng lặp chạy 10 lần, mỗi lần:\r
\r
- nhập một giá trị từ bàn phím bằng \`input()\`\r
- ép sang kiểu số nguyên bằng \`int(...)\`\r
- thêm vào danh sách \`A\` bằng \`append()\`\r
\r
Vì vậy chương trình nhập 10 số nguyên vào danh sách \`A\`.\r
Chọn A\r
\r
Câu 2. Chọn phát biểu đúng khi nói về dữ liệu kiểu mảng (List) trong Python.\r
A. Dữ liệu kiểu mảng là tập hợp các phần tử không có thứ tự và mọi phần tử có cùng một kiểu dữ liệu.\r
B. Dữ liệu kiểu mảng là tập hợp các phần tử có thứ tự và mỗi một phần tử trong mảng có thể có các kiểu dữ liệu khác nhau.\r
C. Dữ liệu kiểu mảng là tập hợp các phần tử có thứ tự và mọi phần tử phải có cùng một kiểu dữ liệu.\r
D. Tất cả ý trên đều sai.\r
\r
Lời giải\r
Trong Python, \`list\`:\r
\r
- là tập hợp có thứ tự\r
- truy cập được theo chỉ số\r
- các phần tử có thể khác kiểu dữ liệu\r
\r
Vì vậy phát biểu đúng là B.\r
Chọn B\r
\r
Câu 3. Cách khai báo biến mảng sau đây, cách nào sai?\r
A. \`ls = [1, 2, 3]\`\r
B. \`ls = [x for x in range(3)]\`\r
C. \`ls = [int(x) for x in input().split()]\`\r
D. \`ls = list(3)\`\r
\r
Lời giải\r
Ba cách A, B, C đều hợp lệ.\r
Riêng \`list(3)\` sai vì hàm \`list()\` cần một đối tượng có thể duyệt được, còn \`3\` là số nguyên nên không duyệt được.\r
Chọn D\r
\r
Câu 4. Cho khai báo mảng sau:\r
\r
\`\`\`python\r
A = list("3456789")\r
\`\`\`\r
\r
Để in giá trị phần tử thứ 2 của mảng một chiều A ra màn hình ta viết:\r
A. \`print(A[2]).\`\r
B. \`print(A[1]).\`\r
C. \`print(A[3]).\`\r
D. \`print(A[0]).\`\r
\r
Lời giải\r
Danh sách trong Python đánh số chỉ số từ \`0\`.\r
\r
Với:\r
\r
\`\`\`python\r
A = ['3', '4', '5', '6', '7', '8', '9']\r
\`\`\`\r
\r
- phần tử thứ 1 là \`A[0]\`\r
- phần tử thứ 2 là \`A[1]\`\r
\r
Do đó phải dùng \`print(A[1])\`.\r
Chọn B\r
\r
Câu 5. Giả sử có một list: \`i = [2, 3, 4]\`. Nếu muốn in list này theo thứ tự ngược lại ta nên sử dụng phương pháp nào sau đây?\r
A. \`print(list(reversed(i))).\`\r
B. \`print(list(reverse(i))).\`\r
C. \`print(reversed(i)).\`\r
D. \`print(reverse(i)).\`\r
\r
Lời giải\r
Hàm \`reversed(i)\` trả về một đối tượng đảo ngược, muốn in rõ thành danh sách thì nên bọc bởi \`list(...)\`:\r
\r
\`\`\`python\r
print(list(reversed(i)))\r
\`\`\`\r
\r
Vì vậy đáp án đúng là A.\r
Chọn A\r
\r
Câu 6. Chương trình sau thực hiện công việc gì?\r
\r
\`\`\`python\r
A = []\r
for i in range(1, 1001):\r
    if (i % 7 == 0) and (i % 5 != 0):\r
        A.append(str(i))\r
print(','.join(A))\r
\`\`\`\r
\r
A. Tìm tất cả các số chia hết cho 7 nhưng không phải bội số của 5, nằm trong đoạn 1 và 1000.\r
B. Tìm tất cả các số chia hết cho 7 nhưng không phải bội số của 5, nằm trong đoạn 1 và 1000 và thu được trên một dòng, có dấu “,” ngăn cách giữa các số.\r
C. Tìm tất cả các số chia hết cho 7 và là bội số của 5, nằm trong đoạn 1 và 1000.\r
D. Tìm tất cả các số không chia hết cho 7 nhưng lại phải bội số của 5, nằm trong đoạn 1 và 1000.\r
\r
Lời giải\r
Chương trình:\r
\r
- duyệt các số từ \`1\` đến \`1000\`\r
- chọn các số chia hết cho \`7\`\r
- đồng thời không chia hết cho \`5\`\r
- chuyển sang chuỗi bằng \`str(i)\`\r
- ghép các phần tử bằng dấu phẩy với \`','.join(A)\`\r
\r
Vì vậy kết quả là in ra trên một dòng các số thỏa điều kiện, ngăn cách nhau bởi dấu phẩy.\r
Chọn B\r
\r
Câu 7. Dữ liệu dưới đây thuộc kiểu dữ liệu nào?\r
\r
\`\`\`python\r
A = [1, 2, '3']\r
\`\`\`\r
\r
A. \`list\`.\r
B. \`int\`.\r
C. \`float\`.\r
D. \`string\`.\r
\r
Lời giải\r
Dữ liệu được đặt trong dấu \`[]\`, nên đó là một danh sách \`list\`.\r
Danh sách này chứa các phần tử \`1\`, \`2\` và \`'3'\`.\r
Chọn A\r
\r
Câu 8. Phương thức nào sau đây dùng để thêm phần tử vào list trong Python?\r
A. \`abs().\`\r
B. \`link().\`\r
C. \`append().\`\r
D. \`add().\`\r
\r
Lời giải\r
Trong Python, để thêm một phần tử vào cuối danh sách, ta dùng phương thức:\r
\r
\`\`\`python\r
append()\r
\`\`\`\r
\r
Chọn C\r
\r
Câu 9. Danh sách A sẽ như thế nào sau các lệnh sau?\r
\r
\`\`\`python\r
>>> A = [2, 3, 5, 6]\r
>>> A.append(4)\r
>>> del (A[2])\r
\`\`\`\r
\r
A. \`2, 3, 4, 5, 6, 4.\`\r
B. \`2, 3, 4, 5, 6.\`\r
C. \`2, 4, 5, 6.\`\r
D. \`2, 3, 6, 4.\`\r
\r
Lời giải\r
Ban đầu:\r
\r
\`\`\`python\r
A = [2, 3, 5, 6]\r
\`\`\`\r
\r
Sau \`A.append(4)\`:\r
\r
\`\`\`python\r
A = [2, 3, 5, 6, 4]\r
\`\`\`\r
\r
Sau \`del(A[2])\`, xóa phần tử ở chỉ số \`2\`, tức là số \`5\`:\r
\r
\`\`\`python\r
A = [2, 3, 6, 4]\r
\`\`\`\r
\r
Chọn D\r
\r
Câu 11. Cho \`arr = ['xuan', 'ha', 1.4, 'dong', '3', 4.5, 7]\`. Đâu là giá trị của \`arr[3]\`?
A. \`1.4\`.\r
B. \`dong\`.\r
C. \`ha\`.\r
D. \`3\`.\r
\r
Lời giải\r
Trong Python, chỉ số của danh sách bắt đầu từ \`0\`.\r
\r
Ta có:\r
\r
- \`arr[0] = 'xuan'\`\r
- \`arr[1] = 'ha'\`\r
- \`arr[2] = 1.4\`\r
- \`arr[3] = 'dong'\`\r
\r
Vì vậy giá trị của \`arr[3]\` là \`"dong"\`.\r
Chọn B\r
\r
Câu 12. Lệnh nào để duyệt từng phần tử của danh sách?\r
A. \`for\`.\r
B. \`while - for\`.\r
C. \`for\` kết hợp với lệnh \`range()\`.\r
D. \`while\` kết hợp với lệnh \`range()\`.\r
\r
Lời giải\r
Theo nội dung bài học và đáp án trong tài liệu, cách được dùng để duyệt lần lượt các phần tử của danh sách là dùng \`for\` kết hợp với \`range()\`.\r
\r
Ví dụ:\r
\r
\`\`\`python\r
for i in range(len(A)):\r
    print(A[i])\r
\`\`\`\r
\r
Chọn C\r
\r
Câu 13. Lệnh xoá một phần tử của một danh sách \`A\` có chỉ số \`i\` là:\r
A. \`list.del(i)\`.\r
B. \`A.del(i)\`.\r
C. \`del A[i]\`.\r
D. \`A.del[i]\`.\r
\r
Lời giải\r
Trong Python, để xoá phần tử ở vị trí chỉ số \`i\` của danh sách \`A\`, ta dùng câu lệnh:\r
\r
\`\`\`python\r
del A[i]\r
\`\`\`\r
\r
Các cách viết còn lại không đúng cú pháp Python.\r
Chọn C\r
\r
Câu 14. Chương trình sau thực hiện công việc gì?\r
\r
\`\`\`python\r
S = 0\r
for i in range(len(A)):\r
    if A[i] > 0:\r
        S = S + A[i]\r
print(S)\r
\`\`\`\r
\r
A. Duyệt từng phần tử trong \`A\`.\r
B. Tính tổng các phần tử trong \`A\`.\r
C. Tính tổng các phần tử không âm trong \`A\`.\r
D. Tính tổng các phần tử dương trong \`A\`.\r
\r
Lời giải\r
Chương trình duyệt qua từng phần tử của danh sách \`A\`.\r
Điều kiện:\r
\r
\`\`\`python\r
if A[i] > 0:\r
\`\`\`\r
\r
chỉ chọn các phần tử **lớn hơn 0**, tức là các phần tử dương.\r
Sau đó cộng các phần tử đó vào \`S\`.\r
\r
Vì vậy chương trình dùng để **tính tổng các phần tử dương trong \`A\`**.\r
Chọn D\r
\r
## Bài 23: Một số lệnh làm việc với dữ liệu danh sách\r
\r
Câu 1. Toán tử nào dùng để kiểm tra một giá trị có nằm trong danh sách không?\r
A. \`in\`.\r
B. \`int\`.\r
C. \`range\`.\r
D. \`append\`.\r
\r
Lời giải\r
Toán tử \`in\` dùng để kiểm tra một phần tử có thuộc danh sách hay không.\r
\r
Ví dụ:\r
\r
\`\`\`python\r
3 in [1, 2, 3, 4]\r
\`\`\`\r
\r
cho kết quả \`True\`.\r
Chọn A\r
\r
Câu 2. Kết quả của chương trình sau là gì?\r
\r
\`\`\`python\r
A = [1, 2, 3, 4, 5, 6, 5]\r
for k in A:\r
    print(k, end=" ")\r
\`\`\`\r
\r
A. \`1 2 3 4 5 6\`\r
B. \`1 2 3 4 5 6 5\`\r
C. \`1 2 3 4 5\`\r
D. \`2 3 4 5 6 5\`\r
\r
Lời giải\r
Vòng lặp:\r
\r
\`\`\`python\r
for k in A:\r
\`\`\`\r
\r
sẽ lần lượt lấy từng phần tử của danh sách \`A\` và in ra.\r
Danh sách \`A\` có 7 phần tử là:\r
\r
\`\`\`python\r
[1, 2, 3, 4, 5, 6, 5]\r
\`\`\`\r
\r
nên kết quả in ra là:\r
\r
\`\`\`python\r
1 2 3 4 5 6 5\r
\`\`\`\r
\r
Chọn B\r
\r
Câu 3. Ngoài việc kết hợp lệnh \`for\` và \`range\` để duyệt phần tử trong danh sách, có thể sử dụng câu lệnh nào khác?\r
A. \`int\`.\r
B. \`while\`.\r
C. \`in range\`.\r
D. \`in\`.\r
\r
Lời giải\r
Khi duyệt trực tiếp các phần tử trong danh sách, ta thường dùng:\r
\r
\`\`\`python\r
for x in A:\r
    print(x)\r
\`\`\`\r
\r
Ở đây, từ khóa quan trọng để duyệt trực tiếp phần tử là \`in\`.\r
Theo đáp án của tài liệu, chọn D.\r
Chọn D\r
\r
Câu 4. Giả sử \`A = ['a', 'b', 'c', 'd', 2, 3, 4]\`. Các biểu thức sau trả về giá trị đúng hay sai?\r
\r
\`\`\`python\r
6 in A\r
'a' in A\r
\`\`\`\r
\r
A. \`True, False\`.\r
B. \`True, True\`.\r
C. \`False, True\`.\r
D. \`False, False\`.\r
\r
Lời giải\r
Xét từng biểu thức:\r
\r
- \`6 in A\` → sai, vì \`6\` không có trong danh sách \`A\`\r
- \`'a' in A\` → đúng, vì \`'a'\` là phần tử đầu tiên của danh sách\r
\r
Vậy kết quả là:\r
\r
\`\`\`python\r
False, True\r
\`\`\`\r
\r
Chọn C\r
\r
Câu 5. Giả sử \`A = [5, 6, 7, 8, 9, 10, 11, 12]\`. Biểu thức sau trả về giá trị đúng hay sai?\r
\r
\`\`\`python\r
(3 + 4 - 5 + 18 // 4) in A\r
\`\`\`\r
\r
A. \`True\`.\r
B. \`False\`.\r
C. Không xác định.\r
D. Câu lệnh bị lỗi.\r
\r
Lời giải\r
Ta tính giá trị biểu thức trước:\r
\r
\`\`\`python\r
3 + 4 - 5 + 18 // 4\r
= 7 - 5 + 4\r
= 2 + 4\r
= 6\r
\`\`\`\r
\r
Khi đó biểu thức trở thành:\r
\r
\`\`\`python\r
6 in A\r
\`\`\`\r
\r
Vì \`6\` có trong danh sách \`A\`, nên kết quả là \`True\`.\r
Chọn A\r
\r
Câu 6. Lệnh nào sau đây xoá toàn bộ danh sách?\r
A. \`clear()\`.\r
B. \`exit()\`.\r
C. \`remove()\`.\r
D. \`del()\`.\r
\r
Lời giải\r
Phương thức \`clear()\` dùng để xoá toàn bộ phần tử của danh sách, làm cho danh sách trở thành rỗng.\r
\r
Ví dụ:\r
\r
\`\`\`python\r
A.clear()\r
\`\`\`\r
\r
Chọn A\r
\r
Câu 7. Phát biểu nào sau đây là sai?\r
A. Sau khi thực hiện lệnh \`clear()\`, danh sách gốc trở thành rỗng.\r
B. Lệnh \`remove()\` có chức năng xoá một phần tử có giá trị cho trước.\r
C. Lệnh \`remove()\` xoá tất cả các phần tử có giá trị cho trước trong \`list\`.\r
D. \`clear()\` có tác dụng xoá toàn bộ các danh sách.\r
\r
Lời giải\r
Lệnh \`remove(x)\` chỉ xoá **phần tử đầu tiên** có giá trị \`x\` trong danh sách, không xoá tất cả các phần tử cùng giá trị.\r
\r
Ví dụ:\r
\r
\`\`\`python\r
A = [1, 2, 2, 3]\r
A.remove(2)\r
\`\`\`\r
\r
sau đó \`A\` trở thành:\r
\r
\`\`\`python\r
[1, 2, 3]\r
\`\`\`\r
\r
Vì vậy phát biểu sai là C.\r
Chọn C\r
\r
Câu 8. Số phát biểu đúng là:\r
\r
1. Sau khi thực hiện lệnh \`clear()\`, các phần tử trả về giá trị \`0\`.\r
2. Lệnh \`remove\` trả về giá trị \`False\` nếu không có trong danh sách.\r
3. \`remove()\` có tác dụng xoá một phần tử có giá trị cho trước trong \`list\`.\r
4. Lệnh \`remove()\` có tác dụng xoá một phần tử ở vị trí cho trước.\r
\r
A. 1.\r
B. 2.\r
C. 0.\r
D. 3.\r
\r
Lời giải\r
Xét từng phát biểu:\r
\r
1. Sai, vì \`clear()\` làm danh sách rỗng chứ không biến các phần tử thành \`0\`.\r
2. Sai, vì nếu không tìm thấy giá trị cần xoá thì \`remove()\` báo lỗi, không trả về \`False\`.\r
3. Đúng, vì \`remove()\` xoá một phần tử có giá trị cho trước.\r
4. Sai, vì xoá theo vị trí là dùng \`del\`, \`pop()\`, không phải \`remove()\`.\r
\r
Vậy chỉ có **1 phát biểu đúng**.\r
Chọn A\r
\r
Câu 9. Sau khi thực hiện các câu lệnh sau, mảng \`A\` như thế nào?\r
\r
\`\`\`python\r
A = [1, 2, 3, 4, 5]\r
A.remove(2)\r
print(A)\r
\`\`\`\r
\r
A. \`[1, 2, 3, 4]\`.\r
B. \`[2, 3, 4, 5]\`.\r
C. \`[1, 2, 4, 5]\`.\r
D. \`[1, 3, 4, 5]\`.\r
\r
Lời giải\r
Lệnh:\r
\r
\`\`\`python\r
A.remove(2)\r
\`\`\`\r
\r
xoá phần tử có **giá trị** bằng \`2\` trong danh sách \`A\`.\r
\r
Ban đầu:\r
\r
\`\`\`python\r
[1, 2, 3, 4, 5]\r
\`\`\`\r
\r
sau khi xoá \`2\`, còn:\r
\r
\`\`\`python\r
[1, 3, 4, 5]\r
\`\`\`\r
\r
Chọn D\r
\r
Câu 10. Phần tử thứ bao nhiêu trong mảng \`A\` bị xoá?\r
\r
\`\`\`python\r
A = [10, 20, 3, 30, 20, 30, 6, 3, 2, 8, 9]\r
A.remove(3)\r
print(A)\r
\`\`\`\r
\r
A. 2.\r
B. 3.\r
C. 8.\r
D. 4.\r
\r
Lời giải\r
Lệnh \`remove(3)\` sẽ xoá **phần tử đầu tiên có giá trị bằng 3**.\r
\r
Danh sách ban đầu:\r
\r
\`\`\`python\r
[10, 20, 3, 30, 20, 30, 6, 3, 2, 8, 9]\r
\`\`\`\r
\r
Phần tử \`3\` đầu tiên nằm ở **vị trí thứ 3** nếu đếm theo thứ tự 1, 2, 3, ...\r
\r
Vì vậy phần tử bị xoá là phần tử thứ 3.\r
Chọn B\r
\r
Câu 11. Kết quả khi thực hiện chương trình sau?\r
\r
\`\`\`python\r
A = [1, 2, 3, 5]\r
A.insert(2, 4)\r
print(A)\r
\`\`\`\r
\r
A. \`1, 2, 3, 4\`.\r
B. \`1, 2, 4, 3, 5\`.\r
C. \`1, 2, 3, 4, 5\`.\r
D. \`1, 2, 4, 5\`.\r
\r
Lời giải\r
Lệnh:\r
\r
\`\`\`python\r
A.insert(2, 4)\r
\`\`\`\r
\r
chèn giá trị \`4\` vào vị trí chỉ số \`2\`.\r
\r
Danh sách ban đầu:\r
\r
\`\`\`python\r
[1, 2, 3, 5]\r
\`\`\`\r
\r
Sau khi chèn, phần tử \`4\` đứng trước phần tử đang ở chỉ số \`2\` là \`3\`, nên kết quả là:\r
\r
\`\`\`python\r
[1, 2, 4, 3, 5]\r
\`\`\`\r
\r
Chọn B\r
\r
Câu 12. Lệnh sau chèn phần tử cần thêm vào vị trí thứ mấy trong danh sách \`A\`?\r
\r
\`\`\`python\r
A.insert(-5, 3)\r
\`\`\`\r
\r
A. 3.\r
B. 1.\r
C. 0.\r
D. 2.\r
\r
Lời giải\r
Theo đáp án trong tài liệu, lệnh này chèn phần tử vào **vị trí thứ nhất** của danh sách.\r
\r
Trong Python, nếu chỉ số chèn âm và nhỏ hơn phạm vi hợp lệ, phần tử sẽ được chèn về đầu danh sách.\r
Vì vậy đáp án đúng là vị trí thứ 1.\r
Chọn B\r
\r
Câu 13. Danh sách \`A\` trước và sau lệnh \`insert()\` là \`[1, 3, 5, 0]\` và \`[1, 3, 4, 5, 0]\`. Lệnh đã dùng là lệnh gì?\r
A. \`insert(2, 4)\`.\r
B. \`insert(4, 2)\`.\r
C. \`insert(3, 4)\`.\r
D. \`insert(4, 3)\`.\r
\r
Lời giải\r
Muốn từ:\r
\r
\`\`\`python\r
[1, 3, 5, 0]\r
\`\`\`\r
\r
thành:\r
\r
\`\`\`python\r
[1, 3, 4, 5, 0]\r
\`\`\`\r
\r
thì phải chèn số \`4\` vào trước phần tử \`5\`, tức là tại vị trí chỉ số \`2\`.\r
\r
Lệnh đúng là:\r
\r
\`\`\`python\r
insert(2, 4)\r
\`\`\`\r
\r
Chọn A\r
\r
Câu 14. Danh sách \`A\` sau lệnh 1 lệnh \`remove()\` và 3 lệnh \`append()\` có 8 phần tử. Hỏi ban đầu danh sách \`A\` có bao nhiêu phần tử?\r
A. 8.\r
B. 7.\r
C. 4.\r
D. 6.\r
\r
Lời giải\r
Gọi số phần tử ban đầu là \`n\`.\r
\r
- Sau 1 lệnh \`remove()\`, số phần tử còn: \`n - 1\`\r
- Sau 3 lệnh \`append()\`, số phần tử là: \`n - 1 + 3 = n + 2\`\r
\r
Theo đề bài:\r
\r
\`\`\`python\r
n + 2 = 8\r
\`\`\`\r
\r
Suy ra:\r
\r
\`\`\`python\r
n = 6\r
\`\`\`\r
\r
Chọn D\r
\r
Câu 15. Chọn phát biểu sai trong các phát biểu sau khi nói về câu lệnh \`insert\` trong Python:\r
A. \`insert(index, value)\` sẽ chèn giá trị \`value\` vào danh sách tại vị trí \`index\` và đẩy các phần tử sang phải.\r
B. Nếu chỉ số chèn \`< 0\` thì chèn vào đầu danh sách.\r
C. Phần tử có chỉ số \`k\` sẽ được thay thế bởi phần tử thêm vào.\r
D. Nếu chỉ số chèn \`> len(A)\` thì chèn vào cuối danh sách.\r
\r
Lời giải\r
Lệnh \`insert()\` là lệnh **chèn thêm phần tử**, không phải thay thế phần tử cũ.\r
\r
Ví dụ:\r
\r
\`\`\`python\r
A = [1, 2, 3]\r
A.insert(1, 9)\r
\`\`\`\r
\r
thì \`A\` trở thành:\r
\r
\`\`\`python\r
[1, 9, 2, 3]\r
\`\`\`\r
\r
Phần tử cũ không bị thay thế, mà được dời sang phải.\r
Vì vậy phát biểu sai là C.\r
Chọn C\r
`,fs=cs(Hf,{defaultSection:"Tin học"});ss(fs);const Qf=320,zr={"tin-hoc":{id:"tin-hoc",label:"Tin học",shortLabel:"Tin học",symbol:"</>",statLabel:"Lệnh, kiểu dữ liệu",eyebrow:"Bộ đề môn Tin học",title:"Ôn tập trắc nghiệm Tin học với phản hồi đúng sai ngay lập tức",blurb:"Tập trung vào các bài lập trình, lệnh cơ bản và câu hỏi thao tác nhanh.",source:"questions/tinhoc.md",accentClass:"theme-tinhoc",questions:fs},"quoc-phong":{id:"quoc-phong",label:"Quốc phòng",shortLabel:"Quốc phòng",symbol:"QP",statLabel:"Lực lượng, nhiệm vụ, truyền thống",eyebrow:"Bộ đề môn Quốc phòng",title:"Làm bộ câu hỏi Quốc phòng riêng để học nhanh và đối chiếu lời giải dễ dàng",blurb:"Giữ nguyên cấu trúc tài liệu gốc để ôn theo mạch khái niệm, lực lượng và truyền thống.",source:"questions/lichsu.md",accentClass:"theme-quocphong",questions:hs}};function Yo(){const n=window.location.pathname.replace(/^\/+|\/+$/g,"");return zr[n]?n:"tin-hoc"}function Zo(n){const e=[...n];for(let t=e.length-1;t>0;t-=1){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}function Kf(){const[n,e]=vn.useState(Yo),t=zr[n],r=t.questions,[i,l]=vn.useState(0),[u,o]=vn.useState({}),[a,h]=vn.useState(!1),[m,d]=vn.useState("all"),[p,k]=vn.useState("all"),[S,x]=vn.useState(!1),[P,f]=vn.useState(r),c=vn.useMemo(()=>[...new Set(r.map(w=>w.section))],[r]);g.useEffect(()=>{const w=()=>{e(Yo())};return window.addEventListener("popstate",w),()=>{window.removeEventListener("popstate",w)}},[]),g.useEffect(()=>{(window.location.pathname==="/"||window.location.pathname==="")&&(window.history.replaceState({},"","/tin-hoc"),e("tin-hoc"))},[]),g.useEffect(()=>{x(!0),d("all"),k("all"),f(r),l(0),o({}),h(!1);const w=window.setTimeout(()=>{x(!1)},Qf);return()=>{window.clearTimeout(w)}},[r]),g.useEffect(()=>{const w=r.filter(y=>m==="all"||y.section===m);f(a?Zo(w):w),l(0)},[a,m,r]);const s=P[i],v=u[s==null?void 0:s.id],E=vn.useMemo(()=>P.reduce((w,y)=>w+(u[y.id]===y.answer?1:0),0),[P,u]),L=P.reduce((w,y)=>w+(u[y.id]?1:0),0),N=P.length?Math.round(L/P.length*100):0,A=vn.useMemo(()=>P.map((w,y)=>({question:w,index:y})).filter(({question:w})=>{if(p==="all")return!0;const y=u[w.id];return p==="unanswered"?!y:p==="correct"?y===w.answer:p==="wrong"?!!y&&y!==w.answer:!0}),[P,p,u]),I=w=>{!s||v||o(y=>({...y,[s.id]:w}))},_=w=>{l(w)},mn=()=>{l(w=>Math.min(w+1,P.length-1))},Ce=()=>{l(w=>Math.max(w-1,0))},Jn=(w,y)=>{f(w),h(y),l(0),o({})},er=()=>{Jn(Zo(P),!0)},ki=()=>{const w=r.filter(y=>m==="all"||y.section===m);Jn(w,!1)},Ve=w=>{const y=w==="tin-hoc"?"/tin-hoc":`/${w}`;window.location.pathname!==y&&(window.history.pushState({},"",y),e(w))};return s?g.createElement("main",{className:["app-shell",t.accentClass,S?"page-switching":"page-ready"].join(" ")},g.createElement("header",{className:"topbar"},g.createElement("div",{className:"brand-block"},g.createElement("span",{className:"brand-kicker"},t.symbol),g.createElement("div",null,g.createElement("strong",null,"Kho câu hỏi theo môn"),g.createElement("p",null,"Chuyển nhanh giữa các bộ đề mà không cần rời trang."))),g.createElement("nav",{className:"top-nav","aria-label":"Điều hướng môn học"},Object.values(zr).map(w=>g.createElement("button",{key:w.id,type:"button",className:["top-nav-link",w.id===t.id?"active":""].filter(Boolean).join(" "),onClick:()=>Ve(w.id)},g.createElement("i",{className:"nav-symbol","aria-hidden":"true"},w.symbol),g.createElement("span",null,w.shortLabel),g.createElement("small",null,w.questions.length," câu"))))),g.createElement("section",{className:"hero-panel"},g.createElement("div",{className:"hero-copy"},g.createElement("span",{className:"eyebrow"},t.eyebrow),g.createElement("h1",null,t.title),g.createElement("p",{className:"hero-blurb"},t.blurb),g.createElement("p",null,t.id==="tin-hoc"?g.createElement(g.Fragment,null,"Toàn bộ câu hỏi được đọc từ ",g.createElement("code",null,t.source),", giữ nguyên các nhóm bài học và thao tác nhanh trên cả desktop lẫn mobile."):g.createElement(g.Fragment,null,"Trang này đọc trực tiếp từ ",g.createElement("code",null,t.source),"; tệp không chia theo heading",g.createElement("code",null,"##")," nên dữ liệu được render thành một nhóm Quốc phòng duy nhất để khớp nội dung gốc.")),g.createElement("div",{className:"page-switcher",role:"tablist","aria-label":"Chọn bộ câu hỏi"},Object.values(zr).map(w=>g.createElement("button",{key:w.id,type:"button",role:"tab","aria-selected":w.id===t.id,className:["page-tab",w.id===t.id?"active":""].filter(Boolean).join(" "),onClick:()=>Ve(w.id)},g.createElement("span",null,w.label),g.createElement("em",null,w.symbol),g.createElement("small",null,w.blurb)))),t.id==="tin-hoc"?g.createElement("div",{className:"filter-panel"},g.createElement("label",{className:"filter-field"},g.createElement("span",null,"Lọc theo bài học"),g.createElement("select",{value:m,onChange:w=>d(w.target.value)},g.createElement("option",{value:"all"},"Tất cả bài học"),c.map(w=>g.createElement("option",{key:w,value:w},w)))),g.createElement("div",{className:"filter-meta"},g.createElement("strong",null,P.length),g.createElement("span",null,"câu đang hiển thị"))):null),g.createElement("div",{className:"stats-grid"},g.createElement("article",{className:"stat-card accent"},g.createElement("span",null,"Tổng câu"),g.createElement("strong",null,P.length)),g.createElement("article",{className:"stat-card"},g.createElement("span",null,"Đã trả lời"),g.createElement("strong",null,L)),g.createElement("article",{className:"stat-card"},g.createElement("span",null,"Trả lời đúng"),g.createElement("strong",null,E)),g.createElement("article",{className:"stat-card"},g.createElement("span",null,"Chế độ"),g.createElement("strong",null,a?"Trộn":"Gốc")),g.createElement("article",{className:"stat-card stat-card-source"},g.createElement("span",null,"Nguồn dữ liệu"),g.createElement("strong",null,t.source)),g.createElement("article",{className:"stat-card stat-card-focus"},g.createElement("span",null,"Trọng tâm"),g.createElement("strong",null,t.statLabel))),g.createElement("div",{className:"hero-actions"},g.createElement("button",{type:"button",className:"nav-button primary",onClick:er},"Xáo trộn câu hỏi"),g.createElement("button",{type:"button",className:"nav-button secondary",onClick:ki},"Thứ tự gốc"))),g.createElement("section",{className:"content-grid"},g.createElement("aside",{className:"question-rail"},g.createElement("div",{className:"rail-header"},g.createElement("h2",null,"Danh sách câu"),g.createElement("span",null,i+1,"/",P.length)),t.id==="quoc-phong"?g.createElement("div",{className:"rail-filters",role:"tablist","aria-label":"Lọc câu hỏi quốc phòng"},[["all","Tất cả"],["unanswered","Chưa làm"],["correct","Đúng"],["wrong","Sai"]].map(([w,y])=>g.createElement("button",{key:w,type:"button",className:["rail-filter-pill",p===w?"active":""].filter(Boolean).join(" "),onClick:()=>k(w)},y))):null,g.createElement("div",{className:"question-list",role:"list","aria-label":"Danh sách câu hỏi"},A.length?A.map(({question:w,index:y})=>{const D=u[w.id],B=D===w.answer;return g.createElement("button",{key:w.id,type:"button",className:["question-chip",y===i?"active":"",D?B?"correct":"wrong":""].filter(Boolean).join(" "),onClick:()=>_(y)},g.createElement("span",null,w.number),g.createElement("small",null,w.section))}):g.createElement("div",{className:"rail-empty"},"Chưa có câu phù hợp với bộ lọc này."))),g.createElement("section",{className:"question-card"},g.createElement("div",{className:"question-card-header"},g.createElement("div",null,g.createElement("span",{className:"section-tag"},s.section),g.createElement("h2",null,s.heading,"."),g.createElement(Xi,{blocks:s.stem.blocks,className:"question-content"})),g.createElement("div",{className:"progress-ring","aria-label":"Tiến độ",style:{background:`radial-gradient(circle at center, rgba(17, 21, 29, 0.98) 58%, transparent 60%), conic-gradient(var(--accent) ${N*3.6}deg, rgba(255, 255, 255, 0.12) 0deg)`}},g.createElement("strong",null,N,"%"),g.createElement("span",null,"hoàn thành"))),g.createElement("div",{className:"options-grid"},s.options.map(w=>{const y=v===w.id,D=s.answer===w.id;return g.createElement("button",{key:w.id,type:"button",className:["option-card",y?"selected":"",v&&D?"is-answer":"",v&&y&&!D?"is-wrong":""].filter(Boolean).join(" "),onClick:()=>I(w.id),disabled:!!v},g.createElement("span",{className:"option-label"},w.id),g.createElement(Xi,{blocks:w.content.blocks,className:"option-content"}))})),g.createElement("div",{className:["feedback-panel",v?"visible":""].join(" ")},v?g.createElement(g.Fragment,null,g.createElement("div",{className:v===s.answer?"feedback ok":"feedback nope"},v===s.answer?"Chính xác. Bạn đã chọn đúng đáp án.":`Chưa đúng. Đáp án đúng là ${s.answer}.`),s.explanation.blocks.length?g.createElement(Xi,{blocks:s.explanation.blocks,className:"feedback-content"}):null):g.createElement("div",{className:"feedback hint"},"Chọn một đáp án để xem kết quả ngay.")),g.createElement("div",{className:"actions-row"},g.createElement("button",{type:"button",className:"nav-button secondary",onClick:Ce},"Câu trước"),g.createElement("button",{type:"button",className:"nav-button primary",onClick:mn},"Câu tiếp"))))):g.createElement("div",{className:"empty-state"},"Không tìm thấy dữ liệu câu hỏi.")}Zi.createRoot(document.getElementById("root")).render(g.createElement(g.StrictMode,null,g.createElement(Kf,null)));
