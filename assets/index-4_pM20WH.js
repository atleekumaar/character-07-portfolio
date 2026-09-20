var _E=Object.defineProperty;var yE=(t,e,n)=>e in t?_E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var bd=(t,e,n)=>yE(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var gv={exports:{}},Wu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SE=Symbol.for("react.transitional.element"),bE=Symbol.for("react.fragment");function xv(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:SE,type:t,key:i,ref:e!==void 0?e:null,props:n}}Wu.Fragment=bE;Wu.jsx=xv;Wu.jsxs=xv;gv.exports=Wu;var l=gv.exports,vv={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp=Symbol.for("react.transitional.element"),EE=Symbol.for("react.portal"),ME=Symbol.for("react.fragment"),TE=Symbol.for("react.strict_mode"),AE=Symbol.for("react.profiler"),NE=Symbol.for("react.consumer"),RE=Symbol.for("react.context"),CE=Symbol.for("react.forward_ref"),wE=Symbol.for("react.suspense"),DE=Symbol.for("react.memo"),_v=Symbol.for("react.lazy"),LE=Symbol.for("react.activity"),UE=Symbol.for("react.view_transition"),b0=Symbol.iterator;function OE(t){return t===null||typeof t!="object"?null:(t=b0&&t[b0]||t["@@iterator"],typeof t=="function"?t:null)}var yv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sv=Object.assign,bv={};function ro(t,e,n){this.props=t,this.context=e,this.refs=bv,this.updater=n||yv}ro.prototype.isReactComponent={};ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ev(){}Ev.prototype=ro.prototype;function kp(t,e,n){this.props=t,this.context=e,this.refs=bv,this.updater=n||yv}var jp=kp.prototype=new Ev;jp.constructor=kp;Sv(jp,ro.prototype);jp.isPureReactComponent=!0;var E0=Array.isArray;function Ff(){}var Lt={H:null,A:null,T:null,S:null},Mv=Object.prototype.hasOwnProperty;function Xp(t,e,n){var i=n.ref;return{$$typeof:Vp,type:t,key:e,ref:i!==void 0?i:null,props:n}}function IE(t,e){return Xp(t.type,e,t.props)}function Wp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vp}function PE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var M0=/\/+/g;function Ed(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PE(""+t.key):e.toString(36)}function zE(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Ff,Ff):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function pr(t,e,n,i,a){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Vp:case EE:r=!0;break;case _v:return r=t._init,pr(r(t._payload),e,n,i,a)}}if(r)return a=a(t),r=i===""?"."+Ed(t,0):i,E0(a)?(n="",r!=null&&(n=r.replace(M0,"$&/")+"/"),pr(a,e,n,"",function(u){return u})):a!=null&&(Wp(a)&&(a=IE(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(M0,"$&/")+"/")+r)),e.push(a)),1;r=0;var o=i===""?".":i+":";if(E0(t))for(var c=0;c<t.length;c++)i=t[c],s=o+Ed(i,c),r+=pr(i,e,n,s,a);else if(c=OE(t),typeof c=="function")for(t=c.call(t),c=0;!(i=t.next()).done;)i=i.value,s=o+Ed(i,c++),r+=pr(i,e,n,s,a);else if(s==="object"){if(typeof t.then=="function")return pr(zE(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function Gl(t,e,n){if(t==null)return t;var i=[],a=0;return pr(t,i,"","",function(s){return e.call(n,s,a++)}),i}function BE(t){if(t._status===-1){var e=t._result,n=e();n.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),t._status===-1&&(t._status=0,t._result=n)}if(t._status===1)return t._result.default;throw t._result}var T0=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Tv(t){var e=Lt.T,n={};n.types=e!==null?e.types:null,Lt.T=n;try{var i=t(),a=Lt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ff,T0)}catch(s){T0(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),Lt.T=e}}function Av(t){var e=Lt.T;if(e!==null){var n=e.types;n===null?e.types=[t]:n.indexOf(t)===-1&&n.push(t)}else Tv(Av.bind(null,t))}var FE={map:Gl,forEach:function(t,e,n){Gl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gl(t,function(){e++}),e},toArray:function(t){return Gl(t,function(e){return e})||[]},only:function(t){if(!Wp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Activity=LE;ke.Children=FE;ke.Component=ro;ke.Fragment=ME;ke.Profiler=AE;ke.PureComponent=kp;ke.StrictMode=TE;ke.Suspense=wE;ke.ViewTransition=UE;ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Lt;ke.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Lt.H.useMemoCache(t)}};ke.addTransitionType=Av;ke.cache=function(t){return function(){return t.apply(null,arguments)}};ke.cacheSignal=function(){return null};ke.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=Sv({},t.props),a=t.key;if(e!=null)for(s in e.key!==void 0&&(a=""+e.key),e)!Mv.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Xp(t.type,a,i)};ke.createContext=function(t){return t={$$typeof:RE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:NE,_context:t},t};ke.createElement=function(t,e,n){var i,a={},s=null;if(e!=null)for(i in e.key!==void 0&&(s=""+e.key),e)Mv.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),c=0;c<r;c++)o[c]=arguments[c+2];a.children=o}if(t&&t.defaultProps)for(i in r=t.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Xp(t,s,a)};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:CE,render:t}};ke.isValidElement=Wp;ke.lazy=function(t){return{$$typeof:_v,_payload:{_status:-1,_result:t},_init:BE}};ke.memo=function(t,e){return{$$typeof:DE,type:t,compare:e===void 0?null:e}};ke.startTransition=Tv;ke.unstable_useCacheRefresh=function(){return Lt.H.useCacheRefresh()};ke.use=function(t){return Lt.H.use(t)};ke.useActionState=function(t,e,n){return Lt.H.useActionState(t,e,n)};ke.useCallback=function(t,e){return Lt.H.useCallback(t,e)};ke.useContext=function(t){return Lt.H.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t,e){return Lt.H.useDeferredValue(t,e)};ke.useEffect=function(t,e){return Lt.H.useEffect(t,e)};ke.useEffectEvent=function(t){return Lt.H.useEffectEvent(t)};ke.useId=function(){return Lt.H.useId()};ke.useImperativeHandle=function(t,e,n){return Lt.H.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Lt.H.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Lt.H.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Lt.H.useMemo(t,e)};ke.useOptimistic=function(t,e){return Lt.H.useOptimistic(t,e)};ke.useReducer=function(t,e,n){return Lt.H.useReducer(t,e,n)};ke.useRef=function(t){return Lt.H.useRef(t)};ke.useState=function(t){return Lt.H.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Lt.H.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Lt.H.useTransition()};ke.version="19.3.0";vv.exports=ke;var Ce=vv.exports,Nv={exports:{}},Yu={},Rv={exports:{}},Cv={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,P){var q=I.length;I.push(P);e:for(;0<q;){var V=q-1>>>1,Z=I[V];if(0<a(Z,P))I[V]=P,I[q]=Z,q=V;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var P=I[0],q=I.pop();if(q!==P){I[0]=q;e:for(var V=0,Z=I.length,ne=Z>>>1;V<ne;){var Te=2*(V+1)-1,be=I[Te],Ge=Te+1,Xe=I[Ge];if(0>a(be,q))Ge<Z&&0>a(Xe,be)?(I[V]=Xe,I[Ge]=q,V=Ge):(I[V]=be,I[Te]=q,V=Te);else if(Ge<Z&&0>a(Xe,q))I[V]=Xe,I[Ge]=q,V=Ge;else break e}}return P}function a(I,P){var q=I.sortIndex-P.sortIndex;return q!==0?q:I.id-P.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();t.unstable_now=function(){return r.now()-o}}var c=[],u=[],h=1,m=null,d=3,p=!1,g=!1,b=!1,x=!1,f=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function S(I){for(var P=n(u);P!==null;){if(P.callback===null)i(u);else if(P.startTime<=I)i(u),P.sortIndex=P.expirationTime,e(c,P);else break;P=n(u)}}function T(I){if(b=!1,S(I),!g)if(n(c)!==null)g=!0,A||(A=!0,F());else{var P=n(u);P!==null&&k(T,P.startTime-I)}}var A=!1,N=-1,y=5,R=-1;function w(){return x?!0:!(t.unstable_now()-R<y)}function O(){if(x=!1,A){var I=t.unstable_now();R=I;var P=!0;try{e:{g=!1,b&&(b=!1,v(N),N=-1),p=!0;var q=d;try{t:{for(S(I),m=n(c);m!==null&&!(m.expirationTime>I&&w());){var V=m.callback;if(typeof V=="function"){m.callback=null,d=m.priorityLevel;var Z=V(m.expirationTime<=I);if(I=t.unstable_now(),typeof Z=="function"){m.callback=Z,S(I),P=!0;break t}m===n(c)&&i(c),S(I)}else i(c);m=n(c)}if(m!==null)P=!0;else{var ne=n(u);ne!==null&&k(T,ne.startTime-I),P=!1}}break e}finally{m=null,d=q,p=!1}P=void 0}}finally{P?F():A=!1}}}var F;if(typeof M=="function")F=function(){M(O)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,z=W.port2;W.port1.onmessage=O,F=function(){z.postMessage(null)}}else F=function(){f(O,0)};function k(I,P){N=f(function(){I(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var P=3;break;default:P=d}var q=d;d=P;try{return I()}finally{d=q}},t.unstable_requestPaint=function(){x=!0},t.unstable_runWithPriority=function(I,P){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=d;d=I;try{return P()}finally{d=q}},t.unstable_scheduleCallback=function(I,P,q){var V=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?V+q:V):q=V,I){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=q+Z,I={id:h++,callback:P,priorityLevel:I,startTime:q,expirationTime:Z,sortIndex:-1},q>V?(I.sortIndex=q,e(u,I),n(c)===null&&I===n(u)&&(b?(v(N),N=-1):b=!0,k(T,q-V))):(I.sortIndex=Z,e(c,I),g||p||(g=!0,A||(A=!0,F()))),I},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(I){var P=d;return function(){var q=d;d=P;try{return I.apply(this,arguments)}finally{d=q}}}})(Cv);Rv.exports=Cv;var HE=Rv.exports,wv={exports:{}},Sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GE=Ce;function Dv(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ra(){}var Nn={d:{f:Ra,r:function(){throw Error(Dv(522))},D:Ra,C:Ra,L:Ra,m:Ra,X:Ra,S:Ra,M:Ra},p:0,findDOMNode:null},VE=Symbol.for("react.portal"),kE=Symbol.for("react.recoverable"),A0=Symbol.for("react.optimistic_key");function jE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:VE,key:i==null?null:i===A0?A0:""+i,children:t,containerInfo:e,implementation:n}}var Go=GE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function qu(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Nn;Sn.browser=function(t){return{$$typeof:kE,_reason:t}};Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Dv(299));return jE(t,e,null,n)};Sn.flushSync=function(t){var e=Go.T,n=Nn.p;try{if(Go.T=null,Nn.p=2,t)return t()}finally{Go.T=e,Nn.p=n,Nn.d.f()}};Sn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Nn.d.C(t,e))};Sn.prefetchDNS=function(t){typeof t=="string"&&Nn.d.D(t)};Sn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=qu(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?Nn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&Nn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Sn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=qu(e.as,e.crossOrigin);Nn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&Nn.d.M(t)};Sn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=qu(n,e.crossOrigin);Nn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Sn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=qu(e.as,e.crossOrigin);Nn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else Nn.d.m(t)};Sn.requestFormReset=function(t){Nn.d.r(t)};Sn.unstable_batchedUpdates=function(t,e){return t(e)};Sn.useFormState=function(t,e,n){return Go.H.useFormState(t,e,n)};Sn.useFormStatus=function(){return Go.H.useHostTransitionStatus()};Sn.version="19.3.0";function Lv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv)}catch(t){console.error(t)}}Lv(),wv.exports=Sn;var XE=wv.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jt=HE,Uv=Ce,WE=XE;function ee(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ov(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function El(t){for(var e=t,n=e;n&&!n.alternate;)e=n,e.flags&4098&&(t=e.return),n=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function Iv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pv(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function N0(t){if(El(t)!==t)throw Error(ee(188))}function YE(t){var e=t.alternate;if(!e){if(e=El(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return N0(a),t;if(s===i)return N0(a),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function zv(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=zv(t),e!==null)return e;t=t.sibling}return null}function Bn(t,e,n,i,a,s){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&n(t,i,a,s)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&Bn(t.child,e,n,i,a,s))return!0;t=t.sibling}return!1}function Xs(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function R0(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function Bv(t){var e=[null,null],n=Xs(t);return n===null||Fv(e,t,n.child,{foundSelf:!1}),e}function Fv(t,e,n,i){for(;n!==null;){if(n===e)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return t[1]=n,!0;t[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Fv(t,e,n.child,i))return!0;n=n.sibling}return!1}function Qt(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(ee(559))}}var _r=null,Hf=null;function qE(t,e,n){return t===n?!0:t===e?(_r=t,!0):!1}function ZE(t,e,n){return t===n?(Hf=t,!1):t===e?(Hf!==null&&(_r=t),!0):!1}function C0(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function Gf(t,e,n){for(var i=0,a=t;a;a=n(a))i++;a=0;for(var s=e;s;s=n(s))a++;for(;0<i-a;)t=n(t),i--;for(;0<a-i;)e=n(e),a--;for(;i--;){if(t===e||e!==null&&t===e.alternate)return t;t=n(t),e=n(e)}return null}var Nt=Object.assign,KE=Symbol.for("react.element"),Vl=Symbol.for("react.transitional.element"),Oo=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),Hv=Symbol.for("react.strict_mode"),Vf=Symbol.for("react.profiler"),Gv=Symbol.for("react.consumer"),Bi=Symbol.for("react.context"),Yp=Symbol.for("react.forward_ref"),kf=Symbol.for("react.suspense"),jf=Symbol.for("react.suspense_list"),qp=Symbol.for("react.memo"),za=Symbol.for("react.lazy"),Xf=Symbol.for("react.activity"),QE=Symbol.for("react.legacy_hidden"),JE=Symbol.for("react.memo_cache_sentinel"),Wf=Symbol.for("react.view_transition"),$E=Symbol.for("react.recoverable"),w0=Symbol.iterator;function _o(t){return t===null||typeof t!="object"?null:(t=w0&&t[w0]||t["@@iterator"],typeof t=="function"?t:null)}var eM=Symbol.for("react.client.reference");function Yf(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===eM?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yr:return"Fragment";case Vf:return"Profiler";case Hv:return"StrictMode";case kf:return"Suspense";case jf:return"SuspenseList";case Xf:return"Activity";case Wf:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case Oo:return"Portal";case Bi:return t.displayName||"Context";case Gv:return(t._context.displayName||"Context")+".Consumer";case Yp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qp:return e=t.displayName||null,e!==null?e:Yf(t.type)||"Memo";case za:e=t._payload,t=t._init;try{return Yf(t(e))}catch{}}return null}var Io=Array.isArray,Be=Uv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht=WE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ns={pending:!1,data:null,method:null,action:null},qf=[],Sr=-1;function Qi(t){return{current:t}}function dn(t){0>Sr||(t.current=qf[Sr],qf[Sr]=null,Sr--)}function Ut(t,e){Sr++,qf[Sr]=t.current,t.current=e}var ji=Qi(null),il=Qi(null),qa=Qi(null),ru=Qi(null);function ou(t,e){switch(Ut(qa,e),Ut(il,t),Ut(ji,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?kg(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=kg(e),t=cS(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}dn(ji),Ut(ji,t)}function jr(){dn(ji),dn(il),dn(qa)}function Zf(t){var e=t.memoizedState;e!==null&&(eo._currentValue=e.memoizedState,Ut(ru,t)),e=ji.current;var n=cS(e,t.type);e!==n&&(Ut(il,t),Ut(ji,n))}function lu(t){il.current===t&&(dn(ji),dn(il)),ru.current===t&&(dn(ru),eo._currentValue=Ns)}var Md,D0;function Ia(t){if(Md===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Md=e&&e[1]||"",D0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Md+t+D0}var Td=!1;function Ad(t,e){if(!t||Td)return"";Td=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(g){var d=g}Reflect.construct(t,[],m)}else{try{m.call()}catch(g){d=g}m=!1;try{var p=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),m=!0,new t}finally{m&&(p!==void 0?Object.defineProperty(t.prototype,"props",p):delete t.prototype.props)}}}else{try{throw Error()}catch(g){d=g}(m=t())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(g){if(g&&d&&typeof g.stack=="string")return[g.stack,d.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var c=r.split(`
`),u=o.split(`
`);for(a=i=0;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(i===c.length||a===u.length)for(i=c.length-1,a=u.length-1;1<=i&&0<=a&&c[i]!==u[a];)a--;for(;1<=i&&0<=a;i--,a--)if(c[i]!==u[a]){if(i!==1||a!==1)do if(i--,a--,0>a||c[i]!==u[a]){var h=`
`+c[i].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=i&&0<=a);break}}}finally{Td=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ia(n):""}function tM(t,e){switch(t.tag){case 26:case 27:case 5:return Ia(t.type);case 16:return Ia("Lazy");case 13:return t.child!==e&&e!==null?Ia("Suspense Fallback"):Ia("Suspense");case 19:return Ia("SuspenseList");case 0:case 15:return Ad(t.type,!1);case 11:return Ad(t.type.render,!1);case 1:return Ad(t.type,!0);case 31:return Ia("Activity");case 30:return Ia("ViewTransition");default:return""}}function L0(t){try{var e="",n=null;do e+=tM(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Kf=Object.prototype.hasOwnProperty,Zp=Jt.unstable_scheduleCallback,Nd=Jt.unstable_cancelCallback,nM=Jt.unstable_shouldYield,iM=Jt.unstable_requestPaint,Yn=Jt.unstable_now,aM=Jt.unstable_getCurrentPriorityLevel,Vv=Jt.unstable_ImmediatePriority,kv=Jt.unstable_UserBlockingPriority,cu=Jt.unstable_NormalPriority,sM=Jt.unstable_LowPriority,jv=Jt.unstable_IdlePriority,rM=Jt.log,oM=Jt.unstable_setDisableYieldValue,Ml=null,qn=null;function Va(t){if(typeof rM=="function"&&oM(t),qn&&typeof qn.setStrictMode=="function")try{qn.setStrictMode(Ml,t)}catch{}}var Zn=Math.clz32?Math.clz32:uM,lM=Math.log,cM=Math.LN2;function uM(t){return t>>>=0,t===0?32:31-(lM(t)/cM|0)|0}var kl=256,jl=262144,Xl=4194304;function ys(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zu(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=ys(i):(r&=o,r!==0?a=ys(r):n||(n=o&~t,n!==0&&(a=ys(n))))):(o=i&~s,o!==0?a=ys(o):r!==0?a=ys(r):n||(n=i&~t,n!==0&&(a=ys(n)))),a===0?0:e!==0&&e!==a&&!(e&s)&&(s=a&-a,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:a}function Tl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Xv(t,e){e&8&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-Zn(n),a=1<<i;e|=t[i],n&=~a}return e}function dM(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wv(){var t=Xl;return Xl<<=1,!(Xl&62914560)&&(Xl=4194304),t}function Rd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Al(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function fM(t,e,n,i,a,s){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,c=t.expirationTimes,u=t.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Zn(n),m=1<<h;o[h]=0,c[h]=-1;var d=u[h];if(d!==null)for(u[h]=null,h=0;h<d.length;h++){var p=d[h];p!==null&&(p.lane&=-536870913)}n&=~m}i!==0&&Yv(t,i,0),s!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function Yv(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Zn(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function qv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function Zv(t,e){var n=e&-e;return n=n&42?1:Kp(n),n&(t.suspendedLanes|e)?0:n}function Kp(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Qp(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Kv(){var t=ht.p;return t!==0?t:(t=window.event,t===void 0?32:wS(t.type))}function U0(t,e){var n=ht.p;try{return ht.p=t,e()}finally{ht.p=n}}var ba=Math.random().toString(36).slice(2),ln="__reactFiber$"+ba,Fn="__reactProps$"+ba,oo="__reactContainer$"+ba,O0="__reactEvents$"+ba,hM="__reactListeners$"+ba,pM="__reactHandles$"+ba,I0="__reactResources$"+ba,Nl="__reactMarker$"+ba,uu="__reactLoad$"+ba;function Ku(t){delete t[ln],delete t[Fn],delete t[hM],delete t[pM]}function Es(t){var e;if(e=t[ln])return e;for(var n=t.parentNode;n;){if(e=n[oo]||n[ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qg(t);t!==null;){if(n=t[ln])return n;t=Qg(t)}return e}t=n,n=t.parentNode}return null}function lo(t){if(t=t[ln]||t[oo]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Po(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ee(33))}function Lr(t){var e=t[I0];return e||(e=t[I0]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function sn(t){t[Nl]=!0}function Qv(t){t[uu]=void 0}var Jv=new Set,$v={};function Ws(t,e){Xr(t,e),Xr(t+"Capture",e)}function Xr(t,e){for($v[t]=e,t=0;t<e.length;t++)Jv.add(e[t])}var mM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),P0={},z0={};function gM(t){return Kf.call(z0,t)?!0:Kf.call(P0,t)?!1:mM.test(t)?z0[t]=!0:(P0[t]=!0,!1)}var dt=!1;function B0(){var t=dt;return dt=!1,t}function Ic(t,e,n){if(gM(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,n)}}function Wl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,n)}}function $i(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,i)}}function kn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function e_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xM(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qf(t){if(!t._valueTracker){var e=e_(t)?"checked":"value";t._valueTracker=xM(t,e,""+t[e])}}function t_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=e_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}var vM=/[\n"\\]/g;function li(t){return t.replace(vM,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Jf(t,e,n,i,a,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+kn(e)):t.value!==""+kn(e)&&(t.value=""+kn(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?r==="number"&&t.value==e?Cd(t,kn(t.value)):Cd(t,kn(e)):n!=null?Cd(t,kn(n)):i!=null&&t.removeAttribute("value"),a==null&&s!=null&&(t.defaultChecked=!!s),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+kn(o):t.removeAttribute("name")}function n_(t,e,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){Qf(t);return}n=n!=null?""+kn(n):"",e=e!=null?""+kn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),Qf(t)}function Cd(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Ur(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+kn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function i_(t,e,n){if(e!=null&&(e=""+kn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+kn(n):""}function a_(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(ee(92));if(Io(i)){if(1<i.length)throw Error(ee(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=kn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),Qf(t)}function Wr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _M=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function F0(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||_M.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function s_(t,e,n){if(e!=null&&typeof e!="object")throw Error(ee(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="",dt=!0);for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&(F0(t,a,i),dt=!0)}else for(var s in e)e.hasOwnProperty(s)&&F0(t,s,e[s])}function Jp(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),SM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pc(t){return SM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fi(){}var $f=null;function $p(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Or=null;function H0(t){var e=lo(t);if(e&&(t=e.stateNode)){var n=t[Fn]||null;e:switch(t=e.stateNode,e.type){case"input":if(Jf(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+li(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[Fn]||null;if(!a)throw Error(ee(90));Jf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&t_(i)}break e;case"textarea":i_(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Ur(t,!!n.multiple,e,!1)}}}var wd=!1;function r_(t,e,n){if(wd)return t(e,n);wd=!0;try{var i=t(e);return i}finally{if(wd=!1,(br!==null||Or!==null)&&(ud(),br&&(e=br,t=Or,Or=br=null,H0(e),t)))for(e=0;e<t.length;e++)H0(t[e])}}function al(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Fn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eh=!1;if(pa)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){eh=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{eh=!1}var ka=null,em=null,zc=null;function o_(){if(zc)return zc;var t,e=em,n=e.length,i,a="value"in ka?ka.value:ka.textContent,s=a.length;for(t=0;t<n&&e[t]===a[t];t++);var r=n-t;for(i=1;i<=r&&e[n-i]===a[s-i];i++);return zc=a.slice(t,1<i?1-i:void 0)}function Bc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yl(){return!0}function G0(){return!1}function Cn(t){function e(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yl:G0,this.isPropagationStopped=G0,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),e}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=Cn(cs),Rl=Nt({},cs,{view:0,detail:0}),bM=Cn(Rl),Dd,Ld,So,Ju=Nt({},Rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(Dd=t.screenX-So.screenX,Ld=t.screenY-So.screenY):Ld=Dd=0,So=t),Dd)},movementY:function(t){return"movementY"in t?t.movementY:Ld}}),V0=Cn(Ju),EM=Nt({},Ju,{dataTransfer:0}),MM=Cn(EM),TM=Nt({},Rl,{relatedTarget:0}),Ud=Cn(TM),AM=Nt({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),NM=Cn(AM),RM=Nt({},cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),CM=Cn(RM),wM=Nt({},cs,{data:0}),k0=Cn(wM),DM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UM[t])?!!e[t]:!1}function tm(){return OM}var IM=Nt({},Rl,{key:function(t){if(t.key){var e=DM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tm,charCode:function(t){return t.type==="keypress"?Bc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PM=Cn(IM),zM=Nt({},Ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),j0=Cn(zM),BM=Nt({},cs,{submitter:0}),FM=Cn(BM),HM=Nt({},Rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tm}),GM=Cn(HM),VM=Nt({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),kM=Cn(VM),jM=Nt({},Ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XM=Cn(jM),WM=Nt({},cs,{newState:0,oldState:0,source:0}),YM=Cn(WM),qM=[9,13,27,32],nm=pa&&"CompositionEvent"in window,Vo=null;pa&&"documentMode"in document&&(Vo=document.documentMode);var ZM=pa&&"TextEvent"in window&&!Vo,l_=pa&&(!nm||Vo&&8<Vo&&11>=Vo),X0=" ",W0=!1;function c_(t,e){switch(t){case"keyup":return qM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function KM(t,e){switch(t){case"compositionend":return u_(e);case"keypress":return e.which!==32?null:(W0=!0,X0);case"textInput":return t=e.data,t===X0&&W0?null:t;default:return null}}function QM(t,e){if(Er)return t==="compositionend"||!nm&&c_(t,e)?(t=o_(),zc=em=ka=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return l_&&e.locale!=="ko"?null:e.data;default:return null}}var JM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Y0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!JM[t.type]:e==="textarea"}function d_(t,e,n,i){br?Or?Or.push(i):Or=[i]:br=i,e=Lu(e,"onChange"),0<e.length&&(n=new Qu("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ko=null,sl=null;function $M(t){rS(t,0)}function $u(t){var e=Po(t);if(t_(e))return t}function q0(t,e){if(t==="change")return e}var f_=!1;if(pa){var Od;if(pa){var Id="oninput"in document;if(!Id){var Z0=document.createElement("div");Z0.setAttribute("oninput","return;"),Id=typeof Z0.oninput=="function"}Od=Id}else Od=!1;f_=Od&&(!document.documentMode||9<document.documentMode)}function K0(){ko&&(ko.detachEvent("onpropertychange",h_),sl=ko=null)}function h_(t){if(t.propertyName==="value"&&$u(sl)){var e=[];d_(e,sl,t,$p(t)),r_($M,e)}}function eT(t,e,n){t==="focusin"?(K0(),ko=e,sl=n,ko.attachEvent("onpropertychange",h_)):t==="focusout"&&K0()}function tT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $u(sl)}function nT(t,e){if(t==="click")return $u(e)}function iT(t,e){if(t==="input"||t==="change")return $u(e)}function aT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:aT;function rl(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Kf.call(e,a)||!Qn(t[a],e[a]))return!1}return!0}function th(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Q0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function J0(t,e){var n=Q0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Q0(n)}}function p_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?p_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function m_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=th(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=th(t.document)}return e}function im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var sT=pa&&"documentMode"in document&&11>=document.documentMode,Mr=null,nh=null,jo=null,ih=!1;function $0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ih||Mr==null||Mr!==th(i)||(i=Mr,"selectionStart"in i&&im(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&rl(jo,i)||(jo=i,i=Lu(nh,"onSelect"),0<i.length&&(e=new Qu("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Mr)))}function fs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Tr={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},Pd={},g_={};pa&&(g_=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Ys(t){if(Pd[t])return Pd[t];if(!Tr[t])return t;var e=Tr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in g_)return Pd[t]=e[n];return t}var x_=Ys("animationend"),v_=Ys("animationiteration"),__=Ys("animationstart"),rT=Ys("transitionrun"),oT=Ys("transitionstart"),lT=Ys("transitioncancel"),y_=Ys("transitionend"),S_=new Map,ah="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ah.push("scrollEnd");function Ni(t,e){S_.set(t,e),Ws(e,[t])}var cT=0;function ma(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Mi.identifierPrefix;var n=cT++;return t="_"+t+"t_"+n.toString(32)+"_",e.autoName=t}function eg(t){if(t==null||typeof t=="string")return t;var e=null,n=Gr;if(n!==null)for(var i=0;i<n.length;i++){var a=t[n[i]];if(a!=null){if(a==="none")return"none";e=e==null?a:e+(" "+a)}}return e??t.default}function Ea(t,e){return t=eg(t),e=eg(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var du=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],Ar=0,am=0;function ed(){for(var t=Ar,e=am=Ar=0;e<t;){var n=ii[e];ii[e++]=null;var i=ii[e];ii[e++]=null;var a=ii[e];ii[e++]=null;var s=ii[e];if(ii[e++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&b_(n,a,s)}}function td(t,e,n,i){ii[Ar++]=t,ii[Ar++]=e,ii[Ar++]=n,ii[Ar++]=i,am|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function sm(t,e,n,i){return td(t,e,n,i),fu(t)}function qs(t,e){return td(t,null,null,e),fu(t)}function b_(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=t.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(a=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,a&&e!==null&&(a=31-Zn(n),t=s.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),s):null}function fu(t){if(50<el)throw el=0,qc=null,Error(ee(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Nr={};function uT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new uT(t,e,n,i)}function rm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&1206910976,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function E_(t,e){t.flags&=1206910978;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Fc(t,e,n,i,a,s){var r=0;if(i=t,typeof i=="function")rm(i)&&(r=1);else if(typeof i=="string")r=B1(t,n,ji.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(i){case Xf:return t=On(31,n,e,a),t.elementType=Xf,t.lanes=s,t;case yr:return Rs(n.children,a,s,e);case Hv:r=8,a|=24;break;case Vf:return t=On(12,n,e,a|2),t.elementType=Vf,t.lanes=s,t;case kf:return t=On(13,n,e,a),t.elementType=kf,t.lanes=s,t;case jf:return t=On(19,n,e,a),t.elementType=jf,t.lanes=s,t;case QE:case Wf:return t=a|32,t=On(30,n,e,t),t.elementType=Wf,t.lanes=s,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Bi:r=10;break e;case Gv:r=9;break e;case Yp:r=11;break e;case qp:r=14;break e;case za:r=16,i=null;break e}r=29,n=Error(ee(130,t===null?"null":typeof t,"")),i=null}return e=On(r,n,e,a),e.elementType=t,e.type=i,e.lanes=s,e}function Rs(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function zd(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function M_(t){var e=On(18,null,null,0);return e.stateNode=t,e}function Bd(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var tg=new WeakMap;function ci(t,e){if(typeof t=="object"&&t!==null){var n=tg.get(t);return n!==void 0?n:(e={value:t,source:e,stack:L0(e)},tg.set(t,e),e)}return{value:t,source:e,stack:L0(e)}}var Rr=[],Cr=0,hu=null,ol=0,si=[],ri=0,as=null,Hi=1,Gi="";function ra(t,e){Rr[Cr++]=ol,Rr[Cr++]=hu,hu=t,ol=e}function T_(t,e,n){si[ri++]=Hi,si[ri++]=Gi,si[ri++]=as,as=t;var i=Hi;t=Gi;var a=32-Zn(i)-1;i&=~(1<<a),n+=1;var s=32-Zn(e)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,Hi=1<<32-Zn(e)+a|n<<a|i,Gi=s+t}else Hi=1<<s|n<<a|i,Gi=t}function nd(t){t.return!==null&&(ra(t,1),T_(t,1,0))}function om(t){for(;t===hu;)hu=Rr[--Cr],Rr[Cr]=null,ol=Rr[--Cr],Rr[Cr]=null;for(;t===as;)as=si[--ri],si[ri]=null,Gi=si[--ri],si[ri]=null,Hi=si[--ri],si[ri]=null}function A_(t,e){si[ri++]=Hi,si[ri++]=Gi,si[ri++]=as,Hi=e.id,Gi=e.overflow,as=t}var rn=null,Dt=null,Je=!1,Za=null,ui=!1,sh=Error(ee(519));function ss(t){var e=Error(ee(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll(ci(e,t)),sh}function ng(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[ln]=t,e[Fn]=i,n){case"dialog":tt("cancel",e),tt("close",e);break;case"iframe":case"object":case"embed":tt("load",e);break;case"video":case"audio":for(n=0;n<fl.length;n++)tt(fl[n],e);break;case"source":tt("error",e);break;case"img":case"image":case"link":tt("error",e),tt("load",e);break;case"details":tt("toggle",e);break;case"input":tt("invalid",e),n_(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":tt("invalid",e);break;case"textarea":tt("invalid",e),a_(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||lS(e.textContent,n)?(i.popover!=null&&(tt("beforetoggle",e),tt("toggle",e)),i.onScroll!=null&&tt("scroll",e),i.onScrollEnd!=null&&tt("scrollend",e),i.onClick!=null&&(e.onclick=Fi),e=!0):e=!1,e||ss(t,!0)}function pu(t){for(rn=t.return;rn;)switch(rn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:rn=rn.return}}function $s(t){if(t!==rn)return!1;if(!Je)return pu(t),Je=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||kh(t.type,t.memoizedProps)),n=!n),n&&Dt&&ss(t),pu(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));Dt=Kg(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));Dt=Kg(t)}else e===27?(e=Dt,us(t.type)?(t=Yh,Yh=null,Dt=t):Dt=e):Dt=rn?fi(t.stateNode.nextSibling):null;return!0}function Ls(){Dt=rn=null,Je=!1}function Fd(){var t=Za;return t!==null&&(Ln===null?Ln=t:Ln.push.apply(Ln,t),Za=null),t}function ll(t){Za===null?Za=[t]:Za.push(t)}var rh=Qi(null),Zs=null,la=null;function ja(t,e,n){Ut(rh,e._currentValue),e._currentValue=n}function da(t){t._currentValue=rh.current,dn(rh)}function Hc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function oh(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=a;for(var c=0;c<e.length;c++)if(o.context===e[c]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Hc(s.return,n,t),i||(r=null);break e}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(ee(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Hc(r,n,t),r=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),Hc(a.return,n,t),r=a.child,r=r!==null?r.sibling:null):r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Us(t,e,n,i){t=null;for(var a=e,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(ee(387));if(r=r.memoizedProps,r!==null){var o=a.type;Qn(a.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(a===ru.current){if(r=a.alternate,r===null)throw Error(ee(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(eo):t=[eo])}a=a.return}return t!==null&&oh(e,t,n,i),e.flags|=262144,t!==null}function mu(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Os(t){Zs=t,la=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function cn(t){return N_(Zs,t)}function ql(t,e){return Zs===null&&Os(t),N_(t,e)}function N_(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},la===null){if(t===null)throw Error(ee(308));la=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else la=la.next=e;return n}var dT=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},fT=Jt.unstable_scheduleCallback,hT=Jt.unstable_NormalPriority,Yt={$$typeof:Bi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lm(){return{controller:new dT,data:new Map,refCount:0}}function Cl(t){t.refCount--,t.refCount===0&&fT(hT,function(){t.controller.abort()})}function ig(t,e){if(t.pendingLanes&4194048){var n=t.transitionTypes;for(n===null&&(n=t.transitionTypes=[]),t=0;t<e.length;t++){var i=e[t];n.indexOf(i)===-1&&n.push(i)}}}var zo=null;function pT(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Xo=null,lh=0,Is=0,Ir=null;function mT(t,e){if(Xo===null){var n=Xo=[];lh=0,Is=Pm(),Ir={status:"pending",value:void 0,then:function(i){n.push(i)}}}return lh++,e.then(ag,ag),e}function ag(){if(--lh===0&&(zo=null,Xo!==null)){Ir!==null&&(Ir.status="fulfilled");var t=Xo;Xo=null,Is=0,Ir=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function gT(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var sg=Be.S;Be.S=function(t,e){if(Xy=Yn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&mT(t,e),zo!==null)for(var n=Qr;n!==null;)ig(n,zo),n=n.next;if(n=t.types,n!==null){for(var i=Qr;i!==null;)ig(i,n),i=i.next;if(Is!==0){i=zo,i===null&&(i=zo=[]);for(var a=0;a<n.length;a++){var s=n[a];i.indexOf(s)===-1&&i.push(s)}}}sg!==null&&sg(t,e)};var Cs=Qi(null);function cm(){var t=Cs.current;return t!==null?t:At.pooledCache}function Gc(t,e){e===null?Ut(Cs,Cs.current):Ut(Cs,e.pool)}function R_(){var t=cm();return t===null?null:{parent:Yt._currentValue,pool:t}}var co=Error(ee(460)),um=Error(ee(474)),id=Error(ee(542)),gu={then:function(){}};function rg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function C_(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Fi,Fi),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,lg(t),t===void 0&&!("reason"in e)?Error(ee(600)):t;default:if(typeof e.status=="string")e.then(Fi,Fi);else{if(t=At,t!==null&&100<t.shellSuspendCounter)throw Error(ee(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,lg(t),t}throw ws=e,co}}function Ss(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ws=n,co):n}}var ws=null;function og(){if(ws===null)throw Error(ee(459));var t=ws;return ws=null,t}function lg(t){if(t===co||t===id)throw Error(ee(483))}var Pr=null,cl=0;function Zl(t){var e=cl;return cl+=1,Pr===null&&(Pr=[]),C_(Pr,t,e)}function Ca(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Kl(t,e){throw e.$$typeof===KE?Error(ee(525)):(t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function w_(t){function e(f,v){if(t){var M=f.deletions;M===null?(f.deletions=[v],f.flags|=16):M.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f){for(var v=new Map;f!==null;)f.key===null?v.set(f.index,f):v.set(f.key,f),f=f.sibling;return v}function a(f,v){return f=ua(f,v),f.index=0,f.sibling=null,f}function s(f,v,M){return f.index=M,t?(M=f.alternate,M!==null?(M=M.index,M<v?(f.flags|=2,v):M):(f.flags|=134217730,v)):(f.flags|=1048576,v)}function r(f){return t&&f.alternate===null&&(f.flags|=134217730),f}function o(f,v,M,S){return v===null||v.tag!==6?(v=zd(M,f.mode,S),v.return=f,v):(v=a(v,M),v.return=f,v)}function c(f,v,M,S){var T=M.type;return T===yr?(f=h(f,v,M.props.children,S,M.key),Ca(f,M),f):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===za&&Ss(T)===v.type)?(v=a(v,M.props),Ca(v,M),v.return=f,v):(v=Fc(M.type,M.key,M.props,null,f.mode,S),Ca(v,M),v.return=f,v)}function u(f,v,M,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==M.containerInfo||v.stateNode.implementation!==M.implementation?(v=Bd(M,f.mode,S),v.return=f,v):(v=a(v,M.children||[]),v.return=f,v)}function h(f,v,M,S,T){return v===null||v.tag!==7?(v=Rs(M,f.mode,S,T),v.return=f,v):(v=a(v,M),v.return=f,v)}function m(f,v,M){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=zd(""+v,f.mode,M),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vl:return M=Fc(v.type,v.key,v.props,null,f.mode,M),Ca(M,v),M.return=f,M;case Oo:return v=Bd(v,f.mode,M),v.return=f,v;case za:return v=Ss(v),m(f,v,M)}if(Io(v)||_o(v))return v=Rs(v,f.mode,M,null),v.return=f,v;if(typeof v.then=="function")return m(f,Zl(v),M);if(v.$$typeof===Bi)return m(f,ql(f,v),M);Kl(f,v)}return null}function d(f,v,M,S){var T=v!==null?v.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return T!==null?null:o(f,v,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Vl:return M.key===T?c(f,v,M,S):null;case Oo:return M.key===T?u(f,v,M,S):null;case za:return M=Ss(M),d(f,v,M,S)}if(Io(M)||_o(M))return T!==null?null:h(f,v,M,S,null);if(typeof M.then=="function")return d(f,v,Zl(M),S);if(M.$$typeof===Bi)return d(f,v,ql(f,M),S);Kl(f,M)}return null}function p(f,v,M,S,T){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(M)||null,o(v,f,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vl:return f=f.get(S.key===null?M:S.key)||null,c(v,f,S,T);case Oo:return f=f.get(S.key===null?M:S.key)||null,u(v,f,S,T);case za:return S=Ss(S),p(f,v,M,S,T)}if(Io(S)||_o(S))return f=f.get(M)||null,h(v,f,S,T,null);if(typeof S.then=="function")return p(f,v,M,Zl(S),T);if(S.$$typeof===Bi)return p(f,v,M,ql(v,S),T);Kl(v,S)}return null}function g(f,v,M,S){for(var T=null,A=null,N=v,y=v=0,R=null;N!==null&&y<M.length;y++){N.index>y?(R=N,N=null):R=N.sibling;var w=d(f,N,M[y],S);if(w===null){N===null&&(N=R);break}t&&N&&w.alternate===null&&e(f,N),v=s(w,v,y),A===null?T=w:A.sibling=w,A=w,N=R}if(y===M.length)return n(f,N),Je&&ra(f,y),T;if(N===null){for(;y<M.length;y++)N=m(f,M[y],S),N!==null&&(v=s(N,v,y),A===null?T=N:A.sibling=N,A=N);return Je&&ra(f,y),T}for(N=i(N);y<M.length;y++)R=p(N,f,y,M[y],S),R!==null&&(t&&(w=R.alternate,w!==null&&N.delete(w.key===null?y:w.key)),v=s(R,v,y),A===null?T=R:A.sibling=R,A=R);return t&&N.forEach(function(O){return e(f,O)}),Je&&ra(f,y),T}function b(f,v,M,S){if(M==null)throw Error(ee(151));for(var T=null,A=null,N=v,y=v=0,R=null,w=M.next();N!==null&&!w.done;y++,w=M.next()){N.index>y?(R=N,N=null):R=N.sibling;var O=d(f,N,w.value,S);if(O===null){N===null&&(N=R);break}t&&N&&O.alternate===null&&e(f,N),v=s(O,v,y),A===null?T=O:A.sibling=O,A=O,N=R}if(w.done)return n(f,N),Je&&ra(f,y),T;if(N===null){for(;!w.done;y++,w=M.next())w=m(f,w.value,S),w!==null&&(v=s(w,v,y),A===null?T=w:A.sibling=w,A=w);return Je&&ra(f,y),T}for(N=i(N);!w.done;y++,w=M.next())w=p(N,f,y,w.value,S),w!==null&&(t&&(R=w.alternate,R!==null&&N.delete(R.key===null?y:R.key)),v=s(w,v,y),A===null?T=w:A.sibling=w,A=w);return t&&N.forEach(function(F){return e(f,F)}),Je&&ra(f,y),T}function x(f,v,M,S){if(typeof M=="object"&&M!==null&&M.type===yr&&M.key===null&&M.props.ref===void 0&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Vl:e:{for(var T=M.key;v!==null;){if(v.key===T){if(T=M.type,T===yr){if(v.tag===7){n(f,v.sibling),S=a(v,M.props.children),Ca(S,M),S.return=f,f=S;break e}}else if(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===za&&Ss(T)===v.type){n(f,v.sibling),S=a(v,M.props),Ca(S,M),S.return=f,f=S;break e}n(f,v);break}else e(f,v);v=v.sibling}M.type===yr?(S=Rs(M.props.children,f.mode,S,M.key),Ca(S,M),S.return=f,f=S):(S=Fc(M.type,M.key,M.props,null,f.mode,S),Ca(S,M),S.return=f,f=S)}return r(f);case Oo:e:{for(T=M.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===M.containerInfo&&v.stateNode.implementation===M.implementation){n(f,v.sibling),S=a(v,M.children||[]),S.return=f,f=S;break e}else{n(f,v);break}else e(f,v);v=v.sibling}S=Bd(M,f.mode,S),S.return=f,f=S}return r(f);case za:return M=Ss(M),x(f,v,M,S)}if(Io(M))return g(f,v,M,S);if(_o(M)){if(T=_o(M),typeof T!="function")throw Error(ee(150));return M=T.call(M),b(f,v,M,S)}if(typeof M.then=="function")return x(f,v,Zl(M),S);if(M.$$typeof===Bi)return x(f,v,ql(f,M),S);Kl(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,v!==null&&v.tag===6?(n(f,v.sibling),S=a(v,M),S.return=f,f=S):(n(f,v),S=zd(M,f.mode,S),S.return=f,f=S),r(f)):n(f,v)}return function(f,v,M,S){try{cl=0;var T=x(f,v,M,S);return Pr=null,T}catch(N){if(N===co||N===id)throw N;var A=On(29,N,null,f.mode);return A.lanes=S,A.return=f,A}finally{}}}var Ps=w_(!0),D_=w_(!1),Ba=!1;function dm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ch(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=fu(t),b_(t,null,n),e}return td(t,i,e,n),fu(t)}function Wo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qv(t,n)}}function Hd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=e:s=s.next=e}else a=s=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var uh=!1;function Yo(){if(uh){var t=Ir;if(t!==null)throw t}}function qo(t,e,n,i){uh=!1;var a=t.updateQueue;Ba=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var c=o,u=c.next;c.next=null,r===null?s=u:r.next=u,r=c;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=c))}if(s!==null){var m=a.baseState;r=0,h=u=c=null,o=s;do{var d=o.lane&-536870913,p=d!==o.lane;if(p?(at&d)===d:(i&d)===d){d!==0&&d===Is&&(uh=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var g=t,b=o;d=e;var x=n;switch(b.tag){case 1:if(g=b.payload,typeof g=="function"){m=g.call(x,m,d);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,d=typeof g=="function"?g.call(x,m,d):g,d==null)break e;m=Nt({},m,d);break e;case 2:Ba=!0}}d=o.callback,d!==null&&(t.flags|=64,p&&(t.flags|=8192),p=a.callbacks,p===null?a.callbacks=[d]:p.push(d))}else p={lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=p,c=m):h=h.next=p,r|=d;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(c=m),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),ls|=r,t.lanes=r,t.memoizedState=m}}function L_(t,e){if(typeof t!="function")throw Error(ee(191,t));t.call(e)}function U_(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)L_(n[t],e)}var rs=Qi(null),xu=Qi(0);function cg(t,e){t=_a,Ut(xu,t),Ut(rs,e),_a=t|e.baseLanes}function dh(){Ut(xu,_a),Ut(rs,rs.current)}function fm(){_a=xu.current,dn(rs),dn(xu)}var pn=Qi(null),_n=null;function Ja(t){var e=t.alternate;Ut(fn,fn.current&1),Ut(pn,t),_n===null&&(e===null||rs.current!==null||e.memoizedState!==null)&&(_n=t)}function fh(t){Ut(fn,fn.current),Ut(pn,t),_n===null&&(_n=t)}function O_(t){t.tag===22?(Ut(fn,fn.current),Ut(pn,t),_n===null&&(_n=t)):$a()}function $a(){Ut(fn,fn.current),Ut(pn,pn.current)}function jn(t){dn(pn),_n===t&&(_n=null),dn(fn)}var fn=Qi(0);function ul(t,e){Ut(pn,pn.current),Ut(fn,e)}function hm(t){dn(fn),dn(pn),_n===t&&(_n=null)}function vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Wh(n)||Hm(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ga=0,Ye=null,Mt=null,Wt=null,_u=!1,zr=!1,zs=!1,yu=0,dl=0,Br=null,xT=0;function Bt(){throw Error(ee(321))}function pm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function mm(t,e,n,i,a,s){return ga=s,Ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Be.H=t===null||t.memoizedState===null?dy:fy,zs=!1,s=n(i,a),zs=!1,zr&&(s=P_(e,n,i,a)),I_(t),s}function I_(t){Be.H=Su;var e=Mt!==null&&Mt.next!==null;if(ga=0,Wt=Mt=Ye=null,_u=!1,dl=0,Br=null,e)throw Error(ee(300));t===null||qt||(t=t.dependencies,t!==null&&mu(t)&&(qt=!0))}function P_(t,e,n,i){Ye=t;var a=0;do{if(zr&&(Br=null),dl=0,zr=!1,25<=a)throw Error(ee(301));if(a+=1,Wt=Mt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Be.H=TT,s=e(n,i)}while(zr);return s}function vT(){var t=Be.H,e=t.useState()[0];return e=typeof e.then=="function"?wl(e):e,t=t.useState()[0],(Mt!==null?Mt.memoizedState:null)!==t&&(Ye.flags|=1024),e}function gm(){var t=yu!==0;return yu=0,t}function xm(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function vm(t){if(_u){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}_u=!1}ga=0,Wt=Mt=Ye=null,zr=!1,dl=yu=0,Br=null}function An(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Ye.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function kt(){if(Mt===null){var t=Ye.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Wt===null?Ye.memoizedState:Wt.next;if(e!==null)Wt=e,Mt=t;else{if(t===null)throw Ye.alternate===null?Error(ee(467)):Error(ee(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Wt===null?Ye.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function ad(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wl(t){var e=dl;return dl+=1,Br===null&&(Br=[]),t=C_(Br,t,e),e=Ye,(Wt===null?e.memoizedState:Wt.next)===null&&(e=e.alternate,Be.H=e===null||e.memoizedState===null?dy:fy),t}function sd(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return wl(t);if(t.$$typeof===$E)return;if(t.$$typeof===Bi)return cn(t)}throw Error(ee(438,String(t)))}function _m(t){var e=null,n=Ye.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Ye.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=ad(),Ye.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=JE;return e.index++,n}function xa(t,e){return typeof e=="function"?e(t):e}function Vc(t){var e=kt();return ym(e,Mt,t)}function ym(t,e,n){var i=t.queue;if(i===null)throw Error(ee(311));i.lastRenderedReducer=n;var a=t.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}e.baseQueue=a=s,i.pending=null}if(s=t.baseState,a===null)t.memoizedState=s;else{e=a.next;var o=r=null,c=null,u=e,h=!1;do{var m=u.lane&-536870913;if(m!==u.lane?(at&m)===m:(ga&m)===m){var d=u.revertLane;if(d===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),m===Is&&(h=!0);else if((ga&d)===d){u=u.next,d===Is&&(h=!0);continue}else m={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},c===null?(o=c=m,r=s):c=c.next=m,Ye.lanes|=d,ls|=d;m=u.action,zs&&n(s,m),s=u.hasEagerState?u.eagerState:n(s,m)}else d={lane:m,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},c===null?(o=c=d,r=s):c=c.next=d,Ye.lanes|=m,ls|=m;u=u.next}while(u!==null&&u!==e);if(c===null?r=s:c.next=o,!Qn(s,t.memoizedState)&&(qt=!0,h&&(n=Ir,n!==null)))throw n;t.memoizedState=s,t.baseState=r,t.baseQueue=c,i.lastRenderedState=s}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Gd(t){var e=kt(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,s=e.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=t(s,r.action),r=r.next;while(r!==a);Qn(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function z_(t,e,n){var i=Ye,a=kt(),s=Je;if(s){if(n===void 0)throw Error(ee(407));n=n()}else n=e();var r=!Qn((Mt||a).memoizedState,n);if(r&&(a.memoizedState=n,qt=!0),a=a.queue,Sm(H_.bind(null,i,a,t),[t]),t=a.getSnapshot!==e||r||Wt!==null&&(Wt.memoizedState.tag&1)!==0,Yr(t?9:8,{destroy:void 0},F_.bind(null,i,a,n,e),null),t){if(i.flags|=2048,At===null)throw Error(ee(349));s||ga&127||B_(i,e,n)}return n}function B_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ye.updateQueue,e===null?(e=ad(),Ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function F_(t,e,n,i){e.value=n,e.getSnapshot=i,G_(e)&&V_(t)}function H_(t,e,n){return n(function(){G_(e)&&V_(t)})}function G_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function V_(t){var e=qs(t,2);e!==null&&Pn(e,t,2)}function hh(t){var e=An();if(typeof t=="function"){var n=t;if(t=n(),zs){Va(!0);try{n()}finally{Va(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e}function k_(t,e,n,i){return t.baseState=n,ym(t,Mt,typeof i=="function"?i:xa)}function _T(t,e,n,i,a){if(od(t))throw Error(ee(485));if(t=e.action,t!==null){var s={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Be.T!==null?n(!0):s.isTransition=!1,i(s),n=e.pending,n===null?(s.next=e.pending=s,j_(e,s)):(s.next=n.next,e.pending=n.next=s)}}function j_(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var s=Be.T,r={};r.types=s!==null?s.types:null,Be.T=r;try{var o=n(a,i),c=Be.S;c!==null&&c(r,o),ug(t,e,o)}catch(u){ph(t,e,u)}finally{s!==null&&r.types!==null&&(s.types=r.types),Be.T=s}}else try{s=n(a,i),ug(t,e,s)}catch(u){ph(t,e,u)}}function ug(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){dg(t,e,i)},function(i){return ph(t,e,i)}):dg(t,e,n)}function dg(t,e,n){e.status="fulfilled",e.value=n,X_(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,j_(t,n)))}function ph(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,X_(e),e=e.next;while(e!==i)}t.action=null}function X_(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function W_(t,e){return e}function fg(t,e){if(Je){var n=At.formState;if(n!==null){e:{var i=Ye;if(Je){if(Dt){t:{for(var a=Dt,s=ui;a.nodeType!==8;){if(!s){a=null;break t}if(a=fi(a.nextSibling),a===null){a=null;break t}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Dt=fi(a.nextSibling),i=a.data==="F!";break e}}ss(i)}i=!1}i&&(e=n[0])}}return n=An(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:W_,lastRenderedState:e},n.queue=i,n=ly.bind(null,Ye,i),i.dispatch=n,i=hh(!1),s=Tm.bind(null,Ye,!1,i.queue),i=An(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=_T.bind(null,Ye,a,s,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function hg(t){var e=kt();return Y_(e,Mt,t)}function Y_(t,e,n){if(e=ym(t,e,W_)[0],t=Vc(xa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=wl(e)}catch(r){throw r===co?id:r}else i=e;e=kt();var a=e.queue,s=a.dispatch;return n!==e.memoizedState&&(Ye.flags|=2048,Yr(9,{destroy:void 0},yT.bind(null,a,n),null)),[i,s,t]}function yT(t,e){t.action=e}function pg(t){var e=kt(),n=Mt;if(n!==null)return Y_(e,n,t);kt(),e=e.memoizedState,n=kt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Yr(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Ye.updateQueue,e===null&&(e=ad(),Ye.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function q_(){return kt().memoizedState}function kc(t,e,n,i){var a=An();Ye.flags|=t,a.memoizedState=Yr(1|e,{destroy:void 0},n,i===void 0?null:i)}function rd(t,e,n,i){var a=kt();i=i===void 0?null:i;var s=a.memoizedState.inst;Mt!==null&&i!==null&&pm(i,Mt.memoizedState.deps)?a.memoizedState=Yr(e,s,n,i):(Ye.flags|=t,a.memoizedState=Yr(1|e,s,n,i))}function mg(t,e){kc(8390656,8,t,e)}function Sm(t,e){rd(2048,8,t,e)}function ST(t){Ye.flags|=4;var e=Ye.updateQueue;if(e===null)e=ad(),Ye.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Z_(t){var e=kt().memoizedState;return ST({ref:e,nextImpl:t}),function(){if(ft&2)throw Error(ee(440));return e.impl.apply(void 0,arguments)}}function K_(t,e){return rd(4,2,t,e)}function Q_(t,e){return rd(4,4,t,e)}function J_(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $_(t,e,n){n=n!=null?n.concat([t]):null,rd(4,4,J_.bind(null,e,t),n)}function bm(){}function ey(t,e){var n=kt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&pm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ty(t,e){var n=kt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&pm(e,i[1]))return i[0];if(i=t(),zs){Va(!0);try{t()}finally{Va(!1)}}return n.memoizedState=[i,e],i}function Em(t,e,n){return n===void 0||ga&1073741824&&!(at&261930)?t.memoizedState=e:(t.memoizedState=n,t=Yy(),Ye.lanes|=t,ls|=t,n)}function ny(t,e,n,i){return Qn(n,e)?n:rs.current!==null?(t=Em(t,n,i),Qn(t,e)||(qt=!0),t):!(ga&106)||ga&1073741824&&!(at&261930)?(qt=!0,t.memoizedState=n):(t=Yy(),Ye.lanes|=t,ls|=t,e)}function iy(t,e,n,i,a){var s=ht.p;ht.p=s!==0&&8>s?s:8;var r=Be.T,o={};o.types=r!==null?r.types:null,Be.T=o,Tm(t,!1,e,n);try{var c=a(),u=Be.S;if(u!==null&&u(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=gT(c,i);Zo(t,e,h,Kn(t))}else Zo(t,e,i,Kn(t))}catch(m){Zo(t,e,{then:function(){},status:"rejected",reason:m},Kn())}finally{ht.p=s,r!==null&&o.types!==null&&(r.types=o.types),Be.T=r}}function bT(){}function mh(t,e,n,i){if(t.tag!==5)throw Error(ee(476));var a=ay(t).queue;iy(t,a,e,Ns,n===null?bT:function(){return sy(t),n(i)})}function ay(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Ns,baseState:Ns,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:Ns},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function sy(t){var e=ay(t);e.next===null&&(e=t.alternate.memoizedState),Zo(t,e.next.queue,{},Kn())}function Mm(){return cn(eo)}function ry(){return kt().memoizedState}function oy(){return kt().memoizedState}function ET(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Kn();t=Ka(n);var i=Qa(e,t,n);i!==null&&(Pn(i,e,n),Wo(i,e,n)),e={cache:lm()},t.payload=e;return}e=e.return}}function MT(t,e,n){var i=Kn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},od(t)?cy(e,n):(n=sm(t,e,n,i),n!==null&&(Pn(n,t,i),uy(n,e,i)))}function ly(t,e,n){var i=Kn();Zo(t,e,n,i)}function Zo(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(od(t))cy(e,a);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Qn(o,r))return td(t,e,a,0),At===null&&ed(),!1}catch{}finally{}if(n=sm(t,e,a,i),n!==null)return Pn(n,t,i),uy(n,e,i),!0}return!1}function Tm(t,e,n,i){if(i={lane:2,revertLane:Pm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},od(t)){if(e)throw Error(ee(479))}else e=sm(t,n,i,2),e!==null&&Pn(e,t,2)}function od(t){var e=t.alternate;return t===Ye||e!==null&&e===Ye}function cy(t,e){zr=_u=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uy(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qv(t,n)}}var Su={readContext:cn,use:sd,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useLayoutEffect:Bt,useInsertionEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useSyncExternalStore:Bt,useId:Bt,useHostTransitionStatus:Bt,useFormState:Bt,useActionState:Bt,useOptimistic:Bt,useMemoCache:Bt,useCacheRefresh:Bt,useEffectEvent:Bt},dy={readContext:cn,use:sd,useCallback:function(t,e){return An().memoizedState=[t,e===void 0?null:e],t},useContext:cn,useEffect:mg,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,kc(4194308,4,J_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kc(4194308,4,t,e)},useInsertionEffect:function(t,e){kc(4,2,t,e)},useMemo:function(t,e){var n=An();e=e===void 0?null:e;var i=t();if(zs){Va(!0);try{t()}finally{Va(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=An();if(n!==void 0){var a=n(e);if(zs){Va(!0);try{n(e)}finally{Va(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=MT.bind(null,Ye,t),[i.memoizedState,t]},useRef:function(t){var e=An();return t={current:t},e.memoizedState=t},useState:function(t){t=hh(t);var e=t.queue,n=ly.bind(null,Ye,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:bm,useDeferredValue:function(t,e){var n=An();return Em(n,t,e)},useTransition:function(){var t=hh(!1);return t=iy.bind(null,Ye,t.queue,!0,!1),An().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Ye,a=An();if(Je){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),At===null)throw Error(ee(349));at&127||B_(i,e,n)}a.memoizedState=n;var s={value:n,getSnapshot:e};return a.queue=s,mg(H_.bind(null,i,s,t),[t]),i.flags|=2048,Yr(9,{destroy:void 0},F_.bind(null,i,s,n,e),null),n},useId:function(){var t=An(),e=At.identifierPrefix;if(Je){var n=Gi,i=Hi;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=yu++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=xT++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Mm,useFormState:fg,useActionState:fg,useOptimistic:function(t){var e=An();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Tm.bind(null,Ye,!0,n),n.dispatch=e,[t,e]},useMemoCache:_m,useCacheRefresh:function(){return An().memoizedState=ET.bind(null,Ye)},useEffectEvent:function(t){var e=An(),n={impl:t};return e.memoizedState=n,function(){if(ft&2)throw Error(ee(440));return n.impl.apply(void 0,arguments)}}},fy={readContext:cn,use:sd,useCallback:ey,useContext:cn,useEffect:Sm,useImperativeHandle:$_,useInsertionEffect:K_,useLayoutEffect:Q_,useMemo:ty,useReducer:Vc,useRef:q_,useState:function(){return Vc(xa)},useDebugValue:bm,useDeferredValue:function(t,e){var n=kt();return ny(n,Mt.memoizedState,t,e)},useTransition:function(){var t=Vc(xa)[0],e=kt().memoizedState;return[typeof t=="boolean"?t:wl(t),e]},useSyncExternalStore:z_,useId:ry,useHostTransitionStatus:Mm,useFormState:hg,useActionState:hg,useOptimistic:function(t,e){var n=kt();return k_(n,Mt,t,e)},useMemoCache:_m,useCacheRefresh:oy,useEffectEvent:Z_},TT={readContext:cn,use:sd,useCallback:ey,useContext:cn,useEffect:Sm,useImperativeHandle:$_,useInsertionEffect:K_,useLayoutEffect:Q_,useMemo:ty,useReducer:Gd,useRef:q_,useState:function(){return Gd(xa)},useDebugValue:bm,useDeferredValue:function(t,e){var n=kt();return Mt===null?Em(n,t,e):ny(n,Mt.memoizedState,t,e)},useTransition:function(){var t=Gd(xa)[0],e=kt().memoizedState;return[typeof t=="boolean"?t:wl(t),e]},useSyncExternalStore:z_,useId:ry,useHostTransitionStatus:Mm,useFormState:pg,useActionState:pg,useOptimistic:function(t,e){var n=kt();return Mt!==null?k_(n,Mt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:_m,useCacheRefresh:oy,useEffectEvent:Z_};function Vd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gh={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kn(),a=Ka(i);a.payload=e,n!=null&&(a.callback=n),e=Qa(t,a,i),e!==null&&(Pn(e,t,i),Wo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kn(),a=Ka(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Qa(t,a,i),e!==null&&(Pn(e,t,i),Wo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kn(),i=Ka(n);i.tag=2,e!=null&&(i.callback=e),e=Qa(t,i,n),e!==null&&(Pn(e,t,n),Wo(e,t,n))}};function gg(t,e,n,i,a,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,r):e.prototype&&e.prototype.isPureReactComponent?!rl(n,i)||!rl(a,s):!0}function xg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&gh.enqueueReplaceState(e,e.state,null)}function Bs(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=Nt({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function hy(t){du(t)}function py(t){console.error(t)}function my(t){du(t)}function bu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function vg(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function xh(t,e,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){bu(t,e)},n}function gy(t){return t=Ka(t),t.tag=3,t}function xy(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;t.payload=function(){return a(s)},t.callback=function(){vg(e,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){vg(e,n,i),typeof a!="function"&&(es===null?es=new Set([this]):es.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function AT(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Us(e,n,a,!0),n=pn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return _n===null?wu():n.alternate===null&&Ft===0&&(Ft=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===gu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Zd(t,i,a)),!1;case 22:return n.flags|=65536,i===gu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Zd(t,i,a)),!1}throw Error(ee(435,n.tag))}return Zd(t,i,a),wu(),!1}if(Je)return e=pn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==sh&&(t=Error(ee(422),{cause:i}),ll(ci(t,n)))):(i!==sh&&(e=Error(ee(423),{cause:i}),ll(ci(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=ci(i,n),a=xh(t.stateNode,i,a),Hd(t,a),Ft!==4&&(Ft=2)),!1;var s=Error(ee(520),{cause:i});if(s=ci(s,n),$o===null?$o=[s]:$o.push(s),Ft!==4&&(Ft=2),e===null)return!0;i=ci(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=xh(n.stateNode,i,t),Hd(n,t),!1;case 1:if(e=n.type,s=n.stateNode,!(n.flags&128)&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(es===null||!es.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=gy(a),xy(a,t,n,i),Hd(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Am=Error(ee(461)),qt=!1;function Kt(t,e,n,i){e.child=t===null?D_(e,null,n,i):Ps(e,t.child,n,i)}function _g(t,e,n,i,a){n=n.render;var s=e.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Os(e),i=mm(t,e,n,r,s,a),o=gm(),t!==null&&!qt?(xm(t,e,a),va(t,e,a)):(Je&&o&&nd(e),e.flags|=1,Kt(t,e,i,a),e.child)}function yg(t,e,n,i,a){if(t===null){var s=n.type;return typeof s=="function"&&!rm(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,vy(t,e,s,i,a)):(t=Fc(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!Rm(t,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(r,i)&&t.ref===e.ref)return va(t,e,a)}return e.flags|=1,t=ua(s,i),t.ref=e.ref,t.return=e,e.child=t}function vy(t,e,n,i,a){if(t!==null){var s=t.memoizedProps;if(rl(s,i)&&t.ref===e.ref)if(qt=!1,e.pendingProps=i=s,Rm(t,a))t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,va(t,e,a)}return vh(t,e,n,i,a)}function _y(t,e,n,i){var a=i.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(s=s!==null?s.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,e.child=null;return Sg(t,e,s,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gc(e,s!==null?s.cachePool:null),s!==null?cg(e,s):dh(),O_(e);else return i=e.lanes=536870912,Sg(t,e,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Gc(e,s.cachePool),cg(e,s),$a(),e.memoizedState=null):(t!==null&&Gc(e,null),dh(),$a());return Kt(t,e,a,n),e.child}function Ko(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Sg(t,e,n,i,a){var s=cm();return s=s===null?null:{parent:Yt._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&Gc(e,null),dh(),O_(e),t!==null&&Us(t,e,i,!0),e.childLanes=a,null}function jc(t,e){return e=ld({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function bg(t,e,n){return Ps(e,t.child,null,n),t=jc(e,e.pendingProps),t.flags|=2,jn(e),e.memoizedState=null,t}function NT(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Je){if(i.mode==="hidden")return t=jc(e,i),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Ko(null,t);if(fh(e),(t=Dt)?(t=vS(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:as!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},n=M_(t),n.return=e,e.child=n,rn=e,Dt=null)):t=null,t===null)throw ss(e);return e.lanes=536870912,null}return jc(e,i)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(fh(e),a)if(e.flags&256)e.flags&=-257,e=bg(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(ee(558));else if(qt||Us(t,e,n,!1),a=(n&t.childLanes)!==0,qt||a){if(rs.current===null){if(i=At,i!==null&&(r=Zv(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,qs(t,r),Pn(i,t,r),Am;wu()}e=bg(t,e,n)}else t=s.treeContext,Dt=fi(r.nextSibling),rn=e,Je=!0,Za=null,ui=!1,t!==null&&A_(e,t),e=jc(e,i),e.flags|=134221824;return e}return t=ua(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function mr(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(ee(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function vh(t,e,n,i,a){return Os(e),n=mm(t,e,n,i,void 0,a),i=gm(),t!==null&&!qt?(xm(t,e,a),va(t,e,a)):(Je&&i&&nd(e),e.flags|=1,Kt(t,e,n,a),e.child)}function Eg(t,e,n,i,a,s){return Os(e),e.updateQueue=null,n=P_(e,i,n,a),I_(t),i=gm(),t!==null&&!qt?(xm(t,e,s),va(t,e,s)):(Je&&i&&nd(e),e.flags|=1,Kt(t,e,n,s),e.child)}function Mg(t,e,n,i,a){if(Os(e),e.stateNode===null){var s=Nr,r=n.contextType;typeof r=="object"&&r!==null&&(s=cn(r)),s=new n(i,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=gh,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=i,s.state=e.memoizedState,s.refs={},dm(e),r=n.contextType,s.context=typeof r=="object"&&r!==null?cn(r):Nr,s.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Vd(e,n,r,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&gh.enqueueReplaceState(s,s.state,null),qo(e,i,s,a),Yo(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,c=Bs(n,o);s.props=c;var u=s.context,h=n.contextType;r=Nr,typeof h=="object"&&h!==null&&(r=cn(h));var m=n.getDerivedStateFromProps;h=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||u!==r)&&xg(e,s,i,r),Ba=!1;var d=e.memoizedState;s.state=d,qo(e,i,s,a),Yo(),u=e.memoizedState,o||d!==u||Ba?(typeof m=="function"&&(Vd(e,n,m,i),u=e.memoizedState),(c=Ba||gg(e,n,c,i,d,u,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),s.props=i,s.state=u,s.context=r,i=c):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,ch(t,e),r=e.memoizedProps,h=Bs(n,r),s.props=h,m=e.pendingProps,d=s.context,u=n.contextType,c=Nr,typeof u=="object"&&u!==null&&(c=cn(u)),o=n.getDerivedStateFromProps,(u=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==m||d!==c)&&xg(e,s,i,c),Ba=!1,d=e.memoizedState,s.state=d,qo(e,i,s,a),Yo();var p=e.memoizedState;r!==m||d!==p||Ba||t!==null&&t.dependencies!==null&&mu(t.dependencies)?(typeof o=="function"&&(Vd(e,n,o,i),p=e.memoizedState),(h=Ba||gg(e,n,h,i,d,p,c)||t!==null&&t.dependencies!==null&&mu(t.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),s.props=i,s.state=p,s.context=c,i=h):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return s=i,mr(t,e),i=(e.flags&128)!==0,s||i?(s=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&i?(e.child=Ps(e,t.child,null,a),e.child=Ps(e,null,n,a)):Kt(t,e,n,a),e.memoizedState=s.state,t=e.child):t=va(t,e,a),t}function Tg(t,e,n,i){return Ls(),e.flags|=256,Kt(t,e,n,i),e.child}var _h={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yh(t){return{baseLanes:t,cachePool:R_()}}function Sh(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Wn),t}function yy(t,e,n){var i=e.pendingProps,a=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(fn.current&2)!==0),r&&(a=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(Je){if(a?Ja(e):$a(),(t=Dt)?(t=vS(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:as!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},n=M_(t),n.return=e,e.child=n,rn=e,Dt=null)):t=null,t===null)throw ss(e);return Hm(t)?e.lanes=32:e.lanes=536870912,null}return s=i.children,i=i.fallback,a?($a(),a=e.mode,s=ld({mode:"hidden",children:s},a),i=Rs(i,a,n,null),s.return=e,i.return=e,s.sibling=i,e.child=s,i=e.child,i.memoizedState=yh(n),i.childLanes=Sh(t,r,n),e.memoizedState=_h,Ko(null,i)):(Ja(e),Nm(e,s))}var o=t.memoizedState;if(o!==null){var c=o.dehydrated;if(c!==null)return RT(t,e,s,r,i,c,o,n)}return a?($a(),a=i.fallback,s=e.mode,o=t.child,c=o.sibling,i=ua(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,c!==null?a=ua(c,a):(a=Rs(a,s,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,Ko(null,i),i=e.child,a=t.child.memoizedState,a===null?a=yh(n):(s=a.cachePool,s!==null?(o=Yt._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=R_(),a={baseLanes:a.baseLanes|n,cachePool:s}),i.memoizedState=a,i.childLanes=Sh(t,r,n),e.memoizedState=_h,Ko(t.child,i)):(Ja(e),n=t.child,t=n.sibling,n=ua(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function Nm(t,e){return e=ld({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ld(t,e){return t=On(22,t,null,e),t.lanes=0,t}function Ql(t,e,n){return Ps(e,t.child,null,n),t=Nm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RT(t,e,n,i,a,s,r,o){if(n)return e.flags&256?(Ja(e),e.flags&=-257,Ql(t,e,o)):e.memoizedState!==null?($a(),e.child=t.child,e.flags|=128,null):($a(),s=a.fallback,r=e.mode,a=ld({mode:"visible",children:a.children},r),s=Rs(s,r,o,null),s.flags|=2,a.return=e,s.return=e,a.sibling=s,e.child=a,Ps(e,t.child,null,o),a=e.child,a.memoizedState=yh(o),a.childLanes=Sh(t,i,o),e.memoizedState=_h,Ko(null,a));if(Ja(e),Hm(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var c=i.dgst;return i=c,i!==""&&(a=Error(ee(419)),a.stack="",a.digest=i,ll({value:a,source:null,stack:null})),Ql(t,e,o)}if(qt||Us(t,e,o,!1),i=(o&t.childLanes)!==0,qt||i){if(rs.current!==null)return Ql(t,e,o);if(i=At,i!==null&&(a=Zv(i,o),a!==0&&a!==r.retryLane))throw r.retryLane=a,qs(t,a),Pn(i,t,a),Am;return Wh(s)||wu(),Ql(t,e,o)}return Wh(s)?(e.flags|=192,e.child=t.child,null):(t=r.treeContext,Dt=fi(s.nextSibling),rn=e,Je=!0,Za=null,ui=!1,t!==null&&A_(e,t),e=Nm(e,a.children),e.flags|=134221824,e)}function Ag(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Hc(t.return,e,n)}function Ng(t){for(var e=null;t!==null;){var n=t.alternate;n!==null&&vu(n)===null&&(e=t),t=t.sibling}return e}function Jl(t,e,n,i,a,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function kd(t){var e=t.child;for(t.child=null;e!==null;){var n=e.sibling;e.sibling=t.child,t.child=e,e=n}}function bh(t,e,n){var i=e.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=fn.current;if(e.flags&128)return ul(e,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,ul(e,r),a==="backwards"&&t!==null?(kd(t),Kt(t,e,i,n),kd(t)):Kt(t,e,i,n),i=Je?ol:0,!o&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ag(t,n,e);else if(t.tag===19)Ag(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"backwards":n=Ng(e.child),n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null,kd(e)),Jl(e,!0,a,null,s,i);break;case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&vu(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Jl(e,!0,n,null,s,i);break;case"together":Jl(e,!1,null,null,void 0,i);break;case"independent":e.memoizedState=null;break;default:n=Ng(e.child),n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Jl(e,!1,a,n,s,i)}return e.child}function Rg(t,e,n){var i=e.pendingProps;return ja(e,e.type,i.value),Kt(t,e,i.children,n),e.child}function va(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ls|=e.lanes,!(n&e.childLanes))if(t!==null){if(Us(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=ua(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ua(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Rm(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&mu(t)))}function CT(t,e,n){switch(e.tag){case 3:ou(e,e.stateNode.containerInfo),ja(e,Yt,t.memoizedState.cache),Ls();break;case 27:case 5:Zf(e);break;case 4:ou(e,e.stateNode.containerInfo);break;case 10:ja(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,fh(e),null;break;case 13:var i=e.memoizedState;if(i!==null){if(i.dehydrated!==null)return Ja(e),e.flags|=128,null;i=Us(t,e,n,!1);var a=e.child.childLanes;return i||n&a?yy(t,e,n):(Ja(e),t=va(t,e,n),t!==null?t.sibling:null)}Ja(e);break;case 19:if(e.flags&128)return bh(t,e,n);if(a=(t.flags&128)!==0,i=(n&e.childLanes)!==0,i||(Us(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return bh(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ul(e,fn.current),i)break;return null;case 22:return e.lanes=0,_y(t,e,n,e.pendingProps);case 24:ja(e,Yt,t.memoizedState.cache)}return va(t,e,n)}function Sy(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)qt=!0;else{if(!Rm(t,n)&&!(e.flags&128))return qt=!1,CT(t,e,n);qt=!!(t.flags&131072)}else qt=!1,Je&&e.flags&1048576&&T_(e,ol,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=Ss(e.elementType),e.type=t,typeof t=="function")rm(t)?(i=Bs(t,i),e.tag=1,e=Mg(null,e,t,i,n)):(e.tag=0,e=vh(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===Yp){e.tag=11,e=_g(null,e,t,i,n);break e}else if(a===qp){e.tag=14,e=yg(null,e,t,i,n);break e}else if(a===Bi){e.tag=10,e.type=t,e=Rg(null,e,n);break e}}throw e=Yf(t)||t,Error(ee(306,e,""))}}return e;case 0:return vh(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=Bs(i,e.pendingProps),Mg(t,e,i,a,n);case 3:e:{if(ou(e,e.stateNode.containerInfo),t===null)throw Error(ee(387));i=e.pendingProps;var s=e.memoizedState;a=s.element,ch(t,e),qo(e,i,null,n);var r=e.memoizedState;if(i=r.cache,ja(e,Yt,i),i!==s.cache&&oh(e,[Yt],n,!0),Yo(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=Tg(t,e,i,n);break e}else if(i!==a){a=ci(Error(ee(424)),e),ll(a),e=Tg(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Dt=fi(t.firstChild),rn=e,Je=!0,Za=null,ui=!0,n=D_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Ls(),i===a){e=va(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 26:return mr(t,e),t===null?(n=$g(e.type,null,e.pendingProps,null))?e.memoizedState=n:Je||(e.stateNode=uS(e.type,e.pendingProps,qa.current,e)):e.memoizedState=$g(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Zf(e),t===null&&Je&&(i=e.stateNode=_S(e.type,e.pendingProps,qa.current),rn=e,ui=!0,a=Dt,us(e.type)?(Yh=a,Dt=fi(i.firstChild)):Dt=a),Kt(t,e,e.pendingProps.children,n),mr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Je&&((a=i=Dt)&&(i=E1(i,e.type,e.pendingProps,ui),i!==null?(e.stateNode=i,rn=e,Dt=fi(i.firstChild),ui=!1,a=!0):a=!1),a||ss(e)),Zf(e),a=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,i=s.children,kh(a,s)?i=null:r!==null&&kh(a,r)&&(e.flags|=32),e.memoizedState!==null&&(a=mm(t,e,vT,null,null,n),eo._currentValue=a),mr(t,e),Kt(t,e,i,n),e.child;case 6:return t===null&&Je&&((t=n=Dt)&&(n=M1(n,e.pendingProps,ui),n!==null?(e.stateNode=n,rn=e,Dt=null,t=!0):t=!1),t||ss(e)),null;case 13:return yy(t,e,n);case 4:return ou(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ps(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return _g(t,e,e.type,e.pendingProps,n);case 7:return i=e.pendingProps,mr(t,e),Kt(t,e,i,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:return Rg(t,e,n);case 9:return a=e.type._context,i=e.pendingProps.children,Os(e),a=cn(a),i=i(a),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return yg(t,e,e.type,e.pendingProps,n);case 15:return vy(t,e,e.type,e.pendingProps,n);case 19:return bh(t,e,n);case 31:return NT(t,e,n);case 22:return _y(t,e,n,e.pendingProps);case 24:return Os(e),i=cn(Yt),t===null?(a=cm(),a===null&&(a=At,s=lm(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),e.memoizedState={parent:i,cache:a},dm(e),ja(e,Yt,a)):(t.lanes&n&&(ch(t,e),qo(e,null,null,n),Yo()),a=t.memoizedState,s=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),ja(e,Yt,i)):(i=s.cache,ja(e,Yt,i),i!==a.cache&&oh(e,[Yt],n,!0))),Kt(t,e,e.pendingProps.children,n),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=e.pendingProps,i.name!=null&&i.name!=="auto"?e.flags|=t===null?18882560:18874368:Je&&nd(e),t!==null&&t.memoizedProps.name!==i.name?e.flags|=4194816:mr(t,e),Kt(t,e,i.children,n),e.child;case 29:throw e.pendingProps}throw Error(ee(156,e.tag))}function ea(t){t.flags|=4}function jd(t,e,n,i,a){var s;if((s=(t.mode&32)!==0)&&(s=n===null?nx(e,i):nx(e,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),s){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(Ky())t.flags|=8192;else throw ws=gu,um}else t.flags&=-16777217}function Cg(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!ES(e))if(Ky())t.flags|=8192;else throw ws=gu,um}function $l(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Wv():536870912,t.lanes|=e,qr|=e)}function bo(t,e){if(!Je)switch(t.tailMode){case"visible":break;case"collapsed":for(var n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null;break;default:for(e=t.tail,n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function wT(t,e,n){var i=e.pendingProps;switch(om(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return wt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),da(Yt),jr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&($s(e)?ea(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fd())),wt(e),null;case 26:var a=e.type,s=e.memoizedState;return t===null?(ea(e),s!==null?(wt(e),Cg(e,s)):(wt(e),jd(e,a,null,i,n))):s?s!==t.memoizedState?(ea(e),wt(e),Cg(e,s)):(wt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&ea(e),wt(e),jd(e,a,t,i,n)),null;case 27:if(lu(e),n=qa.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&ea(e);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return wt(e),e.subtreeFlags&=-33554433,null}t=ji.current,$s(e)?ng(e):(t=_S(a,i,n),e.stateNode=t,ea(e))}return wt(e),e.subtreeFlags&=-33554433,null;case 5:if(lu(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&ea(e);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return wt(e),e.subtreeFlags&=-33554433,null}if(s=ji.current,$s(e))ng(e);else{var r=pl(qa.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[ln]=e,s[Fn]=i;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(hn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ea(e)}}return wt(e),e.subtreeFlags&=-33554433,jd(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&ea(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=qa.current,$s(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=rn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[ln]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||lS(t.nodeValue,n)),t||ss(e,!0)}else t=pl(t).createTextNode(i),t[ln]=e,e.stateNode=t}return wt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=$s(e),n!==null){if(t===null){if(!i)throw Error(ee(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(557));t[ln]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),t=!1}else n=Fd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(jn(e),e):(jn(e),null);if(e.flags&128)throw Error(ee(558))}return wt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=$s(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ee(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ee(317));a[ln]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),a=!1}else a=Fd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(jn(e),e):(jn(e),null)}return jn(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),$l(e,e.updateQueue),wt(e),null);case 4:return jr(),t===null&&zm(e.stateNode.containerInfo),e.flags|=67108864,wt(e),null;case 10:return da(e.type),wt(e),null;case 19:if(hm(e),i=e.memoizedState,i===null)return wt(e),null;if(a=(e.flags&128)!==0,s=i.rendering,s===null)if(a)bo(i,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=vu(t),s!==null){for(e.flags|=128,bo(i,!1),t=s.updateQueue,e.updateQueue=t,$l(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)E_(n,t),n=n.sibling;return ul(e,fn.current&1|2),Je&&ra(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&Yn()>Ru&&(e.flags|=128,a=!0,bo(i,!1),e.lanes=4194304)}else{if(!a)if(t=vu(s),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,$l(e,t),bo(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!s.alternate&&!Je)return wt(e),null}else 2*Yn()-i.renderingStartTime>Ru&&n!==536870912&&(e.flags|=128,a=!0,bo(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}if(i.tail!==null){t=i.tail;e:{for(n=t;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Yn(),t.sibling=null,s=fn.current,s=a?s&1|2:s&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Je?ul(e,s):(n=s,Ut(pn,e),Ut(fn,n),_n===null&&(_n=e)),Je&&ra(e,i.treeForkCount),t}return wt(e),null;case 22:case 23:return jn(e),fm(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),n=e.updateQueue,n!==null&&$l(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&dn(Cs),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),da(Yt),wt(e),null;case 25:return null;case 30:return e.flags|=33554432,wt(e),null}throw Error(ee(156,e.tag))}function DT(t,e){switch(om(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return da(Yt),jr(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return lu(e),null;case 31:if(e.memoizedState!==null){if(jn(e),e.alternate===null)throw Error(ee(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(jn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return hm(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return jr(),null;case 10:return da(e.type),null;case 22:case 23:return jn(e),fm(),t!==null&&dn(Cs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return da(Yt),null;case 25:return null;default:return null}}function by(t,e){switch(om(e),e.tag){case 3:da(Yt),jr();break;case 26:case 27:case 5:lu(e);break;case 4:jr();break;case 31:e.memoizedState!==null&&jn(e);break;case 13:jn(e);break;case 19:hm(e);break;case 10:da(e.type);break;case 22:case 23:jn(e),fm(),t!==null&&dn(Cs);break;case 24:da(Yt)}}function Dl(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){bt(e,e.return,o)}}function os(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=e;var c=n,u=o;try{u()}catch(h){bt(a,c,h)}}}i=i.next}while(i!==s)}}catch(h){bt(e,e.return,h)}}function Ey(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{U_(e,n)}catch(i){bt(t,t.return,i)}}}function My(t,e,n){n.props=Bs(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){bt(t,e,i)}}function Ii(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:var a=t.stateNode,s=ma(t.memoizedProps,a);(a.ref===null||a.ref.name!==s)&&(a.ref=hS(s)),i=a.ref;break;case 7:if(t.stateNode===null){var r=new $n(t);Bn(t.child,!1,S1,r,void 0,void 0),t.stateNode=r}i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(o){bt(t,e,o)}}function on(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){bt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){bt(t,e,a)}else n.current=null}function Eu(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var n=0;n<e.length;n++)xS(t.stateNode,e[n])}function wg(t){for(var e=t.return;e!==null&&(wm(e)&&xS(t.stateNode,e.stateNode),!Cm(e));)e=e.return}function Qo(t){for(var e=t.return;e!==null&&(wm(e)&&b1(t.stateNode,e.stateNode),!Cm(e));)e=e.return}function Cm(t){return t.tag===5||t.tag===3||t.tag===27}function wm(t){return t&&t.tag===7&&t.stateNode!==null}function Eh(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){bt(t,t.return,a)}}function Xd(t,e,n){try{var i=t.stateNode;i1(i,t.type,n,e),i[Fn]=e}catch(a){bt(t,t.return,a)}}function Ty(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&us(t.type)||t.tag===4}function Wd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ty(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&us(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mh(t,e,n,i){var a=t.tag;if(a===5||a===6)a=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(a),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fi)),Eu(t,i),dt=!0;else if(a!==4&&(a===27&&(Eu(t,i),i=null,us(t.type)&&(n=t.stateNode,e=null)),t=t.child,t!==null))for(Mh(t,e,n,i),t=t.sibling;t!==null;)Mh(t,e,n,i),t=t.sibling}function Mu(t,e,n,i){var a=t.tag;if(a===5||a===6)a=t.stateNode,e?n.insertBefore(a,e):n.appendChild(a),Eu(t,i),dt=!0;else if(a!==4&&(a===27&&(Eu(t,i),i=null,us(t.type)&&(n=t.stateNode)),t=t.child,t!==null))for(Mu(t,e,n,i),t=t.sibling;t!==null;)Mu(t,e,n,i),t=t.sibling}function Ay(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);hn(e,i,n),e[ln]=t,e[Fn]=n}catch(s){bt(t,t.return,s)}}var Tu=!1,Xn=null;function Dg(t){(t.tag===30||t.subtreeFlags&33554432)&&(Tu=!0)}var zi=null;function Lg(){var t=zi;return zi=null,t}var Un=0;function uo(t,e,n,i,a){return Un=0,Ny(t.child,e,n,i,a)}function Ny(t,e,n,i,a){for(var s=!1;t!==null;){if(t.tag===5){var r=t.stateNode;if(i!==null){var o=jh(r);i.push(o),o.view&&(s=!0)}else s||jh(r).view&&(s=!0);Tu=!0,dS(r,Un===0?e:e+"_"+Un,n),Un++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&a||Ny(t.child,e,n,i,a)&&(s=!0));t=t.sibling}return s}function Yi(t,e){for(;t!==null;)t.tag===5?fS(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Yi(t.child,e)),t=t.sibling}function Xc(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Xc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(ee(544));var n=e.name;e=Ea(e.default,e.share),e!=="none"&&(uo(t,n,e,null,!1)||Yi(t.child,!1))}t=t.sibling}}function Th(t,e){if(t.tag===30){var n=t.stateNode,i=t.memoizedProps,a=ma(i,n),s=Ea(i.default,n.paired?i.share:i.enter);s!=="none"?uo(t,a,s,null,!1)?(Xc(t),n.paired||e||Zr(t,i.onEnter)):Yi(t.child,!1):Xc(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)Th(t,e),t=t.sibling;else Xc(t)}function Ah(t){if(Xn!==null&&Xn.size!==0){var e=Xn;if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var n=t.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=e.get(i);if(a!==void 0){var s=Ea(n.default,n.share);if(s!=="none"&&(uo(t,i,s,null,!1)?(s=t.stateNode,a.paired=s,s.paired=a,Zr(t,n.onShare)):Yi(t.child,!1)),e.delete(i),e.size===0)break}}}Ah(t)}t=t.sibling}}}function Nh(t){if(t.tag===30){var e=t.memoizedProps,n=ma(e,t.stateNode),i=Xn!==null?Xn.get(n):void 0,a=Ea(e.default,i!==void 0?e.share:e.exit);a!=="none"&&(uo(t,n,a,null,!1)?i!==void 0?(a=t.stateNode,i.paired=a,a.paired=i,Xn.delete(n),Zr(t,e.onShare)):Zr(t,e.onExit):Yi(t.child,!1)),Xn!==null&&Ah(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)Nh(t),t=t.sibling;else Xn!==null&&Ah(t)}function Ry(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,n=ma(e,t.stateNode);e=Ea(e.default,e.update),t.flags&=-5,e!=="none"&&uo(t,n,e,t.memoizedState=[],!1)}else t.subtreeFlags&33554432&&Ry(t);t=t.sibling}}function Rh(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var e=t.stateNode;e.paired!==null&&(e.paired=null,Yi(t.child,!1))}Rh(t)}t=t.sibling}}function Wc(t){if(t.tag===30)t.stateNode.paired=null,Yi(t.child,!1),Rh(t);else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)Wc(t),t=t.sibling;else Rh(t)}function Cy(t){for(t=t.child;t!==null;)t.tag===30?Yi(t.child,!1):t.subtreeFlags&33554432&&Cy(t),t=t.sibling}function Dm(t,e,n,i,a,s,r){for(var o=!1;e!==null;){if(e.tag===5){var c=e.stateNode;if(s!==null&&Un<s.length){var u=s[Un],h=jh(c);(u.view||h.view)&&(o=!0);var m;if(m=(t.flags&4)===0)if(h.clip)m=!0;else{m=u.rect;var d=h.rect;m=m.y!==d.y||m.x!==d.x||m.height!==d.height||m.width!==d.width}m&&(t.flags|=4),h.abs?h=!u.abs:(u=u.rect,h=h.rect,h=u.height!==h.height||u.width!==h.width),h&&(t.flags|=32)}else t.flags|=32;t.flags&4&&dS(c,Un===0?n:n+"_"+Un,a),o&&t.flags&4||(zi===null&&(zi=[]),zi.push(c,Un===0?i:i+"_"+Un,e.memoizedProps)),Un++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r?t.flags|=e.flags&32:Dm(t,e.child,n,i,a,s,r)&&(o=!0));e=e.sibling}return o}function wy(t,e){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=t.stateNode,a=ma(n,i),s=Ea(n.default,n.update),r;r=t.memoizedState,t.memoizedState=null,i=t;var o=t.child;Un=0,a=Dm(i,o,a,a,s,r,!1),t.flags&4&&a&&Zr(t,n.onUpdate)}else t.subtreeFlags&33554432&&wy(t);t=t.sibling}}var nn=!1,xt=!1,wi=!1,Yd=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,an=null,Di=!1,Bo=!1,Au=!1,Ch=!1;function LT(t,e,n){if(t=t.containerInfo,Gh=to,t=m_(t),im(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var s=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var o=0,c=-1,u=-1,h=0,m=0,d=t,p=null;t:for(;;){for(var g;d!==i||s!==0&&d.nodeType!==3||(c=o+s),d!==r||a!==0&&d.nodeType!==3||(u=o+a),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===t)break t;if(p===i&&++h===s&&(c=o),p===r&&++m===a&&(u=o),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}i=c===-1||u===-1?null:{start:c,end:u}}else i=null}i=i||{start:0,end:0}}else i=null;for(Vh={focusedElem:t,selectionRange:i},to=!1,n=(n&335544064)===n,an=e,e=n?9270:1024;an!==null;){if(t=an,n&&(i=t.deletions,i!==null))for(s=0;s<i.length;s++)n&&Nh(i[s]);if(t.alternate===null&&t.flags&2)n&&Dg(t),ec(n);else{if(t.tag===22){if(i=t.alternate,t.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Nh(i),ec(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Dg(t),ec(n);continue}}i=t.child,t.subtreeFlags&e&&i!==null?(i.return=t,an=i):(n&&Ry(t),ec(n))}}Xn=null}function ec(t){for(;an!==null;){var e=an,n=t,i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var s=e.stateNode;try{var r=Bs(e.type,a);n=s.getSnapshotBeforeUpdate(r,i),s.__reactInternalSnapshotBeforeUpdate=n}catch(o){bt(e,e.return,o)}}break;case 3:if(a&1024){if(i=e.stateNode.containerInfo,n=i.nodeType,n===9)Xh(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Xh(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=ma(i.memoizedProps,i.stateNode),a=e.memoizedProps,a=Ea(a.default,a.update),a!=="none"&&uo(i,n,a,i.memoizedState=[],!0));break;default:if(a&1024)throw Error(ee(163))}if(i=e.sibling,i!==null){i.return=e.return,an=i;break}an=e.return}}function Dy(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Li(t,n),i&4&&Dl(5,n);break;case 1:if(Li(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){bt(n,n.return,r)}else{var a=Bs(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){bt(n,n.return,r)}}i&64&&Ey(n),i&512&&Ii(n,n.return);break;case 3:if(Li(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{U_(t,e)}catch(r){bt(n,n.return,r)}}break;case 27:e===null&&i&4&&Ay(n);case 26:case 5:Li(t,n),e===null&&i&4&&Eh(n),i&512&&Ii(n,n.return);break;case 12:Li(t,n);break;case 31:Li(t,n),i&4&&Iy(t,n);break;case 13:Li(t,n),i&4&&Py(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=jT.bind(null,n),T1(t,n))));break;case 22:if(i=n.memoizedState!==null||nn,!i){var s=e!==null&&e.memoizedState!==null||xt;e=nn,a=xt,nn=i,(xt=s)&&!a?(i=2,n.subtreeFlags&8772&&(i|=1),_i(t,n,i)):Li(t,n),nn=e,xt=a}break;case 30:Li(t,n),i&512&&Ii(n,n.return);break;case 7:i&512&&Ii(n,n.return);default:Li(t,n)}}function wh(t,e){for(t=t.child;t!==null;)Ly(t,e),t=t.sibling}function Ly(t,e){switch(t.tag){case 5:case 26:try{var n=t.stateNode;if(e){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=t.stateNode,s=t.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null;a.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(c){bt(t,t.return,c)}Dh(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,dt=!0}catch(c){bt(t,t.return,c)}break;case 18:try{var o=t.stateNode;e?Yg(o,!0):Yg(t.stateNode,!1)}catch(c){bt(t,t.return,c)}break;case 22:case 23:t.memoizedState===null&&wh(t,e);break;default:wh(t,e)}}function Dh(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var n=t,i=e;switch(n.tag){case 4:Ly(n,i);break e;case 22:n.memoizedState===null&&Dh(n,i);break e;default:Dh(n,i)}}t=t.sibling}}function Uy(t){var e=t.alternate;e!==null&&(t.alternate=null,Uy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ku(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Pt=null,Dn=!1;function mi(t,e,n){for(n=n.child;n!==null;)Oy(t,e,n),n=n.sibling}function Oy(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 26:xt||on(n,e),mi(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!xt&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:xt||on(n,e),Qo(n);var i=Pt,a=Dn;us(n.type)&&(Pt=n.stateNode,Dn=!1),mi(t,e,n),yS(n.stateNode,n.type,n.memoizedProps),Pt=i,Dn=a;break;case 5:xt||on(n,e),Qo(n);case 6:if(n.tag===6&&Qo(n),i=Pt,a=Dn,Pt=null,mi(t,e,n),Pt=i,Dn=a,Pt!==null)if(Dn)try{(Pt.nodeType===9?Pt.body:Pt.nodeName==="HTML"?Pt.ownerDocument.body:Pt).removeChild(n.stateNode),dt=!0}catch(s){bt(n,e,s)}else try{Pt.removeChild(n.stateNode),dt=!0}catch(s){bt(n,e,s)}break;case 18:Pt!==null&&(Dn?(t=Pt,Wg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),no(t)):Wg(Pt,n.stateNode));break;case 4:i=Pt,a=Dn,Pt=n.stateNode.containerInfo,Dn=!0,mi(t,e,n),Pt=i,Dn=a;break;case 0:case 11:case 14:case 15:os(2,n,e),xt||os(4,n,e),mi(t,e,n);break;case 1:xt||(on(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&My(n,e,i)),mi(t,e,n);break;case 21:mi(t,e,n);break;case 22:xt=(i=xt)||n.memoizedState!==null,mi(t,e,n),xt=i;break;case 30:on(n,e),mi(t,e,n);break;case 7:xt||on(n,e),mi(t,e,n);break;default:mi(t,e,n)}}function Iy(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{no(t)}catch(n){bt(e,e.return,n)}}}function Py(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{no(t)}catch(n){bt(e,e.return,n)}}function UT(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Ug),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Ug),e;default:throw Error(ee(435,t.tag))}}function tc(t,e){var n=UT(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=XT.bind(null,t,i);i.then(a,a)}})}function En(t,e,n){var i=e.deletions;if(i!==null)for(var a=0;a<i.length;a++){var s=i[a],r=t,o=e,c=o;e:for(;c!==null;){switch(c.tag){case 27:if(us(c.type)){Pt=c.stateNode,Dn=!1;break e}break;case 5:Pt=c.stateNode,Dn=!1;break e;case 3:case 4:Pt=c.stateNode.containerInfo,Dn=!0;break e}c=c.return}if(Pt===null)throw Error(ee(160));Oy(r,o,s),Pt=null,Dn=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)zy(e,t,n),e=e.sibling}var yi=null;function zy(t,e,n){var i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=t.updateQueue,i=i!==null?i.events:null,i!==null))for(var s=0;s<i.length;s++){var r=i[s];r.ref.impl=r.nextImpl}En(e,t,n),Mn(t),a&4&&(os(3,t,t.return),Dl(3,t),os(5,t,t.return));break;case 1:En(e,t,n),Mn(t),a&512&&(xt||i===null||on(i,i.return)),a&64&&nn&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?e:n.concat(e))));break;case 26:if(s=yi,En(e,t,n),Mn(t),a&512&&(xt||i===null||on(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=t.memoizedState,i===null)if(n===null)if(t.stateNode===null)if(nn)t.stateNode=uS(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,n=t.memoizedProps,a=s.ownerDocument||s;t:switch(e){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Nl]||i[ln]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(e),a.head.insertBefore(i,a.querySelector("head > title"))),hn(i,e,n),i[ln]=t,sn(i),e=i;break e;case"link":if(s=tx("link","href",a).get(e+(n.href||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(r,1);break t}}i=a.createElement(e),hn(i,e,n),a.head.appendChild(i);break;case"meta":if(s=tx("meta","content",a).get(e+(n.content||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(r,1);break t}}i=a.createElement(e),hn(i,e,n),a.head.appendChild(i);break;default:throw Error(ee(468,e))}i[ln]=t,sn(i),e=i}t.stateNode=e}else nn||qh(s,t.type,t.stateNode);else t.stateNode=ex(s,n,t.memoizedProps);else a!==n?(a===null?(e=i.stateNode,e===null||xt||e.parentNode.removeChild(e)):a.count--,n===null?nn||qh(s,t.type,t.stateNode):ex(s,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Xd(t,t.memoizedProps,i.memoizedProps);break;case 27:En(e,t,n),Mn(t),a&512&&(xt||i===null||on(i,i.return)),i!==null&&a&4&&Xd(t,t.memoizedProps,i.memoizedProps);break;case 5:if(s=wi,wi=!1,En(e,t,n),wi=s,Mn(t),a&512&&(xt||i===null||on(i,i.return)),t.flags&32){e=t.stateNode;try{Wr(e,""),dt=!0}catch(h){bt(t,t.return,h)}}a&4&&t.stateNode!=null&&(e=t.memoizedProps,Xd(t,e,i!==null?i.memoizedProps:e)),a&1024&&(Yd=!0);break;case 6:if(En(e,t,n),Mn(t),a&4){if(t.stateNode===null)throw Error(ee(162));e=t.memoizedProps,n=t.stateNode;try{n.nodeValue=e,dt=!0}catch(h){bt(t,t.return,h)}}break;case 3:if(dt=!1,Kc=null,s=yi,yi=ml(e.containerInfo),En(e,t,n),yi=s,Mn(t),a&4&&i!==null&&i.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(h){bt(t,t.return,h)}Yd&&(Yd=!1,By(t)),dt=!1;break;case 4:a=wi,wi=nn,i=B0(),s=yi,yi=ml(t.stateNode.containerInfo),En(e,t,n),Mn(t),yi=s,dt&&Bo&&(Au=!0),dt=i,wi=a;break;case 12:En(e,t,n),Mn(t);break;case 31:En(e,t,n),Mn(t),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,tc(t,e)));break;case 13:En(e,t,n),Mn(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(cd=Yn()),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,tc(t,e)));break;case 22:s=t.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=nn,c=xt,u=wi;nn=o||s,wi=u||s,xt=c||r,En(e,t,n),xt=c,wi=u,nn=o,Mn(t),a&8192&&(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,!s||i===null||r||nn||xt||(e=r||xt,n=nn,i=xt,nn=s||nn,xt=e,Pa(t,2),nn=n,xt=i),!s&&wi||wh(t,s)),a&4&&(e=t.updateQueue,e!==null&&(n=e.retryQueue,n!==null&&(e.retryQueue=null,tc(t,n))));break;case 19:En(e,t,n),Mn(t),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,tc(t,e)));break;case 30:a&512&&(xt||i===null||on(i,i.return)),a=B0(),s=Bo,r=(n&335544064)===n,o=t.memoizedProps,Bo=r&&Ea(o.default,o.update)!=="none",En(e,t,n),Mn(t),r&&i!==null&&dt&&(t.flags|=4),Bo=s,dt=a;break;case 21:break;case 7:a&512&&(xt||i===null||on(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=t);default:En(e,t,n),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(Ty(i)){n=i;break}i=i.return}i=null;for(var a=t.return;a!==null;){if(wm(a)){var s=a.stateNode;i===null?i=[s]:i.push(s)}if(Cm(a))break;a=a.return}var r=i;if(n==null)throw Error(ee(160));switch(n.tag){case 27:var o=n.stateNode,c=Wd(t);Mu(t,c,o,r);break;case 5:var u=n.stateNode;n.flags&32&&(Wr(u,""),n.flags&=-33);var h=Wd(t);Mu(t,h,u,r);break;case 3:case 4:var m=n.stateNode.containerInfo,d=Wd(t);Mh(t,d,m,r);break;default:throw Error(ee(161))}}catch(p){bt(t,t.return,p)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function By(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;By(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,to=!0,e.reset(),to=!1),t=t.sibling}}function er(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Fy(e,t),e=e.sibling;else wy(e)}function Fy(t,e){var n=t.alternate;if(n===null)Th(t,!1);else switch(t.tag){case 3:if(Ch=Di=!1,Lg(),er(e,t),!Di&&!Au){if(t=zi,t!==null)for(var i=0;i<t.length;i+=3){n=t[i];var a=t[i+1];fS(n,t[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ch=!0}zi=null;break;case 5:er(e,t);break;case 4:i=Di,Di=!1,er(e,t),Di&&(Au=!0),Di=i;break;case 22:t.memoizedState===null&&(n.memoizedState!==null?Th(t,!1):er(e,t));break;case 30:i=Di,a=Lg(),Di=!1,er(e,t),Di&&(t.flags|=4);var s=t.memoizedProps,r=t.stateNode;e=ma(s,r),r=ma(n.memoizedProps,r);var o=Ea(s.default,s.update);o==="none"?e=!1:(s=n.memoizedState,n.memoizedState=null,n=t.child,Un=0,e=Dm(t,n,e,r,o,s,!0),Un!==(s===null?0:s.length)&&(t.flags|=32)),t.flags&4&&e?(Zr(t,t.memoizedProps.onUpdate),zi=a):a!==null&&(a.push.apply(a,zi),zi=a),Di=t.flags&32?!0:i;break;default:er(e,t)}}function Li(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Dy(t,e.alternate,e),e=e.sibling}function Pa(t,e){for(t=t.child;t!==null;){var n=t,i=e;switch(n.tag){case 0:case 11:case 14:case 15:os(4,n,n.return),Pa(n,i);break;case 1:on(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&My(n,n.return,a),Pa(n,i);break;case 27:i&2&&yS(n.stateNode,n.type,n.memoizedProps);case 5:on(n,n.return),n.tag!==5&&n.tag!==27||Qo(n),Pa(n,i);break;case 6:Qo(n);break;case 26:on(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||xt||a.parentNode.removeChild(a),Pa(n,i);break;case 22:n.memoizedState===null&&Pa(n,i);break;case 30:on(n,n.return),Pa(n,i);break;case 7:on(n,n.return);default:Pa(n,i)}t=t.sibling}}function _i(t,e,n){for(n=e.subtreeFlags&8772?n:n&-2,e=e.child;e!==null;){var i=e.alternate,a=t,s=e,r=s.flags,o=(n&1)!==0;switch(s.tag){case 0:case 11:case 15:_i(a,s,n),Dl(4,s);break;case 1:if(_i(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(h){bt(i,i.return,h)}if(i=s,a=i.updateQueue,a!==null){var c=i.stateNode;try{var u=a.shared.hiddenCallbacks;if(u!==null)for(a.shared.hiddenCallbacks=null,a=0;a<u.length;a++)L_(u[a],c)}catch(h){bt(i,i.return,h)}}o&&r&64&&Ey(s),Ii(s,s.return);break;case 27:n&2&&Ay(s);case 5:s.tag!==5&&s.tag!==27||wg(s),_i(a,s,n),o&&i===null&&r&4&&Eh(s),Ii(s,s.return);break;case 6:wg(s);break;case 26:c=s.stateNode,s.memoizedState!==null||c===null||nn||qh(ml(c.ownerDocument),s.type,c),_i(a,s,n),o&&i===null&&r&4&&Eh(s),Ii(s,s.return);break;case 12:_i(a,s,n);break;case 31:_i(a,s,n),o&&r&4&&Iy(a,s);break;case 13:_i(a,s,n),o&&r&4&&Py(a,s);break;case 22:s.memoizedState===null&&_i(a,s,n),Ii(s,s.return);break;case 30:_i(a,s,n),Ii(s,s.return);break;case 7:Ii(s,s.return);default:_i(a,s,n)}e=e.sibling}}function Lm(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Cl(n))}function Um(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Cl(t))}function ti(t,e,n,i){var a=(n&335544064)===n;if(e.subtreeFlags&(a?10262:10256))for(e=e.child;e!==null;)Hy(t,e,n,i),e=e.sibling;else a&&Cy(e)}function Hy(t,e,n,i){var a=(n&335544064)===n;a&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Wc(e);var s=e.flags;switch(e.tag){case 0:case 11:case 15:ti(t,e,n,i),s&2048&&Dl(9,e);break;case 1:ti(t,e,n,i);break;case 3:ti(t,e,n,i),a&&Ch&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),s&2048&&(s=null,e.alternate!==null&&(s=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==s&&(e.refCount++,s!=null&&Cl(s)));break;case 12:if(s&2048){ti(t,e,n,i),s=e.stateNode;try{var r=e.memoizedProps,o=r.id,c=r.onPostCommit;typeof c=="function"&&c(o,e.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(u){bt(e,e.return,u)}}else ti(t,e,n,i);break;case 31:ti(t,e,n,i);break;case 13:ti(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,o=e.alternate,e.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&Wc(o),r._visibility&2?ti(t,e,n,i):Jo(t,e)):(a&&o!==null&&o.memoizedState!==null&&Wc(e),r._visibility&2?ti(t,e,n,i):(r._visibility|=2,gr(t,e,n,i,(e.subtreeFlags&10256)!==0||!1))),s&2048&&Lm(o,e);break;case 24:ti(t,e,n,i),s&2048&&Um(e.alternate,e);break;case 30:a&&(s=e.alternate,s!==null&&(Yi(s.child,!0),Yi(e.child,!0))),ti(t,e,n,i);break;default:ti(t,e,n,i)}}function gr(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=n,c=i,u=r.flags;switch(r.tag){case 0:case 11:case 15:gr(s,r,o,c,a),Dl(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?gr(s,r,o,c,a):Jo(s,r):(h._visibility|=2,gr(s,r,o,c,a)),a&&u&2048&&Lm(r.alternate,r);break;case 24:gr(s,r,o,c,a),a&&u&2048&&Um(r.alternate,r);break;default:gr(s,r,o,c,a)}e=e.sibling}}function Jo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:Jo(n,i),a&2048&&Lm(i.alternate,i);break;case 24:Jo(n,i),a&2048&&Um(i.alternate,i);break;default:Jo(n,i)}e=e.sibling}}var bs=8192;function hs(t,e,n){if(t.subtreeFlags&bs)for(t=t.child;t!==null;)Gy(t,e,n),t=t.sibling}function Gy(t,e,n){switch(t.tag){case 26:hs(t,e,n),t.flags&bs&&(t.memoizedState!==null?F1(n,yi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&ix(n,t)));break;case 5:hs(t,e,n),t.flags&bs&&(t=t.stateNode,(e&335544128)===e&&ix(n,t));break;case 3:case 4:var i=yi;yi=ml(t.stateNode.containerInfo),hs(t,e,n),yi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=bs,bs=16777216,hs(t,e,n),bs=i):hs(t,e,n));break;case 30:if(t.flags&bs&&(i=t.memoizedProps.name,i!=null&&i!=="auto")){var a=t.stateNode;a.paired=null,Xn===null&&(Xn=new Map),Xn.set(i,a)}hs(t,e,n);break;default:hs(t,e,n)}}function Vy(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Eo(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];an=i,jy(i,t)}Vy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ky(t),t=t.sibling}function ky(t){switch(t.tag){case 0:case 11:case 15:Eo(t),t.flags&2048&&os(9,t,t.return);break;case 3:Eo(t);break;case 12:Eo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Yc(t)):Eo(t);break;default:Eo(t)}}function Yc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];an=i,jy(i,t)}Vy(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:os(8,e,e.return),Yc(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Yc(e));break;default:Yc(e)}t=t.sibling}}function jy(t,e){for(;an!==null;){var n=an;switch(n.tag){case 0:case 11:case 15:os(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Cl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,an=i;else e:for(n=t;an!==null;){i=an;var a=i.sibling,s=i.return;if(Uy(i),i===n){an=null;break e}if(a!==null){a.return=s,an=a;break e}an=s}}}var OT={getCacheForType:function(t){var e=cn(Yt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return cn(Yt).controller.signal}},IT=typeof WeakMap=="function"?WeakMap:Map,ft=0,At=null,nt=null,at=0,yt=0,Vn=null,Xa=!1,fo=!1,Om=!1,_a=0,Ft=0,ls=0,Ds=0,Nu=0,Wn=0,qr=0,$o=null,Ln=null,Lh=!1,cd=0,Xy=0,Ru=1/0,Cu=null,es=null,zt=0,Mi=null,Fs=null,Xi=0,Uh=0,Oh=null,Wy=null,Fr=null,Hr=null,Gr=null,el=0,qc=null;function Kn(){return ft&2&&at!==0?at&-at:Be.T!==null?Pm():Kv()}function Yy(){if(Wn===0)if(!(at&536870912)||Je){var t=jl;jl<<=1,!(jl&3932160)&&(jl=262144),Wn=t}else Wn=536870912;return t=pn.current,t!==null&&(t.flags|=32),Wn}function Zr(t,e){if(e!=null){var n=t.stateNode,i=n.ref;i===null&&(i=n.ref=hS(ma(t.memoizedProps,n))),Hr===null&&(Hr=[]),Hr.push(e.bind(null,i))}}function Pn(t,e,n){(t===At&&(yt===2||yt===9)||t.cancelPendingCommit!==null)&&(Kr(t,0),Wa(t,at,Wn,!1)),Al(t,n),(!(ft&2)||t!==At)&&(t===At&&(!(ft&2)&&(Ds|=n),Ft===4&&Wa(t,at,Wn,!1)),Ji(t))}function qy(t,e,n){if(ft&6)throw Error(ee(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Tl(t,e),a=i?BT(t,e):qd(t,e,!0),s=i;do{if(a===0){fo&&!i&&Wa(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!PT(n)){a=qd(t,e,!1),s=!1;continue}if(a===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;a=$o;var c=o.current.memoizedState.isDehydrated;if(c&&(Kr(o,r).flags|=256),r=qd(o,r,!1),r!==2&&r!==6){if(Om&&!c){o.errorRecoveryDisabledLanes|=s,Ds|=s,a=4;break e}s=Ln,Ln=a,s!==null&&(Ln===null?Ln=s:Ln.push.apply(Ln,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Kr(t,0),Wa(t,e,0,!0);break}e:{switch(i=t,s=a,s){case 0:case 1:throw Error(ee(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Wa(i,e,Wn,!Xa);break e;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(ee(329))}if((e&62914560)===e&&(a=cd+300-Yn(),10<a)){if(Wa(i,e,Wn,!Xa),Zu(i,0,!0)!==0)break e;Xi=e,i.timeoutHandle=Bm(Og.bind(null,i,n,Ln,Cu,Lh,e,Wn,Ds,qr,Xa,s,"Throttled",-0,0),a);break e}Og(i,n,Ln,Cu,Lh,e,Wn,Ds,qr,Xa,s,null,-0,0)}}break}while(!0);Ji(t)}function Og(t,e,n,i,a,s,r,o,c,u,h,m,d,p){t.timeoutHandle=-1;var g=e.subtreeFlags,b=(s&335544064)===s;if(m=null,(b||g&8192||(g&16785408)===16785408)&&(m={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},Xn=null,Gy(e,s,m),b&&(g=m,b=t.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(g.count++,g.waitingForViewTransition=!0,g=gl.bind(g),b.finished.then(g,g))),g=(s&62914560)===s?cd-Yn():(s&4194048)===s?Xy-Yn():0,g=H1(m,g),g!==null)){Xi=s,t.cancelPendingCommit=g(Pg.bind(null,t,e,s,n,i,a,r,o,c,u,h,m,null,d,p)),Wa(t,s,r,!u);return}Pg(t,e,s,n,i,a,r,o,c,u,h,m)}function PT(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Qn(s(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wa(t,e,n,i){e=Xv(t,e),e&=~Nu,e&=~Ds,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var s=31-Zn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&Yv(t,n,e)}function ud(){return ft&6?!0:(Ll(0),!1)}function Im(){if(nt!==null){if(yt===0)var t=nt.return;else t=nt,la=Zs=null,vm(t),Pr=null,cl=0,t=nt;for(;t!==null;)by(t.alternate,t),t=t.return;nt=null}}function Kr(t,e){var n=t.timeoutHandle;return n!==-1&&(t.timeoutHandle=-1,r1(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Xi=0,Im(),At=t,nt=n=ua(t.current,null),at=e,yt=0,Vn=null,Xa=!1,fo=Tl(t,e),Om=!1,qr=Wn=Nu=Ds=ls=Ft=0,Ln=$o=null,Lh=!1,_a=Xv(t,e),ed(),n}function Zy(t,e){Ye=null,Be.H=Su,e===co||e===id?(e=og(),yt=3):e===um?(e=og(),yt=4):yt=e===Am?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Vn=e,nt===null&&(Ft=1,bu(t,ci(e,t.current)))}function Ky(){var t=pn.current;return t===null?!0:(at&4194048)===at?_n===null:(at&62914560)===at||at&536870912?t===_n:!1}function Qy(){var t=Be.H;return Be.H=Su,t===null?Su:t}function Jy(){var t=Be.A;return Be.A=OT,t}function wu(){Ft=4,Xa||(at&4194048)!==at&&pn.current!==null||(fo=!0),!(ls&134217727)&&!(Ds&134217727)||At===null||Wa(At,at,Wn,!1)}function qd(t,e,n){var i=ft;ft|=2;var a=Qy(),s=Jy();(At!==t||at!==e)&&(Cu=null,Kr(t,e)),e=!1;var r=Ft;e:do try{if(yt!==0&&nt!==null){var o=nt,c=Vn;switch(yt){case 8:Im(),r=6;break e;case 3:case 2:case 9:case 6:pn.current===null&&(e=!0);var u=yt;if(yt=0,Vn=null,wr(t,o,c,u),n&&fo){r=0;break e}break;default:u=yt,yt=0,Vn=null,wr(t,o,c,u)}}zT(),r=Ft;break}catch(h){Zy(t,h)}while(!0);return e&&t.shellSuspendCounter++,la=Zs=null,ft=i,Be.H=a,Be.A=s,nt===null&&(At=null,at=0,ed()),r}function zT(){for(;nt!==null;)$y(nt)}function BT(t,e){var n=ft;ft|=2;var i=Qy(),a=Jy();At!==t||at!==e?(Cu=null,Ru=Yn()+500,Kr(t,e)):fo=Tl(t,e);e:do try{if(yt!==0&&nt!==null){e=nt;var s=Vn;t:switch(yt){case 1:yt=0,Vn=null,wr(t,e,s,1);break;case 2:case 9:if(rg(s)){yt=0,Vn=null,Ig(e);break}e=function(){yt!==2&&yt!==9||At!==t||(yt=7),Ji(t)},s.then(e,e);break e;case 3:yt=7;break e;case 4:yt=5;break e;case 7:rg(s)?(yt=0,Vn=null,Ig(e)):(yt=0,Vn=null,wr(t,e,s,7));break;case 5:var r=null;switch(nt.tag){case 26:r=nt.memoizedState;case 5:case 27:var o=nt;if(r?ES(r):o.stateNode.complete){yt=0,Vn=null;var c=o.sibling;if(c!==null)nt=c;else{var u=o.return;u!==null?(nt=u,dd(u)):nt=null}break t}}yt=0,Vn=null,wr(t,e,s,5);break;case 6:yt=0,Vn=null,wr(t,e,s,6);break;case 8:Im(),Ft=6;break e;default:throw Error(ee(462))}}FT();break}catch(h){Zy(t,h)}while(!0);return la=Zs=null,Be.H=i,Be.A=a,ft=n,nt!==null?0:(At=null,at=0,ed(),Ft)}function FT(){for(;nt!==null&&!nM();)$y(nt)}function $y(t){var e=Sy(t.alternate,t,_a);t.memoizedProps=t.pendingProps,e===null?dd(t):nt=e}function Ig(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Eg(n,e,e.pendingProps,e.type,void 0,at);break;case 11:e=Eg(n,e,e.pendingProps,e.type.render,e.ref,at);break;case 5:vm(e);var i=e;i===rn&&(Je?(pu(i),i.tag===5&&i.stateNode!=null&&(Dt=i.stateNode)):(pu(i),Je=!0));default:by(n,e),e=nt=E_(e,_a),e=Sy(n,e,_a)}t.memoizedProps=t.pendingProps,e===null?dd(t):nt=e}function wr(t,e,n,i){la=Zs=null,vm(e),Pr=null,cl=0;var a=e.return;try{if(AT(t,a,e,n,at)){Ft=1,bu(t,ci(n,t.current)),nt=null;return}}catch(s){if(a!==null)throw nt=a,s;Ft=1,bu(t,ci(n,t.current)),nt=null;return}e.flags&32768?(Je||i===1?t=!0:fo||at&536870912?t=!1:(Xa=t=!0,(i===2||i===9||i===3||i===6)&&(i=pn.current,i!==null&&i.tag===13&&(i.flags|=16384))),eS(e,t)):dd(e)}function dd(t){var e=t;do{if(e.flags&32768){eS(e,Xa);return}t=e.return;var n=wT(e.alternate,e,_a);if(n!==null){nt=n;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);Ft===0&&(Ft=5)}function eS(t,e){do{var n=DT(t.alternate,t);if(n!==null){n.flags&=32767,nt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){nt=t;return}nt=t=n}while(t!==null);Ft=6,nt=null}function Pg(t,e,n,i,a,s,r,o,c,u,h,m){t.cancelPendingCommit=null;do fd();while(zt!==0);if(ft&6)throw Error(ee(327));if(e!==null){if(e===t.current)throw Error(ee(177));t===At&&(nt=At=null,at=0),Fs=e,Mi=t,Xi=n,Oh=a,Wy=i,HT(t,e,n,r,o,c,m)}}function HT(t,e,n,i,a,s,r){var o=e.lanes|e.childLanes;if(Uh=o,o|=am,fM(t,n,o,i,a,s),Hr=null,(n&335544064)===n?(Gr=pT(t),i=10262):(Gr=null,i=10256),e.subtreeFlags&i||e.flags&i?(t.callbackNode=null,t.callbackPriority=0,WT(cu,function(){return Bh(),null})):(t.callbackNode=null,t.callbackPriority=0),Tu=!1,i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Be.T,Be.T=null,a=ht.p,ht.p=2,s=ft,ft|=4;try{LT(t,e,n)}finally{ft=s,ht.p=a,Be.T=i}}zt=1,Tu?Fr=f1(r,t.containerInfo,Gr,Ih,Ph,VT,zh,Bh,GT):(Ih(),Ph(),zh())}function GT(t){if(zt!==0){var e=Mi.onRecoverableError;e(t,{componentStack:null})}}function VT(){zt===3&&(zt=0,Fy(Fs,Mi),zt=4)}function Ih(){if(zt===1){zt=0;var t=Mi,e=Fs,n=Xi,i=(e.flags&13878)!==0;if(e.subtreeFlags&13878||i){i=Be.T,Be.T=null;var a=ht.p;ht.p=2;var s=ft;ft|=4;try{Bo=Au=!1,zy(e,t,n),n=Vh;var r=m_(t.containerInfo),o=n.focusedElem,c=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&p_(o.ownerDocument.documentElement,o)){if(c!==null&&im(o)){var u=c.start,h=c.end;if(h===void 0&&(h=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(h,o.value.length);else{var m=o.ownerDocument||document,d=m&&m.defaultView||window;if(d.getSelection){var p=d.getSelection(),g=o.textContent.length,b=Math.min(c.start,g),x=c.end===void 0?b:Math.min(c.end,g);!p.extend&&b>x&&(r=x,x=b,b=r);var f=J0(o,b),v=J0(o,x);if(f&&v&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var M=m.createRange();M.setStart(f.node,f.offset),p.removeAllRanges(),b>x?(p.addRange(M),p.extend(v.node,v.offset)):(M.setEnd(v.node,v.offset),p.addRange(M))}}}}for(m=[],p=o;p=p.parentNode;)p.nodeType===1&&m.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<m.length;o++){var S=m[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}to=!!Gh,Vh=Gh=null}finally{ft=s,ht.p=a,Be.T=i}}t.current=e,zt=2}}function Ph(){if(zt===2){zt=0;var t=Mi,e=Fs,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Be.T,Be.T=null;var i=ht.p;ht.p=2;var a=ft;ft|=4;try{Dy(t,e.alternate,e)}finally{ft=a,ht.p=i,Be.T=n}}zt=3}}function zh(){if(zt===4||zt===3){zt=0;var t=Fr;Fr=null,iM();var e=Mi,n=Fs,i=Xi,a=Wy,s=(i&335544064)===i?10262:10256;if(n.subtreeFlags&s||n.flags&s?zt=5:(zt=0,Fs=Mi=null,tS(e,e.pendingLanes)),s=e.pendingLanes,s===0&&(es=null),Qp(i),n=n.stateNode,qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Ml,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=Be.T,s=ht.p,ht.p=2,Be.T=null;try{for(var r=e.onRecoverableError,o=0;o<a.length;o++){var c=a[o];r(c.value,{componentStack:c.stack})}}finally{Be.T=n,ht.p=s}}if(a=Hr,r=Gr,Gr=null,a!==null&&(Hr=null,r===null&&(r=[]),t!==null))for(c=0;c<a.length;c++)n=(0,a[c])(r),n!==void 0&&t.finished.finally(n);Xi&3&&fd(),Ji(e),s=e.pendingLanes,i&261930&&s&42?e===qc?el++:(el=0,qc=e):(el=0,qc=null),Ll(0)}}function tS(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Cl(e)))}function fd(){return Fr!==null&&(Fr.skipTransition(),Fr=null),Ih(),Ph(),zh(),Bh()}function Bh(){if(zt!==5)return!1;var t=Mi,e=Uh;Uh=0;var n=Qp(Xi),i=Be.T,a=ht.p;try{ht.p=32>n?32:n,Be.T=null,n=Oh,Oh=null;var s=Mi,r=Xi;if(zt=0,Fs=Mi=null,Xi=0,ft&6)throw Error(ee(331));var o=ft;if(ft|=4,ky(s.current),Hy(s,s.current,r,n),ft=o,Ll(0,!1),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Ml,s)}catch{}return!0}finally{ht.p=a,Be.T=i,tS(t,e)}}function zg(t,e,n){e=ci(n,e),e=xh(t.stateNode,e,2),t=Qa(t,e,2),t!==null&&(Al(t,2),Ji(t))}function bt(t,e,n){if(t.tag===3)zg(t,t,n);else for(;e!==null;){if(e.tag===3){zg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(es===null||!es.has(i))){t=ci(n,t),n=gy(2),i=Qa(e,n,2),i!==null&&(xy(n,i,e,t),Al(i,2),Ji(i));break}}e=e.return}}function Zd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new IT;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Om=!0,a.add(n),t=kT.bind(null,t,e,n),e.then(t,t))}function kT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,At===t&&(at&n)===n&&(Ft===4||Ft===3&&(at&62914560)===at&&300>Yn()-cd?ft&2?Nu|=n:Kr(t,0):Nu|=n,qr===at&&(qr=0)),Ji(t)}function nS(t,e){e===0&&(e=Wv()),t=qs(t,e),t!==null&&(Al(t,e),Ji(t))}function jT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nS(t,n)}function XT(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(ee(314))}i!==null&&i.delete(e),nS(t,n)}function WT(t,e){return Zp(t,e)}var Qr=null,xr=null,Fh=!1,Du=!1,Kd=!1,Ya=0;function Ji(t){t!==xr&&t.next===null&&(xr===null?Qr=xr=t:xr=xr.next=t),Du=!0,Fh||(Fh=!0,qT())}function Ll(t,e){if(!Kd&&Du){Kd=!0;do for(var n=!1,i=Qr;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Zn(42|t)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Bg(i,s))}else s=at,s=Zu(i,i===At?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Tl(i,s)||(n=!0,Bg(i,s));i=i.next}while(n);Kd=!1}}function YT(){iS()}function iS(){Du=Fh=!1;var t=0;Ya!==0&&s1()&&(t=Ya);for(var e=Yn(),n=null,i=Qr;i!==null;){var a=i.next,s=aS(i,e);s===0?(i.next=null,n===null?Qr=a:n.next=a,a===null&&(xr=n)):(n=i,(t!==0||s&3)&&(Du=!0)),i=a}zt!==0&&zt!==5||Ll(t),Ya!==0&&(Ya=0)}function aS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-Zn(s),o=1<<r,c=a[r];c===-1?(!(o&n)||o&i)&&(a[r]=dM(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}if(e=At,n=at,n=Zu(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(yt===2||yt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Nd(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Tl(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Nd(i),Qp(n)){case 2:case 8:n=kv;break;case 32:n=cu;break;case 268435456:n=jv;break;default:n=cu}return i=sS.bind(null,t),n=Zp(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Nd(i),t.callbackPriority=2,t.callbackNode=null,2}function sS(t,e){if(zt!==0&&zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(fd()&&t.callbackNode!==n)return null;var i=at;return i=Zu(t,t===At?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(qy(t,i,e),aS(t,Yn()),t.callbackNode!=null&&t.callbackNode===n?sS.bind(null,t):null)}function Bg(t,e){if(fd())return null;qy(t,e,!0)}function qT(){o1(function(){ft&6?Zp(Vv,YT):iS()})}function Pm(){if(Ya===0){var t=Is;t===0&&(t=kl,kl<<=1,!(kl&261888)&&(kl=256)),Ya=t}return Ya}function Fg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Pc(t)}function ZT(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var s=Fg((a[Fn]||null).action),r=i.submitter;r&&(e=(e=r[Fn]||null)?Fg(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new Qu("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ya!==0){var c=new FormData(a,r);mh(n,{pending:!0,data:c,method:a.method,action:s},null,c)}}else typeof s=="function"&&(o.preventDefault(),c=new FormData(a,r),mh(n,{pending:!0,data:c,method:a.method,action:s},s,c))},currentTarget:a}]})}}for(var Qd=0;Qd<ah.length;Qd++){var Jd=ah[Qd],KT=Jd.toLowerCase(),QT=Jd[0].toUpperCase()+Jd.slice(1);Ni(KT,"on"+QT)}Ni(x_,"onAnimationEnd");Ni(v_,"onAnimationIteration");Ni(__,"onAnimationStart");Ni("dblclick","onDoubleClick");Ni("focusin","onFocus");Ni("focusout","onBlur");Ni(rT,"onTransitionRun");Ni(oT,"onTransitionStart");Ni(lT,"onTransitionCancel");Ni(y_,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);Ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function rS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var r=i.length-1;0<=r;r--){var o=i[r],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=u;try{s(a)}catch(h){du(h)}a.currentTarget=null,s=c}else for(r=0;r<i.length;r++){if(o=i[r],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=u;try{s(a)}catch(h){du(h)}a.currentTarget=null,s=c}}}}function tt(t,e){var n=e[O0];n===void 0&&(n=e[O0]=new Set);var i=t+"__bubble";n.has(i)||(oS(e,t,2,!1),n.add(i))}function $d(t,e,n){var i=0;e&&(i|=4),oS(n,t,i,e)}var nc="_reactListening"+Math.random().toString(36).slice(2);function zm(t){if(!t[nc]){t[nc]=!0,Jv.forEach(function(n){n!=="selectionchange"&&(JT.has(n)||$d(n,!1,t),$d(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nc]||(e[nc]=!0,$d("selectionchange",!1,e))}}function oS(t,e,n,i){switch(wS(e)){case 2:var a=j1;break;case 8:a=X1;break;default:a=jm}n=a.bind(null,e,n,t),a=void 0,!eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function ef(t,e,n,i,a){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var c=r.tag;if((c===3||c===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=Es(o),r===null)return;if(c=r.tag,c===5||c===6||c===26||c===27){i=s=r;continue e}o=o.parentNode}}i=i.return}r_(function(){var u=s,h=$p(n),m=[];e:{var d=S_.get(t);if(d!==void 0){var p=Qu,g=t;switch(t){case"keypress":if(Bc(n)===0)break e;case"keydown":case"keyup":p=PM;break;case"focusin":g="focus",p=Ud;break;case"focusout":g="blur",p=Ud;break;case"beforeblur":case"afterblur":p=Ud;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=V0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=MM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=GM;break;case x_:case v_:case __:p=NM;break;case y_:p=kM;break;case"scroll":case"scrollend":p=bM;break;case"wheel":p=XM;break;case"copy":case"cut":case"paste":p=CM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=j0;break;case"submit":p=FM;break;case"toggle":case"beforetoggle":p=YM}var b=(e&4)!==0,x=!b&&(t==="scroll"||t==="scrollend"),f=b?d!==null?d+"Capture":null:d;b=[];for(var v=u,M;v!==null;){var S=v;if(M=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||M===null||f===null||(S=al(v,f),S!=null&&b.push(hl(v,S,M))),x)break;v=v.return}0<b.length&&(d=new p(d,g,null,n,h),m.push({event:d,listeners:b}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",p&&n!==$f&&(g=n.relatedTarget||n.fromElement)&&(Es(g)||g[oo]))break e;(d||p)&&(g=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,d?(p=n.relatedTarget||n.toElement,d=u,p=p?Es(p):null,p!==null&&(x=El(p),b=p.tag,p!==x||b!==5&&b!==27&&b!==6)&&(p=null)):(d=null,p=u),d!==p&&(b=V0,S="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(b=j0,S="onPointerLeave",f="onPointerEnter",v="pointer"),x=d==null?g:Po(d),M=p==null?g:Po(p),g=new b(S,v+"leave",d,n,h),g.target=x,g.relatedTarget=M,S=null,Es(h)===u&&(b=new b(f,v+"enter",p,n,h),b.target=M,b.relatedTarget=x,S=b),x=S,b=d&&p?Gf(d,p,$T):null,d!==null&&Hg(m,g,d,b,!1),p!==null&&x!==null&&Hg(m,x,p,b,!0)))}e:{if(d=u?Po(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=q0;else if(Y0(d))if(f_)T=iT;else{T=tT;var A=eT}else p=d.nodeName,!p||p.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?u&&Jp(u.elementType)&&(T=q0):T=nT;if(T&&(T=T(t,u))){d_(m,T,n,h);break e}A&&A(t,d,u)}switch(A=u?Po(u):window,t){case"focusin":(Y0(A)||A.contentEditable==="true")&&(Mr=A,nh=u,jo=null);break;case"focusout":jo=nh=Mr=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,$0(m,n,h);break;case"selectionchange":if(sT)break;case"keydown":case"keyup":$0(m,n,h)}var N;if(nm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Er?c_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(l_&&n.locale!=="ko"&&(Er||y!=="onCompositionStart"?y==="onCompositionEnd"&&Er&&(N=o_()):(ka=h,em="value"in ka?ka.value:ka.textContent,Er=!0)),A=Lu(u,y),0<A.length&&(y=new k0(y,t,null,n,h),m.push({event:y,listeners:A}),N?y.data=N:(N=u_(n),N!==null&&(y.data=N)))),(N=ZM?KM(t,n):QM(t,n))&&(y=Lu(u,"onBeforeInput"),0<y.length&&(A=new k0("onBeforeInput","beforeinput",null,n,h),m.push({event:A,listeners:y}),A.data=N)),ZT(m,t,u,n,h)}rS(m,e)})}function hl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lu(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=al(t,n),a!=null&&i.unshift(hl(t,a,s)),a=al(t,e),a!=null&&i.push(hl(t,a,s))),t.tag===3)return i;t=t.return}return[]}function $T(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hg(t,e,n,i,a){for(var s=e._reactName,r=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(o=o.tag,c!==null&&c===i)break;o!==5&&o!==26&&o!==27||u===null||(c=u,a?(u=al(n,s),u!=null&&r.unshift(hl(n,u,c))):a||(u=al(n,s),u!=null&&r.push(hl(n,u,c)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var e1=/\r\n?/g,t1=/\u0000|\uFFFD/g;function Gg(t){return(typeof t=="string"?t:""+t).replace(e1,`
`).replace(t1,"")}function lS(t,e){return e=Gg(e),Gg(t)===e}function St(t,e,n,i,a,s){switch(n){case"children":if(typeof i=="string")e==="body"||e==="textarea"&&i===""||Wr(t,i);else if(typeof i=="number"||typeof i=="bigint")e!=="body"&&Wr(t,""+i);else return;break;case"className":Wl(t,"class",i);break;case"tabIndex":Wl(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Wl(t,n,i);break;case"style":s_(t,i,s);return;case"data":if(e!=="object"){Wl(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Pc(i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&St(t,e,"name",a.name,a,null),St(t,e,"formEncType",a.formEncType,a,null),St(t,e,"formMethod",a.formMethod,a,null),St(t,e,"formTarget",a.formTarget,a,null)):(St(t,e,"encType",a.encType,a,null),St(t,e,"method",a.method,a,null),St(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Pc(i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Fi);return;case"onScroll":i!=null&&tt("scroll",t);return;case"onScrollEnd":i!=null&&tt("scrollend",t);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ee(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ee(60));(s!=null?s.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Pc(i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":tt("beforetoggle",t),tt("toggle",t),Ic(t,"popover",i);break;case"xlinkActuate":$i(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":$i(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":$i(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":$i(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":$i(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":$i(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":$i(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":$i(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":$i(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ic(t,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=yM.get(n)||n,Ic(t,n,i);else return}dt=!0}function Hh(t,e,n,i,a,s){switch(n){case"style":s_(t,i,s);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ee(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ee(60));(s!=null?s.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"children":if(typeof i=="string")Wr(t,i);else if(typeof i=="number"||typeof i=="bigint")Wr(t,""+i);else return;break;case"onScroll":i!=null&&tt("scroll",t);return;case"onScrollEnd":i!=null&&tt("scrollend",t);return;case"onClick":i!=null&&(t.onclick=Fi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!$v.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),s=n.slice(2,a?n.length-7:void 0),e=t[Fn]||null,e=e!=null?e[n]:null,typeof e=="function"&&t.removeEventListener(s,e,a),typeof i=="function")){typeof e!="function"&&e!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(s,i,a);break e}dt=!0,n in t?t[n]=i:i===!0?t.setAttribute(n,""):Ic(t,n,i)}return}dt=!0}function hn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":tt("error",t),tt("load",t);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ee(137,e));default:St(t,e,s,r,n,null)}}a&&St(t,e,"srcSet",n.srcSet,n,null),i&&St(t,e,"src",n.src,n,null);return;case"input":tt("invalid",t);var o=s=r=a=null,c=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":c=h;break;case"defaultChecked":u=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(ee(137,e));break;default:St(t,e,i,h,n,null)}}n_(t,s,o,c,u,r,a,!1);return;case"select":tt("invalid",t),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:St(t,e,a,o,n,null)}e=s,n=r,t.multiple=!!i,e!=null?Ur(t,!!i,e,!1):n!=null&&Ur(t,!!i,n,!0);return;case"textarea":tt("invalid",t),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(ee(91));break;default:St(t,e,r,o,n,null)}a_(t,i,a,s);return;case"option":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:St(t,e,c,i,n,null)}return;case"dialog":tt("beforetoggle",t),tt("toggle",t),tt("cancel",t),tt("close",t);break;case"iframe":case"object":tt("load",t);break;case"video":case"audio":for(i=0;i<fl.length;i++)tt(fl[i],t);break;case"image":tt("error",t),tt("load",t);break;case"details":tt("toggle",t);break;case"embed":case"source":case"link":tt("error",t),tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(ee(137,e));default:St(t,e,u,i,n,null)}return;default:if(Jp(e)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Hh(t,e,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&St(t,e,o,i,n,null))}var n1={};function i1(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,c=null,u=null,h=null;for(p in n){var m=n[p];if(n.hasOwnProperty(p)&&m!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":c=m;default:i.hasOwnProperty(p)||St(t,e,p,null,i,m)}}for(var d in i){var p=i[d];if(m=n[d],i.hasOwnProperty(d)&&(p!=null||m!=null))switch(d){case"type":p!==m&&(dt=!0),s=p;break;case"name":p!==m&&(dt=!0),a=p;break;case"checked":p!==m&&(dt=!0),u=p;break;case"defaultChecked":p!==m&&(dt=!0),h=p;break;case"value":p!==m&&(dt=!0),r=p;break;case"defaultValue":p!==m&&(dt=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(ee(137,e));break;default:p!==m&&St(t,e,d,p,i,m)}}Jf(t,r,o,c,u,h,s,a);return;case"select":p=r=o=d=null;for(s in n)if(c=n[s],n.hasOwnProperty(s)&&c!=null)switch(s){case"value":break;case"multiple":p=c;default:i.hasOwnProperty(s)||St(t,e,s,null,i,c)}for(a in i)if(s=i[a],c=n[a],i.hasOwnProperty(a)&&(s!=null||c!=null))switch(a){case"value":s!==c&&(dt=!0),d=s;break;case"defaultValue":s!==c&&(dt=!0),o=s;break;case"multiple":s!==c&&(dt=!0),r=s;default:s!==c&&St(t,e,a,s,i,c)}e=o,n=r,i=p,d!=null?Ur(t,!!n,d,!1):!!i!=!!n&&(e!=null?Ur(t,!!n,e,!0):Ur(t,!!n,n?[]:"",!1));return;case"textarea":p=d=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:St(t,e,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":a!==s&&(dt=!0),d=a;break;case"defaultValue":a!==s&&(dt=!0),p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(ee(91));break;default:a!==s&&St(t,e,r,a,i,s)}i_(t,d,p);return;case"option":for(var g in n)if(d=n[g],n.hasOwnProperty(g)&&d!=null&&!i.hasOwnProperty(g))switch(g){case"selected":t.selected=!1;break;default:St(t,e,g,null,i,d)}for(c in i)if(d=i[c],p=n[c],i.hasOwnProperty(c)&&d!==p&&(d!=null||p!=null))switch(c){case"selected":d!==p&&(dt=!0),t.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:St(t,e,c,d,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)d=n[b],n.hasOwnProperty(b)&&d!=null&&!i.hasOwnProperty(b)&&St(t,e,b,null,i,d);for(u in i)if(d=i[u],p=n[u],i.hasOwnProperty(u)&&d!==p&&(d!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(ee(137,e));break;default:St(t,e,u,d,i,p)}return;default:if(Jp(e)){for(var x in n)d=n[x],n.hasOwnProperty(x)&&d!==void 0&&!i.hasOwnProperty(x)&&Hh(t,e,x,void 0,i,d);for(h in i)d=i[h],p=n[h],!i.hasOwnProperty(h)||d===p||d===void 0&&p===void 0||Hh(t,e,h,d,i,p);return}}for(var f in n)d=n[f],n.hasOwnProperty(f)&&d!=null&&!i.hasOwnProperty(f)&&St(t,e,f,null,i,d);for(m in i)d=i[m],p=n[m],!i.hasOwnProperty(m)||d===p||d==null&&p==null||St(t,e,m,d,i,p)}function Vg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function a1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&Vg(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var c=n[i],u=c.startTime;if(u>o)break;var h=c.transferSize,m=c.initiatorType;h&&Vg(m)&&(c=c.responseEnd,r+=h*(c<o?1:(o-u)/(c-u)))}if(--i,e+=8*(s+r)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Gh=null,Vh=null;function pl(t){return t.nodeType===9?t:t.ownerDocument}function kg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cS(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function uS(t,e,n,i){return n=pl(n).createElement(t),n[ln]=i,n[Fn]=e,hn(n,t,e),sn(n),n}function kh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tf=null;function s1(){var t=window.event;return t&&t.type==="popstate"?t===tf?!1:(tf=t,!0):(tf=null,!1)}var Bm=typeof setTimeout=="function"?setTimeout:void 0,r1=typeof clearTimeout=="function"?clearTimeout:void 0,jg=typeof Promise=="function"?Promise:void 0,Xg=typeof requestAnimationFrame=="function"?requestAnimationFrame:Bm,o1=typeof queueMicrotask=="function"?queueMicrotask:typeof jg<"u"?function(t){return jg.resolve(null).then(t).catch(l1)}:Bm;function l1(t){setTimeout(function(){throw t})}function us(t){return t==="head"}function Wg(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),no(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")af(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,af(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Nl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&af(t.ownerDocument.body);n=a}while(n);no(e)}function Yg(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function dS(t,e,n){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,n!=null&&(t.style.viewTransitionClass=n),n=getComputedStyle(t),n.display==="inline"){if(e=t.getClientRects(),e.length===1)var i=1;else for(var a=i=0;a<e.length;a++){var s=e[a];0<s.width&&0<s.height&&i++}i===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+n.paddingTop,t.marginBottom="-"+n.paddingBottom)}}function fS(t,e){t=t.style,e=e.style;var n=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(n=e.display,t.display=n==null||typeof n=="boolean"?"":n,n=e.margin,n!=null?t.margin=n:(n=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=n==null||typeof n=="boolean"?"":n,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function c1(t,e,n){return n=n.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=n.innerHeight&&t.left<=n.innerWidth}}function jh(t){var e=t.getBoundingClientRect(),n=getComputedStyle(t);return c1(e,n,t)}function u1(t){return t.documentElement.clientHeight}function d1(t){this.addEventListener("load",t),this.addEventListener("error",t)}function f1(t,e,n,i,a,s,r,o,c){var u=e.nodeType===9?e:e.ownerDocument;try{var h=u.startViewTransition({update:function(){var d=u.defaultView,p=d.navigation&&d.navigation.transition,g=u.fonts.status;i();var b=[];if(g==="loaded"&&(u1(u),u.fonts.status==="loading"&&b.push(u.fonts.ready)),g=b.length,t!==null)for(var x=t.suspenseyImages,f=0,v=0;v<x.length;v++){var M=x[v];if(!M.complete){var S=M.getBoundingClientRect();if(0<S.bottom&&0<S.right&&S.top<d.innerHeight&&S.left<d.innerWidth){if(f+=MS(M),f>Qc){b.length=g;break}M=new Promise(d1.bind(M)),b.push(M)}}}if(0<b.length)return d=Promise.race([Promise.all(b),new Promise(function(T){return setTimeout(T,500)})]).then(a,a),(p?Promise.allSettled([p.finished,d]):d).then(s,s);if(a(),p)return p.finished.then(s,s);s()},types:n});u.__reactViewTransition=h;var m=[];return h.ready.then(function(){for(var d=u.documentElement.getAnimations({subtree:!0}),p=0;p<d.length;p++){var g=d[p],b=g.effect,x=b.pseudoElement;if(x!=null&&x.startsWith("::view-transition")){m.push(g),g=b.getKeyframes();for(var f=x=void 0,v=!0,M=0;M<g.length;M++){var S=g[M],T=S.width;if(x===void 0)x=T;else if(x!==T){v=!1;break}if(T=S.height,f===void 0)f=T;else if(f!==T){v=!1;break}delete S.width,delete S.height,S.transform==="none"&&delete S.transform}v&&x!==void 0&&f!==void 0&&(b.setKeyframes(g),v=getComputedStyle(b.target,b.pseudoElement),v.width!==x||v.height!==f)&&(v=g[0],v.width=x,v.height=f,v=g[g.length-1],v.width=x,v.height=f,b.setKeyframes(g))}}r()},function(d){u.__reactViewTransition===h&&(u.__reactViewTransition=null);try{if(typeof d=="object"&&d!==null)switch(d.name){case"InvalidStateError":(d.message==="View transition was skipped because document visibility state is hidden."||d.message==="Skipping view transition because document visibility state has become hidden."||d.message==="Skipping view transition because viewport size changed."||d.message==="Transition was aborted because of invalid state")&&(d=null)}d!==null&&c(d)}finally{i(),a(),r()}}),h.finished.finally(function(){for(var d=0;d<m.length;d++)m[d].cancel();u.__reactViewTransition===h&&(u.__reactViewTransition=null),o()}),h}catch{return i(),a(),r(),null}}function Ms(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Ms.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:Nt({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};Ms.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,n=t.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var s=n[a].effect;s!==null&&s.target===t&&s.pseudoElement===e&&i.push(n[a])}return i};Ms.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function hS(t){return{name:t,group:new Ms("group",t),imagePair:new Ms("image-pair",t),old:new Ms("old",t),new:new Ms("new",t)}}function $n(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}$n.prototype.addEventListener=function(t,e,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(pS(s,t,e,n)===-1){var r=this,o=e;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(c){r.removeEventListener(t,e,n),typeof e=="function"?e.call(this,c):e.handleEvent(c)}),i!==null&&(a=r.removeEventListener.bind(r,t,e,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=Jr(n),s.push({type:t,listener:e,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),Bn(this._fragmentFiber.child,!1,h1,t,o,i)}this._eventListeners=s}};function h1(t,e,n,i){return Qt(t).addEventListener(e,n,i),!1}$n.prototype.removeEventListener=function(t,e,n){var i=this._eventListeners;if(i!==null&&(e=pS(i,t,e,n),e!==-1)){var a=i[e];n=a.attachedListener;var s=a.cleanup;a=Jr(a.optionsOrUseCapture),Bn(this._fragmentFiber.child,!1,p1,t,n,a),i.splice(e,1),s!==null&&s()}};function p1(t,e,n,i){return Qt(t).removeEventListener(e,n,i),!1}function Jr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function qg(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function pS(t,e,n,i){if(t.length===0)return-1;i=qg(i);for(var a=0;a<t.length;a++){var s=t[a];if(s.type===e&&s.listener===n&&qg(s.optionsOrUseCapture)===i)return a}return-1}$n.prototype.dispatchEvent=function(t){var e=Xs(this._fragmentFiber);if(e===null)return!0;e=Qt(e);var n=this._eventListeners;if(n!==null&&0<n.length||!t.bubbles){var i=e.nodeType===9?e.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var s=n[a];i.addEventListener(s.type,s.attachedListener,Jr(s.optionsOrUseCapture))}if(e.appendChild(i),t=i.dispatchEvent(t),n)for(a=0;a<n.length;a++)s=n[a],i.removeEventListener(s.type,s.attachedListener,Jr(s.optionsOrUseCapture));return e.removeChild(i),t}return e.dispatchEvent(t)};$n.prototype.focus=function(t){Bn(this._fragmentFiber.child,!0,mS,t,void 0,void 0)};function mS(t,e){return t.tag===6?!1:(t=Qt(t),A1(t,e))}$n.prototype.focusLast=function(t){var e=[];Bn(this._fragmentFiber.child,!0,Fm,e,void 0,void 0);for(var n=e.length-1;0<=n&&!mS(e[n],t);n--);};function Fm(t,e){return e.push(t),!1}$n.prototype.blur=function(){var t=Xs(this._fragmentFiber);t!==null&&(t=Qt(t),t=pl(t).activeElement,t!==null&&Bn(this._fragmentFiber.child,!1,m1,t,void 0,void 0))};function m1(t,e){return t.tag===6?!1:(t=Qt(t),t===e||t.contains(e)?(e.blur(),!0):!1)}$n.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),Bn(this._fragmentFiber.child,!1,g1,t,void 0,void 0)};function g1(t,e){return t.tag===6||(t=Qt(t),e.observe(t)),!1}$n.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),Bn(this._fragmentFiber.child,!1,x1,t,void 0,void 0);for(var n=e=0;n<bi.length;n++){var i=bi[n];i.fragmentInstance===this&&i.observer===t?t.unobserve(i.instance):bi[e++]=i}bi.length=e}};function x1(t,e){return t.tag===6||(t=Qt(t),e.unobserve(t)),!1}var bi=[],nf=!1;function v1(t,e,n){bi.push({fragmentInstance:t,observer:e,instance:n}),nf||(nf=!0,N1(function(){nf=!1;var i=bi;bi=[];for(var a=0;a<i.length;a++){var s=i[a];s.observer.unobserve(s.instance)}}))}$n.prototype.getClientRects=function(){var t=[];return Bn(this._fragmentFiber.child,!1,_1,t,void 0,void 0),t};function _1(t,e){if(t.tag===6){t=t.stateNode;var n=t.ownerDocument.createRange();n.selectNodeContents(t),e.push.apply(e,n.getClientRects())}else t=Qt(t),e.push.apply(e,t.getClientRects());return!1}$n.prototype.getRootNode=function(t){var e=Xs(this._fragmentFiber);return e===null?this:Qt(e).getRootNode(t)};$n.prototype.compareDocumentPosition=function(t){var e=Xs(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Bn(this._fragmentFiber.child,!1,Fm,n,void 0,void 0);var i=Qt(e);if(n.length===0){if(n=i,R0(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(n=e)}e=this._fragmentFiber;var a=i=n.compareDocumentPosition(t);return n===t?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Bv(e)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(t=Qt(n).compareDocumentPosition(t),a=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=Qt(n[0]),a=Qt(n[n.length-1]);var s=R0(this._fragmentFiber)?e.parentElement:i;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=s.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=e.compareDocumentPosition(t),o=a.compareDocumentPosition(t),c=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&s&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,e=i&&e===t||s&&a===t||c||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&e===t||!s&&a===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||y1(e,this._fragmentFiber,n[0],n[n.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function y1(t,e,n,i,a){var s=Es(a);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!s)e:{for(;s!==null;){if(s.tag===7&&(s===e||s.alternate===e)){n=!0;break e}s=s.return}n=!1}return n}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=a.ownerDocument,a===s||a===s.documentElement||a===s.body;e:{for(s=e,e=Xs(e);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==e&&s.alternate!==e)){s=!0;break e}s=s.return}s=!1}return s}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!s)&&!(e=s===n)&&(e=Gf(n,s,C0),e===null?e=!1:(Bn(e,!0,qE,s,n),s=_r,_r=null,e=s!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!s)&&!(e=s===i)&&(e=Gf(i,s,C0),e===null?e=!1:(Bn(e,!0,ZE,s,i),s=_r,Hf=_r=null,e=s!==null)),e):!1}function Zg(t,e){var n=t.ownerDocument.createRange();n.selectNodeContents(t),t=n.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}$n.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(ee(566));var e=[];Bn(this._fragmentFiber.child,!1,Fm,e,void 0,void 0);var n=t!==!1;if(e.length===0){var i=Bv(this._fragmentFiber);if(i=n?i[1]||i[0]||Xs(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){t=Qt(i),Zg(t,n);return}if(i=Qt(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(t);return}i.scrollIntoView(t)}}for(i=n?e.length-1:0;i!==(n?-1:e.length);){var a=e[i];a.tag===6?(a=Qt(a),Zg(a,n)):Qt(a).scrollIntoView(t),i+=n?-1:1}};function S1(t,e){return t=Qt(t),gS(t,e),!1}function gS(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function xS(t,e){var n=e._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];t.addEventListener(a.type,a.attachedListener,Jr(a.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(s){for(var r=0,o=0;o<bi.length;o++){var c=bi[o];(c.fragmentInstance!==e||c.observer!==s||c.instance!==t)&&(bi[r++]=c)}bi.length=r,s.observe(t)}),gS(t,e))}function b1(t,e){var n=e._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];t.removeEventListener(a.type,a.attachedListener,Jr(a.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(s){typeof s.rootMargin=="string"?v1(e,s,t):s.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Xh(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Xh(n),Ku(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function E1(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Nl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function M1(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fi(t.nextSibling),t===null))return null;return t}function vS(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=fi(t.nextSibling),t===null))return null;return t}function Wh(t){return t.data==="$?"||t.data==="$~"}function Hm(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function T1(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Yh=null;function Kg(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return fi(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Qg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function A1(t,e){function n(){i=!0}if(t.ownerDocument.activeElement===t)return!0;var i=!1;try{t.ownerDocument.addEventListener("focus",n,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",n,!0)}return i}function N1(t){Xg(function(){Xg(function(e){return t(e)})})}function _S(t,e,n){switch(e=pl(n),t){case"html":if(t=e.documentElement,!t)throw Error(ee(452));return t;case"head":if(t=e.head,!t)throw Error(ee(453));return t;case"body":if(t=e.body,!t)throw Error(ee(454));return t;default:throw Error(ee(451))}}function yS(t,e,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&St(t,e,i,null,n1,a)}n.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Fi&&(t.onclick=null),Ku(t)}function af(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ku(t)}var hi=new Map,Jg=new Set;function ml(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var Ma=ht.d;ht.d={f:R1,r:C1,D:w1,C:D1,L:L1,m:U1,X:I1,S:O1,M:P1};function R1(){var t=Ma.f(),e=ud();return t||e}function C1(t){var e=lo(t);e!==null&&e.tag===5&&e.type==="form"?sy(e):Ma.r(t)}var ho=typeof document>"u"?null:document;function SS(t,e,n){var i=ho;if(i&&typeof e=="string"&&e){var a=li(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Jg.has(a)||(Jg.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),hn(e,"link",t),sn(e),i.head.appendChild(e)))}}function w1(t){Ma.D(t),SS("dns-prefetch",t,null)}function D1(t,e){Ma.C(t,e),SS("preconnect",t,e)}function L1(t,e,n){Ma.L(t,e,n);var i=ho;if(i&&t&&e){var a='link[rel="preload"][as="'+li(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+li(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+li(n.imageSizes)+'"]')):a+='[href="'+li(t)+'"]';var s=a;switch(e){case"style":s=$r(t);break;case"script":s=po(t)}if(!(hi.has(s)||(t=Nt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),hi.set(s,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(Ul(s))||e==="script"&&i.querySelector(Ol(s))))){var r=i.createElement("link");hn(r,"link",t),e==="style"&&(r[uu]=!0,r.onload=r.onerror=function(){Qv(r)}),sn(r),i.head.appendChild(r)}}}function U1(t,e){Ma.m(t,e);var n=ho;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+li(i)+'"][href="'+li(t)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=po(t)}if(!hi.has(s)&&(t=Nt({rel:"modulepreload",href:t},e),hi.set(s,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ol(s)))return}i=n.createElement("link"),hn(i,"link",t),sn(i),n.head.appendChild(i)}}}function O1(t,e,n){Ma.S(t,e,n);var i=ho;if(i&&t){var a=Lr(i).hoistableStyles,s=$r(t);e=e||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Ul(s)))o.loading=5;else{t=Nt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=hi.get(s))&&Gm(t,n);var c=r=i.createElement("link");sn(c),hn(c,"link",t),c._p=new Promise(function(u,h){c.onload=u,c.onerror=h}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Zc(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function I1(t,e){Ma.X(t,e);var n=ho;if(n&&t){var i=Lr(n).hoistableScripts,a=po(t),s=i.get(a);s||(s=n.querySelector(Ol(a)),s||(t=Nt({src:t,async:!0},e),(e=hi.get(a))&&Vm(t,e),s=n.createElement("script"),sn(s),hn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function P1(t,e){Ma.M(t,e);var n=ho;if(n&&t){var i=Lr(n).hoistableScripts,a=po(t),s=i.get(a);s||(s=n.querySelector(Ol(a)),s||(t=Nt({src:t,async:!0,type:"module"},e),(e=hi.get(a))&&Vm(t,e),s=n.createElement("script"),sn(s),hn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function $g(t,e,n,i){var a=(a=qa.current)?ml(a):null;if(!a)throw Error(ee(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=$r(n.href),e=Lr(a).hoistableStyles,i=e.get(n),i||(i={type:"style",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=$r(n.href);var s=Lr(a).hoistableStyles,r=s.get(t);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=a.querySelector(Ul(t)))?s._p||(r.instance=s,r.state.loading=5):(s=hi.get(t),s||(s={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hi.set(t,s)),z1(a,t,s,r.state))),e&&i===null)throw Error(ee(528,""));return r}if(e&&i!==null)throw Error(ee(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(n=po(n),e=Lr(a).hoistableScripts,i=e.get(n),i||(i={type:"script",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(ee(444,t))}}function $r(t){return'href="'+li(t)+'"'}function Ul(t){return'link[rel="stylesheet"]['+t+"]"}function bS(t){return Nt({},t,{"data-precedence":t.precedence,precedence:null})}function z1(t,e,n,i){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[uu]!==!0){i.loading=1;return}}else e=t.createElement("link"),e[uu]=!0,e.onload=e.onerror=Qv.bind(null,e),hn(e,"link",n),sn(e),t.head.appendChild(e);i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2})}function po(t){return'[src="'+li(t)+'"]'}function Ol(t){return"script[async]"+t}function ex(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+li(n.href)+'"]');if(i)return e.instance=i,sn(i),i;var a=Nt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),sn(i),hn(i,"style",a),Zc(i,n.precedence,t),e.instance=i;case"stylesheet":a=$r(n.href);var s=t.querySelector(Ul(a));if(s)return e.state.loading|=4,e.instance=s,sn(s),s;i=bS(n),(a=hi.get(a))&&Gm(i,a),s=(t.ownerDocument||t).createElement("link"),sn(s);var r=s;return r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),hn(s,"link",i),e.state.loading|=4,Zc(s,n.precedence,t),e.instance=s;case"script":return s=po(n.src),(a=t.querySelector(Ol(s)))?(e.instance=a,sn(a),a):(i=n,(a=hi.get(s))&&(i=Nt({},n),Vm(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),sn(a),hn(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(ee(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,Zc(i,n.precedence,t));return e.instance}function Zc(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===e)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Gm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Vm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Kc=null;function tx(t,e,n){if(Kc===null){var i=new Map,a=Kc=new Map;a.set(n,i)}else a=Kc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var s=n[a];if(!(s[Nl]||s[ln]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function qh(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function B1(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function nx(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function ES(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function MS(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ix(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=MS(e),t.suspenseyImages.push(e)),t=G1.bind(t),e.decode().then(t,t))}function F1(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=$r(i.href),s=e.querySelector(Ul(a));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=gl.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,sn(s);return}s=e.ownerDocument||e,i=bS(i),(a=hi.get(a))&&Gm(i,a),s=s.createElement("link"),sn(s);var r=s;r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),hn(s,"link",i),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=gl.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Qc=0;function H1(t,e){return t.stylesheets&&t.count===0&&Jc(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&Jc(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&Qc===0&&(Qc=62500*a1());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Jc(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>Qc?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function TS(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Jc(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function gl(){this.count--,TS(this)}function G1(){this.imgCount--,TS(this)}var Uu=null;function Jc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uu=new Map,e.forEach(V1,t),Uu=null,gl.call(t))}function V1(t,e){if(!(e.state.loading&4)){var n=Uu.get(t);if(n)var i=n.get(null);else{n=new Map,Uu.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=e.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=gl.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var eo={$$typeof:Bi,Provider:null,Consumer:null,_currentValue:Ns,_currentValue2:Ns,_threadCount:0};function k1(t,e,n,i,a,s,r,o,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rd(0),this.hiddenUpdates=Rd(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function AS(t,e,n,i,a,s,r,o,c,u,h,m){return t=new k1(t,e,n,r,c,u,h,m,o),e=1,s===!0&&(e|=24),s=On(3,null,null,e),t.current=s,s.stateNode=t,e=lm(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:e},dm(s),t}function NS(t){return t?(t=Nr,t):Nr}function RS(t,e,n,i,a,s){a=NS(a),i.context===null?i.context=a:i.pendingContext=a,i=Ka(e),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Qa(t,i,e),n!==null&&(Pn(n,t,e),Wo(n,t,e))}function ax(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function km(t,e){ax(t,e),(t=t.alternate)&&ax(t,e)}function CS(t){if(t.tag===13||t.tag===31){var e=qs(t,67108864);e!==null&&Pn(e,t,67108864),km(t,67108864)}}function sx(t){if(t.tag===13||t.tag===31){var e=Kn();e=Kp(e);var n=qs(t,e);n!==null&&Pn(n,t,e),km(t,e)}}var to=!0;function j1(t,e,n,i){var a=Be.T;Be.T=null;var s=ht.p;try{ht.p=2,jm(t,e,n,i)}finally{ht.p=s,Be.T=a}}function X1(t,e,n,i){var a=Be.T;Be.T=null;var s=ht.p;try{ht.p=8,jm(t,e,n,i)}finally{ht.p=s,Be.T=a}}function jm(t,e,n,i){if(to){var a=Zh(i);if(a===null)ef(t,e,i,Ou,n),rx(t,i);else if(Y1(a,t,e,n,i))i.stopPropagation();else if(rx(t,i),e&4&&-1<W1.indexOf(t)){for(;a!==null;){var s=lo(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=ys(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var c=1<<31-Zn(r);o.entanglements[1]|=c,r&=~c}Ji(s),!(ft&6)&&(Ru=Yn()+500,Ll(0))}}break;case 31:case 13:o=qs(s,2),o!==null&&Pn(o,s,2),ud(),km(s,2)}if(s=Zh(i),s===null&&ef(t,e,i,Ou,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else ef(t,e,i,null,n)}}function Zh(t){return t=$p(t),Xm(t)}var Ou=null;function Xm(t){if(Ou=null,t=Es(t),t!==null){var e=El(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Iv(e),t!==null)return t;t=null}else if(n===31){if(t=Pv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ou=t,null}function wS(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(aM()){case Vv:return 2;case kv:return 8;case cu:case sM:return 32;case jv:return 268435456;default:return 32}default:return 32}}var Kh=!1,ts=null,ns=null,is=null,xl=new Map,vl=new Map,Ha=[],W1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rx(t,e){switch(t){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":xl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(e.pointerId)}}function Mo(t,e,n,i,a,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},e!==null&&(e=lo(e),e!==null&&CS(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function Y1(t,e,n,i,a){switch(e){case"focusin":return ts=Mo(ts,t,e,n,i,a),!0;case"dragenter":return ns=Mo(ns,t,e,n,i,a),!0;case"mouseover":return is=Mo(is,t,e,n,i,a),!0;case"pointerover":var s=a.pointerId;return xl.set(s,Mo(xl.get(s)||null,t,e,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,vl.set(s,Mo(vl.get(s)||null,t,e,n,i,a)),!0}return!1}function DS(t){var e=Es(t.target);if(e!==null){var n=El(e);if(n!==null){if(e=n.tag,e===13){if(e=Iv(n),e!==null){t.blockedOn=e,U0(t.priority,function(){sx(n)});return}}else if(e===31){if(e=Pv(n),e!==null){t.blockedOn=e,U0(t.priority,function(){sx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $c(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zh(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$f=i,n.target.dispatchEvent(i),$f=null}else return e=lo(n),e!==null&&CS(e),t.blockedOn=n,!1;e.shift()}return!0}function ox(t,e,n){$c(t)&&n.delete(e)}function q1(){Kh=!1,ts!==null&&$c(ts)&&(ts=null),ns!==null&&$c(ns)&&(ns=null),is!==null&&$c(is)&&(is=null),xl.forEach(ox),vl.forEach(ox)}function ic(t,e){t.blockedOn===e&&(t.blockedOn=null,Kh||(Kh=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,q1)))}var ac=null;function lx(t){ac!==t&&(ac=t,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,function(){ac===t&&(ac=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(Xm(i||n)===null)continue;break}var s=lo(n);s!==null&&(t.splice(e,3),e-=3,mh(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function no(t){function e(c){return ic(c,t)}ts!==null&&ic(ts,t),ns!==null&&ic(ns,t),is!==null&&ic(is,t),xl.forEach(e),vl.forEach(e);for(var n=0;n<Ha.length;n++){var i=Ha[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Ha.length&&(n=Ha[0],n.blockedOn===null);)DS(n),n.blockedOn===null&&Ha.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Fn]||null;if(typeof s=="function")r||lx(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Fn]||null)o=r.formAction;else if(Xm(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),lx(n)}}}function LS(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Wm(t){this._internalRoot=t}hd.prototype.render=Wm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));var n=e.current,i=Kn();RS(n,i,t,e,null,null)};hd.prototype.unmount=Wm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;RS(t.current,2,null,t,null,null),ud(),e[oo]=null}};function hd(t){this._internalRoot=t}hd.prototype.unstable_scheduleHydration=function(t){if(t){var e=Kv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ha.length&&e!==0&&e<Ha[n].priority;n++);Ha.splice(n,0,t),n===0&&DS(t)}};var cx=Uv.version;if(cx!=="19.3.0")throw Error(ee(527,cx,"19.3.0"));ht.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=YE(e),t=t!==null?zv(t):null,t=t===null?null:t.stateNode,t};var Z1={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Be,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{Ml=sc.inject(Z1),qn=sc}catch{}}Yu.createRoot=function(t,e){if(!Ov(t))throw Error(ee(299));var n=!1,i="",a=hy,s=py,r=my;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=AS(t,1,!1,null,null,n,i,null,a,s,r,LS),t[oo]=e.current,zm(t),new Wm(e)};Yu.hydrateRoot=function(t,e,n){if(!Ov(t))throw Error(ee(299));var i=!1,a="",s=hy,r=py,o=my,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),e=AS(t,1,!0,e,n??null,i,a,c,s,r,o,LS),e.context=NS(null),n=e.current,i=Kn(),i=Kp(i),a=Ka(i),a.callback=null,Qa(n,a,i),n=i,e.current.lanes=n,Al(e,n),Ji(e),t[oo]=e.current,zm(t),new hd(e)};Yu.version="19.3.0";function US(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(US)}catch(t){console.error(t)}}US(),Nv.exports=Yu;var K1=Nv.exports;class Q1{constructor(){bd(this,"ctx",null);bd(this,"isMuted",!1)}initContext(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted}getMuted(){return this.isMuted}setMuted(e){this.isMuted=e}playClick(e=800){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(e,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(120,this.ctx.currentTime+.04),i.gain.setValueAtTime(.04,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.04),n.connect(i),i.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.05)}catch{}}playHover(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1600,this.ctx.currentTime+.03),n.gain.setValueAtTime(.015,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.03),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.035)}catch{}}playTelemetry(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(440,this.ctx.currentTime),e.frequency.setValueAtTime(880,this.ctx.currentTime+.05),n.gain.setValueAtTime(.03,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.1),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.1)}catch{}}playBootSweep(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(100,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(800,this.ctx.currentTime+.8);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(400,this.ctx.currentTime),i.frequency.exponentialRampToValueAtTime(3e3,this.ctx.currentTime+.8),n.gain.setValueAtTime(.02,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.8),e.connect(i),i.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.85)}catch{}}}const Re=new Q1;/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function $1(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:J1(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=t=>{const e=eA(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function sf(t){return t!=null}function nA(t,e={}){var d,p;const n=e.attributeNames??{},i=g=>n[g]??g,a=t.size??t.width??ps.width,s=t.size??t.height??ps.height,r=((d=t.aliases)==null?void 0:d.filter(g=>typeof g=="string"&&g.trim()!=="").map(g=>`lucide-${g}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...r],c=((p=e.className)==null?void 0:p.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?Qh(...c):Qh("lucide",...o,...c),h=e.absoluteStrokeWidth?Number(e.strokeWidth??ps["stroke-width"])*Number(t.size??t.width??ps.width)/Number(e.size??e.width??ps.width):e.strokeWidth??ps["stroke-width"];return["svg",{...Object.entries(ps).reduce((g,[b,x])=>(g[i(b)]=x,g),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&sf(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&sf(e.width)&&{[i("width")]:e.width},..."height"in e&&sf(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:h,...u&&{[i("class")]:u},[i("viewBox")]:`0 0 ${a} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(g=>{const[b,x,f]=g,v=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...x}:x;return f?[b,v,f]:[b,v]})]}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function iA(t,e={}){return nA(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},sA=Ce.createContext({}),rA=()=>Ce.useContext(sA),oA=Ce.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:a,absoluteStrokeWidth:s,nonScalingStroke:r,className:o="",children:c,iconNode:u=[],icon:h={node:u,aliases:[],size:24},...m},d)=>{const{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:b=!1,nonScalingStroke:x=!1,color:f="currentColor",className:v=""}=rA()??{},M=!!c||aA(m),[S,T,A=[]]=iA(h,{color:t??f,width:n??e??p,height:i??e??p,strokeWidth:a??g,absoluteStrokeWidth:s??b,nonScalingStroke:r??x,className:Qh(v,o),hasA11yProp:M,attributes:m});return Ce.createElement(S,{ref:d,...T},[...A.map(([N,y])=>Ce.createElement(N,y)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ke(t,e=[],n=[]){const i=typeof t=="string"?$1(t,e,n):t,a=Ce.forwardRef(({className:s,...r},o)=>Ce.createElement(oA,{ref:o,icon:i,className:s,...r}));return i.name&&(a.displayName=tA(i.name)),a}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};OS.node;const Hs=Ke(OS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};IS.node;const pd=Ke(IS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};PS.node;const lA=Ke(PS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS={name:"bot",size:24,node:[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]};zS.node;const ux=Ke(zS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS={name:"brain",size:24,node:[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]};BS.node;const FS=Ke(BS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};HS.node;const cA=Ke(HS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};GS.node;const VS=Ke(GS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};kS.node;const uA=Ke(kS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};jS.node;const XS=Ke(jS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};WS.node;const dA=Ke(WS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS={name:"cloud",size:24,node:[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]};YS.node;const fA=Ke(YS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS={name:"command",size:24,node:[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]};qS.node;const dx=Ke(qS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};ZS.node;const mo=Ke(ZS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS={name:"crosshair",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]};KS.node;const hA=Ke(KS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};QS.node;const pA=Ke(QS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};JS.node;const io=Ke(JS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};$S.node;const eb=Ke($S);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};tb.node;const mA=Ke(tb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb={name:"flask-conical",size:24,node:[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]};nb.node;const gA=Ke(nb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib={name:"git-branch",size:24,node:[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]]};ib.node;const Ym=Ke(ib);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab={name:"hammer",size:24,node:[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]]};ab.node;const xA=Ke(ab);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};sb.node;const Jh=Ke(sb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};rb.node;const vA=Ke(rb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};ob.node;const _A=Ke(ob);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};lb.node;const yA=Ke(lb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};cb.node;const SA=Ke(cb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};ub.node;const bA=Ke(ub);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};db.node;const EA=Ke(db);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb={name:"repeat",size:24,node:[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]};fb.node;const fx=Ke(fb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};hb.node;const MA=Ke(hb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};pb.node;const TA=Ke(pb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};mb.node;const gb=Ke(mb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};xb.node;const hx=Ke(xb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};vb.node;const AA=Ke(vb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};_b.node;const NA=Ke(_b);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};yb.node;const tl=Ke(yb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Sb.node;const RA=Ke(Sb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};bb.node;const CA=Ke(bb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Eb.node;const md=Ke(Eb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Mb.node;const Iu=Ke(Mb),wA=({onEnter:t})=>{const[e,n]=Ce.useState(0),[i,a]=Ce.useState([]),[s,r]=Ce.useState(!1);Ce.useEffect(()=>{const c=setTimeout(()=>{n(1),Re.playClick(400)},600),u=setTimeout(()=>{n(2),Re.playBootSweep()},1400),h=setTimeout(()=>{a(["IDENTITY ........ VERIFIED","MEMORY .......... ONLINE","SYSTEMS ......... ONLINE","MISSIONS ........ LOADED","RESEARCH ........ ACTIVE"]),Re.playTelemetry(),n(3)},2500),m=setTimeout(()=>{r(!0),n(4),Re.playTelemetry()},3600);return()=>{clearTimeout(c),clearTimeout(u),clearTimeout(h),clearTimeout(m)}},[]);const o=()=>{Re.playBootSweep(),t()};return l.jsxs("div",{className:"fixed inset-0 z-50 bg-[#05070a] flex flex-col items-center justify-center p-6 select-none overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"}),l.jsx("div",{className:"absolute inset-0 scanlines opacity-40 pointer-events-none"}),l.jsx("div",{className:"absolute inset-0 vignette pointer-events-none"}),l.jsxs("div",{className:"absolute top-6 left-8 right-8 flex items-center justify-between text-[11px] font-mono text-slate-500 border-b border-slate-800/80 pb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),l.jsx("span",{className:"text-cyan-400 font-semibold tracking-wider",children:"NEURAL LINK // ESTABLISHED"})]}),l.jsxs("div",{className:"flex items-center gap-6",children:[l.jsx("span",{children:"ERA: 2042"}),l.jsx("span",{children:"SYSTEM PROTOCOL: SECURE-07"}),l.jsx("button",{onClick:o,className:"text-slate-400 hover:text-cyan-400 underline transition-colors cursor-pointer",children:"[ FAST BYPASS ]"})]})]}),l.jsxs("div",{className:"relative z-10 w-full max-w-xl mx-auto flex flex-col items-start font-mono",children:[e>=0&&l.jsxs("div",{className:"text-cyan-400 text-lg mb-4 flex items-center gap-2",children:[l.jsx("span",{className:"text-slate-600",children:">"}),l.jsx("span",{className:"text-slate-400 text-sm",children:"INITIALIZING DOSSIER QUERY:"}),l.jsx("span",{className:"animate-pulse text-cyan-400 font-bold",children:"_"})]}),e>=1&&l.jsxs("div",{className:"space-y-2 border-l-2 border-cyan-500/50 pl-5 my-3 animate-fade-in",children:[l.jsxs("div",{className:"text-xs text-cyan-400 tracking-widest uppercase font-semibold flex items-center gap-2",children:[l.jsx(Iu,{className:"w-3.5 h-3.5"})," DESIGNATION IDENTIFIER"]}),l.jsx("h1",{className:"text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-white",children:"CHARACTER-07"}),l.jsx("div",{className:"text-xl sm:text-2xl text-slate-300 font-mono tracking-wide",children:"ATLEE KUMAAR"}),l.jsxs("div",{className:"text-xs sm:text-sm text-cyan-400/90 font-mono tracking-widest uppercase flex items-center gap-2 pt-1",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"AI SYSTEMS ARCHITECT"]})]}),e>=3&&l.jsxs("div",{className:"w-full bg-slate-950/60 border border-slate-800/80 rounded p-4 my-5 space-y-1.5 text-xs text-slate-300 font-mono shadow-xl backdrop-blur-md",children:[l.jsxs("div",{className:"text-[10px] text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-800 pb-1 flex justify-between",children:[l.jsx("span",{children:"SYSTEM SUBSYSTEMS INTEGRITY CHECK"}),l.jsx("span",{className:"text-cyan-400",children:"100% OK"})]}),i.map((c,u)=>l.jsxs("div",{className:"flex justify-between items-center text-slate-400",children:[l.jsx("span",{children:c.split(" ")[0]}),l.jsx("span",{className:"text-slate-600",children:"........................"}),l.jsx("span",{className:"text-cyan-400 font-bold tracking-wider",children:c.split(" ").pop()})]},u))]}),s&&l.jsxs("div",{className:"w-full space-y-6 animate-fade-in pt-2",children:[l.jsxs("div",{className:"flex items-center justify-between p-3 rounded bg-cyan-950/20 border border-cyan-500/30 text-xs",children:[l.jsx("span",{className:"text-slate-400",children:"CHARACTER STATUS:"}),l.jsxs("span",{className:"flex items-center gap-1.5 text-cyan-300 font-bold tracking-widest",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"ACTIVE"]})]}),l.jsxs("button",{onClick:o,onMouseEnter:()=>Re.playHover(),className:"group relative w-full py-4 px-6 bg-gradient-to-r from-cyan-950/40 via-cyan-900/30 to-slate-900/40 hover:from-cyan-500/20 hover:to-cyan-400/20 border border-cyan-500/50 hover:border-cyan-400 rounded-lg text-white font-mono text-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 flex items-center justify-center gap-3 cursor-pointer",children:[l.jsx("span",{className:"relative z-10 font-bold text-cyan-300 group-hover:text-white transition-colors",children:"[ ENTER THE CHARACTER ]"}),l.jsx(pd,{className:"w-4 h-4 text-cyan-400 group-hover:translate-x-1.5 transition-transform duration-300"})]})]})]}),l.jsx("div",{className:"absolute bottom-6 text-[10px] font-mono text-slate-600 tracking-wider",children:"DISCOVERING DIGITAL IDENTITY ARCHIVE // DOSSIER 07-AK"})]})},DA=()=>{const[t,e]=Ce.useState({x:-100,y:-100}),[n,i]=Ce.useState({x:-100,y:-100}),[a,s]=Ce.useState(!1),[r,o]=Ce.useState(""),[c,u]=Ce.useState(!1),[h,m]=Ce.useState(!1);return Ce.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches){u(!0);return}document.body.classList.add("custom-cursor-active");const d=x=>{e({x:x.clientX,y:x.clientY}),m(!0);const f=x.target;if(!f)return;const v=f.closest('button, a, [data-cursor], [role="button"]');if(v){s(!0);const M=v.getAttribute("data-cursor");M?o(M):v.tagName==="A"?o("ACCESS"):v.tagName==="BUTTON"?o("INTERACT"):o("VIEW")}else s(!1),o("")},p=()=>m(!1);window.addEventListener("mousemove",d),document.addEventListener("mouseleave",p);let g;const b=()=>{i(x=>({x:x.x+(t.x-x.x)*.25,y:x.y+(t.y-x.y)*.25})),g=requestAnimationFrame(b)};return g=requestAnimationFrame(b),()=>{document.body.classList.remove("custom-cursor-active"),window.removeEventListener("mousemove",d),document.removeEventListener("mouseleave",p),cancelAnimationFrame(g)}},[t]),c||!h?null:l.jsxs("div",{className:"pointer-events-none fixed inset-0 z-[100] overflow-hidden",children:[l.jsx("div",{className:"fixed w-2 h-2 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 shadow-sm shadow-cyan-400 transition-opacity duration-200",style:{left:`${t.x}px`,top:`${t.y}px`,opacity:a?.3:1}}),l.jsx("div",{className:`fixed rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ${a?"w-12 h-12 bg-cyan-950/40 border border-cyan-400 backdrop-blur-[2px]":"w-7 h-7 border border-cyan-500/30"}`,style:{left:`${n.x}px`,top:`${n.y}px`},children:a&&r&&l.jsx("span",{className:"text-[9px] font-mono font-bold tracking-widest text-cyan-300 uppercase",children:r})})]})},LA=({onOpenCommandPalette:t})=>{const[e,n]=Ce.useState(!1),[i,a]=Ce.useState(!1),[s,r]=Ce.useState(!1);Ce.useEffect(()=>{const h=()=>{n(window.scrollY>40)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const o=()=>{const h=Re.toggleMute();a(h),h||Re.playTelemetry()},c=[{label:"ORIGIN",href:"#origin"},{label:"ABILITIES",href:"#abilities"},{label:"MISSIONS",href:"#missions"},{label:"LAB",href:"#laboratory"},{label:"MEMORY",href:"#memory"},{label:"CONTACT",href:"#contact"}],u=h=>{Re.playClick(),r(!1);const m=document.querySelector(h);m&&m.scrollIntoView({behavior:"smooth"})};return l.jsxs("header",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${e?"bg-[#05070a]/90 backdrop-blur-md border-b border-white/5 py-3.5 shadow-lg shadow-black/40":"bg-transparent py-5 border-b border-transparent"}`,children:[l.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between",children:[l.jsxs("a",{href:"#hero",onClick:()=>Re.playClick(),className:"flex items-center gap-3 group","data-cursor":"CHARACTER",children:[l.jsx("div",{className:"w-8 h-8 rounded-lg bg-cyan-950/40 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all",children:"07"}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"font-heading font-extrabold tracking-widest text-sm text-white group-hover:text-cyan-300 transition-colors",children:"CHARACTER-07"}),l.jsxs("span",{className:"text-[10px] font-mono text-slate-500 flex items-center gap-1.5 tracking-wider",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),"SYSTEM ACTIVE // 2042"]})]})]}),l.jsx("nav",{className:"hidden md:flex items-center gap-7",children:c.map(h=>l.jsxs("a",{href:h.href,onClick:m=>{m.preventDefault(),u(h.href)},onMouseEnter:()=>Re.playHover(),className:"text-xs font-mono tracking-widest text-slate-400 hover:text-cyan-300 transition-colors py-1 relative group","data-cursor":"GOTO",children:[l.jsx("span",{className:"relative z-10",children:h.label}),l.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan-400 group-hover:w-full transition-all duration-300"})]},h.label))}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("button",{onClick:()=>{Re.playTelemetry(),t()},onMouseEnter:()=>Re.playHover(),title:"Open Command Palette (Ctrl+K)",className:"hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-all cursor-pointer","data-cursor":"SEARCH",children:[l.jsx(dx,{className:"w-3.5 h-3.5 text-cyan-400"}),l.jsx("span",{className:"text-slate-300",children:"HUD"}),l.jsx("kbd",{className:"text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 border border-slate-700",children:"Ctrl+K"})]}),l.jsx("button",{onClick:o,onMouseEnter:()=>Re.playHover(),className:"p-2 rounded bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-all cursor-pointer",title:i?"Unmute telemetry audio":"Mute telemetry audio","data-cursor":i?"UNMUTE":"MUTE",children:i?l.jsx(CA,{className:"w-4 h-4 text-slate-500"}):l.jsx(RA,{className:"w-4 h-4 text-cyan-400"})}),l.jsx("button",{onClick:()=>{Re.playClick(),r(!s)},className:"md:hidden p-2 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400",children:s?l.jsx(md,{className:"w-5 h-5"}):l.jsx(yA,{className:"w-5 h-5"})})]})]}),s&&l.jsxs("div",{className:"md:hidden fixed inset-x-0 top-full bg-[#05070a]/95 backdrop-blur-xl border-b border-slate-800 p-6 font-mono space-y-4 shadow-2xl animate-fade-in",children:[l.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2",children:"DOSSIER NAVIGATION DIRECTORY"}),l.jsx("div",{className:"flex flex-col space-y-3",children:c.map(h=>l.jsxs("a",{href:h.href,onClick:m=>{m.preventDefault(),u(h.href)},className:"text-sm font-mono tracking-wider text-slate-200 hover:text-cyan-300 py-2 border-b border-slate-900 flex justify-between items-center",children:[l.jsx("span",{children:h.label}),l.jsx("span",{className:"text-xs text-slate-600",children:">>"})]},h.label))}),l.jsxs("button",{onClick:()=>{r(!1),t()},className:"w-full py-2.5 rounded bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 text-xs flex items-center justify-center gap-2",children:[l.jsx(dx,{className:"w-4 h-4"})," OPEN COMMAND HUD"]})]})]})},UA=({isOpen:t,onClose:e})=>{const[n,i]=Ce.useState("");if(Ce.useEffect(()=>{const o=c=>{(c.metaKey||c.ctrlKey)&&c.key==="k"&&(c.preventDefault(),Re.playTelemetry(),t?e():i("")),c.key==="Escape"&&t&&e()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[t,e]),!t)return null;const s=[{label:"00 // HERO HUD",href:"#hero",icon:hx,desc:"Telemetry & core philosophy"},{label:"01 // ORIGIN DOSSIER",href:"#origin",icon:lA,desc:"The Question, Obsession, Transformation"},{label:"02 // CHARACTER ABILITIES",href:"#abilities",icon:Iu,desc:"Perception, Reasoning, Memory, Action"},{label:"03 // THE MIND (INTELLIGENCE FLOW)",href:"#the-mind",icon:mo,desc:"Interactive living cognitive architecture"},{label:"04 // MISSION LOG",href:"#missions",icon:tl,desc:"Verified LiDAR benchmarks & projects"},{label:"05 // THE LAB (EXPERIMENTS)",href:"#laboratory",icon:Jh,desc:"Active research logs & ongoing hypotheses"},{label:"06 // SYSTEM STACK",href:"#stack",icon:Jh,desc:"Layered 5-tier engineering architecture"},{label:"07 // MEMORY TIMELINE",href:"#memory",icon:Ym,desc:"Cognitive evolution timeline"},{label:"08 // OPEN SYSTEM (GITHUB)",href:"#open-system",icon:tl,desc:"Public terminal connection to atleekumaar"},{label:"09 // FUTURE OBJECTIVES",href:"#future",icon:Iu,desc:"Autonomous Intelligence roadmap"},{label:"10 // CHARACTER FILE",href:"#character-file",icon:hx,desc:"Biometric dossier and directives"},{label:"11 // MISSION CONTROL (CONTACT)",href:"#contact",icon:tl,desc:"Direct communication channels"}].filter(o=>o.label.toLowerCase().includes(n.toLowerCase())||o.desc.toLowerCase().includes(n.toLowerCase())),r=o=>{Re.playClick(),e();const c=document.querySelector(o);c&&c.scrollIntoView({behavior:"smooth"})};return l.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 sm:pt-28 p-4 animate-fade-in",children:l.jsxs("div",{className:"relative w-full max-w-xl bg-[#0a0d14] border border-cyan-500/40 rounded-xl shadow-2xl shadow-cyan-950/50 overflow-hidden font-mono text-slate-200",children:[l.jsxs("div",{className:"flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-950/60",children:[l.jsx(MA,{className:"w-5 h-5 text-cyan-400"}),l.jsx("input",{type:"text",placeholder:"Search dossier directives, abilities, missions, telemetry...",value:n,onChange:o=>i(o.target.value),autoFocus:!0,className:"w-full bg-transparent border-none outline-none text-sm text-slate-100 placeholder:text-slate-500 font-mono"}),l.jsx("button",{onClick:e,className:"text-slate-500 hover:text-slate-200 p-1 rounded",children:l.jsx(md,{className:"w-4 h-4"})})]}),l.jsxs("div",{className:"max-h-80 overflow-y-auto p-2 space-y-1",children:[l.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest px-3 py-1 font-semibold",children:"SYSTEM DIRECTIVES & JUMP TARGETS"}),s.length===0?l.jsx("div",{className:"text-center py-8 text-xs text-slate-500 font-mono",children:"NO MATCHING TELEMETRY ENTRY FOUND."}):s.map((o,c)=>{const u=o.icon;return l.jsxs("button",{onClick:()=>r(o.href),onMouseEnter:()=>Re.playHover(),className:"w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-cyan-950/30 hover:border-cyan-500/30 border border-transparent text-left transition-all group cursor-pointer",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-colors",children:l.jsx(u,{className:"w-4 h-4"})}),l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-semibold text-slate-200 group-hover:text-cyan-300",children:o.label}),l.jsx("div",{className:"text-[11px] text-slate-500",children:o.desc})]})]}),l.jsx("span",{className:"text-[10px] text-slate-600 group-hover:text-cyan-400 font-mono",children:"[ JUMP ]"})]},c)})]}),l.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-t border-slate-800/80 bg-slate-950/80 text-[10px] text-slate-500",children:[l.jsx("span",{children:"NAVIGATION HUD // CHARACTER-07"}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{children:"ESC to close"}),l.jsx("span",{children:"ENTER to jump"})]})]})]})})},OA=[{keywords:["who","atlee","atul","character","about","kon","kaun","identity","profile","intro","introduction","kumaar","shukla"],response:"Atlee Kumaar (Atul Shukla), codename **CHARACTER-07**, is an **AI Systems Architect** and Computer Science Engineering student specializing in Artificial Intelligence. His mission is to build intelligent systems capable of perceiving, reasoning, learning, and acting in the physical and digital world.",jumpTarget:"#character-file",jumpLabel:"VIEW CHARACTER FILE"},{keywords:["lidar","mission","project","52.05","benchmark","fps","msn-001","perception","foveated","point cloud","spvcnn","kaam","projects"],response:`Mission 001 is **FOVEATED 2.5D LiDAR MAPPING** for autonomous navigation. Key verified hardware benchmarks include:
• **52.05% mIoU** on semantic point cloud segmentation
• **23.37 ms** latency
• **42.79 FPS** real-time throughput
• **99.93%** prediction agreement
• **0 / 100** dropped frames in stress testing
Built with PyTorch, CUDA, Open3D, OpenCV, SPVCNN, and PointNet++.`,jumpTarget:"#missions",jumpLabel:"EXPLORE MISSION 001"},{keywords:["skills","abilities","tech","stack","technologies","python","tools","languages","kya aata hai","capabilities","talent"],response:`CHARACTER-07's core abilities span 6 engineering dimensions:
1. **PERCEPTION**: Computer Vision, LiDAR, Point Clouds, Open3D, OpenCV
2. **REASONING**: Deep Learning, Transformers, LLMs, PyTorch, CUDA
3. **MEMORY**: RAG, Vector Databases (HNSW), Dense Embeddings
4. **ACTION**: AI Agents, Tool Calling, Agentic State Machines
5. **CONSTRUCTION**: Python, C++, JavaScript/TypeScript, React, FastAPI, PostgreSQL
6. **DEPLOYMENT**: Docker, Cloud (AWS), MLOps, CI/CD.`,jumpTarget:"#abilities",jumpLabel:"INSPECT ABILITIES"},{keywords:["mind","philosophy","loop","cognitive","perceive","reason","think","thought","logic"],response:`Atlee's core engineering philosophy is:
> *“I don't predict the future. I build systems that make it possible.”*

His living cognitive architecture follows the 6-step loop: **PERCEIVE → UNDERSTAND → REASON → DECIDE → ACT → LEARN**, with the signature development cycle: **RESEARCH → BUILD → BREAK → LEARN → SHIP → REPEAT**.`,jumpTarget:"#the-mind",jumpLabel:"VIEW COGNITIVE FLOW"},{keywords:["contact","hire","linkedin","github","email","connect","reach","message","baat","sampark","social"],response:`You can connect directly with Atlee Kumaar through his authenticated official channels:
• **GitHub**: [github.com/atleekumaar](https://github.com/atleekumaar)
• **LinkedIn**: [linkedin.com/in/atul-shukla-105341383](https://www.linkedin.com/in/atul-shukla-105341383)

He is open for high-impact AI systems architecture, point cloud perception research, and autonomous agent engineering opportunities.`,jumpTarget:"#contact",jumpLabel:"OPEN MISSION CONTROL"},{keywords:["lab","experiments","research","hypothesis","exp-014","exp-021","ongoing"],response:`In **THE LAB**, active experiments include:
• **EXP-014**: Agent Memory & Context Persistence (Running)
• **EXP-021**: Foveated Voxel Density Adaptation (Verified: 64.2% memory reduction)
• **EXP-009**: Latent Embedding Quantization (Verified: 98.4% precision retained)
• **EXP-033**: Stochastic Multi-modal Tool Dispatch (In Progress).`,jumpTarget:"#laboratory",jumpLabel:"ENTER THE LAB"},{keywords:["future","2042","objective","next","roadmap","autonomous","vision"],response:`The next horizon of CHARACTER-07 (ERA 2042) is moving from models → systems → agents → **AUTONOMOUS INTELLIGENCE**. Key objectives include:
1. **Intelligent Agents**: Autonomous state machines with zero hallucination.
2. **Autonomous Systems**: Real-world world modeling & 3D perception-to-action.
3. **AI Infrastructure**: Distributed edge runtimes with sub-30ms inference guarantees.`,jumpTarget:"#future",jumpLabel:"VIEW FUTURE OBJECTIVES"}],IA=()=>{const[t,e]=Ce.useState(!1),[n,i]=Ce.useState(!1),[a,s]=Ce.useState(""),[r,o]=Ce.useState([{id:"init-1",sender:"bot",text:"Greetings. I am the **C-07 AI DOSSIER AGENT**. Ask me anything about Atlee Kumaar (Atul Shukla) — his AI architecture, verified LiDAR benchmarks, tech stack, lab experiments, or how to connect.",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),[c,u]=Ce.useState(!1),h=Ce.useRef(null);Ce.useEffect(()=>{var g;(g=h.current)==null||g.scrollIntoView({behavior:"smooth"})},[r,c]);const m=["Who is Atlee Kumaar?","Tell me about Mission 001 LiDAR","What are his Core Abilities?","How to contact him?","What is his AI philosophy?"],d=g=>{const b=(g||a).trim();if(!b)return;Re.playTelemetry();const x={id:`usr-${Date.now()}`,sender:"user",text:b,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};o(f=>[...f,x]),s(""),u(!0),setTimeout(()=>{const f=b.toLowerCase();let v=OA.find(N=>N.keywords.some(y=>f.includes(y))),M="I received your query. Atlee Kumaar is an AI Systems Architect specializing in 3D perception, multi-agent reasoning, and scalable AI infrastructure. You can explore his verified missions, abilities, and GitHub repositories in the dossier navigation.",S,T;v?(M=v.response,S=v.jumpTarget,T=v.jumpLabel):(f.includes("hi")||f.includes("hello")||f.includes("hey")||f.includes("namaste"))&&(M="Hello! I am ready to brief you on Atlee's technical journey, verified project metrics, research lab, or future autonomous intelligence roadmap. What would you like to inspect?");const A={id:`bot-${Date.now()}`,sender:"bot",text:M,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),jumpTarget:S,jumpLabel:T};o(N=>[...N,A]),u(!1),Re.playClick(600)},700)},p=g=>{if(!g)return;Re.playClick();const b=document.querySelector(g);b&&b.scrollIntoView({behavior:"smooth"})};return l.jsxs(l.Fragment,{children:[!t&&l.jsx("div",{className:"fixed bottom-6 right-6 z-40 animate-fade-in",children:l.jsxs("button",{onClick:()=>{Re.playTelemetry(),e(!0),i(!1)},onMouseEnter:()=>Re.playHover(),className:"group relative flex items-center gap-3 px-4 py-3 bg-[#080c14] border border-cyan-500/60 hover:border-cyan-400 rounded-full shadow-2xl shadow-cyan-950/80 text-white font-mono text-xs cursor-pointer transition-all hover:scale-105","data-cursor":"AI BOT",children:[l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-300",children:l.jsx(ux,{className:"w-4 h-4"})}),l.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5 border-2 border-[#080c14] animate-pulse"})]}),l.jsxs("div",{className:"text-left hidden sm:block",children:[l.jsxs("div",{className:"text-[11px] font-bold text-cyan-300 group-hover:text-white transition-colors flex items-center gap-1.5",children:[l.jsx("span",{children:"C-07 AI ASSISTANT"}),l.jsx(AA,{className:"w-3 h-3 text-cyan-400"})]}),l.jsx("div",{className:"text-[9px] text-slate-400",children:"Ask anything about Atlee"})]})]})}),t&&l.jsxs("div",{className:`fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] bg-[#070a12] border border-cyan-500/50 rounded-2xl shadow-2xl shadow-cyan-950/80 font-mono flex flex-col overflow-hidden transition-all duration-300 ${n?"h-[64px]":"h-[560px] max-h-[85vh]"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800 shrink-0",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-400/80 flex items-center justify-center text-cyan-300",children:l.jsx(ux,{className:"w-4 h-4"})}),l.jsxs("div",{children:[l.jsxs("div",{className:"text-xs font-bold text-white flex items-center gap-1.5",children:[l.jsx("span",{children:"C-07 DOSSIER AGENT"}),l.jsx("span",{className:"text-[9px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30",children:"ONLINE"})]}),l.jsx("div",{className:"text-[9px] text-slate-400",children:"CHARACTER-07 KNOWLEDGE CORE"})]})]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("button",{onClick:()=>i(!n),className:"p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors",title:n?"Maximize":"Minimize",children:n?l.jsx(_A,{className:"w-3.5 h-3.5"}):l.jsx(SA,{className:"w-3.5 h-3.5"})}),l.jsx("button",{onClick:()=>{Re.playClick(),e(!1)},className:"p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors",title:"Close",children:l.jsx(md,{className:"w-4 h-4"})})]})]}),!n&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-[#070a12] to-[#04060a] text-xs font-sans",children:[r.map(g=>l.jsxs("div",{className:`flex flex-col ${g.sender==="user"?"items-end":"items-start"}`,children:[l.jsx("div",{className:"flex items-center gap-1 text-[10px] text-slate-500 font-mono mb-1",children:g.sender==="user"?l.jsxs(l.Fragment,{children:[l.jsx("span",{children:"VISITOR"}),l.jsx("span",{children:"•"}),l.jsx("span",{children:g.timestamp})]}):l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"text-cyan-400 font-bold",children:"C-07 AGENT"}),l.jsx("span",{children:"•"}),l.jsx("span",{children:g.timestamp})]})}),l.jsxs("div",{className:`p-3.5 rounded-2xl max-w-[90%] leading-relaxed ${g.sender==="user"?"bg-cyan-950/40 text-slate-100 border border-cyan-500/40 rounded-tr-none":"bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-none font-sans whitespace-pre-line shadow-md"}`,children:[g.text,g.jumpTarget&&l.jsx("div",{className:"mt-3 pt-2 border-t border-slate-800 flex justify-end",children:l.jsxs("button",{onClick:()=>p(g.jumpTarget),className:"inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 hover:text-white bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/50 px-2.5 py-1 rounded cursor-pointer transition-all",children:[l.jsxs("span",{children:["[",g.jumpLabel||"JUMP TO SECTION","]"]}),l.jsx(pd,{className:"w-3 h-3 text-cyan-400"})]})})]})]},g.id)),c&&l.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-mono text-xs",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-bounce"}),l.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"}),l.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"}),l.jsx("span",{className:"text-slate-500 text-[10px] ml-1",children:"RETRIEVING DOSSIER EMBEDDINGS..."})]}),l.jsx("div",{ref:h})]}),l.jsx("div",{className:"p-2 border-t border-slate-800/80 bg-slate-950/60 overflow-x-auto flex gap-1.5 no-scrollbar",children:m.map(g=>l.jsx("button",{onClick:()=>d(g),className:"whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-900 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-[10px] font-mono text-slate-400 hover:text-cyan-300 transition-all shrink-0 cursor-pointer",children:g},g))}),l.jsxs("form",{onSubmit:g=>{g.preventDefault(),d()},className:"p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2 font-mono",children:[l.jsx("input",{type:"text",value:a,onChange:g=>s(g.target.value),placeholder:"Ask about Atlee, LiDAR, abilities, contact...",className:"flex-1 bg-slate-900/80 border border-slate-800 focus:border-cyan-500/60 rounded-lg px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 outline-none"}),l.jsx("button",{type:"submit",disabled:!a.trim(),className:"p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 disabled:opacity-30 border border-cyan-500/50 text-cyan-300 transition-all cursor-pointer",children:l.jsx(TA,{className:"w-4 h-4"})})]})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qm="186",PA=0,px=1,zA=2,eu=1,BA=2,Fo=3,Gs=0,zn=1,oa=2,fa=0,nl=1,Pu=2,mx=3,gx=4,FA=5,vr=100,HA=101,GA=102,VA=103,kA=104,jA=200,XA=201,WA=202,YA=203,Tb=204,Ab=205,qA=206,ZA=207,KA=208,QA=209,JA=210,$A=211,eN=212,tN=213,nN=214,$h=0,ep=1,tp=2,_l=3,np=4,ip=5,ap=6,sp=7,Nb=0,iN=1,aN=2,Wi=0,Rb=1,Cb=2,wb=3,Db=4,Lb=5,Ub=6,Ob=7,Ib=300,Vs=301,ao=302,rf=303,of=304,gd=306,rp=1e3,ca=1001,op=1002,un=1003,sN=1004,rc=1005,vn=1006,lf=1007,Ts=1008,di=1009,Pb=1010,zb=1011,yl=1012,Zm=1013,qi=1014,Vi=1015,Zi=1016,Km=1017,Qm=1018,Sl=1020,Bb=35902,Fb=35899,Hb=1021,Gb=1022,Ei=1023,ya=1026,As=1027,Vb=1028,Jm=1029,ks=1030,$m=1031,e0=1033,tu=33776,nu=33777,iu=33778,au=33779,lp=35840,cp=35841,up=35842,dp=35843,fp=36196,hp=37492,pp=37496,mp=37488,gp=37489,zu=37490,xp=37491,vp=37808,_p=37809,yp=37810,Sp=37811,bp=37812,Ep=37813,Mp=37814,Tp=37815,Ap=37816,Np=37817,Rp=37818,Cp=37819,wp=37820,Dp=37821,Lp=36492,Up=36494,Op=36495,Ip=36283,Pp=36284,Bu=36285,zp=36286,rN=3200,xx=0,oN=1,Ga="",ai="srgb",Fu="srgb-linear",Hu="linear",_t="srgb",cf=7680,lN=519,cN=512,uN=513,dN=514,t0=515,fN=516,hN=517,n0=518,pN=519,mN=35044,vx="300 es",ki=2e3,Gu=2001;function gN(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function xN(){const t=Vu("canvas");return t.style.display="block",t}const _x={};function yx(...t){const e="THREE."+t.shift();console.log(e,...t)}function kb(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=kb(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ut(...t){t=kb(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Vr(...t){const e=t.join(" ");e in _x||(_x[e]=!0,ze(...t))}function vN(t,e,n){return new Promise(function(i,a){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const _N={[$h]:ep,[tp]:ap,[np]:sp,[_l]:ip,[ep]:$h,[ap]:tp,[sp]:np,[ip]:_l};class Ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uf=Math.PI/180,Bp=180/Math.PI;function Il(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[t&255]+gn[t>>8&255]+gn[t>>16&255]+gn[t>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function rt(t,e,n){return Math.max(e,Math.min(n,t))}function yN(t,e){return(t%e+e)%e}function df(t,e,n){return(1-n)*t+n*e}function To(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const o0=class o0{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};o0.prototype.isVector2=!0;let pt=o0;class go{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,s,r,o){let c=i[a+0],u=i[a+1],h=i[a+2],m=i[a+3],d=s[r+0],p=s[r+1],g=s[r+2],b=s[r+3];if(m!==b||c!==d||u!==p||h!==g){let x=c*d+u*p+h*g+m*b;x<0&&(d=-d,p=-p,g=-g,b=-b,x=-x);let f=1-o;if(x<.9995){const v=Math.acos(x),M=Math.sin(v);f=Math.sin(f*v)/M,o=Math.sin(o*v)/M,c=c*f+d*o,u=u*f+p*o,h=h*f+g*o,m=m*f+b*o}else{c=c*f+d*o,u=u*f+p*o,h=h*f+g*o,m=m*f+b*o;const v=1/Math.sqrt(c*c+u*u+h*h+m*m);c*=v,u*=v,h*=v,m*=v}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,a,s,r){const o=i[a],c=i[a+1],u=i[a+2],h=i[a+3],m=s[r],d=s[r+1],p=s[r+2],g=s[r+3];return e[n]=o*g+h*m+c*p-u*d,e[n+1]=c*g+h*d+u*m-o*p,e[n+2]=u*g+h*p+o*d-c*m,e[n+3]=h*g-o*m-c*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,u=o(i/2),h=o(a/2),m=o(s/2),d=c(i/2),p=c(a/2),g=c(s/2);switch(r){case"XYZ":this._x=d*h*m+u*p*g,this._y=u*p*m-d*h*g,this._z=u*h*g+d*p*m,this._w=u*h*m-d*p*g;break;case"YXZ":this._x=d*h*m+u*p*g,this._y=u*p*m-d*h*g,this._z=u*h*g-d*p*m,this._w=u*h*m+d*p*g;break;case"ZXY":this._x=d*h*m-u*p*g,this._y=u*p*m+d*h*g,this._z=u*h*g+d*p*m,this._w=u*h*m-d*p*g;break;case"ZYX":this._x=d*h*m-u*p*g,this._y=u*p*m+d*h*g,this._z=u*h*g-d*p*m,this._w=u*h*m+d*p*g;break;case"YZX":this._x=d*h*m+u*p*g,this._y=u*p*m+d*h*g,this._z=u*h*g-d*p*m,this._w=u*h*m-d*p*g;break;case"XZY":this._x=d*h*m-u*p*g,this._y=u*p*m-d*h*g,this._z=u*h*g+d*p*m,this._w=u*h*m+d*p*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],c=n[9],u=n[2],h=n[6],m=n[10],d=i+o+m;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-u)*p,this._z=(r-a)*p}else if(i>o&&i>m){const p=2*Math.sqrt(1+i-o-m);this._w=(h-c)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+u)/p}else if(o>m){const p=2*Math.sqrt(1+o-i-m);this._w=(s-u)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+m-i-o);this._w=(r-a)/p,this._x=(s+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,s=e._z,r=e._w,o=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+r*o+a*u-s*c,this._y=a*h+r*c+s*o-i*u,this._z=s*h+r*u+i*c-a*o,this._w=r*h-i*o-a*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let c=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,n=Math.sin(n*u)/h,this._x=this._x*c+i*n,this._y=this._y*c+a*n,this._z=this._z*c+s*n,this._w=this._w*c+r*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+a*n,this._z=this._z*c+s*n,this._w=this._w*c+r*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const l0=class l0{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,c=e.w,u=2*(r*a-o*i),h=2*(o*n-s*a),m=2*(s*i-r*n);return this.x=n+c*u+r*m-o*h,this.y=i+c*h+o*u-s*m,this.z=a+c*m+s*h-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,s=e.z,r=n.x,o=n.y,c=n.z;return this.x=a*c-s*o,this.y=s*r-i*c,this.z=i*o-a*r,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ff.copy(this).projectOnVector(e),this.sub(ff)}reflect(e){return this.sub(ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l0.prototype.isVector3=!0;let j=l0;const ff=new j,Sx=new go,c0=class c0{constructor(e,n,i,a,s,r,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,c,u)}set(e,n,i,a,s,r,o,c,u){const h=this.elements;return h[0]=e,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=r,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],c=i[6],u=i[1],h=i[4],m=i[7],d=i[2],p=i[5],g=i[8],b=a[0],x=a[3],f=a[6],v=a[1],M=a[4],S=a[7],T=a[2],A=a[5],N=a[8];return s[0]=r*b+o*v+c*T,s[3]=r*x+o*M+c*A,s[6]=r*f+o*S+c*N,s[1]=u*b+h*v+m*T,s[4]=u*x+h*M+m*A,s[7]=u*f+h*S+m*N,s[2]=d*b+p*v+g*T,s[5]=d*x+p*M+g*A,s[8]=d*f+p*S+g*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return n*r*h-n*o*u-i*s*h+i*o*c+a*s*u-a*r*c}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],u=e[7],h=e[8],m=h*r-o*u,d=o*c-h*s,p=u*s-r*c,g=n*m+i*d+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=m*b,e[1]=(a*u-h*i)*b,e[2]=(o*i-a*r)*b,e[3]=d*b,e[4]=(h*n-a*c)*b,e[5]=(a*s-o*n)*b,e[6]=p*b,e[7]=(i*c-u*n)*b,e[8]=(r*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,s,r,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*r+u*o)+r+e,-a*u,a*c,-a*(-u*r+c*o)+o+n,0,0,1),this}scale(e,n){return Vr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hf.makeScale(e,n)),this}rotate(e){return Vr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hf.makeRotation(-e)),this}translate(e,n){return Vr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};c0.prototype.isMatrix3=!0;let je=c0;const hf=new je,bx=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ex=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SN(){const t={enabled:!0,workingColorSpace:Fu,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===_t&&(a.r=ha(a.r),a.g=ha(a.g),a.b=ha(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===_t&&(a.r=kr(a.r),a.g=kr(a.g),a.b=kr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ga?Hu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Fu]:{primaries:e,whitePoint:i,transfer:Hu,toXYZ:bx,fromXYZ:Ex,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:bx,fromXYZ:Ex,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),t}const st=SN();function ha(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function kr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let tr;class bN{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{tr===void 0&&(tr=Vu("canvas")),tr.width=e.width,tr.height=e.height;const a=tr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=tr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ha(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ha(n[i]/255)*255):n[i]=ha(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let EN=0;class i0{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:EN++}),this.uuid=Il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(pf(a[r].image)):s.push(pf(a[r]))}else s=pf(a);i.url=s}return n||(e.images[this.uuid]=i),i}}function pf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bN.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let MN=0;const mf=new j;class yn extends Ks{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=ca,a=ca,s=vn,r=Ts,o=Ei,c=di,u=yn.DEFAULT_ANISOTROPY,h=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MN++}),this.uuid=Il(),this.name="",this.source=new i0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mf).x}get height(){return this.source.getSize(mf).y}get depth(){return this.source.getSize(mf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ib)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rp:e.x=e.x-Math.floor(e.x);break;case ca:e.x=e.x<0?0:1;break;case op:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rp:e.y=e.y-Math.floor(e.y);break;case ca:e.y=e.y<0?0:1;break;case op:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Ib;yn.DEFAULT_ANISOTROPY=1;const u0=class u0{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,s;const c=e.elements,u=c[0],h=c[4],m=c[8],d=c[1],p=c[5],g=c[9],b=c[2],x=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(m-b)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(m+b)<.1&&Math.abs(g+x)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,S=(p+1)/2,T=(f+1)/2,A=(h+d)/4,N=(m+b)/4,y=(g+x)/4;return M>S&&M>T?M<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(M),a=A/i,s=N/i):S>T?S<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(S),i=A/a,s=y/a):T<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(T),i=N/s,a=y/s),this.set(i,a,s,n),this}let v=Math.sqrt((x-g)*(x-g)+(m-b)*(m-b)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(x-g)/v,this.y=(m-b)/v,this.z=(d-h)/v,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this.w=rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this.w=rt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};u0.prototype.isVector4=!0;let Ht=u0;class TN extends Ks{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:i.depth},s=new yn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new i0(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends TN{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class jb extends yn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=un,this.minFilter=un,this.wrapR=ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AN extends yn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=un,this.minFilter=un,this.wrapR=ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Xu=class Xu{constructor(e,n,i,a,s,r,o,c,u,h,m,d,p,g,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,c,u,h,m,d,p,g,b,x)}set(e,n,i,a,s,r,o,c,u,h,m,d,p,g,b,x){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=c,f[2]=u,f[6]=h,f[10]=m,f[14]=d,f[3]=p,f[7]=g,f[11]=b,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,a=1/nr.setFromMatrixColumn(e,0).length(),s=1/nr.setFromMatrixColumn(e,1).length(),r=1/nr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),c=Math.cos(a),u=Math.sin(a),h=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const d=r*h,p=r*m,g=o*h,b=o*m;n[0]=c*h,n[4]=-c*m,n[8]=u,n[1]=p+g*u,n[5]=d-b*u,n[9]=-o*c,n[2]=b-d*u,n[6]=g+p*u,n[10]=r*c}else if(e.order==="YXZ"){const d=c*h,p=c*m,g=u*h,b=u*m;n[0]=d+b*o,n[4]=g*o-p,n[8]=r*u,n[1]=r*m,n[5]=r*h,n[9]=-o,n[2]=p*o-g,n[6]=b+d*o,n[10]=r*c}else if(e.order==="ZXY"){const d=c*h,p=c*m,g=u*h,b=u*m;n[0]=d-b*o,n[4]=-r*m,n[8]=g+p*o,n[1]=p+g*o,n[5]=r*h,n[9]=b-d*o,n[2]=-r*u,n[6]=o,n[10]=r*c}else if(e.order==="ZYX"){const d=r*h,p=r*m,g=o*h,b=o*m;n[0]=c*h,n[4]=g*u-p,n[8]=d*u+b,n[1]=c*m,n[5]=b*u+d,n[9]=p*u-g,n[2]=-u,n[6]=o*c,n[10]=r*c}else if(e.order==="YZX"){const d=r*c,p=r*u,g=o*c,b=o*u;n[0]=c*h,n[4]=b-d*m,n[8]=g*m+p,n[1]=m,n[5]=r*h,n[9]=-o*h,n[2]=-u*h,n[6]=p*m+g,n[10]=d-b*m}else if(e.order==="XZY"){const d=r*c,p=r*u,g=o*c,b=o*u;n[0]=c*h,n[4]=-m,n[8]=u*h,n[1]=d*m+b,n[5]=r*h,n[9]=p*m-g,n[2]=g*m-p,n[6]=o*h,n[10]=b*m+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NN,e,RN)}lookAt(e,n,i){const a=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),wa.crossVectors(i,Hn),wa.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),wa.crossVectors(i,Hn)),wa.normalize(),oc.crossVectors(Hn,wa),a[0]=wa.x,a[4]=oc.x,a[8]=Hn.x,a[1]=wa.y,a[5]=oc.y,a[9]=Hn.y,a[2]=wa.z,a[6]=oc.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],c=i[8],u=i[12],h=i[1],m=i[5],d=i[9],p=i[13],g=i[2],b=i[6],x=i[10],f=i[14],v=i[3],M=i[7],S=i[11],T=i[15],A=a[0],N=a[4],y=a[8],R=a[12],w=a[1],O=a[5],F=a[9],W=a[13],z=a[2],k=a[6],I=a[10],P=a[14],q=a[3],V=a[7],Z=a[11],ne=a[15];return s[0]=r*A+o*w+c*z+u*q,s[4]=r*N+o*O+c*k+u*V,s[8]=r*y+o*F+c*I+u*Z,s[12]=r*R+o*W+c*P+u*ne,s[1]=h*A+m*w+d*z+p*q,s[5]=h*N+m*O+d*k+p*V,s[9]=h*y+m*F+d*I+p*Z,s[13]=h*R+m*W+d*P+p*ne,s[2]=g*A+b*w+x*z+f*q,s[6]=g*N+b*O+x*k+f*V,s[10]=g*y+b*F+x*I+f*Z,s[14]=g*R+b*W+x*P+f*ne,s[3]=v*A+M*w+S*z+T*q,s[7]=v*N+M*O+S*k+T*V,s[11]=v*y+M*F+S*I+T*Z,s[15]=v*R+M*W+S*P+T*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],c=e[9],u=e[13],h=e[2],m=e[6],d=e[10],p=e[14],g=e[3],b=e[7],x=e[11],f=e[15],v=c*p-u*d,M=o*p-u*m,S=o*d-c*m,T=r*p-u*h,A=r*d-c*h,N=r*m-o*h;return n*(b*v-x*M+f*S)-i*(g*v-x*T+f*A)+a*(g*M-b*T+f*N)-s*(g*S-b*A+x*N)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[1],r=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return n*(r*h-o*u)-i*(s*h-o*c)+a*(s*u-r*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],u=e[7],h=e[8],m=e[9],d=e[10],p=e[11],g=e[12],b=e[13],x=e[14],f=e[15],v=n*o-i*r,M=n*c-a*r,S=n*u-s*r,T=i*c-a*o,A=i*u-s*o,N=a*u-s*c,y=h*b-m*g,R=h*x-d*g,w=h*f-p*g,O=m*x-d*b,F=m*f-p*b,W=d*f-p*x,z=v*W-M*F+S*O+T*w-A*R+N*y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/z;return e[0]=(o*W-c*F+u*O)*k,e[1]=(a*F-i*W-s*O)*k,e[2]=(b*N-x*A+f*T)*k,e[3]=(d*A-m*N-p*T)*k,e[4]=(c*w-r*W-u*R)*k,e[5]=(n*W-a*w+s*R)*k,e[6]=(x*S-g*N-f*M)*k,e[7]=(h*N-d*S+p*M)*k,e[8]=(r*F-o*w+u*y)*k,e[9]=(i*w-n*F-s*y)*k,e[10]=(g*A-b*S+f*v)*k,e[11]=(m*S-h*A-p*v)*k,e[12]=(o*R-r*O-c*y)*k,e[13]=(n*O-i*R+a*y)*k,e[14]=(b*M-g*T-x*v)*k,e[15]=(h*T-m*M+d*v)*k,this}scale(e){const n=this.elements,i=e.x,a=e.y,s=e.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=e.x,o=e.y,c=e.z,u=s*r,h=s*o;return this.set(u*r+i,u*o-a*c,u*c+a*o,0,u*o+a*c,h*o+i,h*c-a*r,0,u*c-a*o,h*c+a*r,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,c=n._w,u=s+s,h=r+r,m=o+o,d=s*u,p=s*h,g=s*m,b=r*h,x=r*m,f=o*m,v=c*u,M=c*h,S=c*m,T=i.x,A=i.y,N=i.z;return a[0]=(1-(b+f))*T,a[1]=(p+S)*T,a[2]=(g-M)*T,a[3]=0,a[4]=(p-S)*A,a[5]=(1-(d+f))*A,a[6]=(x+v)*A,a[7]=0,a[8]=(g+M)*N,a[9]=(x-v)*N,a[10]=(1-(d+b))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=nr.set(a[0],a[1],a[2]).length();const o=nr.set(a[4],a[5],a[6]).length(),c=nr.set(a[8],a[9],a[10]).length();s<0&&(r=-r),gi.copy(this);const u=1/r,h=1/o,m=1/c;return gi.elements[0]*=u,gi.elements[1]*=u,gi.elements[2]*=u,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=m,gi.elements[9]*=m,gi.elements[10]*=m,n.setFromRotationMatrix(gi),i.x=r,i.y=o,i.z=c,this}makePerspective(e,n,i,a,s,r,o=ki,c=!1){const u=this.elements,h=2*s/(n-e),m=2*s/(i-a),d=(n+e)/(n-e),p=(i+a)/(i-a);let g,b;if(c)g=s/(r-s),b=r*s/(r-s);else if(o===ki)g=-(r+s)/(r-s),b=-2*r*s/(r-s);else if(o===Gu)g=-r/(r-s),b=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=m,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,a,s,r,o=ki,c=!1){const u=this.elements,h=2/(n-e),m=2/(i-a),d=-(n+e)/(n-e),p=-(i+a)/(i-a);let g,b;if(c)g=1/(r-s),b=r/(r-s);else if(o===ki)g=-2/(r-s),b=-(r+s)/(r-s);else if(o===Gu)g=-1/(r-s),b=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=m,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Xu.prototype.isMatrix4=!0;let Gt=Xu;const nr=new j,gi=new Gt,NN=new j(0,0,0),RN=new j(1,1,1),wa=new j,oc=new j,Hn=new j,Mx=new Gt,Tx=new go;class js{constructor(e=0,n=0,i=0,a=js.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],c=a[1],u=a[5],h=a[9],m=a[2],d=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mx,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tx.setFromEuler(this),this.setFromQuaternion(Tx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}js.DEFAULT_ORDER="XYZ";class Xb{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CN=0;const Ax=new j,ir=new go,ta=new Gt,lc=new j,Ao=new j,wN=new j,DN=new go,Nx=new j(1,0,0),Rx=new j(0,1,0),Cx=new j(0,0,1),wx={type:"added"},LN={type:"removed"},ar={type:"childadded",child:null},gf={type:"childremoved",child:null};class Rn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CN++}),this.uuid=Il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new j,n=new js,i=new go,a=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new je}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ir.setFromAxisAngle(e,n),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,n){return ir.setFromAxisAngle(e,n),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(Nx,e)}rotateY(e){return this.rotateOnAxis(Rx,e)}rotateZ(e){return this.rotateOnAxis(Cx,e)}translateOnAxis(e,n){return Ax.copy(e).applyQuaternion(this.quaternion),this.position.add(Ax.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nx,e)}translateY(e){return this.translateOnAxis(Rx,e)}translateZ(e){return this.translateOnAxis(Cx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?lc.copy(e):lc.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Ao,lc,this.up):ta.lookAt(lc,Ao,this.up),this.quaternion.setFromRotationMatrix(ta),a&&(ta.extractRotation(a.matrixWorld),ir.setFromRotationMatrix(ta),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wx),ar.child=e,this.dispatchEvent(ar),ar.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(LN),gf.child=e,this.dispatchEvent(gf),gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wx),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,wN),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,DN,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const m=c[u];s(e.shapes,m)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(s(e.animations,c))}}if(n){const o=r(e.geometries),c=r(e.materials),u=r(e.textures),h=r(e.images),m=r(e.shapes),d=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=a,i;function r(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rn.DEFAULT_UP=new j(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cc extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UN={type:"move"};class xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,s=null,r=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){r=!0;for(const b of e.hand.values()){const x=n.getJointPose(b,i),f=this._getHandJoint(u,b);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const h=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],d=h.position.distanceTo(m.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(UN)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new cc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Wb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},uc={h:0,s:0,l:0};function vf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=st.workingColorSpace){if(e=yN(e,1),n=rt(n,0,1),i=rt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=vf(r,s,e+1/3),this.g=vf(r,s,e),this.b=vf(r,s,e-1/3)}return st.colorSpaceToWorking(this,a),this}setStyle(e,n=ai){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ai){const i=Wb[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return st.workingToColorSpace(xn.copy(this),e),Math.round(rt(xn.r*255,0,255))*65536+Math.round(rt(xn.g*255,0,255))*256+Math.round(rt(xn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(xn.copy(this),n);const i=xn.r,a=xn.g,s=xn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let c,u;const h=(o+r)/2;if(o===r)c=0,u=0;else{const m=r-o;switch(u=h<=.5?m/(r+o):m/(2-r-o),r){case i:c=(a-s)/m+(a<s?6:0);break;case a:c=(s-i)/m+2;break;case s:c=(i-a)/m+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ai){st.workingToColorSpace(xn.copy(this),e);const n=xn.r,i=xn.g,a=xn.b;return e!==ai?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(Da),this.setHSL(Da.h+e,Da.s+n,Da.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Da),e.getHSL(uc);const i=df(Da.h,uc.h,n),a=df(Da.s,uc.s,n),s=df(Da.l,uc.l,n);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new it;it.NAMES=Wb;class a0{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(e),this.density=n}clone(){return new a0(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ON extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new js,this.environmentIntensity=1,this.environmentRotation=new js,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const xi=new j,na=new j,_f=new j,ia=new j,sr=new j,rr=new j,Dx=new j,yf=new j,Sf=new j,bf=new j,Ef=new Ht,Mf=new Ht,Tf=new Ht;class Si{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),xi.subVectors(e,n),a.cross(xi);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,n,i,a,s){xi.subVectors(a,n),na.subVectors(i,n),_f.subVectors(e,n);const r=xi.dot(xi),o=xi.dot(na),c=xi.dot(_f),u=na.dot(na),h=na.dot(_f),m=r*u-o*o;if(m===0)return s.set(0,0,0),null;const d=1/m,p=(u*c-o*h)*d,g=(r*h-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,n,i,a,s,r,o,c){return this.getBarycoord(e,n,i,a,ia)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ia.x),c.addScaledVector(r,ia.y),c.addScaledVector(o,ia.z),c)}static getInterpolatedAttribute(e,n,i,a,s,r){return Ef.setScalar(0),Mf.setScalar(0),Tf.setScalar(0),Ef.fromBufferAttribute(e,n),Mf.fromBufferAttribute(e,i),Tf.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(Ef,s.x),r.addScaledVector(Mf,s.y),r.addScaledVector(Tf,s.z),r}static isFrontFacing(e,n,i,a){return xi.subVectors(i,n),na.subVectors(e,n),xi.cross(na).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),xi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,s){return Si.getInterpolation(e,this.a,this.b,this.c,n,i,a,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,s=this.c;let r,o;sr.subVectors(a,i),rr.subVectors(s,i),yf.subVectors(e,i);const c=sr.dot(yf),u=rr.dot(yf);if(c<=0&&u<=0)return n.copy(i);Sf.subVectors(e,a);const h=sr.dot(Sf),m=rr.dot(Sf);if(h>=0&&m<=h)return n.copy(a);const d=c*m-h*u;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),n.copy(i).addScaledVector(sr,r);bf.subVectors(e,s);const p=sr.dot(bf),g=rr.dot(bf);if(g>=0&&p<=g)return n.copy(s);const b=p*u-c*g;if(b<=0&&u>=0&&g<=0)return o=u/(u-g),n.copy(i).addScaledVector(rr,o);const x=h*g-p*m;if(x<=0&&m-h>=0&&p-g>=0)return Dx.subVectors(s,a),o=(m-h)/(m-h+(p-g)),n.copy(a).addScaledVector(Dx,o);const f=1/(x+b+d);return r=b*f,o=d*f,n.copy(i).addScaledVector(sr,r).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pl{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,vi):vi.fromBufferAttribute(s,r),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dc.copy(i.boundingBox)),dc.applyMatrix4(e.matrixWorld),this.union(dc)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),fc.subVectors(this.max,No),or.subVectors(e.a,No),lr.subVectors(e.b,No),cr.subVectors(e.c,No),La.subVectors(lr,or),Ua.subVectors(cr,lr),ms.subVectors(or,cr);let n=[0,-La.z,La.y,0,-Ua.z,Ua.y,0,-ms.z,ms.y,La.z,0,-La.x,Ua.z,0,-Ua.x,ms.z,0,-ms.x,-La.y,La.x,0,-Ua.y,Ua.x,0,-ms.y,ms.x,0];return!Af(n,or,lr,cr,fc)||(n=[1,0,0,0,1,0,0,0,1],!Af(n,or,lr,cr,fc))?!1:(hc.crossVectors(La,Ua),n=[hc.x,hc.y,hc.z],Af(n,or,lr,cr,fc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(aa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const aa=[new j,new j,new j,new j,new j,new j,new j,new j],vi=new j,dc=new Pl,or=new j,lr=new j,cr=new j,La=new j,Ua=new j,ms=new j,No=new j,fc=new j,hc=new j,gs=new j;function Af(t,e,n,i,a){for(let s=0,r=t.length-3;s<=r;s+=3){gs.fromArray(t,s);const o=a.x*Math.abs(gs.x)+a.y*Math.abs(gs.y)+a.z*Math.abs(gs.z),c=e.dot(gs),u=n.dot(gs),h=i.dot(gs);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Xt=new j,pc=new pt;let IN=0;class In extends Ks{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IN++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mN,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)pc.fromBufferAttribute(this,n),pc.applyMatrix3(e),this.setXY(n,pc.x,pc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=To(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=To(n,this.array)),n}setX(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=To(n,this.array)),n}setY(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=To(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=To(n,this.array)),n}setW(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),a=wn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,s){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),a=wn(a,this.array),s=wn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Yb extends In{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class qb extends In{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ai extends In{constructor(e,n,i){super(new Float32Array(e),n,i)}}const PN=new Pl,Ro=new j,Nf=new j;class zl{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):PN.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Ro,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Nf)),this.expandByPoint(Ro.copy(e.center).sub(Nf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zN=0;const ni=new Gt,Rf=new Rn,ur=new j,Gn=new Pl,Co=new Pl,tn=new j;class Jn extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zN++}),this.uuid=Il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gN(e)?qb:Yb)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,n,i){return ni.makeTranslation(e,n,i),this.applyMatrix4(ni),this}scale(e,n,i){return ni.makeScale(e,n,i),this.applyMatrix4(ni),this}lookAt(e){return Rf.lookAt(e),Rf.updateMatrix(),this.applyMatrix4(Rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ai(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const s=e[a];n.setXYZ(a,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];Co.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Gn.min,Co.min),Gn.expandByPoint(tn),tn.addVectors(Gn.max,Co.max),Gn.expandByPoint(tn)):(Gn.expandByPoint(Co.min),Gn.expandByPoint(Co.max))}Gn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)tn.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(tn));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)tn.fromBufferAttribute(o,u),c&&(ur.fromBufferAttribute(e,u),tn.add(ur)),a=Math.max(a,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new In(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],c=[];for(let y=0;y<i.count;y++)o[y]=new j,c[y]=new j;const u=new j,h=new j,m=new j,d=new pt,p=new pt,g=new pt,b=new j,x=new j;function f(y,R,w){u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,R),m.fromBufferAttribute(i,w),d.fromBufferAttribute(s,y),p.fromBufferAttribute(s,R),g.fromBufferAttribute(s,w),h.sub(u),m.sub(u),p.sub(d),g.sub(d);const O=1/(p.x*g.y-g.x*p.y);isFinite(O)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(m,-p.y).multiplyScalar(O),x.copy(m).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(O),o[y].add(b),o[R].add(b),o[w].add(b),c[y].add(x),c[R].add(x),c[w].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,R=v.length;y<R;++y){const w=v[y],O=w.start,F=w.count;for(let W=O,z=O+F;W<z;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const M=new j,S=new j,T=new j,A=new j;function N(y){T.fromBufferAttribute(a,y),A.copy(T);const R=o[y];M.copy(R),M.sub(T.multiplyScalar(T.dot(R))).normalize(),S.crossVectors(A,R);const O=S.dot(c[y])<0?-1:1;r.setXYZW(y,M.x,M.y,M.z,O)}for(let y=0,R=v.length;y<R;++y){const w=v[y],O=w.start,F=w.count;for(let W=O,z=O+F;W<z;W+=3)N(e.getX(W+0)),N(e.getX(W+1)),N(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new In(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new j,s=new j,r=new j,o=new j,c=new j,u=new j,h=new j,m=new j;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),b=e.getX(d+1),x=e.getX(d+2);a.fromBufferAttribute(n,g),s.fromBufferAttribute(n,b),r.fromBufferAttribute(n,x),h.subVectors(r,s),m.subVectors(a,s),h.cross(m),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,x),o.add(h),c.add(h),u.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)a.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),r.fromBufferAttribute(n,d+2),h.subVectors(r,s),m.subVectors(a,s),h.cross(m),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,m=o.normalized,d=new u.constructor(c.length*h);let p=0,g=0;for(let b=0,x=c.length;b<x;b++){o.isInterleavedBufferAttribute?p=c[b]*o.data.stride+o.offset:p=c[b]*h;for(let f=0;f<h;f++)d[g++]=u[p++]}return new In(d,h,m)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,i=this.index.array,a=this.attributes;for(const o in a){const c=a[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,m=u.length;h<m;h++){const d=u[h],p=e(d,i);c.push(p)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const u=r[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const a={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let m=0,d=u.length;m<d;m++){const p=u[m];h.push(p.toJSON(e.data))}h.length>0&&(a[c]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const u in a){const h=a[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],m=s[u];for(let d=0,p=m.length;d<p;d++)h.push(m[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let u=0,h=r.length;u<h;u++){const m=r[u];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cf=new j,BN=new j,FN=new je;class Fa{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Cf.subVectors(i,n).cross(BN.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(Cf),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||FN.getNormalMatrix(e),a=this.coplanarPoint(Cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let HN=0;class xo extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HN++}),this.uuid=Il(),this.name="",this.type="Material",this.blending=nl,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tb,this.blendDst=Ab,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=_l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lN,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cf,this.stencilZFail=cf,this.stencilZPass=cf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(n){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Fa().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const sa=new j,wf=new j,mc=new j,gc=new j;class s0{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=sa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sa.copy(this.origin).addScaledVector(this.direction,n),sa.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){wf.copy(e).add(n).multiplyScalar(.5),mc.copy(n).sub(e).normalize(),gc.copy(this.origin).sub(wf);const s=e.distanceTo(n)*.5,r=-this.direction.dot(mc),o=gc.dot(this.direction),c=-gc.dot(mc),u=gc.lengthSq(),h=Math.abs(1-r*r);let m,d,p,g;if(h>0)if(m=r*c-o,d=r*o-c,g=s*h,m>=0)if(d>=-g)if(d<=g){const b=1/h;m*=b,d*=b,p=m*(m+r*d+2*o)+d*(r*m+d+2*c)+u}else d=s,m=Math.max(0,-(r*d+o)),p=-m*m+d*(d+2*c)+u;else d=-s,m=Math.max(0,-(r*d+o)),p=-m*m+d*(d+2*c)+u;else d<=-g?(m=Math.max(0,-(-r*s+o)),d=m>0?-s:Math.min(Math.max(-s,-c),s),p=-m*m+d*(d+2*c)+u):d<=g?(m=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+u):(m=Math.max(0,-(r*s+o)),d=m>0?s:Math.min(Math.max(-s,-c),s),p=-m*m+d*(d+2*c)+u);else d=r>0?-s:s,m=Math.max(0,-(r*d+o)),p=-m*m+d*(d+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(wf).addScaledVector(mc,d),p}intersectSphere(e,n){if(e.radius<0)return null;sa.subVectors(e.center,this.origin);const i=sa.dot(this.direction),a=sa.dot(sa)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,c=i+r;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,s,r,o,c;const u=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,a=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,a=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),m>=0?(o=(e.min.z-d.z)*m,c=(e.max.z-d.z)*m):(o=(e.max.z-d.z)*m,c=(e.min.z-d.z)*m),i>c||o>a)||((o>i||i!==i)&&(i=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,sa)!==null}intersectTriangle(e,n,i,a,s){const r=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,m=e.x-r.x,d=e.y-r.y,p=e.z-r.z,g=n.x-r.x,b=n.y-r.y,x=n.z-r.z,f=i.x-r.x,v=i.y-r.y,M=i.z-r.z,S=Math.abs(c),T=Math.abs(u),A=Math.abs(h);let N,y,R,w,O,F,W,z,k,I,P,q;if(S>=T&&S>=A?(R=c,F=m,k=g,q=f,c>=0?(N=u,y=h,w=d,O=p,W=b,z=x,I=v,P=M):(N=h,y=u,w=p,O=d,W=x,z=b,I=M,P=v)):T>=A?(R=u,F=d,k=b,q=v,u>=0?(N=h,y=c,w=p,O=m,W=x,z=g,I=M,P=f):(N=c,y=h,w=m,O=p,W=g,z=x,I=f,P=M)):(R=h,F=p,k=x,q=M,h>=0?(N=c,y=u,w=m,O=d,W=g,z=b,I=f,P=v):(N=u,y=c,w=d,O=m,W=b,z=g,I=v,P=f)),R===0)return null;const V=N/R,Z=y/R,ne=1/R,Te=w-V*F,be=O-Z*F,Ge=W-V*k,Xe=z-Z*k,ot=I-V*q,K=P-Z*q,ie=ot*Xe-K*Ge,ve=Te*K-be*ot,Fe=Ge*be-Xe*Te;if(a){if(ie<0||ve<0||Fe<0)return null}else if((ie<0||ve<0||Fe<0)&&(ie>0||ve>0||Fe>0))return null;const xe=ie+ve+Fe;if(xe===0)return null;const re=ne*(ie*F+ve*k+Fe*q);return(xe>0?re<0:re>0)?null:this.at(re/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zb extends xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new js,this.combine=Nb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lx=new Gt,xs=new s0,xc=new zl,Ux=new j,vc=new j,_c=new j,yc=new j,Df=new j,Sc=new j,Ox=new j,bc=new j;class Sa extends Rn{constructor(e=new Jn,n=new Zb){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){Sc.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],m=s[c];h!==0&&(Df.fromBufferAttribute(m,e),r?Sc.addScaledVector(Df,h):Sc.addScaledVector(Df.sub(n),h))}n.add(Sc)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xc.copy(i.boundingSphere),xc.applyMatrix4(s),xs.copy(e.ray).recast(e.near),!(xc.containsPoint(xs.origin)===!1&&(xs.intersectSphere(xc,Ux)===null||xs.origin.distanceToSquared(Ux)>(e.far-e.near)**2))&&(Lx.copy(s).invert(),xs.copy(e.ray).applyMatrix4(Lx),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xs)))}_computeIntersections(e,n,i){let a;const s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,b=d.length;g<b;g++){const x=d[g],f=r[x.materialIndex],v=Math.max(x.start,p.start),M=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let S=v,T=M;S<T;S+=3){const A=o.getX(S),N=o.getX(S+1),y=o.getX(S+2);a=Ec(this,f,e,i,u,h,m,A,N,y),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let x=g,f=b;x<f;x+=3){const v=o.getX(x),M=o.getX(x+1),S=o.getX(x+2);a=Ec(this,r,e,i,u,h,m,v,M,S),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,b=d.length;g<b;g++){const x=d[g],f=r[x.materialIndex],v=Math.max(x.start,p.start),M=Math.min(c.count,Math.min(x.start+x.count,p.start+p.count));for(let S=v,T=M;S<T;S+=3){const A=S,N=S+1,y=S+2;a=Ec(this,f,e,i,u,h,m,A,N,y),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const g=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let x=g,f=b;x<f;x+=3){const v=x,M=x+1,S=x+2;a=Ec(this,r,e,i,u,h,m,v,M,S),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}}function GN(t,e,n,i,a,s,r,o){let c;if(e.side===zn?c=i.intersectTriangle(r,s,a,!0,o):c=i.intersectTriangle(a,s,r,e.side===Gs,o),c===null)return null;bc.copy(o),bc.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(bc);return u<n.near||u>n.far?null:{distance:u,point:bc.clone(),object:t}}function Ec(t,e,n,i,a,s,r,o,c,u){t.getVertexPosition(o,vc),t.getVertexPosition(c,_c),t.getVertexPosition(u,yc);const h=GN(t,e,n,i,vc,_c,yc,Ox);if(h){const m=new j;Si.getBarycoord(Ox,vc,_c,yc,m),a&&(h.uv=Si.getInterpolatedAttribute(a,o,c,u,m,new pt)),s&&(h.uv1=Si.getInterpolatedAttribute(s,o,c,u,m,new pt)),r&&(h.normal=Si.getInterpolatedAttribute(r,o,c,u,m,new j),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new j,materialIndex:0};Si.getNormal(vc,_c,yc,d.normal),h.face=d,h.barycoord=m}return h}class VN extends yn{constructor(e=null,n=1,i=1,a,s,r,o,c,u=un,h=un,m,d){super(null,r,o,c,u,h,a,s,m,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vs=new zl,kN=new pt(.5,.5),Mc=new j;class Kb{constructor(e=new Fa,n=new Fa,i=new Fa,a=new Fa,s=new Fa,r=new Fa){this.planes=[e,n,i,a,s,r]}set(e,n,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ki,i=!1){const a=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],u=s[3],h=s[4],m=s[5],d=s[6],p=s[7],g=s[8],b=s[9],x=s[10],f=s[11],v=s[12],M=s[13],S=s[14],T=s[15];if(a[0].setComponents(u-r,p-h,f-g,T-v).normalize(),a[1].setComponents(u+r,p+h,f+g,T+v).normalize(),a[2].setComponents(u+o,p+m,f+b,T+M).normalize(),a[3].setComponents(u-o,p-m,f-b,T-M).normalize(),i)a[4].setComponents(c,d,x,S).normalize(),a[5].setComponents(u-c,p-d,f-x,T-S).normalize();else if(a[4].setComponents(u-c,p-d,f-x,T-S).normalize(),n===ki)a[5].setComponents(u+c,p+d,f+x,T+S).normalize();else if(n===Gu)a[5].setComponents(c,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const n=kN.distanceTo(e.center);return vs.radius=.7071067811865476+n,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Mc.x=a.normal.x>0?e.max.x:e.min.x,Mc.y=a.normal.y>0?e.max.y:e.min.y,Mc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qb extends xo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ku=new j,ju=new j,Ix=new Gt,wo=new s0,Tc=new zl,Lf=new j,Px=new j;class jN extends Rn{constructor(e=new Jn,n=new Qb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)ku.fromBufferAttribute(n,a-1),ju.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=ku.distanceTo(ju);e.setAttribute("lineDistance",new Ai(i,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(a),Tc.radius+=s,e.ray.intersectsSphere(Tc)===!1)return;Ix.copy(a).invert(),wo.copy(e.ray).applyMatrix4(Ix);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let b=p,x=g-1;b<x;b+=u){const f=h.getX(b),v=h.getX(b+1),M=Ac(this,e,wo,c,f,v,b);M&&n.push(M)}if(this.isLineLoop){const b=h.getX(g-1),x=h.getX(p),f=Ac(this,e,wo,c,b,x,g-1);f&&n.push(f)}}else{const p=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let b=p,x=g-1;b<x;b+=u){const f=Ac(this,e,wo,c,b,b+1,b);f&&n.push(f)}if(this.isLineLoop){const b=Ac(this,e,wo,c,g-1,p,g-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ac(t,e,n,i,a,s,r){const o=t.geometry.attributes.position;if(ku.fromBufferAttribute(o,a),ju.fromBufferAttribute(o,s),n.distanceSqToSegment(ku,ju,Lf,Px)>i)return;Lf.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(Lf);if(!(u<e.near||u>e.far))return{distance:u,point:Px.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const zx=new j,Bx=new j;class XN extends jN{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let a=0,s=n.count;a<s;a+=2)zx.fromBufferAttribute(n,a),Bx.fromBufferAttribute(n,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+zx.distanceTo(Bx);e.setAttribute("lineDistance",new Ai(i,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jb extends xo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fx=new Gt,Fp=new s0,Nc=new zl,Rc=new j;class WN extends Rn{constructor(e=new Jn,n=new Jb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(a),Nc.radius+=s,e.ray.intersectsSphere(Nc)===!1)return;Fx.copy(a).invert(),Fp.copy(e.ray).applyMatrix4(Fx);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,m=i.attributes.position;if(u!==null){const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let g=d,b=p;g<b;g++){const x=u.getX(g);Rc.fromBufferAttribute(m,x),Hx(Rc,x,c,a,e,n,this)}}else{const d=Math.max(0,r.start),p=Math.min(m.count,r.start+r.count);for(let g=d,b=p;g<b;g++)Rc.fromBufferAttribute(m,g),Hx(Rc,g,c,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Hx(t,e,n,i,a,s,r){const o=Fp.distanceSqToPoint(t);if(o<n){const c=new j;Fp.closestPointToPoint(t,c),c.applyMatrix4(i);const u=a.ray.origin.distanceTo(c);if(u<a.near||u>a.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class $b extends yn{constructor(e=[],n=Vs,i,a,s,r,o,c,u,h){super(e,n,i,a,s,r,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class YN extends yn{constructor(e,n,i,a,s,r,o,c,u){super(e,n,i,a,s,r,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bl extends yn{constructor(e,n,i=qi,a,s,r,o=un,c=un,u,h=ya,m=1){if(h!==ya&&h!==As)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:m};super(d,a,s,r,o,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new i0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class qN extends bl{constructor(e,n=qi,i=Vs,a,s,r=un,o=un,c,u=ya){const h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,n,i,a,s,r,o,c,u),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class eE extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bl extends Jn{constructor(e=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const c=[],u=[],h=[],m=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,r,s,0),g("z","y","x",1,-1,i,n,-e,r,s,1),g("x","z","y",1,1,e,i,n,a,r,2),g("x","z","y",1,-1,e,i,-n,a,r,3),g("x","y","z",1,-1,e,n,i,a,s,4),g("x","y","z",-1,-1,e,n,-i,a,s,5),this.setIndex(c),this.setAttribute("position",new Ai(u,3)),this.setAttribute("normal",new Ai(h,3)),this.setAttribute("uv",new Ai(m,2));function g(b,x,f,v,M,S,T,A,N,y,R){const w=S/N,O=T/y,F=S/2,W=T/2,z=A/2,k=N+1,I=y+1;let P=0,q=0;const V=new j;for(let Z=0;Z<I;Z++){const ne=Z*O-W;for(let Te=0;Te<k;Te++){const be=Te*w-F;V[b]=be*v,V[x]=ne*M,V[f]=z,u.push(V.x,V.y,V.z),V[b]=0,V[x]=0,V[f]=A>0?1:-1,h.push(V.x,V.y,V.z),m.push(Te/N),m.push(1-Z/y),P+=1}}for(let Z=0;Z<y;Z++)for(let ne=0;ne<N;ne++){const Te=d+ne+k*Z,be=d+ne+k*(Z+1),Ge=d+(ne+1)+k*(Z+1),Xe=d+(ne+1)+k*Z;c.push(Te,be,Xe),c.push(be,Ge,Xe),q+=6}o.addGroup(p,q,R),p+=q,d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xd extends Jn{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const s=e/2,r=n/2,o=Math.floor(i),c=Math.floor(a),u=o+1,h=c+1,m=e/o,d=n/c,p=[],g=[],b=[],x=[];for(let f=0;f<h;f++){const v=f*d-r;for(let M=0;M<u;M++){const S=M*m-s;g.push(S,-v,0),b.push(0,0,1),x.push(M/o),x.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<o;v++){const M=v+u*f,S=v+u*(f+1),T=v+1+u*(f+1),A=v+1+u*f;p.push(M,S,A),p.push(S,T,A)}this.setIndex(p),this.setAttribute("position",new Ai(g,3)),this.setAttribute("normal",new Ai(b,3)),this.setAttribute("uv",new Ai(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xd(e.width,e.height,e.widthSegments,e.heightSegments)}}function so(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(Gx(a))a.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(Gx(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();e[n][i]=s}else e[n][i]=a.slice();else e[n][i]=a}}return e}function Tn(t){const e={};for(let n=0;n<t.length;n++){const i=so(t[n]);for(const a in i)e[a]=i[a]}return e}function Gx(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function ZN(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function tE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const KN={clone:so,merge:Tn};var QN=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JN=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QN,this.fragmentShader=JN,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=ZN(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(a.value);break;case"v2":this.uniforms[i].value=new pt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new j().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Ht().fromArray(a.value);break;case"m3":this.uniforms[i].value=new je().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Gt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class $N extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class e2 extends xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rN,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t2 extends xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cc=new j,wc=new go,Ui=new j;class nE extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cc,wc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,wc,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Cc,wc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,wc,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new j,Vx=new pt,kx=new pt;class oi extends nE{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bp*2*Math.atan(Math.tan(uf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z)}getViewSize(e,n){return this.getViewBounds(e,Vx,kx),n.subVectors(kx,Vx)}setViewOffset(e,n,i,a,s,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(uf*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,u=r.fullHeight;s+=r.offsetX*a/c,n-=r.offsetY*i/u,a*=r.width/c,i*=r.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class iE extends nE{constructor(e=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+n,c=a-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const dr=-90,fr=1;class n2 extends Rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new oi(dr,fr,e,n);a.layers=this.layers,this.add(a);const s=new oi(dr,fr,e,n);s.layers=this.layers,this.add(s);const r=new oi(dr,fr,e,n);r.layers=this.layers,this.add(r);const o=new oi(dr,fr,e,n);o.layers=this.layers,this.add(o);const c=new oi(dr,fr,e,n);c.layers=this.layers,this.add(c);const u=new oi(dr,fr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,c]=n;for(const u of n)this.remove(u);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,c,u,h]=this.children,m=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,2,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(m,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class i2 extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class a2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const d0=class d0{constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=a,this}};d0.prototype.isMatrix2=!0;let jx=d0;function Xx(t,e,n,i){const a=s2(i);switch(n){case Hb:return t*e;case Vb:return t*e/a.components*a.byteLength;case Jm:return t*e/a.components*a.byteLength;case ks:return t*e*2/a.components*a.byteLength;case $m:return t*e*2/a.components*a.byteLength;case Gb:return t*e*3/a.components*a.byteLength;case Ei:return t*e*4/a.components*a.byteLength;case e0:return t*e*4/a.components*a.byteLength;case tu:case nu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case iu:case au:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cp:case dp:return Math.max(t,16)*Math.max(e,8)/4;case lp:case up:return Math.max(t,8)*Math.max(e,8)/2;case fp:case hp:case mp:case gp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pp:case zu:case xp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _p:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case yp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case bp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ap:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Np:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Rp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Cp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case wp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Dp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Lp:case Up:case Op:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ip:case Pp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Bu:case zp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function s2(t){switch(t){case di:case Pb:return{byteLength:1,components:1};case yl:case zb:case Zi:return{byteLength:2,components:1};case Km:case Qm:return{byteLength:2,components:4};case qi:case Zm:case Vi:return{byteLength:4,components:1};case Bb:case Fb:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qm}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function aE(){let t=null,e=!1,n=null,i=null;function a(s,r){i=t.requestAnimationFrame(a),n(s,r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function r2(t){const e=new WeakMap;function n(o,c){const u=o.array,h=o.usage,m=u.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,c,u){const h=c.array,m=c.updateRanges;if(t.bindBuffer(u,o),m.length===0)t.bufferSubData(u,0,h);else{m.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<m.length;p++){const g=m[d],b=m[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,m[d]=b)}m.length=d+1;for(let p=0,g=m.length;p<g;p++){const b=m[p];t.bufferSubData(u,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:a,remove:s,update:r}}var o2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,g2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,y2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,E2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,R2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,C2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,w2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,D2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,L2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,U2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z2="gl_FragColor = linearToOutputTexel( gl_FragColor );",B2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,H2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,G2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,j2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Z2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,eR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cR=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,uR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_R=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ER=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$R=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,x3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,b3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:o2,alphahash_pars_fragment:l2,alphamap_fragment:c2,alphamap_pars_fragment:u2,alphatest_fragment:d2,alphatest_pars_fragment:f2,aomap_fragment:h2,aomap_pars_fragment:p2,batching_pars_vertex:m2,batching_vertex:g2,begin_vertex:x2,beginnormal_vertex:v2,bsdfs:_2,iridescence_fragment:y2,bumpmap_pars_fragment:S2,clipping_planes_fragment:b2,clipping_planes_pars_fragment:E2,clipping_planes_pars_vertex:M2,clipping_planes_vertex:T2,color_fragment:A2,color_pars_fragment:N2,color_pars_vertex:R2,color_vertex:C2,common:w2,cube_uv_reflection_fragment:D2,defaultnormal_vertex:L2,displacementmap_pars_vertex:U2,displacementmap_vertex:O2,emissivemap_fragment:I2,emissivemap_pars_fragment:P2,colorspace_fragment:z2,colorspace_pars_fragment:B2,envmap_fragment:F2,envmap_common_pars_fragment:H2,envmap_pars_fragment:G2,envmap_pars_vertex:V2,envmap_physical_pars_fragment:$2,envmap_vertex:k2,fog_vertex:j2,fog_pars_vertex:X2,fog_fragment:W2,fog_pars_fragment:Y2,gradientmap_pars_fragment:q2,lightmap_pars_fragment:Z2,lights_lambert_fragment:K2,lights_lambert_pars_fragment:Q2,lights_pars_begin:J2,lights_toon_fragment:eR,lights_toon_pars_fragment:tR,lights_phong_fragment:nR,lights_phong_pars_fragment:iR,lights_physical_fragment:aR,lights_physical_pars_fragment:sR,lights_fragment_begin:rR,lights_fragment_maps:oR,lights_fragment_end:lR,lightprobes_pars_fragment:cR,logdepthbuf_fragment:uR,logdepthbuf_pars_fragment:dR,logdepthbuf_pars_vertex:fR,logdepthbuf_vertex:hR,map_fragment:pR,map_pars_fragment:mR,map_particle_fragment:gR,map_particle_pars_fragment:xR,metalnessmap_fragment:vR,metalnessmap_pars_fragment:_R,morphinstance_vertex:yR,morphcolor_vertex:SR,morphnormal_vertex:bR,morphtarget_pars_vertex:ER,morphtarget_vertex:MR,normal_fragment_begin:TR,normal_fragment_maps:AR,normal_pars_fragment:NR,normal_pars_vertex:RR,normal_vertex:CR,normalmap_pars_fragment:wR,clearcoat_normal_fragment_begin:DR,clearcoat_normal_fragment_maps:LR,clearcoat_pars_fragment:UR,iridescence_pars_fragment:OR,opaque_fragment:IR,packing:PR,premultiplied_alpha_fragment:zR,project_vertex:BR,dithering_fragment:FR,dithering_pars_fragment:HR,roughnessmap_fragment:GR,roughnessmap_pars_fragment:VR,shadowmap_pars_fragment:kR,shadowmap_pars_vertex:jR,shadowmap_vertex:XR,shadowmask_pars_fragment:WR,skinbase_vertex:YR,skinning_pars_vertex:qR,skinning_vertex:ZR,skinnormal_vertex:KR,specularmap_fragment:QR,specularmap_pars_fragment:JR,tonemapping_fragment:$R,tonemapping_pars_fragment:e3,transmission_fragment:t3,transmission_pars_fragment:n3,uv_pars_fragment:i3,uv_pars_vertex:a3,uv_vertex:s3,worldpos_vertex:r3,background_vert:o3,background_frag:l3,backgroundCube_vert:c3,backgroundCube_frag:u3,cube_vert:d3,cube_frag:f3,depth_vert:h3,depth_frag:p3,distance_vert:m3,distance_frag:g3,equirect_vert:x3,equirect_frag:v3,linedashed_vert:_3,linedashed_frag:y3,meshbasic_vert:S3,meshbasic_frag:b3,meshlambert_vert:E3,meshlambert_frag:M3,meshmatcap_vert:T3,meshmatcap_frag:A3,meshnormal_vert:N3,meshnormal_frag:R3,meshphong_vert:C3,meshphong_frag:w3,meshphysical_vert:D3,meshphysical_frag:L3,meshtoon_vert:U3,meshtoon_frag:O3,points_vert:I3,points_frag:P3,shadow_vert:z3,shadow_frag:B3,sprite_vert:F3,sprite_frag:H3},he={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Pi={basic:{uniforms:Tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Tn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Tn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new it(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Tn([he.points,he.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Tn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Tn([he.common,he.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Tn([he.sprite,he.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Tn([he.common,he.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Tn([he.lights,he.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Pi.physical={uniforms:Tn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Dc={r:0,b:0,g:0},G3=new Gt,sE=new je;sE.set(-1,0,0,0,1,0,0,0,1);function V3(t,e,n,i,a,s){const r=new it(0);let o=a===!0?0:1,c,u,h=null,m=0,d=null;function p(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const S=v.backgroundBlurriness>0;M=e.get(M,S)}return M}function g(v){let M=!1;const S=p(v);S===null?x(r,o):S&&S.isColor&&(x(S,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(v,M){const S=p(M);S&&(S.isCubeTexture||S.mapping===gd)?(u===void 0&&(u=new Sa(new Bl(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:so(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(G3.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(sE),u.material.toneMapped=st.getTransfer(S.colorSpace)!==_t,(h!==S||m!==S.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,m=S.version,d=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Sa(new xd(2,2),new Ki({name:"BackgroundMaterial",uniforms:so(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==_t,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||m!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,m=S.version,d=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function x(v,M){v.getRGB(Dc,tE(t)),n.buffers.color.setClear(Dc.r,Dc.g,Dc.b,M,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,M=1){r.set(v),o=M,x(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,x(r,o)},render:g,addToRenderList:b,dispose:f}}function k3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=d(null);let s=a,r=!1;function o(O,F,W,z,k){let I=!1;const P=m(O,z,W,F);s!==P&&(s=P,u(s.object)),I=p(O,z,W,k),I&&g(O,z,W,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(I||r)&&(r=!1,S(O,F,W,z),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return t.createVertexArray()}function u(O){return t.bindVertexArray(O)}function h(O){return t.deleteVertexArray(O)}function m(O,F,W,z){const k=z.wireframe===!0;let I=i[F.id];I===void 0&&(I={},i[F.id]=I);const P=O.isInstancedMesh===!0?O.id:0;let q=I[P];q===void 0&&(q={},I[P]=q);let V=q[W.id];V===void 0&&(V={},q[W.id]=V);let Z=V[k];return Z===void 0&&(Z=d(c()),V[k]=Z),Z}function d(O){const F=[],W=[],z=[];for(let k=0;k<n;k++)F[k]=0,W[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:z,object:O,attributes:{},index:null}}function p(O,F,W,z){const k=s.attributes,I=F.attributes;let P=0;const q=W.getAttributes();for(const V in q)if(q[V].location>=0){const ne=k[V];let Te=I[V];if(Te===void 0&&(V==="instanceMatrix"&&O.instanceMatrix&&(Te=O.instanceMatrix),V==="instanceColor"&&O.instanceColor&&(Te=O.instanceColor)),ne===void 0||ne.attribute!==Te||Te&&ne.data!==Te.data)return!0;P++}return s.attributesNum!==P||s.index!==z}function g(O,F,W,z){const k={},I=F.attributes;let P=0;const q=W.getAttributes();for(const V in q)if(q[V].location>=0){let ne=I[V];ne===void 0&&(V==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),V==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor));const Te={};Te.attribute=ne,ne&&ne.data&&(Te.data=ne.data),k[V]=Te,P++}s.attributes=k,s.attributesNum=P,s.index=z}function b(){const O=s.newAttributes;for(let F=0,W=O.length;F<W;F++)O[F]=0}function x(O){f(O,0)}function f(O,F){const W=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;W[O]=1,z[O]===0&&(t.enableVertexAttribArray(O),z[O]=1),k[O]!==F&&(t.vertexAttribDivisor(O,F),k[O]=F)}function v(){const O=s.newAttributes,F=s.enabledAttributes;for(let W=0,z=F.length;W<z;W++)F[W]!==O[W]&&(t.disableVertexAttribArray(W),F[W]=0)}function M(O,F,W,z,k,I,P){P===!0?t.vertexAttribIPointer(O,F,W,k,I):t.vertexAttribPointer(O,F,W,z,k,I)}function S(O,F,W,z){b();const k=z.attributes,I=W.getAttributes(),P=F.defaultAttributeValues;for(const q in I){const V=I[q];if(V.location>=0){let Z=k[q];if(Z===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(Z=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(Z=O.instanceColor)),Z!==void 0){const ne=Z.normalized,Te=Z.itemSize,be=e.get(Z);if(be===void 0)continue;const Ge=be.buffer,Xe=be.type,ot=be.bytesPerElement,K=Xe===t.INT||Xe===t.UNSIGNED_INT||Z.gpuType===Zm;if(Z.isInterleavedBufferAttribute){const ie=Z.data,ve=ie.stride,Fe=Z.offset;if(ie.isInstancedInterleavedBuffer){for(let xe=0;xe<V.locationSize;xe++)f(V.location+xe,ie.meshPerAttribute);O.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let xe=0;xe<V.locationSize;xe++)x(V.location+xe);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let xe=0;xe<V.locationSize;xe++)M(V.location+xe,Te/V.locationSize,Xe,ne,ve*ot,(Fe+Te/V.locationSize*xe)*ot,K)}else{if(Z.isInstancedBufferAttribute){for(let ie=0;ie<V.locationSize;ie++)f(V.location+ie,Z.meshPerAttribute);O.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ie=0;ie<V.locationSize;ie++)x(V.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let ie=0;ie<V.locationSize;ie++)M(V.location+ie,Te/V.locationSize,Xe,ne,Te*ot,Te/V.locationSize*ie*ot,K)}}else if(P!==void 0){const ne=P[q];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(V.location,ne);break;case 3:t.vertexAttrib3fv(V.location,ne);break;case 4:t.vertexAttrib4fv(V.location,ne);break;default:t.vertexAttrib1fv(V.location,ne)}}}}v()}function T(){R();for(const O in i){const F=i[O];for(const W in F){const z=F[W];for(const k in z){const I=z[k];for(const P in I)h(I[P].object),delete I[P];delete z[k]}}delete i[O]}}function A(O){if(i[O.id]===void 0)return;const F=i[O.id];for(const W in F){const z=F[W];for(const k in z){const I=z[k];for(const P in I)h(I[P].object),delete I[P];delete z[k]}}delete i[O.id]}function N(O){for(const F in i){const W=i[F];for(const z in W){const k=W[z];if(k[O.id]===void 0)continue;const I=k[O.id];for(const P in I)h(I[P].object),delete I[P];delete k[O.id]}}}function y(O){for(const F in i){const W=i[F],z=O.isInstancedMesh===!0?O.id:0,k=W[z];if(k!==void 0){for(const I in k){const P=k[I];for(const q in P)h(P[q].object),delete P[q];delete k[I]}delete W[z],Object.keys(W).length===0&&delete i[F]}}}function R(){w(),r=!0,s!==a&&(s=a,u(s.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:x,disableUnusedAttributes:v}}function j3(t,e,n){let i;function a(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function r(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];n.update(d,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function X3(t,e,n,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(N){return!(N!==Ei&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const y=N===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==di&&N!==Vi&&!y&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(N){if(N==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(ze("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const m=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:m,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:S,maxSamples:T,samples:A}}function W3(t){const e=this;let n=null,i=0,a=!1,s=!1;const r=new Fa,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){const p=m.length!==0||d||i!==0||a;return a=d,i=m.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,d){n=h(m,d,0)},this.setState=function(m,d,p){const g=m.clippingPlanes,b=m.clipIntersection,x=m.clipShadows,f=t.get(m);if(!a||g===null||g.length===0||s&&!x)s?h(null):u();else{const v=s?0:i,M=v*4;let S=f.clippingState||null;c.value=S,S=h(g,d,M,p);for(let T=0;T!==M;++T)S[T]=n[T];f.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,d,p,g){const b=m!==null?m.length:0;let x=null;if(b!==0){if(x=c.value,g!==!0||x===null){const f=p+b*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(x===null||x.length<f)&&(x=new Float32Array(f));for(let M=0,S=p;M!==b;++M,S+=4)r.copy(m[M]).applyMatrix4(v,o),r.normal.toArray(x,S),x[S+3]=r.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}const Dr=4,Y3=6,q3=20,Z3=256,Do=new iE,Wx=new it;let Uf=null,Of=0,If=0,Pf=!1;const K3=new j,_s=new j;class Yx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=K3}=s;Uf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),If=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,a,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uf,Of,If),this._renderer.xr.enabled=Pf,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),If=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Zi,format:Ei,colorSpace:Fu,depthBuffer:!1},a=qx(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qx(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Q3(s)),this._blurMaterial=$3(s,e,n),this._ggxMaterial=J3(s,e,n)}return a}_compileMaterial(e){const n=new Sa(new Jn,e);this._renderer.compile(n,Do)}_sceneToCubeUV(e,n,i,a,s){const c=new oi(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,p=m.toneMapping;m.getClearColor(Wx),m.toneMapping=Wi,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(a),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sa(new Bl,new Zb({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let f=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,f=!0):(x.color.copy(Wx),f=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(c.up.set(0,u[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[M],s.y,s.z)):S===1?(c.up.set(0,0,u[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[M],s.z)):(c.up.set(0,u[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[M]));const T=this._cubeSize;hr(a,S*T,M>2?T:0,T,T),m.setRenderTarget(a),f&&m.render(b,c),m.render(e,c)}m.toneMapping=p,m.autoClear=d,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===Vs||e.mapping===ao;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zx());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;hr(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(r,Do)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const c=r.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),m=Math.sqrt(u*u-h*h),d=u*1.25,p=m*d,{_lodMax:g}=this,b=this._sizeLods[i],x=3*b*(i>g-Dr?i-g+Dr:0),f=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-n,hr(s,x,f,3*b,2*b),a.setRenderTarget(s),a.render(o,Do),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,hr(e,x,f,3*b,2*b),a.setRenderTarget(e),a.render(o,Do)}_blur(e,n,i,a){const s=this._pingPongRenderTarget,r=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,r),this._blurPass(s,e,i,i,r)}_blurPass(e,n,i,a,s){const r=this._renderer,o=this._blurMaterial,c=this._lodMeshes[a];c.material=o;const u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-i;const h=this._sizeLods[a],m=3*h*(a>this._lodMax-Dr?a-this._lodMax+Dr:0),d=4*(this._cubeSize-h);hr(n,m,d,3*h,2*h),r.setRenderTarget(n),r.render(c,Do)}}function Q3(t){const e=[],n=[];let i=t;const a=t-Dr+1+Y3;for(let s=0;s<a;s++){const r=Math.pow(2,i);e.push(r);const o=1/(r-2),c=-o,u=1+o,h=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,d=6,p=3,g=new Float32Array(p*d*m),b=new Float32Array(p*d*m);for(let f=0;f<m;f++){const v=f%3*2/3-1,M=f>2?0:-1,S=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];g.set(S,p*d*f);for(let T=0;T<d;T++){const A=h[T*2]*2-1,N=h[T*2+1]*2-1;f===0?_s.set(1,N,A):f===1?_s.set(-A,1,-N):f===2?_s.set(-A,N,1):f===3?_s.set(-1,N,-A):f===4?_s.set(-A,-1,N):_s.set(A,N,-1),_s.toArray(b,(f*d+T)*p)}}const x=new Jn;x.setAttribute("position",new In(g,p)),x.setAttribute("outputDirection",new In(b,p)),n.push(new Sa(x,null)),i>Dr&&i--}return{lodMeshes:n,sizeLods:e}}function qx(t,e,n){const i=new Ti(t,e,n);return i.texture.mapping=gd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hr(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function J3(t,e,n){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function $3(t,e,n){return new Ki({name:"SphericalGaussianBlur",defines:{SAMPLES:q3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function Zx(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function Kx(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function vd(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class rE extends Ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new $b(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Bl(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zn,blending:fa});s.uniforms.tEquirect.value=n;const r=new Sa(a,s),o=n.minFilter;return n.minFilter===Ts&&(n.minFilter=vn),new n2(1,10,this).update(e,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,i,a);e.setRenderTarget(s)}}function eC(t){let e=new WeakMap,n=new WeakMap,i=null;function a(d,p=!1){return d==null?null:p?r(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===rf||p===of)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const b=new rE(g.height);return b.fromEquirectangularTexture(t,d),e.set(d,b),d.addEventListener("dispose",u),o(b.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const p=d.mapping,g=p===rf||p===of,b=p===Vs||p===ao;if(g||b){let x=n.get(d);const f=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new Yx(t)),x=g?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),x.texture;if(x!==void 0)return x.texture;{const v=d.image;return g&&v&&v.height>0||b&&v&&c(v)?(i===null&&(i=new Yx(t)),x=g?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}function o(d,p){return p===rf?d.mapping=Vs:p===of&&(d.mapping=ao),d}function c(d){let p=0;const g=6;for(let b=0;b<g;b++)d[b]!==void 0&&p++;return p===g}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(d){const p=d.target;p.removeEventListener("dispose",h);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function m(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:m}}function tC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Vr("WebGLRenderer: "+i+" extension not supported."),a}}}function nC(t,e,n,i){const a={},s=new WeakMap;function r(m){const d=m.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete a[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(m,d){return a[d.id]===!0||(d.addEventListener("dispose",r),a[d.id]=!0,n.memory.geometries++),d}function c(m){const d=m.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function u(m){const d=[],p=m.index,g=m.attributes.position;let b=0;if(g===void 0)return;if(p!==null){const v=p.array;b=p.version;for(let M=0,S=v.length;M<S;M+=3){const T=v[M+0],A=v[M+1],N=v[M+2];d.push(T,A,A,N,N,T)}}else{const v=g.array;b=g.version;for(let M=0,S=v.length/3-1;M<S;M+=3){const T=M+0,A=M+1,N=M+2;d.push(T,A,A,N,N,T)}}const x=new(g.count>=65535?qb:Yb)(d,1);x.version=b;const f=s.get(m);f&&e.remove(f),s.set(m,x)}function h(m){const d=s.get(m);if(d){const p=m.index;p!==null&&d.version<p.version&&u(m)}else u(m);return s.get(m)}return{get:o,update:c,getWireframeAttribute:h}}function iC(t,e,n){let i;function a(m){i=m}let s,r;function o(m){s=m.type,r=m.bytesPerElement}function c(m,d){t.drawElements(i,d,s,m*r),n.update(d,i,1)}function u(m,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,m*r,p),n.update(d,i,p))}function h(m,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,m,0,p);let b=0;for(let x=0;x<p;x++)b+=d[x];n.update(b,i,1)}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function aC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ut("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function sC(t,e,n){const i=new WeakMap,a=new Ht;function s(r,o,c){const u=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==m){let w=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var p=w;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),b===!0&&(S=2),x===!0&&(S=3);let T=o.attributes.position.count*S,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const N=new Float32Array(T*A*4*m),y=new jb(N,T,A,m);y.type=Vi,y.needsUpdate=!0;const R=S*4;for(let O=0;O<m;O++){const F=f[O],W=v[O],z=M[O],k=T*A*4*O;for(let I=0;I<F.count;I++){const P=I*R;g===!0&&(a.fromBufferAttribute(F,I),N[k+P+0]=a.x,N[k+P+1]=a.y,N[k+P+2]=a.z,N[k+P+3]=0),b===!0&&(a.fromBufferAttribute(W,I),N[k+P+4]=a.x,N[k+P+5]=a.y,N[k+P+6]=a.z,N[k+P+7]=0),x===!0&&(a.fromBufferAttribute(z,I),N[k+P+8]=a.x,N[k+P+9]=a.y,N[k+P+10]=a.z,N[k+P+11]=z.itemSize===4?a.w:1)}}d={count:m,texture:y,size:new pt(T,A)},i.set(o,d),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];const b=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",b),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function rC(t,e,n,i,a){let s=new WeakMap;function r(u){const h=a.render.frame,m=u.geometry,d=e.get(u,m);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return d}function o(){s=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}const oC={[Rb]:"LINEAR_TONE_MAPPING",[Cb]:"REINHARD_TONE_MAPPING",[wb]:"CINEON_TONE_MAPPING",[Db]:"ACES_FILMIC_TONE_MAPPING",[Ub]:"AGX_TONE_MAPPING",[Ob]:"NEUTRAL_TONE_MAPPING",[Lb]:"CUSTOM_TONE_MAPPING"};function lC(t,e,n,i,a,s){const r=new Ti(e,n,{type:t,depthBuffer:a,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const u=new Jn;u.setAttribute("position",new Ai([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ai([0,2,0,0,2,0],2));const h=new $N({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Sa(u,h),d=new iE(-1,1,1,-1,0,1);let p=null,g=null,b=!1,x,f=null,v=[],M=!1;this.setSize=function(S,T){r.setSize(S,T),o!==null&&o.setSize(S,T),c!==null&&c.setSize(S,T);for(let A=0;A<v.length;A++){const N=v[A];N.setSize&&N.setSize(S,T)}},this.setEffects=function(S){v=S,M=v.length>0&&v[0].isRenderPass===!0;const T=r.width,A=r.height;v.length>0&&o===null&&(o=new Ti(T,A,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),c=new Ti(T,A,{type:Zi,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<v.length;N++){const y=v[N];y.setSize&&y.setSize(T,A)}},this.begin=function(S,T){if(b||S.toneMapping===Wi&&v.length===0)return!1;if(f=T,T!==null){const A=T.width,N=T.height;(r.width!==A||r.height!==N)&&this.setSize(A,N)}return M===!1&&S.setRenderTarget(r),x=S.toneMapping,S.toneMapping=Wi,!0},this.hasRenderPass=function(){return M},this.end=function(S,T){S.toneMapping=x,b=!0;let A=r,N=o;for(let y=0;y<v.length;y++){const R=v[y];R.enabled!==!1&&(R.render(S,N,A,T),R.needsSwap!==!1&&(A=N,N=N===o?c:o))}if(p!==S.outputColorSpace||g!==S.toneMapping){p=S.outputColorSpace,g=S.toneMapping,h.defines={},st.getTransfer(p)===_t&&(h.defines.SRGB_TRANSFER="");const y=oC[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(f),S.render(m,d),f=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}const oE=new yn,Hp=new bl(1,1),lE=new jb,cE=new AN,uE=new $b,Qx=[],Jx=[],$x=new Float32Array(16),ev=new Float32Array(9),tv=new Float32Array(4);function vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let s=Qx[a];if(s===void 0&&(s=new Float32Array(a),Qx[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=n,t[r].toArray(s,o)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function en(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function _d(t,e){let n=Jx[e];n===void 0&&(n=new Int32Array(e),Jx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function cC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function uC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),en(n,e)}}function dC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),en(n,e)}}function fC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),en(n,e)}}function hC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if($t(n,i))return;tv.set(i),t.uniformMatrix2fv(this.addr,!1,tv),en(n,i)}}function pC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if($t(n,i))return;ev.set(i),t.uniformMatrix3fv(this.addr,!1,ev),en(n,i)}}function mC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if($t(n,i))return;$x.set(i),t.uniformMatrix4fv(this.addr,!1,$x),en(n,i)}}function gC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function xC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),en(n,e)}}function vC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),en(n,e)}}function _C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),en(n,e)}}function yC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function SC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),en(n,e)}}function bC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),en(n,e)}}function EC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),en(n,e)}}function MC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let s;this.type===t.SAMPLER_2D_SHADOW?(Hp.compareFunction=n.isReversedDepthBuffer()?n0:t0,s=Hp):s=oE,n.setTexture2D(e||s,a)}function TC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||cE,a)}function AC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||uE,a)}function NC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||lE,a)}function RC(t){switch(t){case 5126:return cC;case 35664:return uC;case 35665:return dC;case 35666:return fC;case 35674:return hC;case 35675:return pC;case 35676:return mC;case 5124:case 35670:return gC;case 35667:case 35671:return xC;case 35668:case 35672:return vC;case 35669:case 35673:return _C;case 5125:return yC;case 36294:return SC;case 36295:return bC;case 36296:return EC;case 35678:case 36198:case 36298:case 36306:case 35682:return MC;case 35679:case 36299:case 36307:return TC;case 35680:case 36300:case 36308:case 36293:return AC;case 36289:case 36303:case 36311:case 36292:return NC}}function CC(t,e){t.uniform1fv(this.addr,e)}function wC(t,e){const n=vo(e,this.size,2);t.uniform2fv(this.addr,n)}function DC(t,e){const n=vo(e,this.size,3);t.uniform3fv(this.addr,n)}function LC(t,e){const n=vo(e,this.size,4);t.uniform4fv(this.addr,n)}function UC(t,e){const n=vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function OC(t,e){const n=vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function IC(t,e){const n=vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function PC(t,e){t.uniform1iv(this.addr,e)}function zC(t,e){t.uniform2iv(this.addr,e)}function BC(t,e){t.uniform3iv(this.addr,e)}function FC(t,e){t.uniform4iv(this.addr,e)}function HC(t,e){t.uniform1uiv(this.addr,e)}function GC(t,e){t.uniform2uiv(this.addr,e)}function VC(t,e){t.uniform3uiv(this.addr,e)}function kC(t,e){t.uniform4uiv(this.addr,e)}function jC(t,e,n){const i=this.cache,a=e.length,s=_d(n,a);$t(i,s)||(t.uniform1iv(this.addr,s),en(i,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=Hp:r=oE;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||r,s[o])}function XC(t,e,n){const i=this.cache,a=e.length,s=_d(n,a);$t(i,s)||(t.uniform1iv(this.addr,s),en(i,s));for(let r=0;r!==a;++r)n.setTexture3D(e[r]||cE,s[r])}function WC(t,e,n){const i=this.cache,a=e.length,s=_d(n,a);$t(i,s)||(t.uniform1iv(this.addr,s),en(i,s));for(let r=0;r!==a;++r)n.setTextureCube(e[r]||uE,s[r])}function YC(t,e,n){const i=this.cache,a=e.length,s=_d(n,a);$t(i,s)||(t.uniform1iv(this.addr,s),en(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(e[r]||lE,s[r])}function qC(t){switch(t){case 5126:return CC;case 35664:return wC;case 35665:return DC;case 35666:return LC;case 35674:return UC;case 35675:return OC;case 35676:return IC;case 5124:case 35670:return PC;case 35667:case 35671:return zC;case 35668:case 35672:return BC;case 35669:case 35673:return FC;case 5125:return HC;case 36294:return GC;case 36295:return VC;case 36296:return kC;case 35678:case 36198:case 36298:case 36306:case 35682:return jC;case 35679:case 36299:case 36307:return XC;case 35680:case 36300:case 36308:case 36293:return WC;case 36289:case 36303:case 36311:case 36292:return YC}}class ZC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=RC(n.type)}}class KC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=qC(n.type)}}class QC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,n[o.id],i)}}}const zf=/(\w+)(\])?(\[|\.)?/g;function nv(t,e){t.seq.push(e),t.map[e.id]=e}function JC(t,e,n){const i=t.name,a=i.length;for(zf.lastIndex=0;;){const s=zf.exec(i),r=zf.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&r+2===a){nv(n,u===void 0?new ZC(o,t,e):new KC(o,t,e));break}else{let m=n.map[o];m===void 0&&(m=new QC(o),nv(n,m)),n=m}}}class su{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),c=e.getUniformLocation(n,o.name);JC(o,c,this)}const a=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in n&&i.push(r)}return i}}function iv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $C=37297;let ew=0;function tw(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const av=new je;function nw(t){st._getMatrix(av,st.workingColorSpace,t);const e=`mat3( ${av.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case Hu:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function sv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+tw(t.getShaderSource(e),o)}else return s}function iw(t,e){const n=nw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const aw={[Rb]:"Linear",[Cb]:"Reinhard",[wb]:"Cineon",[Db]:"ACESFilmic",[Ub]:"AgX",[Ob]:"Neutral",[Lb]:"Custom"};function sw(t,e){const n=aw[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Lc=new j;function rw(){st.getLuminanceCoefficients(Lc);const t=Lc.x.toFixed(4),e=Lc.y.toFixed(4),n=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ow(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function lw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function cw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=t.getActiveAttrib(e,a),r=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return n}function Ho(t){return t!==""}function rv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ov(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gp(t){return t.replace(uw,fw)}const dw=new Map;function fw(t,e){let n=Ze[e];if(n===void 0){const i=dw.get(e);if(i!==void 0)n=Ze[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Gp(n)}const hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lv(t){return t.replace(hw,pw)}function pw(t,e,n,i){let a="";for(let s=parseInt(e);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function cv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mw={[eu]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function gw(t){return mw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xw={[Vs]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE",[gd]:"ENVMAP_TYPE_CUBE_UV"};function vw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":xw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const _w={[ao]:"ENVMAP_MODE_REFRACTION"};function yw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":_w[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Sw={[Nb]:"ENVMAP_BLENDING_MULTIPLY",[iN]:"ENVMAP_BLENDING_MIX",[aN]:"ENVMAP_BLENDING_ADD"};function bw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Sw[t.combine]||"ENVMAP_BLENDING_NONE"}function Ew(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Mw(t,e,n,i){const a=t.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const c=gw(n),u=vw(n),h=yw(n),m=bw(n),d=Ew(n),p=ow(n),g=lw(s),b=a.createProgram();let x,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ho).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ho).join(`
`),f.length>0&&(f+=`
`)):(x=[cv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),f=[cv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Wi?sw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,iw("linearToOutputTexel",n.outputColorSpace),rw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),r=Gp(r),r=rv(r,n),r=ov(r,n),o=Gp(o),o=rv(o,n),o=ov(o,n),r=lv(r),o=lv(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",n.glslVersion===vx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=v+x+r,S=v+f+o,T=iv(a,a.VERTEX_SHADER,M),A=iv(a,a.FRAGMENT_SHADER,S);a.attachShader(b,T),a.attachShader(b,A),n.index0AttributeName!==void 0?a.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function N(O){if(t.debug.checkShaderErrors){const F=a.getProgramInfoLog(b)||"",W=a.getShaderInfoLog(T)||"",z=a.getShaderInfoLog(A)||"",k=F.trim(),I=W.trim(),P=z.trim();let q=!0,V=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,b,T,A);else{const Z=sv(a,T,"vertex"),ne=sv(a,A,"fragment");ut("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+k+`
`+Z+`
`+ne)}else k!==""?ze("WebGLProgram: Program Info Log:",k):(I===""||P==="")&&(V=!1);V&&(O.diagnostics={runnable:q,programLog:k,vertexShader:{log:I,prefix:x},fragmentShader:{log:P,prefix:f}})}a.deleteShader(T),a.deleteShader(A),y=new su(a,b),R=cw(a,b)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let R;this.getAttributes=function(){return R===void 0&&N(this),R};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(b,$C)),w},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ew++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=A,this}let Tw=0;class Aw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Nw(e),n.set(e,i)),i}}class Nw{constructor(e){this.id=Tw++,this.code=e,this.usedTimes=0}}function Rw(t){return t===ks||t===zu||t===Bu}function Cw(t,e,n,i,a,s){const r=new Xb,o=new Aw,c=new Set,u=[],h=new Map,m=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function b(y,R,w,O,F,W){const z=O.fog,k=F.geometry,I=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,P=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=e.get(y.envMap||I,P),V=q&&q.mapping===gd?q.image.height:null,Z=p[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&ze("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Te=ne!==void 0?ne.length:0;let be=0;k.morphAttributes.position!==void 0&&(be=1),k.morphAttributes.normal!==void 0&&(be=2),k.morphAttributes.color!==void 0&&(be=3);let Ge,Xe,ot,K;if(Z){const Rt=Pi[Z];Ge=Rt.vertexShader,Xe=Rt.fragmentShader}else{Ge=y.vertexShader,Xe=y.fragmentShader;const Rt=o.getVertexShaderStage(y),mt=o.getFragmentShaderStage(y);o.update(y,Rt,mt),ot=Rt.id,K=mt.id}const ie=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),Fe=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,re=!!y.map,Ie=!!y.matcap,_e=!!q,He=!!y.aoMap,Ue=!!y.lightMap,Pe=!!y.bumpMap&&y.wireframe===!1,Ve=!!y.normalMap,Ot=!!y.displacementMap,Qe=!!y.emissiveMap,$e=!!y.metalnessMap,vt=!!y.roughnessMap,L=y.anisotropy>0,Zt=y.clearcoat>0,ct=y.dispersion>0,C=y.retroreflectivity>0,_=y.iridescence>0,B=y.sheen>0,X=y.transmission>0,Q=L&&!!y.anisotropyMap,se=Zt&&!!y.clearcoatMap,oe=Zt&&!!y.clearcoatNormalMap,J=Zt&&!!y.clearcoatRoughnessMap,te=_&&!!y.iridescenceMap,le=_&&!!y.iridescenceThicknessMap,we=B&&!!y.sheenColorMap,fe=B&&!!y.sheenRoughnessMap,ce=!!y.specularMap,De=!!y.specularColorMap,Oe=!!y.specularIntensityMap,We=X&&!!y.transmissionMap,U=X&&!!y.thicknessMap,ue=!!y.gradientMap,$=!!y.alphaMap,de=y.alphaTest>0,ge=!!y.alphaHash,ae=!!y.extensions;let Le=Wi;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Le=t.toneMapping);const Ae={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:Ge,fragmentShader:Xe,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&F.instanceColor!==null,instancingMorph:Fe&&F.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:re,matcap:Ie,envMap:_e,envMapMode:_e&&q.mapping,envMapCubeUVHeight:V,aoMap:He,lightMap:Ue,bumpMap:Pe,normalMap:Ve,displacementMap:Ot,emissiveMap:Qe,normalMapObjectSpace:Ve&&y.normalMapType===oN,normalMapTangentSpace:Ve&&y.normalMapType===xx,packedNormalMap:Ve&&y.normalMapType===xx&&Rw(y.normalMap.format),metalnessMap:$e,roughnessMap:vt,anisotropy:L,anisotropyMap:Q,clearcoat:Zt,clearcoatMap:se,clearcoatNormalMap:oe,clearcoatRoughnessMap:J,dispersion:ct,retroreflection:C,iridescence:_,iridescenceMap:te,iridescenceThicknessMap:le,sheen:B,sheenColorMap:we,sheenRoughnessMap:fe,specularMap:ce,specularColorMap:De,specularIntensityMap:Oe,transmission:X,transmissionMap:We,thicknessMap:U,gradientMap:ue,opaque:y.transparent===!1&&y.blending===nl&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:de,alphaHash:ge,combine:y.combine,mapUv:re&&g(y.map.channel),aoMapUv:He&&g(y.aoMap.channel),lightMapUv:Ue&&g(y.lightMap.channel),bumpMapUv:Pe&&g(y.bumpMap.channel),normalMapUv:Ve&&g(y.normalMap.channel),displacementMapUv:Ot&&g(y.displacementMap.channel),emissiveMapUv:Qe&&g(y.emissiveMap.channel),metalnessMapUv:$e&&g(y.metalnessMap.channel),roughnessMapUv:vt&&g(y.roughnessMap.channel),anisotropyMapUv:Q&&g(y.anisotropyMap.channel),clearcoatMapUv:se&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(y.sheenRoughnessMap.channel),specularMapUv:ce&&g(y.specularMap.channel),specularColorMapUv:De&&g(y.specularColorMap.channel),specularIntensityMapUv:Oe&&g(y.specularIntensityMap.channel),transmissionMapUv:We&&g(y.transmissionMap.channel),thicknessMapUv:U&&g(y.thicknessMap.channel),alphaMapUv:$&&g(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ve||L),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(re||$),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&Ve===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:be,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&w.length>0,shadowMapType:t.shadowMap.type,toneMapping:Le,decodeVideoTexture:re&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===_t,decodeVideoTextureEmissive:Qe&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===_t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===oa,flipSided:y.side===zn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ae&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&y.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function x(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)R.push(w),R.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(f(R,y),v(R,y),R.push(t.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function f(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function v(y,R){r.disableAll(),R.instancing&&r.enable(0),R.instancingColor&&r.enable(1),R.instancingMorph&&r.enable(2),R.matcap&&r.enable(3),R.envMap&&r.enable(4),R.normalMapObjectSpace&&r.enable(5),R.normalMapTangentSpace&&r.enable(6),R.clearcoat&&r.enable(7),R.iridescence&&r.enable(8),R.alphaTest&&r.enable(9),R.vertexColors&&r.enable(10),R.vertexAlphas&&r.enable(11),R.vertexUv1s&&r.enable(12),R.vertexUv2s&&r.enable(13),R.vertexUv3s&&r.enable(14),R.vertexTangents&&r.enable(15),R.anisotropy&&r.enable(16),R.alphaHash&&r.enable(17),R.batching&&r.enable(18),R.dispersion&&r.enable(19),R.retroreflection&&r.enable(24),R.batchingColor&&r.enable(20),R.gradientMap&&r.enable(21),R.packedNormalMap&&r.enable(22),R.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),R.fog&&r.enable(0),R.useFog&&r.enable(1),R.flatShading&&r.enable(2),R.logarithmicDepthBuffer&&r.enable(3),R.reversedDepthBuffer&&r.enable(4),R.skinning&&r.enable(5),R.morphTargets&&r.enable(6),R.morphNormals&&r.enable(7),R.morphColors&&r.enable(8),R.premultipliedAlpha&&r.enable(9),R.shadowMapEnabled&&r.enable(10),R.doubleSided&&r.enable(11),R.flipSided&&r.enable(12),R.useDepthPacking&&r.enable(13),R.dithering&&r.enable(14),R.transmission&&r.enable(15),R.sheen&&r.enable(16),R.opaque&&r.enable(17),R.pointsUvs&&r.enable(18),R.decodeVideoTexture&&r.enable(19),R.decodeVideoTextureEmissive&&r.enable(20),R.alphaToCoverage&&r.enable(21),R.numLightProbeGrids>0&&r.enable(22),R.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function M(y){const R=p[y.type];let w;if(R){const O=Pi[R];w=KN.clone(O.uniforms)}else w=y.uniforms;return w}function S(y,R){let w=h.get(R);return w!==void 0?++w.usedTimes:(w=new Mw(t,R,y,a),u.push(w),h.set(R,w)),w}function T(y){if(--y.usedTimes===0){const R=u.indexOf(y);u[R]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function N(){o.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:N}}function ww(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function i(r){t.delete(r)}function a(r,o,c){t.get(r)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:s}}function Dw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function uv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dv(){const t=[];let e=0;const n=[],i=[],a=[];function s(){e=0,n.length=0,i.length=0,a.length=0}function r(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,b,x,f){let v=t[e];return v===void 0?(v={id:d.id,object:d,geometry:p,material:g,materialVariant:r(d),groupOrder:b,renderOrder:d.renderOrder,z:x,group:f},t[e]=v):(v.id=d.id,v.object=d,v.geometry=p,v.material=g,v.materialVariant=r(d),v.groupOrder=b,v.renderOrder=d.renderOrder,v.z=x,v.group=f),e++,v}function c(d,p,g,b,x,f,v){v.reversedDepth===!0&&(x=-x);const M=o(d,p,g,b,x,f);g.transmission>0?i.push(M):g.transparent===!0?a.push(M):n.push(M)}function u(d,p,g,b,x,f){const v=o(d,p,g,b,x,f);g.transmission>0?i.unshift(v):g.transparent===!0?a.unshift(v):n.unshift(v)}function h(d,p){n.length>1&&n.sort(d||Dw),i.length>1&&i.sort(p||uv),a.length>1&&a.sort(p||uv)}function m(){for(let d=e,p=t.length;d<p;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:c,unshift:u,finish:m,sort:h}}function Lw(){let t=new WeakMap;function e(i,a){const s=t.get(i);let r;return s===void 0?(r=new dv,t.set(i,[r])):a>=s.length?(r=new dv,s.push(r)):r=s[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function Uw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new j,color:new it};break;case"SpotLight":n={position:new j,direction:new j,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function Ow(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Iw=0;function Pw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function zw(t){const e=new Uw,n=Ow(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new j);const a=new j,s=new Gt,r=new Gt;function o(u){let h=0,m=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,g=0,b=0,x=0,f=0,v=0,M=0,S=0,T=0,A=0,N=0,y=0,R=0,w=0;u.sort(Pw);for(let F=0,W=u.length;F<W;F++){const z=u[F],k=z.color,I=z.intensity,P=z.distance;let q=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ks?q=z.shadow.map.texture:q=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)h+=k.r*I,m+=k.g*I,d+=k.b*I;else if(z.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(z.sh.coefficients[V],I);w++}else if(z.isSunLight){const V=e.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Z=z.shadow,ne=n.get(z);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[g]=ne,i.sunShadowMap[g]=q;const Te=Z.getViewportCount();for(let be=0;be<Te;be++)i.sunShadowMatrix[b+be]=Z.getMatrix(be),i.sunShadowCascade[b+be]=Z._cascadeData[be];b+=Te,g++}i.sun[p]=V,p++}else if(z.isDirectionalLight){const V=e.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Z=z.shadow,ne=n.get(z);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,i.directionalShadow[x]=ne,i.directionalShadowMap[x]=q,i.directionalShadowMatrix[x]=z.shadow.matrix,T++}i.directional[x]=V,x++}else if(z.isSpotLight){const V=e.get(z);V.position.setFromMatrixPosition(z.matrixWorld),V.color.copy(k).multiplyScalar(I),V.distance=P,V.coneCos=Math.cos(z.angle),V.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),V.decay=z.decay,i.spot[v]=V;const Z=z.shadow;if(z.map&&(i.spotLightMap[y]=z.map,y++,Z.updateMatrices(z),z.castShadow&&R++),i.spotLightMatrix[v]=Z.matrix,z.castShadow){const ne=n.get(z);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,i.spotShadow[v]=ne,i.spotShadowMap[v]=q,N++}v++}else if(z.isRectAreaLight){const V=e.get(z);V.color.copy(k).multiplyScalar(I),V.halfWidth.set(z.width*.5,0,0),V.halfHeight.set(0,z.height*.5,0),i.rectArea[M]=V,M++}else if(z.isPointLight){const V=e.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity),V.distance=z.distance,V.decay=z.decay,z.castShadow){const Z=z.shadow,ne=n.get(z);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,ne.shadowCameraNear=Z.camera.near,ne.shadowCameraFar=Z.camera.far,i.pointShadow[f]=ne,i.pointShadowMap[f]=q,i.pointShadowMatrix[f]=z.shadow.matrix,A++}i.point[f]=V,f++}else if(z.isHemisphereLight){const V=e.get(z);V.skyColor.copy(z.color).multiplyScalar(I),V.groundColor.copy(z.groundColor).multiplyScalar(I),i.hemi[S]=V,S++}}M>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=d;const O=i.hash;(O.sunLength!==p||O.directionalLength!==x||O.pointLength!==f||O.spotLength!==v||O.rectAreaLength!==M||O.hemiLength!==S||O.numSunShadows!==g||O.numDirectionalShadows!==T||O.numPointShadows!==A||O.numSpotShadows!==N||O.numSpotMaps!==y||O.numLightProbes!==w)&&(i.sun.length=p,i.directional.length=x,i.spot.length=v,i.rectArea.length=M,i.point.length=f,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+y-R,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,O.sunLength=p,O.directionalLength=x,O.pointLength=f,O.spotLength=v,O.rectAreaLength=M,O.hemiLength=S,O.numSunShadows=g,O.numDirectionalShadows=T,O.numPointShadows=A,O.numSpotShadows=N,O.numSpotMaps=y,O.numLightProbes=w,i.version=Iw++)}function c(u,h){let m=0,d=0,p=0,g=0,b=0,x=0;const f=h.matrixWorldInverse;for(let v=0,M=u.length;v<M;v++){const S=u[v];if(S.isSunLight){const T=i.sun[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(f),m++}else if(S.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),d++}else if(S.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const T=i.rectArea[b];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),r.identity(),s.copy(S.matrixWorld),s.premultiply(f),r.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),b++}else if(S.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const T=i.hemi[x];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(f),x++}}}return{setup:o,setupView:c,state:i}}function fv(t){const e=new zw(t),n=[],i=[],a=[];function s(d){m.camera=d,n.length=0,i.length=0,a.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function c(d){a.push(d)}function u(){e.setup(n)}function h(d){e.setupView(n,d)}const m={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:m,setupLights:u,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function Bw(t){let e=new WeakMap;function n(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new fv(t),e.set(a,[o])):s>=r.length?(o=new fv(t),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gw=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],Vw=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],hv=new Gt,Lo=new j,Bf=new j;function kw(t,e,n){let i=new Kb;const a=new pt,s=new pt,r=new Ht,o=new e2,c=new t2,u={},h=n.maxTextureSize,m={[Gs]:zn,[zn]:Gs,[oa]:oa},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Fw,fragmentShader:Hw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Jn;g.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Sa(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let f=this.type;this.render=function(A,N,y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;this.type===BA&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=eu);const R=t.getRenderTarget(),w=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),F=t.state;F.setBlending(fa),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=f!==this.type;W&&N.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(k=>k.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,k=A.length;z<k;z++){const I=A[z],P=I.shadow;if(P===void 0){ze("WebGLShadowMap:",I,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const q=P.getFrameExtents();a.multiply(q),s.copy(P.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/q.x),a.x=s.x*q.x,P.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/q.y),a.y=s.y*q.y,P.mapSize.y=s.y));const V=t.state.buffers.depth.getReversed();if(P.camera._reversedDepth=V,P.map===null||W===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Fo){if(I.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Ti(a.x,a.y,{format:ks,type:Zi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),P.map.texture.name=I.name+".shadowMap",P.map.depthTexture=new bl(a.x,a.y,Vi),P.map.depthTexture.name=I.name+".shadowMapDepth",P.map.depthTexture.format=ya,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=un,P.map.depthTexture.magFilter=un}else I.isPointLight?(P.map=new rE(a.x),P.map.depthTexture=new qN(a.x,qi)):(P.map=new Ti(a.x,a.y),P.map.depthTexture=new bl(a.x,a.y,qi)),P.map.depthTexture.name=I.name+".shadowMap",P.map.depthTexture.format=ya,this.type===eu?(P.map.depthTexture.compareFunction=V?n0:t0,P.map.depthTexture.minFilter=vn,P.map.depthTexture.magFilter=vn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=un,P.map.depthTexture.magFilter=un);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==a.x||P.map.height!==a.y)&&P.map.setSize(a.x,a.y);const Z=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();I.isPointLight!==!0&&P.updateMatrices(I,y);for(let ne=0;ne<Z;ne++){const Te=P.getCamera(ne);if(I.isPointLight){const be=P.camera,Ge=P.matrix,Xe=I.distance||be.far;Xe!==be.far&&(be.far=Xe,be.updateProjectionMatrix()),Lo.setFromMatrixPosition(I.matrixWorld),be.position.copy(Lo),Bf.copy(be.position),Bf.add(Gw[ne]),be.up.copy(Vw[ne]),be.lookAt(Bf),be.updateMatrixWorld(),Ge.makeTranslation(-Lo.x,-Lo.y,-Lo.z),hv.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),P._frustum.setFromProjectionMatrix(hv,be.coordinateSystem,be.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)t.setRenderTarget(P.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(P.map),t.clear());const be=P.getViewport(ne);r.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),F.viewport(r)}i=P.getFrustum(ne),S(N,y,Te,I,this.type)}P.isPointLightShadow!==!0&&this.type===Fo&&v(P,y),P.needsUpdate=!1}f=this.type,x.needsUpdate=!1,t.setRenderTarget(R,w,O)};function v(A,N){const y=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new Ti(a.x,a.y,{format:ks,type:Zi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(N,null,y,d,b,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(N,null,y,p,b,null)}function M(A,N,y,R){let w=null;const O=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)w=O;else if(w=y.isPointLight===!0?c:o,t.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const F=w.uuid,W=N.uuid;let z=u[F];z===void 0&&(z={},u[F]=z);let k=z[W];k===void 0&&(k=w.clone(),z[W]=k,N.addEventListener("dispose",T)),w=k}if(w.visible=N.visible,w.wireframe=N.wireframe,R===Fo?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:m[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=t.properties.get(w);F.light=y}return w}function S(A,N,y,R,w){if(A.visible===!1)return;if(A.layers.test(N.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Fo)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const W=e.update(A),z=A.material;if(Array.isArray(z)){const k=W.groups;for(let I=0,P=k.length;I<P;I++){const q=k[I],V=z[q.materialIndex];if(V&&V.visible){const Z=M(A,V,R,w);A.onBeforeShadow(t,A,N,y,W,Z,q),t.renderBufferDirect(y,null,W,Z,A,q),A.onAfterShadow(t,A,N,y,W,Z,q)}}}else if(z.visible){const k=M(A,z,R,w);A.onBeforeShadow(t,A,N,y,W,k,null),t.renderBufferDirect(y,null,W,k,A,null),A.onAfterShadow(t,A,N,y,W,k,null)}}const F=A.children;for(let W=0,z=F.length;W<z;W++)S(F[W],N,y,R,w)}function T(A){A.target.removeEventListener("dispose",T);for(const y in u){const R=u[y],w=A.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}function jw(t,e){function n(){let U=!1;const ue=new Ht;let $=null;const de=new Ht(0,0,0,0);return{setMask:function(ge){$!==ge&&!U&&(t.colorMask(ge,ge,ge,ge),$=ge)},setLocked:function(ge){U=ge},setClear:function(ge,ae,Le,Ae,Rt){Rt===!0&&(ge*=Ae,ae*=Ae,Le*=Ae),ue.set(ge,ae,Le,Ae),de.equals(ue)===!1&&(t.clearColor(ge,ae,Le,Ae),de.copy(ue))},reset:function(){U=!1,$=null,de.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,$=null,de=null,ge=null;return{setReversed:function(ae){if(ue!==ae){const Le=e.get("EXT_clip_control");ae?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ue=ae;const Ae=ge;ge=null,this.setClear(Ae)}},getReversed:function(){return ue},setTest:function(ae){ae?ie(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(ae){$!==ae&&!U&&(t.depthMask(ae),$=ae)},setFunc:function(ae){if(ue&&(ae=_N[ae]),de!==ae){switch(ae){case $h:t.depthFunc(t.NEVER);break;case ep:t.depthFunc(t.ALWAYS);break;case tp:t.depthFunc(t.LESS);break;case _l:t.depthFunc(t.LEQUAL);break;case np:t.depthFunc(t.EQUAL);break;case ip:t.depthFunc(t.GEQUAL);break;case ap:t.depthFunc(t.GREATER);break;case sp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=ae}},setLocked:function(ae){U=ae},setClear:function(ae){ge!==ae&&(ge=ae,ue&&(ae=1-ae),t.clearDepth(ae))},reset:function(){U=!1,$=null,de=null,ge=null,ue=!1}}}function a(){let U=!1,ue=null,$=null,de=null,ge=null,ae=null,Le=null,Ae=null,Rt=null;return{setTest:function(mt){U||(mt?ie(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(mt){ue!==mt&&!U&&(t.stencilMask(mt),ue=mt)},setFunc:function(mt,pi,Ri){($!==mt||de!==pi||ge!==Ri)&&(t.stencilFunc(mt,pi,Ri),$=mt,de=pi,ge=Ri)},setOp:function(mt,pi,Ri){(ae!==mt||Le!==pi||Ae!==Ri)&&(t.stencilOp(mt,pi,Ri),ae=mt,Le=pi,Ae=Ri)},setLocked:function(mt){U=mt},setClear:function(mt){Rt!==mt&&(t.clearStencil(mt),Rt=mt)},reset:function(){U=!1,ue=null,$=null,de=null,ge=null,ae=null,Le=null,Ae=null,Rt=null}}}const s=new n,r=new i,o=new a,c=new WeakMap,u=new WeakMap;let h={},m={},d={},p=new WeakMap,g=[],b=null,x=!1,f=null,v=null,M=null,S=null,T=null,A=null,N=null,y=new it(0,0,0),R=0,w=!1,O=null,F=null,W=null,z=null,k=null;const I=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,q=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),P=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),P=q>=2);let Z=null,ne={};const Te=t.getParameter(t.SCISSOR_BOX),be=t.getParameter(t.VIEWPORT),Ge=new Ht().fromArray(Te),Xe=new Ht().fromArray(be);function ot(U,ue,$,de){const ge=new Uint8Array(4),ae=t.createTexture();t.bindTexture(U,ae),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<$;Le++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(ue+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return ae}const K={};K[t.TEXTURE_2D]=ot(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=ot(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=ot(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=ot(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),r.setFunc(_l),Pe(!1),Ve(px),ie(t.CULL_FACE),He(fa);function ie(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function ve(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function Fe(U,ue){return d[U]!==ue?(t.bindFramebuffer(U,ue),d[U]=ue,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ue),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function xe(U,ue){let $=g,de=!1;if(U){$=p.get(ue),$===void 0&&($=[],p.set(ue,$));const ge=U.textures;if($.length!==ge.length||$[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Le=ge.length;ae<Le;ae++)$[ae]=t.COLOR_ATTACHMENT0+ae;$.length=ge.length,de=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,de=!0);de&&t.drawBuffers($)}function re(U){return b!==U?(t.useProgram(U),b=U,!0):!1}const Ie={[vr]:t.FUNC_ADD,[HA]:t.FUNC_SUBTRACT,[GA]:t.FUNC_REVERSE_SUBTRACT};Ie[VA]=t.MIN,Ie[kA]=t.MAX;const _e={[jA]:t.ZERO,[XA]:t.ONE,[WA]:t.SRC_COLOR,[Tb]:t.SRC_ALPHA,[JA]:t.SRC_ALPHA_SATURATE,[KA]:t.DST_COLOR,[qA]:t.DST_ALPHA,[YA]:t.ONE_MINUS_SRC_COLOR,[Ab]:t.ONE_MINUS_SRC_ALPHA,[QA]:t.ONE_MINUS_DST_COLOR,[ZA]:t.ONE_MINUS_DST_ALPHA,[$A]:t.CONSTANT_COLOR,[eN]:t.ONE_MINUS_CONSTANT_COLOR,[tN]:t.CONSTANT_ALPHA,[nN]:t.ONE_MINUS_CONSTANT_ALPHA};function He(U,ue,$,de,ge,ae,Le,Ae,Rt,mt){if(U===fa){x===!0&&(ve(t.BLEND),x=!1);return}if(x===!1&&(ie(t.BLEND),x=!0),U!==FA){if(U!==f||mt!==w){if((v!==vr||T!==vr)&&(t.blendEquation(t.FUNC_ADD),v=vr,T=vr),mt)switch(U){case nl:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pu:t.blendFunc(t.ONE,t.ONE);break;case mx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ut("WebGLState: Invalid blending: ",U);break}else switch(U){case nl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case mx:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gx:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",U);break}M=null,S=null,A=null,N=null,y.set(0,0,0),R=0,f=U,w=mt}return}ge=ge||ue,ae=ae||$,Le=Le||de,(ue!==v||ge!==T)&&(t.blendEquationSeparate(Ie[ue],Ie[ge]),v=ue,T=ge),($!==M||de!==S||ae!==A||Le!==N)&&(t.blendFuncSeparate(_e[$],_e[de],_e[ae],_e[Le]),M=$,S=de,A=ae,N=Le),(Ae.equals(y)===!1||Rt!==R)&&(t.blendColor(Ae.r,Ae.g,Ae.b,Rt),y.copy(Ae),R=Rt),f=U,w=!1}function Ue(U,ue){U.side===oa?ve(t.CULL_FACE):ie(t.CULL_FACE);let $=U.side===zn;ue&&($=!$),Pe($),U.blending===nl&&U.transparent===!1?He(fa):He(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const de=U.stencilWrite;o.setTest(de),de&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Qe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(U){O!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),O=U)}function Ve(U){U!==PA?(ie(t.CULL_FACE),U!==F&&(U===px?t.cullFace(t.BACK):U===zA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),F=U}function Ot(U){U!==W&&(P&&t.lineWidth(U),W=U)}function Qe(U,ue,$){U?(ie(t.POLYGON_OFFSET_FILL),(z!==ue||k!==$)&&(z=ue,k=$,r.getReversed()&&(ue=-ue),t.polygonOffset(ue,$))):ve(t.POLYGON_OFFSET_FILL)}function $e(U){U?ie(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function vt(U){U===void 0&&(U=t.TEXTURE0+I-1),Z!==U&&(t.activeTexture(U),Z=U)}function L(U,ue,$){$===void 0&&(Z===null?$=t.TEXTURE0+I-1:$=Z);let de=ne[$];de===void 0&&(de={type:void 0,texture:void 0},ne[$]=de),(de.type!==U||de.texture!==ue)&&(Z!==$&&(t.activeTexture($),Z=$),t.bindTexture(U,ue||K[U]),de.type=U,de.texture=ue)}function Zt(){const U=ne[Z];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ct(){try{t.compressedTexImage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function _(){try{t.texSubImage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function B(){try{t.texSubImage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function se(){try{t.texStorage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function oe(){try{t.texStorage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function J(){try{t.texImage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function te(){try{t.texImage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function le(U){return m[U]!==void 0?m[U]:t.getParameter(U)}function we(U,ue){m[U]!==ue&&(t.pixelStorei(U,ue),m[U]=ue)}function fe(U){Ge.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ge.copy(U))}function ce(U){Xe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Xe.copy(U))}function De(U,ue){let $=u.get(ue);$===void 0&&($=new WeakMap,u.set(ue,$));let de=$.get(U);de===void 0&&(de=t.getUniformBlockIndex(ue,U.name),$.set(U,de))}function Oe(U,ue){const de=u.get(ue).get(U);c.get(ue)!==de&&(t.uniformBlockBinding(ue,de,U.__bindingPointIndex),c.set(ue,de))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},m={},Z=null,ne={},d={},p=new WeakMap,g=[],b=null,x=!1,f=null,v=null,M=null,S=null,T=null,A=null,N=null,y=new it(0,0,0),R=0,w=!1,O=null,F=null,W=null,z=null,k=null,Ge.set(0,0,t.canvas.width,t.canvas.height),Xe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ie,disable:ve,bindFramebuffer:Fe,drawBuffers:xe,useProgram:re,setBlending:He,setMaterial:Ue,setFlipSided:Pe,setCullFace:Ve,setLineWidth:Ot,setPolygonOffset:Qe,setScissorTest:$e,activeTexture:vt,bindTexture:L,unbindTexture:Zt,compressedTexImage2D:ct,compressedTexImage3D:C,texImage2D:J,texImage3D:te,pixelStorei:we,getParameter:le,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:se,texStorage3D:oe,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:fe,viewport:ce,reset:We}}function Xw(t,e,n,i,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new pt,h=new WeakMap,m=new Set;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,_){return g?new OffscreenCanvas(C,_):Vu("canvas")}function x(C,_,B){let X=1;const Q=ct(C);if((Q.width>B||Q.height>B)&&(X=B/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const se=Math.floor(X*Q.width),oe=Math.floor(X*Q.height);d===void 0&&(d=b(se,oe));const J=_?b(se,oe):d;return J.width=se,J.height=oe,J.getContext("2d").drawImage(C,0,0,se,oe),ze("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+se+"x"+oe+")."),J}else return"data"in C&&ze("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function f(C){return C.generateMipmaps}function v(C){t.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(C,_,B,X,Q,se=!1){if(C!==null){if(t[C]!==void 0)return t[C];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe;X&&(oe=e.get("EXT_texture_norm16"),oe||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===t.RED&&(B===t.FLOAT&&(J=t.R32F),B===t.HALF_FLOAT&&(J=t.R16F),B===t.UNSIGNED_BYTE&&(J=t.R8),B===t.UNSIGNED_SHORT&&oe&&(J=oe.R16_EXT),B===t.SHORT&&oe&&(J=oe.R16_SNORM_EXT)),_===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.R8UI),B===t.UNSIGNED_SHORT&&(J=t.R16UI),B===t.UNSIGNED_INT&&(J=t.R32UI),B===t.BYTE&&(J=t.R8I),B===t.SHORT&&(J=t.R16I),B===t.INT&&(J=t.R32I)),_===t.RG&&(B===t.FLOAT&&(J=t.RG32F),B===t.HALF_FLOAT&&(J=t.RG16F),B===t.UNSIGNED_BYTE&&(J=t.RG8),B===t.UNSIGNED_SHORT&&oe&&(J=oe.RG16_EXT),B===t.SHORT&&oe&&(J=oe.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RG8UI),B===t.UNSIGNED_SHORT&&(J=t.RG16UI),B===t.UNSIGNED_INT&&(J=t.RG32UI),B===t.BYTE&&(J=t.RG8I),B===t.SHORT&&(J=t.RG16I),B===t.INT&&(J=t.RG32I)),_===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RGB8UI),B===t.UNSIGNED_SHORT&&(J=t.RGB16UI),B===t.UNSIGNED_INT&&(J=t.RGB32UI),B===t.BYTE&&(J=t.RGB8I),B===t.SHORT&&(J=t.RGB16I),B===t.INT&&(J=t.RGB32I)),_===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),B===t.UNSIGNED_INT&&(J=t.RGBA32UI),B===t.BYTE&&(J=t.RGBA8I),B===t.SHORT&&(J=t.RGBA16I),B===t.INT&&(J=t.RGBA32I)),_===t.RGB&&(B===t.UNSIGNED_SHORT&&oe&&(J=oe.RGB16_EXT),B===t.SHORT&&oe&&(J=oe.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),_===t.RGBA){const te=se?Hu:st.getTransfer(Q);B===t.FLOAT&&(J=t.RGBA32F),B===t.HALF_FLOAT&&(J=t.RGBA16F),B===t.UNSIGNED_BYTE&&(J=te===_t?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&oe&&(J=oe.RGBA16_EXT),B===t.SHORT&&oe&&(J=oe.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(C,_){let B;return C?_===null||_===qi||_===Sl?B=t.DEPTH24_STENCIL8:_===Vi?B=t.DEPTH32F_STENCIL8:_===yl&&(B=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qi||_===Sl?B=t.DEPTH_COMPONENT24:_===Vi?B=t.DEPTH_COMPONENT32F:_===yl&&(B=t.DEPTH_COMPONENT16),B}function A(C,_){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==vn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function N(C){const _=C.target;_.removeEventListener("dispose",N),R(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&m.delete(_)}function y(C){const _=C.target;_.removeEventListener("dispose",y),O(_)}function R(C){const _=i.get(C);if(_.__webglInit===void 0)return;const B=C.source,X=p.get(B);if(X){const Q=X[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(C),Object.keys(X).length===0&&p.delete(B)}i.remove(C)}function w(C){const _=i.get(C);t.deleteTexture(_.__webglTexture);const B=C.source,X=p.get(B);delete X[_.__cacheKey],r.memory.textures--}function O(C){const _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Q=0;Q<_.__webglFramebuffer[X].length;Q++)t.deleteFramebuffer(_.__webglFramebuffer[X][Q]);else t.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)t.deleteFramebuffer(_.__webglFramebuffer[X]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=C.textures;for(let X=0,Q=B.length;X<Q;X++){const se=i.get(B[X]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),r.memory.textures--),i.remove(B[X])}i.remove(C)}let F=0;function W(){F=0}function z(){return F}function k(C){F=C}function I(){const C=F;return C>=a.maxTextures&&ze("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+a.maxTextures),F+=1,C}function P(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function q(C,_){const B=i.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const X=C.image;if(X===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(B,C,_);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+_)}function V(C,_){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){ve(B,C,_);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+_)}function Z(C,_){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){ve(B,C,_);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+_)}function ne(C,_){const B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Fe(B,C,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+_)}const Te={[rp]:t.REPEAT,[ca]:t.CLAMP_TO_EDGE,[op]:t.MIRRORED_REPEAT},be={[un]:t.NEAREST,[sN]:t.NEAREST_MIPMAP_NEAREST,[rc]:t.NEAREST_MIPMAP_LINEAR,[vn]:t.LINEAR,[lf]:t.LINEAR_MIPMAP_NEAREST,[Ts]:t.LINEAR_MIPMAP_LINEAR},Ge={[cN]:t.NEVER,[pN]:t.ALWAYS,[uN]:t.LESS,[t0]:t.LEQUAL,[dN]:t.EQUAL,[n0]:t.GEQUAL,[fN]:t.GREATER,[hN]:t.NOTEQUAL};function Xe(C,_){if(_.type===Vi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===vn||_.magFilter===lf||_.magFilter===rc||_.magFilter===Ts||_.minFilter===vn||_.minFilter===lf||_.minFilter===rc||_.minFilter===Ts)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,Te[_.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Te[_.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Te[_.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,be[_.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,be[_.minFilter]),_.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===un||_.minFilter!==rc&&_.minFilter!==Ts||_.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ot(C,_){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",N));const X=_.source;let Q=p.get(X);Q===void 0&&(Q={},p.set(X,Q));const se=P(_);if(se!==C.__cacheKey){Q[se]===void 0&&(Q[se]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,B=!0),Q[se].usedTimes++;const oe=Q[C.__cacheKey];oe!==void 0&&(Q[C.__cacheKey].usedTimes--,oe.usedTimes===0&&w(_)),C.__cacheKey=se,C.__webglTexture=Q[se].texture}return B}function K(C,_,B){return Math.floor(Math.floor(C/B)/_)}function ie(C,_,B,X){const se=C.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,B,X,_.data);else{se.sort((we,fe)=>we.start-fe.start);let oe=0;for(let we=1;we<se.length;we++){const fe=se[oe],ce=se[we],De=fe.start+fe.count,Oe=K(ce.start,_.width,4),We=K(fe.start,_.width,4);ce.start<=De+1&&Oe===We&&K(ce.start+ce.count-1,_.width,4)===Oe?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++oe,se[oe]=ce)}se.length=oe+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),le=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let we=0,fe=se.length;we<fe;we++){const ce=se[we],De=Math.floor(ce.start/4),Oe=Math.ceil(ce.count/4),We=De%_.width,U=Math.floor(De/_.width),ue=Oe,$=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,We),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,We,U,ue,$,B,X,_.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,le)}}function ve(C,_,B){let X=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=t.TEXTURE_3D);const Q=ot(C,_),se=_.source;n.bindTexture(X,C.__webglTexture,t.TEXTURE0+B);const oe=i.get(se);if(se.version!==oe.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const $=st.getPrimaries(st.workingColorSpace),de=_.colorSpace===Ga?null:st.getPrimaries(_.colorSpace),ge=_.colorSpace===Ga||$===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let te=x(_.image,!1,a.maxTextureSize);te=Zt(_,te);const le=s.convert(_.format,_.colorSpace),we=s.convert(_.type);let fe=S(_.internalFormat,le,we,_.normalized,_.colorSpace,_.isVideoTexture);Xe(X,_);let ce;const De=_.mipmaps,Oe=_.isVideoTexture!==!0,We=oe.__version===void 0||Q===!0,U=se.dataReady,ue=A(_,te);if(_.isDepthTexture)fe=T(_.format===As,_.type),We&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,fe,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,fe,te.width,te.height,0,le,we,null));else if(_.isDataTexture)if(De.length>0){Oe&&We&&n.texStorage2D(t.TEXTURE_2D,ue,fe,De[0].width,De[0].height);for(let $=0,de=De.length;$<de;$++)ce=De[$],Oe?U&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ce.width,ce.height,le,we,ce.data):n.texImage2D(t.TEXTURE_2D,$,fe,ce.width,ce.height,0,le,we,ce.data);_.generateMipmaps=!1}else Oe?(We&&n.texStorage2D(t.TEXTURE_2D,ue,fe,te.width,te.height),U&&ie(_,te,le,we)):n.texImage2D(t.TEXTURE_2D,0,fe,te.width,te.height,0,le,we,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Oe&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,fe,De[0].width,De[0].height,te.depth);for(let $=0,de=De.length;$<de;$++)if(ce=De[$],_.format!==Ei)if(le!==null)if(Oe){if(U)if(_.layerUpdates.size>0){const ge=Xx(ce.width,ce.height,_.format,_.type);for(const ae of _.layerUpdates){const Le=ce.data.subarray(ae*ge/ce.data.BYTES_PER_ELEMENT,(ae+1)*ge/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ae,ce.width,ce.height,1,le,Le)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ce.width,ce.height,te.depth,le,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,fe,ce.width,ce.height,te.depth,0,ce.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ce.width,ce.height,te.depth,le,we,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,fe,ce.width,ce.height,te.depth,0,le,we,ce.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Oe&&We&&n.texStorage2D(t.TEXTURE_2D,ue,fe,De[0].width,De[0].height);for(let $=0,de=De.length;$<de;$++)ce=De[$],_.format!==Ei?le!==null?Oe?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,ce.width,ce.height,le,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,$,fe,ce.width,ce.height,0,ce.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ce.width,ce.height,le,we,ce.data):n.texImage2D(t.TEXTURE_2D,$,fe,ce.width,ce.height,0,le,we,ce.data)}else if(_.isDataArrayTexture)if(Oe){if(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,fe,te.width,te.height,te.depth),U)if(_.layerUpdates.size>0){const $=Xx(te.width,te.height,_.format,_.type);for(const de of _.layerUpdates){const ge=te.data.subarray(de*$/te.data.BYTES_PER_ELEMENT,(de+1)*$/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,te.width,te.height,1,le,we,ge)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,we,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,te.width,te.height,te.depth,0,le,we,te.data);else if(_.isData3DTexture)Oe?(We&&n.texStorage3D(t.TEXTURE_3D,ue,fe,te.width,te.height,te.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,we,te.data)):n.texImage3D(t.TEXTURE_3D,0,fe,te.width,te.height,te.depth,0,le,we,te.data);else if(_.isFramebufferTexture){if(We)if(Oe)n.texStorage2D(t.TEXTURE_2D,ue,fe,te.width,te.height);else{let $=te.width,de=te.height;for(let ge=0;ge<ue;ge++)n.texImage2D(t.TEXTURE_2D,ge,fe,$,de,0,le,we,null),$>>=1,de>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),te.parentNode!==$){$.appendChild(te),m.add(_),$.onpaint=de=>{const ge=de.changedElements;for(const ae of m)ge.includes(ae.image)&&(ae.needsUpdate=!0)},$.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const ge=t.RGBA,ae=t.RGBA,Le=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ge,ae,Le,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(Oe&&We){const $=ct(De[0]);n.texStorage2D(t.TEXTURE_2D,ue,fe,$.width,$.height)}for(let $=0,de=De.length;$<de;$++)ce=De[$],Oe?U&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,le,we,ce):n.texImage2D(t.TEXTURE_2D,$,fe,le,we,ce);_.generateMipmaps=!1}else if(Oe){if(We){const $=ct(te);n.texStorage2D(t.TEXTURE_2D,ue,fe,$.width,$.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le,we,te)}else n.texImage2D(t.TEXTURE_2D,0,fe,le,we,te);f(_)&&v(X),oe.__version=se.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Fe(C,_,B){if(_.image.length!==6)return;const X=ot(C,_),Q=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);const se=i.get(Q);if(Q.version!==se.__version||X===!0){n.activeTexture(t.TEXTURE0+B);const oe=st.getPrimaries(st.workingColorSpace),J=_.colorSpace===Ga?null:st.getPrimaries(_.colorSpace),te=_.colorSpace===Ga||oe===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const le=_.isCompressedTexture||_.image[0].isCompressedTexture,we=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let ae=0;ae<6;ae++)!le&&!we?fe[ae]=x(_.image[ae],!0,a.maxCubemapSize):fe[ae]=we?_.image[ae].image:_.image[ae],fe[ae]=Zt(_,fe[ae]);const ce=fe[0],De=s.convert(_.format,_.colorSpace),Oe=s.convert(_.type),We=S(_.internalFormat,De,Oe,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,ue=se.__version===void 0||X===!0,$=Q.dataReady;let de=A(_,ce);Xe(t.TEXTURE_CUBE_MAP,_);let ge;if(le){U&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,We,ce.width,ce.height);for(let ae=0;ae<6;ae++){ge=fe[ae].mipmaps;for(let Le=0;Le<ge.length;Le++){const Ae=ge[Le];_.format!==Ei?De!==null?U?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Ae.width,Ae.height,De,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,We,Ae.width,Ae.height,0,Ae.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Ae.width,Ae.height,De,Oe,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,We,Ae.width,Ae.height,0,De,Oe,Ae.data)}}}else{if(ge=_.mipmaps,U&&ue){ge.length>0&&de++;const ae=ct(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,We,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(we){U?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,fe[ae].width,fe[ae].height,De,Oe,fe[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,fe[ae].width,fe[ae].height,0,De,Oe,fe[ae].data);for(let Le=0;Le<ge.length;Le++){const Rt=ge[Le].image[ae].image;U?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,Rt.width,Rt.height,De,Oe,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,We,Rt.width,Rt.height,0,De,Oe,Rt.data)}}else{U?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,De,Oe,fe[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,De,Oe,fe[ae]);for(let Le=0;Le<ge.length;Le++){const Ae=ge[Le];U?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,De,Oe,Ae.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,We,De,Oe,Ae.image[ae])}}}f(_)&&v(t.TEXTURE_CUBE_MAP),se.__version=Q.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function xe(C,_,B,X,Q,se){const oe=s.convert(B.format,B.colorSpace),J=s.convert(B.type),te=S(B.internalFormat,oe,J,B.normalized,B.colorSpace),le=i.get(_),we=i.get(B);if(we.__renderTarget=_,!le.__hasExternalTextures){const fe=Math.max(1,_.width>>se),ce=Math.max(1,_.height>>se);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,se,te,fe,ce,_.depth,0,oe,J,null):n.texImage2D(Q,se,te,fe,ce,0,oe,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),vt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Q,we.__webglTexture,0,$e(_)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Q,we.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(C,_,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),_.depthBuffer){const X=_.depthTexture,Q=X&&X.isDepthTexture?X.type:null,se=T(_.stencilBuffer,Q),oe=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;vt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e(_),se,_.width,_.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e(_),se,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,se,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,C)}else{const X=_.textures;for(let Q=0;Q<X.length;Q++){const se=X[Q],oe=s.convert(se.format,se.colorSpace),J=s.convert(se.type),te=S(se.internalFormat,oe,J,se.normalized,se.colorSpace);vt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e(_),te,_.width,_.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e(_),te,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,te,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(C,_,B){const X=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",N)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,_.depthTexture);const le=s.convert(_.depthTexture.format),we=s.convert(_.depthTexture.type);let fe;_.depthTexture.format===ya?fe=t.DEPTH_COMPONENT24:_.depthTexture.format===As&&(fe=t.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,fe,_.width,_.height,0,le,we,null)}}else q(_.depthTexture,0);const se=Q.__webglTexture,oe=$e(_),J=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,te=_.depthTexture.format===As?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===ya)vt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,se,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,te,J,se,0);else if(_.depthTexture.format===As)vt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,se,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,te,J,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _e(C){const _=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=X}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)Ie(_.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?Ie(_.__webglFramebuffer[0],C,0):Ie(_.__webglFramebuffer,C,0)}else if(B){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=t.createRenderbuffer(),re(_.__webglDepthbuffer[X],C,!1);else{const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,se)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),re(_.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(C,_,B){const X=i.get(C);_!==void 0&&xe(X.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&_e(C)}function Ue(C){const _=C.texture,B=i.get(C),X=i.get(_);C.addEventListener("dispose",y);const Q=C.textures,se=C.isWebGLCubeRenderTarget===!0,oe=Q.length>1;if(oe||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=_.version,r.memory.textures++),se){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let te=0;te<_.mipmaps.length;te++)B.__webglFramebuffer[J][te]=t.createFramebuffer()}else B.__webglFramebuffer[J]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)B.__webglFramebuffer[J]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(oe)for(let J=0,te=Q.length;J<te;J++){const le=i.get(Q[J]);le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture(),r.memory.textures++)}if(C.samples>0&&vt(C)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<Q.length;J++){const te=Q[J];B.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[J]);const le=s.convert(te.format,te.colorSpace),we=s.convert(te.type),fe=S(te.internalFormat,le,we,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),ce=$e(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,fe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,B.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),re(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)xe(B.__webglFramebuffer[J][te],C,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else xe(B.__webglFramebuffer[J],C,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(_)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let J=0,te=Q.length;J<te;J++){const le=Q[J],we=i.get(le);let fe=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,we.__webglTexture),Xe(fe,le),xe(B.__webglFramebuffer,C,le,t.COLOR_ATTACHMENT0+J,fe,0),f(le)&&v(fe)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,X.__webglTexture),Xe(J,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)xe(B.__webglFramebuffer[te],C,_,t.COLOR_ATTACHMENT0,J,te);else xe(B.__webglFramebuffer,C,_,t.COLOR_ATTACHMENT0,J,0);f(_)&&v(J),n.unbindTexture()}C.depthBuffer&&_e(C)}function Pe(C){const _=C.textures;for(let B=0,X=_.length;B<X;B++){const Q=_[B];if(f(Q)){const se=M(C),oe=i.get(Q).__webglTexture;n.bindTexture(se,oe),v(se),n.unbindTexture()}}}const Ve=[],Ot=[];function Qe(C){if(C.samples>0){if(vt(C)===!1){const _=C.textures,B=C.width,X=C.height;let Q=t.COLOR_BUFFER_BIT;const se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(C),J=_.length>1;if(J)for(let le=0;le<_.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<_.length;le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const we=i.get(_[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,B,X,0,0,B,X,Q,t.NEAREST),c===!0&&(Ve.length=0,Ot.length=0,Ve.push(t.COLOR_ATTACHMENT0+le),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Ve.push(se),Ot.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ot)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let le=0;le<_.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const we=i.get(_[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,we,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const _=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function $e(C){return Math.min(a.maxSamples,C.samples)}function vt(C){const _=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(C){const _=r.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function Zt(C,_){const B=C.colorSpace,X=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Fu&&B!==Ga&&(st.getTransfer(B)===_t?(X!==Ei||Q!==di)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",B)),_}function ct(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=W,this.getTextureUnits=z,this.setTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=ne,this.rebindTextures=He,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ww(t,e){function n(i,a=Ga){let s;const r=st.getTransfer(a);if(i===di)return t.UNSIGNED_BYTE;if(i===Km)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Bb)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Fb)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Pb)return t.BYTE;if(i===zb)return t.SHORT;if(i===yl)return t.UNSIGNED_SHORT;if(i===Zm)return t.INT;if(i===qi)return t.UNSIGNED_INT;if(i===Vi)return t.FLOAT;if(i===Zi)return t.HALF_FLOAT;if(i===Hb)return t.ALPHA;if(i===Gb)return t.RGB;if(i===Ei)return t.RGBA;if(i===ya)return t.DEPTH_COMPONENT;if(i===As)return t.DEPTH_STENCIL;if(i===Vb)return t.RED;if(i===Jm)return t.RED_INTEGER;if(i===ks)return t.RG;if(i===$m)return t.RG_INTEGER;if(i===e0)return t.RGBA_INTEGER;if(i===tu||i===nu||i===iu||i===au)if(r===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===tu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===iu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===tu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===iu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lp||i===cp||i===up||i===dp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===lp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===up)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fp||i===hp||i===pp||i===mp||i===gp||i===zu||i===xp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fp||i===hp)return r===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===pp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===mp)return s.COMPRESSED_R11_EAC;if(i===gp)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zu)return s.COMPRESSED_RG11_EAC;if(i===xp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vp||i===_p||i===yp||i===Sp||i===bp||i===Ep||i===Mp||i===Tp||i===Ap||i===Np||i===Rp||i===Cp||i===wp||i===Dp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_p)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ep)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ap)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Np)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lp||i===Up||i===Op)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Lp)return r===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Up)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Op)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ip||i===Pp||i===Bu||i===zp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ip)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Pp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Yw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new eE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ki({vertexShader:Yw,fragmentShader:qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Sa(new xd(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kw extends Ks{constructor(e,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",c=1,u=null,h=null,m=null,d=null,p=null,g=null;const b=typeof XRWebGLBinding<"u",x=new Zw,f={},v=n.getContextAttributes();let M=null,S=null;const T=[],A=[],N=new pt;let y=null,R=null;const w=new oi;w.viewport=new Ht;const O=new oi;O.viewport=new Ht;const F=[w,O],W=new i2;let z=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=T[K];return ie===void 0&&(ie=new xf,T[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=T[K];return ie===void 0&&(ie=new xf,T[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=T[K];return ie===void 0&&(ie=new xf,T[K]=ie),ie.getHandSpace()};function I(K){const ie=A.indexOf(K.inputSource);if(ie===-1)return;const ve=T[ie];ve!==void 0&&(ve.update(K.inputSource,K.frame,u||r),ve.dispatchEvent({type:K.type,data:K.inputSource}))}function P(){a.removeEventListener("select",I),a.removeEventListener("selectstart",I),a.removeEventListener("selectend",I),a.removeEventListener("squeeze",I),a.removeEventListener("squeezestart",I),a.removeEventListener("squeezeend",I),a.removeEventListener("end",P),a.removeEventListener("inputsourceschange",q);for(let K=0;K<T.length;K++){const ie=A[K];ie!==null&&(A[K]=null,T[K].disconnect(ie))}z=null,k=null,x.reset();for(const K in f)delete f[K];if(e.setRenderTarget(M),p=null,d=null,m=null,a=null,S=null,ot.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(N.width,N.height,!1),R!==null){const K=R.camera;K.fov=R.fov,K.zoom=R.zoom,K.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return m===null&&b&&(m=new XRWebGLBinding(a,n)),m},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(M=e.getRenderTarget(),a.addEventListener("select",I),a.addEventListener("selectstart",I),a.addEventListener("selectend",I),a.addEventListener("squeeze",I),a.addEventListener("squeezestart",I),a.addEventListener("squeezeend",I),a.addEventListener("end",P),a.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(N),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Fe=null,xe=null;v.depth&&(xe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=v.stencil?As:ya,Fe=v.stencil?Sl:qi);const re={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:s};m=this.getBinding(),d=m.createProjectionLayer(re),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ti(d.textureWidth,d.textureHeight,{format:Ei,type:di,depthTexture:new bl(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,ve),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ti(p.framebufferWidth,p.framebufferHeight,{format:Ei,type:di,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,r=await a.requestReferenceSpace(o),ot.setContext(a),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(K){for(let ie=0;ie<K.removed.length;ie++){const ve=K.removed[ie],Fe=A.indexOf(ve);Fe>=0&&(A[Fe]=null,T[Fe].disconnect(ve))}for(let ie=0;ie<K.added.length;ie++){const ve=K.added[ie];let Fe=A.indexOf(ve);if(Fe===-1){for(let re=0;re<T.length;re++)if(re>=A.length){A.push(ve),Fe=re;break}else if(A[re]===null){A[re]=ve,Fe=re;break}if(Fe===-1)break}const xe=T[Fe];xe&&xe.connect(ve)}}const V=new j,Z=new j;function ne(K,ie,ve){V.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);const Fe=V.distanceTo(Z),xe=ie.projectionMatrix.elements,re=ve.projectionMatrix.elements,Ie=xe[14]/(xe[10]-1),_e=xe[14]/(xe[10]+1),He=(xe[9]+1)/xe[5],Ue=(xe[9]-1)/xe[5],Pe=(xe[8]-1)/xe[0],Ve=(re[8]+1)/re[0],Ot=Ie*Pe,Qe=Ie*Ve,$e=Fe/(-Pe+Ve),vt=$e*-Pe;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(vt),K.translateZ($e),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const L=Ie+$e,Zt=_e+$e,ct=Ot-vt,C=Qe+(Fe-vt),_=He*_e/Zt*L,B=Ue*_e/Zt*L;K.projectionMatrix.makePerspective(ct,C,_,B,L,Zt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Te(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ie=K.near,ve=K.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),W.near=O.near=w.near=ie,W.far=O.far=w.far=ve,(z!==W.near||k!==W.far)&&(a.updateRenderState({depthNear:W.near,depthFar:W.far}),z=W.near,k=W.far),W.layers.mask=K.layers.mask|6,w.layers.mask=W.layers.mask&-5,O.layers.mask=W.layers.mask&-3;const Fe=K.parent,xe=W.cameras;Te(W,Fe);for(let re=0;re<xe.length;re++)Te(xe[re],Fe);xe.length===2?ne(W,w,O):W.projectionMatrix.copy(w.projectionMatrix),R===null&&K.isPerspectiveCamera&&(R={camera:K,fov:K.fov,zoom:K.zoom}),be(K,W,Fe)};function be(K,ie,ve){ve===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(ve.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Bp*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(W)},this.getCameraTexture=function(K){return f[K]};let Ge=null;function Xe(K,ie){if(h=ie.getViewerPose(u||r),g=ie,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Fe=!1;ve.length!==W.cameras.length&&(W.cameras.length=0,Fe=!0);for(let _e=0;_e<ve.length;_e++){const He=ve[_e];let Ue=null;if(p!==null)Ue=p.getViewport(He);else{const Ve=m.getViewSubImage(d,He);Ue=Ve.viewport,_e===0&&(e.setRenderTargetTextures(S,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(S))}let Pe=F[_e];Pe===void 0&&(Pe=new oi,Pe.layers.enable(_e),Pe.viewport=new Ht,F[_e]=Pe),Pe.matrix.fromArray(He.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(He.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),_e===0&&(W.matrix.copy(Pe.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Fe===!0&&W.cameras.push(Pe)}const xe=a.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){m=i.getBinding();const _e=m.getDepthInformation(ve[0]);_e&&_e.isValid&&_e.texture&&x.init(_e,a.renderState)}if(xe&&xe.includes("camera-access")&&b){e.state.unbindTexture(),m=i.getBinding();for(let _e=0;_e<ve.length;_e++){const He=ve[_e].camera;if(He){let Ue=f[He];Ue||(Ue=new eE,f[He]=Ue);const Pe=m.getCameraImage(He);Ue.sourceTexture=Pe}}}}for(let ve=0;ve<T.length;ve++){const Fe=A[ve],xe=T[ve];Fe!==null&&xe!==void 0&&xe.update(Fe,ie,u||r)}Ge&&Ge(K,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const ot=new aE;ot.setAnimationLoop(Xe),this.setAnimationLoop=function(K){Ge=K},this.dispose=function(){}}}const Qw=new Gt,dE=new je;dE.set(-1,0,0,0,1,0,0,0,1);function Jw(t,e){function n(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function i(x,f){f.color.getRGB(x.fogColor.value,tE(t)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function a(x,f,v,M,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(x,f):f.isMeshLambertMaterial?(s(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(x,f),m(x,f)):f.isMeshPhongMaterial?(s(x,f),h(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(x,f),d(x,f),f.isMeshPhysicalMaterial&&p(x,f,S)):f.isMeshMatcapMaterial?(s(x,f),g(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),b(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(r(x,f),f.isLineDashedMaterial&&o(x,f)):f.isPointsMaterial?c(x,f,v,M):f.isSpriteMaterial?u(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,n(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===zn&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,n(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===zn&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,n(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,n(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const v=e.get(f),M=v.envMap,S=v.envMapRotation;M&&(x.envMap.value=M,x.envMapRotation.value.setFromMatrix4(Qw.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(dE),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,x.aoMapTransform))}function r(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform))}function o(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function c(x,f,v,M){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*v,x.scale.value=M*.5,f.map&&(x.map.value=f.map,n(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function u(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function h(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function m(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function d(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function p(x,f,v){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zn&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.retroreflectivity>0&&(x.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,f){f.matcap&&(x.matcap.value=f.matcap)}function b(x,f){const v=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function $w(t,e,n,i){let a={},s={},r=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){const A=T.program;i.uniformBlockBinding(S,A)}function u(S,T){let A=a[S.id];A===void 0&&(x(S),A=h(S),a[S.id]=A,S.addEventListener("dispose",v));const N=T.program;i.updateUBOMapping(S,N);const y=e.render.frame;s[S.id]!==y&&(d(S),s[S.id]=y)}function h(S){const T=m();S.__bindingPointIndex=T;const A=t.createBuffer(),N=S.__size,y=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,N,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function m(){for(let S=0;S<o;S++)if(r.indexOf(S)===-1)return r.push(S),S;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const T=a[S.id],A=S.uniforms,N=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let y=0,R=A.length;y<R;y++){const w=A[y];if(Array.isArray(w))for(let O=0,F=w.length;O<F;O++)p(w[O],y,O,N);else p(w,y,0,N)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,T,A,N){if(b(S,T,A,N)===!0){const y=S.__offset,R=S.value;if(Array.isArray(R)){let w=0;for(let O=0;O<R.length;O++){const F=R[O],W=f(F);g(F,S.__data,w),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(w+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,S.__data)}}function g(S,T,A){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,A)}function b(S,T,A,N){const y=S.value,R=T+"_"+A;if(N[R]===void 0)return typeof y=="number"||typeof y=="boolean"?N[R]=y:ArrayBuffer.isView(y)?N[R]=y.slice():N[R]=y.clone(),!0;{const w=N[R];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return N[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function x(S){const T=S.uniforms;let A=0;const N=16;for(let R=0,w=T.length;R<w;R++){const O=Array.isArray(T[R])?T[R]:[T[R]];for(let F=0,W=O.length;F<W;F++){const z=O[F],k=Array.isArray(z.value)?z.value:[z.value];for(let I=0,P=k.length;I<P;I++){const q=k[I],V=f(q),Z=A%N,ne=Z%V.boundary,Te=Z+ne;A+=ne,Te!==0&&N-Te<V.storage&&(A+=N-Te),z.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=A,A+=V.storage}}}const y=A%N;return y>0&&(A+=N-y),S.__size=A,S.__cache={},this}function f(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",S),T}function v(S){const T=S.target;T.removeEventListener("dispose",v);const A=r.indexOf(T.__bindingPointIndex);r.splice(A,1),t.deleteBuffer(a[T.id]),delete a[T.id],delete s[T.id]}function M(){for(const S in a)t.deleteBuffer(a[S]);r=[],a={},s={}}return{bind:c,update:u,dispose:M}}const eD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function tD(){return Oi===null&&(Oi=new VN(eD,16,16,ks,Zi),Oi.name="DFG_LUT",Oi.minFilter=vn,Oi.magFilter=vn,Oi.wrapS=ca,Oi.wrapT=ca,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class nD{constructor(e={}){const{canvas:n=xN(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:p=di}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;const b=p,x=new Set([e0,$m,Jm]),f=new Set([di,qi,yl,Sl,Km,Qm]),v=new Uint32Array(4),M=new Int32Array(4),S=new j;let T=null,A=null;const N=[],y=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1,F=null,W=null,z=null,k=null;this._outputColorSpace=ai;let I=0,P=0,q=null,V=-1,Z=null;const ne=new Ht,Te=new Ht;let be=null;const Ge=new it(0);let Xe=0,ot=n.width,K=n.height,ie=1,ve=null,Fe=null;const xe=new Ht(0,0,ot,K),re=new Ht(0,0,ot,K);let Ie=!1;const _e=new Kb;let He=!1,Ue=!1;const Pe=new Gt,Ve=new j,Ot=new Ht,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function vt(){return q===null?ie:1}let L=i;function Zt(E,D){return n.getContext(E,D)}let ct,C,_,B,X,Q,se,oe,J,te,le,we,fe,ce,De,Oe,We,U,ue,$,de,ge,ae;try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qm}`),n.addEventListener("webglcontextlost",Rt,!1),n.addEventListener("webglcontextrestored",mt,!1),n.addEventListener("webglcontextcreationerror",pi,!1),L===null){const D="webgl2";if(L=Zt(D,E),L===null)throw Zt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(E){throw n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",pi,!1),ut("WebGLRenderer: "+E.message),E}function Le(){ct=new tC(L),ct.init(),de=new Ww(L,ct),C=new X3(L,ct,e,de),_=new jw(L,ct),C.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),W=L.createFramebuffer(),z=L.createFramebuffer(),k=L.createFramebuffer(),B=new aC(L),X=new ww,Q=new Xw(L,ct,_,X,C,de,B),se=new eC(w),oe=new r2(L),ge=new k3(L,oe),J=new nC(L,oe,B,ge),te=new rC(L,J,oe,ge,B),U=new sC(L,C,Q),De=new W3(X),le=new Cw(w,se,ct,C,ge,De),we=new Jw(w,X),fe=new Lw,ce=new Bw(ct),We=new V3(w,se,_,te,g,c),Oe=new kw(w,te,C),ae=new $w(L,B,C,_),ue=new j3(L,ct,B),$=new iC(L,ct,B),B.programs=le.programs,w.capabilities=C,w.extensions=ct,w.properties=X,w.renderLists=fe,w.shadowMap=Oe,w.state=_,w.info=B}b!==di&&(R=new lC(b,n.width,n.height,o,a,s));const Ae=new Kw(w,L);this.xr=Ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=ct.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ct.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(ot,K,!1))},this.getSize=function(E){return E.set(ot,K)},this.setSize=function(E,D,Y=!0){if(Ae.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=E,K=D,n.width=Math.floor(E*ie),n.height=Math.floor(D*ie),Y===!0&&(n.style.width=E+"px",n.style.height=D+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(ot*ie,K*ie).floor()},this.setDrawingBufferSize=function(E,D,Y){ot=E,K=D,ie=Y,n.width=Math.floor(E*Y),n.height=Math.floor(D*Y),this.setViewport(0,0,E,D)},this.setEffects=function(E){if(b===di){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let D=0;D<E.length;D++)if(E[D].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ne)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,D,Y,H){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,D,Y,H),_.viewport(ne.copy(xe).multiplyScalar(ie).round())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,D,Y,H){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,D,Y,H),_.scissor(Te.copy(re).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(E){_.setScissorTest(Ie=E)},this.setOpaqueSort=function(E){ve=E},this.setTransparentSort=function(E){Fe=E},this.getClearColor=function(E){return E.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(E=!0,D=!0,Y=!0){let H=0;if(E){let G=!1;if(q!==null){const me=q.texture.format;G=x.has(me)}if(G){const me=q.texture.type,Se=f.has(me),pe=We.getClearColor(),Ee=We.getClearAlpha(),Ne=pe.r,qe=pe.g,et=pe.b;Se?(v[0]=Ne,v[1]=qe,v[2]=et,v[3]=Ee,L.clearBufferuiv(L.COLOR,0,v)):(M[0]=Ne,M[1]=qe,M[2]=et,M[3]=Ee,L.clearBufferiv(L.COLOR,0,M))}else H|=L.COLOR_BUFFER_BIT}D&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",pi,!1),We.dispose(),fe.dispose(),ce.dispose(),X.dispose(),se.dispose(),te.dispose(),ge.dispose(),ae.dispose(),le.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",h0),Ae.removeEventListener("sessionend",p0),ds.stop()};function Rt(E){E.preventDefault(),yx("WebGLRenderer: Context Lost."),O=!0}function mt(){yx("WebGLRenderer: Context Restored."),O=!1;const E=B.autoReset,D=Oe.enabled,Y=Oe.autoUpdate,H=Oe.needsUpdate,G=Oe.type;Le(),B.autoReset=E,Oe.enabled=D,Oe.autoUpdate=Y,Oe.needsUpdate=H,Oe.type=G}function pi(E){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ri(E){const D=E.target;D.removeEventListener("dispose",Ri),fE(D)}function fE(E){hE(E),X.remove(E)}function hE(E){const D=X.get(E).programs;D!==void 0&&(D.forEach(function(Y){le.releaseProgram(Y)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,Y,H,G,me){D===null&&(D=Qe);const Se=G.isMesh&&G.matrixWorld.determinantAffine()<0,pe=gE(E,D,Y,H,G);_.setMaterial(H,Se);let Ee=Y.index,Ne=1;if(H.wireframe===!0){if(Ee=J.getWireframeAttribute(Y),Ee===void 0)return;Ne=2}const qe=Y.drawRange,et=Y.attributes.position;let Me=qe.start*Ne,gt=(qe.start+qe.count)*Ne;me!==null&&(Me=Math.max(Me,me.start*Ne),gt=Math.min(gt,(me.start+me.count)*Ne)),Ee!==null?(Me=Math.max(Me,0),gt=Math.min(gt,Ee.count)):et!=null&&(Me=Math.max(Me,0),gt=Math.min(gt,et.count));const jt=gt-Me;if(jt<0||jt===1/0)return;ge.setup(G,H,pe,Y,Ee);let It,Tt=ue;if(Ee!==null&&(It=oe.get(Ee),Tt=$,Tt.setIndex(It)),G.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*vt()),Tt.setMode(L.LINES)):Tt.setMode(L.TRIANGLES);else if(G.isLine){let mn=H.linewidth;mn===void 0&&(mn=1),_.setLineWidth(mn*vt()),G.isLineSegments?Tt.setMode(L.LINES):G.isLineLoop?Tt.setMode(L.LINE_LOOP):Tt.setMode(L.LINE_STRIP)}else G.isPoints?Tt.setMode(L.POINTS):G.isSprite&&Tt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Tt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const mn=G._multiDrawStarts,ye=G._multiDrawCounts,bn=G._multiDrawCount,lt=Ee?oe.get(Ee).bytesPerElement:1,ei=X.get(H).currentProgram.getUniforms();for(let Ci=0;Ci<bn;Ci++)ei.setValue(L,"_gl_DrawID",Ci),Tt.render(mn[Ci]/lt,ye[Ci])}else if(G.isInstancedMesh)Tt.renderInstances(Me,jt,G.count);else if(Y.isInstancedBufferGeometry){const mn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ye=Math.min(Y.instanceCount,mn);Tt.renderInstances(Me,jt,ye)}else Tt.render(Me,jt)};function f0(E,D,Y,H){F!==null&&E.isNodeMaterial&&F.setObject(H,E),He===!0&&De.setState(E,Y,!1),E.transparent===!0&&E.side===oa&&E.forceSinglePass===!1?(E.side=zn,E.needsUpdate=!0,Hl(E,D,H),E.side=Gs,E.needsUpdate=!0,Hl(E,D,H),E.side=oa):Hl(E,D,H)}this.compile=function(E,D,Y=null){Y===null&&(Y=E),F!==null&&F.renderStart(E,D,Y),A=ce.get(Y),A.init(D),y.push(A),Y.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),E!==Y&&E.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),F!==null&&F.updateLights(A.state.lightsArray),Ue=this.localClippingEnabled,He=De.init(this.clippingPlanes,Ue),He===!0&&De.setGlobalState(this.clippingPlanes,D),F!==null&&Oe.render(A.state.shadowsArray,Y,D);const H=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const me=G.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const pe=me[Se];f0(pe,Y,D,G),H.add(pe)}else f0(me,Y,D,G),H.add(me)}),A=y.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(E,D,Y=null){const H=this.compile(E,D,Y);return new Promise(G=>{function me(){if(H.forEach(function(Se){const Ee=X.get(Se).currentProgram;(Ee===void 0||Ee.isReady())&&H.delete(Se)}),H.size===0){G(E);return}setTimeout(me,10)}ct.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let yd=null;function pE(E){yd&&yd(E)}function h0(){ds.stop()}function p0(){ds.start()}const ds=new aE;ds.setAnimationLoop(pE),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(E){yd=E,Ae.setAnimationLoop(E),E===null?ds.stop():ds.start()},Ae.addEventListener("sessionstart",h0),Ae.addEventListener("sessionend",p0),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;F!==null&&F.renderStart(E,D);const Y=Ae.enabled===!0&&Ae.isPresenting===!0,H=R!==null&&(q===null||Y)&&R.begin(w,q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(D),D=Ae.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,D,q),A=ce.get(E,y.length),A.init(D),A.state.textureUnits=Q.getTextureUnits(),y.push(A),Pe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),_e.setFromProjectionMatrix(Pe,ki,D.reversedDepth),Ue=this.localClippingEnabled,He=De.init(this.clippingPlanes,Ue),T=fe.get(E,N.length),T.init(),N.push(T),Ae.enabled===!0&&Ae.isPresenting===!0){const Se=w.xr.getDepthSensingMesh();Se!==null&&Sd(Se,D,-1/0,w.sortObjects)}Sd(E,D,0,w.sortObjects),T.finish(),F!==null&&F.updateLights(A.state.lightsArray),w.sortObjects===!0&&T.sort(ve,Fe),$e=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,$e&&We.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&De.beginShadows();const G=A.state.shadowsArray;if(Oe.render(G,E,D),He===!0&&De.endShadows(),(H&&R.hasRenderPass())===!1){const Se=T.opaque,pe=T.transmissive;if(A.setupLights(),D.isArrayCamera){const Ee=D.cameras;if(pe.length>0)for(let Ne=0,qe=Ee.length;Ne<qe;Ne++){const et=Ee[Ne];g0(Se,pe,E,et)}$e&&We.render(E);for(let Ne=0,qe=Ee.length;Ne<qe;Ne++){const et=Ee[Ne];m0(T,E,et,et.viewport)}}else pe.length>0&&g0(Se,pe,E,D),$e&&We.render(E),m0(T,E,D)}q!==null&&P===0&&(Q.updateMultisampleRenderTarget(q),Q.updateRenderTargetMipmap(q)),H&&R.end(w),E.isScene===!0&&E.onAfterRender(w,E,D),ge.resetDefaultState(),V=-1,Z=null,y.pop(),y.length>0?(A=y[y.length-1],Q.setTextureUnits(A.state.textureUnits),He===!0&&De.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,N.pop(),N.length>0?T=N[N.length-1]:T=null,F!==null&&F.renderEnd()};function Sd(E,D,Y,H){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLightProbeGrid)A.pushLightProbeGrid(E);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(_e)){H&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pe);const Se=te.update(E),pe=E.material;pe.visible&&T.push(E,Se,pe,Y,Ot.z,null,D)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(_e))){const Se=te.update(E),pe=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ot.copy(Se.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(Pe)),Array.isArray(pe)){const Ee=Se.groups;for(let Ne=0,qe=Ee.length;Ne<qe;Ne++){const et=Ee[Ne],Me=pe[et.materialIndex];Me&&Me.visible&&T.push(E,Se,Me,Y,Ot.z,et,D)}}else pe.visible&&T.push(E,Se,pe,Y,Ot.z,null,D)}}const me=E.children;for(let Se=0,pe=me.length;Se<pe;Se++)Sd(me[Se],D,Y,H)}function m0(E,D,Y,H){const{opaque:G,transmissive:me,transparent:Se}=E;A.setupLightsView(Y),He===!0&&De.setGlobalState(w.clippingPlanes,Y),H&&_.viewport(ne.copy(H)),G.length>0&&Fl(G,D,Y),me.length>0&&Fl(me,D,Y),Se.length>0&&Fl(Se,D,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function g0(E,D,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Me=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Ti(1,1,{generateMipmaps:!0,type:Me?Zi:di,minFilter:Ts,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}const me=A.state.transmissionRenderTarget[H.id],Se=H.viewport||ne;me.setSize(Se.z*w.transmissionResolutionScale,Se.w*w.transmissionResolutionScale);const pe=w.getRenderTarget(),Ee=w.getActiveCubeFace(),Ne=w.getActiveMipmapLevel();w.setRenderTarget(me),w.getClearColor(Ge),Xe=w.getClearAlpha(),Xe<1&&w.setClearColor(16777215,.5),w.clear(),$e&&We.render(Y);const qe=w.toneMapping;w.toneMapping=Wi;const et=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),He===!0&&De.setGlobalState(w.clippingPlanes,H),Fl(E,Y,H),Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let gt=0,jt=D.length;gt<jt;gt++){const It=D[gt],{object:Tt,geometry:mn,material:ye,group:bn}=It;if(ye.side===oa&&Tt.layers.test(H.layers)){const lt=ye.side;ye.side=zn,ye.needsUpdate=!0,x0(Tt,Y,H,mn,ye,bn),ye.side=lt,ye.needsUpdate=!0,Me=!0}}Me===!0&&(Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me))}w.setRenderTarget(pe,Ee,Ne),w.setClearColor(Ge,Xe),et!==void 0&&(H.viewport=et),w.toneMapping=qe}function Fl(E,D,Y){const H=D.isScene===!0?D.overrideMaterial:null;for(let G=0,me=E.length;G<me;G++){const Se=E[G],{object:pe,geometry:Ee,group:Ne}=Se;let qe=Se.material;qe.allowOverride===!0&&H!==null&&(qe=H),pe.layers.test(Y.layers)&&x0(pe,D,Y,Ee,qe,Ne)}}function x0(E,D,Y,H,G,me){F!==null&&G.isNodeMaterial&&F.setObject(E,G),E.onBeforeRender(w,D,Y,H,G,me),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(w,D,Y,H,E,me),G.transparent===!0&&G.side===oa&&G.forceSinglePass===!1?(G.side=zn,G.needsUpdate=!0,w.renderBufferDirect(Y,D,H,G,E,me),G.side=Gs,G.needsUpdate=!0,w.renderBufferDirect(Y,D,H,G,E,me),G.side=oa):w.renderBufferDirect(Y,D,H,G,E,me),E.onAfterRender(w,D,Y,H,G,me)}function Hl(E,D,Y){D.isScene!==!0&&(D=Qe);const H=X.get(E),G=A.state.lights,me=A.state.shadowsArray,Se=G.state.version,pe=le.getParameters(E,G.state,me,D,Y,A.state.lightProbeGridArray),Ee=le.getProgramCacheKey(pe);let Ne=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;const qe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=se.get(E.envMap||H.environment,qe),H.envMapRotation=H.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",Ri),Ne=new Map,H.programs=Ne);let et=Ne.get(Ee);if(et!==void 0){if(H.currentProgram===et&&H.lightsStateVersion===Se)return _0(E,pe),et}else pe.uniforms=le.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,Y,pe),E.onBeforeCompile(pe,w),et=le.acquireProgram(pe,Ee),Ne.set(Ee,et),H.uniforms=pe.uniforms;const Me=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=De.uniform),_0(E,pe),H.needsLights=vE(E),H.lightsStateVersion=Se,H.needsLights&&(Me.ambientLightColor.value=G.state.ambient,Me.lightProbe.value=G.state.probe,Me.sunLights.value=G.state.sun,Me.sunLightShadows.value=G.state.sunShadow,Me.directionalLights.value=G.state.directional,Me.directionalLightShadows.value=G.state.directionalShadow,Me.spotLights.value=G.state.spot,Me.spotLightShadows.value=G.state.spotShadow,Me.rectAreaLights.value=G.state.rectArea,Me.ltc_1.value=G.state.rectAreaLTC1,Me.ltc_2.value=G.state.rectAreaLTC2,Me.pointLights.value=G.state.point,Me.pointLightShadows.value=G.state.pointShadow,Me.hemisphereLights.value=G.state.hemi,Me.sunShadowMatrix.value=G.state.sunShadowMatrix,Me.sunShadowCascade.value=G.state.sunShadowCascade,Me.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Me.spotLightMatrix.value=G.state.spotLightMatrix,Me.spotLightMap.value=G.state.spotLightMap,Me.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=A.state.lightProbeGridArray.length>0,H.currentProgram=et,H.uniformsList=null,et}function v0(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=su.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function _0(E,D){const Y=X.get(E);Y.outputColorSpace=D.outputColorSpace,Y.batching=D.batching,Y.batchingColor=D.batchingColor,Y.instancing=D.instancing,Y.instancingColor=D.instancingColor,Y.instancingMorph=D.instancingMorph,Y.skinning=D.skinning,Y.morphTargets=D.morphTargets,Y.morphNormals=D.morphNormals,Y.morphColors=D.morphColors,Y.morphTargetsCount=D.morphTargetsCount,Y.numClippingPlanes=D.numClippingPlanes,Y.numIntersection=D.numClipIntersection,Y.vertexAlphas=D.vertexAlphas,Y.vertexTangents=D.vertexTangents,Y.toneMapping=D.toneMapping}function mE(E,D){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(D.matrixWorld);for(let Y=0,H=E.length;Y<H;Y++){const G=E[Y];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function gE(E,D,Y,H,G){D.isScene!==!0&&(D=Qe),Q.resetTextureUnits();const me=D.fog,Se=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,pe=q===null?w.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:st.workingColorSpace,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ne=se.get(H.envMap||Se,Ee),qe=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,et=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Me=!!Y.morphAttributes.position,gt=!!Y.morphAttributes.normal,jt=!!Y.morphAttributes.color;let It=Wi;H.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(It=w.toneMapping);const Tt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mn=Tt!==void 0?Tt.length:0,ye=X.get(H),bn=A.state.lights;if(He===!0&&(Ue===!0||E!==Z)){const Ct=E===Z&&H.id===V;De.setState(H,E,Ct)}let lt=!1;H.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==bn.state.version||ye.outputColorSpace!==pe||G.isBatchedMesh&&ye.batching===!1||!G.isBatchedMesh&&ye.batching===!0||G.isBatchedMesh&&ye.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&ye.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&ye.instancing===!1||!G.isInstancedMesh&&ye.instancing===!0||G.isSkinnedMesh&&ye.skinning===!1||!G.isSkinnedMesh&&ye.skinning===!0||G.isInstancedMesh&&ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ye.instancingMorph===!1&&G.morphTexture!==null||ye.envMap!==Ne||H.fog===!0&&ye.fog!==me||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==De.numPlanes||ye.numIntersection!==De.numIntersection)||ye.vertexAlphas!==qe||ye.vertexTangents!==et||ye.morphTargets!==Me||ye.morphNormals!==gt||ye.morphColors!==jt||ye.toneMapping!==It||ye.morphTargetsCount!==mn||!!ye.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,ye.__version=H.version);let ei=ye.currentProgram;lt===!0&&(ei=Hl(H,D,G),F&&H.isNodeMaterial&&F.onUpdateProgram(H,ei,ye));let Ci=!1,Ta=!1,Qs=!1;const Et=ei.getUniforms(),Vt=ye.uniforms;if(_.useProgram(ei.program)&&(Ci=!0,Ta=!0,Qs=!0),H.id!==V&&(V=H.id,Ta=!0),ye.needsLights){const Ct=mE(A.state.lightProbeGridArray,G);ye.lightProbeGrid!==Ct&&(ye.lightProbeGrid=Ct,Ta=!0)}if(Ci||Z!==E){_.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Et.setValue(L,"projectionMatrix",E.projectionMatrix),Et.setValue(L,"viewMatrix",E.matrixWorldInverse);const Na=Et.map.cameraPosition;Na!==void 0&&Na.setValue(L,Ve.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&Et.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Et.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,Ta=!0,Qs=!0)}if(ye.needsLights&&(bn.state.sunShadowMap.length>0&&Et.setValue(L,"sunShadowMap",bn.state.sunShadowMap,Q),bn.state.directionalShadowMap.length>0&&Et.setValue(L,"directionalShadowMap",bn.state.directionalShadowMap,Q),bn.state.spotShadowMap.length>0&&Et.setValue(L,"spotShadowMap",bn.state.spotShadowMap,Q),bn.state.pointShadowMap.length>0&&Et.setValue(L,"pointShadowMap",bn.state.pointShadowMap,Q)),G.isSkinnedMesh){Et.setOptional(L,G,"bindMatrix"),Et.setOptional(L,G,"bindMatrixInverse");const Ct=G.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),Et.setValue(L,"boneTexture",Ct.boneTexture,Q))}G.isBatchedMesh&&(Et.setOptional(L,G,"batchingTexture"),Et.setValue(L,"batchingTexture",G._matricesTexture,Q),Et.setOptional(L,G,"batchingIdTexture"),Et.setValue(L,"batchingIdTexture",G._indirectTexture,Q),Et.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&Et.setValue(L,"batchingColorTexture",G._colorsTexture,Q));const Aa=Y.morphAttributes;if((Aa.position!==void 0||Aa.normal!==void 0||Aa.color!==void 0)&&U.update(G,Y,ei),(Ta||ye.receiveShadow!==G.receiveShadow)&&(ye.receiveShadow=G.receiveShadow,Et.setValue(L,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(Vt.envMapIntensity.value=D.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=tD()),Ta){if(Et.setValue(L,"toneMappingExposure",w.toneMappingExposure),ye.needsLights&&xE(Vt,Qs),me&&H.fog===!0&&we.refreshFogUniforms(Vt,me),we.refreshMaterialUniforms(Vt,H,ie,K,A.state.transmissionRenderTarget[E.id]),ye.needsLights&&ye.lightProbeGrid){const Ct=ye.lightProbeGrid;Vt.probesSH.value=Ct.texture,Vt.probesMin.value.copy(Ct.boundingBox.min),Vt.probesMax.value.copy(Ct.boundingBox.max),Vt.probesResolution.value.copy(Ct.resolution)}su.upload(L,v0(ye),Vt,Q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(su.upload(L,v0(ye),Vt,Q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Et.setValue(L,"center",G.center),Et.setValue(L,"modelViewMatrix",G.modelViewMatrix),Et.setValue(L,"normalMatrix",G.normalMatrix),Et.setValue(L,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const Ct=H.uniformsGroups;for(let Na=0,Js=Ct.length;Na<Js;Na++){const S0=Ct[Na];ae.update(S0,ei),ae.bind(S0,ei)}}return ei}function xE(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.sunLights.needsUpdate=D,E.sunLightShadows.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function vE(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(E,D,Y){const H=X.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=D,X.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,D){const Y=X.get(E);Y.__webglFramebuffer=D,Y.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,Y=0){q=E,I=D,P=Y;let H=null,G=!1,me=!1;if(E){const pe=X.get(E);if(pe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,pe.__webglFramebuffer),ne.copy(E.viewport),Te.copy(E.scissor),be=E.scissorTest,_.viewport(ne),_.scissor(Te),_.setScissorTest(be),V=-1;return}else if(pe.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(pe.__hasExternalTextures)Q.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const qe=E.depthTexture;if(pe.__boundDepthTexture!==qe){if(qe!==null&&X.has(qe)&&(E.width!==qe.image.width||E.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(me=!0);const Ne=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?H=Ne[D][Y]:H=Ne[D],G=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?H=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?H=Ne[Y]:H=Ne,ne.copy(E.viewport),Te.copy(E.scissor),be=E.scissorTest}else ne.copy(xe).multiplyScalar(ie).floor(),Te.copy(re).multiplyScalar(ie).floor(),be=Ie;if(Y!==0&&(H=W),_.bindFramebuffer(L.FRAMEBUFFER,H)&&_.drawBuffers(E,H),_.viewport(ne),_.scissor(Te),_.setScissorTest(be),G){const pe=X.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,Y)}else if(me){const pe=D;for(let Ee=0;Ee<E.textures.length;Ee++){const Ne=X.get(E.textures[Ee]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ee,Ne.__webglTexture,Y,pe)}}else if(E!==null&&Y!==0){const pe=X.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,Y)}V=-1};function y0(E){const D=X.get(E);return(D.__readFormat!==E.format||D.__readType!==E.type)&&(D.__readFormat=E.format,D.__readType=E.type,D.__formatReadable=C.textureFormatReadable(E.format),D.__typeReadable=C.textureTypeReadable(E.type)),D}this.readRenderTargetPixels=function(E,D,Y,H,G,me,Se,pe=0){if(!(E&&E.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){_.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const Ne=E.textures[pe],qe=Ne.format,et=Ne.type;E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe);const Me=y0(Ne);if(Me.__formatReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-H&&Y>=0&&Y<=E.height-G&&L.readPixels(D,Y,H,G,de.convert(qe),de.convert(et),me)}finally{const Ne=q!==null?X.get(q).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,D,Y,H,G,me,Se,pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(D>=0&&D<=E.width-H&&Y>=0&&Y<=E.height-G){_.bindFramebuffer(L.FRAMEBUFFER,Ee);const Ne=E.textures[pe],qe=Ne.format,et=Ne.type;E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe);const Me=y0(Ne);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,gt),L.bufferData(L.PIXEL_PACK_BUFFER,me.byteLength,L.STREAM_READ),L.readPixels(D,Y,H,G,de.convert(qe),de.convert(et),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const jt=q!==null?X.get(q).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,jt);const It=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await vN(L,It,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,gt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,me),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(gt),L.deleteSync(It),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,D=null,Y=0){const H=Math.pow(2,-Y),G=Math.floor(E.image.width*H),me=Math.floor(E.image.height*H),Se=D!==null?D.x:0,pe=D!==null?D.y:0;Q.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Se,pe,G,me),_.unbindTexture()},this.copyTextureToTexture=function(E,D,Y=null,H=null,G=0,me=0){let Se,pe,Ee,Ne,qe,et,Me,gt,jt;const It=E.isCompressedTexture?E.mipmaps[me]:E.image;if(Y!==null)Se=Y.max.x-Y.min.x,pe=Y.max.y-Y.min.y,Ee=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,qe=Y.min.y,et=Y.isBox3?Y.min.z:0;else{const Vt=Math.pow(2,-G);Se=Math.floor(It.width*Vt),pe=Math.floor(It.height*Vt),E.isDataArrayTexture?Ee=It.depth:E.isData3DTexture?Ee=Math.floor(It.depth*Vt):Ee=1,Ne=0,qe=0,et=0}H!==null?(Me=H.x,gt=H.y,jt=H.z):(Me=0,gt=0,jt=0);const Tt=de.convert(D.format),mn=de.convert(D.type);let ye;D.isData3DTexture?(Q.setTexture3D(D,0),ye=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Q.setTexture2DArray(D,0),ye=L.TEXTURE_2D_ARRAY):(Q.setTexture2D(D,0),ye=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const bn=_.getParameter(L.UNPACK_ROW_LENGTH),lt=_.getParameter(L.UNPACK_IMAGE_HEIGHT),ei=_.getParameter(L.UNPACK_SKIP_PIXELS),Ci=_.getParameter(L.UNPACK_SKIP_ROWS),Ta=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),_.pixelStorei(L.UNPACK_SKIP_ROWS,qe),_.pixelStorei(L.UNPACK_SKIP_IMAGES,et);const Qs=E.isDataArrayTexture||E.isData3DTexture,Et=D.isDataArrayTexture||D.isData3DTexture;if(E.isDepthTexture){const Vt=X.get(E),Aa=X.get(D),Ct=X.get(Vt.__renderTarget),Na=X.get(Aa.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,Ct.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let Js=0;Js<Ee;Js++)Qs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,X.get(E).__webglTexture,G,et+Js),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,X.get(D).__webglTexture,me,jt+Js)),L.blitFramebuffer(Ne,qe,Se,pe,Me,gt,Se,pe,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||X.has(E)){const Vt=X.get(E),Aa=X.get(D);_.bindFramebuffer(L.READ_FRAMEBUFFER,z),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let Ct=0;Ct<Ee;Ct++)Qs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vt.__webglTexture,G,et+Ct):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vt.__webglTexture,G),Et?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Aa.__webglTexture,me,jt+Ct):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Aa.__webglTexture,me),G!==0?L.blitFramebuffer(Ne,qe,Se,pe,Me,gt,Se,pe,L.COLOR_BUFFER_BIT,L.NEAREST):Et?L.copyTexSubImage3D(ye,me,Me,gt,jt+Ct,Ne,qe,Se,pe):L.copyTexSubImage2D(ye,me,Me,gt,Ne,qe,Se,pe);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Et?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(ye,me,Me,gt,jt,Se,pe,Ee,Tt,mn,It.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(ye,me,Me,gt,jt,Se,pe,Ee,Tt,It.data):L.texSubImage3D(ye,me,Me,gt,jt,Se,pe,Ee,Tt,mn,It):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,me,Me,gt,Se,pe,Tt,mn,It.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,me,Me,gt,It.width,It.height,Tt,It.data):L.texSubImage2D(L.TEXTURE_2D,me,Me,gt,Se,pe,Tt,mn,It);_.pixelStorei(L.UNPACK_ROW_LENGTH,bn),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt),_.pixelStorei(L.UNPACK_SKIP_PIXELS,ei),_.pixelStorei(L.UNPACK_SKIP_ROWS,Ci),_.pixelStorei(L.UNPACK_SKIP_IMAGES,Ta),me===0&&D.generateMipmaps&&L.generateMipmap(ye),_.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),_.unbindTexture()},this.resetState=function(){I=0,P=0,q=null,_.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}const iD=({className:t="",activeMode:e="brain"})=>{const n=Ce.useRef(null),[i,a]=Ce.useState(e),[s,r]=Ce.useState(60),[o,c]=Ce.useState(!1);return Ce.useEffect(()=>{e&&a(e)},[e]),Ce.useEffect(()=>{const u=window.matchMedia("(prefers-reduced-motion: reduce)");c(u.matches);const h=re=>c(re.matches);u.addEventListener("change",h);const m=n.current;if(!m)return;const d=new ON;d.fog=new a0(329482,.025);const p=new oi(55,m.clientWidth/m.clientHeight,.1,1e3);p.position.z=28;const g=new nD({antialias:!0,alpha:!0,powerPreference:"high-performance"});g.setSize(m.clientWidth,m.clientHeight),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.appendChild(g.domElement);const b=window.innerWidth<768?900:2200,x=new Float32Array(b*3),f=new Float32Array(b*3),v=new Float32Array(b*3),M=new Float32Array(b),S=new it(61695),T=new it(3718648),A=new it(6583435),N=new it(16777215),y=()=>{const re=new Float32Array(b*3);for(let Ie=0;Ie<b;Ie++){const _e=Ie*3,He=Math.random(),Ue=Math.random(),Pe=He*2*Math.PI,Ve=Math.acos(2*Ue-1),Ot=Math.random()>.5?1:-1,Qe=7.5+Math.sin(Pe*3)*1.2+Math.cos(Ve*4)*.8,$e=Qe*Math.sin(Ve)*Math.cos(Pe)*.9+Ot*1.2,vt=Qe*Math.sin(Ve)*Math.sin(Pe)*.85,L=Qe*Math.cos(Ve)*1.1;re[_e]=$e,re[_e+1]=vt,re[_e+2]=L}return re},R=()=>{const re=new Float32Array(b*3),Ie=5,_e=5;for(let He=0;He<b;He++){const Ue=He*3,Pe=Math.floor(He/b*Ie),Ve=(Pe-(Ie-1)/2)*_e,Ot=6.5+Math.sin(Pe*1.5)*1.5,Qe=Math.random()*Math.PI*2,$e=Math.sqrt(Math.random())*Ot;re[Ue]=Ve+(Math.random()-.5)*.8,re[Ue+1]=Math.cos(Qe)*$e,re[Ue+2]=Math.sin(Qe)*$e}return re},w=()=>{const re=new Float32Array(b*3);for(let Ie=0;Ie<b;Ie++){const _e=Ie*3,He=(Math.random()-.5)*16,Ue=(Math.random()-.5)*16,Pe=Math.sin(He*.4)*Math.cos(Ue*.4)*4.5;re[_e]=He,re[_e+1]=Ue*.8,re[_e+2]=Pe}return re},O=y(),F=R(),W=w();for(let re=0;re<b*3;re++)x[re]=O[re],f[re]=O[re];for(let re=0;re<b;re++){const Ie=Math.random();let _e=A;Ie>.85?_e=N:Ie>.5?_e=S:Ie>.25&&(_e=T),v[re*3]=_e.r,v[re*3+1]=_e.g,v[re*3+2]=_e.b,M[re]=Math.random()*2.2+.8}const z=new Jn;z.setAttribute("position",new In(x,3)),z.setAttribute("color",new In(v,3)),z.setAttribute("size",new In(M,1));const k=(()=>{const re=document.createElement("canvas");re.width=64,re.height=64;const Ie=re.getContext("2d"),_e=Ie.createRadialGradient(32,32,0,32,32,30);return _e.addColorStop(0,"rgba(255,255,255,1)"),_e.addColorStop(.3,"rgba(0,240,255,0.8)"),_e.addColorStop(.7,"rgba(56,189,248,0.2)"),_e.addColorStop(1,"rgba(0,0,0,0)"),Ie.fillStyle=_e,Ie.fillRect(0,0,64,64),new YN(re)})(),I=new Jb({size:.65,map:k,vertexColors:!0,transparent:!0,blending:Pu,depthWrite:!1,opacity:.85}),P=new WN(z,I);d.add(P);const q=140,V=new Float32Array(q*6),Z=new Float32Array(q*6),ne=new Jn;ne.setAttribute("position",new In(V,3)),ne.setAttribute("color",new In(Z,3));const Te=new Qb({vertexColors:!0,transparent:!0,opacity:.25,blending:Pu}),be=new XN(ne,Te);d.add(be);const Ge={x:0,y:0,targetX:0,targetY:0},Xe=re=>{const Ie=m.getBoundingClientRect(),_e=(re.clientX-Ie.left)/Ie.width*2-1,He=-((re.clientY-Ie.top)/Ie.height*2-1);Ge.targetX=_e*1.5,Ge.targetY=He*1.5};window.addEventListener("mousemove",Xe);const ot=()=>{if(!m)return;const re=m.clientWidth,Ie=m.clientHeight;p.aspect=re/Ie,p.updateProjectionMatrix(),g.setSize(re,Ie)};window.addEventListener("resize",ot);let K,ie=new a2,ve=0,Fe=performance.now();const xe=()=>{K=requestAnimationFrame(xe);const re=ie.getElapsedTime();ve++;const Ie=performance.now();Ie-Fe>=1e3&&(r(ve),ve=0,Fe=Ie),Ge.x+=(Ge.targetX-Ge.x)*.05,Ge.y+=(Ge.targetY-Ge.y)*.05;let _e=O;i==="network"?_e=F:i==="lattice"&&(_e=W);const He=z.attributes.position,Ue=He.array,Pe=.04;for(let Qe=0;Qe<b*3;Qe+=3){const $e=Math.sin(re*1.5+Ue[Qe]*.2)*.08;Ue[Qe]+=(_e[Qe]-Ue[Qe])*Pe+(o?0:$e),Ue[Qe+1]+=(_e[Qe+1]-Ue[Qe+1])*Pe,Ue[Qe+2]+=(_e[Qe+2]-Ue[Qe+2])*Pe}He.needsUpdate=!0,o||(P.rotation.y=re*.12+Ge.x*.4,P.rotation.x=Math.sin(re*.08)*.1-Ge.y*.3,be.rotation.copy(P.rotation));let Ve=0;const Ot=Math.floor(b/q);for(let Qe=0;Qe<q;Qe++){const $e=Qe*Ot*3,vt=(Qe*Ot+7)%b*3,L=Ue[$e]-Ue[vt],Zt=Ue[$e+1]-Ue[vt+1],ct=Ue[$e+2]-Ue[vt+2],C=L*L+Zt*Zt+ct*ct;if(C<28){V[Ve]=Ue[$e],V[Ve+1]=Ue[$e+1],V[Ve+2]=Ue[$e+2],V[Ve+3]=Ue[vt],V[Ve+4]=Ue[vt+1],V[Ve+5]=Ue[vt+2];const _=1-Math.sqrt(C)/5.3;Z[Ve]=0,Z[Ve+1]=.94*_,Z[Ve+2]=1*_,Z[Ve+3]=.22*_,Z[Ve+4]=.74*_,Z[Ve+5]=.97*_,Ve+=6}}ne.attributes.position.needsUpdate=!0,ne.attributes.color.needsUpdate=!0,g.render(d,p)};return xe(),()=>{window.removeEventListener("mousemove",Xe),window.removeEventListener("resize",ot),u.removeEventListener("change",h),cancelAnimationFrame(K),g.dispose(),z.dispose(),I.dispose(),ne.dispose(),Te.dispose(),m&&g.domElement&&m.removeChild(g.domElement)}},[i,o]),l.jsxs("div",{className:`relative w-full h-full overflow-hidden ${t}`,children:[l.jsx("div",{ref:n,className:"w-full h-full cursor-grab active:cursor-grabbing"}),l.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1.5 rounded-lg glass-panel border border-cyan-500/20 z-20",children:[l.jsx("button",{onClick:()=>a("brain"),className:`px-3 py-1 rounded text-xs font-mono tracking-wider transition-all duration-300 ${i==="brain"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,children:"[ 01: BIOLOGICAL CORTEX ]"}),l.jsx("button",{onClick:()=>a("network"),className:`px-3 py-1 rounded text-xs font-mono tracking-wider transition-all duration-300 ${i==="network"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,children:"[ 02: NEURAL NETWORK ]"}),l.jsx("button",{onClick:()=>a("lattice"),className:`px-3 py-1 rounded text-xs font-mono tracking-wider transition-all duration-300 ${i==="lattice"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,children:"[ 03: COMPUTATIONAL GRAPH ]"})]}),l.jsxs("div",{className:"absolute top-4 right-4 text-[10px] font-mono text-slate-400 glass-panel px-3 py-1.5 rounded border border-white/5 flex items-center gap-3 pointer-events-none",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),l.jsx("span",{className:"text-cyan-300",children:"GPU CORE:"}),l.jsxs("span",{children:[s," FPS"]})]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-400",children:"PARTICLES:"})," 2,200"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("div",{className:"text-cyan-400 font-semibold uppercase",children:["MODE: ",i]})]})]})},pv="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@%&<>[]{}/=+*~",aD=({text:t,className:e="",trigger:n=!0})=>{const[i,a]=Ce.useState(t);return Ce.useEffect(()=>{if(!n)return;let s=0;const r=setInterval(()=>{a(()=>t.split("").map((o,c)=>o===" "?" ":c<s?t[c]:pv[Math.floor(Math.random()*pv.length)]).join("")),s>=t.length&&clearInterval(r),s+=1/2},25);return()=>clearInterval(r)},[t,n]),l.jsx("span",{className:`font-mono ${e}`,children:i})},r0=({className:t="w-4 h-4"})=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[l.jsx("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),l.jsx("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),sD=({className:t="w-4 h-4"})=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[l.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),l.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),l.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),rD=({onExploreMissions:t})=>l.jsxs("section",{id:"hero",className:"relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden select-none",children:[l.jsx("div",{className:"absolute inset-0 z-0 opacity-80 pointer-events-auto",children:l.jsx(iD,{className:"w-full h-full"})}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-[#05070a]/80 pointer-events-none z-10"}),l.jsxs("div",{className:"relative z-20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400 border-b border-white/5 pb-4",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),l.jsx("span",{className:"text-cyan-300 font-semibold tracking-widest",children:"DIGITAL DOSSIER // ARCHIVE CLASSIFICATION: ACTIVE"})]}),l.jsxs("div",{className:"flex items-center gap-6 text-[11px] text-slate-500",children:[l.jsx("span",{children:"CODENAME: CHARACTER-07"}),l.jsx("span",{className:"hidden sm:inline",children:"REAL: ATLEE KUMAAR"}),l.jsx("span",{children:"CHRONO: 2042"})]})]}),l.jsxs("div",{className:"relative z-20 my-auto py-12 sm:py-16 max-w-4xl",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-sm",children:[l.jsx(mo,{className:"w-3.5 h-3.5 text-cyan-400"}),l.jsx(aD,{text:"CHARACTER-07"}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsx("span",{className:"text-slate-400",children:"DESIGNATION 07-AK"})]}),l.jsxs("h1",{className:"text-5xl sm:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight text-white uppercase leading-[0.95] mb-4",children:["THE AI ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400",children:"ARCHITECT."})]}),l.jsxs("blockquote",{className:"my-6 border-l-2 border-cyan-500/80 pl-5 text-xl sm:text-2xl text-slate-200 font-sans font-light italic leading-relaxed max-w-2xl",children:["“I don't predict the future. ",l.jsx("br",{}),l.jsx("span",{className:"text-cyan-300 font-normal not-italic",children:"I build systems that make it possible."}),"”"]}),l.jsxs("p",{className:"text-sm sm:text-base font-mono text-slate-400 max-w-xl mb-8 leading-relaxed",children:["Computer Science Engineering ",l.jsx("span",{className:"text-cyan-400",children:"×"})," Artificial Intelligence"]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[l.jsxs("button",{onClick:()=>{Re.playClick(),t()},onMouseEnter:()=>Re.playHover(),className:"group relative px-6 py-3.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/60 hover:border-cyan-400 rounded-lg text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 cursor-pointer","data-cursor":"EXPLORE",children:[l.jsx("span",{className:"text-cyan-300 font-bold group-hover:text-white transition-colors",children:"[ EXPLORE MISSIONS ]"}),l.jsx(pd,{className:"w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform"})]}),l.jsxs("a",{href:"https://github.com/atleekumaar",target:"_blank",rel:"noopener noreferrer",onClick:()=>Re.playClick(),onMouseEnter:()=>Re.playHover(),className:"px-6 py-3.5 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 hover:border-slate-500 rounded-lg text-slate-300 hover:text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2.5 backdrop-blur-sm cursor-pointer","data-cursor":"GITHUB",children:[l.jsx(r0,{className:"w-4 h-4 text-slate-400"}),l.jsx("span",{children:"[ OPEN GITHUB ]"}),l.jsx(io,{className:"w-3.5 h-3.5 text-slate-500"})]})]})]}),l.jsxs("div",{className:"relative z-20 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl glass-panel border border-white/5 font-mono text-xs",children:[l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"STATUS"}),l.jsxs("span",{className:"text-cyan-300 font-bold flex items-center gap-1.5 mt-0.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"ACTIVE"]})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"LOCATION"}),l.jsx("span",{className:"text-slate-200 font-semibold mt-0.5",children:"EARTH // SECTOR 01"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"SPECIALIZATION"}),l.jsx("span",{className:"text-cyan-400 font-semibold mt-0.5",children:"ARTIFICIAL INTELLIGENCE"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"CURRENT OBJECTIVE"}),l.jsxs("span",{className:"text-slate-100 font-bold tracking-wider mt-0.5 flex items-center gap-1",children:[l.jsx(Hs,{className:"w-3.5 h-3.5 text-cyan-400"})," BUILD"]})]})]})]}),oD=()=>{const t=[{name:"RESEARCH",desc:"Dissect foundations & papers"},{name:"BUILD",desc:"Construct working architectures"},{name:"BREAK",desc:"Stress-test edge limits & failures"},{name:"LEARN",desc:"Synthesize telemetry feedback"},{name:"SHIP",desc:"Deploy verified production code"},{name:"REPEAT",desc:"Compound systemic cognition"}];return l.jsxs("section",{id:"origin",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"01 // ORIGIN DOSSIER"})]}),l.jsx("div",{className:"mb-16",children:l.jsxs("h2",{className:"text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white uppercase leading-none max-w-4xl",children:["EVERY SYSTEM ",l.jsx("br",{}),l.jsx("span",{className:"text-slate-500",children:"STARTS WITH"})," ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200",children:"A QUESTION."})]})}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20",children:[l.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[l.jsxs("div",{className:"p-6 rounded-xl glass-panel border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 font-semibold",children:[l.jsx(dA,{className:"w-4 h-4 text-cyan-400"}),"THE QUESTION"]}),l.jsx("p",{className:"text-lg sm:text-xl font-heading font-bold text-white mb-2",children:"“How do we make machines understand the world?”"}),l.jsx("p",{className:"text-sm text-slate-400 leading-relaxed font-sans",children:"Not through shallow imitation or synthetic facades, but through mathematically grounded representations of physical environments, high-dimensional manifolds, and cognitive causality."})]}),l.jsxs("div",{className:"p-6 rounded-xl glass-panel border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 font-semibold",children:[l.jsx(mA,{className:"w-4 h-4 text-cyan-400"}),"THE OBSESSION"]}),l.jsx("p",{className:"text-lg sm:text-xl font-heading font-bold text-white mb-2",children:"Computational Intelligence as an Engineering Reality"}),l.jsx("p",{className:"text-sm text-slate-400 leading-relaxed font-sans",children:"Atlee is a Computer Science Engineering student specializing in Artificial Intelligence. His work spans the full spectrum of modern machine intelligence: deep learning, transformer architectures, large language models, autonomous AI agents, computer vision, robotics simulation, cloud infrastructure, and 3D point cloud perception."})]}),l.jsxs("div",{className:"p-6 rounded-xl glass-panel border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 font-semibold",children:[l.jsx(fx,{className:"w-4 h-4 text-cyan-400"}),"THE TRANSFORMATION"]}),l.jsxs("div",{className:"space-y-3 font-mono text-xs pt-1",children:[l.jsxs("div",{className:"flex items-center gap-3 text-slate-400",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-slate-600"}),l.jsx("span",{children:"01. Writing deterministic code"})]}),l.jsx("div",{className:"text-slate-600 pl-4",children:"↓"}),l.jsxs("div",{className:"flex items-center gap-3 text-slate-300",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-slate-400"}),l.jsx("span",{children:"02. Training and fine-tuning neural models"})]}),l.jsx("div",{className:"text-slate-600 pl-4",children:"↓"}),l.jsxs("div",{className:"flex items-center gap-3 text-cyan-300",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),l.jsx("span",{children:"03. Constructing production-grade intelligent systems"})]}),l.jsx("div",{className:"text-slate-600 pl-4",children:"↓"}),l.jsxs("div",{className:"flex items-center gap-3 text-white font-bold",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"}),l.jsx("span",{children:"04. Designing closed-loop autonomous agents & perception pipelines"})]})]})]}),l.jsxs("div",{className:"p-6 rounded-xl bg-gradient-to-r from-cyan-950/30 to-slate-900/40 border border-cyan-500/40",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-cyan-300 mb-2 font-semibold",children:[l.jsx(NA,{className:"w-4 h-4 text-cyan-400"}),"THE CURRENT OBJECTIVE"]}),l.jsxs("p",{className:"text-sm sm:text-base text-slate-200 font-sans leading-relaxed",children:["Build AI systems that move beyond passive prediction and into ",l.jsx("strong",{className:"text-cyan-300",children:"perception"}),", ",l.jsx("strong",{className:"text-cyan-300",children:"reasoning"}),", and verifiable ",l.jsx("strong",{className:"text-cyan-300",children:"action"})," in the real world."]})]})]}),l.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[l.jsxs("div",{className:"p-6 rounded-xl glass-panel border border-slate-800",children:[l.jsxs("div",{className:"text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 flex items-center justify-between border-b border-slate-800 pb-2",children:[l.jsx("span",{children:"CHARACTER ARCHETYPE"}),l.jsx("span",{className:"text-cyan-400 font-bold",children:"#07-BUILDER"})]}),l.jsxs("div",{className:"space-y-4 font-mono text-xs",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-500 block text-[10px]",children:"CORE TRAIT:"}),l.jsx("span",{className:"text-slate-200 font-semibold",children:"Curiosity → Experimentation → Engineering → Deployment"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-500 block text-[10px]",children:"ENGINEERING PARADIGM:"}),l.jsx("span",{className:"text-slate-300",children:"Empirical verification over speculative assumption. Systems over single-turn prompts."})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-500 block text-[10px]",children:"OPERATIONAL STATUS:"}),l.jsxs("span",{className:"text-emerald-400 font-bold flex items-center gap-1.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"ACTIVE RESEARCH & DEVELOPMENT"]})]})]})]}),l.jsxs("div",{className:"p-6 rounded-xl glass-panel border border-cyan-500/20",children:[l.jsxs("div",{className:"text-xs font-mono text-cyan-400 tracking-wider uppercase mb-4 flex items-center gap-2",children:[l.jsx(fx,{className:"w-4 h-4 text-cyan-400"}),"THE SIGNATURE LOOP"]}),l.jsx("div",{className:"space-y-2",children:t.map((e,n)=>l.jsxs("div",{onMouseEnter:()=>Re.playHover(),className:"p-2.5 rounded bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex items-center justify-between group",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("span",{className:"text-[10px] font-mono text-slate-500",children:["0",n+1]}),l.jsx("span",{className:"text-xs font-mono font-bold text-slate-200 group-hover:text-cyan-300",children:e.name})]}),l.jsx("span",{className:"text-[11px] font-mono text-slate-500 group-hover:text-slate-400",children:e.desc})]},e.name))})]})]})]})]})},Uc=[{id:"perception",index:"01",name:"PERCEPTION",code:"ABL-PERC-01",tagline:"Sensory Extraction & Spatial Modeling",description:"Transforming raw physical and optical signals into structured 3D spatial representations and semantic scene graphs.",technologies:["Computer Vision","LiDAR Point Clouds","Open3D","OpenCV","Voxelization","SPVCNN"],telemetry:[{label:"SENSOR DOMAIN",value:"3D LiDAR / RGB-D"},{label:"SPATIAL RESOLUTION",value:"Foveated / Sub-voxel"},{label:"PROCESSING RATE",value:"Real-Time / 40+ FPS"}],specifications:["Real-time 2.5D and 3D point cloud segmentation","Dynamic ROI voxelization & ground plane extraction","Stereo depth estimation and spatial registration"]},{id:"reasoning",index:"02",name:"REASONING",code:"ABL-RSNG-02",tagline:"Neural Architectures & Latent Computation",description:"Formulating deep representations, attention mechanics, and probabilistic inference structures.",technologies:["Machine Learning","Deep Learning","Transformers","LLMs & SLMs","Mathematical Foundations","PyTorch / CUDA"],telemetry:[{label:"CORE PARADIGM",value:"Attention / Self-Supervised"},{label:"COMPUTE PLATFORM",value:"CUDA Acceleration"},{label:"INFERENCE MODE",value:"Latent Reasoning / FP16"}],specifications:["Custom transformer architectures & fine-tuning","Mathematical optimization (gradient dynamics, loss landscapes)","Structured latent space manipulation & reasoning chains"]},{id:"memory",index:"03",name:"MEMORY",code:"ABL-MEM-03",tagline:"Dense Retrieval & Knowledge Graphs",description:"Engineering long-term persistence, high-dimensional vector search, and dynamic context synthesis.",technologies:["RAG Systems","Vector Databases","Dense Embeddings","Knowledge Retrieval","Cosine Similarity / HNSW","Semantic Chunking"],telemetry:[{label:"RETRIEVAL METHOD",value:"Hybrid Dense + Sparse"},{label:"INDEX STRUCTURE",value:"HNSW / IVF-PQ"},{label:"CONTEXT WINDOW",value:"Dynamic / Sliding RAG"}],specifications:["High-recall semantic document indexing and chunking","Vector database orchestration & cluster indexing","Reranking algorithms and hallucination mitigation"]},{id:"action",index:"04",name:"ACTION",code:"ABL-ACTN-04",tagline:"Autonomous Agency & Execution Loops",description:"Bridging cognition to measurable external execution via tool invocation, state validation, and error recovery.",technologies:["AI Agents","Tool Calling Protocols","Agentic State Machines","Task Orchestration","Self-Correction Loops","Automation"],telemetry:[{label:"AGENCY MODE",value:"Goal-Oriented Autonomous"},{label:"SAFETY PROTOCOL",value:"Deterministic Validation"},{label:"DISPATCH LATENCY",value:"Sub-second Execution"}],specifications:["Multi-agent collaborative workflows with deterministic routing","Structured function calling with JSON schema guarantees","Autonomous error diagnosis and execution rollback mechanisms"]},{id:"construction",index:"05",name:"CONSTRUCTION",code:"ABL-CNST-05",tagline:"Full-Spectrum Software Engineering",description:"Writing performant, maintainable, and type-safe systems from foundational low-level algorithms to reactive interfaces.",technologies:["Python","C++","JavaScript / TypeScript","React","FastAPI","PostgreSQL / SQL"],telemetry:[{label:"SYSTEM LANGUAGE",value:"Python / C++ / TypeScript"},{label:"BACKEND STACK",value:"FastAPI / Asynchronous I/O"},{label:"DATABASE ARCH",value:"Relational + Vector Store"}],specifications:["High-performance numerical algorithms and C++ integration","Asynchronous REST & WebSocket server architectures","Modern reactive web interfaces with strict type systems"]},{id:"deployment",index:"06",name:"DEPLOYMENT",code:"ABL-DPLY-06",tagline:"Infrastructure, MLOps & Production Pipelines",description:"Packaging, orchestrating, and monitoring intelligent workloads across cloud, edge, and continuous delivery systems.",technologies:["Docker","Cloud Infrastructure","AWS","MLOps Pipelines","GitHub Workflows","CI / CD Automation"],telemetry:[{label:"CONTAINERIZATION",value:"Docker / Multi-stage"},{label:"CLOUD TARGET",value:"AWS / Distributed"},{label:"DELIVERY PIPELINE",value:"Automated CI/CD"}],specifications:["Containerized model inference runtimes with GPU pass-through","Continuous integration, automated testing, and artifact deployment","Model tracking, versioning, and latency telemetry monitoring"]}],lD=()=>{const[t,e]=Ce.useState(Uc[0].id),n=a=>{switch(a){case"perception":return eb;case"reasoning":return FS;case"memory":return pA;case"action":return mo;case"construction":return xA;case"deployment":return fA;default:return Hs}},i=Uc.find(a=>a.id===t)||Uc[0];return l.jsxs("section",{id:"abilities",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"02 // CHARACTER ABILITIES"})]}),l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["ENGINEERED ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"CAPABILITIES."})]}),l.jsx("p",{className:"text-sm font-mono text-slate-400 mt-4 max-w-xl",children:"Modular intelligence competencies structured for perception, neural representation, vector memory, agency, and production deployment."})]}),l.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-cyan-500/30 text-xs font-mono min-w-[280px]",children:[l.jsx("div",{className:"text-slate-500 text-[10px] uppercase mb-1",children:"CURRENT ACTIVE INSPECTION"}),l.jsxs("div",{className:"text-cyan-300 font-bold text-sm tracking-wider",children:[i.code," // ",i.name]}),l.jsx("div",{className:"text-slate-400 text-[11px] mt-1 truncate",children:i.tagline})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:Uc.map(a=>{const s=n(a.id),r=a.id===t;return l.jsxs("div",{onClick:()=>{Re.playClick(),e(a.id)},onMouseEnter:()=>{Re.playHover(),e(a.id)},className:`relative p-6 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden group ${r?"bg-slate-900/90 border border-cyan-500/60 shadow-xl shadow-cyan-950/40 -translate-y-1":"glass-panel hover:bg-slate-900/50 hover:border-slate-700"}`,"data-cursor":"ABILITY",children:[r&&l.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"}),l.jsxs("div",{className:"flex items-center justify-between font-mono text-xs mb-4",children:[l.jsxs("span",{className:"text-slate-500 font-bold group-hover:text-cyan-400 transition-colors",children:["ABILITY ",a.index]}),l.jsx("span",{className:"text-[11px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400",children:a.code})]}),l.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[l.jsx("div",{className:`p-2.5 rounded-lg border transition-colors ${r?"bg-cyan-950/60 border-cyan-500/60 text-cyan-300":"bg-slate-950 border-slate-800 text-slate-400 group-hover:text-slate-200"}`,children:l.jsx(s,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors",children:a.name}),l.jsx("p",{className:"text-xs font-mono text-slate-400",children:a.tagline})]})]}),l.jsx("p",{className:"text-xs font-sans text-slate-400 leading-relaxed mb-4",children:a.description}),l.jsx("div",{className:"flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80",children:a.technologies.map(o=>l.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-300 group-hover:border-cyan-500/20",children:o},o))}),l.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500",children:[l.jsx("span",{children:"TELEMETRY: SYNCHRONIZED"}),l.jsxs("span",{className:"text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1",children:["VIEW SPECS ",l.jsx(VS,{className:"w-3 h-3"})]})]})]},a.id)})}),l.jsxs("div",{className:"p-6 rounded-2xl glass-panel border border-cyan-500/30 bg-[#080c14]/90 font-mono",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs text-cyan-300 font-bold",children:[l.jsx(tl,{className:"w-4 h-4 text-cyan-400"}),l.jsxs("span",{children:["MODULE DEEP-TELEMETRY // ",i.code]})]}),l.jsxs("div",{className:"flex items-center gap-3 text-[11px] text-slate-400",children:[l.jsx("span",{children:"STATUS: ACTIVE CALIBRATION"}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsx("span",{className:"text-emerald-400",children:"OPTIMAL"})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",children:i.telemetry.map((a,s)=>l.jsxs("div",{className:"p-3 rounded-lg bg-slate-950/70 border border-slate-800/80",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase block mb-1",children:a.label}),l.jsx("span",{className:"text-xs text-slate-100 font-bold tracking-wide",children:a.value})]},s))}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[11px] text-slate-400 uppercase tracking-widest mb-3",children:"VERIFIED SPECIFICATIONS & ARCHITECTURAL PATTERNS:"}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs",children:i.specifications.map((a,s)=>l.jsxs("div",{className:"flex items-start gap-2.5 p-3 rounded bg-slate-950/50 border border-slate-800/60 text-slate-300",children:[l.jsx("span",{className:"text-cyan-400 font-bold mt-0.5",children:">"}),l.jsx("span",{children:a})]},s))})]})]})]})},cD=()=>{const[t,e]=Ce.useState(0),[n,i]=Ce.useState(!0),a=[{id:"perceive",step:"01",name:"PERCEIVE",tagline:"Sensory Ingestion & Signal Conversion",concept:"“Transform raw signals into structured information.”",mechanics:"Extract spatial geometries, LiDAR point clouds, optical frames, and multimodal streams into canonical feature tensors.",icon:eb},{id:"understand",step:"02",name:"UNDERSTAND",tagline:"Contextual & Relational Grounding",concept:"“Formulate spatial, temporal, and semantic context graphs.”",mechanics:"Bind perceptual tokens into structured knowledge representations and dense vector embeddings anchored in physical reality.",icon:Jh},{id:"reason",step:"03",name:"REASON",tagline:"Latent Inference & Uncertainty Evaluation",concept:"“Evaluate context, uncertainty, and possible actions.”",mechanics:"Simulate potential future states, weigh probabilistic risks, and evaluate multi-step causal dependencies.",icon:FS},{id:"decide",step:"04",name:"DECIDE",tagline:"Trajectory Selection & Policy Filtering",concept:"“Select the optimal trajectory under safety invariants.”",mechanics:"Optimize policy outcomes against formal constraints, ensuring deterministic validation and goal alignment.",icon:XS},{id:"act",step:"05",name:"ACT",tagline:"Tool Calling & Measurable Agency",concept:"“Turn decisions into measurable outcomes.”",mechanics:"Dispatch validated tool calls, API payloads, robotic motor commands, or programmatic artifacts into the environment.",icon:bA},{id:"learn",step:"06",name:"LEARN",tagline:"Feedback Assimilation & Continual Adaptation",concept:"“Use environmental feedback to improve the system.”",mechanics:"Capture telemetry deltas, prediction errors, and execution traces to optimize memory retrieval and system weights.",icon:EA}];Ce.useEffect(()=>{if(!n)return;const r=setInterval(()=>{e(o=>(o+1)%a.length)},4500);return()=>clearInterval(r)},[n,a.length]);const s=a[t];return l.jsxs("section",{id:"the-mind",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"03 // THE MIND (INTELLIGENCE FLOW)"})]}),l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["LIVING COGNITIVE ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"ARCHITECTURE."})]}),l.jsx("p",{className:"text-sm font-mono text-slate-400 mt-4 max-w-xl",children:"The fundamental cognitive loop of CHARACTER-07: How intelligent systems perceive unstructured environments, formulate decisions, execute agency, and assimilate experience."})]}),l.jsxs("button",{onClick:()=>{Re.playClick(),i(!n)},className:"glass-panel px-4 py-2 rounded-lg border border-slate-700 hover:border-cyan-500/50 text-xs font-mono text-slate-300 hover:text-cyan-300 flex items-center gap-2 transition-all cursor-pointer",children:[l.jsx(Hs,{className:"w-3.5 h-3.5 text-cyan-400"}),l.jsx("span",{children:n?"[ PAUSE SIGNAL PROPAGATION ]":"[ RESUME SIGNAL FLOW ]"})]})]}),l.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10",children:a.map((r,o)=>{const c=r.icon,u=o===t;return l.jsxs("div",{onClick:()=>{Re.playClick(),i(!1),e(o)},onMouseEnter:()=>{Re.playHover(),i(!1),e(o)},className:`relative p-4 rounded-xl transition-all duration-300 cursor-pointer text-left flex flex-col justify-between min-h-[140px] group ${u?"bg-cyan-950/40 border border-cyan-400 shadow-lg shadow-cyan-500/20":"glass-panel border-slate-800/80 hover:border-slate-600"}`,"data-cursor":"NODE",children:[l.jsxs("div",{className:"flex items-center justify-between font-mono text-xs",children:[l.jsx("span",{className:"text-slate-500 font-bold group-hover:text-cyan-400",children:r.step}),u&&l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"})]}),l.jsxs("div",{className:"my-2",children:[l.jsx(c,{className:`w-6 h-6 mb-2 transition-colors ${u?"text-cyan-300":"text-slate-500 group-hover:text-slate-300"}`}),l.jsx("div",{className:`font-heading font-extrabold text-sm tracking-wide ${u?"text-white":"text-slate-300"}`,children:r.name})]}),l.jsx("div",{className:"w-full h-1 bg-slate-900 rounded-full overflow-hidden",children:l.jsx("div",{className:`h-full transition-all duration-500 ${u?"w-full bg-cyan-400 shadow-sm shadow-cyan-400":"w-0"}`})})]},r.id)})}),l.jsxs("div",{className:"relative p-8 rounded-2xl glass-panel border border-cyan-500/40 bg-gradient-to-br from-[#080c14] to-[#0d1322] overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"}),l.jsxs("div",{className:"relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-mono",children:[l.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-xs text-cyan-300",children:[l.jsx(mo,{className:"w-3.5 h-3.5 text-cyan-400"}),l.jsxs("span",{children:["COGNITIVE STAGE ",s.step," OF 06"]})]}),l.jsx("h3",{className:"text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight",children:s.name}),l.jsx("p",{className:"text-xl sm:text-2xl text-cyan-300 font-sans font-light italic leading-snug",children:s.concept}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-2",children:s.mechanics})]}),l.jsxs("div",{className:"lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-3.5 text-xs text-slate-400",children:[l.jsxs("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2 flex justify-between",children:[l.jsx("span",{children:"SYSTEM INVARIANT"}),l.jsx("span",{className:"text-cyan-400",children:"ENFORCED"})]}),l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{children:"TARGET INPUT:"}),l.jsx("span",{className:"text-slate-200",children:"Raw Sensor & Multimodal Embeddings"})]}),l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{children:"INTERMEDIATE STATE:"}),l.jsxs("span",{className:"text-cyan-300 font-semibold",children:[s.name,"_PASS_01"]})]}),l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{children:"LATENCY TOLERANCE:"}),l.jsx("span",{className:"text-emerald-400 font-mono",children:"< 30 ms"})]}),l.jsx("div",{className:"pt-2 border-t border-slate-800 text-[11px] text-slate-400",children:"“Every intelligent action is grounded in continuous perceptual calibration.”"})]})]})]})]})},uD=[{id:"mission-001",code:"MSN-001",title:"FOVEATED 2.5D LiDAR MAPPING",domain:"Autonomous Navigation & 3D Perception",status:"COMPLETED",classification:"PUBLIC",summary:"A variable-resolution 2.5D LiDAR mapping pipeline engineered for real-time autonomous vehicle semantic understanding.",objective:"Design and implement a high-throughput, low-latency point-cloud perception pipeline that prioritizes dynamic regions of interest while maintaining global spatial context.",problem:"Standard dense 3D voxelization suffers from severe cubic memory scaling and high computational latency on embedded edge hardware, leading to dropped frames in critical navigation loops.",approach:"Implemented a foveated variable-resolution voxelization strategy that dynamically concentrates density around high-frequency navigational corridors and trajectory vectors, coupled with sparse convolutional backbones for ultra-fast feature extraction.",pipeline:["RAW LiDAR INPUT","PREPROCESSING & GROUND REMOVAL","FOVEATED VOXELIZATION","LABEL REMAPPING & COMPRESSION","PERSISTENT CACHE STREAM","PYTORCH DATASET LOADER","SPARSE CONV NEURAL NETWORK (SPVCNN)","SPATIAL VALIDATION & METRIC EVALUATION"],metrics:[{label:"Mean Intersection over Union (mIoU)",value:"52.05",unit:"%",verified:!0,description:"Validated against benchmark semantic segmentation test sets."},{label:"Production-Equivalent Latency",value:"23.37",unit:"ms",verified:!0,description:"End-to-end inference pass on embedded target hardware."},{label:"Throughput (FPS)",value:"42.79",unit:"FPS",verified:!0,description:"Exceeds 30 FPS real-time automotive sensor refresh rates."},{label:"Prediction Agreement",value:"99.93",unit:"%",verified:!0,description:"Cross-validation consistency across consecutive temporal scans."},{label:"Dropped Frames",value:"0 / 100",unit:"",verified:!0,description:"Zero pipeline stalls or buffer overruns in sustained 100-frame stress test."}],techStack:["PyTorch","CUDA","Open3D","OpenCV","SPVCNN","PointNet++","NumPy","Python"],results:["Achieved 52.05% mIoU under aggressive variable voxel sparsity.","Maintained 42.79 FPS sustained throughput, operating comfortably within automotive real-time deadlines (23.37 ms latency).","Guaranteed zero dropped frames (0/100) under full lidar point clouds stream."],lessons:["Voxel sparsity patterns must directly align with vehicle kinematics and braking distances.","Custom memory caching eliminates I/O bottlenecks in PyTorch DataLoader queues during high-velocity inference."],githubUrl:"https://github.com/atleekumaar",hasCaseStudy:!0},{id:"mission-002",code:"MSN-002",title:"DYNAMIC AGENTIC TOOL ORCHESTRATION",domain:"Agentic Systems & Deterministic Execution",status:"IN DEVELOPMENT",classification:"RESTRICTED",summary:"A resilient multi-agent coordination architecture combining LLM planning loops with strict schema validation and execution checkpoints.",objective:"Eliminate hallucinations and cyclic failures in autonomous multi-step software tasks by enforcing deterministic state transitions.",problem:"Unconstrained LLM agent loops frequently drift, hallucinate parameters, and fail during complex multi-tool dependencies without explicit state rollbacks.",approach:"Developing a graph-based state machine architecture with contract-enforced tool schemas, isolated sandbox runtimes, and self-correcting validation layers.",pipeline:["USER TELEMETRY INTENT","CONTEXT RETRIEVAL & VECTOR ANCHORS","PLANNING & SUB-TASK DECOMPOSITION","AGENT DISPATCH & TOOL SELECTION","SANDBOX EXECUTION RUNTIME","STATE VERIFICATION & SELF-CORRECTION","RESULT SYNTHESIS & USER DISPATCH"],metrics:[{label:"System State",value:"ACTIVE DEV",verified:!1,description:"Under active architectural refinement."},{label:"Target Architecture",value:"GRAPH-BASED",verified:!1,description:"Deterministic state transitions and fallback checkpoints."}],techStack:["Python","FastAPI","LangGraph / Custom Agent Loop","Vector DB / Embeddings","Docker Sandbox","PostgreSQL"],results:["Preliminary benchmarks show reduced agent drift on multi-step workflows.","Schema-based validation prevents invalid parameter execution at runtime."],lessons:["Agents are only as reliable as their tool contracts and error-recovery telemetry."],githubUrl:"https://github.com/atleekumaar",hasCaseStudy:!0},{id:"mission-003",code:"MSN-003",title:"AUTONOMOUS INTELLIGENCE (EMBODIED COGNITION)",domain:"Perception-Reasoning-Action Systems",status:"RESEARCH CONCEPT",classification:"RESEARCH",summary:"Conceptual research into unified cognitive architectures that seamlessly bind real-world sensory inputs to goal-directed motor and computational actions.",objective:"Formulate architectures that move beyond passive next-token prediction towards grounded world modeling, uncertainty-aware reasoning, and physical actuation.",problem:"Current frontier models operate primarily on static text or disconnected multimodal tokens without continuous causal feedback loops from physical environments.",approach:"Investigating hybrid frameworks merging real-time 3D spatial representations (LiDAR/NeRF/Gaussian Splatting) with hierarchical reasoning modules and policy executors.",pipeline:["MULTIMODAL SENSORY STREAM","WORLD MODEL LATENT ENCODING","PROBABILISTIC GOAL EVALUATION","POLICY OPTIMIZATION & ACTION SAMPLING","REAL-WORLD ACTUATION / API DISPATCH","CONTINUAL REWARD & MODEL ADAPTATION"],metrics:[{label:"Status",value:"THEORETICAL",verified:!1,description:"Active exploration & architectural research papers."},{label:"Era Horizon",value:"2026 - 2042",verified:!1,description:"Long-term engineering objective of CHARACTER-07."}],techStack:["World Models","Diffusion Policies","Reinforcement Learning","Spatial Computing","ROS2 / Robotics Simulators"],results:["Mathematical formulation of hierarchical perception-to-action graph.","Initial simulation setups for spatial grounding and dynamic obstacle navigation."],lessons:["True intelligence emerges at the intersection of perception, memory, and physical/digital agency."],githubUrl:"https://github.com/atleekumaar",hasCaseStudy:!0}],dD=({mission:t,onOpenCaseStudy:e})=>{const n=t.status==="COMPLETED",i=t.status==="IN DEVELOPMENT",a=t.status==="RESEARCH CONCEPT";return l.jsxs("div",{className:`relative p-6 sm:p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden ${n?"bg-gradient-to-b from-[#0a0e18] to-[#070a12] border border-cyan-500/30 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-950/40":i?"bg-[#080b12] border border-amber-500/20 hover:border-amber-500/40":"bg-[#080b12] border border-slate-800 hover:border-slate-700"}`,children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between font-mono text-xs mb-4",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-300 font-bold",children:t.code}),l.jsxs("span",{className:"text-[11px] text-slate-500 font-medium",children:["// ",t.domain]})]}),l.jsx("span",{className:`text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider ${n?"bg-emerald-950/50 border border-emerald-500/40 text-emerald-300":i?"bg-amber-950/50 border border-amber-500/40 text-amber-300":"bg-cyan-950/50 border border-cyan-500/40 text-cyan-300"}`,children:t.status})]}),l.jsx("h3",{className:"text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-tight",children:t.title}),l.jsx("p",{className:"text-xs sm:text-sm font-sans text-slate-400 leading-relaxed mb-6",children:t.summary}),t.metrics&&t.metrics.length>0&&l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6 font-mono",children:[l.jsxs("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest mb-3 flex items-center justify-between",children:[l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx(Hs,{className:"w-3.5 h-3.5 text-cyan-400"}),"VERIFIED HARDWARE BENCHMARKS"]}),l.jsx("span",{className:"text-emerald-400",children:"AUTHENTICATED"})]}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:t.metrics.slice(0,3).map((s,r)=>l.jsxs("div",{className:"p-2 rounded bg-[#070a10] border border-slate-900",children:[l.jsx("div",{className:"text-[9px] text-slate-500 uppercase truncate",children:s.label}),l.jsxs("div",{className:"text-base sm:text-lg font-bold text-white flex items-baseline gap-1 mt-0.5",children:[l.jsx("span",{className:"text-cyan-300",children:s.value}),s.unit&&l.jsx("span",{className:"text-[10px] text-slate-400",children:s.unit})]})]},r))})]}),i&&l.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/10 border border-amber-500/20 mb-6 font-mono text-xs text-amber-200/80 flex items-center gap-3",children:[l.jsx(vA,{className:"w-5 h-5 text-amber-400 shrink-0"}),l.jsxs("div",{children:[l.jsx("div",{className:"font-bold text-amber-300",children:"ARCHITECTURE IN ACTIVE DEVELOPMENT"}),l.jsx("div",{className:"text-[11px] text-slate-400",children:"Strict schema validation & multi-agent execution loops."})]})]}),a&&l.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/10 border border-cyan-500/20 mb-6 font-mono text-xs text-cyan-200/80 flex items-center gap-3",children:[l.jsx(mo,{className:"w-5 h-5 text-cyan-400 shrink-0"}),l.jsxs("div",{children:[l.jsx("div",{className:"font-bold text-cyan-300",children:"HORIZON 2042 RESEARCH INITIATIVE"}),l.jsx("div",{className:"text-[11px] text-slate-400",children:"Perception-to-action world model grounding."})]})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5 mb-6",children:t.techStack.map(s=>l.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-300",children:s},s))})]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 font-mono text-xs",children:[l.jsxs("button",{onClick:()=>{Re.playClick(),e(t)},onMouseEnter:()=>Re.playHover(),className:"px-4 py-2.5 rounded-lg bg-cyan-950/30 hover:bg-cyan-900/40 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white flex items-center gap-2 transition-all cursor-pointer","data-cursor":"CASE STUDY",children:[l.jsx("span",{children:"[ VIEW CASE STUDY ]"}),l.jsx(pd,{className:"w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"})]}),t.githubUrl&&l.jsxs("a",{href:t.githubUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>Re.playClick(),onMouseEnter:()=>Re.playHover(),className:"px-4 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center gap-2 transition-all cursor-pointer","data-cursor":"GITHUB",children:[l.jsx("span",{children:"[ VIEW GITHUB ]"}),l.jsx(io,{className:"w-3.5 h-3.5"})]})]})]})},fD=({mission:t,onClose:e})=>(Ce.useEffect(()=>{const n=i=>{i.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),t?l.jsxs("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in",children:[l.jsx("div",{className:"fixed inset-0 -z-10",onClick:e}),l.jsxs("div",{className:"relative w-full max-w-4xl bg-[#080c14] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden font-mono text-slate-200 my-8",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/80",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-7 h-7 rounded bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-bold text-xs",children:t.code.split("-")[1]}),l.jsxs("div",{children:[l.jsxs("div",{className:"text-xs text-cyan-400 font-semibold tracking-wider",children:["MISSION DOSSIER // ",t.code]}),l.jsxs("div",{className:"text-[10px] text-slate-500",children:["DOMAIN: ",t.domain]})]})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:`text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider ${t.status==="COMPLETED"?"bg-emerald-950/40 border border-emerald-500/40 text-emerald-300":t.status==="IN DEVELOPMENT"?"bg-amber-950/40 border border-amber-500/40 text-amber-300":"bg-cyan-950/40 border border-cyan-500/40 text-cyan-300"}`,children:t.status}),l.jsx("button",{onClick:()=>{Re.playClick(),e()},className:"p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors cursor-pointer","data-cursor":"CLOSE",children:l.jsx(md,{className:"w-4 h-4"})})]})]}),l.jsxs("div",{className:"p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8 font-sans",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-3",children:t.title}),l.jsx("p",{className:"text-sm sm:text-base text-slate-300 font-normal leading-relaxed",children:t.summary})]}),t.metrics&&t.metrics.length>0&&l.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/80 border border-cyan-500/30",children:[l.jsxs("div",{className:"text-[11px] font-mono text-cyan-400 uppercase tracking-widest mb-4 flex items-center justify-between",children:[l.jsxs("span",{className:"flex items-center gap-2",children:[l.jsx(Hs,{className:"w-3.5 h-3.5"}),"VERIFIED EMPIRICAL BENCHMARKS"]}),l.jsx("span",{className:"text-[10px] text-slate-500",children:"HARDWARE VALIDATED"})]}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3",children:t.metrics.map((n,i)=>l.jsxs("div",{className:"p-3 rounded bg-[#0b0f19] border border-slate-800",children:[l.jsx("div",{className:"text-[10px] font-mono text-slate-400 uppercase truncate mb-1",children:n.label}),l.jsxs("div",{className:"text-xl sm:text-2xl font-mono font-bold text-white flex items-baseline gap-1",children:[l.jsx("span",{className:"text-cyan-300",children:n.value}),n.unit&&l.jsx("span",{className:"text-xs text-slate-400",children:n.unit})]}),n.description&&l.jsx("div",{className:"text-[10px] text-slate-500 mt-1 leading-tight",children:n.description})]},i))})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"p-5 rounded-xl glass-panel border border-slate-800",children:[l.jsxs("div",{className:"text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-rose-500"}),"THE PROBLEM"]}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed font-sans",children:t.problem})]}),l.jsxs("div",{className:"p-5 rounded-xl glass-panel border border-cyan-500/30",children:[l.jsxs("div",{className:"text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 font-bold flex items-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),"THE APPROACH"]}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed font-sans",children:t.approach})]})]}),t.pipeline&&t.pipeline.length>0&&l.jsxs("div",{children:[l.jsxs("div",{className:"text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2",children:[l.jsx(Ym,{className:"w-4 h-4 text-cyan-400"}),"ENGINEERING EXECUTION PIPELINE"]}),l.jsx("div",{className:"space-y-2 font-mono text-xs",children:t.pipeline.map((n,i)=>l.jsxs("div",{className:"flex items-center gap-3 p-3 rounded bg-slate-950/70 border border-slate-800/80",children:[l.jsxs("span",{className:"w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] text-cyan-300 font-bold shrink-0",children:["0",i+1]}),l.jsx("span",{className:"text-slate-200 font-semibold",children:n})]},i))})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2",children:[l.jsx(mo,{className:"w-4 h-4 text-cyan-400"}),"SYSTEM TECHNOLOGIES"]}),l.jsx("div",{className:"flex flex-wrap gap-2",children:t.techStack.map(n=>l.jsx("span",{className:"px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 font-medium",children:n},n))})]}),t.results&&l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800",children:[l.jsxs("div",{className:"text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-2",children:[l.jsx(uA,{className:"w-4 h-4"}),"KEY OUTCOMES"]}),l.jsx("ul",{className:"space-y-2 text-xs text-slate-300 list-disc list-inside",children:t.results.map((n,i)=>l.jsx("li",{children:n},i))})]}),t.lessons&&l.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800",children:[l.jsxs("div",{className:"text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-2",children:[l.jsx(Hs,{className:"w-4 h-4"}),"ARCHITECTURAL LESSONS"]}),l.jsx("ul",{className:"space-y-2 text-xs text-slate-300 list-disc list-inside",children:t.lessons.map((n,i)=>l.jsx("li",{children:n},i))})]})]}),l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80 font-mono text-xs",children:[l.jsx("div",{className:"text-slate-500",children:"MISSION STATUS VERIFICATION: ACCREDITED"}),t.githubUrl&&l.jsxs("a",{href:t.githubUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>Re.playClick(),className:"px-5 py-2.5 rounded bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-white flex items-center gap-2 transition-all cursor-pointer",children:[l.jsx("span",{children:"[ VIEW REPOSITORY ON GITHUB ]"}),l.jsx(io,{className:"w-3.5 h-3.5"})]})]})]})]})]}):null),hD=()=>{const[t,e]=Ce.useState(null),[n,i]=Ce.useState("ALL"),a=uD.filter(s=>n==="ALL"?!0:s.status===n);return l.jsxs("section",{id:"missions",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"04 // MISSION LOG"})]}),l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["ENGINEERING ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"MISSIONS."})]}),l.jsx("p",{className:"text-sm font-mono text-slate-400 mt-4 max-w-xl",children:"Not standard projects. Completed engineering missions, verified hardware benchmarks, active architectural developments, and research concepts."})]}),l.jsx("div",{className:"flex flex-wrap items-center gap-2 p-1.5 rounded-xl glass-panel border border-slate-800 font-mono text-xs",children:["ALL","COMPLETED","IN DEVELOPMENT","RESEARCH CONCEPT"].map(s=>l.jsx("button",{onClick:()=>{Re.playClick(),i(s)},className:`px-3 py-1.5 rounded-lg transition-all ${n===s?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm":"text-slate-400 hover:text-white hover:bg-slate-800/40"}`,children:s},s))})]}),l.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:a.map(s=>l.jsx(dD,{mission:s,onOpenCaseStudy:r=>e(r)},s.id))}),l.jsx(fD,{mission:t,onClose:()=>e(null)})]})},Oc=[{id:"exp-014",code:"EXP-014",title:"AGENT MEMORY & RECURRENT CONTEXT PERSISTENCE",status:"RUNNING",domain:"Agentic Cognition",hypothesis:"Can long-term episodic vector retrieval combined with state checkpointing eliminate catastrophic context drift across 100+ autonomous agent turns?",methodology:"Testing dual-tier memory (working RAM buffer + compressed long-term vector embeddings) with self-reflection pruning at periodic loop intervals.",result:"ONGOING",findings:["Working memory decay is significantly mitigated with structured summary tokens.","Vector search latency must remain <15ms to avoid stalling tool dispatch loops."],tags:["LLM Agents","Vector Memory","Context Preservation"]},{id:"exp-021",code:"EXP-021",title:"FOVEATED VOXEL DENSITY ADAPTATION",status:"COMPLETED",domain:"3D Perception",hypothesis:"Will dynamic distance-weighted voxel partitioning preserve critical obstacle boundary detection while slashing memory footprint by over 60%?",methodology:"Implemented radial geometric attenuation on raw point clouds prior to sparse 3D convolution passes.",result:"VERIFIED",findings:["Achieved 64.2% reduction in peak GPU memory usage during dense cloud parsing.","Critical obstacle recall remained at 99.8% across benchmark scenarios."],tags:["LiDAR","Sparse Voxelization","Edge Inference"]},{id:"exp-009",code:"EXP-009",title:"LATENT EMBEDDING QUANTIZATION FIDELITY",status:"COMPLETED",domain:"Vector Retrieval & Compression",hypothesis:"Can scalar and vector quantization techniques compress embedding indexes by 4x while maintaining >98% semantic retrieval accuracy?",methodology:"Benchmarked FP32 vs FP16 vs INT8 quantization on 1536-dimensional latent vectors using HNSW indexing.",result:"VERIFIED",findings:["INT8 scalar quantization preserved 98.4% of top-k ranking precision.","Index memory footprint reduced from 1.2 GB to 310 MB on target datasets."],tags:["Embeddings","HNSW","Vector DB"]},{id:"exp-033",code:"EXP-033",title:"STOCHASTIC MULTI-MODAL TOOL DISPATCH",status:"IN PROGRESS",domain:"Autonomous Execution",hypothesis:"Can an autonomous planner accurately synthesize multi-modal sensor inputs to select the correct external API under simulated sensor packet loss?",methodology:"Injecting simulated 10-30% packet corruption and measuring fallback recovery time and execution success rates.",result:"IN PROGRESS",findings:["Deterministic schema guards successfully trapped 100% of malformed payloads.","Adaptive retry backoff reduced cascading loop failures."],tags:["Tool Calling","Fault Tolerance","Autonomous Systems"]}],pD=()=>{const[t,e]=Ce.useState(Oc[0].id),n=Oc.find(i=>i.id===t)||Oc[0];return l.jsxs("section",{id:"laboratory",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"05 // THE LAB"})]}),l.jsxs("div",{className:"mb-16",children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["EXPERIMENTAL ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"LABORATORY."})]}),l.jsx("p",{className:"text-base sm:text-lg font-mono text-cyan-300 mt-4 max-w-2xl font-semibold",children:"NOT EVERYTHING IS A PRODUCT. SOME THINGS ARE EXPERIMENTS."}),l.jsx("p",{className:"text-xs sm:text-sm font-mono text-slate-400 mt-2 max-w-xl",children:"Active empirical hypotheses exploring long-term vector memory, foveated point-cloud compression, quantization fidelity, and multi-modal tool calling."})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[l.jsx("div",{className:"lg:col-span-5 space-y-4",children:Oc.map(i=>{const a=i.id===t,s=i.status==="RUNNING"||i.status==="IN PROGRESS";return l.jsxs("div",{onClick:()=>{Re.playClick(),e(i.id)},onMouseEnter:()=>{Re.playHover(),e(i.id)},className:`p-5 rounded-xl transition-all duration-300 cursor-pointer text-left group ${a?"bg-slate-900 border border-cyan-500/60 shadow-lg shadow-cyan-950/40":"glass-panel border-slate-800/80 hover:border-slate-700"}`,"data-cursor":"EXP",children:[l.jsxs("div",{className:"flex items-center justify-between font-mono text-xs mb-2",children:[l.jsx("span",{className:"text-cyan-400 font-bold",children:i.code}),l.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded font-bold uppercase flex items-center gap-1.5 ${s?"bg-cyan-950/60 text-cyan-300 border border-cyan-500/40":"bg-emerald-950/60 text-emerald-300 border border-emerald-500/40"}`,children:[s&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),i.status]})]}),l.jsx("div",{className:"text-sm sm:text-base font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-2",children:i.title}),l.jsxs("div",{className:"text-xs font-mono text-slate-400 line-clamp-2 mb-3",children:[l.jsx("span",{className:"text-slate-500",children:"HYPOTHESIS: "}),i.hypothesis]}),l.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60",children:[l.jsxs("span",{children:["DOMAIN: ",i.domain]}),l.jsxs("span",{className:"text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1",children:["INSPECT ",l.jsx(VS,{className:"w-3 h-3"})]})]})]},i.id)})}),l.jsxs("div",{className:"lg:col-span-7 rounded-2xl glass-panel border border-cyan-500/30 p-6 sm:p-8 font-mono bg-[#080c14]/90 space-y-6",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs text-cyan-400 font-bold",children:[l.jsx(gA,{className:"w-4 h-4"}),l.jsxs("span",{children:["LABORATORY LOG // ",n.code]})]}),l.jsxs("div",{className:"text-[11px] text-slate-400 flex items-center gap-2",children:[l.jsx("span",{children:"STATUS:"}),l.jsx("span",{className:"text-cyan-300 font-bold uppercase",children:n.status})]})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest mb-1",children:"EXPERIMENT TITLE"}),l.jsx("div",{className:"text-xl sm:text-2xl font-heading font-extrabold text-white",children:n.title})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800",children:[l.jsxs("div",{className:"text-[10px] text-cyan-400 uppercase tracking-widest mb-2 font-bold flex items-center gap-1.5",children:[l.jsx(Hs,{className:"w-3.5 h-3.5"}),"CORE HYPOTHESIS"]}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-200 font-sans leading-relaxed",children:n.hypothesis})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800",children:[l.jsx("div",{className:"text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-bold",children:"EMPIRICAL METHODOLOGY"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-300 font-sans leading-relaxed",children:n.methodology})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-bold",children:"EXPERIMENTAL FINDINGS & LOG TELEMETRY"}),l.jsx("div",{className:"space-y-2",children:n.findings.map((i,a)=>l.jsxs("div",{className:"flex items-start gap-2.5 p-3 rounded bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 font-sans",children:[l.jsx("span",{className:"text-cyan-400 font-mono font-bold mt-0.5",children:">"}),l.jsx("span",{children:i})]},a))})]}),l.jsx("div",{className:"flex flex-wrap gap-2 pt-2 border-t border-slate-800",children:n.tags.map(i=>l.jsxs("span",{className:"px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-cyan-300",children:["#",i]},i))})]})]})]})},mv=[{level:"05",number:"LAYER 05",name:"INFRASTRUCTURE & ORCHESTRATION",category:"CLOUD & DEPLOYMENT",description:"Distributed cloud infrastructure, GPU cluster orchestration, continuous deployment, and telemetry monitoring pipelines.",technologies:[{name:"AWS",role:"Cloud compute & storage primitives",badge:"Cloud"},{name:"Cloud Compute",role:"Scalable elastic compute instances",badge:"Infra"},{name:"MLOps",role:"Model registry, experiment tracking & telemetry",badge:"Ops"},{name:"CI / CD Workflows",role:"Automated testing, linting & deployment",badge:"Pipeline"}]},{level:"04",number:"LAYER 04",name:"INTELLIGENT APPLICATIONS",category:"COGNITIVE ARCHITECTURES",description:"Orchestration of frontier reasoning engines, dense semantic retrieval pipelines, vector indexers, and autonomous agent loops.",technologies:[{name:"RAG Pipelines",role:"Context grounding & non-parametric retrieval",badge:"Retrieval"},{name:"LLMs / SLMs",role:"Generative reasoning & structured output parsing",badge:"Cognition"},{name:"AI Agents",role:"Deterministic tool calling & state machines",badge:"Agency"},{name:"Vector Databases",role:"High-dimensional similarity indexing (HNSW)",badge:"Indexing"}]},{level:"03",number:"LAYER 03",name:"SYSTEMS & PERSISTENCE",category:"BACKEND RUNTIMES",description:"High-throughput asynchronous web APIs, relational data stores, high-speed memory caches, and container isolation.",technologies:[{name:"FastAPI",role:"High-performance asynchronous Python API framework",badge:"API"},{name:"PostgreSQL",role:"ACID-compliant relational database & SQL store",badge:"Database"},{name:"Redis",role:"In-memory caching & session state store",badge:"Cache"},{name:"Docker",role:"Containerized reproducible execution environments",badge:"Runtime"}]},{level:"02",number:"LAYER 02",name:"INTELLIGENCE ENGINE",category:"DEEP LEARNING RUNTIMES",description:"Numerical tensor manipulation, automatic differentiation, neural network layer abstractions, and GPU-accelerated computing.",technologies:[{name:"NumPy",role:"N-dimensional array computation & linear algebra",badge:"Math"},{name:"Pandas",role:"High-performance data manipulation & tabular analysis",badge:"Data"},{name:"PyTorch",role:"Dynamic computation graph & deep learning framework",badge:"Deep Learning"},{name:"TensorFlow",role:"Production machine learning models & pipelines",badge:"Framework"},{name:"Transformers",role:"State-of-the-art attention & sequence modeling",badge:"NLP"}]},{level:"01",number:"LAYER 01",name:"COMPUTATIONAL FOUNDATION",category:"CORE LANGUAGES",description:"Low-level system efficiency, high-velocity algorithmic scripting, and modern reactive interface architecture.",technologies:[{name:"Python",role:"Primary language for AI, data pipelines & agent loops",badge:"Primary"},{name:"C++",role:"High-performance systems, CUDA kernels & Open3D",badge:"Performance"},{name:"JavaScript / TypeScript",role:"Modern type-safe reactive interfaces & WebGL",badge:"Interface"}]}],mD=()=>{const[t,e]=Ce.useState(mv[0].level);return l.jsxs("section",{id:"stack",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"06 // SYSTEM STACK"})]}),l.jsxs("div",{className:"mb-16",children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["LAYERED SYSTEM ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"ARCHITECTURE."})]}),l.jsx("p",{className:"text-sm font-mono text-slate-400 mt-4 max-w-xl",children:"Engineered as a cohesive multi-tier stack: from foundational low-level efficiency to frontier cognitive agents and distributed cloud infrastructure."})]}),l.jsx("div",{className:"space-y-4",children:mv.map(n=>{const i=n.level===t;return l.jsxs("div",{onClick:()=>{Re.playClick(),e(n.level)},onMouseEnter:()=>{Re.playHover(),e(n.level)},className:`p-6 rounded-xl transition-all duration-300 cursor-pointer ${i?"bg-slate-900/90 border border-cyan-500/60 shadow-xl shadow-cyan-950/40":"glass-panel border-slate-800/80 hover:border-slate-700"}`,"data-cursor":"STACK",children:[l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsxs("div",{className:`p-3 rounded-lg border font-mono font-bold text-sm ${i?"bg-cyan-950 border-cyan-500/60 text-cyan-300":"bg-slate-950 border-slate-800 text-slate-500"}`,children:["L",n.level]}),l.jsxs("div",{children:[l.jsx("div",{className:"flex items-center gap-2",children:l.jsxs("span",{className:"text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold",children:[n.number," // ",n.category]})}),l.jsx("h3",{className:"text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors",children:n.name})]})]}),l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:n.technologies.map(a=>l.jsxs("div",{className:`px-3 py-1.5 rounded-lg border font-mono text-xs flex items-center gap-2 transition-all ${i?"bg-cyan-950/40 border-cyan-500/40 text-white":"bg-slate-950/70 border-slate-800 text-slate-300"}`,children:[l.jsx("span",{className:"font-semibold",children:a.name}),l.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-700",children:a.badge})]},a.name))})]}),i&&l.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-xs font-mono animate-fade-in",children:[l.jsx("div",{className:"md:col-span-8 text-slate-300 font-sans leading-relaxed",children:n.description}),l.jsx("div",{className:"md:col-span-4 flex justify-end gap-2 text-[11px] text-cyan-400",children:l.jsx("span",{children:"STATE: PRODUCTION VERIFIED"})})]})]},n.level)})})]})},Uo=[{id:"mem-01",step:"01",title:"FOUNDATIONAL CODE",era:"PHASE I",tagline:"Deterministic Computation & Logic Structures",description:"Mastery of algorithmic thinking, data structures, and computational complexity in Python, C++, and modern languages.",breakthrough:"Understanding computers as deterministic state transformation machines.",acquiredCapabilities:["Algorithms & Data Structures","Object-Oriented Design","Memory Management","Clean Architecture"],status:"INTEGRATED"},{id:"mem-02",step:"02",title:"MACHINE LEARNING",era:"PHASE II",tagline:"Statistical Learning & Feature Spaces",description:"Transition from handcrafted rules to statistical inference, regression, classification, and mathematical loss formulation.",breakthrough:"Replacing rigid if-else logic with parameter optimization over empirical data distributions.",acquiredCapabilities:["Gradient Descent","Feature Engineering","Statistical Validation","Loss Landscapes"],status:"INTEGRATED"},{id:"mem-03",step:"03",title:"DEEP LEARNING",era:"PHASE III",tagline:"Hierarchical Neural Representations",description:"Deep multi-layer perceptrons, convolutional networks, backpropagation dynamics, and GPU-accelerated tensor computation.",breakthrough:"Hierarchical feature abstraction directly from raw high-dimensional tensors.",acquiredCapabilities:["PyTorch Tensor Workflows","CUDA Acceleration","Backpropagation","Regularization"],status:"INTEGRATED"},{id:"mem-04",step:"04",title:"COMPUTER VISION & 3D",era:"PHASE IV",tagline:"Spatial Understanding & Point Clouds",description:"Processing 2D optical frames and raw 3D LiDAR point clouds into semantic segmentations and spatial geometry.",breakthrough:"Building real-time Foveated 2.5D LiDAR pipelines achieving 52.05% mIoU at 42.79 FPS.",acquiredCapabilities:["LiDAR Point Clouds","Voxelization","Open3D / OpenCV","Spatial Segmentation"],status:"INTEGRATED"},{id:"mem-05",step:"05",title:"TRANSFORMERS & ATTENTION",era:"PHASE V",tagline:"Self-Attention & Sequence Modeling",description:"Investigating quadratic self-attention mechanics, query-key-value projections, and multi-head representation spaces.",breakthrough:"Global relational modeling without fixed convolutional receptive field constraints.",acquiredCapabilities:["Attention Mechanisms","Positional Encodings","Transformer Backbones","Latent Routing"],status:"INTEGRATED"},{id:"mem-06",step:"06",title:"LARGE LANGUAGE MODELS",era:"PHASE VI",tagline:"Generative Pretraining & Few-Shot Reasoning",description:"Exploring autoregressive next-token prediction, instruction fine-tuning, prompt decomposition, and emergent capabilities.",breakthrough:"Natural language as a universal interface for semantic computation.",acquiredCapabilities:["Prompt Engineering","Fine-Tuning","Sampling Strategies","Structured Output Parsing"],status:"INTEGRATED"},{id:"mem-07",step:"07",title:"RETRIEVAL-AUGMENTED GENERATION",era:"PHASE VII",tagline:"External Episodic Memory & Vector Indexing",description:"Augmenting parametric neural weights with non-parametric dense vector stores, knowledge graphs, and hybrid retrieval.",breakthrough:"Grounding generative models with deterministic, verifiable knowledge retrieval.",acquiredCapabilities:["Vector Embeddings","HNSW Indexing","Semantic Chunking","Reranking"],status:"OPTIMIZED"},{id:"mem-08",step:"08",title:"AI AGENTS & TOOL CALLING",era:"PHASE VIII",tagline:"Agency, Decision Graphs & Tool Dispatch",description:"Constructing multi-step autonomous execution loops with structured schema enforcement and self-correcting validation.",breakthrough:"Transforming passive models into active problem-solvers that execute tools in external environments.",acquiredCapabilities:["Agentic State Machines","Deterministic Tool Calling","Error Recovery","Multi-Agent Routing"],status:"ACTIVE EVOLUTION"},{id:"mem-09",step:"09",title:"AUTONOMOUS INTELLIGENCE",era:"PHASE IX (ERA 2042)",tagline:"Perception, Reasoning & Physical Action",description:"The ultimate frontier: fully embodied, closed-loop autonomous intelligence that continuously perceives, reasons, and acts in the physical world.",breakthrough:"Unified world models and self-adapting policy execution.",acquiredCapabilities:["Closed-Loop Systems","World Modeling","Embodied Agency","Continual Learning"],status:"ACTIVE EVOLUTION"}],gD=()=>{const[t,e]=Ce.useState(Uo[Uo.length-1].id),n=Uo.find(i=>i.id===t)||Uo[0];return l.jsxs("section",{id:"memory",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"07 // CHARACTER MEMORY"})]}),l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["EVOLUTIONARY ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"MEMORY TREE."})]}),l.jsx("p",{className:"text-sm font-mono text-slate-400 mt-4 max-w-xl",children:"Every acquired engineering discipline becomes a permanent cognitive layer of memory in CHARACTER-07."})]}),l.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-cyan-500/30 text-xs font-mono",children:[l.jsx("span",{className:"text-slate-500 text-[10px] uppercase block",children:"TOTAL RECOLLECTION NODES"}),l.jsx("span",{className:"text-cyan-300 font-bold text-base",children:"09 PHASES LOADED"})]})]}),l.jsxs("div",{className:"relative mb-12",children:[l.jsx("div",{className:"hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-slate-800 -translate-y-1/2 z-0"}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3 relative z-10",children:Uo.map((i,a)=>{const s=i.id===t;return l.jsxs("div",{onClick:()=>{Re.playClick(),e(i.id)},onMouseEnter:()=>{Re.playHover(),e(i.id)},className:`p-3 rounded-xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center group ${s?"bg-cyan-950/60 border border-cyan-400 shadow-lg shadow-cyan-500/20 -translate-y-1":"glass-panel border-slate-800/80 hover:border-slate-600"}`,"data-cursor":"MEMORY",children:[l.jsxs("span",{className:"text-[10px] font-mono text-slate-500 font-bold mb-1",children:["0",a+1]}),l.jsx("div",{className:`w-4 h-4 rounded-full border-2 mb-2 flex items-center justify-center ${s?"bg-cyan-400 border-white shadow-sm shadow-cyan-400":"bg-slate-900 border-slate-700 group-hover:border-cyan-400"}`}),l.jsx("div",{className:`text-[11px] font-heading font-bold uppercase tracking-tight line-clamp-2 ${s?"text-white":"text-slate-400 group-hover:text-slate-200"}`,children:i.title}),l.jsx("div",{className:"text-[9px] font-mono text-slate-500 mt-1",children:i.era})]},i.id)})})]}),l.jsxs("div",{className:"p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30 bg-[#080c14]/90 font-mono",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs text-cyan-300 font-bold",children:[l.jsx(Ym,{className:"w-4 h-4 text-cyan-400"}),l.jsxs("span",{children:["MEMORY NODE ARCHIVE // ",n.step]})]}),l.jsx("span",{className:`text-[10px] px-2.5 py-0.5 rounded font-bold uppercase ${n.status==="INTEGRATED"?"bg-emerald-950/40 text-emerald-300 border border-emerald-500/40":"bg-cyan-950/40 text-cyan-300 border border-cyan-500/40"}`,children:n.status})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[l.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[l.jsxs("div",{className:"text-xs text-cyan-400 tracking-wider",children:[n.era," // ",n.tagline]}),l.jsx("h3",{className:"text-2xl sm:text-3xl font-heading font-extrabold text-white",children:n.title}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-300 font-sans leading-relaxed",children:n.description}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800",children:[l.jsx("span",{className:"text-[10px] text-cyan-400 uppercase tracking-widest block mb-1 font-bold",children:"CORE COGNITIVE BREAKTHROUGH:"}),l.jsxs("p",{className:"text-xs text-slate-200 font-sans italic",children:["“",n.breakthrough,"”"]})]})]}),l.jsxs("div",{className:"lg:col-span-5 bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3",children:[l.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2",children:"ACQUIRED CAPABILITIES"}),l.jsx("div",{className:"space-y-2 text-xs",children:n.acquiredCapabilities.map((i,a)=>l.jsxs("div",{className:"flex items-center gap-2 text-slate-300",children:[l.jsx(XS,{className:"w-3.5 h-3.5 text-cyan-400 shrink-0"}),l.jsx("span",{children:i})]},a))})]})]})]})]})},xD=()=>{const[t,e]=Ce.useState(""),[n,i]=Ce.useState(["> connect --github atleekumaar","STATUS: Handshake 200 OK","AUTHENTICATION: PUBLIC REPOSITORY STREAM","TARGET: github.com/atleekumaar","ACCESS GRANTED // REPOSITORY REPOSITORIES LOADED"]),a=s=>{if(s.preventDefault(),!t.trim())return;Re.playTelemetry();const r=t.trim().toLowerCase();let o=`Unknown command: ${r}. Type 'help' for available directives.`;if(r==="help")o="DIRECTIVES: connect, status, missions, clear, exit";else if(r==="status")o="SYSTEM: ACTIVE | ROLE: AI ARCHITECT | REPO: atleekumaar";else if(r==="missions")o="MSN-001: FOVEATED LiDAR (52.05% mIoU) | MSN-002: AGENTS";else if(r==="clear"){i([]),e("");return}i(c=>[...c,`> ${t}`,o]),e("")};return l.jsxs("section",{id:"open-system",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"08 // OPEN SYSTEM"})]}),l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["PUBLIC CODE ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"REPOSITORY."})]}),l.jsx("p",{className:"text-base sm:text-lg font-mono text-cyan-300 mt-4 max-w-xl font-medium",children:"“Some of the character's memory is public.”"}),l.jsx("p",{className:"text-xs sm:text-sm font-mono text-slate-400 mt-1 max-w-lg",children:"Direct access to verified open-source experiments, algorithms, and engineering repositories on GitHub."})]}),l.jsxs("a",{href:"https://github.com/atleekumaar",target:"_blank",rel:"noopener noreferrer",onClick:()=>Re.playClick(),onMouseEnter:()=>Re.playHover(),className:"px-6 py-4 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-xs tracking-widest uppercase flex items-center gap-3 transition-all duration-300 shadow-lg shadow-cyan-950/50 cursor-pointer","data-cursor":"GITHUB",children:[l.jsx(r0,{className:"w-5 h-5 text-cyan-400"}),l.jsx("span",{className:"font-bold",children:"[ ACCESS GITHUB // @ATLEEKUMAAR ]"}),l.jsx(io,{className:"w-4 h-4"})]})]}),l.jsxs("div",{className:"rounded-2xl bg-[#080c14] border border-cyan-500/40 shadow-2xl shadow-cyan-950/40 overflow-hidden font-mono text-xs",children:[l.jsxs("div",{className:"flex items-center justify-between px-5 py-3 bg-slate-950 border-b border-slate-800",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"w-3 h-3 rounded-full bg-rose-500/80"}),l.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-500/80"}),l.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-500/80"}),l.jsx("span",{className:"text-[11px] text-slate-400 ml-2",children:"bash - session://character-07/github"})]}),l.jsxs("div",{className:"flex items-center gap-3 text-[10px] text-slate-500",children:[l.jsx("span",{children:"PORT: 443 (TLS)"}),l.jsx("span",{className:"text-emerald-400",children:"ONLINE"})]})]}),l.jsxs("div",{className:"p-6 space-y-2 max-h-72 overflow-y-auto bg-[#07090e]",children:[n.map((s,r)=>l.jsx("div",{className:`${s.startsWith(">")?"text-cyan-400 font-bold":s.startsWith("STATUS")||s.startsWith("ACCESS")?"text-emerald-400":"text-slate-400"}`,children:s},r)),l.jsxs("form",{onSubmit:a,className:"flex items-center gap-2 pt-2",children:[l.jsx("span",{className:"text-cyan-400 font-bold",children:">"}),l.jsx("input",{type:"text",value:t,onChange:s=>e(s.target.value),placeholder:"type 'help', 'status', 'missions', or 'clear'...",className:"w-full bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-600 font-mono text-xs"})]})]}),l.jsxs("div",{className:"px-5 py-3 bg-slate-950/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(gb,{className:"w-4 h-4 text-cyan-400"}),l.jsxs("span",{children:["OFFICIAL GITHUB ID: ",l.jsx("strong",{className:"text-white",children:"atleekumaar"})]})]}),l.jsx("span",{className:"text-slate-500",children:"NO SYNTHETIC METRICS OR FABRICATED STARS"})]})]})]})},vD=()=>{const t=[{code:"OBJ-01",title:"INTELLIGENT AGENTS",tagline:"Deterministic Agency & Complex Multi-Step Reasoning",description:"Designing agentic state machines capable of continuous autonomous reasoning, strict schema validation, and self-correcting execution loops without human intervention.",focus:["Graph-based State Machines","Schema Contract Enforcement","Episodic Memory Retention"]},{code:"OBJ-02",title:"AUTONOMOUS SYSTEMS",tagline:"Perception-to-Action World Models",description:"Bridging high-frequency 3D sensor streams (LiDAR, point clouds, spatial vision) with real-time world models for embodied decision-making and spatial navigation.",focus:["Embodied Intelligence","Spatial Grounding","Closed-Loop Actuation"]},{code:"OBJ-03",title:"AI INFRASTRUCTURE",tagline:"Scalable MLOps & Distributed Edge Runtimes",description:"Building robust, low-latency deployment pipelines for edge devices and distributed cloud environments, ensuring sub-30ms inference guarantees in high-stress production.",focus:["Distributed GPU Runtimes","Edge Quantization (FP8/INT8)","Zero-Downtime Telemetry"]}];return l.jsxs("section",{id:"future",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"09 // NEXT OBJECTIVES (ERA 2042)"})]}),l.jsxs("div",{className:"mb-16",children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white uppercase leading-none max-w-4xl",children:["THE MACHINE ",l.jsx("br",{}),l.jsx("span",{className:"text-slate-500",children:"MUST LEARN"})," ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"TO ACT."})]}),l.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-3 font-mono text-xs text-slate-300",children:[l.jsx("span",{className:"px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400",children:"MODELS"}),l.jsx("span",{className:"text-cyan-400",children:"→"}),l.jsx("span",{className:"px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300",children:"SYSTEMS"}),l.jsx("span",{className:"text-cyan-400",children:"→"}),l.jsx("span",{className:"px-3 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold",children:"AGENTS"}),l.jsx("span",{className:"text-cyan-400",children:"→"}),l.jsx("span",{className:"px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/50 text-cyan-300 font-bold",children:"AUTONOMOUS INTELLIGENCE"})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:t.map(e=>l.jsxs("div",{onMouseEnter:()=>Re.playHover(),className:"p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group","data-cursor":"OBJECTIVE",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between font-mono text-xs mb-4",children:[l.jsx("span",{className:"text-cyan-400 font-bold",children:e.code}),l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 uppercase tracking-widest font-semibold",children:"FUTURE OBJECTIVE"})]}),l.jsx("h3",{className:"text-xl sm:text-2xl font-heading font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-2",children:e.title}),l.jsx("div",{className:"text-xs font-mono text-slate-400 mb-4",children:e.tagline}),l.jsx("p",{className:"text-xs sm:text-sm font-sans text-slate-300 leading-relaxed mb-6",children:e.description})]}),l.jsxs("div",{className:"pt-4 border-t border-slate-800/80 space-y-2",children:[l.jsx("div",{className:"text-[10px] font-mono text-slate-500 uppercase tracking-widest",children:"TARGET RESEARCH FOCUS:"}),l.jsx("div",{className:"space-y-1.5 font-mono text-xs text-slate-300",children:e.focus.map((n,i)=>l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-cyan-400",children:">"}),l.jsx("span",{children:n})]},i))})]})]},e.code))})]})},_D=()=>{const[t,e]=Ce.useState("profile");return l.jsxs("section",{id:"character-file",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center justify-center gap-3 text-xs font-mono text-cyan-400 mb-6 text-center",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"10 // OFFICIAL CHARACTER FILE"}),l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"})]}),l.jsxs("div",{className:"mb-14 text-center max-w-3xl mx-auto",children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["DOSSIER RECORD ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-white",children:"#07-BUILDER."})]}),l.jsx("p",{className:"text-sm font-mono text-slate-400 mt-4",children:"Authenticated personnel file & biometric identity of Atlee Kumaar (Atul Shukla) — AI Systems Architect."})]}),l.jsxs("div",{className:"max-w-4xl mx-auto rounded-3xl glass-panel border border-cyan-500/40 p-6 sm:p-10 bg-gradient-to-b from-[#090d16] via-[#070a12] to-[#05070a] shadow-2xl shadow-cyan-950/40 font-mono",children:[l.jsxs("div",{className:"flex flex-col items-center justify-center mb-10",children:[l.jsxs("div",{className:"relative w-full max-w-2xl aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-2xl shadow-cyan-950/60 group bg-slate-950",children:[l.jsx("img",{src:"/avatar-biometric.jpg",alt:"Atlee Kumaar (Atul Shukla) - CHARACTER-07 Biometric Archive",className:"w-full h-full object-cover object-[15%_25%] filter contrast-110 group-hover:contrast-125 transition-all duration-700"}),l.jsx("div",{className:"absolute inset-x-0 h-1 bg-cyan-400 shadow-[0_0_20px_#00f0ff] animate-scanline pointer-events-none opacity-85"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"}),l.jsxs("div",{className:"absolute top-3 left-3 text-[10px] text-cyan-300 font-mono bg-black/70 border border-cyan-500/40 px-2.5 py-1 rounded backdrop-blur-md flex items-center gap-1.5",children:[l.jsx(hA,{className:"w-3.5 h-3.5 text-cyan-400 animate-spin"}),l.jsx("span",{children:"BIOMETRIC SCAN // VERIFIED"})]}),l.jsxs("div",{className:"absolute top-3 right-3 text-[10px] text-emerald-300 font-mono bg-black/70 border border-emerald-500/40 px-2.5 py-1 rounded backdrop-blur-md flex items-center gap-1.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),l.jsx("span",{children:"MATCH 99.8% // HACK 404"})]}),l.jsxs("div",{className:"absolute top-[12%] left-[10%] w-24 h-24 sm:w-32 sm:h-32 border border-dashed border-cyan-400/70 rounded-full pointer-events-none flex items-center justify-center animate-pulse",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400"}),l.jsx("div",{className:"absolute -top-4 text-[9px] text-cyan-300 font-bold bg-black/60 px-1 rounded",children:"TARGET: ATLEE"})]}),l.jsx("div",{className:"absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400"}),l.jsx("div",{className:"absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400"}),l.jsx("div",{className:"absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400"}),l.jsx("div",{className:"absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400"}),l.jsxs("div",{className:"absolute bottom-3 inset-x-3 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-black/60 border border-white/10 px-3 py-1.5 rounded backdrop-blur-md",children:[l.jsx("span",{className:"text-cyan-300 font-bold",children:"IDENTITY: ATLEE KUMAAR (ATUL SHUKLA)"}),l.jsx("span",{className:"text-slate-400",children:"HACK 404 LAB ENVIRONMENT"})]})]}),l.jsx("div",{className:"mt-3 text-xs text-slate-500 font-mono text-center",children:"PHOTO ARCHIVE: LAB SESSION & SYSTEM TELEMETRY VERIFIED"})]}),l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"text-center border-b border-slate-800 pb-6",children:[l.jsx("div",{className:"text-xs text-cyan-400 tracking-widest uppercase font-semibold mb-1",children:"DESIGNATION CODENAME"}),l.jsx("h3",{className:"text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight",children:"CHARACTER-07"}),l.jsxs("div",{className:"text-xl sm:text-2xl text-slate-300 font-mono tracking-wide mt-1",children:["ATLEE KUMAAR ",l.jsx("span",{className:"text-slate-500 text-sm font-normal",children:"(ATUL SHUKLA)"})]}),l.jsxs("div",{className:"text-xs sm:text-sm text-cyan-400 font-mono mt-1 flex items-center justify-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),l.jsx("span",{children:"AI SYSTEMS ARCHITECT // COMPUTER SCIENCE & AI"})]})]}),l.jsxs("div",{className:"flex justify-center gap-2 border-b border-slate-800/80 pb-4",children:[l.jsx("button",{onClick:()=>{Re.playClick(),e("profile")},className:`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${t==="profile"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm":"text-slate-400 hover:text-white hover:bg-slate-800/40"}`,children:"[ 01: SYSTEM SPECS ]"}),l.jsx("button",{onClick:()=>{Re.playClick(),e("directives")},className:`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${t==="directives"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm":"text-slate-400 hover:text-white hover:bg-slate-800/40"}`,children:"[ 02: CORE DIRECTIVES ]"}),l.jsx("button",{onClick:()=>{Re.playClick(),e("specs")},className:`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${t==="specs"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm":"text-slate-400 hover:text-white hover:bg-slate-800/40"}`,children:"[ 03: SIGNATURE LOOP ]"})]}),t==="profile"&&l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs animate-fade-in",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase block mb-1",children:"ROLE"}),l.jsx("span",{className:"text-white font-bold text-sm",children:"AI SYSTEMS ARCHITECT"}),l.jsx("span",{className:"text-[10px] text-slate-400 block mt-1",children:"Perception & Agents"})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase block mb-1",children:"DOMAIN"}),l.jsx("span",{className:"text-cyan-400 font-bold text-sm",children:"ARTIFICIAL INTELLIGENCE"}),l.jsx("span",{className:"text-[10px] text-slate-400 block mt-1",children:"Deep Learning & Vision"})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase block mb-1",children:"STATUS"}),l.jsxs("span",{className:"text-emerald-400 font-bold text-sm flex items-center gap-1.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"BUILDING ACTIVE"]}),l.jsx("span",{className:"text-[10px] text-slate-400 block mt-1",children:"Continuous Development"})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase block mb-1",children:"TIMELINE"}),l.jsx("span",{className:"text-slate-200 font-bold text-sm",children:"ERA 2042"}),l.jsx("span",{className:"text-[10px] text-slate-400 block mt-1",children:"Sector: Earth"})]})]}),t==="directives"&&l.jsxs("div",{className:"space-y-3 animate-fade-in",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 flex items-start gap-4",children:[l.jsx(gb,{className:"w-5 h-5 text-cyan-400 shrink-0 mt-0.5"}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] text-cyan-400 uppercase tracking-widest block font-bold mb-1",children:"PRIMARY DIRECTIVE:"}),l.jsx("div",{className:"text-white font-heading font-extrabold text-lg sm:text-xl",children:"BUILD INTELLIGENCE."}),l.jsx("p",{className:"text-xs text-slate-300 font-sans mt-1",children:"Construct computational systems capable of perceiving, reasoning, learning, and acting in the physical world."})]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-4",children:[l.jsx(Iu,{className:"w-5 h-5 text-amber-400 shrink-0 mt-0.5"}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] text-amber-400 uppercase tracking-widest block font-bold mb-1",children:"SECONDARY DIRECTIVE:"}),l.jsx("div",{className:"text-slate-200 font-heading font-bold text-lg sm:text-xl",children:"KEEP LEARNING."}),l.jsx("p",{className:"text-xs text-slate-400 font-sans mt-1",children:"Never stop breaking assumptions, questioning paradigms, and synthesizing real-world feedback."})]})]})]}),t==="specs"&&l.jsxs("div",{className:"p-6 rounded-2xl bg-slate-950/90 border border-cyan-500/30 animate-fade-in",children:[l.jsx("div",{className:"text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-4 text-center",children:"THE CONTINUOUS ENGINEERING LOOP"}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center",children:[{step:"01",name:"RESEARCH",desc:"Dissect papers & fundamentals"},{step:"02",name:"BUILD",desc:"Write robust architectures"},{step:"03",name:"BREAK",desc:"Test failure edge cases"},{step:"04",name:"LEARN",desc:"Assimilate error metrics"},{step:"05",name:"SHIP",desc:"Deploy to production"},{step:"06",name:"REPEAT",desc:"Compound intelligence"}].map(n=>l.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("span",{className:"text-[10px] text-cyan-400 block font-bold",children:n.step}),l.jsx("span",{className:"text-xs font-heading font-extrabold text-white block mt-1",children:n.name}),l.jsx("span",{className:"text-[9px] text-slate-500 block mt-1",children:n.desc})]},n.step))})]})]})]})]})},yD=()=>{const[t,e]=Ce.useState(!1),n=()=>{Re.playTelemetry(),navigator.clipboard.writeText("https://www.linkedin.com/in/atul-shukla-105341383"),e(!0),setTimeout(()=>e(!1),3e3)};return l.jsxs("section",{id:"contact",className:"relative py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5 font-mono overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#05070a]/90 to-black pointer-events-none"}),l.jsxs("div",{className:"relative z-10 text-center mb-16 space-y-3",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),l.jsx("span",{children:"CHARACTER-07 // SESSION COMPLETE"})]}),l.jsxs("div",{className:"space-y-1 text-sm sm:text-base text-slate-400 font-sans italic pt-2",children:[l.jsx("p",{children:"“You weren't supposed to find this file.”"}),l.jsx("p",{className:"text-cyan-300 font-normal",children:"“But since you're here…”"})]})]}),l.jsx("div",{className:"relative z-10 text-center my-12",children:l.jsxs("h2",{className:"text-5xl sm:text-7xl lg:text-9xl font-heading font-extrabold tracking-tight text-white uppercase leading-[0.9]",children:["WHAT ",l.jsx("br",{}),"WILL ",l.jsx("br",{}),"YOU ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-white",children:"BUILD?"})]})}),l.jsxs("div",{className:"relative z-10 max-w-2xl mx-auto p-8 rounded-3xl glass-panel border border-cyan-500/40 bg-[#080c14]/90 shadow-2xl shadow-cyan-950/60 my-16 text-center space-y-6",children:[l.jsxs("div",{className:"flex items-center justify-center gap-2 text-xs text-cyan-400 uppercase tracking-widest font-bold",children:[l.jsx(tl,{className:"w-4 h-4"}),l.jsx("span",{children:"MISSION CONTROL // INITIATE TRANSMISSION"})]}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-300 font-sans leading-relaxed",children:"Open for high-impact AI systems architecture, research collaboration, point-cloud perception, and autonomous agent engineering opportunities."}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 pt-4",children:[l.jsxs("a",{href:"https://www.linkedin.com/in/atul-shukla-105341383",target:"_blank",rel:"noopener noreferrer",onClick:()=>Re.playClick(),onMouseEnter:()=>Re.playHover(),className:"w-full sm:w-auto px-6 py-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/60 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-cyan-950/50 cursor-pointer","data-cursor":"LINKEDIN",children:[l.jsx(sD,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{className:"font-bold",children:"[ CONNECT ON LINKEDIN ]"}),l.jsx(io,{className:"w-3.5 h-3.5"})]}),l.jsxs("a",{href:"https://github.com/atleekumaar",target:"_blank",rel:"noopener noreferrer",onClick:()=>Re.playClick(),onMouseEnter:()=>Re.playHover(),className:"w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-500 text-slate-300 hover:text-white font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all cursor-pointer","data-cursor":"GITHUB",children:[l.jsx(r0,{className:"w-4 h-4 text-slate-400"}),l.jsx("span",{className:"font-bold",children:"[ EXPLORE GITHUB ]"}),l.jsx(io,{className:"w-3.5 h-3.5"})]})]}),l.jsx("div",{className:"pt-2",children:l.jsx("button",{onClick:n,className:"text-[11px] text-slate-500 hover:text-cyan-400 underline transition-colors flex items-center justify-center gap-1.5 mx-auto cursor-pointer",children:t?l.jsxs("span",{className:"text-emerald-400 flex items-center gap-1",children:[l.jsx(cA,{className:"w-3.5 h-3.5"})," LINKEDIN PROFILE COPIED TO CLIPBOARD"]}):l.jsx("span",{children:"[ COPY VERIFIED PROFILE LINK ]"})})})]}),l.jsxs("div",{className:"relative z-10 pt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500",children:[l.jsx("div",{children:"CHARACTER-07 // ATLEE KUMAAR (ATUL SHUKLA)"}),l.jsx("div",{children:"ERA 2042 // ALL TELEMETRY AUTHENTICATED"})]})]})};function SD(){const[t,e]=Ce.useState(!1),[n,i]=Ce.useState(!1),a=()=>{const s=document.getElementById("missions");s&&s.scrollIntoView({behavior:"smooth"})};return l.jsxs("div",{className:"min-h-screen bg-[#05070a] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden",children:[!t&&l.jsx(wA,{onEnter:()=>e(!0)}),l.jsx(DA,{}),l.jsx(LA,{onOpenCommandPalette:()=>i(!0)}),l.jsx(UA,{isOpen:n,onClose:()=>i(!1)}),l.jsx(IA,{}),l.jsxs("main",{className:"relative z-10",children:[l.jsx(rD,{onExploreMissions:a}),l.jsx(oD,{}),l.jsx(lD,{}),l.jsx(cD,{}),l.jsx(hD,{}),l.jsx(pD,{}),l.jsx(mD,{}),l.jsx(gD,{}),l.jsx(xD,{}),l.jsx(vD,{}),l.jsx(_D,{}),l.jsx(yD,{})]})]})}K1.createRoot(document.getElementById("root")).render(l.jsx(Ce.StrictMode,{children:l.jsx(SD,{})}));
