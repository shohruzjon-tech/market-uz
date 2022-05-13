(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3776],{12270:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vendor/add-product",function(){return n(42048)}])},42048:function(e,r,n){"use strict";n.r(r);var t=n(34051),i=n.n(t),o=n(85893),c=n(55814),l=n(5950),s=n(47351),a=n(49901),u=n(69397),d=n(62623),p=n(48263),h=n(22715),x=n(63931),m=n(82580),f=n(41664),g=(n(67294),n(74231));function j(e,r,n,t,i,o,c){try{var l=e[o](c),s=l.value}catch(a){return void n(a)}l.done?r(s):Promise.resolve(s).then(t,i)}var b={name:"",stock:"",price:"",sale_price:"",description:"",tags:"",category:""},y=g.Ry().shape({name:g.Z_().required("required"),category:g.Z_().required("required"),description:g.Z_().required("required"),stock:g.Rx().required("required"),price:g.Rx().required("required"),sale_price:g.Rx().required("required"),tags:g.Ry().required("required")});r.default=function(){var e=function(){var e,r=(e=i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(r);case 1:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,i){var o=e.apply(r,n);function c(e){j(o,t,i,c,l,"next",e)}function l(e){j(o,t,i,c,l,"throw",e)}c(void 0)}))});return function(e){return r.apply(this,arguments)}}();return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(s.Z,{title:"Add Product",icon:l.Z,button:(0,o.jsx)(f.default,{href:"/vendor/products",children:(0,o.jsx)(u.Z,{color:"primary",sx:{bgcolor:"primary.light",px:"2rem"},children:"Back to Product List"})})}),(0,o.jsx)(d.Z,{sx:{p:"30px"},children:(0,o.jsx)(m.J9,{initialValues:b,validationSchema:y,onSubmit:e,children:function(e){var r=e.values,n=e.errors,t=e.touched,i=e.handleChange,l=e.handleBlur,s=e.handleSubmit;return(0,o.jsxs)("form",{onSubmit:s,children:[(0,o.jsxs)(p.ZP,{container:!0,spacing:3,children:[(0,o.jsx)(p.ZP,{item:!0,sm:6,xs:12,children:(0,o.jsx)(h.Z,{name:"name",label:"Name",placeholder:"Name",fullWidth:!0,onBlur:l,onChange:i,value:r.name||"",error:!!t.name&&!!n.name,helperText:t.name&&n.name})}),(0,o.jsx)(p.ZP,{item:!0,sm:6,xs:12,children:(0,o.jsxs)(h.Z,{name:"category",label:"Select Category",placeholder:"Category",fullWidth:!0,select:!0,onBlur:l,onChange:i,value:r.category||"",error:!!t.category&&!!n.category,helperText:t.category&&n.category,children:[(0,o.jsx)(x.Z,{value:"electronics",children:"Electronics"}),(0,o.jsx)(x.Z,{value:"fashion",children:"Fashion"})]})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,children:(0,o.jsx)(c.Z,{onChange:function(e){console.log(e)}})}),(0,o.jsx)(p.ZP,{item:!0,xs:12,children:(0,o.jsx)(h.Z,{name:"description",label:"Description",placeholder:"Description",rows:6,multiline:!0,fullWidth:!0,onBlur:l,onChange:i,value:r.description||"",error:!!t.description&&!!n.description,helperText:t.description&&n.description})}),(0,o.jsx)(p.ZP,{item:!0,sm:6,xs:12,children:(0,o.jsx)(h.Z,{name:"stock",label:"Stock",placeholder:"Stock",fullWidth:!0,onBlur:l,onChange:i,value:r.stock||"",error:!!t.stock&&!!n.stock,helperText:t.stock&&n.stock})}),(0,o.jsx)(p.ZP,{item:!0,sm:6,xs:12,children:(0,o.jsx)(h.Z,{name:"tags",label:"Tags",placeholder:"Tags",fullWidth:!0,onBlur:l,onChange:i,value:r.tags||"",error:!!t.tags&&!!n.tags,helperText:t.tags&&n.tags})}),(0,o.jsx)(p.ZP,{item:!0,sm:6,xs:12,children:(0,o.jsx)(h.Z,{name:"price",label:"Regular Price",placeholder:"Regular Price",type:"number",fullWidth:!0,onBlur:l,onChange:i,value:r.price||"",error:!!t.price&&!!n.price,helperText:t.price&&n.price})}),(0,o.jsx)(p.ZP,{item:!0,sm:6,xs:12,children:(0,o.jsx)(h.Z,{name:"sale_price",label:"Sale Price",placeholder:"Sale Price",type:"number",fullWidth:!0,onBlur:l,onChange:i,value:r.sale_price||"",error:!!t.sale_price&&!!n.sale_price,helperText:t.sale_price&&n.sale_price})})]}),(0,o.jsx)(u.Z,{variant:"contained",color:"primary",type:"submit",sx:{mt:"25px"},children:"Save product"})]})}})})]})}},55814:function(e,r,n){"use strict";var t=n(85893),i=n(67720),o=n(23972),c=n(69397),l=n(18377),s=n(67294),a=n(32512),u=n(30403);function d(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){d(e,r,n[r])}))}return e}r.Z=function(e){var r=e.onChange,n=(0,s.useCallback)((function(e){r&&r(e)}),[]),d=(0,a.uI)({onDrop:n,multiple:!0,accept:".jpeg,.jpg,.png,.gif",maxFiles:10}),h=d.getRootProps,x=d.getInputProps,m=d.isDragActive;return(0,t.jsxs)(l.Z,p({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"200px",border:"1px dashed",borderColor:"grey.400",borderRadius:"10px",bgcolor:m?"grey.200":"none",sx:{transition:"all 250ms ease-in-out",outline:"none"}},h(),{children:[(0,t.jsx)("input",p({},x())),(0,t.jsx)(u.H5,{mb:2,color:"grey.600",children:"Drag & drop product image here"}),(0,t.jsx)(i.Z,{sx:{width:"200px",mx:"auto"}}),(0,t.jsx)(o.Z,{color:"grey.600",bgcolor:m?"grey.200":"background.paper",lineHeight:"1",px:2,mt:-1.25,mb:2,children:"on"}),(0,t.jsx)(c.Z,{color:"primary",type:"button",sx:{bgcolor:"primary.light",px:"2rem",mb:"22px"},children:"Select files"}),(0,t.jsx)(u.x4,{color:"grey.600",children:"Upload 280*280 image"})]}))}},5950:function(e,r,n){"use strict";var t=n(85893),i=n(2373);n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}r.Z=function(e){return(0,t.jsxs)(i.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){o(e,r,n[r])}))}return e}({},e,{viewBox:"0 0 20 20",children:[(0,t.jsx)("path",{d:"M13.4333 1.60733L4.3575 6.25399L0.75 4.47899L9.66583 0.0764941C9.86583 -0.0251725 10.1058 -0.0251725 10.3158 0.0764941L13.4333 1.60733Z"}),(0,t.jsx)("path",{d:"M19.2402 4.47912L10.0052 9.05412L6.54687 7.34995L6.04688 7.09579L15.1327 2.44995L15.6327 2.70328L19.2402 4.47912Z"}),(0,t.jsx)("path",{d:"M9.265 10.3726L9.255 20.0001L0.41 15.3843C0.16 15.2526 0 14.9884 0 14.7043V5.79761L3.74833 7.64427V10.8909C3.74833 11.3068 4.08833 11.6518 4.49833 11.6518C4.90833 11.6518 5.24833 11.3068 5.24833 10.8909V8.39511L5.74833 8.63844L9.265 10.3726Z"}),(0,t.jsx)("path",{d:"M19.9889 5.80737L10.7639 10.3624L10.7539 19.9899L19.9989 15.1624L19.9889 5.80737Z"})]}))}},49901:function(e,r,n){"use strict";n.d(r,{Z:function(){return j}});var t=n(85893),i=n(46574),o=n(48263),c=(n(67294),n(73624)),l=n(51902),s=n(42279),a=n(41098),u=n(25709),d=n(82764),p=n(94229),h=n(45500),x=n(11163),m=n(99138),f=[{href:"/vendor/dashboard",title:"Dashboard",icon:u.Z},{href:"/vendor/products",title:"Products",icon:a.Z,count:300},{href:"/vendor/add-product",title:"Add New Product",icon:d.Z},{href:"/vendor/orders",title:"Orders",icon:h.Z,count:40},{href:"/vendor/account-settings",title:"Account Settings",icon:p.Z}],g=function(){var e=(0,x.useRouter)().pathname;return(0,t.jsx)(m.n,{sx:{px:"0px",py:"1.5rem",color:"grey.900"},children:f.map((function(r){return(0,t.jsxs)(m.W,{isCurrentPath:e.includes(r.href),href:r.href,children:[(0,t.jsxs)(s.Z,{alignItems:"center",children:[(0,t.jsx)(r.icon,{className:"nav-icon",fontSize:"small",color:"inherit",sx:{mr:"10px"}}),(0,t.jsx)("span",{children:r.title})]}),(0,t.jsx)("span",{children:r.count})]},r.title)}))})},j=function(e){var r=e.children;return(0,t.jsx)(l.Z,{navbar:(0,t.jsx)(c.Z,{}),children:(0,t.jsx)(i.Z,{sx:{my:"2rem"},children:(0,t.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,t.jsx)(o.ZP,{item:!0,lg:3,xs:12,sx:{display:{xs:"none",sm:"none",md:"block"}},children:(0,t.jsx)(g,{})}),(0,t.jsx)(o.ZP,{item:!0,lg:9,xs:12,children:r})]})})})}}},function(e){e.O(0,[4665,320,9949,2315,2274,1902,5883,9774,2888,179],(function(){return r=12270,e(e.s=r);var r}));var r=e.O();_N_E=r}]);