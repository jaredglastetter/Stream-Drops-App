import{z as s,C as i,D as l,E as t,m as o,F as e}from"./index.8c8c234d.js";import{V as n}from"./VContainer.49234544.js";import{V as p,a as c}from"./VRow.a59411ba.js";import{V as m}from"./VBtn.a0f54b8b.js";import{e as u}from"./router.e67466bf.js";import"./tag.090dc54c.js";import"./position.c64b479c.js";import"./size.1dc468f7.js";import"./intersectionObserver.5c113ba0.js";import"./VProgressCircular.b66cd299.js";const g={__name:"Login",setup(_){s();function a(){console.log("env: ",{VITE_DOMAIN_NAME:"https://streamdrops.xyz",VITE_API_DOMAIN_NAME:"https://streamdrops.xyz",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0});const r="https://streamdrops.xyz/api/auth/twitch";window.open(r,"_blank")}return(r,d)=>(i(),l(n,null,{default:t(()=>[o(c,{justify:"center"},{default:t(()=>[o(p,{cols:"12",md:"6",lg:"4",xl:"3"},{default:t(()=>[o(m,{color:"purple",onClick:a,block:""},{default:t(()=>[o(u,null,{default:t(()=>[e("mdi-twitch")]),_:1}),e("Login with Twitch")]),_:1})]),_:1})]),_:1})]),_:1}))}};export{g as default};