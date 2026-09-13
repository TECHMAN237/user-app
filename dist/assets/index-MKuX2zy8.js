(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&o(v)}).observe(document,{childList:!0,subtree:!0});function f(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(d){if(d.ep)return;d.ep=!0;const p=f(d);fetch(d.href,p)}})();var Yo={exports:{}},ql={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function wb(){if(fm)return ql;fm=1;var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(o,d,p){var v=null;if(p!==void 0&&(v=""+p),d.key!==void 0&&(v=""+d.key),"key"in d){p={};for(var _ in d)_!=="key"&&(p[_]=d[_])}else p=d;return d=p.ref,{$$typeof:s,type:o,key:v,ref:d!==void 0?d:null,props:p}}return ql.Fragment=c,ql.jsx=f,ql.jsxs=f,ql}var dm;function Eb(){return dm||(dm=1,Yo.exports=wb()),Yo.exports}var m=Eb(),Go={exports:{}},P={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function Ab(){if(mm)return P;mm=1;var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),v=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),B=Symbol.iterator;function q(g){return g===null||typeof g!="object"?null:(g=B&&g[B]||g["@@iterator"],typeof g=="function"?g:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,G={};function U(g,N,k){this.props=g,this.context=N,this.refs=G,this.updater=k||Z}U.prototype.isReactComponent={},U.prototype.setState=function(g,N){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,N,"setState")},U.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function $(){}$.prototype=U.prototype;function W(g,N,k){this.props=g,this.context=N,this.refs=G,this.updater=k||Z}var he=W.prototype=new $;he.constructor=W,Y(he,U.prototype),he.isPureReactComponent=!0;var de=Array.isArray;function xe(){}var I={H:null,A:null,T:null,S:null},Re=Object.prototype.hasOwnProperty;function Qe(g,N,k){var Q=k.ref;return{$$typeof:s,type:g,key:N,ref:Q!==void 0?Q:null,props:k}}function pt(g,N){return Qe(g.type,N,g.props)}function tt(g){return typeof g=="object"&&g!==null&&g.$$typeof===s}function Ve(g){var N={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(k){return N[k]})}var ht=/\/+/g;function st(g,N){return typeof g=="object"&&g!==null&&g.key!=null?Ve(""+g.key):N.toString(36)}function ne(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(xe,xe):(g.status="pending",g.then(function(N){g.status==="pending"&&(g.status="fulfilled",g.value=N)},function(N){g.status==="pending"&&(g.status="rejected",g.reason=N)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function T(g,N,k,Q,ee){var ie=typeof g;(ie==="undefined"||ie==="boolean")&&(g=null);var ye=!1;if(g===null)ye=!0;else switch(ie){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(g.$$typeof){case s:case c:ye=!0;break;case O:return ye=g._init,T(ye(g._payload),N,k,Q,ee)}}if(ye)return ee=ee(g),ye=Q===""?"."+st(g,0):Q,de(ee)?(k="",ye!=null&&(k=ye.replace(ht,"$&/")+"/"),T(ee,N,k,"",function(Ja){return Ja})):ee!=null&&(tt(ee)&&(ee=pt(ee,k+(ee.key==null||g&&g.key===ee.key?"":(""+ee.key).replace(ht,"$&/")+"/")+ye)),N.push(ee)),1;ye=0;var nt=Q===""?".":Q+":";if(de(g))for(var Be=0;Be<g.length;Be++)Q=g[Be],ie=nt+st(Q,Be),ye+=T(Q,N,k,ie,ee);else if(Be=q(g),typeof Be=="function")for(g=Be.call(g),Be=0;!(Q=g.next()).done;)Q=Q.value,ie=nt+st(Q,Be++),ye+=T(Q,N,k,ie,ee);else if(ie==="object"){if(typeof g.then=="function")return T(ne(g),N,k,Q,ee);throw N=String(g),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ye}function H(g,N,k){if(g==null)return g;var Q=[],ee=0;return T(g,Q,"","",function(ie){return N.call(k,ie,ee++)}),Q}function F(g){if(g._status===-1){var N=g._result;N=N(),N.then(function(k){(g._status===0||g._status===-1)&&(g._status=1,g._result=k)},function(k){(g._status===0||g._status===-1)&&(g._status=2,g._result=k)}),g._status===-1&&(g._status=0,g._result=N)}if(g._status===1)return g._result.default;throw g._result}var Se=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},Ce={map:H,forEach:function(g,N,k){H(g,function(){N.apply(this,arguments)},k)},count:function(g){var N=0;return H(g,function(){N++}),N},toArray:function(g){return H(g,function(N){return N})||[]},only:function(g){if(!tt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return P.Activity=z,P.Children=Ce,P.Component=U,P.Fragment=f,P.Profiler=d,P.PureComponent=W,P.StrictMode=o,P.Suspense=x,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,P.__COMPILER_RUNTIME={__proto__:null,c:function(g){return I.H.useMemoCache(g)}},P.cache=function(g){return function(){return g.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(g,N,k){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var Q=Y({},g.props),ee=g.key;if(N!=null)for(ie in N.key!==void 0&&(ee=""+N.key),N)!Re.call(N,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&N.ref===void 0||(Q[ie]=N[ie]);var ie=arguments.length-2;if(ie===1)Q.children=k;else if(1<ie){for(var ye=Array(ie),nt=0;nt<ie;nt++)ye[nt]=arguments[nt+2];Q.children=ye}return Qe(g.type,ee,Q)},P.createContext=function(g){return g={$$typeof:v,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:p,_context:g},g},P.createElement=function(g,N,k){var Q,ee={},ie=null;if(N!=null)for(Q in N.key!==void 0&&(ie=""+N.key),N)Re.call(N,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(ee[Q]=N[Q]);var ye=arguments.length-2;if(ye===1)ee.children=k;else if(1<ye){for(var nt=Array(ye),Be=0;Be<ye;Be++)nt[Be]=arguments[Be+2];ee.children=nt}if(g&&g.defaultProps)for(Q in ye=g.defaultProps,ye)ee[Q]===void 0&&(ee[Q]=ye[Q]);return Qe(g,ie,ee)},P.createRef=function(){return{current:null}},P.forwardRef=function(g){return{$$typeof:_,render:g}},P.isValidElement=tt,P.lazy=function(g){return{$$typeof:O,_payload:{_status:-1,_result:g},_init:F}},P.memo=function(g,N){return{$$typeof:b,type:g,compare:N===void 0?null:N}},P.startTransition=function(g){var N=I.T,k={};I.T=k;try{var Q=g(),ee=I.S;ee!==null&&ee(k,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(xe,Se)}catch(ie){Se(ie)}finally{N!==null&&k.types!==null&&(N.types=k.types),I.T=N}},P.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},P.use=function(g){return I.H.use(g)},P.useActionState=function(g,N,k){return I.H.useActionState(g,N,k)},P.useCallback=function(g,N){return I.H.useCallback(g,N)},P.useContext=function(g){return I.H.useContext(g)},P.useDebugValue=function(){},P.useDeferredValue=function(g,N){return I.H.useDeferredValue(g,N)},P.useEffect=function(g,N){return I.H.useEffect(g,N)},P.useEffectEvent=function(g){return I.H.useEffectEvent(g)},P.useId=function(){return I.H.useId()},P.useImperativeHandle=function(g,N,k){return I.H.useImperativeHandle(g,N,k)},P.useInsertionEffect=function(g,N){return I.H.useInsertionEffect(g,N)},P.useLayoutEffect=function(g,N){return I.H.useLayoutEffect(g,N)},P.useMemo=function(g,N){return I.H.useMemo(g,N)},P.useOptimistic=function(g,N){return I.H.useOptimistic(g,N)},P.useReducer=function(g,N,k){return I.H.useReducer(g,N,k)},P.useRef=function(g){return I.H.useRef(g)},P.useState=function(g){return I.H.useState(g)},P.useSyncExternalStore=function(g,N,k){return I.H.useSyncExternalStore(g,N,k)},P.useTransition=function(){return I.H.useTransition()},P.version="19.2.7",P}var pm;function $o(){return pm||(pm=1,Go.exports=Ab()),Go.exports}var C=$o(),Xo={exports:{}},Yl={},Qo={exports:{}},Vo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function Cb(){return hm||(hm=1,(function(s){function c(T,H){var F=T.length;T.push(H);e:for(;0<F;){var Se=F-1>>>1,Ce=T[Se];if(0<d(Ce,H))T[Se]=H,T[F]=Ce,F=Se;else break e}}function f(T){return T.length===0?null:T[0]}function o(T){if(T.length===0)return null;var H=T[0],F=T.pop();if(F!==H){T[0]=F;e:for(var Se=0,Ce=T.length,g=Ce>>>1;Se<g;){var N=2*(Se+1)-1,k=T[N],Q=N+1,ee=T[Q];if(0>d(k,F))Q<Ce&&0>d(ee,k)?(T[Se]=ee,T[Q]=F,Se=Q):(T[Se]=k,T[N]=F,Se=N);else if(Q<Ce&&0>d(ee,F))T[Se]=ee,T[Q]=F,Se=Q;else break e}}return H}function d(T,H){var F=T.sortIndex-H.sortIndex;return F!==0?F:T.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var v=Date,_=v.now();s.unstable_now=function(){return v.now()-_}}var x=[],b=[],O=1,z=null,B=3,q=!1,Z=!1,Y=!1,G=!1,U=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function he(T){for(var H=f(b);H!==null;){if(H.callback===null)o(b);else if(H.startTime<=T)o(b),H.sortIndex=H.expirationTime,c(x,H);else break;H=f(b)}}function de(T){if(Y=!1,he(T),!Z)if(f(x)!==null)Z=!0,xe||(xe=!0,Ve());else{var H=f(b);H!==null&&ne(de,H.startTime-T)}}var xe=!1,I=-1,Re=5,Qe=-1;function pt(){return G?!0:!(s.unstable_now()-Qe<Re)}function tt(){if(G=!1,xe){var T=s.unstable_now();Qe=T;var H=!0;try{e:{Z=!1,Y&&(Y=!1,$(I),I=-1),q=!0;var F=B;try{t:{for(he(T),z=f(x);z!==null&&!(z.expirationTime>T&&pt());){var Se=z.callback;if(typeof Se=="function"){z.callback=null,B=z.priorityLevel;var Ce=Se(z.expirationTime<=T);if(T=s.unstable_now(),typeof Ce=="function"){z.callback=Ce,he(T),H=!0;break t}z===f(x)&&o(x),he(T)}else o(x);z=f(x)}if(z!==null)H=!0;else{var g=f(b);g!==null&&ne(de,g.startTime-T),H=!1}}break e}finally{z=null,B=F,q=!1}H=void 0}}finally{H?Ve():xe=!1}}}var Ve;if(typeof W=="function")Ve=function(){W(tt)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,st=ht.port2;ht.port1.onmessage=tt,Ve=function(){st.postMessage(null)}}else Ve=function(){U(tt,0)};function ne(T,H){I=U(function(){T(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(T){T.callback=null},s.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<T?Math.floor(1e3/T):5},s.unstable_getCurrentPriorityLevel=function(){return B},s.unstable_next=function(T){switch(B){case 1:case 2:case 3:var H=3;break;default:H=B}var F=B;B=H;try{return T()}finally{B=F}},s.unstable_requestPaint=function(){G=!0},s.unstable_runWithPriority=function(T,H){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var F=B;B=T;try{return H()}finally{B=F}},s.unstable_scheduleCallback=function(T,H,F){var Se=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Se+F:Se):F=Se,T){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=F+Ce,T={id:O++,callback:H,priorityLevel:T,startTime:F,expirationTime:Ce,sortIndex:-1},F>Se?(T.sortIndex=F,c(b,T),f(x)===null&&T===f(b)&&(Y?($(I),I=-1):Y=!0,ne(de,F-Se))):(T.sortIndex=Ce,c(x,T),Z||q||(Z=!0,xe||(xe=!0,Ve()))),T},s.unstable_shouldYield=pt,s.unstable_wrapCallback=function(T){var H=B;return function(){var F=B;B=H;try{return T.apply(this,arguments)}finally{B=F}}}})(Vo)),Vo}var bm;function jb(){return bm||(bm=1,Qo.exports=Cb()),Qo.exports}var Zo={exports:{}},et={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function Tb(){if(ym)return et;ym=1;var s=$o();function c(x){var b="https://react.dev/errors/"+x;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)b+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+x+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var o={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(x,b,O){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:z==null?null:""+z,children:x,containerInfo:b,implementation:O}}var v=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(x,b){if(x==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,et.createPortal=function(x,b){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(c(299));return p(x,b,null,O)},et.flushSync=function(x){var b=v.T,O=o.p;try{if(v.T=null,o.p=2,x)return x()}finally{v.T=b,o.p=O,o.d.f()}},et.preconnect=function(x,b){typeof x=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,o.d.C(x,b))},et.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},et.preinit=function(x,b){if(typeof x=="string"&&b&&typeof b.as=="string"){var O=b.as,z=_(O,b.crossOrigin),B=typeof b.integrity=="string"?b.integrity:void 0,q=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;O==="style"?o.d.S(x,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:z,integrity:B,fetchPriority:q}):O==="script"&&o.d.X(x,{crossOrigin:z,integrity:B,fetchPriority:q,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},et.preinitModule=function(x,b){if(typeof x=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var O=_(b.as,b.crossOrigin);o.d.M(x,{crossOrigin:O,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&o.d.M(x)},et.preload=function(x,b){if(typeof x=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var O=b.as,z=_(O,b.crossOrigin);o.d.L(x,O,{crossOrigin:z,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},et.preloadModule=function(x,b){if(typeof x=="string")if(b){var O=_(b.as,b.crossOrigin);o.d.m(x,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:O,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else o.d.m(x)},et.requestFormReset=function(x){o.d.r(x)},et.unstable_batchedUpdates=function(x,b){return x(b)},et.useFormState=function(x,b,O){return v.H.useFormState(x,b,O)},et.useFormStatus=function(){return v.H.useHostTransitionStatus()},et.version="19.2.7",et}var gm;function _b(){if(gm)return Zo.exports;gm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Zo.exports=Tb(),Zo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function zb(){if(vm)return Yl;vm=1;var s=jb(),c=$o(),f=_b();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(p(e)!==e)throw Error(o(188))}function b(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return x(l),e;if(i===a)return x(l),t;i=i.sibling}throw Error(o(188))}if(n.return!==a.return)n=l,a=i;else{for(var r=!1,u=l.child;u;){if(u===n){r=!0,n=l,a=i;break}if(u===a){r=!0,a=l,n=i;break}u=u.sibling}if(!r){for(u=i.child;u;){if(u===n){r=!0,n=i,a=l;break}if(u===a){r=!0,a=i,n=l;break}u=u.sibling}if(!r)throw Error(o(189))}}if(n.alternate!==a)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function O(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=O(e),t!==null)return t;e=e.sibling}return null}var z=Object.assign,B=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),W=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Qe=Symbol.for("react.activity"),pt=Symbol.for("react.memo_cache_sentinel"),tt=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=tt&&e[tt]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function st(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case U:return"Profiler";case G:return"StrictMode";case de:return"Suspense";case xe:return"SuspenseList";case Qe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Z:return"Portal";case W:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case he:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:st(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return st(e(t))}catch{}}return null}var ne=Array.isArray,T=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},Se=[],Ce=-1;function g(e){return{current:e}}function N(e){0>Ce||(e.current=Se[Ce],Se[Ce]=null,Ce--)}function k(e,t){Ce++,Se[Ce]=e.current,e.current=t}var Q=g(null),ee=g(null),ie=g(null),ye=g(null);function nt(e,t){switch(k(ie,t),k(ee,e),k(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Dd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Dd(t),e=Nd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}N(Q),k(Q,e)}function Be(){N(Q),N(ee),N(ie)}function Ja(e){e.memoizedState!==null&&k(ye,e);var t=Q.current,n=Nd(t,e.type);t!==n&&(k(ee,e),k(Q,n))}function Jl(e){ee.current===e&&(N(Q),N(ee)),ye.current===e&&(N(ye),Bl._currentValue=F)}var ws,cc;function Yn(e){if(ws===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ws=t&&t[1]||"",cc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ws+e+cc}var Es=!1;function As(e,t){if(!e||Es)return"";Es=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(R){var j=R}Reflect.construct(e,[],D)}else{try{D.call()}catch(R){j=R}e.call(D.prototype)}}else{try{throw Error()}catch(R){j=R}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(R){if(R&&j&&typeof R.stack=="string")return[R.stack,j.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),r=i[0],u=i[1];if(r&&u){var h=r.split(`
`),A=u.split(`
`);for(l=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(a===h.length||l===A.length)for(a=h.length-1,l=A.length-1;1<=a&&0<=l&&h[a]!==A[l];)l--;for(;1<=a&&0<=l;a--,l--)if(h[a]!==A[l]){if(a!==1||l!==1)do if(a--,l--,0>l||h[a]!==A[l]){var L=`
`+h[a].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=a&&0<=l);break}}}finally{Es=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Yn(n):""}function Pm(e,t){switch(e.tag){case 26:case 27:case 5:return Yn(e.type);case 16:return Yn("Lazy");case 13:return e.child!==t&&t!==null?Yn("Suspense Fallback"):Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 15:return As(e.type,!1);case 11:return As(e.type.render,!1);case 1:return As(e.type,!0);case 31:return Yn("Activity");default:return""}}function uc(e){try{var t="",n=null;do t+=Pm(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Cs=Object.prototype.hasOwnProperty,js=s.unstable_scheduleCallback,Ts=s.unstable_cancelCallback,ep=s.unstable_shouldYield,tp=s.unstable_requestPaint,bt=s.unstable_now,np=s.unstable_getCurrentPriorityLevel,fc=s.unstable_ImmediatePriority,dc=s.unstable_UserBlockingPriority,Kl=s.unstable_NormalPriority,ap=s.unstable_LowPriority,mc=s.unstable_IdlePriority,lp=s.log,ip=s.unstable_setDisableYieldValue,Ka=null,yt=null;function hn(e){if(typeof lp=="function"&&ip(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Ka,e)}catch{}}var gt=Math.clz32?Math.clz32:op,sp=Math.log,rp=Math.LN2;function op(e){return e>>>=0,e===0?32:31-(sp(e)/rp|0)|0}var Wl=256,Fl=262144,Il=4194304;function Gn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $l(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var u=a&134217727;return u!==0?(a=u&~i,a!==0?l=Gn(a):(r&=u,r!==0?l=Gn(r):n||(n=u&~e,n!==0&&(l=Gn(n))))):(u=a&~i,u!==0?l=Gn(u):r!==0?l=Gn(r):n||(n=a&~e,n!==0&&(l=Gn(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Wa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function cp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pc(){var e=Il;return Il<<=1,(Il&62914560)===0&&(Il=4194304),e}function _s(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function up(e,t,n,a,l,i){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,h=e.expirationTimes,A=e.hiddenUpdates;for(n=r&~n;0<n;){var L=31-gt(n),D=1<<L;u[L]=0,h[L]=-1;var j=A[L];if(j!==null)for(A[L]=null,L=0;L<j.length;L++){var R=j[L];R!==null&&(R.lane&=-536870913)}n&=~D}a!==0&&hc(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function hc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-gt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-gt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function yc(e,t){var n=t&-t;return n=(n&42)!==0?1:zs(n),(n&(e.suspendedLanes|t))!==0?0:n}function zs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gc(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:lm(e.type))}function vc(e,t){var n=H.p;try{return H.p=e,t()}finally{H.p=n}}var bn=Math.random().toString(36).slice(2),We="__reactFiber$"+bn,rt="__reactProps$"+bn,sa="__reactContainer$"+bn,Os="__reactEvents$"+bn,fp="__reactListeners$"+bn,dp="__reactHandles$"+bn,xc="__reactResources$"+bn,Ia="__reactMarker$"+bn;function Ls(e){delete e[We],delete e[rt],delete e[Os],delete e[fp],delete e[dp]}function ra(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sa]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gd(e);e!==null;){if(n=e[We])return n;e=Gd(e)}return t}e=n,n=e.parentNode}return null}function oa(e){if(e=e[We]||e[sa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function $a(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ca(e){var t=e[xc];return t||(t=e[xc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Ia]=!0}var Sc=new Set,wc={};function Xn(e,t){ua(e,t),ua(e+"Capture",t)}function ua(e,t){for(wc[e]=t,e=0;e<t.length;e++)Sc.add(t[e])}var mp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ec={},Ac={};function pp(e){return Cs.call(Ac,e)?!0:Cs.call(Ec,e)?!1:mp.test(e)?Ac[e]=!0:(Ec[e]=!0,!1)}function Pl(e,t,n){if(pp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ei(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Wt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hp(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(r){n=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ms(e){if(!e._valueTracker){var t=Cc(e)?"checked":"value";e._valueTracker=hp(e,t,""+e[t])}}function jc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Cc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var bp=/[\n"\\]/g;function _t(e){return e.replace(bp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ds(e,t,n,a,l,i,r,u){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Ns(e,r,Tt(t)):n!=null?Ns(e,r,Tt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Tt(u):e.removeAttribute("name")}function Tc(e,t,n,a,l,i,r,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ms(e);return}n=n!=null?""+Tt(n):"",t=t!=null?""+Tt(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=u?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Ms(e)}function Ns(e,t,n){t==="number"&&ti(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function fa(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function _c(e,t,n){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Tt(n):""}function zc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(o(92));if(ne(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Tt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Ms(e)}function da(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||yp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Oc(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&Rc(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&Rc(e,i,t[i])}function Bs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ni(e){return vp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ft(){}var Hs=null;function Us(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ma=null,pa=null;function Lc(e){var t=oa(e);if(t&&(e=t.stateNode)){var n=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ds(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[rt]||null;if(!l)throw Error(o(90));Ds(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&jc(a)}break e;case"textarea":_c(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&fa(e,!!n.multiple,t,!1)}}}var ks=!1;function Mc(e,t,n){if(ks)return e(t,n);ks=!0;try{var a=e(t);return a}finally{if(ks=!1,(ma!==null||pa!==null)&&(Xi(),ma&&(t=ma,e=pa,pa=ma=null,Lc(t),e)))for(t=0;t<e.length;t++)Lc(e[t])}}function Pa(e,t){var n=e.stateNode;if(n===null)return null;var a=n[rt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qs=!1;if(It)try{var el={};Object.defineProperty(el,"passive",{get:function(){qs=!0}}),window.addEventListener("test",el,el),window.removeEventListener("test",el,el)}catch{qs=!1}var yn=null,Ys=null,ai=null;function Dc(){if(ai)return ai;var e,t=Ys,n=t.length,a,l="value"in yn?yn.value:yn.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var r=n-e;for(a=1;a<=r&&t[n-a]===l[i-a];a++);return ai=l.slice(e,1<a?1-a:void 0)}function li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ii(){return!0}function Nc(){return!1}function ot(e){function t(n,a,l,i,r){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ii:Nc,this.isPropagationStopped=Nc,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},si=ot(Qn),tl=z({},Qn,{view:0,detail:0}),xp=ot(tl),Gs,Xs,nl,ri=z({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nl&&(nl&&e.type==="mousemove"?(Gs=e.screenX-nl.screenX,Xs=e.screenY-nl.screenY):Xs=Gs=0,nl=e),Gs)},movementY:function(e){return"movementY"in e?e.movementY:Xs}}),Bc=ot(ri),Sp=z({},ri,{dataTransfer:0}),wp=ot(Sp),Ep=z({},tl,{relatedTarget:0}),Qs=ot(Ep),Ap=z({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=ot(Ap),jp=z({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tp=ot(jp),_p=z({},Qn,{data:0}),Hc=ot(_p),zp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Op={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Op[e])?!!t[e]:!1}function Vs(){return Lp}var Mp=z({},tl,{key:function(e){if(e.key){var t=zp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vs,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dp=ot(Mp),Np=z({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uc=ot(Np),Bp=z({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vs}),Hp=ot(Bp),Up=z({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kp=ot(Up),qp=z({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yp=ot(qp),Gp=z({},Qn,{newState:0,oldState:0}),Xp=ot(Gp),Qp=[9,13,27,32],Zs=It&&"CompositionEvent"in window,al=null;It&&"documentMode"in document&&(al=document.documentMode);var Vp=It&&"TextEvent"in window&&!al,kc=It&&(!Zs||al&&8<al&&11>=al),qc=" ",Yc=!1;function Gc(e,t){switch(e){case"keyup":return Qp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ha=!1;function Zp(e,t){switch(e){case"compositionend":return Xc(t);case"keypress":return t.which!==32?null:(Yc=!0,qc);case"textInput":return e=t.data,e===qc&&Yc?null:e;default:return null}}function Jp(e,t){if(ha)return e==="compositionend"||!Zs&&Gc(e,t)?(e=Dc(),ai=Ys=yn=null,ha=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kc&&t.locale!=="ko"?null:t.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kp[e.type]:t==="textarea"}function Vc(e,t,n,a){ma?pa?pa.push(a):pa=[a]:ma=a,t=Fi(t,"onChange"),0<t.length&&(n=new si("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ll=null,il=null;function Wp(e){_d(e,0)}function oi(e){var t=$a(e);if(jc(t))return e}function Zc(e,t){if(e==="change")return t}var Jc=!1;if(It){var Js;if(It){var Ks="oninput"in document;if(!Ks){var Kc=document.createElement("div");Kc.setAttribute("oninput","return;"),Ks=typeof Kc.oninput=="function"}Js=Ks}else Js=!1;Jc=Js&&(!document.documentMode||9<document.documentMode)}function Wc(){ll&&(ll.detachEvent("onpropertychange",Fc),il=ll=null)}function Fc(e){if(e.propertyName==="value"&&oi(il)){var t=[];Vc(t,il,e,Us(e)),Mc(Wp,t)}}function Fp(e,t,n){e==="focusin"?(Wc(),ll=t,il=n,ll.attachEvent("onpropertychange",Fc)):e==="focusout"&&Wc()}function Ip(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oi(il)}function $p(e,t){if(e==="click")return oi(t)}function Pp(e,t){if(e==="input"||e==="change")return oi(t)}function eh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:eh;function sl(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Cs.call(t,l)||!vt(e[l],t[l]))return!1}return!0}function Ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $c(e,t){var n=Ic(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ic(n)}}function Pc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function eu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ti(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ti(e.document)}return t}function Ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var th=It&&"documentMode"in document&&11>=document.documentMode,ba=null,Fs=null,rl=null,Is=!1;function tu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Is||ba==null||ba!==ti(a)||(a=ba,"selectionStart"in a&&Ws(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),rl&&sl(rl,a)||(rl=a,a=Fi(Fs,"onSelect"),0<a.length&&(t=new si("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ba)))}function Vn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ya={animationend:Vn("Animation","AnimationEnd"),animationiteration:Vn("Animation","AnimationIteration"),animationstart:Vn("Animation","AnimationStart"),transitionrun:Vn("Transition","TransitionRun"),transitionstart:Vn("Transition","TransitionStart"),transitioncancel:Vn("Transition","TransitionCancel"),transitionend:Vn("Transition","TransitionEnd")},$s={},nu={};It&&(nu=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function Zn(e){if($s[e])return $s[e];if(!ya[e])return e;var t=ya[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nu)return $s[e]=t[n];return e}var au=Zn("animationend"),lu=Zn("animationiteration"),iu=Zn("animationstart"),nh=Zn("transitionrun"),ah=Zn("transitionstart"),lh=Zn("transitioncancel"),su=Zn("transitionend"),ru=new Map,Ps="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ps.push("scrollEnd");function Ut(e,t){ru.set(e,t),Xn(t,[e])}var ci=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zt=[],ga=0,er=0;function ui(){for(var e=ga,t=er=ga=0;t<e;){var n=zt[t];zt[t++]=null;var a=zt[t];zt[t++]=null;var l=zt[t];zt[t++]=null;var i=zt[t];if(zt[t++]=null,a!==null&&l!==null){var r=a.pending;r===null?l.next=l:(l.next=r.next,r.next=l),a.pending=l}i!==0&&ou(n,l,i)}}function fi(e,t,n,a){zt[ga++]=e,zt[ga++]=t,zt[ga++]=n,zt[ga++]=a,er|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function tr(e,t,n,a){return fi(e,t,n,a),di(e)}function Jn(e,t){return fi(e,null,null,t),di(e)}function ou(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-gt(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function di(e){if(50<zl)throw zl=0,uo=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var va={};function ih(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,a){return new ih(e,t,n,a)}function nr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $t(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function cu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mi(e,t,n,a,l,i){var r=0;if(a=e,typeof e=="function")nr(e)&&(r=1);else if(typeof e=="string")r=ub(e,n,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Qe:return e=xt(31,n,t,l),e.elementType=Qe,e.lanes=i,e;case Y:return Kn(n.children,l,i,t);case G:r=8,l|=24;break;case U:return e=xt(12,n,t,l|2),e.elementType=U,e.lanes=i,e;case de:return e=xt(13,n,t,l),e.elementType=de,e.lanes=i,e;case xe:return e=xt(19,n,t,l),e.elementType=xe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:r=10;break e;case $:r=9;break e;case he:r=11;break e;case I:r=14;break e;case Re:r=16,a=null;break e}r=29,n=Error(o(130,e===null?"null":typeof e,"")),a=null}return t=xt(r,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function Kn(e,t,n,a){return e=xt(7,e,a,t),e.lanes=n,e}function ar(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function uu(e){var t=xt(18,null,null,0);return t.stateNode=e,t}function lr(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var fu=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var n=fu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:uc(t)},fu.set(e,t),t)}return{value:e,source:t,stack:uc(t)}}var xa=[],Sa=0,pi=null,ol=0,Ot=[],Lt=0,gn=null,Qt=1,Vt="";function Pt(e,t){xa[Sa++]=ol,xa[Sa++]=pi,pi=e,ol=t}function du(e,t,n){Ot[Lt++]=Qt,Ot[Lt++]=Vt,Ot[Lt++]=gn,gn=e;var a=Qt;e=Vt;var l=32-gt(a)-1;a&=~(1<<l),n+=1;var i=32-gt(t)+l;if(30<i){var r=l-l%5;i=(a&(1<<r)-1).toString(32),a>>=r,l-=r,Qt=1<<32-gt(t)+l|n<<l|a,Vt=i+e}else Qt=1<<i|n<<l|a,Vt=e}function ir(e){e.return!==null&&(Pt(e,1),du(e,1,0))}function sr(e){for(;e===pi;)pi=xa[--Sa],xa[Sa]=null,ol=xa[--Sa],xa[Sa]=null;for(;e===gn;)gn=Ot[--Lt],Ot[Lt]=null,Vt=Ot[--Lt],Ot[Lt]=null,Qt=Ot[--Lt],Ot[Lt]=null}function mu(e,t){Ot[Lt++]=Qt,Ot[Lt++]=Vt,Ot[Lt++]=gn,Qt=t.id,Vt=t.overflow,gn=e}var Fe=null,_e=null,fe=!1,vn=null,Mt=!1,rr=Error(o(519));function xn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cl(Rt(t,e)),rr}function pu(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[We]=e,t[rt]=a,n){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(n=0;n<Ol.length;n++)re(Ol[n],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),Tc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),zc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Ld(t.textContent,n)?(a.popover!=null&&(re("beforetoggle",t),re("toggle",t)),a.onScroll!=null&&re("scroll",t),a.onScrollEnd!=null&&re("scrollend",t),a.onClick!=null&&(t.onclick=Ft),t=!0):t=!1,t||xn(e,!0)}function hu(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:Mt=!1;return;case 27:case 3:Mt=!0;return;default:Fe=Fe.return}}function wa(e){if(e!==Fe)return!1;if(!fe)return hu(e),fe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||jo(e.type,e.memoizedProps)),n=!n),n&&_e&&xn(e),hu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));_e=Yd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));_e=Yd(e)}else t===27?(t=_e,Dn(e.type)?(e=Oo,Oo=null,_e=e):_e=t):_e=Fe?Nt(e.stateNode.nextSibling):null;return!0}function Wn(){_e=Fe=null,fe=!1}function or(){var e=vn;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),vn=null),e}function cl(e){vn===null?vn=[e]:vn.push(e)}var cr=g(null),Fn=null,en=null;function Sn(e,t,n){k(cr,t._currentValue),t._currentValue=n}function tn(e){e._currentValue=cr.current,N(cr)}function ur(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function fr(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var r=l.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=l;for(var h=0;h<t.length;h++)if(u.context===t[h]){i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ur(i.return,n,e),a||(r=null);break e}i=u.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(o(341));r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),ur(r,n,e),r=null}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===e){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function Ea(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(o(387));if(r=r.memoizedProps,r!==null){var u=l.type;vt(l.pendingProps.value,r.value)||(e!==null?e.push(u):e=[u])}}else if(l===ye.current){if(r=l.alternate,r===null)throw Error(o(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Bl):e=[Bl])}l=l.return}e!==null&&fr(t,e,n,a),t.flags|=262144}function hi(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function In(e){Fn=e,en=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return bu(Fn,e)}function bi(e,t){return Fn===null&&In(e),bu(e,t)}function bu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},en===null){if(e===null)throw Error(o(308));en=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else en=en.next=t;return n}var sh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},rh=s.unstable_scheduleCallback,oh=s.unstable_NormalPriority,qe={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dr(){return{controller:new sh,data:new Map,refCount:0}}function ul(e){e.refCount--,e.refCount===0&&rh(oh,function(){e.controller.abort()})}var fl=null,mr=0,Aa=0,Ca=null;function ch(e,t){if(fl===null){var n=fl=[];mr=0,Aa=yo(),Ca={status:"pending",value:void 0,then:function(a){n.push(a)}}}return mr++,t.then(yu,yu),t}function yu(){if(--mr===0&&fl!==null){Ca!==null&&(Ca.status="fulfilled");var e=fl;fl=null,Aa=0,Ca=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function uh(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var gu=T.S;T.S=function(e,t){nd=bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ch(e,t),gu!==null&&gu(e,t)};var $n=g(null);function pr(){var e=$n.current;return e!==null?e:je.pooledCache}function yi(e,t){t===null?k($n,$n.current):k($n,t.pool)}function vu(){var e=pr();return e===null?null:{parent:qe._currentValue,pool:e}}var ja=Error(o(460)),hr=Error(o(474)),gi=Error(o(542)),vi={then:function(){}};function xu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Su(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ft,Ft),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Eu(e),e;default:if(typeof t.status=="string")t.then(Ft,Ft);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Eu(e),e}throw ea=t,ja}}function Pn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ea=n,ja):n}}var ea=null;function wu(){if(ea===null)throw Error(o(459));var e=ea;return ea=null,e}function Eu(e){if(e===ja||e===gi)throw Error(o(483))}var Ta=null,dl=0;function xi(e){var t=dl;return dl+=1,Ta===null&&(Ta=[]),Su(Ta,e,t)}function ml(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Si(e,t){throw t.$$typeof===B?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Au(e){function t(S,y){if(e){var E=S.deletions;E===null?(S.deletions=[y],S.flags|=16):E.push(y)}}function n(S,y){if(!e)return null;for(;y!==null;)t(S,y),y=y.sibling;return null}function a(S){for(var y=new Map;S!==null;)S.key!==null?y.set(S.key,S):y.set(S.index,S),S=S.sibling;return y}function l(S,y){return S=$t(S,y),S.index=0,S.sibling=null,S}function i(S,y,E){return S.index=E,e?(E=S.alternate,E!==null?(E=E.index,E<y?(S.flags|=67108866,y):E):(S.flags|=67108866,y)):(S.flags|=1048576,y)}function r(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function u(S,y,E,M){return y===null||y.tag!==6?(y=ar(E,S.mode,M),y.return=S,y):(y=l(y,E),y.return=S,y)}function h(S,y,E,M){var J=E.type;return J===Y?L(S,y,E.props.children,M,E.key):y!==null&&(y.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Re&&Pn(J)===y.type)?(y=l(y,E.props),ml(y,E),y.return=S,y):(y=mi(E.type,E.key,E.props,null,S.mode,M),ml(y,E),y.return=S,y)}function A(S,y,E,M){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=lr(E,S.mode,M),y.return=S,y):(y=l(y,E.children||[]),y.return=S,y)}function L(S,y,E,M,J){return y===null||y.tag!==7?(y=Kn(E,S.mode,M,J),y.return=S,y):(y=l(y,E),y.return=S,y)}function D(S,y,E){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=ar(""+y,S.mode,E),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case q:return E=mi(y.type,y.key,y.props,null,S.mode,E),ml(E,y),E.return=S,E;case Z:return y=lr(y,S.mode,E),y.return=S,y;case Re:return y=Pn(y),D(S,y,E)}if(ne(y)||Ve(y))return y=Kn(y,S.mode,E,null),y.return=S,y;if(typeof y.then=="function")return D(S,xi(y),E);if(y.$$typeof===W)return D(S,bi(S,y),E);Si(S,y)}return null}function j(S,y,E,M){var J=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return J!==null?null:u(S,y,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case q:return E.key===J?h(S,y,E,M):null;case Z:return E.key===J?A(S,y,E,M):null;case Re:return E=Pn(E),j(S,y,E,M)}if(ne(E)||Ve(E))return J!==null?null:L(S,y,E,M,null);if(typeof E.then=="function")return j(S,y,xi(E),M);if(E.$$typeof===W)return j(S,y,bi(S,E),M);Si(S,E)}return null}function R(S,y,E,M,J){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return S=S.get(E)||null,u(y,S,""+M,J);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case q:return S=S.get(M.key===null?E:M.key)||null,h(y,S,M,J);case Z:return S=S.get(M.key===null?E:M.key)||null,A(y,S,M,J);case Re:return M=Pn(M),R(S,y,E,M,J)}if(ne(M)||Ve(M))return S=S.get(E)||null,L(y,S,M,J,null);if(typeof M.then=="function")return R(S,y,E,xi(M),J);if(M.$$typeof===W)return R(S,y,E,bi(y,M),J);Si(y,M)}return null}function X(S,y,E,M){for(var J=null,me=null,V=y,ae=y=0,ue=null;V!==null&&ae<E.length;ae++){V.index>ae?(ue=V,V=null):ue=V.sibling;var pe=j(S,V,E[ae],M);if(pe===null){V===null&&(V=ue);break}e&&V&&pe.alternate===null&&t(S,V),y=i(pe,y,ae),me===null?J=pe:me.sibling=pe,me=pe,V=ue}if(ae===E.length)return n(S,V),fe&&Pt(S,ae),J;if(V===null){for(;ae<E.length;ae++)V=D(S,E[ae],M),V!==null&&(y=i(V,y,ae),me===null?J=V:me.sibling=V,me=V);return fe&&Pt(S,ae),J}for(V=a(V);ae<E.length;ae++)ue=R(V,S,ae,E[ae],M),ue!==null&&(e&&ue.alternate!==null&&V.delete(ue.key===null?ae:ue.key),y=i(ue,y,ae),me===null?J=ue:me.sibling=ue,me=ue);return e&&V.forEach(function(kn){return t(S,kn)}),fe&&Pt(S,ae),J}function K(S,y,E,M){if(E==null)throw Error(o(151));for(var J=null,me=null,V=y,ae=y=0,ue=null,pe=E.next();V!==null&&!pe.done;ae++,pe=E.next()){V.index>ae?(ue=V,V=null):ue=V.sibling;var kn=j(S,V,pe.value,M);if(kn===null){V===null&&(V=ue);break}e&&V&&kn.alternate===null&&t(S,V),y=i(kn,y,ae),me===null?J=kn:me.sibling=kn,me=kn,V=ue}if(pe.done)return n(S,V),fe&&Pt(S,ae),J;if(V===null){for(;!pe.done;ae++,pe=E.next())pe=D(S,pe.value,M),pe!==null&&(y=i(pe,y,ae),me===null?J=pe:me.sibling=pe,me=pe);return fe&&Pt(S,ae),J}for(V=a(V);!pe.done;ae++,pe=E.next())pe=R(V,S,ae,pe.value,M),pe!==null&&(e&&pe.alternate!==null&&V.delete(pe.key===null?ae:pe.key),y=i(pe,y,ae),me===null?J=pe:me.sibling=pe,me=pe);return e&&V.forEach(function(Sb){return t(S,Sb)}),fe&&Pt(S,ae),J}function Ae(S,y,E,M){if(typeof E=="object"&&E!==null&&E.type===Y&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case q:e:{for(var J=E.key;y!==null;){if(y.key===J){if(J=E.type,J===Y){if(y.tag===7){n(S,y.sibling),M=l(y,E.props.children),M.return=S,S=M;break e}}else if(y.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Re&&Pn(J)===y.type){n(S,y.sibling),M=l(y,E.props),ml(M,E),M.return=S,S=M;break e}n(S,y);break}else t(S,y);y=y.sibling}E.type===Y?(M=Kn(E.props.children,S.mode,M,E.key),M.return=S,S=M):(M=mi(E.type,E.key,E.props,null,S.mode,M),ml(M,E),M.return=S,S=M)}return r(S);case Z:e:{for(J=E.key;y!==null;){if(y.key===J)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n(S,y.sibling),M=l(y,E.children||[]),M.return=S,S=M;break e}else{n(S,y);break}else t(S,y);y=y.sibling}M=lr(E,S.mode,M),M.return=S,S=M}return r(S);case Re:return E=Pn(E),Ae(S,y,E,M)}if(ne(E))return X(S,y,E,M);if(Ve(E)){if(J=Ve(E),typeof J!="function")throw Error(o(150));return E=J.call(E),K(S,y,E,M)}if(typeof E.then=="function")return Ae(S,y,xi(E),M);if(E.$$typeof===W)return Ae(S,y,bi(S,E),M);Si(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,y!==null&&y.tag===6?(n(S,y.sibling),M=l(y,E),M.return=S,S=M):(n(S,y),M=ar(E,S.mode,M),M.return=S,S=M),r(S)):n(S,y)}return function(S,y,E,M){try{dl=0;var J=Ae(S,y,E,M);return Ta=null,J}catch(V){if(V===ja||V===gi)throw V;var me=xt(29,V,null,S.mode);return me.lanes=M,me.return=S,me}finally{}}}var ta=Au(!0),Cu=Au(!1),wn=!1;function br(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function En(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(be&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=di(e),ou(e,null,n),t}return fi(e,a,t,n),di(e)}function pl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,bc(e,n)}}function gr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var vr=!1;function hl(){if(vr){var e=Ca;if(e!==null)throw e}}function bl(e,t,n,a){vr=!1;var l=e.updateQueue;wn=!1;var i=l.firstBaseUpdate,r=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var h=u,A=h.next;h.next=null,r===null?i=A:r.next=A,r=h;var L=e.alternate;L!==null&&(L=L.updateQueue,u=L.lastBaseUpdate,u!==r&&(u===null?L.firstBaseUpdate=A:u.next=A,L.lastBaseUpdate=h))}if(i!==null){var D=l.baseState;r=0,L=A=h=null,u=i;do{var j=u.lane&-536870913,R=j!==u.lane;if(R?(ce&j)===j:(a&j)===j){j!==0&&j===Aa&&(vr=!0),L!==null&&(L=L.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var X=e,K=u;j=t;var Ae=n;switch(K.tag){case 1:if(X=K.payload,typeof X=="function"){D=X.call(Ae,D,j);break e}D=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=K.payload,j=typeof X=="function"?X.call(Ae,D,j):X,j==null)break e;D=z({},D,j);break e;case 2:wn=!0}}j=u.callback,j!==null&&(e.flags|=64,R&&(e.flags|=8192),R=l.callbacks,R===null?l.callbacks=[j]:R.push(j))}else R={lane:j,tag:u.tag,payload:u.payload,callback:u.callback,next:null},L===null?(A=L=R,h=D):L=L.next=R,r|=j;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;R=u,u=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);L===null&&(h=D),l.baseState=h,l.firstBaseUpdate=A,l.lastBaseUpdate=L,i===null&&(l.shared.lanes=0),zn|=r,e.lanes=r,e.memoizedState=D}}function ju(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Tu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ju(n[e],t)}var _a=g(null),wi=g(0);function _u(e,t){e=fn,k(wi,e),k(_a,t),fn=e|t.baseLanes}function xr(){k(wi,fn),k(_a,_a.current)}function Sr(){fn=wi.current,N(_a),N(wi)}var St=g(null),Dt=null;function Cn(e){var t=e.alternate;k(He,He.current&1),k(St,e),Dt===null&&(t===null||_a.current!==null||t.memoizedState!==null)&&(Dt=e)}function wr(e){k(He,He.current),k(St,e),Dt===null&&(Dt=e)}function zu(e){e.tag===22?(k(He,He.current),k(St,e),Dt===null&&(Dt=e)):jn()}function jn(){k(He,He.current),k(St,St.current)}function wt(e){N(St),Dt===e&&(Dt=null),N(He)}var He=g(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||zo(n)||Ro(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nn=0,te=null,we=null,Ye=null,Ai=!1,za=!1,na=!1,Ci=0,yl=0,Ra=null,fh=0;function De(){throw Error(o(321))}function Er(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Ar(e,t,n,a,l,i){return nn=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?mf:kr,na=!1,i=n(a,l),na=!1,za&&(i=Ou(t,n,a,l)),Ru(e),i}function Ru(e){T.H=xl;var t=we!==null&&we.next!==null;if(nn=0,Ye=we=te=null,Ai=!1,yl=0,Ra=null,t)throw Error(o(300));e===null||Ge||(e=e.dependencies,e!==null&&hi(e)&&(Ge=!0))}function Ou(e,t,n,a){te=e;var l=0;do{if(za&&(Ra=null),yl=0,za=!1,25<=l)throw Error(o(301));if(l+=1,Ye=we=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=pf,i=t(n,a)}while(za);return i}function dh(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?gl(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(te.flags|=1024),t}function Cr(){var e=Ci!==0;return Ci=0,e}function jr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Tr(e){if(Ai){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ai=!1}nn=0,Ye=we=te=null,za=!1,yl=Ci=0,Ra=null}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?te.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ue(){if(we===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Ye===null?te.memoizedState:Ye.next;if(t!==null)Ye=t,we=e;else{if(e===null)throw te.alternate===null?Error(o(467)):Error(o(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ye===null?te.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function ji(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gl(e){var t=yl;return yl+=1,Ra===null&&(Ra=[]),e=Su(Ra,e,t),t=te,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?mf:kr),e}function Ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gl(e);if(e.$$typeof===W)return Ie(e)}throw Error(o(438,String(e)))}function _r(e){var t=null,n=te.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=te.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ji(),te.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=pt;return t.index++,n}function an(e,t){return typeof t=="function"?t(e):t}function _i(e){var t=Ue();return zr(t,we,e)}function zr(e,t,n){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var r=l.next;l.next=i.next,i.next=r}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var u=r=null,h=null,A=t,L=!1;do{var D=A.lane&-536870913;if(D!==A.lane?(ce&D)===D:(nn&D)===D){var j=A.revertLane;if(j===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),D===Aa&&(L=!0);else if((nn&j)===j){A=A.next,j===Aa&&(L=!0);continue}else D={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},h===null?(u=h=D,r=i):h=h.next=D,te.lanes|=j,zn|=j;D=A.action,na&&n(i,D),i=A.hasEagerState?A.eagerState:n(i,D)}else j={lane:D,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},h===null?(u=h=j,r=i):h=h.next=j,te.lanes|=D,zn|=D;A=A.next}while(A!==null&&A!==t);if(h===null?r=i:h.next=u,!vt(i,e.memoizedState)&&(Ge=!0,L&&(n=Ca,n!==null)))throw n;e.memoizedState=i,e.baseState=r,e.baseQueue=h,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Rr(e){var t=Ue(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var r=l=l.next;do i=e(i,r.action),r=r.next;while(r!==l);vt(i,t.memoizedState)||(Ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Lu(e,t,n){var a=te,l=Ue(),i=fe;if(i){if(n===void 0)throw Error(o(407));n=n()}else n=t();var r=!vt((we||l).memoizedState,n);if(r&&(l.memoizedState=n,Ge=!0),l=l.queue,Mr(Nu.bind(null,a,l,e),[e]),l.getSnapshot!==t||r||Ye!==null&&Ye.memoizedState.tag&1){if(a.flags|=2048,Oa(9,{destroy:void 0},Du.bind(null,a,l,n,t),null),je===null)throw Error(o(349));i||(nn&127)!==0||Mu(a,t,n)}return n}function Mu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t=ji(),te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Du(e,t,n,a){t.value=n,t.getSnapshot=a,Bu(t)&&Hu(e)}function Nu(e,t,n){return n(function(){Bu(t)&&Hu(e)})}function Bu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Hu(e){var t=Jn(e,2);t!==null&&mt(t,e,2)}function Or(e){var t=at();if(typeof e=="function"){var n=e;if(e=n(),na){hn(!0);try{n()}finally{hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:e},t}function Uu(e,t,n,a){return e.baseState=n,zr(e,we,typeof a=="function"?a:an)}function mh(e,t,n,a,l){if(Oi(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};T.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,ku(t,i)):(i.next=n.next,t.pending=n.next=i)}}function ku(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=T.T,r={};T.T=r;try{var u=n(l,a),h=T.S;h!==null&&h(r,u),qu(e,t,u)}catch(A){Lr(e,t,A)}finally{i!==null&&r.types!==null&&(i.types=r.types),T.T=i}}else try{i=n(l,a),qu(e,t,i)}catch(A){Lr(e,t,A)}}function qu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Yu(e,t,a)},function(a){return Lr(e,t,a)}):Yu(e,t,n)}function Yu(e,t,n){t.status="fulfilled",t.value=n,Gu(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ku(e,n)))}function Lr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Gu(t),t=t.next;while(t!==a)}e.action=null}function Gu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xu(e,t){return t}function Qu(e,t){if(fe){var n=je.formState;if(n!==null){e:{var a=te;if(fe){if(_e){t:{for(var l=_e,i=Mt;l.nodeType!==8;){if(!i){l=null;break t}if(l=Nt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){_e=Nt(l.nextSibling),a=l.data==="F!";break e}}xn(a)}a=!1}a&&(t=n[0])}}return n=at(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xu,lastRenderedState:t},n.queue=a,n=uf.bind(null,te,a),a.dispatch=n,a=Or(!1),i=Ur.bind(null,te,!1,a.queue),a=at(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=mh.bind(null,te,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Vu(e){var t=Ue();return Zu(t,we,e)}function Zu(e,t,n){if(t=zr(e,t,Xu)[0],e=_i(an)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=gl(t)}catch(r){throw r===ja?gi:r}else a=t;t=Ue();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(te.flags|=2048,Oa(9,{destroy:void 0},ph.bind(null,l,n),null)),[a,i,e]}function ph(e,t){e.action=t}function Ju(e){var t=Ue(),n=we;if(n!==null)return Zu(t,n,e);Ue(),t=t.memoizedState,n=Ue();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Oa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=te.updateQueue,t===null&&(t=ji(),te.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Ku(){return Ue().memoizedState}function zi(e,t,n,a){var l=at();te.flags|=e,l.memoizedState=Oa(1|t,{destroy:void 0},n,a===void 0?null:a)}function Ri(e,t,n,a){var l=Ue();a=a===void 0?null:a;var i=l.memoizedState.inst;we!==null&&a!==null&&Er(a,we.memoizedState.deps)?l.memoizedState=Oa(t,i,n,a):(te.flags|=e,l.memoizedState=Oa(1|t,i,n,a))}function Wu(e,t){zi(8390656,8,e,t)}function Mr(e,t){Ri(2048,8,e,t)}function hh(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=ji(),te.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Fu(e){var t=Ue().memoizedState;return hh({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Iu(e,t){return Ri(4,2,e,t)}function $u(e,t){return Ri(4,4,e,t)}function Pu(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ef(e,t,n){n=n!=null?n.concat([e]):null,Ri(4,4,Pu.bind(null,t,e),n)}function Dr(){}function tf(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Er(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function nf(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Er(t,a[1]))return a[0];if(a=e(),na){hn(!0);try{e()}finally{hn(!1)}}return n.memoizedState=[a,t],a}function Nr(e,t,n){return n===void 0||(nn&1073741824)!==0&&(ce&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=ld(),te.lanes|=e,zn|=e,n)}function af(e,t,n,a){return vt(n,t)?n:_a.current!==null?(e=Nr(e,n,a),vt(e,t)||(Ge=!0),e):(nn&42)===0||(nn&1073741824)!==0&&(ce&261930)===0?(Ge=!0,e.memoizedState=n):(e=ld(),te.lanes|=e,zn|=e,t)}function lf(e,t,n,a,l){var i=H.p;H.p=i!==0&&8>i?i:8;var r=T.T,u={};T.T=u,Ur(e,!1,t,n);try{var h=l(),A=T.S;if(A!==null&&A(u,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var L=uh(h,a);vl(e,t,L,Ct(e))}else vl(e,t,a,Ct(e))}catch(D){vl(e,t,{then:function(){},status:"rejected",reason:D},Ct())}finally{H.p=i,r!==null&&u.types!==null&&(r.types=u.types),T.T=r}}function bh(){}function Br(e,t,n,a){if(e.tag!==5)throw Error(o(476));var l=sf(e).queue;lf(e,l,t,F,n===null?bh:function(){return rf(e),n(a)})}function sf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:F},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rf(e){var t=sf(e);t.next===null&&(t=e.alternate.memoizedState),vl(e,t.next.queue,{},Ct())}function Hr(){return Ie(Bl)}function of(){return Ue().memoizedState}function cf(){return Ue().memoizedState}function yh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ct();e=En(n);var a=An(t,e,n);a!==null&&(mt(a,t,n),pl(a,t,n)),t={cache:dr()},e.payload=t;return}t=t.return}}function gh(e,t,n){var a=Ct();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Oi(e)?ff(t,n):(n=tr(e,t,n,a),n!==null&&(mt(n,e,a),df(n,t,a)))}function uf(e,t,n){var a=Ct();vl(e,t,n,a)}function vl(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Oi(e))ff(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,u=i(r,n);if(l.hasEagerState=!0,l.eagerState=u,vt(u,r))return fi(e,t,l,0),je===null&&ui(),!1}catch{}finally{}if(n=tr(e,t,l,a),n!==null)return mt(n,e,a),df(n,t,a),!0}return!1}function Ur(e,t,n,a){if(a={lane:2,revertLane:yo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Oi(e)){if(t)throw Error(o(479))}else t=tr(e,n,a,2),t!==null&&mt(t,e,2)}function Oi(e){var t=e.alternate;return e===te||t!==null&&t===te}function ff(e,t){za=Ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function df(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,bc(e,n)}}var xl={readContext:Ie,use:Ti,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};xl.useEffectEvent=De;var mf={readContext:Ie,use:Ti,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Wu,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,zi(4194308,4,Pu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){zi(4,2,e,t)},useMemo:function(e,t){var n=at();t=t===void 0?null:t;var a=e();if(na){hn(!0);try{e()}finally{hn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=at();if(n!==void 0){var l=n(t);if(na){hn(!0);try{n(t)}finally{hn(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=gh.bind(null,te,e),[a.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:function(e){e=Or(e);var t=e.queue,n=uf.bind(null,te,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Dr,useDeferredValue:function(e,t){var n=at();return Nr(n,e,t)},useTransition:function(){var e=Or(!1);return e=lf.bind(null,te,e.queue,!0,!1),at().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=te,l=at();if(fe){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),je===null)throw Error(o(349));(ce&127)!==0||Mu(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Wu(Nu.bind(null,a,i,e),[e]),a.flags|=2048,Oa(9,{destroy:void 0},Du.bind(null,a,i,n,t),null),n},useId:function(){var e=at(),t=je.identifierPrefix;if(fe){var n=Vt,a=Qt;n=(a&~(1<<32-gt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ci++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=fh++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Hr,useFormState:Qu,useActionState:Qu,useOptimistic:function(e){var t=at();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ur.bind(null,te,!0,n),n.dispatch=t,[e,t]},useMemoCache:_r,useCacheRefresh:function(){return at().memoizedState=yh.bind(null,te)},useEffectEvent:function(e){var t=at(),n={impl:e};return t.memoizedState=n,function(){if((be&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},kr={readContext:Ie,use:Ti,useCallback:tf,useContext:Ie,useEffect:Mr,useImperativeHandle:ef,useInsertionEffect:Iu,useLayoutEffect:$u,useMemo:nf,useReducer:_i,useRef:Ku,useState:function(){return _i(an)},useDebugValue:Dr,useDeferredValue:function(e,t){var n=Ue();return af(n,we.memoizedState,e,t)},useTransition:function(){var e=_i(an)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:gl(e),t]},useSyncExternalStore:Lu,useId:of,useHostTransitionStatus:Hr,useFormState:Vu,useActionState:Vu,useOptimistic:function(e,t){var n=Ue();return Uu(n,we,e,t)},useMemoCache:_r,useCacheRefresh:cf};kr.useEffectEvent=Fu;var pf={readContext:Ie,use:Ti,useCallback:tf,useContext:Ie,useEffect:Mr,useImperativeHandle:ef,useInsertionEffect:Iu,useLayoutEffect:$u,useMemo:nf,useReducer:Rr,useRef:Ku,useState:function(){return Rr(an)},useDebugValue:Dr,useDeferredValue:function(e,t){var n=Ue();return we===null?Nr(n,e,t):af(n,we.memoizedState,e,t)},useTransition:function(){var e=Rr(an)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:gl(e),t]},useSyncExternalStore:Lu,useId:of,useHostTransitionStatus:Hr,useFormState:Ju,useActionState:Ju,useOptimistic:function(e,t){var n=Ue();return we!==null?Uu(n,we,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:_r,useCacheRefresh:cf};pf.useEffectEvent=Fu;function qr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yr={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ct(),l=En(a);l.payload=t,n!=null&&(l.callback=n),t=An(e,l,a),t!==null&&(mt(t,e,a),pl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ct(),l=En(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=An(e,l,a),t!==null&&(mt(t,e,a),pl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ct(),a=En(n);a.tag=2,t!=null&&(a.callback=t),t=An(e,a,n),t!==null&&(mt(t,e,n),pl(t,e,n))}};function hf(e,t,n,a,l,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,r):t.prototype&&t.prototype.isPureReactComponent?!sl(n,a)||!sl(l,i):!0}function bf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Yr.enqueueReplaceState(t,t.state,null)}function aa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=z({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function yf(e){ci(e)}function gf(e){console.error(e)}function vf(e){ci(e)}function Li(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function xf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Gr(e,t,n){return n=En(n),n.tag=3,n.payload={element:null},n.callback=function(){Li(e,t)},n}function Sf(e){return e=En(e),e.tag=3,e}function wf(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){xf(t,n,a)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){xf(t,n,a),typeof l!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function vh(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ea(t,n,l,!0),n=St.current,n!==null){switch(n.tag){case 31:case 13:return Dt===null?Qi():n.alternate===null&&Ne===0&&(Ne=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===vi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),po(e,a,l)),!1;case 22:return n.flags|=65536,a===vi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),po(e,a,l)),!1}throw Error(o(435,n.tag))}return po(e,a,l),Qi(),!1}if(fe)return t=St.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==rr&&(e=Error(o(422),{cause:a}),cl(Rt(e,n)))):(a!==rr&&(t=Error(o(423),{cause:a}),cl(Rt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Rt(a,n),l=Gr(e.stateNode,a,l),gr(e,l),Ne!==4&&(Ne=2)),!1;var i=Error(o(520),{cause:a});if(i=Rt(i,n),_l===null?_l=[i]:_l.push(i),Ne!==4&&(Ne=2),t===null)return!0;a=Rt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Gr(n.stateNode,a,e),gr(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Rn===null||!Rn.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Sf(l),wf(l,e,n,a),gr(n,l),!1}n=n.return}while(n!==null);return!1}var Xr=Error(o(461)),Ge=!1;function $e(e,t,n,a){t.child=e===null?Cu(t,null,n,a):ta(t,e.child,n,a)}function Ef(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var r={};for(var u in a)u!=="ref"&&(r[u]=a[u])}else r=a;return In(t),a=Ar(e,t,n,r,i,l),u=Cr(),e!==null&&!Ge?(jr(e,t,l),ln(e,t,l)):(fe&&u&&ir(t),t.flags|=1,$e(e,t,a,l),t.child)}function Af(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!nr(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Cf(e,t,i,a,l)):(e=mi(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ir(e,l)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:sl,n(r,a)&&e.ref===t.ref)return ln(e,t,l)}return t.flags|=1,e=$t(i,a),e.ref=t.ref,e.return=t,t.child=e}function Cf(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(sl(i,a)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=a=i,Ir(e,l))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,ln(e,t,l)}return Qr(e,t,n,a,l)}function jf(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return Tf(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yi(t,i!==null?i.cachePool:null),i!==null?_u(t,i):xr(),zu(t);else return a=t.lanes=536870912,Tf(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(yi(t,i.cachePool),_u(t,i),jn(),t.memoizedState=null):(e!==null&&yi(t,null),xr(),jn());return $e(e,t,l,n),t.child}function Sl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Tf(e,t,n,a,l){var i=pr();return i=i===null?null:{parent:qe._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&yi(t,null),xr(),zu(t),e!==null&&Ea(e,t,a,!0),t.childLanes=l,null}function Mi(e,t){return t=Ni({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function _f(e,t,n){return ta(t,e.child,null,n),e=Mi(t,t.pendingProps),e.flags|=2,wt(t),t.memoizedState=null,e}function xh(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(a.mode==="hidden")return e=Mi(t,a),t.lanes=536870912,Sl(null,e);if(wr(t),(e=_e)?(e=qd(e,Mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:gn!==null?{id:Qt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},n=uu(e),n.return=t,t.child=n,Fe=t,_e=null)):e=null,e===null)throw xn(t);return t.lanes=536870912,null}return Mi(t,a)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(wr(t),l)if(t.flags&256)t.flags&=-257,t=_f(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Ge||Ea(e,t,n,!1),l=(n&e.childLanes)!==0,Ge||l){if(a=je,a!==null&&(r=yc(a,n),r!==0&&r!==i.retryLane))throw i.retryLane=r,Jn(e,r),mt(a,e,r),Xr;Qi(),t=_f(e,t,n)}else e=i.treeContext,_e=Nt(r.nextSibling),Fe=t,fe=!0,vn=null,Mt=!1,e!==null&&mu(t,e),t=Mi(t,a),t.flags|=4096;return t}return e=$t(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Di(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Qr(e,t,n,a,l){return In(t),n=Ar(e,t,n,a,void 0,l),a=Cr(),e!==null&&!Ge?(jr(e,t,l),ln(e,t,l)):(fe&&a&&ir(t),t.flags|=1,$e(e,t,n,l),t.child)}function zf(e,t,n,a,l,i){return In(t),t.updateQueue=null,n=Ou(t,a,n,l),Ru(e),a=Cr(),e!==null&&!Ge?(jr(e,t,i),ln(e,t,i)):(fe&&a&&ir(t),t.flags|=1,$e(e,t,n,i),t.child)}function Rf(e,t,n,a,l){if(In(t),t.stateNode===null){var i=va,r=n.contextType;typeof r=="object"&&r!==null&&(i=Ie(r)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Yr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},br(t),r=n.contextType,i.context=typeof r=="object"&&r!==null?Ie(r):va,i.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(qr(t,n,r,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Yr.enqueueReplaceState(i,i.state,null),bl(t,a,i,l),hl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,h=aa(n,u);i.props=h;var A=i.context,L=n.contextType;r=va,typeof L=="object"&&L!==null&&(r=Ie(L));var D=n.getDerivedStateFromProps;L=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,L||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||A!==r)&&bf(t,i,a,r),wn=!1;var j=t.memoizedState;i.state=j,bl(t,a,i,l),hl(),A=t.memoizedState,u||j!==A||wn?(typeof D=="function"&&(qr(t,n,D,a),A=t.memoizedState),(h=wn||hf(t,n,h,a,j,A,r))?(L||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),i.props=a,i.state=A,i.context=r,a=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,yr(e,t),r=t.memoizedProps,L=aa(n,r),i.props=L,D=t.pendingProps,j=i.context,A=n.contextType,h=va,typeof A=="object"&&A!==null&&(h=Ie(A)),u=n.getDerivedStateFromProps,(A=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==D||j!==h)&&bf(t,i,a,h),wn=!1,j=t.memoizedState,i.state=j,bl(t,a,i,l),hl();var R=t.memoizedState;r!==D||j!==R||wn||e!==null&&e.dependencies!==null&&hi(e.dependencies)?(typeof u=="function"&&(qr(t,n,u,a),R=t.memoizedState),(L=wn||hf(t,n,L,a,j,R,h)||e!==null&&e.dependencies!==null&&hi(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,R,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,R,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=R),i.props=a,i.state=R,i.context=h,a=L):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Di(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=ta(t,e.child,null,l),t.child=ta(t,null,n,l)):$e(e,t,n,l),t.memoizedState=i.state,e=t.child):e=ln(e,t,l),e}function Of(e,t,n,a){return Wn(),t.flags|=256,$e(e,t,n,a),t.child}var Vr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zr(e){return{baseLanes:e,cachePool:vu()}}function Jr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=At),e}function Lf(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),r&&(l=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(l?Cn(t):jn(),(e=_e)?(e=qd(e,Mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:gn!==null?{id:Qt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},n=uu(e),n.return=t,t.child=n,Fe=t,_e=null)):e=null,e===null)throw xn(t);return Ro(e)?t.lanes=32:t.lanes=536870912,null}var u=a.children;return a=a.fallback,l?(jn(),l=t.mode,u=Ni({mode:"hidden",children:u},l),a=Kn(a,l,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,a=t.child,a.memoizedState=Zr(n),a.childLanes=Jr(e,r,n),t.memoizedState=Vr,Sl(null,a)):(Cn(t),Kr(t,u))}var h=e.memoizedState;if(h!==null&&(u=h.dehydrated,u!==null)){if(i)t.flags&256?(Cn(t),t.flags&=-257,t=Wr(e,t,n)):t.memoizedState!==null?(jn(),t.child=e.child,t.flags|=128,t=null):(jn(),u=a.fallback,l=t.mode,a=Ni({mode:"visible",children:a.children},l),u=Kn(u,l,n,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,ta(t,e.child,null,n),a=t.child,a.memoizedState=Zr(n),a.childLanes=Jr(e,r,n),t.memoizedState=Vr,t=Sl(null,a));else if(Cn(t),Ro(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var A=r.dgst;r=A,a=Error(o(419)),a.stack="",a.digest=r,cl({value:a,source:null,stack:null}),t=Wr(e,t,n)}else if(Ge||Ea(e,t,n,!1),r=(n&e.childLanes)!==0,Ge||r){if(r=je,r!==null&&(a=yc(r,n),a!==0&&a!==h.retryLane))throw h.retryLane=a,Jn(e,a),mt(r,e,a),Xr;zo(u)||Qi(),t=Wr(e,t,n)}else zo(u)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,_e=Nt(u.nextSibling),Fe=t,fe=!0,vn=null,Mt=!1,e!==null&&mu(t,e),t=Kr(t,a.children),t.flags|=4096);return t}return l?(jn(),u=a.fallback,l=t.mode,h=e.child,A=h.sibling,a=$t(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,A!==null?u=$t(A,u):(u=Kn(u,l,n,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,Sl(null,a),a=t.child,u=e.child.memoizedState,u===null?u=Zr(n):(l=u.cachePool,l!==null?(h=qe._currentValue,l=l.parent!==h?{parent:h,pool:h}:l):l=vu(),u={baseLanes:u.baseLanes|n,cachePool:l}),a.memoizedState=u,a.childLanes=Jr(e,r,n),t.memoizedState=Vr,Sl(e.child,a)):(Cn(t),n=e.child,e=n.sibling,n=$t(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Kr(e,t){return t=Ni({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ni(e,t){return e=xt(22,e,null,t),e.lanes=0,e}function Wr(e,t,n){return ta(t,e.child,null,n),e=Kr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ur(e.return,t,n)}function Fr(e,t,n,a,l,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l,r.treeForkCount=i)}function Df(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var r=He.current,u=(r&2)!==0;if(u?(r=r&1|2,t.flags|=128):r&=1,k(He,r),$e(e,t,a,n),a=fe?ol:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mf(e,n,t);else if(e.tag===19)Mf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ei(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Fr(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ei(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Fr(t,!0,n,null,i,a);break;case"together":Fr(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ir(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hi(e)))}function Sh(e,t,n){switch(t.tag){case 3:nt(t,t.stateNode.containerInfo),Sn(t,qe,e.memoizedState.cache),Wn();break;case 27:case 5:Ja(t);break;case 4:nt(t,t.stateNode.containerInfo);break;case 10:Sn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wr(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Cn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Lf(e,t,n):(Cn(t),e=ln(e,t,n),e!==null?e.sibling:null);Cn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ea(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Df(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),k(He,He.current),a)break;return null;case 22:return t.lanes=0,jf(e,t,n,t.pendingProps);case 24:Sn(t,qe,e.memoizedState.cache)}return ln(e,t,n)}function Nf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!Ir(e,n)&&(t.flags&128)===0)return Ge=!1,Sh(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,fe&&(t.flags&1048576)!==0&&du(t,ol,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Pn(t.elementType),t.type=e,typeof e=="function")nr(e)?(a=aa(e,a),t.tag=1,t=Rf(null,t,e,a,n)):(t.tag=0,t=Qr(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===he){t.tag=11,t=Ef(null,t,e,a,n);break e}else if(l===I){t.tag=14,t=Af(null,t,e,a,n);break e}}throw t=st(e)||e,Error(o(306,t,""))}}return t;case 0:return Qr(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=aa(a,t.pendingProps),Rf(e,t,a,l,n);case 3:e:{if(nt(t,t.stateNode.containerInfo),e===null)throw Error(o(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,yr(e,t),bl(t,a,null,n);var r=t.memoizedState;if(a=r.cache,Sn(t,qe,a),a!==i.cache&&fr(t,[qe],n,!0),hl(),a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Of(e,t,a,n);break e}else if(a!==l){l=Rt(Error(o(424)),t),cl(l),t=Of(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=Nt(e.firstChild),Fe=t,fe=!0,vn=null,Mt=!0,n=Cu(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wn(),a===l){t=ln(e,t,n);break e}$e(e,t,a,n)}t=t.child}return t;case 26:return Di(e,t),e===null?(n=Zd(t.type,null,t.pendingProps,null))?t.memoizedState=n:fe||(n=t.type,e=t.pendingProps,a=Ii(ie.current).createElement(n),a[We]=t,a[rt]=e,Pe(a,n,e),Je(a),t.stateNode=a):t.memoizedState=Zd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ja(t),e===null&&fe&&(a=t.stateNode=Xd(t.type,t.pendingProps,ie.current),Fe=t,Mt=!0,l=_e,Dn(t.type)?(Oo=l,_e=Nt(a.firstChild)):_e=l),$e(e,t,t.pendingProps.children,n),Di(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((l=a=_e)&&(a=Ih(a,t.type,t.pendingProps,Mt),a!==null?(t.stateNode=a,Fe=t,_e=Nt(a.firstChild),Mt=!1,l=!0):l=!1),l||xn(t)),Ja(t),l=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,a=i.children,jo(l,i)?a=null:r!==null&&jo(l,r)&&(t.flags|=32),t.memoizedState!==null&&(l=Ar(e,t,dh,null,null,n),Bl._currentValue=l),Di(e,t),$e(e,t,a,n),t.child;case 6:return e===null&&fe&&((e=n=_e)&&(n=$h(n,t.pendingProps,Mt),n!==null?(t.stateNode=n,Fe=t,_e=null,e=!0):e=!1),e||xn(t)),null;case 13:return Lf(e,t,n);case 4:return nt(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ta(t,null,a,n):$e(e,t,a,n),t.child;case 11:return Ef(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Sn(t,t.type,a.value),$e(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,In(t),l=Ie(l),a=a(l),t.flags|=1,$e(e,t,a,n),t.child;case 14:return Af(e,t,t.type,t.pendingProps,n);case 15:return Cf(e,t,t.type,t.pendingProps,n);case 19:return Df(e,t,n);case 31:return xh(e,t,n);case 22:return jf(e,t,n,t.pendingProps);case 24:return In(t),a=Ie(qe),e===null?(l=pr(),l===null&&(l=je,i=dr(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},br(t),Sn(t,qe,l)):((e.lanes&n)!==0&&(yr(e,t),bl(t,null,null,n),hl()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Sn(t,qe,a)):(a=i.cache,Sn(t,qe,a),a!==l.cache&&fr(t,[qe],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function sn(e){e.flags|=4}function $r(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(od())e.flags|=8192;else throw ea=vi,hr}else e.flags&=-16777217}function Bf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Id(t))if(od())e.flags|=8192;else throw ea=vi,hr}function Bi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?pc():536870912,e.lanes|=t,Na|=t)}function wl(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function wh(e,t,n){var a=t.pendingProps;switch(sr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),tn(qe),Be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(wa(t)?sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,or())),ze(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(sn(t),i!==null?(ze(t),Bf(t,i)):(ze(t),$r(t,l,null,a,n))):i?i!==e.memoizedState?(sn(t),ze(t),Bf(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&sn(t),ze(t),$r(t,l,e,a,n)),null;case 27:if(Jl(t),n=ie.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&sn(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return ze(t),null}e=Q.current,wa(t)?pu(t):(e=Xd(l,a,n),t.stateNode=e,sn(t))}return ze(t),null;case 5:if(Jl(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&sn(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return ze(t),null}if(i=Q.current,wa(t))pu(t);else{var r=Ii(ie.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?r.createElement(l,{is:a.is}):r.createElement(l)}}i[We]=t,i[rt]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(Pe(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&sn(t)}}return ze(t),$r(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&sn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(e=ie.current,wa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Fe,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[We]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Ld(e.nodeValue,n)),e||xn(t,!0)}else e=Ii(e).createTextNode(a),e[We]=t,t.stateNode=e}return ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=wa(t),n!==null){if(e===null){if(!a)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[We]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else n=or(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(wt(t),t):(wt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=wa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(o(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[We]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else l=or(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(wt(t),t):(wt(t),null)}return wt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bi(t,t.updateQueue),ze(t),null);case 4:return Be(),e===null&&So(t.stateNode.containerInfo),ze(t),null;case 10:return tn(t.type),ze(t),null;case 19:if(N(He),a=t.memoizedState,a===null)return ze(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)wl(a,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ei(e),i!==null){for(t.flags|=128,wl(a,!1),e=i.updateQueue,t.updateQueue=e,Bi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)cu(n,e),n=n.sibling;return k(He,He.current&1|2),fe&&Pt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&bt()>Yi&&(t.flags|=128,l=!0,wl(a,!1),t.lanes=4194304)}else{if(!l)if(e=Ei(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Bi(t,e),wl(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!fe)return ze(t),null}else 2*bt()-a.renderingStartTime>Yi&&n!==536870912&&(t.flags|=128,l=!0,wl(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=bt(),e.sibling=null,n=He.current,k(He,l?n&1|2:n&1),fe&&Pt(t,a.treeForkCount),e):(ze(t),null);case 22:case 23:return wt(t),Sr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),n=t.updateQueue,n!==null&&Bi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&N($n),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),tn(qe),ze(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Eh(e,t){switch(sr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(qe),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jl(t),null;case 31:if(t.memoizedState!==null){if(wt(t),t.alternate===null)throw Error(o(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(wt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N(He),null;case 4:return Be(),null;case 10:return tn(t.type),null;case 22:case 23:return wt(t),Sr(),e!==null&&N($n),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return tn(qe),null;case 25:return null;default:return null}}function Hf(e,t){switch(sr(t),t.tag){case 3:tn(qe),Be();break;case 26:case 27:case 5:Jl(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&wt(t);break;case 13:wt(t);break;case 19:N(He);break;case 10:tn(t.type);break;case 22:case 23:wt(t),Sr(),e!==null&&N($n);break;case 24:tn(qe)}}function El(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,r=n.inst;a=i(),r.destroy=a}n=n.next}while(n!==l)}}catch(u){ve(t,t.return,u)}}function Tn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var r=a.inst,u=r.destroy;if(u!==void 0){r.destroy=void 0,l=t;var h=n,A=u;try{A()}catch(L){ve(l,h,L)}}}a=a.next}while(a!==i)}}catch(L){ve(t,t.return,L)}}function Uf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Tu(t,n)}catch(a){ve(e,e.return,a)}}}function kf(e,t,n){n.props=aa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ve(e,t,a)}}function Al(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){ve(e,t,l)}}function Zt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){ve(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){ve(e,t,l)}else n.current=null}function qf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){ve(e,e.return,l)}}function Pr(e,t,n){try{var a=e.stateNode;Vh(a,e.type,n,t),a[rt]=t}catch(l){ve(e,e.return,l)}}function Yf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dn(e.type)||e.tag===4}function eo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function to(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ft));else if(a!==4&&(a===27&&Dn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(to(e,t,n),e=e.sibling;e!==null;)to(e,t,n),e=e.sibling}function Hi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Dn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Hi(e,t,n),e=e.sibling;e!==null;)Hi(e,t,n),e=e.sibling}function Gf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Pe(t,a,n),t[We]=e,t[rt]=n}catch(i){ve(e,e.return,i)}}var rn=!1,Xe=!1,no=!1,Xf=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Ah(e,t){if(e=e.containerInfo,Ao=ls,e=eu(e),Ws(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var r=0,u=-1,h=-1,A=0,L=0,D=e,j=null;t:for(;;){for(var R;D!==n||l!==0&&D.nodeType!==3||(u=r+l),D!==i||a!==0&&D.nodeType!==3||(h=r+a),D.nodeType===3&&(r+=D.nodeValue.length),(R=D.firstChild)!==null;)j=D,D=R;for(;;){if(D===e)break t;if(j===n&&++A===l&&(u=r),j===i&&++L===a&&(h=r),(R=D.nextSibling)!==null)break;D=j,j=D.parentNode}D=R}n=u===-1||h===-1?null:{start:u,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Co={focusedElem:e,selectionRange:n},ls=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var X=aa(n.type,l);e=a.getSnapshotBeforeUpdate(X,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(K){ve(n,n.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)_o(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_o(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function Qf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:cn(e,n),a&4&&El(5,n);break;case 1:if(cn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ve(n,n.return,r)}else{var l=aa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ve(n,n.return,r)}}a&64&&Uf(n),a&512&&Al(n,n.return);break;case 3:if(cn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Tu(e,t)}catch(r){ve(n,n.return,r)}}break;case 27:t===null&&a&4&&Gf(n);case 26:case 5:cn(e,n),t===null&&a&4&&qf(n),a&512&&Al(n,n.return);break;case 12:cn(e,n);break;case 31:cn(e,n),a&4&&Jf(e,n);break;case 13:cn(e,n),a&4&&Kf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Mh.bind(null,n),Ph(e,n))));break;case 22:if(a=n.memoizedState!==null||rn,!a){t=t!==null&&t.memoizedState!==null||Xe,l=rn;var i=Xe;rn=a,(Xe=t)&&!i?un(e,n,(n.subtreeFlags&8772)!==0):cn(e,n),rn=l,Xe=i}break;case 30:break;default:cn(e,n)}}function Vf(e){var t=e.alternate;t!==null&&(e.alternate=null,Vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ls(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,ct=!1;function on(e,t,n){for(n=n.child;n!==null;)Zf(e,t,n),n=n.sibling}function Zf(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Ka,n)}catch{}switch(n.tag){case 26:Xe||Zt(n,t),on(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xe||Zt(n,t);var a=Oe,l=ct;Dn(n.type)&&(Oe=n.stateNode,ct=!1),on(e,t,n),Ml(n.stateNode),Oe=a,ct=l;break;case 5:Xe||Zt(n,t);case 6:if(a=Oe,l=ct,Oe=null,on(e,t,n),Oe=a,ct=l,Oe!==null)if(ct)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(n.stateNode)}catch(i){ve(n,t,i)}else try{Oe.removeChild(n.stateNode)}catch(i){ve(n,t,i)}break;case 18:Oe!==null&&(ct?(e=Oe,Ud(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Xa(e)):Ud(Oe,n.stateNode));break;case 4:a=Oe,l=ct,Oe=n.stateNode.containerInfo,ct=!0,on(e,t,n),Oe=a,ct=l;break;case 0:case 11:case 14:case 15:Tn(2,n,t),Xe||Tn(4,n,t),on(e,t,n);break;case 1:Xe||(Zt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&kf(n,t,a)),on(e,t,n);break;case 21:on(e,t,n);break;case 22:Xe=(a=Xe)||n.memoizedState!==null,on(e,t,n),Xe=a;break;default:on(e,t,n)}}function Jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Xa(e)}catch(n){ve(t,t.return,n)}}}function Kf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xa(e)}catch(n){ve(t,t.return,n)}}function Ch(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xf),t;default:throw Error(o(435,e.tag))}}function Ui(e,t){var n=Ch(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=Dh.bind(null,e,a);a.then(l,l)}})}function ut(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,r=t,u=r;e:for(;u!==null;){switch(u.tag){case 27:if(Dn(u.type)){Oe=u.stateNode,ct=!1;break e}break;case 5:Oe=u.stateNode,ct=!1;break e;case 3:case 4:Oe=u.stateNode.containerInfo,ct=!0;break e}u=u.return}if(Oe===null)throw Error(o(160));Zf(i,r,l),Oe=null,ct=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Wf(t,e),t=t.sibling}var kt=null;function Wf(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),ft(e),a&4&&(Tn(3,e,e.return),El(3,e),Tn(5,e,e.return));break;case 1:ut(t,e),ft(e),a&512&&(Xe||n===null||Zt(n,n.return)),a&64&&rn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=kt;if(ut(t,e),ft(e),a&512&&(Xe||n===null||Zt(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Ia]||i[We]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Pe(i,a,n),i[We]=e,Je(i),a=i;break e;case"link":var r=Wd("link","href",l).get(a+(n.href||""));if(r){for(var u=0;u<r.length;u++)if(i=r[u],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(u,1);break t}}i=l.createElement(a),Pe(i,a,n),l.head.appendChild(i);break;case"meta":if(r=Wd("meta","content",l).get(a+(n.content||""))){for(u=0;u<r.length;u++)if(i=r[u],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(u,1);break t}}i=l.createElement(a),Pe(i,a,n),l.head.appendChild(i);break;default:throw Error(o(468,a))}i[We]=e,Je(i),a=i}e.stateNode=a}else Fd(l,e.type,e.stateNode);else e.stateNode=Kd(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?Fd(l,e.type,e.stateNode):Kd(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Pr(e,e.memoizedProps,n.memoizedProps)}break;case 27:ut(t,e),ft(e),a&512&&(Xe||n===null||Zt(n,n.return)),n!==null&&a&4&&Pr(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ut(t,e),ft(e),a&512&&(Xe||n===null||Zt(n,n.return)),e.flags&32){l=e.stateNode;try{da(l,"")}catch(X){ve(e,e.return,X)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Pr(e,l,n!==null?n.memoizedProps:l)),a&1024&&(no=!0);break;case 6:if(ut(t,e),ft(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(X){ve(e,e.return,X)}}break;case 3:if(es=null,l=kt,kt=$i(t.containerInfo),ut(t,e),kt=l,ft(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Xa(t.containerInfo)}catch(X){ve(e,e.return,X)}no&&(no=!1,Ff(e));break;case 4:a=kt,kt=$i(e.stateNode.containerInfo),ut(t,e),ft(e),kt=a;break;case 12:ut(t,e),ft(e);break;case 31:ut(t,e),ft(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ui(e,a)));break;case 13:ut(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(qi=bt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ui(e,a)));break;case 22:l=e.memoizedState!==null;var h=n!==null&&n.memoizedState!==null,A=rn,L=Xe;if(rn=A||l,Xe=L||h,ut(t,e),Xe=L,rn=A,ft(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||h||rn||Xe||la(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){h=n=t;try{if(i=h.stateNode,l)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{u=h.stateNode;var D=h.memoizedProps.style,j=D!=null&&D.hasOwnProperty("display")?D.display:null;u.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(X){ve(h,h.return,X)}}}else if(t.tag===6){if(n===null){h=t;try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(X){ve(h,h.return,X)}}}else if(t.tag===18){if(n===null){h=t;try{var R=h.stateNode;l?kd(R,!0):kd(h.stateNode,!1)}catch(X){ve(h,h.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ui(e,n))));break;case 19:ut(t,e),ft(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ui(e,a)));break;case 30:break;case 21:break;default:ut(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Yf(a)){n=a;break}a=a.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var l=n.stateNode,i=eo(e);Hi(e,i,l);break;case 5:var r=n.stateNode;n.flags&32&&(da(r,""),n.flags&=-33);var u=eo(e);Hi(e,u,r);break;case 3:case 4:var h=n.stateNode.containerInfo,A=eo(e);to(e,A,h);break;default:throw Error(o(161))}}catch(L){ve(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ff(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ff(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function cn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qf(e,t.alternate,t),t=t.sibling}function la(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Tn(4,t,t.return),la(t);break;case 1:Zt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&kf(t,t.return,n),la(t);break;case 27:Ml(t.stateNode);case 26:case 5:Zt(t,t.return),la(t);break;case 22:t.memoizedState===null&&la(t);break;case 30:la(t);break;default:la(t)}e=e.sibling}}function un(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:un(l,i,n),El(4,i);break;case 1:if(un(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){ve(a,a.return,A)}if(a=i,l=a.updateQueue,l!==null){var u=a.stateNode;try{var h=l.shared.hiddenCallbacks;if(h!==null)for(l.shared.hiddenCallbacks=null,l=0;l<h.length;l++)ju(h[l],u)}catch(A){ve(a,a.return,A)}}n&&r&64&&Uf(i),Al(i,i.return);break;case 27:Gf(i);case 26:case 5:un(l,i,n),n&&a===null&&r&4&&qf(i),Al(i,i.return);break;case 12:un(l,i,n);break;case 31:un(l,i,n),n&&r&4&&Jf(l,i);break;case 13:un(l,i,n),n&&r&4&&Kf(l,i);break;case 22:i.memoizedState===null&&un(l,i,n),Al(i,i.return);break;case 30:break;default:un(l,i,n)}t=t.sibling}}function ao(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ul(n))}function lo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ul(e))}function qt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)If(e,t,n,a),t=t.sibling}function If(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:qt(e,t,n,a),l&2048&&El(9,t);break;case 1:qt(e,t,n,a);break;case 3:qt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ul(e)));break;case 12:if(l&2048){qt(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,u=i.onPostCommit;typeof u=="function"&&u(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ve(t,t.return,h)}}else qt(e,t,n,a);break;case 31:qt(e,t,n,a);break;case 13:qt(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?qt(e,t,n,a):Cl(e,t):i._visibility&2?qt(e,t,n,a):(i._visibility|=2,La(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&ao(r,t);break;case 24:qt(e,t,n,a),l&2048&&lo(t.alternate,t);break;default:qt(e,t,n,a)}}function La(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,u=n,h=a,A=r.flags;switch(r.tag){case 0:case 11:case 15:La(i,r,u,h,l),El(8,r);break;case 23:break;case 22:var L=r.stateNode;r.memoizedState!==null?L._visibility&2?La(i,r,u,h,l):Cl(i,r):(L._visibility|=2,La(i,r,u,h,l)),l&&A&2048&&ao(r.alternate,r);break;case 24:La(i,r,u,h,l),l&&A&2048&&lo(r.alternate,r);break;default:La(i,r,u,h,l)}t=t.sibling}}function Cl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Cl(n,a),l&2048&&ao(a.alternate,a);break;case 24:Cl(n,a),l&2048&&lo(a.alternate,a);break;default:Cl(n,a)}t=t.sibling}}var jl=8192;function Ma(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)$f(e,t,n),e=e.sibling}function $f(e,t,n){switch(e.tag){case 26:Ma(e,t,n),e.flags&jl&&e.memoizedState!==null&&fb(n,kt,e.memoizedState,e.memoizedProps);break;case 5:Ma(e,t,n);break;case 3:case 4:var a=kt;kt=$i(e.stateNode.containerInfo),Ma(e,t,n),kt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=jl,jl=16777216,Ma(e,t,n),jl=a):Ma(e,t,n));break;default:Ma(e,t,n)}}function Pf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Tl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ke=a,td(a,e)}Pf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ed(e),e=e.sibling}function ed(e){switch(e.tag){case 0:case 11:case 15:Tl(e),e.flags&2048&&Tn(9,e,e.return);break;case 3:Tl(e);break;case 12:Tl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ki(e)):Tl(e);break;default:Tl(e)}}function ki(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ke=a,td(a,e)}Pf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Tn(8,t,t.return),ki(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ki(t));break;default:ki(t)}e=e.sibling}}function td(e,t){for(;Ke!==null;){var n=Ke;switch(n.tag){case 0:case 11:case 15:Tn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ul(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ke=a;else e:for(n=e;Ke!==null;){a=Ke;var l=a.sibling,i=a.return;if(Vf(a),a===n){Ke=null;break e}if(l!==null){l.return=i,Ke=l;break e}Ke=i}}}var jh={getCacheForType:function(e){var t=Ie(qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ie(qe).controller.signal}},Th=typeof WeakMap=="function"?WeakMap:Map,be=0,je=null,se=null,ce=0,ge=0,Et=null,_n=!1,Da=!1,io=!1,fn=0,Ne=0,zn=0,ia=0,so=0,At=0,Na=0,_l=null,dt=null,ro=!1,qi=0,nd=0,Yi=1/0,Gi=null,Rn=null,Ze=0,On=null,Ba=null,dn=0,oo=0,co=null,ad=null,zl=0,uo=null;function Ct(){return(be&2)!==0&&ce!==0?ce&-ce:T.T!==null?yo():gc()}function ld(){if(At===0)if((ce&536870912)===0||fe){var e=Fl;Fl<<=1,(Fl&3932160)===0&&(Fl=262144),At=e}else At=536870912;return e=St.current,e!==null&&(e.flags|=32),At}function mt(e,t,n){(e===je&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Ha(e,0),Ln(e,ce,At,!1)),Fa(e,n),((be&2)===0||e!==je)&&(e===je&&((be&2)===0&&(ia|=n),Ne===4&&Ln(e,ce,At,!1)),Jt(e))}function id(e,t,n){if((be&6)!==0)throw Error(o(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Wa(e,t),l=a?Rh(e,t):mo(e,t,!0),i=a;do{if(l===0){Da&&!a&&Ln(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!_h(n)){l=mo(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var u=e;l=_l;var h=u.current.memoizedState.isDehydrated;if(h&&(Ha(u,r).flags|=256),r=mo(u,r,!1),r!==2){if(io&&!h){u.errorRecoveryDisabledLanes|=i,ia|=i,l=4;break e}i=dt,dt=l,i!==null&&(dt===null?dt=i:dt.push.apply(dt,i))}l=r}if(i=!1,l!==2)continue}}if(l===1){Ha(e,0),Ln(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Ln(a,t,At,!_n);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(l=qi+300-bt(),10<l)){if(Ln(a,t,At,!_n),$l(a,0,!0)!==0)break e;dn=t,a.timeoutHandle=Bd(sd.bind(null,a,n,dt,Gi,ro,t,At,ia,Na,_n,i,"Throttled",-0,0),l);break e}sd(a,n,dt,Gi,ro,t,At,ia,Na,_n,i,null,-0,0)}}break}while(!0);Jt(e)}function sd(e,t,n,a,l,i,r,u,h,A,L,D,j,R){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ft},$f(t,i,D);var X=(i&62914560)===i?qi-bt():(i&4194048)===i?nd-bt():0;if(X=db(D,X),X!==null){dn=i,e.cancelPendingCommit=X(pd.bind(null,e,t,i,n,a,l,r,u,h,L,D,null,j,R)),Ln(e,i,r,!A);return}}pd(e,t,i,n,a,l,r,u,h)}function _h(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!vt(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t,n,a){t&=~so,t&=~ia,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-gt(l),r=1<<i;a[i]=-1,l&=~r}n!==0&&hc(e,n,t)}function Xi(){return(be&6)===0?(Rl(0),!1):!0}function fo(){if(se!==null){if(ge===0)var e=se.return;else e=se,en=Fn=null,Tr(e),Ta=null,dl=0,e=se;for(;e!==null;)Hf(e.alternate,e),e=e.return;se=null}}function Ha(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Kh(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),dn=0,fo(),je=e,se=n=$t(e.current,null),ce=t,ge=0,Et=null,_n=!1,Da=Wa(e,t),io=!1,Na=At=so=ia=zn=Ne=0,dt=_l=null,ro=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-gt(a),i=1<<l;t|=e[l],a&=~i}return fn=t,ui(),n}function rd(e,t){te=null,T.H=xl,t===ja||t===gi?(t=wu(),ge=3):t===hr?(t=wu(),ge=4):ge=t===Xr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Et=t,se===null&&(Ne=1,Li(e,Rt(t,e.current)))}function od(){var e=St.current;return e===null?!0:(ce&4194048)===ce?Dt===null:(ce&62914560)===ce||(ce&536870912)!==0?e===Dt:!1}function cd(){var e=T.H;return T.H=xl,e===null?xl:e}function ud(){var e=T.A;return T.A=jh,e}function Qi(){Ne=4,_n||(ce&4194048)!==ce&&St.current!==null||(Da=!0),(zn&134217727)===0&&(ia&134217727)===0||je===null||Ln(je,ce,At,!1)}function mo(e,t,n){var a=be;be|=2;var l=cd(),i=ud();(je!==e||ce!==t)&&(Gi=null,Ha(e,t)),t=!1;var r=Ne;e:do try{if(ge!==0&&se!==null){var u=se,h=Et;switch(ge){case 8:fo(),r=6;break e;case 3:case 2:case 9:case 6:St.current===null&&(t=!0);var A=ge;if(ge=0,Et=null,Ua(e,u,h,A),n&&Da){r=0;break e}break;default:A=ge,ge=0,Et=null,Ua(e,u,h,A)}}zh(),r=Ne;break}catch(L){rd(e,L)}while(!0);return t&&e.shellSuspendCounter++,en=Fn=null,be=a,T.H=l,T.A=i,se===null&&(je=null,ce=0,ui()),r}function zh(){for(;se!==null;)fd(se)}function Rh(e,t){var n=be;be|=2;var a=cd(),l=ud();je!==e||ce!==t?(Gi=null,Yi=bt()+500,Ha(e,t)):Da=Wa(e,t);e:do try{if(ge!==0&&se!==null){t=se;var i=Et;t:switch(ge){case 1:ge=0,Et=null,Ua(e,t,i,1);break;case 2:case 9:if(xu(i)){ge=0,Et=null,dd(t);break}t=function(){ge!==2&&ge!==9||je!==e||(ge=7),Jt(e)},i.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:xu(i)?(ge=0,Et=null,dd(t)):(ge=0,Et=null,Ua(e,t,i,7));break;case 5:var r=null;switch(se.tag){case 26:r=se.memoizedState;case 5:case 27:var u=se;if(r?Id(r):u.stateNode.complete){ge=0,Et=null;var h=u.sibling;if(h!==null)se=h;else{var A=u.return;A!==null?(se=A,Vi(A)):se=null}break t}}ge=0,Et=null,Ua(e,t,i,5);break;case 6:ge=0,Et=null,Ua(e,t,i,6);break;case 8:fo(),Ne=6;break e;default:throw Error(o(462))}}Oh();break}catch(L){rd(e,L)}while(!0);return en=Fn=null,T.H=a,T.A=l,be=n,se!==null?0:(je=null,ce=0,ui(),Ne)}function Oh(){for(;se!==null&&!ep();)fd(se)}function fd(e){var t=Nf(e.alternate,e,fn);e.memoizedProps=e.pendingProps,t===null?Vi(e):se=t}function dd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=zf(n,t,t.pendingProps,t.type,void 0,ce);break;case 11:t=zf(n,t,t.pendingProps,t.type.render,t.ref,ce);break;case 5:Tr(t);default:Hf(n,t),t=se=cu(t,fn),t=Nf(n,t,fn)}e.memoizedProps=e.pendingProps,t===null?Vi(e):se=t}function Ua(e,t,n,a){en=Fn=null,Tr(t),Ta=null,dl=0;var l=t.return;try{if(vh(e,l,t,n,ce)){Ne=1,Li(e,Rt(n,e.current)),se=null;return}}catch(i){if(l!==null)throw se=l,i;Ne=1,Li(e,Rt(n,e.current)),se=null;return}t.flags&32768?(fe||a===1?e=!0:Da||(ce&536870912)!==0?e=!1:(_n=e=!0,(a===2||a===9||a===3||a===6)&&(a=St.current,a!==null&&a.tag===13&&(a.flags|=16384))),md(t,e)):Vi(t)}function Vi(e){var t=e;do{if((t.flags&32768)!==0){md(t,_n);return}e=t.return;var n=wh(t.alternate,t,fn);if(n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Ne===0&&(Ne=5)}function md(e,t){do{var n=Eh(e.alternate,e);if(n!==null){n.flags&=32767,se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=n}while(e!==null);Ne=6,se=null}function pd(e,t,n,a,l,i,r,u,h){e.cancelPendingCommit=null;do Zi();while(Ze!==0);if((be&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=er,up(e,n,i,r,u,h),e===je&&(se=je=null,ce=0),Ba=t,On=e,dn=n,oo=i,co=l,ad=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Nh(Kl,function(){return vd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null,l=H.p,H.p=2,r=be,be|=4;try{Ah(e,t,n)}finally{be=r,H.p=l,T.T=a}}Ze=1,hd(),bd(),yd()}}function hd(){if(Ze===1){Ze=0;var e=On,t=Ba,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=T.T,T.T=null;var a=H.p;H.p=2;var l=be;be|=4;try{Wf(t,e);var i=Co,r=eu(e.containerInfo),u=i.focusedElem,h=i.selectionRange;if(r!==u&&u&&u.ownerDocument&&Pc(u.ownerDocument.documentElement,u)){if(h!==null&&Ws(u)){var A=h.start,L=h.end;if(L===void 0&&(L=A),"selectionStart"in u)u.selectionStart=A,u.selectionEnd=Math.min(L,u.value.length);else{var D=u.ownerDocument||document,j=D&&D.defaultView||window;if(j.getSelection){var R=j.getSelection(),X=u.textContent.length,K=Math.min(h.start,X),Ae=h.end===void 0?K:Math.min(h.end,X);!R.extend&&K>Ae&&(r=Ae,Ae=K,K=r);var S=$c(u,K),y=$c(u,Ae);if(S&&y&&(R.rangeCount!==1||R.anchorNode!==S.node||R.anchorOffset!==S.offset||R.focusNode!==y.node||R.focusOffset!==y.offset)){var E=D.createRange();E.setStart(S.node,S.offset),R.removeAllRanges(),K>Ae?(R.addRange(E),R.extend(y.node,y.offset)):(E.setEnd(y.node,y.offset),R.addRange(E))}}}}for(D=[],R=u;R=R.parentNode;)R.nodeType===1&&D.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<D.length;u++){var M=D[u];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}ls=!!Ao,Co=Ao=null}finally{be=l,H.p=a,T.T=n}}e.current=t,Ze=2}}function bd(){if(Ze===2){Ze=0;var e=On,t=Ba,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=T.T,T.T=null;var a=H.p;H.p=2;var l=be;be|=4;try{Qf(e,t.alternate,t)}finally{be=l,H.p=a,T.T=n}}Ze=3}}function yd(){if(Ze===4||Ze===3){Ze=0,tp();var e=On,t=Ba,n=dn,a=ad;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Ba=On=null,gd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Rn=null),Rs(n),t=t.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Ka,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=T.T,l=H.p,H.p=2,T.T=null;try{for(var i=e.onRecoverableError,r=0;r<a.length;r++){var u=a[r];i(u.value,{componentStack:u.stack})}}finally{T.T=t,H.p=l}}(dn&3)!==0&&Zi(),Jt(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===uo?zl++:(zl=0,uo=e):zl=0,Rl(0)}}function gd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ul(t)))}function Zi(){return hd(),bd(),yd(),vd()}function vd(){if(Ze!==5)return!1;var e=On,t=oo;oo=0;var n=Rs(dn),a=T.T,l=H.p;try{H.p=32>n?32:n,T.T=null,n=co,co=null;var i=On,r=dn;if(Ze=0,Ba=On=null,dn=0,(be&6)!==0)throw Error(o(331));var u=be;if(be|=4,ed(i.current),If(i,i.current,r,n),be=u,Rl(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Ka,i)}catch{}return!0}finally{H.p=l,T.T=a,gd(e,t)}}function xd(e,t,n){t=Rt(n,t),t=Gr(e.stateNode,t,2),e=An(e,t,2),e!==null&&(Fa(e,2),Jt(e))}function ve(e,t,n){if(e.tag===3)xd(e,e,n);else for(;t!==null;){if(t.tag===3){xd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Rn===null||!Rn.has(a))){e=Rt(n,e),n=Sf(2),a=An(t,n,2),a!==null&&(wf(n,a,t,e),Fa(a,2),Jt(a));break}}t=t.return}}function po(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Th;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(io=!0,l.add(n),e=Lh.bind(null,e,t,n),t.then(e,e))}function Lh(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,je===e&&(ce&n)===n&&(Ne===4||Ne===3&&(ce&62914560)===ce&&300>bt()-qi?(be&2)===0&&Ha(e,0):so|=n,Na===ce&&(Na=0)),Jt(e)}function Sd(e,t){t===0&&(t=pc()),e=Jn(e,t),e!==null&&(Fa(e,t),Jt(e))}function Mh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sd(e,n)}function Dh(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(t),Sd(e,n)}function Nh(e,t){return js(e,t)}var Ji=null,ka=null,ho=!1,Ki=!1,bo=!1,Mn=0;function Jt(e){e!==ka&&e.next===null&&(ka===null?Ji=ka=e:ka=ka.next=e),Ki=!0,ho||(ho=!0,Hh())}function Rl(e,t){if(!bo&&Ki){bo=!0;do for(var n=!1,a=Ji;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var r=a.suspendedLanes,u=a.pingedLanes;i=(1<<31-gt(42|e)+1)-1,i&=l&~(r&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Cd(a,i))}else i=ce,i=$l(a,a===je?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Wa(a,i)||(n=!0,Cd(a,i));a=a.next}while(n);bo=!1}}function Bh(){wd()}function wd(){Ki=ho=!1;var e=0;Mn!==0&&Jh()&&(e=Mn);for(var t=bt(),n=null,a=Ji;a!==null;){var l=a.next,i=Ed(a,t);i===0?(a.next=null,n===null?Ji=l:n.next=l,l===null&&(ka=n)):(n=a,(e!==0||(i&3)!==0)&&(Ki=!0)),a=l}Ze!==0&&Ze!==5||Rl(e),Mn!==0&&(Mn=0)}function Ed(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-gt(i),u=1<<r,h=l[r];h===-1?((u&n)===0||(u&a)!==0)&&(l[r]=cp(u,t)):h<=t&&(e.expiredLanes|=u),i&=~u}if(t=je,n=ce,n=$l(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ts(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Wa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Ts(a),Rs(n)){case 2:case 8:n=dc;break;case 32:n=Kl;break;case 268435456:n=mc;break;default:n=Kl}return a=Ad.bind(null,e),n=js(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Ts(a),e.callbackPriority=2,e.callbackNode=null,2}function Ad(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Zi()&&e.callbackNode!==n)return null;var a=ce;return a=$l(e,e===je?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(id(e,a,t),Ed(e,bt()),e.callbackNode!=null&&e.callbackNode===n?Ad.bind(null,e):null)}function Cd(e,t){if(Zi())return null;id(e,t,!0)}function Hh(){Wh(function(){(be&6)!==0?js(fc,Bh):wd()})}function yo(){if(Mn===0){var e=Aa;e===0&&(e=Wl,Wl<<=1,(Wl&261888)===0&&(Wl=256)),Mn=e}return Mn}function jd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ni(""+e)}function Td(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Uh(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=jd((l[rt]||null).action),r=a.submitter;r&&(t=(t=r[rt]||null)?jd(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var u=new si("action","action",null,a,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Mn!==0){var h=r?Td(l,r):new FormData(l);Br(n,{pending:!0,data:h,method:l.method,action:i},null,h)}}else typeof i=="function"&&(u.preventDefault(),h=r?Td(l,r):new FormData(l),Br(n,{pending:!0,data:h,method:l.method,action:i},i,h))},currentTarget:l}]})}}for(var go=0;go<Ps.length;go++){var vo=Ps[go],kh=vo.toLowerCase(),qh=vo[0].toUpperCase()+vo.slice(1);Ut(kh,"on"+qh)}Ut(au,"onAnimationEnd"),Ut(lu,"onAnimationIteration"),Ut(iu,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(nh,"onTransitionRun"),Ut(ah,"onTransitionStart"),Ut(lh,"onTransitionCancel"),Ut(su,"onTransitionEnd"),ua("onMouseEnter",["mouseout","mouseover"]),ua("onMouseLeave",["mouseout","mouseover"]),ua("onPointerEnter",["pointerout","pointerover"]),ua("onPointerLeave",["pointerout","pointerover"]),Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ol));function _d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var r=a.length-1;0<=r;r--){var u=a[r],h=u.instance,A=u.currentTarget;if(u=u.listener,h!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=A;try{i(l)}catch(L){ci(L)}l.currentTarget=null,i=h}else for(r=0;r<a.length;r++){if(u=a[r],h=u.instance,A=u.currentTarget,u=u.listener,h!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=A;try{i(l)}catch(L){ci(L)}l.currentTarget=null,i=h}}}}function re(e,t){var n=t[Os];n===void 0&&(n=t[Os]=new Set);var a=e+"__bubble";n.has(a)||(zd(t,e,2,!1),n.add(a))}function xo(e,t,n){var a=0;t&&(a|=4),zd(n,e,a,t)}var Wi="_reactListening"+Math.random().toString(36).slice(2);function So(e){if(!e[Wi]){e[Wi]=!0,Sc.forEach(function(n){n!=="selectionchange"&&(Yh.has(n)||xo(n,!1,e),xo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wi]||(t[Wi]=!0,xo("selectionchange",!1,t))}}function zd(e,t,n,a){switch(lm(t)){case 2:var l=hb;break;case 8:l=bb;break;default:l=Bo}n=l.bind(null,t,n,e),l=void 0,!qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function wo(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var u=a.stateNode.containerInfo;if(u===l)break;if(r===4)for(r=a.return;r!==null;){var h=r.tag;if((h===3||h===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;u!==null;){if(r=ra(u),r===null)return;if(h=r.tag,h===5||h===6||h===26||h===27){a=i=r;continue e}u=u.parentNode}}a=a.return}Mc(function(){var A=i,L=Us(n),D=[];e:{var j=ru.get(e);if(j!==void 0){var R=si,X=e;switch(e){case"keypress":if(li(n)===0)break e;case"keydown":case"keyup":R=Dp;break;case"focusin":X="focus",R=Qs;break;case"focusout":X="blur",R=Qs;break;case"beforeblur":case"afterblur":R=Qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Hp;break;case au:case lu:case iu:R=Cp;break;case su:R=kp;break;case"scroll":case"scrollend":R=xp;break;case"wheel":R=Yp;break;case"copy":case"cut":case"paste":R=Tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Uc;break;case"toggle":case"beforetoggle":R=Xp}var K=(t&4)!==0,Ae=!K&&(e==="scroll"||e==="scrollend"),S=K?j!==null?j+"Capture":null:j;K=[];for(var y=A,E;y!==null;){var M=y;if(E=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||E===null||S===null||(M=Pa(y,S),M!=null&&K.push(Ll(y,M,E))),Ae)break;y=y.return}0<K.length&&(j=new R(j,X,null,n,L),D.push({event:j,listeners:K}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",j&&n!==Hs&&(X=n.relatedTarget||n.fromElement)&&(ra(X)||X[sa]))break e;if((R||j)&&(j=L.window===L?L:(j=L.ownerDocument)?j.defaultView||j.parentWindow:window,R?(X=n.relatedTarget||n.toElement,R=A,X=X?ra(X):null,X!==null&&(Ae=p(X),K=X.tag,X!==Ae||K!==5&&K!==27&&K!==6)&&(X=null)):(R=null,X=A),R!==X)){if(K=Bc,M="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(K=Uc,M="onPointerLeave",S="onPointerEnter",y="pointer"),Ae=R==null?j:$a(R),E=X==null?j:$a(X),j=new K(M,y+"leave",R,n,L),j.target=Ae,j.relatedTarget=E,M=null,ra(L)===A&&(K=new K(S,y+"enter",X,n,L),K.target=E,K.relatedTarget=Ae,M=K),Ae=M,R&&X)t:{for(K=Gh,S=R,y=X,E=0,M=S;M;M=K(M))E++;M=0;for(var J=y;J;J=K(J))M++;for(;0<E-M;)S=K(S),E--;for(;0<M-E;)y=K(y),M--;for(;E--;){if(S===y||y!==null&&S===y.alternate){K=S;break t}S=K(S),y=K(y)}K=null}else K=null;R!==null&&Rd(D,j,R,K,!1),X!==null&&Ae!==null&&Rd(D,Ae,X,K,!0)}}e:{if(j=A?$a(A):window,R=j.nodeName&&j.nodeName.toLowerCase(),R==="select"||R==="input"&&j.type==="file")var me=Zc;else if(Qc(j))if(Jc)me=Pp;else{me=Ip;var V=Fp}else R=j.nodeName,!R||R.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?A&&Bs(A.elementType)&&(me=Zc):me=$p;if(me&&(me=me(e,A))){Vc(D,me,n,L);break e}V&&V(e,j,A),e==="focusout"&&A&&j.type==="number"&&A.memoizedProps.value!=null&&Ns(j,"number",j.value)}switch(V=A?$a(A):window,e){case"focusin":(Qc(V)||V.contentEditable==="true")&&(ba=V,Fs=A,rl=null);break;case"focusout":rl=Fs=ba=null;break;case"mousedown":Is=!0;break;case"contextmenu":case"mouseup":case"dragend":Is=!1,tu(D,n,L);break;case"selectionchange":if(th)break;case"keydown":case"keyup":tu(D,n,L)}var ae;if(Zs)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else ha?Gc(e,n)&&(ue="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ue="onCompositionStart");ue&&(kc&&n.locale!=="ko"&&(ha||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&ha&&(ae=Dc()):(yn=L,Ys="value"in yn?yn.value:yn.textContent,ha=!0)),V=Fi(A,ue),0<V.length&&(ue=new Hc(ue,e,null,n,L),D.push({event:ue,listeners:V}),ae?ue.data=ae:(ae=Xc(n),ae!==null&&(ue.data=ae)))),(ae=Vp?Zp(e,n):Jp(e,n))&&(ue=Fi(A,"onBeforeInput"),0<ue.length&&(V=new Hc("onBeforeInput","beforeinput",null,n,L),D.push({event:V,listeners:ue}),V.data=ae)),Uh(D,e,A,n,L)}_d(D,t)})}function Ll(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fi(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Pa(e,n),l!=null&&a.unshift(Ll(e,l,i)),l=Pa(e,t),l!=null&&a.push(Ll(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Gh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rd(e,t,n,a,l){for(var i=t._reactName,r=[];n!==null&&n!==a;){var u=n,h=u.alternate,A=u.stateNode;if(u=u.tag,h!==null&&h===a)break;u!==5&&u!==26&&u!==27||A===null||(h=A,l?(A=Pa(n,i),A!=null&&r.unshift(Ll(n,A,h))):l||(A=Pa(n,i),A!=null&&r.push(Ll(n,A,h)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Xh=/\r\n?/g,Qh=/\u0000|\uFFFD/g;function Od(e){return(typeof e=="string"?e:""+e).replace(Xh,`
`).replace(Qh,"")}function Ld(e,t){return t=Od(t),Od(e)===t}function Ee(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||da(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&da(e,""+a);break;case"className":ei(e,"class",a);break;case"tabIndex":ei(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ei(e,n,a);break;case"style":Oc(e,a,i);break;case"data":if(t!=="object"){ei(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ni(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ee(e,t,"name",l.name,l,null),Ee(e,t,"formEncType",l.formEncType,l,null),Ee(e,t,"formMethod",l.formMethod,l,null),Ee(e,t,"formTarget",l.formTarget,l,null)):(Ee(e,t,"encType",l.encType,l,null),Ee(e,t,"method",l.method,l,null),Ee(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ni(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Ft);break;case"onScroll":a!=null&&re("scroll",e);break;case"onScrollEnd":a!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=ni(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":re("beforetoggle",e),re("toggle",e),Pl(e,"popover",a);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Pl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=gp.get(n)||n,Pl(e,n,a))}}function Eo(e,t,n,a,l,i){switch(n){case"style":Oc(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof a=="string"?da(e,a):(typeof a=="number"||typeof a=="bigint")&&da(e,""+a);break;case"onScroll":a!=null&&re("scroll",e);break;case"onScrollEnd":a!=null&&re("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ft);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[rt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Pl(e,n,a)}}}function Pe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var r=n[i];if(r!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ee(e,t,i,r,n,null)}}l&&Ee(e,t,"srcSet",n.srcSet,n,null),a&&Ee(e,t,"src",n.src,n,null);return;case"input":re("invalid",e);var u=i=r=l=null,h=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var L=n[a];if(L!=null)switch(a){case"name":l=L;break;case"type":r=L;break;case"checked":h=L;break;case"defaultChecked":A=L;break;case"value":i=L;break;case"defaultValue":u=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,t));break;default:Ee(e,t,a,L,n,null)}}Tc(e,i,u,h,A,r,l,!1);return;case"select":re("invalid",e),a=r=i=null;for(l in n)if(n.hasOwnProperty(l)&&(u=n[l],u!=null))switch(l){case"value":i=u;break;case"defaultValue":r=u;break;case"multiple":a=u;default:Ee(e,t,l,u,n,null)}t=i,n=r,e.multiple=!!a,t!=null?fa(e,!!a,t,!1):n!=null&&fa(e,!!a,n,!0);return;case"textarea":re("invalid",e),i=l=a=null;for(r in n)if(n.hasOwnProperty(r)&&(u=n[r],u!=null))switch(r){case"value":a=u;break;case"defaultValue":l=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:Ee(e,t,r,u,n,null)}zc(e,a,l,i);return;case"option":for(h in n)if(n.hasOwnProperty(h)&&(a=n[h],a!=null))switch(h){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ee(e,t,h,a,n,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(a=0;a<Ol.length;a++)re(Ol[a],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ee(e,t,A,a,n,null)}return;default:if(Bs(t)){for(L in n)n.hasOwnProperty(L)&&(a=n[L],a!==void 0&&Eo(e,t,L,a,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(a=n[u],a!=null&&Ee(e,t,u,a,n,null))}function Vh(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,r=null,u=null,h=null,A=null,L=null;for(R in n){var D=n[R];if(n.hasOwnProperty(R)&&D!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":h=D;default:a.hasOwnProperty(R)||Ee(e,t,R,null,a,D)}}for(var j in a){var R=a[j];if(D=n[j],a.hasOwnProperty(j)&&(R!=null||D!=null))switch(j){case"type":i=R;break;case"name":l=R;break;case"checked":A=R;break;case"defaultChecked":L=R;break;case"value":r=R;break;case"defaultValue":u=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,t));break;default:R!==D&&Ee(e,t,j,R,a,D)}}Ds(e,r,u,h,A,L,i,l);return;case"select":R=r=u=j=null;for(i in n)if(h=n[i],n.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":R=h;default:a.hasOwnProperty(i)||Ee(e,t,i,null,a,h)}for(l in a)if(i=a[l],h=n[l],a.hasOwnProperty(l)&&(i!=null||h!=null))switch(l){case"value":j=i;break;case"defaultValue":u=i;break;case"multiple":r=i;default:i!==h&&Ee(e,t,l,i,a,h)}t=u,n=r,a=R,j!=null?fa(e,!!n,j,!1):!!a!=!!n&&(t!=null?fa(e,!!n,t,!0):fa(e,!!n,n?[]:"",!1));return;case"textarea":R=j=null;for(u in n)if(l=n[u],n.hasOwnProperty(u)&&l!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Ee(e,t,u,null,a,l)}for(r in a)if(l=a[r],i=n[r],a.hasOwnProperty(r)&&(l!=null||i!=null))switch(r){case"value":j=l;break;case"defaultValue":R=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==i&&Ee(e,t,r,l,a,i)}_c(e,j,R);return;case"option":for(var X in n)if(j=n[X],n.hasOwnProperty(X)&&j!=null&&!a.hasOwnProperty(X))switch(X){case"selected":e.selected=!1;break;default:Ee(e,t,X,null,a,j)}for(h in a)if(j=a[h],R=n[h],a.hasOwnProperty(h)&&j!==R&&(j!=null||R!=null))switch(h){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:Ee(e,t,h,j,a,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in n)j=n[K],n.hasOwnProperty(K)&&j!=null&&!a.hasOwnProperty(K)&&Ee(e,t,K,null,a,j);for(A in a)if(j=a[A],R=n[A],a.hasOwnProperty(A)&&j!==R&&(j!=null||R!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,t));break;default:Ee(e,t,A,j,a,R)}return;default:if(Bs(t)){for(var Ae in n)j=n[Ae],n.hasOwnProperty(Ae)&&j!==void 0&&!a.hasOwnProperty(Ae)&&Eo(e,t,Ae,void 0,a,j);for(L in a)j=a[L],R=n[L],!a.hasOwnProperty(L)||j===R||j===void 0&&R===void 0||Eo(e,t,L,j,a,R);return}}for(var S in n)j=n[S],n.hasOwnProperty(S)&&j!=null&&!a.hasOwnProperty(S)&&Ee(e,t,S,null,a,j);for(D in a)j=a[D],R=n[D],!a.hasOwnProperty(D)||j===R||j==null&&R==null||Ee(e,t,D,j,a,R)}function Md(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,r=l.initiatorType,u=l.duration;if(i&&u&&Md(r)){for(r=0,u=l.responseEnd,a+=1;a<n.length;a++){var h=n[a],A=h.startTime;if(A>u)break;var L=h.transferSize,D=h.initiatorType;L&&Md(D)&&(h=h.responseEnd,r+=L*(h<u?1:(u-A)/(h-A)))}if(--a,t+=8*(i+r)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ao=null,Co=null;function Ii(e){return e.nodeType===9?e:e.ownerDocument}function Dd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var To=null;function Jh(){var e=window.event;return e&&e.type==="popstate"?e===To?!1:(To=e,!0):(To=null,!1)}var Bd=typeof setTimeout=="function"?setTimeout:void 0,Kh=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,Wh=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(e){return Hd.resolve(null).then(e).catch(Fh)}:Bd;function Fh(e){setTimeout(function(){throw e})}function Dn(e){return e==="head"}function Ud(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),Xa(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Ml(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ml(n);for(var i=n.firstChild;i;){var r=i.nextSibling,u=i.nodeName;i[Ia]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=r}}else n==="body"&&Ml(e.ownerDocument.body);n=l}while(n);Xa(t)}function kd(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function _o(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":_o(n),Ls(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ih(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ia])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Nt(e.nextSibling),e===null)break}return null}function $h(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Nt(e.nextSibling),e===null))return null;return e}function qd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Nt(e.nextSibling),e===null))return null;return e}function zo(e){return e.data==="$?"||e.data==="$~"}function Ro(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ph(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Oo=null;function Yd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Nt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Gd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Xd(e,t,n){switch(t=Ii(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Ml(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ls(e)}var Bt=new Map,Qd=new Set;function $i(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var mn=H.d;H.d={f:eb,r:tb,D:nb,C:ab,L:lb,m:ib,X:rb,S:sb,M:ob};function eb(){var e=mn.f(),t=Xi();return e||t}function tb(e){var t=oa(e);t!==null&&t.tag===5&&t.type==="form"?rf(t):mn.r(e)}var qa=typeof document>"u"?null:document;function Vd(e,t,n){var a=qa;if(a&&typeof t=="string"&&t){var l=_t(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Qd.has(l)||(Qd.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Pe(t,"link",e),Je(t),a.head.appendChild(t)))}}function nb(e){mn.D(e),Vd("dns-prefetch",e,null)}function ab(e,t){mn.C(e,t),Vd("preconnect",e,t)}function lb(e,t,n){mn.L(e,t,n);var a=qa;if(a&&e&&t){var l='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+_t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+_t(n.imageSizes)+'"]')):l+='[href="'+_t(e)+'"]';var i=l;switch(t){case"style":i=Ya(e);break;case"script":i=Ga(e)}Bt.has(i)||(e=z({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Bt.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Dl(i))||t==="script"&&a.querySelector(Nl(i))||(t=a.createElement("link"),Pe(t,"link",e),Je(t),a.head.appendChild(t)))}}function ib(e,t){mn.m(e,t);var n=qa;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+_t(a)+'"][href="'+_t(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ga(e)}if(!Bt.has(i)&&(e=z({rel:"modulepreload",href:e},t),Bt.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Nl(i)))return}a=n.createElement("link"),Pe(a,"link",e),Je(a),n.head.appendChild(a)}}}function sb(e,t,n){mn.S(e,t,n);var a=qa;if(a&&e){var l=ca(a).hoistableStyles,i=Ya(e);t=t||"default";var r=l.get(i);if(!r){var u={loading:0,preload:null};if(r=a.querySelector(Dl(i)))u.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Bt.get(i))&&Lo(e,n);var h=r=a.createElement("link");Je(h),Pe(h,"link",e),h._p=new Promise(function(A,L){h.onload=A,h.onerror=L}),h.addEventListener("load",function(){u.loading|=1}),h.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Pi(r,t,a)}r={type:"stylesheet",instance:r,count:1,state:u},l.set(i,r)}}}function rb(e,t){mn.X(e,t);var n=qa;if(n&&e){var a=ca(n).hoistableScripts,l=Ga(e),i=a.get(l);i||(i=n.querySelector(Nl(l)),i||(e=z({src:e,async:!0},t),(t=Bt.get(l))&&Mo(e,t),i=n.createElement("script"),Je(i),Pe(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function ob(e,t){mn.M(e,t);var n=qa;if(n&&e){var a=ca(n).hoistableScripts,l=Ga(e),i=a.get(l);i||(i=n.querySelector(Nl(l)),i||(e=z({src:e,async:!0,type:"module"},t),(t=Bt.get(l))&&Mo(e,t),i=n.createElement("script"),Je(i),Pe(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Zd(e,t,n,a){var l=(l=ie.current)?$i(l):null;if(!l)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ya(n.href),n=ca(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ya(n.href);var i=ca(l).hoistableStyles,r=i.get(e);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=l.querySelector(Dl(e)))&&!i._p&&(r.instance=i,r.state.loading=5),Bt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Bt.set(e,n),i||cb(l,e,n,r.state))),t&&a===null)throw Error(o(528,""));return r}if(t&&a!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ga(n),n=ca(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ya(e){return'href="'+_t(e)+'"'}function Dl(e){return'link[rel="stylesheet"]['+e+"]"}function Jd(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function cb(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Pe(t,"link",n),Je(t),e.head.appendChild(t))}function Ga(e){return'[src="'+_t(e)+'"]'}function Nl(e){return"script[async]"+e}function Kd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+_t(n.href)+'"]');if(a)return t.instance=a,Je(a),a;var l=z({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Je(a),Pe(a,"style",l),Pi(a,n.precedence,e),t.instance=a;case"stylesheet":l=Ya(n.href);var i=e.querySelector(Dl(l));if(i)return t.state.loading|=4,t.instance=i,Je(i),i;a=Jd(n),(l=Bt.get(l))&&Lo(a,l),i=(e.ownerDocument||e).createElement("link"),Je(i);var r=i;return r._p=new Promise(function(u,h){r.onload=u,r.onerror=h}),Pe(i,"link",a),t.state.loading|=4,Pi(i,n.precedence,e),t.instance=i;case"script":return i=Ga(n.src),(l=e.querySelector(Nl(i)))?(t.instance=l,Je(l),l):(a=n,(l=Bt.get(i))&&(a=z({},n),Mo(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Je(l),Pe(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Pi(a,n.precedence,e));return t.instance}function Pi(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,r=0;r<a.length;r++){var u=a[r];if(u.dataset.precedence===t)i=u;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Lo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Mo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var es=null;function Wd(e,t,n){if(es===null){var a=new Map,l=es=new Map;l.set(n,a)}else l=es,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[Ia]||i[We]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var u=a.get(r);u?u.push(i):a.set(r,[i])}}return a}function Fd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ub(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Id(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fb(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Ya(a.href),i=t.querySelector(Dl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ts.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Je(i);return}i=t.ownerDocument||t,a=Jd(a),(l=Bt.get(l))&&Lo(a,l),i=i.createElement("link"),Je(i);var r=i;r._p=new Promise(function(u,h){r.onload=u,r.onerror=h}),Pe(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ts.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Do=0;function db(e,t){return e.stylesheets&&e.count===0&&as(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&as(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Do===0&&(Do=62500*Zh());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&as(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Do?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function ts(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)as(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ns=null;function as(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ns=new Map,t.forEach(mb,e),ns=null,ts.call(e))}function mb(e,t){if(!(t.state.loading&4)){var n=ns.get(e);if(n)var a=n.get(null);else{n=new Map,ns.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var r=l[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),a=r)}a&&n.set(null,a)}l=t.instance,r=l.getAttribute("data-precedence"),i=n.get(r)||a,i===a&&n.set(null,l),n.set(r,l),this.count++,a=ts.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Bl={$$typeof:W,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function pb(e,t,n,a,l,i,r,u,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_s(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_s(0),this.hiddenUpdates=_s(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function $d(e,t,n,a,l,i,r,u,h,A,L,D){return e=new pb(e,t,n,r,h,A,L,D,u),t=1,i===!0&&(t|=24),i=xt(3,null,null,t),e.current=i,i.stateNode=e,t=dr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},br(i),e}function Pd(e){return e?(e=va,e):va}function em(e,t,n,a,l,i){l=Pd(l),a.context===null?a.context=l:a.pendingContext=l,a=En(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=An(e,a,t),n!==null&&(mt(n,e,t),pl(n,e,t))}function tm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function No(e,t){tm(e,t),(e=e.alternate)&&tm(e,t)}function nm(e){if(e.tag===13||e.tag===31){var t=Jn(e,67108864);t!==null&&mt(t,e,67108864),No(e,67108864)}}function am(e){if(e.tag===13||e.tag===31){var t=Ct();t=zs(t);var n=Jn(e,t);n!==null&&mt(n,e,t),No(e,t)}}var ls=!0;function hb(e,t,n,a){var l=T.T;T.T=null;var i=H.p;try{H.p=2,Bo(e,t,n,a)}finally{H.p=i,T.T=l}}function bb(e,t,n,a){var l=T.T;T.T=null;var i=H.p;try{H.p=8,Bo(e,t,n,a)}finally{H.p=i,T.T=l}}function Bo(e,t,n,a){if(ls){var l=Ho(a);if(l===null)wo(e,t,a,is,n),im(e,a);else if(gb(l,e,t,n,a))a.stopPropagation();else if(im(e,a),t&4&&-1<yb.indexOf(e)){for(;l!==null;){var i=oa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Gn(i.pendingLanes);if(r!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;r;){var h=1<<31-gt(r);u.entanglements[1]|=h,r&=~h}Jt(i),(be&6)===0&&(Yi=bt()+500,Rl(0))}}break;case 31:case 13:u=Jn(i,2),u!==null&&mt(u,i,2),Xi(),No(i,2)}if(i=Ho(a),i===null&&wo(e,t,a,is,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else wo(e,t,a,null,n)}}function Ho(e){return e=Us(e),Uo(e)}var is=null;function Uo(e){if(is=null,e=ra(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=v(t),e!==null)return e;e=null}else if(n===31){if(e=_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return is=e,null}function lm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(np()){case fc:return 2;case dc:return 8;case Kl:case ap:return 32;case mc:return 268435456;default:return 32}default:return 32}}var ko=!1,Nn=null,Bn=null,Hn=null,Hl=new Map,Ul=new Map,Un=[],yb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function im(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":Hl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(t.pointerId)}}function kl(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=oa(t),t!==null&&nm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function gb(e,t,n,a,l){switch(t){case"focusin":return Nn=kl(Nn,e,t,n,a,l),!0;case"dragenter":return Bn=kl(Bn,e,t,n,a,l),!0;case"mouseover":return Hn=kl(Hn,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return Hl.set(i,kl(Hl.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Ul.set(i,kl(Ul.get(i)||null,e,t,n,a,l)),!0}return!1}function sm(e){var t=ra(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=v(n),t!==null){e.blockedOn=t,vc(e.priority,function(){am(n)});return}}else if(t===31){if(t=_(n),t!==null){e.blockedOn=t,vc(e.priority,function(){am(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ss(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ho(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Hs=a,n.target.dispatchEvent(a),Hs=null}else return t=oa(n),t!==null&&nm(t),e.blockedOn=n,!1;t.shift()}return!0}function rm(e,t,n){ss(e)&&n.delete(t)}function vb(){ko=!1,Nn!==null&&ss(Nn)&&(Nn=null),Bn!==null&&ss(Bn)&&(Bn=null),Hn!==null&&ss(Hn)&&(Hn=null),Hl.forEach(rm),Ul.forEach(rm)}function rs(e,t){e.blockedOn===t&&(e.blockedOn=null,ko||(ko=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,vb)))}var os=null;function om(e){os!==e&&(os=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){os===e&&(os=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Uo(a||n)===null)continue;break}var i=oa(n);i!==null&&(e.splice(t,3),t-=3,Br(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Xa(e){function t(h){return rs(h,e)}Nn!==null&&rs(Nn,e),Bn!==null&&rs(Bn,e),Hn!==null&&rs(Hn,e),Hl.forEach(t),Ul.forEach(t);for(var n=0;n<Un.length;n++){var a=Un[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)sm(n),n.blockedOn===null&&Un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],r=l[rt]||null;if(typeof i=="function")r||om(n);else if(r){var u=null;if(i&&i.hasAttribute("formAction")){if(l=i,r=i[rt]||null)u=r.formAction;else if(Uo(l)!==null)continue}else u=r.action;typeof u=="function"?n[a+1]=u:(n.splice(a,3),a-=3),om(n)}}}function cm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return l=r})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function qo(e){this._internalRoot=e}cs.prototype.render=qo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,a=Ct();em(n,a,e,t,null,null)},cs.prototype.unmount=qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;em(e.current,2,null,e,null,null),Xi(),t[sa]=null}};function cs(e){this._internalRoot=e}cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=gc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&sm(e)}};var um=c.version;if(um!=="19.2.7")throw Error(o(527,um,"19.2.7"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=b(t),e=e!==null?O(e):null,e=e===null?null:e.stateNode,e};var xb={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!us.isDisabled&&us.supportsFiber)try{Ka=us.inject(xb),yt=us}catch{}}return Yl.createRoot=function(e,t){if(!d(e))throw Error(o(299));var n=!1,a="",l=yf,i=gf,r=vf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=$d(e,1,!1,null,null,n,a,null,l,i,r,cm),e[sa]=t.current,So(e),new qo(t)},Yl.hydrateRoot=function(e,t,n){if(!d(e))throw Error(o(299));var a=!1,l="",i=yf,r=gf,u=vf,h=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(h=n.formState)),t=$d(e,1,!0,t,n??null,a,l,h,i,r,u,cm),t.context=Pd(null),n=t.current,a=Ct(),a=zs(a),l=En(a),l.callback=null,An(n,l,a),n=a,t.current.lanes=n,Fa(t,n),Jt(t),e[sa]=t.current,So(e),new cs(t)},Yl.version="19.2.7",Yl}var xm;function Rb(){if(xm)return Xo.exports;xm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Xo.exports=zb(),Xo.exports}var Ob=Rb();/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Po=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,_m=/^[\\/]{2}/;function Lb(s,c){return c+s.replace(/\\/g,"/")}var Sm="popstate";function wm(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function Mb(s={}){function c(o,d){var b;let p=(b=d.state)==null?void 0:b.masked,{pathname:v,search:_,hash:x}=p||o.location;return Fo("",{pathname:v,search:_,hash:x},d.state&&d.state.usr||null,d.state&&d.state.key||"default",p?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function f(o,d){return typeof d=="string"?d:Ql(d)}return Nb(c,f,null,s)}function Le(s,c){if(s===!1||s===null||typeof s>"u")throw new Error(c)}function Gt(s,c){if(!s){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Db(){return Math.random().toString(36).substring(2,10)}function Em(s,c){return{usr:s.state,key:s.key,idx:c,masked:s.mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Fo(s,c,f=null,o,d){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof c=="string"?Qa(c):c,state:f,key:c&&c.key||o||Db(),mask:d}}function Ql({pathname:s="/",search:c="",hash:f=""}){return c&&c!=="?"&&(s+=c.charAt(0)==="?"?c:"?"+c),f&&f!=="#"&&(s+=f.charAt(0)==="#"?f:"#"+f),s}function Qa(s){let c={};if(s){let f=s.indexOf("#");f>=0&&(c.hash=s.substring(f),s=s.substring(0,f));let o=s.indexOf("?");o>=0&&(c.search=s.substring(o),s=s.substring(0,o)),s&&(c.pathname=s)}return c}function Nb(s,c,f,o={}){let{window:d=document.defaultView,v5Compat:p=!1}=o,v=d.history,_="POP",x=null,b=O();b==null&&(b=0,v.replaceState({...v.state,idx:b},""));function O(){return(v.state||{idx:null}).idx}function z(){_="POP";let G=O(),U=G==null?null:G-b;b=G,x&&x({action:_,location:Y.location,delta:U})}function B(G,U){_="PUSH";let $=wm(G)?G:Fo(Y.location,G,U);b=O()+1;let W=Em($,b),he=Y.createHref($.mask||$);try{v.pushState(W,"",he)}catch(de){if(de instanceof DOMException&&de.name==="DataCloneError")throw de;d.location.assign(he)}p&&x&&x({action:_,location:Y.location,delta:1})}function q(G,U){_="REPLACE";let $=wm(G)?G:Fo(Y.location,G,U);b=O();let W=Em($,b),he=Y.createHref($.mask||$);v.replaceState(W,"",he),p&&x&&x({action:_,location:Y.location,delta:0})}function Z(G){return Bb(d,G)}let Y={get action(){return _},get location(){return s(d,v)},listen(G){if(x)throw new Error("A history only accepts one active listener");return d.addEventListener(Sm,z),x=G,()=>{d.removeEventListener(Sm,z),x=null}},createHref(G){return c(d,G)},createURL:Z,encodeLocation(G){let U=Z(G);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:B,replace:q,go(G){return v.go(G)}};return Y}function Bb(s,c,f=!1){let o="http://localhost";s&&(o=s.location.origin!=="null"?s.location.origin:s.location.href),Le(o,"No window.location.(origin|href) available to create URL");let d=typeof c=="string"?c:Ql(c);return d=d.replace(/ $/,"%20"),!f&&_m.test(d)&&(d=o+d),new URL(d,o)}function zm(s,c,f="/"){return Hb(s,c,f,!1)}function Hb(s,c,f,o,d){let p=typeof c=="string"?Qa(c):c,v=pn(p.pathname||"/",f);if(v==null)return null;let _=Ub(s),x=null,b=Wb(v);for(let O=0;x==null&&O<_.length;++O)x=Kb(_[O],b,o);return x}function Ub(s){let c=Rm(s);return kb(c),c}function Rm(s,c=[],f=[],o="",d=!1){let p=(v,_,x=d,b)=>{let O={relativePath:b===void 0?v.path||"":b,caseSensitive:v.caseSensitive===!0,childrenIndex:_,route:v};if(O.relativePath.startsWith("/")){if(!O.relativePath.startsWith(o)&&x)return;Le(O.relativePath.startsWith(o),`Absolute route path "${O.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),O.relativePath=O.relativePath.slice(o.length)}let z=Yt([o,O.relativePath]),B=f.concat(O);v.children&&v.children.length>0&&(Le(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${z}".`),Rm(v.children,c,B,z,x)),!(v.path==null&&!v.index)&&c.push({path:z,score:Zb(z,v.index),routesMeta:B.map((q,Z)=>{let[Y,G]=Mm(q.relativePath,q.caseSensitive,Z===B.length-1);return{...q,matcher:Y,compiledParams:G}})})};return s.forEach((v,_)=>{var x;if(v.path===""||!((x=v.path)!=null&&x.includes("?")))p(v,_);else for(let b of Om(v.path))p(v,_,!0,b)}),c}function Om(s){let c=s.split("/");if(c.length===0)return[];let[f,...o]=c,d=f.endsWith("?"),p=f.replace(/\?$/,"");if(o.length===0)return d?[p,""]:[p];let v=Om(o.join("/")),_=[];return _.push(...v.map(x=>x===""?p:[p,x].join("/"))),d&&_.push(...v),_.map(x=>s.startsWith("/")&&x===""?"/":x)}function kb(s){s.sort((c,f)=>c.score!==f.score?f.score-c.score:Jb(c.routesMeta.map(o=>o.childrenIndex),f.routesMeta.map(o=>o.childrenIndex)))}var qb=/^:[\w-]+$/,Yb=3,Gb=2,Xb=1,Qb=10,Vb=-2,Am=s=>s==="*";function Zb(s,c){let f=s.split("/"),o=f.length;return f.some(Am)&&(o+=Vb),c&&(o+=Gb),f.filter(d=>!Am(d)).reduce((d,p)=>d+(qb.test(p)?Yb:p===""?Xb:Qb),o)}function Jb(s,c){return s.length===c.length&&s.slice(0,-1).every((o,d)=>o===c[d])?s[s.length-1]-c[c.length-1]:0}function Kb(s,c,f=!1){let{routesMeta:o}=s,d={},p="/",v=[];for(let _=0;_<o.length;++_){let x=o[_],b=_===o.length-1,O=p==="/"?c:c.slice(p.length)||"/",z={path:x.relativePath,caseSensitive:x.caseSensitive,end:b},B=x.matcher&&x.compiledParams?Lm(z,O,x.matcher,x.compiledParams):bs(z,O),q=x.route;if(!B&&b&&f&&!o[o.length-1].route.index&&(B=bs({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},O)),!B)return null;Object.assign(d,B.params),v.push({params:d,pathname:Yt([p,B.pathname]),pathnameBase:$b(Yt([p,B.pathnameBase])),route:q}),B.pathnameBase!=="/"&&(p=Yt([p,B.pathnameBase]))}return v}function bs(s,c){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[f,o]=Mm(s.path,s.caseSensitive,s.end);return Lm(s,c,f,o)}function Lm(s,c,f,o){let d=c.match(f);if(!d)return null;let p=d[0],v=p.replace(/(.)\/+$/,"$1"),_=d.slice(1);return{params:o.reduce((b,{paramName:O,isOptional:z},B)=>{if(O==="*"){let Z=_[B]||"";v=p.slice(0,p.length-Z.length).replace(/(.)\/+$/,"$1")}const q=_[B];return z&&!q?b[O]=void 0:b[O]=(q||"").replace(/%2F/g,"/"),b},{}),pathname:p,pathnameBase:v,pattern:s}}function Mm(s,c=!1,f=!0){Gt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let o=[],d="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,_,x,b,O)=>{if(o.push({paramName:_,isOptional:x!=null}),x){let z=O.charAt(b+v.length);return z&&z!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(o.push({paramName:"*"}),d+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?d+="\\/*$":s!==""&&s!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,c?void 0:"i"),o]}function Wb(s){try{return s.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Gt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),s}}function pn(s,c){if(c==="/")return s;if(!s.toLowerCase().startsWith(c.toLowerCase()))return null;let f=c.endsWith("/")?c.length-1:c.length,o=s.charAt(f);return o&&o!=="/"?null:s.slice(f)||"/"}function Fb(s,c="/"){let{pathname:f,search:o="",hash:d=""}=typeof s=="string"?Qa(s):s,p;return f?(f=Dm(f),f.startsWith("/")?p=Cm(f.substring(1),"/"):p=Cm(f,c)):p=c,{pathname:p,search:Pb(o),hash:ey(d)}}function Cm(s,c){let f=ys(c).split("/");return s.split("/").forEach(d=>{d===".."?f.length>1&&f.pop():d!=="."&&f.push(d)}),f.length>1?f.join("/"):"/"}function Jo(s,c,f,o){return`Cannot include a '${s}' character in a manually specified \`to.${c}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ib(s){return s.filter((c,f)=>f===0||c.route.path&&c.route.path.length>0)}function ec(s){let c=Ib(s);return c.map((f,o)=>o===c.length-1?f.pathname:f.pathnameBase)}function gs(s,c,f,o=!1){let d;typeof s=="string"?d=Qa(s):(d={...s},Le(!d.pathname||!d.pathname.includes("?"),Jo("?","pathname","search",d)),Le(!d.pathname||!d.pathname.includes("#"),Jo("#","pathname","hash",d)),Le(!d.search||!d.search.includes("#"),Jo("#","search","hash",d)));let p=s===""||d.pathname==="",v=p?"/":d.pathname,_;if(v==null)_=f;else{let z=c.length-1;if(!o&&v.startsWith("..")){let B=v.split("/");for(;B[0]==="..";)B.shift(),z-=1;d.pathname=B.join("/")}_=z>=0?c[z]:"/"}let x=Fb(d,_),b=v&&v!=="/"&&v.endsWith("/"),O=(p||v===".")&&f.endsWith("/");return!x.pathname.endsWith("/")&&(b||O)&&(x.pathname+="/"),x}var Dm=s=>s.replace(/[\\/]{2,}/g,"/"),Yt=s=>Dm(s.join("/")),ys=s=>s.replace(/\/+$/,""),$b=s=>ys(s).replace(/^\/*/,"/"),Pb=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,ey=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,ty=class{constructor(s,c,f,o=!1){this.status=s,this.statusText=c||"",this.internal=o,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function ny(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function ay(s){let c=s.map(f=>f.route.path).filter(Boolean);return Yt(c)||"/"}var Nm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Bm(s,c){let f=s;if(typeof f!="string"||!Po.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let o=f,d=!1;if(Nm)try{let p=new URL(window.location.href),v=_m.test(f)?new URL(Lb(f,p.protocol)):new URL(f),_=pn(v.pathname,c);v.origin===p.origin&&_!=null?f=_+v.search+v.hash:d=!0}catch{Gt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:d,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Hm=["POST","PUT","PATCH","DELETE"];new Set(Hm);var ly=["GET",...Hm];new Set(ly);var iy=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function sy(s){try{return iy.includes(new URL(s).protocol)}catch{return!1}}var Va=C.createContext(null);Va.displayName="DataRouter";var vs=C.createContext(null);vs.displayName="DataRouterState";var Um=C.createContext(!1);function ry(){return C.useContext(Um)}var km=C.createContext({isTransitioning:!1});km.displayName="ViewTransition";var oy=C.createContext(new Map);oy.displayName="Fetchers";var cy=C.createContext(null);cy.displayName="Await";var jt=C.createContext(null);jt.displayName="Navigation";var Vl=C.createContext(null);Vl.displayName="Location";var Kt=C.createContext({outlet:null,matches:[],isDataRoute:!1});Kt.displayName="Route";var tc=C.createContext(null);tc.displayName="RouteError";var qm="REACT_ROUTER_ERROR",uy="REDIRECT",fy="ROUTE_ERROR_RESPONSE";function dy(s){if(s.startsWith(`${qm}:${uy}:{`))try{let c=JSON.parse(s.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function my(s){if(s.startsWith(`${qm}:${fy}:{`))try{let c=JSON.parse(s.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new ty(c.status,c.statusText,c.data)}catch{}}function py(s,{relative:c}={}){Le(Za(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:o}=C.useContext(jt),{hash:d,pathname:p,search:v}=Zl(s,{relative:c}),_=p;return f!=="/"&&(_=p==="/"?f:Yt([f,p])),o.createHref({pathname:_,search:v,hash:d})}function Za(){return C.useContext(Vl)!=null}function Ht(){return Le(Za(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Vl).location}var Ym="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Gm(s){C.useContext(jt).static||C.useLayoutEffect(s)}function Xt(){let{isDataRoute:s}=C.useContext(Kt);return s?Ty():hy()}function hy(){Le(Za(),"useNavigate() may be used only in the context of a <Router> component.");let s=C.useContext(Va),{basename:c,navigator:f}=C.useContext(jt),{matches:o}=C.useContext(Kt),{pathname:d}=Ht(),p=JSON.stringify(ec(o)),v=C.useRef(!1);return Gm(()=>{v.current=!0}),C.useCallback((x,b={})=>{if(Gt(v.current,Ym),!v.current)return;if(typeof x=="number"){f.go(x);return}let O=gs(x,JSON.parse(p),d,b.relative==="path");s==null&&c!=="/"&&(O.pathname=O.pathname==="/"?c:Yt([c,O.pathname])),(b.replace?f.replace:f.push)(O,b.state,b)},[c,f,p,d,s])}C.createContext(null);function Zl(s,{relative:c}={}){let{matches:f}=C.useContext(Kt),{pathname:o}=Ht(),d=JSON.stringify(ec(f));return C.useMemo(()=>gs(s,JSON.parse(d),o,c==="path"),[s,d,o,c])}function by(s,c){return Xm(s,c)}function Xm(s,c,f){var G;Le(Za(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=C.useContext(jt),{matches:d}=C.useContext(Kt),p=d[d.length-1],v=p?p.params:{},_=p?p.pathname:"/",x=p?p.pathnameBase:"/",b=p&&p.route;{let U=b&&b.path||"";Vm(_,!b||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let O=Ht(),z;if(c){let U=typeof c=="string"?Qa(c):c;Le(x==="/"||((G=U.pathname)==null?void 0:G.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${U.pathname}" was given in the \`location\` prop.`),z=U}else z=O;let B=z.pathname||"/",q=B;if(x!=="/"){let U=x.replace(/^\//,"").split("/");q="/"+B.replace(/^\//,"").split("/").slice(U.length).join("/")}let Z=f&&f.state.matches.length?f.state.matches.map(U=>Object.assign(U,{route:f.manifest[U.route.id]||U.route})):zm(s,{pathname:q});Gt(b||Z!=null,`No routes matched location "${z.pathname}${z.search}${z.hash}" `),Gt(Z==null||Z[Z.length-1].route.element!==void 0||Z[Z.length-1].route.Component!==void 0||Z[Z.length-1].route.lazy!==void 0,`Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=Sy(Z&&Z.map(U=>Object.assign({},U,{params:Object.assign({},v,U.params),pathname:Yt([x,o.encodeLocation?o.encodeLocation(U.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?x:Yt([x,o.encodeLocation?o.encodeLocation(U.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),d,f);return c&&Y?C.createElement(Vl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...z},navigationType:"POP"}},Y):Y}function yy(){let s=jy(),c=ny(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),f=s instanceof Error?s.stack:null,o="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:o},p={padding:"2px 4px",backgroundColor:o},v=null;return console.error("Error handled by React Router default ErrorBoundary:",s),v=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:p},"ErrorBoundary")," or"," ",C.createElement("code",{style:p},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},c),f?C.createElement("pre",{style:d},f):null,v)}var gy=C.createElement(yy,null),Qm=class extends C.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,c){return c.location!==s.location||c.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:c.error,location:c.location,revalidation:s.revalidation||c.revalidation}}componentDidCatch(s,c){this.props.onError?this.props.onError(s,c):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const f=my(s.digest);f&&(s=f)}let c=s!==void 0?C.createElement(Kt.Provider,{value:this.props.routeContext},C.createElement(tc.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?C.createElement(vy,{error:s},c):c}};Qm.contextType=Um;var Ko=new WeakMap;function vy({children:s,error:c}){let{basename:f}=C.useContext(jt);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let o=dy(c.digest);if(o){let d=Ko.get(c);if(d)throw d;let p=Bm(o.location,f),v=p.absoluteURL||p.to;if(sy(v))throw new Error("Invalid redirect location");if(Nm&&!Ko.get(c))if(p.isExternal||o.reloadDocument)window.location.href=v;else{const _=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:o.replace}));throw Ko.set(c,_),_}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${v}`})}}return s}function xy({routeContext:s,match:c,children:f}){let o=C.useContext(Va);return o&&o.static&&o.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=c.route.id),C.createElement(Kt.Provider,{value:s},f)}function Sy(s,c=[],f){let o=f==null?void 0:f.state;if(s==null){if(!o)return null;if(o.errors)s=o.matches;else if(c.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let d=s,p=o==null?void 0:o.errors;if(p!=null){let O=d.findIndex(z=>z.route.id&&(p==null?void 0:p[z.route.id])!==void 0);Le(O>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),d=d.slice(0,Math.min(d.length,O+1))}let v=!1,_=-1;if(f&&o){v=o.renderFallback;for(let O=0;O<d.length;O++){let z=d[O];if((z.route.HydrateFallback||z.route.hydrateFallbackElement)&&(_=O),z.route.id){let{loaderData:B,errors:q}=o,Z=z.route.loader&&!B.hasOwnProperty(z.route.id)&&(!q||q[z.route.id]===void 0);if(z.route.lazy||Z){f.isStatic&&(v=!0),_>=0?d=d.slice(0,_+1):d=[d[0]];break}}}}let x=f==null?void 0:f.onError,b=o&&x?(O,z)=>{var B,q;x(O,{location:o.location,params:((q=(B=o.matches)==null?void 0:B[0])==null?void 0:q.params)??{},pattern:ay(o.matches),errorInfo:z})}:void 0;return d.reduceRight((O,z,B)=>{let q,Z=!1,Y=null,G=null;o&&(q=p&&z.route.id?p[z.route.id]:void 0,Y=z.route.errorElement||gy,v&&(_<0&&B===0?(Vm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Z=!0,G=null):_===B&&(Z=!0,G=z.route.hydrateFallbackElement||null)));let U=c.concat(d.slice(0,B+1)),$=()=>{let W;return q?W=Y:Z?W=G:z.route.Component?W=C.createElement(z.route.Component,null):z.route.element?W=z.route.element:W=O,C.createElement(xy,{match:z,routeContext:{outlet:O,matches:U,isDataRoute:o!=null},children:W})};return o&&(z.route.ErrorBoundary||z.route.errorElement||B===0)?C.createElement(Qm,{location:o.location,revalidation:o.revalidation,component:Y,error:q,children:$(),routeContext:{outlet:null,matches:U,isDataRoute:!0},onError:b}):$()},null)}function nc(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wy(s){let c=C.useContext(Va);return Le(c,nc(s)),c}function Ey(s){let c=C.useContext(vs);return Le(c,nc(s)),c}function Ay(s){let c=C.useContext(Kt);return Le(c,nc(s)),c}function ac(s){let c=Ay(s),f=c.matches[c.matches.length-1];return Le(f.route.id,`${s} can only be used on routes that contain a unique "id"`),f.route.id}function Cy(){return ac("useRouteId")}function jy(){var o;let s=C.useContext(tc),c=Ey("useRouteError"),f=ac("useRouteError");return s!==void 0?s:(o=c.errors)==null?void 0:o[f]}function Ty(){let{router:s}=wy("useNavigate"),c=ac("useNavigate"),f=C.useRef(!1);return Gm(()=>{f.current=!0}),C.useCallback(async(d,p={})=>{Gt(f.current,Ym),f.current&&(typeof d=="number"?await s.navigate(d):await s.navigate(d,{fromRouteId:c,...p}))},[s,c])}var jm={};function Vm(s,c,f){!c&&!jm[s]&&(jm[s]=!0,Gt(!1,f))}C.memo(_y);function _y({routes:s,manifest:c,future:f,state:o,isStatic:d,onError:p}){return Xm(s,void 0,{manifest:c,state:o,isStatic:d,onError:p})}function Zm({to:s,replace:c,state:f,relative:o}){Le(Za(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=C.useContext(jt);Gt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=C.useContext(Kt),{pathname:v}=Ht(),_=Xt(),x=gs(s,ec(p),v,o==="path"),b=JSON.stringify(x);return C.useEffect(()=>{_(JSON.parse(b),{replace:c,state:f,relative:o})},[_,b,o,c,f]),null}function le(s){Le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zy({basename:s="/",children:c=null,location:f,navigationType:o="POP",navigator:d,static:p=!1,useTransitions:v}){Le(!Za(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let _=s.replace(/^\/*/,"/"),x=C.useMemo(()=>({basename:_,navigator:d,static:p,useTransitions:v,future:{}}),[_,d,p,v]);typeof f=="string"&&(f=Qa(f));let{pathname:b="/",search:O="",hash:z="",state:B=null,key:q="default",mask:Z}=f,Y=C.useMemo(()=>{let G=pn(b,_);return G==null?null:{location:{pathname:G,search:O,hash:z,state:B,key:q,mask:Z},navigationType:o}},[_,b,O,z,B,q,o,Z]);return Gt(Y!=null,`<Router basename="${_}"> is not able to match the URL "${b}${O}${z}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:C.createElement(jt.Provider,{value:x},C.createElement(Vl.Provider,{children:c,value:Y}))}function Ry({children:s,location:c}){return by(Io(s),c)}function Io(s,c=[]){let f=[];return C.Children.forEach(s,(o,d)=>{if(!C.isValidElement(o))return;let p=[...c,d];if(o.type===C.Fragment){f.push.apply(f,Io(o.props.children,p));return}Le(o.type===le,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Le(!o.props.index||!o.props.children,"An index route cannot have child routes.");let v={id:o.props.id||p.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(v.children=Io(o.props.children,p)),f.push(v)}),f}var ps="get",hs="application/x-www-form-urlencoded";function xs(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function Oy(s){return xs(s)&&s.tagName.toLowerCase()==="button"}function Ly(s){return xs(s)&&s.tagName.toLowerCase()==="form"}function My(s){return xs(s)&&s.tagName.toLowerCase()==="input"}function Dy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Ny(s,c){return s.button===0&&(!c||c==="_self")&&!Dy(s)}var fs=null;function By(){if(fs===null)try{new FormData(document.createElement("form"),0),fs=!1}catch{fs=!0}return fs}var Hy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wo(s){return s!=null&&!Hy.has(s)?(Gt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hs}"`),null):s}function Uy(s,c){let f,o,d,p,v;if(Ly(s)){let _=s.getAttribute("action");o=_?pn(_,c):null,f=s.getAttribute("method")||ps,d=Wo(s.getAttribute("enctype"))||hs,p=new FormData(s)}else if(Oy(s)||My(s)&&(s.type==="submit"||s.type==="image")){let _=s.form;if(_==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=s.getAttribute("formaction")||_.getAttribute("action");if(o=x?pn(x,c):null,f=s.getAttribute("formmethod")||_.getAttribute("method")||ps,d=Wo(s.getAttribute("formenctype"))||Wo(_.getAttribute("enctype"))||hs,p=new FormData(_,s),!By()){let{name:b,type:O,value:z}=s;if(O==="image"){let B=b?`${b}.`:"";p.append(`${B}x`,"0"),p.append(`${B}y`,"0")}else b&&p.append(b,z)}}else{if(xs(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=ps,o=null,d=hs,v=s}return p&&d==="text/plain"&&(v=p,p=void 0),{action:o,method:f.toLowerCase(),encType:d,formData:p,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function lc(s,c){if(s===!1||s===null||typeof s>"u")throw new Error(c)}function Jm(s,c,f,o){let d=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return f?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${o}`:d.pathname=`${d.pathname}.${o}`:d.pathname==="/"?d.pathname=`_root.${o}`:c&&pn(d.pathname,c)==="/"?d.pathname=`${ys(c)}/_root.${o}`:d.pathname=`${ys(d.pathname)}.${o}`,d}async function ky(s,c){if(s.id in c)return c[s.id];try{let f=await import(s.module);return c[s.id]=f,f}catch(f){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Yy(s,c,f){let o=await Promise.all(s.map(async d=>{let p=c.routes[d.route.id];if(p){let v=await ky(p,f);return v.links?v.links():[]}return[]}));return Vy(o.flat(1).filter(qy).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Tm(s,c,f,o,d,p){let v=(x,b)=>f[b]?x.route.id!==f[b].route.id:!0,_=(x,b)=>{var O;return f[b].pathname!==x.pathname||((O=f[b].route.path)==null?void 0:O.endsWith("*"))&&f[b].params["*"]!==x.params["*"]};return p==="assets"?c.filter((x,b)=>v(x,b)||_(x,b)):p==="data"?c.filter((x,b)=>{var z;let O=o.routes[x.route.id];if(!O||!O.hasLoader)return!1;if(v(x,b)||_(x,b))return!0;if(x.route.shouldRevalidate){let B=x.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((z=f[0])==null?void 0:z.params)||{},nextUrl:new URL(s,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof B=="boolean")return B}return!0}):[]}function Gy(s,c,{includeHydrateFallback:f}={}){return Xy(s.map(o=>{let d=c.routes[o.route.id];if(!d)return[];let p=[d.module];return d.clientActionModule&&(p=p.concat(d.clientActionModule)),d.clientLoaderModule&&(p=p.concat(d.clientLoaderModule)),f&&d.hydrateFallbackModule&&(p=p.concat(d.hydrateFallbackModule)),d.imports&&(p=p.concat(d.imports)),p}).flat(1))}function Xy(s){return[...new Set(s)]}function Qy(s){let c={},f=Object.keys(s).sort();for(let o of f)c[o]=s[o];return c}function Vy(s,c){let f=new Set;return new Set(c),s.reduce((o,d)=>{let p=JSON.stringify(Qy(d));return f.has(p)||(f.add(p),o.push({key:p,link:d})),o},[])}function ic(){let s=C.useContext(Va);return lc(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Zy(){let s=C.useContext(vs);return lc(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var sc=C.createContext(void 0);sc.displayName="FrameworkContext";function Ss(){let s=C.useContext(sc);return lc(s,"You must render this element inside a <HydratedRouter> element"),s}function Jy(s,c){let f=C.useContext(sc),[o,d]=C.useState(!1),[p,v]=C.useState(!1),{onFocus:_,onBlur:x,onMouseEnter:b,onMouseLeave:O,onTouchStart:z}=c,B=C.useRef(null);C.useEffect(()=>{if(s==="render"&&v(!0),s==="viewport"){let Y=U=>{U.forEach($=>{v($.isIntersecting)})},G=new IntersectionObserver(Y,{threshold:.5});return B.current&&G.observe(B.current),()=>{G.disconnect()}}},[s]),C.useEffect(()=>{if(o){let Y=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(Y)}}},[o]);let q=()=>{d(!0)},Z=()=>{d(!1),v(!1)};return f?s!=="intent"?[p,B,{}]:[p,B,{onFocus:Gl(_,q),onBlur:Gl(x,Z),onMouseEnter:Gl(b,q),onMouseLeave:Gl(O,Z),onTouchStart:Gl(z,q)}]:[!1,B,{}]}function Gl(s,c){return f=>{s&&s(f),f.defaultPrevented||c(f)}}function Ky({page:s,...c}){let f=ry(),{nonce:o}=Ss(),{router:d}=ic(),p=C.useMemo(()=>zm(d.routes,s,d.basename),[d.routes,s,d.basename]);return p?(c.nonce==null&&o&&(c={...c,nonce:o}),f?C.createElement(Fy,{page:s,matches:p,...c}):C.createElement(Iy,{page:s,matches:p,...c})):null}function Wy(s){let{manifest:c,routeModules:f}=Ss(),[o,d]=C.useState([]);return C.useEffect(()=>{let p=!1;return Yy(s,c,f).then(v=>{p||d(v)}),()=>{p=!0}},[s,c,f]),o}function Fy({page:s,matches:c,...f}){let o=Ht(),{future:d}=Ss(),{basename:p}=ic(),v=C.useMemo(()=>{if(s===o.pathname+o.search+o.hash)return[];let _=Jm(s,p,d.v8_trailingSlashAwareDataRequests,"rsc"),x=!1,b=[];for(let O of c)typeof O.route.shouldRevalidate=="function"?x=!0:b.push(O.route.id);return x&&b.length>0&&_.searchParams.set("_routes",b.join(",")),[_.pathname+_.search]},[p,d.v8_trailingSlashAwareDataRequests,s,o,c]);return C.createElement(C.Fragment,null,v.map(_=>C.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...f})))}function Iy({page:s,matches:c,...f}){let o=Ht(),{future:d,manifest:p,routeModules:v}=Ss(),{basename:_}=ic(),{loaderData:x,matches:b}=Zy(),O=C.useMemo(()=>Tm(s,c,b,p,o,"data"),[s,c,b,p,o]),z=C.useMemo(()=>Tm(s,c,b,p,o,"assets"),[s,c,b,p,o]),B=C.useMemo(()=>{if(s===o.pathname+o.search+o.hash)return[];let Y=new Set,G=!1;if(c.forEach($=>{var he;let W=p.routes[$.route.id];!W||!W.hasLoader||(!O.some(de=>de.route.id===$.route.id)&&$.route.id in x&&((he=v[$.route.id])!=null&&he.shouldRevalidate)||W.hasClientLoader?G=!0:Y.add($.route.id))}),Y.size===0)return[];let U=Jm(s,_,d.v8_trailingSlashAwareDataRequests,"data");return G&&Y.size>0&&U.searchParams.set("_routes",c.filter($=>Y.has($.route.id)).map($=>$.route.id).join(",")),[U.pathname+U.search]},[_,d.v8_trailingSlashAwareDataRequests,x,o,p,O,c,s,v]),q=C.useMemo(()=>Gy(z,p),[z,p]),Z=Wy(z);return C.createElement(C.Fragment,null,B.map(Y=>C.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...f})),q.map(Y=>C.createElement("link",{key:Y,rel:"modulepreload",href:Y,...f})),Z.map(({key:Y,link:G})=>C.createElement("link",{key:Y,nonce:f.nonce,...G,crossOrigin:G.crossOrigin??f.crossOrigin})))}function $y(...s){return c=>{s.forEach(f=>{typeof f=="function"?f(c):f!=null&&(f.current=c)})}}var Py=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Py&&(window.__reactRouterVersion="7.18.0")}catch{}function eg({basename:s,children:c,useTransitions:f,window:o}){let d=C.useRef();d.current==null&&(d.current=Mb({window:o,v5Compat:!0}));let p=d.current,[v,_]=C.useState({action:p.action,location:p.location}),x=C.useCallback(b=>{f===!1?_(b):C.startTransition(()=>_(b))},[f]);return C.useLayoutEffect(()=>p.listen(x),[p,x]),C.createElement(zy,{basename:s,children:c,location:v.location,navigationType:v.action,navigator:p,useTransitions:f})}var Km=C.forwardRef(function({onClick:c,discover:f="render",prefetch:o="none",relative:d,reloadDocument:p,replace:v,mask:_,state:x,target:b,to:O,preventScrollReset:z,viewTransition:B,defaultShouldRevalidate:q,...Z},Y){let{basename:G,navigator:U,useTransitions:$}=C.useContext(jt),W=typeof O=="string"&&Po.test(O),he=Bm(O,G);O=he.to;let de=py(O,{relative:d}),xe=Ht(),I=null;if(_){let ne=gs(_,[],xe.mask?xe.mask.pathname:"/",!0);G!=="/"&&(ne.pathname=ne.pathname==="/"?G:Yt([G,ne.pathname])),I=U.createHref(ne)}let[Re,Qe,pt]=Jy(o,Z),tt=ag(O,{replace:v,mask:_,state:x,target:b,preventScrollReset:z,relative:d,viewTransition:B,defaultShouldRevalidate:q,useTransitions:$});function Ve(ne){c&&c(ne),ne.defaultPrevented||tt(ne)}let ht=!(he.isExternal||p),st=C.createElement("a",{...Z,...pt,href:(ht?I:void 0)||he.absoluteURL||de,onClick:ht?Ve:c,ref:$y(Y,Qe),target:b,"data-discover":!W&&f==="render"?"true":void 0});return Re&&!W?C.createElement(C.Fragment,null,st,C.createElement(Ky,{page:de})):st});Km.displayName="Link";var Wm=C.forwardRef(function({"aria-current":c="page",caseSensitive:f=!1,className:o="",end:d=!1,style:p,to:v,viewTransition:_,children:x,...b},O){let z=Zl(v,{relative:b.relative}),B=Ht(),q=C.useContext(vs),{navigator:Z,basename:Y}=C.useContext(jt),G=q!=null&&og(z)&&_===!0,U=Z.encodeLocation?Z.encodeLocation(z).pathname:z.pathname,$=B.pathname,W=q&&q.navigation&&q.navigation.location?q.navigation.location.pathname:null;f||($=$.toLowerCase(),W=W?W.toLowerCase():null,U=U.toLowerCase()),W&&Y&&(W=pn(W,Y)||W);const he=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let de=$===U||!d&&$.startsWith(U)&&$.charAt(he)==="/",xe=W!=null&&(W===U||!d&&W.startsWith(U)&&W.charAt(U.length)==="/"),I={isActive:de,isPending:xe,isTransitioning:G},Re=de?c:void 0,Qe;typeof o=="function"?Qe=o(I):Qe=[o,de?"active":null,xe?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let pt=typeof p=="function"?p(I):p;return C.createElement(Km,{...b,"aria-current":Re,className:Qe,ref:O,style:pt,to:v,viewTransition:_},typeof x=="function"?x(I):x)});Wm.displayName="NavLink";var tg=C.forwardRef(({discover:s="render",fetcherKey:c,navigate:f,reloadDocument:o,replace:d,state:p,method:v=ps,action:_,onSubmit:x,relative:b,preventScrollReset:O,viewTransition:z,defaultShouldRevalidate:B,...q},Z)=>{let{useTransitions:Y}=C.useContext(jt),G=sg(),U=rg(_,{relative:b}),$=v.toLowerCase()==="get"?"get":"post",W=typeof _=="string"&&Po.test(_),he=de=>{if(x&&x(de),de.defaultPrevented)return;de.preventDefault();let xe=de.nativeEvent.submitter,I=(xe==null?void 0:xe.getAttribute("formmethod"))||v,Re=()=>G(xe||de.currentTarget,{fetcherKey:c,method:I,navigate:f,replace:d,state:p,relative:b,preventScrollReset:O,viewTransition:z,defaultShouldRevalidate:B});Y&&f!==!1?C.startTransition(()=>Re()):Re()};return C.createElement("form",{ref:Z,method:$,action:U,onSubmit:o?x:he,...q,"data-discover":!W&&s==="render"?"true":void 0})});tg.displayName="Form";function ng(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fm(s){let c=C.useContext(Va);return Le(c,ng(s)),c}function ag(s,{target:c,replace:f,mask:o,state:d,preventScrollReset:p,relative:v,viewTransition:_,defaultShouldRevalidate:x,useTransitions:b}={}){let O=Xt(),z=Ht(),B=Zl(s,{relative:v});return C.useCallback(q=>{if(Ny(q,c)){q.preventDefault();let Z=f!==void 0?f:Ql(z)===Ql(B),Y=()=>O(s,{replace:Z,mask:o,state:d,preventScrollReset:p,relative:v,viewTransition:_,defaultShouldRevalidate:x});b?C.startTransition(()=>Y()):Y()}},[z,O,B,f,o,d,c,s,p,v,_,x,b])}var lg=0,ig=()=>`__${String(++lg)}__`;function sg(){let{router:s}=Fm("useSubmit"),{basename:c}=C.useContext(jt),f=Cy(),o=s.fetch,d=s.navigate;return C.useCallback(async(p,v={})=>{let{action:_,method:x,encType:b,formData:O,body:z}=Uy(p,c);if(v.navigate===!1){let B=v.fetcherKey||ig();await o(B,f,v.action||_,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:O,body:z,formMethod:v.method||x,formEncType:v.encType||b,flushSync:v.flushSync})}else await d(v.action||_,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:O,body:z,formMethod:v.method||x,formEncType:v.encType||b,replace:v.replace,state:v.state,fromRouteId:f,flushSync:v.flushSync,viewTransition:v.viewTransition})},[o,d,c,f])}function rg(s,{relative:c}={}){let{basename:f}=C.useContext(jt),o=C.useContext(Kt);Le(o,"useFormAction must be used inside a RouteContext");let[d]=o.matches.slice(-1),p={...Zl(s||".",{relative:c})},v=Ht();if(s==null){p.search=v.search;let _=new URLSearchParams(p.search),x=_.getAll("index");if(x.some(O=>O==="")){_.delete("index"),x.filter(z=>z).forEach(z=>_.append("index",z));let O=_.toString();p.search=O?`?${O}`:""}}return(!s||s===".")&&d.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(p.pathname=p.pathname==="/"?f:Yt([f,p.pathname])),Ql(p)}function og(s,{relative:c}={}){let f=C.useContext(km);Le(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Fm("useViewTransitionState"),d=Zl(s,{relative:c});if(!f.isTransitioning)return!1;let p=pn(f.currentLocation.pathname,o)||f.currentLocation.pathname,v=pn(f.nextLocation.pathname,o)||f.nextLocation.pathname;return bs(d.pathname,v)!=null||bs(d.pathname,p)!=null}const cg=[{id:"1",type:"reward",title:"Reward Earned",body:'You earned 250 EcoPoints for completing "Plant a Tree" challenge.',time:"10m ago",read:!1},{id:"2",type:"opportunity",title:"Event Reminder",body:"Limbe Coastal Cleanup starts tomorrow at 8:00 AM.",time:"1h ago",read:!1},{id:"3",type:"achievement",title:"Certificate Available",body:"Your certificate for Environmental Leadership is ready.",time:"3h ago",read:!0},{id:"4",type:"challenge",title:"New Achievement",body:'You earned the "Tree Guardian" badge.',time:"5h ago",read:!0},{id:"5",type:"community",title:"NGO Announcement",body:"WWF Cameroon launched a new sustainability challenge.",time:"1d ago",read:!0}],Im=C.createContext(null);function ug({children:s}){const c=C.useRef({}),[f,o]=C.useState(!0),[d,p]=C.useState(cg),[v,_]=C.useState([]),[x,b]=C.useState([]),[O,z]=C.useState({"post-1":!0}),[B,q]=C.useState(""),[Z,Y]=C.useState(""),[G,U]=C.useState(""),[$,W]=C.useState({opportunityId:null,postId:null,challengeId:null,articleId:null,categoryId:null,profileId:null}),he=C.useCallback(()=>o(!0),[]),de=C.useCallback(()=>o(!1),[]),xe=C.useCallback(()=>{p(ne=>ne.map(T=>({...T,read:!0})))},[]),I=C.useCallback(ne=>{p(T=>T.map(H=>H.id===ne?{...H,read:!0}:H))},[]),Re=C.useCallback(ne=>{z(T=>({...T,[ne]:!T[ne]}))},[]),Qe=C.useCallback(ne=>{_(T=>T.includes(ne)?T.filter(H=>H!==ne):[...T,ne])},[]),pt=C.useCallback(ne=>{b(T=>T.includes(ne)?T.filter(H=>H!==ne):[...T,ne])},[]),tt=C.useCallback(ne=>{W(T=>({...T,...ne}))},[]),Ve=C.useCallback((ne,T)=>(c.current[ne]=T,T),[]),ht=C.useCallback(ne=>c.current[ne]??0,[]),st=C.useMemo(()=>({isAuthenticated:f,notifications:d,bookmarkedOpportunities:v,bookmarkedArticles:x,likedPosts:O,draftPost:B,draftComment:Z,searchQuery:G,selected:$,scrollPositions:c.current,login:he,logout:de,markAllNotificationsRead:xe,markNotificationRead:I,toggleLike:Re,toggleBookmarkOpportunity:Qe,toggleBookmarkArticle:pt,setDraftPost:q,setDraftComment:Y,setSearchQuery:U,setSelected:tt,saveScrollPosition:Ve,getScrollPosition:ht}),[f,d,v,x,O,B,Z,G,$,he,de,xe,I,Re,Qe,pt,tt,Ve,ht]);return m.jsx(Im.Provider,{value:st,children:s})}function it(){const s=C.useContext(Im);if(!s)throw new Error("useAppState must be used within AppStateProvider");return s}const w={splash:"/",auth:"/auth",home:"/home",explore:"/explore",opportunityDetail:"/opportunity-detail",community:"/community",postDetail:"/post-detail",createPost:"/create-post",ecoquest:"/ecoquest",challengeDetail:"/challenge-detail",challengeRegistration:"/challenge-registration",rewards:"/rewards",leaderboard:"/leaderboard",myImpact:"/my-impact",analytics:"/analytics",notifications:"/notifications",profile:"/profile",editProfile:"/edit-profile",learn:"/learn",learnCategory:"/learn/category",learnArticle:"/learn/article",savedOpportunities:"/saved-opportunities",savedArticles:"/saved-articles",certificate:"/certificate",publicProfile:"/public-profile",registration:"/registration",organizationInfo:"/organization-info",mapView:"/map-view",imageViewer:"/image-viewer",commentThread:"/comment-thread",achievementDetail:"/achievement-detail",badgeDetail:"/badge-detail",systemDetails:"/system-details",preferences:"/preferences",notificationSettings:"/notification-settings",privacySettings:"/privacy-settings",helpCentre:"/help-centre",about:"/about",searchResults:"/search-results"},fg=[w.home,w.explore,w.ecoquest,w.learn,w.profile];function ds(s){return fg.includes(s)}function lt({name:s,filled:c=!1,className:f="",size:o}){return m.jsx("span",{className:`material-symbols-outlined ${f}`,style:{fontVariationSettings:c?"'FILL' 1":"'FILL' 0",fontSize:o?`${o}px`:void 0},children:s})}const dg=[{route:w.home,label:"Home",icon:"home"},{route:w.explore,label:"Explore",icon:"explore"},{route:w.ecoquest,label:"EcoQuest",icon:"nature_people"},{route:w.learn,label:"Learn",icon:"school"},{route:w.profile,label:"Profile",icon:"person"}];function mg(){const s=Ht();return m.jsx("nav",{className:"fixed bottom-0 w-full z-50 flex justify-around items-center px-xs py-base bg-surface shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] h-20 max-w-2xl mx-auto left-0 right-0",children:dg.map(({route:c,label:f,icon:o})=>{const d=s.pathname===c;return m.jsxs(Wm,{to:c,className:`flex flex-col items-center justify-center transition-all active:scale-90 duration-150 active-pill ${d?"bg-primary-container text-on-primary-container rounded-full px-4 py-1":"text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full"}`,children:[m.jsx(lt,{name:o,filled:d}),m.jsx("span",{className:"font-label-caps text-label-caps mt-0.5",children:f})]},c)})})}const pg=`<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>EcoLink Cameroon - Home Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed-variant": "#7a2c38",
                        "secondary": "#006d36",
                        "on-background": "#181d18",
                        "secondary-fixed-dim": "#73dc91",
                        "surface-container": "#ebefe8",
                        "on-tertiary-container": "#ffcace",
                        "inverse-on-surface": "#eef2eb",
                        "outline-variant": "#bfc9be",
                        "surface-container-highest": "#e0e4dd",
                        "on-secondary": "#ffffff",
                        "on-secondary-container": "#007239",
                        "on-surface": "#181d18",
                        "secondary-container": "#8cf6a8",
                        "primary-fixed-dim": "#87d89c",
                        "tertiary-fixed-dim": "#ffb2b9",
                        "surface-container-lowest": "#ffffff",
                        "on-primary": "#ffffff",
                        "outline": "#6f7a70",
                        "surface-variant": "#e0e4dd",
                        "on-primary-fixed-variant": "#005229",
                        "on-surface-variant": "#3f4940",
                        "error-container": "#ffdad6",
                        "on-primary-fixed": "#00210d",
                        "inverse-primary": "#87d89c",
                        "tertiary-fixed": "#ffdadc",
                        "primary-container": "#146b3a",
                        "on-error": "#ffffff",
                        "tertiary": "#792b38",
                        "background": "#f7fbf3",
                        "surface-tint": "#166c3b",
                        "on-error-container": "#93000a",
                        "primary-fixed": "#a2f5b6",
                        "surface-dim": "#d7dbd4",
                        "surface-bright": "#f7fbf3",
                        "inverse-surface": "#2d322d",
                        "primary": "#005128",
                        "secondary-fixed": "#8ff9ab",
                        "surface-container-high": "#e5e9e2",
                        "error": "#ba1a1a",
                        "surface-container-low": "#f1f5ed",
                        "on-primary-container": "#97e9ab",
                        "on-secondary-fixed-variant": "#005227",
                        "on-tertiary-fixed": "#400010",
                        "tertiary-container": "#97424e",
                        "surface": "#f7fbf3",
                        "on-secondary-fixed": "#00210c",
                        "on-tertiary": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "1rem",
                        "3xl": "1.5rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "xs": "8px",
                        "gutter-mobile": "16px",
                        "xl": "48px",
                        "md": "24px",
                        "margin-mobile": "20px",
                        "sm": "16px",
                        "lg": "32px",
                        "base": "4px"
                    },
                    "fontFamily": {
                        "headline-md": ["Inter", "sans-serif"],
                        "label-caps": ["Inter", "sans-serif"],
                        "display-lg-mobile": ["Inter", "sans-serif"],
                        "body-lg": ["Inter", "sans-serif"],
                        "body-sm": ["Inter", "sans-serif"],
                        "display-lg": ["Inter", "sans-serif"]
                    },
                    "fontSize": {
                        "headline-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
                        "label-caps": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700" }],
                        "display-lg-mobile": ["28px", { "lineHeight": "34px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "body-lg": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
                        "display-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
                    }
                },
            },
        }
    <\/script>
<style>
        body {
            background-color: #F7F8F7;
            font-family: 'Inter', sans-serif;
            color: #181d18;
            -webkit-font-smoothing: antialiased;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .shadow-soft {
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
        }
        .active-pill {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="flex flex-col min-h-screen">
<!-- Top App Bar -->
<header class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
<div class="flex justify-between items-center w-full px-margin-mobile h-16 max-w-2xl mx-auto">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional headshot of Michael, a young Cameroonian man with a warm smile, wearing a clean white polo shirt. The background is a soft-focus lush green tropical garden in Douala, Cameroon, with natural morning sunlight highlighting his face. The portrait is high-definition, corporate-modern, and reflects a sense of leadership and community involvement." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2OepcfCpaq0YEwu8aH0keX8imctW6q2iS0r3-mDPM66uBwgjZzwuecuVxbjnLJeTz6mmYLwT_Tq3kzJTB4BCS_cxigXdUE21YSnNHE3VeyG4TrGYR91wfmV0m2mp8Irrc6LS_N3q4bNzPaaxCOFqHlWBQcZ0nw59qrnZ2P5gMUekxqEfKkiCgZtMPfHxeeMYfprS8HJ0zn_8VXNDmPOXNodMJh3dNfcnWhpPnqfhP9cBr0mL4PyyodET3Fc-kYMdyfRuC4Y0hkELx"/>
</div>
<div class="flex flex-col">
<span class="text-on-surface-variant font-label-caps text-[10px] uppercase tracking-wider">Good Morning,</span>
<h1 class="font-headline-md text-headline-md font-bold text-primary">EcoLink Cameroon</h1>
</div>
</div>
<button class="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface hover:opacity-80 transition-opacity active:scale-95">
<span class="material-symbols-outlined">notifications</span>
</button>
</div>
</header>
<main class="flex-1 mt-20 mb-24 px-margin-mobile max-w-2xl mx-auto w-full space-y-md">
<!-- Welcome Section -->
<section>
<p class="text-body-lg text-on-surface-variant mb-base">Every action today creates a greener Cameroon tomorrow.</p>
</section>
<!-- Featured Eco Champion Card -->
<section class="relative h-64 rounded-3xl overflow-hidden shadow-lg group">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A group of diverse, young Cameroonian volunteers working together in a sun-drenched coastal field. They are planting indigenous mangrove saplings near Limbe, with the volcanic soil rich and dark under their hands. The lighting is bright and optimistic, emphasizing the vibrant green of the young plants and the cooperative spirit of the community. Cinematic, high-fidelity environmental photography." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkFSXwegbinUOKamEwnfZ_kWCrSspYVrcqUbC_A0ZK3Hscoyf_MM6HjZEDBuRaz7pFFvd_YpPVdEQdBOZZPg9pDrx_Llm2GCl-Ek_unJtDCvCya0HmVa_ZPgBhW3HIXgymrQ_e73JUF3LVRfbBppwnfMRZU1K_CwZ9kowxG2HUYnppXsxYEYcgseDCW5vb6S_QMGIzGI7t54ndD-lyVI7GLhJ-B8AohW2SqvMOC2J3_o3dLi10KEHhzWPS01WtnxysTx1eut4jLBMz')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 right-0 p-md flex flex-col gap-2">
<div class="flex items-center gap-2">
<div class="bg-primary-container text-on-primary-container px-3 py-1 rounded-full flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">stars</span>
<span class="text-[12px] font-bold">Eco Champion</span>
</div>
<span class="text-white text-body-sm font-semibold">Level 12</span>
</div>
<div class="w-full bg-white/30 h-2 rounded-full mt-1">
<div class="bg-secondary-fixed h-full rounded-full w-[82%]" style="box-shadow: 0 0 10px rgba(143, 249, 171, 0.8);"></div>
</div>
<span class="text-white/80 text-[12px] text-right">82% to Level 13</span>
</div>
</section>
<!-- EcoPoints Balance -->
<section class="bg-primary-container rounded-2xl p-md flex justify-between items-center text-on-primary-container shadow-soft">
<div class="flex items-center gap-4">
<div class="w-12 h-12 bg-on-primary-container/20 rounded-xl flex items-center justify-center">
<span class="material-symbols-outlined text-[32px]">eco</span>
</div>
<div class="flex flex-col">
<span class="font-label-caps opacity-80">TOTAL BALANCE</span>
<span class="text-[28px] font-extrabold leading-tight">8,450 <span class="text-[16px] font-medium opacity-90">EcoPoints</span></span>
</div>
</div>
<span class="material-symbols-outlined text-[24px]">chevron_right</span>
</section>
<!-- Impact Metrics Grid -->
<section>
<div class="flex justify-between items-end mb-sm">
<h2 class="font-headline-md text-headline-md font-bold">Environmental Impact</h2>
<button class="text-primary font-bold text-body-sm">See all</button>
</div>
<div class="grid grid-cols-2 gap-sm">
<!-- Trees -->
<div class="bg-white p-sm rounded-2xl shadow-soft flex flex-col gap-2">
<div class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span class="material-symbols-outlined">forest</span>
</div>
<div>
<span class="block text-[20px] font-bold">187</span>
<span class="text-on-surface-variant text-[12px]">Trees Planted</span>
</div>
</div>
<!-- Waste -->
<div class="bg-white p-sm rounded-2xl shadow-soft flex flex-col gap-2">
<div class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span class="material-symbols-outlined">recycling</span>
</div>
<div>
<span class="block text-[20px] font-bold">325 <span class="text-[12px]">kg</span></span>
<span class="text-on-surface-variant text-[12px]">Waste Recycled</span>
</div>
</div>
<!-- Hours -->
<div class="bg-white p-sm rounded-2xl shadow-soft flex flex-col gap-2">
<div class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span class="material-symbols-outlined">schedule</span>
</div>
<div>
<span class="block text-[20px] font-bold">42 <span class="text-[12px]">h</span></span>
<span class="text-on-surface-variant text-[12px]">Volunteer Hours</span>
</div>
</div>
<!-- Water -->
<div class="bg-white p-sm rounded-2xl shadow-soft flex flex-col gap-2">
<div class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span class="material-symbols-outlined">water_drop</span>
</div>
<div>
<span class="block text-[20px] font-bold">4,500 <span class="text-[12px]">L</span></span>
<span class="text-on-surface-variant text-[12px]">Water Saved</span>
</div>
</div>
</div>
</section>
<!-- Active EcoQuest -->
<section>
<div class="flex justify-between items-end mb-sm">
<h2 class="font-headline-md text-headline-md font-bold">Active EcoQuest</h2>
<button class="text-primary font-bold text-body-sm">Details</button>
</div>
<div class="bg-white rounded-3xl p-sm shadow-soft flex items-center gap-4">
<div class="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="Close-up of a small, vibrant green tree seedling being gently held by a pair of hands stained with rich, dark Cameroonian soil. The sunlight is soft and warm, catching the details of the young leaves. High-resolution macro photography with a soft bokeh background of a nursery in Yaoundé." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXaSi3M79UNTkg27GAnZyVvHtqNx9LnjLgXXBnsCcjw5mUod1o-cLzu1XW2WfGww4pgqRDQtgAC9BtobrfbOVnVs-6DVHnjR3tFCTZDYwL-NaY87O4GCghpKvZBdTlQTygQ-TX5fmxRMzsYuXak0PX7-tGjw5cxNG2bb4XfcyRiEVVnfjz9uhZwwXe2s5I1MtaYabi2kVWQQXdGqB0ypUYTI5yd0IW95G9CYO2HfAHNqEGMjsU0L09rd4xh1l07XKlUtJQV7LjmAz5"/>
</div>
<div class="flex-1 flex flex-col gap-1">
<h3 class="font-bold text-body-lg">Plant 5 Trees This Month</h3>
<div class="flex items-center gap-1">
<span class="text-secondary font-bold text-body-sm">+500 EcoPoints</span>
</div>
<div class="flex items-center justify-between mt-1">
<div class="flex-1 h-1.5 bg-surface-container rounded-full mr-4">
<div class="bg-secondary h-full rounded-full w-4/5"></div>
</div>
<span class="text-on-surface-variant text-[11px] font-bold">4 / 5</span>
</div>
</div>
<button class="bg-primary text-on-primary px-4 py-2 rounded-full font-bold text-body-sm active:scale-95 transition-transform">Continue</button>
</div>
</section>
<!-- Upcoming Event -->
<section class="pb-8">
<div class="flex justify-between items-end mb-sm">
<h2 class="font-headline-md text-headline-md font-bold">Upcoming Event</h2>
<button class="text-primary font-bold text-body-sm">View Calendar</button>
</div>
<div class="bg-surface-container rounded-3xl p-md border border-outline-variant/30">
<div class="flex justify-between items-start mb-4">
<div>
<h3 class="text-[20px] font-extrabold text-on-surface leading-tight">Sustainability Workshop</h3>
<p class="text-on-surface-variant text-body-sm">Learn modern eco-friendly living</p>
</div>
<div class="bg-white rounded-xl p-2 flex flex-col items-center justify-center min-w-[50px] shadow-sm">
<span class="text-error font-bold text-[12px]">JUL</span>
<span class="text-[18px] font-extrabold">05</span>
</div>
</div>
<div class="flex items-center gap-4 text-on-surface-variant text-body-sm">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span>Bafoussam, West</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]">group</span>
<span>80 Participants</span>
</div>
</div>
<button class="w-full mt-md bg-white text-primary border border-primary/20 py-3 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all active:scale-[0.98]">
                    Join Workshop
                </button>
</div>
</section>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-xs py-base bg-surface shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] h-20">
<!-- Explore -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">explore</span>
<span class="font-label-caps text-label-caps mt-1">Explore</span>
</a>
<!-- EcoQuest -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">nature_people</span>
<span class="font-label-caps text-label-caps mt-1">EcoQuest</span>
</a>
<!-- Home (Active) -->
<a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 active:scale-90 duration-150 active-pill" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">home</span>
<span class="font-label-caps text-label-caps mt-0.5">Home</span>
</a>
<!-- Rewards -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">workspace_premium</span>
<span class="font-label-caps text-label-caps mt-1">Rewards</span>
</a>
<!-- Profile -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">person</span>
<span class="font-label-caps text-label-caps mt-1">Profile</span>
</a>
</nav>
<script>
        // Micro-interaction: Update progress bar on scroll or interaction if needed
        document.addEventListener('DOMContentLoaded', () => {
            console.log('EcoLink Dashboard Initialized');
            
            // Simple animation for the Eco Champion progress bar on load
            const progressBar = document.querySelector('.bg-secondary-fixed');
            if (progressBar) {
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.transition = 'width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    progressBar.style.width = '82%';
                }, 300);
            }
        });
    <\/script>
</body></html>`;function hg(s){const f=new DOMParser().parseFromString(s,"text/html");f.querySelectorAll("nav, script, style").forEach(x=>x.remove());const o=f.querySelector("header"),d=f.querySelector("main"),p=f.querySelector("button.fixed.right-6"),v=f.querySelector(".fixed.bottom-20");return[o==null?void 0:o.outerHTML,d==null?void 0:d.outerHTML,p==null?void 0:p.outerHTML,v==null?void 0:v.outerHTML].filter(Boolean).join(`
`)}function bg(s){s.querySelectorAll('button, a[href="#"]').forEach(c=>{c.tagName==="A"&&c.setAttribute("role","button"),c.classList.add("cursor-pointer")})}function qn({html:s,pageId:c,resolveNav:f,onLike:o,onShare:d}){const p=Xt(),v=C.useRef(null),_=C.useMemo(()=>hg(s),[s]);return C.useEffect(()=>{const x=v.current;if(!x)return;bg(x);const b=O=>{const B=O.target.closest("button, a, [role=button], .cursor-pointer");if(!B||!x.contains(B))return;const q=f(B,x);if(q){if(O.preventDefault(),O.stopPropagation(),q==="share"){d==null||d();return}if(q==="like"){o==null||o();return}if(q==="back"){p(-1);return}p(q)}};return x.addEventListener("click",b),()=>x.removeEventListener("click",b)},[p,f,o,d,c]),m.jsx("div",{ref:v,className:"html-page-content",dangerouslySetInnerHTML:{__html:_}})}function Te(s,...c){var o;const f=((o=s.textContent)==null?void 0:o.toLowerCase())??"";return c.some(d=>f.includes(d.toLowerCase()))}function ke(s,c){var o;const f=s.querySelector(".material-symbols-outlined")??(s.classList.contains("material-symbols-outlined")?s:null);return((o=f==null?void 0:f.textContent)==null?void 0:o.trim())===c}const yg=s=>{var c,f,o,d,p;return ke(s,"notifications")?w.notifications:(c=s.closest("header"))!=null&&c.contains(s)&&((f=s.closest(".rounded-full"))!=null&&f.querySelector("img"))?w.profile:Te(s,"see all")&&((p=(d=(o=s.closest("section"))==null?void 0:o.querySelector("h2"))==null?void 0:d.textContent)!=null&&p.includes("Environmental Impact"))?w.myImpact:Te(s,"details")||Te(s,"continue")?w.ecoquest:Te(s,"view calendar")?w.explore:Te(s,"join workshop")?w.opportunityDetail:s.closest(".bg-primary-container.rounded-2xl")||Te(s,"ecopoints")?w.rewards:s.closest("section.relative.h-64")||s.closest(".bg-white.rounded-3xl")&&Te(s,"continue")?w.ecoquest:null},gg=s=>{var c;return ke(s,"notifications")?w.notifications:ke(s,"search")?w.searchResults:Te(s,"community")?w.community:Te(s,"join campaign","join")||(c=s.closest(".flex.items-center.gap-4"))!=null&&c.querySelector("h4")?w.opportunityDetail:Te(s,"see all")?w.explore:s.closest(".aspect-\\[16\\/10\\]")||s.closest('[class*="aspect-"]')?w.opportunityDetail:null},vg=s=>ke(s,"notifications")?w.notifications:ke(s,"search")?w.searchResults:Te(s,"opportunities")?w.explore:ke(s,"edit")?w.createPost:ke(s,"share")?"share":ke(s,"favorite")?"like":ke(s,"chat_bubble")?w.postDetail:ke(s,"bookmark")?w.savedArticles:s.closest("article")?ke(s,"favorite")||ke(s,"chat_bubble")||ke(s,"share")||ke(s,"bookmark")?null:w.postDetail:s.closest(".w-10.h-10.rounded-full")?w.publicProfile:null,xg=s=>ke(s,"arrow_back")?"back":ke(s,"share")?"share":Te(s,"follow")?w.publicProfile:ke(s,"favorite")?"like":Te(s,"reply")?w.commentThread:s.closest(".w-12.h-12.rounded-full")?w.publicProfile:Te(s,"#")?w.community:null,Sg=s=>ke(s,"notifications")?w.notifications:Te(s,"view all")?w.ecoquest:Te(s,"continue","start")||s.closest(".group.bg-surface-container-lowest")?w.challengeDetail:s.closest(".bg-gradient-to-r.from-primary")?w.rewards:null,wg=s=>ke(s,"notifications")?w.notifications:s.closest(".w-8.h-8.rounded-full.overflow-hidden")?w.profile:Te(s,"view all")?w.analytics:Te(s,"view rewards")?w.rewards:s.closest(".aspect-square")?w.badgeDetail:null,Eg=s=>{var f,o;if(ke(s,"arrow_back"))return"back";const c=s.closest(".rounded-xl");if(c){const d=((o=(f=c.querySelector("h3"))==null?void 0:f.textContent)==null?void 0:o.toLowerCase())??"";if(d.includes("reward"))return w.rewards;if(d.includes("event")||d.includes("reminder"))return w.opportunityDetail;if(d.includes("certificate"))return w.certificate;if(d.includes("achievement"))return w.achievementDetail;if(d.includes("ngo"))return w.challengeDetail}return Te(s,"unread","all","mentions","activity"),null},Ag=s=>{var c,f,o,d,p,v;return ke(s,"notifications")?w.notifications:s.closest(".w-8.h-8.rounded-full")||Te(s,"edit profile")?w.editProfile:Te(s,"account settings")?w.preferences:Te(s,"privacy")?w.privacySettings:Te(s,"notification settings")?w.notificationSettings:Te(s,"help")?w.helpCentre:Te(s,"view all")&&((o=(f=(c=s.closest("section"))==null?void 0:c.querySelector("h3"))==null?void 0:f.textContent)!=null&&o.includes("Badges"))?w.badgeDetail:Te(s,"view all")&&((v=(p=(d=s.closest("section"))==null?void 0:d.querySelector("h3"))==null?void 0:p.textContent)!=null&&v.includes("Certificates"))?w.certificate:Te(s,"logout")?w.auth:s.closest(".flex-shrink-0.w-48")?w.certificate:null};function Cg(){return m.jsx(qn,{html:pg,pageId:"home_dashboard",resolveNav:yg})}const jg=`<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>EcoLink Cameroon - Explore Opportunities</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed-variant": "#7a2c38",
                        "secondary": "#006d36",
                        "on-background": "#181d18",
                        "secondary-fixed-dim": "#73dc91",
                        "surface-container": "#ebefe8",
                        "on-tertiary-container": "#ffcace",
                        "inverse-on-surface": "#eef2eb",
                        "outline-variant": "#bfc9be",
                        "surface-container-highest": "#e0e4dd",
                        "on-secondary": "#ffffff",
                        "on-secondary-container": "#007239",
                        "on-surface": "#181d18",
                        "secondary-container": "#8cf6a8",
                        "primary-fixed-dim": "#87d89c",
                        "tertiary-fixed-dim": "#ffb2b9",
                        "surface-container-lowest": "#ffffff",
                        "on-primary": "#ffffff",
                        "outline": "#6f7a70",
                        "surface-variant": "#e0e4dd",
                        "on-primary-fixed-variant": "#005229",
                        "on-surface-variant": "#3f4940",
                        "error-container": "#ffdad6",
                        "on-primary-fixed": "#00210d",
                        "inverse-primary": "#87d89c",
                        "tertiary-fixed": "#ffdadc",
                        "primary-container": "#146b3a",
                        "on-error": "#ffffff",
                        "tertiary": "#792b38",
                        "background": "#f7fbf3",
                        "surface-tint": "#166c3b",
                        "on-error-container": "#93000a",
                        "primary-fixed": "#a2f5b6",
                        "surface-dim": "#d7dbd4",
                        "surface-bright": "#f7fbf3",
                        "inverse-surface": "#2d322d",
                        "primary": "#005128",
                        "secondary-fixed": "#8ff9ab",
                        "surface-container-high": "#e5e9e2",
                        "error": "#ba1a1a",
                        "surface-container-low": "#f1f5ed",
                        "on-primary-container": "#97e9ab",
                        "on-secondary-fixed-variant": "#005227",
                        "on-tertiary-fixed": "#400010",
                        "tertiary-container": "#97424e",
                        "surface": "#f7fbf3",
                        "on-secondary-fixed": "#00210c",
                        "on-tertiary": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "xs": "8px",
                        "gutter-mobile": "16px",
                        "xl": "48px",
                        "md": "24px",
                        "margin-mobile": "20px",
                        "sm": "16px",
                        "lg": "32px",
                        "base": "4px"
                    },
                    "fontFamily": {
                        "headline-md": ["Inter"],
                        "label-caps": ["Inter"],
                        "display-lg-mobile": ["Inter"],
                        "body-lg": ["Inter"],
                        "body-sm": ["Inter"],
                        "display-lg": ["Inter"]
                    },
                    "fontSize": {
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                        "display-lg-mobile": ["28px", {"lineHeight": "34px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "display-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
                    }
                },
            },
        }
    <\/script>
<style>
        body { font-family: 'Inter', sans-serif; background-color: #f7fbf3; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background min-h-screen pb-24">
<!-- Top Navigation Bar -->
<header class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
<div class="flex justify-between items-center w-full px-margin-mobile h-16">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a smiling Cameroonian man named Michael, wearing a crisp white linen shirt. The background is a soft-focus lush green garden in Douala, reflecting a modern, eco-conscious professional lifestyle. The lighting is bright and warm, emphasizing high-fidelity corporate minimalism with a verdant color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-eahqA6nP-BzewWF5yeLIBbBObTrbwmDvZ6upYPot14CeHnK4m4CA3tHyKICUBN_KdlYemFwjxSdg-vEzzkRmGWOQ-dwddO5fqTY5PpHXM6BYrabhXPP0ny_aBr0mSPiXZnHeqpkzDIlczas3JHO2Mgz5FpF0nbMVdUkMkJEFgNtmQ51RUYztc-plXgF1WLsZyxpnopw_1k2xAPWrAkeKdWnncm-KY2TbBrra3FfoCV3L1IlBHuU91GuPywELq9-MD9eK5PLjL6I7"/>
</div>
<h1 class="font-headline-md text-headline-md font-bold text-primary">EcoLink Cameroon</h1>
</div>
<div class="flex gap-4">
<button class="material-symbols-outlined text-on-surface-variant hover:opacity-80 transition-transform active:scale-95">search</button>
<button class="material-symbols-outlined text-on-surface-variant hover:opacity-80 transition-transform active:scale-95">notifications</button>
</div>
</div>
</header>
<main class="pt-20 px-margin-mobile">
<!-- Segmented Control -->
<div class="bg-surface-container-high rounded-full p-1 flex mt-4 mb-6">
<button class="flex-1 py-2 rounded-full font-label-caps text-label-caps bg-primary text-on-primary transition-all shadow-sm">
                Opportunities
            </button>
<button class="flex-1 py-2 rounded-full font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-variant/50 transition-all">
                Community
            </button>
</div>
<!-- Category Chips -->
<div class="flex gap-2 overflow-x-auto hide-scrollbar mb-6 -mx-margin-mobile px-margin-mobile">
<button class="px-5 py-2 rounded-full bg-primary-container text-on-primary-container font-label-caps text-label-caps whitespace-nowrap shadow-sm">All</button>
<button class="px-5 py-2 rounded-full bg-white text-on-surface-variant font-label-caps text-label-caps border border-outline-variant whitespace-nowrap hover:bg-surface-container-low transition-colors">Tree Planting</button>
<button class="px-5 py-2 rounded-full bg-white text-on-surface-variant font-label-caps text-label-caps border border-outline-variant whitespace-nowrap hover:bg-surface-container-low transition-colors">Cleanups</button>
<button class="px-5 py-2 rounded-full bg-white text-on-surface-variant font-label-caps text-label-caps border border-outline-variant whitespace-nowrap hover:bg-surface-container-low transition-colors">Workshops</button>
<button class="px-5 py-2 rounded-full bg-white text-on-surface-variant font-label-caps text-label-caps border border-outline-variant whitespace-nowrap hover:bg-surface-container-low transition-colors">Recycling</button>
</div>
<!-- Featured Campaign Card -->
<section class="mb-8">
<div class="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden shadow-lg group">
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A wide-angle landscape photograph of a community river cleanup project in a lush Cameroonian rainforest setting. Numerous young volunteers in green 'EcoLink' vests are working together along a clear riverbed. The morning sunlight filters through heavy jungle foliage, creating a serene, purposeful atmosphere. High-resolution photography with rich verdant tones and high-fidelity detail." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCB6BOUTIzCovPEBq4cP9ol07OPwC4WP4fefesQI4gXQNESXMU8VU8NcEhtmJPELDmYFDHLsVhBdLX1InyVPVfX38jbnoZIFv9KOGnRRJGPbtQ4wHefXXoe3TITAbkX4Uz3wjPq6EgkBoppJYkL9ZB-d_67-_tZt1q7upvGHgXESnl-WeOFXR_U77NZJKxrgCFFo6znTNj8YJRtYBmXc_0LTcDAcgRgWuBObP7-X8Jvha-hbnSAM-mpJ0yqLCLL0Buj1kkF22nPHnZy')"></div>
<div class="absolute bottom-0 left-0 right-0 p-6 z-20">
<span class="inline-block px-3 py-1 rounded-md bg-secondary-container text-on-secondary-container font-label-caps text-[10px] mb-3 uppercase tracking-wider">Featured</span>
<h2 class="font-display-lg-mobile text-display-lg-mobile text-white mb-1">Green Cameroon 2030</h2>
<p class="text-white/80 font-body-sm text-body-sm mb-4">A nationwide initiative aiming to restore local river ecosystems.</p>
<div class="flex items-center justify-between">
<div class="flex items-center text-white/90 gap-2">
<span class="material-symbols-outlined text-[18px]">group</span>
<span class="font-label-caps text-label-caps">2.4K Participants</span>
</div>
<button class="bg-white text-primary px-8 py-2.5 rounded-full font-label-caps text-label-caps shadow-lg active:scale-95 transition-transform">
                            Join Campaign
                        </button>
</div>
</div>
</div>
</section>
<!-- Upcoming Opportunities List -->
<section>
<div class="flex justify-between items-center mb-4">
<h3 class="font-headline-md text-headline-md text-on-surface">Upcoming Opportunities</h3>
<button class="text-primary font-label-caps text-label-caps hover:underline">See all</button>
</div>
<div class="space-y-4">
<!-- Opportunity Item 1 -->
<div class="bg-white rounded-[20px] p-4 flex items-center gap-4 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container-highest/50">
<div class="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="Close-up shot of a pristine beach in Limbe, Cameroon, with volunteers picking up plastic waste in the background. The focus is on a single green sprout emerging from the sand. Bright, tropical daylight with vibrant blues and deep greens, consistent with a clean, modern environmental brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOW2brlJzS2Sp9GYu_4xP1_4H_vvJ2CYH4fqHbwHN7WZ8GDquqIRYdmOkupebKyJ58rUlk2zTAzhw_5koJAcNnfBMQgRzdYroJ0VvChuyWInl6CBx7ftvoI6pCUXfl3GrmlYwUpHAVAMqeyk-LDMOcRf_n-jMDjQog2KmzKccmuwN7cKFXCuPiJRwroLommRVgp-XrzrlF68ntthWwa2bmZuChqHhPCiIXSFIKArGSaH34BOvZAshyokkKaV4EIa9C2x4ftbtNWsVq"/>
</div>
<div class="flex-1 min-w-0">
<h4 class="font-label-caps text-[15px] text-on-surface truncate">Limbe Coastal Cleanup</h4>
<p class="text-on-surface-variant font-body-sm text-body-sm mb-1">Limbe, South West</p>
<div class="flex items-center gap-3 text-outline text-[11px] font-label-caps">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">calendar_today</span>June 29, 2025</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">group</span>150 Participants</span>
</div>
</div>
<button class="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-caps text-label-caps active:scale-95 transition-transform">Join</button>
</div>
<!-- Opportunity Item 2 -->
<div class="bg-white rounded-[20px] p-4 flex items-center gap-4 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container-highest/50">
<div class="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="A systematic recycling center layout in Yaoundé, showcasing organized bins for different materials. The image features a clean, institutional look with professional lighting and a verdant Cameroon-themed aesthetic. No people, focus on the order and purpose of the facility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhfkaJPjBZ3gMveFJpLi8xSe3c0LMhPELlNsjBpjEUnZaFe4tLCZleC1_8EfH-GPnmc_ZFGxAIjyJvi2D3NQoLAB7hWnPj260H7vU4b5GaXOZt2cPly5do3Y12-SCfvdtOBfbzMV4ZBWg0eYu1un8gn29Q5dcqW8KOl-abqGmJfvCKi9YVdRKsPcIWDoU-XMM3Wc0qFoVJjDyVARVXxDJrH9jfBGfPXp5ktgJ2o8On0kzU5sqLYOUNqwpYcZ7lVll7t0aYerYjO4G3"/>
</div>
<div class="flex-1 min-w-0">
<h4 class="font-label-caps text-[15px] text-on-surface truncate">Recycling Drive Yaoundé</h4>
<p class="text-on-surface-variant font-body-sm text-body-sm mb-1">Yaoundé, Centre</p>
<div class="flex items-center gap-3 text-outline text-[11px] font-label-caps">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">calendar_today</span>July 2, 2025</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">group</span>200 Participants</span>
</div>
</div>
<button class="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-caps text-label-caps active:scale-95 transition-transform">Join</button>
</div>
<!-- Opportunity Item 3 -->
<div class="bg-white rounded-[20px] p-4 flex items-center gap-4 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container-highest/50">
<div class="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="An indoor classroom workshop setting with a diverse group of Cameroonians listening to a lecture about sustainability. The room is modern, brightly lit by natural light, and decorated with indoor plants. The mood is one of serious intellectual engagement and communal purpose." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlaVChbdqPGFOt-W6WIX3sD5szLTIlTGZ2YYc0dIB-3-OIgoueD7BHikkLOAnFh1TQm_jAW-I-yNMi4l0YtwfO1-zNAIIF5UYteZK_5Ron3mnIa-K0BHelJrYCbmjuKRhQebQG-LOFZFYCf1eWOyiHQ3U2cBwiVqK7ryBQY-e5TZ--8d35Kq_utJOlbb198dizoMPAvHzkSb2qMotR-uSvfrVu2T0kFcXSAQH-T_1BUe9XyduVhedubV2hW7itTLAO11qO8ZRFx9wG"/>
</div>
<div class="flex-1 min-w-0">
<h4 class="font-label-caps text-[15px] text-on-surface truncate">Sustainability Workshop</h4>
<p class="text-on-surface-variant font-body-sm text-body-sm mb-1">Bafoussam, West</p>
<div class="flex items-center gap-3 text-outline text-[11px] font-label-caps">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">calendar_today</span>July 5, 2025</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">group</span>80 Participants</span>
</div>
</div>
<button class="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-caps text-label-caps active:scale-95 transition-transform">Join</button>
</div>
</div>
</section>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-xs py-base bg-surface shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] h-20">
<!-- Explore (Active) -->
<a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 active:scale-90 duration-150 transition-all" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">explore</span>
<span class="font-label-caps text-[10px] mt-0.5">Explore</span>
</a>
<!-- EcoQuest -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">nature_people</span>
<span class="font-label-caps text-[10px] mt-0.5">EcoQuest</span>
</a>
<!-- Home -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">home</span>
<span class="font-label-caps text-[10px] mt-0.5">Home</span>
</a>
<!-- Rewards -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">workspace_premium</span>
<span class="font-label-caps text-[10px] mt-0.5">Rewards</span>
</a>
<!-- Profile -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">person</span>
<span class="font-label-caps text-[10px] mt-0.5">Profile</span>
</a>
</nav>
<script>
        // Simple scroll behavior for header
        let lastScroll = 0;
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 50) {
                header.classList.add('shadow-sm');
                header.classList.remove('bg-background/80');
                header.classList.add('bg-background');
            } else {
                header.classList.remove('shadow-sm');
                header.classList.add('bg-background/80');
                header.classList.remove('bg-background');
            }
            lastScroll = currentScroll;
        });

        // Micro-interactions for buttons
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', function(e) {
                let ripple = document.createElement('span');
                ripple.classList.add('ripple');
                this.appendChild(ripple);
                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                setTimeout(() => { ripple.remove(); }, 600);
            });
        });
    <\/script>
</body></html>`;function Tg(){const{setSelected:s}=it(),c=(f,o)=>{const d=gg(f);return d===w.opportunityDetail&&s({opportunityId:"opp-1"}),d};return m.jsx(qn,{html:jg,pageId:"explore_opportunities",resolveNav:c})}const _g=`<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed-variant": "#7a2c38",
                        "secondary": "#006d36",
                        "on-background": "#181d18",
                        "secondary-fixed-dim": "#73dc91",
                        "surface-container": "#ebefe8",
                        "on-tertiary-container": "#ffcace",
                        "inverse-on-surface": "#eef2eb",
                        "outline-variant": "#bfc9be",
                        "surface-container-highest": "#e0e4dd",
                        "on-secondary": "#ffffff",
                        "on-secondary-container": "#007239",
                        "on-surface": "#181d18",
                        "secondary-container": "#8cf6a8",
                        "primary-fixed-dim": "#87d89c",
                        "tertiary-fixed-dim": "#ffb2b9",
                        "surface-container-lowest": "#ffffff",
                        "on-primary": "#ffffff",
                        "outline": "#6f7a70",
                        "surface-variant": "#e0e4dd",
                        "on-primary-fixed-variant": "#005229",
                        "on-surface-variant": "#3f4940",
                        "error-container": "#ffdad6",
                        "on-primary-fixed": "#00210d",
                        "inverse-primary": "#87d89c",
                        "tertiary-fixed": "#ffdadc",
                        "primary-container": "#146b3a",
                        "on-error": "#ffffff",
                        "tertiary": "#792b38",
                        "background": "#f7fbf3",
                        "surface-tint": "#166c3b",
                        "on-error-container": "#93000a",
                        "primary-fixed": "#a2f5b6",
                        "surface-dim": "#d7dbd4",
                        "surface-bright": "#f7fbf3",
                        "inverse-surface": "#2d322d",
                        "primary": "#005128",
                        "secondary-fixed": "#8ff9ab",
                        "surface-container-high": "#e5e9e2",
                        "error": "#ba1a1a",
                        "surface-container-low": "#f1f5ed",
                        "on-primary-container": "#97e9ab",
                        "on-secondary-fixed-variant": "#005227",
                        "on-tertiary-fixed": "#400010",
                        "tertiary-container": "#97424e",
                        "surface": "#f7fbf3",
                        "on-secondary-fixed": "#00210c",
                        "on-tertiary": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "16px",
                        "3xl": "24px",
                        "full": "9999px"
                    },
                    "spacing": {
                        "xs": "8px",
                        "gutter-mobile": "16px",
                        "xl": "48px",
                        "md": "24px",
                        "margin-mobile": "20px",
                        "sm": "16px",
                        "lg": "32px",
                        "base": "4px"
                    },
                    "fontFamily": {
                        "headline-md": ["Inter"],
                        "label-caps": ["Inter"],
                        "display-lg-mobile": ["Inter"],
                        "body-lg": ["Inter"],
                        "body-sm": ["Inter"],
                        "display-lg": ["Inter"]
                    },
                    "fontSize": {
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                        "display-lg-mobile": ["28px", {"lineHeight": "34px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "display-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
                    }
                },
            },
        }
    <\/script>
<style>
        body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); }
        .progress-ring-circle { transition: stroke-dashoffset 0.35s; transform: rotate(-90deg); transform-origin: 50% 50%; }
        .custom-shadow { shadow-[0px_4px_20px_rgba(0,0,0,0.05)] }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background min-h-screen pb-24">
<!-- Top Navigation Bar -->
<header class="fixed top-0 w-full z-50 bg-background flex justify-between items-center px-margin-mobile h-16">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed-dim">
<img class="w-full h-full object-cover" data-alt="A professional close-up headshot of Michael, a young Cameroonian professional with a warm, confident smile. He is set against a lush, soft-focus background of tropical greenery in Cameroon, symbolizing his commitment to the environment. The lighting is bright and natural, reflecting a high-end light-mode aesthetic with crisp details." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnOkIVv_TZthf1wnw3QdEL0KJVXQioSiuhCDWURwYOvs0C4LnjeCtu5psukCrRcolQaXsKf9Wye45eYgqTHHvZ0-VBqOEQWpgEd3jg_NOewW1mIfYfqAIB18Iq-0Kt99oC-0bJhBP9uBckP5fyG0J-F9CRC_dpoNfshBHC5lt78uEXfFA4jQRtMkDGL50y55N53-e3pX7UqwJHAjcoKRVEwhpe-lebSk5ij5KgE2uwPBmAdeb9Fy_hgC7UPzlekDZs9yD4crM1KBKA"/>
</div>
<h1 class="font-headline-md text-headline-md font-bold text-primary">EcoLink Cameroon</h1>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-1 bg-surface-container-high px-3 py-1 rounded-full">
<span class="material-symbols-outlined text-orange-500 text-lg" style="font-variation-settings: 'FILL' 1;">local_fire_department</span>
<span class="text-label-caps font-bold text-on-surface">12</span>
</div>
<button class="material-symbols-outlined text-primary hover:opacity-80 active:scale-95 transition-transform" data-icon="notifications">notifications</button>
</div>
</header>
<main class="pt-20 px-margin-mobile space-y-md">
<!-- Header Section -->
<section class="flex items-center justify-between">
<div>
<h2 class="font-display-lg-mobile text-display-lg-mobile text-on-surface">EcoQuest</h2>
<p class="font-body-sm text-body-sm text-on-surface-variant">Gamify your green footprint</p>
</div>
<div class="p-2 rounded-2xl bg-primary-container text-on-primary-container">
<span class="material-symbols-outlined text-[32px]" data-icon="nature_people">nature_people</span>
</div>
</section>
<!-- Weekly Progress Card (Duolingo Style) -->
<section class="bg-surface-container-lowest rounded-3xl p-md shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-surface-container-highest">
<div class="flex items-center justify-between mb-sm">
<div>
<h3 class="font-headline-md text-headline-md">Weekly Progress</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Leveling up to Eco Hero</p>
</div>
<div class="relative w-20 h-20">
<svg class="w-full h-full">
<circle class="text-surface-container-high" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" stroke-width="8"></circle>
<circle class="text-secondary progress-ring-circle" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" stroke-dasharray="213.6" stroke-dashoffset="56" stroke-linecap="round" stroke-width="8"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-label-caps font-bold text-secondary">74%</span>
</div>
</div>
</div>
<div class="flex items-end justify-between bg-surface-container-low p-sm rounded-2xl">
<div class="space-y-xs">
<div class="flex items-center gap-2">
<span class="font-display-lg-mobile text-display-lg-mobile text-primary">14</span>
<span class="font-body-lg text-body-lg text-on-surface-variant">/ 19</span>
</div>
<p class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Challenges Completed</p>
</div>
<div class="w-20">
<img class="w-full h-auto" data-alt="A small, vibrant green sapling sprouting from dark, rich Cameroonian soil. The image is a crisp, close-up photograph with high resolution, showing dewdrops on the leaves. The lighting is soft and morning-like, set against a pristine, bright background consistent with a premium corporate environmental app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASCpCCyoHfGRr4oOabsZJgcBV2VvQgHXYy8UXMEgfU7gNfheUlKIyOSoYSKniyxLjRfJrAcaQxXPkEsOqn8pyYBIsqP3nIL4DWBBfeaukWExKyly5V1tG7PKJONAIZLJ5Qn-w_9S_elVkItZv-zFYenNtzBB7CYNqtzQyvfwxqQvpJoba4_CI9DCky3R7EoyujFeg5N7alDHl5K6wFi6zIn-VoDujYVr1VykIMuqv1aFbufqVilQWpyEsOIvEMuxYk5uyPUMOVMA4c"/>
</div>
</div>
</section>
<!-- Active Challenges List -->
<section class="space-y-sm">
<div class="flex justify-between items-center px-xs">
<h4 class="font-headline-md text-headline-md">Active Challenges</h4>
<button class="text-primary font-label-caps hover:underline">View All</button>
</div>
<!-- Challenge Card 1 -->
<div class="group bg-surface-container-lowest rounded-3xl p-sm border border-surface-container-highest shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex gap-4 transition-all hover:border-primary/30">
<div class="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="A wide-angle, cinematic photograph of local volunteers planting native trees in the Sanaga river valley, Cameroon. The scene is bright and hopeful, with sunlight filtering through a hazy tropical sky. The colors are dominated by rich forest greens and warm earth tones, maintaining a professional and inspiring documentary style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5qF4pd7OUQma5rwaRc9l3VfcgZ5joP42k59MgwaYcoguiDdCXi7XTskmlDV_D2X6JExPDQu5BYKtPNoWTh7ZzaIwrbKGyheHumPB--1hMnRYVH5Vm1FySOLgjBqc1qemp_bbRL8851Jrv5gTkiLQAPSUcfNiKUwQTl3SFeh_TxEphCXEI51Ftz1NrimKUuf9c-QcFdOcSME-p-HCCHDXsEWF0hZbJ3MLVAfbbxGzxCjvhWOctlfeYLOwRW7_F4mk7hdxQfXtbjM7E"/>
</div>
<div class="flex-grow flex flex-col justify-between py-1">
<div class="flex justify-between items-start">
<div>
<h5 class="font-body-lg font-bold text-on-surface">Plant a Tree</h5>
<p class="text-body-sm text-on-surface-variant">Plant and nurture a tree</p>
</div>
<span class="text-secondary font-bold text-label-caps">+250 pts</span>
</div>
<div class="space-y-xs">
<div class="flex justify-between items-center text-label-caps text-on-surface-variant">
<span>3 / 5</span>
<button class="bg-primary text-on-primary px-4 py-1 rounded-full font-bold text-xs hover:bg-primary-container transition-colors">Continue</button>
</div>
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div class="bg-secondary h-full w-[60%] rounded-full"></div>
</div>
</div>
</div>
</div>
<!-- Challenge Card 2 (Completed) -->
<div class="group bg-surface-container-low opacity-75 rounded-3xl p-sm border border-transparent flex gap-4">
<div class="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 grayscale">
<img class="w-full h-full object-cover" data-alt="A minimalist and aesthetic photograph of a reusable bamboo coffee cup and a cotton tote bag placed on a clean white wooden surface. The composition is bright and airy, symbolizing a plastic-free lifestyle in a modern Cameroonian context. High-key lighting and clean lines evoke a premium, eco-conscious professional brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqYKkwLTpMltoJkSrjZwN3t1BThqR2FNIBwMi3SACYOrTwQ8KSLNUAoBFZyzbfCE_L03fXvmXeu9vLibo_qNxZe0jmZRrgbuM5-ILkGXoUQVr5q4Z1dnI3jHwsEdaKG-YPp_DwUQnewSAMSaSLi-AzbBku5GK9uLWD6xKRfNZHzB4XYVY-XRBqdksp7VJrRguMpL8yPpXluj3-BOUMMl6_F1-4R3o0ySKq8KAoWhnf2JrF6ql0pFTMeaWF4UHb1-ZL2e7Mk8nU_hQU"/>
</div>
<div class="flex-grow flex flex-col justify-between py-1">
<div class="flex justify-between items-start">
<div>
<h5 class="font-body-lg font-bold text-on-surface">Plastic-Free Day</h5>
<p class="text-body-sm text-on-surface-variant">Avoid single-use plastic</p>
</div>
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
</div>
<div class="flex items-center justify-between">
<span class="text-label-caps font-bold text-secondary">Completed</span>
<span class="text-secondary font-bold text-label-caps">+100 pts</span>
</div>
</div>
</div>
<!-- Challenge Card 3 -->
<div class="group bg-surface-container-lowest rounded-3xl p-sm border border-surface-container-highest shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex gap-4 transition-all hover:border-primary/30">
<div class="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="An action-oriented photograph of youth in Douala participating in a neighborhood cleanup project. They are wearing green 'EcoLink' vests, smiling, and working together to collect recyclables. The lighting is crisp and midday, capturing the vibrant urban energy of Cameroon paired with positive civic action." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_VQ0DFu-vEp8pge_DiDwD2ptqUWn4l_MM07JhzRhVrlm6lohSAojfB-YC-RrGhej9CEGSza-U3nEjyuuYj3g74oHd7MEv6jdVC5uBjVHVfeIYGjkNn2JV9PG37D2k4ur3O_uJwy_aHAkuCcr1DkSChXaz9zQNmOOagLAssBmc2ntnHhTP-rFq1LHfWME5FIgsmknSTCOy38LPv-LvFYmuluKl2oUzssnm2uU6ZEPxUEfqHQF0xJoTXxSNuZddu_Vb2-fHDbGlgOmy"/>
</div>
<div class="flex-grow flex flex-col justify-between py-1">
<div class="flex justify-between items-start">
<div>
<h5 class="font-body-lg font-bold text-on-surface">Clean Neighborhood</h5>
<p class="text-body-sm text-on-surface-variant">Collect and dispose waste</p>
</div>
<span class="text-secondary font-bold text-label-caps">+300 pts</span>
</div>
<div class="space-y-xs">
<div class="flex justify-between items-center text-label-caps text-on-surface-variant">
<span>0 / 1</span>
<button class="border-2 border-primary text-primary px-4 py-1 rounded-full font-bold text-xs hover:bg-primary-container hover:text-on-primary-container transition-colors">Start</button>
</div>
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div class="bg-secondary h-full w-0 rounded-full"></div>
</div>
</div>
</div>
</div>
<!-- Streak Reward Banner -->
<div class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-md text-on-primary relative overflow-hidden">
<div class="relative z-10 space-y-xs">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">local_fire_department</span>
<h5 class="font-headline-md text-headline-md">12-Day Eco Streak 🔥</h5>
</div>
<p class="font-body-sm text-body-sm text-primary-fixed">Keep it up! You're making a difference.</p>
</div>
<div class="absolute -right-4 -bottom-4 opacity-20">
<span class="material-symbols-outlined text-[120px]">eco</span>
</div>
</div>
</section>
</main>
<!-- Bottom Navigation Bar (Predicted) -->
<nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-xs py-base bg-surface shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] h-20">
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined" data-icon="explore">explore</span>
<span class="font-label-caps text-label-caps mt-1">Explore</span>
</a>
<a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined" data-icon="nature_people" style="font-variation-settings: 'FILL' 1;">nature_people</span>
<span class="font-label-caps text-label-caps mt-1">EcoQuest</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="font-label-caps text-label-caps mt-1">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined" data-icon="workspace_premium">workspace_premium</span>
<span class="font-label-caps text-label-caps mt-1">Rewards</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-label-caps text-label-caps mt-1">Profile</span>
</a>
</nav>
<script>
        // Simple micro-interaction for the progress circle
        window.addEventListener('load', () => {
            const circle = document.querySelector('.progress-ring-circle');
            const radius = circle.r.baseVal.value;
            const circumference = radius * 2 * Math.PI;
            
            circle.style.strokeDasharray = \`\${circumference} \${circumference}\`;
            const offset = circumference - (74 / 100 * circumference);
            circle.style.strokeDashoffset = offset;
        });
    <\/script>
</body></html>`;function zg(){const{setSelected:s}=it(),c=(f,o)=>{const d=Sg(f);return d===w.challengeDetail&&s({challengeId:"challenge-1"}),d};return m.jsx(qn,{html:_g,pageId:"ecoquest_challenges",resolveNav:c})}const Rg=[{id:"environmental-guides",title:"Environmental Guides",icon:"menu_book"},{id:"articles",title:"Articles",icon:"article"},{id:"diy-projects",title:"DIY Projects",icon:"construction"},{id:"tips-tricks",title:"Tips & Tricks",icon:"lightbulb"},{id:"tutorials",title:"Step-by-Step Tutorials",icon:"school"},{id:"do-you-know",title:"Do You Know?",icon:"quiz"},{id:"climate-facts",title:"Climate Facts",icon:"thermostat"},{id:"recycling-guides",title:"Recycling Guides",icon:"recycling"},{id:"waste-management",title:"Waste Management",icon:"delete"},{id:"plastic-reduction",title:"Plastic Reduction",icon:"water_drop"},{id:"water-conservation",title:"Water Conservation",icon:"waves"},{id:"tree-planting",title:"Tree Planting",icon:"forest"},{id:"biodiversity",title:"Biodiversity",icon:"pets"},{id:"renewable-energy",title:"Renewable Energy",icon:"solar_power"}];function Og(){const s=Xt(),{setSelected:c,setSearchQuery:f}=it();return m.jsxs("div",{className:"min-h-screen bg-background pb-4",children:[m.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md",children:m.jsxs("div",{className:"flex justify-between items-center w-full px-margin-mobile h-16 max-w-2xl mx-auto",children:[m.jsx("h1",{className:"font-headline-md text-headline-md font-bold text-primary",children:"Learn & Grow"}),m.jsxs("div",{className:"flex gap-4",children:[m.jsx("button",{type:"button",onClick:()=>s(w.searchResults),className:"active:scale-95 transition-transform",children:m.jsx(lt,{name:"search",className:"text-on-surface-variant"})}),m.jsx("button",{type:"button",onClick:()=>s(w.notifications),className:"active:scale-95 transition-transform",children:m.jsx(lt,{name:"notifications",className:"text-on-surface-variant"})})]})]})}),m.jsxs("main",{className:"pt-20 px-margin-mobile max-w-2xl mx-auto space-y-md",children:[m.jsx("p",{className:"text-body-lg text-on-surface-variant",children:"Expand your environmental knowledge with curated content."}),m.jsxs("div",{className:"relative",children:[m.jsx("input",{type:"search",placeholder:"Search articles, guides, tutorials...",className:"w-full bg-surface-container-high rounded-full px-5 py-3 pl-12 text-body-sm border-none focus:ring-2 focus:ring-primary-container",onChange:o=>f(o.target.value),onKeyDown:o=>o.key==="Enter"&&s(w.searchResults)}),m.jsx(lt,{name:"search",className:"absolute left-4 top-1/2 -translate-y-1/2 text-outline"})]}),m.jsx("div",{className:"grid grid-cols-2 gap-sm",children:Rg.map(o=>m.jsxs("button",{type:"button",onClick:()=>{c({categoryId:o.id}),s(w.learnCategory)},className:"bg-white p-sm rounded-2xl shadow-soft flex flex-col gap-2 text-left border border-surface-container-highest hover:border-primary/30 active:scale-[0.98] transition-all",children:[m.jsx("div",{className:"w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary",children:m.jsx(lt,{name:o.icon})}),m.jsx("span",{className:"font-bold text-body-sm text-on-surface",children:o.title})]},o.id))}),m.jsxs("section",{children:[m.jsxs("div",{className:"flex justify-between items-end mb-sm",children:[m.jsx("h2",{className:"font-headline-md text-headline-md font-bold",children:"Featured Articles"}),m.jsx("button",{type:"button",onClick:()=>s(w.savedArticles),className:"text-primary font-bold text-body-sm",children:"Saved"})]}),m.jsxs("button",{type:"button",onClick:()=>{c({articleId:"article-1"}),s(w.learnArticle)},className:"w-full bg-white rounded-3xl p-sm shadow-soft flex items-center gap-4 text-left active:scale-[0.98] transition-transform",children:[m.jsx("div",{className:"w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-primary-container/20 flex items-center justify-center",children:m.jsx(lt,{name:"eco",className:"text-primary text-[32px]",filled:!0})}),m.jsxs("div",{className:"flex-1",children:[m.jsx("h3",{className:"font-bold text-body-lg",children:"Sustainable Living in Cameroon"}),m.jsx("p",{className:"text-on-surface-variant text-body-sm",children:"A practical guide for everyday eco-actions"})]}),m.jsx(lt,{name:"chevron_right",className:"text-on-surface-variant"})]})]})]})]})}const Lg=`<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>EcoLink Cameroon - Profile &amp; Settings</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed-variant": "#7a2c38",
                        "secondary": "#006d36",
                        "on-background": "#181d18",
                        "secondary-fixed-dim": "#73dc91",
                        "surface-container": "#ebefe8",
                        "on-tertiary-container": "#ffcace",
                        "inverse-on-surface": "#eef2eb",
                        "outline-variant": "#bfc9be",
                        "surface-container-highest": "#e0e4dd",
                        "on-secondary": "#ffffff",
                        "on-secondary-container": "#007239",
                        "on-surface": "#181d18",
                        "secondary-container": "#8cf6a8",
                        "primary-fixed-dim": "#87d89c",
                        "tertiary-fixed-dim": "#ffb2b9",
                        "surface-container-lowest": "#ffffff",
                        "on-primary": "#ffffff",
                        "outline": "#6f7a70",
                        "surface-variant": "#e0e4dd",
                        "on-primary-fixed-variant": "#005229",
                        "on-surface-variant": "#3f4940",
                        "error-container": "#ffdad6",
                        "on-primary-fixed": "#00210d",
                        "inverse-primary": "#87d89c",
                        "tertiary-fixed": "#ffdadc",
                        "primary-container": "#146b3a",
                        "on-error": "#ffffff",
                        "tertiary": "#792b38",
                        "background": "#f7fbf3",
                        "surface-tint": "#166c3b",
                        "on-error-container": "#93000a",
                        "primary-fixed": "#a2f5b6",
                        "surface-dim": "#d7dbd4",
                        "surface-bright": "#f7fbf3",
                        "inverse-surface": "#2d322d",
                        "primary": "#005128",
                        "secondary-fixed": "#8ff9ab",
                        "surface-container-high": "#e5e9e2",
                        "error": "#ba1a1a",
                        "surface-container-low": "#f1f5ed",
                        "on-primary-container": "#97e9ab",
                        "on-secondary-fixed-variant": "#005227",
                        "on-tertiary-fixed": "#400010",
                        "tertiary-container": "#97424e",
                        "surface": "#f7fbf3",
                        "on-secondary-fixed": "#00210c",
                        "on-tertiary": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "1rem",
                        "3xl": "1.5rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "xs": "8px",
                        "gutter-mobile": "16px",
                        "xl": "48px",
                        "md": "24px",
                        "margin-mobile": "20px",
                        "sm": "16px",
                        "lg": "32px",
                        "base": "4px"
                    },
                    "fontFamily": {
                        "headline-md": ["Inter"],
                        "label-caps": ["Inter"],
                        "display-lg-mobile": ["Inter"],
                        "body-lg": ["Inter"],
                        "body-sm": ["Inter"],
                        "display-lg": ["Inter"]
                    },
                    "fontSize": {
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                        "display-lg-mobile": ["28px", {"lineHeight": "34px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "display-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
                    }
                },
            },
        }
    <\/script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
        .glass-header {
            backdrop-filter: blur(10px);
            background: rgba(247, 251, 243, 0.8);
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
<style>
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
</head>
<body class="bg-background text-on-surface pb-32">
<!-- Top App Bar -->
<header class="fixed top-0 w-full z-50 glass-header flex justify-between items-center px-margin-mobile h-16">
<h1 class="font-headline-md text-headline-md font-bold text-primary">EcoLink Cameroon</h1>
<div class="flex items-center gap-4">
<button class="active:scale-95 transition-transform hover:opacity-80">
<span class="material-symbols-outlined text-on-surface">notifications</span>
</button>
<div class="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A high-quality professional portrait of a smiling African man named Michael in his early 30s, wearing a smart casual green shirt. The background is a soft-focus lush tropical garden in Cameroon, bathed in warm, golden afternoon sunlight. The image has a premium, institutional feel consistent with an environmental leader." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANsV3LXlF0LQDRdCr2Sqt4Jo9rSOODXq6l4PMPuxdQ-JD_8VBL4N-3kNq74dopi9jIySHgskDYjAPoq8u-AycIT6rYKur4_WqpBfwX8nGUWQNcN3uEboRwmIqR2EfTlNPLuLxi-nv4xUZrIHSayTWQmAcuJ8HTXJVXovbN0znVVszaB6Ww_Pkk446JVGRS1Vn7KC7syRN5mfVMQTfBHCWAOG2r4Ka9DMJ7_b6CEOeSVQtOw9Jyo0fbh3x9RbciQ3ZY9A5SFwm5rAsS"/>
</div>
</div>
</header>
<main class="mt-0">
<!-- Premium Cover Image Section -->
<div class="relative w-full h-[28vh] min-h-[220px]">
<img alt="Lush green forest in Cameroon with sunlight filtering through the trees" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz85m8zonLaADywlCNqP283aaXvUvB6n3YwviPJ6srxlED8xrMjv7HVrP7RwkwuQh35ypjpasDZUhS2IfYoEE0IjraPEFOcettEb5Ve6FGOnQIfZtFYIPLUJkH_0eAoiv3Gaqpcc4iqrymBdgE_m_ZKj2TPoLIlGdhaYWJ66tSFQyHWDTFt31MevgVVMIO-2DsHCClLPPGAdG-TCmX25QDRrcCDO8iY0T4WoIwQRuO4aLAc7tuKZNzriI-g2Syl9XMOuecPj237Fnv"/>
<div class="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
</div>
<!-- Profile Content Card Section -->
<section class="relative px-margin-mobile -mt-16">
<div class="bg-surface-container-lowest rounded-3xl p-6 pt-20 shadow-[0px_4px_30px_rgba(0,0,0,0.1)] border border-surface-container flex flex-col items-center mb-8">
<!-- Overlapping Profile Photo -->
<div class="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28">
<div class="w-full h-full rounded-full border-4 border-surface-container-lowest p-1 bg-white shadow-lg overflow-hidden">
<img class="w-full h-full rounded-full object-cover" data-alt="A detailed close-up profile photo of Michael A., an environmental activist from Cameroon. He has a friendly, confident expression. The lighting is natural and bright, emphasizing a vibrant green-themed corporate aesthetic. High resolution with crisp details and a clean white background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOusZZOE2xiAdMHbmGmvX4s4jUmagWoOJG_Rfx6pOpSHZ6C83CpEewgyg5m0aC4Dk_ZWPy4GPmYeCkHcRMeidfbKEhjPvyaE8ndXY7zwQ77N2qu7Zm2rHkECsoo0MS6J7zwLaZQPqXqpUSse1VXWQz9sLifOPAYCJkSeVLNbT5_e0tCu993GypwG6M01n8N7ze1AuBA64ZacfqcIbZen8zeWlskkhS9Fb23XlJwgu-nCOBwwOFBHvSAcFE-L5I2uqDZRxpLitIZCVN"/>
</div>
<div class="absolute bottom-1 right-1 bg-primary text-white p-1 rounded-full border-2 border-white shadow-sm">
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
</div>
<!-- Profile Info -->
<div class="text-center">
<h2 class="font-display-lg-mobile text-display-lg-mobile text-on-surface">Michael A.</h2>
<div class="mt-2 flex items-center justify-center gap-2 px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full w-fit mx-auto">
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">nature_people</span>
<span class="font-label-caps text-label-caps">Eco Champion - Level 12</span>
</div>
</div>
</div>
</section>
<!-- Quick Stats Bento Grid -->
<section class="grid grid-cols-2 gap-4 mb-8 px-margin-mobile">
<div class="bg-surface-container-lowest p-4 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col gap-1 border border-surface-container">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-primary text-[20px]">forest</span>
<span class="text-on-surface-variant font-body-sm">Planted</span>
</div>
<div class="font-headline-md text-headline-md text-on-surface">187 Trees</div>
<div class="text-[10px] text-secondary font-bold uppercase tracking-wider">+12 this month</div>
</div>
<div class="bg-surface-container-lowest p-4 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col gap-1 border border-surface-container">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-secondary text-[20px]">recycling</span>
<span class="text-on-surface-variant font-body-sm">Recycled</span>
</div>
<div class="font-headline-md text-headline-md text-on-surface">325 kg</div>
<div class="text-[10px] text-secondary font-bold uppercase tracking-wider">Top 5% User</div>
</div>
</section>
<!-- Badges Horizontal Scroll -->
<section class="mb-8 px-margin-mobile">
<div class="flex justify-between items-center mb-4">
<h3 class="font-headline-md text-headline-md text-on-surface">My Badges</h3>
<button class="text-primary font-label-caps hover:underline">View All</button>
</div>
<div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
<!-- Badge 1 -->
<div class="flex-shrink-0 flex flex-col items-center gap-2 w-20">
<div class="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center border-2 border-primary-container">
<span class="material-symbols-outlined text-primary text-3xl" style="font-variation-settings: 'FILL' 1;">eco</span>
</div>
<span class="text-[11px] font-semibold text-center text-on-surface-variant">Green Pioneer</span>
</div>
<!-- Badge 2 -->
<div class="flex-shrink-0 flex flex-col items-center gap-2 w-20">
<div class="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center border-2 border-secondary-container">
<span class="material-symbols-outlined text-secondary text-3xl" style="font-variation-settings: 'FILL' 1;">water_drop</span>
</div>
<span class="text-[11px] font-semibold text-center text-on-surface-variant">Water Saver</span>
</div>
<!-- Badge 3 -->
<div class="flex-shrink-0 flex flex-col items-center gap-2 w-20">
<div class="w-16 h-16 rounded-full bg-on-tertiary-container/10 flex items-center justify-center border-2 border-tertiary-container">
<span class="material-symbols-outlined text-tertiary text-3xl" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
</div>
<span class="text-[11px] font-semibold text-center text-on-surface-variant">Elite Guardian</span>
</div>
<!-- Badge 4 -->
<div class="flex-shrink-0 flex flex-col items-center gap-2 w-20">
<div class="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center border-2 border-outline-variant">
<span class="material-symbols-outlined text-outline text-3xl">local_fire_department</span>
</div>
<span class="text-[11px] font-semibold text-center text-on-surface-variant">10-Day Streak</span>
</div>
</div>
</section>
<!-- Certificates Horizontal Scroll -->
<section class="mb-8 px-margin-mobile">
<div class="flex justify-between items-center mb-4">
<h3 class="font-headline-md text-headline-md text-on-surface">Recent Certificates</h3>
<button class="text-primary font-label-caps hover:underline">View All</button>
</div>
<div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
<div class="flex-shrink-0 w-48 h-32 bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden relative">
<img class="w-full h-full object-cover opacity-80" data-alt="A professional-looking certificate of achievement for environmental excellence, featuring green accents, an official stamp, and a modern layout. The certificate mentions 'Volunteering Achievement' and 'EcoLink Cameroon'. Set against a clean, professional studio background with soft lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADtsdnltYsCOwIfWi93Oy3tZug8BMMKnaijoJ8xswNwjJH73cms6TZwcElFWNzeIc9bCyBpxmB_LAFhUIHdmIh17rNB-PTZQYVdWXtslig4LdRwOCZGGUXQeHm1I_C83T9wBugKXtZHzcGsSfi9A9Mh0oL6sS43QS0ipsMu_2YoQPnONYkZdBeV8rsCOTBJedaK3Vrxi0rCBDNs1pnnYwURxJLZaZvQDWdSUIAii90o20DyrjmtyITbLh84Lec-ccRFYFcrp0g_ZQS"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
<p class="text-white font-label-caps text-[10px]">Tree Planting Drive 2024</p>
</div>
</div>
<div class="flex-shrink-0 w-48 h-32 bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden relative">
<img class="w-full h-full object-cover opacity-80" data-alt="A formal digital certificate for community environmental leadership. It features elegant typography, a gold-embossed seal, and a sophisticated border. The aesthetic is corporate and trustworthy, mirroring the brand identity of a top-tier Cameroon environmental NGO." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwFs-mfNjnfxs7ovOleON-7500NOblRYyVT1eqSISmLzGyjbH0QcYDMPLGuvzfbvLKSr-euaq2O9fywIrx-xp_Xri2_PZfFJPhDfAAaMHTJxLZrOUwbXkV5yk1c_dGQzRXe4JtRgobs2xHA05JrMUMTTNU4PAwLUG5XsJXg9ySLtdK1jxYNGSd8jWSiFRd1ltkvVLb_zzl_X7qBzac6ciObO158gGb2GxGVvANerNh6BQo7zd0jFrc3pHLk5rLyb3YUyTv5R9zXS-j"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
<p class="text-white font-label-caps text-[10px]">Leadership Program</p>
</div>
</div>
</div>
</section>
<!-- Settings List -->
<section class="mb-12 px-margin-mobile">
<div class="bg-surface-container-lowest rounded-3xl p-2 border border-surface-container shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
<div class="flex flex-col">
<a class="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors" href="#">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">person_edit</span>
</div>
<span class="font-body-lg text-body-lg text-on-surface">Edit Profile</span>
</div>
<span class="material-symbols-outlined text-outline">chevron_right</span>
</a>
<div class="h-px bg-surface-container-highest mx-4"></div>
<a class="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors" href="#">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">manage_accounts</span>
</div>
<span class="font-body-lg text-body-lg text-on-surface">Account Settings</span>
</div>
<span class="material-symbols-outlined text-outline">chevron_right</span>
</a>
<div class="h-px bg-surface-container-highest mx-4"></div>
<a class="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors" href="#">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">shield</span>
</div>
<span class="font-body-lg text-body-lg text-on-surface">Privacy</span>
</div>
<span class="material-symbols-outlined text-outline">chevron_right</span>
</a>
<div class="h-px bg-surface-container-highest mx-4"></div>
<a class="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors" href="#">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">notifications_active</span>
</div>
<span class="font-body-lg text-body-lg text-on-surface">Notification Settings</span>
</div>
<span class="material-symbols-outlined text-outline">chevron_right</span>
</a>
<div class="h-px bg-surface-container-highest mx-4"></div>
<a class="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors" href="#">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">help</span>
</div>
<span class="font-body-lg text-body-lg text-on-surface">Help &amp; Support</span>
</div>
<span class="material-symbols-outlined text-outline">chevron_right</span>
</a>
</div>
</div>
</section>
<!-- Logout Button -->
<div class="px-margin-mobile">
<button class="w-full py-4 text-error font-headline-md flex items-center justify-center gap-2 active:scale-95 transition-transform mb-8">
<span class="material-symbols-outlined">logout</span>
                Logout
            </button>
</div>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-xs py-base bg-surface shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] h-20">
<a class="flex flex-col items-center justify-center text-outline-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="explore">explore</span>
<span class="font-label-caps text-label-caps">Explore</span>
</a>
<a class="flex flex-col items-center justify-center text-outline-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="nature_people">nature_people</span>
<span class="font-label-caps text-label-caps">EcoQuest</span>
</a>
<a class="flex flex-col items-center justify-center text-outline-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="font-label-caps text-label-caps">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-outline-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="workspace_premium">workspace_premium</span>
<span class="font-label-caps text-label-caps">Rewards</span>
</a>
<a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined" data-icon="person" style="font-variation-settings: 'FILL' 1;">person</span>
<span class="font-label-caps text-label-caps">Profile</span>
</a>
</nav>
<script>
        // Simple scroll reveal or micro-interactions can go here
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('touchstart', () => {
                el.classList.add('opacity-70');
            });
            el.addEventListener('touchend', () => {
                el.classList.remove('opacity-70');
            });
        });
    <\/script>
</body></html>`;function Mg(){const{logout:s}=it(),c=(f,o)=>{const d=Ag(f);return d===w.auth&&s(),d};return m.jsx(qn,{html:Lg,pageId:"profile_settings_updated",resolveNav:c})}const Dg={[w.home]:()=>m.jsx(Cg,{}),[w.explore]:()=>m.jsx(Tg,{}),[w.ecoquest]:()=>m.jsx(zg,{}),[w.learn]:()=>m.jsx(Og,{}),[w.profile]:()=>m.jsx(Mg,{})};function Xl(){const{pathname:s}=Ht(),{saveScrollPosition:c,getScrollPosition:f}=it(),o=C.useRef(new Set([w.home])),d=C.useRef(null),p=C.useRef(s);if(ds(s)&&o.current.add(s),C.useEffect(()=>{ds(p.current)&&d.current&&c(p.current,d.current.scrollTop),p.current=s},[s,c]),C.useEffect(()=>{ds(s)&&d.current&&(d.current.scrollTop=f(s))},[s,f]),!ds(s))return null;const v=[...o.current];return m.jsxs("div",{className:"flex flex-col min-h-screen max-w-2xl mx-auto w-full",children:[m.jsx("div",{ref:d,className:"flex-1 overflow-y-auto pb-24",children:v.map(_=>m.jsx("div",{className:_===s?"block page-enter":"hidden","aria-hidden":_!==s,children:Dg[_]()},_))}),m.jsx(mg,{})]})}function ms({children:s}){return m.jsx("div",{className:"flex flex-col min-h-screen max-w-2xl mx-auto w-full page-enter",children:m.jsx("div",{className:"flex-1 pb-8",children:s})})}const Ng=`<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>EcoLink Cameroon - Explore Community</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed-variant": "#7a2c38",
                        "secondary": "#006d36",
                        "on-background": "#181d18",
                        "secondary-fixed-dim": "#73dc91",
                        "surface-container": "#ebefe8",
                        "on-tertiary-container": "#ffcace",
                        "inverse-on-surface": "#eef2eb",
                        "outline-variant": "#bfc9be",
                        "surface-container-highest": "#e0e4dd",
                        "on-secondary": "#ffffff",
                        "on-secondary-container": "#007239",
                        "on-surface": "#181d18",
                        "secondary-container": "#8cf6a8",
                        "primary-fixed-dim": "#87d89c",
                        "tertiary-fixed-dim": "#ffb2b9",
                        "surface-container-lowest": "#ffffff",
                        "on-primary": "#ffffff",
                        "outline": "#6f7a70",
                        "surface-variant": "#e0e4dd",
                        "on-primary-fixed-variant": "#005229",
                        "on-surface-variant": "#3f4940",
                        "error-container": "#ffdad6",
                        "on-primary-fixed": "#00210d",
                        "inverse-primary": "#87d89c",
                        "tertiary-fixed": "#ffdadc",
                        "primary-container": "#146b3a",
                        "on-error": "#ffffff",
                        "tertiary": "#792b38",
                        "background": "#f7fbf3",
                        "surface-tint": "#166c3b",
                        "on-error-container": "#93000a",
                        "primary-fixed": "#a2f5b6",
                        "surface-dim": "#d7dbd4",
                        "surface-bright": "#f7fbf3",
                        "inverse-surface": "#2d322d",
                        "primary": "#005128",
                        "secondary-fixed": "#8ff9ab",
                        "surface-container-high": "#e5e9e2",
                        "error": "#ba1a1a",
                        "surface-container-low": "#f1f5ed",
                        "on-primary-container": "#97e9ab",
                        "on-secondary-fixed-variant": "#005227",
                        "on-tertiary-fixed": "#400010",
                        "tertiary-container": "#97424e",
                        "surface": "#f7fbf3",
                        "on-secondary-fixed": "#00210c",
                        "on-tertiary": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "xs": "8px",
                        "gutter-mobile": "16px",
                        "xl": "48px",
                        "md": "24px",
                        "margin-mobile": "20px",
                        "sm": "16px",
                        "lg": "32px",
                        "base": "4px"
                    },
                    "fontFamily": {
                        "headline-md": ["Inter"],
                        "label-caps": ["Inter"],
                        "display-lg-mobile": ["Inter"],
                        "body-lg": ["Inter"],
                        "body-sm": ["Inter"],
                        "display-lg": ["Inter"]
                    },
                    "fontSize": {
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                        "display-lg-mobile": ["28px", {"lineHeight": "34px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "display-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
                    }
                },
            },
        }
    <\/script>
<style>
        body { font-family: 'Inter', sans-serif; background-color: #f7fbf3; color: #181d18; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-surface">
<!-- Top App Bar -->
<header class="fixed top-0 left-0 right-0 z-50 bg-background flex justify-between items-center w-full px-margin-mobile h-16">
<h1 class="font-headline-md text-headline-md font-bold text-primary">Explore</h1>
<div class="flex items-center gap-4">
<button class="hover:opacity-80 active:scale-95 transition-transform">
<span class="material-symbols-outlined text-on-surface-variant">search</span>
</button>
<button class="hover:opacity-80 active:scale-95 transition-transform relative">
<span class="material-symbols-outlined text-on-surface-variant">notifications</span>
<span class="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
</button>
</div>
</header>
<main class="pt-16 pb-24 max-w-md mx-auto">
<!-- Segmented Control (Opportunities/Community) -->
<section class="px-margin-mobile py-4 sticky top-16 z-40 bg-background">
<div class="bg-surface-container-high p-1 rounded-full flex">
<button class="flex-1 py-2 text-label-caps font-label-caps text-on-surface-variant rounded-full transition-all">Opportunities</button>
<button class="flex-1 py-2 text-label-caps font-label-caps bg-primary text-on-primary rounded-full shadow-sm">Community</button>
</div>
</section>
<!-- Category Filter Chips -->
<section class="overflow-x-auto hide-scrollbar flex gap-2 px-margin-mobile mb-4">
<button class="whitespace-nowrap px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full text-body-sm font-semibold">All</button>
<button class="whitespace-nowrap px-4 py-1.5 bg-surface-container-highest text-on-surface-variant rounded-full text-body-sm">Following</button>
<button class="whitespace-nowrap px-4 py-1.5 bg-surface-container-highest text-on-surface-variant rounded-full text-body-sm">NGOs</button>
<button class="whitespace-nowrap px-4 py-1.5 bg-surface-container-highest text-on-surface-variant rounded-full text-body-sm">Schools</button>
<button class="whitespace-nowrap px-4 py-1.5 bg-surface-container-highest text-on-surface-variant rounded-full text-body-sm">Clubs</button>
</section>
<!-- Feed List -->
<div class="space-y-4 px-margin-mobile">
<!-- Community Post 1: NGO Achievement -->
<article class="bg-surface rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] overflow-hidden border border-surface-variant">
<div class="p-4 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full overflow-hidden bg-primary-container flex items-center justify-center text-on-primary-container">
<img class="w-full h-full object-cover" data-alt="A professional circular profile logo for Green Cameroon Initiative, featuring a stylized green leaf icon and minimalist corporate typography on a clean white background. Professional, trustworthy environmental NGO branding for a mobile app interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2cvVOXmI5dI8Tm09sdSaATuuFPTdZqVvkYoZVGT7XBeO7wDyN6JDNllbJQQzWOpgBA74EFR2OW_vRzoYE7CACc0AbsrCedyCwuqmf_aCMNDO5BEeCYMkZ2FjrSO8L2Z_EN6p1iXfVK_h2Y8cB3G2Fm_SlJ6lUSZBvaiaS-CMbVc870xL5CjfZ_9LHX6yHBXo1RZK5vulqu8SQ6a5NqVxCj6p2bB5aR_MGPwh47Eqxhv3BxSS3y6yxAfzZ1l6u3wTN_Rm0UfYya7Gb"/>
</div>
<div>
<h3 class="text-body-lg font-bold text-on-surface">Green Cameroon Initiative</h3>
<p class="text-body-sm text-outline">June 25 at 4:30 PM • Douala</p>
</div>
</div>
<button class="text-on-surface-variant">
<span class="material-symbols-outlined">more_horiz</span>
</button>
</div>
<div class="px-4 pb-3">
<p class="text-body-lg text-on-surface-variant">120 amazing volunteers came together for the Douala River Cleanup and collected over 850kg of waste! Together, we keep our rivers clean 💚</p>
</div>
<!-- Bento-style Image Grid -->
<div class="grid grid-cols-3 grid-rows-2 gap-1 px-4 mb-3 h-64">
<div class="col-span-2 row-span-2 rounded-l-lg overflow-hidden relative">
<img class="w-full h-full object-cover" data-alt="A wide-angle high-resolution photograph of dozens of energetic young volunteers wearing matching green t-shirts, actively cleaning a riverbank in Douala, Cameroon. They are picking up plastic waste under a bright, sunny sky. The atmosphere is vibrant and impactful, emphasizing community environmental action." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFJleqbgA7JY5aVOsPyjRUGgqg97SzSzWI4O-2BGMyFVa-cqAFswyEIztpCgs9DxG7L9J5xWYupCNDARLCyZ-xxDjC_4CBlE-zpZ0a57PXhAqtug6PTfPP03XastZb5b0Y317l2S6KUrFU6f986-HEqqk6t5FgG_kofZDRI5wDwbJvNwhmjbQbrSXtgLl6ga1vR6FRVHLxrruLxNKfoQ0tFVBTPGbVk_Zqyas1ACH5D-MVALmQ7bMhiKcFCjjpLx6r6chMTxe3W2Wn"/>
</div>
<div class="rounded-tr-lg overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Close-up shot of a large pile of collected plastic waste in bags on a riverbank, with volunteers in the background. Professional environmental photography with natural lighting and high contrast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA97jiZ4q1f8CAZs85rqzosf0AmgN1Bk-FMFHEQ-jk_P-5On9UeUbigFHCUv6DowCeraeq65ib9tQyCExMjWGiVpUo_O7hUKZ-NsM89HkMzUYvI9FC12EHtpF5mch80rNgoCkcPNHsb7QG6JrOP0OCYeCFZMsrMZYp1GjL5UZh4Sr1pYOhxsagJnyze8OpVRLZgk_C2HUe1YM2IPhEbMEGiBIuUSgunExizpG8yp0I_tLrpqhYcOGftb79a2_rkvblBowkSnK_ebWVO"/>
</div>
<div class="rounded-br-lg overflow-hidden relative">
<img class="w-full h-full object-cover" data-alt="Two volunteers smiling and high-fiving while holding a heavy bag of waste during a cleanup event. The lighting is warm and golden, reflecting a sense of achievement and community spirit." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJXWqFJZZTQHNp-g3glZef-WJrlhkcfJL3zpoQ9w-eXVBnGALYzKMrsrELgO1vjiE0Y0Ts6w15ydUq1_00kwtnsg38cyvMi3mFQkEgM7FUONF3_51I9BG40bP-xIRGqe42svaOEG2FvnsrAD36YdK5Vy1kKEQVqR5ZKFUX5sh3kHfWzVAApiJZnP3ZJsdrX3v84tPzKVK-HahwBpXky9adHJ6jqVoQAFxxqLda8cfRUTSEdr23tcjvZkm9KVU4z8jwDoia9u0ZMWDk"/>
</div>
</div>
<!-- Social Actions -->
<div class="px-4 py-3 border-t border-surface-variant flex items-center justify-between">
<div class="flex items-center gap-6">
<button class="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors group">
<span class="material-symbols-outlined group-active:scale-125 transition-transform" data-weight="fill" style="font-variation-settings: 'FILL' 1;">favorite</span>
<span class="text-label-caps">342</span>
</button>
<button class="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">chat_bubble</span>
<span class="text-label-caps">41</span>
</button>
<button class="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">share</span>
<span class="text-label-caps">28</span>
</button>
</div>
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">bookmark</span>
</button>
</div>
</article>
<!-- Community Post 2: Volunteer Achievement -->
<article class="bg-surface rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] overflow-hidden border border-surface-variant">
<div class="p-4 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A friendly, high-resolution portrait of a young African woman named Esther, smiling confidently. The background is a soft-focus lush green garden. Her expression is inspiring and professional, suitable for a social impact leader profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIdBe1przUh8gfA1KevqE0D4mpkWlmHdc6bfe28wJPM7ii2xYtHkXMd6sgytalFwBz4vBXPqeTbCVbA_EWeUBGkcGE_UEH-POcbbSWx98L3dA4kPb05vbPCiilbeYREXQUYE81AvECYYS16vjW2TdPHO8w-dcut-yGrtC-5nRIh-YcsKB3mME87AUhCPtC7lprttBtjHvNCAH_GSpkRaUIbkYnEC9DTOFQzuZX0byOBpdOaNEoz62ZpReHmg9DYsa-XRWuLGmDaZJp"/>
</div>
<div>
<h3 class="text-body-lg font-bold text-on-surface">Esther N.</h3>
<p class="text-body-sm text-outline">June 24 at 2:15 PM • Buea</p>
</div>
</div>
<button class="text-on-surface-variant">
<span class="material-symbols-outlined">more_horiz</span>
</button>
</div>
<div class="px-4 pb-3">
<p class="text-body-lg text-on-surface-variant">Proud to have completed the Community Environmental Leadership Program! 🌿🙌 This journey has been transformative.</p>
</div>
<div class="px-4 mb-3">
<div class="rounded-xl overflow-hidden aspect-video relative">
<img class="w-full h-full object-cover" data-alt="A premium, high-quality photograph of a young woman receiving a framed certificate from a distinguished official in an outdoor ceremony. Lush green mountains of Buea are visible in the background. The lighting is soft and cinematic, capturing a moment of prestige and institutional trust." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO88wrVxIz6KWF8CUQiIinfSlNfPgscbLsp_a9hSeRNMrnwnIEEDtA0ApBZvmXupXGIGD_GgBQgzl8jcqgshv1odE884E4I03J3RlKNjnsG5rGe_7E9A-kMw6oljBpxnZ9COei1amDf6VqIMbEX2lHJsduVUEvZIRZZS-OlR8Tp2SksyajxWzmcMbW1W0RtgEDrWXesgFLYYGHaXzIml0SvHd0IXNdxgrZi2KyH_-pcJ5wNtGyw7r6TI4682SjjVQbAcZfOQUYC075"/>
</div>
</div>
<div class="px-4 py-3 border-t border-surface-variant flex items-center justify-between">
<div class="flex items-center gap-6">
<button class="flex items-center gap-1.5 text-on-surface-variant group">
<span class="material-symbols-outlined text-error" data-weight="fill" style="font-variation-settings: 'FILL' 1;">favorite</span>
<span class="text-label-caps">218</span>
</button>
<button class="flex items-center gap-1.5 text-on-surface-variant">
<span class="material-symbols-outlined">chat_bubble</span>
<span class="text-label-caps">17</span>
</button>
<button class="flex items-center gap-1.5 text-on-surface-variant">
<span class="material-symbols-outlined">share</span>
<span class="text-label-caps">12</span>
</button>
</div>
<button class="text-on-surface-variant">
<span class="material-symbols-outlined">bookmark</span>
</button>
</div>
</article>
<!-- Community Post 3: School Program -->
<article class="bg-surface rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] overflow-hidden border border-surface-variant">
<div class="p-4 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full overflow-hidden bg-secondary-container flex items-center justify-center text-on-secondary-container">
<img class="w-full h-full object-cover" data-alt="Circular emblem logo for Buea Environmental Club, featuring a minimalist mountain icon and a seedling. Clean, corporate-educational aesthetic with shades of forest green and sky blue." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4CHs-EEyAoFY3kgxIiCJocCM_tNGwc6Cs-n_1vm51ng1bZqxoKFdXaV3djiNKWA4AkzNDSclkomuZTKRcqHg0RojkK-LP_kdqXeQGVkYawqGizXJXr2u9ojWND6FjZIg1qCjhpslET25nmSjZuAQxcnlrI-iYGcAJPuE5blvOcJvGuLAhjskFBFX6rbKtjvUdN_buIuV4hFDfK3RZ-koP1aqAtDL1vINVZpDQYaM0rsZblf9dbxtdwjtvAp6PMjUDI5wNazbBvXHr"/>
</div>
<div>
<h3 class="text-body-lg font-bold text-on-surface">Buea Environmental Club</h3>
<p class="text-body-sm text-outline">June 23 at 9:10 AM • Buea</p>
</div>
</div>
<button class="text-on-surface-variant">
<span class="material-symbols-outlined">more_horiz</span>
</button>
</div>
<div class="px-4 pb-3">
<p class="text-body-lg text-on-surface-variant">Our amazing team planted 300 trees around Buea schools today. Small actions, big impact! 🌳✨</p>
</div>
<div class="grid grid-cols-2 gap-1 px-4 mb-3">
<div class="rounded-l-lg overflow-hidden h-40">
<img class="w-full h-full object-cover" data-alt="A group of smiling school children in uniforms, kneeling and planting small saplings in a line on a school field. The soil is dark and rich, and the background shows a beautiful Cameroon landscape. Crisp, high-fidelity documentary style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhgjmurani7YYB05uG1cmWehJKhEOHMHgY6Q4xFaClXWhXWH1ZT5Wmvt-ByQAi5i_uiOgv4Ke3jQExgQJveQy5KyNphbYY4TjGQUYnwY9MgACPzPlKdcrKzeNDAJ5jSDIOT9JLXrOY4_pogR8svtTzpDmSukBDEr0RlXW5XvQcYHC3MyT1wuWEIX-VozRdYVCPTtIgIBFLupfens7lMzb7rRBETPh_DHj4t_romlcgoZk5SQUphXU4f-bMN9XD4ckR2Rjlt4IG0c7-"/>
</div>
<div class="rounded-r-lg overflow-hidden h-40">
<img class="w-full h-full object-cover" data-alt="A wide group shot of students and teachers standing together after a successful tree planting event, holding their shovels and smiling. The lighting is bright and cheerful." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC508DCHXG2U7diPkfyNuvWqIAj_X7fCmOzlIbLv_m7glRabvS0Lp--i2LJWg9MTjwlmclmopeb6ntutWn9k7v5STtdYyvBAKLj3LPEVdurTSy5eOSMewd9Elo2VPSn1YCY6Wqs8yt0Oe0nPIxsdgGEYEKl5JxlmSh6Z0dYqJ3F-AWWR3adY42gQcYmQ-t8XCc71-kUh7HYTkaVezIGGGCCD8qrGx1NDv6rhy_W9MfoYpiNChwFCN3mSAhNWD4KFGFHShdq8oOHtUzv"/>
</div>
</div>
<div class="px-4 py-3 border-t border-surface-variant flex items-center justify-between">
<div class="flex items-center gap-6">
<button class="flex items-center gap-1.5 text-on-surface-variant">
<span class="material-symbols-outlined">favorite</span>
<span class="text-label-caps">511</span>
</button>
<button class="flex items-center gap-1.5 text-on-surface-variant">
<span class="material-symbols-outlined">chat_bubble</span>
<span class="text-label-caps">82</span>
</button>
<button class="flex items-center gap-1.5 text-on-surface-variant">
<span class="material-symbols-outlined">share</span>
<span class="text-label-caps">49</span>
</button>
</div>
<button class="text-on-surface-variant">
<span class="material-symbols-outlined">bookmark</span>
</button>
</div>
</article>
</div>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-xs py-base bg-surface shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] h-20">
<!-- Explore Tab (Active) -->
<a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined" data-weight="fill" style="font-variation-settings: 'FILL' 1;">explore</span>
<span class="font-label-caps text-label-caps">Explore</span>
</a>
<!-- EcoQuest Tab -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">nature_people</span>
<span class="font-label-caps text-label-caps">EcoQuest</span>
</a>
<!-- Home Tab -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">home</span>
<span class="font-label-caps text-label-caps">Home</span>
</a>
<!-- Rewards Tab -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">workspace_premium</span>
<span class="font-label-caps text-label-caps">Rewards</span>
</a>
<!-- Profile Tab -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">person</span>
<span class="font-label-caps text-label-caps">Profile</span>
</a>
</nav>
<!-- FAB for creating post (Contextual to Explore Community) -->
<button class="fixed right-6 bottom-24 w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-lg flex items-center justify-center hover:opacity-90 active:scale-95 transition-all">
<span class="material-symbols-outlined" style="font-size: 28px;">edit</span>
</button>
<script>
        // Simple Interaction for navigation toggling (demo only)
        document.querySelectorAll('nav a').forEach(navItem => {
            navItem.addEventListener('click', (e) => {
                document.querySelectorAll('nav a').forEach(i => {
                    i.classList.remove('bg-primary-container', 'text-on-primary-container', 'px-4', 'py-1');
                    i.classList.add('text-on-surface-variant', 'p-2');
                    const icon = i.querySelector('.material-symbols-outlined');
                    if(icon) icon.style.fontVariationSettings = "'FILL' 0";
                });
                navItem.classList.add('bg-primary-container', 'text-on-primary-container', 'px-4', 'py-1');
                navItem.classList.remove('text-on-surface-variant', 'p-2');
                const activeIcon = navItem.querySelector('.material-symbols-outlined');
                if(activeIcon) activeIcon.style.fontVariationSettings = "'FILL' 1";
            });
        });

        // Toggle Segmented Control
        const segmentButtons = document.querySelectorAll('.bg-surface-container-high button');
        segmentButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                segmentButtons.forEach(b => {
                    b.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
                    b.classList.add('text-on-surface-variant');
                });
                btn.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
                btn.classList.remove('text-on-surface-variant');
            });
        });
    <\/script>
</body></html>`;function Me({title:s,subtitle:c,backTo:f,icon:o="eco",actions:d=[]}){const p=Xt();return m.jsxs("div",{className:"min-h-screen bg-background",children:[m.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md flex items-center gap-4 px-margin-mobile h-16 max-w-2xl mx-auto",children:[m.jsx("button",{type:"button",onClick:()=>p(f||-1),className:"p-2 -ml-2 hover:bg-surface-variant rounded-full transition-colors active:scale-95",children:m.jsx(lt,{name:"arrow_back",className:"text-primary"})}),m.jsx("h1",{className:"font-headline-md text-headline-md font-bold text-primary",children:s})]}),m.jsx("main",{className:"pt-24 px-margin-mobile pb-12 max-w-2xl mx-auto",children:m.jsxs("div",{className:"bg-white rounded-3xl p-md shadow-soft border border-surface-container-highest text-center",children:[m.jsx("div",{className:"w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-container/20 flex items-center justify-center",children:m.jsx(lt,{name:o,className:"text-primary text-[32px]",filled:!0})}),m.jsx("h2",{className:"font-headline-md text-headline-md font-bold text-on-surface mb-2",children:s}),c&&m.jsx("p",{className:"text-body-sm text-on-surface-variant mb-6",children:c}),d.length>0&&m.jsx("div",{className:"flex flex-col gap-3",children:d.map(v=>m.jsx("button",{type:"button",onClick:()=>p(v.route),className:"w-full bg-primary text-on-primary py-3 rounded-2xl font-bold active:scale-[0.98] transition-transform",children:v.label},v.route))})]})})]})}function rc({title:s,onBack:c,right:f}){const o=Xt();return m.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md",children:m.jsxs("div",{className:"flex justify-between items-center w-full px-margin-mobile h-16 max-w-2xl mx-auto",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("button",{type:"button",onClick:()=>c?c():o(-1),className:"p-2 -ml-2 hover:bg-surface-variant rounded-full transition-colors active:scale-95",children:m.jsx(lt,{name:"arrow_back",className:"text-primary"})}),m.jsx("h1",{className:"font-headline-md text-headline-md font-bold text-primary",children:s})]}),f]})})}function oc(s,c){navigator.share?navigator.share({title:s,text:c,url:window.location.href}):(navigator.clipboard.writeText(`${s}
${c}
${window.location.href}`),alert("Link copied to clipboard!"))}function Bg(){const{toggleLike:s,setSelected:c}=it(),f=(o,d)=>{const p=vg(o);return p===w.postDetail&&c({postId:"post-1"}),p===w.publicProfile&&c({profileId:"profile-1"}),p};return m.jsx(qn,{html:Ng,pageId:"community_feed",resolveNav:f,onLike:()=>s("post-1"),onShare:()=>oc("EcoLink Community","Check out this post on EcoLink Cameroon!")})}const Hg=`<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Post Detail - EcoLink Cameroon</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-tertiary-fixed-variant": "#7a2c38",
                    "secondary": "#006d36",
                    "on-background": "#181d18",
                    "secondary-fixed-dim": "#73dc91",
                    "surface-container": "#ebefe8",
                    "on-tertiary-container": "#ffcace",
                    "inverse-on-surface": "#eef2eb",
                    "outline-variant": "#bfc9be",
                    "surface-container-highest": "#e0e4dd",
                    "on-secondary": "#ffffff",
                    "on-secondary-container": "#007239",
                    "on-surface": "#181d18",
                    "secondary-container": "#8cf6a8",
                    "primary-fixed-dim": "#87d89c",
                    "tertiary-fixed-dim": "#ffb2b9",
                    "surface-container-lowest": "#ffffff",
                    "on-primary": "#ffffff",
                    "outline": "#6f7a70",
                    "surface-variant": "#e0e4dd",
                    "on-primary-fixed-variant": "#005229",
                    "on-surface-variant": "#3f4940",
                    "error-container": "#ffdad6",
                    "on-primary-fixed": "#00210d",
                    "inverse-primary": "#87d89c",
                    "tertiary-fixed": "#ffdadc",
                    "primary-container": "#146b3a",
                    "on-error": "#ffffff",
                    "tertiary": "#792b38",
                    "background": "#f7fbf3",
                    "surface-tint": "#166c3b",
                    "on-error-container": "#93000a",
                    "primary-fixed": "#a2f5b6",
                    "surface-dim": "#d7dbd4",
                    "surface-bright": "#f7fbf3",
                    "inverse-surface": "#2d322d",
                    "primary": "#005128",
                    "secondary-fixed": "#8ff9ab",
                    "surface-container-high": "#e5e9e2",
                    "error": "#ba1a1a",
                    "surface-container-low": "#f1f5ed",
                    "on-primary-container": "#97e9ab",
                    "on-secondary-fixed-variant": "#005227",
                    "on-tertiary-fixed": "#400010",
                    "tertiary-container": "#97424e",
                    "surface": "#f7fbf3",
                    "on-secondary-fixed": "#00210c",
                    "on-tertiary": "#ffffff"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "xs": "8px",
                    "gutter-mobile": "16px",
                    "xl": "48px",
                    "md": "24px",
                    "margin-mobile": "20px",
                    "sm": "16px",
                    "lg": "32px",
                    "base": "4px"
            },
            "fontFamily": {
                    "headline-md": ["Inter"],
                    "label-caps": ["Inter"],
                    "display-lg-mobile": ["Inter"],
                    "body-lg": ["Inter"],
                    "body-sm": ["Inter"],
                    "display-lg": ["Inter"]
            },
            "fontSize": {
                    "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                    "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                    "display-lg-mobile": ["28px", {"lineHeight": "34px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                    "display-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
            }
          },
        },
      }
    <\/script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f7fbf3;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #bfc9be;
            border-radius: 10px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
<!-- Top App Bar -->
<header class="bg-background fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16">
<div class="flex items-center gap-4">
<button class="p-2 -ml-2 hover:bg-surface-variant rounded-full transition-colors active:scale-95" onclick="window.history.back()">
<span class="material-symbols-outlined text-primary">arrow_back</span>
</button>
<h1 class="font-headline-md text-headline-md font-bold text-primary">Post</h1>
</div>
<div class="flex items-center gap-2">
<button class="p-2 hover:bg-surface-variant rounded-full transition-colors active:scale-95">
<span class="material-symbols-outlined text-on-surface-variant">share</span>
</button>
<button class="p-2 hover:bg-surface-variant rounded-full transition-colors active:scale-95">
<span class="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</div>
</header>
<main class="pt-16 pb-32">
<!-- Post Header -->
<section class="px-margin-mobile py-4 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-container">
<img class="w-full h-auto object-cover" data-alt="A professional headshot of a smiling Cameroonian community leader named Esther N., wearing a vibrant green organic cotton shirt, with soft natural lighting and a blurred background of a tropical nursery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTojM9fbjykBuCGD3Vzy4VdS_mP2jRHepM7KkP1sxEz7Hv4XCYho_x2Wk06z6VE_gPDyf-yY-hY3Rzq1dO4I16qa5-2lZ1o78vnPmqiPGqbYJ8CjChAMCLYCwVYcPJHci7GweycwBiaBSUAGe_07xPriCbOlFWKX6iA3e8j0hL_oIa6SyydMo_tJUoQ5tg1sYUWGkBOjEnXrvXCmdL_G3gQ0tqUOtdqN5tdvSa87zvq_2cY7lg7d0Ta6p966hMAndORg8wZ2nsnMxc"/>
</div>
<div>
<h3 class="font-headline-md text-[16px] font-bold text-on-background">Esther N.</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">June 24 at 2:15 PM • Buea</p>
</div>
</div>
<button class="px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full text-label-caps font-bold transition-transform active:scale-95">
                Follow
            </button>
</section>
<!-- Immersive Content Area -->
<article>
<div class="w-full aspect-[4/3] bg-surface-container overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A cinematic, high-resolution wide shot of a group of diverse community volunteers, including Esther and others, proudly displaying their environmental certificates in front of a newly planted community grove in Buea, Cameroon. The lighting is golden hour, warm and inspiring, highlighting the lush greenery and the genuine smiles of the participants." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXRptOk2q0GNvz06eslZopauFGVdZoHaPjs6JgxMGpaqbuWSRI8g5mmf7hmFSPbgeV4AnjMFHV3QZG-YZEz9tmqhMbgQxlyCeIpwousUL_Z--dDcQB2nBzQwqRmNPr0_DyEBEAe-DLOfMExRHQ4bOI7CRLoCMNpmHDkEfBnjqj7VIS4g5jJAe2DmGZMI6CNxtgbtkXtp7hMZpxoT6z33tQofhLiF_pNOa0ZKBP2ISffD-Sh3VScAh9xuqN757BVzPoN84doxQxUUFm"/>
</div>
<div class="px-margin-mobile py-6">
<p class="font-body-lg text-body-lg text-on-surface leading-relaxed">
                    Proud to have completed the Community Environmental Leadership Program! 🌱 Our team spent the last week learning about sustainable agriculture and watershed management in the Mount Cameroon region. Small actions lead to big changes. Together, we are building a greener future for our children.
                </p>
<div class="mt-4 flex flex-wrap gap-2">
<span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[12px] font-semibold">#GreenCameroon</span>
<span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[12px] font-semibold">#EcoChampions</span>
</div>
</div>
</article>
<!-- Engagement Metrics -->
<section class="px-margin-mobile py-4 border-y border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-6">
<div class="flex items-center gap-2 group cursor-pointer">
<span class="material-symbols-outlined text-primary" data-weight="fill">favorite</span>
<span class="font-body-sm text-body-sm text-on-surface-variant font-semibold">218</span>
</div>
<div class="flex items-center gap-2 group cursor-pointer">
<span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">chat_bubble</span>
<span class="font-body-sm text-body-sm text-on-surface-variant font-semibold">17</span>
</div>
<div class="flex items-center gap-2 group cursor-pointer">
<span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">sync</span>
<span class="font-body-sm text-body-sm text-on-surface-variant font-semibold">12</span>
</div>
</div>
<button class="flex items-center gap-1.5 text-primary active:scale-95 transition-transform">
<span class="material-symbols-outlined">bookmark</span>
</button>
</section>
<!-- Comments Section -->
<section class="px-margin-mobile py-6 bg-surface-container-low">
<div class="flex justify-between items-center mb-6">
<h4 class="font-headline-md text-[16px] font-bold text-on-background">Comments</h4>
<div class="flex items-center gap-1 text-on-surface-variant cursor-pointer">
<span class="text-[12px] font-bold">Most relevant</span>
<span class="material-symbols-outlined text-[18px]">expand_more</span>
</div>
</div>
<div class="space-y-6">
<!-- Comment 1 -->
<div class="flex gap-3">
<div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A portrait of Sarah K., a young Cameroonian environmentalist with braided hair, smiling warmly. The image is bright and airy with a modern corporate clean aesthetic, using soft-focus greenery in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqLu2HCjL_40JKe7q1HSp2icEjWdSad62eV1tqsRfhUIOTuzzmFMl35q8vbtxsCLzUjekEnHjeyb0h2VQQ_xjPOBUGYVM8-mYm_Y8pXB7r9IMf_0Sl2iegfDfKEjOLulgK7lagQAyuONLjIQWHQnzZTiMGBB2dY2uSMeyfEZwCOgw98Xv51qkecpQCk7xVbXhrvHRX404ezJXVgY6Rrq8C3sUBF2zhQmLiqyxOWbhOkhK9lw1Si3GVtgjs3TCeRqkUYl9YeWRM4b91"/>
</div>
<div class="flex-1">
<div class="bg-white p-3 rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-outline-variant/30">
<h5 class="text-body-sm font-bold text-on-background mb-1">Sarah K.</h5>
<p class="text-body-sm text-on-surface">Great work team! Proud to be part of this. 🌍💚</p>
</div>
<div class="mt-2 ml-2 flex items-center gap-4">
<span class="text-[12px] font-bold text-on-surface-variant">2h ago</span>
<button class="text-[12px] font-bold text-primary">Reply</button>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[14px] text-on-surface-variant">thumb_up</span>
<span class="text-[12px] text-on-surface-variant">12</span>
</div>
</div>
</div>
</div>
<!-- Comment 2 -->
<div class="flex gap-3">
<div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A profile photo of Michael A., a male professional with a confident smile, wearing a dark green polo shirt. The lighting is crisp and modern, reflecting a premium mobile app user profile style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjX0JhuhVml-feZwtODirVGnazjomH0_u0OuRE4b52Q2pxZW5oYnAo_YE5QIiv9aWj6fMw2ebBoTvYkFiXL2m_wetSjB3ZsG3HeKKiBbN8ZZs3Hi9QSnpldWhbMVA1rXdDk_anhmLvrDOJaNIIEhFXTkVQm0GbWN99q_36Kauq8PR67Negd3X9wWSzyuLwIVP6KvYOjsIdr6CcpWWL-J6cibRoY7pyLGfDC8PMTbC3RFRr43HD_Wh61xYr2hTaqLosRh16RGflspGj"/>
</div>
<div class="flex-1">
<div class="bg-white p-3 rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-outline-variant/30">
<h5 class="text-body-sm font-bold text-on-background mb-1">Michael A.</h5>
<p class="text-body-sm text-on-surface">Together for a cleaner Cameroon! 🇨🇲 Keep inspiring others Esther.</p>
</div>
<div class="mt-2 ml-2 flex items-center gap-4">
<span class="text-[12px] font-bold text-on-surface-variant">58m ago</span>
<button class="text-[12px] font-bold text-primary">Reply</button>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[14px] text-on-surface-variant">thumb_up</span>
<span class="text-[12px] text-on-surface-variant">5</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Comment Input Field -->
<div class="fixed bottom-20 w-full bg-surface-container-low px-margin-mobile py-3 border-t border-outline-variant/20 z-40">
<div class="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm border border-outline-variant/40">
<div class="w-8 h-8 rounded-full overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="A close-up profile picture of a Cameroonian user, looking friendly and engaged, framed in a clean circular crop for a mobile interface avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfGUl__7kVXHfsgDoZBQQ8EMIJ_KqYyWIta0tMiQ7qRapSUb59LSItYumVSGL6mLniQ6MPiYsz5EENrDBxtmmPEGH92AOi2InQd2NDpKB2HQhcUubxEVrqO-z-CKpteAiQ_gDOrbgl6X6SWqleVAOit3huWEjtbZtwUCyjSV56YRxQP6dLp1IGWoLFgwdILEXn23gc9cuiX79YJ32Lr8c8p5yOiU76uWl73vLi2UfdhYnBMuYyjQ0cgCctnYiw5T8-dI61MAMbjH3X"/>
</div>
<input class="flex-1 border-none focus:ring-0 text-body-sm text-on-background placeholder-on-surface-variant p-0" placeholder="Add a comment..." type="text"/>
<button class="p-1 text-primary hover:bg-primary-container/10 rounded-full transition-colors active:scale-90">
<span class="material-symbols-outlined">send</span>
</button>
</div>
</div>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-xs py-base bg-surface shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] h-20">
<!-- Explore (Active based on prompt) -->
<a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined" data-weight="fill">explore</span>
<span class="font-label-caps text-label-caps">Explore</span>
</a>
<!-- EcoQuest -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">nature_people</span>
<span class="font-label-caps text-label-caps">EcoQuest</span>
</a>
<!-- Home -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">home</span>
<span class="font-label-caps text-label-caps">Home</span>
</a>
<!-- Rewards -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">workspace_premium</span>
<span class="font-label-caps text-label-caps">Rewards</span>
</a>
<!-- Profile -->
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined">person</span>
<span class="font-label-caps text-label-caps">Profile</span>
</a>
</nav>
<script>
        // Simple micro-interaction for the follow button
        const followBtn = document.querySelector('button.bg-primary-container');
        followBtn.addEventListener('click', () => {
            if (followBtn.innerText === 'Follow') {
                followBtn.innerText = 'Following';
                followBtn.classList.remove('bg-primary-container', 'text-on-primary-container');
                followBtn.classList.add('bg-outline-variant', 'text-on-surface-variant');
            } else {
                followBtn.innerText = 'Follow';
                followBtn.classList.add('bg-primary-container', 'text-on-primary-container');
                followBtn.classList.remove('bg-outline-variant', 'text-on-surface-variant');
            }
        });

        // Like button toggle
        const likeSection = document.querySelector('.group.cursor-pointer');
        likeSection.addEventListener('click', () => {
            const icon = likeSection.querySelector('.material-symbols-outlined');
            const count = likeSection.querySelector('span:last-child');
            let currentLikes = parseInt(count.innerText);
            
            if (icon.getAttribute('data-weight') === 'fill') {
                icon.style.fontVariationSettings = "'FILL' 0";
                icon.removeAttribute('data-weight');
                icon.classList.remove('text-primary');
                icon.classList.add('text-on-surface-variant');
                count.innerText = currentLikes - 1;
            } else {
                icon.style.fontVariationSettings = "'FILL' 1";
                icon.setAttribute('data-weight', 'fill');
                icon.classList.add('text-primary');
                icon.classList.remove('text-on-surface-variant');
                count.innerText = currentLikes + 1;
            }
        });
    <\/script>
</body></html>`;function $m(){const{toggleLike:s}=it();return m.jsx(qn,{html:Hg,pageId:"post_detail",resolveNav:xg,onLike:()=>s("post-1"),onShare:()=>oc("EcoLink Post","Proud to have completed the Community Environmental Leadership Program!")})}const Ug=`<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>EcoLink Cameroon - My Impact Journey</title>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Inter', sans-serif;
            -webkit-tap-highlight-color: transparent;
        }
        .premium-card-shadow {
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
        }
        .glass-overlay {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.4);
        }
        /* Custom scrollbar for horizontal sections */
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed-variant": "#7a2c38",
                        "secondary": "#006d36",
                        "on-background": "#181d18",
                        "secondary-fixed-dim": "#73dc91",
                        "surface-container": "#ebefe8",
                        "on-tertiary-container": "#ffcace",
                        "inverse-on-surface": "#eef2eb",
                        "outline-variant": "#bfc9be",
                        "surface-container-highest": "#e0e4dd",
                        "on-secondary": "#ffffff",
                        "on-secondary-container": "#007239",
                        "on-surface": "#181d18",
                        "secondary-container": "#8cf6a8",
                        "primary-fixed-dim": "#87d89c",
                        "tertiary-fixed-dim": "#ffb2b9",
                        "surface-container-lowest": "#ffffff",
                        "on-primary": "#ffffff",
                        "outline": "#6f7a70",
                        "surface-variant": "#e0e4dd",
                        "on-primary-fixed-variant": "#005229",
                        "on-surface-variant": "#3f4940",
                        "error-container": "#ffdad6",
                        "on-primary-fixed": "#00210d",
                        "inverse-primary": "#87d89c",
                        "tertiary-fixed": "#ffdadc",
                        "primary-container": "#146b3a",
                        "on-error": "#ffffff",
                        "tertiary": "#792b38",
                        "background": "#f7fbf3",
                        "surface-tint": "#166c3b",
                        "on-error-container": "#93000a",
                        "primary-fixed": "#a2f5b6",
                        "surface-dim": "#d7dbd4",
                        "surface-bright": "#f7fbf3",
                        "inverse-surface": "#2d322d",
                        "primary": "#005128",
                        "secondary-fixed": "#8ff9ab",
                        "surface-container-high": "#e5e9e2",
                        "error": "#ba1a1a",
                        "surface-container-low": "#f1f5ed",
                        "on-primary-container": "#97e9ab",
                        "on-secondary-fixed-variant": "#005227",
                        "on-tertiary-fixed": "#400010",
                        "tertiary-container": "#97424e",
                        "surface": "#f7fbf3",
                        "on-secondary-fixed": "#00210c",
                        "on-tertiary": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "16px",
                        "3xl": "24px",
                        "full": "9999px"
                    },
                    "spacing": {
                        "xs": "8px",
                        "gutter-mobile": "16px",
                        "xl": "48px",
                        "md": "24px",
                        "margin-mobile": "20px",
                        "sm": "16px",
                        "lg": "32px",
                        "base": "4px"
                    },
                    "fontFamily": {
                        "headline-md": ["Inter"],
                        "label-caps": ["Inter"],
                        "display-lg-mobile": ["Inter"],
                        "body-lg": ["Inter"],
                        "body-sm": ["Inter"],
                        "display-lg": ["Inter"]
                    },
                    "fontSize": {
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                        "display-lg-mobile": ["28px", {"lineHeight": "34px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "display-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
                    }
                },
            },
        }
    <\/script>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-surface">
<!-- Top App Bar -->
<header class="flex justify-between items-center w-full px-margin-mobile h-16 fixed top-0 z-50 bg-background dark:bg-background">
<h1 class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">EcoLink Cameroon</h1>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-primary hover:opacity-80 active:scale-95 transition-transform" data-icon="notifications">notifications</button>
<div class="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
<img class="w-full h-full object-cover" data-alt="A professional headshot of Michael, a smiling Cameroonian environmentalist, in high-key natural lighting. The image is crisp with soft shadows, reflecting a modern corporate aesthetic. He wears a clean white collared shirt, and the background is a soft-focus greenery that hints at nature conservation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3T-oX3pJS74KMlMnYmHmlK0cjfc17wtxdd32vJ3Ji9RQabLufgo5heFblpVk2gu7dDfvSESODnIZuOHXXWjZcoskE82FHWb4drBq8mUJAAA5J1kcULlPfziril8PLES0DFLo7p-FfvX2BSbH-UY5ZYDFXvrIDgq6CPlsbjLROBjC8IrRKd5okR6nmscJSRDS9_opYJpcRMHXmbn8Yph7VMsKcRIw5aBJ0qM0PxHybtzgCYRhP1um0RppEDaDN29lcB2hu5IGKUjj4"/>
</div>
</div>
</header>
<!-- Main Content Canvas -->
<main class="pt-20 pb-28 px-margin-mobile flex flex-col gap-md">
<!-- Header Section -->
<section>
<h2 class="font-display-lg-mobile text-display-lg-mobile text-on-surface">My Impact Journey</h2>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">Every action creates a greener tomorrow.</p>
</section>
<!-- Premium Level Card (Level 12 Eco Champion) -->
<section class="relative overflow-hidden bg-primary p-md rounded-3xl premium-card-shadow text-on-primary">
<!-- Background Decorative Texture -->
<div class="absolute top-0 right-0 w-32 h-32 opacity-10 -mr-8 -mt-8">
<span class="material-symbols-outlined text-[120px]" data-icon="auto_awesome">auto_awesome</span>
</div>
<div class="flex justify-between items-start">
<div class="flex flex-col">
<span class="font-label-caps text-label-caps uppercase opacity-80 tracking-widest">Your Impact Level</span>
<h3 class="font-display-lg-mobile text-display-lg-mobile mt-1">Level 12</h3>
<p class="font-headline-md text-headline-md font-bold text-on-primary-container bg-primary-container px-3 py-1 rounded-full w-fit mt-2">Eco Champion</p>
</div>
<div class="w-24 h-24 flex items-center justify-center bg-white/10 rounded-full border-2 border-white/20 backdrop-blur-sm">
<span class="material-symbols-outlined text-6xl text-on-primary" data-icon="workspace_premium" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
</div>
</div>
<div class="mt-8">
<div class="flex justify-between text-body-sm mb-2">
<span class="font-body-sm">2,450 XP to Level 13</span>
<span class="font-bold">82%</span>
</div>
<div class="w-full h-3 bg-white/20 rounded-full overflow-hidden">
<div class="h-full bg-secondary-fixed rounded-full" style="width: 82%;"></div>
</div>
</div>
</section>
<!-- Bento Grid: Impact Highlights -->
<section class="grid grid-cols-2 gap-sm">
<!-- Tree Planting Chart Card (Spans 2 columns for impact) -->
<div class="col-span-2 bg-surface p-sm rounded-2xl border border-outline-variant premium-card-shadow">
<div class="flex justify-between items-center mb-md">
<h4 class="font-headline-md text-headline-md">Your Impact This Year</h4>
<button class="text-primary font-bold text-body-sm">View All</button>
</div>
<div class="flex items-end justify-around h-32 gap-4 px-2">
<!-- Simple Bar Chart -->
<div class="flex flex-col items-center flex-1">
<div class="w-full bg-primary-container rounded-t-lg" style="height: 40%;"></div>
<span class="font-label-caps text-[10px] mt-2">JAN</span>
</div>
<div class="flex flex-col items-center flex-1">
<div class="w-full bg-primary-container rounded-t-lg" style="height: 65%;"></div>
<span class="font-label-caps text-[10px] mt-2">FEB</span>
</div>
<div class="flex flex-col items-center flex-1">
<div class="w-full bg-primary rounded-t-lg" style="height: 90%;"></div>
<span class="font-label-caps text-[10px] mt-2">MAR</span>
</div>
<div class="flex flex-col items-center flex-1">
<div class="w-full bg-primary-container rounded-t-lg" style="height: 55%;"></div>
<span class="font-label-caps text-[10px] mt-2">APR</span>
</div>
<div class="flex flex-col items-center flex-1">
<div class="w-full bg-primary-container rounded-t-lg" style="height: 75%;"></div>
<span class="font-label-caps text-[10px] mt-2">MAY</span>
</div>
</div>
</div>
<!-- Stats Grid -->
<div class="bg-surface p-sm rounded-2xl border border-outline-variant premium-card-shadow flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-secondary mb-1" data-icon="nature">nature</span>
<span class="font-display-lg-mobile text-display-lg-mobile">187</span>
<span class="font-label-caps text-on-surface-variant">Trees Planted</span>
</div>
<div class="bg-surface p-sm rounded-2xl border border-outline-variant premium-card-shadow flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-secondary mb-1" data-icon="recycling">recycling</span>
<span class="font-display-lg-mobile text-display-lg-mobile">325<small class="text-sm">kg</small></span>
<span class="font-label-caps text-on-surface-variant">Waste Recycled</span>
</div>
<div class="bg-surface p-sm rounded-2xl border border-outline-variant premium-card-shadow flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-secondary mb-1" data-icon="timer">timer</span>
<span class="font-display-lg-mobile text-display-lg-mobile">42<small class="text-sm">h</small></span>
<span class="font-label-caps text-on-surface-variant">Volunteer Hours</span>
</div>
<div class="bg-surface p-sm rounded-2xl border border-outline-variant premium-card-shadow flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-secondary mb-1" data-icon="water_drop">water_drop</span>
<span class="font-display-lg-mobile text-display-lg-mobile">4,500<small class="text-sm">L</small></span>
<span class="font-label-caps text-on-surface-variant">Water Saved</span>
</div>
</section>
<!-- EcoPoints Balance Card -->
<section class="bg-secondary-container p-md rounded-2xl flex justify-between items-center premium-card-shadow">
<div>
<span class="font-label-caps text-on-secondary-container uppercase">Your EcoPoints</span>
<div class="flex items-center gap-2 mt-1">
<span class="material-symbols-outlined text-on-secondary-container" data-icon="token" style="font-variation-settings: 'FILL' 1;">token</span>
<h4 class="font-display-lg text-display-lg text-on-secondary-container">8,450</h4>
</div>
<p class="font-body-sm text-on-secondary-container/70">Available Balance</p>
</div>
<button class="bg-primary text-on-primary font-bold px-lg py-sm rounded-full active:scale-95 transition-transform">
                View Rewards
            </button>
</section>
<!-- Impact Milestones (Timeline) -->
<section class="flex flex-col gap-sm">
<div class="flex justify-between items-center">
<h4 class="font-headline-md text-headline-md">Impact Milestones</h4>
<button class="text-primary font-bold text-body-sm">View All</button>
</div>
<div class="bg-surface p-md rounded-2xl border border-outline-variant premium-card-shadow space-y-md">
<!-- Milestone 1 -->
<div class="flex gap-md relative">
<div class="flex flex-col items-center">
<div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center z-10 shadow-sm">
<span class="material-symbols-outlined text-sm" data-icon="check">check</span>
</div>
<div class="w-0.5 h-full bg-outline-variant absolute top-8 left-4 -z-0"></div>
</div>
<div class="flex flex-col flex-1 pb-4">
<h5 class="font-body-lg font-bold">First Tree Planted</h5>
<p class="font-body-sm text-on-surface-variant">Limbe Coastal Reforestation Project</p>
<span class="font-label-caps text-secondary mt-1">COMPLETED</span>
</div>
</div>
<!-- Milestone 2 -->
<div class="flex gap-md relative">
<div class="flex flex-col items-center">
<div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center z-10 shadow-sm">
<span class="material-symbols-outlined text-sm" data-icon="check">check</span>
</div>
<div class="w-0.5 h-full bg-outline-variant absolute top-8 left-4 -z-0"></div>
</div>
<div class="flex flex-col flex-1 pb-4">
<h5 class="font-body-lg font-bold">100 EcoPoints Earned</h5>
<p class="font-body-sm text-on-surface-variant">Consistent waste segregation streak</p>
<span class="font-label-caps text-secondary mt-1">COMPLETED</span>
</div>
</div>
<!-- Milestone 3 -->
<div class="flex gap-md relative">
<div class="flex flex-col items-center">
<div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center z-10 shadow-sm">
<span class="material-symbols-outlined text-sm" data-icon="check">check</span>
</div>
<div class="w-0.5 h-full bg-outline-variant absolute top-8 left-4 -z-0"></div>
</div>
<div class="flex flex-col flex-1 pb-4">
<h5 class="font-body-lg font-bold">Community Volunteer</h5>
<p class="font-body-sm text-on-surface-variant">Douala River Cleanup Initiative</p>
<span class="font-label-caps text-secondary mt-1">COMPLETED</span>
</div>
</div>
<!-- Milestone 4 (In Progress) -->
<div class="flex gap-md relative">
<div class="flex flex-col items-center">
<div class="w-8 h-8 rounded-full border-2 border-primary text-primary flex items-center justify-center z-10 bg-white">
<span class="material-symbols-outlined text-sm" data-icon="pending">pending</span>
</div>
<div class="w-0.5 h-full bg-outline-variant absolute top-8 left-4 -z-0"></div>
</div>
<div class="flex flex-col flex-1 pb-4">
<h5 class="font-body-lg font-bold">500kg Waste Recycled</h5>
<p class="font-body-sm text-on-surface-variant">Currently at 325kg</p>
<span class="font-label-caps text-on-surface-variant mt-1">IN PROGRESS</span>
</div>
</div>
</div>
</section>
<!-- Achievement Badges (Premium Grid) -->
<section class="flex flex-col gap-sm">
<div class="flex justify-between items-center">
<h4 class="font-headline-md text-headline-md">My Badges</h4>
<button class="text-primary font-bold text-body-sm">View All</button>
</div>
<div class="grid grid-cols-4 gap-sm">
<div class="aspect-square bg-surface border border-outline-variant rounded-2xl flex flex-col items-center justify-center premium-card-shadow">
<span class="material-symbols-outlined text-3xl text-secondary" data-icon="forest" style="font-variation-settings: 'FILL' 1;">forest</span>
</div>
<div class="aspect-square bg-surface border border-outline-variant rounded-2xl flex flex-col items-center justify-center premium-card-shadow">
<span class="material-symbols-outlined text-3xl text-primary" data-icon="shield_with_heart" style="font-variation-settings: 'FILL' 1;">shield_with_heart</span>
</div>
<div class="aspect-square bg-surface border border-outline-variant rounded-2xl flex flex-col items-center justify-center premium-card-shadow">
<span class="material-symbols-outlined text-3xl text-secondary-fixed-dim" data-icon="energy_savings_leaf" style="font-variation-settings: 'FILL' 1;">energy_savings_leaf</span>
</div>
<div class="aspect-square bg-surface border border-outline-variant rounded-2xl flex flex-col items-center justify-center premium-card-shadow">
<span class="material-symbols-outlined text-3xl text-on-tertiary-fixed-variant" data-icon="stars" style="font-variation-settings: 'FILL' 1;">stars</span>
</div>
<div class="aspect-square bg-surface border border-outline-variant rounded-2xl flex flex-col items-center justify-center premium-card-shadow opacity-40">
<span class="material-symbols-outlined text-3xl text-outline" data-icon="lock">lock</span>
</div>
<div class="aspect-square bg-surface border border-outline-variant rounded-2xl flex flex-col items-center justify-center premium-card-shadow opacity-40">
<span class="material-symbols-outlined text-3xl text-outline" data-icon="lock">lock</span>
</div>
</div>
</section>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-xs py-base bg-surface dark:bg-surface-container-low h-20 shadow-[0px_-4px_20px_rgba(0,0,0,0.05)]">
<!-- Explore -->
<a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant p-2 hover:bg-surface-container-highest dark:hover:bg-surface-variant rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined" data-icon="explore">explore</span>
<span class="font-label-caps text-label-caps mt-1">Explore</span>
</a>
<!-- EcoQuest -->
<a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant p-2 hover:bg-surface-container-highest dark:hover:bg-surface-variant rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined" data-icon="nature_people">nature_people</span>
<span class="font-label-caps text-label-caps mt-1">EcoQuest</span>
</a>
<!-- Home -->
<a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant p-2 hover:bg-surface-container-highest dark:hover:bg-surface-variant rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="font-label-caps text-label-caps mt-1">Home</span>
</a>
<!-- Rewards (Active) -->
<a class="flex flex-col items-center justify-center bg-primary-container dark:bg-primary-container text-on-primary-container dark:text-on-primary-container rounded-full px-4 py-1 active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined" data-icon="workspace_premium" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
<span class="font-label-caps text-label-caps mt-1">Rewards</span>
</a>
<!-- Profile -->
<a class="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant p-2 hover:bg-surface-container-highest dark:hover:bg-surface-variant rounded-full transition-colors active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-label-caps text-label-caps mt-1">Profile</span>
</a>
</nav>
<script>
        // Simple Interaction logic for active state toggles or micro-animations
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                // If we were building a multi-page app, we'd handle navigation here.
                // For this demo, we just simulate the active state.
            });
        });
    <\/script>
</body></html>`;function kg(){return m.jsx(qn,{html:Ug,pageId:"my_impact_journey",resolveNav:wg})}const qg=`<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>EcoLink Cameroon - Notifications</title>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<!-- Google Fonts: Inter -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols Outlined -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .active-dot {
            width: 8px;
            height: 8px;
            background-color: #34C759;
            border-radius: 50%;
        }
        body {
            font-family: 'Inter', sans-serif;
            -webkit-tap-highlight-color: transparent;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed-variant": "#7a2c38",
                        "secondary": "#006d36",
                        "on-background": "#181d18",
                        "secondary-fixed-dim": "#73dc91",
                        "surface-container": "#ebefe8",
                        "on-tertiary-container": "#ffcace",
                        "inverse-on-surface": "#eef2eb",
                        "outline-variant": "#bfc9be",
                        "surface-container-highest": "#e0e4dd",
                        "on-secondary": "#ffffff",
                        "on-secondary-container": "#007239",
                        "on-surface": "#181d18",
                        "secondary-container": "#8cf6a8",
                        "primary-fixed-dim": "#87d89c",
                        "tertiary-fixed-dim": "#ffb2b9",
                        "surface-container-lowest": "#ffffff",
                        "on-primary": "#ffffff",
                        "outline": "#6f7a70",
                        "surface-variant": "#e0e4dd",
                        "on-primary-fixed-variant": "#005229",
                        "on-surface-variant": "#3f4940",
                        "error-container": "#ffdad6",
                        "on-primary-fixed": "#00210d",
                        "inverse-primary": "#87d89c",
                        "tertiary-fixed": "#ffdadc",
                        "primary-container": "#146b3a",
                        "on-error": "#ffffff",
                        "tertiary": "#792b38",
                        "background": "#f7fbf3",
                        "surface-tint": "#166c3b",
                        "on-error-container": "#93000a",
                        "primary-fixed": "#a2f5b6",
                        "surface-dim": "#d7dbd4",
                        "surface-bright": "#f7fbf3",
                        "inverse-surface": "#2d322d",
                        "primary": "#005128",
                        "secondary-fixed": "#8ff9ab",
                        "surface-container-high": "#e5e9e2",
                        "error": "#ba1a1a",
                        "surface-container-low": "#f1f5ed",
                        "on-primary-container": "#97e9ab",
                        "on-secondary-fixed-variant": "#005227",
                        "on-tertiary-fixed": "#400010",
                        "tertiary-container": "#97424e",
                        "surface": "#f7fbf3",
                        "on-secondary-fixed": "#00210c",
                        "on-tertiary": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "xs": "8px",
                        "gutter-mobile": "16px",
                        "xl": "48px",
                        "md": "24px",
                        "margin-mobile": "20px",
                        "sm": "16px",
                        "lg": "32px",
                        "base": "4px"
                    },
                    "fontFamily": {
                        "headline-md": ["Inter"],
                        "label-caps": ["Inter"],
                        "display-lg-mobile": ["Inter"],
                        "body-lg": ["Inter"],
                        "body-sm": ["Inter"],
                        "display-lg": ["Inter"]
                    },
                    "fontSize": {
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                        "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                        "display-lg-mobile": ["28px", {"lineHeight": "34px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "display-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
                    }
                }
            }
        }
    <\/script>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background min-h-screen pb-24">
<!-- Top AppBar -->
<header class="sticky top-0 z-50 bg-background/80 backdrop-blur-md flex justify-between items-center w-full px-margin-mobile h-16">
<div class="flex items-center gap-4">
<button aria-label="Go Back" class="p-2 -ml-2 active:scale-95 transition-transform">
<span class="material-symbols-outlined text-on-surface">arrow_back</span>
</button>
<h1 class="font-headline-md text-headline-md font-bold text-primary">Notifications</h1>
</div>
<button class="p-2 -mr-2 active:scale-95 transition-transform">
<span class="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</header>
<main class="px-margin-mobile">
<!-- Segmented Control Chips -->
<div class="flex gap-2 py-md overflow-x-auto no-scrollbar">
<button class="bg-primary text-on-primary font-label-caps text-label-caps px-4 py-2 rounded-full whitespace-nowrap shadow-sm">
                All
            </button>
<button class="bg-surface-container text-on-surface-variant font-label-caps text-label-caps px-4 py-2 rounded-full whitespace-nowrap hover:bg-surface-container-highest transition-colors">
                Unread
            </button>
<button class="bg-surface-container text-on-surface-variant font-label-caps text-label-caps px-4 py-2 rounded-full whitespace-nowrap hover:bg-surface-container-highest transition-colors">
                Mentions
            </button>
<button class="bg-surface-container text-on-surface-variant font-label-caps text-label-caps px-4 py-2 rounded-full whitespace-nowrap hover:bg-surface-container-highest transition-colors">
                Activity
            </button>
</div>
<!-- Notifications List -->
<div class="space-y-4">
<!-- New Notification -->
<div class="bg-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex gap-4 items-start relative border-l-4 border-secondary">
<div class="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">eco</span>
</div>
<div class="flex-grow">
<div class="flex justify-between items-start">
<h3 class="font-headline-md text-[16px] font-bold text-on-surface">Reward Earned</h3>
<span class="text-[12px] text-outline">10m ago</span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1">You earned 250 EcoPoints for completing "Plant a Tree" challenge. Great job!</p>
</div>
<div class="absolute right-2 top-1/2 -translate-y-1/2">
<div class="active-dot"></div>
</div>
</div>
<!-- Event Reminder -->
<div class="bg-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex gap-4 items-start relative border-l-4 border-primary-container">
<div class="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">calendar_today</span>
</div>
<div class="flex-grow">
<div class="flex justify-between items-start">
<h3 class="font-headline-md text-[16px] font-bold text-on-surface">Event Reminder</h3>
<span class="text-[12px] text-outline">1h ago</span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1">Limbe Coastal Cleanup starts tomorrow at 8:00 AM. Don't forget your gear!</p>
</div>
<div class="absolute right-2 top-1/2 -translate-y-1/2">
<div class="active-dot"></div>
</div>
</div>
<!-- Certificate Available -->
<div class="bg-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex gap-4 items-start border-l-4 border-outline-variant">
<div class="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-on-surface-variant" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
</div>
<div class="flex-grow">
<div class="flex justify-between items-start">
<h3 class="font-headline-md text-[16px] font-bold text-on-surface">Certificate Available</h3>
<span class="text-[12px] text-outline">3h ago</span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1">Your certificate for Environmental Leadership is ready for download.</p>
</div>
</div>
<!-- New Achievement -->
<div class="bg-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex gap-4 items-start border-l-4 border-secondary-fixed-dim">
<div class="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">trophy</span>
</div>
<div class="flex-grow">
<div class="flex justify-between items-start">
<h3 class="font-headline-md text-[16px] font-bold text-on-surface">New Achievement</h3>
<span class="text-[12px] text-outline">5h ago</span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1">Congratulations! You earned the "Tree Guardian" badge for your consistency.</p>
</div>
</div>
<!-- NGO Announcement -->
<div class="bg-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex gap-4 items-start">
<div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="A professional NGO logo for WWF with a minimalist panda design, set against a clean white background in a corporate circular profile format. High fidelity digital logo art." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoqS6fwM3FIN2KI9_yNK7-61ABBRLeHcaSeWyHQJa-lEJ3dyhOzkigZz_ziZlBHJdRR-oEtv8hhlAwrzOgLbi05nrtqIsmj8ql-dZQe96qnj5E4NqbivSfE0EuiKvN8yhCS0emaPuiwOrhY95_nL37o-zCuOuJPGpUovjLX9NKDpGuR53RbH9RXwp3lokScb-xposzf1YSu2Mk07vNVQkhYml-7kncyWCap7bpoTTwZAno4LMY3o2lrzcb9SnbwOwvsCf3ZnOADidU"/>
</div>
<div class="flex-grow">
<div class="flex justify-between items-start">
<h3 class="font-headline-md text-[16px] font-bold text-on-surface">NGO Announcement</h3>
<span class="text-[12px] text-outline">1d ago</span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1">WWF Cameroon launched a new sustainability challenge. Join now to earn extra rewards!</p>
</div>
</div>
</div>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-xs py-base bg-surface shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] h-20">
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-colors rounded-full" href="#">
<span class="material-symbols-outlined">explore</span>
<span class="font-label-caps text-label-caps">Explore</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-colors rounded-full" href="#">
<span class="material-symbols-outlined">nature_people</span>
<span class="font-label-caps text-label-caps">EcoQuest</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-colors rounded-full" href="#">
<span class="material-symbols-outlined">home</span>
<span class="font-label-caps text-label-caps">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest transition-colors rounded-full" href="#">
<span class="material-symbols-outlined">workspace_premium</span>
<span class="font-label-caps text-label-caps">Rewards</span>
</a>
<a class="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 active:scale-90 duration-150" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">person</span>
<span class="font-label-caps text-label-caps">Profile</span>
</a>
</nav>
<script>
        // Micro-interaction for notification items
        document.querySelectorAll('.rounded-xl').forEach(card => {
            card.addEventListener('click', function() {
                this.classList.add('scale-[0.98]');
                setTimeout(() => {
                    this.classList.remove('scale-[0.98]');
                    // Simulate marking as read
                    const dot = this.querySelector('.active-dot');
                    if (dot) {
                        dot.style.opacity = '0';
                        setTimeout(() => dot.remove(), 300);
                    }
                }, 100);
            });
        });

        // Chip selection logic
        const chips = document.querySelectorAll('.rounded-full[class*="font-label-caps"]');
        chips.forEach(chip => {
            chip.addEventListener('click', function() {
                if(this.closest('nav')) return; // Ignore nav items
                
                chips.forEach(c => {
                    if(!c.closest('nav')) {
                        c.classList.remove('bg-primary', 'text-on-primary');
                        c.classList.add('bg-surface-container', 'text-on-surface-variant');
                    }
                });
                this.classList.remove('bg-surface-container', 'text-on-surface-variant');
                this.classList.add('bg-primary', 'text-on-primary');
            });
        });
    <\/script>
</body></html>`;function Yg(){const{markNotificationRead:s}=it(),c=(f,o)=>{const d=f.closest(".rounded-xl");if(d){const p=[...o.querySelectorAll(".rounded-xl")].indexOf(d);p>=0&&s(String(p+1))}return Eg(f)};return m.jsx(qn,{html:qg,pageId:"notifications",resolveNav:c})}function Gg(){return m.jsx($m,{})}function Xg(){const s=Xt(),{draftPost:c,setDraftPost:f}=it();return m.jsxs("div",{className:"min-h-screen bg-background",children:[m.jsx(rc,{title:"Create Post"}),m.jsxs("main",{className:"pt-20 px-margin-mobile pb-12 max-w-2xl mx-auto",children:[m.jsx("textarea",{value:c,onChange:o=>f(o.target.value),placeholder:"Share your environmental impact story...",className:"w-full h-48 bg-white rounded-2xl p-4 border border-outline-variant text-body-lg resize-none focus:ring-2 focus:ring-primary-container"}),m.jsx("button",{type:"button",onClick:()=>{f(""),s(w.community)},className:"w-full mt-md bg-primary text-on-primary py-3 rounded-2xl font-bold active:scale-[0.98] transition-transform",children:"Publish"})]})]})}function Qg(){return m.jsx(Me,{title:"Challenge Details",subtitle:"Plant a Tree — Plant and nurture a tree in your community.",backTo:w.ecoquest,icon:"nature_people",actions:[{label:"Join Challenge",route:w.challengeRegistration},{label:"View Leaderboard",route:w.leaderboard},{label:"View Rewards",route:w.rewards}]})}function Vg(){return m.jsx(Me,{title:"Challenge Registration",subtitle:"Confirm your participation in this EcoQuest challenge.",backTo:w.challengeDetail,icon:"how_to_reg",actions:[{label:"Confirm Registration",route:w.rewards}]})}function Zg(){return m.jsx(Me,{title:"Rewards",subtitle:"Redeem your 8,450 EcoPoints for exclusive environmental rewards.",backTo:w.home,icon:"workspace_premium",actions:[{label:"View Certificates",route:w.certificate},{label:"My Impact Journey",route:w.myImpact}]})}function Jg(){return m.jsx(Me,{title:"Leaderboard",subtitle:"Top Eco Champions across Cameroon this month.",backTo:w.ecoquest,icon:"leaderboard"})}function Kg(){return m.jsx(Me,{title:"Detailed Analytics",subtitle:"In-depth charts and statistics about your environmental impact.",backTo:w.myImpact,icon:"analytics"})}function Wg(){return m.jsx(Me,{title:"Edit Profile",subtitle:"Update your photo, bio, and personal details.",backTo:w.profile,icon:"person_edit"})}function Fg(){var p;const s=Xt(),{selected:c,setSelected:f}=it(),o=((p=c.categoryId)==null?void 0:p.replace(/-/g," ").replace(/\b\w/g,v=>v.toUpperCase()))??"Category",d=["Understanding Climate Change in Central Africa","Community-Led Conservation","Urban Gardening in Yaoundé"];return m.jsxs("div",{className:"min-h-screen bg-background",children:[m.jsx(rc,{title:o,onBack:()=>s(w.learn)}),m.jsx("main",{className:"pt-20 px-margin-mobile pb-12 max-w-2xl mx-auto space-y-4",children:d.map((v,_)=>m.jsxs("button",{type:"button",onClick:()=>{f({articleId:`article-${_+1}`}),s(w.learnArticle)},className:"w-full bg-white rounded-2xl p-4 shadow-soft flex items-center justify-between text-left active:scale-[0.98] transition-transform",children:[m.jsx("span",{className:"font-bold text-body-lg text-on-surface",children:v}),m.jsx(lt,{name:"chevron_right",className:"text-outline"})]},v))})]})}function Ig(){const s=Xt(),{toggleBookmarkArticle:c,selected:f}=it();return m.jsxs("div",{className:"min-h-screen bg-background",children:[m.jsx(rc,{title:"Article",onBack:()=>s(w.learnCategory),right:m.jsxs("div",{className:"flex gap-2",children:[m.jsx("button",{type:"button",onClick:()=>c(f.articleId??"article-1"),className:"p-2 rounded-full hover:bg-surface-variant",children:m.jsx(lt,{name:"bookmark",className:"text-primary"})}),m.jsx("button",{type:"button",onClick:()=>oc("EcoLink Article","Read this on EcoLink Cameroon"),className:"p-2 rounded-full hover:bg-surface-variant",children:m.jsx(lt,{name:"share",className:"text-on-surface-variant"})})]})}),m.jsxs("main",{className:"pt-20 px-margin-mobile pb-12 max-w-2xl mx-auto",children:[m.jsx("h2",{className:"font-display-lg-mobile text-display-lg-mobile font-bold mb-4",children:"Sustainable Living in Cameroon"}),m.jsx("p",{className:"text-body-lg text-on-surface-variant leading-relaxed mb-6",children:"Discover practical ways to reduce your environmental footprint while supporting local communities across Cameroon."}),m.jsx("button",{type:"button",onClick:()=>s(w.learnArticle),className:"text-primary font-bold text-body-sm",children:"Related: Water Conservation Tips →"})]})]})}function $g(){return m.jsx(Me,{title:"Saved Opportunities",subtitle:"Your bookmarked volunteer opportunities.",backTo:w.profile,icon:"bookmark"})}function Pg(){return m.jsx(Me,{title:"Saved Articles",subtitle:"Articles you have bookmarked for later.",backTo:w.learn,icon:"bookmarks"})}function ev(){return m.jsx(Me,{title:"Certificate Viewer",subtitle:"View and download your environmental achievement certificates.",backTo:w.profile,icon:"workspace_premium"})}function tv(){return m.jsx(Me,{title:"Public Profile",subtitle:"View community member profile and activity.",backTo:w.community,icon:"person"})}function nv(){return m.jsx(Me,{title:"Registration",subtitle:"Register for this environmental opportunity.",backTo:w.opportunityDetail,icon:"how_to_reg",actions:[{label:"Confirm Registration",route:w.explore}]})}function av(){return m.jsx(Me,{title:"Organization Information",subtitle:"Learn about the organizing NGO.",backTo:w.opportunityDetail,icon:"business"})}function lv(){return m.jsx(Me,{title:"Map View",subtitle:"Event location on the map.",backTo:w.opportunityDetail,icon:"map"})}function iv(){return m.jsx(Me,{title:"Image Viewer",subtitle:"Full-screen image gallery.",backTo:w.postDetail,icon:"image"})}function sv(){return m.jsx(Me,{title:"Comment Thread",subtitle:"View and reply to comments.",backTo:w.postDetail,icon:"chat_bubble"})}function rv(){return m.jsx(Me,{title:"Achievement Details",subtitle:"Tree Guardian badge — earned for consistency.",backTo:w.myImpact,icon:"trophy"})}function ov(){return m.jsx(Me,{title:"Badge Details",subtitle:"Green Pioneer — planted 50+ trees.",backTo:w.myImpact,icon:"military_tech"})}function cv(){return m.jsx(Me,{title:"System Notification",subtitle:"App update and system information.",backTo:w.notifications,icon:"info"})}function uv(){return m.jsx(Me,{title:"Preferences",subtitle:"Customize your app experience.",backTo:w.profile,icon:"tune"})}function fv(){return m.jsx(Me,{title:"Notification Settings",subtitle:"Manage push and email notifications.",backTo:w.profile,icon:"notifications_active"})}function dv(){return m.jsx(Me,{title:"Privacy Settings",subtitle:"Control your data and visibility.",backTo:w.profile,icon:"shield"})}function mv(){return m.jsx(Me,{title:"Help Centre",subtitle:"FAQs and support resources.",backTo:w.profile,icon:"help"})}function pv(){return m.jsx(Me,{title:"About EcoLink",subtitle:"Cameroon's premier environmental community platform.",backTo:w.profile,icon:"eco"})}function hv(){const{searchQuery:s}=it();return m.jsx(Me,{title:"Search Results",subtitle:s?`Results for "${s}"`:"Browse search results across opportunities, community, and learning content.",backTo:w.explore,icon:"search",actions:[{label:"Explore Opportunities",route:w.explore},{label:"Community Feed",route:w.community},{label:"Learn & Grow",route:w.learn}]})}function bv(){const{login:s}=it(),c=Xt();return m.jsxs("div",{className:"min-h-screen bg-background flex flex-col items-center justify-center px-margin-mobile",children:[m.jsx(lt,{name:"eco",className:"text-primary text-[64px] mb-4",filled:!0}),m.jsx("h1",{className:"font-display-lg-mobile text-display-lg-mobile font-bold text-primary mb-2",children:"EcoLink Cameroon"}),m.jsx("p",{className:"text-body-sm text-on-surface-variant mb-8 text-center",children:"Every action today creates a greener Cameroon tomorrow."}),m.jsx("button",{type:"button",onClick:()=>{s(),c(w.home)},className:"w-full max-w-sm bg-primary text-on-primary py-3 rounded-2xl font-bold active:scale-[0.98] transition-transform",children:"Sign In"})]})}function yv(){const s=Xt(),{isAuthenticated:c}=it();return m.jsxs("div",{className:"min-h-screen bg-primary-container flex flex-col items-center justify-center",children:[m.jsx(lt,{name:"eco",className:"text-on-primary-container text-[80px] mb-4",filled:!0}),m.jsx("h1",{className:"font-display-lg text-display-lg font-bold text-on-primary-container",children:"EcoLink"}),m.jsx("p",{className:"text-on-primary-container/80 mt-2 mb-12",children:"Cameroon"}),m.jsx("button",{type:"button",onClick:()=>s(c?w.home:w.auth),className:"bg-on-primary text-primary px-8 py-3 rounded-full font-bold active:scale-95 transition-transform",children:"Get Started"})]})}function gv({children:s}){const{isAuthenticated:c}=it();return c?m.jsx(m.Fragment,{children:s}):m.jsx(Zm,{to:w.auth,replace:!0})}function oe({children:s}){return m.jsx(gv,{children:s})}function vv(){return m.jsxs(Ry,{children:[m.jsx(le,{path:w.splash,element:m.jsx(yv,{})}),m.jsx(le,{path:w.auth,element:m.jsx(bv,{})}),m.jsx(le,{path:w.home,element:m.jsx(oe,{children:m.jsx(Xl,{})})}),m.jsx(le,{path:w.explore,element:m.jsx(oe,{children:m.jsx(Xl,{})})}),m.jsx(le,{path:w.ecoquest,element:m.jsx(oe,{children:m.jsx(Xl,{})})}),m.jsx(le,{path:w.learn,element:m.jsx(oe,{children:m.jsx(Xl,{})})}),m.jsx(le,{path:w.profile,element:m.jsx(oe,{children:m.jsx(Xl,{})})}),m.jsx(le,{path:w.community,element:m.jsx(oe,{children:m.jsx(ms,{children:m.jsx(Bg,{})})})}),m.jsx(le,{path:w.postDetail,element:m.jsx(oe,{children:m.jsx(ms,{children:m.jsx($m,{})})})}),m.jsx(le,{path:w.createPost,element:m.jsx(oe,{children:m.jsx(Xg,{})})}),m.jsx(le,{path:w.opportunityDetail,element:m.jsx(oe,{children:m.jsx(ms,{children:m.jsx(Gg,{})})})}),m.jsx(le,{path:w.registration,element:m.jsx(oe,{children:m.jsx(nv,{})})}),m.jsx(le,{path:w.organizationInfo,element:m.jsx(oe,{children:m.jsx(av,{})})}),m.jsx(le,{path:w.mapView,element:m.jsx(oe,{children:m.jsx(lv,{})})}),m.jsx(le,{path:w.challengeDetail,element:m.jsx(oe,{children:m.jsx(Qg,{})})}),m.jsx(le,{path:w.challengeRegistration,element:m.jsx(oe,{children:m.jsx(Vg,{})})}),m.jsx(le,{path:w.rewards,element:m.jsx(oe,{children:m.jsx(Zg,{})})}),m.jsx(le,{path:w.leaderboard,element:m.jsx(oe,{children:m.jsx(Jg,{})})}),m.jsx(le,{path:w.myImpact,element:m.jsx(oe,{children:m.jsx(ms,{children:m.jsx(kg,{})})})}),m.jsx(le,{path:w.analytics,element:m.jsx(oe,{children:m.jsx(Kg,{})})}),m.jsx(le,{path:w.notifications,element:m.jsx(oe,{children:m.jsx(Yg,{})})}),m.jsx(le,{path:w.editProfile,element:m.jsx(oe,{children:m.jsx(Wg,{})})}),m.jsx(le,{path:w.learnCategory,element:m.jsx(oe,{children:m.jsx(Fg,{})})}),m.jsx(le,{path:w.learnArticle,element:m.jsx(oe,{children:m.jsx(Ig,{})})}),m.jsx(le,{path:w.savedOpportunities,element:m.jsx(oe,{children:m.jsx($g,{})})}),m.jsx(le,{path:w.savedArticles,element:m.jsx(oe,{children:m.jsx(Pg,{})})}),m.jsx(le,{path:w.certificate,element:m.jsx(oe,{children:m.jsx(ev,{})})}),m.jsx(le,{path:w.publicProfile,element:m.jsx(oe,{children:m.jsx(tv,{})})}),m.jsx(le,{path:w.imageViewer,element:m.jsx(oe,{children:m.jsx(iv,{})})}),m.jsx(le,{path:w.commentThread,element:m.jsx(oe,{children:m.jsx(sv,{})})}),m.jsx(le,{path:w.achievementDetail,element:m.jsx(oe,{children:m.jsx(rv,{})})}),m.jsx(le,{path:w.badgeDetail,element:m.jsx(oe,{children:m.jsx(ov,{})})}),m.jsx(le,{path:w.systemDetails,element:m.jsx(oe,{children:m.jsx(cv,{})})}),m.jsx(le,{path:w.preferences,element:m.jsx(oe,{children:m.jsx(uv,{})})}),m.jsx(le,{path:w.notificationSettings,element:m.jsx(oe,{children:m.jsx(fv,{})})}),m.jsx(le,{path:w.privacySettings,element:m.jsx(oe,{children:m.jsx(dv,{})})}),m.jsx(le,{path:w.helpCentre,element:m.jsx(oe,{children:m.jsx(mv,{})})}),m.jsx(le,{path:w.about,element:m.jsx(oe,{children:m.jsx(pv,{})})}),m.jsx(le,{path:w.searchResults,element:m.jsx(oe,{children:m.jsx(hv,{})})}),m.jsx(le,{path:"*",element:m.jsx(Zm,{to:w.splash,replace:!0})})]})}function xv(){return m.jsx(ug,{children:m.jsx(eg,{children:m.jsx("div",{className:"min-h-screen bg-background text-on-background max-w-2xl mx-auto relative",children:m.jsx(vv,{})})})})}Ob.createRoot(document.getElementById("root")).render(m.jsx(C.StrictMode,{children:m.jsx(xv,{})}));
