var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function u(e,t,n){let{Kp:r,Ki:i,Kd:a}=e,{m:o,c:s,k:c}=t,{dt:l,steps:u,setpoint:f,noise:p}=n,m=0,h=0,g=0,_=f,v=[];for(let e=0;e<u;e++){let t=m+(p>0?d()*p:0),n=f-t;g+=n*l;let u=(n-_)/l,y=r*n+i*g+a*u,b=(y-s*h-c*m)/o;h+=b*l,m+=h*l,_=n,v.push({t:e*l,x:t,xTrue:m,error:n,F:y})}return v}function d(){let e=0,t=0;for(;e===0;)e=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}function f(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function p(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function m(e){let t,n,r;e.length===2?(t=e===f||e===p?e:h,n=e,r=e):(t=f,n=(t,n)=>f(e(t),n),r=(t,n)=>e(t)-n);function i(e,r,i=0,a=e.length){if(i<a){if(t(r,r)!==0)return a;do{let t=i+a>>>1;n(e[t],r)<0?i=t+1:a=t}while(i<a)}return i}function a(e,r,i=0,a=e.length){if(i<a){if(t(r,r)!==0)return a;do{let t=i+a>>>1;n(e[t],r)<=0?i=t+1:a=t}while(i<a)}return i}function o(e,t,n=0,a=e.length){let o=i(e,t,n,a-1);return o>n&&r(e[o-1],t)>-r(e[o],t)?o-1:o}return{left:i,center:o,right:a}}function h(){return 0}function g(e){return e===null?NaN:+e}var _=m(f),v=_.right;_.left,m(g).center;var y=Math.sqrt(50),b=Math.sqrt(10),x=Math.sqrt(2);function S(e,t,n){let r=(t-e)/Math.max(0,n),i=Math.floor(Math.log10(r)),a=r/10**i,o=a>=y?10:a>=b?5:a>=x?2:1,s,c,l;return i<0?(l=10**-i/o,s=Math.round(e*l),c=Math.round(t*l),s/l<e&&++s,c/l>t&&--c,l=-l):(l=10**i*o,s=Math.round(e/l),c=Math.round(t/l),s*l<e&&++s,c*l>t&&--c),c<s&&.5<=n&&n<2?S(e,t,n*2):[s,c,l]}function C(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];let r=t<e,[i,a,o]=r?S(t,e,n):S(e,t,n);if(!(a>=i))return[];let s=a-i+1,c=Array(s);if(r){if(o<0)for(let e=0;e<s;++e)c[e]=(a-e)/-o;else for(let e=0;e<s;++e)c[e]=(a-e)*o}else if(o<0)for(let e=0;e<s;++e)c[e]=(i+e)/-o;else for(let e=0;e<s;++e)c[e]=(i+e)*o;return c}function w(e,t,n){return t=+t,e=+e,n=+n,S(e,t,n)[2]}function T(e,t,n){t=+t,e=+e,n=+n;let r=t<e,i=r?w(t,e,n):w(e,t,n);return(r?-1:1)*(i<0?1/-i:i)}function E(e,t){let n;if(t===void 0)for(let t of e)t!=null&&(n<t||n===void 0&&t>=t)&&(n=t);else{let r=-1;for(let i of e)(i=t(i,++r,e))!=null&&(n<i||n===void 0&&i>=i)&&(n=i)}return n}function D(e,t){let n;if(t===void 0)for(let t of e)t!=null&&(n>t||n===void 0&&t>=t)&&(n=t);else{let r=-1;for(let i of e)(i=t(i,++r,e))!=null&&(n>i||n===void 0&&i>=i)&&(n=i)}return n}function ee(e,t,n){e=+e,t=+t,n=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+n;for(var r=-1,i=Math.max(0,Math.ceil((t-e)/n))|0,a=Array(i);++r<i;)a[r]=e+r*n;return a}var te={value:()=>{}};function ne(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+``)||r in n||/[\s.]/.test(r))throw Error(`illegal type: `+r);n[r]=[]}return new re(n)}function re(e){this._=e}function ie(e,t){return e.trim().split(/^|\s+/).map(function(e){var n=``,r=e.indexOf(`.`);if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw Error(`unknown type: `+e);return{type:e,name:n}})}re.prototype=ne.prototype={constructor:re,on:function(e,t){var n=this._,r=ie(e+``,n),i,a=-1,o=r.length;if(arguments.length<2){for(;++a<o;)if((i=(e=r[a]).type)&&(i=ae(n[i],e.name)))return i;return}if(t!=null&&typeof t!=`function`)throw Error(`invalid callback: `+t);for(;++a<o;)if(i=(e=r[a]).type)n[i]=oe(n[i],e.name,t);else if(t==null)for(i in n)n[i]=oe(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new re(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=Array(i),r=0,i,a;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(a=this._[e],r=0,i=a.length;r<i;++r)a[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(var r=this._[e],i=0,a=r.length;i<a;++i)r[i].value.apply(t,n)}};function ae(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function oe(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=te,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var se={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`};function ce(e){var t=e+=``,n=t.indexOf(`:`);return n>=0&&(t=e.slice(0,n))!==`xmlns`&&(e=e.slice(n+1)),se.hasOwnProperty(t)?{space:se[t],local:e}:e}function le(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===`http://www.w3.org/1999/xhtml`&&t.documentElement.namespaceURI===`http://www.w3.org/1999/xhtml`?t.createElement(e):t.createElementNS(n,e)}}function ue(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function de(e){var t=ce(e);return(t.local?ue:le)(t)}function fe(){}function pe(e){return e==null?fe:function(){return this.querySelector(e)}}function me(e){typeof e!=`function`&&(e=pe(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=Array(o),c,l,u=0;u<o;++u)(c=a[u])&&(l=e.call(c,c.__data__,u,a))&&(`__data__`in c&&(l.__data__=c.__data__),s[u]=l);return new nn(r,this._parents)}function he(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function ge(){return[]}function _e(e){return e==null?ge:function(){return this.querySelectorAll(e)}}function ve(e){return function(){return he(e.apply(this,arguments))}}function ye(e){e=typeof e==`function`?ve(e):_e(e);for(var t=this._groups,n=t.length,r=[],i=[],a=0;a<n;++a)for(var o=t[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&(r.push(e.call(c,c.__data__,l,o)),i.push(c));return new nn(r,i)}function be(e){return function(){return this.matches(e)}}function xe(e){return function(t){return t.matches(e)}}var Se=Array.prototype.find;function Ce(e){return function(){return Se.call(this.children,e)}}function we(){return this.firstElementChild}function Te(e){return this.select(e==null?we:Ce(typeof e==`function`?e:xe(e)))}var Ee=Array.prototype.filter;function De(){return Array.from(this.children)}function Oe(e){return function(){return Ee.call(this.children,e)}}function ke(e){return this.selectAll(e==null?De:Oe(typeof e==`function`?e:xe(e)))}function Ae(e){typeof e!=`function`&&(e=be(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new nn(r,this._parents)}function je(e){return Array(e.length)}function Me(){return new nn(this._enter||this._groups.map(je),this._parents)}function Ne(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Ne.prototype={constructor:Ne,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Pe(e){return function(){return e}}function Fe(e,t,n,r,i,a){for(var o=0,s,c=t.length,l=a.length;o<l;++o)(s=t[o])?(s.__data__=a[o],r[o]=s):n[o]=new Ne(e,a[o]);for(;o<c;++o)(s=t[o])&&(i[o]=s)}function Ie(e,t,n,r,i,a,o){var s,c,l=new Map,u=t.length,d=a.length,f=Array(u),p;for(s=0;s<u;++s)(c=t[s])&&(f[s]=p=o.call(c,c.__data__,s,t)+``,l.has(p)?i[s]=c:l.set(p,c));for(s=0;s<d;++s)p=o.call(e,a[s],s,a)+``,(c=l.get(p))?(r[s]=c,c.__data__=a[s],l.delete(p)):n[s]=new Ne(e,a[s]);for(s=0;s<u;++s)(c=t[s])&&l.get(f[s])===c&&(i[s]=c)}function Le(e){return e.__data__}function Re(e,t){if(!arguments.length)return Array.from(this,Le);var n=t?Ie:Fe,r=this._parents,i=this._groups;typeof e!=`function`&&(e=Pe(e));for(var a=i.length,o=Array(a),s=Array(a),c=Array(a),l=0;l<a;++l){var u=r[l],d=i[l],f=d.length,p=ze(e.call(u,u&&u.__data__,l,r)),m=p.length,h=s[l]=Array(m),g=o[l]=Array(m);n(u,d,h,g,c[l]=Array(f),p,t);for(var _=0,v=0,y,b;_<m;++_)if(y=h[_]){for(_>=v&&(v=_+1);!(b=g[v])&&++v<m;);y._next=b||null}}return o=new nn(o,r),o._enter=s,o._exit=c,o}function ze(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function Be(){return new nn(this._exit||this._groups.map(je),this._parents)}function Ve(e,t,n){var r=this.enter(),i=this,a=this.exit();return typeof e==`function`?(r=e(r),r&&=r.selection()):r=r.append(e+``),t!=null&&(i=t(i),i&&=i.selection()),n==null?a.remove():n(a),r&&i?r.merge(i).order():i}function He(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,a=r.length,o=Math.min(i,a),s=Array(i),c=0;c<o;++c)for(var l=n[c],u=r[c],d=l.length,f=s[c]=Array(d),p,m=0;m<d;++m)(p=l[m]||u[m])&&(f[m]=p);for(;c<i;++c)s[c]=n[c];return new nn(s,this._parents)}function Ue(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,a=r[i],o;--i>=0;)(o=r[i])&&(a&&o.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(o,a),a=o);return this}function We(e){e||=Ge;function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}for(var n=this._groups,r=n.length,i=Array(r),a=0;a<r;++a){for(var o=n[a],s=o.length,c=i[a]=Array(s),l,u=0;u<s;++u)(l=o[u])&&(c[u]=l);c.sort(t)}return new nn(i,this._parents).order()}function Ge(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Ke(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function qe(){return Array.from(this)}function Je(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null}function Ye(){let e=0;for(let t of this)++e;return e}function Xe(){return!this.node()}function Ze(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],a=0,o=i.length,s;a<o;++a)(s=i[a])&&e.call(s,s.__data__,a,i);return this}function Qe(e){return function(){this.removeAttribute(e)}}function $e(e){return function(){this.removeAttributeNS(e.space,e.local)}}function et(e,t){return function(){this.setAttribute(e,t)}}function tt(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function nt(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function rt(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function it(e,t){var n=ce(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?$e:Qe:typeof t==`function`?n.local?rt:nt:n.local?tt:et)(n,t))}function at(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function ot(e){return function(){this.style.removeProperty(e)}}function st(e,t,n){return function(){this.style.setProperty(e,t,n)}}function ct(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function lt(e,t,n){return arguments.length>1?this.each((t==null?ot:typeof t==`function`?ct:st)(e,t,n??``)):ut(this.node(),e)}function ut(e,t){return e.style.getPropertyValue(t)||at(e).getComputedStyle(e,null).getPropertyValue(t)}function dt(e){return function(){delete this[e]}}function ft(e,t){return function(){this[e]=t}}function pt(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function mt(e,t){return arguments.length>1?this.each((t==null?dt:typeof t==`function`?pt:ft)(e,t)):this.node()[e]}function ht(e){return e.trim().split(/^|\s+/)}function gt(e){return e.classList||new _t(e)}function _t(e){this._node=e,this._names=ht(e.getAttribute(`class`)||``)}_t.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute(`class`,this._names.join(` `)))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute(`class`,this._names.join(` `)))},contains:function(e){return this._names.indexOf(e)>=0}};function vt(e,t){for(var n=gt(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function yt(e,t){for(var n=gt(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function bt(e){return function(){vt(this,e)}}function xt(e){return function(){yt(this,e)}}function St(e,t){return function(){(t.apply(this,arguments)?vt:yt)(this,e)}}function Ct(e,t){var n=ht(e+``);if(arguments.length<2){for(var r=gt(this.node()),i=-1,a=n.length;++i<a;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t==`function`?St:t?bt:xt)(n,t))}function wt(){this.textContent=``}function Tt(e){return function(){this.textContent=e}}function Et(e){return function(){var t=e.apply(this,arguments);this.textContent=t??``}}function Dt(e){return arguments.length?this.each(e==null?wt:(typeof e==`function`?Et:Tt)(e)):this.node().textContent}function Ot(){this.innerHTML=``}function kt(e){return function(){this.innerHTML=e}}function At(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??``}}function jt(e){return arguments.length?this.each(e==null?Ot:(typeof e==`function`?At:kt)(e)):this.node().innerHTML}function Mt(){this.nextSibling&&this.parentNode.appendChild(this)}function Nt(){return this.each(Mt)}function Pt(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ft(){return this.each(Pt)}function It(e){var t=typeof e==`function`?e:de(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Lt(){return null}function Rt(e,t){var n=typeof e==`function`?e:de(e),r=t==null?Lt:typeof t==`function`?t:pe(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function zt(){var e=this.parentNode;e&&e.removeChild(this)}function Bt(){return this.each(zt)}function Vt(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Ht(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Ut(e){return this.select(e?Ht:Vt)}function Wt(e){return arguments.length?this.property(`__data__`,e):this.node().__data__}function Gt(e){return function(t){e.call(this,t,this.__data__)}}function Kt(e){return e.trim().split(/^|\s+/).map(function(e){var t=``,n=e.indexOf(`.`);return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}function qt(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,a;n<i;++n)a=t[n],(!e.type||a.type===e.type)&&a.name===e.name?this.removeEventListener(a.type,a.listener,a.options):t[++r]=a;++r?t.length=r:delete this.__on}}}function Jt(e,t,n){return function(){var r=this.__on,i,a=Gt(t);if(r){for(var o=0,s=r.length;o<s;++o)if((i=r[o]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=a,i.options=n),i.value=t;return}}this.addEventListener(e.type,a,n),i={type:e.type,name:e.name,value:t,listener:a,options:n},r?r.push(i):this.__on=[i]}}function Yt(e,t,n){var r=Kt(e+``),i,a=r.length,o;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,u;c<l;++c)for(i=0,u=s[c];i<a;++i)if((o=r[i]).type===u.type&&o.name===u.name)return u.value}return}for(s=t?Jt:qt,i=0;i<a;++i)this.each(s(r[i],t,n));return this}function Xt(e,t,n){var r=at(e),i=r.CustomEvent;typeof i==`function`?i=new i(t,n):(i=r.document.createEvent(`Event`),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function Zt(e,t){return function(){return Xt(this,e,t)}}function Qt(e,t){return function(){return Xt(this,e,t.apply(this,arguments))}}function $t(e,t){return this.each((typeof t==`function`?Qt:Zt)(e,t))}function*en(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length,o;i<a;++i)(o=r[i])&&(yield o)}var tn=[null];function nn(e,t){this._groups=e,this._parents=t}function rn(){return new nn([[document.documentElement]],tn)}function an(){return this}nn.prototype=rn.prototype={constructor:nn,select:me,selectAll:ye,selectChild:Te,selectChildren:ke,filter:Ae,data:Re,enter:Me,exit:Be,join:Ve,merge:He,selection:an,order:Ue,sort:We,call:Ke,nodes:qe,node:Je,size:Ye,empty:Xe,each:Ze,attr:it,style:lt,property:mt,classed:Ct,text:Dt,html:jt,raise:Nt,lower:Ft,append:It,insert:Rt,remove:Bt,clone:Ut,datum:Wt,on:Yt,dispatch:$t,[Symbol.iterator]:en};function on(e){return typeof e==`string`?new nn([[document.querySelector(e)]],[document.documentElement]):new nn([[e]],tn)}function sn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function cn(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function ln(){}var un=.7,dn=1/un,fn=`\\s*([+-]?\\d+)\\s*`,pn=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,mn=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,hn=/^#([0-9a-f]{3,8})$/,gn=RegExp(`^rgb\\(${fn},${fn},${fn}\\)$`),_n=RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`),vn=RegExp(`^rgba\\(${fn},${fn},${fn},${pn}\\)$`),yn=RegExp(`^rgba\\(${mn},${mn},${mn},${pn}\\)$`),bn=RegExp(`^hsl\\(${pn},${mn},${mn}\\)$`),xn=RegExp(`^hsla\\(${pn},${mn},${mn},${pn}\\)$`),Sn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};sn(ln,Dn,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Cn,formatHex:Cn,formatHex8:wn,formatHsl:Tn,formatRgb:En,toString:En});function Cn(){return this.rgb().formatHex()}function wn(){return this.rgb().formatHex8()}function Tn(){return Bn(this).formatHsl()}function En(){return this.rgb().formatRgb()}function Dn(e){var t,n;return e=(e+``).trim().toLowerCase(),(t=hn.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?On(t):n===3?new Mn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?kn(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?kn(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=gn.exec(e))?new Mn(t[1],t[2],t[3],1):(t=_n.exec(e))?new Mn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=vn.exec(e))?kn(t[1],t[2],t[3],t[4]):(t=yn.exec(e))?kn(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=bn.exec(e))?zn(t[1],t[2]/100,t[3]/100,1):(t=xn.exec(e))?zn(t[1],t[2]/100,t[3]/100,t[4]):Sn.hasOwnProperty(e)?On(Sn[e]):e===`transparent`?new Mn(NaN,NaN,NaN,0):null}function On(e){return new Mn(e>>16&255,e>>8&255,e&255,1)}function kn(e,t,n,r){return r<=0&&(e=t=n=NaN),new Mn(e,t,n,r)}function An(e){return e instanceof ln||(e=Dn(e)),e?(e=e.rgb(),new Mn(e.r,e.g,e.b,e.opacity)):new Mn}function jn(e,t,n,r){return arguments.length===1?An(e):new Mn(e,t,n,r??1)}function Mn(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}sn(Mn,jn,cn(ln,{brighter(e){return e=e==null?dn:dn**+e,new Mn(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?un:un**+e,new Mn(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Mn(Ln(this.r),Ln(this.g),Ln(this.b),In(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Nn,formatHex:Nn,formatHex8:Pn,formatRgb:Fn,toString:Fn}));function Nn(){return`#${Rn(this.r)}${Rn(this.g)}${Rn(this.b)}`}function Pn(){return`#${Rn(this.r)}${Rn(this.g)}${Rn(this.b)}${Rn((isNaN(this.opacity)?1:this.opacity)*255)}`}function Fn(){let e=In(this.opacity);return`${e===1?`rgb(`:`rgba(`}${Ln(this.r)}, ${Ln(this.g)}, ${Ln(this.b)}${e===1?`)`:`, ${e})`}`}function In(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Ln(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Rn(e){return e=Ln(e),(e<16?`0`:``)+e.toString(16)}function zn(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Hn(e,t,n,r)}function Bn(e){if(e instanceof Hn)return new Hn(e.h,e.s,e.l,e.opacity);if(e instanceof ln||(e=Dn(e)),!e)return new Hn;if(e instanceof Hn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,s=a-i,c=(a+i)/2;return s?(o=t===a?(n-r)/s+(n<r)*6:n===a?(r-t)/s+2:(t-n)/s+4,s/=c<.5?a+i:2-a-i,o*=60):s=c>0&&c<1?0:o,new Hn(o,s,c,e.opacity)}function Vn(e,t,n,r){return arguments.length===1?Bn(e):new Hn(e,t,n,r??1)}function Hn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}sn(Hn,Vn,cn(ln,{brighter(e){return e=e==null?dn:dn**+e,new Hn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?un:un**+e,new Hn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Mn(Gn(e>=240?e-240:e+120,i,r),Gn(e,i,r),Gn(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new Hn(Un(this.h),Wn(this.s),Wn(this.l),In(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=In(this.opacity);return`${e===1?`hsl(`:`hsla(`}${Un(this.h)}, ${Wn(this.s)*100}%, ${Wn(this.l)*100}%${e===1?`)`:`, ${e})`}`}}));function Un(e){return e=(e||0)%360,e<0?e+360:e}function Wn(e){return Math.max(0,Math.min(1,e||0))}function Gn(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var Kn=e=>()=>e;function qn(e,t){return function(n){return e+n*t}}function Jn(e,t,n){return e**=+n,t=t**+n-e,n=1/n,function(r){return(e+r*t)**+n}}function Yn(e){return(e=+e)==1?Xn:function(t,n){return n-t?Jn(t,n,e):Kn(isNaN(t)?n:t)}}function Xn(e,t){var n=t-e;return n?qn(e,n):Kn(isNaN(e)?t:e)}var Zn=(function e(t){var n=Yn(t);function r(e,t){var r=n((e=jn(e)).r,(t=jn(t)).r),i=n(e.g,t.g),a=n(e.b,t.b),o=Xn(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=a(t),e.opacity=o(t),e+``}}return r.gamma=e,r})(1);function Qn(e,t){t||=[];var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=e[i]*(1-a)+t[i]*a;return r}}function $n(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function er(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=Array(r),a=Array(n),o;for(o=0;o<r;++o)i[o]=lr(e[o],t[o]);for(;o<n;++o)a[o]=t[o];return function(e){for(o=0;o<r;++o)a[o]=i[o](e);return a}}function tr(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function nr(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function rr(e,t){var n={},r={},i;for(i in(typeof e!=`object`||!e)&&(e={}),(typeof t!=`object`||!t)&&(t={}),t)i in e?n[i]=lr(e[i],t[i]):r[i]=t[i];return function(e){for(i in n)r[i]=n[i](e);return r}}var ir=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ar=new RegExp(ir.source,`g`);function or(e){return function(){return e}}function sr(e){return function(t){return e(t)+``}}function cr(e,t){var n=ir.lastIndex=ar.lastIndex=0,r,i,a,o=-1,s=[],c=[];for(e+=``,t+=``;(r=ir.exec(e))&&(i=ar.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,c.push({i:o,x:nr(r,i)})),n=ar.lastIndex;return n<t.length&&(a=t.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?c[0]?sr(c[0].x):or(t):(t=c.length,function(e){for(var n=0,r;n<t;++n)s[(r=c[n]).i]=r.x(e);return s.join(``)})}function lr(e,t){var n=typeof t,r;return t==null||n===`boolean`?Kn(t):(n===`number`?nr:n===`string`?(r=Dn(t))?(t=r,Zn):cr:t instanceof Dn?Zn:t instanceof Date?tr:$n(t)?Qn:Array.isArray(t)?er:typeof t.valueOf!=`function`&&typeof t.toString!=`function`||isNaN(t)?rr:nr)(e,t)}function ur(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}var dr=180/Math.PI,fr={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function pr(e,t,n,r,i,a){var o,s,c;return(o=Math.sqrt(e*e+t*t))&&(e/=o,t/=o),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,c/=s),e*r<t*n&&(e=-e,t=-t,c=-c,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(t,e)*dr,skewX:Math.atan(c)*dr,scaleX:o,scaleY:s}}var mr;function hr(e){let t=new(typeof DOMMatrix==`function`?DOMMatrix:WebKitCSSMatrix)(e+``);return t.isIdentity?fr:pr(t.a,t.b,t.c,t.d,t.e,t.f)}function gr(e){return e==null||(mr||=document.createElementNS(`http://www.w3.org/2000/svg`,`g`),mr.setAttribute(`transform`,e),!(e=mr.transform.baseVal.consolidate()))?fr:(e=e.matrix,pr(e.a,e.b,e.c,e.d,e.e,e.f))}function _r(e,t,n,r){function i(e){return e.length?e.pop()+` `:``}function a(e,r,i,a,o,s){if(e!==i||r!==a){var c=o.push(`translate(`,null,t,null,n);s.push({i:c-4,x:nr(e,i)},{i:c-2,x:nr(r,a)})}else(i||a)&&o.push(`translate(`+i+t+a+n)}function o(e,t,n,a){e===t?t&&n.push(i(n)+`rotate(`+t+r):(e-t>180?t+=360:t-e>180&&(e+=360),a.push({i:n.push(i(n)+`rotate(`,null,r)-2,x:nr(e,t)}))}function s(e,t,n,a){e===t?t&&n.push(i(n)+`skewX(`+t+r):a.push({i:n.push(i(n)+`skewX(`,null,r)-2,x:nr(e,t)})}function c(e,t,n,r,a,o){if(e!==n||t!==r){var s=a.push(i(a)+`scale(`,null,`,`,null,`)`);o.push({i:s-4,x:nr(e,n)},{i:s-2,x:nr(t,r)})}else(n!==1||r!==1)&&a.push(i(a)+`scale(`+n+`,`+r+`)`)}return function(t,n){var r=[],i=[];return t=e(t),n=e(n),a(t.translateX,t.translateY,n.translateX,n.translateY,r,i),o(t.rotate,n.rotate,r,i),s(t.skewX,n.skewX,r,i),c(t.scaleX,t.scaleY,n.scaleX,n.scaleY,r,i),t=n=null,function(e){for(var t=-1,n=i.length,a;++t<n;)r[(a=i[t]).i]=a.x(e);return r.join(``)}}}var vr=_r(hr,`px, `,`px)`,`deg)`),yr=_r(gr,`, `,`)`,`)`),br=0,xr=0,Sr=0,Cr=1e3,wr,Tr,Er=0,Dr=0,Or=0,kr=typeof performance==`object`&&performance.now?performance:Date,Ar=typeof window==`object`&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function jr(){return Dr||=(Ar(Mr),kr.now()+Or)}function Mr(){Dr=0}function Nr(){this._call=this._time=this._next=null}Nr.prototype=Pr.prototype={constructor:Nr,restart:function(e,t,n){if(typeof e!=`function`)throw TypeError(`callback is not a function`);n=(n==null?jr():+n)+(t==null?0:+t),!this._next&&Tr!==this&&(Tr?Tr._next=this:wr=this,Tr=this),this._call=e,this._time=n,zr()},stop:function(){this._call&&(this._call=null,this._time=1/0,zr())}};function Pr(e,t,n){var r=new Nr;return r.restart(e,t,n),r}function Fr(){jr(),++br;for(var e=wr,t;e;)(t=Dr-e._time)>=0&&e._call.call(void 0,t),e=e._next;--br}function Ir(){Dr=(Er=kr.now())+Or,br=xr=0;try{Fr()}finally{br=0,Rr(),Dr=0}}function Lr(){var e=kr.now(),t=e-Er;t>Cr&&(Or-=t,Er=e)}function Rr(){for(var e,t=wr,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:wr=n);Tr=e,zr(r)}function zr(e){br||(xr&&=clearTimeout(xr),e-Dr>24?(e<1/0&&(xr=setTimeout(Ir,e-kr.now()-Or)),Sr&&=clearInterval(Sr)):(Sr||=(Er=kr.now(),setInterval(Lr,Cr)),br=1,Ar(Ir)))}function Br(e,t,n){var r=new Nr;return t=t==null?0:+t,r.restart(n=>{r.stop(),e(n+t)},t,n),r}var Vr=ne(`start`,`end`,`cancel`,`interrupt`),Hr=[];function Ur(e,t,n,r,i,a){var o=e.__transition;if(!o)e.__transition={};else if(n in o)return;qr(e,n,{name:t,index:r,group:i,on:Vr,tween:Hr,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function Wr(e,t){var n=Kr(e,t);if(n.state>0)throw Error(`too late; already scheduled`);return n}function Gr(e,t){var n=Kr(e,t);if(n.state>3)throw Error(`too late; already running`);return n}function Kr(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw Error(`transition not found`);return n}function qr(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=Pr(a,0,n.time);function a(e){n.state=1,n.timer.restart(o,n.delay,n.time),n.delay<=e&&o(e-n.delay)}function o(a){var l,u,d,f;if(n.state!==1)return c();for(l in r)if(f=r[l],f.name===n.name){if(f.state===3)return Br(o);f.state===4?(f.state=6,f.timer.stop(),f.on.call(`interrupt`,e,e.__data__,f.index,f.group),delete r[l]):+l<t&&(f.state=6,f.timer.stop(),f.on.call(`cancel`,e,e.__data__,f.index,f.group),delete r[l])}if(Br(function(){n.state===3&&(n.state=4,n.timer.restart(s,n.delay,n.time),s(a))}),n.state=2,n.on.call(`start`,e,e.__data__,n.index,n.group),n.state===2){for(n.state=3,i=Array(d=n.tween.length),l=0,u=-1;l<d;++l)(f=n.tween[l].value.call(e,e.__data__,n.index,n.group))&&(i[++u]=f);i.length=u+1}}function s(t){for(var r=t<n.duration?n.ease.call(null,t/n.duration):(n.timer.restart(c),n.state=5,1),a=-1,o=i.length;++a<o;)i[a].call(e,r);n.state===5&&(n.on.call(`end`,e,e.__data__,n.index,n.group),c())}function c(){for(var i in n.state=6,n.timer.stop(),delete r[t],r)return;delete e.__transition}}function Jr(e,t){var n=e.__transition,r,i,a=!0,o;if(n){for(o in t=t==null?null:t+``,n){if((r=n[o]).name!==t){a=!1;continue}i=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(i?`interrupt`:`cancel`,e,e.__data__,r.index,r.group),delete n[o]}a&&delete e.__transition}}function Yr(e){return this.each(function(){Jr(this,e)})}function Xr(e,t){var n,r;return function(){var i=Gr(this,e),a=i.tween;if(a!==n){r=n=a;for(var o=0,s=r.length;o<s;++o)if(r[o].name===t){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function Zr(e,t,n){var r,i;if(typeof n!=`function`)throw Error();return function(){var a=Gr(this,e),o=a.tween;if(o!==r){i=(r=o).slice();for(var s={name:t,value:n},c=0,l=i.length;c<l;++c)if(i[c].name===t){i[c]=s;break}c===l&&i.push(s)}a.tween=i}}function Qr(e,t){var n=this._id;if(e+=``,arguments.length<2){for(var r=Kr(this.node(),n).tween,i=0,a=r.length,o;i<a;++i)if((o=r[i]).name===e)return o.value;return null}return this.each((t==null?Xr:Zr)(n,e,t))}function $r(e,t,n){var r=e._id;return e.each(function(){var e=Gr(this,r);(e.value||={})[t]=n.apply(this,arguments)}),function(e){return Kr(e,r).value[t]}}function ei(e,t){var n;return(typeof t==`number`?nr:t instanceof Dn?Zn:(n=Dn(t))?(t=n,Zn):cr)(e,t)}function ti(e){return function(){this.removeAttribute(e)}}function ni(e){return function(){this.removeAttributeNS(e.space,e.local)}}function ri(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttribute(e);return o===i?null:o===r?a:a=t(r=o,n)}}function ii(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttributeNS(e.space,e.local);return o===i?null:o===r?a:a=t(r=o,n)}}function ai(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttribute(e):(o=this.getAttribute(e),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function oi(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(o=this.getAttributeNS(e.space,e.local),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function si(e,t){var n=ce(e),r=n===`transform`?yr:ei;return this.attrTween(e,typeof t==`function`?(n.local?oi:ai)(n,r,$r(this,`attr.`+e,t)):t==null?(n.local?ni:ti)(n):(n.local?ii:ri)(n,r,t))}function ci(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function li(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function ui(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&li(e,i)),n}return i._value=t,i}function di(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&ci(e,i)),n}return i._value=t,i}function fi(e,t){var n=`attr.`+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!=`function`)throw Error();var r=ce(e);return this.tween(n,(r.local?ui:di)(r,t))}function pi(e,t){return function(){Wr(this,e).delay=+t.apply(this,arguments)}}function mi(e,t){return t=+t,function(){Wr(this,e).delay=t}}function hi(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?pi:mi)(t,e)):Kr(this.node(),t).delay}function gi(e,t){return function(){Gr(this,e).duration=+t.apply(this,arguments)}}function _i(e,t){return t=+t,function(){Gr(this,e).duration=t}}function vi(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?gi:_i)(t,e)):Kr(this.node(),t).duration}function yi(e,t){if(typeof t!=`function`)throw Error();return function(){Gr(this,e).ease=t}}function bi(e){var t=this._id;return arguments.length?this.each(yi(t,e)):Kr(this.node(),t).ease}function xi(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!=`function`)throw Error();Gr(this,e).ease=n}}function Si(e){if(typeof e!=`function`)throw Error();return this.each(xi(this._id,e))}function Ci(e){typeof e!=`function`&&(e=be(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new Qi(r,this._parents,this._name,this._id)}function wi(e){if(e._id!==this._id)throw Error();for(var t=this._groups,n=e._groups,r=t.length,i=n.length,a=Math.min(r,i),o=Array(r),s=0;s<a;++s)for(var c=t[s],l=n[s],u=c.length,d=o[s]=Array(u),f,p=0;p<u;++p)(f=c[p]||l[p])&&(d[p]=f);for(;s<r;++s)o[s]=t[s];return new Qi(o,this._parents,this._name,this._id)}function Ti(e){return(e+``).trim().split(/^|\s+/).every(function(e){var t=e.indexOf(`.`);return t>=0&&(e=e.slice(0,t)),!e||e===`start`})}function Ei(e,t,n){var r,i,a=Ti(t)?Wr:Gr;return function(){var o=a(this,e),s=o.on;s!==r&&(i=(r=s).copy()).on(t,n),o.on=i}}function Di(e,t){var n=this._id;return arguments.length<2?Kr(this.node(),n).on.on(e):this.each(Ei(n,e,t))}function Oi(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function ki(){return this.on(`end.remove`,Oi(this._id))}function Ai(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=pe(e));for(var r=this._groups,i=r.length,a=Array(i),o=0;o<i;++o)for(var s=r[o],c=s.length,l=a[o]=Array(c),u,d,f=0;f<c;++f)(u=s[f])&&(d=e.call(u,u.__data__,f,s))&&(`__data__`in u&&(d.__data__=u.__data__),l[f]=d,Ur(l[f],t,n,f,l,Kr(u,n)));return new Qi(a,this._parents,t,n)}function ji(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=_e(e));for(var r=this._groups,i=r.length,a=[],o=[],s=0;s<i;++s)for(var c=r[s],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=e.call(u,u.__data__,d,c),p,m=Kr(u,n),h=0,g=f.length;h<g;++h)(p=f[h])&&Ur(p,t,n,h,f,m);a.push(f),o.push(u)}return new Qi(a,o,t,n)}var Mi=rn.prototype.constructor;function Ni(){return new Mi(this._groups,this._parents)}function Pi(e,t){var n,r,i;return function(){var a=ut(this,e),o=(this.style.removeProperty(e),ut(this,e));return a===o?null:a===n&&o===r?i:i=t(n=a,r=o)}}function Fi(e){return function(){this.style.removeProperty(e)}}function Ii(e,t,n){var r,i=n+``,a;return function(){var o=ut(this,e);return o===i?null:o===r?a:a=t(r=o,n)}}function Li(e,t,n){var r,i,a;return function(){var o=ut(this,e),s=n(this),c=s+``;return s??(c=s=(this.style.removeProperty(e),ut(this,e))),o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s))}}function Ri(e,t){var n,r,i,a=`style.`+t,o=`end.`+a,s;return function(){var c=Gr(this,e),l=c.on,u=c.value[a]==null?s||=Fi(t):void 0;(l!==n||i!==u)&&(r=(n=l).copy()).on(o,i=u),c.on=r}}function zi(e,t,n){var r=(e+=``)==`transform`?vr:ei;return t==null?this.styleTween(e,Pi(e,r)).on(`end.style.`+e,Fi(e)):typeof t==`function`?this.styleTween(e,Li(e,r,$r(this,`style.`+e,t))).each(Ri(this._id,e)):this.styleTween(e,Ii(e,r,t),n).on(`end.style.`+e,null)}function Bi(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function Vi(e,t,n){var r,i;function a(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&Bi(e,a,n)),r}return a._value=t,a}function Hi(e,t,n){var r=`style.`+(e+=``);if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!=`function`)throw Error();return this.tween(r,Vi(e,t,n??``))}function Ui(e){return function(){this.textContent=e}}function Wi(e){return function(){var t=e(this);this.textContent=t??``}}function Gi(e){return this.tween(`text`,typeof e==`function`?Wi($r(this,`text`,e)):Ui(e==null?``:e+``))}function Ki(e){return function(t){this.textContent=e.call(this,t)}}function qi(e){var t,n;function r(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Ki(r)),t}return r._value=e,r}function Ji(e){var t=`text`;if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!=`function`)throw Error();return this.tween(t,qi(e))}function Yi(){for(var e=this._name,t=this._id,n=$i(),r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)if(c=o[l]){var u=Kr(c,t);Ur(c,e,n,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Qi(r,this._parents,e,n)}function Xi(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(a,o){var s={value:o},c={value:function(){--i===0&&a()}};n.each(function(){var n=Gr(this,r),i=n.on;i!==e&&(t=(e=i).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),n.on=t}),i===0&&a()})}var Zi=0;function Qi(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function $i(){return++Zi}var ea=rn.prototype;Qi.prototype={constructor:Qi,select:Ai,selectAll:ji,selectChild:ea.selectChild,selectChildren:ea.selectChildren,filter:Ci,merge:wi,selection:Ni,transition:Yi,call:ea.call,nodes:ea.nodes,node:ea.node,size:ea.size,empty:ea.empty,each:ea.each,on:Di,attr:si,attrTween:fi,style:zi,styleTween:Hi,text:Gi,textTween:Ji,remove:ki,tween:Qr,delay:hi,duration:vi,ease:bi,easeVarying:Si,end:Xi,[Symbol.iterator]:ea[Symbol.iterator]};function ta(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var na={time:null,delay:0,duration:250,ease:ta};function ra(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw Error(`transition ${t} not found`);return n}function ia(e){var t,n;e instanceof Qi?(t=e._id,e=e._name):(t=$i(),(n=na).time=jr(),e=e==null?null:e+``);for(var r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&Ur(c,e,t,l,o,n||ra(c,t));return new Qi(r,this._parents,e,t)}rn.prototype.interrupt=Yr,rn.prototype.transition=ia;var{abs:aa,max:oa,min:sa}=Math;[`w`,`e`].map(ca),[`n`,`s`].map(ca),[`n`,`w`,`e`,`s`,`nw`,`ne`,`sw`,`se`].map(ca);function ca(e){return{type:e}}function la(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString(`en`).replace(/,/g,``):e.toString(10)}function ua(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf(`e`),r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function da(e){return e=ua(Math.abs(e)),e?e[1]:NaN}function fa(e,t){return function(n,r){for(var i=n.length,a=[],o=0,s=e[0],c=0;i>0&&s>0&&(c+s+1>r&&(s=Math.max(1,r-c)),a.push(n.substring(i-=s,i+s)),!((c+=s+1)>r));)s=e[o=(o+1)%e.length];return a.reverse().join(t)}}function pa(e){return function(t){return t.replace(/[0-9]/g,function(t){return e[+t]})}}var ma=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function ha(e){if(!(t=ma.exec(e)))throw Error(`invalid format: `+e);var t;return new ga({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}ha.prototype=ga.prototype;function ga(e){this.fill=e.fill===void 0?` `:e.fill+``,this.align=e.align===void 0?`>`:e.align+``,this.sign=e.sign===void 0?`-`:e.sign+``,this.symbol=e.symbol===void 0?``:e.symbol+``,this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?``:e.type+``}ga.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?`0`:``)+(this.width===void 0?``:Math.max(1,this.width|0))+(this.comma?`,`:``)+(this.precision===void 0?``:`.`+Math.max(0,this.precision|0))+(this.trim?`~`:``)+this.type};function _a(e){out:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case`.`:r=i=n;break;case`0`:r===0&&(r=n),i=n;break;default:if(!+e[n])break out;r>0&&(r=0)}return r>0?e.slice(0,r)+e.slice(i+1):e}var va;function ya(e,t){var n=ua(e,t);if(!n)return va=void 0,e.toPrecision(t);var r=n[0],i=n[1],a=i-(va=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return a===o?r:a>o?r+Array(a-o+1).join(`0`):a>0?r.slice(0,a)+`.`+r.slice(a):`0.`+Array(1-a).join(`0`)+ua(e,Math.max(0,t+a-1))[0]}function ba(e,t){var n=ua(e,t);if(!n)return e+``;var r=n[0],i=n[1];return i<0?`0.`+Array(-i).join(`0`)+r:r.length>i+1?r.slice(0,i+1)+`.`+r.slice(i+1):r+Array(i-r.length+2).join(`0`)}var xa={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+``,d:la,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>ba(e*100,t),r:ba,s:ya,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function Sa(e){return e}var Ca=Array.prototype.map,wa=[`y`,`z`,`a`,`f`,`p`,`n`,`µ`,`m`,``,`k`,`M`,`G`,`T`,`P`,`E`,`Z`,`Y`];function Ta(e){var t=e.grouping===void 0||e.thousands===void 0?Sa:fa(Ca.call(e.grouping,Number),e.thousands+``),n=e.currency===void 0?``:e.currency[0]+``,r=e.currency===void 0?``:e.currency[1]+``,i=e.decimal===void 0?`.`:e.decimal+``,a=e.numerals===void 0?Sa:pa(Ca.call(e.numerals,String)),o=e.percent===void 0?`%`:e.percent+``,s=e.minus===void 0?`−`:e.minus+``,c=e.nan===void 0?`NaN`:e.nan+``;function l(e,l){e=ha(e);var u=e.fill,d=e.align,f=e.sign,p=e.symbol,m=e.zero,h=e.width,g=e.comma,_=e.precision,v=e.trim,y=e.type;y===`n`?(g=!0,y=`g`):xa[y]||(_===void 0&&(_=12),v=!0,y=`g`),(m||u===`0`&&d===`=`)&&(m=!0,u=`0`,d=`=`);var b=(l&&l.prefix!==void 0?l.prefix:``)+(p===`$`?n:p===`#`&&/[boxX]/.test(y)?`0`+y.toLowerCase():``),x=(p===`$`?r:/[%p]/.test(y)?o:``)+(l&&l.suffix!==void 0?l.suffix:``),S=xa[y],C=/[defgprs%]/.test(y);_=_===void 0?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,_)):Math.max(0,Math.min(20,_));function w(e){var n=b,r=x,o,l,p;if(y===`c`)r=S(e)+r,e=``;else{e=+e;var w=e<0||1/e<0;if(e=isNaN(e)?c:S(Math.abs(e),_),v&&(e=_a(e)),w&&+e==0&&f!==`+`&&(w=!1),n=(w?f===`(`?f:s:f===`-`||f===`(`?``:f)+n,r=(y===`s`&&!isNaN(e)&&va!==void 0?wa[8+va/3]:``)+r+(w&&f===`(`?`)`:``),C){for(o=-1,l=e.length;++o<l;)if(p=e.charCodeAt(o),48>p||p>57){r=(p===46?i+e.slice(o+1):e.slice(o))+r,e=e.slice(0,o);break}}}g&&!m&&(e=t(e,1/0));var T=n.length+e.length+r.length,E=T<h?Array(h-T+1).join(u):``;switch(g&&m&&(e=t(E+e,E.length?h-r.length:1/0),E=``),d){case`<`:e=n+e+r+E;break;case`=`:e=n+E+e+r;break;case`^`:e=E.slice(0,T=E.length>>1)+n+e+r+E.slice(T);break;default:e=E+n+e+r}return a(e)}return w.toString=function(){return e+``},w}function u(e,t){var n=Math.max(-8,Math.min(8,Math.floor(da(t)/3)))*3,r=10**-n,i=l((e=ha(e),e.type=`f`,e),{suffix:wa[8+n/3]});return function(e){return i(r*e)}}return{format:l,formatPrefix:u}}var Ea,Da,Oa;ka({thousands:`,`,grouping:[3],currency:[`$`,``]});function ka(e){return Ea=Ta(e),Da=Ea.format,Oa=Ea.formatPrefix,Ea}function Aa(e){return Math.max(0,-da(Math.abs(e)))}function ja(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(da(t)/3)))*3-da(Math.abs(e)))}function Ma(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,da(t)-da(e))+1}function Na(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e)}return this}function Pa(e){return function(){return e}}function Fa(e){return+e}var Ia=[0,1];function La(e){return e}function Ra(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:Pa(isNaN(t)?NaN:.5)}function za(e,t){var n;return e>t&&(n=e,e=t,t=n),function(n){return Math.max(e,Math.min(t,n))}}function Ba(e,t,n){var r=e[0],i=e[1],a=t[0],o=t[1];return i<r?(r=Ra(i,r),a=n(o,a)):(r=Ra(r,i),a=n(a,o)),function(e){return a(r(e))}}function Va(e,t,n){var r=Math.min(e.length,t.length)-1,i=Array(r),a=Array(r),o=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<r;)i[o]=Ra(e[o],e[o+1]),a[o]=n(t[o],t[o+1]);return function(t){var n=v(e,t,1,r)-1;return a[n](i[n](t))}}function Ha(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Ua(){var e=Ia,t=Ia,n=lr,r,i,a,o=La,s,c,l;function u(){var n=Math.min(e.length,t.length);return o!==La&&(o=za(e[0],e[n-1])),s=n>2?Va:Ba,c=l=null,d}function d(i){return i==null||isNaN(i=+i)?a:(c||=s(e.map(r),t,n))(r(o(i)))}return d.invert=function(n){return o(i((l||=s(t,e.map(r),nr))(n)))},d.domain=function(t){return arguments.length?(e=Array.from(t,Fa),u()):e.slice()},d.range=function(e){return arguments.length?(t=Array.from(e),u()):t.slice()},d.rangeRound=function(e){return t=Array.from(e),n=ur,u()},d.clamp=function(e){return arguments.length?(o=e?!0:La,u()):o!==La},d.interpolate=function(e){return arguments.length?(n=e,u()):n},d.unknown=function(e){return arguments.length?(a=e,d):a},function(e,t){return r=e,i=t,u()}}function Wa(){return Ua()(La,La)}function Ga(e,t,n,r){var i=T(e,t,n),a;switch(r=ha(r??`,f`),r.type){case`s`:var o=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(a=ja(i,o))&&(r.precision=a),Oa(r,o);case``:case`e`:case`g`:case`p`:case`r`:r.precision==null&&!isNaN(a=Ma(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=a-(r.type===`e`));break;case`f`:case`%`:r.precision==null&&!isNaN(a=Aa(i))&&(r.precision=a-(r.type===`%`)*2)}return Da(r)}function Ka(e){var t=e.domain;return e.ticks=function(e){var n=t();return C(n[0],n[n.length-1],e??10)},e.tickFormat=function(e,n){var r=t();return Ga(r[0],r[r.length-1],e??10,n)},e.nice=function(n){n??=10;var r=t(),i=0,a=r.length-1,o=r[i],s=r[a],c,l,u=10;for(s<o&&(l=o,o=s,s=l,l=i,i=a,a=l);u-->0;){if(l=w(o,s,n),l===c)return r[i]=o,r[a]=s,t(r);if(l>0)o=Math.floor(o/l)*l,s=Math.ceil(s/l)*l;else if(l<0)o=Math.ceil(o*l)/l,s=Math.floor(s*l)/l;else break;c=l}return e},e}function qa(){var e=Wa();return e.copy=function(){return Ha(e,qa())},Na.apply(e,arguments),Ka(e)}function Ja(e,t,n){this.k=e,this.x=t,this.y=n}Ja.prototype={constructor:Ja,scale:function(e){return e===1?this:new Ja(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ja(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return`translate(`+this.x+`,`+this.y+`) scale(`+this.k+`)`}};var Ya=new Ja(1,0,0);Xa.prototype=Ja.prototype;function Xa(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Ya;return e.__zoom}function Za(e,t,n,r,i){if(e.clearRect(0,0,t,n),r.length===0)return;let a=r[r.length-1].t,o=r.map(e=>e.xTrue),s=Math.min(0,D(o),i)*1.1-.05,c=Math.max(i,E(o))*1.2+.05,l=qa().domain([0,a]).range([40,t-40]),u=qa().domain([s,c]).range([n-40,40]);e.strokeStyle=`#ccc`,e.lineWidth=1,e.beginPath(),e.moveTo(40,40),e.lineTo(40,n-40),e.lineTo(t-40,n-40),e.stroke(),e.strokeStyle=`#e8743b`,e.setLineDash([6,4]),e.beginPath(),e.moveTo(40,u(i)),e.lineTo(t-40,u(i)),e.stroke(),e.setLineDash([]),e.strokeStyle=`rgba(120,120,120,0.35)`,e.beginPath(),r.forEach((t,n)=>{let r=l(t.t),i=u(t.x);n===0?e.moveTo(r,i):e.lineTo(r,i)}),e.stroke(),e.strokeStyle=`#3a5fcd`,e.lineWidth=2,e.beginPath(),r.forEach((t,n)=>{let r=l(t.t),i=u(t.xTrue);n===0?e.moveTo(r,i):e.lineTo(r,i)}),e.stroke(),e.fillStyle=`#333`,e.font=`12px sans-serif`,e.fillText(`position`,44,32),e.fillText(`time (s)`,t-40-40,n-40+24),e.fillStyle=`#e8743b`,e.fillText(`setpoint = ${i}`,t-40-90,u(i)-6)}function Qa(e,t,n){let r=-1/0,i=0;for(let t of e)r=Math.max(r,t.xTrue),i+=t.F*t.F;let a=t===0?0:Math.max(0,(r-t)/t)*100,o=.02*Math.abs(t),s=0;for(let n=e.length-1;n>=0;n--)if(Math.abs(t-e[n].xTrue)>o){s=n;break}return{overshoot:a,settleTime:s*n,steadyError:Math.abs(t-e[e.length-1].xTrue),controlEffort:i}}function $a(e){let t=e.aggressiveness,n=e.robustness;return{track:1,effort:5e-4*(1-t)+.002*n,overshoot:.5*n+.05*(1-t),settle:2*t+.2}}function eo(e,t,n,r){let i=0,a=0,o=-1/0;for(let t of e)i+=t.error*t.error*n,a+=t.F*t.F*n,o=Math.max(o,t.xTrue);let s=t===0?0:Math.max(0,(o-t)/t),c=.02*Math.abs(t),l=0;for(let n=e.length-1;n>=0;n--)if(Math.abs(t-e[n].xTrue)>c){l=n;break}let u=l*n;return r.track*i+r.effort*a+r.overshoot*s+r.settle*u}var to=1e-7,no=1e-4,ro=class{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}},io=class{refCount(e){return ao(`refCount`)}incRef(e){return ao(`incRef`)}timerAvailable(){return!0}time(e){return ao(`time`)}read(e){return ao(`read`)}readSync(e){return ao(`readSync`)}readToGPU(e,t){return ao(`readToGPU`)}numDataIds(){return ao(`numDataIds`)}disposeData(e,t){return ao(`disposeData`)}write(e,t,n){return ao(`write`)}move(e,t,n,r,i){return ao(`move`)}createTensorFromGPUData(e,t,n){return ao(`createTensorFromGPUData`)}memory(){return ao(`memory`)}floatPrecision(){return ao(`floatPrecision`)}epsilon(){return this.floatPrecision()===32?to:no}dispose(){return ao(`dispose`)}};function ao(e){throw Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function oo(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,lo(e,t,n)}function so(e,t,n){return Math.max(e,Math.min(t,n))}function co(e){return e%2==0?e:e+1}function lo(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function uo(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function O(e,t){if(!e)throw Error(typeof t==`string`?t:t())}function fo(e,t,n=``){O(mo(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function po(e){O(e!=null,()=>`The input to the tensor constructor must be a non-null value.`)}function k(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function mo(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function ho(e){return e%1==0}function go(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function _o(e,t){return t<=e.length?e:e+` `.repeat(t-e.length)}function vo(e,t=e=>0,n,r){return new Promise((i,a)=>{let o=0,s=()=>{if(e()){i();return}o++;let c=t(o);if(n!=null&&o>=n){a();return}r==null?setTimeout(s,c):r(s,c)};s()})}function yo(e,t){let n=1,r=-1;for(let t=0;t<e.length;++t)if(e[t]>=0)n*=e[t];else if(e[t]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${t}`);r=t}else if(e[t]<0)throw Error(`Shapes can not be < 0. Found ${e[t]} at dim ${t}`);if(r===-1){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(n===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);let i=e.slice();return i[r]=t/n,i}function bo(e,t){let n=t.length;return e=e==null?t.map((e,t)=>t):[].concat(e),O(e.every(e=>e>=-n&&e<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),O(e.every(e=>ho(e)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(e=>e<0?n+e:e)}function xo(e,t){let n=[],r=[],i=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||i?null:bo(t,e).sort(),o=0;for(let t=0;t<e.length;++t){if(a!=null){if(a[o]===t&&e[t]!==1)throw Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(a[o]==null||a[o]>t)&&e[t]===1&&(n.push(e[t]),r.push(t)),a[o]<=t&&o++}e[t]!==1&&(n.push(e[t]),r.push(t))}return{newShape:n,keptDims:r}}function So(e,t){return Co(e,t)}function Co(e,t){let n=null;if(e==null||e===`float32`)n=new Float32Array(t);else if(e===`int32`)n=new Int32Array(t);else if(e===`bool`)n=new Uint8Array(t);else if(e===`string`)n=Array(t);else throw Error(`Unknown data type ${e}`);return n}function wo(e,t){for(let n=0;n<e.length;n++){let r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function To(e){return e===`bool`||e===`complex64`||e===`float32`||e===`int32`||e===`string`}function Eo(e,t){return!(t===`complex64`||t===`float32`&&e!==`complex64`||t===`int32`&&e!==`float32`&&e!==`complex64`||t===`bool`&&e===`bool`)}function Do(e){if(e===`float32`||e===`int32`)return 4;if(e===`complex64`)return 8;if(e===`bool`)return 1;throw Error(`Unknown dtype ${e}`)}function Oo(e){if(e==null)return 0;let t=0;return e.forEach(e=>t+=e.length),t}function ko(e){return typeof e==`string`||e instanceof String}function Ao(e){return typeof e==`boolean`}function jo(e){return typeof e==`number`}function Mo(e){return Array.isArray(e)?Mo(e[0]):e instanceof Float32Array?`float32`:e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?`int32`:jo(e)?`float32`:ko(e)?`string`:Ao(e)?`bool`:`float32`}function No(e){return!!(e&&e.constructor&&e.call&&e.apply)}function Po(e,t){for(let n=t;n<e;++n)if(e%n===0)return n;return e}function A(e){let t=e.length;if(t<2)return[];let n=Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function Fo(e,t,n,r=!1){let i=[];if(t.length===1){let a=t[0]*(r?2:1);for(let t=0;t<a;t++)i[t]=n[e+t]}else{let a=t[0],o=t.slice(1),s=o.reduce((e,t)=>e*t)*(r?2:1);for(let t=0;t<a;t++)i[t]=Fo(e+t*s,o,n,r)}return i}function Io(e,t,n=!1){if(e.length===0)return t[0];let r=e.reduce((e,t)=>e*t)*(n?2:1);if(r===0)return[];if(r!==t.length)throw Error(`[${e}] does not match the input size ${t.length}${n?` for a complex tensor`:``}.`);return Fo(0,e,t,n)}function Lo(e,t){if(Array.isArray(e))return e;if(t===`float32`)return e instanceof Float32Array?e:new Float32Array(e);if(t===`int32`)return e instanceof Int32Array?e:new Int32Array(e);if(t===`bool`||t===`string`)return Uint8Array.from(new Int32Array(e));throw Error(`Unknown dtype ${t}`)}function Ro(e,t){let n=zo(e,t);for(let e=0;e<n.length;e++)n[e]=1;return n}function zo(e,t){if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`)return new Uint8Array(e);throw Error(`Unknown data type ${t}`)}function Bo(e,t){let n=e.reduce((e,t)=>e*t,1);if(t==null||t===`float32`)return Io(e,new Float32Array(n));if(t===`int32`)return Io(e,new Int32Array(n));if(t===`bool`)return Io(e,new Uint8Array(n));throw Error(`Unknown data type ${t}`)}function Vo(e){e.forEach(t=>{O(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function Ho(e,t,n){if(t===0)return 0;if(t===1)return e[0];let r=e[e.length-1];for(let t=0;t<e.length-1;++t)r+=n[t]*e[t];return r}function Uo(e,t,n){if(t===0)return[];if(t===1)return[e];let r=Array(t);for(let t=0;t<r.length-1;++t)r[t]=Math.floor(e/n[t]),e-=r[t]*n[t];return r[r.length-1]=e,r}function Wo(e){return e&&e.then&&typeof e.then==`function`}var Go=`tfjsflags`,Ko=class{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=qo,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(j().getBool(`IS_TEST`)||j().getBool(`PROD`)||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},this.urlFlags[e]!=null){let t=this.urlFlags[e];j().getBool(`IS_TEST`)||j().getBool(`PROD`)||console.warn(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];let t=this.evaluateFlag(e);if(Wo(t))throw Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(this.global===void 0||this.global.location===void 0||this.global.location.search===void 0)return;let e=this.getQueryParams(this.global.location.search);Go in e&&e[Go].split(`,`).forEach(e=>{let[t,n]=e.split(`:`);this.urlFlags[t]=Yo(t,n)})}};function qo(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...n)=>(Jo(t,n[0],n[1]),n.join(`=`))),t}function Jo(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||``)}function Yo(e,t){let n=t.toLowerCase();return n===`true`||n===`false`?n===`true`:`${+n}`===n?+n:t}function j(){return Xo}var Xo=null;function Zo(e){Xo=e}var Qo;function $o(){if(Qo==null){let e;if(typeof window<`u`)e=window;else if(typeof global<`u`)e=global;else if(typeof process<`u`)e=process;else if(typeof self<`u`)e=self;else throw Error(`Could not find a global object`);Qo=e}return Qo}function es(){let e=$o();return e._tfGlobals??=new Map,e._tfGlobals}function ts(e,t){let n=es();if(n.has(e))return n.get(e);{let r=t();return n.set(e,r),n.get(e)}}var ns=`Acos`,rs=`Acosh`,is=`AddN`,as=`ArgMax`,os=`ArgMin`,ss=`Asin`,cs=`Asinh`,ls=`Atan`,us=`Atanh`,ds=`Atan2`,fs=`AvgPool`,ps=`AvgPoolGrad`,ms=`AvgPool3D`,hs=`AvgPool3DGrad`,gs=`BatchMatMul`,_s=`BatchToSpaceND`,vs=`Bincount`,ys=`BitwiseAnd`,bs=`BroadcastTo`,xs=`BroadcastArgs`,Ss=`Cast`,Cs=`Ceil`,ws=`ClipByValue`,Ts=`Complex`,Es=`ComplexAbs`,Ds=`Concat`,Os=`Conv2D`,ks=`Conv2DBackpropFilter`,As=`Conv2DBackpropInput`,js=`Conv3D`,Ms=`Conv3DBackpropFilterV2`,Ns=`Conv3DBackpropInputV2`,Ps=`Cosh`,Fs=`Cumprod`,Is=`Cumsum`,Ls=`CropAndResize`,Rs=`DenseBincount`,zs=`DepthToSpace`,Bs=`DepthwiseConv2dNative`,Vs=`DepthwiseConv2dNativeBackpropFilter`,Hs=`DepthwiseConv2dNativeBackpropInput`,Us=`Diag`,Ws=`Dilation2D`,Gs=`Dilation2DBackpropInput`,Ks=`Dilation2DBackpropFilter`,qs=`Draw`,Js=`RealDiv`,Ys=`Einsum`,Xs=`EluGrad`,Zs=`Equal`,Qs=`ExpandDims`,$s=`Expm1`,ec=`Fill`,tc=`FlipLeftRight`,nc=`Floor`,rc=`FloorDiv`,ic=`FusedBatchNorm`,ac=`GatherV2`,oc=`GatherNd`,sc=`Greater`,cc=`GreaterEqual`,lc=`Identity`,uc=`IFFT`,dc=`Imag`,fc=`IsFinite`,pc=`IsInf`,mc=`IsNan`,hc=`LeakyRelu`,gc=`Less`,_c=`LessEqual`,vc=`LinSpace`,yc=`Log1p`,bc=`LogicalAnd`,xc=`LogicalNot`,Sc=`LogicalOr`,Cc=`LogSoftmax`,wc=`LRNGrad`,Tc=`Maximum`,Ec=`MaxPool`,Dc=`MaxPoolGrad`,Oc=`MaxPool3D`,kc=`MaxPool3DGrad`,Ac=`MaxPoolWithArgmax`,jc=`Mean`,Mc=`Minimum`,Nc=`MirrorPad`,Pc=`Multinomial`,Fc=`Multiply`,Ic=`NotEqual`,Lc=`NonMaxSuppressionV3`,Rc=`NonMaxSuppressionV4`,zc=`NonMaxSuppressionV5`,Bc=`OnesLike`,Vc=`OneHot`,Hc=`Pack`,Uc=`PadV2`,Wc=`Prelu`,Gc=`Prod`,Kc=`RaggedGather`,qc=`RaggedRange`,Jc=`RaggedTensorToTensor`,Yc=`Range`,Xc=`Real`,Zc=`Reciprocal`,Qc=`Relu`,$c=`Reshape`,el=`ResizeNearestNeighbor`,tl=`ResizeNearestNeighborGrad`,nl=`ResizeBilinear`,rl=`ResizeBilinearGrad`,il=`Relu6`,al=`Reverse`,ol=`Round`,sl=`Rsqrt`,cl=`ScatterNd`,ll=`TensorScatterUpdate`,ul=`SearchSorted`,dl=`Select`,fl=`Selu`,pl=`Slice`,ml=`Sinh`,hl=`Sign`,gl=`Sigmoid`,_l=`Softplus`,vl=`Sqrt`,yl=`SpaceToBatchND`,bl=`SplitV`,xl=`Softmax`,Sl=`SparseFillEmptyRows`,Cl=`SparseReshape`,wl=`SparseSegmentMean`,Tl=`SparseSegmentSum`,El=`SparseToDense`,Dl=`SquaredDifference`,Ol=`Square`,kl=`StaticRegexReplace`,Al=`StridedSlice`,jl=`StringNGrams`,Ml=`StringSplit`,Nl=`StringToHashBucketFast`,Pl=`Tanh`,Fl=`Tile`,Il=`TopK`,Ll=`Transform`,Rl=`Transpose`,zl=`Unique`,Bl=`Unpack`,Vl=`UnsortedSegmentSum`,Hl=`ZerosLike`,Ul=`Step`,Wl=`FromPixels`,Gl=`RotateWithOffset`,Kl=`_FusedMatMul`,ql=`FusedConv2D`,Jl=`FusedDepthwiseConv2D`;function Yl(...e){j().getBool(`IS_TEST`)||j().getBool(`PROD`)||console.warn(...e)}function Xl(...e){j().getBool(`IS_TEST`)||j().getBool(`PROD`)||console.log(...e)}var Zl=ts(`kernelRegistry`,()=>new Map),Ql=ts(`gradRegistry`,()=>new Map);function $l(e,t){let n=iu(e,t);return Zl.get(n)}function eu(e){return Ql.get(e)}function tu(e){let t=Zl.entries(),n=[];for(;;){let{done:r,value:i}=t.next();if(r)break;let[a,o]=i,[s]=a.split(`_`);s===e&&n.push(o)}return n}function nu(e){let{kernelName:t,backendName:n}=e,r=iu(t,n);Zl.has(r)&&Yl(`The kernel '${t}' for backend '${n}' is already registered`),Zl.set(r,e)}function ru(e){let{kernelName:t}=e;Ql.has(t)&&j().getBool(`DEBUG`)&&Yl(`Overriding the gradient for '${t}'`),Ql.set(t,e)}function iu(e,t){return`${t}_${e}`}function au(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}var ou=l(o(((e,t)=>{t.exports=r;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function r(e,t,n){this.low=e|0,this.high=t|0,this.unsigned=!!n}r.prototype.__isLong__,Object.defineProperty(r.prototype,"__isLong__",{value:!0});function i(e){return(e&&e.__isLong__)===!0}r.isLong=i;var a={},o={};function s(e,t){var n,r,i;return t?(e>>>=0,(i=0<=e&&e<256)&&(r=o[e],r)?r:(n=l(e,(e|0)<0?-1:0,!0),i&&(o[e]=n),n)):(e|=0,(i=-128<=e&&e<128)&&(r=a[e],r)?r:(n=l(e,e<0?-1:0,!1),i&&(a[e]=n),n))}r.fromInt=s;function c(e,t){if(isNaN(e))return t?b:y;if(t){if(e<0)return b;if(e>=g)return T}else{if(e<=-_)return E;if(e+1>=_)return w}return e<0?c(-e,t).neg():l(e%h|0,e/h|0,t)}r.fromNumber=c;function l(e,t,n){return new r(e,t,n)}r.fromBits=l;var u=Math.pow;function d(e,t,n){if(e.length===0)throw Error(`empty string`);if(e===`NaN`||e===`Infinity`||e===`+Infinity`||e===`-Infinity`)return y;if(typeof t==`number`?(n=t,t=!1):t=!!t,n||=10,n<2||36<n)throw RangeError(`radix`);var r;if((r=e.indexOf(`-`))>0)throw Error(`interior hyphen`);if(r===0)return d(e.substring(1),t,n).neg();for(var i=c(u(n,8)),a=y,o=0;o<e.length;o+=8){var s=Math.min(8,e.length-o),l=parseInt(e.substring(o,o+s),n);if(s<8){var f=c(u(n,s));a=a.mul(f).add(c(l))}else a=a.mul(i),a=a.add(c(l))}return a.unsigned=t,a}r.fromString=d;function f(e,t){return typeof e==`number`?c(e,t):typeof e==`string`?d(e,t):l(e.low,e.high,typeof t==`boolean`?t:e.unsigned)}r.fromValue=f;var p=65536,m=1<<24,h=p*p,g=h*h,_=g/2,v=s(m),y=s(0);r.ZERO=y;var b=s(0,!0);r.UZERO=b;var x=s(1);r.ONE=x;var S=s(1,!0);r.UONE=S;var C=s(-1);r.NEG_ONE=C;var w=l(-1,2147483647,!1);r.MAX_VALUE=w;var T=l(-1,-1,!0);r.MAX_UNSIGNED_VALUE=T;var E=l(0,-2147483648,!1);r.MIN_VALUE=E;var D=r.prototype;D.toInt=function(){return this.unsigned?this.low>>>0:this.low},D.toNumber=function(){return this.unsigned?(this.high>>>0)*h+(this.low>>>0):this.high*h+(this.low>>>0)},D.toString=function(e){if(e||=10,e<2||36<e)throw RangeError(`radix`);if(this.isZero())return`0`;if(this.isNegative()){if(this.eq(E)){var t=c(e),n=this.div(t),r=n.mul(t).sub(this);return n.toString(e)+r.toInt().toString(e)}return`-`+this.neg().toString(e)}for(var i=c(u(e,6),this.unsigned),a=this,o=``;;){var s=a.div(i),l=(a.sub(s.mul(i)).toInt()>>>0).toString(e);if(a=s,a.isZero())return l+o;for(;l.length<6;)l=`0`+l;o=``+l+o}},D.getHighBits=function(){return this.high},D.getHighBitsUnsigned=function(){return this.high>>>0},D.getLowBits=function(){return this.low},D.getLowBitsUnsigned=function(){return this.low>>>0},D.getNumBitsAbs=function(){if(this.isNegative())return this.eq(E)?64:this.neg().getNumBitsAbs();for(var e=this.high==0?this.low:this.high,t=31;t>0&&!(e&1<<t);t--);return this.high==0?t+1:t+33},D.isZero=function(){return this.high===0&&this.low===0},D.eqz=D.isZero,D.isNegative=function(){return!this.unsigned&&this.high<0},D.isPositive=function(){return this.unsigned||this.high>=0},D.isOdd=function(){return(this.low&1)==1},D.isEven=function(){return!(this.low&1)},D.equals=function(e){return i(e)||(e=f(e)),this.unsigned!==e.unsigned&&this.high>>>31==1&&e.high>>>31==1?!1:this.high===e.high&&this.low===e.low},D.eq=D.equals,D.notEquals=function(e){return!this.eq(e)},D.neq=D.notEquals,D.ne=D.notEquals,D.lessThan=function(e){return this.comp(e)<0},D.lt=D.lessThan,D.lessThanOrEqual=function(e){return this.comp(e)<=0},D.lte=D.lessThanOrEqual,D.le=D.lessThanOrEqual,D.greaterThan=function(e){return this.comp(e)>0},D.gt=D.greaterThan,D.greaterThanOrEqual=function(e){return this.comp(e)>=0},D.gte=D.greaterThanOrEqual,D.ge=D.greaterThanOrEqual,D.compare=function(e){if(i(e)||(e=f(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},D.comp=D.compare,D.negate=function(){return!this.unsigned&&this.eq(E)?E:this.not().add(x)},D.neg=D.negate,D.add=function(e){i(e)||(e=f(e));var t=this.high>>>16,n=this.high&65535,r=this.low>>>16,a=this.low&65535,o=e.high>>>16,s=e.high&65535,c=e.low>>>16,u=e.low&65535,d=0,p=0,m=0,h=0;return h+=a+u,m+=h>>>16,h&=65535,m+=r+c,p+=m>>>16,m&=65535,p+=n+s,d+=p>>>16,p&=65535,d+=t+o,d&=65535,l(m<<16|h,d<<16|p,this.unsigned)},D.subtract=function(e){return i(e)||(e=f(e)),this.add(e.neg())},D.sub=D.subtract,D.multiply=function(e){if(this.isZero())return y;if(i(e)||(e=f(e)),n)return l(n.mul(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned);if(e.isZero())return y;if(this.eq(E))return e.isOdd()?E:y;if(e.eq(E))return this.isOdd()?E:y;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(v)&&e.lt(v))return c(this.toNumber()*e.toNumber(),this.unsigned);var t=this.high>>>16,r=this.high&65535,a=this.low>>>16,o=this.low&65535,s=e.high>>>16,u=e.high&65535,d=e.low>>>16,p=e.low&65535,m=0,h=0,g=0,_=0;return _+=o*p,g+=_>>>16,_&=65535,g+=a*p,h+=g>>>16,g&=65535,g+=o*d,h+=g>>>16,g&=65535,h+=r*p,m+=h>>>16,h&=65535,h+=a*d,m+=h>>>16,h&=65535,h+=o*u,m+=h>>>16,h&=65535,m+=t*p+r*d+a*u+o*s,m&=65535,l(g<<16|_,m<<16|h,this.unsigned)},D.mul=D.multiply,D.divide=function(e){if(i(e)||(e=f(e)),e.isZero())throw Error(`division by zero`);if(n)return!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1?this:l((this.unsigned?n.div_u:n.div_s)(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned);if(this.isZero())return this.unsigned?b:y;var t,r,a;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return b;if(e.gt(this.shru(1)))return S;a=b}else{if(this.eq(E))return e.eq(x)||e.eq(C)?E:e.eq(E)?x:(t=this.shr(1).div(e).shl(1),t.eq(y)?e.isNegative()?x:C:(r=this.sub(e.mul(t)),a=t.add(r.div(e)),a));if(e.eq(E))return this.unsigned?b:y;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();a=y}for(r=this;r.gte(e);){t=Math.max(1,Math.floor(r.toNumber()/e.toNumber()));for(var o=Math.ceil(Math.log(t)/Math.LN2),s=o<=48?1:u(2,o-48),d=c(t),p=d.mul(e);p.isNegative()||p.gt(r);)t-=s,d=c(t,this.unsigned),p=d.mul(e);d.isZero()&&(d=x),a=a.add(d),r=r.sub(p)}return a},D.div=D.divide,D.modulo=function(e){return i(e)||(e=f(e)),n?l((this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},D.mod=D.modulo,D.rem=D.modulo,D.not=function(){return l(~this.low,~this.high,this.unsigned)},D.and=function(e){return i(e)||(e=f(e)),l(this.low&e.low,this.high&e.high,this.unsigned)},D.or=function(e){return i(e)||(e=f(e)),l(this.low|e.low,this.high|e.high,this.unsigned)},D.xor=function(e){return i(e)||(e=f(e)),l(this.low^e.low,this.high^e.high,this.unsigned)},D.shiftLeft=function(e){return i(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?l(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):l(0,this.low<<e-32,this.unsigned)},D.shl=D.shiftLeft,D.shiftRight=function(e){return i(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?l(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):l(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},D.shr=D.shiftRight,D.shiftRightUnsigned=function(e){if(i(e)&&(e=e.toInt()),e&=63,e===0)return this;var t=this.high;if(e<32){var n=this.low;return l(n>>>e|t<<32-e,t>>>e,this.unsigned)}return l(e===32?t:t>>>e-32,0,this.unsigned)},D.shru=D.shiftRightUnsigned,D.shr_u=D.shiftRightUnsigned,D.toSigned=function(){return this.unsigned?l(this.low,this.high,!1):this},D.toUnsigned=function(){return this.unsigned?this:l(this.low,this.high,!0)},D.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},D.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]},D.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]},r.fromBytes=function(e,t,n){return n?r.fromBytesLE(e,t):r.fromBytesBE(e,t)},r.fromBytesLE=function(e,t){return new r(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},r.fromBytesBE=function(e,t){return new r(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}}))()),su=ou.default||ou;function cu(e){return su.fromString(e,!0,16)}var lu=cu(`c3a5c85c97cb3127`),uu=cu(`b492b66fbe98f273`),du=cu(`9ae16a3b2f90404f`);function fu(e){return e.xor(e.shru(47))}function pu(e,t,n){let r=e.slice(t,t+n);return su.fromBytes(Array.from(r),!0,!0)}function mu(e,t){return pu(e,t,8)}function hu(e,t){return pu(e,t,4)}function gu(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function _u(e,t,n=cu(`9ddfea08eb382d69`)){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let i=t.xor(r).mul(n);return i=i.xor(i.shru(47)),i=i.mul(n),i}function vu(e,t,n,r,i,a){i=i.add(e),a=gu(a.add(i).add(r),21);let o=i;return i=i.add(t),i=i.add(n),a=a.add(gu(i,44)),[i.add(r),a.add(o)]}function yu(e,t,n,r){return vu(mu(e,t),mu(e,t+8),mu(e,t+16),mu(e,t+24),n,r)}function bu(e,t=e.length){if(t>=8){let n=du.add(t*2),r=mu(e,0).add(du),i=mu(e,t-8);return _u(gu(i,37).mul(n).add(r),gu(r,25).add(i).mul(n),n)}if(t>=4){let n=du.add(t*2);return _u(hu(e,0).shl(3).add(t),hu(e,t-4),n)}if(t>0){let n=e[0],r=e[t>>1],i=e[t-1],a=n+(r<<8),o=t+(i<<2);return fu(du.mul(a).xor(lu.mul(o))).mul(du)}return du}function xu(e,t=e.length){let n=du.add(t*2),r=mu(e,0).mul(uu),i=mu(e,8),a=mu(e,t-8).mul(n),o=mu(e,t-16).mul(du);return _u(gu(r.add(i),43).add(gu(a,30)).add(o),r.add(gu(i.add(du),18)).add(a),n)}function Su(e,t=e.length){let n=du.add(t*2),r=mu(e,0).mul(du),i=mu(e,8),a=mu(e,t-8).mul(n),o=mu(e,t-16).mul(du),s=gu(r.add(i),43).add(gu(a,30)).add(o),c=_u(s,r.add(gu(i.add(du),18)).add(a),n),l=mu(e,16).mul(n),u=mu(e,24),d=s.add(mu(e,t-32)).mul(n),f=c.add(mu(e,t-24)).mul(n);return _u(gu(l.add(u),43).add(gu(d,30)).add(f),l.add(gu(u.add(r),18)).add(d),n)}function Cu(e,t=e.length){let n=su.fromNumber(81,!0);if(t<=32)return t<=16?bu(e,t):xu(e,t);if(t<=64)return Su(e,t);let r=n,i=n.mul(uu).add(113),a=fu(i.mul(du).add(113)).mul(du),o=[su.UZERO,su.UZERO],s=[su.UZERO,su.UZERO];r=r.mul(du).add(mu(e,0));let c=0,l=(t-1>>6)*64,u=l+(t-1&63)-63;do r=gu(r.add(i).add(o[0]).add(mu(e,c+8)),37).mul(uu),i=gu(i.add(o[1]).add(mu(e,c+48)),42).mul(uu),r=r.xor(s[1]),i=i.add(o[0]).add(mu(e,c+40)),a=gu(a.add(s[0]),33).mul(uu),o=yu(e,c,o[1].mul(uu),r.add(s[0])),s=yu(e,c+32,a.add(s[1]),i.add(mu(e,c+16))),[a,r]=[r,a],c+=64;while(c!==l);let d=uu.add(a.and(255).shl(1));return c=u,s[0]=s[0].add(t-1&63),o[0]=o[0].add(s[0]),s[0]=s[0].add(o[0]),r=gu(r.add(i).add(o[0]).add(mu(e,c+8)),37).mul(d),i=gu(i.add(o[1]).add(mu(e,c+48)),42).mul(d),r=r.xor(s[1].mul(9)),i=i.add(o[0].mul(9).add(mu(e,c+40))),a=gu(a.add(s[0]),33).mul(d),o=yu(e,c,o[1].mul(d),r.add(s[0])),s=yu(e,c+32,a.add(s[1]),i.add(mu(e,c+16))),[a,r]=[r,a],_u(_u(o[0],s[0],d).add(fu(i).mul(lu)).add(a),_u(o[1],s[1],d).add(r),d)}function wu(e,t){return t===`string`?Ou(e):Eu([e],t)}function Tu(e,t){return e instanceof Float32Array&&t===`float32`||e instanceof Int32Array&&t===`int32`||e instanceof Uint8Array&&t===`bool`}function Eu(e,t){if(t===`string`)throw Error(`Cannot convert a string[] to a TypedArray`);if(Array.isArray(e)&&(e=ju(e)),j().getBool(`DEBUG`)&&wo(e,t),Tu(e,t))return e;if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`){let t=new Uint8Array(e.length);for(let n=0;n<t.length;++n)Math.round(e[n])!==0&&(t[n]=1);return t}throw Error(`Unknown data type ${t}`)}function Du(){return j().platform.now()}function Ou(e,t=`utf-8`){return t||=`utf-8`,j().platform.encode(e,t)}function ku(e,t=`utf-8`){return t||=`utf-8`,j().platform.decode(e,t)}function Au(e){return j().platform.isTypedArray==null?au(e):j().platform.isTypedArray(e)}function ju(e,t=[],n=!1){if(t??=[],typeof e==`boolean`||typeof e==`number`||typeof e==`string`||Wo(e)||e==null||Au(e)&&n)t.push(e);else if(Array.isArray(e)||Au(e))for(let r=0;r<e.length;++r)ju(e[r],t,n);else{let r=-1;for(let t of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(t)&&(r=Math.max(r,Number(t)));for(let i=0;i<=r;i++)ju(e[i],t,n)}return t}var Mu=class{constructor(e,t){this.backendTimer=e,this.logger=t,t??(this.logger=new Pu)}profileKernel(e,t,n){let r,i=()=>{r=n()},a,o=Du();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(i);else{i();for(let e of r)e.dataSync();a=Promise.resolve({kernelMs:Du()-o})}if(j().getBool(`CHECK_COMPUTATION_FOR_ERRORS`))for(let t=0;t<r.length;t++){let n=r[t];n.data().then(t=>{Nu(t,n.dtype,e)})}return{kernelName:e,outputs:r,inputs:t,timeMs:a.then(e=>e.kernelMs),extraInfo:a.then(e=>e.getExtraProfileInfo==null?``:e.getExtraProfileInfo())}}logKernelProfile(e){let{kernelName:t,outputs:n,timeMs:r,inputs:i,extraInfo:a}=e;n.forEach(e=>{Promise.all([e.data(),r,a]).then(n=>{this.logger.logKernelProfile(t,e,n[0],n[1],i,n[2])})})}};function Nu(e,t,n){if(t!==`float32`)return!1;for(let t=0;t<e.length;t++){let r=e[t];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}var Pu=class{logKernelProfile(e,t,n,r,i,a){let o=typeof r==`number`?_o(`${r}ms`,9):r.error,s=_o(e,25),c=t.rank,l=t.size,u=_o(t.shape.toString(),14),d=``;for(let e in i){let n=i[e];if(n!=null){let r=n.shape||t.shape,i=r.length;d+=`${e}: ${i}D ${i>0?r:``} `}}console.log(`%c${s}\t%c${o}\t%c${c}D ${u}\t%c${l}\t%c${d}\t%c${a}`,`font-weight:bold`,`color:red`,`color:blue`,`color: orange`,`color: green`,`color: steelblue`)}};function Fu(e,t,n){let r={},i={};for(let e=0;e<t.length;e++)r[t[e].id]=!0;for(let n=0;n<e.length;n++){let a=e[n],o=a.inputs;for(let e in o){let n=o[e],s=!1;for(let e=0;e<t.length;e++)if(r[n.id]){a.outputs.forEach(e=>r[e.id]=!0),s=!0,i[a.id]=!0;break}if(s)break}}let a={};a[n.id]=!0;let o={};for(let t=e.length-1;t>=0;t--){let n=e[t],r=n.inputs;for(let e=0;e<n.outputs.length;e++)if(a[n.outputs[e].id]){for(let e in r)a[r[e].id]=!0,o[n.id]=!0;break}}let s=[];for(let t=0;t<e.length;t++){let n=e[t];if(i[n.id]&&o[n.id]){let e={};for(let t in n.inputs){let i=n.inputs[t];r[i.id]&&(e[t]=i)}let t=Object.assign({},n);t.inputs=e,t.outputs=n.outputs,s.push(t)}}return s}function Iu(e,t,n,r){for(let i=t.length-1;i>=0;i--){let a=t[i],o=[];if(a.outputs.forEach(t=>{let n=e[t.id];n==null?o.push(null):o.push(n)}),a.gradient==null)throw Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);let s=a.gradient(o);for(let t in a.inputs){if(!(t in s))throw Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(s)}.`);let i=n(()=>s[t]());if(i.dtype!==`float32`)throw Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${i.dtype}'`);let o=a.inputs[t];if(!mo(i.shape,o.shape))throw Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${t}' has shape '${i.shape}', which does not match the shape of the input '${o.shape}'`);if(e[o.id]==null)e[o.id]=i;else{let t=e[o.id];e[o.id]=r(t,i),t.dispose()}}}}var Lu=20,Ru=3,zu=7;function Bu(e,t,n,r){let i=A(t),a=Vu(e,t,n,i),o=t.length,s=Wu(e,t,n,i,a),c=[`Tensor`];return r&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${o}`),c.push(`  shape: [${t}]`),c.push(`  values:`)),c.push(s.map(e=>`    `+e).join(`
`)),c.join(`
`)}function Vu(e,t,n,r){let i=k(t),a=r[r.length-1],o=Array(a).fill(0),s=t.length,c=n===`complex64`?Gu(e):e;if(s>1)for(let e=0;e<i/a;e++){let t=e*a;for(let e=0;e<a;e++)o[e]=Math.max(o[e],Hu(c[t+e],0,n).length)}return o}function Hu(e,t,n){let r;return r=Array.isArray(e)?`${parseFloat(e[0].toFixed(zu))} + ${parseFloat(e[1].toFixed(zu))}j`:ko(e)?`'${e}'`:n===`bool`?Uu(e):parseFloat(e.toFixed(zu)).toString(),_o(r,t)}function Uu(e){return e===0?`false`:`true`}function Wu(e,t,n,r,i,a=!0){let o=n===`complex64`?2:1,s=t[0],c=t.length;if(c===0)return n===`complex64`?[Hu(Gu(e)[0],0,n)]:n===`bool`?[Uu(e[0])]:[e[0].toString()];if(c===1){if(s>Lu){let t=Ru*o,r=Array.from(e.slice(0,t)),a=Array.from(e.slice((s-Ru)*o,s*o));return n===`complex64`&&(r=Gu(r),a=Gu(a)),[`[`+r.map((e,t)=>Hu(e,i[t],n)).join(`, `)+`, ..., `+a.map((e,t)=>Hu(e,i[s-Ru+t],n)).join(`, `)+`]`]}return[`[`+(n===`complex64`?Gu(e):Array.from(e)).map((e,t)=>Hu(e,i[t],n)).join(`, `)+`]`]}let l=t.slice(1),u=r.slice(1),d=r[0]*o,f=[];if(s>Lu){for(let t=0;t<Ru;t++){let r=t*d,a=r+d;f.push(...Wu(e.slice(r,a),l,n,u,i,!1))}f.push(`...`);for(let t=s-Ru;t<s;t++){let r=t*d,a=r+d;f.push(...Wu(e.slice(r,a),l,n,u,i,t===s-1))}}else for(let t=0;t<s;t++){let r=t*d,a=r+d;f.push(...Wu(e.slice(r,a),l,n,u,i,t===s-1))}let p=c===2?`,`:``;f[0]=`[`+(s>0?f[0]+p:``);for(let e=1;e<f.length-1;e++)f[e]=` `+f[e]+p;let m=`,
`;for(let e=2;e<c;e++)m+=`
`;return f[f.length-1]=` `+f[f.length-1]+`]`+(a?``:m),f}function Gu(e){let t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var Ku=class{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=k(e),n!=null){let e=n.length;O(e===this.size,()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`)}if(t===`complex64`)throw Error(`complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).`);this.values=n||Co(t,this.size),this.strides=A(e)}set(e,...t){t.length===0&&(t=[0]),O(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);let n=this.locToIndex(t);this.values[n]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(let n of e){if(n<0||n>=this.shape[t]){let t=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw Error(t)}t++}let n=e[e.length-1];for(let t=0;t<e.length-1;++t)n+=this.strides[t]*e[t];return this.values[n]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];let t=Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return qu().makeTensor(this.values,this.shape,this.dtype)}},qu=null,Ju=null;function Yu(e){qu=e}function Xu(e){Ju=e}var Zu=class{constructor(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||`float32`,this.size=k(e),this.strides=A(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():`higher`}get rank(){return this.shape.length}async buffer(){let e=await this.data();return Ju.buffer(this.shape,this.dtype,e)}bufferSync(){return Ju.buffer(this.shape,this.dtype,this.dataSync())}async array(){let e=await this.data();return Io(this.shape,e,this.dtype===`complex64`)}arraySync(){return Io(this.shape,this.dataSync(),this.dtype===`complex64`)}async data(){this.throwIfDisposed();let e=qu().read(this.dataId);if(this.dtype===`string`){let t=await e;try{return t.map(e=>ku(e))}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}}return e}dataToGPU(e){return this.throwIfDisposed(),qu().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();let e=qu().readSync(this.dataId);if(this.dtype===`string`)try{return e.map(e=>ku(e))}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}return e}async bytes(){this.throwIfDisposed();let e=await qu().read(this.dataId);return this.dtype===`string`?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),qu().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw Error(`Tensor is disposed.`)}print(e=!1){return Ju.print(this,e)}clone(){return this.throwIfDisposed(),Ju.clone(this)}toString(e=!1){return Bu(this.dataSync(),this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),Ju.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),qu().makeVariable(this,e,t,n)}};Object.defineProperty(Zu,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function M(){return ts(`Tensor`,()=>Zu)}M();var Qu=class extends Zu{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!mo(e.shape,this.shape))throw Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);qu().disposeTensor(this),this.dataId=e.dataId,qu().incRef(this,null)}dispose(){qu().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(Qu,Symbol.hasInstance,{value:e=>e instanceof Zu&&e.assign!=null&&e.assign instanceof Function});var $u;(function(e){e.R0=`R0`,e.R1=`R1`,e.R2=`R2`,e.R3=`R3`,e.R4=`R4`,e.R5=`R5`,e.R6=`R6`})($u||={});var ed;(function(e){e.float32=`float32`,e.int32=`int32`,e.bool=`int32`,e.complex64=`complex64`})(ed||={});var td;(function(e){e.float32=`float32`,e.int32=`int32`,e.bool=`bool`,e.complex64=`complex64`})(td||={});var nd;(function(e){e.float32=`float32`,e.int32=`float32`,e.bool=`float32`,e.complex64=`complex64`})(nd||={});var rd;(function(e){e.float32=`complex64`,e.int32=`complex64`,e.bool=`complex64`,e.complex64=`complex64`})(rd||={});var id={float32:nd,int32:ed,bool:td,complex64:rd};function ad(e,t){if(e===`string`||t===`string`){if(e===`string`&&t===`string`)return`string`;throw Error(`Can not upcast ${e} with ${t}`)}return id[e][t]}function od(e){return ad(e,`int32`)}function sd(e){return typeof e==`object`&&!!e&&`texture`in e&&e.texture instanceof WebGLTexture}function cd(e){return typeof GPUBuffer<`u`&&typeof e==`object`&&!!e&&`buffer`in e&&e.buffer instanceof GPUBuffer}function ld(e,t){if(e.dtype===t.dtype)return[e,t];let n=ad(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function ud(e,t){return t.some(t=>t.id===e.id)}function dd(e){let t=[];return fd(e,t,new Set),t}function fd(e,t,n){if(e==null)return;if(e instanceof Zu){t.push(e);return}if(!pd(e))return;let r=e;for(let e in r){let i=r[e];n.has(i)||(n.add(i),fd(i,t,n))}}function pd(e){return Array.isArray(e)||typeof e==`object`}function md(e){return e.kernelName!=null}var hd=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(let e in this.registeredVariables)this.registeredVariables[e].dispose()}},gd=class e{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new hd}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t];if(await this.initializeBackend(n).success){await this.setBackend(n);return}}throw Error(`Could not initialize any backends, all backend initializations failed.`)}get backend(){if(this.pendingBackendInit!=null)throw Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry)){if(e in this.registryFactory){let{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null}return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(Yl(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;let{success:t,asyncInit:n}=this.initializeBackend(e);if(!(n?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Mu(this.backendInstance),!0}setupRegisteredKernels(){tu(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){tu(e).forEach(t=>{t.disposeFunc!=null&&t.disposeFunc(this.registry[e])})}initializeBackend(e){let t=this.registryFactory[e];if(t==null)throw Error(`Cannot initialize backend ${e}, no registration found.`);try{let n=t.factory();if(n&&!(n instanceof io)&&typeof n.then==`function`){let t=++this.pendingBackendInitId,r=n.then(n=>t<this.pendingBackendInitId?!1:(this.registry[e]=n,this.pendingBackendInit=null,!0)).catch(n=>t<this.pendingBackendInitId?!1:(this.pendingBackendInit=null,Yl(`Initialization of backend ${e} failed`),Yl(n.stack||n.message),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}return this.registry[e]=n,{success:!0,asyncInit:!1}}catch(t){return Yl(`Initialization of backend ${e} failed`),Yl(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw Error(`No backend found in registry.`);return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t],{success:r,asyncInit:i}=this.initializeBackend(n);if(i||r)return{name:n,asyncInit:i}}throw Error(`Could not initialize any backends, all backend initializations failed.`)}moveData(e,t){let n=this.state.tensorInfo.get(t),r=n.backend,i=this.readSync(t),a=r.refCount(t);r.disposeData(t,!0),n.backend=e,e.move(t,i,n.shape,n.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n=null;if(t==null){if(typeof e!=`function`)throw Error(`Please provide a function to tidy()`);t=e}else{if(typeof e!=`string`&&!(e instanceof String))throw Error(`When calling with two arguments, the first argument to tidy() must be a string`);if(typeof t!=`function`)throw Error(`When calling with two arguments, the 2nd argument to tidy() must be a function`);n=e}let r;return this.scopedRun(()=>this.startScope(n),()=>this.endScope(r),()=>(r=t(),r instanceof Promise&&console.error(`Cannot return a Promise inside of tidy.`),r))}scopedRun(e,t,n){e();try{let e=n();return t(),e}catch(e){throw t(),e}}nextTensorId(){return e.nextTensorId++}nextVariableId(){return e.nextVariableId++}clone(e){let t=N.runKernel(lc,{x:e}),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],e=>({x:()=>{let t={x:e};return N.runKernel(Ss,t,{dtype:`float32`})}}),[],{}),t}runKernel(e,t,n){if(this.backendName??this.backend,$l(e,this.backendName)==null)throw Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool(`IS_TEST`)}checkKernelForMemLeak(e,t,n){let r=this.backend.numDataIds(),i=0;n.forEach(e=>{i+=e.dtype===`complex64`?3:1});let a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-i-a;if(o>0)throw Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,n=[],r=this.isTapeOn(),i=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let o;this.backendName??this.backend;let s,c=md(e)?e.kernelName:this.state.activeScope==null?``:this.state.activeScope.name;if(md(e)){let{kernelName:t,inputs:i,attrs:a}=e;this.backendName??this.backend;let c=$l(t,this.backendName);O(c!=null,()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`),o=()=>{let e=this.backend.numDataIds();s=c.kernelFunc({inputs:i,attrs:a,backend:this.backend});let o=Array.isArray(s)?s:[s];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,o);let l=o.map(e=>e.rank==null?this.makeTensorFromTensorInfo(e):e);if(r){let e=this.getTensorsForGradient(t,i,l);n=this.saveTensorsForBackwardMode(e)}return l}}else{let{forwardFunc:t}=e,i=e=>{r&&(n=e.map(e=>this.keep(this.clone(e))))};o=()=>{let e=this.backend.numDataIds();s=this.tidy(()=>t(this.backend,i));let n=Array.isArray(s)?s:[s];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,e,n),n}}let{inputs:l,attrs:u}=e,d=md(e)?null:e.backwardsFunc,f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool(`DEBUG`)&&!this.state.profiling?t=o():(f=this.profiler.profileKernel(c,l,()=>o()),this.ENV.getBool(`DEBUG`)&&this.profiler.logKernelProfile(f),t=f.outputs)}),r&&this.addTapeNode(c,l,t,d,n,u),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-i,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(l).map(e=>l[e]==null?null:l[e].shape),outputShapes:t.map(e=>e.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(s)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(e=>this.keep(this.clone(e)))}getTensorsForGradient(e,t,n){let r=eu(e);if(r!=null){let e=r.inputsToSave||[],i=r.outputsToSave||[],a;r.saveAllInputs?(O(Array.isArray(t),()=>`saveAllInputs is true, expected inputs to be an array.`),a=Object.keys(t).map(e=>t[e])):a=e.map(e=>t[e]);let o=n.filter((e,t)=>i[t]);return a.concat(o)}return[]}makeTensor(e,t,n,r){if(e==null)throw Error(`Values passed to engine.makeTensor() are null`);n||=`float32`,r||=this.backend;let i=e;n===`string`&&ko(e[0])&&(i=e.map(e=>Ou(e)));let a=r.write(i,t,n),o=new Zu(t,n,a,this.nextTensorId());if(this.trackTensor(o,r),n===`string`){let e=this.state.tensorInfo.get(a),t=Oo(i);this.state.numBytes+=t-e.bytes,e.bytes=t}return o}makeTensorFromDataId(e,t,n,r){n||=`float32`;let i={dataId:e,shape:t,dtype:n};return this.makeTensorFromTensorInfo(i,r)}makeTensorFromTensorInfo(e,t){let{dataId:n,shape:r,dtype:i}=e,a=new Zu(r,i,n,this.nextTensorId());return this.trackTensor(a,t),a}makeVariable(e,t=!0,n,r){n||=this.nextVariableId().toString(),r!=null&&r!==e.dtype&&(e=e.cast(r));let i=new Qu(e,t,n,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw Error(`Variable with name ${i.name} was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i}trackTensor(e,t){this.state.numTensors++,e.dtype===`string`&&this.state.numStringTensors++;let n=0;e.dtype!==`complex64`&&e.dtype!==`string`&&(n=e.size*Do(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof Qu||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;let t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype===`string`&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!==`complex64`&&e.dtype!==`string`){let t=e.size*Do(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(let e in this.state.registeredVariables){let t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){let e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons??=[],e.reasons.push(`Memory usage by string tensors is approximate (2 bytes per character)`)),e}async profile(e){this.state.profiling=!0;let t=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(e=>e.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n;for(let e of this.state.activeProfile.kernels)e.kernelTimeMs=await e.kernelTimeMs,e.extraInfo=await e.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,n,r,i,a){let o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:i},s=eu(e);s!=null&&(r=s.gradFunc),r!=null&&(o.gradient=e=>(e=e.map((e,t)=>{if(e==null){let e=n[t],r=zo(e.size,e.dtype);return this.makeTensor(r,e.shape,e.dtype)}return e}),r(e.length>1?e:e[0],i,a))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){let t={track:[],name:`unnamed scope`,id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){let t=dd(e),n=new Set(t.map(e=>e.id));for(let e=0;e<this.state.activeScope.track.length;e++){let t=this.state.activeScope.track[e];!t.kept&&!n.has(t.id)&&t.dispose()}let r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(e=>{!e.kept&&e.scopeId===r.id&&this.track(e)})}gradients(e,t,n,r=!1){if(O(t.length>0,()=>`gradients() received an empty list of xs.`),n!=null&&n.dtype!==`float32`)throw Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);let i=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy(`forward`,e));O(i instanceof Zu,()=>`The result y returned by f() must be a tensor.`);let a=Fu(this.state.activeTape,t,i);if(!r&&a.length===0&&t.length>0)throw Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.`);return this.tidy(`backward`,()=>{let e={};e[i.id]=n??_d(i.shape),Iu(e,a,e=>this.tidy(e),yd);let r=t.map(t=>e[t.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(e=>{for(let t of e.saved)t.dispose()}),this.state.activeTape=null),{value:i,grads:r}})}customGrad(e){return O(No(e),()=>`The f passed in customGrad(f) must be a function.`),(...t)=>{O(t.every(e=>e instanceof Zu),()=>`The args passed in customGrad(f)(x1, x2,...) must all be tensors`);let n,r={};return t.forEach((e,t)=>{r[t]=e}),this.runKernelFunc({forwardFunc:(r,i)=>(n=e(...t,i),O(n.value instanceof Zu,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),O(No(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),backwardsFunc:(e,r)=>{let i=n.gradFunc(e,r),a=Array.isArray(i)?i:[i];O(a.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),O(a.every(e=>e instanceof Zu),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let o={};return a.forEach((e,t)=>{o[t]=()=>e}),o},inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){let t=Du(),n=await this.backend.time(e);return n.wallMs=Du()-t,n}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new hd;for(let e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}};gd.nextTensorId=0,gd.nextVariableId=0;function _d(e){let t=Ro(k(e),`float32`);return N.makeTensor(t,e,`float32`)}function vd(){let e=$o();return e._tfengine??=new gd(new Ko(e)),Zo(e._tfengine.ENV),Yu(()=>e._tfengine),e._tfengine}var N=vd();function yd(e,t){let n={a:e,b:t};return N.runKernel(`Add`,n)}function bd(){return typeof navigator<`u`&&navigator!=null}var xd;function Sd(e){if(xd!==void 0)return xd;if(e||bd()){if(e||=navigator,e.product===`ReactNative`)return!0;let t=e.userAgent||e.vendor||(typeof window<`u`?window.opera:``);if(!t){let t=e;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Cd(){return typeof window<`u`&&window.document!=null||typeof WorkerGlobalScope<`u`}var wd=j();wd.registerFlag(`DEBUG`,()=>!1,e=>{e&&console.warn(`Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.`)}),wd.registerFlag(`IS_BROWSER`,()=>Cd()),wd.registerFlag(`IS_NODE`,()=>typeof process<`u`&&process.versions!==void 0&&process.versions.node!==void 0),wd.registerFlag(`IS_CHROME`,()=>typeof navigator<`u`&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),wd.registerFlag(`IS_SAFARI`,()=>typeof navigator<`u`&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),wd.registerFlag(`PROD`,()=>!1),wd.registerFlag(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`,()=>wd.getBool(`DEBUG`)),wd.registerFlag(`DEPRECATION_WARNINGS_ENABLED`,()=>!0),wd.registerFlag(`IS_TEST`,()=>!1),wd.registerFlag(`CHECK_COMPUTATION_FOR_ERRORS`,()=>wd.getBool(`DEBUG`)),wd.registerFlag(`WRAP_TO_IMAGEBITMAP`,()=>!1),wd.registerFlag(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`,()=>!1),wd.registerFlag(`USE_SETTIMEOUTCUSTOM`,()=>!1);function Td(e,t){let n=e;if(Au(e))return t===`string`?[]:[e.length];if(sd(e)){let t=e.channels||`RGBA`;return[e.height,e.width*t.length]}if(cd(e))return[e.buffer.size/(t==null?4:Do(t))];if(!Array.isArray(e))return[];let r=[];for(;Array.isArray(n)||Au(n)&&t!==`string`;)r.push(n.length),n=n[0];return Array.isArray(e)&&j().getBool(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`)&&Ed(e,r,[]),r}function Ed(e,t,n){if(n||=[],!Array.isArray(e)&&!Au(e)){O(t.length===0,()=>`Element arr[${n.join(`][`)}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}O(t.length>0,()=>`Element arr[${n.join(`][`)}] should be a primitive, but is an array of ${e.length} elements`),O(e.length===t[0],()=>`Element arr[${n.join(`][`)}] should have ${t[0]} elements, but has ${e.length} elements`);let r=t.slice(1);for(let t=0;t<e.length;++t)Ed(e[t],r,n.concat(t))}function Dd(e,t,n,r){if(e!==`string_or_numeric`){if(e==null)throw Error(`Expected dtype cannot be null.`);if(e!==`numeric`&&e!==t||e===`numeric`&&t===`string`)throw Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function P(e,t,n,r=`numeric`){if(e instanceof M())return Dd(r,e.dtype,t,n),e;let i=Mo(e);if(i!==`string`&&[`bool`,`int32`,`float32`].indexOf(r)>=0&&(i=r),Dd(r,i,t,n),e==null||!Au(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`){let r=e==null?`null`:e.constructor.name;throw Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}let a=Td(e,i);!Au(e)&&!Array.isArray(e)&&(e=[e]);let o=i===`string`?ju(e,[],!0):Eu(e,i);return N.makeTensor(o,a,i)}function Od(e,t,n,r=`numeric`){if(!Array.isArray(e))throw Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((e,i)=>P(e,`${t}[${i}]`,n,r))}var kd=`__op`;function F(e){let t=Object.keys(e);if(t.length!==1)throw Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0],r=e[n];n.endsWith(`_`)&&(n=n.substring(0,n.length-1)),n+=kd;let i=(...e)=>{N.startScope(n);try{let t=r(...e);return Wo(t)&&console.error(`Cannot return a Promise inside of tidy.`),N.endScope(t),t}catch(e){throw N.endScope(null),e}};return Object.defineProperty(i,"name",{value:n,configurable:!0}),i}function Ad(e,t){let n=P(e,`real`,`complex`),r=P(t,`imag`,`complex`);fo(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);let i={real:n,imag:r};return N.runKernel(Ts,i)}var jd=F({complex_:Ad});function Md(e,t,n,r){if(r==null)r=Mo(e);else if(r===`complex64`)throw Error(`Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).`);if(cd(e)||sd(e)){if(r!==`float32`&&r!==`int32`)throw Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return N.backend.createTensorFromGPUData(e,t||n,r)}if(!Au(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`)throw Error(`values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray`);if(t!=null){Vo(t);let e=k(t),r=k(n);O(e===r,()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${r}`);for(let e=0;e<n.length;++e){let r=n[e],i=e!==n.length-1||r!==k(t.slice(e));O(n[e]===t[e]||!i,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!Au(e)&&!Array.isArray(e)&&(e=[e]),t||=n,e=r===`string`?ju(e,[],!0):Eu(e,r),N.makeTensor(e,t,r)}function Nd(e,t,n){return Md(e,t,Td(e,n),n)}var Pd=class e{static join(t){return new e(t).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(e=>Au(e)?e.buffer:e),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let n=0;n<e.length;n++){let r=e[n];n!==e.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);let i=t+r.byteLength;this.shards.push({buffer:r,start:t,end:i}),t=i}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(this.shards.length===0||(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),t=Math.min(this.byteLength,t),t<=e))return new ArrayBuffer(0);let n=this.findShardForByte(e);if(n===-1)throw Error(`Could not find start shard for byte ${e}`);let r=t-e,i=new ArrayBuffer(r),a=new Uint8Array(i),o=0;for(let r=n;r<this.shards.length;r++){let n=this.shards[r],i=e+o-n.start,s=o,c=Math.min(t,n.end)-n.start,l=new Uint8Array(n.buffer,i,c-i);if(a.set(l,s),o+=l.length,t<n.end)break}return i}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(t){return e<t.start?-1:+(e>=t.end)}if(t(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;let n=Fd(this.shards,t);return n===-1?-1:(this.previousShardIndex=n,this.previousShardIndex)}};function Fd(e,t){let n=0,r=e.length;for(;n<=r;){let i=Math.floor((r-n)/2)+n,a=t(e[i]);if(a===0)return i;a<0?r=i:n=i+1}return-1}function Id(){return N}function Ld(){return N.memory()}function I(e,t){return N.tidy(e,t)}function L(e){dd(e).forEach(e=>e.dispose())}function Rd(e){return N.keep(e)}function zd(e,t,n=1){return N.registerBackend(e,t,n)}function Bd(){return N.backend}var Vd=4;async function Hd(e,t){let n=[],r=[],i=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);for(let a=0;a<i.length;++a){let o=i[a],s=Array.isArray(e)?e[a].tensor:e[o];if(s.dtype!==`float32`&&s.dtype!==`int32`&&s.dtype!==`bool`&&s.dtype!==`string`&&s.dtype!==`complex64`)throw Error(`Unsupported dtype in weight '${o}': ${s.dtype}`);let c={name:o,shape:s.shape,dtype:s.dtype};if(s.dtype===`string`){let e=new Promise(async e=>{let t=await s.bytes(),n=t.reduce((e,t)=>e+t.length,0)+Vd*t.length,r=new Uint8Array(n),i=0;for(let e=0;e<t.length;e++){let n=t[e],a=new Uint8Array(new Uint32Array([n.length]).buffer);r.set(a,i),i+=Vd,r.set(n,i),i+=n.length}e(r)});r.push(e)}else r.push(s.data());t!=null&&(c.group=t),n.push(c)}return{data:Ud(await Promise.all(r)),specs:n}}function Ud(e){if(e===null)throw Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0,n=[];e.forEach(e=>{if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw Error(`Unsupported TypedArray subtype: ${e.constructor.name}`)});let r=new Uint8Array(t),i=0;return n.forEach(e=>{r.set(new Uint8Array(e.buffer),i),i+=e.byteLength}),r.buffer}var Wd=typeof Buffer<`u`&&(typeof Blob>`u`||typeof atob>`u`||typeof btoa>`u`);function Gd(e){return Wd?Buffer.byteLength(e,`utf8`):new Blob([e]).size}function Kd(e){if(Wd)return Buffer.from(e).toString(`base64`);let t=new Uint8Array(e),n=``;for(let e=0,r=t.length;e<r;e++)n+=String.fromCharCode(t[e]);return btoa(n)}function qd(e){if(Wd){let t=Buffer.from(e,`base64`);return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n.set([t.charCodeAt(e)],e);return n.buffer}function Jd(e){return Pd.join(e)}function Yd(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`Expected JSON model topology, received ArrayBuffer.`);return{dateSaved:new Date,modelTopologyType:`JSON`,modelTopologyBytes:e.modelTopology==null?0:Gd(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:Gd(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:new Pd(e.weightData).byteLength}}var Xd=class e{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return e.instance??=new e,e.instance}static registerSaveRouter(t){e.getInstance().saveRouters.push(t)}static registerLoadRouter(t){e.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return e.getHandlers(t,`save`)}static getLoadHandlers(t,n){return e.getHandlers(t,`load`,n)}static getHandlers(t,n,r){let i=[];return(n===`load`?e.getInstance().loadRouters:e.getInstance().saveRouters).forEach(e=>{let n=e(t,r);n!==null&&i.push(n)}),i}},Zd=e=>Xd.getSaveHandlers(e),Qd=`tensorflowjs`,$d=1,ef=`models_store`,tf=`model_info_store`;function nf(){if(!j().getBool(`IS_BROWSER`))throw Error(`Failed to obtain IndexedDB factory because the current environmentis not a web browser.`);let e=typeof window>`u`?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw Error(`The current browser does not appear to support IndexedDB.`);return t}function rf(e){let t=e.result;t.createObjectStore(ef,{keyPath:`modelPath`}),t.createObjectStore(tf,{keyPath:`modelPath`})}var af=class{constructor(e){if(this.indexedDB=nf(),e==null||!e)throw Error(`For IndexedDB, modelPath must not be null, undefined or empty.`);this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((e,n)=>{let r=this.indexedDB.open(Qd,$d);r.onupgradeneeded=()=>rf(r),r.onsuccess=()=>{let i=r.result;if(t==null){let t=i.transaction(ef,`readonly`),r=t.objectStore(ef).get(this.modelPath);r.onsuccess=()=>{if(r.result==null)return i.close(),n(Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(r.result.modelArtifacts)},r.onerror=e=>(i.close(),n(r.error)),t.oncomplete=()=>i.close()}else{t.weightData=Pd.join(t.weightData);let r=Yd(t),a=i.transaction(tf,`readwrite`),o=a.objectStore(tf),s;try{s=o.put({modelPath:this.modelPath,modelArtifactsInfo:r})}catch(e){return n(e)}let c;s.onsuccess=()=>{c=i.transaction(ef,`readwrite`);let s=c.objectStore(ef),l;try{l=s.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:r})}catch(e){return n(e)}l.onsuccess=()=>e({modelArtifactsInfo:r}),l.onerror=e=>{o=a.objectStore(tf);let t=o.delete(this.modelPath);t.onsuccess=()=>(i.close(),n(l.error)),t.onerror=e=>(i.close(),n(l.error))}},s.onerror=e=>(i.close(),n(s.error)),a.oncomplete=()=>{c==null?i.close():c.oncomplete=()=>i.close()}}},r.onerror=e=>n(r.error)})}};af.URL_SCHEME=`indexeddb://`;var of=e=>j().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(af.URL_SCHEME)?sf(e.slice(af.URL_SCHEME.length)):null;Xd.registerSaveRouter(of),Xd.registerLoadRouter(of);function sf(e){return new af(e)}function cf(e){return e.startsWith(af.URL_SCHEME)?e.slice(af.URL_SCHEME.length):e}var lf=class{constructor(){this.indexedDB=nf()}async listModels(){return new Promise((e,t)=>{let n=this.indexedDB.open(Qd,$d);n.onupgradeneeded=()=>rf(n),n.onsuccess=()=>{let r=n.result,i=r.transaction(tf,`readonly`),a=i.objectStore(tf).getAll();a.onsuccess=()=>{let t={};for(let e of a.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},a.onerror=e=>(r.close(),t(a.error)),i.oncomplete=()=>r.close()},n.onerror=e=>t(n.error)})}async removeModel(e){return e=cf(e),new Promise((t,n)=>{let r=this.indexedDB.open(Qd,$d);r.onupgradeneeded=()=>rf(r),r.onsuccess=()=>{let i=r.result,a=i.transaction(tf,`readwrite`),o=a.objectStore(tf),s=o.get(e),c;s.onsuccess=()=>{if(s.result==null)return i.close(),n(Error(`Cannot find model with path '${e}' in IndexedDB.`));{let r=o.delete(e),a=()=>{c=i.transaction(ef,`readwrite`);let r=c.objectStore(ef).delete(e);r.onsuccess=()=>t(s.result.modelArtifactsInfo),r.onerror=e=>n(s.error)};r.onsuccess=a,r.onerror=e=>(a(),i.close(),n(s.error))}},s.onerror=e=>(i.close(),n(s.error)),a.oncomplete=()=>{c==null?i.close():c.oncomplete=()=>i.close()}},r.onerror=e=>n(r.error)})}},uf=`/`,df=`tensorflowjs_models`,ff=`info`,pf=`model_topology`,mf=`weight_specs`,hf=`weight_data`,gf=`model_metadata`;function _f(e){return{info:[df,e,ff].join(uf),topology:[df,e,pf].join(uf),weightSpecs:[df,e,mf].join(uf),weightData:[df,e,hf].join(uf),modelMetadata:[df,e,gf].join(uf)}}function vf(e){for(let t of Object.values(e))window.localStorage.removeItem(t)}function yf(e){let t=e.split(uf);if(t.length<3)throw Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(uf)}function bf(e){return e.startsWith(xf.URL_SCHEME)?e.slice(xf.URL_SCHEME.length):e}var xf=class{constructor(e){if(!j().getBool(`IS_BROWSER`)||typeof window>`u`||window.localStorage===void 0)throw Error(`The current environment does not support local storage.`);if(this.LS=window.localStorage,e==null||!e)throw Error(`For local storage, modelPath must not be null, undefined or empty.`);this.modelPath=e,this.keys=_f(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);{let t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=Yd(e),i=Pd.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,Kd(i));let a={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature==null?void 0:e.signature,userDefinedMetadata:e.userDefinedMetadata==null?void 0:e.userDefinedMetadata,modelInitializer:e.modelInitializer==null?void 0:e.modelInitializer,initializerSignature:e.initializerSignature==null?void 0:e.initializerSignature,trainingConfig:e.trainingConfig==null?void 0:e.trainingConfig};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch{throw vf(this.keys),Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){let e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!==`JSON`)throw Error(`BrowserLocalStorage does not support loading non-JSON model topology yet.`);let t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(n==null)throw Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;let r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;let i=this.LS.getItem(this.keys.modelMetadata);if(i!=null){let e=JSON.parse(i);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,e.signature!=null&&(t.signature=e.signature),e.userDefinedMetadata!=null&&(t.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(t.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(t.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(t.trainingConfig=e.trainingConfig)}let a=this.LS.getItem(this.keys.weightData);if(a==null)throw Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=qd(a),t}};xf.URL_SCHEME=`localstorage://`;var Sf=e=>j().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(xf.URL_SCHEME)?Cf(e.slice(xf.URL_SCHEME.length)):null;Xd.registerSaveRouter(Sf),Xd.registerLoadRouter(Sf);function Cf(e){return new xf(e)}var wf=class{constructor(){O(j().getBool(`IS_BROWSER`),()=>`Current environment is not a web browser`),O(typeof window>`u`||window.localStorage!==void 0,()=>`Current browser does not appear to support localStorage`),this.LS=window.localStorage}async listModels(){let e={};for(let t=0;t<this.LS.length;++t){let n=this.LS.key(t);if(n.startsWith(`tensorflowjs_models/`)&&n.endsWith(`/info`)){let t=yf(n);e[t]=JSON.parse(this.LS.getItem(n))}}return e}async removeModel(e){e=bf(e);let t=_f(e);if(this.LS.getItem(t.info)==null)throw Error(`Cannot find model at path '${e}'`);let n=JSON.parse(this.LS.getItem(t.info));return vf(t),n}},Tf=`://`,Ef=class e{constructor(){this.managers={}}static getInstance(){return e.instance??=new e,e.instance}static registerManager(t,n){O(t!=null,()=>`scheme must not be undefined or null.`),t.endsWith(Tf)&&(t=t.slice(0,t.indexOf(Tf))),O(t.length>0,()=>`scheme must not be an empty string.`);let r=e.getInstance();O(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=n}static getManager(t){let n=e.getInstance().managers[t];if(n==null)throw Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(e.getInstance().managers)}},Df=class{constructor(){this.messageName=`setTimeoutCustom`,this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder??=new TextEncoder,this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window>`u`||!j().getBool(`USE_SETTIMEOUTCUSTOM`)){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},`*`)},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener(`message`,e=>{if(e.source===window&&e.data.name===this.messageName){e.stopPropagation();let t=this.functionRefs[e.data.index];t(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return au(e)}};if(j().get(`IS_BROWSER`)){j().setPlatform(`browser`,new Df);try{Ef.registerManager(xf.URL_SCHEME,new wf)}catch{}try{Ef.registerManager(af.URL_SCHEME,new lf)}catch{}}var Of=o(((e,t)=>{t.exports={}})),kf={importFetch:()=>Of()},Af,jf=class{constructor(){this.util=Of(),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return j().global.fetch==null?(Af??=kf.importFetch(),Af(e,t)):j().global.fetch(e,t)}now(){let e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?``:new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}};j().get(`IS_NODE`)&&!j().get(`IS_BROWSER`)&&j().setPlatform(`node`,new jf);function Mf(e,t=`float32`,n){return t||=`float32`,Vo(e),new Ku(e,t,n)}function Nf(e,t){let n=P(e,`x`,`cast`);if(!To(t))throw Error(`Failed to cast to unknown dtype ${t}`);if(t===`string`&&n.dtype!==`string`||t!==`string`&&n.dtype===`string`)throw Error(`Only strings can be casted to strings`);let r={x:n},i={dtype:t};return N.runKernel(Ss,r,i)}var R=F({cast_:Nf});function Pf(e){let t={x:P(e,`x`,`clone`,`string_or_numeric`)};return N.runKernel(lc,t)}var Ff=F({clone_:Pf});function If(e,t=!1){console.log(e.toString(t))}vd(),Xu({buffer:Mf,cast:R,clone:Ff,print:If});function Lf(e,t){let n=P(e,`a`,`add`),r=P(t,`b`,`add`);[n,r]=ld(n,r);let i={a:n,b:r};return N.runKernel(`Add`,i)}var z=F({add_:Lf});function Rf(e,t){let n=P(e,`a`,`floorDiv`),r=P(t,`b`,`floorDiv`);[n,r]=ld(n,r);let i={a:n,b:r};return N.runKernel(rc,i)}var zf=F({floorDiv_:Rf});function Bf(e,t){let n=P(e,`a`,`div`),r=P(t,`b`,`div`);if([n,r]=ld(n,r),n.dtype===`int32`&&r.dtype===`int32`)return zf(n,r);let i={a:n,b:r};return N.runKernel(Js,i,{})}var B=F({div_:Bf});function Vf(e,t){let n=P(e,`a`,`mul`),r=P(t,`b`,`mul`);[n,r]=ld(n,r);let i={a:n,b:r};return N.runKernel(Fc,i)}var V=F({mul_:Vf});function Hf(e){let t=P(e,`x`,`abs`);if(t.dtype===`complex64`){let e={x:t};return N.runKernel(Es,e)}{let e={x:t};return N.runKernel(`Abs`,e)}}var Uf=F({abs_:Hf});function Wf(e){let t={x:P(e,`x`,`acos`)};return N.runKernel(ns,t)}var Gf=F({acos_:Wf});function Kf(e){let t={x:P(e,`x`,`acosh`)};return N.runKernel(rs,t)}var qf=F({acosh_:Kf});function Jf(e,t=null,n=!1){let r={x:P(e,`x`,`all`,`bool`)},i={axis:t,keepDims:n};return N.runKernel(`All`,r,i)}var Yf=F({all_:Jf});function Xf(e,t=null,n=!1){let r={x:P(e,`x`,`any`,`bool`)},i={axis:t,keepDims:n};return N.runKernel(`Any`,r,i)}var Zf=F({any_:Xf});function Qf(e,t=0){let n={x:P(e,`x`,`argMax`)},r={axis:t};return N.runKernel(as,n,r)}var $f=F({argMax_:Qf});function ep(e,t=0){let n={x:P(e,`x`,`argMin`)},r={axis:t};return N.runKernel(os,n,r)}var tp=F({argMin_:ep});function np(e){let t={x:P(e,`x`,`asin`)};return N.runKernel(ss,t)}var rp=F({asin_:np});function ip(e){let t={x:P(e,`x`,`asinh`)};return N.runKernel(cs,t)}var ap=F({asinh_:ip});function op(e){let t={x:P(e,`x`,`atan`)};return N.runKernel(ls,t)}var sp=F({atan_:op});function cp(e,t){let n=P(e,`a`,`atan2`),r=P(t,`b`,`atan2`);[n,r]=ld(n,r);let i={a:n,b:r};return N.runKernel(ds,i)}var lp=F({atan2_:cp});function up(e){let t={x:P(e,`x`,`atanh`)};return N.runKernel(us,t)}var dp=F({atanh_:up});function fp(e,t,n,r,i=`NHWC`,a){let o=e[3];return hp(e,[...t,o],n,a,r,null,null,kp(i))}function pp(e,t,n,r,i,a,o=`channelsLast`){let[s,c]=bp(t),l;if(o===`channelsLast`)l=[s,c,e[3],e[3]];else if(o===`channelsFirst`)l=[s,c,e[1],e[1]];else throw Error(`Unknown dataFormat ${o}`);return hp(e,l,n,r,i,a,!1,o)}function mp(e,t,n,r,i,a,o=`NDHWC`){let[s,c,l]=xp(t),u,d;if(o===`NDHWC`)d=`channelsLast`,u=[s,c,l,e[4],e[4]];else if(o===`NCDHW`)d=`channelsFirst`,u=[s,c,l,e[1],e[1]];else throw Error(`Unknown dataFormat ${o}`);return gp(e,u,n,r,i,!1,d,a)}function hp(e,t,n,r,i,a,o=!1,s=`channelsLast`){let[c,l,u,d]=[-1,-1,-1,-1];if(s===`channelsLast`)[c,l,u,d]=e;else if(s===`channelsFirst`)[c,d,l,u]=e;else throw Error(`Unknown dataFormat ${s}`);let[f,p,,m]=t,[h,g]=bp(n),[_,v]=bp(r),y=Sp(f,_),b=Sp(p,v),{padInfo:x,outHeight:S,outWidth:C}=Cp(i,l,u,h,g,y,b,a,s),w=o?m*d:m,T;return s===`channelsFirst`?T=[c,w,S,C]:s===`channelsLast`&&(T=[c,S,C,w]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:u,inChannels:d,outHeight:S,outWidth:C,outChannels:w,padInfo:x,strideHeight:h,strideWidth:g,filterHeight:f,filterWidth:p,effectiveFilterHeight:y,effectiveFilterWidth:b,dilationHeight:_,dilationWidth:v,inShape:e,outShape:T,filterShape:t}}function gp(e,t,n,r,i,a=!1,o=`channelsLast`,s){let[c,l,u,d,f]=[-1,-1,-1,-1,-1];if(o===`channelsLast`)[c,l,u,d,f]=e;else if(o===`channelsFirst`)[c,f,l,u,d]=e;else throw Error(`Unknown dataFormat ${o}`);let[p,m,h,,g]=t,[_,v,y]=xp(n),[b,x,S]=xp(r),C=Sp(p,b),w=Sp(m,x),T=Sp(h,S),{padInfo:E,outDepth:D,outHeight:ee,outWidth:te}=wp(i,l,u,d,_,v,y,C,w,T,s),ne=a?g*f:g,re;return o===`channelsFirst`?re=[c,ne,D,ee,te]:o===`channelsLast`&&(re=[c,D,ee,te,ne]),{batchSize:c,dataFormat:o,inDepth:l,inHeight:u,inWidth:d,inChannels:f,outDepth:D,outHeight:ee,outWidth:te,outChannels:ne,padInfo:E,strideDepth:_,strideHeight:v,strideWidth:y,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:C,effectiveFilterHeight:w,effectiveFilterWidth:T,dilationDepth:b,dilationHeight:x,dilationWidth:S,inShape:e,outShape:re,filterShape:t}}function _p(e,t,n,r,i){r??=yp(e,t,n);let a=e[0],o=e[1];return[Tp((a-t+2*r)/n+1,i),Tp((o-t+2*r)/n+1,i)]}function vp(e,t,n,r,i,a){i??=yp(e,t[0],r[0]);let o=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(o[n]=Tp((e[n]-t[n]+2*i)/r[n]+1,a));return o}function yp(e,t,n,r=1){let i=Sp(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)}function bp(e){return typeof e==`number`?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function xp(e){return typeof e==`number`?[e,e,e]:e}function Sp(e,t){return t<=1?e:e+(e-1)*(t-1)}function Cp(e,t,n,r,i,a,o,s,c){let l,u,d;if(typeof e==`number`){l={top:e,bottom:e,left:e,right:e,type:e===0?`VALID`:`NUMBER`};let i=_p([t,n],a,r,e,s);u=i[0],d=i[1]}else if(e===`same`){u=Math.ceil(t/r),d=Math.ceil(n/i);let e=Math.max(0,(u-1)*r+a-t),s=Math.max(0,(d-1)*i+o-n),c=Math.floor(e/2),f=e-c,p=Math.floor(s/2);l={top:c,bottom:f,left:p,right:s-p,type:`SAME`}}else if(e===`valid`)l={top:0,bottom:0,left:0,right:0,type:`VALID`},u=Math.ceil((t-a+1)/r),d=Math.ceil((n-o+1)/i);else if(typeof e==`object`){let f=c===`channelsLast`?e[1][0]:e[2][0],p=c===`channelsLast`?e[1][1]:e[2][1],m=c===`channelsLast`?e[2][0]:e[3][0],h=c===`channelsLast`?e[2][1]:e[3][1];l={top:f,bottom:p,left:m,right:h,type:f===0&&p===0&&m===0&&h===0?`VALID`:`EXPLICIT`},u=Tp((t-a+f+p)/r+1,s),d=Tp((n-o+m+h)/i+1,s)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outHeight:u,outWidth:d}}function wp(e,t,n,r,i,a,o,s,c,l,u){let d,f,p,m;if(e===`valid`&&(e=0),typeof e==`number`){d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?`VALID`:`NUMBER`};let h=vp([t,n,r,1],[s,c,l],1,[i,a,o],e,u);f=h[0],p=h[1],m=h[2]}else if(e===`same`){f=Math.ceil(t/i),p=Math.ceil(n/a),m=Math.ceil(r/o);let e=(f-1)*i+s-t,u=(p-1)*a+c-n,h=(m-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(u/2),y=u-v,b=Math.floor(h/2);d={top:v,bottom:y,left:b,right:h-b,front:g,back:_,type:`SAME`}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:f,outHeight:p,outWidth:m}}function Tp(e,t){if(!t)return Math.trunc(e);switch(t){case`round`:return Math.round(e);case`ceil`:return Math.ceil(e);case`floor`:return Math.floor(e);default:throw Error(`Unknown roundingMode ${t}`)}}function Ep(e){let[t,n,r]=bp(e);return t===1&&n===1&&r===1}function Dp(e,t){return Ep(e)||Ep(t)}function Op(e){return bp(e).every(e=>e>0)}function kp(e){if(e===`NHWC`)return`channelsLast`;if(e===`NCHW`)return`channelsFirst`;throw Error(`Unknown dataFormat ${e}`)}function Ap(e,t,n){if(n!=null){if(typeof t==`string`)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t==`number`)O(ho(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t==`object`)t.forEach(t=>{t.forEach(t=>{O(ho(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}function jp(e,t){let n={x:P(e,`x`,`reshape`,`string_or_numeric`)},r={shape:t};return N.runKernel($c,n,r)}var H=F({reshape_:jp});function Mp(e,t,n,r,i){let a=P(e,`x`,`avgPool`,`float32`);O(Dp(n,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`);let o=a,s=!1;a.rank===3&&(s=!0,o=H(a,[1,a.shape[0],a.shape[1],a.shape[2]])),O(o.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${o.rank}.`),Ap(`avgPool`,r,i);let c={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:i},u=N.runKernel(fs,c,l);return u=R(u,a.dtype),s?H(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var Np=F({avgPool_:Mp});function Pp(e,t,n,r,i,a=`NDHWC`){let o=P(e,`x`,`avgPool3d`,`float32`),s=o,c=!1;o.rank===4&&(c=!0,s=H(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),O(s.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${s.rank}.`),O(a===`NDHWC`,()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),O(typeof n==`number`&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),Ap(`avgPool3d`,r,i);let l={x:s},u={filterSize:t,strides:n,pad:r,dimRoundingMode:i,dataFormat:a},d=N.runKernel(ms,l,u);return d=R(d,s.dtype),c?H(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}var Fp=F({avgPool3d_:Pp});function Ip(e,t=0){O(e.length>=1,()=>`Pass at least one tensor to concat`);let n=Od(e,`tensors`,`concat`,`string_or_numeric`);if(n[0].dtype===`complex64`&&n.forEach(e=>{if(e.dtype!==`complex64`)throw Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${e.dtype}. `)}),n.length===1)return Ff(n[0]);let r=n,i={axis:t};return N.runKernel(Ds,r,i)}var Lp=F({concat_:Ip});function Rp(e,t,n=!1,r=!1){let i=P(e,`a`,`matMul`),a=P(t,`b`,`matMul`);[i,a]=ld(i,a);let o={a:i,b:a},s={transposeA:n,transposeB:r};return N.runKernel(gs,o,s)}var zp=F({matMul_:Rp});function Bp(e){let t={x:P(e,`x`,`sigmoid`,`float32`)};return N.runKernel(gl,t)}var Vp=F({sigmoid_:Bp});function Hp(e,t,n){let r=P(e,`x`,`slice`,`string_or_numeric`);if(r.rank===0)throw Error(`Slicing scalar is not possible`);let i={x:r},a={begin:t,size:n};return N.runKernel(pl,i,a)}var Up=F({slice_:Hp});function Wp(e){let t={x:P(e,`x`,`tanh`,`float32`)};return N.runKernel(Pl,t)}var Gp=F({tanh_:Wp});function Kp(e,t,n){let r=P(e,`x`,`batchToSpaceND`),i=t.reduce((e,t)=>e*t);O(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),O(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),O(r.shape[0]%i===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(` * `)} === ${i}`);let a={x:r},o={blockShape:t,crops:n};return N.runKernel(_s,a,o)}var qp=F({batchToSpaceND_:Kp});function Jp(e){let t;return t=e.rank===0||e.rank===1?H(e,[1,1,1,e.size]):e.rank===2?H(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?H(e,[1,e.shape[0],e.shape[1],e.shape[2]]):e,t}function Yp(e,t,n,r,i,a){a??=.001;let o=P(e,`x`,`batchNorm`),s=P(t,`mean`,`batchNorm`),c=P(n,`variance`,`batchNorm`),l;i!=null&&(l=P(i,`scale`,`batchNorm`));let u;r!=null&&(u=P(r,`offset`,`batchNorm`)),O(s.rank===c.rank,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),O(u==null||s.rank===u.rank,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),O(l==null||s.rank===l.rank,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`);let d={x:Jp(o),scale:l,offset:u,mean:s,variance:c},f={varianceEpsilon:a};return H(N.runKernel(ic,d,f),o.shape)}var Xp=F({batchNorm_:Yp});function Zp(e,t,n,r,i,a){let o=P(e,`x`,`batchNorm`),s=P(t,`mean`,`batchNorm`),c=P(n,`variance`,`batchNorm`),l;i!=null&&(l=P(i,`scale`,`batchNorm`));let u;return r!=null&&(u=P(r,`offset`,`batchNorm`)),O(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),O(s.rank===2||s.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${s.rank}.`),O(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&O(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&O(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),Xp(o,s,c,u,l,a)}var Qp=F({batchNorm2d_:Zp});function $p(e,t,n,r,i,a){let o=P(e,`x`,`batchNorm`),s=P(t,`mean`,`batchNorm`),c=P(n,`variance`,`batchNorm`),l;i!=null&&(l=P(i,`scale`,`batchNorm`));let u;return r!=null&&(u=P(r,`offset`,`batchNorm`)),O(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),O(s.rank===3||s.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${s.rank}.`),O(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&O(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&O(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),Xp(o,s,c,u,l,a)}var em=F({batchNorm3d_:$p});function tm(e,t,n,r,i,a){let o=P(e,`x`,`batchNorm`),s=P(t,`mean`,`batchNorm`),c=P(n,`variance`,`batchNorm`),l;i!=null&&(l=P(i,`scale`,`batchNorm`));let u;return r!=null&&(u=P(r,`offset`,`batchNorm`)),O(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),O(s.rank===4||s.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${s.rank}.`),O(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&O(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&O(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),Xp(o,s,c,u,l,a)}var nm=F({batchNorm4d_:tm});function rm(e,t,n){let r=P(e,`x`,`bincount`),i=P(t,`weights`,`bincount`);O(r.dtype===`int32`,()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),O(n>=0,()=>`size must be non-negative, but got ${n}.`),O(i.size===r.size||i.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${i.shape}.`);let a={x:r,weights:i},o={size:n};return N.runKernel(vs,a,o)}var im=F({bincount_:rm});function am(e,t){let n=P(e,`broadcastTo`,`x`),r=n.shape;if(Vo(t),t.length<n.rank)throw Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){let e=n.shape.slice();for(;e.length<t.length;)e.unshift(1);n=H(n,e)}let i=n.shape,a=Array.from(t);for(let e=t.length-1;e>=0;e--)if(i[e]===t[e])a[e]=1;else if(n.shape[e]!==1)throw Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(a.map((e,t)=>e>1?t:-1).filter(e=>e>=0).length===0)return Ff(n);let o={x:n},s={reps:a};return N.runKernel(Fl,o,s)}var om=F({broadcastTo_:am});function sm(e){let t={x:P(e,`x`,`ceil`,`float32`)};return N.runKernel(Cs,t)}var cm=F({ceil_:sm});function lm(e,t,n){Vo(e),n||=Mo(t);let r={shape:e,value:t,dtype:n};return N.runKernel(ec,{},r)}function um(e,t,n){let r=P(e,`x`,`clipByValue`);if(O(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return lm(r.shape,t,r.dtype);let i={x:r},a={clipValueMin:t,clipValueMax:n};return N.runKernel(ws,i,a)}var dm=F({clipByValue_:um});function fm(e){return Lp(e,0)}var pm=F({concat1d_:fm});function mm(e,t){return Lp(e,t)}var hm=F({concat2d_:mm});function gm(e,t){return Lp(e,t)}var _m=F({concat3d_:gm});function vm(e,t){return Lp(e,t)}var ym=F({concat4d_:vm});function bm(e,t,n,r,i=`NHWC`,a=[1,1],o){let s=P(e,`x`,`conv2d`,`float32`),c=P(t,`filter`,`conv2d`,`float32`),l=s,u=!1;s.rank===3&&(u=!0,l=H(s,[1,s.shape[0],s.shape[1],s.shape[2]])),O(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),O(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),Ap(`conv2d`,r,o);let d=i===`NHWC`?l.shape[3]:l.shape[1];O(d===c.shape[2],()=>`Error in conv2d: depth of input (${d}) must match input depth for filter ${c.shape[2]}.`),O(Dp(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),O(Op(a),()=>`Error in conv2D: Dilated rates should be larger than 0.`),O(Op(n),()=>`Error in conv2D: Strides should be larger than 0.`);let f={x:l,filter:c},p={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o},m=N.runKernel(Os,f,p);return u?H(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var xm=F({conv2d_:bm});function Sm(e,t,n,r,i=`NWC`,a=1,o){let s=P(e,`x`,`conv1d`),c=P(t,`filter`,`conv1d`),l=s,u=!1;s.rank===2&&(u=!0,l=H(s,[1,s.shape[0],s.shape[1]])),O(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),O(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),Ap(`conv1d`,r,o),O(l.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`),O(Dp(n,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`),O(Op(a),()=>`Error in conv1D: Dilated rates should be larger than 0.`),O(Op(n),()=>`Error in conv1D: Stride should be larger than 0.`),O(i===`NWC`,()=>`Error in conv1d: got dataFormat of ${i} but only NWC is currently supported.`);let d=H(c,[1,c.shape[0],c.shape[1],c.shape[2]]),f=xm(H(l,[l.shape[0],1,l.shape[1],l.shape[2]]),d,[1,n],r,`NHWC`,[1,a],o);return u?H(f,[f.shape[2],f.shape[3]]):H(f,[f.shape[0],f.shape[2],f.shape[3]])}var Cm=F({conv1d_:Sm});function wm(e,t,n,r,i,a=`NHWC`,o){O(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let s=e,c=t,l=!1;t.rank===3&&(l=!0,c=H(t,[1,t.shape[0],t.shape[1],t.shape[2]]),s=[1,e[0],e[1],e[2]]),O(s.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${s.length}.`),O(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),O(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);let u=a===`NHWC`?s[3]:s[1],d=a===`NHWC`?c.shape[3]:c.shape[1];O(u===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[2]}.`),O(d===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${d}) must match output depth for filter ${n.shape[3]}.`),Ap(`conv2dDerInput`,i,o);let f={dy:c,filter:n},p={strides:r,pad:i,dataFormat:a,dimRoundingMode:o,inputShape:s},m=N.runKernel(As,f,p);return l?H(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var Tm=F({conv2DBackpropInput_:wm});function Em(e,t,n,r,i,a){return Tm(n,P(e,`x`,`conv2dTranspose`),P(t,`filter`,`conv2dTranspose`),r,i,`NHWC`,a)}var Dm=F({conv2dTranspose_:Em});function Om(e,t,n,r,i=`NDHWC`,a=[1,1,1]){let o=P(e,`x`,`conv3d`),s=P(t,`filter`,`conv3d`),c=o,l=!1;o.rank===4&&(l=!0,c=H(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),O(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),O(s.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${s.rank}.`),O(c.shape[4]===s.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${s.shape[3]}.`),O(Dp(n,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),O(i===`NDHWC`,()=>`Error in conv3d: got dataFormat of ${i} but only NDHWC is currently supported.`),O(Op(a),()=>`Error in conv3D: Dilated rates should be larger than 0.`),O(Op(n),()=>`Error in conv3D: Strides should be larger than 0.`);let u={x:c,filter:s},d={strides:n,pad:r,dataFormat:i,dilations:a},f=N.runKernel(js,u,d);return l?H(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var km=F({conv3d_:Om});function Am(e,t,n,r,i){O(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let a=e,o=t,s=!1;t.rank===4&&(s=!0,o=H(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),a=[1,e[0],e[1],e[2],e[3]]);let c=a[4],l=o.shape[4];O(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),O(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),O(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),O(c===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[3]}.`),O(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);let u={dy:o,filter:n},d={pad:i,strides:r,inputShape:a},f=N.runKernel(Ns,u,d);return s?H(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var jm=F({conv3DBackpropInput_:Am});function Mm(e,t,n,r,i){return jm(n,P(e,`x`,`conv3dTranspose`),P(t,`filter`,`conv3dTranspose`),r,i)}var Nm=F({conv3dTranspose_:Mm});function Pm(e){let t={x:P(e,`x`,`cos`,`float32`)};return N.runKernel(`Cos`,t)}var Fm=F({cos_:Pm});function Im(e){let t={x:P(e,`x`,`cosh`,`float32`)};return N.runKernel(Ps,t)}var Lm=F({cosh_:Im});function Rm(e,t=0,n=!1,r=!1){let i={x:P(e,`x`,`cumprod`)},a={axis:t,exclusive:n,reverse:r};return N.runKernel(Fs,i,a)}var zm=F({cumprod_:Rm});function Bm(e,t=0,n=!1,r=!1){let i={x:P(e,`x`,`cumsum`)},a={axis:t,exclusive:n,reverse:r};return N.runKernel(Is,i,a)}var Vm=F({cumsum_:Bm});function Hm(e,t,n,r=!1){let i=P(e,`x`,`denseBincount`),a=P(t,`weights`,`denseBincount`);O(i.dtype===`int32`,()=>`Error in denseBincount: input dtype must be int32, but got ${i.dtype}`),O(i.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${i.rank}.`),O(n>=0,()=>`size must be non-negative, but got ${n}.`),O(a.size===i.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${i.shape}, weights shape: ${a.shape}.`);let o={x:i,weights:a},s={size:n,binaryOutput:r};return N.runKernel(Rs,o,s)}var Um=F({denseBincount_:Hm});function Wm(e,t,n=`NHWC`){let r=P(e,`x`,`depthToSpace`,`float32`),i=n===`NHWC`?r.shape[1]:r.shape[2],a=n===`NHWC`?r.shape[2]:r.shape[3],o=n===`NHWC`?r.shape[3]:r.shape[1];O(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),O(i*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${i} and ${t}  for depthToSpace with input shape
    ${r.shape}`),O(a*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${t} for depthToSpace with input shape
        ${r.shape}`),O(o%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${r.shape}`);let s={x:r},c={blockSize:t,dataFormat:n};return N.runKernel(zs,s,c)}var Gm=F({depthToSpace_:Wm});function Km(e,t,n,r,i=`NHWC`,a=[1,1],o){let s=P(e,`x`,`depthwiseConv2d`,`float32`),c=P(t,`filter`,`depthwiseConv2d`,`float32`),l=s,u=!1;s.rank===3&&(u=!0,l=H(s,[1,s.shape[0],s.shape[1],s.shape[2]])),O(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),O(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);let d=i===`NHWC`?l.shape[3]:l.shape[1];O(d===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${d}) must match the inChannels dimension in filter ${c.shape[2]}.`),Ap(`depthwiseConv2d`,r,o);let f={x:l,filter:c},p={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o},m=N.runKernel(Bs,f,p);return u?H(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var qm=F({depthwiseConv2d_:Km});function Jm(e,t,n,r,i=[1,1],a=`NHWC`){let o=P(e,`x`,`dilation2d`),s=P(t,`filter`,`dilation2d`);O(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),O(s.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${s.rank}.`),O(a===`NHWC`,()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let c=o,l=!1;o.rank===3&&(c=H(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=!0),O(c.shape[3]===s.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${c.shape[3]} vs ${s.shape[2]}`);let u={x:c,filter:s},d={strides:n,pad:r,dilations:i},f=N.runKernel(Ws,u,d);return l?H(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var Ym=F({dilation2d_:Jm});function Xm(e,t){let n=e.length,r=[];for(let i=0;i<n;i++){let a=n-1-i,o=e[a]||1;(t[t.length-1-i]||1)>1&&o===1&&r.unshift(a)}return r}function Zm(e,t){let n=[];for(let r=0;r<t.length;r++){let i=e[e.length-r-1],a=t.length-r-1,o=t[a];(i==null||i===1&&o>1)&&n.unshift(a)}return n}function U(e,t){let n=Math.max(e.length,t.length),r=Array(n);for(let i=0;i<n;i++){let a=e[e.length-i-1];a??=1;let o=t[t.length-i-1];if(o??=1,a===1)r[n-i-1]=o;else if(o===1)r[n-i-1]=a;else if(a!==o){let n=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(n)}else r[n-i-1]=a}return r}function Qm(e,t){let n=P(e,`a`,`equal`,`string_or_numeric`),r=P(t,`b`,`equal`,`string_or_numeric`);[n,r]=ld(n,r),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Zs,i)}var $m=F({equal_:Qm});function eh(e,t,n){let r=P(t,`a`,`where`),i=P(n,`b`,`where`),a=P(e,`condition`,`where`,`bool`),o=U(U(a.shape,r.shape),i.shape),s={condition:om(a,o),t:om(r,o),e:om(i,o)};return N.runKernel(dl,s)}var th=F({where_:eh});function nh(e){let t={x:P(e,`x`,`zerosLike`)};return N.runKernel(Hl,t)}var rh=F({zerosLike_:nh});function ih(e,t){let n=P(e,`a`,`div`),r=P(t,`b`,`div`);[n,r]=ld(n,r);let i=B(n,r),a=rh(i);return th($m(r,a),a,i)}var ah=F({divNoNan_:ih});function oh(e,t){let n=P(e,`t1`,`dot`),r=P(t,`t2`,`dot`);O((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);let i=n.rank===1?n.size:n.shape[1],a=r.rank===1?r.size:r.shape[0];if(O(i===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${i} and ${a}.`),n.rank===1&&r.rank===1)return H(zp(H(n,[1,-1]),H(r,[-1,1])),[]);if(n.rank===1&&r.rank===2){let e=zp(H(n,[1,-1]),H(r,[r.shape[0],r.shape[1]]));return H(e,[e.size])}if(n.rank===2&&r.rank===1){let e=zp(n,H(r,[-1,1]));return H(e,[e.size])}return zp(n,H(r,[r.shape[0],r.shape[1]]))}var sh=F({dot_:oh});function ch(e,...t){let n=t.map((e,t)=>P(e,`tensors${t}`,`einsum`)),r={equation:e};return N.runKernel(Ys,n,r)}var lh=F({einsum_:ch});function uh(e){let t={x:P(e,`x`,`elu`,`float32`)};return N.runKernel(`Elu`,t)}var dh=F({elu_:uh});function fh(e){let t=P(e,`x`,`erf`);O(t.dtype===`int32`||t.dtype===`float32`,()=>"Input dtype must be `int32` or `float32`."),t.dtype===`int32`&&(t=R(t,`float32`));let n={x:t};return N.runKernel(`Erf`,n)}var ph=F({erf_:fh});function mh(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function hh(e,t,n){let r=e.length+t.length,i=[],a=0,o=0;for(let s=0;s<r;s++)n.indexOf(s)===-1?i.push(e[a++]):i.push(t[o++]);return i}function gh(e,t){let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]}function _h(e,t){return hh(e,t.map(e=>1),t)}function vh(e,t,n){O(mh(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function yh(e,t){if(mh(e,t))return null;let n=[];for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);return e.forEach(e=>n.push(e)),n}function bh(e){return e.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function xh(e,t){let n=[];for(let r=t-e;r<t;++r)n.push(r);return n}function Sh(e,t=null,n=!1){let r={x:P(e,`x`,`max`)},i={reductionIndices:t,keepDims:n};return N.runKernel(`Max`,r,i)}var Ch=F({max_:Sh});function wh(e,t=null,n=!1){let r={x:P(e,`x`,`min`)},i={axis:t,keepDims:n};return N.runKernel(`Min`,r,i)}var Th=F({min_:wh});function Eh(e,t){let n=P(e,`base`,`pow`),r=P(t,`exp`,`pow`);[n,r]=ld(n,r);let i={a:n,b:r};return N.runKernel(`Pow`,i)}var Dh=F({pow_:Eh});function Oh(e,t){if((Au(e)&&t!==`string`||Array.isArray(e))&&t!==`complex64`)throw Error(`Error creating a new Scalar: value must be a primitive (number|boolean|string)`);if(t===`string`&&Au(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Md(e,[],[],t)}function kh(e){let t={x:P(e,`x`,`sqrt`,`float32`)};return N.runKernel(vl,t)}var Ah=F({sqrt_:kh});function jh(e){let t=P(e,`x`,`square`);return N.runKernel(`Square`,{x:t},{})}var Mh=F({square_:jh});function Nh(e,t=null,n=!1){let r=P(e,`x`,`sum`);r.dtype===`bool`&&(r=R(r,`int32`));let i={x:r},a={axis:t,keepDims:n};return N.runKernel(`Sum`,i,a)}var W=F({sum_:Nh});function Ph(e,t=`euclidean`,n=null,r=!1){e=P(e,`x`,`norm`);let i=Fh(e,t,n),a=i.shape;if(r){let t=bo(n,e.shape);a=_h(i.shape,t)}return H(i,a)}function Fh(e,t,n=null){if(e.rank===0)return Uf(e);if(e.rank!==1&&n===null)return Fh(H(e,[-1]),t,n);if(e.rank===1||typeof n==`number`||Array.isArray(n)&&n.length===1){if(t===1)return W(Uf(e),n);if(t===1/0)return Ch(Uf(e),n);if(t===-1/0)return Th(Uf(e),n);if(t===`euclidean`||t===2)return Ah(W(Dh(Uf(e),Oh(2,`int32`)),n));throw Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return Ch(W(Uf(e),n[0]),n[1]-1);if(t===1/0)return Ch(W(Uf(e),n[1]),n[0]);if(t===-1/0)return Th(W(Uf(e),n[1]),n[0]);if(t===`fro`||t===`euclidean`)return Ah(W(Mh(e),n));throw Error(`Error in norm: invalid ord value: ${t}`)}throw Error(`Error in norm: invalid axis: ${n}`)}var Ih=F({norm_:Ph});function Lh(e,t=null,n=!1){return Ih(e,`euclidean`,t,n)}var Rh=F({euclideanNorm_:Lh});function zh(e){let t={x:P(e,`x`,`exp`)};return N.runKernel(`Exp`,t)}var Bh=F({exp_:zh});function Vh(e,t=0){let n=P(e,`x`,`expandDims`,`string_or_numeric`);O(t<=n.rank,()=>`Axis must be <= rank of the tensor`);let r={input:n},i={dim:t};return N.runKernel(Qs,r,i)}var Hh=F({expandDims_:Vh});function Uh(e){let t={x:P(e,`x`,`expm1`)};return N.runKernel($s,t)}var Wh=F({expm1_:Uh});function Gh(e,t){let n=P(e,`x`,`tile`,`string_or_numeric`);O(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);let r={x:n},i={reps:t};return N.runKernel(Fl,r,i)}var Kh=F({tile_:Gh});function qh(e,t,n,r=`float32`){t??=e;let i=Mf([e,t],r),a=e<=t?e:t;for(let e=0;e<a;++e)i.set(1,e,e);let o=H(i.toTensor(),[e,t]);if(n==null)return o;if(n.length===1)return Kh(Hh(o,0),[n[0],1,1]);if(n.length===2)return Kh(Hh(Hh(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return Kh(Hh(Hh(Hh(o,0),0),0),[n[0],n[1],n[2],1,1]);throw Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}var Jh=F({eye_:qh});function Yh(e){let t={x:P(e,`x`,`floor`,`float32`)};return N.runKernel(nc,t)}var Xh=F({floor_:Yh});function Zh(e,t,n=0,r=0){let i={x:P(e,`x`,`gather`),indices:P(t,`indices`,`gather`,`int32`)},a={axis:n,batchDims:r};return N.runKernel(ac,i,a)}var Qh=F({gather_:Zh});function $h(e,t){let n=P(e,`a`,`greater`,`string_or_numeric`),r=P(t,`b`,`greater`,`string_or_numeric`);[n,r]=ld(n,r),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(sc,i)}var eg=F({greater_:$h});function tg(e,t){let n=P(e,`a`,`greaterEqual`,`string_or_numeric`),r=P(t,`b`,`greaterEqual`,`string_or_numeric`);[n,r]=ld(n,r),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(cc,i)}var ng=F({greaterEqual_:tg});function rg(e){let t={input:P(e,`input`,`imag`)};return N.runKernel(dc,t)}var ig=F({imag_:rg});function ag(e){let t={x:P(e,`x`,`isFinite`)};return N.runKernel(fc,t)}var og=F({isFinite_:ag});function sg(e){let t={x:P(e,`x`,`isInf`)};return N.runKernel(pc,t)}var cg=F({isInf_:sg});function lg(e){let t={x:P(e,`x`,`isNaN`)};return N.runKernel(mc,t)}var ug=F({isNaN_:lg});function dg(e,t=.2){let n={x:P(e,`x`,`leakyRelu`)},r={alpha:t};return N.runKernel(hc,n,r)}var fg=F({leakyRelu_:dg});function pg(e,t){let n=P(e,`a`,`less`,`string_or_numeric`),r=P(t,`b`,`less`,`string_or_numeric`);[n,r]=ld(n,r),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(gc,i)}var mg=F({less_:pg});function hg(e,t){let n=P(e,`a`,`lessEqual`,`string_or_numeric`),r=P(t,`b`,`lessEqual`,`string_or_numeric`);[n,r]=ld(n,r),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(_c,i)}var gg=F({lessEqual_:hg});function _g(e,t=5,n=1,r=1,i=.5){let a=P(e,`x`,`localResponseNormalization`);O(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),O(ho(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let o=a,s=!1;a.rank===3&&(s=!0,o=H(a,[1,a.shape[0],a.shape[1],a.shape[2]]));let c={x:o},l={depthRadius:t,bias:n,alpha:r,beta:i},u=N.runKernel(`LRN`,c,l);return s?H(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var vg=F({localResponseNormalization_:_g});function yg(e){let t={x:P(e,`x`,`log`,`float32`)};return N.runKernel(`Log`,t)}var bg=F({log_:yg});function xg(e){let t={x:P(e,`x`,`log1p`)};return N.runKernel(yc,t)}var Sg=F({log1p_:xg});function Cg(e,t){O(No(e),()=>`The f passed in variableGrads(f) must be a function`),O(t==null||Array.isArray(t)&&t.every(e=>e instanceof Qu),()=>`The varList passed in variableGrads(f, varList) must be an array of variables`);let n=t!=null;if(!n){t=[];for(let e in N.registeredVariables)t.push(N.registeredVariables[e])}let r=n?t.filter(e=>!e.trainable):null,i=t.length;t=t.filter(e=>e.trainable),O(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${i} variables is trainable.`);let{value:a,grads:o}=N.gradients(e,t,null,!0);O(o.some(e=>e!=null),()=>`Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().`),O(a.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`);let s={};return t.forEach((e,t)=>{o[t]!=null&&(s[e.name]=o[t])}),r?.forEach(e=>s[e.name]=null),{value:a,grads:s}}function wg(e){return N.customGrad(e)}function Tg(e){let t={x:P(e,`x`,`neg`)};return N.runKernel(`Neg`,t)}var Eg=F({neg_:Tg});function Dg(e){let t={x:P(e,`x`,`softplus`)};return N.runKernel(_l,t)}var Og=F({softplus_:Dg});function kg(e){let t=P(e,`x`,`logSigmoid`);return wg(e=>({value:Eg(Og(Eg(e))),gradFunc:t=>V(t,Vp(Eg(e)))}))(t)}var Ag=F({logSigmoid_:kg});function jg(e,t){let n=P(e,`a`,`sub`),r=P(t,`b`,`sub`);[n,r]=ld(n,r);let i={a:n,b:r};return N.runKernel(`Sub`,i)}var G=F({sub_:jg});function Mg(e,t=-1){let n=P(e,`logits`,`logSoftmax`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return wg((e,n)=>{let r=G(e,Ch(e,t,!0)),i=G(R(r,`float32`),bg(W(Bh(r),t,!0)));return n([i]),{value:i,gradFunc:(e,n)=>{let[r]=n,i=Bh(r);return G(e,V(W(e,t,!0),i))}}})(n)}var Ng=F({logSoftmax_:Mg});function Pg(e,t=null,n=!1){let r=P(e,`x`,`logSumExp`),i=bo(t,r.shape),a=Ch(r,i,!0),o=bg(W(Bh(G(r,a)),i)),s=z(H(a,o.shape),o);return n?H(s,_h(s.shape,i)):s}var Fg=F({logSumExp_:Pg});function Ig(e,t){let n=P(e,`a`,`logicalAnd`,`bool`),r=P(t,`b`,`logicalAnd`,`bool`);U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(bc,i)}var Lg=F({logicalAnd_:Ig});function Rg(e){let t={x:P(e,`x`,`logicalNot`,`bool`)};return N.runKernel(xc,t)}var zg=F({logicalNot_:Rg});function Bg(e,t){let n=P(e,`a`,`logicalOr`,`bool`),r=P(t,`b`,`logicalOr`,`bool`);U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Sc,i)}var Vg=F({logicalOr_:Bg});function Hg(e,t){let n=P(e,`a`,`logicalXor`,`bool`),r=P(t,`b`,`logicalXor`,`bool`);return U(n.shape,r.shape),Lg(Vg(e,t),zg(Lg(e,t)))}var Ug=F({logicalXor_:Hg});function Wg(e,t,n,r,i){let a=P(e,`x`,`maxPool`),o=a,s=!1;a.rank===3&&(s=!0,o=H(a,[1,a.shape[0],a.shape[1],a.shape[2]])),O(o.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.rank}.`),O(Dp(n,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`),Ap(`maxPool`,r,i);let c={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:i},u=N.runKernel(Ec,c,l);return s?H(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var Gg=F({maxPool_:Wg});function Kg(e,t=[1,1,1],n,r,i,a=`NDHWC`){let o=P(e,`x`,`maxPool3d`),s=o,c=!1;o.rank===4&&(c=!0,s=H(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),O(s.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${s.rank}.`),O(a===`NDHWC`,()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),Ap(`maxPool3d`,r,i);let l={x:s},u={filterSize:t,strides:n,pad:r,dimRoundingMode:i,dataFormat:a},d=N.runKernel(Oc,l,u);return c?H(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}var qg=F({maxPool3d_:Kg});function Jg(e,t){let n=P(e,`a`,`maximum`),r=P(t,`b`,`maximum`);[n,r]=ld(n,r),n.dtype===`bool`&&(n=R(n,`int32`),r=R(r,`int32`)),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Tc,i)}var Yg=F({maximum_:Jg});function Xg(e,t=null,n=!1){let r={x:P(e,`x`,`mean`)},i={axis:t,keepDims:n};return N.runKernel(jc,r,i)}var Zg=F({mean_:Xg});function Qg(e,t=`float32`){if(Vo(e),t===`complex64`)return jd(Qg(e,`float32`),Qg(e,`float32`));let n=zo(k(e),t);return N.makeTensor(n,e,t)}function $g(e,t=`float32`){if(Vo(e),t===`complex64`)return jd($g(e,`float32`),Qg(e,`float32`));let n=Ro(k(e),t);return N.makeTensor(n,e,t)}function e_(e,t){let n=P(e,`a`,`minimum`),r=P(t,`b`,`minimum`);[n,r]=ld(n,r),n.dtype===`bool`&&(n=R(n,`int32`),r=R(r,`int32`)),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Mc,i)}var t_=F({minimum_:e_});function n_(e,t,n){O(n===`reflect`||n===`symmetric`,()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);let r=P(e,`x`,`mirrorPad`);if(r.rank===0)throw Error(`mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad`);O(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);let i=+(n===`reflect`);for(let e=0;e<r.rank;e++)O(t[e].length===2,()=>`Invalid number of paddings. Must be length of 2 each.`),O(t[e][0]>=0&&t[e][0]<=r.shape[e]-i&&t[e][1]>=0&&t[e][1]<=r.shape[e]-i,()=>`Padding in dimension ${e} cannot be greater than or equal to ${r.shape[e]-i} or less than 0 for input of shape ${r.shape}`);let a={paddings:t,mode:n},o={x:r};return N.runKernel(Nc,o,a)}var r_=F({mirrorPad_:n_});function i_(e,t){let n=P(e,`a`,`mod`),r=P(t,`b`,`mod`);[n,r]=ld(n,r);let i={a:n,b:r};return N.runKernel(`Mod`,i)}var a_=F({mod_:i_});function o_(e,t=null,n=!1){e=P(e,`x`,`moments`);let r=bo(t,e.shape),i=Zg(e,r,n),a=i.shape;return n||(a=_h(i.shape,r)),{mean:i,variance:Zg(Mh(G(R(e,`float32`),H(i,a))),r,n)}}var s_=F({moments_:o_});function c_(e,t){let n=P(e,`a`,`notEqual`,`string_or_numeric`),r=P(t,`b`,`notEqual`,`string_or_numeric`);[n,r]=ld(n,r),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Ic,i)}var l_=F({notEqual_:c_});function u_(e,t,n=1,r=0,i=`int32`){if(t<2)throw Error(`Error in oneHot: depth must be >=2, but it is ${t}`);let a={indices:P(e,`indices`,`oneHot`,`int32`)},o={dtype:i,depth:t,onValue:n,offValue:r};return N.runKernel(Vc,a,o)}var d_=F({oneHot_:u_});function f_(e){let t={x:P(e,`x`,`onesLike`)};return N.runKernel(Bc,t)}var p_=F({onesLike_:f_});function m_(e,t,n=0){let r=P(e,`x`,`pad`);if(r.rank===0)throw Error(`pad(scalar) is not defined. Pass non-scalar to pad`);let i={paddings:t,constantValue:n},a={x:r};return N.runKernel(Uc,a,i)}var h_=F({pad_:m_});function g_(e,t,n){let r=P(e,`x`,`spaceToBatchND`);O(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),O(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),O(r.shape.reduce((e,r,i)=>i>0&&i<=t.length?e&&(r+n[i-1][0]+n[i-1][1])%t[i-1]===0:e,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);let i={x:r},a={blockShape:t,paddings:n};return N.runKernel(yl,i,a)}var __=F({spaceToBatchND_:g_});function v_(e,t,n,r,i,a,o){i??=[1,1],a??=1,r===0&&(r=`valid`);let s=P(e,`x`,`maxPool`),c=s,l=!1;s.rank===3&&(l=!0,c=H(s,[1,s.shape[0],s.shape[1],s.shape[2]])),O(Dp(a,i),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${i}'`);let u=pp(c.shape,t,a,i,r),d=[u.dilationHeight,u.dilationWidth],f;f=r===`same`?b_([u.filterHeight,u.filterWidth],d):[[0,0],[0,0]];let p=d[0]===1&&d[1]===1,[m,h]=y_([u.inHeight,u.inWidth],d,f),g=p?r:`valid`,_=p?c:__(c,d,m),v=(n===`avg`?()=>Np(_,t,a,g,o):()=>Gg(_,t,a,g,o))(),y=p?v:qp(v,d,h);return l?H(y,[y.shape[1],y.shape[2],y.shape[3]]):y}function y_(e,t,n){let r=n.map(e=>e[0]),i=n.map(e=>e[1]),a=e.concat(r,i),o=t.map((e,t)=>(e-a[t]%e)%e),s=i.map((e,t)=>e+o[t]);return[t.map((e,t)=>[r[t],s[t]]),t.map((e,t)=>[0,o[t]])]}function b_(e,t){let n=e.map((e,n)=>e+(e-1)*(t[n]-1)).map(e=>e-1),r=n.map(e=>Math.floor(e/2)),i=n.map((e,t)=>e-r[t]);return n.map((e,t)=>[r[t],i[t]])}var x_=F({pool_:v_});function S_(e,t){let n={x:P(e,`x`,`prelu`),alpha:P(t,`alpha`,`prelu`)};return N.runKernel(Wc,n)}var C_=F({prelu_:S_});function w_(e,t=null,n=!1){let r=P(e,`x`,`prod`);r.dtype===`bool`&&(r=R(r,`int32`));let i={x:r},a={axis:t,keepDims:n};return N.runKernel(Gc,i,a)}var T_=F({prod_:w_}),E_=o(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=o();t.next=function(){var e=2091639*t.s0+t.c*23283064365386963e-26;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=e|0)},t.c=1,t.s0=n(` `),t.s1=n(` `),t.s2=n(` `),t.s0-=n(e),t.s0<0&&(t.s0+=1),t.s1-=n(e),t.s1<0&&(t.s1+=1),t.s2-=n(e),t.s2<0&&(t.s2+=1),n=null}function i(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function a(e,t){var n=new r(e),a=t&&t.state,o=n.next;return o.int32=function(){return n.next()*4294967296|0},o.double=function(){return o()+(o()*2097152|0)*11102230246251565e-32},o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}function o(){var e=4022871197;return function(t){t=String(t);for(var n=0;n<t.length;n++){e+=t.charCodeAt(n);var r=.02519603282416938*e;e=r>>>0,r-=e,r*=e,e=r>>>0,r-=e,e+=r*4294967296}return(e>>>0)*23283064365386963e-26}}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.alea=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),D_=o(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=``;t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(e|0)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=n.charCodeAt(r)|0,t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xor128=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),O_=o(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(e|0)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=n.charCodeAt(r)|0,r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xorwow=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),k_=o(((e,t)=>{(function(e,t,n){function r(e){var t=this;t.next=function(){var e=t.x,n=t.i,r=e[n],i;return r^=r>>>7,i=r^r<<24,r=e[n+1&7],i^=r^r>>>10,r=e[n+3&7],i^=r^r>>>3,r=e[n+4&7],i^=r^r<<7,r=e[n+7&7],r^=r<<13,i^=r^r<<9,e[n]=i,t.i=n+1&7,i};function n(e,t){var n,r=[];if(t===(t|0))r[0]=t;else for(t=``+t,n=0;n<t.length;++n)r[n&7]=r[n&7]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&r[n]===0;++n);for(n==8?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}n(t,e)}function i(e,t){return t.x=e.x.slice(),t.i=e.i,t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(a.x&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xorshift7=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),A_=o(((e,t)=>{(function(e,t,n){function r(e){var t=this;t.next=function(){var e=t.w,n=t.X,r=t.i,i,a;return t.w=e=e+1640531527|0,a=n[r+34&127],i=n[r=r+1&127],a^=a<<13,i^=i<<17,a^=a>>>15,i^=i>>>12,a=n[r]=a^i,t.i=r,a+(e^e>>>16)|0};function n(e,t){var n,r,i,a,o,s=[],c=128;for(t===(t|0)?(r=t,t=null):(t+=`\0`,r=0,c=Math.max(c,t.length)),i=0,a=-32;a<c;++a)t&&(r^=t.charCodeAt((a+32)%t.length)),a===0&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(o=o+1640531527|0,n=s[a&127]^=r+o,i=n==0?i+1:0);for(i>=128&&(s[(t&&t.length||0)&127]=-1),i=127,a=512;a>0;--a)r=s[i+34&127],n=s[i=i+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[i]=r^n;e.w=o,e.X=s,e.i=i}n(t,e)}function i(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(a.X&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xor4096=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),j_=o(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.b,n=t.c,r=t.d,i=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^i,i=i-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^i,t.a=i-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=e|0):n+=e;for(var r=0;r<n.length+20;r++)t.b^=n.charCodeAt(r)|0,t.next()}function i(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.tychei=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),M_=o(((e,t)=>{(function(e,n,r){var i=256,a=6,o=52,s=`random`,c=r.pow(i,a),l=r.pow(2,o),u=l*2,d=i-1,f;function p(e,t,o){var d=[];t=t==1?{entropy:!0}:t||{};var f=_(g(t.entropy?[e,y(n)]:e??v(),3),d),p=new m(d),b=function(){for(var e=p.g(a),t=c,n=0;e<l;)e=(e+n)*i,t*=i,n=p.g(1);for(;e>=u;)e/=2,t/=2,n>>>=1;return(e+n)/t};return b.int32=function(){return p.g(4)|0},b.quick=function(){return p.g(4)/4294967296},b.double=b,_(y(p.S),n),(t.pass||o||function(e,t,n,i){return i&&(i.S&&h(i,p),e.state=function(){return h(p,{})}),n?(r[s]=e,t):e})(b,f,`global`in t?t.global:this==r,t.state)}function m(e){var t,n=e.length,r=this,a=0,o=r.i=r.j=0,s=r.S=[];for(n||(e=[n++]);a<i;)s[a]=a++;for(a=0;a<i;a++)s[a]=s[o=d&o+e[a%n]+(t=s[a])],s[o]=t;(r.g=function(e){for(var t,n=0,a=r.i,o=r.j,s=r.S;e--;)t=s[a=d&a+1],n=n*i+s[d&(s[a]=s[o=d&o+t])+(s[o]=t)];return r.i=a,r.j=o,n})(i)}function h(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function g(e,t){var n=[],r=typeof e,i;if(t&&r==`object`)for(i in e)try{n.push(g(e[i],t-1))}catch{}return n.length?n:r==`string`?e:e+`\0`}function _(e,t){for(var n=e+``,r,i=0;i<n.length;)t[d&i]=d&(r^=t[d&i]*19)+n.charCodeAt(i++);return y(t)}function v(){try{var t;return f&&(t=f.randomBytes)?t=t(i):(t=new Uint8Array(i),(e.crypto||e.msCrypto).getRandomValues(t)),y(t)}catch{var r=e.navigator,a=r&&r.plugins;return[+new Date,e,a,e.screen,y(n)]}}function y(e){return String.fromCharCode.apply(0,e)}if(_(r.random(),n),typeof t==`object`&&t.exports){t.exports=p;try{f=Of()}catch{}}else typeof define==`function`&&define.amd?define(function(){return p}):r[`seed`+s]=p})(typeof self<`u`?self:e,[],Math)})),N_=l(o(((e,t)=>{var n=E_(),r=D_(),i=O_(),a=k_(),o=A_(),s=j_(),c=M_();c.alea=n,c.xor128=r,c.xorwow=i,c.xorshift7=a,c.xor4096=o,c.tychei=s,t.exports=c}))()),P_=class{constructor(e,t,n,r,i){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);let a=i||Math.random();this.random=N_.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){let e=this.nextVal;return this.nextVal=NaN,e}let e,t,n=!1;for(;!n;){let r,i,a;do r=2*this.random()-1,i=2*this.random()-1,a=r*r+i*i;while(a>=1||a===0);let o=Math.sqrt(-2*Math.log(a)/a);e=this.mean+this.stdDev*r*o,t=this.mean+this.stdDev*i*o,(!this.truncated||this.isValidTruncated(e))&&(n=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype===`float32`?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}},F_=class{constructor(e=0,t=1,n,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype===`float32`,this.min=e,this.range=t-e,this.dtype=n,r??=Math.random(),typeof r==`number`&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=N_.alea(r)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}};function I_(e,t=0,n=1,r,i){if(Vo(e),r!=null&&r===`bool`)throw Error(`Unsupported data type ${r}`);let a=new P_(t,n,r,!1,i),o=Mf(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}var L_=F({randomNormal_:I_});function R_(e,t=0,n=1,r=`float32`,i){Vo(e);let a=Mf(e,r),o=new F_(t,n,null,i);for(let e=0;e<a.values.length;e++)a.values[e]=o.nextValue();return a.toTensor()}var z_=F({randomUniform_:R_});function B_(e,t,n=1,r=`float32`){if(n===0)throw Error(`Cannot have a step of zero`);let i={start:e,stop:t,step:n,dtype:r};return N.runKernel(Yc,{},i)}function V_(e){let t={input:P(e,`input`,`real`)};return N.runKernel(Xc,t)}var H_=F({real_:V_});function U_(e){let t={x:P(e,`x`,`reciprocal`)};return N.runKernel(Zc,t)}var W_=F({reciprocal_:U_});function G_(e){let t={x:P(e,`x`,`relu`)};return N.runKernel(Qc,t)}var K_=F({relu_:G_});function q_(e){let t={x:P(e,`x`,`relu6`)};return N.runKernel(il,t)}var J_=F({relu6_:q_});function Y_(e,t){let n={x:P(e,`x`,`reverse`)},r={dims:t};return N.runKernel(al,n,r)}var X_=F({reverse_:Y_});function Z_(e){let t={x:P(e,`x`,`round`)};return N.runKernel(ol,t)}var Q_=F({round_:Z_});function $_(e){let t={x:P(e,`x`,`rsqrt`,`float32`)};return N.runKernel(sl,t)}var ev=F({rsqrt_:$_});function tv(e){let t={x:P(e,`x`,`selu`)};return N.runKernel(fl,t)}var nv=F({selu_:tv});function rv(e,t,n,r,i,a=[1,1],o=`NHWC`){let s=P(e,`x`,`separableConv2d`),c=P(t,`depthwiseFilter`,`separableConv2d`),l=P(n,`pointwiseFilter`,`separableConv2d`),u=s,d=!1;if(s.rank===3&&(d=!0,u=H(s,[1,s.shape[0],s.shape[1],s.shape[2]])),o===`NCHW`)throw Error(`separableConv2d currently does not support dataFormat NCHW; only NHWC is supported`);O(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),O(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),O(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),O(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),O(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);let f=c.shape[2],p=c.shape[3];O(l.shape[2]===f*p,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${f*p}, but got ${l.shape[2]}.`);let m=xm(qm(u,c,r,i,o,a),l,1,`valid`,o);return d?H(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var iv=F({separableConv2d_:rv});function av(e){let t={x:P(e,`x`,`sign`)};return N.runKernel(hl,t)}var ov=F({sign_:av});function sv(e){let t={x:P(e,`x`,`sin`,`float32`)};return N.runKernel(`Sin`,t)}var cv=F({sin_:sv});function lv(e){let t={x:P(e,`x`,`sinh`)};return N.runKernel(ml,t)}var uv=F({sinh_:lv});function dv(e,t,n){let r=P(e,`x`,`slice1d`);return O(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),Up(r,[t],[n])}var fv=F({slice1d_:dv});function pv(e,t,n){let r=P(e,`x`,`slice2d`);return O(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),Up(r,t,n)}var mv=F({slice2d_:pv});function hv(e,t,n){let r=P(e,`x`,`slice3d`);return O(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),Up(r,t,n)}var gv=F({slice3d_:hv});function _v(e,t,n){let r=P(e,`x`,`slice4d`);return O(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),Up(r,t,n)}var vv=F({slice4d_:_v});function yv(e,t=-1){let n=P(e,`logits`,`softmax`,`float32`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);let r={logits:n},i={dim:t};return N.runKernel(xl,r,i)}var bv=F({softmax_:yv});function xv(e){O(e.dtype===`complex64`,()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);let t={input:e};return N.runKernel(`FFT`,t)}var Sv=F({fft_:xv});function Cv(e){O(e.dtype===`complex64`,()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);let t={input:e};return N.runKernel(uc,t)}var wv=F({ifft_:Cv});function Tv(e){let t=e.shape[e.shape.length-1],n=e.size/t,r;if(t<=2)r=wv(H(e,[n,t]));else{let i=[n,2*(t-1)],a=H(H_(e),[n,t]),o=H(ig(e),[n,t]),s=X_(Up(a,[0,1],[n,t-2]),1),c=V(X_(Up(o,[0,1],[n,t-2]),1),Oh(-1));r=wv(H(jd(Lp([a,s],1),Lp([o,c],1)),[i[0],i[1]]))}if(r=H_(r),e.rank===3&&e.shape[0]!==0){let t=r,n=e.shape[0];r=H(r,[n,r.shape[0]/n,r.shape[1]]),t.dispose()}return r}var Ev=F({irfft_:Tv});function Dv(e,t,n=0){let r={x:P(e,`x`,`split`)},i={numOrSizeSplits:t,axis:n};return N.runKernel(bl,r,i)}var Ov=F({split_:Dv});function kv(e,t){O(e.dtype===`float32`,()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1],r=e.size/n,i;if(t!=null&&t<n){let r=e.shape.map(e=>0),a=e.shape.map(e=>e);a[e.shape.length-1]=t,i=Up(e,r,a),n=t}else if(t!=null&&t>n){let r=e.shape.map(e=>e);r[e.shape.length-1]=t-n,i=Lp([e,Qg(r)],e.shape.length-1),n=t}else i=e;let a=rh(i),o=Sv(H(jd(i,a),[r,n])),s=Math.floor(n/2)+1,c=H_(o),l=ig(o),u=Ov(c,[s,n-s],c.shape.length-1),d=Ov(l,[s,n-s],l.shape.length-1),f=i.shape.slice();return f[i.shape.length-1]=s,H(jd(u[0],d[0]),f)}var Av=F({rfft_:kv});function jv(e,t){let n=P(e,`a`,`squaredDifference`),r=P(t,`b`,`squaredDifference`);[n,r]=ld(n,r),U(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Dl,i,{})}var Mv=F({squaredDifference_:jv});function Nv(e,t){let n=P(e,`x`,`squeeze`,`string_or_numeric`);return H(n,xo(n.shape,t).newShape)}var Pv=F({squeeze_:Nv});function Fv(e,t=0){let n=Od(e,`tensors`,`stack`,`string_or_numeric`);O(n.length>=1,()=>`Pass at least one tensor to tf.stack`),n.length>0&&O(t<=n[0].rank,()=>`Axis must be <= rank of the tensor`);let r=n,i={axis:t};return N.runKernel(Hc,r,i)}var Iv=F({stack_:Fv});function Lv(e,t=0){let n={x:P(e,`x`,`step`)},r={alpha:t};return N.runKernel(Ul,n,r)}var Rv=F({step_:Lv});function zv(e,t,n,r,i=0,a=0,o=0,s=0,c=0){let l={x:P(e,`x`,`stridedSlice`,`string_or_numeric`)},u={begin:t,end:n,strides:r,beginMask:i,endMask:a,ellipsisMask:o,newAxisMask:s,shrinkAxisMask:c};return N.runKernel(Al,l,u)}var Bv=F({stridedSlice_:zv});function Vv(e){let t={x:P(e,`x`,`tan`,`float32`)};return N.runKernel(`Tan`,t)}var Hv=F({tan_:Vv});function Uv(e,t){po(e);let n=Td(e,t);if(n.length!==1)throw Error(`tensor1d() requires values to be a flat/TypedArray`);return Md(e,null,n,t)}function Wv(e,t,n){if(po(e),t!=null&&t.length!==2)throw Error(`tensor2d() requires shape to have two numbers`);let r=Td(e,n);if(r.length!==2&&r.length!==1)throw Error(`tensor2d() requires values to be number[][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Md(e,t,r,n)}function Gv(e,t,n){let r=t.rank>1?t.shape[t.rank-1]:1,i=t.rank>1?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${i}.`;if(n.rank<i)throw Error(a+` update.rank < ${i}. `);if(e.length<r+(n.rank-i))throw Error(a+` Output shape length < ${r+(n.rank-i)}`);if(n.rank!==i+e.length-r)throw Error(a+` update.rank != ${i+e.length-r}`);for(let e=0;e<i;++e)if(n.shape[e]!==t.shape[e])throw Error(a+` updates.shape[${e}] (${n.shape[e]}) != indices.shape[${e}] (${t.shape[e]}).`);for(let t=0;t<n.rank-i;++t)if(n.shape[t+i]!==e[t+r])throw Error(a+` updates.shape[${t+i}] (${n.shape[t+i]}) != shape[${t+i}] (${e[t+i]})`)}function Kv(e,t,n){if(t.rank<1)throw Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!==`int32`)throw Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw Error(`Updates specified for empty output. updates shape: ${e.shape}`)}Gv(n,t,e)}function qv(e,t,n){let r=t.shape.length,i=r>1?t.shape[r-1]:1,a=n.length,o=1;for(let e=i;e<a;++e)o*=n[e];let s=i<1?1:i,c=k(t.shape)/s,l=[...A(n.slice(0,i)),1],u=k(n);return{sliceRank:i,numUpdates:c,sliceSize:o,strides:l,outputSize:u}}function Jv(e,t=1,n=!0){let r=P(e,`x`,`topk`);if(r.rank===0)throw Error(`topk() expects the input to be of rank 1 or higher`);let i=r.shape[r.shape.length-1];if(t<0)throw Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>i)throw Error(`'k' passed to topk() must be <= the last dimension (${i}) but got ${t}`);let a={x:r},o={k:t,sorted:n},[s,c]=N.runKernel(Il,a,o);return{values:s,indices:c}}var Yv=F({topk_:Jv});function Xv(e,t=0,n=1,r,i){if(Vo(e),r!=null&&r===`bool`)throw Error(`Unsupported data type $ { dtype }`);let a=new P_(t,n,r,!0,i),o=Mf(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}var Zv=F({truncatedNormal_:Xv});function Qv(e,t=0){let n=P(e,`x`,`unique`,`string_or_numeric`);O(n.rank>0,()=>`The input tensor must be at least 1D`);let r={x:n},i={axis:t},[a,o]=N.runKernel(zl,r,i);return{values:a,indices:o}}var $v=F({unique_:Qv});function ey(e,t,n){let r=P(e,`x`,`unsortedSegmentSum`),i=P(t,`segmentIds`,`unsortedSegmentSum`,`int32`);O(ho(n),()=>`numSegments must be of dtype int`);let a={x:r,segmentIds:i},o={numSegments:n};return N.runKernel(Vl,a,o)}var ty=F({unsortedSegmentSum_:ey});function ny(e,t=0){let n=P(e,`x`,`unstack`,`string_or_numeric`);O(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);let r={value:n},i={axis:t};return N.runKernel(Bl,r,i)}var ry=F({unstack_:ny});function iy(e,t=!0,n,r){return N.makeVariable(e,t,n,r)}function ay(e,t){let n=[];for(let e=0;e<t.length;e++)t[e]&&n.push(e);let r=Mf(e,`int32`),i=Mf([n.length,e.length],`int32`);for(let t=0;t<n.length;t++){let a=r.indexToLoc(n[t]),o=t*e.length;i.values.set(a,o)}return i.toTensor()}function oy(e,t,n){let r=P(e,`x`,`transpose`);if(t??=r.shape.map((e,t)=>t).reverse(),O(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(e=>{O(e>=0&&e<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();let i={x:r},a={perm:t};return r.dtype===`complex64`?I(()=>{let e=H_(r),t=ig(r);return e=N.runKernel(Rl,{x:e},a),t=N.runKernel(Rl,{x:t},a),n&&(t=Eg(t)),jd(e,t)}):N.runKernel(Rl,i,a)}var sy=F({transpose_:oy});function cy(e,t){if(t==null)return e.shape.slice();if(mo(e.shape,t))return t;if(e.shape.length===t.length){let n=[];for(let r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}return t}function ly(e,t,n,r){let i=P(e,`x`,`dropout`);if(O(i.dtype===`float32`,()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${i.dtype} tensor instead.`),O(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof Zu?i.clone():i;let a=cy(i,n),o=1-t;return V(i,B(Xh(z(z_(a,0,1,`float32`,r),o)),o))}var uy=F({dropout_:ly});function dy(e,t,n,r,i,a=`NHWC`,o){let s=e;e.rank===3&&(s=H(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=H(t,[1,t.shape[0],t.shape[1],t.shape[2]])),O(s.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${s.shape}.`),O(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),O(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);let l=a===`NHWC`?s.shape[3]:s.shape[1],u=a===`NHWC`?c.shape[3]:c.shape[1];O(l===n[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`),O(u===n[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${n[3]}).`),Ap(`conv2dDerFilter`,i,o);let d={x:s,dy:c},f={strides:r,pad:i,dataFormat:a,dimRoundingMode:o,filterShape:n};return N.runKernel(ks,d,f)}var fy=F({conv2DBackpropFilter_:dy});function py(e,t,n){if(n==null||n===`linear`)return e;if(n===`relu`)return V(e,Rv(t));throw Error(`Cannot compute gradient for fused activation ${n}.`)}function my(e,t){let n=t,r=Zm(e.shape,t.shape);return r.length>0&&(n=W(n,r)),H(n,e.shape)}function hy(e,t,n,r){if(t===`linear`)return e;if(t===`relu`)return K_(e);if(t===`elu`)return dh(e);if(t===`relu6`)return J_(e);if(t===`prelu`)return C_(e,n);if(t===`leakyrelu`)return fg(e,r);if(t===`sigmoid`)return Vp(e);throw Error(`Unknown fused activation ${t}.`)}var gy=(e,t)=>!(e>0)||t===`linear`;function _y({x:e,filter:t,strides:n,pad:r,dataFormat:i=`NHWC`,dilations:a=[1,1],dimRoundingMode:o,bias:s,activation:c=`linear`,preluActivationWeights:l,leakyreluAlpha:u}){if(c||=`linear`,gy(N.state.gradientDepth,c)===!1){O(i===`NHWC`,()=>`Error in fused conv2d: got dataFormat of ${i} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let d=xm(e,t,n,r,i,a,o);return s!=null&&(d=z(d,s)),hy(d,c,l,u)}let d=P(e,`x`,`conv2d`,`float32`),f=P(t,`filter`,`conv2d`,`float32`),p=d,m=!1;d.rank===3&&(m=!0,p=H(d,[1,d.shape[0],d.shape[1],d.shape[2]])),O(p.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${p.rank}.`),O(f.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${f.rank}.`),Ap(`fused conv2d`,r,o);let h=i===`NHWC`?p.shape[3]:p.shape[1];O(f.shape[2]===h,()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${f.shape[2]}.`),O(Dp(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);let g=hp(p.shape,f.shape,n,a,r,o),_;s!=null&&(_=P(s,`bias`,`fused conv2d`),[_]=ld(_,d),i===`NHWC`?U(g.outShape,_.shape):(O(_.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${_.shape.length}.`),O(_.shape.length===0||_.shape[0]===g.outChannels||_.shape[0]===1,()=>`Error in fused conv2d: bias shape (${_.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let v;if(l!=null){let e=l.shape;if(O(e.length<=1||e.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${e.length}.`),e.length===1)O(e[0]===1||e[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the number of output channels (${g.outChannels}).`);else if(e.length===3)try{U(e,g.outShape)}catch{let t=`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(t)}v=P(l,`prelu weights`,`fused conv2d`)}let y=(e,t)=>{O(i===`NHWC`,()=>`Error in gradient of fused conv2D: got dataFormat of ${i} but only NHWC is currently supported.`);let[o,s,l,u]=t,d=py(e,l,c);O(Ep(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);let f=[Tm(s.shape,d,o,n,r),fy(s,d,o.shape,n,r)];if(u!=null){let e=my(u,d);f.push(e)}return f},b={x:p,filter:f,bias:_,preluActivationWeights:v},x={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o,activation:c,leakyreluAlpha:u};return s==null?wg((e,t,n)=>{let r=N.runKernel(ql,b,x);return n([t,e,r]),m&&(r=H(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:y}})(p,f):wg((e,t,n,r)=>{let i=N.runKernel(ql,b,x);return r([t,e,i,n]),m&&(i=H(i,[i.shape[1],i.shape[2],i.shape[3]])),{value:i,gradFunc:y}})(p,f,_)}var vy=F({fusedConv2d_:_y});function yy(e,t,n,r,i,a=[1,1],o){let s=e;e.rank===3&&(s=H(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=H(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={x:s,dy:c},u={strides:r,pad:i,dimRoundingMode:o,dilations:a,filterShape:n};return N.runKernel(Vs,l,u)}var by=F({depthwiseConv2dNativeBackpropFilter_:yy});function xy(e,t,n,r,i,a=[1,1],o){let s=t,c=!1;t.rank===3&&(c=!0,s=H(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={dy:s,filter:n},u={strides:r,pad:i,dimRoundingMode:o,dilations:a,inputShape:e},d=N.runKernel(Hs,l,u);return c?H(d,[d.shape[1],d.shape[2],d.shape[3]]):d}var Sy=F({depthwiseConv2dNativeBackpropInput_:xy});function Cy({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:i,activation:a=`linear`,preluActivationWeights:o,leakyreluAlpha:s=.2}){if(gy(N.state.gradientDepth,a)===!1){let c=zp(e,t,n,r);return i!=null&&(c=z(c,i)),hy(c,a,o,s)}let c=P(e,`a`,`fused matMul`),l=P(t,`b`,`fused matMul`);[c,l]=ld(c,l);let u=n?c.shape[c.rank-2]:c.shape[c.rank-1],d=r?l.shape[l.rank-1]:l.shape[l.rank-2],f=n?c.shape[c.rank-1]:c.shape[c.rank-2],p=r?l.shape[l.rank-2]:l.shape[l.rank-1],m=c.shape.slice(0,-2),h=l.shape.slice(0,-2),g=k(m),_=k(h);O(u===d,()=>`Error in fused matMul: inner shapes (${u}) and (${d}) of Tensors with shapes ${c.shape} and ${l.shape} and transposeA=${n} and transposeB=${r} must match.`);let v=U(c.shape.slice(0,-2),l.shape.slice(0,-2)).concat([f,p]),y=n?H(c,[g,u,f]):H(c,[g,f,u]),b=r?H(l,[_,p,d]):H(l,[_,d,p]),x;i!=null&&(x=P(i,`bias`,`fused matMul`),[x]=ld(x,c),U(v,x.shape));let S;o!=null&&(S=P(o,`prelu weights`,`fused matMul`));let C=(e,t)=>{let[o,s,c,l]=t,u=py(H(e,c.shape),c,a),d,f;if(!n&&!r?(d=zp(u,s,!1,!0),f=zp(o,u,!0,!1)):!n&&r?(d=zp(u,s,!1,!1),f=zp(u,o,!0,!1)):n&&!r?(d=zp(s,u,!1,!0),f=zp(o,u,!1,!1)):(d=zp(s,u,!0,!0),f=zp(u,o,!0,!0)),i!=null){let e=my(l,u);return[d,f,e]}return[d,f]},w={a:y,b,bias:x,preluActivationWeights:S},T={transposeA:n,transposeB:r,activation:a,leakyreluAlpha:s};return i==null?wg((e,t,n)=>{let r=N.runKernel(Kl,w,T);return n([e,t,r]),{value:H(r,v),gradFunc:C}})(y,b):wg((e,t,n,r)=>{let i=N.runKernel(Kl,w,T);return r([e,t,i,n]),{value:H(i,v),gradFunc:C}})(y,b,x)}var wy=F({fusedMatMul_:Cy});function Ty(e,t,n,r,i=`bilinear`,a=0){let o=P(e,`image`,`cropAndResize`),s=P(t,`boxes`,`cropAndResize`,`float32`),c=P(n,`boxInd`,`cropAndResize`,`int32`),l=s.shape[0];O(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),O(s.rank===2&&s.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${s.shape}.`),O(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${s.shape}.`),O(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),O(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),O(i===`bilinear`||i===`nearest`,()=>`method must be bilinear or nearest, but was ${i}`);let u={image:o,boxes:s,boxInd:c},d={method:i,extrapolationValue:a,cropSize:r};return N.runKernel(Ls,u,d)}var Ey=F({cropAndResize_:Ty});function Dy(e){let t=P(e,`image`,`flipLeftRight`,`float32`);O(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);let n={image:t};return N.runKernel(tc,n,{})}var Oy=F({flipLeftRight_:Dy});function ky(e){let t=P(e,`image`,`grayscaleToRGB`),n=t.rank-1,r=t.shape[n];O(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),O(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);let i=Array(t.rank);return i.fill(1,0,n),i[n]=3,Kh(t,i)}var Ay=F({grayscaleToRGB_:ky});function jy(e){let t=P(e,`image`,`RGBToGrayscale`),n=t.rank-1,r=t.shape[n];O(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),O(r===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`);let i=t.dtype,a=R(t,`float32`),o=Uv([.2989,.587,.114]),s;switch(t.rank){case 2:s=lh(`ij,j->i`,a,o);break;case 3:s=lh(`ijk,k->ij`,a,o);break;case 4:s=lh(`ijkl,l->ijk`,a,o);break;case 5:s=lh(`ijklm,m->ijkl`,a,o);break;case 6:s=lh(`ijklmn,n->ijklm`,a,o);break;default:throw Error(`Not a valid tensor rank.`)}return s=Hh(s,-1),R(s,i)}var My=F({rgbToGrayscale_:jy});function Ny(e,t,n=0,r=.5){let i=P(e,`image`,`rotateWithOffset`,`float32`);O(i.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${i.rank}.`);let a={image:i},o={radians:t,fillValue:n,center:r};return N.runKernel(Gl,a,o)}var Py=F({rotateWithOffset_:Ny});function Fy(e,t,n,r,i,a){r??=.5,i??=-1/0,a??=0;let o=e.shape[0];return n=Math.min(n,o),O(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),O(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),O(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),O(t.rank===1,()=>`scores must be a 1D tensor`),O(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),O(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:i,softNmsSigma:a}}function Iy(e,t,n,r=.5,i=-1/0){let a=P(e,`boxes`,`nonMaxSuppression`,`float32`),o=P(t,`scores`,`nonMaxSuppression`,`float32`),s=Fy(a,o,n,r,i);n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold;let c={maxOutputSize:n,iouThreshold:r,scoreThreshold:i};return N.runKernel(Lc,{boxes:a,scores:o},c)}var Ly=F({nonMaxSuppression_:Iy});function Ry(e,t,n){let r=zy(e,t,n),i=r<0?-(r+1):r;e.splice(i,0,t)}function zy(e,t,n){return Vy(e,t,n||By)}function By(e,t){return e>t?1:e<t?-1:0}function Vy(e,t,n){let r=0,i=e.length,a=0,o=!1;for(;r<i;){a=r+(i-r>>>1);let s=n(t,e[a]);s>0?r=a+1:(i=a,o=!s)}return o?r:-r-1}function Hy(e,t,n,r,i){return Gy(e,t,n,r,i,0)}function Uy(e,t,n,r,i,a){return Gy(e,t,n,r,i,0,!1,a,!0)}function Wy(e,t,n,r,i,a){return Gy(e,t,n,r,i,a,!0)}function Gy(e,t,n,r,i,a,o=!1,s=!1,c=!1){let l=[];for(let e=0;e<t.length;e++)t[e]>i&&l.push({score:t[e],boxIndex:e,suppressBeginIndex:0});l.sort(Jy);let u=a>0?-.5/a:0,d=[],f=[];for(;d.length<n&&l.length>0;){let t=l.pop(),{score:n,boxIndex:a,suppressBeginIndex:o}=t;if(n<i)break;let s=!1;for(let n=d.length-1;n>=o;--n){let o=Ky(e,a,d[n]);if(o>=r){s=!0;break}if(t.score*=qy(r,u,o),t.score<=i)break}t.suppressBeginIndex=d.length,s||(t.score===n?(d.push(a),f.push(t.score)):t.score>i&&Ry(l,t,Jy))}let p=d.length,m=n-p;s&&m>0&&(d.push(...Array(m).fill(0)),f.push(...Array(m).fill(0)));let h={selectedIndices:d};return o&&(h.selectedScores=f),c&&(h.validOutputs=p),h}function Ky(e,t,n){let r=e.subarray(t*4,t*4+4),i=e.subarray(n*4,n*4+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),l=Math.min(i[0],i[2]),u=Math.min(i[1],i[3]),d=Math.max(i[0],i[2]),f=Math.max(i[1],i[3]),p=(s-a)*(c-o),m=(d-l)*(f-u);if(p<=0||m<=0)return 0;let h=Math.max(a,l),g=Math.max(o,u),_=Math.min(s,d),v=Math.min(c,f),y=Math.max(_-h,0)*Math.max(v-g,0);return y/(p+m-y)}function qy(e,t,n){let r=Math.exp(t*n*n);return n<=e?r:0}function Jy(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}async function Yy(e,t,n,r=.5,i=-1/0){let a=P(e,`boxes`,`nonMaxSuppressionAsync`),o=P(t,`scores`,`nonMaxSuppressionAsync`),s=Fy(a,o,n,r,i);n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold;let c=await Promise.all([a.data(),o.data()]),l=c[0],u=c[1],{selectedIndices:d}=Hy(l,u,n,r,i);return a!==e&&a.dispose(),o!==t&&o.dispose(),Uv(d,`int32`)}var Xy=Yy;function Zy(e,t,n,r=.5,i=-1/0,a=0){let o=P(e,`boxes`,`nonMaxSuppression`),s=P(t,`scores`,`nonMaxSuppression`),c=Fy(o,s,n,r,i,a);n=c.maxOutputSize,r=c.iouThreshold,i=c.scoreThreshold,a=c.softNmsSigma;let l={boxes:o,scores:s},u={maxOutputSize:n,iouThreshold:r,scoreThreshold:i,softNmsSigma:a},d=N.runKernel(zc,l,u);return{selectedIndices:d[0],selectedScores:d[1]}}var Qy=F({nonMaxSuppressionWithScore_:Zy});async function $y(e,t,n,r=.5,i=-1/0,a=0){let o=P(e,`boxes`,`nonMaxSuppressionAsync`),s=P(t,`scores`,`nonMaxSuppressionAsync`),c=Fy(o,s,n,r,i,a);n=c.maxOutputSize,r=c.iouThreshold,i=c.scoreThreshold,a=c.softNmsSigma;let l=await Promise.all([o.data(),s.data()]),u=l[0],d=l[1],{selectedIndices:f,selectedScores:p}=Wy(u,d,n,r,i,a);return o!==e&&o.dispose(),s!==t&&s.dispose(),{selectedIndices:Uv(f,`int32`),selectedScores:Uv(p)}}var eb=$y;function tb(e,t,n,r=.5,i=-1/0,a=!1){let o=P(e,`boxes`,`nonMaxSuppression`),s=P(t,`scores`,`nonMaxSuppression`),c=Fy(o,s,n,r,i,null),l=c.maxOutputSize,u=c.iouThreshold,d=c.scoreThreshold,f={boxes:o,scores:s},p={maxOutputSize:l,iouThreshold:u,scoreThreshold:d,padToMaxOutputSize:a},m=N.runKernel(Rc,f,p);return{selectedIndices:m[0],validOutputs:m[1]}}var nb=F({nonMaxSuppressionPadded_:tb});async function rb(e,t,n,r=.5,i=-1/0,a=!1){let o=P(e,`boxes`,`nonMaxSuppressionAsync`),s=P(t,`scores`,`nonMaxSuppressionAsync`),c=Fy(o,s,n,r,i,null),l=c.maxOutputSize,u=c.iouThreshold,d=c.scoreThreshold,[f,p]=await Promise.all([o.data(),s.data()]),{selectedIndices:m,validOutputs:h}=Uy(f,p,l,u,d,a);return o!==e&&o.dispose(),s!==t&&s.dispose(),{selectedIndices:Uv(m,`int32`),validOutputs:Oh(h,`int32`)}}var ib=rb;function ab(e,t,n=!1,r=!1){let i=P(e,`images`,`resizeBilinear`);O(i.rank===3||i.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${i.rank}.`),O(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),O(r===!1||n===!1,()=>`Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.`);let a=i,o=!1;i.rank===3&&(o=!0,a=H(i,[1,i.shape[0],i.shape[1],i.shape[2]]));let[]=t,s={images:a},c={alignCorners:n,halfPixelCenters:r,size:t},l=N.runKernel(nl,s,c);return o?H(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var ob=F({resizeBilinear_:ab});function sb(e,t,n=!1,r=!1){let i=P(e,`images`,`resizeNearestNeighbor`);O(i.rank===3||i.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${i.rank}.`),O(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),O(i.dtype===`float32`||i.dtype===`int32`,()=>"`images` must have `int32` or `float32` as dtype"),O(r===!1||n===!1,()=>`Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.`);let a=i,o=!1;i.rank===3&&(o=!0,a=H(i,[1,i.shape[0],i.shape[1],i.shape[2]]));let[]=t,s={images:a},c={alignCorners:n,halfPixelCenters:r,size:t},l=N.runKernel(el,s,c);return o?H(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var cb=F({resizeNearestNeighbor_:sb});function lb(e,t=`binary`,n=!1,r=.5){let i=P(e,`image`,`threshold`),a=i.shape[0]*i.shape[1],o=V(Uv([r]),255),s,c,l,u;if(O(i.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${i.rank}.`),O(i.shape[2]===3||i.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${i.shape[2]}.`),O(i.dtype===`int32`||i.dtype===`float32`,()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${i.dtype}.`),O(t===`otsu`||t===`binary`,()=>`Method must be binary or otsu, but was ${t}`),i.shape[2]===3){[s,c,l]=Ov(i,[1,1,1],-1);let e=V(s,.2989),t=V(c,.587),n=V(l,.114);u=z(z(e,t),n)}else u=e;return t===`otsu`&&(o=ub(im(R(Q_(u),`int32`),Nd([]),256),a)),R(V(n?gg(u,o):eg(u,o),255),`int32`)}function ub(e,t){let n=Uv([-1]),r=Uv([0]),i=Uv([0]),a,o,s,c,l,u;for(let d=0;d<e.size-1;d++){a=Up(e,0,d+1),o=Up(e,d+1),l=B(W(a),t),u=B(W(o),t),s=B(W(V(a,B_(0,a.size))),W(a));let f=lm(o.shape,a.size),p=z(B_(0,o.size),f);c=B(W(V(o,p)),W(o));let m=G(s,c),h=G(s,c);i=V(V(V(l,u),m),h);let g=eg(i,r);r=th(g,i,r),n=th(g,Uv([d]),n)}return n}var db=F({threshold_:lb});function fb(e,t,n=`nearest`,r=`constant`,i=0,a){let o=P(e,`image`,`transform`,`float32`),s=P(t,`transforms`,`transform`,`float32`);O(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),O(s.rank===2&&(s.shape[0]===o.shape[0]||s.shape[0]===1)&&s.shape[1]===8,()=>`Error in transform: Input transform should be batch x 8 or 1 x 8`),O(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);let c={image:o,transforms:s},l={interpolation:n,fillMode:r,fillValue:i,outputShape:a};return N.runKernel(Ll,c,l)}var pb=F({transform_:fb});function mb(e,t,n){let r=P(e,`a`,`bandPart`);O(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);let i=r.shape,[a,o]=r.shape.slice(-2),s,c;typeof t==`number`?(O(t%1==0,()=>`bandPart(): numLower must be an integer, got ${t}.`),O(t<=a,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${a}).`),s=P(t<0?a:t,`numLower`,`bandPart`)):(O(t.dtype===`int32`,()=>`bandPart(): numLower's dtype must be an int32.`),s=th(mg(t,0),a,t_(t,a))),typeof n==`number`?(O(n%1==0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),O(n<=o,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`),c=P(n<0?o:n,`numUpper`,`bandPart`)):(O(n.dtype===`int32`,()=>`bandPart(): numUpper's dtype must be an int32.`),c=th(mg(n,0),o,t_(n,o)));let l=G(H(B_(0,a,1,`int32`),[-1,1]),B_(0,o,1,`int32`)),u=Lg(gg(l,s),ng(l,Eg(c))),d=Qg([a,o],r.dtype);return H(Iv(ry(H(r,[-1,a,o])).map(e=>th(u,e,d))),i)}var hb=F({bandPart_:mb});function gb(e){let t;if(Array.isArray(e)){t=!1,O(e!=null&&e.length>0,()=>`Gram-Schmidt process: input must not be null, undefined, or empty`);let n=e[0].shape[0];for(let t=1;t<e.length;++t)O(e[t].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[t].shape[0]} vs. ${n})`)}else t=!0,e=Ov(e,e.shape[0],0).map(e=>Pv(e,[0]));O(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);let n=[],r=e;for(let t=0;t<e.length;++t)n.push(N.tidy(()=>{let e=r[t];if(t>0)for(let r=0;r<t;++r){let t=V(W(V(n[r],e)),n[r]);e=G(e,t)}return B(e,Ih(e,`euclidean`))}));return t?Iv(n,0):n}var _b=F({gramSchmidt_:gb});function vb(e,t=!1){if(O(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return yb(e,t);{let n=ry(H(e,[e.shape.slice(0,e.shape.length-2).reduce((e,t)=>e*t),e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),r=[],i=[];return n.forEach(e=>{let[n,a]=yb(e,t);r.push(n),i.push(a)}),[H(Iv(r,0),e.shape),H(Iv(i,0),e.shape)]}}function yb(e,t=!1){return N.tidy(()=>{O(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);let n=e.shape[0],r=e.shape[1],i=Jh(n),a=Ff(e),o=Wv([[1]],[1,1]),s=Ff(o),c=n>=r?r:n;for(let e=0;e<c;++e){let t=a,c=s,l=i;[s,a,i]=N.tidy(()=>{let t=Up(a,[e,e],[n-e,1]),c=Ih(t),l=Up(a,[e,e],[1,1]),u=th(eg(l,0),Wv([[-1]]),Wv([[1]])),d=G(l,V(u,c)),f=B(t,d);s=f.shape[0]===1?Ff(o):Lp([o,Up(f,[1,0],[f.shape[0]-1,f.shape[1]])],0);let p=Eg(B(zp(u,d),c)),m=Up(a,[e,0],[n-e,r]),h=V(p,s),g=sy(s);if(e===0)a=G(m,zp(h,zp(g,m)));else{let t=G(m,zp(h,zp(g,m)));a=Lp([Up(a,[0,0],[e,r]),t],0)}let _=sy(h),v=Up(i,[0,e],[n,i.shape[1]-e]);if(e===0)i=G(v,zp(zp(v,s),_));else{let t=G(v,zp(zp(v,s),_));i=Lp([Up(i,[0,0],[n,e]),t],1)}return[s,a,i]}),L([t,c,l])}return!t&&n>r&&(i=Up(i,[0,0],[n,r]),a=Up(a,[0,0],[r,r])),[i,a]})}var bb=F({qr_:vb}),xb={flipLeftRight:Oy,grayscaleToRGB:Ay,resizeNearestNeighbor:cb,resizeBilinear:ob,rgbToGrayscale:My,rotateWithOffset:Py,cropAndResize:Ey,nonMaxSuppression:Ly,nonMaxSuppressionAsync:Xy,nonMaxSuppressionWithScore:Qy,nonMaxSuppressionWithScoreAsync:eb,nonMaxSuppressionPadded:nb,nonMaxSuppressionPaddedAsync:ib,threshold:db,transform:pb},Sb={bandPart:hb,gramSchmidt:_b,qr:bb},Cb=new Map,wb=new Map,Tb=class{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}},Eb=class e{constructor(){this.classNameMap={}}static getMap(){return e.instance??=new e,e.instance}static register(t){e.getMap().classNameMap[t.className]=[t,t.fromConfig]}};function K(e,t,n){O(e.className!=null,()=>`Class being registered does not have the static className property defined.`),O(typeof e.className==`string`,()=>`className is required to be a string, but got type `+typeof e.className),O(e.className.length>0,()=>`Class being registered has an empty-string as its className, which is disallowed.`),t===void 0&&(t=`Custom`),n===void 0&&(n=e.className);let r=n,i=t+`>`+r;return Eb.register(e),Cb.set(i,e),wb.set(e,i),e}var Db=class extends Tb{minimize(e,t=!1,n){let{value:r,grads:i}=this.computeGradients(e,n);if(n!=null){let e=n.map(e=>({name:e.name,tensor:i[e.name]}));this.applyGradients(e)}else this.applyGradients(i);return L(i),t?r:(r.dispose(),null)}get iterations(){return this.iterations_??=0,this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return Cg(e,t)}dispose(){this.iterations_!=null&&L(this.iterations_)}async saveIterations(){return this.iterations_??=0,{name:`iter`,tensor:Oh(this.iterations_,`int32`)}}async getWeights(){throw Error(`getWeights() is not implemented for this optimizer yet.`)}async setWeights(e){throw Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}};Object.defineProperty(Db,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});var Ob=class extends Db{static get className(){return`Adadelta`}constructor(e,t,n=null){super(),this.learningRate=e,this.rho=t,this.epsilon=n,this.accumulatedGrads=[],this.accumulatedUpdates=[],n??(this.epsilon=N.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=N.registeredVariables[t];this.accumulatedGrads[n]??(this.accumulatedGrads[n]={originalName:`${t}/accum_grad`,variable:I(()=>rh(r).variable(!1))}),this.accumulatedUpdates[n]??(this.accumulatedUpdates[n]={originalName:`${t}/accum_var`,variable:I(()=>rh(r).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedGrads[n].variable,o=this.accumulatedUpdates[n].variable;I(()=>{let e=z(V(a,this.rho),V(Mh(i),1-this.rho)),t=V(B(Ah(z(o,this.epsilon)),Ah(z(a,this.epsilon))),i),n=z(V(o,this.rho),V(Mh(t),1-this.rho));a.assign(e),o.assign(n);let s=z(V(t,-this.learningRate),r);r.assign(s)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(L(this.accumulatedGrads.map(e=>e.variable)),L(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){let e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=e.length/2;this.accumulatedGrads=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedUpdates=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}},kb=class extends Db{static get className(){return`Adagrad`}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=N.registeredVariables[t];this.accumulatedGrads[n]??(this.accumulatedGrads[n]={originalName:`${t}/accumulator`,variable:I(()=>lm(r.shape,this.initialAccumulatorValue).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedGrads[n].variable;I(()=>{let e=z(a,Mh(i));a.assign(e);let t=z(V(B(i,Ah(z(e,N.backend.epsilon()))),-this.learningRate),r);r.assign(t)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&L(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulatedGrads=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}},Ab=class extends Db{static get className(){return`Adam`}constructor(e,t,n,r=null){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],I(()=>{this.accBeta1=Oh(t).variable(),this.accBeta2=Oh(n).variable()}),r??(this.epsilon=N.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);I(()=>{let n=G(1,this.accBeta1),r=G(1,this.accBeta2);t.forEach((t,i)=>{let a=N.registeredVariables[t];this.accumulatedFirstMoment[i]??(this.accumulatedFirstMoment[i]={originalName:`${t}/m`,variable:I(()=>rh(a).variable(!1))}),this.accumulatedSecondMoment[i]??(this.accumulatedSecondMoment[i]={originalName:`${t}/v`,variable:I(()=>rh(a).variable(!1))});let o=Array.isArray(e)?e[i].tensor:e[t];if(o==null)return;let s=this.accumulatedFirstMoment[i].variable,c=this.accumulatedSecondMoment[i].variable,l=z(V(s,this.beta1),V(o,1-this.beta1)),u=z(V(c,this.beta2),V(Mh(o),1-this.beta2)),d=B(l,n),f=B(u,r);s.assign(l),c.assign(u);let p=z(V(B(d,z(Ah(f),this.epsilon)),-this.learningRate),a);a.assign(p)}),this.accBeta1.assign(V(this.accBeta1,this.beta1)),this.accBeta2.assign(V(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&L(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&L(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),I(()=>{this.accBeta1.assign(Dh(this.beta1,this.iterations_+1)),this.accBeta2.assign(Dh(this.beta2,this.iterations_+1))});let t=e.length/2;this.accumulatedFirstMoment=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}},jb=class extends Db{static get className(){return`Adamax`}constructor(e,t,n,r=null,i=0){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.decay=i,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],I(()=>{this.iteration=Oh(0).variable(),this.accBeta1=Oh(t).variable()}),r??(this.epsilon=N.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);I(()=>{let n=G(1,this.accBeta1),r=B(-this.learningRate,z(V(this.iteration,this.decay),1));t.forEach((t,i)=>{let a=N.registeredVariables[t];this.accumulatedFirstMoment[i]??(this.accumulatedFirstMoment[i]={originalName:`${t}/m`,variable:rh(a).variable(!1)}),this.accumulatedWeightedInfNorm[i]??(this.accumulatedWeightedInfNorm[i]={originalName:`${t}/v`,variable:rh(a).variable(!1)});let o=Array.isArray(e)?e[i].tensor:e[t];if(o==null)return;let s=this.accumulatedFirstMoment[i].variable,c=this.accumulatedWeightedInfNorm[i].variable,l=z(V(s,this.beta1),V(o,1-this.beta1)),u=Yg(V(c,this.beta2),Uf(o));s.assign(l),c.assign(u);let d=z(V(B(r,n),B(l,z(u,this.epsilon))),a);a.assign(d)}),this.iteration.assign(z(this.iteration,1)),this.accBeta1.assign(V(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&L(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&L(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw Error(`getWeights() is not implemented for Adamax yet.`)}async setWeights(e){throw Error(`setWeights() is not implemented for Adamax yet.`)}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}},Mb=class extends Db{static get className(){return`SGD`}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=Array.isArray(e)?e[n].tensor:e[t];if(r==null)return;let i=N.registeredVariables[t];I(()=>{let e=z(V(this.c,r),i);i.assign(e)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Rd(Oh(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw Error(`SGD optimizer does not have settable weights.`)}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}},Nb=class extends Mb{static get className(){return`Momentum`}constructor(e,t,n=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=n,this.accumulations=[],this.m=Oh(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=N.registeredVariables[t];this.accumulations[n]??(this.accumulations[n]={originalName:`${t}/momentum`,variable:I(()=>rh(r).variable(!1))});let i=this.accumulations[n].variable,a=Array.isArray(e)?e[n].tensor:e[t];a!=null&&I(()=>{let e,t=z(V(this.m,i),a);e=this.useNesterov?z(V(this.c,z(a,V(t,this.m))),r):z(V(this.c,t),r),i.assign(t),r.assign(e)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&L(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulations=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}},Pb=class extends Db{static get className(){return`RMSProp`}constructor(e,t=.9,n=0,r=null,i=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=n,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=i,r??(this.epsilon=N.backend.epsilon()),e==null)throw Error(`learningRate for RMSPropOptimizer must be defined.`)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=N.registeredVariables[t];this.accumulatedMeanSquares[n]??(this.accumulatedMeanSquares[n]={originalName:`${t}/rms`,variable:I(()=>rh(r).variable(!1))}),this.accumulatedMoments[n]??(this.accumulatedMoments[n]={originalName:`${t}/momentum`,variable:I(()=>rh(r).variable(!1))}),this.accumulatedMeanGrads[n]==null&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:`${t}/mg`,variable:I(()=>rh(r).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedMeanSquares[n].variable,o=this.accumulatedMoments[n].variable;I(()=>{let e=z(V(a,this.decay),V(Mh(i),1-this.decay));if(this.centered){let t=this.accumulatedMeanGrads[n].variable,s=z(V(t,this.decay),V(i,1-this.decay)),c=B(V(i,this.learningRate),Ah(G(e,z(Mh(s),this.epsilon)))),l=z(V(o,this.momentum),c);a.assign(e),t.assign(s),o.assign(l);let u=G(r,l);r.assign(u)}else{let e=z(V(a,this.decay),V(Mh(i),1-this.decay)),t=z(V(o,this.momentum),B(V(i,this.learningRate),Ah(z(e,this.epsilon))));a.assign(e),o.assign(t);let n=G(r,t);r.assign(n)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&L(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&L(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&L(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=this.centered?e.length/3:e.length/2;this.accumulatedMeanSquares=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedMoments=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}},Fb=[Ob,kb,Ab,jb,Nb,Pb,Mb];function Ib(){for(let e of Fb)K(e)}function Lb(e,t){let n=e.shape.length,r=t.shape.length;if(n<1)throw Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(t.dtype!==`int32`)throw Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(k(e.shape)===0)throw Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);let i=t.shape,a=i[i.length-1],o=1;for(let e=0;e<i.length-1;++e)o*=i[e];let s=e.shape,c=i.slice();c.pop();let l=1;for(let e=a;e<n;++e)l*=s[e],c.push(s[e]);let u=[...A(e.shape).map(e=>e/l),1].slice(0,a);return[c,o,l,u]}var Rb=s({assertParamsValid:()=>Vb,computeFlatOffset:()=>ex,computeOutShape:()=>Ub,getNormalizedAxes:()=>qb,isSliceContinous:()=>$b,maskToAxes:()=>Hb,parseSliceParams:()=>tx,sliceInfo:()=>nx,startForAxis:()=>Zb,startIndicesWithElidedDims:()=>Jb,stopForAxis:()=>Qb,stopIndicesWithElidedDims:()=>Yb,stridesForAxis:()=>Xb,stridesWithElidedDims:()=>Wb}),zb=-2,Bb=-1;function Vb(e,t,n){let r=e.shape.length;O(r===t.length,()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`),O(r===n.length,()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`);for(let i=0;i<r;++i)O(t[i]+n[i]<=e.shape[i],()=>`Error in slice${r}D: begin[${i}] + size[${i}] (${t[i]+n[i]}) would overflow input.shape[${i}] (${e.shape[i]})`)}function Hb(e){let t=[],n=0;for(;e>0;)e&1&&t.push(n),e/=2,n++;return t}function Ub(e,t,n){let r=[];for(let i=0;i<e.length;i++)r[i]=Math.ceil((t[i]-e[i])/n[i]);return r}function Wb(e,t,n,r){let i=[...e];for(let e=i.length;e<r.length;e++)i.push(1);for(let e=0;e<n;e++)e===0?i[t]=1:(i.splice(t,0,1),i.pop());return i}function Gb(e,t,n){return n<=e?n:n-(t-1)}function Kb(e,t){let n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function qb(e,t,n,r,i,a,o,s,c){let l=e.length,u=Array(l),d=Array(l),f=Array(l);if(t.length&&n>0){let c=t[0],l=n+1;u=Jb(o,c,l,r,e),d=Yb(s,c,l,i,e),f=Wb(a,c,l,e)}else for(let t=0;t<l;t++)u[t]=Zb(o,r,a,e,t,c),d[t]=Qb(s,i,a,e,t,c),f[t]=Xb(a,t,c);return{begin:u,end:d,strides:f}}function Jb(e,t,n,r,i){let a=[...i],o=Kb(n,t);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=0;else{let o=Gb(t,n,i),s=r[o];e&1<<o&&(s=0),a[i]=s}return a}function Yb(e,t,n,r,i){let a=[...i],o=Kb(n,t);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=2**53-1;else{let o=Gb(t,n,i),s=r[o];e&1<<o&&(s=2**53-1),a[i]=s}for(let e=0;e<a.length;e++){let t=i[e];a[e]<0&&(a[e]+=t),a[e]=so(0,a[e],i[e])}return a}function Xb(e,t,n){let r=e[t];return(n&1<<t||r==null)&&(r=1),r}function Zb(e,t,n,r,i,a){let o=t[i],s=n[i]||1;(e&1<<i||a&1<<i||o==null)&&(o=s>0?-(2**53-1):2**53-1);let c=r[i];return o<0&&(o+=c),o=so(0,o,c-1),o}function Qb(e,t,n,r,i,a){let o=t[i],s=n[i]||1;(e&1<<i||a&1<<i||o==null)&&(o=s>0?2**53-1:-(2**53-1));let c=r[i];return o<0&&(o+=c),o=s>0?so(0,o,c):so(-1,o,c-1),o}function $b(e,t,n){let r=n.length;for(let e=0;e<n.length;e++)if(n[e]>1){r=e;break}for(let i=r+1;i<n.length;i++)if(t[i]>0||n[i]!==e[i])return!1;return!0}function ex(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function tx(e,t,n){let r,i=e.shape.length;r=typeof t==`number`?[t,...Array(i-1).fill(0)]:t.length<i?t.concat(Array(i-t.length).fill(0)):t.slice(),r.forEach(e=>{O(e!==-1,()=>`slice() does not support negative begin indexing.`)});let a;return a=n==null?Array(i).fill(-1):typeof n==`number`?[n,...Array(i-1).fill(-1)]:n.length<i?n.concat(Array(i-n.length).fill(-1)):n,a=a.map((t,n)=>t>=0?t:(O(t===-1,()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${n}.`),e.shape[n]-r[n])),[r,a]}function nx(e,t,n,r,i,a,o,s,c){let l;if(r==null?(l=Array(t.length),l.fill(1)):l=r,o!=null&&o&o-1)throw Error(`Multiple ellipses in slice is not allowed.`);let u=!1,d={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:l.slice(),beginMask:i,endMask:a,ellipsisMask:o,newAxisMask:s,shrinkAxisMask:c};for(let e=0;e<d.dims;e++)u&&1<<e&s&&d.numAddAxisAfterEllipsis++,1<<e&o&&(u=!0);u||(d.ellipsisMask|=1<<d.dims,d.dims++);let f={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};rx(d,f);let p=!0,m=!0,h=!0,g=[],_=[];for(let t=0;t<e.length;++t){if(f.strides[t]===0)throw Error(`strides[${t}] must be non-zero`);let n=!!(f.shrinkAxisMask&1<<t),r=e[t];if(r===-1){g.push(n?1:-1);continue}let i=[f.beginMask&1<<t,f.endMask&1<<t],a=[f.strides[t]>0?0:-1,f.strides[t]>0?r:r-1];if(n&&f.strides[t]<=0)throw Error(`only stride 1 allowed on non-range indexing.`);h&&=f.strides[t]===1;let o=!!(f.beginMask&1<<t&&f.endMask&1<<t);if(f.beginValid&&f.endValid){if(n){let e=f.begin[t]<0?r+f.begin[t]:f.begin[t];if(f.begin[t]=e,f.end[t]=f.begin[t]+1,e<0||e>=r)throw Error(`slice index ${f.begin[t]} of dimension ${t} out of bounds.`)}else f.begin[t]=ix(f.begin[t],0,f.strides[t],r,i,a),f.end[t]=ix(f.end[t],1,f.strides[t],r,i,a);let e=f.strides[t]===1&&f.begin[t]===0&&f.end[t]===r;p&&=e,m&&=t===0&&f.strides[t]===1||e}else p=p&&f.strides[t]===1&&o,m&&=t===0&&f.strides[t]===1||o;let s,c=!1;if(f.beginValid&&f.endValid?(s=f.end[t]-f.begin[t],c=!0):n?(s=1,c=!0):o&&r>=0&&(s=f.strides[t]<0?-r:r,c=!0),c){let e;e=s===0||s<0!=f.strides[t]<0?0:Math.trunc(s/f.strides[t])+(s%f.strides[t]===0?0:1),g.push(e)}else g.push(-1)}for(let e=0;e<f.finalShapeGatherIndices.length;++e){let t=f.finalShapeGatherIndices[e];t>=0?_.push(g[t]):t===zb&&_.push(1)}return{finalShapeSparse:_.filter((e,t)=>f.finalShapeGatherIndices[t]!==zb),finalShape:_,isIdentity:p,sliceDim0:m,isSimpleSlice:h,begin:f.begin,end:f.end,strides:f.strides}}function rx(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=Array(t.dims),t.end=Array(t.dims),t.strides=Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=Array(t.dims);for(let r=0;r<e.dims;r++)if(1<<r&e.ellipsisMask){let i=Math.min(t.dims-(e.dims-r)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<i;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=r}else if(1<<r&e.newAxisMask)t.finalShapeGatherIndices.push(zb),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[n]=e.begin[r]),e.end!=null&&(t.end[n]=e.end[r]),t.strides[n]=e.strides[r],e.beginMask&1<<r&&(t.beginMask|=1<<n),e.endMask&1<<r&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(Bb),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[n]=r,n++}}function ix(e,t,n,r,i,a){if(i[t])return n>0?a[t]:a[t+1&1];{let t=e<0?r+e:e;return t<a[0]?a[0]:t>a[1]?a[1]:t}}var ax=class{static sgd(e){return new Mb(e)}static momentum(e,t,n=!1){return new Nb(e,t,n)}static rmsprop(e,t=.9,n=0,r=null,i=!1){return new Pb(e,t,n,r,i)}static adam(e=.001,t=.9,n=.999,r=null){return new Ab(e,t,n,r)}static adadelta(e=.001,t=.95,n=null){return new Ob(e,t,n)}static adamax(e=.002,t=.9,n=.999,r=null,i=0){return new jb(e,t,n,r,i)}static adagrad(e,t=.1){return new kb(e,t)}},ox=typeof requestAnimationFrame<`u`?requestAnimationFrame:typeof setImmediate<`u`?setImmediate:e=>e();function sx(){return new Promise(e=>ox(()=>e()))}function cx(e,t){let n=e[0].length;e.forEach((e,t)=>{O(e.length===n,()=>`Error in concat${n}D: rank of tensors[${t}] must be the same as the rank of the rest (${n})`)}),O(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);let r=e[0];e.forEach((e,i)=>{for(let a=0;a<n;a++)O(a===t||e[a]===r[a],()=>`Error in concat${n}D: Shape of tensors[${i}] (${e}) does not match the shape of the rest (${r}) along the non-concatenated axis ${i}.`)})}function lx(e,t){let n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}var ux;(function(e){e[e.FIRST_DIM_SIZE=0]=`FIRST_DIM_SIZE`,e[e.VALUE_ROWIDS=1]=`VALUE_ROWIDS`,e[e.ROW_LENGTHS=2]=`ROW_LENGTHS`,e[e.ROW_SPLITS=3]=`ROW_SPLITS`,e[e.ROW_LIMITS=4]=`ROW_LIMITS`,e[e.ROW_STARTS=5]=`ROW_STARTS`})(ux||={});function dx(e,t,n){let r=[];if(n==null&&t==null)return r;if(t==null)for(;r.length<e+n.length;)r.push(-1);else r=t.slice();if(n==null)return r;if(e+n.length!==r.length)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${r.length}`);for(let i=1;i<n.length;++i){let a=n[i],o=r[r.length-n.length+i],s=r[o];if(a>=0){if(s>=0){if(s!==a)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${i+e}] = ${a} but shape[${i+e}] = ${s}`)}else r[o]=a}}return r}function fx(e){let t={FIRST_DIM_SIZE:ux.FIRST_DIM_SIZE,VALUE_ROWIDS:ux.VALUE_ROWIDS,ROW_LENGTHS:ux.ROW_LENGTHS,ROW_SPLITS:ux.ROW_SPLITS,ROW_LIMITS:ux.ROW_LIMITS,ROW_STARTS:ux.ROW_STARTS},n=[];for(let r of e)if(r in t)n.push(t[r]);else break;return n}function px(e){return e.length===0?0:e[0]===ux.FIRST_DIM_SIZE?e.length-1:e.length}function mx(e,t){if(e==null||t==null)return;let n=e.length,r=t.length;if(n>=r)throw Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${r})`);for(let i=0;i<Math.min(n,r-1);++i){let n=e[i],r=t[i+1];if(n>=0&&r>=0&&n!==1&&n!==r)throw Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${i-e.length}] = ${n} but ragged tensor input.flatValues.shape[${i-e.length}] = ${r}`)}}function hx(e){return e<=30?e:Po(e,Math.floor(Math.sqrt(e)))}function gx(e,t,n){return[n*(typeof e==`number`?e:e[0]),t*(typeof e==`number`?e:e[1])]}function _x(e,t,n,r=!0){let i=[];if(r)i=i.concat(t.slice(0)),i.push(e[0]/n),i=i.concat(e.slice(1));else{i=i.concat(e[0]);let n=t.length;for(let r=0;r<n;++r)i=i.concat([e[r+1]/t[r],t[r]]);i=i.concat(e.slice(n+1))}return i}function vx(e,t,n=!0){let r=[];if(n){r.push(t);for(let n=t+1;n<e;++n)n<=2*t?(r.push(n),r.push(n-(t+1))):r.push(n)}else{let n=[],i=[];for(let r=1;r<e;++r)r>=t*2+1||r%2==1?i.push(r):n.push(r);r.push(...n),r.push(0),r.push(...i)}return r}function yx(e,t,n,r=!0){let i=[];r?i.push(e[0]/n):i.push(e[0]*n);for(let n=1;n<e.length;++n)n<=t.length?r?i.push(t[n-1]*e[n]):i.push(e[n]/t[n-1]):i.push(e[n]);return i}function bx(e,t){let n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function xx(e,t,n){let r=e.slice(0,1);for(let i=0;i<n;++i)r.push(e[i+1]-t[i][0]-t[i][1]);return r}var Sx=1.7580993408473768,Cx=1.0507009873554805,wx=.3275911,Tx=.254829592,Ex=-.284496736,Dx=1.421413741,Ox=-1.453152027,kx=1.061405429;function Ax(e,t){if(e.length!==t.length)throw Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);let n=new Float32Array(e.length*2);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function jx(e){let t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function Mx(e){let t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=0;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function Nx(e){let t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=2;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function Px(e,t){return{real:e[t*2],imag:e[t*2+1]}}function Fx(e,t,n,r){e[r*2]=t,e[r*2+1]=n}function Ix(e,t){let n=new Float32Array(e/2),r=new Float32Array(e/2);for(let i=0;i<Math.ceil(e/2);i++){let a=(t?2:-2)*Math.PI*(i/e);n[i]=Math.cos(a),r[i]=Math.sin(a)}return{real:n,imag:r}}function Lx(e,t,n){let r=(n?2:-2)*Math.PI*(e/t);return{real:Math.cos(r),imag:Math.sin(r)}}var Rx=`->`,zx=/->/g,Bx=`,`,Vx=`...`;function Hx(e,t){e=e.replace(/\s/g,``);let n=(e.length-e.replace(zx,``).length)/2;if(n<1)throw Error(`Equations without an arrow are not supported.`);if(n>1)throw Error(`Equation must contain exactly one arrow ("${Rx}").`);let[r,i]=e.split(Rx);O(r.indexOf(Vx)===-1,()=>`The ellipsis notation ("${Vx}") is not supported yet.`);let a=r.split(Bx),o=a.length;if(t!==o)throw Error(`Expected ${o} input tensors, received ${t}`);if(o>2)throw Error(`Support for more than 2 input tensors is not implemented yet.`);let s=[];for(let e=0;e<i.length;++e){let t=i[e];if(!a.some(e=>e.indexOf(t)!==-1))throw Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);s.indexOf(t)===-1&&s.push(t)}for(let e=0;e<r.length;++e){let t=r[e];s.indexOf(t)===-1&&t!==Bx&&s.push(t)}let c=Array(a.length);for(let e=0;e<o;++e){if(new Set(a[e].split(``)).size!==a[e].length)throw Error(`Found duplicate axes in input component ${a[e]}. Support for duplicate axes in input is not implemented yet.`);c[e]=[];for(let t=0;t<a[e].length;++t)c[e].push(s.indexOf(a[e][t]))}let l=s.length,u=i.length,d=[];for(let e=u;e<l;++e)d.push(e);return{allDims:s,summedDims:d,idDims:c}}function Ux(e,t){let n=Array(e);n.fill(-1);for(let e=0;e<t.length;++e)n[t[e]]=e;let r=[];for(let t=0;t<e;++t)n[t]===-1&&r.push(t);return n=n.filter(e=>e!==-1),{permutationIndices:n,expandDims:r}}function Wx(e,t,n){let r=Array(e);for(let e=0;e<n.length;++e){let i=n[e].shape;for(let n=0;n<t[e].length;++n)r[t[e][n]]===void 0?r[t[e][n]]=i[n]:O(r[t[e][n]]===i[n],()=>`Expected dimension ${r[t[e][n]]} at axis ${n} of input shaped ${JSON.stringify(i)}, but got dimension ${i[n]}`)}}function Gx(e,t){let n=e,r=[],i=0;e.length===0&&n.push(-1),i=e.length+1;for(let e=0;e<i;++e)r.push([]);let a=[];for(let e=0;e<n.length;++e){let i=n[e],o=qx(t,i);for(let t of o)a.indexOf(t)===-1&&(r[e].push(t),a.push(t))}return{path:n,steps:r}}function Kx(e){return e.every((e,t)=>e===t)}function qx(e,t){let n=[];for(let r=0;r<e.length;++r)(e[r].length===0||e[r].indexOf(t)!==-1||t===-1)&&n.push(r);return n}function Jx(e,t,n=0){let r=[];if(typeof t==`number`)O(e.shape[n]%t===0,()=>`Number of splits must evenly divide the axis.`),r=Array(t).fill(e.shape[n]/t);else{O(t.reduce((e,t)=>(t===-1&&(e+=1),e),0)<=1,()=>`There should be only one negative value in split array.`);let i=t.indexOf(-1);if(i!==-1){let r=t.reduce((e,t)=>t>0?e+t:e);t[i]=e.shape[n]-r}O(e.shape[n]===t.reduce((e,t)=>e+t),()=>`The sum of sizes must match the size of the axis dimension.`),r=t}return r}function Yx(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function Xx(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function Zx(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}function Qx(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function $x(e,t){return`size ${e} must be non-negative, not ${t}`}function eS(){return`reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero`}function tS(e,t){return`Input to reshape is a SparseTensor with ${k(e)}
  dense values, but the requested shape requires a multiple of ${k(t)}. inputShape=${e} outputShape= ${t}`}function nS(e,t){return`Input to reshape is a tensor with ${k(e)} dense values, but the requested shape has ${k(t)}. inputShape=${e} outputShape=${t}`}function rS(){return`segment ids must be >= 0`}function iS(){return`segment ids are not increasing`}function aS(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function oS(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}var sS=s({collectGatherOpShapeInfo:()=>uS,computeOutShape:()=>lS,segOpComputeOptimalWindowSize:()=>cS});function cS(e,t){let n=!1,r;for(e<=30?(r=e,n=!0):r=Po(e,Math.floor(Math.sqrt(e)));!n;)r>t||r===e?n=!0:r=Po(e,r+1);return r}function lS(e,t,n){let r=[],i=e.length;for(let a=0;a<i;a++)a===t?r.push(n):r.push(e[a]);return r}function uS(e,t,n,r){let i=t.shape.length,a=e.shape.length;if(r!==0&&(r<-i||r>i))throw Error(`Expect batchDims in the range of [-${i}, ${i}], but got ${r}`);if(r<0&&(r+=i),r>a)throw Error(`batchDims (${r}) must be less than rank(x) (
    ${a}).`);if(n<r)throw Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let n=0;n<r;++n)if(e.shape[n]!==t.shape[n])throw Error(`x.shape[${n}]: ${e.shape[n]} should be equal to indices.shape[${n}]: ${t.shape[n]}.`);let o=e.shape[n],s=[],c=1,l=1,u=1;for(let t=0;t<r;++t)s.push(e.shape[t]),c*=e.shape[t];for(let t=r;t<n;t++)s.push(e.shape[t]),l*=e.shape[t];for(let e=r;e<i;e++)s.push(t.shape[e]);for(let t=n+1;t<a;t++)s.push(e.shape[t]),u*=e.shape[t];return{batchSize:c,sliceSize:u,outerSize:l,dimSize:o,outputShape:s}}var dS=s({ERF_A1:()=>Tx,ERF_A2:()=>Ex,ERF_A3:()=>Dx,ERF_A4:()=>Ox,ERF_A5:()=>kx,ERF_P:()=>wx,PARALLELIZE_THRESHOLD:()=>30,RowPartitionType:()=>ux,SELU_SCALE:()=>Cx,SELU_SCALEALPHA:()=>Sx,applyActivation:()=>hy,assertAndGetBroadcastShape:()=>U,assertAxesAreInnerMostDims:()=>vh,assertParamsConsistent:()=>cx,assignToTypedArray:()=>Fx,axesAreInnerMostDims:()=>mh,calculateShapes:()=>qv,checkEinsumDimSizes:()=>Wx,checkPadOnDimRoundingMode:()=>Ap,combineLocations:()=>hh,combineRaggedTensorToTensorShapes:()=>dx,complexWithEvenIndex:()=>Mx,complexWithOddIndex:()=>Nx,computeConv2DInfo:()=>hp,computeConv3DInfo:()=>gp,computeDefaultPad:()=>yp,computeDilation2DInfo:()=>fp,computeOptimalWindowSize:()=>hx,computeOutAndReduceShapes:()=>gh,computeOutShape:()=>lx,computePool2DInfo:()=>pp,computePool3DInfo:()=>mp,convertConv2DDataFormat:()=>kp,decodeEinsumEquation:()=>Hx,eitherStridesOrDilationsAreOne:()=>Dp,expandShapeToKeepDim:()=>_h,exponent:()=>Lx,exponents:()=>Ix,fromStringArrayToUint8:()=>pS,fromUint8ToStringArray:()=>fS,getAxesPermutation:()=>yh,getBroadcastDims:()=>Xm,getComplexWithIndex:()=>Px,getEinsumComputePath:()=>Gx,getEinsumPermutation:()=>Ux,getFusedBiasGradient:()=>my,getFusedDyActivation:()=>py,getImageCenter:()=>gx,getInnerMostAxes:()=>xh,getPermuted:()=>vx,getRaggedRank:()=>px,getReductionAxes:()=>Zm,getReshaped:()=>_x,getReshapedPermuted:()=>yx,getRowPartitionTypesHelper:()=>fx,getSliceBeginCoords:()=>bx,getSliceSize:()=>xx,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>Yx,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>Xx,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>Zx,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>eS,getSparseReshapeInputOutputMismatchErrorMessage:()=>nS,getSparseReshapeInputOutputMultipleErrorMessage:()=>tS,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>Qx,getSparseReshapeNegativeOutputDimErrorMessage:()=>$x,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>oS,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>rS,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>iS,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>aS,getUndoAxesPermutation:()=>bh,isIdentityPermutation:()=>Kx,log:()=>Xl,mergeRealAndImagArrays:()=>Ax,prepareAndValidate:()=>Lb,prepareSplitSize:()=>Jx,segment_util:()=>sS,shouldFuse:()=>gy,slice_util:()=>Rb,splitRealAndImagArrays:()=>jx,stridesOrDilationsArePositive:()=>Op,tupleValuesAreOne:()=>Ep,upcastType:()=>ad,validateDefaultValueShape:()=>mx,validateInput:()=>Kv,validateUpdateShape:()=>Gv,warn:()=>Yl});function fS(e){try{return e.map(e=>ku(e))}catch(e){throw Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function pS(e){return e.map(e=>Ou(e))}Ib();var mS={kernelName:`Abs`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(e,Rv(R(n,`float32`),-1))}}},hS={kernelName:ns,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=Mh(R(n,`float32`));return Eg(B(e,Ah(G(Oh(1),t))))}}}},gS={kernelName:rs,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,Ah(G(Mh(R(n,`float32`)),1)))}}},_S={kernelName:`Add`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=U(n.shape,r.shape);return{a:()=>{let t=e,r=Zm(n.shape,i);return r.length>0&&(t=W(t,r)),H(t,n.shape)},b:()=>{let t=e,n=Zm(r.shape,i);return n.length>0&&(t=W(t,n)),H(t,r.shape)}}}},vS={kernelName:is,saveAllInputs:!0,gradFunc:(e,t)=>{let n={};return t.forEach((t,r)=>{n[r]=()=>e.clone()}),n}},yS={kernelName:as,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>rh(n)}}},bS={kernelName:os,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>rh(n)}}},xS={kernelName:ss,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,Ah(G(Oh(1),Mh(R(n,`float32`)))))}}},SS={kernelName:cs,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,Ah(z(Oh(1),Mh(R(n,`float32`)))))}}},CS={kernelName:ds,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=U(n.shape,r.shape);return{a:()=>{let t=z(Mh(n),Mh(r)),a=V(e,B(r,t)),o=Zm(n.shape,i);return o.length>0&&(a=W(a,o)),H(a,n.shape)},b:()=>{let t=z(Mh(n),Mh(r)),a=Eg(V(e,B(n,t))),o=Zm(r.shape,i);return o.length>0&&(a=W(a,o)),H(a,r.shape)}}}},wS={kernelName:ls,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,z(Mh(R(n,`float32`)),1))}}},TS={kernelName:us,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,G(Oh(1),Mh(R(n,`float32`))))}}};function ES(e,t,n,r,i,a){let o=P(e,`dy`,`avgPool3dGrad`),s=P(t,`input`,`avgPool3dGrad`),c=o,l=s,u=!1;s.rank===4&&(u=!0,c=H(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]]),l=H(s,[1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]])),O(c.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`),O(l.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${l.rank}.`),Ap(`avgPool3dGrad`,i,a);let d={dy:c,input:l},f={filterSize:n,strides:r,pad:i,dimRoundingMode:a},p=N.runKernel(hs,d,f);return u?H(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}var DS=F({avgPool3dGrad_:ES}),OS={kernelName:ms,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{filterSize:i,strides:a,pad:o,dimRoundingMode:s}=n;return{x:()=>DS(e,r,i,a,o,s)}}};function kS(e,t,n,r,i){let a=P(e,`dy`,`avgPoolGrad`),o=P(t,`input`,`avgPoolGrad`);O(o.rank===a.rank,()=>`Rank of input (${o.rank}) does not match rank of dy (${a.rank})`);let s=o,c=a,l=!1;o.rank===3&&(l=!0,s=H(o,[1,o.shape[0],o.shape[1],o.shape[2]]),c=H(a,[1,a.shape[0],a.shape[1],a.shape[2]])),O(c.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${c.rank}.`),O(s.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${s.rank}.`);let u={dy:c,input:s},d={filterSize:n,strides:r,pad:i},f=N.runKernel(ps,u,d);return l?H(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var AS=F({avgPoolGrad_:kS}),jS={kernelName:fs,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{filterSize:i,strides:a,pad:o}=n;return{x:()=>AS(e,r,i,a,o)}}},MS={kernelName:gs,inputsToSave:[`a`,`b`],gradFunc:(e,t,n)=>{let[r,i]=t,{transposeA:a,transposeB:o}=n;return!a&&!o?{a:()=>zp(e,i,!1,!0),b:()=>zp(r,e,!0,!1)}:!a&&o?{a:()=>zp(e,i,!1,!1),b:()=>zp(e,r,!0,!1)}:a&&!o?{a:()=>zp(i,e,!1,!0),b:()=>zp(r,e,!1,!1)}:{a:()=>zp(i,e,!0,!0),b:()=>zp(e,r,!0,!0)}}},NS={kernelName:_s,gradFunc:(e,t,n)=>{let{blockShape:r,crops:i}=n;return{x:()=>__(e,r,i)}}},PS={kernelName:bs,gradFunc:(e,t,n)=>{let r=n,i=r.inputShape,a=r.shape,o=Array.from(a);for(let e=i.length-1;e>=0;e--)if(i[e]===a[e])o[e]=1;else if(i[e]!==1)throw Error(`broadcastTo(): [${i}] cannot be broadcast to [${a}].`);let s=[];for(let e=0;e<o.length;e++)o[e]>1&&s.push(e);return{x:()=>W(e,s,!0)}}},FS={kernelName:Ss,gradFunc:e=>({x:()=>e.clone()})},IS={kernelName:Cs,gradFunc:e=>({x:()=>rh(e)})},LS={kernelName:ws,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{clipValueMin:i,clipValueMax:a}=n;return{x:()=>th(Lg(ng(r,i),gg(r,a)),e,rh(e))}}},RS={kernelName:Es,inputsToSave:[`x`],gradFunc:mS.gradFunc},zS={kernelName:Ds,saveAllInputs:!0,gradFunc:(e,t,n)=>{let r=t.map(e=>e.shape),{axis:i}=n,a=bo(i,t[0].shape)[0];return Ov(e,r.map(e=>e[a]),a).map(e=>()=>e)}},BS={kernelName:Os,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,{dilations:a,strides:o,pad:s,dataFormat:c}=n;return O(Ep(a),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`),{x:()=>Tm(r.shape,e,i,o,s,c),filter:()=>fy(r,e,i.shape,o,s,c)}}},VS={kernelName:As,inputsToSave:[`dy`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,{strides:a,pad:o,dataFormat:s,dimRoundingMode:c}=n;return{dy:()=>xm(e,i,a,o,s,1,c),filter:()=>fy(e,r,i.shape,a,o,s,c)}}};function HS(e,t,n,r,i){let a=e;e.rank===4&&(a=H(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]));let o=t;o.rank===4&&(o=H(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),O(a.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${a.shape}.`),O(o.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${o.shape}.`),O(n.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${n}.`),O(a.shape[4]===n[3],()=>`Error in conv3dDerFilter: depth of input ${a.shape[4]}) must match input depth in filter (${n[3]}.`),O(o.shape[4]===n[4],()=>`Error in conv3dDerFilter: depth of dy (${o.shape[4]}) must match output depth for filter (${n[4]}).`);let s={x:a,dy:o},c={strides:r,pad:i,filterShape:n};return N.runKernel(Ms,s,c)}var US=F({conv3DBackpropFilter_:HS}),WS={kernelName:js,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let{dilations:r,strides:i,pad:a}=n;O(Ep(r),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);let[o,s]=t;return{x:()=>jm(o.shape,e,s,i,a),filter:()=>US(o,e,s.shape,i,a)}}},GS={kernelName:`Cos`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(Eg(cv(R(n,`float32`))),e)}}},KS={kernelName:Ps,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(uv(R(n,`float32`)),e)}}},qS={kernelName:Is,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i,exclusive:a,reverse:o}=n;return{x:()=>{let t=yh([i],r.rank),n=Vm(e,i,a,!o);return t!=null&&(n=sy(n,t)),n}}}},JS={kernelName:Bs,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let{dilations:r,strides:i,pad:a,dimRoundingMode:o}=n,s=r??[1,1];O(Ep(s),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);let[c,l]=t;return O(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${c.rank}.`),O(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${l.rank}.`),O(c.shape[3]===l.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${c.shape[3]}) must match the inChannels dimension in filter ${l.shape[2]}.`),O(Dp(i,s),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${i} and dilations '${s}'.`),Ap(`depthwiseConv2d`,a,o),{x:()=>Sy(c.shape,e,l,i,a,s,o),filter:()=>by(c,e,l.shape,i,a,s,o)}}},YS={kernelName:Ws,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,a={x:r,filter:i,dy:e},o={x:r,filter:i,dy:e};return{x:()=>N.runKernel(Gs,a,n),filter:()=>N.runKernel(Ks,o,n)}}},XS={kernelName:`Elu`,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t,r={dy:e,y:n};return{x:()=>N.runKernel(Xs,r)}}},ZS={kernelName:`Erf`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t,r=V(Bh(Eg(Mh(n))),2/Math.sqrt(Math.PI));return{x:()=>V(e,r)}}},QS={kernelName:`Exp`,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(e,n)}}},$S={kernelName:Qs,inputsToSave:[`input`],gradFunc:(e,t)=>{let[n]=t;return{input:()=>H(e,n.shape)}}},eC={kernelName:$s,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(e,Bh(n))}}},tC={kernelName:nc,gradFunc:e=>({x:()=>rh(e)})},nC={kernelName:rc,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=U(n.shape,r.shape);return{a:()=>{let t=B(e,R(r,`float32`)),a=Zm(n.shape,i);return a.length>0?H(W(t,a),n.shape):t},b:()=>{let t=V(e,R(n,`float32`)),a=Zm(r.shape,i);a.length>0&&(t=H(W(t,a),r.shape));let o=Mh(r);return Eg(B(t,R(o,`float32`)))}}}},rC={kernelName:ic,inputsToSave:[`x`,`mean`,`variance`,`scale`],gradFunc:(e,t,n)=>{let{varianceEpsilon:r}=n,[i,a,o,s]=t,c=s??Oh(1),l=Zm(a.shape,i.shape),u=[];if(a.rank===1){for(let e=0;e<i.shape.length-1;++e)u.push(i.shape[e]);u.push(1)}let d=G(i,a),f=V(e,c),p=ev(z(o,Oh(r))),m=V(V(V(p,p),p),Oh(-.5));return{x:()=>a.rank===1?H(V(V(e,Kh(H(p,[1,1,1,a.shape[0]]),u)),c),i.shape):H(V(V(e,p),c),i.shape),mean:()=>{let e=V(V(p,Oh(-1)),f);return a.rank===1&&(e=W(e,l)),H(e,a.shape)},variance:()=>{let e=V(V(m,d),f);return a.rank===1&&(e=W(e,l)),H(e,a.shape)},scale:()=>{let t=V(e,V(d,p));return a.rank===1&&(t=W(t,l)),H(t,a.shape)},offset:()=>{let t=e;return a.rank===1&&(t=W(t,l)),H(t,a.shape)}}}},iC={kernelName:ac,inputsToSave:[`x`,`indices`],gradFunc:(e,t,n)=>{let[r,i]=t,{axis:a,batchDims:o}=n,s=bo(a,r.shape)[0],c=(e,t,n)=>()=>{let r=e.shape,i=t.size,o=r.slice(0,s),c=o.length,l=r.slice(a,r.length).slice(1),u=l.length,d=aC(0,c),f=aC(c+1,c+1+u),p=H(n,oC([o,[i],l])),m=H(t,[i]),h=oC([[c],d,f]),g=ty(sy(p,h),m,e.shape[s]),_=bh(h);return g=sy(g,_),g};if(o===1){let t=r.shape[0],n=r.split(t,0);return{x:()=>Iv(n.map((t,n)=>c(t,i.slice(n,1),e.slice(n,1))())).reshape(r.shape),indices:()=>i}}return{x:c(r,i,e),indices:()=>i}}};function aC(e,t){let n=[];for(let r=e;r<t;++r)n.push(r);return n}function oC(e){let t=[];for(let n=0;n<e.length;++n)for(let r=0;r<e[n].length;++r)t.push(e[n][r]);return t}var sC={kernelName:cc,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>rh(n),b:()=>rh(r)}}},cC={kernelName:lc,gradFunc:e=>({x:()=>R(e,`float32`)})},lC={kernelName:fc,gradFunc:e=>({x:()=>rh(e)})},uC={kernelName:pc,gradFunc:e=>({x:()=>rh(e)})},dC={kernelName:mc,gradFunc:e=>({x:()=>rh(e)})},fC={kernelName:hc,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{alpha:i}=n,a=eg(r,0);return{x:()=>th(a,e,V(e,i))}}},pC={kernelName:yc,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,z(n,1))}}},mC={kernelName:`Log`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,R(n,`float32`))}}},hC={kernelName:Cc,inputsToSave:[],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n;return{logits:()=>{let t=Bh(r);return G(e,V(W(e,i,!0),t))}}}};function gC(e,t,n,r=5,i=1,a=1,o=.5){let s={x:e,y:t,dy:n},c={depthRadius:r,bias:i,alpha:a,beta:o};return N.runKernel(wc,s,c)}var _C=F({localResponseNormalizationBackprop_:gC}),vC={kernelName:`LRN`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{depthRadius:a,bias:o,alpha:s,beta:c}=n;return{x:()=>_C(r,i,e,a,o,s,c)}}};function yC(e,t,n,r){return t.rank<n.rank&&(t=H(t,_h(t.shape,r))),e.rank<n.rank&&(e=H(e,_h(e.shape,r))),{x:()=>V(e,R($m(n,t),e.dtype))}}var bC={kernelName:`Max`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let{reductionIndices:r}=n,i=t[0],a=t[1],o=yC(e,a,i,bo(r,i.shape));return{x:()=>o.x()}}},xC={kernelName:Tc,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>V(e,R(ng(n,r),`float32`)),b:()=>V(e,R(mg(n,r),`float32`))}}};function SC(e,t,n,r,i,a,o){let s=P(e,`dy`,`maxPool3dGrad`),c=P(t,`input`,`maxPool3dGrad`),l=P(n,`output`,`maxPool3dGrad`),u=s,d=c,f=l,p=!1;c.rank===4&&(p=!0,u=H(s,[1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]]),d=H(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]]),f=H(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),O(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),O(d.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${d.rank}.`),O(f.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${f.rank}.`),Ap(`maxPool3dGrad`,a,o);let m={dy:u,input:d,output:f},h={filterSize:r,strides:i,pad:a,dimRoundingMode:o},g=N.runKernel(kc,m,h);return p?H(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}var CC=F({maxPool3dGrad_:SC}),wC={kernelName:Oc,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=n;return{x:()=>CC(e,r,i,a,o,s,c)}}};function TC(e,t,n,r,i,a,o){let s=P(e,`dy`,`maxPoolGrad`),c=P(t,`input`,`maxPoolGrad`),l=P(n,`output`,`maxPoolGrad`);O(c.rank===s.rank,()=>`Rank of input (${c.rank}) does not match rank of dy (${s.rank})`),O(s.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${s.rank}.`),O(c.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${c.rank}.`),Ap(`maxPoolGrad`,a,o);let u={dy:s,input:c,output:l},d={filterSize:r,strides:i,pad:a,dimRoundingMode:o};return N.runKernel(Dc,u,d)}var EC=F({maxPoolGrad_:TC}),DC={kernelName:Ec,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{filterSize:a,strides:o,pad:s}=n;return{x:()=>EC(e,r,i,a,o,s)}}},OC={kernelName:jc,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n,a=bo(i,r.shape),o=gh(r.shape,a)[1],s=k(o);return{x:()=>{let t=r.shape.slice();return a.forEach(e=>{t[e]=1}),B(V(H(e,t),$g(r.shape,`float32`)),s)}}}},kC={kernelName:`Min`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let{axis:r}=n,[i,a]=t,o=yC(e,a,i,bo(r,i.shape));return{x:()=>o.x()}}},AC={kernelName:Mc,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>V(e,R(gg(n,r),`float32`)),b:()=>V(e,R(eg(n,r),`float32`))}}},jC={kernelName:Nc,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let r=t[0],{paddings:i}=n,a=i.map(e=>e[0]);return{x:()=>Up(e,a,r.shape)}}},MC={kernelName:`Mod`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=U(n.shape,r.shape);return{a:()=>{let t=Zm(n.shape,i);return t.length>0?H(W(e,t),n.shape):e},b:()=>{let t=V(e,Eg(Xh(B(n,r)))),a=Zm(r.shape,i);return a.length>0?H(W(t,a),r.shape):t}}}},NC={kernelName:Fc,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=U(n.shape,r.shape);return{a:()=>{let t=V(e,R(r,`float32`)),a=Zm(n.shape,i);return a.length>0?H(W(t,a),n.shape):t},b:()=>{let t=V(e,R(n,`float32`)),a=Zm(r.shape,i);return a.length>0?H(W(t,a),r.shape):t}}}},PC={kernelName:`Neg`,gradFunc:e=>({x:()=>Eg(e)})},FC={kernelName:Vc,inputsToSave:[`indices`],gradFunc:(e,t)=>{let n=t[0];return{indices:()=>Qg(n.shape,`float32`)}}},IC={kernelName:Bc,gradFunc:e=>({x:()=>rh(e)})},LC={kernelName:Hc,saveAllInputs:!0,gradFunc:(e,t,n)=>{let{axis:r}=n;return ry(e,r).map(e=>()=>e)}},RC={kernelName:Uc,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let r=t[0],{paddings:i}=n,a=i.map(e=>e[0]);return{x:()=>Up(e,a,r.shape)}}},zC={kernelName:`Pow`,inputsToSave:[`a`,`b`],outputsToSave:[!0],gradFunc:(e,t)=>{let[n,r,i]=t,a=n,o=r,s=U(a.shape,o.shape);return{a:()=>{let t=R(o,`float32`),n=V(e,V(t,Dh(a,G(t,Oh(1))))),r=Zm(a.shape,s);return r.length>0&&(n=W(n,r)),H(n,a.shape)},b:()=>{let t=th(eg(a,0),bg(a),rh(a)),n=V(e,V(i,t)),r=Zm(o.shape,s);return r.length>0&&(n=W(n,r)),H(n,o.shape)}}}},BC={kernelName:Wc,inputsToSave:[`x`,`alpha`],gradFunc:(e,t)=>{let[n,r]=t,i=eg(n,0);return{x:()=>th(i,e,V(e,r)),alpha:()=>{let t=th(i,rh(e),V(e,n)),a=Zm(r.shape,e.shape);return a.length>0&&(t=W(t,a)),H(t,r.shape)}}}};function VC(e,t,n){let r=e.shape.slice();return r[n]=1,V(H(t,r),V(zm(e,n,!0,!1),zm(e,n,!0,!0)))}function HC(e,t,n){let r=e.shape.length,i=r-n.length,a=yh(n,r),o=e;a!=null&&(o=sy(e,a));let s=o.shape.slice(),c=s.splice(r-n.length,n.length).reduce((e,t)=>e*t,1);s.push(c);let l=VC(o.reshape(s),t,i);if(l=l.reshape(o.shape),a!=null){let e=bh(a);l=sy(l,e)}return l}var UC={kernelName:Gc,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n,a=[];return a=i==null?r.shape.map((e,t)=>t):typeof i==`number`?[i]:i,{x:()=>HC(r,e,a)}}},WC={kernelName:Js,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=U(n.shape,r.shape);return{a:()=>{let t=B(e,R(r,`float32`)),a=Zm(n.shape,i);return a.length>0?H(W(t,a),n.shape):t},b:()=>{let t=V(e,R(n,`float32`)),a=Zm(r.shape,i);a.length>0&&(t=H(W(t,a),r.shape));let o=Mh(r);return Eg(B(t,R(o,`float32`)))}}}},GC={kernelName:Zc,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,Eg(Mh(n)))}}},KC={kernelName:il,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t,r=V(gg(n,6),Rv(n));return{x:()=>V(e,R(r,`float32`))}}},qC={kernelName:Qc,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(e,R(Rv(n),`float32`))}}},JC={kernelName:$c,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>H(e,n.shape)}}},YC={kernelName:nl,inputsToSave:[`images`],gradFunc:(e,t,n)=>{let[r]=t,i={dy:e,images:r};return{images:()=>N.runKernel(rl,i,n)}}},XC={kernelName:el,inputsToSave:[`images`],gradFunc:(e,t,n)=>{let[r]=t,i={dy:e,images:r};return{images:()=>N.runKernel(tl,i,n)}}},ZC={kernelName:al,gradFunc:(e,t,n)=>{let{dims:r}=n,i=bo(r,e.shape);return{x:()=>X_(e,i)}}},QC={kernelName:ol,gradFunc:e=>({x:()=>rh(e)})},$C={kernelName:sl,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>Eg(B(e,V(Dh(n,1.5),2)))}}},ew={kernelName:dl,inputsToSave:[`condition`],gradFunc:(e,t)=>{let[n]=t;return{condition:()=>R(rh(n),`float32`),t:()=>V(e,R(n,e.dtype)),e:()=>V(e,R(zg(n),e.dtype))}}},tw={kernelName:fl,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=eg(n,Oh(0)),r=Oh(Sx);return th(t,V(e,Oh(Cx)),V(V(e,r),Bh(R(n,`float32`))))}}}},nw={kernelName:gl,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(e,V(n,G(Oh(1),n)))}}},rw={kernelName:hl,gradFunc:e=>({x:()=>rh(e)})},iw={kernelName:`Sin`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(Fm(R(n,`float32`)),e)}}},aw={kernelName:ml,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(Lm(R(n,`float32`)),e)}}},ow={kernelName:pl,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{begin:i,size:a}=n,o=r.shape,[s,c]=tx(r,i,a),l=[];for(let t=0;t<e.rank;t++)l.push([s[t],o[t]-s[t]-c[t]]);return{x:()=>h_(e,l)}}},sw={kernelName:xl,outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r]=t,{dim:i}=n,a=V(e,r);return{logits:()=>G(a,V(W(a,[i],!0),r))}}},cw={kernelName:_l,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(e,Vp(n))}}},lw={kernelName:yl,gradFunc:(e,t,n)=>{let{blockShape:r,paddings:i}=n;return{x:()=>qp(e,r,i)}}},uw={kernelName:bl,gradFunc:(e,t,n)=>{let{axis:r}=n;return{x:()=>Lp(e,r)}}},dw={kernelName:vl,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,V(Ah(R(n,`float32`)),2))}}},fw={kernelName:Ol,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(e,V(R(n,`float32`),2))}}},pw={kernelName:Dl,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Oh(2);return{a:()=>V(e,V(i,G(n,r))),b:()=>V(e,V(i,G(r,n)))}}},mw={kernelName:Ul,gradFunc:e=>({x:()=>rh(e)})},hw={kernelName:`Sub`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=U(n.shape,r.shape);return{a:()=>{let t=e,r=Zm(n.shape,i);return r.length>0&&(t=W(t,r)),H(t,n.shape)},b:()=>{let t=e,n=Zm(r.shape,i);return n.length>0&&(t=W(t,n)),H(Eg(t),r.shape)}}}},gw={kernelName:`Sum`,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,i=r.shape.slice(),{axis:a}=n;bo(a,r.shape).forEach(e=>{i[e]=1});let o=V(H(e,i),$g(r.shape,`float32`));return{x:()=>o}}},_w={kernelName:`Tan`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>B(e,Mh(Fm(n)))}}},vw={kernelName:Pl,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>V(G(Oh(1),Mh(n)),e)}}},yw={kernelName:Fl,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{reps:i}=n;return{x:()=>{let t=rh(r);if(r.rank===1)for(let n=0;n<i[0];++n)t=z(t,Up(e,[n*r.shape[0]],[r.shape[0]]));else if(r.rank===2)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)t=z(t,Up(e,[n*r.shape[0],a*r.shape[1]],[r.shape[0],r.shape[1]]));else if(r.rank===3)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)for(let o=0;o<i[2];++o)t=z(t,Up(e,[n*r.shape[0],a*r.shape[1],o*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else if(r.rank===4)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)for(let o=0;o<i[2];++o)for(let s=0;s<i[3];++s)t=z(t,Up(e,[n*r.shape[0],a*r.shape[1],o*r.shape[2],s*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));else throw Error(`Gradient for tile operation is not implemented for rank-${r.rank} tensors yet.`);return t}}}},bw={kernelName:Rl,gradFunc:(e,t,n)=>{let{perm:r}=n,i=bh(r);return{x:()=>sy(e,i)}}},xw={kernelName:Bl,gradFunc:(e,t,n)=>{let{axis:r}=n;return{value:()=>Iv(e,r)}}},Sw={kernelName:Vl,inputsToSave:[`segmentIds`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>Cw(e,n)}}};function Cw(e,t){let n=Qh(e,Yg(t,rh(t))),r=ng(t,Oh(0,`int32`)),i=n.rank-r.rank;for(let e=0;e<i;++e)r=Hh(r,e+1);r=Lg(r,$g(n.shape,`bool`));let a=rh(n);return th(r,n,a)}var ww=[mS,hS,gS,_S,vS,yS,bS,xS,SS,CS,wS,TS,OS,jS,MS,NS,PS,FS,IS,LS,RS,zS,VS,BS,WS,GS,KS,qS,JS,YS,WC,XS,ZS,QS,$S,eC,nC,tC,rC,iC,sC,cC,lC,uC,dC,fC,pC,mC,hC,vC,bC,bC,xC,wC,DC,OC,kC,AC,jC,MC,NC,PC,FC,IC,LC,RC,RC,zC,BC,UC,GC,KC,qC,JC,YC,XC,ZC,QC,$C,ew,tw,nw,rw,iw,aw,ow,sw,cw,lw,lw,uw,uw,dw,pw,fw,mw,hw,gw,_w,vw,yw,bw,xw,Sw,{kernelName:Hl,gradFunc:e=>({x:()=>rh(e)})}];for(let e of ww)ru(e);M().prototype.abs=function(){return this.throwIfDisposed(),Uf(this)},M().prototype.acos=function(){return this.throwIfDisposed(),Gf(this)},M().prototype.acosh=function(){return this.throwIfDisposed(),qf(this)},M().prototype.add=function(e){return this.throwIfDisposed(),z(this,e)},M().prototype.all=function(e,t){return this.throwIfDisposed(),Yf(this,e,t)},M().prototype.any=function(e,t){return this.throwIfDisposed(),Zf(this,e,t)},M().prototype.argMax=function(e){return this.throwIfDisposed(),$f(this,e)},M().prototype.argMin=function(e){return this.throwIfDisposed(),tp(this,e)},M().prototype.asScalar=function(){return this.throwIfDisposed(),O(this.size===1,()=>`The array must have only 1 element.`),H(this,[])},M().prototype.asType=function(e){return this.throwIfDisposed(),R(this,e)},M().prototype.as1D=function(){return this.throwIfDisposed(),H(this,[this.size])},M().prototype.as2D=function(e,t){return this.throwIfDisposed(),H(this,[e,t])},M().prototype.as3D=function(e,t,n){return this.throwIfDisposed(),H(this,[e,t,n])},M().prototype.as4D=function(e,t,n,r){return this.throwIfDisposed(),H(this,[e,t,n,r])},M().prototype.as5D=function(e,t,n,r,i){return this.throwIfDisposed(),H(this,[e,t,n,r,i])},M().prototype.asin=function(){return this.throwIfDisposed(),rp(this)},M().prototype.asinh=function(){return this.throwIfDisposed(),ap(this)},M().prototype.atan=function(){return this.throwIfDisposed(),sp(this)},M().prototype.atan2=function(e){return this.throwIfDisposed(),lp(this,e)},M().prototype.atanh=function(){return this.throwIfDisposed(),dp(this)},M().prototype.avgPool=function(e,t,n,r){return this.throwIfDisposed(),Np(this,e,t,n,r)},M().prototype.batchToSpaceND=function(e,t){return this.throwIfDisposed(),qp(this,e,t)},M().prototype.batchNorm=function(e,t,n,r,i){return this.throwIfDisposed(),Xp(this,e,t,n,r,i)},M().prototype.broadcastTo=function(e){return this.throwIfDisposed(),om(this,e)},M().prototype.cast=function(e){return this.throwIfDisposed(),R(this,e)},M().prototype.ceil=function(){return this.throwIfDisposed(),cm(this)},M().prototype.clipByValue=function(e,t){return this.throwIfDisposed(),dm(this,e,t)},M().prototype.concat=function(e,t){return this.throwIfDisposed(),e instanceof Zu&&(e=[e]),Lp([this,...e],t)},M().prototype.conv1d=function(e,t,n,r,i,a){return this.throwIfDisposed(),Cm(this,e,t,n,r,i,a)},M().prototype.conv2dTranspose=function(e,t,n,r,i){return this.throwIfDisposed(),Dm(this,e,t,n,r,i)},M().prototype.conv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),xm(this,e,t,n,r,i,a)},M().prototype.cos=function(){return this.throwIfDisposed(),Fm(this)},M().prototype.cosh=function(){return this.throwIfDisposed(),Lm(this)},M().prototype.cumprod=function(e,t,n){return this.throwIfDisposed(),zm(this,e,t,n)},M().prototype.cumsum=function(e,t,n){return this.throwIfDisposed(),Vm(this,e,t,n)},M().prototype.depthToSpace=function(e,t){return this.throwIfDisposed(),Gm(this,e,t)},M().prototype.depthwiseConv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),qm(this,e,t,n,r,i,a)},M().prototype.dilation2d=function(e,t,n,r,i){return this.throwIfDisposed(),Ym(this,e,t,n,r,i)},M().prototype.divNoNan=function(e){return this.throwIfDisposed(),ah(this,e)},M().prototype.div=function(e){return this.throwIfDisposed(),B(this,e)},M().prototype.dot=function(e){return this.throwIfDisposed(),sh(this,e)},M().prototype.elu=function(){return this.throwIfDisposed(),dh(this)},M().prototype.equal=function(e){return this.throwIfDisposed(),$m(this,e)},M().prototype.erf=function(){return this.throwIfDisposed(),ph(this)},M().prototype.euclideanNorm=function(e,t){return this.throwIfDisposed(),Rh(this,e,t)},M().prototype.exp=function(){return this.throwIfDisposed(),Bh(this)},M().prototype.expandDims=function(e){return this.throwIfDisposed(),Hh(this,e)},M().prototype.expm1=function(){return this.throwIfDisposed(),Wh(this)},M().prototype.fft=function(){return this.throwIfDisposed(),Sv(this)},M().prototype.flatten=function(){return this.throwIfDisposed(),H(this,[this.size])},M().prototype.floor=function(){return this.throwIfDisposed(),Xh(this)},M().prototype.floorDiv=function(e){return this.throwIfDisposed(),zf(this,e)},M().prototype.gather=function(e,t,n){return this.throwIfDisposed(),Qh(this,e,t,n)},M().prototype.greaterEqual=function(e){return this.throwIfDisposed(),ng(this,e)},M().prototype.greater=function(e){return this.throwIfDisposed(),eg(this,e)},M().prototype.ifft=function(){return this.throwIfDisposed(),wv(this)},M().prototype.irfft=function(){return this.throwIfDisposed(),Ev(this)},M().prototype.isFinite=function(){return this.throwIfDisposed(),og(this)},M().prototype.isInf=function(){return this.throwIfDisposed(),cg(this)},M().prototype.isNaN=function(){return this.throwIfDisposed(),ug(this)},M().prototype.leakyRelu=function(e){return this.throwIfDisposed(),fg(this,e)},M().prototype.lessEqual=function(e){return this.throwIfDisposed(),gg(this,e)},M().prototype.less=function(e){return this.throwIfDisposed(),mg(this,e)},M().prototype.localResponseNormalization=function(e,t,n,r){return this.throwIfDisposed(),vg(this,e,t,n,r)},M().prototype.logSigmoid=function(){return this.throwIfDisposed(),Ag(this)},M().prototype.logSoftmax=function(e){return this.throwIfDisposed(),Ng(this,e)},M().prototype.logSumExp=function(e,t){return this.throwIfDisposed(),Fg(this,e,t)},M().prototype.log=function(){return this.throwIfDisposed(),bg(this)},M().prototype.log1p=function(){return this.throwIfDisposed(),Sg(this)},M().prototype.logicalAnd=function(e){return this.throwIfDisposed(),Lg(this,e)},M().prototype.logicalNot=function(){return this.throwIfDisposed(),zg(this)},M().prototype.logicalOr=function(e){return this.throwIfDisposed(),Vg(this,e)},M().prototype.logicalXor=function(e){return this.throwIfDisposed(),Ug(this,e)},M().prototype.matMul=function(e,t,n){return this.throwIfDisposed(),zp(this,e,t,n)},M().prototype.maxPool=function(e,t,n,r){return this.throwIfDisposed(),Gg(this,e,t,n,r)},M().prototype.max=function(e,t){return this.throwIfDisposed(),Ch(this,e,t)},M().prototype.maximum=function(e){return this.throwIfDisposed(),Yg(this,e)},M().prototype.mean=function(e,t){return this.throwIfDisposed(),Zg(this,e,t)},M().prototype.min=function(e,t){return this.throwIfDisposed(),Th(this,e,t)},M().prototype.minimum=function(e){return this.throwIfDisposed(),t_(this,e)},M().prototype.mirrorPad=function(e,t){return this.throwIfDisposed(),r_(this,e,t)},M().prototype.mod=function(e){return this.throwIfDisposed(),a_(this,e)},M().prototype.mul=function(e){return this.throwIfDisposed(),V(this,e)},M().prototype.neg=function(){return this.throwIfDisposed(),Eg(this)},M().prototype.norm=function(e,t,n){return this.throwIfDisposed(),Ih(this,e,t,n)},M().prototype.notEqual=function(e){return this.throwIfDisposed(),l_(this,e)},M().prototype.oneHot=function(e,t=1,n=0){return this.throwIfDisposed(),d_(this,e,t,n)},M().prototype.onesLike=function(){return this.throwIfDisposed(),p_(this)},M().prototype.pad=function(e,t){return this.throwIfDisposed(),h_(this,e,t)},M().prototype.pool=function(e,t,n,r,i,a){return this.throwIfDisposed(),x_(this,e,t,n,r,i,a)},M().prototype.pow=function(e){return this.throwIfDisposed(),Dh(this,e)},M().prototype.prelu=function(e){return this.throwIfDisposed(),C_(this,e)},M().prototype.prod=function(e,t){return this.throwIfDisposed(),T_(this,e,t)},M().prototype.reciprocal=function(){return this.throwIfDisposed(),W_(this)},M().prototype.relu=function(){return this.throwIfDisposed(),K_(this)},M().prototype.relu6=function(){return this.throwIfDisposed(),J_(this)},M().prototype.reshapeAs=function(e){return this.throwIfDisposed(),H(this,e.shape)},M().prototype.reshape=function(e){return this.throwIfDisposed(),H(this,e)},M().prototype.resizeBilinear=function(e,t,n){return this.throwIfDisposed(),ob(this,e,t,n)},M().prototype.resizeNearestNeighbor=function(e,t,n){return this.throwIfDisposed(),cb(this,e,t,n)},M().prototype.reverse=function(e){return this.throwIfDisposed(),X_(this,e)},M().prototype.rfft=function(){return this.throwIfDisposed(),Av(this)},M().prototype.round=function(){return this.throwIfDisposed(),Q_(this)},M().prototype.rsqrt=function(){return this.throwIfDisposed(),ev(this)},M().prototype.selu=function(){return this.throwIfDisposed(),nv(this)},M().prototype.separableConv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),iv(this,e,t,n,r,i,a)},M().prototype.sigmoid=function(){return this.throwIfDisposed(),Vp(this)},M().prototype.sign=function(){return this.throwIfDisposed(),ov(this)},M().prototype.sin=function(){return this.throwIfDisposed(),cv(this)},M().prototype.sinh=function(){return this.throwIfDisposed(),uv(this)},M().prototype.slice=function(e,t){return this.throwIfDisposed(),Up(this,e,t)},M().prototype.softmax=function(e){return this.throwIfDisposed(),bv(this,e)},M().prototype.softplus=function(){return this.throwIfDisposed(),Og(this)},M().prototype.spaceToBatchND=function(e,t){return this.throwIfDisposed(),__(this,e,t)},M().prototype.split=function(e,t){return this.throwIfDisposed(),Ov(this,e,t)},M().prototype.sqrt=function(){return this.throwIfDisposed(),Ah(this)},M().prototype.square=function(){return this.throwIfDisposed(),Mh(this)},M().prototype.squaredDifference=function(e){return this.throwIfDisposed(),Mv(this,e)},M().prototype.squeeze=function(e){return this.throwIfDisposed(),Pv(this,e)},M().prototype.stack=function(e,t){return this.throwIfDisposed(),Iv(e instanceof Zu?[this,e]:[this,...e],t)},M().prototype.step=function(e){return this.throwIfDisposed(),Rv(this,e)},M().prototype.stridedSlice=function(e,t,n,r,i,a,o,s){return this.throwIfDisposed(),Bv(this,e,t,n,r,i,a,o,s)},M().prototype.sub=function(e){return this.throwIfDisposed(),G(this,e)},M().prototype.sum=function(e,t){return this.throwIfDisposed(),W(this,e,t)},M().prototype.tan=function(){return this.throwIfDisposed(),Hv(this)},M().prototype.tanh=function(){return this.throwIfDisposed(),Gp(this)},M().prototype.tile=function(e){return this.throwIfDisposed(),Kh(this,e)},M().prototype.toBool=function(){return this.throwIfDisposed(),R(this,`bool`)},M().prototype.toFloat=function(){return this.throwIfDisposed(),R(this,`float32`)},M().prototype.toInt=function(){return this.throwIfDisposed(),R(this,`int32`)},M().prototype.topk=function(e,t){return this.throwIfDisposed(),Yv(this,e,t)},M().prototype.transpose=function(e){return this.throwIfDisposed(),sy(this,e)},M().prototype.unique=function(e){return this.throwIfDisposed(),$v(this,e)},M().prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),ty(this,e,t)},M().prototype.unstack=function(e){return this.throwIfDisposed(),ry(this,e)},M().prototype.where=function(e,t){return this.throwIfDisposed(),th(e,this,t)},M().prototype.zerosLike=function(){return this.throwIfDisposed(),rh(this)};var Tw=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},Ew=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},q=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},J=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},Dw=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},Ow=class{constructor(e){this.maxEntries=e||100,this.cache=new Map}get(e){let t;return this.cache.has(e)&&(t=this.cache.get(e),this.cache.delete(e),this.cache.set(e,t)),t}put(e,t){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxEntries){let e=this.cache.keys().next().value;this.cache.delete(e)}this.cache.set(e,t)}getMaxEntries(){return this.maxEntries}setMaxEntries(e){if(e<0)throw Error(`The maxEntries of LRU caches must be at least 0, but got ${e}.`);if(this.maxEntries>e)for(let t=0;t<this.maxEntries-e;t++){let e=this.cache.keys().next().value;this.cache.delete(e)}this.maxEntries=e}};function kw(e,t){if(Array.isArray(e)){let n=[];for(let r=0;r<t;r++)n=n.concat(e);return n}{let n=Array(t);return n.fill(e),n}}function Aw(e,t){if(!e)throw new Dw(t)}function jw(e,t){let n=0;for(let r of e)r===t&&n++;return n}function Mw(e){return e.length===1?e[0]:e}function Nw(e){return Array.isArray(e)?e:[e]}function Pw(e){let t=e.replace(/(.)([A-Z][a-z0-9]+)/g,`$1_$2`).replace(/([a-z])([A-Z])/g,`$1_$2`).toLowerCase();return t[0]===`_`?`private`+t:t}function Fw(e){return e.length<=1||e.indexOf(`_`)===-1?e:e.replace(/[_]+(\w|$)/g,(e,t)=>t.toUpperCase())}var Iw={};function Lw(e){if(e==null)return null;let t={};return t.className=e.getClassName(),t.config=e.getConfig(),t}function Rw(e){if(!(typeof e!=`object`||!e)){if(Array.isArray(e))e.forEach(e=>Rw(e));else{let t=Object.keys(e);for(let n of t){let t=e[n];typeof t==`object`&&t&&(!Array.isArray(t)&&t.type===`ndarray`&&typeof t.value==`number`?e[n]=t.value:Rw(t))}}}}function zw(e,t={},n={},r=`object`,i=!1){if(typeof e==`string`){let i=e,a;if(i in n)a=n[i];else if(i in Iw)a=Iw[i];else if(a=t[i],a==null)throw new q(`Unknown ${r}: ${e}. This may be due to one of the following reasons:\n1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return a}{let a=e;if(a.className==null||a.config==null)throw new q(`${r}: Improper config format: ${JSON.stringify(a)}.\n'className' and 'config' must set.`);let o=a.className,s,c;if(o in n?[s,c]=n[o]:o in Iw?[s,c]=Iw.className:o in t&&([s,c]=t[o]),s==null)throw new q(`Unknown ${r}: ${o}. This may be due to one of the following reasons:\n1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(c!=null){let e={};for(let t of Object.keys(Iw))e[t]=Iw[t];for(let t of Object.keys(n))e[t]=n[t];let t=a.config;t.customObjects=e;let r=Object.assign({},Iw);for(let e of Object.keys(n))Iw[e]=n[e];Rw(a.config);let o=c(s,a.config,n,i);return Iw=Object.assign({},r),o}{let e=Object.assign({},Iw);for(let e of Object.keys(n))Iw[e]=n[e];let t=new s(a.config);return Iw=Object.assign({},e),t}}}function Bw(e,t){return e<t?-1:+(e>t)}function Vw(e,t){return-1*Bw(e,t)}function Hw(e){if(e==null)return e;let t=[];for(let n of e)t.indexOf(n)===-1&&t.push(n);return t}function Uw(e){if(e==null)throw new q(`Invalid value in obj: ${JSON.stringify(e)}`);for(let t in e)if(e.hasOwnProperty(t))return!1;return!0}function Ww(e,t,n){if(n!=null&&e.indexOf(n)<0)throw new q(`${n} is not a valid ${t}.  Valid values are ${e} or null/undefined.`)}function Gw(e,t,n=0,r=1/0){return Aw(n>=0),Aw(r>=n),Array.isArray(e)&&e.length>=n&&e.length<=r&&e.every(e=>typeof e===t)}function Kw(e,t){Array.isArray(e)?(O(e.length>0,()=>`${t} is unexpectedly an empty array.`),e.forEach((e,n)=>Kw(e,`element ${n+1} of ${t}`))):O(Number.isInteger(e)&&e>0,()=>`Expected ${t} to be a positive integer, but got ${qw(e)}.`)}function qw(e){return e===null?`null`:Array.isArray(e)?`[`+e.map(e=>qw(e)).join(`,`)+`]`:typeof e==`string`?`"${e}"`:`${e}`}function Jw(e,t,n){let r=n==null?Du():n(),i;return(...a)=>{let o=n==null?Du():n();return o-r<t?i:(r=o,i=e(...a),i)}}function Yw(e){return e===`relu`?`relu`:e===`linear`?`linear`:e===`elu`?`elu`:null}var Xw=0;function Zw(){return Xw++}var Qw={};function $w(e=``){return e in Qw||(Qw[e]=0),Qw[e]+=1,e+Qw[e].toString()}var eT=[`channelsFirst`,`channelsLast`],tT=[`nearest`,`bilinear`],nT=[`valid`,`same`,`causal`],rT=[`max`,`avg`],iT=[`sum`,`mul`,`concat`,`ave`],aT=new Map;function oT(e){Ww(eT,`DataFormat`,e)}function sT(e){Ww(tT,`InterpolationFormat`,e)}function cT(e){Ww(nT,`PaddingMode`,e)}function lT(e){Ww(rT,`PoolMode`,e)}var uT=[],dT=`/`;function fT(e,t){uT.push(e);try{let e=t();return uT.pop(),e}catch(e){throw uT.pop(),e}}function pT(){return uT.length===0?``:uT.join(dT)+dT}function mT(e){if(!_T(e))throw Error(`Not a valid tensor name: '`+e+`'`);return pT()+e}function hT(e){if(!_T(e))throw Error(`Not a valid tensor name: '`+e+`'`);aT.has(e)||aT.set(e,0);let t=aT.get(e);if(aT.set(e,aT.get(e)+1),t>0){let n=`${e}_${t}`;return aT.set(n,1),n}return e}var gT=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function _T(e){return!!e.match(gT)}function vT(e){return e===parseInt(e.toString(),10)}function yT(e,t,n){t??=0,n??=e.length;let r=1;for(let i=t;i<n;++i)r*=e[i];return r}function bT(e){if(e.length===0)return NaN;let t=1/0;for(let n=0;n<e.length;n++){let r=e[n];r<t&&(t=r)}return t}function xT(e){if(e.length===0)return NaN;let t=-1/0;for(let n=0;n<e.length;n++){let r=e[n];r>t&&(t=r)}return t}function ST(e,t){if(t<e)throw new q(`end (${t}) < begin (${e}) is forbidden.`);let n=[];for(let r=e;r<t;++r)n.push(r);return n}var CT;function wT(){return CT??=Bd().epsilon(),CT}function TT(){return`channelsLast`}function ET(e,t){return R(e,t)}function DT(e,t=-1){let n=e.shape.slice();return t<0&&(t=n.length+t+1),n.splice(t,0,1),H(e,n)}function OT(e,t){return I(()=>{if(e.shape.length!==2)throw new q(`repeat() expects a rank-2 tensor, but received a rank-${e.shape.length} tensor.`);return IT(DT(e,1),[1,t,1])})}function kT(e){return H(e,[yT(e.shape)])}function AT(e){if(e.rank<=1)throw new q(`batchFlatten requires a minimum rank of 2. Got rank: ${e.rank}.`);return H(e,[e.shape[0],yT(e.shape,1)])}function jT(e,t,n){return I(()=>{switch(e.rank){case 1:return fv(e,t,n);case 2:return mv(e,[t,0],[n,e.shape[1]]);case 3:return gv(e,[t,0,0],[n,e.shape[1],e.shape[2]]);case 4:return vv(e,[t,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3]]);case 5:return Up(e,[t,0,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3],e.shape[4]]);case 6:return Up(e,[t,0,0,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3],e.shape[4],e.shape[5]]);default:throw new q(`sliceAlongFirstAxis() received an unsupported tensor rank: ${e.rank}`)}})}function MT(e,t,n){return I(()=>{switch(e.rank){case 1:return fv(e,t,n);case 2:return mv(e,[0,t],[e.shape[0],n]);case 3:return gv(e,[0,0,t],[e.shape[0],e.shape[1],n]);case 4:return vv(e,[0,0,0,t],[e.shape[0],e.shape[1],e.shape[2],n]);default:throw new q(`sliceAlongLastAxis() received an unsupported tensor rank: ${e.rank}`)}})}function NT(e,t,n,r){return I(()=>{switch(e.rank){case 1:return fv(e,t,n);case 2:switch(r){case 1:return jT(e,t,n);case 2:return MT(e,t,n);default:throw new q(`The axis is not within the rank of the tensor ${r}`)}case 3:switch(r){case 1:return jT(e,t,n);case 2:return gv(e,[0,t,0],[e.shape[0],n,e.shape[2]]);case 3:return MT(e,t,n);default:throw new q(`The axis is not within the rank of the tensor ${r}`)}case 4:switch(r){case 1:return jT(e,t,n);case 2:return vv(e,[0,t,0,0],[e.shape[0],n,e.shape[2],e.shape[3]]);case 3:return vv(e,[0,0,t,0],[e.shape[0],e.shape[1],n,e.shape[3]]);case 4:return MT(e,t,n);default:throw new q(`The axis is not within the rank of the tensor ${r}`)}default:throw new q(`sliceAlongLastAxis() received an unsupported tensor rank: ${e.rank}`)}})}function PT(e,t=-1){let n;return t<0&&(n=e[0].rank,t=n===0?0:n),t===e[0].rank&&(t=-1),Lp(e,t)}function FT(e,t){switch(e.rank){case 1:return pm([e,t]);case 2:return hm([e,t],0);case 3:return _m([e,t],0);case 4:return ym([e,t],0);default:throw new q(`concatAlongFirstAxis() received an unsupported tensor rank: ${e.rank}`)}}function IT(e,t){if(Array.isArray(t)||(t=[t]),e.rank!==t.length)throw new q(`The length of input n (${t.length}) does not match the number of dimensions in input x (${e.rank})`);return Kh(e,t)}function LT(e,t=0,n=1,r,i){return L_(e,t,n,r,i)}function RT(e,t,n,r){if(e.rank<2||t.rank<2)throw new J(`dot requires both inputs to be rank >= 2 but got x shape = ${e.shape} and y shape = ${t.shape}`);if(t.rank>=3&&e.shape.slice(-1)[0]!==t.shape.slice(-2)[0])throw new J(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${e.shape} and  y shape = ${t.shape}`);if(e.rank===2&&t.rank===2)return wy({a:e,b:t,transposeA:!1,transposeB:!1,bias:r?VT(e.rank,r,TT()):null,activation:n});{let i=e.shape.slice(),a=i.pop();e=H(e,[-1,a]);let o=t.shape.slice(),s=o.pop(),c=o.pop(),l=[...o,s],u=Array.from({length:t.rank},(e,n)=>n===0?t.rank-2:n<=t.rank-2?n-1:n);t=H(sy(t,u),[c,-1]);let d=[...i,...l];return H(wy({a:e,b:t,transposeA:!1,transposeB:!1,bias:r?VT(e.rank,r,TT()):null,activation:n}),d)}}function zT(e,t,n){return I(()=>(t=Array.isArray(t)?Uv(t,`int32`):R(t,`int32`),Qh(e,t,n)))}function BT(e){return V(e,e)}function VT(e,t,n){let r=t.shape;if(t.rank!==1&&t.rank!==e)throw new q(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${e}`);if(e===5){if(n===`channelsFirst`)return r.length===1?H(t,[1,r[0],1,1,1]):H(t,[1,r[3],r[0],r[1],r[2]]);if(n===`channelsLast`)return r.length===1?H(t,[1,1,1,1,r[0]]):H(t,[1].concat(r))}else if(e===4){if(n===`channelsFirst`)return r.length===1?H(t,[1,r[0],1,1]):H(t,[1,r[2],r[0],r[1]]);if(n===`channelsLast`)return r.length===1?H(t,[1,1,1,r[0]]):H(t,[1].concat(r))}else if(e===3){if(n===`channelsFirst`)return r.length===1?H(t,[1,r[0],1]):H(t,[1,r[1],r[0]]);if(n===`channelsLast`)return r.length===1?H(t,[1,1,r[0]]):H(t,[1].concat(r))}else if(e<3)return t;throw new q(`Unsupported input rank by biasAdd: ${t.rank}`)}function HT(e,t,n){return I(()=>(n??=TT(),oT(n),z(e,VT(e.rank,t,n))))}function UT(e,t=1){if(t!==1)throw new J(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return dh(e)}function WT(e){return I(()=>B(e,z(Uf(e),1)))}function GT(e,t,n,r){return I(()=>uy(e,t,n,r))}function KT(e){return I(()=>dm(z(.5,V(.2,e)),0,1))}function qT(e,t,n=!1){return n?e():t()}var JT=[`fanIn`,`fanOut`,`fanAvg`],YT=[`normal`,`uniform`,`truncatedNormal`];function XT(e){Ww(JT,`FanMode`,e)}function ZT(e){Ww(YT,`Distribution`,e)}var QT=class extends Tb{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}},$T=class extends QT{apply(e,t){return Qg(e,t)}};$T.className=`Zeros`,K($T);var eE=class extends QT{apply(e,t){return $g(e,t)}};eE.className=`Ones`,K(eE);var tE=class extends QT{constructor(e){if(super(),typeof e!=`object`)throw new q(`Expected argument of type ConstantConfig but got ${e}`);if(e.value===void 0)throw new q(`config must have value set but got ${e}`);this.value=e.value}apply(e,t){return I(()=>V(Oh(this.value),$g(e,t)))}getConfig(){return{value:this.value}}};tE.className=`Constant`,K(tE);var nE=class extends QT{constructor(e){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=e.minval||this.DEFAULT_MINVAL,this.maxval=e.maxval||this.DEFAULT_MAXVAL,this.seed=e.seed}apply(e,t){return z_(e,this.minval,this.maxval,t,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}};nE.className=`RandomUniform`,K(nE);var rE=class extends QT{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new J(`randomNormal does not support dType ${t}.`);return LT(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}};rE.className=`RandomNormal`,K(rE);var iE=class extends QT{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new J(`truncatedNormal does not support dType ${t}.`);return Zv(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}};iE.className=`TruncatedNormal`,K(iE);var aE=class extends QT{constructor(e){super(),this.gain=e.gain==null?1:e.gain}apply(e,t){return I(()=>{if(e.length!==2||e[0]!==e[1])throw new q(`Identity matrix initializer can only be used for 2D square matrices.`);return V(this.gain,Jh(e[0]))})}getConfig(){return{gain:this.gain}}};aE.className=`Identity`,K(aE);function oE(e,t=`channelsLast`){let n,r;if(oT(t),e.length===2)n=e[0],r=e[1];else if([3,4,5].indexOf(e.length)!==-1){if(t===`channelsFirst`){let t=yT(e,2);n=e[1]*t,r=e[0]*t}else if(t===`channelsLast`){let t=yT(e,0,e.length-2);n=e[e.length-2]*t,r=e[e.length-1]*t}}else{let t=yT(e);n=Math.sqrt(t),r=Math.sqrt(t)}return[n,r]}var sE=class extends QT{constructor(e){if(super(),e.scale<0)throw new q(`scale must be a positive float. Got: ${e.scale}`);this.scale=e.scale==null?1:e.scale,this.mode=e.mode==null?`fanIn`:e.mode,XT(this.mode),this.distribution=e.distribution==null?`normal`:e.distribution,ZT(this.distribution),this.seed=e.seed}apply(e,t){let n=oE(e),r=n[0],i=n[1],a=this.scale;if(this.mode===`fanIn`?a/=Math.max(1,r):this.mode===`fanOut`?a/=Math.max(1,i):a/=Math.max(1,(r+i)/2),this.distribution===`normal`){let n=Math.sqrt(a);if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new J(`${this.getClassName()} does not support dType ${t}.`);return Zv(e,0,n,t,this.seed)}{let n=Math.sqrt(3*a);return z_(e,-n,n,t,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}};sE.className=`VarianceScaling`,K(sE);var cE=class extends sE{constructor(e){super({scale:1,mode:`fanAvg`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return sE.className}};cE.className=`GlorotUniform`,K(cE);var lE=class extends sE{constructor(e){super({scale:1,mode:`fanAvg`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return sE.className}};lE.className=`GlorotNormal`,K(lE);var uE=class extends sE{constructor(e){super({scale:2,mode:`fanIn`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return sE.className}};uE.className=`HeNormal`,K(uE);var dE=class extends sE{constructor(e){super({scale:2,mode:`fanIn`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return sE.className}};dE.className=`HeUniform`,K(dE);var fE=class extends sE{constructor(e){super({scale:1,mode:`fanIn`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return sE.className}};fE.className=`LeCunNormal`,K(fE);var pE=class extends sE{constructor(e){super({scale:1,mode:`fanIn`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return sE.className}};pE.className=`LeCunUniform`,K(pE);var mE=class extends QT{constructor(e){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=e.gain==null?this.DEFAULT_GAIN:e.gain,this.seed=e.seed}apply(e,t){return I(()=>{if(e.length<2)throw new J(`Shape must be at least 2D.`);if(t!==`int32`&&t!==`float32`&&t!==void 0)throw TypeError(`Unsupported data type ${t}.`);t=t;let n=k(e.slice(0,-1)),r=e[e.length-1],i=n*r;i>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${i}) elements: Slowness may result.`);let a=LT([Math.max(r,n),Math.min(r,n)],0,1,t,this.seed),o=Sb.qr(a,!1),s=o[0],c=o[1].flatten().stridedSlice([0],[Math.min(r,n)*Math.min(r,n)],[Math.min(r,n)+1]);return s=V(s,c.sign()),n<r&&(s=s.transpose()),V(Oh(this.gain),s.reshape(e))})}getConfig(){return{gain:this.gain,seed:this.seed}}};mE.className=`Orthogonal`,K(mE);var hE={constant:`Constant`,glorotNormal:`GlorotNormal`,glorotUniform:`GlorotUniform`,heNormal:`HeNormal`,heUniform:`HeUniform`,identity:`Identity`,leCunNormal:`LeCunNormal`,leCunUniform:`LeCunUniform`,ones:`Ones`,orthogonal:`Orthogonal`,randomNormal:`RandomNormal`,randomUniform:`RandomUniform`,truncatedNormal:`TruncatedNormal`,varianceScaling:`VarianceScaling`,zeros:`Zeros`};function gE(e,t={}){return zw(e,Eb.getMap().classNameMap,t,`initializer`)}function _E(e){return Lw(e)}function vE(e){if(typeof e==`string`){let t=e in hE?hE[e]:e;if(t===`GlorotNormal`)return new lE;if(t===`GlorotUniform`)return new cE;if(t===`HeNormal`)return new uE;if(t===`HeUniform`)return new dE;if(t===`LeCunNormal`)return new fE;if(t===`LeCunUniform`)return new pE;{let e={};return e.className=t,e.config={},gE(e)}}return e instanceof QT?e:gE(e)}function yE(e){return Array.isArray(e)&&Array.isArray(e[0])}function bE(e){return e.length===0?[]:Array.isArray(e[0])?e:[e]}function Y(e){let t;if(Array.isArray(e)){if(e.length!==1)throw new q(`Expected Tensor length to be 1; got ${e.length}`);t=e[0]}else t=e;return t}function xE(e){if(Array.isArray(e)&&Array.isArray(e[0])){if(e.length===1)return e=e,e[0];throw new q(`Expected exactly 1 Shape; got ${e.length}`)}return e}function SE(e){let t=0;for(let n of e)n.shape.length===0?t+=1:t+=n.shape.reduce((e,t)=>e*t);return t}var CE=`Variable`,wE=class{constructor(e,t=`float32`,n=CE,r=!0,i=null){this.dtype=t??`float32`,this.shape=e.shape,this.id=Zw(),n??=CE,this.originalName=mT(n),this.name=hT(this.originalName),this.trainable_=r,this.constraint=i,this.val=iy(e,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(e){return this.assertNotDisposed(),TE(this.val,e),this.val.id!==e.id&&(this.val.assign(e),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(e){this.trainable_=e,this.val.trainable=e}};function TE(e,t){if(e.shape.toString()!==t.shape.toString())throw Error(`Shape mismatch: `+JSON.stringify(e.shape)+` vs. `+JSON.stringify(t.shape))}function EE(e){return e.map(e=>e.read())}function DE(e){e.forEach(e=>{e[0].write(e[1])})}var OE=class{constructor(e){this.dtype=e.dtype,this.shape=e.shape,this.ndim=e.shape==null?e.ndim:e.shape.length,this.maxNDim=e.maxNDim,this.minNDim=e.minNDim,this.axes=e.axes||{}}},kE=class{constructor(e,t,n,r,i,a,o){this.dtype=e,this.shape=t,this.sourceLayer=n,this.inputs=r,this.callArgs=i,this.outputTensorIndex=o,this.id=Zw(),a!=null&&(this.originalName=mT(a),this.name=hT(this.originalName)),this.rank=t.length}},AE=0,jE=class{constructor(e,t){this.callArgs=t,this.id=AE++,this.outboundLayer=e.outboundLayer,this.inboundLayers=e.inboundLayers,this.nodeIndices=e.nodeIndices,this.tensorIndices=e.tensorIndices,this.inputTensors=e.inputTensors,this.outputTensors=e.outputTensors,this.inputMasks=e.inputMasks,this.outputMasks=e.outputMasks,this.inputShapes=e.inputShapes,this.outputShapes=e.outputShapes;for(let t of e.inboundLayers)t?.outboundNodes.push(this);e.outboundLayer.inboundNodes.push(this)}getConfig(){let e=[];for(let t of this.inboundLayers)t==null?e.push(null):e.push(t.name);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:e,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}},ME=0,NE=class extends Tb{constructor(e={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=ME++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let t=e.name;if(!t){let e=this.getClassName();t=Pw(e)+`_`+$w(e)}if(this.name=t,this.trainable_=e.trainable==null||e.trainable,e.inputShape!=null||e.batchInputShape!=null){let t;if(e.batchInputShape!=null)t=e.batchInputShape;else if(e.inputShape!=null){let n=null;e.batchSize!=null&&(n=e.batchSize),t=[n].concat(e.inputShape)}this.batchInputShape=t;let n=e.dtype;n??=e.inputDType,n??=`float32`,this.dtype=n}this.initialWeights=e.weights==null?null:e.weights,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(e,t){return e.name+`_ib-`+t.toString()}getNodeAtIndex(e,t){if(this.inboundNodes.length===0)throw new Ew(`The layer has never been called and thus has no defined ${t}.`);if(this.inboundNodes.length<=e)throw new q(`Asked to get ${t} at node ${e}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[e]}getInputAt(e){return Mw(this.getNodeAtIndex(e,`input`).inputTensors)}getOutputAt(e){return Mw(this.getNodeAtIndex(e,`output`).outputTensors)}get input(){if(this.inboundNodes.length>1)throw new Tw(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new Tw(`Layer ${this.name} is not connected, no input to return.`);return Mw(this.getNodeAtIndex(0,`input`).inputTensors)}get output(){if(this.inboundNodes.length===0)throw new Tw(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new Tw(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return Mw(this.getNodeAtIndex(0,`output`).outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(e=>e())}get updates(){return this._updates}get built(){return this._built}set built(e){this._built=e}get trainable(){return this.trainable_}set trainable(e){this._trainableWeights.forEach(t=>t.trainable=e),this.trainable_=e}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(e=>e.trainable):[]}set trainableWeights(e){this._trainableWeights=e}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(e=>!e.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(e){this._nonTrainableWeights=e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw Error(`Cannot call the resetStates() method of a non-stateful Layer object.`)}assertInputCompatibility(e){let t=Nw(e);if(this.inputSpec==null||this.inputSpec.length===0)return;let n=Nw(this.inputSpec);if(t.length!==n.length)throw new q(`Layer ${this.name} expects ${n.length} inputs, but it received ${t.length} input tensors. Input received: ${e}`);for(let e=0;e<t.length;e++){let r=t[e],i=n[e];if(i==null)continue;let a=r.rank;if(i.ndim!=null&&a!==i.ndim)throw new q(`Input ${e} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new q(`Input ${e} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new q(`Input ${e} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&r.dtype!==i.dtype)throw new q(`Input ${e} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${r.dtype}.`);if(i.axes){let t=r.shape;for(let n in i.axes){let r=Number(n),a=i.axes[n],o=r>=0?t[r]:t[t.length+r];if(a!=null&&[a,null].indexOf(o)===-1)throw new q(`Input ${e} is incompatible with layer ${this.name}: expected axis ${r} of input shape to have value ${a} but got shape ${t}.`)}}if(i.shape!=null)for(let t=0;t<i.shape.length;++t){let n=i.shape[t],a=r.shape[t];if(n!=null&&a!=null&&n!==a)throw new q(`Input ${e} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${r.shape}.`)}}}call(e,t){return e}invokeCallHook(e,t){this._callHook!=null&&this._callHook(e,t)}setCallHook(e){this._callHook=e}clearCallHook(){this._callHook=null}apply(e,t){t||={},this.assertNotDisposed();let n=Nw(e),r=LE(e),i=RE(e);if(r===i)throw new q(`Arguments to apply() must be all SymbolicTensors or all Tensors`);return fT(this.name,()=>{if(!this.built){this.assertInputCompatibility(e);let t=[];for(let n of Nw(e))t.push(n.shape);this.build(Mw(t)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&i&&(this._refCount=1)}if(this.assertInputCompatibility(e),i){let r=this.call(e,t);this.supportsMasking&&this.setMaskMetadata(e,r);let i=Nw(r),a=[];for(let e of i)n.indexOf(e)!==-1&&(e=e.clone()),a.push(e);if(r=Mw(a),this.activityRegularizer!=null)throw new J(`Layer invocation in the presence of activity regularizer(s) is not supported yet.`);return r}{let n=PE(e),r=this.computeOutputShape(n),i,a=FE(e);if(this.warnOnIncompatibleInputShape(Array.isArray(e)?n[0]:n),i=r!=null&&r.length>0&&Array.isArray(r[0])?r.map((n,r)=>new kE(a,n,this,Nw(e),t,this.name,r)):new kE(a,r,this,Nw(e),t,this.name),this.addInboundNode(e,i,null,null,n,r,t),this._refCount++,this.activityRegularizer!=null)throw new J(`Layer invocation in the presence of activity regularizer(s) is not supported yet.`);return i}})}warnOnIncompatibleInputShape(e){if(this.batchInputShape!=null){if(e.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(e)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let t=!1;this.batchInputShape.forEach((n,r)=>{n!=null&&e[r]!=null&&e[r]!==n&&(t=!0)}),t&&console.warn(`The shape of the input tensor (${JSON.stringify(e)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new Tw(`The layer ${this.name} has never been called and thus has no defined output shape.`);let e=[];for(let t of this.inboundNodes){let n=JSON.stringify(t.outputShapes);e.indexOf(n)===-1&&e.push(n)}if(e.length===1){let e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}throw new Tw(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new Ew(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return SE(this.weights)}build(e){this.built=!0}getWeights(e=!1){return EE(e?this.trainableWeights:this.weights)}setWeights(e){I(()=>{let t=this.weights;if(t.length!==e.length)throw new q(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${e.length}, but the layer was expecting ${t.length} weights. Provided weights: ${e}...`);if(t.length===0)return;let n=[],r=EE(t);for(let i=0;i<r.length;++i){let a=r[i],o=t[i],s=e[i];if(!mo(a.shape,s.shape))throw new q(`Layer weight shape ${a.shape} not compatible with provided weight shape ${s.shape}`);n.push([o,s])}DE(n)})}addWeight(e,t,n,r,i,a,o,s){if(this._addedWeightNames.indexOf(e)!==-1)throw new q(`Duplicate weight name ${e} for layer ${this.name}`);this._addedWeightNames.push(e),n??=`float32`,this.fastWeightInitDuringBuild&&(r=s==null?vE(`zeros`):s());let c=r.apply(t,n),l=new wE(c,n,e,a,o);return c.dispose(),i!=null&&this.addLoss(()=>i.apply(l.read())),a??=!0,a?this._trainableWeights.push(l):this._nonTrainableWeights.push(l),l}setFastWeightInitDuringBuild(e){this.fastWeightInitDuringBuild=e}addLoss(e){e==null||Array.isArray(e)&&e.length===0||(e=Nw(e),this._losses!==void 0&&this._losses!==null&&this.losses.push(...e))}computeOutputShape(e){return e}computeMask(e,t){if(!this.supportsMasking){if(t!=null){if(Array.isArray(t))t.forEach(e=>{if(e!=null)throw TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)}return null}return t}setMaskMetadata(e,t,n){if(!this.supportsMasking)return;let r=this.computeMask(e,n),i=Nw(t),a=Nw(r);if(i.length!==a.length)throw Error(`${this.name} outputs ${i.length} tensors but ${i.length} masks for those tensors`);for(let e=0;e<i.length;e++)i[e].kerasMask=a[e]}addInboundNode(e,t,n,r,i,a,o=null){let s=Nw(e);t=Nw(t),n=Nw(n),r=Nw(r),i=bE(i),a=bE(a);let c=[],l=[],u=[];for(let e of s)c.push(e.sourceLayer),l.push(e.nodeIndex),u.push(e.tensorIndex);new jE({outboundLayer:this,inboundLayers:c,nodeIndices:l,tensorIndices:u,inputTensors:s,outputTensors:t,inputMasks:n,outputMasks:r,inputShapes:i,outputShapes:a},o);for(let e=0;e<t.length;e++)t[e].sourceLayer=this,t[e].nodeIndex=this.inboundNodes.length-1,t[e].tensorIndex=e}getConfig(){let e={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(e.batchInputShape=this.batchInputShape),this.dtype!=null&&(e.dtype=this.dtype),e}disposeWeights(){return this.weights.forEach(e=>e.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let e=0;return--this._refCount===0&&(e=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:e}}};function PE(e){e=Nw(e);let t=[];for(let n of e)t.push(n.shape);return Mw(t)}function FE(e){return`float32`}function IE(e,t,n){if((t==null||n!=null&&n>0)&&(t=e.sourceLayer,n=e.nodeIndex),t.inboundNodes.length===0)return[e];{let e=t.inboundNodes[n];if(e.inboundLayers.length===0)return e.inputTensors;{let t=[];for(let n=0;n<e.inboundLayers.length;n++){let r=e.inputTensors[n],i=e.inboundLayers[n],a=e.nodeIndices[n],o=IE(r,i,a);for(let e of o)t.indexOf(e)===-1&&t.push(e)}return t}}}function LE(e){let t=!0;for(let n of Nw(e))if(!(n instanceof kE)){t=!1;break}return t}function RE(e){let t=!0;for(let n of Nw(e))if(n instanceof kE){t=!1;break}return t}var zE=class extends NE{constructor(e){if(super({dtype:e.dtype,name:e.name==null?$w(`input`).toString():e.name}),e.batchSize??=null,e.sparse??=!1,this.trainable=!1,this.built=!0,this.sparse=e.sparse,e.inputShape!=null&&e.batchInputShape!=null)throw new q(`Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.`);let t=e.batchInputShape;if(t==null){if(e.inputShape==null)throw new q("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");t=[e.batchSize].concat(e.inputShape)}else if(e.batchSize!=null)throw new q(`Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.`);let n=e.dtype||`float32`;this.batchInputShape=t,this.dtype=n,this.inputSpec=[{shape:t}];let r=new kE(this.dtype,this.batchInputShape,this,[],{},this.name);r.nodeIndex=0,r.tensorIndex=0,new jE({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[r],outputTensors:[r],inputMasks:[null],outputMasks:[null],inputShapes:[t],outputShapes:[t]})}apply(e,t){throw new q(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}};zE.className=`InputLayer`,K(zE);function BE(e){if(e.batchShape==null&&e.shape==null)throw Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(e.batchShape!=null&&e.shape!=null)throw new q("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=e.batchShape;e.shape!=null&&t==null&&(t=[null].concat(e.shape));let n=e.dtype;return n??=`float32`,new zE({batchInputShape:t,name:e.name,dtype:n,sparse:e.sparse}).inboundNodes[0].outputTensors[0]}function VE(e,t){if(e.dtype==null||e.dtype===t.dtype)return t;try{return R(t,e.dtype)}catch{throw new q(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${e.name}' (${e.dtype}).`)}}var HE=class e{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof e)for(let e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(let e of t)this.add(e.key,e.value)}}add(e,t,n){if(this.id2Value[e.id]==null)this.id2Value[e.id]=VE(e,t),this.name2Id[e.name]=e.id,n!=null&&(this.id2Mask[e.id]=n);else throw new q(`Duplicate key: name=${e.name}, id=${e.id}`);return this}addFeed(e){this.add(e.key,e.value)}hasKey(e){return this.id2Value[e.id]!=null}names(){return Object.keys(this.name2Id)}getValue(e){if(e instanceof kE){if(this.id2Value[e.id]==null)throw new q(`Nonexistent key: ${e.name}`);return this.id2Value[e.id]}{let t=this.name2Id[e];if(t==null)throw new q(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Value[t]}}getMask(e){if(e instanceof kE){if(this.id2Value[e.id]==null)throw new q(`Nonexistent key: ${e.name}`);return this.id2Mask[e.id]}{let t=this.name2Id[e];if(t==null)throw new q(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Mask[t]}}disposeMasks(){this.id2Mask!=null&&L(this.id2Mask)}},UE=new Ow,WE=new Ow;function GE(e){UE?.setMaxEntries(e),WE?.setMaxEntries(e)}function KE(e,t,n,r){let i=n!=null&&n.training,a=Array.isArray(e),o=a?e:[e],s=o.map(e=>e.name),c=[],l=t.names();for(let e of s)l.indexOf(e)===-1?c.push(null):c.push(t.getValue(e));r!=null&&(r.maxNumTensors=-1/0,r.minNumTensors=1/0);let u=s.join(`,`)+`|`+t.names().sort().join(`,`),d=UE.get(u),f;if(d==null){let e=qE(o,t);d=e.sorted,f=e.recipientCounts,UE.put(u,d),WE.put(u,f)}f={},i||Object.assign(f,WE.get(u));let p=new HE(t);for(let e=0;e<d.length;++e){if(r!=null){let e=Ld().numTensors;e>r.maxNumTensors&&(r.maxNumTensors=e),e<r.minNumTensors&&(r.minNumTensors=e)}let a=d[e],o=a.sourceLayer;if(o instanceof zE)continue;let l=[],u=[],m=[],h=!1;for(let e of a.inputs){let n=p.getValue(e),r=p.getMask(e);l.push(n),u.push(r),r!=null&&(h=!0),i||(f[e.name]--,f[e.name]===0&&!t.hasKey(e)&&s.indexOf(e.name)===-1&&!n.isDisposed&&e.sourceLayer.stateful!==!0&&m.push(n))}h&&(n||={},n.mask=u[0]);let g=Nw(o.apply(l,n)),_=null;o.supportsMasking&&(_=o.computeMask(l,u));let v=XE(a),y=Array.isArray(v)?v:[v];for(let e=0;e<y.length;++e){p.hasKey(y[e])||p.add(y[e],g[e],Array.isArray(_)?_[0]:_);let t=s.indexOf(y[e].name);t!==-1&&(c[t]=g[e])}i||L(m)}return p.disposeMasks(),a?c:c[0]}function qE(e,t){O(e!=null&&e.length>0,()=>`Expected at least one fetch, got none`);let n=[],r={};if(e.length===1){let i=YE(e[0],t);n=i.sorted,r=i.recipientMap}else{let i=new Set;for(let a of e){let{sorted:e,recipientMap:o}=YE(a,t);for(let t of e)i.has(t.name)||(n.push(t),i.add(t.name));for(let e in o)r[e]??(r[e]=new Set),o[e].forEach(t=>r[e].add(t))}}return{sorted:n,recipientCounts:JE(r)}}function JE(e){let t={};for(let n in e)t[n]=e[n].size;return t}function YE(e,t){let n=new Set,r=[],i={};for(let e of t.names())n.add(e);let a=[],o=[];for(a.push(e);a.length>0;){let e=a[a.length-1];if(n.has(e.name)){a.pop();continue}let t=o[o.length-1]===a.length-1;if(e.inputs.length===0||t)a.pop(),r.push(e),n.add(e.name),t&&o.pop();else{o.push(a.length-1);for(let t of e.inputs)i[t.name]??(i[t.name]=new Set),i[t.name].add(e.name),!n.has(t.name)&&a.push(t)}}return{sorted:r,recipientMap:i}}function XE(e){let t;if(e.sourceLayer.inboundNodes.length===1)t=e.sourceLayer.output;else{let n=null;for(let t=0;t<e.sourceLayer.inboundNodes.length;++t)for(let r of e.sourceLayer.inboundNodes[t].outputTensors)if(r.id===e.id){n=t;break}t=e.sourceLayer.getOutputAt(n)}return t}j().registerFlag(`TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES`,()=>100,GE);function ZE(e,t){return I(()=>Ah(W(V(e,e),t,!0)))}var QE=class extends Tb{getConfig(){return{}}},$E=class extends QE{constructor(e){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=e.maxValue==null?this.defaultMaxValue:e.maxValue,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return I(()=>{let t=ZE(e,this.axis);return V(e,B(dm(t,0,this.maxValue),z(wT(),t)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}};$E.className=`MaxNorm`,K($E);var eD=class extends QE{constructor(e){super(),this.defaultAxis=0,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return I(()=>B(e,z(wT(),ZE(e,this.axis))))}getConfig(){return{axis:this.axis}}};eD.className=`UnitNorm`,K(eD);var tD=class extends QE{apply(e){return K_(e)}};tD.className=`NonNeg`,K(tD);var nD=class extends QE{constructor(e){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=e.minValue==null?this.defaultMinValue:e.minValue,this.maxValue=e.maxValue==null?this.defaultMaxValue:e.maxValue,this.rate=e.rate==null?this.defaultRate:e.rate,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return I(()=>{let t=ZE(e,this.axis);return V(e,B(z(V(this.rate,dm(t,this.minValue,this.maxValue)),V(1-this.rate,t)),z(wT(),t)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}};nD.className=`MinMaxNorm`,K(nD);var rD={maxNorm:`MaxNorm`,minMaxNorm:`MinMaxNorm`,nonNeg:`NonNeg`,unitNorm:`UnitNorm`};function iD(e){return Lw(e)}function aD(e,t={}){return zw(e,Eb.getMap().classNameMap,t,`constraint`)}function oD(e){return e==null?null:typeof e==`string`?aD({className:e in rD?rD[e]:e,config:{}}):e instanceof QE?e:aD(e)}async function sD(e){if(e==null)return;let t=[],n=[],r=[];for(let i in e){let a=e[i];if(typeof a!=`number`){let e=a;t.push(e.data()),n.push(i),r.push(e)}}if(t.length>0){let i=await Promise.all(t);for(let t=0;t<i.length;++t)e[n[t]]=i[t][0];L(r)}}function cD(e){if(e!=null)for(let t in e){let n=e[t];typeof n!=`number`&&n.dispose()}}var lD;(function(e){e[e.SILENT=0]=`SILENT`,e[e.VERBOSE=1]=`VERBOSE`})(lD||={});var uD=class{constructor(){this.validationData=null}setParams(e){this.params=e}async onEpochBegin(e,t){}async onEpochEnd(e,t){}async onBatchBegin(e,t){}async onBatchEnd(e,t){}async onTrainBegin(e){}async onTrainEnd(e){}setModel(e){}},dD=class{constructor(e,t=10){e??=[],this.callbacks=e,this.queueLength=t}append(e){this.callbacks.push(e)}setParams(e){for(let t of this.callbacks)t.setParams(e)}setModel(e){for(let t of this.callbacks)t.setModel(e)}async onEpochBegin(e,t){t??={};for(let n of this.callbacks)await n.onEpochBegin(e,t)}async onEpochEnd(e,t){t??={};for(let n of this.callbacks)await n.onEpochEnd(e,t)}async onBatchBegin(e,t){t??={};for(let n of this.callbacks)await n.onBatchBegin(e,t)}async onBatchEnd(e,t){t??={};for(let n of this.callbacks)await n.onBatchEnd(e,t)}async onTrainBegin(e){e??={};for(let t of this.callbacks)await t.onTrainBegin(e)}async onTrainEnd(e){e??={};for(let t of this.callbacks)await t.onTrainEnd(e)}},fD=class extends uD{constructor(){super()}async onEpochBegin(e){this.seen=0,this.totals={}}async onBatchEnd(e,t){t??={};let n=t.size==null?0:t.size;this.seen+=n;for(let e in t){let r=t[e];if(typeof r==`number`)this.totals.hasOwnProperty(e)||(this.totals[e]=0),this.totals[e]=this.totals[e]+r*n;else{let t;e in this.totals?t=this.totals[e]:this.totals[e]=0;let i=I(()=>z(this.totals[e],V(r,n)));this.totals[e]=i,t?.dispose()}}}async onEpochEnd(e,t){if(t!=null)for(let e of this.params.metrics)this.totals[e]!=null&&(typeof this.totals[e]==`number`?t[e]=this.totals[e]/this.seen:I(()=>{let n=V(B(1,this.seen),this.totals[e]);t[e]=n,this.totals[e].dispose(),Rd(t[e])}))}},pD=class extends uD{async onTrainBegin(e){this.epoch=[],this.history={}}async onEpochEnd(e,t){t??={},this.epoch.push(e);for(let e in t)this.history[e]??(this.history[e]=[]),this.history[e].push(t[e])}async syncData(){let e=[],t=[],n=[];for(let r in this.history){let i=this.history[r];for(let a=0;a<i.length;++a)if(typeof i[a]!=`number`){let o=i[a];e.push(o.data()),t.push(r),n.push(a)}}let r=await Promise.all(e);for(let e=0;e<r.length;++e)this.history[t[e]][n[e]].dispose(),this.history[t[e]][n[e]]=r[e][0]}},mD=class extends uD{constructor(e,t){if(super(),this.currentEpoch=0,this.nowFunc=e.nowFunc,this.nextFrameFunc=e.nextFrameFunc||sx,this.yieldEvery=t||`auto`,this.yieldEvery===`auto`&&(this.yieldEvery=125),this.yieldEvery===`never`&&e.onYield!=null)throw Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");jo(this.yieldEvery)&&(this.maybeWait=Jw(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=e.onTrainBegin,this.trainEnd=e.onTrainEnd,this.epochBegin=e.onEpochBegin,this.epochEnd=e.onEpochEnd,this.batchBegin=e.onBatchBegin,this.batchEnd=e.onBatchEnd,this.yield=e.onYield}async maybeWait(e,t,n){let r=[];this.yield!=null&&(await sD(n),r.push(this.yield(e,t,n))),r.push(this.nextFrameFunc()),await Promise.all(r)}async onEpochBegin(e,t){this.currentEpoch=e,this.epochBegin!=null&&(await sD(t),await this.epochBegin(e,t))}async onEpochEnd(e,t){let n=[];this.epochEnd!=null&&(await sD(t),n.push(this.epochEnd(e,t))),this.yieldEvery===`epoch`&&n.push(this.nextFrameFunc()),await Promise.all(n)}async onBatchBegin(e,t){this.batchBegin!=null&&(await sD(t),await this.batchBegin(e,t))}async onBatchEnd(e,t){let n=[];this.batchEnd!=null&&(await sD(t),n.push(this.batchEnd(e,t))),this.yieldEvery===`batch`?n.push(this.nextFrameFunc()):jo(this.yieldEvery)&&n.push(this.maybeWait(this.currentEpoch,e,t)),await Promise.all(n)}async onTrainBegin(e){this.trainBegin!=null&&(await sD(e),await this.trainBegin(e))}async onTrainEnd(e){this.trainEnd!=null&&(await sD(e),await this.trainEnd(e))}};function hD(e,t){return e??={},e instanceof uD?[e]:Array.isArray(e)&&e[0]instanceof uD?e:Nw(e).map(e=>new mD(e,t))}var gD=class e{constructor(){}static registerCallbackConstructor(t,n){O(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),e.checkForDuplicate(n),e.constructors[t]??(e.constructors[t]=[]),e.constructors[t].push(n)}static checkForDuplicate(t){for(let n in e.constructors)e.constructors[+n].forEach(e=>{if(e===t)throw new q(`Duplicate callback constructor.`)})}static clear(){e.constructors={}}static createCallbacks(t){let n=[];for(let r in e.constructors){let i=+r;t>=i&&n.push(...e.constructors[i])}return n.map(e=>new e)}};gD.constructors={};function _D(e,t,n,r,i,a,o,s,c){let l=new pD,u=[new fD,...gD.createCallbacks(t)];e!=null&&u.push(...e),u.push(l);let d=new dD(u);return d.setParams({epochs:n,initialEpoch:r,samples:i,steps:a,batchSize:o,verbose:t,doValidation:s,metrics:c}),{callbackList:d,history:l}}function vD(e,t={},n=!1){return zw(e,Eb.getMap().classNameMap,t,`layer`,n)}function yD(e,t){return I(()=>{e.dtype!==`float32`&&(e=R(e,`float32`));let n=W(BT(e),t,!0),r=Ah(Yg(n,lm(n.shape,wT())));return B(e,r)})}function bD(e,t){return I(()=>Zg(BT(G(t,e)),-1))}function xD(e,t){return I(()=>Zg(Uf(G(t,e)),-1))}function SD(e,t){return I(()=>V(100,Zg(Uf(B(G(e,t),dm(Uf(e),wT(),Number.MAX_VALUE))),-1)))}function CD(e,t){return I(()=>Zg(BT(G(bg(z(1,dm(t,wT(),Number.MAX_VALUE))),bg(z(1,dm(e,wT(),Number.MAX_VALUE))))),-1))}function wD(e,t){return I(()=>Zg(BT(Yg(0,G(1,V(e,t)))),-1))}function TD(e,t){return I(()=>Zg(Yg(0,G(1,V(e,t))),-1))}function ED(e,t){return I(()=>{let n=W(V(e,t),-1);return Yg(0,z(1,G(Ch(V(G(1,e),t),-1),n)))})}function DD(e,t){return I(()=>{let n=Math.log(2),r=G(t,e);return Zg(G(z(r,Og(V(-2,r))),n),-1)})}function OD(e,t,n=!1){return I(()=>{if(n)t=bv(t);else{let e=W(t,t.shape.length-1,!0);t=B(t,e)}return t=dm(t,wT(),1-wT()),Eg(W(V(R(e,`float32`),bg(t)),t.shape.length-1))})}function kD(e,t,n=!1){return I(()=>{let r=R(Xh(kT(e)),`int32`);t=dm(t,wT(),1-wT());let i=t.shape;return OD(H(d_(r,i[i.length-1]),i),t,n)})}function AD(e,t){if(!mo(e.shape,t.shape))throw new q(`logits and labels must have the same shape, but got shapes ${JSON.stringify(e.shape)} and ${JSON.stringify(t.shape)}`);return I(()=>{let n=K_(t),r=Eg(Uf(t));return z(G(n,V(t,e)),Sg(Bh(r)))})}function jD(e,t){return I(()=>{let n;return n=dm(t,wT(),1-wT()),n=bg(B(n,G(1,n))),Zg(AD(e,n),-1)})}function MD(e,t){return I(()=>W(V(e,bg(B(dm(e,wT(),1),dm(t,wT(),1)))),-1))}function ND(e,t){return I(()=>Zg(G(t,V(e,bg(z(wT(),t)))),-1))}function PD(e,t){return I(()=>Eg(W(V(yD(e,-1),yD(t,-1)),-1)))}var FD={meanSquaredError:bD,meanAbsoluteError:xD,meanAbsolutePercentageError:SD,meanSquaredLogarithmicError:CD,squaredHinge:wD,hinge:TD,categoricalHinge:ED,logcosh:DD,categoricalCrossentropy:OD,sparseCategoricalCrossentropy:kD,binaryCrossentropy:jD,kullbackLeiblerDivergence:MD,poisson:ND,cosineProximity:PD};function ID(e){if(typeof e==`string`){if(e in FD)return FD[e];let t=`Unknown loss ${e}`;throw e.toLowerCase().includes(`softmaxcrossentropy`)&&(t=`Unknown loss ${e}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new q(t)}return e}function LD(e,t){return I(()=>Zg($m(e,ET(eg(t,V(.5,p_(t))),e.dtype)),-1))}function RD(e,t){return I(()=>ET($m($f(e,-1),$f(t,-1)),`float32`))}function zD(e,t){return I(()=>R(W(Lg($m(e,1),$m(t,1))),`float32`))}function BD(e,t){return I(()=>R(W(Lg($m(e,0),$m(t,1))),`float32`))}function VD(e,t){return I(()=>{let n=zD(e,t),r=z(n,BD(e,t));return R(th(eg(r,0),B(n,r),0),`float32`)})}function HD(e,t){return jD(e,t)}function UD(e,t){return e.rank===t.rank&&(e=Pv(e,[e.rank-1])),t=$f(t,-1),t.dtype!==e.dtype&&(t=R(t,e.dtype)),R($m(e,t),`float32`)}var WD=bD,GD=bD,KD=xD,qD=xD,JD=SD,YD=SD,XD=OD,ZD=PD,QD=kD,$D={binaryAccuracy:LD,categoricalAccuracy:RD,precision:VD,categoricalCrossentropy:XD,sparseCategoricalCrossentropy:QD,mse:WD,MSE:GD,mae:KD,MAE:qD,mape:JD,MAPE:YD,cosine:ZD};function eO(e){if(typeof e==`string`&&e in $D)return $D[e];if(typeof e!=`string`&&e!=null)return e;throw new q(`Unknown metric ${e}`)}function tO(e){if(Aw(e!==null,`Unknown LossOrMetricFn ${e}`),typeof e==`string`)return e;{let t;for(let n of Object.keys(FD))if(FD[n]===e){t=n;break}if(t!==void 0)return t;for(let n of Object.keys($D))if($D[n]===e){t=n;break}return t===void 0?e.name:t}}function nO(e){let t={Adagrad:()=>ax.adagrad(.01),Adadelta:()=>ax.adadelta(1,.95,wT()),Adam:()=>ax.adam(.001,.9,.999,wT()),Adamax:()=>ax.adamax(.002,.9,.999,wT(),0),RMSProp:()=>ax.rmsprop(.001,.9,0,wT()),SGD:()=>ax.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,e in t)return t[e]();throw new q(`Unknown Optimizer ${e}`)}var rO=1048576;function iO(e,t,n=!1){if(typeof e!=`object`||!e||Object.getPrototypeOf(e)!==Object.prototype||!aO(e))throw Error(`User-defined metadata is expected to be a JSON object, but is not.`);if(n){let n=JSON.stringify(e);n.length>1048576&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${n.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${rO}.`)}}function aO(e){if(e===null)return!0;if(typeof e==`object`){if(Object.getPrototypeOf(e)===Object.prototype){let t=Object.keys(e);for(let n of t)if(typeof n!=`string`||!aO(e[n]))return!1;return!0}if(Array.isArray(e)){for(let t of e)if(!aO(t))return!1;return!0}return!1}{let t=typeof e;return t===`string`||t===`number`||t===`boolean`}}function oO(e,t,n,r=console.log){let i=cO(e),a=[`Layer (type)`,`Input Shape`,`Output shape`,`Param #`];i?(t||=90,n||=[.32,.61,.89,1]):(t||=115,n||=[.24,.48,.7,.8,1]),n[n.length-1]<=1&&(n=n.map(e=>Math.floor(t*e)));let o;if(!i){a.push(`Receives inputs`),o=[];for(let t in e.nodesByDepth)o.push(...e.nodesByDepth[t])}r(`_`.repeat(t)),lO(a,n,r),r(`=`.repeat(t));let s=e.layers;for(let e=0;e<s.length;++e)i?uO(s[e],n,r):dO(s[e],n,o,r),r((e===s.length-1?`=`:`_`).repeat(t));e.checkTrainableWeightsConsistency();let c=sO(e),l=SE(e.nonTrainableWeights);r(`Total params: ${c+l}`),r(`Trainable params: ${c}`),r(`Non-trainable params: ${l}`),r(`_`.repeat(t))}function sO(e){let t;return t=e.collectedTrainableWeights==null?SE(e.trainableWeights):SE(e.collectedTrainableWeights),t}function cO(e){let t=!0,n=[],r=[];for(let t in e.nodesByDepth)n.push(e.nodesByDepth[t]);for(let e of n){if(e.length>1||e.length===1&&e[0].inboundLayers.length>1){t=!1;break}r.push(...e)}if(t)for(let n of e.layers){let e=!1;for(let i of n.inboundNodes)if(r.indexOf(i)!==-1){if(e){t=!1;break}e=!0}if(!t)break}return t}function lO(e,t,n=console.log){let r=``;for(let n=0;n<e.length;++n)n>0&&(r=r.slice(0,r.length-1)+` `),r+=e[n],r=r.slice(0,t[n]),r+=` `.repeat(t[n]-r.length);n(r)}function uO(e,t,n){let r,i;try{i=e.inboundNodes.map(e=>JSON.stringify(e.inputShapes)).join(`,`)}catch{i=`multiple`}try{r=JSON.stringify(e.outputShape)}catch{r=`multiple`}lO([`${e.name} (${e.getClassName()})`,i,r,e.countParams().toString()],t,n)}function dO(e,t,n,r){let i,a;try{a=e.inboundNodes.map(e=>JSON.stringify(e.inputShapes)).join(`,`)}catch{a=`multiple`}try{i=JSON.stringify(e.outputShape)}catch{i=`multiple`}let o=[];for(let t of e.inboundNodes)if(!(n!=null&&n.length>0&&n.indexOf(t)===-1))for(let e=0;e<t.inboundLayers.length;++e){let n=t.inboundLayers[e].name,r=t.nodeIndices[e],i=t.tensorIndices[e];o.push(`${n}[${r}][${i}]`)}let s=e.name,c=e.getClassName(),l=o.length===0?``:o[0];lO([`${s} (${c})`,a,i,e.countParams().toString(),l],t,r);for(let e=1;e<o.length;++e)lO([``,``,``,``,o[e]],t,r)}function fO(e,t,n){return(e===`inboundNodes`||e===`outputLayers`||e===`inputLayers`)&&t===0&&typeof n==`string`}function pO(e,t){if(e===null)return null;if(typeof e==`string`)return Fw(e);if(typeof e==`number`||typeof e==`boolean`)return e;if(e instanceof Array){let n=[],r=e.length;for(let i=0;i<r;++i){let r=e[i];fO(t,i,r)?n.push(r):n.push(pO(r,t))}return n}{let t={};for(let n of Object.keys(e)){let r=e[n];if(n===`name`&&typeof r==`string`)t[n]=r;else{let e=Fw(n);t[e]=pO(r,e)}}return t}}function mO(e,t){if(e==null)return null;if(typeof e==`string`)return Pw(e);if(typeof e==`number`||typeof e==`boolean`)return e;if(e instanceof Array){let n=[],r=e.length;for(let i=0;i<r;++i){let r=e[i];fO(t,i,r)?n.push(r):n.push(mO(r,t))}return n}{let t={};for(let n of Object.keys(e)){let r=e[n],i=Pw(n);t[i]=(n===`name`||n===`className`)&&typeof r==`string`?r:mO(r,n)}return t}}var hO=`4.22.0`,gO=e=>{let t=Object.keys(e);if(t.length===0)return!1;let n=t[0].split(`/`);return!isNaN(parseInt(n[n.length-1],10))},_O=class e extends NE{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){let e=this.getClassName().toLowerCase();this.name=$w(e)}if(this.supportsMasking=!1,this.trainable_=!0,this.inputs=Array.isArray(t.inputs)?t.inputs.slice():[t.inputs],this.outputs=Array.isArray(t.outputs)?t.outputs.slice():[t.outputs],Hw(this.inputs).length!==this.inputs.length)throw new q(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(e=>e.name)}`);Hw(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(e=>e.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(let e of this.outputs){let t=e.sourceLayer,n=e.nodeIndex,r=e.tensorIndex;this.outputLayers.push(t),this.outputLayersNodeIndices.push(n),this.outputLayersTensorIndices.push(r)}for(let e of this.inputs){let t=e.sourceLayer,n=e.nodeIndex,r=e.tensorIndex;Aw(n===0,`input layer has >1 nodes`),Aw(r===0,`input layer has >1 tensors`),this.inputLayers.push(t),this.inputLayersNodeIndices.push(n),this.inputLayersTensorIndices.push(r)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let e=0;e<this.inputLayers.length;e++){let n=this.inputLayers[e];if(!(n instanceof zE))throw TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${e} (0-based) originates from layer type ${n.getClassName()}.`);this.inputNames.push(n.name),this.feedInputShapes.push(n.batchInputShape),this.feedInputNames.push(n.name)}for(let e of this.outputLayers)this.outputNames.push(e.name);this.internalInputShapes=this.inputs.map(e=>e.shape),this.internalOutputShapes=this.outputs.map(e=>e.shape);let n={},r={},i={},a={},o={},s=[],c=(t,n,r,i,a,l)=>{(i==null||a==null||l==null)&&(i=t.sourceLayer,a=t.nodeIndex,l=t.tensorIndex);let u=i.inboundNodes[a];if(r.indexOf(u)!==-1)throw new Ew(`The tensor ${t.name} at layer "${i.name}" is part of a cycle.`);if(n.indexOf(u)!==-1)return;this.containerNodes.add(e.nodeKey(i,a)),i.id in o||(o[i.id]=Object.keys(o).length),r.indexOf(u)===-1&&r.push(u);let d=u.inboundLayers.length;for(let e=0;e<d;e++){let t=u.inputTensors[e],i=u.inboundLayers[e],a=u.nodeIndices[e],o=u.tensorIndices[e];c(t,n,r,i,a,o)}for(n.push(u);r.indexOf(u)>=0;)r.splice(r.indexOf(u),1);s.push(u)},l=[],u=[];for(let e of this.outputs)c(e,l,u);let d=s.slice().reverse();for(let e of d){r[e.id]=e,e.id in n||(n[e.id]=0);let t=n[e.id],o=i[e.outboundLayer.id]==null?0:i[e.outboundLayer.id];t=Math.max(t,o),i[e.outboundLayer.id]=t,a[e.outboundLayer.id]=e.outboundLayer,n[e.id]=t;for(let i=0;i<e.inboundLayers.length;i++){let a=e.inboundLayers[i],o=e.nodeIndices[i],s=a.inboundNodes[o],c=n[s.id]==null?0:n[s.id];n[s.id]=Math.max(t+1,c),r[s.id]=s}}let f={};for(let e in n){let t=n[e];t in f||(f[t]=[]),f[t].push(r[e])}let p={};for(let e in i){let t=i[e];t in p||(p[t]=[]),p[t].push(a[e])}let m=Object.keys(p).map(e=>parseInt(e,10)).sort(Vw);this.layers=[];for(let t of m){let n=p[t];n.sort((e,t)=>{let n=o[e.id],r=o[t.id];return n<r?-1:+(n>r)});for(let t of n)t instanceof e&&this.internalContainerRefs.push(t),this.layers.push(t)}this.layersByDepth=p,m=Object.keys(f).map(e=>parseInt(e,10)).sort(Vw);let h=this.inputs.slice(),g=[];for(let e of m)for(let t of f[e]){let e=t.outboundLayer;if(e!=null){for(let n of t.inputTensors)if(h.indexOf(n)===-1)throw new Ew(`Graph disconnected: cannot obtain value for tensor ${n} at layer "${e.name}". The following previous layers were accessed without issue: ${g}`);for(let e of t.outputTensors)h.push(e);g.push(e.name)}}this.nodesByDepth=f;let _=this.layers.map(e=>e.name);for(let e of _){let t=_.filter(t=>t===e).length;if(t!==1)throw new Ew(`The name "${e}" is used ${t} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(_))}this.outboundNodes=[],this.inboundNodes=[],new jE({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(e=>null),outputMasks:this.outputs.map(e=>null),inputShapes:this.inputs.map(e=>e.shape),outputShapes:this.outputs.map(e=>e.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();let e={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(let t of this.layers)e.numDisposedVariables+=t.dispose().numDisposedVariables;for(let t of this.internalContainerRefs)e.numDisposedVariables+=t.dispose().numDisposedVariables}return e.refCountAfterDispose=this._refCount,e}get trainable(){return this.trainable_}set trainable(e){this.layers.forEach(t=>{t._trainableWeights.forEach(t=>t.trainable=e)}),this.trainable_=e}get trainableWeights(){if(this._trainableWeights.length>0)throw new q(`Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.`);if(!this.trainable)return[];let e=[];for(let t of this.layers)e=e.concat(t.trainableWeights);return e}get nonTrainableWeights(){let e=[];for(let t of this.layers)e.push(...t.nonTrainableWeights);if(!this.trainable){let t=[];for(let e of this.layers)t.push(...e.trainableWeights);return t.concat(e)}return e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(e,t=!0){let n={},r=0,i=gO(e);i&&this.parseWeights(e);for(let e of this.layers)for(let[t,a]of e.weights.entries()){let e=i?`${a.name.split(`/`).slice(0,-1).join(`/`)+`/`}${t}`:a.originalName;if(n[e]!=null)throw new q(`Duplicate weight name: ${e}`);n[e]=a,r++}let a=[];for(let r in e){let i=r;if(n[r]==null){let e=r.split(`/`);i=e.slice(0,-2).concat([e[e.length-1]]).join(`/`)}if(n[i]!=null)a.push([n[i],e[r]]);else if(t)throw new q(`Provided weight data has no target variable: ${r}`);delete n[i]}if(t){let e=[];for(let t in n)e.push(t);if(e.length>0)throw new q(`${e.length} of ${r} weights are not set: ${e}`)}DE(a)}parseWeights(e){for(let t in Object.keys(e)){let n=t.split(`/`),r=[`vars`,`layer_checkpoint_dependencies`],i=n.map(e=>e.startsWith(`_`)?e.slice(1):e).filter(e=>!r.includes(e)).join(`/`);i!==t&&(e[i]=e[t],delete e[t])}}updatedConfig(){let e=this.getConfig(),t={};return t.className=this.getClassName(),t.config=e,t.kerasVersion=`tfjs-layers ${hO}`,t.backend=`TensorFlow.js`,t}toJSON(e,t=!0){let n=mO(this.updatedConfig());return t?JSON.stringify(n):n}call(e,t){return I(()=>{e=Nw(e);let n=new HE;for(let t=0;t<this.inputs.length;++t)n.add(this.inputs[t],e[t]);return KE(this.outputs,n,t)})}computeMask(e,t){return I(()=>{e=Nw(e);let n;return n=t==null?kw(null,e.length):Nw(t),this.runInternalGraph(e,n)[1]})}computeOutputShape(e){let t=bE(e);if(t.length!==this.inputLayers.length)throw new q(`Invalid inputShape argument ${e}: model has ${this.inputLayers.length} tensor inputs.`);let n={};for(let e=0;e<t.length;e++){let r=this.inputLayers[e],i=t[e],a=r.name+`_0_0`;n[a]=i}let r=Object.keys(this.nodesByDepth).map(e=>parseInt(e,10)).sort(Vw);if(r.length>1)for(let e of r){let t=this.nodesByDepth[e];for(let e of t){let t=e.outboundLayer;if(this.inputLayers.map(e=>e.id).indexOf(t.id)!==-1)continue;let r=[];for(let t=0;t<e.inboundLayers.length;t++){let i=e.inboundLayers[t],a=e.nodeIndices[t],o=e.tensorIndices[t],s=n[`${i.name}_${a}_${o}`];r.push(s)}let i=bE(t.computeOutputShape(Mw(r))),a=t.inboundNodes.indexOf(e);for(let e=0;e<i.length;e++){let r=`${t.name}_${a}_${e}`;n[r]=i[e]}}}let i=[],a=[];for(let e=0;e<this.outputLayers.length;e++){let t=this.outputLayers[e],n=this.outputLayersNodeIndices[e],r=this.outputLayersTensorIndices[e],i=`${t.name}_${n}_${r}`;a.push(i)}for(let e=0;e<a.length;e++){let t=a[e];Aw(t in n),i.push(n[t])}return Mw(i)}runInternalGraph(e,t){t??=kw(null,e.length);let n={};for(let r=0;r<this.inputs.length;++r){let i=this.inputs[r],a=e[r],o=t[r];n[i.id]=[a,o]}let r=Object.keys(this.nodesByDepth).map(e=>parseInt(e,10)).sort(Vw);for(let e of r){let t=this.nodesByDepth[e];for(let e of t){let t=e.outboundLayer,r=e.inputTensors,i=e.outputTensors,a=[];for(let e of r)e.id in n&&a.push(n[e.id]);if(a.length===r.length){let r={},o,s,c,l;if(e.callArgs!=null&&(r=e.callArgs),a.length===1){let[e,n]=a[0];r.mask??(r.mask=n),c=Nw(t.call(e,r)),l=Nw(t.computeMask(e,n)),o=[e],s=[n]}else o=a.map(e=>e[0]),s=a.map(e=>e[1]),r.mask??(r.mask=s),c=Nw(t.call(o,r)),l=Nw(t.computeMask(o,s));if(t.activityRegularizer)throw new J(`LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.`);for(let e=0;e<i.length;++e){let t=i[e],r=c[e],a=l[e];n[t.id]=[r,a]}}}}let i=[],a=[],o=[];for(let e of this.outputs){Aw(e.id in n,`Could not compute output ${e.name} : ${e.id}`);let[t,r]=n[e.id];o.push(t.shape),i.push(t),a.push(r)}return[i,a,o]}buildNodeConversionMap(t){let n={},r;for(let t of this.layers){r=+(t instanceof e);for(let i=0;i<t.inboundNodes.length;i++){let a=e.nodeKey(t,i);this.containerNodes.has(a)&&(n[a]=r,r+=1)}}return n}getLayer(e,t){if(t!=null)return this.findLayer(t);if(e==null)throw new q(`Provide either a layer name or layer index`);if(typeof e==`number`)return this.findLayer(e);for(let t of this.layers)if(t.name===e)return t;throw new q(`No such layer: ${e}`)}findLayer(e){if(this.layers.length<=e)throw new q(`Was asked to retrieve layer at index ${e}, but model only has ${this.layers.length} layer(s).`);return this.layers[e]}calculateLosses(){return I(()=>{let t=[];for(let n of this.layers)for(let r=0;r<n.inboundNodes.length;++r){let i=e.nodeKey(n,r);this.containerNodes.has(i)&&t.push(...n.calculateLosses())}return t})}getConfig(){let t={name:this.name},n=this.buildNodeConversionMap(this.layers),r=[];for(let t of this.layers){let i=t.getClassName(),a=t.getConfig(),o=[];for(let r=0;r<t.inboundNodes.length;r++){let i=t.inboundNodes[r],a=e.nodeKey(t,r),s={};if(this.containerNodes.has(a)){if(i.callArgs)try{JSON.stringify(i.callArgs),s=i.callArgs}catch{console.warn(`Layer ${t.name} was passed non-serializable keyword arguments: ${i.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),s={}}if(i.inboundLayers.length>0){let t=[];for(let r=0;r<i.inboundLayers.length;r++){let a=i.inboundLayers[r],o=i.nodeIndices[r],c=i.tensorIndices[r],l=n[e.nodeKey(a,o)];l??=0,t.push([a.name,l,c,s])}o.push(t)}}}let s={};s.name=t.name,s.className=i,s.config=a,s.inboundNodes=o,r.push(s)}t.layers=r;let i=[];for(let t=0;t<this.inputLayers.length;t++){let r=this.inputLayers[t],a=this.inputLayersNodeIndices[t],o=e.nodeKey(r,a);if(!this.containerNodes.has(o))continue;let s=n[o];s??=0;let c=this.inputLayersTensorIndices[t];i.push([r.name,s,c])}t.inputLayers=i;let a=[];for(let t=0;t<this.outputLayers.length;t++){let r=this.outputLayers[t],i=this.outputLayersNodeIndices[t],o=e.nodeKey(r,i);if(!this.containerNodes.has(o))continue;let s=n[o];s??=0;let c=this.outputLayersTensorIndices[t];a.push([r.name,s,c])}return t.outputLayers=a,t}static fromConfig(e,t,n={},r=!1){let i={},a={};function o(e,t){e.name in a?a[e.name].push(t):a[e.name]=[t]}function s(e,t){let n=[],r;for(let a of t){let s=a[0],c=a[1],l=a[2];if(r=a[3]==null?{}:a[3],!(s in i)){o(e,t);return}let u=i[s];if(u.inboundNodes.length<=c){o(e,t);return}let d=u.inboundNodes[c];n.push(d.outputTensors[l])}n.length>0&&e.apply(Mw(n),r)}function c(e){let n=e.name,a=vD(e,t.customObjects==null?{}:t.customObjects);a.setFastWeightInitDuringBuild(r),i[n]=a,e.inboundNodes.forEach(e=>{if(!(e instanceof Array))throw new q(`Corrupted configuration, expected array for nodeData: ${e}`);o(a,e)})}let l=t.name,u=t.layers;for(let e of u)c(e);for(;!Uw(a);)for(let e of u){let t=i[e.name];if(t.name in a){let e=a[t.name];delete a[t.name];for(let n of e)s(t,n)}}let d=[],f=[],p=t.inputLayers;for(let e of p){let t=e[0],n=e[1],r=e[2];Aw(t in i);let a=i[t].inboundNodes[n].outputTensors;d.push(a[r])}let m=t.outputLayers;for(let e of m){let t=e[0],n=e[1],r=e[2];Aw(t in i);let a=i[t].inboundNodes[n].outputTensors;f.push(a[r])}return new e({inputs:d,outputs:f,name:l})}get stateful(){if(this._stateful)throw new q(`Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.`);for(let e of this.layers)if(e.stateful)return!0;return!1}resetStates(){I(()=>{this.layers.forEach(e=>{e.stateful&&e.resetStates()})})}};function vO(e,t,n){let r=t.length;if(e==null||Array.isArray(e)&&e.length===0)return t.map(e=>null);if(r===1)return Array.isArray(e)&&e.length===1?e:typeof e==`object`&&t[0]in e?[e[t[0]]]:[e];if(Array.isArray(e)){if(e.length!==r)throw Error(`Provided ${n} is an array of ${e.length} element(s), but the model has ${r} outputs. Make sure a set of weights is provided for each model output.`);return e}if(typeof e==`object`&&Object.keys(e).length>0&&typeof e[Object.keys(e)[0]]==`object`){let n=[];return t.forEach(t=>{t in e?n.push(e[t]):n.push(null)}),n}throw Error(`The model has multiple (${r}) outputs, so ${n} must be either an array with ${r} elements or an object with ${t} keys. Provided ${n} not understood: ${JSON.stringify(e)}`)}function yO(e,t){return vO(e,t,`classWeight`)}async function bO(e,t,n,r){if(t!=null||r!=null)throw Error(`Support sampleWeight is not implemented yet`);if(n!=null){let t=I(()=>{if(e.shape.length===1)return Ff(e);if(e.shape.length===2){if(e.shape[1]>1)return $f(e,1);if(e.shape[1]===1)return H(e,[e.shape[0]]);throw Error(`Encountered unexpected last-dimension size (${e.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}throw Error(`Unexpected rank of target (y) tensor (${e.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),r=Array.from(await t.data());L(t);let i=[];return r.forEach(e=>{if(n[e]==null)throw Error(`classWeight must contain all classes in the training data. The class ${e} exists in the data but not in classWeight`);i.push(n[e])}),Uv(i,`float32`)}return null}function xO(e,t){return V(e,t)}var SO=32;function CO(e,t){let n,r,i=t;n=i.xs,r=i.ys,O(n!=null&&r!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);let a=wO(`input`,e.inputNames,n),o=wO(`output`,e.outputNames,r),s=a[0].shape[0];O(a.length===e.inputs.length,()=>`LayersModel has ${e.inputs.length} inputs, but the dataset provides ${a.length} inputs.  (Expected input keys: ${JSON.stringify(e.inputNames)})`),O(o.length===e.outputs.length,()=>`LayersModel has ${e.outputs.length} outputs, but the dataset provides ${o.length} outputs.  (Expected output keys: ${JSON.stringify(e.outputNames)})`);for(let t=0;t<a.length;t++)O(a[t].shape[0]===s,()=>`Batch size mismatch: input ${e.inputNames[t]} has ${a[t].shape[0]}; expected  ${s} based on input ${e.inputNames[0]}.`);for(let t=0;t<o.length;t++)O(o[t].shape[0]===s,()=>`Batch size mismatch: output ${e.outputNames[t]} has ${o[t].shape[0]}; expected  ${s} based on input ${e.inputNames[0]}.`);return{xs:a,ys:o}}function wO(e,t,n){if(n instanceof Zu)return[n];if(Array.isArray(n))return O(n.length===t.length,()=>`Received an array of ${n.length} Tensors, but expected ${t.length} to match the ${e} keys ${t}.`),n;{let r=[];for(let i of t){if(n[i]==null)throw new q(`The feature data generated by the dataset lacks the required ${e} key '${i}'.`);r.push(n[i])}return r}}function TO(e){if(e.length===3)throw new J(`Validation with sample weights is not implemented yet.`);return{xs:e[0],ys:e[1]}}async function EO(e,t,n){let r=n.batchesPerEpoch!=null;if(O(e.optimizer!=null,()=>`You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig).`),O(n!=null,()=>`For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call.`),O(n.epochs!=null&&n.epochs>0&&Number.isInteger(n.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${n.epochs}`),O(!r||n.batchesPerEpoch>0&&Number.isInteger(n.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${n.batchesPerEpoch}`),O(n.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),e.isTraining)throw Error(`Cannot start training because another fit() call is ongoing.`);e.isTraining=!0;try{let i=n.validationData!=null,a,o;if(i){if(OO(n.validationData))O(n.validationBatches==null||n.validationBatches>0&&Number.isInteger(n.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${n.validationBatches}`);else{let e=TO(n.validationData);a=e.xs,o=e.ys}}let s=e.makeTrainFunction(),c=e.getDedupedMetricsNames(),l;l=i?c.slice().concat(c.map(e=>`val_`+e)):c.slice();let{callbackList:u,history:d}=_D(hD(n.callbacks,n.yieldEvery),n.verbose==null?1:n.verbose,n.epochs,null,null,DO(t,n),null,i,l);u.setModel(e),e.history=d,await u.onTrainBegin(),e.stopTraining_=!1;let f=n.initialEpoch==null?0:n.initialEpoch,p=await t.iterator();for(;f<n.epochs;){let l={};await u.onEpochBegin(f);let d=0,m=0;for(r||(p=await t.iterator());!r||d<n.batchesPerEpoch;){let t=await p.next();if(r&&t.done){console.warn(`You provided \`batchesPerEpoch\` as ${n.batchesPerEpoch}, but your dataset iterator ran out of data after ${d} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${n.batchesPerEpoch*n.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(t.value!=null){let{xs:r,ys:i}=CO(e,t.value),a={};a.batch=m,a.size=r[0].shape[0],await u.onBatchBegin(m,a);let o=[];if(n.classWeight!=null){let t=yO(n.classWeight,e.outputNames);for(let e=0;e<t.length;++e)o.push(await bO(i[e],null,t[e]))}let l=r.concat(i).concat(o),f=s(l);L(l);for(let e=0;e<c.length;++e){let t=c[e],n=f[e];a[t]=n,Rd(n)}await u.onBatchEnd(m,a),cD(a),m++,d++}if(r?d>=n.batchesPerEpoch:t.done){if(i){let t;t=OO(n.validationData)?Nw(await e.evaluateDataset(n.validationData,{batches:n.validationBatches})):Nw(e.evaluate(a,o,{batchSize:n.validationBatchSize==null?SO:n.validationBatchSize,verbose:0}));for(let n=0;n<e.metricsNames.length;++n)l[`val_${e.metricsNames[n]}`]=t[n]}break}if(e.stopTraining_)break}if(await u.onEpochEnd(f,l),f++,e.stopTraining_)break}return await u.onTrainEnd(),await e.history.syncData(),e.history}finally{e.isTraining=!1}}function DO(e,t){let n=null;return t.batchesPerEpoch==null?Number.isFinite(e.size)&&(n=e.size):n=t.batchesPerEpoch,n}function OO(e){return typeof e.iterator==`function`}function kO(e){return typeof e.next==`function`}async function AO(e,t,n){n||={};let r=n.batches!=null,i=e.testFunction,a=[];if(n.verbose>0)throw new J(`Verbose mode is not implemented yet.`);O(!r||n.batches>0&&Number.isInteger(n.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(n.batches)}`);let o=kO(t)?t:await t.iterator(),s=0,c=0;for(;!r||c<n.batches;){let t=await o.next();if(a=I(()=>{if(t.value){let{xs:n,ys:r}=CO(e,t.value),o=n.concat(r),l=I(()=>i(o));if(L(o),c===0)for(let e=0;e<l.length;++e)a.push(Oh(0));let u=o[0].shape[0];for(let e=0;e<l.length;++e){let t=l[e],n=a[e];a[e]=I(()=>z(a[e],V(u,t))),c>0&&L(n)}L(l),s+=u,++c}return a}),t.done){r&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${n.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let e=0;e<a.length;++e){let t=a[e];a[e]=B(a[e],s),L(t)}return Mw(a)}function jO(e){O(e>0&&Number.isInteger(e),()=>`batchSize is required to be a positive integer, but got ${e}`)}function MO(e,t,n){return e==null?[null]:Array.isArray(e)?e.map(e=>jT(e,t,n-t)):jT(e,t,n-t)}function NO(e,t){return I(()=>e==null?null:Array.isArray(e)?e.map(e=>NO(e,t)):zT(e,t.dtype===`int32`?t:R(t,`int32`)))}function PO(e,t){let n=[],r=0,i=null;for(;r<e;)i=r+t,i>=e&&(i=e),n.push([r,i]),r=i;return n}function FO(e){let t=[];e instanceof Zu&&(e=[e]);for(let n=0;n<e.length;++n){let r=e[n];if(r.rank===1)t.push(DT(r,1));else if(r.rank===0)throw Error(`Expected tensor to be at least 1D, but received a 0D tensor (scalar).`);else t.push(r)}return t}function IO(e,t){if(e==null)return;let n=[];if(t instanceof Zu)n.push(t.id);else if(Array.isArray(t))t.forEach(e=>n.push(e.id));else if(t!=null)for(let e in t){let r=t[e];n.push(r.id)}let r=[];if(e instanceof Zu)n.indexOf(e.id)===-1&&r.push(e);else if(Array.isArray(e))e.forEach(e=>{n.indexOf(e.id)===-1&&r.push(e)});else if(e!=null)for(let t in e){let i=e[t];n.indexOf(i.id)===-1&&r.push(i)}r.forEach(e=>{e.isDisposed||e.dispose()})}function LO(e){return e instanceof Zu}function RO(e){return Array.isArray(e)}function zO(e){return!LO(e)&&!RO(e)}function BO(e,t,n,r=!0,i=``){if(t==null||t.length===0){if(e!=null){let t=!1;if(RO(e)&&e.length>0)t=!0;else if(zO(e)){for(let n in e)if(e.hasOwnProperty(n)){t=!0;break}}else t=!0;if(t)throw new q(`Error when checking model ${i} expected no data, but got ${e}`)}return[]}if(e==null)return t.map(e=>null);let a;if(zO(e)){e=e,a=[];for(let n of t){if(e[n]==null)throw new q(`No data provided for "${n}". Need data for each key in: ${t}`);a.push(e[n])}}else if(RO(e)){if(e=e,e.length!==t.length)throw new q(`Error when checking model ${i}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${e}`);a=e}else{if(e=e,t.length>1)throw new q(`The model ${i} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${e.shape}`);a=[e]}if(a=FO(a),n!=null)for(let e=0;e<t.length;++e){if(n[e]==null)continue;let o=a[e];if(o.shape.length!==n[e].length)throw new q(`Error when checking ${i}: expected ${t[e]} to have ${n[e].length} dimension(s). but got array with shape ${o.shape}`);for(let t=0;t<n[e].length;++t){if(t===0&&!r)continue;let a=o.shape[t],s=n[e][t];if(s!=null&&s>=0&&a!==s)throw new q(`${i} expected a batch of elements where each example has shape [${n[e].slice(1,n[e].length)}] (i.e.,tensor shape [*,${n[e].slice(1,n[e].length)}]) but the ${i} received an input with ${o.shape[0]} examples, each with shape [${o.shape.slice(1,o.shape.length)}] (tensor shape [${o.shape}])`)}}return a}function VO(e,t,n){let r=Hw(e.map(e=>e.shape[0]));r.sort();let i=Hw(t.map(e=>e.shape[0]));if(i.sort(),r.length>1)throw new q(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(e.map(e=>e.shape))}`);if(i.length>1)throw new q(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(e=>e.shape))}`);if(r.length>0&&i.length>0&&!mo(r,i))throw new q(`Input Tensors should have the same number of samples as target Tensors. Found ${r[0]} input sample(s) and ${i[0]} target sample(s).`)}function HO(e,t,n){let r=[bD,jD,OD];for(let i=0;i<e.length;++i){let a=e[i],o=t[i],s=n[i];if(o!=null){if(o===OD&&a.shape[a.shape.length-1]===1)throw new q(`You are passing a target array of shape ${a.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(r.indexOf(o)!==-1){let e=a.shape.slice(1),t=s.slice(1);for(let n=0;n<e.length;++n){let r=e[n],i=t[n];if(i!=null&&r!==i)throw new q(`A target Tensor with shape ${a.shape} was passed for an output of shape ${s}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function UO(e,t,n,r=!0,i=``){let a;if(Array.isArray(e)){if(e.length!==t.length)throw new q(`Error when checking model ${i}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${e.length} Tensors(s).`);a=e}else{if(t.length>1)throw new q(`The model expects ${t.length} ${i} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(e.shape)}.`);a=[e]}if(n!=null)for(let e=0;e<t.length;++e){if(n[e]==null)continue;let o=a[e];if(o.shape.length!==n[e].length)throw new q(`Error when checking ${i}: expected ${t[e]} to have ${n[e].length} dimension(s), but got array with shape ${JSON.stringify(o.shape)}`);for(let a=0;a<n[e].length;++a){if(a===0&&!r)continue;let s=o.shape[a],c=n[e][a];if(c!=null&&c!==s)throw new q(`Error when checking ${i}: expected ${t[e]} to have shape ${JSON.stringify(n[e])} but got array with shape ${JSON.stringify(o.shape)}.`)}}}function WO(e,t){if(e==null||Array.isArray(e)&&e.length===0)return t.map(e=>[]);let n;if(typeof e==`string`||typeof e==`function`)n=[e];else if(Array.isArray(e)||typeof e==`object`)n=e;else throw TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${e}`);if(Array.isArray(n))return t.map(e=>n);{let e=[];for(let r of t){let t=n.hasOwnProperty(r)?n[r]:[];Array.isArray(t)||(t=[t]),e.push(t)}return e}}var GO=`layers-model`,KO=class extends _O{constructor(e){super(e),this.isTraining=!1}summary(e,t,n=console.log){if(!this.built)throw new q(`This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).`);oO(this,e,t,n)}compile(e){if(e.loss??=[],this.loss=e.loss,typeof e.optimizer==`string`)this.optimizer_=nO(e.optimizer),this.isOptimizerOwned=!0;else{if(!(e.optimizer instanceof Db))throw new q(`User-defined optimizer must be an instance of tf.Optimizer.`);this.optimizer_=e.optimizer,this.isOptimizerOwned=!1}let t=[];if(!Array.isArray(e.loss)&&typeof e.loss!=`string`&&typeof e.loss!=`function`){e.loss=e.loss;for(let t in e.loss)if(this.outputNames.indexOf(t)===-1)throw new q(`Unknown entry in loss dictionary: "${t}". Only expected the following keys: ${this.outputNames}`);for(let n of this.outputNames)e.loss[n]??console.warn(`Output "${n}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${n} during training`),t.push(ID(e.loss[n]))}else if(Array.isArray(e.loss)){if(e.loss.length!==this.outputs.length)throw new q(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${e.loss}.`);t=e.loss.map(e=>ID(e))}else{let n=ID(e.loss);this.outputs.forEach(e=>{t.push(n)})}this.lossFunctions=t,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let e=0;e<this.outputs.length;++e){let t=this.internalOutputShapes[e],n=this.outputNames[e];this.feedOutputNames.push(n),this.feedOutputShapes.push(t),this.feedLossFns.push(this.lossFunctions[e])}let n=[];this.metrics=e.metrics,this.metricsNames=[`loss`],this.metricsTensors=[],fT(`loss`,()=>{for(let e=0;e<this.outputs.length;++e){if(n.indexOf(e)!==-1)continue;let t=this.lossFunctions[e];this.outputs.length>1&&(this.metricsTensors.push([t,e]),this.metricsNames.push(this.outputNames[e]+`_loss`))}});let r=WO(e.metrics,this.outputNames),i=(e,t,n)=>{this.outputNames.length>1&&(t=this.outputNames[e]+`_`+t),this.metricsNames.push(t),this.metricsTensors.push([n,e])};fT(`metric`,()=>{for(let e=0;e<this.outputs.length;++e)n.indexOf(e)===-1&&(t=>{let n,r,a;for(let o of t){if(typeof o==`string`&&[`accuracy`,`acc`,`crossentropy`,`ce`].indexOf(o)!==-1){let t=this.internalOutputShapes[e];t[t.length-1]===1||this.lossFunctions[e]===jD?[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=HD):r=LD:this.lossFunctions[e]===kD?[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=QD):r=UD:[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=XD):r=RD;let i;[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(i=`ce`):i=`acc`,a=r,n=``+i}else a=eO(o),n=``+tO(o);let t;fT(n,()=>{t=a}),i(e,n,t)}})(r[e])}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(e,t,n={}){let r=n.batchSize==null?32:n.batchSize;jO(r);let i=this.standardizeUserDataXY(e,t,!0,r);try{let e=i[0].concat(i[1]);this.makeTestFunction();let t=this.testFunction;return Mw(this.testLoop(t,e,r,n.verbose,n.steps))}finally{IO(i[0],e),IO(i[1],t)}}async evaluateDataset(e,t){return this.makeTestFunction(),AO(this,e,t)}checkNumSamples(e,t,n,r=`steps`){let i;if(n!=null){if(i=null,t!=null)throw new q(`If ${r} is set, batchSize must be null or undefined.Got batchSize = ${t}`)}else if(e!=null)i=Array.isArray(e)?e[0].shape[0]:e.shape[0];else throw new q(`Either the input data should have a defined shape, or ${r} shoud be specified.`);return i}execute(e,t){if(Array.isArray(t)&&t.length===0)throw new q("`outputs` is an empty Array, which is not allowed.");let n=Array.isArray(t),r=n?t:[t],i=this.retrieveSymbolicTensors(r),a=new HE;if(e instanceof Zu&&(e=[e]),Array.isArray(e)){if(e.length!==this.inputs.length)throw new q(`The number of inputs provided (${e.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let t=0;t<this.inputs.length;++t)a.add(this.inputs[t],e[t])}else for(let t of this.inputs){let n=e[t.name];if(n==null)throw new q(`No value is provided for the model's input ${t.name}`);a.add(t,n)}let o=KE(i,a);return n?o:o[0]}retrieveSymbolicTensors(e){let t=kw(null,e.length),n=e.length;for(let r of this.layers){let i=Array.isArray(r.output)?r.output:[r.output],a=i.map(e=>e.name);for(let r=0;r<e.length;++r){let o=a.indexOf(e[r]);if(o!==-1&&(t[r]=i[o],n--),n===0)break}if(n===0)break}if(n>0){let n=[];throw t.forEach((t,r)=>{t??n.push(e[r])}),new q(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(n)}`)}return t}predictLoop(e,t=32,n=!1){return I(()=>{let r=this.checkNumSamples(e);if(n)throw new J(`Verbose predictLoop() is not implemented yet.`);let i=PO(r,t),a=this.outputs.map(e=>[]);for(let t=0;t<i.length;++t)I(()=>{let n=i[t][0],r=i[t][1],a=MO(e,n,r),o=[];if(Array.isArray(a))for(let e=0;e<a.length;++e)o.push({key:this.inputs[e],value:a[e]});else o.push({key:this.inputs[0],value:a});let s=new HE(o);return KE(this.outputs,s)}).forEach((e,t)=>a[t].push(e));return Mw(a.map(e=>Lp(e,0)))})}predict(e,t={}){let n=FO(e);UO(n,this.inputNames,this.feedInputShapes,!1);try{let e=t.batchSize==null?32:t.batchSize;return jO(e),this.predictLoop(n,e)}finally{IO(n,e)}}predictOnBatch(e){UO(e,this.inputNames,this.feedInputShapes,!0);let t=(Array.isArray(e)?e[0]:e).shape[0];return this.predictLoop(e,t)}standardizeUserDataXY(e,t,n=!0,r){if(this.optimizer_==null)throw new Ew(`You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).`);let i=[];for(let e=0;e<this.feedOutputShapes.length;++e){let t=this.feedOutputShapes[e];this.feedLossFns[e]===kD?i.push(t.slice(0,t.length-1).concat([1])):i.push(t)}if(e=BO(e,this.feedInputNames,this.feedInputShapes,!1,`input`),t=BO(t,this.feedOutputNames,i,!1,`target`),VO(e,t,null),HO(t,this.feedLossFns,this.feedOutputShapes),this.stateful&&r!=null&&r>0&&e[0].shape[0]%r!==0)throw new q(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${r}. Found: ${e[0].shape[0]} sample(s).`);return[e,t]}async standardizeUserData(e,t,n,r,i=!0,a){let[o,s]=this.standardizeUserDataXY(e,t,i,a);if(n!=null)throw Error(`sample weight is not supported yet.`);let c=null;if(r!=null){let e=yO(r,this.outputNames);c=[];for(let t=0;t<e.length;++t)c.push(await bO(s[t],null,e[t]))}return[o,s,c]}testLoop(e,t,n,r=0,i){return I(()=>{let a=this.checkNumSamples(t,n,i,`steps`),o=[];if(r>0)throw new J(`Verbose mode is not implemented yet.`);if(i!=null)throw new J(`steps mode in testLoop() is not implemented yet`);{let r=PO(a,n),i=Uv(ST(0,a));for(let n=0;n<r.length;++n){let a=r[n][0],s=r[n][1],c=e(NO(t,jT(i,a,s-a)));if(n===0)for(let e=0;e<c.length;++e)o.push(Oh(0));for(let e=0;e<c.length;++e){let t=c[e];o[e]=z(o[e],V(s-a,t))}}for(let e=0;e<o.length;++e)o[e]=B(o[e],a)}return o})}getDedupedMetricsNames(){let e=this.metricsNames,t=[];for(let n=0;n<e.length;++n){let r=e[n],i=r;if(jw(e,r)>1){let t=jw(e.slice(0,n),r);i+=`_${t}`}t.push(i)}return t}makeTrainFunction(){return e=>{let t=[],n=e.slice(0,this.inputs.length),r=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=e.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),a=[],o=()=>{let e=[];for(let t=0;t<this.inputs.length;++t)e.push({key:this.inputs[t],value:n[t]});let o=new HE(e),s=KE(this.outputs,o,{training:!0}),c;for(let e=0;e<this.lossFunctions.length;++e){let n=this.lossFunctions[e],a=n(r[e],s[e]);i[e]!=null&&(a=xO(a,i[e]));let o=Zg(a);t.push(o),c=e===0?a:z(c,a)}for(let e=0;e<this.metricsTensors.length;++e){let n;if(this.outputs.length>1&&e<this.outputs.length)n=t[e];else{let t=this.metricsTensors[e][0],i=this.metricsTensors[e][1];n=Zg(t(r[i],s[i]))}Rd(n),a.push(n)}return c=Zg(c),this.calculateLosses().forEach(e=>{c=z(c,e)}),c},s=this.collectedTrainableWeights.map(e=>e.read());return[this.optimizer_.minimize(o,!0,s)].concat(a)}}makeTestFunction(){this.testFunction=e=>I(()=>{let t=[],n,r=e.slice(0,this.inputs.length),i=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),a=[];for(let e=0;e<this.inputs.length;++e)a.push({key:this.inputs[e],value:r[e]});let o=new HE(a),s=KE(this.outputs,o);for(let e=0;e<this.lossFunctions.length;++e){let r=this.lossFunctions[e],a=Zg(r(i[e],s[e]));n=e===0?a:z(n,a),t.push(n)}for(let e=0;e<this.metricsTensors.length;++e){let n=this.metricsTensors[e][0],r=this.metricsTensors[e][1],a=Zg(n(i[r],s[r]));t.push(a)}return t})}async fit(e,t,n={}){if(this.isTraining)throw Error(`Cannot start training because another fit() call is ongoing.`);this.isTraining=!0;let r,i,a,o,s,c,l,u,d;try{let f=n.batchSize==null?32:n.batchSize;jO(f);let p=await this.standardizeUserData(e,t,n.sampleWeight,n.classWeight,!1,f);r=p[0],i=p[1],d=p[2];let m=!1,h;if(n.validationData!=null&&n.validationData.length>0){if(m=!0,n.validationData.length===2)s=n.validationData[0],c=n.validationData[1];else if(n.validationData.length===3)throw new J(`validationData including sample weights is not supported yet.`);else throw new q(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${n.validationData} is invalid.`);let e=await this.standardizeUserData(s,c,null,null,!0,f);l=e[0],u=e[1],h=l.concat(u)}else if(n.validationSplit!=null&&n.validationSplit>0&&n.validationSplit<1){m=!0;let e=Math.floor(r[0].shape[0]*(1-n.validationSplit)),t=r[0].shape[0];l=MO(r,e,t),a=r,r=MO(r,0,e),u=MO(i,e,t),o=i,i=MO(i,0,e),h=l.concat(u)}else n.validationSteps!=null&&(m=!0);let g=r.concat(i).concat(d);this.checkTrainableWeightsConsistency();let _=this.makeTrainFunction(),v=this.getDedupedMetricsNames(),y,b;m?(this.makeTestFunction(),y=this.testFunction,b=v.slice().concat(v.map(e=>`val_`+e))):(y=null,h=[],b=v.slice());let x=hD(n.callbacks,n.yieldEvery);return await this.fitLoop(_,g,v,f,n.epochs,n.verbose,x,y,h,n.shuffle,b,n.initialEpoch,null,null)}finally{this.isTraining=!1,IO(r,e),IO(i,t),IO(a,e),IO(o,t),IO(l,s),IO(u,c),d!=null&&L(d)}}async fitLoop(e,t,n,r,i,a,o,s,c,l,u,d,f,p){r??=32,i??=1,l??=!0,d??=0;let m=!1;if(s!=null&&c!=null&&(m=!0),p!=null&&(m=!0,f==null))throw new q("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");let h=this.checkNumSamples(t,r,f,`steps_per_epoch`),g;h!=null&&(g=ST(0,h)),a??=1;let{callbackList:_,history:v}=_D(o,a,i,d,h,f,r,m,u);_.setModel(this),this.history=v,await _.onTrainBegin(),this.stopTraining_=!1;for(let a=d;a<i;++a){await _.onEpochBegin(a);let i={};if(f!=null)throw new J(`stepsPerEpoch mode is not implemented yet.`);{if(l===`batch`)throw new J(`batch shuffling is not implemneted yet`);l&&oo(g);let a=Uv(g),o=PO(h,r);for(let l=0;l<o.length;++l){let u={};if(await _.onBatchBegin(l,u),I(()=>{let d=o[l][0],f=o[l][1],p=jT(a,d,f-d);u.batch=l,u.size=f-d;let h=e(NO(t,p));for(let e=0;e<n.length;++e){let t=n[e],r=h[e];u[t]=r,Rd(r)}if(l===o.length-1&&m){let e=this.testLoop(s,c,r);for(let t=0;t<n.length;++t){let r=n[t],a=e[t];Rd(a),i[`val_`+r]=a}}}),await _.onBatchEnd(l,u),cD(u),this.stopTraining_)break}a.dispose()}if(await _.onEpochEnd(a,i),this.stopTraining_)break}return await _.onTrainEnd(),await this.history.syncData(),this.history}async fitDataset(e,t){return EO(this,e,t)}async trainOnBatch(e,t){let n=await this.standardizeUserData(e,t),r=n[0],i=n[1],a=this.makeTrainFunction()(r.concat(i)),o=[];for(let e of a){let t=await e.data();o.push(t[0])}return L(a),IO(n[0],e),IO(n[1],t),Mw(o)}getNamedWeights(e){let t=[],n=e!=null&&e.trainableOnly,r=n?this.trainableWeights:this.weights,i=this.getWeights(n);for(let e=0;e<r.length;++e)n&&!r[e].trainable||t.push({name:r[e].originalName,tensor:i[e]});return t}set stopTraining(e){this.stopTraining_=e}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(e){this.optimizer_!==e&&(this.optimizer_=e,this.isOptimizerOwned=!1)}dispose(){let e=super.dispose();if(e.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){let t=Ld().numTensors;this.optimizer_.dispose(),e.numDisposedVariables+=t-Ld().numTensors}return e}getLossIdentifiers(){let e;if(typeof this.loss==`string`)e=Pw(this.loss);else if(Array.isArray(this.loss)){for(let e of this.loss)if(typeof e!=`string`)throw Error(`Serialization of non-string loss is not supported.`);e=this.loss.map(e=>Pw(e))}else{let t=Object.keys(this.loss);e={};let n=this.loss;for(let r of t)if(typeof n[r]==`string`)e[r]=Pw(n[r]);else throw Error(`Serialization of non-string loss is not supported.`)}return e}getMetricIdentifiers(){if(typeof this.metrics==`string`||typeof this.metrics==`function`)return[Pw(tO(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(e=>Pw(tO(e)));{let e={};for(let t in this.metrics)e[t]=Pw(tO(this.metrics[t]));return e}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(e){if(e.weighted_metrics!=null)throw Error(`Loading weight_metrics is not supported yet.`);if(e.loss_weights!=null)throw Error(`Loading loss_weights is not supported yet.`);if(e.sample_weight_mode!=null)throw Error(`Loading sample_weight_mode is not supported yet.`);let t=vD(pO(e.optimizer_config)),n;if(typeof e.loss==`string`)n=Fw(e.loss);else if(Array.isArray(e.loss))n=e.loss.map(e=>Fw(e));else if(e.loss!=null){n={};for(let t in e.loss)n[t]=Fw(e.loss[t])}let r;if(Array.isArray(e.metrics))r=e.metrics.map(e=>Fw(e));else if(e.metrics!=null){r={};for(let t in e.metrics)r[t]=Fw(e.metrics[t])}this.compile({loss:n,metrics:r,optimizer:t})}async save(e,t){if(typeof e==`string`){let t=Zd(e);if(t.length===0)throw new q(`Cannot find any save handlers for URL '${e}'`);if(t.length>1)throw new q(`Found more than one (${t.length}) save handlers for URL '${e}'`);e=t[0]}if(e.save==null)throw new q("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");let n=await Hd(this.getNamedWeights(t)),r={modelTopology:this.toJSON(null,!1),format:GO,generatedBy:`TensorFlow.js tfjs-layers v${hO}`,convertedBy:null};if(t!=null&&t.includeOptimizer&&this.optimizer!=null){r.trainingConfig=this.getTrainingConfig();let{data:e,specs:t}=await Hd(await this.optimizer.getWeights(),`optimizer`);n.specs.push(...t),n.data=Jd([n.data,e])}return this.userDefinedMetadata!=null&&(iO(this.userDefinedMetadata,this.name,!0),r.userDefinedMetadata=this.userDefinedMetadata),r.weightData=n.data,r.weightSpecs=n.specs,e.save(r)}setUserDefinedMetadata(e){iO(e,this.name),this.userDefinedMetadata=e}getUserDefinedMetadata(){return this.userDefinedMetadata}};KO.className=`Model`,K(KO);var qO=class extends KO{};qO.className=`Functional`,K(qO);var JO=class e extends KO{constructor(e){if(super({inputs:[],outputs:[]}),e||={},this.trainable=!0,this.built=!1,this.name=e.name==null?$w(`sequential_`):e.name,e.layers!=null)for(let t of e.layers)this.add(t)}checkShape(e){if(e.inboundNodes[0].outputTensors[0].shape.some(e=>e<0))throw new q(`Negative dimension size caused by adding layer ${e.name} with input shape [${e.inboundNodes[0].inputTensors[0].shape}]`)}add(t){let n=t instanceof e||t instanceof KO,r;if(n){if(r=t,r.outputs.length!==1)throw new q(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);if(r.inputs.length!==1)throw new q(`All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.`)}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new q("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");let e=BE({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+`_input`});t.apply(e)}if(n)this.outputs=r.outputs,this.inputs=r.inputs;else{if(t.inboundNodes.length!==1)throw new q(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new q(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=IE(this.outputs[0])}this.inboundNodes=[],new jE({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:kw(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(e=>e.shape),outputShapes:this.outputs[0].shape})}else{let e=t.apply(this.outputs[0]);if(Array.isArray(e))throw TypeError(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);this.checkShape(t),this.outputs=[e],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw TypeError(`There are no layers in the model.`);if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{let e=this.layers.length-1;this.layers[e].outboundNodes=[],this.outputs=[this.layers[e].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(e,t){return this.model??this.build(),this.model.call(e,t)}build(e){if(xE(e),this.inputs.length===0||this.outputs.length===0)throw TypeError(`Sequential model cannot be built: model is empty. Add some layers first.`);this.model=new KO({inputs:this.inputs,outputs:this.outputs[0],name:this.name+`_model`}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(e,t,n=console.log){this.built||this.build(),super.summary(e,t,n)}setWeights(e){this.model??this.build(),this.model.setWeights(e)}evaluate(e,t,n={}){if(!this.built)throw new Ew(`The model needs to be compiled before being used.`);return this.model.evaluate(e,t,n)}async evaluateDataset(e,t){if(!this.built)throw new Ew(`The model needs to be compiled before being used.`);return this.model.evaluateDataset(e,t)}predict(e,t={}){return this.model??this.build(),this.model.predict(e,t)}predictOnBatch(e){return this.model??this.build(),this.model.predictOnBatch(e)}compile(e){this.build(),this.model.compile(e),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(e){this.model.optimizer=e}async fit(e,t,n={}){if(!this.built)throw new Ew(`The model needs to be compiled before being used.`);return this.model.fit(e,t,n)}async fitDataset(e,t){if(!this.built)throw new Ew(`The model needs to be compiled before being used.`);return this.model.fitDataset(e,t)}async trainOnBatch(e,t){return this.model.trainOnBatch(e,t)}static fromConfig(t,n,r={},i=!1){let a,o={};if(n instanceof Array){if(n[0].className==null||n[0].className===`Merge`)throw new q(`Legacy serialization format not supported yet.`);a=n}else O(n.layers!=null,()=>`When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field.`),a=n.layers,delete n.layers,o=n;let s=new t(o);if(!(s instanceof e))throw new J(`Sequential.fromConfig called on non-Sequential input: ${s}`);for(let e of a){let t=vD(e,void 0,i);i&&t.setFastWeightInitDuringBuild(!0),s.add(t)}return s}set stopTraining(e){if(this.model==null)throw new q(`Cannot set the stopTraining property of a sequential model before it is compiled.`);this.model.stopTraining=e}get stopTraining(){if(this.model==null)throw new q(`Cannot get the stopTraining property of a sequential model before it is compiled.`);return this.model.stopTraining}getConfig(){let e=[];for(let t of this.layers){let n={};n.className=t.getClassName(),n.config=t.getConfig(),e.push(n)}return{name:this.name,layers:e}}};JO.className=`Sequential`,K(JO);function YO(e){return new JO(e)}var XO=class extends Tb{getConfig(){return{}}},ZO=class extends XO{apply(e,t=1){return UT(e,t)}};ZO.className=`elu`,K(ZO);var QO=class extends XO{apply(e){return nv(e)}};QO.className=`selu`,K(QO);var $O=class extends XO{apply(e){return K_(e)}};$O.className=`relu`,K($O);var ek=class extends XO{apply(e){return I(()=>t_(6,K_(e)))}};ek.className=`relu6`,K(ek);var tk=class extends XO{apply(e){return e}};tk.className=`linear`,K(tk);var nk=class extends XO{apply(e){return Vp(e)}};nk.className=`sigmoid`,K(nk);var rk=class extends XO{apply(e){return KT(e)}};rk.className=`hardSigmoid`,K(rk);var ik=class extends XO{apply(e){return Og(e)}};ik.className=`softplus`,K(ik);var ak=class extends XO{apply(e){return WT(e)}};ak.className=`softsign`,K(ak);var ok=class extends XO{apply(e){return Gp(e)}};ok.className=`tanh`,K(ok);var sk=class extends XO{apply(e,t=-1){return bv(e,t)}};sk.className=`softmax`,K(sk);var ck=class extends XO{apply(e,t=-1){return Ng(e,t)}};ck.className=`logSoftmax`,K(ck);var lk=class extends XO{apply(e){return I(()=>I(()=>V(e,V(.5,z(1,ph(B(e,Math.sqrt(2))))))))}};lk.className=`gelu`,K(lk);var uk=class extends XO{apply(e){return I(()=>V(.5,V(e,z(1,Gp(V(Ah(B(2,Math.PI)),z(e,V(.044715,Dh(e,3)))))))))}};uk.className=`gelu_new`,K(uk);var dk=class extends XO{apply(e){return I(()=>V(e,Gp(Og(e))))}};dk.className=`mish`,K(dk);var fk=class extends XO{apply(e,t=1){return I(()=>V(Vp(V(e,t)),e))}};fk.className=`swish`,K(fk);function pk(e){return e.getClassName()}function mk(e,t={}){return zw(e,Eb.getMap().classNameMap,t,`activation`)}function hk(e){if(e==null){let e={};return e.className=`linear`,e.config={},mk(e)}if(typeof e==`string`){let t={};return t.className=e,t.config={},mk(t)}return e instanceof XO?e:mk(e)}function gk(e){if(e!=null&&typeof e!=`object`)throw Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${e}`)}var _k=class extends Tb{},vk=class extends _k{constructor(e){super(),gk(e),this.l1=e==null||e.l1==null?.01:e.l1,this.l2=e==null||e.l2==null?.01:e.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(e){return I(()=>{let t=Qg([1]);return this.hasL1&&(t=z(t,W(V(this.l1,Uf(e))))),this.hasL2&&(t=z(t,W(V(this.l2,BT(e))))),H(t,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(e,t){return new e({l1:t.l1,l2:t.l2})}};vk.className=`L1L2`,K(vk);function yk(e){return gk(e),new vk({l1:e==null?null:e.l1,l2:0})}function bk(e){return gk(e),new vk({l2:e==null?null:e.l2,l1:0})}var xk={l1l2:`L1L2`};function Sk(e){return Lw(e)}function Ck(e,t={}){return zw(e,Eb.getMap().classNameMap,t,`regularizer`)}function wk(e){return e==null?null:typeof e==`string`?Ck({className:e in xk?xk[e]:e,config:{}}):e instanceof _k?e:Ck(e)}var Tk=class extends NE{constructor(e){super(e??{}),this.supportsMasking=!0,e!=null&&(this.maxValue=e.maxValue)}call(e,t){e=Y(e);let n=K_(e);return this.maxValue!=null&&(n=dm(n,0,this.maxValue)),n}computeOutputShape(e){return e}getConfig(){let e={maxValue:this.maxValue},t=super.getConfig();return Object.assign(e,t),e}};Tk.className=`ReLU`,K(Tk);var Ek=class extends NE{constructor(e){super(e??{}),this.DEFAULT_ALPHA=.3,e??={},this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,t){return fg(Y(e),this.alpha)}computeOutputShape(e){return e}getConfig(){let e={alpha:this.alpha},t=super.getConfig();return Object.assign(e,t),e}};Ek.className=`LeakyReLU`,K(Ek);var Dk=class extends NE{constructor(e){if(super(e??{}),this.DEFAULT_ALPHA_INITIALIZER=`zeros`,e??={},this.supportsMasking=!0,this.alphaInitializer=vE(e.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=wk(e.alphaRegularizer),this.alphaConstraint=oD(e.alphaConstraint),e.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(e.sharedAxes))this.sharedAxes=e.sharedAxes;else if(typeof e.sharedAxes==`number`)this.sharedAxes=[e.sharedAxes];else throw new q(`Expected sharedAxes to be a number or an array of numbers, but got ${e.sharedAxes}`)}build(e){e=xE(e);let t=e.slice(1);if(this.sharedAxes!=null)for(let e of this.sharedAxes)t[e-1]=1;this.alpha=this.addWeight(`alpha`,t,`float32`,this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);let n={};if(this.sharedAxes!=null)for(let t=1;t<e.length;++t)n[t]=e[t];this.inputSpec=[new OE({ndim:e.length,axes:n})],this.built=!0}call(e,t){return e=Y(e),C_(e,this.alpha.read())}getConfig(){let e={alphaInitializer:_E(this.alphaInitializer),alphaRegularizer:Sk(this.alphaRegularizer),alphaConstraint:iD(this.alphaConstraint),sharedAxes:this.sharedAxes},t=super.getConfig();return Object.assign(e,t),e}};Dk.className=`PReLU`,K(Dk);var Ok=class extends NE{constructor(e){if(super(e??{}),this.DEFAULT_ALPHA=1,e??={},e.alpha!=null&&e.alpha!==this.DEFAULT_ALPHA)throw new J(`Non-default alpha value (${e.alpha}) is not supported by the ELU layer yet.`);this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,t){return dh(Y(e))}computeOutputShape(e){return e}getConfig(){let e={alpha:this.alpha},t=super.getConfig();return Object.assign(e,t),e}};Ok.className=`ELU`,K(Ok);var kk=class extends NE{constructor(e){super(e??{}),this.DEFAULT_THETA=1,e??={},this.theta=e.theta==null?this.DEFAULT_THETA:e.theta}call(e,t){let n=Y(e);return V(n,R(eg(n,this.theta),`float32`))}computeOutputShape(e){return e}getConfig(){let e={theta:this.theta},t=super.getConfig();return Object.assign(e,t),e}};kk.className=`ThresholdedReLU`,K(kk);var Ak=class extends NE{constructor(e){super(e??{}),this.DEFAULT_AXIS=1,e??={},this.softmax=new sk().apply,this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis}call(e,t){return I(()=>{let n=Y(e),r=t.mask;if(r!=null){let e=V(G($g(n.shape),R(r,n.dtype)),Oh(-1e9));n=z(n,e)}return this.axis instanceof Array?this.axis.length>1?Bh(G(n,Fg(n,this.axis,!0))):this.softmax(n,this.axis[0]):this.softmax(n,this.axis)})}computeOutputShape(e){return e}getConfig(){let e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}};Ak.className=`Softmax`,K(Ak);function jk(e,t,n){if(typeof e==`number`)return kw(e,t);if(e.length!==t)throw new q(`The ${n} argument must be an integer or tuple of ${t} integers. Received: ${e.length} elements.`);for(let r=0;r<t;++r){let i=e[r];if(!vT(i))throw new q(`The ${n} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(e)} including a non-integer number ${i}`)}return e}function Mk(e,t,n,r,i=1){if(e==null)return e;let a=t+(t-1)*(i-1),o;return o=n===`same`?e:e-a+1,Math.floor((o+r-1)/r)}function Nk(e,t,n,r){if(e==null)return null;if(r===`valid`)e=e*t+xT([n-t,0]);else if(r===`same`)e*=t;else throw new q(`Unsupport padding mode: ${r}.`);return e}function Pk(e,t){return I(()=>(oT(t),t===`channelsFirst`?sy(e,[0,2,3,1]):e))}function Fk(e,t){return I(()=>(oT(t),t===`channelsFirst`?sy(e,[0,2,3,4,1]):e))}function Ik(e,t,n,r=1,i=`valid`,a,o=1){return I(()=>{if(a??=TT(),oT(a),e.shape.length!==3)throw new q(`The input of a conv1dWithBias operation should be 3, but is ${e.shape.length} instead.`);if(t.shape.length!==3)throw new q(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(n!=null&&n.shape.length!==1)throw new q(`The bias for a conv1dWithBias operation should be 1, but is ${n.shape.length} instead`);if(a===`channelsFirst`&&(e=sy(e,[0,2,1])),i===`causal`)throw new J(`The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.`);let s=Cm(e,t,r,i===`same`?`same`:`valid`,`NWC`,o);return n!=null&&(s=HT(s,n)),s})}function Lk(e,t,n,r=[1,1],i=`valid`,a,o,s=null){return I(()=>{if(a??=TT(),oT(a),e.rank!==3&&e.rank!==4)throw new q(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${e.rank}.`);if(t.rank!==3&&t.rank!==4)throw new q(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${e.rank}.`);let c=Pk(e,a);if(i===`causal`)throw new J(`The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.`);return c=vy({x:c,filter:t,strides:r,pad:i===`same`?`same`:`valid`,dilations:o,dataFormat:`NHWC`,bias:n,activation:s}),a===`channelsFirst`&&(c=sy(c,[0,3,1,2])),c})}function Rk(e,t,n,r=[1,1,1],i=`valid`,a,o){return I(()=>{if(a??=TT(),oT(a),e.rank!==4&&e.rank!==5)throw new q(`conv3dWithBias expects input to be of rank 4 or 5, but received ${e.rank}.`);if(t.rank!==4&&t.rank!==5)throw new q(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${e.rank}.`);let s=Fk(e,a);if(i===`causal`)throw new J(`The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.`);return s=km(s,t,r,i===`same`?`same`:`valid`,`NDHWC`,o),n!=null&&(s=HT(s,n)),a===`channelsFirst`&&(s=sy(s,[0,4,1,2,3])),s})}var zk=class e extends NE{constructor(t,n){if(super(n),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.verifyArgs(n),this.rank=t,Kw(this.rank,`rank`),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new J(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=jk(n.kernelSize,t,`kernelSize`),this.strides=jk(n.strides==null?1:n.strides,t,`strides`),this.padding=n.padding==null?`valid`:n.padding,cT(this.padding),this.dataFormat=n.dataFormat==null?`channelsLast`:n.dataFormat,oT(this.dataFormat),this.activation=hk(n.activation),this.useBias=n.useBias==null||n.useBias,this.biasInitializer=vE(n.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=oD(n.biasConstraint),this.biasRegularizer=wk(n.biasRegularizer),this.activityRegularizer=wk(n.activityRegularizer),this.dilationRate=jk(n.dilationRate==null?1:n.dilationRate,t,`dilationRate`),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new q(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate==`number`)this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new q(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate==`number`)this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new q(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(e){if(Aw(`kernelSize`in e,`required key 'kernelSize' not in config`),typeof e.kernelSize!=`number`&&!Gw(e.kernelSize,`number`,1,3))throw new q(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(e.kernelSize)}.`)}getConfig(){let e={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:pk(this.activation),useBias:this.useBias,biasInitializer:_E(this.biasInitializer),biasRegularizer:Sk(this.biasRegularizer),activityRegularizer:Sk(this.activityRegularizer),biasConstraint:iD(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}},Bk=class e extends zk{constructor(t,n){super(t,n),this.kernel=null,e.verifyArgs(n),this.filters=n.filters,Kw(this.filters,`filters`),this.kernelInitializer=vE(n.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=oD(n.kernelConstraint),this.kernelRegularizer=wk(n.kernelRegularizer)}build(e){e=xE(e);let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new q(`The channel dimension of the input should be defined. Found ${e[t]}`);let n=e[t],r=this.kernelSize.concat([n,this.filters]);this.kernel=this.addWeight(`kernel`,r,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[t]:n}}],this.built=!0}call(e,t){return I(()=>{e=Y(e);let t,n=this.bias==null?null:this.bias.read(),r=Yw(this.activation.getClassName());if(r!=null&&this.rank===2)t=Lk(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate,r);else{if(this.rank===1)t=Ik(e,this.kernel.read(),n,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)t=Lk(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)t=Rk(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new J(`convolutions greater than 3D are not implemented yet.`);this.activation!=null&&(t=this.activation.apply(t))}return t})}computeOutputShape(e){e=xE(e);let t=[],n=this.dataFormat===`channelsLast`?e.slice(1,e.length-1):e.slice(2);for(let e=0;e<n.length;++e){let r=Mk(n[e],this.kernelSize[e],this.padding,this.strides[e],typeof this.dilationRate==`number`?this.dilationRate:this.dilationRate[e]);t.push(r)}let r=[e[0]];return this.dataFormat===`channelsLast`?(r=r.concat(t),r.push(this.filters)):(r.push(this.filters),r=r.concat(t)),r}getConfig(){let e={filters:this.filters,kernelInitializer:_E(this.kernelInitializer),kernelRegularizer:Sk(this.kernelRegularizer),kernelConstraint:iD(this.kernelConstraint)},t=super.getConfig();return Object.assign(e,t),e}static verifyArgs(e){if(!(`filters`in e)||typeof e.filters!=`number`||e.filters<1)throw new q(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(e.filters)}`)}},Vk=class e extends Bk{constructor(t){super(2,t),e.verifyArgs(t)}getConfig(){let e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&!Gw(e.kernelSize,`number`,1,2))throw new q(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(e.kernelSize)}.`)}};Vk.className=`Conv2D`,K(Vk);var Hk=class e extends Bk{constructor(t){super(3,t),e.verifyArgs(t)}getConfig(){let e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&!(Array.isArray(e.kernelSize)&&(e.kernelSize.length===1||e.kernelSize.length===3)))throw new q(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(e.kernelSize)}.`)}};Hk.className=`Conv3D`,K(Hk);var Uk=class extends Vk{constructor(e){if(super(e),this.inputSpec=[new OE({ndim:4})],this.padding!==`same`&&this.padding!==`valid`)throw new q(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=xE(e),e.length!==4)throw new q(`Input should have rank 4; Received input shape: `+JSON.stringify(e));let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new q("The channel dimension of the inputs should be defined. Found `None`.");let n=e[t],r=this.kernelSize.concat([this.filters,n]);this.kernel=this.addWeight(`kernel`,r,`float32`,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new OE({ndim:4,axes:{[t]:n}})],this.built=!0}call(e,t){return I(()=>{let t=Y(e);if(t.shape.length!==4)throw new q(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${t.shape.length}`);let n=t.shape,r=n[0],i,a;this.dataFormat===`channelsFirst`?(i=2,a=3):(i=1,a=2);let o=n[i],s=n[a],c=this.kernelSize[0],l=this.kernelSize[1],u=this.strides[0],d=this.strides[1],f=[r,Nk(o,u,c,this.padding),Nk(s,d,l,this.padding),this.filters];this.dataFormat!==`channelsLast`&&(t=sy(t,[0,2,3,1]));let p=Dm(t,this.kernel.read(),f,this.strides,this.padding);return this.dataFormat!==`channelsLast`&&(p=sy(p,[0,3,1,2])),this.bias!=null&&(p=HT(p,this.bias.read(),this.dataFormat)),this.activation!=null&&(p=this.activation.apply(p)),p})}computeOutputShape(e){e=xE(e);let t=e.slice(),n,r,i;this.dataFormat===`channelsFirst`?(n=1,r=2,i=3):(n=3,r=1,i=2);let a=this.kernelSize[0],o=this.kernelSize[1],s=this.strides[0],c=this.strides[1];return t[n]=this.filters,t[r]=Nk(t[r],s,a,this.padding),t[i]=Nk(t[i],c,o,this.padding),t}getConfig(){let e=super.getConfig();return delete e.dilationRate,e}};Uk.className=`Conv2DTranspose`,K(Uk);var Wk=class extends Hk{constructor(e){if(super(e),this.inputSpec=[new OE({ndim:5})],this.padding!==`same`&&this.padding!==`valid`)throw new q(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=xE(e),e.length!==5)throw new q(`Input should have rank 5; Received input shape: `+JSON.stringify(e));let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new q("The channel dimension of the inputs should be defined. Found `None`.");let n=e[t],r=this.kernelSize.concat([this.filters,n]);this.kernel=this.addWeight(`kernel`,r,`float32`,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new OE({ndim:5,axes:{[t]:n}})],this.built=!0}call(e,t){return I(()=>{let t=Y(e);if(t.shape.length!==5)throw new q(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${t.shape.length}`);let n=t.shape,r=n[0],i,a,o;this.dataFormat===`channelsFirst`?(o=2,i=3,a=4):(o=1,i=2,a=3);let s=n[o],c=n[i],l=n[a],u=this.kernelSize[0],d=this.kernelSize[1],f=this.kernelSize[2],p=this.strides[0],m=this.strides[1],h=this.strides[2],g=[r,Nk(s,p,u,this.padding),Nk(c,m,d,this.padding),Nk(l,h,f,this.padding),this.filters];this.dataFormat!==`channelsLast`&&(t=sy(t,[0,2,3,4,1]));let _=Nm(t,this.kernel.read(),g,this.strides,this.padding);return this.dataFormat!==`channelsLast`&&(_=sy(_,[0,4,1,2,3])),this.bias!==null&&(_=HT(_,this.bias.read(),this.dataFormat)),this.activation!==null&&(_=this.activation.apply(_)),_})}computeOutputShape(e){e=xE(e);let t=e.slice(),n,r,i,a;this.dataFormat===`channelsFirst`?(n=1,r=2,i=3,a=4):(n=4,r=1,i=2,a=3);let o=this.kernelSize[0],s=this.kernelSize[1],c=this.kernelSize[2],l=this.strides[0],u=this.strides[1],d=this.strides[2];return t[n]=this.filters,t[r]=Nk(t[r],l,o,this.padding),t[i]=Nk(t[i],u,s,this.padding),t[a]=Nk(t[a],d,c,this.padding),t}getConfig(){let e=super.getConfig();return delete e.dilationRate,e}};Wk.className=`Conv3DTranspose`,K(Wk);var Gk=class extends Bk{constructor(e,t){if(super(e,t),this.DEFAULT_DEPTHWISE_INITIALIZER=`glorotUniform`,this.DEFAULT_POINTWISE_INITIALIZER=`glorotUniform`,this.depthwiseKernel=null,this.pointwiseKernel=null,t.filters==null)throw new q("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(t.kernelInitializer!=null||t.kernelRegularizer!=null||t.kernelConstraint!=null)throw new q(`Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.`);if(t.padding!=null&&t.padding!==`same`&&t.padding!==`valid`)throw new q(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(t.padding)}`);this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=vE(t.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=wk(t.depthwiseRegularizer),this.depthwiseConstraint=oD(t.depthwiseConstraint),this.pointwiseInitializer=vE(t.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=wk(t.pointwiseRegularizer),this.pointwiseConstraint=oD(t.pointwiseConstraint)}build(e){if(e=xE(e),e.length<this.rank+2)throw new q(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(e)}`);let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null||e[t]<0)throw new q(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(e[t])}`);let n=e[t],r=this.kernelSize.concat([n,this.depthMultiplier]),i=[];for(let e=0;e<this.rank;++e)i.push(1);i.push(n*this.depthMultiplier,this.filters),this.depthwiseKernel=this.addWeight(`depthwise_kernel`,r,`float32`,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight(`pointwise_kernel`,i,`float32`,this.pointwiseInitializer,this.pointwiseRegularizer,!0,this.pointwiseConstraint),this.bias=this.useBias?this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):null,this.inputSpec=[new OE({ndim:this.rank+2,axes:{[t]:n}})],this.built=!0}call(e,t){return I(()=>{e=Y(e);let t;if(this.rank===1)throw new J(`1D separable convolution is not implemented yet.`);return this.rank===2&&(this.dataFormat===`channelsFirst`&&(e=sy(e,[0,2,3,1])),t=iv(e,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,`NHWC`)),this.useBias&&(t=HT(t,this.bias.read(),this.dataFormat)),this.activation!=null&&(t=this.activation.apply(t)),this.dataFormat===`channelsFirst`&&(t=sy(t,[0,3,1,2])),t})}getConfig(){let e=super.getConfig();return delete e.rank,delete e.kernelInitializer,delete e.kernelRegularizer,delete e.kernelConstraint,e.depthwiseInitializer=_E(this.depthwiseInitializer),e.pointwiseInitializer=_E(this.pointwiseInitializer),e.depthwiseRegularizer=Sk(this.depthwiseRegularizer),e.pointwiseRegularizer=Sk(this.pointwiseRegularizer),e.depthwiseConstraint=iD(this.depthwiseConstraint),e.pointwiseConstraint=iD(this.pointwiseConstraint),e}};Gk.className=`SeparableConv`;var Kk=class extends Gk{constructor(e){super(2,e)}};Kk.className=`SeparableConv2D`,K(Kk);var qk=class e extends Bk{constructor(t){super(1,t),e.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){let e=super.getConfig();return delete e.rank,delete e.dataFormat,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&!Gw(e.kernelSize,`number`,1,1))throw new q(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(e.kernelSize)}.`)}};qk.className=`Conv1D`,K(qk);var Jk=class extends NE{constructor(e){super(e),this.cropping=typeof e.cropping==`number`?[[e.cropping,e.cropping],[e.cropping,e.cropping]]:typeof e.cropping[0]==`number`?[[e.cropping[0],e.cropping[0]],[e.cropping[1],e.cropping[1]]]:e.cropping,this.dataFormat=e.dataFormat===void 0?`channelsLast`:e.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(e){return this.dataFormat===`channelsFirst`?[e[0],e[1],e[2]-this.cropping[0][0]-this.cropping[0][1],e[3]-this.cropping[1][0]-this.cropping[1][1]]:[e[0],e[1]-this.cropping[0][0]-this.cropping[0][1],e[2]-this.cropping[1][0]-this.cropping[1][1],e[3]]}call(e,t){return I(()=>(e=Y(e),this.dataFormat===`channelsLast`?NT(NT(e,this.cropping[0][0],e.shape[1]-this.cropping[0][0]-this.cropping[0][1],2),this.cropping[1][0],e.shape[2]-this.cropping[1][1]-this.cropping[1][0],3):NT(NT(e,this.cropping[0][0],e.shape[2]-this.cropping[0][0]-this.cropping[0][1],3),this.cropping[1][0],e.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)))}getConfig(){let e={cropping:this.cropping,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}};Jk.className=`Cropping2D`,K(Jk);var Yk=class extends NE{constructor(e){super(e),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=e.size==null?this.DEFAULT_SIZE:e.size,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,oT(this.dataFormat),this.interpolation=e.interpolation==null?`nearest`:e.interpolation,sT(this.interpolation)}computeOutputShape(e){if(this.dataFormat===`channelsFirst`){let t=e[2]==null?null:this.size[0]*e[2],n=e[3]==null?null:this.size[1]*e[3];return[e[0],e[1],t,n]}{let t=e[1]==null?null:this.size[0]*e[1],n=e[2]==null?null:this.size[1]*e[2];return[e[0],t,n,e[3]]}}call(e,t){return I(()=>{let t=Y(e),n=t.shape;if(this.dataFormat===`channelsFirst`){t=sy(t,[0,2,3,1]);let e=this.size[0]*n[2],r=this.size[1]*n[3];return sy(this.interpolation===`nearest`?xb.resizeNearestNeighbor(t,[e,r]):xb.resizeBilinear(t,[e,r]),[0,3,1,2])}{let e=this.size[0]*n[1],r=this.size[1]*n[2];return this.interpolation===`nearest`?xb.resizeNearestNeighbor(t,[e,r]):xb.resizeBilinear(t,[e,r])}})}getConfig(){let e={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},t=super.getConfig();return Object.assign(e,t),e}};Yk.className=`UpSampling2D`,K(Yk);function Xk(e,t,n=[1,1],r=`valid`,i,a){return I(()=>{i??=TT(),oT(i);let o=Pk(e,i);if(e.rank!==4)throw new q(`Input for depthwiseConv2d is required to be 4-D, but is instead ${e.rank}-D`);if(t.rank!==4)throw new q(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return o=qm(o,t,n,r===`same`?`same`:`valid`,`NHWC`,a),i===`channelsFirst`&&(o=sy(o,[0,3,1,2])),o})}var Zk=class extends zk{constructor(e){super(2,e),this.depthwiseKernel=null,this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=vE(e.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=oD(e.depthwiseConstraint),this.depthwiseRegularizer=wk(e.depthwiseRegularizer)}build(e){if(e=xE(e),e.length<4)throw new q(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(e)}.`);let t=this.dataFormat===`channelsFirst`?1:3;if(e[t]==null||e[t]<0)throw new q(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${e[t]}).`);let n=e[t],r=[this.kernelSize[0],this.kernelSize[1],n,this.depthMultiplier];this.depthwiseKernel=this.addWeight(`depthwise_kernel`,r,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.bias=this.useBias?this.addWeight(`bias`,[n*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):null,this.built=!0}call(e,t){return I(()=>{e=Y(e);let t=Xk(e,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(t=HT(t,this.bias.read(),this.dataFormat)),this.activation!=null&&(t=this.activation.apply(t)),t})}computeOutputShape(e){e=xE(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2],r=this.dataFormat===`channelsFirst`?e[1]*this.depthMultiplier:e[3]*this.depthMultiplier,i=Mk(t,this.kernelSize[0],this.padding,this.strides[0]),a=Mk(n,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat===`channelsFirst`?[e[0],r,i,a]:[e[0],i,a,r]}getConfig(){let e=super.getConfig();return e.depthMultiplier=this.depthMultiplier,e.depthwiseInitializer=_E(this.depthwiseInitializer),e.depthwiseRegularizer=Sk(this.depthwiseRegularizer),e.depthwiseConstraint=iD(this.depthwiseRegularizer),e}};Zk.className=`DepthwiseConv2D`,K(Zk);function Qk(e,t,n,r){if(Array.isArray(e)){if(t!=null||n!=null)throw new q(`When inputs is an array, neither initialState or constants should be provided`);r!=null&&(n=e.slice(e.length-r,e.length),e=e.slice(0,e.length-r)),e.length>1&&(t=e.slice(1,e.length)),e=e[0]}function i(e){return e==null||Array.isArray(e)?e:[e]}return t=i(t),n=i(n),{inputs:e,initialState:t,constants:n}}function $k(e,t,n,r=!1,i,a,o=!1,s=!1){return I(()=>{let c=t.shape.length;if(c<3)throw new q(`Input should be at least 3D, but is ${c}D.`);let l=[1,0].concat(ST(2,c));if(t=sy(t,l),a!=null)throw new J(`The rnn() functoin of the deeplearn.js backend does not support constants yet.`);o&&console.warn(`Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend.`),i!=null&&(i=R(R(i,`bool`),`float32`),i.rank===c-1&&(i=Hh(i,-1)),i=sy(i,l)),r&&(t=X_(t,0),i!=null&&(i=X_(i,0)));let u=[],d,f=n,p=t.shape[0],m=ry(t),h;i!=null&&(h=ry(i));for(let t=0;t<p;++t){let n=m[t],r=I(()=>e(n,f));if(i==null)d=r[0],f=r[1];else{let e=I(()=>{let e=h[t],n=G(p_(e),e);return{output:z(V(r[0],e),V(f[0],n)),newStates:f.map((t,i)=>z(V(r[1][i],e),V(t,n)))}});d=e.output,f=e.newStates}s&&u.push(d)}let g;return s&&(g=Iv(u,1)),[d,g,f]})}var eA=class e extends NE{constructor(e){super(e);let t;if(e.cell==null)throw new q(`cell property is missing for the constructor of RNN.`);if(t=Array.isArray(e.cell)?new cA({cells:e.cell}):e.cell,t.stateSize==null)throw new q("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=t,this.returnSequences=e.returnSequences!=null&&e.returnSequences,this.returnState=e.returnState!=null&&e.returnState,this.goBackwards=e.goBackwards!=null&&e.goBackwards,this._stateful=e.stateful!=null&&e.stateful,this.unroll=e.unroll!=null&&e.unroll,this.supportsMasking=!0,this.inputSpec=[new OE({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){return this.states_==null?ST(0,Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1).map(e=>null):this.states_}setStates(e){this.states_=e}computeOutputShape(e){yE(e)&&(e=e[0]),e=e;let t=this.cell.stateSize;Array.isArray(t)||(t=[t]);let n=t[0],r;if(r=this.returnSequences?[e[0],e[1],n]:[e[0],n],this.returnState){let n=[];for(let r of t)n.push([e[0],r]);return[r].concat(n)}return r}computeMask(e,t){return I(()=>{Array.isArray(t)&&(t=t[0]);let e=this.returnSequences?t:null;if(this.returnState){let t=this.states.map(e=>null);return[e].concat(t)}return e})}get states(){if(this.states_==null){let e=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,t=[];for(let n=0;n<e;++n)t.push(null);return t}return this.states_}set states(e){this.states_=e}build(e){if(this.numConstants!=null)throw new J(`Constants support is not implemented in RNN yet.`);yE(e)&&(e=e[0]),e=e;let t=this.stateful?e[0]:null,n=e.slice(2);this.inputSpec[0]=new OE({shape:[t,null,...n]});let r=[e[0]].concat(e.slice(2));this.cell.build(r);let i;if(i=Array.isArray(this.cell.stateSize)?this.cell.stateSize:[this.cell.stateSize],this.stateSpec!=null){if(!mo(this.stateSpec.map(e=>e.shape[e.shape.length-1]),i))throw new q(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=i.map(e=>new OE({shape:[null,e]}));this.stateful&&this.resetStates()}resetStates(e,t=!1){I(()=>{if(!this.stateful)throw new Tw(`Cannot call resetStates() on an RNN Layer that is not stateful.`);let n=this.inputSpec[0].shape[0];if(n==null)throw new q("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)this.states_=Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(e=>Qg([n,e])):[Qg([n,this.cell.stateSize])];else if(e==null)L(this.states_),this.keptStates!=null&&(L(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(e=>Qg([n,e])):this.states_[0]=Qg([n,this.cell.stateSize]);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new q(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t===!0?this.keptStates.push(this.states_.slice()):L(this.states_);for(let t=0;t<this.states_.length;++t){let r=e[t],i=[n,Array.isArray(this.cell.stateSize)?this.cell.stateSize[t]:this.cell.stateSize];if(!mo(r.shape,i))throw new q(`State ${t} is incompatible with layer ${this.name}: expected shape=${i}, received shape=${r.shape}`);this.states_[t]=r}}this.states_=this.states_.map(e=>Rd(e.clone()))})}apply(e,t){let n=t==null?null:t.initialState,r=t==null?null:t.constants;t??={};let i=Qk(e,n,r,this.numConstants);e=i.inputs,n=i.initialState,r=i.constants;let a=[],o=[];if(n!=null){t.initialState=n,a=a.concat(n),this.stateSpec=[];for(let e of n)this.stateSpec.push(new OE({shape:e.shape}));o=o.concat(this.stateSpec)}if(r!=null&&(t.constants=r,a=a.concat(r),this.numConstants=r.length),a[0]instanceof kE){let n=[e].concat(a),r=this.inputSpec.concat(o),i=this.inputSpec;this.inputSpec=r;let s=super.apply(n,t);return this.inputSpec=i,s}return super.apply(e,t)}call(e,t){return I(()=>{let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;e=Y(e),i??=this.stateful?this.states_:this.getInitialState(e);let a=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(i.length!==a)throw new q(`RNN Layer has ${a} state(s) but was passed ${i.length} initial state(s).`);this.unroll&&console.warn(`Ignoring unroll = true for RNN layer, due to imperative backend.`);let o={training:r},s=$k((e,t)=>{let n=this.cell.call([e].concat(t),o);return[n[0],n.slice(1)]},e,i,this.goBackwards,n,null,this.unroll,this.returnSequences),c=s[0],l=s[1],u=s[2];this.stateful&&this.resetStates(u,r);let d=this.returnSequences?l:c;return this.returnState?[d].concat(u):d})}getInitialState(e){return I(()=>{let t=Qg(e.shape);return t=W(t,[1,2]),t=DT(t),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(e=>e>1?IT(t,[1,e]):t):this.cell.stateSize>1?[IT(t,[1,this.cell.stateSize])]:[t]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(e)}getConfig(){let t=super.getConfig(),n={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(n.numConstants=this.numConstants);let r=this.cell.getConfig();return this.getClassName()===e.className&&(n.cell={className:this.cell.getClassName(),config:r}),Object.assign(Object.assign(Object.assign({},r),t),n)}static fromConfig(e,t,n={}){let r=t.cell,i=vD(r,n);return new e(Object.assign(t,{cell:i}))}};eA.className=`RNN`,K(eA);var tA=class extends NE{},nA=class extends tA{constructor(e){super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,this.units=e.units,Kw(this.units,`units`),this.activation=hk(e.activation==null?this.DEFAULT_ACTIVATION:e.activation),this.useBias=e.useBias==null||e.useBias,this.kernelInitializer=vE(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=vE(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=vE(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=wk(e.kernelRegularizer),this.recurrentRegularizer=wk(e.recurrentRegularizer),this.biasRegularizer=wk(e.biasRegularizer),this.kernelConstraint=oD(e.kernelConstraint),this.recurrentConstraint=oD(e.recurrentConstraint),this.biasConstraint=oD(e.biasConstraint),this.dropout=bT([1,xT([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=bT([1,xT([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=xE(e),this.kernel=this.addWeight(`kernel`,[e[e.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.bias=this.useBias?this.addWeight(`bias`,[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):null,this.built=!0}call(e,t){return I(()=>{if(e=e,e.length!==2)throw new q(`SimpleRNNCell expects 2 input Tensors, got ${e.length}.`);let n=e[1];e=e[0];let r=t.training!=null&&t.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=lA({ones:()=>p_(e),rate:this.dropout,training:r,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=lA({ones:()=>p_(n),rate:this.recurrentDropout,training:r,dropoutFunc:this.dropoutFunc}));let i,a=this.dropoutMask,o=this.recurrentDropoutMask;i=RT(a==null?e:V(e,a),this.kernel.read()),this.bias!=null&&(i=HT(i,this.bias.read())),o!=null&&(n=V(n,o));let s=z(i,RT(n,this.recurrentKernel.read()));return this.activation!=null&&(s=this.activation.apply(s)),[s,s]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:pk(this.activation),useBias:this.useBias,kernelInitializer:_E(this.kernelInitializer),recurrentInitializer:_E(this.recurrentInitializer),biasInitializer:_E(this.biasInitializer),kernelRegularizer:Sk(this.kernelRegularizer),recurrentRegularizer:Sk(this.recurrentRegularizer),biasRegularizer:Sk(this.biasRegularizer),activityRegularizer:Sk(this.activityRegularizer),kernelConstraint:iD(this.kernelConstraint),recurrentConstraint:iD(this.recurrentConstraint),biasConstraint:iD(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},e),t)}};nA.className=`SimpleRNNCell`,K(nA);var rA=class extends eA{constructor(e){e.cell=new nA(e),super(e)}call(e,t){return I(()=>{this.cell.dropoutMask!=null&&(L(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(L(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return new e(t)}};rA.className=`SimpleRNN`,K(rA);var iA=class extends tA{constructor(e){if(super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_RECURRENT_ACTIVATION=`hardSigmoid`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.resetAfter)throw new q(`GRUCell does not support reset_after parameter set to true.`);this.units=e.units,Kw(this.units,`units`),this.activation=hk(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=hk(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null||e.useBias,this.kernelInitializer=vE(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=vE(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=vE(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=wk(e.kernelRegularizer),this.recurrentRegularizer=wk(e.recurrentRegularizer),this.biasRegularizer=wk(e.biasRegularizer),this.kernelConstraint=oD(e.kernelConstraint),this.recurrentConstraint=oD(e.recurrentConstraint),this.biasConstraint=oD(e.biasConstraint),this.dropout=bT([1,xT([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=bT([1,xT([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=xE(e);let t=e[e.length-1];this.kernel=this.addWeight(`kernel`,[t,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.bias=this.useBias?this.addWeight(`bias`,[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):null,this.built=!0}call(e,t){return I(()=>{if(e=e,e.length!==2)throw new q(`GRUCell expects 2 input Tensors (inputs, h, c), got ${e.length}.`);let n=t.training!=null&&t.training,r=e[1];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=lA({ones:()=>p_(e),rate:this.dropout,training:n,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=lA({ones:()=>p_(r),rate:this.recurrentDropout,training:n,count:3,dropoutFunc:this.dropoutFunc}));let i=this.dropoutMask,a=this.recurrentDropoutMask,o,s,c;0<this.dropout&&this.dropout<1&&(e=V(e,i[0]));let l=RT(e,this.kernel.read());this.useBias&&(l=HT(l,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(r=V(r,a[0]));let u=this.recurrentKernel.read(),[d,f]=Ov(u,[2*this.units,this.units],u.rank-1),p=RT(r,d),[m,h,g]=Ov(l,3,l.rank-1),[_,v]=Ov(p,2,p.rank-1);o=this.recurrentActivation.apply(z(m,_)),s=this.recurrentActivation.apply(z(h,v));let y=RT(V(s,r),f);c=this.activation.apply(z(g,y));let b=z(V(o,r),V(z(1,Eg(o)),c));return[b,b]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:pk(this.activation),recurrentActivation:pk(this.recurrentActivation),useBias:this.useBias,kernelInitializer:_E(this.kernelInitializer),recurrentInitializer:_E(this.recurrentInitializer),biasInitializer:_E(this.biasInitializer),kernelRegularizer:Sk(this.kernelRegularizer),recurrentRegularizer:Sk(this.recurrentRegularizer),biasRegularizer:Sk(this.biasRegularizer),activityRegularizer:Sk(this.activityRegularizer),kernelConstraint:iD(this.kernelConstraint),recurrentConstraint:iD(this.recurrentConstraint),biasConstraint:iD(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},e),t)}};iA.className=`GRUCell`,K(iA);var aA=class extends eA{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new iA(e),super(e)}call(e,t){return I(()=>{this.cell.dropoutMask!=null&&(L(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(L(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return t.implmentation===0&&(t.implementation=1),new e(t)}};aA.className=`GRU`,K(aA);var oA=class extends tA{constructor(e){super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_RECURRENT_ACTIVATION=`hardSigmoid`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,this.units=e.units,Kw(this.units,`units`),this.activation=hk(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=hk(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null||e.useBias,this.kernelInitializer=vE(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=vE(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=vE(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=e.unitForgetBias,this.kernelRegularizer=wk(e.kernelRegularizer),this.recurrentRegularizer=wk(e.recurrentRegularizer),this.biasRegularizer=wk(e.biasRegularizer),this.kernelConstraint=oD(e.kernelConstraint),this.recurrentConstraint=oD(e.recurrentConstraint),this.biasConstraint=oD(e.biasConstraint),this.dropout=bT([1,xT([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=bT([1,xT([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){var t;e=xE(e);let n=e[e.length-1];this.kernel=this.addWeight(`kernel`,[n,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let r;if(this.useBias){if(this.unitForgetBias){let e=this.biasInitializer,n=this.units;r=new(t=class extends QT{apply(t,r){let i=e.apply([n]),a=new eE().apply([n]),o=e.apply([n*2]);return FT(FT(i,a),o)}},t.className=`CustomInit`,t)}else r=this.biasInitializer;this.bias=this.addWeight(`bias`,[this.units*4],null,r,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(e,t){return I(()=>{let n=t.training!=null&&t.training;if(e=e,e.length!==3)throw new q(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);let r=e[1],i=e[2];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=lA({ones:()=>p_(e),rate:this.dropout,training:n,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=lA({ones:()=>p_(r),rate:this.recurrentDropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let a=this.dropoutMask,o=this.recurrentDropoutMask,s,c,l,u;0<this.dropout&&this.dropout<1&&(e=V(e,a[0]));let d=RT(e,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(r=V(r,o[0])),d=z(d,RT(r,this.recurrentKernel.read())),this.useBias&&(d=HT(d,this.bias.read()));let[f,p,m,h]=Ov(d,4,d.rank-1);s=this.recurrentActivation.apply(f),c=this.recurrentActivation.apply(p),l=z(V(c,i),V(s,this.activation.apply(m))),u=this.recurrentActivation.apply(h);let g=V(u,this.activation.apply(l));return[g,g,l]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:pk(this.activation),recurrentActivation:pk(this.recurrentActivation),useBias:this.useBias,kernelInitializer:_E(this.kernelInitializer),recurrentInitializer:_E(this.recurrentInitializer),biasInitializer:_E(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:Sk(this.kernelRegularizer),recurrentRegularizer:Sk(this.recurrentRegularizer),biasRegularizer:Sk(this.biasRegularizer),activityRegularizer:Sk(this.activityRegularizer),kernelConstraint:iD(this.kernelConstraint),recurrentConstraint:iD(this.recurrentConstraint),biasConstraint:iD(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},e),t)}};oA.className=`LSTMCell`,K(oA);var sA=class extends eA{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new oA(e),super(e)}call(e,t){return I(()=>{this.cell.dropoutMask!=null&&(L(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(L(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return t.implmentation===0&&(t.implementation=1),new e(t)}};sA.className=`LSTM`,K(sA);var cA=class extends tA{constructor(e){super(e),this.cells=e.cells}get stateSize(){let e=[];for(let t of this.cells.slice().reverse())Array.isArray(t.stateSize)?e.push(...t.stateSize):e.push(t.stateSize);return e}call(e,t){return I(()=>{e=e;let n=e.slice(1),r=[];for(let e of this.cells.slice().reverse())Array.isArray(e.stateSize)?r.push(n.splice(0,e.stateSize.length)):r.push(n.splice(0,1));r.reverse();let i=[],a;for(let o=0;o<this.cells.length;++o){let s=this.cells[o];n=r[o],a=o===0?[e[0]].concat(n):[a[0]].concat(n),a=s.call(a,t),i.push(a.slice(1))}n=[];for(let e of i.slice().reverse())n.push(...e);return[a[0]].concat(n)})}build(e){yE(e)&&(e=e[0]),e=e;let t;this.cells.forEach((n,r)=>{fT(`RNNCell_${r}`,()=>{n.build(e),t=Array.isArray(n.stateSize)?n.stateSize[0]:n.stateSize,e=[e[0],t]})}),this.built=!0}getConfig(){let e=super.getConfig(),t={cells:this.cells.map(e=>({className:e.getClassName(),config:e.getConfig()}))};return Object.assign(Object.assign({},e),t)}static fromConfig(e,t,n={}){let r=[];for(let e of t.cells)r.push(vD(e,n));return new e({cells:r})}get trainableWeights(){if(!this.trainable)return[];let e=[];for(let t of this.cells)e.push(...t.trainableWeights);return e}get nonTrainableWeights(){let e=[];for(let t of this.cells)e.push(...t.nonTrainableWeights);if(!this.trainable){let t=[];for(let e of this.cells)t.push(...e.trainableWeights);return t.concat(e)}return e}getWeights(){let e=[];for(let t of this.cells)e.push(...t.weights);return EE(e)}setWeights(e){let t=[];for(let n of this.cells){let r=n.weights.length,i=e.splice(r);for(let e=0;e<n.weights.length;++e)t.push([n.weights[e],i[e]])}DE(t)}};cA.className=`StackedRNNCells`,K(cA);function lA(e){let{ones:t,rate:n,training:r=!1,count:i=1,dropoutFunc:a}=e,o=()=>a==null?GT(t(),n):a(t(),n),s=()=>qT(o,t,r);return!i||i<=1?Rd(s().clone()):Array(i).fill(void 0).map(s).map(e=>Rd(e.clone()))}var uA=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},dA=class extends eA{constructor(e){if(e.unroll)throw new J(`Unrolling is not possible with convolutional RNNs.`);if(Array.isArray(e.cell))throw new J(`It is not possible at the moment to stack convolutional cells.`);super(e),this.inputSpec=[new OE({ndim:5})]}call(e,t){return I(()=>{if(this.cell.dropoutMask!=null&&(L(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(L(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),t&&t.constants)throw new q(`ConvRNN2D cell does not support constants`);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}computeOutputShape(e){let t=this.computeSingleOutputShape(e);return this.returnSequences||(t=[t[0],...t.slice(2)]),this.returnState&&(t=[t,...[,,].fill([e[0],...t.slice(-3)])]),t}getInitialState(e){return I(()=>{let{stateSize:t}=this.cell,n=e.shape,r=this.computeSingleOutputShape(n),i=Qg([r[0],...r.slice(2)]);return Array.isArray(t)?Array(t.length).fill(i):[i]})}resetStates(e,t=!1){I(()=>{if(!this.stateful)throw new Tw(`Cannot call resetStates() on an RNN Layer that is not stateful.`);let n=this.inputSpec[0].shape,r=this.computeSingleOutputShape(n),i=[r[0],...r.slice(2)];if(n[0]==null)throw new q("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)this.states_=Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(()=>Qg(i)):[Qg(i)];else if(e==null)L(this.states_),this.keptStates!=null&&(L(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>Qg(i)):this.states_[0]=Qg(i);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new q(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t?this.keptStates.push(this.states_.slice()):L(this.states_);for(let t=0;t<this.states_.length;++t){let n=e[t],r=i;if(!mo(n.shape,r))throw new q(`State ${t} is incompatible with layer ${this.name}: expected shape=${r}, received shape=${n.shape}`);this.states_[t]=n}}this.states_=this.states_.map(e=>Rd(e.clone()))})}computeSingleOutputShape(e){let{dataFormat:t,filters:n,kernelSize:r,padding:i,strides:a,dilationRate:o}=this.cell,s=t===`channelsFirst`,c=e[s?3:2],l=e[s?4:3],u=Mk(c,r[0],i,a[0],o[0]),d=Mk(l,r[1],i,a[1],o[1]);return[...e.slice(0,2),...s?[n,u,d]:[u,d,n]]}};dA.className=`ConvRNN2D`;var fA=class extends oA{constructor(e){let{filters:t,kernelSize:n,strides:r,padding:i,dataFormat:a,dilationRate:o}=e;super(Object.assign(Object.assign({},e),{units:t})),this.filters=t,Kw(this.filters,`filters`),this.kernelSize=jk(n,2,`kernelSize`),this.kernelSize.forEach(e=>Kw(e,`kernelSize`)),this.strides=jk(r||1,2,`strides`),this.strides.forEach(e=>Kw(e,`strides`)),this.padding=i||`valid`,cT(this.padding),this.dataFormat=a||`channelsLast`,oT(this.dataFormat),this.dilationRate=jk(o||1,2,`dilationRate`),this.dilationRate.forEach(e=>Kw(e,`dilationRate`))}build(e){var t;e=xE(e);let n=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[n]==null)throw new q(`The channel dimension of the input should be defined. Found ${e[n]}`);let r=e[n],i=this.kernelSize.concat([r,this.filters*4]);this.kernel=this.addWeight(`kernel`,i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);let a=this.kernelSize.concat([this.filters,this.filters*4]);if(this.recurrentKernel=this.addWeight(`recurrent_kernel`,a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let e;if(this.unitForgetBias){let n=this.biasInitializer,r=this.filters;e=new(t=class extends QT{apply(e,t){return PT([n.apply([r]),$g([r]),n.apply([r*2])])}},t.className=`CustomInit`,t)}else e=this.biasInitializer;this.bias=this.addWeight(`bias`,[this.filters*4],null,e,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(e,t){return I(()=>{if(e.length!==3)throw new q(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);let n=t.training||!1,r=e[0],i=e[1],a=e[2];0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=lA({ones:()=>p_(r),rate:this.dropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let o=this.dropoutMask,s=(e,t,n)=>!t||!t[n]?e:V(t[n],e),c=s(r,o,0),l=s(r,o,1),u=s(r,o,2),d=s(r,o,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=lA({ones:()=>p_(i),rate:this.recurrentDropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let f=this.recurrentDropoutMask,p=s(i,f,0),m=s(i,f,1),h=s(i,f,2),g=s(i,f,3),[_,v,y,b]=Ov(this.kernel.read(),4,3),[x,S,C,w]=this.useBias?Ov(this.bias.read(),4):[null,null,null,null];c=this.inputConv(c,_,x,this.padding),l=this.inputConv(l,v,S,this.padding),u=this.inputConv(u,y,C,this.padding),d=this.inputConv(d,b,w,this.padding);let[T,E,D,ee]=Ov(this.recurrentKernel.read(),4,3);p=this.recurrentConv(p,T),m=this.recurrentConv(m,E),h=this.recurrentConv(h,D),g=this.recurrentConv(g,ee);let te=this.recurrentActivation.apply(z(c,p)),ne=z(V(this.recurrentActivation.apply(z(l,m)),a),V(te,this.activation.apply(z(u,h)))),re=V(this.recurrentActivation.apply(z(d,g)),this.activation.apply(ne));return[re,re,ne]})}getConfig(){let e=super.getConfig(),{units:t}=e,n=uA(e,[`units`]),r={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},n),r)}inputConv(e,t,n,r){let i=xm(e,t,this.strides,r||`valid`,this.dataFormat===`channelsFirst`?`NCHW`:`NHWC`,this.dilationRate);return n?HT(i,n,this.dataFormat):i}recurrentConv(e,t){return xm(e,t,1,`same`,this.dataFormat===`channelsFirst`?`NCHW`:`NHWC`)}};fA.className=`ConvLSTM2DCell`,K(fA);var pA=class extends dA{constructor(e){let t=new fA(e);super(Object.assign(Object.assign({},e),{cell:t}))}static fromConfig(e,t){return new e(t)}};pA.className=`ConvLSTM2D`,K(pA);var mA=class extends NE{constructor(e){super(e),this.rate=Math.max(Math.min(e.rate,1),0),this.noiseShape=e.noiseShape,this.seed=e.seed,this.supportsMasking=!0}getNoiseShape(e){if(this.noiseShape==null)return this.noiseShape;let t=e.shape,n=[];for(let e=0;e<this.noiseShape.length;++e)n.push(this.noiseShape[e]==null?t[e]:this.noiseShape[e]);return n}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e);if(0<this.rate&&this.rate<1){let e=t.training!=null&&t.training,r=this.getNoiseShape(n);return qT(()=>GT(n,this.rate,r,this.seed),()=>n,e)}return e})}getConfig(){let e={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},t=super.getConfig();return Object.assign(e,t),e}dispose(){return super.dispose()}};mA.className=`Dropout`,K(mA);var hA=class extends mA{constructor(e){super(e),this.inputSpec=[{ndim:3}]}getNoiseShape(e){let t=e.shape;return[t[0],1,t[2]]}};hA.className=`SpatialDropout1D`,K(hA);var gA=class extends NE{constructor(e){if(super(e),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.batchInputShape==null&&e.inputShape==null&&e.inputDim!=null){let t=null;e.batchSize!=null&&(t=e.batchSize),this.batchInputShape=[t,e.inputDim]}this.units=e.units,Kw(this.units,`units`),this.activation=hk(e.activation),e.useBias!=null&&(this.useBias=e.useBias),this.kernelInitializer=vE(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=vE(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=oD(e.kernelConstraint),this.biasConstraint=oD(e.biasConstraint),this.kernelRegularizer=wk(e.kernelRegularizer),this.biasRegularizer=wk(e.biasRegularizer),this.activityRegularizer=wk(e.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(e){e=xE(e);let t=e[e.length-1];this.kernel??(this.kernel=this.addWeight(`kernel`,[t,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:t}}],this.built=!0}computeOutputShape(e){e=xE(e);let t=e.slice();return t[t.length-1]=this.units,t}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e),r=Yw(this.activation.getClassName()),i;return r==null?(i=RT(n,this.kernel.read()),this.bias!=null&&(i=HT(i,this.bias.read())),this.activation!=null&&(i=this.activation.apply(i))):i=RT(n,this.kernel.read(),r,this.bias?this.bias.read():null),i})}getConfig(){let e={units:this.units,activation:pk(this.activation),useBias:this.useBias,kernelInitializer:_E(this.kernelInitializer),biasInitializer:_E(this.biasInitializer),kernelRegularizer:Sk(this.kernelRegularizer),biasRegularizer:Sk(this.biasRegularizer),activityRegularizer:Sk(this.activityRegularizer),kernelConstraint:iD(this.kernelConstraint),biasConstraint:iD(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}};gA.className=`Dense`,K(gA);var _A=class extends NE{constructor(e){e||={},super(e),this.inputSpec=[{minNDim:3}],this.dataFormat=e.dataFormat}computeOutputShape(e){e=xE(e);for(let t of e.slice(1))if(t==null)throw new q(`The shape of the input to "Flatten" is not fully defined (got ${e.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[e[0],yT(e,1)]}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e);if(this.dataFormat===`channelsFirst`&&n.rank>1){let e=[0];for(let t=2;t<n.rank;++t)e.push(t);e.push(1),n=sy(n,e)}return AT(n)})}getConfig(){let e={};this.dataFormat!=null&&(e.dataFormat=this.dataFormat);let t=super.getConfig();return Object.assign(e,t),e}};_A.className=`Flatten`,K(_A);var vA=class extends NE{constructor(e){super(e),this.supportsMasking=!0,this.activation=hk(e.activation)}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e);return this.activation.apply(n)})}getConfig(){let e={activation:pk(this.activation)},t=super.getConfig();return Object.assign(e,t),e}};vA.className=`Activation`,K(vA);var yA=class extends NE{constructor(e){super(e),this.n=e.n,this.inputSpec=[{ndim:2}]}computeOutputShape(e){return[e[0],this.n,e[1]]}call(e,t){return I(()=>(e=Y(e),OT(e,this.n)))}getConfig(){let e={n:this.n},t=super.getConfig();return Object.assign(e,t),e}};yA.className=`RepeatVector`,K(yA);var bA=class extends NE{constructor(e){super(e),this.targetShape=e.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(e){return e<0||e==null}fixUnknownDimension(e,t){let n=`Total size of new array must be unchanged.`,r=t.slice(),i=1,a=null;for(let e=0;e<r.length;++e){let t=r[e];if(this.isUnknown(t)){if(a===null)a=e;else throw new q(`Can only specifiy one unknown dimension.`)}else i*=t}let o=yT(e);if(a!==null){if(i===0||o%i!==0)throw new q(n);r[a]=o/i}else if(o!==i)throw new q(n);return r}computeOutputShape(e){let t=!1;for(let n=0;n<e.length;++n)if(this.isUnknown(e[n])){t=!0;break}return t?e.slice(0,1).concat(this.targetShape):e.slice(0,1).concat(this.fixUnknownDimension(e.slice(1),this.targetShape))}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e),r=n.shape;return H(n,r.slice(0,1).concat(this.fixUnknownDimension(r.slice(1),this.targetShape)))})}getConfig(){let e={targetShape:this.targetShape},t=super.getConfig();return Object.assign(e,t),e}};bA.className=`Reshape`,K(bA);var xA=class extends NE{constructor(e){if(super(e),e.dims==null)throw Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(e.dims))throw Error(`Permute constructor requires \`dims\` to be an Array, but received ${e.dims} instead.`);let t=ST(1,e.dims.length+1);if(!mo(e.dims.slice().sort(),t))throw Error("Invalid permutation `dims`: "+JSON.stringify(e.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=e.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new OE({ndim:this.dims.length+1})]}computeOutputShape(e){e=xE(e);let t=e.slice();return this.dims.forEach((n,r)=>{t[r+1]=e[n]}),t}call(e,t){return sy(Y(e),this.dimsIncludingBatch)}getConfig(){let e={dims:this.dims},t=super.getConfig();return Object.assign(e,t),e}};xA.className=`Permute`,K(xA);var SA=class extends NE{constructor(e){super(e??{}),this.supportsMasking=!0,this.maskValue=e==null||e.maskValue==null?0:e.maskValue}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={maskValue:this.maskValue};return Object.assign(t,e),t}computeMask(e,t){return Zf(l_(Y(e),this.maskValue),-1)}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e);return V(n,R(Zf(l_(n,this.maskValue),-1,!0),n.dtype))})}};SA.className=`Masking`,K(SA);var CA=class extends NE{constructor(e){if(super(e),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER=`randomUniform`,e.batchInputShape==null&&e.inputShape==null){let t=null;e.batchSize!=null&&(t=e.batchSize),this.batchInputShape=e.inputLength==null?[t,null]:[t].concat(Nw(e.inputLength))}this.inputDim=e.inputDim,Kw(this.inputDim,`inputDim`),this.outputDim=e.outputDim,Kw(this.outputDim,`outputDim`),this.embeddingsInitializer=vE(e.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=wk(e.embeddingsRegularizer),this.activityRegularizer=wk(e.activityRegularizer),this.embeddingsConstraint=oD(e.embeddingsConstraint),this.maskZero=e.maskZero,this.supportsMasking=e.maskZero,this.inputLength=e.inputLength}build(e){this.embeddings=this.addWeight(`embeddings`,[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(e){}computeMask(e,t){return I(()=>this.maskZero?(e=Y(e),l_(e,rh(e))):null)}computeOutputShape(e){if(e=xE(e),this.inputLength==null)return[...e,this.outputDim];let t=Nw(this.inputLength);if(t.length!==e.length-1)throw new q(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);{let n=0;for(let r=0;r<t.length;++r){let i=t[r],a=e[r+1];if(i!=null&&a!=null&&i!==a)throw new q(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);i??(t[n]=a),n++}}return[e[0],...t,this.outputDim]}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e);return n.dtype!==`int32`&&(n=ET(n,`int32`)),H(zT(this.embeddings.read(),H(n,[n.size])),xE(this.computeOutputShape(n.shape)))})}getConfig(){let e={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:_E(this.embeddingsInitializer),embeddingsRegularizer:Sk(this.embeddingsRegularizer),activityRegularizer:Sk(this.activityRegularizer),embeddingsConstraint:iD(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},t=super.getConfig();return Object.assign(e,t),e}};CA.className=`Embedding`,K(CA);var wA=class extends NE{constructor(e){super(e||{}),this.supportsMasking=!0}mergeFunction(e){throw new J}computeElementwiseOpOutputShape(e,t){if(e==null||t==null)return null;if(e.length<t.length)return this.computeElementwiseOpOutputShape(t,e);if(t.length===0)return e;let n=e.slice(0,e.length-t.length);for(let r=0;r<t.length;++r){let i=e[e.length-t.length+r],a=t[r];if(i==null||a==null||i<0||a<0)n.push(null);else if(i===1)n.push(a);else if(a===1)n.push(i);else{if(i!==a)throw new q(`Operands could not be broadcast together with shapes `+JSON.stringify(e)+` `+JSON.stringify(t));n.push(i)}}return n}build(e){if(Array.isArray(e)&&!Array.isArray(e[0])&&(e=[xE(e)]),e=e,e.length<2)throw new q(`A merge layer should be called on an Array of at least 2 inputs. Got ${e.length} input(s).`);let t=[];for(let n of e)n!=null&&n[0]!==null&&t.push(n[0]);if(t=Hw(t),t.length>1)throw new q(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(e)}.`);let n=e[0]==null?null:e[0].slice(1);for(let t=1;t<e.length;++t){let r=e[t]==null?null:e[t].slice(1);n=this.computeElementwiseOpOutputShape(n,r)}let r=e.map(e=>e.length);this.reshapeRequired=e.indexOf(null)!==-1||Hw(r).length!==1}call(e,t){return I(()=>{if(e=e,this.reshapeRequired){let t=[],n=e.map(e=>e.rank);if(n.indexOf(null)===-1){let r=xT(n);for(let n of e){let e=n.rank;for(let t=0;t<r-e;++t)n=DT(n,1);t.push(n)}return this.mergeFunction(t)}{let n=!1;for(let r of e){let e=r.rank;if(e==null){let e=r.shape,i=e[0],a=e.slice(1).concat([i]),o=H(r,[i].concat(yT(e.slice(1))));o=sy(o,[1,0]),o=H(o,a),t.push(o),n=!0}else if(e>1){let i=ST(1,e).concat([0]);t.push(sy(r,i)),n=!0}else t.push(r)}let r=this.mergeFunction(t),i=r.rank;if(n){if(i==null){let e=r.shape,t=e[e.length-1],n=[t].concat(e.slice(0,e.length-1));r=H(sy(H(r,[-1,t]),[1,0]),n)}else if(i>1){let e=[i-1].concat(ST(0,i-1));r=sy(r,e)}}return r}}return this.mergeFunction(e)})}computeOutputShape(e){e=e;let t;t=e[0]==null?null:e[0].slice(1);for(let n=1;n<e.length;++n){let r=e[n]==null?null:e[n].slice(1);t=this.computeElementwiseOpOutputShape(t,r)}let n=[];for(let t of e)t!=null&&t[0]!==null&&n.push(t[0]);return n=Hw(n),t=n.length===1?n.concat(t):[null].concat(t),t}computeMask(e,t){return I(()=>{if(t==null)return null;if(!Array.isArray(t))throw new q("`mask` should be an Array");if(!Array.isArray(e))throw new q("`inputs` should be an Array");if(t.length!==e.length)throw new q(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${e.length} vs ${t.length})`);if(t.every(e=>e==null))return null;t=t.map(e=>e==null?e:Hh(e,0));let n=t[0];for(let e=1;e<t.length-1;++e)n=Lg(n,t[e]);return n})}},TA=class extends wA{constructor(e){super(e)}mergeFunction(e){return I(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=z(t,e[n]);return t})}};TA.className=`Add`,K(TA);var EA=class extends wA{constructor(e){super(e)}mergeFunction(e){return I(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=V(t,e[n]);return t})}};EA.className=`Multiply`,K(EA);var DA=class extends wA{constructor(e){super(e)}mergeFunction(e){return I(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=z(t,e[n]);return V(1/e.length,t)})}};DA.className=`Average`,K(DA);var OA=class extends wA{constructor(e){super(e)}mergeFunction(e){return I(()=>{let t=e[0];for(let n=1;n<e.length;++n)t=Yg(t,e[n]);return t})}};OA.className=`Maximum`,K(OA);var kA=class extends wA{constructor(e){super(e)}mergeFunction(e){return I(()=>{let t=e[0];for(let n=1;n<e.length;++n)t=t_(t,e[n]);return t})}};kA.className=`Minimum`,K(kA);var AA=class extends wA{constructor(e){super(e),this.DEFAULT_AXIS=-1,e??={},this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){if(!(Array.isArray(e)&&Array.isArray(e[0]))||e.length===1)throw new q("A `Concatenate` layer should be called on a list of at least 2 inputs");e=e;let t=!0;for(let n of e)if(n!=null){t=!1;break}if(t)return;let n=[];for(let t=0;t<e.length;++t){let r=e[t].slice();r.splice(this.axis,1);let i=!1;for(let e of n)if(mo(e,r)){i=!0;break}i||n.push(r)}if(n.length>1)throw new q("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(e))}mergeFunction(e){return I(()=>PT(e,this.axis))}computeOutputShape(e){if(!(Array.isArray(e)&&Array.isArray(e[0])))throw new q("A `Concatenate` layer should be called on a list of inputs.");let t=e,n=t[0].slice(),r=this.axis<0?n.length+this.axis:this.axis;for(let e of t.slice(1)){if(n[r]==null||e[r]==null){n[r]=null;break}n[r]+=e[r]}return n}computeMask(e,t){if(t==null)return null;if(!Array.isArray(t))throw new q("`mask` should be an array for Concatenate");if(!Array.isArray(e))throw new q("`inputs` should be an array for Concatenate");if(t.length!==e.length)throw new q(`Mismatch in the length of mask (${t.length}) and the legnth of inputs (${e.length})`);return I(()=>{let n=!0;if(t.forEach(e=>{if(e!=null){n=!1;return}}),n)return null;let r=[];for(let n=0;n<e.length;++n)t[n]==null?r.push(R(p_(e[n]),`bool`)):t[n].rank<e[n].rank?r.push(Hh(t[n],-1)):r.push(t[n]);return Yf(Lp(r,this.axis),-1,!1)})}getConfig(){let e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}};AA.className=`Concatenate`,K(AA);function jA(e,t){for(;e<0;)e+=t;return e}function MA(e,t,n){if(e.shape.length>3||t.shape.length>3)throw new J(`batchDot is not implemented for tensors of 4D or higher rank yet`);if(O(e.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${e.shape.length}`),O(e.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof n==`number`&&(n=[n,n]),e.dtype===`complex64`||t.dtype===`complex64`)throw new J(`batchDot is not implemented for complex64-type Tensors yet.`);let r=e.shape.length,i=t.shape.length;n??=[r-1,i-2];let a=n;return I(()=>{let n;if(r>i){n=r-i;let e=[];for(let t=0;t<n;++t)e.push(1);t=H(t,t.shape.concat(e))}else if(i>r){n=i-r;let t=[];for(let e=0;e<n;++e)t.push(1);e=H(e,e.shape.concat(t))}else n=0;let o;if(e.shape.length===2&&t.shape.length===2)o=a[0]===a[1]?W(V(e,t),a[0]):W(V(sy(e,[1,0]),t),a[1]);else{let n=a[0]!==e.shape.length-1,r=a[1]===t.shape.length-1;o=zp(e,t,n,r)}if(n>0){let e;e=r>i?r+i-3:r-1;let t=[];for(let r=e;r<e+n;++r)t.push(r);o=Pv(o,t)}return o.shape.length===1&&(o=Hh(o,1)),o})}var NA=class extends wA{constructor(e){super(e),this.axes=e.axes,this.normalize=e.normalize!=null&&e.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){O(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let t=e[0],n=e[1];if(t.length>3||n.length>3)throw new J(`Dot layer does not support tensors of 4D or higher rank yet.`);let r=this.interpretAxes(t,n);if(t[r[0]]!==n[r[1]])throw new q(`Dimension incompatibility: ${t[r[0]]} !== ${n[r[1]]}`)}mergeFunction(e){if(e.length!==2)throw new q(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${e.length} input(s).`);let t=e[0],n=e[1],r;return r=Array.isArray(this.axes)?this.axes.map((t,n)=>jA(t,e[n].shape.length)):[jA(this.axes,t.shape.length),jA(this.axes,n.shape.length)],this.normalize&&(t=yD(t,r[0]),n=yD(n,r[1])),MA(t,n,r)}interpretAxes(e,t){let n;return n=Array.isArray(this.axes)?this.axes:[jA(this.axes,e.length),jA(this.axes,t.length)],n}computeOutputShape(e){O(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let t=e[0].slice(),n=e[1].slice();if(t.length>3||n.length>3)throw new J(`Dot layer does not support tensors of 4D or higher rank yet.`);let r=this.interpretAxes(t,n);t.splice(r[0],1),n.splice(r[1],1),n.splice(0,1);let i=t.concat(n);return i.length===1&&i.push(1),i}computeMask(e,t){return null}getConfig(){let e={axes:this.axes,normalize:this.normalize},t=super.getConfig();return Object.assign(e,t),e}};NA.className=`Dot`,K(NA);var PA=class extends NE{constructor(e){super(e),this.supportsMasking=!0,this.stddev=e.stddev}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={stddev:this.stddev};return Object.assign(t,e),t}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e);return qT(()=>z(LT(n.shape,0,this.stddev),n),()=>n,t.training||!1)})}};PA.className=`GaussianNoise`,K(PA);var FA=class extends NE{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return I(()=>{this.invokeCallHook(e,t);let n=Y(e);return this.rate>0&&this.rate<1?qT(()=>{let e=Math.sqrt(this.rate/(1-this.rate));return V(n,LT(n.shape,1,e))},()=>n,t.training||!1):n})}};FA.className=`GaussianDropout`,K(FA);var IA=class extends NE{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate,this.noiseShape=e.noiseShape}_getNoiseShape(e){return this.noiseShape||Y(e).shape}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return I(()=>{if(this.rate<1&&this.rate>0){let n=this._getNoiseShape(e);return qT(()=>{let t=Y(e),r=-1.7580993408473766,i=ng(z_(n),this.rate);i=ET(i,`float32`);let a=((1-this.rate)*(1+this.rate*r**2))**-.5,o=-a*r*this.rate;return z(V(z(V(t,i),V(z(i,-1),r)),a),o)},()=>Y(e),t.training||!1)}return e})}};IA.className=`AlphaDropout`,K(IA);function LA(e,t,n,r,i,a=.001){let o;if(e.rank===2)o=Qp(e,t,n,r,i,a);else if(e.rank===3)o=em(e,t,n,r,i,a);else if(e.rank===4)o=nm(e,t,n,r,i,a);else throw new J(`batchNormalization is not implemented for array of rank ${e.rank} yet`);return o}function RA(e,t,n,r,i=.001){return I(()=>{let a=s_(e,r),o=a.mean,s=a.variance;return[LA(e,o,s,n,t,i),o,s]})}function zA(e,t,n,r,i=.001){return I(()=>{let a=s_(e,r),o=a.mean,s=a.variance,c=[];for(let t of ST(0,e.rank))r.indexOf(t)===-1?c.push(e.shape[t]):c.push(1);let l=H(o,c),u=H(s,c),d=t==null?null:H(t,c);return[LA(e,l,u,n==null?null:H(n,c),d,i),o,s]})}function BA(e,t,n,r,i=.001){return mo(r.slice().sort(),ST(0,e.rank-1))?RA(e,t,n,r,i):zA(e,t,n,r,i)}var VA=class extends NE{constructor(e){e??={},super(e),this.supportsMasking=!0,this.axis=e.axis==null?-1:e.axis,this.momentum=e.momentum==null?.99:e.momentum,this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null||e.center,this.scale=e.scale==null||e.scale,this.betaInitializer=vE(e.betaInitializer||`zeros`),this.gammaInitializer=vE(e.gammaInitializer||`ones`),this.movingMeanInitializer=vE(e.movingMeanInitializer||`zeros`),this.movingVarianceInitializer=vE(e.movingVarianceInitializer||`ones`),this.betaConstraint=oD(e.betaConstraint),this.gammaConstraint=oD(e.gammaConstraint),this.betaRegularizer=wk(e.betaRegularizer),this.gammaRegularizer=wk(e.gammaRegularizer)}build(e){e=xE(e);let t=this.axis>=0?this.axis:this.axis+e.length,n=e[t];if(n==null)throw new q(`Axis ${t} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(e)}.`);this.inputSpec=[new OE({ndim:e.length,axes:{[t]:n}})];let r=[n];this.scale&&(this.gamma=this.addWeight(`gamma`,r,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight(`beta`,r,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight(`moving_mean`,r,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight(`moving_variance`,r,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(e,t){return I(()=>{let n=t.training!=null&&t.training,r=Y(e),i=r.shape,a=i.length,o=ST(0,a),s=this.axis>=0?this.axis:this.axis+a;o.splice(s,1);let c=kw(1,a);c[s]=i[s];let l=o.slice();l.sort();let u=!mo(l,ST(0,a).slice(0,a-1)),d=()=>{if(u){let e=H(this.movingMean.read(),c),t=H(this.movingVariance.read(),c),n=this.center?H(this.beta.read(),c):null,i=this.scale?H(this.gamma.read(),c):null;return LA(r,e,t,n,i,this.epsilon)}return LA(r,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!n)return d();let[f,p,m]=BA(r,this.gamma.read(),this.beta.read(),o,this.epsilon),h=(e,t,n)=>{I(()=>{let r=1-n,i=e.read(),a=V(G(i,t),r);e.write(G(i,a))})};return h(this.movingMean,p,this.momentum),h(this.movingVariance,m,this.momentum),f})}getConfig(){let e={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:_E(this.betaInitializer),gammaInitializer:_E(this.gammaInitializer),movingMeanInitializer:_E(this.movingMeanInitializer),movingVarianceInitializer:_E(this.movingVarianceInitializer),betaRegularizer:Sk(this.betaRegularizer),gammaRegularizer:Sk(this.gammaRegularizer),betaConstraint:iD(this.betaConstraint),gammaConstraint:iD(this.gammaConstraint)},t=super.getConfig();return Object.assign(e,t),e}};VA.className=`BatchNormalization`,K(VA);var HA=class extends NE{constructor(e){if(e??={},super(e),this.axis=e.axis==null?-1:e.axis,typeof this.axis==`number`){if(!Number.isInteger(this.axis))throw Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(let e of this.axis)if(!Number.isInteger(e))throw Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null||e.center,this.scale=e.scale==null||e.scale,this.betaInitializer=vE(e.betaInitializer||`zeros`),this.gammaInitializer=vE(e.gammaInitializer||`ones`),this.betaRegularizer=wk(e.betaRegularizer),this.gammaRegularizer=wk(e.gammaRegularizer),this.supportsMasking=!0}build(e){e=xE(e);let t=e.length;typeof this.axis==`number`&&(this.axis=[this.axis]);for(let e=0;e<this.axis.length;++e)this.axis[e]<0&&(this.axis[e]+=t);for(let e of this.axis)if(e<0||e>=t)throw Error(`Invalid axis: ${e}`);if(this.axis.length!==Hw(this.axis).length)throw Error(`Found duplicate axes in: ${this.axis}`);let n=this.axis.map(t=>e[t]);this.gamma=this.scale?this.addWeight(`gamma`,n,`float32`,this.gammaInitializer,this.gammaRegularizer,!0):null,this.beta=this.center?this.addWeight(`beta`,n,`float32`,this.betaInitializer,this.betaRegularizer,!0):null,this.built=!0}call(e,t){let n=Y(e),r=n.shape,i=r.length;return I(()=>{let{mean:e,variance:t}=s_(n,this.axis,!0),a=kw(1,i);for(let e of this.axis)a[e]=r[e];let o=e=>e!=null&&e.shape.length!==i?H(e,a):e,s=this.scale?o(this.gamma.read()):null,c=this.center?o(this.beta.read()):null,l=[],u=[];for(let e=0;e<i;++e)this.axis.indexOf(e)===-1?(l.push(1),u.push(r[e])):(l.push(r[e]),u.push(1));return e=Kh(e,l),t=Kh(t,l),s!=null&&(s=Kh(s,u)),c!=null&&(c=Kh(c,u)),LA(n,e,t,c,s,this.epsilon)})}getConfig(){let e={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:_E(this.betaInitializer),gammaInitializer:_E(this.gammaInitializer),betaRegularizer:Sk(this.betaRegularizer),gammaRegularizer:Sk(this.gammaRegularizer)},t=super.getConfig();return Object.assign(e,t),e}};HA.className=`LayerNormalization`,K(HA);function UA(e,t,n){return I(()=>{if(e.rank!==4)throw new q(`temporalPadding expects input tensor to be 4-D, but received a ${e.rank}-D tensor.`);if(t??=[[1,1],[1,1]],t.length!==2||t[0].length!==2||t[1].length!==2)throw new q("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(n??=TT(),n!==`channelsLast`&&n!==`channelsFirst`)throw new q(`Unknown data format: ${n}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let r;return r=n===`channelsFirst`?[[0,0],[0,0],t[0],t[1]]:[[0,0],t[0],t[1],[0,0]],h_(e,r)})}var WA=class extends NE{constructor(e){if(e??={},super(e),this.dataFormat=e.dataFormat==null?TT():e.dataFormat,e.padding==null)this.padding=[[1,1],[1,1]];else if(typeof e.padding==`number`)this.padding=[[e.padding,e.padding],[e.padding,e.padding]];else{if(e.padding=e.padding,e.padding.length!==2)throw new q(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${e.padding.length} array.`);let t,n;if(typeof e.padding[0]==`number`)t=[e.padding[0],e.padding[0]],n=[e.padding[1],e.padding[1]];else{if(e.padding=e.padding,e.padding[0].length!==2)throw new q(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${e.padding[0].length} array.`);if(t=e.padding[0],e.padding[1].length!==2)throw new q(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${e.padding[1].length} array.`);n=e.padding[1]}this.padding=[t,n]}this.inputSpec=[new OE({ndim:4})]}computeOutputShape(e){e=xE(e);let t,n;return this.dataFormat===`channelsFirst`?(t=e[2]!=null&&e[2]>=0?e[2]+this.padding[0][0]+this.padding[0][1]:null,n=e[3]!=null&&e[3]>=0?e[3]+this.padding[1][0]+this.padding[1][1]:null,[e[0],e[1],t,n]):(t=e[1]!=null&&e[1]>=0?e[1]+this.padding[0][0]+this.padding[0][1]:null,n=e[2]!=null&&e[2]>=0?e[2]+this.padding[1][0]+this.padding[1][1]:null,[e[0],t,n,e[3]])}call(e,t){return I(()=>UA(Y(e),this.padding,this.dataFormat))}getConfig(){let e={padding:this.padding,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}};WA.className=`ZeroPadding2D`,K(WA);function GA(e,t,n,r,i,a){return I(()=>{oT(i),lT(a),cT(r),n??=[1,1],r??=`valid`,i??=TT(),a??=`max`,e=Pk(e,i);let o,s=r===`same`?`same`:`valid`;return o=a===`max`?Gg(e,t,n,s):Np(e,t,n,s),i===`channelsFirst`&&(o=sy(o,[0,3,1,2])),o})}function KA(e,t,n,r,i,a){return I(()=>{oT(i),lT(a),cT(r),n??=[1,1,1],r??=`valid`,i??=TT(),a??=`max`,e=Fk(e,i);let o,s=r===`same`?`same`:`valid`;return o=a===`max`?qg(e,t,n,s):Fp(e,t,n,s),i===`channelsFirst`&&(o=sy(o,[0,4,1,2,3])),o})}var qA=class extends NE{constructor(e){if(e.poolSize??=2,super(e),typeof e.poolSize==`number`)this.poolSize=[e.poolSize];else if(Array.isArray(e.poolSize)&&e.poolSize.length===1&&typeof e.poolSize[0]==`number`)this.poolSize=e.poolSize;else throw new q(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.poolSize)}`);if(Kw(this.poolSize,`poolSize`),e.strides==null)this.strides=this.poolSize;else if(typeof e.strides==`number`)this.strides=[e.strides];else if(Array.isArray(e.strides)&&e.strides.length===1&&typeof e.strides[0]==`number`)this.strides=e.strides;else throw new q(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.strides)}`);Kw(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,cT(this.padding),this.inputSpec=[new OE({ndim:3})]}computeOutputShape(e){e=xE(e);let t=Mk(e[1],this.poolSize[0],this.padding,this.strides[0]);return[e[0],t,e[2]]}call(e,t){return I(()=>(this.invokeCallHook(e,t),e=DT(Y(e),2),Pv(this.poolingFunction(Y(e),[this.poolSize[0],1],[this.strides[0],1],this.padding,`channelsLast`),[2])))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides},t=super.getConfig();return Object.assign(e,t),e}},JA=class extends qA{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return oT(i),cT(r),GA(e,t,n,r,i,`max`)}};JA.className=`MaxPooling1D`,K(JA);var YA=class extends qA{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return oT(i),cT(r),GA(e,t,n,r,i,`avg`)}};YA.className=`AveragePooling1D`,K(YA);var XA=class extends NE{constructor(e){if(e.poolSize??=[2,2],super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==2)throw new q(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides];Kw(this.poolSize,`poolSize`),Kw(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,oT(this.dataFormat),cT(this.padding),this.inputSpec=[new OE({ndim:4})]}computeOutputShape(e){e=xE(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2];return t=Mk(t,this.poolSize[0],this.padding,this.strides[0]),n=Mk(n,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat===`channelsFirst`?[e[0],e[1],t,n]:[e[0],t,n,e[3]]}call(e,t){return I(()=>(this.invokeCallHook(e,t),this.poolingFunction(Y(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},ZA=class extends XA{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return oT(i),cT(r),GA(e,t,n,r,i,`max`)}};ZA.className=`MaxPooling2D`,K(ZA);var QA=class extends XA{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return oT(i),cT(r),GA(e,t,n,r,i,`avg`)}};QA.className=`AveragePooling2D`,K(QA);var $A=class extends NE{constructor(e){if(e.poolSize??=[2,2,2],super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==3)throw new q(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides,e.strides];Kw(this.poolSize,`poolSize`),Kw(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,oT(this.dataFormat),cT(this.padding),this.inputSpec=[new OE({ndim:5})]}computeOutputShape(e){e=xE(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2],r=this.dataFormat===`channelsFirst`?e[4]:e[3];return t=Mk(t,this.poolSize[0],this.padding,this.strides[0]),n=Mk(n,this.poolSize[1],this.padding,this.strides[1]),r=Mk(r,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat===`channelsFirst`?[e[0],e[1],t,n,r]:[e[0],t,n,r,e[4]]}call(e,t){return I(()=>(this.invokeCallHook(e,t),this.poolingFunction(Y(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},ej=class extends $A{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return oT(i),cT(r),KA(e,t,n,r,i,`max`)}};ej.className=`MaxPooling3D`,K(ej);var tj=class extends $A{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return oT(i),cT(r),KA(e,t,n,r,i,`avg`)}};tj.className=`AveragePooling3D`,K(tj);var nj=class extends NE{constructor(e){super(e),this.inputSpec=[new OE({ndim:3})]}computeOutputShape(e){return[e[0],e[2]]}call(e,t){throw new J}},rj=class extends nj{constructor(e){super(e||{})}call(e,t){return I(()=>Zg(Y(e),1))}};rj.className=`GlobalAveragePooling1D`,K(rj);var ij=class extends nj{constructor(e){super(e||{})}call(e,t){return I(()=>Ch(Y(e),1))}};ij.className=`GlobalMaxPooling1D`,K(ij);var aj=class extends NE{constructor(e){super(e),this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,oT(this.dataFormat),this.inputSpec=[new OE({ndim:4})]}computeOutputShape(e){return e=e,this.dataFormat===`channelsLast`?[e[0],e[3]]:[e[0],e[1]]}call(e,t){throw new J}getConfig(){let e={dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},oj=class extends aj{call(e,t){return I(()=>{let t=Y(e);return this.dataFormat===`channelsLast`?Zg(t,[1,2]):Zg(t,[2,3])})}};oj.className=`GlobalAveragePooling2D`,K(oj);var sj=class extends aj{call(e,t){return I(()=>{let t=Y(e);return this.dataFormat===`channelsLast`?Ch(t,[1,2]):Ch(t,[2,3])})}};sj.className=`GlobalMaxPooling2D`,K(sj);var cj=class extends NE{constructor(e){super(e),this.layer=e.layer}build(e){this.built=!0}get trainable(){return this.layer!=null&&this.layer.trainable}set trainable(e){this.layer!=null&&(this.layer.trainable=e)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(e){this.layer.setWeights(e)}getConfig(){let e={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},t=super.getConfig();return Object.assign(e,t),e}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(e)}static fromConfig(e,t,n={}){let r=t.layer,i=vD(r,n);delete t.layer;let a={layer:i};return Object.assign(a,t),new e(a)}},lj=class extends cj{constructor(e){super(e),this.supportsMasking=!0}build(e){if(e=xE(e),e.length<3)throw new q(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(e)}`);this.inputSpec=[{shape:e}];let t=[e[0]].concat(e.slice(2));this.layer.built||(this.layer.build(t),this.layer.built=!0),super.build(e)}computeOutputShape(e){e=xE(e);let t=[e[0]].concat(e.slice(2)),n=this.layer.computeOutputShape(t),r=e[1];return[n[0],r].concat(n.slice(1))}call(e,t){return I(()=>(e=Y(e),$k((e,n)=>[Y(this.layer.call(e,t)),[]],e,[],!1,null,null,!1,!0)[1]))}};lj.className=`TimeDistributed`,K(lj);function uj(e){Ww(iT,`BidirectionalMergeMode`,e)}var dj=`concat`,fj=class extends cj{constructor(e){super(e);let t=e.layer.getConfig(),n={};n.className=e.layer.getClassName(),n.config=t,this.forwardLayer=vD(n),t.goBackwards=t.goBackwards!==!0;let r={};if(r.className=e.layer.getClassName(),r.config=t,this.backwardLayer=vD(r),this.forwardLayer.name=`forward_`+this.forwardLayer.name,this.backwardLayer.name=`backward_`+this.backwardLayer.name,this.mergeMode=e.mergeMode===void 0?dj:e.mergeMode,uj(this.mergeMode),e.weights)throw new J(`weights support is not implemented for Bidirectional layer yet.`);this._stateful=e.layer.stateful,this.returnSequences=e.layer.returnSequences,this.returnState=e.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=e.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(e){this._trainable=e,this.forwardLayer!=null&&(this.forwardLayer.trainable=e),this.backwardLayer!=null&&(this.backwardLayer.trainable=e)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(e){let t=e.length,n=Math.floor(t/2);this.forwardLayer.setWeights(e.slice(0,n)),this.backwardLayer.setWeights(e.slice(n))}computeOutputShape(e){let t=this.forwardLayer.computeOutputShape(e);Array.isArray(t)&&Array.isArray(t[0])||(t=[t]),t=t;let n,r,i;return this.returnState&&(i=t.slice(1)),n=t[0],n=n,this.mergeMode===`concat`?(n[n.length-1]*=2,r=[n]):r=this.mergeMode==null?[n,n.slice()]:[n],this.returnState?this.mergeMode==null?r.concat(i).concat(i.slice()):[n].concat(i,i.slice()):Mw(r)}apply(e,t){let n=t==null?null:t.initialState,r=t==null?null:t.constants;t??={};let i=Qk(e,n,r,this.numConstants);if(e=i.inputs,n=i.initialState,r=i.constants,Array.isArray(e)&&(n=e.slice(1),e=e[0]),(n==null||n.length===0)&&r==null)return super.apply(e,t);let a=[],o=[];if(n!=null){let e=n.length;if(e%2>0)throw new q("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");t.initialState=n,a.push(...n);let r=n.map(e=>new OE({shape:e.shape}));this.forwardLayer.stateSpec=r.slice(0,e/2),this.backwardLayer.stateSpec=r.slice(e/2),o.push(...r)}if(r!=null)throw new J(`Support for constants in Bidirectional layers is not implemented yet.`);let s=a[0]instanceof kE;for(let e of a)if(e instanceof kE!==s)throw new q(`The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors`);if(s){let n=[e].concat(a),r=this.inputSpec.concat(o),i=this.inputSpec;this.inputSpec=r;let s=super.apply(n,t);return this.inputSpec=i,s}return super.apply(e,t)}call(e,t){return I(()=>{let n=t.initialState,r,i;if(n==null)r=this.forwardLayer.call(e,t),i=this.backwardLayer.call(e,t);else{let a=n.slice(0,n.length/2),o=n.slice(n.length/2);r=this.forwardLayer.call(e,Object.assign(t,{initialState:a})),i=this.backwardLayer.call(e,Object.assign(t,{initialState:o}))}let a;this.returnState&&(Array.isArray(r)&&(a=r.slice(1).concat(i.slice(1))),r=r[0],i=i[0]),this.returnSequences&&(i=X_(i,1));let o;return this.mergeMode===`concat`?o=PT([r,i]):this.mergeMode===`sum`?o=z(r,i):this.mergeMode===`ave`?o=V(.5,z(r,i)):this.mergeMode===`mul`?o=V(r,i):this.mergeMode??(o=[r,i]),this.returnState?this.mergeMode==null?o.concat(a):[o].concat(a):o})}resetStates(e){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(e){fT(this.forwardLayer.name,()=>{this.forwardLayer.build(e)}),fT(this.backwardLayer.name,()=>{this.backwardLayer.build(e)}),this.built=!0}computeMask(e,t){Array.isArray(t)&&(t=t[0]);let n;if(n=this.returnSequences?this.mergeMode==null?[t,t]:t:this.mergeMode==null?[null,null]:null,this.returnState){let e=this.forwardLayer.states.map(e=>null);return Array.isArray(n)?n.concat(e).concat(e):[n].concat(e,e)}return n}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(e),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(e)}getConfig(){let e={mergeMode:this.mergeMode},t=super.getConfig();return Object.assign(e,t),e}static fromConfig(e,t){let n=vD(t.layer);if(delete t.layer,t.numConstants!=null)throw new J(`Deserialization of a Bidirectional layer with numConstants present is not supported yet.`);let r=t;return r.layer=n,new e(r)}};fj.className=`Bidirectional`,K(fj);var pj=class extends NE{constructor(e){super(e),this.scale=e.scale,this.offset=e.offset?e.offset:0}getConfig(){let e={scale:this.scale,offset:this.offset},t=super.getConfig();return Object.assign(e,t),e}call(e,t){return I(()=>(e=Y(e),e.dtype!==`float32`&&(e=ET(e,`float32`)),z(V(e,this.scale),this.offset)))}};pj.className=`Rescaling`,K(pj);var{resizeBilinear:mj,cropAndResize:hj}=xb,gj=class extends NE{constructor(e){super(e),this.height=e.height,this.width=e.width}centerCrop(e,t,n,r,i,a,o,s){return I(()=>{let c,l=!1,u=[t/a,n/o,(r+t)/a,(i+n)/o],d=[];e.rank===3?(l=!0,c=Iv([e])):c=e;for(let e=0;e<c.shape[0];e++)d.push(u);let f=Nd(d,[d.length,4]),p=B_(0,d.length,1,`int32`),m=hj(c,f,p,[r,i],`nearest`);return ET(l?Y(ry(m)):m,s)})}upsize(e,t,n,r){return I(()=>ET(mj(e,[t,n]),r))}call(e,t){return I(()=>{let t=Y(e),n=t.dtype,r=t.shape,i=r[r.length-3],a=r[r.length-2],o=0;i!==this.height&&(o=Math.floor((i-this.height)/2));let s=0;return a!==this.width&&(s=Math.floor((a-this.width)/2),s===0&&(s=1)),o>=0&&s>=0?this.centerCrop(t,o,s,this.height,this.width,i,a,n):this.upsize(e,this.height,this.width,n)})}getConfig(){let e={height:this.height,width:this.width},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){e=xE(e);let t=e.length-3,n=e.length-2;return e[t]=this.height,e[n]=this.width,e}};gj.className=`CenterCrop`,K(gj);function _j(e,t,n,r){let i=Y(e);if(i.dtype!==`int32`&&(i=ET(i,`int32`)),t===`int`)return i;let a=i.shape;if(i.rank===0&&(i=Hh(i,-1)),t===`oneHot`&&i.shape[i.shape.length-1]!==1&&(i=Hh(i,-1)),i.rank>2)throw new q(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${a} which would result in output rank ${i.rank}.`);let o=[`multiHot`,`oneHot`].includes(t),s=i,c;if(c=r!==void 0&&t===`count`?Um(s,r,n,o):Um(s,[],n,o),t!==`tfIdf`)return c;if(r)return V(c,r);throw new q(`When outputMode is 'tfIdf', weights must be provided.`)}var vj=class extends NE{constructor(e){super(e),this.numTokens=e.numTokens,this.outputMode=e.outputMode?e.outputMode:`multiHot`}getConfig(){let e={numTokens:this.numTokens,outputMode:this.outputMode},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){return e=xE(e),e==null?[this.numTokens]:this.outputMode===`oneHot`&&e[e.length-1]!==1?(e.push(this.numTokens),e):(e[e.length-1]=this.numTokens,e)}call(e,t){return I(()=>{e=Y(e),e.dtype!==`int32`&&(e=ET(e,`int32`));let n;if(t.countWeights!==void 0){if(this.outputMode!==`count`)throw new q(`countWeights is not used when outputMode !== count.
              Received countWeights=${t.countWeights}`);n=Y(t.countWeights)}let r=Ch(e),i=Th(e),a=eg(this.numTokens,r).bufferSync().get(0),o=ng(i,0).bufferSync().get(0);if(!(a&&o))throw new q(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return _j(e,this.outputMode,this.numTokens,n)})}};vj.className=`CategoryEncoding`,K(vj);var yj=new Set([`bilinear`,`nearest`]),bj=class extends NE{constructor(e){if(super(e),this.height=e.height,this.width=e.width,e.interpolation){if(yj.has(e.interpolation))this.interpolation=e.interpolation;else throw new q(`Invalid interpolation parameter: ${e.interpolation} is not implemented`)}else this.interpolation=`bilinear`;this.cropToAspectRatio=!!e.cropToAspectRatio}computeOutputShape(e){e=xE(e);let t=e[2];return[this.height,this.width,t]}getConfig(){let e={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},t=super.getConfig();return Object.assign(e,t),e}call(e,t){return I(()=>{let t=[this.height,this.width];if(this.interpolation===`bilinear`)return xb.resizeBilinear(e,t,!this.cropToAspectRatio);if(this.interpolation===`nearest`)return xb.resizeNearestNeighbor(e,t,!this.cropToAspectRatio);throw Error(`Interpolation is ${this.interpolation} but only ${[...yj]} are supported`)})}};bj.className=`Resizing`,K(bj);var xj=class{constructor(e){this.seed=e}next(){if(this.seed!==void 0)return this.seed++}};xj.className=`RandomSeed`;var Sj=class extends NE{constructor(e){super(e),this.randomGenerator=new xj(e.seed)}getConfig(){let e={seed:this.randomGenerator.seed},t=super.getConfig();return Object.assign(e,t),e}};Sj.className=`BaseRandomLayer`;var Cj=new Set([`bilinear`,`nearest`]),wj=class extends Sj{constructor(e){super(e);let{factor:t,interpolation:n=`bilinear`}=e;if(this.factor=t,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new q(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new q(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new q(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(n){if(Cj.has(n))this.interpolation=n;else throw new q(`Invalid interpolation parameter: ${n} is not implemented`)}}getConfig(){let e={factor:this.factor,interpolation:this.interpolation},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){e=xE(e);let t=e[2];return[this.imgHeight,-1,t]}call(e,t){return I(()=>{let t=Y(e);this.imgHeight=t.shape[t.shape.length-3];let n=t.shape[t.shape.length-2];this.widthFactor=z_([1],1+this.widthLower,1+this.widthUpper,`float32`,this.randomGenerator.next());let r=this.widthFactor.dataSync()[0]*n;r=Math.round(r);let i=[this.imgHeight,r];switch(this.interpolation){case`bilinear`:return xb.resizeBilinear(e,i);case`nearest`:return xb.resizeNearestNeighbor(e,i);default:throw Error(`Interpolation is ${this.interpolation}
          but only ${[...Cj]} are supported`)}})}};wj.className=`RandomWidth`,K(wj);function Tj(e){return new gA(e)}function Ej(e){return yk(e)}function Dj(e){return bk(e)}j().registerFlag(`KEEP_INTERMEDIATE_TENSORS`,()=>!1,e=>{e&&console.warn(`Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.`)});var Oj;(function(e){e[e.DT_INVALID=0]=`DT_INVALID`,e[e.DT_FLOAT=1]=`DT_FLOAT`,e[e.DT_DOUBLE=2]=`DT_DOUBLE`,e[e.DT_INT32=3]=`DT_INT32`,e[e.DT_UINT8=4]=`DT_UINT8`,e[e.DT_INT16=5]=`DT_INT16`,e[e.DT_INT8=6]=`DT_INT8`,e[e.DT_STRING=7]=`DT_STRING`,e[e.DT_COMPLEX64=8]=`DT_COMPLEX64`,e[e.DT_INT64=9]=`DT_INT64`,e[e.DT_BOOL=10]=`DT_BOOL`,e[e.DT_QINT8=11]=`DT_QINT8`,e[e.DT_QUINT8=12]=`DT_QUINT8`,e[e.DT_QINT32=13]=`DT_QINT32`,e[e.DT_BFLOAT16=14]=`DT_BFLOAT16`,e[e.DT_QINT16=15]=`DT_QINT16`,e[e.DT_QUINT16=16]=`DT_QUINT16`,e[e.DT_UINT16=17]=`DT_UINT16`,e[e.DT_COMPLEX128=18]=`DT_COMPLEX128`,e[e.DT_HALF=19]=`DT_HALF`,e[e.DT_RESOURCE=20]=`DT_RESOURCE`,e[e.DT_VARIANT=21]=`DT_VARIANT`,e[e.DT_UINT32=22]=`DT_UINT32`,e[e.DT_UINT64=23]=`DT_UINT64`,e[e.DT_FLOAT_REF=101]=`DT_FLOAT_REF`,e[e.DT_DOUBLE_REF=102]=`DT_DOUBLE_REF`,e[e.DT_INT32_REF=103]=`DT_INT32_REF`,e[e.DT_UINT8_REF=104]=`DT_UINT8_REF`,e[e.DT_INT16_REF=105]=`DT_INT16_REF`,e[e.DT_INT8_REF=106]=`DT_INT8_REF`,e[e.DT_STRING_REF=107]=`DT_STRING_REF`,e[e.DT_COMPLEX64_REF=108]=`DT_COMPLEX64_REF`,e[e.DT_INT64_REF=109]=`DT_INT64_REF`,e[e.DT_BOOL_REF=110]=`DT_BOOL_REF`,e[e.DT_QINT8_REF=111]=`DT_QINT8_REF`,e[e.DT_QUINT8_REF=112]=`DT_QUINT8_REF`,e[e.DT_QINT32_REF=113]=`DT_QINT32_REF`,e[e.DT_BFLOAT16_REF=114]=`DT_BFLOAT16_REF`,e[e.DT_QINT16_REF=115]=`DT_QINT16_REF`,e[e.DT_QUINT16_REF=116]=`DT_QUINT16_REF`,e[e.DT_UINT16_REF=117]=`DT_UINT16_REF`,e[e.DT_COMPLEX128_REF=118]=`DT_COMPLEX128_REF`,e[e.DT_HALF_REF=119]=`DT_HALF_REF`,e[e.DT_RESOURCE_REF=120]=`DT_RESOURCE_REF`,e[e.DT_VARIANT_REF=121]=`DT_VARIANT_REF`,e[e.DT_UINT32_REF=122]=`DT_UINT32_REF`,e[e.DT_UINT64_REF=123]=`DT_UINT64_REF`})(Oj||={});var kj;(function(e){(function(e){e[e.LEGACY=0]=`LEGACY`,e[e.V1=1]=`V1`,e[e.V2=2]=`V2`})(e.CheckpointFormatVersion||={})})(kj||={});function Aj(e,t){return jj(e,t)}function jj(e,t,n=new Map,r=new Set){if(e==null)return null;if(typeof Blob==`function`&&e instanceof Blob)return e.slice();if(r.has(e))throw Error(`Circular references are not supported.`);if(n.has(e))return n.get(e);let i=t(e);if(i.recurse&&i.value!==null)throw Error(`A deep map function may not return both a value and recurse=true.`);if(!i.recurse)return n.set(e,i.value),i.value;if(Fj(e)){let i=Array.isArray(e)?[]:{};r.add(e);for(let a in e){let o=e[a];i[a]=jj(o,t,n,r)}return r.delete(e),e.__proto__&&(i.__proto__=e.__proto__),i}throw Error(`Can't recurse into non-iterable type: ${e}`)}function Mj(e,t=Pj){return Nj(e,t)}function Nj(e,t,n=new Set){let r=e[0];if(n.has(r))throw Error(`Circular references are not supported.`);let i=t(e);if(i.recurse&&i.value!==null)throw Error(`A deep zip function may not return both a value and recurse=true.`);if(!i.recurse)return i.value;if(Fj(r)){let i=Array.isArray(r)?[]:{};n.add(r);for(let a in r)i[a]=Nj(e.map(e=>e[a]),t,n);return n.delete(r),i}throw Error(`Can't recurse into non-iterable type: ${r}`)}function Pj(e){return e===null?null:Fj(e[0])?{value:null,recurse:!0}:{value:e,recurse:!1}}function Fj(e){let t=!1;if(j().get(`IS_BROWSER`))t=e instanceof TextDecoder;else{let{StringDecoder:n}=Of();t=e instanceof n}return e!=null&&!ArrayBuffer.isView(e)&&(Array.isArray(e)||typeof e==`object`&&!(e instanceof Zu)&&!(e instanceof Promise)&&!t)}function Ij(e){return e==null||Lj(e)||Array.isArray(e)||typeof e==`object`&&e instanceof Zu||Au(e)}function Lj(e){return e===null||typeof e!=`object`&&typeof e!=`function`}function Rj(e){return Aj(e,zj)}function zj(e){return e instanceof Zu?{value:e.clone(),recurse:!1}:Fj(e)?{value:null,recurse:!0}:{value:e,recurse:!1}}var Bj=class{constructor(e){if(this.capacity=e,this.begin=0,this.end=0,e==null)throw RangeError(`Can't create a ring buffer of unknown capacity.`);if(e<1)throw RangeError(`Can't create ring buffer of capacity < 1.`);this.data=Array(e),this.doubledCapacity=2*e}wrap(e){for(;e<0;)e+=this.doubledCapacity;return e%this.doubledCapacity}get(e){if(e<0)throw RangeError(`Can't get item at a negative index.`);return this.data[e%this.capacity]}set(e,t){if(e<0)throw RangeError(`Can't set item at a negative index.`);this.data[e%this.capacity]=t}length(){let e=this.end-this.begin;return e<0&&(e=this.doubledCapacity+e),e}isFull(){return this.length()===this.capacity}isEmpty(){return this.length()===0}push(e){if(this.isFull())throw RangeError(`Ring buffer is full.`);this.set(this.end,e),this.end=this.wrap(this.end+1)}pushAll(e){for(let t of e)this.push(t)}pop(){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);this.end=this.wrap(this.end-1);let e=this.get(this.end);return this.set(this.end,void 0),e}unshift(e){if(this.isFull())throw RangeError(`Ring buffer is full.`);this.begin=this.wrap(this.begin-1),this.set(this.begin,e)}shift(){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);let e=this.get(this.begin);return this.set(this.begin,void 0),this.begin=this.wrap(this.begin+1),e}shuffleExcise(e){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);let t=this.wrap(this.begin+e),n=this.get(t);return this.set(t,this.pop()),n}},Vj=class e extends Bj{constructor(){super(e.INITIAL_CAPACITY)}isFull(){return!1}push(e){super.isFull()&&this.expand(),super.push(e)}unshift(e){super.isFull()&&this.expand(),super.unshift(e)}expand(){let e=this.capacity*2,t=Array(e),n=this.length();for(let e=0;e<n;e++)t[e]=this.get(this.wrap(this.begin+e));this.data=t,this.capacity=e,this.doubledCapacity=2*this.capacity,this.begin=0,this.end=n}};Vj.INITIAL_CAPACITY=32;function Hj(e){return new Kj(e)}function Uj(e){return new qj(e)}function Wj(e,t){return new iM(e,t)}var Gj=class{async toArray(){let e=[],t=await this.next();for(;!t.done;)e.push(t.value),t=await this.next();return e}async toArrayForTest(){let e=this.prefetch(100),t=[],n=await e.next();for(;!n.done;)t.push(n.value),n=await e.next();return t}async resolveFully(){let e=await this.next();for(;!e.done;)e=await this.next()}async resolveWhile(e){let t=await this.next(),n=e(t.value);for(;!t.done&&n;)t=await this.next(),n=e(t.value)}handleErrors(e){return new eM(this,e)}filter(e){return new Qj(this,e)}map(e){return new $j(this,e)}mapAsync(e){return new tM(this,e)}serialMapAsync(e){return new tM(this,e).serial()}flatmap(e){return new rM(this,e)}async forEachAsync(e){return this.map(e).resolveFully()}async serialForEach(e){return this.serialMapAsync(e).resolveWhile(e=>e===!0)}rowMajorBatch(e,t=!0){return new Zj(this,e,t)}columnMajorBatch(e,t=!0,n=Pj){return this.rowMajorBatch(e,t).map(e=>Mj(e,n))}concatenate(e,t){return new iM(Hj([this,e]),t)}take(e){return e<0||e==null?this:new Xj(this,e)}skip(e){return e<0||e==null?this:new Yj(this,e)}prefetch(e){return new oM(this,e)}shuffle(e,t){return new sM(this,e,t)}serial(){return new Jj(this)}},Kj=class extends Gj{constructor(e){super(),this.items=e,this.trav=0}summary(){return`Array of ${this.items.length} items`}async next(){if(this.trav>=this.items.length)return{value:null,done:!0};let e=this.items[this.trav];return this.trav++,{value:Rj(e),done:!1}}},qj=class extends Gj{constructor(e){super(),this.nextFn=e}summary(){return`Function call`}async next(){try{return this.nextFn()}catch(e){throw e.message=`Error thrown while iterating through a dataset: ${e.message}`,e}}},Jj=class extends Gj{constructor(e){super(),this.upstream=e,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Serial`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){return this.upstream.next()}},Yj=class extends Gj{constructor(e,t){super(),this.upstream=e,this.maxCount=t,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Skip`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.count++<this.maxCount;){let e=await this.upstream.next();if(e.done)return e;L(e.value)}return this.upstream.next()}},Xj=class extends Gj{constructor(e,t){super(),this.upstream=e,this.maxCount=t,this.count=0}summary(){return`${this.upstream.summary()} -> Take`}async next(){return this.count++>=this.maxCount?{value:null,done:!0}:this.upstream.next()}},Zj=class extends Gj{constructor(e,t,n=!0){super(),this.upstream=e,this.batchSize=t,this.enableSmallLastBatch=n,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> RowMajorBatch`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){let e=[];for(;e.length<this.batchSize;){let t=await this.upstream.next();if(t.done)return this.enableSmallLastBatch&&e.length>0?{value:e,done:!1}:{value:null,done:!0};e.push(t.value)}return{value:e,done:!1}}},Qj=class extends Gj{constructor(e,t){super(),this.upstream=e,this.predicate=t,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Filter`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;){let e=await this.upstream.next();if(e.done||this.predicate(e.value))return e;L(e.value)}}},$j=class extends Gj{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> Map`}async next(){let e=await this.upstream.next();if(e.done)return{value:null,done:!0};let t=dd(e.value),n=this.transform(e.value),r=dd(n);for(let e of t)ud(e,r)||e.dispose();return{value:n,done:!1}}},eM=class extends Gj{constructor(e,t){super(),this.upstream=e,this.handler=t,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> handleErrors`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;)try{return await this.upstream.next()}catch(e){if(!this.handler(e))return{value:null,done:!0}}}},tM=class extends Gj{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> AsyncMap`}async next(){let e=await this.upstream.next();if(e.done)return{value:null,done:!0};let t=dd(e.value),n=await this.transform(e.value),r=dd(n);for(let e of t)ud(e,r)||e.dispose();return{value:n,done:!1}}},nM=class extends Gj{constructor(){super(),this.outputQueue=new Vj,this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.outputQueue.length()===0;)if(!await this.pump())return{value:null,done:!0};return{value:this.outputQueue.shift(),done:!1}}},rM=class extends nM{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> Flatmap`}async pump(){let e=await this.upstream.next();if(e.done)return!1;let t=dd(e.value),n=this.transform(e.value),r=dd(n);this.outputQueue.pushAll(n);for(let e of t)ud(e,r)||e.dispose();return!0}},iM=class extends Gj{constructor(e,t){super(),this.baseErrorHandler=t,this.lastRead=null,this.iterator=null,this.moreIterators=e}summary(){return`TODO: fill in upstream of chained summaries -> Chained`}async next(){return this.lastRead=this.readFromChain(this.lastRead),this.lastRead}async readFromChain(e){if(await e,this.iterator==null){let e=await this.moreIterators.next();if(e.done)return{value:null,done:!0};this.iterator=e.value,this.baseErrorHandler!=null&&(this.iterator=this.iterator.handleErrors(this.baseErrorHandler))}let t=await this.iterator.next();return t.done?(this.iterator=null,this.readFromChain(e)):t}},aM;(function(e){e[e.FAIL=0]=`FAIL`,e[e.SHORTEST=1]=`SHORTEST`,e[e.LONGEST=2]=`LONGEST`})(aM||={});var oM=class extends Gj{constructor(e,t){super(),this.upstream=e,this.bufferSize=t,this.buffer=new Bj(t)}summary(){return`${this.upstream.summary()} -> Prefetch`}refill(){for(;!this.buffer.isFull();){let e=this.upstream.next();this.buffer.push(e)}}next(){return this.refill(),this.buffer.shift()}},sM=class extends oM{constructor(e,t,n){super(e,t),this.upstream=e,this.windowSize=t,this.upstreamExhausted=!1,this.random=N_.alea(n||Du().toString()),this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}randomInt(e){return Math.floor(this.random()*e)}chooseIndex(){return this.randomInt(this.buffer.length())}async serialNext(){for(this.upstreamExhausted||this.refill();!this.buffer.isEmpty();){let e=this.chooseIndex(),t=await this.buffer.shuffleExcise(e);if(t.done)this.upstreamExhausted=!0;else return this.refill(),t}return{value:null,done:!0}}},cM=class{constructor(){this.size=null}batch(e,t=!0){let n=this;O(e>0,()=>`batchSize needs to be positive, but it is
      ${e}`);let r;return r=this.size===1/0||this.size==null?this.size:t?Math.ceil(this.size/e):Math.floor(this.size/e),lM(async()=>(await n.iterator()).columnMajorBatch(e,t,uM),r)}concatenate(e){let t=this,n;return n=this.size===1/0||e.size===1/0?1/0:this.size!=null&&e.size!=null?this.size+e.size:null,lM(async()=>(await t.iterator()).concatenate(await e.iterator()),n)}filter(e){let t=this,n;return n=this.size===1/0?1/0:null,lM(async()=>(await t.iterator()).filter(t=>I(()=>e(t))),n)}async forEachAsync(e){return(await this.iterator()).forEachAsync(e)}map(e){let t=this;return lM(async()=>(await t.iterator()).map(t=>I(()=>e(t))),this.size)}mapAsync(e){let t=this;return lM(async()=>(await t.iterator()).mapAsync(e),this.size)}prefetch(e){if(e==null)throw RangeError("`Dataset.prefetch()` requires bufferSize to be specified.");let t=this;return lM(async()=>(await t.iterator()).prefetch(e),this.size)}repeat(e){let t=this,n;return n=this.size!=null&&e>0?this.size*e:e===0?0:this.size!=null&&(e===void 0||e<0)?1/0:null,lM(async()=>Wj(Uj(async()=>({value:await t.iterator(),done:!1})).take(e)),n)}skip(e){let t=this,n;return n=this.size!=null&&e>=0&&this.size>=e?this.size-e:this.size!=null&&(this.size<e||e===void 0||e<0)?0:null,lM(async()=>(await t.iterator()).skip(e),n)}shuffle(e,t,n=!0){if(e==null||e<0)throw this.size==null?RangeError("`Dataset.shuffle()` requires bufferSize to be specified."):RangeError(`\`Dataset.shuffle()\` requires bufferSize to be specified.  If your data fits in main memory (for regular JS objects), and/or GPU memory (for \`tf.Tensor\`s), consider setting bufferSize to the dataset size (${this.size} elements)`);let r=this,i=N_.alea(t||Du().toString());return lM(async()=>{let t=i.int32();return n&&(t+=i.int32()),(await r.iterator()).shuffle(e,t.toString())},this.size)}take(e){let t=this,n;return n=this.size!=null&&this.size>e?e:this.size!=null&&this.size<=e?this.size:null,lM(async()=>(await t.iterator()).take(e),n)}async toArray(){if(this.size===1/0)throw Error(`Can not convert infinite data stream to array.`);return(await this.iterator()).toArray()}async toArrayForTest(){if(this.size===1/0)throw Error(`Can not convert infinite data stream to array.`);return(await this.iterator()).toArrayForTest()}};cM.MAX_BUFFER_SIZE=1e4;function lM(e,t=null){return new class extends cM{constructor(){super(...arguments),this.size=t}async iterator(){return e()}}}function uM(e){if(e===null)return null;let t=e[0];return Ij(t)?{value:dM(e),recurse:!1}:{value:null,recurse:!0}}function dM(e){if(e.length===0)throw Error(`Can't make a batch of zero elements.`);return e[0]instanceof Zu?Iv(e):Nd(e)}function X(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{e!=null&&O(e.dtype!==`complex64`,()=>`${t} does not support complex64 tensors in the CPU backend.`)})}var fM=ay,pM=class e extends io{nextDataId(){return e.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new ro(this,Id())}write(e,t,n){this.firstUse&&(this.firstUse=!1,j().get(`IS_NODE`)&&Yl(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));let r={id:this.nextDataId()};return this.data.set(r,{values:e,dtype:n,refCount:1}),r}makeTensorInfo(e,t,n){let r;if(t===`string`&&n!=null&&n.length>0&&ko(n[0])){let i=n.map(e=>Ou(e));r=this.write(i,e,t)}else r=this.write(n,e,t);return{dataId:r,shape:e,dtype:t}}refCount(e){return this.data.has(e)?this.data.get(e).refCount:0}incRef(e){let t=this.data.get(e);t.refCount++}decRef(e){if(this.data.has(e)){let t=this.data.get(e);t.refCount--}}move(e,t,n,r,i){this.data.set(e,{values:t,dtype:r,refCount:i})}numDataIds(){return this.data.numDataIds()}async read(e){return this.readSync(e)}readSync(e){let{dtype:t,complexTensorInfos:n}=this.data.get(e);return t===`complex64`?Ax(this.readSync(n.real.dataId),this.readSync(n.imag.dataId)):Lo(this.data.get(e).values,t)}bufferSync(e){let t=this.readSync(e.dataId);if(e.dtype===`string`)try{let n=t.map(e=>ku(e));return Mf(e.shape,e.dtype,n)}catch{throw Error(`Failed to decode encoded string bytes into utf-8`)}return Mf(e.shape,e.dtype,t)}makeOutput(e,t,n){return Id().makeTensorFromTensorInfo(this.makeTensorInfo(t,n,e),this)}disposeData(e,t=!1){if(this.data.has(e)){if(this.data.get(e).refCount--,!t&&this.data.get(e).refCount>0)return!1;let{complexTensorInfos:n}=this.data.get(e);n!=null&&(this.disposeData(n.real.dataId,!0),this.disposeData(n.imag.dataId,!0)),this.data.delete(e)}return!0}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}async time(e){let t=Du();return e(),{kernelMs:Du()-t}}memory(){return{unreliable:!0,reasons:[`The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less.`]}}where(e){X([e],`where`);let t=this.readSync(e.dataId);return fM(e.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}};pM.nextDataId=0;function mM(e){let t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}var hM={kernelName:`Abs`,backendName:`cpu`,kernelFunc:e=>{let{x:t}=e.inputs,n=e.backend;X(t,`abs`);let r=new Float32Array(k(t.shape)),i=n.data.get(t.dataId).values;return r=mM(i),n.makeOutput(r,t.shape,t.dtype)}};function gM(e){return(t,n,r,i,a)=>{let o=U(t,n),s=o.length,c=A(o),l=So(a,k(o)),u=t.length,d=n.length,f=A(t),p=A(n),m=Xm(t,o),h=Xm(n,o);if(m.length+h.length===0)for(let t=0;t<l.length;++t)l[t]=e(r[t%r.length],i[t%i.length]);else for(let t=0;t<l.length;++t){let n=Uo(t,s,c),a=n.slice(-u);m.forEach(e=>a[e]=0);let o=Ho(a,u,f),g=n.slice(-d);h.forEach(e=>g[e]=0);let _=Ho(g,d,p);l[t]=e(r[o],i[_])}return[l,o]}}function _M(e){let{inputs:t,backend:n}=e,{real:r,imag:i}=t,a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,s=n.makeTensorInfo(r.shape,`complex64`),c=n.data.get(s.dataId);return c.complexTensorInfos={real:n.makeTensorInfo(r.shape,`float32`,a),imag:n.makeTensorInfo(i.shape,`float32`,o)},s}var vM={kernelName:Ts,backendName:`cpu`,kernelFunc:_M};function yM(e,t,n=`float32`){if(n===`complex64`)return _M({inputs:{real:yM(e,t,`float32`),imag:yM(e,t,`float32`)},backend:e});let r=zo(k(t),n);return e.makeTensorInfo(t,n,r)}function bM(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}var xM={kernelName:lc,backendName:`cpu`,kernelFunc:bM};function SM(e){let{inputs:t,backend:n}=e,{input:r}=t,i=n.data.get(r.dataId).complexTensorInfos.real,a=n.data.get(i.dataId).values;return n.makeTensorInfo(i.shape,i.dtype,a)}var CM={kernelName:Xc,backendName:`cpu`,kernelFunc:SM};function wM(e,t,n,r){if(r===`int32`)return[t,`int32`,Int32Array.from(e)];if(r===`bool`){let r=Eu([0],n),[i,a]=gM((e,t)=>e===t?0:1)(t,[],e,r,`bool`);return[a,`bool`,i]}throw Error(`Error in Cast: failed to cast ${n} to ${r}`)}function TM(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dtype:a}=r;if(a===`complex64`){if(i.dtype===`complex64`)return bM({inputs:{x:i},backend:n});let e=yM(n,i.shape,i.dtype),t=TM({inputs:{x:i},backend:n,attrs:{dtype:`float32`}}),r=_M({inputs:{real:t,imag:e},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),r}if(i.dtype===`complex64`){let e=SM({inputs:{input:i},backend:n}),t=TM({inputs:{x:e},backend:n,attrs:{dtype:a}});return n.disposeIntermediateTensorInfo(e),t}if(!Eo(i.dtype,a)){let e=bM({inputs:{x:i},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:a}}let o=n.data.get(i.dataId).values,[s,c,l]=wM(o,i.shape,i.dtype,a);return n.makeTensorInfo(s,c,l)}var EM={kernelName:Ss,backendName:`cpu`,kernelFunc:TM};function DM(e,t,n,r){return n==null?({inputs:n,backend:i})=>{let{a,b:o}=n,s=i;X([a,o],e);let c=s.data.get(a.dataId).values,l=s.data.get(o.dataId).values,u=a.dtype===`string`?fS(c):c,d=a.dtype===`string`?fS(l):l,f=r||a.dtype,[p,m]=t(a.shape,o.shape,u,d,f);return s.makeTensorInfo(m,f,p)}:({inputs:e,backend:i})=>{let{a,b:o}=e,s=i;if(a.dtype===`complex64`||o.dtype===`complex64`){let e=TM({inputs:{x:a},backend:s,attrs:{dtype:`complex64`}}),t=s.data.get(e.dataId),r=t.complexTensorInfos.real,i=t.complexTensorInfos.imag,c=s.data.get(r.dataId).values,l=s.data.get(i.dataId).values,u=TM({inputs:{x:o},backend:s,attrs:{dtype:`complex64`}}),d=s.data.get(u.dataId),f=d.complexTensorInfos.real,p=d.complexTensorInfos.imag,m=s.data.get(f.dataId).values,h=s.data.get(p.dataId).values,[g,_,v]=n(a.shape,o.shape,c,l,m,h),y=s.makeTensorInfo(v,`float32`,g),b=s.makeTensorInfo(v,`float32`,_),x=_M({inputs:{real:y,imag:b},backend:s});return s.disposeIntermediateTensorInfo(e),s.disposeIntermediateTensorInfo(u),s.disposeIntermediateTensorInfo(y),s.disposeIntermediateTensorInfo(b),x}{let e=s.data.get(a.dataId).values,n=s.data.get(o.dataId).values,i=r||a.dtype,[c,l]=t(a.shape,o.shape,e,n,i);return s.makeTensorInfo(l,i,c)}}}function OM(e){return(t,n,r,i,a,o)=>{let s=U(t,n),c=k(s),l=s.length,u=A(s),d=So(`float32`,c),f=So(`float32`,c),p=Xm(t,s),m=Xm(n,s),h=Ax(r,i),g=Ax(a,o),_=t.length,v=A(t),y=n.length,b=A(n);if(p.length+m.length===0)for(let t=0;t<d.length;t++){let n=t%h.length,r=t%g.length,i=e(h[n*2],h[n*2+1],g[r*2],g[r*2+1]);d[t]=i.real,f[t]=i.imag}else for(let t=0;t<d.length;t++){let n=Uo(t,l,u),r=n.slice(-_);p.forEach(e=>r[e]=0);let i=Ho(r,_,v),a=n.slice(-y);m.forEach(e=>a[e]=0);let o=Ho(a,y,b),s=e(h[i*2],h[i*2+1],g[o*2],g[o*2+1]);d[t]=s.real,f[t]=s.imag}return[d,f,s]}}var kM=gM(((e,t)=>e+t)),AM=DM(`Add`,kM,OM(((e,t,n,r)=>({real:e+n,imag:t+r})))),jM={kernelName:`Add`,backendName:`cpu`,kernelFunc:AM};function MM(e,t,n,r,i){let a=k(r),o=zo(i,n);for(let n=0;n<e.length;n++){let r=e[n];if(r<0)throw Error(`Input x must be non-negative!`);r>=i||(a>0?o[r]+=t[n]:o[r]+=1)}return o}function NM(e,t,n,r=!1){let i=e.shape[0],a=e.shape[1],o=Mf([i,n],t.dtype);for(let s=0;s<i;s++)for(let i=0;i<a;i++){let a=e.get(s,i);if(a<0)throw Error(`Input x must be non-negative!`);a>=n||(r?o.set(1,s,a):t.size>0?o.set(o.get(s,a)+t.get(s,i),s,a):o.set(o.get(s,a)+1,s,a))}return o}var PM=gM(((e,t)=>e&t)),FM={kernelName:ys,backendName:`cpu`,kernelFunc:DM(ys,PM)};function IM(e){return(t,n,r)=>{let i=Co(n,t.length);for(let n=0;n<t.length;++n)i[n]=e(t[n],r);return i}}function LM(e,t,n){return RM(e,IM(t),n)}function RM(e,t,n){return({inputs:r,attrs:i,backend:a})=>{let{x:o}=r;X(o,e);let s=a,c=s.data.get(o.dataId).values,l;if(o.dtype===`string`){if(!Array.isArray(c))throw Error(`String tensor's value was not an instance of Array`);l=fS(c)}else l=c;let u=n||o.dtype,d=t(l,u,i);return s.makeTensorInfo(o.shape,u,d)}}var zM=IM(e=>Math.ceil(e)),BM={kernelName:Cs,backendName:`cpu`,kernelFunc:RM(Cs,zM)};function VM(e,t,n,r){let i=Co(n,k(t));if(r&&n!==`string`){let t=0;e.forEach(e=>{let n=k(e.shape);i.set(e.vals,t),t+=n})}else{let r=0;e.forEach(e=>{let a=n===`string`?fS(e.vals):e.vals,o=0;for(let n=0;n<e.shape[0];++n){let s=n*t[1]+r;for(let t=0;t<e.shape[1];++t)i[s+t]=a[o++]}r+=e.shape[1]})}return i}var HM=gM((e,t)=>+(e===t)),UM=DM(Zs,HM,null,`bool`),WM={kernelName:Zs,backendName:`cpu`,kernelFunc:UM},GM=IM(e=>Math.exp(e)),KM=RM(`Exp`,GM,`float32`),qM={kernelName:`Exp`,backendName:`cpu`,kernelFunc:KM},JM=IM(e=>Math.expm1(e)),YM={kernelName:$s,backendName:`cpu`,kernelFunc:RM($s,JM)},XM=IM(e=>Math.floor(e)),ZM={kernelName:nc,backendName:`cpu`,kernelFunc:RM(nc,XM)},QM=gM((e,t)=>Math.floor(e/t)),$M={kernelName:rc,backendName:`cpu`,kernelFunc:DM(rc,QM,null,`int32`)};function eN(e,t,n,r,i,a,o,s,c){let l=Mf([r,a],n);for(let n=0;n<r;n++){let r=[],u=0;for(let t=0;t<i;t++){let a=e[n*i+t];u+=a*o[t],r.push(a)}if(u<0||u>=c/a)throw Error(`Invalid indices: ${r} does not index into ${s}`);for(let e=0;e<a;e++)l.values[n*a+e]=t.get(...t.indexToLoc(u*a+e))}return l}function tN(e,t,n){let r=Mf(n,e.dtype);for(let n=0;n<r.size;++n){let i=r.indexToLoc(n).slice(),a=i[0],o=i[2],s=t.locToIndex([a,o]);i[2]=t.values[s];let c=e.locToIndex(i);0<=c&&c<e.values.length&&(r.values[n]=e.values[c])}return r}var nN=gM((e,t)=>+(e>t)),rN={kernelName:sc,backendName:`cpu`,kernelFunc:DM(sc,nN,null,`bool`)},iN=gM((e,t)=>+(e>=t)),aN={kernelName:cc,backendName:`cpu`,kernelFunc:DM(cc,iN,null,`bool`)},oN=gM((e,t)=>+(e<t)),sN={kernelName:gc,backendName:`cpu`,kernelFunc:DM(gc,oN,null,`bool`)},cN=gM((e,t)=>+(e<=t)),lN={kernelName:_c,backendName:`cpu`,kernelFunc:DM(_c,cN,null,`bool`)};function uN(e,t,n){let r=(t-e)/(n-1),i=zo(n,`float32`);i[0]=e;for(let e=1;e<i.length;e++)i[e]=i[e-1]+r;return i}var dN=IM(e=>Math.log(e)),fN={kernelName:`Log`,backendName:`cpu`,kernelFunc:RM(`Log`,dN)};function pN(e,t,n,r){let i=So(r,k(n));for(let n=0;n<i.length;++n){let r=n*t,a=e[r];for(let n=0;n<t;++n){let t=e[r+n];(Number.isNaN(t)||t>a)&&(a=t)}i[n]=a}return i}var mN=gM(((e,t)=>Math.max(e,t))),hN={kernelName:Tc,backendName:`cpu`,kernelFunc:DM(Tc,mN)},gN=gM(((e,t)=>Math.min(e,t))),_N={kernelName:Mc,backendName:`cpu`,kernelFunc:DM(Mc,gN)},vN=gM(((e,t)=>e*t)),yN=DM(Fc,vN,OM(((e,t,n,r)=>({real:e*n-t*r,imag:e*r+t*n})))),bN={kernelName:Fc,backendName:`cpu`,kernelFunc:yN};function xN(e,t,n){return vN([],t,wu(-1,n),e,n)}function SN(e){let{inputs:t,backend:n}=e,{x:r}=t;X(r,`neg`);let i=n.data.get(r.dataId).values,[a,o]=xN(i,r.shape,r.dtype);return n.makeTensorInfo(o,r.dtype,a)}var CN={kernelName:`Neg`,backendName:`cpu`,kernelFunc:SN},wN=gM(((e,t)=>e===t?0:1)),TN={kernelName:Ic,backendName:`cpu`,kernelFunc:DM(Ic,wN,null,`bool`)};function EN(e,t,n,r,i){let a=t.length,o=k(t),s=A(t),c=A(i),l=So(n,k(i));for(let t=0;t<o;++t){let n=Uo(t,a,s),i=Array(n.length);for(let e=0;e<i.length;e++)i[e]=n[r[e]];let o=Ho(i,a,c);l[o]=e[t]}return l}function DN(e){let{inputs:t,attrs:n,backend:r}=e,{x:i}=t,{perm:a}=n;X(i,`transpose`);let o=i.shape.length,s=Array(o);for(let e=0;e<s.length;e++)s[e]=i.shape[a[e]];let c=r.data.get(i.dataId).values,l=EN(c,i.shape,i.dtype,a,s);return{dataId:r.write(l,s,i.dtype),shape:s,dtype:i.dtype}}var ON={kernelName:Rl,backendName:`cpu`,kernelFunc:DN};function kN(e,t,n,r){let[i,a]=gh(e,r),o=ad(t,`int32`),s=zo(k(i),o),c=k(a);for(let e=0;e<s.length;++e){let t=e*c,r=1;for(let e=0;e<c;++e)r*=n[t+e];s[e]=r}return{outVals:s,outShape:i,outDtype:o}}function AN(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`prod`);let s=i.shape.length,c=bo(a,i.shape),l=yh(c,s),u=c,d=i,f=[];l!=null&&(d=DN({inputs:{x:i},backend:n,attrs:{perm:l}}),f.push(d),u=xh(u.length,s));let p=n.data.get(d.dataId).values,{outVals:m,outShape:h,outDtype:g}=kN(d.shape,d.dtype,p,u),_=h;return o&&(_=_h(h,c)),f.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(_,g,m)}var jN={kernelName:Gc,backendName:`cpu`,kernelFunc:AN};function MN(e,t,n){e.forEach((e,r)=>{if(e<0||e>=n){let i=Uo(r,t.length,A(t)).join(`,`);throw Error(`indices[${i}] = ${e} is not in [0, ${n})`)}})}function NN(e,t){for(let n=0;n<e.length;++n){let r=e[n],i=n===e.length-1?t:e[n+1].length;if(r.length===0)throw Error(`Ragged splits may not be empty`);if(r[0]<0)throw Error(`Ragged splits must be non-negative`);if(r[r.length-1]>i)throw Error(`Ragged splits must not point past values`);for(let e=1;e<r.length;++e)if(r[e-1]>r[e])throw Error(`Ragged splits must be sorted in ascending order`)}}function PN(e,t,n,r){let i=[],a=0,o=t.length-1+n.length,s=Array(o).fill(null).map(()=>[0]);NN(n,r);let c=1;for(let e=0;e<t.length-1;++e){c*=t[e];let n=t[e+1];for(let t=1;t<c+1;++t)s[e].push(t*n)}for(let r=0;r<e.length;++r){let o=e[r],c=e[r]+1;for(let e=0;e<n.length;++e){let r=n[e],i=e+t.length-1;if(i>=0){let e=s[i],t=e[e.length-1]-r[o];for(let e=o;e<c;++e)s[i].push(r[e+1]+t)}o=r[o],c=r[c]}c!==o&&(i.push([o,c]),a+=c-o)}return{outSplits:s,valueSlices:i,numValues:a}}function FN(e){let t=[];for(let n=0;n<e.length;++n){let r=e[n].length,i=Co(`int32`,r);t.push(i),e[n].forEach((e,t)=>i[t]=e)}return t}function IN(e,t){let n=e.slice(0,t);for(;n.length<t;)n.push(1);for(let r=t;r<e.length;r++)n[t-1]*=e[r];return n}function LN(e,t,n,r,i,a){let o=IN(t,2)[1],s=IN(a,2)[1],c=0;for(let t of n)for(let n=t[0];n<t[1];++n){for(let t=0;t<r;++t)i[c*s+t]=e[n*o+t];++c}}function RN(e,t,n,r,i){let a=t.slice();a[0]=i;let o=Co(n,k(a)),s=e.length;return LN(e,t,r,s===0?0:s/t[0],o,a),[o,a]}function zN(e,t,n,r,i,a,o,s){if(e.length===0)throw Error(`paramsNestedSplits must be non empty`);if(t[0].length===0)throw Error(`Split tensors must not be scalars`);if(MN(a,o,t[0][0]-1),r.length===0)throw Error(`params.rank must be nonzero`);let c=r[0],{outSplits:l,valueSlices:u,numValues:d}=PN(a,o,e,c),f=FN(l),p=RN(n,r,i,u,d);return[f,p[0],p[1]]}var BN=2147483647;function VN(e,t,n,r,i,a,o){if(t.length>1)throw Error(`starts must be a scalar or vector`);if(i.length>1)throw Error(`limits must be a scalar or vector`);if(o.length>1)throw Error(`deltas must be a scalar or vector`);let s=t.length===0,c=i.length===0,l=o.length===0,u=[];s||u.push(t[0]),c||u.push(i[0]),l||u.push(o[0]);for(let e=1;e<u.length;++e)if(u[e]!==u[e-1])throw Error(`starts, limits, and deltas must have the same shape`);let d=u.length===0?1:u[0],f=Co(`int32`,d+1);f[0]=0;for(let t=0;t<d;++t){let n=s?e[0]:e[t],i=c?r[0]:r[t],o=l?a[0]:a[t];if(o===0)throw Error(`Requires delta != 0`);let u;if(o>0&&i<n||o<0&&i>n)u=0;else if(u=Math.ceil(Math.abs((i-n)/o)),u>BN)throw Error(`Requires ((limit - start) / delta) <= ${BN}`);f[t+1]=f[t]+u}let p=f[d],m=Co(n,p),h=0;for(let t=0;t<d;++t){let n=f[t+1]-f[t],r=s?e[0]:e[t],i=l?a[0]:a[t];for(let e=0;e<n;++e)m[h++]=r,r+=i}return[f,m]}var HN=ux,UN=class e{constructor(e,t,n,r,i,a,o,s,c,l){this.shape=e,this.shapeShape=t,this.values=n,this.valuesShape=r,this.valuesDType=i,this.defaultValue=a,this.defaultValueShape=o,this.rowPartitionValues=s,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=fx(l),this.raggedRank=px(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===HN.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===HN.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(t){let n=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case HN.VALUE_ROWIDS:return e.getMaxWidthValueRowID(n);case HN.ROW_SPLITS:return e.getMaxWidthRowSplit(n);default:throw Error(`Cannot handle partition type ${HN[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(e){let t=e.length;if(t===0||t===1)return 0;let n=0;for(let r=0;r<t-1;++r){let t=e[r+1]-e[r];t>n&&(n=t)}return n}static getMaxWidthValueRowID(e){let t=e.length;if(t===0)return 0;let n=0,r=e[0],i=0;for(let a=1;a<t;++a){let t=e[a];t!==r&&(r=t,i=Math.max(a-n,i),n=a)}return Math.max(t-n,i)}tensorShapeFromTensor(e,t,n=!0){if(t.length===0){if(e[0]===-1)return[];throw Error(`The only valid scalar shape tensor is the fully unknown shape specified as -1.`)}return GN(e,n)}calculateOutputSize(e){let t=this.valuesShape,n=this.defaultValueShape;mx(n,t);let r=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=dx(this.raggedRank,r,t);i[0]<0&&(i[0]=e);for(let e=1;e<=this.raggedRank;++e)i[e]<0&&(i[e]=this.getMaxWidth(e));return i}calculateFirstParentOutputIndex(e,t,n){let r=Math.min(e,n),i=[],a=0;for(let e=0;e<r;++e,a+=t)i.push(a);for(let t=r;t<e;++t)i.push(-1);return O(i.length===e,()=>`Final length of result must be equal to firstDimension.`),i}calculateOutputIndexRowSplit(e,t,n,r){let i=e.length,a=[];for(let o=0;o<i-1;++o){let i=e[o+1]-e[o],s=Math.min(r,i),c=t[o];c===-1&&(s=0);for(let e=0;e<s;++e)a.push(c),c+=n;for(let e=0;e<i-s;++e)a.push(-1)}if(i>0&&a.length!==e[i-1])throw Error(`Invalid row split size.`);return a}calculateOutputIndexValueRowID(e,t,n,r){let i=e.length,a=[];if(i===0)return[];let o=0,s=e[0];if(s>=t.length)throw Error(`Got currentValueRowId=${s}, which is not less than ${t.length}`);let c=t[s];a.push(c);for(let l=1;l<i;++l){let i=e[l];if(i===s)c>=0&&(++o,o<r?c+=n:c=-1);else{if(o=0,s=i,i>=t.length)throw Error(`Got nextValueRowId=${i} which is not less than ${t.length}`);c=t[i]}a.push(c)}if(a.length!==e.length)throw Error(`Invalid row ids.`);return a}calculateOutputIndex(e,t,n,r){let i=this.getRowPartitionTensor(e),a=this.getRowPartitionTypeByDimension(e);switch(a){case HN.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(i,t,n,r);case HN.ROW_SPLITS:if(i.length-1>t.length)throw Error(`Row partition size is greater than output size: ${i.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(i,t,n,r);default:throw Error(`Unsupported partition type: ${HN[a]}`)}}getFirstDimensionSize(){let e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw Error(`No row_partition_types given.`);let t=this.rowPartitionTypes[0];switch(t){case HN.FIRST_DIM_SIZE:return e[0];case HN.VALUE_ROWIDS:throw Error(`Cannot handle VALUE_ROWIDS in first dimension.`);case HN.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw Error(`Cannot handle type ${HN[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw Error(`Invalid first partition input. Tensor requires at least one element.`);let e=this.getFirstDimensionSize(),t=this.calculateOutputSize(e),n=Array(this.raggedRank+1);n[n.length-1]=1;for(let e=n.length-2;e>=0;--e)n[e]=n[e+1]*t[e+1];let r=GN(t,!1),i=Co(this.valuesDType,k(r));if(n[0]*t[0]>0){let a=this.calculateFirstParentOutputIndex(e,n[0],t[0]);for(let e=1;e<=this.raggedRank;++e)a=this.calculateOutputIndex(e-1,a,n[e],t[e]);this.setOutput(this.raggedRank,a,i,r)}return[r,i]}setOutput(e,t,n,r){if(n.length===0)return;let i=this.values,a=n,o=r.slice();o=o.slice(e+1);let s=k(o),c=t.length,l=this.defaultValue;if(l.length!==s&&l.length!==1){let e=this.defaultValueShape;I(()=>{l=om(H(l,e),o).dataSync()})}let u=0,d=0,f=0;for(let e=0;e<=c;++e){let r=e<c?t[e]:-1;if(r===f){++f;continue}if(d<f){let e=i.subarray(u*s);WN(a.subarray(d*s),e,(f-d)*s)}if(e>=c){let e=n.length;r=Math.floor(e/s)}if(r>f){if(this.defaultValue.length===1)a.subarray(f*s,r*s).fill(this.defaultValue[0]),f=r;else for(;r>f;)WN(a.slice(f*s),l,s),++f}r<0?(u=e+1,d=f):(u=e,d=f,f=d+1)}}};function WN(e,t,n){for(let r=0;r<n;r++)e[r]=t[r]}function GN(e,t){let n=[];for(let r of e){if(r<0){if(!t)throw Error(`Dimension ${r} must be >= 0`);if(r<-1)throw Error(`Dimension ${r} must be >= -1`);r=-1}n.push(r)}return n}function KN(e,t,n,r,i,a,o,s,c,l){return new UN(e,t,n,r,i,a,o,s,c,l).compute()}function qN(e,t,n,r){if(e===t||e<t&&n<0||t<e&&n>1)return zo(0,r);let i=zo(Math.abs(Math.ceil((t-e)/n)),r);t<e&&n===1&&(n=-1),i[0]=e;for(let e=1;e<i.length;e++)i[e]=i[e-1]+n;return i}var JN=IM(e=>1/Math.sqrt(e)),YN={kernelName:sl,backendName:`cpu`,kernelFunc:RM(sl,JN)};function XN(e,t,n,r,i,a,o,s,c,l){let u=[r/i,i],d=e.values,f=t.values;if(r===0)return Mf(n,t.dtype);let p=c instanceof Ku?c:Mf(u,t.dtype);typeof c==`string`||typeof c==`number`?p.values.fill(c):typeof c==`boolean`&&p.values.fill(+c);for(let e=0;e<a;e++){let a=[],c=0;for(let t=0;t<o;t++){let n=d[e*o+t];a.push(n),c+=n*s[t]}if(c<0||c>=r/i)throw Error(`Invalid indices: ${a} does not index into ${n}`);for(let n=0;n<i;n++)l?p.values[c*i+n]+=f[e*i+n]:p.values[c*i+n]=t.rank===0?f[0]:f[e*i+n]}return p}var ZN=IM(e=>1/(1+Math.exp(-e))),QN=LM(gl,e=>1/(1+Math.exp(-e))),$N={kernelName:gl,backendName:`cpu`,kernelFunc:QN};function eP(e,t,n,r,i){let a=$b(r,t,n),o=k(n),s=A(r);if(a){let n=ex(t,s);return i===`string`?e.slice(n,n+o):e.subarray(n,n+o)}let c=Mf(r,i,i===`string`?fS(e):e),l=Mf(n,i);for(let e=0;e<l.size;++e){let n=l.indexToLoc(e),r=n.map((e,n)=>e+t[n]);l.set(c.get(...r),...n)}return i===`string`?pS(l.values):l.values}function tP(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,size:o}=r;X(i,`slice`);let[s,c]=tx(i,a,o);Vb(i,s,c);let l=n.data.get(i.dataId).values,u=eP(l,s,c,i.shape,i.dtype);return n.makeTensorInfo(c,i.dtype,u)}var nP={kernelName:pl,backendName:`cpu`,kernelFunc:tP};function rP(e,t,n,r,i,a,o){let s=t[0],c=a[0],l=Array(c),u=Array(s),d=t[1];if(c===0){if(s!==0)throw Error(Yx(s));let e=Co(n,0),t=Co(i,0);return[e,[0,d],t,l,u]}let f=!0,p=0,m=Array(c).fill(0);for(let t=0;t<s;++t){let n=e[t*d];if(n<0)throw Error(Xx(t,n));if(n>=c)throw Error(Zx(t,n,c));++m[n],f&&=n>=p,p=n}let h=!0;for(let e=0;e<c;++e){let t=m[e]===0;l[e]=t,h&&=!t,m[e]=Math.max(m[e],1),e>0&&(m[e]+=m[e-1])}if(h&&f){let t=e,n=r;for(let e=0;e<s;++e)u[e]=e;return[t,[s,d],n,l,u]}{let t=m[c-1],a=Co(n,t*d),f=Co(i,t),p=Array(c).fill(0);for(let t=0;t<s;++t){let n=e[t*d],i=p[n],o=(n===0?0:m[n-1])+i;p[n]++;for(let n=0;n<d;++n)a[o*d+n]=e[t*d+n];f[o]=r[t],u[t]=o}for(let e=0;e<c;++e)if(p[e]===0){let t=e===0?0:m[e-1];a[t*d+0]=e;for(let e=1;e<d;++e)a[t*d+e]=0;f[t]=o}return[a,[t,d],f,l,u]}}function iP(e,t,n,r,i){let a=k(r),o=t[0],s=i.length,c=[],l=1,u=-1;for(let e=0;e<s;++e){let t=i[e];if(t===-1){if(u!==-1)throw Error(Qx(u,e));u=e,c.push(1)}else{if(t<0)throw Error($x(e,t));l*=t,c.push(t)}}if(u!==-1){if(l<=0)throw Error(eS());let e=Math.trunc(a/l);if(l*e!==a)throw Error(tS(r,c));c[u]=e}if(k(c)!==a)throw Error(nS(r,c));let d=r.length,f=[];if(d>0){f[d-1]=1;for(let e=d-2;e>=0;--e)f[e]=f[e+1]*r[e+1]}let p=[];if(s>0){p[s-1]=1;for(let e=s-2;e>=0;--e)p[e]=p[e+1]*c[e+1]}let m=Co(n,o*s);for(let t=0;t<o;++t){let n=0;for(let r=0;r<d;++r)n+=e[t*d+r]*f[r];for(let e=0;e<s;++e)m[t*s+e]=Math.trunc(n/p[e]),n%=p[e]}return[m,[o,s],c]}function aP(e,t,n,r,i,a=!1,o=0){let s=r.length,c=[t[0],e.length/t[0]],l=c[1],u=s>0?i[s-1]+1:0;if(u<0)throw Error(rS());let d=t.slice();d[0]=u;let f=Co(n,d.reduce((e,t)=>e*t,1));if(s===0)return u>0&&f.fill(o),[f,d];if(u<=0)throw Error(rS());let p=0,m=1,h=0,g=i[p];for(;;){let t=0;if(m<s){if(t=i[m],g===t){++m;continue}if(g>=t)throw Error(iS())}if(g<0||g>=u)throw Error(aS(g,u));g>h&&f.fill(o,h*l,g*l);for(let t=p;t<m;++t){let n=r[t];if(n<0||n>=c[0])throw Error(oS(t,r[t],c[0]));for(let t=0;t<l;t++)f[g*l+t]+=e[n*l+t]}if(a)for(let e=0;e<l;e++)f[g*l+e]/=m-p;if(p=m,++m,h=g+1,g=t,m>s)break}return h<u&&f.fill(o,h*l,u*l),[f,d]}var oP=IM(e=>Math.sqrt(e)),sP={kernelName:vl,backendName:`cpu`,kernelFunc:LM(vl,e=>Math.sqrt(e))},cP=gM(((e,t)=>{let n=e-t;return n*n})),lP={kernelName:Dl,backendName:`cpu`,kernelFunc:DM(Dl,cP)},uP=IM((e,t)=>{let{pattern:n,replaceGlobal:r,rewrite:i}=t;return e.replace(new RegExp(n,r?`g`:``),i)}),dP={kernelName:kl,backendName:`cpu`,kernelFunc:RM(kl,uP)};function fP(e,t,n,r){let i=Mf(e,t.dtype);for(let e=0;e<i.size;e++){let a=i.indexToLoc(e),o=Array(a.length);for(let e=0;e<o.length;e++)o[e]=a[e]*n[e]+r[e];i.set(t.get(...o),...a)}return i}var pP=class{constructor(e,t,n,r,i,a){this.separator=Ou(e),this.nGramWidths=t,this.leftPad=Ou(n),this.rightPad=Ou(r),this.padWidth=i,this.preserveShort=a}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){let n=this.getPadWidth(t);return Math.max(0,e+2*n-t+1)}createNGrams(e,t,n,r,i,a){for(let o=0;o<i;++o){let s=this.getPadWidth(a),c=Math.max(0,s-o),l=Math.max(0,s-(i-(o+1))),u=a-(c+l),d=t+(c>0?0:o-s),f=0;f+=c*this.leftPad.length;for(let t=0;t<u;++t)f+=e[d+t].length;f+=l*this.rightPad.length;let p=c+l+u-1;f+=p*this.separator.length,n[r+o]=new Uint8Array(f);let m=n[r+o],h=0,g=e=>e.forEach(e=>m[h++]=e);for(let e=0;e<c;++e)g(this.leftPad),g(this.separator);for(let t=0;t<u-1;++t)g(e[d+t]),g(this.separator);if(u>0){g(e[d+u-1]);for(let e=0;e<l;++e)g(this.separator),g(this.rightPad)}else{for(let e=0;e<l-1;++e)g(this.rightPad),g(this.separator);g(this.rightPad)}}}compute(e,t){let n=e.length,r=t.length;if(r>0){let e=t[0];if(e!==0)throw Error(`First split value must be 0, got ${e}`);for(let i=1;i<r;++i){let r=t[i]>=e;if(r&&=t[i]<=n,!r)throw Error(`Invalid split value ${t[i]}, must be in [${e}, ${n}]`);e=t[i]}if(e!==n)throw Error(`Last split value must be data size. Expected ${n}, got ${e}`)}let i=r-1,a=Co(`int32`,r);if(n===0||r===0){let e=Array(n);for(let e=0;e<=i;++e)a[e]=0;return[e,a]}a[0]=0;for(let e=1;e<=i;++e){let n=t[e]-t[e-1],r=0;this.nGramWidths.forEach(e=>{r+=this.getNumNGrams(n,e)}),this.preserveShort&&n>0&&r===0&&(r=1),a[e]=a[e-1]+r}let o=Array(a[i]);for(let n=0;n<i;++n){let r=t[n],i=a[n];if(this.nGramWidths.forEach(a=>{let s=t[n+1]-t[n],c=this.getNumNGrams(s,a);this.createNGrams(e,r,o,i,c,a),i+=c}),this.preserveShort&&i===a[n]){let a=t[n+1]-t[n];if(a===0)continue;let s=a+2*this.padWidth;this.createNGrams(e,r,o,i,1,s)}}return[o,a]}};function mP(e,t,n,r,i,a,o,s){return new pP(n,r,i,a,o,s).compute(e,t)}function hP(e,t,n,r){if(!e.length)return;if(t.length===0){for(let t=0;t<e.length;++t)r.push(e.subarray(t,t+1));return}if(t.length===1){let i=t[0],a=e.indexOf(i);for(;a!==-1;){let t=e.subarray(0,a);(!n||t.length!==0)&&r.push(t),e=e.subarray(a+1),a=e.indexOf(i)}(!n||e.length!==0)&&r.push(e);return}let i=0;for(let a=0;a<e.length+1;a++)if(a===e.length||t.indexOf(e[a])!==-1){let t=e.subarray(i,a);(!n||t.length!==0)&&r.push(t),i=a+1}}function gP(e,t,n){let r=e.length,i=[],a=0,o=0,s=Array(r);for(let c=0;c<r;++c){let r=i.length;hP(e[c],t,n,i);let l=i.length-r;s[c]=l,a+=l,o=Math.max(o,l)}let c=Co(`int32`,a*2),l=Array(a),u=[r,o],d=0;for(let e=0;e<r;++e)for(let t=0;t<s[e];++t)c[d*2]=e,c[d*2+1]=t,l[d]=i[d],++d;return[c,l,u]}function _P(e,t){let n=Co(`int32`,e.length);for(let r=0;r<e.length;++r)n[r]=Cu(e[r]).modulo(t).getLowBitsUnsigned();return n}var vP=gM(((e,t)=>e-t)),yP=DM(`Sub`,vP,OM(((e,t,n,r)=>({real:e-n,imag:t-r})))),bP={kernelName:`Sub`,backendName:`cpu`,kernelFunc:yP};function xP(e,t){let n=Array(e.rank);for(let r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];let r=Mf(n,e.dtype);for(let t=0;t<r.values.length;++t){let n=r.indexToLoc(t),i=Array(e.rank);for(let t=0;t<i.length;t++)i[t]=n[t]%e.shape[t];let a=e.locToIndex(i);r.values[t]=e.values[a]}return r}var SP=(e,t)=>{let n=t.value-e.value;return n===0?e.index-t.index:n};function CP(e,t,n=0,r=e.length-1){for(;r>n;){if(r-n>600){let i=r-n+1,a=t-n+1,o=Math.log(i),s=.5*Math.exp(2*o/3),c=.5*Math.sqrt(o*s*(i-s)/i)*Math.sign(a-i/2);CP(e,t,Math.max(n,Math.floor(t-a*s/i+c)),Math.min(r,Math.floor(t+(i-a)*s/i+c)))}let i=e[t],a=n,o=r;for(lo(e,n,t),SP(e[r],i)>0&&lo(e,n,r);a<o;){for(lo(e,a,o),a++,o--;SP(e[a],i)<0;)a+=1;for(;SP(e[o],i)>0;)--o}SP(e[n],i)===0?lo(e,n,o):(o+=1,lo(e,o,r)),o<=t&&(n=o+1),t<=o&&(r=o-1)}}function wP(e,t,n,r,i){let a=t[t.length-1],[o,s]=[e.length/a,a],c=So(n,o*r),l=So(`int32`,o*r);for(let t=0;t<o;t++){let n=t*s,a=e.subarray(n,n+s),o=Array(a.length);a.forEach((e,t)=>o[t]={value:e,index:t}),r<o.length&&(CP(o,r),o=o.slice(0,r)),i&&o.sort(SP);let u=t*r,d=c.subarray(u,u+r),f=l.subarray(u,u+r);for(let e=0;e<r;e++)d[e]=o[e].value,f[e]=o[e].index}let u=t.slice();return u[u.length-1]=r,[Mf(u,n,c),Mf(u,`int32`,l)]}function TP(e,t,n,r){let i=bo(t,n)[0],a=[1,n[0],1];for(let e=0;e<i;e++)a[0]*=n[e];a[1]=n[i];for(let e=i+1;e<n.length;e++)a[2]*=n[e];let o=new Map,s=new Int32Array(n[i]),c=new Ku(a,r,e),l=[],u=a[0]===1&&a[2]===1;for(let t=0;t<n[i];t++){let n;if(u)n=e[t].toString();else{let e=[];for(let n=0;n<a[0];n++)for(let r=0;r<a[2];r++)e.push(c.get(n,t,r));n=e.join(`,`)}let r=o.get(n);if(r!=null)s[t]=r;else{let e=o.size;o.set(n,e),s[t]=e,l.push(t)}}let d=a.slice();d[1]=o.size;let f=new Ku(d,r);l.forEach((e,t)=>{for(let n=0;n<a[0];n++)for(let r=0;r<a[2];r++)f.set(c.get(n,e,r),n,t,r)});let p=n.slice();return p[i]=d[1],{outputValues:f.values,outputShape:p,indices:s}}var EP=s({addImpl:()=>kM,bincountImpl:()=>MM,bincountReduceImpl:()=>NM,bitwiseAndImpl:()=>PM,castImpl:()=>wM,ceilImpl:()=>zM,concatImpl:()=>VM,equalImpl:()=>HM,expImpl:()=>GM,expm1Impl:()=>JM,floorDivImpl:()=>QM,floorImpl:()=>XM,gatherNdImpl:()=>eN,gatherV2Impl:()=>tN,greaterEqualImpl:()=>iN,greaterImpl:()=>nN,lessEqualImpl:()=>cN,lessImpl:()=>oN,linSpaceImpl:()=>uN,logImpl:()=>dN,maxImpl:()=>pN,maximumImpl:()=>mN,minimumImpl:()=>gN,multiplyImpl:()=>vN,negImpl:()=>xN,notEqualImpl:()=>wN,prodImpl:()=>kN,raggedGatherImpl:()=>zN,raggedRangeImpl:()=>VN,raggedTensorToTensorImpl:()=>KN,rangeImpl:()=>qN,rsqrtImpl:()=>JN,scatterImpl:()=>XN,sigmoidImpl:()=>ZN,simpleAbsImpl:()=>mM,sliceImpl:()=>eP,sparseFillEmptyRowsImpl:()=>rP,sparseReshapeImpl:()=>iP,sparseSegmentReductionImpl:()=>aP,sqrtImpl:()=>oP,squaredDifferenceImpl:()=>cP,staticRegexReplaceImpl:()=>uP,stridedSliceImpl:()=>fP,stringNGramsImpl:()=>mP,stringSplitImpl:()=>gP,stringToHashBucketFastImpl:()=>_P,subImpl:()=>vP,tileImpl:()=>xP,topKImpl:()=>wP,transposeImpl:()=>EN,uniqueImpl:()=>TP});zd(`cpu`,()=>new pM,1);var DP=LM(`Elu`,e=>e>=0?e:Math.exp(e)-1),OP={kernelName:`Elu`,backendName:`cpu`,kernelFunc:DP};function kP(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{alpha:a}=r;X([i],`leakyRelu`);let o=k(i.shape),s=n.data.get(i.dataId).values,c=So(`float32`,o);for(let e=0;e<s.length;e++)c[e]=s[e]<0?a*s[e]:s[e];return n.makeTensorInfo(i.shape,`float32`,c)}var AP={kernelName:hc,backendName:`cpu`,kernelFunc:kP},jP=gM((e,t)=>e<0?t*e:e);function MP(e){let{inputs:t,backend:n}=e,{x:r,alpha:i}=t;X([r,i],`prelu`);let a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,[s,c]=jP(r.shape,i.shape,a,o,`float32`);return n.makeTensorInfo(c,`float32`,s)}var NP={kernelName:Wc,backendName:`cpu`,kernelFunc:MP},PP=LM(Qc,e=>Math.max(0,e)),FP={kernelName:Qc,backendName:`cpu`,kernelFunc:PP},IP=LM(il,e=>Math.min(Math.max(0,e),6)),LP={kernelName:il,backendName:`cpu`,kernelFunc:IP};function RP(e,t,n,r,i){if(n===`linear`)return bM({inputs:{x:t},backend:e});if(n===`relu`)return PP({inputs:{x:t},backend:e});if(n===`elu`)return DP({inputs:{x:t},backend:e});if(n===`relu6`)return IP({inputs:{x:t},backend:e});if(n===`prelu`)return MP({inputs:{x:t,alpha:r},backend:e});if(n===`leakyrelu`)return kP({inputs:{x:t},backend:e,attrs:{alpha:i}});if(n===`sigmoid`)return QN({inputs:{x:t},backend:e});throw Error(`Activation ${n} has not been implemented for the CPU backend.`)}function zP(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{shape:a}=r,o=k(i.shape),s=yo(a,o),c=k(s);O(o===c,()=>`The new shape (${s}) has ${c} elements and the old shape (${i.shape}) has ${o} elements. The new shape and old shape must have the same number of elements.`),n.incRef(i.dataId);let l=n.data.get(i.dataId);if(l.complexTensorInfos!=null){let e=l.complexTensorInfos.real,t=l.complexTensorInfos.imag;e.shape=s,t.shape=s}return{dataId:i.dataId,shape:s,dtype:i.dtype}}var BP={kernelName:$c,backendName:`cpu`,kernelFunc:zP};function VP(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a}=t,{transposeA:o,transposeB:s}=r;X([i,a],`matMul`);let c=i.shape.length,l=a.shape.length,u=o?i.shape[c-2]:i.shape[c-1],d=s?a.shape[l-1]:a.shape[l-2],f=o?i.shape[c-1]:i.shape[c-2],p=s?a.shape[l-2]:a.shape[l-1],m=i.shape.slice(0,-2),h=a.shape.slice(0,-2),g=k(m),_=k(h),v=U(i.shape.slice(0,-2),a.shape.slice(0,-2)).concat([f,p]);O(u===d,()=>`Error in matMul: inner shapes (${u}) and (${d}) of Tensors with shapes ${i.shape} and ${a.shape} and transposeA=${o} and transposeB=${s} must match.`);let y=o?[g,u,f]:[g,f,u],b=s?[_,p,d]:[_,d,p],x=zP({inputs:{x:i},backend:n,attrs:{shape:y}}),S=zP({inputs:{x:a},backend:n,attrs:{shape:b}}),C=o?x.shape[1]:x.shape[2],w=o?x.shape[2]:x.shape[1],T=s?S.shape[1]:S.shape[2],E=Math.max(g,_),D=n.data.get(x.dataId).values,ee=n.data.get(S.dataId).values,te=A(x.shape),ne=A(S.shape),[re,ie,ae]=o?[te[0],1,te[1]]:[te[0],te[1],1],[oe,se,ce]=s?[1,ne[1],ne[0]]:[ne[1],1,ne[0]],le=w*T,ue=Mf([E,w,T],x.dtype),de=ue.values,fe=n.blockSize;for(let e=0;e<E;e++){let t=e%g,n=e%_;for(let r=0;r<w;r+=fe){let i=Math.min(r+fe,w);for(let a=0;a<T;a+=fe){let o=Math.min(a+fe,T);for(let s=0;s<C;s+=fe){let c=Math.min(s+fe,C);for(let l=r;l<i;l++)for(let r=a;r<o;r++){let i=0;for(let e=s;e<c;e++){let a=D[t*re+l*ie+e*ae],o=ee[e*oe+r*se+n*ce];i+=a*o}de[e*le+(l*T+r)]+=i}}}}}return n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(S),n.makeTensorInfo(v,ue.dtype,ue.values)}var HP={kernelName:gs,backendName:`cpu`,kernelFunc:VP};function UP(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a,bias:o,preluActivationWeights:s}=t,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=r,f,p,m,h=[];f=VP({inputs:{a:i,b:a},attrs:{transposeA:c,transposeB:l},backend:n}),o&&(p=AM({inputs:{a:f,b:o},backend:n}),h.push(f),f=p),u&&(m=RP(n,f,u,s,d),h.push(f),f=m);for(let e of h)n.disposeIntermediateTensorInfo(e);return f}var WP={kernelName:Kl,backendName:`cpu`,kernelFunc:UP},GP={kernelName:ns,backendName:`cpu`,kernelFunc:LM(ns,e=>Math.acos(e))},KP={kernelName:rs,backendName:`cpu`,kernelFunc:LM(rs,e=>Math.acosh(e))};function qP(e){let{inputs:t,backend:n}=e,r=t;X(t,`addN`);let i=r.map(e=>n.data.get(e.dataId).values),a=Mf(r[0].shape,r[0].dtype),o=a.values;for(let e=0;e<r.length;e++){let t=i[e];for(let e=0;e<o.length;e++)o[e]+=t[e]}return n.makeTensorInfo(a.shape,a.dtype,a.values)}var JP={kernelName:is,backendName:`cpu`,kernelFunc:qP};function YP(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`all`);let s=bo(a,i.shape),c=s,l=yh(c,i.shape.length),u=i;l!=null&&(u=DN({inputs:{x:i},backend:n,attrs:{perm:l}}),c=xh(c.length,i.shape.length)),vh(`all`,c,u.shape.length);let[d,f]=gh(u.shape,c),p=k(f),m=zo(k(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];n&&=r}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=_h(d,s),t=zP({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var XP={kernelName:`All`,backendName:`cpu`,kernelFunc:YP};function ZP(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`any`);let s=bo(a,i.shape),c=s,l=yh(c,i.shape.length),u=i;l!=null&&(u=DN({inputs:{x:i},backend:n,attrs:{perm:l}}),c=xh(c.length,i.shape.length)),vh(`any`,c,u.shape.length);let[d,f]=gh(u.shape,c),p=k(f),m=zo(k(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];n||=r}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=_h(d,s),t=zP({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var QP={kernelName:`Any`,backendName:`cpu`,kernelFunc:ZP};function $P(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r;X(i,`argMax`);let o=bo(a,i.shape),s=yh(o,i.shape.length),c=i,l=[];s!=null&&(c=DN({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=xh(o.length,c.shape.length)),o=[o[0]],vh(`argMax`,o,c.shape.length);let[u,d]=gh(c.shape,o),f=zo(k(u),`int32`),p=k(d),m=n.data.get(c.dataId).values;for(let e=0;e<f.length;++e){let t=e*p,n=m[t],r=0;for(let e=0;e<p;++e){let i=m[t+e];i>n&&(n=i,r=e)}f[e]=r}return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(u,`int32`,f)}var eF={kernelName:as,backendName:`cpu`,kernelFunc:$P};function tF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r;X(i,`argMin`);let o=bo(a,i.shape),s=yh(o,i.shape.length),c=i,l=[];s!=null&&(c=DN({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=xh(o.length,c.shape.length)),o=[o[0]],vh(`argMin`,o,c.shape.length);let[u,d]=gh(c.shape,o),f=zo(k(u),`int32`),p=k(d),m=n.data.get(c.dataId).values;for(let e=0;e<f.length;++e){let t=e*p,n=m[t],r=0;for(let e=0;e<p;++e){let i=m[t+e];i<n&&(n=i,r=e)}f[e]=r}return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(u,`int32`,f)}var nF={kernelName:os,backendName:`cpu`,kernelFunc:tF},rF={kernelName:ss,backendName:`cpu`,kernelFunc:LM(ss,e=>Math.asin(e))},iF={kernelName:cs,backendName:`cpu`,kernelFunc:LM(cs,e=>Math.asinh(e))},aF={kernelName:ls,backendName:`cpu`,kernelFunc:LM(ls,e=>Math.atan(e))},oF={kernelName:ds,backendName:`cpu`,kernelFunc:DM(ds,gM((e,t)=>Math.atan2(e,t)))},sF={kernelName:us,backendName:`cpu`,kernelFunc:LM(us,e=>Math.atanh(e))};function cF(e,t,n,r,i,a){let o=i.strideHeight,s=i.strideWidth,c=i.dilationHeight,l=i.dilationWidth,u=i.effectiveFilterHeight,d=i.effectiveFilterWidth,f=i.padInfo.top,p=i.padInfo.left,m=a===`max`?-1/0:1/0,h=Mf(i.outShape,n),g=h.values,_=i.outShape[1]*i.outShape[2]*i.outShape[3],v=i.outShape[2]*i.outShape[3],y=i.outShape[3];for(let t=0;t<i.batchSize;++t){let n=t*_,h=t*r[0];for(let t=0;t<i.inChannels;++t)for(let _=0;_<i.outHeight;++_){let b=_*o-f,x=Math.max(0,b),S=Math.min(i.inHeight,u+b),C=n+_*v;for(let n=0;n<i.outWidth;++n){let o=n*s-p,u=Math.max(0,o),f=Math.min(i.inWidth,d+o),_=m,v=0,b=0;for(let n=x;n<S;n+=c){let i=h+n*r[1];for(let n=u;n<f;n+=l){let o=e[i+n*r[2]+t];a===`max`&&o>_?_=o:a===`avg`&&(v+=o,b++)}if(isNaN(_))break}let w=C+n*y+t;g[w]=a===`avg`?v/b:_}}}return h}function lF(e,t,n,r,i=!1,a=!1){let o=Mf(r.outShape,`int32`),s=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,u=r.dilationWidth,d=r.effectiveFilterHeight,f=r.effectiveFilterWidth,p=r.padInfo.top,m=r.padInfo.left,h=Mf(t,n,e);for(let e=0;e<r.batchSize;++e)for(let t=0;t<r.inChannels;++t)for(let n=0;n<r.outHeight;++n){let g=n*s-p,_=g;for(;_<0;)_+=l;let v=Math.min(r.inHeight,d+g);for(let s=0;s<r.outWidth;++s){let d=s*c-m,p=d;for(;p<0;)p+=u;let y=Math.min(r.inWidth,f+d),b=-1/0,x=-1;for(let n=_;n<v;n+=l){let o=n-g;for(let s=p;s<y;s+=u){let c=s-d,l=h.get(e,n,s,t);l>b&&(b=l,x=i?a?((e*r.inHeight+n)*r.inWidth+s)*r.inChannels+t:(n*r.inWidth+s)*r.inChannels+t:o*f+c)}}o.set(x,e,n,s,t)}}return o}function uF(e,t,n,r,i,a){let o=i.strideDepth,s=i.strideHeight,c=i.strideWidth,l=i.dilationDepth,u=i.dilationHeight,d=i.dilationWidth,f=i.effectiveFilterDepth,p=i.effectiveFilterHeight,m=i.effectiveFilterWidth,h=i.padInfo.front,g=i.padInfo.top,_=i.padInfo.left,v=a===`max`?-1/0:1/0,y=Mf(i.outShape,n),b=y.values,x=i.outShape[1]*i.outShape[2]*i.outShape[3]*i.outShape[4],S=i.outShape[2]*i.outShape[3]*i.outShape[4],C=i.outShape[3]*i.outShape[4],w=i.outShape[4];for(let t=0;t<i.batchSize;++t){let n=t*x,y=t*r[0];for(let t=0;t<i.inChannels;++t)for(let x=0;x<i.outDepth;++x){let T=x*o-h,E=T;for(;E<0;)E+=l;let D=Math.min(i.inDepth,f+T),ee=n+x*S;for(let n=0;n<i.outHeight;++n){let o=n*s-g,f=o;for(;f<0;)f+=u;let h=Math.min(i.inHeight,p+o),x=ee+n*C;for(let n=0;n<i.outWidth;++n){let o=n*c-_,s=o;for(;s<0;)s+=d;let p=Math.min(i.inWidth,m+o),g=x+n*w,S=v,C=0,T=0;for(let n=E;n<D;n+=l){let i=y+n*r[1];for(let n=f;n<h;n+=u){let o=i+n*r[2];for(let n=s;n<p;n+=d){let i=e[o+n*r[3]+t];if(a===`max`&&i>S?S=i:a===`avg`&&(C+=i,T++),isNaN(S))break}if(isNaN(S))break}if(isNaN(S))break}let ee=g+t;b[ee]=a===`avg`?C/Math.max(T,1):S}}}}return y}function dF(e,t){let n=Mf(t.outShape,`int32`),r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,o=t.dilationDepth,s=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,u=t.effectiveFilterHeight,d=t.effectiveFilterWidth,f=t.padInfo.front,p=t.padInfo.top,m=t.padInfo.left;for(let h=0;h<t.batchSize;++h)for(let g=0;g<t.inChannels;++g)for(let _=0;_<t.outDepth;++_){let v=_*r-f,y=v;for(;y<0;)y+=o;let b=Math.min(t.inDepth,l+v);for(let r=0;r<t.outHeight;++r){let l=r*i-p,f=l;for(;f<0;)f+=s;let x=Math.min(t.inHeight,u+l);for(let i=0;i<t.outWidth;++i){let p=i*a-m,S=p;for(;S<0;)S+=c;let C=Math.min(t.inWidth,d+p),w=-1/0,T=-1;for(let t=y;t<b;t+=o){let n=t-v;for(let r=f;r<x;r+=s){let i=r-l;for(let a=S;a<C;a+=c){let o=a-p,s=e.get(h,t,r,a,g);s>=w&&(w=s,T=n*u*d+i*u+o)}}}n.set(T,h,_,r,i,g)}}}return n}function fF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;X(i,`avgPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;O(Dp(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=pp(i.shape,a,o,1,s,c),u;if(l.filterWidth===1&&l.filterHeight===1&&mo(l.inShape,l.outShape))u=bM({inputs:{x:i},backend:n});else{let e=n.data.get(i.dataId).values,t=A(i.shape),r=cF(e,i.shape,i.dtype,t,l,`avg`);u=n.makeTensorInfo(l.outShape,i.dtype,r.values)}return u}var pF={kernelName:fs,backendName:`cpu`,kernelFunc:fF};function mF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r;X(i,`avgPool3d`);let u=mp(i.shape,a,o,1,s,c,l),d=n.data.get(i.dataId).values,f=uF(d,i.shape,i.dtype,A(i.shape),u,`avg`);return n.makeTensorInfo(f.shape,`float32`,f.values)}var hF={kernelName:ms,backendName:`cpu`,kernelFunc:mF};function gF(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,{filterSize:o,strides:s,pad:c,dimRoundingMode:l}=r;X([i,a],`avgPool3DGrad`);let u=mp(a.shape,o,s,1,c,l),d=u.strideDepth,f=u.strideHeight,p=u.strideWidth,m=u.filterDepth,h=u.filterHeight,g=u.filterWidth,_=u.dilationDepth,v=u.dilationHeight,y=u.dilationWidth,b=u.effectiveFilterDepth,x=u.effectiveFilterHeight,S=u.effectiveFilterWidth,C=b-1-u.padInfo.front,w=S-1-u.padInfo.left,T=x-1-u.padInfo.top,E=Mf(a.shape,`float32`),D=1/(m*h*g),ee=n.bufferSync(i);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inDepth;++n)for(let r=0;r<u.inHeight;++r)for(let i=0;i<u.inWidth;++i){let a=n-C,o=r-T,s=i-w,c=0;for(let n=0;n<b;n+=_){let r=(a+n)/d;if(!(r<0||r>=u.outDepth||Math.floor(r)!==r))for(let n=0;n<x;n+=v){let i=(o+n)/f;if(!(i<0||i>=u.outHeight||Math.floor(i)!==i))for(let n=0;n<S;n+=y){let a=(s+n)/p;if(a<0||a>=u.outWidth||Math.floor(a)!==a)continue;let o=ee.get(e,r,i,a,t);c+=o}}}E.set(c*D,e,n,r,i,t)}return n.makeTensorInfo(E.shape,E.dtype,E.values)}var _F={kernelName:hs,backendName:`cpu`,kernelFunc:gF};function vF(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a;X([i,a],`avgPoolGrad`);let{filterSize:s,strides:c,pad:l}=r,u=pp(o.shape,s,c,1,l),d=u.strideHeight,f=u.strideWidth,p=u.filterHeight,m=u.filterWidth,h=u.dilationHeight,g=u.dilationWidth,_=u.effectiveFilterHeight,v=u.effectiveFilterWidth,y=v-1-u.padInfo.left,b=_-1-u.padInfo.top,x=Mf(o.shape,`float32`),S=1/(p*m),C=n.data.get(i.dataId).values,w=Mf(i.shape,`float32`,C);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inHeight;++n)for(let r=0;r<u.inWidth;++r){let i=n-b,a=r-y,o=0;for(let n=0;n<_;n+=h){let r=(i+n)/d;if(!(r<0||r>=u.outHeight||Math.floor(r)!==r))for(let n=0;n<v;n+=g){let i=(a+n)/f;if(i<0||i>=u.outWidth||Math.floor(i)!==i)continue;let s=w.get(e,r,i,t);o+=s}}x.set(o*S,e,n,r,t)}return n.makeTensorInfo(x.shape,x.dtype,x.values)}var yF={kernelName:ps,backendName:`cpu`,kernelFunc:vF};function bF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,scale:a,offset:o,mean:s,variance:c}=t;O(s.shape.length===c.shape.length,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),O(o==null||s.shape.length===o.shape.length,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),O(a==null||s.shape.length===a.shape.length,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`),X([i,s,c,a,o],`batchNorm`);let{varianceEpsilon:l}=r;l??=.001;let u=n.data.get(i.dataId).values,d=n.data.get(s.dataId).values,f=n.data.get(c.dataId).values,p=a?n.data.get(a.dataId).values:new Float32Array([1]),m=o?n.data.get(o.dataId).values:new Float32Array([0]),h=new Float32Array(u.length),g=m.length,_=p.length,v=f.length,y=d.length,b=0,x=0,S=0,C=0;for(let e=0;e<u.length;++e)h[e]=m[b++]+(u[e]-d[x++])*p[S++]/Math.sqrt(f[C++]+l),b>=g&&(b=0),x>=y&&(x=0),S>=_&&(S=0),C>=v&&(C=0);return n.makeTensorInfo(i.shape,i.dtype,h)}var xF={kernelName:ic,backendName:`cpu`,kernelFunc:bF};function SF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,crops:o}=r;X([i],`batchToSpaceND`);let s=a.reduce((e,t)=>e*t),c=_x(i.shape,a,s),l=vx(c.length,a.length),u=yx(i.shape,a,s),d=bx(o,a.length),f=xx(u,o,a.length),p=zP({inputs:{x:i},backend:n,attrs:{shape:c}}),m=DN({inputs:{x:p},backend:n,attrs:{perm:l}}),h=zP({inputs:{x:m},backend:n,attrs:{shape:u}}),g=tP({inputs:{x:h},backend:n,attrs:{begin:d,size:f}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),g}var CF={kernelName:_s,backendName:`cpu`,kernelFunc:SF};function wF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o}=r,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,l=MM(s,c,a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,l)}var TF={kernelName:vs,backendName:`cpu`,kernelFunc:wF};function EF(e){let{inputs:t,backend:n}=e,{s0:r,s1:i}=t,a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,s=U(Array.from(a),Array.from(o));return n.makeTensorInfo([s.length],`int32`,Int32Array.from(s))}var DF={kernelName:xs,backendName:`cpu`,kernelFunc:EF},OF={kernelName:ws,backendName:`cpu`,kernelFunc:LM(ws,(e,t)=>{let n=t;return e>n.clipValueMax?n.clipValueMax:e<n.clipValueMin?n.clipValueMin:e})},kF={kernelName:Es,backendName:`cpu`,kernelFunc:e=>{let{x:t}=e.inputs,n=e.backend,r=new Float32Array(k(t.shape)),i=n.data.get(t.dataId),a=i.complexTensorInfos.real,o=i.complexTensorInfos.imag,s=n.data.get(a.dataId).values,c=n.data.get(o.dataId).values;for(let e=0;e<s.length;e++){let t=s[e],n=c[e];r[e]=Math.hypot(t,n)}return n.makeOutput(r,t.shape,`float32`)}};function AF(e){let{inputs:t,backend:n}=e,{input:r}=t,i=n.data.get(r.dataId).complexTensorInfos.imag,a=n.data.get(i.dataId).values;return n.makeTensorInfo(i.shape,i.dtype,a)}var jF={kernelName:dc,backendName:`cpu`,kernelFunc:AF};function MF(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r,a=bo(i,t[0].shape)[0];cx(t.map(e=>e.shape),a);let o=lx(t.map(e=>e.shape),a);if(k(o)===0)return n.makeTensorInfo(o,t[0].dtype,[]);let s=t.filter(e=>k(e.shape)>0);if(s.length===1)return bM({inputs:{x:s[0]},backend:n});if(s[0].dtype===`complex64`){let e=s.map(e=>SM({inputs:{input:e},backend:n})),t=s.map(e=>AF({inputs:{input:e},backend:n})),r=MF({inputs:e,backend:n,attrs:{axis:a}}),i=MF({inputs:t,backend:n,attrs:{axis:a}}),o=_M({inputs:{real:r,imag:i},backend:n});return e.forEach(e=>n.disposeIntermediateTensorInfo(e)),t.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),o}let c=s.map(e=>{let t=[-1,k(e.shape.slice(a))];return zP({inputs:{x:e},backend:n,attrs:{shape:t}})}),l=c.map(e=>({vals:n.data.get(e.dataId).values,shape:e.shape}));o=lx(c.map(e=>e.shape),1);let u=c[0].shape[0]===1,d=VM(l,o,t[0].dtype,u),f=lx(s.map(e=>e.shape),a),p=n.makeTensorInfo(f,t[0].dtype,d);return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var NF={kernelName:Ds,backendName:`cpu`,kernelFunc:MF};function PF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dataFormat:c,dilations:l,dimRoundingMode:u}=r;X([i,a],`conv2d`);let d=kp(c),f=hp(i.shape,a.shape,o,l,s,u,!1,d),p=f.filterHeight,m=f.filterWidth,h=f.dilationHeight,g=f.dilationWidth,_=f.padInfo.left,v=f.padInfo.top,y=f.dataFormat===`channelsLast`,b=new Ku(f.outShape,i.dtype),x=A(i.shape),S=A(a.shape),C=x[0],w=y?x[1]:x[2],T=y?x[2]:1,E=y?1:x[1],D=b.strides[0],ee=y?b.strides[1]:b.strides[2],te=y?b.strides[2]:1,ne=y?1:b.strides[1],re=n.data.get(i.dataId).values,ie=n.data.get(a.dataId).values,ae=b.values;for(let e=0;e<f.batchSize;++e){let t=e*C,n=e*D;for(let e=0;e<f.outHeight;++e){let r=n+e*ee,i=e*f.strideHeight-v;for(let e=0;e<p;++e){let n=i+e*h;if(n<0||n>=f.inHeight)continue;let a=e*S[0],o=t+n*w;for(let e=0;e<f.outWidth;++e){let t=r+e*te,n=e*f.strideWidth-_;for(let e=0;e<m;++e){let r=n+e*g;if(r<0||r>=f.inWidth)continue;let i=a+e*S[1],s=o+r*T,c=i;for(let e=0;e<f.inChannels;++e){let n=re[s+e*E];for(let e=0;e<f.outChannels;++e)ae[t+e*ne]+=n*ie[c+e];c+=f.outChannels}}}}}}return n.makeTensorInfo(b.shape,b.dtype,ae)}var FF={kernelName:Os,backendName:`cpu`,kernelFunc:PF};function IF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,dataFormat:c,dimRoundingMode:l,filterShape:u}=r;X([i,a],`conv2dBackpropFilter`);let d=kp(c),f=hp(i.shape,u,o,1,s,l,!1,d),{strideHeight:p,strideWidth:m,filterHeight:h,filterWidth:g}=f,_=f.dataFormat===`channelsLast`,v=new Ku(f.filterShape,`float32`),y=f.padInfo.left,b=f.padInfo.top,x=n.data.get(i.dataId).values,S=n.data.get(a.dataId).values,C=new Ku(i.shape,i.dtype,x),w=new Ku(a.shape,a.dtype,S);for(let e=0;e<h;++e){let t=Math.max(0,Math.ceil((b-e)/p)),n=Math.min(f.outHeight,(f.inHeight+b-e)/p);for(let r=0;r<g;++r){let i=Math.max(0,Math.ceil((y-r)/m)),a=Math.min(f.outWidth,(f.inWidth+y-r)/m);for(let o=0;o<f.inChannels;++o)for(let s=0;s<f.outChannels;++s){let c=0;for(let l=0;l<f.batchSize;++l)for(let u=t;u<n;++u){let t=e+u*p-b;for(let e=i;e<a;++e){let n=r+e*m-y;c+=_?C.get(l,t,n,o)*w.get(l,u,e,s):C.get(l,o,t,n)*w.get(l,s,u,e)}}v.set(c,e,r,o,s)}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}var LF={kernelName:ks,backendName:`cpu`,kernelFunc:IF};function RF(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{inputShape:o,strides:s,pad:c,dataFormat:l,dimRoundingMode:u}=r;X([i,a],`conv2dBackpropInput`);let d=A(a.shape),f=A(i.shape),p=kp(l),m=hp(o,a.shape,s,1,c,u,!1,p),h=new Ku(m.inShape,`float32`),g=h.values,_=n.data.get(i.dataId).values,v=n.data.get(a.dataId).values,[y,b,x]=d,{batchSize:S,filterHeight:C,filterWidth:w,inChannels:T,inHeight:E,inWidth:D,outChannels:ee,outHeight:te,outWidth:ne,strideHeight:re,strideWidth:ie}=m;p=m.dataFormat;let ae=C-1-m.padInfo.top,oe=w-1-m.padInfo.left,se=p===`channelsLast`,ce=h.strides[0],le=se?h.strides[1]:h.strides[2],ue=se?h.strides[2]:1,de=se?1:h.strides[1],fe=f[0],pe=se?f[1]:f[2],me=se?f[2]:1,he=se?1:f[1];for(let e=0;e<S;++e)for(let t=0;t<T;++t)for(let n=0;n<E;++n){let r=n-ae,i=Math.max(0,Math.ceil(r/re)),a=Math.min(te,(C+r)/re);for(let o=0;o<D;++o){let s=o-oe,c=Math.max(0,Math.ceil(s/ie)),l=Math.min(ne,(w+s)/ie),u=0;for(let n=i;n<a;++n){let i=n*re-r;for(let r=c;r<l;++r){let a=r*ie-s,o=fe*e+pe*n+me*r,c=y*(C-1-i)+b*(w-1-a)+x*t;for(let e=0;e<ee;++e){let t=_[o+he*e],n=v[c+e];u+=t*n}}}let d=ce*e+le*n+ue*o+de*t;g[d]=u}}return n.makeTensorInfo(h.shape,h.dtype,h.values)}var zF={kernelName:As,backendName:`cpu`,kernelFunc:RF};function BF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r;X([i,a],`conv3d`);let l=gp(i.shape,a.shape,o,c,s),{filterDepth:u,filterHeight:d,filterWidth:f,dilationDepth:p,dilationHeight:m,dilationWidth:h,padInfo:g}=l,_=g.front,v=g.left,y=g.top,b=new Ku(l.outShape,i.dtype),x=n.data.get(i.dataId).values,S=n.data.get(a.dataId).values,C=b.values,w=A(i.shape),T=A(a.shape);for(let e=0;e<l.batchSize;++e){let t=e*w[0],n=e*b.strides[0];for(let e=0;e<l.outDepth;++e){let r=n+e*b.strides[1],i=e*l.strideDepth-_;for(let e=0;e<u;++e){let n=i+e*p;if(n<0||n>=l.inDepth)continue;let a=e*T[0],o=t+n*w[1];for(let e=0;e<l.outHeight;++e){let t=r+e*b.strides[2],n=e*l.strideHeight-y;for(let e=0;e<d;++e){let r=n+e*m;if(r<0||r>=l.inHeight)continue;let i=a+e*T[1],s=o+r*w[2];for(let e=0;e<l.outWidth;++e){let n=t+e*l.outChannels,r=e*l.strideWidth-v;for(let e=0;e<f;++e){let t=r+e*h;if(t<0||t>=l.inWidth)continue;let a=i+e*T[2],o=s+t*l.inChannels,c=a;for(let e=0;e<l.inChannels;++e){let t=x[o+e];for(let e=0;e<l.outChannels;++e)C[n+e]+=t*S[c+e];c+=l.outChannels}}}}}}}}return n.makeTensorInfo(b.shape,b.dtype,b.values)}var VF={kernelName:js,backendName:`cpu`,kernelFunc:BF};function HF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,filterShape:c}=r;X([i,a],`conv3dBackpropFilterV2`);let l=A(i.shape),u=A(a.shape),d=gp(i.shape,c,o,1,s),f=d.strideDepth,p=d.strideHeight,m=d.strideWidth,h=d.filterDepth,g=d.filterHeight,_=d.filterWidth,v=new Ku(d.filterShape,`float32`),y=v.values,[b,x,S,C]=v.strides,w=n.data.get(a.dataId).values,[T,E,D,ee]=u,te=n.data.get(i.dataId).values,[ne,re,ie,ae]=l,oe=d.padInfo.front,se=d.padInfo.left,ce=d.padInfo.top;for(let e=0;e<h;++e){let t=Math.max(0,Math.ceil((oe-e)/f)),n=Math.min(d.outDepth,(d.inDepth+oe-e)/f),r=e*b;for(let i=0;i<g;++i){let a=Math.max(0,Math.ceil((ce-i)/p)),o=Math.min(d.outHeight,(d.inHeight+ce-i)/p),s=i*x+r;for(let r=0;r<_;++r){let c=Math.max(0,Math.ceil((se-r)/m)),l=Math.min(d.outWidth,(d.inWidth+se-r)/m),u=r*S+s;for(let s=0;s<d.inChannels;++s){let h=s*C+u;for(let u=0;u<d.outChannels;++u){let g=0;for(let h=0;h<d.batchSize;++h){let d=h*ne,_=h*T;for(let h=t;h<n;++h){let t=(e+h*f-oe)*re+d,n=h*E+_;for(let e=a;e<o;++e){let a=(i+e*p-ce)*ie+t,o=e*D+n;for(let e=c;e<l;++e){let t=(r+e*m-se)*ae+a,n=e*ee+o;g+=te[t+s]*w[n+u]}}}}y[h+u]=g}}}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}var UF={kernelName:Ms,backendName:`cpu`,kernelFunc:HF};function WF(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{pad:o,strides:s,inputShape:c}=r;X([i],`conv3dBackpropInputV2`);let l=A(i.shape),u=A(a.shape),d=gp(c,a.shape,s,1,o),f=new Ku(d.inShape,`float32`),p=f.values,[m,h,g,_]=f.strides,v=n.data.get(i.dataId).values,[y,b,x,S]=l,C=n.data.get(a.dataId).values,[w,T,E,D]=u,{batchSize:ee,filterDepth:te,filterHeight:ne,filterWidth:re,inChannels:ie,inDepth:ae,inHeight:oe,inWidth:se,outChannels:ce,outDepth:le,outHeight:ue,outWidth:de,strideDepth:fe,strideHeight:pe,strideWidth:me}=d,he=te-1-d.padInfo.front,ge=ne-1-d.padInfo.top,_e=re-1-d.padInfo.left;for(let e=0;e<ee;++e)for(let t=0;t<ie;++t)for(let n=0;n<ae;++n){let r=n-he,i=Math.max(0,Math.ceil(r/fe)),a=Math.min(le,(te+r)/fe);for(let o=0;o<oe;++o){let s=o-ge,c=Math.max(0,Math.ceil(s/pe)),l=Math.min(ue,(ne+s)/pe);for(let u=0;u<se;++u){let d=u-_e,f=Math.max(0,Math.ceil(d/me)),ee=Math.min(de,(re+d)/me),ie=0;for(let n=i;n<a;++n){let i=n*fe-r;for(let r=c;r<l;++r){let a=r*pe-s;for(let o=f;o<ee;++o){let s=o*me-d,c=y*e+b*n+x*r+S*o,l=w*(te-1-i)+T*(ne-1-a)+E*(re-1-s)+D*t;for(let e=0;e<ce;++e){let t=v[c+e],n=C[l+e];ie+=t*n}}}}p[m*e+h*n+g*o+_*u+t]=ie}}}return n.makeTensorInfo(f.shape,f.dtype,f.values)}var GF={kernelName:Ns,backendName:`cpu`,kernelFunc:WF},KF={kernelName:`Cos`,backendName:`cpu`,kernelFunc:LM(`Cos`,e=>Math.cos(e))},qF={kernelName:Ps,backendName:`cpu`,kernelFunc:LM(Ps,e=>Math.cosh(e))};function JF(e){let{inputs:t,backend:n,attrs:r}=e,{image:i,boxes:a,boxInd:o}=t,{cropSize:s,method:c,extrapolationValue:l}=r,[u,d,f,p]=i.shape,m=a.shape[0],[h,g]=s,_=Mf([m,h,g,p],`float32`),v=n.data.get(a.dataId).values,y=n.data.get(o.dataId).values,b=n.data.get(i.dataId).values,x=A(i.shape),S=A(_.shape);for(let e=0;e<m;e++){let t=e*4,n=v[t],r=v[t+1],i=v[t+2],a=v[t+3],o=y[e];if(o>=u)continue;let s=h>1?(i-n)*(d-1)/(h-1):0,m=g>1?(a-r)*(f-1)/(g-1):0;for(let t=0;t<h;t++){let u=h>1?n*(d-1)+t*s:.5*(n+i)*(d-1);if(u<0||u>d-1){for(let n=0;n<g;n++)for(let r=0;r<p;r++){let i=r+n*S[2]+t*S[1]+e*S[0];_.values[i]=l}continue}if(c===`bilinear`){let n=Math.floor(u),i=Math.ceil(u),s=u-n;for(let c=0;c<g;c++){let u=g>1?r*(f-1)+c*m:.5*(r+a)*(f-1);if(u<0||u>f-1){for(let n=0;n<p;n++){let r=n+c*S[2]+t*S[1]+e*S[0];_.values[r]=l}continue}let d=Math.floor(u),h=Math.ceil(u),v=u-d;for(let r=0;r<p;r++){let a=r+d*x[2]+n*x[1]+o*x[0],l=b[a];a=r+h*x[2]+n*x[1]+o*x[0];let u=b[a];a=r+d*x[2]+i*x[1]+o*x[0];let f=b[a];a=r+h*x[2]+i*x[1]+o*x[0];let p=b[a],m=l+(u-l)*v,g=f+(p-f)*v;a=r+c*S[2]+t*S[1]+e*S[0],_.values[a]=m+(g-m)*s}}}else for(let n=0;n<g;++n){let i=g>1?r*(f-1)+n*m:.5*(r+a)*(f-1);if(i<0||i>f-1){for(let r=0;r<p;r++){let i=r+n*S[2]+t*S[1]+e*S[0];_.values[i]=l}continue}let s=Math.round(i),c=Math.round(u);for(let r=0;r<p;r++){let i=r+s*x[2]+c*x[1]+o*x[0],a=r+n*S[2]+t*S[1]+e*S[0];_.values[a]=b[i]}}}}return n.makeTensorInfo(_.shape,_.dtype,_.values)}var YF={kernelName:Ls,backendName:`cpu`,kernelFunc:JF};function XF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;X(i,`cumprod`);let c=yh([a],i.shape.length),l=i;c!=null&&(l=DN({inputs:{x:i},backend:n,attrs:{perm:c}}));let u=xh(1,i.shape.length)[0];if(u!==l.shape.length-1)throw Error(`backend.cumprod in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${u}`);let d=ad(l.dtype,`int32`),f=Ro(k(l.shape),d),p=n.data.get(l.dataId).values,m=l.shape[l.shape.length-1],h=s?(e,t)=>e+m-t-1:(e,t)=>e+t;for(let e=0;e<p.length;e+=m)for(let t=0;t<m;t++){let n=h(e,t);if(t===0)f[n]=o?1:p[n];else{let r=h(e,t-1);f[n]=o?p[r]*f[r]:p[n]*f[r]}}let g=n.makeTensorInfo(l.shape,d,f);if(c!=null){let e=bh(c),t=DN({inputs:{x:g},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(l),t}return g}var ZF={kernelName:Fs,backendName:`cpu`,kernelFunc:XF};function QF(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;X(i,`cumsum`);let c=yh([a],i.shape.length),l=i;c!=null&&(l=DN({inputs:{x:i},backend:n,attrs:{perm:c}}));let u=xh(1,i.shape.length)[0];if(u!==l.shape.length-1)throw Error(`backend.cumsum in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${u}`);let d=ad(l.dtype,`int32`),f=zo(k(l.shape),d),p=n.data.get(l.dataId).values,m=l.shape[l.shape.length-1],h=s?(e,t)=>e+m-t-1:(e,t)=>e+t;for(let e=0;e<p.length;e+=m)for(let t=0;t<m;t++){let n=h(e,t);if(t===0)f[n]=o?0:p[n];else{let r=h(e,t-1);f[n]=o?p[r]+f[r]:p[n]+f[r]}}let g=n.makeTensorInfo(l.shape,d,f);if(c!=null){let e=bh(c),t=DN({inputs:{x:g},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(l),t}return g}var $F={kernelName:Is,backendName:`cpu`,kernelFunc:QF};function eI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o,binaryOutput:s}=r;if(i.shape.length===1){let e=n.data.get(i.dataId).values,t=n.data.get(a.dataId).values,r=MM(e,t,a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,r)}if(i.shape.length===2){let e=NM(n.bufferSync(i),n.bufferSync(a),o,s);return n.makeTensorInfo(e.shape,a.dtype,e.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${i.shape.length}.`)}var tI={kernelName:Rs,backendName:`cpu`,kernelFunc:eI};function nI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockSize:a,dataFormat:o}=r;O(o===`NHWC`,()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${o}`);let s=i.shape[0],c=i.shape[1],l=i.shape[2],u=i.shape[3],d=c*a,f=l*a,p=u/(a*a),m=n.data.get(i.dataId).values,h=new Float32Array(s*d*f*p),g=0;for(let e=0;e<s;++e)for(let t=0;t<d;++t){let n=Math.floor(t/a),r=t%a;for(let t=0;t<f;++t){let i=Math.floor(t/a),o=t%a,s=(r*a+o)*p;for(let t=0;t<p;++t){let r=t+s+u*(i+l*(n+c*e));h[g++]=m[r]}}}return n.makeTensorInfo([s,d,f,p],i.dtype,h)}var rI={kernelName:zs,backendName:`cpu`,kernelFunc:nI};function iI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c,dimRoundingMode:l}=r;X([i,a],`depthwiseConv2DNative`);let u=A(i.shape),d=A(a.shape),f=c;f??=[1,1],O(Dp(o,f),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${f}'`);let p=hp(i.shape,a.shape,o,f,s,l,!0),{filterHeight:m,filterWidth:h,dilationHeight:g,dilationWidth:_,padInfo:v}=p,y=v.left,b=v.top,x=p.outChannels/p.inChannels,S=new Ku(p.outShape,i.dtype),C=n.data.get(i.dataId).values,w=n.data.get(a.dataId).values,T=S.values;for(let e=0;e<p.batchSize;++e){let t=e*u[0],n=e*S.strides[0];for(let e=0;e<p.outHeight;++e){let r=n+e*S.strides[1],i=e*p.strideHeight-b;for(let e=0;e<m;++e){let n=i+e*g;if(n<0||n>=p.inHeight)continue;let a=e*d[0],o=t+n*u[1];for(let e=0;e<p.outWidth;++e){let t=r+e*S.strides[2],n=e*p.strideWidth-y;for(let e=0;e<h;++e){let r=n+e*_;if(r<0||r>=p.inWidth)continue;let i=a+e*d[1],s=o+r*p.inChannels,c=t,l=i;for(let e=0;e<p.inChannels;++e){let t=C[s+e];for(let e=0;e<x;++e)T[c+e]+=t*w[l+e];c+=x,l+=x}}}}}}return n.makeTensorInfo(S.shape,S.dtype,S.values)}var aI={kernelName:Bs,backendName:`cpu`,kernelFunc:iI};function oI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,filterShape:u}=r;X([i,a],`depthwiseConv2dNativeBackpropFilter`);let d=hp(i.shape,u,o,s,c,l,!0),{strideHeight:f,strideWidth:p,filterHeight:m,filterWidth:h}=d,g=new Ku(d.filterShape,`float32`),_=d.padInfo.left,v=d.padInfo.top,y=d.outChannels/d.inChannels,b=n.data.get(i.dataId).values,x=new Ku(i.shape,i.dtype,b),S=n.data.get(a.dataId).values,C=new Ku(a.shape,a.dtype,S);for(let e=0;e<m;++e){let t=Math.max(0,Math.ceil((v-e)/f)),n=Math.min(d.outHeight,(d.inHeight+v-e)/f);for(let r=0;r<h;++r){let i=Math.max(0,Math.ceil((_-r)/p)),a=Math.min(d.outWidth,(d.inWidth+_-r)/p);for(let o=0;o<d.outChannels;++o){let s=Math.trunc(o/y),c=o%y,l=0;for(let c=0;c<d.batchSize;++c)for(let u=t;u<n;++u){let t=e+u*f-v;for(let e=i;e<a;++e){let n=r+e*p-_;l+=x.get(c,t,n,s)*C.get(c,u,e,o)}}g.set(l,e,r,s,c)}}}return n.makeTensorInfo(g.shape,g.dtype,g.values)}var sI={kernelName:Vs,backendName:`cpu`,kernelFunc:oI};function cI(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,inputShape:u}=r;X([i,a],`depthwiseConv2DNativeBackpropInput`);let d=A(i.shape),f=A(a.shape),p=hp(u,a.shape,o,s,c,l,!0),m=new Ku(p.inShape,`float32`),h=m.values,[g,_,v]=m.strides,y=n.data.get(i.dataId).values,[b,x,S]=d,C=n.data.get(a.dataId).values,[w,T,E]=f,{batchSize:D,filterHeight:ee,filterWidth:te,inChannels:ne,inHeight:re,inWidth:ie,outChannels:ae,outHeight:oe,outWidth:se,strideHeight:ce,strideWidth:le}=p,ue=ee-1-p.padInfo.top,de=te-1-p.padInfo.left,fe=ae/ne;for(let e=0;e<D;++e)for(let t=0;t<ne;++t)for(let n=0;n<re;++n){let r=n-ue,i=Math.max(0,Math.ceil(r/ce)),a=Math.min(oe,(ee+r)/ce);for(let o=0;o<ie;++o){let s=o-de,c=Math.max(0,Math.ceil(s/le)),l=Math.min(se,(te+s)/le),u=0;for(let n=i;n<a;++n){let i=n*ce-r;for(let r=c;r<l;++r){let a=r*le-s,o=b*e+x*n+S*r,c=w*(ee-1-i)+T*(te-1-a)+E*t;for(let e=0;e<fe;++e){let n=y[o+(t*fe+e)],r=C[c+e];u+=n*r}}}h[g*e+_*n+v*o+t]=u}}return n.makeTensorInfo(m.shape,m.dtype,m.values)}var lI={kernelName:Hs,backendName:`cpu`,kernelFunc:cI};function uI(e){let{inputs:t,backend:n}=e,{x:r}=t,i=k(r.shape),a=n.data.get(r.dataId).values,o=Mf([i,i],r.dtype),s=o.values;for(let e=0;e<a.length;e++)s[e*i+e]=a[e];let c=[...r.shape,...r.shape];return n.makeTensorInfo(c,o.dtype,o.values)}var dI={kernelName:Us,backendName:`cpu`,kernelFunc:uI},fI={kernelName:Ws,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i}=e,{strides:a,pad:o,dilations:s}=n,c=t,l=c.data.get(r.dataId).values,u=r.shape.length,d=c.data.get(i.dataId).values,f=i.shape.length,{batchSize:p,inHeight:m,inWidth:h,inChannels:g,outHeight:_,outWidth:v,padInfo:y,strideHeight:b,strideWidth:x,filterHeight:S,filterWidth:C,dilationHeight:w,dilationWidth:T,outShape:E}=fp(r.shape,i.shape,a,o,`NHWC`,s),D=k(E),ee=E.length,te=Co(r.dtype,D);for(let e=0;e<p;++e)for(let t=0;t<_;++t){let n=t*b-y.top;for(let a=0;a<v;++a){let o=a*x-y.left;for(let s=0;s<g;++s){let c=-(2**53-1);for(let t=0;t<S;++t){let a=n+t*w;if(a>=0&&a<m)for(let n=0;n<C;++n){let p=o+n*T;if(p>=0&&p<h){let o=Ho([e,a,p,s],u,A(r.shape)),m=Ho([t,n,s],f,A(i.shape)),h=l[o]+d[m];h>c&&(c=h)}}}let p=Ho([e,t,a,s],ee,A(E));te[p]=c}}}return{dataId:c.write(Eu(te,r.dtype),E,r.dtype),shape:E,dtype:r.dtype}}},pI={kernelName:Ks,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i,dy:a}=e,{strides:o,pad:s,dilations:c}=n,l=t,u=Io(r.shape,l.data.get(r.dataId).values),d=Io(i.shape,l.data.get(i.dataId).values),{batchSize:f,inHeight:p,inWidth:m,inChannels:h,outHeight:g,outWidth:_,padInfo:v,strideHeight:y,strideWidth:b,filterHeight:x,filterWidth:S,dilationHeight:C,dilationWidth:w,outShape:T}=fp(r.shape,i.shape,o,s,`NHWC`,c);O(a.rank===T.length,()=>`Error in ${Ks}, dy must have the same rank as output ${T.length}, but got ${a.rank}`);let E=Io(T,l.data.get(a.dataId).values),D=Bo(i.shape,i.dtype);for(let e=0;e<f;++e)for(let t=0;t<g;++t){let n=t*y-v.top;for(let r=0;r<_;++r){let i=r*b-v.left;for(let a=0;a<h;++a){let o=-(2**53-1),s=0,c=0;for(let t=0;t<x;++t){let r=n+t*C;if(r>=0&&r<p)for(let n=0;n<S;++n){let l=i+n*w;if(l>=0&&l<m){let i=u[e][r][l][a]+d[t][n][a];i>o&&(o=i,s=t,c=n)}}}D[s][c][a]+=E[e][t][r][a]}}}return{dataId:l.write(Eu(D,r.dtype),i.shape,i.dtype),shape:i.shape,dtype:i.dtype}}},mI={kernelName:Gs,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i,dy:a}=e,{strides:o,pad:s,dilations:c}=n,l=t,u=Io(r.shape,l.data.get(r.dataId).values),d=Io(i.shape,l.data.get(i.dataId).values),{batchSize:f,inHeight:p,inWidth:m,inChannels:h,outHeight:g,outWidth:_,padInfo:v,strideHeight:y,strideWidth:b,filterHeight:x,filterWidth:S,dilationHeight:C,dilationWidth:w,outShape:T}=fp(r.shape,i.shape,o,s,`NHWC`,c);O(a.rank===T.length,()=>`Error in ${Gs}, dy must have the same rank as output ${T.length}, but got ${a.rank}`);let E=Io(T,l.data.get(a.dataId).values),D=Bo(r.shape,r.dtype);for(let e=0;e<f;++e)for(let t=0;t<g;++t){let n=t*y-v.top;for(let r=0;r<_;++r){let i=r*b-v.left;for(let a=0;a<h;++a){let o=-(2**53-1),s=n<0?0:n,c=i<0?0:i;for(let t=0;t<x;++t){let r=n+t*C;if(r>=0&&r<p)for(let n=0;n<S;++n){let l=i+n*w;if(l>=0&&l<m){let i=u[e][r][l][a]+d[t][n][a];i>o&&(o=i,s=r,c=l)}}}D[e][s][c][a]+=E[e][t][r][a]}}}return{dataId:l.write(Eu(D,r.dtype),r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};function hI(e){let{inputs:t,backend:n,attrs:r}=e,{image:i}=t,{canvas:a,options:o}=r,{contextOptions:s,imageOptions:c}=o||{},l=c?.alpha||1,u=s?.contextType||`2d`;if(u!==`2d`)throw Error(`Context type ${s.contextType} is not supported by the CPU backend.`);let d=a.getContext(u,s?.contextAttributes||{});if(d==null)throw Error(`Could not get the context with ${u} type.`);let[f,p]=i.shape.slice(0,2),m=i.shape.length===2?1:i.shape[2],h=n.data.get(i.dataId).values,g=i.dtype===`float32`?255:1,_=new Uint8ClampedArray(p*f*4);for(let e=0;e<f*p;++e){let t=[0,0,0,255*l];for(let n=0;n<m;n++){let r=h[e*m+n];if(i.dtype===`float32`){if(r<0||r>1)throw Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${r}.`)}else if(i.dtype===`int32`&&(r<0||r>255))throw Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${r}.`);m===1?(t[0]=r*g,t[1]=r*g,t[2]=r*g):t[n]=r*g}let n=e*4;_[n+0]=Math.round(t[0]),_[n+1]=Math.round(t[1]),_[n+2]=Math.round(t[2]),_[n+3]=Math.round(t[3])}a.width=p,a.height=f;let v=new ImageData(_,p,f);return d.putImageData(v,0,0),i}var gI={kernelName:qs,backendName:`cpu`,kernelFunc:hI};function _I(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`sum`);let s;s=i.dtype===`bool`?TM({inputs:{x:i},backend:n,attrs:{dtype:`int32`}}):bM({inputs:{x:i},backend:n});let c=s.shape.length,l=bo(a,s.shape),u=yh(l,c),d=l,f=s;u!=null&&(f=DN({inputs:{x:s},backend:n,attrs:{perm:u}}),d=xh(d.length,c)),vh(`sum`,d,f.shape.length);let[p,m]=gh(f.shape,d),h=yM(n,p,ad(f.dtype,`int32`)),g=k(m),_=n.data.get(h.dataId).values,v=n.data.get(f.dataId).values;for(let e=0;e<_.length;++e){let t=e*g,n=0;for(let e=0;e<g;++e)n+=v[t+e];_[e]=n}if(o){let e=_h(h.shape,l),t=h;h=zP({inputs:{x:h},backend:n,attrs:{shape:e}}),n.disposeIntermediateTensorInfo(t)}return n.disposeIntermediateTensorInfo(s),u!=null&&n.disposeIntermediateTensorInfo(f),h}var vI={kernelName:`Sum`,backendName:`cpu`,kernelFunc:_I};function yI(e){let{inputs:t,backend:n,attrs:r}=e,{equation:i}=r,a=t,{allDims:o,summedDims:s,idDims:c}=Hx(i,a.length);Wx(o.length,c,a);let{path:l,steps:u}=Gx(s,c),d=u.length,f=null,p=o.length,m=[];for(let e=0;e<d;++e){for(let t of u[e]){let{permutationIndices:e,expandDims:r}=Ux(p,c[t]),i;Kx(e)?i=a[t]:(i=DN({inputs:{x:a[t]},backend:n,attrs:{perm:e}}),m.push(i));let o=i.shape.slice();for(let e=0;e<r.length;++e)o.splice(r[e],0,1);mo(i.shape,o)||(i=zP({inputs:{x:i},backend:n,attrs:{shape:o}}),m.push(i)),f===null?f=i:(f=yN({inputs:{a:i,b:f},backend:n}),m.push(f))}e<d-1&&(l[e]>=0&&(f=_I({inputs:{x:f},backend:n,attrs:{axis:l[e]-(o.length-p),keepDims:!1}}),m.push(f)),p--)}for(let e of m)e!==f&&n.disposeIntermediateTensorInfo(e);return f}var bI={kernelName:Ys,backendName:`cpu`,kernelFunc:yI};function xI(e){let{inputs:t,backend:n}=e,{dy:r,y:i}=t;X([r,i],`eluGrad`);let a=new Float32Array(k(i.shape)),o=n.data.get(i.dataId).values,s=n.data.get(r.dataId).values;for(let e=0;e<o.length;++e){let t=o[e];t>=0?a[e]=s[e]:a[e]=s[e]*(t+1)}return n.makeTensorInfo(i.shape,`float32`,a)}var SI={kernelName:Xs,backendName:`cpu`,kernelFunc:xI},CI=wx,wI=Tx,TI=Ex,EI=Dx,DI=Ox,OI=kx,kI={kernelName:`Erf`,backendName:`cpu`,kernelFunc:LM(`Erf`,e=>{let t=Math.sign(e),n=Math.abs(e),r=1/(1+CI*n);return t*(1-((((OI*r+DI)*r+EI)*r+TI)*r+wI)*r*Math.exp(-n*n))})};function AI(e){let{inputs:t,backend:n,attrs:r}=e,{input:i}=t,{dim:a}=r,o=i.shape.length,s=i.shape.slice(),c=a;return a<0&&(O(-(o+1)<=a,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),c=o+a+1),s.splice(c,0,1),zP({inputs:{x:i},backend:n,attrs:{shape:s}})}var jI={kernelName:Qs,backendName:`cpu`,kernelFunc:AI},MI=DM(Js,gM((e,t)=>e/t)),NI={kernelName:Js,backendName:`cpu`,kernelFunc:MI};function PI(e,t,n){let r=e.shape,i=r[0],a=r[1],o=n.data.get(e.dataId),s=o.complexTensorInfos.real,c=o.complexTensorInfos.imag,l=[i,a],u=k(l),d=So(`float32`,u),f=So(`float32`,u);for(let e=0;e<i;e++){let r=tP({inputs:{x:s},backend:n,attrs:{begin:[e,0],size:[1,a]}}),i=tP({inputs:{x:c},backend:n,attrs:{begin:[e,0],size:[1,a]}}),o=_M({inputs:{real:r,imag:i},backend:n}),{real:l,imag:u}=FI(o,t,n),p=Ax(l,u);for(let t=0;t<a;t++){let n=Px(p,t);d[e*a+t]=n.real,f[e*a+t]=n.imag}n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(o)}let p=n.makeTensorInfo(l,`float32`,d),m=n.makeTensorInfo(l,`float32`,f),h=_M({inputs:{real:p,imag:m},backend:n});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),h}function FI(e,t,n){let r=k(e.shape),i=n.data.get(e.dataId),a=n.data.get(i.complexTensorInfos.real.dataId).values,o=n.data.get(i.complexTensorInfos.imag.dataId).values;if(II(r)){let i=LI(a,o,r,t,n),s=[e.shape[0],e.shape[1]];if(t){let e=n.makeTensorInfo(s,`float32`,i.real),t=n.makeTensorInfo(s,`float32`,i.imag),a=n.makeTensorInfo([],`float32`,wu(r,`float32`)),o=bM({inputs:{x:a},backend:n}),c=NI.kernelFunc({inputs:{a:e,b:a},backend:n}),l=NI.kernelFunc({inputs:{a:t,b:o},backend:n}),u=n.data.get(c.dataId).values,d=n.data.get(l.dataId).values;return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),{real:u,imag:d}}return i}return jx(RI(Ax(a,o),r,t))}function II(e){return!(e&e-1)}function LI(e,t,n,r,i){if(n===1)return{real:e,imag:t};let a=Ax(e,t),o=n/2,s=Mx(a),c=s.real,l=s.imag,u=[c.length],d=i.makeTensorInfo(u,`float32`,c),f=i.makeTensorInfo(u,`float32`,l),p=_M({inputs:{real:d,imag:f},backend:i}),m=Nx(a),h=m.real,g=m.imag,_=[h.length],v=i.makeTensorInfo(_,`float32`,h),y=i.makeTensorInfo(_,`float32`,g),b=_M({inputs:{real:v,imag:y},backend:i}),x=LI(c,l,o,r,i),S=x.real,C=x.imag,w=[S.length],T=i.makeTensorInfo(w,`float32`,S),E=i.makeTensorInfo(w,`float32`,C),D=_M({inputs:{real:T,imag:E},backend:i}),ee=LI(h,g,o,r,i),te=ee.real,ne=ee.imag,re=[te.length],ie=i.makeTensorInfo(re,`float32`,te),ae=i.makeTensorInfo(re,`float32`,ne),oe=_M({inputs:{real:ie,imag:ae},backend:i}),se=Ix(n,r),ce=[se.real.length],le=i.makeTensorInfo(ce,`float32`,se.real),ue=i.makeTensorInfo(ce,`float32`,se.imag),de=_M({inputs:{real:le,imag:ue},backend:i}),fe=yN({inputs:{a:de,b:oe},backend:i}),pe=AM({inputs:{a:D,b:fe},backend:i}),me=yP({inputs:{a:D,b:fe},backend:i}),he=SM({inputs:{input:pe},backend:i}),ge=SM({inputs:{input:me},backend:i}),_e=AF({inputs:{input:pe},backend:i}),ve=AF({inputs:{input:me},backend:i}),ye=MF({inputs:[he,ge],backend:i,attrs:{axis:0}}),be=MF({inputs:[_e,ve],backend:i,attrs:{axis:0}}),xe=i.data.get(ye.dataId).values,Se=i.data.get(be.dataId).values;return i.disposeIntermediateTensorInfo(d),i.disposeIntermediateTensorInfo(f),i.disposeIntermediateTensorInfo(p),i.disposeIntermediateTensorInfo(v),i.disposeIntermediateTensorInfo(y),i.disposeIntermediateTensorInfo(b),i.disposeIntermediateTensorInfo(T),i.disposeIntermediateTensorInfo(E),i.disposeIntermediateTensorInfo(D),i.disposeIntermediateTensorInfo(ie),i.disposeIntermediateTensorInfo(ae),i.disposeIntermediateTensorInfo(oe),i.disposeIntermediateTensorInfo(le),i.disposeIntermediateTensorInfo(ue),i.disposeIntermediateTensorInfo(de),i.disposeIntermediateTensorInfo(fe),i.disposeIntermediateTensorInfo(pe),i.disposeIntermediateTensorInfo(me),i.disposeIntermediateTensorInfo(he),i.disposeIntermediateTensorInfo(_e),i.disposeIntermediateTensorInfo(ge),i.disposeIntermediateTensorInfo(ve),i.disposeIntermediateTensorInfo(ye),i.disposeIntermediateTensorInfo(be),{real:xe,imag:Se}}function RI(e,t,n){let r=new Float32Array(t*2);for(let i=0;i<t;i++){let a=0,o=0;for(let r=0;r<t;r++){let s=Lx(i*r,t,n),c=Px(e,r);a+=c.real*s.real-c.imag*s.imag,o+=c.real*s.imag+c.imag*s.real}n&&(a/=t,o/=t),Fx(r,a,o,i)}return r}function zI(e){let{inputs:t,backend:n}=e,{input:r}=t,i=k(r.shape),a=r.shape[r.shape.length-1],o=i/a,s=zP({inputs:{x:r},backend:n,attrs:{shape:[o,a]}}),c=PI(s,!1,n),l=zP({inputs:{x:c},backend:n,attrs:{shape:r.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(c),l}var BI={kernelName:`FFT`,backendName:`cpu`,kernelFunc:zI};function VI(e){let{backend:t,attrs:n}=e,{shape:r,value:i,dtype:a}=n,o=a||Mo(i),s=Co(o,k(r));return UI(s,i,o),t.makeTensorInfo(r,o,s)}var HI={kernelName:ec,backendName:`cpu`,kernelFunc:VI};function UI(e,t,n){e.fill(t)}var WI={kernelName:tc,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,i=n,a=So(r.dtype,k(r.shape)),[o,s,c,l]=r.shape,u=i.data.get(r.dataId).values;for(let e=0;e<o;e++){let t=e*c*s*l;for(let e=0;e<s;e++){let n=c*l*e;for(let e=0;e<c;e++){let r=e*l;for(let i=0;i<l;i++){let o=Math.round(c-e-1),s=t+n+r+i,d=u[s];if(o>=0&&o<c){let e=o*l;d=u[t+n+e+i]}a[s]=d}}}}return{dataId:i.write(a,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};function GI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=PF({inputs:{x:i,filter:a},backend:n,attrs:{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f}});if(o){let e=h;if(u===`NCHW`&&o.shape.length===1&&o.shape[0]!==1){let e=zP({inputs:{x:o},backend:n,attrs:{shape:[o.shape[0],1,1]}});h=AM({inputs:{a:h,b:e},backend:n}),n.disposeIntermediateTensorInfo(e)}else h=AM({inputs:{a:h,b:o},backend:n});n.disposeIntermediateTensorInfo(e)}if(p){let e=h;if(u===`NCHW`&&p===`prelu`&&s.shape.length===1&&s.shape[0]!==1){let e=zP({inputs:{x:s},backend:n,attrs:{shape:[s.shape[0],1,1]}});h=RP(n,h,p,e,m),n.disposeIntermediateTensorInfo(e)}else h=RP(n,h,p,s,m);n.disposeIntermediateTensorInfo(e)}return h}var KI={kernelName:ql,backendName:`cpu`,kernelFunc:GI};function qI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=iI({inputs:{x:i,filter:a},backend:n,attrs:{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f}});if(o){let e=h;h=AM({inputs:{a:h,b:o},backend:n}),n.disposeIntermediateTensorInfo(e)}if(p){let e=h;h=RP(n,h,p,s,m),n.disposeIntermediateTensorInfo(e)}return h}var JI={kernelName:Jl,backendName:`cpu`,kernelFunc:qI};function YI(e){let{inputs:t,backend:n}=e,{params:r,indices:i}=t,a=k(r.shape),o=i.shape,s=o[o.length-1],[c,l,u,d]=Lb(r,i);if(l===0)return n.makeTensorInfo(c,r.dtype,[]);let f=n.data.get(i.dataId).values,p=eN(f,n.bufferSync(r),r.dtype,l,s,u,d,r.shape,a);return n.makeTensorInfo(c,r.dtype,p.values)}var XI={kernelName:oc,backendName:`cpu`,kernelFunc:YI};function ZI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,indices:a}=t,{axis:o,batchDims:s}=r;X([i,a],`gatherV2`);let c=bo(o,i.shape)[0],l=n.data.get(a.dataId).values,u=i.shape[c];for(let e=0;e<l.length;++e){let t=l[e];O(t<=u-1&&t>=0,()=>`GatherV2: the index value ${t} is not in [0, ${u-1}]`)}let d=s;s??(d=0);let f=k(a.shape),p=uS(i,a,c,d),m=zP({inputs:{x:i},backend:n,attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]}}),h=zP({inputs:{x:a},backend:n,attrs:{shape:[p.batchSize,f/p.batchSize]}}),g=[p.batchSize,p.outerSize,f/p.batchSize,p.sliceSize],_=n.bufferSync(h),v=tN(n.bufferSync(m),_,g);return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),n.makeTensorInfo(p.outputShape,v.dtype,v.values)}var QI={kernelName:ac,backendName:`cpu`,kernelFunc:ZI};function $I(e){let{inputs:t,backend:n}=e,{input:r}=t,i=k(r.shape),a=r.shape[r.shape.length-1],o=i/a,s=zP({inputs:{x:r},backend:n,attrs:{shape:[o,a]}}),c=PI(s,!0,n),l=zP({inputs:{x:c},backend:n,attrs:{shape:r.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(c),l}var eL={kernelName:uc,backendName:`cpu`,kernelFunc:$I},tL={kernelName:fc,backendName:`cpu`,kernelFunc:LM(fc,e=>+!!Number.isFinite(e),`bool`)},nL={kernelName:pc,backendName:`cpu`,kernelFunc:LM(pc,e=>+(Math.abs(e)===1/0),`bool`)},rL={kernelName:mc,backendName:`cpu`,kernelFunc:LM(mc,e=>+!!Number.isNaN(e),`bool`)};function iL(e){let{backend:t,attrs:n}=e,{start:r,stop:i,num:a}=n,o=uN(r,i,a);return t.makeTensorInfo([o.length],`float32`,o)}var aL={kernelName:vc,backendName:`cpu`,kernelFunc:iL},oL={kernelName:yc,backendName:`cpu`,kernelFunc:LM(yc,e=>Math.log1p(e))},sL={kernelName:bc,backendName:`cpu`,kernelFunc:DM(bc,gM((e,t)=>e&&t),null,`bool`)},cL={kernelName:xc,backendName:`cpu`,kernelFunc:LM(xc,e=>+!e,`bool`)},lL={kernelName:Sc,backendName:`cpu`,kernelFunc:DM(Sc,gM((e,t)=>e||t),null,`bool`)};function uL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{depthRadius:a,bias:o,alpha:s,beta:c}=r;X(i,`LRN`);let l=i.shape[3],u=l-1,d=n.data.get(i.dataId).values,f=k(i.shape),p=new Float32Array(f);function m(e){let t=e%l,n=e-t+Math.max(0,t-a),r=e-t+Math.min(t+a,u),i=0;for(;n<=r;n++){let e=d[n];i+=e*e}return i}for(let e=0;e<f;e++){let t=m(e),n=d[e]*(o+s*t)**+-c;p[e]=n}return n.makeTensorInfo(i.shape,i.dtype,p)}var dL={kernelName:`LRN`,backendName:`cpu`,kernelFunc:uL};function fL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,y:a,dy:o}=t,{depthRadius:s,bias:c,alpha:l,beta:u}=r;X(o,`LRNGrad`);let d=k(o.shape),f=o.shape[3],p=n.data.get(o.dataId).values,m=n.data.get(i.dataId).values,h=n.data.get(a.dataId).values,g=new Float32Array(d),_=d;for(let e=0;e<_;e++){let t=e%f,n=e-t+Math.max(0,t-s),r=e-t+Math.min(f,t+s+1),i=0;for(let e=n;e<r;e++)i+=m[e]**2;i=l*i+c;for(let t=n;t<r;t++){let n=-2*l*u*m[t]*h[e]/i;e===t&&(n+=i**+-u),n*=p[e],g[t]+=n}}return n.makeTensorInfo(o.shape,i.dtype,g)}var pL={kernelName:wc,backendName:`cpu`,kernelFunc:fL};function mL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reductionIndices:a,keepDims:o}=r,s=n,c=i.shape,l=c.length,u=bo(a,c),d=u,f=yh(d,l),p=s.data.get(i.dataId).values;if(f!=null){let e=Array(l);for(let t=0;t<e.length;t++)e[t]=c[f[t]];p=EN(p,c,i.dtype,f,e),d=xh(d.length,l),c=e}X(i,`max`),vh(`max`,d,l);let[m,h]=gh(c,d),g=k(h),_=pN(p,g,m,i.dtype),v=s.write(_,m,i.dtype),y=m;return o&&(y=_h(m,u)),{dataId:v,shape:y,dtype:i.dtype}}var hL={kernelName:`Max`,backendName:`cpu`,kernelFunc:mL};function gL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;X(i,`maxPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;O(Dp(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=pp(i.shape,a,o,1,s,c),u;if(l.filterWidth===1&&l.filterHeight===1&&mo(l.inShape,l.outShape))u=bM({inputs:{x:i},backend:n});else{let e=n.data.get(i.dataId).values,t=A(i.shape),r=cF(e,i.shape,i.dtype,t,l,`max`);u=n.makeTensorInfo(l.outShape,i.dtype,r.values)}return u}var _L={kernelName:Ec,backendName:`cpu`,kernelFunc:gL};function vL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r;X(i,`maxPool3d`);let u=mp(i.shape,a,o,1,s,c,l),d=n.data.get(i.dataId).values,f=uF(d,i.shape,i.dtype,A(i.shape),u,`max`);return n.makeTensorInfo(f.shape,`float32`,f.values)}var yL={kernelName:Oc,backendName:`cpu`,kernelFunc:vL};function bL(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,{filterSize:o,strides:s,pad:c,dimRoundingMode:l}=r;X([i,a],`maxPool3DGrad`);let u=mp(a.shape,o,s,1,c,l),d=dF(n.bufferSync(a),u),f=u.strideDepth,p=u.strideHeight,m=u.strideWidth,h=u.dilationDepth,g=u.dilationHeight,_=u.dilationWidth,v=u.effectiveFilterDepth,y=u.effectiveFilterHeight,b=u.effectiveFilterWidth,x=v-1-u.padInfo.front,S=b-1-u.padInfo.left,C=y-1-u.padInfo.top,w=Mf(a.shape,`float32`),T=n.bufferSync(i);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inDepth;++n)for(let r=0;r<u.inHeight;++r)for(let i=0;i<u.inWidth;++i){let a=n-x,o=r-C,s=i-S,c=0;for(let n=0;n<v;n+=h){let r=(a+n)/f;if(!(r<0||r>=u.outDepth||Math.floor(r)!==r))for(let i=0;i<y;i+=g){let a=(o+i)/p;if(!(a<0||a>=u.outHeight||Math.floor(a)!==a))for(let o=0;o<b;o+=_){let l=(s+o)/m;if(l<0||l>=u.outWidth||Math.floor(l)!==l)continue;let f=+(v*y*b-1-d.get(e,r,a,l,t)===n*y*b+i*b+o);if(f===0)continue;let p=T.get(e,r,a,l,t);c+=p*f}}}w.set(c,e,n,r,i,t)}return n.makeTensorInfo(w.shape,w.dtype,w.values)}var xL={kernelName:kc,backendName:`cpu`,kernelFunc:bL};function SL(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a,output:o}=t,s=a;X([a,o],`maxPoolGrad`);let{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=r,f=pp(s.shape,c,l,1,u,d),p=n.data.get(s.dataId).values,m=Mf(f.outShape,s.dtype,lF(p,s.shape,s.dtype,f).values),h=f.strideHeight,g=f.strideWidth,_=f.dilationHeight,v=f.dilationWidth,y=f.effectiveFilterHeight,b=f.effectiveFilterWidth,x=b-1-f.padInfo.left,S=y-1-f.padInfo.top,C=Mf(s.shape,`float32`),w=n.data.get(i.dataId).values,T=Mf(i.shape,`float32`,w);for(let e=0;e<f.batchSize;++e)for(let t=0;t<f.inChannels;++t)for(let n=0;n<f.inHeight;++n)for(let r=0;r<f.inWidth;++r){let i=n-S,a=r-x,o=0;for(let n=0;n<y;n+=_){let r=(i+n)/h;if(!(r<0||r>=f.outHeight||Math.floor(r)!==r))for(let i=0;i<b;i+=v){let s=(a+i)/g;if(s<0||s>=f.outWidth||Math.floor(s)!==s)continue;let c=+(y*b-1-m.get(e,r,s,t)===n*b+i);if(c===0)continue;let l=T.get(e,r,s,t);o+=l*c}}C.set(o,e,n,r,t)}return n.makeTensorInfo(C.shape,C.dtype,C.values)}var CL={kernelName:Dc,backendName:`cpu`,kernelFunc:SL};function wL(e,t,n,r,i){let a=cF(e,t,n,A(t),i,`max`),o=lF(e,t,n,i,!0,r);return[a.values,o.values]}var TL={kernelName:Ac,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{filterSize:i,strides:a,pad:o,includeBatchInIndex:s}=t,c=n;X(r,`MaxPoolWithArgmax`);let l=c.data.get(r.dataId).values,u=pp(r.shape,i,a,[1,1],o),[d,f]=wL(l,r.shape,r.dtype,s,u),p=c.write(d,u.outShape,r.dtype),m=c.write(f,u.outShape,r.dtype);return[{dataId:p,shape:u.outShape,dtype:r.dtype},{dataId:m,shape:u.outShape,dtype:`int32`}]}};function EL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=bo(a,i.shape),c=gh(i.shape,s)[1],l=k(c),u=[],d=n.makeTensorInfo([],`float32`,new Float32Array([l]));u.push(d);let f=TM({inputs:{x:i},backend:n,attrs:{dtype:`float32`}});u.push(f);let p=MI({inputs:{a:f,b:d},backend:n});u.push(p);let m=_I({inputs:{x:p},backend:n,attrs:{axis:a,keepDims:o}});return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),m}var DL={kernelName:jc,backendName:`cpu`,kernelFunc:EL};function OL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;X(i,`min`);let s=bo(a,i.shape),c=s,l=yh(c,i.shape.length),u=i;l!=null&&(u=DN({inputs:{x:i},backend:n,attrs:{perm:l}}),c=xh(c.length,i.shape.length)),vh(`min`,c,u.shape.length);let[d,f]=gh(u.shape,c),p=k(f),m=zo(k(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];(Number.isNaN(r)||r<n)&&(n=r)}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=_h(d,s),t=zP({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var kL={kernelName:`Min`,backendName:`cpu`,kernelFunc:OL};function AL(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,mode:o}=r;X(i,`mirrorPad`);let s=a.map((e,t)=>e[0]+i.shape[t]+e[1]),c=a.map(e=>e[0]),l=a.map((e,t)=>e[0]+i.shape[t]),u=o===`reflect`?0:1,d=n.data.get(i.dataId).values,f=i.shape.length,p=A(i.shape),m=k(s),h=s.length,g=A(s),_=So(i.dtype,m);for(let e=0;e<m;e++){let t=Uo(e,h,g);for(let e=0;e<h;e++)t[e]<c[e]?t[e]=c[e]*2-t[e]-u:t[e]>=l[e]&&(t[e]=(l[e]-1)*2-t[e]+u);t=t.map((e,t)=>e-c[t]);let n=Ho(t,f,p);_[e]=d[n]}return{dataId:n.write(_,s,i.dtype),shape:s,dtype:i.dtype}}var jL={kernelName:Nc,backendName:`cpu`,kernelFunc:AL},ML={kernelName:`Mod`,backendName:`cpu`,kernelFunc:DM(`Mod`,gM(((e,t)=>{let n=e%t;return e<0&&t<0||e>=0&&t>=0?n:(n+t)%t})))};function NL(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{dim:a}=r,o=i.shape.length,s=a;if(s===-1&&(s=o-1),s!==o-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${o} and dim was ${s}`);let c=bo([s],i.shape),l=mL({inputs:{x:i},backend:n,attrs:{reductionIndices:c,keepDims:!1}}),u=_h(l.shape,c),d=zP({inputs:{x:l},backend:n,attrs:{shape:u}}),f=yP({inputs:{a:i,b:d},backend:n}),p=KM({inputs:{x:f},backend:n}),m=_I({inputs:{x:p},backend:n,attrs:{axis:c,keepDims:!1}}),h=zP({inputs:{x:m},backend:n,attrs:{shape:u}}),g=MI({inputs:{a:p,b:h},backend:n});return n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),g}var PL={kernelName:xl,backendName:`cpu`,kernelFunc:NL};function FL(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{numSamples:a,seed:o,normalized:s}=r;X(i,`multinomial`);let c=s?i:NL({inputs:{logits:i},backend:n,attrs:{dim:-1}}),l=c.shape[0],u=c.shape[1],d=n.data.get(c.dataId).values,f=[l,a],p=zo(k(f),`int32`);for(let e=0;e<l;++e){let t=e*u,n=new Float32Array(u-1);n[0]=d[t];for(let e=1;e<n.length;++e)n[e]=n[e-1]+d[t+e];let r=N_.alea(o.toString()),i=e*a;for(let e=0;e<a;++e){let t=r();p[i+e]=n.length;for(let r=0;r<n.length;r++)if(t<n[r]){p[i+e]=r;break}}}return s||n.disposeIntermediateTensorInfo(c),n.makeTensorInfo(f,`int32`,p)}var IL={kernelName:Pc,backendName:`cpu`,kernelFunc:FL},LL=Hy;function RL(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c}=r;X(i,`NonMaxSuppression`);let l=n.data.get(i.dataId).values,u=n.data.get(a.dataId).values,{selectedIndices:d}=LL(l,u,o,s,c);return n.makeTensorInfo([d.length],`int32`,new Int32Array(d))}var zL={kernelName:Lc,backendName:`cpu`,kernelFunc:RL},BL=Uy;function VL(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,padToMaxOutputSize:l}=r;X(i,`NonMaxSuppressionPadded`);let u=n.data.get(i.dataId).values,d=n.data.get(a.dataId).values,{selectedIndices:f,validOutputs:p}=BL(u,d,o,s,c,l);return[n.makeTensorInfo([f.length],`int32`,new Int32Array(f)),n.makeTensorInfo([],`int32`,new Int32Array([p]))]}var HL={kernelName:Rc,backendName:`cpu`,kernelFunc:VL},UL=Wy;function WL(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,softNmsSigma:l}=r;X(i,`NonMaxSuppressionWithScore`);let u=n.data.get(i.dataId).values,d=n.data.get(a.dataId).values,{selectedIndices:f,selectedScores:p}=UL(u,d,o,s,c,l);return[n.makeTensorInfo([f.length],`int32`,new Int32Array(f)),n.makeTensorInfo([p.length],`float32`,new Float32Array(p))]}var GL={kernelName:zc,backendName:`cpu`,kernelFunc:WL};function KL(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i}=t,{dtype:a,depth:o,onValue:s,offValue:c}=r;X(i,`oneHot`);let l=k(i.shape),u=new Float32Array(l*o);u.fill(c);let d=n.data.get(i.dataId).values;for(let e=0;e<l;++e)d[e]>=0&&d[e]<o&&(u[e*o+d[e]]=s);return n.makeTensorInfo([...i.shape,o],a,u)}var qL={kernelName:Vc,backendName:`cpu`,kernelFunc:KL};function JL(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`zerosLike is not supported for string tensors`);if(r.dtype===`complex64`){let e=SM({inputs:{input:r},backend:n}),t=JL({inputs:{x:e},backend:n}),i=AF({inputs:{input:r},backend:n}),a=JL({inputs:{x:i},backend:n}),o=_M({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}return VI({backend:n,attrs:{shape:r.shape,value:0,dtype:r.dtype}})}var YL={kernelName:Hl,backendName:`cpu`,kernelFunc:JL};function XL(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`onesLike is not supported for string tensors`);if(r.dtype===`complex64`){let e=SM({inputs:{input:r},backend:n}),t=XL({inputs:{x:e},backend:n}),i=AF({inputs:{input:r},backend:n}),a=JL({inputs:{x:i},backend:n}),o=_M({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}return VI({backend:n,attrs:{shape:r.shape,value:1,dtype:r.dtype}})}var ZL={kernelName:Bc,backendName:`cpu`,kernelFunc:XL};function QL(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r;if(t.length===1)return AI({inputs:{input:t[0]},backend:n,attrs:{dim:i}});let a=t[0].shape,o=t[0].dtype;t.forEach(e=>{fo(a,e.shape,`All tensors passed to stack must have matching shapes`),O(o===e.dtype,()=>`All tensors passed to stack must have matching dtypes`)});let s=[],c=MF({inputs:t.map(e=>{let t=AI({inputs:{input:e},backend:n,attrs:{dim:i}});return s.push(t),t}),backend:n,attrs:{axis:i}});return s.forEach(e=>n.disposeIntermediateTensorInfo(e)),c}var $L={kernelName:Hc,backendName:`cpu`,kernelFunc:QL};function eR(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,constantValue:o}=r;X(i,`pad`);let s=a.map((e,t)=>e[0]+i.shape[t]+e[1]),c=a.map(e=>e[0]),l=n.data.get(i.dataId).values,u=k(i.shape),d=i.shape.length,f=A(i.shape),p=k(s),m=s.length,h=A(s),g=So(i.dtype,p);o!==0&&g.fill(o);for(let e=0;e<u;e++){let t=Ho(Uo(e,d,f).map((e,t)=>e+c[t]),m,h);g[t]=l[e]}return{dataId:n.write(g,s,i.dtype),shape:s,dtype:i.dtype}}var tR={kernelName:Uc,backendName:`cpu`,kernelFunc:eR},nR={kernelName:`Pow`,backendName:`cpu`,kernelFunc:DM(`Pow`,gM((e,t)=>e**+t))};function rR(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:i,paramsDenseValues:a,indices:o}=t,{outputRaggedRank:s}=r,c=i.map(e=>n.data.get(e.dataId).values),l=i.map(e=>e.shape),u=n.data.get(a.dataId).values,d=n.data.get(o.dataId).values,[f,p,m]=zN(c,l,u,a.shape,a.dtype,d,o.shape,s),h=f.map(e=>n.makeTensorInfo([e.length],`int32`,e)),g=n.makeTensorInfo(m,a.dtype,p);return h.concat([g])}var iR={kernelName:Kc,backendName:`cpu`,kernelFunc:rR};function aR(e){let{inputs:t,backend:n}=e,{starts:r,limits:i,deltas:a}=t,o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=VN(o,r.shape,r.dtype,s,i.shape,c,a.shape);return[n.makeTensorInfo([l.length],`int32`,l),n.makeTensorInfo([u.length],r.dtype,u)]}var oR={kernelName:qc,backendName:`cpu`,kernelFunc:aR};function sR(e){let{inputs:t,backend:n,attrs:r}=e,{shape:i,values:a,defaultValue:o,rowPartitionTensors:s}=t,{rowPartitionTypes:c}=r,l=n.data.get(i.dataId).values,u=n.data.get(a.dataId).values,d=n.data.get(o.dataId).values,f=s.map(e=>n.data.get(e.dataId).values),p=s.map(e=>e.shape),[m,h]=KN(l,i.shape,u,a.shape,a.dtype,d,o.shape,f,p,c);return n.makeTensorInfo(m,a.dtype,h)}var cR={kernelName:Jc,backendName:`cpu`,kernelFunc:sR};function lR(e){let{backend:t,attrs:n}=e,{start:r,stop:i,dtype:a,step:o}=n,s=qN(r,i,o,a);return t.makeTensorInfo([s.length],a,s)}var uR={kernelName:Yc,backendName:`cpu`,kernelFunc:lR},dR={kernelName:Zc,backendName:`cpu`,kernelFunc:LM(Zc,e=>1/e)};function fR(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r;X(i,`resizeBilinear`);let c=A(i.shape),[l,u]=s,[d,f,p,m]=i.shape,h=n.data.get(i.dataId).values,g=new Float32Array(k([d,l,u,m])),_=[a&&l>1?f-1:f,a&&u>1?p-1:p],v=[a&&l>1?l-1:l,a&&u>1?u-1:u],y=0,b=_[0]/v[0],x=_[1]/v[1];for(let e=0;e<d;e++)for(let t=0;t<l;t++){let n;n=o?b*(t+.5)-.5:b*t;let r=Math.max(0,Math.floor(n)),i=n-r,a=Math.min(f-1,Math.ceil(n)),s=e*c[0]+r*c[1],l=e*c[0]+a*c[1];for(let e=0;e<u;e++){let t;t=o?x*(e+.5)-.5:x*e;let n=Math.max(0,Math.floor(t)),r=t-n,a=Math.min(p-1,Math.ceil(t)),u=s+n*c[2],d=l+n*c[2],f=s+a*c[2],_=l+a*c[2];for(let e=0;e<m;e++){let t=h[u+e],n=h[d+e],a=h[f+e],o=h[_+e],s=t+(a-t)*r,c=s+(n+(o-n)*r-s)*i;g[y++]=c}}}return n.makeTensorInfo([d,l,u,m],`float32`,g)}var pR={kernelName:nl,backendName:`cpu`,kernelFunc:fR};function mR(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r;X([a,i],`resizeBilinearGrad`);let s=A(i.shape),[c,l,u,d]=i.shape,[,f,p]=a.shape,m=new Float32Array(c*l*u*d),h=[o&&f>1?l-1:l,o&&p>1?u-1:u],g=[o&&f>1?f-1:f,o&&p>1?p-1:p],_=h[0]/g[0],v=h[1]/g[1],y=n.data.get(a.dataId).values,b=0;for(let e=0;e<c;e++){let t=e*s[0];for(let e=0;e<f;e++){let n=e*_,r=Math.floor(n),i=Math.min(Math.ceil(n),l-1),a=t+r*s[1],o=t+i*s[1],c=n-r,f=1-c;for(let e=0;e<p;e++){let t=e*v,n=Math.floor(t),r=Math.min(Math.ceil(t),u-1),i=t-n,l=1-i,p=a+n*s[2],h=a+r*s[2],g=o+n*s[2],_=o+r*s[2],x=f*l,S=f*i,C=c*l,w=c*i;for(let e=0;e<d;e++){let t=y[b++];m[p+e]+=t*x,m[h+e]+=t*S,m[g+e]+=t*C,m[_+e]+=t*w}}}}return n.makeTensorInfo([c,u,l,d],`float32`,m)}var hR={kernelName:rl,backendName:`cpu`,kernelFunc:mR};function gR(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r;X(i,`resizeNearestNeighbor`);let c=A(i.shape),[l,u]=s,[d,f,p,m]=i.shape,h=n.data.get(i.dataId).values,g=new Float32Array(d*l*u*m),_=[a&&l>1?f-1:f,a&&u>1?p-1:p],v=[a&&l>1?l-1:l,a&&u>1?u-1:u],y=_[0]/v[0],b=_[1]/v[1],x=0;for(let e=0;e<d;e++){let t=e*c[0];for(let e=0;e<l;e++){let n=o?y*(e+.5):y*e,r=Math.min(f-1,a?Math.round(n):Math.floor(n));o&&(r=Math.max(0,r));let i=t+r*c[1];for(let e=0;e<u;e++){let t=o?b*(e+.5):b*e,n=Math.min(p-1,a?Math.round(t):Math.floor(t));o&&(n=Math.max(0,n));let r=i+n*c[2];for(let e=0;e<m;e++){let t=h[r+e];g[x++]=t}}}}return n.makeTensorInfo([d,l,u,m],i.dtype,g)}var _R={kernelName:el,backendName:`cpu`,kernelFunc:gR};function vR(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r;X([a,i],`resizeNearestNeighborGrad`);let s=A(i.shape),c=A(a.shape),[l,u,d,f]=i.shape,[,p,m]=a.shape,h=new Float32Array(l*u*d*f),g=n.data.get(a.dataId).values,_=[o&&p>1?u-1:u,o&&m>1?d-1:d],v=[o&&p>1?p-1:p,o&&m>1?m-1:m],y=_[0]/v[0],b=_[1]/v[1],x=1/y,S=1/b,C=Math.ceil(x)*2+2,w=Math.ceil(S)*2+2;for(let e=0;e<l;e++){let t=e*s[0];for(let e=0;e<u;e++){let n=t+e*s[1],r=Math.floor(e*x),i=Math.floor(r-C/2);for(let r=0;r<d;r++){let a=n+r*s[2],l=Math.floor(r*S),_=Math.floor(l-w/2);for(let n=0;n<f;n++){let s=0;for(let a=0;a<C;a++){let l=a+i;if(l<0||l>=p)continue;let f=t+l*c[1],h=l*y,v=Math.min(u-1,o?Math.round(h):Math.floor(h));if(e===v)for(let e=0;e<w;e++){let t=e+_;if(t<0||t>=m)continue;let i=f+t*c[2],a=t*b,l=Math.min(d-1,o?Math.round(a):Math.floor(a));r===l&&(s+=g[i+n])}}h[a+n]=s}}}}return n.makeTensorInfo(i.shape,i.dtype,h)}var yR={kernelName:tl,backendName:`cpu`,kernelFunc:vR};function bR(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dims:a}=r;X(i,`reverse`);let o=i.shape.length,s=bo(a,i.shape);if(o===0)return bM({inputs:{x:i},backend:n});let c=new Ku(i.shape,i.dtype),l=n.bufferSync(i);for(let e=0;e<c.size;e++){let t=c.indexToLoc(e),n=t.slice();s.forEach(e=>n[e]=i.shape[e]-1-n[e]),c.set(l.get(...n),...t)}return n.makeTensorInfo(c.shape,c.dtype,c.values)}var xR={kernelName:al,backendName:`cpu`,kernelFunc:bR},SR={kernelName:Gl,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,{radians:i,fillValue:a,center:o}=t,s=n,c=So(r.dtype,k(r.shape)),[l,u,d,f]=r.shape,[p,m]=gx(o,u,d),h=Math.sin(i),g=Math.cos(i),_=s.data.get(r.dataId).values;for(let e=0;e<l;e++){let t=e*d*u*f;for(let e=0;e<u;e++){let n=d*f*e;for(let r=0;r<d;r++){let i=r*f;for(let o=0;o<f;o++){let s=[l,e,r,o],v=s[2],y=s[1],b=(v-p)*g-(y-m)*h,x=(v-p)*h+(y-m)*g;b=Math.round(b+p),x=Math.round(x+m);let S=a;if(typeof a!=`number`&&(S=o===3?255:a[o]),b>=0&&b<d&&x>=0&&x<u){let e=d*f*x,n=b*f;S=_[t+e+n+o]}let C=t+n+i+o;c[C]=S}}}}return{dataId:s.write(c,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},CR={kernelName:ol,backendName:`cpu`,kernelFunc:LM(ol,e=>{let t=Math.floor(e);return e-t<.5?Math.floor(e):e-t>.5?Math.ceil(e):t%2==0?t:t+1})};function wR(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i,updates:a}=t,{shape:o}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=qv(a,i,o),f=XN(n.bufferSync(i),n.bufferSync(a),o,d,l,c,s,u,0,!0);return n.makeTensorInfo(o,f.dtype,f.values)}var TR={kernelName:cl,backendName:`cpu`,kernelFunc:wR};function ER(e,t){let n=0,r=e.length,i=0;for(;n<r;)i=Math.floor((n+r)/2),e[i]<t?n=i+1:r=i;return r}function DR(e,t){let n=0,r=e.length,i=0;for(;n<r;)i=Math.floor((n+r)/2),e[i]<=t?n=i+1:r=i;return r}function OR(e,t,n,r,i,a){let o=Co(`int32`,n*i);for(let s=0;s<n;++s){let n=e.slice(s*r,(s+1)*r),c=s*i;for(let e=0;e<i;++e)o[c+e]=a===`left`?ER(n,t[e+c]):DR(n,t[e+c])}return o}function kR(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:i,values:a}=t,{side:o}=r,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,l=OR(s,c,i.shape[0],i.shape[1],a.shape[1],o);return n.makeTensorInfo(a.shape,`int32`,l)}var AR={kernelName:ul,backendName:`cpu`,kernelFunc:kR};function jR(e){let{inputs:t,backend:n}=e,{condition:r,t:i,e:a}=t;X([r,i,a],`select`);let o=r.shape.length,s=n.data.get(r.dataId).values,c=n.data.get(i.dataId).values,l=n.data.get(a.dataId).values,u=ad(i.dtype,a.dtype),d=zo(k(i.shape),u),f=0,p=o===0||o>1||i.shape.length===1?1:k(i.shape.slice(1));for(let e=0;e<s.length;e++)for(let t=0;t<p;t++)s[e]===1?d[f++]=c[e]:d[f++]=l[e];return n.makeTensorInfo(i.shape,u,d)}var MR={kernelName:dl,backendName:`cpu`,kernelFunc:jR},NR=Sx,PR=Cx,FR={kernelName:fl,backendName:`cpu`,kernelFunc:LM(fl,e=>e>=0?PR*e:NR*(Math.exp(e)-1))},IR={kernelName:hl,backendName:`cpu`,kernelFunc:LM(hl,e=>e<0?-1:+(e>0))},LR={kernelName:`Sin`,backendName:`cpu`,kernelFunc:LM(`Sin`,e=>Math.sin(e))},RR={kernelName:ml,backendName:`cpu`,kernelFunc:LM(ml,e=>Math.sinh(e))},zR=Math.log(1.1920928955078125e-7)+2,BR={kernelName:_l,backendName:`cpu`,kernelFunc:LM(_l,e=>{let t=e>-zR,n=e<zR,r=Math.exp(e),i;return i=n?r:t?e:Math.log(1+r),i})};function VR(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,paddings:o}=r;X([i],`spaceToBatchND`);let s=k(a),c=[[0,0]];c.push(...o);for(let e=1+a.length;e<i.shape.length;++e)c.push([0,0]);let l=tR.kernelFunc({inputs:{x:i},backend:n,attrs:{paddings:c,constantValue:0}}),u=_x(l.shape,a,s,!1),d=vx(u.length,a.length,!1),f=yx(l.shape,a,s,!1),p=zP({inputs:{x:l},backend:n,attrs:{shape:u}}),m=DN({inputs:{x:p},backend:n,attrs:{perm:d}}),h=zP({inputs:{x:m},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),h}var HR={kernelName:yl,backendName:`cpu`,kernelFunc:VR};function UR(e){let{inputs:t,backend:n}=e,{indices:r,values:i,denseShape:a,defaultValue:o}=t;if(a.shape.length!==1)throw Error(`Dense shape must be a vector, saw:
        ${a.shape}`);if(r.shape.length!==2)throw Error(`Indices must be a matrix, saw:
        ${r.shape}`);if(i.shape.length!==1)throw Error(`Values must be a vector, saw:
        ${i.shape}`);if(o.shape.length!==0)throw Error(`Default value must be a scalar, saw:
        ${o.shape}`);let s=n.data.get(r.dataId).values,c=n.data.get(i.dataId).values,l=n.data.get(a.dataId).values,u=n.data.get(o.dataId).values[0],[d,f,p,m,h]=rP(s,r.shape,r.dtype,c,i.dtype,l,u);return[n.makeTensorInfo(f,r.dtype,d),n.makeTensorInfo([f[0]],i.dtype,p),n.makeTensorInfo([m.length],`bool`,new Uint8Array(m.map(e=>Number(e)))),n.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}var WR={kernelName:Sl,backendName:`cpu`,kernelFunc:UR};function GR(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:i,newShape:a}=t;if(r.shape.length!==2)throw Error(`Input indices should be a matrix but received shape
        ${r.shape}`);if(i.shape.length!==1)throw Error(`Input shape should be a vector but received shape
        ${i.shape}`);if(a.shape.length!==1)throw Error(`Target shape should be a vector but received shape ${a.shape}`);let o=Array.from(n.data.get(i.dataId).values),s=n.data.get(r.dataId).values,c=Array.from(n.data.get(a.dataId).values),[l,u,d]=iP(s,r.shape,r.dtype,o,c);return[n.makeTensorInfo(u,r.dtype,l),n.makeTensorInfo([d.length],a.dtype,new Int32Array(d))]}var KR={kernelName:Cl,backendName:`cpu`,kernelFunc:GR};function qR(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
          ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
          ${a.shape}`);if(i.shape[0]!==a.shape[0])throw Error(`segmentIds and indices should have same size.`);let o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=aP(o,r.shape,r.dtype,s,c,!0);return n.makeTensorInfo(u,r.dtype,l)}var JR={kernelName:wl,backendName:`cpu`,kernelFunc:qR};function YR(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
         ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
         ${a.shape}`);if(i.shape[0]!==a.shape[0])throw Error(`segmentIds and indices should have same size.`);let o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=aP(o,r.shape,r.dtype,s,c);return n.makeTensorInfo(u,r.dtype,l)}var XR={kernelName:Tl,backendName:`cpu`,kernelFunc:YR};function ZR(e){let{inputs:t,backend:n,attrs:r}=e,{sparseIndices:i,sparseValues:a,defaultValue:o}=t,{outputShape:s}=r,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:f}=qv(a,i,s),p=n.bufferSync(i),m;switch(a.dtype){case`bool`:m=XN(p,n.bufferSync(a),s,f,u,l,c,d,!!n.data.get(o.dataId).values[0],!1);break;case`float32`:{let e=n.bufferSync(a),t=n.data.get(o.dataId).values[0];m=XN(p,e,s,f,u,l,c,d,t,!1);break}case`int32`:{let e=n.bufferSync(a),t=n.data.get(o.dataId).values[0];m=XN(p,e,s,f,u,l,c,d,t,!1);break}case`string`:m=XN(p,n.bufferSync(a),s,f,u,l,c,d,ku(n.data.get(o.dataId).values[0]),!1);break;default:throw Error(`Unsupported type ${a.dtype}`)}return n.makeTensorInfo(s,m.dtype,m.values)}var QR={kernelName:El,backendName:`cpu`,kernelFunc:ZR};function $R(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{numOrSizeSplits:a,axis:o}=r,s=bo(o,i.shape)[0],c=Jx(i,a,s),l=Array(i.shape.length).fill(0),u=i.shape.slice();return c.map(e=>{let t=[...u];t[s]=e;let r=tP({inputs:{x:i},backend:n,attrs:{begin:l,size:t}});return l[s]+=e,r})}var ez={kernelName:bl,backendName:`cpu`,kernelFunc:$R},tz={kernelName:Ol,backendName:`cpu`,kernelFunc:({inputs:e,backend:t})=>{let{x:n}=e,r=t;X(n,`square`);let i=r.data.get(n.dataId).values,a=new Float32Array(i.length);for(let e=0;e<i.length;++e){let t=i[e];a[e]=t*t}return{dataId:r.write(a,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},nz={kernelName:Ul,backendName:`cpu`,kernelFunc:LM(Ul,(e,t)=>isNaN(e)?NaN:e>0?1:t.alpha)};function rz(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,end:o,strides:s,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:f}=r;X(i,`stridedSlice`);let{finalShapeSparse:p,finalShape:m,isIdentity:h,sliceDim0:g,isSimpleSlice:_,begin:v,end:y,strides:b}=nx(i.shape,a,o,s,c,l,u,d,f),x;if(h)x=zP({inputs:{x:i},backend:n,attrs:{shape:m}});else if(g||_){O(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=Ub(v,y,b),t=tP({inputs:{x:i},backend:n,attrs:{begin:v,size:e}});x=zP({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeIntermediateTensorInfo(t)}else{let e=fP(p,n.bufferSync(i),b,v);x=n.makeTensorInfo(m,e.dtype,e.values)}return x}var iz={kernelName:Al,backendName:`cpu`,kernelFunc:rz};function az(e){let{inputs:t,backend:n,attrs:r}=e,{separator:i,nGramWidths:a,leftPad:o,rightPad:s,padWidth:c,preserveShortSequences:l}=r,{data:u,dataSplits:d}=t,f=n.data.get(u.dataId).values,p=n.data.get(d.dataId).values,[m,h]=mP(f,p,i,a,o,s,c,l);return[n.makeTensorInfo([m.length],`string`,m),n.makeTensorInfo(d.shape,`int32`,h)]}var oz={kernelName:jl,backendName:`cpu`,kernelFunc:az};function sz(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:i}=r,{input:a,delimiter:o}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(a.shape.length!==1)throw Error(`Input must be a vector, got shape: ${a.shape}`);if(o.shape.length!==0)throw Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let s=n.data.get(a.dataId).values,c=n.data.get(o.dataId).values[0],[l,u,d]=gP(s,c,i),f=u.length;return[n.makeTensorInfo([f,2],`int32`,l),n.makeTensorInfo([f],`string`,u),n.makeTensorInfo([2],`int32`,new Int32Array(d))]}var cz={kernelName:Ml,backendName:`cpu`,kernelFunc:sz};function lz(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:i}=r,{input:a}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(i<=0)throw Error(`Number of buckets must be at least 1`);let o=n.data.get(a.dataId).values,s=_P(o,i);return n.makeTensorInfo(a.shape,`int32`,s)}var uz={kernelName:Nl,backendName:`cpu`,kernelFunc:lz},dz={kernelName:`Tan`,backendName:`cpu`,kernelFunc:LM(`Tan`,e=>Math.tan(e))},fz={kernelName:Pl,backendName:`cpu`,kernelFunc:LM(Pl,e=>Math.tanh(e))};function pz(e){let{inputs:t,backend:n}=e,{tensor:r,indices:i,updates:a}=t,{sliceRank:o,numUpdates:s,sliceSize:c,strides:l,outputSize:u}=qv(a,i,r.shape),d=n.bufferSync(i),f=n.bufferSync(a),p=n.bufferSync(r),m=XN(d,f,r.shape,u,c,s,o,l,p,!1);return n.makeTensorInfo(r.shape,m.dtype,m.values)}var mz={kernelName:ll,backendName:`cpu`,kernelFunc:pz};function hz(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reps:a}=r;X(i,`tile`);let o=xP(n.bufferSync(i),a);return n.makeTensorInfo(o.shape,o.dtype,o.values)}var gz={kernelName:Fl,backendName:`cpu`,kernelFunc:hz};function _z(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{k:a,sorted:o}=r;X(i,`topk`);let s=n.data.get(i.dataId).values,[c,l]=wP(s,i.shape,i.dtype,a,o);return[n.makeTensorInfo(c.shape,c.dtype,c.values),n.makeTensorInfo(l.shape,l.dtype,l.values)]}var vz={kernelName:Il,backendName:`cpu`,kernelFunc:_z};function yz(e){let{inputs:t,attrs:n,backend:r}=e,{image:i,transforms:a}=t,{interpolation:o,fillMode:s,fillValue:c,outputShape:l}=n,[u,d,f,p]=i.shape,[m,h]=l??[d,f],g=[u,m,h,p],_=A(i.shape),v=_[0],y=_[1],b=_[2],x=A(g),S=x[0],C=x[1],w=x[2],T=So(i.dtype,k(g));T.fill(c);let E=r.data.get(i.dataId).values,D=r.data.get(a.dataId).values;for(let e=0;e<u;++e){let t=a.shape[0]===1?D:D.subarray(e*8,e*8+8);for(let n=0;n<m;++n)for(let r=0;r<h;++r)for(let i=0;i<p;++i){let a,l=t[6]*r+t[7]*n+1;if(l===0)continue;let u=(t[0]*r+t[1]*n+t[2])/l,p=(t[3]*r+t[4]*n+t[5])/l,m=xz(u,f,s),h=xz(p,d,s);switch(o){case`nearest`:a=Dz(E,d,f,v,y,b,e,h,m,i,c);break;case`bilinear`:a=Oz(E,d,f,v,y,b,e,h,m,i,c);break;default:throw Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${o}`)}let g=e*S+n*C+r*w+i;T[g]=a}return r.makeTensorInfo(g,i.dtype,T)}return{dataId:r.write(T,g,i.dtype),shape:i.shape,dtype:i.dtype}}var bz={kernelName:Ll,backendName:`cpu`,kernelFunc:yz};function xz(e,t,n){switch(n){case`reflect`:return Sz(e,t);case`wrap`:return Cz(e,t);case`nearest`:return Tz(e,t);default:return wz(e,t)}}function Sz(e,t){let n=e;if(n<0){if(t<=1)n=0;else{let e=2*t;n<e&&(n=e*Math.trunc(-n/e)+n),n=n<-t?n+e:-n-1}}else if(n>t-1){if(t<=1)n=0;else{let e=2*t;n-=e*Math.trunc(n/e),n>=t&&(n=e-n-1)}}return so(0,n,t-1)}function Cz(e,t){let n=e;if(n<0){if(t<=1)n=0;else{let e=t-1;n+=t*(Math.trunc(-n/e)+1)}}else if(n>t-1){if(t<=1)n=0;else{let e=t-1;n-=t*Math.trunc(n/e)}}return so(0,n,t-1)}function wz(e,t){return e}function Tz(e,t){return so(0,e,t-1)}function Ez(e,t,n,r,i,a,o,s,c,l,u){let d=o*r+s*i+c*a+l;return 0<=s&&s<t&&0<=c&&c<n?e[d]:u}function Dz(e,t,n,r,i,a,o,s,c,l,u){return Ez(e,t,n,r,i,a,o,Math.round(s),Math.round(c),l,u)}function Oz(e,t,n,r,i,a,o,s,c,l,u){let d=Math.floor(s),f=Math.floor(c),p=d+1,m=f+1,h=(m-c)*Ez(e,t,n,r,i,a,o,d,f,l,u)+(c-f)*Ez(e,t,n,r,i,a,o,d,m,l,u),g=(m-c)*Ez(e,t,n,r,i,a,o,p,f,l,u)+(c-f)*Ez(e,t,n,r,i,a,o,p,m,l,u);return(p-s)*h+(s-d)*g}function kz(e){let{inputs:t,attrs:n,backend:r}=e,{axis:i}=n,{x:a}=t;X(a,`unique`);let o=r.data.get(a.dataId).values,{outputValues:s,outputShape:c,indices:l}=TP(o,i,a.shape,a.dtype);return[r.makeTensorInfo(c,a.dtype,s),r.makeTensorInfo([l.length],`int32`,l)]}var Az={kernelName:zl,backendName:`cpu`,kernelFunc:kz};function jz(e){let{inputs:t,backend:n,attrs:r}=e,{value:i}=t,{axis:a}=r;a<0&&(a+=i.shape.length);let o=i.shape.length,s=i.shape[a],c=Array(o-1),l=0;for(let e=0;e<o;e++)e!==a&&(c[l++]=i.shape[e]);let u=Array(o).fill(0),d=i.shape.slice();d[a]=1;let f=Array(s);for(let e=0;e<f.length;e++){u[a]=e;let t=tP({inputs:{x:i},backend:n,attrs:{begin:u,size:d}});f[e]=zP({inputs:{x:t},backend:n,attrs:{shape:c}}),n.disposeIntermediateTensorInfo(t)}return f}var Mz={kernelName:Bl,backendName:`cpu`,kernelFunc:jz};function Nz(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,segmentIds:a}=t,{numSegments:o}=r;X(i,`unsortedSegmentSum`);let s=i.shape.length,c=a.shape.length,l=[],u=[],d=s-c,f=a;for(let e=0;e<d;++e){let t=AI({inputs:{input:f},backend:n,attrs:{dim:e+1}});f=t,u.push(t)}for(let e=0;e<o;++e){let t=wu(e,`int32`),r=n.makeTensorInfo([],`int32`,t),a=UM({inputs:{a:r,b:f},backend:n}),o=TM({inputs:{x:a},backend:n,attrs:{dtype:`float32`}}),s=yN({inputs:{a:o,b:i},backend:n}),c=_I({inputs:{x:s},backend:n,attrs:{axis:0,keepDims:!1}});l.push(c),u.push(r),u.push(a),u.push(o),u.push(s),u.push(c)}let p=QL({inputs:l,backend:n,attrs:{axis:0}});return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var Pz=[WP,hM,GP,KP,jM,JP,XP,QP,eF,nF,rF,iF,aF,oF,sF,pF,hF,_F,yF,HP,xF,CF,TF,FM,DF,EM,BM,OF,vM,kF,NF,FF,LF,zF,VF,UF,GF,KF,qF,YF,ZF,$F,tI,rI,aI,sI,lI,dI,fI,pI,mI,gI,bI,OP,SI,WM,kI,qM,jI,YM,BI,HI,WI,ZM,$M,KI,JI,XI,QI,rN,aN,xM,eL,jF,tL,nL,rL,AP,sN,lN,aL,fN,oL,sL,cL,lL,dL,pL,hL,hN,_L,yL,xL,CL,TL,DL,kL,_N,jL,ML,IL,bN,CN,zL,HL,GL,TN,qL,ZL,$L,tR,nR,NP,jN,iR,oR,cR,uR,CM,NI,dR,FP,LP,BP,pR,hR,_R,yR,xR,SR,CR,YN,TR,AR,MR,FR,$N,IR,LR,RR,nP,PL,BR,HR,WR,KR,JR,XR,QR,ez,sP,tz,lP,dP,nz,iz,oz,cz,uz,bP,vI,dz,fz,mz,gz,vz,bz,ON,Az,Mz,{kernelName:Vl,backendName:`cpu`,kernelFunc:Nz},YL];for(let e of Pz)nu(e);var Fz={},Iz={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Lz(e,t){Fz[e]=t}function Rz(e,t){if(!(e in Fz)||t!=null){let n=Bz(e,t);if(n!==null)Fz[e]=n;else return console.log(`Could not get context for WebGL version`,e),null}let n=Fz[e];return n==null||n.isContextLost()?(delete Fz[e],Rz(e)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),Fz[e])}function zz(e){if(!j().getBool(`IS_SAFARI`)&&typeof OffscreenCanvas<`u`&&e===2)return new OffscreenCanvas(300,150);if(typeof document<`u`)return document.createElement(`canvas`);throw Error(`Cannot create a canvas in this context`)}function Bz(e,t){if(e!==1&&e!==2)throw Error(`Cannot get WebGL rendering context, WebGL is disabled.`);let n=t??zz(e);return n.addEventListener(`webglcontextlost`,t=>{t.preventDefault(),delete Fz[e]},!1),j().getBool(`SOFTWARE_WEBGL_ENABLED`)&&(Iz.failIfMajorPerformanceCaveat=!1),e===1?n.getContext(`webgl`,Iz)||n.getContext(`experimental-webgl`,Iz):n.getContext(`webgl2`,Iz)}var Vz;(function(e){e[e.DENSE=0]=`DENSE`,e[e.SHARED_BATCH=1]=`SHARED_BATCH`})(Vz||={});var Hz;(function(e){e[e.RENDER=0]=`RENDER`,e[e.UPLOAD=1]=`UPLOAD`,e[e.PIXELS=2]=`PIXELS`,e[e.DOWNLOAD=3]=`DOWNLOAD`})(Hz||={});var Uz;(function(e){e[e.UNPACKED_FLOAT16=0]=`UNPACKED_FLOAT16`,e[e.UNPACKED_FLOAT32=1]=`UNPACKED_FLOAT32`,e[e.PACKED_4X1_UNSIGNED_BYTE=2]=`PACKED_4X1_UNSIGNED_BYTE`,e[e.PACKED_2X2_FLOAT32=3]=`PACKED_2X2_FLOAT32`,e[e.PACKED_2X2_FLOAT16=4]=`PACKED_2X2_FLOAT16`})(Uz||={});function Wz(e,t){return[t,e]}function Gz(e,t){return e*t}function Kz(e){let t=k(e);return go(Math.ceil(t/4))}function qz(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function Jz(e,t){let[n,r]=qz(e,t);return n*r*4}function Yz(e,t){let n=e,r,i,a,o,s,c,l,u,d,f;return j().getNumber(`WEBGL_VERSION`)===2?(r=n.R32F,i=n.R16F,a=n.RGBA16F,o=n.RGBA32F,s=n.RED,l=4,u=1,d=n.HALF_FLOAT,f=n.FLOAT,c=n.RGBA8):(r=e.RGBA,i=e.RGBA,a=e.RGBA,o=n.RGBA,s=e.RGBA,l=4,u=4,d=t==null?null:t.HALF_FLOAT_OES,f=e.FLOAT,c=e.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:i,internalFormatPackedHalfFloat:a,internalFormatPackedFloat:o,textureFormatFloat:s,downloadTextureFormat:c,downloadUnpackNumChannels:l,defaultNumChannels:u,textureTypeHalfFloat:d,textureTypeFloat:f}}function Z(e,t){let n=t();return j().getBool(`DEBUG`)&&Xz(e),n}function Xz(e){let t=e.getError();if(t!==e.NO_ERROR)throw Error(`WebGL Error: `+eB(e,t))}var Zz=5.96e-8,Qz=65504;function $z(e){return!!(j().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)||e===0||Zz<Math.abs(e)&&Math.abs(e)<Qz)}function eB(e,t){switch(t){case e.NO_ERROR:return`NO_ERROR`;case e.INVALID_ENUM:return`INVALID_ENUM`;case e.INVALID_VALUE:return`INVALID_VALUE`;case e.INVALID_OPERATION:return`INVALID_OPERATION`;case e.INVALID_FRAMEBUFFER_OPERATION:return`INVALID_FRAMEBUFFER_OPERATION`;case e.OUT_OF_MEMORY:return`OUT_OF_MEMORY`;case e.CONTEXT_LOST_WEBGL:return`CONTEXT_LOST_WEBGL`;default:return`Unknown error code ${t}`}}function tB(e,t){return CB(e,()=>e.getExtension(t),`Extension "`+t+`" not supported on this browser.`)}function nB(e,t){let n=CB(e,()=>e.createShader(e.VERTEX_SHADER),`Unable to create vertex WebGLShader.`);if(Z(e,()=>e.shaderSource(n,t)),Z(e,()=>e.compileShader(n)),e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw console.log(e.getShaderInfoLog(n)),Error(`Failed to compile vertex shader.`);return n}function rB(e,t){let n=CB(e,()=>e.createShader(e.FRAGMENT_SHADER),`Unable to create fragment WebGLShader.`);if(Z(e,()=>e.shaderSource(n,t)),Z(e,()=>e.compileShader(n)),j().get(`ENGINE_COMPILE_ONLY`))return n;if(e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw aB(t,e.getShaderInfoLog(n)),Error(`Failed to compile fragment shader.`);return n}var iB=/ERROR: [0-9]+:([0-9]+):/g;function aB(e,t){let n=iB.exec(t);if(n==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let r=+n[1],i=e.split(`
`),a=i.length.toString().length+2,o=i.map((e,t)=>_o((t+1).toString(),a)+e),s=0;for(let e=0;e<o.length;e++)s=Math.max(o[e].length,s);let c=o.slice(0,r-1),l=o.slice(r-1,r),u=o.slice(r);console.log(c.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${_o(l[0],s)}`,`border:1px solid red; background-color:#e3d2d2; color:#a61717`),console.log(u.join(`
`))}function oB(e){return CB(e,()=>e.createProgram(),`Unable to create WebGLProgram.`)}function sB(e,t){if(Z(e,()=>e.linkProgram(t)),!j().get(`ENGINE_COMPILE_ONLY`)&&e.getProgramParameter(t,e.LINK_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),Error(`Failed to link vertex and fragment shaders.`)}function cB(e,t){if(Z(e,()=>e.validateProgram(t)),e.getProgramParameter(t,e.VALIDATE_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),Error(`Shader program validation failed.`)}function lB(e,t){let n=CB(e,()=>e.createBuffer(),`Unable to create WebGLBuffer`);return Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),Z(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function uB(e,t){let n=CB(e,()=>e.createBuffer(),`Unable to create WebGLBuffer`);return Z(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n)),Z(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function dB(e){return CB(e,()=>e.createTexture(),`Unable to create WebGLTexture.`)}function fB(e,t){let n=j().getNumber(`WEBGL_MAX_TEXTURE_SIZE`);if(e<=0||t<=0){let n=`[${e}x${t}]`;throw Error(`Requested texture size `+n+` is invalid.`)}if(e>n||t>n){let r=`[${e}x${t}]`,i=`[${n}x${n}]`;throw Error(`Requested texture size `+r+` greater than WebGL maximum on this browser / GPU `+i+`.`)}}function pB(e){return CB(e,()=>e.createFramebuffer(),`Unable to create WebGLFramebuffer.`)}function mB(e,t,n,r,i,a,o){let s=e.getAttribLocation(t,n);return s!==-1&&(Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),Z(e,()=>e.vertexAttribPointer(s,i,e.FLOAT,!1,a,o)),Z(e,()=>e.enableVertexAttribArray(s)),!0)}function hB(e,t,n){wB(e,n),Z(e,()=>e.activeTexture(e.TEXTURE0+n)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,t))}function gB(e,t,n){return CB(e,()=>e.getUniformLocation(t,n),`uniform "`+n+`" not present in program.`)}function _B(e,t,n){return e.getUniformLocation(t,n)}function vB(e,t,n,r){Z(e,()=>hB(e,t,r)),Z(e,()=>e.uniform1i(n,r))}function yB(e,t,n){Z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,n)),Z(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function bB(e,t){Z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),Z(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function xB(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw Error(`Error binding framebuffer: `+SB(e,t))}function SB(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return`FRAMEBUFFER_INCOMPLETE_DIMENSIONS`;case e.FRAMEBUFFER_UNSUPPORTED:return`FRAMEBUFFER_UNSUPPORTED`;default:return`unknown error ${t}`}}function CB(e,t,n){let r=Z(e,()=>t());if(r==null)throw Error(n);return r}function wB(e,t){let n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n){let e=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw Error(`textureUnit must be in ${e}.`)}}function TB(e,t=2){return k(e.slice(0,e.length-t))}function EB(e){if(e.length===0)throw Error(`Cannot get rows and columns of an empty shape array.`);return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function DB(e){let t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[TB(e),...EB(e)]),t}function OB(e,t=!1){let n=j().getNumber(`WEBGL_MAX_TEXTURE_SIZE`),r=j().getNumber(`WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE`);r===1/0&&j().getBool(`WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE`)&&(r=n/2),t&&(n*=2,r*=2,e=e.map((t,n)=>n>=e.length-2?co(e[n]):e[n]),e.length===1&&(e=[2,e[0]])),e.length!==2&&(e=xo(e).newShape);let i=k(e),a=null;e.length<=1&&i<=n?a=[1,i]:e.length===2&&e[0]<=n&&e[1]<=n?a=e:e.length===3&&e[0]*e[1]<=n&&e[2]<=n?a=[e[0]*e[1],e[2]]:e.length===3&&e[0]<=n&&e[1]*e[2]<=n?a=[e[0],e[1]*e[2]]:e.length===4&&e[0]*e[1]*e[2]<=n&&e[3]<=n?a=[e[0]*e[1]*e[2],e[3]]:e.length===4&&e[0]<=n&&e[1]*e[2]*e[3]<=n&&(a=[e[0],e[1]*e[2]*e[3]]);let o=a!=null&&Math.max(...a)>r&&Math.min(...a)<=(t?2:1)&&Math.min(...a)>0;if(a==null||o){if(t){let t=TB(e),n=2,r=2;e.length&&([n,r]=EB(e)),i=n/2*t*(r/2),a=go(i).map(e=>e*2)}else a=go(i)}return a}function kB(e){return e%2==0}function AB(e,t){if(e=e.slice(-2),t=t.slice(-2),mo(e,t)||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){let n=e[e.length-1],r=t[t.length-1];if(n===r||kB(n)&&kB(r)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&kB(e[0])&&kB(t[0])}var jB,MB;function NB(e){if(jB==null){let t=Rz(e);jB=t.getParameter(t.MAX_TEXTURE_SIZE)}return jB}function PB(e){if(MB==null){let t=Rz(e);MB=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,MB)}function FB(e){if(e===0)return 0;let t,n=Rz(e);return t=IB(n,`EXT_disjoint_timer_query_webgl2`)&&e===2?2:+!!IB(n,`EXT_disjoint_timer_query`),t}function IB(e,t){return e.getExtension(t)!=null}function LB(e){try{if(Rz(e)!=null)return!0}catch(e){return console.log(`Error when getting WebGL context: `,e),!1}return!1}function RB(e){if(e===0)return!1;let t=Rz(e);if(e===1){if(!IB(t,`OES_texture_float`))return!1}else if(!IB(t,`EXT_color_buffer_float`))return!1;return BB(t)}function zB(e){if(e===0)return!1;let t=Rz(e);if(e===1){if(!IB(t,`OES_texture_float`)||!IB(t,`WEBGL_color_buffer_float`))return!1}else{if(IB(t,`EXT_color_buffer_float`))return BB(t);let e=`EXT_color_buffer_half_float`;return IB(t,e)?VB(t,t.getExtension(e)):!1}return BB(t)}function BB(e){let t=Yz(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);let r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),i}function VB(e,t){let n=Yz(e,t),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,n.internalFormatHalfFloat,1,1,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(i),a}function HB(e){return e===2&&Rz(e).fenceSync!=null}function UB(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{e!=null&&O(e.dtype!==`complex64`,()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}var Q=j();Q.registerFlag(`HAS_WEBGL`,()=>Q.getNumber(`WEBGL_VERSION`)>0),Q.registerFlag(`WEBGL_VERSION`,()=>LB(2)?2:+!!LB(1)),Q.registerFlag(`WEBGL_CHECK_NUMERICAL_PROBLEMS`,()=>!1),Q.registerFlag(`WEBGL_BUFFER_SUPPORTED`,()=>Q.get(`WEBGL_VERSION`)===2),Q.registerFlag(`WEBGL_CPU_FORWARD`,()=>!0),Q.registerFlag(`WEBGL_FORCE_F16_TEXTURES`,()=>!1),Q.registerFlag(`WEBGL_PACK`,()=>Q.getBool(`HAS_WEBGL`)),Q.registerFlag(`WEBGL_PACK_NORMALIZATION`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_CLIP`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_DEPTHWISECONV`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_BINARY_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_UNARY_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_ARRAY_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_IMAGE_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_REDUCE`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_LAZILY_UNPACK`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_CONV_IM2COL`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_CONV2DTRANSPOSE`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_MAX_TEXTURE_SIZE`,()=>NB(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_MAX_TEXTURES_IN_SHADER`,()=>PB(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`,()=>{let e=Q.getNumber(`WEBGL_VERSION`);return e===0?0:FB(e)}),Q.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`,()=>Q.getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0&&!Sd()),Q.registerFlag(`WEBGL_RENDER_FLOAT32_CAPABLE`,()=>RB(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_RENDER_FLOAT32_ENABLED`,()=>!Q.getBool(`WEBGL_FORCE_F16_TEXTURES`)&&Q.getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)),Q.registerFlag(`WEBGL_DOWNLOAD_FLOAT_ENABLED`,()=>zB(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_FENCE_API_ENABLED`,()=>HB(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_SIZE_UPLOAD_UNIFORM`,()=>Q.getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?4:0),Q.registerFlag(`WEBGL_DELETE_TEXTURE_THRESHOLD`,()=>-1,e=>{if(typeof e!=`number`)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${e}.`);if(e<0&&e!==-1)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)}),Q.registerFlag(`WEBGL_FLUSH_THRESHOLD`,()=>Sd()?1:-1,e=>{if(typeof e!=`number`)throw Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${e}.`);if(e<0&&e!==-1)throw Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)}),Q.registerFlag(`CPU_HANDOFF_SIZE_THRESHOLD`,()=>128),Q.registerFlag(`WEBGL_USE_SHAPES_UNIFORMS`,()=>!1),Q.registerFlag(`TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD`,()=>1e5),Q.registerFlag(`TOPK_K_CPU_HANDOFF_THRESHOLD`,()=>128),Q.registerFlag(`WEBGL_EXP_CONV`,()=>!1),Q.registerFlag(`SOFTWARE_WEBGL_ENABLED`,()=>Q.getBool(`IS_TEST`)),Q.registerFlag(`WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE`,()=>1/0),Q.registerFlag(`WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE`,()=>!1),Q.registerFlag(`WEBGL2_ISNAN_CUSTOM`,()=>!1),Q.registerFlag(`ENGINE_COMPILE_ONLY`,()=>!1);function WB(){let e,t,n,r,i,a,o,s,c,l;return j().getNumber(`WEBGL_VERSION`)===2?(e=`#version 300 es`,t=`in`,n=`out`,r=`in`,i=`texture`,a=`outputColor`,o=`out vec4 outputColor;`,s=j().getBool(`WEBGL2_ISNAN_CUSTOM`)?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:``,c=``,l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e=``,t=`attribute`,n=`varying`,r=`varying`,i=`texture2D`,a=`gl_FragColor`,o=``,s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,c=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:i,output:a,defineOutput:o,defineSpecialNaN:s,defineSpecialInf:c,defineRound:l}}function GB(e,t,n=`index`){let r=A(t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / ${t}`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${t}`:`index -= ${e[i]} * ${t}`};`).join(``)}function KB(e,t,n=`index`){let r=A(t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / outShapeStrides[${i}]`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * outShapeStrides[${i}]`:`index -= ${e[i]} * outShapeStrides[${i}]`};`).join(``)}function qB(e,t){let n=e.length,r=e.map(e=>`${t}[${e}]`),i=Array(n-1);i[n-2]=r[n-1];for(let e=n-3;e>=0;--e)i[e]=`(${i[e+1]} * ${r[e+1]})`;return i}function JB(e,t,n=`index`){let r=qB(e.map((e,t)=>t),t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / ${r[i]}`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${r[i]}`:`index -= ${e[i]} * ${r[i]}`};`).join(``)}function YB(e){let t=A(e).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function XB(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var ZB=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`,{getBroadcastDims:QB}=dS;function $B(e,t,n){let r=[];if(e.forEach(e=>{let t=k(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform?r.push(`uniform float ${e.name}${t>1?`[${t}]`:``};`):(r.push(`uniform sampler2D ${e.name};`),r.push(`uniform int offset${e.name};`)),n.enableShapeUniforms){let{uniformShape:t}=VV(n.packedInputs,e.shapeInfo.logicalShape,e.shapeInfo.texShape);switch(t.length){case 1:r.push(`uniform int ${e.name}Shape;`);break;case 2:r.push(`uniform ivec2 ${e.name}Shape;`);break;case 3:r.push(`uniform ivec3 ${e.name}Shape;`);break;case 4:r.push(`uniform ivec4 ${e.name}Shape;`)}r.push(`uniform ivec2 ${e.name}TexShape;`)}}),n.enableShapeUniforms){switch(t.logicalShape.length){case 1:r.push(`uniform int outShape;`);break;case 2:r.push(`uniform ivec2 outShape;`),r.push(`uniform int outShapeStrides;`);break;case 3:r.push(`uniform ivec3 outShape;`),r.push(`uniform ivec2 outShapeStrides;`);break;case 4:r.push(`uniform ivec4 outShape;`),r.push(`uniform ivec3 outShapeStrides;`)}r.push(`uniform ivec2 outTexShape;`)}n.customUniforms&&n.customUniforms.forEach(e=>{r.push(`uniform ${e.type} ${e.name}${e.arrayIndex?`[${e.arrayIndex}]`:``};`)});let i=r.join(`
`),a=e.map(e=>nV(e,t,n.packedInputs,n.enableShapeUniforms)).join(`
`),o=t.texShape,s=WB(),c=aV(s),l,u,d=cV(s);return t.isPacked?(l=rV(t.logicalShape,o,n.enableShapeUniforms),u=sV(s)):(l=iV(t.logicalShape,o,n.enableShapeUniforms),u=oV(s)),n.packedInputs&&(d+=fV),[d,c,u,i,l,a,n.userCode].join(`
`)}function eV(e,t=!1){let n=e.shapeInfo.logicalShape;switch(n.length){case 0:return EV(e,t);case 1:return OV(e,t);case 2:return AV(e,t);case 3:return MV(e,t);case 4:return PV(e,t);case 5:return FV(e);case 6:return IV(e);default:throw Error(`${n.length}-D input sampling is not yet supported`)}}function tV(e,t){switch(e.shapeInfo.logicalShape.length){case 0:return TV(e);case 1:return DV(e,t);case 2:return kV(e,t);case 3:return jV(e,t);default:return NV(e,t)}}function nV(e,t,n=!1,r){let i=``;i+=n?tV(e,r):eV(e,r);let a=e.shapeInfo.logicalShape,o=t.logicalShape;return a.length<=o.length&&(i+=n?RV(e,t):zV(e,t)),i}function rV(e,t,n){switch(e.length){case 0:return pV();case 1:return mV(e,t,n);case 2:return SV(e,t,n);case 3:return gV(e,t,n);default:return vV(e,t,n)}}function iV(e,t,n){switch(e.length){case 0:return pV();case 1:return hV(e,t,n);case 2:return CV(e,t,n);case 3:return _V(e,t,n);case 4:return yV(e,t,n);case 5:return bV(e,t);case 6:return xV(e,t);default:throw Error(`${e.length}-D output sampling is not yet supported`)}}function aV(e){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${e.texture2D}(textureSampler, uv).r;
    }
  `}function oV(e){return`
    void setOutput(float val) {
      ${e.output} = vec4(val, 0, 0, 0);
    }
  `}function sV(e){return`
    void setOutput(vec4 val) {
      ${e.output} = val;
    }
  `}function cV(e){return`${e.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${e.varyingFs} vec2 resultUV;
    ${e.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${e.defineSpecialNaN}
    ${e.defineSpecialInf}
    ${e.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${lV}
    ${uV}
    ${dV}
  `}var lV=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,uV=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,dV=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,fV=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function pV(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function mV(e,t,n){let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return r[0]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${r[1]}.0);
      }
    `:r[1]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${r[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      return 2 * (resTexRC.x * ${r[1]} + resTexRC.y);
    }
  `}function hV(e,t,n){return t[0]===1?n?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?n?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function gV(e,t,n){if(n)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],i=Math.ceil(e[2]/2),a=i*Math.ceil(e[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec3(b, r, c);
    }
  `}function _V(e,t,n){if(n)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${KB([`r`,`c`,`d`],e)}
    return ivec3(r, c, d);
  }
`;let r=GB([`r`,`c`,`d`],e);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec3(r, c, d);
    }
  `}function vV(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],i=Math.ceil(e[e.length-1]/2),a=i*Math.ceil(e[e.length-2]/2),o=a,s=``,c=`b, r, c`;for(let t=2;t<e.length-1;t++)o*=e[e.length-t-1],s=`
      int b${t} = index / ${o};
      index -= b${t} * ${o};
    `+s,c=`b${t}, `+c;return`
    ivec${e.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      ${s}

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec${e.length}(${c});
    }
  `}function yV(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${KB([`r`,`c`,`d`,`d2`],e)}
      return ivec4(r, c, d, d2);
    }
  `;let r=GB([`r`,`c`,`d`,`d2`],e);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec4(r, c, d, d2);
    }
  `}function bV(e,t){let n=GB([`r`,`c`,`d`,`d2`,`d3`],e);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function xV(e,t){let n=GB([`r`,`c`,`d`,`d2`,`d3`,`d4`],e);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function SV(e,t,n){let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(mo(e,t))return n?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${r[0]}, ${r[1]}));
      }
    `;let i=Math.ceil(e[1]/2);return n?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));

      int index = resTexRC.x * ${r[1]} + resTexRC.y;
      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec2(r, c);
    }
  `}function CV(e,t,n){return mo(e,t)?n?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:e[1]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:e[0]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:n?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${e[1]};
      int c = index - r * ${e[1]};
      return ivec2(r, c);
    }
  `}function wV(e){return`offset${e}`}function TV(e){let t=e.name;return`
    vec4 ${`get`+t.charAt(0).toUpperCase()+t.slice(1)}() {
      return ${WB().texture2D}(${t}, halfCR);
    }
  `}function EV(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`float ${r}() {return ${n};}`;let[i,a]=e.shapeInfo.texShape;if(i===1&&a===1)return`
      float ${r}() {
        return sampleTexture(${n}, halfCR);
      }
    `;let o=wV(n);if(t)return`
    float ${r}() {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${o});
      return sampleTexture(${n}, uv);
    }
  `;let[s,c]=e.shapeInfo.texShape;return`
    float ${r}() {
      vec2 uv = uvFromFlat(${s}, ${c}, ${o});
      return sampleTexture(${n}, uv);
    }
  `}function DV(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=e.shapeInfo.texShape,a=WB();if(t)return`
    vec4 ${r}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${a.texture2D}(${n}, uv);
    }
  `;let o=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)];return`
    vec4 ${r}(int index) {
      vec2 uv = packedUVfrom1D(
        ${o[0]}, ${o[1]}, index);
      return ${a.texture2D}(${n}, uv);
    }
  `}function OV(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float ${r}(int index) {
        ${LV(e)}
      }
    `;let i=e.shapeInfo.texShape,a=i[0],o=i[1];if(o===1&&a===1)return`
      float ${r}(int index) {
        return sampleTexture(${n}, halfCR);
      }
    `;let s=wV(n);return o===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / ${a}.0);
        return sampleTexture(${n}, uv);
      }
    `:a===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / ${o}.0, 0.5);
        return sampleTexture(${n}, uv);
      }
    `:t?`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${s});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${a}, ${o}, index + ${s});
      return sampleTexture(${n}, uv);
    }
  `}function kV(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=a[0],s=a[1],c=WB();if(a!=null&&mo(n,a))return t?`
      vec4 ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);

        return ${c.texture2D}(${r}, uv);
      }
    `:`
      vec4 ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}.0, ${o}.0);

        return ${c.texture2D}(${r}, uv);
      }
    `;if(t)return`
    vec4 ${i}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${c.texture2D}(${r}, uv);
    }
  `;let l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];return`
    vec4 ${i}(int row, int col) {
      vec2 uv = packedUVfrom2D(${Math.ceil(n[1]/2)}, ${l[0]}, ${l[1]}, row, col);
      return ${c.texture2D}(${r}, uv);
    }
  `}function AV(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape;if(a!=null&&mo(n,a)){if(t)return`
      float ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `;let e=a[0];return`
    float ${i}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${a[1]}.0, ${e}.0);
      return sampleTexture(${r}, uv);
    }
  `}let{newShape:o,keptDims:s}=xo(n),c=o;if(c.length<n.length)return`
      ${eV(HV(e,c),t)}
      float ${i}(int row, int col) {
        return ${i}(${UV([`row`,`col`],s)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));
        ${LV(e)}
      }
    `;let l=a[0],u=a[1],d=wV(r);return u===1?t?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${r}TexShape[0]));
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
      return sampleTexture(${r}, uv);
    }
  `:l===1?t?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${r}TexShape[1]), 0.5);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${r}, uv);
    }
  `:t?`
      float ${i}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r}Shape[1] + col + ${d};
        vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
        return sampleTexture(${r}, uv);
      }
    `:`
  float ${i}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${n[1]} + col + ${d};
    vec2 uv = uvFromFlat(${l}, ${u}, index);
    return sampleTexture(${r}, uv);
  }
`}function jV(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];if(n[0]===1)return`
        ${tV(HV(e,n.slice(1)),t)}
        vec4 ${i}(int b, int row, int col) {
          return ${i}(${UV([`b`,`row`,`col`],[1,2])});
        }
      `;let s=WB();if(t)return`
    vec4 ${i}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${s.texture2D}(${r}, uv);
    }
  `;let c=o[0],l=o[1],u=Math.ceil(n[2]/2);return`
    vec4 ${i}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${c}, ${l}, ${u*Math.ceil(n[1]/2)}, ${u}, b, row, col);
      return ${s.texture2D}(${r}, uv);
    }
  `}function MV(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[1]*n[2],o=n[2],{newShape:s,keptDims:c}=xo(n),l=s;if(l.length<n.length)return`
        ${eV(HV(e,l),t)}
        float ${i}(int row, int col, int depth) {
          return ${i}(${UV([`row`,`col`,`depth`],c)});
        }
      `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${a}, ${o}, 1)));
        ${LV(e)}
      }
    `;let u=e.shapeInfo.texShape,d=u[0],f=u[1],p=e.shapeInfo.flatOffset;if(f===a&&p==null)return t?`
      float ${i}(int row, int col, int depth) {
        int stride1 = ${r}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
        float ${i}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${o}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${f}.0, ${d}.0);
          return sampleTexture(${r}, uv);
        }
      `;if(f===o&&p==null)return t?`
      float ${i}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${r}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${n[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${f}.0, ${d}.0);
      return sampleTexture(${r}, uv);
    }
  `;let m=wV(r);return t?`
    float ${i}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${r}Shape[1] * ${r}Shape[2];
      int stride1 = ${r}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${m};
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
      return sampleTexture(${r}, uv);
    }
    `:`
      float ${i}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${a} + col * ${o} + depth + ${m};
        vec2 uv = uvFromFlat(${d}, ${f}, index);
        return sampleTexture(${r}, uv);
      }
  `}function NV(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=WB();if(t)return`
    vec4 ${r}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${n}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${n}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${i.texture2D}(${n}, uv);
    }
  `;let a=e.shapeInfo.logicalShape,o=a.length,s=e.shapeInfo.texShape,c=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],l=c[0],u=c[1],d=Math.ceil(a[o-1]/2),f=d*Math.ceil(a[o-2]/2),p=`int b, int row, int col`,m=`b * ${f} + (row / 2) * ${d} + (col / 2)`;for(let e=2;e<o-1;e++)p=`int b${e}, `+p,f*=a[o-e-1],m=`b${e} * ${f} + `+m;return`
    vec4 ${r}(${p}) {
      int index = ${m};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${l});
      return ${i.texture2D}(${n}, uv);
    }
  `}function PV(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[3],o=n[2]*a,s=n[1]*o,{newShape:c,keptDims:l}=xo(n);if(c.length<n.length)return`
      ${eV(HV(e,c),t)}
      float ${i}(int row, int col, int depth, int depth2) {
        return ${i}(${UV([`row`,`col`,`depth`,`depth2`],l)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${s}, ${o}, ${a}, 1)));
        ${LV(e)}
      }
    `;let u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1],m=`int stride2 = ${r}Shape[3];`,h=`int stride1 = ${r}Shape[2] * stride2;`,g=`int stride0 = ${r}Shape[1] * stride1;`;if(p===s&&u==null)return t?`
      float ${i}(int row, int col, int depth, int depth2) {
        ${m}
        ${h}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${o}, ${a}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;if(p===a&&u==null)return t?`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${r}Shape[1] * ${r}Shape[2], ${r}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${n[1]*n[2]}, ${n[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;let _=wV(r);return t?`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${m}
      ${h}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${_});
      return sampleTexture(${r}, uv);
    }
  `:`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${s} + col * ${o} +
          depth * ${a} + depth2;
      vec2 uv = uvFromFlat(${f}, ${p}, index + ${_});
      return sampleTexture(${r}, uv);
    }
  `}function FV(e){let t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=t[4],a=t[3]*i,o=t[2]*a,s=t[1]*o,{newShape:c,keptDims:l}=xo(t);if(c.length<t.length)return`
      ${eV(HV(e,c))}
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        return ${r}(${UV([`row`,`col`,`depth`,`depth2`,`depth3`],l)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${s}, ${o}, ${a}, ${i})) +
          depth3;
        ${LV(e)}
      }
    `;let u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1];return p===s&&u==null?`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${o}, ${a}, ${i}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `:p===i&&u==null?`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${s} + col * ${o} + depth * ${a} +
          depth2 * ${i} + depth3 + ${wV(n)};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${n}, uv);
    }
  `}function IV(e){let t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),{newShape:i,keptDims:a}=xo(t);if(i.length<t.length)return`
      ${eV(HV(e,i))}
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${r}(${UV([`row`,`col`,`depth`,`depth2`,`depth3`,`depth4`],a)});
      }
    `;let o=t[5],s=t[4]*o,c=t[3]*s,l=t[2]*c,u=t[1]*l;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${l}, ${c}, ${s})) +
          dot(
            vec2(depth3, depth4),
            vec2(${o}, 1)));
        ${LV(e)}
      }
    `;let d=e.shapeInfo.flatOffset,f=e.shapeInfo.texShape,p=f[0],m=f[1];return m===u&&d==null?`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${c}, ${s}, ${o})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${m}.0, ${p}.0);
        return sampleTexture(${n}, uv);
      }
    `:m===o&&d==null?`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${m}.0, ${p}.0);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${l} + depth * ${c} +
          depth2 * ${s} + depth3 * ${o} + depth4 + ${wV(n)};
      vec2 uv = uvFromFlat(${p}, ${m}, index);
      return sampleTexture(${n}, uv);
    }
  `}function LV(e){let t=e.name,n=k(e.shapeInfo.logicalShape);return n<2?`return ${t};`:`
    for (int i = 0; i < ${n}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function RV(e,t){let n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=e.shapeInfo.logicalShape.length,o=t.logicalShape.length,s=QB(e.shapeInfo.logicalShape,t.logicalShape),c=BV(o),l=o-a,u,d=[`x`,`y`,`z`,`w`,`u`,`v`];u=a===0?``:o<2&&s.length>=1?`coords = 0;`:s.map(e=>`coords.${d[e+l]} = 0;`).join(`
`);let f=``;f=o<2&&a>0?`coords`:e.shapeInfo.logicalShape.map((e,t)=>`coords.${d[t+l]}`).join(`, `);let p=`return outputValue;`,m=k(e.shapeInfo.logicalShape)===1,h=k(t.logicalShape)===1;if(a===1&&!m&&!h)p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!h)p=o===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(s.length){let e=a-2,t=a-1;s.indexOf(e)>-1&&s.indexOf(t)>-1?p=`return vec4(outputValue.x);`:s.indexOf(e)>-1?p=`return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);`:s.indexOf(t)>-1&&(p=`return vec4(outputValue.xx, outputValue.zz);`)}return`
    vec4 ${i}() {
      ${c} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${r}(${f});
      ${p}
    }
  `}function zV(e,t){let n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=t.texShape,o=e.shapeInfo.texShape,s=e.shapeInfo.logicalShape.length,c=t.logicalShape.length;if(!e.shapeInfo.isUniform&&s===c&&e.shapeInfo.flatOffset==null&&mo(o,a))return`
      float ${i}() {
        return sampleTexture(${n}, resultUV);
      }
    `;let l=BV(c),u=QB(e.shapeInfo.logicalShape,t.logicalShape),d=c-s,f,p=[`x`,`y`,`z`,`w`,`u`,`v`];f=s===0?``:c<2&&u.length>=1?`coords = 0;`:u.map(e=>`coords.${p[e+d]} = 0;`).join(`
`);let m=``;return m=c<2&&s>0?`coords`:e.shapeInfo.logicalShape.map((e,t)=>`coords.${p[t+d]}`).join(`, `),`
    float ${i}() {
      ${l} coords = getOutputCoords();
      ${f}
      return get${r}(${m});
    }
  `}function BV(e){if(e<=1)return`int`;if(e===2)return`ivec2`;if(e===3)return`ivec3`;if(e===4)return`ivec4`;if(e===5)return`ivec5`;if(e===6)return`ivec6`;throw Error(`GPU for rank ${e} is not yet supported`)}function VV(e,t,n){let{newShape:r,keptDims:i}=xo(t),a=t.length,o=e&&a===3&&t[0]===1,s=o?t.slice(1):r,c=!e&&a>1&&!mo(t,n)&&r.length<a||o;return{useSqueezeShape:c,uniformShape:c?s:t,keptDims:i}}function HV(e,t){let n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function UV(e,t){return t.map(t=>e[t]).join(`, `)}function WV(e,t,n,r){let i=n.map((e,n)=>{let r={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return e.texData!=null&&e.texData.slice!=null&&e.texData.slice.flatOffset>0&&(r.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[n],shapeInfo:r}}),a=i.map(e=>e.shapeInfo),o={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},s=$B(i,o,t),c=rB(e.gl,s),l=e.createProgram(c);return j().get(`ENGINE_COMPILE_ONLY`)?{program:t,fragmentShader:c,source:s,webGLProgram:l,inShapeInfos:a,outShapeInfo:o,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(e.buildVao(l),Object.assign({program:t,fragmentShader:c,source:s,webGLProgram:l,inShapeInfos:a,outShapeInfo:o},GV(e,t,l)))}function GV(e,t,n){let r=[],i=[],a,o,s,c=null,l=null;l=e.getUniformLocation(n,`NAN`,!1),j().getNumber(`WEBGL_VERSION`)===1&&(c=e.getUniformLocation(n,`INFINITY`,!1));for(let i of t.variableNames){let a={name:i,uniform:e.getUniformLocation(n,i,!1),offset:e.getUniformLocation(n,`offset${i}`,!1)};t.enableShapeUniforms&&(a.shape=e.getUniformLocation(n,`${i}Shape`,!1),a.texShape=e.getUniformLocation(n,`${i}TexShape`,!1)),r.push(a)}if(t.enableShapeUniforms&&(a=e.getUniformLocation(n,`outShape`,!1),s=e.getUniformLocation(n,`outShapeStrides`,!1),o=e.getUniformLocation(n,`outTexShape`,!1)),t.customUniforms)for(let r of t.customUniforms)i.push(e.getUniformLocation(n,r.name,!1));return{variablesLocations:r,customUniformLocations:i,infLoc:c,nanLoc:l,outShapeLocation:a,outShapeStridesLocation:s,outTexShapeLocation:o}}function KV(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((e,n)=>{let r=e.logicalShape,i=t[n],a=i.shape;if(!mo(r,a))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${a} must match`);if(e.isUniform&&i.isUniform)return;let o=e.texShape,s=i.isUniform?null:i.texData.texShape;if(!mo(o,s))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${o} and ${s} must match`)})}function qV(e,t,n,r,i){t.program.enableShapeUniforms||(KV(t.inShapeInfos,n),KV([t.outShapeInfo],[r]));let a=r.texData.texture,o=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(a.texture,o[0],o[1]):e.setOutputMatrixTexture(a.texture,o[0],o[1]),e.setProgram(t.webGLProgram),e.bindVertexArray(t.webGLProgram.vao),j().getNumber(`WEBGL_VERSION`)===1&&t.infLoc!==null&&e.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&e.gl.uniform1f(t.nanLoc,NaN);for(let r=0;r<n.length;++r){let i=n[r],{uniform:a,offset:o,shape:s,texShape:c}=t.variablesLocations[r];if(s){let{uniformShape:n}=VV(t.program.packedInputs,i.shape,i.texData.texShape);switch(n.length){case 1:e.gl.uniform1iv(s,new Int32Array(n));break;case 2:e.gl.uniform2iv(s,new Int32Array(n));break;case 3:e.gl.uniform3iv(s,new Int32Array(n));break;case 4:e.gl.uniform4iv(s,new Int32Array(n))}}if(c&&e.gl.uniform2i(c,i.texData.texShape[0],i.texData.texShape[1]),a!=null){if(i.isUniform){if(k(i.shape)<2)e.gl.uniform1f(a,i.uniformValues[0]);else{let t=i.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(a,t)}continue}i.texData.slice!=null&&o!=null&&e.gl.uniform1i(o,i.texData.slice.flatOffset),e.setInputMatrixTexture(i.texData.texture.texture,a,r)}}let s=t.outShapeLocation;if(s)switch(r.shape.length){case 1:e.gl.uniform1iv(s,new Int32Array(r.shape));break;case 2:e.gl.uniform2iv(s,new Int32Array(r.shape));break;case 3:e.gl.uniform3iv(s,new Int32Array(r.shape));break;case 4:e.gl.uniform4iv(s,new Int32Array(r.shape))}if(t.outShapeStridesLocation){let n=A(r.shape);switch(r.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(n));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(n));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(n))}}if(t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,r.texData.texShape[0],r.texData.texShape[1]),t.program.customUniforms&&i)for(let n=0;n<t.program.customUniforms.length;++n){let r=t.program.customUniforms[n],a=t.customUniformLocations[n],o=i[n];if(r.type===`float`)e.gl.uniform1fv(a,o);else if(r.type===`vec2`)e.gl.uniform2fv(a,o);else if(r.type===`vec3`)e.gl.uniform3fv(a,o);else if(r.type===`vec4`)e.gl.uniform4fv(a,o);else if(r.type===`int`)e.gl.uniform1iv(a,o);else if(r.type===`ivec2`)e.gl.uniform2iv(a,o);else if(r.type===`ivec3`)e.gl.uniform3iv(a,o);else if(r.type===`ivec4`)e.gl.uniform4iv(a,o);else throw Error(`uniform type ${r.type} is not supported yet.`)}e.executeProgram()}function JV(e,t,n){let r=``;t.concat(n).forEach(t=>{let i=t.texData!=null&&t.texData.slice!=null&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){let a=t.texData.texShape,{useSqueezeShape:o,uniformShape:s,keptDims:c}=VV(e.packedInputs,t.shape,a),l=``,u=``,d=``;if(s.length===1&&e.packedInputs){let e=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];l=`${e[0]>1}_${e[1]>1}`}else if(s.length===2&&!e.packedInputs)u=`${s[0]>1}_${s[1]>1}`;else if(s.length>2&&!e.packedInputs){let e=A(s);d=`${e[0]===a[1]}_${e[e.length-1]===a[1]}`}let f=t.shape.length,p=s.length===2&&mo(t.shape,a),m=k(t.shape)===1,h=Xm(t.shape,n.shape),g=!e.packedInputs&&f===n.shape.length&&mo(a,n.texData.texShape),_=e.packedInputs||s.length>2?``:`${a[0]>1}_${a[1]>1}`;r+=`${f}_${g}_${o?c:``}_${s.length}_${m}_${h}_${p}_${l}_${u}_${d}_${_}_${i}`}else{let e=t.isUniform?`uniform`:t.texData.texShape;r+=`${t.shape}_${e}_${i}`}});let i=e.userCode,a=e.constructor.name;return a+=`_`+r+`_`+i+`${j().getNumber(`WEBGL_VERSION`)}`,a}function YV(e){return j().getBool(`WEBGL_USE_SHAPES_UNIFORMS`)&&e<=4}var XV=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Vz.DENSE,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let t=WB();this.outputShape=e,this.enableShapeUniforms=YV(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?KB([`r`,`c`,`d`],e):GB([`r`,`c`,`d`],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}},ZV=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Vz.DENSE,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let t=WB();this.outputShape=e,this.enableShapeUniforms=YV(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?KB([`r`,`c`,`d`],e):GB([`r`,`c`,`d`],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}},QV=class{constructor(e){this.variableNames=[`A`],this.outTexUsage=Hz.DOWNLOAD;let t=WB();this.outputShape=e,this.userCode=`
      ${ZB}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}},$V=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Hz.DOWNLOAD;let t=WB();this.outputShape=e,this.userCode=`
      ${ZB}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}},eH={R:0,G:1,B:2,A:3},tH=class{constructor(e,t=!1,n=`RGBA`){this.variableNames=[`A`],this.customUniforms=[{name:`texShape`,type:`ivec2`}];let r=WB();this.outputShape=e,this.enableShapeUniforms=YV(this.outputShape.length);let i=`result`;t&&(i=`floor(result * 255. + 0.5)`);let a=``;for(let e=0;e<n.length;e++){let t=n[e];a+=`
          if(offset == ${e}) {
            result = values[${eH[t]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?XB():YB(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${n.length});

        flatIndex = idiv(flatIndex, ${n.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${r.texture2D}(A, uv);
          ${a}
        }
        ${r.output} = vec4(${i}, 0., 0., 0.);
      }
    `}},nH=class{constructor(e,t=!1){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let n=WB();this.outputShape=e,this.enableShapeUniforms=YV(this.outputShape.length);let r=``,i=`result`;t&&(i=`floor(result * 255. + 0.5)`);for(let t=0;t<=1;t++)for(let i=0;i<=1;i++){let a=t*2+i;r+=`
          localCoords = coords;
          if(localCoords[2] + ${i} < ${this.enableShapeUniforms?`outShape[2]`:`${e[2]}`}) {
          localCoords[2] += ${i};
          if (localCoords[1] + ${t} < ${this.enableShapeUniforms?`outShape[1]`:`${e[1]}`}) {
            localCoords[1] += ${t};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${n.texture2D}(A, uv);

            if (offset == 0) {
              result[${a}] = values[0];
            } else if (offset == 1) {
              result[${a}] = values[1];
            } else if (offset == 2) {
              result[${a}] = values[2];
            } else {
              result[${a}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?XB():YB(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${r}

          ${n.output} = ${i};
        }
    `}};function rH(e){let t=WB();return nB(e,`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function iH(e){return lB(e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function aH(e){return uB(e,new Uint16Array([0,1,2,2,1,3]))}function oH(e,t,n,r,i,a){fB(t,n);let o=dB(e),s=e.TEXTURE_2D;return Z(e,()=>e.bindTexture(s,o)),Z(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),Z(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),Z(e,()=>e.texParameteri(s,e.TEXTURE_MIN_FILTER,e.NEAREST)),Z(e,()=>e.texParameteri(s,e.TEXTURE_MAG_FILTER,e.NEAREST)),j().getNumber(`WEBGL_VERSION`)===1?Z(e,()=>e.texImage2D(s,0,r,t,n,0,i,a,null)):Z(e,()=>e.texStorage2D(s,1,r,t,n)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:o,texShape:[n,t]}}function sH(e){return e.internalFormatFloat}function cH(e,t,n,r){let[i,a]=Wz(t,n);return oH(e,i,a,sH(r),r.textureFormatFloat,e.FLOAT)}function lH(e){return e.internalFormatHalfFloat}function uH(e,t,n,r){let[i,a]=Wz(t,n);return oH(e,i,a,lH(r),r.textureFormatFloat,r.textureTypeHalfFloat)}function dH(e){return e.downloadTextureFormat}function fH(e,t,n,r){let[i,a]=Wz(t,n);return oH(e,i,a,dH(r),e.RGBA,e.UNSIGNED_BYTE)}function pH(e){return e.internalFormatPackedFloat}function mH(e,t,n,r){let[i,a]=qz(t,n);return oH(e,i,a,pH(r),e.RGBA,e.FLOAT)}function hH(e){return e.internalFormatPackedHalfFloat}function gH(e,t,n,r){let[i,a]=qz(t,n);return oH(e,i,a,hH(r),e.RGBA,r.textureTypeHalfFloat)}function _H(e,t,n){return Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),mB(e,t,`clipSpacePos`,n,3,20,0)&&mB(e,t,`uv`,n,2,20,12)}function vH(e,t,n,r,i,a){Z(e,()=>e.bindTexture(e.TEXTURE_2D,t));let o,s,c;i instanceof Uint8Array?(o=new Uint8Array(n*r*4),s=e.UNSIGNED_BYTE,c=e.RGBA):(o=new Float32Array(n*r*4),s=e.FLOAT,c=a.internalFormatPackedFloat),o.set(i),j().getNumber(`WEBGL_VERSION`)===2?Z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n,r,e.RGBA,s,o)):Z(e,()=>e.texImage2D(e.TEXTURE_2D,0,c,n,r,0,e.RGBA,s,o)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function yH(e,t,n){Z(e,()=>e.bindTexture(e.TEXTURE_2D,t)),n.data instanceof Uint8Array?j().getNumber(`WEBGL_VERSION`)===2?Z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,n.data)):Z(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data)):j().getNumber(`WEBGL_VERSION`)===2?Z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n)):Z(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function bH(e,t,n,r){let i=e.createBuffer();Z(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,i));let a=16*t*n;return Z(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,a,e.STREAM_READ)),Z(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,0)),Z(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),i}function xH(e,t,n){let r=e,i=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,i),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),i}function SH(e,t,n,r){let[i,a]=Wz(t,n),o=new Uint8Array(Gz(t*n,4));return Z(e,()=>e.readPixels(0,0,i,a,r.downloadTextureFormat,e.UNSIGNED_BYTE,o)),new Float32Array(o.buffer)}function CH(e,t,n,r,i,a,o,s){let c=e,l=new Float32Array(Jz(a,o));return c.bindBuffer(c.PIXEL_PACK_BUFFER,t),c.getBufferSubData(c.PIXEL_PACK_BUFFER,0,l),c.bindBuffer(c.PIXEL_PACK_BUFFER,null),l}function wH(e,t,n){let r=new Float32Array(t*n*4);return Z(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,r)),r}var TH=class{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let t=j().getNumber(`WEBGL_VERSION`);if(e==null?this.gl=Rz(t):(this.gl=e,Lz(t,e)),e=this.gl,j().getNumber(`WEBGL_VERSION`)===2){let t=e;this.createVertexArray=()=>Z(t,()=>t.createVertexArray()),this.bindVertexArray=e=>Z(t,()=>t.bindVertexArray(e)),this.deleteVertexArray=e=>Z(t,()=>t.deleteVertexArray(e)),this.getVertexArray=()=>Z(t,()=>t.getParameter(t.VERTEX_ARRAY_BINDING))}else if(e!=null){let t=e.getExtension(`OES_vertex_array_object`);if(t==null)throw Error(`All WebGL1 implementations are expected to offer OES_vertex_array_object.`);this.createVertexArray=()=>Z(e,()=>t.createVertexArrayOES()),this.bindVertexArray=n=>Z(e,()=>t.bindVertexArrayOES(n)),this.deleteVertexArray=n=>Z(e,()=>t.deleteVertexArrayOES(n)),this.getVertexArray=()=>Z(e,()=>e.getParameter(t.VERTEX_ARRAY_BINDING_OES))}let n=`WEBGL_color_buffer_float`,r=`EXT_color_buffer_half_float`;if(this.parallelCompilationExtension=this.gl.getExtension(`KHR_parallel_shader_compile`),j().getNumber(`WEBGL_VERSION`)===1){let e=`OES_texture_half_float`;if(this.textureFloatExtension=tB(this.gl,`OES_texture_float`),IB(this.gl,e))this.textureHalfFloatExtension=tB(this.gl,e);else if(j().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`);if(this.colorBufferFloatExtension=this.gl.getExtension(n),IB(this.gl,r))this.colorBufferHalfFloatExtension=tB(this.gl,r);else if(j().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`)}else if(n=`EXT_color_buffer_float`,IB(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else if(IB(this.gl,r))this.colorBufferHalfFloatExtension=this.gl.getExtension(r);else throw Error(`GL context does not support color renderable floats`);this.vertexBuffer=iH(this.gl),this.indexBuffer=aH(this.gl),this.framebuffer=pB(this.gl),this.textureConfig=Yz(this.gl,this.textureHalfFloatExtension)}get debug(){return j().getBool(`DEBUG`)}dispose(){if(this.disposed)return;this.program!=null&&console.warn(`Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing.`),this.outputTexture!=null&&console.warn(`Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.`);let e=this.gl;Z(e,()=>e.finish()),Z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),Z(e,()=>e.deleteFramebuffer(this.framebuffer)),Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),Z(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),Z(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),cH(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),uH(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),fH(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),yH(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,n,r){this.throwIfDisposed(),vH(this.gl,e,t,n,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),gH(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),mH(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(bB(this.gl,this.framebuffer),this.outputTexture=null),Z(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n){return this.downloadMatrixDriver(e,()=>SH(this.gl,t,n,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,n,r,i,a){return CH(this.gl,e,t,n,r,i,a,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return xH(this.gl,e,t)}createBufferFromTexture(e,t,n){this.bindTextureToFrameBuffer(e);let r=bH(this.gl,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n;if(j().getBool(`WEBGL_FENCE_API_ENABLED`)){let r=e,i=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=()=>{let e=r.clientWaitSync(i,0,0);return e===r.ALREADY_SIGNALED||e===r.CONDITION_SATISFIED},t=i}else j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0?(t=this.beginQuery(),this.endQuery(),n=()=>this.isQueryAvailable(t,j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))):n=()=>!0;return{query:t,isFencePassed:n}}downloadMatrixFromPackedTexture(e,t,n){return this.downloadMatrixDriver(e,()=>wH(this.gl,t,n))}createProgram(e){this.throwIfDisposed();let t=this.gl;this.vertexShader??=rH(t);let n=oB(t);Z(t,()=>t.attachShader(n,this.vertexShader)),Z(t,()=>t.attachShader(n,e)),sB(t,n);let r=Object.assign(n,{vao:this.createVertexArray()});return this.debug&&cB(t,r),r}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);let t=this.gl;Z(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),_H(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&(Z(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&cB(this.gl,this.program),Z(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,n=!0){return this.throwIfDisposed(),n?gB(this.gl,e,t):_B(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),Z(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),vB(this.gl,e,t,n)}setOutputMatrixTexture(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)}setOutputPackedMatrixTexture(e,t,n){this.throwIfDisposed();let[r,i]=qz(t,n);this.setOutputMatrixTextureDriver(e,r,i)}setOutputMatrixWriteRegion(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t)}setOutputPackedMatrixWriteRegion(e,t,n,r){throw Error(`setOutputPackedMatrixWriteRegion not implemented.`)}debugValidate(){this.program!=null&&cB(this.gl,this.program),xB(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;if(this.debug){let e=this.getVertexArray();console.assert(e===this.program.vao,`VAO changed between setProgram and executeProgram!`),this.debugValidate()}Z(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),Z(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension??=tB(this.gl,j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2?`EXT_disjoint_timer_query_webgl2`:`EXT_disjoint_timer_query`),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){let e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}let e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){let e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT);return}let e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await vo(()=>this.disposed||this.isQueryAvailable(e,j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))),this.getQueryTime(e,j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))}getQueryTime(e,t){if(t===0)return null;if(t===2){let t=this.gl;return t.getQueryParameter(e,t.QUERY_RESULT)/1e6}{let t=this.getQueryTimerExtensionWebGL1();return t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){let t=this.gl,n=this.getQueryTimerExtensionWebGL2(),r=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return this.disjoint??=this.gl.getParameter(n.GPU_DISJOINT_EXT),r&&!this.disjoint}{let t=this.getQueryTimerExtensionWebGL1(),n=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint??=this.gl.getParameter(t.GPU_DISJOINT_EXT),n&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=EH(this.itemsToPoll.map(e=>e.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let n;`setTimeoutCustom`in j().platform&&(n=j().platform.setTimeoutCustom.bind(j().platform)),vo(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,n)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),yB(this.gl,e,this.framebuffer),this.debug&&xB(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture==null?bB(this.gl,this.framebuffer):(yB(this.gl,this.outputTexture,this.framebuffer),this.debug&&xB(this.gl))}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let n=t();return this.unbindTextureToFrameBuffer(),n}setOutputMatrixTextureDriver(e,t,n){this.throwIfDisposed();let r=this.gl;yB(r,e,this.framebuffer),this.debug&&xB(r),this.outputTexture=e,Z(r,()=>r.viewport(0,0,t,n)),Z(r,()=>r.scissor(0,0,t,n))}setOutputMatrixWriteRegionDriver(e,t,n,r){this.throwIfDisposed(),Z(this.gl,()=>this.gl.scissor(e,t,n,r))}throwIfDisposed(){if(this.disposed)throw Error(`Attempted to use disposed GPGPUContext.`)}throwIfNoProgram(){if(this.program==null)throw Error(`No GPU program is currently set.`)}};function EH(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}var{addImpl:DH,bincountImpl:OH,bincountReduceImpl:kH,bitwiseAndImpl:AH,castImpl:jH,ceilImpl:MH,concatImpl:NH,equalImpl:PH,expImpl:FH,expm1Impl:IH,floorImpl:LH,gatherNdImpl:RH,gatherV2Impl:zH,greaterImpl:BH,greaterEqualImpl:VH,lessImpl:HH,lessEqualImpl:UH,linSpaceImpl:WH,logImpl:GH,maxImpl:KH,maximumImpl:qH,minimumImpl:JH,multiplyImpl:YH,negImpl:XH,notEqualImpl:ZH,prodImpl:QH,raggedGatherImpl:$H,raggedRangeImpl:eU,raggedTensorToTensorImpl:tU,rangeImpl:nU,rsqrtImpl:rU,scatterImpl:iU,sigmoidImpl:aU,simpleAbsImpl:oU,sliceImpl:sU,sparseFillEmptyRowsImpl:cU,sparseReshapeImpl:lU,sparseSegmentReductionImpl:uU,sqrtImpl:dU,staticRegexReplaceImpl:fU,stridedSliceImpl:pU,stringNGramsImpl:mU,stringSplitImpl:hU,stringToHashBucketFastImpl:gU,subImpl:_U,tileImpl:vU,topKImpl:yU,transposeImpl:bU,uniqueImpl:xU}=EP;function SU(e,t){return[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,t).map(t=>`${e}.${t}`)}function CU(e,t){return t===1?[e]:SU(e,t)}function wU(e,t){if(e===1)return`rc`;let n=``;for(let r=0;r<e;r++)n+=t[r],r<e-1&&(n+=`,`);return n}var TU=class{constructor(e){if(this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=YV(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let e=CU(`rc`,this.rank),t=BV(this.rank),n=this.getOutOfBoundsCondition(e),r=this.getSetup(e),i=this.getOutput(e);this.userCode=`
        void main() {
          ${t} rc = getOutputCoords();

          if(${n}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let n=0;n<=1;n++)for(let r=0;r<=1;r++){let i=`${n===0?`r`:`rp1`}, ${r===0?`c`:`cp1`}`;for(let t=2;t<this.rank;t++)i=`${e[e.length-1-t]},`+i;t.push(i)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?`outShape`:this.outputShape[0]}`;let t=``;for(let n=this.rank-2;n<this.rank;n++)t+=`${e[n]} >= ${this.enableShapeUniforms?`outShape[${n}]`:this.outputShape[n]}`,n<this.rank-1&&(t+=`||`);return t}getSetup(e){if(this.rank===1)return``;let t=e.slice(-2),n=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${n};
      bool rEdge = rp1 >= ${r};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?`outShape`:this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}},EU=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`inputShape`,type:`ivec3`}],this.outputShape=e,this.enableShapeUniforms=YV(this.outputShape.length);let n=``;for(let e=0;e<4;e++){let t=`thisRC = rc;`;e%2==1&&(t+=`thisRC.z += 1;`),e>1&&(t+=`thisRC.y += 1;`),n+=`
        ${t}
        ${e>0?`if(thisRC.y < rows && thisRC.z < cols){`:``}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${e}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${e>0?`}`:``}
      `}this.userCode=`
      ${DU(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?XB():YB(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?`outShape[1]`:e[1]};
        int cols = ${this.enableShapeUniforms?`outShape[2]`:e[2]};

        ${n}

        setOutput(result);
      }
    `}};function DU(e,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?JB([`r`,`c`,`d`],`inputShape`):GB([`r`,`c`,`d`],e)}
      return ivec3(r, c, d);
    }
  `}var OU=class{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,n){let r=NU(t,n),i=PU(e,r,n);i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]);let a=AU(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,n);if(this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=a,this.log();let e=this.freeTextures[i].pop();return this.usedTextures[i].push(e),e}let o;return r===Uz.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):r===Uz.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):r===Uz.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===Uz.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===Uz.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[i].push(o),this.numUsedTextures++,this._numBytesAllocated+=a,this.log(),o}releaseTexture(e,t,n,r){if(this.freeTextures==null)return;let i=NU(n,r),a=PU(t,i,r);a in this.freeTextures||(this.freeTextures[a]=[]);let o=AU(t,i,this.gpgpu.gl,this.gpgpu.textureConfig,r),s=j().getNumber(`WEBGL_DELETE_TEXTURE_THRESHOLD`);s!==-1&&this._numBytesAllocated>s?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=o):(this.freeTextures[a].push(e),this.numFreeTextures++,this._numBytesFree+=o),this.numUsedTextures--;let c=this.usedTextures[a],l=c&&c.indexOf(e);if(l==null||l<0)throw Error(`Cannot release a texture that was never provided by this texture manager`);c[l]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log(`Free/Used`,`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let e in this.freeTextures)this.freeTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(let e in this.usedTextures)this.usedTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function kU(e,t){let n=e;if(t===n.R32F)return 4;if(t===n.R16F)return 2;if(t===n.RGBA32F||t===e.RGBA)return 16;if(t===n.RGBA16F)return 8;if(t===n.RGBA8)return 4;throw Error(`Unknown internal format ${t}`)}function AU(e,t,n,r,i){let a=jU(t,r),o;if(i){let[t,n]=qz(e[0],e[1]);o=t*n}else{let[t,n]=Wz(e[0],e[1]);o=t*n}let s=kU(n,a);return o*s}function jU(e,t){switch(e){case Uz.PACKED_2X2_FLOAT32:return pH(t);case Uz.PACKED_2X2_FLOAT16:return hH(t);case Uz.UNPACKED_FLOAT32:return sH(t);case Uz.UNPACKED_FLOAT16:return lH(t);case Uz.PACKED_4X1_UNSIGNED_BYTE:return dH(t);default:throw Error(`Unknown physical texture type ${e}`)}}function MU(e){return j().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?e?Uz.PACKED_2X2_FLOAT32:Uz.UNPACKED_FLOAT32:e?Uz.PACKED_2X2_FLOAT16:Uz.UNPACKED_FLOAT16}function NU(e,t){if(e===Hz.UPLOAD)return Uz.PACKED_2X2_FLOAT32;if(e===Hz.RENDER||e==null)return MU(t);if(e===Hz.DOWNLOAD||e===Hz.PIXELS)return Uz.PACKED_4X1_UNSIGNED_BYTE;throw Error(`Unknown logical texture type ${e}`)}function PU(e,t,n){return`${e[0]}_${e[1]}_${t}_${n}`}var FU=class{constructor(e,t){this.variableNames=[`A`],this.outputShape=e,this.enableShapeUniforms=YV(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},IU=`if (isnan(x)) return x;`,LU=`return x;`,RU=`return abs(x);`,zU=`return (x >= 0.0) ? x : (exp(x) - 1.0);`,BU=IU+`
  return (x < 0.0) ? 0.0 : x;
`,VU=IU+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,HU=`return x;`,UU=`return 1.0 / (1.0 + exp(-1.0 * x));`,WU=`return x;`,GU=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,KU=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,qU=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,JU=`return 1.0 / (1.0 + exp(-1.0 * x));`,YU=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=YV(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}},XU=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=YV(this.outputShape.length);let t=e.length,n=CU(`rc`,t),r=BV(t),i=wU(t,n),a=n.slice(-2),o=t<=1?`rc`:`vec2(${a.join(`,`)})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${i});

        setOutput(getChannel(packedInput, ${o}));
      }
    `}},ZU=ay,QU=1e-7,$U=1e-4,eW={};function tW(e){return e in eW||(eW[e]={}),eW[e]}var nW=j().getNumber(`CPU_HANDOFF_SIZE_THRESHOLD`),rW=600;function iW(){return j().global.screen==null?1024:j().global.screen.height*j().global.screen.width*window.devicePixelRatio*rW/1024/1024}var aW=class e extends io{nextDataId(){return e.nextDataId++}constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!j().getBool(`HAS_WEBGL`))throw Error(`WebGL is not supported on this device`);let t;e==null?(t=new TH(Rz(j().getNumber(`WEBGL_VERSION`))),this.binaryCache=tW(j().getNumber(`WEBGL_VERSION`)),this.gpgpuCreatedLocally=!0):(t=e instanceof TH?e:new TH(Rz(j().getNumber(`WEBGL_VERSION`),e)),this.binaryCache={},this.gpgpuCreatedLocally=!1),this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new OU(this.gpgpu),this.numMBBeforeWarning=iW(),this.texData=new ro(this,Id())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,t,n,r,i,a){let o=this.makeTensorInfo(t,n),s=this.texData.get(o.dataId);s.isPacked=!1,s.texture={texture:e,texShape:[r,i]},s.texShape=[r,i];let c=new tH(DB(t),!1,a),l=this.runWebGLProgram(c,[o],n,[[r,i]]);return l.shape=t,s.texture=null,this.disposeIntermediateTensorInfo(o),l.dataId}write(e,t,n){if((j().getBool(`WEBGL_CHECK_NUMERICAL_PROBLEMS`)||j().getBool(`DEBUG`))&&this.checkNumericalProblems(e),n===`complex64`&&e!=null)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);let r={id:this.nextDataId()};return this.texData.set(r,{shape:t,dtype:n,values:e,usage:Hz.UPLOAD,refCount:1}),r}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){let t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){let t=this.texData.get(e);t.refCount--}}move(e,t,n,r,i){if(j().getBool(`DEBUG`)&&this.checkNumericalProblems(t),r===`complex64`)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);this.texData.set(e,{shape:n,dtype:r,values:t,usage:Hz.UPLOAD,refCount:i})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){let{values:t,dtype:n,complexTensorInfos:r,slice:i,shape:a,isPacked:o}=this.texData.get(e);if(i!=null){let t;t=o?new YU(a,HU):new FU(a,HU);let r=this.runWebGLProgram(t,[{dataId:e,shape:a,dtype:n}],n),i=this.readSync(r.dataId);return this.disposeIntermediateTensorInfo(r),i}if(t!=null)return this.convertAndCacheOnCPU(e);if(n===`string`)return t;let s=this.activeTimers!=null,c;s&&(c=Du());let l;return l=n===`complex64`?Ax(this.readSync(r.real.dataId),this.readSync(r.imag.dataId)):this.getValuesFromTexture(e),s&&(this.downloadWaitMs+=Du()-c),this.convertAndCacheOnCPU(e,l)}async read(e){if(this.pendingRead.has(e)){let t=this.pendingRead.get(e);return new Promise(e=>t.push(e))}let{values:t,shape:n,slice:r,dtype:i,complexTensorInfos:a,isPacked:o}=this.texData.get(e);if(r!=null){let t;t=o?new YU(n,HU):new FU(n,HU);let r=this.runWebGLProgram(t,[{dataId:e,shape:n,dtype:i}],i),a=this.read(r.dataId);return this.disposeIntermediateTensorInfo(r),a}if(t!=null)return this.convertAndCacheOnCPU(e);if(j().getBool(`DEBUG`)&&!j().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)&&j().getNumber(`WEBGL_VERSION`)===2)throw Error(`tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.`);let s=null,c;if(i!==`complex64`&&j().get(`WEBGL_BUFFER_SUPPORTED`)){c=this.decode(e);let t=this.texData.get(c.dataId);s=this.gpgpu.createBufferFromTexture(t.texture.texture,...Kz(n))}this.pendingRead.set(e,[]),i!==`complex64`&&await this.gpgpu.createAndWaitForFence();let l;if(i===`complex64`){let e=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),t=e[0],n=e[1];l=Ax(t,n)}else if(s==null)l=this.getValuesFromTexture(e);else{let e=k(n);l=this.gpgpu.downloadFloat32MatrixFromBuffer(s,e)}if(c!=null&&this.disposeIntermediateTensorInfo(c),s!=null){let e=this.gpgpu.gl;Z(e,()=>e.deleteBuffer(s))}let u=this.convertAndCacheOnCPU(e,l),d=this.pendingRead.get(e);return this.pendingRead.delete(e),d.forEach(e=>e(u)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&Id().removeDataId(e,this),this.pendingDeletes--),u}readToGPU(e,t={}){let{values:n,shape:r,slice:i,dtype:a,isPacked:o,texture:s}=this.texData.get(e);if(a===`complex64`)throw Error(`Does not support reading texture for complex64 dtype.`);if(i!=null){let n;n=o?new YU(r,HU):new FU(r,HU);let i=this.runWebGLProgram(n,[{dataId:e,shape:r,dtype:a}],a),s=this.readToGPU(i,t);return this.disposeIntermediateTensorInfo(i),s}if(s==null)throw Error(n==null?`There is no data on GPU or CPU.`:`Data is not on GPU but on CPU.`);let c=this.decode(e,t.customTexShape),l=Id().makeTensorFromTensorInfo(c),u=this.texData.get(c.dataId);return Object.assign({tensorRef:l},u.texture)}bufferSync(e){let t=this.readSync(e.dataId);if(e.dtype===`string`)try{let n=t.map(e=>ku(e));return Mf(e.shape,e.dtype,n)}catch{throw Error(`Failed to decode encoded string bytes into utf-8`)}return Mf(e.shape,e.dtype,t)}checkNumericalProblems(e){if(e!=null)for(let t=0;t<e.length;t++){let n=e[t];if(!$z(n))throw j().getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)?Error(`The value ${n} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${n} cannot be represented on this device.`)}}getValuesFromTexture(e){let{shape:t,dtype:n,isPacked:r}=this.texData.get(e),i=k(t);if(j().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)){let n=this.decode(e),r=this.texData.get(n.dataId),a=this.gpgpu.downloadMatrixFromPackedTexture(r.texture.texture,...Kz(t)).subarray(0,i);return this.disposeIntermediateTensorInfo(n),a}let a=j().getBool(`WEBGL_PACK`)&&r===!0,o=a?DB(t):t,s=a?new $V(o):new QV(o),c=this.runWebGLProgram(s,[{shape:o,dtype:n,dataId:e}],`float32`),l=this.texData.get(c.dataId),u=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(l.texture.texture,l.texShape[0],l.texShape[1]).subarray(0,i);return this.disposeIntermediateTensorInfo(c),u}timerAvailable(){return j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0}time(e){let t=this.activeTimers,n=[],r=!1;this.programTimersStack==null?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e();let i=ju(this.activeTimers.map(e=>e.query)).filter(e=>e!=null),a=ju(this.activeTimers.map(e=>e.name)).filter(e=>e!=null);this.activeTimers=t,r&&(this.programTimersStack=null);let o={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0){let e=await Promise.all(i);o.kernelMs=uo(e),o.getExtraProfileInfo=()=>e.map((e,t)=>({name:a[t],ms:e})).map(e=>`${e.name}: ${e.ms}`).join(`, `)}else o.kernelMs={error:`WebGL query timers are not supported in this environment.`};return this.uploadWaitMs=0,this.downloadWaitMs=0,o})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?this.gpgpu.beginQuery():{startMs:Du(),endMs:null}}endTimer(e){return j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?(this.gpgpu.endQuery(),e):(e.endMs=Du(),e)}async getQueryTime(e){if(j().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0)return this.gpgpu.waitForQueryAndGetTime(e);let t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);let{complexTensorInfos:n}=this.texData.get(e);return n!=null&&(this.disposeData(n.real.dataId,t),this.disposeData(n.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){let{texture:t,dtype:n,texShape:r,usage:i,isPacked:a,slice:o}=this.texData.get(e),s=o&&o.origDataId||e,c=this.dataRefCount.get(s);c>1?this.dataRefCount.set(s,c-1):(this.dataRefCount.delete(s),t!=null&&(this.numBytesInGPU-=this.computeBytes(r,n),this.textureManager.releaseTexture(t,r,i,a)));let l=this.texData.get(e);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=nW){return j().getBool(`WEBGL_CPU_FORWARD`)&&e.every(e=>this.texData.get(e.dataId).texture==null&&k(e.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){Yl(`tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead`);let t=e.dataSync();return ZU(e.shape,t)}packedUnaryOp(e,t,n){let r=new YU(e.shape,t),i=this.compileAndRun(r,[e],n);return Id().makeTensorFromTensorInfo(i)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!==`complex64`){let t=oU(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,t)}if(j().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,RU,e.dtype);let t=new FU(e.shape,RU),n=this.compileAndRun(t,[e]);return Id().makeTensorFromTensorInfo(n)}makeTensorInfo(e,t,n){let r;if(t===`string`&&n!=null&&n.length>0&&ko(n[0])){let i=n.map(e=>Ou(e));r=this.write(i,e,t)}else r=this.write(n,e,t);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:t}}makeOutput(e,t,n){return Id().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,n),this)}unpackTensor(e){let t=new XU(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){let t=new TU(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){let n=[TB(e.shape),...EB(e.shape)],r={dtype:e.dtype,shape:n,dataId:e.dataId},i=new EU([TB(t),...EB(t)],n),a=[n],o=this.runWebGLProgram(i,[r],e.dtype,a,!0);return{dataId:o.dataId,shape:t,dtype:o.dtype}}decode(e,t){let{isPacked:n,shape:r,dtype:i}=this.texData.get(e);t!=null&&O(k(r)<=t[0]*t[1]*4,()=>`customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.`);let a=DB(r),o;o=n?new ZV(a):new XV(a);let s=[t??Kz(a)];return{dtype:i,shape:r,dataId:this.runWebGLProgram(o,[{shape:a,dtype:i,dataId:e}],i,s,!0,t).dataId}}runWebGLProgram(e,t,n,r,i=!1,a){let o=this.makeTensorInfo(e.outputShape,n),s=this.texData.get(o.dataId);if(e.packedOutput&&(s.isPacked=!0),e.outPackingScheme===Vz.DENSE&&(s.texShape=(a??Kz(e.outputShape)).map(e=>e*2)),e.outTexUsage!=null&&(s.usage=e.outTexUsage),k(o.shape)===0)return s.values=So(o.dtype,0),o;let c=[],l=t.map(t=>{if(t.dtype===`complex64`)throw Error(`GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.`);let n=this.texData.get(t.dataId);if(n.texture==null){if(!e.packedInputs&&k(t.shape)<=j().getNumber(`WEBGL_SIZE_UPLOAD_UNIFORM`))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:n.values};e.packedInputs&&(n.isPacked=!0,n.shape=t.shape)}if(this.uploadToGPU(t.dataId),!!n.isPacked!=!!e.packedInputs)t=n.isPacked?this.unpackTensor(t):this.packTensor(t),c.push(t),n=this.texData.get(t.dataId);else if(n.isPacked&&!AB(n.shape,t.shape)){let e=t,r=t.shape;t.shape=n.shape,t=this.packedReshape(t,r),c.push(t),n=this.texData.get(t.dataId),e.shape=r}return{shape:t.shape,texData:n,isUniform:!1}});this.uploadToGPU(o.dataId);let u={shape:o.shape,texData:s,isUniform:!1},d=JV(e,l,u),f=this.getAndSaveBinary(d,()=>WV(this.gpgpu,e,l,u)),p=this.activeTimers!=null,m;p&&(m=this.startTimer()),j().get(`ENGINE_COMPILE_ONLY`)||qV(this.gpgpu,f,l,u,r),c.forEach(e=>this.disposeIntermediateTensorInfo(e)),p&&(m=this.endTimer(m),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(m)}));let h=j().getNumber(`WEBGL_FLUSH_THRESHOLD`);if(h>0){let e=Du();e-this.lastGlFlushTime>h&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=e)}if(!j().getBool(`WEBGL_LAZILY_UNPACK`)&&s.isPacked&&i===!1){let e=this.unpackTensor(o);return this.disposeIntermediateTensorInfo(o),e}return o}compileAndRun(e,t,n,r,i=!1){return n||=t[0].dtype,this.runWebGLProgram(e,t,n,r,i)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||=(j().getBool(`IS_TEST`)||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<`u`&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),!0)}floatPrecision(){return this.floatPrecisionValue??=I(()=>{if(!j().get(`WEBGL_RENDER_FLOAT32_ENABLED`)){let e=j().getBool(`DEBUG`);j().set(`DEBUG`,!1);let t=this.abs(Oh(1e-8)).dataSync()[0];if(j().set(`DEBUG`,e),t>0)return 32}return 16}),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?QU:$U}uploadToGPU(e){let t=this.texData.get(e),{shape:n,dtype:r,values:i,texture:a,usage:o,isPacked:s}=t;if(a!=null)return;let c=this.activeTimers!=null,l;c&&(l=Du());let u=t.texShape;if(u??(u=OB(n,s),t.texShape=u),i!=null){let e=DB(n),a,o=u[1],d=u[0],f=i instanceof Uint8Array||i instanceof Uint8ClampedArray;(s||!f)&&([o,d]=qz(u[0],u[1])),a=s?new nH(e,f):new tH(e,f);let p=f?[d,o]:u,m=this.makeTensorInfo(p,r),h=this.texData.get(m.dataId);h.usage=f?Hz.PIXELS:Hz.UPLOAD,h.texShape=p,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(m.dataId),o,d,i);let g=[[d,o]],_=this.runWebGLProgram(a,[m],r,g,!0),v=this.texData.get(_.dataId);t.texShape=v.texShape,t.isPacked=v.isPacked,t.usage=v.usage,j().get(`ENGINE_COMPILE_ONLY`)?this.disposeData(_.dataId):(t.texture=v.texture,t.values=null,this.texData.delete(_.dataId)),this.disposeIntermediateTensorInfo(m),c&&(this.uploadWaitMs+=Du()-l)}else t.texture=this.acquireTexture(u,o,r,s)}convertAndCacheOnCPU(e,t){let n=this.texData.get(e),{dtype:r}=n;return t!=null&&(n.values=oW(t,r)),n.values}acquireTexture(e,t,n,r){if(this.numBytesInGPU+=this.computeBytes(e,n),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let e=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${e} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,r)}computeBytes(e,t){return e[0]*e[1]*Do(t)}checkCompileCompletion(){for(let[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){let e=[];if(this.gpgpu.parallelCompilationExtension){for(let[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}for(let[,t]of Object.entries(this.binaryCache)){let n=new Promise(e=>{try{this.checkCompletion_(t),e(!0)}catch(e){throw e}});e.push(n)}return Promise.all(e)}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await sx(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(aB(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),Error(`Failed to compile fragment shader.`)):Error(`Failed to link vertex and fragment shaders.`);return!0}getUniformLocations(){for(let e of Object.values(this.binaryCache)){this.gpgpu.buildVao(e.webGLProgram);let{variablesLocations:t,customUniformLocations:n,infLoc:r,nanLoc:i,outShapeLocation:a,outShapeStridesLocation:o,outTexShapeLocation:s}=GV(this.gpgpu,e.program,e.webGLProgram);e.variablesLocations=t,e.customUniformLocations=n,e.infLoc=r,e.nanLoc=i,e.outShapeLocation=a,e.outShapeStridesLocation=o,e.outTexShapeLocation=s}}createTensorFromGPUData(e,t,n){e.channels=e.channels||`RGBA`;let{texture:r,height:i,width:a,channels:o}=e,s=Id().backend;if(!s.gpgpu.gl.isTexture(r))throw Error(`The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.`);let c=s.writeTexture(r,t,n,i,a,o);return Id().makeTensorFromDataId(c,t,n,s)}};aW.nextDataId=0;function oW(e,t){if(t===`float32`||t===`complex64`)return e;if(t===`int32`||t===`bool`){let n=t===`int32`?new Int32Array(e.length):new Uint8Array(e.length);for(let t=0;t<n.length;++t)n[t]=Math.round(e[t]);return n}throw Error(`Unknown dtype ${t}`)}Cd()&&zd(`webgl`,()=>new aW,2);var sW=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`,cW=class{constructor(e,t,n){this.variableNames=[`A`,`B`],this.outputShape=U(t,n),this.enableShapeUniforms=YV(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}},lW=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`,uW=class{constructor(e,t,n,r=!1){this.variableNames=[`A`,`B`],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=U(t,n);let i=this.outputShape.length;this.enableShapeUniforms=YV(i);let a=``;if(r){if(i===0||k(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          ${BV(i)} coords = getOutputCoords();
        `,i===1)this.enableShapeUniforms?a+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:a+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let e=CU(`coords`,i);this.enableShapeUniforms?a+=`
            bool nextRowOutOfBounds =
              (${e[i-2]} + 1) >= outShape[${i} - 2];
            bool nextColOutOfBounds =
              (${e[i-1]} + 1) >= outShape[${i} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:a+=`
            bool nextRowOutOfBounds =
              (${e[i-2]} + 1) >= ${this.outputShape[i-2]};
            bool nextColOutOfBounds =
              (${e[i-1]} + 1) >= ${this.outputShape[i-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${a}

        setOutput(result);
      }
    `}};function dW(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}var fW={kernelName:lc,backendName:`webgl`,kernelFunc:dW};function pW(e){let{inputs:t,backend:n}=e,{real:r,imag:i}=t,a=n.makeTensorInfo(r.shape,`complex64`),o=n.texData.get(a.dataId);return o.complexTensorInfos={real:dW({inputs:{x:r},backend:n}),imag:dW({inputs:{x:i},backend:n})},a}var mW={kernelName:Ts,backendName:`webgl`,kernelFunc:pW},hW=`return (a < 0.) ? b * a : a;`,gW=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function _W(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{alpha:a}=r,o=n.makeTensorInfo([],`float32`,wu(a,`float32`)),s=j().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new uW(gW,i.shape,o.shape):new cW(hW,i.shape,o.shape),c=n.runWebGLProgram(s,[i,o],`float32`);return n.disposeIntermediateTensorInfo(o),c}var vW={kernelName:hc,backendName:`webgl`,kernelFunc:_W},yW=`return (a < 0.) ? b * a : a;`,bW=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function xW(e){let{inputs:t,backend:n}=e,{x:r,alpha:i}=t,a=j().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new uW(bW,r.shape,i.shape):new cW(yW,r.shape,i.shape);return n.runWebGLProgram(a,[r,i],`float32`)}var SW={kernelName:Wc,backendName:`webgl`,kernelFunc:xW},CW=`if (isnan(x)) return x;`;function wW({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:n,dtype:r}){return({inputs:i,backend:a})=>{let{x:o}=i,s=a,c=r||o.dtype;if(s.shouldExecuteOnCPU([o])&&n!=null){let e=n(s.texData.get(o.dataId).values,c);return s.makeTensorInfo(o.shape,c,e)}let l=j().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)&&t!=null,u;return u=l?new YU(o.shape,t):new FU(o.shape,e),s.runWebGLProgram(u,[o],c)}}function TW({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:n=!1,supportsComplex:r=!1,cpuKernelImpl:i,dtype:a}){return({inputs:o,backend:s})=>{let{a:c,b:l}=o,u=s;if(r&&c.dtype===`complex64`){let t=u.texData.get(c.dataId),n=u.texData.get(l.dataId),[r,i]=[[t.complexTensorInfos.real,n.complexTensorInfos.real],[t.complexTensorInfos.imag,n.complexTensorInfos.imag]].map(t=>{let[n,r]=t,i={dataId:n.dataId,dtype:n.dtype,shape:c.shape},a={dataId:r.dataId,dtype:r.dtype,shape:l.shape},o=new cW(e,c.shape,l.shape);return u.runWebGLProgram(o,[i,a],ad(n.dtype,r.dtype))}),a=pW({inputs:{real:r,imag:i},backend:u});return u.disposeIntermediateTensorInfo(r),u.disposeIntermediateTensorInfo(i),a}let d=a||ad(c.dtype,l.dtype);if((c.dtype===`string`||l.dtype===`string`||u.shouldExecuteOnCPU([c,l]))&&i!=null){let e=u.texData.get(c.dataId).values,t=u.texData.get(l.dataId).values,n=c.dtype===`string`?fS(e):e,r=c.dtype===`string`?fS(t):t,[a,o]=i(c.shape,l.shape,n,r,d),s=u.makeTensorInfo(o,d),f=u.texData.get(s.dataId);return f.values=a,s}let f=j().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)&&t!=null,p;return p=f?new uW(t,c.shape,l.shape,n):new cW(e,c.shape,l.shape),u.runWebGLProgram(p,[c,l],d)}}function EW(e,t=!1){if(e===`linear`)return t?WU:LU;if(e===`relu`)return t?KU:BU;if(e===`elu`)return t?GU:zU;if(e===`relu6`)return t?qU:VU;if(e===`prelu`)return t?bW:yW;if(e===`leakyrelu`)return t?gW:hW;if(e===`sigmoid`)return t?JU:UU;throw Error(`Activation ${e} has not been implemented for the WebGL backend.`)}var DW=class{constructor(e,t,n,r=!1,i=!1,a=!1,o=null,s=!1,c=!1){this.variableNames=[`matrixA`,`matrixB`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.enableShapeUniforms=YV(this.outputShape.length);let l=r?e[1]:e[2],u=Math.ceil(l/2),d=r?`i * 2, rc.y`:`rc.y, i * 2`,f=i?`rc.z, i * 2`:`i * 2, rc.z`,p=r?[`a.xxyy`,`a.zzww`]:[`a.xxzz`,`a.yyww`],m=i?[`b.xzxz`,`b.ywyw`]:[`b.xyxy`,`b.zwzw`],h=``,g=``;o&&(h=s?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:c?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:`vec4 activation(vec4 x) {
          ${o}
        }`,g=`result = activation(result);`);let _=a?`result += getBiasAtOutCoords();`:``;a&&this.variableNames.push(`bias`),s&&this.variableNames.push(`preluActivationWeights`),c&&this.variableNames.push(`leakyreluAlpha`);let v=`rc.x`,y=`rc.x`;e[0]<t[0]?v=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(y=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${h}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${u}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${v};
        int batchB = ${y};
        for (int i = 0; i < ${u}; i++) {
          vec4 a = getMatrixA(batchA, ${d});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${m[0]});
          result += (${p[1]} * ${m[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${_}

        ${g}

        setOutput(result);
      }
    `}},OW={REAL:`return areal * breal - aimag * bimag;`,IMAG:`return areal * bimag + aimag * breal;`},kW=class{constructor(e,t,n){this.variableNames=[`AReal`,`AImag`,`BReal`,`BImag`],this.outputShape=U(t,n),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}},AW=`return a * b;`;function jW(e){let{inputs:t,backend:n}=e,{a:r,b:i}=t,a=ad(r.dtype,i.dtype);if(r.dtype===`complex64`){let e=n.texData.get(r.dataId),t=n.texData.get(i.dataId),a=new kW(OW.REAL,r.shape,i.shape),o=new kW(OW.IMAG,r.shape,i.shape),s=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:r.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:r.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:i.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:i.shape}],c=n.runWebGLProgram(a,s,`float32`),l=n.runWebGLProgram(o,s,`float32`),u=pW({inputs:{real:c,imag:l},backend:n});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),u}if(n.shouldExecuteOnCPU([r,i])){let e=n.texData.get(r.dataId),t=n.texData.get(i.dataId),[o,s]=YH(r.shape,i.shape,e.values,t.values,a),c=n.makeTensorInfo(s,a),l=n.texData.get(c.dataId);return l.values=o,c}let o;return o=j().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new uW(AW,r.shape,i.shape):new cW(AW,r.shape,i.shape),n.runWebGLProgram(o,[r,i],a)}var MW={kernelName:Fc,backendName:`webgl`,kernelFunc:jW};function NW(e,t,n){let r=[TB(e.shape),...EB(e.shape)],i={dtype:e.dtype,shape:r,dataId:e.dataId},a=new EU([TB(t),...EB(t)],r),o=[r],s=n.runWebGLProgram(a,[i],e.dtype,o,!0);return{dataId:s.dataId,shape:t,dtype:s.dtype}}function $(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{shape:a}=r,o=n,s=k(i.shape),c=yo(a,s),l=k(c);O(s===l,()=>`The new shape (${c}) has ${l} elements and the old shape (${i.shape}) has ${s} elements. The new shape and old shape must have the same number of elements.`);let u=o.texData.get(i.dataId);return u.isPacked&&!AB(i.shape,c)&&!(u.texture!==null&&AB(u.shape,c))?NW(i,c,o):(o.incRef(i.dataId),{dataId:i.dataId,shape:c,dtype:i.dtype})}var PW={kernelName:$c,backendName:`webgl`,kernelFunc:$},FW=class{constructor(e,t){this.variableNames=[`x`];let{windowSize:n,batchSize:r,inSize:i,outSize:a}=e;this.outputShape=[r,a];let o=Math.floor(n/4)*4,s=n%4,c=`sumValue += dot(values, ones);`;if(t!=null){let e=1/t;c=`sumValue += dot(values * ${ho(e)?e.toPrecision(2):e}, ones);`}let l=``;i%n>0&&(l=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${l}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        float sumValue = 0.0;

        for (int i = 0; i < ${o}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${o};
        if (${s===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${s===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${s===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}},IW=class{constructor(e,t){this.variableNames=[`x`];let{windowSize:n,batchSize:r,inSize:i,outSize:a}=e;this.outputShape=[r,a];let o=`0.0`,s=``;t===`prod`?o=`1.0`:t===`min`?(o=`1.0 / 1e-20`,s=`min`):t===`max`&&(o=`-1.0 / 1e-20`,s=`max`);let c=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`sum`?c=`sumValue`:t===`prod`?c=`prodValue`:t===`all`?c=`allValue`:t===`any`&&(c=`anyValue`);let l=Math.floor(n/4)*4,u=n%4,d=`
      if (${t===`sum`}) {
        sumValue += dot(values, ones);
      } else if (${t===`prod`}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${s}(values, minMaxValue);
        if (${t===`min`} || ${t===`max`}) {
          minMaxValue = ${s}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f=`vec4`;t===`all`?(o=`1.0`,d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f=`bvec4`):t===`any`&&(o=`0.0`,d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f=`bvec4`);let p=``;i%n>0&&(p=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${o};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        vec4 minMaxValue = vec4(${o});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${l}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${l};
        if (${u===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${u===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${u===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${c});
      }
    `}};function LW(e){let t=[];for(;t.length===0||t[t.length-1].outSize!==1;){let n=t.length?t[t.length-1].outSize:e[1],r=hx(n);t.push({inSize:n,windowSize:r,outSize:Math.ceil(n/r)})}return t}function RW(e,t,n,r){let i=LW(e.shape),a=e;for(let o=0;o<i.length;o++){let{inSize:s,windowSize:c,outSize:l}=i[o],u,d;u=n===`mean`?o===0?new FW({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l},s):new FW({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l}):new IW({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l},n),d=a,a=r.runWebGLProgram(u,[a],t),d.dataId!==e.dataId&&r.disposeIntermediateTensorInfo(d)}return a}var zW=class{constructor(e,t){this.variableNames=[`A`];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;let r=BV(this.rank),i=BW(t);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${i}));
    }
    `}};function BW(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`,`resRC.v`],r=Array(t);for(let t=0;t<e.length;t++)r[e[t]]=n[t];return r.join()}var VW=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0;let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let r=BV(this.rank),i=SU(`rc`,this.rank),a=Array(this.rank);for(let e=0;e<t.length;e++)a[t[e]]=i[e];let o=`vec2(${a.slice(-2).join()})`,s=`++${i[this.rank-1]} < ${n[this.rank-1]}`,c=`getChannel(getA(${a.join()}), ${o})`;this.userCode=`
    void main() {
      ${r} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${s}) {
        result[1] = ${c};
      }
      --${i[this.rank-1]};
      if(++${i[this.rank-2]} < ${n[this.rank-2]}) {
        result[2] = ${c};
        if(${s}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}};function HW(e,t,n){let r=j().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new VW(e.shape,t):new zW(e.shape,t);return n.runWebGLProgram(r,[e],e.dtype)}function UW(e,t,n,r){let i=t,a=e.shape.length,o=bo(i,e.shape),s=o,c=yh(s,a),l=c!=null,u=e;l&&(u=HW(e,c,r),s=xh(s.length,a)),vh(`sum`,s,a);let[d,f]=gh(u.shape,s),p=d;n&&(p=_h(d,o));let m=k(f),h=k(e.shape)/m,g=$({inputs:{x:u},attrs:{shape:[h,m]},backend:r}),_=RW(g,od(e.dtype),`sum`,r),v=$({inputs:{x:_},attrs:{shape:p},backend:r});return r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(_),l&&r.disposeIntermediateTensorInfo(u),v}function WW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;return UW(i,a,o,n)}var GW={kernelName:`Sum`,backendName:`webgl`,kernelFunc:WW};function KW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{perm:a}=r,o=n,s=i.shape.length,c=Array(s);for(let e=0;e<c.length;e++)c[e]=i.shape[a[e]];let l;if(o.shouldExecuteOnCPU([i])){let e=o.texData.get(i.dataId).values,t=bU(e,i.shape,i.dtype,a,c);l=o.makeTensorInfo(c,i.dtype);let n=o.texData.get(l.dataId);n.values=t}else l=HW(i,a,o);return l}var qW={kernelName:Rl,backendName:`webgl`,kernelFunc:KW};function JW({a:e,b:t,transposeA:n,transposeB:r,backend:i,bias:a=null,preluActivationWeights:o=null,leakyreluAlpha:s=0,activation:c=null}){let l=e.shape.length,u=t.shape.length,d=n?e.shape[l-2]:e.shape[l-1],f=r?t.shape[u-1]:t.shape[u-2],p=n?e.shape[l-1]:e.shape[l-2],m=r?t.shape[u-2]:t.shape[u-1],h=e.shape.slice(0,-2),g=t.shape.slice(0,-2),_=k(h),v=k(g),y=U(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([p,m]);O(d===f,()=>`Error in matMul: inner shapes (${d}) and (${f}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${r} must match.`);let b=n?[_,d,p]:[_,p,d],x=r?[v,m,f]:[v,f,m],S=$({inputs:{x:e},backend:i,attrs:{shape:b}}),C=$({inputs:{x:t},backend:i,attrs:{shape:x}}),w=[S,C],T=Math.max(_,v),E=n?S.shape[1]:S.shape[2],D=a!=null,ee=o!=null,te=c===`leakyrelu`,ne=c==null?null:EW(c,!0),re=D||ee||te||ne!=null,ie;if((p===1||m===1)&&E>1e3&&re===!1){let e=S,t=C;n&&(e=KW({inputs:{x:S},backend:i,attrs:{perm:[0,2,1]}}),w.push(e)),r&&(t=KW({inputs:{x:C},backend:i,attrs:{perm:[0,2,1]}}),w.push(t));let a=m!==1,o=m===1,s=e;a&&(s=$({inputs:{x:e},backend:i,attrs:{shape:[T,E,1]}}),w.push(s));let c=m===1?2:1,l=t;o&&(l=$({inputs:{x:t},backend:i,attrs:{shape:[T,1,E]}}),w.push(l));let u=jW({inputs:{a:s,b:l},backend:i});ie=WW({inputs:{x:u},backend:i,attrs:{axis:c,keepDims:!0}}),w.push(u)}else{let c=ad(e.dtype,t.dtype),l=new DW(b,x,[T,p,m],n,r,D,ne,ee,te),u=[S,C];if(a!=null&&u.push(a),ee&&u.push(o),te){let e=i.makeTensorInfo([],`float32`,wu(s,`float32`));u.push(e),w.push(e)}ie=i.runWebGLProgram(l,u,c)}let ae=$({inputs:{x:ie},backend:i,attrs:{shape:y}});w.push(ie);for(let e of w)i.disposeIntermediateTensorInfo(e);return ae}function YW(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a,bias:o,preluActivationWeights:s}=t,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=r;return JW({a:i,b:a,transposeA:c,transposeB:l,backend:n,bias:o,preluActivationWeights:s,leakyreluAlpha:d,activation:u})}var XW={kernelName:Kl,backendName:`webgl`,kernelFunc:YW},ZW=`return abs(x);`;function QW(e){let{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])&&r.dtype!==`complex64`){let e=oU(n.texData.get(r.dataId).values);return n.makeTensorInfo(r.shape,r.dtype,e)}let i;return i=j().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)?new YU(r.shape,ZW):new FU(r.shape,ZW),n.runWebGLProgram(i,[r],r.dtype)}var $W={kernelName:`Abs`,backendName:`webgl`,kernelFunc:QW},eG={kernelName:ns,backendName:`webgl`,kernelFunc:wW({opSnippet:IU+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`})},tG={kernelName:rs,backendName:`webgl`,kernelFunc:wW({opSnippet:IU+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`})},nG=`return a + b;`,rG={kernelName:`Add`,backendName:`webgl`,kernelFunc:TW({opSnippet:nG,packedOpSnippet:nG,supportsComplex:!0,cpuKernelImpl:DH})},iG=class{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`float v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(` + `);this.userCode=`
      void main() {
        ${n.join(`
        `)}

        float result = ${r};
        setOutput(result);
      }
    `}},aG=class{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`vec4 v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(` + `);this.userCode=`
      void main() {
        ${n.join(`
        `)}

        vec4 result = ${r};
        setOutput(result);
      }
    `}};function oG(e){let{inputs:t,backend:n}=e,r=t;if(r.length===1)return dW({inputs:{x:r[0]},backend:n});if(r.length>j().getNumber(`WEBGL_MAX_TEXTURES_IN_SHADER`)){let e=Math.floor(r.length/2);return oG({inputs:[oG({inputs:r.slice(0,e),backend:n}),oG({inputs:r.slice(e),backend:n})],backend:n})}let i=r.map(e=>e.dtype).reduce((e,t)=>ad(e,t)),a=r.map(e=>e.shape),o=j().getBool(`WEBGL_PACK`)?new aG(r[0].shape,a):new iG(r[0].shape,a);return n.runWebGLProgram(o,r,i)}var sG={kernelName:is,backendName:`webgl`,kernelFunc:oG};function cG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=bo(a,i.shape),l=c,u=yh(l,s),d=i;u!=null&&(d=KW({inputs:{x:i},backend:n,attrs:{perm:u}}),l=xh(l.length,s)),vh(`all`,l,s);let[f,p]=gh(d.shape,l),m=k(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=RW(h,h.dtype,`all`,n),_;if(o){let e=_h(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var lG={kernelName:`All`,backendName:`webgl`,kernelFunc:cG};function uG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=bo(a,i.shape),l=c,u=yh(l,s),d=i;u!=null&&(d=KW({inputs:{x:i},backend:n,attrs:{perm:u}}),l=xh(l.length,s)),vh(`any`,l,s);let[f,p]=gh(d.shape,l),m=k(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=RW(h,h.dtype,`any`,n),_;if(o){let e=_h(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var dG={kernelName:`Any`,backendName:`webgl`,kernelFunc:uG},fG=class{constructor(e,t,n){this.variableNames=[`A`];let{windowSize:r,batchSize:i,outSize:a}=e;n||this.variableNames.push(`bestIndicesA`),this.outputShape=[i,a];let o=t===`max`?`>`:`<`,s=n?`inOffset + i;`:`round(getBestIndicesA(batch, inOffset + i));`;this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${s};
          float candidate = getA(batch, inIdx);
          if (candidate ${o} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}},pG=class{constructor(e,t,n,r){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,O(e.length>2,()=>`Packed arg${n.charAt(0).toUpperCase()+n.slice(1)} supports only inputs with rank above 2.`);let i=e[e.length-1],a=Math.ceil(i/t);this.outputShape=e.slice(0,-1),a>1&&this.outputShape.push(a),r||this.variableNames.push(`bestIndicesA`);let o=this.outputShape,s=o.length,c=BV(s),l=CU(`coords`,s),u,d;if(a===1){d=s+1;let e=BV(d);u=`
        ${e} sourceLocR = ${e}(${l.join()}, 0);
        ++${l[s-1]};
        ${e} sourceLocG = ${e}(${l.join()}, 0);
        ++${l[s-2]};
        ${e} sourceLocA = ${e}(${l.join()}, 0);
        --${l[s-1]};
        ${e} sourceLocB = ${e}(${l.join()}, 0);
        --${l[s-2]};`}else d=s,u=`
        ${c} sourceLocR = coords;
        ++${l[s-1]};
        ${c} sourceLocG = coords;
        ++${l[s-2]};
        ${c} sourceLocA = coords;
        --${l[s-1]};
        ${c} sourceLocB = coords;
        --${l[s-2]};`;let f=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,d),p=`.`+f[d-1],m=f.map(e=>`int `+e),h=CU(`sourceLocR`,d-1).concat(`inIdx.r`),g=CU(`sourceLocG`,d-1).concat(`inIdx.g`),_=CU(`sourceLocB`,d-1).concat(`inIdx.b`),v=CU(`sourceLocA`,d-1).concat(`inIdx.a`),y=n===`max`?`greaterThan`:`lessThan`,b=r?``:`
          inIdx = round(vec4(getBestIndicesAChannel(${h.join()}),
                             getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${_.join()}),
                             getBestIndicesAChannel(${v.join()})));`,x=`vec4(
            getAChannel(${h.join()}),
            hasNextCol ? getAChannel(${g.join()}) : 0.,
            hasNextRow ? getAChannel(${_.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${v.join()}) : 0.)`,S=r?``:`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${S}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${l[s-1]} < ${o[s-1]-1};
        bool hasNextRow = ${l[s-2]} < ${o[s-2]-1};
        ${u}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${x};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${b}
          vec4 candidate = ${x};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${y}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}};function mG(e,t,n,r=null){let i=t.shape[0],a=t.shape[1];r!=null&&(i=r.shape[0],a=r.shape[1]);let o=hx(a),s=new fG({windowSize:o,inSize:a,batchSize:i,outSize:Math.ceil(a/o)},n,r==null),c=[t];r!=null&&c.push(r);let l=e.runWebGLProgram(s,c,`int32`);if(l.shape[1]===1)return l;let u=mG(e,t,n,l);return e.disposeIntermediateTensorInfo(l),u}function hG(e,t,n,r=null){let i=r==null?t.shape:r.shape,a=i[i.length-1],o=new pG(i,hx(a),n,r==null),s=r==null?[t]:[t,r],c=e.runWebGLProgram(o,s,`int32`);if(c.shape.length===t.shape.length){let r=hG(e,t,n,c);return e.disposeIntermediateTensorInfo(c),r}return c}function gG(e,t,n,r){let i=[n];if(vh(`arg`+r.charAt(0).toUpperCase()+r.slice(1),i,t.shape.length),!j().getBool(`WEBGL_PACK_REDUCE`)||t.shape.length<=2){let n=[],a=e.texData.get(t.dataId),o=a!==null&&a.isPacked,s=t;o&&(s=e.unpackTensor(t),n.push(s));let[c,l]=gh(s.shape,i),u=k(l),d=$({inputs:{x:s},backend:e,attrs:{shape:[-1,u]}});n.push(d);let f=mG(e,d,r);n.push(f);let p=$({inputs:{x:f},backend:e,attrs:{shape:c}});return n.forEach(t=>e.disposeIntermediateTensorInfo(t)),p}return hG(e,t,r)}function _G(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r,o=bo(a,i.shape),s=yh(o,i.shape.length),c=i,l=[];s!=null&&(c=KW({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=xh(o.length,c.shape.length)),vh(`argMax`,[o[0]],c.shape.length);let u=gG(n,c,o[0],`max`);return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),u}var vG={kernelName:as,backendName:`webgl`,kernelFunc:_G};function yG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r,o=bo(a,i.shape),s=yh(o,i.shape.length),c=i,l=[];s!=null&&(c=KW({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=xh(o.length,c.shape.length)),vh(`argMin`,[o[0]],c.shape.length);let u=gG(n,c,o[0],`min`);return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),u}var bG={kernelName:os,backendName:`webgl`,kernelFunc:yG},xG={kernelName:ss,backendName:`webgl`,kernelFunc:wW({opSnippet:IU+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`})},SG={kernelName:cs,backendName:`webgl`,kernelFunc:wW({opSnippet:IU+`return log(x + sqrt(x * x + 1.0));`})},CG={kernelName:ls,backendName:`webgl`,kernelFunc:wW({opSnippet:IU+`
  return atan(x);
`})},wG={kernelName:ds,backendName:`webgl`,kernelFunc:TW({opSnippet:sW+`
  return atan(a, b);
`,packedOpSnippet:`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+lW+`
  return result;
`})},TG={kernelName:us,backendName:`webgl`,kernelFunc:wW({opSnippet:IU+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`})},EG=class{constructor(e,t,n,r=!1,i=!1){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);let a=e.filterWidth,o=e.strideHeight,s=e.strideWidth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterHeight,d=e.effectiveFilterWidth,f=e.padInfo.top,p=e.padInfo.left;this.outputShape=e.outShape;let m=t===`avg`,h=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,g=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`,_=`0.0`;if(m||(_=`-1.0 / 1e-20`),n){this.userCode=`
        const ivec2 strides = ivec2(${o}, ${s});
        const ivec2 pads = ivec2(${f}, ${p});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${u};
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${l}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${r?i?h:g:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let v=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(v=`avgValue / max(count, 1.0)`);let y=Math.floor(a/4)*4,b=a%4,x=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${o}, ${s});
      const ivec2 pads = ivec2(${f}, ${p});
      const float initializationValue = ${_};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${_});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${u};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${y}; wC += 4) {
            int xC = xCCorner + wC * ${l};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              getValue(batch, xR, xC + 3 * ${l}, d)
            );

            ${x}
          }

          int xC = xCCorner + ${y};
          if (${b===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${x}
          } else if (${b===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              initializationValue,
              initializationValue
            );

            ${x}
          } else if (${b===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              initializationValue
            );

            ${x}
          }
        }
        setOutput(${v});
      }
    `}},DG=class{constructor(e,t,n,r=!1,i=!1){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);let a=e.filterWidth,o=e.strideDepth,s=e.strideHeight,c=e.strideWidth,l=e.dilationDepth,u=e.dilationHeight,d=e.dilationWidth,f=e.effectiveFilterDepth,p=e.effectiveFilterHeight,m=e.effectiveFilterWidth,h=e.padInfo.front,g=e.padInfo.top,_=e.padInfo.left;this.outputShape=e.outShape;let v=t===`avg`,y=`0.0`;if(v||(y=`-1.0 / 1e-20`),n){this.userCode=`
        const ivec3 strides =
            ivec3(${o}, ${s}, ${c});
        const ivec3 pads = ivec3(${h}, ${g}, ${_});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${l}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${u}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${d}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${r?i?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${p} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let b=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(b=`avgValue / max(count, 1.0)`);let x=Math.floor(a/4)*4,S=a%4,C=`
      if (${v}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${o}, ${s}, ${c});
      const ivec3 pads = ivec3(${h}, ${g}, ${_});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${l}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${u}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${x}; wC += 4) {
              int xC = xCCorner + wC * ${d};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                getValue(batch, xD, xR, xC + 3 * ${d}, ch)
              );

              ${C}
            }

            int xC = xCCorner + ${x};
            if (${S===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${S===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${S===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${C}
            }
          }
        }
        setOutput(${b});
      }
    `}};function OG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;UB(i,`avgPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;O(Dp(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=pp(i.shape,a,o,1,s,c);if(l.filterWidth===1&&l.filterHeight===1&&mo(l.inShape,l.outShape))return dW({inputs:{x:i},backend:n});let u=new EG(l,`avg`,!1);return n.runWebGLProgram(u,[i],`float32`)}var kG={kernelName:fs,backendName:`webgl`,kernelFunc:OG};function AG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r,u=new DG(mp(i.shape,a,o,[1,1,1],s,c,l),`avg`,!1);return n.runWebGLProgram(u,[i],`float32`)}var jG={kernelName:ms,backendName:`webgl`,kernelFunc:AG},MG=class{constructor(e){this.variableNames=[`dy`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterHeight,c=e.effectiveFilterWidth,l=s-1-e.padInfo.top,u=c-1-e.padInfo.left,d=1/(t*n);this.userCode=`
      const ivec2 pads = ivec2(${l}, ${u});
      const float avgMultiplier = float(${d});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
            wR += ${a}) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${o}) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}},NG=class{constructor(e){this.variableNames=[`dy`],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterDepth,d=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=u-1-e.padInfo.front,m=d-1-e.padInfo.top,h=f-1-e.padInfo.left,g=1/(t*n*r);this.userCode=`
      const ivec3 pads = ivec3(${p}, ${m}, ${h});
      const float avgMultiplier = float(${g});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${u};
            wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${i}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${l}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function PG(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a,{filterSize:s,strides:c,pad:l,dimRoundingMode:u}=r,d=new NG(mp(o.shape,s,c,[1,1,1],l,u));return n.runWebGLProgram(d,[i],o.dtype)}var FG={kernelName:hs,backendName:`webgl`,kernelFunc:PG};function IG(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a;UB([i,a],`avgPoolGrad`);let{filterSize:s,strides:c,pad:l}=r,u=new MG(pp(o.shape,s,c,1,l));return n.runWebGLProgram(u,[i],o.dtype)}var LG={kernelName:ps,backendName:`webgl`,kernelFunc:IG};function RG(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a}=t,{transposeA:o,transposeB:s}=r;return JW({a:i,b:a,transposeA:o,transposeB:s,backend:n})}var zG={kernelName:gs,backendName:`webgl`,kernelFunc:RG},BG=class{constructor(e,t,n,r,i,a){this.outputShape=[],this.variableNames=[`x`,`mean`,`variance`],U(e,t),U(e,n);let o=`0.0`;r!=null&&(U(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);let s=`1.0`;i!=null&&(U(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${o};
        float scale = ${s};
        float inv = scale * inversesqrt(variance + float(${a}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}},VG=class{constructor(e,t,n,r,i,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=[`x`,`mean`,`variance`],U(e,t),U(e,n);let o=`vec4(0.0)`;r!=null&&(U(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);let s=`vec4(1.0)`;i!=null&&(U(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${o};
        vec4 scale = ${s};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${a}));

        setOutput((x - mean) * inv + offset);
      }
    `}},HG={kernelName:ic,backendName:`webgl`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,mean:i,variance:a,offset:o,scale:s}=e;O(i.shape.length===a.shape.length,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),O(o==null||i.shape.length===o.shape.length,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),O(s==null||i.shape.length===s.shape.length,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`);let{varianceEpsilon:c}=n;c??=.001;let l=[r,i,a],u=null;o!=null&&(u=o.shape,l.push(o));let d=null;s!=null&&(d=s.shape,l.push(s));let f=j().getBool(`WEBGL_PACK_NORMALIZATION`)?new VG(r.shape,i.shape,a.shape,u,d,c):new BG(r.shape,i.shape,a.shape,u,d,c);return t.runWebGLProgram(f,l,l[0].dtype)}},UG=class{constructor(e){this.variableNames=[`source`],this.outputShape=e,this.rank=e.length;let t=BV(this.rank);this.customUniforms=[{name:`start`,arrayIndex:this.rank,type:`int`}];let n=GG(this.rank),r;r=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${e.map((e,t)=>`sourceLoc.${WG[t]} = start[${t}] + coords.${WG[t]};`).join(`
`)}
      `,this.userCode=`
      void main() {
        ${r}
        setOutput(getSource(${n}));
      }
    `}},WG=[`x`,`y`,`z`,`w`,`u`,`v`];function GG(e){if(e===1)return`sourceLoc`;if(e<=6)return WG.slice(0,e).map(e=>`sourceLoc.`+e).join(`,`);throw Error(`Slicing for rank ${e} is not yet supported`)}var KG=class{constructor(e){this.variableNames=[`source`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:`start`,arrayIndex:this.rank,type:`int`}];let t=BV(this.rank),n=CU(`coords`,this.rank),r=CU(`sourceLoc`,this.rank),i=this.rank===1?`sourceLoc`:`vec2(${r.slice(-2).join()})`,a=`getChannel(getSource(${r.join()}), ${i})`,o=`
      result.x = ${a};
      if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${a};
        --${r[this.rank-1]};
      }
    `,s=this.rank===1?``:`
      --${n[this.rank-1]};
      if (++${n[this.rank-2]} < ${e[this.rank-2]}) {
        ++${r[this.rank-2]};
        result.z = ${a};
        if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
          ++${r[this.rank-1]};
          result.w = ${a};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((e,t)=>`start[${t}]`).join()});`:e.map((e,t)=>`${r[t]} = ${n[t]} + start[${t}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${o}
        ${s}
        setOutput(result);
      }
    `}};function qG(e,t,n,r){let i=r.texData.get(e.dataId),a=r.makeTensorInfo(n,e.dtype),o=r.texData.get(a.dataId);Object.assign(o,i),o.refCount=1,o.shape=n,o.dtype=e.dtype;let s=ex(t,A(e.shape));i.slice&&(s+=i.slice.flatOffset),o.slice={flatOffset:s,origDataId:i.slice&&i.slice.origDataId||e.dataId};let c=r.dataRefCount.get(o.slice.origDataId)||1;return r.dataRefCount.set(o.slice.origDataId,c+1),a}function JG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,size:o}=r,[s,c]=tx(i,a,o);if(Vb(i,s,c),k(c)===0)return n.makeTensorInfo(c,i.dtype,[]);if(n.shouldExecuteOnCPU([i])||i.dtype===`string`){let e=sU(n.texData.get(i.dataId).values,s,c,i.shape,i.dtype);return n.makeTensorInfo(c,i.dtype,e)}let{isPacked:l}=n.texData.get(i.dataId),u=$b(i.shape,s,c);if(l||!u){let e=j().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new KG(c):new UG(c),t=[s];return n.runWebGLProgram(e,[i],i.dtype,t)}return n.uploadToGPU(i.dataId),qG(i,s,c,n)}var YG={kernelName:pl,backendName:`webgl`,kernelFunc:JG},XG={kernelName:_s,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,crops:o}=r;O(i.shape.length<=4,()=>`batchToSpaceND for rank > 4 with a WebGL backend not implemented yet`);let s=a.reduce((e,t)=>e*t),c=_x(i.shape,a,s),l=vx(c.length,a.length),u=yx(i.shape,a,s),d=bx(o,a.length),f=xx(u,o,a.length),p=[],m=$({inputs:{x:i},backend:n,attrs:{shape:c}}),h=KW({inputs:{x:m},backend:n,attrs:{perm:l}}),g=$({inputs:{x:h},backend:n,attrs:{shape:u}}),_=JG({inputs:{x:g},backend:n,attrs:{begin:d,size:f}});return p.push(m),p.push(h),p.push(g),p.forEach(e=>n.disposeIntermediateTensorInfo(e)),_}};function ZG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o}=r,s=OH(n.readSync(i.dataId),n.readSync(a.dataId),a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,s)}var QG={kernelName:vs,backendName:`webgl`,kernelFunc:ZG},$G=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,eK=`
  return float(int(a.r) & int(b.r));
`;function tK(e){let{inputs:t,backend:n}=e,{a:r,b:i}=t,a=j().getBool(`WEBGL_PACK_BINARY_OPERATIONS`),o=j().getNumber(`WEBGL_VERSION`);if(n.shouldExecuteOnCPU([r,i])||o===1){let e=n.texData.get(r.dataId).values,t=n.texData.get(i.dataId).values,[a,o]=AH(r.shape,i.shape,e,t,r.dtype),s=n.makeTensorInfo(o,r.dtype),c=n.texData.get(s.dataId);return c.values=a,s}let s;return s=a?new uW($G,r.shape,i.shape,!1):new cW(eK,r.shape,i.shape),n.runWebGLProgram(s,[r,i],r.dtype)}var nK={kernelName:ys,backendName:`webgl`,kernelFunc:tK};function rK(e){let{inputs:t,backend:n}=e,{s0:r,s1:i}=t,a=n.readSync(r.dataId),o=n.readSync(i.dataId),s=U(Array.from(a),Array.from(o));return n.makeTensorInfo([s.length],`int32`,Int32Array.from(s))}var iK={kernelName:xs,backendName:`webgl`,kernelFunc:rK},aK=TW({opSnippet:`return float(a != b);`,cpuKernelImpl:ZH,dtype:`bool`}),oK={kernelName:Ic,backendName:`webgl`,kernelFunc:aK};function sK(e){let{inputs:t,backend:n}=e,{input:r}=t;return dW({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.real},backend:n})}var cK={kernelName:Xc,backendName:`webgl`,kernelFunc:sK},lK=`return float(int(x));`;function uK(e,t){let n=new FU(e.shape,lK),r=t.runWebGLProgram(n,[e],`int32`);return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}function dK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dtype:a}=r;if(a===`complex64`){if(i.dtype===`complex64`)return dW({inputs:{x:i},backend:n});let e=Qg(i.shape),t=dK({inputs:{x:i},backend:n,attrs:{dtype:`float32`}}),r=pW({inputs:{real:t,imag:e},backend:n});return e.dispose(),n.disposeIntermediateTensorInfo(t),r}if(i.dtype===`complex64`){let e=sK({inputs:{input:i},backend:n}),t=dK({inputs:{x:e},backend:n,attrs:{dtype:a}});return n.disposeIntermediateTensorInfo(e),t}if(!Eo(i.dtype,a)){let e=dW({inputs:{x:i},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:a}}if(n.shouldExecuteOnCPU([i])){let e=n.texData.get(i.dataId).values,[t,r,o]=jH(e,i.shape,i.dtype,a);return n.makeTensorInfo(t,r,o)}if(a===`int32`)return uK(i,n);if(a===`bool`){let e=n.makeTensorInfo([],`bool`,So(`bool`,1)),t=aK({inputs:{a:i,b:e},backend:n});return n.disposeIntermediateTensorInfo(e),t}throw Error(`Error in Cast: failed to cast ${i.dtype} to ${a}`)}var fK={kernelName:Ss,backendName:`webgl`,kernelFunc:dK},pK=`return ceil(x);`,mK={kernelName:Cs,backendName:`webgl`,kernelFunc:wW({opSnippet:pK,packedOpSnippet:pK,cpuKernelImpl:MH})},hK=class{constructor(e){this.variableNames=[`A`],this.customUniforms=[{name:`minVal`,type:`float`},{name:`maxVal`,type:`float`}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}},gK=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`minVal`,type:`float`},{name:`maxVal`,type:`float`}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};function _K(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{clipValueMin:a,clipValueMax:o}=r,s;s=j().getBool(`WEBGL_PACK_CLIP`)?new gK(i.shape):new hK(i.shape);let c=[[a],[o]];return n.runWebGLProgram(s,[i],i.dtype,c)}var vK={kernelName:ws,backendName:`webgl`,kernelFunc:_K},yK=class{constructor(e){this.variableNames=[`real`,`imag`],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}};function bK(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}function xK(e){let{inputs:t,backend:n}=e,{x:r}=t,i=n.texData.get(r.dataId),a=new yK(r.shape),o=[bK(r,i.complexTensorInfos.real),bK(r,i.complexTensorInfos.imag)];return n.runWebGLProgram(a,o,o[0].dtype)}var SK={kernelName:Es,backendName:`webgl`,kernelFunc:xK},CK=class{constructor(e){this.outputShape=[],this.outputShape=lx(e,1),this.variableNames=e.map((e,t)=>`T${t}`);let t=Array(e.length-1);t[0]=e[0][1];for(let n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];let n=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<t.length;e++){let r=t[e-1];n.push(`else if (yC < ${t[e]}) setOutput(getT${e}(yR, yC-${r}));`)}let r=t.length,i=t[t.length-1];n.push(`else setOutput(getT${r}(yR, yC-${i}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${n.join(`
        `)}
      }
    `}},wK=class{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=lx(e,t);let n=this.outputShape,r=n.length,i=BV(r),a=CU(`coords`,r),o=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,r);this.variableNames=e.map((e,t)=>`T${t}`);let s=Array(e.length-1);s[0]=e[0][t];for(let n=1;n<s.length;n++)s[n]=s[n-1]+e[n][t];let c=o[t],l=o.slice(-2),u=o.join(),d=`if (${c} < ${s[0]}) {
        return getChannel(
            getT0(${u}), vec2(${l.join()}));
        }`;for(let e=1;e<s.length;e++){let t=s[e-1];d+=`
        if (${c} < ${s[e]}  && ${c} >= ${s[e-1]}) {
          return getChannel(
            getT${e}(${TK(o,c,t)}),
            vec2(${TK(l,c,t)}));
        }`}let f=s.length,p=s[s.length-1];d+=`
        return getChannel(
          getT${f}(${TK(o,c,p)}),
          vec2(${TK(l,c,p)}));`,this.userCode=`
      float getValue(${o.map(e=>`int `+e)}) {
        ${d}
      }

      void main() {
        ${i} coords = getOutputCoords();
        vec4 result = vec4(getValue(${a}), 0., 0., 0.);

        ${a[r-1]} = ${a[r-1]} + 1;
        if (${a[r-1]} < ${n[r-1]}) {
          result.g = getValue(${a});
        }

        ${a[r-2]} = ${a[r-2]} + 1;
        if (${a[r-2]} < ${n[r-2]}) {
          result.a = getValue(${a});
        }

        ${a[r-1]} = ${a[r-1]} - 1;
        if (${a[r-2]} < ${n[r-2]} &&
            ${a[r-1]} < ${n[r-1]}) {
          result.b = getValue(${a});
        }
        setOutput(result);
      }
    `}};function TK(e,t,n){let r=e.indexOf(t);return e.map((e,t)=>t===r?`${e} - ${n}`:e).join()}function EK(e){let{inputs:t,backend:n}=e,{input:r}=t;return dW({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.imag},backend:n})}var DK={kernelName:dc,backendName:`webgl`,kernelFunc:EK};function OK(e,t,n){let r=e[0].dtype;if(r===`complex64`){let r=e.map(e=>sK({inputs:{input:e},backend:n})),i=e.map(e=>EK({inputs:{input:e},backend:n})),a=OK(r,t,n),o=OK(i,t,n),s=pW({inputs:{real:a,imag:o},backend:n});return r.forEach(e=>n.disposeIntermediateTensorInfo(e)),i.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(o),s}let i=n.shouldExecuteOnCPU(e);if(r===`string`&&(i=!0),i){let i=e.map(e=>{let r=[-1,k(e.shape.slice(t))];return $({inputs:{x:e},backend:n,attrs:{shape:r}})}),a=NH(i.map(e=>({vals:n.readSync(e.dataId),shape:e.shape})),lx(i.map(e=>e.shape),1),r,i[0].shape[0]===1),o=lx(e.map(e=>e.shape),t),s=n.makeTensorInfo(o,r,a);return i.forEach(e=>n.disposeIntermediateTensorInfo(e)),s}let a=e.filter(e=>k(e.shape)>0),o=j().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)&&a[0].shape.length>1;if(a.length===1){let t=o?new FU(e[0].shape,HU):new YU(e[0].shape,HU);return n.runWebGLProgram(t,e,r)}let s=j().getNumber(`WEBGL_MAX_TEXTURES_IN_SHADER`);if(a.length>s){let e=[];for(let r=0;r<a.length;r+=s){let i=a.slice(r,r+s);e.push(OK(i,t,n))}let r=OK(e,t,n);for(let t of e)n.disposeIntermediateTensorInfo(t);return r}if(o){let e=new wK(a.map(e=>e.shape),t);return n.runWebGLProgram(e,a,r)}let{tensors2D:c,outShape:l}=kK(a,t,n),u=new CK(c.map(e=>e.shape)),d=n.runWebGLProgram(u,c,r);c.forEach(e=>n.disposeIntermediateTensorInfo(e));let f=$({inputs:{x:d},attrs:{shape:l},backend:n});return n.disposeIntermediateTensorInfo(d),f}function kK(e,t,n){let r=lx(e.map(e=>e.shape),t);return{tensors2D:e.map(e=>$({inputs:{x:e},attrs:{shape:[-1,k(e.shape.slice(t))]},backend:n})),outShape:r}}function AK(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r,a=bo(i,t[0].shape)[0];cx(t.map(e=>e.shape),a);let o=lx(t.map(e=>e.shape),a);if(k(o)===0)return n.makeTensorInfo(o,t[0].dtype,[]);let s=t.filter(e=>k(e.shape)>0);return s.length===1?dW({inputs:{x:s[0]},backend:n}):OK(s,a,n)}var jK={kernelName:Ds,backendName:`webgl`,kernelFunc:AK},MK=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let a=e.padInfo.top,o=e.padInfo.left,s=e.strideHeight,c=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,d=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4,h=e.dataFormat===`channelsLast`,g=h?1:2,_=h?2:3,v=h?3:1,y=``,b=``;n&&(y=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,b=`result = activation(result);`);let x=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${y}

      const ivec2 strides = ivec2(${s}, ${c});
      const ivec2 pads = ivec2(${a}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${v}];

        ivec2 xRCCorner =
            ivec2(coords[${g}], coords[${_}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${d}; wR++) {
          int xR = xRCorner + wR * ${l};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${u};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${h}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${m===1}) {

              if (${h}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${h}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${h}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${x}
        ${b}
        setOutput(result);
      }
    `}},NK=class{constructor(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.filterDepth,d=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${i}, ${a}, ${o});
      const ivec3 pads = ivec3(${t}, ${n}, ${r});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${u}; wF++) {
          int xF = xFCorner + wF * ${s};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${l};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${m===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},PK=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=YV(this.outputShape.length);let a=e.padInfo.left,o=e.strideWidth,s=e.dilationWidth,c=e.filterHeight,l=e.filterWidth,u=l,d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<l;e++)d+=`
           vec4 xTexelC${e*2};
           int xTexelC${e*2}Ready;
           vec4 xTexelC${e*2+1};
           int xTexelC${e*2+1}Ready;
           vec4 xC${e};`;d+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let e=0;e<l;e++)d+=`
           xTexelC${e*2} = vec4(0.0);
           xTexelC${e*2}Ready = 0;
           xTexelC${e*2+1} = vec4(0.0);
           xTexelC${e*2+1}Ready = 0;
           xC${e} = vec4(0.0);`;d+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let t=0;t<(u+1)/2;t++){let n=t*2;if(d+=`
           xC = xCCorner + ${n*s};
           `,o===1){if(n<l&&(a%2==1?(d+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }
               `,d+=s===1&&n>0?`
                 xC${n} = vec4(xTexelC${n-2}.zw, xTexelC${n}.xy);
                 `:`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${n} = vec4(previous.zw, xTexelC${n}.xy);
                   } else {
                     xC${n} = vec4(0.0, 0.0, xTexelC${n}.xy);
                   }
                   `):d+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xC${n} = xTexelC${n};
                 `,n+1<l)){let e=a%2==0?co(s):s;s%2==0&&a%2==1||s%2!=0&&a%2!=1?(d+=`
                   xCOffset = xC + imod(pads[1], 2) + ${e};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                     xTexelC${n+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${n+1}.zw = vec2(0.0);
                     }
                     xTexelC${n+1}Ready = 1;
                   }
                   `,d+=s>1?`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${n+1} = vec4(previous.zw, xTexelC${n+1}.xy);
                     } else {
                      xC${n+1} = vec4(0.0, 0.0, xTexelC${n+1}.xy);
                     }
                     `:`
                     xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.xy);
                     `):d+=e===1?`
                     xC${n+1} = xTexelC${n};
                     `:`
                     xCOffset = xC + ${e};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                       xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${n+1}.zw = vec2(0.0);
                       }
                       xTexelC${n+1}Ready = 1;
                     }

                     xC${n+1} = xTexelC${n+1};
                     `}}else n<l&&(a%2==1?(d+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.0);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
               `,n+1<l&&(d+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${n+1} = vec4(xTexelC${n+1}.xy, final.xy);
                 `)):(d+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(
                   xTexelC${n}.xy, xTexelC${n+1}.xy);
               `,n+1<l&&(d+=`
                   xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
                 `)));n<l&&(d+=`
             wTexel = getW(r, ${n}, d1, d2);
             dotProd += xC${n}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${n}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,n+1<l&&(d+=`
               wTexel = getW(r, ${n+1}, d1, d2);
               dotProd += xC${n+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${n+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}d+=`
     }
   `,d+=`
     }
   `,d+=`
     }
   `;let f=``,p=``;n&&(f=r?`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${n}
         }`:i?`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${n}
         }`:`vec4 activation(vec4 x) {
           ${n}
         }`,p=`result = activation(result);`);let m=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${d}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${m}
         ${p}
         setOutput(result);
       }
     `}},FK=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`inputShape`,type:`ivec4`},{name:`pad`,type:`ivec2`},{name:`stride`,type:`ivec2`},{name:`dilation`,type:`ivec2`},{name:`inChannels`,type:`int`},{name:`itemsPerBlockRow`,type:`int`},{name:`outWidth`,type:`int`}],this.outputShape=e,this.enableShapeUniforms=YV(this.outputShape.length);let{dataFormat:n}=t,r=WB(),i=n===`channelsLast`,a=i?1:2,o=i?2:3,s=this.enableShapeUniforms?`if(blockIndex < outShape[2] && pos < outShape[1]) {`:`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`,c=``;for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)c+=`
          blockIndex = rc.z + ${t};
          pos = rc.y + ${e};

          ${s}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${a}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${o}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${i}) {
                  innerDims = vec2(d1, ch);
                  result[${e*2+t}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${e*2+t}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${c}

        ${r.output} = result;
      }
    `}};function IK(e,t){let n=e.length;return n>=3?t?[...e.slice(0,-3),e[n-3]*e[n-2],e[n-1]]:[...e.slice(0,-3),e[n-3],e[n-2]*e[n-1]]:!t&&n===1&&e[0]>1?[e[0],1]:null}function LK({x:e,filter:t,convInfo:n,backend:r,bias:i=null,preluActivationWeights:a=null,leakyreluAlpha:o=0,activation:s=null}){let c=e.shape,l=r.texData.get(e.dataId),u=n.inChannels,d=c[0]*c[1]*c[2],f=n.outChannels,p=n.dataFormat===`channelsLast`,m,h=[];if(a!=null){let e=IK(a.shape,p);e!=null&&(a=$({inputs:{x:a},backend:r,attrs:{shape:e}}),h.push(a))}if(i!=null){let e=IK(i.shape,p);e!=null&&(i=$({inputs:{x:i},backend:r,attrs:{shape:e}}),h.push(i))}if(!((d===1||f===1)&&u>1e3)&&l.isPacked&&p&&l.texture!=null&&c[2]%2!=0&&mo(l.shape.slice(-3),c.slice(-3))){let u=c[0]*c[1]*(c[2]+1),d={dataId:e.dataId,shape:[1,u,n.inChannels],dtype:e.dtype},f=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,O(AB(l.shape,d.shape),()=>`packed reshape ${l.shape} to ${d.shape} isn't free`);let p=$({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}});h.push(p);let g=JW({a:d,b:p,backend:r,transposeA:!1,transposeB:!1,bias:i,activation:s,preluActivationWeights:a,leakyreluAlpha:o}),_=r.texData.get(g.dataId);O(_.isPacked,()=>`batchMatMul result is expected to be packed`),l.shape=f,_.shape=n.outShape,m=dW({inputs:{x:g},backend:r}),m.shape=n.outShape,h.push(g)}else{let c=n.outHeight*n.outWidth,l=$({inputs:{x:e},backend:r,attrs:{shape:p?[n.batchSize,c,n.inChannels]:[n.batchSize,n.inChannels,c]}}),u=$({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}}),d=JW({a:p?l:u,b:p?u:l,transposeA:!p,transposeB:!1,backend:r,bias:i,activation:s,preluActivationWeights:a,leakyreluAlpha:o});m=$({inputs:{x:d},backend:r,attrs:{shape:n.outShape}}),h.push(l),h.push(u),h.push(d)}for(let e of h)r.disposeIntermediateTensorInfo(e);return m}function RK({x:e,filter:t,convInfo:n,backend:r,bias:i=null,preluActivationWeights:a=null,leakyreluAlpha:o=0,activation:s=null}){let{filterWidth:c,filterHeight:l,inChannels:u,outWidth:d,outHeight:f,dataFormat:p}=n,m=p===`channelsLast`,h=c*l*u,g=f*d,_=[n.batchSize,h,g],v=[];if(a!=null){let e=IK(a.shape,m);e!=null&&(a=$({inputs:{x:a},backend:r,attrs:{shape:e}}),v.push(a))}if(i!=null){let e=IK(i.shape,m);e!=null&&(i=$({inputs:{x:i},backend:r,attrs:{shape:e}}),v.push(i))}let y=$({inputs:{x:t},backend:r,attrs:{shape:[1,h,k(t.shape)/h]}});v.push(y);let b=new FK(_,n),x=[e.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],S=r.runWebGLProgram(b,[e],`float32`,x),C=$({inputs:{x:S},backend:r,attrs:{shape:_}});v.push(S),v.push(C);let w=i!=null,T=a!=null,E=s===`leakyrelu`,D=s?EW(s,!0):null,ee=new DW(m?C.shape:y.shape,m?y.shape:C.shape,m?[n.batchSize,g,n.outChannels]:[n.batchSize,n.outChannels,g],!0,!1,w,D,T,E),te=m?[C,y]:[y,C];if(i&&te.push(i),T&&te.push(a),E){let e=r.makeTensorInfo([],`float32`,wu(o,`float32`));te.push(e),v.push(e)}let ne=r.runWebGLProgram(ee,te,`float32`),re=$({inputs:{x:ne},backend:r,attrs:{shape:n.outShape}});v.push(ne);for(let e of v)r.disposeIntermediateTensorInfo(e);return re}function zK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dataFormat:c,dilations:l,dimRoundingMode:u}=r,d=kp(c),f=hp(i.shape,a.shape,o,l,s,u,!1,d),p;if(f.filterHeight===1&&f.filterWidth===1&&f.dilationHeight===1&&f.dilationWidth===1&&f.strideHeight===1&&f.strideWidth===1&&(f.padInfo.type===`SAME`||f.padInfo.type===`VALID`))p=LK({x:i,filter:a,convInfo:f,backend:n});else if(f.strideWidth<=2&&d===`channelsLast`&&j().getBool(`WEBGL_EXP_CONV`)){let e=new PK(f),t=[[f.padInfo.top,f.padInfo.left],[f.strideHeight,f.strideWidth],[f.dilationHeight,f.dilationWidth],[f.inHeight,f.inWidth]];p=n.runWebGLProgram(e,[i,a],`float32`,t)}else if(j().getBool(`WEBGL_CONV_IM2COL`))p=RK({x:i,filter:a,convInfo:f,backend:n});else{let e=new MK(f);p=n.runWebGLProgram(e,[i,a],`float32`)}let m=$({inputs:{x:p},backend:n,attrs:{shape:f.outShape}});return n.disposeIntermediateTensorInfo(p),m}var BK={kernelName:Os,backendName:`webgl`,kernelFunc:zK},VK=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.dataFormat===`channelsLast`;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${i};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${a?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}},HK=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dataFormat===`channelsLast`,o=t-1-e.padInfo.top,s=n-1-e.padInfo.left,c=a?1:2,l=a?2:3,u=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${u}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${l}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${a}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},UK=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.padInfo.front,a=e.padInfo.top,o=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${i};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${n} - ${a};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${r} - ${o};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},WK=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=t-1-e.padInfo.front,c=n-1-e.padInfo.top,l=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${s}, ${c}, ${l});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${i}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${n}; wR++) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${n} - 1 - wR;

            for (int wC = 0; wC < ${r}; wC++) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${r} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function GK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,dataFormat:c,dimRoundingMode:l,filterShape:u}=r,d=kp(c),f=new VK(hp(i.shape,u,o,1,s,l,!1,d));return n.runWebGLProgram(f,[i,a],`float32`)}var KK={kernelName:ks,backendName:`webgl`,kernelFunc:GK},qK=class{constructor(e){this.variableNames=[`dy`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`strides`,type:`vec2`}],this.outputShape=e.inShape,this.enableShapeUniforms=YV(this.outputShape.length);let t=e.filterHeight,n=e.filterWidth,r=t-1-e.padInfo.top,i=n-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${r}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            int wCPerm = ${n} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}};function JK(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{inputShape:o,strides:s,pad:c,dataFormat:l,dimRoundingMode:u}=r,d=kp(l),f=hp(o,a.shape,s,1,c,u,!1,d);if(j().getBool(`WEBGL_PACK_CONV2DTRANSPOSE`)&&d===`channelsLast`){let e=[[f.strideHeight,f.strideWidth]],t=new qK(f);return n.runWebGLProgram(t,[i,a],`float32`,e)}{let e=new HK(f);return n.runWebGLProgram(e,[i,a],`float32`)}}var YK={kernelName:As,backendName:`webgl`,kernelFunc:JK};function XK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r,l=new NK(gp(i.shape,a.shape,o,c,s));return n.runWebGLProgram(l,[i,a],`float32`)}var ZK={kernelName:js,backendName:`webgl`,kernelFunc:XK};function QK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,filterShape:c}=r,l=new UK(gp(i.shape,c,o,1,s));return n.runWebGLProgram(l,[i,a],`float32`)}var $K={kernelName:Ms,backendName:`webgl`,kernelFunc:QK};function eq(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{pad:o,strides:s,inputShape:c}=r,l=new WK(gp(c,a.shape,s,1,o));return n.runWebGLProgram(l,[i,a],`float32`)}var tq={kernelName:Ns,backendName:`webgl`,kernelFunc:eq},nq={kernelName:`Cos`,backendName:`webgl`,kernelFunc:wW({opSnippet:CW+`
  return cos(x);
`,packedOpSnippet:`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${lW}
  return result;
`})},rq={kernelName:Ps,backendName:`webgl`,kernelFunc:wW({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`})},iq=class{constructor(e,t,n,r,i){this.variableNames=[`Image`,`Boxes`,`BoxInd`],this.outputShape=[];let[a,o,s,c]=e,[l]=t,[u,d]=n;this.outputShape=[l,u,d,c];let f=+(r===`bilinear`),[p,m]=[`${o-1}.0`,`${s-1}.0`],[h,g,_]=u>1?[`${(o-1)/(u-1)}`,`(y2-y1) * height_ratio`,`y1*${p} + float(y)*(height_scale)`]:[`0.0`,`0.0`,`0.5 * (y1+y2) * ${p}`],[v,y,b]=d>1?[`${(s-1)/(d-1)}`,`(x2-x1) * width_ratio`,`x1*${m} + float(x)*(width_scale)`]:[`0.0`,`0.0`,`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${h});
      const float width_ratio = float(${v});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${a}) {
          return;
        }

        float height_scale = ${g};
        float width_scale = ${y};

        float in_y = ${_};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${i}));
          return;
        }
        float in_x = ${b};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${i}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}},aq={kernelName:Ls,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{image:i,boxes:a,boxInd:o}=t,{cropSize:s,method:c,extrapolationValue:l}=r,u=new iq(i.shape,a.shape,s,c,l);return n.runWebGLProgram(u,[i,a,o],`float32`)}},oq;(function(e){e.Prod=`*`,e.Sum=`+`})(oq||={});var sq=class{constructor(e,t,n,r){this.op=e,this.outputShape=t,this.variableNames=[`x`],this.customUniforms=[{name:`index`,type:`float`}];let i=this.outputShape.length,a=this.op===oq.Prod?`1.0`:`0.0`,o=n?a:`getX(${cq(i,`coords`,this.op)})`,s=this.outputShape[this.outputShape.length-1],c=``,l=``;n?(c=r?`end != ${s-1}`:`end != 0`,l=r?`end + 1`:`end - 1`):(c=r?`end + pow2 < ${s}`:`end >= pow2`,l=r?`end + pow2`:`end - pow2`),this.userCode=`
      void main() {
        ${BV(i)} coords = getOutputCoords();
        int end = ${lq(i,`coords`,this.op)};
        float val = ${o};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${l};
          ${lq(i,`coords`,this.op)} = idx;
          val ${this.op}= getX(${cq(i,`coords`,this.op)});
        }
        setOutput(val);
      }
    `}};function cq(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.x, ${t}.y`;if(e===3)return`${t}.x, ${t}.y, ${t}.z`;if(e===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function lq(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.y`;if(e===3)return`${t}.z`;if(e===4)return`${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function uq(e,t,n,r,i,a){let o=t.shape.length,s=yh([r],o),c=t;s!=null&&(c=KW({inputs:{x:t},backend:n,attrs:{perm:s}}));let l=xh(1,o)[0];if(l!==o-1)throw Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${r}`);let u=c.shape[l],d=dW({inputs:{x:c},backend:n});for(let t=0;t<=Math.ceil(Math.log2(u))-1;t++){let r=new sq(e,c.shape,!1,a),i=[[t]],o=d;d=n.runWebGLProgram(r,[d],d.dtype,i),n.disposeIntermediateTensorInfo(o)}if(i){let t=new sq(e,c.shape,i,a),r=d;d=n.runWebGLProgram(t,[d],d.dtype),n.disposeIntermediateTensorInfo(r)}if(s!=null){let e=bh(s),t=KW({inputs:{x:d},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(c),t}return d}function dq(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;return uq(oq.Prod,i,n,a,o,s)}var fq={kernelName:Fs,backendName:`webgl`,kernelFunc:dq};function pq(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;return uq(oq.Sum,i,n,a,o,s)}var mq={kernelName:Is,backendName:`webgl`,kernelFunc:pq};function hq(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o,binaryOutput:s}=r;if(i.shape.length===1){let e=OH(n.readSync(i.dataId),n.readSync(a.dataId),a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,e)}if(i.shape.length===2){let e=kH(n.bufferSync(i),n.bufferSync(a),o,s);return n.makeTensorInfo(e.shape,a.dtype,e.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${i.shape.length}.`)}var gq={kernelName:Rs,backendName:`webgl`,kernelFunc:hq},_q=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat===`NHWC`?`coords[1]`:`coords[2]`}getWidthCoordString(){return this.dataFormat===`NHWC`?`coords[2]`:`coords[3]`}getDepthCoordString(){return this.dataFormat===`NHWC`?`coords[3]`:`coords[1]`}getOutputDepthSize(){return this.dataFormat===`NHWC`?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat===`NHWC`?`getX(b, in_h, in_w, in_d)`:`getX(b, in_d, in_h, in_w)`}};function vq(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockSize:a,dataFormat:o}=r,s=i.shape[0],c=o===`NHWC`?i.shape[1]:i.shape[2],l=o===`NHWC`?i.shape[2]:i.shape[3],u=o===`NHWC`?i.shape[3]:i.shape[1],d=c*a,f=l*a,p=u/(a*a),m=new _q(o===`NHWC`?[s,d,f,p]:[s,p,d,f],a,o);return n.runWebGLProgram(m,[i],i.dtype)}var yq={kernelName:zs,backendName:`webgl`,kernelFunc:vq},bq=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=YV(this.outputShape.length);let a=e.filterHeight,o=e.filterWidth,s=e.outChannels/e.inChannels,c=``,l=``;n&&(c=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,l=`result = activation(result);`);let u=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${c}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${s};
        int q = d2 - d1 * ${s};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${a}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${o}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${u}
        ${l}
        setOutput(result);
      }
    `}},xq=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=YV(this.outputShape.length);let a=e.outChannels/e.inChannels,o=e.padInfo.left,s=e.strideWidth,c=e.dilationWidth,l=e.filterHeight,u=e.filterWidth,d=u,f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<u;e++)f+=`
          vec4 xTexelC${e*2};
          int xTexelC${e*2}Ready;
          vec4 xTexelC${e*2+1};
          int xTexelC${e*2+1}Ready;
          vec4 xC${e};`;f+=`
    for (int r = 0; r < ${l}; r++) {
      `;for(let e=0;e<u;e++)f+=`
          xTexelC${e*2} = vec4(0.0);
          xTexelC${e*2}Ready = 0;
          xTexelC${e*2+1} = vec4(0.0);
          xTexelC${e*2+1}Ready = 0;
          xC${e} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let e=0;e<(d+1)/2;e++){let t=e*2;if(f+=`
          xC = xCCorner + ${t*c};
          `,s===1){if(t<u&&(o%2==1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }
              `,f+=c===1&&t>0?`
                xC${t} = vec4(xTexelC${t-2}.zw, xTexelC${t}.xy);
                `:`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${t} = vec4(previous.zw, xTexelC${t}.xy);
                  } else {
                    xC${t} = vec4(0.0, 0.0, xTexelC${t}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xC${t} = xTexelC${t};
                `,t+1<u)){let e=o%2==0?co(c):c;c%2==0&&o%2==1||c%2!=0&&o%2!=1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${e};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                    xTexelC${t+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${t+1}.zw = vec2(0.0);
                    }
                    xTexelC${t+1}Ready = 1;
                  }
                  `,f+=c>1?`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${t+1} = vec4(previous.zw, xTexelC${t+1}.xy);
                    } else {
                     xC${t+1} = vec4(0.0, 0.0, xTexelC${t+1}.xy);
                    }
                    `:`
                    xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.xy);
                    `):f+=e===1?`
                    xC${t+1} = xTexelC${t};
                    `:`
                    xCOffset = xC + ${e};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                      xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${t+1}.zw = vec2(0.0);
                      }
                      xTexelC${t+1}Ready = 1;
                    }

                    xC${t+1} = xTexelC${t+1};
                    `}}else t<u&&(o%2==1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.0);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
              `,t+1<u&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${t+1} = vec4(xTexelC${t+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(
                  xTexelC${t}.xy, xTexelC${t+1}.xy);
              `,t+1<u&&(f+=`
                  xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
                `)));t<u&&(f+=`
            wTexel = getW(r, ${t}, d1, q);
            dotProd += xC${t} * vec4(wTexel.xz, wTexel.xz);
          `,t+1<u&&(f+=`
              wTexel = getW(r, ${t+1}, d1, q);
              dotProd += xC${t+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let p=``,m=``;n&&(p=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`vec4 activation(vec4 x) {
          ${n}
        }`,m=`result = activation(result);`);let h=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${p}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${a};
        int q = d2 - d1 * ${a};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${h}
        ${m}
        setOutput(result);
      }
    `}};function Sq(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c,dimRoundingMode:l}=r,u=c;u??=[1,1],O(Dp(o,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${u}'`);let d=hp(i.shape,a.shape,o,u,s,l,!0),f;f=j().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?new xq(d):new bq(d);let p=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return n.runWebGLProgram(f,[i,a],`float32`,p)}var Cq={kernelName:Bs,backendName:`webgl`,kernelFunc:Sq},wq=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${a} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${i};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}},Tq=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=t-1-e.padInfo.top,o=n-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${s}; dm++) {
              int d2 = d1 * ${s} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function Eq(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,filterShape:u}=r,d=new wq(hp(i.shape,u,o,s,c,l,!0));return n.runWebGLProgram(d,[i,a],`float32`)}var Dq={kernelName:Vs,backendName:`webgl`,kernelFunc:Eq};function Oq(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,inputShape:u}=r,d=new Tq(hp(u,a.shape,o,s,c,l,!0));return n.runWebGLProgram(d,[i,a],`float32`)}var kq={kernelName:Hs,backendName:`webgl`,kernelFunc:Oq},Aq=class{constructor(e){this.variableNames=[`X`],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};function jq(e){let{inputs:t,backend:n}=e,{x:r}=t,i=[...r.shape,...r.shape],a=k(r.shape),o=$({inputs:{x:r},backend:n,attrs:{shape:[a]}}),s=new Aq(a),c=n.runWebGLProgram(s,[o],o.dtype),l=$({inputs:{x:c},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(c),l}var Mq={kernelName:Us,backendName:`webgl`,kernelFunc:jq},Nq=class{constructor(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let{inHeight:t,inWidth:n,padInfo:r,strideHeight:i,strideWidth:a,filterHeight:o,filterWidth:s,dilationHeight:c,dilationWidth:l}=e,{top:u,left:d}=r;this.userCode=`
      const ivec2 strides = ivec2(${i}, ${a});
      const ivec2 pads = ivec2(${u}, ${d});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${o}; h++) {
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${s}; w++) {
              int wIn = wBeg + w * ${l};

              if (wIn >= 0 && wIn < ${n}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}};function Pq(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r,l=fp(i.shape,a.shape,o,s,`NHWC`,c),u,d=new Nq(l);u=n.runWebGLProgram(d,[i,a],`float32`);let f=$({inputs:{x:u},backend:n,attrs:{shape:l.outShape}});return n.disposeIntermediateTensorInfo(u),f}var Fq={kernelName:Ws,backendName:`webgl`,kernelFunc:Pq};function Iq(e){let{inputs:t,backend:n,attrs:r}=e,{equation:i}=r,a=t,{allDims:o,summedDims:s,idDims:c}=Hx(i,a.length);Wx(o.length,c,a);let{path:l,steps:u}=Gx(s,c),d=u.length,f=null,p=o.length,m=[];for(let e=0;e<d;++e){for(let t of u[e]){let{permutationIndices:e,expandDims:r}=Ux(p,c[t]),i;Kx(e)?i=a[t]:(i=KW({inputs:{x:a[t]},backend:n,attrs:{perm:e}}),m.push(i));let o=i.shape.slice();for(let e=0;e<r.length;++e)o.splice(r[e],0,1);mo(i.shape,o)||(i=$({inputs:{x:i},backend:n,attrs:{shape:o}}),m.push(i)),f===null?f=i:(f=jW({inputs:{a:i,b:f},backend:n}),m.push(f))}e<d-1&&(l[e]>=0&&(f=WW({inputs:{x:f},backend:n,attrs:{axis:l[e]-(o.length-p),keepDims:!1}}),m.push(f)),p--)}for(let e of m)e!==f&&n.disposeIntermediateTensorInfo(e);return f}var Lq={kernelName:Ys,backendName:`webgl`,kernelFunc:Iq},Rq={kernelName:`Elu`,backendName:`webgl`,kernelFunc:wW({opSnippet:`return (x >= 0.0) ? x : (exp(x) - 1.0);`,packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`})},zq=`return (b >= 0.0) ? a : a * (b + 1.0);`,Bq=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,Vq={kernelName:Xs,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n}=e,{dy:r,y:i}=t,a=j().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new uW(Bq,r.shape,i.shape):new cW(zq,r.shape,i.shape);return n.runWebGLProgram(a,[r,i],r.dtype)}},Hq={kernelName:Zs,backendName:`webgl`,kernelFunc:TW({opSnippet:`return float(a == b);`,packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:`bool`,cpuKernelImpl:PH})},Uq={kernelName:`Erf`,backendName:`webgl`,kernelFunc:wW({opSnippet:`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${wx};
  float a1 = ${Tx};
  float a2 = ${Ex};
  float a3 = ${Dx};
  float a4 = ${Ox};
  float a5 = ${kx};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`})},Wq=wW({opSnippet:CW+`
  return exp(x);
`,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:FH,dtype:`float32`}),Gq={kernelName:`Exp`,backendName:`webgl`,kernelFunc:Wq};function Kq(e){let{inputs:t,attrs:n,backend:r}=e,{dim:i}=n,{input:a}=t,o=a.shape.length,s=a.shape.slice(),c=i;return i<0&&(O(-(o+1)<=i,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),c=o+i+1),s.splice(c,0,1),$({inputs:{x:a},backend:r,attrs:{shape:s}})}var qq={kernelName:Qs,backendName:`webgl`,kernelFunc:Kq},Jq=`return exp(x) - 1.0;`,Yq={kernelName:$s,backendName:`webgl`,kernelFunc:wW({opSnippet:Jq,packedOpSnippet:Jq,cpuKernelImpl:IH})},Xq=class{constructor(e,t,n){this.variableNames=[`real`,`imag`];let r=t[1];this.outputShape=t;let i=n?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,a=n?`${r}.0`:`1.0`,o;if(e===`real`)o=`return real * expR - imag * expI;`;else if(e===`imag`)o=`return real * expI + imag * expR;`;else throw Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${i};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${o}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${r});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${r}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${a};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}};function Zq(e,t,n){let r=n.texData.get(e.dataId),i=k(e.shape),a=e.shape[e.shape.length-1],o=i/a,s=$({inputs:{x:e},backend:n,attrs:{shape:[o,a]}}),c=s.shape,l=new Xq(`real`,c,t),u=new Xq(`imag`,c,t),d=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:c},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:c}],f=n.runWebGLProgram(l,d,`float32`),p=n.runWebGLProgram(u,d,`float32`),m=pW({inputs:{real:f,imag:p},backend:n});n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p);let h=$({inputs:{x:m},backend:n,attrs:{shape:e.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(m),h}function Qq(e){let{inputs:t,backend:n}=e,{input:r}=t;return Zq(r,!1,n)}var $q={kernelName:`FFT`,backendName:`webgl`,kernelFunc:Qq},eJ=class{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:`value`,type:`float`}],this.variableNames=[`x`],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};function tJ(e){let{backend:t,attrs:n}=e,{shape:r,value:i}=n,{dtype:a}=n;if(a||=Mo(i),a===`string`){let e=Co(a,k(r));return e.fill(i),t.makeTensorInfo(r,a,e)}{let e=new eJ(r,i),n=[[i]];return t.runWebGLProgram(e,[],a,n)}}var nJ={kernelName:ec,backendName:`webgl`,kernelFunc:tJ},rJ=class{constructor(e){this.variableNames=[`Image`],this.outputShape=[];let t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}},iJ={kernelName:tc,backendName:`webgl`,kernelFunc:({inputs:e,backend:t})=>{let{image:n}=e,r=t,i=new rJ(n.shape);return r.runWebGLProgram(i,[n],n.dtype)}},aJ=`return floor(x);`,oJ={kernelName:nc,backendName:`webgl`,kernelFunc:wW({opSnippet:aJ,packedOpSnippet:aJ,cpuKernelImpl:LH})},sJ={kernelName:rc,backendName:`webgl`,kernelFunc:TW({opSnippet:`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,packedOpSnippet:`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,dtype:`int32`})},cJ=class{constructor(e){this.variableNames=[`A`];let t=WB(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${n}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}},lJ=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0;let t=WB(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${r}.0, ${n}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}},uJ={kernelName:Wl,backendName:`webgl`,kernelFunc:pJ},dJ,fJ=j().getBool(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`);function pJ(e){let{inputs:t,backend:n,attrs:r}=e,{pixels:i}=t,{numChannels:a}=r,o=typeof HTMLVideoElement<`u`&&i instanceof HTMLVideoElement,s=typeof HTMLImageElement<`u`&&i instanceof HTMLImageElement,[c,l]=o?[i.videoWidth,i.videoHeight]:[i.width,i.height],u=[l,c],d=[l,c,a];if(s||o){let e=j().getBool(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`);(dJ==null||e!==fJ)&&(fJ=e,dJ=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:fJ})),dJ.canvas.width=c,dJ.canvas.height=l,dJ.drawImage(i,0,0,c,l),i=dJ.canvas}let f=n.makeTensorInfo(u,`int32`);n.texData.get(f.dataId).usage=Hz.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(f.dataId),i);let p=j().getBool(`WEBGL_PACK`)?new lJ(d):new cJ(d),m=n.runWebGLProgram(p,[f],`int32`);return n.disposeData(f.dataId),m}function mJ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=kp(u),g=hp(i.shape,a.shape,c,d,l,f,!1,h),_,v=[],y=o!=null,b=s!=null,x=p===`leakyrelu`,S=()=>{let e=[i,a],t=(e,t)=>{if(t===`NCHW`&&e.shape.length===1&&e.shape[0]!==1){let t=$({inputs:{x:e},backend:n,attrs:{shape:[e.shape[0],1,1]}});return v.push(t),t}return e};if(y&&e.push(t(o,u)),b&&e.push(t(s,u)),x){let t=n.makeTensorInfo([],`float32`,wu(m,`float32`));e.push(t),v.push(t)}return e};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type===`SAME`||g.padInfo.type===`VALID`))_=LK({x:i,filter:a,convInfo:g,backend:n,bias:o,activation:p,preluActivationWeights:s,leakyreluAlpha:m});else if(g.strideWidth<=2&&h===`channelsLast`&&j().getBool(`WEBGL_EXP_CONV`)){let e=new PK(g,y,p?EW(p,!0):null,b,x),t=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],r=S();_=n.runWebGLProgram(e,r,`float32`,t)}else if(j().getBool(`WEBGL_CONV_IM2COL`))_=RK({x:i,filter:a,convInfo:g,backend:n,bias:o,activation:p,preluActivationWeights:s,leakyreluAlpha:m});else{let e=new MK(g,y,p?EW(p,!1):null,b,x),t=S();_=n.runWebGLProgram(e,t,`float32`)}let C=$({inputs:{x:_},backend:n,attrs:{shape:g.outShape}});return v.push(_),v.forEach(e=>n.disposeIntermediateTensorInfo(e)),C}var hJ={kernelName:ql,backendName:`webgl`,kernelFunc:mJ};function gJ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dilations:u,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=r,m=[],h=u;h??=[1,1],O(Dp(c,h),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${h}'`);let g=hp(i.shape,a.shape,c,h,l,d,!0),_=j().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,v=f?EW(f,_):null,y=[i,a],b=o!=null,x=s!=null,S=f===`leakyrelu`;if(b&&y.push(o),x&&y.push(s),S){let e=n.makeTensorInfo([],`float32`,wu(p,`float32`));y.push(e),m.push(e)}let C;C=_?new xq(g,b,v,x,S):new bq(g,b,v,x,S);let w=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],T=n.runWebGLProgram(C,y,`float32`,w);return m.forEach(e=>n.disposeIntermediateTensorInfo(e)),T}var _J={kernelName:Jl,backendName:`webgl`,kernelFunc:gJ},vJ=class{constructor(e,t,n,r){this.sliceDim=e,this.strides=t,this.paramsShape=r,this.variableNames=[`x`,`indices`],this.outputShape=n;let i=BV(n.length),a=`
    int index;`;for(let e=0;e<this.sliceDim;e++)a+=`
          index = round(getIndices(coords[0], ${e}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[e]};
          flattenIndex += index * ${this.strides[e]};`;this.userCode=`
         void main() {
          ${i} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${a}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}};function yJ(e){let{inputs:t,backend:n}=e,{params:r,indices:i}=t,a=i.shape,o=a[a.length-1],s=k(r.shape),[c,l,u,d]=Lb(r,i),f=$({inputs:{x:i},backend:n,attrs:{shape:[l,o]}}),p=$({inputs:{x:r},backend:n,attrs:{shape:[k(r.shape)/u,u]}});if(n.shouldExecuteOnCPU([r,i])||r.dtype===`string`){let e=RH(n.readSync(i.dataId),n.bufferSync(r),r.dtype,l,o,u,d,r.shape,s);return n.makeTensorInfo(c,r.dtype,e.values)}let m=new vJ(o,d,[l,u],r.shape),h=n.runWebGLProgram(m,[p,f],p.dtype),g=$({inputs:{x:h},backend:n,attrs:{shape:c}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(h),g}var bJ={kernelName:oc,backendName:`webgl`,kernelFunc:yJ},xJ=class{constructor(e,t){this.variableNames=[`A`,`indices`],this.outputShape=t,this.rank=t.length;let n=BV(this.rank),r=SJ(e,2);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}};function SJ(e,t){let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],r=[];for(let t=0;t<e.length;t++)t===2?r.push(`index`):r.push(`${n[t]}`);return r.join()}function CJ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,indices:a}=t,{axis:o,batchDims:s}=r,c=bo(o,i.shape)[0];if(j().get(`DEBUG`)){let e=n.readSync(a.dataId),t=i.shape[c];for(let n=0;n<e.length;++n){let r=e[n];O(r<=t-1&&r>=0,()=>`GatherV2: the index value ${r} is not in [0, ${t-1}]`)}}let l=uS(i,a,c,s),u=k(a.shape),d=[],f=$({inputs:{x:i},backend:n,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),p=$({inputs:{x:a},backend:n,attrs:{shape:[l.batchSize,u/l.batchSize]}});d.push(f),d.push(p);let m=[l.batchSize,l.outerSize,u/l.batchSize,l.sliceSize];if(n.shouldExecuteOnCPU([i,a])||i.dtype===`string`){let e=n.bufferSync(p),t=zH(n.bufferSync(f),e,m);return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(l.outputShape,t.dtype,t.values)}let h=new xJ(f.shape,m),g=n.runWebGLProgram(h,[f,p],f.dtype);d.push(g);let _=$({inputs:{x:g},backend:n,attrs:{shape:l.outputShape}});return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),_}var wJ={kernelName:ac,backendName:`webgl`,kernelFunc:CJ},TJ={kernelName:sc,backendName:`webgl`,kernelFunc:TW({opSnippet:`return float(a > b);`,packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:BH,dtype:`bool`})},EJ={kernelName:cc,backendName:`webgl`,kernelFunc:TW({opSnippet:`return float(a >= b);`,packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:`bool`,cpuKernelImpl:VH})};function DJ(e){let{inputs:t,backend:n}=e,{input:r}=t;return Zq(r,!0,n)}var OJ={kernelName:uc,backendName:`webgl`,kernelFunc:DJ},kJ={kernelName:fc,backendName:`webgl`,kernelFunc:wW({opSnippet:`return float(!isnan(x) && !isinf(x));`,dtype:`bool`})},AJ={kernelName:pc,backendName:`webgl`,kernelFunc:wW({opSnippet:`return float(isinf(x));`,dtype:`bool`})},jJ={kernelName:mc,backendName:`webgl`,kernelFunc:wW({opSnippet:`return float(isnan(x));`,dtype:`bool`})},MJ={kernelName:gc,backendName:`webgl`,kernelFunc:TW({opSnippet:`return float(a < b);`,packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:HH,dtype:`bool`})},NJ={kernelName:_c,backendName:`webgl`,kernelFunc:TW({opSnippet:`return float(a <= b);`,packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:UH,dtype:`bool`})};function PJ(e){let{backend:t,attrs:n}=e,{start:r,stop:i,num:a}=n,o=WH(r,i,a);return t.makeTensorInfo([o.length],`float32`,o)}var FJ={kernelName:vc,backendName:`webgl`,kernelFunc:PJ},IJ={kernelName:`Log`,backendName:`webgl`,kernelFunc:wW({opSnippet:CW+`
  return x < 0.0 ? 0./0. : log(x);
`,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:GH})},LJ={kernelName:yc,backendName:`webgl`,kernelFunc:wW({opSnippet:CW+`
  return log(1.0 + x);
`})},RJ={kernelName:bc,backendName:`webgl`,kernelFunc:TW({opSnippet:`return float(a >= 1.0 && b >= 1.0);`,packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:`bool`})},zJ={kernelName:xc,backendName:`webgl`,kernelFunc:wW({opSnippet:`return float(!(x >= 1.0));`})},BJ={kernelName:Sc,backendName:`webgl`,kernelFunc:TW({opSnippet:`return float(a >= 1.0 || b >= 1.0);`,packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:`bool`})},VJ=class{constructor(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[];let a=t,o=e[3]-1;this.outputShape=e;let s,c=`float(${n}) + float(${r}) * sum`;s=i===.5?`inversesqrt(${c})`:i===1?`1.0/(${c})`:`exp(log(${c}) * float(-${i}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${a}; j <= ${a}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${o}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${s};
        setOutput(val);
      }
    `}},HJ=class{constructor(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let a=t,o=e[3]-1;this.outputShape=e;let s,c=`float(${n}) + float(${r}) * sum`;s=i===.5?`inversesqrt(${c})`:i===1?`1.0/(${c})`:`exp(log(${c}) * float(-${i}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${a};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${a}; j <= ${a}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${o}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${s};
        setOutput(result);
      }
    `}},UJ={kernelName:`LRN`,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{depthRadius:a,bias:o,alpha:s,beta:c}=r,l=j().getBool(`WEBGL_PACK_NORMALIZATION`)?new HJ(i.shape,a,o,s,c):new VJ(i.shape,a,o,s,c);return n.runWebGLProgram(l,[i],i.dtype)}},WJ=class{constructor(e,t,n,r,i){this.variableNames=[`inputImage`,`outputImage`,`dy`],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=i,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${r}) * norm + float(${n});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${r})
                * float(${i})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${i});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}},GJ={kernelName:wc,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i,y:a,dy:o}=t,{depthRadius:s,bias:c,alpha:l,beta:u}=r,d=new WJ(i.shape,s,c,l,u);return n.runWebGLProgram(d,[i,a,o],i.dtype)}};function KJ(e,t,n,r){let i=k(t),a=k(e.shape)/i,o=$({inputs:{x:e},attrs:{shape:[a,i]},backend:r}),s=RW(o,e.dtype,`max`,r),c=$({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(s),c}function qJ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reductionIndices:a,keepDims:o}=r,s=i.shape.length,c=bo(a,i.shape),l=c,u=yh(l,s),d=u!=null,f=n.shouldExecuteOnCPU([i]),p=i;if(d){if(f){let e=n.texData.get(p.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=i.shape[u[e]];let r=bU(e,i.shape,i.dtype,u,t);p=n.makeTensorInfo(t,i.dtype);let a=n.texData.get(p.dataId);a.values=r}else p=HW(i,u,n);l=xh(l.length,s)}vh(`max`,l,s);let[m,h]=gh(p.shape,l),g=m;o&&(g=_h(m,c));let _;if(f){let e=n.texData.get(p.dataId).values,t=KH(e,k(h),g,i.dtype);_=n.makeTensorInfo(g,i.dtype);let r=n.texData.get(_.dataId);r.values=t}else _=KJ(p,h,g,n);return d&&n.disposeIntermediateTensorInfo(p),_}var JJ={kernelName:`Max`,backendName:`webgl`,kernelFunc:qJ},YJ={kernelName:Tc,backendName:`webgl`,kernelFunc:TW({opSnippet:sW+`
  return max(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+lW+`
  return result;
`,cpuKernelImpl:qH})};function XJ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;UB(i,`maxPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;O(Dp(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=pp(i.shape,a,o,1,s,c);if(l.filterWidth===1&&l.filterHeight===1&&mo(l.inShape,l.outShape))return dW({inputs:{x:i},backend:n});let u=new EG(l,`max`,!1);return n.runWebGLProgram(u,[i],i.dtype)}var ZJ={kernelName:Ec,backendName:`webgl`,kernelFunc:XJ};function QJ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dataFormat:c,dimRoundingMode:l}=r,u=new DG(mp(i.shape,a,o,[1,1,1],s,l,c),`max`,!1);return n.runWebGLProgram(u,[i],i.dtype)}var $J={kernelName:Oc,backendName:`webgl`,kernelFunc:QJ},eY=class{constructor(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;let t=e.strideHeight,n=e.strideWidth,r=e.dilationHeight,i=e.effectiveFilterHeight,a=e.effectiveFilterWidth,o=i-1-e.padInfo.top,s=a-1-e.padInfo.left,c=i*a-1;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${i};
          wR += ${r}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${a}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${a} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}},tY=class{constructor(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.dilationDepth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterDepth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=s-1-e.padInfo.front,d=c-1-e.padInfo.top,f=l-1-e.padInfo.left,p=s*c*l-1;this.userCode=`
      const ivec3 pads = ivec3(${u}, ${d}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${s};
           wD += ${i}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${a}) {
            float dyR = float(dyRCorner + wR) / ${n}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${l};
                wC += ${o}) {
              float dyC = float(dyCCorner + wC) / ${r}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${p} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${l} +
                  wR * ${l} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function nY(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a,{filterSize:s,strides:c,pad:l,dimRoundingMode:u}=r,d=mp(o.shape,s,c,[1,1,1],l,u),f=new DG(d,`max`,!0),p=n.runWebGLProgram(f,[o],o.dtype),m=new tY(d),h=n.runWebGLProgram(m,[i,p],o.dtype);return n.disposeIntermediateTensorInfo(p),h}var rY={kernelName:kc,backendName:`webgl`,kernelFunc:nY};function iY(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a,output:o}=t,s=a;UB([a,o],`maxPoolGrad`);let{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=r,f=pp(s.shape,c,l,1,u,d),p=new EG(f,`max`,!0),m=n.runWebGLProgram(p,[s],s.dtype),h=new eY(f),g=n.runWebGLProgram(h,[i,m],s.dtype);return n.disposeIntermediateTensorInfo(m),g}var aY={kernelName:Dc,backendName:`webgl`,kernelFunc:iY};function oY(e,t,n,r){let i=new EG(n,`max`,!1),a=r.runWebGLProgram(i,[e],`float32`);return i=new EG(n,`max`,!0,!0,t),[a,r.runWebGLProgram(i,[e],`float32`)]}var sY={kernelName:Ac,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{filterSize:i,strides:a,pad:o,includeBatchInIndex:s}=t,c=n;O(r.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`);let l=[1,1];O(Dp(a,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);let[u,d]=oY(r,s,pp(r.shape,i,a,l,o),c);return[u,d]}};function cY(e,t,n,r){let i=k(t),a=k(e.shape)/i,o=$({inputs:{x:e},attrs:{shape:[a,i]},backend:r}),s=RW(o,`float32`,`mean`,r),c=$({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(s),c}var lY={kernelName:jc,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{keepDims:i,axis:a}=t,o=n,s=r.shape.length,c=bo(a,r.shape),l=c,u=yh(l,s),d=u!=null,f=o.shouldExecuteOnCPU([r]),p=[],m=r;if(d){if(f){let e=o.texData.get(m.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=r.shape[u[e]];let n=bU(e,r.shape,r.dtype,u,t);m=o.makeTensorInfo(t,r.dtype);let i=o.texData.get(m.dataId);i.values=n}else m=HW(r,u,o);p.push(m),l=xh(l.length,s)}vh(`sum`,l,s);let[h,g]=gh(m.shape,l),_=h;i&&(_=_h(h,c));let v=cY(m,g,_,o);for(let e of p)o.disposeIntermediateTensorInfo(e);return v}};function uY(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=bo(a,i.shape),l=c,u=yh(l,s),d=i;u!=null&&(d=KW({inputs:{x:i},backend:n,attrs:{perm:u}}),l=xh(l.length,i.shape.length)),vh(`min`,l,s);let[f,p]=gh(d.shape,l),m=k(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=RW(h,h.dtype,`min`,n),_;if(o){let e=_h(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var dY={kernelName:`Min`,backendName:`webgl`,kernelFunc:uY},fY={kernelName:Mc,backendName:`webgl`,kernelFunc:TW({opSnippet:sW+`
  return min(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+lW+`
  return result;
`,cpuKernelImpl:JH})},pY=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=BV(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r),c=n===`reflect`?0:1;if(r===1){this.userCode=`
        int start = ${a};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${i} start = ${i}(${a});
      ${i} end = ${i}(${o});

      void main() {
        ${i} outC = getOutputCoords();
        for (int i = 0; i < ${r}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${i} coords = outC - start;
        setOutput(getX(${s}));
      }
    `}},mY=class{constructor(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=BV(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=CU(`rc`,r),c=CU(`source`,r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,u=r===1?`source`:`vec2(${c.slice(-2).join()})`,d=n===`reflect`?0:1,f=``;if(r===1){let e=`
        ${i} source = rc;
        if (source < start) {
          source = start * 2 - source - ${d};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${d};
        }
        source -= start;
      `;f=`
        ${i} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${c.join()}), ${u});
        ${s[r-1]} += 1;
        if(${l}) {
          ${e}
          result[1] = getChannel(getX(${c.join()}), ${u});
        }
      `}else{let e=`
        ${i} source = rc;
        ${i} lt = ${i}(lessThan(source, start));
        ${i} gte = ${i}(greaterThanEqual(source, end));
        ${i} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${d}) +
                gte * ((end - 1) * 2 - source + ${d});
        source -= start;
      `;f=`
        ${i} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${c.join()}), ${u});
        ${s[r-1]} += 1;
        if(${l}) {
          ${e}
          result[1] = getChannel(getX(${c.join()}), ${u});
        }
        rc = outputLoc;
        ${s[r-2]} += 1;
        if(${s[r-2]} < ${this.outputShape[r-2]}) {
          ${e}
          result[2] = getChannel(getX(${c.join()}), ${u});
          ${s[r-1]} += 1;
          if(${l}) {
            ${e}
            result[3] = getChannel(getX(${c.join()}), ${u});
          }
        }
      `}this.userCode=`
      const ${i} start = ${i}(${a});
      const ${i} end = ${i}(${o});

      void main() {
        ${i} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}},hY={kernelName:Nc,backendName:`webgl`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r}=e,{paddings:i,mode:a}=n,o=j().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new mY(r.shape,i,a):new pY(r.shape,i,a);return t.runWebGLProgram(o,[r],r.dtype)}},gY={kernelName:`Mod`,backendName:`webgl`,kernelFunc:TW({opSnippet:`if (b == 0.0) return NAN;
  return mod(a, b);`,packedOpSnippet:`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+lW+`
  return result;
`})},_Y=class{constructor(e,t,n){this.variableNames=[`probs`],this.customUniforms=[{name:`seed`,type:`float`}],this.outputShape=[e,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}},vY=TW({opSnippet:`
if (a == b) {
  return 1.0;
};
return a / b;`,packedOpSnippet:`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,checkOutOfBounds:!0}),yY={kernelName:Js,backendName:`webgl`,kernelFunc:vY},bY=`return a - b;`,xY=TW({opSnippet:bY,packedOpSnippet:bY,supportsComplex:!0,cpuKernelImpl:_U}),SY={kernelName:`Sub`,backendName:`webgl`,kernelFunc:xY};function CY(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{dim:a}=r,o=bo([a],i.shape),s=qJ({inputs:{x:i},backend:n,attrs:{reductionIndices:o,keepDims:!1}}),c=_h(s.shape,o),l=$({inputs:{x:s},backend:n,attrs:{shape:c}}),u=xY({inputs:{a:i,b:l},backend:n}),d=Wq({inputs:{x:u},backend:n}),f=WW({inputs:{x:d},backend:n,attrs:{axis:o,keepDims:!1}}),p=$({inputs:{x:f},backend:n,attrs:{shape:c}}),m=vY({inputs:{a:d,b:p},backend:n});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),m}var wY={kernelName:xl,backendName:`webgl`,kernelFunc:CY};function TY(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{numSamples:a,seed:o,normalized:s}=r,c=s?i:CY({inputs:{logits:i},backend:n,attrs:{dim:i.shape.length-1}}),l=c.shape[0],u=c.shape[1],d=new _Y(l,u,a),f=[[o]],p=n.runWebGLProgram(d,[c],`int32`,f);return s||n.disposeIntermediateTensorInfo(c),p}var EY={kernelName:Pc,backendName:`webgl`,kernelFunc:TY},DY=IU+`
  return -x;
`,OY=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function kY(e){let{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])){let[e,t]=XH(n.texData.get(r.dataId).values,r.shape,r.dtype);return n.makeTensorInfo(t,r.dtype,e)}let i;return i=j().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)?new YU(r.shape,OY):new FU(r.shape,DY),n.runWebGLProgram(i,[r],r.dtype)}var AY={kernelName:`Neg`,backendName:`webgl`,kernelFunc:kY},jY=Hy;function MY(e){Yl(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c}=r,{selectedIndices:l}=jY(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c);return n.makeTensorInfo([l.length],`int32`,new Int32Array(l))}var NY={kernelName:Lc,backendName:`webgl`,kernelFunc:MY},PY=Uy;function FY(e){Yl(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,padToMaxOutputSize:l}=r,{selectedIndices:u,validOutputs:d}=PY(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c,l);return[n.makeTensorInfo([u.length],`int32`,new Int32Array(u)),n.makeTensorInfo([],`int32`,new Int32Array([d]))]}var IY={kernelName:Rc,backendName:`webgl`,kernelFunc:FY},LY=Wy;function RY(e){Yl(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,softNmsSigma:l}=r,{selectedIndices:u,selectedScores:d}=LY(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c,l);return[n.makeTensorInfo([u.length],`int32`,new Int32Array(u)),n.makeTensorInfo([d.length],`float32`,new Float32Array(d))]}var zY={kernelName:zc,backendName:`webgl`,kernelFunc:RY},BY=class{constructor(e,t,n,r){this.variableNames=[`indices`],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${n}),
                      float(index == coords.y)));
      }
    `}},VY={kernelName:Vc,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{indices:i}=t,{dtype:a,depth:o,onValue:s,offValue:c}=r,l=k(i.shape),u=new BY(l,o,s,c),d=$({inputs:{x:i},backend:n,attrs:{shape:[l]}}),f=n.runWebGLProgram(u,[d],a);n.disposeIntermediateTensorInfo(d);let p=[...i.shape,o],m=$({inputs:{x:f},backend:n,attrs:{shape:p}});return n.disposeIntermediateTensorInfo(f),m}};function HY(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`complex64`){let e=sK({inputs:{input:r},backend:n}),t=HY({inputs:{x:e},backend:n}),i=EK({inputs:{input:r},backend:n}),a=HY({inputs:{x:i},backend:n}),o=pW({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}return tJ({attrs:{shape:r.shape,dtype:r.dtype,value:r.dtype===`string`?``:0},backend:n})}var UY={kernelName:Hl,backendName:`webgl`,kernelFunc:HY};function WY(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`onesLike is not supported under string dtype`);if(r.dtype===`complex64`){let e=sK({inputs:{input:r},backend:n}),t=WY({inputs:{x:e},backend:n}),i=EK({inputs:{input:r},backend:n}),a=HY({inputs:{x:i},backend:n}),o=pW({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}return tJ({attrs:{shape:r.shape,dtype:r.dtype,value:1},backend:n})}var GY={kernelName:Bc,backendName:`webgl`,kernelFunc:WY};function KY(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r;if(t.length===1)return Kq({inputs:{input:t[0]},backend:n,attrs:{dim:i}});let a=t[0].shape,o=t[0].dtype;t.forEach(e=>{fo(a,e.shape,`All tensors passed to stack must have matching shapes`),O(o===e.dtype,()=>`All tensors passed to stack must have matching dtypes`)});let s=[],c=AK({inputs:t.map(e=>{let t=Kq({inputs:{input:e},backend:n,attrs:{dim:i}});return s.push(t),t}),backend:n,attrs:{axis:i}});return s.forEach(e=>n.disposeIntermediateTensorInfo(e)),c}var qY={kernelName:Hc,backendName:`webgl`,kernelFunc:KY},JY=class{constructor(e,t,n){this.variableNames=[`x`],this.customUniforms=[{name:`value`,type:`float`}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=BV(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r);if(r===1){this.userCode=`
        int start = ${a};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${i} start = ${i}(${a});
      ${i} end = ${i}(${o});

      void main() {
        ${i} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${i} coords = outC - start;
          setOutput(getX(${s}));
        }
      }
    `}},YY=class{constructor(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`value`,type:`float`}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=BV(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=CU(`rc`,r),c=CU(`source`,r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,u=r===1?`source`:`vec2(${c.slice(-2).join()})`,d=[`${i} rc = outputLoc;`,`${s[r-1]} += 1;
       if(${l}) {
      `,r===1?``:`}
       rc = outputLoc;
       ${s[r-2]} += 1;
       if(${s[r-2]} < ${this.outputShape[r-2]}) {`,r===1?``:`  ${s[r-1]} += 1;
         if(${l}) {`],f=r===1?`rc < start || rc >= end`:`any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))`,p=``;for(let e=0,t=r===1?2:4;e<t;e++)p+=`
        ${d[e]}
        if (${f}) {
          result[${e}] = float(value);
        } else {
          ${i} source = rc - start;
          result[${e}] = getChannel(getX(${c.join()}), ${u});
        }
      `;p+=r===1?`} `:`}}`,this.userCode=`
      const ${i} start = ${i}(${a});
      const ${i} end = ${i}(${o});

      void main() {
        ${i} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}},XY=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,constantValue:o}=r;if(k(i.shape)===0)return tJ({backend:n,attrs:{shape:a.map((e,t)=>e[0]+i.shape[t]+e[1]),value:o,dtype:i.dtype}});let s=j().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new YY(i.shape,a,o):new JY(i.shape,a,o),c=[[o]];return n.runWebGLProgram(s,[i],i.dtype,c)},ZY={kernelName:Uc,backendName:`webgl`,kernelFunc:XY},QY={kernelName:`Pow`,backendName:`webgl`,kernelFunc:TW({opSnippet:`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,packedOpSnippet:`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+lW+`
  return result;
`})};function $Y(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=[],l=bo(a,i.shape),u=l,d=yh(u,s),f=i;d!=null&&(f=KW({inputs:{x:i},backend:n,attrs:{perm:d}}),u=xh(u.length,s),c.push(f)),vh(`prod`,u,s);let p;if(n.shouldExecuteOnCPU([f])){let e=n.texData.get(f.dataId).values,{outVals:t,outShape:r,outDtype:i}=QH(f.shape,f.dtype,e,u);p=n.makeTensorInfo(r,i,t)}else{let[e,t]=gh(f.shape,u),r=k(t),a=$({inputs:{x:f},backend:n,attrs:{shape:[-1,r]}}),o=RW(a,od(i.dtype),`prod`,n);p=$({inputs:{x:o},backend:n,attrs:{shape:e}}),c.push(a),c.push(o)}if(o){c.push(p);let e=_h(p.shape,l);p=$({inputs:{x:p},backend:n,attrs:{shape:e}})}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var eX={kernelName:Gc,backendName:`webgl`,kernelFunc:$Y};function tX(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:i,paramsDenseValues:a,indices:o}=t,{outputRaggedRank:s}=r,c=i.map(e=>n.readSync(e.dataId)),l=i.map(e=>e.shape),u=n.readSync(a.dataId),d=n.readSync(o.dataId),[f,p,m]=$H(c,l,u,a.shape,a.dtype,d,o.shape,s),h=f.map(e=>n.makeTensorInfo([e.length],`int32`,e)),g=n.makeTensorInfo(m,a.dtype,p);return h.concat([g])}var nX={kernelName:Kc,backendName:`webgl`,kernelFunc:tX};function rX(e){let{inputs:t,backend:n}=e,{starts:r,limits:i,deltas:a}=t,o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=eU(o,r.shape,r.dtype,s,i.shape,c,a.shape);return[n.makeTensorInfo([l.length],`int32`,l),n.makeTensorInfo([u.length],r.dtype,u)]}var iX={kernelName:qc,backendName:`webgl`,kernelFunc:rX};function aX(e){let{inputs:t,backend:n,attrs:r}=e,{shape:i,values:a,defaultValue:o,rowPartitionTensors:s}=t,{rowPartitionTypes:c}=r,l=n.readSync(i.dataId),u=n.readSync(a.dataId),d=n.readSync(o.dataId),f=s.map(e=>n.readSync(e.dataId)),p=s.map(e=>e.shape),[m,h]=tU(l,i.shape,u,a.shape,a.dtype,d,o.shape,f,p,c);return n.makeTensorInfo(m,a.dtype,h)}var oX={kernelName:Jc,backendName:`webgl`,kernelFunc:aX},sX=e=>{let{backend:t,attrs:n}=e,{start:r,stop:i,step:a,dtype:o}=n,s=nU(r,i,a,o);return t.makeTensorInfo([s.length],o,s)},cX={kernelName:Yc,backendName:`webgl`,kernelFunc:sX},lX={kernelName:Zc,backendName:`webgl`,kernelFunc:wW({opSnippet:`return 1.0 / x;`})},uX={kernelName:Qc,backendName:`webgl`,kernelFunc:wW({opSnippet:IU+`
  return (x < 0.0) ? 0.0 : x;
`,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`})},dX={kernelName:il,backendName:`webgl`,kernelFunc:wW({opSnippet:IU+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`})},fX=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d;d=i?`(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)`:`vec2(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/u[0]},
          ${l[1]/u[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}},pX=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d;d=i?`(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)`:`vec3(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/u[0]},
          ${l[1]/u[1]},
          ${l[1]/u[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${n-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}};function mX(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r,[c,l]=s,u=j().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new pX(i.shape,c,l,a,o):new fX(i.shape,c,l,a,o);return n.runWebGLProgram(u,[i],`float32`)}var hX={kernelName:nl,backendName:`webgl`,kernelFunc:mX},gX=class{constructor(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t;let[,r,i]=t,[,a,o]=e,s=[n&&a>1?r-1:r,n&&o>1?i-1:i],c=[n&&a>1?a-1:a,n&&o>1?o-1:o],l=s[0]/c[0],u=s[1]/c[1],d=1/l,f=1/u,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${u});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${i-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function _X(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r,s=new gX(a.shape,i.shape,o);return n.runWebGLProgram(s,[a],a.dtype)}var vX={kernelName:rl,backendName:`webgl`,kernelFunc:_X},yX=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?`0.5`:`0.0`,f;f=i?`max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))`:`vec2(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/u[0]},
          ${l[1]/u[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}},bX=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?`0.5`:`0.0`,f;f=i?`max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))`:`vec3(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/u[0]},
          ${l[1]/u[1]},
          ${l[1]/u[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${n-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}};function xX(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r,[c,l]=s,u=j().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new bX(i.shape,c,l,a,o):new yX(i.shape,c,l,a,o);return n.runWebGLProgram(u,[i],i.dtype)}var SX={kernelName:el,backendName:`webgl`,kernelFunc:xX},CX=class{constructor(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t;let[,r,i]=t,[,a,o]=e,s=[n&&a>1?r-1:r,n&&o>1?i-1:i],c=[n&&a>1?a-1:a,n&&o>1?o-1:o],l=s[0]/c[0],u=s[1]/c[1],d=1/l,f=1/u,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${u});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float sourceFracRow =
              float(${s[0]}) *
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${s[1]}) *
                  (float(dyC) / float(${c[1]}));

            int sourceNearestRow = int(min(
                float(int(${r}) - 1),
                ${n} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${i}) - 1),
                ${n} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function wX(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r,s=new CX(a.shape,i.shape,o);return n.runWebGLProgram(s,[a],a.dtype)}var TX={kernelName:tl,backendName:`webgl`,kernelFunc:wX},EX=class{constructor(e,t){this.variableNames=[`x`];let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);if(this.outputShape=e,n===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}let r=n=>t.indexOf(n)!==-1&&e[n]!==1?`${e[n]} - coords[${n}] - 1`:`coords[${n}]`,i=e.map((e,t)=>r(t)).join(`,`),a=BV(n);this.userCode=`
      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${i}));
      }
    `}},DX=class{constructor(e,t){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0;let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);this.outputShape=e;let r=CU(`rc`,n),i=`${r[n-1]} + 1 < ${this.outputShape[n-1]}`,a=`${r[n-2]} + 1 < ${this.outputShape[n-2]}`,o=BV(n);this.userCode=n===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${i}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          ${o} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${s(r.slice())};
          if(${i}){
            result.g = ${c(r.slice())};
          }
          if(${a}) {
            result.b = ${l(r.slice())};
            if(${i}) {
              result.a = ${u(r.slice())};
            }
          }
          setOutput(result);
        }
    `;function s(e){return d(e)}function c(e){return e[n-1]=`(`+e[n-1]+` + 1)`,d(e)}function l(e){return e[n-2]=`(`+e[n-2]+` + 1)`,d(e)}function u(e){return e[n-1]=`(`+e[n-1]+` + 1)`,e[n-2]=`(`+e[n-2]+` + 1)`,d(e)}function d(t){let n=e.map((e,n)=>f(n,t));return`getChannel(getX(${n.join(`,`)}), vec2(${n.slice(-2).join(`,`)}))`}function f(n,r){return t.indexOf(n)!==-1&&e[n]!==1?`${e[n]} - ${r[n]} - 1`:`${r[n]}`}}};function OX(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dims:a}=r,o=i.shape.length,s=bo(a,i.shape);if(o===0)return dW({inputs:{x:i},backend:n});let c=j().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new DX(i.shape,s):new EX(i.shape,s);return n.runWebGLProgram(c,[i],i.dtype)}var kX={kernelName:al,backendName:`webgl`,kernelFunc:OX},AX=class{constructor(e,t){this.variableNames=[`Image`],this.outputShape=[],this.customUniforms=[{name:`params`,type:`vec4`}];let n=e[1],r=e[2];this.outputShape=e;let i=``;i=typeof t==`number`?`float outputValue = ${t.toFixed(2)};`:`
        vec3 fill = vec3(${t.join(`,`)});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${i}
          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${n}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}},jX={kernelName:Gl,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,{radians:i,fillValue:a,center:o}=t,s=n,c=new AX(r.shape,a),[l,u]=gx(o,r.shape[1],r.shape[2]),d=[[l,u,Math.sin(i),Math.cos(i)]];return s.runWebGLProgram(c,[r],r.dtype,d)}},MX={kernelName:ol,backendName:`webgl`,kernelFunc:wW({opSnippet:`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`})},NX={kernelName:sl,backendName:`webgl`,kernelFunc:wW({opSnippet:`return inversesqrt(x);`,cpuKernelImpl:rU})},PX=class{constructor(e,t,n,r,i,a,o=!0,s=!1){this.variableNames=[`updates`,`indices`,`defaultValue`],this.outputShape=a;let c=BV(i.length),l=BV(a.length),u=``;n===1?u=`i`:n===2&&(u=`i, j`);let d=`getIndices(${u})`,f=``;r===1?f=`i`:r===2&&(f=`i, coords[1]`);let p=`getUpdates(${f})`,m=``;s&&(m=`coords[0], coords[1]`);let h=`getDefaultValue(${m})`,g=t>1?`strides[j]`:`strides`;this.userCode=`
        ${c} strides = ${c}(${i});

        void main() {
          ${l} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${d});
              flattenedIndex += index * ${g};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${p};
              found = true;
            }
          }
          setOutput(mix(${h}, sum, float(found)));
        }
      `}},FX=class{constructor(e,t,n,r,i,a,o=!0,s=!1){this.variableNames=[`updates`,`indices`,`defaultValue`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=a;let c=BV(i.length),l=BV(a.length),u=``;n===1?u=`i`:n===2&&(u=`i, j`);let d=`getIndices(${u})`,f=``;r===1?f=`i`:r===2&&(f=`i, coords[1]`);let p=`getUpdates(${f})`,m=``;s&&(m=`coords[0], coords[1]`);let h=`getDefaultValue(${m})`,g=t>1?`strides[j]`:`strides`,_=t>1?`strides[j + 1]`:`strides`;this.userCode=`
        ${c} strides = ${c}(${i});

        void main() {
          ${l} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${d});
              flattenedIndex += index.xz * ${g};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${_};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${p};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${h}, sum, found));
        }
      `}};function IX(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i,updates:a}=t,{shape:o}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=qv(a,i,o),f=[d/l,l];if(d===0)return n.makeTensorInfo(o,i.dtype);let p=$({inputs:{x:i},backend:n,attrs:{shape:[c,s]}}),m=$({inputs:{x:a},backend:n,attrs:{shape:[c,l]}}),h=n.makeTensorInfo([],`float32`,new Float32Array([0])),g;g=j().getBool(`WEBGL_PACK`)?new FX(c,s,p.shape.length,m.shape.length,u,f):new PX(c,s,p.shape.length,m.shape.length,u,f);let _=n.runWebGLProgram(g,[m,p,h],m.dtype),v=$({inputs:{x:_},backend:n,attrs:{shape:o}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(_),n.disposeIntermediateTensorInfo(h),v}var LX={kernelName:cl,backendName:`webgl`,kernelFunc:IX},RX=class{constructor(e,t,n,r){this.variableNames=[`sortedSequence`,`values`],this.customUniforms=[{name:`numInputs`,type:`int`}],this.outputShape=[e,n];let i=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,a=j().getNumber(`WEBGL_VERSION`)===2?`while (left < right) {`:i,o=r===`left`?`<`:`<=`;this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${o} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}};function zX(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:i,values:a}=t,{side:o}=r,s=new RX(i.shape[0],i.shape[1],a.shape[1],o),c=[[i.shape[1]]];return n.runWebGLProgram(s,[i,a],`int32`,c)}var BX={kernelName:ul,backendName:`webgl`,kernelFunc:zX},VX=class{constructor(e,t,n){this.variableNames=[`c`,`a`,`b`],this.outputShape=t;let r,i;if(n>4)throw Error(`Where for rank ${n} is not yet supported`);if(n===1)i=`resRC`,r=`resRC`;else{let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],a=[],o=[];for(let r=0;r<t.length;r++)o.push(`${n[r]}`),r<e&&a.push(`${n[r]}`);r=a.join(),i=o.join()}let a=BV(n);this.userCode=`
      void main() {
        ${a} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${i}));
        } else {
          setOutput(getB(${i}));
        }
      }
    `}};function HX(e){let{inputs:t,backend:n}=e,{condition:r,t:i,e:a}=t,o=new VX(r.shape.length,i.shape,i.shape.length);return n.runWebGLProgram(o,[r,i,a],ad(i.dtype,a.dtype))}var UX={kernelName:dl,backendName:`webgl`,kernelFunc:HX},WX={kernelName:fl,backendName:`webgl`,kernelFunc:wW({opSnippet:`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${Sx};
  float scale = ${Cx};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`})},GX={kernelName:gl,backendName:`webgl`,kernelFunc:wW({opSnippet:CW+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:aU})},KX={kernelName:hl,backendName:`webgl`,kernelFunc:wW({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`})},qX={kernelName:`Sin`,backendName:`webgl`,kernelFunc:wW({opSnippet:CW+`
  return sin(x);
`,packedOpSnippet:`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${lW}
  return result;
`})},JX={kernelName:ml,backendName:`webgl`,kernelFunc:wW({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`})},YX={kernelName:_l,backendName:`webgl`,kernelFunc:wW({opSnippet:`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`})},XX={kernelName:yl,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,paddings:o}=r;O(i.shape.length<=4,()=>`spaceToBatchND for rank > 4 with a WebGL backend not implemented yet`);let s=a.reduce((e,t)=>e*t),c=[[0,0]];c.push(...o);for(let e=1+a.length;e<i.shape.length;++e)c.push([0,0]);let l=[],u=XY({inputs:{x:i},backend:n,attrs:{paddings:c,constantValue:0}}),d=_x(u.shape,a,s,!1),f=vx(d.length,a.length,!1),p=yx(u.shape,a,s,!1),m=$({inputs:{x:u},backend:n,attrs:{shape:d}}),h=KW({inputs:{x:m},backend:n,attrs:{perm:f}}),g=$({inputs:{x:h},backend:n,attrs:{shape:p}});return l.push(u),l.push(m),l.push(h),l.forEach(e=>n.disposeIntermediateTensorInfo(e)),g}};function ZX(e){let{inputs:t,backend:n}=e,{indices:r,values:i,denseShape:a,defaultValue:o}=t;if(a.shape.length!==1)throw Error(`Dense shape must be a vector, saw:
         ${a.shape}`);if(r.shape.length!==2)throw Error(`Indices must be a matrix, saw:
         ${r.shape}`);if(i.shape.length!==1)throw Error(`Values must be a vector, saw:
         ${i.shape}`);if(o.shape.length!==0)throw Error(`Default value must be a scalar, saw:
        ${o.shape}`);let s=n.readSync(r.dataId),c=n.readSync(i.dataId),l=n.readSync(a.dataId),u=n.readSync(o.dataId)[0],[d,f,p,m,h]=cU(s,r.shape,r.dtype,c,i.dtype,l,u);return[n.makeTensorInfo(f,r.dtype,d),n.makeTensorInfo([f[0]],i.dtype,p),n.makeTensorInfo([m.length],`bool`,new Uint8Array(m.map(e=>Number(e)))),n.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}var QX={kernelName:Sl,backendName:`webgl`,kernelFunc:ZX};function $X(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:i,newShape:a}=t;if(r.shape.length!==2)throw Error(`Input indices should be a matrix but received shape ${r.shape}`);if(i.shape.length!==1)throw Error(`Input shape should be a vector but received shape ${i.shape}`);if(a.shape.length!==1)throw Error(`Target shape should be a vector but received shape ${a.shape}`);let o=Array.from(n.readSync(i.dataId)),s=n.readSync(r.dataId),c=Array.from(n.readSync(a.dataId)),[l,u,d]=lU(s,r.shape,r.dtype,o,c);return[n.makeTensorInfo(u,r.dtype,l),n.makeTensorInfo([d.length],a.dtype,new Int32Array(d))]}var eZ={kernelName:Cl,backendName:`webgl`,kernelFunc:$X};function tZ(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
              ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
              ${a.shape}`);let o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=uU(o,r.shape,r.dtype,s,c,!0);return n.makeTensorInfo(u,r.dtype,l)}var nZ={kernelName:wl,backendName:`webgl`,kernelFunc:tZ};function rZ(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
             ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
             ${a.shape}`);let o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=uU(o,r.shape,r.dtype,s,c);return n.makeTensorInfo(u,r.dtype,l)}var iZ={kernelName:Tl,backendName:`webgl`,kernelFunc:rZ};function aZ(e){let{inputs:t,backend:n,attrs:r}=e,{sparseIndices:i,sparseValues:a,defaultValue:o}=t,{outputShape:s}=r,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:f}=qv(a,i,s);if(a.dtype===`string`){let e=iU(n.bufferSync(i),n.bufferSync(a),s,f,u,l,c,d,ku(n.readSync(o.dataId)[0]),!1);return n.makeTensorInfo(s,e.dtype,e.values)}let p=new PX(l,c,i.shape.length,a.shape.length,d,[f,1],!1),m=n.runWebGLProgram(p,[a,i,o],a.dtype),h=$({inputs:{x:m},backend:n,attrs:{shape:s}});return n.disposeIntermediateTensorInfo(m),h}var oZ={kernelName:El,backendName:`webgl`,kernelFunc:aZ};function sZ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{numOrSizeSplits:a,axis:o}=r,s=bo(o,i.shape)[0],c=Jx(i,a,s),l=i.shape.length,u=Array(l).fill(0),d=i.shape.slice();return c.map(e=>{let t=[...d];t[s]=e;let r=JG({inputs:{x:i},backend:n,attrs:{begin:u,size:t}});return u[s]+=e,r})}var cZ={kernelName:bl,backendName:`webgl`,kernelFunc:sZ},lZ=`return sqrt(x);`,uZ={kernelName:vl,backendName:`webgl`,kernelFunc:wW({opSnippet:lZ,packedOpSnippet:lZ,cpuKernelImpl:dU})},dZ={kernelName:Ol,backendName:`webgl`,kernelFunc:wW({opSnippet:`return x * x;`})},fZ=`return (a - b) * (a - b);`,pZ={kernelName:Dl,backendName:`webgl`,kernelFunc:TW({opSnippet:fZ,packedOpSnippet:fZ})};function mZ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;if(i.dtype!==`string`)throw Error(`Input must be of datatype string`);let a=fU(fS(n.readSync(i.dataId)),`string`,r);return n.makeTensorInfo(i.shape,`string`,a)}var hZ={kernelName:kl,backendName:`webgl`,kernelFunc:mZ};function gZ({inputs:e,attrs:t,backend:n}){let{x:r}=e,i=IU+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,a=new FU(r.shape,i);return n.runWebGLProgram(a,[r],r.dtype)}var _Z={kernelName:Ul,backendName:`webgl`,kernelFunc:gZ},vZ=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=n;let r=n.length,i=BV(n.length),a=BV(n.length),o=``;if(r===1)o=`coords * strides + begin`;else{let e=0;o=n.map((t,r)=>(e++,n.length===1?`coords * strides[${r}] + begin[${r}]`:`coords[${e-1}] * strides[${r}] + begin[${r}]`)).join(`,`)}this.userCode=`
      ${i} begin = ${i}(${e});
      ${i} strides = ${i}(${t});

      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}};function yZ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,end:o,strides:s,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:f}=r,{finalShapeSparse:p,finalShape:m,isIdentity:h,sliceDim0:g,isSimpleSlice:_,begin:v,end:y,strides:b}=nx(i.shape,a,o,s,c,l,u,d,f),x;if(h)x=$({inputs:{x:i},backend:n,attrs:{shape:m}});else if(g||_){O(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=Ub(v,y,b),t=JG({inputs:{x:i},backend:n,attrs:{begin:v,size:e}});x=$({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeIntermediateTensorInfo(t)}else if(n.shouldExecuteOnCPU([i])){let e=n.readSync(i.dataId),t=pU(p,Mf(i.shape,i.dtype,e),b,v);x=n.makeTensorInfo(m,i.dtype,t.values)}else{let e=new vZ(v,b,p);x=n.runWebGLProgram(e,[i],i.dtype)}let S=$({inputs:{x},backend:n,attrs:{shape:m}});return n.disposeIntermediateTensorInfo(x),S}var bZ={kernelName:Al,backendName:`webgl`,kernelFunc:yZ};function xZ(e){let{inputs:t,backend:n,attrs:r}=e,{separator:i,nGramWidths:a,leftPad:o,rightPad:s,padWidth:c,preserveShortSequences:l}=r,{data:u,dataSplits:d}=t,[f,p]=mU(n.readSync(u.dataId),n.readSync(d.dataId),i,a,o,s,c,l);return[n.makeTensorInfo([f.length],`string`,f),n.makeTensorInfo(d.shape,`int32`,p)]}var SZ={kernelName:jl,backendName:`webgl`,kernelFunc:xZ};function CZ(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:i}=r,{input:a,delimiter:o}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(a.shape.length!==1)throw Error(`Input must be a vector, got shape: ${a.shape}`);if(o.shape.length!==0)throw Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let s=n.readSync(a.dataId),c=n.readSync(o.dataId)[0],[l,u,d]=hU(s,c,i),f=u.length;return[n.makeTensorInfo([f,2],`int32`,l),n.makeTensorInfo([f],`string`,u),n.makeTensorInfo([2],`int32`,new Int32Array(d))]}var wZ={kernelName:Ml,backendName:`webgl`,kernelFunc:CZ};function TZ(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:i}=r,{input:a}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(i<=0)throw Error(`Number of buckets must be at least 1`);let o=gU(n.readSync(a.dataId),i);return n.makeTensorInfo(a.shape,`int32`,o)}var EZ={kernelName:Nl,backendName:`webgl`,kernelFunc:TZ},DZ={kernelName:`Tan`,backendName:`webgl`,kernelFunc:wW({opSnippet:`return tan(x);`})},OZ={kernelName:Pl,backendName:`webgl`,kernelFunc:wW({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`})};function kZ(e){let{inputs:t,backend:n,attrs:r}=e,{tensor:i,indices:a,updates:o}=t,{}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=qv(o,a,i.shape),f=[d/l,l];if(d===0)return n.makeTensorInfo(i.shape,a.dtype);let p=$({inputs:{x:a},backend:n,attrs:{shape:[c,s]}}),m=$({inputs:{x:o},backend:n,attrs:{shape:[c,l]}}),h=$({inputs:{x:i},backend:n,attrs:{shape:f}}),g=new PX(c,s,p.shape.length,m.shape.length,u,f,!1,!0),_=n.runWebGLProgram(g,[m,p,h],h.dtype),v=$({inputs:{x:_},backend:n,attrs:{shape:i.shape}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(_),v}var AZ={kernelName:ll,backendName:`webgl`,kernelFunc:kZ},jZ=class{constructor(e,t){this.variableNames=[`A`];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;let r=BV(this.rank),i=MZ(e);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${i}));
      }
    `}};function MZ(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${e[0]})`;let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`],r=[];for(let t=0;t<e.length;t++)r.push(`imod(${n[t]}, ${e[t]})`);return r.join()}function NZ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reps:a}=r;if(i.dtype===`string`||i.shape.length>5){let e=n.readSync(i.dataId),t=i.dtype===`string`?e.map(e=>ku(e)):e,r=vU(Mf(i.shape,i.dtype,t),a);return n.makeTensorInfo(r.shape,r.dtype,r.values)}let o=new jZ(i.shape,a);return n.runWebGLProgram(o,[i],i.dtype)}var PZ={kernelName:Fl,backendName:`webgl`,kernelFunc:NZ},FZ=class{constructor(e){this.variableNames=[`x`,`indices`],this.customUniforms=[{name:`n`,type:`int`},{name:`firstPass`,type:`int`},{name:`negativeInf`,type:`float`},{name:`dir`,type:`int`},{name:`inc`,type:`int`}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}},IZ=class{constructor(e){this.variableNames=[`x`,`indices`],this.customUniforms=[{name:`n`,type:`int`},{name:`firstPass`,type:`int`},{name:`k`,type:`int`}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}};function LZ(e,t){t!==null&&e.disposeIntermediateTensorInfo(t)}function RZ(e){let t=1;for(;t<e;)t*=2;return t}function zZ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{k:a,sorted:o}=r,s=j().getNumber(`TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD`),c=j().getNumber(`TOPK_K_CPU_HANDOFF_THRESHOLD`),l=i.shape,u=l[l.length-1];if(n.shouldExecuteOnCPU([i])||u<s||a>c){let[e,t]=yU(n.readSync(i.dataId),l,i.dtype,a,o);return[n.makeTensorInfo(e.shape,e.dtype,e.values),n.makeTensorInfo(t.shape,t.dtype,t.values)]}if(a===0)return l[l.length-1]=0,[n.makeTensorInfo(l,i.dtype,[]),n.makeTensorInfo(l,`int32`,[])];if(u===1)return[i,tJ({attrs:{shape:l,dtype:`int32`,value:0},backend:n})];let d=n.texData.get(i.dataId),f=d!==null&&d.isPacked,p=f?n.unpackTensor(i):i,m=k(l)/u,h=$({inputs:{x:p},attrs:{shape:[m,u]},backend:n});f&&LZ(n,p);let g=RZ(a),_=RZ(u),v=null,y=()=>v===null?[h,h]:[h,v],b=(e,t,r)=>{let i=y(),a=new FZ(r),o=[[u],[+(v===null)],[-1/0],[e],[t]],s=v;v=n.runWebGLProgram(a,i,`int32`,o),LZ(n,s)};for(let e=1;e<g;e*=2){let t=e*2;for(let n=e;n>=1;n/=2)b(t,n,[m,_])}for(let e=_;e>g;e/=2){let t=y(),r=new IZ([m,e/2]),i=[[u],[+(v===null)],[g]],a=v;v=n.runWebGLProgram(r,t,`int32`,i),LZ(n,a);let o=g/2,s=o*2;for(let e=o;e>=1;e/=2)b(s,e,v.shape)}let x=v;v=JG({inputs:{x:v},backend:n,attrs:{begin:0,size:[m,a]}}),LZ(n,x);let S=CJ({inputs:{x:h,indices:v},backend:n,attrs:{axis:1,batchDims:1}});LZ(n,h);let C=l.slice(0,-1);C.push(a),x=v,v=$({inputs:{x:v},attrs:{shape:C},backend:n}),LZ(n,x);let w=S;return S=$({inputs:{x:S},attrs:{shape:C},backend:n}),LZ(n,w),[S,v]}var BZ={kernelName:Il,backendName:`webgl`,kernelFunc:zZ},VZ=class{constructor(e,t,n,r,i,a){this.variableNames=[`Image`,`Transforms`],this.outputShape=a;let o=n===`nearest`?1:2,s;switch(r){case`constant`:s=1;break;case`reflect`:s=2;break;case`wrap`:s=3;break;case`nearest`:s=4;break;default:s=1}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${s} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${s} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${s} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${i});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${i});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${o} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}};function HZ(e){let{inputs:t,backend:n,attrs:r}=e,{image:i,transforms:a}=t,{interpolation:o,fillMode:s,fillValue:c,outputShape:l}=r,[u,d,f,p]=i.shape,[m,h]=l??[d,f],g=new VZ(d,f,o,s,c,[u,m,h,p]);return n.runWebGLProgram(g,[i,a],`float32`)}var UZ={kernelName:Ll,backendName:`webgl`,kernelFunc:HZ};function WZ(e){let{inputs:t,attrs:n,backend:r}=e,{axis:i}=n,{x:a}=t;UB(a,`unique`),console.warn(`WARNING: `,`UI might be locked temporarily as data is being downloaded`);let{outputValues:o,outputShape:s,indices:c}=xU(r.readSync(a.dataId),i,a.shape,a.dtype);return[r.makeTensorInfo(s,a.dtype,o),r.makeTensorInfo([c.length],`int32`,c)]}var GZ={kernelName:zl,backendName:`webgl`,kernelFunc:WZ};function KZ(e){let{inputs:t,backend:n,attrs:r}=e,{value:i}=t,{axis:a}=r;a<0&&(a+=i.shape.length);let o=i,s=o.shape.length,c=i.shape[a],l=Array(s-1),u=0;for(let e=0;e<s;e++)e!==a&&(l[u++]=o.shape[e]);let d=[],f=Array(s).fill(0),p=o.shape.slice();p[a]=1;let m=Array(c);for(let e=0;e<m.length;e++){f[a]=e;let t=JG({inputs:{x:o},backend:n,attrs:{begin:f,size:p}}),r=$({inputs:{x:t},backend:n,attrs:{shape:l}});m[e]=r,d.push(t)}return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),m}var qZ={kernelName:Bl,backendName:`webgl`,kernelFunc:KZ},JZ=class{constructor(e,t){this.variableNames=[`x`,`segmentIds`];let n=e.windowSize,r=e.batchSize,i=e.inSize,a=e.numSegments,o=a*Math.ceil(i/n);this.outputShape=[r,o];let s=Math.floor(n/4)*4,c=n%4,l=`
        sumValue += dot(values, segFilter);
    `,u=``;i%n>0&&(u=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return initializationValue;
        }
      `);let d=``;i%n>0&&(d=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${d}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${a})) * float(${n}));
        int currentSeg = int(mod(float(outIdx), float(${a})));

        float sumValue = 0.0;

        for (int i = 0; i < ${s}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${l}
        }

        int inIdx = inOffset + ${s};
        if (${c===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${l}
        } else if (${c===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${l}
        } else if (${c===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${l}
        }
        setOutput(sumValue);
      }
    `}};function YZ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,segmentIds:a}=t,{numSegments:o}=r,s=i.shape.length,c=[],l=0,u=yh([l],s),d=i;u!=null&&(d=KW({inputs:{x:i},backend:n,attrs:{perm:u}}),c.push(d),l=xh(1,s)[0]);let f=lS(d.shape,l,o),p=k([d.shape[l]]),m=$({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}});c.push(m);let h=od(i.dtype),g=(e,t,r,i,a)=>{let o=e.shape[0],s=e.shape[1],l=cS(s,a),u=new JZ({windowSize:l,inSize:s,batchSize:o,numSegments:a},t),d=n.compileAndRun(u,[e,r],i);if(c.push(d),d.shape[1]===a)return d;let f=sX({backend:n,attrs:{start:0,stop:a,step:1,dtype:`float32`}}),p=NZ({inputs:{x:f},backend:n,attrs:{reps:[s/l]}});return c.push(f),c.push(p),g(d,t,p,i,a)},_=$({inputs:{x:g(m,`unsortedSegmentSum`,a,h,o)},backend:n,attrs:{shape:f}}),v=_;if(u!=null){c.push(_);let e=bh(u);v=KW({inputs:{x:v},backend:n,attrs:{perm:e}})}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),v}var XZ=[XW,$W,eG,tG,rG,sG,lG,dG,vG,bG,xG,SG,CG,wG,TG,kG,jG,FG,LG,zG,HG,XG,QG,nK,iK,fK,mK,vK,mW,SK,jK,BK,KK,YK,ZK,$K,tq,nq,rq,aq,fq,mq,gq,yq,Cq,Dq,kq,Mq,Fq,Lq,Rq,Vq,Hq,Uq,Gq,qq,Yq,$q,nJ,iJ,oJ,sJ,uJ,hJ,_J,bJ,wJ,TJ,EJ,fW,OJ,DK,kJ,AJ,jJ,vW,MJ,NJ,FJ,IJ,LJ,RJ,zJ,BJ,UJ,GJ,JJ,YJ,ZJ,$J,rY,aY,sY,lY,dY,fY,hY,gY,EY,MW,AY,NY,IY,zY,oK,VY,GY,qY,ZY,QY,SW,eX,nX,iX,oX,cX,cK,yY,lX,uX,dX,PW,hX,vX,SX,TX,kX,jX,MX,NX,LX,BX,UX,WX,GX,KX,qX,JX,YG,wY,YX,XX,QX,eZ,nZ,iZ,oZ,cZ,uZ,dZ,pZ,hZ,_Z,bZ,SZ,wZ,EZ,SY,GW,DZ,OZ,AZ,PZ,BZ,UZ,qW,GZ,qZ,{kernelName:Vl,backendName:`webgl`,kernelFunc:YZ},UY];for(let e of XZ)nu(e);var ZZ=class{model;config;build(e){this.config=e,this.model?.dispose();let t=[];t.push(Tj({units:e.hiddenLayers[0]??8,activation:e.activation,inputShape:[5]}));for(let n=1;n<e.hiddenLayers.length;n++)t.push(Tj({units:e.hiddenLayers[n],activation:e.activation}));t.push(Tj({units:3,activation:`softplus`})),this.model=YO({layers:t})}predictGains(e){return I(()=>{let t=Wv([e]),n=this.model.predict(t),[r,i,a]=Array.from(n.dataSync()),o=this.config.gainScale;return{Kp:r*o,Ki:i*o,Kd:a*o}})}getFlatWeights(){let e=this.model.getWeights().map(e=>e.dataSync()),t=e.reduce((e,t)=>e+t.length,0),n=new Float32Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n}setFlatWeights(e){let t=this.model.getWeights().map(e=>e.shape),n=[],r=0;for(let i of t){let t=i.reduce((e,t)=>e*t,1),a=e.slice(r,r+t);n.push(Nd(a,i)),r+=t}this.model.setWeights(n),n.forEach(e=>e.dispose())}dispose(){this.model?.dispose()}};function QZ(){let e=0,t=0;for(;e===0;)e=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}function $Z(e,t){let n=new Float32Array(e.length);for(let r=0;r<e.length;r++)n[r]=e[r]+QZ()*t;return n}function eQ(e,t){let n=[t.plant.m,t.plant.c,t.plant.k,t.intent.aggressiveness,t.intent.robustness],r=e.predictGains(n);if(!isFinite(r.Kp+r.Ki+r.Kd))return 1e9;let i=u(r,t.plant,t.sim),a=i[i.length-1];if(!isFinite(a.xTrue))return 1e9;let o=$a(t.intent);return eo(i,t.sim.setpoint,t.sim.dt,o)}function tQ(e,t,n=20,r=.15){let i=e.getFlatWeights(),a=eQ(e,t),o=i,s=a;for(let a=0;a<n;a++){let n=$Z(i,r);e.setFlatWeights(n);let a=eQ(e,t);a<s&&(s=a,o=n)}return e.setFlatWeights(o),s}function nQ(e,t){e.selectAll(`*`).remove();let n=+e.attr(`height`),r=[5,...t,3],i=260/(r.length-1),a=[];r.forEach((e,t)=>{let r=t*i+40,o=n/(e+1),s=[];for(let t=0;t<e;t++)s.push({x:r,y:o*(t+1)});a.push(s)});for(let t=0;t<a.length-1;t++)for(let n of a[t])for(let r of a[t+1])e.append(`line`).attr(`x1`,n.x).attr(`y1`,n.y).attr(`x2`,r.x).attr(`y2`,r.y).attr(`stroke`,`#ccc`).attr(`stroke-width`,.5);let o=[`m`,`c`,`k`,`aggr`,`rob`],s=[`Kp`,`Ki`,`Kd`];a.forEach((t,n)=>{t.forEach((t,r)=>{let i=n===0,c=n===a.length-1;e.append(`circle`).attr(`cx`,t.x).attr(`cy`,t.y).attr(`r`,10).attr(`fill`,i?`#9bb8ff`:c?`#a8e6b0`:`#f0f0f0`).attr(`stroke`,`#666`).attr(`stroke-width`,1),i&&e.append(`text`).attr(`x`,t.x-16).attr(`y`,t.y+4).attr(`text-anchor`,`end`).attr(`font-size`,11).text(o[r]),c&&e.append(`text`).attr(`x`,t.x+16).attr(`y`,t.y+4).attr(`font-size`,11).attr(`font-weight`,`bold`).text(s[r])})})}function rQ(e,t,n,r){if(e.clearRect(0,0,t,n),r.length<2)return;let i=Math.max(...r),a=Math.min(...r),o=i-a||1;e.strokeStyle=`#ccc`,e.beginPath(),e.moveTo(30,5),e.lineTo(30,n-30),e.lineTo(t-5,n-30),e.stroke(),e.strokeStyle=`#3a5fcd`,e.lineWidth=1.5,e.beginPath(),r.forEach((i,s)=>{let c=30+s/(r.length-1)*(t-30-5),l=5+(1-(i-a)/o)*(n-30-5);s===0?e.moveTo(c,l):e.lineTo(c,l)}),e.stroke(),e.fillStyle=`#333`,e.font=`11px sans-serif`,e.fillText(`Best J`,32,14),e.fillText(`generations`,t-70,n-30+18)}var iQ=e=>document.getElementById(e),aQ=e=>parseFloat(iQ(e).value),oQ,sQ,cQ,lQ=null,uQ=!1,dQ=0,fQ=0,pQ=[8,8],mQ=[];function hQ(){return{m:aQ(`cp-m`),c:aQ(`cp-c`),k:aQ(`cp-k`)}}function gQ(){return{Kp:aQ(`cp-kp`),Ki:aQ(`cp-ki`),Kd:aQ(`cp-kd`)}}function _Q(){return{dt:.02,steps:300,setpoint:1,noise:aQ(`cp-noise`)}}function vQ(){return{aggressiveness:aQ(`cp-aggr`),robustness:aQ(`cp-robust`)}}function yQ(){return{hiddenLayers:[...pQ],activation:iQ(`cp-nnact`).value,gainScale:aQ(`cp-scale`)}}function bQ(){return{plant:hQ(),sim:_Q(),intent:vQ()}}function xQ(){[`noise`,`kp`,`ki`,`kd`,`aggr`,`robust`,`scale`].forEach(e=>{let t=document.getElementById(`cp-${e}Val`);t&&(t.textContent=iQ(`cp-${e}`).value)});let e=_Q(),t=u(gQ(),hQ(),e);Za(oQ,640,380,t,e.setpoint);let n=Qa(t,e.setpoint,e.dt);iQ(`cp-overshoot`).textContent=n.overshoot.toFixed(1)+`%`,iQ(`cp-settle`).textContent=n.settleTime.toFixed(2)+` s`,iQ(`cp-sserror`).textContent=n.steadyError.toFixed(3);let r=$a(vQ()),i=eo(t,e.setpoint,e.dt,r);iQ(`cp-cost`).textContent=i.toFixed(3)}function SQ(){iQ(`cp-layerCount`).textContent=String(pQ.length);let e=iQ(`cp-neuronControls`);e.innerHTML=``;let t=260/(pQ.length+2-1);pQ.forEach((n,r)=>{let i=(r+1)*t+40,a=document.createElement(`div`);a.className=`neuron-group`,a.style.left=`${i}px`,a.innerHTML=`
      <button data-inc="${r}">+</button>
      <b>${n}</b>
      <button data-dec="${r}">−</button>`,e.appendChild(a)}),e.querySelectorAll(`button[data-inc]`).forEach(e=>e.addEventListener(`click`,()=>{let t=+e.getAttribute(`data-inc`);pQ[t]<15&&pQ[t]++,CQ()})),e.querySelectorAll(`button[data-dec]`).forEach(e=>e.addEventListener(`click`,()=>{let t=+e.getAttribute(`data-dec`);pQ[t]>1&&pQ[t]--,CQ()}))}function CQ(){uQ=!1,iQ(`cp-train`).textContent=`▶ Train`,cancelAnimationFrame(fQ),lQ?.dispose(),lQ=new ZZ,lQ.build(yQ()),dQ=0,mQ.length=0,iQ(`cp-gen`).textContent=`0`,iQ(`cp-bestcost`).textContent=`–`,SQ(),nQ(cQ,pQ),rQ(sQ,640,140,mQ),wQ()}function wQ(){if(!lQ)return;let e=bQ(),t=[e.plant.m,e.plant.c,e.plant.k,e.intent.aggressiveness,e.intent.robustness],n=lQ.predictGains(t);iQ(`cp-learned-kp`).textContent=n.Kp.toFixed(2),iQ(`cp-learned-ki`).textContent=n.Ki.toFixed(2),iQ(`cp-learned-kd`).textContent=n.Kd.toFixed(2)}function TQ(){if(!uQ||!lQ)return;let e=bQ(),t=parseInt(iQ(`cp-pop`).value),n=parseFloat(iQ(`cp-lr`).value),r=0;for(let i=0;i<3;i++)r=tQ(lQ,e,t,n),dQ++;mQ.push(r),mQ.length>300&&mQ.shift(),iQ(`cp-gen`).textContent=String(dQ),iQ(`cp-bestcost`).textContent=r.toFixed(3),rQ(sQ,640,140,mQ),wQ(),fQ=requestAnimationFrame(TQ)}function EQ(){if(!lQ)return;let e=bQ(),t=[e.plant.m,e.plant.c,e.plant.k,e.intent.aggressiveness,e.intent.robustness],n=lQ.predictGains(t),r=(e,t,n)=>Math.max(t,Math.min(n,e));iQ(`cp-kp`).value=String(r(n.Kp,0,100)),iQ(`cp-ki`).value=String(r(n.Ki,0,50)),iQ(`cp-kd`).value=String(r(n.Kd,0,50)),xQ()}function DQ(){oQ=iQ(`cp-chart`).getContext(`2d`),sQ=iQ(`cp-lossChart`).getContext(`2d`),cQ=on(`#cp-netSvg`),[`cp-m`,`cp-c`,`cp-k`,`cp-kp`,`cp-ki`,`cp-kd`,`cp-noise`,`cp-aggr`,`cp-robust`].forEach(e=>{iQ(e).addEventListener(`input`,xQ)}),iQ(`cp-scale`).addEventListener(`input`,()=>{let e=document.getElementById(`cp-scaleVal`);e&&(e.textContent=iQ(`cp-scale`).value)}),iQ(`cp-train`).addEventListener(`click`,()=>{uQ=!uQ,iQ(`cp-train`).textContent=uQ?`⏸ Pause`:`▶ Train`,uQ?TQ():cancelAnimationFrame(fQ)}),iQ(`cp-rebuild`).addEventListener(`click`,CQ),iQ(`cp-apply`).addEventListener(`click`,EQ),iQ(`cp-addLayer`).addEventListener(`click`,()=>{pQ.length<8&&(pQ.push(4),CQ())}),iQ(`cp-removeLayer`).addEventListener(`click`,()=>{pQ.length>1&&(pQ.pop(),CQ())}),[`cp-nnact`,`cp-reg`,`cp-regRate`,`cp-scale`].forEach(e=>{iQ(e).addEventListener(`change`,CQ)}),xQ(),CQ()}var OQ={};function kQ(e={}){let t=document.querySelectorAll(`.tab-btn`),n=document.querySelectorAll(`.tab-panel`);function r(r){t.forEach(e=>e.classList.toggle(`active`,e.dataset.tab===r)),n.forEach(e=>e.classList.toggle(`active`,e.id===`tab-${r}`)),!OQ[r]&&e[r]&&(OQ[r]=!0,e[r]())}t.forEach(e=>{e.addEventListener(`click`,()=>r(e.dataset.tab))}),OQ.nn=!0}var AQ=class{model;epoch=0;build(e,t){let n=e.regularization===`l1`?Ej({l1:e.regRate}):e.regularization===`l2`?Dj({l2:e.regRate}):void 0;this.model&&this.model.dispose(),this.model=YO(),e.hiddenLayers.forEach((r,i)=>{this.model.add(Tj({units:r,activation:e.activation,inputShape:i===0?[t]:void 0,kernelRegularizer:n}))}),this.model.add(Tj({units:1,activation:e.problemType===`classification`?`sigmoid`:void 0})),this.model.compile({optimizer:ax.sgd(e.learningRate),loss:e.problemType===`classification`?`binaryCrossentropy`:`meanSquaredError`}),this.epoch=0}async trainStep(e,t,n){let r=await this.model.fit(e,t,{epochs:1,batchSize:n,verbose:0});return this.epoch++,r.history.loss[0]}evaluate(e,t){let n=this.model.evaluate(e,t),r=n.dataSync()[0];return n.dispose(),r}getWeights(){return this.model.layers.map(e=>{let t=e.getWeights()[0];return t?t.arraySync():[]})}};function jQ(e,t,n,r){return{x:e+(Math.random()-.5)*r,y:t+(Math.random()-.5)*r,label:n}}function MQ(e=200,t=.5){let n=[];for(let r=0;r<e/2;r++){let e=Math.random()*5*.5,r=Math.random()*2*Math.PI;n.push(jQ(e*Math.cos(r),e*Math.sin(r),1,t)),e=3.5+Math.random()*5*.3,r=Math.random()*2*Math.PI,n.push(jQ(e*Math.cos(r),e*Math.sin(r),0,t))}return n}function NQ(e=200,t=.5){let n=[];for(let r=0;r<e;r++){let e=(Math.random()-.5)*10,r=(Math.random()-.5)*10,i=+(e*r>=0);n.push(jQ(e,r,i,t))}return n}function PQ(e=200,t=.5){let n=[];for(let r=0;r<e/2;r++)n.push(jQ(2+Math.random()*2,2+Math.random()*2,1,t)),n.push(jQ(-2-Math.random()*2,-2-Math.random()*2,0,t));return n}function FQ(e=500,t=.5){let n=[],r=e/2,i=(e,i)=>{for(let a=0;a<r;a++){let o=a/r*5,s=a/r*3*2*Math.PI+e,c=(Math.random()-.5)*t,l=(Math.random()-.5)*t;n.push({x:o*Math.sin(s)+c,y:o*Math.cos(s)+l,label:i})}};return i(0,1),i(Math.PI,0),n}function IQ(e,t,n){switch(e){case`xor`:return NQ(t,n);case`gaussian`:return PQ(t,n);case`spiral`:return FQ(t,n);default:return MQ(t,n)}}function LQ(e,t){let n=[...e].sort(()=>Math.random()-.5),r=Math.floor(n.length*t);return{train:n.slice(0,r),test:n.slice(r)}}var RQ=[{key:`x1`,label:`X₁`,fn:e=>e,enabled:!0},{key:`x2`,label:`X₂`,fn:(e,t)=>t,enabled:!0},{key:`x1sq`,label:`X₁²`,fn:e=>e*e,enabled:!1},{key:`x2sq`,label:`X₂²`,fn:(e,t)=>t*t,enabled:!1},{key:`x1x2`,label:`X₁X₂`,fn:(e,t)=>e*t,enabled:!1},{key:`sinx1`,label:`sin(X₁)`,fn:e=>Math.sin(e),enabled:!1},{key:`sinx2`,label:`sin(X₂)`,fn:(e,t)=>Math.sin(t),enabled:!1}];function zQ(){return RQ.filter(e=>e.enabled)}function BQ(e,t){return zQ().map(n=>n.fn(e,t))}var VQ=6;function HQ(e){let t=Math.max(0,Math.min(1,e)),n,r,i;if(t<.5){let e=t/.5;n=245+10*e,r=166+89*e,i=35+220*e}else{let e=(t-.5)/.5;n=255+-212*e,r=255+-124*e,i=255+-69*e}return`rgb(${Math.round(n)},${Math.round(r)},${Math.round(i)})`}function UQ(e,t,n,r,i,a){let o=n/100,s=[];for(let e=0;e<100;e++)for(let t=0;t<100;t++){let n=e/100*2*VQ-VQ,r=VQ-t/100*2*VQ;s.push(BQ(n,r))}let c=Wv(s),l=t.model.predict(c),u=l.dataSync();c.dispose(),l.dispose();let d=0;for(let t=0;t<100;t++)for(let n=0;n<100;n++)e.fillStyle=HQ(u[d++]),e.fillRect(t*o,n*o,o+1,o+1);let f=(t,r)=>{t.forEach(t=>{let i=(t.x+VQ)/12*n,a=(VQ-t.y)/12*n;e.beginPath(),e.arc(i,a,3.5,0,2*Math.PI),e.fillStyle=t.label===1?`#2b83ba`:`#f5a623`,e.fill(),e.strokeStyle=r,e.lineWidth=1.5,e.stroke()})};f(r,`#fff`),a&&f(i,`#000`),e.strokeStyle=`rgba(0,0,0,0.3)`,e.lineWidth=1;let p=n/2;e.beginPath(),e.moveTo(p,0),e.lineTo(p,n),e.stroke(),e.beginPath(),e.moveTo(0,p),e.lineTo(n,p),e.stroke(),e.fillStyle=`#555`,e.font=`11px sans-serif`,e.fillText(`-6`,2,p-3),e.fillText(`6`,n-14,p-3),e.fillText(`6`,p+3,12),e.fillText(`-6`,p+3,n-4)}function WQ(e){let t=e.getContext(`2d`),n=e.width,r=e.height;t.clearRect(0,0,n,r);let i=t.createLinearGradient(0,0,n,0);i.addColorStop(0,HQ(0)),i.addColorStop(.5,`rgb(255,255,255)`),i.addColorStop(1,HQ(1)),t.fillStyle=i,t.fillRect(0,0,n,15),t.fillStyle=`#555`,t.font=`11px sans-serif`,t.fillText(`-1`,0,r-2),t.fillText(`0`,n/2-3,r-2),t.fillText(`1`,n-8,r-2)}function GQ(e,t,n,r,i){e.clearRect(0,0,t,n);let a=t-25-5,o=n-25-5;if(e.strokeStyle=`#999`,e.lineWidth=1,e.beginPath(),e.moveTo(25,5),e.lineTo(25,n-25),e.lineTo(t-5,n-25),e.stroke(),e.fillStyle=`#666`,e.font=`10px sans-serif`,e.fillText(`Loss`,2,12),e.fillText(`Epoch`,t-40,n-8),r.length<2)return;let s=Math.max(...r,...i,.001),c=r.length,l=(t,n)=>{e.strokeStyle=n,e.lineWidth=1.5,e.beginPath(),t.forEach((t,n)=>{let r=25+n/(c-1)*a,i=5+o-t/s*o;n===0?e.moveTo(r,i):e.lineTo(r,i)}),e.stroke()};l(r,`#3a5fcd`),i.length&&l(i,`#e8743b`),e.fillStyle=`#666`,e.fillText(s.toFixed(2),2,24)}function KQ(e,t,n){e.selectAll(`*`).remove();let r=[zQ().length,...t.hiddenLayers,1],i=680/(r.length-1),a=r.map((e,t)=>ee(e).map(n=>({x:t*i+60,y:450/(e+1)*(n+1)})));for(let t=0;t<r.length-1;t++)a[t].forEach((r,i)=>{a[t+1].forEach((a,o)=>{let s=n[t]?.[i]?.[o]??0;e.append(`line`).attr(`x1`,r.x).attr(`y1`,r.y).attr(`x2`,a.x).attr(`y2`,a.y).attr(`stroke`,s>0?`#2b83ba`:`#f5a623`).attr(`stroke-width`,Math.min(Math.abs(s)*3,5)).attr(`opacity`,.55)})});a.flat().forEach(t=>{e.append(`circle`).attr(`cx`,t.x).attr(`cy`,t.y).attr(`r`,11).attr(`fill`,`#fff`).attr(`stroke`,`#333`).attr(`stroke-width`,2)})}var qQ=!1,JQ=0,YQ=new AQ,XQ=[],ZQ=[],QQ,$Q,e$,t$,n$=[4,2],r$=[],i$=[],a$=e=>document.getElementById(e),o$=e=>a$(e).value,s$=on(`#netSvg`),c$=a$(`heatmap`),l$=c$.getContext(`2d`),u$=a$(`lossChart`).getContext(`2d`);function d$(){return{hiddenLayers:[...n$],activation:o$(`activation`),learningRate:parseFloat(o$(`lr`)),regularization:o$(`reg`),regRate:parseFloat(o$(`regRate`)),problemType:o$(`problem`)}}function f$(){let e=a$(`featureList`);e.innerHTML=``,RQ.forEach(t=>{let n=document.createElement(`label`),r=document.createElement(`input`);r.type=`checkbox`,r.checked=t.enabled,r.onchange=()=>{t.enabled=r.checked,zQ().length===0&&(t.enabled=!0,r.checked=!0),h$()},n.appendChild(r),n.appendChild(document.createTextNode(` `+t.label)),e.appendChild(n)})}function p$(){a$(`layerCount`).textContent=String(n$.length);let e=a$(`neuronControls`);e.innerHTML=``;let t=680/(n$.length+2-1);n$.forEach((n,r)=>{let i=(r+1)*t+60,a=document.createElement(`div`);a.className=`neuron-group`,a.style.left=`${i}px`,a.innerHTML=`
      <button data-inc="${r}">+</button>
      <b>${n}</b>
      <button data-dec="${r}">−</button>`,e.appendChild(a)}),e.querySelectorAll(`button[data-inc]`).forEach(e=>e.addEventListener(`click`,()=>{let t=+e.getAttribute(`data-inc`);n$[t]<15&&n$[t]++,h$()})),e.querySelectorAll(`button[data-dec]`).forEach(e=>e.addEventListener(`click`,()=>{let t=+e.getAttribute(`data-dec`);n$[t]>1&&n$[t]--,h$()}))}function m$(){let e=parseFloat(o$(`noise`)),t=parseInt(o$(`ratio`))/100,n=LQ(IQ(o$(`dataset`),200,e),t);XQ=n.train,ZQ=n.test,[QQ,$Q,e$,t$].forEach(e=>e&&e.dispose()),QQ=Wv(XQ.map(e=>BQ(e.x,e.y))),$Q=Wv(XQ.map(e=>[e.label])),e$=Wv(ZQ.map(e=>BQ(e.x,e.y))),t$=Wv(ZQ.map(e=>[e.label]))}function h$(){qQ=!1,a$(`runBtn`).textContent=`▶ Run`,cancelAnimationFrame(JQ),r$.length=0,i$.length=0,p$(),m$(),YQ.build(d$(),zQ().length),g$(),_$()}function g$(){a$(`epochCount`).textContent=String(YQ.epoch).padStart(6,`0`)}function _$(){let e=a$(`showTest`).checked;KQ(s$,d$(),YQ.getWeights()),UQ(l$,YQ,c$.width,XQ,ZQ,e),GQ(u$,220,120,r$,i$)}async function v$(){let e=parseInt(o$(`batch`)),t=await YQ.trainStep(QQ,$Q,e),n=ZQ.length?YQ.evaluate(e$,t$):0;r$.push(t),i$.push(n),r$.length>200&&(r$.shift(),i$.shift()),g$(),a$(`trainLoss`).textContent=t.toFixed(3),a$(`testLoss`).textContent=n.toFixed(3),_$()}async function y$(){qQ&&(await v$(),JQ=requestAnimationFrame(y$))}a$(`runBtn`).onclick=()=>{qQ=!qQ,a$(`runBtn`).textContent=qQ?`⏸ Pause`:`▶ Run`,qQ&&y$()},a$(`stepBtn`).onclick=()=>{qQ=!1,a$(`runBtn`).textContent=`▶ Run`,v$()},a$(`resetBtn`).onclick=h$,a$(`addLayer`).onclick=()=>{n$.length<15&&(n$.push(3),h$())},a$(`removeLayer`).onclick=()=>{n$.length>1&&(n$.pop(),h$())},a$(`showTest`).addEventListener(`change`,_$),a$(`ratio`).addEventListener(`input`,()=>{a$(`ratioVal`).textContent=o$(`ratio`)}),a$(`noise`).addEventListener(`input`,()=>{a$(`noiseVal`).textContent=parseFloat(o$(`noise`)).toFixed(1)}),a$(`batch`).addEventListener(`input`,()=>{a$(`batchVal`).textContent=o$(`batch`)}),[`dataset`,`ratio`,`noise`,`batch`,`lr`,`activation`,`reg`,`regRate`,`problem`].forEach(e=>a$(e).addEventListener(`change`,h$)),f$(),WQ(a$(`colorScale`)),h$(),kQ({control:DQ});