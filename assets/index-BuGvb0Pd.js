var bE=Object.defineProperty;var EE=(t,e,n)=>e in t?bE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Md=(t,e,n)=>EE(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var yv={exports:{}},qu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ME=Symbol.for("react.transitional.element"),TE=Symbol.for("react.fragment");function Sv(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:ME,type:t,key:i,ref:e!==void 0?e:null,props:n}}qu.Fragment=TE;qu.jsx=Sv;qu.jsxs=Sv;yv.exports=qu;var l=yv.exports,bv={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp=Symbol.for("react.transitional.element"),AE=Symbol.for("react.portal"),NE=Symbol.for("react.fragment"),RE=Symbol.for("react.strict_mode"),CE=Symbol.for("react.profiler"),wE=Symbol.for("react.consumer"),DE=Symbol.for("react.context"),LE=Symbol.for("react.forward_ref"),UE=Symbol.for("react.suspense"),OE=Symbol.for("react.memo"),Ev=Symbol.for("react.lazy"),IE=Symbol.for("react.activity"),PE=Symbol.for("react.view_transition"),A0=Symbol.iterator;function zE(t){return t===null||typeof t!="object"?null:(t=A0&&t[A0]||t["@@iterator"],typeof t=="function"?t:null)}var Mv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tv=Object.assign,Av={};function ro(t,e,n){this.props=t,this.context=e,this.refs=Av,this.updater=n||Mv}ro.prototype.isReactComponent={};ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nv(){}Nv.prototype=ro.prototype;function Wp(t,e,n){this.props=t,this.context=e,this.refs=Av,this.updater=n||Mv}var Yp=Wp.prototype=new Nv;Yp.constructor=Wp;Tv(Yp,ro.prototype);Yp.isPureReactComponent=!0;var N0=Array.isArray;function Vf(){}var Lt={H:null,A:null,T:null,S:null},Rv=Object.prototype.hasOwnProperty;function qp(t,e,n){var i=n.ref;return{$$typeof:Xp,type:t,key:e,ref:i!==void 0?i:null,props:n}}function BE(t,e){return qp(t.type,e,t.props)}function Zp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xp}function FE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var R0=/\/+/g;function Td(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FE(""+t.key):e.toString(36)}function HE(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Vf,Vf):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function mr(t,e,n,i,a){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Xp:case AE:r=!0;break;case Ev:return r=t._init,mr(r(t._payload),e,n,i,a)}}if(r)return a=a(t),r=i===""?"."+Td(t,0):i,N0(a)?(n="",r!=null&&(n=r.replace(R0,"$&/")+"/"),mr(a,e,n,"",function(u){return u})):a!=null&&(Zp(a)&&(a=BE(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(R0,"$&/")+"/")+r)),e.push(a)),1;r=0;var o=i===""?".":i+":";if(N0(t))for(var c=0;c<t.length;c++)i=t[c],s=o+Td(i,c),r+=mr(i,e,n,s,a);else if(c=zE(t),typeof c=="function")for(t=c.call(t),c=0;!(i=t.next()).done;)i=i.value,s=o+Td(i,c++),r+=mr(i,e,n,s,a);else if(s==="object"){if(typeof t.then=="function")return mr(HE(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function Vl(t,e,n){if(t==null)return t;var i=[],a=0;return mr(t,i,"","",function(s){return e.call(n,s,a++)}),i}function GE(t){if(t._status===-1){var e=t._result,n=e();n.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),t._status===-1&&(t._status=0,t._result=n)}if(t._status===1)return t._result.default;throw t._result}var C0=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Cv(t){var e=Lt.T,n={};n.types=e!==null?e.types:null,Lt.T=n;try{var i=t(),a=Lt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Vf,C0)}catch(s){C0(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),Lt.T=e}}function wv(t){var e=Lt.T;if(e!==null){var n=e.types;n===null?e.types=[t]:n.indexOf(t)===-1&&n.push(t)}else Cv(wv.bind(null,t))}var VE={map:Vl,forEach:function(t,e,n){Vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vl(t,function(){e++}),e},toArray:function(t){return Vl(t,function(e){return e})||[]},only:function(t){if(!Zp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Activity=IE;ke.Children=VE;ke.Component=ro;ke.Fragment=NE;ke.Profiler=CE;ke.PureComponent=Wp;ke.StrictMode=RE;ke.Suspense=UE;ke.ViewTransition=PE;ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Lt;ke.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Lt.H.useMemoCache(t)}};ke.addTransitionType=wv;ke.cache=function(t){return function(){return t.apply(null,arguments)}};ke.cacheSignal=function(){return null};ke.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=Tv({},t.props),a=t.key;if(e!=null)for(s in e.key!==void 0&&(a=""+e.key),e)!Rv.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return qp(t.type,a,i)};ke.createContext=function(t){return t={$$typeof:DE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:wE,_context:t},t};ke.createElement=function(t,e,n){var i,a={},s=null;if(e!=null)for(i in e.key!==void 0&&(s=""+e.key),e)Rv.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),c=0;c<r;c++)o[c]=arguments[c+2];a.children=o}if(t&&t.defaultProps)for(i in r=t.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return qp(t,s,a)};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:LE,render:t}};ke.isValidElement=Zp;ke.lazy=function(t){return{$$typeof:Ev,_payload:{_status:-1,_result:t},_init:GE}};ke.memo=function(t,e){return{$$typeof:OE,type:t,compare:e===void 0?null:e}};ke.startTransition=Cv;ke.unstable_useCacheRefresh=function(){return Lt.H.useCacheRefresh()};ke.use=function(t){return Lt.H.use(t)};ke.useActionState=function(t,e,n){return Lt.H.useActionState(t,e,n)};ke.useCallback=function(t,e){return Lt.H.useCallback(t,e)};ke.useContext=function(t){return Lt.H.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t,e){return Lt.H.useDeferredValue(t,e)};ke.useEffect=function(t,e){return Lt.H.useEffect(t,e)};ke.useEffectEvent=function(t){return Lt.H.useEffectEvent(t)};ke.useId=function(){return Lt.H.useId()};ke.useImperativeHandle=function(t,e,n){return Lt.H.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Lt.H.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Lt.H.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Lt.H.useMemo(t,e)};ke.useOptimistic=function(t,e){return Lt.H.useOptimistic(t,e)};ke.useReducer=function(t,e,n){return Lt.H.useReducer(t,e,n)};ke.useRef=function(t){return Lt.H.useRef(t)};ke.useState=function(t){return Lt.H.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Lt.H.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Lt.H.useTransition()};ke.version="19.3.0";bv.exports=ke;var Ce=bv.exports,Dv={exports:{}},Zu={},Lv={exports:{}},Uv={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,P){var q=I.length;I.push(P);e:for(;0<q;){var V=q-1>>>1,Z=I[V];if(0<a(Z,P))I[V]=P,I[q]=Z,q=V;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var P=I[0],q=I.pop();if(q!==P){I[0]=q;e:for(var V=0,Z=I.length,ne=Z>>>1;V<ne;){var Ae=2*(V+1)-1,be=I[Ae],Ge=Ae+1,Xe=I[Ge];if(0>a(be,q))Ge<Z&&0>a(Xe,be)?(I[V]=Xe,I[Ge]=q,V=Ge):(I[V]=be,I[Ae]=q,V=Ae);else if(Ge<Z&&0>a(Xe,q))I[V]=Xe,I[Ge]=q,V=Ge;else break e}}return P}function a(I,P){var q=I.sortIndex-P.sortIndex;return q!==0?q:I.id-P.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();t.unstable_now=function(){return r.now()-o}}var c=[],u=[],h=1,m=null,d=3,p=!1,g=!1,b=!1,x=!1,f=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function S(I){for(var P=n(u);P!==null;){if(P.callback===null)i(u);else if(P.startTime<=I)i(u),P.sortIndex=P.expirationTime,e(c,P);else break;P=n(u)}}function T(I){if(b=!1,S(I),!g)if(n(c)!==null)g=!0,A||(A=!0,F());else{var P=n(u);P!==null&&k(T,P.startTime-I)}}var A=!1,N=-1,y=5,R=-1;function w(){return x?!0:!(t.unstable_now()-R<y)}function O(){if(x=!1,A){var I=t.unstable_now();R=I;var P=!0;try{e:{g=!1,b&&(b=!1,v(N),N=-1),p=!0;var q=d;try{t:{for(S(I),m=n(c);m!==null&&!(m.expirationTime>I&&w());){var V=m.callback;if(typeof V=="function"){m.callback=null,d=m.priorityLevel;var Z=V(m.expirationTime<=I);if(I=t.unstable_now(),typeof Z=="function"){m.callback=Z,S(I),P=!0;break t}m===n(c)&&i(c),S(I)}else i(c);m=n(c)}if(m!==null)P=!0;else{var ne=n(u);ne!==null&&k(T,ne.startTime-I),P=!1}}break e}finally{m=null,d=q,p=!1}P=void 0}}finally{P?F():A=!1}}}var F;if(typeof M=="function")F=function(){M(O)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,z=W.port2;W.port1.onmessage=O,F=function(){z.postMessage(null)}}else F=function(){f(O,0)};function k(I,P){N=f(function(){I(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var P=3;break;default:P=d}var q=d;d=P;try{return I()}finally{d=q}},t.unstable_requestPaint=function(){x=!0},t.unstable_runWithPriority=function(I,P){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=d;d=I;try{return P()}finally{d=q}},t.unstable_scheduleCallback=function(I,P,q){var V=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?V+q:V):q=V,I){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=q+Z,I={id:h++,callback:P,priorityLevel:I,startTime:q,expirationTime:Z,sortIndex:-1},q>V?(I.sortIndex=q,e(u,I),n(c)===null&&I===n(u)&&(b?(v(N),N=-1):b=!0,k(T,q-V))):(I.sortIndex=Z,e(c,I),g||p||(g=!0,A||(A=!0,F()))),I},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(I){var P=d;return function(){var q=d;d=P;try{return I.apply(this,arguments)}finally{d=q}}}})(Uv);Lv.exports=Uv;var kE=Lv.exports,Ov={exports:{}},Sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jE=Ce;function Iv(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ra(){}var Nn={d:{f:Ra,r:function(){throw Error(Iv(522))},D:Ra,C:Ra,L:Ra,m:Ra,X:Ra,S:Ra,M:Ra},p:0,findDOMNode:null},XE=Symbol.for("react.portal"),WE=Symbol.for("react.recoverable"),w0=Symbol.for("react.optimistic_key");function YE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:XE,key:i==null?null:i===w0?w0:""+i,children:t,containerInfo:e,implementation:n}}var Go=jE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ku(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Nn;Sn.browser=function(t){return{$$typeof:WE,_reason:t}};Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Iv(299));return YE(t,e,null,n)};Sn.flushSync=function(t){var e=Go.T,n=Nn.p;try{if(Go.T=null,Nn.p=2,t)return t()}finally{Go.T=e,Nn.p=n,Nn.d.f()}};Sn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Nn.d.C(t,e))};Sn.prefetchDNS=function(t){typeof t=="string"&&Nn.d.D(t)};Sn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Ku(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?Nn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&Nn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Sn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Ku(e.as,e.crossOrigin);Nn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&Nn.d.M(t)};Sn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Ku(n,e.crossOrigin);Nn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Sn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Ku(e.as,e.crossOrigin);Nn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else Nn.d.m(t)};Sn.requestFormReset=function(t){Nn.d.r(t)};Sn.unstable_batchedUpdates=function(t,e){return t(e)};Sn.useFormState=function(t,e,n){return Go.H.useFormState(t,e,n)};Sn.useFormStatus=function(){return Go.H.useHostTransitionStatus()};Sn.version="19.3.0";function Pv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pv)}catch(t){console.error(t)}}Pv(),Ov.exports=Sn;var qE=Ov.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jt=kE,zv=Ce,ZE=qE;function ee(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Bv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){for(var e=t,n=e;n&&!n.alternate;)e=n,e.flags&4098&&(t=e.return),n=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function Fv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hv(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function D0(t){if(Ml(t)!==t)throw Error(ee(188))}function KE(t){var e=t.alternate;if(!e){if(e=Ml(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return D0(a),t;if(s===i)return D0(a),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Gv(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Gv(t),e!==null)return e;t=t.sibling}return null}function Bn(t,e,n,i,a,s){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&n(t,i,a,s)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&Bn(t.child,e,n,i,a,s))return!0;t=t.sibling}return!1}function Ws(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function L0(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function Vv(t){var e=[null,null],n=Ws(t);return n===null||kv(e,t,n.child,{foundSelf:!1}),e}function kv(t,e,n,i){for(;n!==null;){if(n===e)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return t[1]=n,!0;t[0]=n}else if((n.tag!==22||n.memoizedState===null)&&kv(t,e,n.child,i))return!0;n=n.sibling}return!1}function Qt(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(ee(559))}}var yr=null,kf=null;function QE(t,e,n){return t===n?!0:t===e?(yr=t,!0):!1}function JE(t,e,n){return t===n?(kf=t,!1):t===e?(kf!==null&&(yr=t),!0):!1}function U0(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function jf(t,e,n){for(var i=0,a=t;a;a=n(a))i++;a=0;for(var s=e;s;s=n(s))a++;for(;0<i-a;)t=n(t),i--;for(;0<a-i;)e=n(e),a--;for(;i--;){if(t===e||e!==null&&t===e.alternate)return t;t=n(t),e=n(e)}return null}var Nt=Object.assign,$E=Symbol.for("react.element"),kl=Symbol.for("react.transitional.element"),Oo=Symbol.for("react.portal"),Sr=Symbol.for("react.fragment"),jv=Symbol.for("react.strict_mode"),Xf=Symbol.for("react.profiler"),Xv=Symbol.for("react.consumer"),Bi=Symbol.for("react.context"),Kp=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),Yf=Symbol.for("react.suspense_list"),Qp=Symbol.for("react.memo"),za=Symbol.for("react.lazy"),qf=Symbol.for("react.activity"),eM=Symbol.for("react.legacy_hidden"),tM=Symbol.for("react.memo_cache_sentinel"),Zf=Symbol.for("react.view_transition"),nM=Symbol.for("react.recoverable"),O0=Symbol.iterator;function _o(t){return t===null||typeof t!="object"?null:(t=O0&&t[O0]||t["@@iterator"],typeof t=="function"?t:null)}var iM=Symbol.for("react.client.reference");function Kf(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===iM?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Sr:return"Fragment";case Xf:return"Profiler";case jv:return"StrictMode";case Wf:return"Suspense";case Yf:return"SuspenseList";case qf:return"Activity";case Zf:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case Oo:return"Portal";case Bi:return t.displayName||"Context";case Xv:return(t._context.displayName||"Context")+".Consumer";case Kp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qp:return e=t.displayName||null,e!==null?e:Kf(t.type)||"Memo";case za:e=t._payload,t=t._init;try{return Kf(t(e))}catch{}}return null}var Io=Array.isArray,Be=zv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht=ZE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rs={pending:!1,data:null,method:null,action:null},Qf=[],br=-1;function Qi(t){return{current:t}}function dn(t){0>br||(t.current=Qf[br],Qf[br]=null,br--)}function Ut(t,e){br++,Qf[br]=t.current,t.current=e}var ji=Qi(null),il=Qi(null),qa=Qi(null),ou=Qi(null);function lu(t,e){switch(Ut(qa,e),Ut(il,t),Ut(ji,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Yg(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Yg(e),t=hS(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}dn(ji),Ut(ji,t)}function Xr(){dn(ji),dn(il),dn(qa)}function Jf(t){var e=t.memoizedState;e!==null&&(to._currentValue=e.memoizedState,Ut(ou,t)),e=ji.current;var n=hS(e,t.type);e!==n&&(Ut(il,t),Ut(ji,n))}function cu(t){il.current===t&&(dn(ji),dn(il)),ou.current===t&&(dn(ou),to._currentValue=Rs)}var Ad,I0;function Ia(t){if(Ad===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ad=e&&e[1]||"",I0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ad+t+I0}var Nd=!1;function Rd(t,e){if(!t||Nd)return"";Nd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(g){var d=g}Reflect.construct(t,[],m)}else{try{m.call()}catch(g){d=g}m=!1;try{var p=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),m=!0,new t}finally{m&&(p!==void 0?Object.defineProperty(t.prototype,"props",p):delete t.prototype.props)}}}else{try{throw Error()}catch(g){d=g}(m=t())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(g){if(g&&d&&typeof g.stack=="string")return[g.stack,d.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var c=r.split(`
`),u=o.split(`
`);for(a=i=0;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(i===c.length||a===u.length)for(i=c.length-1,a=u.length-1;1<=i&&0<=a&&c[i]!==u[a];)a--;for(;1<=i&&0<=a;i--,a--)if(c[i]!==u[a]){if(i!==1||a!==1)do if(i--,a--,0>a||c[i]!==u[a]){var h=`
`+c[i].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=i&&0<=a);break}}}finally{Nd=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ia(n):""}function aM(t,e){switch(t.tag){case 26:case 27:case 5:return Ia(t.type);case 16:return Ia("Lazy");case 13:return t.child!==e&&e!==null?Ia("Suspense Fallback"):Ia("Suspense");case 19:return Ia("SuspenseList");case 0:case 15:return Rd(t.type,!1);case 11:return Rd(t.type.render,!1);case 1:return Rd(t.type,!0);case 31:return Ia("Activity");case 30:return Ia("ViewTransition");default:return""}}function P0(t){try{var e="",n=null;do e+=aM(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var $f=Object.prototype.hasOwnProperty,Jp=Jt.unstable_scheduleCallback,Cd=Jt.unstable_cancelCallback,sM=Jt.unstable_shouldYield,rM=Jt.unstable_requestPaint,Yn=Jt.unstable_now,oM=Jt.unstable_getCurrentPriorityLevel,Wv=Jt.unstable_ImmediatePriority,Yv=Jt.unstable_UserBlockingPriority,uu=Jt.unstable_NormalPriority,lM=Jt.unstable_LowPriority,qv=Jt.unstable_IdlePriority,cM=Jt.log,uM=Jt.unstable_setDisableYieldValue,Tl=null,qn=null;function Va(t){if(typeof cM=="function"&&uM(t),qn&&typeof qn.setStrictMode=="function")try{qn.setStrictMode(Tl,t)}catch{}}var Zn=Math.clz32?Math.clz32:hM,dM=Math.log,fM=Math.LN2;function hM(t){return t>>>=0,t===0?32:31-(dM(t)/fM|0)|0}var jl=256,Xl=262144,Wl=4194304;function Ss(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Qu(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=Ss(i):(r&=o,r!==0?a=Ss(r):n||(n=o&~t,n!==0&&(a=Ss(n))))):(o=i&~s,o!==0?a=Ss(o):r!==0?a=Ss(r):n||(n=i&~t,n!==0&&(a=Ss(n)))),a===0?0:e!==0&&e!==a&&!(e&s)&&(s=a&-a,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:a}function Al(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Zv(t,e){e&8&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-Zn(n),a=1<<i;e|=t[i],n&=~a}return e}function pM(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kv(){var t=Wl;return Wl<<=1,!(Wl&62914560)&&(Wl=4194304),t}function wd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Nl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function mM(t,e,n,i,a,s){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,c=t.expirationTimes,u=t.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Zn(n),m=1<<h;o[h]=0,c[h]=-1;var d=u[h];if(d!==null)for(u[h]=null,h=0;h<d.length;h++){var p=d[h];p!==null&&(p.lane&=-536870913)}n&=~m}i!==0&&Qv(t,i,0),s!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function Qv(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Zn(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function Jv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function $v(t,e){var n=e&-e;return n=n&42?1:$p(n),n&(t.suspendedLanes|e)?0:n}function $p(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function em(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function e_(){var t=ht.p;return t!==0?t:(t=window.event,t===void 0?32:OS(t.type))}function z0(t,e){var n=ht.p;try{return ht.p=t,e()}finally{ht.p=n}}var ba=Math.random().toString(36).slice(2),ln="__reactFiber$"+ba,Fn="__reactProps$"+ba,oo="__reactContainer$"+ba,B0="__reactEvents$"+ba,gM="__reactListeners$"+ba,xM="__reactHandles$"+ba,F0="__reactResources$"+ba,Rl="__reactMarker$"+ba,du="__reactLoad$"+ba;function Ju(t){delete t[ln],delete t[Fn],delete t[gM],delete t[xM]}function Ms(t){var e;if(e=t[ln])return e;for(var n=t.parentNode;n;){if(e=n[oo]||n[ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tx(t);t!==null;){if(n=t[ln])return n;t=tx(t)}return e}t=n,n=t.parentNode}return null}function lo(t){if(t=t[ln]||t[oo]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Po(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ee(33))}function Ur(t){var e=t[F0];return e||(e=t[F0]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function sn(t){t[Rl]=!0}function t_(t){t[du]=void 0}var n_=new Set,i_={};function Ys(t,e){Wr(t,e),Wr(t+"Capture",e)}function Wr(t,e){for(i_[t]=e,t=0;t<e.length;t++)n_.add(e[t])}var vM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),H0={},G0={};function _M(t){return $f.call(G0,t)?!0:$f.call(H0,t)?!1:vM.test(t)?G0[t]=!0:(H0[t]=!0,!1)}var dt=!1;function V0(){var t=dt;return dt=!1,t}function Pc(t,e,n){if(_M(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,n)}}function Yl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,n)}}function $i(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,i)}}function kn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function a_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yM(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eh(t){if(!t._valueTracker){var e=a_(t)?"checked":"value";t._valueTracker=yM(t,e,""+t[e])}}function s_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=a_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}var SM=/[\n"\\]/g;function li(t){return t.replace(SM,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function th(t,e,n,i,a,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+kn(e)):t.value!==""+kn(e)&&(t.value=""+kn(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?r==="number"&&t.value==e?Dd(t,kn(t.value)):Dd(t,kn(e)):n!=null?Dd(t,kn(n)):i!=null&&t.removeAttribute("value"),a==null&&s!=null&&(t.defaultChecked=!!s),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+kn(o):t.removeAttribute("name")}function r_(t,e,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){eh(t);return}n=n!=null?""+kn(n):"",e=e!=null?""+kn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),eh(t)}function Dd(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Or(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+kn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function o_(t,e,n){if(e!=null&&(e=""+kn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+kn(n):""}function l_(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(ee(92));if(Io(i)){if(1<i.length)throw Error(ee(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=kn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),eh(t)}function Yr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function k0(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||bM.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function c_(t,e,n){if(e!=null&&typeof e!="object")throw Error(ee(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="",dt=!0);for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&(k0(t,a,i),dt=!0)}else for(var s in e)e.hasOwnProperty(s)&&k0(t,s,e[s])}function tm(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var EM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),MM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zc(t){return MM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fi(){}var nh=null;function nm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Er=null,Ir=null;function j0(t){var e=lo(t);if(e&&(t=e.stateNode)){var n=t[Fn]||null;e:switch(t=e.stateNode,e.type){case"input":if(th(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+li(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[Fn]||null;if(!a)throw Error(ee(90));th(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&s_(i)}break e;case"textarea":o_(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Or(t,!!n.multiple,e,!1)}}}var Ld=!1;function u_(t,e,n){if(Ld)return t(e,n);Ld=!0;try{var i=t(e);return i}finally{if(Ld=!1,(Er!==null||Ir!==null)&&(fd(),Er&&(e=Er,t=Ir,Ir=Er=null,j0(e),t)))for(e=0;e<t.length;e++)j0(t[e])}}function al(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Fn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ih=!1;if(pa)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){ih=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{ih=!1}var ka=null,im=null,Bc=null;function d_(){if(Bc)return Bc;var t,e=im,n=e.length,i,a="value"in ka?ka.value:ka.textContent,s=a.length;for(t=0;t<n&&e[t]===a[t];t++);var r=n-t;for(i=1;i<=r&&e[n-i]===a[s-i];i++);return Bc=a.slice(t,1<i?1-i:void 0)}function Fc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ql(){return!0}function X0(){return!1}function Cn(t){function e(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ql:X0,this.isPropagationStopped=X0,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$u=Cn(us),Cl=Nt({},us,{view:0,detail:0}),TM=Cn(Cl),Ud,Od,So,ed=Nt({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:am,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(Ud=t.screenX-So.screenX,Od=t.screenY-So.screenY):Od=Ud=0,So=t),Ud)},movementY:function(t){return"movementY"in t?t.movementY:Od}}),W0=Cn(ed),AM=Nt({},ed,{dataTransfer:0}),NM=Cn(AM),RM=Nt({},Cl,{relatedTarget:0}),Id=Cn(RM),CM=Nt({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),wM=Cn(CM),DM=Nt({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LM=Cn(DM),UM=Nt({},us,{data:0}),Y0=Cn(UM),OM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PM[t])?!!e[t]:!1}function am(){return zM}var BM=Nt({},Cl,{key:function(t){if(t.key){var e=OM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?IM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:am,charCode:function(t){return t.type==="keypress"?Fc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FM=Cn(BM),HM=Nt({},ed,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),q0=Cn(HM),GM=Nt({},us,{submitter:0}),VM=Cn(GM),kM=Nt({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:am}),jM=Cn(kM),XM=Nt({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),WM=Cn(XM),YM=Nt({},ed,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qM=Cn(YM),ZM=Nt({},us,{newState:0,oldState:0,source:0}),KM=Cn(ZM),QM=[9,13,27,32],sm=pa&&"CompositionEvent"in window,Vo=null;pa&&"documentMode"in document&&(Vo=document.documentMode);var JM=pa&&"TextEvent"in window&&!Vo,f_=pa&&(!sm||Vo&&8<Vo&&11>=Vo),Z0=" ",K0=!1;function h_(t,e){switch(t){case"keyup":return QM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mr=!1;function $M(t,e){switch(t){case"compositionend":return p_(e);case"keypress":return e.which!==32?null:(K0=!0,Z0);case"textInput":return t=e.data,t===Z0&&K0?null:t;default:return null}}function eT(t,e){if(Mr)return t==="compositionend"||!sm&&h_(t,e)?(t=d_(),Bc=im=ka=null,Mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return f_&&e.locale!=="ko"?null:e.data;default:return null}}var tT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Q0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tT[t.type]:e==="textarea"}function m_(t,e,n,i){Er?Ir?Ir.push(i):Ir=[i]:Er=i,e=Uu(e,"onChange"),0<e.length&&(n=new $u("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ko=null,sl=null;function nT(t){uS(t,0)}function td(t){var e=Po(t);if(s_(e))return t}function J0(t,e){if(t==="change")return e}var g_=!1;if(pa){var Pd;if(pa){var zd="oninput"in document;if(!zd){var $0=document.createElement("div");$0.setAttribute("oninput","return;"),zd=typeof $0.oninput=="function"}Pd=zd}else Pd=!1;g_=Pd&&(!document.documentMode||9<document.documentMode)}function eg(){ko&&(ko.detachEvent("onpropertychange",x_),sl=ko=null)}function x_(t){if(t.propertyName==="value"&&td(sl)){var e=[];m_(e,sl,t,nm(t)),u_(nT,e)}}function iT(t,e,n){t==="focusin"?(eg(),ko=e,sl=n,ko.attachEvent("onpropertychange",x_)):t==="focusout"&&eg()}function aT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return td(sl)}function sT(t,e){if(t==="click")return td(e)}function rT(t,e){if(t==="input"||t==="change")return td(e)}function oT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:oT;function rl(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!$f.call(e,a)||!Qn(t[a],e[a]))return!1}return!0}function ah(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ng(t,e){var n=tg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tg(n)}}function v_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function __(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ah(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ah(t.document)}return e}function rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var lT=pa&&"documentMode"in document&&11>=document.documentMode,Tr=null,sh=null,jo=null,rh=!1;function ig(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rh||Tr==null||Tr!==ah(i)||(i=Tr,"selectionStart"in i&&rm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&rl(jo,i)||(jo=i,i=Uu(sh,"onSelect"),0<i.length&&(e=new $u("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Tr)))}function hs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ar={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Bd={},y_={};pa&&(y_=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function qs(t){if(Bd[t])return Bd[t];if(!Ar[t])return t;var e=Ar[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in y_)return Bd[t]=e[n];return t}var S_=qs("animationend"),b_=qs("animationiteration"),E_=qs("animationstart"),cT=qs("transitionrun"),uT=qs("transitionstart"),dT=qs("transitioncancel"),M_=qs("transitionend"),T_=new Map,oh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");oh.push("scrollEnd");function Ni(t,e){T_.set(t,e),Ys(e,[t])}var fT=0;function ma(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Mi.identifierPrefix;var n=fT++;return t="_"+t+"t_"+n.toString(32)+"_",e.autoName=t}function ag(t){if(t==null||typeof t=="string")return t;var e=null,n=Vr;if(n!==null)for(var i=0;i<n.length;i++){var a=t[n[i]];if(a!=null){if(a==="none")return"none";e=e==null?a:e+(" "+a)}}return e??t.default}function Ea(t,e){return t=ag(t),e=ag(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var fu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],Nr=0,om=0;function nd(){for(var t=Nr,e=om=Nr=0;e<t;){var n=ii[e];ii[e++]=null;var i=ii[e];ii[e++]=null;var a=ii[e];ii[e++]=null;var s=ii[e];if(ii[e++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&A_(n,a,s)}}function id(t,e,n,i){ii[Nr++]=t,ii[Nr++]=e,ii[Nr++]=n,ii[Nr++]=i,om|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function lm(t,e,n,i){return id(t,e,n,i),hu(t)}function Zs(t,e){return id(t,null,null,e),hu(t)}function A_(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=t.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(a=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,a&&e!==null&&(a=31-Zn(n),t=s.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),s):null}function hu(t){if(50<el)throw el=0,Zc=null,Error(ee(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Rr={};function hT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new hT(t,e,n,i)}function cm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&1206910976,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function N_(t,e){t.flags&=1206910978;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Hc(t,e,n,i,a,s){var r=0;if(i=t,typeof i=="function")cm(i)&&(r=1);else if(typeof i=="string")r=G1(t,n,ji.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(i){case qf:return t=On(31,n,e,a),t.elementType=qf,t.lanes=s,t;case Sr:return Cs(n.children,a,s,e);case jv:r=8,a|=24;break;case Xf:return t=On(12,n,e,a|2),t.elementType=Xf,t.lanes=s,t;case Wf:return t=On(13,n,e,a),t.elementType=Wf,t.lanes=s,t;case Yf:return t=On(19,n,e,a),t.elementType=Yf,t.lanes=s,t;case eM:case Zf:return t=a|32,t=On(30,n,e,t),t.elementType=Zf,t.lanes=s,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Bi:r=10;break e;case Xv:r=9;break e;case Kp:r=11;break e;case Qp:r=14;break e;case za:r=16,i=null;break e}r=29,n=Error(ee(130,t===null?"null":typeof t,"")),i=null}return e=On(r,n,e,a),e.elementType=t,e.type=i,e.lanes=s,e}function Cs(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function Fd(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function R_(t){var e=On(18,null,null,0);return e.stateNode=t,e}function Hd(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var sg=new WeakMap;function ci(t,e){if(typeof t=="object"&&t!==null){var n=sg.get(t);return n!==void 0?n:(e={value:t,source:e,stack:P0(e)},sg.set(t,e),e)}return{value:t,source:e,stack:P0(e)}}var Cr=[],wr=0,pu=null,ol=0,si=[],ri=0,as=null,Hi=1,Gi="";function ra(t,e){Cr[wr++]=ol,Cr[wr++]=pu,pu=t,ol=e}function C_(t,e,n){si[ri++]=Hi,si[ri++]=Gi,si[ri++]=as,as=t;var i=Hi;t=Gi;var a=32-Zn(i)-1;i&=~(1<<a),n+=1;var s=32-Zn(e)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,Hi=1<<32-Zn(e)+a|n<<a|i,Gi=s+t}else Hi=1<<s|n<<a|i,Gi=t}function ad(t){t.return!==null&&(ra(t,1),C_(t,1,0))}function um(t){for(;t===pu;)pu=Cr[--wr],Cr[wr]=null,ol=Cr[--wr],Cr[wr]=null;for(;t===as;)as=si[--ri],si[ri]=null,Gi=si[--ri],si[ri]=null,Hi=si[--ri],si[ri]=null}function w_(t,e){si[ri++]=Hi,si[ri++]=Gi,si[ri++]=as,Hi=e.id,Gi=e.overflow,as=t}var rn=null,Dt=null,Je=!1,Za=null,ui=!1,lh=Error(ee(519));function ss(t){var e=Error(ee(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll(ci(e,t)),lh}function rg(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[ln]=t,e[Fn]=i,n){case"dialog":tt("cancel",e),tt("close",e);break;case"iframe":case"object":case"embed":tt("load",e);break;case"video":case"audio":for(n=0;n<fl.length;n++)tt(fl[n],e);break;case"source":tt("error",e);break;case"img":case"image":case"link":tt("error",e),tt("load",e);break;case"details":tt("toggle",e);break;case"input":tt("invalid",e),r_(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":tt("invalid",e);break;case"textarea":tt("invalid",e),l_(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||fS(e.textContent,n)?(i.popover!=null&&(tt("beforetoggle",e),tt("toggle",e)),i.onScroll!=null&&tt("scroll",e),i.onScrollEnd!=null&&tt("scrollend",e),i.onClick!=null&&(e.onclick=Fi),e=!0):e=!1,e||ss(t,!0)}function mu(t){for(rn=t.return;rn;)switch(rn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:rn=rn.return}}function er(t){if(t!==rn)return!1;if(!Je)return mu(t),Je=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Wh(t.type,t.memoizedProps)),n=!n),n&&Dt&&ss(t),mu(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));Dt=ex(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));Dt=ex(t)}else e===27?(e=Dt,ds(t.type)?(t=Kh,Kh=null,Dt=t):Dt=e):Dt=rn?fi(t.stateNode.nextSibling):null;return!0}function Us(){Dt=rn=null,Je=!1}function Gd(){var t=Za;return t!==null&&(Ln===null?Ln=t:Ln.push.apply(Ln,t),Za=null),t}function ll(t){Za===null?Za=[t]:Za.push(t)}var ch=Qi(null),Ks=null,la=null;function ja(t,e,n){Ut(ch,e._currentValue),e._currentValue=n}function da(t){t._currentValue=ch.current,dn(ch)}function Gc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function uh(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=a;for(var c=0;c<e.length;c++)if(o.context===e[c]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Gc(s.return,n,t),i||(r=null);break e}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(ee(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Gc(r,n,t),r=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),Gc(a.return,n,t),r=a.child,r=r!==null?r.sibling:null):r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Os(t,e,n,i){t=null;for(var a=e,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(ee(387));if(r=r.memoizedProps,r!==null){var o=a.type;Qn(a.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(a===ou.current){if(r=a.alternate,r===null)throw Error(ee(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(to):t=[to])}a=a.return}return t!==null&&uh(e,t,n,i),e.flags|=262144,t!==null}function gu(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Is(t){Ks=t,la=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function cn(t){return D_(Ks,t)}function Zl(t,e){return Ks===null&&Is(t),D_(t,e)}function D_(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},la===null){if(t===null)throw Error(ee(308));la=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else la=la.next=e;return n}var pT=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},mT=Jt.unstable_scheduleCallback,gT=Jt.unstable_NormalPriority,Yt={$$typeof:Bi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dm(){return{controller:new pT,data:new Map,refCount:0}}function wl(t){t.refCount--,t.refCount===0&&mT(gT,function(){t.controller.abort()})}function og(t,e){if(t.pendingLanes&4194048){var n=t.transitionTypes;for(n===null&&(n=t.transitionTypes=[]),t=0;t<e.length;t++){var i=e[t];n.indexOf(i)===-1&&n.push(i)}}}var zo=null;function xT(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Xo=null,dh=0,Ps=0,Pr=null;function vT(t,e){if(Xo===null){var n=Xo=[];dh=0,Ps=Fm(),Pr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return dh++,e.then(lg,lg),e}function lg(){if(--dh===0&&(zo=null,Xo!==null)){Pr!==null&&(Pr.status="fulfilled");var t=Xo;Xo=null,Ps=0,Pr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function _T(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var cg=Be.S;Be.S=function(t,e){if(Zy=Yn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&vT(t,e),zo!==null)for(var n=Jr;n!==null;)og(n,zo),n=n.next;if(n=t.types,n!==null){for(var i=Jr;i!==null;)og(i,n),i=i.next;if(Ps!==0){i=zo,i===null&&(i=zo=[]);for(var a=0;a<n.length;a++){var s=n[a];i.indexOf(s)===-1&&i.push(s)}}}cg!==null&&cg(t,e)};var ws=Qi(null);function fm(){var t=ws.current;return t!==null?t:At.pooledCache}function Vc(t,e){e===null?Ut(ws,ws.current):Ut(ws,e.pool)}function L_(){var t=fm();return t===null?null:{parent:Yt._currentValue,pool:t}}var co=Error(ee(460)),hm=Error(ee(474)),sd=Error(ee(542)),xu={then:function(){}};function ug(t){return t=t.status,t==="fulfilled"||t==="rejected"}function U_(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Fi,Fi),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,fg(t),t===void 0&&!("reason"in e)?Error(ee(600)):t;default:if(typeof e.status=="string")e.then(Fi,Fi);else{if(t=At,t!==null&&100<t.shellSuspendCounter)throw Error(ee(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,fg(t),t}throw Ds=e,co}}function bs(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ds=n,co):n}}var Ds=null;function dg(){if(Ds===null)throw Error(ee(459));var t=Ds;return Ds=null,t}function fg(t){if(t===co||t===sd)throw Error(ee(483))}var zr=null,cl=0;function Kl(t){var e=cl;return cl+=1,zr===null&&(zr=[]),U_(zr,t,e)}function Ca(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ql(t,e){throw e.$$typeof===$E?Error(ee(525)):(t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function O_(t){function e(f,v){if(t){var M=f.deletions;M===null?(f.deletions=[v],f.flags|=16):M.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f){for(var v=new Map;f!==null;)f.key===null?v.set(f.index,f):v.set(f.key,f),f=f.sibling;return v}function a(f,v){return f=ua(f,v),f.index=0,f.sibling=null,f}function s(f,v,M){return f.index=M,t?(M=f.alternate,M!==null?(M=M.index,M<v?(f.flags|=2,v):M):(f.flags|=134217730,v)):(f.flags|=1048576,v)}function r(f){return t&&f.alternate===null&&(f.flags|=134217730),f}function o(f,v,M,S){return v===null||v.tag!==6?(v=Fd(M,f.mode,S),v.return=f,v):(v=a(v,M),v.return=f,v)}function c(f,v,M,S){var T=M.type;return T===Sr?(f=h(f,v,M.props.children,S,M.key),Ca(f,M),f):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===za&&bs(T)===v.type)?(v=a(v,M.props),Ca(v,M),v.return=f,v):(v=Hc(M.type,M.key,M.props,null,f.mode,S),Ca(v,M),v.return=f,v)}function u(f,v,M,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==M.containerInfo||v.stateNode.implementation!==M.implementation?(v=Hd(M,f.mode,S),v.return=f,v):(v=a(v,M.children||[]),v.return=f,v)}function h(f,v,M,S,T){return v===null||v.tag!==7?(v=Cs(M,f.mode,S,T),v.return=f,v):(v=a(v,M),v.return=f,v)}function m(f,v,M){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Fd(""+v,f.mode,M),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case kl:return M=Hc(v.type,v.key,v.props,null,f.mode,M),Ca(M,v),M.return=f,M;case Oo:return v=Hd(v,f.mode,M),v.return=f,v;case za:return v=bs(v),m(f,v,M)}if(Io(v)||_o(v))return v=Cs(v,f.mode,M,null),v.return=f,v;if(typeof v.then=="function")return m(f,Kl(v),M);if(v.$$typeof===Bi)return m(f,Zl(f,v),M);Ql(f,v)}return null}function d(f,v,M,S){var T=v!==null?v.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return T!==null?null:o(f,v,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case kl:return M.key===T?c(f,v,M,S):null;case Oo:return M.key===T?u(f,v,M,S):null;case za:return M=bs(M),d(f,v,M,S)}if(Io(M)||_o(M))return T!==null?null:h(f,v,M,S,null);if(typeof M.then=="function")return d(f,v,Kl(M),S);if(M.$$typeof===Bi)return d(f,v,Zl(f,M),S);Ql(f,M)}return null}function p(f,v,M,S,T){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(M)||null,o(v,f,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case kl:return f=f.get(S.key===null?M:S.key)||null,c(v,f,S,T);case Oo:return f=f.get(S.key===null?M:S.key)||null,u(v,f,S,T);case za:return S=bs(S),p(f,v,M,S,T)}if(Io(S)||_o(S))return f=f.get(M)||null,h(v,f,S,T,null);if(typeof S.then=="function")return p(f,v,M,Kl(S),T);if(S.$$typeof===Bi)return p(f,v,M,Zl(v,S),T);Ql(v,S)}return null}function g(f,v,M,S){for(var T=null,A=null,N=v,y=v=0,R=null;N!==null&&y<M.length;y++){N.index>y?(R=N,N=null):R=N.sibling;var w=d(f,N,M[y],S);if(w===null){N===null&&(N=R);break}t&&N&&w.alternate===null&&e(f,N),v=s(w,v,y),A===null?T=w:A.sibling=w,A=w,N=R}if(y===M.length)return n(f,N),Je&&ra(f,y),T;if(N===null){for(;y<M.length;y++)N=m(f,M[y],S),N!==null&&(v=s(N,v,y),A===null?T=N:A.sibling=N,A=N);return Je&&ra(f,y),T}for(N=i(N);y<M.length;y++)R=p(N,f,y,M[y],S),R!==null&&(t&&(w=R.alternate,w!==null&&N.delete(w.key===null?y:w.key)),v=s(R,v,y),A===null?T=R:A.sibling=R,A=R);return t&&N.forEach(function(O){return e(f,O)}),Je&&ra(f,y),T}function b(f,v,M,S){if(M==null)throw Error(ee(151));for(var T=null,A=null,N=v,y=v=0,R=null,w=M.next();N!==null&&!w.done;y++,w=M.next()){N.index>y?(R=N,N=null):R=N.sibling;var O=d(f,N,w.value,S);if(O===null){N===null&&(N=R);break}t&&N&&O.alternate===null&&e(f,N),v=s(O,v,y),A===null?T=O:A.sibling=O,A=O,N=R}if(w.done)return n(f,N),Je&&ra(f,y),T;if(N===null){for(;!w.done;y++,w=M.next())w=m(f,w.value,S),w!==null&&(v=s(w,v,y),A===null?T=w:A.sibling=w,A=w);return Je&&ra(f,y),T}for(N=i(N);!w.done;y++,w=M.next())w=p(N,f,y,w.value,S),w!==null&&(t&&(R=w.alternate,R!==null&&N.delete(R.key===null?y:R.key)),v=s(w,v,y),A===null?T=w:A.sibling=w,A=w);return t&&N.forEach(function(F){return e(f,F)}),Je&&ra(f,y),T}function x(f,v,M,S){if(typeof M=="object"&&M!==null&&M.type===Sr&&M.key===null&&M.props.ref===void 0&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case kl:e:{for(var T=M.key;v!==null;){if(v.key===T){if(T=M.type,T===Sr){if(v.tag===7){n(f,v.sibling),S=a(v,M.props.children),Ca(S,M),S.return=f,f=S;break e}}else if(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===za&&bs(T)===v.type){n(f,v.sibling),S=a(v,M.props),Ca(S,M),S.return=f,f=S;break e}n(f,v);break}else e(f,v);v=v.sibling}M.type===Sr?(S=Cs(M.props.children,f.mode,S,M.key),Ca(S,M),S.return=f,f=S):(S=Hc(M.type,M.key,M.props,null,f.mode,S),Ca(S,M),S.return=f,f=S)}return r(f);case Oo:e:{for(T=M.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===M.containerInfo&&v.stateNode.implementation===M.implementation){n(f,v.sibling),S=a(v,M.children||[]),S.return=f,f=S;break e}else{n(f,v);break}else e(f,v);v=v.sibling}S=Hd(M,f.mode,S),S.return=f,f=S}return r(f);case za:return M=bs(M),x(f,v,M,S)}if(Io(M))return g(f,v,M,S);if(_o(M)){if(T=_o(M),typeof T!="function")throw Error(ee(150));return M=T.call(M),b(f,v,M,S)}if(typeof M.then=="function")return x(f,v,Kl(M),S);if(M.$$typeof===Bi)return x(f,v,Zl(f,M),S);Ql(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,v!==null&&v.tag===6?(n(f,v.sibling),S=a(v,M),S.return=f,f=S):(n(f,v),S=Fd(M,f.mode,S),S.return=f,f=S),r(f)):n(f,v)}return function(f,v,M,S){try{cl=0;var T=x(f,v,M,S);return zr=null,T}catch(N){if(N===co||N===sd)throw N;var A=On(29,N,null,f.mode);return A.lanes=S,A.return=f,A}finally{}}}var zs=O_(!0),I_=O_(!1),Ba=!1;function pm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=hu(t),A_(t,null,n),e}return id(t,i,e,n),hu(t)}function Wo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jv(t,n)}}function Vd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=e:s=s.next=e}else a=s=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var hh=!1;function Yo(){if(hh){var t=Pr;if(t!==null)throw t}}function qo(t,e,n,i){hh=!1;var a=t.updateQueue;Ba=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var c=o,u=c.next;c.next=null,r===null?s=u:r.next=u,r=c;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=c))}if(s!==null){var m=a.baseState;r=0,h=u=c=null,o=s;do{var d=o.lane&-536870913,p=d!==o.lane;if(p?(at&d)===d:(i&d)===d){d!==0&&d===Ps&&(hh=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var g=t,b=o;d=e;var x=n;switch(b.tag){case 1:if(g=b.payload,typeof g=="function"){m=g.call(x,m,d);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,d=typeof g=="function"?g.call(x,m,d):g,d==null)break e;m=Nt({},m,d);break e;case 2:Ba=!0}}d=o.callback,d!==null&&(t.flags|=64,p&&(t.flags|=8192),p=a.callbacks,p===null?a.callbacks=[d]:p.push(d))}else p={lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=p,c=m):h=h.next=p,r|=d;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(c=m),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),ls|=r,t.lanes=r,t.memoizedState=m}}function P_(t,e){if(typeof t!="function")throw Error(ee(191,t));t.call(e)}function z_(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)P_(n[t],e)}var rs=Qi(null),vu=Qi(0);function hg(t,e){t=_a,Ut(vu,t),Ut(rs,e),_a=t|e.baseLanes}function ph(){Ut(vu,_a),Ut(rs,rs.current)}function mm(){_a=vu.current,dn(rs),dn(vu)}var pn=Qi(null),_n=null;function Ja(t){var e=t.alternate;Ut(fn,fn.current&1),Ut(pn,t),_n===null&&(e===null||rs.current!==null||e.memoizedState!==null)&&(_n=t)}function mh(t){Ut(fn,fn.current),Ut(pn,t),_n===null&&(_n=t)}function B_(t){t.tag===22?(Ut(fn,fn.current),Ut(pn,t),_n===null&&(_n=t)):$a()}function $a(){Ut(fn,fn.current),Ut(pn,pn.current)}function jn(t){dn(pn),_n===t&&(_n=null),dn(fn)}var fn=Qi(0);function ul(t,e){Ut(pn,pn.current),Ut(fn,e)}function gm(t){dn(fn),dn(pn),_n===t&&(_n=null)}function _u(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Zh(n)||km(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ga=0,Ye=null,Mt=null,Wt=null,yu=!1,Br=!1,Bs=!1,Su=0,dl=0,Fr=null,yT=0;function Bt(){throw Error(ee(321))}function xm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function vm(t,e,n,i,a,s){return ga=s,Ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Be.H=t===null||t.memoizedState===null?my:gy,Bs=!1,s=n(i,a),Bs=!1,Br&&(s=H_(e,n,i,a)),F_(t),s}function F_(t){Be.H=bu;var e=Mt!==null&&Mt.next!==null;if(ga=0,Wt=Mt=Ye=null,yu=!1,dl=0,Fr=null,e)throw Error(ee(300));t===null||qt||(t=t.dependencies,t!==null&&gu(t)&&(qt=!0))}function H_(t,e,n,i){Ye=t;var a=0;do{if(Br&&(Fr=null),dl=0,Br=!1,25<=a)throw Error(ee(301));if(a+=1,Wt=Mt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Be.H=RT,s=e(n,i)}while(Br);return s}function ST(){var t=Be.H,e=t.useState()[0];return e=typeof e.then=="function"?Dl(e):e,t=t.useState()[0],(Mt!==null?Mt.memoizedState:null)!==t&&(Ye.flags|=1024),e}function _m(){var t=Su!==0;return Su=0,t}function ym(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Sm(t){if(yu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}yu=!1}ga=0,Wt=Mt=Ye=null,Br=!1,dl=Su=0,Fr=null}function An(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Ye.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function kt(){if(Mt===null){var t=Ye.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Wt===null?Ye.memoizedState:Wt.next;if(e!==null)Wt=e,Mt=t;else{if(t===null)throw Ye.alternate===null?Error(ee(467)):Error(ee(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Wt===null?Ye.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function rd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(t){var e=dl;return dl+=1,Fr===null&&(Fr=[]),t=U_(Fr,t,e),e=Ye,(Wt===null?e.memoizedState:Wt.next)===null&&(e=e.alternate,Be.H=e===null||e.memoizedState===null?my:gy),t}function od(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Dl(t);if(t.$$typeof===nM)return;if(t.$$typeof===Bi)return cn(t)}throw Error(ee(438,String(t)))}function bm(t){var e=null,n=Ye.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Ye.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=rd(),Ye.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=tM;return e.index++,n}function xa(t,e){return typeof e=="function"?e(t):e}function kc(t){var e=kt();return Em(e,Mt,t)}function Em(t,e,n){var i=t.queue;if(i===null)throw Error(ee(311));i.lastRenderedReducer=n;var a=t.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}e.baseQueue=a=s,i.pending=null}if(s=t.baseState,a===null)t.memoizedState=s;else{e=a.next;var o=r=null,c=null,u=e,h=!1;do{var m=u.lane&-536870913;if(m!==u.lane?(at&m)===m:(ga&m)===m){var d=u.revertLane;if(d===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),m===Ps&&(h=!0);else if((ga&d)===d){u=u.next,d===Ps&&(h=!0);continue}else m={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},c===null?(o=c=m,r=s):c=c.next=m,Ye.lanes|=d,ls|=d;m=u.action,Bs&&n(s,m),s=u.hasEagerState?u.eagerState:n(s,m)}else d={lane:m,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},c===null?(o=c=d,r=s):c=c.next=d,Ye.lanes|=m,ls|=m;u=u.next}while(u!==null&&u!==e);if(c===null?r=s:c.next=o,!Qn(s,t.memoizedState)&&(qt=!0,h&&(n=Pr,n!==null)))throw n;t.memoizedState=s,t.baseState=r,t.baseQueue=c,i.lastRenderedState=s}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function kd(t){var e=kt(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,s=e.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=t(s,r.action),r=r.next;while(r!==a);Qn(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function G_(t,e,n){var i=Ye,a=kt(),s=Je;if(s){if(n===void 0)throw Error(ee(407));n=n()}else n=e();var r=!Qn((Mt||a).memoizedState,n);if(r&&(a.memoizedState=n,qt=!0),a=a.queue,Mm(j_.bind(null,i,a,t),[t]),t=a.getSnapshot!==e||r||Wt!==null&&(Wt.memoizedState.tag&1)!==0,qr(t?9:8,{destroy:void 0},k_.bind(null,i,a,n,e),null),t){if(i.flags|=2048,At===null)throw Error(ee(349));s||ga&127||V_(i,e,n)}return n}function V_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ye.updateQueue,e===null?(e=rd(),Ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k_(t,e,n,i){e.value=n,e.getSnapshot=i,X_(e)&&W_(t)}function j_(t,e,n){return n(function(){X_(e)&&W_(t)})}function X_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function W_(t){var e=Zs(t,2);e!==null&&Pn(e,t,2)}function gh(t){var e=An();if(typeof t=="function"){var n=t;if(t=n(),Bs){Va(!0);try{n()}finally{Va(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e}function Y_(t,e,n,i){return t.baseState=n,Em(t,Mt,typeof i=="function"?i:xa)}function bT(t,e,n,i,a){if(cd(t))throw Error(ee(485));if(t=e.action,t!==null){var s={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Be.T!==null?n(!0):s.isTransition=!1,i(s),n=e.pending,n===null?(s.next=e.pending=s,q_(e,s)):(s.next=n.next,e.pending=n.next=s)}}function q_(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var s=Be.T,r={};r.types=s!==null?s.types:null,Be.T=r;try{var o=n(a,i),c=Be.S;c!==null&&c(r,o),pg(t,e,o)}catch(u){xh(t,e,u)}finally{s!==null&&r.types!==null&&(s.types=r.types),Be.T=s}}else try{s=n(a,i),pg(t,e,s)}catch(u){xh(t,e,u)}}function pg(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){mg(t,e,i)},function(i){return xh(t,e,i)}):mg(t,e,n)}function mg(t,e,n){e.status="fulfilled",e.value=n,Z_(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,q_(t,n)))}function xh(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Z_(e),e=e.next;while(e!==i)}t.action=null}function Z_(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function K_(t,e){return e}function gg(t,e){if(Je){var n=At.formState;if(n!==null){e:{var i=Ye;if(Je){if(Dt){t:{for(var a=Dt,s=ui;a.nodeType!==8;){if(!s){a=null;break t}if(a=fi(a.nextSibling),a===null){a=null;break t}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Dt=fi(a.nextSibling),i=a.data==="F!";break e}}ss(i)}i=!1}i&&(e=n[0])}}return n=An(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:K_,lastRenderedState:e},n.queue=i,n=fy.bind(null,Ye,i),i.dispatch=n,i=gh(!1),s=Rm.bind(null,Ye,!1,i.queue),i=An(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=bT.bind(null,Ye,a,s,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function xg(t){var e=kt();return Q_(e,Mt,t)}function Q_(t,e,n){if(e=Em(t,e,K_)[0],t=kc(xa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Dl(e)}catch(r){throw r===co?sd:r}else i=e;e=kt();var a=e.queue,s=a.dispatch;return n!==e.memoizedState&&(Ye.flags|=2048,qr(9,{destroy:void 0},ET.bind(null,a,n),null)),[i,s,t]}function ET(t,e){t.action=e}function vg(t){var e=kt(),n=Mt;if(n!==null)return Q_(e,n,t);kt(),e=e.memoizedState,n=kt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function qr(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Ye.updateQueue,e===null&&(e=rd(),Ye.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function J_(){return kt().memoizedState}function jc(t,e,n,i){var a=An();Ye.flags|=t,a.memoizedState=qr(1|e,{destroy:void 0},n,i===void 0?null:i)}function ld(t,e,n,i){var a=kt();i=i===void 0?null:i;var s=a.memoizedState.inst;Mt!==null&&i!==null&&xm(i,Mt.memoizedState.deps)?a.memoizedState=qr(e,s,n,i):(Ye.flags|=t,a.memoizedState=qr(1|e,s,n,i))}function _g(t,e){jc(8390656,8,t,e)}function Mm(t,e){ld(2048,8,t,e)}function MT(t){Ye.flags|=4;var e=Ye.updateQueue;if(e===null)e=rd(),Ye.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function $_(t){var e=kt().memoizedState;return MT({ref:e,nextImpl:t}),function(){if(ft&2)throw Error(ee(440));return e.impl.apply(void 0,arguments)}}function ey(t,e){return ld(4,2,t,e)}function ty(t,e){return ld(4,4,t,e)}function ny(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iy(t,e,n){n=n!=null?n.concat([t]):null,ld(4,4,ny.bind(null,e,t),n)}function Tm(){}function ay(t,e){var n=kt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&xm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function sy(t,e){var n=kt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&xm(e,i[1]))return i[0];if(i=t(),Bs){Va(!0);try{t()}finally{Va(!1)}}return n.memoizedState=[i,e],i}function Am(t,e,n){return n===void 0||ga&1073741824&&!(at&261930)?t.memoizedState=e:(t.memoizedState=n,t=Qy(),Ye.lanes|=t,ls|=t,n)}function ry(t,e,n,i){return Qn(n,e)?n:rs.current!==null?(t=Am(t,n,i),Qn(t,e)||(qt=!0),t):!(ga&106)||ga&1073741824&&!(at&261930)?(qt=!0,t.memoizedState=n):(t=Qy(),Ye.lanes|=t,ls|=t,e)}function oy(t,e,n,i,a){var s=ht.p;ht.p=s!==0&&8>s?s:8;var r=Be.T,o={};o.types=r!==null?r.types:null,Be.T=o,Rm(t,!1,e,n);try{var c=a(),u=Be.S;if(u!==null&&u(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=_T(c,i);Zo(t,e,h,Kn(t))}else Zo(t,e,i,Kn(t))}catch(m){Zo(t,e,{then:function(){},status:"rejected",reason:m},Kn())}finally{ht.p=s,r!==null&&o.types!==null&&(r.types=o.types),Be.T=r}}function TT(){}function vh(t,e,n,i){if(t.tag!==5)throw Error(ee(476));var a=ly(t).queue;oy(t,a,e,Rs,n===null?TT:function(){return cy(t),n(i)})}function ly(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Rs,baseState:Rs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:Rs},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function cy(t){var e=ly(t);e.next===null&&(e=t.alternate.memoizedState),Zo(t,e.next.queue,{},Kn())}function Nm(){return cn(to)}function uy(){return kt().memoizedState}function dy(){return kt().memoizedState}function AT(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Kn();t=Ka(n);var i=Qa(e,t,n);i!==null&&(Pn(i,e,n),Wo(i,e,n)),e={cache:dm()},t.payload=e;return}e=e.return}}function NT(t,e,n){var i=Kn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},cd(t)?hy(e,n):(n=lm(t,e,n,i),n!==null&&(Pn(n,t,i),py(n,e,i)))}function fy(t,e,n){var i=Kn();Zo(t,e,n,i)}function Zo(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(cd(t))hy(e,a);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Qn(o,r))return id(t,e,a,0),At===null&&nd(),!1}catch{}finally{}if(n=lm(t,e,a,i),n!==null)return Pn(n,t,i),py(n,e,i),!0}return!1}function Rm(t,e,n,i){if(i={lane:2,revertLane:Fm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},cd(t)){if(e)throw Error(ee(479))}else e=lm(t,n,i,2),e!==null&&Pn(e,t,2)}function cd(t){var e=t.alternate;return t===Ye||e!==null&&e===Ye}function hy(t,e){Br=yu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function py(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jv(t,n)}}var bu={readContext:cn,use:od,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useLayoutEffect:Bt,useInsertionEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useSyncExternalStore:Bt,useId:Bt,useHostTransitionStatus:Bt,useFormState:Bt,useActionState:Bt,useOptimistic:Bt,useMemoCache:Bt,useCacheRefresh:Bt,useEffectEvent:Bt},my={readContext:cn,use:od,useCallback:function(t,e){return An().memoizedState=[t,e===void 0?null:e],t},useContext:cn,useEffect:_g,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,jc(4194308,4,ny.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jc(4194308,4,t,e)},useInsertionEffect:function(t,e){jc(4,2,t,e)},useMemo:function(t,e){var n=An();e=e===void 0?null:e;var i=t();if(Bs){Va(!0);try{t()}finally{Va(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=An();if(n!==void 0){var a=n(e);if(Bs){Va(!0);try{n(e)}finally{Va(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=NT.bind(null,Ye,t),[i.memoizedState,t]},useRef:function(t){var e=An();return t={current:t},e.memoizedState=t},useState:function(t){t=gh(t);var e=t.queue,n=fy.bind(null,Ye,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Tm,useDeferredValue:function(t,e){var n=An();return Am(n,t,e)},useTransition:function(){var t=gh(!1);return t=oy.bind(null,Ye,t.queue,!0,!1),An().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Ye,a=An();if(Je){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),At===null)throw Error(ee(349));at&127||V_(i,e,n)}a.memoizedState=n;var s={value:n,getSnapshot:e};return a.queue=s,_g(j_.bind(null,i,s,t),[t]),i.flags|=2048,qr(9,{destroy:void 0},k_.bind(null,i,s,n,e),null),n},useId:function(){var t=An(),e=At.identifierPrefix;if(Je){var n=Gi,i=Hi;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Su++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=yT++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Nm,useFormState:gg,useActionState:gg,useOptimistic:function(t){var e=An();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Rm.bind(null,Ye,!0,n),n.dispatch=e,[t,e]},useMemoCache:bm,useCacheRefresh:function(){return An().memoizedState=AT.bind(null,Ye)},useEffectEvent:function(t){var e=An(),n={impl:t};return e.memoizedState=n,function(){if(ft&2)throw Error(ee(440));return n.impl.apply(void 0,arguments)}}},gy={readContext:cn,use:od,useCallback:ay,useContext:cn,useEffect:Mm,useImperativeHandle:iy,useInsertionEffect:ey,useLayoutEffect:ty,useMemo:sy,useReducer:kc,useRef:J_,useState:function(){return kc(xa)},useDebugValue:Tm,useDeferredValue:function(t,e){var n=kt();return ry(n,Mt.memoizedState,t,e)},useTransition:function(){var t=kc(xa)[0],e=kt().memoizedState;return[typeof t=="boolean"?t:Dl(t),e]},useSyncExternalStore:G_,useId:uy,useHostTransitionStatus:Nm,useFormState:xg,useActionState:xg,useOptimistic:function(t,e){var n=kt();return Y_(n,Mt,t,e)},useMemoCache:bm,useCacheRefresh:dy,useEffectEvent:$_},RT={readContext:cn,use:od,useCallback:ay,useContext:cn,useEffect:Mm,useImperativeHandle:iy,useInsertionEffect:ey,useLayoutEffect:ty,useMemo:sy,useReducer:kd,useRef:J_,useState:function(){return kd(xa)},useDebugValue:Tm,useDeferredValue:function(t,e){var n=kt();return Mt===null?Am(n,t,e):ry(n,Mt.memoizedState,t,e)},useTransition:function(){var t=kd(xa)[0],e=kt().memoizedState;return[typeof t=="boolean"?t:Dl(t),e]},useSyncExternalStore:G_,useId:uy,useHostTransitionStatus:Nm,useFormState:vg,useActionState:vg,useOptimistic:function(t,e){var n=kt();return Mt!==null?Y_(n,Mt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:bm,useCacheRefresh:dy,useEffectEvent:$_};function jd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _h={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kn(),a=Ka(i);a.payload=e,n!=null&&(a.callback=n),e=Qa(t,a,i),e!==null&&(Pn(e,t,i),Wo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kn(),a=Ka(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Qa(t,a,i),e!==null&&(Pn(e,t,i),Wo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kn(),i=Ka(n);i.tag=2,e!=null&&(i.callback=e),e=Qa(t,i,n),e!==null&&(Pn(e,t,n),Wo(e,t,n))}};function yg(t,e,n,i,a,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,r):e.prototype&&e.prototype.isPureReactComponent?!rl(n,i)||!rl(a,s):!0}function Sg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_h.enqueueReplaceState(e,e.state,null)}function Fs(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=Nt({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function xy(t){fu(t)}function vy(t){console.error(t)}function _y(t){fu(t)}function Eu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function bg(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function yh(t,e,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Eu(t,e)},n}function yy(t){return t=Ka(t),t.tag=3,t}function Sy(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;t.payload=function(){return a(s)},t.callback=function(){bg(e,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){bg(e,n,i),typeof a!="function"&&(es===null?es=new Set([this]):es.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function CT(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Os(e,n,a,!0),n=pn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return _n===null?Du():n.alternate===null&&Ft===0&&(Ft=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===xu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Qd(t,i,a)),!1;case 22:return n.flags|=65536,i===xu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Qd(t,i,a)),!1}throw Error(ee(435,n.tag))}return Qd(t,i,a),Du(),!1}if(Je)return e=pn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==lh&&(t=Error(ee(422),{cause:i}),ll(ci(t,n)))):(i!==lh&&(e=Error(ee(423),{cause:i}),ll(ci(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=ci(i,n),a=yh(t.stateNode,i,a),Vd(t,a),Ft!==4&&(Ft=2)),!1;var s=Error(ee(520),{cause:i});if(s=ci(s,n),$o===null?$o=[s]:$o.push(s),Ft!==4&&(Ft=2),e===null)return!0;i=ci(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=yh(n.stateNode,i,t),Vd(n,t),!1;case 1:if(e=n.type,s=n.stateNode,!(n.flags&128)&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(es===null||!es.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=yy(a),Sy(a,t,n,i),Vd(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Cm=Error(ee(461)),qt=!1;function Kt(t,e,n,i){e.child=t===null?I_(e,null,n,i):zs(e,t.child,n,i)}function Eg(t,e,n,i,a){n=n.render;var s=e.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Is(e),i=vm(t,e,n,r,s,a),o=_m(),t!==null&&!qt?(ym(t,e,a),va(t,e,a)):(Je&&o&&ad(e),e.flags|=1,Kt(t,e,i,a),e.child)}function Mg(t,e,n,i,a){if(t===null){var s=n.type;return typeof s=="function"&&!cm(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,by(t,e,s,i,a)):(t=Hc(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!Dm(t,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(r,i)&&t.ref===e.ref)return va(t,e,a)}return e.flags|=1,t=ua(s,i),t.ref=e.ref,t.return=e,e.child=t}function by(t,e,n,i,a){if(t!==null){var s=t.memoizedProps;if(rl(s,i)&&t.ref===e.ref)if(qt=!1,e.pendingProps=i=s,Dm(t,a))t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,va(t,e,a)}return Sh(t,e,n,i,a)}function Ey(t,e,n,i){var a=i.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(s=s!==null?s.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,e.child=null;return Tg(t,e,s,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vc(e,s!==null?s.cachePool:null),s!==null?hg(e,s):ph(),B_(e);else return i=e.lanes=536870912,Tg(t,e,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Vc(e,s.cachePool),hg(e,s),$a(),e.memoizedState=null):(t!==null&&Vc(e,null),ph(),$a());return Kt(t,e,a,n),e.child}function Ko(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Tg(t,e,n,i,a){var s=fm();return s=s===null?null:{parent:Yt._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&Vc(e,null),ph(),B_(e),t!==null&&Os(t,e,i,!0),e.childLanes=a,null}function Xc(t,e){return e=ud({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Ag(t,e,n){return zs(e,t.child,null,n),t=Xc(e,e.pendingProps),t.flags|=2,jn(e),e.memoizedState=null,t}function wT(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Je){if(i.mode==="hidden")return t=Xc(e,i),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Ko(null,t);if(mh(e),(t=Dt)?(t=bS(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:as!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},n=R_(t),n.return=e,e.child=n,rn=e,Dt=null)):t=null,t===null)throw ss(e);return e.lanes=536870912,null}return Xc(e,i)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(mh(e),a)if(e.flags&256)e.flags&=-257,e=Ag(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(ee(558));else if(qt||Os(t,e,n,!1),a=(n&t.childLanes)!==0,qt||a){if(rs.current===null){if(i=At,i!==null&&(r=$v(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Zs(t,r),Pn(i,t,r),Cm;Du()}e=Ag(t,e,n)}else t=s.treeContext,Dt=fi(r.nextSibling),rn=e,Je=!0,Za=null,ui=!1,t!==null&&w_(e,t),e=Xc(e,i),e.flags|=134221824;return e}return t=ua(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function gr(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(ee(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Sh(t,e,n,i,a){return Is(e),n=vm(t,e,n,i,void 0,a),i=_m(),t!==null&&!qt?(ym(t,e,a),va(t,e,a)):(Je&&i&&ad(e),e.flags|=1,Kt(t,e,n,a),e.child)}function Ng(t,e,n,i,a,s){return Is(e),e.updateQueue=null,n=H_(e,i,n,a),F_(t),i=_m(),t!==null&&!qt?(ym(t,e,s),va(t,e,s)):(Je&&i&&ad(e),e.flags|=1,Kt(t,e,n,s),e.child)}function Rg(t,e,n,i,a){if(Is(e),e.stateNode===null){var s=Rr,r=n.contextType;typeof r=="object"&&r!==null&&(s=cn(r)),s=new n(i,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=_h,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=i,s.state=e.memoizedState,s.refs={},pm(e),r=n.contextType,s.context=typeof r=="object"&&r!==null?cn(r):Rr,s.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(jd(e,n,r,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&_h.enqueueReplaceState(s,s.state,null),qo(e,i,s,a),Yo(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,c=Fs(n,o);s.props=c;var u=s.context,h=n.contextType;r=Rr,typeof h=="object"&&h!==null&&(r=cn(h));var m=n.getDerivedStateFromProps;h=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||u!==r)&&Sg(e,s,i,r),Ba=!1;var d=e.memoizedState;s.state=d,qo(e,i,s,a),Yo(),u=e.memoizedState,o||d!==u||Ba?(typeof m=="function"&&(jd(e,n,m,i),u=e.memoizedState),(c=Ba||yg(e,n,c,i,d,u,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),s.props=i,s.state=u,s.context=r,i=c):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,fh(t,e),r=e.memoizedProps,h=Fs(n,r),s.props=h,m=e.pendingProps,d=s.context,u=n.contextType,c=Rr,typeof u=="object"&&u!==null&&(c=cn(u)),o=n.getDerivedStateFromProps,(u=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==m||d!==c)&&Sg(e,s,i,c),Ba=!1,d=e.memoizedState,s.state=d,qo(e,i,s,a),Yo();var p=e.memoizedState;r!==m||d!==p||Ba||t!==null&&t.dependencies!==null&&gu(t.dependencies)?(typeof o=="function"&&(jd(e,n,o,i),p=e.memoizedState),(h=Ba||yg(e,n,h,i,d,p,c)||t!==null&&t.dependencies!==null&&gu(t.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),s.props=i,s.state=p,s.context=c,i=h):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return s=i,gr(t,e),i=(e.flags&128)!==0,s||i?(s=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&i?(e.child=zs(e,t.child,null,a),e.child=zs(e,null,n,a)):Kt(t,e,n,a),e.memoizedState=s.state,t=e.child):t=va(t,e,a),t}function Cg(t,e,n,i){return Us(),e.flags|=256,Kt(t,e,n,i),e.child}var bh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eh(t){return{baseLanes:t,cachePool:L_()}}function Mh(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Wn),t}function My(t,e,n){var i=e.pendingProps,a=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(fn.current&2)!==0),r&&(a=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(Je){if(a?Ja(e):$a(),(t=Dt)?(t=bS(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:as!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},n=R_(t),n.return=e,e.child=n,rn=e,Dt=null)):t=null,t===null)throw ss(e);return km(t)?e.lanes=32:e.lanes=536870912,null}return s=i.children,i=i.fallback,a?($a(),a=e.mode,s=ud({mode:"hidden",children:s},a),i=Cs(i,a,n,null),s.return=e,i.return=e,s.sibling=i,e.child=s,i=e.child,i.memoizedState=Eh(n),i.childLanes=Mh(t,r,n),e.memoizedState=bh,Ko(null,i)):(Ja(e),wm(e,s))}var o=t.memoizedState;if(o!==null){var c=o.dehydrated;if(c!==null)return DT(t,e,s,r,i,c,o,n)}return a?($a(),a=i.fallback,s=e.mode,o=t.child,c=o.sibling,i=ua(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,c!==null?a=ua(c,a):(a=Cs(a,s,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,Ko(null,i),i=e.child,a=t.child.memoizedState,a===null?a=Eh(n):(s=a.cachePool,s!==null?(o=Yt._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=L_(),a={baseLanes:a.baseLanes|n,cachePool:s}),i.memoizedState=a,i.childLanes=Mh(t,r,n),e.memoizedState=bh,Ko(t.child,i)):(Ja(e),n=t.child,t=n.sibling,n=ua(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function wm(t,e){return e=ud({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ud(t,e){return t=On(22,t,null,e),t.lanes=0,t}function Jl(t,e,n){return zs(e,t.child,null,n),t=wm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DT(t,e,n,i,a,s,r,o){if(n)return e.flags&256?(Ja(e),e.flags&=-257,Jl(t,e,o)):e.memoizedState!==null?($a(),e.child=t.child,e.flags|=128,null):($a(),s=a.fallback,r=e.mode,a=ud({mode:"visible",children:a.children},r),s=Cs(s,r,o,null),s.flags|=2,a.return=e,s.return=e,a.sibling=s,e.child=a,zs(e,t.child,null,o),a=e.child,a.memoizedState=Eh(o),a.childLanes=Mh(t,i,o),e.memoizedState=bh,Ko(null,a));if(Ja(e),km(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var c=i.dgst;return i=c,i!==""&&(a=Error(ee(419)),a.stack="",a.digest=i,ll({value:a,source:null,stack:null})),Jl(t,e,o)}if(qt||Os(t,e,o,!1),i=(o&t.childLanes)!==0,qt||i){if(rs.current!==null)return Jl(t,e,o);if(i=At,i!==null&&(a=$v(i,o),a!==0&&a!==r.retryLane))throw r.retryLane=a,Zs(t,a),Pn(i,t,a),Cm;return Zh(s)||Du(),Jl(t,e,o)}return Zh(s)?(e.flags|=192,e.child=t.child,null):(t=r.treeContext,Dt=fi(s.nextSibling),rn=e,Je=!0,Za=null,ui=!1,t!==null&&w_(e,t),e=wm(e,a.children),e.flags|=134221824,e)}function wg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Gc(t.return,e,n)}function Dg(t){for(var e=null;t!==null;){var n=t.alternate;n!==null&&_u(n)===null&&(e=t),t=t.sibling}return e}function $l(t,e,n,i,a,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function Xd(t){var e=t.child;for(t.child=null;e!==null;){var n=e.sibling;e.sibling=t.child,t.child=e,e=n}}function Th(t,e,n){var i=e.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=fn.current;if(e.flags&128)return ul(e,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,ul(e,r),a==="backwards"&&t!==null?(Xd(t),Kt(t,e,i,n),Xd(t)):Kt(t,e,i,n),i=Je?ol:0,!o&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wg(t,n,e);else if(t.tag===19)wg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"backwards":n=Dg(e.child),n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null,Xd(e)),$l(e,!0,a,null,s,i);break;case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&_u(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}$l(e,!0,n,null,s,i);break;case"together":$l(e,!1,null,null,void 0,i);break;case"independent":e.memoizedState=null;break;default:n=Dg(e.child),n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),$l(e,!1,a,n,s,i)}return e.child}function Lg(t,e,n){var i=e.pendingProps;return ja(e,e.type,i.value),Kt(t,e,i.children,n),e.child}function va(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ls|=e.lanes,!(n&e.childLanes))if(t!==null){if(Os(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=ua(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ua(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dm(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&gu(t)))}function LT(t,e,n){switch(e.tag){case 3:lu(e,e.stateNode.containerInfo),ja(e,Yt,t.memoizedState.cache),Us();break;case 27:case 5:Jf(e);break;case 4:lu(e,e.stateNode.containerInfo);break;case 10:ja(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,mh(e),null;break;case 13:var i=e.memoizedState;if(i!==null){if(i.dehydrated!==null)return Ja(e),e.flags|=128,null;i=Os(t,e,n,!1);var a=e.child.childLanes;return i||n&a?My(t,e,n):(Ja(e),t=va(t,e,n),t!==null?t.sibling:null)}Ja(e);break;case 19:if(e.flags&128)return Th(t,e,n);if(a=(t.flags&128)!==0,i=(n&e.childLanes)!==0,i||(Os(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return Th(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ul(e,fn.current),i)break;return null;case 22:return e.lanes=0,Ey(t,e,n,e.pendingProps);case 24:ja(e,Yt,t.memoizedState.cache)}return va(t,e,n)}function Ty(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)qt=!0;else{if(!Dm(t,n)&&!(e.flags&128))return qt=!1,LT(t,e,n);qt=!!(t.flags&131072)}else qt=!1,Je&&e.flags&1048576&&C_(e,ol,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=bs(e.elementType),e.type=t,typeof t=="function")cm(t)?(i=Fs(t,i),e.tag=1,e=Rg(null,e,t,i,n)):(e.tag=0,e=Sh(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===Kp){e.tag=11,e=Eg(null,e,t,i,n);break e}else if(a===Qp){e.tag=14,e=Mg(null,e,t,i,n);break e}else if(a===Bi){e.tag=10,e.type=t,e=Lg(null,e,n);break e}}throw e=Kf(t)||t,Error(ee(306,e,""))}}return e;case 0:return Sh(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=Fs(i,e.pendingProps),Rg(t,e,i,a,n);case 3:e:{if(lu(e,e.stateNode.containerInfo),t===null)throw Error(ee(387));i=e.pendingProps;var s=e.memoizedState;a=s.element,fh(t,e),qo(e,i,null,n);var r=e.memoizedState;if(i=r.cache,ja(e,Yt,i),i!==s.cache&&uh(e,[Yt],n,!0),Yo(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=Cg(t,e,i,n);break e}else if(i!==a){a=ci(Error(ee(424)),e),ll(a),e=Cg(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Dt=fi(t.firstChild),rn=e,Je=!0,Za=null,ui=!0,n=I_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Us(),i===a){e=va(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 26:return gr(t,e),t===null?(n=ix(e.type,null,e.pendingProps,null))?e.memoizedState=n:Je||(e.stateNode=pS(e.type,e.pendingProps,qa.current,e)):e.memoizedState=ix(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Jf(e),t===null&&Je&&(i=e.stateNode=ES(e.type,e.pendingProps,qa.current),rn=e,ui=!0,a=Dt,ds(e.type)?(Kh=a,Dt=fi(i.firstChild)):Dt=a),Kt(t,e,e.pendingProps.children,n),gr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Je&&((a=i=Dt)&&(i=A1(i,e.type,e.pendingProps,ui),i!==null?(e.stateNode=i,rn=e,Dt=fi(i.firstChild),ui=!1,a=!0):a=!1),a||ss(e)),Jf(e),a=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,i=s.children,Wh(a,s)?i=null:r!==null&&Wh(a,r)&&(e.flags|=32),e.memoizedState!==null&&(a=vm(t,e,ST,null,null,n),to._currentValue=a),gr(t,e),Kt(t,e,i,n),e.child;case 6:return t===null&&Je&&((t=n=Dt)&&(n=N1(n,e.pendingProps,ui),n!==null?(e.stateNode=n,rn=e,Dt=null,t=!0):t=!1),t||ss(e)),null;case 13:return My(t,e,n);case 4:return lu(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return Eg(t,e,e.type,e.pendingProps,n);case 7:return i=e.pendingProps,gr(t,e),Kt(t,e,i,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:return Lg(t,e,n);case 9:return a=e.type._context,i=e.pendingProps.children,Is(e),a=cn(a),i=i(a),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return Mg(t,e,e.type,e.pendingProps,n);case 15:return by(t,e,e.type,e.pendingProps,n);case 19:return Th(t,e,n);case 31:return wT(t,e,n);case 22:return Ey(t,e,n,e.pendingProps);case 24:return Is(e),i=cn(Yt),t===null?(a=fm(),a===null&&(a=At,s=dm(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),e.memoizedState={parent:i,cache:a},pm(e),ja(e,Yt,a)):(t.lanes&n&&(fh(t,e),qo(e,null,null,n),Yo()),a=t.memoizedState,s=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),ja(e,Yt,i)):(i=s.cache,ja(e,Yt,i),i!==a.cache&&uh(e,[Yt],n,!0))),Kt(t,e,e.pendingProps.children,n),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=e.pendingProps,i.name!=null&&i.name!=="auto"?e.flags|=t===null?18882560:18874368:Je&&ad(e),t!==null&&t.memoizedProps.name!==i.name?e.flags|=4194816:gr(t,e),Kt(t,e,i.children,n),e.child;case 29:throw e.pendingProps}throw Error(ee(156,e.tag))}function ea(t){t.flags|=4}function Wd(t,e,n,i,a){var s;if((s=(t.mode&32)!==0)&&(s=n===null?rx(e,i):rx(e,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),s){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(eS())t.flags|=8192;else throw Ds=xu,hm}else t.flags&=-16777217}function Ug(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!NS(e))if(eS())t.flags|=8192;else throw Ds=xu,hm}function ec(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Kv():536870912,t.lanes|=e,Zr|=e)}function bo(t,e){if(!Je)switch(t.tailMode){case"visible":break;case"collapsed":for(var n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null;break;default:for(e=t.tail,n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function UT(t,e,n){var i=e.pendingProps;switch(um(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return wt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),da(Yt),Xr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(er(e)?ea(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gd())),wt(e),null;case 26:var a=e.type,s=e.memoizedState;return t===null?(ea(e),s!==null?(wt(e),Ug(e,s)):(wt(e),Wd(e,a,null,i,n))):s?s!==t.memoizedState?(ea(e),wt(e),Ug(e,s)):(wt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&ea(e),wt(e),Wd(e,a,t,i,n)),null;case 27:if(cu(e),n=qa.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&ea(e);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return wt(e),e.subtreeFlags&=-33554433,null}t=ji.current,er(e)?rg(e):(t=ES(a,i,n),e.stateNode=t,ea(e))}return wt(e),e.subtreeFlags&=-33554433,null;case 5:if(cu(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&ea(e);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return wt(e),e.subtreeFlags&=-33554433,null}if(s=ji.current,er(e))rg(e);else{var r=pl(qa.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[ln]=e,s[Fn]=i;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(hn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ea(e)}}return wt(e),e.subtreeFlags&=-33554433,Wd(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&ea(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=qa.current,er(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=rn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[ln]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||fS(t.nodeValue,n)),t||ss(e,!0)}else t=pl(t).createTextNode(i),t[ln]=e,e.stateNode=t}return wt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=er(e),n!==null){if(t===null){if(!i)throw Error(ee(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(557));t[ln]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),t=!1}else n=Gd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(jn(e),e):(jn(e),null);if(e.flags&128)throw Error(ee(558))}return wt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=er(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ee(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ee(317));a[ln]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),a=!1}else a=Gd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(jn(e),e):(jn(e),null)}return jn(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),ec(e,e.updateQueue),wt(e),null);case 4:return Xr(),t===null&&Hm(e.stateNode.containerInfo),e.flags|=67108864,wt(e),null;case 10:return da(e.type),wt(e),null;case 19:if(gm(e),i=e.memoizedState,i===null)return wt(e),null;if(a=(e.flags&128)!==0,s=i.rendering,s===null)if(a)bo(i,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=_u(t),s!==null){for(e.flags|=128,bo(i,!1),t=s.updateQueue,e.updateQueue=t,ec(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)N_(n,t),n=n.sibling;return ul(e,fn.current&1|2),Je&&ra(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&Yn()>Cu&&(e.flags|=128,a=!0,bo(i,!1),e.lanes=4194304)}else{if(!a)if(t=_u(s),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,ec(e,t),bo(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!s.alternate&&!Je)return wt(e),null}else 2*Yn()-i.renderingStartTime>Cu&&n!==536870912&&(e.flags|=128,a=!0,bo(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}if(i.tail!==null){t=i.tail;e:{for(n=t;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Yn(),t.sibling=null,s=fn.current,s=a?s&1|2:s&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Je?ul(e,s):(n=s,Ut(pn,e),Ut(fn,n),_n===null&&(_n=e)),Je&&ra(e,i.treeForkCount),t}return wt(e),null;case 22:case 23:return jn(e),mm(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),n=e.updateQueue,n!==null&&ec(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&dn(ws),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),da(Yt),wt(e),null;case 25:return null;case 30:return e.flags|=33554432,wt(e),null}throw Error(ee(156,e.tag))}function OT(t,e){switch(um(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return da(Yt),Xr(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return cu(e),null;case 31:if(e.memoizedState!==null){if(jn(e),e.alternate===null)throw Error(ee(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(jn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gm(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return Xr(),null;case 10:return da(e.type),null;case 22:case 23:return jn(e),mm(),t!==null&&dn(ws),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return da(Yt),null;case 25:return null;default:return null}}function Ay(t,e){switch(um(e),e.tag){case 3:da(Yt),Xr();break;case 26:case 27:case 5:cu(e);break;case 4:Xr();break;case 31:e.memoizedState!==null&&jn(e);break;case 13:jn(e);break;case 19:gm(e);break;case 10:da(e.type);break;case 22:case 23:jn(e),mm(),t!==null&&dn(ws);break;case 24:da(Yt)}}function Ll(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){bt(e,e.return,o)}}function os(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=e;var c=n,u=o;try{u()}catch(h){bt(a,c,h)}}}i=i.next}while(i!==s)}}catch(h){bt(e,e.return,h)}}function Ny(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{z_(e,n)}catch(i){bt(t,t.return,i)}}}function Ry(t,e,n){n.props=Fs(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){bt(t,e,i)}}function Ii(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:var a=t.stateNode,s=ma(t.memoizedProps,a);(a.ref===null||a.ref.name!==s)&&(a.ref=xS(s)),i=a.ref;break;case 7:if(t.stateNode===null){var r=new $n(t);Bn(t.child,!1,M1,r,void 0,void 0),t.stateNode=r}i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(o){bt(t,e,o)}}function on(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){bt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){bt(t,e,a)}else n.current=null}function Mu(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var n=0;n<e.length;n++)SS(t.stateNode,e[n])}function Og(t){for(var e=t.return;e!==null&&(Um(e)&&SS(t.stateNode,e.stateNode),!Lm(e));)e=e.return}function Qo(t){for(var e=t.return;e!==null&&(Um(e)&&T1(t.stateNode,e.stateNode),!Lm(e));)e=e.return}function Lm(t){return t.tag===5||t.tag===3||t.tag===27}function Um(t){return t&&t.tag===7&&t.stateNode!==null}function Ah(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){bt(t,t.return,a)}}function Yd(t,e,n){try{var i=t.stateNode;r1(i,t.type,n,e),i[Fn]=e}catch(a){bt(t,t.return,a)}}function Cy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ds(t.type)||t.tag===4}function qd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ds(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nh(t,e,n,i){var a=t.tag;if(a===5||a===6)a=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(a),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fi)),Mu(t,i),dt=!0;else if(a!==4&&(a===27&&(Mu(t,i),i=null,ds(t.type)&&(n=t.stateNode,e=null)),t=t.child,t!==null))for(Nh(t,e,n,i),t=t.sibling;t!==null;)Nh(t,e,n,i),t=t.sibling}function Tu(t,e,n,i){var a=t.tag;if(a===5||a===6)a=t.stateNode,e?n.insertBefore(a,e):n.appendChild(a),Mu(t,i),dt=!0;else if(a!==4&&(a===27&&(Mu(t,i),i=null,ds(t.type)&&(n=t.stateNode)),t=t.child,t!==null))for(Tu(t,e,n,i),t=t.sibling;t!==null;)Tu(t,e,n,i),t=t.sibling}function wy(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);hn(e,i,n),e[ln]=t,e[Fn]=n}catch(s){bt(t,t.return,s)}}var Au=!1,Xn=null;function Ig(t){(t.tag===30||t.subtreeFlags&33554432)&&(Au=!0)}var zi=null;function Pg(){var t=zi;return zi=null,t}var Un=0;function uo(t,e,n,i,a){return Un=0,Dy(t.child,e,n,i,a)}function Dy(t,e,n,i,a){for(var s=!1;t!==null;){if(t.tag===5){var r=t.stateNode;if(i!==null){var o=Yh(r);i.push(o),o.view&&(s=!0)}else s||Yh(r).view&&(s=!0);Au=!0,mS(r,Un===0?e:e+"_"+Un,n),Un++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&a||Dy(t.child,e,n,i,a)&&(s=!0));t=t.sibling}return s}function Yi(t,e){for(;t!==null;)t.tag===5?gS(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Yi(t.child,e)),t=t.sibling}function Wc(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Wc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(ee(544));var n=e.name;e=Ea(e.default,e.share),e!=="none"&&(uo(t,n,e,null,!1)||Yi(t.child,!1))}t=t.sibling}}function Rh(t,e){if(t.tag===30){var n=t.stateNode,i=t.memoizedProps,a=ma(i,n),s=Ea(i.default,n.paired?i.share:i.enter);s!=="none"?uo(t,a,s,null,!1)?(Wc(t),n.paired||e||Kr(t,i.onEnter)):Yi(t.child,!1):Wc(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)Rh(t,e),t=t.sibling;else Wc(t)}function Ch(t){if(Xn!==null&&Xn.size!==0){var e=Xn;if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var n=t.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=e.get(i);if(a!==void 0){var s=Ea(n.default,n.share);if(s!=="none"&&(uo(t,i,s,null,!1)?(s=t.stateNode,a.paired=s,s.paired=a,Kr(t,n.onShare)):Yi(t.child,!1)),e.delete(i),e.size===0)break}}}Ch(t)}t=t.sibling}}}function wh(t){if(t.tag===30){var e=t.memoizedProps,n=ma(e,t.stateNode),i=Xn!==null?Xn.get(n):void 0,a=Ea(e.default,i!==void 0?e.share:e.exit);a!=="none"&&(uo(t,n,a,null,!1)?i!==void 0?(a=t.stateNode,i.paired=a,a.paired=i,Xn.delete(n),Kr(t,e.onShare)):Kr(t,e.onExit):Yi(t.child,!1)),Xn!==null&&Ch(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)wh(t),t=t.sibling;else Xn!==null&&Ch(t)}function Ly(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,n=ma(e,t.stateNode);e=Ea(e.default,e.update),t.flags&=-5,e!=="none"&&uo(t,n,e,t.memoizedState=[],!1)}else t.subtreeFlags&33554432&&Ly(t);t=t.sibling}}function Dh(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var e=t.stateNode;e.paired!==null&&(e.paired=null,Yi(t.child,!1))}Dh(t)}t=t.sibling}}function Yc(t){if(t.tag===30)t.stateNode.paired=null,Yi(t.child,!1),Dh(t);else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)Yc(t),t=t.sibling;else Dh(t)}function Uy(t){for(t=t.child;t!==null;)t.tag===30?Yi(t.child,!1):t.subtreeFlags&33554432&&Uy(t),t=t.sibling}function Om(t,e,n,i,a,s,r){for(var o=!1;e!==null;){if(e.tag===5){var c=e.stateNode;if(s!==null&&Un<s.length){var u=s[Un],h=Yh(c);(u.view||h.view)&&(o=!0);var m;if(m=(t.flags&4)===0)if(h.clip)m=!0;else{m=u.rect;var d=h.rect;m=m.y!==d.y||m.x!==d.x||m.height!==d.height||m.width!==d.width}m&&(t.flags|=4),h.abs?h=!u.abs:(u=u.rect,h=h.rect,h=u.height!==h.height||u.width!==h.width),h&&(t.flags|=32)}else t.flags|=32;t.flags&4&&mS(c,Un===0?n:n+"_"+Un,a),o&&t.flags&4||(zi===null&&(zi=[]),zi.push(c,Un===0?i:i+"_"+Un,e.memoizedProps)),Un++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r?t.flags|=e.flags&32:Om(t,e.child,n,i,a,s,r)&&(o=!0));e=e.sibling}return o}function Oy(t,e){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=t.stateNode,a=ma(n,i),s=Ea(n.default,n.update),r;r=t.memoizedState,t.memoizedState=null,i=t;var o=t.child;Un=0,a=Om(i,o,a,a,s,r,!1),t.flags&4&&a&&Kr(t,n.onUpdate)}else t.subtreeFlags&33554432&&Oy(t);t=t.sibling}}var nn=!1,xt=!1,wi=!1,Zd=!1,zg=typeof WeakSet=="function"?WeakSet:Set,an=null,Di=!1,Bo=!1,Nu=!1,Lh=!1;function IT(t,e,n){if(t=t.containerInfo,jh=no,t=__(t),rm(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var s=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var o=0,c=-1,u=-1,h=0,m=0,d=t,p=null;t:for(;;){for(var g;d!==i||s!==0&&d.nodeType!==3||(c=o+s),d!==r||a!==0&&d.nodeType!==3||(u=o+a),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===t)break t;if(p===i&&++h===s&&(c=o),p===r&&++m===a&&(u=o),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}i=c===-1||u===-1?null:{start:c,end:u}}else i=null}i=i||{start:0,end:0}}else i=null;for(Xh={focusedElem:t,selectionRange:i},no=!1,n=(n&335544064)===n,an=e,e=n?9270:1024;an!==null;){if(t=an,n&&(i=t.deletions,i!==null))for(s=0;s<i.length;s++)n&&wh(i[s]);if(t.alternate===null&&t.flags&2)n&&Ig(t),tc(n);else{if(t.tag===22){if(i=t.alternate,t.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&wh(i),tc(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Ig(t),tc(n);continue}}i=t.child,t.subtreeFlags&e&&i!==null?(i.return=t,an=i):(n&&Ly(t),tc(n))}}Xn=null}function tc(t){for(;an!==null;){var e=an,n=t,i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var s=e.stateNode;try{var r=Fs(e.type,a);n=s.getSnapshotBeforeUpdate(r,i),s.__reactInternalSnapshotBeforeUpdate=n}catch(o){bt(e,e.return,o)}}break;case 3:if(a&1024){if(i=e.stateNode.containerInfo,n=i.nodeType,n===9)qh(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":qh(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=ma(i.memoizedProps,i.stateNode),a=e.memoizedProps,a=Ea(a.default,a.update),a!=="none"&&uo(i,n,a,i.memoizedState=[],!0));break;default:if(a&1024)throw Error(ee(163))}if(i=e.sibling,i!==null){i.return=e.return,an=i;break}an=e.return}}function Iy(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Li(t,n),i&4&&Ll(5,n);break;case 1:if(Li(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){bt(n,n.return,r)}else{var a=Fs(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){bt(n,n.return,r)}}i&64&&Ny(n),i&512&&Ii(n,n.return);break;case 3:if(Li(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{z_(t,e)}catch(r){bt(n,n.return,r)}}break;case 27:e===null&&i&4&&wy(n);case 26:case 5:Li(t,n),e===null&&i&4&&Ah(n),i&512&&Ii(n,n.return);break;case 12:Li(t,n);break;case 31:Li(t,n),i&4&&Fy(t,n);break;case 13:Li(t,n),i&4&&Hy(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=YT.bind(null,n),R1(t,n))));break;case 22:if(i=n.memoizedState!==null||nn,!i){var s=e!==null&&e.memoizedState!==null||xt;e=nn,a=xt,nn=i,(xt=s)&&!a?(i=2,n.subtreeFlags&8772&&(i|=1),_i(t,n,i)):Li(t,n),nn=e,xt=a}break;case 30:Li(t,n),i&512&&Ii(n,n.return);break;case 7:i&512&&Ii(n,n.return);default:Li(t,n)}}function Uh(t,e){for(t=t.child;t!==null;)Py(t,e),t=t.sibling}function Py(t,e){switch(t.tag){case 5:case 26:try{var n=t.stateNode;if(e){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=t.stateNode,s=t.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null;a.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(c){bt(t,t.return,c)}Oh(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,dt=!0}catch(c){bt(t,t.return,c)}break;case 18:try{var o=t.stateNode;e?Qg(o,!0):Qg(t.stateNode,!1)}catch(c){bt(t,t.return,c)}break;case 22:case 23:t.memoizedState===null&&Uh(t,e);break;default:Uh(t,e)}}function Oh(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var n=t,i=e;switch(n.tag){case 4:Py(n,i);break e;case 22:n.memoizedState===null&&Oh(n,i);break e;default:Oh(n,i)}}t=t.sibling}}function zy(t){var e=t.alternate;e!==null&&(t.alternate=null,zy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ju(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Pt=null,Dn=!1;function mi(t,e,n){for(n=n.child;n!==null;)By(t,e,n),n=n.sibling}function By(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 26:xt||on(n,e),mi(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!xt&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:xt||on(n,e),Qo(n);var i=Pt,a=Dn;ds(n.type)&&(Pt=n.stateNode,Dn=!1),mi(t,e,n),MS(n.stateNode,n.type,n.memoizedProps),Pt=i,Dn=a;break;case 5:xt||on(n,e),Qo(n);case 6:if(n.tag===6&&Qo(n),i=Pt,a=Dn,Pt=null,mi(t,e,n),Pt=i,Dn=a,Pt!==null)if(Dn)try{(Pt.nodeType===9?Pt.body:Pt.nodeName==="HTML"?Pt.ownerDocument.body:Pt).removeChild(n.stateNode),dt=!0}catch(s){bt(n,e,s)}else try{Pt.removeChild(n.stateNode),dt=!0}catch(s){bt(n,e,s)}break;case 18:Pt!==null&&(Dn?(t=Pt,Kg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),io(t)):Kg(Pt,n.stateNode));break;case 4:i=Pt,a=Dn,Pt=n.stateNode.containerInfo,Dn=!0,mi(t,e,n),Pt=i,Dn=a;break;case 0:case 11:case 14:case 15:os(2,n,e),xt||os(4,n,e),mi(t,e,n);break;case 1:xt||(on(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Ry(n,e,i)),mi(t,e,n);break;case 21:mi(t,e,n);break;case 22:xt=(i=xt)||n.memoizedState!==null,mi(t,e,n),xt=i;break;case 30:on(n,e),mi(t,e,n);break;case 7:xt||on(n,e),mi(t,e,n);break;default:mi(t,e,n)}}function Fy(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{io(t)}catch(n){bt(e,e.return,n)}}}function Hy(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{io(t)}catch(n){bt(e,e.return,n)}}function PT(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new zg),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new zg),e;default:throw Error(ee(435,t.tag))}}function nc(t,e){var n=PT(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=qT.bind(null,t,i);i.then(a,a)}})}function En(t,e,n){var i=e.deletions;if(i!==null)for(var a=0;a<i.length;a++){var s=i[a],r=t,o=e,c=o;e:for(;c!==null;){switch(c.tag){case 27:if(ds(c.type)){Pt=c.stateNode,Dn=!1;break e}break;case 5:Pt=c.stateNode,Dn=!1;break e;case 3:case 4:Pt=c.stateNode.containerInfo,Dn=!0;break e}c=c.return}if(Pt===null)throw Error(ee(160));By(r,o,s),Pt=null,Dn=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Gy(e,t,n),e=e.sibling}var yi=null;function Gy(t,e,n){var i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=t.updateQueue,i=i!==null?i.events:null,i!==null))for(var s=0;s<i.length;s++){var r=i[s];r.ref.impl=r.nextImpl}En(e,t,n),Mn(t),a&4&&(os(3,t,t.return),Ll(3,t),os(5,t,t.return));break;case 1:En(e,t,n),Mn(t),a&512&&(xt||i===null||on(i,i.return)),a&64&&nn&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?e:n.concat(e))));break;case 26:if(s=yi,En(e,t,n),Mn(t),a&512&&(xt||i===null||on(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=t.memoizedState,i===null)if(n===null)if(t.stateNode===null)if(nn)t.stateNode=pS(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,n=t.memoizedProps,a=s.ownerDocument||s;t:switch(e){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Rl]||i[ln]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(e),a.head.insertBefore(i,a.querySelector("head > title"))),hn(i,e,n),i[ln]=t,sn(i),e=i;break e;case"link":if(s=sx("link","href",a).get(e+(n.href||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(r,1);break t}}i=a.createElement(e),hn(i,e,n),a.head.appendChild(i);break;case"meta":if(s=sx("meta","content",a).get(e+(n.content||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(r,1);break t}}i=a.createElement(e),hn(i,e,n),a.head.appendChild(i);break;default:throw Error(ee(468,e))}i[ln]=t,sn(i),e=i}t.stateNode=e}else nn||Qh(s,t.type,t.stateNode);else t.stateNode=ax(s,n,t.memoizedProps);else a!==n?(a===null?(e=i.stateNode,e===null||xt||e.parentNode.removeChild(e)):a.count--,n===null?nn||Qh(s,t.type,t.stateNode):ax(s,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Yd(t,t.memoizedProps,i.memoizedProps);break;case 27:En(e,t,n),Mn(t),a&512&&(xt||i===null||on(i,i.return)),i!==null&&a&4&&Yd(t,t.memoizedProps,i.memoizedProps);break;case 5:if(s=wi,wi=!1,En(e,t,n),wi=s,Mn(t),a&512&&(xt||i===null||on(i,i.return)),t.flags&32){e=t.stateNode;try{Yr(e,""),dt=!0}catch(h){bt(t,t.return,h)}}a&4&&t.stateNode!=null&&(e=t.memoizedProps,Yd(t,e,i!==null?i.memoizedProps:e)),a&1024&&(Zd=!0);break;case 6:if(En(e,t,n),Mn(t),a&4){if(t.stateNode===null)throw Error(ee(162));e=t.memoizedProps,n=t.stateNode;try{n.nodeValue=e,dt=!0}catch(h){bt(t,t.return,h)}}break;case 3:if(dt=!1,Qc=null,s=yi,yi=ml(e.containerInfo),En(e,t,n),yi=s,Mn(t),a&4&&i!==null&&i.memoizedState.isDehydrated)try{io(e.containerInfo)}catch(h){bt(t,t.return,h)}Zd&&(Zd=!1,Vy(t)),dt=!1;break;case 4:a=wi,wi=nn,i=V0(),s=yi,yi=ml(t.stateNode.containerInfo),En(e,t,n),Mn(t),yi=s,dt&&Bo&&(Nu=!0),dt=i,wi=a;break;case 12:En(e,t,n),Mn(t);break;case 31:En(e,t,n),Mn(t),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,nc(t,e)));break;case 13:En(e,t,n),Mn(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(dd=Yn()),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,nc(t,e)));break;case 22:s=t.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=nn,c=xt,u=wi;nn=o||s,wi=u||s,xt=c||r,En(e,t,n),xt=c,wi=u,nn=o,Mn(t),a&8192&&(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,!s||i===null||r||nn||xt||(e=r||xt,n=nn,i=xt,nn=s||nn,xt=e,Pa(t,2),nn=n,xt=i),!s&&wi||Uh(t,s)),a&4&&(e=t.updateQueue,e!==null&&(n=e.retryQueue,n!==null&&(e.retryQueue=null,nc(t,n))));break;case 19:En(e,t,n),Mn(t),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,nc(t,e)));break;case 30:a&512&&(xt||i===null||on(i,i.return)),a=V0(),s=Bo,r=(n&335544064)===n,o=t.memoizedProps,Bo=r&&Ea(o.default,o.update)!=="none",En(e,t,n),Mn(t),r&&i!==null&&dt&&(t.flags|=4),Bo=s,dt=a;break;case 21:break;case 7:a&512&&(xt||i===null||on(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=t);default:En(e,t,n),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(Cy(i)){n=i;break}i=i.return}i=null;for(var a=t.return;a!==null;){if(Um(a)){var s=a.stateNode;i===null?i=[s]:i.push(s)}if(Lm(a))break;a=a.return}var r=i;if(n==null)throw Error(ee(160));switch(n.tag){case 27:var o=n.stateNode,c=qd(t);Tu(t,c,o,r);break;case 5:var u=n.stateNode;n.flags&32&&(Yr(u,""),n.flags&=-33);var h=qd(t);Tu(t,h,u,r);break;case 3:case 4:var m=n.stateNode.containerInfo,d=qd(t);Nh(t,d,m,r);break;default:throw Error(ee(161))}}catch(p){bt(t,t.return,p)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Vy(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,no=!0,e.reset(),no=!1),t=t.sibling}}function tr(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)ky(e,t),e=e.sibling;else Oy(e)}function ky(t,e){var n=t.alternate;if(n===null)Rh(t,!1);else switch(t.tag){case 3:if(Lh=Di=!1,Pg(),tr(e,t),!Di&&!Nu){if(t=zi,t!==null)for(var i=0;i<t.length;i+=3){n=t[i];var a=t[i+1];gS(n,t[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Lh=!0}zi=null;break;case 5:tr(e,t);break;case 4:i=Di,Di=!1,tr(e,t),Di&&(Nu=!0),Di=i;break;case 22:t.memoizedState===null&&(n.memoizedState!==null?Rh(t,!1):tr(e,t));break;case 30:i=Di,a=Pg(),Di=!1,tr(e,t),Di&&(t.flags|=4);var s=t.memoizedProps,r=t.stateNode;e=ma(s,r),r=ma(n.memoizedProps,r);var o=Ea(s.default,s.update);o==="none"?e=!1:(s=n.memoizedState,n.memoizedState=null,n=t.child,Un=0,e=Om(t,n,e,r,o,s,!0),Un!==(s===null?0:s.length)&&(t.flags|=32)),t.flags&4&&e?(Kr(t,t.memoizedProps.onUpdate),zi=a):a!==null&&(a.push.apply(a,zi),zi=a),Di=t.flags&32?!0:i;break;default:tr(e,t)}}function Li(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Iy(t,e.alternate,e),e=e.sibling}function Pa(t,e){for(t=t.child;t!==null;){var n=t,i=e;switch(n.tag){case 0:case 11:case 14:case 15:os(4,n,n.return),Pa(n,i);break;case 1:on(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ry(n,n.return,a),Pa(n,i);break;case 27:i&2&&MS(n.stateNode,n.type,n.memoizedProps);case 5:on(n,n.return),n.tag!==5&&n.tag!==27||Qo(n),Pa(n,i);break;case 6:Qo(n);break;case 26:on(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||xt||a.parentNode.removeChild(a),Pa(n,i);break;case 22:n.memoizedState===null&&Pa(n,i);break;case 30:on(n,n.return),Pa(n,i);break;case 7:on(n,n.return);default:Pa(n,i)}t=t.sibling}}function _i(t,e,n){for(n=e.subtreeFlags&8772?n:n&-2,e=e.child;e!==null;){var i=e.alternate,a=t,s=e,r=s.flags,o=(n&1)!==0;switch(s.tag){case 0:case 11:case 15:_i(a,s,n),Ll(4,s);break;case 1:if(_i(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(h){bt(i,i.return,h)}if(i=s,a=i.updateQueue,a!==null){var c=i.stateNode;try{var u=a.shared.hiddenCallbacks;if(u!==null)for(a.shared.hiddenCallbacks=null,a=0;a<u.length;a++)P_(u[a],c)}catch(h){bt(i,i.return,h)}}o&&r&64&&Ny(s),Ii(s,s.return);break;case 27:n&2&&wy(s);case 5:s.tag!==5&&s.tag!==27||Og(s),_i(a,s,n),o&&i===null&&r&4&&Ah(s),Ii(s,s.return);break;case 6:Og(s);break;case 26:c=s.stateNode,s.memoizedState!==null||c===null||nn||Qh(ml(c.ownerDocument),s.type,c),_i(a,s,n),o&&i===null&&r&4&&Ah(s),Ii(s,s.return);break;case 12:_i(a,s,n);break;case 31:_i(a,s,n),o&&r&4&&Fy(a,s);break;case 13:_i(a,s,n),o&&r&4&&Hy(a,s);break;case 22:s.memoizedState===null&&_i(a,s,n),Ii(s,s.return);break;case 30:_i(a,s,n),Ii(s,s.return);break;case 7:Ii(s,s.return);default:_i(a,s,n)}e=e.sibling}}function Im(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&wl(n))}function Pm(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&wl(t))}function ti(t,e,n,i){var a=(n&335544064)===n;if(e.subtreeFlags&(a?10262:10256))for(e=e.child;e!==null;)jy(t,e,n,i),e=e.sibling;else a&&Uy(e)}function jy(t,e,n,i){var a=(n&335544064)===n;a&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Yc(e);var s=e.flags;switch(e.tag){case 0:case 11:case 15:ti(t,e,n,i),s&2048&&Ll(9,e);break;case 1:ti(t,e,n,i);break;case 3:ti(t,e,n,i),a&&Lh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),s&2048&&(s=null,e.alternate!==null&&(s=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==s&&(e.refCount++,s!=null&&wl(s)));break;case 12:if(s&2048){ti(t,e,n,i),s=e.stateNode;try{var r=e.memoizedProps,o=r.id,c=r.onPostCommit;typeof c=="function"&&c(o,e.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(u){bt(e,e.return,u)}}else ti(t,e,n,i);break;case 31:ti(t,e,n,i);break;case 13:ti(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,o=e.alternate,e.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&Yc(o),r._visibility&2?ti(t,e,n,i):Jo(t,e)):(a&&o!==null&&o.memoizedState!==null&&Yc(e),r._visibility&2?ti(t,e,n,i):(r._visibility|=2,xr(t,e,n,i,(e.subtreeFlags&10256)!==0||!1))),s&2048&&Im(o,e);break;case 24:ti(t,e,n,i),s&2048&&Pm(e.alternate,e);break;case 30:a&&(s=e.alternate,s!==null&&(Yi(s.child,!0),Yi(e.child,!0))),ti(t,e,n,i);break;default:ti(t,e,n,i)}}function xr(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=n,c=i,u=r.flags;switch(r.tag){case 0:case 11:case 15:xr(s,r,o,c,a),Ll(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?xr(s,r,o,c,a):Jo(s,r):(h._visibility|=2,xr(s,r,o,c,a)),a&&u&2048&&Im(r.alternate,r);break;case 24:xr(s,r,o,c,a),a&&u&2048&&Pm(r.alternate,r);break;default:xr(s,r,o,c,a)}e=e.sibling}}function Jo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:Jo(n,i),a&2048&&Im(i.alternate,i);break;case 24:Jo(n,i),a&2048&&Pm(i.alternate,i);break;default:Jo(n,i)}e=e.sibling}}var Es=8192;function ps(t,e,n){if(t.subtreeFlags&Es)for(t=t.child;t!==null;)Xy(t,e,n),t=t.sibling}function Xy(t,e,n){switch(t.tag){case 26:ps(t,e,n),t.flags&Es&&(t.memoizedState!==null?V1(n,yi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&ox(n,t)));break;case 5:ps(t,e,n),t.flags&Es&&(t=t.stateNode,(e&335544128)===e&&ox(n,t));break;case 3:case 4:var i=yi;yi=ml(t.stateNode.containerInfo),ps(t,e,n),yi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Es,Es=16777216,ps(t,e,n),Es=i):ps(t,e,n));break;case 30:if(t.flags&Es&&(i=t.memoizedProps.name,i!=null&&i!=="auto")){var a=t.stateNode;a.paired=null,Xn===null&&(Xn=new Map),Xn.set(i,a)}ps(t,e,n);break;default:ps(t,e,n)}}function Wy(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Eo(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];an=i,qy(i,t)}Wy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Yy(t),t=t.sibling}function Yy(t){switch(t.tag){case 0:case 11:case 15:Eo(t),t.flags&2048&&os(9,t,t.return);break;case 3:Eo(t);break;case 12:Eo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,qc(t)):Eo(t);break;default:Eo(t)}}function qc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];an=i,qy(i,t)}Wy(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:os(8,e,e.return),qc(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,qc(e));break;default:qc(e)}t=t.sibling}}function qy(t,e){for(;an!==null;){var n=an;switch(n.tag){case 0:case 11:case 15:os(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:wl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,an=i;else e:for(n=t;an!==null;){i=an;var a=i.sibling,s=i.return;if(zy(i),i===n){an=null;break e}if(a!==null){a.return=s,an=a;break e}an=s}}}var zT={getCacheForType:function(t){var e=cn(Yt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return cn(Yt).controller.signal}},BT=typeof WeakMap=="function"?WeakMap:Map,ft=0,At=null,nt=null,at=0,yt=0,Vn=null,Xa=!1,fo=!1,zm=!1,_a=0,Ft=0,ls=0,Ls=0,Ru=0,Wn=0,Zr=0,$o=null,Ln=null,Ih=!1,dd=0,Zy=0,Cu=1/0,wu=null,es=null,zt=0,Mi=null,Hs=null,Xi=0,Ph=0,zh=null,Ky=null,Hr=null,Gr=null,Vr=null,el=0,Zc=null;function Kn(){return ft&2&&at!==0?at&-at:Be.T!==null?Fm():e_()}function Qy(){if(Wn===0)if(!(at&536870912)||Je){var t=Xl;Xl<<=1,!(Xl&3932160)&&(Xl=262144),Wn=t}else Wn=536870912;return t=pn.current,t!==null&&(t.flags|=32),Wn}function Kr(t,e){if(e!=null){var n=t.stateNode,i=n.ref;i===null&&(i=n.ref=xS(ma(t.memoizedProps,n))),Gr===null&&(Gr=[]),Gr.push(e.bind(null,i))}}function Pn(t,e,n){(t===At&&(yt===2||yt===9)||t.cancelPendingCommit!==null)&&(Qr(t,0),Wa(t,at,Wn,!1)),Nl(t,n),(!(ft&2)||t!==At)&&(t===At&&(!(ft&2)&&(Ls|=n),Ft===4&&Wa(t,at,Wn,!1)),Ji(t))}function Jy(t,e,n){if(ft&6)throw Error(ee(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Al(t,e),a=i?GT(t,e):Kd(t,e,!0),s=i;do{if(a===0){fo&&!i&&Wa(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!FT(n)){a=Kd(t,e,!1),s=!1;continue}if(a===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;a=$o;var c=o.current.memoizedState.isDehydrated;if(c&&(Qr(o,r).flags|=256),r=Kd(o,r,!1),r!==2&&r!==6){if(zm&&!c){o.errorRecoveryDisabledLanes|=s,Ls|=s,a=4;break e}s=Ln,Ln=a,s!==null&&(Ln===null?Ln=s:Ln.push.apply(Ln,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Qr(t,0),Wa(t,e,0,!0);break}e:{switch(i=t,s=a,s){case 0:case 1:throw Error(ee(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Wa(i,e,Wn,!Xa);break e;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(ee(329))}if((e&62914560)===e&&(a=dd+300-Yn(),10<a)){if(Wa(i,e,Wn,!Xa),Qu(i,0,!0)!==0)break e;Xi=e,i.timeoutHandle=Gm(Bg.bind(null,i,n,Ln,wu,Ih,e,Wn,Ls,Zr,Xa,s,"Throttled",-0,0),a);break e}Bg(i,n,Ln,wu,Ih,e,Wn,Ls,Zr,Xa,s,null,-0,0)}}break}while(!0);Ji(t)}function Bg(t,e,n,i,a,s,r,o,c,u,h,m,d,p){t.timeoutHandle=-1;var g=e.subtreeFlags,b=(s&335544064)===s;if(m=null,(b||g&8192||(g&16785408)===16785408)&&(m={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},Xn=null,Xy(e,s,m),b&&(g=m,b=t.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(g.count++,g.waitingForViewTransition=!0,g=gl.bind(g),b.finished.then(g,g))),g=(s&62914560)===s?dd-Yn():(s&4194048)===s?Zy-Yn():0,g=k1(m,g),g!==null)){Xi=s,t.cancelPendingCommit=g(Hg.bind(null,t,e,s,n,i,a,r,o,c,u,h,m,null,d,p)),Wa(t,s,r,!u);return}Hg(t,e,s,n,i,a,r,o,c,u,h,m)}function FT(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Qn(s(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wa(t,e,n,i){e=Zv(t,e),e&=~Ru,e&=~Ls,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var s=31-Zn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&Qv(t,n,e)}function fd(){return ft&6?!0:(Ul(0),!1)}function Bm(){if(nt!==null){if(yt===0)var t=nt.return;else t=nt,la=Ks=null,Sm(t),zr=null,cl=0,t=nt;for(;t!==null;)Ay(t.alternate,t),t=t.return;nt=null}}function Qr(t,e){var n=t.timeoutHandle;return n!==-1&&(t.timeoutHandle=-1,c1(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Xi=0,Bm(),At=t,nt=n=ua(t.current,null),at=e,yt=0,Vn=null,Xa=!1,fo=Al(t,e),zm=!1,Zr=Wn=Ru=Ls=ls=Ft=0,Ln=$o=null,Ih=!1,_a=Zv(t,e),nd(),n}function $y(t,e){Ye=null,Be.H=bu,e===co||e===sd?(e=dg(),yt=3):e===hm?(e=dg(),yt=4):yt=e===Cm?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Vn=e,nt===null&&(Ft=1,Eu(t,ci(e,t.current)))}function eS(){var t=pn.current;return t===null?!0:(at&4194048)===at?_n===null:(at&62914560)===at||at&536870912?t===_n:!1}function tS(){var t=Be.H;return Be.H=bu,t===null?bu:t}function nS(){var t=Be.A;return Be.A=zT,t}function Du(){Ft=4,Xa||(at&4194048)!==at&&pn.current!==null||(fo=!0),!(ls&134217727)&&!(Ls&134217727)||At===null||Wa(At,at,Wn,!1)}function Kd(t,e,n){var i=ft;ft|=2;var a=tS(),s=nS();(At!==t||at!==e)&&(wu=null,Qr(t,e)),e=!1;var r=Ft;e:do try{if(yt!==0&&nt!==null){var o=nt,c=Vn;switch(yt){case 8:Bm(),r=6;break e;case 3:case 2:case 9:case 6:pn.current===null&&(e=!0);var u=yt;if(yt=0,Vn=null,Dr(t,o,c,u),n&&fo){r=0;break e}break;default:u=yt,yt=0,Vn=null,Dr(t,o,c,u)}}HT(),r=Ft;break}catch(h){$y(t,h)}while(!0);return e&&t.shellSuspendCounter++,la=Ks=null,ft=i,Be.H=a,Be.A=s,nt===null&&(At=null,at=0,nd()),r}function HT(){for(;nt!==null;)iS(nt)}function GT(t,e){var n=ft;ft|=2;var i=tS(),a=nS();At!==t||at!==e?(wu=null,Cu=Yn()+500,Qr(t,e)):fo=Al(t,e);e:do try{if(yt!==0&&nt!==null){e=nt;var s=Vn;t:switch(yt){case 1:yt=0,Vn=null,Dr(t,e,s,1);break;case 2:case 9:if(ug(s)){yt=0,Vn=null,Fg(e);break}e=function(){yt!==2&&yt!==9||At!==t||(yt=7),Ji(t)},s.then(e,e);break e;case 3:yt=7;break e;case 4:yt=5;break e;case 7:ug(s)?(yt=0,Vn=null,Fg(e)):(yt=0,Vn=null,Dr(t,e,s,7));break;case 5:var r=null;switch(nt.tag){case 26:r=nt.memoizedState;case 5:case 27:var o=nt;if(r?NS(r):o.stateNode.complete){yt=0,Vn=null;var c=o.sibling;if(c!==null)nt=c;else{var u=o.return;u!==null?(nt=u,hd(u)):nt=null}break t}}yt=0,Vn=null,Dr(t,e,s,5);break;case 6:yt=0,Vn=null,Dr(t,e,s,6);break;case 8:Bm(),Ft=6;break e;default:throw Error(ee(462))}}VT();break}catch(h){$y(t,h)}while(!0);return la=Ks=null,Be.H=i,Be.A=a,ft=n,nt!==null?0:(At=null,at=0,nd(),Ft)}function VT(){for(;nt!==null&&!sM();)iS(nt)}function iS(t){var e=Ty(t.alternate,t,_a);t.memoizedProps=t.pendingProps,e===null?hd(t):nt=e}function Fg(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Ng(n,e,e.pendingProps,e.type,void 0,at);break;case 11:e=Ng(n,e,e.pendingProps,e.type.render,e.ref,at);break;case 5:Sm(e);var i=e;i===rn&&(Je?(mu(i),i.tag===5&&i.stateNode!=null&&(Dt=i.stateNode)):(mu(i),Je=!0));default:Ay(n,e),e=nt=N_(e,_a),e=Ty(n,e,_a)}t.memoizedProps=t.pendingProps,e===null?hd(t):nt=e}function Dr(t,e,n,i){la=Ks=null,Sm(e),zr=null,cl=0;var a=e.return;try{if(CT(t,a,e,n,at)){Ft=1,Eu(t,ci(n,t.current)),nt=null;return}}catch(s){if(a!==null)throw nt=a,s;Ft=1,Eu(t,ci(n,t.current)),nt=null;return}e.flags&32768?(Je||i===1?t=!0:fo||at&536870912?t=!1:(Xa=t=!0,(i===2||i===9||i===3||i===6)&&(i=pn.current,i!==null&&i.tag===13&&(i.flags|=16384))),aS(e,t)):hd(e)}function hd(t){var e=t;do{if(e.flags&32768){aS(e,Xa);return}t=e.return;var n=UT(e.alternate,e,_a);if(n!==null){nt=n;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);Ft===0&&(Ft=5)}function aS(t,e){do{var n=OT(t.alternate,t);if(n!==null){n.flags&=32767,nt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){nt=t;return}nt=t=n}while(t!==null);Ft=6,nt=null}function Hg(t,e,n,i,a,s,r,o,c,u,h,m){t.cancelPendingCommit=null;do pd();while(zt!==0);if(ft&6)throw Error(ee(327));if(e!==null){if(e===t.current)throw Error(ee(177));t===At&&(nt=At=null,at=0),Hs=e,Mi=t,Xi=n,zh=a,Ky=i,kT(t,e,n,r,o,c,m)}}function kT(t,e,n,i,a,s,r){var o=e.lanes|e.childLanes;if(Ph=o,o|=om,mM(t,n,o,i,a,s),Gr=null,(n&335544064)===n?(Vr=xT(t),i=10262):(Vr=null,i=10256),e.subtreeFlags&i||e.flags&i?(t.callbackNode=null,t.callbackPriority=0,ZT(uu,function(){return Gh(),null})):(t.callbackNode=null,t.callbackPriority=0),Au=!1,i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Be.T,Be.T=null,a=ht.p,ht.p=2,s=ft,ft|=4;try{IT(t,e,n)}finally{ft=s,ht.p=a,Be.T=i}}zt=1,Au?Hr=m1(r,t.containerInfo,Vr,Bh,Fh,XT,Hh,Gh,jT):(Bh(),Fh(),Hh())}function jT(t){if(zt!==0){var e=Mi.onRecoverableError;e(t,{componentStack:null})}}function XT(){zt===3&&(zt=0,ky(Hs,Mi),zt=4)}function Bh(){if(zt===1){zt=0;var t=Mi,e=Hs,n=Xi,i=(e.flags&13878)!==0;if(e.subtreeFlags&13878||i){i=Be.T,Be.T=null;var a=ht.p;ht.p=2;var s=ft;ft|=4;try{Bo=Nu=!1,Gy(e,t,n),n=Xh;var r=__(t.containerInfo),o=n.focusedElem,c=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&v_(o.ownerDocument.documentElement,o)){if(c!==null&&rm(o)){var u=c.start,h=c.end;if(h===void 0&&(h=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(h,o.value.length);else{var m=o.ownerDocument||document,d=m&&m.defaultView||window;if(d.getSelection){var p=d.getSelection(),g=o.textContent.length,b=Math.min(c.start,g),x=c.end===void 0?b:Math.min(c.end,g);!p.extend&&b>x&&(r=x,x=b,b=r);var f=ng(o,b),v=ng(o,x);if(f&&v&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var M=m.createRange();M.setStart(f.node,f.offset),p.removeAllRanges(),b>x?(p.addRange(M),p.extend(v.node,v.offset)):(M.setEnd(v.node,v.offset),p.addRange(M))}}}}for(m=[],p=o;p=p.parentNode;)p.nodeType===1&&m.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<m.length;o++){var S=m[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}no=!!jh,Xh=jh=null}finally{ft=s,ht.p=a,Be.T=i}}t.current=e,zt=2}}function Fh(){if(zt===2){zt=0;var t=Mi,e=Hs,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Be.T,Be.T=null;var i=ht.p;ht.p=2;var a=ft;ft|=4;try{Iy(t,e.alternate,e)}finally{ft=a,ht.p=i,Be.T=n}}zt=3}}function Hh(){if(zt===4||zt===3){zt=0;var t=Hr;Hr=null,rM();var e=Mi,n=Hs,i=Xi,a=Ky,s=(i&335544064)===i?10262:10256;if(n.subtreeFlags&s||n.flags&s?zt=5:(zt=0,Hs=Mi=null,sS(e,e.pendingLanes)),s=e.pendingLanes,s===0&&(es=null),em(i),n=n.stateNode,qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Tl,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=Be.T,s=ht.p,ht.p=2,Be.T=null;try{for(var r=e.onRecoverableError,o=0;o<a.length;o++){var c=a[o];r(c.value,{componentStack:c.stack})}}finally{Be.T=n,ht.p=s}}if(a=Gr,r=Vr,Vr=null,a!==null&&(Gr=null,r===null&&(r=[]),t!==null))for(c=0;c<a.length;c++)n=(0,a[c])(r),n!==void 0&&t.finished.finally(n);Xi&3&&pd(),Ji(e),s=e.pendingLanes,i&261930&&s&42?e===Zc?el++:(el=0,Zc=e):(el=0,Zc=null),Ul(0)}}function sS(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,wl(e)))}function pd(){return Hr!==null&&(Hr.skipTransition(),Hr=null),Bh(),Fh(),Hh(),Gh()}function Gh(){if(zt!==5)return!1;var t=Mi,e=Ph;Ph=0;var n=em(Xi),i=Be.T,a=ht.p;try{ht.p=32>n?32:n,Be.T=null,n=zh,zh=null;var s=Mi,r=Xi;if(zt=0,Hs=Mi=null,Xi=0,ft&6)throw Error(ee(331));var o=ft;if(ft|=4,Yy(s.current),jy(s,s.current,r,n),ft=o,Ul(0,!1),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Tl,s)}catch{}return!0}finally{ht.p=a,Be.T=i,sS(t,e)}}function Gg(t,e,n){e=ci(n,e),e=yh(t.stateNode,e,2),t=Qa(t,e,2),t!==null&&(Nl(t,2),Ji(t))}function bt(t,e,n){if(t.tag===3)Gg(t,t,n);else for(;e!==null;){if(e.tag===3){Gg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(es===null||!es.has(i))){t=ci(n,t),n=yy(2),i=Qa(e,n,2),i!==null&&(Sy(n,i,e,t),Nl(i,2),Ji(i));break}}e=e.return}}function Qd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new BT;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(zm=!0,a.add(n),t=WT.bind(null,t,e,n),e.then(t,t))}function WT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,At===t&&(at&n)===n&&(Ft===4||Ft===3&&(at&62914560)===at&&300>Yn()-dd?ft&2?Ru|=n:Qr(t,0):Ru|=n,Zr===at&&(Zr=0)),Ji(t)}function rS(t,e){e===0&&(e=Kv()),t=Zs(t,e),t!==null&&(Nl(t,e),Ji(t))}function YT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rS(t,n)}function qT(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(ee(314))}i!==null&&i.delete(e),rS(t,n)}function ZT(t,e){return Jp(t,e)}var Jr=null,vr=null,Vh=!1,Lu=!1,Jd=!1,Ya=0;function Ji(t){t!==vr&&t.next===null&&(vr===null?Jr=vr=t:vr=vr.next=t),Lu=!0,Vh||(Vh=!0,QT())}function Ul(t,e){if(!Jd&&Lu){Jd=!0;do for(var n=!1,i=Jr;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Zn(42|t)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Vg(i,s))}else s=at,s=Qu(i,i===At?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Al(i,s)||(n=!0,Vg(i,s));i=i.next}while(n);Jd=!1}}function KT(){oS()}function oS(){Lu=Vh=!1;var t=0;Ya!==0&&l1()&&(t=Ya);for(var e=Yn(),n=null,i=Jr;i!==null;){var a=i.next,s=lS(i,e);s===0?(i.next=null,n===null?Jr=a:n.next=a,a===null&&(vr=n)):(n=i,(t!==0||s&3)&&(Lu=!0)),i=a}zt!==0&&zt!==5||Ul(t),Ya!==0&&(Ya=0)}function lS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-Zn(s),o=1<<r,c=a[r];c===-1?(!(o&n)||o&i)&&(a[r]=pM(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}if(e=At,n=at,n=Qu(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(yt===2||yt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Cd(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Al(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Cd(i),em(n)){case 2:case 8:n=Yv;break;case 32:n=uu;break;case 268435456:n=qv;break;default:n=uu}return i=cS.bind(null,t),n=Jp(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Cd(i),t.callbackPriority=2,t.callbackNode=null,2}function cS(t,e){if(zt!==0&&zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(pd()&&t.callbackNode!==n)return null;var i=at;return i=Qu(t,t===At?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Jy(t,i,e),lS(t,Yn()),t.callbackNode!=null&&t.callbackNode===n?cS.bind(null,t):null)}function Vg(t,e){if(pd())return null;Jy(t,e,!0)}function QT(){u1(function(){ft&6?Jp(Wv,KT):oS()})}function Fm(){if(Ya===0){var t=Ps;t===0&&(t=jl,jl<<=1,!(jl&261888)&&(jl=256)),Ya=t}return Ya}function kg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zc(t)}function JT(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var s=kg((a[Fn]||null).action),r=i.submitter;r&&(e=(e=r[Fn]||null)?kg(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new $u("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ya!==0){var c=new FormData(a,r);vh(n,{pending:!0,data:c,method:a.method,action:s},null,c)}}else typeof s=="function"&&(o.preventDefault(),c=new FormData(a,r),vh(n,{pending:!0,data:c,method:a.method,action:s},s,c))},currentTarget:a}]})}}for(var $d=0;$d<oh.length;$d++){var ef=oh[$d],$T=ef.toLowerCase(),e1=ef[0].toUpperCase()+ef.slice(1);Ni($T,"on"+e1)}Ni(S_,"onAnimationEnd");Ni(b_,"onAnimationIteration");Ni(E_,"onAnimationStart");Ni("dblclick","onDoubleClick");Ni("focusin","onFocus");Ni("focusout","onBlur");Ni(cT,"onTransitionRun");Ni(uT,"onTransitionStart");Ni(dT,"onTransitionCancel");Ni(M_,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);Ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function uS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var r=i.length-1;0<=r;r--){var o=i[r],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=u;try{s(a)}catch(h){fu(h)}a.currentTarget=null,s=c}else for(r=0;r<i.length;r++){if(o=i[r],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=u;try{s(a)}catch(h){fu(h)}a.currentTarget=null,s=c}}}}function tt(t,e){var n=e[B0];n===void 0&&(n=e[B0]=new Set);var i=t+"__bubble";n.has(i)||(dS(e,t,2,!1),n.add(i))}function tf(t,e,n){var i=0;e&&(i|=4),dS(n,t,i,e)}var ic="_reactListening"+Math.random().toString(36).slice(2);function Hm(t){if(!t[ic]){t[ic]=!0,n_.forEach(function(n){n!=="selectionchange"&&(t1.has(n)||tf(n,!1,t),tf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ic]||(e[ic]=!0,tf("selectionchange",!1,e))}}function dS(t,e,n,i){switch(OS(e)){case 2:var a=Y1;break;case 8:a=q1;break;default:a=Ym}n=a.bind(null,e,n,t),a=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function nf(t,e,n,i,a){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var c=r.tag;if((c===3||c===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=Ms(o),r===null)return;if(c=r.tag,c===5||c===6||c===26||c===27){i=s=r;continue e}o=o.parentNode}}i=i.return}u_(function(){var u=s,h=nm(n),m=[];e:{var d=T_.get(t);if(d!==void 0){var p=$u,g=t;switch(t){case"keypress":if(Fc(n)===0)break e;case"keydown":case"keyup":p=FM;break;case"focusin":g="focus",p=Id;break;case"focusout":g="blur",p=Id;break;case"beforeblur":case"afterblur":p=Id;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=W0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=NM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=jM;break;case S_:case b_:case E_:p=wM;break;case M_:p=WM;break;case"scroll":case"scrollend":p=TM;break;case"wheel":p=qM;break;case"copy":case"cut":case"paste":p=LM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=q0;break;case"submit":p=VM;break;case"toggle":case"beforetoggle":p=KM}var b=(e&4)!==0,x=!b&&(t==="scroll"||t==="scrollend"),f=b?d!==null?d+"Capture":null:d;b=[];for(var v=u,M;v!==null;){var S=v;if(M=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||M===null||f===null||(S=al(v,f),S!=null&&b.push(hl(v,S,M))),x)break;v=v.return}0<b.length&&(d=new p(d,g,null,n,h),m.push({event:d,listeners:b}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",p&&n!==nh&&(g=n.relatedTarget||n.fromElement)&&(Ms(g)||g[oo]))break e;(d||p)&&(g=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,d?(p=n.relatedTarget||n.toElement,d=u,p=p?Ms(p):null,p!==null&&(x=Ml(p),b=p.tag,p!==x||b!==5&&b!==27&&b!==6)&&(p=null)):(d=null,p=u),d!==p&&(b=W0,S="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(b=q0,S="onPointerLeave",f="onPointerEnter",v="pointer"),x=d==null?g:Po(d),M=p==null?g:Po(p),g=new b(S,v+"leave",d,n,h),g.target=x,g.relatedTarget=M,S=null,Ms(h)===u&&(b=new b(f,v+"enter",p,n,h),b.target=M,b.relatedTarget=x,S=b),x=S,b=d&&p?jf(d,p,n1):null,d!==null&&jg(m,g,d,b,!1),p!==null&&x!==null&&jg(m,x,p,b,!0)))}e:{if(d=u?Po(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=J0;else if(Q0(d))if(g_)T=rT;else{T=aT;var A=iT}else p=d.nodeName,!p||p.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?u&&tm(u.elementType)&&(T=J0):T=sT;if(T&&(T=T(t,u))){m_(m,T,n,h);break e}A&&A(t,d,u)}switch(A=u?Po(u):window,t){case"focusin":(Q0(A)||A.contentEditable==="true")&&(Tr=A,sh=u,jo=null);break;case"focusout":jo=sh=Tr=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,ig(m,n,h);break;case"selectionchange":if(lT)break;case"keydown":case"keyup":ig(m,n,h)}var N;if(sm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Mr?h_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(f_&&n.locale!=="ko"&&(Mr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Mr&&(N=d_()):(ka=h,im="value"in ka?ka.value:ka.textContent,Mr=!0)),A=Uu(u,y),0<A.length&&(y=new Y0(y,t,null,n,h),m.push({event:y,listeners:A}),N?y.data=N:(N=p_(n),N!==null&&(y.data=N)))),(N=JM?$M(t,n):eT(t,n))&&(y=Uu(u,"onBeforeInput"),0<y.length&&(A=new Y0("onBeforeInput","beforeinput",null,n,h),m.push({event:A,listeners:y}),A.data=N)),JT(m,t,u,n,h)}uS(m,e)})}function hl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uu(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=al(t,n),a!=null&&i.unshift(hl(t,a,s)),a=al(t,e),a!=null&&i.push(hl(t,a,s))),t.tag===3)return i;t=t.return}return[]}function n1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function jg(t,e,n,i,a){for(var s=e._reactName,r=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(o=o.tag,c!==null&&c===i)break;o!==5&&o!==26&&o!==27||u===null||(c=u,a?(u=al(n,s),u!=null&&r.unshift(hl(n,u,c))):a||(u=al(n,s),u!=null&&r.push(hl(n,u,c)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var i1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function Xg(t){return(typeof t=="string"?t:""+t).replace(i1,`
`).replace(a1,"")}function fS(t,e){return e=Xg(e),Xg(t)===e}function St(t,e,n,i,a,s){switch(n){case"children":if(typeof i=="string")e==="body"||e==="textarea"&&i===""||Yr(t,i);else if(typeof i=="number"||typeof i=="bigint")e!=="body"&&Yr(t,""+i);else return;break;case"className":Yl(t,"class",i);break;case"tabIndex":Yl(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Yl(t,n,i);break;case"style":c_(t,i,s);return;case"data":if(e!=="object"){Yl(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=zc(i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&St(t,e,"name",a.name,a,null),St(t,e,"formEncType",a.formEncType,a,null),St(t,e,"formMethod",a.formMethod,a,null),St(t,e,"formTarget",a.formTarget,a,null)):(St(t,e,"encType",a.encType,a,null),St(t,e,"method",a.method,a,null),St(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=zc(i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Fi);return;case"onScroll":i!=null&&tt("scroll",t);return;case"onScrollEnd":i!=null&&tt("scrollend",t);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ee(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ee(60));(s!=null?s.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=zc(i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":tt("beforetoggle",t),tt("toggle",t),Pc(t,"popover",i);break;case"xlinkActuate":$i(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":$i(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":$i(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":$i(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":$i(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":$i(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":$i(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":$i(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":$i(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Pc(t,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=EM.get(n)||n,Pc(t,n,i);else return}dt=!0}function kh(t,e,n,i,a,s){switch(n){case"style":c_(t,i,s);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ee(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ee(60));(s!=null?s.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"children":if(typeof i=="string")Yr(t,i);else if(typeof i=="number"||typeof i=="bigint")Yr(t,""+i);else return;break;case"onScroll":i!=null&&tt("scroll",t);return;case"onScrollEnd":i!=null&&tt("scrollend",t);return;case"onClick":i!=null&&(t.onclick=Fi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!i_.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),s=n.slice(2,a?n.length-7:void 0),e=t[Fn]||null,e=e!=null?e[n]:null,typeof e=="function"&&t.removeEventListener(s,e,a),typeof i=="function")){typeof e!="function"&&e!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(s,i,a);break e}dt=!0,n in t?t[n]=i:i===!0?t.setAttribute(n,""):Pc(t,n,i)}return}dt=!0}function hn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":tt("error",t),tt("load",t);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ee(137,e));default:St(t,e,s,r,n,null)}}a&&St(t,e,"srcSet",n.srcSet,n,null),i&&St(t,e,"src",n.src,n,null);return;case"input":tt("invalid",t);var o=s=r=a=null,c=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":c=h;break;case"defaultChecked":u=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(ee(137,e));break;default:St(t,e,i,h,n,null)}}r_(t,s,o,c,u,r,a,!1);return;case"select":tt("invalid",t),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:St(t,e,a,o,n,null)}e=s,n=r,t.multiple=!!i,e!=null?Or(t,!!i,e,!1):n!=null&&Or(t,!!i,n,!0);return;case"textarea":tt("invalid",t),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(ee(91));break;default:St(t,e,r,o,n,null)}l_(t,i,a,s);return;case"option":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:St(t,e,c,i,n,null)}return;case"dialog":tt("beforetoggle",t),tt("toggle",t),tt("cancel",t),tt("close",t);break;case"iframe":case"object":tt("load",t);break;case"video":case"audio":for(i=0;i<fl.length;i++)tt(fl[i],t);break;case"image":tt("error",t),tt("load",t);break;case"details":tt("toggle",t);break;case"embed":case"source":case"link":tt("error",t),tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(ee(137,e));default:St(t,e,u,i,n,null)}return;default:if(tm(e)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&kh(t,e,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&St(t,e,o,i,n,null))}var s1={};function r1(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,c=null,u=null,h=null;for(p in n){var m=n[p];if(n.hasOwnProperty(p)&&m!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":c=m;default:i.hasOwnProperty(p)||St(t,e,p,null,i,m)}}for(var d in i){var p=i[d];if(m=n[d],i.hasOwnProperty(d)&&(p!=null||m!=null))switch(d){case"type":p!==m&&(dt=!0),s=p;break;case"name":p!==m&&(dt=!0),a=p;break;case"checked":p!==m&&(dt=!0),u=p;break;case"defaultChecked":p!==m&&(dt=!0),h=p;break;case"value":p!==m&&(dt=!0),r=p;break;case"defaultValue":p!==m&&(dt=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(ee(137,e));break;default:p!==m&&St(t,e,d,p,i,m)}}th(t,r,o,c,u,h,s,a);return;case"select":p=r=o=d=null;for(s in n)if(c=n[s],n.hasOwnProperty(s)&&c!=null)switch(s){case"value":break;case"multiple":p=c;default:i.hasOwnProperty(s)||St(t,e,s,null,i,c)}for(a in i)if(s=i[a],c=n[a],i.hasOwnProperty(a)&&(s!=null||c!=null))switch(a){case"value":s!==c&&(dt=!0),d=s;break;case"defaultValue":s!==c&&(dt=!0),o=s;break;case"multiple":s!==c&&(dt=!0),r=s;default:s!==c&&St(t,e,a,s,i,c)}e=o,n=r,i=p,d!=null?Or(t,!!n,d,!1):!!i!=!!n&&(e!=null?Or(t,!!n,e,!0):Or(t,!!n,n?[]:"",!1));return;case"textarea":p=d=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:St(t,e,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":a!==s&&(dt=!0),d=a;break;case"defaultValue":a!==s&&(dt=!0),p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(ee(91));break;default:a!==s&&St(t,e,r,a,i,s)}o_(t,d,p);return;case"option":for(var g in n)if(d=n[g],n.hasOwnProperty(g)&&d!=null&&!i.hasOwnProperty(g))switch(g){case"selected":t.selected=!1;break;default:St(t,e,g,null,i,d)}for(c in i)if(d=i[c],p=n[c],i.hasOwnProperty(c)&&d!==p&&(d!=null||p!=null))switch(c){case"selected":d!==p&&(dt=!0),t.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:St(t,e,c,d,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)d=n[b],n.hasOwnProperty(b)&&d!=null&&!i.hasOwnProperty(b)&&St(t,e,b,null,i,d);for(u in i)if(d=i[u],p=n[u],i.hasOwnProperty(u)&&d!==p&&(d!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(ee(137,e));break;default:St(t,e,u,d,i,p)}return;default:if(tm(e)){for(var x in n)d=n[x],n.hasOwnProperty(x)&&d!==void 0&&!i.hasOwnProperty(x)&&kh(t,e,x,void 0,i,d);for(h in i)d=i[h],p=n[h],!i.hasOwnProperty(h)||d===p||d===void 0&&p===void 0||kh(t,e,h,d,i,p);return}}for(var f in n)d=n[f],n.hasOwnProperty(f)&&d!=null&&!i.hasOwnProperty(f)&&St(t,e,f,null,i,d);for(m in i)d=i[m],p=n[m],!i.hasOwnProperty(m)||d===p||d==null&&p==null||St(t,e,m,d,i,p)}function Wg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function o1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&Wg(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var c=n[i],u=c.startTime;if(u>o)break;var h=c.transferSize,m=c.initiatorType;h&&Wg(m)&&(c=c.responseEnd,r+=h*(c<o?1:(o-u)/(c-u)))}if(--i,e+=8*(s+r)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var jh=null,Xh=null;function pl(t){return t.nodeType===9?t:t.ownerDocument}function Yg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hS(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function pS(t,e,n,i){return n=pl(n).createElement(t),n[ln]=i,n[Fn]=e,hn(n,t,e),sn(n),n}function Wh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var af=null;function l1(){var t=window.event;return t&&t.type==="popstate"?t===af?!1:(af=t,!0):(af=null,!1)}var Gm=typeof setTimeout=="function"?setTimeout:void 0,c1=typeof clearTimeout=="function"?clearTimeout:void 0,qg=typeof Promise=="function"?Promise:void 0,Zg=typeof requestAnimationFrame=="function"?requestAnimationFrame:Gm,u1=typeof queueMicrotask=="function"?queueMicrotask:typeof qg<"u"?function(t){return qg.resolve(null).then(t).catch(d1)}:Gm;function d1(t){setTimeout(function(){throw t})}function ds(t){return t==="head"}function Kg(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),io(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")rf(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,rf(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Rl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&rf(t.ownerDocument.body);n=a}while(n);io(e)}function Qg(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function mS(t,e,n){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,n!=null&&(t.style.viewTransitionClass=n),n=getComputedStyle(t),n.display==="inline"){if(e=t.getClientRects(),e.length===1)var i=1;else for(var a=i=0;a<e.length;a++){var s=e[a];0<s.width&&0<s.height&&i++}i===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+n.paddingTop,t.marginBottom="-"+n.paddingBottom)}}function gS(t,e){t=t.style,e=e.style;var n=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(n=e.display,t.display=n==null||typeof n=="boolean"?"":n,n=e.margin,n!=null?t.margin=n:(n=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=n==null||typeof n=="boolean"?"":n,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function f1(t,e,n){return n=n.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=n.innerHeight&&t.left<=n.innerWidth}}function Yh(t){var e=t.getBoundingClientRect(),n=getComputedStyle(t);return f1(e,n,t)}function h1(t){return t.documentElement.clientHeight}function p1(t){this.addEventListener("load",t),this.addEventListener("error",t)}function m1(t,e,n,i,a,s,r,o,c){var u=e.nodeType===9?e:e.ownerDocument;try{var h=u.startViewTransition({update:function(){var d=u.defaultView,p=d.navigation&&d.navigation.transition,g=u.fonts.status;i();var b=[];if(g==="loaded"&&(h1(u),u.fonts.status==="loading"&&b.push(u.fonts.ready)),g=b.length,t!==null)for(var x=t.suspenseyImages,f=0,v=0;v<x.length;v++){var M=x[v];if(!M.complete){var S=M.getBoundingClientRect();if(0<S.bottom&&0<S.right&&S.top<d.innerHeight&&S.left<d.innerWidth){if(f+=RS(M),f>Jc){b.length=g;break}M=new Promise(p1.bind(M)),b.push(M)}}}if(0<b.length)return d=Promise.race([Promise.all(b),new Promise(function(T){return setTimeout(T,500)})]).then(a,a),(p?Promise.allSettled([p.finished,d]):d).then(s,s);if(a(),p)return p.finished.then(s,s);s()},types:n});u.__reactViewTransition=h;var m=[];return h.ready.then(function(){for(var d=u.documentElement.getAnimations({subtree:!0}),p=0;p<d.length;p++){var g=d[p],b=g.effect,x=b.pseudoElement;if(x!=null&&x.startsWith("::view-transition")){m.push(g),g=b.getKeyframes();for(var f=x=void 0,v=!0,M=0;M<g.length;M++){var S=g[M],T=S.width;if(x===void 0)x=T;else if(x!==T){v=!1;break}if(T=S.height,f===void 0)f=T;else if(f!==T){v=!1;break}delete S.width,delete S.height,S.transform==="none"&&delete S.transform}v&&x!==void 0&&f!==void 0&&(b.setKeyframes(g),v=getComputedStyle(b.target,b.pseudoElement),v.width!==x||v.height!==f)&&(v=g[0],v.width=x,v.height=f,v=g[g.length-1],v.width=x,v.height=f,b.setKeyframes(g))}}r()},function(d){u.__reactViewTransition===h&&(u.__reactViewTransition=null);try{if(typeof d=="object"&&d!==null)switch(d.name){case"InvalidStateError":(d.message==="View transition was skipped because document visibility state is hidden."||d.message==="Skipping view transition because document visibility state has become hidden."||d.message==="Skipping view transition because viewport size changed."||d.message==="Transition was aborted because of invalid state")&&(d=null)}d!==null&&c(d)}finally{i(),a(),r()}}),h.finished.finally(function(){for(var d=0;d<m.length;d++)m[d].cancel();u.__reactViewTransition===h&&(u.__reactViewTransition=null),o()}),h}catch{return i(),a(),r(),null}}function Ts(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Ts.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:Nt({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};Ts.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,n=t.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var s=n[a].effect;s!==null&&s.target===t&&s.pseudoElement===e&&i.push(n[a])}return i};Ts.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function xS(t){return{name:t,group:new Ts("group",t),imagePair:new Ts("image-pair",t),old:new Ts("old",t),new:new Ts("new",t)}}function $n(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}$n.prototype.addEventListener=function(t,e,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(vS(s,t,e,n)===-1){var r=this,o=e;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(c){r.removeEventListener(t,e,n),typeof e=="function"?e.call(this,c):e.handleEvent(c)}),i!==null&&(a=r.removeEventListener.bind(r,t,e,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=$r(n),s.push({type:t,listener:e,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),Bn(this._fragmentFiber.child,!1,g1,t,o,i)}this._eventListeners=s}};function g1(t,e,n,i){return Qt(t).addEventListener(e,n,i),!1}$n.prototype.removeEventListener=function(t,e,n){var i=this._eventListeners;if(i!==null&&(e=vS(i,t,e,n),e!==-1)){var a=i[e];n=a.attachedListener;var s=a.cleanup;a=$r(a.optionsOrUseCapture),Bn(this._fragmentFiber.child,!1,x1,t,n,a),i.splice(e,1),s!==null&&s()}};function x1(t,e,n,i){return Qt(t).removeEventListener(e,n,i),!1}function $r(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Jg(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function vS(t,e,n,i){if(t.length===0)return-1;i=Jg(i);for(var a=0;a<t.length;a++){var s=t[a];if(s.type===e&&s.listener===n&&Jg(s.optionsOrUseCapture)===i)return a}return-1}$n.prototype.dispatchEvent=function(t){var e=Ws(this._fragmentFiber);if(e===null)return!0;e=Qt(e);var n=this._eventListeners;if(n!==null&&0<n.length||!t.bubbles){var i=e.nodeType===9?e.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var s=n[a];i.addEventListener(s.type,s.attachedListener,$r(s.optionsOrUseCapture))}if(e.appendChild(i),t=i.dispatchEvent(t),n)for(a=0;a<n.length;a++)s=n[a],i.removeEventListener(s.type,s.attachedListener,$r(s.optionsOrUseCapture));return e.removeChild(i),t}return e.dispatchEvent(t)};$n.prototype.focus=function(t){Bn(this._fragmentFiber.child,!0,_S,t,void 0,void 0)};function _S(t,e){return t.tag===6?!1:(t=Qt(t),C1(t,e))}$n.prototype.focusLast=function(t){var e=[];Bn(this._fragmentFiber.child,!0,Vm,e,void 0,void 0);for(var n=e.length-1;0<=n&&!_S(e[n],t);n--);};function Vm(t,e){return e.push(t),!1}$n.prototype.blur=function(){var t=Ws(this._fragmentFiber);t!==null&&(t=Qt(t),t=pl(t).activeElement,t!==null&&Bn(this._fragmentFiber.child,!1,v1,t,void 0,void 0))};function v1(t,e){return t.tag===6?!1:(t=Qt(t),t===e||t.contains(e)?(e.blur(),!0):!1)}$n.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),Bn(this._fragmentFiber.child,!1,_1,t,void 0,void 0)};function _1(t,e){return t.tag===6||(t=Qt(t),e.observe(t)),!1}$n.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),Bn(this._fragmentFiber.child,!1,y1,t,void 0,void 0);for(var n=e=0;n<bi.length;n++){var i=bi[n];i.fragmentInstance===this&&i.observer===t?t.unobserve(i.instance):bi[e++]=i}bi.length=e}};function y1(t,e){return t.tag===6||(t=Qt(t),e.unobserve(t)),!1}var bi=[],sf=!1;function S1(t,e,n){bi.push({fragmentInstance:t,observer:e,instance:n}),sf||(sf=!0,w1(function(){sf=!1;var i=bi;bi=[];for(var a=0;a<i.length;a++){var s=i[a];s.observer.unobserve(s.instance)}}))}$n.prototype.getClientRects=function(){var t=[];return Bn(this._fragmentFiber.child,!1,b1,t,void 0,void 0),t};function b1(t,e){if(t.tag===6){t=t.stateNode;var n=t.ownerDocument.createRange();n.selectNodeContents(t),e.push.apply(e,n.getClientRects())}else t=Qt(t),e.push.apply(e,t.getClientRects());return!1}$n.prototype.getRootNode=function(t){var e=Ws(this._fragmentFiber);return e===null?this:Qt(e).getRootNode(t)};$n.prototype.compareDocumentPosition=function(t){var e=Ws(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Bn(this._fragmentFiber.child,!1,Vm,n,void 0,void 0);var i=Qt(e);if(n.length===0){if(n=i,L0(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(n=e)}e=this._fragmentFiber;var a=i=n.compareDocumentPosition(t);return n===t?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Vv(e)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(t=Qt(n).compareDocumentPosition(t),a=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=Qt(n[0]),a=Qt(n[n.length-1]);var s=L0(this._fragmentFiber)?e.parentElement:i;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=s.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=e.compareDocumentPosition(t),o=a.compareDocumentPosition(t),c=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&s&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,e=i&&e===t||s&&a===t||c||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&e===t||!s&&a===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||E1(e,this._fragmentFiber,n[0],n[n.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function E1(t,e,n,i,a){var s=Ms(a);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!s)e:{for(;s!==null;){if(s.tag===7&&(s===e||s.alternate===e)){n=!0;break e}s=s.return}n=!1}return n}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=a.ownerDocument,a===s||a===s.documentElement||a===s.body;e:{for(s=e,e=Ws(e);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==e&&s.alternate!==e)){s=!0;break e}s=s.return}s=!1}return s}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!s)&&!(e=s===n)&&(e=jf(n,s,U0),e===null?e=!1:(Bn(e,!0,QE,s,n),s=yr,yr=null,e=s!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!s)&&!(e=s===i)&&(e=jf(i,s,U0),e===null?e=!1:(Bn(e,!0,JE,s,i),s=yr,kf=yr=null,e=s!==null)),e):!1}function $g(t,e){var n=t.ownerDocument.createRange();n.selectNodeContents(t),t=n.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}$n.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(ee(566));var e=[];Bn(this._fragmentFiber.child,!1,Vm,e,void 0,void 0);var n=t!==!1;if(e.length===0){var i=Vv(this._fragmentFiber);if(i=n?i[1]||i[0]||Ws(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){t=Qt(i),$g(t,n);return}if(i=Qt(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(t);return}i.scrollIntoView(t)}}for(i=n?e.length-1:0;i!==(n?-1:e.length);){var a=e[i];a.tag===6?(a=Qt(a),$g(a,n)):Qt(a).scrollIntoView(t),i+=n?-1:1}};function M1(t,e){return t=Qt(t),yS(t,e),!1}function yS(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function SS(t,e){var n=e._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];t.addEventListener(a.type,a.attachedListener,$r(a.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(s){for(var r=0,o=0;o<bi.length;o++){var c=bi[o];(c.fragmentInstance!==e||c.observer!==s||c.instance!==t)&&(bi[r++]=c)}bi.length=r,s.observe(t)}),yS(t,e))}function T1(t,e){var n=e._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];t.removeEventListener(a.type,a.attachedListener,$r(a.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(s){typeof s.rootMargin=="string"?S1(e,s,t):s.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function qh(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qh(n),Ju(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function A1(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Rl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function N1(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fi(t.nextSibling),t===null))return null;return t}function bS(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=fi(t.nextSibling),t===null))return null;return t}function Zh(t){return t.data==="$?"||t.data==="$~"}function km(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function R1(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Kh=null;function ex(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return fi(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function tx(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function C1(t,e){function n(){i=!0}if(t.ownerDocument.activeElement===t)return!0;var i=!1;try{t.ownerDocument.addEventListener("focus",n,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",n,!0)}return i}function w1(t){Zg(function(){Zg(function(e){return t(e)})})}function ES(t,e,n){switch(e=pl(n),t){case"html":if(t=e.documentElement,!t)throw Error(ee(452));return t;case"head":if(t=e.head,!t)throw Error(ee(453));return t;case"body":if(t=e.body,!t)throw Error(ee(454));return t;default:throw Error(ee(451))}}function MS(t,e,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&St(t,e,i,null,s1,a)}n.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Fi&&(t.onclick=null),Ju(t)}function rf(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ju(t)}var hi=new Map,nx=new Set;function ml(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var Ma=ht.d;ht.d={f:D1,r:L1,D:U1,C:O1,L:I1,m:P1,X:B1,S:z1,M:F1};function D1(){var t=Ma.f(),e=fd();return t||e}function L1(t){var e=lo(t);e!==null&&e.tag===5&&e.type==="form"?cy(e):Ma.r(t)}var ho=typeof document>"u"?null:document;function TS(t,e,n){var i=ho;if(i&&typeof e=="string"&&e){var a=li(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),nx.has(a)||(nx.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),hn(e,"link",t),sn(e),i.head.appendChild(e)))}}function U1(t){Ma.D(t),TS("dns-prefetch",t,null)}function O1(t,e){Ma.C(t,e),TS("preconnect",t,e)}function I1(t,e,n){Ma.L(t,e,n);var i=ho;if(i&&t&&e){var a='link[rel="preload"][as="'+li(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+li(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+li(n.imageSizes)+'"]')):a+='[href="'+li(t)+'"]';var s=a;switch(e){case"style":s=eo(t);break;case"script":s=po(t)}if(!(hi.has(s)||(t=Nt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),hi.set(s,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(Ol(s))||e==="script"&&i.querySelector(Il(s))))){var r=i.createElement("link");hn(r,"link",t),e==="style"&&(r[du]=!0,r.onload=r.onerror=function(){t_(r)}),sn(r),i.head.appendChild(r)}}}function P1(t,e){Ma.m(t,e);var n=ho;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+li(i)+'"][href="'+li(t)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=po(t)}if(!hi.has(s)&&(t=Nt({rel:"modulepreload",href:t},e),hi.set(s,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Il(s)))return}i=n.createElement("link"),hn(i,"link",t),sn(i),n.head.appendChild(i)}}}function z1(t,e,n){Ma.S(t,e,n);var i=ho;if(i&&t){var a=Ur(i).hoistableStyles,s=eo(t);e=e||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Ol(s)))o.loading=5;else{t=Nt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=hi.get(s))&&jm(t,n);var c=r=i.createElement("link");sn(c),hn(c,"link",t),c._p=new Promise(function(u,h){c.onload=u,c.onerror=h}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Kc(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function B1(t,e){Ma.X(t,e);var n=ho;if(n&&t){var i=Ur(n).hoistableScripts,a=po(t),s=i.get(a);s||(s=n.querySelector(Il(a)),s||(t=Nt({src:t,async:!0},e),(e=hi.get(a))&&Xm(t,e),s=n.createElement("script"),sn(s),hn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function F1(t,e){Ma.M(t,e);var n=ho;if(n&&t){var i=Ur(n).hoistableScripts,a=po(t),s=i.get(a);s||(s=n.querySelector(Il(a)),s||(t=Nt({src:t,async:!0,type:"module"},e),(e=hi.get(a))&&Xm(t,e),s=n.createElement("script"),sn(s),hn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function ix(t,e,n,i){var a=(a=qa.current)?ml(a):null;if(!a)throw Error(ee(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=eo(n.href),e=Ur(a).hoistableStyles,i=e.get(n),i||(i={type:"style",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=eo(n.href);var s=Ur(a).hoistableStyles,r=s.get(t);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=a.querySelector(Ol(t)))?s._p||(r.instance=s,r.state.loading=5):(s=hi.get(t),s||(s={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hi.set(t,s)),H1(a,t,s,r.state))),e&&i===null)throw Error(ee(528,""));return r}if(e&&i!==null)throw Error(ee(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(n=po(n),e=Ur(a).hoistableScripts,i=e.get(n),i||(i={type:"script",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(ee(444,t))}}function eo(t){return'href="'+li(t)+'"'}function Ol(t){return'link[rel="stylesheet"]['+t+"]"}function AS(t){return Nt({},t,{"data-precedence":t.precedence,precedence:null})}function H1(t,e,n,i){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[du]!==!0){i.loading=1;return}}else e=t.createElement("link"),e[du]=!0,e.onload=e.onerror=t_.bind(null,e),hn(e,"link",n),sn(e),t.head.appendChild(e);i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2})}function po(t){return'[src="'+li(t)+'"]'}function Il(t){return"script[async]"+t}function ax(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+li(n.href)+'"]');if(i)return e.instance=i,sn(i),i;var a=Nt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),sn(i),hn(i,"style",a),Kc(i,n.precedence,t),e.instance=i;case"stylesheet":a=eo(n.href);var s=t.querySelector(Ol(a));if(s)return e.state.loading|=4,e.instance=s,sn(s),s;i=AS(n),(a=hi.get(a))&&jm(i,a),s=(t.ownerDocument||t).createElement("link"),sn(s);var r=s;return r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),hn(s,"link",i),e.state.loading|=4,Kc(s,n.precedence,t),e.instance=s;case"script":return s=po(n.src),(a=t.querySelector(Il(s)))?(e.instance=a,sn(a),a):(i=n,(a=hi.get(s))&&(i=Nt({},n),Xm(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),sn(a),hn(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(ee(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,Kc(i,n.precedence,t));return e.instance}function Kc(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===e)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function jm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Xm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Qc=null;function sx(t,e,n){if(Qc===null){var i=new Map,a=Qc=new Map;a.set(n,i)}else a=Qc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var s=n[a];if(!(s[Rl]||s[ln]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function Qh(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function G1(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function rx(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function NS(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function RS(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ox(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=RS(e),t.suspenseyImages.push(e)),t=j1.bind(t),e.decode().then(t,t))}function V1(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=eo(i.href),s=e.querySelector(Ol(a));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=gl.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,sn(s);return}s=e.ownerDocument||e,i=AS(i),(a=hi.get(a))&&jm(i,a),s=s.createElement("link"),sn(s);var r=s;r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),hn(s,"link",i),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=gl.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Jc=0;function k1(t,e){return t.stylesheets&&t.count===0&&$c(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&$c(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&Jc===0&&(Jc=62500*o1());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$c(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>Jc?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function CS(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)$c(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function gl(){this.count--,CS(this)}function j1(){this.imgCount--,CS(this)}var Ou=null;function $c(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ou=new Map,e.forEach(X1,t),Ou=null,gl.call(t))}function X1(t,e){if(!(e.state.loading&4)){var n=Ou.get(t);if(n)var i=n.get(null);else{n=new Map,Ou.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=e.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=gl.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var to={$$typeof:Bi,Provider:null,Consumer:null,_currentValue:Rs,_currentValue2:Rs,_threadCount:0};function W1(t,e,n,i,a,s,r,o,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wd(0),this.hiddenUpdates=wd(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function wS(t,e,n,i,a,s,r,o,c,u,h,m){return t=new W1(t,e,n,r,c,u,h,m,o),e=1,s===!0&&(e|=24),s=On(3,null,null,e),t.current=s,s.stateNode=t,e=dm(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:e},pm(s),t}function DS(t){return t?(t=Rr,t):Rr}function LS(t,e,n,i,a,s){a=DS(a),i.context===null?i.context=a:i.pendingContext=a,i=Ka(e),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Qa(t,i,e),n!==null&&(Pn(n,t,e),Wo(n,t,e))}function lx(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wm(t,e){lx(t,e),(t=t.alternate)&&lx(t,e)}function US(t){if(t.tag===13||t.tag===31){var e=Zs(t,67108864);e!==null&&Pn(e,t,67108864),Wm(t,67108864)}}function cx(t){if(t.tag===13||t.tag===31){var e=Kn();e=$p(e);var n=Zs(t,e);n!==null&&Pn(n,t,e),Wm(t,e)}}var no=!0;function Y1(t,e,n,i){var a=Be.T;Be.T=null;var s=ht.p;try{ht.p=2,Ym(t,e,n,i)}finally{ht.p=s,Be.T=a}}function q1(t,e,n,i){var a=Be.T;Be.T=null;var s=ht.p;try{ht.p=8,Ym(t,e,n,i)}finally{ht.p=s,Be.T=a}}function Ym(t,e,n,i){if(no){var a=Jh(i);if(a===null)nf(t,e,i,Iu,n),ux(t,i);else if(K1(a,t,e,n,i))i.stopPropagation();else if(ux(t,i),e&4&&-1<Z1.indexOf(t)){for(;a!==null;){var s=lo(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=Ss(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var c=1<<31-Zn(r);o.entanglements[1]|=c,r&=~c}Ji(s),!(ft&6)&&(Cu=Yn()+500,Ul(0))}}break;case 31:case 13:o=Zs(s,2),o!==null&&Pn(o,s,2),fd(),Wm(s,2)}if(s=Jh(i),s===null&&nf(t,e,i,Iu,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else nf(t,e,i,null,n)}}function Jh(t){return t=nm(t),qm(t)}var Iu=null;function qm(t){if(Iu=null,t=Ms(t),t!==null){var e=Ml(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Fv(e),t!==null)return t;t=null}else if(n===31){if(t=Hv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Iu=t,null}function OS(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(oM()){case Wv:return 2;case Yv:return 8;case uu:case lM:return 32;case qv:return 268435456;default:return 32}default:return 32}}var $h=!1,ts=null,ns=null,is=null,xl=new Map,vl=new Map,Ha=[],Z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ux(t,e){switch(t){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":xl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(e.pointerId)}}function Mo(t,e,n,i,a,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},e!==null&&(e=lo(e),e!==null&&US(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function K1(t,e,n,i,a){switch(e){case"focusin":return ts=Mo(ts,t,e,n,i,a),!0;case"dragenter":return ns=Mo(ns,t,e,n,i,a),!0;case"mouseover":return is=Mo(is,t,e,n,i,a),!0;case"pointerover":var s=a.pointerId;return xl.set(s,Mo(xl.get(s)||null,t,e,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,vl.set(s,Mo(vl.get(s)||null,t,e,n,i,a)),!0}return!1}function IS(t){var e=Ms(t.target);if(e!==null){var n=Ml(e);if(n!==null){if(e=n.tag,e===13){if(e=Fv(n),e!==null){t.blockedOn=e,z0(t.priority,function(){cx(n)});return}}else if(e===31){if(e=Hv(n),e!==null){t.blockedOn=e,z0(t.priority,function(){cx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jh(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);nh=i,n.target.dispatchEvent(i),nh=null}else return e=lo(n),e!==null&&US(e),t.blockedOn=n,!1;e.shift()}return!0}function dx(t,e,n){eu(t)&&n.delete(e)}function Q1(){$h=!1,ts!==null&&eu(ts)&&(ts=null),ns!==null&&eu(ns)&&(ns=null),is!==null&&eu(is)&&(is=null),xl.forEach(dx),vl.forEach(dx)}function ac(t,e){t.blockedOn===e&&(t.blockedOn=null,$h||($h=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,Q1)))}var sc=null;function fx(t){sc!==t&&(sc=t,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,function(){sc===t&&(sc=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(qm(i||n)===null)continue;break}var s=lo(n);s!==null&&(t.splice(e,3),e-=3,vh(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function io(t){function e(c){return ac(c,t)}ts!==null&&ac(ts,t),ns!==null&&ac(ns,t),is!==null&&ac(is,t),xl.forEach(e),vl.forEach(e);for(var n=0;n<Ha.length;n++){var i=Ha[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Ha.length&&(n=Ha[0],n.blockedOn===null);)IS(n),n.blockedOn===null&&Ha.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Fn]||null;if(typeof s=="function")r||fx(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Fn]||null)o=r.formAction;else if(qm(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),fx(n)}}}function PS(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Zm(t){this._internalRoot=t}md.prototype.render=Zm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));var n=e.current,i=Kn();LS(n,i,t,e,null,null)};md.prototype.unmount=Zm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;LS(t.current,2,null,t,null,null),fd(),e[oo]=null}};function md(t){this._internalRoot=t}md.prototype.unstable_scheduleHydration=function(t){if(t){var e=e_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ha.length&&e!==0&&e<Ha[n].priority;n++);Ha.splice(n,0,t),n===0&&IS(t)}};var hx=zv.version;if(hx!=="19.3.0")throw Error(ee(527,hx,"19.3.0"));ht.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=KE(e),t=t!==null?Gv(t):null,t=t===null?null:t.stateNode,t};var J1={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Be,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{Tl=rc.inject(J1),qn=rc}catch{}}Zu.createRoot=function(t,e){if(!Bv(t))throw Error(ee(299));var n=!1,i="",a=xy,s=vy,r=_y;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=wS(t,1,!1,null,null,n,i,null,a,s,r,PS),t[oo]=e.current,Hm(t),new Zm(e)};Zu.hydrateRoot=function(t,e,n){if(!Bv(t))throw Error(ee(299));var i=!1,a="",s=xy,r=vy,o=_y,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),e=wS(t,1,!0,e,n??null,i,a,c,s,r,o,PS),e.context=DS(null),n=e.current,i=Kn(),i=$p(i),a=Ka(i),a.callback=null,Qa(n,a,i),n=i,e.current.lanes=n,Nl(e,n),Ji(e),t[oo]=e.current,Hm(t),new md(e)};Zu.version="19.3.0";function zS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zS)}catch(t){console.error(t)}}zS(),Dv.exports=Zu;var $1=Dv.exports;class eA{constructor(){Md(this,"ctx",null);Md(this,"isMuted",!1)}initContext(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted}getMuted(){return this.isMuted}setMuted(e){this.isMuted=e}playClick(e=800){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(e,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(120,this.ctx.currentTime+.04),i.gain.setValueAtTime(.04,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.04),n.connect(i),i.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.05)}catch{}}playHover(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1600,this.ctx.currentTime+.03),n.gain.setValueAtTime(.015,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.03),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.035)}catch{}}playTelemetry(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(440,this.ctx.currentTime),e.frequency.setValueAtTime(880,this.ctx.currentTime+.05),n.gain.setValueAtTime(.03,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.1),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.1)}catch{}}playBootSweep(){if(!this.isMuted)try{if(this.initContext(),!this.ctx)return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(100,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(800,this.ctx.currentTime+.8);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(400,this.ctx.currentTime),i.frequency.exponentialRampToValueAtTime(3e3,this.ctx.currentTime+.8),n.gain.setValueAtTime(.02,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.8),e.connect(i),i.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.85)}catch{}}}const Ee=new eA;/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function nA(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:tA(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=t=>{const e=iA(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function of(t){return t!=null}function sA(t,e={}){var d,p;const n=e.attributeNames??{},i=g=>n[g]??g,a=t.size??t.width??ms.width,s=t.size??t.height??ms.height,r=((d=t.aliases)==null?void 0:d.filter(g=>typeof g=="string"&&g.trim()!=="").map(g=>`lucide-${g}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...r],c=((p=e.className)==null?void 0:p.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?ep(...c):ep("lucide",...o,...c),h=e.absoluteStrokeWidth?Number(e.strokeWidth??ms["stroke-width"])*Number(t.size??t.width??ms.width)/Number(e.size??e.width??ms.width):e.strokeWidth??ms["stroke-width"];return["svg",{...Object.entries(ms).reduce((g,[b,x])=>(g[i(b)]=x,g),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&of(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&of(e.width)&&{[i("width")]:e.width},..."height"in e&&of(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:h,...u&&{[i("class")]:u},[i("viewBox")]:`0 0 ${a} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(g=>{const[b,x,f]=g,v=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...x}:x;return f?[b,v,f]:[b,v]})]}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function rA(t,e={}){return sA(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},lA=Ce.createContext({}),cA=()=>Ce.useContext(lA),uA=Ce.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:a,absoluteStrokeWidth:s,nonScalingStroke:r,className:o="",children:c,iconNode:u=[],icon:h={node:u,aliases:[],size:24},...m},d)=>{const{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:b=!1,nonScalingStroke:x=!1,color:f="currentColor",className:v=""}=cA()??{},M=!!c||oA(m),[S,T,A=[]]=rA(h,{color:t??f,width:n??e??p,height:i??e??p,strokeWidth:a??g,absoluteStrokeWidth:s??b,nonScalingStroke:r??x,className:ep(v,o),hasA11yProp:M,attributes:m});return Ce.createElement(S,{ref:d,...T},[...A.map(([N,y])=>Ce.createElement(N,y)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function qe(t,e=[],n=[]){const i=typeof t=="string"?nA(t,e,n):t,a=Ce.forwardRef(({className:s,...r},o)=>Ce.createElement(uA,{ref:o,icon:i,className:s,...r}));return i.name&&(a.displayName=aA(i.name)),a}/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};BS.node;const cs=qe(BS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};FS.node;const gd=qe(FS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};HS.node;const dA=qe(HS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS={name:"bot",size:24,node:[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]};GS.node;const px=qe(GS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS={name:"brain",size:24,node:[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]};VS.node;const Pu=qe(VS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};kS.node;const fA=qe(kS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};jS.node;const Km=qe(jS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};XS.node;const hA=qe(XS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};WS.node;const YS=qe(WS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};qS.node;const pA=qe(qS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS={name:"cloud",size:24,node:[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]};ZS.node;const mA=qe(ZS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS={name:"command",size:24,node:[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]};KS.node;const mx=qe(KS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};QS.node;const mo=qe(QS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS={name:"crosshair",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]};JS.node;const $S=qe(JS);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};eb.node;const gA=qe(eb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};tb.node;const Gs=qe(tb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};nb.node;const Qm=qe(nb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib={name:"file-code-corner",size:24,node:[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],aliases:["file-code-2"]};ib.node;const xA=qe(ib);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};ab.node;const vA=qe(ab);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb={name:"flask-conical",size:24,node:[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]};sb.node;const _A=qe(sb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb={name:"git-branch",size:24,node:[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]]};rb.node;const Jm=qe(rb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob={name:"hammer",size:24,node:[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]]};ob.node;const yA=qe(ob);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};lb.node;const tp=qe(lb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};cb.node;const SA=qe(cb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};ub.node;const bA=qe(ub);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};db.node;const EA=qe(db);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};fb.node;const MA=qe(fb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};hb.node;const TA=qe(hb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};pb.node;const AA=qe(pb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb={name:"repeat",size:24,node:[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]};mb.node;const gx=qe(mb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};gb.node;const NA=qe(gb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};xb.node;const RA=qe(xb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};vb.node;const _b=qe(vb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};yb.node;const xx=qe(yb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Sb.node;const CA=qe(Sb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};bb.node;const wA=qe(bb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};Eb.node;const tl=qe(Eb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Mb.node;const DA=qe(Mb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Tb.node;const LA=qe(Tb);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Ab.node;const xd=qe(Ab);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Nb.node;const _l=qe(Nb),UA=({onEnter:t})=>{const[e,n]=Ce.useState(0),[i,a]=Ce.useState([]),[s,r]=Ce.useState(!1);Ce.useEffect(()=>{const c=setTimeout(()=>{n(1),Ee.playClick(400)},600),u=setTimeout(()=>{n(2),Ee.playBootSweep()},1400),h=setTimeout(()=>{a(["IDENTITY ........ VERIFIED","MEMORY .......... ONLINE","SYSTEMS ......... ONLINE","MISSIONS ........ LOADED","RESEARCH ........ ACTIVE"]),Ee.playTelemetry(),n(3)},2500),m=setTimeout(()=>{r(!0),n(4),Ee.playTelemetry()},3600);return()=>{clearTimeout(c),clearTimeout(u),clearTimeout(h),clearTimeout(m)}},[]);const o=()=>{Ee.playBootSweep(),t()};return l.jsxs("div",{className:"fixed inset-0 z-50 bg-[#05070a] flex flex-col items-center justify-center p-6 select-none overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"}),l.jsx("div",{className:"absolute inset-0 scanlines opacity-40 pointer-events-none"}),l.jsx("div",{className:"absolute inset-0 vignette pointer-events-none"}),l.jsxs("div",{className:"absolute top-6 left-8 right-8 flex items-center justify-between text-[11px] font-mono text-slate-500 border-b border-slate-800/80 pb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),l.jsx("span",{className:"text-cyan-400 font-semibold tracking-wider",children:"NEURAL LINK // ESTABLISHED"})]}),l.jsxs("div",{className:"flex items-center gap-6",children:[l.jsx("span",{children:"ERA: 2042"}),l.jsx("span",{children:"SYSTEM PROTOCOL: SECURE-07"}),l.jsx("button",{onClick:o,className:"text-slate-400 hover:text-cyan-400 underline transition-colors cursor-pointer",children:"[ FAST BYPASS ]"})]})]}),l.jsxs("div",{className:"relative z-10 w-full max-w-xl mx-auto flex flex-col items-start font-mono",children:[e>=0&&l.jsxs("div",{className:"text-cyan-400 text-lg mb-4 flex items-center gap-2",children:[l.jsx("span",{className:"text-slate-600",children:">"}),l.jsx("span",{className:"text-slate-400 text-sm",children:"INITIALIZING DOSSIER QUERY:"}),l.jsx("span",{className:"animate-pulse text-cyan-400 font-bold",children:"_"})]}),e>=1&&l.jsxs("div",{className:"space-y-2 border-l-2 border-cyan-500/50 pl-5 my-3 animate-fade-in",children:[l.jsxs("div",{className:"text-xs text-cyan-400 tracking-widest uppercase font-semibold flex items-center gap-2",children:[l.jsx(_l,{className:"w-3.5 h-3.5"})," DESIGNATION IDENTIFIER"]}),l.jsx("h1",{className:"text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-white",children:"CHARACTER-07"}),l.jsx("div",{className:"text-xl sm:text-2xl text-slate-300 font-mono tracking-wide",children:"ATLEE KUMAAR"}),l.jsxs("div",{className:"text-xs sm:text-sm text-cyan-400/90 font-mono tracking-widest uppercase flex items-center gap-2 pt-1",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"AI SYSTEMS ARCHITECT"]})]}),e>=3&&l.jsxs("div",{className:"w-full bg-slate-950/60 border border-slate-800/80 rounded p-4 my-5 space-y-1.5 text-xs text-slate-300 font-mono shadow-xl backdrop-blur-md",children:[l.jsxs("div",{className:"text-[10px] text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-800 pb-1 flex justify-between",children:[l.jsx("span",{children:"SYSTEM SUBSYSTEMS INTEGRITY CHECK"}),l.jsx("span",{className:"text-cyan-400",children:"100% OK"})]}),i.map((c,u)=>l.jsxs("div",{className:"flex justify-between items-center text-slate-400",children:[l.jsx("span",{children:c.split(" ")[0]}),l.jsx("span",{className:"text-slate-600",children:"........................"}),l.jsx("span",{className:"text-cyan-400 font-bold tracking-wider",children:c.split(" ").pop()})]},u))]}),s&&l.jsxs("div",{className:"w-full space-y-6 animate-fade-in pt-2",children:[l.jsxs("div",{className:"flex items-center justify-between p-3 rounded bg-cyan-950/20 border border-cyan-500/30 text-xs",children:[l.jsx("span",{className:"text-slate-400",children:"CHARACTER STATUS:"}),l.jsxs("span",{className:"flex items-center gap-1.5 text-cyan-300 font-bold tracking-widest",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"ACTIVE"]})]}),l.jsxs("button",{onClick:o,onMouseEnter:()=>Ee.playHover(),className:"group relative w-full py-4 px-6 bg-gradient-to-r from-cyan-950/40 via-cyan-900/30 to-slate-900/40 hover:from-cyan-500/20 hover:to-cyan-400/20 border border-cyan-500/50 hover:border-cyan-400 rounded-lg text-white font-mono text-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 flex items-center justify-center gap-3 cursor-pointer",children:[l.jsx("span",{className:"relative z-10 font-bold text-cyan-300 group-hover:text-white transition-colors",children:"[ ENTER THE CHARACTER ]"}),l.jsx(gd,{className:"w-4 h-4 text-cyan-400 group-hover:translate-x-1.5 transition-transform duration-300"})]})]})]}),l.jsx("div",{className:"absolute bottom-6 text-[10px] font-mono text-slate-600 tracking-wider",children:"DISCOVERING DIGITAL IDENTITY ARCHIVE // DOSSIER 07-AK"})]})},OA=()=>{const[t,e]=Ce.useState({x:-100,y:-100}),[n,i]=Ce.useState({x:-100,y:-100}),[a,s]=Ce.useState(!1),[r,o]=Ce.useState(""),[c,u]=Ce.useState(!1),[h,m]=Ce.useState(!1);return Ce.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches){u(!0);return}document.body.classList.add("custom-cursor-active");const d=x=>{e({x:x.clientX,y:x.clientY}),m(!0);const f=x.target;if(!f)return;const v=f.closest('button, a, [data-cursor], [role="button"]');if(v){s(!0);const M=v.getAttribute("data-cursor");M?o(M):v.tagName==="A"?o("ACCESS"):v.tagName==="BUTTON"?o("INTERACT"):o("VIEW")}else s(!1),o("")},p=()=>m(!1);window.addEventListener("mousemove",d),document.addEventListener("mouseleave",p);let g;const b=()=>{i(x=>({x:x.x+(t.x-x.x)*.25,y:x.y+(t.y-x.y)*.25})),g=requestAnimationFrame(b)};return g=requestAnimationFrame(b),()=>{document.body.classList.remove("custom-cursor-active"),window.removeEventListener("mousemove",d),document.removeEventListener("mouseleave",p),cancelAnimationFrame(g)}},[t]),c||!h?null:l.jsxs("div",{className:"pointer-events-none fixed inset-0 z-[100] overflow-hidden",children:[l.jsx("div",{className:"fixed w-2 h-2 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 shadow-sm shadow-cyan-400 transition-opacity duration-200",style:{left:`${t.x}px`,top:`${t.y}px`,opacity:a?.3:1}}),l.jsx("div",{className:`fixed rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ${a?"w-12 h-12 bg-cyan-950/40 border border-cyan-400 backdrop-blur-[2px]":"w-7 h-7 border border-cyan-500/30"}`,style:{left:`${n.x}px`,top:`${n.y}px`},children:a&&r&&l.jsx("span",{className:"text-[9px] font-mono font-bold tracking-widest text-cyan-300 uppercase",children:r})})]})},IA=({onOpenCommandPalette:t})=>{const[e,n]=Ce.useState(!1),[i,a]=Ce.useState(!1),[s,r]=Ce.useState(!1);Ce.useEffect(()=>{const h=()=>{n(window.scrollY>40)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const o=()=>{const h=Ee.toggleMute();a(h),h||Ee.playTelemetry()},c=[{label:"ORIGIN",href:"#origin"},{label:"ABILITIES",href:"#abilities"},{label:"MISSIONS",href:"#missions"},{label:"LAB",href:"#laboratory"},{label:"MEMORY",href:"#memory"},{label:"CONTACT",href:"#contact"}],u=h=>{Ee.playClick(),r(!1);const m=document.querySelector(h);m&&m.scrollIntoView({behavior:"smooth"})};return l.jsxs("header",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${e?"bg-[#05070a]/90 backdrop-blur-md border-b border-white/5 py-3.5 shadow-lg shadow-black/40":"bg-transparent py-5 border-b border-transparent"}`,children:[l.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between",children:[l.jsxs("a",{href:"#hero",onClick:()=>Ee.playClick(),className:"flex items-center gap-3 group","data-cursor":"CHARACTER",children:[l.jsx("div",{className:"w-8 h-8 rounded-lg bg-cyan-950/40 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all",children:"07"}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"font-heading font-extrabold tracking-widest text-sm text-white group-hover:text-cyan-300 transition-colors",children:"CHARACTER-07"}),l.jsxs("span",{className:"text-[10px] font-mono text-slate-500 flex items-center gap-1.5 tracking-wider",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),"SYSTEM ACTIVE // 2042"]})]})]}),l.jsx("nav",{className:"hidden md:flex items-center gap-7",children:c.map(h=>l.jsxs("a",{href:h.href,onClick:m=>{m.preventDefault(),u(h.href)},onMouseEnter:()=>Ee.playHover(),className:"text-xs font-mono tracking-widest text-slate-400 hover:text-cyan-300 transition-colors py-1 relative group","data-cursor":"GOTO",children:[l.jsx("span",{className:"relative z-10",children:h.label}),l.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan-400 group-hover:w-full transition-all duration-300"})]},h.label))}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("button",{onClick:()=>{Ee.playTelemetry(),t()},onMouseEnter:()=>Ee.playHover(),title:"Open Command Palette (Ctrl+K)",className:"hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-all cursor-pointer","data-cursor":"SEARCH",children:[l.jsx(mx,{className:"w-3.5 h-3.5 text-cyan-400"}),l.jsx("span",{className:"text-slate-300",children:"HUD"}),l.jsx("kbd",{className:"text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 border border-slate-700",children:"Ctrl+K"})]}),l.jsx("button",{onClick:o,onMouseEnter:()=>Ee.playHover(),className:"p-2 rounded bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-all cursor-pointer",title:i?"Unmute telemetry audio":"Mute telemetry audio","data-cursor":i?"UNMUTE":"MUTE",children:i?l.jsx(LA,{className:"w-4 h-4 text-slate-500"}):l.jsx(DA,{className:"w-4 h-4 text-cyan-400"})}),l.jsx("button",{onClick:()=>{Ee.playClick(),r(!s)},className:"md:hidden p-2 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400",children:s?l.jsx(xd,{className:"w-5 h-5"}):l.jsx(EA,{className:"w-5 h-5"})})]})]}),s&&l.jsxs("div",{className:"md:hidden fixed inset-x-0 top-full bg-[#05070a]/95 backdrop-blur-xl border-b border-slate-800 p-6 font-mono space-y-4 shadow-2xl animate-fade-in",children:[l.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2",children:"DOSSIER NAVIGATION DIRECTORY"}),l.jsx("div",{className:"flex flex-col space-y-3",children:c.map(h=>l.jsxs("a",{href:h.href,onClick:m=>{m.preventDefault(),u(h.href)},className:"text-sm font-mono tracking-wider text-slate-200 hover:text-cyan-300 py-2 border-b border-slate-900 flex justify-between items-center",children:[l.jsx("span",{children:h.label}),l.jsx("span",{className:"text-xs text-slate-600",children:">>"})]},h.label))}),l.jsxs("button",{onClick:()=>{r(!1),t()},className:"w-full py-2.5 rounded bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 text-xs flex items-center justify-center gap-2",children:[l.jsx(mx,{className:"w-4 h-4"})," OPEN COMMAND HUD"]})]})]})},PA=({isOpen:t,onClose:e})=>{const[n,i]=Ce.useState("");if(Ce.useEffect(()=>{const o=c=>{(c.metaKey||c.ctrlKey)&&c.key==="k"&&(c.preventDefault(),Ee.playTelemetry(),t?e():i("")),c.key==="Escape"&&t&&e()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[t,e]),!t)return null;const s=[{label:"00 // HERO HUD",href:"#hero",icon:xx,desc:"Telemetry & core philosophy"},{label:"01 // ORIGIN DOSSIER",href:"#origin",icon:dA,desc:"The Question, Obsession, Transformation"},{label:"02 // CHARACTER ABILITIES",href:"#abilities",icon:_l,desc:"Perception, Reasoning, Memory, Action"},{label:"03 // THE MIND (INTELLIGENCE FLOW)",href:"#the-mind",icon:mo,desc:"Interactive living cognitive architecture"},{label:"04 // MISSION LOG",href:"#missions",icon:tl,desc:"Verified LiDAR benchmarks & projects"},{label:"05 // THE LAB (EXPERIMENTS)",href:"#laboratory",icon:tp,desc:"Active research logs & ongoing hypotheses"},{label:"06 // SYSTEM STACK",href:"#stack",icon:tp,desc:"Layered 5-tier engineering architecture"},{label:"07 // MEMORY TIMELINE",href:"#memory",icon:Jm,desc:"Cognitive evolution timeline"},{label:"08 // OPEN SYSTEM (GITHUB)",href:"#open-system",icon:tl,desc:"Public terminal connection to atleekumaar"},{label:"09 // FUTURE OBJECTIVES",href:"#future",icon:_l,desc:"Autonomous Intelligence roadmap"},{label:"10 // CHARACTER FILE",href:"#character-file",icon:xx,desc:"Biometric dossier and directives"},{label:"11 // MISSION CONTROL (CONTACT)",href:"#contact",icon:tl,desc:"Direct communication channels"}].filter(o=>o.label.toLowerCase().includes(n.toLowerCase())||o.desc.toLowerCase().includes(n.toLowerCase())),r=o=>{Ee.playClick(),e();const c=document.querySelector(o);c&&c.scrollIntoView({behavior:"smooth"})};return l.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 sm:pt-28 p-4 animate-fade-in",children:l.jsxs("div",{className:"relative w-full max-w-xl bg-[#0a0d14] border border-cyan-500/40 rounded-xl shadow-2xl shadow-cyan-950/50 overflow-hidden font-mono text-slate-200",children:[l.jsxs("div",{className:"flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-950/60",children:[l.jsx(NA,{className:"w-5 h-5 text-cyan-400"}),l.jsx("input",{type:"text",placeholder:"Search dossier directives, abilities, missions, telemetry...",value:n,onChange:o=>i(o.target.value),autoFocus:!0,className:"w-full bg-transparent border-none outline-none text-sm text-slate-100 placeholder:text-slate-500 font-mono"}),l.jsx("button",{onClick:e,className:"text-slate-500 hover:text-slate-200 p-1 rounded",children:l.jsx(xd,{className:"w-4 h-4"})})]}),l.jsxs("div",{className:"max-h-80 overflow-y-auto p-2 space-y-1",children:[l.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest px-3 py-1 font-semibold",children:"SYSTEM DIRECTIVES & JUMP TARGETS"}),s.length===0?l.jsx("div",{className:"text-center py-8 text-xs text-slate-500 font-mono",children:"NO MATCHING TELEMETRY ENTRY FOUND."}):s.map((o,c)=>{const u=o.icon;return l.jsxs("button",{onClick:()=>r(o.href),onMouseEnter:()=>Ee.playHover(),className:"w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-cyan-950/30 hover:border-cyan-500/30 border border-transparent text-left transition-all group cursor-pointer",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-colors",children:l.jsx(u,{className:"w-4 h-4"})}),l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-semibold text-slate-200 group-hover:text-cyan-300",children:o.label}),l.jsx("div",{className:"text-[11px] text-slate-500",children:o.desc})]})]}),l.jsx("span",{className:"text-[10px] text-slate-600 group-hover:text-cyan-400 font-mono",children:"[ JUMP ]"})]},c)})]}),l.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-t border-slate-800/80 bg-slate-950/80 text-[10px] text-slate-500",children:[l.jsx("span",{children:"NAVIGATION HUD // CHARACTER-07"}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{children:"ESC to close"}),l.jsx("span",{children:"ENTER to jump"})]})]})]})})},zA=[{keywords:["who","atlee","atul","character","about","kon","kaun","identity","profile","intro","introduction","kumaar","shukla"],response:"Atlee Kumaar (Atul Shukla), codename **CHARACTER-07**, is an **AI Systems Architect** and Computer Science Engineering student specializing in Artificial Intelligence. His mission is to build intelligent systems capable of perceiving, reasoning, learning, and acting in the physical and digital world.",jumpTarget:"#character-file",jumpLabel:"VIEW CHARACTER FILE"},{keywords:["lidar","mission","project","52.05","benchmark","fps","msn-001","perception","foveated","point cloud","spvcnn","kaam","projects"],response:`Mission 001 is **FOVEATED 2.5D LiDAR MAPPING** for autonomous navigation. Key verified hardware benchmarks include:
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
3. **AI Infrastructure**: Distributed edge runtimes with sub-30ms inference guarantees.`,jumpTarget:"#future",jumpLabel:"VIEW FUTURE OBJECTIVES"}],BA=()=>{const[t,e]=Ce.useState(!1),[n,i]=Ce.useState(!1),[a,s]=Ce.useState(""),[r,o]=Ce.useState([{id:"init-1",sender:"bot",text:"Greetings. I am the **C-07 AI DOSSIER AGENT**. Ask me anything about Atlee Kumaar (Atul Shukla) — his AI architecture, verified LiDAR benchmarks, tech stack, lab experiments, or how to connect.",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),[c,u]=Ce.useState(!1),h=Ce.useRef(null);Ce.useEffect(()=>{var g;(g=h.current)==null||g.scrollIntoView({behavior:"smooth"})},[r,c]);const m=["Who is Atlee Kumaar?","Tell me about Mission 001 LiDAR","What are his Core Abilities?","How to contact him?","What is his AI philosophy?"],d=g=>{const b=(g||a).trim();if(!b)return;Ee.playTelemetry();const x={id:`usr-${Date.now()}`,sender:"user",text:b,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};o(f=>[...f,x]),s(""),u(!0),setTimeout(()=>{const f=b.toLowerCase();let v=zA.find(N=>N.keywords.some(y=>f.includes(y))),M="I received your query. Atlee Kumaar is an AI Systems Architect specializing in 3D perception, multi-agent reasoning, and scalable AI infrastructure. You can explore his verified missions, abilities, and GitHub repositories in the dossier navigation.",S,T;v?(M=v.response,S=v.jumpTarget,T=v.jumpLabel):(f.includes("hi")||f.includes("hello")||f.includes("hey")||f.includes("namaste"))&&(M="Hello! I am ready to brief you on Atlee's technical journey, verified project metrics, research lab, or future autonomous intelligence roadmap. What would you like to inspect?");const A={id:`bot-${Date.now()}`,sender:"bot",text:M,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),jumpTarget:S,jumpLabel:T};o(N=>[...N,A]),u(!1),Ee.playClick(600)},700)},p=g=>{if(!g)return;Ee.playClick();const b=document.querySelector(g);b&&b.scrollIntoView({behavior:"smooth"})};return l.jsxs(l.Fragment,{children:[!t&&l.jsx("div",{className:"fixed bottom-6 right-6 z-40 animate-fade-in",children:l.jsxs("button",{onClick:()=>{Ee.playTelemetry(),e(!0),i(!1)},onMouseEnter:()=>Ee.playHover(),className:"group relative flex items-center gap-3 px-4 py-3 bg-[#080c14] border border-cyan-500/60 hover:border-cyan-400 rounded-full shadow-2xl shadow-cyan-950/80 text-white font-mono text-xs cursor-pointer transition-all hover:scale-105","data-cursor":"AI BOT",children:[l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-300",children:l.jsx(px,{className:"w-4 h-4"})}),l.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5 border-2 border-[#080c14] animate-pulse"})]}),l.jsxs("div",{className:"text-left hidden sm:block",children:[l.jsxs("div",{className:"text-[11px] font-bold text-cyan-300 group-hover:text-white transition-colors flex items-center gap-1.5",children:[l.jsx("span",{children:"C-07 AI ASSISTANT"}),l.jsx(CA,{className:"w-3 h-3 text-cyan-400"})]}),l.jsx("div",{className:"text-[9px] text-slate-400",children:"Ask anything about Atlee"})]})]})}),t&&l.jsxs("div",{className:`fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] bg-[#070a12] border border-cyan-500/50 rounded-2xl shadow-2xl shadow-cyan-950/80 font-mono flex flex-col overflow-hidden transition-all duration-300 ${n?"h-[64px]":"h-[560px] max-h-[85vh]"}`,children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800 shrink-0",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-400/80 flex items-center justify-center text-cyan-300",children:l.jsx(px,{className:"w-4 h-4"})}),l.jsxs("div",{children:[l.jsxs("div",{className:"text-xs font-bold text-white flex items-center gap-1.5",children:[l.jsx("span",{children:"C-07 DOSSIER AGENT"}),l.jsx("span",{className:"text-[9px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30",children:"ONLINE"})]}),l.jsx("div",{className:"text-[9px] text-slate-400",children:"CHARACTER-07 KNOWLEDGE CORE"})]})]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("button",{onClick:()=>i(!n),className:"p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors",title:n?"Maximize":"Minimize",children:n?l.jsx(bA,{className:"w-3.5 h-3.5"}):l.jsx(MA,{className:"w-3.5 h-3.5"})}),l.jsx("button",{onClick:()=>{Ee.playClick(),e(!1)},className:"p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors",title:"Close",children:l.jsx(xd,{className:"w-4 h-4"})})]})]}),!n&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-[#070a12] to-[#04060a] text-xs font-sans",children:[r.map(g=>l.jsxs("div",{className:`flex flex-col ${g.sender==="user"?"items-end":"items-start"}`,children:[l.jsx("div",{className:"flex items-center gap-1 text-[10px] text-slate-500 font-mono mb-1",children:g.sender==="user"?l.jsxs(l.Fragment,{children:[l.jsx("span",{children:"VISITOR"}),l.jsx("span",{children:"•"}),l.jsx("span",{children:g.timestamp})]}):l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"text-cyan-400 font-bold",children:"C-07 AGENT"}),l.jsx("span",{children:"•"}),l.jsx("span",{children:g.timestamp})]})}),l.jsxs("div",{className:`p-3.5 rounded-2xl max-w-[90%] leading-relaxed ${g.sender==="user"?"bg-cyan-950/40 text-slate-100 border border-cyan-500/40 rounded-tr-none":"bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-none font-sans whitespace-pre-line shadow-md"}`,children:[g.text,g.jumpTarget&&l.jsx("div",{className:"mt-3 pt-2 border-t border-slate-800 flex justify-end",children:l.jsxs("button",{onClick:()=>p(g.jumpTarget),className:"inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 hover:text-white bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/50 px-2.5 py-1 rounded cursor-pointer transition-all",children:[l.jsxs("span",{children:["[",g.jumpLabel||"JUMP TO SECTION","]"]}),l.jsx(gd,{className:"w-3 h-3 text-cyan-400"})]})})]})]},g.id)),c&&l.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-mono text-xs",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-bounce"}),l.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"}),l.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"}),l.jsx("span",{className:"text-slate-500 text-[10px] ml-1",children:"RETRIEVING DOSSIER EMBEDDINGS..."})]}),l.jsx("div",{ref:h})]}),l.jsx("div",{className:"p-2 border-t border-slate-800/80 bg-slate-950/60 overflow-x-auto flex gap-1.5 no-scrollbar",children:m.map(g=>l.jsx("button",{onClick:()=>d(g),className:"whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-900 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-[10px] font-mono text-slate-400 hover:text-cyan-300 transition-all shrink-0 cursor-pointer",children:g},g))}),l.jsxs("form",{onSubmit:g=>{g.preventDefault(),d()},className:"p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2 font-mono",children:[l.jsx("input",{type:"text",value:a,onChange:g=>s(g.target.value),placeholder:"Ask about Atlee, LiDAR, abilities, contact...",className:"flex-1 bg-slate-900/80 border border-slate-800 focus:border-cyan-500/60 rounded-lg px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 outline-none"}),l.jsx("button",{type:"submit",disabled:!a.trim(),className:"p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 disabled:opacity-30 border border-cyan-500/50 text-cyan-300 transition-all cursor-pointer",children:l.jsx(RA,{className:"w-4 h-4"})})]})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $m="186",FA=0,vx=1,HA=2,tu=1,GA=2,Fo=3,Vs=0,zn=1,oa=2,fa=0,nl=1,zu=2,_x=3,yx=4,VA=5,_r=100,kA=101,jA=102,XA=103,WA=104,YA=200,qA=201,ZA=202,KA=203,Rb=204,Cb=205,QA=206,JA=207,$A=208,eN=209,tN=210,nN=211,iN=212,aN=213,sN=214,np=0,ip=1,ap=2,yl=3,sp=4,rp=5,op=6,lp=7,wb=0,rN=1,oN=2,Wi=0,Db=1,Lb=2,Ub=3,Ob=4,Ib=5,Pb=6,zb=7,Bb=300,ks=301,ao=302,lf=303,cf=304,vd=306,cp=1e3,ca=1001,up=1002,un=1003,lN=1004,oc=1005,vn=1006,uf=1007,As=1008,di=1009,Fb=1010,Hb=1011,Sl=1012,e0=1013,qi=1014,Vi=1015,Zi=1016,t0=1017,n0=1018,bl=1020,Gb=35902,Vb=35899,kb=1021,jb=1022,Ei=1023,ya=1026,Ns=1027,Xb=1028,i0=1029,js=1030,a0=1031,s0=1033,nu=33776,iu=33777,au=33778,su=33779,dp=35840,fp=35841,hp=35842,pp=35843,mp=36196,gp=37492,xp=37496,vp=37488,_p=37489,Bu=37490,yp=37491,Sp=37808,bp=37809,Ep=37810,Mp=37811,Tp=37812,Ap=37813,Np=37814,Rp=37815,Cp=37816,wp=37817,Dp=37818,Lp=37819,Up=37820,Op=37821,Ip=36492,Pp=36494,zp=36495,Bp=36283,Fp=36284,Fu=36285,Hp=36286,cN=3200,Sx=0,uN=1,Ga="",ai="srgb",Hu="srgb-linear",Gu="linear",_t="srgb",df=7680,dN=519,fN=512,hN=513,pN=514,r0=515,mN=516,gN=517,o0=518,xN=519,vN=35044,bx="300 es",ki=2e3,Vu=2001;function _N(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ku(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yN(){const t=ku("canvas");return t.style.display="block",t}const Ex={};function Mx(...t){const e="THREE."+t.shift();console.log(e,...t)}function Wb(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=Wb(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ut(...t){t=Wb(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function kr(...t){const e=t.join(" ");e in Ex||(Ex[e]=!0,ze(...t))}function SN(t,e,n){return new Promise(function(i,a){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const bN={[np]:ip,[ap]:op,[sp]:lp,[yl]:rp,[ip]:np,[op]:ap,[lp]:sp,[rp]:yl};class Qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ff=Math.PI/180,Gp=180/Math.PI;function Pl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[t&255]+gn[t>>8&255]+gn[t>>16&255]+gn[t>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function rt(t,e,n){return Math.max(e,Math.min(n,t))}function EN(t,e){return(t%e+e)%e}function hf(t,e,n){return(1-n)*t+n*e}function To(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const d0=class d0{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};d0.prototype.isVector2=!0;let pt=d0;class go{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,s,r,o){let c=i[a+0],u=i[a+1],h=i[a+2],m=i[a+3],d=s[r+0],p=s[r+1],g=s[r+2],b=s[r+3];if(m!==b||c!==d||u!==p||h!==g){let x=c*d+u*p+h*g+m*b;x<0&&(d=-d,p=-p,g=-g,b=-b,x=-x);let f=1-o;if(x<.9995){const v=Math.acos(x),M=Math.sin(v);f=Math.sin(f*v)/M,o=Math.sin(o*v)/M,c=c*f+d*o,u=u*f+p*o,h=h*f+g*o,m=m*f+b*o}else{c=c*f+d*o,u=u*f+p*o,h=h*f+g*o,m=m*f+b*o;const v=1/Math.sqrt(c*c+u*u+h*h+m*m);c*=v,u*=v,h*=v,m*=v}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,a,s,r){const o=i[a],c=i[a+1],u=i[a+2],h=i[a+3],m=s[r],d=s[r+1],p=s[r+2],g=s[r+3];return e[n]=o*g+h*m+c*p-u*d,e[n+1]=c*g+h*d+u*m-o*p,e[n+2]=u*g+h*p+o*d-c*m,e[n+3]=h*g-o*m-c*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,u=o(i/2),h=o(a/2),m=o(s/2),d=c(i/2),p=c(a/2),g=c(s/2);switch(r){case"XYZ":this._x=d*h*m+u*p*g,this._y=u*p*m-d*h*g,this._z=u*h*g+d*p*m,this._w=u*h*m-d*p*g;break;case"YXZ":this._x=d*h*m+u*p*g,this._y=u*p*m-d*h*g,this._z=u*h*g-d*p*m,this._w=u*h*m+d*p*g;break;case"ZXY":this._x=d*h*m-u*p*g,this._y=u*p*m+d*h*g,this._z=u*h*g+d*p*m,this._w=u*h*m-d*p*g;break;case"ZYX":this._x=d*h*m-u*p*g,this._y=u*p*m+d*h*g,this._z=u*h*g-d*p*m,this._w=u*h*m+d*p*g;break;case"YZX":this._x=d*h*m+u*p*g,this._y=u*p*m+d*h*g,this._z=u*h*g-d*p*m,this._w=u*h*m-d*p*g;break;case"XZY":this._x=d*h*m-u*p*g,this._y=u*p*m-d*h*g,this._z=u*h*g+d*p*m,this._w=u*h*m+d*p*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],c=n[9],u=n[2],h=n[6],m=n[10],d=i+o+m;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-u)*p,this._z=(r-a)*p}else if(i>o&&i>m){const p=2*Math.sqrt(1+i-o-m);this._w=(h-c)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+u)/p}else if(o>m){const p=2*Math.sqrt(1+o-i-m);this._w=(s-u)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+m-i-o);this._w=(r-a)/p,this._x=(s+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,s=e._z,r=e._w,o=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+r*o+a*u-s*c,this._y=a*h+r*c+s*o-i*u,this._z=s*h+r*u+i*c-a*o,this._w=r*h-i*o-a*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let c=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,n=Math.sin(n*u)/h,this._x=this._x*c+i*n,this._y=this._y*c+a*n,this._z=this._z*c+s*n,this._w=this._w*c+r*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+a*n,this._z=this._z*c+s*n,this._w=this._w*c+r*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const f0=class f0{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,c=e.w,u=2*(r*a-o*i),h=2*(o*n-s*a),m=2*(s*i-r*n);return this.x=n+c*u+r*m-o*h,this.y=i+c*h+o*u-s*m,this.z=a+c*m+s*h-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,s=e.z,r=n.x,o=n.y,c=n.z;return this.x=a*c-s*o,this.y=s*r-i*c,this.z=i*o-a*r,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pf.copy(this).projectOnVector(e),this.sub(pf)}reflect(e){return this.sub(pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};f0.prototype.isVector3=!0;let j=f0;const pf=new j,Tx=new go,h0=class h0{constructor(e,n,i,a,s,r,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,c,u)}set(e,n,i,a,s,r,o,c,u){const h=this.elements;return h[0]=e,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=r,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],c=i[6],u=i[1],h=i[4],m=i[7],d=i[2],p=i[5],g=i[8],b=a[0],x=a[3],f=a[6],v=a[1],M=a[4],S=a[7],T=a[2],A=a[5],N=a[8];return s[0]=r*b+o*v+c*T,s[3]=r*x+o*M+c*A,s[6]=r*f+o*S+c*N,s[1]=u*b+h*v+m*T,s[4]=u*x+h*M+m*A,s[7]=u*f+h*S+m*N,s[2]=d*b+p*v+g*T,s[5]=d*x+p*M+g*A,s[8]=d*f+p*S+g*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return n*r*h-n*o*u-i*s*h+i*o*c+a*s*u-a*r*c}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],u=e[7],h=e[8],m=h*r-o*u,d=o*c-h*s,p=u*s-r*c,g=n*m+i*d+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=m*b,e[1]=(a*u-h*i)*b,e[2]=(o*i-a*r)*b,e[3]=d*b,e[4]=(h*n-a*c)*b,e[5]=(a*s-o*n)*b,e[6]=p*b,e[7]=(i*c-u*n)*b,e[8]=(r*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,s,r,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*r+u*o)+r+e,-a*u,a*c,-a*(-u*r+c*o)+o+n,0,0,1),this}scale(e,n){return kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mf.makeScale(e,n)),this}rotate(e){return kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mf.makeRotation(-e)),this}translate(e,n){return kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};h0.prototype.isMatrix3=!0;let je=h0;const mf=new je,Ax=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nx=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function MN(){const t={enabled:!0,workingColorSpace:Hu,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===_t&&(a.r=ha(a.r),a.g=ha(a.g),a.b=ha(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===_t&&(a.r=jr(a.r),a.g=jr(a.g),a.b=jr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ga?Gu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return kr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return kr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Hu]:{primaries:e,whitePoint:i,transfer:Gu,toXYZ:Ax,fromXYZ:Nx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Ax,fromXYZ:Nx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),t}const st=MN();function ha(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let nr;class TN{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{nr===void 0&&(nr=ku("canvas")),nr.width=e.width,nr.height=e.height;const a=nr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=nr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ku("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ha(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ha(n[i]/255)*255):n[i]=ha(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AN=0;class l0{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:AN++}),this.uuid=Pl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(gf(a[r].image)):s.push(gf(a[r]))}else s=gf(a);i.url=s}return n||(e.images[this.uuid]=i),i}}function gf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?TN.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let NN=0;const xf=new j;class yn extends Qs{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=ca,a=ca,s=vn,r=As,o=Ei,c=di,u=yn.DEFAULT_ANISOTROPY,h=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NN++}),this.uuid=Pl(),this.name="",this.source=new l0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xf).x}get height(){return this.source.getSize(xf).y}get depth(){return this.source.getSize(xf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bb)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cp:e.x=e.x-Math.floor(e.x);break;case ca:e.x=e.x<0?0:1;break;case up:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cp:e.y=e.y-Math.floor(e.y);break;case ca:e.y=e.y<0?0:1;break;case up:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Bb;yn.DEFAULT_ANISOTROPY=1;const p0=class p0{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,s;const c=e.elements,u=c[0],h=c[4],m=c[8],d=c[1],p=c[5],g=c[9],b=c[2],x=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(m-b)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(m+b)<.1&&Math.abs(g+x)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,S=(p+1)/2,T=(f+1)/2,A=(h+d)/4,N=(m+b)/4,y=(g+x)/4;return M>S&&M>T?M<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(M),a=A/i,s=N/i):S>T?S<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(S),i=A/a,s=y/a):T<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(T),i=N/s,a=y/s),this.set(i,a,s,n),this}let v=Math.sqrt((x-g)*(x-g)+(m-b)*(m-b)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(x-g)/v,this.y=(m-b)/v,this.z=(d-h)/v,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this.w=rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this.w=rt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};p0.prototype.isVector4=!0;let Ht=p0;class RN extends Qs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:i.depth},s=new yn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new l0(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends RN{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Yb extends yn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=un,this.minFilter=un,this.wrapR=ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CN extends yn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=un,this.minFilter=un,this.wrapR=ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Yu=class Yu{constructor(e,n,i,a,s,r,o,c,u,h,m,d,p,g,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,c,u,h,m,d,p,g,b,x)}set(e,n,i,a,s,r,o,c,u,h,m,d,p,g,b,x){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=c,f[2]=u,f[6]=h,f[10]=m,f[14]=d,f[3]=p,f[7]=g,f[11]=b,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,a=1/ir.setFromMatrixColumn(e,0).length(),s=1/ir.setFromMatrixColumn(e,1).length(),r=1/ir.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),c=Math.cos(a),u=Math.sin(a),h=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const d=r*h,p=r*m,g=o*h,b=o*m;n[0]=c*h,n[4]=-c*m,n[8]=u,n[1]=p+g*u,n[5]=d-b*u,n[9]=-o*c,n[2]=b-d*u,n[6]=g+p*u,n[10]=r*c}else if(e.order==="YXZ"){const d=c*h,p=c*m,g=u*h,b=u*m;n[0]=d+b*o,n[4]=g*o-p,n[8]=r*u,n[1]=r*m,n[5]=r*h,n[9]=-o,n[2]=p*o-g,n[6]=b+d*o,n[10]=r*c}else if(e.order==="ZXY"){const d=c*h,p=c*m,g=u*h,b=u*m;n[0]=d-b*o,n[4]=-r*m,n[8]=g+p*o,n[1]=p+g*o,n[5]=r*h,n[9]=b-d*o,n[2]=-r*u,n[6]=o,n[10]=r*c}else if(e.order==="ZYX"){const d=r*h,p=r*m,g=o*h,b=o*m;n[0]=c*h,n[4]=g*u-p,n[8]=d*u+b,n[1]=c*m,n[5]=b*u+d,n[9]=p*u-g,n[2]=-u,n[6]=o*c,n[10]=r*c}else if(e.order==="YZX"){const d=r*c,p=r*u,g=o*c,b=o*u;n[0]=c*h,n[4]=b-d*m,n[8]=g*m+p,n[1]=m,n[5]=r*h,n[9]=-o*h,n[2]=-u*h,n[6]=p*m+g,n[10]=d-b*m}else if(e.order==="XZY"){const d=r*c,p=r*u,g=o*c,b=o*u;n[0]=c*h,n[4]=-m,n[8]=u*h,n[1]=d*m+b,n[5]=r*h,n[9]=p*m-g,n[2]=g*m-p,n[6]=o*h,n[10]=b*m+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wN,e,DN)}lookAt(e,n,i){const a=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),wa.crossVectors(i,Hn),wa.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),wa.crossVectors(i,Hn)),wa.normalize(),lc.crossVectors(Hn,wa),a[0]=wa.x,a[4]=lc.x,a[8]=Hn.x,a[1]=wa.y,a[5]=lc.y,a[9]=Hn.y,a[2]=wa.z,a[6]=lc.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],c=i[8],u=i[12],h=i[1],m=i[5],d=i[9],p=i[13],g=i[2],b=i[6],x=i[10],f=i[14],v=i[3],M=i[7],S=i[11],T=i[15],A=a[0],N=a[4],y=a[8],R=a[12],w=a[1],O=a[5],F=a[9],W=a[13],z=a[2],k=a[6],I=a[10],P=a[14],q=a[3],V=a[7],Z=a[11],ne=a[15];return s[0]=r*A+o*w+c*z+u*q,s[4]=r*N+o*O+c*k+u*V,s[8]=r*y+o*F+c*I+u*Z,s[12]=r*R+o*W+c*P+u*ne,s[1]=h*A+m*w+d*z+p*q,s[5]=h*N+m*O+d*k+p*V,s[9]=h*y+m*F+d*I+p*Z,s[13]=h*R+m*W+d*P+p*ne,s[2]=g*A+b*w+x*z+f*q,s[6]=g*N+b*O+x*k+f*V,s[10]=g*y+b*F+x*I+f*Z,s[14]=g*R+b*W+x*P+f*ne,s[3]=v*A+M*w+S*z+T*q,s[7]=v*N+M*O+S*k+T*V,s[11]=v*y+M*F+S*I+T*Z,s[15]=v*R+M*W+S*P+T*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],c=e[9],u=e[13],h=e[2],m=e[6],d=e[10],p=e[14],g=e[3],b=e[7],x=e[11],f=e[15],v=c*p-u*d,M=o*p-u*m,S=o*d-c*m,T=r*p-u*h,A=r*d-c*h,N=r*m-o*h;return n*(b*v-x*M+f*S)-i*(g*v-x*T+f*A)+a*(g*M-b*T+f*N)-s*(g*S-b*A+x*N)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[1],r=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return n*(r*h-o*u)-i*(s*h-o*c)+a*(s*u-r*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],u=e[7],h=e[8],m=e[9],d=e[10],p=e[11],g=e[12],b=e[13],x=e[14],f=e[15],v=n*o-i*r,M=n*c-a*r,S=n*u-s*r,T=i*c-a*o,A=i*u-s*o,N=a*u-s*c,y=h*b-m*g,R=h*x-d*g,w=h*f-p*g,O=m*x-d*b,F=m*f-p*b,W=d*f-p*x,z=v*W-M*F+S*O+T*w-A*R+N*y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/z;return e[0]=(o*W-c*F+u*O)*k,e[1]=(a*F-i*W-s*O)*k,e[2]=(b*N-x*A+f*T)*k,e[3]=(d*A-m*N-p*T)*k,e[4]=(c*w-r*W-u*R)*k,e[5]=(n*W-a*w+s*R)*k,e[6]=(x*S-g*N-f*M)*k,e[7]=(h*N-d*S+p*M)*k,e[8]=(r*F-o*w+u*y)*k,e[9]=(i*w-n*F-s*y)*k,e[10]=(g*A-b*S+f*v)*k,e[11]=(m*S-h*A-p*v)*k,e[12]=(o*R-r*O-c*y)*k,e[13]=(n*O-i*R+a*y)*k,e[14]=(b*M-g*T-x*v)*k,e[15]=(h*T-m*M+d*v)*k,this}scale(e){const n=this.elements,i=e.x,a=e.y,s=e.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=e.x,o=e.y,c=e.z,u=s*r,h=s*o;return this.set(u*r+i,u*o-a*c,u*c+a*o,0,u*o+a*c,h*o+i,h*c-a*r,0,u*c-a*o,h*c+a*r,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,c=n._w,u=s+s,h=r+r,m=o+o,d=s*u,p=s*h,g=s*m,b=r*h,x=r*m,f=o*m,v=c*u,M=c*h,S=c*m,T=i.x,A=i.y,N=i.z;return a[0]=(1-(b+f))*T,a[1]=(p+S)*T,a[2]=(g-M)*T,a[3]=0,a[4]=(p-S)*A,a[5]=(1-(d+f))*A,a[6]=(x+v)*A,a[7]=0,a[8]=(g+M)*N,a[9]=(x-v)*N,a[10]=(1-(d+b))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=ir.set(a[0],a[1],a[2]).length();const o=ir.set(a[4],a[5],a[6]).length(),c=ir.set(a[8],a[9],a[10]).length();s<0&&(r=-r),gi.copy(this);const u=1/r,h=1/o,m=1/c;return gi.elements[0]*=u,gi.elements[1]*=u,gi.elements[2]*=u,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=m,gi.elements[9]*=m,gi.elements[10]*=m,n.setFromRotationMatrix(gi),i.x=r,i.y=o,i.z=c,this}makePerspective(e,n,i,a,s,r,o=ki,c=!1){const u=this.elements,h=2*s/(n-e),m=2*s/(i-a),d=(n+e)/(n-e),p=(i+a)/(i-a);let g,b;if(c)g=s/(r-s),b=r*s/(r-s);else if(o===ki)g=-(r+s)/(r-s),b=-2*r*s/(r-s);else if(o===Vu)g=-r/(r-s),b=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=m,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,a,s,r,o=ki,c=!1){const u=this.elements,h=2/(n-e),m=2/(i-a),d=-(n+e)/(n-e),p=-(i+a)/(i-a);let g,b;if(c)g=1/(r-s),b=r/(r-s);else if(o===ki)g=-2/(r-s),b=-(r+s)/(r-s);else if(o===Vu)g=-1/(r-s),b=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=m,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Yu.prototype.isMatrix4=!0;let Gt=Yu;const ir=new j,gi=new Gt,wN=new j(0,0,0),DN=new j(1,1,1),wa=new j,lc=new j,Hn=new j,Rx=new Gt,Cx=new go;class Xs{constructor(e=0,n=0,i=0,a=Xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],c=a[1],u=a[5],h=a[9],m=a[2],d=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Rx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rx,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Cx.setFromEuler(this),this.setFromQuaternion(Cx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xs.DEFAULT_ORDER="XYZ";class qb{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LN=0;const wx=new j,ar=new go,ta=new Gt,cc=new j,Ao=new j,UN=new j,ON=new go,Dx=new j(1,0,0),Lx=new j(0,1,0),Ux=new j(0,0,1),Ox={type:"added"},IN={type:"removed"},sr={type:"childadded",child:null},vf={type:"childremoved",child:null};class Rn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LN++}),this.uuid=Pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new j,n=new Xs,i=new go,a=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new je}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ar.setFromAxisAngle(e,n),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,n){return ar.setFromAxisAngle(e,n),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Dx,e)}rotateY(e){return this.rotateOnAxis(Lx,e)}rotateZ(e){return this.rotateOnAxis(Ux,e)}translateOnAxis(e,n){return wx.copy(e).applyQuaternion(this.quaternion),this.position.add(wx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dx,e)}translateY(e){return this.translateOnAxis(Lx,e)}translateZ(e){return this.translateOnAxis(Ux,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?cc.copy(e):cc.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Ao,cc,this.up):ta.lookAt(cc,Ao,this.up),this.quaternion.setFromRotationMatrix(ta),a&&(ta.extractRotation(a.matrixWorld),ar.setFromRotationMatrix(ta),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ox),sr.child=e,this.dispatchEvent(sr),sr.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(IN),vf.child=e,this.dispatchEvent(vf),vf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ox),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,UN),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,ON,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const m=c[u];s(e.shapes,m)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(s(e.animations,c))}}if(n){const o=r(e.geometries),c=r(e.materials),u=r(e.textures),h=r(e.images),m=r(e.shapes),d=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=a,i;function r(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rn.DEFAULT_UP=new j(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class uc extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PN={type:"move"};class _f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,s=null,r=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){r=!0;for(const b of e.hand.values()){const x=n.getJointPose(b,i),f=this._getHandJoint(u,b);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const h=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],d=h.position.distanceTo(m.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(PN)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new uc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Zb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},dc={h:0,s:0,l:0};function yf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=st.workingColorSpace){if(e=EN(e,1),n=rt(n,0,1),i=rt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=yf(r,s,e+1/3),this.g=yf(r,s,e),this.b=yf(r,s,e-1/3)}return st.colorSpaceToWorking(this,a),this}setStyle(e,n=ai){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ai){const i=Zb[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return st.workingToColorSpace(xn.copy(this),e),Math.round(rt(xn.r*255,0,255))*65536+Math.round(rt(xn.g*255,0,255))*256+Math.round(rt(xn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(xn.copy(this),n);const i=xn.r,a=xn.g,s=xn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let c,u;const h=(o+r)/2;if(o===r)c=0,u=0;else{const m=r-o;switch(u=h<=.5?m/(r+o):m/(2-r-o),r){case i:c=(a-s)/m+(a<s?6:0);break;case a:c=(s-i)/m+2;break;case s:c=(i-a)/m+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ai){st.workingToColorSpace(xn.copy(this),e);const n=xn.r,i=xn.g,a=xn.b;return e!==ai?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(Da),this.setHSL(Da.h+e,Da.s+n,Da.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Da),e.getHSL(dc);const i=hf(Da.h,dc.h,n),a=hf(Da.s,dc.s,n),s=hf(Da.l,dc.l,n);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new it;it.NAMES=Zb;class c0{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(e),this.density=n}clone(){return new c0(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zN extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xs,this.environmentIntensity=1,this.environmentRotation=new Xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const xi=new j,na=new j,Sf=new j,ia=new j,rr=new j,or=new j,Ix=new j,bf=new j,Ef=new j,Mf=new j,Tf=new Ht,Af=new Ht,Nf=new Ht;class Si{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),xi.subVectors(e,n),a.cross(xi);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,n,i,a,s){xi.subVectors(a,n),na.subVectors(i,n),Sf.subVectors(e,n);const r=xi.dot(xi),o=xi.dot(na),c=xi.dot(Sf),u=na.dot(na),h=na.dot(Sf),m=r*u-o*o;if(m===0)return s.set(0,0,0),null;const d=1/m,p=(u*c-o*h)*d,g=(r*h-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,n,i,a,s,r,o,c){return this.getBarycoord(e,n,i,a,ia)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ia.x),c.addScaledVector(r,ia.y),c.addScaledVector(o,ia.z),c)}static getInterpolatedAttribute(e,n,i,a,s,r){return Tf.setScalar(0),Af.setScalar(0),Nf.setScalar(0),Tf.fromBufferAttribute(e,n),Af.fromBufferAttribute(e,i),Nf.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(Tf,s.x),r.addScaledVector(Af,s.y),r.addScaledVector(Nf,s.z),r}static isFrontFacing(e,n,i,a){return xi.subVectors(i,n),na.subVectors(e,n),xi.cross(na).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),xi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,s){return Si.getInterpolation(e,this.a,this.b,this.c,n,i,a,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,s=this.c;let r,o;rr.subVectors(a,i),or.subVectors(s,i),bf.subVectors(e,i);const c=rr.dot(bf),u=or.dot(bf);if(c<=0&&u<=0)return n.copy(i);Ef.subVectors(e,a);const h=rr.dot(Ef),m=or.dot(Ef);if(h>=0&&m<=h)return n.copy(a);const d=c*m-h*u;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),n.copy(i).addScaledVector(rr,r);Mf.subVectors(e,s);const p=rr.dot(Mf),g=or.dot(Mf);if(g>=0&&p<=g)return n.copy(s);const b=p*u-c*g;if(b<=0&&u>=0&&g<=0)return o=u/(u-g),n.copy(i).addScaledVector(or,o);const x=h*g-p*m;if(x<=0&&m-h>=0&&p-g>=0)return Ix.subVectors(s,a),o=(m-h)/(m-h+(p-g)),n.copy(a).addScaledVector(Ix,o);const f=1/(x+b+d);return r=b*f,o=d*f,n.copy(i).addScaledVector(rr,r).addScaledVector(or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zl{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,vi):vi.fromBufferAttribute(s,r),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fc.copy(i.boundingBox)),fc.applyMatrix4(e.matrixWorld),this.union(fc)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),hc.subVectors(this.max,No),lr.subVectors(e.a,No),cr.subVectors(e.b,No),ur.subVectors(e.c,No),La.subVectors(cr,lr),Ua.subVectors(ur,cr),gs.subVectors(lr,ur);let n=[0,-La.z,La.y,0,-Ua.z,Ua.y,0,-gs.z,gs.y,La.z,0,-La.x,Ua.z,0,-Ua.x,gs.z,0,-gs.x,-La.y,La.x,0,-Ua.y,Ua.x,0,-gs.y,gs.x,0];return!Rf(n,lr,cr,ur,hc)||(n=[1,0,0,0,1,0,0,0,1],!Rf(n,lr,cr,ur,hc))?!1:(pc.crossVectors(La,Ua),n=[pc.x,pc.y,pc.z],Rf(n,lr,cr,ur,hc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(aa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const aa=[new j,new j,new j,new j,new j,new j,new j,new j],vi=new j,fc=new zl,lr=new j,cr=new j,ur=new j,La=new j,Ua=new j,gs=new j,No=new j,hc=new j,pc=new j,xs=new j;function Rf(t,e,n,i,a){for(let s=0,r=t.length-3;s<=r;s+=3){xs.fromArray(t,s);const o=a.x*Math.abs(xs.x)+a.y*Math.abs(xs.y)+a.z*Math.abs(xs.z),c=e.dot(xs),u=n.dot(xs),h=i.dot(xs);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Xt=new j,mc=new pt;let BN=0;class In extends Qs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BN++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vN,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)mc.fromBufferAttribute(this,n),mc.applyMatrix3(e),this.setXY(n,mc.x,mc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=To(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=To(n,this.array)),n}setX(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=To(n,this.array)),n}setY(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=To(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=To(n,this.array)),n}setW(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),a=wn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,s){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),a=wn(a,this.array),s=wn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Kb extends In{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Qb extends In{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ai extends In{constructor(e,n,i){super(new Float32Array(e),n,i)}}const FN=new zl,Ro=new j,Cf=new j;class Bl{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):FN.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Ro,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Cf)),this.expandByPoint(Ro.copy(e.center).sub(Cf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let HN=0;const ni=new Gt,wf=new Rn,dr=new j,Gn=new zl,Co=new zl,tn=new j;class Jn extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HN++}),this.uuid=Pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_N(e)?Qb:Kb)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,n,i){return ni.makeTranslation(e,n,i),this.applyMatrix4(ni),this}scale(e,n,i){return ni.makeScale(e,n,i),this.applyMatrix4(ni),this}lookAt(e){return wf.lookAt(e),wf.updateMatrix(),this.applyMatrix4(wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ai(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const s=e[a];n.setXYZ(a,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];Co.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Gn.min,Co.min),Gn.expandByPoint(tn),tn.addVectors(Gn.max,Co.max),Gn.expandByPoint(tn)):(Gn.expandByPoint(Co.min),Gn.expandByPoint(Co.max))}Gn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)tn.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(tn));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)tn.fromBufferAttribute(o,u),c&&(dr.fromBufferAttribute(e,u),tn.add(dr)),a=Math.max(a,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new In(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],c=[];for(let y=0;y<i.count;y++)o[y]=new j,c[y]=new j;const u=new j,h=new j,m=new j,d=new pt,p=new pt,g=new pt,b=new j,x=new j;function f(y,R,w){u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,R),m.fromBufferAttribute(i,w),d.fromBufferAttribute(s,y),p.fromBufferAttribute(s,R),g.fromBufferAttribute(s,w),h.sub(u),m.sub(u),p.sub(d),g.sub(d);const O=1/(p.x*g.y-g.x*p.y);isFinite(O)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(m,-p.y).multiplyScalar(O),x.copy(m).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(O),o[y].add(b),o[R].add(b),o[w].add(b),c[y].add(x),c[R].add(x),c[w].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,R=v.length;y<R;++y){const w=v[y],O=w.start,F=w.count;for(let W=O,z=O+F;W<z;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const M=new j,S=new j,T=new j,A=new j;function N(y){T.fromBufferAttribute(a,y),A.copy(T);const R=o[y];M.copy(R),M.sub(T.multiplyScalar(T.dot(R))).normalize(),S.crossVectors(A,R);const O=S.dot(c[y])<0?-1:1;r.setXYZW(y,M.x,M.y,M.z,O)}for(let y=0,R=v.length;y<R;++y){const w=v[y],O=w.start,F=w.count;for(let W=O,z=O+F;W<z;W+=3)N(e.getX(W+0)),N(e.getX(W+1)),N(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new In(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new j,s=new j,r=new j,o=new j,c=new j,u=new j,h=new j,m=new j;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),b=e.getX(d+1),x=e.getX(d+2);a.fromBufferAttribute(n,g),s.fromBufferAttribute(n,b),r.fromBufferAttribute(n,x),h.subVectors(r,s),m.subVectors(a,s),h.cross(m),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,x),o.add(h),c.add(h),u.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)a.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),r.fromBufferAttribute(n,d+2),h.subVectors(r,s),m.subVectors(a,s),h.cross(m),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,m=o.normalized,d=new u.constructor(c.length*h);let p=0,g=0;for(let b=0,x=c.length;b<x;b++){o.isInterleavedBufferAttribute?p=c[b]*o.data.stride+o.offset:p=c[b]*h;for(let f=0;f<h;f++)d[g++]=u[p++]}return new In(d,h,m)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,i=this.index.array,a=this.attributes;for(const o in a){const c=a[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,m=u.length;h<m;h++){const d=u[h],p=e(d,i);c.push(p)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const u=r[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const a={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let m=0,d=u.length;m<d;m++){const p=u[m];h.push(p.toJSON(e.data))}h.length>0&&(a[c]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const u in a){const h=a[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],m=s[u];for(let d=0,p=m.length;d<p;d++)h.push(m[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let u=0,h=r.length;u<h;u++){const m=r[u];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Df=new j,GN=new j,VN=new je;class Fa{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Df.subVectors(i,n).cross(GN.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(Df),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||VN.getNormalMatrix(e),a=this.coplanarPoint(Df).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let kN=0;class xo extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kN++}),this.uuid=Pl(),this.name="",this.type="Material",this.blending=nl,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rb,this.blendDst=Cb,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dN,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=df,this.stencilZFail=df,this.stencilZPass=df,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(n){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Fa().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const sa=new j,Lf=new j,gc=new j,xc=new j;class u0{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=sa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sa.copy(this.origin).addScaledVector(this.direction,n),sa.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Lf.copy(e).add(n).multiplyScalar(.5),gc.copy(n).sub(e).normalize(),xc.copy(this.origin).sub(Lf);const s=e.distanceTo(n)*.5,r=-this.direction.dot(gc),o=xc.dot(this.direction),c=-xc.dot(gc),u=xc.lengthSq(),h=Math.abs(1-r*r);let m,d,p,g;if(h>0)if(m=r*c-o,d=r*o-c,g=s*h,m>=0)if(d>=-g)if(d<=g){const b=1/h;m*=b,d*=b,p=m*(m+r*d+2*o)+d*(r*m+d+2*c)+u}else d=s,m=Math.max(0,-(r*d+o)),p=-m*m+d*(d+2*c)+u;else d=-s,m=Math.max(0,-(r*d+o)),p=-m*m+d*(d+2*c)+u;else d<=-g?(m=Math.max(0,-(-r*s+o)),d=m>0?-s:Math.min(Math.max(-s,-c),s),p=-m*m+d*(d+2*c)+u):d<=g?(m=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+u):(m=Math.max(0,-(r*s+o)),d=m>0?s:Math.min(Math.max(-s,-c),s),p=-m*m+d*(d+2*c)+u);else d=r>0?-s:s,m=Math.max(0,-(r*d+o)),p=-m*m+d*(d+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(Lf).addScaledVector(gc,d),p}intersectSphere(e,n){if(e.radius<0)return null;sa.subVectors(e.center,this.origin);const i=sa.dot(this.direction),a=sa.dot(sa)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,c=i+r;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,s,r,o,c;const u=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,a=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,a=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),m>=0?(o=(e.min.z-d.z)*m,c=(e.max.z-d.z)*m):(o=(e.max.z-d.z)*m,c=(e.min.z-d.z)*m),i>c||o>a)||((o>i||i!==i)&&(i=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,sa)!==null}intersectTriangle(e,n,i,a,s){const r=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,m=e.x-r.x,d=e.y-r.y,p=e.z-r.z,g=n.x-r.x,b=n.y-r.y,x=n.z-r.z,f=i.x-r.x,v=i.y-r.y,M=i.z-r.z,S=Math.abs(c),T=Math.abs(u),A=Math.abs(h);let N,y,R,w,O,F,W,z,k,I,P,q;if(S>=T&&S>=A?(R=c,F=m,k=g,q=f,c>=0?(N=u,y=h,w=d,O=p,W=b,z=x,I=v,P=M):(N=h,y=u,w=p,O=d,W=x,z=b,I=M,P=v)):T>=A?(R=u,F=d,k=b,q=v,u>=0?(N=h,y=c,w=p,O=m,W=x,z=g,I=M,P=f):(N=c,y=h,w=m,O=p,W=g,z=x,I=f,P=M)):(R=h,F=p,k=x,q=M,h>=0?(N=c,y=u,w=m,O=d,W=g,z=b,I=f,P=v):(N=u,y=c,w=d,O=m,W=b,z=g,I=v,P=f)),R===0)return null;const V=N/R,Z=y/R,ne=1/R,Ae=w-V*F,be=O-Z*F,Ge=W-V*k,Xe=z-Z*k,ot=I-V*q,K=P-Z*q,ie=ot*Xe-K*Ge,ve=Ae*K-be*ot,Fe=Ge*be-Xe*Ae;if(a){if(ie<0||ve<0||Fe<0)return null}else if((ie<0||ve<0||Fe<0)&&(ie>0||ve>0||Fe>0))return null;const xe=ie+ve+Fe;if(xe===0)return null;const re=ne*(ie*F+ve*k+Fe*q);return(xe>0?re<0:re>0)?null:this.at(re/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jb extends xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xs,this.combine=wb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Px=new Gt,vs=new u0,vc=new Bl,zx=new j,_c=new j,yc=new j,Sc=new j,Uf=new j,bc=new j,Bx=new j,Ec=new j;class Sa extends Rn{constructor(e=new Jn,n=new Jb){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){bc.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],m=s[c];h!==0&&(Uf.fromBufferAttribute(m,e),r?bc.addScaledVector(Uf,h):bc.addScaledVector(Uf.sub(n),h))}n.add(bc)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(s),vs.copy(e.ray).recast(e.near),!(vc.containsPoint(vs.origin)===!1&&(vs.intersectSphere(vc,zx)===null||vs.origin.distanceToSquared(zx)>(e.far-e.near)**2))&&(Px.copy(s).invert(),vs.copy(e.ray).applyMatrix4(Px),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vs)))}_computeIntersections(e,n,i){let a;const s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,b=d.length;g<b;g++){const x=d[g],f=r[x.materialIndex],v=Math.max(x.start,p.start),M=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let S=v,T=M;S<T;S+=3){const A=o.getX(S),N=o.getX(S+1),y=o.getX(S+2);a=Mc(this,f,e,i,u,h,m,A,N,y),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let x=g,f=b;x<f;x+=3){const v=o.getX(x),M=o.getX(x+1),S=o.getX(x+2);a=Mc(this,r,e,i,u,h,m,v,M,S),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,b=d.length;g<b;g++){const x=d[g],f=r[x.materialIndex],v=Math.max(x.start,p.start),M=Math.min(c.count,Math.min(x.start+x.count,p.start+p.count));for(let S=v,T=M;S<T;S+=3){const A=S,N=S+1,y=S+2;a=Mc(this,f,e,i,u,h,m,A,N,y),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const g=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let x=g,f=b;x<f;x+=3){const v=x,M=x+1,S=x+2;a=Mc(this,r,e,i,u,h,m,v,M,S),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}}function jN(t,e,n,i,a,s,r,o){let c;if(e.side===zn?c=i.intersectTriangle(r,s,a,!0,o):c=i.intersectTriangle(a,s,r,e.side===Vs,o),c===null)return null;Ec.copy(o),Ec.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ec);return u<n.near||u>n.far?null:{distance:u,point:Ec.clone(),object:t}}function Mc(t,e,n,i,a,s,r,o,c,u){t.getVertexPosition(o,_c),t.getVertexPosition(c,yc),t.getVertexPosition(u,Sc);const h=jN(t,e,n,i,_c,yc,Sc,Bx);if(h){const m=new j;Si.getBarycoord(Bx,_c,yc,Sc,m),a&&(h.uv=Si.getInterpolatedAttribute(a,o,c,u,m,new pt)),s&&(h.uv1=Si.getInterpolatedAttribute(s,o,c,u,m,new pt)),r&&(h.normal=Si.getInterpolatedAttribute(r,o,c,u,m,new j),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new j,materialIndex:0};Si.getNormal(_c,yc,Sc,d.normal),h.face=d,h.barycoord=m}return h}class XN extends yn{constructor(e=null,n=1,i=1,a,s,r,o,c,u=un,h=un,m,d){super(null,r,o,c,u,h,a,s,m,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _s=new Bl,WN=new pt(.5,.5),Tc=new j;class $b{constructor(e=new Fa,n=new Fa,i=new Fa,a=new Fa,s=new Fa,r=new Fa){this.planes=[e,n,i,a,s,r]}set(e,n,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ki,i=!1){const a=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],u=s[3],h=s[4],m=s[5],d=s[6],p=s[7],g=s[8],b=s[9],x=s[10],f=s[11],v=s[12],M=s[13],S=s[14],T=s[15];if(a[0].setComponents(u-r,p-h,f-g,T-v).normalize(),a[1].setComponents(u+r,p+h,f+g,T+v).normalize(),a[2].setComponents(u+o,p+m,f+b,T+M).normalize(),a[3].setComponents(u-o,p-m,f-b,T-M).normalize(),i)a[4].setComponents(c,d,x,S).normalize(),a[5].setComponents(u-c,p-d,f-x,T-S).normalize();else if(a[4].setComponents(u-c,p-d,f-x,T-S).normalize(),n===ki)a[5].setComponents(u+c,p+d,f+x,T+S).normalize();else if(n===Vu)a[5].setComponents(c,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);const n=WN.distanceTo(e.center);return _s.radius=.7071067811865476+n,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Tc.x=a.normal.x>0?e.max.x:e.min.x,Tc.y=a.normal.y>0?e.max.y:e.min.y,Tc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eE extends xo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ju=new j,Xu=new j,Fx=new Gt,wo=new u0,Ac=new Bl,Of=new j,Hx=new j;class YN extends Rn{constructor(e=new Jn,n=new eE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)ju.fromBufferAttribute(n,a-1),Xu.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=ju.distanceTo(Xu);e.setAttribute("lineDistance",new Ai(i,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ac.copy(i.boundingSphere),Ac.applyMatrix4(a),Ac.radius+=s,e.ray.intersectsSphere(Ac)===!1)return;Fx.copy(a).invert(),wo.copy(e.ray).applyMatrix4(Fx);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let b=p,x=g-1;b<x;b+=u){const f=h.getX(b),v=h.getX(b+1),M=Nc(this,e,wo,c,f,v,b);M&&n.push(M)}if(this.isLineLoop){const b=h.getX(g-1),x=h.getX(p),f=Nc(this,e,wo,c,b,x,g-1);f&&n.push(f)}}else{const p=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let b=p,x=g-1;b<x;b+=u){const f=Nc(this,e,wo,c,b,b+1,b);f&&n.push(f)}if(this.isLineLoop){const b=Nc(this,e,wo,c,g-1,p,g-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Nc(t,e,n,i,a,s,r){const o=t.geometry.attributes.position;if(ju.fromBufferAttribute(o,a),Xu.fromBufferAttribute(o,s),n.distanceSqToSegment(ju,Xu,Of,Hx)>i)return;Of.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(Of);if(!(u<e.near||u>e.far))return{distance:u,point:Hx.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Gx=new j,Vx=new j;class qN extends YN{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let a=0,s=n.count;a<s;a+=2)Gx.fromBufferAttribute(n,a),Vx.fromBufferAttribute(n,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Gx.distanceTo(Vx);e.setAttribute("lineDistance",new Ai(i,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tE extends xo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kx=new Gt,Vp=new u0,Rc=new Bl,Cc=new j;class ZN extends Rn{constructor(e=new Jn,n=new tE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(a),Rc.radius+=s,e.ray.intersectsSphere(Rc)===!1)return;kx.copy(a).invert(),Vp.copy(e.ray).applyMatrix4(kx);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,m=i.attributes.position;if(u!==null){const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let g=d,b=p;g<b;g++){const x=u.getX(g);Cc.fromBufferAttribute(m,x),jx(Cc,x,c,a,e,n,this)}}else{const d=Math.max(0,r.start),p=Math.min(m.count,r.start+r.count);for(let g=d,b=p;g<b;g++)Cc.fromBufferAttribute(m,g),jx(Cc,g,c,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jx(t,e,n,i,a,s,r){const o=Vp.distanceSqToPoint(t);if(o<n){const c=new j;Vp.closestPointToPoint(t,c),c.applyMatrix4(i);const u=a.ray.origin.distanceTo(c);if(u<a.near||u>a.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class nE extends yn{constructor(e=[],n=ks,i,a,s,r,o,c,u,h){super(e,n,i,a,s,r,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KN extends yn{constructor(e,n,i,a,s,r,o,c,u){super(e,n,i,a,s,r,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class El extends yn{constructor(e,n,i=qi,a,s,r,o=un,c=un,u,h=ya,m=1){if(h!==ya&&h!==Ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:m};super(d,a,s,r,o,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new l0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class QN extends El{constructor(e,n=qi,i=ks,a,s,r=un,o=un,c,u=ya){const h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,n,i,a,s,r,o,c,u),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class iE extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fl extends Jn{constructor(e=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const c=[],u=[],h=[],m=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,r,s,0),g("z","y","x",1,-1,i,n,-e,r,s,1),g("x","z","y",1,1,e,i,n,a,r,2),g("x","z","y",1,-1,e,i,-n,a,r,3),g("x","y","z",1,-1,e,n,i,a,s,4),g("x","y","z",-1,-1,e,n,-i,a,s,5),this.setIndex(c),this.setAttribute("position",new Ai(u,3)),this.setAttribute("normal",new Ai(h,3)),this.setAttribute("uv",new Ai(m,2));function g(b,x,f,v,M,S,T,A,N,y,R){const w=S/N,O=T/y,F=S/2,W=T/2,z=A/2,k=N+1,I=y+1;let P=0,q=0;const V=new j;for(let Z=0;Z<I;Z++){const ne=Z*O-W;for(let Ae=0;Ae<k;Ae++){const be=Ae*w-F;V[b]=be*v,V[x]=ne*M,V[f]=z,u.push(V.x,V.y,V.z),V[b]=0,V[x]=0,V[f]=A>0?1:-1,h.push(V.x,V.y,V.z),m.push(Ae/N),m.push(1-Z/y),P+=1}}for(let Z=0;Z<y;Z++)for(let ne=0;ne<N;ne++){const Ae=d+ne+k*Z,be=d+ne+k*(Z+1),Ge=d+(ne+1)+k*(Z+1),Xe=d+(ne+1)+k*Z;c.push(Ae,be,Xe),c.push(be,Ge,Xe),q+=6}o.addGroup(p,q,R),p+=q,d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _d extends Jn{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const s=e/2,r=n/2,o=Math.floor(i),c=Math.floor(a),u=o+1,h=c+1,m=e/o,d=n/c,p=[],g=[],b=[],x=[];for(let f=0;f<h;f++){const v=f*d-r;for(let M=0;M<u;M++){const S=M*m-s;g.push(S,-v,0),b.push(0,0,1),x.push(M/o),x.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<o;v++){const M=v+u*f,S=v+u*(f+1),T=v+1+u*(f+1),A=v+1+u*f;p.push(M,S,A),p.push(S,T,A)}this.setIndex(p),this.setAttribute("position",new Ai(g,3)),this.setAttribute("normal",new Ai(b,3)),this.setAttribute("uv",new Ai(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _d(e.width,e.height,e.widthSegments,e.heightSegments)}}function so(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(Xx(a))a.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(Xx(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();e[n][i]=s}else e[n][i]=a.slice();else e[n][i]=a}}return e}function Tn(t){const e={};for(let n=0;n<t.length;n++){const i=so(t[n]);for(const a in i)e[a]=i[a]}return e}function Xx(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function JN(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function aE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const $N={clone:so,merge:Tn};var e2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e2,this.fragmentShader=t2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=JN(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(a.value);break;case"v2":this.uniforms[i].value=new pt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new j().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Ht().fromArray(a.value);break;case"m3":this.uniforms[i].value=new je().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Gt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class n2 extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class i2 extends xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cN,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a2 extends xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wc=new j,Dc=new go,Ui=new j;class sE extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,Dc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(wc,Dc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new j,Wx=new pt,Yx=new pt;class oi extends sE{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gp*2*Math.atan(Math.tan(ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z)}getViewSize(e,n){return this.getViewBounds(e,Wx,Yx),n.subVectors(Yx,Wx)}setViewOffset(e,n,i,a,s,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ff*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,u=r.fullHeight;s+=r.offsetX*a/c,n-=r.offsetY*i/u,a*=r.width/c,i*=r.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class rE extends sE{constructor(e=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+n,c=a-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fr=-90,hr=1;class s2 extends Rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new oi(fr,hr,e,n);a.layers=this.layers,this.add(a);const s=new oi(fr,hr,e,n);s.layers=this.layers,this.add(s);const r=new oi(fr,hr,e,n);r.layers=this.layers,this.add(r);const o=new oi(fr,hr,e,n);o.layers=this.layers,this.add(o);const c=new oi(fr,hr,e,n);c.layers=this.layers,this.add(c);const u=new oi(fr,hr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,c]=n;for(const u of n)this.remove(u);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,c,u,h]=this.children,m=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,2,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(m,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class r2 extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class o2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const m0=class m0{constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=a,this}};m0.prototype.isMatrix2=!0;let qx=m0;function Zx(t,e,n,i){const a=l2(i);switch(n){case kb:return t*e;case Xb:return t*e/a.components*a.byteLength;case i0:return t*e/a.components*a.byteLength;case js:return t*e*2/a.components*a.byteLength;case a0:return t*e*2/a.components*a.byteLength;case jb:return t*e*3/a.components*a.byteLength;case Ei:return t*e*4/a.components*a.byteLength;case s0:return t*e*4/a.components*a.byteLength;case nu:case iu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case au:case su:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fp:case pp:return Math.max(t,16)*Math.max(e,8)/4;case dp:case hp:return Math.max(t,8)*Math.max(e,8)/2;case mp:case gp:case vp:case _p:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xp:case Bu:case yp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ep:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Np:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Cp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case wp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Lp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Up:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Op:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ip:case Pp:case zp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Bp:case Fp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fu:case Hp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function l2(t){switch(t){case di:case Fb:return{byteLength:1,components:1};case Sl:case Hb:case Zi:return{byteLength:2,components:1};case t0:case n0:return{byteLength:2,components:4};case qi:case e0:case Vi:return{byteLength:4,components:1};case Gb:case Vb:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$m}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$m);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function oE(){let t=null,e=!1,n=null,i=null;function a(s,r){i=t.requestAnimationFrame(a),n(s,r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function c2(t){const e=new WeakMap;function n(o,c){const u=o.array,h=o.usage,m=u.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,c,u){const h=c.array,m=c.updateRanges;if(t.bindBuffer(u,o),m.length===0)t.bufferSubData(u,0,h);else{m.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<m.length;p++){const g=m[d],b=m[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,m[d]=b)}m.length=d+1;for(let p=0,g=m.length;p<g;p++){const b=m[p];t.bufferSubData(u,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:a,remove:s,update:r}}var u2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d2=`#ifdef USE_ALPHAHASH
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
#endif`,f2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g2=`#ifdef USE_AOMAP
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
#endif`,x2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v2=`#ifdef USE_BATCHING
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
#endif`,_2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E2=`#ifdef USE_IRIDESCENCE
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
#endif`,M2=`#ifdef USE_BUMPMAP
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
#endif`,T2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,w2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,D2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,U2=`#define PI 3.141592653589793
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
} // validated`,O2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I2=`vec3 transformedNormal = objectNormal;
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
#endif`,P2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H2="gl_FragColor = linearToOutputTexel( gl_FragColor );",G2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V2=`#ifdef USE_ENVMAP
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
#endif`,k2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j2=`#ifdef USE_ENVMAP
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
#endif`,X2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W2=`#ifdef USE_ENVMAP
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
#endif`,Y2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q2=`#ifdef USE_GRADIENTMAP
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
}`,J2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tR=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,nR=`#ifdef USE_ENVMAP
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
#endif`,iR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oR=`PhysicalMaterial material;
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
#endif`,lR=`uniform sampler2D dfgLUT;
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
}`,cR=`
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
#endif`,uR=`#if defined( RE_IndirectDiffuse )
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
#endif`,dR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fR=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_R=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yR=`#if defined( USE_POINTS_UV )
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
#endif`,SR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ER=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AR=`#ifdef USE_MORPHTARGETS
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
#endif`,NR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,UR=`#ifdef USE_NORMALMAP
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
#endif`,OR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZR=`float getShadowMask() {
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
}`,KR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QR=`#ifdef USE_SKINNING
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
#endif`,JR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$R=`#ifdef USE_SKINNING
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
#endif`,e3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a3=`#ifdef USE_TRANSMISSION
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
#endif`,s3=`#ifdef USE_TRANSMISSION
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
#endif`,r3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d3=`uniform sampler2D t2D;
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
}`,f3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g3=`#include <common>
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
}`,x3=`#if DEPTH_PACKING == 3200
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
}`,v3=`#define DISTANCE
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
}`,_3=`#define DISTANCE
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
}`,y3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b3=`uniform float scale;
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
}`,E3=`uniform vec3 diffuse;
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
}`,M3=`#include <common>
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
}`,T3=`uniform vec3 diffuse;
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
}`,A3=`#define LAMBERT
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
}`,N3=`#define LAMBERT
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
}`,R3=`#define MATCAP
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
}`,C3=`#define MATCAP
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
}`,w3=`#define NORMAL
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
}`,D3=`#define NORMAL
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
}`,L3=`#define PHONG
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
}`,U3=`#define PHONG
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
}`,O3=`#define STANDARD
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
}`,I3=`#define STANDARD
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
}`,P3=`#define TOON
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
}`,z3=`#define TOON
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
}`,B3=`uniform float size;
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
}`,F3=`uniform vec3 diffuse;
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
}`,H3=`#include <common>
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
}`,G3=`uniform vec3 color;
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
}`,V3=`uniform float rotation;
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
}`,k3=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:u2,alphahash_pars_fragment:d2,alphamap_fragment:f2,alphamap_pars_fragment:h2,alphatest_fragment:p2,alphatest_pars_fragment:m2,aomap_fragment:g2,aomap_pars_fragment:x2,batching_pars_vertex:v2,batching_vertex:_2,begin_vertex:y2,beginnormal_vertex:S2,bsdfs:b2,iridescence_fragment:E2,bumpmap_pars_fragment:M2,clipping_planes_fragment:T2,clipping_planes_pars_fragment:A2,clipping_planes_pars_vertex:N2,clipping_planes_vertex:R2,color_fragment:C2,color_pars_fragment:w2,color_pars_vertex:D2,color_vertex:L2,common:U2,cube_uv_reflection_fragment:O2,defaultnormal_vertex:I2,displacementmap_pars_vertex:P2,displacementmap_vertex:z2,emissivemap_fragment:B2,emissivemap_pars_fragment:F2,colorspace_fragment:H2,colorspace_pars_fragment:G2,envmap_fragment:V2,envmap_common_pars_fragment:k2,envmap_pars_fragment:j2,envmap_pars_vertex:X2,envmap_physical_pars_fragment:nR,envmap_vertex:W2,fog_vertex:Y2,fog_pars_vertex:q2,fog_fragment:Z2,fog_pars_fragment:K2,gradientmap_pars_fragment:Q2,lightmap_pars_fragment:J2,lights_lambert_fragment:$2,lights_lambert_pars_fragment:eR,lights_pars_begin:tR,lights_toon_fragment:iR,lights_toon_pars_fragment:aR,lights_phong_fragment:sR,lights_phong_pars_fragment:rR,lights_physical_fragment:oR,lights_physical_pars_fragment:lR,lights_fragment_begin:cR,lights_fragment_maps:uR,lights_fragment_end:dR,lightprobes_pars_fragment:fR,logdepthbuf_fragment:hR,logdepthbuf_pars_fragment:pR,logdepthbuf_pars_vertex:mR,logdepthbuf_vertex:gR,map_fragment:xR,map_pars_fragment:vR,map_particle_fragment:_R,map_particle_pars_fragment:yR,metalnessmap_fragment:SR,metalnessmap_pars_fragment:bR,morphinstance_vertex:ER,morphcolor_vertex:MR,morphnormal_vertex:TR,morphtarget_pars_vertex:AR,morphtarget_vertex:NR,normal_fragment_begin:RR,normal_fragment_maps:CR,normal_pars_fragment:wR,normal_pars_vertex:DR,normal_vertex:LR,normalmap_pars_fragment:UR,clearcoat_normal_fragment_begin:OR,clearcoat_normal_fragment_maps:IR,clearcoat_pars_fragment:PR,iridescence_pars_fragment:zR,opaque_fragment:BR,packing:FR,premultiplied_alpha_fragment:HR,project_vertex:GR,dithering_fragment:VR,dithering_pars_fragment:kR,roughnessmap_fragment:jR,roughnessmap_pars_fragment:XR,shadowmap_pars_fragment:WR,shadowmap_pars_vertex:YR,shadowmap_vertex:qR,shadowmask_pars_fragment:ZR,skinbase_vertex:KR,skinning_pars_vertex:QR,skinning_vertex:JR,skinnormal_vertex:$R,specularmap_fragment:e3,specularmap_pars_fragment:t3,tonemapping_fragment:n3,tonemapping_pars_fragment:i3,transmission_fragment:a3,transmission_pars_fragment:s3,uv_pars_fragment:r3,uv_pars_vertex:o3,uv_vertex:l3,worldpos_vertex:c3,background_vert:u3,background_frag:d3,backgroundCube_vert:f3,backgroundCube_frag:h3,cube_vert:p3,cube_frag:m3,depth_vert:g3,depth_frag:x3,distance_vert:v3,distance_frag:_3,equirect_vert:y3,equirect_frag:S3,linedashed_vert:b3,linedashed_frag:E3,meshbasic_vert:M3,meshbasic_frag:T3,meshlambert_vert:A3,meshlambert_frag:N3,meshmatcap_vert:R3,meshmatcap_frag:C3,meshnormal_vert:w3,meshnormal_frag:D3,meshphong_vert:L3,meshphong_frag:U3,meshphysical_vert:O3,meshphysical_frag:I3,meshtoon_vert:P3,meshtoon_frag:z3,points_vert:B3,points_frag:F3,shadow_vert:H3,shadow_frag:G3,sprite_vert:V3,sprite_frag:k3},he={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Pi={basic:{uniforms:Tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Tn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Tn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new it(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Tn([he.points,he.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Tn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Tn([he.common,he.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Tn([he.sprite,he.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Tn([he.common,he.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Tn([he.lights,he.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Pi.physical={uniforms:Tn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Lc={r:0,b:0,g:0},j3=new Gt,lE=new je;lE.set(-1,0,0,0,1,0,0,0,1);function X3(t,e,n,i,a,s){const r=new it(0);let o=a===!0?0:1,c,u,h=null,m=0,d=null;function p(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const S=v.backgroundBlurriness>0;M=e.get(M,S)}return M}function g(v){let M=!1;const S=p(v);S===null?x(r,o):S&&S.isColor&&(x(S,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(v,M){const S=p(M);S&&(S.isCubeTexture||S.mapping===vd)?(u===void 0&&(u=new Sa(new Fl(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:so(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(j3.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(lE),u.material.toneMapped=st.getTransfer(S.colorSpace)!==_t,(h!==S||m!==S.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,m=S.version,d=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Sa(new _d(2,2),new Ki({name:"BackgroundMaterial",uniforms:so(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==_t,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||m!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,m=S.version,d=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function x(v,M){v.getRGB(Lc,aE(t)),n.buffers.color.setClear(Lc.r,Lc.g,Lc.b,M,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,M=1){r.set(v),o=M,x(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,x(r,o)},render:g,addToRenderList:b,dispose:f}}function W3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=d(null);let s=a,r=!1;function o(O,F,W,z,k){let I=!1;const P=m(O,z,W,F);s!==P&&(s=P,u(s.object)),I=p(O,z,W,k),I&&g(O,z,W,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(I||r)&&(r=!1,S(O,F,W,z),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return t.createVertexArray()}function u(O){return t.bindVertexArray(O)}function h(O){return t.deleteVertexArray(O)}function m(O,F,W,z){const k=z.wireframe===!0;let I=i[F.id];I===void 0&&(I={},i[F.id]=I);const P=O.isInstancedMesh===!0?O.id:0;let q=I[P];q===void 0&&(q={},I[P]=q);let V=q[W.id];V===void 0&&(V={},q[W.id]=V);let Z=V[k];return Z===void 0&&(Z=d(c()),V[k]=Z),Z}function d(O){const F=[],W=[],z=[];for(let k=0;k<n;k++)F[k]=0,W[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:z,object:O,attributes:{},index:null}}function p(O,F,W,z){const k=s.attributes,I=F.attributes;let P=0;const q=W.getAttributes();for(const V in q)if(q[V].location>=0){const ne=k[V];let Ae=I[V];if(Ae===void 0&&(V==="instanceMatrix"&&O.instanceMatrix&&(Ae=O.instanceMatrix),V==="instanceColor"&&O.instanceColor&&(Ae=O.instanceColor)),ne===void 0||ne.attribute!==Ae||Ae&&ne.data!==Ae.data)return!0;P++}return s.attributesNum!==P||s.index!==z}function g(O,F,W,z){const k={},I=F.attributes;let P=0;const q=W.getAttributes();for(const V in q)if(q[V].location>=0){let ne=I[V];ne===void 0&&(V==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),V==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor));const Ae={};Ae.attribute=ne,ne&&ne.data&&(Ae.data=ne.data),k[V]=Ae,P++}s.attributes=k,s.attributesNum=P,s.index=z}function b(){const O=s.newAttributes;for(let F=0,W=O.length;F<W;F++)O[F]=0}function x(O){f(O,0)}function f(O,F){const W=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;W[O]=1,z[O]===0&&(t.enableVertexAttribArray(O),z[O]=1),k[O]!==F&&(t.vertexAttribDivisor(O,F),k[O]=F)}function v(){const O=s.newAttributes,F=s.enabledAttributes;for(let W=0,z=F.length;W<z;W++)F[W]!==O[W]&&(t.disableVertexAttribArray(W),F[W]=0)}function M(O,F,W,z,k,I,P){P===!0?t.vertexAttribIPointer(O,F,W,k,I):t.vertexAttribPointer(O,F,W,z,k,I)}function S(O,F,W,z){b();const k=z.attributes,I=W.getAttributes(),P=F.defaultAttributeValues;for(const q in I){const V=I[q];if(V.location>=0){let Z=k[q];if(Z===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(Z=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(Z=O.instanceColor)),Z!==void 0){const ne=Z.normalized,Ae=Z.itemSize,be=e.get(Z);if(be===void 0)continue;const Ge=be.buffer,Xe=be.type,ot=be.bytesPerElement,K=Xe===t.INT||Xe===t.UNSIGNED_INT||Z.gpuType===e0;if(Z.isInterleavedBufferAttribute){const ie=Z.data,ve=ie.stride,Fe=Z.offset;if(ie.isInstancedInterleavedBuffer){for(let xe=0;xe<V.locationSize;xe++)f(V.location+xe,ie.meshPerAttribute);O.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let xe=0;xe<V.locationSize;xe++)x(V.location+xe);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let xe=0;xe<V.locationSize;xe++)M(V.location+xe,Ae/V.locationSize,Xe,ne,ve*ot,(Fe+Ae/V.locationSize*xe)*ot,K)}else{if(Z.isInstancedBufferAttribute){for(let ie=0;ie<V.locationSize;ie++)f(V.location+ie,Z.meshPerAttribute);O.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ie=0;ie<V.locationSize;ie++)x(V.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let ie=0;ie<V.locationSize;ie++)M(V.location+ie,Ae/V.locationSize,Xe,ne,Ae*ot,Ae/V.locationSize*ie*ot,K)}}else if(P!==void 0){const ne=P[q];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(V.location,ne);break;case 3:t.vertexAttrib3fv(V.location,ne);break;case 4:t.vertexAttrib4fv(V.location,ne);break;default:t.vertexAttrib1fv(V.location,ne)}}}}v()}function T(){R();for(const O in i){const F=i[O];for(const W in F){const z=F[W];for(const k in z){const I=z[k];for(const P in I)h(I[P].object),delete I[P];delete z[k]}}delete i[O]}}function A(O){if(i[O.id]===void 0)return;const F=i[O.id];for(const W in F){const z=F[W];for(const k in z){const I=z[k];for(const P in I)h(I[P].object),delete I[P];delete z[k]}}delete i[O.id]}function N(O){for(const F in i){const W=i[F];for(const z in W){const k=W[z];if(k[O.id]===void 0)continue;const I=k[O.id];for(const P in I)h(I[P].object),delete I[P];delete k[O.id]}}}function y(O){for(const F in i){const W=i[F],z=O.isInstancedMesh===!0?O.id:0,k=W[z];if(k!==void 0){for(const I in k){const P=k[I];for(const q in P)h(P[q].object),delete P[q];delete k[I]}delete W[z],Object.keys(W).length===0&&delete i[F]}}}function R(){w(),r=!0,s!==a&&(s=a,u(s.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:x,disableUnusedAttributes:v}}function Y3(t,e,n){let i;function a(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function r(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];n.update(d,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function q3(t,e,n,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(N){return!(N!==Ei&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const y=N===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==di&&N!==Vi&&!y&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(N){if(N==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(ze("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const m=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:m,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:S,maxSamples:T,samples:A}}function Z3(t){const e=this;let n=null,i=0,a=!1,s=!1;const r=new Fa,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){const p=m.length!==0||d||i!==0||a;return a=d,i=m.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,d){n=h(m,d,0)},this.setState=function(m,d,p){const g=m.clippingPlanes,b=m.clipIntersection,x=m.clipShadows,f=t.get(m);if(!a||g===null||g.length===0||s&&!x)s?h(null):u();else{const v=s?0:i,M=v*4;let S=f.clippingState||null;c.value=S,S=h(g,d,M,p);for(let T=0;T!==M;++T)S[T]=n[T];f.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,d,p,g){const b=m!==null?m.length:0;let x=null;if(b!==0){if(x=c.value,g!==!0||x===null){const f=p+b*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(x===null||x.length<f)&&(x=new Float32Array(f));for(let M=0,S=p;M!==b;++M,S+=4)r.copy(m[M]).applyMatrix4(v,o),r.normal.toArray(x,S),x[S+3]=r.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}const Lr=4,K3=6,Q3=20,J3=256,Do=new rE,Kx=new it;let If=null,Pf=0,zf=0,Bf=!1;const $3=new j,ys=new j;class Qx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=$3}=s;If=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,a,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$x(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(If,Pf,zf),this._renderer.xr.enabled=Bf,e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),If=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Zi,format:Ei,colorSpace:Hu,depthBuffer:!1},a=Jx(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jx(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=eC(s)),this._blurMaterial=nC(s,e,n),this._ggxMaterial=tC(s,e,n)}return a}_compileMaterial(e){const n=new Sa(new Jn,e);this._renderer.compile(n,Do)}_sceneToCubeUV(e,n,i,a,s){const c=new oi(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,p=m.toneMapping;m.getClearColor(Kx),m.toneMapping=Wi,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(a),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sa(new Fl,new Jb({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let f=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,f=!0):(x.color.copy(Kx),f=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(c.up.set(0,u[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[M],s.y,s.z)):S===1?(c.up.set(0,0,u[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[M],s.z)):(c.up.set(0,u[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[M]));const T=this._cubeSize;pr(a,S*T,M>2?T:0,T,T),m.setRenderTarget(a),f&&m.render(b,c),m.render(e,c)}m.toneMapping=p,m.autoClear=d,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===ks||e.mapping===ao;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$x());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;pr(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(r,Do)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const c=r.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),m=Math.sqrt(u*u-h*h),d=u*1.25,p=m*d,{_lodMax:g}=this,b=this._sizeLods[i],x=3*b*(i>g-Lr?i-g+Lr:0),f=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-n,pr(s,x,f,3*b,2*b),a.setRenderTarget(s),a.render(o,Do),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,pr(e,x,f,3*b,2*b),a.setRenderTarget(e),a.render(o,Do)}_blur(e,n,i,a){const s=this._pingPongRenderTarget,r=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,r),this._blurPass(s,e,i,i,r)}_blurPass(e,n,i,a,s){const r=this._renderer,o=this._blurMaterial,c=this._lodMeshes[a];c.material=o;const u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-i;const h=this._sizeLods[a],m=3*h*(a>this._lodMax-Lr?a-this._lodMax+Lr:0),d=4*(this._cubeSize-h);pr(n,m,d,3*h,2*h),r.setRenderTarget(n),r.render(c,Do)}}function eC(t){const e=[],n=[];let i=t;const a=t-Lr+1+K3;for(let s=0;s<a;s++){const r=Math.pow(2,i);e.push(r);const o=1/(r-2),c=-o,u=1+o,h=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,d=6,p=3,g=new Float32Array(p*d*m),b=new Float32Array(p*d*m);for(let f=0;f<m;f++){const v=f%3*2/3-1,M=f>2?0:-1,S=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];g.set(S,p*d*f);for(let T=0;T<d;T++){const A=h[T*2]*2-1,N=h[T*2+1]*2-1;f===0?ys.set(1,N,A):f===1?ys.set(-A,1,-N):f===2?ys.set(-A,N,1):f===3?ys.set(-1,N,-A):f===4?ys.set(-A,-1,N):ys.set(A,N,-1),ys.toArray(b,(f*d+T)*p)}}const x=new Jn;x.setAttribute("position",new In(g,p)),x.setAttribute("outputDirection",new In(b,p)),n.push(new Sa(x,null)),i>Lr&&i--}return{lodMeshes:n,sizeLods:e}}function Jx(t,e,n){const i=new Ti(t,e,n);return i.texture.mapping=vd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pr(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function tC(t,e,n){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:J3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yd(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function nC(t,e,n){return new Ki({name:"SphericalGaussianBlur",defines:{SAMPLES:Q3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yd(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function $x(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yd(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function ev(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function yd(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class cE extends Ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new nE(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Fl(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zn,blending:fa});s.uniforms.tEquirect.value=n;const r=new Sa(a,s),o=n.minFilter;return n.minFilter===As&&(n.minFilter=vn),new s2(1,10,this).update(e,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,i,a);e.setRenderTarget(s)}}function iC(t){let e=new WeakMap,n=new WeakMap,i=null;function a(d,p=!1){return d==null?null:p?r(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===lf||p===cf)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const b=new cE(g.height);return b.fromEquirectangularTexture(t,d),e.set(d,b),d.addEventListener("dispose",u),o(b.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const p=d.mapping,g=p===lf||p===cf,b=p===ks||p===ao;if(g||b){let x=n.get(d);const f=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new Qx(t)),x=g?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),x.texture;if(x!==void 0)return x.texture;{const v=d.image;return g&&v&&v.height>0||b&&v&&c(v)?(i===null&&(i=new Qx(t)),x=g?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}function o(d,p){return p===lf?d.mapping=ks:p===cf&&(d.mapping=ao),d}function c(d){let p=0;const g=6;for(let b=0;b<g;b++)d[b]!==void 0&&p++;return p===g}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(d){const p=d.target;p.removeEventListener("dispose",h);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function m(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:m}}function aC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&kr("WebGLRenderer: "+i+" extension not supported."),a}}}function sC(t,e,n,i){const a={},s=new WeakMap;function r(m){const d=m.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete a[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(m,d){return a[d.id]===!0||(d.addEventListener("dispose",r),a[d.id]=!0,n.memory.geometries++),d}function c(m){const d=m.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function u(m){const d=[],p=m.index,g=m.attributes.position;let b=0;if(g===void 0)return;if(p!==null){const v=p.array;b=p.version;for(let M=0,S=v.length;M<S;M+=3){const T=v[M+0],A=v[M+1],N=v[M+2];d.push(T,A,A,N,N,T)}}else{const v=g.array;b=g.version;for(let M=0,S=v.length/3-1;M<S;M+=3){const T=M+0,A=M+1,N=M+2;d.push(T,A,A,N,N,T)}}const x=new(g.count>=65535?Qb:Kb)(d,1);x.version=b;const f=s.get(m);f&&e.remove(f),s.set(m,x)}function h(m){const d=s.get(m);if(d){const p=m.index;p!==null&&d.version<p.version&&u(m)}else u(m);return s.get(m)}return{get:o,update:c,getWireframeAttribute:h}}function rC(t,e,n){let i;function a(m){i=m}let s,r;function o(m){s=m.type,r=m.bytesPerElement}function c(m,d){t.drawElements(i,d,s,m*r),n.update(d,i,1)}function u(m,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,m*r,p),n.update(d,i,p))}function h(m,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,m,0,p);let b=0;for(let x=0;x<p;x++)b+=d[x];n.update(b,i,1)}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function oC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ut("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function lC(t,e,n){const i=new WeakMap,a=new Ht;function s(r,o,c){const u=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==m){let w=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var p=w;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),b===!0&&(S=2),x===!0&&(S=3);let T=o.attributes.position.count*S,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const N=new Float32Array(T*A*4*m),y=new Yb(N,T,A,m);y.type=Vi,y.needsUpdate=!0;const R=S*4;for(let O=0;O<m;O++){const F=f[O],W=v[O],z=M[O],k=T*A*4*O;for(let I=0;I<F.count;I++){const P=I*R;g===!0&&(a.fromBufferAttribute(F,I),N[k+P+0]=a.x,N[k+P+1]=a.y,N[k+P+2]=a.z,N[k+P+3]=0),b===!0&&(a.fromBufferAttribute(W,I),N[k+P+4]=a.x,N[k+P+5]=a.y,N[k+P+6]=a.z,N[k+P+7]=0),x===!0&&(a.fromBufferAttribute(z,I),N[k+P+8]=a.x,N[k+P+9]=a.y,N[k+P+10]=a.z,N[k+P+11]=z.itemSize===4?a.w:1)}}d={count:m,texture:y,size:new pt(T,A)},i.set(o,d),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];const b=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",b),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function cC(t,e,n,i,a){let s=new WeakMap;function r(u){const h=a.render.frame,m=u.geometry,d=e.get(u,m);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return d}function o(){s=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}const uC={[Db]:"LINEAR_TONE_MAPPING",[Lb]:"REINHARD_TONE_MAPPING",[Ub]:"CINEON_TONE_MAPPING",[Ob]:"ACES_FILMIC_TONE_MAPPING",[Pb]:"AGX_TONE_MAPPING",[zb]:"NEUTRAL_TONE_MAPPING",[Ib]:"CUSTOM_TONE_MAPPING"};function dC(t,e,n,i,a,s){const r=new Ti(e,n,{type:t,depthBuffer:a,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const u=new Jn;u.setAttribute("position",new Ai([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ai([0,2,0,0,2,0],2));const h=new n2({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Sa(u,h),d=new rE(-1,1,1,-1,0,1);let p=null,g=null,b=!1,x,f=null,v=[],M=!1;this.setSize=function(S,T){r.setSize(S,T),o!==null&&o.setSize(S,T),c!==null&&c.setSize(S,T);for(let A=0;A<v.length;A++){const N=v[A];N.setSize&&N.setSize(S,T)}},this.setEffects=function(S){v=S,M=v.length>0&&v[0].isRenderPass===!0;const T=r.width,A=r.height;v.length>0&&o===null&&(o=new Ti(T,A,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),c=new Ti(T,A,{type:Zi,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<v.length;N++){const y=v[N];y.setSize&&y.setSize(T,A)}},this.begin=function(S,T){if(b||S.toneMapping===Wi&&v.length===0)return!1;if(f=T,T!==null){const A=T.width,N=T.height;(r.width!==A||r.height!==N)&&this.setSize(A,N)}return M===!1&&S.setRenderTarget(r),x=S.toneMapping,S.toneMapping=Wi,!0},this.hasRenderPass=function(){return M},this.end=function(S,T){S.toneMapping=x,b=!0;let A=r,N=o;for(let y=0;y<v.length;y++){const R=v[y];R.enabled!==!1&&(R.render(S,N,A,T),R.needsSwap!==!1&&(A=N,N=N===o?c:o))}if(p!==S.outputColorSpace||g!==S.toneMapping){p=S.outputColorSpace,g=S.toneMapping,h.defines={},st.getTransfer(p)===_t&&(h.defines.SRGB_TRANSFER="");const y=uC[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(f),S.render(m,d),f=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}const uE=new yn,kp=new El(1,1),dE=new Yb,fE=new CN,hE=new nE,tv=[],nv=[],iv=new Float32Array(16),av=new Float32Array(9),sv=new Float32Array(4);function vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let s=tv[a];if(s===void 0&&(s=new Float32Array(a),tv[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=n,t[r].toArray(s,o)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function en(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Sd(t,e){let n=nv[e];n===void 0&&(n=new Int32Array(e),nv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function fC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function hC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),en(n,e)}}function pC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),en(n,e)}}function mC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),en(n,e)}}function gC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if($t(n,i))return;sv.set(i),t.uniformMatrix2fv(this.addr,!1,sv),en(n,i)}}function xC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if($t(n,i))return;av.set(i),t.uniformMatrix3fv(this.addr,!1,av),en(n,i)}}function vC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if($t(n,i))return;iv.set(i),t.uniformMatrix4fv(this.addr,!1,iv),en(n,i)}}function _C(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function yC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),en(n,e)}}function SC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),en(n,e)}}function bC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),en(n,e)}}function EC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function MC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),en(n,e)}}function TC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),en(n,e)}}function AC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),en(n,e)}}function NC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let s;this.type===t.SAMPLER_2D_SHADOW?(kp.compareFunction=n.isReversedDepthBuffer()?o0:r0,s=kp):s=uE,n.setTexture2D(e||s,a)}function RC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||fE,a)}function CC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||hE,a)}function wC(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||dE,a)}function DC(t){switch(t){case 5126:return fC;case 35664:return hC;case 35665:return pC;case 35666:return mC;case 35674:return gC;case 35675:return xC;case 35676:return vC;case 5124:case 35670:return _C;case 35667:case 35671:return yC;case 35668:case 35672:return SC;case 35669:case 35673:return bC;case 5125:return EC;case 36294:return MC;case 36295:return TC;case 36296:return AC;case 35678:case 36198:case 36298:case 36306:case 35682:return NC;case 35679:case 36299:case 36307:return RC;case 35680:case 36300:case 36308:case 36293:return CC;case 36289:case 36303:case 36311:case 36292:return wC}}function LC(t,e){t.uniform1fv(this.addr,e)}function UC(t,e){const n=vo(e,this.size,2);t.uniform2fv(this.addr,n)}function OC(t,e){const n=vo(e,this.size,3);t.uniform3fv(this.addr,n)}function IC(t,e){const n=vo(e,this.size,4);t.uniform4fv(this.addr,n)}function PC(t,e){const n=vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function zC(t,e){const n=vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function BC(t,e){const n=vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function FC(t,e){t.uniform1iv(this.addr,e)}function HC(t,e){t.uniform2iv(this.addr,e)}function GC(t,e){t.uniform3iv(this.addr,e)}function VC(t,e){t.uniform4iv(this.addr,e)}function kC(t,e){t.uniform1uiv(this.addr,e)}function jC(t,e){t.uniform2uiv(this.addr,e)}function XC(t,e){t.uniform3uiv(this.addr,e)}function WC(t,e){t.uniform4uiv(this.addr,e)}function YC(t,e,n){const i=this.cache,a=e.length,s=Sd(n,a);$t(i,s)||(t.uniform1iv(this.addr,s),en(i,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=kp:r=uE;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||r,s[o])}function qC(t,e,n){const i=this.cache,a=e.length,s=Sd(n,a);$t(i,s)||(t.uniform1iv(this.addr,s),en(i,s));for(let r=0;r!==a;++r)n.setTexture3D(e[r]||fE,s[r])}function ZC(t,e,n){const i=this.cache,a=e.length,s=Sd(n,a);$t(i,s)||(t.uniform1iv(this.addr,s),en(i,s));for(let r=0;r!==a;++r)n.setTextureCube(e[r]||hE,s[r])}function KC(t,e,n){const i=this.cache,a=e.length,s=Sd(n,a);$t(i,s)||(t.uniform1iv(this.addr,s),en(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(e[r]||dE,s[r])}function QC(t){switch(t){case 5126:return LC;case 35664:return UC;case 35665:return OC;case 35666:return IC;case 35674:return PC;case 35675:return zC;case 35676:return BC;case 5124:case 35670:return FC;case 35667:case 35671:return HC;case 35668:case 35672:return GC;case 35669:case 35673:return VC;case 5125:return kC;case 36294:return jC;case 36295:return XC;case 36296:return WC;case 35678:case 36198:case 36298:case 36306:case 35682:return YC;case 35679:case 36299:case 36307:return qC;case 35680:case 36300:case 36308:case 36293:return ZC;case 36289:case 36303:case 36311:case 36292:return KC}}class JC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=DC(n.type)}}class $C{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=QC(n.type)}}class ew{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,n[o.id],i)}}}const Ff=/(\w+)(\])?(\[|\.)?/g;function rv(t,e){t.seq.push(e),t.map[e.id]=e}function tw(t,e,n){const i=t.name,a=i.length;for(Ff.lastIndex=0;;){const s=Ff.exec(i),r=Ff.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&r+2===a){rv(n,u===void 0?new JC(o,t,e):new $C(o,t,e));break}else{let m=n.map[o];m===void 0&&(m=new ew(o),rv(n,m)),n=m}}}class ru{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),c=e.getUniformLocation(n,o.name);tw(o,c,this)}const a=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in n&&i.push(r)}return i}}function ov(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const nw=37297;let iw=0;function aw(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const lv=new je;function sw(t){st._getMatrix(lv,st.workingColorSpace,t);const e=`mat3( ${lv.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case Gu:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function cv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+aw(t.getShaderSource(e),o)}else return s}function rw(t,e){const n=sw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const ow={[Db]:"Linear",[Lb]:"Reinhard",[Ub]:"Cineon",[Ob]:"ACESFilmic",[Pb]:"AgX",[zb]:"Neutral",[Ib]:"Custom"};function lw(t,e){const n=ow[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Uc=new j;function cw(){st.getLuminanceCoefficients(Uc);const t=Uc.x.toFixed(4),e=Uc.y.toFixed(4),n=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function dw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=t.getActiveAttrib(e,a),r=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return n}function Ho(t){return t!==""}function uv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function jp(t){return t.replace(hw,mw)}const pw=new Map;function mw(t,e){let n=Ke[e];if(n===void 0){const i=pw.get(e);if(i!==void 0)n=Ke[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jp(n)}const gw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fv(t){return t.replace(gw,xw)}function xw(t,e,n,i){let a="";for(let s=parseInt(e);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function hv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const vw={[tu]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function _w(t){return vw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yw={[ks]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE",[vd]:"ENVMAP_TYPE_CUBE_UV"};function Sw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":yw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const bw={[ao]:"ENVMAP_MODE_REFRACTION"};function Ew(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":bw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mw={[wb]:"ENVMAP_BLENDING_MULTIPLY",[rN]:"ENVMAP_BLENDING_MIX",[oN]:"ENVMAP_BLENDING_ADD"};function Tw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Mw[t.combine]||"ENVMAP_BLENDING_NONE"}function Aw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Nw(t,e,n,i){const a=t.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const c=_w(n),u=Sw(n),h=Ew(n),m=Tw(n),d=Aw(n),p=uw(n),g=dw(s),b=a.createProgram();let x,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ho).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ho).join(`
`),f.length>0&&(f+=`
`)):(x=[hv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),f=[hv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Ke.tonemapping_pars_fragment:"",n.toneMapping!==Wi?lw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,rw("linearToOutputTexel",n.outputColorSpace),cw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),r=jp(r),r=uv(r,n),r=dv(r,n),o=jp(o),o=uv(o,n),o=dv(o,n),r=fv(r),o=fv(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",n.glslVersion===bx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=v+x+r,S=v+f+o,T=ov(a,a.VERTEX_SHADER,M),A=ov(a,a.FRAGMENT_SHADER,S);a.attachShader(b,T),a.attachShader(b,A),n.index0AttributeName!==void 0?a.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function N(O){if(t.debug.checkShaderErrors){const F=a.getProgramInfoLog(b)||"",W=a.getShaderInfoLog(T)||"",z=a.getShaderInfoLog(A)||"",k=F.trim(),I=W.trim(),P=z.trim();let q=!0,V=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,b,T,A);else{const Z=cv(a,T,"vertex"),ne=cv(a,A,"fragment");ut("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+k+`
`+Z+`
`+ne)}else k!==""?ze("WebGLProgram: Program Info Log:",k):(I===""||P==="")&&(V=!1);V&&(O.diagnostics={runnable:q,programLog:k,vertexShader:{log:I,prefix:x},fragmentShader:{log:P,prefix:f}})}a.deleteShader(T),a.deleteShader(A),y=new ru(a,b),R=fw(a,b)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let R;this.getAttributes=function(){return R===void 0&&N(this),R};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(b,nw)),w},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=A,this}let Rw=0;class Cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ww(e),n.set(e,i)),i}}class ww{constructor(e){this.id=Rw++,this.code=e,this.usedTimes=0}}function Dw(t){return t===js||t===Bu||t===Fu}function Lw(t,e,n,i,a,s){const r=new qb,o=new Cw,c=new Set,u=[],h=new Map,m=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function b(y,R,w,O,F,W){const z=O.fog,k=F.geometry,I=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,P=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=e.get(y.envMap||I,P),V=q&&q.mapping===vd?q.image.height:null,Z=p[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&ze("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ae=ne!==void 0?ne.length:0;let be=0;k.morphAttributes.position!==void 0&&(be=1),k.morphAttributes.normal!==void 0&&(be=2),k.morphAttributes.color!==void 0&&(be=3);let Ge,Xe,ot,K;if(Z){const Rt=Pi[Z];Ge=Rt.vertexShader,Xe=Rt.fragmentShader}else{Ge=y.vertexShader,Xe=y.fragmentShader;const Rt=o.getVertexShaderStage(y),mt=o.getFragmentShaderStage(y);o.update(y,Rt,mt),ot=Rt.id,K=mt.id}const ie=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),Fe=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,re=!!y.map,Ie=!!y.matcap,_e=!!q,He=!!y.aoMap,Ue=!!y.lightMap,Pe=!!y.bumpMap&&y.wireframe===!1,Ve=!!y.normalMap,Ot=!!y.displacementMap,Qe=!!y.emissiveMap,$e=!!y.metalnessMap,vt=!!y.roughnessMap,L=y.anisotropy>0,Zt=y.clearcoat>0,ct=y.dispersion>0,C=y.retroreflectivity>0,_=y.iridescence>0,B=y.sheen>0,X=y.transmission>0,Q=L&&!!y.anisotropyMap,se=Zt&&!!y.clearcoatMap,oe=Zt&&!!y.clearcoatNormalMap,J=Zt&&!!y.clearcoatRoughnessMap,te=_&&!!y.iridescenceMap,le=_&&!!y.iridescenceThicknessMap,we=B&&!!y.sheenColorMap,fe=B&&!!y.sheenRoughnessMap,ce=!!y.specularMap,De=!!y.specularColorMap,Oe=!!y.specularIntensityMap,We=X&&!!y.transmissionMap,U=X&&!!y.thicknessMap,ue=!!y.gradientMap,$=!!y.alphaMap,de=y.alphaTest>0,ge=!!y.alphaHash,ae=!!y.extensions;let Le=Wi;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Le=t.toneMapping);const Ne={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:Ge,fragmentShader:Xe,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&F.instanceColor!==null,instancingMorph:Fe&&F.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:re,matcap:Ie,envMap:_e,envMapMode:_e&&q.mapping,envMapCubeUVHeight:V,aoMap:He,lightMap:Ue,bumpMap:Pe,normalMap:Ve,displacementMap:Ot,emissiveMap:Qe,normalMapObjectSpace:Ve&&y.normalMapType===uN,normalMapTangentSpace:Ve&&y.normalMapType===Sx,packedNormalMap:Ve&&y.normalMapType===Sx&&Dw(y.normalMap.format),metalnessMap:$e,roughnessMap:vt,anisotropy:L,anisotropyMap:Q,clearcoat:Zt,clearcoatMap:se,clearcoatNormalMap:oe,clearcoatRoughnessMap:J,dispersion:ct,retroreflection:C,iridescence:_,iridescenceMap:te,iridescenceThicknessMap:le,sheen:B,sheenColorMap:we,sheenRoughnessMap:fe,specularMap:ce,specularColorMap:De,specularIntensityMap:Oe,transmission:X,transmissionMap:We,thicknessMap:U,gradientMap:ue,opaque:y.transparent===!1&&y.blending===nl&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:de,alphaHash:ge,combine:y.combine,mapUv:re&&g(y.map.channel),aoMapUv:He&&g(y.aoMap.channel),lightMapUv:Ue&&g(y.lightMap.channel),bumpMapUv:Pe&&g(y.bumpMap.channel),normalMapUv:Ve&&g(y.normalMap.channel),displacementMapUv:Ot&&g(y.displacementMap.channel),emissiveMapUv:Qe&&g(y.emissiveMap.channel),metalnessMapUv:$e&&g(y.metalnessMap.channel),roughnessMapUv:vt&&g(y.roughnessMap.channel),anisotropyMapUv:Q&&g(y.anisotropyMap.channel),clearcoatMapUv:se&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(y.sheenRoughnessMap.channel),specularMapUv:ce&&g(y.specularMap.channel),specularColorMapUv:De&&g(y.specularColorMap.channel),specularIntensityMapUv:Oe&&g(y.specularIntensityMap.channel),transmissionMapUv:We&&g(y.transmissionMap.channel),thicknessMapUv:U&&g(y.thicknessMap.channel),alphaMapUv:$&&g(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ve||L),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(re||$),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&Ve===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:be,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&w.length>0,shadowMapType:t.shadowMap.type,toneMapping:Le,decodeVideoTexture:re&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===_t,decodeVideoTextureEmissive:Qe&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===_t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===oa,flipSided:y.side===zn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ae&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&y.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function x(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)R.push(w),R.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(f(R,y),v(R,y),R.push(t.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function f(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function v(y,R){r.disableAll(),R.instancing&&r.enable(0),R.instancingColor&&r.enable(1),R.instancingMorph&&r.enable(2),R.matcap&&r.enable(3),R.envMap&&r.enable(4),R.normalMapObjectSpace&&r.enable(5),R.normalMapTangentSpace&&r.enable(6),R.clearcoat&&r.enable(7),R.iridescence&&r.enable(8),R.alphaTest&&r.enable(9),R.vertexColors&&r.enable(10),R.vertexAlphas&&r.enable(11),R.vertexUv1s&&r.enable(12),R.vertexUv2s&&r.enable(13),R.vertexUv3s&&r.enable(14),R.vertexTangents&&r.enable(15),R.anisotropy&&r.enable(16),R.alphaHash&&r.enable(17),R.batching&&r.enable(18),R.dispersion&&r.enable(19),R.retroreflection&&r.enable(24),R.batchingColor&&r.enable(20),R.gradientMap&&r.enable(21),R.packedNormalMap&&r.enable(22),R.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),R.fog&&r.enable(0),R.useFog&&r.enable(1),R.flatShading&&r.enable(2),R.logarithmicDepthBuffer&&r.enable(3),R.reversedDepthBuffer&&r.enable(4),R.skinning&&r.enable(5),R.morphTargets&&r.enable(6),R.morphNormals&&r.enable(7),R.morphColors&&r.enable(8),R.premultipliedAlpha&&r.enable(9),R.shadowMapEnabled&&r.enable(10),R.doubleSided&&r.enable(11),R.flipSided&&r.enable(12),R.useDepthPacking&&r.enable(13),R.dithering&&r.enable(14),R.transmission&&r.enable(15),R.sheen&&r.enable(16),R.opaque&&r.enable(17),R.pointsUvs&&r.enable(18),R.decodeVideoTexture&&r.enable(19),R.decodeVideoTextureEmissive&&r.enable(20),R.alphaToCoverage&&r.enable(21),R.numLightProbeGrids>0&&r.enable(22),R.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function M(y){const R=p[y.type];let w;if(R){const O=Pi[R];w=$N.clone(O.uniforms)}else w=y.uniforms;return w}function S(y,R){let w=h.get(R);return w!==void 0?++w.usedTimes:(w=new Nw(t,R,y,a),u.push(w),h.set(R,w)),w}function T(y){if(--y.usedTimes===0){const R=u.indexOf(y);u[R]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function N(){o.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:N}}function Uw(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function i(r){t.delete(r)}function a(r,o,c){t.get(r)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:s}}function Ow(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function pv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mv(){const t=[];let e=0;const n=[],i=[],a=[];function s(){e=0,n.length=0,i.length=0,a.length=0}function r(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,b,x,f){let v=t[e];return v===void 0?(v={id:d.id,object:d,geometry:p,material:g,materialVariant:r(d),groupOrder:b,renderOrder:d.renderOrder,z:x,group:f},t[e]=v):(v.id=d.id,v.object=d,v.geometry=p,v.material=g,v.materialVariant=r(d),v.groupOrder=b,v.renderOrder=d.renderOrder,v.z=x,v.group=f),e++,v}function c(d,p,g,b,x,f,v){v.reversedDepth===!0&&(x=-x);const M=o(d,p,g,b,x,f);g.transmission>0?i.push(M):g.transparent===!0?a.push(M):n.push(M)}function u(d,p,g,b,x,f){const v=o(d,p,g,b,x,f);g.transmission>0?i.unshift(v):g.transparent===!0?a.unshift(v):n.unshift(v)}function h(d,p){n.length>1&&n.sort(d||Ow),i.length>1&&i.sort(p||pv),a.length>1&&a.sort(p||pv)}function m(){for(let d=e,p=t.length;d<p;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:c,unshift:u,finish:m,sort:h}}function Iw(){let t=new WeakMap;function e(i,a){const s=t.get(i);let r;return s===void 0?(r=new mv,t.set(i,[r])):a>=s.length?(r=new mv,s.push(r)):r=s[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function Pw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new j,color:new it};break;case"SpotLight":n={position:new j,direction:new j,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function zw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Bw=0;function Fw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Hw(t){const e=new Pw,n=zw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new j);const a=new j,s=new Gt,r=new Gt;function o(u){let h=0,m=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,g=0,b=0,x=0,f=0,v=0,M=0,S=0,T=0,A=0,N=0,y=0,R=0,w=0;u.sort(Fw);for(let F=0,W=u.length;F<W;F++){const z=u[F],k=z.color,I=z.intensity,P=z.distance;let q=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===js?q=z.shadow.map.texture:q=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)h+=k.r*I,m+=k.g*I,d+=k.b*I;else if(z.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(z.sh.coefficients[V],I);w++}else if(z.isSunLight){const V=e.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Z=z.shadow,ne=n.get(z);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[g]=ne,i.sunShadowMap[g]=q;const Ae=Z.getViewportCount();for(let be=0;be<Ae;be++)i.sunShadowMatrix[b+be]=Z.getMatrix(be),i.sunShadowCascade[b+be]=Z._cascadeData[be];b+=Ae,g++}i.sun[p]=V,p++}else if(z.isDirectionalLight){const V=e.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Z=z.shadow,ne=n.get(z);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,i.directionalShadow[x]=ne,i.directionalShadowMap[x]=q,i.directionalShadowMatrix[x]=z.shadow.matrix,T++}i.directional[x]=V,x++}else if(z.isSpotLight){const V=e.get(z);V.position.setFromMatrixPosition(z.matrixWorld),V.color.copy(k).multiplyScalar(I),V.distance=P,V.coneCos=Math.cos(z.angle),V.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),V.decay=z.decay,i.spot[v]=V;const Z=z.shadow;if(z.map&&(i.spotLightMap[y]=z.map,y++,Z.updateMatrices(z),z.castShadow&&R++),i.spotLightMatrix[v]=Z.matrix,z.castShadow){const ne=n.get(z);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,i.spotShadow[v]=ne,i.spotShadowMap[v]=q,N++}v++}else if(z.isRectAreaLight){const V=e.get(z);V.color.copy(k).multiplyScalar(I),V.halfWidth.set(z.width*.5,0,0),V.halfHeight.set(0,z.height*.5,0),i.rectArea[M]=V,M++}else if(z.isPointLight){const V=e.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity),V.distance=z.distance,V.decay=z.decay,z.castShadow){const Z=z.shadow,ne=n.get(z);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,ne.shadowCameraNear=Z.camera.near,ne.shadowCameraFar=Z.camera.far,i.pointShadow[f]=ne,i.pointShadowMap[f]=q,i.pointShadowMatrix[f]=z.shadow.matrix,A++}i.point[f]=V,f++}else if(z.isHemisphereLight){const V=e.get(z);V.skyColor.copy(z.color).multiplyScalar(I),V.groundColor.copy(z.groundColor).multiplyScalar(I),i.hemi[S]=V,S++}}M>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=d;const O=i.hash;(O.sunLength!==p||O.directionalLength!==x||O.pointLength!==f||O.spotLength!==v||O.rectAreaLength!==M||O.hemiLength!==S||O.numSunShadows!==g||O.numDirectionalShadows!==T||O.numPointShadows!==A||O.numSpotShadows!==N||O.numSpotMaps!==y||O.numLightProbes!==w)&&(i.sun.length=p,i.directional.length=x,i.spot.length=v,i.rectArea.length=M,i.point.length=f,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+y-R,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,O.sunLength=p,O.directionalLength=x,O.pointLength=f,O.spotLength=v,O.rectAreaLength=M,O.hemiLength=S,O.numSunShadows=g,O.numDirectionalShadows=T,O.numPointShadows=A,O.numSpotShadows=N,O.numSpotMaps=y,O.numLightProbes=w,i.version=Bw++)}function c(u,h){let m=0,d=0,p=0,g=0,b=0,x=0;const f=h.matrixWorldInverse;for(let v=0,M=u.length;v<M;v++){const S=u[v];if(S.isSunLight){const T=i.sun[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(f),m++}else if(S.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),d++}else if(S.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const T=i.rectArea[b];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),r.identity(),s.copy(S.matrixWorld),s.premultiply(f),r.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),b++}else if(S.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const T=i.hemi[x];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(f),x++}}}return{setup:o,setupView:c,state:i}}function gv(t){const e=new Hw(t),n=[],i=[],a=[];function s(d){m.camera=d,n.length=0,i.length=0,a.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function c(d){a.push(d)}function u(){e.setup(n)}function h(d){e.setupView(n,d)}const m={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:m,setupLights:u,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function Gw(t){let e=new WeakMap;function n(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new gv(t),e.set(a,[o])):s>=r.length?(o=new gv(t),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Vw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kw=`uniform sampler2D shadow_pass;
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
}`,jw=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],Xw=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],xv=new Gt,Lo=new j,Hf=new j;function Ww(t,e,n){let i=new $b;const a=new pt,s=new pt,r=new Ht,o=new i2,c=new a2,u={},h=n.maxTextureSize,m={[Vs]:zn,[zn]:Vs,[oa]:oa},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Vw,fragmentShader:kw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Jn;g.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Sa(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let f=this.type;this.render=function(A,N,y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;this.type===GA&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tu);const R=t.getRenderTarget(),w=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),F=t.state;F.setBlending(fa),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=f!==this.type;W&&N.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(k=>k.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,k=A.length;z<k;z++){const I=A[z],P=I.shadow;if(P===void 0){ze("WebGLShadowMap:",I,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const q=P.getFrameExtents();a.multiply(q),s.copy(P.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/q.x),a.x=s.x*q.x,P.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/q.y),a.y=s.y*q.y,P.mapSize.y=s.y));const V=t.state.buffers.depth.getReversed();if(P.camera._reversedDepth=V,P.map===null||W===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Fo){if(I.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Ti(a.x,a.y,{format:js,type:Zi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),P.map.texture.name=I.name+".shadowMap",P.map.depthTexture=new El(a.x,a.y,Vi),P.map.depthTexture.name=I.name+".shadowMapDepth",P.map.depthTexture.format=ya,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=un,P.map.depthTexture.magFilter=un}else I.isPointLight?(P.map=new cE(a.x),P.map.depthTexture=new QN(a.x,qi)):(P.map=new Ti(a.x,a.y),P.map.depthTexture=new El(a.x,a.y,qi)),P.map.depthTexture.name=I.name+".shadowMap",P.map.depthTexture.format=ya,this.type===tu?(P.map.depthTexture.compareFunction=V?o0:r0,P.map.depthTexture.minFilter=vn,P.map.depthTexture.magFilter=vn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=un,P.map.depthTexture.magFilter=un);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==a.x||P.map.height!==a.y)&&P.map.setSize(a.x,a.y);const Z=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();I.isPointLight!==!0&&P.updateMatrices(I,y);for(let ne=0;ne<Z;ne++){const Ae=P.getCamera(ne);if(I.isPointLight){const be=P.camera,Ge=P.matrix,Xe=I.distance||be.far;Xe!==be.far&&(be.far=Xe,be.updateProjectionMatrix()),Lo.setFromMatrixPosition(I.matrixWorld),be.position.copy(Lo),Hf.copy(be.position),Hf.add(jw[ne]),be.up.copy(Xw[ne]),be.lookAt(Hf),be.updateMatrixWorld(),Ge.makeTranslation(-Lo.x,-Lo.y,-Lo.z),xv.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),P._frustum.setFromProjectionMatrix(xv,be.coordinateSystem,be.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)t.setRenderTarget(P.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(P.map),t.clear());const be=P.getViewport(ne);r.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),F.viewport(r)}i=P.getFrustum(ne),S(N,y,Ae,I,this.type)}P.isPointLightShadow!==!0&&this.type===Fo&&v(P,y),P.needsUpdate=!1}f=this.type,x.needsUpdate=!1,t.setRenderTarget(R,w,O)};function v(A,N){const y=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new Ti(a.x,a.y,{format:js,type:Zi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(N,null,y,d,b,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(N,null,y,p,b,null)}function M(A,N,y,R){let w=null;const O=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)w=O;else if(w=y.isPointLight===!0?c:o,t.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const F=w.uuid,W=N.uuid;let z=u[F];z===void 0&&(z={},u[F]=z);let k=z[W];k===void 0&&(k=w.clone(),z[W]=k,N.addEventListener("dispose",T)),w=k}if(w.visible=N.visible,w.wireframe=N.wireframe,R===Fo?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:m[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=t.properties.get(w);F.light=y}return w}function S(A,N,y,R,w){if(A.visible===!1)return;if(A.layers.test(N.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Fo)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const W=e.update(A),z=A.material;if(Array.isArray(z)){const k=W.groups;for(let I=0,P=k.length;I<P;I++){const q=k[I],V=z[q.materialIndex];if(V&&V.visible){const Z=M(A,V,R,w);A.onBeforeShadow(t,A,N,y,W,Z,q),t.renderBufferDirect(y,null,W,Z,A,q),A.onAfterShadow(t,A,N,y,W,Z,q)}}}else if(z.visible){const k=M(A,z,R,w);A.onBeforeShadow(t,A,N,y,W,k,null),t.renderBufferDirect(y,null,W,k,A,null),A.onAfterShadow(t,A,N,y,W,k,null)}}const F=A.children;for(let W=0,z=F.length;W<z;W++)S(F[W],N,y,R,w)}function T(A){A.target.removeEventListener("dispose",T);for(const y in u){const R=u[y],w=A.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}function Yw(t,e){function n(){let U=!1;const ue=new Ht;let $=null;const de=new Ht(0,0,0,0);return{setMask:function(ge){$!==ge&&!U&&(t.colorMask(ge,ge,ge,ge),$=ge)},setLocked:function(ge){U=ge},setClear:function(ge,ae,Le,Ne,Rt){Rt===!0&&(ge*=Ne,ae*=Ne,Le*=Ne),ue.set(ge,ae,Le,Ne),de.equals(ue)===!1&&(t.clearColor(ge,ae,Le,Ne),de.copy(ue))},reset:function(){U=!1,$=null,de.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,$=null,de=null,ge=null;return{setReversed:function(ae){if(ue!==ae){const Le=e.get("EXT_clip_control");ae?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ue=ae;const Ne=ge;ge=null,this.setClear(Ne)}},getReversed:function(){return ue},setTest:function(ae){ae?ie(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(ae){$!==ae&&!U&&(t.depthMask(ae),$=ae)},setFunc:function(ae){if(ue&&(ae=bN[ae]),de!==ae){switch(ae){case np:t.depthFunc(t.NEVER);break;case ip:t.depthFunc(t.ALWAYS);break;case ap:t.depthFunc(t.LESS);break;case yl:t.depthFunc(t.LEQUAL);break;case sp:t.depthFunc(t.EQUAL);break;case rp:t.depthFunc(t.GEQUAL);break;case op:t.depthFunc(t.GREATER);break;case lp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=ae}},setLocked:function(ae){U=ae},setClear:function(ae){ge!==ae&&(ge=ae,ue&&(ae=1-ae),t.clearDepth(ae))},reset:function(){U=!1,$=null,de=null,ge=null,ue=!1}}}function a(){let U=!1,ue=null,$=null,de=null,ge=null,ae=null,Le=null,Ne=null,Rt=null;return{setTest:function(mt){U||(mt?ie(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(mt){ue!==mt&&!U&&(t.stencilMask(mt),ue=mt)},setFunc:function(mt,pi,Ri){($!==mt||de!==pi||ge!==Ri)&&(t.stencilFunc(mt,pi,Ri),$=mt,de=pi,ge=Ri)},setOp:function(mt,pi,Ri){(ae!==mt||Le!==pi||Ne!==Ri)&&(t.stencilOp(mt,pi,Ri),ae=mt,Le=pi,Ne=Ri)},setLocked:function(mt){U=mt},setClear:function(mt){Rt!==mt&&(t.clearStencil(mt),Rt=mt)},reset:function(){U=!1,ue=null,$=null,de=null,ge=null,ae=null,Le=null,Ne=null,Rt=null}}}const s=new n,r=new i,o=new a,c=new WeakMap,u=new WeakMap;let h={},m={},d={},p=new WeakMap,g=[],b=null,x=!1,f=null,v=null,M=null,S=null,T=null,A=null,N=null,y=new it(0,0,0),R=0,w=!1,O=null,F=null,W=null,z=null,k=null;const I=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,q=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),P=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),P=q>=2);let Z=null,ne={};const Ae=t.getParameter(t.SCISSOR_BOX),be=t.getParameter(t.VIEWPORT),Ge=new Ht().fromArray(Ae),Xe=new Ht().fromArray(be);function ot(U,ue,$,de){const ge=new Uint8Array(4),ae=t.createTexture();t.bindTexture(U,ae),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<$;Le++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(ue+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return ae}const K={};K[t.TEXTURE_2D]=ot(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=ot(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=ot(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=ot(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),r.setFunc(yl),Pe(!1),Ve(vx),ie(t.CULL_FACE),He(fa);function ie(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function ve(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function Fe(U,ue){return d[U]!==ue?(t.bindFramebuffer(U,ue),d[U]=ue,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ue),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function xe(U,ue){let $=g,de=!1;if(U){$=p.get(ue),$===void 0&&($=[],p.set(ue,$));const ge=U.textures;if($.length!==ge.length||$[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Le=ge.length;ae<Le;ae++)$[ae]=t.COLOR_ATTACHMENT0+ae;$.length=ge.length,de=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,de=!0);de&&t.drawBuffers($)}function re(U){return b!==U?(t.useProgram(U),b=U,!0):!1}const Ie={[_r]:t.FUNC_ADD,[kA]:t.FUNC_SUBTRACT,[jA]:t.FUNC_REVERSE_SUBTRACT};Ie[XA]=t.MIN,Ie[WA]=t.MAX;const _e={[YA]:t.ZERO,[qA]:t.ONE,[ZA]:t.SRC_COLOR,[Rb]:t.SRC_ALPHA,[tN]:t.SRC_ALPHA_SATURATE,[$A]:t.DST_COLOR,[QA]:t.DST_ALPHA,[KA]:t.ONE_MINUS_SRC_COLOR,[Cb]:t.ONE_MINUS_SRC_ALPHA,[eN]:t.ONE_MINUS_DST_COLOR,[JA]:t.ONE_MINUS_DST_ALPHA,[nN]:t.CONSTANT_COLOR,[iN]:t.ONE_MINUS_CONSTANT_COLOR,[aN]:t.CONSTANT_ALPHA,[sN]:t.ONE_MINUS_CONSTANT_ALPHA};function He(U,ue,$,de,ge,ae,Le,Ne,Rt,mt){if(U===fa){x===!0&&(ve(t.BLEND),x=!1);return}if(x===!1&&(ie(t.BLEND),x=!0),U!==VA){if(U!==f||mt!==w){if((v!==_r||T!==_r)&&(t.blendEquation(t.FUNC_ADD),v=_r,T=_r),mt)switch(U){case nl:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zu:t.blendFunc(t.ONE,t.ONE);break;case _x:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ut("WebGLState: Invalid blending: ",U);break}else switch(U){case nl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case _x:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yx:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",U);break}M=null,S=null,A=null,N=null,y.set(0,0,0),R=0,f=U,w=mt}return}ge=ge||ue,ae=ae||$,Le=Le||de,(ue!==v||ge!==T)&&(t.blendEquationSeparate(Ie[ue],Ie[ge]),v=ue,T=ge),($!==M||de!==S||ae!==A||Le!==N)&&(t.blendFuncSeparate(_e[$],_e[de],_e[ae],_e[Le]),M=$,S=de,A=ae,N=Le),(Ne.equals(y)===!1||Rt!==R)&&(t.blendColor(Ne.r,Ne.g,Ne.b,Rt),y.copy(Ne),R=Rt),f=U,w=!1}function Ue(U,ue){U.side===oa?ve(t.CULL_FACE):ie(t.CULL_FACE);let $=U.side===zn;ue&&($=!$),Pe($),U.blending===nl&&U.transparent===!1?He(fa):He(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const de=U.stencilWrite;o.setTest(de),de&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Qe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(U){O!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),O=U)}function Ve(U){U!==FA?(ie(t.CULL_FACE),U!==F&&(U===vx?t.cullFace(t.BACK):U===HA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),F=U}function Ot(U){U!==W&&(P&&t.lineWidth(U),W=U)}function Qe(U,ue,$){U?(ie(t.POLYGON_OFFSET_FILL),(z!==ue||k!==$)&&(z=ue,k=$,r.getReversed()&&(ue=-ue),t.polygonOffset(ue,$))):ve(t.POLYGON_OFFSET_FILL)}function $e(U){U?ie(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function vt(U){U===void 0&&(U=t.TEXTURE0+I-1),Z!==U&&(t.activeTexture(U),Z=U)}function L(U,ue,$){$===void 0&&(Z===null?$=t.TEXTURE0+I-1:$=Z);let de=ne[$];de===void 0&&(de={type:void 0,texture:void 0},ne[$]=de),(de.type!==U||de.texture!==ue)&&(Z!==$&&(t.activeTexture($),Z=$),t.bindTexture(U,ue||K[U]),de.type=U,de.texture=ue)}function Zt(){const U=ne[Z];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ct(){try{t.compressedTexImage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function _(){try{t.texSubImage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function B(){try{t.texSubImage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function se(){try{t.texStorage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function oe(){try{t.texStorage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function J(){try{t.texImage2D(...arguments)}catch(U){ut("WebGLState:",U)}}function te(){try{t.texImage3D(...arguments)}catch(U){ut("WebGLState:",U)}}function le(U){return m[U]!==void 0?m[U]:t.getParameter(U)}function we(U,ue){m[U]!==ue&&(t.pixelStorei(U,ue),m[U]=ue)}function fe(U){Ge.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ge.copy(U))}function ce(U){Xe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Xe.copy(U))}function De(U,ue){let $=u.get(ue);$===void 0&&($=new WeakMap,u.set(ue,$));let de=$.get(U);de===void 0&&(de=t.getUniformBlockIndex(ue,U.name),$.set(U,de))}function Oe(U,ue){const de=u.get(ue).get(U);c.get(ue)!==de&&(t.uniformBlockBinding(ue,de,U.__bindingPointIndex),c.set(ue,de))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},m={},Z=null,ne={},d={},p=new WeakMap,g=[],b=null,x=!1,f=null,v=null,M=null,S=null,T=null,A=null,N=null,y=new it(0,0,0),R=0,w=!1,O=null,F=null,W=null,z=null,k=null,Ge.set(0,0,t.canvas.width,t.canvas.height),Xe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ie,disable:ve,bindFramebuffer:Fe,drawBuffers:xe,useProgram:re,setBlending:He,setMaterial:Ue,setFlipSided:Pe,setCullFace:Ve,setLineWidth:Ot,setPolygonOffset:Qe,setScissorTest:$e,activeTexture:vt,bindTexture:L,unbindTexture:Zt,compressedTexImage2D:ct,compressedTexImage3D:C,texImage2D:J,texImage3D:te,pixelStorei:we,getParameter:le,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:se,texStorage3D:oe,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:fe,viewport:ce,reset:We}}function qw(t,e,n,i,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new pt,h=new WeakMap,m=new Set;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,_){return g?new OffscreenCanvas(C,_):ku("canvas")}function x(C,_,B){let X=1;const Q=ct(C);if((Q.width>B||Q.height>B)&&(X=B/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const se=Math.floor(X*Q.width),oe=Math.floor(X*Q.height);d===void 0&&(d=b(se,oe));const J=_?b(se,oe):d;return J.width=se,J.height=oe,J.getContext("2d").drawImage(C,0,0,se,oe),ze("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+se+"x"+oe+")."),J}else return"data"in C&&ze("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function f(C){return C.generateMipmaps}function v(C){t.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(C,_,B,X,Q,se=!1){if(C!==null){if(t[C]!==void 0)return t[C];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe;X&&(oe=e.get("EXT_texture_norm16"),oe||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===t.RED&&(B===t.FLOAT&&(J=t.R32F),B===t.HALF_FLOAT&&(J=t.R16F),B===t.UNSIGNED_BYTE&&(J=t.R8),B===t.UNSIGNED_SHORT&&oe&&(J=oe.R16_EXT),B===t.SHORT&&oe&&(J=oe.R16_SNORM_EXT)),_===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.R8UI),B===t.UNSIGNED_SHORT&&(J=t.R16UI),B===t.UNSIGNED_INT&&(J=t.R32UI),B===t.BYTE&&(J=t.R8I),B===t.SHORT&&(J=t.R16I),B===t.INT&&(J=t.R32I)),_===t.RG&&(B===t.FLOAT&&(J=t.RG32F),B===t.HALF_FLOAT&&(J=t.RG16F),B===t.UNSIGNED_BYTE&&(J=t.RG8),B===t.UNSIGNED_SHORT&&oe&&(J=oe.RG16_EXT),B===t.SHORT&&oe&&(J=oe.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RG8UI),B===t.UNSIGNED_SHORT&&(J=t.RG16UI),B===t.UNSIGNED_INT&&(J=t.RG32UI),B===t.BYTE&&(J=t.RG8I),B===t.SHORT&&(J=t.RG16I),B===t.INT&&(J=t.RG32I)),_===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RGB8UI),B===t.UNSIGNED_SHORT&&(J=t.RGB16UI),B===t.UNSIGNED_INT&&(J=t.RGB32UI),B===t.BYTE&&(J=t.RGB8I),B===t.SHORT&&(J=t.RGB16I),B===t.INT&&(J=t.RGB32I)),_===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),B===t.UNSIGNED_INT&&(J=t.RGBA32UI),B===t.BYTE&&(J=t.RGBA8I),B===t.SHORT&&(J=t.RGBA16I),B===t.INT&&(J=t.RGBA32I)),_===t.RGB&&(B===t.UNSIGNED_SHORT&&oe&&(J=oe.RGB16_EXT),B===t.SHORT&&oe&&(J=oe.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),_===t.RGBA){const te=se?Gu:st.getTransfer(Q);B===t.FLOAT&&(J=t.RGBA32F),B===t.HALF_FLOAT&&(J=t.RGBA16F),B===t.UNSIGNED_BYTE&&(J=te===_t?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&oe&&(J=oe.RGBA16_EXT),B===t.SHORT&&oe&&(J=oe.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(C,_){let B;return C?_===null||_===qi||_===bl?B=t.DEPTH24_STENCIL8:_===Vi?B=t.DEPTH32F_STENCIL8:_===Sl&&(B=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qi||_===bl?B=t.DEPTH_COMPONENT24:_===Vi?B=t.DEPTH_COMPONENT32F:_===Sl&&(B=t.DEPTH_COMPONENT16),B}function A(C,_){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==vn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function N(C){const _=C.target;_.removeEventListener("dispose",N),R(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&m.delete(_)}function y(C){const _=C.target;_.removeEventListener("dispose",y),O(_)}function R(C){const _=i.get(C);if(_.__webglInit===void 0)return;const B=C.source,X=p.get(B);if(X){const Q=X[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(C),Object.keys(X).length===0&&p.delete(B)}i.remove(C)}function w(C){const _=i.get(C);t.deleteTexture(_.__webglTexture);const B=C.source,X=p.get(B);delete X[_.__cacheKey],r.memory.textures--}function O(C){const _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Q=0;Q<_.__webglFramebuffer[X].length;Q++)t.deleteFramebuffer(_.__webglFramebuffer[X][Q]);else t.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)t.deleteFramebuffer(_.__webglFramebuffer[X]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=C.textures;for(let X=0,Q=B.length;X<Q;X++){const se=i.get(B[X]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),r.memory.textures--),i.remove(B[X])}i.remove(C)}let F=0;function W(){F=0}function z(){return F}function k(C){F=C}function I(){const C=F;return C>=a.maxTextures&&ze("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+a.maxTextures),F+=1,C}function P(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function q(C,_){const B=i.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const X=C.image;if(X===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(B,C,_);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+_)}function V(C,_){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){ve(B,C,_);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+_)}function Z(C,_){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){ve(B,C,_);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+_)}function ne(C,_){const B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Fe(B,C,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+_)}const Ae={[cp]:t.REPEAT,[ca]:t.CLAMP_TO_EDGE,[up]:t.MIRRORED_REPEAT},be={[un]:t.NEAREST,[lN]:t.NEAREST_MIPMAP_NEAREST,[oc]:t.NEAREST_MIPMAP_LINEAR,[vn]:t.LINEAR,[uf]:t.LINEAR_MIPMAP_NEAREST,[As]:t.LINEAR_MIPMAP_LINEAR},Ge={[fN]:t.NEVER,[xN]:t.ALWAYS,[hN]:t.LESS,[r0]:t.LEQUAL,[pN]:t.EQUAL,[o0]:t.GEQUAL,[mN]:t.GREATER,[gN]:t.NOTEQUAL};function Xe(C,_){if(_.type===Vi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===vn||_.magFilter===uf||_.magFilter===oc||_.magFilter===As||_.minFilter===vn||_.minFilter===uf||_.minFilter===oc||_.minFilter===As)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,Ae[_.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Ae[_.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Ae[_.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,be[_.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,be[_.minFilter]),_.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===un||_.minFilter!==oc&&_.minFilter!==As||_.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ot(C,_){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",N));const X=_.source;let Q=p.get(X);Q===void 0&&(Q={},p.set(X,Q));const se=P(_);if(se!==C.__cacheKey){Q[se]===void 0&&(Q[se]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,B=!0),Q[se].usedTimes++;const oe=Q[C.__cacheKey];oe!==void 0&&(Q[C.__cacheKey].usedTimes--,oe.usedTimes===0&&w(_)),C.__cacheKey=se,C.__webglTexture=Q[se].texture}return B}function K(C,_,B){return Math.floor(Math.floor(C/B)/_)}function ie(C,_,B,X){const se=C.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,B,X,_.data);else{se.sort((we,fe)=>we.start-fe.start);let oe=0;for(let we=1;we<se.length;we++){const fe=se[oe],ce=se[we],De=fe.start+fe.count,Oe=K(ce.start,_.width,4),We=K(fe.start,_.width,4);ce.start<=De+1&&Oe===We&&K(ce.start+ce.count-1,_.width,4)===Oe?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++oe,se[oe]=ce)}se.length=oe+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),le=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let we=0,fe=se.length;we<fe;we++){const ce=se[we],De=Math.floor(ce.start/4),Oe=Math.ceil(ce.count/4),We=De%_.width,U=Math.floor(De/_.width),ue=Oe,$=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,We),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,We,U,ue,$,B,X,_.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,le)}}function ve(C,_,B){let X=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=t.TEXTURE_3D);const Q=ot(C,_),se=_.source;n.bindTexture(X,C.__webglTexture,t.TEXTURE0+B);const oe=i.get(se);if(se.version!==oe.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const $=st.getPrimaries(st.workingColorSpace),de=_.colorSpace===Ga?null:st.getPrimaries(_.colorSpace),ge=_.colorSpace===Ga||$===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let te=x(_.image,!1,a.maxTextureSize);te=Zt(_,te);const le=s.convert(_.format,_.colorSpace),we=s.convert(_.type);let fe=S(_.internalFormat,le,we,_.normalized,_.colorSpace,_.isVideoTexture);Xe(X,_);let ce;const De=_.mipmaps,Oe=_.isVideoTexture!==!0,We=oe.__version===void 0||Q===!0,U=se.dataReady,ue=A(_,te);if(_.isDepthTexture)fe=T(_.format===Ns,_.type),We&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,fe,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,fe,te.width,te.height,0,le,we,null));else if(_.isDataTexture)if(De.length>0){Oe&&We&&n.texStorage2D(t.TEXTURE_2D,ue,fe,De[0].width,De[0].height);for(let $=0,de=De.length;$<de;$++)ce=De[$],Oe?U&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ce.width,ce.height,le,we,ce.data):n.texImage2D(t.TEXTURE_2D,$,fe,ce.width,ce.height,0,le,we,ce.data);_.generateMipmaps=!1}else Oe?(We&&n.texStorage2D(t.TEXTURE_2D,ue,fe,te.width,te.height),U&&ie(_,te,le,we)):n.texImage2D(t.TEXTURE_2D,0,fe,te.width,te.height,0,le,we,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Oe&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,fe,De[0].width,De[0].height,te.depth);for(let $=0,de=De.length;$<de;$++)if(ce=De[$],_.format!==Ei)if(le!==null)if(Oe){if(U)if(_.layerUpdates.size>0){const ge=Zx(ce.width,ce.height,_.format,_.type);for(const ae of _.layerUpdates){const Le=ce.data.subarray(ae*ge/ce.data.BYTES_PER_ELEMENT,(ae+1)*ge/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ae,ce.width,ce.height,1,le,Le)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ce.width,ce.height,te.depth,le,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,fe,ce.width,ce.height,te.depth,0,ce.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ce.width,ce.height,te.depth,le,we,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,fe,ce.width,ce.height,te.depth,0,le,we,ce.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Oe&&We&&n.texStorage2D(t.TEXTURE_2D,ue,fe,De[0].width,De[0].height);for(let $=0,de=De.length;$<de;$++)ce=De[$],_.format!==Ei?le!==null?Oe?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,ce.width,ce.height,le,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,$,fe,ce.width,ce.height,0,ce.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ce.width,ce.height,le,we,ce.data):n.texImage2D(t.TEXTURE_2D,$,fe,ce.width,ce.height,0,le,we,ce.data)}else if(_.isDataArrayTexture)if(Oe){if(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,fe,te.width,te.height,te.depth),U)if(_.layerUpdates.size>0){const $=Zx(te.width,te.height,_.format,_.type);for(const de of _.layerUpdates){const ge=te.data.subarray(de*$/te.data.BYTES_PER_ELEMENT,(de+1)*$/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,te.width,te.height,1,le,we,ge)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,we,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,te.width,te.height,te.depth,0,le,we,te.data);else if(_.isData3DTexture)Oe?(We&&n.texStorage3D(t.TEXTURE_3D,ue,fe,te.width,te.height,te.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,we,te.data)):n.texImage3D(t.TEXTURE_3D,0,fe,te.width,te.height,te.depth,0,le,we,te.data);else if(_.isFramebufferTexture){if(We)if(Oe)n.texStorage2D(t.TEXTURE_2D,ue,fe,te.width,te.height);else{let $=te.width,de=te.height;for(let ge=0;ge<ue;ge++)n.texImage2D(t.TEXTURE_2D,ge,fe,$,de,0,le,we,null),$>>=1,de>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),te.parentNode!==$){$.appendChild(te),m.add(_),$.onpaint=de=>{const ge=de.changedElements;for(const ae of m)ge.includes(ae.image)&&(ae.needsUpdate=!0)},$.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const ge=t.RGBA,ae=t.RGBA,Le=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ge,ae,Le,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(Oe&&We){const $=ct(De[0]);n.texStorage2D(t.TEXTURE_2D,ue,fe,$.width,$.height)}for(let $=0,de=De.length;$<de;$++)ce=De[$],Oe?U&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,le,we,ce):n.texImage2D(t.TEXTURE_2D,$,fe,le,we,ce);_.generateMipmaps=!1}else if(Oe){if(We){const $=ct(te);n.texStorage2D(t.TEXTURE_2D,ue,fe,$.width,$.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le,we,te)}else n.texImage2D(t.TEXTURE_2D,0,fe,le,we,te);f(_)&&v(X),oe.__version=se.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Fe(C,_,B){if(_.image.length!==6)return;const X=ot(C,_),Q=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);const se=i.get(Q);if(Q.version!==se.__version||X===!0){n.activeTexture(t.TEXTURE0+B);const oe=st.getPrimaries(st.workingColorSpace),J=_.colorSpace===Ga?null:st.getPrimaries(_.colorSpace),te=_.colorSpace===Ga||oe===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const le=_.isCompressedTexture||_.image[0].isCompressedTexture,we=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let ae=0;ae<6;ae++)!le&&!we?fe[ae]=x(_.image[ae],!0,a.maxCubemapSize):fe[ae]=we?_.image[ae].image:_.image[ae],fe[ae]=Zt(_,fe[ae]);const ce=fe[0],De=s.convert(_.format,_.colorSpace),Oe=s.convert(_.type),We=S(_.internalFormat,De,Oe,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,ue=se.__version===void 0||X===!0,$=Q.dataReady;let de=A(_,ce);Xe(t.TEXTURE_CUBE_MAP,_);let ge;if(le){U&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,We,ce.width,ce.height);for(let ae=0;ae<6;ae++){ge=fe[ae].mipmaps;for(let Le=0;Le<ge.length;Le++){const Ne=ge[Le];_.format!==Ei?De!==null?U?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Ne.width,Ne.height,De,Ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,We,Ne.width,Ne.height,0,Ne.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Ne.width,Ne.height,De,Oe,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,We,Ne.width,Ne.height,0,De,Oe,Ne.data)}}}else{if(ge=_.mipmaps,U&&ue){ge.length>0&&de++;const ae=ct(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,We,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(we){U?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,fe[ae].width,fe[ae].height,De,Oe,fe[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,fe[ae].width,fe[ae].height,0,De,Oe,fe[ae].data);for(let Le=0;Le<ge.length;Le++){const Rt=ge[Le].image[ae].image;U?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,Rt.width,Rt.height,De,Oe,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,We,Rt.width,Rt.height,0,De,Oe,Rt.data)}}else{U?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,De,Oe,fe[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,De,Oe,fe[ae]);for(let Le=0;Le<ge.length;Le++){const Ne=ge[Le];U?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,De,Oe,Ne.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,We,De,Oe,Ne.image[ae])}}}f(_)&&v(t.TEXTURE_CUBE_MAP),se.__version=Q.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function xe(C,_,B,X,Q,se){const oe=s.convert(B.format,B.colorSpace),J=s.convert(B.type),te=S(B.internalFormat,oe,J,B.normalized,B.colorSpace),le=i.get(_),we=i.get(B);if(we.__renderTarget=_,!le.__hasExternalTextures){const fe=Math.max(1,_.width>>se),ce=Math.max(1,_.height>>se);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,se,te,fe,ce,_.depth,0,oe,J,null):n.texImage2D(Q,se,te,fe,ce,0,oe,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),vt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Q,we.__webglTexture,0,$e(_)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Q,we.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(C,_,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),_.depthBuffer){const X=_.depthTexture,Q=X&&X.isDepthTexture?X.type:null,se=T(_.stencilBuffer,Q),oe=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;vt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e(_),se,_.width,_.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e(_),se,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,se,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,C)}else{const X=_.textures;for(let Q=0;Q<X.length;Q++){const se=X[Q],oe=s.convert(se.format,se.colorSpace),J=s.convert(se.type),te=S(se.internalFormat,oe,J,se.normalized,se.colorSpace);vt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e(_),te,_.width,_.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e(_),te,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,te,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(C,_,B){const X=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",N)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,_.depthTexture);const le=s.convert(_.depthTexture.format),we=s.convert(_.depthTexture.type);let fe;_.depthTexture.format===ya?fe=t.DEPTH_COMPONENT24:_.depthTexture.format===Ns&&(fe=t.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,fe,_.width,_.height,0,le,we,null)}}else q(_.depthTexture,0);const se=Q.__webglTexture,oe=$e(_),J=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,te=_.depthTexture.format===Ns?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===ya)vt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,se,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,te,J,se,0);else if(_.depthTexture.format===Ns)vt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,se,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,te,J,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _e(C){const _=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=X}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)Ie(_.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?Ie(_.__webglFramebuffer[0],C,0):Ie(_.__webglFramebuffer,C,0)}else if(B){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=t.createRenderbuffer(),re(_.__webglDepthbuffer[X],C,!1);else{const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,se)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),re(_.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(C,_,B){const X=i.get(C);_!==void 0&&xe(X.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&_e(C)}function Ue(C){const _=C.texture,B=i.get(C),X=i.get(_);C.addEventListener("dispose",y);const Q=C.textures,se=C.isWebGLCubeRenderTarget===!0,oe=Q.length>1;if(oe||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=_.version,r.memory.textures++),se){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let te=0;te<_.mipmaps.length;te++)B.__webglFramebuffer[J][te]=t.createFramebuffer()}else B.__webglFramebuffer[J]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)B.__webglFramebuffer[J]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(oe)for(let J=0,te=Q.length;J<te;J++){const le=i.get(Q[J]);le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture(),r.memory.textures++)}if(C.samples>0&&vt(C)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<Q.length;J++){const te=Q[J];B.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[J]);const le=s.convert(te.format,te.colorSpace),we=s.convert(te.type),fe=S(te.internalFormat,le,we,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),ce=$e(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,fe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,B.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),re(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)xe(B.__webglFramebuffer[J][te],C,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else xe(B.__webglFramebuffer[J],C,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(_)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let J=0,te=Q.length;J<te;J++){const le=Q[J],we=i.get(le);let fe=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,we.__webglTexture),Xe(fe,le),xe(B.__webglFramebuffer,C,le,t.COLOR_ATTACHMENT0+J,fe,0),f(le)&&v(fe)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,X.__webglTexture),Xe(J,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)xe(B.__webglFramebuffer[te],C,_,t.COLOR_ATTACHMENT0,J,te);else xe(B.__webglFramebuffer,C,_,t.COLOR_ATTACHMENT0,J,0);f(_)&&v(J),n.unbindTexture()}C.depthBuffer&&_e(C)}function Pe(C){const _=C.textures;for(let B=0,X=_.length;B<X;B++){const Q=_[B];if(f(Q)){const se=M(C),oe=i.get(Q).__webglTexture;n.bindTexture(se,oe),v(se),n.unbindTexture()}}}const Ve=[],Ot=[];function Qe(C){if(C.samples>0){if(vt(C)===!1){const _=C.textures,B=C.width,X=C.height;let Q=t.COLOR_BUFFER_BIT;const se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(C),J=_.length>1;if(J)for(let le=0;le<_.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const te=C.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<_.length;le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const we=i.get(_[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,B,X,0,0,B,X,Q,t.NEAREST),c===!0&&(Ve.length=0,Ot.length=0,Ve.push(t.COLOR_ATTACHMENT0+le),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Ve.push(se),Ot.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ot)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let le=0;le<_.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const we=i.get(_[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,we,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const _=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function $e(C){return Math.min(a.maxSamples,C.samples)}function vt(C){const _=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(C){const _=r.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function Zt(C,_){const B=C.colorSpace,X=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Hu&&B!==Ga&&(st.getTransfer(B)===_t?(X!==Ei||Q!==di)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",B)),_}function ct(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=W,this.getTextureUnits=z,this.setTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=ne,this.rebindTextures=He,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Zw(t,e){function n(i,a=Ga){let s;const r=st.getTransfer(a);if(i===di)return t.UNSIGNED_BYTE;if(i===t0)return t.UNSIGNED_SHORT_4_4_4_4;if(i===n0)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Gb)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vb)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fb)return t.BYTE;if(i===Hb)return t.SHORT;if(i===Sl)return t.UNSIGNED_SHORT;if(i===e0)return t.INT;if(i===qi)return t.UNSIGNED_INT;if(i===Vi)return t.FLOAT;if(i===Zi)return t.HALF_FLOAT;if(i===kb)return t.ALPHA;if(i===jb)return t.RGB;if(i===Ei)return t.RGBA;if(i===ya)return t.DEPTH_COMPONENT;if(i===Ns)return t.DEPTH_STENCIL;if(i===Xb)return t.RED;if(i===i0)return t.RED_INTEGER;if(i===js)return t.RG;if(i===a0)return t.RG_INTEGER;if(i===s0)return t.RGBA_INTEGER;if(i===nu||i===iu||i===au||i===su)if(r===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===iu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===iu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===au)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===su)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dp||i===fp||i===hp||i===pp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mp||i===gp||i===xp||i===vp||i===_p||i===Bu||i===yp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===mp||i===gp)return r===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===vp)return s.COMPRESSED_R11_EAC;if(i===_p)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Bu)return s.COMPRESSED_RG11_EAC;if(i===yp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sp||i===bp||i===Ep||i===Mp||i===Tp||i===Ap||i===Np||i===Rp||i===Cp||i===wp||i===Dp||i===Lp||i===Up||i===Op)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ep)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ap)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Np)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lp)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Up)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Op)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ip||i===Pp||i===zp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ip)return r===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bp||i===Fp||i===Fu||i===Hp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Kw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qw=`
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

}`;class Jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new iE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ki({vertexShader:Kw,fragmentShader:Qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Sa(new _d(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $w extends Qs{constructor(e,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",c=1,u=null,h=null,m=null,d=null,p=null,g=null;const b=typeof XRWebGLBinding<"u",x=new Jw,f={},v=n.getContextAttributes();let M=null,S=null;const T=[],A=[],N=new pt;let y=null,R=null;const w=new oi;w.viewport=new Ht;const O=new oi;O.viewport=new Ht;const F=[w,O],W=new r2;let z=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=T[K];return ie===void 0&&(ie=new _f,T[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=T[K];return ie===void 0&&(ie=new _f,T[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=T[K];return ie===void 0&&(ie=new _f,T[K]=ie),ie.getHandSpace()};function I(K){const ie=A.indexOf(K.inputSource);if(ie===-1)return;const ve=T[ie];ve!==void 0&&(ve.update(K.inputSource,K.frame,u||r),ve.dispatchEvent({type:K.type,data:K.inputSource}))}function P(){a.removeEventListener("select",I),a.removeEventListener("selectstart",I),a.removeEventListener("selectend",I),a.removeEventListener("squeeze",I),a.removeEventListener("squeezestart",I),a.removeEventListener("squeezeend",I),a.removeEventListener("end",P),a.removeEventListener("inputsourceschange",q);for(let K=0;K<T.length;K++){const ie=A[K];ie!==null&&(A[K]=null,T[K].disconnect(ie))}z=null,k=null,x.reset();for(const K in f)delete f[K];if(e.setRenderTarget(M),p=null,d=null,m=null,a=null,S=null,ot.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(N.width,N.height,!1),R!==null){const K=R.camera;K.fov=R.fov,K.zoom=R.zoom,K.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return m===null&&b&&(m=new XRWebGLBinding(a,n)),m},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(M=e.getRenderTarget(),a.addEventListener("select",I),a.addEventListener("selectstart",I),a.addEventListener("selectend",I),a.addEventListener("squeeze",I),a.addEventListener("squeezestart",I),a.addEventListener("squeezeend",I),a.addEventListener("end",P),a.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(N),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Fe=null,xe=null;v.depth&&(xe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=v.stencil?Ns:ya,Fe=v.stencil?bl:qi);const re={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:s};m=this.getBinding(),d=m.createProjectionLayer(re),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ti(d.textureWidth,d.textureHeight,{format:Ei,type:di,depthTexture:new El(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,ve),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ti(p.framebufferWidth,p.framebufferHeight,{format:Ei,type:di,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,r=await a.requestReferenceSpace(o),ot.setContext(a),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(K){for(let ie=0;ie<K.removed.length;ie++){const ve=K.removed[ie],Fe=A.indexOf(ve);Fe>=0&&(A[Fe]=null,T[Fe].disconnect(ve))}for(let ie=0;ie<K.added.length;ie++){const ve=K.added[ie];let Fe=A.indexOf(ve);if(Fe===-1){for(let re=0;re<T.length;re++)if(re>=A.length){A.push(ve),Fe=re;break}else if(A[re]===null){A[re]=ve,Fe=re;break}if(Fe===-1)break}const xe=T[Fe];xe&&xe.connect(ve)}}const V=new j,Z=new j;function ne(K,ie,ve){V.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);const Fe=V.distanceTo(Z),xe=ie.projectionMatrix.elements,re=ve.projectionMatrix.elements,Ie=xe[14]/(xe[10]-1),_e=xe[14]/(xe[10]+1),He=(xe[9]+1)/xe[5],Ue=(xe[9]-1)/xe[5],Pe=(xe[8]-1)/xe[0],Ve=(re[8]+1)/re[0],Ot=Ie*Pe,Qe=Ie*Ve,$e=Fe/(-Pe+Ve),vt=$e*-Pe;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(vt),K.translateZ($e),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const L=Ie+$e,Zt=_e+$e,ct=Ot-vt,C=Qe+(Fe-vt),_=He*_e/Zt*L,B=Ue*_e/Zt*L;K.projectionMatrix.makePerspective(ct,C,_,B,L,Zt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ae(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ie=K.near,ve=K.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),W.near=O.near=w.near=ie,W.far=O.far=w.far=ve,(z!==W.near||k!==W.far)&&(a.updateRenderState({depthNear:W.near,depthFar:W.far}),z=W.near,k=W.far),W.layers.mask=K.layers.mask|6,w.layers.mask=W.layers.mask&-5,O.layers.mask=W.layers.mask&-3;const Fe=K.parent,xe=W.cameras;Ae(W,Fe);for(let re=0;re<xe.length;re++)Ae(xe[re],Fe);xe.length===2?ne(W,w,O):W.projectionMatrix.copy(w.projectionMatrix),R===null&&K.isPerspectiveCamera&&(R={camera:K,fov:K.fov,zoom:K.zoom}),be(K,W,Fe)};function be(K,ie,ve){ve===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(ve.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Gp*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(W)},this.getCameraTexture=function(K){return f[K]};let Ge=null;function Xe(K,ie){if(h=ie.getViewerPose(u||r),g=ie,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Fe=!1;ve.length!==W.cameras.length&&(W.cameras.length=0,Fe=!0);for(let _e=0;_e<ve.length;_e++){const He=ve[_e];let Ue=null;if(p!==null)Ue=p.getViewport(He);else{const Ve=m.getViewSubImage(d,He);Ue=Ve.viewport,_e===0&&(e.setRenderTargetTextures(S,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(S))}let Pe=F[_e];Pe===void 0&&(Pe=new oi,Pe.layers.enable(_e),Pe.viewport=new Ht,F[_e]=Pe),Pe.matrix.fromArray(He.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(He.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),_e===0&&(W.matrix.copy(Pe.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Fe===!0&&W.cameras.push(Pe)}const xe=a.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){m=i.getBinding();const _e=m.getDepthInformation(ve[0]);_e&&_e.isValid&&_e.texture&&x.init(_e,a.renderState)}if(xe&&xe.includes("camera-access")&&b){e.state.unbindTexture(),m=i.getBinding();for(let _e=0;_e<ve.length;_e++){const He=ve[_e].camera;if(He){let Ue=f[He];Ue||(Ue=new iE,f[He]=Ue);const Pe=m.getCameraImage(He);Ue.sourceTexture=Pe}}}}for(let ve=0;ve<T.length;ve++){const Fe=A[ve],xe=T[ve];Fe!==null&&xe!==void 0&&xe.update(Fe,ie,u||r)}Ge&&Ge(K,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const ot=new oE;ot.setAnimationLoop(Xe),this.setAnimationLoop=function(K){Ge=K},this.dispose=function(){}}}const eD=new Gt,pE=new je;pE.set(-1,0,0,0,1,0,0,0,1);function tD(t,e){function n(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function i(x,f){f.color.getRGB(x.fogColor.value,aE(t)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function a(x,f,v,M,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(x,f):f.isMeshLambertMaterial?(s(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(x,f),m(x,f)):f.isMeshPhongMaterial?(s(x,f),h(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(x,f),d(x,f),f.isMeshPhysicalMaterial&&p(x,f,S)):f.isMeshMatcapMaterial?(s(x,f),g(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),b(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(r(x,f),f.isLineDashedMaterial&&o(x,f)):f.isPointsMaterial?c(x,f,v,M):f.isSpriteMaterial?u(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,n(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===zn&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,n(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===zn&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,n(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,n(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const v=e.get(f),M=v.envMap,S=v.envMapRotation;M&&(x.envMap.value=M,x.envMapRotation.value.setFromMatrix4(eD.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(pE),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,x.aoMapTransform))}function r(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform))}function o(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function c(x,f,v,M){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*v,x.scale.value=M*.5,f.map&&(x.map.value=f.map,n(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function u(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function h(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function m(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function d(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function p(x,f,v){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zn&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.retroreflectivity>0&&(x.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,f){f.matcap&&(x.matcap.value=f.matcap)}function b(x,f){const v=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function nD(t,e,n,i){let a={},s={},r=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){const A=T.program;i.uniformBlockBinding(S,A)}function u(S,T){let A=a[S.id];A===void 0&&(x(S),A=h(S),a[S.id]=A,S.addEventListener("dispose",v));const N=T.program;i.updateUBOMapping(S,N);const y=e.render.frame;s[S.id]!==y&&(d(S),s[S.id]=y)}function h(S){const T=m();S.__bindingPointIndex=T;const A=t.createBuffer(),N=S.__size,y=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,N,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function m(){for(let S=0;S<o;S++)if(r.indexOf(S)===-1)return r.push(S),S;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const T=a[S.id],A=S.uniforms,N=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let y=0,R=A.length;y<R;y++){const w=A[y];if(Array.isArray(w))for(let O=0,F=w.length;O<F;O++)p(w[O],y,O,N);else p(w,y,0,N)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,T,A,N){if(b(S,T,A,N)===!0){const y=S.__offset,R=S.value;if(Array.isArray(R)){let w=0;for(let O=0;O<R.length;O++){const F=R[O],W=f(F);g(F,S.__data,w),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(w+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,S.__data)}}function g(S,T,A){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,A)}function b(S,T,A,N){const y=S.value,R=T+"_"+A;if(N[R]===void 0)return typeof y=="number"||typeof y=="boolean"?N[R]=y:ArrayBuffer.isView(y)?N[R]=y.slice():N[R]=y.clone(),!0;{const w=N[R];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return N[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function x(S){const T=S.uniforms;let A=0;const N=16;for(let R=0,w=T.length;R<w;R++){const O=Array.isArray(T[R])?T[R]:[T[R]];for(let F=0,W=O.length;F<W;F++){const z=O[F],k=Array.isArray(z.value)?z.value:[z.value];for(let I=0,P=k.length;I<P;I++){const q=k[I],V=f(q),Z=A%N,ne=Z%V.boundary,Ae=Z+ne;A+=ne,Ae!==0&&N-Ae<V.storage&&(A+=N-Ae),z.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=A,A+=V.storage}}}const y=A%N;return y>0&&(A+=N-y),S.__size=A,S.__cache={},this}function f(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",S),T}function v(S){const T=S.target;T.removeEventListener("dispose",v);const A=r.indexOf(T.__bindingPointIndex);r.splice(A,1),t.deleteBuffer(a[T.id]),delete a[T.id],delete s[T.id]}function M(){for(const S in a)t.deleteBuffer(a[S]);r=[],a={},s={}}return{bind:c,update:u,dispose:M}}const iD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function aD(){return Oi===null&&(Oi=new XN(iD,16,16,js,Zi),Oi.name="DFG_LUT",Oi.minFilter=vn,Oi.magFilter=vn,Oi.wrapS=ca,Oi.wrapT=ca,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class sD{constructor(e={}){const{canvas:n=yN(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:p=di}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;const b=p,x=new Set([s0,a0,i0]),f=new Set([di,qi,Sl,bl,t0,n0]),v=new Uint32Array(4),M=new Int32Array(4),S=new j;let T=null,A=null;const N=[],y=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1,F=null,W=null,z=null,k=null;this._outputColorSpace=ai;let I=0,P=0,q=null,V=-1,Z=null;const ne=new Ht,Ae=new Ht;let be=null;const Ge=new it(0);let Xe=0,ot=n.width,K=n.height,ie=1,ve=null,Fe=null;const xe=new Ht(0,0,ot,K),re=new Ht(0,0,ot,K);let Ie=!1;const _e=new $b;let He=!1,Ue=!1;const Pe=new Gt,Ve=new j,Ot=new Ht,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function vt(){return q===null?ie:1}let L=i;function Zt(E,D){return n.getContext(E,D)}let ct,C,_,B,X,Q,se,oe,J,te,le,we,fe,ce,De,Oe,We,U,ue,$,de,ge,ae;try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$m}`),n.addEventListener("webglcontextlost",Rt,!1),n.addEventListener("webglcontextrestored",mt,!1),n.addEventListener("webglcontextcreationerror",pi,!1),L===null){const D="webgl2";if(L=Zt(D,E),L===null)throw Zt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(E){throw n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",pi,!1),ut("WebGLRenderer: "+E.message),E}function Le(){ct=new aC(L),ct.init(),de=new Zw(L,ct),C=new q3(L,ct,e,de),_=new Yw(L,ct),C.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),W=L.createFramebuffer(),z=L.createFramebuffer(),k=L.createFramebuffer(),B=new oC(L),X=new Uw,Q=new qw(L,ct,_,X,C,de,B),se=new iC(w),oe=new c2(L),ge=new W3(L,oe),J=new sC(L,oe,B,ge),te=new cC(L,J,oe,ge,B),U=new lC(L,C,Q),De=new Z3(X),le=new Lw(w,se,ct,C,ge,De),we=new tD(w,X),fe=new Iw,ce=new Gw(ct),We=new X3(w,se,_,te,g,c),Oe=new Ww(w,te,C),ae=new nD(L,B,C,_),ue=new Y3(L,ct,B),$=new rC(L,ct,B),B.programs=le.programs,w.capabilities=C,w.extensions=ct,w.properties=X,w.renderLists=fe,w.shadowMap=Oe,w.state=_,w.info=B}b!==di&&(R=new dC(b,n.width,n.height,o,a,s));const Ne=new $w(w,L);this.xr=Ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=ct.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ct.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(ot,K,!1))},this.getSize=function(E){return E.set(ot,K)},this.setSize=function(E,D,Y=!0){if(Ne.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=E,K=D,n.width=Math.floor(E*ie),n.height=Math.floor(D*ie),Y===!0&&(n.style.width=E+"px",n.style.height=D+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(ot*ie,K*ie).floor()},this.setDrawingBufferSize=function(E,D,Y){ot=E,K=D,ie=Y,n.width=Math.floor(E*Y),n.height=Math.floor(D*Y),this.setViewport(0,0,E,D)},this.setEffects=function(E){if(b===di){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let D=0;D<E.length;D++)if(E[D].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ne)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,D,Y,H){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,D,Y,H),_.viewport(ne.copy(xe).multiplyScalar(ie).round())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,D,Y,H){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,D,Y,H),_.scissor(Ae.copy(re).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(E){_.setScissorTest(Ie=E)},this.setOpaqueSort=function(E){ve=E},this.setTransparentSort=function(E){Fe=E},this.getClearColor=function(E){return E.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(E=!0,D=!0,Y=!0){let H=0;if(E){let G=!1;if(q!==null){const me=q.texture.format;G=x.has(me)}if(G){const me=q.texture.type,Se=f.has(me),pe=We.getClearColor(),Me=We.getClearAlpha(),Re=pe.r,Ze=pe.g,et=pe.b;Se?(v[0]=Re,v[1]=Ze,v[2]=et,v[3]=Me,L.clearBufferuiv(L.COLOR,0,v)):(M[0]=Re,M[1]=Ze,M[2]=et,M[3]=Me,L.clearBufferiv(L.COLOR,0,M))}else H|=L.COLOR_BUFFER_BIT}D&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",pi,!1),We.dispose(),fe.dispose(),ce.dispose(),X.dispose(),se.dispose(),te.dispose(),ge.dispose(),ae.dispose(),le.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",x0),Ne.removeEventListener("sessionend",v0),fs.stop()};function Rt(E){E.preventDefault(),Mx("WebGLRenderer: Context Lost."),O=!0}function mt(){Mx("WebGLRenderer: Context Restored."),O=!1;const E=B.autoReset,D=Oe.enabled,Y=Oe.autoUpdate,H=Oe.needsUpdate,G=Oe.type;Le(),B.autoReset=E,Oe.enabled=D,Oe.autoUpdate=Y,Oe.needsUpdate=H,Oe.type=G}function pi(E){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ri(E){const D=E.target;D.removeEventListener("dispose",Ri),mE(D)}function mE(E){gE(E),X.remove(E)}function gE(E){const D=X.get(E).programs;D!==void 0&&(D.forEach(function(Y){le.releaseProgram(Y)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,Y,H,G,me){D===null&&(D=Qe);const Se=G.isMesh&&G.matrixWorld.determinantAffine()<0,pe=_E(E,D,Y,H,G);_.setMaterial(H,Se);let Me=Y.index,Re=1;if(H.wireframe===!0){if(Me=J.getWireframeAttribute(Y),Me===void 0)return;Re=2}const Ze=Y.drawRange,et=Y.attributes.position;let Te=Ze.start*Re,gt=(Ze.start+Ze.count)*Re;me!==null&&(Te=Math.max(Te,me.start*Re),gt=Math.min(gt,(me.start+me.count)*Re)),Me!==null?(Te=Math.max(Te,0),gt=Math.min(gt,Me.count)):et!=null&&(Te=Math.max(Te,0),gt=Math.min(gt,et.count));const jt=gt-Te;if(jt<0||jt===1/0)return;ge.setup(G,H,pe,Y,Me);let It,Tt=ue;if(Me!==null&&(It=oe.get(Me),Tt=$,Tt.setIndex(It)),G.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*vt()),Tt.setMode(L.LINES)):Tt.setMode(L.TRIANGLES);else if(G.isLine){let mn=H.linewidth;mn===void 0&&(mn=1),_.setLineWidth(mn*vt()),G.isLineSegments?Tt.setMode(L.LINES):G.isLineLoop?Tt.setMode(L.LINE_LOOP):Tt.setMode(L.LINE_STRIP)}else G.isPoints?Tt.setMode(L.POINTS):G.isSprite&&Tt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Tt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const mn=G._multiDrawStarts,ye=G._multiDrawCounts,bn=G._multiDrawCount,lt=Me?oe.get(Me).bytesPerElement:1,ei=X.get(H).currentProgram.getUniforms();for(let Ci=0;Ci<bn;Ci++)ei.setValue(L,"_gl_DrawID",Ci),Tt.render(mn[Ci]/lt,ye[Ci])}else if(G.isInstancedMesh)Tt.renderInstances(Te,jt,G.count);else if(Y.isInstancedBufferGeometry){const mn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ye=Math.min(Y.instanceCount,mn);Tt.renderInstances(Te,jt,ye)}else Tt.render(Te,jt)};function g0(E,D,Y,H){F!==null&&E.isNodeMaterial&&F.setObject(H,E),He===!0&&De.setState(E,Y,!1),E.transparent===!0&&E.side===oa&&E.forceSinglePass===!1?(E.side=zn,E.needsUpdate=!0,Gl(E,D,H),E.side=Vs,E.needsUpdate=!0,Gl(E,D,H),E.side=oa):Gl(E,D,H)}this.compile=function(E,D,Y=null){Y===null&&(Y=E),F!==null&&F.renderStart(E,D,Y),A=ce.get(Y),A.init(D),y.push(A),Y.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),E!==Y&&E.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),F!==null&&F.updateLights(A.state.lightsArray),Ue=this.localClippingEnabled,He=De.init(this.clippingPlanes,Ue),He===!0&&De.setGlobalState(this.clippingPlanes,D),F!==null&&Oe.render(A.state.shadowsArray,Y,D);const H=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const me=G.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const pe=me[Se];g0(pe,Y,D,G),H.add(pe)}else g0(me,Y,D,G),H.add(me)}),A=y.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(E,D,Y=null){const H=this.compile(E,D,Y);return new Promise(G=>{function me(){if(H.forEach(function(Se){const Me=X.get(Se).currentProgram;(Me===void 0||Me.isReady())&&H.delete(Se)}),H.size===0){G(E);return}setTimeout(me,10)}ct.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let bd=null;function xE(E){bd&&bd(E)}function x0(){fs.stop()}function v0(){fs.start()}const fs=new oE;fs.setAnimationLoop(xE),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(E){bd=E,Ne.setAnimationLoop(E),E===null?fs.stop():fs.start()},Ne.addEventListener("sessionstart",x0),Ne.addEventListener("sessionend",v0),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;F!==null&&F.renderStart(E,D);const Y=Ne.enabled===!0&&Ne.isPresenting===!0,H=R!==null&&(q===null||Y)&&R.begin(w,q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(D),D=Ne.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,D,q),A=ce.get(E,y.length),A.init(D),A.state.textureUnits=Q.getTextureUnits(),y.push(A),Pe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),_e.setFromProjectionMatrix(Pe,ki,D.reversedDepth),Ue=this.localClippingEnabled,He=De.init(this.clippingPlanes,Ue),T=fe.get(E,N.length),T.init(),N.push(T),Ne.enabled===!0&&Ne.isPresenting===!0){const Se=w.xr.getDepthSensingMesh();Se!==null&&Ed(Se,D,-1/0,w.sortObjects)}Ed(E,D,0,w.sortObjects),T.finish(),F!==null&&F.updateLights(A.state.lightsArray),w.sortObjects===!0&&T.sort(ve,Fe),$e=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,$e&&We.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&De.beginShadows();const G=A.state.shadowsArray;if(Oe.render(G,E,D),He===!0&&De.endShadows(),(H&&R.hasRenderPass())===!1){const Se=T.opaque,pe=T.transmissive;if(A.setupLights(),D.isArrayCamera){const Me=D.cameras;if(pe.length>0)for(let Re=0,Ze=Me.length;Re<Ze;Re++){const et=Me[Re];y0(Se,pe,E,et)}$e&&We.render(E);for(let Re=0,Ze=Me.length;Re<Ze;Re++){const et=Me[Re];_0(T,E,et,et.viewport)}}else pe.length>0&&y0(Se,pe,E,D),$e&&We.render(E),_0(T,E,D)}q!==null&&P===0&&(Q.updateMultisampleRenderTarget(q),Q.updateRenderTargetMipmap(q)),H&&R.end(w),E.isScene===!0&&E.onAfterRender(w,E,D),ge.resetDefaultState(),V=-1,Z=null,y.pop(),y.length>0?(A=y[y.length-1],Q.setTextureUnits(A.state.textureUnits),He===!0&&De.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,N.pop(),N.length>0?T=N[N.length-1]:T=null,F!==null&&F.renderEnd()};function Ed(E,D,Y,H){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLightProbeGrid)A.pushLightProbeGrid(E);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(_e)){H&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pe);const Se=te.update(E),pe=E.material;pe.visible&&T.push(E,Se,pe,Y,Ot.z,null,D)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(_e))){const Se=te.update(E),pe=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ot.copy(Se.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(Pe)),Array.isArray(pe)){const Me=Se.groups;for(let Re=0,Ze=Me.length;Re<Ze;Re++){const et=Me[Re],Te=pe[et.materialIndex];Te&&Te.visible&&T.push(E,Se,Te,Y,Ot.z,et,D)}}else pe.visible&&T.push(E,Se,pe,Y,Ot.z,null,D)}}const me=E.children;for(let Se=0,pe=me.length;Se<pe;Se++)Ed(me[Se],D,Y,H)}function _0(E,D,Y,H){const{opaque:G,transmissive:me,transparent:Se}=E;A.setupLightsView(Y),He===!0&&De.setGlobalState(w.clippingPlanes,Y),H&&_.viewport(ne.copy(H)),G.length>0&&Hl(G,D,Y),me.length>0&&Hl(me,D,Y),Se.length>0&&Hl(Se,D,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function y0(E,D,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Te=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Ti(1,1,{generateMipmaps:!0,type:Te?Zi:di,minFilter:As,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}const me=A.state.transmissionRenderTarget[H.id],Se=H.viewport||ne;me.setSize(Se.z*w.transmissionResolutionScale,Se.w*w.transmissionResolutionScale);const pe=w.getRenderTarget(),Me=w.getActiveCubeFace(),Re=w.getActiveMipmapLevel();w.setRenderTarget(me),w.getClearColor(Ge),Xe=w.getClearAlpha(),Xe<1&&w.setClearColor(16777215,.5),w.clear(),$e&&We.render(Y);const Ze=w.toneMapping;w.toneMapping=Wi;const et=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),He===!0&&De.setGlobalState(w.clippingPlanes,H),Hl(E,Y,H),Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let gt=0,jt=D.length;gt<jt;gt++){const It=D[gt],{object:Tt,geometry:mn,material:ye,group:bn}=It;if(ye.side===oa&&Tt.layers.test(H.layers)){const lt=ye.side;ye.side=zn,ye.needsUpdate=!0,S0(Tt,Y,H,mn,ye,bn),ye.side=lt,ye.needsUpdate=!0,Te=!0}}Te===!0&&(Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me))}w.setRenderTarget(pe,Me,Re),w.setClearColor(Ge,Xe),et!==void 0&&(H.viewport=et),w.toneMapping=Ze}function Hl(E,D,Y){const H=D.isScene===!0?D.overrideMaterial:null;for(let G=0,me=E.length;G<me;G++){const Se=E[G],{object:pe,geometry:Me,group:Re}=Se;let Ze=Se.material;Ze.allowOverride===!0&&H!==null&&(Ze=H),pe.layers.test(Y.layers)&&S0(pe,D,Y,Me,Ze,Re)}}function S0(E,D,Y,H,G,me){F!==null&&G.isNodeMaterial&&F.setObject(E,G),E.onBeforeRender(w,D,Y,H,G,me),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(w,D,Y,H,E,me),G.transparent===!0&&G.side===oa&&G.forceSinglePass===!1?(G.side=zn,G.needsUpdate=!0,w.renderBufferDirect(Y,D,H,G,E,me),G.side=Vs,G.needsUpdate=!0,w.renderBufferDirect(Y,D,H,G,E,me),G.side=oa):w.renderBufferDirect(Y,D,H,G,E,me),E.onAfterRender(w,D,Y,H,G,me)}function Gl(E,D,Y){D.isScene!==!0&&(D=Qe);const H=X.get(E),G=A.state.lights,me=A.state.shadowsArray,Se=G.state.version,pe=le.getParameters(E,G.state,me,D,Y,A.state.lightProbeGridArray),Me=le.getProgramCacheKey(pe);let Re=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;const Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=se.get(E.envMap||H.environment,Ze),H.envMapRotation=H.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Re===void 0&&(E.addEventListener("dispose",Ri),Re=new Map,H.programs=Re);let et=Re.get(Me);if(et!==void 0){if(H.currentProgram===et&&H.lightsStateVersion===Se)return E0(E,pe),et}else pe.uniforms=le.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,Y,pe),E.onBeforeCompile(pe,w),et=le.acquireProgram(pe,Me),Re.set(Me,et),H.uniforms=pe.uniforms;const Te=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=De.uniform),E0(E,pe),H.needsLights=SE(E),H.lightsStateVersion=Se,H.needsLights&&(Te.ambientLightColor.value=G.state.ambient,Te.lightProbe.value=G.state.probe,Te.sunLights.value=G.state.sun,Te.sunLightShadows.value=G.state.sunShadow,Te.directionalLights.value=G.state.directional,Te.directionalLightShadows.value=G.state.directionalShadow,Te.spotLights.value=G.state.spot,Te.spotLightShadows.value=G.state.spotShadow,Te.rectAreaLights.value=G.state.rectArea,Te.ltc_1.value=G.state.rectAreaLTC1,Te.ltc_2.value=G.state.rectAreaLTC2,Te.pointLights.value=G.state.point,Te.pointLightShadows.value=G.state.pointShadow,Te.hemisphereLights.value=G.state.hemi,Te.sunShadowMatrix.value=G.state.sunShadowMatrix,Te.sunShadowCascade.value=G.state.sunShadowCascade,Te.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Te.spotLightMatrix.value=G.state.spotLightMatrix,Te.spotLightMap.value=G.state.spotLightMap,Te.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=A.state.lightProbeGridArray.length>0,H.currentProgram=et,H.uniformsList=null,et}function b0(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=ru.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function E0(E,D){const Y=X.get(E);Y.outputColorSpace=D.outputColorSpace,Y.batching=D.batching,Y.batchingColor=D.batchingColor,Y.instancing=D.instancing,Y.instancingColor=D.instancingColor,Y.instancingMorph=D.instancingMorph,Y.skinning=D.skinning,Y.morphTargets=D.morphTargets,Y.morphNormals=D.morphNormals,Y.morphColors=D.morphColors,Y.morphTargetsCount=D.morphTargetsCount,Y.numClippingPlanes=D.numClippingPlanes,Y.numIntersection=D.numClipIntersection,Y.vertexAlphas=D.vertexAlphas,Y.vertexTangents=D.vertexTangents,Y.toneMapping=D.toneMapping}function vE(E,D){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(D.matrixWorld);for(let Y=0,H=E.length;Y<H;Y++){const G=E[Y];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function _E(E,D,Y,H,G){D.isScene!==!0&&(D=Qe),Q.resetTextureUnits();const me=D.fog,Se=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,pe=q===null?w.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:st.workingColorSpace,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Re=se.get(H.envMap||Se,Me),Ze=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,et=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Te=!!Y.morphAttributes.position,gt=!!Y.morphAttributes.normal,jt=!!Y.morphAttributes.color;let It=Wi;H.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(It=w.toneMapping);const Tt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mn=Tt!==void 0?Tt.length:0,ye=X.get(H),bn=A.state.lights;if(He===!0&&(Ue===!0||E!==Z)){const Ct=E===Z&&H.id===V;De.setState(H,E,Ct)}let lt=!1;H.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==bn.state.version||ye.outputColorSpace!==pe||G.isBatchedMesh&&ye.batching===!1||!G.isBatchedMesh&&ye.batching===!0||G.isBatchedMesh&&ye.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&ye.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&ye.instancing===!1||!G.isInstancedMesh&&ye.instancing===!0||G.isSkinnedMesh&&ye.skinning===!1||!G.isSkinnedMesh&&ye.skinning===!0||G.isInstancedMesh&&ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ye.instancingMorph===!1&&G.morphTexture!==null||ye.envMap!==Re||H.fog===!0&&ye.fog!==me||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==De.numPlanes||ye.numIntersection!==De.numIntersection)||ye.vertexAlphas!==Ze||ye.vertexTangents!==et||ye.morphTargets!==Te||ye.morphNormals!==gt||ye.morphColors!==jt||ye.toneMapping!==It||ye.morphTargetsCount!==mn||!!ye.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,ye.__version=H.version);let ei=ye.currentProgram;lt===!0&&(ei=Gl(H,D,G),F&&H.isNodeMaterial&&F.onUpdateProgram(H,ei,ye));let Ci=!1,Ta=!1,Js=!1;const Et=ei.getUniforms(),Vt=ye.uniforms;if(_.useProgram(ei.program)&&(Ci=!0,Ta=!0,Js=!0),H.id!==V&&(V=H.id,Ta=!0),ye.needsLights){const Ct=vE(A.state.lightProbeGridArray,G);ye.lightProbeGrid!==Ct&&(ye.lightProbeGrid=Ct,Ta=!0)}if(Ci||Z!==E){_.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Et.setValue(L,"projectionMatrix",E.projectionMatrix),Et.setValue(L,"viewMatrix",E.matrixWorldInverse);const Na=Et.map.cameraPosition;Na!==void 0&&Na.setValue(L,Ve.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&Et.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Et.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,Ta=!0,Js=!0)}if(ye.needsLights&&(bn.state.sunShadowMap.length>0&&Et.setValue(L,"sunShadowMap",bn.state.sunShadowMap,Q),bn.state.directionalShadowMap.length>0&&Et.setValue(L,"directionalShadowMap",bn.state.directionalShadowMap,Q),bn.state.spotShadowMap.length>0&&Et.setValue(L,"spotShadowMap",bn.state.spotShadowMap,Q),bn.state.pointShadowMap.length>0&&Et.setValue(L,"pointShadowMap",bn.state.pointShadowMap,Q)),G.isSkinnedMesh){Et.setOptional(L,G,"bindMatrix"),Et.setOptional(L,G,"bindMatrixInverse");const Ct=G.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),Et.setValue(L,"boneTexture",Ct.boneTexture,Q))}G.isBatchedMesh&&(Et.setOptional(L,G,"batchingTexture"),Et.setValue(L,"batchingTexture",G._matricesTexture,Q),Et.setOptional(L,G,"batchingIdTexture"),Et.setValue(L,"batchingIdTexture",G._indirectTexture,Q),Et.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&Et.setValue(L,"batchingColorTexture",G._colorsTexture,Q));const Aa=Y.morphAttributes;if((Aa.position!==void 0||Aa.normal!==void 0||Aa.color!==void 0)&&U.update(G,Y,ei),(Ta||ye.receiveShadow!==G.receiveShadow)&&(ye.receiveShadow=G.receiveShadow,Et.setValue(L,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(Vt.envMapIntensity.value=D.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=aD()),Ta){if(Et.setValue(L,"toneMappingExposure",w.toneMappingExposure),ye.needsLights&&yE(Vt,Js),me&&H.fog===!0&&we.refreshFogUniforms(Vt,me),we.refreshMaterialUniforms(Vt,H,ie,K,A.state.transmissionRenderTarget[E.id]),ye.needsLights&&ye.lightProbeGrid){const Ct=ye.lightProbeGrid;Vt.probesSH.value=Ct.texture,Vt.probesMin.value.copy(Ct.boundingBox.min),Vt.probesMax.value.copy(Ct.boundingBox.max),Vt.probesResolution.value.copy(Ct.resolution)}ru.upload(L,b0(ye),Vt,Q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ru.upload(L,b0(ye),Vt,Q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Et.setValue(L,"center",G.center),Et.setValue(L,"modelViewMatrix",G.modelViewMatrix),Et.setValue(L,"normalMatrix",G.normalMatrix),Et.setValue(L,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const Ct=H.uniformsGroups;for(let Na=0,$s=Ct.length;Na<$s;Na++){const T0=Ct[Na];ae.update(T0,ei),ae.bind(T0,ei)}}return ei}function yE(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.sunLights.needsUpdate=D,E.sunLightShadows.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function SE(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(E,D,Y){const H=X.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=D,X.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,D){const Y=X.get(E);Y.__webglFramebuffer=D,Y.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,Y=0){q=E,I=D,P=Y;let H=null,G=!1,me=!1;if(E){const pe=X.get(E);if(pe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,pe.__webglFramebuffer),ne.copy(E.viewport),Ae.copy(E.scissor),be=E.scissorTest,_.viewport(ne),_.scissor(Ae),_.setScissorTest(be),V=-1;return}else if(pe.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(pe.__hasExternalTextures)Q.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ze=E.depthTexture;if(pe.__boundDepthTexture!==Ze){if(Ze!==null&&X.has(Ze)&&(E.width!==Ze.image.width||E.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(me=!0);const Re=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?H=Re[D][Y]:H=Re[D],G=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?H=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[Y]:H=Re,ne.copy(E.viewport),Ae.copy(E.scissor),be=E.scissorTest}else ne.copy(xe).multiplyScalar(ie).floor(),Ae.copy(re).multiplyScalar(ie).floor(),be=Ie;if(Y!==0&&(H=W),_.bindFramebuffer(L.FRAMEBUFFER,H)&&_.drawBuffers(E,H),_.viewport(ne),_.scissor(Ae),_.setScissorTest(be),G){const pe=X.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,Y)}else if(me){const pe=D;for(let Me=0;Me<E.textures.length;Me++){const Re=X.get(E.textures[Me]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Me,Re.__webglTexture,Y,pe)}}else if(E!==null&&Y!==0){const pe=X.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,Y)}V=-1};function M0(E){const D=X.get(E);return(D.__readFormat!==E.format||D.__readType!==E.type)&&(D.__readFormat=E.format,D.__readType=E.type,D.__formatReadable=C.textureFormatReadable(E.format),D.__typeReadable=C.textureTypeReadable(E.type)),D}this.readRenderTargetPixels=function(E,D,Y,H,G,me,Se,pe=0){if(!(E&&E.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Me=Me[Se]),Me){_.bindFramebuffer(L.FRAMEBUFFER,Me);try{const Re=E.textures[pe],Ze=Re.format,et=Re.type;E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe);const Te=M0(Re);if(Te.__formatReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-H&&Y>=0&&Y<=E.height-G&&L.readPixels(D,Y,H,G,de.convert(Ze),de.convert(et),me)}finally{const Re=q!==null?X.get(q).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(E,D,Y,H,G,me,Se,pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Me=Me[Se]),Me)if(D>=0&&D<=E.width-H&&Y>=0&&Y<=E.height-G){_.bindFramebuffer(L.FRAMEBUFFER,Me);const Re=E.textures[pe],Ze=Re.format,et=Re.type;E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe);const Te=M0(Re);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,gt),L.bufferData(L.PIXEL_PACK_BUFFER,me.byteLength,L.STREAM_READ),L.readPixels(D,Y,H,G,de.convert(Ze),de.convert(et),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const jt=q!==null?X.get(q).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,jt);const It=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await SN(L,It,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,gt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,me),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(gt),L.deleteSync(It),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,D=null,Y=0){const H=Math.pow(2,-Y),G=Math.floor(E.image.width*H),me=Math.floor(E.image.height*H),Se=D!==null?D.x:0,pe=D!==null?D.y:0;Q.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Se,pe,G,me),_.unbindTexture()},this.copyTextureToTexture=function(E,D,Y=null,H=null,G=0,me=0){let Se,pe,Me,Re,Ze,et,Te,gt,jt;const It=E.isCompressedTexture?E.mipmaps[me]:E.image;if(Y!==null)Se=Y.max.x-Y.min.x,pe=Y.max.y-Y.min.y,Me=Y.isBox3?Y.max.z-Y.min.z:1,Re=Y.min.x,Ze=Y.min.y,et=Y.isBox3?Y.min.z:0;else{const Vt=Math.pow(2,-G);Se=Math.floor(It.width*Vt),pe=Math.floor(It.height*Vt),E.isDataArrayTexture?Me=It.depth:E.isData3DTexture?Me=Math.floor(It.depth*Vt):Me=1,Re=0,Ze=0,et=0}H!==null?(Te=H.x,gt=H.y,jt=H.z):(Te=0,gt=0,jt=0);const Tt=de.convert(D.format),mn=de.convert(D.type);let ye;D.isData3DTexture?(Q.setTexture3D(D,0),ye=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Q.setTexture2DArray(D,0),ye=L.TEXTURE_2D_ARRAY):(Q.setTexture2D(D,0),ye=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const bn=_.getParameter(L.UNPACK_ROW_LENGTH),lt=_.getParameter(L.UNPACK_IMAGE_HEIGHT),ei=_.getParameter(L.UNPACK_SKIP_PIXELS),Ci=_.getParameter(L.UNPACK_SKIP_ROWS),Ta=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),_.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),_.pixelStorei(L.UNPACK_SKIP_IMAGES,et);const Js=E.isDataArrayTexture||E.isData3DTexture,Et=D.isDataArrayTexture||D.isData3DTexture;if(E.isDepthTexture){const Vt=X.get(E),Aa=X.get(D),Ct=X.get(Vt.__renderTarget),Na=X.get(Aa.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,Ct.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let $s=0;$s<Me;$s++)Js&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,X.get(E).__webglTexture,G,et+$s),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,X.get(D).__webglTexture,me,jt+$s)),L.blitFramebuffer(Re,Ze,Se,pe,Te,gt,Se,pe,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||X.has(E)){const Vt=X.get(E),Aa=X.get(D);_.bindFramebuffer(L.READ_FRAMEBUFFER,z),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let Ct=0;Ct<Me;Ct++)Js?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vt.__webglTexture,G,et+Ct):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vt.__webglTexture,G),Et?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Aa.__webglTexture,me,jt+Ct):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Aa.__webglTexture,me),G!==0?L.blitFramebuffer(Re,Ze,Se,pe,Te,gt,Se,pe,L.COLOR_BUFFER_BIT,L.NEAREST):Et?L.copyTexSubImage3D(ye,me,Te,gt,jt+Ct,Re,Ze,Se,pe):L.copyTexSubImage2D(ye,me,Te,gt,Re,Ze,Se,pe);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Et?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(ye,me,Te,gt,jt,Se,pe,Me,Tt,mn,It.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(ye,me,Te,gt,jt,Se,pe,Me,Tt,It.data):L.texSubImage3D(ye,me,Te,gt,jt,Se,pe,Me,Tt,mn,It):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,me,Te,gt,Se,pe,Tt,mn,It.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,me,Te,gt,It.width,It.height,Tt,It.data):L.texSubImage2D(L.TEXTURE_2D,me,Te,gt,Se,pe,Tt,mn,It);_.pixelStorei(L.UNPACK_ROW_LENGTH,bn),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt),_.pixelStorei(L.UNPACK_SKIP_PIXELS,ei),_.pixelStorei(L.UNPACK_SKIP_ROWS,Ci),_.pixelStorei(L.UNPACK_SKIP_IMAGES,Ta),me===0&&D.generateMipmaps&&L.generateMipmap(ye),_.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),_.unbindTexture()},this.resetState=function(){I=0,P=0,q=null,_.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}const rD=({className:t="",activeMode:e="brain"})=>{const n=Ce.useRef(null),[i,a]=Ce.useState(e),[s,r]=Ce.useState(60),[o,c]=Ce.useState(!1);return Ce.useEffect(()=>{e&&a(e)},[e]),Ce.useEffect(()=>{const u=window.matchMedia("(prefers-reduced-motion: reduce)");c(u.matches);const h=re=>c(re.matches);u.addEventListener("change",h);const m=n.current;if(!m)return;const d=new zN;d.fog=new c0(329482,.025);const p=new oi(55,m.clientWidth/m.clientHeight,.1,1e3);p.position.z=28;const g=new sD({antialias:!0,alpha:!0,powerPreference:"high-performance"});g.setSize(m.clientWidth,m.clientHeight),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.appendChild(g.domElement);const b=window.innerWidth<768?900:2200,x=new Float32Array(b*3),f=new Float32Array(b*3),v=new Float32Array(b*3),M=new Float32Array(b),S=new it(61695),T=new it(3718648),A=new it(6583435),N=new it(16777215),y=()=>{const re=new Float32Array(b*3);for(let Ie=0;Ie<b;Ie++){const _e=Ie*3,He=Math.random(),Ue=Math.random(),Pe=He*2*Math.PI,Ve=Math.acos(2*Ue-1),Ot=Math.random()>.5?1:-1,Qe=7.5+Math.sin(Pe*3)*1.2+Math.cos(Ve*4)*.8,$e=Qe*Math.sin(Ve)*Math.cos(Pe)*.9+Ot*1.2,vt=Qe*Math.sin(Ve)*Math.sin(Pe)*.85,L=Qe*Math.cos(Ve)*1.1;re[_e]=$e,re[_e+1]=vt,re[_e+2]=L}return re},R=()=>{const re=new Float32Array(b*3),Ie=5,_e=5;for(let He=0;He<b;He++){const Ue=He*3,Pe=Math.floor(He/b*Ie),Ve=(Pe-(Ie-1)/2)*_e,Ot=6.5+Math.sin(Pe*1.5)*1.5,Qe=Math.random()*Math.PI*2,$e=Math.sqrt(Math.random())*Ot;re[Ue]=Ve+(Math.random()-.5)*.8,re[Ue+1]=Math.cos(Qe)*$e,re[Ue+2]=Math.sin(Qe)*$e}return re},w=()=>{const re=new Float32Array(b*3);for(let Ie=0;Ie<b;Ie++){const _e=Ie*3,He=(Math.random()-.5)*16,Ue=(Math.random()-.5)*16,Pe=Math.sin(He*.4)*Math.cos(Ue*.4)*4.5;re[_e]=He,re[_e+1]=Ue*.8,re[_e+2]=Pe}return re},O=y(),F=R(),W=w();for(let re=0;re<b*3;re++)x[re]=O[re],f[re]=O[re];for(let re=0;re<b;re++){const Ie=Math.random();let _e=A;Ie>.85?_e=N:Ie>.5?_e=S:Ie>.25&&(_e=T),v[re*3]=_e.r,v[re*3+1]=_e.g,v[re*3+2]=_e.b,M[re]=Math.random()*2.2+.8}const z=new Jn;z.setAttribute("position",new In(x,3)),z.setAttribute("color",new In(v,3)),z.setAttribute("size",new In(M,1));const k=(()=>{const re=document.createElement("canvas");re.width=64,re.height=64;const Ie=re.getContext("2d"),_e=Ie.createRadialGradient(32,32,0,32,32,30);return _e.addColorStop(0,"rgba(255,255,255,1)"),_e.addColorStop(.3,"rgba(0,240,255,0.8)"),_e.addColorStop(.7,"rgba(56,189,248,0.2)"),_e.addColorStop(1,"rgba(0,0,0,0)"),Ie.fillStyle=_e,Ie.fillRect(0,0,64,64),new KN(re)})(),I=new tE({size:.65,map:k,vertexColors:!0,transparent:!0,blending:zu,depthWrite:!1,opacity:.85}),P=new ZN(z,I);d.add(P);const q=140,V=new Float32Array(q*6),Z=new Float32Array(q*6),ne=new Jn;ne.setAttribute("position",new In(V,3)),ne.setAttribute("color",new In(Z,3));const Ae=new eE({vertexColors:!0,transparent:!0,opacity:.25,blending:zu}),be=new qN(ne,Ae);d.add(be);const Ge={x:0,y:0,targetX:0,targetY:0},Xe=re=>{const Ie=m.getBoundingClientRect(),_e=(re.clientX-Ie.left)/Ie.width*2-1,He=-((re.clientY-Ie.top)/Ie.height*2-1);Ge.targetX=_e*1.5,Ge.targetY=He*1.5};window.addEventListener("mousemove",Xe);const ot=()=>{if(!m)return;const re=m.clientWidth,Ie=m.clientHeight;p.aspect=re/Ie,p.updateProjectionMatrix(),g.setSize(re,Ie)};window.addEventListener("resize",ot);let K,ie=new o2,ve=0,Fe=performance.now();const xe=()=>{K=requestAnimationFrame(xe);const re=ie.getElapsedTime();ve++;const Ie=performance.now();Ie-Fe>=1e3&&(r(ve),ve=0,Fe=Ie),Ge.x+=(Ge.targetX-Ge.x)*.05,Ge.y+=(Ge.targetY-Ge.y)*.05;let _e=O;i==="network"?_e=F:i==="lattice"&&(_e=W);const He=z.attributes.position,Ue=He.array,Pe=.04;for(let Qe=0;Qe<b*3;Qe+=3){const $e=Math.sin(re*1.5+Ue[Qe]*.2)*.08;Ue[Qe]+=(_e[Qe]-Ue[Qe])*Pe+(o?0:$e),Ue[Qe+1]+=(_e[Qe+1]-Ue[Qe+1])*Pe,Ue[Qe+2]+=(_e[Qe+2]-Ue[Qe+2])*Pe}He.needsUpdate=!0,o||(P.rotation.y=re*.12+Ge.x*.4,P.rotation.x=Math.sin(re*.08)*.1-Ge.y*.3,be.rotation.copy(P.rotation));let Ve=0;const Ot=Math.floor(b/q);for(let Qe=0;Qe<q;Qe++){const $e=Qe*Ot*3,vt=(Qe*Ot+7)%b*3,L=Ue[$e]-Ue[vt],Zt=Ue[$e+1]-Ue[vt+1],ct=Ue[$e+2]-Ue[vt+2],C=L*L+Zt*Zt+ct*ct;if(C<28){V[Ve]=Ue[$e],V[Ve+1]=Ue[$e+1],V[Ve+2]=Ue[$e+2],V[Ve+3]=Ue[vt],V[Ve+4]=Ue[vt+1],V[Ve+5]=Ue[vt+2];const _=1-Math.sqrt(C)/5.3;Z[Ve]=0,Z[Ve+1]=.94*_,Z[Ve+2]=1*_,Z[Ve+3]=.22*_,Z[Ve+4]=.74*_,Z[Ve+5]=.97*_,Ve+=6}}ne.attributes.position.needsUpdate=!0,ne.attributes.color.needsUpdate=!0,g.render(d,p)};return xe(),()=>{window.removeEventListener("mousemove",Xe),window.removeEventListener("resize",ot),u.removeEventListener("change",h),cancelAnimationFrame(K),g.dispose(),z.dispose(),I.dispose(),ne.dispose(),Ae.dispose(),m&&g.domElement&&m.removeChild(g.domElement)}},[i,o]),l.jsxs("div",{className:`relative w-full h-full overflow-hidden ${t}`,children:[l.jsx("div",{ref:n,className:"w-full h-full cursor-grab active:cursor-grabbing"}),l.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1.5 rounded-lg glass-panel border border-cyan-500/20 z-20",children:[l.jsx("button",{onClick:()=>a("brain"),className:`px-3 py-1 rounded text-xs font-mono tracking-wider transition-all duration-300 ${i==="brain"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,children:"[ 01: BIOLOGICAL CORTEX ]"}),l.jsx("button",{onClick:()=>a("network"),className:`px-3 py-1 rounded text-xs font-mono tracking-wider transition-all duration-300 ${i==="network"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,children:"[ 02: NEURAL NETWORK ]"}),l.jsx("button",{onClick:()=>a("lattice"),className:`px-3 py-1 rounded text-xs font-mono tracking-wider transition-all duration-300 ${i==="lattice"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,children:"[ 03: COMPUTATIONAL GRAPH ]"})]}),l.jsxs("div",{className:"absolute top-4 right-4 text-[10px] font-mono text-slate-400 glass-panel px-3 py-1.5 rounded border border-white/5 flex items-center gap-3 pointer-events-none",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),l.jsx("span",{className:"text-cyan-300",children:"GPU CORE:"}),l.jsxs("span",{children:[s," FPS"]})]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-400",children:"PARTICLES:"})," 2,200"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("div",{className:"text-cyan-400 font-semibold uppercase",children:["MODE: ",i]})]})]})},vv="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@%&<>[]{}/=+*~",oD=({text:t,className:e="",trigger:n=!0})=>{const[i,a]=Ce.useState(t);return Ce.useEffect(()=>{if(!n)return;let s=0;const r=setInterval(()=>{a(()=>t.split("").map((o,c)=>o===" "?" ":c<s?t[c]:vv[Math.floor(Math.random()*vv.length)]).join("")),s>=t.length&&clearInterval(r),s+=1/2},25);return()=>clearInterval(r)},[t,n]),l.jsx("span",{className:`font-mono ${e}`,children:i})},Wu=({className:t="w-4 h-4"})=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[l.jsx("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),l.jsx("path",{d:"M9 18c-4.51 2-5-2-7-2"})]}),lD=({className:t="w-4 h-4"})=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[l.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),l.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),l.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),cD=({onExploreMissions:t})=>l.jsxs("section",{id:"hero",className:"relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden select-none",children:[l.jsx("div",{className:"absolute inset-0 z-0 opacity-80 pointer-events-auto",children:l.jsx(rD,{className:"w-full h-full"})}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-[#05070a]/80 pointer-events-none z-10"}),l.jsxs("div",{className:"relative z-20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400 border-b border-white/5 pb-4",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),l.jsx("span",{className:"text-cyan-300 font-semibold tracking-widest",children:"DIGITAL DOSSIER // ARCHIVE CLASSIFICATION: ACTIVE"})]}),l.jsxs("div",{className:"flex items-center gap-6 text-[11px] text-slate-500",children:[l.jsx("span",{children:"CODENAME: CHARACTER-07"}),l.jsx("span",{className:"hidden sm:inline",children:"REAL: ATLEE KUMAAR"}),l.jsx("span",{children:"CHRONO: 2042"})]})]}),l.jsxs("div",{className:"relative z-20 my-auto py-12 sm:py-16 flex flex-col lg:flex-row lg:items-center lg:gap-16",children:[l.jsxs("div",{className:"flex-1 max-w-2xl",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-sm",children:[l.jsx(mo,{className:"w-3.5 h-3.5 text-cyan-400"}),l.jsx(oD,{text:"CHARACTER-07"}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsx("span",{className:"text-slate-400",children:"DESIGNATION 07-AK"})]}),l.jsxs("h1",{className:"text-5xl sm:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight text-white uppercase leading-[0.95] mb-4",children:["THE AI ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400",children:"ARCHITECT."})]}),l.jsxs("blockquote",{className:"my-6 border-l-2 border-cyan-500/80 pl-5 text-xl sm:text-2xl text-slate-200 font-sans font-light italic leading-relaxed max-w-2xl",children:[`"I don't predict the future. `,l.jsx("br",{}),l.jsx("span",{className:"text-cyan-300 font-normal not-italic",children:"I build systems that make it possible."}),'"']}),l.jsxs("p",{className:"text-sm sm:text-base font-mono text-slate-400 max-w-xl mb-8 leading-relaxed",children:["Computer Science Engineering ",l.jsx("span",{className:"text-cyan-400",children:"×"})," Artificial Intelligence"]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[l.jsxs("button",{onClick:()=>{Ee.playClick(),t()},onMouseEnter:()=>Ee.playHover(),className:"group relative px-6 py-3.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/60 hover:border-cyan-400 rounded-lg text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 cursor-pointer","data-cursor":"EXPLORE",children:[l.jsx("span",{className:"text-cyan-300 font-bold group-hover:text-white transition-colors",children:"[ EXPLORE MISSIONS ]"}),l.jsx(gd,{className:"w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform"})]}),l.jsxs("a",{href:"https://github.com/atleekumaar",target:"_blank",rel:"noopener noreferrer",onClick:()=>Ee.playClick(),onMouseEnter:()=>Ee.playHover(),className:"px-6 py-3.5 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 hover:border-slate-500 rounded-lg text-slate-300 hover:text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2.5 backdrop-blur-sm cursor-pointer","data-cursor":"GITHUB",children:[l.jsx(Wu,{className:"w-4 h-4 text-slate-400"}),l.jsx("span",{children:"[ OPEN GITHUB ]"}),l.jsx(Gs,{className:"w-3.5 h-3.5 text-slate-500"})]})]})]}),l.jsxs("div",{className:"hidden lg:flex flex-col items-center gap-3 shrink-0",children:[l.jsxs("div",{className:"relative w-72 h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden border-2 border-cyan-500/60 shadow-2xl shadow-cyan-950/60 group bg-slate-950",children:[l.jsx("img",{src:"./hero-portrait.jpg",alt:"Atlee Kumaar — CHARACTER-07",className:"w-full h-full object-cover object-[50%_10%] filter contrast-105 brightness-95 group-hover:contrast-110 transition-all duration-700"}),l.jsx("div",{className:"absolute inset-x-0 h-0.5 bg-cyan-400/70 shadow-[0_0_14px_#00f0ff] animate-scanline pointer-events-none"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none"}),l.jsx("div",{className:"absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-cyan-400"}),l.jsx("div",{className:"absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-cyan-400"}),l.jsx("div",{className:"absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-cyan-400"}),l.jsx("div",{className:"absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-cyan-400"}),l.jsxs("div",{className:"absolute top-[8%] left-[18%] w-20 h-20 border border-dashed border-cyan-400/60 rounded-full pointer-events-none flex items-center justify-center animate-pulse",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),l.jsx("div",{className:"absolute -top-4 text-[8px] text-cyan-300 font-mono font-bold bg-black/60 px-1 rounded",children:"TARGET: ATLEE"})]}),l.jsxs("div",{className:"absolute top-3 left-3 text-[9px] text-cyan-300 font-mono bg-black/70 border border-cyan-500/40 px-2 py-0.5 rounded backdrop-blur-md flex items-center gap-1",children:[l.jsx($S,{className:"w-3 h-3 text-cyan-400 animate-spin",style:{animationDuration:"4s"}}),l.jsx("span",{children:"VERIFIED"})]}),l.jsx("div",{className:"absolute bottom-2 inset-x-2 text-center text-[9px] font-mono text-cyan-300 bg-black/70 border border-cyan-500/30 rounded px-2 py-1 backdrop-blur-md",children:"ATLEE KUMAAR // CHARACTER-07"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-mono text-slate-500",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),l.jsx("span",{children:"BIOMETRIC MATCH 99.8% // HACK 404"})]})]})]}),l.jsxs("div",{className:"relative z-20 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl glass-panel border border-white/5 font-mono text-xs",children:[l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"STATUS"}),l.jsxs("span",{className:"text-cyan-300 font-bold flex items-center gap-1.5 mt-0.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"ACTIVE"]})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"LOCATION"}),l.jsx("span",{className:"text-slate-200 font-semibold mt-0.5",children:"EARTH // SECTOR 01"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"SPECIALIZATION"}),l.jsx("span",{className:"text-cyan-400 font-semibold mt-0.5",children:"ARTIFICIAL INTELLIGENCE"})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:"CURRENT OBJECTIVE"}),l.jsxs("span",{className:"text-slate-100 font-bold tracking-wider mt-0.5 flex items-center gap-1",children:[l.jsx(cs,{className:"w-3.5 h-3.5 text-cyan-400"})," BUILD"]})]})]})]}),uD=()=>{const t=[{name:"RESEARCH",desc:"Dissect foundations & papers"},{name:"BUILD",desc:"Construct working architectures"},{name:"BREAK",desc:"Stress-test edge limits & failures"},{name:"LEARN",desc:"Synthesize telemetry feedback"},{name:"SHIP",desc:"Deploy verified production code"},{name:"REPEAT",desc:"Compound systemic cognition"}];return l.jsxs("section",{id:"origin",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"01 // ORIGIN DOSSIER"})]}),l.jsx("div",{className:"mb-16",children:l.jsxs("h2",{className:"text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white uppercase leading-none max-w-4xl",children:["EVERY SYSTEM ",l.jsx("br",{}),l.jsx("span",{className:"text-slate-500",children:"STARTS WITH"})," ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200",children:"A QUESTION."})]})}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20",children:[l.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[l.jsxs("div",{className:"p-6 rounded-xl glass-panel border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 font-semibold",children:[l.jsx(pA,{className:"w-4 h-4 text-cyan-400"}),"THE QUESTION"]}),l.jsx("p",{className:"text-lg sm:text-xl font-heading font-bold text-white mb-2",children:"“How do we make machines understand the world?”"}),l.jsx("p",{className:"text-sm text-slate-400 leading-relaxed font-sans",children:"Not through shallow imitation or synthetic facades, but through mathematically grounded representations of physical environments, high-dimensional manifolds, and cognitive causality."})]}),l.jsxs("div",{className:"p-6 rounded-xl glass-panel border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 font-semibold",children:[l.jsx(vA,{className:"w-4 h-4 text-cyan-400"}),"THE OBSESSION"]}),l.jsx("p",{className:"text-lg sm:text-xl font-heading font-bold text-white mb-2",children:"Computational Intelligence as an Engineering Reality"}),l.jsx("p",{className:"text-sm text-slate-400 leading-relaxed font-sans",children:"Atlee is a Computer Science Engineering student specializing in Artificial Intelligence. His work spans the full spectrum of modern machine intelligence: deep learning, transformer architectures, large language models, autonomous AI agents, computer vision, robotics simulation, cloud infrastructure, and 3D point cloud perception."})]}),l.jsxs("div",{className:"p-6 rounded-xl glass-panel border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 font-semibold",children:[l.jsx(gx,{className:"w-4 h-4 text-cyan-400"}),"THE TRANSFORMATION"]}),l.jsxs("div",{className:"space-y-3 font-mono text-xs pt-1",children:[l.jsxs("div",{className:"flex items-center gap-3 text-slate-400",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-slate-600"}),l.jsx("span",{children:"01. Writing deterministic code"})]}),l.jsx("div",{className:"text-slate-600 pl-4",children:"↓"}),l.jsxs("div",{className:"flex items-center gap-3 text-slate-300",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-slate-400"}),l.jsx("span",{children:"02. Training and fine-tuning neural models"})]}),l.jsx("div",{className:"text-slate-600 pl-4",children:"↓"}),l.jsxs("div",{className:"flex items-center gap-3 text-cyan-300",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),l.jsx("span",{children:"03. Constructing production-grade intelligent systems"})]}),l.jsx("div",{className:"text-slate-600 pl-4",children:"↓"}),l.jsxs("div",{className:"flex items-center gap-3 text-white font-bold",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"}),l.jsx("span",{children:"04. Designing closed-loop autonomous agents & perception pipelines"})]})]})]}),l.jsxs("div",{className:"p-6 rounded-xl bg-gradient-to-r from-cyan-950/30 to-slate-900/40 border border-cyan-500/40",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-cyan-300 mb-2 font-semibold",children:[l.jsx(wA,{className:"w-4 h-4 text-cyan-400"}),"THE CURRENT OBJECTIVE"]}),l.jsxs("p",{className:"text-sm sm:text-base text-slate-200 font-sans leading-relaxed",children:["Build AI systems that move beyond passive prediction and into ",l.jsx("strong",{className:"text-cyan-300",children:"perception"}),", ",l.jsx("strong",{className:"text-cyan-300",children:"reasoning"}),", and verifiable ",l.jsx("strong",{className:"text-cyan-300",children:"action"})," in the real world."]})]})]}),l.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[l.jsxs("div",{className:"p-6 rounded-xl glass-panel border border-slate-800",children:[l.jsxs("div",{className:"text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 flex items-center justify-between border-b border-slate-800 pb-2",children:[l.jsx("span",{children:"CHARACTER ARCHETYPE"}),l.jsx("span",{className:"text-cyan-400 font-bold",children:"#07-BUILDER"})]}),l.jsxs("div",{className:"space-y-4 font-mono text-xs",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-500 block text-[10px]",children:"CORE TRAIT:"}),l.jsx("span",{className:"text-slate-200 font-semibold",children:"Curiosity → Experimentation → Engineering → Deployment"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-500 block text-[10px]",children:"ENGINEERING PARADIGM:"}),l.jsx("span",{className:"text-slate-300",children:"Empirical verification over speculative assumption. Systems over single-turn prompts."})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-500 block text-[10px]",children:"OPERATIONAL STATUS:"}),l.jsxs("span",{className:"text-emerald-400 font-bold flex items-center gap-1.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"ACTIVE RESEARCH & DEVELOPMENT"]})]})]})]}),l.jsxs("div",{className:"p-6 rounded-xl glass-panel border border-cyan-500/20",children:[l.jsxs("div",{className:"text-xs font-mono text-cyan-400 tracking-wider uppercase mb-4 flex items-center gap-2",children:[l.jsx(gx,{className:"w-4 h-4 text-cyan-400"}),"THE SIGNATURE LOOP"]}),l.jsx("div",{className:"space-y-2",children:t.map((e,n)=>l.jsxs("div",{onMouseEnter:()=>Ee.playHover(),className:"p-2.5 rounded bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex items-center justify-between group",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("span",{className:"text-[10px] font-mono text-slate-500",children:["0",n+1]}),l.jsx("span",{className:"text-xs font-mono font-bold text-slate-200 group-hover:text-cyan-300",children:e.name})]}),l.jsx("span",{className:"text-[11px] font-mono text-slate-500 group-hover:text-slate-400",children:e.desc})]},e.name))})]})]})]})]})},Oc=[{id:"perception",index:"01",name:"PERCEPTION",code:"ABL-PERC-01",tagline:"Sensory Extraction & Spatial Modeling",description:"Transforming raw physical and optical signals into structured 3D spatial representations and semantic scene graphs.",technologies:["Computer Vision","LiDAR Point Clouds","Open3D","OpenCV","Voxelization","SPVCNN"],telemetry:[{label:"SENSOR DOMAIN",value:"3D LiDAR / RGB-D"},{label:"SPATIAL RESOLUTION",value:"Foveated / Sub-voxel"},{label:"PROCESSING RATE",value:"Real-Time / 40+ FPS"}],specifications:["Real-time 2.5D and 3D point cloud segmentation","Dynamic ROI voxelization & ground plane extraction","Stereo depth estimation and spatial registration"]},{id:"reasoning",index:"02",name:"REASONING",code:"ABL-RSNG-02",tagline:"Neural Architectures & Latent Computation",description:"Formulating deep representations, attention mechanics, and probabilistic inference structures.",technologies:["Machine Learning","Deep Learning","Transformers","LLMs & SLMs","Mathematical Foundations","PyTorch / CUDA"],telemetry:[{label:"CORE PARADIGM",value:"Attention / Self-Supervised"},{label:"COMPUTE PLATFORM",value:"CUDA Acceleration"},{label:"INFERENCE MODE",value:"Latent Reasoning / FP16"}],specifications:["Custom transformer architectures & fine-tuning","Mathematical optimization (gradient dynamics, loss landscapes)","Structured latent space manipulation & reasoning chains"]},{id:"memory",index:"03",name:"MEMORY",code:"ABL-MEM-03",tagline:"Dense Retrieval & Knowledge Graphs",description:"Engineering long-term persistence, high-dimensional vector search, and dynamic context synthesis.",technologies:["RAG Systems","Vector Databases","Dense Embeddings","Knowledge Retrieval","Cosine Similarity / HNSW","Semantic Chunking"],telemetry:[{label:"RETRIEVAL METHOD",value:"Hybrid Dense + Sparse"},{label:"INDEX STRUCTURE",value:"HNSW / IVF-PQ"},{label:"CONTEXT WINDOW",value:"Dynamic / Sliding RAG"}],specifications:["High-recall semantic document indexing and chunking","Vector database orchestration & cluster indexing","Reranking algorithms and hallucination mitigation"]},{id:"action",index:"04",name:"ACTION",code:"ABL-ACTN-04",tagline:"Autonomous Agency & Execution Loops",description:"Bridging cognition to measurable external execution via tool invocation, state validation, and error recovery.",technologies:["AI Agents","Tool Calling Protocols","Agentic State Machines","Task Orchestration","Self-Correction Loops","Automation"],telemetry:[{label:"AGENCY MODE",value:"Goal-Oriented Autonomous"},{label:"SAFETY PROTOCOL",value:"Deterministic Validation"},{label:"DISPATCH LATENCY",value:"Sub-second Execution"}],specifications:["Multi-agent collaborative workflows with deterministic routing","Structured function calling with JSON schema guarantees","Autonomous error diagnosis and execution rollback mechanisms"]},{id:"construction",index:"05",name:"CONSTRUCTION",code:"ABL-CNST-05",tagline:"Full-Spectrum Software Engineering",description:"Writing performant, maintainable, and type-safe systems from foundational low-level algorithms to reactive interfaces.",technologies:["Python","C++","JavaScript / TypeScript","React","FastAPI","PostgreSQL / SQL"],telemetry:[{label:"SYSTEM LANGUAGE",value:"Python / C++ / TypeScript"},{label:"BACKEND STACK",value:"FastAPI / Asynchronous I/O"},{label:"DATABASE ARCH",value:"Relational + Vector Store"}],specifications:["High-performance numerical algorithms and C++ integration","Asynchronous REST & WebSocket server architectures","Modern reactive web interfaces with strict type systems"]},{id:"deployment",index:"06",name:"DEPLOYMENT",code:"ABL-DPLY-06",tagline:"Infrastructure, MLOps & Production Pipelines",description:"Packaging, orchestrating, and monitoring intelligent workloads across cloud, edge, and continuous delivery systems.",technologies:["Docker","Cloud Infrastructure","AWS","MLOps Pipelines","GitHub Workflows","CI / CD Automation"],telemetry:[{label:"CONTAINERIZATION",value:"Docker / Multi-stage"},{label:"CLOUD TARGET",value:"AWS / Distributed"},{label:"DELIVERY PIPELINE",value:"Automated CI/CD"}],specifications:["Containerized model inference runtimes with GPU pass-through","Continuous integration, automated testing, and artifact deployment","Model tracking, versioning, and latency telemetry monitoring"]}],dD=()=>{const[t,e]=Ce.useState(Oc[0].id),n=a=>{switch(a){case"perception":return Qm;case"reasoning":return Pu;case"memory":return gA;case"action":return mo;case"construction":return yA;case"deployment":return mA;default:return cs}},i=Oc.find(a=>a.id===t)||Oc[0];return l.jsxs("section",{id:"abilities",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"02 // CHARACTER ABILITIES"})]}),l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["ENGINEERED ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"CAPABILITIES."})]}),l.jsx("p",{className:"text-sm font-mono text-slate-400 mt-4 max-w-xl",children:"Modular intelligence competencies structured for perception, neural representation, vector memory, agency, and production deployment."})]}),l.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-cyan-500/30 text-xs font-mono min-w-[280px]",children:[l.jsx("div",{className:"text-slate-500 text-[10px] uppercase mb-1",children:"CURRENT ACTIVE INSPECTION"}),l.jsxs("div",{className:"text-cyan-300 font-bold text-sm tracking-wider",children:[i.code," // ",i.name]}),l.jsx("div",{className:"text-slate-400 text-[11px] mt-1 truncate",children:i.tagline})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:Oc.map(a=>{const s=n(a.id),r=a.id===t;return l.jsxs("div",{onClick:()=>{Ee.playClick(),e(a.id)},onMouseEnter:()=>{Ee.playHover(),e(a.id)},className:`relative p-6 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden group ${r?"bg-slate-900/90 border border-cyan-500/60 shadow-xl shadow-cyan-950/40 -translate-y-1":"glass-panel hover:bg-slate-900/50 hover:border-slate-700"}`,"data-cursor":"ABILITY",children:[r&&l.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"}),l.jsxs("div",{className:"flex items-center justify-between font-mono text-xs mb-4",children:[l.jsxs("span",{className:"text-slate-500 font-bold group-hover:text-cyan-400 transition-colors",children:["ABILITY ",a.index]}),l.jsx("span",{className:"text-[11px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400",children:a.code})]}),l.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[l.jsx("div",{className:`p-2.5 rounded-lg border transition-colors ${r?"bg-cyan-950/60 border-cyan-500/60 text-cyan-300":"bg-slate-950 border-slate-800 text-slate-400 group-hover:text-slate-200"}`,children:l.jsx(s,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors",children:a.name}),l.jsx("p",{className:"text-xs font-mono text-slate-400",children:a.tagline})]})]}),l.jsx("p",{className:"text-xs font-sans text-slate-400 leading-relaxed mb-4",children:a.description}),l.jsx("div",{className:"flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80",children:a.technologies.map(o=>l.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-300 group-hover:border-cyan-500/20",children:o},o))}),l.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500",children:[l.jsx("span",{children:"TELEMETRY: SYNCHRONIZED"}),l.jsxs("span",{className:"text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1",children:["VIEW SPECS ",l.jsx(Km,{className:"w-3 h-3"})]})]})]},a.id)})}),l.jsxs("div",{className:"p-6 rounded-2xl glass-panel border border-cyan-500/30 bg-[#080c14]/90 font-mono",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs text-cyan-300 font-bold",children:[l.jsx(tl,{className:"w-4 h-4 text-cyan-400"}),l.jsxs("span",{children:["MODULE DEEP-TELEMETRY // ",i.code]})]}),l.jsxs("div",{className:"flex items-center gap-3 text-[11px] text-slate-400",children:[l.jsx("span",{children:"STATUS: ACTIVE CALIBRATION"}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsx("span",{className:"text-emerald-400",children:"OPTIMAL"})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",children:i.telemetry.map((a,s)=>l.jsxs("div",{className:"p-3 rounded-lg bg-slate-950/70 border border-slate-800/80",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase block mb-1",children:a.label}),l.jsx("span",{className:"text-xs text-slate-100 font-bold tracking-wide",children:a.value})]},s))}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[11px] text-slate-400 uppercase tracking-widest mb-3",children:"VERIFIED SPECIFICATIONS & ARCHITECTURAL PATTERNS:"}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs",children:i.specifications.map((a,s)=>l.jsxs("div",{className:"flex items-start gap-2.5 p-3 rounded bg-slate-950/50 border border-slate-800/60 text-slate-300",children:[l.jsx("span",{className:"text-cyan-400 font-bold mt-0.5",children:">"}),l.jsx("span",{children:a})]},s))})]})]})]})},fD=()=>{const[t,e]=Ce.useState(0),[n,i]=Ce.useState(!0),a=[{id:"perceive",step:"01",name:"PERCEIVE",tagline:"Sensory Ingestion & Signal Conversion",concept:"“Transform raw signals into structured information.”",mechanics:"Extract spatial geometries, LiDAR point clouds, optical frames, and multimodal streams into canonical feature tensors.",icon:Qm},{id:"understand",step:"02",name:"UNDERSTAND",tagline:"Contextual & Relational Grounding",concept:"“Formulate spatial, temporal, and semantic context graphs.”",mechanics:"Bind perceptual tokens into structured knowledge representations and dense vector embeddings anchored in physical reality.",icon:tp},{id:"reason",step:"03",name:"REASON",tagline:"Latent Inference & Uncertainty Evaluation",concept:"“Evaluate context, uncertainty, and possible actions.”",mechanics:"Simulate potential future states, weigh probabilistic risks, and evaluate multi-step causal dependencies.",icon:Pu},{id:"decide",step:"04",name:"DECIDE",tagline:"Trajectory Selection & Policy Filtering",concept:"“Select the optimal trajectory under safety invariants.”",mechanics:"Optimize policy outcomes against formal constraints, ensuring deterministic validation and goal alignment.",icon:YS},{id:"act",step:"05",name:"ACT",tagline:"Tool Calling & Measurable Agency",concept:"“Turn decisions into measurable outcomes.”",mechanics:"Dispatch validated tool calls, API payloads, robotic motor commands, or programmatic artifacts into the environment.",icon:TA},{id:"learn",step:"06",name:"LEARN",tagline:"Feedback Assimilation & Continual Adaptation",concept:"“Use environmental feedback to improve the system.”",mechanics:"Capture telemetry deltas, prediction errors, and execution traces to optimize memory retrieval and system weights.",icon:AA}];Ce.useEffect(()=>{if(!n)return;const r=setInterval(()=>{e(o=>(o+1)%a.length)},4500);return()=>clearInterval(r)},[n,a.length]);const s=a[t];return l.jsxs("section",{id:"the-mind",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"03 // THE MIND (INTELLIGENCE FLOW)"})]}),l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["LIVING COGNITIVE ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"ARCHITECTURE."})]}),l.jsx("p",{className:"text-sm font-mono text-slate-400 mt-4 max-w-xl",children:"The fundamental cognitive loop of CHARACTER-07: How intelligent systems perceive unstructured environments, formulate decisions, execute agency, and assimilate experience."})]}),l.jsxs("button",{onClick:()=>{Ee.playClick(),i(!n)},className:"glass-panel px-4 py-2 rounded-lg border border-slate-700 hover:border-cyan-500/50 text-xs font-mono text-slate-300 hover:text-cyan-300 flex items-center gap-2 transition-all cursor-pointer",children:[l.jsx(cs,{className:"w-3.5 h-3.5 text-cyan-400"}),l.jsx("span",{children:n?"[ PAUSE SIGNAL PROPAGATION ]":"[ RESUME SIGNAL FLOW ]"})]})]}),l.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10",children:a.map((r,o)=>{const c=r.icon,u=o===t;return l.jsxs("div",{onClick:()=>{Ee.playClick(),i(!1),e(o)},onMouseEnter:()=>{Ee.playHover(),i(!1),e(o)},className:`relative p-4 rounded-xl transition-all duration-300 cursor-pointer text-left flex flex-col justify-between min-h-[140px] group ${u?"bg-cyan-950/40 border border-cyan-400 shadow-lg shadow-cyan-500/20":"glass-panel border-slate-800/80 hover:border-slate-600"}`,"data-cursor":"NODE",children:[l.jsxs("div",{className:"flex items-center justify-between font-mono text-xs",children:[l.jsx("span",{className:"text-slate-500 font-bold group-hover:text-cyan-400",children:r.step}),u&&l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"})]}),l.jsxs("div",{className:"my-2",children:[l.jsx(c,{className:`w-6 h-6 mb-2 transition-colors ${u?"text-cyan-300":"text-slate-500 group-hover:text-slate-300"}`}),l.jsx("div",{className:`font-heading font-extrabold text-sm tracking-wide ${u?"text-white":"text-slate-300"}`,children:r.name})]}),l.jsx("div",{className:"w-full h-1 bg-slate-900 rounded-full overflow-hidden",children:l.jsx("div",{className:`h-full transition-all duration-500 ${u?"w-full bg-cyan-400 shadow-sm shadow-cyan-400":"w-0"}`})})]},r.id)})}),l.jsxs("div",{className:"relative p-8 rounded-2xl glass-panel border border-cyan-500/40 bg-gradient-to-br from-[#080c14] to-[#0d1322] overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"}),l.jsxs("div",{className:"relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-mono",children:[l.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-xs text-cyan-300",children:[l.jsx(mo,{className:"w-3.5 h-3.5 text-cyan-400"}),l.jsxs("span",{children:["COGNITIVE STAGE ",s.step," OF 06"]})]}),l.jsx("h3",{className:"text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight",children:s.name}),l.jsx("p",{className:"text-xl sm:text-2xl text-cyan-300 font-sans font-light italic leading-snug",children:s.concept}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-2",children:s.mechanics})]}),l.jsxs("div",{className:"lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-3.5 text-xs text-slate-400",children:[l.jsxs("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2 flex justify-between",children:[l.jsx("span",{children:"SYSTEM INVARIANT"}),l.jsx("span",{className:"text-cyan-400",children:"ENFORCED"})]}),l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{children:"TARGET INPUT:"}),l.jsx("span",{className:"text-slate-200",children:"Raw Sensor & Multimodal Embeddings"})]}),l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{children:"INTERMEDIATE STATE:"}),l.jsxs("span",{className:"text-cyan-300 font-semibold",children:[s.name,"_PASS_01"]})]}),l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{children:"LATENCY TOLERANCE:"}),l.jsx("span",{className:"text-emerald-400 font-mono",children:"< 30 ms"})]}),l.jsx("div",{className:"pt-2 border-t border-slate-800 text-[11px] text-slate-400",children:"“Every intelligent action is grounded in continuous perceptual calibration.”"})]})]})]})]})},hD=[{id:"mission-001",code:"MSN-001",title:"FOVEATED 2.5D LiDAR MAPPING",domain:"Autonomous Navigation & 3D Perception",status:"COMPLETED",classification:"PUBLIC",summary:"A variable-resolution 2.5D LiDAR mapping pipeline engineered for real-time autonomous vehicle semantic understanding.",objective:"Design and implement a high-throughput, low-latency point-cloud perception pipeline that prioritizes dynamic regions of interest while maintaining global spatial context.",problem:"Standard dense 3D voxelization suffers from severe cubic memory scaling and high computational latency on embedded edge hardware, leading to dropped frames in critical navigation loops.",approach:"Implemented a foveated variable-resolution voxelization strategy that dynamically concentrates density around high-frequency navigational corridors and trajectory vectors, coupled with sparse convolutional backbones for ultra-fast feature extraction.",pipeline:["RAW LiDAR INPUT","PREPROCESSING & GROUND REMOVAL","FOVEATED VOXELIZATION","LABEL REMAPPING & COMPRESSION","PERSISTENT CACHE STREAM","PYTORCH DATASET LOADER","SPARSE CONV NEURAL NETWORK (SPVCNN)","SPATIAL VALIDATION & METRIC EVALUATION"],metrics:[{label:"Mean Intersection over Union (mIoU)",value:"52.05",unit:"%",verified:!0,description:"Validated against benchmark semantic segmentation test sets."},{label:"Production-Equivalent Latency",value:"23.37",unit:"ms",verified:!0,description:"End-to-end inference pass on embedded target hardware."},{label:"Throughput (FPS)",value:"42.79",unit:"FPS",verified:!0,description:"Exceeds 30 FPS real-time automotive sensor refresh rates."},{label:"Prediction Agreement",value:"99.93",unit:"%",verified:!0,description:"Cross-validation consistency across consecutive temporal scans."},{label:"Dropped Frames",value:"0 / 100",unit:"",verified:!0,description:"Zero pipeline stalls or buffer overruns in sustained 100-frame stress test."}],techStack:["PyTorch","CUDA","Open3D","OpenCV","SPVCNN","PointNet++","NumPy","Python"],results:["Achieved 52.05% mIoU under aggressive variable voxel sparsity.","Maintained 42.79 FPS sustained throughput, operating comfortably within automotive real-time deadlines (23.37 ms latency).","Guaranteed zero dropped frames (0/100) under full lidar point clouds stream."],lessons:["Voxel sparsity patterns must directly align with vehicle kinematics and braking distances.","Custom memory caching eliminates I/O bottlenecks in PyTorch DataLoader queues during high-velocity inference."],githubUrl:"https://github.com/atleekumaar",hasCaseStudy:!0},{id:"mission-002",code:"MSN-002",title:"DYNAMIC AGENTIC TOOL ORCHESTRATION",domain:"Agentic Systems & Deterministic Execution",status:"IN DEVELOPMENT",classification:"RESTRICTED",summary:"A resilient multi-agent coordination architecture combining LLM planning loops with strict schema validation and execution checkpoints.",objective:"Eliminate hallucinations and cyclic failures in autonomous multi-step software tasks by enforcing deterministic state transitions.",problem:"Unconstrained LLM agent loops frequently drift, hallucinate parameters, and fail during complex multi-tool dependencies without explicit state rollbacks.",approach:"Developing a graph-based state machine architecture with contract-enforced tool schemas, isolated sandbox runtimes, and self-correcting validation layers.",pipeline:["USER TELEMETRY INTENT","CONTEXT RETRIEVAL & VECTOR ANCHORS","PLANNING & SUB-TASK DECOMPOSITION","AGENT DISPATCH & TOOL SELECTION","SANDBOX EXECUTION RUNTIME","STATE VERIFICATION & SELF-CORRECTION","RESULT SYNTHESIS & USER DISPATCH"],metrics:[{label:"System State",value:"ACTIVE DEV",verified:!1,description:"Under active architectural refinement."},{label:"Target Architecture",value:"GRAPH-BASED",verified:!1,description:"Deterministic state transitions and fallback checkpoints."}],techStack:["Python","FastAPI","LangGraph / Custom Agent Loop","Vector DB / Embeddings","Docker Sandbox","PostgreSQL"],results:["Preliminary benchmarks show reduced agent drift on multi-step workflows.","Schema-based validation prevents invalid parameter execution at runtime."],lessons:["Agents are only as reliable as their tool contracts and error-recovery telemetry."],githubUrl:"https://github.com/atleekumaar",hasCaseStudy:!0},{id:"mission-003",code:"MSN-003",title:"AUTONOMOUS INTELLIGENCE (EMBODIED COGNITION)",domain:"Perception-Reasoning-Action Systems",status:"RESEARCH CONCEPT",classification:"RESEARCH",summary:"Conceptual research into unified cognitive architectures that seamlessly bind real-world sensory inputs to goal-directed motor and computational actions.",objective:"Formulate architectures that move beyond passive next-token prediction towards grounded world modeling, uncertainty-aware reasoning, and physical actuation.",problem:"Current frontier models operate primarily on static text or disconnected multimodal tokens without continuous causal feedback loops from physical environments.",approach:"Investigating hybrid frameworks merging real-time 3D spatial representations (LiDAR/NeRF/Gaussian Splatting) with hierarchical reasoning modules and policy executors.",pipeline:["MULTIMODAL SENSORY STREAM","WORLD MODEL LATENT ENCODING","PROBABILISTIC GOAL EVALUATION","POLICY OPTIMIZATION & ACTION SAMPLING","REAL-WORLD ACTUATION / API DISPATCH","CONTINUAL REWARD & MODEL ADAPTATION"],metrics:[{label:"Status",value:"THEORETICAL",verified:!1,description:"Active exploration & architectural research papers."},{label:"Era Horizon",value:"2026 - 2042",verified:!1,description:"Long-term engineering objective of CHARACTER-07."}],techStack:["World Models","Diffusion Policies","Reinforcement Learning","Spatial Computing","ROS2 / Robotics Simulators"],results:["Mathematical formulation of hierarchical perception-to-action graph.","Initial simulation setups for spatial grounding and dynamic obstacle navigation."],lessons:["True intelligence emerges at the intersection of perception, memory, and physical/digital agency."],githubUrl:"https://github.com/atleekumaar",hasCaseStudy:!0}],pD=({mission:t,onOpenCaseStudy:e})=>{const n=t.status==="COMPLETED",i=t.status==="IN DEVELOPMENT",a=t.status==="RESEARCH CONCEPT";return l.jsxs("div",{className:`relative p-6 sm:p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden ${n?"bg-gradient-to-b from-[#0a0e18] to-[#070a12] border border-cyan-500/30 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-950/40":i?"bg-[#080b12] border border-amber-500/20 hover:border-amber-500/40":"bg-[#080b12] border border-slate-800 hover:border-slate-700"}`,children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between font-mono text-xs mb-4",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-300 font-bold",children:t.code}),l.jsxs("span",{className:"text-[11px] text-slate-500 font-medium",children:["// ",t.domain]})]}),l.jsx("span",{className:`text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider ${n?"bg-emerald-950/50 border border-emerald-500/40 text-emerald-300":i?"bg-amber-950/50 border border-amber-500/40 text-amber-300":"bg-cyan-950/50 border border-cyan-500/40 text-cyan-300"}`,children:t.status})]}),l.jsx("h3",{className:"text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-tight",children:t.title}),l.jsx("p",{className:"text-xs sm:text-sm font-sans text-slate-400 leading-relaxed mb-6",children:t.summary}),t.metrics&&t.metrics.length>0&&l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6 font-mono",children:[l.jsxs("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest mb-3 flex items-center justify-between",children:[l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx(cs,{className:"w-3.5 h-3.5 text-cyan-400"}),"VERIFIED HARDWARE BENCHMARKS"]}),l.jsx("span",{className:"text-emerald-400",children:"AUTHENTICATED"})]}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:t.metrics.slice(0,3).map((s,r)=>l.jsxs("div",{className:"p-2 rounded bg-[#070a10] border border-slate-900",children:[l.jsx("div",{className:"text-[9px] text-slate-500 uppercase truncate",children:s.label}),l.jsxs("div",{className:"text-base sm:text-lg font-bold text-white flex items-baseline gap-1 mt-0.5",children:[l.jsx("span",{className:"text-cyan-300",children:s.value}),s.unit&&l.jsx("span",{className:"text-[10px] text-slate-400",children:s.unit})]})]},r))})]}),i&&l.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/10 border border-amber-500/20 mb-6 font-mono text-xs text-amber-200/80 flex items-center gap-3",children:[l.jsx(SA,{className:"w-5 h-5 text-amber-400 shrink-0"}),l.jsxs("div",{children:[l.jsx("div",{className:"font-bold text-amber-300",children:"ARCHITECTURE IN ACTIVE DEVELOPMENT"}),l.jsx("div",{className:"text-[11px] text-slate-400",children:"Strict schema validation & multi-agent execution loops."})]})]}),a&&l.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/10 border border-cyan-500/20 mb-6 font-mono text-xs text-cyan-200/80 flex items-center gap-3",children:[l.jsx(mo,{className:"w-5 h-5 text-cyan-400 shrink-0"}),l.jsxs("div",{children:[l.jsx("div",{className:"font-bold text-cyan-300",children:"HORIZON 2042 RESEARCH INITIATIVE"}),l.jsx("div",{className:"text-[11px] text-slate-400",children:"Perception-to-action world model grounding."})]})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5 mb-6",children:t.techStack.map(s=>l.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-300",children:s},s))})]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 font-mono text-xs",children:[l.jsxs("button",{onClick:()=>{Ee.playClick(),e(t)},onMouseEnter:()=>Ee.playHover(),className:"px-4 py-2.5 rounded-lg bg-cyan-950/30 hover:bg-cyan-900/40 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white flex items-center gap-2 transition-all cursor-pointer","data-cursor":"CASE STUDY",children:[l.jsx("span",{children:"[ VIEW CASE STUDY ]"}),l.jsx(gd,{className:"w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"})]}),t.githubUrl&&l.jsxs("a",{href:t.githubUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>Ee.playClick(),onMouseEnter:()=>Ee.playHover(),className:"px-4 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center gap-2 transition-all cursor-pointer","data-cursor":"GITHUB",children:[l.jsx("span",{children:"[ VIEW GITHUB ]"}),l.jsx(Gs,{className:"w-3.5 h-3.5"})]})]})]})},mD=({mission:t,onClose:e})=>(Ce.useEffect(()=>{const n=i=>{i.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),t?l.jsxs("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in",children:[l.jsx("div",{className:"fixed inset-0 -z-10",onClick:e}),l.jsxs("div",{className:"relative w-full max-w-4xl bg-[#080c14] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden font-mono text-slate-200 my-8",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/80",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-7 h-7 rounded bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-bold text-xs",children:t.code.split("-")[1]}),l.jsxs("div",{children:[l.jsxs("div",{className:"text-xs text-cyan-400 font-semibold tracking-wider",children:["MISSION DOSSIER // ",t.code]}),l.jsxs("div",{className:"text-[10px] text-slate-500",children:["DOMAIN: ",t.domain]})]})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:`text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider ${t.status==="COMPLETED"?"bg-emerald-950/40 border border-emerald-500/40 text-emerald-300":t.status==="IN DEVELOPMENT"?"bg-amber-950/40 border border-amber-500/40 text-amber-300":"bg-cyan-950/40 border border-cyan-500/40 text-cyan-300"}`,children:t.status}),l.jsx("button",{onClick:()=>{Ee.playClick(),e()},className:"p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors cursor-pointer","data-cursor":"CLOSE",children:l.jsx(xd,{className:"w-4 h-4"})})]})]}),l.jsxs("div",{className:"p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8 font-sans",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-3",children:t.title}),l.jsx("p",{className:"text-sm sm:text-base text-slate-300 font-normal leading-relaxed",children:t.summary})]}),t.metrics&&t.metrics.length>0&&l.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/80 border border-cyan-500/30",children:[l.jsxs("div",{className:"text-[11px] font-mono text-cyan-400 uppercase tracking-widest mb-4 flex items-center justify-between",children:[l.jsxs("span",{className:"flex items-center gap-2",children:[l.jsx(cs,{className:"w-3.5 h-3.5"}),"VERIFIED EMPIRICAL BENCHMARKS"]}),l.jsx("span",{className:"text-[10px] text-slate-500",children:"HARDWARE VALIDATED"})]}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3",children:t.metrics.map((n,i)=>l.jsxs("div",{className:"p-3 rounded bg-[#0b0f19] border border-slate-800",children:[l.jsx("div",{className:"text-[10px] font-mono text-slate-400 uppercase truncate mb-1",children:n.label}),l.jsxs("div",{className:"text-xl sm:text-2xl font-mono font-bold text-white flex items-baseline gap-1",children:[l.jsx("span",{className:"text-cyan-300",children:n.value}),n.unit&&l.jsx("span",{className:"text-xs text-slate-400",children:n.unit})]}),n.description&&l.jsx("div",{className:"text-[10px] text-slate-500 mt-1 leading-tight",children:n.description})]},i))})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"p-5 rounded-xl glass-panel border border-slate-800",children:[l.jsxs("div",{className:"text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-rose-500"}),"THE PROBLEM"]}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed font-sans",children:t.problem})]}),l.jsxs("div",{className:"p-5 rounded-xl glass-panel border border-cyan-500/30",children:[l.jsxs("div",{className:"text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 font-bold flex items-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),"THE APPROACH"]}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed font-sans",children:t.approach})]})]}),t.pipeline&&t.pipeline.length>0&&l.jsxs("div",{children:[l.jsxs("div",{className:"text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2",children:[l.jsx(Jm,{className:"w-4 h-4 text-cyan-400"}),"ENGINEERING EXECUTION PIPELINE"]}),l.jsx("div",{className:"space-y-2 font-mono text-xs",children:t.pipeline.map((n,i)=>l.jsxs("div",{className:"flex items-center gap-3 p-3 rounded bg-slate-950/70 border border-slate-800/80",children:[l.jsxs("span",{className:"w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] text-cyan-300 font-bold shrink-0",children:["0",i+1]}),l.jsx("span",{className:"text-slate-200 font-semibold",children:n})]},i))})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2",children:[l.jsx(mo,{className:"w-4 h-4 text-cyan-400"}),"SYSTEM TECHNOLOGIES"]}),l.jsx("div",{className:"flex flex-wrap gap-2",children:t.techStack.map(n=>l.jsx("span",{className:"px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 font-medium",children:n},n))})]}),t.results&&l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800",children:[l.jsxs("div",{className:"text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-2",children:[l.jsx(hA,{className:"w-4 h-4"}),"KEY OUTCOMES"]}),l.jsx("ul",{className:"space-y-2 text-xs text-slate-300 list-disc list-inside",children:t.results.map((n,i)=>l.jsx("li",{children:n},i))})]}),t.lessons&&l.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800",children:[l.jsxs("div",{className:"text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-2",children:[l.jsx(cs,{className:"w-4 h-4"}),"ARCHITECTURAL LESSONS"]}),l.jsx("ul",{className:"space-y-2 text-xs text-slate-300 list-disc list-inside",children:t.lessons.map((n,i)=>l.jsx("li",{children:n},i))})]})]}),l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80 font-mono text-xs",children:[l.jsx("div",{className:"text-slate-500",children:"MISSION STATUS VERIFICATION: ACCREDITED"}),t.githubUrl&&l.jsxs("a",{href:t.githubUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>Ee.playClick(),className:"px-5 py-2.5 rounded bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-white flex items-center gap-2 transition-all cursor-pointer",children:[l.jsx("span",{children:"[ VIEW REPOSITORY ON GITHUB ]"}),l.jsx(Gs,{className:"w-3.5 h-3.5"})]})]})]})]})]}):null),gD=()=>{const[t,e]=Ce.useState(null),[n,i]=Ce.useState("ALL"),a=hD.filter(s=>n==="ALL"?!0:s.status===n);return l.jsxs("section",{id:"missions",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"04 // MISSION LOG"})]}),l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["ENGINEERING ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"MISSIONS."})]}),l.jsx("p",{className:"text-sm font-mono text-slate-400 mt-4 max-w-xl",children:"Not standard projects. Completed engineering missions, verified hardware benchmarks, active architectural developments, and research concepts."})]}),l.jsx("div",{className:"flex flex-wrap items-center gap-2 p-1.5 rounded-xl glass-panel border border-slate-800 font-mono text-xs",children:["ALL","COMPLETED","IN DEVELOPMENT","RESEARCH CONCEPT"].map(s=>l.jsx("button",{onClick:()=>{Ee.playClick(),i(s)},className:`px-3 py-1.5 rounded-lg transition-all ${n===s?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm":"text-slate-400 hover:text-white hover:bg-slate-800/40"}`,children:s},s))})]}),l.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:a.map(s=>l.jsx(pD,{mission:s,onOpenCaseStudy:r=>e(r)},s.id))}),l.jsx(mD,{mission:t,onClose:()=>e(null)})]})},Ic=[{id:"exp-014",code:"EXP-014",title:"AGENT MEMORY & RECURRENT CONTEXT PERSISTENCE",status:"RUNNING",domain:"Agentic Cognition",hypothesis:"Can long-term episodic vector retrieval combined with state checkpointing eliminate catastrophic context drift across 100+ autonomous agent turns?",methodology:"Testing dual-tier memory (working RAM buffer + compressed long-term vector embeddings) with self-reflection pruning at periodic loop intervals.",result:"ONGOING",findings:["Working memory decay is significantly mitigated with structured summary tokens.","Vector search latency must remain <15ms to avoid stalling tool dispatch loops."],tags:["LLM Agents","Vector Memory","Context Preservation"]},{id:"exp-021",code:"EXP-021",title:"FOVEATED VOXEL DENSITY ADAPTATION",status:"COMPLETED",domain:"3D Perception",hypothesis:"Will dynamic distance-weighted voxel partitioning preserve critical obstacle boundary detection while slashing memory footprint by over 60%?",methodology:"Implemented radial geometric attenuation on raw point clouds prior to sparse 3D convolution passes.",result:"VERIFIED",findings:["Achieved 64.2% reduction in peak GPU memory usage during dense cloud parsing.","Critical obstacle recall remained at 99.8% across benchmark scenarios."],tags:["LiDAR","Sparse Voxelization","Edge Inference"]},{id:"exp-009",code:"EXP-009",title:"LATENT EMBEDDING QUANTIZATION FIDELITY",status:"COMPLETED",domain:"Vector Retrieval & Compression",hypothesis:"Can scalar and vector quantization techniques compress embedding indexes by 4x while maintaining >98% semantic retrieval accuracy?",methodology:"Benchmarked FP32 vs FP16 vs INT8 quantization on 1536-dimensional latent vectors using HNSW indexing.",result:"VERIFIED",findings:["INT8 scalar quantization preserved 98.4% of top-k ranking precision.","Index memory footprint reduced from 1.2 GB to 310 MB on target datasets."],tags:["Embeddings","HNSW","Vector DB"]},{id:"exp-033",code:"EXP-033",title:"STOCHASTIC MULTI-MODAL TOOL DISPATCH",status:"IN PROGRESS",domain:"Autonomous Execution",hypothesis:"Can an autonomous planner accurately synthesize multi-modal sensor inputs to select the correct external API under simulated sensor packet loss?",methodology:"Injecting simulated 10-30% packet corruption and measuring fallback recovery time and execution success rates.",result:"IN PROGRESS",findings:["Deterministic schema guards successfully trapped 100% of malformed payloads.","Adaptive retry backoff reduced cascading loop failures."],tags:["Tool Calling","Fault Tolerance","Autonomous Systems"]}],xD=()=>{const[t,e]=Ce.useState(Ic[0].id),n=Ic.find(i=>i.id===t)||Ic[0];return l.jsxs("section",{id:"laboratory",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"05 // THE LAB"})]}),l.jsxs("div",{className:"mb-16",children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["EXPERIMENTAL ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"LABORATORY."})]}),l.jsx("p",{className:"text-base sm:text-lg font-mono text-cyan-300 mt-4 max-w-2xl font-semibold",children:"NOT EVERYTHING IS A PRODUCT. SOME THINGS ARE EXPERIMENTS."}),l.jsx("p",{className:"text-xs sm:text-sm font-mono text-slate-400 mt-2 max-w-xl",children:"Active empirical hypotheses exploring long-term vector memory, foveated point-cloud compression, quantization fidelity, and multi-modal tool calling."})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[l.jsx("div",{className:"lg:col-span-5 space-y-4",children:Ic.map(i=>{const a=i.id===t,s=i.status==="RUNNING"||i.status==="IN PROGRESS";return l.jsxs("div",{onClick:()=>{Ee.playClick(),e(i.id)},onMouseEnter:()=>{Ee.playHover(),e(i.id)},className:`p-5 rounded-xl transition-all duration-300 cursor-pointer text-left group ${a?"bg-slate-900 border border-cyan-500/60 shadow-lg shadow-cyan-950/40":"glass-panel border-slate-800/80 hover:border-slate-700"}`,"data-cursor":"EXP",children:[l.jsxs("div",{className:"flex items-center justify-between font-mono text-xs mb-2",children:[l.jsx("span",{className:"text-cyan-400 font-bold",children:i.code}),l.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded font-bold uppercase flex items-center gap-1.5 ${s?"bg-cyan-950/60 text-cyan-300 border border-cyan-500/40":"bg-emerald-950/60 text-emerald-300 border border-emerald-500/40"}`,children:[s&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),i.status]})]}),l.jsx("div",{className:"text-sm sm:text-base font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-2",children:i.title}),l.jsxs("div",{className:"text-xs font-mono text-slate-400 line-clamp-2 mb-3",children:[l.jsx("span",{className:"text-slate-500",children:"HYPOTHESIS: "}),i.hypothesis]}),l.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60",children:[l.jsxs("span",{children:["DOMAIN: ",i.domain]}),l.jsxs("span",{className:"text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1",children:["INSPECT ",l.jsx(Km,{className:"w-3 h-3"})]})]})]},i.id)})}),l.jsxs("div",{className:"lg:col-span-7 rounded-2xl glass-panel border border-cyan-500/30 p-6 sm:p-8 font-mono bg-[#080c14]/90 space-y-6",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs text-cyan-400 font-bold",children:[l.jsx(_A,{className:"w-4 h-4"}),l.jsxs("span",{children:["LABORATORY LOG // ",n.code]})]}),l.jsxs("div",{className:"text-[11px] text-slate-400 flex items-center gap-2",children:[l.jsx("span",{children:"STATUS:"}),l.jsx("span",{className:"text-cyan-300 font-bold uppercase",children:n.status})]})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest mb-1",children:"EXPERIMENT TITLE"}),l.jsx("div",{className:"text-xl sm:text-2xl font-heading font-extrabold text-white",children:n.title})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800",children:[l.jsxs("div",{className:"text-[10px] text-cyan-400 uppercase tracking-widest mb-2 font-bold flex items-center gap-1.5",children:[l.jsx(cs,{className:"w-3.5 h-3.5"}),"CORE HYPOTHESIS"]}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-200 font-sans leading-relaxed",children:n.hypothesis})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800",children:[l.jsx("div",{className:"text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-bold",children:"EMPIRICAL METHODOLOGY"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-300 font-sans leading-relaxed",children:n.methodology})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-bold",children:"EXPERIMENTAL FINDINGS & LOG TELEMETRY"}),l.jsx("div",{className:"space-y-2",children:n.findings.map((i,a)=>l.jsxs("div",{className:"flex items-start gap-2.5 p-3 rounded bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 font-sans",children:[l.jsx("span",{className:"text-cyan-400 font-mono font-bold mt-0.5",children:">"}),l.jsx("span",{children:i})]},a))})]}),l.jsx("div",{className:"flex flex-wrap gap-2 pt-2 border-t border-slate-800",children:n.tags.map(i=>l.jsxs("span",{className:"px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-cyan-300",children:["#",i]},i))})]})]})]})},_v=[{level:"05",number:"LAYER 05",name:"INFRASTRUCTURE & ORCHESTRATION",category:"CLOUD & DEPLOYMENT",description:"Distributed cloud infrastructure, GPU cluster orchestration, continuous deployment, and telemetry monitoring pipelines.",technologies:[{name:"AWS",role:"Cloud compute & storage primitives",badge:"Cloud"},{name:"Cloud Compute",role:"Scalable elastic compute instances",badge:"Infra"},{name:"MLOps",role:"Model registry, experiment tracking & telemetry",badge:"Ops"},{name:"CI / CD Workflows",role:"Automated testing, linting & deployment",badge:"Pipeline"}]},{level:"04",number:"LAYER 04",name:"INTELLIGENT APPLICATIONS",category:"COGNITIVE ARCHITECTURES",description:"Orchestration of frontier reasoning engines, dense semantic retrieval pipelines, vector indexers, and autonomous agent loops.",technologies:[{name:"RAG Pipelines",role:"Context grounding & non-parametric retrieval",badge:"Retrieval"},{name:"LLMs / SLMs",role:"Generative reasoning & structured output parsing",badge:"Cognition"},{name:"AI Agents",role:"Deterministic tool calling & state machines",badge:"Agency"},{name:"Vector Databases",role:"High-dimensional similarity indexing (HNSW)",badge:"Indexing"}]},{level:"03",number:"LAYER 03",name:"SYSTEMS & PERSISTENCE",category:"BACKEND RUNTIMES",description:"High-throughput asynchronous web APIs, relational data stores, high-speed memory caches, and container isolation.",technologies:[{name:"FastAPI",role:"High-performance asynchronous Python API framework",badge:"API"},{name:"PostgreSQL",role:"ACID-compliant relational database & SQL store",badge:"Database"},{name:"Redis",role:"In-memory caching & session state store",badge:"Cache"},{name:"Docker",role:"Containerized reproducible execution environments",badge:"Runtime"}]},{level:"02",number:"LAYER 02",name:"INTELLIGENCE ENGINE",category:"DEEP LEARNING RUNTIMES",description:"Numerical tensor manipulation, automatic differentiation, neural network layer abstractions, and GPU-accelerated computing.",technologies:[{name:"NumPy",role:"N-dimensional array computation & linear algebra",badge:"Math"},{name:"Pandas",role:"High-performance data manipulation & tabular analysis",badge:"Data"},{name:"PyTorch",role:"Dynamic computation graph & deep learning framework",badge:"Deep Learning"},{name:"TensorFlow",role:"Production machine learning models & pipelines",badge:"Framework"},{name:"Transformers",role:"State-of-the-art attention & sequence modeling",badge:"NLP"}]},{level:"01",number:"LAYER 01",name:"COMPUTATIONAL FOUNDATION",category:"CORE LANGUAGES",description:"Low-level system efficiency, high-velocity algorithmic scripting, and modern reactive interface architecture.",technologies:[{name:"Python",role:"Primary language for AI, data pipelines & agent loops",badge:"Primary"},{name:"C++",role:"High-performance systems, CUDA kernels & Open3D",badge:"Performance"},{name:"JavaScript / TypeScript",role:"Modern type-safe reactive interfaces & WebGL",badge:"Interface"}]}],vD=()=>{const[t,e]=Ce.useState(_v[0].level);return l.jsxs("section",{id:"stack",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"06 // SYSTEM STACK"})]}),l.jsxs("div",{className:"mb-16",children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["LAYERED SYSTEM ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"ARCHITECTURE."})]}),l.jsx("p",{className:"text-sm font-mono text-slate-400 mt-4 max-w-xl",children:"Engineered as a cohesive multi-tier stack: from foundational low-level efficiency to frontier cognitive agents and distributed cloud infrastructure."})]}),l.jsx("div",{className:"space-y-4",children:_v.map(n=>{const i=n.level===t;return l.jsxs("div",{onClick:()=>{Ee.playClick(),e(n.level)},onMouseEnter:()=>{Ee.playHover(),e(n.level)},className:`p-6 rounded-xl transition-all duration-300 cursor-pointer ${i?"bg-slate-900/90 border border-cyan-500/60 shadow-xl shadow-cyan-950/40":"glass-panel border-slate-800/80 hover:border-slate-700"}`,"data-cursor":"STACK",children:[l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsxs("div",{className:`p-3 rounded-lg border font-mono font-bold text-sm ${i?"bg-cyan-950 border-cyan-500/60 text-cyan-300":"bg-slate-950 border-slate-800 text-slate-500"}`,children:["L",n.level]}),l.jsxs("div",{children:[l.jsx("div",{className:"flex items-center gap-2",children:l.jsxs("span",{className:"text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold",children:[n.number," // ",n.category]})}),l.jsx("h3",{className:"text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors",children:n.name})]})]}),l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:n.technologies.map(a=>l.jsxs("div",{className:`px-3 py-1.5 rounded-lg border font-mono text-xs flex items-center gap-2 transition-all ${i?"bg-cyan-950/40 border-cyan-500/40 text-white":"bg-slate-950/70 border-slate-800 text-slate-300"}`,children:[l.jsx("span",{className:"font-semibold",children:a.name}),l.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-700",children:a.badge})]},a.name))})]}),i&&l.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-xs font-mono animate-fade-in",children:[l.jsx("div",{className:"md:col-span-8 text-slate-300 font-sans leading-relaxed",children:n.description}),l.jsx("div",{className:"md:col-span-4 flex justify-end gap-2 text-[11px] text-cyan-400",children:l.jsx("span",{children:"STATE: PRODUCTION VERIFIED"})})]})]},n.level)})})]})},Uo=[{id:"mem-01",step:"01",title:"FOUNDATIONAL CODE",era:"PHASE I",tagline:"Deterministic Computation & Logic Structures",description:"Mastery of algorithmic thinking, data structures, and computational complexity in Python, C++, and modern languages.",breakthrough:"Understanding computers as deterministic state transformation machines.",acquiredCapabilities:["Algorithms & Data Structures","Object-Oriented Design","Memory Management","Clean Architecture"],status:"INTEGRATED"},{id:"mem-02",step:"02",title:"MACHINE LEARNING",era:"PHASE II",tagline:"Statistical Learning & Feature Spaces",description:"Transition from handcrafted rules to statistical inference, regression, classification, and mathematical loss formulation.",breakthrough:"Replacing rigid if-else logic with parameter optimization over empirical data distributions.",acquiredCapabilities:["Gradient Descent","Feature Engineering","Statistical Validation","Loss Landscapes"],status:"INTEGRATED"},{id:"mem-03",step:"03",title:"DEEP LEARNING",era:"PHASE III",tagline:"Hierarchical Neural Representations",description:"Deep multi-layer perceptrons, convolutional networks, backpropagation dynamics, and GPU-accelerated tensor computation.",breakthrough:"Hierarchical feature abstraction directly from raw high-dimensional tensors.",acquiredCapabilities:["PyTorch Tensor Workflows","CUDA Acceleration","Backpropagation","Regularization"],status:"INTEGRATED"},{id:"mem-04",step:"04",title:"COMPUTER VISION & 3D",era:"PHASE IV",tagline:"Spatial Understanding & Point Clouds",description:"Processing 2D optical frames and raw 3D LiDAR point clouds into semantic segmentations and spatial geometry.",breakthrough:"Building real-time Foveated 2.5D LiDAR pipelines achieving 52.05% mIoU at 42.79 FPS.",acquiredCapabilities:["LiDAR Point Clouds","Voxelization","Open3D / OpenCV","Spatial Segmentation"],status:"INTEGRATED"},{id:"mem-05",step:"05",title:"TRANSFORMERS & ATTENTION",era:"PHASE V",tagline:"Self-Attention & Sequence Modeling",description:"Investigating quadratic self-attention mechanics, query-key-value projections, and multi-head representation spaces.",breakthrough:"Global relational modeling without fixed convolutional receptive field constraints.",acquiredCapabilities:["Attention Mechanisms","Positional Encodings","Transformer Backbones","Latent Routing"],status:"INTEGRATED"},{id:"mem-06",step:"06",title:"LARGE LANGUAGE MODELS",era:"PHASE VI",tagline:"Generative Pretraining & Few-Shot Reasoning",description:"Exploring autoregressive next-token prediction, instruction fine-tuning, prompt decomposition, and emergent capabilities.",breakthrough:"Natural language as a universal interface for semantic computation.",acquiredCapabilities:["Prompt Engineering","Fine-Tuning","Sampling Strategies","Structured Output Parsing"],status:"INTEGRATED"},{id:"mem-07",step:"07",title:"RETRIEVAL-AUGMENTED GENERATION",era:"PHASE VII",tagline:"External Episodic Memory & Vector Indexing",description:"Augmenting parametric neural weights with non-parametric dense vector stores, knowledge graphs, and hybrid retrieval.",breakthrough:"Grounding generative models with deterministic, verifiable knowledge retrieval.",acquiredCapabilities:["Vector Embeddings","HNSW Indexing","Semantic Chunking","Reranking"],status:"OPTIMIZED"},{id:"mem-08",step:"08",title:"AI AGENTS & TOOL CALLING",era:"PHASE VIII",tagline:"Agency, Decision Graphs & Tool Dispatch",description:"Constructing multi-step autonomous execution loops with structured schema enforcement and self-correcting validation.",breakthrough:"Transforming passive models into active problem-solvers that execute tools in external environments.",acquiredCapabilities:["Agentic State Machines","Deterministic Tool Calling","Error Recovery","Multi-Agent Routing"],status:"ACTIVE EVOLUTION"},{id:"mem-09",step:"09",title:"AUTONOMOUS INTELLIGENCE",era:"PHASE IX (ERA 2042)",tagline:"Perception, Reasoning & Physical Action",description:"The ultimate frontier: fully embodied, closed-loop autonomous intelligence that continuously perceives, reasons, and acts in the physical world.",breakthrough:"Unified world models and self-adapting policy execution.",acquiredCapabilities:["Closed-Loop Systems","World Modeling","Embodied Agency","Continual Learning"],status:"ACTIVE EVOLUTION"}],_D=()=>{const[t,e]=Ce.useState(Uo[Uo.length-1].id),n=Uo.find(i=>i.id===t)||Uo[0];return l.jsxs("section",{id:"memory",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"07 // CHARACTER MEMORY"})]}),l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["EVOLUTIONARY ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"MEMORY TREE."})]}),l.jsx("p",{className:"text-sm font-mono text-slate-400 mt-4 max-w-xl",children:"Every acquired engineering discipline becomes a permanent cognitive layer of memory in CHARACTER-07."})]}),l.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-cyan-500/30 text-xs font-mono",children:[l.jsx("span",{className:"text-slate-500 text-[10px] uppercase block",children:"TOTAL RECOLLECTION NODES"}),l.jsx("span",{className:"text-cyan-300 font-bold text-base",children:"09 PHASES LOADED"})]})]}),l.jsxs("div",{className:"relative mb-12",children:[l.jsx("div",{className:"hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-slate-800 -translate-y-1/2 z-0"}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3 relative z-10",children:Uo.map((i,a)=>{const s=i.id===t;return l.jsxs("div",{onClick:()=>{Ee.playClick(),e(i.id)},onMouseEnter:()=>{Ee.playHover(),e(i.id)},className:`p-3 rounded-xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center group ${s?"bg-cyan-950/60 border border-cyan-400 shadow-lg shadow-cyan-500/20 -translate-y-1":"glass-panel border-slate-800/80 hover:border-slate-600"}`,"data-cursor":"MEMORY",children:[l.jsxs("span",{className:"text-[10px] font-mono text-slate-500 font-bold mb-1",children:["0",a+1]}),l.jsx("div",{className:`w-4 h-4 rounded-full border-2 mb-2 flex items-center justify-center ${s?"bg-cyan-400 border-white shadow-sm shadow-cyan-400":"bg-slate-900 border-slate-700 group-hover:border-cyan-400"}`}),l.jsx("div",{className:`text-[11px] font-heading font-bold uppercase tracking-tight line-clamp-2 ${s?"text-white":"text-slate-400 group-hover:text-slate-200"}`,children:i.title}),l.jsx("div",{className:"text-[9px] font-mono text-slate-500 mt-1",children:i.era})]},i.id)})})]}),l.jsxs("div",{className:"p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30 bg-[#080c14]/90 font-mono",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs text-cyan-300 font-bold",children:[l.jsx(Jm,{className:"w-4 h-4 text-cyan-400"}),l.jsxs("span",{children:["MEMORY NODE ARCHIVE // ",n.step]})]}),l.jsx("span",{className:`text-[10px] px-2.5 py-0.5 rounded font-bold uppercase ${n.status==="INTEGRATED"?"bg-emerald-950/40 text-emerald-300 border border-emerald-500/40":"bg-cyan-950/40 text-cyan-300 border border-cyan-500/40"}`,children:n.status})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[l.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[l.jsxs("div",{className:"text-xs text-cyan-400 tracking-wider",children:[n.era," // ",n.tagline]}),l.jsx("h3",{className:"text-2xl sm:text-3xl font-heading font-extrabold text-white",children:n.title}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-300 font-sans leading-relaxed",children:n.description}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800",children:[l.jsx("span",{className:"text-[10px] text-cyan-400 uppercase tracking-widest block mb-1 font-bold",children:"CORE COGNITIVE BREAKTHROUGH:"}),l.jsxs("p",{className:"text-xs text-slate-200 font-sans italic",children:["“",n.breakthrough,"”"]})]})]}),l.jsxs("div",{className:"lg:col-span-5 bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3",children:[l.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2",children:"ACQUIRED CAPABILITIES"}),l.jsx("div",{className:"space-y-2 text-xs",children:n.acquiredCapabilities.map((i,a)=>l.jsxs("div",{className:"flex items-center gap-2 text-slate-300",children:[l.jsx(YS,{className:"w-3.5 h-3.5 text-cyan-400 shrink-0"}),l.jsx("span",{children:i})]},a))})]})]})]})]})},Gf=[{name:"NETRA-",displayName:"NETRA",description:"AI-powered perception and multimodal intelligence system. Real-time foveated LiDAR fusion with 52.05% mIoU at 42.79 FPS.",tags:["Python","PyTorch","LiDAR","Multimodal","Computer Vision"],liveUrl:"https://github.com/atleekumaar/NETRA-",liveLabel:"VIEW PROJECT",githubUrl:"https://github.com/atleekumaar/NETRA-",icon:l.jsx(Qm,{className:"w-5 h-5"}),status:"RESEARCH",statusColor:"text-violet-400 border-violet-500/40 bg-violet-950/30",highlight:!0},{name:"kimi-k3-toy",displayName:"KIMI K3 (Mini)",description:"Minimal PyTorch implementation of the Kimi K3 architecture — KDA, Gated MLA, AttnRes, Stable LatentMoE.",tags:["PyTorch","Transformers","LLM","MoE","Research"],liveUrl:"https://drive.google.com/file/d/10SHEqhzBe_iG3NYlifsqvlF-8wjuUG51/view?usp=sharing",liveLabel:"VIEW PAPER / DEMO",githubUrl:"https://github.com/atleekumaar/kimi-k3-toy",icon:l.jsx(Pu,{className:"w-5 h-5"}),status:"RESEARCH",statusColor:"text-violet-400 border-violet-500/40 bg-violet-950/30",highlight:!0},{name:"Rock-vs-mine-pred.app",displayName:"ROCK vs MINE",description:"End-to-end ML classifier using Sonar data to distinguish underwater rock vs mine objects. Built with Streamlit + Scikit-learn.",tags:["Streamlit","Scikit-learn","ML","Classification","Python"],liveUrl:"https://blank-app-faabjyd1lpg.streamlit.app/",liveLabel:"OPEN LIVE APP",githubUrl:"https://github.com/atleekumaar/Rock-vs-mine-pred.app",icon:l.jsx(cs,{className:"w-5 h-5"}),status:"LIVE",statusColor:"text-emerald-400 border-emerald-500/40 bg-emerald-950/30"},{name:"diabetes-prediction-app",displayName:"DIABETES PREDICTOR",description:"SVM-powered web app predicting diabetes risk from medical parameters. Deployed on Streamlit Cloud.",tags:["SVM","Streamlit","Healthcare AI","Python","Scikit-learn"],liveUrl:"https://diabetes-prediction-app-1256.streamlit.app/",liveLabel:"OPEN LIVE APP",githubUrl:"https://github.com/atleekumaar/diabetes-prediction-app",icon:l.jsx(_l,{className:"w-5 h-5"}),status:"LIVE",statusColor:"text-emerald-400 border-emerald-500/40 bg-emerald-950/30"},{name:"house-price-estimator",displayName:"HOUSE PRICE ESTIMATOR",description:"ML pipeline leveraging historical housing market data and predictive modelling to estimate real estate valuations.",tags:["Regression","Pandas","Scikit-learn","EDA","Python"],liveUrl:void 0,githubUrl:"https://github.com/atleekumaar/house-price-estimator",icon:l.jsx(xA,{className:"w-5 h-5"}),status:"ACTIVE",statusColor:"text-cyan-400 border-cyan-500/40 bg-cyan-950/20"},{name:"brain-tumor-mri-classifier",displayName:"BRAIN TUMOR CLASSIFIER",description:"Deep learning model for MRI-based brain tumor classification using CNNs — medical imaging applied AI research.",tags:["CNN","Medical Imaging","TensorFlow","MRI","Deep Learning"],liveUrl:void 0,githubUrl:"https://github.com/atleekumaar/brain-tumor-mri-classifier",icon:l.jsx(Pu,{className:"w-5 h-5"}),status:"ACTIVE",statusColor:"text-cyan-400 border-cyan-500/40 bg-cyan-950/20"}],yD={LIVE:"bg-emerald-400",ACTIVE:"bg-cyan-400",RESEARCH:"bg-violet-400"},SD=()=>{const[t,e]=Ce.useState(""),[n,i]=Ce.useState(["> connect --github atleekumaar","STATUS: Handshake 200 OK","AUTHENTICATION: PUBLIC REPOSITORY STREAM","TARGET: github.com/atleekumaar","ACCESS GRANTED // 6 REPOSITORIES LOADED"]),a=s=>{if(s.preventDefault(),!t.trim())return;Ee.playTelemetry();const r=t.trim().toLowerCase();let o=`Unknown command: ${r}. Type 'help' for available directives.`;if(r==="help")o="DIRECTIVES: connect, status, repos, missions, clear";else if(r==="status")o="SYSTEM: ACTIVE | ROLE: AI ARCHITECT | REPOS: 6 PUBLIC";else if(r==="repos")o="NETRA- | kimi-k3-toy | Rock-vs-mine-pred.app | diabetes-prediction-app | house-price-estimator | brain-tumor-mri-classifier";else if(r==="missions")o="MSN-001: FOVEATED LiDAR (52.05% mIoU) | MSN-002: AGENTS | MSN-003: ADAPTIVE MESH";else if(r==="clear"){i([]),e("");return}i(c=>[...c,`> ${t}`,o]),e("")};return l.jsxs("section",{id:"open-system",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"08 // OPEN SYSTEM"})]}),l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["PUBLIC CODE ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"REPOSITORY."})]}),l.jsx("p",{className:"text-base sm:text-lg font-mono text-cyan-300 mt-4 max-w-xl font-medium",children:`"Some of the character's memory is public."`}),l.jsx("p",{className:"text-xs sm:text-sm font-mono text-slate-400 mt-1 max-w-lg",children:"Direct access to verified open-source experiments, algorithms, and engineering repositories on GitHub."})]}),l.jsxs("a",{href:"https://github.com/atleekumaar",target:"_blank",rel:"noopener noreferrer",onClick:()=>Ee.playClick(),onMouseEnter:()=>Ee.playHover(),className:"px-6 py-4 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-xs tracking-widest uppercase flex items-center gap-3 transition-all duration-300 shadow-lg shadow-cyan-950/50 cursor-pointer shrink-0","data-cursor":"GITHUB",children:[l.jsx(Wu,{className:"w-5 h-5 text-cyan-400"}),l.jsx("span",{className:"font-bold",children:"[ ACCESS GITHUB // @ATLEEKUMAAR ]"}),l.jsx(Gs,{className:"w-4 h-4"})]})]}),l.jsxs("div",{className:"rounded-2xl bg-[#080c14] border border-cyan-500/40 shadow-2xl shadow-cyan-950/40 overflow-hidden font-mono text-xs mb-16",children:[l.jsxs("div",{className:"flex items-center justify-between px-5 py-3 bg-slate-950 border-b border-slate-800",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"w-3 h-3 rounded-full bg-rose-500/80"}),l.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-500/80"}),l.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-500/80"}),l.jsx("span",{className:"text-[11px] text-slate-400 ml-2",children:"bash - session://character-07/github"})]}),l.jsxs("div",{className:"flex items-center gap-3 text-[10px] text-slate-500",children:[l.jsx("span",{children:"PORT: 443 (TLS)"}),l.jsx("span",{className:"text-emerald-400",children:"ONLINE"})]})]}),l.jsxs("div",{className:"p-6 space-y-2 max-h-72 overflow-y-auto bg-[#07090e]",children:[n.map((s,r)=>l.jsx("div",{className:`${s.startsWith(">")?"text-cyan-400 font-bold":s.startsWith("STATUS")||s.startsWith("ACCESS")?"text-emerald-400":"text-slate-400"}`,children:s},r)),l.jsxs("form",{onSubmit:a,className:"flex items-center gap-2 pt-2",children:[l.jsx("span",{className:"text-cyan-400 font-bold",children:">"}),l.jsx("input",{type:"text",value:t,onChange:s=>e(s.target.value),placeholder:"type 'help', 'repos', 'status', or 'clear'...",className:"w-full bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-600 font-mono text-xs"})]})]}),l.jsxs("div",{className:"px-5 py-3 bg-slate-950/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(_b,{className:"w-4 h-4 text-cyan-400"}),l.jsxs("span",{children:["OFFICIAL GITHUB ID: ",l.jsx("strong",{className:"text-white",children:"atleekumaar"})]})]}),l.jsx("span",{className:"text-slate-500",children:"NO SYNTHETIC METRICS OR FABRICATED STARS"})]})]}),l.jsxs("div",{className:"mb-6 flex items-center gap-4",children:[l.jsx("span",{className:"text-xs font-mono text-cyan-400 tracking-widest uppercase",children:"// REPOSITORY INDEX"}),l.jsx("span",{className:"flex-1 h-[1px] bg-white/5"}),l.jsxs("span",{className:"text-[10px] font-mono text-slate-500",children:[Gf.filter(s=>s.liveUrl).length," LIVE DEPLOYMENTS  |  ",Gf.length," TOTAL"]})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5",children:Gf.map(s=>l.jsxs("div",{className:`group relative rounded-2xl border bg-[#080c14] p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-950/40 ${s.highlight?"border-violet-500/40 hover:border-violet-400/70":s.status==="LIVE"?"border-emerald-500/30 hover:border-emerald-400/60":"border-cyan-500/20 hover:border-cyan-400/50"}`,children:[l.jsxs("div",{className:"flex items-start justify-between gap-3",children:[l.jsx("div",{className:`p-2 rounded-lg border ${s.statusColor}`,children:s.icon}),l.jsxs("div",{className:"flex items-center gap-1.5 font-mono text-[10px]",children:[l.jsx("span",{className:`w-1.5 h-1.5 rounded-full animate-pulse ${yD[s.status]}`}),l.jsx("span",{className:`${s.statusColor.split(" ")[0]}`,children:s.status})]})]}),l.jsxs("div",{className:"flex-1",children:[l.jsx("h3",{className:"font-mono font-bold text-sm text-white mb-1 tracking-wide",children:s.displayName}),l.jsx("p",{className:"text-[12px] text-slate-400 leading-relaxed",children:s.description})]}),l.jsx("div",{className:"flex flex-wrap gap-1.5",children:s.tags.map(r=>l.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-white/10 text-slate-400",children:r},r))}),l.jsxs("div",{className:"flex items-center gap-2 mt-auto pt-2 border-t border-white/5",children:[s.liveUrl&&l.jsxs("a",{href:s.liveUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>Ee.playClick(),onMouseEnter:()=>Ee.playHover(),className:`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-[11px] font-mono font-bold tracking-wide transition-all duration-200 border ${s.status==="LIVE"?"bg-emerald-950/40 hover:bg-emerald-900/50 border-emerald-500/40 text-emerald-300 hover:text-white":"bg-violet-950/40 hover:bg-violet-900/50 border-violet-500/40 text-violet-300 hover:text-white"}`,children:[l.jsx(Gs,{className:"w-3 h-3"}),s.liveLabel??"OPEN LIVE"]}),l.jsxs("a",{href:s.githubUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>Ee.playClick(),onMouseEnter:()=>Ee.playHover(),className:`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-[11px] font-mono font-bold tracking-wide transition-all duration-200 border border-white/10 bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 hover:text-white ${s.liveUrl?"":"flex-1"}`,children:[l.jsx(Wu,{className:"w-3.5 h-3.5"}),s.liveUrl?"SOURCE":"VIEW ON GITHUB",!s.liveUrl&&l.jsx(Km,{className:"w-3 h-3"})]})]})]},s.name))}),l.jsxs("p",{className:"mt-8 text-center text-[11px] font-mono text-slate-600",children:["All repositories are public on"," ",l.jsx("a",{href:"https://github.com/atleekumaar",target:"_blank",rel:"noopener noreferrer",className:"text-cyan-500 hover:text-cyan-300 underline underline-offset-2",children:"github.com/atleekumaar"})," ","— no fabricated metrics, no template code."]})]})},bD=()=>{const t=[{code:"OBJ-01",title:"INTELLIGENT AGENTS",tagline:"Deterministic Agency & Complex Multi-Step Reasoning",description:"Designing agentic state machines capable of continuous autonomous reasoning, strict schema validation, and self-correcting execution loops without human intervention.",focus:["Graph-based State Machines","Schema Contract Enforcement","Episodic Memory Retention"]},{code:"OBJ-02",title:"AUTONOMOUS SYSTEMS",tagline:"Perception-to-Action World Models",description:"Bridging high-frequency 3D sensor streams (LiDAR, point clouds, spatial vision) with real-time world models for embodied decision-making and spatial navigation.",focus:["Embodied Intelligence","Spatial Grounding","Closed-Loop Actuation"]},{code:"OBJ-03",title:"AI INFRASTRUCTURE",tagline:"Scalable MLOps & Distributed Edge Runtimes",description:"Building robust, low-latency deployment pipelines for edge devices and distributed cloud environments, ensuring sub-30ms inference guarantees in high-stress production.",focus:["Distributed GPU Runtimes","Edge Quantization (FP8/INT8)","Zero-Downtime Telemetry"]}];return l.jsxs("section",{id:"future",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"09 // NEXT OBJECTIVES (ERA 2042)"})]}),l.jsxs("div",{className:"mb-16",children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white uppercase leading-none max-w-4xl",children:["THE MACHINE ",l.jsx("br",{}),l.jsx("span",{className:"text-slate-500",children:"MUST LEARN"})," ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300",children:"TO ACT."})]}),l.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-3 font-mono text-xs text-slate-300",children:[l.jsx("span",{className:"px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400",children:"MODELS"}),l.jsx("span",{className:"text-cyan-400",children:"→"}),l.jsx("span",{className:"px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300",children:"SYSTEMS"}),l.jsx("span",{className:"text-cyan-400",children:"→"}),l.jsx("span",{className:"px-3 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-semibold",children:"AGENTS"}),l.jsx("span",{className:"text-cyan-400",children:"→"}),l.jsx("span",{className:"px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/50 text-cyan-300 font-bold",children:"AUTONOMOUS INTELLIGENCE"})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:t.map(e=>l.jsxs("div",{onMouseEnter:()=>Ee.playHover(),className:"p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group","data-cursor":"OBJECTIVE",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between font-mono text-xs mb-4",children:[l.jsx("span",{className:"text-cyan-400 font-bold",children:e.code}),l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 uppercase tracking-widest font-semibold",children:"FUTURE OBJECTIVE"})]}),l.jsx("h3",{className:"text-xl sm:text-2xl font-heading font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-2",children:e.title}),l.jsx("div",{className:"text-xs font-mono text-slate-400 mb-4",children:e.tagline}),l.jsx("p",{className:"text-xs sm:text-sm font-sans text-slate-300 leading-relaxed mb-6",children:e.description})]}),l.jsxs("div",{className:"pt-4 border-t border-slate-800/80 space-y-2",children:[l.jsx("div",{className:"text-[10px] font-mono text-slate-500 uppercase tracking-widest",children:"TARGET RESEARCH FOCUS:"}),l.jsx("div",{className:"space-y-1.5 font-mono text-xs text-slate-300",children:e.focus.map((n,i)=>l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-cyan-400",children:">"}),l.jsx("span",{children:n})]},i))})]})]},e.code))})]})},ED=()=>{const[t,e]=Ce.useState("profile");return l.jsxs("section",{id:"character-file",className:"relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5",children:[l.jsxs("div",{className:"flex items-center justify-center gap-3 text-xs font-mono text-cyan-400 mb-6 text-center",children:[l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"}),l.jsx("span",{children:"10 // OFFICIAL CHARACTER FILE"}),l.jsx("span",{className:"w-6 h-[1px] bg-cyan-400"})]}),l.jsxs("div",{className:"mb-14 text-center max-w-3xl mx-auto",children:[l.jsxs("h2",{className:"text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-white uppercase leading-none",children:["DOSSIER RECORD ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-white",children:"#07-BUILDER."})]}),l.jsx("p",{className:"text-sm font-mono text-slate-400 mt-4",children:"Authenticated personnel file & biometric identity of Atlee Kumaar (Atul Shukla) — AI Systems Architect."})]}),l.jsxs("div",{className:"max-w-4xl mx-auto rounded-3xl glass-panel border border-cyan-500/40 p-6 sm:p-10 bg-gradient-to-b from-[#090d16] via-[#070a12] to-[#05070a] shadow-2xl shadow-cyan-950/40 font-mono",children:[l.jsxs("div",{className:"flex flex-col items-center justify-center mb-10",children:[l.jsxs("div",{className:"relative w-full max-w-2xl aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-2xl shadow-cyan-950/60 group bg-slate-950",children:[l.jsx("img",{src:"./avatar-biometric.jpg",alt:"Atlee Kumaar (Atul Shukla) - CHARACTER-07 Biometric Archive",className:"w-full h-full object-cover object-[15%_25%] filter contrast-110 group-hover:contrast-125 transition-all duration-700"}),l.jsx("div",{className:"absolute inset-x-0 h-1 bg-cyan-400 shadow-[0_0_20px_#00f0ff] animate-scanline pointer-events-none opacity-85"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"}),l.jsxs("div",{className:"absolute top-3 left-3 text-[10px] text-cyan-300 font-mono bg-black/70 border border-cyan-500/40 px-2.5 py-1 rounded backdrop-blur-md flex items-center gap-1.5",children:[l.jsx($S,{className:"w-3.5 h-3.5 text-cyan-400 animate-spin"}),l.jsx("span",{children:"BIOMETRIC SCAN // VERIFIED"})]}),l.jsxs("div",{className:"absolute top-3 right-3 text-[10px] text-emerald-300 font-mono bg-black/70 border border-emerald-500/40 px-2.5 py-1 rounded backdrop-blur-md flex items-center gap-1.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),l.jsx("span",{children:"MATCH 99.8% // HACK 404"})]}),l.jsxs("div",{className:"absolute top-[12%] left-[10%] w-24 h-24 sm:w-32 sm:h-32 border border-dashed border-cyan-400/70 rounded-full pointer-events-none flex items-center justify-center animate-pulse",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400"}),l.jsx("div",{className:"absolute -top-4 text-[9px] text-cyan-300 font-bold bg-black/60 px-1 rounded",children:"TARGET: ATLEE"})]}),l.jsx("div",{className:"absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400"}),l.jsx("div",{className:"absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400"}),l.jsx("div",{className:"absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400"}),l.jsx("div",{className:"absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400"}),l.jsxs("div",{className:"absolute bottom-3 inset-x-3 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-black/60 border border-white/10 px-3 py-1.5 rounded backdrop-blur-md",children:[l.jsx("span",{className:"text-cyan-300 font-bold",children:"IDENTITY: ATLEE KUMAAR (ATUL SHUKLA)"}),l.jsx("span",{className:"text-slate-400",children:"HACK 404 LAB ENVIRONMENT"})]})]}),l.jsx("div",{className:"mt-3 text-xs text-slate-500 font-mono text-center",children:"PHOTO ARCHIVE: LAB SESSION & SYSTEM TELEMETRY VERIFIED"})]}),l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"text-center border-b border-slate-800 pb-6",children:[l.jsx("div",{className:"text-xs text-cyan-400 tracking-widest uppercase font-semibold mb-1",children:"DESIGNATION CODENAME"}),l.jsx("h3",{className:"text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight",children:"CHARACTER-07"}),l.jsxs("div",{className:"text-xl sm:text-2xl text-slate-300 font-mono tracking-wide mt-1",children:["ATLEE KUMAAR ",l.jsx("span",{className:"text-slate-500 text-sm font-normal",children:"(ATUL SHUKLA)"})]}),l.jsxs("div",{className:"text-xs sm:text-sm text-cyan-400 font-mono mt-1 flex items-center justify-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),l.jsx("span",{children:"AI SYSTEMS ARCHITECT // COMPUTER SCIENCE & AI"})]})]}),l.jsxs("div",{className:"flex justify-center gap-2 border-b border-slate-800/80 pb-4",children:[l.jsx("button",{onClick:()=>{Ee.playClick(),e("profile")},className:`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${t==="profile"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm":"text-slate-400 hover:text-white hover:bg-slate-800/40"}`,children:"[ 01: SYSTEM SPECS ]"}),l.jsx("button",{onClick:()=>{Ee.playClick(),e("directives")},className:`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${t==="directives"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm":"text-slate-400 hover:text-white hover:bg-slate-800/40"}`,children:"[ 02: CORE DIRECTIVES ]"}),l.jsx("button",{onClick:()=>{Ee.playClick(),e("specs")},className:`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${t==="specs"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm":"text-slate-400 hover:text-white hover:bg-slate-800/40"}`,children:"[ 03: SIGNATURE LOOP ]"})]}),t==="profile"&&l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs animate-fade-in",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase block mb-1",children:"ROLE"}),l.jsx("span",{className:"text-white font-bold text-sm",children:"AI SYSTEMS ARCHITECT"}),l.jsx("span",{className:"text-[10px] text-slate-400 block mt-1",children:"Perception & Agents"})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase block mb-1",children:"DOMAIN"}),l.jsx("span",{className:"text-cyan-400 font-bold text-sm",children:"ARTIFICIAL INTELLIGENCE"}),l.jsx("span",{className:"text-[10px] text-slate-400 block mt-1",children:"Deep Learning & Vision"})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase block mb-1",children:"STATUS"}),l.jsxs("span",{className:"text-emerald-400 font-bold text-sm flex items-center gap-1.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"BUILDING ACTIVE"]}),l.jsx("span",{className:"text-[10px] text-slate-400 block mt-1",children:"Continuous Development"})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800",children:[l.jsx("span",{className:"text-[10px] text-slate-500 uppercase block mb-1",children:"TIMELINE"}),l.jsx("span",{className:"text-slate-200 font-bold text-sm",children:"ERA 2042"}),l.jsx("span",{className:"text-[10px] text-slate-400 block mt-1",children:"Sector: Earth"})]})]}),t==="directives"&&l.jsxs("div",{className:"space-y-3 animate-fade-in",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 flex items-start gap-4",children:[l.jsx(_b,{className:"w-5 h-5 text-cyan-400 shrink-0 mt-0.5"}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] text-cyan-400 uppercase tracking-widest block font-bold mb-1",children:"PRIMARY DIRECTIVE:"}),l.jsx("div",{className:"text-white font-heading font-extrabold text-lg sm:text-xl",children:"BUILD INTELLIGENCE."}),l.jsx("p",{className:"text-xs text-slate-300 font-sans mt-1",children:"Construct computational systems capable of perceiving, reasoning, learning, and acting in the physical world."})]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-4",children:[l.jsx(_l,{className:"w-5 h-5 text-amber-400 shrink-0 mt-0.5"}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] text-amber-400 uppercase tracking-widest block font-bold mb-1",children:"SECONDARY DIRECTIVE:"}),l.jsx("div",{className:"text-slate-200 font-heading font-bold text-lg sm:text-xl",children:"KEEP LEARNING."}),l.jsx("p",{className:"text-xs text-slate-400 font-sans mt-1",children:"Never stop breaking assumptions, questioning paradigms, and synthesizing real-world feedback."})]})]})]}),t==="specs"&&l.jsxs("div",{className:"p-6 rounded-2xl bg-slate-950/90 border border-cyan-500/30 animate-fade-in",children:[l.jsx("div",{className:"text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-4 text-center",children:"THE CONTINUOUS ENGINEERING LOOP"}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center",children:[{step:"01",name:"RESEARCH",desc:"Dissect papers & fundamentals"},{step:"02",name:"BUILD",desc:"Write robust architectures"},{step:"03",name:"BREAK",desc:"Test failure edge cases"},{step:"04",name:"LEARN",desc:"Assimilate error metrics"},{step:"05",name:"SHIP",desc:"Deploy to production"},{step:"06",name:"REPEAT",desc:"Compound intelligence"}].map(n=>l.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("span",{className:"text-[10px] text-cyan-400 block font-bold",children:n.step}),l.jsx("span",{className:"text-xs font-heading font-extrabold text-white block mt-1",children:n.name}),l.jsx("span",{className:"text-[9px] text-slate-500 block mt-1",children:n.desc})]},n.step))})]})]})]})]})},MD=()=>{const[t,e]=Ce.useState(!1),n=()=>{Ee.playTelemetry(),navigator.clipboard.writeText("https://www.linkedin.com/in/atul-shukla-105341383"),e(!0),setTimeout(()=>e(!1),3e3)};return l.jsxs("section",{id:"contact",className:"relative py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5 font-mono overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#05070a]/90 to-black pointer-events-none"}),l.jsxs("div",{className:"relative z-10 text-center mb-16 space-y-3",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),l.jsx("span",{children:"CHARACTER-07 // SESSION COMPLETE"})]}),l.jsxs("div",{className:"space-y-1 text-sm sm:text-base text-slate-400 font-sans italic pt-2",children:[l.jsx("p",{children:"“You weren't supposed to find this file.”"}),l.jsx("p",{className:"text-cyan-300 font-normal",children:"“But since you're here…”"})]})]}),l.jsx("div",{className:"relative z-10 text-center my-12",children:l.jsxs("h2",{className:"text-5xl sm:text-7xl lg:text-9xl font-heading font-extrabold tracking-tight text-white uppercase leading-[0.9]",children:["WHAT ",l.jsx("br",{}),"WILL ",l.jsx("br",{}),"YOU ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-white",children:"BUILD?"})]})}),l.jsxs("div",{className:"relative z-10 max-w-2xl mx-auto p-8 rounded-3xl glass-panel border border-cyan-500/40 bg-[#080c14]/90 shadow-2xl shadow-cyan-950/60 my-16 text-center space-y-6",children:[l.jsxs("div",{className:"flex items-center justify-center gap-2 text-xs text-cyan-400 uppercase tracking-widest font-bold",children:[l.jsx(tl,{className:"w-4 h-4"}),l.jsx("span",{children:"MISSION CONTROL // INITIATE TRANSMISSION"})]}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-300 font-sans leading-relaxed",children:"Open for high-impact AI systems architecture, research collaboration, point-cloud perception, and autonomous agent engineering opportunities."}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 pt-4",children:[l.jsxs("a",{href:"https://www.linkedin.com/in/atul-shukla-105341383",target:"_blank",rel:"noopener noreferrer",onClick:()=>Ee.playClick(),onMouseEnter:()=>Ee.playHover(),className:"w-full sm:w-auto px-6 py-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/60 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-cyan-950/50 cursor-pointer","data-cursor":"LINKEDIN",children:[l.jsx(lD,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{className:"font-bold",children:"[ CONNECT ON LINKEDIN ]"}),l.jsx(Gs,{className:"w-3.5 h-3.5"})]}),l.jsxs("a",{href:"https://github.com/atleekumaar",target:"_blank",rel:"noopener noreferrer",onClick:()=>Ee.playClick(),onMouseEnter:()=>Ee.playHover(),className:"w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-500 text-slate-300 hover:text-white font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all cursor-pointer","data-cursor":"GITHUB",children:[l.jsx(Wu,{className:"w-4 h-4 text-slate-400"}),l.jsx("span",{className:"font-bold",children:"[ EXPLORE GITHUB ]"}),l.jsx(Gs,{className:"w-3.5 h-3.5"})]})]}),l.jsx("div",{className:"pt-2",children:l.jsx("button",{onClick:n,className:"text-[11px] text-slate-500 hover:text-cyan-400 underline transition-colors flex items-center justify-center gap-1.5 mx-auto cursor-pointer",children:t?l.jsxs("span",{className:"text-emerald-400 flex items-center gap-1",children:[l.jsx(fA,{className:"w-3.5 h-3.5"})," LINKEDIN PROFILE COPIED TO CLIPBOARD"]}):l.jsx("span",{children:"[ COPY VERIFIED PROFILE LINK ]"})})})]}),l.jsxs("div",{className:"relative z-10 pt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500",children:[l.jsx("div",{children:"CHARACTER-07 // ATLEE KUMAAR (ATUL SHUKLA)"}),l.jsx("div",{children:"ERA 2042 // ALL TELEMETRY AUTHENTICATED"})]})]})};function TD(){const[t,e]=Ce.useState(!1),[n,i]=Ce.useState(!1),a=()=>{const s=document.getElementById("missions");s&&s.scrollIntoView({behavior:"smooth"})};return l.jsxs("div",{className:"min-h-screen bg-[#05070a] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden",children:[!t&&l.jsx(UA,{onEnter:()=>e(!0)}),l.jsx(OA,{}),l.jsx(IA,{onOpenCommandPalette:()=>i(!0)}),l.jsx(PA,{isOpen:n,onClose:()=>i(!1)}),l.jsx(BA,{}),l.jsxs("main",{className:"relative z-10",children:[l.jsx(cD,{onExploreMissions:a}),l.jsx(uD,{}),l.jsx(dD,{}),l.jsx(fD,{}),l.jsx(gD,{}),l.jsx(xD,{}),l.jsx(vD,{}),l.jsx(_D,{}),l.jsx(SD,{}),l.jsx(bD,{}),l.jsx(ED,{}),l.jsx(MD,{})]})]})}$1.createRoot(document.getElementById("root")).render(l.jsx(Ce.StrictMode,{children:l.jsx(TD,{})}));
