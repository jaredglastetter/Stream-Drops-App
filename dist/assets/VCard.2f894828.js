import{ai as F,s as H,m as n,l as h,O as v,n as N,q as z,c as C,$ as G,a0 as J}from"./index.8c8c234d.js";import{u as b,m as K}from"./tag.090dc54c.js";import{c as y,a as I,V as M}from"./VAvatar.2acf52c7.js";import{f as p,V as k,R as Q,m as U,i as W,a as X,b as Y,j as Z,g as ee,u as ae,k as te,h as ne,l as ie,c as de,d as le,n as se,o as ce}from"./router.e67466bf.js";import{m as re,a as ue,b as oe,u as ve,c as me,d as fe,L as ge}from"./position.c64b479c.js";const ke=F({name:"VCardActions",setup(e,l){let{slots:t}=l;return H({VBtn:{variant:"text"}}),b(()=>{var a;return n("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),be=y("v-card-subtitle"),ye=y("v-card-title"),Ve=h()({name:"VCardItem",props:{appendAvatar:String,appendIcon:v,prependAvatar:String,prependIcon:v,subtitle:String,title:String,...p()},setup(e,l){let{slots:t}=l;return b(()=>{var r;const a=!!(e.prependAvatar||e.prependIcon||t.prepend),m=!!(e.appendAvatar||e.appendIcon||t.append),f=!!(e.title||t.title),g=!!(e.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[a&&n(k,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var i,d;return[n("div",{class:"v-card-item__prepend"},[(d=(i=t.prepend)==null?void 0:i.call(t))!=null?d:n(I,null,null)])]}}),n("div",{class:"v-card-item__content"},[f&&n(ye,{key:"title"},{default:()=>{var i,d;return[(d=(i=t.title)==null?void 0:i.call(t))!=null?d:e.title]}}),g&&n(be,{key:"subtitle"},{default:()=>{var i,d;return[(d=(i=t.subtitle)==null?void 0:i.call(t))!=null?d:e.subtitle]}}),(r=t.default)==null?void 0:r.call(t)]),m&&n(k,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var i,d;return[n("div",{class:"v-card-item__append"},[(d=(i=t.append)==null?void 0:i.call(t))!=null?d:n(I,null,null)])]}})])}),{}}}),Ce=y("v-card-text"),Pe=h()({name:"VCard",directives:{Ripple:Q},props:{appendAvatar:String,appendIcon:v,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:v,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...N(),...U(),...p(),...W(),...X(),...re(),...ue(),...oe(),...Y(),...Z(),...K(),...ee({variant:"elevated"})},setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:m}=z(e),{borderClasses:f}=ae(e),{colorClasses:g,colorStyles:r,variantClasses:i}=te(e),{densityClasses:d}=ne(e),{dimensionStyles:A}=ie(e),{elevationClasses:S}=de(e),{loaderClasses:P}=ve(e),{locationStyles:x}=me(e),{positionClasses:L}=fe(e),{roundedClasses:T}=le(e),u=se(e,t),_=C(()=>e.link!==!1&&u.isLink.value),o=C(()=>!e.disabled&&e.link!==!1&&(e.link||u.isClickable.value));return b(()=>{const B=_.value?"a":e.tag,D=!!(a.title||e.title),R=!!(a.subtitle||e.subtitle),E=D||R,O=!!(a.append||e.appendAvatar||e.appendIcon),$=!!(a.prepend||e.prependAvatar||e.prependIcon),j=!!(a.image||e.image),q=E||$||O,w=!!(a.text||e.text);return G(n(B,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":o.value},m.value,f.value,g.value,d.value,S.value,P.value,L.value,T.value,i.value],style:[r.value,A.value,x.value],href:u.href.value,onClick:o.value&&u.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var V;return[j&&n(k,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var s,c;return[n("div",{class:"v-card__image"},[(c=(s=a.image)==null?void 0:s.call(a))!=null?c:n(M,null,null)])]}}),n(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),q&&n(Ve,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),w&&n(Ce,{key:"text"},{default:()=>{var s,c;return[(c=(s=a.text)==null?void 0:s.call(a))!=null?c:e.text]}}),(V=a.default)==null?void 0:V.call(a),a.actions&&n(ke,null,{default:a.actions}),ce(o.value,"v-card")]}}),[[J("ripple"),o.value&&e.ripple]])}),{}}});export{Ve as V,ye as a,be as b,Pe as c};
