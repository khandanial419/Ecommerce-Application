import{b,_ as a,d as g}from"./extendSxProp-DYxyISX6.js";import{r as t,j as y}from"./index-DFJ8RUfK.js";import{c as R}from"./clsx-B-dksMZM.js";import{g as j,b as P,s as w,u as E,c as S}from"./Typography-CgrQklIM.js";function U(o){return j("MuiCardCover",o)}P("MuiCardCover",["root"]);const _=["className","component","children","slots","slotProps"],F=()=>g({root:["root"]},U,{}),N=w("div",{name:"JoyCardCover",slot:"Root",overridesResolver:(o,e)=>e.root})({position:"absolute",zIndex:0,top:0,left:0,right:0,bottom:0,borderRadius:"var(--CardCover-radius)","& [data-first-child]":{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",objectFit:"cover",boxSizing:"border-box",borderRadius:"var(--CardCover-radius)",margin:0,padding:0,"& > img":{width:"100%",height:"100%",objectFit:"cover"}}}),T=t.forwardRef(function(e,n){const s=E({props:e,name:"JoyCardCover"}),{className:d,component:i="div",children:l,slots:c={},slotProps:p={}}=s,C=b(s,_),m=a({},s,{component:i}),u=F(),v=a({},C,{component:i,slots:c,slotProps:p}),[h,f]=S("root",{ref:n,className:R(u.root,d),elementType:N,externalForwardedProps:v,ownerState:m});return y.jsx(h,a({},f,{children:t.Children.map(l,(r,x)=>x===0&&t.isValidElement(r)?t.cloneElement(r,{"data-first-child":""}):r)}))});export{T as C};
