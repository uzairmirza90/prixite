(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[658],{7720:function(e,t,r){"use strict";var n=r(3366),i=r(7462),a=r(7294),o=r(6010),l=r(4780),s=r(1796),c=r(948),A=r(1657),d=r(5097),h=r(5893);const u=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,i.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),x=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,i.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),g=a.forwardRef((function(e,t){const r=(0,A.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:s,className:c,component:g=(s?"div":"hr"),flexItem:f=!1,light:m=!1,orientation:v="horizontal",role:b=("hr"!==g?"separator":void 0),textAlign:w="center",variant:Z="fullWidth"}=r,j=(0,n.Z)(r,u),y=(0,i.Z)({},r,{absolute:a,component:g,flexItem:f,light:m,orientation:v,role:b,textAlign:w,variant:Z}),C=(e=>{const{absolute:t,children:r,classes:n,flexItem:i,light:a,orientation:o,textAlign:s,variant:c}=e,A={root:["root",t&&"absolute",c,a&&"light","vertical"===o&&"vertical",i&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(A,d.V,n)})(y);return(0,h.jsx)(p,(0,i.Z)({as:g,className:(0,o.Z)(C.root,c),role:b,ref:t,ownerState:y},j,{children:s?(0,h.jsx)(x,{className:C.wrapper,ownerState:y,children:s}):null}))}));t.Z=g},6447:function(e,t,r){"use strict";var n=r(3366),i=r(7462),a=r(7294),o=r(5408),l=r(8700),s=r(9707),c=r(9766),A=r(948),d=r(1657),h=r(5893);const u=["component","direction","spacing","divider","children"];function p(e,t){const r=a.Children.toArray(e).filter(Boolean);return r.reduce(((e,n,i)=>(e.push(n),i<r.length-1&&e.push(a.cloneElement(t,{key:`separator-${i}`})),e)),[])}const x=(0,A.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let r=(0,i.Z)({display:"flex"},(0,o.k9)({theme:t},(0,o.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const n=(0,l.hB)(t),i=Object.keys(t.breakpoints.values).reduce(((t,r)=>(null==e.spacing[r]&&null==e.direction[r]||(t[r]=!0),t)),{}),a=(0,o.P$)({values:e.direction,base:i}),s=(0,o.P$)({values:e.spacing,base:i}),A=(t,r)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${i=r?a[r]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,l.NA)(n,t)}};var i};r=(0,c.Z)(r,(0,o.k9)({theme:t},s,A))}return r})),g=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiStack"}),a=(0,s.Z)(r),{component:o="div",direction:l="column",spacing:c=0,divider:A,children:g}=a,f=(0,n.Z)(a,u),m={direction:l,spacing:c};return(0,h.jsx)(x,(0,i.Z)({as:o,ownerState:m,ref:t},f,{children:A?p(g,A):g}))}));t.Z=g},797:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wordpress-development",function(){return r(9178)}])},6400:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(5893),i=r(7357),a=r(2293),o=r(9520),l=r(155),s=r(3946),c=r(6583),A=r(3599),d=r(5861),h=r(3321),u=r(5675),p=r.n(u),x=r(7294),g={src:"/prixite/_next/static/media/logo.9ae73deb.png",height:79,width:150,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAhElEQVR42mMAAasZDAIxx/f7TWxYFnlme1DM2XsMNgwMgWwMYNDIwFG9NeV00dbC/wXLk/43bwz5X7ct6H/yap9eBijgmnm45922S6v+r7+w5P+y0/P+rzqz6H//vvqVDCBQvy2HKWWNi3/WusCEys2psYUbQmPyNgSlFGyIMGdgYGAAAIzTNpsSQhv8AAAAAElFTkSuQmCC"},f=r(326),m=r(8153),v=r(1163),b=r(1664),w=r.n(b);function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(s){l=!0,i=s}finally{try{o||null==r.return||r.return()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(e){var t=e.children,r=e.bgImg,u=j(x.useState(null),2),b=u[0],Z=u[1],y=(0,v.useRouter)(),C=function(e){"Home"===e.text?y.push("/"):"Careers"===e.text?y.push("/careers"):"Contact Us"===e.text&&y.push("/contact-us"),Z(null)};return(0,n.jsxs)(i.Z,{className:"header-container",sx:{background:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(".concat(null===r||void 0===r?void 0:r.src,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:[(0,n.jsx)(a.Z,{position:"static",className:"header-bar",children:(0,n.jsx)(o.Z,{maxWidth:"xl",children:(0,n.jsxs)(l.Z,{disableGutters:!0,children:[(0,n.jsx)(i.Z,{sx:{mr:2,display:{xs:"none",md:"flex"},cursor:"pointer"},children:(0,n.jsx)(p(),{src:g,alt:"Prixite",onClick:function(){return y.push("/")}})}),(0,n.jsx)(i.Z,{sx:{flexGrow:1}}),(0,n.jsx)(i.Z,{sx:{flexGrow:50,display:{xs:"flex",md:"none"},cursor:"pointer"},children:(0,n.jsx)(p(),{src:g,alt:"Prixite",onClick:function(){return y.push("/")}})}),(0,n.jsxs)(i.Z,{sx:{flexGrow:0,display:{xs:"flex",md:"none"}},children:[(0,n.jsx)(s.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){Z(e.currentTarget)},color:"inherit",children:(0,n.jsx)(f.Z,{})}),(0,n.jsx)(c.Z,{id:"menu-appbar",anchorEl:b,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(b),onClose:C,sx:{display:{xs:"block",md:"none"}},children:m.L1.map((function(e,t){return(0,n.jsx)(A.Z,{onClick:function(){return C(e)},children:(0,n.jsx)(d.Z,{textAlign:"center",children:e.text})},t)}))})]}),(0,n.jsx)(i.Z,{className:"header-menu",sx:{display:{xs:"none",md:"flex"}},children:m.L1.map((function(e,t){return"Contact Us"==e.text?(0,n.jsx)(w(),{href:null===e||void 0===e?void 0:e.path,sx:{textDecoration:"none"},passHref:!0,children:(0,n.jsx)(h.Z,{className:"contact-us-button",sx:{mx:2},children:e.text})},t):(0,n.jsx)(w(),{href:null===e||void 0===e?void 0:e.path,sx:{textDecoration:"none"},passHref:!0,children:(0,n.jsx)(d.Z,{className:"header-menu-items",sx:{mx:2,color:y.asPath==e.path?"var(--primary-green)":"white"},textAlign:"center",children:e.text})},t)}))})]})})}),t]})}},9178:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),i=(r(7294),r(9008)),a=r.n(i),o=r(8153),l=r(6400),s={src:"/prixite/_next/static/media/wall1.f0ab3691.jpg",height:2560,width:1707,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAsA//xAAcEAABAwUAAAAAAAAAAAAAAAABAAIEAwYTIlH/2gAIAQEAAT8Aj3pHfkLzRG3Cv//EABcRAAMBAAAAAAAAAAAAAAAAAAABEWH/2gAIAQIBAT8Ams//xAAWEQADAAAAAAAAAAAAAAAAAAAAIVH/2gAIAQMBAT8AUP/Z"},c=r(6751),A=r(9520),d=r(6447),h=r(7357),u=r(5861),p=r(7720),x=r(5675),g=r.n(x),f=function(){var e=o.M$.title,t=o.M$.header,r=o.M$.heading,i=o.M$.para1,x=o.M$.para2,f=o.M$.serviceHeading,m=o.M$.services;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:e}),(0,n.jsx)("meta",{name:"prixite",content:"Prixte"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(l.Z,{bgImg:s,children:(0,n.jsx)(A.Z,{maxWidth:"xl",children:(0,n.jsxs)(d.Z,{pt:{xs:"80px",lg:"200px"},pb:{xs:"100px",lg:"200px"},direction:{xs:"column",md:"row"},spacing:5,children:[(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(u.Z,{variant:"h3",sx:{fontWeight:"bold",color:"white"},children:t}),(0,n.jsx)(p.Z,{textAlign:"left",sx:{width:"17%",marginTop:"2rem",borderColor:"var(--primary-green)",borderWidth:"1px"}}),(0,n.jsx)(u.Z,{variant:"h6",sx:{fontWeight:"600",marginTop:"1rem",color:"white"},children:r})]}),(0,n.jsx)(h.Z,{textAlign:"center",children:(0,n.jsx)(g(),{unoptimized:!0,priority:!0,src:c.Z,width:800,height:450,alt:"service-image"})})]})})}),(0,n.jsxs)(A.Z,{sx:{display:"flex",flexDirection:"column",gap:4,py:10,opacity:.8},maxWidth:"xl",children:[(0,n.jsx)(u.Z,{children:i}),(0,n.jsx)(u.Z,{children:f}),m.map((function(e,t){return(0,n.jsx)(h.Z,{children:(0,n.jsx)("ul",{className:"wordpress-list",children:(0,n.jsx)("li",{children:e})})},t)})),(0,n.jsx)(u.Z,{children:x})]})]})}}},function(e){e.O(0,[789,774,888,179],(function(){return t=797,e(e.s=t);var t}));var t=e.O();_N_E=t}]);