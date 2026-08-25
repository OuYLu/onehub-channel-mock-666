import{n as e,s as t,t as n}from"./jsx-runtime-D1sSv8GP.js";import{r}from"./react-redux-CF6MWKvO.js";import{J as i,d as a}from"./CircularProgress-CIy2Mw_B.js";import{t as o}from"./prop-types-BQ2EQ4Dq.js";import{t as s}from"./Card-B8rdybvy.js";import{A as c,k as l}from"./index-B1mwUF_M.js";var u=t(o()),d=`/onehub-channel-mock-666/assets/background-1-DFm4KdPc.webp`;e();var f=n();function p({children:e}){let t=r(e=>e.account),n=a(),o=i`
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  `;return(0,f.jsxs)(s,{sx:{position:`relative`,borderRadius:`16px`,overflow:`hidden`},children:[(0,f.jsx)(l,{sx:{height:`140px`,background:`url(${d})`,backgroundSize:`cover`,backgroundPosition:`center`,opacity:.8,position:`relative`}}),(0,f.jsx)(l,{sx:{position:`absolute`,top:`80px`,left:`50%`,transform:`translateX(-50%)`,width:`84px`,height:`84px`,borderRadius:`50%`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`linear-gradient(90deg, 
            ${n.palette.primary.main}, 
            ${n.palette.secondary.main}, 
            ${n.palette.primary.light}, 
            ${n.palette.primary.main})`,backgroundSize:`300% 300%`,animation:`${o} 5s ease infinite`,"&:hover":{animation:`${o} 5s ease infinite`}},children:(0,f.jsx)(c,{src:t.user?.avatar_url||`/onehub-channel-mock-666/assets/user-round-BB6wRbd5.svg`,sx:{width:`80px`,height:`80px`,border:`1px solid`,borderColor:e=>e.palette.mode===`dark`?e.palette.background.paper:`#ffffff`,bgcolor:`#FFFFFF`,variant:`rounded`,transition:`transform 0.2s ease-in-out, background-color 0.2s ease-in-out`,"&:hover":{transform:`scale(1.03)`}}})}),(0,f.jsx)(l,{sx:{p:2},children:e})]})}p.propTypes={children:u.default.node};export{p as t};