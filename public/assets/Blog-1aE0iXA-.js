import{r as a,u,j as e,R as g}from"./index-DFJ8RUfK.js";import{B as b}from"./data-DNLswhs4.js";import{C as j}from"./Container-D1Tmy-kC.js";import{T as x}from"./Typography-CEAQ5Qda.js";import{G as h}from"./Grid-BwKzR768.js";import"./styled-By87HV1d.js";import"./extendSxProp-DYxyISX6.js";import"./createSvgIcon-B6mKuzPO.js";import"./createSvgIcon-f1EqLi6r.js";import"./clsx-B-dksMZM.js";import"./useIsFocusVisible-Dz61t37o.js";import"./useThemeProps-BG9ARPrO.js";import"./useTheme-Bxj5s0eR.js";import"./useTheme-BqiqaDCy.js";const v=({title:i,content:l,moreContent:o,image:t,date:r,index:s,height:c})=>{const[m,y]=a.useState(!1),n=u(),d=a.useRef(),f=new Date(r).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"2-digit"}),p=()=>{switch(s){case 0:n(`/blogmen/${s}`);break;case 1:n(`/blogwomen/${s}`);break;case 2:n(`/blogbabydoll/${s}`);break;case 3:n(`/blogbabyprince/${s}`);break;default:n("/blog")}};return a.useEffect(()=>{c&&(d.current.style.height=`${c}px`)},[c]),e.jsxs("div",{ref:d,className:"p-4 flex flex-col justify-between bg-white shadow-md rounded-lg overflow-hidden w-full",style:{minHeight:"500px"},children:[e.jsx("div",{className:"relative rounded-lg overflow-hidden",children:e.jsx("img",{src:t,alt:i,className:"w-full h-48 object-cover rounded-lg",style:{minWidth:"300px",minHeight:"400px"}})}),e.jsxs("div",{className:"flex items-center text-xl text-black-600 mt-2 p-4",children:[e.jsx("i",{className:"fas fa-clock mr-2 text-[#0494b8]"}),f]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{className:"text-xl font-semibold mb-2",children:i}),e.jsx("p",{className:"text-gray-700 mb-4",children:l}),m&&e.jsx("p",{className:"text-gray-600",children:o}),e.jsx("button",{className:"bg-[#0494b8] text-white px-4 py-2 rounded hover:bg-blue-600",onClick:p,children:m?"Show Less":"Read More"})]})]})},G=()=>{g.useEffect(()=>{window.scrollTo(0,0)},[]);const[i,l]=a.useState([]),o=a.useRef([]);return a.useEffect(()=>{const t=o.current.map(s=>s.offsetHeight),r=Math.max(...t);l(t.map(()=>r))},[o.current]),e.jsx("div",{className:"min-h-screen flex flex-col justify-between",children:e.jsx("main",{className:"flex-grow p-4 md:p-10",children:e.jsxs(j,{sx:{py:8},maxWidth:"full",children:[e.jsx(x,{variant:"h2",align:"center",gutterBottom:!0,sx:{color:"#0494b8"},children:"Blog"}),e.jsx(x,{variant:"body1",align:"center",sx:{mt:4,fontSize:"1.5rem"},children:"Join our community of savvy movers to discover expert tips, exclusive offers, and personalized moving solutions that ensure a smooth and stress-free transition to your new home!"}),e.jsx("hr",{className:"border-2 border-[#0494b8] w-40 mx-auto my-5"}),e.jsx(h,{container:!0,spacing:4,children:b.map((t,r)=>e.jsx(h,{item:!0,xs:12,sm:6,md:6,lg:6,children:e.jsx("div",{ref:s=>o.current[r]=s,children:e.jsx(v,{title:t.title,content:t.content,moreContent:t.moreContent,image:t.image,date:t.date,index:r,height:i[r]})})},r))})]})})})};export{G as default};
