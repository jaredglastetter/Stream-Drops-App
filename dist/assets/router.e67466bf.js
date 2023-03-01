import{l as R,K as Y,s as j,p as v,c,b as m,L as b,M as T,m as w,H as A,N as S,O as M,n as X,T as q,q as K,P as F,t as P,Q as U,R as k,U as Q,V as $}from"./index.8c8c234d.js";import{a as G,m as J,b as Z,c as ee}from"./size.1dc468f7.js";import{m as te,u as ne}from"./tag.090dc54c.js";const fe=R(!1)({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:n}=t;const{defaults:i,reset:r,root:s,scoped:a}=Y(e);return j(i,{reset:r,root:s,scoped:a}),()=>{var o;return(o=n.default)==null?void 0:o.call(n)}}}),ve=v({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function he(e){return{dimensionStyles:c(()=>({height:m(e.height),maxHeight:m(e.maxHeight),maxWidth:m(e.maxWidth),minHeight:m(e.minHeight),minWidth:m(e.minWidth),width:m(e.width)}))}}const ge=v({border:[Boolean,Number,String]},"border");function _e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:b();return{borderClasses:c(()=>{const i=T(e)?e.value:e.border,r=[];if(i===!0||i==="")r.push(`${t}--border`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`border-${s}`);return r})}}const ye=v({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function we(e){return{elevationClasses:c(()=>{const n=T(e)?e.value:e.elevation,i=[];return n==null||i.push(`elevation-${n}`),i})}}const Ce=v({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function be(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:b();return{roundedClasses:c(()=>{const i=T(e)?e.value:e.rounded,r=[];if(i===!0||i==="")r.push(`${t}--rounded`);else if(typeof i=="string"||i===0)for(const s of String(i).split(" "))r.push(`rounded-${s}`);return r})}}const ie=[null,"default","comfortable","compact"],Ee=v({density:{type:String,default:"default",validator:e=>ie.includes(e)}},"density");function Le(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:b();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const se=["elevated","flat","tonal","outlined","text","plain"];function Te(e,t){return w(A,null,[e&&w("span",{key:"overlay",class:`${t}__overlay`},null),w("span",{key:"underlay",class:`${t}__underlay`},null)])}const Se=v({color:String,variant:{type:String,default:"elevated",validator:e=>se.includes(e)}},"variant");function ke(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:b();const n=c(()=>{const{variant:s}=S(e);return`${t}--variant-${s}`}),{colorClasses:i,colorStyles:r}=G(c(()=>{const{variant:s,color:a}=S(e);return{[["elevated","flat"].includes(s)?"background":"text"]:a}}));return{colorClasses:i,colorStyles:r,variantClasses:n}}const re=v({color:String,start:Boolean,end:Boolean,icon:M,...J(),...te({tag:"i"}),...X()},"v-icon"),$e=R()({name:"VIcon",props:re(),setup(e,t){let{attrs:n,slots:i}=t,r;i.default&&(r=c(()=>{var p,f;const l=(p=i.default)==null?void 0:p.call(i);if(!!l)return(f=l.filter(d=>d.type===q&&d.children&&typeof d.children=="string")[0])==null?void 0:f.children}));const{themeClasses:s}=K(e),{iconData:a}=F(r||e),{sizeClasses:o}=Z(e),{textColorClasses:h,textColorStyles:g}=ee(P(e,"color"));return ne(()=>w(a.value.component,{tag:e.tag,icon:a.value.icon,class:["v-icon","notranslate",s.value,o.value,h.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[o.value?void 0:{fontSize:m(e.size),height:m(e.size),width:m(e.size)},g.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>{var l;return[(l=i.default)==null?void 0:l.call(i)]}})),{}}});const E=Symbol("rippleStop"),ae=80;function x(e,t){e.style.transform=t,e.style.webkitTransform=t}function L(e){return e.constructor.name==="TouchEvent"}function V(e){return e.constructor.name==="KeyboardEvent"}const oe=function(e,t){var p;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,r=0;if(!V(e)){const f=t.getBoundingClientRect(),d=L(e)?e.touches[e.touches.length-1]:e;i=d.clientX-f.left,r=d.clientY-f.top}let s=0,a=.3;(p=t._ripple)!=null&&p.circle?(a=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-s*2)/2}px`,h=`${(t.clientHeight-s*2)/2}px`,g=n.center?o:`${i-s}px`,l=n.center?h:`${r-s}px`;return{radius:s,scale:a,x:g,y:l,centerX:o,centerY:h}},C={show(e,t){var d;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=t==null?void 0:t._ripple)!=null&&d.enabled))return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:s,scale:a,x:o,y:h,centerX:g,centerY:l}=oe(e,t,n),p=`${s*2}px`;r.className="v-ripple__animation",r.style.width=p,r.style.height=p,t.appendChild(i);const f=window.getComputedStyle(t);f&&f.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),x(r,`translate(${o}, ${h}) scale3d(${a},${a},${a})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),x(r,`translate(${g}, ${l}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},r)}};function H(e){return typeof e>"u"||!!e}function _(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[E])){if(e[E]=!0,L(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||V(e),n._ripple.class&&(t.class=n._ripple.class),L(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{C.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var i;(i=n==null?void 0:n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},ae)}else C.show(e,n,t)}}function N(e){e[E]=!0}function u(e){const t=e.currentTarget;if(!!(t!=null&&t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{u(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),C.hide(t)}}function B(e){const t=e.currentTarget;!(t!=null&&t._ripple)||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let y=!1;function D(e){!y&&(e.keyCode===k.enter||e.keyCode===k.space)&&(y=!0,_(e))}function I(e){y=!1,u(e)}function W(e){y&&(y=!1,u(e))}function z(e,t,n){var a;const{value:i,modifiers:r}=t,s=H(i);if(s||C.hide(e),e._ripple=(a=e._ripple)!=null?a:{},e._ripple.enabled=s,e._ripple.centered=r.center,e._ripple.circle=r.circle,U(i)&&i.class&&(e._ripple.class=i.class),s&&!n){if(r.stop){e.addEventListener("touchstart",N,{passive:!0}),e.addEventListener("mousedown",N);return}e.addEventListener("touchstart",_,{passive:!0}),e.addEventListener("touchend",u,{passive:!0}),e.addEventListener("touchmove",B,{passive:!0}),e.addEventListener("touchcancel",u),e.addEventListener("mousedown",_),e.addEventListener("mouseup",u),e.addEventListener("mouseleave",u),e.addEventListener("keydown",D),e.addEventListener("keyup",I),e.addEventListener("blur",W),e.addEventListener("dragstart",u,{passive:!0})}else!s&&n&&O(e)}function O(e){e.removeEventListener("mousedown",_),e.removeEventListener("touchstart",_),e.removeEventListener("touchend",u),e.removeEventListener("touchmove",B),e.removeEventListener("touchcancel",u),e.removeEventListener("mouseup",u),e.removeEventListener("mouseleave",u),e.removeEventListener("keydown",D),e.removeEventListener("keyup",I),e.removeEventListener("dragstart",u),e.removeEventListener("blur",W)}function ue(e,t){z(e,t,!1)}function ce(e){delete e._ripple,O(e)}function le(e,t){if(t.value===t.oldValue)return;const n=H(t.oldValue);z(e,t,n)}const xe={mounted:ue,unmounted:ce,updated:le};function Ne(e,t){const n=Q("RouterLink"),i=c(()=>!!(e.href||e.to)),r=c(()=>(i==null?void 0:i.value)||$(t,"click")||$(e,"click"));if(typeof n=="string")return{isLink:i,isClickable:r,href:P(e,"href")};const s=e.to?n.useLink(e):void 0;return{isLink:i,isClickable:r,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&c(()=>{var a,o;return e.exact?(a=s.isExactActive)==null?void 0:a.value:(o=s.isActive)==null?void 0:o.value}),href:c(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const Re=v({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");export{xe as R,fe as V,ye as a,Ce as b,we as c,be as d,$e as e,Ee as f,Se as g,Le as h,ve as i,Re as j,ke as k,he as l,ge as m,Ne as n,Te as o,_e as u};