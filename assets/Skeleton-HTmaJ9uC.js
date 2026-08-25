import{n as e,s as t,t as n}from"./jsx-runtime-D1sSv8GP.js";import{D as r,E as i,J as a,T as o,_ as s,c,i as l,q as u,r as d}from"./CircularProgress-CIy2Mw_B.js";function f(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||``}function p(e){return parseFloat(e)}var m=t(e());function h(e){return i(`MuiSkeleton`,e)}o(`MuiSkeleton`,[`root`,`text`,`rectangular`,`rounded`,`circular`,`pulse`,`wave`,`withChildren`,`fitContent`,`heightAuto`]);var g=n(),_=e=>{let{classes:t,variant:n,animation:r,hasChildren:i,width:a,height:o}=e;return s({root:[`root`,n,r,i&&`withChildren`,i&&!a&&`fitContent`,i&&!o&&`heightAuto`]},h,t)},v=a`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,y=a`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,b=typeof v==`string`?null:u`
        animation: ${v} 2s ease-in-out 0.5s infinite;
      `,x=typeof y==`string`?null:u`
        &::after {
          animation: ${y} 2s linear 0.5s infinite;
        }
      `,S=c(`span`,{name:`MuiSkeleton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(l(({theme:e})=>{let t=f(e.shape.borderRadius)||`px`,n=p(e.shape.borderRadius);return{display:`block`,backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode===`light`?.11:.13),height:`1.2em`,variants:[{props:{variant:`text`},style:{marginTop:0,marginBottom:0,height:`auto`,transformOrigin:`0 55%`,transform:`scale(1, 0.60)`,borderRadius:`${n}${t}/${Math.round(n/.6*10)/10}${t}`,"&:empty:before":{content:`"\\00a0"`}}},{props:{variant:`circular`},style:{borderRadius:`50%`}},{props:{variant:`rounded`},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:`hidden`}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:`fit-content`}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:`auto`}},{props:{animation:`pulse`},style:b||{animation:`${v} 2s ease-in-out 0.5s infinite`}},{props:{animation:`wave`},style:{position:`relative`,overflow:`hidden`,WebkitMaskImage:`-webkit-radial-gradient(white, black)`,"&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:`""`,position:`absolute`,transform:`translateX(-100%)`,bottom:0,left:0,right:0,top:0}}},{props:{animation:`wave`},style:x||{"&::after":{animation:`${y} 2s linear 0.5s infinite`}}}]}})),C=m.forwardRef(function(e,t){let n=d({props:e,name:`MuiSkeleton`}),{animation:i=`pulse`,className:a,component:o=`span`,height:s,style:c,variant:l=`text`,width:u,...f}=n,p={...n,animation:i,component:o,variant:l,hasChildren:!!f.children};return(0,g.jsx)(S,{as:o,ref:t,className:r(_(p).root,a),ownerState:p,...f,style:{width:u,height:s,...c}})});export{C as t};