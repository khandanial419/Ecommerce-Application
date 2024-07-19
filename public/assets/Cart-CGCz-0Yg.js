import{r as l,j as o,a as B,c as E,o as U}from"./index-DFJ8RUfK.js";import{g as W,b as k,s as y,u as D,c as u,C as I,a as J,T as x}from"./Typography-CgrQklIM.js";import{_ as n,b as M,c as v,d as O}from"./extendSxProp-DYxyISX6.js";import{C as G,B as f}from"./CardOverflow-rR88_3Xj.js";import"./clsx-B-dksMZM.js";import"./useIsFocusVisible-Dz61t37o.js";import"./useThemeProps-BG9ARPrO.js";import"./useTheme-Bxj5s0eR.js";function L(t){return W("MuiAspectRatio",t)}k("MuiAspectRatio",["root","content","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);const V=["children","ratio","minHeight","maxHeight","objectFit","color","variant","component","flex","slots","slotProps"],q=t=>{const{variant:e,color:i}=t,r={root:["root"],content:["content",e&&`variant${v(e)}`,i&&`color${v(i)}`]};return O(r,L,{})},K=y("div",{name:"JoyAspectRatio",slot:"Root",overridesResolver:(t,e)=>e.root})(({ownerState:t,theme:e})=>{const i=typeof t.minHeight=="number"?`${t.minHeight}px`:t.minHeight,r=typeof t.maxHeight=="number"?`${t.maxHeight}px`:t.maxHeight;return{"--AspectRatio-paddingBottom":`clamp(var(--AspectRatio-minHeight), calc(100% / (${t.ratio})), var(--AspectRatio-maxHeight))`,"--AspectRatio-maxHeight":r||"9999px","--AspectRatio-minHeight":i||"0px","--Icon-color":t.color!=="neutral"||t.variant==="solid"?"currentColor":e.vars.palette.text.icon,borderRadius:"var(--AspectRatio-radius)",display:t.flex?"flex":"block",flex:t.flex?1:"initial",flexDirection:"column",margin:"var(--AspectRatio-margin)"}}),Q=y("div",{name:"JoyAspectRatio",slot:"Content",overridesResolver:(t,e)=>e.content})(({theme:t,ownerState:e})=>{var i;return n({flex:1,position:"relative",borderRadius:"inherit",height:0,paddingBottom:"calc(var(--AspectRatio-paddingBottom) - 2 * var(--variant-borderWidth, 0px))",overflow:"hidden",transition:"inherit","& [data-first-child]":{display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",position:"absolute",width:"100%",height:"100%",objectFit:e.objectFit,margin:0,padding:0,"& > img":{width:"100%",height:"100%",objectFit:e.objectFit}}},t.typography["body-md"],(i=t.variants[e.variant])==null?void 0:i[e.color])}),X=l.forwardRef(function(e,i){const r=D({props:e,name:"JoyAspectRatio"}),{children:d,ratio:s="16 / 9",minHeight:a,maxHeight:c,objectFit:R="cover",color:j="neutral",variant:b="soft",component:C,flex:A=!1,slots:H={},slotProps:P={}}=r,N=M(r,V),p=n({},r,{flex:A,minHeight:a,maxHeight:c,objectFit:R,ratio:s,color:j,variant:b}),h=q(p),g=n({},N,{component:C,slots:H,slotProps:P}),[F,$]=u("root",{ref:i,className:h.root,elementType:K,externalForwardedProps:g,ownerState:p}),[T,_]=u("content",{className:h.content,elementType:Q,externalForwardedProps:g,ownerState:p});return o.jsx(F,n({},$,{children:o.jsx(T,n({},_,{children:l.Children.map(d,(m,z)=>z===0&&l.isValidElement(m)?l.cloneElement(m,{"data-first-child":""}):m)}))}))}),it=()=>{const t=B(s=>s.cart),e=E(),i=s=>{e(U(s))},r=t.reduce((s,a)=>{const c=parseFloat(a.price);return isNaN(c)?s:s+c},0),d=()=>{alert("Proceeding to payment")};return o.jsxs("div",{className:"min-h-screen flex flex-col items-center my-10",children:[o.jsx("h2",{className:"text-3xl font-bold text-[#0494b8] mb-10",children:"CART PAGE"}),t.length>0?o.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 gap-5",children:[o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ",children:t.map((s,a)=>o.jsxs(I,{sx:{width:320,maxWidth:"100%",boxShadow:"lg"},children:[o.jsx(X,{ratio:"2/3",children:o.jsx("img",{src:s.image_url,loading:"lazy",alt:s.name})}),o.jsxs(J,{children:[o.jsx(x,{level:"body-xs",children:s.name}),o.jsxs(x,{level:"body-md",sx:{mt:1},children:["$",s.price]}),o.jsx(x,{level:"body-sm",sx:{color:"text.secondary"},children:s.description})]}),o.jsx(G,{children:o.jsx(f,{variant:"solid",color:"primary",size:"lg",onClick:()=>i(s.id),children:"Remove"})})]},a))}),o.jsx("div",{className:"w-full flex justify-end mt-10",children:o.jsxs(f,{variant:"solid",color:"primary",size:"lg",onClick:d,children:["Pay $",r.toFixed(2)]})})]}):o.jsx("p",{className:"text-xl text-gray-600 mt-8",children:"No products added to the cart."})]})};export{it as default};
