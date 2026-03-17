(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function oc(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Yo={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yt=Symbol.for("react.element"),sc=Symbol.for("react.portal"),ac=Symbol.for("react.fragment"),cc=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),gc=Symbol.for("react.suspense"),mc=Symbol.for("react.memo"),vc=Symbol.for("react.lazy"),ju=Symbol.iterator;function yc(n){return n===null||typeof n!="object"?null:(n=ju&&n[ju]||n["@@iterator"],typeof n=="function"?n:null)}var qo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zo=Object.assign,Jo={};function it(n,e,t){this.props=n,this.context=e,this.refs=Jo,this.updater=t||qo}it.prototype.isReactComponent={};it.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};it.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function bo(){}bo.prototype=it.prototype;function $i(n,e,t){this.props=n,this.context=e,this.refs=Jo,this.updater=t||qo}var Hi=$i.prototype=new bo;Hi.constructor=$i;Zo(Hi,it.prototype);Hi.isPureReactComponent=!0;var Iu=Array.isArray,ns=Object.prototype.hasOwnProperty,Ki={current:null},es={key:!0,ref:!0,__self:!0,__source:!0};function ts(n,e,t){var r,l={},i=null,u=null;if(e!=null)for(r in e.ref!==void 0&&(u=e.ref),e.key!==void 0&&(i=""+e.key),e)ns.call(e,r)&&!es.hasOwnProperty(r)&&(l[r]=e[r]);var o=arguments.length-2;if(o===1)l.children=t;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];l.children=s}if(n&&n.defaultProps)for(r in o=n.defaultProps,o)l[r]===void 0&&(l[r]=o[r]);return{$$typeof:Yt,type:n,key:i,ref:u,props:l,_owner:Ki.current}}function kc(n,e){return{$$typeof:Yt,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Qi(n){return typeof n=="object"&&n!==null&&n.$$typeof===Yt}function Cc(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Vu=/\/+/g;function Cl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Cc(""+n.key):e.toString(36)}function kr(n,e,t,r,l){var i=typeof n;(i==="undefined"||i==="boolean")&&(n=null);var u=!1;if(n===null)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(n.$$typeof){case Yt:case sc:u=!0}}if(u)return u=n,l=l(u),n=r===""?"."+Cl(u,0):r,Iu(l)?(t="",n!=null&&(t=n.replace(Vu,"$&/")+"/"),kr(l,e,t,"",function(c){return c})):l!=null&&(Qi(l)&&(l=kc(l,t+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(Vu,"$&/")+"/")+n)),e.push(l)),1;if(u=0,r=r===""?".":r+":",Iu(n))for(var o=0;o<n.length;o++){i=n[o];var s=r+Cl(i,o);u+=kr(i,e,t,s,l)}else if(s=yc(n),typeof s=="function")for(n=s.call(n),o=0;!(i=n.next()).done;)i=i.value,s=r+Cl(i,o++),u+=kr(i,e,t,s,l);else if(i==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return u}function tr(n,e,t){if(n==null)return n;var r=[],l=0;return kr(n,r,"","",function(i){return e.call(t,i,l++)}),r}function wc(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var sn={current:null},Cr={transition:null},Sc={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Cr,ReactCurrentOwner:Ki};function rs(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:tr,forEach:function(n,e,t){tr(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return tr(n,function(){e++}),e},toArray:function(n){return tr(n,function(e){return e})||[]},only:function(n){if(!Qi(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};D.Component=it;D.Fragment=ac;D.Profiler=hc;D.PureComponent=$i;D.StrictMode=cc;D.Suspense=gc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sc;D.act=rs;D.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=Zo({},n.props),l=n.key,i=n.ref,u=n._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,u=Ki.current),e.key!==void 0&&(l=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(s in e)ns.call(e,s)&&!es.hasOwnProperty(s)&&(r[s]=e[s]===void 0&&o!==void 0?o[s]:e[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){o=Array(s);for(var c=0;c<s;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:Yt,type:n.type,key:l,ref:i,props:r,_owner:u}};D.createContext=function(n){return n={$$typeof:dc,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:fc,_context:n},n.Consumer=n};D.createElement=ts;D.createFactory=function(n){var e=ts.bind(null,n);return e.type=n,e};D.createRef=function(){return{current:null}};D.forwardRef=function(n){return{$$typeof:pc,render:n}};D.isValidElement=Qi;D.lazy=function(n){return{$$typeof:vc,_payload:{_status:-1,_result:n},_init:wc}};D.memo=function(n,e){return{$$typeof:mc,type:n,compare:e===void 0?null:e}};D.startTransition=function(n){var e=Cr.transition;Cr.transition={};try{n()}finally{Cr.transition=e}};D.unstable_act=rs;D.useCallback=function(n,e){return sn.current.useCallback(n,e)};D.useContext=function(n){return sn.current.useContext(n)};D.useDebugValue=function(){};D.useDeferredValue=function(n){return sn.current.useDeferredValue(n)};D.useEffect=function(n,e){return sn.current.useEffect(n,e)};D.useId=function(){return sn.current.useId()};D.useImperativeHandle=function(n,e,t){return sn.current.useImperativeHandle(n,e,t)};D.useInsertionEffect=function(n,e){return sn.current.useInsertionEffect(n,e)};D.useLayoutEffect=function(n,e){return sn.current.useLayoutEffect(n,e)};D.useMemo=function(n,e){return sn.current.useMemo(n,e)};D.useReducer=function(n,e,t){return sn.current.useReducer(n,e,t)};D.useRef=function(n){return sn.current.useRef(n)};D.useState=function(n){return sn.current.useState(n)};D.useSyncExternalStore=function(n,e,t){return sn.current.useSyncExternalStore(n,e,t)};D.useTransition=function(){return sn.current.useTransition()};D.version="18.3.1";Yo.exports=D;var Ce=Yo.exports;const S=oc(Ce);var Yl={},ls={exports:{}},kn={},is={exports:{}},us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(E,A){var _=E.length;E.push(A);n:for(;0<_;){var K=_-1>>>1,Y=E[K];if(0<l(Y,A))E[K]=A,E[_]=Y,_=K;else break n}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var A=E[0],_=E.pop();if(_!==A){E[0]=_;n:for(var K=0,Y=E.length,nr=Y>>>1;K<nr;){var me=2*(K+1)-1,kl=E[me],ve=me+1,er=E[ve];if(0>l(kl,_))ve<Y&&0>l(er,kl)?(E[K]=er,E[ve]=_,K=ve):(E[K]=kl,E[me]=_,K=me);else if(ve<Y&&0>l(er,_))E[K]=er,E[ve]=_,K=ve;else break n}}return A}function l(E,A){var _=E.sortIndex-A.sortIndex;return _!==0?_:E.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;n.unstable_now=function(){return i.now()}}else{var u=Date,o=u.now();n.unstable_now=function(){return u.now()-o}}var s=[],c=[],m=1,g=null,d=3,y=!1,C=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var A=t(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=E)r(c),A.sortIndex=A.expirationTime,e(s,A);else break;A=t(c)}}function p(E){if(w=!1,f(E),!C)if(t(s)!==null)C=!0,vl(k);else{var A=t(c);A!==null&&yl(p,A.startTime-E)}}function k(E,A){C=!1,w&&(w=!1,h(T),T=-1),y=!0;var _=d;try{for(f(A),g=t(s);g!==null&&(!(g.expirationTime>A)||E&&!Tn());){var K=g.callback;if(typeof K=="function"){g.callback=null,d=g.priorityLevel;var Y=K(g.expirationTime<=A);A=n.unstable_now(),typeof Y=="function"?g.callback=Y:g===t(s)&&r(s),f(A)}else r(s);g=t(s)}if(g!==null)var nr=!0;else{var me=t(c);me!==null&&yl(p,me.startTime-A),nr=!1}return nr}finally{g=null,d=_,y=!1}}var L=!1,N=null,T=-1,H=5,P=-1;function Tn(){return!(n.unstable_now()-P<H)}function st(){if(N!==null){var E=n.unstable_now();P=E;var A=!0;try{A=N(!0,E)}finally{A?at():(L=!1,N=null)}}else L=!1}var at;if(typeof a=="function")at=function(){a(st)};else if(typeof MessageChannel<"u"){var Ou=new MessageChannel,uc=Ou.port2;Ou.port1.onmessage=st,at=function(){uc.postMessage(null)}}else at=function(){M(st,0)};function vl(E){N=E,L||(L=!0,at())}function yl(E,A){T=M(function(){E(n.unstable_now())},A)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(E){E.callback=null},n.unstable_continueExecution=function(){C||y||(C=!0,vl(k))},n.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(s)},n.unstable_next=function(E){switch(d){case 1:case 2:case 3:var A=3;break;default:A=d}var _=d;d=A;try{return E()}finally{d=_}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(E,A){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var _=d;d=E;try{return A()}finally{d=_}},n.unstable_scheduleCallback=function(E,A,_){var K=n.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?K+_:K):_=K,E){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=_+Y,E={id:m++,callback:A,priorityLevel:E,startTime:_,expirationTime:Y,sortIndex:-1},_>K?(E.sortIndex=_,e(c,E),t(s)===null&&E===t(c)&&(w?(h(T),T=-1):w=!0,yl(p,_-K))):(E.sortIndex=Y,e(s,E),C||y||(C=!0,vl(k))),E},n.unstable_shouldYield=Tn,n.unstable_wrapCallback=function(E){var A=d;return function(){var _=d;d=A;try{return E.apply(this,arguments)}finally{d=_}}}})(us);is.exports=us;var xc=is.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=Ce,yn=xc;function v(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var os=new Set,zt={};function Pe(n,e){Je(n,e),Je(n+"Capture",e)}function Je(n,e){for(zt[n]=e,n=0;n<e.length;n++)os.add(e[n])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ql=Object.prototype.hasOwnProperty,Lc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uu={},$u={};function Nc(n){return ql.call($u,n)?!0:ql.call(Uu,n)?!1:Lc.test(n)?$u[n]=!0:(Uu[n]=!0,!1)}function Tc(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Ac(n,e,t,r){if(e===null||typeof e>"u"||Tc(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(n,e,t,r,l,i,u){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=i,this.removeEmptyString=u}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){nn[n]=new an(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];nn[e]=new an(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){nn[n]=new an(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){nn[n]=new an(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){nn[n]=new an(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){nn[n]=new an(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){nn[n]=new an(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){nn[n]=new an(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){nn[n]=new an(n,5,!1,n.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function Xi(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Wi,Xi);nn[e]=new an(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Wi,Xi);nn[e]=new an(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Wi,Xi);nn[e]=new an(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){nn[n]=new an(n,1,!1,n.toLowerCase(),null,!1,!1)});nn.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){nn[n]=new an(n,1,!1,n.toLowerCase(),null,!0,!0)});function Gi(n,e,t,r){var l=nn.hasOwnProperty(e)?nn[e]:null;(l!==null?l.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ac(e,t,l,r)&&(t=null),r||l===null?Nc(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):l.mustUseProperty?n[l.propertyName]=t===null?l.type===3?!1:"":t:(e=l.attributeName,r=l.attributeNamespace,t===null?n.removeAttribute(e):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var Yn=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Me=Symbol.for("react.portal"),Re=Symbol.for("react.fragment"),Yi=Symbol.for("react.strict_mode"),Zl=Symbol.for("react.profiler"),ss=Symbol.for("react.provider"),as=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),Zi=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),cs=Symbol.for("react.offscreen"),Hu=Symbol.iterator;function ct(n){return n===null||typeof n!="object"?null:(n=Hu&&n[Hu]||n["@@iterator"],typeof n=="function"?n:null)}var U=Object.assign,wl;function yt(n){if(wl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);wl=e&&e[1]||""}return`
`+wl+n}var Sl=!1;function xl(n,e){if(!n||Sl)return"";Sl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){r=c}n.call(e.prototype)}else{try{throw Error()}catch(c){r=c}n()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),u=l.length-1,o=i.length-1;1<=u&&0<=o&&l[u]!==i[o];)o--;for(;1<=u&&0<=o;u--,o--)if(l[u]!==i[o]){if(u!==1||o!==1)do if(u--,o--,0>o||l[u]!==i[o]){var s=`
`+l[u].replace(" at new "," at ");return n.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",n.displayName)),s}while(1<=u&&0<=o);break}}}finally{Sl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?yt(n):""}function _c(n){switch(n.tag){case 5:return yt(n.type);case 16:return yt("Lazy");case 13:return yt("Suspense");case 19:return yt("SuspenseList");case 0:case 2:case 15:return n=xl(n.type,!1),n;case 11:return n=xl(n.type.render,!1),n;case 1:return n=xl(n.type,!0),n;default:return""}}function ni(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Re:return"Fragment";case Me:return"Portal";case Zl:return"Profiler";case Yi:return"StrictMode";case Jl:return"Suspense";case bl:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case as:return(n.displayName||"Context")+".Consumer";case ss:return(n._context.displayName||"Context")+".Provider";case qi:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Zi:return e=n.displayName||null,e!==null?e:ni(n.type)||"Memo";case Zn:e=n._payload,n=n._init;try{return ni(n(e))}catch{}}return null}function Dc(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ni(e);case 8:return e===Yi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function he(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function hs(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Pc(n){var e=hs(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return l.call(this)},set:function(u){r=""+u,i.call(this,u)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function lr(n){n._valueTracker||(n._valueTracker=Pc(n))}function fs(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=hs(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function Pr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ei(n,e){var t=e.checked;return U({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ku(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=he(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ds(n,e){e=e.checked,e!=null&&Gi(n,"checked",e,!1)}function ti(n,e){ds(n,e);var t=he(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ri(n,e.type,t):e.hasOwnProperty("defaultValue")&&ri(n,e.type,he(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Qu(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ri(n,e,t){(e!=="number"||Pr(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var kt=Array.isArray;function We(n,e,t,r){if(n=n.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<n.length;t++)l=e.hasOwnProperty("$"+n[t].value),n[t].selected!==l&&(n[t].selected=l),l&&r&&(n[t].defaultSelected=!0)}else{for(t=""+he(t),e=null,l=0;l<n.length;l++){if(n[l].value===t){n[l].selected=!0,r&&(n[l].defaultSelected=!0);return}e!==null||n[l].disabled||(e=n[l])}e!==null&&(e.selected=!0)}}function li(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(v(91));return U({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Wu(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(v(92));if(kt(t)){if(1<t.length)throw Error(v(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:he(t)}}function ps(n,e){var t=he(e.value),r=he(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function Xu(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function gs(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ii(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?gs(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ir,ms=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,l){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,l)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ir.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Bt(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var St={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zc=["Webkit","ms","Moz","O"];Object.keys(St).forEach(function(n){zc.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),St[e]=St[n]})});function vs(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||St.hasOwnProperty(n)&&St[n]?(""+e).trim():e+"px"}function ys(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=vs(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,l):n[t]=l}}var Bc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(n,e){if(e){if(Bc[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(v(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(v(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(v(61))}if(e.style!=null&&typeof e.style!="object")throw Error(v(62))}}function oi(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var si=null;function Ji(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ai=null,Xe=null,Ge=null;function Gu(n){if(n=Jt(n)){if(typeof ai!="function")throw Error(v(280));var e=n.stateNode;e&&(e=il(e),ai(n.stateNode,n.type,e))}}function ks(n){Xe?Ge?Ge.push(n):Ge=[n]:Xe=n}function Cs(){if(Xe){var n=Xe,e=Ge;if(Ge=Xe=null,Gu(n),e)for(n=0;n<e.length;n++)Gu(e[n])}}function ws(n,e){return n(e)}function Ss(){}var El=!1;function xs(n,e,t){if(El)return n(e,t);El=!0;try{return ws(n,e,t)}finally{El=!1,(Xe!==null||Ge!==null)&&(Ss(),Cs())}}function Mt(n,e){var t=n.stateNode;if(t===null)return null;var r=il(t);if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(v(231,e,typeof t));return t}var ci=!1;if(Qn)try{var ht={};Object.defineProperty(ht,"passive",{get:function(){ci=!0}}),window.addEventListener("test",ht,ht),window.removeEventListener("test",ht,ht)}catch{ci=!1}function Mc(n,e,t,r,l,i,u,o,s){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(m){this.onError(m)}}var xt=!1,zr=null,Br=!1,hi=null,Rc={onError:function(n){xt=!0,zr=n}};function Fc(n,e,t,r,l,i,u,o,s){xt=!1,zr=null,Mc.apply(Rc,arguments)}function Oc(n,e,t,r,l,i,u,o,s){if(Fc.apply(this,arguments),xt){if(xt){var c=zr;xt=!1,zr=null}else throw Error(v(198));Br||(Br=!0,hi=c)}}function ze(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Es(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Yu(n){if(ze(n)!==n)throw Error(v(188))}function jc(n){var e=n.alternate;if(!e){if(e=ze(n),e===null)throw Error(v(188));return e!==n?null:n}for(var t=n,r=e;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Yu(l),n;if(i===r)return Yu(l),e;i=i.sibling}throw Error(v(188))}if(t.return!==r.return)t=l,r=i;else{for(var u=!1,o=l.child;o;){if(o===t){u=!0,t=l,r=i;break}if(o===r){u=!0,r=l,t=i;break}o=o.sibling}if(!u){for(o=i.child;o;){if(o===t){u=!0,t=i,r=l;break}if(o===r){u=!0,r=i,t=l;break}o=o.sibling}if(!u)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?n:e}function Ls(n){return n=jc(n),n!==null?Ns(n):null}function Ns(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Ns(n);if(e!==null)return e;n=n.sibling}return null}var Ts=yn.unstable_scheduleCallback,qu=yn.unstable_cancelCallback,Ic=yn.unstable_shouldYield,Vc=yn.unstable_requestPaint,Q=yn.unstable_now,Uc=yn.unstable_getCurrentPriorityLevel,bi=yn.unstable_ImmediatePriority,As=yn.unstable_UserBlockingPriority,Mr=yn.unstable_NormalPriority,$c=yn.unstable_LowPriority,_s=yn.unstable_IdlePriority,el=null,jn=null;function Hc(n){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(el,n,void 0,(n.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:Wc,Kc=Math.log,Qc=Math.LN2;function Wc(n){return n>>>=0,n===0?32:31-(Kc(n)/Qc|0)|0}var ur=64,or=4194304;function Ct(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Rr(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,l=n.suspendedLanes,i=n.pingedLanes,u=t&268435455;if(u!==0){var o=u&~l;o!==0?r=Ct(o):(i&=u,i!==0&&(r=Ct(i)))}else u=t&~l,u!==0?r=Ct(u):i!==0&&(r=Ct(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&l)&&(l=r&-r,i=e&-e,l>=i||l===16&&(i&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-zn(e),l=1<<t,r|=n[t],e&=~l;return r}function Xc(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gc(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,l=n.expirationTimes,i=n.pendingLanes;0<i;){var u=31-zn(i),o=1<<u,s=l[u];s===-1?(!(o&t)||o&r)&&(l[u]=Xc(o,e)):s<=e&&(n.expiredLanes|=o),i&=~o}}function fi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ds(){var n=ur;return ur<<=1,!(ur&4194240)&&(ur=64),n}function Ll(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function qt(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-zn(e),n[e]=t}function Yc(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var l=31-zn(t),i=1<<l;e[l]=0,r[l]=-1,n[l]=-1,t&=~i}}function nu(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-zn(t),l=1<<r;l&e|n[r]&e&&(n[r]|=e),t&=~l}}var B=0;function Ps(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var zs,eu,Bs,Ms,Rs,di=!1,sr=[],re=null,le=null,ie=null,Rt=new Map,Ft=new Map,bn=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zu(n,e){switch(n){case"focusin":case"focusout":re=null;break;case"dragenter":case"dragleave":le=null;break;case"mouseover":case"mouseout":ie=null;break;case"pointerover":case"pointerout":Rt.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ft.delete(e.pointerId)}}function ft(n,e,t,r,l,i){return n===null||n.nativeEvent!==i?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},e!==null&&(e=Jt(e),e!==null&&eu(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),n)}function Zc(n,e,t,r,l){switch(e){case"focusin":return re=ft(re,n,e,t,r,l),!0;case"dragenter":return le=ft(le,n,e,t,r,l),!0;case"mouseover":return ie=ft(ie,n,e,t,r,l),!0;case"pointerover":var i=l.pointerId;return Rt.set(i,ft(Rt.get(i)||null,n,e,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Ft.set(i,ft(Ft.get(i)||null,n,e,t,r,l)),!0}return!1}function Fs(n){var e=we(n.target);if(e!==null){var t=ze(e);if(t!==null){if(e=t.tag,e===13){if(e=Es(t),e!==null){n.blockedOn=e,Rs(n.priority,function(){Bs(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function wr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=pi(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);si=r,t.target.dispatchEvent(r),si=null}else return e=Jt(t),e!==null&&eu(e),n.blockedOn=t,!1;e.shift()}return!0}function Ju(n,e,t){wr(n)&&t.delete(e)}function Jc(){di=!1,re!==null&&wr(re)&&(re=null),le!==null&&wr(le)&&(le=null),ie!==null&&wr(ie)&&(ie=null),Rt.forEach(Ju),Ft.forEach(Ju)}function dt(n,e){n.blockedOn===e&&(n.blockedOn=null,di||(di=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,Jc)))}function Ot(n){function e(l){return dt(l,n)}if(0<sr.length){dt(sr[0],n);for(var t=1;t<sr.length;t++){var r=sr[t];r.blockedOn===n&&(r.blockedOn=null)}}for(re!==null&&dt(re,n),le!==null&&dt(le,n),ie!==null&&dt(ie,n),Rt.forEach(e),Ft.forEach(e),t=0;t<bn.length;t++)r=bn[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<bn.length&&(t=bn[0],t.blockedOn===null);)Fs(t),t.blockedOn===null&&bn.shift()}var Ye=Yn.ReactCurrentBatchConfig,Fr=!0;function bc(n,e,t,r){var l=B,i=Ye.transition;Ye.transition=null;try{B=1,tu(n,e,t,r)}finally{B=l,Ye.transition=i}}function nh(n,e,t,r){var l=B,i=Ye.transition;Ye.transition=null;try{B=4,tu(n,e,t,r)}finally{B=l,Ye.transition=i}}function tu(n,e,t,r){if(Fr){var l=pi(n,e,t,r);if(l===null)Rl(n,e,r,Or,t),Zu(n,r);else if(Zc(l,n,e,t,r))r.stopPropagation();else if(Zu(n,r),e&4&&-1<qc.indexOf(n)){for(;l!==null;){var i=Jt(l);if(i!==null&&zs(i),i=pi(n,e,t,r),i===null&&Rl(n,e,r,Or,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else Rl(n,e,r,null,t)}}var Or=null;function pi(n,e,t,r){if(Or=null,n=Ji(r),n=we(n),n!==null)if(e=ze(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Es(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Or=n,null}function Os(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uc()){case bi:return 1;case As:return 4;case Mr:case $c:return 16;case _s:return 536870912;default:return 16}default:return 16}}var ee=null,ru=null,Sr=null;function js(){if(Sr)return Sr;var n,e=ru,t=e.length,r,l="value"in ee?ee.value:ee.textContent,i=l.length;for(n=0;n<t&&e[n]===l[n];n++);var u=t-n;for(r=1;r<=u&&e[t-r]===l[i-r];r++);return Sr=l.slice(n,1<r?1-r:void 0)}function xr(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ar(){return!0}function bu(){return!1}function Cn(n){function e(t,r,l,i,u){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ar:bu,this.isPropagationStopped=bu,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),e}var ut={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lu=Cn(ut),Zt=U({},ut,{view:0,detail:0}),eh=Cn(Zt),Nl,Tl,pt,tl=U({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==pt&&(pt&&n.type==="mousemove"?(Nl=n.screenX-pt.screenX,Tl=n.screenY-pt.screenY):Tl=Nl=0,pt=n),Nl)},movementY:function(n){return"movementY"in n?n.movementY:Tl}}),no=Cn(tl),th=U({},tl,{dataTransfer:0}),rh=Cn(th),lh=U({},Zt,{relatedTarget:0}),Al=Cn(lh),ih=U({},ut,{animationName:0,elapsedTime:0,pseudoElement:0}),uh=Cn(ih),oh=U({},ut,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),sh=Cn(oh),ah=U({},ut,{data:0}),eo=Cn(ah),ch={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=fh[n])?!!e[n]:!1}function iu(){return dh}var ph=U({},Zt,{key:function(n){if(n.key){var e=ch[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=xr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?hh[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(n){return n.type==="keypress"?xr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gh=Cn(ph),mh=U({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),to=Cn(mh),vh=U({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),yh=Cn(vh),kh=U({},ut,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ch=Cn(kh),wh=U({},tl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Sh=Cn(wh),xh=[9,13,27,32],uu=Qn&&"CompositionEvent"in window,Et=null;Qn&&"documentMode"in document&&(Et=document.documentMode);var Eh=Qn&&"TextEvent"in window&&!Et,Is=Qn&&(!uu||Et&&8<Et&&11>=Et),ro=" ",lo=!1;function Vs(n,e){switch(n){case"keyup":return xh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Us(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fe=!1;function Lh(n,e){switch(n){case"compositionend":return Us(e);case"keypress":return e.which!==32?null:(lo=!0,ro);case"textInput":return n=e.data,n===ro&&lo?null:n;default:return null}}function Nh(n,e){if(Fe)return n==="compositionend"||!uu&&Vs(n,e)?(n=js(),Sr=ru=ee=null,Fe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Is&&e.locale!=="ko"?null:e.data;default:return null}}var Th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function io(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Th[n.type]:e==="textarea"}function $s(n,e,t,r){ks(r),e=jr(e,"onChange"),0<e.length&&(t=new lu("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Lt=null,jt=null;function Ah(n){bs(n,0)}function rl(n){var e=Ie(n);if(fs(e))return n}function _h(n,e){if(n==="change")return e}var Hs=!1;if(Qn){var _l;if(Qn){var Dl="oninput"in document;if(!Dl){var uo=document.createElement("div");uo.setAttribute("oninput","return;"),Dl=typeof uo.oninput=="function"}_l=Dl}else _l=!1;Hs=_l&&(!document.documentMode||9<document.documentMode)}function oo(){Lt&&(Lt.detachEvent("onpropertychange",Ks),jt=Lt=null)}function Ks(n){if(n.propertyName==="value"&&rl(jt)){var e=[];$s(e,jt,n,Ji(n)),xs(Ah,e)}}function Dh(n,e,t){n==="focusin"?(oo(),Lt=e,jt=t,Lt.attachEvent("onpropertychange",Ks)):n==="focusout"&&oo()}function Ph(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return rl(jt)}function zh(n,e){if(n==="click")return rl(e)}function Bh(n,e){if(n==="input"||n==="change")return rl(e)}function Mh(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Mn=typeof Object.is=="function"?Object.is:Mh;function It(n,e){if(Mn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!ql.call(e,l)||!Mn(n[l],e[l]))return!1}return!0}function so(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ao(n,e){var t=so(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=so(t)}}function Qs(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Qs(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ws(){for(var n=window,e=Pr();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Pr(n.document)}return e}function ou(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Rh(n){var e=Ws(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Qs(t.ownerDocument.documentElement,t)){if(r!==null&&ou(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!n.extend&&i>r&&(l=r,r=i,i=l),l=ao(t,i);var u=ao(t,r);l&&u&&(n.rangeCount!==1||n.anchorNode!==l.node||n.anchorOffset!==l.offset||n.focusNode!==u.node||n.focusOffset!==u.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),n.removeAllRanges(),i>r?(n.addRange(e),n.extend(u.node,u.offset)):(e.setEnd(u.node,u.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Fh=Qn&&"documentMode"in document&&11>=document.documentMode,Oe=null,gi=null,Nt=null,mi=!1;function co(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mi||Oe==null||Oe!==Pr(r)||(r=Oe,"selectionStart"in r&&ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nt&&It(Nt,r)||(Nt=r,r=jr(gi,"onSelect"),0<r.length&&(e=new lu("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=Oe)))}function cr(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var je={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Pl={},Xs={};Qn&&(Xs=document.createElement("div").style,"AnimationEvent"in window||(delete je.animationend.animation,delete je.animationiteration.animation,delete je.animationstart.animation),"TransitionEvent"in window||delete je.transitionend.transition);function ll(n){if(Pl[n])return Pl[n];if(!je[n])return n;var e=je[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Xs)return Pl[n]=e[t];return n}var Gs=ll("animationend"),Ys=ll("animationiteration"),qs=ll("animationstart"),Zs=ll("transitionend"),Js=new Map,ho="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function de(n,e){Js.set(n,e),Pe(e,[n])}for(var zl=0;zl<ho.length;zl++){var Bl=ho[zl],Oh=Bl.toLowerCase(),jh=Bl[0].toUpperCase()+Bl.slice(1);de(Oh,"on"+jh)}de(Gs,"onAnimationEnd");de(Ys,"onAnimationIteration");de(qs,"onAnimationStart");de("dblclick","onDoubleClick");de("focusin","onFocus");de("focusout","onBlur");de(Zs,"onTransitionEnd");Je("onMouseEnter",["mouseout","mouseover"]);Je("onMouseLeave",["mouseout","mouseover"]);Je("onPointerEnter",["pointerout","pointerover"]);Je("onPointerLeave",["pointerout","pointerover"]);Pe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pe("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ih=new Set("cancel close invalid load scroll toggle".split(" ").concat(wt));function fo(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,Oc(r,e,void 0,n),n.currentTarget=null}function bs(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],l=r.event;r=r.listeners;n:{var i=void 0;if(e)for(var u=r.length-1;0<=u;u--){var o=r[u],s=o.instance,c=o.currentTarget;if(o=o.listener,s!==i&&l.isPropagationStopped())break n;fo(l,o,c),i=s}else for(u=0;u<r.length;u++){if(o=r[u],s=o.instance,c=o.currentTarget,o=o.listener,s!==i&&l.isPropagationStopped())break n;fo(l,o,c),i=s}}}if(Br)throw n=hi,Br=!1,hi=null,n}function F(n,e){var t=e[wi];t===void 0&&(t=e[wi]=new Set);var r=n+"__bubble";t.has(r)||(na(e,n,2,!1),t.add(r))}function Ml(n,e,t){var r=0;e&&(r|=4),na(t,n,r,e)}var hr="_reactListening"+Math.random().toString(36).slice(2);function Vt(n){if(!n[hr]){n[hr]=!0,os.forEach(function(t){t!=="selectionchange"&&(Ih.has(t)||Ml(t,!1,n),Ml(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[hr]||(e[hr]=!0,Ml("selectionchange",!1,e))}}function na(n,e,t,r){switch(Os(e)){case 1:var l=bc;break;case 4:l=nh;break;default:l=tu}t=l.bind(null,e,t,n),l=void 0,!ci||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?n.addEventListener(e,t,{capture:!0,passive:l}):n.addEventListener(e,t,!0):l!==void 0?n.addEventListener(e,t,{passive:l}):n.addEventListener(e,t,!1)}function Rl(n,e,t,r,l){var i=r;if(!(e&1)&&!(e&2)&&r!==null)n:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var o=r.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(u===4)for(u=r.return;u!==null;){var s=u.tag;if((s===3||s===4)&&(s=u.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;u=u.return}for(;o!==null;){if(u=we(o),u===null)return;if(s=u.tag,s===5||s===6){r=i=u;continue n}o=o.parentNode}}r=r.return}xs(function(){var c=i,m=Ji(t),g=[];n:{var d=Js.get(n);if(d!==void 0){var y=lu,C=n;switch(n){case"keypress":if(xr(t)===0)break n;case"keydown":case"keyup":y=gh;break;case"focusin":C="focus",y=Al;break;case"focusout":C="blur",y=Al;break;case"beforeblur":case"afterblur":y=Al;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=no;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=yh;break;case Gs:case Ys:case qs:y=uh;break;case Zs:y=Ch;break;case"scroll":y=eh;break;case"wheel":y=Sh;break;case"copy":case"cut":case"paste":y=sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=to}var w=(e&4)!==0,M=!w&&n==="scroll",h=w?d!==null?d+"Capture":null:d;w=[];for(var a=c,f;a!==null;){f=a;var p=f.stateNode;if(f.tag===5&&p!==null&&(f=p,h!==null&&(p=Mt(a,h),p!=null&&w.push(Ut(a,p,f)))),M)break;a=a.return}0<w.length&&(d=new y(d,C,null,t,m),g.push({event:d,listeners:w}))}}if(!(e&7)){n:{if(d=n==="mouseover"||n==="pointerover",y=n==="mouseout"||n==="pointerout",d&&t!==si&&(C=t.relatedTarget||t.fromElement)&&(we(C)||C[Wn]))break n;if((y||d)&&(d=m.window===m?m:(d=m.ownerDocument)?d.defaultView||d.parentWindow:window,y?(C=t.relatedTarget||t.toElement,y=c,C=C?we(C):null,C!==null&&(M=ze(C),C!==M||C.tag!==5&&C.tag!==6)&&(C=null)):(y=null,C=c),y!==C)){if(w=no,p="onMouseLeave",h="onMouseEnter",a="mouse",(n==="pointerout"||n==="pointerover")&&(w=to,p="onPointerLeave",h="onPointerEnter",a="pointer"),M=y==null?d:Ie(y),f=C==null?d:Ie(C),d=new w(p,a+"leave",y,t,m),d.target=M,d.relatedTarget=f,p=null,we(m)===c&&(w=new w(h,a+"enter",C,t,m),w.target=f,w.relatedTarget=M,p=w),M=p,y&&C)e:{for(w=y,h=C,a=0,f=w;f;f=Be(f))a++;for(f=0,p=h;p;p=Be(p))f++;for(;0<a-f;)w=Be(w),a--;for(;0<f-a;)h=Be(h),f--;for(;a--;){if(w===h||h!==null&&w===h.alternate)break e;w=Be(w),h=Be(h)}w=null}else w=null;y!==null&&po(g,d,y,w,!1),C!==null&&M!==null&&po(g,M,C,w,!0)}}n:{if(d=c?Ie(c):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var k=_h;else if(io(d))if(Hs)k=Bh;else{k=Ph;var L=Dh}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=zh);if(k&&(k=k(n,c))){$s(g,k,t,m);break n}L&&L(n,d,c),n==="focusout"&&(L=d._wrapperState)&&L.controlled&&d.type==="number"&&ri(d,"number",d.value)}switch(L=c?Ie(c):window,n){case"focusin":(io(L)||L.contentEditable==="true")&&(Oe=L,gi=c,Nt=null);break;case"focusout":Nt=gi=Oe=null;break;case"mousedown":mi=!0;break;case"contextmenu":case"mouseup":case"dragend":mi=!1,co(g,t,m);break;case"selectionchange":if(Fh)break;case"keydown":case"keyup":co(g,t,m)}var N;if(uu)n:{switch(n){case"compositionstart":var T="onCompositionStart";break n;case"compositionend":T="onCompositionEnd";break n;case"compositionupdate":T="onCompositionUpdate";break n}T=void 0}else Fe?Vs(n,t)&&(T="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(Is&&t.locale!=="ko"&&(Fe||T!=="onCompositionStart"?T==="onCompositionEnd"&&Fe&&(N=js()):(ee=m,ru="value"in ee?ee.value:ee.textContent,Fe=!0)),L=jr(c,T),0<L.length&&(T=new eo(T,n,null,t,m),g.push({event:T,listeners:L}),N?T.data=N:(N=Us(t),N!==null&&(T.data=N)))),(N=Eh?Lh(n,t):Nh(n,t))&&(c=jr(c,"onBeforeInput"),0<c.length&&(m=new eo("onBeforeInput","beforeinput",null,t,m),g.push({event:m,listeners:c}),m.data=N))}bs(g,e)})}function Ut(n,e,t){return{instance:n,listener:e,currentTarget:t}}function jr(n,e){for(var t=e+"Capture",r=[];n!==null;){var l=n,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Mt(n,t),i!=null&&r.unshift(Ut(n,i,l)),i=Mt(n,e),i!=null&&r.push(Ut(n,i,l))),n=n.return}return r}function Be(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function po(n,e,t,r,l){for(var i=e._reactName,u=[];t!==null&&t!==r;){var o=t,s=o.alternate,c=o.stateNode;if(s!==null&&s===r)break;o.tag===5&&c!==null&&(o=c,l?(s=Mt(t,i),s!=null&&u.unshift(Ut(t,s,o))):l||(s=Mt(t,i),s!=null&&u.push(Ut(t,s,o)))),t=t.return}u.length!==0&&n.push({event:e,listeners:u})}var Vh=/\r\n?/g,Uh=/\u0000|\uFFFD/g;function go(n){return(typeof n=="string"?n:""+n).replace(Vh,`
`).replace(Uh,"")}function fr(n,e,t){if(e=go(e),go(n)!==e&&t)throw Error(v(425))}function Ir(){}var vi=null,yi=null;function ki(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ci=typeof setTimeout=="function"?setTimeout:void 0,$h=typeof clearTimeout=="function"?clearTimeout:void 0,mo=typeof Promise=="function"?Promise:void 0,Hh=typeof queueMicrotask=="function"?queueMicrotask:typeof mo<"u"?function(n){return mo.resolve(null).then(n).catch(Kh)}:Ci;function Kh(n){setTimeout(function(){throw n})}function Fl(n,e){var t=e,r=0;do{var l=t.nextSibling;if(n.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){n.removeChild(l),Ot(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Ot(e)}function ue(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function vo(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ot=Math.random().toString(36).slice(2),On="__reactFiber$"+ot,$t="__reactProps$"+ot,Wn="__reactContainer$"+ot,wi="__reactEvents$"+ot,Qh="__reactListeners$"+ot,Wh="__reactHandles$"+ot;function we(n){var e=n[On];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Wn]||t[On]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=vo(n);n!==null;){if(t=n[On])return t;n=vo(n)}return e}n=t,t=n.parentNode}return null}function Jt(n){return n=n[On]||n[Wn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ie(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(v(33))}function il(n){return n[$t]||null}var Si=[],Ve=-1;function pe(n){return{current:n}}function O(n){0>Ve||(n.current=Si[Ve],Si[Ve]=null,Ve--)}function R(n,e){Ve++,Si[Ve]=n.current,n.current=e}var fe={},ln=pe(fe),fn=pe(!1),Ne=fe;function be(n,e){var t=n.type.contextTypes;if(!t)return fe;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=e[i];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=l),l}function dn(n){return n=n.childContextTypes,n!=null}function Vr(){O(fn),O(ln)}function yo(n,e,t){if(ln.current!==fe)throw Error(v(168));R(ln,e),R(fn,t)}function ea(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in e))throw Error(v(108,Dc(n)||"Unknown",l));return U({},t,r)}function Ur(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fe,Ne=ln.current,R(ln,n),R(fn,fn.current),!0}function ko(n,e,t){var r=n.stateNode;if(!r)throw Error(v(169));t?(n=ea(n,e,Ne),r.__reactInternalMemoizedMergedChildContext=n,O(fn),O(ln),R(ln,n)):O(fn),R(fn,t)}var Un=null,ul=!1,Ol=!1;function ta(n){Un===null?Un=[n]:Un.push(n)}function Xh(n){ul=!0,ta(n)}function ge(){if(!Ol&&Un!==null){Ol=!0;var n=0,e=B;try{var t=Un;for(B=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}Un=null,ul=!1}catch(l){throw Un!==null&&(Un=Un.slice(n+1)),Ts(bi,ge),l}finally{B=e,Ol=!1}}return null}var Ue=[],$e=0,$r=null,Hr=0,wn=[],Sn=0,Te=null,$n=1,Hn="";function ye(n,e){Ue[$e++]=Hr,Ue[$e++]=$r,$r=n,Hr=e}function ra(n,e,t){wn[Sn++]=$n,wn[Sn++]=Hn,wn[Sn++]=Te,Te=n;var r=$n;n=Hn;var l=32-zn(r)-1;r&=~(1<<l),t+=1;var i=32-zn(e)+l;if(30<i){var u=l-l%5;i=(r&(1<<u)-1).toString(32),r>>=u,l-=u,$n=1<<32-zn(e)+l|t<<l|r,Hn=i+n}else $n=1<<i|t<<l|r,Hn=n}function su(n){n.return!==null&&(ye(n,1),ra(n,1,0))}function au(n){for(;n===$r;)$r=Ue[--$e],Ue[$e]=null,Hr=Ue[--$e],Ue[$e]=null;for(;n===Te;)Te=wn[--Sn],wn[Sn]=null,Hn=wn[--Sn],wn[Sn]=null,$n=wn[--Sn],wn[Sn]=null}var vn=null,mn=null,j=!1,Pn=null;function la(n,e){var t=xn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Co(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,vn=n,mn=ue(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,vn=n,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Te!==null?{id:$n,overflow:Hn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=xn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,vn=n,mn=null,!0):!1;default:return!1}}function xi(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ei(n){if(j){var e=mn;if(e){var t=e;if(!Co(n,e)){if(xi(n))throw Error(v(418));e=ue(t.nextSibling);var r=vn;e&&Co(n,e)?la(r,t):(n.flags=n.flags&-4097|2,j=!1,vn=n)}}else{if(xi(n))throw Error(v(418));n.flags=n.flags&-4097|2,j=!1,vn=n}}}function wo(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;vn=n}function dr(n){if(n!==vn)return!1;if(!j)return wo(n),j=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ki(n.type,n.memoizedProps)),e&&(e=mn)){if(xi(n))throw ia(),Error(v(418));for(;e;)la(n,e),e=ue(e.nextSibling)}if(wo(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(v(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){mn=ue(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}mn=null}}else mn=vn?ue(n.stateNode.nextSibling):null;return!0}function ia(){for(var n=mn;n;)n=ue(n.nextSibling)}function nt(){mn=vn=null,j=!1}function cu(n){Pn===null?Pn=[n]:Pn.push(n)}var Gh=Yn.ReactCurrentBatchConfig;function gt(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,n));var l=r,i=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(u){var o=l.refs;u===null?delete o[i]:o[i]=u},e._stringRef=i,e)}if(typeof n!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,n))}return n}function pr(n,e){throw n=Object.prototype.toString.call(e),Error(v(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function So(n){var e=n._init;return e(n._payload)}function ua(n){function e(h,a){if(n){var f=h.deletions;f===null?(h.deletions=[a],h.flags|=16):f.push(a)}}function t(h,a){if(!n)return null;for(;a!==null;)e(h,a),a=a.sibling;return null}function r(h,a){for(h=new Map;a!==null;)a.key!==null?h.set(a.key,a):h.set(a.index,a),a=a.sibling;return h}function l(h,a){return h=ce(h,a),h.index=0,h.sibling=null,h}function i(h,a,f){return h.index=f,n?(f=h.alternate,f!==null?(f=f.index,f<a?(h.flags|=2,a):f):(h.flags|=2,a)):(h.flags|=1048576,a)}function u(h){return n&&h.alternate===null&&(h.flags|=2),h}function o(h,a,f,p){return a===null||a.tag!==6?(a=Kl(f,h.mode,p),a.return=h,a):(a=l(a,f),a.return=h,a)}function s(h,a,f,p){var k=f.type;return k===Re?m(h,a,f.props.children,p,f.key):a!==null&&(a.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Zn&&So(k)===a.type)?(p=l(a,f.props),p.ref=gt(h,a,f),p.return=h,p):(p=Dr(f.type,f.key,f.props,null,h.mode,p),p.ref=gt(h,a,f),p.return=h,p)}function c(h,a,f,p){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=Ql(f,h.mode,p),a.return=h,a):(a=l(a,f.children||[]),a.return=h,a)}function m(h,a,f,p,k){return a===null||a.tag!==7?(a=Le(f,h.mode,p,k),a.return=h,a):(a=l(a,f),a.return=h,a)}function g(h,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Kl(""+a,h.mode,f),a.return=h,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case rr:return f=Dr(a.type,a.key,a.props,null,h.mode,f),f.ref=gt(h,null,a),f.return=h,f;case Me:return a=Ql(a,h.mode,f),a.return=h,a;case Zn:var p=a._init;return g(h,p(a._payload),f)}if(kt(a)||ct(a))return a=Le(a,h.mode,f,null),a.return=h,a;pr(h,a)}return null}function d(h,a,f,p){var k=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:o(h,a,""+f,p);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:return f.key===k?s(h,a,f,p):null;case Me:return f.key===k?c(h,a,f,p):null;case Zn:return k=f._init,d(h,a,k(f._payload),p)}if(kt(f)||ct(f))return k!==null?null:m(h,a,f,p,null);pr(h,f)}return null}function y(h,a,f,p,k){if(typeof p=="string"&&p!==""||typeof p=="number")return h=h.get(f)||null,o(a,h,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:return h=h.get(p.key===null?f:p.key)||null,s(a,h,p,k);case Me:return h=h.get(p.key===null?f:p.key)||null,c(a,h,p,k);case Zn:var L=p._init;return y(h,a,f,L(p._payload),k)}if(kt(p)||ct(p))return h=h.get(f)||null,m(a,h,p,k,null);pr(a,p)}return null}function C(h,a,f,p){for(var k=null,L=null,N=a,T=a=0,H=null;N!==null&&T<f.length;T++){N.index>T?(H=N,N=null):H=N.sibling;var P=d(h,N,f[T],p);if(P===null){N===null&&(N=H);break}n&&N&&P.alternate===null&&e(h,N),a=i(P,a,T),L===null?k=P:L.sibling=P,L=P,N=H}if(T===f.length)return t(h,N),j&&ye(h,T),k;if(N===null){for(;T<f.length;T++)N=g(h,f[T],p),N!==null&&(a=i(N,a,T),L===null?k=N:L.sibling=N,L=N);return j&&ye(h,T),k}for(N=r(h,N);T<f.length;T++)H=y(N,h,T,f[T],p),H!==null&&(n&&H.alternate!==null&&N.delete(H.key===null?T:H.key),a=i(H,a,T),L===null?k=H:L.sibling=H,L=H);return n&&N.forEach(function(Tn){return e(h,Tn)}),j&&ye(h,T),k}function w(h,a,f,p){var k=ct(f);if(typeof k!="function")throw Error(v(150));if(f=k.call(f),f==null)throw Error(v(151));for(var L=k=null,N=a,T=a=0,H=null,P=f.next();N!==null&&!P.done;T++,P=f.next()){N.index>T?(H=N,N=null):H=N.sibling;var Tn=d(h,N,P.value,p);if(Tn===null){N===null&&(N=H);break}n&&N&&Tn.alternate===null&&e(h,N),a=i(Tn,a,T),L===null?k=Tn:L.sibling=Tn,L=Tn,N=H}if(P.done)return t(h,N),j&&ye(h,T),k;if(N===null){for(;!P.done;T++,P=f.next())P=g(h,P.value,p),P!==null&&(a=i(P,a,T),L===null?k=P:L.sibling=P,L=P);return j&&ye(h,T),k}for(N=r(h,N);!P.done;T++,P=f.next())P=y(N,h,T,P.value,p),P!==null&&(n&&P.alternate!==null&&N.delete(P.key===null?T:P.key),a=i(P,a,T),L===null?k=P:L.sibling=P,L=P);return n&&N.forEach(function(st){return e(h,st)}),j&&ye(h,T),k}function M(h,a,f,p){if(typeof f=="object"&&f!==null&&f.type===Re&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:n:{for(var k=f.key,L=a;L!==null;){if(L.key===k){if(k=f.type,k===Re){if(L.tag===7){t(h,L.sibling),a=l(L,f.props.children),a.return=h,h=a;break n}}else if(L.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Zn&&So(k)===L.type){t(h,L.sibling),a=l(L,f.props),a.ref=gt(h,L,f),a.return=h,h=a;break n}t(h,L);break}else e(h,L);L=L.sibling}f.type===Re?(a=Le(f.props.children,h.mode,p,f.key),a.return=h,h=a):(p=Dr(f.type,f.key,f.props,null,h.mode,p),p.ref=gt(h,a,f),p.return=h,h=p)}return u(h);case Me:n:{for(L=f.key;a!==null;){if(a.key===L)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){t(h,a.sibling),a=l(a,f.children||[]),a.return=h,h=a;break n}else{t(h,a);break}else e(h,a);a=a.sibling}a=Ql(f,h.mode,p),a.return=h,h=a}return u(h);case Zn:return L=f._init,M(h,a,L(f._payload),p)}if(kt(f))return C(h,a,f,p);if(ct(f))return w(h,a,f,p);pr(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(t(h,a.sibling),a=l(a,f),a.return=h,h=a):(t(h,a),a=Kl(f,h.mode,p),a.return=h,h=a),u(h)):t(h,a)}return M}var et=ua(!0),oa=ua(!1),Kr=pe(null),Qr=null,He=null,hu=null;function fu(){hu=He=Qr=null}function du(n){var e=Kr.current;O(Kr),n._currentValue=e}function Li(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function qe(n,e){Qr=n,hu=He=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(hn=!0),n.firstContext=null)}function Ln(n){var e=n._currentValue;if(hu!==n)if(n={context:n,memoizedValue:e,next:null},He===null){if(Qr===null)throw Error(v(308));He=n,Qr.dependencies={lanes:0,firstContext:n}}else He=He.next=n;return e}var Se=null;function pu(n){Se===null?Se=[n]:Se.push(n)}function sa(n,e,t,r){var l=e.interleaved;return l===null?(t.next=t,pu(e)):(t.next=l.next,l.next=t),e.interleaved=t,Xn(n,r)}function Xn(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Jn=!1;function gu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aa(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Kn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function oe(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,Xn(n,t)}return l=r.interleaved,l===null?(e.next=e,pu(r)):(e.next=l.next,l.next=e),r.interleaved=e,Xn(n,t)}function Er(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,nu(n,t)}}function xo(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var u={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=u:i=i.next=u,t=t.next}while(t!==null);i===null?l=i=e:i=i.next=e}else l=i=e;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Wr(n,e,t,r){var l=n.updateQueue;Jn=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var s=o,c=s.next;s.next=null,u===null?i=c:u.next=c,u=s;var m=n.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==u&&(o===null?m.firstBaseUpdate=c:o.next=c,m.lastBaseUpdate=s))}if(i!==null){var g=l.baseState;u=0,m=c=s=null,o=i;do{var d=o.lane,y=o.eventTime;if((r&d)===d){m!==null&&(m=m.next={eventTime:y,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});n:{var C=n,w=o;switch(d=e,y=t,w.tag){case 1:if(C=w.payload,typeof C=="function"){g=C.call(y,g,d);break n}g=C;break n;case 3:C.flags=C.flags&-65537|128;case 0:if(C=w.payload,d=typeof C=="function"?C.call(y,g,d):C,d==null)break n;g=U({},g,d);break n;case 2:Jn=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=l.effects,d===null?l.effects=[o]:d.push(o))}else y={eventTime:y,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(c=m=y,s=g):m=m.next=y,u|=d;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;d=o,o=d.next,d.next=null,l.lastBaseUpdate=d,l.shared.pending=null}}while(!0);if(m===null&&(s=g),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=m,e=l.shared.interleaved,e!==null){l=e;do u|=l.lane,l=l.next;while(l!==e)}else i===null&&(l.shared.lanes=0);_e|=u,n.lanes=u,n.memoizedState=g}}function Eo(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var bt={},In=pe(bt),Ht=pe(bt),Kt=pe(bt);function xe(n){if(n===bt)throw Error(v(174));return n}function mu(n,e){switch(R(Kt,e),R(Ht,n),R(In,bt),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ii(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ii(e,n)}O(In),R(In,e)}function tt(){O(In),O(Ht),O(Kt)}function ca(n){xe(Kt.current);var e=xe(In.current),t=ii(e,n.type);e!==t&&(R(Ht,n),R(In,t))}function vu(n){Ht.current===n&&(O(In),O(Ht))}var I=pe(0);function Xr(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jl=[];function yu(){for(var n=0;n<jl.length;n++)jl[n]._workInProgressVersionPrimary=null;jl.length=0}var Lr=Yn.ReactCurrentDispatcher,Il=Yn.ReactCurrentBatchConfig,Ae=0,V=null,X=null,q=null,Gr=!1,Tt=!1,Qt=0,Yh=0;function en(){throw Error(v(321))}function ku(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Mn(n[t],e[t]))return!1;return!0}function Cu(n,e,t,r,l,i){if(Ae=i,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Lr.current=n===null||n.memoizedState===null?bh:nf,n=t(r,l),Tt){i=0;do{if(Tt=!1,Qt=0,25<=i)throw Error(v(301));i+=1,q=X=null,e.updateQueue=null,Lr.current=ef,n=t(r,l)}while(Tt)}if(Lr.current=Yr,e=X!==null&&X.next!==null,Ae=0,q=X=V=null,Gr=!1,e)throw Error(v(300));return n}function wu(){var n=Qt!==0;return Qt=0,n}function Fn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=n:q=q.next=n,q}function Nn(){if(X===null){var n=V.alternate;n=n!==null?n.memoizedState:null}else n=X.next;var e=q===null?V.memoizedState:q.next;if(e!==null)q=e,X=n;else{if(n===null)throw Error(v(310));X=n,n={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?V.memoizedState=q=n:q=q.next=n}return q}function Wt(n,e){return typeof e=="function"?e(n):e}function Vl(n){var e=Nn(),t=e.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=n;var r=X,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var o=u=null,s=null,c=i;do{var m=c.lane;if((Ae&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:n(r,c.action);else{var g={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(o=s=g,u=r):s=s.next=g,V.lanes|=m,_e|=m}c=c.next}while(c!==null&&c!==i);s===null?u=r:s.next=o,Mn(r,e.memoizedState)||(hn=!0),e.memoizedState=r,e.baseState=u,e.baseQueue=s,t.lastRenderedState=r}if(n=t.interleaved,n!==null){l=n;do i=l.lane,V.lanes|=i,_e|=i,l=l.next;while(l!==n)}else l===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ul(n){var e=Nn(),t=e.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=n;var r=t.dispatch,l=t.pending,i=e.memoizedState;if(l!==null){t.pending=null;var u=l=l.next;do i=n(i,u.action),u=u.next;while(u!==l);Mn(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,r]}function ha(){}function fa(n,e){var t=V,r=Nn(),l=e(),i=!Mn(r.memoizedState,l);if(i&&(r.memoizedState=l,hn=!0),r=r.queue,Su(ga.bind(null,t,r,n),[n]),r.getSnapshot!==e||i||q!==null&&q.memoizedState.tag&1){if(t.flags|=2048,Xt(9,pa.bind(null,t,r,l,e),void 0,null),Z===null)throw Error(v(349));Ae&30||da(t,e,l)}return l}function da(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function pa(n,e,t,r){e.value=t,e.getSnapshot=r,ma(e)&&va(n)}function ga(n,e,t){return t(function(){ma(e)&&va(n)})}function ma(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Mn(n,t)}catch{return!0}}function va(n){var e=Xn(n,1);e!==null&&Bn(e,n,1,-1)}function Lo(n){var e=Fn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:n},e.queue=n,n=n.dispatch=Jh.bind(null,V,n),[e.memoizedState,n]}function Xt(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function ya(){return Nn().memoizedState}function Nr(n,e,t,r){var l=Fn();V.flags|=n,l.memoizedState=Xt(1|e,t,void 0,r===void 0?null:r)}function ol(n,e,t,r){var l=Nn();r=r===void 0?null:r;var i=void 0;if(X!==null){var u=X.memoizedState;if(i=u.destroy,r!==null&&ku(r,u.deps)){l.memoizedState=Xt(e,t,i,r);return}}V.flags|=n,l.memoizedState=Xt(1|e,t,i,r)}function No(n,e){return Nr(8390656,8,n,e)}function Su(n,e){return ol(2048,8,n,e)}function ka(n,e){return ol(4,2,n,e)}function Ca(n,e){return ol(4,4,n,e)}function wa(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Sa(n,e,t){return t=t!=null?t.concat([n]):null,ol(4,4,wa.bind(null,e,n),t)}function xu(){}function xa(n,e){var t=Nn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&ku(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function Ea(n,e){var t=Nn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&ku(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function La(n,e,t){return Ae&21?(Mn(t,e)||(t=Ds(),V.lanes|=t,_e|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,hn=!0),n.memoizedState=t)}function qh(n,e){var t=B;B=t!==0&&4>t?t:4,n(!0);var r=Il.transition;Il.transition={};try{n(!1),e()}finally{B=t,Il.transition=r}}function Na(){return Nn().memoizedState}function Zh(n,e,t){var r=ae(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ta(n))Aa(e,t);else if(t=sa(n,e,t,r),t!==null){var l=on();Bn(t,n,r,l),_a(t,e,r)}}function Jh(n,e,t){var r=ae(n),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ta(n))Aa(e,l);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,o=i(u,t);if(l.hasEagerState=!0,l.eagerState=o,Mn(o,u)){var s=e.interleaved;s===null?(l.next=l,pu(e)):(l.next=s.next,s.next=l),e.interleaved=l;return}}catch{}finally{}t=sa(n,e,l,r),t!==null&&(l=on(),Bn(t,n,r,l),_a(t,e,r))}}function Ta(n){var e=n.alternate;return n===V||e!==null&&e===V}function Aa(n,e){Tt=Gr=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function _a(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,nu(n,t)}}var Yr={readContext:Ln,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},bh={readContext:Ln,useCallback:function(n,e){return Fn().memoizedState=[n,e===void 0?null:e],n},useContext:Ln,useEffect:No,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Nr(4194308,4,wa.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Nr(4194308,4,n,e)},useInsertionEffect:function(n,e){return Nr(4,2,n,e)},useMemo:function(n,e){var t=Fn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Fn();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=Zh.bind(null,V,n),[r.memoizedState,n]},useRef:function(n){var e=Fn();return n={current:n},e.memoizedState=n},useState:Lo,useDebugValue:xu,useDeferredValue:function(n){return Fn().memoizedState=n},useTransition:function(){var n=Lo(!1),e=n[0];return n=qh.bind(null,n[1]),Fn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=V,l=Fn();if(j){if(t===void 0)throw Error(v(407));t=t()}else{if(t=e(),Z===null)throw Error(v(349));Ae&30||da(r,e,t)}l.memoizedState=t;var i={value:t,getSnapshot:e};return l.queue=i,No(ga.bind(null,r,i,n),[n]),r.flags|=2048,Xt(9,pa.bind(null,r,i,t,e),void 0,null),t},useId:function(){var n=Fn(),e=Z.identifierPrefix;if(j){var t=Hn,r=$n;t=(r&~(1<<32-zn(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=Qt++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Yh++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},nf={readContext:Ln,useCallback:xa,useContext:Ln,useEffect:Su,useImperativeHandle:Sa,useInsertionEffect:ka,useLayoutEffect:Ca,useMemo:Ea,useReducer:Vl,useRef:ya,useState:function(){return Vl(Wt)},useDebugValue:xu,useDeferredValue:function(n){var e=Nn();return La(e,X.memoizedState,n)},useTransition:function(){var n=Vl(Wt)[0],e=Nn().memoizedState;return[n,e]},useMutableSource:ha,useSyncExternalStore:fa,useId:Na,unstable_isNewReconciler:!1},ef={readContext:Ln,useCallback:xa,useContext:Ln,useEffect:Su,useImperativeHandle:Sa,useInsertionEffect:ka,useLayoutEffect:Ca,useMemo:Ea,useReducer:Ul,useRef:ya,useState:function(){return Ul(Wt)},useDebugValue:xu,useDeferredValue:function(n){var e=Nn();return X===null?e.memoizedState=n:La(e,X.memoizedState,n)},useTransition:function(){var n=Ul(Wt)[0],e=Nn().memoizedState;return[n,e]},useMutableSource:ha,useSyncExternalStore:fa,useId:Na,unstable_isNewReconciler:!1};function _n(n,e){if(n&&n.defaultProps){e=U({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Ni(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:U({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var sl={isMounted:function(n){return(n=n._reactInternals)?ze(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=on(),l=ae(n),i=Kn(r,l);i.payload=e,t!=null&&(i.callback=t),e=oe(n,i,l),e!==null&&(Bn(e,n,l,r),Er(e,n,l))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=on(),l=ae(n),i=Kn(r,l);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=oe(n,i,l),e!==null&&(Bn(e,n,l,r),Er(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=on(),r=ae(n),l=Kn(t,r);l.tag=2,e!=null&&(l.callback=e),e=oe(n,l,r),e!==null&&(Bn(e,n,r,t),Er(e,n,r))}};function To(n,e,t,r,l,i,u){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,i,u):e.prototype&&e.prototype.isPureReactComponent?!It(t,r)||!It(l,i):!0}function Da(n,e,t){var r=!1,l=fe,i=e.contextType;return typeof i=="object"&&i!==null?i=Ln(i):(l=dn(e)?Ne:ln.current,r=e.contextTypes,i=(r=r!=null)?be(n,l):fe),e=new e(t,i),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sl,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=l,n.__reactInternalMemoizedMaskedChildContext=i),e}function Ao(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&sl.enqueueReplaceState(e,e.state,null)}function Ti(n,e,t,r){var l=n.stateNode;l.props=t,l.state=n.memoizedState,l.refs={},gu(n);var i=e.contextType;typeof i=="object"&&i!==null?l.context=Ln(i):(i=dn(e)?Ne:ln.current,l.context=be(n,i)),l.state=n.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ni(n,e,i,t),l.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(e=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),e!==l.state&&sl.enqueueReplaceState(l,l.state,null),Wr(n,t,l,r),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308)}function rt(n,e){try{var t="",r=e;do t+=_c(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:n,source:e,stack:l,digest:null}}function $l(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ai(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var tf=typeof WeakMap=="function"?WeakMap:Map;function Pa(n,e,t){t=Kn(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Zr||(Zr=!0,ji=r),Ai(n,e)},t}function za(n,e,t){t=Kn(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var l=e.value;t.payload=function(){return r(l)},t.callback=function(){Ai(n,e)}}var i=n.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ai(n,e),typeof r!="function"&&(se===null?se=new Set([this]):se.add(this));var u=e.stack;this.componentDidCatch(e.value,{componentStack:u!==null?u:""})}),t}function _o(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new tf;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(t)||(l.add(t),n=vf.bind(null,n,e,t),e.then(n,n))}function Do(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Po(n,e,t,r,l){return n.mode&1?(n.flags|=65536,n.lanes=l,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Kn(-1,1),e.tag=2,oe(t,e,1))),t.lanes|=1),n)}var rf=Yn.ReactCurrentOwner,hn=!1;function un(n,e,t,r){e.child=n===null?oa(e,null,t,r):et(e,n.child,t,r)}function zo(n,e,t,r,l){t=t.render;var i=e.ref;return qe(e,l),r=Cu(n,e,t,r,i,l),t=wu(),n!==null&&!hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~l,Gn(n,e,l)):(j&&t&&su(e),e.flags|=1,un(n,e,r,l),e.child)}function Bo(n,e,t,r,l){if(n===null){var i=t.type;return typeof i=="function"&&!Pu(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=i,Ba(n,e,i,r,l)):(n=Dr(t.type,null,r,e,e.mode,l),n.ref=e.ref,n.return=e,e.child=n)}if(i=n.child,!(n.lanes&l)){var u=i.memoizedProps;if(t=t.compare,t=t!==null?t:It,t(u,r)&&n.ref===e.ref)return Gn(n,e,l)}return e.flags|=1,n=ce(i,r),n.ref=e.ref,n.return=e,e.child=n}function Ba(n,e,t,r,l){if(n!==null){var i=n.memoizedProps;if(It(i,r)&&n.ref===e.ref)if(hn=!1,e.pendingProps=r=i,(n.lanes&l)!==0)n.flags&131072&&(hn=!0);else return e.lanes=n.lanes,Gn(n,e,l)}return _i(n,e,t,r,l)}function Ma(n,e,t){var r=e.pendingProps,l=r.children,i=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Qe,gn),gn|=t;else{if(!(t&1073741824))return n=i!==null?i.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,R(Qe,gn),gn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,R(Qe,gn),gn|=r}else i!==null?(r=i.baseLanes|t,e.memoizedState=null):r=t,R(Qe,gn),gn|=r;return un(n,e,l,t),e.child}function Ra(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function _i(n,e,t,r,l){var i=dn(t)?Ne:ln.current;return i=be(e,i),qe(e,l),t=Cu(n,e,t,r,i,l),r=wu(),n!==null&&!hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~l,Gn(n,e,l)):(j&&r&&su(e),e.flags|=1,un(n,e,t,l),e.child)}function Mo(n,e,t,r,l){if(dn(t)){var i=!0;Ur(e)}else i=!1;if(qe(e,l),e.stateNode===null)Tr(n,e),Da(e,t,r),Ti(e,t,r,l),r=!0;else if(n===null){var u=e.stateNode,o=e.memoizedProps;u.props=o;var s=u.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ln(c):(c=dn(t)?Ne:ln.current,c=be(e,c));var m=t.getDerivedStateFromProps,g=typeof m=="function"||typeof u.getSnapshotBeforeUpdate=="function";g||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o!==r||s!==c)&&Ao(e,u,r,c),Jn=!1;var d=e.memoizedState;u.state=d,Wr(e,r,u,l),s=e.memoizedState,o!==r||d!==s||fn.current||Jn?(typeof m=="function"&&(Ni(e,t,m,r),s=e.memoizedState),(o=Jn||To(e,t,o,r,d,s,c))?(g||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=s),u.props=r,u.state=s,u.context=c,r=o):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{u=e.stateNode,aa(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:_n(e.type,o),u.props=c,g=e.pendingProps,d=u.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ln(s):(s=dn(t)?Ne:ln.current,s=be(e,s));var y=t.getDerivedStateFromProps;(m=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o!==g||d!==s)&&Ao(e,u,r,s),Jn=!1,d=e.memoizedState,u.state=d,Wr(e,r,u,l);var C=e.memoizedState;o!==g||d!==C||fn.current||Jn?(typeof y=="function"&&(Ni(e,t,y,r),C=e.memoizedState),(c=Jn||To(e,t,c,r,d,C,s)||!1)?(m||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,C,s),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,C,s)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),u.props=r,u.state=C,u.context=s,r=c):(typeof u.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),r=!1)}return Di(n,e,t,r,i,l)}function Di(n,e,t,r,l,i){Ra(n,e);var u=(e.flags&128)!==0;if(!r&&!u)return l&&ko(e,t,!1),Gn(n,e,i);r=e.stateNode,rf.current=e;var o=u&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&u?(e.child=et(e,n.child,null,i),e.child=et(e,null,o,i)):un(n,e,o,i),e.memoizedState=r.state,l&&ko(e,t,!0),e.child}function Fa(n){var e=n.stateNode;e.pendingContext?yo(n,e.pendingContext,e.pendingContext!==e.context):e.context&&yo(n,e.context,!1),mu(n,e.containerInfo)}function Ro(n,e,t,r,l){return nt(),cu(l),e.flags|=256,un(n,e,t,r),e.child}var Pi={dehydrated:null,treeContext:null,retryLane:0};function zi(n){return{baseLanes:n,cachePool:null,transitions:null}}function Oa(n,e,t){var r=e.pendingProps,l=I.current,i=!1,u=(e.flags&128)!==0,o;if((o=u)||(o=n!==null&&n.memoizedState===null?!1:(l&2)!==0),o?(i=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(l|=1),R(I,l&1),n===null)return Ei(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(u=r.children,n=r.fallback,i?(r=e.mode,i=e.child,u={mode:"hidden",children:u},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=u):i=hl(u,r,0,null),n=Le(n,r,t,null),i.return=e,n.return=e,i.sibling=n,e.child=i,e.child.memoizedState=zi(t),e.memoizedState=Pi,n):Eu(e,u));if(l=n.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return lf(n,e,u,r,o,l,t);if(i){i=r.fallback,u=e.mode,l=n.child,o=l.sibling;var s={mode:"hidden",children:r.children};return!(u&1)&&e.child!==l?(r=e.child,r.childLanes=0,r.pendingProps=s,e.deletions=null):(r=ce(l,s),r.subtreeFlags=l.subtreeFlags&14680064),o!==null?i=ce(o,i):(i=Le(i,u,t,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,u=n.child.memoizedState,u=u===null?zi(t):{baseLanes:u.baseLanes|t,cachePool:null,transitions:u.transitions},i.memoizedState=u,i.childLanes=n.childLanes&~t,e.memoizedState=Pi,r}return i=n.child,n=i.sibling,r=ce(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function Eu(n,e){return e=hl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function gr(n,e,t,r){return r!==null&&cu(r),et(e,n.child,null,t),n=Eu(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function lf(n,e,t,r,l,i,u){if(t)return e.flags&256?(e.flags&=-257,r=$l(Error(v(422))),gr(n,e,u,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(i=r.fallback,l=e.mode,r=hl({mode:"visible",children:r.children},l,0,null),i=Le(i,l,u,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&et(e,n.child,null,u),e.child.memoizedState=zi(u),e.memoizedState=Pi,i);if(!(e.mode&1))return gr(n,e,u,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(v(419)),r=$l(i,r,void 0),gr(n,e,u,r)}if(o=(u&n.childLanes)!==0,hn||o){if(r=Z,r!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|u)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Xn(n,l),Bn(r,n,l,-1))}return Du(),r=$l(Error(v(421))),gr(n,e,u,r)}return l.data==="$?"?(e.flags|=128,e.child=n.child,e=yf.bind(null,n),l._reactRetry=e,null):(n=i.treeContext,mn=ue(l.nextSibling),vn=e,j=!0,Pn=null,n!==null&&(wn[Sn++]=$n,wn[Sn++]=Hn,wn[Sn++]=Te,$n=n.id,Hn=n.overflow,Te=e),e=Eu(e,r.children),e.flags|=4096,e)}function Fo(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Li(n.return,e,t)}function Hl(n,e,t,r,l){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function ja(n,e,t){var r=e.pendingProps,l=r.revealOrder,i=r.tail;if(un(n,e,r.children,t),r=I.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fo(n,t,e);else if(n.tag===19)Fo(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(R(I,r),!(e.mode&1))e.memoizedState=null;else switch(l){case"forwards":for(t=e.child,l=null;t!==null;)n=t.alternate,n!==null&&Xr(n)===null&&(l=t),t=t.sibling;t=l,t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),Hl(e,!1,l,t,i);break;case"backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(n=l.alternate,n!==null&&Xr(n)===null){e.child=l;break}n=l.sibling,l.sibling=t,t=l,l=n}Hl(e,!0,t,null,i);break;case"together":Hl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tr(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Gn(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),_e|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(v(153));if(e.child!==null){for(n=e.child,t=ce(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ce(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function uf(n,e,t){switch(e.tag){case 3:Fa(e),nt();break;case 5:ca(e);break;case 1:dn(e.type)&&Ur(e);break;case 4:mu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,l=e.memoizedProps.value;R(Kr,r._currentValue),r._currentValue=l;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(R(I,I.current&1),e.flags|=128,null):t&e.child.childLanes?Oa(n,e,t):(R(I,I.current&1),n=Gn(n,e,t),n!==null?n.sibling:null);R(I,I.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return ja(n,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),R(I,I.current),r)break;return null;case 22:case 23:return e.lanes=0,Ma(n,e,t)}return Gn(n,e,t)}var Ia,Bi,Va,Ua;Ia=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Bi=function(){};Va=function(n,e,t,r){var l=n.memoizedProps;if(l!==r){n=e.stateNode,xe(In.current);var i=null;switch(t){case"input":l=ei(n,l),r=ei(n,r),i=[];break;case"select":l=U({},l,{value:void 0}),r=U({},r,{value:void 0}),i=[];break;case"textarea":l=li(n,l),r=li(n,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=Ir)}ui(t,r);var u;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var o=l[c];for(u in o)o.hasOwnProperty(u)&&(t||(t={}),t[u]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zt.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(o=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==o&&(s!=null||o!=null))if(c==="style")if(o){for(u in o)!o.hasOwnProperty(u)||s&&s.hasOwnProperty(u)||(t||(t={}),t[u]="");for(u in s)s.hasOwnProperty(u)&&o[u]!==s[u]&&(t||(t={}),t[u]=s[u])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zt.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&F("scroll",n),i||o===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Ua=function(n,e,t,r){t!==r&&(e.flags|=4)};function mt(n,e){if(!j)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function tn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var l=n.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function of(n,e,t){var r=e.pendingProps;switch(au(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return dn(e.type)&&Vr(),tn(e),null;case 3:return r=e.stateNode,tt(),O(fn),O(ln),yu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(dr(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pn!==null&&(Ui(Pn),Pn=null))),Bi(n,e),tn(e),null;case 5:vu(e);var l=xe(Kt.current);if(t=e.type,n!==null&&e.stateNode!=null)Va(n,e,t,r,l),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(v(166));return tn(e),null}if(n=xe(In.current),dr(e)){r=e.stateNode,t=e.type;var i=e.memoizedProps;switch(r[On]=e,r[$t]=i,n=(e.mode&1)!==0,t){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<wt.length;l++)F(wt[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Ku(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":Wu(r,i),F("invalid",r)}ui(t,i),l=null;for(var u in i)if(i.hasOwnProperty(u)){var o=i[u];u==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,o,n),l=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,o,n),l=["children",""+o]):zt.hasOwnProperty(u)&&o!=null&&u==="onScroll"&&F("scroll",r)}switch(t){case"input":lr(r),Qu(r,i,!0);break;case"textarea":lr(r),Xu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ir)}r=l,e.updateQueue=r,r!==null&&(e.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=gs(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=u.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=u.createElement(t,{is:r.is}):(n=u.createElement(t),t==="select"&&(u=n,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):n=u.createElementNS(n,t),n[On]=e,n[$t]=r,Ia(n,e,!1,!1),e.stateNode=n;n:{switch(u=oi(t,r),t){case"dialog":F("cancel",n),F("close",n),l=r;break;case"iframe":case"object":case"embed":F("load",n),l=r;break;case"video":case"audio":for(l=0;l<wt.length;l++)F(wt[l],n);l=r;break;case"source":F("error",n),l=r;break;case"img":case"image":case"link":F("error",n),F("load",n),l=r;break;case"details":F("toggle",n),l=r;break;case"input":Ku(n,r),l=ei(n,r),F("invalid",n);break;case"option":l=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},l=U({},r,{value:void 0}),F("invalid",n);break;case"textarea":Wu(n,r),l=li(n,r),F("invalid",n);break;default:l=r}ui(t,l),o=l;for(i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="style"?ys(n,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ms(n,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Bt(n,s):typeof s=="number"&&Bt(n,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zt.hasOwnProperty(i)?s!=null&&i==="onScroll"&&F("scroll",n):s!=null&&Gi(n,i,s,u))}switch(t){case"input":lr(n),Qu(n,r,!1);break;case"textarea":lr(n),Xu(n);break;case"option":r.value!=null&&n.setAttribute("value",""+he(r.value));break;case"select":n.multiple=!!r.multiple,i=r.value,i!=null?We(n,!!r.multiple,i,!1):r.defaultValue!=null&&We(n,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(n.onclick=Ir)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break n;case"img":r=!0;break n;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(n&&e.stateNode!=null)Ua(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(v(166));if(t=xe(Kt.current),xe(In.current),dr(e)){if(r=e.stateNode,t=e.memoizedProps,r[On]=e,(i=r.nodeValue!==t)&&(n=vn,n!==null))switch(n.tag){case 3:fr(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,t,(n.mode&1)!==0)}i&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[On]=e,e.stateNode=r}return tn(e),null;case 13:if(O(I),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(j&&mn!==null&&e.mode&1&&!(e.flags&128))ia(),nt(),e.flags|=98560,i=!1;else if(i=dr(e),r!==null&&r.dehydrated!==null){if(n===null){if(!i)throw Error(v(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[On]=e}else nt(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),i=!1}else Pn!==null&&(Ui(Pn),Pn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||I.current&1?G===0&&(G=3):Du())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return tt(),Bi(n,e),n===null&&Vt(e.stateNode.containerInfo),tn(e),null;case 10:return du(e.type._context),tn(e),null;case 17:return dn(e.type)&&Vr(),tn(e),null;case 19:if(O(I),i=e.memoizedState,i===null)return tn(e),null;if(r=(e.flags&128)!==0,u=i.rendering,u===null)if(r)mt(i,!1);else{if(G!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(u=Xr(n),u!==null){for(e.flags|=128,mt(i,!1),r=u.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)i=t,n=r,i.flags&=14680066,u=i.alternate,u===null?(i.childLanes=0,i.lanes=n,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=u.childLanes,i.lanes=u.lanes,i.child=u.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=u.memoizedProps,i.memoizedState=u.memoizedState,i.updateQueue=u.updateQueue,i.type=u.type,n=u.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return R(I,I.current&1|2),e.child}n=n.sibling}i.tail!==null&&Q()>lt&&(e.flags|=128,r=!0,mt(i,!1),e.lanes=4194304)}else{if(!r)if(n=Xr(u),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),mt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!j)return tn(e),null}else 2*Q()-i.renderingStartTime>lt&&t!==1073741824&&(e.flags|=128,r=!0,mt(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Q(),e.sibling=null,t=I.current,R(I,r?t&1|2:t&1),e):(tn(e),null);case 22:case 23:return _u(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?gn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(v(156,e.tag))}function sf(n,e){switch(au(e),e.tag){case 1:return dn(e.type)&&Vr(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return tt(),O(fn),O(ln),yu(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return vu(e),null;case 13:if(O(I),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(v(340));nt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return O(I),null;case 4:return tt(),null;case 10:return du(e.type._context),null;case 22:case 23:return _u(),null;case 24:return null;default:return null}}var mr=!1,rn=!1,af=typeof WeakSet=="function"?WeakSet:Set,x=null;function Ke(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){$(n,e,r)}else t.current=null}function Mi(n,e,t){try{t()}catch(r){$(n,e,r)}}var Oo=!1;function cf(n,e){if(vi=Fr,n=Ws(),ou(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break n}var u=0,o=-1,s=-1,c=0,m=0,g=n,d=null;e:for(;;){for(var y;g!==t||l!==0&&g.nodeType!==3||(o=u+l),g!==i||r!==0&&g.nodeType!==3||(s=u+r),g.nodeType===3&&(u+=g.nodeValue.length),(y=g.firstChild)!==null;)d=g,g=y;for(;;){if(g===n)break e;if(d===t&&++c===l&&(o=u),d===i&&++m===r&&(s=u),(y=g.nextSibling)!==null)break;g=d,d=g.parentNode}g=y}t=o===-1||s===-1?null:{start:o,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(yi={focusedElem:n,selectionRange:t},Fr=!1,x=e;x!==null;)if(e=x,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,x=n;else for(;x!==null;){e=x;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var w=C.memoizedProps,M=C.memoizedState,h=e.stateNode,a=h.getSnapshotBeforeUpdate(e.elementType===e.type?w:_n(e.type,w),M);h.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(p){$(e,e.return,p)}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}return C=Oo,Oo=!1,C}function At(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var i=l.destroy;l.destroy=void 0,i!==void 0&&Mi(e,t,i)}l=l.next}while(l!==r)}}function al(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function Ri(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function $a(n){var e=n.alternate;e!==null&&(n.alternate=null,$a(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[On],delete e[$t],delete e[wi],delete e[Qh],delete e[Wh])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ha(n){return n.tag===5||n.tag===3||n.tag===4}function jo(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Ha(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fi(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ir));else if(r!==4&&(n=n.child,n!==null))for(Fi(n,e,t),n=n.sibling;n!==null;)Fi(n,e,t),n=n.sibling}function Oi(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(Oi(n,e,t),n=n.sibling;n!==null;)Oi(n,e,t),n=n.sibling}var J=null,Dn=!1;function qn(n,e,t){for(t=t.child;t!==null;)Ka(n,e,t),t=t.sibling}function Ka(n,e,t){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(el,t)}catch{}switch(t.tag){case 5:rn||Ke(t,e);case 6:var r=J,l=Dn;J=null,qn(n,e,t),J=r,Dn=l,J!==null&&(Dn?(n=J,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Dn?(n=J,t=t.stateNode,n.nodeType===8?Fl(n.parentNode,t):n.nodeType===1&&Fl(n,t),Ot(n)):Fl(J,t.stateNode));break;case 4:r=J,l=Dn,J=t.stateNode.containerInfo,Dn=!0,qn(n,e,t),J=r,Dn=l;break;case 0:case 11:case 14:case 15:if(!rn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,u=i.destroy;i=i.tag,u!==void 0&&(i&2||i&4)&&Mi(t,e,u),l=l.next}while(l!==r)}qn(n,e,t);break;case 1:if(!rn&&(Ke(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(o){$(t,e,o)}qn(n,e,t);break;case 21:qn(n,e,t);break;case 22:t.mode&1?(rn=(r=rn)||t.memoizedState!==null,qn(n,e,t),rn=r):qn(n,e,t);break;default:qn(n,e,t)}}function Io(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new af),e.forEach(function(r){var l=kf.bind(null,n,r);t.has(r)||(t.add(r),r.then(l,l))})}}function An(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=n,u=e,o=u;n:for(;o!==null;){switch(o.tag){case 5:J=o.stateNode,Dn=!1;break n;case 3:J=o.stateNode.containerInfo,Dn=!0;break n;case 4:J=o.stateNode.containerInfo,Dn=!0;break n}o=o.return}if(J===null)throw Error(v(160));Ka(i,u,l),J=null,Dn=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){$(l,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qa(e,n),e=e.sibling}function Qa(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(An(e,n),Rn(n),r&4){try{At(3,n,n.return),al(3,n)}catch(w){$(n,n.return,w)}try{At(5,n,n.return)}catch(w){$(n,n.return,w)}}break;case 1:An(e,n),Rn(n),r&512&&t!==null&&Ke(t,t.return);break;case 5:if(An(e,n),Rn(n),r&512&&t!==null&&Ke(t,t.return),n.flags&32){var l=n.stateNode;try{Bt(l,"")}catch(w){$(n,n.return,w)}}if(r&4&&(l=n.stateNode,l!=null)){var i=n.memoizedProps,u=t!==null?t.memoizedProps:i,o=n.type,s=n.updateQueue;if(n.updateQueue=null,s!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&ds(l,i),oi(o,u);var c=oi(o,i);for(u=0;u<s.length;u+=2){var m=s[u],g=s[u+1];m==="style"?ys(l,g):m==="dangerouslySetInnerHTML"?ms(l,g):m==="children"?Bt(l,g):Gi(l,m,g,c)}switch(o){case"input":ti(l,i);break;case"textarea":ps(l,i);break;case"select":var d=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?We(l,!!i.multiple,y,!1):d!==!!i.multiple&&(i.defaultValue!=null?We(l,!!i.multiple,i.defaultValue,!0):We(l,!!i.multiple,i.multiple?[]:"",!1))}l[$t]=i}catch(w){$(n,n.return,w)}}break;case 6:if(An(e,n),Rn(n),r&4){if(n.stateNode===null)throw Error(v(162));l=n.stateNode,i=n.memoizedProps;try{l.nodeValue=i}catch(w){$(n,n.return,w)}}break;case 3:if(An(e,n),Rn(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ot(e.containerInfo)}catch(w){$(n,n.return,w)}break;case 4:An(e,n),Rn(n);break;case 13:An(e,n),Rn(n),l=n.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Tu=Q())),r&4&&Io(n);break;case 22:if(m=t!==null&&t.memoizedState!==null,n.mode&1?(rn=(c=rn)||m,An(e,n),rn=c):An(e,n),Rn(n),r&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!m&&n.mode&1)for(x=n,m=n.child;m!==null;){for(g=x=m;x!==null;){switch(d=x,y=d.child,d.tag){case 0:case 11:case 14:case 15:At(4,d,d.return);break;case 1:Ke(d,d.return);var C=d.stateNode;if(typeof C.componentWillUnmount=="function"){r=d,t=d.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(w){$(r,t,w)}}break;case 5:Ke(d,d.return);break;case 22:if(d.memoizedState!==null){Uo(g);continue}}y!==null?(y.return=d,x=y):Uo(g)}m=m.sibling}n:for(m=null,g=n;;){if(g.tag===5){if(m===null){m=g;try{l=g.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=g.stateNode,s=g.memoizedProps.style,u=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=vs("display",u))}catch(w){$(n,n.return,w)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(w){$(n,n.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===n)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break n;for(;g.sibling===null;){if(g.return===null||g.return===n)break n;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:An(e,n),Rn(n),r&4&&Io(n);break;case 21:break;default:An(e,n),Rn(n)}}function Rn(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(Ha(t)){var r=t;break n}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Bt(l,""),r.flags&=-33);var i=jo(n);Oi(n,i,l);break;case 3:case 4:var u=r.stateNode.containerInfo,o=jo(n);Fi(n,o,u);break;default:throw Error(v(161))}}catch(s){$(n,n.return,s)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function hf(n,e,t){x=n,Wa(n)}function Wa(n,e,t){for(var r=(n.mode&1)!==0;x!==null;){var l=x,i=l.child;if(l.tag===22&&r){var u=l.memoizedState!==null||mr;if(!u){var o=l.alternate,s=o!==null&&o.memoizedState!==null||rn;o=mr;var c=rn;if(mr=u,(rn=s)&&!c)for(x=l;x!==null;)u=x,s=u.child,u.tag===22&&u.memoizedState!==null?$o(l):s!==null?(s.return=u,x=s):$o(l);for(;i!==null;)x=i,Wa(i),i=i.sibling;x=l,mr=o,rn=c}Vo(n)}else l.subtreeFlags&8772&&i!==null?(i.return=l,x=i):Vo(n)}}function Vo(n){for(;x!==null;){var e=x;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||al(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rn)if(t===null)r.componentDidMount();else{var l=e.elementType===e.type?t.memoizedProps:_n(e.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Eo(e,i,r);break;case 3:var u=e.updateQueue;if(u!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Eo(e,u,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var s=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Ot(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}rn||e.flags&512&&Ri(e)}catch(d){$(e,e.return,d)}}if(e===n){x=null;break}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}}function Uo(n){for(;x!==null;){var e=x;if(e===n){x=null;break}var t=e.sibling;if(t!==null){t.return=e.return,x=t;break}x=e.return}}function $o(n){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{al(4,e)}catch(s){$(e,t,s)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var l=e.return;try{r.componentDidMount()}catch(s){$(e,l,s)}}var i=e.return;try{Ri(e)}catch(s){$(e,i,s)}break;case 5:var u=e.return;try{Ri(e)}catch(s){$(e,u,s)}}}catch(s){$(e,e.return,s)}if(e===n){x=null;break}var o=e.sibling;if(o!==null){o.return=e.return,x=o;break}x=e.return}}var ff=Math.ceil,qr=Yn.ReactCurrentDispatcher,Lu=Yn.ReactCurrentOwner,En=Yn.ReactCurrentBatchConfig,z=0,Z=null,W=null,b=0,gn=0,Qe=pe(0),G=0,Gt=null,_e=0,cl=0,Nu=0,_t=null,cn=null,Tu=0,lt=1/0,Vn=null,Zr=!1,ji=null,se=null,vr=!1,te=null,Jr=0,Dt=0,Ii=null,Ar=-1,_r=0;function on(){return z&6?Q():Ar!==-1?Ar:Ar=Q()}function ae(n){return n.mode&1?z&2&&b!==0?b&-b:Gh.transition!==null?(_r===0&&(_r=Ds()),_r):(n=B,n!==0||(n=window.event,n=n===void 0?16:Os(n.type)),n):1}function Bn(n,e,t,r){if(50<Dt)throw Dt=0,Ii=null,Error(v(185));qt(n,t,r),(!(z&2)||n!==Z)&&(n===Z&&(!(z&2)&&(cl|=t),G===4&&ne(n,b)),pn(n,r),t===1&&z===0&&!(e.mode&1)&&(lt=Q()+500,ul&&ge()))}function pn(n,e){var t=n.callbackNode;Gc(n,e);var r=Rr(n,n===Z?b:0);if(r===0)t!==null&&qu(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&qu(t),e===1)n.tag===0?Xh(Ho.bind(null,n)):ta(Ho.bind(null,n)),Hh(function(){!(z&6)&&ge()}),t=null;else{switch(Ps(r)){case 1:t=bi;break;case 4:t=As;break;case 16:t=Mr;break;case 536870912:t=_s;break;default:t=Mr}t=nc(t,Xa.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Xa(n,e){if(Ar=-1,_r=0,z&6)throw Error(v(327));var t=n.callbackNode;if(Ze()&&n.callbackNode!==t)return null;var r=Rr(n,n===Z?b:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=br(n,r);else{e=r;var l=z;z|=2;var i=Ya();(Z!==n||b!==e)&&(Vn=null,lt=Q()+500,Ee(n,e));do try{gf();break}catch(o){Ga(n,o)}while(!0);fu(),qr.current=i,z=l,W!==null?e=0:(Z=null,b=0,e=G)}if(e!==0){if(e===2&&(l=fi(n),l!==0&&(r=l,e=Vi(n,l))),e===1)throw t=Gt,Ee(n,0),ne(n,r),pn(n,Q()),t;if(e===6)ne(n,r);else{if(l=n.current.alternate,!(r&30)&&!df(l)&&(e=br(n,r),e===2&&(i=fi(n),i!==0&&(r=i,e=Vi(n,i))),e===1))throw t=Gt,Ee(n,0),ne(n,r),pn(n,Q()),t;switch(n.finishedWork=l,n.finishedLanes=r,e){case 0:case 1:throw Error(v(345));case 2:ke(n,cn,Vn);break;case 3:if(ne(n,r),(r&130023424)===r&&(e=Tu+500-Q(),10<e)){if(Rr(n,0)!==0)break;if(l=n.suspendedLanes,(l&r)!==r){on(),n.pingedLanes|=n.suspendedLanes&l;break}n.timeoutHandle=Ci(ke.bind(null,n,cn,Vn),e);break}ke(n,cn,Vn);break;case 4:if(ne(n,r),(r&4194240)===r)break;for(e=n.eventTimes,l=-1;0<r;){var u=31-zn(r);i=1<<u,u=e[u],u>l&&(l=u),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ff(r/1960))-r,10<r){n.timeoutHandle=Ci(ke.bind(null,n,cn,Vn),r);break}ke(n,cn,Vn);break;case 5:ke(n,cn,Vn);break;default:throw Error(v(329))}}}return pn(n,Q()),n.callbackNode===t?Xa.bind(null,n):null}function Vi(n,e){var t=_t;return n.current.memoizedState.isDehydrated&&(Ee(n,e).flags|=256),n=br(n,e),n!==2&&(e=cn,cn=t,e!==null&&Ui(e)),n}function Ui(n){cn===null?cn=n:cn.push.apply(cn,n)}function df(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Mn(i(),l))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ne(n,e){for(e&=~Nu,e&=~cl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-zn(e),r=1<<t;n[t]=-1,e&=~r}}function Ho(n){if(z&6)throw Error(v(327));Ze();var e=Rr(n,0);if(!(e&1))return pn(n,Q()),null;var t=br(n,e);if(n.tag!==0&&t===2){var r=fi(n);r!==0&&(e=r,t=Vi(n,r))}if(t===1)throw t=Gt,Ee(n,0),ne(n,e),pn(n,Q()),t;if(t===6)throw Error(v(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ke(n,cn,Vn),pn(n,Q()),null}function Au(n,e){var t=z;z|=1;try{return n(e)}finally{z=t,z===0&&(lt=Q()+500,ul&&ge())}}function De(n){te!==null&&te.tag===0&&!(z&6)&&Ze();var e=z;z|=1;var t=En.transition,r=B;try{if(En.transition=null,B=1,n)return n()}finally{B=r,En.transition=t,z=e,!(z&6)&&ge()}}function _u(){gn=Qe.current,O(Qe)}function Ee(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,$h(t)),W!==null)for(t=W.return;t!==null;){var r=t;switch(au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vr();break;case 3:tt(),O(fn),O(ln),yu();break;case 5:vu(r);break;case 4:tt();break;case 13:O(I);break;case 19:O(I);break;case 10:du(r.type._context);break;case 22:case 23:_u()}t=t.return}if(Z=n,W=n=ce(n.current,null),b=gn=e,G=0,Gt=null,Nu=cl=_e=0,cn=_t=null,Se!==null){for(e=0;e<Se.length;e++)if(t=Se[e],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var u=i.next;i.next=l,r.next=u}t.pending=r}Se=null}return n}function Ga(n,e){do{var t=W;try{if(fu(),Lr.current=Yr,Gr){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(Ae=0,q=X=V=null,Tt=!1,Qt=0,Lu.current=null,t===null||t.return===null){G=1,Gt=e,W=null;break}n:{var i=n,u=t.return,o=t,s=e;if(e=b,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=o,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var d=m.alternate;d?(m.updateQueue=d.updateQueue,m.memoizedState=d.memoizedState,m.lanes=d.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Do(u);if(y!==null){y.flags&=-257,Po(y,u,o,i,e),y.mode&1&&_o(i,c,e),e=y,s=c;var C=e.updateQueue;if(C===null){var w=new Set;w.add(s),e.updateQueue=w}else C.add(s);break n}else{if(!(e&1)){_o(i,c,e),Du();break n}s=Error(v(426))}}else if(j&&o.mode&1){var M=Do(u);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Po(M,u,o,i,e),cu(rt(s,o));break n}}i=s=rt(s,o),G!==4&&(G=2),_t===null?_t=[i]:_t.push(i),i=u;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var h=Pa(i,s,e);xo(i,h);break n;case 1:o=s;var a=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(se===null||!se.has(f)))){i.flags|=65536,e&=-e,i.lanes|=e;var p=za(i,o,e);xo(i,p);break n}}i=i.return}while(i!==null)}Za(t)}catch(k){e=k,W===t&&t!==null&&(W=t=t.return);continue}break}while(!0)}function Ya(){var n=qr.current;return qr.current=Yr,n===null?Yr:n}function Du(){(G===0||G===3||G===2)&&(G=4),Z===null||!(_e&268435455)&&!(cl&268435455)||ne(Z,b)}function br(n,e){var t=z;z|=2;var r=Ya();(Z!==n||b!==e)&&(Vn=null,Ee(n,e));do try{pf();break}catch(l){Ga(n,l)}while(!0);if(fu(),z=t,qr.current=r,W!==null)throw Error(v(261));return Z=null,b=0,G}function pf(){for(;W!==null;)qa(W)}function gf(){for(;W!==null&&!Ic();)qa(W)}function qa(n){var e=ba(n.alternate,n,gn);n.memoizedProps=n.pendingProps,e===null?Za(n):W=e,Lu.current=null}function Za(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=sf(t,e),t!==null){t.flags&=32767,W=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{G=6,W=null;return}}else if(t=of(t,e,gn),t!==null){W=t;return}if(e=e.sibling,e!==null){W=e;return}W=e=n}while(e!==null);G===0&&(G=5)}function ke(n,e,t){var r=B,l=En.transition;try{En.transition=null,B=1,mf(n,e,t,r)}finally{En.transition=l,B=r}return null}function mf(n,e,t,r){do Ze();while(te!==null);if(z&6)throw Error(v(327));t=n.finishedWork;var l=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(v(177));n.callbackNode=null,n.callbackPriority=0;var i=t.lanes|t.childLanes;if(Yc(n,i),n===Z&&(W=Z=null,b=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||vr||(vr=!0,nc(Mr,function(){return Ze(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=En.transition,En.transition=null;var u=B;B=1;var o=z;z|=4,Lu.current=null,cf(n,t),Qa(t,n),Rh(yi),Fr=!!vi,yi=vi=null,n.current=t,hf(t),Vc(),z=o,B=u,En.transition=i}else n.current=t;if(vr&&(vr=!1,te=n,Jr=l),i=n.pendingLanes,i===0&&(se=null),Hc(t.stateNode),pn(n,Q()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)l=e[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Zr)throw Zr=!1,n=ji,ji=null,n;return Jr&1&&n.tag!==0&&Ze(),i=n.pendingLanes,i&1?n===Ii?Dt++:(Dt=0,Ii=n):Dt=0,ge(),null}function Ze(){if(te!==null){var n=Ps(Jr),e=En.transition,t=B;try{if(En.transition=null,B=16>n?16:n,te===null)var r=!1;else{if(n=te,te=null,Jr=0,z&6)throw Error(v(331));var l=z;for(z|=4,x=n.current;x!==null;){var i=x,u=i.child;if(x.flags&16){var o=i.deletions;if(o!==null){for(var s=0;s<o.length;s++){var c=o[s];for(x=c;x!==null;){var m=x;switch(m.tag){case 0:case 11:case 15:At(8,m,i)}var g=m.child;if(g!==null)g.return=m,x=g;else for(;x!==null;){m=x;var d=m.sibling,y=m.return;if($a(m),m===c){x=null;break}if(d!==null){d.return=y,x=d;break}x=y}}}var C=i.alternate;if(C!==null){var w=C.child;if(w!==null){C.child=null;do{var M=w.sibling;w.sibling=null,w=M}while(w!==null)}}x=i}}if(i.subtreeFlags&2064&&u!==null)u.return=i,x=u;else n:for(;x!==null;){if(i=x,i.flags&2048)switch(i.tag){case 0:case 11:case 15:At(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,x=h;break n}x=i.return}}var a=n.current;for(x=a;x!==null;){u=x;var f=u.child;if(u.subtreeFlags&2064&&f!==null)f.return=u,x=f;else n:for(u=a;x!==null;){if(o=x,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:al(9,o)}}catch(k){$(o,o.return,k)}if(o===u){x=null;break n}var p=o.sibling;if(p!==null){p.return=o.return,x=p;break n}x=o.return}}if(z=l,ge(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(el,n)}catch{}r=!0}return r}finally{B=t,En.transition=e}}return!1}function Ko(n,e,t){e=rt(t,e),e=Pa(n,e,1),n=oe(n,e,1),e=on(),n!==null&&(qt(n,1,e),pn(n,e))}function $(n,e,t){if(n.tag===3)Ko(n,n,t);else for(;e!==null;){if(e.tag===3){Ko(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(se===null||!se.has(r))){n=rt(t,n),n=za(e,n,1),e=oe(e,n,1),n=on(),e!==null&&(qt(e,1,n),pn(e,n));break}}e=e.return}}function vf(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=on(),n.pingedLanes|=n.suspendedLanes&t,Z===n&&(b&t)===t&&(G===4||G===3&&(b&130023424)===b&&500>Q()-Tu?Ee(n,0):Nu|=t),pn(n,e)}function Ja(n,e){e===0&&(n.mode&1?(e=or,or<<=1,!(or&130023424)&&(or=4194304)):e=1);var t=on();n=Xn(n,e),n!==null&&(qt(n,e,t),pn(n,t))}function yf(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Ja(n,t)}function kf(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,l=n.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(e),Ja(n,t)}var ba;ba=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||fn.current)hn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return hn=!1,uf(n,e,t);hn=!!(n.flags&131072)}else hn=!1,j&&e.flags&1048576&&ra(e,Hr,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tr(n,e),n=e.pendingProps;var l=be(e,ln.current);qe(e,t),l=Cu(null,e,r,n,l,t);var i=wu();return e.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(r)?(i=!0,Ur(e)):i=!1,e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,gu(e),l.updater=sl,e.stateNode=l,l._reactInternals=e,Ti(e,r,n,t),e=Di(null,e,r,!0,i,t)):(e.tag=0,j&&i&&su(e),un(null,e,l,t),e=e.child),e;case 16:r=e.elementType;n:{switch(Tr(n,e),n=e.pendingProps,l=r._init,r=l(r._payload),e.type=r,l=e.tag=wf(r),n=_n(r,n),l){case 0:e=_i(null,e,r,n,t);break n;case 1:e=Mo(null,e,r,n,t);break n;case 11:e=zo(null,e,r,n,t);break n;case 14:e=Bo(null,e,r,_n(r.type,n),t);break n}throw Error(v(306,r,""))}return e;case 0:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:_n(r,l),_i(n,e,r,l,t);case 1:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:_n(r,l),Mo(n,e,r,l,t);case 3:n:{if(Fa(e),n===null)throw Error(v(387));r=e.pendingProps,i=e.memoizedState,l=i.element,aa(n,e),Wr(e,r,null,t);var u=e.memoizedState;if(r=u.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){l=rt(Error(v(423)),e),e=Ro(n,e,r,t,l);break n}else if(r!==l){l=rt(Error(v(424)),e),e=Ro(n,e,r,t,l);break n}else for(mn=ue(e.stateNode.containerInfo.firstChild),vn=e,j=!0,Pn=null,t=oa(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nt(),r===l){e=Gn(n,e,t);break n}un(n,e,r,t)}e=e.child}return e;case 5:return ca(e),n===null&&Ei(e),r=e.type,l=e.pendingProps,i=n!==null?n.memoizedProps:null,u=l.children,ki(r,l)?u=null:i!==null&&ki(r,i)&&(e.flags|=32),Ra(n,e),un(n,e,u,t),e.child;case 6:return n===null&&Ei(e),null;case 13:return Oa(n,e,t);case 4:return mu(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=et(e,null,r,t):un(n,e,r,t),e.child;case 11:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:_n(r,l),zo(n,e,r,l,t);case 7:return un(n,e,e.pendingProps,t),e.child;case 8:return un(n,e,e.pendingProps.children,t),e.child;case 12:return un(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(r=e.type._context,l=e.pendingProps,i=e.memoizedProps,u=l.value,R(Kr,r._currentValue),r._currentValue=u,i!==null)if(Mn(i.value,u)){if(i.children===l.children&&!fn.current){e=Gn(n,e,t);break n}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){u=i.child;for(var s=o.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Kn(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Li(i.return,t,e),o.lanes|=t;break}s=s.next}}else if(i.tag===10)u=i.type===e.type?null:i.child;else if(i.tag===18){if(u=i.return,u===null)throw Error(v(341));u.lanes|=t,o=u.alternate,o!==null&&(o.lanes|=t),Li(u,t,e),u=i.sibling}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===e){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}un(n,e,l.children,t),e=e.child}return e;case 9:return l=e.type,r=e.pendingProps.children,qe(e,t),l=Ln(l),r=r(l),e.flags|=1,un(n,e,r,t),e.child;case 14:return r=e.type,l=_n(r,e.pendingProps),l=_n(r.type,l),Bo(n,e,r,l,t);case 15:return Ba(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:_n(r,l),Tr(n,e),e.tag=1,dn(r)?(n=!0,Ur(e)):n=!1,qe(e,t),Da(e,r,l),Ti(e,r,l,t),Di(null,e,r,!0,n,t);case 19:return ja(n,e,t);case 22:return Ma(n,e,t)}throw Error(v(156,e.tag))};function nc(n,e){return Ts(n,e)}function Cf(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(n,e,t,r){return new Cf(n,e,t,r)}function Pu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wf(n){if(typeof n=="function")return Pu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===qi)return 11;if(n===Zi)return 14}return 2}function ce(n,e){var t=n.alternate;return t===null?(t=xn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Dr(n,e,t,r,l,i){var u=2;if(r=n,typeof n=="function")Pu(n)&&(u=1);else if(typeof n=="string")u=5;else n:switch(n){case Re:return Le(t.children,l,i,e);case Yi:u=8,l|=8;break;case Zl:return n=xn(12,t,e,l|2),n.elementType=Zl,n.lanes=i,n;case Jl:return n=xn(13,t,e,l),n.elementType=Jl,n.lanes=i,n;case bl:return n=xn(19,t,e,l),n.elementType=bl,n.lanes=i,n;case cs:return hl(t,l,i,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ss:u=10;break n;case as:u=9;break n;case qi:u=11;break n;case Zi:u=14;break n;case Zn:u=16,r=null;break n}throw Error(v(130,n==null?n:typeof n,""))}return e=xn(u,t,e,l),e.elementType=n,e.type=r,e.lanes=i,e}function Le(n,e,t,r){return n=xn(7,n,r,e),n.lanes=t,n}function hl(n,e,t,r){return n=xn(22,n,r,e),n.elementType=cs,n.lanes=t,n.stateNode={isHidden:!1},n}function Kl(n,e,t){return n=xn(6,n,null,e),n.lanes=t,n}function Ql(n,e,t){return e=xn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Sf(n,e,t,r,l){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function zu(n,e,t,r,l,i,u,o,s){return n=new Sf(n,e,t,o,s),e===1?(e=1,i===!0&&(e|=8)):e=0,i=xn(3,null,null,e),n.current=i,i.stateNode=n,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(i),n}function xf(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Me,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function ec(n){if(!n)return fe;n=n._reactInternals;n:{if(ze(n)!==n||n.tag!==1)throw Error(v(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(v(171))}if(n.tag===1){var t=n.type;if(dn(t))return ea(n,t,e)}return e}function tc(n,e,t,r,l,i,u,o,s){return n=zu(t,r,!0,n,l,i,u,o,s),n.context=ec(null),t=n.current,r=on(),l=ae(t),i=Kn(r,l),i.callback=e??null,oe(t,i,l),n.current.lanes=l,qt(n,l,r),pn(n,r),n}function fl(n,e,t,r){var l=e.current,i=on(),u=ae(l);return t=ec(t),e.context===null?e.context=t:e.pendingContext=t,e=Kn(i,u),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=oe(l,e,u),n!==null&&(Bn(n,l,u,i),Er(n,l,u)),u}function nl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Qo(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Bu(n,e){Qo(n,e),(n=n.alternate)&&Qo(n,e)}function Ef(){return null}var rc=typeof reportError=="function"?reportError:function(n){console.error(n)};function Mu(n){this._internalRoot=n}dl.prototype.render=Mu.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(v(409));fl(n,e,null,null)};dl.prototype.unmount=Mu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;De(function(){fl(null,n,null,null)}),e[Wn]=null}};function dl(n){this._internalRoot=n}dl.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ms();n={blockedOn:null,target:n,priority:e};for(var t=0;t<bn.length&&e!==0&&e<bn[t].priority;t++);bn.splice(t,0,n),t===0&&Fs(n)}};function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Wo(){}function Lf(n,e,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=nl(u);i.call(c)}}var u=tc(e,r,n,0,null,!1,!1,"",Wo);return n._reactRootContainer=u,n[Wn]=u.current,Vt(n.nodeType===8?n.parentNode:n),De(),u}for(;l=n.lastChild;)n.removeChild(l);if(typeof r=="function"){var o=r;r=function(){var c=nl(s);o.call(c)}}var s=zu(n,0,!1,null,null,!1,!1,"",Wo);return n._reactRootContainer=s,n[Wn]=s.current,Vt(n.nodeType===8?n.parentNode:n),De(function(){fl(e,s,t,r)}),s}function gl(n,e,t,r,l){var i=t._reactRootContainer;if(i){var u=i;if(typeof l=="function"){var o=l;l=function(){var s=nl(u);o.call(s)}}fl(e,u,n,l)}else u=Lf(t,e,n,l,r);return nl(u)}zs=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ct(e.pendingLanes);t!==0&&(nu(e,t|1),pn(e,Q()),!(z&6)&&(lt=Q()+500,ge()))}break;case 13:De(function(){var r=Xn(n,1);if(r!==null){var l=on();Bn(r,n,1,l)}}),Bu(n,1)}};eu=function(n){if(n.tag===13){var e=Xn(n,134217728);if(e!==null){var t=on();Bn(e,n,134217728,t)}Bu(n,134217728)}};Bs=function(n){if(n.tag===13){var e=ae(n),t=Xn(n,e);if(t!==null){var r=on();Bn(t,n,e,r)}Bu(n,e)}};Ms=function(){return B};Rs=function(n,e){var t=B;try{return B=n,e()}finally{B=t}};ai=function(n,e,t){switch(e){case"input":if(ti(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var l=il(r);if(!l)throw Error(v(90));fs(r),ti(r,l)}}}break;case"textarea":ps(n,t);break;case"select":e=t.value,e!=null&&We(n,!!t.multiple,e,!1)}};ws=Au;Ss=De;var Nf={usingClientEntryPoint:!1,Events:[Jt,Ie,il,ks,Cs,Au]},vt={findFiberByHostInstance:we,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tf={bundleType:vt.bundleType,version:vt.version,rendererPackageName:vt.rendererPackageName,rendererConfig:vt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ls(n),n===null?null:n.stateNode},findFiberByHostInstance:vt.findFiberByHostInstance||Ef,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{el=yr.inject(Tf),jn=yr}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nf;kn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(e))throw Error(v(200));return xf(n,e,null,t)};kn.createRoot=function(n,e){if(!Ru(n))throw Error(v(299));var t=!1,r="",l=rc;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),e=zu(n,1,!1,null,null,t,!1,r,l),n[Wn]=e.current,Vt(n.nodeType===8?n.parentNode:n),new Mu(e)};kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(v(188)):(n=Object.keys(n).join(","),Error(v(268,n)));return n=Ls(e),n=n===null?null:n.stateNode,n};kn.flushSync=function(n){return De(n)};kn.hydrate=function(n,e,t){if(!pl(e))throw Error(v(200));return gl(null,n,e,!0,t)};kn.hydrateRoot=function(n,e,t){if(!Ru(n))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",u=rc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),e=tc(e,null,n,1,t??null,l,!1,i,u),n[Wn]=e.current,Vt(n),r)for(n=0;n<r.length;n++)t=r[n],l=t._getVersion,l=l(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,l]:e.mutableSourceEagerHydrationData.push(t,l);return new dl(e)};kn.render=function(n,e,t){if(!pl(e))throw Error(v(200));return gl(null,n,e,!1,t)};kn.unmountComponentAtNode=function(n){if(!pl(n))throw Error(v(40));return n._reactRootContainer?(De(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[Wn]=null})}),!0):!1};kn.unstable_batchedUpdates=Au;kn.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!pl(t))throw Error(v(200));if(n==null||n._reactInternals===void 0)throw Error(v(38));return gl(n,e,t,!1,r)};kn.version="18.3.1-next-f1338f8080-20240426";function lc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc)}catch(n){console.error(n)}}lc(),ls.exports=kn;var Af=ls.exports,Xo=Af;Yl.createRoot=Xo.createRoot,Yl.hydrateRoot=Xo.hydrateRoot;function Wl(n){return n.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((t,r)=>t.startsWith("**")&&t.endsWith("**")?S.createElement("strong",{key:r},t.slice(2,-2)):S.createElement(S.Fragment,{key:r},t))}function _f(n,e){const t=n.content.split(`
`).map(r=>r.trim()).filter(Boolean);return t.length&&t.every(r=>/^-\s+/.test(r))?S.createElement("ul",{key:`${n.type}-${e}`,className:"content-list"},t.map((r,l)=>S.createElement("li",{key:l},Wl(r.replace(/^-\s+/,""))))):t.length&&t.every(r=>/^\d+\.\s+/.test(r))?S.createElement("ol",{key:`${n.type}-${e}`,className:"content-list ordered"},t.map((r,l)=>S.createElement("li",{key:l},Wl(r.replace(/^\d+\.\s+/,""))))):S.createElement("p",{key:`${n.type}-${e}`,className:"content-text"},Wl(n.content))}function Xl({blocks:n,className:e=""}){return n!=null&&n.length?S.createElement("div",{className:e},n.map((t,r)=>t.type==="code"?S.createElement("pre",{key:`${t.type}-${r}`,className:"content-code"},S.createElement("code",null,t.content)):_f(t,r))):null}const Df=`## Bài 18: Các lệnh vào ra đơn giản\r
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
`;function Fu(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function ml(n){return n.replace(/\r\n/g,`
`).trim()}function ic(n){return n.replace(/`([^`]+)`/g,"$1").trim()}function Pf(n){return ic(n.replace(/```[\s\S]*?```/g," ").replace(/\n+/g," "))}function zf(n){const e=ml(n);return e?e.split(/```/).map((t,r)=>{var l;if(r%2===1){const i=t.split(`
`),u=((l=i[0])==null?void 0:l.trim())??"",o=/^[a-zA-Z0-9_+#-]+$/.test(u);return{type:"code",language:o?u:"",content:o?i.slice(1).join(`
`).trim():t.trim()}}return{type:"text",content:t}}).flatMap(t=>t.type==="code"?t.content?[t]:[]:t.content.split(/\n{2,}/).map(r=>ic(r)).filter(Boolean).map(r=>({type:"text",content:r}))):[]}function Gl(n){const e=ml(n);return{source:e,plainText:Pf(e),blocks:zf(e)}}function Go(n){const e=Fu(n).match(/Chon\s+([A-D])/i);return e?e[1].toUpperCase():null}function Bf(n){return ml(n).split(/\n(?=##\s+)/).filter(Boolean)}function Mf(n){return n.split(/\n(?=Câu\s+\d+\.)/g).filter(e=>Fu(e.trim()).startsWith("Cau "))}function Rf(n){const e=[];let t=null;for(const r of n){const i=r.trimEnd().match(/^([A-D])\.\s*(.*)$/);if(i){t&&e.push(t),t={id:i[1],lines:i[2]?[i[2]]:[]};continue}t&&t.lines.push(r)}return t&&e.push(t),e}function Ff(n,e){var d;const t=ml(e).split(`
`),r=(d=t[0])==null?void 0:d.trim().match(/^Câu\s+(\d+)\.\s*(.*)$/);if(!r)return null;const l=t.findIndex(y=>y.trim()==="Lời giải"),i=l===-1?t.slice(1):t.slice(1,l),u=l===-1?[]:t.slice(l+1),o=i.findIndex(y=>/^[A-D]\./.test(y.trim()));if(o===-1)return null;const s=[r[2],...i.slice(0,o)].filter(Boolean).join(`
`).trim(),c=Rf(i.slice(o)),m=Go(u.join(`
`))||Go(e),g=u.join(`
`).replace(/\nChọn\s+[A-D]\s*$/i,"").trim();return!c.length||!m?null:{id:`${Fu(n).toLowerCase().replace(/[^a-z0-9]+/g,"-")}-cau-${r[1]}`,section:n,number:r[1],answer:m,heading:`Câu ${r[1]}`,stem:Gl(s),options:c.map(y=>({id:y.id,label:y.id,content:Gl(y.lines.join(`
`).trim())})),explanation:Gl(g)}}function Of(n){return Bf(n).flatMap(e=>{var l,i;const t=((i=(l=e.match(/^##\s+(.*)$/m))==null?void 0:l[1])==null?void 0:i.trim())??"Câu hỏi",r=e.replace(/^##\s+.*$/m,"").trim();return Mf(r).map(u=>Ff(t,u)).filter(Boolean)})}const Pt=Of(Df);Pt.length,[...new Set(Pt.map(n=>n.section))];function jf(n){const e=[...n];for(let t=e.length-1;t>0;t-=1){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}function If(){const[n,e]=Ce.useState(0),[t,r]=Ce.useState({}),[l,i]=Ce.useState(!1),[u,o]=Ce.useState(Pt),s=u[n],c=t[s==null?void 0:s.id],m=Ce.useMemo(()=>u.reduce((p,k)=>p+(t[k.id]===k.answer?1:0),0),[u,t]),g=Object.keys(t).length,d=Math.round(g/u.length*100),y=p=>{!s||c||r(k=>({...k,[s.id]:p}))},C=p=>{e(p)},w=()=>{e(p=>Math.min(p+1,u.length-1))},M=()=>{e(p=>Math.max(p-1,0))},h=(p,k)=>{o(p),i(k),e(0),r({})},a=()=>{h(jf(Pt),!0)},f=()=>{h(Pt,!1)};return s?S.createElement("main",{className:"app-shell"},S.createElement("section",{className:"hero-panel"},S.createElement("div",{className:"hero-copy"},S.createElement("span",{className:"eyebrow"},"React quiz UI"),S.createElement("h1",null,"Ôn tập trắc nghiệm Tin học với phản hồi đúng sai ngay lập tức"),S.createElement("p",null,"Toàn bộ câu hỏi được đọc từ ",S.createElement("code",null,"question.md"),", gồm giao diện mượt, dễ tập trung, thao tác nhanh trên cả desktop lẫn mobile.")),S.createElement("div",{className:"stats-grid"},S.createElement("article",{className:"stat-card accent"},S.createElement("span",null,"Tổng câu"),S.createElement("strong",null,u.length)),S.createElement("article",{className:"stat-card"},S.createElement("span",null,"Đã trả lời"),S.createElement("strong",null,g)),S.createElement("article",{className:"stat-card"},S.createElement("span",null,"Trả lời đúng"),S.createElement("strong",null,m)),S.createElement("article",{className:"stat-card"},S.createElement("span",null,"Chế độ"),S.createElement("strong",null,l?"Trộn":"Gốc"))),S.createElement("div",{className:"hero-actions"},S.createElement("button",{type:"button",className:"nav-button primary",onClick:a},"Xáo trộn câu hỏi"),S.createElement("button",{type:"button",className:"nav-button secondary",onClick:f},"Thứ tự gốc"))),S.createElement("section",{className:"content-grid"},S.createElement("aside",{className:"question-rail"},S.createElement("div",{className:"rail-header"},S.createElement("h2",null,"Danh sách câu"),S.createElement("span",null,n+1,"/",u.length)),S.createElement("div",{className:"question-list",role:"list","aria-label":"Danh sách câu hỏi"},u.map((p,k)=>{const L=t[p.id],N=L===p.answer;return S.createElement("button",{key:p.id,type:"button",className:["question-chip",k===n?"active":"",L?N?"correct":"wrong":""].filter(Boolean).join(" "),onClick:()=>C(k)},S.createElement("span",null,p.number),S.createElement("small",null,p.section))}))),S.createElement("section",{className:"question-card"},S.createElement("div",{className:"question-card-header"},S.createElement("div",null,S.createElement("span",{className:"section-tag"},s.section),S.createElement("h2",null,s.heading,"."),S.createElement(Xl,{blocks:s.stem.blocks,className:"question-content"})),S.createElement("div",{className:"progress-ring","aria-label":"Tiến độ",style:{background:`radial-gradient(circle at center, rgba(17, 21, 29, 0.98) 58%, transparent 60%), conic-gradient(var(--accent) ${d*3.6}deg, rgba(255, 255, 255, 0.12) 0deg)`}},S.createElement("strong",null,d,"%"),S.createElement("span",null,"hoàn thành"))),S.createElement("div",{className:"options-grid"},s.options.map(p=>{const k=c===p.id,L=s.answer===p.id;return S.createElement("button",{key:p.id,type:"button",className:["option-card",k?"selected":"",c&&L?"is-answer":"",c&&k&&!L?"is-wrong":""].filter(Boolean).join(" "),onClick:()=>y(p.id),disabled:!!c},S.createElement("span",{className:"option-label"},p.id),S.createElement(Xl,{blocks:p.content.blocks,className:"option-content"}))})),S.createElement("div",{className:["feedback-panel",c?"visible":""].join(" ")},c?S.createElement(S.Fragment,null,S.createElement("div",{className:c===s.answer?"feedback ok":"feedback nope"},c===s.answer?"Chính xác. Bạn đã chọn đúng đáp án.":`Chưa đúng. Đáp án đúng là ${s.answer}.`),s.explanation.blocks.length?S.createElement(Xl,{blocks:s.explanation.blocks,className:"feedback-content"}):null):S.createElement("div",{className:"feedback hint"},"Chọn một đáp án để xem kết quả ngay.")),S.createElement("div",{className:"actions-row"},S.createElement("button",{type:"button",className:"nav-button secondary",onClick:M},"Câu trước"),S.createElement("button",{type:"button",className:"nav-button primary",onClick:w},"Câu tiếp"))))):S.createElement("div",{className:"empty-state"},"Không tìm thấy dữ liệu câu hỏi.")}Yl.createRoot(document.getElementById("root")).render(S.createElement(S.StrictMode,null,S.createElement(If,null)));
