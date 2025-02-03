"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3976],{4789:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>g,default:()=>b,frontMatter:()=>f,metadata:()=>r,toc:()=>j});const r=JSON.parse('{"id":"intro","title":"Tutorial Intro","description":"Let\'s discover Docusaurus in less than 5 minutes.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/remotion-test/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Tutorial - Basics","permalink":"/remotion-test/category/tutorial---basics"}}');var o=i(4848),n=i(8453),s=i(6540),l=i(3974),a=i(3947),x=i(2130);const d=e=>{let{expression:t,fontSize:i=24}=e;const r=x.Ay.renderToString(t,{throwOnError:!1});return(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:r},style:{fontSize:`${i}px`,textAlign:"center",color:"white"}})},c=e=>{let{graphType:t="cos"}=e;const i=(0,a.UC)(),r=1280,n=720,s=600,l=320,x=540,c=.05,p=300,h=e=>{switch(t){case"sin":return x-50*Math.sin(e*c);case"cos":return x-50*Math.cos(e*c);case"tan":return x-50*Math.tan(e*c)*.1;default:return x}},u=Math.min(i/p*s,s),f=l+u,g=h(u),m=Array.from({length:Math.floor(u)},((e,t)=>{const i=h(t);return`${l+t},${i}`})).join(" "),j=(0,a.GW)(i,[0,60,180,p],[1,1,2,1],{extrapolateLeft:"clamp",extrapolateRight:"clamp"}),y=(0,a.GW)(i,[0,60,180,p],[640,640,f,640],{extrapolateLeft:"clamp",extrapolateRight:"clamp"}),b=(0,a.GW)(i,[0,60,180,p],[360,360,g,360],{extrapolateLeft:"clamp",extrapolateRight:"clamp"});return(0,o.jsx)("div",{style:{background:"#1E1E1E",width:"100%",height:"100%"},children:(0,o.jsxs)("svg",{width:r,height:n,viewBox:`${y-r/j/2} ${b-n/j/2} ${r/j} ${n/j}`,children:[(0,o.jsx)("line",{x1:l,y1:x,x2:920,y2:x,stroke:"white",strokeWidth:"2",markerEnd:"url(#arrow)"}),(0,o.jsx)("line",{x1:l,y1:x,x2:l,y2:240,stroke:"white",strokeWidth:"2",markerEnd:"url(#arrow)"}),(0,o.jsxs)("defs",{children:[(0,o.jsx)("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto",children:(0,o.jsx)("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#E0E0E0"})}),(0,o.jsxs)("filter",{id:"glow",x:"-150%",y:"-150%",width:"400%",height:"400%",children:[(0,o.jsx)("feGaussianBlur",{stdDeviation:"8",result:"coloredBlur"}),(0,o.jsx)("feFlood",{floodColor:"gold",result:"glowColor"}),(0,o.jsx)("feComposite",{in:"glowColor",in2:"coloredBlur",operator:"in",result:"softGlow"}),(0,o.jsxs)("feMerge",{children:[(0,o.jsx)("feMergeNode",{in:"softGlow"}),(0,o.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,o.jsx)("polyline",{points:m,stroke:"orange",strokeWidth:"3",fill:"none",strokeLinecap:"round"}),(0,o.jsx)("circle",{cx:f,cy:g,r:"5",fill:"gold",filter:"url(#glow)",stroke:"#FFD700",strokeWidth:"2"}),(0,o.jsx)("foreignObject",{x:540,y:360,width:200,height:50,children:(0,o.jsx)(d,{expression:`y = \\${t}(x)`,fontSize:30})}),(0,o.jsx)("foreignObject",{x:925,y:530,width:50,height:50,children:(0,o.jsx)(d,{expression:"x",fontSize:24})}),(0,o.jsx)("foreignObject",{x:300,y:190,width:50,height:50,children:(0,o.jsx)(d,{expression:"y",fontSize:24})}),(0,o.jsx)("foreignObject",{x:f-10,y:g-45,width:30,height:30,children:(0,o.jsx)(d,{expression:"\\delta",fontSize:24})})]})})},p=()=>{const[e,t]=(0,s.useState)("cos");return(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"auto",width:"100%",backgroundColor:"grey",color:"white",textAlign:"center",padding:"20px",borderRadius:"10px"},children:[(0,o.jsx)("h2",{children:"Interactive Graph Animation"}),(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",maxWidth:"900px",borderRadius:"10px",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.2)"},children:(0,o.jsx)(l.ai,{component:c,durationInFrames:500,compositionWidth:1280,compositionHeight:720,fps:60,controls:!0,inputProps:{graphType:e},style:{width:"100%",borderRadius:"10px"}})}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",width:"80%",maxWidth:"900px",marginTop:"20px"},children:[(0,o.jsx)("label",{style:{fontSize:"18px",marginRight:"10px"},children:"Choose Graph Type:"}),(0,o.jsxs)("select",{value:e,onChange:e=>t(e.target.value),style:{padding:"8px",fontSize:"16px",borderRadius:"5px",backgroundColor:"#ffffff",color:"#000"},children:[(0,o.jsx)("option",{value:"sin",children:"Sine (sin)"}),(0,o.jsx)("option",{value:"cos",children:"Cosine (cos)"}),(0,o.jsx)("option",{value:"tan",children:"Tangent (tan)"})]})]})]})},h=e=>{let{matrixA:t,matrixB:i}=e;const r=(0,a.UC)(),n=t.length;let s=Math.floor(r/130),l=Math.floor(s/n),x=s%n,c="";const p=Array(n).fill(null).map((()=>Array(n).fill("?")));for(let o=0;o<n;o++)for(let e=0;e<n;e++){let r=0;for(let s=0;s<n;s++)r+=t[o][s]*i[s][e];s<n*n?o===l&&e===x?p[o][e]=`\\textcolor{gold}{${r}}`:(o<l||o===l&&e<x)&&(p[o][e]=r):p[o][e]=`\\textcolor{gold}{${r}}`}if(s<n*n){let e=[],r=0;for(let o=0;o<n;o++)e.push(`(${t[l][o]} \\cdot ${i[o][x]})`),r+=t[l][o]*i[o][x];c=`C_{(${l+1},${x+1})} = ${e.join(" + ")} = \\textbf{${r}}`}const h=function(e,t,i,r){return void 0===t&&(t=-1),void 0===i&&(i=-1),void 0===r&&(r=!1),`\\begin{bmatrix} ${e.map(((e,o)=>e.map(((e,n)=>{if(!r){if(o===t)return`\\textcolor{pink}{${e}}`;if(n===i)return`\\textcolor{green}{${e}}`}return e})).join(" & "))).join(" \\\\ ")} \\end{bmatrix}`};return(0,o.jsxs)("div",{style:{background:"#1E1E1E",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",paddingTop:"30px"},children:[(0,o.jsxs)("div",{style:{width:"80%",maxWidth:"900px",backgroundColor:"#2E2E2E",borderRadius:"10px",padding:"20px",border:"3px solid #00b4d8",boxShadow:"0px 4px 10px rgba(0, 180, 216, 0.6)",marginBottom:"60px",display:"flex",flexDirection:"column"},children:[(0,o.jsx)("div",{style:{backgroundColor:"#006494",color:"white",padding:"10px 15px",borderTopLeftRadius:"7px",borderTopRightRadius:"7px",fontSize:"20px",fontWeight:"bold",width:"100%",textAlign:"center"},children:(0,o.jsx)(d,{expression:"\\text{Dot Product}"})}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"10px"},children:[(0,o.jsx)(d,{expression:"\\textcolor{#00b4d8}{\\cdot \\text{ Given two } n \\times n \\text{ matrices,} \\text{each element } C_{i,j} \\text{ in their dot product}}",fontSize:24}),(0,o.jsx)(d,{expression:"\\textcolor{#00b4d8}{\\text{ matrix } C \\text{ is given by:}}",fontSize:24})]}),(0,o.jsx)("div",{style:{textAlign:"center",width:"100%",marginTop:"15px"},children:(0,o.jsx)(d,{expression:"\\textcolor{gold}{C_{i,j} = \\sum_{k=1}^{n} A_{i,k} \\cdot B_{k,j}}",fontSize:32})})]}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"60px",marginBottom:"30px"},children:[(0,o.jsx)(d,{expression:`A = ${h(t,l,-1)}`,fontSize:28}),(0,o.jsx)(d,{expression:"\\cdot",fontSize:40}),(0,o.jsx)(d,{expression:`B = ${h(i,-1,x,s>=n*n)}`,fontSize:28}),(0,o.jsx)(d,{expression:"=",fontSize:40}),(0,o.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,o.jsx)(d,{expression:`${h(p)}`,fontSize:28})})]}),c&&s<n*n&&(0,o.jsx)("div",{style:{marginTop:"15px"},children:(0,o.jsx)(d,{expression:c,fontSize:28})}),(0,o.jsx)("div",{style:{marginTop:"10px"},children:(0,o.jsx)(d,{expression:"C = A \\cdot B",fontSize:32})})]})},u=()=>{const[e,t]=(0,s.useState)([[1,2,3],[4,5,6],[7,8,9]]),[i,r]=(0,s.useState)([[1,0,0],[0,1,0],[0,0,1]]);return(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"auto",width:"100%",maxWidth:"900px",backgroundColor:"gray",color:"white",textAlign:"center",padding:"20px",borderRadius:"10px"},children:[(0,o.jsx)("h2",{style:{color:"white"},children:"Interactive Matrix Dot Product"}),(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",maxWidth:"750px",borderRadius:"10px",marginBottom:"20px"},children:(0,o.jsx)(l.ai,{component:h,durationInFrames:1710,compositionWidth:1280,compositionHeight:720,fps:60,controls:!0,inputProps:{matrixA:e,matrixB:i},style:{width:"100%",maxWidth:"750px",borderRadius:"10px"}})}),(0,o.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"center",gap:"30px",width:"100%",maxWidth:"750px",padding:"10px"},children:[{label:"Matrix A",matrix:e,type:"A"},{label:"Matrix B",matrix:i,type:"B"}].map((n=>{let{label:s,matrix:l,type:a}=n;return(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)("h3",{style:{marginBottom:"10px",whiteSpace:"nowrap"},children:s}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${l[0].length}, 1fr)`,gap:"6px"},children:l.map(((n,s)=>n.map(((n,l)=>(0,o.jsx)("input",{type:"number",value:n,onChange:o=>((o,n,s,l)=>{if("A"===o){const i=e.map(((e,t)=>e.map(((e,i)=>t===n&&i===s?l:e))));t(i)}else{const e=i.map(((e,t)=>e.map(((e,i)=>t===n&&i===s?l:e))));r(e)}})(a,s,l,Number(o.target.value)),style:{width:"50px",height:"50px",padding:"5px",fontSize:"16px",textAlign:"center",borderRadius:"5px",backgroundColor:"#1E1E1E",color:"white",outline:"none"}},`${a}-${s}-${l}`)))))})]},a)}))})]})},f={sidebar_position:1},g="Tutorial Intro",m={},j=[];function y(e){const t={h1:"h1",header:"header",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"tutorial-intro",children:"Tutorial Intro"})}),"\n",(0,o.jsxs)(t.p,{children:["Let's discover ",(0,o.jsx)(t.strong,{children:"Docusaurus in less than 5 minutes"}),"."]}),"\n",(0,o.jsx)(t.h1,{id:"hello-docusaurus",children:"Hello Docusaurus"}),"\n",(0,o.jsx)(t.p,{children:"Here is an interactive Remotion animation:"}),"\n","\n",(0,o.jsx)(p,{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(u,{})]})}function b(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(y,{...e})}):y(e)}}}]);