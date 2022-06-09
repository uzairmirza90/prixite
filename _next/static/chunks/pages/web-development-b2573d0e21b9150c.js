(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[748],{7720:function(e,t,r){"use strict";var n=r(3366),i=r(7462),o=r(7294),a=r(6010),l=r(4780),s=r(1796),c=r(948),d=r(1657),h=r(5097),u=r(5893);const p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],x=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,i.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),g=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,i.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),m=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:s,className:c,component:m=(s?"div":"hr"),flexItem:f=!1,light:v=!1,orientation:A="horizontal",role:b=("hr"!==m?"separator":void 0),textAlign:w="center",variant:Z="fullWidth"}=r,j=(0,n.Z)(r,p),y=(0,i.Z)({},r,{absolute:o,component:m,flexItem:f,light:v,orientation:A,role:b,textAlign:w,variant:Z}),S=(e=>{const{absolute:t,children:r,classes:n,flexItem:i,light:o,orientation:a,textAlign:s,variant:c}=e,d={root:["root",t&&"absolute",c,o&&"light","vertical"===a&&"vertical",i&&"flexItem",r&&"withChildren",r&&"vertical"===a&&"withChildrenVertical","right"===s&&"vertical"!==a&&"textAlignRight","left"===s&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(d,h.V,n)})(y);return(0,u.jsx)(x,(0,i.Z)({as:m,className:(0,a.Z)(S.root,c),role:b,ref:t,ownerState:y},j,{children:s?(0,u.jsx)(g,{className:S.wrapper,ownerState:y,children:s}):null}))}));t.Z=m},6447:function(e,t,r){"use strict";var n=r(3366),i=r(7462),o=r(7294),a=r(5408),l=r(8700),s=r(9707),c=r(9766),d=r(948),h=r(1657),u=r(5893);const p=["component","direction","spacing","divider","children"];function x(e,t){const r=o.Children.toArray(e).filter(Boolean);return r.reduce(((e,n,i)=>(e.push(n),i<r.length-1&&e.push(o.cloneElement(t,{key:`separator-${i}`})),e)),[])}const g=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let r=(0,i.Z)({display:"flex"},(0,a.k9)({theme:t},(0,a.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const n=(0,l.hB)(t),i=Object.keys(t.breakpoints.values).reduce(((t,r)=>(null==e.spacing[r]&&null==e.direction[r]||(t[r]=!0),t)),{}),o=(0,a.P$)({values:e.direction,base:i}),s=(0,a.P$)({values:e.spacing,base:i}),d=(t,r)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${i=r?o[r]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,l.NA)(n,t)}};var i};r=(0,c.Z)(r,(0,a.k9)({theme:t},s,d))}return r})),m=o.forwardRef((function(e,t){const r=(0,h.Z)({props:e,name:"MuiStack"}),o=(0,s.Z)(r),{component:a="div",direction:l="column",spacing:c=0,divider:d,children:m}=o,f=(0,n.Z)(o,p),v={direction:l,spacing:c};return(0,u.jsx)(g,(0,i.Z)({as:a,ownerState:v,ref:t},f,{children:d?x(m,d):m}))}));t.Z=m},2744:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/web-development",function(){return r(4679)}])},6400:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(5893),i=r(7357),o=r(2293),a=r(9520),l=r(155),s=r(3946),c=r(6583),d=r(3599),h=r(5861),u=r(3321),p=r(5675),x=r.n(p),g=r(7294),m={src:"/prixite/_next/static/media/logo.9ae73deb.png",height:79,width:150,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAhElEQVR42mMAAasZDAIxx/f7TWxYFnlme1DM2XsMNgwMgWwMYNDIwFG9NeV00dbC/wXLk/43bwz5X7ct6H/yap9eBijgmnm45922S6v+r7+w5P+y0/P+rzqz6H//vvqVDCBQvy2HKWWNi3/WusCEys2psYUbQmPyNgSlFGyIMGdgYGAAAIzTNpsSQhv8AAAAAElFTkSuQmCC"},f=r(326),v=r(8153),A=r(1163),b=r(1664),w=r.n(b);function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(e){var t=e.children,r=e.bgImg,p=j(g.useState(null),2),b=p[0],Z=p[1],y=(0,A.useRouter)(),S=function(e){"Home"===e.text?y.push("/"):"Careers"===e.text?y.push("/careers"):"Contact Us"===e.text&&y.push("/contact-us"),Z(null)};return(0,n.jsxs)(i.Z,{className:"header-container",sx:{background:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(".concat(null===r||void 0===r?void 0:r.src,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:[(0,n.jsx)(o.Z,{position:"static",className:"header-bar",children:(0,n.jsx)(a.Z,{maxWidth:"xl",children:(0,n.jsxs)(l.Z,{disableGutters:!0,children:[(0,n.jsx)(i.Z,{sx:{mr:2,display:{xs:"none",md:"flex"},cursor:"pointer"},children:(0,n.jsx)(x(),{src:m,alt:"Prixite",onClick:function(){return y.push("/")}})}),(0,n.jsx)(i.Z,{sx:{flexGrow:1}}),(0,n.jsx)(i.Z,{sx:{flexGrow:50,display:{xs:"flex",md:"none"},cursor:"pointer"},children:(0,n.jsx)(x(),{src:m,alt:"Prixite",onClick:function(){return y.push("/")}})}),(0,n.jsxs)(i.Z,{sx:{flexGrow:0,display:{xs:"flex",md:"none"}},children:[(0,n.jsx)(s.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){Z(e.currentTarget)},color:"inherit",children:(0,n.jsx)(f.Z,{})}),(0,n.jsx)(c.Z,{id:"menu-appbar",anchorEl:b,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(b),onClose:S,sx:{display:{xs:"block",md:"none"}},children:v.L1.map((function(e,t){return(0,n.jsx)(d.Z,{onClick:function(){return S(e)},children:(0,n.jsx)(h.Z,{textAlign:"center",children:e.text})},t)}))})]}),(0,n.jsx)(i.Z,{className:"header-menu",sx:{display:{xs:"none",md:"flex"}},children:v.L1.map((function(e,t){return"Contact Us"==e.text?(0,n.jsx)(w(),{href:null===e||void 0===e?void 0:e.path,sx:{textDecoration:"none"},passHref:!0,children:(0,n.jsx)(u.Z,{className:"contact-us-button",sx:{mx:2},children:e.text})},t):(0,n.jsx)(w(),{href:null===e||void 0===e?void 0:e.path,sx:{textDecoration:"none"},passHref:!0,children:(0,n.jsx)(h.Z,{className:"header-menu-items",sx:{mx:2,color:y.asPath==e.path?"var(--primary-green)":"white"},textAlign:"center",children:e.text})},t)}))})]})})}),t]})}},4679:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),i=(r(7294),r(9008)),o=r.n(i),a=r(6400),l=r(9520),s=r(6447),c=r(7357),d=r(5861),h=r(7720),u=r(8153),p={src:"/prixite/_next/static/media/web-development.b0d5a11c.png",height:2240,width:3996,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AIrU583p8d/v9Nzw9tjv98Dk8rrl85DW6QCa2OnY6fDb7PTh8vre8vvZ6vLF0dmT2OoAn9np0ebw5vP56PT66Pb9z+DogZanldLjAIbU6JLS6Mzp89Ps9Nbw+IbG3zBwi4fO4A8XT9p8XjvWAAAAAElFTkSuQmCC"},x=r(6432),g=r(5675),m=r.n(g),f=function(){var e=u.Sr.title,t=u.Sr.header,r=u.Sr.heading,i=u.Sr.description;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:e}),(0,n.jsx)("meta",{name:"prixite",content:"Prixte"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(a.Z,{bgImg:x.Z,children:(0,n.jsx)(l.Z,{maxWidth:"xl",children:(0,n.jsxs)(s.Z,{pt:{xs:"80px",lg:"200px"},pb:{xs:"100px",lg:"200px"},direction:{xs:"column",md:"row"},spacing:5,children:[(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(d.Z,{variant:"h3",sx:{fontWeight:"bold",color:"white"},children:t}),(0,n.jsx)(h.Z,{textAlign:"left",sx:{width:"17%",marginTop:"2rem",borderColor:"var(--primary-green)",borderWidth:"1px"}}),(0,n.jsx)(d.Z,{variant:"h6",sx:{fontWeight:"600",marginTop:"1rem",color:"white"},children:r})]}),(0,n.jsx)(c.Z,{textAlign:"center",children:(0,n.jsx)(m(),{unoptimized:!0,priority:!0,src:p,width:800,height:450,alt:"service-image"})})]})})}),(0,n.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column",gap:4,py:10,opacity:.8},maxWidth:"xl",children:i.map((function(e,t){return(0,n.jsx)(d.Z,{children:e},t)}))})]})}}},function(e){e.O(0,[789,774,888,179],(function(){return t=2744,e(e.s=t);var t}));var t=e.O();_N_E=t}]);