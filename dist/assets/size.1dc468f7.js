import{c as o,M as r,a7 as i,a8 as u,p as d,L as g,a9 as C,b as n}from"./index.8c8c234d.js";function c(e){return i(()=>{const t=[],s={};return e.value.background&&(u(e.value.background)?s.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(u(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:s}})}function z(e,t){const s=o(()=>({text:r(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:l}=c(s);return{textColorClasses:a,textColorStyles:l}}function b(e,t){const s=o(()=>({background:r(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:l}=c(s);return{backgroundColorClasses:a,backgroundColorStyles:l}}const f=["x-small","small","default","large","x-large"],m=d({size:{type:[String,Number],default:"default"}},"size");function v(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:g();return i(()=>{let s,a;return C(f,e.size)?s=`${t}--size-${e.size}`:e.size&&(a={width:n(e.size),height:n(e.size)}),{sizeClasses:s,sizeStyles:a}})}export{c as a,v as b,z as c,m,b as u};
