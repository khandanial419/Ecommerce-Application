import{_ as y,b as G,g as be,k as oe,a as Ie,d as Ue}from"./extendSxProp-DYxyISX6.js";import{c as v}from"./clsx-B-dksMZM.js";import{u as ee,a as He,b as ze}from"./useIsFocusVisible-Dz61t37o.js";import{r as a,R as K,j as F}from"./index-DFJ8RUfK.js";import{s as se,u as ye}from"./styled-By87HV1d.js";import{e as Y}from"./createSvgIcon-f1EqLi6r.js";function Ae(e){return typeof e=="string"}function Ke(e,n,t){return e===void 0||Ae(e)?n:y({},n,{ownerState:y({},n.ownerState,t)})}function We(e,n=[]){if(e===void 0)return{};const t={};return Object.keys(e).filter(s=>s.match(/^on[A-Z]/)&&typeof e[s]=="function"&&!n.includes(s)).forEach(s=>{t[s]=e[s]}),t}function pe(e){if(e===void 0)return{};const n={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&typeof e[t]=="function")).forEach(t=>{n[t]=e[t]}),n}function Xe(e){const{getSlotProps:n,additionalProps:t,externalSlotProps:s,externalForwardedProps:o,className:r}=e;if(!n){const R=v(t==null?void 0:t.className,r,o==null?void 0:o.className,s==null?void 0:s.className),h=y({},t==null?void 0:t.style,o==null?void 0:o.style,s==null?void 0:s.style),b=y({},t,o,s);return R.length>0&&(b.className=R),Object.keys(h).length>0&&(b.style=h),{props:b,internalRef:void 0}}const i=We(y({},o,s)),p=pe(s),u=pe(o),c=n(i),f=v(c==null?void 0:c.className,t==null?void 0:t.className,r,o==null?void 0:o.className,s==null?void 0:s.className),g=y({},c==null?void 0:c.style,t==null?void 0:t.style,o==null?void 0:o.style,s==null?void 0:s.style),m=y({},c,t,u,p);return f.length>0&&(m.className=f),Object.keys(g).length>0&&(m.style=g),{props:m,internalRef:c.ref}}function Ye(e,n,t){return typeof e=="function"?e(n,t):e}const Ge=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Pt(e){var n;const{elementType:t,externalSlotProps:s,ownerState:o,skipResolvingSlotProps:r=!1}=e,i=G(e,Ge),p=r?{}:Ye(s,o),{props:u,internalRef:c}=Xe(y({},i,{externalSlotProps:p})),f=ee(c,p==null?void 0:p.ref,(n=e.additionalProps)==null?void 0:n.ref);return Ke(t,y({},u,{ref:f}),o)}const qe=a.createContext(),Tt=()=>{const e=a.useContext(qe);return e??!1};function te(e,n){return te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,s){return t.__proto__=s,t},te(e,n)}function Ze(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,te(e,n)}const de=K.createContext(null);function Je(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e,n){var t=function(r){return n&&a.isValidElement(r)?n(r):r},s=Object.create(null);return e&&a.Children.map(e,function(o){return o}).forEach(function(o){s[o.key]=t(o)}),s}function Qe(e,n){e=e||{},n=n||{};function t(f){return f in n?n[f]:e[f]}var s=Object.create(null),o=[];for(var r in e)r in n?o.length&&(s[r]=o,o=[]):o.push(r);var i,p={};for(var u in n){if(s[u])for(i=0;i<s[u].length;i++){var c=s[u][i];p[s[u][i]]=t(c)}p[u]=t(u)}for(i=0;i<o.length;i++)p[o[i]]=t(o[i]);return p}function _(e,n,t){return t[n]!=null?t[n]:e.props[n]}function et(e,n){return re(e.children,function(t){return a.cloneElement(t,{onExited:n.bind(null,t),in:!0,appear:_(t,"appear",e),enter:_(t,"enter",e),exit:_(t,"exit",e)})})}function tt(e,n,t){var s=re(e.children),o=Qe(n,s);return Object.keys(o).forEach(function(r){var i=o[r];if(a.isValidElement(i)){var p=r in n,u=r in s,c=n[r],f=a.isValidElement(c)&&!c.props.in;u&&(!p||f)?o[r]=a.cloneElement(i,{onExited:t.bind(null,i),in:!0,exit:_(i,"exit",e),enter:_(i,"enter",e)}):!u&&p&&!f?o[r]=a.cloneElement(i,{in:!1}):u&&p&&a.isValidElement(c)&&(o[r]=a.cloneElement(i,{onExited:t.bind(null,i),in:c.props.in,exit:_(i,"exit",e),enter:_(i,"enter",e)}))}}),o}var nt=Object.values||function(e){return Object.keys(e).map(function(n){return e[n]})},ot={component:"div",childFactory:function(n){return n}},ie=function(e){Ze(n,e);function n(s,o){var r;r=e.call(this,s,o)||this;var i=r.handleExited.bind(Je(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(o,r){var i=r.children,p=r.handleExited,u=r.firstRender;return{children:u?et(o,p):tt(o,i,p),firstRender:!1}},t.handleExited=function(o,r){var i=re(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(p){var u=y({},p.children);return delete u[o.key],{children:u}}))},t.render=function(){var o=this.props,r=o.component,i=o.childFactory,p=G(o,["component","childFactory"]),u=this.state.contextValue,c=nt(this.state.children).map(i);return delete p.appear,delete p.enter,delete p.exit,r===null?K.createElement(de.Provider,{value:u},c):K.createElement(de.Provider,{value:u},K.createElement(r,p,c))},n}(K.Component);ie.propTypes={};ie.defaultProps=ot;function st(e){const{className:n,classes:t,pulsate:s=!1,rippleX:o,rippleY:r,rippleSize:i,in:p,onExited:u,timeout:c}=e,[f,g]=a.useState(!1),m=v(n,t.ripple,t.rippleVisible,s&&t.ripplePulsate),R={width:i,height:i,top:-(i/2)+r,left:-(i/2)+o},h=v(t.child,f&&t.childLeaving,s&&t.childPulsate);return!p&&!f&&g(!0),a.useEffect(()=>{if(!p&&u!=null){const b=setTimeout(u,c);return()=>{clearTimeout(b)}}},[u,p,c]),F.jsx("span",{className:m,style:R,children:F.jsx("span",{className:h})})}const x=be("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),rt=["center","classes","className"];let q=e=>e,fe,he,me,ge;const ne=550,it=80,lt=oe(fe||(fe=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),at=oe(he||(he=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ut=oe(me||(me=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ct=se("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),pt=se(st,{name:"MuiTouchRipple",slot:"Ripple"})(ge||(ge=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),x.rippleVisible,lt,ne,({theme:e})=>e.transitions.easing.easeInOut,x.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,x.child,x.childLeaving,at,ne,({theme:e})=>e.transitions.easing.easeInOut,x.childPulsate,ut,({theme:e})=>e.transitions.easing.easeInOut),dt=a.forwardRef(function(n,t){const s=ye({props:n,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:i}=s,p=G(s,rt),[u,c]=a.useState([]),f=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const m=a.useRef(!1),R=He(),h=a.useRef(null),b=a.useRef(null),I=a.useCallback(d=>{const{pulsate:C,rippleX:M,rippleY:B,rippleSize:$,cb:H}=d;c(E=>[...E,F.jsx(pt,{classes:{ripple:v(r.ripple,x.ripple),rippleVisible:v(r.rippleVisible,x.rippleVisible),ripplePulsate:v(r.ripplePulsate,x.ripplePulsate),child:v(r.child,x.child),childLeaving:v(r.childLeaving,x.childLeaving),childPulsate:v(r.childPulsate,x.childPulsate)},timeout:ne,pulsate:C,rippleX:M,rippleY:B,rippleSize:$},f.current)]),f.current+=1,g.current=H},[r]),O=a.useCallback((d={},C={},M=()=>{})=>{const{pulsate:B=!1,center:$=o||C.pulsate,fakeElement:H=!1}=C;if((d==null?void 0:d.type)==="mousedown"&&m.current){m.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(m.current=!0);const E=H?null:b.current,N=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let T,w,k;if($||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)T=Math.round(N.width/2),w=Math.round(N.height/2);else{const{clientX:D,clientY:S}=d.touches&&d.touches.length>0?d.touches[0]:d;T=Math.round(D-N.left),w=Math.round(S-N.top)}if($)k=Math.sqrt((2*N.width**2+N.height**2)/3),k%2===0&&(k+=1);else{const D=Math.max(Math.abs((E?E.clientWidth:0)-T),T)*2+2,S=Math.max(Math.abs((E?E.clientHeight:0)-w),w)*2+2;k=Math.sqrt(D**2+S**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{I({pulsate:B,rippleX:T,rippleY:w,rippleSize:k,cb:M})},R.start(it,()=>{h.current&&(h.current(),h.current=null)})):I({pulsate:B,rippleX:T,rippleY:w,rippleSize:k,cb:M})},[o,I,R]),U=a.useCallback(()=>{O({},{pulsate:!0})},[O]),j=a.useCallback((d,C)=>{if(R.clear(),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,R.start(0,()=>{j(d,C)});return}h.current=null,c(M=>M.length>0?M.slice(1):M),g.current=C},[R]);return a.useImperativeHandle(t,()=>({pulsate:U,start:O,stop:j}),[U,O,j]),F.jsx(ct,y({className:v(x.root,r.root,i),ref:b},p,{children:F.jsx(ie,{component:null,exit:!0,children:u})}))});function ft(e){return Ie("MuiButtonBase",e)}const ht=be("MuiButtonBase",["root","disabled","focusVisible"]),mt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],gt=e=>{const{disabled:n,focusVisible:t,focusVisibleClassName:s,classes:o}=e,i=Ue({root:["root",n&&"disabled",t&&"focusVisible"]},ft,o);return t&&s&&(i.root+=` ${s}`),i},bt=se("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ht.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),St=a.forwardRef(function(n,t){const s=ye({props:n,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:i,className:p,component:u="button",disabled:c=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:m=!1,LinkComponent:R="a",onBlur:h,onClick:b,onContextMenu:I,onDragLeave:O,onFocus:U,onFocusVisible:j,onKeyDown:d,onKeyUp:C,onMouseDown:M,onMouseLeave:B,onMouseUp:$,onTouchEnd:H,onTouchMove:E,onTouchStart:N,tabIndex:T=0,TouchRippleProps:w,touchRippleRef:k,type:D}=s,S=G(s,mt),z=a.useRef(null),P=a.useRef(null),Re=ee(P,k),{isFocusVisibleRef:le,onFocus:ve,onBlur:xe,ref:Ce}=ze(),[L,W]=a.useState(!1);c&&L&&W(!1),a.useImperativeHandle(o,()=>({focusVisible:()=>{W(!0),z.current.focus()}}),[]);const[Z,Me]=a.useState(!1);a.useEffect(()=>{Me(!0)},[]);const Ee=Z&&!f&&!c;a.useEffect(()=>{L&&m&&!f&&Z&&P.current.pulsate()},[f,m,L,Z]);function V(l,ue,$e=g){return Y(ce=>(ue&&ue(ce),!$e&&P.current&&P.current[l](ce),!0))}const Pe=V("start",M),Te=V("stop",I),Se=V("stop",O),Ve=V("stop",$),Ne=V("stop",l=>{L&&l.preventDefault(),B&&B(l)}),we=V("start",N),ke=V("stop",H),Be=V("stop",E),De=V("stop",l=>{xe(l),le.current===!1&&W(!1),h&&h(l)},!1),Le=Y(l=>{z.current||(z.current=l.currentTarget),ve(l),le.current===!0&&(W(!0),j&&j(l)),U&&U(l)}),J=()=>{const l=z.current;return u&&u!=="button"&&!(l.tagName==="A"&&l.href)},Q=a.useRef(!1),_e=Y(l=>{m&&!Q.current&&L&&P.current&&l.key===" "&&(Q.current=!0,P.current.stop(l,()=>{P.current.start(l)})),l.target===l.currentTarget&&J()&&l.key===" "&&l.preventDefault(),d&&d(l),l.target===l.currentTarget&&J()&&l.key==="Enter"&&!c&&(l.preventDefault(),b&&b(l))}),Fe=Y(l=>{m&&l.key===" "&&P.current&&L&&!l.defaultPrevented&&(Q.current=!1,P.current.stop(l,()=>{P.current.pulsate(l)})),C&&C(l),b&&l.target===l.currentTarget&&J()&&l.key===" "&&!l.defaultPrevented&&b(l)});let X=u;X==="button"&&(S.href||S.to)&&(X=R);const A={};X==="button"?(A.type=D===void 0?"button":D,A.disabled=c):(!S.href&&!S.to&&(A.role="button"),c&&(A["aria-disabled"]=c));const Oe=ee(t,Ce,z),ae=y({},s,{centerRipple:r,component:u,disabled:c,disableRipple:f,disableTouchRipple:g,focusRipple:m,tabIndex:T,focusVisible:L}),je=gt(ae);return F.jsxs(bt,y({as:X,className:v(je.root,p),ownerState:ae,onBlur:De,onClick:b,onContextMenu:Te,onFocus:Le,onKeyDown:_e,onKeyUp:Fe,onMouseDown:Pe,onMouseLeave:Ne,onMouseUp:Ve,onDragLeave:Se,onTouchEnd:ke,onTouchMove:Be,onTouchStart:we,ref:Oe,tabIndex:c?-1:T,type:D},A,S,{children:[i,Ee?F.jsx(dt,y({ref:Re,center:r},w)):null]}))});export{St as B,de as T,Ze as _,Tt as a,We as e,Ae as i,Pt as u};
